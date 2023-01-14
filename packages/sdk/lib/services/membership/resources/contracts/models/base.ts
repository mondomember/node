import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";
import * as CRM from "../../../../../services/crm";
import * as Payment from "../../../../../services/payment";
import * as Billing from "../../../../../services/billing";
import {
  ContractStatus,
  ContractStatusEnum,
  ContractLineItemType,
  ContractBillingTermType,
  ContractAutoPayType,
  RenewalFrequencySchemaEnum,
  AnyRenewalFrequency,
  ContractLineItemRequestInterface,
  ContractLineItemResponseInterface,
} from "./interfaces";

export const ContractIdSchema = constructUIDSchema([UIDPrefix.CONTRACT]);

export const ContractIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.CONTRACT
);

export const ContractParentPropertySchema = {
  parent: ContractIdSchema,
};

export interface ContractParentPropertyInterface {
  parent: string;
}

export const ContractChildPropertySchema = {
  child: ContractIdSchema,
};

export interface ContractChildPropertyInterface {
  child: string;
}

export const InvoicePropertySchema = {
  invoice: constructUIDSchema([Billing.UIDPrefix.INVOICE]),
};

export interface InvoicePropertyInterface {
  invoice: string;
}

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

const AutoPayFinalizedSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractAutoPayType.FINALIZED],
    },
    source: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
  },
};

interface AutoPayFinalizedInterface {
  type: typeof ContractAutoPayType.FINALIZED;
  source?: string; // The payment source Id
}

const NullAutoPaySchema = {
  type: JsonSchemaType.NULL,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [" "],
    },
  },
};

export const ResponseAutoPayPropertySchema = {
  autoPay: {
    type: JsonSchemaType.OBJECT,
    oneOf: [AutoPayFinalizedSchema],
  },
};

export const RequestAutoPayPropertySchema = {
  autoPay: {
    discriminator: { propertyName: "type" },
    oneOf: [NullAutoPaySchema, AutoPayFinalizedSchema],
  },
};

export type RequestAutoPayPropertyInterface = {
  autoPay: AutoPayFinalizedInterface | null;
};

export type ResponseAutoPayPropertyInterface = {
  autoPay: AutoPayFinalizedInterface;
};

const NullBillingSchema = {
  type: JsonSchemaType.NULL,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [" "],
    },
  },
};

const RequestFinalizedBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.FINALIZED],
    },
    ...RequestAutoPayPropertySchema,
  },
};

const ResponseFinalizedBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.FINALIZED],
    },
    ...ResponseAutoPayPropertySchema,
  },
};

interface RequestFinalizedBillingInterface
  extends Partial<RequestAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.FINALIZED;
}

interface ResponseFinalizedBillingInterface
  extends Partial<ResponseAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.FINALIZED;
}

const RequestApprovedBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.APPROVED],
    },
    ...RequestAutoPayPropertySchema,
  },
};

const ResponseApprovedBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractBillingTermType.APPROVED],
    },
    ...ResponseAutoPayPropertySchema,
  },
};

interface RequestApprovedBillingInterface
  extends Partial<RequestAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.APPROVED;
}

interface ResponseApprovedBillingInterface
  extends Partial<ResponseAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.APPROVED;
}

const RequestOffsetBillingSchema = {
  type: JsonSchemaType.OBJECT,
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
    ...RequestAutoPayPropertySchema,
  },
};

const ResponseOffsetBillingSchema = {
  type: JsonSchemaType.OBJECT,
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
    ...ResponseAutoPayPropertySchema,
  },
};

interface RequestOffsetBillingInterface
  extends Partial<RequestAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.OFFSET;
  seconds: number;
}

interface ResponseOffsetBillingInterface
  extends Partial<ResponseAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.OFFSET;
  seconds: number;
}

const RequestScheduledBillingSchema = {
  type: JsonSchemaType.OBJECT,
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
    ...RequestAutoPayPropertySchema,
  },
};

const ResponseScheduledBillingSchema = {
  type: JsonSchemaType.OBJECT,
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
    ...ResponseAutoPayPropertySchema,
  },
};

interface RequestScheduledBillingInterface
  extends Partial<RequestAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.SCHEDULED;
  date: string;
}

interface ResponseScheduledBillingInterface
  extends Partial<ResponseAutoPayPropertyInterface> {
  type: typeof ContractBillingTermType.SCHEDULED;
  date: string;
}

export const RequestBillingPropertySchema = {
  billing: {
    discriminator: { propertyName: "type" },
    oneOf: [
      NullBillingSchema,
      RequestFinalizedBillingSchema,
      RequestApprovedBillingSchema,
      RequestOffsetBillingSchema,
      RequestScheduledBillingSchema,
    ],
  },
};

export const ResponseBillingPropertySchema = {
  billing: {
    discriminator: { propertyName: "type" },
    oneOf: [
      ResponseFinalizedBillingSchema,
      ResponseApprovedBillingSchema,
      ResponseOffsetBillingSchema,
      ResponseScheduledBillingSchema,
    ],
  },
};

export type RequestBillingInterface =
  | RequestFinalizedBillingInterface
  | RequestApprovedBillingInterface
  | RequestOffsetBillingInterface
  | RequestScheduledBillingInterface;

export type ResponseBillingInterface =
  | ResponseFinalizedBillingInterface
  | ResponseApprovedBillingInterface
  | ResponseOffsetBillingInterface
  | ResponseScheduledBillingInterface;

export interface RequestBillingPropertyInterface {
  billing: RequestBillingInterface | null;
}

export interface ResponseBillingPropertyInterface {
  billing: ResponseBillingInterface;
}

const RequestRecurringSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["frequency", "terms"],
  properties: {
    ...RequestAutoPayPropertySchema,
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

const ResponseRecurringSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["frequency", "terms"],
  properties: {
    ...ResponseAutoPayPropertySchema,
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
    oneOf: [
      RequestRecurringSchema,
      {
        type: JsonSchemaType.NULL,
      },
    ],
  },
};

export const ResponseRecurringPropertySchema = {
  recurring: ResponseRecurringSchema,
};

interface RequestRecurringInterface
  extends Partial<RequestAutoPayPropertyInterface> {
  frequency: AnyRenewalFrequency;
  terms: number;
  offset?: number;
}

interface ResponseRecurringInterface
  extends Partial<ResponseAutoPayPropertyInterface> {
  frequency: AnyRenewalFrequency;
  terms: number;
  offset?: number;
}

export interface RequestRecurringPropertyInterface {
  recurring: RequestRecurringInterface | null;
}

export interface ResponseRecurringPropertyInterface {
  recurring: ResponseRecurringInterface;
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

const ProductLineItemRequestPropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "product"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractLineItemType.PRODUCT],
    },
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
    items: ProductLineItemRequestPropertySchema,
  },
};
export interface LineItemsRequestPropertyInterface {
  lines: ContractLineItemRequestInterface[];
}

const LineItemResponsePropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "quantity", "product", "label", "amount"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ContractLineItemType.PRODUCT],
    },
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
