// plasmic-init.ts
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "YOUR_PROJECT_ID",
      token: "YOUR_PUBLIC_API_TOKEN",
    },
  ],
  preview: true,
});
