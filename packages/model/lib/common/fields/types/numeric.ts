import { AbstractField, AbstractFieldProps } from "../field";
import { FieldType } from "../../constants";
import { NumericFieldUpsert } from "./numeric.upsert";

interface Attributes {
  decimal?: boolean;
}

interface FieldType {
  type: typeof FieldType.NUMERIC;
}

export interface NumericFieldProps extends AbstractFieldProps, Attributes {}

export type SerializedNumericField = NumericFieldProps & FieldType;

export class NumericField extends AbstractField {
  public readonly type: typeof FieldType.NUMERIC = FieldType.NUMERIC;

  public decimal?: boolean = false;

  public constructor(props: NumericFieldProps) {
    super(props);

    this.decimal = props.decimal || this.decimal;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.NUMERIC,
        decimal: this.decimal,
      },
    };
  }

  public createMutation(): NumericFieldUpsert {
    return new NumericFieldUpsert(this.toJSON());
  }

  public clone(): NumericField {
    return new NumericField(this.toJSON());
  }
}
