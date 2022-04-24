import { JsonSchemaType } from "../schema";

export type PaginationParams = {
  pageSize?: number;
  nextToken?: string;
};

export type PaginationPropertyParams = {
  pagination: PaginationParams;
};

/**
 * "pagination": {
 *    "nextToken": "[[TOKEN_VALUE]]"
 * }
 */
export const PaginationSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    nextToken: {
      type: JsonSchemaType.STRING,
    },
  },
};

export const PaginationPropertySchema = {
  pagination: PaginationSchema,
};

export interface PaginationInterface {
  nextToken?: string;
}

export interface PaginationPropertyInterface {
  pagination: PaginationInterface;
}
