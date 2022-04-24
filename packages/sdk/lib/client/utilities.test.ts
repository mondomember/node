import { buildResourcePath } from "./utilities";

describe("REST API Router - Build resource path", () => {
  test(`should assemble parts to a proper format`, async () => {
    const parts = ["foo", "bar"];

    const result = buildResourcePath(parts);

    expect(result).toEqual("/foo/bar");
  });

  test(`should remove empty parts`, async () => {
    const parts = ["foo", "", undefined, "bar"];

    const result = buildResourcePath(parts);

    expect(result).toEqual("/foo/bar");
  });

  test(`should handle parts with starting slashes`, async () => {
    const parts = ["/foo", "/bar"];

    const result = buildResourcePath(parts);

    expect(result).toEqual("/foo/bar");
  });

  test(`should handle parts with ending slashes`, async () => {
    const parts = ["foo/", "bar/"];

    const result = buildResourcePath(parts);

    expect(result).toEqual("/foo/bar");
  });

  test(`should handle horrible slash problems`, async () => {
    const parts = ["//foo/", "bar//"];

    const result = buildResourcePath(parts);

    expect(result).toEqual("/foo/bar");
  });

  test(`should not strip slashes from within parts`, async () => {
    const parts = ["/foo/bar", "baz"];

    const result = buildResourcePath(parts);

    expect(result).toEqual("/foo/bar/baz");
  });

  test(`should handle variable segments propertly`, async () => {
    const parts = ["foo", "{bar}"];

    const result = buildResourcePath(parts);

    expect(result).toEqual("/foo/{bar}");
  });
});
