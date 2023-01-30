import { IdProperty } from "../../../common";

import {
  EmailProperty,
  FirstNameProperty,
  LastNameProperty,
} from "../contact/base";
import { NameProperty } from "../company/base";

export interface Contact
  extends IdProperty,
    EmailProperty,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty> {}

export interface ContactUpsert extends IdProperty {}

export interface Company extends IdProperty, NameProperty {}

export interface CompanyUpsert extends IdProperty {}
