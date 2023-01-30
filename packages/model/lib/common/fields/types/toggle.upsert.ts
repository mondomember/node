import { AbstractFieldUpsert, AbstractFieldUpsertProps } from "../field.upsert";
import { FieldType } from "../../constants";

interface Attributes {
  autoSelect?: boolean;
}

interface FieldType {
  type: typeof FieldType.TOGGLE;
}

export interface ToggleFieldUpsertProps
  extends AbstractFieldUpsertProps,
    Attributes {}

export type SerializedToggleFieldUpsert = ToggleFieldUpsertProps & FieldType;

export class ToggleFieldUpsert extends AbstractFieldUpsert {
  public readonly type: typeof FieldType.TOGGLE = FieldType.TOGGLE;

  public autoSelect?: boolean = false;

  public constructor(props?: ToggleFieldUpsertProps) {
    super(props);

    this.autoSelect = props?.autoSelect || this.autoSelect;
  }

  public toJSON(): ToggleFieldUpsertProps & FieldType {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.TOGGLE,
        autoSelect: this.autoSelect,
      },
    };
  }

  public clone(): ToggleFieldUpsert {
    return new ToggleFieldUpsert(this.toJSON());
  }
}
