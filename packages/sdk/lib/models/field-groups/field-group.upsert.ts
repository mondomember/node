import { generateTempKSUID } from "../helpers";

interface FieldGroupMutationAttributes {
  id?: string;
  label?: string;
  description?: string;
  order?: number;
}

export type FieldGroupMutationProps = FieldGroupMutationAttributes;

/**
 * @deprecated
 */
export interface SerializedInsertPayload {
  id?: string;
  label: string;
  description?: string;
  order?: number;
}

/**
 * @deprecated
 */
export interface SerializedUpdatePayload {
  label?: string;
  description?: string;
  order?: number;
}

export class FieldGroupMutation {
  private _id?: string;

  public label?: string;
  public description?: string;
  public order?: number;

  public constructor(props?: FieldGroupMutationProps) {
    // super();

    if (!!props?.id) {
      this.id = props.id;
    }

    this.label = props?.label;
    this.description = props?.description;
    this.order = props?.order;
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

  public toJSON(): FieldGroupMutationProps {
    return {
      id: this.hasId ? this.id : undefined,
      label: this.label,
      description: this.description,
      order: this.order,
    };
  }

  public clone(): FieldGroupMutation {
    return new FieldGroupMutation(this.toJSON());
  }
}
