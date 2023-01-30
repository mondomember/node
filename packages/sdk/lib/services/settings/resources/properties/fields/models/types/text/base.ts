import { JsonSchemaType } from "../../../../../../../../schema";
import { FieldType } from "@mondomember/model";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.TEXT],
  },
};

export const MultilinePropertySchema = {
  multiLine: {
    type: JsonSchemaType.BOOLEAN,
  },
};
