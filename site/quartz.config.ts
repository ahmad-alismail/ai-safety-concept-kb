import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "AI Safety Concept Knowledge Base",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "ahmad-alismail.github.io/ai-safety-concept-kb",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      ".meta",
      ".meta/**",
      "output",
      "output/**",
      "log",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        // Refined editorial palette: warm neutrals + a teal-green accent.
        // Quartz role mapping: light=background, dark=headings, darkgray=body
        // text, gray=muted/meta, lightgray=borders, secondary=accent/links,
        // tertiary=hover/graph-active, highlight=internal-link tint.
        lightMode: {
          light: "#faf7f2",
          lightgray: "#e7e1d6",
          gray: "#9b9488",
          darkgray: "#3d3a35",
          dark: "#1f1d19",
          secondary: "#2f6f5c",
          tertiary: "#3f8a72",
          highlight: "rgba(47, 111, 92, 0.10)",
          textHighlight: "#f4d98a99",
        },
        darkMode: {
          light: "#1a1a1d",
          lightgray: "#2c2c31",
          gray: "#8b8780",
          darkgray: "#d7d3cb",
          dark: "#f3efe8",
          secondary: "#5fb89c",
          tertiary: "#86d3b6",
          highlight: "rgba(95, 184, 156, 0.14)",
          textHighlight: "#d8a85733",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "absolute" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled: per-page image generation is slow across ~795 pages
      // and can fail in CI without fonts. Re-enable later if social previews are needed.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
