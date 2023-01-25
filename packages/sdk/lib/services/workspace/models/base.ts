import { JsonSchemaType } from "../../../schema";
import { UUIDSchema, UUIDPropertySchema } from "../../../models";
import { MembershipPlan, AnyMembershipPlan } from "./interfaces";

export const TenantIdSchema = UUIDSchema;
export const TenantIdPropertySchema = UUIDPropertySchema;

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export interface NamePropertyInterface {
  name: string;
}

export const SlugPropertySchema = {
  slug: {
    type: JsonSchemaType.STRING,
    minLength: 3,
  },
};

export interface SlugPropertyInterface {
  slug: string;
}

export const SandboxPropertySchema = {
  sandbox: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export interface SandboxPropertyInterface {
  sandbox: boolean;
}

export const MembershipPropertySchema = {
  membership: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["plan"],
    properties: {
      plan: {
        type: JsonSchemaType.STRING,
        enum: [
          MembershipPlan.FREE,
          MembershipPlan.ON_DEMAND,
          MembershipPlan.BUSINCESS,
        ],
      },
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

export interface MembershipInterface {
  plan: AnyMembershipPlan;
  startAt?: string;
  endAt?: string;
}

export interface MembershipPropertyInterface {
  membership: MembershipInterface;
}
