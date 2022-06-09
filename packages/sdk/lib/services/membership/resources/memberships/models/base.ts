import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";
import * as CRM from "../../../../../services/crm";
import * as Payment from "../../../../../services/payment";
import { AnyMembershipStatus, MembershipStatusEnum } from "./interfaces";

export const MembershipIdSchema = constructUIDSchema([UIDPrefix.MEMBERSHIP]);

export const MembershipIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.MEMBERSHIP
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: MembershipStatusEnum,
  },
};

export interface StatusPropertyInterface {
  status: AnyMembershipStatus;
}

export const ContactsPropertySchema = {
  contacts: {
    type: JsonSchemaType.ARRAY,
    items: constructUIDSchema([CRM.UIDPrefix.CONTACT]),
    uniqueItems: true,
    maxItems: 10,
  },
};

export interface ContactsPropertyInterface {
  contacts:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
}

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

export interface PeriodPropertyInterface {
  period: {
    startAt: string;
    endAt?: string;
  };
}

export const IsDelegatedPropertySchema = {
  delegated: {
    type: JsonSchemaType.BOOLEAN,
    enum: [true],
  },
};

export interface IsDelegatedPropertyInterface {
  delegated: true;
}

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export interface DescriptionPropertyInterface {
  description: string;
}

export const ProductPropertyRequestSchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id"],
    properties: {
      id: constructUIDSchema([UIDPrefix.PRODUCT]),
    },
  },
};

export interface ProductPropertyRequestInterface {
  product: {
    id: string;
  };
}

const AutoPaySchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    {
      type: JsonSchemaType.OBJECT,
      additionalProperties: false,
      required: ["source"],
      properties: {
        source: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
      },
    },
    {
      type: JsonSchemaType.OBJECT,
      additionalProperties: false,
      required: ["source"],
      properties: {
        source: {
          type: JsonSchemaType.STRING,
          enum: ["DEFAULT"],
        },
      },
    },
  ],
};

interface AutoPayInterface {
  source: string | "DEFAULT";
}

const ProductTierPriceRequest = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["version"],
  properties: {
    version: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

const ProductTierRequest = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "price"],
  properties: {
    id: constructUIDSchema([UIDPrefix.PRODUCT_TIER]),
    price: ProductTierPriceRequest,
  },
};

export const ProductPropertyResponseSchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "label"],
    properties: {
      id: constructUIDSchema([UIDPrefix.PRODUCT]),
      label: {
        type: JsonSchemaType.STRING,
      },
    },
  },
};

export interface ProductPropertyResponseInterface {
  product: {
    id: string;
    label: string;
  };
}

const ProductTierPriceResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["version", "amount"],
  properties: {
    version: {
      type: JsonSchemaType.NUMBER,
    },
    amount: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

const ProductTierResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "label", "price"],
  properties: {
    id: constructUIDSchema([UIDPrefix.PRODUCT_TIER]),
    label: {
      type: JsonSchemaType.STRING,
    },
    price: ProductTierPriceResponseSchema,
  },
};

export interface MembershipRecurringResponseInterface {
  autoPay?: AutoPayInterface;
  quantity: number;
  tier: {
    id: string;
    label: string;
    price: {
      version: number;
      amount: number;
    };
  };
  discount?: number;
  offset?: number;
}
