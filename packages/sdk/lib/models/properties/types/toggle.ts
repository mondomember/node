import { JsonSchemaType } from "../../../schema";
import { FieldIdPropertySchema } from "../base";
import { FieldType } from "../../constants";
import { Property, SerializedProperty, PropertyInterface } from "../property";

const TypeSchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.TOGGLE],
  },
};

const ValueSchema = {
  value: {
    type: [JsonSchemaType.BOOLEAN, JsonSchemaType.NULL],
  },
};

export const ToggleSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["id", "type"],
  additionalProperties: false,
  properties: {
    ...FieldIdPropertySchema,
    ...TypeSchema,
    ...ValueSchema,
  },
};

export interface ToggleInterface {
  id: string;
  type: typeof FieldType.TOGGLE;
  value?: boolean | null;
}

export interface SerializedToggleProperty extends SerializedProperty {
  type: typeof FieldType.TOGGLE;
}

export interface TogglePropertyInterface extends PropertyInterface {
  type: typeof FieldType.TOGGLE;

  toJSON(): SerializedToggleProperty;
}

export class ToggleProperty
  extends Property
  implements TogglePropertyInterface
{
  public readonly type: typeof FieldType.TOGGLE = FieldType.TOGGLE;

  public toJSON(): SerializedToggleProperty {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.TOGGLE,
      },
    };
  }

  public clone(): ToggleProperty {
    return new ToggleProperty(this.toJSON());
  }
}
