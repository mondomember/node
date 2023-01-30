import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { CompanyResponseItemSchema } from "./response-item";

export const CompanyResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: CompanyResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
