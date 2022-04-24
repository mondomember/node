import { SerializedField, FieldSet } from "../fields";
import { Model, ModelProps } from "../model";
import { FieldGroupMutation } from "./field-group.upsert";

interface Attributes {
  id: string;
  label: string;
  description?: string;
  order?: number;
}

export interface FieldGroupProps extends Attributes, ModelProps {
  fields?: SerializedField[];
}

export class FieldGroup extends Model {
  public readonly id: string;

  public label: string;
  public description?: string;
  public order?: number;

  public fields: FieldSet;

  public constructor(props: FieldGroupProps) {
    super(props);

    this.id = props.id;
    this.label = props.label;
    this.description = props.description;
    this.order = props.order;

    this.fields = new FieldSet(props.fields);
  }

  public createMutation(): FieldGroupMutation {
    return new FieldGroupMutation(this.toJSON());
  }

  public toJSON() {
    return {
      id: this.id,
      label: this.label,
      description: this.description,
      order: this.order,
      fields: this.fields.size ? this.fields.toJSON() : undefined,
      ...super.toJSON(),
    };
  }

  public clone(): FieldGroup {
    return new FieldGroup(this.toJSON());
  }
}
