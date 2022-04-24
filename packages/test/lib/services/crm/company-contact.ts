import { CRM } from "@mondomember/sdk";

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
  overrides?: Partial<CRM.CompanyContactResponseItemInterface>
): CRM.CompanyContactResponseItemInterface {
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
  overrides?: Partial<CRM.CompanyContactUpsertItemInterface>
): CRM.CompanyContactUpsertItemInterface {
  return {
    ...createPropertiesProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}
