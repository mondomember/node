import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../../../models";
import { JobIdSchema } from "../../../models";
import { RowOperationEnum } from "./interfaces";
import { Import } from "@mondomember/model";

export const RowIdSchema = constructUIDSchema([Import.UIDPrefix.ROW]);
export const RowIdPropertySchema = constructUIDPropertySchema(
  Import.UIDPrefix.ROW
);

export const JobPropertySchema = {
  job: JobIdSchema,
};

export const OperationPropertySchema = {
  operation: {
    type: JsonSchemaType.STRING,
    enum: RowOperationEnum,
  },
};

export const RowPropertySchema = {
  row: {
    type: JsonSchemaType.STRING,
  },
};

export const ErrorPropertySchema = {
  error: {
    type: JsonSchemaType.STRING,
  },
};

export const ValidationErrorsPropertySchema = {
  validationErrors: {
    type: JsonSchemaType.ARRAY,
    items: {
      type: JsonSchemaType.OBJECT,
      properties: {
        message: {
          type: JsonSchemaType.STRING,
        },
        suggestion: {
          type: JsonSchemaType.STRING,
        },
      },
    },
  },
};

export const ImportedIdPropertySchema = {
  importedId: {
    type: JsonSchemaType.STRING,
  },
};
