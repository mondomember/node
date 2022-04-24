export interface ModelProps {
  createdAt: string | Date;
  updatedAt: string | Date;
}

export abstract class Model {
  // The Date the model was created
  public createdAt: Date;

  // The Date the model was last updated
  public updatedAt: Date;

  public constructor(props: ModelProps) {
    this.createdAt = new Date(props.createdAt);
    this.updatedAt = new Date(props.updatedAt);
  }

  public toJSON() {
    return {
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}
