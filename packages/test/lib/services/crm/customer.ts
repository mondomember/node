import { Chance } from "chance";
import { CRM } from "@mondomember/sdk";

import { createTestCompany } from "./company";
import { createTestContact } from "./contact";
import { generateTestKSUID } from "../../utils";

const chance: Chance.Chance = new Chance();

export function createTestCustomer():
  | CRM.CompanyCustomerResponseInterface
  | CRM.ContactCustomerResponseInterface {
  return chance.pickone([
    createTestCompanyCustomer(),
    createTestContactCustomer(),
  ]);
}

export function createTestCompanyCustomer(): CRM.CompanyCustomerResponseInterface {
  const company = createTestCompany();

  return {
    id: company.id,
    type: CRM.CustomerType.COMPANY,
    name: company.name,
  };
}

export function createTestContactCustomer(): CRM.ContactCustomerResponseInterface {
  const contact = createTestContact();

  return {
    id: contact.id,
    type: CRM.CustomerType.CONTACT,
    email: contact.email,
    firstName: contact.firstName,
    lastName: contact.lastName,
  };
}

export function createTestCustomerContacts(): [string, string, string] {
  return [
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
  ];
}
