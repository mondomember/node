import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../../../common";
import { CustomerPropertyResponse } from "../../../../customer";
import {
  StatusProperty,
  AmountProperty,
  ChargeProperty,
  GatewayProperty,
} from "../../base";
import { PaymentResponseProperty } from "../../../charge/base";

import { StripeObjectProperty } from "./base";

export interface StripeRefundResponseItem
  extends IdProperty,
    StatusProperty,
    AmountProperty,
    ChargeProperty,
    PaymentResponseProperty,
    GatewayProperty,
    StripeObjectProperty,
    CustomerPropertyResponse,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
