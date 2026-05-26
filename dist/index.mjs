import { jsx as o, jsxs as m } from "react/jsx-runtime";
import * as i from "react";
import s from "clsx";
import { Slot as f } from "@radix-ui/react-slot";
import * as r from "@radix-ui/react-dialog";
const v = "_button_s4yje_1", N = "_ghost_s4yje_34", g = {
  button: v,
  ghost: N
}, b = i.forwardRef(
  ({ className: a, type: e = "button", variant: t = "solid", ...n }, l) => /* @__PURE__ */ o(
    "button",
    {
      ref: l,
      type: e,
      className: s(g.button, t === "ghost" && g.ghost, a),
      ...n
    }
  )
);
b.displayName = "Button";
const C = "_overlay_pgdu9_1", y = "_content_pgdu9_7", u = "_title_pgdu9_22", h = "_description_pgdu9_28", R = "_close_pgdu9_33", c = {
  overlay: C,
  content: y,
  title: u,
  description: h,
  close: R
};
function ia(a) {
  return /* @__PURE__ */ o(r.Root, { ...a });
}
const na = r.Trigger, da = r.Close, j = i.forwardRef(({ className: a, children: e, ...t }, n) => /* @__PURE__ */ m(r.Portal, { children: [
  /* @__PURE__ */ o(r.Overlay, { className: c.overlay }),
  /* @__PURE__ */ m(
    r.Content,
    {
      ref: n,
      className: s(c.content, a),
      ...t,
      children: [
        e,
        /* @__PURE__ */ o(r.Close, { className: c.close, "aria-label": "Fechar diálogo", children: /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "×" }) })
      ]
    }
  )
] }));
j.displayName = "DialogContent";
const w = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o(
  r.Title,
  {
    ref: t,
    ...e,
    className: s(c.title, a)
  }
));
w.displayName = "DialogTitle";
const D = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o(
  r.Description,
  {
    ref: t,
    ...e,
    className: s(c.description, a)
  }
));
D.displayName = "DialogDescription";
const $ = "_card_1banj_1", T = "_header_1banj_18", B = "_title_1banj_29", I = "_description_1banj_36", P = "_action_1banj_42", x = "_content_1banj_48", z = "_footer_1banj_56", F = "_media_1banj_62", A = "_mediaImage_1banj_69", H = "_badge_1banj_76", M = "_badgePositive_1banj_89", O = "_badgeNegative_1banj_95", d = {
  card: $,
  header: T,
  title: B,
  description: I,
  action: P,
  content: x,
  footer: z,
  media: F,
  mediaImage: A,
  badge: H,
  badgePositive: M,
  badgeNegative: O
}, S = i.forwardRef(
  ({ asChild: a = !1, className: e, ...t }, n) => /* @__PURE__ */ o(a ? f : "div", { ref: n, className: s(d.card, e), ...t })
);
S.displayName = "Card";
const k = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(d.header, a), ...e }));
k.displayName = "CardHeader";
const q = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("h3", { ref: t, className: s(d.title, a), ...e }));
q.displayName = "CardTitle";
const E = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("p", { ref: t, className: s(d.description, a), ...e }));
E.displayName = "CardDescription";
const G = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o(
  "div",
  {
    ref: t,
    "data-slot": "card-action",
    className: s(d.action, a),
    ...e
  }
));
G.displayName = "CardAction";
const J = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(d.content, a), ...e }));
J.displayName = "CardContent";
const K = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(d.footer, a), ...e }));
K.displayName = "CardFooter";
const L = i.forwardRef(
  ({ className: a, imageClassName: e, ...t }, n) => /* @__PURE__ */ o("div", { ref: n, className: s(d.media, a), children: /* @__PURE__ */ o("img", { className: s(d.mediaImage, e), ...t }) })
);
L.displayName = "CardMedia";
const Q = i.forwardRef(
  ({ tone: a = "neutral", className: e, ...t }, n) => /* @__PURE__ */ o(
    "span",
    {
      ref: n,
      className: s(
        d.badge,
        a === "positive" && d.badgePositive,
        a === "negative" && d.badgeNegative,
        e
      ),
      ...t
    }
  )
);
Q.displayName = "CardBadge";
const U = "_input_1lca7_1", V = "_invalid_1lca7_32", p = {
  input: U,
  invalid: V
}, W = i.forwardRef(
  ({ className: a, invalid: e = !1, ...t }, n) => /* @__PURE__ */ o(
    "input",
    {
      ref: n,
      "aria-invalid": e || void 0,
      className: s(p.input, e && p.invalid, a),
      ...t
    }
  )
);
W.displayName = "Input";
const X = "_badge_808mz_1", Y = "_positive_808mz_16", Z = "_negative_808mz_22", aa = "_sm_808mz_28", _ = {
  badge: X,
  positive: Y,
  negative: Z,
  sm: aa
}, ea = i.forwardRef(
  ({ tone: a = "neutral", size: e = "md", className: t, ...n }, l) => /* @__PURE__ */ o(
    "span",
    {
      ref: l,
      className: s(
        _.badge,
        a === "positive" && _.positive,
        a === "negative" && _.negative,
        e === "sm" && _.sm,
        t
      ),
      ...n
    }
  )
);
ea.displayName = "Badge";
export {
  ea as Badge,
  b as Button,
  S as Card,
  G as CardAction,
  Q as CardBadge,
  J as CardContent,
  E as CardDescription,
  K as CardFooter,
  k as CardHeader,
  L as CardMedia,
  q as CardTitle,
  ia as Dialog,
  da as DialogClose,
  j as DialogContent,
  D as DialogDescription,
  w as DialogTitle,
  na as DialogTrigger,
  W as Input
};
//# sourceMappingURL=index.mjs.map
