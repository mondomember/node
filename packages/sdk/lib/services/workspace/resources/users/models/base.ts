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
