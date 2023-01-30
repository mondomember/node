import { JsonSchemaType } from "../../../../../../../../../schema";

export const VersionPropertySchema = {
  version: {
    type: JsonSchemaType.NUMBER,
  },
};

export const AmountPropertySchema = {
  amount: {
    type: JsonSchemaType.NUMBER,
  },
};

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export const DefaultPropertySchema = {
  default: {
    type: JsonSchemaType.BOOLEAN,
  },
};
