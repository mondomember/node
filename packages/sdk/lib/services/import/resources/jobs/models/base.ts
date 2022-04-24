import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { JobStatusEnum, AnyJobStatus } from "./interfaces";
import { UIDPrefix } from "../../../constants";

export const JobIdSchema = constructUIDSchema([UIDPrefix.JOB]);
export const JobIdPropertySchema = constructUIDPropertySchema(UIDPrefix.JOB);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: JobStatusEnum,
  },
};

export interface StatusPropertyInterface {
  status: AnyJobStatus;
}

export const FilenamePropertySchema = {
  filename: {
    type: JsonSchemaType.STRING,
  },
};

export interface FilenamePropertyInterface {
  filename: string;
}

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
  },
};

export interface TypePropertyInterface {
  type: string;
}

export const OwnerPropertySchema = {
  owner: {
    type: JsonSchemaType.STRING,
  },
};

export interface OwnerPropertyInterface {
  owner: string;
}

export const TotalCountPropertySchema = {
  totalCount: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface TotalCountPropertyInterface {
  totalCount: number;
}

export const ImportCountPropertySchema = {
  importCount: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface ImportCountPropertyInterface {
  importCount: number;
}

export const ErrorCountPropertySchema = {
  errorCount: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface ErrorCountPropertyInterface {
  errorCount: number;
}
