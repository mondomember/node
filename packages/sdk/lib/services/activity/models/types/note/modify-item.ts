import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { PerformedByPropertySchema } from "../../base";
import { MessagePropertySchema } from "./base";

export const NoteActivityModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...PerformedByPropertySchema,
    ...MessagePropertySchema,
  },
};
