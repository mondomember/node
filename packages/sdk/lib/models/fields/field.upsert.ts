import { generateTempKSUID } from "../helpers";
import { AnyFieldType } from "../constants";

export interface AbstractFieldUpsertProps {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  group?: string;
  order?: number;
}

interface FieldType {
  type: AnyFieldType;
}

/**
 * Abstract Field Type Mutation
 */
export abstract class AbstractFieldUpsert {
  private _id?: string;

  abstract readonly type: AnyFieldType;

  public name?: string;
  public label?: string;
  public description?: string;
  public group?: string;
  public order?: number;

  public constructor(props?: AbstractFieldUpsertProps) {
    if (props) {
      this._id = props.id;
      this.name = props.name;
      this.label = props.label;
      this.description = props.description;
      this.group = props.group;
      this.order = props.order;
    }
  }

  // Id
  get hasId(): boolean {
    return !!this._id;
  }

  get id(): string {
    if (!this._id) {
      this._id = generateTempKSUID();
    }

    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  public toJSON(): AbstractFieldUpsertProps & FieldType {
    return {
      id: this.hasId ? this.id : undefined,
      type: this.type,
      name: this.name,
      label: this.label || this.name,
      description: this.description,
      group: this.group,
      order: this.order,
    };
  }
}
