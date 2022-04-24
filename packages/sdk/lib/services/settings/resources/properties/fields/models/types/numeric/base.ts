import { JsonSchemaType } from "../../../../../../../../schema";
import { FieldType } from "../../../../../../../../models";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.NUMERIC],
  },
};

export interface TypePropertyInterface {
  type: typeof FieldType.NUMERIC;
}

export const DecimalPropertySchema = {
  decimal: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface DecimalProertyInterface {
  decimal: boolean;
}
