import { PaginationParams } from "../../../../models";

export interface RefundCustomerFilter {
  customer: {
    id: string;
  };
}

export interface RefundChargeFilter {
  charge: string;
}

export interface RefundSourceFilter {
  source: string;
}

export interface RefundGatewayFilter {
  gateway: string;
}

export type RefundFilter =
  | RefundChargeFilter
  | RefundSourceFilter
  | RefundGatewayFilter
  | RefundCustomerFilter;

export type RefundListItemsParams = {
  pagination: PaginationParams;
  filter?: RefundFilter;
};
