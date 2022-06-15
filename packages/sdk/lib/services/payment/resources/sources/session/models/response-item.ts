import { JsonSchemaType } from "../../../../../../schema";

export const SourceSessionResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["key"],
  properties: {
    key: {
      type: JsonSchemaType.STRING,
    },
  },
};

export interface SourceSessionResponseItemInterface {
  key: string;
}
