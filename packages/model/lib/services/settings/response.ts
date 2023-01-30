import { FieldGroups } from "./interfaces";

export interface SettingsResponse {
  [resource: string]: FieldGroups;
}
