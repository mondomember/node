import { JsonSchemaType } from "../../../../../schema";
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

export interface IdentityModifyItemInterface
  extends Partial<EmailPropertyInterface>,
    Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface>,
    Partial<PhoneNumberPropertyInterface> {}
