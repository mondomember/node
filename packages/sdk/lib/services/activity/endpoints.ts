import { parseTemplate } from "../../client/url-template";
import { PaginationParams } from "../../models";

import { ClientInstance, ClientResponse } from "../../client/interfaces";
import { NestedCRUDEndpoints } from "../../client/endpoints";

import { Activity } from "@mondomember/model";

const PATH = {
  base: "activities/{source}",
  item: "activities/{source}/{activity}",
};

type Expressions = {
  source: string;
};

type ItemExpressions = {
  activity: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export class ActivityEndpoints extends NestedCRUDEndpoints<
  Expressions,
  ItemExpressions,
  Activity.ActivityInsertItem,
  Activity.ActivityModifyItem,
  Activity.ActivityResponseItem
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  public listItems(
    expression: Expressions,
    params?: ListItemsParams
  ): ClientResponse<Activity.ActivityResponseList> {
    return this.client.get(parseTemplate(this.path.base).expand(expression), {
      params,
    });
  }

  /**
   * Restore a previously deleted activity item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions & ItemExpressions
  ): ClientResponse<Activity.ActivityResponseItem> {
    return this.client.post(
      parseTemplate(`${this.path.item}/restore`).expand(expression)
    );
  }
}
