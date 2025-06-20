import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./src/pages/**/*.{js,jsx,ts,tsx,astro}"
  ],

  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "pink",
      borderRadius: "xl",
      grayColor: "neutral"
    })
  ],

  // Files to exclude
  exclude: [],

  staticCss: {
    css: [
      {
        properties: {
          layerStyles: ["ijigen", "unitlive2024", "hasu2nd", "hasu4th"]
        }
      }
    ]
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          ll: {
            value: "#e4007f"
          },
          imas: {
            value: "#f34e6c"
          },
          kousien: {
            value: "rgb(32,45,130)"
          },
          hasu: {
            value: "#e55a9b" // Hasunosora Pink
          },
          hasuRed: {
            value: "#ad2b18"
          }
        }
      },
      layerStyles: {
        ijigen: {
          value: {
            fontFamily: `"Mochiy Pop One"` as unknown as undefined,
            backgroundImage:
              "linear-gradient(to right, {colors.imas} 0%, {colors.ll} 100%)",
            backgroundClip: "text",
            color: "transparent"
          }
        },
        unitlive2024: {
          value: {
            color: "{colors.kousien}",
            fontFamily: `"Dela Gothic One"` as unknown as undefined
          }
        },
        hasu2nd: {
          value: {
            color: "{colors.hasu}",
            fontFamily:
              `"ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif` as unknown as undefined
          }
        },
        hasu4th: {
          value: {
            color: "{colors.hasuRed}",
            fontFamily:
              `"ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif` as unknown as undefined
          }
        }
      }
    }
  },

  globalCss: {
    extend: {
      "*": {}
    }
  },

  // The output directory for your css system
  outdir: "styled-system",

  lightningcss: true,

  jsxFramework: "react"
});
