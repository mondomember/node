import { JsonSchemaType, JsonSchema } from "../../../../../../schema";

// Types
import {
  NumericFieldModifyItemSchema,
  NumericFieldModifyItemInterface,
  TextFieldModifyItemSchema,
  TextFieldModifyItemInterface,
  ToggleFieldModifyItemSchema,
  ToggleFieldModifyItemInterface,
} from "./types";

export const FieldModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NumericFieldModifyItemSchema,
    TextFieldModifyItemSchema,
    ToggleFieldModifyItemSchema,
  ],
};

export type FieldModifyItemInterface =
  | NumericFieldModifyItemInterface
  | TextFieldModifyItemInterface
  | ToggleFieldModifyItemInterface;
