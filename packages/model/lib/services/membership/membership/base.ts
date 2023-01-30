import { AnyMembershipStatus } from "./interfaces";

export interface StatusProperty {
  status: AnyMembershipStatus;
}

export interface ContactsProperty {
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

export interface PeriodProperty {
  period: {
    startAt: string;
    endAt?: string;
  };
}

export interface IsDelegatedProperty {
  delegated: true;
}

export interface DescriptionProperty {
  description: string;
}

export interface ProductPropertyRequest {
  product: {
    id: string;
  };
}

interface AutoPay {
  source: string | "DEFAULT";
}

export interface ProductPropertyResponse {
  product: {
    id: string;
    label: string;
  };
}

export interface MembershipRecurringResponse {
  autoPay?: AutoPay;
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
