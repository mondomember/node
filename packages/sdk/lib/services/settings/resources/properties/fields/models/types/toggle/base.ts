import { JsonSchemaType } from "../../../../../../../../schema";
import { FieldType } from "../../../../../../../../models";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.TOGGLE],
  },
};

export interface TypePropertyInterface {
  type: typeof FieldType.TOGGLE;
}

export const AutoSelectPropertySchema = {
  autoSelect: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface AutoSelectPropertyInterface {
  autoSelect: boolean;
}
