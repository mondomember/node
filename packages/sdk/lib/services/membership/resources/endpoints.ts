import Contracts from "./contracts/endpoints";
import Memberships from "./memberships/endpoints";
import Products from "./products/endpoints";

import { ClientInstance } from "../../../client/interfaces";

export class MembershipEndpoints {
  readonly Contracts: Contracts;
  readonly Memberships: Memberships;
  readonly Products: Products;

  constructor(readonly client: ClientInstance) {
    this.Contracts = new Contracts(this.client);
    this.Memberships = new Memberships(this.client);
    this.Products = new Products(this.client);
  }
}
