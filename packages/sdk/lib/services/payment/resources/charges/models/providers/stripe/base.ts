import { JsonSchemaType } from "../../../../../../../schema";

export const StripeObjectSchema = {
  object: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id"],
    properties: {
      id: {
        type: JsonSchemaType.STRING,
      },
      status: {
        type: [JsonSchemaType.STRING, JsonSchemaType.NULL],
      },
      receipt_email: {
        type: [JsonSchemaType.NUMBER, JsonSchemaType.NULL],
      },
      receipt_number: {
        type: [JsonSchemaType.NUMBER, JsonSchemaType.NULL],
      },
      receipt_url: {
        type: [JsonSchemaType.NUMBER, JsonSchemaType.NULL],
      },
    },
  },
};

export interface StripeObjectInterface {
  object: StripeObject;
}

/**
 * This object is a sub-set of the `Stripe.Card` object.
 */
interface StripeObject {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * This is the email address that the receipt for this charge was sent to.
   */
  receipt_email?: string | null;

  /**
   * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
   */
  receipt_number?: string | null;

  /**
   * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
   */
  receipt_url?: string | null;

  /**
   * The status of the payment is either `succeeded`, `pending`, or `failed`.
   */
  status: string;
}
