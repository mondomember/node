import { JsonSchemaType } from "../../../schema";
import {
  NoteActivityResponseItemSchema,
  NoteActivityResponseItemInterface,
  DeltaActivityResponseItemSchema,
  DeltaActivityResponseItemInterface,
  OperationActivityResponseItemSchema,
  OperationActivityResponseItemInterface,
} from "./types";

export const ActivityResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NoteActivityResponseItemSchema,
    DeltaActivityResponseItemSchema,
    OperationActivityResponseItemSchema,
  ],
};

export type ActivityResponseItemInterface =
  | NoteActivityResponseItemInterface
  | DeltaActivityResponseItemInterface
  | OperationActivityResponseItemInterface;
