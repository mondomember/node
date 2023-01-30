import { CustomerType } from "./constants";

export interface CompanyCustomerResponse {
  id: string;
  type: typeof CustomerType.COMPANY;

  name: string;
}

export interface ContactCustomerResponse {
  id: string;
  type: typeof CustomerType.CONTACT;

  email: string;
  firstName?: string;
  lastName?: string;
}

export type CustomerResponseType =
  | CompanyCustomerResponse
  | ContactCustomerResponse;

export interface CustomerPropertyResponse {
  customer: CustomerResponseType;
}

export interface CustomerRequestType {
  id: string;
}

export interface CustomerPropertyRequest {
  customer: CustomerRequestType;
}
