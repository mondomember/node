import { JsonSchemaType } from "../../../schema";

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

export const PhoneNumberPropertySchema = {
  phoneNumber: {
    type: JsonSchemaType.STRING,
  },
};
