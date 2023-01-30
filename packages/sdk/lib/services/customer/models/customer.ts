import { JsonSchemaType } from "../../../schema";
import { constructUIDSchema } from "../../../models";
import { Customer } from "@mondomember/model";

export const CompanyCustomerResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type", "name"],
  properties: {
    id: constructUIDSchema([Customer.UIDPrefix.COMPANY]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [Customer.CustomerType.COMPANY],
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
    id: constructUIDSchema([Customer.UIDPrefix.CONTACT]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [Customer.CustomerType.CONTACT],
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

export const CustomerRequestSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id"],
  properties: {
    id: constructUIDSchema([
      Customer.UIDPrefix.COMPANY,
      Customer.UIDPrefix.CONTACT,
    ]),
  },
};

export const CustomerPropertyRequestSchema = {
  customer: CustomerRequestSchema,
};
