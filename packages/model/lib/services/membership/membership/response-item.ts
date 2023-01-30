import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
  PropertiesProperty,
} from "../../../common";
import { CustomerPropertyResponse } from "../../customer";
import {
  StatusProperty,
  ContactsProperty,
  DescriptionProperty,
  PeriodProperty,
  ProductPropertyResponse,
  IsDelegatedProperty,
} from "./base";

export interface MembershipResponseItem
  extends IdProperty,
    StatusProperty,
    CustomerPropertyResponse,
    ProductPropertyResponse,
    PeriodProperty,
    Partial<ContactsProperty>,
    Partial<DescriptionProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}

export interface DelegatedMembershipResponseItem
  extends IdProperty,
    StatusProperty,
    CustomerPropertyResponse,
    ProductPropertyResponse,
    PeriodProperty,
    IsDelegatedProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
