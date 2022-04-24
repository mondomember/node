import { OrderedSet } from "../ordered-set";
import { FieldSet } from "../fields";
import { FieldGroup, FieldGroupProps } from "./field-group";

export class FieldGroupSet extends OrderedSet<FieldGroup> {
  public constructor(
    groups?: (FieldGroupProps | FieldGroup)[],
    resetItemOrder = true
  ) {
    super(
      (groups || []).map((group) =>
        group instanceof FieldGroup ? group : new FieldGroup(group)
      ),
      resetItemOrder
    );
  }

  /**
   * Get all fields across all groups
   */
  public get fields(): FieldSet {
    const fields: FieldSet = new FieldSet();

    this.forEach((group: FieldGroup) => {
      group.fields.forEach((field) => {
        fields.add(field.clone());
      });
    });

    return fields;
  }

  public toJSON(): FieldGroupProps[] {
    return Array.from(this).map((group) => group.toJSON());
  }

  public clone(): FieldGroupSet {
    return new FieldGroupSet(this.toJSON());
  }
}
