export type ExternalIdValue = string | number;

export interface ExternalIds {
  [k: string]: ExternalIdValue;
}

export interface ExternalIdsArray {
  [k: string]: ExternalIdValue[] | Set<ExternalIdValue>;
}

export interface ExternalIdsProperty {
  externalIds: ExternalIds | ExternalIdsArray;
}

export interface ExternalIdsArrayProperty {
  externalIds: ExternalIdsArray;
}

export interface ExternalIdResponseList {
  ids: ExternalIdsArray;
  locks?: ExternalIdsArray;
}
