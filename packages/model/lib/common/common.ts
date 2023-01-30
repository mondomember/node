export interface IdProperty {
  id: string;
}

export interface CreatedAtProperty {
  createdAt: string;
}

export interface UpdatedAtProperty {
  updatedAt: string;
}

export interface DeletedAtProperty {
  deletedAt: string;
}

export type LastUpdated = {
  at?: string;
  by?: {
    identifier: string;
    type: "System" | "Identity" | "Automation";
  };
};

export interface LastUpdatedProperty {
  lastUpdated?: LastUpdated;
}

export type Metadata = {
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: string;
};

export interface MetadataProperty {
  metadata: Metadata;
}
