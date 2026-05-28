import * as e from "react";
import t from "clsx";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Slot as i } from "@radix-ui/react-slot";
import * as a from "@radix-ui/react-checkbox";
import * as o from "@radix-ui/react-dialog";
import * as s from "@radix-ui/react-switch";
import * as c from "@radix-ui/react-tabs";
var l = {
	alert: "_alert_29y0f_1",
	positive: "_positive_29y0f_15",
	negative: "_negative_29y0f_21",
	warning: "_warning_29y0f_27",
	title: "_title_29y0f_33",
	description: "_description_29y0f_39"
}, u = e.forwardRef(({ tone: e = "neutral", className: r, ...i }, a) => /* @__PURE__ */ n("div", {
	ref: a,
	role: "alert",
	className: t(l.alert, e === "positive" && l.positive, e === "negative" && l.negative, e === "warning" && l.warning, r),
	...i
}));
u.displayName = "Alert";
var d = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("p", {
	ref: i,
	className: t(l.title, e),
	...r
}));
d.displayName = "AlertTitle";
var f = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("p", {
	ref: i,
	className: t(l.description, e),
	...r
}));
f.displayName = "AlertDescription";
var p = {
	avatar: "_avatar_ktx0u_1",
	sm: "_sm_ktx0u_18",
	lg: "_lg_ktx0u_24",
	image: "_image_ktx0u_30",
	initials: "_initials_ktx0u_37"
}, m = {
	pt_br: {
		avatarFallbackLabel: "Avatar",
		dialogCloseLabel: "Fechar diálogo",
		progressLabel: "Progresso",
		spinnerLabel: "Carregando…"
	},
	es: {
		avatarFallbackLabel: "Avatar",
		dialogCloseLabel: "Cerrar diálogo",
		progressLabel: "Progreso",
		spinnerLabel: "Cargando…"
	},
	eng: {
		avatarFallbackLabel: "Avatar",
		dialogCloseLabel: "Close dialog",
		progressLabel: "Progress",
		spinnerLabel: "Loading…"
	}
}, h = e.createContext(m.pt_br);
function ee({ children: t, locale: r = "pt_br", messages: i }) {
	let a = e.useMemo(() => ({
		...m[r],
		...i
	}), [r, i]);
	return /* @__PURE__ */ n(h.Provider, {
		value: a,
		children: t
	});
}
function g() {
	return e.useContext(h);
}
//#endregion
//#region src/components/avatar/Avatar.tsx
var _ = e.forwardRef(({ src: e, alt: r, initials: i, size: a = "md", className: o, ...s }, c) => {
	let { avatarFallbackLabel: l } = g(), u = r?.trim(), d = i?.trim(), f = d ? Array.from(d).slice(0, 2).join("").toUpperCase() : "?";
	return /* @__PURE__ */ n("span", {
		ref: c,
		role: "img",
		"aria-label": u || d || l,
		className: t(p.avatar, a === "sm" && p.sm, a === "lg" && p.lg, o),
		...s,
		children: e ? /* @__PURE__ */ n("img", {
			src: e,
			alt: u ?? "",
			className: p.image,
			"aria-hidden": "true"
		}) : /* @__PURE__ */ n("span", {
			"aria-hidden": "true",
			className: p.initials,
			children: f
		})
	});
});
_.displayName = "Avatar";
var v = {
	badge: "_badge_1xmfy_1",
	positive: "_positive_1xmfy_18",
	negative: "_negative_1xmfy_24",
	warning: "_warning_1xmfy_30",
	sm: "_sm_1xmfy_36"
}, y = e.forwardRef(({ tone: e = "neutral", size: r = "md", className: i, ...a }, o) => /* @__PURE__ */ n("span", {
	ref: o,
	className: t(v.badge, e === "positive" && v.positive, e === "negative" && v.negative, e === "warning" && v.warning, r === "sm" && v.sm, i),
	...a
}));
y.displayName = "Badge";
var b = {
	button: "_button_1olep_1",
	ghost: "_ghost_1olep_42"
}, x = e.forwardRef(({ className: e, type: r = "button", variant: a = "solid", asChild: o = !1, ...s }, c) => /* @__PURE__ */ n(o ? i : "button", {
	ref: c,
	...!o && { type: r },
	className: t(b.button, a === "ghost" && b.ghost, e),
	...s
}));
x.displayName = "Button";
var S = {
	card: "_card_ik0hi_1",
	header: "_header_ik0hi_18",
	title: "_title_ik0hi_29",
	description: "_description_ik0hi_37",
	action: "_action_ik0hi_44",
	content: "_content_ik0hi_50",
	footer: "_footer_ik0hi_58",
	media: "_media_ik0hi_65",
	mediaImage: "_mediaImage_ik0hi_72",
	badge: "_badge_ik0hi_79",
	badgePositive: "_badgePositive_ik0hi_93",
	badgeNegative: "_badgeNegative_ik0hi_99",
	metaRow: "_metaRow_ik0hi_105",
	statValue: "_statValue_ik0hi_113",
	statLabel: "_statLabel_ik0hi_121",
	actions: "_actions_ik0hi_126",
	avatar: "_avatar_ik0hi_133",
	tagList: "_tagList_ik0hi_146",
	divider: "_divider_ik0hi_152"
}, C = e.forwardRef(({ asChild: e = !1, className: r, ...a }, o) => /* @__PURE__ */ n(e ? i : "div", {
	ref: o,
	className: t(S.card, r),
	...a
}));
C.displayName = "Card";
var w = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	className: t(S.header, e),
	...r
}));
w.displayName = "CardHeader";
var T = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("h3", {
	ref: i,
	className: t(S.title, e),
	...r
}));
T.displayName = "CardTitle";
var E = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("p", {
	ref: i,
	className: t(S.description, e),
	...r
}));
E.displayName = "CardDescription";
var D = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	"data-slot": "card-action",
	className: t(S.action, e),
	...r
}));
D.displayName = "CardAction";
var O = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	className: t(S.content, e),
	...r
}));
O.displayName = "CardContent";
var k = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	className: t(S.footer, e),
	...r
}));
k.displayName = "CardFooter";
var A = e.forwardRef(({ className: e, imageClassName: r, ...i }, a) => /* @__PURE__ */ n("div", {
	ref: a,
	className: t(S.media, e),
	children: /* @__PURE__ */ n("img", {
		className: t(S.mediaImage, r),
		...i
	})
}));
A.displayName = "CardMedia";
var j = e.forwardRef(({ tone: e = "neutral", className: r, ...i }, a) => /* @__PURE__ */ n("span", {
	ref: a,
	className: t(S.badge, e === "positive" && S.badgePositive, e === "negative" && S.badgeNegative, r),
	...i
}));
j.displayName = "CardBadge";
var M = {
	checkbox: "_checkbox_d4zzo_1",
	indicator: "_indicator_d4zzo_37"
}, N = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(a.Root, {
	ref: i,
	className: t(M.checkbox, e),
	...r,
	children: /* @__PURE__ */ n(a.Indicator, {
		className: M.indicator,
		children: /* @__PURE__ */ n("svg", {
			"aria-hidden": "true",
			width: "10",
			height: "8",
			viewBox: "0 0 10 8",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ n("path", {
				d: "M1 4L3.5 6.5L9 1",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	})
}));
N.displayName = "Checkbox";
var P = {
	overlay: "_overlay_17ag4_1",
	content: "_content_17ag4_8",
	title: "_title_17ag4_22",
	description: "_description_17ag4_29",
	close: "_close_17ag4_36"
};
//#endregion
//#region src/components/dialog/Dialog.tsx
function te(e) {
	return /* @__PURE__ */ n(o.Root, { ...e });
}
var ne = o.Trigger, re = o.Close, F = e.forwardRef(({ className: e, children: i, ...a }, s) => {
	let { dialogCloseLabel: c } = g();
	return /* @__PURE__ */ r(o.Portal, { children: [/* @__PURE__ */ n(o.Overlay, { className: P.overlay }), /* @__PURE__ */ r(o.Content, {
		ref: s,
		className: t(P.content, e),
		...a,
		children: [i, /* @__PURE__ */ n(o.Close, {
			className: P.close,
			"aria-label": c,
			children: /* @__PURE__ */ n("span", {
				"aria-hidden": "true",
				children: "×"
			})
		})]
	})] });
});
F.displayName = "DialogContent";
var I = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(o.Title, {
	ref: i,
	...r,
	className: t(P.title, e)
}));
I.displayName = "DialogTitle";
var L = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(o.Description, {
	ref: i,
	...r,
	className: t(P.description, e)
}));
L.displayName = "DialogDescription";
var R = {
	input: "_input_1tcb7_1",
	invalid: "_invalid_1tcb7_33"
}, ie = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("input", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(R.input, r && R.invalid, e),
	...i
}));
ie.displayName = "Input";
var z = {
	label: "_label_48b94_1",
	invalid: "_invalid_48b94_11"
}, B = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("label", {
	ref: a,
	className: t(z.label, r && z.invalid, e),
	...i
}));
B.displayName = "Label";
var V = {
	track: "_track_1b1jq_1",
	fill: "_fill_1b1jq_9",
	positive: "_positive_1b1jq_17",
	negative: "_negative_1b1jq_21",
	warning: "_warning_1b1jq_25"
}, H = e.forwardRef(({ value: e = 0, tone: r = "neutral", label: i, className: a, ...o }, s) => {
	let { progressLabel: c } = g(), l = Math.min(100, Math.max(0, e));
	return /* @__PURE__ */ n("div", {
		ref: s,
		role: "progressbar",
		"aria-valuenow": l,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i ?? c,
		className: t(V.track, a),
		...o,
		children: /* @__PURE__ */ n("span", {
			className: t(V.fill, r === "positive" && V.positive, r === "negative" && V.negative, r === "warning" && V.warning),
			style: { width: `${l}%` }
		})
	});
});
H.displayName = "Progress";
var U = {
	select: "_select_1s535_1",
	invalid: "_invalid_1s535_34"
}, W = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("select", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(U.select, r && U.invalid, e),
	...i
}));
W.displayName = "Select";
var G = {
	separator: "_separator_15768_1",
	vertical: "_vertical_15768_10"
}, K = e.forwardRef(({ orientation: e = "horizontal", className: r, ...i }, a) => /* @__PURE__ */ n("hr", {
	ref: a,
	role: "separator",
	"aria-orientation": e,
	className: t(G.separator, e === "vertical" && G.vertical, r),
	...i
}));
K.displayName = "Separator";
var q = {
	spinner: "_spinner_1roc2_7",
	sm: "_sm_1roc2_15",
	lg: "_lg_1roc2_20",
	track: "_track_1roc2_25",
	"aurora-spin": "_aurora-spin_1roc2_1"
}, J = e.forwardRef(({ size: e = "md", label: r, className: i, ...a }, o) => {
	let { spinnerLabel: s } = g();
	return /* @__PURE__ */ n("span", {
		ref: o,
		role: "status",
		"aria-label": r ?? s,
		className: t(q.spinner, e === "sm" && q.sm, e === "lg" && q.lg, i),
		...a,
		children: /* @__PURE__ */ n("span", {
			className: q.track,
			"aria-hidden": "true"
		})
	});
});
J.displayName = "Spinner";
var Y = {
	switch: "_switch_1wh7a_1",
	thumb: "_thumb_1wh7a_35"
}, X = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(s.Root, {
	ref: i,
	className: t(Y.switch, e),
	...r,
	children: /* @__PURE__ */ n(s.Thumb, { className: Y.thumb })
}));
X.displayName = "Switch";
var Z = {
	list: "_list_1mpnp_1",
	trigger: "_trigger_1mpnp_10",
	content: "_content_1mpnp_49"
};
//#endregion
//#region src/components/tabs/Tabs.tsx
function ae(e) {
	return /* @__PURE__ */ n(c.Root, { ...e });
}
var Q = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(c.List, {
	ref: i,
	className: t(Z.list, e),
	...r
}));
Q.displayName = "TabsList";
var $ = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(c.Trigger, {
	ref: i,
	className: t(Z.trigger, e),
	...r
}));
$.displayName = "TabsTrigger";
var oe = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(c.Content, {
	ref: i,
	className: t(Z.content, e),
	...r
}));
oe.displayName = "TabsContent";
var se = {
	textarea: "_textarea_cxg01_1",
	invalid: "_invalid_cxg01_36"
}, ce = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("textarea", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(se.textarea, r && se.invalid, e),
	...i
}));
ce.displayName = "Textarea";
//#endregion
export { u as Alert, f as AlertDescription, d as AlertTitle, ee as AuroraI18nProvider, _ as Avatar, y as Badge, x as Button, C as Card, D as CardAction, j as CardBadge, O as CardContent, E as CardDescription, k as CardFooter, w as CardHeader, A as CardMedia, T as CardTitle, N as Checkbox, te as Dialog, re as DialogClose, F as DialogContent, L as DialogDescription, I as DialogTitle, ne as DialogTrigger, ie as Input, B as Label, H as Progress, W as Select, K as Separator, J as Spinner, X as Switch, ae as Tabs, oe as TabsContent, Q as TabsList, $ as TabsTrigger, ce as Textarea, m as auroraI18nMessages, g as useAuroraI18n };

//# sourceMappingURL=index.mjs.map