import { JsonSchemaType } from "../../../../../schema";

import {
  ContactIdPropertySchema as ContactIdPropertySchema,
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
} from "../../contacts/models/base";

import {
  CompanyIdPropertySchema as CompanyIdPropertySchema,
  NamePropertySchema,
} from "../../companies/models/base";

const AnyIdPropertySchema = {
  id: {
    type: JsonSchemaType.STRING,
  },
};

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
      ...AnyIdPropertySchema,
    },
  },
};

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
      ...AnyIdPropertySchema,
    },
  },
};
