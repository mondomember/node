import { Property, SerializedProperties } from "./interfaces";
import { Field, FieldSet } from "../fields";
import { createProperty } from "./factory";

export class PropertyMap extends Map<string, Property> {
  public constructor(
    properties?: SerializedProperties,
    private reconciled = false
  ) {
    super(
      Object.entries(properties || {}).map(([key, prop]) => [
        key,
        createProperty(prop),
      ])
    );
  }

  public toJSON(): SerializedProperties {
    return Array.from(this).reduce(
      (result, [key, property]) => ({
        ...result,
        ...{
          [key]: property.toJSON(),
        },
      }),
      {}
    );
  }

  public clone(): PropertyMap {
    return new PropertyMap(this.toJSON(), this.reconciled);
  }

  public reconcileFields(fields: FieldSet): this {
    if (this.reconciled) {
      return this;
    }

    fields.forEach((field) => this.reconcileField(field));

    // Remove extras
    Array.from(this.keys())
      .filter(
        (value) =>
          !Array.from(fields)
            .map((field) => field.name)
            .includes(value)
      )
      .forEach((key) => this.delete(key));

    return this;
  }

  public reconcileField(field: Field): Property {
    let property = this.get(field.name);

    if (!property || property.type !== field.type || property.id !== field.id) {
      // Note: If Id's are not aligned, do not set the value
      property = createProperty({
        id: field.id,
        value: property?.id === field.id ? property?.value : undefined,
        type: field.type,
      });

      this.set(field.name, property);
    }

    return property;
  }
}
