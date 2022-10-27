import { JsonSchemaType } from "../../../schema";
import {
  ExternalIdArraySchema,
  ExternalIdsArrayInterface,
} from "../../../models/external-id";

export const ResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["ids"],
  properties: {
    ids: ExternalIdArraySchema,
    locks: ExternalIdArraySchema,
  },
};

export interface ResponseListInterface {
  ids: ExternalIdsArrayInterface;
  locks?: ExternalIdsArrayInterface;
}
