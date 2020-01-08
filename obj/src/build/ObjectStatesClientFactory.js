"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ObjectStatesNullClientV1_1 = require("../version1/ObjectStatesNullClientV1");
const ObjectStatesDirectClientV1_1 = require("../version1/ObjectStatesDirectClientV1");
const ObjectStatesHttpClientV1_1 = require("../version1/ObjectStatesHttpClientV1");
const ObjectStatesLambdaClientV1_1 = require("../version1/ObjectStatesLambdaClientV1");
const ObjectStatesHttpProxyClientV1_1 = require("../version1/ObjectStatesHttpProxyClientV1");
class ObjectStatesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ObjectStatesClientFactory.NullClientV1Descriptor, ObjectStatesNullClientV1_1.ObjectStatesNullClientV1);
        this.registerAsType(ObjectStatesClientFactory.DirectClientV1Descriptor, ObjectStatesDirectClientV1_1.ObjectStatesDirectClientV1);
        this.registerAsType(ObjectStatesClientFactory.HttpClientV1Descriptor, ObjectStatesHttpClientV1_1.ObjectStatesHttpClientV1);
        this.registerAsType(ObjectStatesClientFactory.LambdaClientV1Descriptor, ObjectStatesLambdaClientV1_1.ObjectStatesLambdaClientV1);
        this.registerAsType(ObjectStatesClientFactory.HttpProxyClientV1Descriptor, ObjectStatesHttpProxyClientV1_1.ObjectStatesHttpProxyClientV1);
    }
}
exports.ObjectStatesClientFactory = ObjectStatesClientFactory;
ObjectStatesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectstates', 'factory', 'default', 'default', '1.0');
ObjectStatesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectstates', 'client', 'null', 'default', '1.0');
ObjectStatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectstates', 'client', 'direct', 'default', '1.0');
ObjectStatesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectstates', 'client', 'http', 'default', '1.0');
ObjectStatesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectstates', 'client', 'lambda', 'default', '1.0');
ObjectStatesClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectstates', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=ObjectStatesClientFactory.js.map