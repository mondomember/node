import { IdProperty, CreatedAtProperty } from "../../../common";

import {
  JobProperty,
  RowProperty,
  OperationProperty,
  ErrorProperty,
  ValidationErrorsProperty,
  ImportedIdProperty,
} from "./base";

export interface RowResponseItem
  extends IdProperty,
    JobProperty,
    RowProperty,
    Partial<OperationProperty>,
    Partial<ErrorProperty>,
    Partial<ValidationErrorsProperty>,
    Partial<ImportedIdProperty>,
    CreatedAtProperty {}
