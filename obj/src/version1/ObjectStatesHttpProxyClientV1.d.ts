import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';
import { ObjectStateV1 } from './ObjectStateV1';
import { ObjectStatesV1 } from './ObjectStatesV1';
import { IObjectStatesClientV1 } from './IObjectStatesClientV1';
export declare class ObjectStatesHttpProxyClientV1 extends ClustersProxyHttpClientV1<IObjectStatesClientV1> implements IObjectStatesClientV1 {
    constructor(config?: any);
    getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ObjectStatesV1>) => void): void;
    getTimelineStates(correlationId: string, orgId: string, time: Date, filter: FilterParams, callback: (err: any, states: ObjectStateV1[]) => void): void;
    addState(correlationId: string, orgId: string, state: ObjectStateV1, callback?: (err: any) => void): void;
    addStates(correlationId: string, orgId: string, states: ObjectStateV1[], callback?: (err: any) => void): void;
    deleteStates(correlationId: string, orgId: string, filter: FilterParams, callback?: (err: any) => void): void;
}
