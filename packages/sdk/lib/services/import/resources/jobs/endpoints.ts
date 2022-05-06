import { parseTemplate } from "../../../../client/url-template";
import RowEndpoints from "./resources/rows/endpoints";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { PaginationParams } from "../../../../models";

import { JobResponseItemInterface, JobResponseListInterface } from "./models";

const PATH = {
  base: "imports/jobs",
  item: "imports/jobs/{job}",
};

type Expressions = {
  job: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class {
  readonly Rows: RowEndpoints;

  constructor(readonly client: ClientInstance) {
    this.Rows = new RowEndpoints(PATH.item, client);
  }

  /**
   * List items.
   *
   * @returns
   */
  public listItems(
    params?: ListItemsParams
  ): ClientResponse<JobResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(
    expression: Expressions
  ): ClientResponse<JobResponseItemInterface> {
    return this.client.get(parseTemplate(PATH.item).expand(expression));
  }
}
