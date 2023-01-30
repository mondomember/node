import { JsonSchemaType } from "../../../../../schema";
import { MetadataPropertySchema } from "../../../../../models";

export const ChargeModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...MetadataPropertySchema,
  },
};
