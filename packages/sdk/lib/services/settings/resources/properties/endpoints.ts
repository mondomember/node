import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { buildResourcePath } from "../../../../client/utilities";
import { FieldGroupsInterface } from "../../models";

import FieldGroupEndpoints from "./field-groups/endpoints";
import FieldEndpoints from "./fields/endpoints";
import { AnyPropertiesService } from "../../constants";

type Expressions = { objectType: string };

interface SettingsResponseInterface {
  "Billing.Invoice"?: FieldGroupsInterface;
  "CRM.Company"?: FieldGroupsInterface;
  "CRM.Contact"?: FieldGroupsInterface;
  "CRM.Company-Contact"?: FieldGroupsInterface;
  "Membership.Contract"?: FieldGroupsInterface;
  "Membership.Membership"?: FieldGroupsInterface;
}

/**
 * A collection of settings endpoints.
 */
export default class {
  readonly path: string;
  readonly FieldGroups: FieldGroupEndpoints<Expressions>;
  readonly Fields: FieldEndpoints<Expressions>;

  constructor(readonly client: ClientInstance) {
    this.path = buildResourcePath(["settings/properties"]);

    this.FieldGroups = new FieldGroupEndpoints(
      `${this.path}/{objectType}`,
      client
    );
    this.Fields = new FieldEndpoints(`${this.path}/{objectType}`, client);
  }

  /**
   * Get properties for a module/service
   *
   * @param expression
   * @returns
   */
  public listItems(
    service: AnyPropertiesService
  ): ClientResponse<SettingsResponseInterface> {
    return this.client.get(this.path, { params: { service } });
  }
}
