import { JsonSchemaType } from "../../../schema";
import {
  NoteActivityResponseItemSchema,
  DeltaActivityResponseItemSchema,
  OperationActivityResponseItemSchema,
} from "./types";

export const ActivityResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NoteActivityResponseItemSchema,
    DeltaActivityResponseItemSchema,
    OperationActivityResponseItemSchema,
  ],
};
