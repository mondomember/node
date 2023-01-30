import { JsonSchemaType } from "../../../../../../../schema";
import { ChargeIdSchema } from "../../../models/base";

export const ChargeSessionResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["key"],
  properties: {
    key: {
      type: JsonSchemaType.STRING,
    },
    charge: ChargeIdSchema,
  },
};
