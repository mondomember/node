import { ClientInstance, ClientResponse } from "../../../client/interfaces";

import { PaginationParams } from "../../../models";
import {
  Search,
  Customer,
  Membership,
  Billing,
  Payment,
  PaginationPropertyParams,
} from "@mondomember/model";

export interface ListMembershipContractParams
  extends Partial<PaginationPropertyParams> {
  filter?: Search.ContractFilter;
  sort?: Search.SortOrder;
}

export class SearchEndpoints {
  constructor(readonly client: ClientInstance) {}

  /**
   * @returns
   */
  public listItems<Item = any>(
    filter?: Search.AnyFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<Search.SearchResponseList<Item>> {
    return this.client.get("/search", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listItemsByKey<Item = any>(
    key: string,
    filter?: any,
    pagination?: PaginationParams
  ): ClientResponse<Search.SearchResponseList<Item>> {
    return this.client.get(`/search`, {
      params: {
        key,
        filter,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listInvoices(
    filter?: Search.InvoiceFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<Search.SearchResponseList<Billing.InvoiceResponseItem>> {
    return this.client.get("/search/invoices", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listCompanies(
    filter?: Search.CompanyFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<Search.SearchResponseList<Customer.CompanyResponseItem>> {
    return this.client.get("/search/companies", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listContacts(
    filter?: Search.ContactFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<Search.SearchResponseList<Customer.ContactResponseItem>> {
    return this.client.get("/search/contacts", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listCompanyContacts(
    filter?: Search.CompanyContactFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<
    Search.SearchResponseList<Customer.CompanyContactResponseItem>
  > {
    return this.client.get("/search/company-contacts", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listContracts(
    filter?: Search.ContractFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<
    Search.SearchResponseList<Membership.ContractResponseItem>
  > {
    return this.client.get("/search/contracts", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listMemberships(
    filter?: Search.MembershipFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<
    Search.SearchResponseList<Membership.MembershipResponseItem>
  > {
    return this.client.get("/search/memberships", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listCharges(
    filter?: Search.ChargeFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<Search.SearchResponseList<Payment.ChargeResponseItem>> {
    return this.client.get("/search/charges", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listRefunds(
    filter?: Search.RefundFilter,
    sort?: Search.SortOrder,
    pagination?: PaginationParams
  ): ClientResponse<Search.SearchResponseList<Payment.RefundResponseItem>> {
    return this.client.get("/search/refunds", {
      params: {
        filter,
        sort,
        pagination,
      },
    });
  }
}
