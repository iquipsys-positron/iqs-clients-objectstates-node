let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ObjectStatesMemoryPersistence } from 'iqs-services-objectstates-node';
import { ObjectStatesController } from 'iqs-services-objectstates-node';
import { IObjectStatesClientV1 } from '../../src/version1/IObjectStatesClientV1';
import { ObjectStatesDirectClientV1 } from '../../src/version1/ObjectStatesDirectClientV1';
import { ObjectStatesClientFixtureV1 } from './ObjectStatesClientFixtureV1';

suite('ObjectStatesDirectClientV1', ()=> {
    let client: ObjectStatesDirectClientV1;
    let fixture: ObjectStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ObjectStatesMemoryPersistence();
        let controller = new ObjectStatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-objectstates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-objectstates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ObjectStatesDirectClientV1();
        client.setReferences(references);

        fixture = new ObjectStatesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
