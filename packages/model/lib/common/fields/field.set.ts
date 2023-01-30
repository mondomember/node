import { OrderedSet } from "../ordered-set";
import { createField } from "./field.factory";
import { Field, SerializedField } from ".";

export class FieldSet extends OrderedSet<Field> {
  public constructor(
    fields?: (SerializedField | Field)[],
    resetItemOrder = true
  ) {
    super(
      (fields || []).map((field) => createField(field)),
      resetItemOrder
    );
  }

  public toJSON(): SerializedField[] {
    return Array.from(this).map((field) => field.toJSON());
  }

  public clone(): FieldSet {
    return new FieldSet(this.toJSON());
  }
}
