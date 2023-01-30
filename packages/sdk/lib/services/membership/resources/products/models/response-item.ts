import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../models";
import { LabelPropertySchema, DescriptionPropertySchema } from "./base";
import { Membership } from "@mondomember/model";

export const ProductResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "label", "createdAt", "updatedAt"],
  properties: {
    ...constructUIDPropertySchema(Membership.UIDPrefix.PRODUCT),
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
