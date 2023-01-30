import { JsonSchemaType } from "../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../models";
import { LabelPropertySchema } from "../../base";

const currentYear = new Date().getFullYear();

const YearsStringEnum = [...Array(20)].map((_, i) => {
  return String(i + currentYear);
});
const YearsNumericEnum = [...Array(20)].map((_, i) => {
  return i + currentYear;
});

const MonthsStringNonLeadingZeroEnum = [...Array(12)].map((_, i) => {
  return String(i + 1);
});
const MonthsStringLeadingZeroEnum = [...Array(12)].map((_, i) => {
  return (i + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
});
const MonthsNumericEnum = [...Array(12)].map((_, i) => {
  return i + 1;
});

// Dedupe
const MonthsEnumSet = new Set([
  ...MonthsNumericEnum,
  ...MonthsStringNonLeadingZeroEnum,
  ...MonthsStringLeadingZeroEnum,
]);

const CardPropertySchema = {
  card: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      expirationYear: {
        type: [JsonSchemaType.STRING, JsonSchemaType.NUMBER],
        enum: [...YearsNumericEnum, ...YearsStringEnum],
      },
      expirationMonth: {
        type: [JsonSchemaType.STRING, JsonSchemaType.NUMBER],
        enum: Array.from(MonthsEnumSet),
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
        type: JsonSchemaType.STRING,
      },
      country: {
        type: JsonSchemaType.STRING,
        minLength: 2,
        maxLength: 2,
      },
    },
  },
};

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

export const StripeSourceModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...BillingDetailsPropertySchema,
    ...CardPropertySchema,
    ...MetadataPropertySchema,
  },
};
