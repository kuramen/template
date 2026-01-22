import { describe, expect, it } from "vitest";
import handler from "~server/api/index";

describe("/api/hello", () => {
  it("returns the expected response", () => {
    const response = handler({} as any);
    expect(response).toEqual({ api: "works!" });
  });
});
