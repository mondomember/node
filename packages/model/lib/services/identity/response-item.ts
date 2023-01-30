import { IdProperty } from "../../common";
import {
  EmailProperty,
  FirstNameProperty,
  LastNameProperty,
  PhoneNumberProperty,
} from "./base";

export interface IdentityResponseItem
  extends IdProperty,
    EmailProperty,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    Partial<PhoneNumberProperty> {}
