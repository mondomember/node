import { InvoiceResponseItem } from "../billing";
import {
  CompanyContactResponseItem,
  CompanyResponseItem,
  ContactResponseItem,
} from "../customer";
import { ContractResponseItem, MembershipResponseItem } from "../membership";
import {
  ChargeResponseItem,
  GatewayResponseItem,
  RefundResponseItem,
  SourceResponseItem,
} from "../payment";
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
} from "./constants";

export type GenericDeliveryPayload = {
  id: string;
  subscription: string;
  event: AnyWebhookEvent;
  data: Record<string, any>;
};

/** Billing */
export type BillingInvoiceDeliveryPayload = GenericDeliveryPayload & {
  event: AnyBillingInvoiceWebhookEvents;
  data: InvoiceResponseItem;
};

/** Customers */
export type CustomerContactDeliveryPayload = GenericDeliveryPayload & {
  event: AnyCustomerContactWebhookEvents;
  data: ContactResponseItem;
};

export type CustomerCompanyDeliveryPayload = GenericDeliveryPayload & {
  event: AnyCustomerCompanyWebhookEvents;
  data: CompanyResponseItem;
};

export type CustomerCompanyContactDeliveryPayload = GenericDeliveryPayload & {
  event: AnyCustomerCompanyContactWebhookEvents;
  data: CompanyContactResponseItem;
};

/** Memberships */
export type MembershipContractDeliveryPayload = GenericDeliveryPayload & {
  event: AnyMembershipContractWebhookEvents;
  data: ContractResponseItem;
};

export type MembershipMembershipDeliveryPayload = GenericDeliveryPayload & {
  event: AnyMembershipMembershipWebhookEvents;
  data: MembershipResponseItem;
};

/** Payment */
export type PaymentGatewayDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentGatewayWebhookEvents;
  data: GatewayResponseItem;
};

export type PaymentChargeDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentChargeWebhookEvents;
  data: ChargeResponseItem;
};

export type PaymentRefundDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentRefundWebhookEvents;
  data: RefundResponseItem;
};

export type PaymentSourceDeliveryPayload = GenericDeliveryPayload & {
  event: AnyPaymentSourceWebhookEvents;
  data: SourceResponseItem;
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
