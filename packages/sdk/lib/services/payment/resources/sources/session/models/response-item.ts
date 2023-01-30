import { JsonSchemaType } from "../../../../../../schema";
import { SourceIdSchema } from "../../models/base";

export const SourceSessionResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["key"],
  properties: {
    key: {
      type: JsonSchemaType.STRING,
    },
    source: SourceIdSchema,
  },
};
