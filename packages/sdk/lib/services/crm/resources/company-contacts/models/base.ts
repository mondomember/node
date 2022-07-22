import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
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

export const ContactPropertySchema = {
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

export const ContactUpsertPropertySchema = {
  contact: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id"],
    properties: {
      ...ContactIdPropertySchema,
    },
  },
};

export interface ContactInterface
  extends IdPropertyInterface,
    EmailPropertyInterface,
    Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface> {}

export interface ContactUpsertInterface extends IdPropertyInterface {}

export const CompanyPropertySchema = {
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

export const CompanyUpsertPropertySchema = {
  company: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id"],
    properties: {
      ...CompanyIdPropertySchema,
    },
  },
};

export interface CompanyInterface
  extends IdPropertyInterface,
    NamePropertyInterface {}

export interface CompanyUpsertInterface extends IdPropertyInterface {}
