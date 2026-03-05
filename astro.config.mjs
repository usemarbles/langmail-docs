import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://langmail.dev",
  legacy: { collections: true },
  integrations: [
    starlight({
      title: "langmail",
      customCss: ["./src/styles/theme.css"],
      social: {
        github: "https://github.com/usemarbles/langmail",
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: true,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Geist:wght@300;400;500&family=Geist+Mono:wght@400;500&display=swap",
          },
        },
      ],
      components: {
        ThemeSelect: "./src/components/EmptyThemeSelect.astro",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [{ label: "Introduction", slug: "introduction" }],
        },
        // {
        //   label: "API",
        //   items: [
        //     { label: "Core Concepts", slug: "core-concepts" },
        //   ],
        // },
        // {
        //   label: "Project",
        //   items: [
        //     { label: "Changelog", slug: "changelog" },
        //   ],
        // },
      ],
    }),
  ],
});
