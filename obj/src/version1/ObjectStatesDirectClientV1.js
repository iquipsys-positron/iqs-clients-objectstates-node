"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ObjectStatesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-objectstates", "controller", "*", "*", "*"));
    }
    getStates(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'object_states.get_states');
        this._controller.getStates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getTimelineStates(correlationId, orgId, time, filter, callback) {
        let timing = this.instrument(correlationId, 'object_states.get_timeline_states');
        this._controller.getTimelineStates(correlationId, time, filter, (err, states) => {
            timing.endTiming();
            callback(err, states);
        });
    }
    addState(correlationId, orgId, state, callback) {
        let timing = this.instrument(correlationId, 'object_states.add_state');
        this._controller.addState(correlationId, state, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    addStates(correlationId, orgId, states, callback) {
        let timing = this.instrument(correlationId, 'object_states.add_states');
        this._controller.addStates(correlationId, states, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    deleteStates(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'object_states.delete_states');
        this._controller.deleteStates(correlationId, filter, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.ObjectStatesDirectClientV1 = ObjectStatesDirectClientV1;
//# sourceMappingURL=ObjectStatesDirectClientV1.js.map