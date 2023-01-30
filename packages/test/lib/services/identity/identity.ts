import { Chance } from "chance";

import { Identity } from "@mondomember/model";

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
  props?: Partial<Identity.IdentityResponseItem>
): Identity.IdentityResponseItem {
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
  props?: Partial<Identity.IdentityModifyItem>
): Identity.IdentityModifyItem {
  return {
    ...FirstNameProperty,
    ...LastNameProperty,
    ...props,
  };
}
