export * from "./interfaces";
export * from "./config";
export * from "./utilities";
export * from "./endpoints";

import ClientConfig from "./config";

import { createClientInstance } from "./utilities";
import { ClientInstance } from "./interfaces";

export default ClientConfig;

import { ActivityResources, ActivityEndpoints } from "../services/activity";
import { BillingResources, BillingEndpoints } from "../services/billing";
import { CustomerResources, CustomerEndpoints } from "../services/customer";
import { IdentityResources, IdentityEndpoints } from "../services/identity";
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
import { WorkspaceResources, WorkspaceEndpoints } from "../services/workspace";

export class Mondo {
  readonly client: ClientInstance;

  readonly Activities: ActivityEndpoints;
  readonly Billing: BillingEndpoints;
  readonly Customer: CustomerEndpoints;
  readonly Identity: IdentityEndpoints;
  readonly Imports: ImportEndpoints;
  readonly Integrations: IntegrationEndpoints;
  readonly Membership: MembershipEndpoints;
  readonly Payment: PaymentEndpoints;
  readonly Search: SearchEndpoints;
  readonly Settings: SettingsEndpoints;
  readonly Webhooks: WebhookEndpoints;
  readonly Workspace: WorkspaceEndpoints;

  constructor(config?: ClientConfig) {
    this.client = createClientInstance({
      ...config,
    });

    this.Activities = ActivityResources(this.client);
    this.Billing = BillingResources(this.client);
    this.Customer = CustomerResources(this.client);
    this.Identity = IdentityResources(this.client);
    this.Imports = ImportResources(this.client);
    this.Integrations = IntegrationResources(this.client);
    this.Membership = MembershipResources(this.client);
    this.Payment = PaymentResources(this.client);
    this.Search = SearchResources(this.client);
    this.Settings = SettingsResources(this.client);
    this.Webhooks = WebhookResources(this.client);
    this.Workspace = WorkspaceResources(this.client);
  }
}
