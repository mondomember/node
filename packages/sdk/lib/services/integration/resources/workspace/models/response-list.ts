import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { WorkspaceTokenResponseItemSchema } from "./response-item";

export const WorkspaceTokenResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: WorkspaceTokenResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
