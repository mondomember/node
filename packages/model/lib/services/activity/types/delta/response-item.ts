import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../../common";
import { PerformedByProperty, SourceProperty } from "../../base";

import { TypeInterface, DiffProperty, OperationProperty } from "./base";

export interface DeltaActivityResponseItem
  extends IdProperty,
    PerformedByProperty,
    TypeInterface,
    OperationProperty,
    DiffProperty,
    SourceProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
