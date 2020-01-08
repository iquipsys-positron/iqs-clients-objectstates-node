let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { ObjectStatesMemoryPersistence } from 'iqs-services-objectstates-node';
import { ObjectStatesController } from 'iqs-services-objectstates-node';
import { ObjectStatesHttpServiceV1 } from 'iqs-services-objectstates-node';
import { IObjectStatesClientV1 } from '../../src/version1/IObjectStatesClientV1';
import { ObjectStatesHttpProxyClientV1 } from '../../src/version1/ObjectStatesHttpProxyClientV1';
import { ObjectStatesClientFixtureV1 } from './ObjectStatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-currdevicestates': 3000 
    },
    active_tenants: ['1']
}

suite('ObjectStatesHttpProxyClientV1', ()=> {
    let service: ObjectStatesHttpServiceV1;
    let client: ObjectStatesHttpProxyClientV1;
    let fixture: ObjectStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ObjectStatesMemoryPersistence();
        let controller = new ObjectStatesController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new ObjectStatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-objectstates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-objectstates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-objectstates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ObjectStatesHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ObjectStatesClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
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
