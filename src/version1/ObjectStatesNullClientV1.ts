import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IObjectStatesClientV1 } from './IObjectStatesClientV1';
import { ObjectStatesV1 } from './ObjectStatesV1';
import { ObjectStateV1 } from './ObjectStateV1';

export class ObjectStatesNullClientV1 implements IObjectStatesClientV1 {
            
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectStatesV1>) => void): void {
        callback(null, new DataPage<ObjectStatesV1>([], 0));
    }

    public getTimelineStates(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectStateV1[]) => void): void {
        callback(null, []);
    }

    public addState(correlationId: string, orgId: string, state: ObjectStateV1, 
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

    public addStates(correlationId: string, orgId: string, states: ObjectStateV1[], 
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }
    
    public deleteStates(correlationId: string, orgId: string, filter: FilterParams,
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }
}