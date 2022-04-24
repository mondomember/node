import { JsonSchemaType } from "../../../../../../../../schema";
import { FieldType } from "../../../../../../../../models";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.TEXT],
  },
};

export interface TypePropertyInterface {
  type: typeof FieldType.TEXT;
}

export const MultilinePropertySchema = {
  multiLine: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface MultilinePropertyInterface {
  multiLine: boolean;
}
