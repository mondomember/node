import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";

import {
  ContactPropertySchema,
  ContactInterface,
  CompanyPropertySchema,
  CompanyInterface,
} from "./base";

export const CompanyContactResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["company", "contact", "createdAt", "updatedAt"],
  properties: {
    ...ContactPropertySchema,
    ...CompanyPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface CompanyContactResponseItemInterface
  extends CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {
  contact: ContactInterface;
  company: CompanyInterface;
}
