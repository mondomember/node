import { JsonSchemaType, JsonSchema } from "../../../../../../schema";

// Types
import {
  NumericFieldInsertItemSchema,
  NumericFieldInsertItemInterface,
  TextFieldInsertItemSchema,
  TextFieldInsertItemInterface,
  ToggleFieldInsertItemSchema,
  ToggleFieldInsertItemInterface,
} from "./types";

export const FieldInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    NumericFieldInsertItemSchema,
    TextFieldInsertItemSchema,
    ToggleFieldInsertItemSchema,
  ],
};

export type FieldInsertItemInterface =
  | NumericFieldInsertItemInterface
  | TextFieldInsertItemInterface
  | ToggleFieldInsertItemInterface;
