import { FieldType } from "../../constants";
import { Property, SerializedProperty, PropertyInterface } from "../property";

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
