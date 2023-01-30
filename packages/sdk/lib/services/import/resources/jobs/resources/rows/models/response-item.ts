import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import { CreatedAtPropertySchema } from "../../../../../../../models";

import {
  RowIdPropertySchema,
  JobPropertySchema,
  RowPropertySchema,
  OperationPropertySchema,
  ErrorPropertySchema,
  ValidationErrorsPropertySchema,
  ImportedIdPropertySchema,
} from "./base";

export const RowResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "job", "row", "createdAt"],
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
