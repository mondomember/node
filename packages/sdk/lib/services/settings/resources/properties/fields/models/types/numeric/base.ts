import { JsonSchemaType } from "../../../../../../../../schema";
import { FieldType } from "@mondomember/model";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.NUMERIC],
  },
};

export const DecimalPropertySchema = {
  decimal: {
    type: JsonSchemaType.BOOLEAN,
  },
};
