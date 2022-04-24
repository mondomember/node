import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
} from "../../../../../../../models";

import {
  RowIdPropertySchema,
  JobPropertySchema,
  JobPropertyInterface,
  RowPropertySchema,
  RowPropertyInterface,
  OperationPropertySchema,
  OperationPropertyInterface,
  ErrorPropertySchema,
  ErrorPropertyInterface,
  ValidationErrorsPropertySchema,
  ValidationErrorsPropertyInterface,
  ImportedIdPropertySchema,
  ImportedIdPropertyInterface,
} from "./base";

export const RowResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "job", "row", "operation", "createdAt"],
  properties: {
    ...RowIdPropertySchema,
    ...JobPropertySchema,
    ...RowPropertySchema,
    ...OperationPropertySchema,
    ...ErrorPropertySchema,
    ...ValidationErrorsPropertySchema,
    ...ImportedIdPropertySchema,
    ...CreatedAtPropertySchema,
  },
};

export interface RowResponseItemInterface
  extends IdPropertyInterface,
    JobPropertyInterface,
    RowPropertyInterface,
    OperationPropertyInterface,
    Partial<ErrorPropertyInterface>,
    Partial<ValidationErrorsPropertyInterface>,
    Partial<ImportedIdPropertyInterface>,
    CreatedAtPropertyInterface {}
