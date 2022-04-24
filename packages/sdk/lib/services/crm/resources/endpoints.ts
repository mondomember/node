import Companies from "./companies/endpoints";
import Contacts from "./contacts/endpoints";

import { ClientInstance } from "../../../client";

export class CRMEndpoints {
  readonly Companies: Companies;
  readonly Contacts: Contacts;

  constructor(readonly client: ClientInstance) {
    this.Companies = new Companies(this.client);
    this.Contacts = new Contacts(this.client);
  }
}
