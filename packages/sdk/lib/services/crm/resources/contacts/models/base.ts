import { JsonSchemaType } from "../../../../../schema";

import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";

export const ContactIdSchema = constructUIDSchema([UIDPrefix.CONTACT]);
export const ContactIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.CONTACT
);

export const EmailPropertySchema = {
  email: {
    type: JsonSchemaType.STRING,
    format: "email",
    minLength: 1,
  },
};

export interface EmailPropertyInterface {
  email: string;
}

export const FirstNamePropertySchema = {
  firstName: {
    type: JsonSchemaType.STRING,
  },
};

export interface FirstNamePropertyInterface {
  firstName: string;
}

export const LastNamePropertySchema = {
  lastName: {
    type: JsonSchemaType.STRING,
  },
};

export interface LastNamePropertyInterface {
  lastName: string;
}
