import { parseTemplate } from "../../../../../client/url-template";
import {
  ClientInstance,
  ClientResponse,
} from "../../../../../client/interfaces";
import { NestedCRUDEndpoints } from "../../../../../client/endpoints";
import { buildResourcePath } from "../../../../../client/utilities";
import { Settings } from "@mondomember/model";

type ItemExpressions = {
  field: string;
};

/**
 * A collection of field endpoints.
 */
export default class<Expressions extends {}> extends NestedCRUDEndpoints<
  Expressions,
  Expressions & ItemExpressions,
  Settings.FieldInsertItem,
  Settings.FieldModifyItem,
  Settings.FieldResponseItem
> {
  constructor(basePath: string, client: ClientInstance) {
    const resourcePath = buildResourcePath([basePath, "fields"]);

    super(
      {
        base: resourcePath,
        item: `${resourcePath}/{field}`,
      },
      client
    );
  }

  /**
   * Restore a previously deleted field item.
   *
   * @param expression
   * @returns
   */
  public restoreItem(
    expression: Expressions
  ): ClientResponse<Settings.FieldResponseItem> {
    return this.client.post(
      parseTemplate(`${this.path.item}/restore`).expand(expression)
    );
  }
}
