"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ObjectStatesNullClientV1 {
    getStates(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getTimelineStates(correlationId, orgId, time, filter, callback) {
        callback(null, []);
    }
    addState(correlationId, orgId, state, callback) {
        if (callback)
            callback(null);
    }
    addStates(correlationId, orgId, states, callback) {
        if (callback)
            callback(null);
    }
    deleteStates(correlationId, orgId, filter, callback) {
        if (callback)
            callback(null);
    }
}
exports.ObjectStatesNullClientV1 = ObjectStatesNullClientV1;
//# sourceMappingURL=ObjectStatesNullClientV1.js.map