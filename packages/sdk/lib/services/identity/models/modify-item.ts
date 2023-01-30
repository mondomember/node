import { JsonSchemaType } from "../../../schema";
import {
  EmailPropertySchema,
  FirstNamePropertySchema,
  LastNamePropertySchema,
  PhoneNumberPropertySchema,
} from "./base";

export const IdentityModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...PhoneNumberPropertySchema,
  },
};
