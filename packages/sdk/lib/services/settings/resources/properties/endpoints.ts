import { parseTemplate } from "../../../../client/url-template";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { buildResourcePath } from "../../../../client/utilities";
import { Settings } from "@mondomember/model";

import FieldGroupEndpoints from "./field-groups/endpoints";
import FieldEndpoints from "./fields/endpoints";

type Expressions = { objectType: string };

interface SettingsResponse {
  [Settings.Resource.BILLING_INVOICE]?: Settings.FieldGroups;
  [Settings.Resource.CRM_COMPANY]?: Settings.FieldGroups;
  [Settings.Resource.CRM_CONTACT]?: Settings.FieldGroups;
  [Settings.Resource.CRM_COMPANY_CONTACT]?: Settings.FieldGroups;
  [Settings.Resource.MEMBERSHIP_CONTRACT]?: Settings.FieldGroups;
  [Settings.Resource.MEMBERSHIP_MEMBERSHIP]?: Settings.FieldGroups;
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
  public get(
    resource: Settings.AnyResource
  ): ClientResponse<Settings.FieldGroups> {
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
    service: Settings.AnyService
  ): ClientResponse<SettingsResponse> {
    return this.client.get(this.path, { params: { service } });
  }
}
