import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../common";
import {
  NameProperty,
  SlugProperty,
  MembershipProperty,
  SandboxProperty,
} from "./base";

export interface TenantResponseItem
  extends IdProperty,
    NameProperty,
    SlugProperty,
    MembershipProperty,
    Partial<SandboxProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
