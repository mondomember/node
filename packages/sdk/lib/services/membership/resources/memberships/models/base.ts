import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { MembershipStatusEnum } from "./interfaces";
import { Customer, Membership } from "@mondomember/model";

export const MembershipIdSchema = constructUIDSchema([
  Membership.UIDPrefix.MEMBERSHIP,
]);

export const MembershipIdPropertySchema = constructUIDPropertySchema(
  Membership.UIDPrefix.MEMBERSHIP
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: MembershipStatusEnum,
  },
};

export const ContactsPropertySchema = {
  contacts: {
    type: JsonSchemaType.ARRAY,
    items: constructUIDSchema([Customer.UIDPrefix.CONTACT]),
    uniqueItems: true,
    maxItems: 10,
  },
};

export const PeriodPropertySchema = {
  period: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["startAt"],
    properties: {
      startAt: {
        type: JsonSchemaType.STRING,
        format: "date-time",
      },
      endAt: {
        type: JsonSchemaType.STRING,
        format: "date-time",
      },
    },
  },
};

export const PartialPeriodPropertySchema = {
  period: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      startAt: {
        type: JsonSchemaType.STRING,
        format: "date-time",
      },
      endAt: {
        type: JsonSchemaType.STRING,
        format: "date-time",
      },
    },
  },
};

export const IsDelegatedPropertySchema = {
  delegated: {
    type: JsonSchemaType.BOOLEAN,
    enum: [true],
  },
};

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export const ProductPropertyRequestSchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id"],
    properties: {
      id: constructUIDSchema([Membership.UIDPrefix.PRODUCT]),
    },
  },
};

export const ProductPropertyResponseSchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "label"],
    properties: {
      id: constructUIDSchema([Membership.UIDPrefix.PRODUCT]),
      label: {
        type: JsonSchemaType.STRING,
      },
    },
  },
};
