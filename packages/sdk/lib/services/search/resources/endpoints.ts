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
  // index or alias
  target?: string;
  relatedIds?: {
    customerId?: string;
    companyId?: string;
    contactId?: string;
    invoiceId?: string;
    contractId?: string;
    productId?: string;
    membershipId?: string;
    chargeId?: string;
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
        target: "Billings.Invoice",
      },
      pagination
    );
  }
}
