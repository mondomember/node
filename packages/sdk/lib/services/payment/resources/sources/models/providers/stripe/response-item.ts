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
  DefaultSchema,
  DefaultInterface,
  LabelSchema,
  LabelInterface,
  GatewaySchema,
  GatewayInterface,
  SourceIdPropertySchema,
} from "../../base";
import {
  StripeTypePropertySchema,
  StripeTypePropertyInterface,
  StripeCardPropertySchema,
  StripeCardPropertyInterface,
} from "./base";

const StripeCardSource = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "gateway",
    "customer",
    "type",
    "card",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...SourceIdPropertySchema,
    ...LabelSchema,
    ...GatewaySchema,
    ...CustomerPropertyResponseSchema,
    ...DefaultSchema,
    ...StripeTypePropertySchema,
    ...StripeCardPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export const StripeSourceResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [StripeCardSource],
};

interface StripeCardResponseInterface
  extends IdPropertyInterface,
    GatewayInterface,
    CustomerPropertyResponseInterface,
    StripeCardPropertyInterface,
    StripeTypePropertyInterface,
    Partial<DefaultInterface>,
    Partial<LabelInterface>,
    Partial<DeletedAtPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}

export type StripeSourceResponseItemInterface = StripeCardResponseInterface;
