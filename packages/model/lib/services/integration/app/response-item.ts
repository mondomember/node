import {
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../common";

import { AppType } from "./interfaces";

export interface HubSpotAppResponseItem
  extends CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {
  type: typeof AppType.HUBSPOT;
  appId: string;
  integrationId: string;
}

export type AppResponseItem = HubSpotAppResponseItem;
