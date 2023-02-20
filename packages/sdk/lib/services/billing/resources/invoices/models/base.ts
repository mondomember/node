import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  constructUIDSchema,
} from "../../../../../models";
import { InvoiceStatusEnum, InvoicePaymentMethodEnum } from "./interfaces";
import { GatewayResponseItemSchema } from "../../../../payment";
import { Billing, Payment, Membership, Customer } from "@mondomember/model";

export const InvoiceIdSchema = constructUIDSchema([Billing.UIDPrefix.INVOICE]);

export const InvoiceIdPropertySchema = constructUIDPropertySchema(
  Billing.UIDPrefix.INVOICE
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: InvoiceStatusEnum,
  },
};

export const ContractPropertySchema = {
  contract: constructUIDSchema([Membership.UIDPrefix.CONTRACT]),
};

export const ContactsPropertySchema = {
  contacts: {
    type: JsonSchemaType.ARRAY,
    items: constructUIDSchema([Customer.UIDPrefix.CONTACT]),
    uniqueItems: true,
    maxItems: 10,
  },
};

export const MembershipsPropertySchema = {
  memberships: {
    type: JsonSchemaType.ARRAY,
    items: constructUIDSchema([Membership.UIDPrefix.MEMBERSHIP]),
    uniqueItems: true,
  },
};

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

export const DueAtPropertySchema = {
  dueAt: {
    type: JsonSchemaType.STRING,
    format: "date-time",
  },
};

export const AdjustmentsTotalPropertySchema = {
  adjustmentsTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export const LinesTotalPropertySchema = {
  linesTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export const PayableTotalPropertySchema = {
  payableTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export const AdjustedTotalPropertySchema = {
  adjustedTotal: {
    type: JsonSchemaType.NUMBER,
  },
};

export const CustomerPropertySchema = {
  customer: {
    type: JsonSchemaType.OBJECT,
    properties: {
      id: constructUIDSchema([
        Customer.UIDPrefix.COMPANY,
        Customer.UIDPrefix.CONTACT,
      ]),
    },
  },
};

const SimpleGatewaySchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    id: constructUIDSchema([Payment.UIDPrefix.GATEWAY]),
  },
};

export const GatewayPropertySchema = {
  gateway: {
    type: JsonSchemaType.OBJECT,
    oneOf: [SimpleGatewaySchema, GatewayResponseItemSchema],
  },
};

export const PaymentIntentPropertySchema = {
  paymentIntent: {
    type: JsonSchemaType.STRING,
    enum: InvoicePaymentMethodEnum,
  },
};

const AutoPayFinalizedSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoiceAutoPayType.FINALIZED],
    },
    source: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
  },
};

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

const InvoicePaymentMethodOfflineResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [
        Billing.InvoicePaymentMethodType.CASH,
        Billing.InvoicePaymentMethodType.CHECK,
        Billing.InvoicePaymentMethodType.WIRE,
      ],
    },
    reference: {
      type: JsonSchemaType.STRING,
    },
  },
};

const InvoicePaymentMethodOnlineResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type"],
  properties: {
    id: constructUIDSchema([Payment.UIDPrefix.SOURCE]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoicePaymentMethodType.SOURCE],
    },
  },
};

const InvoicePaymentMethodResponseSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    InvoicePaymentMethodOfflineResponseSchema,
    InvoicePaymentMethodOnlineResponseSchema,
  ],
};

const InvoicePaymentReceiptManualResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoicePaymentReceiptType.MANUAL],
    },
  },
};

const InvoicePaymentReceiptChargeResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type", "reference"],
  properties: {
    id: constructUIDSchema([Payment.UIDPrefix.CHARGE]),
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoicePaymentReceiptType.CHARGE],
    },
    reference: {
      type: JsonSchemaType.STRING,
    },
  },
};

const InvoicePaymentReceiptResponseSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    InvoicePaymentReceiptManualResponseSchema,
    InvoicePaymentReceiptChargeResponseSchema,
  ],
};

export const SuccessfulPaymentResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["status", "paidAt", "method", "receipt", "lastActivityAt"],
  properties: {
    status: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoicePaymentStatus.SUCCCESSFUL],
    },
    paidAt: {
      type: JsonSchemaType.STRING,
      format: "date-time",
    },
    lastActivityAt: {
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
  required: ["status", "method", "lastActivityAt"],
  properties: {
    status: {
      type: JsonSchemaType.STRING,
      enum: [
        Billing.InvoicePaymentStatus.PENDING,
        Billing.InvoicePaymentStatus.FAILED,
      ],
    },
    method: InvoicePaymentMethodResponseSchema,
    lastActivityAt: {
      type: JsonSchemaType.STRING,
      format: "date-time",
    },
  },
};

export const PaymentPropertyResponseSchema = {
  payment: {
    type: JsonSchemaType.OBJECT,
    oneOf: [SuccessfulPaymentResponseSchema, IncompletePaymentResponseSchema],
  },
};

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
      enum: [Billing.InvoiceLineItemType.CUSTOM],
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
      enum: [Billing.InvoiceLineItemType.PRODUCT],
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

const CustomLineItemResponsePropertySchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "label", "quantity", "amount"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoiceLineItemType.CUSTOM],
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
      enum: [Billing.InvoiceLineItemType.PRODUCT],
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
