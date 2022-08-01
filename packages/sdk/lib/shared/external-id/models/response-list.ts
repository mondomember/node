import {
  ExternalIdArraySchema,
  ExternalIdsArrayInterface,
} from "../../../models/external-id";

export const ResponseListSchema = ExternalIdArraySchema;

export interface ResponseListInterface extends ExternalIdsArrayInterface {}
