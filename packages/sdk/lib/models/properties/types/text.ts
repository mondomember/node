import { JsonSchemaType } from "../../../schema";
import { FieldIdPropertySchema } from "../base";
import { FieldType } from "../../constants";
import { Property, SerializedProperty, PropertyInterface } from "../property";

const TypeSchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.TEXT],
  },
};

const ValueSchema = {
  value: {
    type: [JsonSchemaType.STRING, JsonSchemaType.NULL],
  },
};

export const TextSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["id", "type"],
  additionalProperties: false,
  properties: {
    ...FieldIdPropertySchema,
    ...TypeSchema,
    ...ValueSchema,
  },
};

export interface TextInterface {
  id: string;
  type: typeof FieldType.TEXT;
  value?: string | null;
}

export interface SerializedTextProperty extends SerializedProperty {
  type: typeof FieldType.TEXT;
}

export interface TextPropertyInterface extends PropertyInterface {
  type: typeof FieldType.TEXT;

  toJSON(): SerializedTextProperty;
}

export class TextProperty extends Property implements TextPropertyInterface {
  public readonly type: typeof FieldType.TEXT = FieldType.TEXT;

  public toJSON(): SerializedTextProperty {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.TEXT,
      },
    };
  }

  public clone(): TextProperty {
    return new TextProperty(this.toJSON());
  }

  // // Get value
  // public get value(): Properties.Property.Value {
  //   return this.value;
  // }

  // // Set value
  // public set value(value: Properties.Property.Value) {
  //   this.value = value === "" ? undefined : value;
  // }
}
