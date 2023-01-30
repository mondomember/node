import { JsonSchemaType } from "../schema";
import { UIDPrefix } from "@mondomember/model";

export const constructUIDSchema = (prefix?: string[]) => ({
  type: JsonSchemaType.STRING,
  pattern: `^${!!prefix ? "(" + prefix.join("|") + ")_" : ""}[a-zA-Z0-9]{27}$`,
});

export const constructUIDPropertySchema = (prefix?: string) => ({
  id: constructUIDSchema(!!prefix ? [prefix] : undefined),
});

export const constructJWTSchema = () => ({
  type: JsonSchemaType.STRING,
  pattern: `^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*`,
});

export const FieldIdSchema = constructUIDSchema([UIDPrefix.FIELD]);
export const FieldIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.FIELD
);

export const UUIDSchema = {
  type: JsonSchemaType.STRING,
  format: "uuid",
};

export const UUIDPropertySchema = {
  id: UUIDSchema,
};

export const CreatedAtSchema = {
  type: JsonSchemaType.STRING,
  format: "date-time",
};

export const CreatedAtPropertySchema = {
  createdAt: CreatedAtSchema,
};

export const UpdatedAtSchema = {
  type: JsonSchemaType.STRING,
  format: "date-time",
};

export const UpdatedAtPropertySchema = {
  updatedAt: UpdatedAtSchema,
};

export const DeletedAtSchema = {
  type: JsonSchemaType.STRING,
  format: "date-time",
};

export const DeletedAtPropertySchema = {
  deletedAt: DeletedAtSchema,
};

export const LastUpdatedSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    at: { type: JsonSchemaType.STRING },
    by: {
      type: JsonSchemaType.OBJECT,
      additionalProperties: false,
      required: ["type", "identifier"],
      properties: {
        type: {
          type: JsonSchemaType.STRING,
          enum: ["System", "Identity", "Automation"],
        },
        identifier: {
          type: JsonSchemaType.STRING,
        },
      },
    },
  },
};

export const LastUpdatedPropertySchema = {
  lastUpdated: LastUpdatedSchema,
};

export const MetadataSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": {
      type: JsonSchemaType.STRING,
    },
  },
};

export const MetadataPropertySchema = {
  metadata: MetadataSchema,
};
