import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
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
  ContactIdPropertySchema as ContactIdPropertySchema,
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
} from "../../contacts/models/base";
import {
  EmailPropertyInterface,
  FirstNamePropertyInterface,
  LastNamePropertyInterface,
} from "../../contacts/models/base";
import {
  CompanyIdPropertySchema as CompanyIdPropertySchema,
  NamePropertySchema,
} from "../../companies/models/base";
import { NamePropertyInterface } from "../../companies/models/interfaces";

const ContactPropertySchema = {
  contact: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "email"],
    properties: {
      ...ContactIdPropertySchema,
      ...EmailPropertySchema,
      ...FirstNamePropertySchema,
      ...LastNamePropertySchema,
    },
  },
};

interface ContactPropertyInterface
  extends IdPropertyInterface,
    EmailPropertyInterface,
    Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface> {}

const CompanyPropertySchema = {
  company: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "name"],
    properties: {
      ...CompanyIdPropertySchema,
      ...NamePropertySchema,
    },
  },
};

interface CompanyPropertyInterface
  extends IdPropertyInterface,
    NamePropertyInterface {}

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
  contact: ContactPropertyInterface;
  company: CompanyPropertyInterface;
}
