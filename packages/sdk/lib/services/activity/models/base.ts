import { JsonSchemaType } from "../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../models";
import { Activity } from "@mondomember/model";

export const ActivityIdSchema = constructUIDSchema([
  Activity.UIDPrefix.ACTIVITY,
]);

export const ActivityIdPropertySchema = constructUIDPropertySchema(
  Activity.UIDPrefix.ACTIVITY
);

export const PerformedBySchema = {
  type: JsonSchemaType.OBJECT,
  required: ["type", "identifier"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [
        Activity.PerformerType.SYSTEM,
        Activity.PerformerType.GUEST,
        Activity.PerformerType.IDENTITY,
        Activity.PerformerType.AUTOMATION,
        Activity.PerformerType.WORKFLOW,
        Activity.PerformerType.INTEGRATION,
      ],
    },
    identifier: {
      type: JsonSchemaType.STRING,
    },
  },
};

export const PerformedByPropertySchema = {
  performedBy: PerformedBySchema,
};

export const SourceSchema = {
  type: JsonSchemaType.STRING,
};

export const SourcePropertySchema = {
  source: SourceSchema,
};
