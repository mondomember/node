import { JsonSchemaType } from "../schema";
export {
  PaginationParams,
  PaginationPropertyParams,
  Pagination as PaginationInterface,
  PaginationProperty as PaginationPropertyInterface,
} from "@mondomember/model";

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
