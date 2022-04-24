import { JsonSchemaType } from "../../../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import {
  CustomerPropertyRequestSchema,
  CustomerPropertyRequestInterface,
} from "../../../../../../crm";
import {
  DefaultSchema,
  DefaultInterface,
  LabelSchema,
  LabelInterface,
  TokenSchema,
  TokenInterface,
  GatewayInterface,
  GatewaySchema,
  SourceIdPropertySchema,
} from "../../base";

export const StripeSourceInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["token", "customer", "gateway"],
  properties: {
    ...SourceIdPropertySchema,
    ...CustomerPropertyRequestSchema,
    ...GatewaySchema,
    ...DefaultSchema,
    ...LabelSchema,
    ...TokenSchema,
    ...MetadataPropertySchema,
  },
};

export interface StripeSourceInsertItemInterface
  extends Partial<IdPropertyInterface>,
    TokenInterface,
    CustomerPropertyRequestInterface,
    GatewayInterface,
    Partial<LabelInterface>,
    Partial<DefaultInterface>,
    Partial<MetadataPropertyInterface> {}
