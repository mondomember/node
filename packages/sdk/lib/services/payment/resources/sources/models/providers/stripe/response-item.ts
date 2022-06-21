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
  ReferenceSchema,
  ReferenceInterface,
  LabelSchema,
  LabelInterface,
  GatewayPropertySchema,
  GatewayPropertyInterface,
  SourceIdPropertySchema,
} from "../../base";
import {
  StripeTypePropertySchema,
  StripeTypePropertyInterface,
  StripeObjectPropertySchema,
  StripeObjectPropertyInterface,
} from "./base";

const StripeCardSource = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "gateway",
    "customer",
    "type",
    "object",
    "reference",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...SourceIdPropertySchema,
    ...ReferenceSchema,
    ...LabelSchema,
    ...GatewayPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...DefaultSchema,
    ...StripeTypePropertySchema,
    ...StripeObjectPropertySchema,
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

export interface StripeSourceResponseItemInterface
  extends IdPropertyInterface,
    ReferenceInterface,
    GatewayPropertyInterface,
    CustomerPropertyResponseInterface,
    StripeObjectPropertyInterface,
    StripeTypePropertyInterface,
    Partial<DefaultInterface>,
    Partial<LabelInterface>,
    Partial<DeletedAtPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
