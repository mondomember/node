import { PaginationParams } from "../../../../models";

export interface ContractMembershipFilter {
  membership: string;
}

export interface ContractInvoiceFilter {
  invoice: string;
}

export interface ContractCustomerFilter {
  customer: string;
}

export type ContractFilter = Partial<ContractCustomerFilter> &
  Partial<ContractMembershipFilter> &
  Partial<ContractInvoiceFilter>;

export type ContractListItemsParams = {
  pagination: PaginationParams;
  filter?: ContractFilter;
};
