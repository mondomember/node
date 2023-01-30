import {
  LabelProperty,
  DescriptionProperty,
  AuthorizationsProperty,
} from "./base";

export interface WorkspaceTokenInsertItem
  extends LabelProperty,
    DescriptionProperty,
    AuthorizationsProperty {}
