import { JsonSchemaType, JsonSchema } from "../../../../../../schema";

// Types
import {
  NumericFieldInsertItemSchema,
  TextFieldInsertItemSchema,
  ToggleFieldInsertItemSchema,
} from "./types";

export const FieldInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NumericFieldInsertItemSchema,
    TextFieldInsertItemSchema,
    ToggleFieldInsertItemSchema,
  ],
};
