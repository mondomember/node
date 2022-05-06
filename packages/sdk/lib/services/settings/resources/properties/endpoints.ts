import { parseTemplate } from "../../../../client/url-template";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { buildResourcePath } from "../../../../client/utilities";
import { FieldGroupsInterface } from "../../models";

import FieldGroupEndpoints from "./field-groups/endpoints";
import FieldEndpoints from "./fields/endpoints";
import { AnyService, AnyResource, Resource } from "../../constants";

type Expressions = { objectType: string };

interface SettingsResponseInterface {
  [Resource.BILLING_INVOICE]?: FieldGroupsInterface;
  [Resource.CRM_COMPANY]?: FieldGroupsInterface;
  [Resource.CRM_CONTACT]?: FieldGroupsInterface;
  [Resource.CRM_COMPANY_CONTACT]?: FieldGroupsInterface;
  [Resource.MEMBERSHIP_CONTRACT]?: FieldGroupsInterface;
  [Resource.MEMBERSHIP_MEMBERSHIP]?: FieldGroupsInterface;
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
   * Get for a specific resource
   *
   * @param expression
   * @returns
   */
  public get(resource: AnyResource): ClientResponse<FieldGroupsInterface> {
    return this.client.get(
      parseTemplate(`${this.path}/{resource}`).expand({ resource })
    );
  }

  /**
   * Get properties for a module/service
   *
   * @param expression
   * @returns
   */
  public listItems(
    service: AnyService
  ): ClientResponse<SettingsResponseInterface> {
    return this.client.get(this.path, { params: { service } });
  }
}
