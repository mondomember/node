import { parseTemplate } from "../../../client/url-template";
import { ClientInstance, ClientResponse } from "../../../client/interfaces";

import { PaginationParams } from "../../../models";
import { SearchResponseListInterface } from "./models";
import {
  CompanyResponseItemInterface,
  ContactResponseItemInterface,
  CompanyContactResponseItemInterface,
} from "../../crm";
import {
  ContractResponseItemInterface,
  MembershipResponseItemInterface,
} from "../../membership";
import { InvoiceResponseItemInterface } from "../../billing";

export interface ParsedQuery {
  query?: string;
  sort?: string | Record<string, "asc" | "desc">[];
  // index or alias
  target?: string | string[];
  relatedIds?: {
    customerId?: string | string[];
    companyId?: string | string[];
    contactId?: string | string[];
    invoiceId?: string | string[];
    contractId?: string | string[];
    productId?: string | string[];
    membershipId?: string | string[];
    chargeId?: string | string[];
  };
  dateStart?: string;
  dateEnd?: string;
}

type Expressions = {
  key: string;
};

export class SearchEndpoints {
  constructor(readonly client: ClientInstance) {}

  /**
   * @returns
   */
  public listItems<Item = any>(
    query?: ParsedQuery,
    pagination?: PaginationParams
  ): ClientResponse<SearchResponseListInterface<Item>> {
    return this.client.get("/search", {
      params: {
        filter: query,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listItemsByKey<Item = any>(
    expression: Expressions,
    filter?: any,
    pagination?: PaginationParams
  ): ClientResponse<SearchResponseListInterface<Item>> {
    return this.client.get(parseTemplate(`/search/{key}`).expand(expression), {
      params: {
        filter,
        pagination,
      },
    });
  }

  /**
   * @returns
   */
  public listCompanyItems(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<CompanyResponseItemInterface>(
      {
        ...query,
        target: "CRM.Company",
      },
      pagination
    );
  }

  /**
   * @returns
   */
  public listContactItems(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<ContactResponseItemInterface>(
      {
        ...query,
        target: "CRM.Contact",
      },
      pagination
    );
  }

  /**
   * @returns
   */
  public listCompanyContactItems(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<CompanyContactResponseItemInterface>(
      {
        ...query,
        target: "CRM.Company-Contact",
      },
      pagination
    );
  }

  /**
   * @returns
   */
  public listContractItems(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<ContractResponseItemInterface>(
      {
        ...query,
        target: "Membership.Contract",
      },
      pagination
    );
  }

  /**
   * @returns
   */
  public listMembershipItems(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<MembershipResponseItemInterface>(
      {
        ...query,
        target: "Membership.Membership",
      },
      pagination
    );
  }

  /**
   * @returns
   */
  public listInvoiceItems(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<InvoiceResponseItemInterface>(
      {
        ...query,
        target: "Billing.Invoice",
      },
      pagination
    );
  }

  /**
   * @returns
   */
  public listPaymentCharges(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<InvoiceResponseItemInterface>(
      {
        ...query,
        target: "Payment.Charge",
      },
      pagination
    );
  }

  /**
   * @returns
   */
  public listPaymentRefunds(
    query?: Omit<ParsedQuery, "target">,
    pagination?: PaginationParams
  ) {
    return this.listItems<InvoiceResponseItemInterface>(
      {
        ...query,
        target: "Payment.Refund",
      },
      pagination
    );
  }
}
