import { parseTemplate } from "../../../../../../client/url-template";
import { PaginationParams } from "../../../../../../models";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";
import { buildResourcePath } from "../../../../../../client/utilities";
import { NestedCRUDEndpoints } from "../../../../../../client/endpoints";
import {
  RefundInsertItemInterface,
  RefundModifyItemInterface,
  RefundResponseItemInterface,
  RefundResponseListInterface,
} from "./models";

const PATH = {
  base: "refunds",
  item: "refunds/{refund}",
};

type Expressions = {
  charge: string;
};

type RefundExpressions = Expressions & {
  refund: string;
};

type ListItemsParams = {
  pagination: PaginationParams;
};

export default class extends NestedCRUDEndpoints<
  Expressions,
  RefundExpressions,
  RefundInsertItemInterface,
  RefundModifyItemInterface,
  RefundResponseItemInterface
> {
  constructor(path: string, client: ClientInstance) {
    super(
      {
        base: buildResourcePath([path, PATH.base]),
        item: buildResourcePath([path, PATH.item]),
      },
      client
    );
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    expression: Expressions,
    params?: ListItemsParams
  ): ClientResponse<RefundResponseListInterface> {
    return this.client.get(parseTemplate(this.path.base).expand(expression), {
      params,
    });
  }
}
