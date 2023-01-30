import { AnyPerformerType } from "./constants";

export type PerformedByType = {
  identifier: string;
  type: AnyPerformerType;
};

export interface PerformedByProperty {
  performedBy: PerformedByType;
}

export interface SourceProperty {
  source: string;
}
