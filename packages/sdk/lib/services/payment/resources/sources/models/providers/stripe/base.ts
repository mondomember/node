import { JsonSchemaType } from "../../../../../../../schema";
import { SourceCardSchema } from "../../base";
import {
  SourceCardInterface,
  SourceType,
  AnySourceType,
} from "../../interfaces";

export const StripeTypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [SourceType.CARD],
  },
};

export interface StripeTypePropertyInterface {
  type: AnySourceType;
}

export const StripeCardPropertySchema = {
  card: SourceCardSchema,
};

export interface StripeCardPropertyInterface {
  card: SourceCardInterface;
}
