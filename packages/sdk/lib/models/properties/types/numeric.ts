import { JsonSchemaType } from "../../../schema";
import { Property, SerializedProperty, PropertyInterface } from "../property";
import { FieldIdPropertySchema } from "../base";
import { FieldType } from "../../constants";

const TypeSchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.NUMERIC],
  },
};

const ValueSchema = {
  value: {
    type: [
      JsonSchemaType.INTEGER,
      JsonSchemaType.NUMBER,
      JsonSchemaType.STRING,
      JsonSchemaType.NULL,
    ],
  },
};

export const NumericSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["id", "type"],
  additionalProperties: false,
  properties: {
    ...FieldIdPropertySchema,
    ...TypeSchema,
    ...ValueSchema,
  },
};

export interface NumericInterface {
  id: string;
  type: typeof FieldType.NUMERIC;
  value?: number | string | null;
}

export interface SerializedNumericProperty extends SerializedProperty {
  type: typeof FieldType.NUMERIC;
}

export interface NumericPropertyInterface extends PropertyInterface {
  type: typeof FieldType.NUMERIC;

  toJSON(): SerializedNumericProperty;
}

export class NumericProperty
  extends Property
  implements NumericPropertyInterface
{
  public readonly type: typeof FieldType.NUMERIC = FieldType.NUMERIC;

  public toJSON(): SerializedNumericProperty {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.NUMERIC,
      },
    };
  }

  public clone(): NumericProperty {
    return new NumericProperty(this.toJSON());
  }
}
