import { PaginationParams } from "../../../../models";

export interface SourceCustomerFilter {
  customer?: string;
}

export type SourceFilter = SourceCustomerFilter;

export type SourceListItemsParams = {
  pagination?: PaginationParams;
  filter?: SourceFilter;
};
