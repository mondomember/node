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
