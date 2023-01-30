import { DeepPartial } from "utility-types";

import {
  AuthorizationsProperty,
  LabelProperty,
  DescriptionProperty,
} from "./base";

export interface WorkspaceTokenModifyItem
  extends Partial<LabelProperty>,
    DeepPartial<AuthorizationsProperty>,
    Partial<DescriptionProperty> {}
