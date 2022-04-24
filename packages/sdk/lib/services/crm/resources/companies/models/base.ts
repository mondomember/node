import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";

export const CompanyIdSchema = constructUIDSchema([UIDPrefix.COMPANY]);

export const CompanyIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.COMPANY
);

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface NamePropertyInterface {
  name: string;
}
