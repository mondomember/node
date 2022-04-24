import { JsonSchemaType } from "../../../../../../../../../schema";

export const VersionPropertySchema = {
  version: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface VersionPropertyInterface {
  version: number;
}

export const AmountPropertySchema = {
  amount: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface AmountPropertyInterface {
  amount: number;
}

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export interface DescriptionPropertyInterface {
  description: string;
}

export const DefaultPropertySchema = {
  default: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface DefaultPropertyInterface {
  default: boolean;
}
