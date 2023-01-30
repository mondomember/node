import { parseTemplate } from "../../../../../client/url-template";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../client/interfaces";
import { NestedCRUDEndpoints } from "../../../../../client/endpoints";
import { buildResourcePath } from "../../../../../client/utilities";
import { Settings } from "@mondomember/model";

type ItemExpressions = {
  fieldGroup: string;
};

/**
 * A collection of field group endpoints.
 */
export default class<Expressions extends {}> extends NestedCRUDEndpoints<
  Expressions,
  Expressions & ItemExpressions,
  Settings.FieldGroupInsertItem,
  Settings.FieldGroupModifyItem,
  Settings.FieldGroupResponseItem
> {
  constructor(basePath: string, client: ClientInstance) {
    const resourcePath = buildResourcePath([basePath, "field-groups"]);

    super(
      {
        base: resourcePath,
        item: `${resourcePath}/{fieldGroup}`,
      },
      client
    );
  }

  /**
   * Restore a previously deleted field group item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions & ItemExpressions
  ): ClientResponse<Settings.FieldGroupResponseItem> {
    return this.client.post(
      parseTemplate(`${this.path.item}/restore`).expand(expression)
    );
  }
}
