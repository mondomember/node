import { JsonSchemaType } from "../../../../../schema";
import { UUIDSchema, UUIDPropertySchema } from "../../../../../models";

export const UserIdSchema = UUIDSchema;
export const UserIdPropertySchema = UUIDPropertySchema;

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
