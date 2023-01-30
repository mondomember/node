import { JsonSchemaType } from "../../../schema";
import { UUIDSchema, UUIDPropertySchema } from "../../../models";
import { Workspace } from "@mondomember/model";

export const TenantIdSchema = UUIDSchema;
export const TenantIdPropertySchema = UUIDPropertySchema;

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
    minLength: 1,
  },
};

export const SlugPropertySchema = {
  slug: {
    type: JsonSchemaType.STRING,
    minLength: 3,
  },
};

export const SandboxPropertySchema = {
  sandbox: {
    type: JsonSchemaType.BOOLEAN,
  },
};

export const MembershipPropertySchema = {
  membership: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["plan"],
    properties: {
      plan: {
        type: JsonSchemaType.STRING,
        enum: [
          Workspace.MembershipPlan.FREE,
          Workspace.MembershipPlan.ON_DEMAND,
          Workspace.MembershipPlan.BUSINCESS,
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
