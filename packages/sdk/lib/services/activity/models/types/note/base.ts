import { JsonSchemaType } from "../../../../../schema";
import { Activity } from "@mondomember/model";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [Activity.ActivityType.NOTE],
  },
};

export const MessagePropertySchema = {
  message: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};
