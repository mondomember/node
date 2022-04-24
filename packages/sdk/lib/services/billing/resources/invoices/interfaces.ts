export interface InvoiceMembershipFilter {
  membership: string;
}

export interface InvoiceContractFilter {
  contract: string;
}

export interface InvoiceCustomerFilter {
  customer: string;
}

export type InvoiceFilter = Partial<InvoiceCustomerFilter> &
  Partial<InvoiceMembershipFilter> &
  Partial<InvoiceContractFilter>;
