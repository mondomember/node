import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import {
  EmailPropertySchema,
  EmailPropertyInterface,
  FirstNamePropertySchema,
  FirstNamePropertyInterface,
  LastNamePropertySchema,
  LastNamePropertyInterface,
  PhoneNumberPropertySchema,
  PhoneNumberPropertyInterface,
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

export interface IdentityResponseItemInterface
  extends IdPropertyInterface,
    EmailPropertyInterface,
    Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface>,
    Partial<PhoneNumberPropertyInterface> {}
