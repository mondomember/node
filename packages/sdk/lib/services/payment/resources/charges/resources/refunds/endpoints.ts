import * as template from "url-template";
import {
  buildResourcePath,
  ClientInstance,
  ClientResponse,
  NestedCRUDEndpoints,
} from "../../../../../../client";

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
    expression: Expressions
  ): ClientResponse<RefundResponseListInterface> {
    return this.client.get(template.parse(this.path.base).expand(expression));
  }
}
