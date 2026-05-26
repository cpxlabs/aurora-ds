import * as e from "react";
import t from "clsx";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Slot as i } from "@radix-ui/react-slot";
import * as a from "@radix-ui/react-checkbox";
import * as o from "@radix-ui/react-dialog";
import * as s from "@radix-ui/react-switch";
import * as c from "@radix-ui/react-tabs";
var l = {
	alert: "_alert_vhts7_1",
	positive: "_positive_vhts7_15",
	negative: "_negative_vhts7_22",
	warning: "_warning_vhts7_29",
	title: "_title_vhts7_35",
	description: "_description_vhts7_41"
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
	avatar: "_avatar_uuig6_1",
	sm: "_sm_uuig6_17",
	lg: "_lg_uuig6_23",
	image: "_image_uuig6_29",
	initials: "_initials_uuig6_36"
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
	let { avatarFallbackLabel: l } = g();
	return /* @__PURE__ */ n("span", {
		ref: c,
		role: "img",
		"aria-label": r ?? i ?? l,
		className: t(p.avatar, a === "sm" && p.sm, a === "lg" && p.lg, o),
		...s,
		children: e ? /* @__PURE__ */ n("img", {
			src: e,
			alt: r ?? "",
			className: p.image,
			"aria-hidden": "true"
		}) : /* @__PURE__ */ n("span", {
			"aria-hidden": "true",
			className: p.initials,
			children: i ? i.slice(0, 2).toUpperCase() : "?"
		})
	});
});
_.displayName = "Avatar";
var v = {
	badge: "_badge_808mz_1",
	positive: "_positive_808mz_16",
	negative: "_negative_808mz_22",
	sm: "_sm_808mz_28"
}, y = e.forwardRef(({ tone: e = "neutral", size: r = "md", className: i, ...a }, o) => /* @__PURE__ */ n("span", {
	ref: o,
	className: t(v.badge, e === "positive" && v.positive, e === "negative" && v.negative, r === "sm" && v.sm, i),
	...a
}));
y.displayName = "Badge";
var b = {
	button: "_button_s4yje_1",
	ghost: "_ghost_s4yje_34"
}, x = e.forwardRef(({ className: e, type: r = "button", variant: i = "solid", ...a }, o) => /* @__PURE__ */ n("button", {
	ref: o,
	type: r,
	className: t(b.button, i === "ghost" && b.ghost, e),
	...a
}));
x.displayName = "Button";
var S = {
	card: "_card_1banj_1",
	header: "_header_1banj_18",
	title: "_title_1banj_29",
	description: "_description_1banj_36",
	action: "_action_1banj_42",
	content: "_content_1banj_48",
	footer: "_footer_1banj_56",
	media: "_media_1banj_62",
	mediaImage: "_mediaImage_1banj_69",
	badge: "_badge_1banj_76",
	badgePositive: "_badgePositive_1banj_89",
	badgeNegative: "_badgeNegative_1banj_95",
	metaRow: "_metaRow_1banj_101",
	statValue: "_statValue_1banj_109",
	statLabel: "_statLabel_1banj_116",
	actions: "_actions_1banj_121",
	avatar: "_avatar_1banj_128",
	tagList: "_tagList_1banj_141",
	divider: "_divider_1banj_147"
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
	checkbox: "_checkbox_1qazx_1",
	indicator: "_indicator_1qazx_36"
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
	overlay: "_overlay_pgdu9_1",
	content: "_content_pgdu9_7",
	title: "_title_pgdu9_22",
	description: "_description_pgdu9_28",
	close: "_close_pgdu9_33"
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
var ie = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(o.Title, {
	ref: i,
	...r,
	className: t(P.title, e)
}));
ie.displayName = "DialogTitle";
var I = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(o.Description, {
	ref: i,
	...r,
	className: t(P.description, e)
}));
I.displayName = "DialogDescription";
var L = {
	input: "_input_1lca7_1",
	invalid: "_invalid_1lca7_32"
}, R = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("input", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(L.input, r && L.invalid, e),
	...i
}));
R.displayName = "Input";
var z = {
	label: "_label_831v2_1",
	invalid: "_invalid_831v2_10"
}, B = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("label", {
	ref: a,
	className: t(z.label, r && z.invalid, e),
	...i
}));
B.displayName = "Label";
var V = {
	track: "_track_1ssnb_1",
	fill: "_fill_1ssnb_10",
	positive: "_positive_1ssnb_18",
	negative: "_negative_1ssnb_22",
	warning: "_warning_1ssnb_26"
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
	select: "_select_18m37_1",
	invalid: "_invalid_18m37_36"
}, W = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("select", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(U.select, r && U.invalid, e),
	...i
}));
W.displayName = "Select";
var G = {
	separator: "_separator_fd6sf_1",
	vertical: "_vertical_fd6sf_12"
}, K = e.forwardRef(({ orientation: e = "horizontal", className: r, ...i }, a) => /* @__PURE__ */ n("hr", {
	ref: a,
	role: "separator",
	"aria-orientation": e,
	className: t(G.separator, e === "vertical" && G.vertical, r),
	...i
}));
K.displayName = "Separator";
var q = {
	spinner: "_spinner_1rwif_7",
	sm: "_sm_1rwif_15",
	lg: "_lg_1rwif_20",
	track: "_track_1rwif_25",
	"aurora-spin": "_aurora-spin_1rwif_1"
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
	switch: "_switch_169xx_1",
	thumb: "_thumb_169xx_35"
}, X = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(s.Root, {
	ref: i,
	className: t(Y.switch, e),
	...r,
	children: /* @__PURE__ */ n(s.Thumb, { className: Y.thumb })
}));
X.displayName = "Switch";
var Z = {
	list: "_list_4526f_1",
	trigger: "_trigger_4526f_10",
	content: "_content_4526f_50"
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
	textarea: "_textarea_p2xx0_1",
	invalid: "_invalid_p2xx0_36"
}, ce = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("textarea", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(se.textarea, r && se.invalid, e),
	...i
}));
ce.displayName = "Textarea";
//#endregion
export { u as Alert, f as AlertDescription, d as AlertTitle, ee as AuroraI18nProvider, _ as Avatar, y as Badge, x as Button, C as Card, D as CardAction, j as CardBadge, O as CardContent, E as CardDescription, k as CardFooter, w as CardHeader, A as CardMedia, T as CardTitle, N as Checkbox, te as Dialog, re as DialogClose, F as DialogContent, I as DialogDescription, ie as DialogTitle, ne as DialogTrigger, R as Input, B as Label, H as Progress, W as Select, K as Separator, J as Spinner, X as Switch, ae as Tabs, oe as TabsContent, Q as TabsList, $ as TabsTrigger, ce as Textarea, m as auroraI18nMessages, g as useAuroraI18n };

//# sourceMappingURL=index.mjs.map