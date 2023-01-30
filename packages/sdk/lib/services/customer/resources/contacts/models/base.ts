import { JsonSchemaType } from "../../../../../schema";

import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { Customer } from "@mondomember/model";

export const ContactIdSchema = constructUIDSchema([Customer.UIDPrefix.CONTACT]);
export const ContactIdPropertySchema = constructUIDPropertySchema(
  Customer.UIDPrefix.CONTACT
);

export const EmailPropertySchema = {
  email: {
    type: JsonSchemaType.STRING,
    format: "email",
    minLength: 1,
  },
};

export const FirstNamePropertySchema = {
  firstName: {
    type: JsonSchemaType.STRING,
  },
};

export const LastNamePropertySchema = {
  lastName: {
    type: JsonSchemaType.STRING,
  },
};
