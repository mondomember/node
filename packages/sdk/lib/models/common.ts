import { JsonSchemaType } from "../schema";

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

export const UUIDSchema = {
  type: JsonSchemaType.STRING,
  format: "uuid",
};

export const UUIDPropertySchema = {
  id: UUIDSchema,
};

export interface IdPropertyInterface {
  id: string;
}

export const CreatedAtSchema = {
  type: JsonSchemaType.STRING,
  format: "date-time",
};

export const CreatedAtPropertySchema = {
  createdAt: CreatedAtSchema,
};

export interface CreatedAtPropertyInterface {
  createdAt: string;
}

export const UpdatedAtSchema = {
  type: JsonSchemaType.STRING,
  format: "date-time",
};

export const UpdatedAtPropertySchema = {
  updatedAt: UpdatedAtSchema,
};

export interface UpdatedAtPropertyInterface {
  updatedAt: string;
}

export const DeletedAtSchema = {
  type: JsonSchemaType.STRING,
  format: "date-time",
};

export const DeletedAtPropertySchema = {
  deletedAt: DeletedAtSchema,
};

export interface DeletedAtPropertyInterface {
  deletedAt: string;
}

export type LastUpdatedInterface = {
  at?: string;
  by?: {
    identifier: string;
    type: "System" | "Identity" | "Automation";
  };
};

export interface LastUpdatedPropertyInterface {
  lastUpdated?: LastUpdatedInterface;
}

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

export type MetadataInterface = {
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: string;
};

export interface MetadataPropertyInterface {
  metadata: MetadataInterface;
}
