import { jsx as o, jsxs as _ } from "react/jsx-runtime";
import * as i from "react";
import s from "clsx";
import { Slot as g } from "@radix-ui/react-slot";
import * as d from "@radix-ui/react-dialog";
const p = "_button_s4yje_1", f = "_ghost_s4yje_34", m = {
  button: p,
  ghost: f
}, N = i.forwardRef(
  ({ className: a, type: e = "button", variant: t = "solid", ...r }, l) => /* @__PURE__ */ o(
    "button",
    {
      ref: l,
      type: e,
      className: s(m.button, t === "ghost" && m.ghost, a),
      ...r
    }
  )
);
N.displayName = "Button";
const b = "_overlay_pgdu9_1", C = "_content_pgdu9_7", y = "_title_pgdu9_22", v = "_description_pgdu9_28", u = "_close_pgdu9_33", c = {
  overlay: b,
  content: C,
  title: y,
  description: v,
  close: u
};
function V(a) {
  return /* @__PURE__ */ o(d.Root, { ...a });
}
const W = d.Trigger, X = d.Close, h = i.forwardRef(({ className: a, children: e, ...t }, r) => /* @__PURE__ */ _(d.Portal, { children: [
  /* @__PURE__ */ o(d.Overlay, { className: c.overlay }),
  /* @__PURE__ */ _(
    d.Content,
    {
      ref: r,
      className: s(c.content, a),
      ...t,
      children: [
        e,
        /* @__PURE__ */ o(d.Close, { className: c.close, "aria-label": "Fechar diálogo", children: /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "×" }) })
      ]
    }
  )
] }));
h.displayName = "DialogContent";
const j = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o(
  d.Title,
  {
    ref: t,
    ...e,
    className: s(c.title, a)
  }
));
j.displayName = "DialogTitle";
const D = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o(
  d.Description,
  {
    ref: t,
    ...e,
    className: s(c.description, a)
  }
));
D.displayName = "DialogDescription";
const R = "_card_1banj_1", w = "_header_1banj_18", T = "_title_1banj_29", P = "_description_1banj_36", $ = "_action_1banj_42", x = "_content_1banj_48", B = "_footer_1banj_56", I = "_media_1banj_62", F = "_mediaImage_1banj_69", A = "_badge_1banj_76", H = "_badgePositive_1banj_89", M = "_badgeNegative_1banj_95", n = {
  card: R,
  header: w,
  title: T,
  description: P,
  action: $,
  content: x,
  footer: B,
  media: I,
  mediaImage: F,
  badge: A,
  badgePositive: H,
  badgeNegative: M
}, O = i.forwardRef(
  ({ asChild: a = !1, className: e, ...t }, r) => /* @__PURE__ */ o(a ? g : "div", { ref: r, className: s(n.card, e), ...t })
);
O.displayName = "Card";
const S = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(n.header, a), ...e }));
S.displayName = "CardHeader";
const k = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("h3", { ref: t, className: s(n.title, a), ...e }));
k.displayName = "CardTitle";
const q = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("p", { ref: t, className: s(n.description, a), ...e }));
q.displayName = "CardDescription";
const z = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o(
  "div",
  {
    ref: t,
    "data-slot": "card-action",
    className: s(n.action, a),
    ...e
  }
));
z.displayName = "CardAction";
const E = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(n.content, a), ...e }));
E.displayName = "CardContent";
const G = i.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(n.footer, a), ...e }));
G.displayName = "CardFooter";
const J = i.forwardRef(
  ({ className: a, imageClassName: e, ...t }, r) => /* @__PURE__ */ o("div", { ref: r, className: s(n.media, a), children: /* @__PURE__ */ o("img", { className: s(n.mediaImage, e), ...t }) })
);
J.displayName = "CardMedia";
const K = i.forwardRef(
  ({ tone: a = "neutral", className: e, ...t }, r) => /* @__PURE__ */ o(
    "span",
    {
      ref: r,
      className: s(
        n.badge,
        a === "positive" && n.badgePositive,
        a === "negative" && n.badgeNegative,
        e
      ),
      ...t
    }
  )
);
K.displayName = "CardBadge";
export {
  N as Button,
  O as Card,
  z as CardAction,
  K as CardBadge,
  E as CardContent,
  q as CardDescription,
  G as CardFooter,
  S as CardHeader,
  J as CardMedia,
  k as CardTitle,
  V as Dialog,
  X as DialogClose,
  h as DialogContent,
  D as DialogDescription,
  j as DialogTitle,
  W as DialogTrigger
};
//# sourceMappingURL=index.mjs.map
