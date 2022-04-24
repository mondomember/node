import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";

import {
  EmailPropertySchema,
  EmailPropertyInterface,
  FirstNamePropertySchema,
  FirstNamePropertyInterface,
  LastNamePropertySchema,
  LastNamePropertyInterface,
} from "./base";

export const ContactModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface ContactModifyItemInterface
  extends Partial<EmailPropertyInterface>,
    Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface>,
    Partial<PropertiesPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
