import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  PerformedByPropertySchema,
  ActivityIdPropertySchema,
} from "../../base";
import { TypePropertySchema, MessagePropertySchema } from "./base";

export const NoteActivityInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "message"],
  properties: {
    ...ActivityIdPropertySchema,
    ...PerformedByPropertySchema,
    ...TypePropertySchema,
    ...MessagePropertySchema,
  },
};
