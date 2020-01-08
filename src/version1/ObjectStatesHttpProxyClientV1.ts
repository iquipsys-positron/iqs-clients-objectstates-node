import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { ObjectStateV1 } from './ObjectStateV1';
import { ObjectStatesV1 } from './ObjectStatesV1';
import { IObjectStatesClientV1 } from './IObjectStatesClientV1';
import { ObjectStatesHttpClientV1 } from './ObjectStatesHttpClientV1';

export class ObjectStatesHttpProxyClientV1 extends ClustersProxyHttpClientV1<IObjectStatesClientV1>
    implements IObjectStatesClientV1 {       
    
    constructor(config?: any) {
        super(ObjectStatesHttpClientV1, 'iqs-services-objectstates', 30022);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectStatesV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getStates(correlationId, orgId, filter, paging, callback);
        });
    }

    public getTimelineStates(correlationId: string, orgId: string, time: Date, filter: FilterParams,
        callback: (err: any, states: ObjectStateV1[]) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getTimelineStates(correlationId, orgId, time, filter, callback);
        });
    }

    public addState(correlationId: string, orgId: string, state: ObjectStateV1,
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addState(correlationId, orgId, state, callback);
        });
    }

    public addStates(correlationId: string, orgId: string, states: ObjectStateV1[], 
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addStates(correlationId, orgId, states, callback);
        });
    }
    
    public deleteStates(correlationId: string, orgId: string, filter: FilterParams,
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.deleteStates(correlationId, orgId, filter, callback);
        });
    }
    
}
