import { JsonSchemaType } from "../../../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import {
  CustomerPropertyResponseSchema,
  CustomerPropertyResponseInterface,
} from "../../../../../../crm";
import {
  StatusPropertySchema,
  StatusPropertyInterface,
  RefundableAmountPropertySchema,
  RefundableAmountPropertyInterface,
  AmountPropertySchema,
  AmountPropertyInterface,
  SourcePropertySchema,
  SourcePropertyInterface,
  InvoicePropertySchema,
  InvoicePropertyInterface,
  ReferencePropertySchema,
  ReferencePropertyInterface,
  GatewayPropertySchema,
  GatewayPropertyInterface,
  ChargeIdPropertySchema,
} from "../../base";

import { StripeObjectSchema, StripeObjectInterface } from "./base";

export const StripeChargeResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "invoice",
    "amount",
    "customer",
    "source",
    "gateway",
    "object",
    "reference",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...ChargeIdPropertySchema,
    ...StatusPropertySchema,
    ...RefundableAmountPropertySchema,
    ...AmountPropertySchema,
    ...SourcePropertySchema,
    ...GatewayPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...InvoicePropertySchema,
    ...StripeObjectSchema,
    ...ReferencePropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface StripeChargeResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    InvoicePropertyInterface,
    CustomerPropertyResponseInterface,
    SourcePropertyInterface,
    GatewayPropertyInterface,
    AmountPropertyInterface,
    StripeObjectInterface,
    ReferencePropertyInterface,
    RefundableAmountPropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
