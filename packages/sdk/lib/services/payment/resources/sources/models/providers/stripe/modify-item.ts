import { JsonSchemaType } from "../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import { LabelSchema, LabelInterface } from "../../base";

const currentYear = new Date().getFullYear();

const YearsEnum = [...Array(20)].map((_, i) => {
  return i + currentYear;
});

const MonthsEnum = [...Array(12)].map((_, i) => {
  return (i + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
});

const CardPropertySchema = {
  card: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      expirationYear: {
        type: JsonSchemaType.NUMBER,
        enum: YearsEnum,
      },
      expirationMonth: {
        type: JsonSchemaType.NUMBER,
        enum: MonthsEnum,
      },
    },
  },
};

const AddressSchema = {
  address: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      addressLine1: {
        type: JsonSchemaType.STRING,
      },
      addressLine2: {
        type: JsonSchemaType.STRING,
      },
      city: {
        type: JsonSchemaType.STRING,
      },
      state: {
        type: JsonSchemaType.STRING,
      },
      postalCode: {
        type: JsonSchemaType.NUMBER,
      },
      country: {
        type: JsonSchemaType.STRING,
        minLength: 2,
        maxLength: 2,
      },
    },
  },
};

interface AddressInterface {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  postalCode: number;
}

const EmailPropertySchema = {
  email: {
    type: JsonSchemaType.STRING,
    format: "email",
    minLength: 1,
  },
};

const FullNamePropertySchema = {
  fullName: {
    type: JsonSchemaType.STRING,
  },
};

const PhoneNumberPropertySchema = {
  phoneNumber: {
    type: JsonSchemaType.STRING,
  },
};

const BillingDetailsPropertySchema = {
  billingDetails: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      ...AddressSchema,
      ...EmailPropertySchema,
      ...FullNamePropertySchema,
      ...PhoneNumberPropertySchema,
    },
  },
};

interface BillingDetailsPropertyInterface {
  billingDetails: {
    address: AddressInterface;
    email: string;
    fullName: string;
    phoneNumber: string;
  };
}

interface CardPropertyInterface {
  card: {
    expirationMonth: number;
    expirationYear: number;
  };
}

export const StripeSourceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelSchema,
    ...BillingDetailsPropertySchema,
    ...CardPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface StripeSourceModifyItemInterface
  extends Partial<LabelInterface>,
    Partial<BillingDetailsPropertyInterface>,
    Partial<CardPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
