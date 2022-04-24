import { JsonSchemaType, JsonSchema } from "../../../../../../schema";

// Types
import {
  NumericFieldResponseItemSchema,
  NumericFieldResponseItemInterface,
  TextFieldResponseItemSchema,
  TextFieldResponseItemInterface,
  ToggleFieldResponseItemSchema,
  ToggleFieldResponseItemInterface,
} from "./types";

export const FieldResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NumericFieldResponseItemSchema,
    TextFieldResponseItemSchema,
    ToggleFieldResponseItemSchema,
  ],
};

export type FieldResponseItemInterface =
  | NumericFieldResponseItemInterface
  | TextFieldResponseItemInterface
  | ToggleFieldResponseItemInterface;
