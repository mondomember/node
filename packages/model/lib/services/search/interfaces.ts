import { AnyContractStatus, AnyMembershipStatus } from "../membership";
import { AnyInvoiceStatus } from "../billing";
import { AnyChargeStatus, AnyRefundStatus } from "../payment";

export type SortOrderType = "asc" | "desc";

export type SortOrder = SortOrderType | Record<string, SortOrderType>[];

type KeywordFilter = {
  keyword?: string;
};

type AuditFilter = {
  createdAt?: string;
  updatedAt?: string;
};

type RelatedIdsFilter = {
  relatedIds?: Record<string, string | string[]>;
};

export type InvoiceFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    status?: AnyInvoiceStatus | AnyInvoiceStatus[];
    dueAt?: string; // gt 2000-01-01 and lt 2001-01-01
  };

export type CompanyFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    name?: string | string[];
  };

export type ContactFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    firstName?: string | string[];
    lastName?: string | string[];
  };

export type CompanyContactFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    company: {
      name?: string | string[];
    };
    contact: {
      firstName?: string | string[];
      lastName?: string | string[];
    };
  };

export type ContractFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    status?: AnyContractStatus | AnyContractStatus[];
    period?: {
      startAt?: string; // gt 2000-01-01 and lt 2001-01-01
      endAt?: string; // gt 2000-01-01 and lt 2001-01-01
    };
  };

export type MembershipFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    status?: AnyMembershipStatus | AnyMembershipStatus[];
    period?: {
      startAt?: string; // gt 2000-01-01 and lt 2001-01-01
      endAt?: string; // gt 2000-01-01 and lt 2001-01-01
    };
  };

export type ChargeFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    status?: AnyChargeStatus | AnyChargeStatus[];
  };

export type RefundFilter = KeywordFilter &
  AuditFilter &
  RelatedIdsFilter & {
    status?: AnyRefundStatus | AnyRefundStatus[];
  };
