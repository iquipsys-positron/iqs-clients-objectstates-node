let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ObjectStateV1 } from '../../src/version1/ObjectStateV1';
import { IObjectStatesClientV1 } from '../../src/version1/IObjectStatesClientV1';

let time1 = new Date();

let STATE1: ObjectStateV1 = {
    org_id: '1',
    device_id: '1',
    object_id: '1',
    time: time1,
    online: 0,
    immobile: 0
};
let STATE2: ObjectStateV1 = {
    org_id: '1',
    device_id: '2',
    object_id: '2',
    time: time1,
    online: 1,
    immobile: 1
};

export class ObjectStatesClientFixtureV1 {
    private _client: IObjectStatesClientV1;
    
    constructor(client: IObjectStatesClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        async.series([
        // Create one state
            (callback) => {
                this._client.addState(
                    null,
                    '1',
                    STATE1,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Create another state
            (callback) => {
                this._client.addStates(
                    null,
                    '1',
                    [ STATE2 ],
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Get all states
            (callback) => {
                this._client.getStates(
                    null,
                    '1',
                    null,
                    new PagingParams(0,5,false),
                    (err, states) => {
                        assert.isNull(err);

                        assert.isObject(states);
                        assert.lengthOf(states.data, 1);

                        callback();
                    }
                );
            },
        // Get latest states
            (callback) => {
                this._client.getTimelineStates(
                    null,
                    '1',
                    new Date(),
                    null,
                    (err, states) => {
                        assert.isNull(err);

                        assert.isArray(states);
                        assert.lengthOf(states, 2);

                        callback();
                    }
                );
            },
        // Delete states
            (callback) => {
                this._client.deleteStates(
                    null,
                    '1',
                    null,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get deleted states
            (callback) => {
                this._client.getStates(
                    null,
                    '1',
                    null,
                    null,
                    (err, states) => {
                        assert.isNull(err);
                        
                        assert.isObject(states);
                        assert.lengthOf(states.data, 0);

                        callback();
                    }
                );
            }
        ], done);
    }
}
