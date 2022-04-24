import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  PerformedByPropertySchema,
  PerformedByPropertyInterface,
} from "../../base";
import { MessagePropertySchema, MessagePropertyInterface } from "./base";

export const NoteActivityModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...PerformedByPropertySchema,
    ...MessagePropertySchema,
  },
};

export interface NoteActivityModifyItemInterface
  extends Partial<PerformedByPropertyInterface>,
    Partial<MessagePropertyInterface> {}
