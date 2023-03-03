import {
  ClientInstance,
  ClientResponse,
} from "../../../../../../client/interfaces";

import { Integration } from "@mondomember/model";

const PATH = {
  base: "integrations/apps/hubspot",
};

export default class {
  constructor(readonly client: ClientInstance) {}

  public connect(
    code: string
  ): ClientResponse<Integration.HubSpotAppUpsertItem> {
    return this.client.post(`${PATH.base}/connect`, { code });
  }
}
