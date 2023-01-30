import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { CRUDEndpoints } from "../../../../client/endpoints";
import { RefundListItemsParams } from "./interfaces";
import { Payment } from "@mondomember/model";

const PATH = {
  base: "payment/refunds",
  item: "payment/refunds/{refund}",
};

type Expressions = {
  refund: string;
};

export default class extends CRUDEndpoints<
  Expressions,
  Payment.RefundInsertItem,
  Payment.RefundModifyItem,
  Payment.RefundResponseItem
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
  ): ClientResponse<Payment.RefundResponseList> {
    return this.client.get(PATH.base, { params });
  }
}
