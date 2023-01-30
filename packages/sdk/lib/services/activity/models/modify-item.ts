import { JsonSchemaType } from "../../../schema";
import { NoteActivityModifyItemSchema } from "./types";

export const ActivityModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [NoteActivityModifyItemSchema],
};
