import { JsonSchemaType } from "../../../schema";
import { PaginationPropertySchema } from "../../../models";
import { TenantResponseItemSchema } from "./response-item";

export const TenantResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: TenantResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
