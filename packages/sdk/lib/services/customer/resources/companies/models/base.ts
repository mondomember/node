import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { Customer } from "@mondomember/model";

export const CompanyIdSchema = constructUIDSchema([Customer.UIDPrefix.COMPANY]);

export const CompanyIdPropertySchema = constructUIDPropertySchema(
  Customer.UIDPrefix.COMPANY
);

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};
