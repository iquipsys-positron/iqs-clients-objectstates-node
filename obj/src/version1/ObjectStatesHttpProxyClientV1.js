"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const ObjectStatesHttpClientV1_1 = require("./ObjectStatesHttpClientV1");
class ObjectStatesHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(ObjectStatesHttpClientV1_1.ObjectStatesHttpClientV1, 'iqs-services-objectstates', 30022);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getStates(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getStates(correlationId, orgId, filter, paging, callback);
        });
    }
    getTimelineStates(correlationId, orgId, time, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getTimelineStates(correlationId, orgId, time, filter, callback);
        });
    }
    addState(correlationId, orgId, state, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addState(correlationId, orgId, state, callback);
        });
    }
    addStates(correlationId, orgId, states, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addStates(correlationId, orgId, states, callback);
        });
    }
    deleteStates(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.deleteStates(correlationId, orgId, filter, callback);
        });
    }
}
exports.ObjectStatesHttpProxyClientV1 = ObjectStatesHttpProxyClientV1;
//# sourceMappingURL=ObjectStatesHttpProxyClientV1.js.map