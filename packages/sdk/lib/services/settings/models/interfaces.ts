import {
  FieldGroupResponseItemInterface,
  FieldResponseItemInterface,
} from "../resources/properties";

interface FieldGroupWithFieldsInterface
  extends FieldGroupResponseItemInterface {
  fields: FieldResponseItemInterface[];
}

export interface FieldGroupsInterface {
  groups?: FieldGroupWithFieldsInterface[];
}
