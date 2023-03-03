import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  PaginationPropertySchema,
} from "../../../../../models";
import { Integration } from "@mondomember/model";

export const HubSpotAppResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "appId", "integrationId"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Integration.AppType.HUBSPOT],
    },
    appId: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
    integrationId: {
      type: JsonSchemaType.STRING,
      minLength: 1,
    },
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export const AppResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [HubSpotAppResponseItemSchema],
};

export const AppResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: AppResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
