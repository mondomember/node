import { Chance } from "chance";
import { Integration } from "@mondomember/sdk";

import {
  createCreatedAtProperty,
  createUpdatedAtProperty,
  generateTestKSUID,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const TokenProperty = {
  jwt: JWT,
};

const IdProperty = {
  id: generateTestKSUID(Integration.UIDPrefix.WORKSPACE_TOKEN),
};

const LabelProperty = {
  label: chance.sentence(),
};

const DescriptionProperty = {
  description: chance.sentence(),
};

const AuthorizationsProperty = {
  authorizations: {
    [Integration.AuthorizationService.CRM]: {
      "*": Integration.Action.READ,
    },
  },
};

export function createTestInsertWorkspaceToken(
  overrides?: Partial<Integration.WorkspaceTokenInsertItemInterface>
): Integration.WorkspaceTokenInsertItemInterface {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...AuthorizationsProperty,
    ...overrides,
  };
}

export function createTestModifyWorkspaceToken(
  overrides?: Partial<Integration.WorkspaceTokenModifyItemInterface>
): Integration.WorkspaceTokenModifyItemInterface {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...AuthorizationsProperty,
    ...overrides,
  };
}

export function createTestWorkspaceToken(
  overrides?: Partial<Integration.WorkspaceTokenResponseItemInterface>
): Integration.WorkspaceTokenResponseItemInterface {
  return {
    ...IdProperty,
    ...TokenProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...AuthorizationsProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}
