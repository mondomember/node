import { AnyJobStatus } from "./interfaces";

export interface StatusProperty {
  status: AnyJobStatus;
}

export interface FilenameProperty {
  filename: string;
}

export interface TypeProperty {
  type: string;
}

export interface OwnerProperty {
  owner: string;
}

export interface TotalCountProperty {
  totalCount: number;
}

export interface ImportCountProperty {
  importCount: number;
}

export interface ErrorCountProperty {
  errorCount: number;
}
