import { PaginationParams } from "../../../../models";

export interface MembershipCustomerFilter {
  customer: string;
}

export interface MembershipContractFilter {
  customer: string;
  contract: string;
}

export interface MembershipInvoiceFilter {
  customer: string;
  invoice: string;
}

export type MembershipFilter = Partial<MembershipCustomerFilter> &
  Partial<MembershipContractFilter> &
  Partial<MembershipInvoiceFilter>;

export type MembershipListItemsParams = {
  pagination: PaginationParams;
  filter?: MembershipFilter;
};
