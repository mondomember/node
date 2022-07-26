import {
  AnyWebhookEvent,
  AnyBillingInvoiceWebhookEvents,
  AnyCustomerContactWebhookEvents,
  AnyCustomerCompanyContactWebhookEvents,
  AnyCustomerCompanyWebhookEvents,
  AnyMembershipContractWebhookEvents,
  AnyMembershipMembershipWebhookEvents,
  AnyPaymentGatewayWebhookEvents,
  AnyPaymentChargeWebhookEvents,
  AnyPaymentRefundWebhookEvents,
  AnyPaymentSourceWebhookEvents,
} from "../constants";
import { Billing, CRM, Membership, Payment } from "@mondomember/sdk";

export type GenericDeliveryPayload = {
  id: string;
  subscription: string;
  event: AnyWebhookEvent;
  data: Record<string, any>;
};

/** Billing */
export type BillingInvoiceDeliveryPayload = GenericDeliveryPayload & {
  event: AnyBillingInvoiceWebhookEvents;
  data: Billing.InvoiceResponseItemInterface;
};

/** Customers */
export type CustomerContactDeliveryPayload = GenericDeliveryPayload & {
  event: AnyCustomerContactWebhookEvents;
  data: CRM.ContactResponseItemInterface;
};

export type CustomerCompanyDeliveryPayload = GenericDeliveryPayload & {
  event: AnyCustomerCompanyWebhookEvents;
  data: CRM.CompanyResponseItemInterface;
};

export type CustomerCompanyContactDeliveryPayload = GenericDeliveryPayload & {
  event: AnyCustomerCompanyContactWebhookEvents;
  data: CRM.CompanyContactResponseItemInterface;
};

/** Memberships */
export type MembershipContractDeliveryPayload = GenericDeliveryPayload & {
  event: AnyMembershipContractWebhookEvents;
  data: Membership.ContractResponseItemInterface;
};

export type MembershipMembershipDeliveryPayload = GenericDeliveryPayload & {
  event: AnyMembershipMembershipWebhookEvents;
  data: Membership.MembershipResponseItemInterface;
};

/** Payment */
export type PaymentGatewayDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentGatewayWebhookEvents;
  data: Payment.GatewayResponseItemInterface;
};

export type PaymentChargeDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentChargeWebhookEvents;
  data: Payment.ChargeResponseItemInterface;
};

export type PaymentRefundDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentRefundWebhookEvents;
  data: Payment.RefundResponseItemInterface;
};

export type PaymentSourceDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentSourceWebhookEvents;
  data: Payment.SourceResponseItemInterface;
};

export type DeliveryPayload =
  | GenericDeliveryPayload
  | BillingInvoiceDeliveryPayload
  | CustomerContactDeliveryPayload
  | CustomerCompanyDeliveryPayload
  | CustomerCompanyContactDeliveryPayload
  | MembershipContractDeliveryPayload
  | MembershipMembershipDeliveryPayload
  | PaymentGatewayDeliveryPayload
  | PaymentChargeDeliveryPayload
  | PaymentRefundDeliveryPayload
  | PaymentSourceDeliveryPayload;
