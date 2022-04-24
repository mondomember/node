import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";

import { NamePropertySchema, NamePropertyInterface } from "./base";

export const CompanyInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...NamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface CompanyInsertItemInterface
  extends NamePropertyInterface,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
