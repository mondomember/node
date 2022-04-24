import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../../../models";
import { UIDPrefix } from "../../../../../constants";
import { JobIdSchema } from "../../../models";
import { RowOperationEnum, AnyRowOperation } from "./interfaces";

export const RowIdSchema = constructUIDSchema([UIDPrefix.ROW]);
export const RowIdPropertySchema = constructUIDPropertySchema(UIDPrefix.ROW);

export const JobPropertySchema = {
  job: JobIdSchema,
};

export const OperationPropertySchema = {
  operation: {
    type: JsonSchemaType.STRING,
    enum: RowOperationEnum,
  },
};

export interface OperationPropertyInterface {
  operation: AnyRowOperation;
}

export interface JobPropertyInterface {
  job: string;
}

export const RowPropertySchema = {
  row: {
    type: JsonSchemaType.STRING,
  },
};

export interface RowPropertyInterface {
  row: string;
}

export const ErrorPropertySchema = {
  error: {
    type: JsonSchemaType.STRING,
  },
};

export interface ErrorPropertyInterface {
  error: string;
}

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

export interface ValidationErrorsPropertyInterface {
  validationErrors: {
    message: string;
    suggestion?: string;
    context?: {
      [additionalContext: string]: unknown;
    };
  }[];
}

export const ImportedIdPropertySchema = {
  importedId: {
    type: JsonSchemaType.STRING,
  },
};

export interface ImportedIdPropertyInterface {
  importedId: string;
}
