import { JsonSchemaType, JsonSchema } from "../../../../../../schema";

// Types
import {
  NumericFieldModifyItemSchema,
  TextFieldModifyItemSchema,
  ToggleFieldModifyItemSchema,
} from "./types";

export const FieldModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NumericFieldModifyItemSchema,
    TextFieldModifyItemSchema,
    ToggleFieldModifyItemSchema,
  ],
};
