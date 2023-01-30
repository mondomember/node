import { AnyRowOperation } from "./interfaces";

export interface OperationProperty {
  operation: AnyRowOperation;
}

export interface JobProperty {
  job: string;
}

export interface RowProperty {
  row: string;
}

export interface ErrorProperty {
  error: string;
}

export interface ValidationErrorsProperty {
  validationErrors: {
    message: string;
    suggestion?: string;
    context?: {
      [additionalContext: string]: unknown;
    };
  }[];
}

export interface ImportedIdProperty {
  importedId: string;
}
