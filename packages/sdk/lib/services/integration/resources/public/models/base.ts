import { JsonSchemaType } from "../../../../../schema";
import { constructUIDSchema, constructJWTSchema } from "../../../../../models";
import { UIDPrefix } from "../../../constants";

export const PublicTokenSchema = constructJWTSchema();

export const TokenPropertySchema = {
  jwt: PublicTokenSchema,
};

export interface TokenPropertyInterface {
  jwt: string;
}

export const DeviceIdPropertySchema = {
  deviceId: constructUIDSchema([UIDPrefix.PUBLIC_TOKEN_DEVICE]),
};

export interface DeviceIdPropertyInterface {
  deviceId: string;
}

export const InvoiceIdPropertySchema = {
  invoiceId: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface InvoiceIdPropertyInterface {
  invoiceId: string;
}
