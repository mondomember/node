import { JsonSchemaType } from "../../../schema";
import { constructUIDSchema } from "../../../models";
import { CustomerType, UIDPrefix } from "../constants";

export const CompanyCustomerResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type", "name"],
  properties: {
    id: constructUIDSchema([UIDPrefix.COMPANY]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [CustomerType.COMPANY],
    },
    name: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
  },
};

export const ContactCustomerResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type", "email"],
  properties: {
    id: constructUIDSchema([UIDPrefix.CONTACT]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [CustomerType.CONTACT],
    },
    email: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
    firstName: {
      type: JsonSchemaType.STRING,
    },
    lastName: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
  },
};

export const CustomerResponseSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [CompanyCustomerResponseSchema, ContactCustomerResponseSchema],
};

export const CustomerPropertyResponseSchema = {
  customer: CustomerResponseSchema,
};

export interface CompanyCustomerResponseInterface {
  id: string;
  type: typeof CustomerType.COMPANY;

  name: string;
}

export interface ContactCustomerResponseInterface {
  id: string;
  type: typeof CustomerType.CONTACT;

  email: string;
  firstName?: string;
  lastName?: string;
}

export type CustomerResponseType =
  | CompanyCustomerResponseInterface
  | ContactCustomerResponseInterface;

export interface CustomerPropertyResponseInterface {
  customer: CustomerResponseType;
}

export const CustomerRequestSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id"],
  properties: {
    id: constructUIDSchema([UIDPrefix.COMPANY, UIDPrefix.CONTACT]),
  },
};

export const CustomerPropertyRequestSchema = {
  customer: CustomerRequestSchema,
};

export interface CustomerRequestType {
  id: string;
}

export interface CustomerPropertyRequestInterface {
  customer: CustomerRequestType;
}
