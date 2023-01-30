export type PaginationParams = {
  pageSize?: number;
  nextToken?: string;
};

export type PaginationPropertyParams = {
  pagination: PaginationParams;
};

export interface Pagination {
  nextToken?: string;
}

export interface PaginationProperty {
  pagination: Pagination;
}
