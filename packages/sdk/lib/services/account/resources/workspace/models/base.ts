import { JsonSchemaType } from "../../../../../schema";
import { UUIDSchema, UUIDPropertySchema } from "../../../../../models";

export const TenantIdSchema = UUIDSchema;
export const TenantIdPropertySchema = UUIDPropertySchema;

export const NameSchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface NameInterface {
  name: string;
}
