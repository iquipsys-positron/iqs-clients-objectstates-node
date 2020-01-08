"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ObjectStatesHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/object_states');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getStates(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_states', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getTimelineStates(correlationId, orgId, time, filter, callback) {
        this.callCommand('get_timeline_states', correlationId, {
            time: time,
            filter: filter
        }, callback);
    }
    addState(correlationId, orgId, state, callback) {
        this.callCommand('add_state', correlationId, {
            state: state
        }, callback);
    }
    addStates(correlationId, orgId, states, callback) {
        this.callCommand('add_states', correlationId, {
            states: states
        }, callback);
    }
    deleteStates(correlationId, orgId, filter, callback) {
        this.callCommand('delete_states', correlationId, {
            filter: filter
        }, callback);
    }
}
exports.ObjectStatesHttpClientV1 = ObjectStatesHttpClientV1;
//# sourceMappingURL=ObjectStatesHttpClientV1.js.map