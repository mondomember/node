import { IdProperty } from "../../../../common";
import { PerformedByProperty } from "../../base";
import { TypeProperty, MessageProperty } from "./base";

export interface NoteActivityInsertItem
  extends TypeProperty,
    MessageProperty,
    Partial<IdProperty>,
    Partial<PerformedByProperty> {}
