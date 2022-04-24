import * as template from "url-template";
import {
  ClientInstance,
  ClientResponse,
  buildResourcePath,
  NestedCRUDEndpoints,
} from "../../../../../client";

import {
  FieldGroupInsertItemInterface,
  FieldGroupModifyItemInterface,
  FieldGroupResponseItemInterface,
} from "./models";

type ItemExpressions = {
  fieldGroup: string;
};

/**
 * A collection of field group endpoints.
 */
export default class<Expressions extends {}> extends NestedCRUDEndpoints<
  Expressions,
  Expressions & ItemExpressions,
  FieldGroupInsertItemInterface,
  FieldGroupModifyItemInterface,
  FieldGroupResponseItemInterface
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
  ): ClientResponse<FieldGroupResponseItemInterface> {
    return this.client.post(
      template.parse(`${this.path.item}/restore`).expand(expression)
    );
  }
}
