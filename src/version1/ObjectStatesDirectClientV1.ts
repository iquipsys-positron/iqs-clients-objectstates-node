import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IObjectStatesClientV1 } from './IObjectStatesClientV1';
//import { IObjectStatesController } from 'iqs-services-objectstates-node';
import { ObjectStateV1 } from './ObjectStateV1';
import { ObjectStatesV1 } from './ObjectStatesV1';

export class ObjectStatesDirectClientV1 extends DirectClient<any> implements IObjectStatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-objectstates", "controller", "*", "*", "*"))
    }

    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectStatesV1>) => void): void {
        let timing = this.instrument(correlationId, 'object_states.get_states');
        this._controller.getStates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getTimelineStates(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectStateV1[]) => void): void {
        let timing = this.instrument(correlationId, 'object_states.get_timeline_states');
        this._controller.getTimelineStates(correlationId, time, filter, (err, states) => {
            timing.endTiming();
            callback(err, states);
        });
    }

    public addState(correlationId: string, orgId: string, state: ObjectStateV1, 
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'object_states.add_state');
        this._controller.addState(correlationId, state, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public addStates(correlationId: string, orgId: string, states: ObjectStateV1[], 
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'object_states.add_states');
        this._controller.addStates(correlationId, states, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }
    
    public deleteStates(correlationId: string, orgId: string, filter: FilterParams,
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'object_states.delete_states');
        this._controller.deleteStates(correlationId, filter, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }
}