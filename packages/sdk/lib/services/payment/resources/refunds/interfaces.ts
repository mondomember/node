export interface RefundCustomerFilter {
  customer: {
    type: "Company" | "Contact";
    id: string;
  };
}

export interface RefundChargeFilter {
  charge: string;
}

export type RefundFilter = RefundChargeFilter | RefundCustomerFilter;
