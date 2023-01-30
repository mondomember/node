import { IdProperty, AnyFieldType } from "../../../../common";

import { ActivityType, OperationType } from "../../constants";

export interface TypeInterface {
  type: typeof ActivityType.DELTA;
}

export interface OperationProperty {
  operation:
    | typeof OperationType.CREATE
    | typeof OperationType.UPDATE
    | typeof OperationType.DELETE
    | typeof OperationType.AUTOMATION;
}

export interface DiffProperty {
  diff: {
    attributes?: {
      [k: string]: {
        source:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
        target:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
      };
    };
    properties?: {
      [k: string]: IdProperty & {
        source:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
        type: AnyFieldType;
        target:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
      };
    };
  };
}
