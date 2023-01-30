import { StripeSourceObject, AnyStripeSourceType } from "./interfaces";

export interface StripeTypeProperty {
  type: AnyStripeSourceType;
}

export interface StripeObjectProperty {
  object: StripeSourceObject;
}
