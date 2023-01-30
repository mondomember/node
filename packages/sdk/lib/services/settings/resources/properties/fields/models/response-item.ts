import { JsonSchemaType, JsonSchema } from "../../../../../../schema";

// Types
import {
  NumericFieldResponseItemSchema,
  TextFieldResponseItemSchema,
  ToggleFieldResponseItemSchema,
} from "./types";

export const FieldResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NumericFieldResponseItemSchema,
    TextFieldResponseItemSchema,
    ToggleFieldResponseItemSchema,
  ],
};
