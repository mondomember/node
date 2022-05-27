export const UIDPrefix = {
  SUBSCRIPTION: "wbhs",
  DELIVERY: "wbhd",
} as const;

export const CustomerCompanyWebhookEvents = {
  COMPANY_CREATE: `crm.company.insert`,
  COMPANY_UPDATE: `crm.company.modify`,
  COMPANY_DELETE: `crm.company.remove`,
  COMPANY_RESTORE: `crm.company.restore`,
} as const;

export const CustomerContactWebhookEvents = {
  CONTACT_CREATE: `crm.contact.insert`,
  CONTACT_UPDATE: `crm.contact.modify`,
  CONTACT_DELETE: `crm.contact.remove`,
  CONTACT_RESTORE: `crm.contact.restore`,
} as const;

export const CustomerCompanyContactWebhookEvents = {
  COMPANY_CONTACT_CREATE: `crm.company-contact.insert`,
  COMPANY_CONTACT_UPDATE: `crm.company-contact.modify`,
  COMPANY_CONTACT_DELETE: `crm.company-contact.remove`,
  COMPANY_CONTACT_RESTORE: `crm.company-contact.restore`,
} as const;

export const CustomerWebhookEvents = {
  ...CustomerCompanyWebhookEvents,
  ...CustomerContactWebhookEvents,
  ...CustomerCompanyContactWebhookEvents,
} as const;

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

export const MembershipWebhookEvents = {
  ...MembershipMembershipWebhookEvents,
  ...MembershipContractWebhookEvents,
};

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

export const BillingWebhookEvents = {
  ...BillingInvoiceWebhookEvents,
};

export const PaymentGatewayWebhookEvents = {
  GATEWAY_CREATE: `payment.gateway.insert`,
  GATEWAY_UPDATE: `payment.gateway.modify`,
  GATEWAY_DELETE: `payment.gateway.remove`,
  GATEWAY_RESTORE: `payment.gateway.restore`,

  GATEWAY_DEFAULT_DEMOTE: `payment.gateway.default.demote`,
  GATEWAY_DEFAULT_PROMOTE: `payment.gateway.default.promote`,
} as const;

export const PaymentSourceWebhookEvents = {
  SOURCE_CREATE: `payment.source.insert`,
  SOURCE_UPDATE: `payment.source.modify`,
  SOURCE_DELETE: `payment.source.remove`,
  SOURCE_RESTORE: `payment.source.restore`,

  SOURCE_DEFAULT_DEMOTE: `payment.source.default.demote`,
  SOURCE_DEFAULT_PROMOTE: `payment.source.default.promote`,
} as const;

export const PaymentChargeWebhookEvents = {
  CHARGE_SUCCEEDED: `payment.charge.succeeded`,
  CHARGE_FAILED: `payment.charge.failed`,
  CHARGE_REFUNDED: `payment.charge.refunded`,
  CHARGE_PARTIALLY_REFUNDED: `payment.charge.refunded.partially`,
} as const;

export const PaymentRefundWebhookEvents = {
  REFUND_SUCCEEDED: `payment.refund.succeeded`,
  REFUND_FAILED: `payment.refund.failed`,
} as const;

export const PaymentWebhookEvents = {
  ...PaymentGatewayWebhookEvents,
  ...PaymentSourceWebhookEvents,
  ...PaymentChargeWebhookEvents,
  ...PaymentRefundWebhookEvents,
} as const;

export const WebhookEvents = {
  ...CustomerWebhookEvents,
  ...MembershipWebhookEvents,
  ...BillingWebhookEvents,
  ...PaymentWebhookEvents,
} as const;

export type AnyWebhookEvent = typeof WebhookEvents[keyof typeof WebhookEvents];
