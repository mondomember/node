import { parseTemplate } from "../../../../../../client/url-template";
import { PaginationParams } from "../../../../../../models";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";

import { Webhook } from "@mondomember/model";

type Path = {
  base: string;
  item: string;
};

const PATH = {
  base: "deliveries",
  item: "{delivery}",
};

type Expressions = {
  subscription: string;
};

type DeliveryExpressions = Expressions & {
  delivery: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class {
  readonly path: Path;

  constructor(path: string, readonly client: ClientInstance) {
    this.path = {
      base: `${path}/${PATH.base}`,
      item: `${path}/${PATH.base}/${PATH.item}`,
    };
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(
    expression: DeliveryExpressions
  ): ClientResponse<Webhook.DeliveryResponseItem> {
    return this.client.get(parseTemplate(this.path.item).expand(expression));
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    expression: Expressions,
    params?: ListItemsParams
  ): ClientResponse<Webhook.DeliveryResponseList> {
    return this.client.get(parseTemplate(this.path.base).expand(expression), {
      params,
    });
  }
}
