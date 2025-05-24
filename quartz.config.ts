import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "⚙️ IT-Гаечка",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
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
        lightMode: {
          light: "#f0f4f8",         // Очень светлый голубовато-кремовый
          lightgray: "#d9e2ec",     // Светлый голубовато-серый
          gray: "#9fb3c8",          // Средний серо-голубой
          darkgray: "#486581",      // Темный сине-серый
          dark: "#102a43",          // Глубокий синий (почти черный)
          secondary: "#1976d2",     // Чистый синий (акцент)
          tertiary: "#b22222",      // Темно-красный (контрастный акцент)
          highlight: "rgba(255, 215, 0, 0.12)", // Легкое золотое свечение
        },
        darkMode: {
          light: "#0f172a",         // Более светлый фон (было #0a192f)
          lightgray: "#1e293b",     // Улучшенная видимость разделителей
          gray: "#334155",          // Четкие границы (было #2a4a6f)
          darkgray: "#e2e8f0",      // Основной текст - мягкий белый
          dark: "#f8fafc",          // Яркие заголовки (было #e6f1ff)
          secondary: "#38bdf8",     // Мягкий голубой вместо неонового
          tertiary: "#b22222",      // Теплый янтарный вместо лососевого
          highlight: "rgba(56, 189, 248, 0.12)", // Субтильная подсветка
          
          // Дополнительные улучшения:
          codeBackground: "#1e293b", // Отдельный фон для блоков кода
          codeText: "#bae6fd",       // Голубоватый текст кода
          linkHover: "#7dd3fc",      // Подсветка ссылок
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
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
