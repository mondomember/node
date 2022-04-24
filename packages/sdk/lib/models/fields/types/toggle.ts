import { AbstractField, AbstractFieldProps } from "../field";
import { FieldType } from "../../constants";
import { ToggleFieldUpsert } from "./toggle.upsert";

interface Attributes {
  autoSelect?: boolean;
}

interface FieldType {
  type: typeof FieldType.TOGGLE;
}

export interface ToggleFieldProps extends AbstractFieldProps, Attributes {}

export type SerializedToggleField = ToggleFieldProps & FieldType;

export class ToggleField extends AbstractField {
  public readonly type: typeof FieldType.TOGGLE = FieldType.TOGGLE;

  public autoSelect = false;

  public constructor(props: ToggleFieldProps) {
    super(props);

    this.autoSelect = props.autoSelect || this.autoSelect;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.TOGGLE,
        autoSelect: this.autoSelect,
      },
    };
  }

  public createMutation(): ToggleFieldUpsert {
    return new ToggleFieldUpsert(this.toJSON());
  }

  public clone(): ToggleField {
    return new ToggleField(this.toJSON());
  }
}
