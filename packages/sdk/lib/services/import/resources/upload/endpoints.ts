import { ClientInstance } from "../../../../client";

import { UploadResourceEndpoints } from "./resource";

const PATH = {
  base: "imports/upload",
};

/**
 * A collection of upload endpoints.
 */
export default class UploadEndpoints {
  readonly Companies: UploadResourceEndpoints;
  readonly Contacts: UploadResourceEndpoints;
  readonly Memberships: UploadResourceEndpoints;
  readonly Contracts: UploadResourceEndpoints;
  readonly Products: UploadResourceEndpoints;
  readonly ProductTiers: UploadResourceEndpoints;
  readonly ProductTierPrices: UploadResourceEndpoints;

  constructor(readonly client: ClientInstance) {
    this.Companies = new UploadResourceEndpoints(
      `${PATH.base}/companies`,
      client
    );
    this.Contacts = new UploadResourceEndpoints(
      `${PATH.base}/contacts`,
      client
    );
    this.Memberships = new UploadResourceEndpoints(
      `${PATH.base}/memberships`,
      client
    );
    this.Contracts = new UploadResourceEndpoints(
      `${PATH.base}/contracts`,
      client
    );
    this.Products = new UploadResourceEndpoints(
      `${PATH.base}/products`,
      client
    );
    this.ProductTiers = new UploadResourceEndpoints(
      `${PATH.base}/product-tiers`,
      client
    );
    this.ProductTierPrices = new UploadResourceEndpoints(
      `${PATH.base}/product-tier-prices`,
      client
    );
  }
}
