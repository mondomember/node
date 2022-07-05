import { PaginationParams } from "../../../../models";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import {
  RefundInsertItemInterface,
  RefundModifyItemInterface,
  RefundResponseItemInterface,
  RefundResponseListInterface,
} from "./models";

import { RefundFilter } from "./interfaces";

const PATH = {
  base: "payment/refunds",
  item: "payment/refunds/{refund}",
};

type Expressions = {
  refund: string;
};

export type RefundListItemsParams = {
  pagination: PaginationParams;
  filter?: RefundFilter;
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
