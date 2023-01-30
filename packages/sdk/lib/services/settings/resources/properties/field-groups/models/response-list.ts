import { JsonSchemaType, JsonSchema } from "../../../../../../schema";
import { FieldGroupResponseItemSchema } from "./response-item";

export const FieldGroupResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: FieldGroupResponseItemSchema,
    },
  },
};
