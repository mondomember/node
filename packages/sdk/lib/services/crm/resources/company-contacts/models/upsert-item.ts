import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";

export const CompanyContactUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface CompanyContactUpsertItemInterface
  extends Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
