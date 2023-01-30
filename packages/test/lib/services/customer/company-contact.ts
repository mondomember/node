import { Customer } from "@mondomember/model";

import { createTestCompany } from "./company";
import { createTestContact } from "./contact";

import {
  createCreatedAtProperty,
  createMetadataProperty,
  createPropertiesProperty,
  createUpdatedAtProperty,
} from "../../utils";

function createCompany() {
  const company = createTestCompany();

  return {
    id: company.id,
    name: company.name,
  };
}

function createContact() {
  const contact = createTestContact();

  return {
    id: contact.id,
    email: contact.email,
    firstName: contact.firstName,
    lastName: contact.lastName,
  };
}

export function createTestCompanyContact(
  overrides?: Partial<Customer.CompanyContactResponseItem>
): Customer.CompanyContactResponseItem {
  return {
    ...{
      company: createCompany(),
      contact: createContact(),
    },
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overrides,
  };
}

export function createTestUpsertCompanyContact(
  overrides?: Partial<Customer.CompanyContactUpsertItem>
): Customer.CompanyContactUpsertItem {
  return {
    ...createPropertiesProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}
