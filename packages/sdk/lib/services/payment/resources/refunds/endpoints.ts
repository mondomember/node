import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import {
  RefundInsertItemInterface,
  RefundModifyItemInterface,
  RefundResponseItemInterface,
  RefundResponseListInterface,
} from "./models";

import { RefundListItemsParams } from "./interfaces";

const PATH = {
  base: "payment/refunds",
  item: "payment/refunds/{refund}",
};

type Expressions = {
  refund: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  RefundInsertItemInterface,
  RefundModifyItemInterface,
  RefundResponseItemInterface
> {
  constructor(client: ClientInstance) {
    super(PATH, client);
  }

  /**
   * List items
   *
   * @returns
   */
  public listItems(
    params: RefundListItemsParams
  ): ClientResponse<RefundResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }
}
