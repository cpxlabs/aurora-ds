import { jsx as t, jsxs as _ } from "react/jsx-runtime";
import * as s from "react";
import i from "clsx";
import { Slot as g } from "@radix-ui/react-slot";
import * as n from "@radix-ui/react-dialog";
const p = "_button_s4yje_1", f = "_ghost_s4yje_34", m = {
  button: p,
  ghost: f
}, N = s.forwardRef(
  ({ className: e, type: o = "button", variant: a = "solid", ...d }, l) => /* @__PURE__ */ t(
    "button",
    {
      ref: l,
      type: o,
      className: i(m.button, a === "ghost" && m.ghost, e),
      ...d
    }
  )
);
N.displayName = "Button";
const C = "_overlay_pgdu9_1", y = "_content_pgdu9_7", v = "_title_pgdu9_22", b = "_description_pgdu9_28", u = "_close_pgdu9_33", c = {
  overlay: C,
  content: y,
  title: v,
  description: b,
  close: u
};
function V(e) {
  return /* @__PURE__ */ t(n.Root, { ...e });
}
const W = n.Trigger, X = n.Close, h = s.forwardRef(({ className: e, children: o, ...a }, d) => /* @__PURE__ */ _(n.Portal, { children: [
  /* @__PURE__ */ t(n.Overlay, { className: c.overlay }),
  /* @__PURE__ */ _(
    n.Content,
    {
      ref: d,
      className: i(c.content, e),
      ...a,
      children: [
        o,
        /* @__PURE__ */ t(n.Close, { className: c.close, "aria-label": "Fechar diálogo", children: "×" })
      ]
    }
  )
] }));
h.displayName = "DialogContent";
const D = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t(
  n.Title,
  {
    ref: a,
    ...o,
    className: i(c.title, e)
  }
));
D.displayName = "DialogTitle";
const R = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t(
  n.Description,
  {
    ref: a,
    ...o,
    className: i(c.description, e)
  }
));
R.displayName = "DialogDescription";
const w = "_card_1keio_1", k = "_header_1keio_17", T = "_title_1keio_28", P = "_description_1keio_35", $ = "_action_1keio_41", j = "_content_1keio_47", x = "_footer_1keio_55", B = "_media_1keio_61", I = "_mediaImage_1keio_68", F = "_badge_1keio_75", A = "_badgePositive_1keio_88", H = "_badgeNegative_1keio_94", r = {
  card: w,
  header: k,
  title: T,
  description: P,
  action: $,
  content: j,
  footer: x,
  media: B,
  mediaImage: I,
  badge: F,
  badgePositive: A,
  badgeNegative: H
}, M = s.forwardRef(
  ({ asChild: e = !1, className: o, ...a }, d) => /* @__PURE__ */ t(e ? g : "div", { ref: d, className: i(r.card, o), ...a })
);
M.displayName = "Card";
const O = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("div", { ref: a, className: i(r.header, e), ...o }));
O.displayName = "CardHeader";
const S = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("h3", { ref: a, className: i(r.title, e), ...o }));
S.displayName = "CardTitle";
const q = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("p", { ref: a, className: i(r.description, e), ...o }));
q.displayName = "CardDescription";
const z = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t(
  "div",
  {
    ref: a,
    "data-slot": "card-action",
    className: i(r.action, e),
    ...o
  }
));
z.displayName = "CardAction";
const E = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("div", { ref: a, className: i(r.content, e), ...o }));
E.displayName = "CardContent";
const G = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ t("div", { ref: a, className: i(r.footer, e), ...o }));
G.displayName = "CardFooter";
const J = s.forwardRef(
  ({ className: e, imageClassName: o, ...a }, d) => /* @__PURE__ */ t("div", { ref: d, className: i(r.media, e), children: /* @__PURE__ */ t("img", { className: i(r.mediaImage, o), ...a }) })
);
J.displayName = "CardMedia";
const K = s.forwardRef(
  ({ tone: e = "neutral", className: o, ...a }, d) => /* @__PURE__ */ t(
    "span",
    {
      ref: d,
      className: i(
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
  N as Button,
  M as Card,
  z as CardAction,
  K as CardBadge,
  E as CardContent,
  q as CardDescription,
  G as CardFooter,
  O as CardHeader,
  J as CardMedia,
  S as CardTitle,
  V as Dialog,
  X as DialogClose,
  h as DialogContent,
  R as DialogDescription,
  D as DialogTitle,
  W as DialogTrigger
};
//# sourceMappingURL=index.mjs.map
