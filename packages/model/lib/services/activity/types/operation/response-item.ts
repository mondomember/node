import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../../common";
import { PerformedByProperty, SourceProperty } from "../../base";

import {
  TypeProperty,
  MessageProperty,
  OperationProperty,
  TargetProperty,
} from "./base";

export interface OperationActivityResponseItem
  extends IdProperty,
    PerformedByProperty,
    TypeProperty,
    MessageProperty,
    OperationProperty,
    TargetProperty,
    SourceProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
