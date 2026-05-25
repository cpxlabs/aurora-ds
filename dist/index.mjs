import { jsx as o, jsxs as _ } from "react/jsx-runtime";
import * as i from "react";
import s from "clsx";
import { Slot as g } from "@radix-ui/react-slot";
import * as r from "@radix-ui/react-dialog";
const p = "_button_s4yje_1", f = "_ghost_s4yje_34", m = {
  button: p,
  ghost: f
}, N = i.forwardRef(
  ({ className: e, type: a = "button", variant: t = "solid", ...c }, l) => /* @__PURE__ */ o(
    "button",
    {
      ref: l,
      type: a,
      className: s(m.button, t === "ghost" && m.ghost, e),
      ...c
    }
  )
);
N.displayName = "Button";
const b = "_overlay_pgdu9_1", C = "_content_pgdu9_7", y = "_title_pgdu9_22", v = "_description_pgdu9_28", u = "_close_pgdu9_33", n = {
  overlay: b,
  content: C,
  title: y,
  description: v,
  close: u
};
function V(e) {
  return /* @__PURE__ */ o(r.Root, { ...e });
}
const W = r.Trigger, X = r.Close, h = i.forwardRef(({ className: e, children: a, ...t }, c) => /* @__PURE__ */ _(r.Portal, { children: [
  /* @__PURE__ */ o(r.Overlay, { className: n.overlay }),
  /* @__PURE__ */ _(
    r.Content,
    {
      ref: c,
      className: s(n.content, e),
      ...t,
      children: [
        a,
        /* @__PURE__ */ o(r.Close, { className: n.close, "aria-label": "Fechar diálogo", children: "×" })
      ]
    }
  )
] }));
h.displayName = "DialogContent";
const D = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  r.Title,
  {
    ref: t,
    ...a,
    className: s(n.title, e)
  }
));
D.displayName = "DialogTitle";
const R = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  r.Description,
  {
    ref: t,
    ...a,
    className: s(n.description, e)
  }
));
R.displayName = "DialogDescription";
const w = "_card_4cb8d_1", T = "_header_4cb8d_17", P = "_title_4cb8d_28", $ = "_description_4cb8d_35", j = "_action_4cb8d_41", x = "_content_4cb8d_47", B = "_footer_4cb8d_55", I = "_media_4cb8d_61", F = "_mediaImage_4cb8d_68", A = "_badge_4cb8d_75", H = "_badgePositive_4cb8d_88", M = "_badgeNegative_4cb8d_94", d = {
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
  ({ asChild: e = !1, className: a, ...t }, c) => /* @__PURE__ */ o(e ? g : "div", { ref: c, className: s(d.card, a), ...t })
);
O.displayName = "Card";
const S = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(d.header, e), ...a }));
S.displayName = "CardHeader";
const k = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o("h3", { ref: t, className: s(d.title, e), ...a }));
k.displayName = "CardTitle";
const q = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o("p", { ref: t, className: s(d.description, e), ...a }));
q.displayName = "CardDescription";
const z = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  "div",
  {
    ref: t,
    "data-slot": "card-action",
    className: s(d.action, e),
    ...a
  }
));
z.displayName = "CardAction";
const E = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(d.content, e), ...a }));
E.displayName = "CardContent";
const G = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o("div", { ref: t, className: s(d.footer, e), ...a }));
G.displayName = "CardFooter";
const J = i.forwardRef(
  ({ className: e, imageClassName: a, ...t }, c) => /* @__PURE__ */ o("div", { ref: c, className: s(d.media, e), children: /* @__PURE__ */ o("img", { className: s(d.mediaImage, a), ...t }) })
);
J.displayName = "CardMedia";
const K = i.forwardRef(
  ({ tone: e = "neutral", className: a, ...t }, c) => /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: s(
        d.badge,
        e === "positive" && d.badgePositive,
        e === "negative" && d.badgeNegative,
        a
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
  R as DialogDescription,
  D as DialogTitle,
  W as DialogTrigger
};
//# sourceMappingURL=index.mjs.map
