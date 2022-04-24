import { AbstractFieldUpsert, AbstractFieldUpsertProps } from "../field.upsert";
import { FieldType } from "../../constants";

interface Attributes {
  multiLine?: boolean;
}

interface FieldType {
  type: typeof FieldType.TEXT;
}

export interface TextFieldUpsertProps
  extends AbstractFieldUpsertProps,
    Attributes {}

export type SerializedTextFieldUpsert = TextFieldUpsertProps & FieldType;

export class TextFieldUpsert extends AbstractFieldUpsert {
  public readonly type: typeof FieldType.TEXT = FieldType.TEXT;

  public multiLine?: boolean = false;

  public constructor(props?: TextFieldUpsertProps) {
    super(props);

    this.multiLine = props?.multiLine || this.multiLine;
  }

  public toJSON(): TextFieldUpsertProps & FieldType {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.TEXT,
        multiLine: this.multiLine,
      },
    };
  }

  public clone(): TextFieldUpsert {
    return new TextFieldUpsert(this.toJSON());
  }
}
