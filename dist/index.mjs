import { jsx as s, jsxs as l } from "react/jsx-runtime";
import n from "clsx";
import * as o from "@radix-ui/react-dialog";
const a = "_button_s4yje_1", _ = "_ghost_s4yje_34", r = {
  button: a,
  ghost: _
};
function D({ className: t, variant: c = "solid", ...i }) {
  return /* @__PURE__ */ s(
    "button",
    {
      className: n(
        r.button,
        c === "ghost" && r.ghost,
        t
      ),
      ...i
    }
  );
}
const g = "_overlay_pgdu9_1", u = "_content_pgdu9_7", m = "_title_pgdu9_22", d = "_description_pgdu9_28", p = "_close_pgdu9_33", e = {
  overlay: g,
  content: u,
  title: m,
  description: d,
  close: p
};
function N(t) {
  return /* @__PURE__ */ s(o.Root, { ...t });
}
const b = o.Trigger;
function f({ className: t, children: c, ...i }) {
  return /* @__PURE__ */ l(o.Portal, { children: [
    /* @__PURE__ */ s(o.Overlay, { className: e.overlay }),
    /* @__PURE__ */ l(o.Content, { className: n(e.content, t), ...i, children: [
      c,
      /* @__PURE__ */ s(o.Close, { className: e.close, "aria-label": "Fechar", children: "×" })
    ] })
  ] });
}
const v = (t) => /* @__PURE__ */ s(o.Title, { ...t, className: n(e.title, t.className) }), j = (t) => /* @__PURE__ */ s(
  o.Description,
  {
    ...t,
    className: n(e.description, t.className)
  }
);
export {
  D as Button,
  N as Dialog,
  f as DialogContent,
  j as DialogDescription,
  v as DialogTitle,
  b as DialogTrigger
};
//# sourceMappingURL=index.mjs.map
