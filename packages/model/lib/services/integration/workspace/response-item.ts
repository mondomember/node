import {
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../common";

import {
  IdProperty,
  LabelProperty,
  DescriptionProperty,
  AuthorizationsProperty,
  TokenProperty,
} from "./base";

export interface WorkspaceTokenResponseItem
  extends IdProperty,
    TokenProperty,
    LabelProperty,
    AuthorizationsProperty,
    Partial<DescriptionProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
