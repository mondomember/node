import * as template from "url-template";
import { PaginationParams } from "../../../../../../models";
import { ClientInstance, ClientResponse } from "../../../../../../client";

import {
  DeliveryResponseItemInterface,
  DeliveryResponseListInterface,
} from "./models";

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
  ): ClientResponse<DeliveryResponseItemInterface> {
    return this.client.get(template.parse(this.path.item).expand(expression));
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    expression: Expressions,
    params?: ListItemsParams
  ): ClientResponse<DeliveryResponseListInterface> {
    return this.client.get(template.parse(this.path.base).expand(expression), {
      params,
    });
  }
}
