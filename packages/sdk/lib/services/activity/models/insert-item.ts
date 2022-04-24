import { JsonSchemaType } from "../../../schema";
import {
  NoteActivityInsertItemSchema,
  NoteActivityInsertItemInterface,
} from "./types";

export const ActivityInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [NoteActivityInsertItemSchema],
};

export type ActivityInsertItemInterface = NoteActivityInsertItemInterface;
