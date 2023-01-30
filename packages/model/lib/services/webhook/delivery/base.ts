export interface SubscriptionProperty {
  subscription: string;
}

export interface EventProperty {
  event: string;
}

export type DataType = {
  [k: string]: string;
};

export interface DataProperty {
  data: DataType;
}

export type ResponseType = {
  statusCode: number;
  message: string;
};

export interface ResponseProperty {
  response: ResponseType;
}
