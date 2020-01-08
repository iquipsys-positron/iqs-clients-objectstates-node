import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ObjectStatesNullClientV1 } from '../version1/ObjectStatesNullClientV1';
import { ObjectStatesDirectClientV1 } from '../version1/ObjectStatesDirectClientV1';
import { ObjectStatesHttpClientV1 } from '../version1/ObjectStatesHttpClientV1';
import { ObjectStatesLambdaClientV1 } from '../version1/ObjectStatesLambdaClientV1';
import { ObjectStatesHttpProxyClientV1 } from '../version1/ObjectStatesHttpProxyClientV1';

export class ObjectStatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-objectstates', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-objectstates', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-objectstates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-objectstates', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-objectstates', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-objectstates', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ObjectStatesClientFactory.NullClientV1Descriptor, ObjectStatesNullClientV1);
		this.registerAsType(ObjectStatesClientFactory.DirectClientV1Descriptor, ObjectStatesDirectClientV1);
		this.registerAsType(ObjectStatesClientFactory.HttpClientV1Descriptor, ObjectStatesHttpClientV1);
		this.registerAsType(ObjectStatesClientFactory.LambdaClientV1Descriptor, ObjectStatesLambdaClientV1);
		this.registerAsType(ObjectStatesClientFactory.HttpProxyClientV1Descriptor, ObjectStatesHttpProxyClientV1);
	}
	
}
