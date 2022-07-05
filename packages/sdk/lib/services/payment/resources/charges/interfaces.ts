import { PaginationParams } from "../../../../models";

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

export type ChargeListItemsParams = {
  pagination: PaginationParams;
  filter?: ChargeFilter;
};
