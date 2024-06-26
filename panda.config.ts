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

  staticCss: {},

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          ll: {
            value: "#e4007f",
          },
          imas: {
            value: "#f34e6c",
          },
          kousien: {
            value: "rgb(32,45,130)",
          },
          hasu2l: {
            value: "rgb(182,25,15)",
          },
          hasublue: {
            value: "rgb(0,47,100)",
          },
        },
      },
      layerStyles: {
        ijigen: {
          value: {
            fontFamily: `"Mochiy Pop One"` as unknown as undefined,
            backgroundImage:
              "linear-gradient(to right, {colors.imas} 0%, {colors.ll} 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
        },
        unitlive2024: {
          value: {
            color: "{colors.kousien}",
            fontFamily: `"Dela Gothic One"` as unknown as undefined,
          },
        },
        hasu2ndchiba: {
          value: {
            color: "{colors.hasu2l}",
            fontFamily: `"Zen Old Mincho", serif` as unknown as undefined,
            fontWeight: "600" as unknown as undefined,
          },
        },
        hasu2ndhyougo: {
          value: {
            color: "{colors.hasublue}",
            fontFamily: `"Zen Old Mincho", serif` as unknown as undefined,
            fontWeight: "600" as unknown as undefined,
          },
        },
      },
    },
  },

  globalCss: {
    extend: {
      "*": {},
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  lightningcss: true,

  jsxFramework: "react",
});
