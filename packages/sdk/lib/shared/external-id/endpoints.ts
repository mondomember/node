import { parseTemplate } from "../../client/url-template";
import { ClientInstance, ClientResponse } from "../../client/interfaces";
import { ExternalIdResponseList } from "@mondomember/model";

const PATH = {
  base: "external",
  item: "external/{appKey}/{externalId}",
};

type Path = {
  base: string;
  listIds: string;
  getItem: string;
  manageItem: string;
};

type Expressions = {
  appKey: string;
};

type ItemExpressions = Expressions & {
  externalId: string;
};

export class ExternalIdEndpoints<ItemResponse, Resource extends string> {
  readonly path: Path;

  constructor(
    basePath: string,
    resource: Resource,
    readonly client: ClientInstance
  ) {
    this.path = {
      base: `${basePath}/${PATH.base}`,
      listIds: `${basePath}/${PATH.base}`,
      getItem: `${basePath}/${PATH.item}`,
      manageItem: `${basePath}/${PATH.item}/{${resource}}`,
    };
  }

  /**
   * List external Id's assigned to a resource.
   *
   * @param params
   * @returns
   */
  public listIds(params: {
    [key in Resource]: string;
  }): ClientResponse<ExternalIdResponseList> {
    return this.client.get(this.path.listIds, { params });
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(expression: Expressions): ClientResponse<ItemResponse> {
    return this.client.get(parseTemplate(this.path.getItem).expand(expression));
  }

  /**
   * Check if an item exists
   *
   * @param expression
   * @returns
   */
  public checkItem(expression: Expressions): ClientResponse<void> {
    return this.client.head(
      parseTemplate(this.path.getItem).expand(expression)
    );
  }

  /**
   * Attach an external Id to Item
   *
   * @param expression
   * @param payload
   * @returns
   */
  public attachToItem(
    expression: ItemExpressions & {
      [key in Resource]: string;
    }
  ): ClientResponse<void> {
    return this.client.post(
      parseTemplate(this.path.manageItem).expand(expression)
    );
  }

  /**
   * Detach an external Id to Item
   *
   * @param expression
   * @returns
   */
  public detachFromItem(
    expression: ItemExpressions & {
      [key in Resource]: string;
    }
  ): ClientResponse<void> {
    return this.client.delete(
      parseTemplate(this.path.manageItem).expand(expression)
    );
  }
}
