import { JsonSchemaType } from "../../../schema";
import {
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
  PhoneNumberPropertySchema,
} from "./base";
import { UserIdPropertySchema } from "../../workspace/resources/users";

export const IdentityResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "email"],
  properties: {
    ...UserIdPropertySchema,
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...PhoneNumberPropertySchema,
  },
};
