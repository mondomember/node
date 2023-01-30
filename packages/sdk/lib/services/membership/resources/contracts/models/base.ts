import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";

import { ContractStatusEnum, RenewalFrequencySchemaEnum } from "./interfaces";
import { Billing, Customer, Payment, Membership } from "@mondomember/model";

export const ContractIdSchema = constructUIDSchema([
  Membership.UIDPrefix.CONTRACT,
]);

export const ContractIdPropertySchema = constructUIDPropertySchema(
  Membership.UIDPrefix.CONTRACT
);

export const ContractParentPropertySchema = {
  parent: ContractIdSchema,
};

export const ContractChildPropertySchema = {
  child: ContractIdSchema,
};

export const InvoicePropertySchema = {
  invoice: constructUIDSchema([Billing.UIDPrefix.INVOICE]),
};

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: ContractStatusEnum,
  },
};

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

export const ContactsPropertySchema = {
  contacts: {
    type: JsonSchemaType.ARRAY,
    items: constructUIDSchema([Customer.UIDPrefix.CONTACT]),
    uniqueItems: true,
    maxItems: 10,
  },
};

export const CustomerPropertySchema = {
  customer: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      id: constructUIDSchema([
        Customer.UIDPrefix.COMPANY,
        Customer.UIDPrefix.CONTACT,
      ]),
    },
  },
};

const AutoPaySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Membership.ContractAutoPayType.FINALIZED],
    },
    source: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
  },
};

const AutoPayPropertySchema = {
  autoPay: AutoPaySchema,
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

const FinalizedBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Membership.ContractBillingTermType.FINALIZED],
    },
    ...AutoPayPropertySchema,
  },
};

const ApprovedBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Membership.ContractBillingTermType.APPROVED],
    },
    ...AutoPayPropertySchema,
  },
};

const OffsetBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Membership.ContractBillingTermType.OFFSET],
    },
    seconds: {
      type: JsonSchemaType.NUMBER,
    },
    ...AutoPayPropertySchema,
  },
};

const ScheduledBillingSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Membership.ContractBillingTermType.SCHEDULED],
    },
    date: {
      type: JsonSchemaType.STRING,
    },
    ...AutoPayPropertySchema,
  },
};

export const RequestBillingPropertySchema = {
  billing: {
    discriminator: { propertyName: "type" },
    oneOf: [
      NullBillingSchema,
      FinalizedBillingSchema,
      ApprovedBillingSchema,
      OffsetBillingSchema,
      ScheduledBillingSchema,
    ],
  },
};

export const ResponseBillingPropertySchema = {
  billing: {
    discriminator: { propertyName: "type" },
    oneOf: [
      FinalizedBillingSchema,
      ApprovedBillingSchema,
      OffsetBillingSchema,
      ScheduledBillingSchema,
    ],
  },
};

const RecurringSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["frequency", "terms"],
  properties: {
    ...AutoPayPropertySchema,
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
      RecurringSchema,
      {
        type: JsonSchemaType.NULL,
      },
    ],
  },
};

export const ResponseRecurringPropertySchema = {
  recurring: RecurringSchema,
};

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
    id: constructUIDSchema([Membership.UIDPrefix.PRODUCT_TIER]),
    price: ProductTierPriceRequest,
  },
};

const ProductRequestPropertySchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "tier"],
    properties: {
      id: constructUIDSchema([Membership.UIDPrefix.PRODUCT]),
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
    id: constructUIDSchema([Membership.UIDPrefix.PRODUCT_TIER]),
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
      id: constructUIDSchema([Membership.UIDPrefix.PRODUCT]),
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
      enum: [Membership.ContractLineItemType.PRODUCT],
    },
    ...ProductRequestPropertySchema,
    membership: constructUIDSchema([Membership.UIDPrefix.MEMBERSHIP]),
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

const LineItemResponsePropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "quantity", "product", "label", "amount"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Membership.ContractLineItemType.PRODUCT],
    },
    ...ProductResponsePropertySchema,
    membership: constructUIDSchema([Membership.UIDPrefix.MEMBERSHIP]),
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
