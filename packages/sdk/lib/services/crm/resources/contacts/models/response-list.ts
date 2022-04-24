import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  ContactResponseItemSchema,
  ContactResponseItemInterface,
} from "./response-item";

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

export interface ContactResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ContactResponseItemInterface[];
}
