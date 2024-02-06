import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderComponent } from '../astro_UtfEhNOT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
/* empty css                          */
import { styled, Stack, HStack } from 'styled-system/jsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo, forwardRef } from 'react';
import { text } from 'styled-system/recipes';
import { token } from 'styled-system/tokens';

const Text = (props) => {
  const { as = "p", ...localProps } = props;
  const Dynamic = useMemo(() => styled(as, text), [as]);
  return /* @__PURE__ */ jsx(Dynamic, { ...localProps });
};

const Heading = forwardRef((props, ref) => {
  const { as = "h2", ...textProps } = props;
  return /* @__PURE__ */ jsx(Text, { ref, as, variant: "heading", ...textProps });
});
Heading.displayName = "Heading";

const IJIGENDAY1 = /* @__PURE__ */ new Date("2023-12-09T00:00:00+09:00");
const ONEDAY = 24 * 60 * 60 * 1e3;
const getIjigenDay = () => Math.floor(((/* @__PURE__ */ new Date()).valueOf() - IJIGENDAY1.valueOf()) / ONEDAY) + 1;

const CountdownTimer = () => {
  return /* @__PURE__ */ jsx(Stack, { flex: "1", alignItems: "center", justifyContent: "center", gap: "3", children: /* @__PURE__ */ jsxs(Stack, { p: "5", alignItems: "center", bgColor: "white.a4", children: [
    /* @__PURE__ */ jsxs(
      Heading,
      {
        as: "h1",
        fontSize: "3xl",
        fontWeight: "400",
        layerStyle: "textGradient",
        textAlign: "center",
        children: [
          "異次元フェス",
          /* @__PURE__ */ jsx("br", {}),
          "アイドルマスター★♥︎ラブライブ！歌合戦",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs(styled.span, { fontSize: "5xl", children: [
            "Day ",
            getIjigenDay()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      styled.a,
      {
        target: "_blank",
        fontSize: "xl",
        href: "https://ijigen-fes.jp/utagassen/",
        children: "詳細"
      }
    )
  ] }) });
};

const logo = new Proxy({"src":"/_astro/logo.Owu3mF_g.png","width":1600,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vittayapalotai.tanyawat/code/days-since-ijigen/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = `\u7570\u6B21\u5143\u30D5\u30A7\u30B9 Day ${getIjigenDay()}`;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color"${addAttribute(token("colors.ll"), "content")}><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta property="og:type" content="website"><meta property="og:url" content=""><meta property="og:image"${addAttribute(logo.src, "content")}><meta property="og:description" content="東京ドームにいこうぜ"><meta property="twitter:site" content="@HamP_punipuni"><meta property="twitter:creator"${addAttribute(logo.src, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "VideoPlayer", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "~/components/VideoPlayer", "client:component-export": "VideoPlayer" })} ${renderComponent($$result, "Stack", Stack, { "h": "screen" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CountdownTimer", CountdownTimer, {})} ${renderComponent($$result2, "HStack", HStack, { "py": "2", "justifyContent": "center", "layerStyle": "textGradient" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", Text, { "fontWeight": "normal" }, { "default": ($$result4) => renderTemplate`
作成：ハム
` })} ${renderComponent($$result3, "Text", Text, {}, { "default": ($$result4) => renderTemplate`|` })} ${renderComponent($$result3, "Text", Text, { "fontWeight": "normal", "layerStyle": "textGradient" }, { "default": ($$result4) => renderTemplate`
ソース
` })} ` })} ` })} </body></html>`;
}, "/Users/vittayapalotai.tanyawat/code/days-since-ijigen/src/pages/index.astro", void 0);

const $$file = "/Users/vittayapalotai.tanyawat/code/days-since-ijigen/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
