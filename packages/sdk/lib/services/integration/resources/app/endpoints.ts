import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import { Integration } from "@mondomember/model";

const PATH = {
  base: "integrations/apps",
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class {
  constructor(readonly client: ClientInstance) {}

  public listItems(
    params?: ListItemsParams
  ): ClientResponse<Integration.AppResponseList> {
    return this.client.get(PATH.base, { params });
  }
}
