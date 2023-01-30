import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../../common";
import { PerformedByProperty, SourceProperty } from "../../base";

import { TypeProperty, MessageProperty } from "./base";

export interface NoteActivityResponseItem
  extends IdProperty,
    PerformedByProperty,
    TypeProperty,
    MessageProperty,
    SourceProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
