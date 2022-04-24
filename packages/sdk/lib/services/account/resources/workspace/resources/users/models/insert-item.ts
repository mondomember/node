import { JsonSchemaType } from "../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";

import {
  EmailPropertySchema,
  EmailPropertyInterface,
  FirstNamePropertySchema,
  FirstNamePropertyInterface,
  LastNamePropertySchema,
  LastNamePropertyInterface,
} from "./base";

export const WorkspaceUserInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["email"],
  properties: {
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceUserInsertItemInterface
  extends EmailPropertyInterface,
    Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface>,
    Partial<MetadataPropertyInterface> {}
