import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import {
  PerformedByPropertySchema,
  ActivityIdPropertySchema,
  PerformedByPropertyInterface,
} from "../../base";
import {
  TypePropertySchema,
  TypePropertyInterface,
  MessagePropertySchema,
  MessagePropertyInterface,
} from "./base";

export const NoteActivityInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "message"],
  properties: {
    ...ActivityIdPropertySchema,
    ...PerformedByPropertySchema,
    ...TypePropertySchema,
    ...MessagePropertySchema,
  },
};

export interface NoteActivityInsertItemInterface
  extends TypePropertyInterface,
    MessagePropertyInterface,
    Partial<IdPropertyInterface>,
    Partial<PerformedByPropertyInterface> {}
