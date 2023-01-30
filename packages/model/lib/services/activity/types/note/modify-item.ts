import { PerformedByProperty } from "../../base";
import { MessageProperty } from "./base";

export interface NoteActivityModifyItem
  extends Partial<PerformedByProperty>,
    Partial<MessageProperty> {}
