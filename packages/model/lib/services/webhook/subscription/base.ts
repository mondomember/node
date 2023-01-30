import { AuthType } from "./interfaces";

export type EventsType = string[];

export interface EventsProperty {
  events: EventsType;
}

export type UrlType = string;

export interface UrlProperty {
  url: UrlType;
}

export type LabelType = string;

export interface LabelProperty {
  label: LabelType;
}

type BasicAuth = {
  type: typeof AuthType.BASIC;
  username: string;
  password: string;
};

export type AuthType = BasicAuth;

export interface AuthProperty {
  auth: AuthType;
}
