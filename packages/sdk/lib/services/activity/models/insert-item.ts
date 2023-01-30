import { JsonSchemaType } from "../../../schema";
import { NoteActivityInsertItemSchema } from "./types";

export const ActivityInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [NoteActivityInsertItemSchema],
};
