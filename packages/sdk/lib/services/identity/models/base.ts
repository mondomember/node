import { JsonSchemaType } from "../../../schema";

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

export const PhoneNumberPropertySchema = {
  phoneNumber: {
    type: JsonSchemaType.STRING,
  },
};

export interface PhoneNumberPropertyInterface {
  phoneNumber: string;
}
