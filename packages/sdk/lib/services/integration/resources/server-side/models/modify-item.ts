import { DeepPartial } from "utility-types";
import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import {
  AuthorizationsPropertySchema,
  AuthorizationsPropertyInterface,
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "./base";

export const ServerSideTokenModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...AuthorizationsPropertySchema,
  },
};

export interface ServerSideTokenModifyItemInterface
  extends Partial<LabelPropertyInterface>,
    DeepPartial<AuthorizationsPropertyInterface>,
    Partial<DescriptionPropertyInterface> {}
