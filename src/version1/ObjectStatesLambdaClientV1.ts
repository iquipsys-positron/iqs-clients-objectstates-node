let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { ObjectStateV1 } from './ObjectStateV1';
import { ObjectStatesV1 } from './ObjectStatesV1';
import { IObjectStatesClientV1 } from './IObjectStatesClientV1';

export class ObjectStatesLambdaClientV1 extends CommandableLambdaClient implements IObjectStatesClientV1 {       

    constructor(config?: any) {
        super('object_states');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectStatesV1>) => void): void {
        this.callCommand( 
            'get_states', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getTimelineStates(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectStateV1[]) => void): void {
        this.callCommand( 
            'get_timeline_states', 
            correlationId,
            {
                time: time,
                filter: filter
            }, 
            callback
        );
    }

    public addState(correlationId: string, orgId: string, state: ObjectStateV1,
        callback?: (err: any) => void): void {
        this.callCommand(
            'add_state',
            correlationId,
            {
                state: state
            }, 
            callback
        );
    }

    public addStates(correlationId: string, orgId: string, states: ObjectStateV1[], 
        callback?: (err: any) => void): void {
        this.callCommand(
            'add_states',
            correlationId,
            {
                states: states
            }, 
            callback
        );
    }
    
    public deleteStates(correlationId: string, orgId: string, filter: FilterParams,
        callback?: (err: any) => void): void {
        this.callCommand(
            'delete_states', 
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }
    
}
