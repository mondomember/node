import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { ContactResponseItemSchema } from "./response-item";

export const ContactResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ContactResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
