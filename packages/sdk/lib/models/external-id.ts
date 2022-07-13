import { JsonSchemaType } from "../schema";

export const ExternalIdPropertySchema = {
  externalIds: {
    type: JsonSchemaType.ARRAY,
    items: {
      type: JsonSchemaType.STRING,
    },
    uniqueItems: true,
    maxItems: 10,
  },
};

export interface ExternalIdsPropertyInterface {
  externalIds:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
}
