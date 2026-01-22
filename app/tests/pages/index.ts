import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import IndexPage from "~app/pages/index.vue";

describe("index page", () => {
  it("renders the title", () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find("h1").text()).toBe("Nitro + Vite + Vue");
  });

  it("renders the api button", () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find("button").text()).toBe("Call /api");
  });
});
