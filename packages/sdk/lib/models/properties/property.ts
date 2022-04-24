import { PropertyValue } from "./interfaces";
import { AnyFieldType } from "../constants";

export interface PropertyProps {
  id: string;
  value?: PropertyValue;
}

export interface SerializedProperty extends PropertyProps {
  type: AnyFieldType;
}

/**
 * Property Interface (including methods, etc)
 */
export interface PropertyInterface extends SerializedProperty, PropertyProps {
  toJSON(): SerializedProperty;
}

/**
 * Abstract Property Type
 */
export abstract class Property implements PropertyInterface {
  public id: string;
  protected _value: PropertyValue;

  // Identify the type of property
  public abstract readonly type: AnyFieldType;

  public constructor(data: PropertyProps) {
    this.id = data.id;
    this.value = data.value;
  }

  // Get value
  public get value(): PropertyValue {
    return this._value;
  }

  // Set value
  public set value(value: PropertyValue) {
    this._value = value;
  }

  /**
   * Duplicate this property
   */
  public abstract clone(): Property;

  /**
   * Serialize all properties
   */
  public toJSON(): SerializedProperty {
    return {
      id: this.id,
      type: this.type,
      value: this.value,
    };
  }
}
