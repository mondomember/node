import { PaginationParams } from "../../../../models";

export interface ChargeCustomerFilter {
  customer: string;
}

export interface ChargeInvoiceFilter {
  invoice: string;
}

export interface ChargeSourceFilter {
  source: string;
}

export interface ChargeGatewayFilter {
  gateway: string;
}

export type ChargeFilter =
  | ChargeSourceFilter
  | ChargeInvoiceFilter
  | ChargeGatewayFilter
  | ChargeCustomerFilter;

export type ChargeListItemsParams = {
  pagination: PaginationParams;
  filter?: ChargeFilter;
};
