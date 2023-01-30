import { Property, SerializedProperty, PropertyInterface } from "../property";
import { FieldType } from "../../constants";

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
