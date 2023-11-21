import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import NavMenu from "./NavMenu.vue";

describe("Component: NavMenu", () => {
  function setup({ propsData }) {
    return shallowMount(NavMenu, {
      propsData,
      stubs: ["RouterLink"]
    });
  }

  describe("Render Test", () => {
    test("render NavItems lenght should be same as props navItems", () => {
      const navItems = [
        {
          id: 1,
          to: "/form",
          name: "Form"
        },
        {
          id: 2,
          to: "/todo",
          name: "Todo List"
        },
        {
          id: 3,
          to: "/done",
          name: "Done List"
        }
      ];

      const wrapper = setup({
        propsData: {
          navItem: navItems
        }
      });

      const navItemEls = wrapper.findAll(".nav-wrapper ul li");
      expect(navItemEls.length).toEqual(navItems.length + 1);
    })
  })
});