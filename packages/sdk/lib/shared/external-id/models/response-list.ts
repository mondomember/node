import {
  ExternalIdArraySchema,
  ExternalIdsArrayInterface,
} from "../../../models/external-id";

export const ExternalIdResponseListSchema = ExternalIdArraySchema;
export interface ExternalIdResponseListInterface
  extends ExternalIdsArrayInterface {}
