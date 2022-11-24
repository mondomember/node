import { Chance } from "chance";

import { Account } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const EmailProperty = {
  email: chance.email(),
};

const FirstNameProperty = {
  firstName: chance.first(),
};

const LastNameProperty = {
  lastName: chance.last(),
};

const PhoneNumberProperty = {
  phoneNumber: chance.phone(),
};

export function createTestIdentity(
  props?: Partial<Account.IdentityResponseItemInterface>
): Account.IdentityResponseItemInterface {
  return {
    id: chance.guid(),
    ...EmailProperty,
    ...FirstNameProperty,
    ...LastNameProperty,
    ...PhoneNumberProperty,
    ...props,
  };
}

export function createTestModifyIdentity(
  props?: Partial<Account.IdentityModifyItemInterface>
): Account.IdentityModifyItemInterface {
  return {
    ...FirstNameProperty,
    ...LastNameProperty,
    ...props,
  };
}
