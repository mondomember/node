import { parseTemplate } from "../../client/url-template";
import { ClientInstance, ClientResponse } from "../../client/interfaces";
import { NestedCRUDEndpoints } from "../../client/endpoints";

import {
  ActivityInsertItemInterface,
  ActivityModifyItemInterface,
  ActivityResponseItemInterface,
  ActivityResponseListInterface,
} from "./models";

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

export class ActivityEndpoints extends NestedCRUDEndpoints<
  Expressions,
  ItemExpressions,
  ActivityInsertItemInterface,
  ActivityModifyItemInterface,
  ActivityResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  public listItems(
    expression: Expressions
  ): ClientResponse<ActivityResponseListInterface> {
    return this.client.get(parseTemplate(this.path.base).expand(expression));
  }

  /**
   * Restore a previously deleted activity item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions & ItemExpressions
  ): ClientResponse<ActivityResponseItemInterface> {
    return this.client.post(
      parseTemplate(`${this.path.item}/restore`).expand(expression)
    );
  }
}
