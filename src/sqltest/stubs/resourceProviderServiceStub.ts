/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as data from 'data';
import { IHandleFirewallRuleResult, IResourceProviderService } from 'sql/parts/accountManagement/common/interfaces';
import { IConnectionProfile } from 'sql/parts/connection/common/interfaces';

export class ResourceProviderStub implements IResourceProviderService {
	_serviceBrand: any;

	registerProvider(providerId: string, provider: data.ResourceProvider) {

	}

	unregisterProvider(ProviderId: string) {

	}

	createFirewallRule(selectedAccount: data.Account, firewallruleInfo: data.FirewallRuleInfo, resourceProviderId: string): Promise<data.CreateFirewallRuleResponse> {
		return undefined;
	}

	handleFirewallRule(errorCode: number, errorMessage: string, connectionTypeId: string): Promise<IHandleFirewallRuleResult> {
		return undefined;
	}

	showFirewallRuleDialog(connection: IConnectionProfile, ipAddress: string, resourceProviderId: string): Promise<boolean> {
		return undefined;
	}
}