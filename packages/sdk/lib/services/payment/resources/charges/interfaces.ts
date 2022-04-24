export interface ChargeCustomerFilter {
  customer: {
    type: "Company" | "Contact";
    id: string;
  };
}

export interface ChargeInvoiceFilter {
  invoice: string;
}

export type ChargeFilter = ChargeInvoiceFilter | ChargeCustomerFilter;
