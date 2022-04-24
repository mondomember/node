import { constructUIDPropertySchema, constructUIDSchema } from "../common";
import { UIDPrefix } from "../constants";

export const FieldIdSchema = constructUIDSchema([UIDPrefix.FIELD]);
export const FieldIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.FIELD
);
