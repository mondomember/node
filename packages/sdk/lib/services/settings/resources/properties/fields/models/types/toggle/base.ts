import { JsonSchemaType } from "../../../../../../../../schema";
import { FieldType } from "@mondomember/model";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.TOGGLE],
  },
};

export const AutoSelectPropertySchema = {
  autoSelect: {
    type: JsonSchemaType.BOOLEAN,
  },
};
