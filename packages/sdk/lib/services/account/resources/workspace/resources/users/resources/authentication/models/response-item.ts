import { JsonSchemaType } from "../../../../../../../../../schema";
import {
  UUIDPropertySchema,
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
} from "../../../../../../../../../models";

export const WorkspaceUserAuthenticationResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["id"],
  properties: {
    ...UUIDPropertySchema,
    ...{
      type: {
        type: JsonSchemaType.STRING,
      },
      risk: {
        type: JsonSchemaType.OBJECT,
        properties: {
          decision: {
            type: JsonSchemaType.STRING,
          },
          level: {
            type: JsonSchemaType.STRING,
          },
        },
      },
      status: {
        type: JsonSchemaType.STRING,
      },
      response: {
        type: JsonSchemaType.STRING,
      },

      lastLoginAt: {
        type: JsonSchemaType.STRING,
      },
    },
    ...CreatedAtPropertySchema,
  },
};

export interface WorkspaceUserAuthenticationResponseItemInterface
  extends IdPropertyInterface,
    Partial<CreatedAtPropertyInterface> {
  type?: string;
  risk?: {
    decision: string;
    level: string;
  };
  status: string;
  response: string;
  lastLoginAt: string;
}
