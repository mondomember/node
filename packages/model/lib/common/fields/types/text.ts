import { AbstractField, AbstractFieldProps } from "../field";
import { FieldType } from "../../constants";
import { TextFieldUpsert } from "./text.upsert";

interface Attributes {
  multiLine?: boolean;
}

interface FieldType {
  type: typeof FieldType.TEXT;
}

export interface TextFieldProps extends AbstractFieldProps, Attributes {}

export type SerializedTextField = TextFieldProps & FieldType;

export class TextField extends AbstractField {
  public readonly type: typeof FieldType.TEXT = FieldType.TEXT;

  public multiLine?: boolean = false;

  public constructor(props: TextFieldProps) {
    super(props);

    this.multiLine = props.multiLine || this.multiLine;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...{
        type: FieldType.TEXT,
        multiLine: this.multiLine,
      },
    };
  }

  public createMutation(): TextFieldUpsert {
    return new TextFieldUpsert(this.toJSON());
  }

  public clone(): TextField {
    return new TextField(this.toJSON());
  }
}
