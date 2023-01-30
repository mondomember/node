import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../common";
import { NameProperty, SlugProperty } from "../workspace/tenant/base";

export interface IdentityWorkspaceResponseItem
  extends IdProperty,
    NameProperty,
    SlugProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
