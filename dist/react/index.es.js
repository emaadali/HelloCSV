var hs = Object.defineProperty;
var vs = (e, t, n) => t in e ? hs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => vs(e, typeof t != "symbol" ? t + "" : t, n);
import { createRoot as ws } from "react-dom/client";
import * as E from "react";
import D, { forwardRef as Fn, useId as Ne, useRef as G, useCallback as ue, useEffect as le, useState as Z, useMemo as re, useLayoutEffect as zr, useContext as ce, createContext as me, Fragment as Oe, isValidElement as bs, cloneElement as ys, createElement as li, useReducer as Pn, useSyncExternalStore as xs, createRef as si } from "react";
import { jsx as h, jsxs as k, Fragment as Yt } from "react/jsx-runtime";
import * as Cn from "react-dom";
import { createPortal as Br, flushSync as mt } from "react-dom";
function ai(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ai(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ss() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ai(e)) && (r && (r += " "), r += t);
  return r;
}
const ho = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, vo = Ss, ut = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return vo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, l = Object.keys(o).map((u) => {
    const c = n == null ? void 0 : n[u], f = i == null ? void 0 : i[u];
    if (c === null) return null;
    const m = ho(c) || ho(f);
    return o[u][m];
  }), s = n && Object.entries(n).reduce((u, c) => {
    let [f, m] = c;
    return m === void 0 || (u[f] = m), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: f, className: m, ...d } = c;
    return Object.entries(d).every((p) => {
      let [g, w] = p;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...s
      }[g]) : {
        ...i,
        ...s
      }[g] === w;
    }) ? [
      ...u,
      f,
      m
    ] : u;
  }, []);
  return vo(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Cs = ut(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--hello-csv-radius-md)] text-sm font-medium transition-all outline-none h-10 px-4 py-2 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-hello-csv-primary text-hello-csv-primary-foreground shadow-xs hover:bg-hello-csv-primary/90 focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]",
        secondary: "bg-hello-csv-secondary text-hello-csv-secondary-foreground shadow-xs hover:bg-hello-csv-secondary/80 focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]",
        tertiary: "border border-hello-csv-input bg-hello-csv-background text-hello-csv-foreground hover:bg-hello-csv-accent hover:text-hello-csv-accent-foreground focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]",
        success: "bg-hello-csv-success text-hello-csv-success-foreground shadow-xs hover:bg-hello-csv-success/90 focus-visible:border-hello-csv-ring focus-visible:ring-hello-csv-ring/50 focus-visible:ring-[3px]",
        danger: "bg-hello-csv-destructive text-white shadow-xs hover:bg-hello-csv-destructive/90 focus-visible:ring-hello-csv-destructive/20 focus-visible:ring-[3px]"
      },
      withFullWidth: {
        true: "w-full",
        false: ""
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "cursor-pointer"
      }
    },
    defaultVariants: {
      withFullWidth: !1,
      variant: "primary",
      disabled: !1
    }
  }
);
function ke({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  withFullWidth: o
}) {
  const i = Cs({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ h(
    "div",
    {
      role: "button",
      tabIndex: 0,
      className: i,
      onClick: r,
      "aria-disabled": n,
      children: e
    }
  );
}
const Es = ut(
  "flex flex-col gap-6 rounded-[var(--hello-csv-radius)] border border-hello-csv-border text-hello-csv-card-foreground shadow-xs",
  {
    variants: {
      variant: {
        default: "bg-hello-csv-card",
        muted: "bg-hello-csv-muted"
      },
      withPadding: {
        true: "p-6",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      withPadding: !0
    }
  }
), ui = Fn(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = Es({ variant: n, withPadding: r });
    return /* @__PURE__ */ h("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function ci({ checked: e, setChecked: t, label: n }) {
  const r = Ne();
  return /* @__PURE__ */ k("div", { className: "flex gap-3 items-center", children: [
    /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center", children: /* @__PURE__ */ k("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ h(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "peer col-start-1 row-start-1 size-4 shrink-0 appearance-none rounded-[4px] border border-hello-csv-input bg-transparent transition-shadow outline-none focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:cursor-not-allowed disabled:opacity-50 checked:border-hello-csv-primary checked:bg-hello-csv-primary checked:text-hello-csv-primary-foreground forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ k(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-hello-csv-primary-foreground group-has-disabled:stroke-hello-csv-muted-foreground",
          children: [
            /* @__PURE__ */ h(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ h(
              "path",
              {
                d: "M3 7H11",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-indeterminate:opacity-100"
              }
            )
          ]
        }
      )
    ] }) }),
    n && /* @__PURE__ */ h("div", { className: "text-sm/6", children: /* @__PURE__ */ h("label", { htmlFor: r, className: "font-medium text-hello-csv-foreground", children: n }) })
  ] });
}
let Rs = !1;
function jr() {
  return Rs;
}
const di = typeof document < "u" ? D.useLayoutEffect : () => {
};
function $s(e) {
  const t = G(null);
  return di(() => {
    t.current = e;
  }, [
    e
  ]), ue((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const ct = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, gt = (e) => e && "window" in e && e.window === e ? e : ct(e).defaultView || window;
function _s(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Is(e) {
  return _s(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function fi(e, t) {
  if (!jr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Is(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const mr = (e = document) => {
  var t;
  if (!jr()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function pi(e) {
  return jr() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Ts(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Ms(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function mi(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Os = mi(function() {
  return Ms(/^Mac/i);
}), Fs = mi(function() {
  return Ts(/Android/i);
});
function gi() {
  let e = G(/* @__PURE__ */ new Map()), t = ue((o, i, l, s) => {
    let a = s != null && s.once ? (...u) => {
      e.current.delete(l), l(...u);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: o,
      fn: a,
      options: s
    }), o.addEventListener(i, a, s);
  }, []), n = ue((o, i, l, s) => {
    var a;
    let u = ((a = e.current.get(l)) === null || a === void 0 ? void 0 : a.fn) || l;
    o.removeEventListener(i, u, s), e.current.delete(l);
  }, []), r = ue(() => {
    e.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return le(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Ps(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Fs() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function hi(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function As(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function vi(e) {
  let t = G({
    isFocused: !1,
    observer: null
  });
  di(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = $s((r) => {
    e == null || e(r);
  });
  return ue((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        if (t.current.isFocused = !1, o.disabled) {
          let s = hi(l);
          n(s);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let s = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let Ns = !1, tn = null, gr = /* @__PURE__ */ new Set(), Wt = /* @__PURE__ */ new Map(), wt = !1, hr = !1;
const ks = {
  Tab: !0,
  Escape: !0
};
function Gr(e, t) {
  for (let n of gr) n(e, t);
}
function Ds(e) {
  return !(e.metaKey || !Os() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function En(e) {
  wt = !0, Ds(e) && (tn = "keyboard", Gr("keyboard", e));
}
function It(e) {
  tn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (wt = !0, Gr("pointer", e));
}
function wi(e) {
  Ps(e) && (wt = !0, tn = "virtual");
}
function bi(e) {
  e.target === window || e.target === document || Ns || !e.isTrusted || (!wt && !hr && (tn = "virtual", Gr("virtual", e)), wt = !1, hr = !1);
}
function yi() {
  wt = !1, hr = !0;
}
function vr(e) {
  if (typeof window > "u" || Wt.get(gt(e))) return;
  const t = gt(e), n = ct(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    wt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", En, !0), n.addEventListener("keyup", En, !0), n.addEventListener("click", wi, !0), t.addEventListener("focus", bi, !0), t.addEventListener("blur", yi, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", It, !0), n.addEventListener("pointermove", It, !0), n.addEventListener("pointerup", It, !0)), t.addEventListener("beforeunload", () => {
    xi(e);
  }, {
    once: !0
  }), Wt.set(t, {
    focus: r
  });
}
const xi = (e, t) => {
  const n = gt(e), r = ct(e);
  t && r.removeEventListener("DOMContentLoaded", t), Wt.has(n) && (n.HTMLElement.prototype.focus = Wt.get(n).focus, r.removeEventListener("keydown", En, !0), r.removeEventListener("keyup", En, !0), r.removeEventListener("click", wi, !0), n.removeEventListener("focus", bi, !0), n.removeEventListener("blur", yi, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", It, !0), r.removeEventListener("pointermove", It, !0), r.removeEventListener("pointerup", It, !0)), Wt.delete(n));
};
function Ls(e) {
  const t = ct(e);
  let n;
  return t.readyState !== "loading" ? vr(e) : (n = () => {
    vr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => xi(e, n);
}
typeof document < "u" && Ls();
function Si() {
  return tn !== "pointer";
}
const Vs = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Hs(e, t, n) {
  let r = ct(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? gt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? gt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? gt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? gt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Vs.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof l && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof s && !ks[n.key]);
}
function zs(e, t, n) {
  vr(), le(() => {
    let r = (o, i) => {
      Hs(!!(n != null && n.isTextInput), o, i) && e(Si());
    };
    return gr.add(r), () => {
      gr.delete(r);
    };
  }, t);
}
function Bs(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = ue((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = vi(i), s = ue((a) => {
    const u = ct(a.target), c = u ? mr(u) : mr();
    a.target === a.currentTarget && c === pi(a.nativeEvent) && (n && n(a), o && o(!0), l(a));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
function js(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = G({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: s } = gi(), a = ue((f) => {
    f.currentTarget.contains(f.target) && i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(f), o && o(!1));
  }, [
    n,
    o,
    i,
    s
  ]), u = vi(a), c = ue((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const m = ct(f.target), d = mr(m);
    if (!i.current.isFocusWithin && d === pi(f.nativeEvent)) {
      r && r(f), o && o(!0), i.current.isFocusWithin = !0, u(f);
      let p = f.currentTarget;
      l(m, "focus", (g) => {
        if (i.current.isFocusWithin && !fi(p, g.target)) {
          let w = new m.defaultView.FocusEvent("blur", {
            relatedTarget: g.target
          });
          As(w, p);
          let S = hi(w);
          a(S);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    o,
    u,
    l,
    a
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: a
    }
  };
}
let wr = !1, Zn = 0;
function Gs() {
  wr = !0, setTimeout(() => {
    wr = !1;
  }, 50);
}
function wo(e) {
  e.pointerType === "touch" && Gs();
}
function Ws() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", wo), Zn++, () => {
      Zn--, !(Zn > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", wo);
    };
}
function Ci(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = Z(!1), s = G({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  le(Ws, []);
  let { addGlobalListener: a, removeAllGlobalListeners: u } = gi(), { hoverProps: c, triggerHoverEnd: f } = re(() => {
    let m = (g, w) => {
      if (s.pointerType = w, o || w === "touch" || s.isHovered || !g.currentTarget.contains(g.target)) return;
      s.isHovered = !0;
      let S = g.currentTarget;
      s.target = S, a(ct(g.target), "pointerover", (C) => {
        s.isHovered && s.target && !fi(s.target, C.target) && d(C, C.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: S,
        pointerType: w
      }), n && n(!0), l(!0);
    }, d = (g, w) => {
      let S = s.target;
      s.pointerType = "", s.target = null, !(w === "touch" || !s.isHovered || !S) && (s.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: S,
        pointerType: w
      }), n && n(!1), l(!1));
    }, p = {};
    return typeof PointerEvent < "u" && (p.onPointerEnter = (g) => {
      wr && g.pointerType === "mouse" || m(g, g.pointerType);
    }, p.onPointerLeave = (g) => {
      !o && g.currentTarget.contains(g.target) && d(g, g.pointerType);
    }), {
      hoverProps: p,
      triggerHoverEnd: d
    };
  }, [
    t,
    n,
    r,
    o,
    s,
    a,
    u
  ]);
  return le(() => {
    o && f({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function Ei(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = G({
    isFocused: !1,
    isFocusVisible: t || Si()
  }), [i, l] = Z(!1), [s, a] = Z(() => o.current.isFocused && o.current.isFocusVisible), u = ue(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = ue((d) => {
    o.current.isFocused = d, l(d), u();
  }, [
    u
  ]);
  zs((d) => {
    o.current.isFocusVisible = d, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = Bs({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: m } = js({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? m : f
  };
}
var Us = Object.defineProperty, qs = (e, t, n) => t in e ? Us(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jn = (e, t, n) => (qs(e, typeof t != "symbol" ? t + "" : t, n), n);
let Ks = class {
  constructor() {
    Jn(this, "current", this.detect()), Jn(this, "handoffState", "pending"), Jn(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, vt = new Ks();
function At(e) {
  return vt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function An(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function We() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return An(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = We();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function xt() {
  let [e] = Z(We);
  return le(() => () => e.dispose(), [e]), e;
}
let ae = (e, t) => {
  vt.isServer ? le(e, t) : zr(e, t);
};
function dt(e) {
  let t = G(e);
  return ae(() => {
    t.current = e;
  }, [e]), t;
}
let j = function(e) {
  let t = dt(e);
  return D.useCallback((...n) => t.current(...n), [t]);
};
function Ys(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Xs(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function Zs({ disabled: e = !1 } = {}) {
  let t = G(null), [n, r] = Z(!1), o = xt(), i = j(() => {
    t.current = null, r(!1), o.dispose();
  }), l = j((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = At(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (u) => {
          if (t.current) {
            let c = Ys(u);
            r(Xs(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let Js = me(void 0);
function Wr() {
  return ce(Js);
}
function br(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Fe(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Fe), r;
}
var Ot = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ot || {}), rt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(rt || {});
function xe() {
  let e = ea();
  return ue((t) => Qs({ mergeRefs: e, ...t }), [e]);
}
function Qs({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? ta;
  let a = Ri(t, e);
  if (i) return fn(a, n, r, l, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...f } = a;
    if (c) return fn(f, n, r, l, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...f } = a;
    return Fe(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return fn({ ...f, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return fn(a, n, r, l, s);
}
function fn(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = Qn(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let m = !1, d = [];
    for (let [p, g] of Object.entries(t)) typeof g == "boolean" && (m = !0), g === !0 && d.push(p.replace(/([A-Z])/g, (w) => `-${w.toLowerCase()}`));
    if (m) {
      f["data-headlessui-state"] = d.join(" ");
      for (let p of d) f[`data-${p}`] = "";
    }
  }
  if (i === Oe && (Object.keys(nt(a)).length > 0 || Object.keys(nt(f)).length > 0)) if (!bs(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(nt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(nt(a)).concat(Object.keys(nt(f))).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
  } else {
    let m = c.props, d = m == null ? void 0 : m.className, p = typeof d == "function" ? (...S) => br(d(...S), a.className) : br(d, a.className), g = p ? { className: p } : {}, w = Ri(c.props, nt(Qn(a, ["ref"])));
    for (let S in f) S in w && delete f[S];
    return ys(c, Object.assign({}, w, f, u, { ref: o(na(c), u.ref) }, g));
  }
  return li(i, Object.assign({}, Qn(a, ["ref"]), i !== Oe && u, i !== Oe && f), c);
}
function ea() {
  let e = G([]), t = ue((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function ta(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Ri(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let l = n[r];
    for (let s of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      s(o, ...i);
    }
  } });
  return t;
}
function Ur(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let l of i) l == null || l(...o);
  } });
  return t;
}
function we(e) {
  var t;
  return Object.assign(Fn(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function nt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Qn(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function na(e) {
  return D.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function ra(e, t, n) {
  let [r, o] = Z(n), i = e !== void 0, l = G(i), s = G(!1), a = G(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !a.current && (a.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, j((u) => (i || o(u), t == null ? void 0 : t(u)))];
}
function oa(e) {
  let [t] = Z(e);
  return t;
}
function $i(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Ii(n, _i(t, r), o);
  return n;
}
function _i(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ii(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Ii(e, _i(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : $i(n, t, e);
}
let ia = "span";
var Ft = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ft || {});
function la(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe()({ ourProps: i, theirProps: o, slot: {}, defaultTag: ia, name: "Hidden" });
}
let Xt = we(la), sa = me(null);
function aa({ children: e }) {
  let t = ce(sa);
  if (!t) return D.createElement(D.Fragment, null, e);
  let { target: n } = t;
  return n ? Br(D.createElement(D.Fragment, null, e), n) : null;
}
function ua({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = Z(null), s = xt();
  return le(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), D.createElement(aa, null, D.createElement(ca, { setForm: l, formId: t }), $i(e).map(([a, u]) => D.createElement(Xt, { features: Ft.Hidden, ...nt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function ca({ setForm: e, formId: t }) {
  return le(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : D.createElement(Xt, { features: Ft.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let da = me(void 0);
function Ti() {
  return ce(da);
}
function fa(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && pa(n) ? !1 : r;
}
function pa(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Mi = Symbol();
function ma(e, t = !0) {
  return Object.assign(e, { [Mi]: t });
}
function Te(...e) {
  let t = G(e);
  le(() => {
    t.current = e;
  }, [e]);
  let n = j((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Mi])) ? void 0 : n;
}
let Nn = me(null);
Nn.displayName = "DescriptionContext";
function Oi() {
  let e = ce(Nn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Oi), t;
  }
  return e;
}
function ga() {
  var e, t;
  return (t = (e = ce(Nn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function ha() {
  let [e, t] = Z([]);
  return [e.length > 0 ? e.join(" ") : void 0, re(() => function(n) {
    let r = j((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = re(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return D.createElement(Nn.Provider, { value: o }, n.children);
  }, [t])];
}
let va = "p";
function wa(e, t) {
  let n = Ne(), r = Wr(), { id: o = `headlessui-description-${n}`, ...i } = e, l = Oi(), s = Te(t);
  ae(() => l.register(o), [o, l.register]);
  let a = r || !1, u = re(() => ({ ...l.slot, disabled: a }), [l.slot, a]), c = { ref: s, ...l.props, id: o };
  return xe()({ ourProps: c, theirProps: i, slot: u, defaultTag: va, name: l.name || "Description" });
}
let ba = we(wa), ya = Object.assign(ba, {});
var Re = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Re || {});
let kn = me(null);
kn.displayName = "LabelContext";
function Fi() {
  let e = ce(kn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Fi), t;
  }
  return e;
}
function Dn(e) {
  var t, n, r;
  let o = (n = (t = ce(kn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function xa({ inherit: e = !1 } = {}) {
  let t = Dn(), [n, r] = Z([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, re(() => function(i) {
    let l = j((a) => (r((u) => [...u, a]), () => r((u) => {
      let c = u.slice(), f = c.indexOf(a);
      return f !== -1 && c.splice(f, 1), c;
    }))), s = re(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return D.createElement(kn.Provider, { value: s }, i.children);
  }, [r])];
}
let Sa = "label";
function Ca(e, t) {
  var n;
  let r = Ne(), o = Fi(), i = Ti(), l = Wr(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...c } = e, f = Te(t);
  ae(() => o.register(s), [s, o.register]);
  let m = j((w) => {
    let S = w.currentTarget;
    if (S instanceof HTMLLabelElement && w.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(w), S instanceof HTMLLabelElement) {
      let C = document.getElementById(S.htmlFor);
      if (C) {
        let y = C.getAttribute("disabled");
        if (y === "true" || y === "") return;
        let R = C.getAttribute("aria-disabled");
        if (R === "true" || R === "") return;
        (C instanceof HTMLInputElement && (C.type === "radio" || C.type === "checkbox") || C.role === "radio" || C.role === "checkbox" || C.role === "switch") && C.click(), C.focus({ preventScroll: !0 });
      }
    }
  }), d = l || !1, p = re(() => ({ ...o.slot, disabled: d }), [o.slot, d]), g = { ref: f, ...o.props, id: s, htmlFor: a, onClick: m };
  return u && ("onClick" in g && (delete g.htmlFor, delete g.onClick), "onClick" in c && delete c.onClick), xe()({ ourProps: g, theirProps: c, slot: p, defaultTag: a ? Sa : "div", name: o.name || "Label" });
}
let Ea = we(Ca), Ra = Object.assign(Ea, {}), $a = me(() => {
});
function _a({ value: e, children: t }) {
  return D.createElement($a.Provider, { value: e }, t);
}
function $t(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var l, s, a, u;
    let c;
    n.key && ((l = n.debug) != null && l.call(n)) && (c = Date.now());
    const f = e();
    if (!(f.length !== r.length || f.some((p, g) => r[g] !== p)))
      return o;
    r = f;
    let d;
    if (n.key && ((s = n.debug) != null && s.call(n)) && (d = Date.now()), o = t(...f), n.key && ((a = n.debug) != null && a.call(n))) {
      const p = Math.round((Date.now() - c) * 100) / 100, g = Math.round((Date.now() - d) * 100) / 100, w = g / 16, S = (C, y) => {
        for (C = String(C); C.length < y; )
          C = " " + C;
        return C;
      };
      console.info(
        `%c⏱ ${S(g, 5)} /${S(p, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * w, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (u = n == null ? void 0 : n.onChange) == null || u.call(n, o), o;
  }
  return i.updateDeps = (l) => {
    r = l;
  }, i;
}
function bo(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ia = (e, t) => Math.abs(e - t) <= 1, Ta = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var zt = { NODE_ENV: "production" };
const yo = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Ma = (e) => e, Oa = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Fa = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const o = (l) => {
    const { width: s, height: a } = l;
    t({ width: Math.round(s), height: Math.round(a) });
  };
  if (o(yo(n)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((l) => {
    const s = () => {
      const a = l[0];
      if (a != null && a.borderBoxSize) {
        const u = a.borderBoxSize[0];
        if (u) {
          o({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      o(yo(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, xo = {
  passive: !0
}, So = typeof window > "u" ? !0 : "onscrollend" in window, Pa = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && So ? () => {
  } : Ta(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (c) => () => {
    const { horizontal: f, isRtl: m } = e.options;
    o = f ? n.scrollLeft * (m && -1 || 1) : n.scrollTop, i(), t(o, c);
  }, s = l(!0), a = l(!1);
  a(), n.addEventListener("scroll", s, xo);
  const u = e.options.useScrollendEvent && So;
  return u && n.addEventListener("scrollend", a, xo), () => {
    n.removeEventListener("scroll", s), u && n.removeEventListener("scrollend", a);
  };
}, Aa = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Na = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var o, i;
  const l = e + t;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, {
    [r.options.horizontal ? "left" : "top"]: l,
    behavior: n
  });
};
class ka {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((i) => {
          const l = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), n = null;
        },
        observe: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, o]) => {
        typeof o > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Ma,
        rangeExtractor: Oa,
        onChange: () => {
        },
        measureElement: Aa,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = $t(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: zt.NODE_ENV !== "production",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let l = r - 1; l >= 0; l--) {
        const s = n[l];
        if (o.has(s.lane))
          continue;
        const a = i.get(
          s.lane
        );
        if (a == null || s.end > a.end ? i.set(s.lane, s) : s.end < a.end && o.set(s.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((l, s) => l.end === s.end ? l.index - s.index : l.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = $t(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, o, i, l) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: i,
        enabled: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = $t(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: l }, s) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const a = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, a);
        for (let c = a; c < n; c++) {
          const f = i(c), m = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), d = m ? m.end + this.options.gap : r + o, p = s.get(f), g = typeof p == "number" ? p : this.options.estimateSize(c), w = d + g, S = m ? m.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: d,
            size: g,
            end: w,
            key: f,
            lane: S
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: zt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = $t(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Da({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: zt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = $t(
      () => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, o, i, l) => i === null || l === null ? [] : n({
        startIndex: i,
        endIndex: l,
        overscan: r,
        count: o
      }),
      {
        key: zt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, o = n.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const o = this.indexFromElement(n), i = this.measurementsCache[o];
      if (!i)
        return;
      const l = i.key, s = this.elementsCache.get(l);
      s !== n && (s && this.observer.unobserve(s), this.observer.observe(n), this.elementsCache.set(l, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, l = r - i;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, l, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = $t(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let i = 0, l = n.length; i < l; i++) {
          const s = n[i], a = r[s];
          o.push(a);
        }
        return o;
      },
      {
        key: zt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return bo(
          r[Pi(
            0,
            r.length - 1,
            (o) => bo(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r, o = 0) => {
      const i = this.getSize(), l = this.getScrollOffset();
      r === "auto" && (r = n >= l + i ? "end" : "start"), r === "center" ? n += (o - i) / 2 : r === "end" && (n -= i);
      const s = this.getTotalSize() - i;
      return Math.max(Math.min(s, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.getSize(), l = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= l + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= l + this.options.scrollPaddingStart)
          r = "start";
        else
          return [l, r];
      const s = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(s, r, o.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
      n = Math.max(0, Math.min(n, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const i = this.getOffsetForIndex(n, r);
      if (!i) return;
      const [l, s] = i;
      this._scrollToOffset(l, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(n)
        )) {
          const u = this.getOffsetForIndex(n, s);
          if (!u) return;
          const [c] = u, f = this.getScrollOffset();
          Ia(c, f) || this.scrollToIndex(n, { align: s, behavior: o });
        } else
          this.scrollToIndex(n, { align: s, behavior: o });
      }));
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let l = r.length - 1;
        for (; l >= 0 && i.some((s) => s === null); ) {
          const s = r[l];
          i[s.lane] === null && (i[s.lane] = s.end), l--;
        }
        o = Math.max(...i.filter((s) => s !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(n, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const Pi = (e, t, n, r) => {
  for (; e <= t; ) {
    const o = (e + t) / 2 | 0, i = n(o);
    if (i < r)
      e = o + 1;
    else if (i > r)
      t = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function Da({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const o = e.length - 1, i = (a) => e[a].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let l = Pi(
    0,
    o,
    i,
    n
  ), s = l;
  if (r === 1)
    for (; s < o && e[s].end < n + t; )
      s++;
  else if (r > 1) {
    const a = Array(r).fill(0);
    for (; s < o && a.some((c) => c < n + t); ) {
      const c = e[s];
      a[c.lane] = c.end, s++;
    }
    const u = Array(r).fill(n + t);
    for (; l >= 0 && u.some((c) => c >= n); ) {
      const c = e[l];
      u[c.lane] = c.start, l--;
    }
    l = Math.max(0, l - l % r), s = Math.min(o, s + (r - 1 - s % r));
  }
  return { startIndex: l, endIndex: s };
}
const Co = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function La(e) {
  const t = E.useReducer(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var l;
      i ? mt(t) : t(), (l = e.onChange) == null || l.call(e, o, i);
    }
  }, [r] = E.useState(
    () => new ka(n)
  );
  return r.setOptions(n), Co(() => r._didMount(), []), Co(() => r._willUpdate()), r;
}
function Ai(e) {
  return La({
    observeElementRect: Fa,
    observeElementOffset: Pa,
    scrollToFn: Na,
    ...e
  });
}
function Va(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Ha(e = Va) {
  return ue((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function za(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Eo(e, t = !1) {
  let [n, r] = Pn(() => ({}), {}), o = re(() => za(e), [e, n]);
  return ae(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let Ba = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function Ni(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let l = t[o].call(n, ...i);
    l && (n = l, r.forEach((s) => s()));
  } };
}
function ki(e) {
  return xs(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let ja = new Ba(() => Ni(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Nt(e, t) {
  let n = ja.get(t), r = Ne(), o = ki(n);
  if (ae(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let yr = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map();
function Ro(e) {
  var t;
  let n = (t = Ut.get(e)) != null ? t : 0;
  return Ut.set(e, n + 1), n !== 0 ? () => $o(e) : (yr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => $o(e));
}
function $o(e) {
  var t;
  let n = (t = Ut.get(e)) != null ? t : 1;
  if (n === 1 ? Ut.delete(e) : Ut.set(e, n - 1), n !== 1) return;
  let r = yr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, yr.delete(e));
}
function Di(e, { allowed: t, disallowed: n } = {}) {
  let r = Nt(e, "inert-others");
  ae(() => {
    var o, i;
    if (!r) return;
    let l = We();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(Ro(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let u = At(a);
      if (!u) continue;
      let c = a.parentElement;
      for (; c && c !== u.body; ) {
        for (let f of c.children) s.some((m) => f.contains(m)) || l.add(Ro(f));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function Li(e, t, n) {
  let r = dt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  le(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = We();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let Rn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Ga = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Xe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Xe || {}), xr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(xr || {}), Wa = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Wa || {});
function Ua(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Rn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function qa(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ga)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Vi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Vi || {});
function Ka(e, t = 0) {
  var n;
  return e === ((n = At(e)) == null ? void 0 : n.body) ? !1 : Fe(t, { 0() {
    return e.matches(Rn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Rn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var Ya = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ya || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Je(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Xa = ["textarea", "input"].join(",");
function Za(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Xa)) != null ? n : !1;
}
function Hi(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function qt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? Hi(e) : e : t & 64 ? qa(e) : Ua(e);
  o.length > 0 && l.length > 1 && (l = l.filter((d) => !o.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === d : p === d))), r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = l.length, m;
  do {
    if (c >= f || c + f <= 0) return 0;
    let d = a + c;
    if (t & 16) d = (d + f) % f;
    else {
      if (d < 0) return 3;
      if (d >= f) return 1;
    }
    m = l[d], m == null || m.focus(u), c += s;
  } while (m !== i.activeElement);
  return t & 6 && Za(m) && m.select(), 2;
}
function zi() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ja() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Bi() {
  return zi() || Ja();
}
function Bt(e, t, n, r) {
  let o = dt(n);
  le(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ji(e, t, n, r) {
  let o = dt(n);
  le(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const _o = 30;
function Gi(e, t, n) {
  let r = Nt(e, "outside-click"), o = dt(n), i = ue(function(a, u) {
    if (a.defaultPrevented) return;
    let c = u(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let f = function m(d) {
      return typeof d == "function" ? m(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let m of f) if (m !== null && (m.contains(c) || a.composed && a.composedPath().includes(m))) return;
    return !Ka(c, Vi.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), l = G(null);
  Bt(r, "pointerdown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Bt(r, "mousedown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Bt(r, "click", (a) => {
    Bi() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = G({ x: 0, y: 0 });
  Bt(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), Bt(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= _o || Math.abs(u.y - s.current.y) >= _o)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), ji(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function St(...e) {
  return re(() => At(...e), [...e]);
}
function qr(e, t, n, r) {
  let o = dt(n);
  le(() => {
    e = e ?? window;
    function i(l) {
      o.current(l);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Wi(e) {
  let t = G({ value: "", selectionStart: null, selectionEnd: null });
  return qr(e, "blur", (n) => {
    let r = n.target;
    r instanceof HTMLInputElement && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), j(() => {
    if (document.activeElement !== e && e instanceof HTMLInputElement && e.isConnected) {
      if (e.focus({ preventScroll: !0 }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
      else {
        let { selectionStart: n, selectionEnd: r } = t.current;
        n !== null && r !== null && e.setSelectionRange(n, r);
      }
      t.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Qa(e, t) {
  return re(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function eu() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - o);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function tu() {
  return zi() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = We();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let a = s.target.closest("a");
          if (!a) return;
          let { hash: u } = new URL(a.href), c = e.querySelector(u);
          c && !r(c) && (l = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let a = s.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let a = s.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let a = (s = window.scrollY) != null ? s : window.pageYOffset;
        i !== a && window.scrollTo(0, i), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function nu() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function ru(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let ht = Ni(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: We(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: ru(n) }, o = [tu(), eu(), nu()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ht.subscribe(() => {
  let e = ht.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && ht.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ht.dispatch("TEARDOWN", n);
  }
});
function ou(e, t, n = () => ({ containers: [] })) {
  let r = ki(ht), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return ae(() => {
    if (!(!t || !e)) return ht.dispatch("PUSH", t, n), () => ht.dispatch("POP", t, n);
  }, [e, t]), i;
}
function Ui(e, t, n = () => [document.body]) {
  let r = Nt(e, "scroll-lock");
  ou(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Io(e) {
  return [e.screenX, e.screenY];
}
function iu() {
  let e = G([-1, -1]);
  return { wasMoved(t) {
    let n = Io(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Io(t);
  } };
}
function lu(e = 0) {
  let [t, n] = Z(e), r = ue((a) => n(a), [t]), o = ue((a) => n((u) => u | a), [t]), i = ue((a) => (t & a) === a, [t]), l = ue((a) => n((u) => u & ~a), [n]), s = ue((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var su = { NODE_ENV: "production" }, To, Mo;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((To = process == null ? void 0 : su) == null ? void 0 : To.NODE_ENV) === "test" && typeof ((Mo = Element == null ? void 0 : Element.prototype) == null ? void 0 : Mo.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var au = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(au || {});
function qi(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function Ki(e, t, n, r) {
  let [o, i] = Z(n), { hasFlag: l, addFlag: s, removeFlag: a } = lu(e && o ? 3 : 0), u = G(!1), c = G(!1), f = xt();
  return ae(() => {
    var m;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (m = r == null ? void 0 : r.start) == null || m.call(r, n), uu(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (s(3), a(4)) : (s(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
      }, done() {
        var d;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, a(7), n || i(!1), (d = r == null ? void 0 : r.end) == null || d.call(r, n));
      } });
    }
  }, [e, n, t, f]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function uu(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = We();
  return du(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(cu(e, r));
    });
  }), i.dispose;
}
function cu(e, t) {
  var n, r;
  let o = We();
  if (!e) return o.dispose;
  let i = !1;
  o.add(() => {
    i = !0;
  });
  let l = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((s) => s instanceof CSSTransition)) != null ? r : [];
  return l.length === 0 ? (t(), o.dispose) : (Promise.allSettled(l.map((s) => s.finished)).then(() => {
    i || t();
  }), o.dispose);
}
function du(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function fu(e, { container: t, accept: n, walk: r }) {
  let o = G(n), i = G(r);
  le(() => {
    o.current = n, i.current = r;
  }, [n, r]), ae(() => {
    if (!t || !e) return;
    let l = At(t);
    if (!l) return;
    let s = o.current, a = i.current, u = Object.assign((f) => s(f), { acceptNode: s }), c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, i]);
}
function Zt(e, t) {
  let n = G([]), r = j(e);
  le(() => {
    let o = [...n.current];
    for (let [i, l] of t.entries()) if (n.current[i] !== l) {
      let s = r(t, o);
      return n.current = t, s;
    }
  }, [r, ...t]);
}
function Ln() {
  return typeof window < "u";
}
function kt(e) {
  return Yi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qe(e) {
  var t;
  return (t = (Yi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Yi(e) {
  return Ln() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function _e(e) {
  return Ln() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function Ue(e) {
  return Ln() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function Oo(e) {
  return !Ln() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function nn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function pu(e) {
  return ["table", "td", "th"].includes(kt(e));
}
function Vn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Kr(e) {
  const t = Yr(), n = _e(e) ? Ve(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function mu(e) {
  let t = lt(e);
  for (; Ue(t) && !Pt(t); ) {
    if (Kr(t))
      return t;
    if (Vn(t))
      return null;
    t = lt(t);
  }
  return null;
}
function Yr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pt(e) {
  return ["html", "body", "#document"].includes(kt(e));
}
function Ve(e) {
  return Pe(e).getComputedStyle(e);
}
function Hn(e) {
  return _e(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function lt(e) {
  if (kt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Oo(e) && e.host || // Fallback.
    qe(e)
  );
  return Oo(t) ? t.host : t;
}
function Xi(e) {
  const t = lt(e);
  return Pt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(t) && nn(t) ? t : Xi(t);
}
function Jt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Xi(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Pe(o);
  if (i) {
    const s = Sr(l);
    return t.concat(l, l.visualViewport || [], nn(o) ? o : [], s && n ? Jt(s) : []);
  }
  return t.concat(o, Jt(o, [], n));
}
function Sr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function gu() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const bt = Math.min, $e = Math.max, Qt = Math.round, pn = Math.floor, Ge = (e) => ({
  x: e,
  y: e
}), hu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, vu = {
  start: "end",
  end: "start"
};
function Fo(e, t, n) {
  return $e(e, bt(t, n));
}
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e) {
  return e.split("-")[0];
}
function rn(e) {
  return e.split("-")[1];
}
function Zi(e) {
  return e === "x" ? "y" : "x";
}
function Ji(e) {
  return e === "y" ? "height" : "width";
}
function it(e) {
  return ["top", "bottom"].includes(st(e)) ? "y" : "x";
}
function Qi(e) {
  return Zi(it(e));
}
function wu(e, t, n) {
  n === void 0 && (n = !1);
  const r = rn(e), o = Qi(e), i = Ji(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = $n(l)), [l, $n(l)];
}
function bu(e) {
  const t = $n(e);
  return [Cr(e), t, Cr(t)];
}
function Cr(e) {
  return e.replace(/start|end/g, (t) => vu[t]);
}
function yu(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function xu(e, t, n, r) {
  const o = rn(e);
  let i = yu(st(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Cr)))), i;
}
function $n(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hu[t]);
}
function Su(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Cu(e) {
  return typeof e != "number" ? Su(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _n(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Po(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = it(t), l = Qi(t), s = Ji(l), a = st(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (rn(t)) {
    case "start":
      d[l] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      d[l] += m * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const Eu = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: f
  } = Po(u, r, a), m = r, d = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: w,
      fn: S
    } = s[g], {
      x: C,
      y,
      data: R,
      reset: T
    } = await S({
      x: c,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = C ?? c, f = y ?? f, d = {
      ...d,
      [w]: {
        ...d[w],
        ...R
      }
    }, T && p <= 50 && (p++, typeof T == "object" && (T.placement && (m = T.placement), T.rects && (u = T.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: c,
      y: f
    } = Po(u, m, a)), g = -1);
  }
  return {
    x: c,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: d
  };
};
async function zn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = Dt(t, e), p = Cu(d), w = s[m ? f === "floating" ? "reference" : "floating" : f], S = _n(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), C = f === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), R = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = _n(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: y,
    strategy: a
  }) : C);
  return {
    top: (S.top - T.top + p.top) / R.y,
    bottom: (T.bottom - S.bottom + p.bottom) / R.y,
    left: (S.left - T.left + p.left) / R.x,
    right: (T.right - S.right + p.right) / R.x
  };
}
const Ru = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...w
      } = Dt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const S = st(o), C = it(s), y = st(s) === s, R = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), T = m || (y || !g ? [$n(s)] : bu(s)), F = p !== "none";
      !m && F && T.push(...xu(s, g, p, R));
      const M = [s, ...T], v = await zn(t, w), b = [];
      let x = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && b.push(v[S]), f) {
        const B = wu(o, l, R);
        b.push(v[B[0]], v[B[1]]);
      }
      if (x = [...x, {
        placement: o,
        overflows: b
      }], !b.every((B) => B <= 0)) {
        var $, _;
        const B = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, W = M[B];
        if (W) {
          var P;
          const V = f === "alignment" ? C !== it(W) : !1, O = ((P = x[0]) == null ? void 0 : P.overflows[0]) > 0;
          if (!V || O)
            return {
              data: {
                index: B,
                overflows: x
              },
              reset: {
                placement: W
              }
            };
        }
        let H = (_ = x.filter((V) => V.overflows[0] <= 0).sort((V, O) => V.overflows[1] - O.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!H)
          switch (d) {
            case "bestFit": {
              var A;
              const V = (A = x.filter((O) => {
                if (F) {
                  const q = it(O.placement);
                  return q === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((q) => q > 0).reduce((q, N) => q + N, 0)]).sort((O, q) => O[1] - q[1])[0]) == null ? void 0 : A[0];
              V && (H = V);
              break;
            }
            case "initialPlacement":
              H = s;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
async function $u(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = st(n), s = rn(n), a = it(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, f = Dt(t, e);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof p == "number" && (d = s === "end" ? p * -1 : p), a ? {
    x: d * c,
    y: m * u
  } : {
    x: m * u,
    y: d * c
  };
}
const _u = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: l,
        middlewareData: s
      } = t, a = await $u(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, Iu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (w) => {
            let {
              x: S,
              y: C
            } = w;
            return {
              x: S,
              y: C
            };
          }
        },
        ...a
      } = Dt(e, t), u = {
        x: n,
        y: r
      }, c = await zn(t, a), f = it(st(o)), m = Zi(f);
      let d = u[m], p = u[f];
      if (i) {
        const w = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", C = d + c[w], y = d - c[S];
        d = Fo(C, d, y);
      }
      if (l) {
        const w = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", C = p + c[w], y = p - c[S];
        p = Fo(C, p, y);
      }
      const g = s.fn({
        ...t,
        [m]: d,
        [f]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [m]: i,
            [f]: l
          }
        }
      };
    }
  };
}, Tu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: l,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...u
      } = Dt(e, t), c = await zn(t, u), f = st(o), m = rn(o), d = it(o) === "y", {
        width: p,
        height: g
      } = i.floating;
      let w, S;
      f === "top" || f === "bottom" ? (w = f, S = m === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (S = f, w = m === "end" ? "top" : "bottom");
      const C = g - c.top - c.bottom, y = p - c.left - c.right, R = bt(g - c[w], C), T = bt(p - c[S], y), F = !t.middlewareData.shift;
      let M = R, v = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (v = y), (r = t.middlewareData.shift) != null && r.enabled.y && (M = C), F && !m) {
        const x = $e(c.left, 0), $ = $e(c.right, 0), _ = $e(c.top, 0), P = $e(c.bottom, 0);
        d ? v = p - 2 * (x !== 0 || $ !== 0 ? x + $ : $e(c.left, c.right)) : M = g - 2 * (_ !== 0 || P !== 0 ? _ + P : $e(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: v,
        availableHeight: M
      });
      const b = await l.getDimensions(s.floating);
      return p !== b.width || g !== b.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function el(e) {
  const t = Ve(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ue(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = Qt(n) !== i || Qt(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function Xr(e) {
  return _e(e) ? e : e.contextElement;
}
function Tt(e) {
  const t = Xr(e);
  if (!Ue(t))
    return Ge(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = el(t);
  let l = (i ? Qt(n.width) : n.width) / r, s = (i ? Qt(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Mu = /* @__PURE__ */ Ge(0);
function tl(e) {
  const t = Pe(e);
  return !Yr() || !t.visualViewport ? Mu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ou(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Pe(e) ? !1 : t;
}
function yt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Xr(e);
  let l = Ge(1);
  t && (r ? _e(r) && (l = Tt(r)) : l = Tt(e));
  const s = Ou(i, n, r) ? tl(i) : Ge(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, c = o.width / l.x, f = o.height / l.y;
  if (i) {
    const m = Pe(i), d = r && _e(r) ? Pe(r) : r;
    let p = m, g = Sr(p);
    for (; g && r && d !== p; ) {
      const w = Tt(g), S = g.getBoundingClientRect(), C = Ve(g), y = S.left + (g.clientLeft + parseFloat(C.paddingLeft)) * w.x, R = S.top + (g.clientTop + parseFloat(C.paddingTop)) * w.y;
      a *= w.x, u *= w.y, c *= w.x, f *= w.y, a += y, u += R, p = Pe(g), g = Sr(p);
    }
  }
  return _n({
    width: c,
    height: f,
    x: a,
    y: u
  });
}
function Zr(e, t) {
  const n = Hn(e).scrollLeft;
  return t ? t.left + n : yt(qe(e)).left + n;
}
function nl(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Zr(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Fu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = qe(r), s = t ? Vn(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ge(1);
  const c = Ge(0), f = Ue(r);
  if ((f || !f && !i) && ((kt(r) !== "body" || nn(l)) && (a = Hn(r)), Ue(r))) {
    const d = yt(r);
    u = Tt(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  const m = l && !f && !i ? nl(l, a, !0) : Ge(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + m.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + m.y
  };
}
function Pu(e) {
  return Array.from(e.getClientRects());
}
function Au(e) {
  const t = qe(e), n = Hn(e), r = e.ownerDocument.body, o = $e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = $e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Zr(e);
  const s = -n.scrollTop;
  return Ve(r).direction === "rtl" && (l += $e(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Nu(e, t) {
  const n = Pe(e), r = qe(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Yr();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function ku(e, t) {
  const n = yt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ue(e) ? Tt(e) : Ge(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function Ao(e, t, n) {
  let r;
  if (t === "viewport")
    r = Nu(e, n);
  else if (t === "document")
    r = Au(qe(e));
  else if (_e(t))
    r = ku(t, n);
  else {
    const o = tl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return _n(r);
}
function rl(e, t) {
  const n = lt(e);
  return n === t || !_e(n) || Pt(n) ? !1 : Ve(n).position === "fixed" || rl(n, t);
}
function Du(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Jt(e, [], !1).filter((s) => _e(s) && kt(s) !== "body"), o = null;
  const i = Ve(e).position === "fixed";
  let l = i ? lt(e) : e;
  for (; _e(l) && !Pt(l); ) {
    const s = Ve(l), a = Kr(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || nn(l) && !a && rl(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = lt(l);
  }
  return t.set(e, r), r;
}
function Lu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? Vn(t) ? [] : Du(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const f = Ao(t, c, o);
    return u.top = $e(f.top, u.top), u.right = bt(f.right, u.right), u.bottom = bt(f.bottom, u.bottom), u.left = $e(f.left, u.left), u;
  }, Ao(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Vu(e) {
  const {
    width: t,
    height: n
  } = el(e);
  return {
    width: t,
    height: n
  };
}
function Hu(e, t, n) {
  const r = Ue(t), o = qe(t), i = n === "fixed", l = yt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Ge(0);
  function u() {
    a.x = Zr(o);
  }
  if (r || !r && !i)
    if ((kt(t) !== "body" || nn(o)) && (s = Hn(t)), r) {
      const d = yt(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? nl(o, s) : Ge(0), f = l.left + s.scrollLeft - a.x - c.x, m = l.top + s.scrollTop - a.y - c.y;
  return {
    x: f,
    y: m,
    width: l.width,
    height: l.height
  };
}
function er(e) {
  return Ve(e).position === "static";
}
function No(e, t) {
  if (!Ue(e) || Ve(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qe(e) === n && (n = n.ownerDocument.body), n;
}
function ol(e, t) {
  const n = Pe(e);
  if (Vn(e))
    return n;
  if (!Ue(e)) {
    let o = lt(e);
    for (; o && !Pt(o); ) {
      if (_e(o) && !er(o))
        return o;
      o = lt(o);
    }
    return n;
  }
  let r = No(e, t);
  for (; r && pu(r) && er(r); )
    r = No(r, t);
  return r && Pt(r) && er(r) && !Kr(r) ? n : r || mu(e) || n;
}
const zu = async function(e) {
  const t = this.getOffsetParent || ol, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Hu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Bu(e) {
  return Ve(e).direction === "rtl";
}
const ju = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fu,
  getDocumentElement: qe,
  getClippingRect: Lu,
  getOffsetParent: ol,
  getElementRects: zu,
  getClientRects: Pu,
  getDimensions: Vu,
  getScale: Tt,
  isElement: _e,
  isRTL: Bu
};
function il(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Gu(e, t) {
  let n = null, r;
  const o = qe(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: m,
      height: d
    } = u;
    if (s || t(), !m || !d)
      return;
    const p = pn(f), g = pn(o.clientWidth - (c + m)), w = pn(o.clientHeight - (f + d)), S = pn(c), y = {
      rootMargin: -p + "px " + -g + "px " + -w + "px " + -S + "px",
      threshold: $e(0, bt(1, a)) || 1
    };
    let R = !0;
    function T(F) {
      const M = F[0].intersectionRatio;
      if (M !== a) {
        if (!R)
          return l();
        M ? l(!1, M) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !il(u, e.getBoundingClientRect()) && l(), R = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, y);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Wu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = Xr(e), c = o || i ? [...u ? Jt(u) : [], ...Jt(t)] : [];
  c.forEach((S) => {
    o && S.addEventListener("scroll", n, {
      passive: !0
    }), i && S.addEventListener("resize", n);
  });
  const f = u && s ? Gu(u, n) : null;
  let m = -1, d = null;
  l && (d = new ResizeObserver((S) => {
    let [C] = S;
    C && C.target === u && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = d) == null || y.observe(t);
    })), n();
  }), u && !a && d.observe(u), d.observe(t));
  let p, g = a ? yt(e) : null;
  a && w();
  function w() {
    const S = yt(e);
    g && !il(g, S) && n(), g = S, p = requestAnimationFrame(w);
  }
  return n(), () => {
    var S;
    c.forEach((C) => {
      o && C.removeEventListener("scroll", n), i && C.removeEventListener("resize", n);
    }), f == null || f(), (S = d) == null || S.disconnect(), d = null, a && cancelAnimationFrame(p);
  };
}
const tr = zn, Uu = _u, qu = Iu, Ku = Ru, Yu = Tu, Xu = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ju,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Eu(e, t, {
    ...o,
    platform: i
  });
};
var yn = typeof document < "u" ? zr : le;
function In(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!In(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !In(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ll(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ko(e, t) {
  const n = ll(e);
  return Math.round(t * n) / n;
}
function nr(e) {
  const t = E.useRef(e);
  return yn(() => {
    t.current = e;
  }), t;
}
function Zu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: u
  } = e, [c, f] = E.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, d] = E.useState(r);
  In(m, r) || d(r);
  const [p, g] = E.useState(null), [w, S] = E.useState(null), C = E.useCallback((V) => {
    V !== F.current && (F.current = V, g(V));
  }, []), y = E.useCallback((V) => {
    V !== M.current && (M.current = V, S(V));
  }, []), R = i || p, T = l || w, F = E.useRef(null), M = E.useRef(null), v = E.useRef(c), b = a != null, x = nr(a), $ = nr(o), _ = nr(u), P = E.useCallback(() => {
    if (!F.current || !M.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: m
    };
    $.current && (V.platform = $.current), Xu(F.current, M.current, V).then((O) => {
      const q = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      A.current && !In(v.current, q) && (v.current = q, Cn.flushSync(() => {
        f(q);
      }));
    });
  }, [m, t, n, $, _]);
  yn(() => {
    u === !1 && v.current.isPositioned && (v.current.isPositioned = !1, f((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [u]);
  const A = E.useRef(!1);
  yn(() => (A.current = !0, () => {
    A.current = !1;
  }), []), yn(() => {
    if (R && (F.current = R), T && (M.current = T), R && T) {
      if (x.current)
        return x.current(R, T, P);
      P();
    }
  }, [R, T, P, x, b]);
  const B = E.useMemo(() => ({
    reference: F,
    floating: M,
    setReference: C,
    setFloating: y
  }), [C, y]), W = E.useMemo(() => ({
    reference: R,
    floating: T
  }), [R, T]), H = E.useMemo(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return V;
    const O = ko(W.floating, c.x), q = ko(W.floating, c.y);
    return s ? {
      ...V,
      transform: "translate(" + O + "px, " + q + "px)",
      ...ll(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: q
    };
  }, [n, s, W.floating, c.x, c.y]);
  return E.useMemo(() => ({
    ...c,
    update: P,
    refs: B,
    elements: W,
    floatingStyles: H
  }), [c, P, B, W, H]);
}
const sl = (e, t) => ({
  ...Uu(e),
  options: [e, t]
}), Ju = (e, t) => ({
  ...qu(e),
  options: [e, t]
}), Qu = (e, t) => ({
  ...Ku(e),
  options: [e, t]
}), ec = (e, t) => ({
  ...Yu(e),
  options: [e, t]
}), al = {
  ...E
}, tc = al.useInsertionEffect, nc = tc || ((e) => e());
function ul(e) {
  const t = E.useRef(() => {
  });
  return nc(() => {
    t.current = e;
  }), E.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Er = typeof document < "u" ? zr : le;
let Do = !1, rc = 0;
const Lo = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + rc++
);
function oc() {
  const [e, t] = E.useState(() => Do ? Lo() : void 0);
  return Er(() => {
    e == null && t(Lo());
  }, []), E.useEffect(() => {
    Do = !0;
  }, []), e;
}
const ic = al.useId, lc = ic || oc;
function sc() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const ac = /* @__PURE__ */ E.createContext(null), uc = /* @__PURE__ */ E.createContext(null), cc = () => {
  var e;
  return ((e = E.useContext(ac)) == null ? void 0 : e.id) || null;
}, dc = () => E.useContext(uc), fc = "data-floating-ui-focusable";
function pc(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = lc(), i = E.useRef({}), [l] = E.useState(() => sc()), s = cc() != null, [a, u] = E.useState(r.reference), c = ul((d, p, g) => {
    i.current.openEvent = d ? p : void 0, l.emit("openchange", {
      open: d,
      event: p,
      reason: g,
      nested: s
    }), n == null || n(d, p, g);
  }), f = E.useMemo(() => ({
    setPositionReference: u
  }), []), m = E.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return E.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: m,
    events: l,
    floatingId: o,
    refs: f
  }), [t, c, m, l, o, f]);
}
function mc(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = pc({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = E.useState(null), [s, a] = E.useState(null), c = (o == null ? void 0 : o.domReference) || i, f = E.useRef(null), m = dc();
  Er(() => {
    c && (f.current = c);
  }, [c]);
  const d = Zu({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), p = E.useCallback((y) => {
    const R = _e(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    a(R), d.refs.setReference(R);
  }, [d.refs]), g = E.useCallback((y) => {
    (_e(y) || y === null) && (f.current = y, l(y)), (_e(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !_e(y)) && d.refs.setReference(y);
  }, [d.refs]), w = E.useMemo(() => ({
    ...d.refs,
    setReference: g,
    setPositionReference: p,
    domReference: f
  }), [d.refs, g, p]), S = E.useMemo(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), C = E.useMemo(() => ({
    ...d,
    ...r,
    refs: w,
    elements: S,
    nodeId: t
  }), [d, w, S, t, r]);
  return Er(() => {
    r.dataRef.current.floatingContext = C;
    const y = m == null ? void 0 : m.nodesRef.current.find((R) => R.id === t);
    y && (y.context = C);
  }), E.useMemo(() => ({
    ...d,
    context: C,
    refs: w,
    elements: S
  }), [d, w, S, C]);
}
const Vo = "active", Ho = "selected";
function rr(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Vo]: l,
      [Ho]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [fc]: ""
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [u, c] = a;
      if (!(o && [Vo, Ho].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var f;
            (f = r.get(u)) == null || f.push(c), l[u] = function() {
              for (var m, d = arguments.length, p = new Array(d), g = 0; g < d; g++)
                p[g] = arguments[g];
              return (m = r.get(u)) == null ? void 0 : m.map((w) => w(...p)).find((w) => w !== void 0);
            };
          }
        } else
          l[u] = c;
    }), l), {})
  };
}
function gc(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = E.useCallback(
    (s) => rr(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = E.useCallback(
    (s) => rr(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = E.useCallback(
    (s) => rr(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return E.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
function zo(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const hc = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: l = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: u,
      ...c
    } = Dt(e, t), {
      rects: f,
      elements: {
        floating: m
      }
    } = t, d = n.current[l], p = (u == null ? void 0 : u.current) || m, g = m.clientTop || p.clientTop, w = m.clientTop !== 0, S = p.clientTop !== 0, C = m === p;
    if (!d)
      return {};
    const y = {
      ...t,
      ...await sl(-d.offsetTop - m.clientTop - f.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, R = await tr(zo(y, p.scrollHeight + g + m.clientTop), c), T = await tr(y, {
      ...c,
      elementContext: "reference"
    }), F = $e(0, R.top), M = y.y + F, x = (p.scrollHeight > p.clientHeight ? ($) => $ : Qt)($e(0, p.scrollHeight + (w && C || S ? g * 2 : 0) - F - $e(0, R.bottom)));
    if (p.style.maxHeight = x + "px", p.scrollTop = F, o) {
      const $ = p.offsetHeight < d.offsetHeight * bt(s, n.current.length) - 1 || T.top >= -a || T.bottom >= -a;
      Cn.flushSync(() => o($));
    }
    return r && (r.current = await tr(zo({
      ...y,
      y: M
    }, p.offsetHeight + g + m.clientTop), c)), {
      y: M
    };
  }
});
function vc(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = ul(s), u = E.useRef(!1), c = E.useRef(null), f = E.useRef(null);
  E.useEffect(() => {
    if (!o) return;
    function d(g) {
      if (g.ctrlKey || !p || i.current == null)
        return;
      const w = g.deltaY, S = i.current.top >= -0.5, C = i.current.bottom >= -0.5, y = p.scrollHeight - p.clientHeight, R = w < 0 ? -1 : 1, T = w < 0 ? "max" : "min";
      p.scrollHeight <= p.clientHeight || (!S && w > 0 || !C && w < 0 ? (g.preventDefault(), Cn.flushSync(() => {
        a((F) => F + Math[T](w, y * R));
      })) : /firefox/i.test(gu()) && (p.scrollTop += w));
    }
    const p = (l == null ? void 0 : l.current) || r.floating;
    if (n && p)
      return p.addEventListener("wheel", d), requestAnimationFrame(() => {
        c.current = p.scrollTop, i.current != null && (f.current = {
          ...i.current
        });
      }), () => {
        c.current = null, f.current = null, p.removeEventListener("wheel", d);
      };
  }, [o, n, r.floating, i, l, a]);
  const m = E.useMemo(() => ({
    onKeyDown() {
      u.current = !0;
    },
    onWheel() {
      u.current = !1;
    },
    onPointerMove() {
      u.current = !1;
    },
    onScroll() {
      const d = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !d || !u.current)) {
        if (c.current !== null) {
          const p = d.scrollTop - c.current;
          (i.current.bottom < -0.5 && p < -1 || i.current.top < -0.5 && p > 1) && Cn.flushSync(() => a((g) => g + p));
        }
        requestAnimationFrame(() => {
          c.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return E.useMemo(() => o ? {
    floating: m
  } : {}, [o, m]);
}
let on = me({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
on.displayName = "FloatingContext";
let Jr = me(null);
Jr.displayName = "PlacementContext";
function wc(e) {
  return re(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function bc() {
  return ce(on).setReference;
}
function yc() {
  let { getFloatingProps: e, slot: t } = ce(on);
  return ue((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function xc(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = ce(Jr), n = re(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  ae(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = ce(on);
  return re(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Bo = 4;
function Sc({ children: e, enabled: t = !0 }) {
  let [n, r] = Z(null), [o, i] = Z(0), l = G(null), [s, a] = Z(null);
  Cc(s);
  let u = t && n !== null && s !== null, { to: c = "bottom", gap: f = 0, offset: m = 0, padding: d = 0, inner: p } = Ec(n, s), [g, w = "center"] = c.split(" ");
  ae(() => {
    u && i(0);
  }, [u]);
  let { refs: S, floatingStyles: C, context: y } = mc({ open: u, placement: g === "selection" ? w === "center" ? "bottom" : `bottom-${w}` : w === "center" ? `${g}` : `${g}-${w}`, strategy: "absolute", transform: !1, middleware: [sl({ mainAxis: g === "selection" ? 0 : f, crossAxis: m }), Ju({ padding: d }), g !== "selection" && Qu({ padding: d }), g === "selection" && p ? hc({ ...p, padding: d, overflowRef: l, offset: o, minItemsVisible: Bo, referenceOverflowThreshold: d, onFallbackChange($) {
    var _, P;
    if (!$) return;
    let A = y.elements.floating;
    if (!A) return;
    let B = parseFloat(getComputedStyle(A).scrollPaddingBottom) || 0, W = Math.min(Bo, A.childElementCount), H = 0, V = 0;
    for (let O of (P = (_ = y.elements.floating) == null ? void 0 : _.childNodes) != null ? P : []) if (O instanceof HTMLElement) {
      let q = O.offsetTop, N = q + O.clientHeight + B, z = A.scrollTop, I = z + A.clientHeight;
      if (q >= z && N <= I) W--;
      else {
        V = Math.max(0, Math.min(N, I) - Math.max(q, z)), H = O.clientHeight;
        break;
      }
    }
    W >= 1 && i((O) => {
      let q = H * W - V + B;
      return O >= q ? O : q;
    });
  } }) : null, ec({ padding: d, apply({ availableWidth: $, availableHeight: _, elements: P }) {
    Object.assign(P.floating.style, { overflow: "auto", maxWidth: `${$}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${_}px)` });
  } })].filter(Boolean), whileElementsMounted: Wu }), [R = g, T = w] = y.placement.split("-");
  g === "selection" && (R = "selection");
  let F = re(() => ({ anchor: [R, T].filter(Boolean).join(" ") }), [R, T]), M = vc(y, { overflowRef: l, onChange: i }), { getReferenceProps: v, getFloatingProps: b } = gc([M]), x = j(($) => {
    a($), S.setFloating($);
  });
  return E.createElement(Jr.Provider, { value: r }, E.createElement(on.Provider, { value: { setFloating: x, setReference: S.setReference, styles: C, getReferenceProps: v, getFloatingProps: b, slot: F } }, e));
}
function Cc(e) {
  ae(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function Ec(e, t) {
  var n, r, o;
  let i = or((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = or((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = or((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function or(e, t, n = void 0) {
  let r = xt(), o = j((a, u) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!u) return [n, null];
      let c = jo(a, u);
      return [c, (f) => {
        let m = cl(a);
        {
          let d = m.map((p) => window.getComputedStyle(u).getPropertyValue(p));
          r.requestAnimationFrame(function p() {
            r.nextFrame(p);
            let g = !1;
            for (let [S, C] of m.entries()) {
              let y = window.getComputedStyle(u).getPropertyValue(C);
              if (d[S] !== y) {
                d[S] = y, g = !0;
                break;
              }
            }
            if (!g) return;
            let w = jo(a, u);
            c !== w && (f(w), c = w);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = re(() => o(e, t)[0], [e, t]), [l = i, s] = Z();
  return ae(() => {
    let [a, u] = o(e, t);
    if (s(a), !!u) return u(s);
  }, [e, t]), l;
}
function cl(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...cl(o)] : [r];
  }
  return [];
}
function jo(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function Rc({ children: e, freeze: t }) {
  let n = Rr(t, e);
  return D.createElement(D.Fragment, null, n);
}
function Rr(e, t) {
  let [n, r] = Z(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Bn = me(null);
Bn.displayName = "OpenClosedContext";
var Ie = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ie || {});
function ln() {
  return ce(Bn);
}
function dl({ value: e, children: t }) {
  return D.createElement(Bn.Provider, { value: e }, t);
}
function $c({ children: e }) {
  return D.createElement(Bn.Provider, { value: null }, e);
}
function _c(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let je = [];
_c(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || je[0] === t.target) return;
    let n = t.target;
    n = n.closest(Rn), je.unshift(n ?? t.target), je = je.filter((r) => r != null && r.isConnected), je.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Ic(e) {
  throw new Error("Unexpected object: " + e);
}
var ve = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ve || {});
function Go(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let i = o - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      Ic(e);
  }
}
var Qr = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Qr || {});
function fl(e) {
  let t = j(e), n = G(!1);
  le(() => (n.current = !1, () => {
    n.current = !0, An(() => {
      n.current && t();
    });
  }), [t]);
}
function Tc() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in E ? ((t) => t.useSyncExternalStore)(E)(() => () => {
  }, () => !1, () => !e) : !1;
}
function sn() {
  let e = Tc(), [t, n] = E.useState(vt.isHandoffComplete);
  return t && vt.isHandoffComplete === !1 && n(!1), E.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), E.useEffect(() => vt.handoff(), []), e ? !1 : t;
}
let pl = me(!1);
function Mc() {
  return ce(pl);
}
function Wo(e) {
  return D.createElement(pl.Provider, { value: e.force }, e.children);
}
function Oc(e) {
  let t = Mc(), n = ce(gl), r = St(e), [o, i] = Z(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (vt.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return le(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), le(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let ml = Oe, Fc = we(function(e, t) {
  let n = e, r = G(null), o = Te(ma((f) => {
    r.current = f;
  }), t), i = St(r), l = Oc(r), [s] = Z(() => {
    var f;
    return vt.isServer ? null : (f = i == null ? void 0 : i.createElement("div")) != null ? f : null;
  }), a = ce($r), u = sn();
  ae(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), ae(() => {
    if (s && a) return a.register(s);
  }, [a, s]), fl(() => {
    var f;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((f = l.parentElement) == null || f.removeChild(l)));
  });
  let c = xe();
  return u ? !l || !s ? null : Br(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: ml, name: "Portal" }), s) : null;
});
function Pc(e, t) {
  let n = Te(t), { enabled: r = !0, ...o } = e, i = xe();
  return r ? D.createElement(Fc, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: ml, name: "Portal" });
}
let Ac = Oe, gl = me(null);
function Nc(e, t) {
  let { target: n, ...r } = e, o = { ref: Te(t) }, i = xe();
  return D.createElement(gl.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Ac, name: "Popover.Group" }));
}
let $r = me(null);
function kc() {
  let e = ce($r), t = G([]), n = j((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = j((i) => {
    let l = t.current.indexOf(i);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
  }), o = re(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, re(() => function({ children: i }) {
    return D.createElement($r.Provider, { value: o }, i);
  }, [o])];
}
let Dc = we(Pc), hl = we(Nc), vl = Object.assign(Dc, { Group: hl });
var Lc = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Lc || {}), Vc = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Vc || {}), Hc = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Hc || {}), zc = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(zc || {});
function ir(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((l, s) => l.dataRef.current.order - s.dataRef.current.order) : Hi(r, (l) => l.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let Bc = { 1(e) {
  var t;
  return (t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1, isTyping: !1, activationTrigger: 2, __demoMode: !1 };
}, 0(e) {
  var t, n;
  if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
  if ((n = e.dataRef.current) != null && n.value) {
    let r = e.dataRef.current.calculateIndex(e.dataRef.current.value);
    if (r !== -1) return { ...e, activeOptionIndex: r, comboboxState: 0, __demoMode: !1 };
  }
  return { ...e, comboboxState: 0, __demoMode: !1 };
}, 3(e, t) {
  return e.isTyping === t.isTyping ? e : { ...e, isTyping: t.isTyping };
}, 2(e, t) {
  var n, r, o, i;
  if ((n = e.dataRef.current) != null && n.disabled || e.optionsElement && !((r = e.dataRef.current) != null && r.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
  if (e.virtual) {
    let { options: u, disabled: c } = e.virtual, f = t.focus === ve.Specific ? t.idx : Go(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var d, p;
      return (p = (d = e.activeOptionIndex) != null ? d : u.findIndex((g) => !c(g))) != null ? p : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), m = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === f && e.activationTrigger === m ? e : { ...e, activeOptionIndex: f, activationTrigger: m, isTyping: !1, __demoMode: !1 };
  }
  let l = ir(e);
  if (l.activeOptionIndex === null) {
    let u = l.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (l.activeOptionIndex = u);
  }
  let s = t.focus === ve.Specific ? t.idx : Go(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === s && e.activationTrigger === a ? e : { ...e, ...l, isTyping: !1, activeOptionIndex: s, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, l = ir(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(i));
  let s = { ...e, ...l, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = ir(e, (o) => {
    let i = o.findIndex((l) => l.id === t.id);
    return i !== -1 && o.splice(i, 1), o;
  });
  return { ...e, ...r, activationTrigger: 2 };
}, 6: (e, t) => e.activationTrigger === t.trigger ? e : { ...e, activationTrigger: t.trigger }, 7: (e, t) => {
  var n, r;
  if (e.virtual === null) return { ...e, virtual: { options: t.options, disabled: (n = t.disabled) != null ? n : () => !1 } };
  if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e;
  let o = e.activeOptionIndex;
  if (e.activeOptionIndex !== null) {
    let i = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
    i !== -1 ? o = i : o = null;
  }
  return { ...e, activeOptionIndex: o, virtual: { options: t.options, disabled: (r = t.disabled) != null ? r : () => !1 } };
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, eo = me(null);
eo.displayName = "ComboboxActionsContext";
function an(e) {
  let t = ce(eo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, an), n;
  }
  return t;
}
let wl = me(null);
function jc(e) {
  let t = Lt("VirtualProvider"), { options: n } = t.virtual, [r, o] = re(() => {
    let u = t.optionsElement;
    if (!u) return [0, 0];
    let c = window.getComputedStyle(u);
    return [parseFloat(c.paddingBlockStart || c.paddingTop), parseFloat(c.paddingBlockEnd || c.paddingBottom)];
  }, [t.optionsElement]), i = Ai({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [l, s] = Z(0);
  ae(() => {
    s((u) => u + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : D.createElement(wl.Provider, { value: i }, D.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var c;
    return D.createElement(Oe, { key: u.key }, D.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }), { key: `${l}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let en = me(null);
en.displayName = "ComboboxDataContext";
function Lt(e) {
  let t = ce(en);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Lt), n;
  }
  return t;
}
function Gc(e, t) {
  return Fe(t.type, Bc, e, t);
}
let Wc = Oe;
function Uc(e, t) {
  var n, r;
  let o = Wr(), { value: i, defaultValue: l, onChange: s, form: a, name: u, by: c, disabled: f = o || !1, onClose: m, __demoMode: d = !1, multiple: p = !1, immediate: g = !1, virtual: w = null, nullable: S, ...C } = e, y = oa(l), [R = p ? [] : void 0, T] = ra(i, s, y), [F, M] = Pn(Gc, { dataRef: si(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: w ? { options: w.options, disabled: (n = w.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), v = G(!1), b = G({ static: !1, hold: !1 }), x = Ha(c), $ = j((L) => w ? c === null ? w.options.indexOf(L) : w.options.findIndex((K) => x(K, L)) : F.options.findIndex((K) => x(K.dataRef.current.value, L))), _ = ue((L) => Fe(A.mode, { 1: () => R.some((K) => x(K, L)), 0: () => x(R, L) }), [R]), P = j((L) => F.activeOptionIndex === $(L)), A = re(() => ({ ...F, immediate: g, optionsPropsRef: b, value: R, defaultValue: y, disabled: f, mode: p ? 1 : 0, virtual: w ? F.virtual : null, get activeOptionIndex() {
    if (v.current && F.activeOptionIndex === null && (w ? w.options.length > 0 : F.options.length > 0)) {
      if (w) {
        let K = w.options.findIndex((Q) => {
          var Se, ne;
          return !((ne = (Se = w.disabled) == null ? void 0 : Se.call(w, Q)) != null && ne);
        });
        if (K !== -1) return K;
      }
      let L = F.options.findIndex((K) => !K.dataRef.current.disabled);
      if (L !== -1) return L;
    }
    return F.activeOptionIndex;
  }, calculateIndex: $, compare: x, isSelected: _, isActive: P }), [R, y, f, p, d, F, w]);
  ae(() => {
    var L;
    w && M({ type: 7, options: w.options, disabled: (L = w.disabled) != null ? L : null });
  }, [w, w == null ? void 0 : w.options, w == null ? void 0 : w.disabled]), ae(() => {
    F.dataRef.current = A;
  }, [A]);
  let B = A.comboboxState === 0;
  Gi(B, [A.buttonElement, A.inputElement, A.optionsElement], () => U.closeCombobox());
  let W = re(() => {
    var L, K, Q;
    return { open: A.comboboxState === 0, disabled: f, activeIndex: A.activeOptionIndex, activeOption: A.activeOptionIndex === null ? null : A.virtual ? A.virtual.options[(L = A.activeOptionIndex) != null ? L : 0] : (Q = (K = A.options[A.activeOptionIndex]) == null ? void 0 : K.dataRef.current.value) != null ? Q : null, value: R };
  }, [A, f, R]), H = j(() => {
    if (A.activeOptionIndex !== null) {
      if (U.setIsTyping(!1), A.virtual) I(A.virtual.options[A.activeOptionIndex]);
      else {
        let { dataRef: L } = A.options[A.activeOptionIndex];
        I(L.current.value);
      }
      U.goToOption(ve.Specific, A.activeOptionIndex);
    }
  }), V = j(() => {
    M({ type: 0 }), v.current = !0;
  }), O = j(() => {
    M({ type: 1 }), v.current = !1, m == null || m();
  }), q = j((L) => {
    M({ type: 3, isTyping: L });
  }), N = j((L, K, Q) => (v.current = !1, L === ve.Specific ? M({ type: 2, focus: ve.Specific, idx: K, trigger: Q }) : M({ type: 2, focus: L, trigger: Q }))), z = j((L, K) => (M({ type: 4, payload: { id: L, dataRef: K } }), () => {
    A.isActive(K.current.value) && (v.current = !0), M({ type: 5, id: L });
  })), I = j((L) => Fe(A.mode, { 0() {
    return T == null ? void 0 : T(L);
  }, 1() {
    let K = A.value.slice(), Q = K.findIndex((Se) => x(Se, L));
    return Q === -1 ? K.push(L) : K.splice(Q, 1), T == null ? void 0 : T(K);
  } })), ie = j((L) => {
    M({ type: 6, trigger: L });
  }), te = j((L) => {
    M({ type: 8, element: L });
  }), se = j((L) => {
    M({ type: 9, element: L });
  }), oe = j((L) => {
    M({ type: 10, element: L });
  }), U = re(() => ({ onChange: I, registerOption: z, goToOption: N, setIsTyping: q, closeCombobox: O, openCombobox: V, setActivationTrigger: ie, selectActiveOption: H, setInputElement: te, setButtonElement: se, setOptionsElement: oe }), []), [ee, de] = xa(), J = t === null ? {} : { ref: t }, fe = ue(() => {
    if (y !== void 0) return T == null ? void 0 : T(y);
  }, [T, y]), ge = xe();
  return D.createElement(de, { value: ee, props: { htmlFor: (r = A.inputElement) == null ? void 0 : r.id }, slot: { open: A.comboboxState === 0, disabled: f } }, D.createElement(Sc, null, D.createElement(eo.Provider, { value: U }, D.createElement(en.Provider, { value: A }, D.createElement(dl, { value: Fe(A.comboboxState, { 0: Ie.Open, 1: Ie.Closed }) }, u != null && D.createElement(ua, { disabled: f, data: R != null ? { [u]: R } : {}, form: a, onReset: fe }), ge({ ourProps: J, theirProps: C, slot: W, defaultTag: Wc, name: "Combobox" }))))));
}
let qc = "input";
function Kc(e, t) {
  var n, r, o, i, l;
  let s = Lt("Combobox.Input"), a = an("Combobox.Input"), u = Ne(), c = Ti(), { id: f = c || `headlessui-combobox-input-${u}`, onChange: m, displayValue: d, disabled: p = s.disabled || !1, autoFocus: g = !1, type: w = "text", ...S } = e, C = G(null), y = Te(C, t, bc(), a.setInputElement), R = St(s.inputElement), T = xt(), F = j(() => {
    a.onChange(null), s.optionsElement && (s.optionsElement.scrollTop = 0), a.goToOption(ve.Nothing);
  }), M = re(() => {
    var I;
    return typeof d == "function" && s.value !== void 0 ? (I = d(s.value)) != null ? I : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, d]);
  Zt(([I, ie], [te, se]) => {
    if (s.isTyping) return;
    let oe = C.current;
    oe && ((se === 0 && ie === 1 || I !== te) && (oe.value = I), requestAnimationFrame(() => {
      if (s.isTyping || !oe || (R == null ? void 0 : R.activeElement) !== oe) return;
      let { selectionStart: U, selectionEnd: ee } = oe;
      Math.abs((ee ?? 0) - (U ?? 0)) === 0 && U === 0 && oe.setSelectionRange(oe.value.length, oe.value.length);
    }));
  }, [M, s.comboboxState, R, s.isTyping]), Zt(([I], [ie]) => {
    if (I === 0 && ie === 1) {
      if (s.isTyping) return;
      let te = C.current;
      if (!te) return;
      let se = te.value, { selectionStart: oe, selectionEnd: U, selectionDirection: ee } = te;
      te.value = "", te.value = se, ee !== null ? te.setSelectionRange(oe, U, ee) : te.setSelectionRange(oe, U);
    }
  }, [s.comboboxState]);
  let v = G(!1), b = j(() => {
    v.current = !0;
  }), x = j(() => {
    T.nextFrame(() => {
      v.current = !1;
    });
  }), $ = j((I) => {
    switch (a.setIsTyping(!0), I.key) {
      case Re.Enter:
        if (s.comboboxState !== 0 || v.current) return;
        if (I.preventDefault(), I.stopPropagation(), s.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), s.mode === 0 && a.closeCombobox();
        break;
      case Re.ArrowDown:
        return I.preventDefault(), I.stopPropagation(), Fe(s.comboboxState, { 0: () => a.goToOption(ve.Next), 1: () => a.openCombobox() });
      case Re.ArrowUp:
        return I.preventDefault(), I.stopPropagation(), Fe(s.comboboxState, { 0: () => a.goToOption(ve.Previous), 1: () => {
          mt(() => a.openCombobox()), s.value || a.goToOption(ve.Last);
        } });
      case Re.Home:
        if (I.shiftKey) break;
        return I.preventDefault(), I.stopPropagation(), a.goToOption(ve.First);
      case Re.PageUp:
        return I.preventDefault(), I.stopPropagation(), a.goToOption(ve.First);
      case Re.End:
        if (I.shiftKey) break;
        return I.preventDefault(), I.stopPropagation(), a.goToOption(ve.Last);
      case Re.PageDown:
        return I.preventDefault(), I.stopPropagation(), a.goToOption(ve.Last);
      case Re.Escape:
        return s.comboboxState !== 0 ? void 0 : (I.preventDefault(), s.optionsElement && !s.optionsPropsRef.current.static && I.stopPropagation(), s.mode === 0 && s.value === null && F(), a.closeCombobox());
      case Re.Tab:
        if (s.comboboxState !== 0) return;
        s.mode === 0 && s.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), _ = j((I) => {
    m == null || m(I), s.mode === 0 && I.target.value === "" && F(), a.openCombobox();
  }), P = j((I) => {
    var ie, te, se;
    let oe = (ie = I.relatedTarget) != null ? ie : je.find((U) => U !== I.currentTarget);
    if (!((te = s.optionsElement) != null && te.contains(oe)) && !((se = s.buttonElement) != null && se.contains(oe)) && s.comboboxState === 0) return I.preventDefault(), s.mode === 0 && s.value === null && F(), a.closeCombobox();
  }), A = j((I) => {
    var ie, te, se;
    let oe = (ie = I.relatedTarget) != null ? ie : je.find((U) => U !== I.currentTarget);
    (te = s.buttonElement) != null && te.contains(oe) || (se = s.optionsElement) != null && se.contains(oe) || s.disabled || s.immediate && s.comboboxState !== 0 && T.microTask(() => {
      mt(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), B = Dn(), W = ga(), { isFocused: H, focusProps: V } = Ei({ autoFocus: g }), { isHovered: O, hoverProps: q } = Ci({ isDisabled: p }), N = re(() => ({ open: s.comboboxState === 0, disabled: p, hover: O, focus: H, autofocus: g }), [s, O, H, g, p]), z = Ur({ ref: y, id: f, role: "combobox", type: w, "aria-controls": (n = s.optionsElement) == null ? void 0 : n.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find((I) => !I.dataRef.current.disabled && s.compare(I.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (o = s.options[s.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": B, "aria-describedby": W, "aria-autocomplete": "list", defaultValue: (l = (i = e.defaultValue) != null ? i : s.defaultValue !== void 0 ? d == null ? void 0 : d(s.defaultValue) : null) != null ? l : s.defaultValue, disabled: p || void 0, autoFocus: g, onCompositionStart: b, onCompositionEnd: x, onKeyDown: $, onChange: _, onFocus: A, onBlur: P }, V, q);
  return xe()({ ourProps: z, theirProps: S, slot: N, defaultTag: qc, name: "Combobox.Input" });
}
let Yc = "button";
function Xc(e, t) {
  var n;
  let r = Lt("Combobox.Button"), o = an("Combobox.Button"), i = Te(t, o.setButtonElement), l = Ne(), { id: s = `headlessui-combobox-button-${l}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...c } = e, f = Wi(r.inputElement), m = j((M) => {
    switch (M.key) {
      case Re.Space:
      case Re.Enter:
        M.preventDefault(), M.stopPropagation(), r.comboboxState === 1 && mt(() => o.openCombobox()), f();
        return;
      case Re.ArrowDown:
        M.preventDefault(), M.stopPropagation(), r.comboboxState === 1 && (mt(() => o.openCombobox()), r.value || o.goToOption(ve.First)), f();
        return;
      case Re.ArrowUp:
        M.preventDefault(), M.stopPropagation(), r.comboboxState === 1 && (mt(() => o.openCombobox()), r.value || o.goToOption(ve.Last)), f();
        return;
      case Re.Escape:
        if (r.comboboxState !== 0) return;
        M.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && M.stopPropagation(), mt(() => o.closeCombobox()), f();
        return;
      default:
        return;
    }
  }), d = j((M) => {
    M.preventDefault(), !fa(M.currentTarget) && (M.button === Qr.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), f());
  }), p = Dn([s]), { isFocusVisible: g, focusProps: w } = Ei({ autoFocus: u }), { isHovered: S, hoverProps: C } = Ci({ isDisabled: a }), { pressed: y, pressProps: R } = Zs({ disabled: a }), T = re(() => ({ open: r.comboboxState === 0, active: y || r.comboboxState === 0, disabled: a, value: r.value, hover: S, focus: g }), [r, S, g, y, a]), F = Ur({ ref: i, id: s, type: Qa(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": p, disabled: a || void 0, autoFocus: u, onMouseDown: d, onKeyDown: m }, w, C, R);
  return xe()({ ourProps: F, theirProps: c, slot: T, defaultTag: Yc, name: "Combobox.Button" });
}
let Zc = "div", Jc = Ot.RenderStrategy | Ot.Static;
function Qc(e, t) {
  var n, r, o;
  let i = Ne(), { id: l = `headlessui-combobox-options-${i}`, hold: s = !1, anchor: a, portal: u = !1, modal: c = !0, transition: f = !1, ...m } = e, d = Lt("Combobox.Options"), p = an("Combobox.Options"), g = wc(a);
  g && (u = !0);
  let [w, S] = xc(g), [C, y] = Z(null), R = yc(), T = Te(t, g ? w : null, p.setOptionsElement, y), F = St(d.optionsElement), M = ln(), [v, b] = Ki(f, C, M !== null ? (M & Ie.Open) === Ie.Open : d.comboboxState === 0);
  Li(v, d.inputElement, p.closeCombobox);
  let x = d.__demoMode ? !1 : c && d.comboboxState === 0;
  Ui(x, F);
  let $ = d.__demoMode ? !1 : c && d.comboboxState === 0;
  Di($, { allowed: ue(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), ae(() => {
    var z;
    d.optionsPropsRef.current.static = (z = e.static) != null ? z : !1;
  }, [d.optionsPropsRef, e.static]), ae(() => {
    d.optionsPropsRef.current.hold = s;
  }, [d.optionsPropsRef, s]), fu(d.comboboxState === 0, { container: d.optionsElement, accept(z) {
    return z.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : z.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(z) {
    z.setAttribute("role", "none");
  } });
  let _ = Dn([(n = d.buttonElement) == null ? void 0 : n.id]), P = re(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), A = j(() => {
    p.setActivationTrigger(0);
  }), B = j((z) => {
    z.preventDefault(), p.setActivationTrigger(0);
  }), W = Ur(g ? R() : {}, { "aria-labelledby": _, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: l, ref: T, style: { ...m.style, ...S, "--input-width": Eo(d.inputElement, !0).width, "--button-width": Eo(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : A, onMouseDown: B, ...qi(b) }), H = v && d.comboboxState === 1, V = Rr(H, (r = d.virtual) == null ? void 0 : r.options), O = Rr(H, d.value), q = j((z) => d.compare(O, z));
  if (d.virtual) {
    if (V === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(m, { children: D.createElement(en.Provider, { value: V !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: V } } : d }, D.createElement(jc, { slot: P }, m.children)) });
  }
  let N = xe();
  return D.createElement(vl, { enabled: u ? e.static || v : !1 }, D.createElement(en.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: q } }, N({ ourProps: W, theirProps: { ...m, children: D.createElement(Rc, { freeze: H }, typeof m.children == "function" ? (o = m.children) == null ? void 0 : o.call(m, P) : m.children) }, slot: P, defaultTag: Zc, features: Jc, visible: v, name: "Combobox.Options" })));
}
let ed = "div";
function td(e, t) {
  var n, r, o, i;
  let l = Lt("Combobox.Option"), s = an("Combobox.Option"), a = Ne(), { id: u = `headlessui-combobox-option-${a}`, value: c, disabled: f = (o = (r = (n = l.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null ? o : !1, order: m = null, ...d } = e, p = Wi(l.inputElement), g = l.virtual ? l.activeOptionIndex === l.calculateIndex(c) : l.activeOptionIndex === null ? !1 : ((i = l.options[l.activeOptionIndex]) == null ? void 0 : i.id) === u, w = l.isSelected(c), S = G(null), C = dt({ disabled: f, value: c, domRef: S, order: m }), y = ce(wl), R = Te(t, S, y ? y.measureElement : null), T = j(() => {
    s.setIsTyping(!1), s.onChange(c);
  });
  ae(() => s.registerOption(u, C), [C, u]);
  let F = G(!(l.virtual || l.__demoMode));
  ae(() => {
    if (!l.virtual && !l.__demoMode) return We().requestAnimationFrame(() => {
      F.current = !0;
    });
  }, [l.virtual, l.__demoMode]), ae(() => {
    if (F.current && l.comboboxState === 0 && g && l.activationTrigger !== 0) return We().requestAnimationFrame(() => {
      var B, W;
      (W = (B = S.current) == null ? void 0 : B.scrollIntoView) == null || W.call(B, { block: "nearest" });
    });
  }, [S, g, l.comboboxState, l.activationTrigger, l.activeOptionIndex]);
  let M = j((B) => {
    B.preventDefault(), B.button === Qr.Left && (f || (T(), Bi() || requestAnimationFrame(() => p()), l.mode === 0 && s.closeCombobox()));
  }), v = j(() => {
    if (f) return s.goToOption(ve.Nothing);
    let B = l.calculateIndex(c);
    s.goToOption(ve.Specific, B);
  }), b = iu(), x = j((B) => b.update(B)), $ = j((B) => {
    if (!b.wasMoved(B) || f || g) return;
    let W = l.calculateIndex(c);
    s.goToOption(ve.Specific, W, 0);
  }), _ = j((B) => {
    b.wasMoved(B) && (f || g && (l.optionsPropsRef.current.hold || s.goToOption(ve.Nothing)));
  }), P = re(() => ({ active: g, focus: g, selected: w, disabled: f }), [g, w, f]), A = { id: u, ref: R, role: "option", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, "aria-selected": w, disabled: void 0, onMouseDown: M, onFocus: v, onPointerEnter: x, onMouseEnter: x, onPointerMove: $, onMouseMove: $, onPointerLeave: _, onMouseLeave: _ };
  return xe()({ ourProps: A, theirProps: d, slot: P, defaultTag: ed, name: "Combobox.Option" });
}
let nd = we(Uc), _r = we(Xc), bl = we(Kc), rd = Ra, yl = we(Qc), Ir = we(td), od = Object.assign(nd, { Input: bl, Button: _r, Label: rd, Options: yl, Option: Ir });
function id(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Nt(e, "escape");
  qr(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Re.Escape && n(o));
  });
}
function ld() {
  var e;
  let [t] = Z(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = Z((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return ae(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function sd({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = St(n), o = j(() => {
    var i, l;
    let s = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? s.push(a) : "current" in a && a.current instanceof HTMLElement && s.push(a.current));
    if (t != null && t.current) for (let a of t.current) s.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((l = n == null ? void 0 : n.getRootNode()) == null ? void 0 : l.host)) || s.some((u) => a.contains(u)) || s.push(a));
    return s;
  });
  return { resolveContainers: o, contains: j((i) => o().some((l) => l.contains(i))) };
}
let xl = me(null);
function Uo({ children: e, node: t }) {
  let [n, r] = Z(null), o = Sl(t ?? n);
  return D.createElement(xl.Provider, { value: o }, e, o === null && D.createElement(Xt, { features: Ft.Hidden, ref: (i) => {
    var l, s;
    if (i) {
      for (let a of (s = (l = At(i)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? s : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function Sl(e = null) {
  var t;
  return (t = ce(xl)) != null ? t : e;
}
function to() {
  let e = G(!1);
  return ae(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Gt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Gt || {});
function ad() {
  let e = G(0);
  return ji(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Cl(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let ud = "div";
var pt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(pt || {});
function cd(e, t) {
  let n = G(null), r = Te(n, t), { initialFocus: o, initialFocusFallback: i, containers: l, features: s = 15, ...a } = e;
  sn() || (s = 0);
  let u = St(n);
  md(s, { ownerDocument: u });
  let c = gd(s, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  hd(s, { ownerDocument: u, container: n, containers: l, previousActiveElement: c });
  let f = ad(), m = j((C) => {
    let y = n.current;
    y && ((R) => R())(() => {
      Fe(f.current, { [Gt.Forwards]: () => {
        qt(y, Xe.First, { skipElements: [C.relatedTarget, i] });
      }, [Gt.Backwards]: () => {
        qt(y, Xe.Last, { skipElements: [C.relatedTarget, i] });
      } });
    });
  }), d = Nt(!!(s & 2), "focus-trap#tab-lock"), p = xt(), g = G(!1), w = { ref: r, onKeyDown(C) {
    C.key == "Tab" && (g.current = !0, p.requestAnimationFrame(() => {
      g.current = !1;
    }));
  }, onBlur(C) {
    if (!(s & 4)) return;
    let y = Cl(l);
    n.current instanceof HTMLElement && y.add(n.current);
    let R = C.relatedTarget;
    R instanceof HTMLElement && R.dataset.headlessuiFocusGuard !== "true" && (El(y, R) || (g.current ? qt(n.current, Fe(f.current, { [Gt.Forwards]: () => Xe.Next, [Gt.Backwards]: () => Xe.Previous }) | Xe.WrapAround, { relativeTo: C.target }) : C.target instanceof HTMLElement && Je(C.target)));
  } }, S = xe();
  return D.createElement(D.Fragment, null, d && D.createElement(Xt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: Ft.Focusable }), S({ ourProps: w, theirProps: a, defaultTag: ud, name: "FocusTrap" }), d && D.createElement(Xt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: Ft.Focusable }));
}
let dd = we(cd), fd = Object.assign(dd, { features: pt });
function pd(e = !0) {
  let t = G(je.slice());
  return Zt(([n], [r]) => {
    r === !0 && n === !1 && An(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = je.slice());
  }, [e, je, t]), j(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function md(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = pd(n);
  Zt(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && Je(r());
  }, [n]), fl(() => {
    n && Je(r());
  });
}
function gd(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = G(null), l = Nt(!!(e & 1), "focus-trap#initial-focus"), s = to();
  return Zt(() => {
    if (e === 0) return;
    if (!l) {
      o != null && o.current && Je(o.current);
      return;
    }
    let a = n.current;
    a && An(() => {
      if (!s.current) return;
      let u = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === u) {
          i.current = u;
          return;
        }
      } else if (a.contains(u)) {
        i.current = u;
        return;
      }
      if (r != null && r.current) Je(r.current);
      else {
        if (e & 16) {
          if (qt(a, Xe.First | Xe.AutoFocus) !== xr.Error) return;
        } else if (qt(a, Xe.First) !== xr.Error) return;
        if (o != null && o.current && (Je(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), i;
}
function hd(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = to(), l = !!(e & 4);
  qr(t == null ? void 0 : t.defaultView, "focus", (s) => {
    if (!l || !i.current) return;
    let a = Cl(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let u = o.current;
    if (!u) return;
    let c = s.target;
    c && c instanceof HTMLElement ? El(a, c) ? (o.current = c, Je(c)) : (s.preventDefault(), s.stopPropagation(), Je(u)) : Je(o.current);
  }, !0);
}
function El(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Rl(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : _l) !== Oe || D.Children.count(e.children) === 1;
}
let jn = me(null);
jn.displayName = "TransitionContext";
var vd = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(vd || {});
function wd() {
  let e = ce(jn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function bd() {
  let e = ce(Gn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Gn = me(null);
Gn.displayName = "NestingContext";
function Wn(e) {
  return "children" in e ? Wn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function $l(e, t) {
  let n = dt(e), r = G([]), o = to(), i = xt(), l = j((d, p = rt.Hidden) => {
    let g = r.current.findIndex(({ el: w }) => w === d);
    g !== -1 && (Fe(p, { [rt.Unmount]() {
      r.current.splice(g, 1);
    }, [rt.Hidden]() {
      r.current[g].state = "hidden";
    } }), i.microTask(() => {
      var w;
      !Wn(r) && o.current && ((w = n.current) == null || w.call(n));
    }));
  }), s = j((d) => {
    let p = r.current.find(({ el: g }) => g === d);
    return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({ el: d, state: "visible" }), () => l(d, rt.Unmount);
  }), a = G([]), u = G(Promise.resolve()), c = G({ enter: [], leave: [] }), f = j((d, p, g) => {
    a.current.splice(0), t && (t.chains.current[p] = t.chains.current[p].filter(([w]) => w !== d)), t == null || t.chains.current[p].push([d, new Promise((w) => {
      a.current.push(w);
    })]), t == null || t.chains.current[p].push([d, new Promise((w) => {
      Promise.all(c.current[p].map(([S, C]) => C)).then(() => w());
    })]), p === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => g(p)) : g(p);
  }), m = j((d, p, g) => {
    Promise.all(c.current[p].splice(0).map(([w, S]) => S)).then(() => {
      var w;
      (w = a.current.shift()) == null || w();
    }).then(() => g(p));
  });
  return re(() => ({ children: r, register: s, unregister: l, onStart: f, onStop: m, wait: u, chains: c }), [s, l, r, f, m, c, u]);
}
let _l = Oe, Il = Ot.RenderStrategy;
function yd(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: u, enterFrom: c, enterTo: f, entered: m, leave: d, leaveFrom: p, leaveTo: g, ...w } = e, [S, C] = Z(null), y = G(null), R = Rl(e), T = Te(...R ? [y, t, C] : t === null ? [] : [t]), F = (n = w.unmount) == null || n ? rt.Unmount : rt.Hidden, { show: M, appear: v, initial: b } = wd(), [x, $] = Z(M ? "visible" : "hidden"), _ = bd(), { register: P, unregister: A } = _;
  ae(() => P(y), [P, y]), ae(() => {
    if (F === rt.Hidden && y.current) {
      if (M && x !== "visible") {
        $("visible");
        return;
      }
      return Fe(x, { hidden: () => A(y), visible: () => P(y) });
    }
  }, [x, y, P, A, M, F]);
  let B = sn();
  ae(() => {
    if (R && B && x === "visible" && y.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [y, x, B, R]);
  let W = b && !v, H = v && M && b, V = G(!1), O = $l(() => {
    V.current || ($("hidden"), A(y));
  }, _), q = j((oe) => {
    V.current = !0;
    let U = oe ? "enter" : "leave";
    O.onStart(y, U, (ee) => {
      ee === "enter" ? i == null || i() : ee === "leave" && (s == null || s());
    });
  }), N = j((oe) => {
    let U = oe ? "enter" : "leave";
    V.current = !1, O.onStop(y, U, (ee) => {
      ee === "enter" ? l == null || l() : ee === "leave" && (a == null || a());
    }), U === "leave" && !Wn(O) && ($("hidden"), A(y));
  });
  le(() => {
    R && o || (q(M), N(M));
  }, [M, R, o]);
  let z = !(!o || !R || !B || W), [, I] = Ki(z, S, M, { start: q, end: N }), ie = nt({ ref: T, className: ((r = br(w.className, H && u, H && c, I.enter && u, I.enter && I.closed && c, I.enter && !I.closed && f, I.leave && d, I.leave && !I.closed && p, I.leave && I.closed && g, !I.transition && M && m)) == null ? void 0 : r.trim()) || void 0, ...qi(I) }), te = 0;
  x === "visible" && (te |= Ie.Open), x === "hidden" && (te |= Ie.Closed), I.enter && (te |= Ie.Opening), I.leave && (te |= Ie.Closing);
  let se = xe();
  return D.createElement(Gn.Provider, { value: O }, D.createElement(dl, { value: te }, se({ ourProps: ie, theirProps: w, defaultTag: _l, features: Il, visible: x === "visible", name: "Transition.Child" })));
}
function xd(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = G(null), s = Rl(e), a = Te(...s ? [l, t] : t === null ? [] : [t]);
  sn();
  let u = ln();
  if (n === void 0 && u !== null && (n = (u & Ie.Open) === Ie.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, f] = Z(n ? "visible" : "hidden"), m = $l(() => {
    n || f("hidden");
  }), [d, p] = Z(!0), g = G([n]);
  ae(() => {
    d !== !1 && g.current[g.current.length - 1] !== n && (g.current.push(n), p(!1));
  }, [g, n]);
  let w = re(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  ae(() => {
    n ? f("visible") : !Wn(m) && l.current !== null && f("hidden");
  }, [n, m]);
  let S = { unmount: o }, C = j(() => {
    var T;
    d && p(!1), (T = e.beforeEnter) == null || T.call(e);
  }), y = j(() => {
    var T;
    d && p(!1), (T = e.beforeLeave) == null || T.call(e);
  }), R = xe();
  return D.createElement(Gn.Provider, { value: m }, D.createElement(jn.Provider, { value: w }, R({ ourProps: { ...S, as: Oe, children: D.createElement(Tl, { ref: a, ...S, ...i, beforeEnter: C, beforeLeave: y }) }, theirProps: {}, defaultTag: Oe, features: Il, visible: c === "visible", name: "Transition" })));
}
function Sd(e, t) {
  let n = ce(jn) !== null, r = ln() !== null;
  return D.createElement(D.Fragment, null, !n && r ? D.createElement(Tr, { ref: t, ...e }) : D.createElement(Tl, { ref: t, ...e }));
}
let Tr = we(xd), Tl = we(yd), no = we(Sd), Cd = Object.assign(Tr, { Child: no, Root: Tr });
var Ed = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ed || {}), Rd = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Rd || {});
let $d = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, ro = me(null);
ro.displayName = "DialogContext";
function Un(e) {
  let t = ce(ro);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Un), n;
  }
  return t;
}
function _d(e, t) {
  return Fe(t.type, $d, e, t);
}
let qo = we(function(e, t) {
  let n = Ne(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: l, role: s = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: c = !1, ...f } = e, m = G(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (m.current || (m.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = ln();
  o === void 0 && d !== null && (o = (d & Ie.Open) === Ie.Open);
  let p = G(null), g = Te(p, t), w = St(p), S = o ? 0 : 1, [C, y] = Pn(_d, { titleId: null, descriptionId: null, panelRef: si() }), R = j(() => i(!1)), T = j((N) => y({ type: 0, id: N })), F = sn() ? S === 0 : !1, [M, v] = kc(), b = { get current() {
    var N;
    return (N = C.panelRef.current) != null ? N : p.current;
  } }, x = Sl(), { resolveContainers: $ } = sd({ mainTreeNode: x, portals: M, defaultContainers: [b] }), _ = d !== null ? (d & Ie.Closing) === Ie.Closing : !1;
  Di(u || _ ? !1 : F, { allowed: j(() => {
    var N, z;
    return [(z = (N = p.current) == null ? void 0 : N.closest("[data-headlessui-portal]")) != null ? z : null];
  }), disallowed: j(() => {
    var N;
    return [(N = x == null ? void 0 : x.closest("body > *:not(#headlessui-portal-root)")) != null ? N : null];
  }) }), Gi(F, $, (N) => {
    N.preventDefault(), R();
  }), id(F, w == null ? void 0 : w.defaultView, (N) => {
    N.preventDefault(), N.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), R();
  }), Ui(u || _ ? !1 : F, w, $), Li(F, p, R);
  let [P, A] = ha(), B = re(() => [{ dialogState: S, close: R, setTitleId: T, unmount: c }, C], [S, C, R, T, c]), W = re(() => ({ open: S === 0 }), [S]), H = { ref: g, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : S === 0 ? !0 : void 0, "aria-labelledby": C.titleId, "aria-describedby": P, unmount: c }, V = !ld(), O = pt.None;
  F && !u && (O |= pt.RestoreFocus, O |= pt.TabLock, a && (O |= pt.AutoFocus), V && (O |= pt.InitialFocus));
  let q = xe();
  return D.createElement($c, null, D.createElement(Wo, { force: !0 }, D.createElement(vl, null, D.createElement(ro.Provider, { value: B }, D.createElement(hl, { target: p }, D.createElement(Wo, { force: !1 }, D.createElement(A, { slot: W }, D.createElement(v, null, D.createElement(fd, { initialFocus: l, initialFocusFallback: p, containers: $, features: O }, D.createElement(_a, { value: R }, q({ ourProps: H, theirProps: f, slot: W, defaultTag: Id, features: Td, visible: S === 0, name: "Dialog" })))))))))));
}), Id = "div", Td = Ot.RenderStrategy | Ot.Static;
function Md(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = ln(), l = e.hasOwnProperty("open") || i !== null, s = e.hasOwnProperty("onClose");
  if (!l && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? D.createElement(Uo, null, D.createElement(Cd, { show: r, transition: n, unmount: o.unmount }, D.createElement(qo, { ref: t, ...o }))) : D.createElement(Uo, null, D.createElement(qo, { ref: t, open: r, ...o }));
}
let Od = "div";
function Fd(e, t) {
  let n = Ne(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: l, unmount: s }, a] = Un("Dialog.Panel"), u = Te(t, a.panelRef), c = re(() => ({ open: l === 0 }), [l]), f = j((w) => {
    w.stopPropagation();
  }), m = { ref: u, id: r, onClick: f }, d = o ? no : Oe, p = o ? { unmount: s } : {}, g = xe();
  return D.createElement(d, { ...p }, g({ ourProps: m, theirProps: i, slot: c, defaultTag: Od, name: "Dialog.Panel" }));
}
let Pd = "div";
function Ad(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = Un("Dialog.Backdrop"), l = re(() => ({ open: o === 0 }), [o]), s = { ref: t, "aria-hidden": !0 }, a = n ? no : Oe, u = n ? { unmount: i } : {}, c = xe();
  return D.createElement(a, { ...u }, c({ ourProps: s, theirProps: r, slot: l, defaultTag: Pd, name: "Dialog.Backdrop" }));
}
let Nd = "h2";
function kd(e, t) {
  let n = Ne(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: l }] = Un("Dialog.Title"), s = Te(t);
  le(() => (l(r), () => l(null)), [r, l]);
  let a = re(() => ({ open: i === 0 }), [i]), u = { ref: s, id: r };
  return xe()({ ourProps: u, theirProps: o, slot: a, defaultTag: Nd, name: "Dialog.Title" });
}
let Dd = we(Md), Ml = we(Fd), Ld = we(Ad), Ol = we(kd), Vd = Object.assign(Dd, { Panel: Ml, Title: Ol, Description: ya });
function Hd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const zd = /* @__PURE__ */ E.forwardRef(Hd);
function Bd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const jd = /* @__PURE__ */ E.forwardRef(Bd);
function Gd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Wd = /* @__PURE__ */ E.forwardRef(Gd);
function Ud({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const qd = /* @__PURE__ */ E.forwardRef(Ud);
function Kd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const Yd = /* @__PURE__ */ E.forwardRef(Kd);
function Xd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Zd = /* @__PURE__ */ E.forwardRef(Xd);
function Jd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const Qd = /* @__PURE__ */ E.forwardRef(Jd);
function ef({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const tf = /* @__PURE__ */ E.forwardRef(ef);
function nf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const rf = /* @__PURE__ */ E.forwardRef(nf);
function of({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const lf = /* @__PURE__ */ E.forwardRef(of);
function sf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const af = /* @__PURE__ */ E.forwardRef(sf);
function uf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const cf = /* @__PURE__ */ E.forwardRef(uf);
function df({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const Fl = /* @__PURE__ */ E.forwardRef(df), ff = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear" }, input: { clear: "Clear" } }, pf = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, mf = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, gf = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, hf = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, vf = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, wf = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, bf = {
  components: ff,
  importer: pf,
  uploader: mf,
  mapper: gf,
  sheet: hf,
  validators: vf,
  importStatus: wf
}, yf = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer" }, input: { clear: "Effacer" } }, xf = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, Sf = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, Cf = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, Ef = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Rf = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, $f = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, _f = {
  components: yf,
  importer: xf,
  uploader: Sf,
  mapper: Cf,
  sheet: Ef,
  validators: Rf,
  importStatus: $f
}, If = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar" }, input: { clear: "Limpar" } }, Tf = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Mf = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente" }, Of = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Ff = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Pf = { includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único" }, Af = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, Nf = {
  components: If,
  importer: Tf,
  uploader: Mf,
  mapper: Of,
  sheet: Ff,
  validators: Pf,
  importStatus: Af
}, Pl = me(
  {}
);
function kf({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ h(Pl.Provider, { value: e, children: t });
}
function De() {
  return ce(Pl);
}
const Df = {
  en: bf,
  fr: _f,
  "pt-BR": Nf
}, Lf = "en";
function Ko(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? Df[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function Vf(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Hf(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ h("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    let i = r;
    if (o) {
      const l = o[1];
      i = t[l] ?? `{${l}}`;
    }
    return /* @__PURE__ */ h(Oe, { children: i }, r);
  }) });
}
const Al = me(
  {}
);
function zf({ children: e }) {
  const { translationResources: t, locale: n } = De(), r = n ?? Lf;
  function o(l, s = {}) {
    const a = Ko(r, l, t);
    return Vf(a, s);
  }
  function i(l, s = {}) {
    const a = Ko(r, l, t);
    return Hf(a, s);
  }
  return /* @__PURE__ */ h(Al.Provider, { value: { t: o, tHtml: i }, children: e });
}
function he() {
  return ce(Al);
}
function Mr({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: l,
  variant: s = "default"
}) {
  const { t: a } = he(), u = {
    danger: {
      icon: /* @__PURE__ */ h(
        Zd,
        {
          className: "text-hello-csv-destructive size-6",
          "aria-hidden": "true"
        }
      ),
      btnVariant: "danger",
      bgColor: "bg-hello-csv-destructive/10"
    },
    default: {
      btnVariant: "primary"
    }
  }, { icon: c, btnVariant: f, bgColor: m } = u[s];
  return /* @__PURE__ */ k(Vd, { open: e, onClose: t, className: "relative z-50", children: [
    /* @__PURE__ */ h(
      Ld,
      {
        transition: !0,
        className: "fixed inset-0 bg-black/80 transition-opacity data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ h("div", { className: "fixed inset-0 z-50 w-screen overflow-y-auto", children: /* @__PURE__ */ h("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ k(
      Ml,
      {
        transition: !0,
        className: "relative grid w-full max-w-[calc(100%-2rem)] translate-x-0 translate-y-0 gap-6 rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-background p-6 text-left shadow-lg duration-200 data-closed:opacity-0 data-closed:zoom-out-95 data-enter:animate-in data-enter:fade-in-0 data-enter:zoom-in-95 data-leave:animate-out data-leave:fade-out-0 sm:max-w-lg",
        children: [
          /* @__PURE__ */ k("div", { className: "sm:flex sm:items-start", children: [
            c && /* @__PURE__ */ h(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${m} sm:mx-0 sm:size-10`,
                children: c
              }
            ),
            /* @__PURE__ */ k("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ h(
                Ol,
                {
                  as: "h3",
                  className: "text-lg font-semibold text-hello-csv-foreground",
                  children: n
                }
              ),
              r && /* @__PURE__ */ h("div", { className: "mt-2", children: /* @__PURE__ */ h("p", { className: "text-sm text-hello-csv-muted-foreground", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ k("div", { className: "mt-2 sm:flex sm:flex-row-reverse gap-3", children: [
            /* @__PURE__ */ h("div", { className: "sm:w-auto", children: /* @__PURE__ */ h(
              ke,
              {
                variant: f,
                onClick: () => {
                  l(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ h(
              ke,
              {
                variant: "tertiary",
                "data-autofocus": !0,
                onClick: () => t(!1),
                withFullWidth: !0,
                children: i ?? a("components.confirmationModal.cancel")
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
const Bf = 100, Nl = 5, jf = [
  "text/csv",
  "text/tab-separated-values"
], Yo = ",", Gf = 500, Wf = "headlessui-portal-root", Or = "hello-csv", Uf = 52.62, Fr = "checkbox-column-id", qf = 110, Kf = 50, Yf = 500, Xf = 150, kl = "Yes", Dl = "No", Zf = Fn(function({ children: t }, n) {
  return le(() => {
    const r = new MutationObserver((o) => {
      for (const i of o)
        i.addedNodes.forEach((l) => {
          l.nodeType === Node.ELEMENT_NODE && l.id === Wf && l.classList.add(Or);
        });
    });
    return r.observe(document.body, { childList: !0, subtree: !1 }), () => r.disconnect();
  }, []), /* @__PURE__ */ h(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Or}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ h("div", { ref: n, className: "min-h-0 w-full overflow-auto bg-hello-csv-background", children: t })
    }
  );
});
function Jf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Qf = /* @__PURE__ */ E.forwardRef(Jf);
function ep({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const tp = /* @__PURE__ */ E.forwardRef(ep);
function np({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const rp = /* @__PURE__ */ E.forwardRef(np);
function op({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const ip = /* @__PURE__ */ E.forwardRef(op);
function lp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const Ll = /* @__PURE__ */ E.forwardRef(lp), Vl = Fn(
  ({
    value: e,
    onBlur: t,
    onChange: n,
    placeholder: r,
    iconBuilder: o,
    classes: i,
    clearable: l,
    type: s = "text",
    ...a
  }, u) => {
    const { t: c } = he(), [f, m] = Z(e);
    le(() => {
      m(e);
    }, [e]);
    const d = l && e != null && e !== "";
    function p(g) {
      const w = g.target, S = s === "number" ? w == null ? void 0 : w.valueAsNumber : w == null ? void 0 : w.value;
      return (typeof S == "number" && isNaN(S) ? "" : S) ?? "";
    }
    return /* @__PURE__ */ k("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ h(
        "input",
        {
          "aria-label": a["aria-label"],
          ref: u,
          type: s,
          inputMode: s === "number" ? "numeric" : "text",
          placeholder: r,
          value: typeof f == "boolean" ? f.toString() : f,
          onChange: (g) => (n == null ? void 0 : n(p(g))) ?? m(p(g)),
          className: `${i} ${o != null ? "pl-10" : ""} ${l ? "pr-10" : ""} col-start-1 row-start-1 flex h-10 w-full min-w-0 rounded-[var(--hello-csv-radius-md)] border border-hello-csv-input bg-transparent px-3 py-2 text-base text-hello-csv-foreground transition-[color,box-shadow] outline-none placeholder:text-hello-csv-muted-foreground focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
          onBlur: (g) => t == null ? void 0 : t(p(g))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-hello-csv-muted-foreground sm:size-4"
      }),
      d && /* @__PURE__ */ h(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": c("components.input.clear"),
          onClick: (g) => {
            g.stopPropagation(), n == null || n("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ h(
            Ll,
            {
              className: "h-5 w-5 text-hello-csv-muted-foreground hover:text-hello-csv-foreground",
              "aria-hidden": "true"
            }
          )
        }
      )
    ] });
  }
);
function Mt({
  value: e,
  options: t,
  onChange: n,
  multiple: r = !1,
  compareFunction: o = (f, m) => f === m,
  clearable: i = !1,
  searchable: l = !1,
  placeholder: s,
  classes: a,
  displayPlaceholderWhenSelected: u = !1,
  ...c
}) {
  const { t: f } = he(), [m, d] = Z(""), p = (x) => r && Array.isArray(e) ? e.some(($) => o($, x)) : o(e, x), g = (x) => {
    if (d(""), r) {
      const $ = Array.isArray(x) ? x : [x];
      n($);
    } else
      n(x);
  }, w = () => {
    d(""), n(r ? [] : null);
  }, S = t.filter((x) => p(x.value)), C = S.map((x) => x.label).join(", "), y = m && l ? t.filter(
    (x) => String(x.label).toLowerCase().includes(m.toLowerCase())
  ) : t, R = s ?? f("components.select.optionPlaceholder"), T = () => l ? C : S.length > 0 ? u ? `${R}: ${C}` : C : "", M = y.some((x) => x.group) ? Object.entries(
    y.reduce(
      (x, $) => {
        const _ = $.group || "ungrouped";
        return x[_] = x[_] || [], x[_].push($), x;
      },
      {}
    )
  ).map(([x, $]) => ({
    label: x,
    items: $
  })) : [{ label: null, items: y }], v = M.every(({ items: x }) => x.length === 0), b = i && S.length > 0;
  return /* @__PURE__ */ h(od, { value: e, onChange: g, multiple: r, children: /* @__PURE__ */ k("div", { className: "relative", children: [
    /* @__PURE__ */ h(
      _r,
      {
        className: "w-full",
        "aria-label": c["aria-label"] ?? s,
        children: /* @__PURE__ */ h(
          bl,
          {
            className: `${a} flex h-10 w-full items-center justify-between gap-2 rounded-[var(--hello-csv-radius-md)] border border-hello-csv-input bg-transparent px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer truncate focus:cursor-text ${b ? "pr-12" : "pr-8"} text-left text-hello-csv-foreground placeholder:text-hello-csv-muted-foreground`,
            displayValue: T,
            onChange: (x) => l && d(x.target.value),
            placeholder: R,
            readOnly: !l
          }
        )
      }
    ),
    b && /* @__PURE__ */ h(
      "span",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": f("components.select.clear"),
        onClick: (x) => {
          x.stopPropagation(), w();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-hello-csv-muted-foreground hover:text-hello-csv-foreground",
        children: /* @__PURE__ */ h(
          Ll,
          {
            className: "h-5 w-5",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ h(_r, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ h(
      rp,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-4 self-center justify-self-end text-hello-csv-muted-foreground opacity-50"
      }
    ) }),
    /* @__PURE__ */ k(
      yl,
      {
        modal: !1,
        transition: !0,
        className: "absolute z-[9999] mt-1 max-h-60 w-full overflow-auto rounded-[var(--hello-csv-radius-md)] border border-hello-csv-border bg-hello-csv-popover p-1 text-hello-csv-popover-foreground shadow-md focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 text-sm",
        children: [
          v && /* @__PURE__ */ h(
            Ir,
            {
              disabled: !0,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-1.5 pr-8 pl-2 text-hello-csv-muted-foreground select-none",
              children: /* @__PURE__ */ h("span", { className: "block truncate font-normal", children: f("components.select.noOptions") })
            },
            "no-options"
          ),
          M.map(({ label: x, items: $ }) => /* @__PURE__ */ k("div", { children: [
            x && /* @__PURE__ */ h("div", { className: "py-1.5 pr-8 pl-2 text-hello-csv-muted-foreground text-xs font-medium uppercase", children: x }),
            $.map((_) => /* @__PURE__ */ k(
              Ir,
              {
                value: _.value,
                className: "group relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-hello-csv-foreground select-none outline-hidden data-focus:bg-hello-csv-accent data-focus:text-hello-csv-accent-foreground",
                children: [
                  _.icon,
                  /* @__PURE__ */ h("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: _.label }),
                  p(_.value) && /* @__PURE__ */ h("span", { className: "absolute right-2 flex size-3.5 items-center justify-center text-hello-csv-primary group-data-focus:text-hello-csv-accent-foreground", children: /* @__PURE__ */ h(Qf, { "aria-hidden": "true", className: "size-4" }) })
                ]
              },
              typeof _.value == "object" ? JSON.stringify(_.value) : String(_.value)
            ))
          ] }, x || "all"))
        ]
      }
    )
  ] }) });
}
function sp({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ k("div", { children: [
    /* @__PURE__ */ h("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ h(
      Mt,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ h("div", { className: "hidden sm:block", children: /* @__PURE__ */ h("div", { className: "border-b border-hello-csv-border", children: /* @__PURE__ */ h(
      "nav",
      {
        "aria-label": "Tabs",
        className: "-mb-px flex space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ k(
          "button",
          {
            id: `${r}-tab-${o.value}`,
            role: "tab",
            "aria-selected": o.value === t,
            "aria-current": o.value === t ? "page" : void 0,
            "aria-controls": `${r}-tabpanel-${o.value}`,
            onClick: () => n(o.value),
            className: ` ${o.value === t ? "border-hello-csv-primary text-hello-csv-primary" : "border-transparent text-hello-csv-muted-foreground hover:border-hello-csv-border hover:text-hello-csv-foreground"} flex cursor-pointer items-center border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap transition-colors`,
            children: [
              o.icon,
              o.label
            ]
          },
          o.label
        ))
      }
    ) }) })
  ] });
}
const ap = ut(
  "bg-hello-csv-popover text-hello-csv-popover-foreground absolute outline top-full w-full whitespace-normal z-5 mb-2 hidden px-2 py-4 text-xs group-focus-within:block group-hover:block rounded-[var(--hello-csv-radius-md)] border border-hello-csv-border shadow-md",
  {
    variants: {
      variant: {
        error: "outline-hello-csv-destructive",
        info: "outline-hello-csv-muted-foreground"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), up = ut("group relative h-full w-full", {
  variants: {
    variant: {
      error: "focus-within:outline-hello-csv-destructive hover:outline-hello-csv-destructive",
      info: "focus-within:outline-hello-csv-muted-foreground hover:outline-hello-csv-muted-foreground"
    },
    withOutline: {
      true: "focus-within:outline hover:outline hover:z-5 focus-within:z-5",
      false: ""
    }
  },
  defaultVariants: {
    variant: "info",
    withOutline: !1
  }
});
function cp({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = ap({ variant: e }), o = up({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ k("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ h("span", { className: r, children: n })
  ] });
}
const dp = ut(
  "relative inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium ring-hello-csv-border ring-1 ring-inset focus:z-10 transition-colors",
  {
    variants: {
      active: {
        true: "",
        false: "bg-hello-csv-background hover:bg-hello-csv-accent"
      },
      variant: {
        default: "",
        danger: "text-hello-csv-destructive"
      },
      location: {
        left: "rounded-l-[var(--hello-csv-radius-md)]",
        center: "-ml-px",
        right: "rounded-r-[var(--hello-csv-radius-md)] -ml-px "
      }
    },
    compoundVariants: [
      {
        active: !0,
        variant: "default",
        className: "bg-hello-csv-foreground text-hello-csv-background"
      },
      {
        active: !0,
        variant: "danger",
        className: "bg-hello-csv-destructive text-white"
      },
      {
        active: !1,
        variant: "default",
        className: "text-hello-csv-foreground"
      },
      {
        active: !1,
        variant: "danger",
        className: "text-hello-csv-destructive"
      }
    ]
  }
);
function fp({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ h("span", { className: "isolate inline-flex rounded-[var(--hello-csv-radius-md)] shadow-xs", children: t.map((n, r) => /* @__PURE__ */ h(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: dp({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
function Hl(e, t) {
  return e.indexOf(t) !== -1;
}
function zl(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function Bl(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
class un {
  constructor(t) {
    be(this, "definition");
    this.definition = t;
  }
  transform(t) {
    const n = this.parse(t);
    return n ?? t;
  }
  parse(t) {
    throw new Error("Not Implemented");
  }
}
class pp extends un {
  constructor(n) {
    super(n);
    be(this, "key");
    be(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class mp extends un {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class gp extends un {
  parse(t) {
    if (typeof t == "string" && Hl(t, "-"))
      return t.split("-")[0];
  }
}
const Xo = [
  ["Arizona", "AZ"],
  ["Alabama", "AL"],
  ["Alaska", "AK"],
  ["Arkansas", "AR"],
  ["California", "CA"],
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Delaware", "DE"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Hawaii", "HI"],
  ["Idaho", "ID"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Iowa", "IA"],
  ["Kansas", "KS"],
  ["Kentucky", "KY"],
  ["Louisiana", "LA"],
  ["Maine", "ME"],
  ["Maryland", "MD"],
  ["Massachusetts", "MA"],
  ["Michigan", "MI"],
  ["Minnesota", "MN"],
  ["Mississippi", "MS"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Nevada", "NV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["North Carolina", "NC"],
  ["North Dakota", "ND"],
  ["Ohio", "OH"],
  ["Oklahoma", "OK"],
  ["Oregon", "OR"],
  ["Pennsylvania", "PA"],
  ["Rhode Island", "RI"],
  ["South Carolina", "SC"],
  ["South Dakota", "SD"],
  ["Tennessee", "TN"],
  ["Texas", "TX"],
  ["Utah", "UT"],
  ["Vermont", "VT"],
  ["Virginia", "VA"],
  ["Washington", "WA"],
  ["West Virginia", "WV"],
  ["Wisconsin", "WI"],
  ["Wyoming", "WY"]
];
class hp extends un {
  parse(t) {
    const n = Xo.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Hl(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return Xo[r][1];
    }
  }
}
class vp extends un {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function wp(e) {
  const t = {
    phone_number: mp,
    postal_code: gp,
    state_code: hp,
    strip: vp,
    custom: pp
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function bp(e, t) {
  const n = zl(
    e.columns,
    (r, o) => {
      o[r.id] = new yp(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          wp(i)
        );
      });
    }
  );
  return e.columns.forEach((r) => {
    const o = r.id, i = n[o];
    t.rows.forEach((l) => {
      if (!Bl(l))
        return;
      const s = l[o];
      oo(s) || (l[o] = i.transform(s));
    });
  }), t.rows;
}
function Pr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = bp(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class yp {
  // Series of transformations
  constructor(t = []) {
    be(this, "steps");
    this.steps = t;
  }
  push(t) {
    this.steps.push(t);
  }
  transform(t) {
    let n = t;
    return this.steps.forEach((r) => {
      n = r.transform(n);
    }), n;
  }
}
const xp = (e) => e == null, Sp = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function oo(e) {
  return xp(e) || e === "";
}
const Zo = (e) => [...new Set(e)];
function mn(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Tn(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function Jo(e) {
  if (e == null)
    return "";
  let t = String(e);
  return t = t.replace(/"/g, '""'), /[",\n\r]/.test(t) && (t = `"${t}"`), t;
}
function io(e, t, n, r) {
  const o = e.columns.map(
    (s) => Jo(r === "label" ? s.label : s.id)
  ).join(Yo), i = t.map(
    (s) => e.columns.map((a) => {
      const u = s[a.id];
      let c;
      return r === "value" || u == null ? c = u : a.type === "enum" ? c = Mn(
        n[e.id][a.id],
        u
      ) : a.type === "reference" ? c = Mn(
        lo(a, n),
        u
      ) : c = u, Jo(c);
    }).join(Yo)
  ), l = [o, ...i].join(`
`);
  return new Blob([l], { type: "text/csv" });
}
function jl(e, t, n, r) {
  const o = io(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), l = document.createElement("a");
  l.href = i, l.download = `${e.label}.csv`, l.click(), URL.revokeObjectURL(i);
}
function lo(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function Mn(e, t) {
  return typeof t != "string" ? t : e[t] ?? t;
}
function so(e, t) {
  return Pr(
    e,
    t.map((n) => ({ ...n, rows: Sp(n) }))
  );
}
const ft = 8, gn = 8, tt = 8, hn = -4, Cp = ut(
  "absolute z-50 w-max rounded-[var(--hello-csv-radius-md)] border border-hello-csv-border bg-hello-csv-popover px-3 py-1.5 text-xs text-hello-csv-popover-foreground shadow-md transition-opacity duration-200",
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none"
      },
      hidden: {
        true: "hidden",
        false: ""
      }
    }
  }
);
function _t({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = Z(!1), [l, s] = Z({ top: 0, left: 0 }), [a, u] = Z("bottom"), [c, f] = Z(0), m = G(null), d = G(null), [p, g] = Z(null);
  le(() => {
    const y = document.createElement("div");
    return y.classList.add(Or), document.body.appendChild(y), g(y), () => {
      document.body.removeChild(y);
    };
  }, []);
  const w = () => {
    requestAnimationFrame(() => {
      if (!m.current || !d.current) return;
      const y = m.current.getBoundingClientRect(), R = d.current.getBoundingClientRect(), T = window.innerWidth, F = window.innerHeight, M = F - y.bottom, v = y.top, b = T - y.right;
      let x = "bottom";
      M >= R.height + ft ? x = "bottom" : v >= R.height + ft ? x = "top" : b >= R.width + ft ? x = "right" : x = "left";
      let $ = 0, _ = 0;
      switch (x) {
        case "bottom":
          $ = y.bottom + ft + window.scrollY, _ = y.left + y.width / 2 - R.width / 2 + window.scrollX;
          break;
        case "top":
          $ = y.top - R.height - ft + window.scrollY, _ = y.left + y.width / 2 - R.width / 2 + window.scrollX;
          break;
        case "right":
          $ = y.top + y.height / 2 - R.height / 2 + window.scrollY, _ = y.right + ft + window.scrollX;
          break;
        case "left":
          $ = y.top + y.height / 2 - R.height / 2 + window.scrollY, _ = y.left - R.width - ft + window.scrollX;
          break;
      }
      $ = mn(
        $,
        gn + window.scrollY,
        window.scrollY + F - R.height - gn
      ), _ = mn(
        _,
        gn + window.scrollX,
        window.scrollX + T - R.width - gn
      );
      const P = y.left + y.width / 2 + window.scrollX, A = y.top + y.height / 2 + window.scrollY;
      let B = 0;
      if (x === "top" || x === "bottom") {
        const W = P - _;
        B = mn(
          W,
          tt,
          R.width - tt
        );
      } else {
        const W = A - $;
        B = mn(
          W,
          tt,
          R.height - tt
        );
      }
      u(x), s({ top: $, left: _ }), f(B), i(!0);
    });
  }, S = () => i(!1), C = Ne();
  return /* @__PURE__ */ k(
    "div",
    {
      ref: m,
      tabIndex: 0,
      className: `${n ?? ""} relative inline-block`,
      onMouseEnter: w,
      onMouseLeave: S,
      onFocus: w,
      onBlur: S,
      "aria-describedby": C,
      children: [
        t,
        p && Br(
          /* @__PURE__ */ k(
            "div",
            {
              id: C,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: d,
              className: Cp({ visible: o, hidden: r }),
              style: {
                top: `${l.top}px`,
                left: `${l.left}px`
              },
              children: [
                e,
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: "absolute h-2 w-2 rotate-45 border border-hello-csv-border bg-hello-csv-popover",
                    style: a === "bottom" ? { top: hn, left: c - tt / 2 } : a === "top" ? {
                      bottom: hn,
                      left: c - tt / 2
                    } : a === "left" ? {
                      right: hn,
                      top: c - tt / 2
                    } : {
                      left: hn,
                      top: c - tt / 2
                    }
                  }
                )
              ]
            }
          ),
          p
        )
      ]
    }
  );
}
const Ep = ut(
  "inline-flex items-center justify-center rounded-[var(--hello-csv-radius-md)] border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-hello-csv-primary text-hello-csv-primary-foreground",
        secondary: "border-transparent bg-hello-csv-secondary text-hello-csv-secondary-foreground",
        success: "border-transparent bg-hello-csv-success text-hello-csv-success-foreground",
        error: "border-transparent bg-hello-csv-destructive text-white",
        outline: "text-hello-csv-foreground border-hello-csv-border"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);
function ao({ children: e, variant: t }) {
  const n = Ep({ variant: t });
  return /* @__PURE__ */ h("div", { className: n, children: e });
}
function Rp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Gl = /* @__PURE__ */ E.forwardRef(Rp);
function $p({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const _p = /* @__PURE__ */ E.forwardRef($p);
function Ip({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Ar = /* @__PURE__ */ E.forwardRef(Ip);
function Tp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Mp = /* @__PURE__ */ E.forwardRef(Tp), Op = {
  info: {
    icon: /* @__PURE__ */ h(Mp, { className: "size-4 text-current", "aria-hidden": "true" }),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-card-foreground px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-muted-foreground"
  },
  success: {
    icon: /* @__PURE__ */ h(Gl, { className: "size-4 text-hello-csv-success", "aria-hidden": "true" }),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-success px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-success/90"
  },
  error: {
    icon: /* @__PURE__ */ h(
      Ar,
      {
        className: "size-4 text-hello-csv-destructive",
        "aria-hidden": "true"
      }
    ),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-destructive px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-destructive/90"
  },
  warning: {
    icon: /* @__PURE__ */ h(
      Ar,
      {
        className: "size-4 text-hello-csv-warning",
        "aria-hidden": "true"
      }
    ),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-warning px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-warning/90"
  }
};
function uo({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o, descriptionClasses: i } = Op[e];
  return /* @__PURE__ */ k("div", { className: o, children: [
    r,
    /* @__PURE__ */ k("div", { className: "col-start-2", children: [
      t && /* @__PURE__ */ h("div", { className: "font-medium leading-none tracking-tight", children: t }),
      /* @__PURE__ */ h("div", { className: `text-sm ${i} ${t ? "mt-1" : ""}`, children: n })
    ] })
  ] });
}
function Fp({ children: e }) {
  return /* @__PURE__ */ k("div", { className: "flex", children: [
    /* @__PURE__ */ h("div", { className: "shrink-0", children: /* @__PURE__ */ h(
      cf,
      {
        "aria-hidden": "true",
        className: "text-hello-csv-destructive size-5"
      }
    ) }),
    /* @__PURE__ */ h("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ h("p", { className: "text-hello-csv-destructive text-sm", children: e }) })
  ] });
}
const Pp = ut(
  "inline-block rounded-full animate-spin border-t-transparent size-4 border-2",
  {
    variants: {
      color: {
        light: "border-hello-csv-primary-foreground border-t-transparent",
        dark: "border-hello-csv-foreground border-t-transparent",
        primary: "border-hello-csv-primary border-t-transparent"
      }
    },
    defaultVariants: {
      color: "primary"
    }
  }
);
function Wl({ color: e = "primary" }) {
  return /* @__PURE__ */ h("span", { className: `${Pp({ color: e })}` });
}
class Ct {
  constructor(t) {
    be(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class Ap extends Ct {
  constructor(n) {
    super(n);
    be(this, "key");
    be(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
function Np(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class qn extends Ct {
  constructor(n) {
    super(n);
    be(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(Np(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class kp extends qn {
  constructor(t) {
    super({
      ...t,
      regex: /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i
    });
  }
}
class Dp extends Ct {
  constructor(n) {
    super(n);
    be(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class Lp extends Ct {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class Vp extends Ct {
  constructor(n) {
    super(n);
    be(this, "delimiter");
    be(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    var o;
    if ((((o = n == null ? void 0 : n.toString()) == null ? void 0 : o.split(this.delimiter)) ?? []).some((i) => !this.values.includes(i.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class Hp extends qn {
  constructor(t) {
    super({
      ...t,
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    });
  }
}
class zp extends qn {
  constructor(t) {
    super({
      ...t,
      regex: /^\d{5}(-\d{4})?$/
    });
  }
}
class Bp extends Ct {
  constructor(n) {
    super(n);
    be(this, "when");
    this.when = n.when ?? (() => !0);
  }
  isValid(n, r) {
    if (this.when(r) && oo(n))
      return this.definition.error || "validators.required";
  }
}
class jp extends Ct {
  constructor(n) {
    super(n);
    be(this, "seen");
    be(this, "caseInsensitive");
    this.caseInsensitive = n.caseInsensitive || !1, this.seen = /* @__PURE__ */ new Set();
  }
  comparableValue(n) {
    return this.caseInsensitive && typeof n == "string" ? n.toLocaleLowerCase() : n;
  }
  isValid(n) {
    const r = this.comparableValue(n);
    if (this.seen.has(r))
      return this.definition.error || "validators.unique";
    this.seen.add(r);
  }
}
function Gp(e) {
  const t = {
    regex_matches: qn,
    required: Bp,
    unique: jp,
    includes: Dp,
    multi_includes: Vp,
    is_integer: Lp,
    postal_code: zp,
    phone_number: Hp,
    email: kp,
    custom: Ap
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function Ul(e, t) {
  var o, i, l;
  const n = e.typeArguments, r = t.find(
    (s) => s.sheetId === n.sheetId
  );
  return ((l = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((s) => s[n.sheetColumnId])) == null ? void 0 : i.filter((s) => !oo(s))) == null ? void 0 : l.filter((s, a, u) => u.indexOf(s) === a)) ?? [];
}
function ql(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function Wp(e, t, n, r, o, i, l) {
  return re(() => {
    let a = e.rows;
    switch (n) {
      case "errors":
        a = e.rows.filter(
          (u, c) => r.some((f) => f.rowIndex === c)
        );
        break;
      case "valid":
        a = e.rows.filter(
          (u, c) => !r.some((f) => f.rowIndex === c)
        );
        break;
      case "all":
      default:
        a = e.rows;
    }
    return o != null && (a = a.filter((u) => {
      const c = ql(t, i.id, u);
      return r.find(
        (m) => m.rowIndex === c && m.columnId === o
      ) != null;
    })), l.trim() !== "" && (a = a.filter(
      (u) => Object.values(u).some(
        (c) => {
          var f;
          return (f = Tn(c)) == null ? void 0 : f.includes(Tn(l));
        }
      )
    )), a;
  }, [
    e,
    n,
    r,
    o,
    i.id,
    t,
    l
  ]);
}
function Kl(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function Up(e) {
  return Object.fromEntries(
    e.map((t) => [
      t.id,
      Object.fromEntries(
        t.columns.filter((n) => n.type === "enum").map((n) => [
          n.id,
          Object.fromEntries(
            n.typeArguments.values.map(({ label: r, value: o }) => [
              o,
              r
            ])
          )
        ])
      )
    ])
  );
}
function qp(e, t, n) {
  var i, l, s;
  const r = e.type === "enum" ? ((i = e.typeArguments.values.find((a) => a.value === t)) == null ? void 0 : i.label) ?? t : e.type === "reference" && t != null ? Mn(
    lo(e, n),
    t
  ) : e.type === "boolean" ? t === !0 ? ((l = e.typeArguments) == null ? void 0 : l.trueLabel) ?? kl : t === !1 ? ((s = e.typeArguments) == null ? void 0 : s.falseLabel) ?? Dl : t : t, o = r == null || typeof r == "string" && r.trim() === "";
  return { displayValue: o ? " " : r, valueEmpty: o };
}
function cn(e, { skipConditionCheck: t } = {}) {
  if (e.validators && e.validators.length > 0) {
    const n = e.validators.find(
      (r) => r.validate === "required"
    );
    return n != null && (t ? !0 : n.when == null);
  }
  return !1;
}
function Kp(e, t) {
  const n = [];
  if (e.type === "enum" && n.push({
    values: e.typeArguments.values.map((r) => r.value),
    validate: "includes"
  }), e.type === "reference") {
    const r = Ul(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  return n;
}
async function Yp(e, t, n) {
  const r = [], o = [], i = zl(e.columns, (l, s) => {
    s[l.id] = [], [
      ...l.validators ?? [],
      ...Kp(l, n)
    ].forEach((u) => {
      s[l.id].push(
        Gp(u)
      );
    });
  });
  return e.columns.forEach((l) => {
    t.rows.forEach((s, a) => {
      if (!Bl(s) || !(l.id in s) && !cn(l, { skipConditionCheck: !0 }))
        return;
      const u = s[l.id];
      i[l.id].forEach((f) => {
        const m = Promise.resolve(f.isValid(u, s)).then(
          (d) => {
            d != null && r.push({
              sheetId: e.id,
              columnId: l.id,
              rowIndex: a,
              message: d
            });
          }
        );
        o.push(m);
      });
    });
  }), await Promise.all(o), r;
}
async function Xp(e, t) {
  const n = e.map(async (o) => {
    const i = t.find(
      (l) => l.sheetId === o.id
    );
    return i ? await Yp(
      o,
      i,
      t
    ) : [];
  });
  return (await Promise.all(n)).flat();
}
const Zp = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Yl = Math.pow(2, 53), Jp = -Yl;
function Xl(e, t, n) {
  return t.map((r) => {
    const o = e.find(
      (l) => l.id === r.sheetId
    );
    if (o == null)
      return r;
    const i = r.rows.map((l, s) => {
      const a = { ...l };
      return n(o.columns, a, l, s), a;
    });
    return {
      ...r,
      rows: i
    };
  });
}
function Qp(e, t) {
  return Xl(
    e,
    t,
    (n, r, o, i) => {
      n.filter((l) => l.type === "reference").forEach((l) => {
        const s = t.find(
          (a) => a.sheetId === l.typeArguments.sheetId
        );
        if (s != null) {
          const u = s.rows.map(
            (c) => c[l.typeArguments.sheetColumnId]
          )[i];
          r[l.id] = u;
        }
      });
    }
  );
}
function em(e, t) {
  return Xl(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function tm(e) {
  if (Zp.test(e)) {
    const t = parseFloat(e);
    if (t > Jp && t < Yl)
      return !0;
  }
  return !1;
}
function nm(e, t) {
  return t.type === "number" && tm(e) ? parseFloat(e) : e;
}
function rm(e, t) {
  if (t.type === "enum") {
    const n = t.typeArguments.values.find(
      (r) => r.label === e
    );
    if (n != null)
      return n.value;
  }
  return nm(e, t);
}
function om(e, t, n) {
  return e.map((r) => {
    const o = [], i = t.filter(
      (l) => l.sheetId === r.id
    );
    return n.map((l) => {
      const s = {};
      r.columns.forEach((a) => {
        const u = i.find(
          (c) => c.sheetColumnId === a.id
        );
        u != null && (s[u.sheetColumnId] = rm(
          l[u.csvColumnName],
          a
        ));
      }), o.push(s);
    }), {
      sheetId: r.id,
      rows: o
    };
  });
}
function im(e, t, n) {
  const r = n.data, o = om(e, t, r), i = em(
    e,
    o
  );
  return Qp(e, i);
}
function Kn(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function lm(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function sm(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!Kn(i))
        return !1;
      const l = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Tn(a)), s = Tn(r);
      return l.includes(s);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const am = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = sm(r, t);
    n.push(...o);
  }), lm(n);
};
function um(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function cm(e, t) {
  const n = dm(e, t), r = fm(n);
  return pm(r);
}
function dm(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, Nl);
}
function fm(e) {
  return [
    ...e,
    ...Array(Nl - e.length).fill("")
  ];
}
function pm(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > Gf && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function mm(e, t) {
  const { t: n } = he();
  return e.flatMap(
    (o) => o.columns.filter((i) => Kn(i)).map((i) => ({
      label: `${i.label}${cn(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (l) => l.sheetId === o.id && l.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => gm(o, i, n("mapper.unused")));
}
function gm(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function hm(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (cn(r) && Kn(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function vm({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = he();
  return t && /* @__PURE__ */ h("div", { className: "m-4 rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ h("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ h("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ h("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ k("table", { className: "min-w-full divide-y divide-hello-csv-border", children: [
    /* @__PURE__ */ h("thead", { children: /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-medium text-hello-csv-muted-foreground sm:pl-6 lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ h(ao, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ h("tbody", { className: "divide-y divide-hello-csv-border", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", { className: "h-12 py-4 pr-3 pl-4 text-sm text-hello-csv-foreground sm:pl-6 lg:pl-8", children: o || i === 0 && /* @__PURE__ */ h("span", { className: "text-hello-csv-muted-foreground italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function wm({
  csvHeader: e,
  setMapping: t,
  currentMapping: n,
  mappingSelectionOptions: r,
  onMouseEnter: o
}) {
  var l;
  const i = n == null ? null : ((l = r.find(
    (s) => s.value.sheetId === n.sheetId && s.value.sheetColumnId === n.sheetColumnId
  )) == null ? void 0 : l.value) ?? null;
  return /* @__PURE__ */ h(
    "div",
    {
      className: "hover:bg-hello-csv-muted rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ k("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ k("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h(ao, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ h("div", { className: "mx-5", children: /* @__PURE__ */ h(jd, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ h("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ h(
          Mt,
          {
            "aria-label": `column mapping for ${e}`,
            searchable: !0,
            clearable: !0,
            compareFunction: (s, a) => s == null || a == null ? !1 : s.sheetColumnId === a.sheetColumnId && s.sheetId === a.sheetId,
            value: i,
            options: r,
            onChange: (s) => t(s)
          }
        ) })
      ] })
    }
  );
}
const Zl = "HelloCSV", Jl = 1, Ze = "state";
async function bm(e, t) {
  return new Promise((n, r) => {
    const o = es(e, t), i = indexedDB.open(Zl, Jl);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const u = i.result.transaction(Ze, "readonly").objectStore(Ze).get(o);
      u.onerror = () => n(null), u.onsuccess = () => {
        try {
          const c = u.result;
          c.sheetDefinitions = e, n(c);
        } catch {
          n(null);
        }
      };
    }, i.onupgradeneeded = (l) => {
      const s = l.target.result;
      s.objectStoreNames.contains(Ze) && s.deleteObjectStore(Ze), s.createObjectStore(Ze);
    };
  });
}
async function Ql(e, t) {
  return new Promise((n, r) => {
    const o = es(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const l = indexedDB.open(Zl, Jl);
    l.onerror = () => r(l.error), l.onsuccess = () => {
      const c = l.result.transaction(Ze, "readwrite").objectStore(Ze).put(i, o);
      c.onerror = () => r(c.error), c.onsuccess = () => n();
    }, l.onupgradeneeded = (s) => {
      const a = s.target.result;
      a.objectStoreNames.contains(Ze) || a.createObjectStore(Ze);
    };
  });
}
function es(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${ym(r)}`;
}
function ym(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function xm(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => Kn(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      cn(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const xn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, Sm = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), Cm = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await Sm(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), l = new Blob([i], { type: "text/csv" });
    return new File([l], o, {
      type: "text/csv"
    });
  }
  return e;
};
function Em(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Rm = Sn.exports, Qo;
function $m() {
  return Qo || (Qo = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Rm, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, l = r.IS_PAPA_WORKER || !1, s = {}, a = 0, u = {};
      function c(v) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(b) {
          var x = T(b);
          x.chunkSize = parseInt(x.chunkSize), b.step || b.chunk || (x.chunkSize = null), this._handle = new g(x), (this._handle.streamer = this)._config = x;
        }).call(this, v), this.parseChunk = function(b, x) {
          var $ = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < $) {
            let P = this._config.newline;
            P || (_ = this._config.quoteChar || '"', P = this._handle.guessLineEndings(b, _)), b = [...b.split(P).slice($)].join(P);
          }
          this.isFirstChunk && M(this._config.beforeFirstChunk) && (_ = this._config.beforeFirstChunk(b)) !== void 0 && (b = _), this.isFirstChunk = !1, this._halted = !1;
          var $ = this._partialLine + b, _ = (this._partialLine = "", this._handle.parse($, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (b = _.meta.cursor, $ = (this._finished || (this._partialLine = $.substring(b - this._baseIndex), this._baseIndex = b), _ && _.data && (this._rowCount += _.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), l) r.postMessage({ results: _, workerId: u.WORKER_ID, finished: $ });
            else if (M(this._config.chunk) && !x) {
              if (this._config.chunk(_, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = _ = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(_.data), this._completeResults.errors = this._completeResults.errors.concat(_.errors), this._completeResults.meta = _.meta), this._completed || !$ || !M(this._config.complete) || _ && _.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), $ || _ && _.meta.paused || this._nextChunk(), _;
          }
          this._halted = !0;
        }, this._sendError = function(b) {
          M(this._config.error) ? this._config.error(b) : l && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: b, finished: !1 });
        };
      }
      function f(v) {
        var b;
        (v = v || {}).chunkSize || (v.chunkSize = u.RemoteChunkSize), c.call(this, v), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(x) {
          this._input = x, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (b = new XMLHttpRequest(), this._config.withCredentials && (b.withCredentials = this._config.withCredentials), i || (b.onload = F(this._chunkLoaded, this), b.onerror = F(this._chunkError, this)), b.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var x, $ = this._config.downloadRequestHeaders;
              for (x in $) b.setRequestHeader(x, $[x]);
            }
            var _;
            this._config.chunkSize && (_ = this._start + this._config.chunkSize - 1, b.setRequestHeader("Range", "bytes=" + this._start + "-" + _));
            try {
              b.send(this._config.downloadRequestBody);
            } catch (P) {
              this._chunkError(P.message);
            }
            i && b.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          b.readyState === 4 && (b.status < 200 || 400 <= b.status ? this._chunkError() : (this._start += this._config.chunkSize || b.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((x) => (x = x.getResponseHeader("Content-Range")) !== null ? parseInt(x.substring(x.lastIndexOf("/") + 1)) : -1)(b), this.parseChunk(b.responseText)));
        }, this._chunkError = function(x) {
          x = b.statusText || x, this._sendError(new Error(x));
        };
      }
      function m(v) {
        (v = v || {}).chunkSize || (v.chunkSize = u.LocalChunkSize), c.call(this, v);
        var b, x, $ = typeof FileReader < "u";
        this.stream = function(_) {
          this._input = _, x = _.slice || _.webkitSlice || _.mozSlice, $ ? ((b = new FileReader()).onload = F(this._chunkLoaded, this), b.onerror = F(this._chunkError, this)) : b = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var _ = this._input, P = (this._config.chunkSize && (P = Math.min(this._start + this._config.chunkSize, this._input.size), _ = x.call(_, this._start, P)), b.readAsText(_, this._config.encoding));
          $ || this._chunkLoaded({ target: { result: P } });
        }, this._chunkLoaded = function(_) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(_.target.result);
        }, this._chunkError = function() {
          this._sendError(b.error);
        };
      }
      function d(v) {
        var b;
        c.call(this, v = v || {}), this.stream = function(x) {
          return b = x, this._nextChunk();
        }, this._nextChunk = function() {
          var x, $;
          if (!this._finished) return x = this._config.chunkSize, b = x ? ($ = b.substring(0, x), b.substring(x)) : ($ = b, ""), this._finished = !b, this.parseChunk($);
        };
      }
      function p(v) {
        c.call(this, v = v || {});
        var b = [], x = !0, $ = !1;
        this.pause = function() {
          c.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          c.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(_) {
          this._input = _, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          $ && b.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), b.length ? this.parseChunk(b.shift()) : x = !0;
        }, this._streamData = F(function(_) {
          try {
            b.push(typeof _ == "string" ? _ : _.toString(this._config.encoding)), x && (x = !1, this._checkIsFinished(), this.parseChunk(b.shift()));
          } catch (P) {
            this._streamError(P);
          }
        }, this), this._streamError = F(function(_) {
          this._streamCleanUp(), this._sendError(_);
        }, this), this._streamEnd = F(function() {
          this._streamCleanUp(), $ = !0, this._streamData("");
        }, this), this._streamCleanUp = F(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function g(v) {
        var b, x, $, _, P = Math.pow(2, 53), A = -P, B = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, W = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, H = this, V = 0, O = 0, q = !1, N = !1, z = [], I = { data: [], errors: [], meta: {} };
        function ie(U) {
          return v.skipEmptyLines === "greedy" ? U.join("").trim() === "" : U.length === 1 && U[0].length === 0;
        }
        function te() {
          if (I && $ && (oe("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), $ = !1), v.skipEmptyLines && (I.data = I.data.filter(function(J) {
            return !ie(J);
          })), se()) {
            let J = function(fe, ge) {
              M(v.transformHeader) && (fe = v.transformHeader(fe, ge)), z.push(fe);
            };
            if (I) if (Array.isArray(I.data[0])) {
              for (var U = 0; se() && U < I.data.length; U++) I.data[U].forEach(J);
              I.data.splice(0, 1);
            } else I.data.forEach(J);
          }
          function ee(J, fe) {
            for (var ge = v.header ? {} : [], L = 0; L < J.length; L++) {
              var K = L, Q = J[L], Q = ((Se, ne) => ((pe) => (v.dynamicTypingFunction && v.dynamicTyping[pe] === void 0 && (v.dynamicTyping[pe] = v.dynamicTypingFunction(pe)), (v.dynamicTyping[pe] || v.dynamicTyping) === !0))(Se) ? ne === "true" || ne === "TRUE" || ne !== "false" && ne !== "FALSE" && (((pe) => {
                if (B.test(pe) && (pe = parseFloat(pe), A < pe && pe < P))
                  return 1;
              })(ne) ? parseFloat(ne) : W.test(ne) ? new Date(ne) : ne === "" ? null : ne) : ne)(K = v.header ? L >= z.length ? "__parsed_extra" : z[L] : K, Q = v.transform ? v.transform(Q, K) : Q);
              K === "__parsed_extra" ? (ge[K] = ge[K] || [], ge[K].push(Q)) : ge[K] = Q;
            }
            return v.header && (L > z.length ? oe("FieldMismatch", "TooManyFields", "Too many fields: expected " + z.length + " fields but parsed " + L, O + fe) : L < z.length && oe("FieldMismatch", "TooFewFields", "Too few fields: expected " + z.length + " fields but parsed " + L, O + fe)), ge;
          }
          var de;
          I && (v.header || v.dynamicTyping || v.transform) && (de = 1, !I.data.length || Array.isArray(I.data[0]) ? (I.data = I.data.map(ee), de = I.data.length) : I.data = ee(I.data, 0), v.header && I.meta && (I.meta.fields = z), O += de);
        }
        function se() {
          return v.header && z.length === 0;
        }
        function oe(U, ee, de, J) {
          U = { type: U, code: ee, message: de }, J !== void 0 && (U.row = J), I.errors.push(U);
        }
        M(v.step) && (_ = v.step, v.step = function(U) {
          I = U, se() ? te() : (te(), I.data.length !== 0 && (V += U.data.length, v.preview && V > v.preview ? x.abort() : (I.data = I.data[0], _(I, H))));
        }), this.parse = function(U, ee, de) {
          var J = v.quoteChar || '"', J = (v.newline || (v.newline = this.guessLineEndings(U, J)), $ = !1, v.delimiter ? M(v.delimiter) && (v.delimiter = v.delimiter(U), I.meta.delimiter = v.delimiter) : ((J = ((fe, ge, L, K, Q) => {
            var Se, ne, pe, et;
            Q = Q || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Et = 0; Et < Q.length; Et++) {
              for (var He, Vt = Q[Et], Ce = 0, ze = 0, ye = 0, Me = (pe = void 0, new S({ comments: K, delimiter: Vt, newline: ge, preview: 10 }).parse(fe)), Ke = 0; Ke < Me.data.length; Ke++) L && ie(Me.data[Ke]) ? ye++ : (He = Me.data[Ke].length, ze += He, pe === void 0 ? pe = He : 0 < He && (Ce += Math.abs(He - pe), pe = He));
              0 < Me.data.length && (ze /= Me.data.length - ye), (ne === void 0 || Ce <= ne) && (et === void 0 || et < ze) && 1.99 < ze && (ne = Ce, Se = Vt, et = ze);
            }
            return { successful: !!(v.delimiter = Se), bestDelimiter: Se };
          })(U, v.newline, v.skipEmptyLines, v.comments, v.delimitersToGuess)).successful ? v.delimiter = J.bestDelimiter : ($ = !0, v.delimiter = u.DefaultDelimiter), I.meta.delimiter = v.delimiter), T(v));
          return v.preview && v.header && J.preview++, b = U, x = new S(J), I = x.parse(b, ee, de), te(), q ? { meta: { paused: !0 } } : I || { meta: { paused: !1 } };
        }, this.paused = function() {
          return q;
        }, this.pause = function() {
          q = !0, x.abort(), b = M(v.chunk) ? "" : b.substring(x.getCharIndex());
        }, this.resume = function() {
          H.streamer._halted ? (q = !1, H.streamer.parseChunk(b, !0)) : setTimeout(H.resume, 3);
        }, this.aborted = function() {
          return N;
        }, this.abort = function() {
          N = !0, x.abort(), I.meta.aborted = !0, M(v.complete) && v.complete(I), b = "";
        }, this.guessLineEndings = function(fe, J) {
          fe = fe.substring(0, 1048576);
          var J = new RegExp(w(J) + "([^]*?)" + w(J), "gm"), de = (fe = fe.replace(J, "")).split("\r"), J = fe.split(`
`), fe = 1 < J.length && J[0].length < de[0].length;
          if (de.length === 1 || fe) return `
`;
          for (var ge = 0, L = 0; L < de.length; L++) de[L][0] === `
` && ge++;
          return ge >= de.length / 2 ? `\r
` : "\r";
        };
      }
      function w(v) {
        return v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function S(v) {
        var b = (v = v || {}).delimiter, x = v.newline, $ = v.comments, _ = v.step, P = v.preview, A = v.fastMode, B = null, W = !1, H = v.quoteChar == null ? '"' : v.quoteChar, V = H;
        if (v.escapeChar !== void 0 && (V = v.escapeChar), (typeof b != "string" || -1 < u.BAD_DELIMITERS.indexOf(b)) && (b = ","), $ === b) throw new Error("Comment character same as delimiter");
        $ === !0 ? $ = "#" : (typeof $ != "string" || -1 < u.BAD_DELIMITERS.indexOf($)) && ($ = !1), x !== `
` && x !== "\r" && x !== `\r
` && (x = `
`);
        var O = 0, q = !1;
        this.parse = function(N, z, I) {
          if (typeof N != "string") throw new Error("Input must be a string");
          var ie = N.length, te = b.length, se = x.length, oe = $.length, U = M(_), ee = [], de = [], J = [], fe = O = 0;
          if (!N) return Ce();
          if (A || A !== !1 && N.indexOf(H) === -1) {
            for (var ge = N.split(x), L = 0; L < ge.length; L++) {
              if (J = ge[L], O += J.length, L !== ge.length - 1) O += x.length;
              else if (I) return Ce();
              if (!$ || J.substring(0, oe) !== $) {
                if (U) {
                  if (ee = [], et(J.split(b)), ze(), q) return Ce();
                } else et(J.split(b));
                if (P && P <= L) return ee = ee.slice(0, P), Ce(!0);
              }
            }
            return Ce();
          }
          for (var K = N.indexOf(b, O), Q = N.indexOf(x, O), Se = new RegExp(w(V) + w(H), "g"), ne = N.indexOf(H, O); ; ) if (N[O] === H) for (ne = O, O++; ; ) {
            if ((ne = N.indexOf(H, ne + 1)) === -1) return I || de.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ee.length, index: O }), He();
            if (ne === ie - 1) return He(N.substring(O, ne).replace(Se, H));
            if (H === V && N[ne + 1] === V) ne++;
            else if (H === V || ne === 0 || N[ne - 1] !== V) {
              K !== -1 && K < ne + 1 && (K = N.indexOf(b, ne + 1));
              var pe = Et((Q = Q !== -1 && Q < ne + 1 ? N.indexOf(x, ne + 1) : Q) === -1 ? K : Math.min(K, Q));
              if (N.substr(ne + 1 + pe, te) === b) {
                J.push(N.substring(O, ne).replace(Se, H)), N[O = ne + 1 + pe + te] !== H && (ne = N.indexOf(H, O)), K = N.indexOf(b, O), Q = N.indexOf(x, O);
                break;
              }
              if (pe = Et(Q), N.substring(ne + 1 + pe, ne + 1 + pe + se) === x) {
                if (J.push(N.substring(O, ne).replace(Se, H)), Vt(ne + 1 + pe + se), K = N.indexOf(b, O), ne = N.indexOf(H, O), U && (ze(), q)) return Ce();
                if (P && ee.length >= P) return Ce(!0);
                break;
              }
              de.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ee.length, index: O }), ne++;
            }
          }
          else if ($ && J.length === 0 && N.substring(O, O + oe) === $) {
            if (Q === -1) return Ce();
            O = Q + se, Q = N.indexOf(x, O), K = N.indexOf(b, O);
          } else if (K !== -1 && (K < Q || Q === -1)) J.push(N.substring(O, K)), O = K + te, K = N.indexOf(b, O);
          else {
            if (Q === -1) break;
            if (J.push(N.substring(O, Q)), Vt(Q + se), U && (ze(), q)) return Ce();
            if (P && ee.length >= P) return Ce(!0);
          }
          return He();
          function et(ye) {
            ee.push(ye), fe = O;
          }
          function Et(ye) {
            var Me = 0;
            return Me = ye !== -1 && (ye = N.substring(ne + 1, ye)) && ye.trim() === "" ? ye.length : Me;
          }
          function He(ye) {
            return I || (ye === void 0 && (ye = N.substring(O)), J.push(ye), O = ie, et(J), U && ze()), Ce();
          }
          function Vt(ye) {
            O = ye, et(J), J = [], Q = N.indexOf(x, O);
          }
          function Ce(ye) {
            if (v.header && !z && ee.length && !W) {
              var Me = ee[0], Ke = {}, Xn = new Set(Me);
              let mo = !1;
              for (let Rt = 0; Rt < Me.length; Rt++) {
                let Be = Me[Rt];
                if (Ke[Be = M(v.transformHeader) ? v.transformHeader(Be, Rt) : Be]) {
                  let Ht, go = Ke[Be];
                  for (; Ht = Be + "_" + go, go++, Xn.has(Ht); ) ;
                  Xn.add(Ht), Me[Rt] = Ht, Ke[Be]++, mo = !0, (B = B === null ? {} : B)[Ht] = Be;
                } else Ke[Be] = 1, Me[Rt] = Be;
                Xn.add(Be);
              }
              mo && console.warn("Duplicate headers found and renamed."), W = !0;
            }
            return { data: ee, errors: de, meta: { delimiter: b, linebreak: x, aborted: q, truncated: !!ye, cursor: fe + (z || 0), renamedHeaders: B } };
          }
          function ze() {
            _(Ce()), ee = [], de = [];
          }
        }, this.abort = function() {
          q = !0;
        }, this.getCharIndex = function() {
          return O;
        };
      }
      function C(v) {
        var b = v.data, x = s[b.workerId], $ = !1;
        if (b.error) x.userError(b.error, b.file);
        else if (b.results && b.results.data) {
          var _ = { abort: function() {
            $ = !0, y(b.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: R, resume: R };
          if (M(x.userStep)) {
            for (var P = 0; P < b.results.data.length && (x.userStep({ data: b.results.data[P], errors: b.results.errors, meta: b.results.meta }, _), !$); P++) ;
            delete b.results;
          } else M(x.userChunk) && (x.userChunk(b.results, _, b.file), delete b.results);
        }
        b.finished && !$ && y(b.workerId, b.results);
      }
      function y(v, b) {
        var x = s[v];
        M(x.userComplete) && x.userComplete(b), x.terminate(), delete s[v];
      }
      function R() {
        throw new Error("Not implemented.");
      }
      function T(v) {
        if (typeof v != "object" || v === null) return v;
        var b, x = Array.isArray(v) ? [] : {};
        for (b in v) x[b] = T(v[b]);
        return x;
      }
      function F(v, b) {
        return function() {
          v.apply(b, arguments);
        };
      }
      function M(v) {
        return typeof v == "function";
      }
      return u.parse = function(v, b) {
        var x = (b = b || {}).dynamicTyping || !1;
        if (M(x) && (b.dynamicTypingFunction = x, x = {}), b.dynamicTyping = x, b.transform = !!M(b.transform) && b.transform, !b.worker || !u.WORKERS_SUPPORTED) return x = null, u.NODE_STREAM_INPUT, typeof v == "string" ? (v = (($) => $.charCodeAt(0) !== 65279 ? $ : $.slice(1))(v), x = new (b.download ? f : d)(b)) : v.readable === !0 && M(v.read) && M(v.on) ? x = new p(b) : (r.File && v instanceof File || v instanceof Object) && (x = new m(b)), x.stream(v);
        (x = (() => {
          var $;
          return !!u.WORKERS_SUPPORTED && ($ = (() => {
            var _ = r.URL || r.webkitURL || null, P = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = _.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", P, ")();"], { type: "text/javascript" })));
          })(), ($ = new r.Worker($)).onmessage = C, $.id = a++, s[$.id] = $);
        })()).userStep = b.step, x.userChunk = b.chunk, x.userComplete = b.complete, x.userError = b.error, b.step = M(b.step), b.chunk = M(b.chunk), b.complete = M(b.complete), b.error = M(b.error), delete b.worker, x.postMessage({ input: v, config: b, workerId: x.id });
      }, u.unparse = function(v, b) {
        var x = !1, $ = !0, _ = ",", P = `\r
`, A = '"', B = A + A, W = !1, H = null, V = !1, O = ((() => {
          if (typeof b == "object") {
            if (typeof b.delimiter != "string" || u.BAD_DELIMITERS.filter(function(z) {
              return b.delimiter.indexOf(z) !== -1;
            }).length || (_ = b.delimiter), typeof b.quotes != "boolean" && typeof b.quotes != "function" && !Array.isArray(b.quotes) || (x = b.quotes), typeof b.skipEmptyLines != "boolean" && typeof b.skipEmptyLines != "string" || (W = b.skipEmptyLines), typeof b.newline == "string" && (P = b.newline), typeof b.quoteChar == "string" && (A = b.quoteChar), typeof b.header == "boolean" && ($ = b.header), Array.isArray(b.columns)) {
              if (b.columns.length === 0) throw new Error("Option columns is empty");
              H = b.columns;
            }
            b.escapeChar !== void 0 && (B = b.escapeChar + A), b.escapeFormulae instanceof RegExp ? V = b.escapeFormulae : typeof b.escapeFormulae == "boolean" && b.escapeFormulae && (V = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(w(A), "g"));
        if (typeof v == "string" && (v = JSON.parse(v)), Array.isArray(v)) {
          if (!v.length || Array.isArray(v[0])) return q(null, v, W);
          if (typeof v[0] == "object") return q(H || Object.keys(v[0]), v, W);
        } else if (typeof v == "object") return typeof v.data == "string" && (v.data = JSON.parse(v.data)), Array.isArray(v.data) && (v.fields || (v.fields = v.meta && v.meta.fields || H), v.fields || (v.fields = Array.isArray(v.data[0]) ? v.fields : typeof v.data[0] == "object" ? Object.keys(v.data[0]) : []), Array.isArray(v.data[0]) || typeof v.data[0] == "object" || (v.data = [v.data])), q(v.fields || [], v.data || [], W);
        throw new Error("Unable to serialize unrecognized input");
        function q(z, I, ie) {
          var te = "", se = (typeof z == "string" && (z = JSON.parse(z)), typeof I == "string" && (I = JSON.parse(I)), Array.isArray(z) && 0 < z.length), oe = !Array.isArray(I[0]);
          if (se && $) {
            for (var U = 0; U < z.length; U++) 0 < U && (te += _), te += N(z[U], U);
            0 < I.length && (te += P);
          }
          for (var ee = 0; ee < I.length; ee++) {
            var de = (se ? z : I[ee]).length, J = !1, fe = se ? Object.keys(I[ee]).length === 0 : I[ee].length === 0;
            if (ie && !se && (J = ie === "greedy" ? I[ee].join("").trim() === "" : I[ee].length === 1 && I[ee][0].length === 0), ie === "greedy" && se) {
              for (var ge = [], L = 0; L < de; L++) {
                var K = oe ? z[L] : L;
                ge.push(I[ee][K]);
              }
              J = ge.join("").trim() === "";
            }
            if (!J) {
              for (var Q = 0; Q < de; Q++) {
                0 < Q && !fe && (te += _);
                var Se = se && oe ? z[Q] : Q;
                te += N(I[ee][Se], Q);
              }
              ee < I.length - 1 && (!ie || 0 < de && !fe) && (te += P);
            }
          }
          return te;
        }
        function N(z, I) {
          var ie, te;
          return z == null ? "" : z.constructor === Date ? JSON.stringify(z).slice(1, 25) : (te = !1, V && typeof z == "string" && V.test(z) && (z = "'" + z, te = !0), ie = z.toString().replace(O, B), (te = te || x === !0 || typeof x == "function" && x(z, I) || Array.isArray(x) && x[I] || ((se, oe) => {
            for (var U = 0; U < oe.length; U++) if (-1 < se.indexOf(oe[U])) return !0;
            return !1;
          })(ie, u.BAD_DELIMITERS) || -1 < ie.indexOf(_) || ie.charAt(0) === " " || ie.charAt(ie.length - 1) === " ") ? A + ie + A : ie);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = S, u.ParserHandle = g, u.NetworkStreamer = f, u.FileStreamer = m, u.StringStreamer = d, u.ReadableStreamStreamer = p, r.jQuery && ((o = r.jQuery).fn.parse = function(v) {
        var b = v.config || {}, x = [];
        return this.each(function(P) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var A = 0; A < this.files.length; A++) x.push({ file: this.files[A], inputElem: this, instanceConfig: o.extend({}, b) });
        }), $(), this;
        function $() {
          if (x.length === 0) M(v.complete) && v.complete();
          else {
            var P, A, B, W, H = x[0];
            if (M(v.before)) {
              var V = v.before(H.file, H.inputElem);
              if (typeof V == "object") {
                if (V.action === "abort") return P = "AbortError", A = H.file, B = H.inputElem, W = V.reason, void (M(v.error) && v.error({ name: P }, A, B, W));
                if (V.action === "skip") return void _();
                typeof V.config == "object" && (H.instanceConfig = o.extend(H.instanceConfig, V.config));
              } else if (V === "skip") return void _();
            }
            var O = H.instanceConfig.complete;
            H.instanceConfig.complete = function(q) {
              M(O) && O(q, H.file, H.inputElem), _();
            }, u.parse(H.file, H.instanceConfig);
          }
        }
        function _() {
          x.splice(0, 1), $();
        }
      }), l && (r.onmessage = function(v) {
        v = v.data, u.WORKER_ID === void 0 && v && (u.WORKER_ID = v.workerId), typeof v.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(v.input, v.config), finished: !0 }) : (r.File && v.input instanceof File || v.input instanceof Object) && (v = u.parse(v.input, v.config)) && r.postMessage({ workerId: u.WORKER_ID, results: v, finished: !0 });
      }), (f.prototype = Object.create(c.prototype)).constructor = f, (m.prototype = Object.create(c.prototype)).constructor = m, (d.prototype = Object.create(d.prototype)).constructor = d, (p.prototype = Object.create(c.prototype)).constructor = p, u;
    });
  }(Sn)), Sn.exports;
}
var _m = $m();
const Im = /* @__PURE__ */ Em(_m);
async function Tm({ file: e }) {
  return new Promise((t, n) => {
    Im.parse(e, {
      skipEmptyLines: !0,
      header: !0,
      complete: (r) => {
        t(r);
      },
      error: (r) => {
        n(r);
      }
    });
  });
}
let lr = 0;
function Mm() {
  return lr = (lr + 1) % Number.MAX_SAFE_INTEGER, `${Date.now()}-${lr}`;
}
async function Om(e, t) {
  const n = dn(e);
  try {
    return t.enabled ? await Fm(e, t) : n;
  } catch {
    return n;
  }
}
function dn(e) {
  return {
    sheetDefinitions: e,
    currentSheetId: e[0].id,
    mode: "upload",
    validationErrors: [],
    validationInProgress: !1,
    sheetData: e.map((t) => ({
      sheetId: t.id,
      rows: []
    })),
    importProgress: 0
  };
}
async function Fm(e, t) {
  const n = await bm(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = dn(e);
  return Ql(r, t.customKey), r;
}
class ts {
  constructor(t, n) {
    be(this, "initialState");
    be(this, "importerDefinition");
    be(this, "buildSteps");
    this.importerDefinition = t, this.initialState = n ?? dn(t.sheets), this.buildSteps = [];
  }
  async getState() {
    let t = this.initialState;
    this.buildSteps.forEach((r) => {
      t = ns(t, r);
    });
    const n = await Xp(
      this.importerDefinition.sheets,
      t.sheetData
    ).catch(() => t.validationErrors);
    return { ...t, validationErrors: n };
  }
  async uploadFile(t) {
    const n = await Cm(
      t,
      this.importerDefinition.customFileLoaders
    ), r = await Tm({ file: n }), o = r.meta.fields, i = this.importerDefinition.customSuggestedMapper != null ? await this.importerDefinition.customSuggestedMapper(
      this.importerDefinition.sheets,
      o
    ) : am(
      this.importerDefinition.sheets,
      o
    );
    this.buildSteps.push({
      type: "FILE_PARSED",
      payload: { parsed: r, rowFile: t }
    }), this.buildSteps.push({
      type: "COLUMN_MAPPING_CHANGED",
      payload: {
        mappings: i
      }
    });
  }
  setEnterDataManually(t) {
    this.buildSteps.push({
      type: "ENTER_DATA_MANUALLY",
      payload: {
        amountOfEmptyRowsToAdd: t ?? Bf
      }
    });
  }
  setMappings(t) {
    this.buildSteps.push({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: t }
    });
  }
  async confirmMappings() {
    const t = await this.getState(), n = im(
      this.importerDefinition.sheets,
      t.columnMappings ?? [],
      t.parsedFile
    ), r = this.importerDefinition.onDataColumnsMapped != null ? await this.importerDefinition.onDataColumnsMapped(n) : n;
    this.buildSteps.push({
      type: "DATA_MAPPED",
      payload: { mappedData: r }
    });
  }
  changeCell(t) {
    this.buildSteps.push({ type: "CELL_CHANGED", payload: t });
  }
  removeRows(t) {
    this.buildSteps.push({ type: "REMOVE_ROWS", payload: t });
  }
}
class fh extends ts {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
}
const On = class On extends ts {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t, n) {
    super(t, n);
  }
  async dispatchChange(t) {
    const n = this.buildSteps.some(
      (o) => On.actionTypesThatRequireValidation.has(o.type)
    ), r = Mm();
    if (n && t({ type: "VALIDATION_STARTED", payload: { runId: r } }), this.buildSteps.forEach((o) => {
      t(o);
    }), n) {
      const o = await this.getState();
      t({
        type: "VALIDATION_COMPLETED",
        payload: { errors: o.validationErrors, runId: r }
      });
    }
  }
};
be(On, "actionTypesThatRequireValidation", /* @__PURE__ */ new Set([
  "DATA_MAPPED",
  "CELL_CHANGED",
  "REMOVE_ROWS"
]));
let Nr = On;
function Pm(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
const ns = (e, t) => {
  switch (t.type) {
    case "ENTER_DATA_MANUALLY": {
      const n = e.sheetDefinitions.map((r) => ({
        sheetId: r.id,
        rows: Array.from(
          { length: t.payload.amountOfEmptyRowsToAdd },
          () => ({})
        )
      }));
      return { ...e, mode: "preview", sheetData: n };
    }
    case "FILE_PARSED":
      return {
        ...e,
        parsedFile: t.payload.parsed,
        rowFile: t.payload.rowFile,
        mode: "mapping"
      };
    case "UPLOAD":
      return { ...e, mode: "upload" };
    case "COLUMN_MAPPING_CHANGED":
      return {
        ...e,
        columnMappings: t.payload.mappings
      };
    case "DATA_MAPPED":
      return {
        ...e,
        sheetData: Pr(
          e.sheetDefinitions,
          t.payload.mappedData
        ),
        mode: "preview"
      };
    case "CELL_CHANGED": {
      const r = e.sheetData.map((o) => {
        if (o.sheetId === t.payload.sheetId) {
          const i = [...o.rows];
          return i[t.payload.rowIndex] = Pm(
            t.payload.value,
            t.payload,
            e
          ), { ...o, rows: i };
        } else
          return o;
      });
      return {
        ...e,
        sheetData: Pr(e.sheetDefinitions, r)
      };
    }
    case "REMOVE_ROWS": {
      const n = e.sheetData.map((r) => r.sheetId === t.payload.sheetId ? {
        ...r,
        rows: r.rows.filter(
          (o) => !t.payload.rows.includes(o)
        )
      } : r);
      return {
        ...e,
        sheetData: n
      };
    }
    case "ADD_EMPTY_ROW": {
      const n = e.sheetData.map((r) => r.sheetId !== e.currentSheetId ? r : {
        ...r,
        rows: [...r.rows, {}]
      });
      return { ...e, sheetData: n };
    }
    case "SHEET_CHANGED":
      return { ...e, currentSheetId: t.payload.sheetId };
    case "SUBMIT":
      return { ...e, mode: "submit" };
    case "PROGRESS":
      return { ...e, importProgress: t.payload.progress };
    case "COMPLETED":
      return {
        ...e,
        mode: "completed",
        importStatistics: t.payload.importStatistics
      };
    case "FAILED":
      return { ...e, mode: "failed" };
    case "PREVIEW":
      return { ...e, mode: "preview" };
    case "MAPPING":
      return { ...e, mode: "mapping" };
    case "RESET":
      return dn(e.sheetDefinitions);
    case "SET_STATE":
      return t.payload.state;
    case "VALIDATION_STARTED":
      return {
        ...e,
        validationInProgress: !0,
        validationRunId: t.payload.runId
      };
    case "VALIDATION_COMPLETED":
      return e.validationRunId !== t.payload.runId ? e : {
        ...e,
        validationErrors: t.payload.errors,
        validationInProgress: !1,
        validationRunId: void 0
      };
    default:
      return e;
  }
}, Am = (e, t, n) => {
  const [r, o] = Pn(
    ns,
    n ?? dn(e)
  );
  return le(() => {
    const i = async () => {
      const l = await Om(e, t);
      o({ type: "SET_STATE", payload: { state: l } });
    };
    n == null && i();
  }, []), le(() => {
    t.enabled && Ql(r, t.customKey);
  }, [r, t]), [r, o];
}, rs = me({}), os = me(
  {}
);
function Nm({
  sheets: e,
  persistenceConfig: t,
  initialState: n,
  onStateChanged: r,
  children: o
}) {
  const [i, l] = Am(
    e,
    t,
    n
  ), s = G(i);
  return le(() => {
    s.current !== i && (r == null || r(s.current, i), s.current = i);
  }, [i, r]), /* @__PURE__ */ h(rs.Provider, { value: i, children: /* @__PURE__ */ h(os.Provider, { value: l, children: o }) });
}
function Qe() {
  return ce(rs);
}
function km() {
  return ce(os);
}
function Dm({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = Qe(), { sheets: i } = De(), { t: l } = he(), [s, a] = Z(null), u = r ?? [], c = o, f = c.data, m = c.meta.fields, d = mm(
    i,
    u
  ), p = hm(
    i,
    u
  ), g = re(() => s ? cm(f, s) : [], [s, f]), [w, S] = Z(!1);
  async function C() {
    try {
      S(!0), await t();
    } finally {
      S(!1);
    }
  }
  return /* @__PURE__ */ k("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ h("div", { className: "flex-none text-2xl", children: l("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ h("div", { className: "min-h-0 flex-auto", children: /* @__PURE__ */ k("div", { className: "flex h-full justify-between space-x-5", children: [
      /* @__PURE__ */ k("div", { className: "flex flex-2 flex-col", children: [
        /* @__PURE__ */ k("div", { className: "my-5 flex text-sm font-light uppercase", children: [
          /* @__PURE__ */ h("div", { className: "flex-1", children: l("mapper.importedColumn") }),
          /* @__PURE__ */ h("div", { className: "flex-1", children: l("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ h("div", { className: "flex-1 overflow-y-auto", children: m.map((y, R) => {
          const T = u.find(
            (F) => F.csvColumnName === y
          ) ?? null;
          return /* @__PURE__ */ h(
            wm,
            {
              csvHeader: y,
              currentMapping: T,
              setMapping: (F) => {
                const M = um(
                  u,
                  y,
                  F
                );
                e(M);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(y);
              }
            },
            R
          );
        }) })
      ] }),
      /* @__PURE__ */ h("div", { className: "bg-hello-csv-muted hidden flex-1 overflow-y-auto sm:block", children: /* @__PURE__ */ h(
        vm,
        {
          examples: g,
          csvHeader: s ?? ""
        }
      ) })
    ] }) }),
    !p && /* @__PURE__ */ h("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ h(Fp, { children: l("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ h("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ k("div", { className: "mt-5 flex justify-between", children: [
      /* @__PURE__ */ h(
        ke,
        {
          variant: "secondary",
          outline: !0,
          onClick: n,
          disabled: w,
          children: l("mapper.back")
        }
      ),
      /* @__PURE__ */ h(
        ke,
        {
          onClick: C,
          disabled: !p || w,
          children: /* @__PURE__ */ k("div", { className: "flex items-center", children: [
            w && /* @__PURE__ */ k(Yt, { children: [
              /* @__PURE__ */ h(Wl, { color: "light" }),
              /* @__PURE__ */ h("div", { className: "mr-2" })
            ] }),
            l("mapper.confirm")
          ] })
        }
      )
    ] }) })
  ] });
}
var Lm = { NODE_ENV: "production" };
function ot(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ae(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: ot(n, r[e])
    }));
  };
}
function Yn(e) {
  return e instanceof Function;
}
function Vm(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Hm(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const l = t(i);
      l != null && l.length && r(l);
    });
  };
  return r(e), n;
}
function Y(e, t, n) {
  let r = [], o;
  return (i) => {
    let l;
    n.key && n.debug && (l = Date.now());
    const s = e(i);
    if (!(s.length !== r.length || s.some((c, f) => r[f] !== c)))
      return o;
    r = s;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const c = Math.round((Date.now() - l) * 100) / 100, f = Math.round((Date.now() - u) * 100) / 100, m = f / 16, d = (p, g) => {
        for (p = String(p); p.length < g; )
          p = " " + p;
        return p;
      };
      console.info(`%c⏱ ${d(f, 5)} /${d(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * m, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function X(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: Lm.NODE_ENV === "development",
    onChange: r
  };
}
function zm(e, t, n, r) {
  const o = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: Y(() => [e, n, t, i], (l, s, a, u) => ({
      table: l,
      column: s,
      row: a,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), X(e.options, "debugCells"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, n, t, e);
  }, {}), i;
}
function Bm(e, t, n, r) {
  var o, i;
  const s = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = s.accessorKey;
  let u = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, c;
  if (s.accessorFn ? c = s.accessorFn : a && (a.includes(".") ? c = (m) => {
    let d = m;
    for (const g of a.split(".")) {
      var p;
      d = (p = d) == null ? void 0 : p[g];
    }
    return d;
  } : c = (m) => m[s.accessorKey]), !u)
    throw new Error();
  let f = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: Y(() => [!0], () => {
      var m;
      return [f, ...(m = f.columns) == null ? void 0 : m.flatMap((d) => d.getFlatColumns())];
    }, X(e.options, "debugColumns")),
    getLeafColumns: Y(() => [e._getOrderColumnsFn()], (m) => {
      var d;
      if ((d = f.columns) != null && d.length) {
        let p = f.columns.flatMap((g) => g.getLeafColumns());
        return m(p);
      }
      return [f];
    }, X(e.options, "debugColumns"))
  };
  for (const m of e._features)
    m.createColumn == null || m.createColumn(f, e);
  return f;
}
const Ee = "debugHeaders";
function ei(e, t, n) {
  var r;
  let i = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [], s = (a) => {
        a.subHeaders && a.subHeaders.length && a.subHeaders.map(s), l.push(a);
      };
      return s(i), l;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const jm = {
  createTable: (e) => {
    e.getHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, l;
      const s = (i = r == null ? void 0 : r.map((f) => n.find((m) => m.id === f)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((f) => n.find((m) => m.id === f)).filter(Boolean)) != null ? l : [], u = n.filter((f) => !(r != null && r.includes(f.id)) && !(o != null && o.includes(f.id)));
      return vn(t, [...s, ...u, ...a], e);
    }, X(e.options, Ee)), e.getCenterHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), vn(t, n, e, "center")), X(e.options, Ee)), e.getLeftHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return vn(t, i, e, "left");
    }, X(e.options, Ee)), e.getRightHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return vn(t, i, e, "right");
    }, X(e.options, Ee)), e.getFooterGroups = Y(() => [e.getHeaderGroups()], (t) => [...t].reverse(), X(e.options, Ee)), e.getLeftFooterGroups = Y(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), X(e.options, Ee)), e.getCenterFooterGroups = Y(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), X(e.options, Ee)), e.getRightFooterGroups = Y(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), X(e.options, Ee)), e.getFlatHeaders = Y(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Ee)), e.getLeftFlatHeaders = Y(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Ee)), e.getCenterFlatHeaders = Y(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Ee)), e.getRightFlatHeaders = Y(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, Ee)), e.getCenterLeafHeaders = Y(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Ee)), e.getLeftLeafHeaders = Y(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Ee)), e.getRightLeafHeaders = Y(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, Ee)), e.getLeafHeaders = Y(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, l, s, a, u;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []].map((c) => c.getLeafHeaders()).flat();
    }, X(e.options, Ee));
  }
};
function vn(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(m, d) {
    d === void 0 && (d = 1), l = Math.max(l, d), m.filter((p) => p.getIsVisible()).forEach((p) => {
      var g;
      (g = p.columns) != null && g.length && s(p.columns, d + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const u = (m, d) => {
    const p = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, g = [];
    m.forEach((w) => {
      const S = [...g].reverse()[0], C = w.column.depth === p.depth;
      let y, R = !1;
      if (C && w.column.parent ? y = w.column.parent : (y = w.column, R = !0), S && (S == null ? void 0 : S.column) === y)
        S.subHeaders.push(w);
      else {
        const T = ei(n, y, {
          id: [r, d, y.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: R,
          placeholderId: R ? `${g.filter((F) => F.column === y).length}` : void 0,
          depth: d,
          index: g.length
        });
        T.subHeaders.push(w), g.push(T);
      }
      p.headers.push(w), w.headerGroup = p;
    }), a.push(p), d > 0 && u(g, d - 1);
  }, c = t.map((m, d) => ei(n, m, {
    depth: l,
    index: d
  }));
  u(c, l - 1), a.reverse();
  const f = (m) => m.filter((p) => p.column.getIsVisible()).map((p) => {
    let g = 0, w = 0, S = [0];
    p.subHeaders && p.subHeaders.length ? (S = [], f(p.subHeaders).forEach((y) => {
      let {
        colSpan: R,
        rowSpan: T
      } = y;
      g += R, S.push(T);
    })) : g = 1;
    const C = Math.min(...S);
    return w = w + C, p.colSpan = g, p.rowSpan = w, {
      colSpan: g,
      rowSpan: w
    };
  });
  return f((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const Gm = (e, t, n, r, o, i, l) => {
  let s = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: l,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (a) => {
      if (s._valuesCache.hasOwnProperty(a))
        return s._valuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return s._valuesCache[a] = u.accessorFn(s.original, r), s._valuesCache[a];
    },
    getUniqueValues: (a) => {
      if (s._uniqueValuesCache.hasOwnProperty(a))
        return s._uniqueValuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (s._uniqueValuesCache[a] = u.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[a]) : (s._uniqueValuesCache[a] = [s.getValue(a)], s._uniqueValuesCache[a]);
    },
    renderValue: (a) => {
      var u;
      return (u = s.getValue(a)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Hm(s.subRows, (a) => a.subRows),
    getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
    getParentRows: () => {
      let a = [], u = s;
      for (; ; ) {
        const c = u.getParentRow();
        if (!c) break;
        a.push(c), u = c;
      }
      return a.reverse();
    },
    getAllCells: Y(() => [e.getAllLeafColumns()], (a) => a.map((u) => zm(e, s, u, u.id)), X(e.options, "debugRows")),
    _getAllCellsByColumnId: Y(() => [s.getAllCells()], (a) => a.reduce((u, c) => (u[c.column.id] = c, u), {}), X(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, Wm = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, is = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
is.autoRemove = (e) => Le(e);
const ls = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
ls.autoRemove = (e) => Le(e);
const ss = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ss.autoRemove = (e) => Le(e);
const as = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
as.autoRemove = (e) => Le(e);
const us = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
us.autoRemove = (e) => Le(e) || !(e != null && e.length);
const cs = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
cs.autoRemove = (e) => Le(e) || !(e != null && e.length);
const ds = (e, t, n) => e.getValue(t) === n;
ds.autoRemove = (e) => Le(e);
const fs = (e, t, n) => e.getValue(t) == n;
fs.autoRemove = (e) => Le(e);
const co = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
co.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
co.autoRemove = (e) => Le(e) || Le(e[0]) && Le(e[1]);
const Ye = {
  includesString: is,
  includesStringSensitive: ls,
  equalsString: ss,
  arrIncludes: as,
  arrIncludesAll: us,
  arrIncludesSome: cs,
  equals: ds,
  weakEquals: fs,
  inNumberRange: co
};
function Le(e) {
  return e == null || e === "";
}
const Um = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ae("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? Ye.includesString : typeof r == "number" ? Ye.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Ye.equals : Array.isArray(r) ? Ye.arrIncludes : Ye.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Yn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Ye[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, r, o;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((r = t.options.enableColumnFilters) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, r;
      return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((r) => {
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((c) => c.id === e.id), l = ot(n, i ? i.value : void 0);
        if (ti(o, l, e)) {
          var s;
          return (s = r == null ? void 0 : r.filter((c) => c.id !== e.id)) != null ? s : [];
        }
        const a = {
          id: e.id,
          value: l
        };
        if (i) {
          var u;
          return (u = r == null ? void 0 : r.map((c) => c.id === e.id ? a : c)) != null ? u : [];
        }
        return r != null && r.length ? [...r, a] : [a];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), r = (o) => {
        var i;
        return (i = ot(t, o)) == null ? void 0 : i.filter((l) => {
          const s = n.find((a) => a.id === l.id);
          if (s) {
            const a = s.getFilterFn();
            if (ti(a, l.value, s))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (t) => {
      var n, r;
      e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function ti(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const qm = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Km = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Ym = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Xm = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, Zm = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Jm = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Vm(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Qm = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), eg = (e, t) => new Set(t.map((n) => n.getValue(e))).size, tg = (e, t) => t.length, sr = {
  sum: qm,
  min: Km,
  max: Ym,
  extent: Xm,
  mean: Zm,
  median: Jm,
  unique: Qm,
  uniqueCount: eg,
  count: tg
}, ng = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: Ae("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, r;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((r = t.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      if (typeof r == "number")
        return sr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return sr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Yn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : sr[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, r;
      e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const r = t.getColumn(n);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, r) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
    };
  }
};
function rg(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const og = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ae("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = Y((n) => [Kt(t, n)], (n) => n.findIndex((r) => r.id === e.id), X(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = Kt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = Kt(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = Y(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const l = [...t], s = [...o];
        for (; s.length && l.length; ) {
          const a = l.shift(), u = s.findIndex((c) => c.id === a);
          u > -1 && i.push(s.splice(u, 1)[0]);
        }
        i = [...i, ...s];
      }
      return rg(i, n, r);
    }, X(e.options, "debugTable"));
  }
}, ar = () => ({
  left: [],
  right: []
}), ig = {
  getInitialState: (e) => ({
    columnPinning: ar(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ae("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, l;
        if (n === "right") {
          var s, a;
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((f) => !(r != null && r.includes(f))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((f) => !(r != null && r.includes(f))), ...r]
          };
        }
        if (n === "left") {
          var u, c;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((f) => !(r != null && r.includes(f))), ...r],
            right: ((c = o == null ? void 0 : o.right) != null ? c : []).filter((f) => !(r != null && r.includes(f)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((f) => !(r != null && r.includes(f))),
          right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((f) => !(r != null && r.includes(f)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, l;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (l = t.options.enableColumnPinning) != null ? l : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((s) => s.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
      return i ? "left" : l ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((l) => !i.includes(l.column.id));
    }, X(t.options, "debugRows")), e.getLeftVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), X(t.options, "debugRows")), e.getRightVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), X(t.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? ar() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : ar());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns")), e.getRightLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns")), e.getCenterLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, X(e.options, "debugColumns"));
  }
}, wn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, ur = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), lg = {
  getDefaultColumnDef: () => wn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: ur(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ae("columnSizing", e),
    onColumnSizingInfoChange: Ae("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : wn.minSize, (r = i ?? e.columnDef.size) != null ? r : wn.size), (o = e.columnDef.maxSize) != null ? o : wn.maxSize);
    }, e.getStart = Y((n) => [n, Kt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.getAfter = Y((n) => [n, Kt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: r,
          ...o
        } = n;
        return o;
      });
    }, e.getCanResize = () => {
      var n, r;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((r = t.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var i;
          n += (i = o.column.getSize()) != null ? i : 0;
        }
      };
      return r(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (i) => {
        if (!r || !o || (i.persist == null || i.persist(), cr(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((S) => [S.column.id, S.column.getSize()]) : [[r.id, r.getSize()]], a = cr(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (S, C) => {
          typeof C == "number" && (t.setColumnSizingInfo((y) => {
            var R, T;
            const F = t.options.columnResizeDirection === "rtl" ? -1 : 1, M = (C - ((R = y == null ? void 0 : y.startOffset) != null ? R : 0)) * F, v = Math.max(M / ((T = y == null ? void 0 : y.startSize) != null ? T : 0), -0.999999);
            return y.columnSizingStart.forEach((b) => {
              let [x, $] = b;
              u[x] = Math.round(Math.max($ + $ * v, 0) * 100) / 100;
            }), {
              ...y,
              deltaOffset: M,
              deltaPercentage: v
            };
          }), (t.options.columnResizeMode === "onChange" || S === "end") && t.setColumnSizing((y) => ({
            ...y,
            ...u
          })));
        }, f = (S) => c("move", S), m = (S) => {
          c("end", S), t.setColumnSizingInfo((C) => ({
            ...C,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, d = n || typeof document < "u" ? document : null, p = {
          moveHandler: (S) => f(S.clientX),
          upHandler: (S) => {
            d == null || d.removeEventListener("mousemove", p.moveHandler), d == null || d.removeEventListener("mouseup", p.upHandler), m(S.clientX);
          }
        }, g = {
          moveHandler: (S) => (S.cancelable && (S.preventDefault(), S.stopPropagation()), f(S.touches[0].clientX), !1),
          upHandler: (S) => {
            var C;
            d == null || d.removeEventListener("touchmove", g.moveHandler), d == null || d.removeEventListener("touchend", g.upHandler), S.cancelable && (S.preventDefault(), S.stopPropagation()), m((C = S.touches[0]) == null ? void 0 : C.clientX);
          }
        }, w = sg() ? {
          passive: !1
        } : !1;
        cr(i) ? (d == null || d.addEventListener("touchmove", g.moveHandler, w), d == null || d.addEventListener("touchend", g.upHandler, w)) : (d == null || d.addEventListener("mousemove", p.moveHandler, w), d == null || d.addEventListener("mouseup", p.upHandler, w)), t.setColumnSizingInfo((S) => ({
          ...S,
          startOffset: a,
          startSize: l,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: s,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? ur() : (n = e.initialState.columnSizingInfo) != null ? n : ur());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    };
  }
};
let bn = null;
function sg() {
  if (typeof bn == "boolean") return bn;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return bn = e, bn;
}
function cr(e) {
  return e.type === "touchstart";
}
const ag = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ae("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((r) => ({
        ...r,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, r;
      const o = e.columns;
      return (n = o.length ? o.some((i) => i.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = Y(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), X(t.options, "debugRows")), e.getVisibleCells = Y(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], X(t.options, "debugRows"));
  },
  createTable: (e) => {
    const t = (n, r) => Y(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), X(e.options, "debugColumns"));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({
        ...o,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function Kt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const ug = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, cg = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ae("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => Ye.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return Yn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Ye[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, dg = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ae("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, i;
      e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const l = i.split(".");
        r = Math.max(r, l.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let l = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((s) => {
          l[s] = !0;
        }) : l = r, n = (o = n) != null ? o : !i, !i && n)
          return {
            ...l,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: s,
            ...a
          } = l;
          return a;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var n;
      const r = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var n, r, o;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, r = e;
      for (; n && r.parentId; )
        r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, kr = 0, Dr = 10, dr = () => ({
  pageIndex: kr,
  pageSize: Dr
}), fg = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...dr(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ae("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (i) => ot(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? dr() : (o = e.initialState.pagination) != null ? o : dr());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = ot(r, o.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? kr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : kr);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? Dr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Dr);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, ot(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
        return {
          ...o,
          pageIndex: s,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let l = ot(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...o,
        pageCount: l
      };
    }), e.getPageOptions = Y(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, l) => l)), o;
    }, X(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, fr = () => ({
  top: [],
  bottom: []
}), pg = {
  getInitialState: (e) => ({
    rowPinning: fr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ae("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], l = o ? e.getParentRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], s = /* @__PURE__ */ new Set([...l, e.id, ...i]);
      t.setRowPinning((a) => {
        var u, c;
        if (n === "bottom") {
          var f, m;
          return {
            top: ((f = a == null ? void 0 : a.top) != null ? f : []).filter((g) => !(s != null && s.has(g))),
            bottom: [...((m = a == null ? void 0 : a.bottom) != null ? m : []).filter((g) => !(s != null && s.has(g))), ...Array.from(s)]
          };
        }
        if (n === "top") {
          var d, p;
          return {
            top: [...((d = a == null ? void 0 : a.top) != null ? d : []).filter((g) => !(s != null && s.has(g))), ...Array.from(s)],
            bottom: ((p = a == null ? void 0 : a.bottom) != null ? p : []).filter((g) => !(s != null && s.has(g)))
          };
        }
        return {
          top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter((g) => !(s != null && s.has(g))),
          bottom: ((c = a == null ? void 0 : a.bottom) != null ? c : []).filter((g) => !(s != null && s.has(g)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = t.options;
      return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: r,
        bottom: o
      } = t.getState().rowPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
      return i ? "top" : l ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((l) => {
        let {
          id: s
        } = l;
        return s;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? fr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : fr());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, i;
        return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((l) => {
          const s = e.getRow(l, !0);
          return s.getIsAllParentsExpanded() ? s : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((l) => t.find((s) => s.id === l))
      )).filter(Boolean).map((l) => ({
        ...l,
        position: r
      }));
    }, e.getTopRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), X(e.options, "debugRows")), e.getBottomRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), X(e.options, "debugRows")), e.getCenterRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, X(e.options, "debugRows"));
  }
}, mg = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ae("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const r = {
          ...n
        }, o = e.getPreGroupedRowModel().flatRows;
        return t ? o.forEach((i) => {
          i.getCanSelect() && (r[i.id] = !0);
        }) : o.forEach((i) => {
          delete r[i.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        Lr(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Y(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getFilteredSelectedRowModel = Y(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getGroupedSelectedRowModel = Y(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let r = !!(t.length && Object.keys(n).length);
      return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let r = !!t.length;
      return r && t.some((o) => !n[o.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, r) => {
      const o = e.getIsSelected();
      t.setRowSelection((i) => {
        var l;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return i;
        const s = {
          ...i
        };
        return Lr(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return fo(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Vr(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Vr(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (r) => {
        var o;
        n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, Lr = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, !0);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => Lr(e, s.id, n, r, o));
};
function pr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var u;
      const c = fo(a, n);
      if (c && (r.push(a), o[a.id] = a), (u = a.subRows) != null && u.length && (a = {
        ...a,
        subRows: i(a.subRows)
      }), c)
        return a;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function fo(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Vr(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (fo(l, t) ? i = !0 : o = !1), l.subRows && l.subRows.length)) {
      const s = Vr(l, t);
      s === "all" ? i = !0 : (s === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Hr = /([0-9]+)/gm, gg = (e, t, n) => ps(at(e.getValue(n)).toLowerCase(), at(t.getValue(n)).toLowerCase()), hg = (e, t, n) => ps(at(e.getValue(n)), at(t.getValue(n))), vg = (e, t, n) => po(at(e.getValue(n)).toLowerCase(), at(t.getValue(n)).toLowerCase()), wg = (e, t, n) => po(at(e.getValue(n)), at(t.getValue(n))), bg = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, yg = (e, t, n) => po(e.getValue(n), t.getValue(n));
function po(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function at(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ps(e, t) {
  const n = e.split(Hr).filter(Boolean), r = t.split(Hr).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), l = parseInt(o, 10), s = parseInt(i, 10), a = [l, s].sort();
    if (isNaN(a[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(a[1]))
      return isNaN(l) ? -1 : 1;
    if (l > s)
      return 1;
    if (s > l)
      return -1;
  }
  return n.length - r.length;
}
const jt = {
  alphanumeric: gg,
  alphanumericCaseSensitive: hg,
  text: vg,
  textCaseSensitive: wg,
  datetime: bg,
  basic: yg
}, xg = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ae("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return jt.datetime;
        if (typeof i == "string" && (r = !0, i.split(Hr).length > 1))
          return jt.alphanumeric;
      }
      return r ? jt.text : jt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Yn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : jt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((l) => {
        const s = l == null ? void 0 : l.find((d) => d.id === e.id), a = l == null ? void 0 : l.findIndex((d) => d.id === e.id);
        let u = [], c, f = i ? n : o === "desc";
        if (l != null && l.length && e.getCanMultiSort() && r ? s ? c = "toggle" : c = "add" : l != null && l.length && a !== l.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (i || o || (c = "remove")), c === "add") {
          var m;
          u = [...l, {
            id: e.id,
            desc: f
          }], u.splice(0, u.length - ((m = t.options.maxMultiSortColCount) != null ? m : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = l.map((d) => d.id === e.id ? {
          ...d,
          desc: f
        } : d) : c === "remove" ? u = l.filter((d) => d.id !== e.id) : u = [{
          id: e.id,
          desc: f
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const i = e.getFirstSortDir(), l = e.getIsSorted();
      return l ? l !== i && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : l === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var n, r;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((r = t.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, r;
      return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, r;
      return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (r) => {
        n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, r;
      e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Sg = [
  jm,
  ag,
  og,
  ig,
  Wm,
  Um,
  ug,
  //depends on ColumnFaceting
  cg,
  //depends on ColumnFiltering
  xg,
  ng,
  //depends on RowSorting
  dg,
  fg,
  pg,
  mg,
  lg
];
function Cg(e) {
  var t, n;
  const r = [...Sg, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((m, d) => Object.assign(m, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(o)), {}), l = (m) => o.options.mergeOptions ? o.options.mergeOptions(i, m) : {
    ...i,
    ...m
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((m) => {
    var d;
    a = (d = m.getInitialState == null ? void 0 : m.getInitialState(a)) != null ? d : a;
  });
  const u = [];
  let c = !1;
  const f = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: a,
    _queue: (m) => {
      u.push(m), c || (c = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        c = !1;
      }).catch((d) => setTimeout(() => {
        throw d;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (m) => {
      const d = ot(m, o.options);
      o.options = l(d);
    },
    getState: () => o.options.state,
    setState: (m) => {
      o.options.onStateChange == null || o.options.onStateChange(m);
    },
    _getRowId: (m, d, p) => {
      var g;
      return (g = o.options.getRowId == null ? void 0 : o.options.getRowId(m, d, p)) != null ? g : `${p ? [p.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (m, d) => {
      let p = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[m];
      if (!p && (p = o.getCoreRowModel().rowsById[m], !p))
        throw new Error();
      return p;
    },
    _getDefaultColumnDef: Y(() => [o.options.defaultColumn], (m) => {
      var d;
      return m = (d = m) != null ? d : {}, {
        header: (p) => {
          const g = p.header.column.columnDef;
          return g.accessorKey ? g.accessorKey : g.accessorFn ? g.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (p) => {
          var g, w;
          return (g = (w = p.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? g : null;
        },
        ...o._features.reduce((p, g) => Object.assign(p, g.getDefaultColumnDef == null ? void 0 : g.getDefaultColumnDef()), {}),
        ...m
      };
    }, X(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: Y(() => [o._getColumnDefs()], (m) => {
      const d = function(p, g, w) {
        return w === void 0 && (w = 0), p.map((S) => {
          const C = Bm(o, S, w, g), y = S;
          return C.columns = y.columns ? d(y.columns, C, w + 1) : [], C;
        });
      };
      return d(m);
    }, X(e, "debugColumns")),
    getAllFlatColumns: Y(() => [o.getAllColumns()], (m) => m.flatMap((d) => d.getFlatColumns()), X(e, "debugColumns")),
    _getAllFlatColumnsById: Y(() => [o.getAllFlatColumns()], (m) => m.reduce((d, p) => (d[p.id] = p, d), {}), X(e, "debugColumns")),
    getAllLeafColumns: Y(() => [o.getAllColumns(), o._getOrderColumnsFn()], (m, d) => {
      let p = m.flatMap((g) => g.getLeafColumns());
      return d(p);
    }, X(e, "debugColumns")),
    getColumn: (m) => o._getAllFlatColumnsById()[m]
  };
  Object.assign(o, f);
  for (let m = 0; m < o._features.length; m++) {
    const d = o._features[m];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function Eg() {
  return (e) => Y(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let u = 0; u < o.length; u++) {
        const c = Gm(e, e._getRowId(o[u], u, l), o[u], u, i, void 0, l == null ? void 0 : l.id);
        if (n.flatRows.push(c), n.rowsById[c.id] = c, s.push(c), e.options.getSubRows) {
          var a;
          c.originalSubRows = e.options.getSubRows(o[u], u), (a = c.originalSubRows) != null && a.length && (c.subRows = r(c.originalSubRows, i + 1, c));
        }
      }
      return s;
    };
    return n.rows = r(t), n;
  }, X(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Rg() {
  return (e) => Y(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], i = r.filter((a) => {
      var u;
      return (u = e.getColumn(a.id)) == null ? void 0 : u.getCanSort();
    }), l = {};
    i.forEach((a) => {
      const u = e.getColumn(a.id);
      u && (l[a.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const s = (a) => {
      const u = a.map((c) => ({
        ...c
      }));
      return u.sort((c, f) => {
        for (let d = 0; d < i.length; d += 1) {
          var m;
          const p = i[d], g = l[p.id], w = g.sortUndefined, S = (m = p == null ? void 0 : p.desc) != null ? m : !1;
          let C = 0;
          if (w) {
            const y = c.getValue(p.id), R = f.getValue(p.id), T = y === void 0, F = R === void 0;
            if (T || F) {
              if (w === "first") return T ? -1 : 1;
              if (w === "last") return T ? 1 : -1;
              C = T && F ? 0 : T ? w : -w;
            }
          }
          if (C === 0 && (C = g.sortingFn(c, f, p.id)), C !== 0)
            return S && (C *= -1), g.invertSorting && (C *= -1), C;
        }
        return c.index - f.index;
      }), u.forEach((c) => {
        var f;
        o.push(c), (f = c.subRows) != null && f.length && (c.subRows = s(c.subRows));
      }), u;
    };
    return {
      rows: s(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, X(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function ni(e, t) {
  return e ? $g(e) ? /* @__PURE__ */ E.createElement(e, t) : e : null;
}
function $g(e) {
  return _g(e) || typeof e == "function" || Ig(e);
}
function _g(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Ig(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Tg(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = E.useState(() => ({
    current: Cg(t)
  })), [r, o] = E.useState(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (l) => {
      o(l), e.onStateChange == null || e.onStateChange(l);
    }
  })), n.current;
}
const Mg = 500, ri = 10;
function Og(e, { disabled: t = !1 } = {}) {
  const n = G(null), r = G(0), o = G(0), i = G(!1), l = ue(
    (u) => {
      if (t) return;
      const c = u.touches[0];
      r.current = c.clientX, o.current = c.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, Mg);
    },
    [e, t]
  ), s = ue(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = ue(
    (u) => {
      const c = u.touches[0], f = Math.abs(c.clientX - r.current), m = Math.abs(c.clientY - o.current);
      (f > ri || m > ri) && (i.current = !0, s());
    },
    [s]
  );
  return {
    onTouchStart: l,
    onTouchMove: a,
    onTouchEnd: s,
    onTouchCancel: s,
    onMouseLeave: s
  };
}
function Fg({
  rowId: e,
  columnDefinition: t,
  value: n,
  onUpdated: r,
  allData: o,
  clearRowsSelection: i,
  errorsText: l,
  enumLabelDict: s
}) {
  const { t: a } = he(), { availableActions: u } = De(), [c, f] = Z(!1), m = G(null);
  le(() => {
    c && (i(), m.current && m.current.focus());
  }, [c]);
  const { displayValue: d, valueEmpty: p } = qp(
    t,
    n,
    s
  ), g = Kl(t) || !u.includes("editRows"), w = Og(
    () => {
      g || f(!0);
    },
    { disabled: g }
  ), S = l ? "bg-hello-csv-destructive/10" : g ? "bg-hello-csv-muted" : "";
  if (!c)
    return /* @__PURE__ */ h(
      cp,
      {
        variant: l ? "error" : "info",
        tooltipText: l || (g ? a("sheet.readOnly") : ""),
        children: /* @__PURE__ */ h(
          "div",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": `row ${Number(e) + 1} ${t.label} ${d}`,
            ...w,
            onClick: (y) => !g && y.detail > 1 && f(!0),
            className: `h-full w-full py-4 pr-3 pl-4 ${S} touch-manipulation truncate overflow-hidden whitespace-nowrap`,
            title: p ? void 0 : `${d}`,
            children: t.customRender ? t.customRender(n, d) : d
          }
        )
      }
    );
  function C(y) {
    f(!1), t.type === "number" && y !== "" && !isNaN(Number(y)) ? r(Number(y)) : r(y ?? "");
  }
  if (t.type === "boolean") {
    const y = [!0, !1].map((R) => {
      var T, F;
      return {
        label: R ? ((T = t.typeArguments) == null ? void 0 : T.trueLabel) ?? kl : ((F = t.typeArguments) == null ? void 0 : F.falseLabel) ?? Dl,
        value: R
      };
    });
    return /* @__PURE__ */ h(
      Mt,
      {
        options: y,
        value: n,
        onChange: (R) => C(R ?? "")
      }
    );
  }
  if (t.type === "reference") {
    const y = Ul(
      t,
      o
    ), R = lo(t, s), T = y.map((F) => ({
      label: String(Mn(R, F)),
      value: F
    }));
    return /* @__PURE__ */ h(
      Mt,
      {
        searchable: !0,
        options: T,
        value: n,
        onChange: (F) => C(F ?? "")
      }
    );
  }
  if (t.type === "enum") {
    const R = t.typeArguments.values;
    return /* @__PURE__ */ h(
      Mt,
      {
        searchable: !0,
        options: R,
        value: n,
        onChange: (T) => C(T ?? "")
      }
    );
  }
  return /* @__PURE__ */ h(
    Vl,
    {
      "aria-label": `edit row ${Number(e) + 1}'s ${t.label}`,
      type: t.type === "number" ? "number" : "text",
      classes: "block w-full",
      value: n,
      onBlur: C,
      ref: m
    }
  );
}
function Pg({
  table: e,
  sheetDefinition: t,
  allData: n,
  sheetValidationErrors: r,
  onCellValueChanged: o,
  setSelectedRows: i,
  tableContainerRef: l,
  enumLabelDict: s
}) {
  const { t: a } = he(), { availableActions: u } = De();
  function c(y, R) {
    return r.filter(
      (T) => T.columnId === y && T.rowIndex === R
    );
  }
  const f = "bg-hello-csv-muted h-10 px-2 text-left align-middle text-sm font-medium whitespace-nowrap text-hello-csv-muted-foreground border-b border-hello-csv-border", m = "text-sm whitespace-nowrap text-hello-csv-foreground border-b border-hello-csv-border p-2 align-middle", d = e.getRowModel().rows, p = Ai({
    count: d.length,
    getScrollElement: () => l.current,
    estimateSize: () => Uf,
    measureElement: (y) => y == null ? void 0 : y.getBoundingClientRect().height,
    overscan: 20
  }), g = p.getVirtualItems().map((y) => ({
    row: d[y.index],
    index: y.index,
    start: y.start,
    end: y.end
  })), [w, S] = g.length > 0 ? [
    Math.max(
      0,
      g[0].start - p.options.scrollMargin
    ),
    Math.max(
      0,
      p.getTotalSize() - g[g.length - 1].end
    )
  ] : [0, 0], C = ue(
    (y) => {
      y && p.measureElement(y);
    },
    [p]
  );
  return /* @__PURE__ */ k(
    "table",
    {
      className: "w-full table-fixed border-separate border-spacing-0",
      "aria-label": a("sheet.sheetTitle"),
      children: [
        /* @__PURE__ */ h("thead", { className: "bg-hello-csv-muted sticky top-0 z-10 [&_tr]:border-b", children: e.getHeaderGroups().map((y) => /* @__PURE__ */ h("tr", { children: y.headers.map((R) => /* @__PURE__ */ h(
          "th",
          {
            className: R.column.id === Fr ? `${f} sticky left-0 z-20` : `relative z-10 ${f}`,
            colSpan: R.colSpan,
            style: { width: R.getSize() },
            children: /* @__PURE__ */ k(
              "div",
              {
                className: `flex w-full ${R.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
                onClick: R.column.getToggleSortingHandler(),
                children: [
                  R.isPlaceholder ? null : /* @__PURE__ */ h("div", { children: ni(
                    R.column.columnDef.header,
                    R.getContext()
                  ) }, `header-${y.id}-${R.id}`),
                  /* @__PURE__ */ h(
                    "span",
                    {
                      className: "ml-2 flex-none rounded-sm bg-hello-csv-muted-foreground text-hello-csv-muted",
                      children: {
                        asc: /* @__PURE__ */ h(ip, { "aria-hidden": "true", className: "size-5" }),
                        desc: /* @__PURE__ */ h(
                          tp,
                          {
                            "aria-hidden": "true",
                            className: "size-5"
                          }
                        )
                      }[R.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${y.id}-${R.id}`
                  ),
                  R.column.getCanResize() && /* @__PURE__ */ h(
                    "div",
                    {
                      onMouseDown: R.getResizeHandler(),
                      onTouchStart: R.getResizeHandler(),
                      className: "absolute top-0 right-0 h-full w-0.5 cursor-col-resize touch-none bg-hello-csv-border select-none"
                    },
                    `resize-icon-${y.id}-${R.id}`
                  )
                ]
              }
            )
          },
          R.id
        )) }, y.id)) }),
        /* @__PURE__ */ k(
          "tbody",
          {
            className: "divide-y divide-hello-csv-border",
            style: {
              height: `${p.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", { style: { height: w } }) }),
              g.map(({ row: y, index: R }) => /* @__PURE__ */ h("tr", { "data-index": R, ref: C, children: y.getVisibleCells().map((T, F) => {
                if (T.column.id === Fr)
                  return /* @__PURE__ */ h(
                    "td",
                    {
                      "aria-label": `Select row ${Number(y.id) + 1}`,
                      className: `bg-hello-csv-muted ${m} sticky left-0 z-6 pr-3 pl-4`,
                      style: { width: T.column.getSize() },
                      children: ni(T.column.columnDef.cell, T.getContext())
                    },
                    T.id
                  );
                const M = u.includes("removeRows"), v = t.columns[F - (M ? 1 : 0)].id, b = ql(
                  n,
                  t.id,
                  y.original
                ), x = c(v, b).map(($) => a($.message)).join(", ");
                return /* @__PURE__ */ h(
                  "td",
                  {
                    className: m,
                    style: { width: T.column.getSize() },
                    children: /* @__PURE__ */ h(
                      Fg,
                      {
                        rowId: y.id,
                        columnDefinition: t.columns.find(($) => $.id === v),
                        allData: n,
                        value: T.getValue(),
                        onUpdated: ($) => o(b, v, $),
                        clearRowsSelection: () => i([]),
                        errorsText: x,
                        enumLabelDict: s
                      }
                    )
                  },
                  T.id
                );
              }) }, y.id)),
              /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", { style: { height: S } }) })
            ]
          }
        )
      ]
    }
  );
}
function Ag({ column: e }) {
  const { t } = he(), n = Kl(e);
  return /* @__PURE__ */ k(
    "div",
    {
      className: "flex items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ k("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ h(Fl, { className: "absolute top-0 left-0 h-5 w-5 text-hello-csv-muted-foreground/60" }),
          /* @__PURE__ */ h(rf, { className: "absolute top-0 left-0 h-5 w-5 text-hello-csv-muted-foreground" })
        ] }),
        e.label,
        " ",
        cn(e) && "*"
      ]
    }
  );
}
function Ng({
  sheetDefinition: e,
  rowData: t,
  selectedRows: n,
  setSelectedRows: r,
  viewMode: o,
  setViewMode: i,
  searchPhrase: l,
  setSearchPhrase: s,
  errorColumnFilter: a,
  setErrorColumnFilter: u,
  removeRows: c,
  addEmptyRow: f,
  sheetValidationErrors: m,
  rowValidationSummary: d,
  resetState: p,
  enumLabelDict: g
}) {
  const { csvDownloadMode: w, availableActions: S } = De(), { t: C } = he(), { validationInProgress: y } = Qe(), [R, T] = Z(!1), [F, M] = Z(!1), v = "pointer-events-none cursor-not-allowed opacity-50";
  function b(P) {
    const A = e.columns.find(
      (W) => W.id === P
    ), B = Zo(
      m.filter((W) => W.columnId === P).map((W) => W.rowIndex)
    ).length;
    return {
      label: `${(A == null ? void 0 : A.label) || P} (${B})`,
      value: P
    };
  }
  const x = Zo(
    m.map((P) => P.columnId)
  ).map((P) => b(P));
  a != null && x.find((P) => P.value === a) == null && x.push(b(a));
  const $ = [
    {
      value: "all",
      label: C("sheet.all") + ` (${d.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: C("sheet.valid") + ` (${d.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: C("sheet.invalid") + ` (${d.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function _() {
    c({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ k("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ k("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h(fp, { activeButton: o, buttons: $ }) }),
      S.includes("search") && /* @__PURE__ */ h(
        Vl,
        {
          clearable: !0,
          value: l,
          onChange: (P) => s(P),
          placeholder: C("sheet.search"),
          iconBuilder: (P) => /* @__PURE__ */ h(tf, { ...P })
        }
      ),
      S.includes("removeRows") && /* @__PURE__ */ h(
        _t,
        {
          tooltipText: C(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ h(
            af,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": C(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : v}`,
              onClick: () => T(!0)
            }
          )
        }
      ),
      S.includes("addRows") && /* @__PURE__ */ h(_t, { tooltipText: C("sheet.addRowsTooltip"), children: /* @__PURE__ */ h(
        lf,
        {
          className: "h-6 w-6 cursor-pointer",
          onClick: f
        }
      ) }),
      S.includes("downloadCsv") && /* @__PURE__ */ h(_t, { tooltipText: C("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ h(
        zd,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : v}`,
          onClick: () => jl(
            e,
            t,
            g,
            w
          )
        }
      ) }),
      /* @__PURE__ */ h(
        Mt,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: C("sheet.filterByError"),
          classes: "min-w-48",
          options: x,
          value: a,
          onChange: (P) => u(P)
        }
      ),
      S.includes("removeRows") && /* @__PURE__ */ h(
        Mr,
        {
          open: R,
          setOpen: T,
          onConfirm: _,
          title: C("sheet.removeConfirmationModalTitle"),
          confirmationText: C(
            "sheet.removeConfirmationModalConfirmationText"
          ),
          subTitle: C("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ k("div", { className: "ml-5 flex items-center", children: [
      y && /* @__PURE__ */ k(Yt, { children: [
        /* @__PURE__ */ h(Wl, { color: "dark" }),
        /* @__PURE__ */ h("div", { className: "mr-2" })
      ] }),
      S.includes("resetState") && /* @__PURE__ */ k(Yt, { children: [
        /* @__PURE__ */ h(_t, { tooltipText: C("sheet.resetTooltip"), children: /* @__PURE__ */ h(
          Fl,
          {
            className: "h-6 w-6 cursor-pointer",
            onClick: () => M(!0)
          }
        ) }),
        /* @__PURE__ */ h(
          Mr,
          {
            open: F,
            setOpen: M,
            onConfirm: p,
            title: C("sheet.resetConfirmationModalTitle"),
            confirmationText: C(
              "sheet.resetConfirmationModalConfirmationText"
            ),
            subTitle: C("sheet.resetConfirmationModalSubTitle"),
            variant: "danger"
          }
        )
      ] })
    ] })
  ] });
}
function kg({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ h(ci, { checked: r, setChecked: o });
}
function Dg({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((l) => l !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ h(
    ci,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
function Lg({
  sheetDefinition: e,
  data: t,
  sheetValidationErrors: n,
  setRowData: r,
  removeRows: o,
  addEmptyRow: i,
  resetState: l,
  enumLabelDict: s
}) {
  const { sheetData: a } = Qe(), { availableActions: u } = De(), [c, f] = Z([]), [m, d] = Z("all"), [p, g] = Z(""), [w, S] = Z(
    null
  );
  le(() => {
    f([]), d("all");
  }, [e]);
  const C = Wp(
    t,
    a,
    m,
    n,
    w,
    e,
    p
  ), y = re(() => {
    const v = t.rows, b = v.filter(
      ($, _) => !n.some((P) => P.rowIndex === _)
    ), x = v.filter(
      ($, _) => n.some((P) => P.rowIndex === _)
    );
    return {
      all: v.length,
      valid: b.length,
      errors: x.length
    };
  }, [t, n]), R = re(() => [
    ...u.includes(
      "removeRows"
    ) ? [
      {
        id: Fr,
        header: () => /* @__PURE__ */ h(
          kg,
          {
            visibleData: C,
            selectedRows: c,
            setSelectedRows: f
          }
        ),
        cell: ({ row: b }) => /* @__PURE__ */ h(
          Dg,
          {
            row: b,
            selectedRows: c,
            setSelectedRows: f
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: qf
      }
    ] : [],
    ...e.columns.map(
      (b) => ({
        id: b.id,
        accessorFn: (x) => x[b.id],
        header: () => /* @__PURE__ */ h(Ag, { column: b }),
        sortUndefined: "last",
        sortingFn: "auto",
        meta: { columnLabel: b.label },
        enableResizing: !0
      })
    )
  ], [e, c, C, u]), T = Tg({
    data: C,
    columns: R,
    getCoreRowModel: Eg(),
    getSortedRowModel: Rg(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: Kf,
      maxSize: Yf,
      size: Xf
    }
  });
  function F(v, b, x) {
    const $ = { ...t.rows[v] };
    $[b] = x, r({
      sheetId: e.id,
      value: $,
      rowIndex: v
    });
  }
  const M = G(null);
  return /* @__PURE__ */ k("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ h("div", { className: "flex-none", children: /* @__PURE__ */ h(
      Ng,
      {
        sheetDefinition: e,
        rowData: C,
        selectedRows: c,
        setSelectedRows: f,
        viewMode: m,
        setViewMode: d,
        searchPhrase: p,
        setSearchPhrase: g,
        errorColumnFilter: w,
        setErrorColumnFilter: S,
        removeRows: o,
        addEmptyRow: i,
        sheetValidationErrors: n,
        rowValidationSummary: y,
        resetState: l,
        enumLabelDict: s
      }
    ) }),
    /* @__PURE__ */ h("div", { className: "min-h-0 flex-1 overflow-auto", ref: M, children: /* @__PURE__ */ h(
      Pg,
      {
        tableContainerRef: M,
        table: T,
        sheetDefinition: e,
        allData: a,
        sheetValidationErrors: n,
        onCellValueChanged: F,
        setSelectedRows: f,
        enumLabelDict: s
      }
    ) })
  ] });
}
function ms(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function Vg(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (l) => l.id === o.sheetId
    );
    i && jl(
      i,
      o.rows,
      n,
      r
    );
  });
}
const oi = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const l = t.find(
    (s) => s.id === i.sheetId
  );
  return l ? o + io(
    l,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function Hg({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: l
  } = Qe(), s = so(l, o), { csvDownloadMode: a } = De(), { t: u } = he(), c = ms(s);
  return /* @__PURE__ */ h("div", { className: "flex flex-row px-4 pt-3 pb-2", children: /* @__PURE__ */ k("div", { className: "flex-1 space-y-4", children: [
    /* @__PURE__ */ h("div", { children: /* @__PURE__ */ k("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ h("div", { className: "my-2 mr-5 text-center", children: /* @__PURE__ */ h(Yd, { className: "text-hello-csv-primary h-8 w-8" }) }),
      /* @__PURE__ */ k("div", { className: "flex-1", children: [
        /* @__PURE__ */ h("div", { className: "my-2 text-sm font-light uppercase", children: u("importStatus.fileInformation") }),
        /* @__PURE__ */ h("div", { className: "text-md my-2 font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ h("div", { className: "my-2 text-sm text-hello-csv-muted-foreground", children: n ? `${u("importStatus.original")}: ${xn((n == null ? void 0 : n.size) || 0)} · ${u("importStatus.processed")}: ${xn(oi(s, l, t, a))}` : `${u("importStatus.processed")}: ${xn(oi(s, l, t, a))}` }),
        /* @__PURE__ */ h("div", { className: "mt-5", children: /* @__PURE__ */ h(
          ke,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => Vg(
              s,
              l,
              t,
              a
            ),
            children: u("importStatus.downloadProcessedData")
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ h("div", { className: "border-b border-hello-csv-border pb-2" }),
    /* @__PURE__ */ h("div", { children: /* @__PURE__ */ k("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ h("div", { className: "my-2 mr-5 text-center", children: r === "failed" ? /* @__PURE__ */ h(Ar, { className: "text-hello-csv-destructive h-8 w-8" }) : e ? /* @__PURE__ */ h(_p, { className: "text-hello-csv-warning h-8 w-8" }) : /* @__PURE__ */ h(Gl, { className: "text-hello-csv-success h-8 w-8" }) }),
      /* @__PURE__ */ k("div", { className: "flex-1", children: [
        /* @__PURE__ */ h("div", { className: "my-2 text-sm font-light uppercase", children: u("importStatus.importResults") }),
        /* @__PURE__ */ h("div", { className: "text-md my-2 font-medium", children: u("importStatus.totalRows", { totalRows: c }) }),
        i && /* @__PURE__ */ k("div", { className: "my-2 text-sm text-hello-csv-muted-foreground", children: [
          i.skipped >= 0 && /* @__PURE__ */ k("span", { children: [
            u("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ k("span", { children: [
            u("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ h("span", { children: u("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ k("div", { className: "my-2 text-sm text-hello-csv-muted-foreground", children: [
          u("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ h(ao, { variant: "error", children: u("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function gs({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = he();
  return /* @__PURE__ */ h(ui, { withPadding: !1, className: "h-full", children: /* @__PURE__ */ k("div", { className: "flex flex-col py-5", children: [
    /* @__PURE__ */ h("div", { className: "px-4 pb-2 text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ h("div", { className: "px-4 pb-2 text-sm text-hello-csv-muted-foreground", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ h("div", { className: "border-b border-hello-csv-border pb-2" }),
    /* @__PURE__ */ h(
      Hg,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function zg({ resetState: e, enumLabelDict: t }) {
  const {
    sheetDefinitions: n,
    sheetData: r,
    importStatistics: o
  } = Qe(), { onSummaryFinished: i } = De(), { t: l } = he(), s = so(n, r), a = ms(s), u = (o == null ? void 0 : o.imported) ?? 0, c = !!(o != null && o.failed) || !!(o != null && o.skipped);
  return /* @__PURE__ */ k("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ h("div", { className: "flex-none text-2xl", children: l("importStatus.dataImport") }),
    /* @__PURE__ */ k("div", { className: "grow overflow-auto", children: [
      /* @__PURE__ */ h("div", { className: "mt-4", children: /* @__PURE__ */ h(
        uo,
        {
          variant: c ? "warning" : "success",
          header: l(
            `importStatus.${c ? "importSuccessfulWithErrors" : "importSuccessful"}`
          ),
          description: l(
            `importStatus.successDescription${o ? "WithStats" : ""}`,
            {
              totalRecords: a,
              recordsImported: u
            }
          )
        }
      ) }),
      /* @__PURE__ */ h("div", { className: "mt-6", children: /* @__PURE__ */ h(
        gs,
        {
          completedWithErrors: c,
          enumLabelDict: t
        }
      ) })
    ] }),
    /* @__PURE__ */ h("div", { className: "flex-none", children: /* @__PURE__ */ h("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ h(ke, { variant: "primary", onClick: i || e, children: l("importStatus.continue") }) }) })
  ] });
}
function Bg({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = he();
  return /* @__PURE__ */ k("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ h("div", { className: "text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ k("div", { className: "grow overflow-auto", children: [
      /* @__PURE__ */ h("div", { className: "mt-4", children: /* @__PURE__ */ h(
        uo,
        {
          variant: "error",
          header: r("importStatus.importFailed"),
          description: r("importStatus.failedDescription")
        }
      ) }),
      /* @__PURE__ */ h("div", { className: "mt-6", children: /* @__PURE__ */ h(gs, { completedWithErrors: !1, enumLabelDict: n }) })
    ] }),
    /* @__PURE__ */ k("div", { className: "mt-6 flex justify-between", children: [
      /* @__PURE__ */ h(ke, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ h(ke, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] });
}
function jg({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, l] = Z(!1);
  return le(() => {
    if (e === 0) {
      const s = setTimeout(() => {
        l(!0);
      }, 3e3);
      return () => clearTimeout(s);
    }
  }, [e]), i ? /* @__PURE__ */ h("div", { className: "flex justify-center", children: /* @__PURE__ */ h(
    "div",
    {
      className: `border-hello-csv-success h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ k("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ h(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: 40,
        fill: "transparent",
        className: "text-hello-csv-muted",
        strokeWidth: "10",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ h(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: 40,
        fill: "transparent",
        strokeWidth: "10",
        strokeDasharray: r,
        strokeDashoffset: o,
        className: "stroke-hello-csv-success transition-[stroke-dashoffset] duration-500"
      }
    )
  ] });
}
function Gg() {
  return /* @__PURE__ */ h(Wd, { className: "text-hello-csv-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Wg({ resetState: e }) {
  const { importProgress: t, mode: n } = Qe(), r = n === "submit", { t: o } = he();
  return /* @__PURE__ */ h("div", { className: "flex h-full p-10", children: /* @__PURE__ */ h("div", { className: "flex h-full w-full flex-col", children: /* @__PURE__ */ k("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ k("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ h(jg, { progress: t, pending: r }),
      r && /* @__PURE__ */ k("div", { children: [
        /* @__PURE__ */ h("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ k("b", { className: "text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ h("h2", { className: "text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ h(Gg, {})
    ] }),
    !r && /* @__PURE__ */ k("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ h("h2", { className: "text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ h("div", { className: "h-5" }),
      /* @__PURE__ */ h(ke, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function Ug({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = Qe();
  return /* @__PURE__ */ k("div", { className: "h-full overflow-auto", children: [
    o === "submit" && /* @__PURE__ */ h(Wg, { resetState: n }),
    o === "failed" && /* @__PURE__ */ h(
      Bg,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ h(zg, { resetState: n, enumLabelDict: r })
  ] });
}
async function ii(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
const qg = [
  "addRows",
  "removeRows",
  "editRows",
  "downloadCsv",
  "search",
  "resetState",
  "backToPreviousStep"
], Kg = ({ children: e }) => {
  const { theme: t } = De();
  return le(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ h(Yt, { children: e });
};
function Yg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Xg = /* @__PURE__ */ E.forwardRef(Yg);
function Zg({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = Qe(), { sheets: i } = De();
  return /* @__PURE__ */ h(
    sp,
    {
      tabs: i.map((l) => ({
        label: l.label + ` (${t[l.id]})`,
        value: l.id,
        icon: o.some((s) => s.sheetId === l.id) ? /* @__PURE__ */ h(Xg, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function Jg({ onBackToMapping: e }) {
  const { t } = he(), [n, r] = Z(!1);
  return /* @__PURE__ */ k(Yt, { children: [
    /* @__PURE__ */ h(
      ke,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ h(
      Mr,
      {
        variant: "danger",
        onConfirm: e,
        open: n,
        setOpen: r,
        title: t("importer.backToMappingConfirmation.title"),
        subTitle: t("importer.backToMappingConfirmation.subTitle"),
        confirmationText: t(
          "importer.backToMappingConfirmation.confirmationText"
        ),
        cancelText: t("importer.backToMappingConfirmation.cancelText")
      }
    )
  ] });
}
function Qg({ importerRequirements: e }) {
  const { t } = he();
  return /* @__PURE__ */ h("div", { className: "h-full w-full space-y-5 overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ k("div", { className: "me-3", children: [
      /* @__PURE__ */ h("div", { className: "my-3 border-b border-hello-csv-border pb-4 text-sm font-light uppercase text-hello-csv-muted-foreground", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ h("div", { className: "mt-4", children: r.map((i) => /* @__PURE__ */ k(
        "div",
        {
          className: "my-3 flex justify-between",
          children: [
            /* @__PURE__ */ h("div", { className: "text-xs text-hello-csv-foreground", children: i.columnLabel }),
            /* @__PURE__ */ h("div", { className: "text-xs font-light", children: /* @__PURE__ */ h(
              _t,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ h(Qd, { className: "size-5 text-hello-csv-muted-foreground" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function eh({ importerRequirements: e }) {
  const { t } = he();
  return /* @__PURE__ */ k("div", { className: "flex h-full flex-col space-y-5", children: [
    /* @__PURE__ */ h("div", { className: "me-3", children: /* @__PURE__ */ h(uo, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ h("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ h(Qg, { importerRequirements: e }) })
  ] });
}
function th({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = De(), { t: i, tHtml: l } = he(), s = G(null), [a, u] = Z(!1), c = jf.concat(
    (r == null ? void 0 : r.map((p) => p.mimeType)) ?? []
  ), f = (p, g) => {
    c.includes(p.type) && p.size <= g && e(p);
  }, m = (p) => {
    var w;
    const g = p.target;
    (w = g.files) != null && w.length && f(g.files[0], n);
  }, d = (p) => {
    var g;
    p.preventDefault(), u(!1), (g = p.dataTransfer) != null && g.files.length && f(p.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ h(ui, { variant: "muted", withPadding: !1, className: "h-full", children: /* @__PURE__ */ k(
    "div",
    {
      className: `flex h-full flex-col p-5 transition-colors ${a ? "bg-hello-csv-accent" : "bg-hello-csv-muted"}`,
      onClick: () => {
        var p;
        return (p = s.current) == null ? void 0 : p.click();
      },
      onDragOver: (p) => {
        p.preventDefault(), u(!0);
      },
      onDragEnter: () => u(!0),
      onDragLeave: () => u(!1),
      onDrop: (p) => d(p),
      children: [
        /* @__PURE__ */ k("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
          /* @__PURE__ */ h(qd, { className: "text-hello-csv-primary h-12 w-12" }),
          /* @__PURE__ */ h("p", { className: "mt-3 text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ k("div", { className: "mt-3 text-sm text-hello-csv-muted-foreground", children: [
            l("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ h("b", { children: xn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((p) => p.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ h("div", { className: "mt-3", children: /* @__PURE__ */ h(ke, { children: i("uploader.browseFiles") }) }),
          o && /* @__PURE__ */ h("div", { className: "mt-3 text-sm", children: /* @__PURE__ */ h(
            "p",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": i("uploader.enterManually"),
              onClick: (p) => {
                p.stopPropagation(), t == null || t();
              },
              className: "text-hello-csv-primary hover:text-hello-csv-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none",
              children: i("uploader.enterManually")
            }
          ) })
        ] }),
        /* @__PURE__ */ h(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: s,
            type: "file",
            accept: c.join(","),
            className: "sr-only",
            onChange: (p) => m(p)
          }
        )
      ]
    }
  ) });
}
function nh({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = De(), r = xm(n), { t: o } = he();
  return /* @__PURE__ */ k("div", { className: "flex h-full flex-col space-y-4", children: [
    /* @__PURE__ */ h("div", { className: "flex-none text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ h("div", { className: "flex-auto md:min-h-0", children: /* @__PURE__ */ k("div", { className: "flex h-full flex-col-reverse gap-5 md:flex-row", children: [
      /* @__PURE__ */ h("div", { className: "h-full flex-1 lg:flex-1", children: /* @__PURE__ */ h(eh, { importerRequirements: r }) }),
      /* @__PURE__ */ h("div", { className: "flex-1 lg:flex-2", children: /* @__PURE__ */ h(
        th,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
function rh(e) {
  const {
    onComplete: t,
    sheets: n,
    preventUploadOnValidationErrors: r,
    availableActions: o
  } = e, { t: i } = he(), l = G(!0), s = G(null), a = Qe(), u = km(), c = Ne(), { mode: f, currentSheetId: m, sheetData: d, columnMappings: p, validationErrors: g } = a;
  le(() => {
    var O;
    if (l.current) {
      l.current = !1;
      return;
    }
    (O = s.current) == null || O.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const w = d.find(
    (O) => O.sheetId === m
  ), S = re(() => Object.fromEntries(
    d.map((O) => [O.sheetId, O.rows.length])
  ), [d]), C = n.find(
    (O) => O.id === m
  ), y = Up(n), T = (typeof r == "function" ? (r == null ? void 0 : r(g)) ?? !1 : r ?? !1) && g.length > 0, F = new Nr(e, a);
  async function M(O) {
    await F.uploadFile(O), F.dispatchChange(u);
  }
  function v() {
    F.setEnterDataManually(), F.dispatchChange(u);
  }
  function b(O) {
    F.setMappings(O), F.dispatchChange(u);
  }
  async function x() {
    await F.confirmMappings(), F.dispatchChange(u);
  }
  function $(O) {
    F.changeCell(O), F.dispatchChange(u);
  }
  function _(O) {
    F.removeRows(O), F.dispatchChange(u);
  }
  function P() {
    u({ type: "ADD_EMPTY_ROW" });
  }
  function A() {
    u({ type: "RESET" });
  }
  async function B() {
    u({ type: "PROGRESS", payload: { progress: 0 } }), u({ type: "SUBMIT" });
    try {
      const O = so(n, d), q = await t(
        { ...a, sheetData: O },
        (N) => {
          u({ type: "PROGRESS", payload: { progress: N } });
        },
        a.sheetDefinitions.map((N) => {
          var z;
          return {
            file: io(
              N,
              ((z = O.find((I) => I.sheetId === N.id)) == null ? void 0 : z.rows) ?? [],
              {},
              "value"
            ),
            sheetId: N.id
          };
        })
      );
      await ii(400), u({ type: "PROGRESS", payload: { progress: 100 } }), await ii(200), u({
        type: "COMPLETED",
        payload: { importStatistics: q ?? void 0 }
      });
    } catch {
      u({ type: "FAILED" });
    }
  }
  function W() {
    u({ type: "PREVIEW" });
  }
  function H() {
    u({ type: "UPLOAD" });
  }
  function V() {
    u({ type: "MAPPING" });
  }
  return /* @__PURE__ */ h(Kg, { children: /* @__PURE__ */ k(Zf, { ref: s, children: [
    f === "upload" && /* @__PURE__ */ h(
      nh,
      {
        onFileUploaded: M,
        onEnterDataManually: v
      }
    ),
    f === "mapping" && /* @__PURE__ */ h(
      Dm,
      {
        onMappingsChanged: b,
        onMappingsSet: x,
        onBack: H
      }
    ),
    f === "preview" && // TODO: Move these to separate component in future PR
    /* @__PURE__ */ k("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ h("div", { className: "flex-none", children: /* @__PURE__ */ h(
        Zg,
        {
          idPrefix: c,
          sheetCountDict: S,
          onSheetChange: (O) => u({ type: "SHEET_CHANGED", payload: { sheetId: O } })
        }
      ) }),
      /* @__PURE__ */ h(
        "div",
        {
          className: "flex-1 overflow-auto",
          role: "tabpanel",
          id: `${c}-tabpanel-${m}`,
          "aria-labelledby": `${c}-tab-${m}`,
          tabIndex: 0,
          children: /* @__PURE__ */ h(
            Lg,
            {
              data: w,
              sheetDefinition: C,
              sheetValidationErrors: g.filter(
                (O) => O.sheetId === (C == null ? void 0 : C.id)
              ),
              setRowData: $,
              removeRows: _,
              addEmptyRow: P,
              resetState: A,
              enumLabelDict: y
            }
          )
        }
      ),
      /* @__PURE__ */ h("div", { className: "flex-none", children: w.rows.length > 0 && /* @__PURE__ */ k("div", { className: "mt-5 flex justify-between", children: [
        /* @__PURE__ */ h("div", { children: p != null && o.includes("backToPreviousStep") && /* @__PURE__ */ h(
          Jg,
          {
            onBackToMapping: V
          }
        ) }),
        /* @__PURE__ */ h(
          _t,
          {
            tooltipText: i("importer.uploadBlocked"),
            hidden: !T,
            children: /* @__PURE__ */ h(ke, { onClick: B, disabled: T, children: i("importer.upload") })
          }
        )
      ] }) })
    ] }),
    (f === "submit" || f === "failed" || f === "completed") && /* @__PURE__ */ h(
      Ug,
      {
        onRetry: B,
        onBackToPreview: W,
        resetState: A,
        enumLabelDict: y
      }
    )
  ] }) });
}
function oh(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1,
    availableActions: e.availableActions ?? [...qg]
  };
  return /* @__PURE__ */ h(kf, { importerDefintion: t, children: /* @__PURE__ */ h(
    Nm,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      initialState: t.initialState,
      onStateChanged: t.onStateChanged,
      children: /* @__PURE__ */ h(zf, { children: /* @__PURE__ */ h(rh, { ...t }) })
    }
  ) });
}
function ph(e, t) {
  ws(e).render(li(oh, t));
}
export {
  fh as CsvImporterStateBuilder,
  qg as availableActionList,
  oh as default,
  ph as renderImporter
};
