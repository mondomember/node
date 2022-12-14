import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";
import * as CRM from "../../../../../services/crm";
import * as Membership from "../../../../../services/membership";
import * as Payment from "../../../../../services/payment";
import {
  InvoiceStatusEnum,
  AnyInvoiceStatus,
  InvoicePaymentMethodType,
  AnyInvoicePaymentMethodType,
  InvoicePaymentReceiptType,
  InvoicePaymentMethodEnum,
  InvoiceLineItemType,
  InvoiceAutoPayType,
  InvoicePaymentStatus,
} from "./interfaces";

export const InvoiceIdSchema = constructUIDSchema([UIDPrefix.INVOICE]);

export const InvoiceIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.INVOICE
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: InvoiceStatusEnum,
  },
};

export interface StatusPropertyInterface {
  status: AnyInvoiceStatus;
}

export const ContractPropertySchema = {
  contract: constructUIDSchema([Membership.UIDPrefix.CONTRACT]),
};

export interface ContractPropertyInterface {
  contract: string;
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

export const MembershipsPropertySchema = {
  memberships: {
    type: JsonSchemaType.ARRAY,
    items: constructUIDSchema([Membership.UIDPrefix.MEMBERSHIP]),
    uniqueItems: true,
  },
};

export interface MembershipsPropertyInterface {
  memberships: string[];
}

export const DiscountPropertySchema = {
  discount: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["amount"],
    properties: {
      amount: {
        type: JsonSchemaType.NUMBER,
      },
      description: {
        type: JsonSchemaType.STRING,
      },
    },
  },
};

export interface DiscountPropertyInterface {
  discount: {
    amount: number;
    description?: string;
  };
}

export const DueAtPropertySchema = {
  dueAt: {
    type: JsonSchemaType.STRING,
    format: "date-time",
  },
};

export interface DueAtPropertyInterface {
  dueAt: string;
}

export const AdjustmentsTotalPropertySchema = {
  adjustmentsTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface AdjustmentsTotalPropertyInterface {
  adjustmentsTotal: number;
}

export const LinesTotalPropertySchema = {
  linesTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface LinesTotalPropertyInterface {
  linesTotal: number;
}

export const PayableTotalPropertySchema = {
  payableTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface PayableTotalPropertyInterface {
  payableTotal: number;
}

export const AdjustedTotalPropertySchema = {
  adjustedTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface AdjustedTotalPropertyInterface {
  adjustedTotal: number;
}

export const CustomerPropertySchema = {
  customer: {
    type: JsonSchemaType.OBJECT,
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

export const PaymentIntentPropertySchema = {
  paymentIntent: {
    type: JsonSchemaType.STRING,
    enum: InvoicePaymentMethodEnum,
  },
};

export interface PaymentIntentPropertyInterface {
  paymentIntent: AnyInvoicePaymentMethodType;
}

const AutoPayFinalizedPropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceAutoPayType.FINALIZED],
    },
    source: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
  },
};

interface AutoPayFinalizedPropertyInterface {
  autoPay: {
    type: typeof InvoiceAutoPayType.FINALIZED;
    source?: string; // The payment source Id
  };
}

export const AutoPayPropertySchema = {
  autoPay: {
    type: JsonSchemaType.OBJECT,
    oneOf: [AutoPayFinalizedPropertySchema],
  },
};

export type AutoPayPropertyInterface = AutoPayFinalizedPropertyInterface;

const InvoicePaymentMethodOfflineResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [
        InvoicePaymentMethodType.CASH,
        InvoicePaymentMethodType.CHECK,
        InvoicePaymentMethodType.WIRE,
      ],
    },
    reference: {
      type: JsonSchemaType.STRING,
    },
  },
};

interface InvoicePaymentMethodOfflineResponseInterface {
  type:
    | typeof InvoicePaymentMethodType.CASH
    | typeof InvoicePaymentMethodType.CHECK
    | typeof InvoicePaymentMethodType.WIRE;
  reference?: string;
}

const InvoicePaymentMethodOnlineResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type"],
  properties: {
    id: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoicePaymentMethodType.SOURCE],
    },
  },
};

interface InvoicePaymentMethodOnlineResponseInterface {
  type: typeof InvoicePaymentMethodType.SOURCE;
  id: string;
}

const InvoicePaymentMethodResponseSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    InvoicePaymentMethodOfflineResponseSchema,
    InvoicePaymentMethodOnlineResponseSchema,
  ],
};

type InvoicePaymentMethodResponseInterface =
  | InvoicePaymentMethodOfflineResponseInterface
  | InvoicePaymentMethodOnlineResponseInterface;

const InvoicePaymentReceiptManualResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoicePaymentReceiptType.MANUAL],
    },
  },
};

interface InvoicePaymentReceiptManualResponseInterface {
  type: typeof InvoicePaymentReceiptType.MANUAL;
}

const InvoicePaymentReceiptChargeResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type", "reference"],
  properties: {
    id: constructUIDSchema([Payment.UIDPrefix.CHARGE]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoicePaymentReceiptType.CHARGE],
    },
    reference: {
      type: JsonSchemaType.STRING,
    },
  },
};

interface InvoicePaymentReceiptChargeResponseInterface {
  type: typeof InvoicePaymentReceiptType.CHARGE;
  id: string;
  reference: string;
}

const InvoicePaymentReceiptResponseSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    InvoicePaymentReceiptManualResponseSchema,
    InvoicePaymentReceiptChargeResponseSchema,
  ],
};

type InvoicePaymentReceiptResponseInterface =
  | InvoicePaymentReceiptManualResponseInterface
  | InvoicePaymentReceiptChargeResponseInterface;

export const SuccessfulPaymentResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["status", "paidAt", "method", "receipt"],
  properties: {
    status: {
      type: JsonSchemaType.STRING,
      enum: [InvoicePaymentStatus.SUCCCESSFUL],
    },
    paidAt: {
      type: JsonSchemaType.STRING,
      format: "date-time",
    },
    method: InvoicePaymentMethodResponseSchema,
    receipt: InvoicePaymentReceiptResponseSchema,
  },
};

export const IncompletePaymentResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["status"],
  properties: {
    status: {
      type: JsonSchemaType.STRING,
      enum: [InvoicePaymentStatus.PENDING, InvoicePaymentStatus.FAILED],
    },
  },
};

export const PaymentPropertyResponseSchema = {
  payment: {
    type: JsonSchemaType.OBJECT,
    oneOf: [SuccessfulPaymentResponseSchema, IncompletePaymentResponseSchema],
  },
};

interface SuccessfulInvoicePaymentResponseInterface {
  status: typeof InvoicePaymentStatus.SUCCCESSFUL;
  method: InvoicePaymentMethodResponseInterface;
  paidAt: string;
  receipt: InvoicePaymentReceiptResponseInterface;
  notes?: string;
}

interface IncompleteInvoicePaymentResponseInterface {
  status:
    | typeof InvoicePaymentStatus.FAILED
    | typeof InvoicePaymentStatus.PENDING;
  notes?: string;
}

export type InvoicePaymentResponseInterface =
  | SuccessfulInvoicePaymentResponseInterface
  | IncompleteInvoicePaymentResponseInterface;

export interface PaymentPropertyResponseInterface {
  payment: InvoicePaymentResponseInterface;
}

const ProductTierPriceResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["version"],
  properties: {
    version: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

const ProductTierResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "price"],
  properties: {
    id: constructUIDSchema([Membership.UIDPrefix.PRODUCT_TIER]),
    price: ProductTierPriceResponseSchema,
  },
};

const ProductPropertySchema = {
  product: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id", "tier"],
    properties: {
      id: constructUIDSchema([Membership.UIDPrefix.PRODUCT]),
      tier: ProductTierResponseSchema,
    },
  },
};

const CustomLineItemRequestPropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label", "amount", "type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceLineItemType.CUSTOM],
    },
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

const ProductLineItemRequestPropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["product", "type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceLineItemType.PRODUCT],
    },
    quantity: {
      type: JsonSchemaType.NUMBER,
    },
    ...ProductPropertySchema,
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

const LineItemRequestPropertySchema = {
  type: JsonSchemaType.OBJECT,
  discriminator: { propertyName: "type" },
  oneOf: [
    CustomLineItemRequestPropertySchema,
    ProductLineItemRequestPropertySchema,
  ],
};

export const LineItemsRequestPropertySchema = {
  lines: {
    type: JsonSchemaType.ARRAY,
    items: LineItemRequestPropertySchema,
  },
};

interface ProductRequestInterface {
  id: string;
  tier: {
    id: string;
    price: {
      version: number;
    };
  };
}

type CustomLineItemRequestInterface = {
  type: typeof InvoiceLineItemType.CUSTOM;
  label: string;
  description?: string;
  quantity?: number;
  amount: number;
};

type ProductLineItemRequestInterface = {
  type: typeof InvoiceLineItemType.PRODUCT;
  product: ProductRequestInterface;
  label?: string;
  description?: string;
  quantity?: number;
  amount?: number;
};

export type InvoiceLineItemRequestInterface =
  | CustomLineItemRequestInterface
  | ProductLineItemRequestInterface;

interface ProductResponseInterface {
  id: string;
  label: string;
  tier: {
    id: string;
    label: string;
    price: {
      version: number;
      amount: number;
    };
  };
}

type CustomLineItemResponseInterface = {
  type: typeof InvoiceLineItemType.CUSTOM;
  label: string;
  description?: string;
  quantity: number;
  amount: number;
};

type ProductLineItemResponseInterface = {
  type: typeof InvoiceLineItemType.PRODUCT;
  product: ProductResponseInterface;
  label: string;
  description?: string;
  quantity: number;
  amount: number;
};

export type InvoiceLineItemResponseInterface =
  | CustomLineItemResponseInterface
  | ProductLineItemResponseInterface;

export interface LineItemsRequestPropertyInterface {
  lines: InvoiceLineItemRequestInterface[];
}

const CustomLineItemResponsePropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "label", "quantity", "amount"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceLineItemType.CUSTOM],
    },
    label: {
      type: JsonSchemaType.STRING,
    },
    description: {
      type: JsonSchemaType.STRING,
    },
    quantity: {
      type: JsonSchemaType.NUMBER,
    },
    amount: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

const ProductLineItemResponsePropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "label", "quantity", "amount"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceLineItemType.PRODUCT],
    },
    ...ProductPropertySchema,
    label: {
      type: JsonSchemaType.STRING,
    },
    description: {
      type: JsonSchemaType.STRING,
    },
    quantity: {
      type: JsonSchemaType.NUMBER,
    },
    amount: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

const LineItemResponsePropertySchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    CustomLineItemResponsePropertySchema,
    ProductLineItemResponsePropertySchema,
  ],
};

export const LineItemsResponsePropertySchema = {
  lines: {
    type: JsonSchemaType.ARRAY,
    items: LineItemResponsePropertySchema,
  },
};

export interface LineItemsResponsePropertyInterface {
  lines: InvoiceLineItemResponseInterface[];
}
