import { OrderedSet } from "../ordered-set";
import { MetadataItem } from "./item";
import { SerializedMetadata } from "./interfaces";

export class MetadataSet extends OrderedSet<MetadataItem> {
  public constructor(values?: SerializedMetadata) {
    super(
      Object.entries(values || {}).map(
        ([key, value]) =>
          new MetadataItem({
            id: key,
            value,
          })
      )
    );
  }

  public toJSON(): SerializedMetadata {
    return Array.from(this).reduce(
      (result, item) => ({
        ...result,
        ...{
          [item.id]: item.value,
        },
      }),
      {}
    );
  }

  public clone(): MetadataSet {
    return new MetadataSet(this.toJSON());
  }
}
