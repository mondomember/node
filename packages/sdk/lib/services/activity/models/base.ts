import { JsonSchemaType } from "../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../models";
import { PerformerType, AnyPerformerType } from "./constants";
import { UIDPrefix } from "../constants";
import {} from "./constants";

export const ActivityIdSchema = constructUIDSchema([UIDPrefix.ACTIVITY]);

export const ActivityIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.ACTIVITY
);

export const PerformedBySchema = {
  type: JsonSchemaType.OBJECT,
  required: ["type", "identifier"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [
        PerformerType.SYSTEM,
        PerformerType.IDENTITY,
        PerformerType.AUTOMATION,
        PerformerType.WORKFLOW,
      ],
    },
    identifier: {
      type: JsonSchemaType.STRING,
    },
  },
};

export type PerformedByType = {
  identifier: string;
  type: AnyPerformerType;
};

export interface PerformedByPropertyInterface {
  performedBy: PerformedByType;
}

export const PerformedByPropertySchema = {
  performedBy: PerformedBySchema,
};

export const SourceSchema = {
  type: JsonSchemaType.STRING,
};

export const SourcePropertySchema = {
  source: SourceSchema,
};

export interface SourcePropertyInterface {
  source: string;
}
