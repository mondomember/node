import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { JobStatusEnum } from "./interfaces";
import { Import } from "@mondomember/model";

export const JobIdSchema = constructUIDSchema([Import.UIDPrefix.JOB]);
export const JobIdPropertySchema = constructUIDPropertySchema(
  Import.UIDPrefix.JOB
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: JobStatusEnum,
  },
};

export const FilenamePropertySchema = {
  filename: {
    type: JsonSchemaType.STRING,
  },
};

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
  },
};

export const OwnerPropertySchema = {
  owner: {
    type: JsonSchemaType.STRING,
  },
};

export const TotalCountPropertySchema = {
  totalCount: {
    type: JsonSchemaType.NUMBER,
  },
};

export const ImportCountPropertySchema = {
  importCount: {
    type: JsonSchemaType.NUMBER,
  },
};

export const ErrorCountPropertySchema = {
  errorCount: {
    type: JsonSchemaType.NUMBER,
  },
};
