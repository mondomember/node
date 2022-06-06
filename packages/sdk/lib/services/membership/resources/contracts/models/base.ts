import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";
import * as CRM from "../../../../../services/crm";
import * as Payment from "../../../../../services/payment";
import {
  ContractStatus,
  ContractStatusEnum,
  ContractBillingTermType,
  ContractRecurringAutoPayType,
  RenewalFrequencySchemaEnum,
  AnyRenewalFrequency,
  ContractLineItemRequestInterface,
  ContractLineItemResponseInterface,
} from "./interfaces";

export const ContractIdSchema = constructUIDSchema([UIDPrefix.CONTRACT]);

export const ContractIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.CONTRACT
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: ContractStatusEnum,
  },
};

export interface StatusPropertyInterface {
  status:
    | typeof ContractStatus.DRAFT
    | typeof ContractStatus.PENDING
    | typeof ContractStatus.UPCOMING
    | typeof ContractStatus.ACTIVE
    | typeof ContractStatus.FULFILLED
    | typeof ContractStatus.CANCELED;
}

export const PeriodPropertySchema = {
  period: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["startAt", "endAt"],
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
    endAt: string;
  };
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

export const CustomerPropertySchema = {
  customer: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      id: constructUIDSchema([CRM.UIDPrefix.COMPANY, CRM.UIDPrefix.CONTACT]),
    },
  },
};

export interface CustomerPropertyInterface {
  customer: {
    id: string;
  };
}

const FinalizedBillingSchema = {
  type: [JsonSchemaType.OBJECT, JsonSchemaType.NULL],
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.FINALIZED],
    },
  },
};

interface FinalizedBillingInterface {
  type: typeof ContractBillingTermType.FINALIZED;
}

const ApprovedBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.APPROVED],
    },
  },
};

interface ApprovedBillingInterface {
  type: typeof ContractBillingTermType.APPROVED;
}

const OffsetBillingSchema = {
  type: [JsonSchemaType.OBJECT],
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.OFFSET],
    },
    seconds: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

interface OffsetBillingInterface {
  type: typeof ContractBillingTermType.OFFSET;
  seconds: number;
}

const ScheduledBillingSchema = {
  type: [JsonSchemaType.OBJECT],
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.SCHEDULED],
    },
    date: {
      type: JsonSchemaType.STRING,
    },
  },
};

interface ScheduledBillingInterface {
  type: typeof ContractBillingTermType.SCHEDULED;
  date: string;
}

export const RequestBillingPropertySchema = {
  billing: {
    type: JsonSchemaType.OBJECT,
    discriminator: { propertyName: "type" },
    oneOf: [
      {
        ...FinalizedBillingSchema,
        type: [JsonSchemaType.OBJECT, JsonSchemaType.NULL],
      },
      ApprovedBillingSchema,
      OffsetBillingSchema,
      ScheduledBillingSchema,
    ],
  },
};

export const ResponseBillingPropertySchema = {
  billing: {
    type: JsonSchemaType.OBJECT,
    discriminator: { propertyName: "type" },
    oneOf: [
      FinalizedBillingSchema,
      ApprovedBillingSchema,
      OffsetBillingSchema,
      ScheduledBillingSchema,
    ],
  },
};

export type BillingInterface =
  | FinalizedBillingInterface
  | ApprovedBillingInterface
  | OffsetBillingInterface
  | ScheduledBillingInterface;

export interface ResponseBillingPropertyInterface {
  billing: BillingInterface;
}
export interface RequestBillingPropertyInterface {
  billing: BillingInterface | null;
}

const RecurringAutoPayFinalizedPropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractRecurringAutoPayType.FINALIZED],
    },
    source: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
  },
};

interface RecurringAutoPayFinalizedInterface {
  type: typeof ContractRecurringAutoPayType.FINALIZED;
  source?: string; // The payment source Id
}

const RecurringSchema = {
  type: [JsonSchemaType.OBJECT],
  additionalProperties: false,
  required: ["frequency", "terms"],
  properties: {
    autoPay: {
      type: JsonSchemaType.OBJECT,
      oneOf: [RecurringAutoPayFinalizedPropertySchema],
    },
    frequency: {
      type: JsonSchemaType.STRING,
      enum: RenewalFrequencySchemaEnum,
    },
    terms: {
      type: JsonSchemaType.NUMBER,
    },
    offset: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

export const RequestRecurringPropertySchema = {
  recurring: {
    ...RecurringSchema,
    type: [JsonSchemaType.OBJECT, JsonSchemaType.NULL],
  },
};

export const ResponseRecurringPropertySchema = {
  recurring: RecurringSchema,
};

type RecurringAutoPayInterface = RecurringAutoPayFinalizedInterface;

interface RecurringInterface {
  autoPay?: RecurringAutoPayInterface;
  frequency: AnyRenewalFrequency;
  terms: number;
  offset?: number;
}

export interface RequestRecurringPropertyInterface {
  recurring: RecurringInterface | null;
}

export interface ResponseRecurringPropertyInterface {
  recurring: RecurringInterface;
}

/**
 * LINE ITEM
 */
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

const ProductTierRequestSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "price"],
  properties: {
    id: constructUIDSchema([UIDPrefix.PRODUCT_TIER]),
    price: ProductTierPriceRequest,
  },
};

const ProductRequestPropertySchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "tier"],
    properties: {
      id: constructUIDSchema([UIDPrefix.PRODUCT]),
      tier: ProductTierRequestSchema,
    },
  },
};

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

const ProductResponsePropertySchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "label", "tier"],
    properties: {
      id: constructUIDSchema([UIDPrefix.PRODUCT]),
      label: {
        type: JsonSchemaType.STRING,
      },
      tier: ProductTierResponseSchema,
    },
  },
};

const LineItemRequestPropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["product"],
  properties: {
    ...ProductRequestPropertySchema,
    membership: constructUIDSchema([UIDPrefix.MEMBERSHIP]),
    quantity: {
      type: JsonSchemaType.NUMBER,
    },
    label: {
      type: JsonSchemaType.STRING,
    },
    description: {
      type: JsonSchemaType.STRING,
    },
    amount: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

export const LineItemsRequestPropertySchema = {
  lines: {
    type: JsonSchemaType.ARRAY,
    items: LineItemRequestPropertySchema,
  },
};
export interface LineItemsRequestPropertyInterface {
  lines: ContractLineItemRequestInterface[];
}

const LineItemResponsePropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["quantity", "product", "label", "amount"],
  properties: {
    ...ProductResponsePropertySchema,
    membership: constructUIDSchema([UIDPrefix.MEMBERSHIP]),
    quantity: {
      type: JsonSchemaType.NUMBER,
    },
    label: {
      type: JsonSchemaType.STRING,
    },
    description: {
      type: JsonSchemaType.STRING,
    },
    amount: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

export const LineItemsResponsePropertySchema = {
  lines: {
    type: JsonSchemaType.ARRAY,
    items: LineItemResponsePropertySchema,
  },
};

export interface LineItemsResponsePropertyInterface {
  lines: ContractLineItemResponseInterface[];
}
