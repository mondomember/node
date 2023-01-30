import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { CompanyContactResponseItemSchema } from "./response-item";

export const CompanyContactResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: CompanyContactResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
