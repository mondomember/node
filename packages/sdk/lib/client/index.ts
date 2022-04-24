export * from "./interfaces";
export * from "./config";
export * from "./utilities";
export * from "./endpoints";

import ClientConfig from "./config";

import { createClientInstance } from "./utilities";
import { ClientInstance } from "./interfaces";

export default ClientConfig;

import { AccountResources, AccountEndpoints } from "../services/account";
import { ActivityResources, ActivityEndpoints } from "../services/activity";
import { BillingResources, BillingEndpoints } from "../services/billing";
import { CRMResources, CRMEndpoints } from "../services/crm";
import { ImportResources, ImportEndpoints } from "../services/import";
import {
  IntegrationResources,
  IntegrationEndpoints,
} from "../services/integration";
import {
  MembershipResources,
  MembershipEndpoints,
} from "../services/membership";
import { PaymentResources, PaymentEndpoints } from "../services/payment";
import { SearchResources, SearchEndpoints } from "../services/search";
import { SettingsResources, SettingsEndpoints } from "../services/settings";
import { WebhookResources, WebhookEndpoints } from "../services/webhook";

export class Mondo {
  readonly client: ClientInstance;

  readonly Account: AccountEndpoints;
  readonly Activities: ActivityEndpoints;
  readonly Billing: BillingEndpoints;
  readonly CRM: CRMEndpoints;
  readonly Imports: ImportEndpoints;
  readonly Integrations: IntegrationEndpoints;
  readonly Membership: MembershipEndpoints;
  readonly Payment: PaymentEndpoints;
  readonly Search: SearchEndpoints;
  readonly Settings: SettingsEndpoints;
  readonly Webhooks: WebhookEndpoints;

  constructor(config?: ClientConfig) {
    this.client = createClientInstance({
      ...config,
    });

    this.Account = AccountResources(this.client);
    this.Activities = ActivityResources(this.client);
    this.Billing = BillingResources(this.client);
    this.CRM = CRMResources(this.client);
    this.Imports = ImportResources(this.client);
    this.Integrations = IntegrationResources(this.client);
    this.Membership = MembershipResources(this.client);
    this.Payment = PaymentResources(this.client);
    this.Search = SearchResources(this.client);
    this.Settings = SettingsResources(this.client);
    this.Webhooks = WebhookResources(this.client);
  }
}
