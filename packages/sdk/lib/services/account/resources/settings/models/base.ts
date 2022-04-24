import { JsonSchemaType } from "../../../../../schema";

export const NameSchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface NameInterface {
  name: string;
}
