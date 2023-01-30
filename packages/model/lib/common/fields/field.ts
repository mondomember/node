import { AnyFieldType } from "../constants";
import { Model, ModelProps } from "../model";
import { AbstractFieldUpsert } from "./field.upsert";

export interface AbstractFieldProps extends ModelProps {
  id: string;
  name: string;
  label: string;
  description?: string;
  group: string;
  order?: number;
}

/**
 * Abstract Field Type
 */
export abstract class AbstractField extends Model {
  public readonly id: string;
  abstract readonly type: AnyFieldType;

  public name: string;
  public label: string;
  public description?: string;
  public group: string;
  public order?: number;

  public constructor(props: AbstractFieldProps) {
    super(props);

    this.id = props.id;
    this.name = props.name;
    this.label = props.label;
    this.description = props.description;
    this.group = props.group;
    this.order = props.order;

    this.createdAt = new Date(props.createdAt);
    this.updatedAt = new Date(props.updatedAt);
  }

  abstract clone(): AbstractField;

  abstract createMutation(): AbstractFieldUpsert;

  public toJSON() {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      label: this.label,
      description: this.description,
      group: this.group,
      order: this.order,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}
