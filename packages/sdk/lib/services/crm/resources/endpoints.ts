import Companies from "./companies/endpoints";
import Contacts from "./contacts/endpoints";
import CompanyContacts from "./company-contacts/endpoints";

import { ClientInstance } from "../../../client/interfaces";

export class CRMEndpoints {
  readonly Companies: Companies;
  readonly Contacts: Contacts;
  readonly CompanyContacts: CompanyContacts;

  constructor(readonly client: ClientInstance) {
    this.Companies = new Companies(this.client);
    this.Contacts = new Contacts(this.client);
    this.CompanyContacts = new CompanyContacts(this.client);
  }
}
