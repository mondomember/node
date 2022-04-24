import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";

import { NamePropertySchema, NamePropertyInterface } from "./base";

export const CompanyModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...NamePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface CompanyModifyItemInterface
  extends Partial<NamePropertyInterface>,
    Partial<PropertiesPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
