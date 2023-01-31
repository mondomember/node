export const UIDPrefix = {
  SUBSCRIPTION: "wbhs",
  DELIVERY: "wbhd",
} as const;

export const CustomerCompanyWebhookEvents = {
  COMPANY_CREATE: `customer.company.insert`,
  COMPANY_UPDATE: `customer.company.modify`,
  COMPANY_DELETE: `customer.company.remove`,
  COMPANY_RESTORE: `customer.company.restore`,
} as const;

export type AnyCustomerCompanyWebhookEvents =
  typeof CustomerCompanyWebhookEvents[keyof typeof CustomerCompanyWebhookEvents];

export const CustomerContactWebhookEvents = {
  CONTACT_CREATE: `customer.contact.insert`,
  CONTACT_UPDATE: `customer.contact.modify`,
  CONTACT_DELETE: `customer.contact.remove`,
  CONTACT_RESTORE: `customer.contact.restore`,
} as const;

export type AnyCustomerContactWebhookEvents =
  typeof CustomerContactWebhookEvents[keyof typeof CustomerContactWebhookEvents];

export const CustomerCompanyContactWebhookEvents = {
  COMPANY_CONTACT_CREATE: `customer.company-contact.insert`,
  COMPANY_CONTACT_UPDATE: `customer.company-contact.modify`,
  COMPANY_CONTACT_DELETE: `customer.company-contact.remove`,
  COMPANY_CONTACT_RESTORE: `customer.company-contact.restore`,
} as const;

export type AnyCustomerCompanyContactWebhookEvents =
  typeof CustomerCompanyContactWebhookEvents[keyof typeof CustomerCompanyContactWebhookEvents];

export const CustomerWebhookEvents = {
  ...CustomerCompanyWebhookEvents,
  ...CustomerContactWebhookEvents,
  ...CustomerCompanyContactWebhookEvents,
} as const;

export type AnyCustomerWebhookEvents =
  typeof CustomerWebhookEvents[keyof typeof CustomerWebhookEvents];

export const MembershipMembershipWebhookEvents = {
  MEMBERSHIP_CREATE: `membership.membership.insert`,
  MEMBERSHIP_UPDATE: `membership.membership.modify`,
  MEMBERSHIP_DELETE: `membership.membership.remove`,
  MEMBERSHIP_RESTORE: `membership.membership.restore`,

  MEMBERSHIP_STATUS_PENDING: `membership.membership.status.pending`,
  MEMBERSHIP_STATUS_ACTIVE: `membership.membership.status.active`,
  MEMBERSHIP_STATUS_CANCELED: `membership.membership.status.canceled`,
  MEMBERSHIP_STATUS_LAPSED: `membership.membership.status.lapsed`,
} as const;

export type AnyMembershipMembershipWebhookEvents =
  typeof MembershipMembershipWebhookEvents[keyof typeof MembershipMembershipWebhookEvents];

export const MembershipContractWebhookEvents = {
  CONTRACT_CREATE: `membership.contract.insert`,
  CONTRACT_UPDATE: `membership.contract.modify`,
  CONTRACT_DELETE: `membership.contract.remove`,
  CONTRACT_RESTORE: `membership.contract.restore`,

  CONTRACT_STATUS_APPROVED: `membership.contract.status.approved`,
  CONTRACT_STATUS_PENDING: `membership.contract.status.pending`,
  CONTRACT_STATUS_FULFILLED: `membership.contract.status.fulfilled`,
  CONTRACT_STATUS_CANCEL: `membership.contract.status.cancel`,
  CONTRACT_STATUS_ACTIVE: `membership.contract.status.active`,
} as const;

export type AnyMembershipContractWebhookEvents =
  typeof MembershipContractWebhookEvents[keyof typeof MembershipContractWebhookEvents];

export const MembershipWebhookEvents = {
  ...MembershipMembershipWebhookEvents,
  ...MembershipContractWebhookEvents,
};

export type AnyMembershipWebhookEvents =
  typeof MembershipWebhookEvents[keyof typeof MembershipWebhookEvents];

export const BillingInvoiceWebhookEvents = {
  INVOICE_VIEW: `billing.invoice.view`,
  INVOICE_CREATE: `billing.invoice.insert`,
  INVOICE_UPDATE: `billing.invoice.modify`,
  INVOICE_DELETE: `billing.invoice.remove`,
  INVOICE_RESTORE: `billing.invoice.restore`,

  INVOICE_STATUS_FINALIZE: `billing.invoice.status.finalize`,
  INVOICE_STATUS_VOID: `billing.invoice.status.void`,
  INVOICE_STATUS_PAID: `billing.invoice.status.paid`,
  INVOICE_STATUS_PAST_DUE: `billing.invoice.status.pastDue`,

  INVOICE_PAYMENT_CREATE: `billing.invoice-payment.insert`,
  INVOICE_PAYMENT_UPDATE: `billing.invoice-payment.modify`,
  INVOICE_PAYMENT_ADJUSTMENT: `billing.invoice-payment.adjustment`,
} as const;

export type AnyBillingInvoiceWebhookEvents =
  typeof BillingInvoiceWebhookEvents[keyof typeof BillingInvoiceWebhookEvents];

export const BillingWebhookEvents = {
  ...BillingInvoiceWebhookEvents,
};

export type AnyBillingWebhookEvents =
  typeof BillingWebhookEvents[keyof typeof BillingWebhookEvents];

export const PaymentGatewayWebhookEvents = {
  GATEWAY_CREATE: `payment.gateway.insert`,
  GATEWAY_UPDATE: `payment.gateway.modify`,
  GATEWAY_DELETE: `payment.gateway.remove`,
  GATEWAY_RESTORE: `payment.gateway.restore`,

  GATEWAY_DEFAULT_DEMOTE: `payment.gateway.default.demote`,
  GATEWAY_DEFAULT_PROMOTE: `payment.gateway.default.promote`,
} as const;

export type AnyPaymentGatewayWebhookEvents =
  typeof PaymentGatewayWebhookEvents[keyof typeof PaymentGatewayWebhookEvents];

export const PaymentSourceWebhookEvents = {
  SOURCE_CREATE: `payment.source.insert`,
  SOURCE_UPDATE: `payment.source.modify`,
  SOURCE_DELETE: `payment.source.remove`,
  SOURCE_RESTORE: `payment.source.restore`,

  SOURCE_DEFAULT_DEMOTE: `payment.source.default.demote`,
  SOURCE_DEFAULT_PROMOTE: `payment.source.default.promote`,
} as const;

export type AnyPaymentSourceWebhookEvents =
  typeof PaymentSourceWebhookEvents[keyof typeof PaymentSourceWebhookEvents];

export const PaymentChargeWebhookEvents = {
  CHARGE_CREATE: `payment.charge.insert`,

  CHARGE_CANCELED: `payment.charge.canceled`,
  CHARGE_REQUIRES_ACTION: `payment.charge.require-action`,
  CHARGE_PROCESSING: `payment.charge.processing`,

  CHARGE_SUCCEEDED: `payment.charge.succeeded`,
  CHARGE_FAILED: `payment.charge.failed`,
  CHARGE_REFUNDED: `payment.charge.refunded`,
  CHARGE_PARTIALLY_REFUNDED: `payment.charge.refunded.partially`,
} as const;

export type AnyPaymentChargeWebhookEvents =
  typeof PaymentChargeWebhookEvents[keyof typeof PaymentChargeWebhookEvents];

export const PaymentRefundWebhookEvents = {
  REFUND_SUCCEEDED: `payment.refund.succeeded`,
  REFUND_FAILED: `payment.refund.failed`,
} as const;

export type AnyPaymentRefundWebhookEvents =
  typeof PaymentRefundWebhookEvents[keyof typeof PaymentRefundWebhookEvents];

export const PaymentWebhookEvents = {
  ...PaymentGatewayWebhookEvents,
  ...PaymentSourceWebhookEvents,
  ...PaymentChargeWebhookEvents,
  ...PaymentRefundWebhookEvents,
} as const;

export type AnyPaymentWebhookEvents =
  typeof PaymentWebhookEvents[keyof typeof PaymentWebhookEvents];

export const WebhookEvents = {
  ...CustomerWebhookEvents,
  ...MembershipWebhookEvents,
  ...BillingWebhookEvents,
  ...PaymentWebhookEvents,
} as const;

export type AnyWebhookEvent = typeof WebhookEvents[keyof typeof WebhookEvents];
