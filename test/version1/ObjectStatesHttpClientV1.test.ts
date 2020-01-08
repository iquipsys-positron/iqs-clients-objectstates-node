let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ObjectStatesMemoryPersistence } from 'iqs-services-objectstates-node';
import { ObjectStatesController } from 'iqs-services-objectstates-node';
import { ObjectStatesHttpServiceV1 } from 'iqs-services-objectstates-node';
import { IObjectStatesClientV1 } from '../../src/version1/IObjectStatesClientV1';
import { ObjectStatesHttpClientV1 } from '../../src/version1/ObjectStatesHttpClientV1';
import { ObjectStatesClientFixtureV1 } from './ObjectStatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ObjectStatesHttpClientV1', ()=> {
    let service: ObjectStatesHttpServiceV1;
    let client: ObjectStatesHttpClientV1;
    let fixture: ObjectStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ObjectStatesMemoryPersistence();
        let controller = new ObjectStatesController();

        service = new ObjectStatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-objectstates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-objectstates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-objectstates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ObjectStatesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ObjectStatesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
