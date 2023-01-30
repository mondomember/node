import {
  EmailProperty,
  FirstNameProperty,
  LastNameProperty,
  PhoneNumberProperty,
} from "./base";

export interface IdentityModifyItem
  extends Partial<EmailProperty>,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    Partial<PhoneNumberProperty> {}
