import { MetadataValue } from "./interfaces";

interface Attributes {
  id: string;
  value: MetadataValue;
  order?: number;
}

export interface MetadataItemProps extends Attributes {}

export class MetadataItem {
  public id: string;

  public value: MetadataValue;
  public order?: number;

  public constructor(props: MetadataItemProps) {
    this.id = props.id;
    this.value = props.value;
    this.order = props.order;
  }

  public toJSON(): MetadataItemProps {
    return {
      id: this.id,
      value: this.value,
      order: this.order,
    };
  }

  public clone(): MetadataItem {
    return new MetadataItem(this.toJSON());
  }
}
