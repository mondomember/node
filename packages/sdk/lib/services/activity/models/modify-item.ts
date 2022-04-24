import { JsonSchemaType } from "../../../schema";
import {
  NoteActivityModifyItemSchema,
  NoteActivityModifyItemInterface,
} from "./types";

export const ActivityModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [NoteActivityModifyItemSchema],
};

export type ActivityModifyItemInterface = NoteActivityModifyItemInterface;
