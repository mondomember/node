import { Chance } from "chance";
import { Customer } from "@mondomember/model";

import { createTestCompany } from "./company";
import { createTestContact } from "./contact";
import { generateTestKSUID } from "../../utils";

const chance: Chance.Chance = new Chance();

export function createTestCustomer():
  | Customer.CompanyCustomerResponse
  | Customer.ContactCustomerResponse {
  return chance.pickone([
    createTestCompanyCustomer(),
    createTestContactCustomer(),
  ]);
}

export function createTestCompanyCustomer(): Customer.CompanyCustomerResponse {
  const company = createTestCompany();

  return {
    id: company.id,
    type: Customer.CustomerType.COMPANY,
    name: company.name,
  };
}

export function createTestContactCustomer(): Customer.ContactCustomerResponse {
  const contact = createTestContact();

  return {
    id: contact.id,
    type: Customer.CustomerType.CONTACT,
    email: contact.email,
    firstName: contact.firstName,
    lastName: contact.lastName,
  };
}

export function createTestCustomerContacts(): [string, string, string] {
  return [
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
  ];
}
