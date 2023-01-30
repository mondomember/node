import { IdProperty, MetadataProperty } from "../../../../../common";
import { CustomerPropertyRequest } from "../../../../customer";
import {
  DefaultProperty,
  LabelProperty,
  TokenProperty,
  GatewayProperty,
} from "../../base";

export interface StripeSourceInsertItem
  extends Partial<IdProperty>,
    TokenProperty,
    CustomerPropertyRequest,
    GatewayProperty,
    Partial<LabelProperty>,
    Partial<DefaultProperty>,
    Partial<MetadataProperty> {}
