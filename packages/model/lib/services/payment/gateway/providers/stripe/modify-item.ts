import { MetadataProperty } from "../../../../../common";
import { LabelProperty, DescriptionProperty } from "../../base";

export interface StripeGatewayModifyItem
  extends Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<MetadataProperty> {}
