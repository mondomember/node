import { JsonSchemaType } from "../../../schema";
import { ExternalIdArraySchema } from "../../../models/external-id";

export const ResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["ids"],
  properties: {
    ids: ExternalIdArraySchema,
    locks: ExternalIdArraySchema,
  },
};
