import * as template from "url-template";
import {
  ClientInstance,
  ClientResponse,
  NestedCRUDEndpoints,
} from "../../client";

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
    return this.client.get(template.parse(this.path.base).expand(expression));
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
      template.parse(`${this.path.item}/restore`).expand(expression)
    );
  }
}
