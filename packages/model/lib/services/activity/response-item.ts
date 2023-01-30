import {
  NoteActivityResponseItem,
  DeltaActivityResponseItem,
  OperationActivityResponseItem,
} from "./types";

export type ActivityResponseItem =
  | NoteActivityResponseItem
  | DeltaActivityResponseItem
  | OperationActivityResponseItem;
