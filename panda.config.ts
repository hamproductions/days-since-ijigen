import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./src/pages/**/*.{js,jsx,ts,tsx,astro}",
  ],

  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "pink",
      borderRadius: "xl",
      grayColor: "neutral",
    }),
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          ll: {
            value: "rgba(228,0,127,1.00)",
          },
          imas: {
            value: "rgba(243,78,108,1.00)",
          },
        },
      },
      layerStyles: {
        textGradient: {
          value: {
            backgroundImage:
              "linear-gradient(to right, {colors.imas} 0%, {colors.ll} 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
        },
      },
    },
  },

  globalCss: {
    extend: {
      "*": {
        fontFamily: `"Mochiy Pop One"`,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  emitPackage: true,

  lightningcss: true,

  jsxFramework: "react",
});
