import { parseTemplate } from "../../../../client/url-template";
import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import { Integration } from "@mondomember/model";

import HubSpot from "./resources/hubspot/endpoints";

const PATH = {
  base: "integrations/apps",
  item: "integrations/apps/{type}/{app}",
};

type ListItemsParams = {
  pagination: PaginationParams;
};

type Expressions = {
  type: Integration.AnyAppType;
  app: string | number;
};

export default class {
  readonly HubSpot: HubSpot;

  constructor(readonly client: ClientInstance) {
    this.HubSpot = new HubSpot(this.client);
  }

  public listItems(
    params?: ListItemsParams
  ): ClientResponse<Integration.AppResponseList> {
    return this.client.get(PATH.base, { params });
  }

  public deleteItem(
    expression: Expressions
  ): ClientResponse<Integration.AppResponseItem> {
    return this.client.delete(parseTemplate(`${PATH.item}`).expand(expression));
  }
}
