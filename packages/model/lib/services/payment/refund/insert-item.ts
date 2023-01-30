import { IdProperty, MetadataProperty } from "../../../common";
import { AmountProperty, ChargeProperty } from "./base";

export interface RefundInsertItem
  extends ChargeProperty,
    Partial<IdProperty>,
    Partial<AmountProperty>,
    Partial<MetadataProperty> {}
