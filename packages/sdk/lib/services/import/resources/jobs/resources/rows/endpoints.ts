import * as template from "url-template";

import {
  buildResourcePath,
  ClientInstance,
  ClientResponse,
} from "../../../../../../client";
import { PaginationParams } from "../../../../../../models";

import { RowResponseListInterface } from "./models";

const PATH = {
  base: "rows",
};

type Expressions = {
  job: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class {
  private path: string;

  constructor(path: string, readonly client: ClientInstance) {
    this.path = buildResourcePath([path, PATH.base]);
  }

  /**
   * List items.
   *
   * @returns
   */
  public listItems(
    expression: Expressions,
    params?: ListItemsParams
  ): ClientResponse<RowResponseListInterface> {
    return this.client.get(template.parse(this.path).expand(expression), {
      params,
    });
  }
}
