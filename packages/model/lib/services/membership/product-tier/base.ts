export interface LabelProperty {
  label: string;
}

export interface DescriptionProperty {
  description: string;
}

export interface PriceProductResponse {
  price: {
    version: number;
    amount: number;
  };
}
