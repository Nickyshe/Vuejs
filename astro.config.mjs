// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

//import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    
    starlight({
      title: "Vuejs",
    
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
      logo: {
        src: './src/assets/logo.svg', // path to your logo file
        replacesTitle: false
      },
      favicon: "./favicon.svg",
     


      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
        { icon: "twitter", label: "X", href: "https://x.com/vuejs" },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.com/invite/vue",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { slug: "getting-started/introduction" },
            { slug: "getting-started/quickstart" },
            { slug: "getting-started/creating-a-vue-application" },
            { slug: "getting-started/components-basics" },
          ],
        },
        {
          label: "Core Concepts",
          // Each item here is one entry in the navigation menu.
          items: [
            { slug: "core-concepts/template-syntax" },
            { slug: "core-concepts/reactivity-fundamentals" },
            { slug: "core-concepts/computed-properties" },
            { slug: "core-concepts/class-and-style" },
            { slug: "core-concepts/conditional-rendering" },
            { slug: "core-concepts/list-rendering" },
            { slug: "core-concepts/event-handling" },
            { slug: "core-concepts/form-input-binding" },
            { slug: "core-concepts/watchers" },
            { slug: "core-concepts/template-refs" },
          ],
        },
        {
          label: "Building Your Application",
          collapsed: true,
          items: [
            {
              label: "Components",
              items: [
                { slug: "building-applications/components/registration" },
                { slug: "building-applications/components/prop" },
                { slug: "building-applications/components/events" },
                { slug: "building-applications/components/v-model" },
                {
                  slug: "building-applications/components/fallthrough-attributes",
                },
                { slug: "building-applications/components/slots" },
                { slug: "building-applications/components/provide-inject" },
                { slug: "building-applications/components/async-components" },
              ],
            },

            {
              label: "Reusable Components",
              items: [
                {
                  slug: "building-applications/reusable-components/composable",
                },
                {
                  slug: "building-applications/reusable-components/custom-directives",
                },
                { slug: "building-applications/reusable-components/plugin" },
              ],
            },

            {
              label: "Built-in Components",
              items: [
                { slug: "building-applications/builtin-components/transition" },
                {
                  slug: "building-applications/builtin-components/transition-group",
                },
                { slug: "building-applications/builtin-components/keep-alive" },
                { slug: "building-applications/builtin-components/teleport" },
                { slug: "building-applications/builtin-components/suspense" },
              ],
            },
          ],
        },

        {
          label: "Advance Guides",
          items: [
            {
              label: "Scaling Your Application",
              items: [
                {
                  slug: "advance-guides/scaling-your-application/single-file-components",
                },
                { slug: "advance-guides/scaling-your-application/tooling" },
                { slug: "advance-guides/scaling-your-application/routing" },
                {
                  slug: "advance-guides/scaling-your-application/state-management",
                },
                { slug: "advance-guides/scaling-your-application/ssr" },
              ],
            },

            {
              label: "TypeScript Integration",
              items: [
                { slug: "advance-guides/typescript-integration/overview" },
                {
                  slug: "advance-guides/typescript-integration/ts-with-composition-api",
                },
                {
                  slug: "advance-guides/typescript-integration/ts-with-options-api",
                },
              ],
            },

            {
              label: "Additional Topics",
              items: [
                { slug: "advance-guides/additional-topics/vue-usage" },
                {
                  slug: "advance-guides/additional-topics/composition-api-faq",
                },
                { slug: "advance-guides/additional-topics/reactivity" },
                {
                  slug: "advance-guides/additional-topics/rendering-mechanism",
                },
                {
                  slug: "advance-guides/additional-topics/rendering-functions",
                },
                { slug: "advance-guides/additional-topics/vue-and-web" },
                {
                  slug: "advance-guides/additional-topics/animation-techniques",
                },
              ],
            },
          ],
        },

        {
          label: "Best Practices",
          items: [
            { slug: "best-practices/production-deployment" },
            { slug: "best-practices/performance" },
            { slug: "best-practices/accessibility" },
            { slug: "best-practices/security" },
          ],
        },
      ],
    }),
  ],

  // vite: {
  //   plugins: [tailwindcss()],
  // },
});