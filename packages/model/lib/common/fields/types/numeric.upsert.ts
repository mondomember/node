import { AbstractFieldUpsert, AbstractFieldUpsertProps } from "../field.upsert";
import { FieldType } from "../../constants";

interface Attributes {
  decimal?: boolean;
}

interface FieldType {
  type: typeof FieldType.NUMERIC;
}

export interface NumericFieldUpsertProps
  extends AbstractFieldUpsertProps,
    Attributes {}

export type SerializedNumericFieldUpsert = NumericFieldUpsertProps & FieldType;

export class NumericFieldUpsert extends AbstractFieldUpsert {
  public readonly type: typeof FieldType.NUMERIC = FieldType.NUMERIC;

  public decimal?: boolean = false;

  public constructor(props?: NumericFieldUpsertProps) {
    super(props);

    this.decimal = props?.decimal || this.decimal;
  }

  public toJSON(): NumericFieldUpsertProps & FieldType {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.NUMERIC,
        decimal: this.decimal,
      },
    };
  }

  public clone(): NumericFieldUpsert {
    return new NumericFieldUpsert(this.toJSON());
  }
}
