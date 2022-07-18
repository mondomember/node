import { PaginationParams } from "../../../../models";

export interface CompanyFilter {
  company: string;
}

export interface ContactFilter {
  contact: string;
}

export type CompanyContactFilter = Partial<CompanyFilter> &
  Partial<ContactFilter>;

export type CompanyContactListItemsParams = {
  pagination: PaginationParams;
  filter?: CompanyContactFilter;
};
