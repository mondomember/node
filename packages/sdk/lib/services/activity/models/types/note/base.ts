import { JsonSchemaType } from "../../../../../schema";
import { ActivityType } from "../..";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [ActivityType.NOTE],
  },
};

export interface TypePropertyInterface {
  type: typeof ActivityType.NOTE;
}

export const MessagePropertySchema = {
  message: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface MessagePropertyInterface {
  message: string;
}
