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
  DefaultProperty,
  ReferenceProperty,
  LabelProperty,
  GatewayProperty,
} from "../../base";
import { StripeTypeProperty, StripeObjectProperty } from "./base";

export interface StripeSourceResponseItem
  extends IdProperty,
    ReferenceProperty,
    GatewayProperty,
    CustomerPropertyResponse,
    StripeObjectProperty,
    StripeTypeProperty,
    Partial<DefaultProperty>,
    Partial<LabelProperty>,
    Partial<DeletedAtProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
