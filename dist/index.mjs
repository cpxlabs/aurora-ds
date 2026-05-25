import { jsx as t, jsxs as _ } from "react/jsx-runtime";
import * as i from "react";
import s from "clsx";
import { Slot as g } from "@radix-ui/react-slot";
import * as n from "@radix-ui/react-dialog";
const p = "_button_s4yje_1", f = "_ghost_s4yje_34", m = {
  button: p,
  ghost: f
}, v = i.forwardRef(
  ({ className: e, type: o = "button", variant: a = "solid", ...d }, l) => /* @__PURE__ */ t(
    "button",
    {
      ref: l,
      type: o,
      className: s(m.button, a === "ghost" && m.ghost, e),
      ...d
    }
  )
);
v.displayName = "Button";
const N = "_overlay_pgdu9_1", C = "_content_pgdu9_7", h = "_title_pgdu9_22", y = "_description_pgdu9_28", b = "_close_pgdu9_33", c = {
  overlay: N,
  content: C,
  title: h,
  description: y,
  close: b
};
function V(e) {
  return /* @__PURE__ */ t(n.Root, { ...e });
}
const W = n.Trigger, X = n.Close, u = i.forwardRef(({ className: e, children: o, ...a }, d) => /* @__PURE__ */ _(n.Portal, { children: [
  /* @__PURE__ */ t(n.Overlay, { className: c.overlay }),
  /* @__PURE__ */ _(
    n.Content,
    {
      ref: d,
      className: s(c.content, e),
      ...a,
      children: [
        o,
        /* @__PURE__ */ t(n.Close, { className: c.close, "aria-label": "Fechar diálogo", children: "×" })
      ]
    }
  )
] }));
u.displayName = "DialogContent";
const D = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t(
  n.Title,
  {
    ref: a,
    ...o,
    className: s(c.title, e)
  }
));
D.displayName = "DialogTitle";
const R = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t(
  n.Description,
  {
    ref: a,
    ...o,
    className: s(c.description, e)
  }
));
R.displayName = "DialogDescription";
const w = "_card_v2hso_1", T = "_header_v2hso_18", P = "_title_v2hso_29", $ = "_description_v2hso_36", j = "_action_v2hso_42", x = "_content_v2hso_48", B = "_footer_v2hso_56", I = "_media_v2hso_62", F = "_mediaImage_v2hso_69", A = "_badge_v2hso_76", H = "_badgePositive_v2hso_89", M = "_badgeNegative_v2hso_95", r = {
  card: w,
  header: T,
  title: P,
  description: $,
  action: j,
  content: x,
  footer: B,
  media: I,
  mediaImage: F,
  badge: A,
  badgePositive: H,
  badgeNegative: M
}, O = i.forwardRef(
  ({ asChild: e = !1, className: o, ...a }, d) => /* @__PURE__ */ t(e ? g : "div", { ref: d, className: s(r.card, o), ...a })
);
O.displayName = "Card";
const S = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("div", { ref: a, className: s(r.header, e), ...o }));
S.displayName = "CardHeader";
const k = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("h3", { ref: a, className: s(r.title, e), ...o }));
k.displayName = "CardTitle";
const q = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("p", { ref: a, className: s(r.description, e), ...o }));
q.displayName = "CardDescription";
const z = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t(
  "div",
  {
    ref: a,
    "data-slot": "card-action",
    className: s(r.action, e),
    ...o
  }
));
z.displayName = "CardAction";
const E = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("div", { ref: a, className: s(r.content, e), ...o }));
E.displayName = "CardContent";
const G = i.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("div", { ref: a, className: s(r.footer, e), ...o }));
G.displayName = "CardFooter";
const J = i.forwardRef(
  ({ className: e, imageClassName: o, ...a }, d) => /* @__PURE__ */ t("div", { ref: d, className: s(r.media, e), children: /* @__PURE__ */ t("img", { className: s(r.mediaImage, o), ...a }) })
);
J.displayName = "CardMedia";
const K = i.forwardRef(
  ({ tone: e = "neutral", className: o, ...a }, d) => /* @__PURE__ */ t(
    "span",
    {
      ref: d,
      className: s(
        r.badge,
        e === "positive" && r.badgePositive,
        e === "negative" && r.badgeNegative,
        o
      ),
      ...a
    }
  )
);
K.displayName = "CardBadge";
export {
  v as Button,
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
  u as DialogContent,
  R as DialogDescription,
  D as DialogTitle,
  W as DialogTrigger
};
//# sourceMappingURL=index.mjs.map
