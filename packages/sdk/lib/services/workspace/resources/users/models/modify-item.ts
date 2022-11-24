import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";

import {
  FirstNamePropertySchema,
  FirstNamePropertyInterface,
  LastNamePropertySchema,
  LastNamePropertyInterface,
} from "./base";

export const UserModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface UserModifyItemInterface
  extends Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface>,
    Partial<MetadataPropertyInterface> {}
