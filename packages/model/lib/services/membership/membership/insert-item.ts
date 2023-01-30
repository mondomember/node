import {
  MetadataProperty,
  PropertiesProperty,
  ExternalIdsProperty,
} from "../../../common";
import { CustomerPropertyRequest } from "../../customer";
import {
  ContactsProperty,
  DescriptionProperty,
  PeriodProperty,
  ProductPropertyRequest,
} from "./base";

export interface MembershipInsertItem
  extends ProductPropertyRequest,
    CustomerPropertyRequest,
    Partial<PeriodProperty>,
    Partial<ContactsProperty>,
    Partial<DescriptionProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty>,
    Partial<ExternalIdsProperty> {}
