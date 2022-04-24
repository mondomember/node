import { JsonSchemaType } from "../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";

import {
  FirstNamePropertySchema,
  FirstNamePropertyInterface,
  LastNamePropertySchema,
  LastNamePropertyInterface,
} from "./base";

export const WorkspaceUserModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface WorkspaceUserModifyItemInterface
  extends Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface>,
    Partial<MetadataPropertyInterface> {}
