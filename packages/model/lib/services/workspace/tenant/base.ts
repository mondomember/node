import { AnyMembershipPlan } from "./interfaces";

export interface NameProperty {
  name: string;
}

export interface SlugProperty {
  slug: string;
}

export interface SandboxProperty {
  sandbox: boolean;
}

export interface Membership {
  plan: AnyMembershipPlan;
  startAt?: string;
  endAt?: string;
}

export interface MembershipProperty {
  membership: Membership;
}
