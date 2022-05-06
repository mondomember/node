import { parseTemplate } from "../../../../../../client/url-template";
import { buildResourcePath } from "../../../../../../client/utilities";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";
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
    return this.client.get(parseTemplate(this.path).expand(expression), {
      params,
    });
  }
}
