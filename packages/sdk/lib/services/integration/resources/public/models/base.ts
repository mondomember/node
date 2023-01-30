import { JsonSchemaType } from "../../../../../schema";
import { constructUIDSchema, constructJWTSchema } from "../../../../../models";
import { Integration } from "@mondomember/model";

export const PublicTokenSchema = constructJWTSchema();

export const TokenPropertySchema = {
  jwt: PublicTokenSchema,
};

export const DeviceIdPropertySchema = {
  deviceId: constructUIDSchema([Integration.UIDPrefix.PUBLIC_TOKEN_DEVICE]),
};

export const InvoiceIdPropertySchema = {
  invoiceId: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};
