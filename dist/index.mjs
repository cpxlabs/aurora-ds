import { jsx as s, jsxs as w } from "react/jsx-runtime";
import * as n from "react";
import i from "clsx";
import { Slot as P } from "@radix-ui/react-slot";
import * as u from "@radix-ui/react-checkbox";
import * as l from "@radix-ui/react-dialog";
import * as y from "@radix-ui/react-switch";
import * as N from "@radix-ui/react-tabs";
const A = "_alert_vhts7_1", S = "_positive_vhts7_15", L = "_negative_vhts7_22", B = "_warning_vhts7_29", I = "_title_vhts7_35", z = "_description_vhts7_41", d = {
  alert: A,
  positive: S,
  negative: L,
  warning: B,
  title: I,
  description: z
}, M = n.forwardRef(
  ({ tone: a = "neutral", className: e, ...t }, o) => /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      role: "alert",
      className: i(
        d.alert,
        a === "positive" && d.positive,
        a === "negative" && d.negative,
        a === "warning" && d.warning,
        e
      ),
      ...t
    }
  )
);
M.displayName = "Alert";
const F = n.forwardRef(
  ({ className: a, ...e }, t) => /* @__PURE__ */ s("p", { ref: t, className: i(d.title, a), ...e })
);
F.displayName = "AlertTitle";
const q = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s("p", { ref: t, className: i(d.description, a), ...e }));
q.displayName = "AlertDescription";
const H = "_avatar_uuig6_1", O = "_sm_uuig6_17", U = "_lg_uuig6_23", W = "_image_uuig6_29", E = "_initials_uuig6_36", _ = {
  avatar: H,
  sm: O,
  lg: U,
  image: W,
  initials: E
}, G = n.forwardRef(
  ({ src: a, alt: e, initials: t, size: o = "md", className: c, ...b }, p) => /* @__PURE__ */ s(
    "span",
    {
      ref: p,
      role: "img",
      "aria-label": e ?? t ?? "Avatar",
      className: i(
        _.avatar,
        o === "sm" && _.sm,
        o === "lg" && _.lg,
        c
      ),
      ...b,
      children: a ? /* @__PURE__ */ s("img", { src: a, alt: e ?? "", className: _.image, "aria-hidden": "true" }) : /* @__PURE__ */ s("span", { "aria-hidden": "true", className: _.initials, children: t ? t.slice(0, 2).toUpperCase() : "?" })
    }
  )
);
G.displayName = "Avatar";
const J = "_badge_808mz_1", K = "_positive_808mz_16", Q = "_negative_808mz_22", V = "_sm_808mz_28", v = {
  badge: J,
  positive: K,
  negative: Q,
  sm: V
}, X = n.forwardRef(
  ({ tone: a = "neutral", size: e = "md", className: t, ...o }, c) => /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      className: i(
        v.badge,
        a === "positive" && v.positive,
        a === "negative" && v.negative,
        e === "sm" && v.sm,
        t
      ),
      ...o
    }
  )
);
X.displayName = "Badge";
const Y = "_button_s4yje_1", Z = "_ghost_s4yje_34", C = {
  button: Y,
  ghost: Z
}, aa = n.forwardRef(
  ({ className: a, type: e = "button", variant: t = "solid", ...o }, c) => /* @__PURE__ */ s(
    "button",
    {
      ref: c,
      type: e,
      className: i(C.button, t === "ghost" && C.ghost, a),
      ...o
    }
  )
);
aa.displayName = "Button";
const ea = "_card_1banj_1", ta = "_header_1banj_18", sa = "_title_1banj_29", ia = "_description_1banj_36", oa = "_action_1banj_42", na = "_content_1banj_48", ra = "_footer_1banj_56", ca = "_media_1banj_62", la = "_mediaImage_1banj_69", da = "_badge_1banj_76", _a = "_badgePositive_1banj_89", ma = "_badgeNegative_1banj_95", r = {
  card: ea,
  header: ta,
  title: sa,
  description: ia,
  action: oa,
  content: na,
  footer: ra,
  media: ca,
  mediaImage: la,
  badge: da,
  badgePositive: _a,
  badgeNegative: ma
}, ga = n.forwardRef(
  ({ asChild: a = !1, className: e, ...t }, o) => /* @__PURE__ */ s(a ? P : "div", { ref: o, className: i(r.card, e), ...t })
);
ga.displayName = "Card";
const pa = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s("div", { ref: t, className: i(r.header, a), ...e }));
pa.displayName = "CardHeader";
const va = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s("h3", { ref: t, className: i(r.title, a), ...e }));
va.displayName = "CardTitle";
const fa = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s("p", { ref: t, className: i(r.description, a), ...e }));
fa.displayName = "CardDescription";
const Na = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(
  "div",
  {
    ref: t,
    "data-slot": "card-action",
    className: i(r.action, a),
    ...e
  }
));
Na.displayName = "CardAction";
const ba = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s("div", { ref: t, className: i(r.content, a), ...e }));
ba.displayName = "CardContent";
const ha = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s("div", { ref: t, className: i(r.footer, a), ...e }));
ha.displayName = "CardFooter";
const wa = n.forwardRef(
  ({ className: a, imageClassName: e, ...t }, o) => /* @__PURE__ */ s("div", { ref: o, className: i(r.media, a), children: /* @__PURE__ */ s("img", { className: i(r.mediaImage, e), ...t }) })
);
wa.displayName = "CardMedia";
const ua = n.forwardRef(
  ({ tone: a = "neutral", className: e, ...t }, o) => /* @__PURE__ */ s(
    "span",
    {
      ref: o,
      className: i(
        r.badge,
        a === "positive" && r.badgePositive,
        a === "negative" && r.badgeNegative,
        e
      ),
      ...t
    }
  )
);
ua.displayName = "CardBadge";
const ya = "_checkbox_1qazx_1", Ca = "_indicator_1qazx_36", R = {
  checkbox: ya,
  indicator: Ca
}, Ra = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(
  u.Root,
  {
    ref: t,
    className: i(R.checkbox, a),
    ...e,
    children: /* @__PURE__ */ s(u.Indicator, { className: R.indicator, children: /* @__PURE__ */ s(
      "svg",
      {
        "aria-hidden": "true",
        width: "10",
        height: "8",
        viewBox: "0 0 10 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ s(
          "path",
          {
            d: "M1 4L3.5 6.5L9 1",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    ) })
  }
));
Ra.displayName = "Checkbox";
const $a = "_overlay_pgdu9_1", xa = "_content_pgdu9_7", Ta = "_title_pgdu9_22", ka = "_description_pgdu9_28", ja = "_close_pgdu9_33", g = {
  overlay: $a,
  content: xa,
  title: Ta,
  description: ka,
  close: ja
};
function fe(a) {
  return /* @__PURE__ */ s(l.Root, { ...a });
}
const Ne = l.Trigger, be = l.Close, Da = n.forwardRef(({ className: a, children: e, ...t }, o) => /* @__PURE__ */ w(l.Portal, { children: [
  /* @__PURE__ */ s(l.Overlay, { className: g.overlay }),
  /* @__PURE__ */ w(
    l.Content,
    {
      ref: o,
      className: i(g.content, a),
      ...t,
      children: [
        e,
        /* @__PURE__ */ s(l.Close, { className: g.close, "aria-label": "Fechar diálogo", children: /* @__PURE__ */ s("span", { "aria-hidden": "true", children: "×" }) })
      ]
    }
  )
] }));
Da.displayName = "DialogContent";
const Pa = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(
  l.Title,
  {
    ref: t,
    ...e,
    className: i(g.title, a)
  }
));
Pa.displayName = "DialogTitle";
const Aa = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(
  l.Description,
  {
    ref: t,
    ...e,
    className: i(g.description, a)
  }
));
Aa.displayName = "DialogDescription";
const Sa = "_input_1lca7_1", La = "_invalid_1lca7_32", $ = {
  input: Sa,
  invalid: La
}, Ba = n.forwardRef(
  ({ className: a, invalid: e = !1, ...t }, o) => /* @__PURE__ */ s(
    "input",
    {
      ref: o,
      "aria-invalid": e || void 0,
      className: i($.input, e && $.invalid, a),
      ...t
    }
  )
);
Ba.displayName = "Input";
const Ia = "_label_831v2_1", za = "_invalid_831v2_10", x = {
  label: Ia,
  invalid: za
}, Ma = n.forwardRef(
  ({ className: a, invalid: e = !1, ...t }, o) => /* @__PURE__ */ s(
    "label",
    {
      ref: o,
      className: i(x.label, e && x.invalid, a),
      ...t
    }
  )
);
Ma.displayName = "Label";
const Fa = "_track_1ssnb_1", qa = "_fill_1ssnb_10", Ha = "_positive_1ssnb_18", Oa = "_negative_1ssnb_22", Ua = "_warning_1ssnb_26", m = {
  track: Fa,
  fill: qa,
  positive: Ha,
  negative: Oa,
  warning: Ua
}, Wa = n.forwardRef(
  ({ value: a = 0, tone: e = "neutral", label: t = "Progresso", className: o, ...c }, b) => {
    const p = Math.min(100, Math.max(0, a));
    return /* @__PURE__ */ s(
      "div",
      {
        ref: b,
        role: "progressbar",
        "aria-valuenow": p,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": t,
        className: i(m.track, o),
        ...c,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: i(
              m.fill,
              e === "positive" && m.positive,
              e === "negative" && m.negative,
              e === "warning" && m.warning
            ),
            style: { width: `${p}%` }
          }
        )
      }
    );
  }
);
Wa.displayName = "Progress";
const Ea = "_select_18m37_1", Ga = "_invalid_18m37_36", T = {
  select: Ea,
  invalid: Ga
}, Ja = n.forwardRef(
  ({ className: a, invalid: e = !1, ...t }, o) => /* @__PURE__ */ s(
    "select",
    {
      ref: o,
      "aria-invalid": e || void 0,
      className: i(T.select, e && T.invalid, a),
      ...t
    }
  )
);
Ja.displayName = "Select";
const Ka = "_separator_fd6sf_1", Qa = "_vertical_fd6sf_12", k = {
  separator: Ka,
  vertical: Qa
}, Va = n.forwardRef(
  ({ orientation: a = "horizontal", className: e, ...t }, o) => /* @__PURE__ */ s(
    "hr",
    {
      ref: o,
      role: "separator",
      "aria-orientation": a,
      className: i(
        k.separator,
        a === "vertical" && k.vertical,
        e
      ),
      ...t
    }
  )
);
Va.displayName = "Separator";
const Xa = "_spinner_1rwif_7", Ya = "_sm_1rwif_15", Za = "_lg_1rwif_20", ae = "_track_1rwif_25", f = {
  spinner: Xa,
  sm: Ya,
  lg: Za,
  track: ae
}, ee = n.forwardRef(
  ({ size: a = "md", label: e = "Carregando…", className: t, ...o }, c) => /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      role: "status",
      "aria-label": e,
      className: i(
        f.spinner,
        a === "sm" && f.sm,
        a === "lg" && f.lg,
        t
      ),
      ...o,
      children: /* @__PURE__ */ s("span", { className: f.track, "aria-hidden": "true" })
    }
  )
);
ee.displayName = "Spinner";
const te = "_thumb_169xx_35", j = {
  switch: "_switch_169xx_1",
  thumb: te
}, se = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(y.Root, { ref: t, className: i(j.switch, a), ...e, children: /* @__PURE__ */ s(y.Thumb, { className: j.thumb }) }));
se.displayName = "Switch";
const ie = "_list_4526f_1", oe = "_trigger_4526f_10", ne = "_content_4526f_50", h = {
  list: ie,
  trigger: oe,
  content: ne
};
function he(a) {
  return /* @__PURE__ */ s(N.Root, { ...a });
}
const re = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(N.List, { ref: t, className: i(h.list, a), ...e }));
re.displayName = "TabsList";
const ce = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(
  N.Trigger,
  {
    ref: t,
    className: i(h.trigger, a),
    ...e
  }
));
ce.displayName = "TabsTrigger";
const le = n.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ s(
  N.Content,
  {
    ref: t,
    className: i(h.content, a),
    ...e
  }
));
le.displayName = "TabsContent";
const de = "_textarea_p2xx0_1", _e = "_invalid_p2xx0_36", D = {
  textarea: de,
  invalid: _e
}, me = n.forwardRef(
  ({ className: a, invalid: e = !1, ...t }, o) => /* @__PURE__ */ s(
    "textarea",
    {
      ref: o,
      "aria-invalid": e || void 0,
      className: i(D.textarea, e && D.invalid, a),
      ...t
    }
  )
);
me.displayName = "Textarea";
export {
  M as Alert,
  q as AlertDescription,
  F as AlertTitle,
  G as Avatar,
  X as Badge,
  aa as Button,
  ga as Card,
  Na as CardAction,
  ua as CardBadge,
  ba as CardContent,
  fa as CardDescription,
  ha as CardFooter,
  pa as CardHeader,
  wa as CardMedia,
  va as CardTitle,
  Ra as Checkbox,
  fe as Dialog,
  be as DialogClose,
  Da as DialogContent,
  Aa as DialogDescription,
  Pa as DialogTitle,
  Ne as DialogTrigger,
  Ba as Input,
  Ma as Label,
  Wa as Progress,
  Ja as Select,
  Va as Separator,
  ee as Spinner,
  se as Switch,
  he as Tabs,
  le as TabsContent,
  re as TabsList,
  ce as TabsTrigger,
  me as Textarea
};
//# sourceMappingURL=index.mjs.map
