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
}, m = e.forwardRef(({ src: e, alt: r, initials: i, size: a = "md", className: o, ...s }, c) => /* @__PURE__ */ n("span", {
	ref: c,
	role: "img",
	"aria-label": r ?? i ?? "Avatar",
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
}));
m.displayName = "Avatar";
var h = {
	badge: "_badge_808mz_1",
	positive: "_positive_808mz_16",
	negative: "_negative_808mz_22",
	sm: "_sm_808mz_28"
}, g = e.forwardRef(({ tone: e = "neutral", size: r = "md", className: i, ...a }, o) => /* @__PURE__ */ n("span", {
	ref: o,
	className: t(h.badge, e === "positive" && h.positive, e === "negative" && h.negative, r === "sm" && h.sm, i),
	...a
}));
g.displayName = "Badge";
var _ = {
	button: "_button_s4yje_1",
	ghost: "_ghost_s4yje_34"
}, ee = e.forwardRef(({ className: e, type: r = "button", variant: i = "solid", ...a }, o) => /* @__PURE__ */ n("button", {
	ref: o,
	type: r,
	className: t(_.button, i === "ghost" && _.ghost, e),
	...a
}));
ee.displayName = "Button";
var v = {
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
}, y = e.forwardRef(({ asChild: e = !1, className: r, ...a }, o) => /* @__PURE__ */ n(e ? i : "div", {
	ref: o,
	className: t(v.card, r),
	...a
}));
y.displayName = "Card";
var b = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	className: t(v.header, e),
	...r
}));
b.displayName = "CardHeader";
var x = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("h3", {
	ref: i,
	className: t(v.title, e),
	...r
}));
x.displayName = "CardTitle";
var S = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("p", {
	ref: i,
	className: t(v.description, e),
	...r
}));
S.displayName = "CardDescription";
var C = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	"data-slot": "card-action",
	className: t(v.action, e),
	...r
}));
C.displayName = "CardAction";
var w = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	className: t(v.content, e),
	...r
}));
w.displayName = "CardContent";
var T = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	className: t(v.footer, e),
	...r
}));
T.displayName = "CardFooter";
var E = e.forwardRef(({ className: e, imageClassName: r, ...i }, a) => /* @__PURE__ */ n("div", {
	ref: a,
	className: t(v.media, e),
	children: /* @__PURE__ */ n("img", {
		className: t(v.mediaImage, r),
		...i
	})
}));
E.displayName = "CardMedia";
var D = e.forwardRef(({ tone: e = "neutral", className: r, ...i }, a) => /* @__PURE__ */ n("span", {
	ref: a,
	className: t(v.badge, e === "positive" && v.badgePositive, e === "negative" && v.badgeNegative, r),
	...i
}));
D.displayName = "CardBadge";
var O = {
	checkbox: "_checkbox_1qazx_1",
	indicator: "_indicator_1qazx_36"
}, k = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(a.Root, {
	ref: i,
	className: t(O.checkbox, e),
	...r,
	children: /* @__PURE__ */ n(a.Indicator, {
		className: O.indicator,
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
k.displayName = "Checkbox";
var A = {
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
var ne = o.Trigger, re = o.Close, j = e.forwardRef(({ className: e, children: i, ...a }, s) => /* @__PURE__ */ r(o.Portal, { children: [/* @__PURE__ */ n(o.Overlay, { className: A.overlay }), /* @__PURE__ */ r(o.Content, {
	ref: s,
	className: t(A.content, e),
	...a,
	children: [i, /* @__PURE__ */ n(o.Close, {
		className: A.close,
		"aria-label": "Fechar diálogo",
		children: /* @__PURE__ */ n("span", {
			"aria-hidden": "true",
			children: "×"
		})
	})]
})] }));
j.displayName = "DialogContent";
var M = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(o.Title, {
	ref: i,
	...r,
	className: t(A.title, e)
}));
M.displayName = "DialogTitle";
var N = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(o.Description, {
	ref: i,
	...r,
	className: t(A.description, e)
}));
N.displayName = "DialogDescription";
var P = {
	input: "_input_1lca7_1",
	invalid: "_invalid_1lca7_32"
}, F = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("input", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(P.input, r && P.invalid, e),
	...i
}));
F.displayName = "Input";
var I = {
	label: "_label_831v2_1",
	invalid: "_invalid_831v2_10"
}, L = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("label", {
	ref: a,
	className: t(I.label, r && I.invalid, e),
	...i
}));
L.displayName = "Label";
var R = {
	track: "_track_1ssnb_1",
	fill: "_fill_1ssnb_10",
	positive: "_positive_1ssnb_18",
	negative: "_negative_1ssnb_22",
	warning: "_warning_1ssnb_26"
}, z = e.forwardRef(({ value: e = 0, tone: r = "neutral", label: i = "Progresso", className: a, ...o }, s) => {
	let c = Math.min(100, Math.max(0, e));
	return /* @__PURE__ */ n("div", {
		ref: s,
		role: "progressbar",
		"aria-valuenow": c,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i,
		className: t(R.track, a),
		...o,
		children: /* @__PURE__ */ n("span", {
			className: t(R.fill, r === "positive" && R.positive, r === "negative" && R.negative, r === "warning" && R.warning),
			style: { width: `${c}%` }
		})
	});
});
z.displayName = "Progress";
var B = {
	select: "_select_18m37_1",
	invalid: "_invalid_18m37_36"
}, V = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("select", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(B.select, r && B.invalid, e),
	...i
}));
V.displayName = "Select";
var H = {
	separator: "_separator_fd6sf_1",
	vertical: "_vertical_fd6sf_12"
}, U = e.forwardRef(({ orientation: e = "horizontal", className: r, ...i }, a) => /* @__PURE__ */ n("hr", {
	ref: a,
	role: "separator",
	"aria-orientation": e,
	className: t(H.separator, e === "vertical" && H.vertical, r),
	...i
}));
U.displayName = "Separator";
var W = {
	spinner: "_spinner_1rwif_7",
	sm: "_sm_1rwif_15",
	lg: "_lg_1rwif_20",
	track: "_track_1rwif_25",
	"aurora-spin": "_aurora-spin_1rwif_1"
}, G = e.forwardRef(({ size: e = "md", label: r = "Carregando…", className: i, ...a }, o) => /* @__PURE__ */ n("span", {
	ref: o,
	role: "status",
	"aria-label": r,
	className: t(W.spinner, e === "sm" && W.sm, e === "lg" && W.lg, i),
	...a,
	children: /* @__PURE__ */ n("span", {
		className: W.track,
		"aria-hidden": "true"
	})
}));
G.displayName = "Spinner";
var K = {
	switch: "_switch_169xx_1",
	thumb: "_thumb_169xx_35"
}, q = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(s.Root, {
	ref: i,
	className: t(K.switch, e),
	...r,
	children: /* @__PURE__ */ n(s.Thumb, { className: K.thumb })
}));
q.displayName = "Switch";
var J = {
	list: "_list_4526f_1",
	trigger: "_trigger_4526f_10",
	content: "_content_4526f_50"
};
//#endregion
//#region src/components/tabs/Tabs.tsx
function ie(e) {
	return /* @__PURE__ */ n(c.Root, { ...e });
}
var Y = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(c.List, {
	ref: i,
	className: t(J.list, e),
	...r
}));
Y.displayName = "TabsList";
var X = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(c.Trigger, {
	ref: i,
	className: t(J.trigger, e),
	...r
}));
X.displayName = "TabsTrigger";
var Z = e.forwardRef(({ className: e, ...r }, i) => /* @__PURE__ */ n(c.Content, {
	ref: i,
	className: t(J.content, e),
	...r
}));
Z.displayName = "TabsContent";
var Q = {
	textarea: "_textarea_p2xx0_1",
	invalid: "_invalid_p2xx0_36"
}, $ = e.forwardRef(({ className: e, invalid: r = !1, ...i }, a) => /* @__PURE__ */ n("textarea", {
	ref: a,
	"aria-invalid": r || void 0,
	className: t(Q.textarea, r && Q.invalid, e),
	...i
}));
$.displayName = "Textarea";
//#endregion
export { u as Alert, f as AlertDescription, d as AlertTitle, m as Avatar, g as Badge, ee as Button, y as Card, C as CardAction, D as CardBadge, w as CardContent, S as CardDescription, T as CardFooter, b as CardHeader, E as CardMedia, x as CardTitle, k as Checkbox, te as Dialog, re as DialogClose, j as DialogContent, N as DialogDescription, M as DialogTitle, ne as DialogTrigger, F as Input, L as Label, z as Progress, V as Select, U as Separator, G as Spinner, q as Switch, ie as Tabs, Z as TabsContent, Y as TabsList, X as TabsTrigger, $ as Textarea };

//# sourceMappingURL=index.mjs.map