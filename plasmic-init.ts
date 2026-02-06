import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { TestBox } from "./src/components/plasmic/TestBox";
import AppSidebar from "./src/layout/AppSidebar";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "YOUR_PROJECT_ID",
      token: "YOUR_PUBLIC_API_TOKEN",
    },
  ],
  preview: true,
});

PLASMIC.registerComponent(TestBox, {
  name: "TestBox",
  props: {
    text: "string",
  },
});

PLASMIC.registerComponent(AppSidebar, {
  name: "AppSidebar",
  props: {},
});
