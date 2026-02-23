var Ca = Object.defineProperty;
var Ea = (e, t, n) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => Ea(e, typeof t != "symbol" ? t + "" : t, n);
import { options as Ee, Component as Et, createElement as A, Fragment as pe, toChildArray as ft, render as Dn, createRef as qn, createContext as fe, cloneElement as Ra, hydrate as $a } from "preact";
var ot, de, fr, Wo, zt = 0, Zi = [], ve = Ee, Go = ve.__b, qo = ve.__r, Ko = ve.diffed, Yo = ve.__c, Xo = ve.unmount, Zo = ve.__;
function It(e, t) {
  ve.__h && ve.__h(de, e, zt || t), zt = 0;
  var n = de.__H || (de.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
  return zt = 1, it(Ji, e);
}
function it(e, t, n) {
  var r = It(ot++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ji(void 0, t), function(s) {
    var a = r.__N ? r.__N[0] : r.__[0], u = r.t(a, s);
    a !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = de, !de.u)) {
    var o = function(s, a, u) {
      if (!r.__c.__H) return !0;
      var c = r.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (c.every(function(g) {
        return !g.__N;
      })) return !i || i.call(this, s, a, u);
      var p = r.__c.props !== s;
      return c.forEach(function(g) {
        if (g.__N) {
          var d = g.__[0];
          g.__ = g.__N, g.__N = void 0, d !== g.__[0] && (p = !0);
        }
      }), i && i.call(this, s, a, u) || p;
    };
    de.u = !0;
    var i = de.shouldComponentUpdate, l = de.componentWillUpdate;
    de.componentWillUpdate = function(s, a, u) {
      if (this.__e) {
        var c = i;
        i = void 0, o(s, a, u), i = c;
      }
      l && l.call(this, s, a, u);
    }, de.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function re(e, t) {
  var n = It(ot++, 3);
  !ve.__s && uo(n.__H, t) && (n.__ = e, n.i = t, de.__H.__h.push(n));
}
function Ze(e, t) {
  var n = It(ot++, 4);
  !ve.__s && uo(n.__H, t) && (n.__ = e, n.i = t, de.__h.push(n));
}
function k(e) {
  return zt = 5, W(function() {
    return { current: e };
  }, []);
}
function so(e, t, n) {
  zt = 6, Ze(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function W(e, t) {
  var n = It(ot++, 7);
  return uo(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function oe(e, t) {
  return zt = 8, W(function() {
    return e;
  }, t);
}
function se(e) {
  var t = de.context[e.__c], n = It(ot++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(de)), t.props.value) : e.__;
}
function ao(e, t) {
  ve.useDebugValue && ve.useDebugValue(t ? t(e) : e);
}
function Ta(e) {
  var t = It(ot++, 10), n = H();
  return t.__ = e, de.componentDidCatch || (de.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Me() {
  var e = It(ot++, 11);
  if (!e.__) {
    for (var t = de.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Ia() {
  for (var e; e = Zi.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Pn), e.__H.__h.forEach(Mr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], ve.__e(t, e.__v);
  }
}
ve.__b = function(e) {
  de = null, Go && Go(e);
}, ve.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Zo && Zo(e, t);
}, ve.__r = function(e) {
  qo && qo(e), ot = 0;
  var t = (de = e.__c).__H;
  t && (fr === de ? (t.__h = [], de.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(Pn), t.__h.forEach(Mr), t.__h = [], ot = 0)), fr = de;
}, ve.diffed = function(e) {
  Ko && Ko(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Zi.push(t) !== 1 && Wo === ve.requestAnimationFrame || ((Wo = ve.requestAnimationFrame) || Oa)(Ia)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), fr = de = null;
}, ve.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Pn), n.__h = n.__h.filter(function(r) {
        return !r.__ || Mr(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], ve.__e(r, n.__v);
    }
  }), Yo && Yo(e, t);
}, ve.unmount = function(e) {
  Xo && Xo(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Pn(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && ve.__e(t, n.__v));
};
var Jo = typeof requestAnimationFrame == "function";
function Oa(e) {
  var t, n = function() {
    clearTimeout(r), Jo && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Jo && (t = requestAnimationFrame(n));
}
function Pn(e) {
  var t = de, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), de = t;
}
function Mr(e) {
  var t = de;
  e.__c = e.__(), de = t;
}
function uo(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ji(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qi(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Fr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Kn(e, t) {
  var n = t(), r = H({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ze(function() {
    o.__ = n, o.u = t, pr(o) && i({ t: o });
  }, [e, n, t]), re(function() {
    return pr(o) && i({ t: o }), e(function() {
      pr(o) && i({ t: o });
    });
  }, [e]), n;
}
function pr(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function co(e) {
  e();
}
function fo(e) {
  return e;
}
function po() {
  return [!1, co];
}
var mo = Ze;
function Ln(e, t) {
  this.props = e, this.context = t;
}
function el(e, t) {
  function n(o) {
    var i = this.props.ref, l = i == o.ref;
    return !l && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !l : Fr(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, A(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Ln.prototype = new Et()).isPureReactComponent = !0, Ln.prototype.shouldComponentUpdate = function(e, t) {
  return Fr(this.props, e) || Fr(this.state, t);
};
var Qo = Ee.__b;
Ee.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Qo && Qo(e);
};
var Ma = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ce(e) {
  function t(n) {
    var r = Qi({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Ma, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var ei = function(e, t) {
  return e == null ? null : ft(ft(e).map(t));
}, tl = { map: ei, forEach: ei, count: function(e) {
  return e ? ft(e).length : 0;
}, only: function(e) {
  var t = ft(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ft }, Fa = Ee.__e;
Ee.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Fa(e, t, n, r);
};
var ti = Ee.unmount;
function nl(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Qi({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return nl(r, t, n);
  })), e;
}
function rl(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return rl(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function rn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function ol(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function il(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(l) {
      n = l.default || l;
    }, function(l) {
      r = l;
    }), r) throw r;
    if (!n) throw t;
    return A(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function kt() {
  this.i = null, this.l = null;
}
Ee.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), ti && ti(e);
}, (rn.prototype = new Et()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = ol(r.__v), i = !1, l = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = l;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = rl(a, a.__c.__P, a.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
}, rn.prototype.componentWillUnmount = function() {
  this.o = [];
}, rn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = nl(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && A(pe, null, e.fallback);
  return o && (o.__u &= -33), [A(pe, null, t.__a ? null : e.children), o];
};
var ni = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Pa(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Aa(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    Dn(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), Dn(A(Pa, { context: t.context }, e.__v), t.v);
}
function mn(e, t) {
  var n = A(Aa, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(kt.prototype = new Et()).__a = function(e) {
  var t = this, n = ol(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), ni(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, kt.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ft(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, kt.prototype.componentDidUpdate = kt.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    ni(e, n, t);
  });
};
var ll = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Na = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ka = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Da = /[A-Z0-9]/g, La = typeof document < "u", Va = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function go(e, t, n) {
  return t.__k == null && (t.textContent = ""), Dn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function sl(e, t, n) {
  return $a(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Et.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Et.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var ri = Ee.event;
function Ha() {
}
function za() {
  return this.cancelBubble;
}
function Ba() {
  return this.defaultPrevented;
}
Ee.event = function(e) {
  return ri && (e = ri(e)), e.persist = Ha, e.isPropagationStopped = za, e.isDefaultPrevented = Ba, e.nativeEvent = e;
};
var ho, ja = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, oi = Ee.vnode;
Ee.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var l in n) {
      var s = n[l];
      if (!(l === "value" && "defaultValue" in n && s == null || La && l === "children" && r === "noscript" || l === "class" || l === "className")) {
        var a = l.toLowerCase();
        l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Va(n.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : ka.test(l) && (l = a) : a = l = "oninput" : i && Na.test(l) ? l = l.replace(Da, "-$&").toLowerCase() : s === null && (s = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ft(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ft(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ja)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = ll, oi && oi(e);
};
var ii = Ee.__r;
Ee.__r = function(e) {
  ii && ii(e), ho = e.__c;
};
var li = Ee.diffed;
Ee.diffed = function(e) {
  li && li(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), ho = null;
};
var al = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return ho.__n[e.__c].props.value;
}, useCallback: oe, useContext: se, useDebugValue: ao, useDeferredValue: fo, useEffect: re, useId: Me, useImperativeHandle: so, useInsertionEffect: mo, useLayoutEffect: Ze, useMemo: W, useReducer: it, useRef: k, useState: H, useSyncExternalStore: Kn, useTransition: po } } }, Ua = "18.3.1";
function ul(e) {
  return A.bind(null, e);
}
function Wt(e) {
  return !!e && e.$$typeof === ll;
}
function cl(e) {
  return Wt(e) && e.type === pe;
}
function dl(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function vo(e) {
  return Wt(e) ? Ra.apply(null, arguments) : e;
}
function wo(e) {
  return !!e.__k && (Dn(null, e), !0);
}
function fl(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var pl = function(e, t) {
  return e(t);
}, De = function(e, t) {
  return e(t);
}, ml = pe, gl = Wt, D = { useState: H, useId: Me, useReducer: it, useEffect: re, useLayoutEffect: Ze, useInsertionEffect: mo, useTransition: po, useDeferredValue: fo, useSyncExternalStore: Kn, startTransition: co, useRef: k, useImperativeHandle: so, useMemo: W, useCallback: oe, useContext: se, useDebugValue: ao, version: "18.3.1", Children: tl, render: go, hydrate: sl, unmountComponentAtNode: wo, createPortal: mn, createElement: A, createContext: fe, createFactory: ul, cloneElement: vo, createRef: qn, Fragment: pe, isValidElement: Wt, isElement: gl, isFragment: cl, isMemo: dl, findDOMNode: fl, Component: Et, PureComponent: Ln, memo: el, forwardRef: ce, flushSync: De, unstable_batchedUpdates: pl, StrictMode: ml, Suspense: rn, SuspenseList: kt, lazy: il, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: al };
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: tl,
  Component: Et,
  Fragment: pe,
  PureComponent: Ln,
  StrictMode: ml,
  Suspense: rn,
  SuspenseList: kt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: al,
  cloneElement: vo,
  createContext: fe,
  createElement: A,
  createFactory: ul,
  createPortal: mn,
  createRef: qn,
  default: D,
  findDOMNode: fl,
  flushSync: De,
  forwardRef: ce,
  hydrate: sl,
  isElement: gl,
  isFragment: cl,
  isMemo: dl,
  isValidElement: Wt,
  lazy: il,
  memo: el,
  render: go,
  startTransition: co,
  unmountComponentAtNode: wo,
  unstable_batchedUpdates: pl,
  useCallback: oe,
  useContext: se,
  useDebugValue: ao,
  useDeferredValue: fo,
  useEffect: re,
  useErrorBoundary: Ta,
  useId: Me,
  useImperativeHandle: so,
  useInsertionEffect: mo,
  useLayoutEffect: Ze,
  useMemo: W,
  useReducer: it,
  useRef: k,
  useState: H,
  useSyncExternalStore: Kn,
  useTransition: po,
  version: Ua
}, Symbol.toStringTag, { value: "Module" }));
function Wa(e) {
  return {
    // eslint-disable-next-line
    render: function(t) {
      go(t, e);
    },
    // eslint-disable-next-line
    unmount: function() {
      wo(e);
    }
  };
}
var Ga = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var l, s, a = t;
  if ("ref" in a) for (s in a = {}, t) s == "ref" ? l = t[s] : a[s] = t[s];
  var u = { type: e, props: a, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ga, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) a[s] === void 0 && (a[s] = l[s]);
  return Ee.vnode && Ee.vnode(u), u;
}
function hl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = hl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function qa() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = hl(e)) && (r && (r += " "), r += t);
  return r;
}
const si = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ai = qa, vt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return ai(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, l = Object.keys(o).map((u) => {
    const c = n == null ? void 0 : n[u], p = i == null ? void 0 : i[u];
    if (c === null) return null;
    const g = si(c) || si(p);
    return o[u][g];
  }), s = n && Object.entries(n).reduce((u, c) => {
    let [p, g] = c;
    return g === void 0 || (u[p] = g), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: p, className: g, ...d } = c;
    return Object.entries(d).every((m) => {
      let [h, w] = m;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...s
      }[h]) : {
        ...i,
        ...s
      }[h] === w;
    }) ? [
      ...u,
      p,
      g
    ] : u;
  }, []);
  return ai(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Ka = vt(
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
function He({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  withFullWidth: o
}) {
  const i = Ka({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ f(
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
const Ya = vt(
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
), vl = ce(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = Ya({ variant: n, withPadding: r });
    return /* @__PURE__ */ f("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function wl({ checked: e, setChecked: t, label: n }) {
  const r = Me();
  return /* @__PURE__ */ f("div", { className: "flex gap-3 items-center", children: [
    /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center", children: /* @__PURE__ */ f("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ f(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "peer col-start-1 row-start-1 size-4 shrink-0 appearance-none rounded-[4px] border border-hello-csv-input bg-transparent transition-shadow outline-none focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:cursor-not-allowed disabled:opacity-50 checked:border-hello-csv-primary checked:bg-hello-csv-primary checked:text-hello-csv-primary-foreground forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ f(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-hello-csv-primary-foreground group-has-disabled:stroke-hello-csv-muted-foreground",
          children: [
            /* @__PURE__ */ f(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ f(
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
    n && /* @__PURE__ */ f("div", { className: "text-sm/6", children: /* @__PURE__ */ f("label", { htmlFor: r, className: "font-medium text-hello-csv-foreground", children: n }) })
  ] });
}
let Xa = !1;
function bo() {
  return Xa;
}
const bl = typeof document < "u" ? D.useLayoutEffect : () => {
};
function Za(e) {
  const t = k(null);
  return bl(() => {
    t.current = e;
  }, [
    e
  ]), oe((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const wt = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, _t = (e) => e && "window" in e && e.window === e ? e : wt(e).defaultView || window;
function Ja(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Qa(e) {
  return Ja(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function yl(e, t) {
  if (!bo()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Qa(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Ar = (e = document) => {
  var t;
  if (!bo()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function xl(e) {
  return bo() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function eu(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function tu(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function _l(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const nu = _l(function() {
  return tu(/^Mac/i);
}), ru = _l(function() {
  return eu(/Android/i);
});
function Sl() {
  let e = k(/* @__PURE__ */ new Map()), t = oe((o, i, l, s) => {
    let a = s != null && s.once ? (...u) => {
      e.current.delete(l), l(...u);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: o,
      fn: a,
      options: s
    }), o.addEventListener(i, a, s);
  }, []), n = oe((o, i, l, s) => {
    var a;
    let u = ((a = e.current.get(l)) === null || a === void 0 ? void 0 : a.fn) || l;
    o.removeEventListener(i, u, s), e.current.delete(l);
  }, []), r = oe(() => {
    e.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return re(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function ou(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : ru() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Cl(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function iu(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function El(e) {
  let t = k({
    isFocused: !1,
    observer: null
  });
  bl(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Za((r) => {
    e == null || e(r);
  });
  return oe((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        if (t.current.isFocused = !1, o.disabled) {
          let s = Cl(l);
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
let lu = !1, gn = null, Nr = /* @__PURE__ */ new Set(), on = /* @__PURE__ */ new Map(), Rt = !1, kr = !1;
const su = {
  Tab: !0,
  Escape: !0
};
function yo(e, t) {
  for (let n of Nr) n(e, t);
}
function au(e) {
  return !(e.metaKey || !nu() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Vn(e) {
  Rt = !0, au(e) && (gn = "keyboard", yo("keyboard", e));
}
function Lt(e) {
  gn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Rt = !0, yo("pointer", e));
}
function Rl(e) {
  ou(e) && (Rt = !0, gn = "virtual");
}
function $l(e) {
  e.target === window || e.target === document || lu || !e.isTrusted || (!Rt && !kr && (gn = "virtual", yo("virtual", e)), Rt = !1, kr = !1);
}
function Tl() {
  Rt = !1, kr = !0;
}
function Dr(e) {
  if (typeof window > "u" || on.get(_t(e))) return;
  const t = _t(e), n = wt(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Rt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Vn, !0), n.addEventListener("keyup", Vn, !0), n.addEventListener("click", Rl, !0), t.addEventListener("focus", $l, !0), t.addEventListener("blur", Tl, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Lt, !0), n.addEventListener("pointermove", Lt, !0), n.addEventListener("pointerup", Lt, !0)), t.addEventListener("beforeunload", () => {
    Il(e);
  }, {
    once: !0
  }), on.set(t, {
    focus: r
  });
}
const Il = (e, t) => {
  const n = _t(e), r = wt(e);
  t && r.removeEventListener("DOMContentLoaded", t), on.has(n) && (n.HTMLElement.prototype.focus = on.get(n).focus, r.removeEventListener("keydown", Vn, !0), r.removeEventListener("keyup", Vn, !0), r.removeEventListener("click", Rl, !0), n.removeEventListener("focus", $l, !0), n.removeEventListener("blur", Tl, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Lt, !0), r.removeEventListener("pointermove", Lt, !0), r.removeEventListener("pointerup", Lt, !0)), on.delete(n));
};
function uu(e) {
  const t = wt(e);
  let n;
  return t.readyState !== "loading" ? Dr(e) : (n = () => {
    Dr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Il(e, n);
}
typeof document < "u" && uu();
function Ol() {
  return gn !== "pointer";
}
const cu = /* @__PURE__ */ new Set([
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
function du(e, t, n) {
  let r = wt(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? _t(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? _t(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? _t(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? _t(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !cu.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof l && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof s && !su[n.key]);
}
function fu(e, t, n) {
  Dr(), re(() => {
    let r = (o, i) => {
      du(!!(n != null && n.isTextInput), o, i) && e(Ol());
    };
    return Nr.add(r), () => {
      Nr.delete(r);
    };
  }, t);
}
function pu(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = oe((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = El(i), s = oe((a) => {
    const u = wt(a.target), c = u ? Ar(u) : Ar();
    a.target === a.currentTarget && c === xl(a.nativeEvent) && (n && n(a), o && o(!0), l(a));
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
function mu(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = k({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: s } = Sl(), a = oe((p) => {
    p.currentTarget.contains(p.target) && i.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(p), o && o(!1));
  }, [
    n,
    o,
    i,
    s
  ]), u = El(a), c = oe((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const g = wt(p.target), d = Ar(g);
    if (!i.current.isFocusWithin && d === xl(p.nativeEvent)) {
      r && r(p), o && o(!0), i.current.isFocusWithin = !0, u(p);
      let m = p.currentTarget;
      l(g, "focus", (h) => {
        if (i.current.isFocusWithin && !yl(m, h.target)) {
          let w = new g.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          iu(w, m);
          let _ = Cl(w);
          a(_);
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
let Lr = !1, mr = 0;
function gu() {
  Lr = !0, setTimeout(() => {
    Lr = !1;
  }, 50);
}
function ui(e) {
  e.pointerType === "touch" && gu();
}
function hu() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", ui), mr++, () => {
      mr--, !(mr > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", ui);
    };
}
function Ml(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = H(!1), s = k({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  re(hu, []);
  let { addGlobalListener: a, removeAllGlobalListeners: u } = Sl(), { hoverProps: c, triggerHoverEnd: p } = W(() => {
    let g = (h, w) => {
      if (s.pointerType = w, o || w === "touch" || s.isHovered || !h.currentTarget.contains(h.target)) return;
      s.isHovered = !0;
      let _ = h.currentTarget;
      s.target = _, a(wt(h.target), "pointerover", (S) => {
        s.isHovered && s.target && !yl(s.target, S.target) && d(S, S.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: _,
        pointerType: w
      }), n && n(!0), l(!0);
    }, d = (h, w) => {
      let _ = s.target;
      s.pointerType = "", s.target = null, !(w === "touch" || !s.isHovered || !_) && (s.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: _,
        pointerType: w
      }), n && n(!1), l(!1));
    }, m = {};
    return typeof PointerEvent < "u" && (m.onPointerEnter = (h) => {
      Lr && h.pointerType === "mouse" || g(h, h.pointerType);
    }, m.onPointerLeave = (h) => {
      !o && h.currentTarget.contains(h.target) && d(h, h.pointerType);
    }), {
      hoverProps: m,
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
  return re(() => {
    o && p({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function Fl(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = k({
    isFocused: !1,
    isFocusVisible: t || Ol()
  }), [i, l] = H(!1), [s, a] = H(() => o.current.isFocused && o.current.isFocusVisible), u = oe(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = oe((d) => {
    o.current.isFocused = d, l(d), u();
  }, [
    u
  ]);
  fu((d) => {
    o.current.isFocusVisible = d, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = pu({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: g } = mu({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? g : p
  };
}
var vu = Object.defineProperty, wu = (e, t, n) => t in e ? vu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gr = (e, t, n) => (wu(e, typeof t != "symbol" ? t + "" : t, n), n);
let bu = class {
  constructor() {
    gr(this, "current", this.detect()), gr(this, "handoffState", "pending"), gr(this, "currentId", 0);
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
}, Ct = new bu();
function Gt(e) {
  return Ct.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Yn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ye() {
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
    return Yn(() => {
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
    let r = Ye();
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
function Ot() {
  let [e] = H(Ye);
  return re(() => () => e.dispose(), [e]), e;
}
let ue = (e, t) => {
  Ct.isServer ? re(e, t) : Ze(e, t);
};
function bt(e) {
  let t = k(e);
  return ue(() => {
    t.current = e;
  }, [e]), t;
}
let U = function(e) {
  let t = bt(e);
  return D.useCallback((...n) => t.current(...n), [t]);
};
function yu(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function xu(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function _u({ disabled: e = !1 } = {}) {
  let t = k(null), [n, r] = H(!1), o = Ot(), i = U(() => {
    t.current = null, r(!1), o.dispose();
  }), l = U((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = Gt(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (u) => {
          if (t.current) {
            let c = yu(u);
            r(xu(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let Su = fe(void 0);
function xo() {
  return se(Su);
}
function Vr(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function ke(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ke), r;
}
var Bt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Bt || {}), ct = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ct || {});
function Ce() {
  let e = Eu();
  return oe((t) => Cu({ mergeRefs: e, ...t }), [e]);
}
function Cu({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? Ru;
  let a = Pl(t, e);
  if (i) return En(a, n, r, l, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...p } = a;
    if (c) return En(p, n, r, l, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...p } = a;
    return ke(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return En({ ...p, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return En(a, n, r, l, s);
}
function En(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = hr(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let p = {};
  if (t) {
    let g = !1, d = [];
    for (let [m, h] of Object.entries(t)) typeof h == "boolean" && (g = !0), h === !0 && d.push(m.replace(/([A-Z])/g, (w) => `-${w.toLowerCase()}`));
    if (g) {
      p["data-headlessui-state"] = d.join(" ");
      for (let m of d) p[`data-${m}`] = "";
    }
  }
  if (i === pe && (Object.keys(ut(a)).length > 0 || Object.keys(ut(p)).length > 0)) if (!Wt(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(ut(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ut(a)).concat(Object.keys(ut(p))).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
  } else {
    let g = c.props, d = g == null ? void 0 : g.className, m = typeof d == "function" ? (..._) => Vr(d(..._), a.className) : Vr(d, a.className), h = m ? { className: m } : {}, w = Pl(c.props, ut(hr(a, ["ref"])));
    for (let _ in p) _ in w && delete p[_];
    return vo(c, Object.assign({}, w, p, u, { ref: o($u(c), u.ref) }, h));
  }
  return A(i, Object.assign({}, hr(a, ["ref"]), i !== pe && u, i !== pe && p), c);
}
function Eu() {
  let e = k([]), t = oe((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function Ru(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Pl(...e) {
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
function _o(...e) {
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
function xe(e) {
  var t;
  return Object.assign(ce(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ut(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function hr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function $u(e) {
  return D.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Tu(e, t, n) {
  let [r, o] = H(n), i = e !== void 0, l = k(i), s = k(!1), a = k(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !a.current && (a.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, U((u) => (i || o(u), t == null ? void 0 : t(u)))];
}
function Iu(e) {
  let [t] = H(e);
  return t;
}
function Al(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) kl(n, Nl(t, r), o);
  return n;
}
function Nl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function kl(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) kl(e, Nl(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Al(n, t, e);
}
let Ou = "span";
var jt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(jt || {});
function Mu(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Ce()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Ou, name: "Hidden" });
}
let un = xe(Mu), Fu = fe(null);
function Pu({ children: e }) {
  let t = se(Fu);
  if (!t) return D.createElement(D.Fragment, null, e);
  let { target: n } = t;
  return n ? mn(D.createElement(D.Fragment, null, e), n) : null;
}
function Au({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = H(null), s = Ot();
  return re(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), D.createElement(Pu, null, D.createElement(Nu, { setForm: l, formId: t }), Al(e).map(([a, u]) => D.createElement(un, { features: jt.Hidden, ...ut({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function Nu({ setForm: e, formId: t }) {
  return re(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : D.createElement(un, { features: jt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let ku = fe(void 0);
function Dl() {
  return se(ku);
}
function Du(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Lu(n) ? !1 : r;
}
function Lu(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Ll = Symbol();
function Vu(e, t = !0) {
  return Object.assign(e, { [Ll]: t });
}
function Ae(...e) {
  let t = k(e);
  re(() => {
    t.current = e;
  }, [e]);
  let n = U((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Ll])) ? void 0 : n;
}
let Xn = fe(null);
Xn.displayName = "DescriptionContext";
function Vl() {
  let e = se(Xn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Vl), t;
  }
  return e;
}
function Hu() {
  var e, t;
  return (t = (e = se(Xn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function zu() {
  let [e, t] = H([]);
  return [e.length > 0 ? e.join(" ") : void 0, W(() => function(n) {
    let r = U((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = W(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return D.createElement(Xn.Provider, { value: o }, n.children);
  }, [t])];
}
let Bu = "p";
function ju(e, t) {
  let n = Me(), r = xo(), { id: o = `headlessui-description-${n}`, ...i } = e, l = Vl(), s = Ae(t);
  ue(() => l.register(o), [o, l.register]);
  let a = r || !1, u = W(() => ({ ...l.slot, disabled: a }), [l.slot, a]), c = { ref: s, ...l.props, id: o };
  return Ce()({ ourProps: c, theirProps: i, slot: u, defaultTag: Bu, name: l.name || "Description" });
}
let Uu = xe(ju), Wu = Object.assign(Uu, {});
var Ie = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ie || {});
let Zn = fe(null);
Zn.displayName = "LabelContext";
function Hl() {
  let e = se(Zn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Hl), t;
  }
  return e;
}
function Jn(e) {
  var t, n, r;
  let o = (n = (t = se(Zn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Gu({ inherit: e = !1 } = {}) {
  let t = Jn(), [n, r] = H([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, W(() => function(i) {
    let l = U((a) => (r((u) => [...u, a]), () => r((u) => {
      let c = u.slice(), p = c.indexOf(a);
      return p !== -1 && c.splice(p, 1), c;
    }))), s = W(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return D.createElement(Zn.Provider, { value: s }, i.children);
  }, [r])];
}
let qu = "label";
function Ku(e, t) {
  var n;
  let r = Me(), o = Hl(), i = Dl(), l = xo(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...c } = e, p = Ae(t);
  ue(() => o.register(s), [s, o.register]);
  let g = U((w) => {
    let _ = w.currentTarget;
    if (_ instanceof HTMLLabelElement && w.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(w), _ instanceof HTMLLabelElement) {
      let S = document.getElementById(_.htmlFor);
      if (S) {
        let y = S.getAttribute("disabled");
        if (y === "true" || y === "") return;
        let C = S.getAttribute("aria-disabled");
        if (C === "true" || C === "") return;
        (S instanceof HTMLInputElement && (S.type === "radio" || S.type === "checkbox") || S.role === "radio" || S.role === "checkbox" || S.role === "switch") && S.click(), S.focus({ preventScroll: !0 });
      }
    }
  }), d = l || !1, m = W(() => ({ ...o.slot, disabled: d }), [o.slot, d]), h = { ref: p, ...o.props, id: s, htmlFor: a, onClick: g };
  return u && ("onClick" in h && (delete h.htmlFor, delete h.onClick), "onClick" in c && delete c.onClick), Ce()({ ourProps: h, theirProps: c, slot: m, defaultTag: a ? qu : "div", name: o.name || "Label" });
}
let Yu = xe(Ku), Xu = Object.assign(Yu, {}), Zu = fe(() => {
});
function Ju({ value: e, children: t }) {
  return D.createElement(Zu.Provider, { value: e }, t);
}
function Nt(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var l, s, a, u;
    let c;
    n.key && ((l = n.debug) != null && l.call(n)) && (c = Date.now());
    const p = e();
    if (!(p.length !== r.length || p.some((m, h) => r[h] !== m)))
      return o;
    r = p;
    let d;
    if (n.key && ((s = n.debug) != null && s.call(n)) && (d = Date.now()), o = t(...p), n.key && ((a = n.debug) != null && a.call(n))) {
      const m = Math.round((Date.now() - c) * 100) / 100, h = Math.round((Date.now() - d) * 100) / 100, w = h / 16, _ = (S, y) => {
        for (S = String(S); S.length < y; )
          S = " " + S;
        return S;
      };
      console.info(
        `%c⏱ ${_(h, 5)} /${_(m, 5)} ms`,
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
function ci(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Qu = (e, t) => Math.abs(e - t) <= 1, ec = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var Qt = { NODE_ENV: "production" };
const di = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, tc = (e) => e, nc = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, rc = (e, t) => {
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
  if (o(di(n)), !r.ResizeObserver)
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
      o(di(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, fi = {
  passive: !0
}, pi = typeof window > "u" ? !0 : "onscrollend" in window, oc = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && pi ? () => {
  } : ec(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (c) => () => {
    const { horizontal: p, isRtl: g } = e.options;
    o = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(o, c);
  }, s = l(!0), a = l(!1);
  a(), n.addEventListener("scroll", s, fi);
  const u = e.options.useScrollendEvent && pi;
  return u && n.addEventListener("scrollend", a, fi), () => {
    n.removeEventListener("scroll", s), u && n.removeEventListener("scrollend", a);
  };
}, ic = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, lc = (e, {
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
class sc {
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
        getItemKey: tc,
        rangeExtractor: nc,
        onChange: () => {
        },
        measureElement: ic,
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
    }, this.maybeNotify = Nt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: Qt.NODE_ENV !== "production",
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
    }, this.getMeasurementOptions = Nt(
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
    ), this.getMeasurements = Nt(
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
          const p = i(c), g = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), d = g ? g.end + this.options.gap : r + o, m = s.get(p), h = typeof m == "number" ? m : this.options.estimateSize(c), w = d + h, _ = g ? g.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: d,
            size: h,
            end: w,
            key: p,
            lane: _
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: Qt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Nt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? ac({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: Qt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Nt(
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
        key: Qt.NODE_ENV !== "production",
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
    }, this.getVirtualItems = Nt(
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
        key: Qt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return ci(
          r[zl(
            0,
            r.length - 1,
            (o) => ci(r[o]).start,
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
          const [c] = u, p = this.getScrollOffset();
          Qu(c, p) || this.scrollToIndex(n, { align: s, behavior: o });
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
const zl = (e, t, n, r) => {
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
function ac({
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
  let l = zl(
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
const mi = typeof document < "u" ? Ze : re;
function uc(e) {
  const t = it(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var l;
      i ? De(t) : t(), (l = e.onChange) == null || l.call(e, o, i);
    }
  }, [r] = H(
    () => new sc(n)
  );
  return r.setOptions(n), mi(() => r._didMount(), []), mi(() => r._willUpdate()), r;
}
function Bl(e) {
  return uc({
    observeElementRect: rc,
    observeElementOffset: oc,
    scrollToFn: lc,
    ...e
  });
}
function cc(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function dc(e = cc) {
  return oe((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function fc(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function gi(e, t = !1) {
  let [n, r] = it(() => ({}), {}), o = W(() => fc(e), [e, n]);
  return ue(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let pc = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function jl(e, t) {
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
function Ul(e) {
  return Kn(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let mc = new pc(() => jl(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function qt(e, t) {
  let n = mc.get(t), r = Me(), o = Ul(n);
  if (ue(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let Hr = /* @__PURE__ */ new Map(), ln = /* @__PURE__ */ new Map();
function hi(e) {
  var t;
  let n = (t = ln.get(e)) != null ? t : 0;
  return ln.set(e, n + 1), n !== 0 ? () => vi(e) : (Hr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => vi(e));
}
function vi(e) {
  var t;
  let n = (t = ln.get(e)) != null ? t : 1;
  if (n === 1 ? ln.delete(e) : ln.set(e, n - 1), n !== 1) return;
  let r = Hr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Hr.delete(e));
}
function Wl(e, { allowed: t, disallowed: n } = {}) {
  let r = qt(e, "inert-others");
  ue(() => {
    var o, i;
    if (!r) return;
    let l = Ye();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(hi(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let u = Gt(a);
      if (!u) continue;
      let c = a.parentElement;
      for (; c && c !== u.body; ) {
        for (let p of c.children) s.some((g) => p.contains(g)) || l.add(hi(p));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function Gl(e, t, n) {
  let r = bt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  re(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Ye();
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
let Hn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), gc = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var tt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(tt || {}), zr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(zr || {}), hc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(hc || {});
function vc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Hn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function wc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(gc)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ql = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ql || {});
function bc(e, t = 0) {
  var n;
  return e === ((n = Gt(e)) == null ? void 0 : n.body) ? !1 : ke(t, { 0() {
    return e.matches(Hn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Hn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var yc = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(yc || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function rt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let xc = ["textarea", "input"].join(",");
function _c(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, xc)) != null ? n : !1;
}
function Kl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function sn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? Kl(e) : e : t & 64 ? wc(e) : vc(e);
  o.length > 0 && l.length > 1 && (l = l.filter((d) => !o.some((m) => m != null && "current" in m ? (m == null ? void 0 : m.current) === d : m === d))), r = r ?? i.activeElement;
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
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, p = l.length, g;
  do {
    if (c >= p || c + p <= 0) return 0;
    let d = a + c;
    if (t & 16) d = (d + p) % p;
    else {
      if (d < 0) return 3;
      if (d >= p) return 1;
    }
    g = l[d], g == null || g.focus(u), c += s;
  } while (g !== i.activeElement);
  return t & 6 && _c(g) && g.select(), 2;
}
function Yl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Sc() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Xl() {
  return Yl() || Sc();
}
function en(e, t, n, r) {
  let o = bt(n);
  re(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Zl(e, t, n, r) {
  let o = bt(n);
  re(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const wi = 30;
function Jl(e, t, n) {
  let r = qt(e, "outside-click"), o = bt(n), i = oe(function(a, u) {
    if (a.defaultPrevented) return;
    let c = u(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let p = function g(d) {
      return typeof d == "function" ? g(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let g of p) if (g !== null && (g.contains(c) || a.composed && a.composedPath().includes(g))) return;
    return !bc(c, ql.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), l = k(null);
  en(r, "pointerdown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), en(r, "mousedown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), en(r, "click", (a) => {
    Xl() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = k({ x: 0, y: 0 });
  en(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), en(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= wi || Math.abs(u.y - s.current.y) >= wi)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), Zl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Mt(...e) {
  return W(() => Gt(...e), [...e]);
}
function So(e, t, n, r) {
  let o = bt(n);
  re(() => {
    e = e ?? window;
    function i(l) {
      o.current(l);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Ql(e) {
  let t = k({ value: "", selectionStart: null, selectionEnd: null });
  return So(e, "blur", (n) => {
    let r = n.target;
    r instanceof HTMLInputElement && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), U(() => {
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
function Cc(e, t) {
  return W(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function Ec() {
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
function Rc() {
  return Yl() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Ye();
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
function $c() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Tc(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let St = jl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Ye(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Tc(n) }, o = [Rc(), Ec(), $c()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
St.subscribe(() => {
  let e = St.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && St.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && St.dispatch("TEARDOWN", n);
  }
});
function Ic(e, t, n = () => ({ containers: [] })) {
  let r = Ul(St), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return ue(() => {
    if (!(!t || !e)) return St.dispatch("PUSH", t, n), () => St.dispatch("POP", t, n);
  }, [e, t]), i;
}
function es(e, t, n = () => [document.body]) {
  let r = qt(e, "scroll-lock");
  Ic(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function bi(e) {
  return [e.screenX, e.screenY];
}
function Oc() {
  let e = k([-1, -1]);
  return { wasMoved(t) {
    let n = bi(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = bi(t);
  } };
}
function Mc(e = 0) {
  let [t, n] = H(e), r = oe((a) => n(a), [t]), o = oe((a) => n((u) => u | a), [t]), i = oe((a) => (t & a) === a, [t]), l = oe((a) => n((u) => u & ~a), [n]), s = oe((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var Fc = { NODE_ENV: "production" }, yi, xi;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((yi = process == null ? void 0 : Fc) == null ? void 0 : yi.NODE_ENV) === "test" && typeof ((xi = Element == null ? void 0 : Element.prototype) == null ? void 0 : xi.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Pc = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Pc || {});
function ts(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function ns(e, t, n, r) {
  let [o, i] = H(n), { hasFlag: l, addFlag: s, removeFlag: a } = Mc(e && o ? 3 : 0), u = k(!1), c = k(!1), p = Ot();
  return ue(() => {
    var g;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (g = r == null ? void 0 : r.start) == null || g.call(r, n), Ac(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (s(3), a(4)) : (s(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
      }, done() {
        var d;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, a(7), n || i(!1), (d = r == null ? void 0 : r.end) == null || d.call(r, n));
      } });
    }
  }, [e, n, t, p]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Ac(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Ye();
  return kc(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(Nc(e, r));
    });
  }), i.dispose;
}
function Nc(e, t) {
  var n, r;
  let o = Ye();
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
function kc(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function Dc(e, { container: t, accept: n, walk: r }) {
  let o = k(n), i = k(r);
  re(() => {
    o.current = n, i.current = r;
  }, [n, r]), ue(() => {
    if (!t || !e) return;
    let l = Gt(t);
    if (!l) return;
    let s = o.current, a = i.current, u = Object.assign((p) => s(p), { acceptNode: s }), c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, i]);
}
function cn(e, t) {
  let n = k([]), r = U(e);
  re(() => {
    let o = [...n.current];
    for (let [i, l] of t.entries()) if (n.current[i] !== l) {
      let s = r(t, o);
      return n.current = t, s;
    }
  }, [r, ...t]);
}
function Qn() {
  return typeof window < "u";
}
function Kt(e) {
  return rs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Je(e) {
  var t;
  return (t = (rs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function rs(e) {
  return Qn() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function Fe(e) {
  return Qn() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Xe(e) {
  return Qn() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function _i(e) {
  return !Qn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function hn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Lc(e) {
  return ["table", "td", "th"].includes(Kt(e));
}
function er(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Co(e) {
  const t = Eo(), n = Fe(e) ? je(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Vc(e) {
  let t = mt(e);
  for (; Xe(t) && !Ut(t); ) {
    if (Co(t))
      return t;
    if (er(t))
      return null;
    t = mt(t);
  }
  return null;
}
function Eo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ut(e) {
  return ["html", "body", "#document"].includes(Kt(e));
}
function je(e) {
  return Le(e).getComputedStyle(e);
}
function tr(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if (Kt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _i(e) && e.host || // Fallback.
    Je(e)
  );
  return _i(t) ? t.host : t;
}
function os(e) {
  const t = mt(e);
  return Ut(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xe(t) && hn(t) ? t : os(t);
}
function dn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = os(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Le(o);
  if (i) {
    const s = Br(l);
    return t.concat(l, l.visualViewport || [], hn(o) ? o : [], s && n ? dn(s) : []);
  }
  return t.concat(o, dn(o, [], n));
}
function Br(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hc() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const $t = Math.min, Oe = Math.max, fn = Math.round, Rn = Math.floor, Ke = (e) => ({
  x: e,
  y: e
}), zc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bc = {
  start: "end",
  end: "start"
};
function Si(e, t, n) {
  return Oe(e, $t(t, n));
}
function Yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gt(e) {
  return e.split("-")[0];
}
function vn(e) {
  return e.split("-")[1];
}
function is(e) {
  return e === "x" ? "y" : "x";
}
function ls(e) {
  return e === "y" ? "height" : "width";
}
function pt(e) {
  return ["top", "bottom"].includes(gt(e)) ? "y" : "x";
}
function ss(e) {
  return is(pt(e));
}
function jc(e, t, n) {
  n === void 0 && (n = !1);
  const r = vn(e), o = ss(e), i = ls(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = zn(l)), [l, zn(l)];
}
function Uc(e) {
  const t = zn(e);
  return [jr(e), t, jr(t)];
}
function jr(e) {
  return e.replace(/start|end/g, (t) => Bc[t]);
}
function Wc(e, t, n) {
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
function Gc(e, t, n, r) {
  const o = vn(e);
  let i = Wc(gt(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(jr)))), i;
}
function zn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zc[t]);
}
function qc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Kc(e) {
  return typeof e != "number" ? qc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bn(e) {
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
function Ci(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = pt(t), l = ss(t), s = ls(l), a = gt(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, g = r[s] / 2 - o[s] / 2;
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
        y: p
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (vn(t)) {
    case "start":
      d[l] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      d[l] += g * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const Yc = async (e, t, n) => {
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
    y: p
  } = Ci(u, r, a), g = r, d = {}, m = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: w,
      fn: _
    } = s[h], {
      x: S,
      y,
      data: C,
      reset: T
    } = await _({
      x: c,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = S ?? c, p = y ?? p, d = {
      ...d,
      [w]: {
        ...d[w],
        ...C
      }
    }, T && m <= 50 && (m++, typeof T == "object" && (T.placement && (g = T.placement), T.rects && (u = T.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: c,
      y: p
    } = Ci(u, g, a)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: d
  };
};
async function nr(e, t) {
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
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: d = 0
  } = Yt(t, e), m = Kc(d), w = s[g ? p === "floating" ? "reference" : "floating" : p], _ = Bn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), S = p === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Bn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: S,
    offsetParent: y,
    strategy: a
  }) : S);
  return {
    top: (_.top - T.top + m.top) / C.y,
    bottom: (T.bottom - _.bottom + m.bottom) / C.y,
    left: (_.left - T.left + m.left) / C.x,
    right: (T.right - _.right + m.right) / C.x
  };
}
const Xc = function(e) {
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
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...w
      } = Yt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = gt(o), S = pt(s), y = gt(s) === s, C = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), T = g || (y || !h ? [zn(s)] : Uc(s)), M = m !== "none";
      !g && M && T.push(...Gc(s, h, m, C));
      const I = [s, ...T], v = await nr(t, w), b = [];
      let x = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && b.push(v[_]), p) {
        const j = jc(o, l, C);
        b.push(v[j[0]], v[j[1]]);
      }
      if (x = [...x, {
        placement: o,
        overflows: b
      }], !b.every((j) => j <= 0)) {
        var E, R;
        const j = (((E = i.flip) == null ? void 0 : E.index) || 0) + 1, G = I[j];
        if (G) {
          var F;
          const V = p === "alignment" ? S !== pt(G) : !1, O = ((F = x[0]) == null ? void 0 : F.overflows[0]) > 0;
          if (!V || O)
            return {
              data: {
                index: j,
                overflows: x
              },
              reset: {
                placement: G
              }
            };
        }
        let z = (R = x.filter((V) => V.overflows[0] <= 0).sort((V, O) => V.overflows[1] - O.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!z)
          switch (d) {
            case "bestFit": {
              var P;
              const V = (P = x.filter((O) => {
                if (M) {
                  const K = pt(O.placement);
                  return K === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((K) => K > 0).reduce((K, N) => K + N, 0)]).sort((O, K) => O[1] - K[1])[0]) == null ? void 0 : P[0];
              V && (z = V);
              break;
            }
            case "initialPlacement":
              z = s;
              break;
          }
        if (o !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
async function Zc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = gt(n), s = vn(n), a = pt(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, p = Yt(t, e);
  let {
    mainAxis: g,
    crossAxis: d,
    alignmentAxis: m
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof m == "number" && (d = s === "end" ? m * -1 : m), a ? {
    x: d * c,
    y: g * u
  } : {
    x: g * u,
    y: d * c
  };
}
const Jc = function(e) {
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
      } = t, a = await Zc(t, e);
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
}, Qc = function(e) {
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
              x: _,
              y: S
            } = w;
            return {
              x: _,
              y: S
            };
          }
        },
        ...a
      } = Yt(e, t), u = {
        x: n,
        y: r
      }, c = await nr(t, a), p = pt(gt(o)), g = is(p);
      let d = u[g], m = u[p];
      if (i) {
        const w = g === "y" ? "top" : "left", _ = g === "y" ? "bottom" : "right", S = d + c[w], y = d - c[_];
        d = Si(S, d, y);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", S = m + c[w], y = m - c[_];
        m = Si(S, m, y);
      }
      const h = s.fn({
        ...t,
        [g]: d,
        [p]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [g]: i,
            [p]: l
          }
        }
      };
    }
  };
}, ed = function(e) {
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
      } = Yt(e, t), c = await nr(t, u), p = gt(o), g = vn(o), d = pt(o) === "y", {
        width: m,
        height: h
      } = i.floating;
      let w, _;
      p === "top" || p === "bottom" ? (w = p, _ = g === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = p, w = g === "end" ? "top" : "bottom");
      const S = h - c.top - c.bottom, y = m - c.left - c.right, C = $t(h - c[w], S), T = $t(m - c[_], y), M = !t.middlewareData.shift;
      let I = C, v = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (v = y), (r = t.middlewareData.shift) != null && r.enabled.y && (I = S), M && !g) {
        const x = Oe(c.left, 0), E = Oe(c.right, 0), R = Oe(c.top, 0), F = Oe(c.bottom, 0);
        d ? v = m - 2 * (x !== 0 || E !== 0 ? x + E : Oe(c.left, c.right)) : I = h - 2 * (R !== 0 || F !== 0 ? R + F : Oe(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: v,
        availableHeight: I
      });
      const b = await l.getDimensions(s.floating);
      return m !== b.width || h !== b.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function as(e) {
  const t = je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Xe(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = fn(n) !== i || fn(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function Ro(e) {
  return Fe(e) ? e : e.contextElement;
}
function Vt(e) {
  const t = Ro(e);
  if (!Xe(t))
    return Ke(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = as(t);
  let l = (i ? fn(n.width) : n.width) / r, s = (i ? fn(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const td = /* @__PURE__ */ Ke(0);
function us(e) {
  const t = Le(e);
  return !Eo() || !t.visualViewport ? td : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function nd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function Tt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ro(e);
  let l = Ke(1);
  t && (r ? Fe(r) && (l = Vt(r)) : l = Vt(e));
  const s = nd(i, n, r) ? us(i) : Ke(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, c = o.width / l.x, p = o.height / l.y;
  if (i) {
    const g = Le(i), d = r && Fe(r) ? Le(r) : r;
    let m = g, h = Br(m);
    for (; h && r && d !== m; ) {
      const w = Vt(h), _ = h.getBoundingClientRect(), S = je(h), y = _.left + (h.clientLeft + parseFloat(S.paddingLeft)) * w.x, C = _.top + (h.clientTop + parseFloat(S.paddingTop)) * w.y;
      a *= w.x, u *= w.y, c *= w.x, p *= w.y, a += y, u += C, m = Le(h), h = Br(m);
    }
  }
  return Bn({
    width: c,
    height: p,
    x: a,
    y: u
  });
}
function $o(e, t) {
  const n = tr(e).scrollLeft;
  return t ? t.left + n : Tt(Je(e)).left + n;
}
function cs(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    $o(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function rd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = Je(r), s = t ? er(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ke(1);
  const c = Ke(0), p = Xe(r);
  if ((p || !p && !i) && ((Kt(r) !== "body" || hn(l)) && (a = tr(r)), Xe(r))) {
    const d = Tt(r);
    u = Vt(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  const g = l && !p && !i ? cs(l, a, !0) : Ke(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + g.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + g.y
  };
}
function od(e) {
  return Array.from(e.getClientRects());
}
function id(e) {
  const t = Je(e), n = tr(e), r = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + $o(e);
  const s = -n.scrollTop;
  return je(r).direction === "rtl" && (l += Oe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function ld(e, t) {
  const n = Le(e), r = Je(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Eo();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function sd(e, t) {
  const n = Tt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Xe(e) ? Vt(e) : Ke(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function Ei(e, t, n) {
  let r;
  if (t === "viewport")
    r = ld(e, n);
  else if (t === "document")
    r = id(Je(e));
  else if (Fe(t))
    r = sd(t, n);
  else {
    const o = us(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Bn(r);
}
function ds(e, t) {
  const n = mt(e);
  return n === t || !Fe(n) || Ut(n) ? !1 : je(n).position === "fixed" || ds(n, t);
}
function ad(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = dn(e, [], !1).filter((s) => Fe(s) && Kt(s) !== "body"), o = null;
  const i = je(e).position === "fixed";
  let l = i ? mt(e) : e;
  for (; Fe(l) && !Ut(l); ) {
    const s = je(l), a = Co(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || hn(l) && !a && ds(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = mt(l);
  }
  return t.set(e, r), r;
}
function ud(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? er(t) ? [] : ad(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const p = Ei(t, c, o);
    return u.top = Oe(p.top, u.top), u.right = $t(p.right, u.right), u.bottom = $t(p.bottom, u.bottom), u.left = Oe(p.left, u.left), u;
  }, Ei(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function cd(e) {
  const {
    width: t,
    height: n
  } = as(e);
  return {
    width: t,
    height: n
  };
}
function dd(e, t, n) {
  const r = Xe(t), o = Je(t), i = n === "fixed", l = Tt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Ke(0);
  function u() {
    a.x = $o(o);
  }
  if (r || !r && !i)
    if ((Kt(t) !== "body" || hn(o)) && (s = tr(t)), r) {
      const d = Tt(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? cs(o, s) : Ke(0), p = l.left + s.scrollLeft - a.x - c.x, g = l.top + s.scrollTop - a.y - c.y;
  return {
    x: p,
    y: g,
    width: l.width,
    height: l.height
  };
}
function vr(e) {
  return je(e).position === "static";
}
function Ri(e, t) {
  if (!Xe(e) || je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Je(e) === n && (n = n.ownerDocument.body), n;
}
function fs(e, t) {
  const n = Le(e);
  if (er(e))
    return n;
  if (!Xe(e)) {
    let o = mt(e);
    for (; o && !Ut(o); ) {
      if (Fe(o) && !vr(o))
        return o;
      o = mt(o);
    }
    return n;
  }
  let r = Ri(e, t);
  for (; r && Lc(r) && vr(r); )
    r = Ri(r, t);
  return r && Ut(r) && vr(r) && !Co(r) ? n : r || Vc(e) || n;
}
const fd = async function(e) {
  const t = this.getOffsetParent || fs, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: dd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function pd(e) {
  return je(e).direction === "rtl";
}
const md = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rd,
  getDocumentElement: Je,
  getClippingRect: ud,
  getOffsetParent: fs,
  getElementRects: fd,
  getClientRects: od,
  getDimensions: cd,
  getScale: Vt,
  isElement: Fe,
  isRTL: pd
};
function ps(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gd(e, t) {
  let n = null, r;
  const o = Je(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: g,
      height: d
    } = u;
    if (s || t(), !g || !d)
      return;
    const m = Rn(p), h = Rn(o.clientWidth - (c + g)), w = Rn(o.clientHeight - (p + d)), _ = Rn(c), y = {
      rootMargin: -m + "px " + -h + "px " + -w + "px " + -_ + "px",
      threshold: Oe(0, $t(1, a)) || 1
    };
    let C = !0;
    function T(M) {
      const I = M[0].intersectionRatio;
      if (I !== a) {
        if (!C)
          return l();
        I ? l(!1, I) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !ps(u, e.getBoundingClientRect()) && l(), C = !1;
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
function hd(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = Ro(e), c = o || i ? [...u ? dn(u) : [], ...dn(t)] : [];
  c.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), i && _.addEventListener("resize", n);
  });
  const p = u && s ? gd(u, n) : null;
  let g = -1, d = null;
  l && (d = new ResizeObserver((_) => {
    let [S] = _;
    S && S.target === u && d && (d.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var y;
      (y = d) == null || y.observe(t);
    })), n();
  }), u && !a && d.observe(u), d.observe(t));
  let m, h = a ? Tt(e) : null;
  a && w();
  function w() {
    const _ = Tt(e);
    h && !ps(h, _) && n(), h = _, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var _;
    c.forEach((S) => {
      o && S.removeEventListener("scroll", n), i && S.removeEventListener("resize", n);
    }), p == null || p(), (_ = d) == null || _.disconnect(), d = null, a && cancelAnimationFrame(m);
  };
}
const wr = nr, vd = Jc, wd = Qc, bd = Xc, yd = ed, xd = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: md,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Yc(e, t, {
    ...o,
    platform: i
  });
};
var An = typeof document < "u" ? Ze : re;
function jn(e, t) {
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
        if (!jn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !jn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ms(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $i(e, t) {
  const n = ms(e);
  return Math.round(t * n) / n;
}
function br(e) {
  const t = k(e);
  return An(() => {
    t.current = e;
  }), t;
}
function _d(e) {
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
  } = e, [c, p] = H({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, d] = H(r);
  jn(g, r) || d(r);
  const [m, h] = H(null), [w, _] = H(null), S = oe((V) => {
    V !== M.current && (M.current = V, h(V));
  }, []), y = oe((V) => {
    V !== I.current && (I.current = V, _(V));
  }, []), C = i || m, T = l || w, M = k(null), I = k(null), v = k(c), b = a != null, x = br(a), E = br(o), R = br(u), F = oe(() => {
    if (!M.current || !I.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: g
    };
    E.current && (V.platform = E.current), xd(M.current, I.current, V).then((O) => {
      const K = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      P.current && !jn(v.current, K) && (v.current = K, De(() => {
        p(K);
      }));
    });
  }, [g, t, n, E, R]);
  An(() => {
    u === !1 && v.current.isPositioned && (v.current.isPositioned = !1, p((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [u]);
  const P = k(!1);
  An(() => (P.current = !0, () => {
    P.current = !1;
  }), []), An(() => {
    if (C && (M.current = C), T && (I.current = T), C && T) {
      if (x.current)
        return x.current(C, T, F);
      F();
    }
  }, [C, T, F, x, b]);
  const j = W(() => ({
    reference: M,
    floating: I,
    setReference: S,
    setFloating: y
  }), [S, y]), G = W(() => ({
    reference: C,
    floating: T
  }), [C, T]), z = W(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return V;
    const O = $i(G.floating, c.x), K = $i(G.floating, c.y);
    return s ? {
      ...V,
      transform: "translate(" + O + "px, " + K + "px)",
      ...ms(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: K
    };
  }, [n, s, G.floating, c.x, c.y]);
  return W(() => ({
    ...c,
    update: F,
    refs: j,
    elements: G,
    floatingStyles: z
  }), [c, F, j, G, z]);
}
const gs = (e, t) => ({
  ...vd(e),
  options: [e, t]
}), Sd = (e, t) => ({
  ...wd(e),
  options: [e, t]
}), Cd = (e, t) => ({
  ...bd(e),
  options: [e, t]
}), Ed = (e, t) => ({
  ...yd(e),
  options: [e, t]
}), hs = {
  ...Pr
}, Rd = hs.useInsertionEffect, $d = Rd || ((e) => e());
function vs(e) {
  const t = k(() => {
  });
  return $d(() => {
    t.current = e;
  }), oe(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Ur = typeof document < "u" ? Ze : re;
let Ti = !1, Td = 0;
const Ii = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Td++
);
function Id() {
  const [e, t] = H(() => Ti ? Ii() : void 0);
  return Ur(() => {
    e == null && t(Ii());
  }, []), re(() => {
    Ti = !0;
  }, []), e;
}
const Od = hs.useId, Md = Od || Id;
function Fd() {
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
const Pd = /* @__PURE__ */ fe(null), Ad = /* @__PURE__ */ fe(null), Nd = () => {
  var e;
  return ((e = se(Pd)) == null ? void 0 : e.id) || null;
}, kd = () => se(Ad), Dd = "data-floating-ui-focusable";
function Ld(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Md(), i = k({}), [l] = H(() => Fd()), s = Nd() != null, [a, u] = H(r.reference), c = vs((d, m, h) => {
    i.current.openEvent = d ? m : void 0, l.emit("openchange", {
      open: d,
      event: m,
      reason: h,
      nested: s
    }), n == null || n(d, m, h);
  }), p = W(() => ({
    setPositionReference: u
  }), []), g = W(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return W(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: g,
    events: l,
    floatingId: o,
    refs: p
  }), [t, c, g, l, o, p]);
}
function Vd(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Ld({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = H(null), [s, a] = H(null), c = (o == null ? void 0 : o.domReference) || i, p = k(null), g = kd();
  Ur(() => {
    c && (p.current = c);
  }, [c]);
  const d = _d({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), m = oe((y) => {
    const C = Fe(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    a(C), d.refs.setReference(C);
  }, [d.refs]), h = oe((y) => {
    (Fe(y) || y === null) && (p.current = y, l(y)), (Fe(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !Fe(y)) && d.refs.setReference(y);
  }, [d.refs]), w = W(() => ({
    ...d.refs,
    setReference: h,
    setPositionReference: m,
    domReference: p
  }), [d.refs, h, m]), _ = W(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), S = W(() => ({
    ...d,
    ...r,
    refs: w,
    elements: _,
    nodeId: t
  }), [d, w, _, t, r]);
  return Ur(() => {
    r.dataRef.current.floatingContext = S;
    const y = g == null ? void 0 : g.nodesRef.current.find((C) => C.id === t);
    y && (y.context = S);
  }), W(() => ({
    ...d,
    context: S,
    refs: w,
    elements: _
  }), [d, w, _, S]);
}
const Oi = "active", Mi = "selected";
function yr(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Oi]: l,
      [Mi]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Dd]: ""
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [u, c] = a;
      if (!(o && [Oi, Mi].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var p;
            (p = r.get(u)) == null || p.push(c), l[u] = function() {
              for (var g, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
                m[h] = arguments[h];
              return (g = r.get(u)) == null ? void 0 : g.map((w) => w(...m)).find((w) => w !== void 0);
            };
          }
        } else
          l[u] = c;
    }), l), {})
  };
}
function Hd(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = oe(
    (s) => yr(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = oe(
    (s) => yr(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = oe(
    (s) => yr(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return W(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
function Fi(e, t) {
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
const zd = (e) => ({
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
    } = Yt(e, t), {
      rects: p,
      elements: {
        floating: g
      }
    } = t, d = n.current[l], m = (u == null ? void 0 : u.current) || g, h = g.clientTop || m.clientTop, w = g.clientTop !== 0, _ = m.clientTop !== 0, S = g === m;
    if (!d)
      return {};
    const y = {
      ...t,
      ...await gs(-d.offsetTop - g.clientTop - p.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, C = await wr(Fi(y, m.scrollHeight + h + g.clientTop), c), T = await wr(y, {
      ...c,
      elementContext: "reference"
    }), M = Oe(0, C.top), I = y.y + M, x = (m.scrollHeight > m.clientHeight ? (E) => E : fn)(Oe(0, m.scrollHeight + (w && S || _ ? h * 2 : 0) - M - Oe(0, C.bottom)));
    if (m.style.maxHeight = x + "px", m.scrollTop = M, o) {
      const E = m.offsetHeight < d.offsetHeight * $t(s, n.current.length) - 1 || T.top >= -a || T.bottom >= -a;
      De(() => o(E));
    }
    return r && (r.current = await wr(Fi({
      ...y,
      y: I
    }, m.offsetHeight + h + g.clientTop), c)), {
      y: I
    };
  }
});
function Bd(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = vs(s), u = k(!1), c = k(null), p = k(null);
  re(() => {
    if (!o) return;
    function d(h) {
      if (h.ctrlKey || !m || i.current == null)
        return;
      const w = h.deltaY, _ = i.current.top >= -0.5, S = i.current.bottom >= -0.5, y = m.scrollHeight - m.clientHeight, C = w < 0 ? -1 : 1, T = w < 0 ? "max" : "min";
      m.scrollHeight <= m.clientHeight || (!_ && w > 0 || !S && w < 0 ? (h.preventDefault(), De(() => {
        a((M) => M + Math[T](w, y * C));
      })) : /firefox/i.test(Hc()) && (m.scrollTop += w));
    }
    const m = (l == null ? void 0 : l.current) || r.floating;
    if (n && m)
      return m.addEventListener("wheel", d), requestAnimationFrame(() => {
        c.current = m.scrollTop, i.current != null && (p.current = {
          ...i.current
        });
      }), () => {
        c.current = null, p.current = null, m.removeEventListener("wheel", d);
      };
  }, [o, n, r.floating, i, l, a]);
  const g = W(() => ({
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
          const m = d.scrollTop - c.current;
          (i.current.bottom < -0.5 && m < -1 || i.current.top < -0.5 && m > 1) && De(() => a((h) => h + m));
        }
        requestAnimationFrame(() => {
          c.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return W(() => o ? {
    floating: g
  } : {}, [o, g]);
}
let wn = fe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
wn.displayName = "FloatingContext";
let To = fe(null);
To.displayName = "PlacementContext";
function jd(e) {
  return W(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Ud() {
  return se(wn).setReference;
}
function Wd() {
  let { getFloatingProps: e, slot: t } = se(wn);
  return oe((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Gd(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = se(To), n = W(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  ue(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = se(wn);
  return W(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Pi = 4;
function qd({ children: e, enabled: t = !0 }) {
  let [n, r] = H(null), [o, i] = H(0), l = k(null), [s, a] = H(null);
  Kd(s);
  let u = t && n !== null && s !== null, { to: c = "bottom", gap: p = 0, offset: g = 0, padding: d = 0, inner: m } = Yd(n, s), [h, w = "center"] = c.split(" ");
  ue(() => {
    u && i(0);
  }, [u]);
  let { refs: _, floatingStyles: S, context: y } = Vd({ open: u, placement: h === "selection" ? w === "center" ? "bottom" : `bottom-${w}` : w === "center" ? `${h}` : `${h}-${w}`, strategy: "absolute", transform: !1, middleware: [gs({ mainAxis: h === "selection" ? 0 : p, crossAxis: g }), Sd({ padding: d }), h !== "selection" && Cd({ padding: d }), h === "selection" && m ? zd({ ...m, padding: d, overflowRef: l, offset: o, minItemsVisible: Pi, referenceOverflowThreshold: d, onFallbackChange(E) {
    var R, F;
    if (!E) return;
    let P = y.elements.floating;
    if (!P) return;
    let j = parseFloat(getComputedStyle(P).scrollPaddingBottom) || 0, G = Math.min(Pi, P.childElementCount), z = 0, V = 0;
    for (let O of (F = (R = y.elements.floating) == null ? void 0 : R.childNodes) != null ? F : []) if (O instanceof HTMLElement) {
      let K = O.offsetTop, N = K + O.clientHeight + j, B = P.scrollTop, $ = B + P.clientHeight;
      if (K >= B && N <= $) G--;
      else {
        V = Math.max(0, Math.min(N, $) - Math.max(K, B)), z = O.clientHeight;
        break;
      }
    }
    G >= 1 && i((O) => {
      let K = z * G - V + j;
      return O >= K ? O : K;
    });
  } }) : null, Ed({ padding: d, apply({ availableWidth: E, availableHeight: R, elements: F }) {
    Object.assign(F.floating.style, { overflow: "auto", maxWidth: `${E}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${R}px)` });
  } })].filter(Boolean), whileElementsMounted: hd }), [C = h, T = w] = y.placement.split("-");
  h === "selection" && (C = "selection");
  let M = W(() => ({ anchor: [C, T].filter(Boolean).join(" ") }), [C, T]), I = Bd(y, { overflowRef: l, onChange: i }), { getReferenceProps: v, getFloatingProps: b } = Hd([I]), x = U((E) => {
    a(E), _.setFloating(E);
  });
  return A(To.Provider, { value: r }, A(wn.Provider, { value: { setFloating: x, setReference: _.setReference, styles: S, getReferenceProps: v, getFloatingProps: b, slot: M } }, e));
}
function Kd(e) {
  ue(() => {
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
function Yd(e, t) {
  var n, r, o;
  let i = xr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = xr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = xr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function xr(e, t, n = void 0) {
  let r = Ot(), o = U((a, u) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!u) return [n, null];
      let c = Ai(a, u);
      return [c, (p) => {
        let g = ws(a);
        {
          let d = g.map((m) => window.getComputedStyle(u).getPropertyValue(m));
          r.requestAnimationFrame(function m() {
            r.nextFrame(m);
            let h = !1;
            for (let [_, S] of g.entries()) {
              let y = window.getComputedStyle(u).getPropertyValue(S);
              if (d[_] !== y) {
                d[_] = y, h = !0;
                break;
              }
            }
            if (!h) return;
            let w = Ai(a, u);
            c !== w && (p(w), c = w);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = W(() => o(e, t)[0], [e, t]), [l = i, s] = H();
  return ue(() => {
    let [a, u] = o(e, t);
    if (s(a), !!u) return u(s);
  }, [e, t]), l;
}
function ws(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...ws(o)] : [r];
  }
  return [];
}
function Ai(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function Xd({ children: e, freeze: t }) {
  let n = Wr(t, e);
  return D.createElement(D.Fragment, null, n);
}
function Wr(e, t) {
  let [n, r] = H(t);
  return !e && n !== t && r(t), e ? n : t;
}
let rr = fe(null);
rr.displayName = "OpenClosedContext";
var Pe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Pe || {});
function bn() {
  return se(rr);
}
function bs({ value: e, children: t }) {
  return D.createElement(rr.Provider, { value: e }, t);
}
function Zd({ children: e }) {
  return D.createElement(rr.Provider, { value: null }, e);
}
function Jd(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let qe = [];
Jd(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || qe[0] === t.target) return;
    let n = t.target;
    n = n.closest(Hn), qe.unshift(n ?? t.target), qe = qe.filter((r) => r != null && r.isConnected), qe.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Qd(e) {
  throw new Error("Unexpected object: " + e);
}
var ye = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ye || {});
function Ni(e, t) {
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
      Qd(e);
  }
}
var Io = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Io || {});
function ys(e) {
  let t = U(e), n = k(!1);
  re(() => (n.current = !1, () => {
    n.current = !0, Yn(() => {
      n.current && t();
    });
  }), [t]);
}
function ef() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Pr ? ((t) => t.useSyncExternalStore)(Pr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function yn() {
  let e = ef(), [t, n] = H(Ct.isHandoffComplete);
  return t && Ct.isHandoffComplete === !1 && n(!1), re(() => {
    t !== !0 && n(!0);
  }, [t]), re(() => Ct.handoff(), []), e ? !1 : t;
}
let xs = fe(!1);
function tf() {
  return se(xs);
}
function ki(e) {
  return D.createElement(xs.Provider, { value: e.force }, e.children);
}
function nf(e) {
  let t = tf(), n = se(Ss), r = Mt(e), [o, i] = H(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (Ct.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return re(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), re(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let _s = pe, rf = xe(function(e, t) {
  let n = e, r = k(null), o = Ae(Vu((p) => {
    r.current = p;
  }), t), i = Mt(r), l = nf(r), [s] = H(() => {
    var p;
    return Ct.isServer ? null : (p = i == null ? void 0 : i.createElement("div")) != null ? p : null;
  }), a = se(Gr), u = yn();
  ue(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), ue(() => {
    if (s && a) return a.register(s);
  }, [a, s]), ys(() => {
    var p;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((p = l.parentElement) == null || p.removeChild(l)));
  });
  let c = Ce();
  return u ? !l || !s ? null : mn(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: _s, name: "Portal" }), s) : null;
});
function of(e, t) {
  let n = Ae(t), { enabled: r = !0, ...o } = e, i = Ce();
  return r ? D.createElement(rf, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: _s, name: "Portal" });
}
let lf = pe, Ss = fe(null);
function sf(e, t) {
  let { target: n, ...r } = e, o = { ref: Ae(t) }, i = Ce();
  return D.createElement(Ss.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: lf, name: "Popover.Group" }));
}
let Gr = fe(null);
function af() {
  let e = se(Gr), t = k([]), n = U((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = U((i) => {
    let l = t.current.indexOf(i);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
  }), o = W(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, W(() => function({ children: i }) {
    return D.createElement(Gr.Provider, { value: o }, i);
  }, [o])];
}
let uf = xe(of), Cs = xe(sf), Es = Object.assign(uf, { Group: Cs });
var cf = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(cf || {}), df = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(df || {}), ff = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(ff || {}), pf = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(pf || {});
function _r(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((l, s) => l.dataRef.current.order - s.dataRef.current.order) : Kl(r, (l) => l.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let mf = { 1(e) {
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
    let { options: u, disabled: c } = e.virtual, p = t.focus === ye.Specific ? t.idx : Ni(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var d, m;
      return (m = (d = e.activeOptionIndex) != null ? d : u.findIndex((h) => !c(h))) != null ? m : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), g = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === p && e.activationTrigger === g ? e : { ...e, activeOptionIndex: p, activationTrigger: g, isTyping: !1, __demoMode: !1 };
  }
  let l = _r(e);
  if (l.activeOptionIndex === null) {
    let u = l.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (l.activeOptionIndex = u);
  }
  let s = t.focus === ye.Specific ? t.idx : Ni(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === s && e.activationTrigger === a ? e : { ...e, ...l, isTyping: !1, activeOptionIndex: s, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, l = _r(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(i));
  let s = { ...e, ...l, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = _r(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, Oo = fe(null);
Oo.displayName = "ComboboxActionsContext";
function xn(e) {
  let t = se(Oo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, xn), n;
  }
  return t;
}
let Rs = fe(null);
function gf(e) {
  let t = Xt("VirtualProvider"), { options: n } = t.virtual, [r, o] = W(() => {
    let u = t.optionsElement;
    if (!u) return [0, 0];
    let c = window.getComputedStyle(u);
    return [parseFloat(c.paddingBlockStart || c.paddingTop), parseFloat(c.paddingBlockEnd || c.paddingBottom)];
  }, [t.optionsElement]), i = Bl({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [l, s] = H(0);
  ue(() => {
    s((u) => u + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : D.createElement(Rs.Provider, { value: i }, D.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var c;
    return D.createElement(pe, { key: u.key }, D.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }), { key: `${l}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let pn = fe(null);
pn.displayName = "ComboboxDataContext";
function Xt(e) {
  let t = se(pn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Xt), n;
  }
  return t;
}
function hf(e, t) {
  return ke(t.type, mf, e, t);
}
let vf = pe;
function wf(e, t) {
  var n, r;
  let o = xo(), { value: i, defaultValue: l, onChange: s, form: a, name: u, by: c, disabled: p = o || !1, onClose: g, __demoMode: d = !1, multiple: m = !1, immediate: h = !1, virtual: w = null, nullable: _, ...S } = e, y = Iu(l), [C = m ? [] : void 0, T] = Tu(i, s, y), [M, I] = it(hf, { dataRef: qn(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: w ? { options: w.options, disabled: (n = w.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), v = k(!1), b = k({ static: !1, hold: !1 }), x = dc(c), E = U((L) => w ? c === null ? w.options.indexOf(L) : w.options.findIndex((Y) => x(Y, L)) : M.options.findIndex((Y) => x(Y.dataRef.current.value, L))), R = oe((L) => ke(P.mode, { 1: () => C.some((Y) => x(Y, L)), 0: () => x(C, L) }), [C]), F = U((L) => M.activeOptionIndex === E(L)), P = W(() => ({ ...M, immediate: h, optionsPropsRef: b, value: C, defaultValue: y, disabled: p, mode: m ? 1 : 0, virtual: w ? M.virtual : null, get activeOptionIndex() {
    if (v.current && M.activeOptionIndex === null && (w ? w.options.length > 0 : M.options.length > 0)) {
      if (w) {
        let Y = w.options.findIndex((Q) => {
          var Re, ne;
          return !((ne = (Re = w.disabled) == null ? void 0 : Re.call(w, Q)) != null && ne);
        });
        if (Y !== -1) return Y;
      }
      let L = M.options.findIndex((Y) => !Y.dataRef.current.disabled);
      if (L !== -1) return L;
    }
    return M.activeOptionIndex;
  }, calculateIndex: E, compare: x, isSelected: R, isActive: F }), [C, y, p, m, d, M, w]);
  ue(() => {
    var L;
    w && I({ type: 7, options: w.options, disabled: (L = w.disabled) != null ? L : null });
  }, [w, w == null ? void 0 : w.options, w == null ? void 0 : w.disabled]), ue(() => {
    M.dataRef.current = P;
  }, [P]);
  let j = P.comboboxState === 0;
  Jl(j, [P.buttonElement, P.inputElement, P.optionsElement], () => q.closeCombobox());
  let G = W(() => {
    var L, Y, Q;
    return { open: P.comboboxState === 0, disabled: p, activeIndex: P.activeOptionIndex, activeOption: P.activeOptionIndex === null ? null : P.virtual ? P.virtual.options[(L = P.activeOptionIndex) != null ? L : 0] : (Q = (Y = P.options[P.activeOptionIndex]) == null ? void 0 : Y.dataRef.current.value) != null ? Q : null, value: C };
  }, [P, p, C]), z = U(() => {
    if (P.activeOptionIndex !== null) {
      if (q.setIsTyping(!1), P.virtual) $(P.virtual.options[P.activeOptionIndex]);
      else {
        let { dataRef: L } = P.options[P.activeOptionIndex];
        $(L.current.value);
      }
      q.goToOption(ye.Specific, P.activeOptionIndex);
    }
  }), V = U(() => {
    I({ type: 0 }), v.current = !0;
  }), O = U(() => {
    I({ type: 1 }), v.current = !1, g == null || g();
  }), K = U((L) => {
    I({ type: 3, isTyping: L });
  }), N = U((L, Y, Q) => (v.current = !1, L === ye.Specific ? I({ type: 2, focus: ye.Specific, idx: Y, trigger: Q }) : I({ type: 2, focus: L, trigger: Q }))), B = U((L, Y) => (I({ type: 4, payload: { id: L, dataRef: Y } }), () => {
    P.isActive(Y.current.value) && (v.current = !0), I({ type: 5, id: L });
  })), $ = U((L) => ke(P.mode, { 0() {
    return T == null ? void 0 : T(L);
  }, 1() {
    let Y = P.value.slice(), Q = Y.findIndex((Re) => x(Re, L));
    return Q === -1 ? Y.push(L) : Y.splice(Q, 1), T == null ? void 0 : T(Y);
  } })), le = U((L) => {
    I({ type: 6, trigger: L });
  }), te = U((L) => {
    I({ type: 8, element: L });
  }), ae = U((L) => {
    I({ type: 9, element: L });
  }), ie = U((L) => {
    I({ type: 10, element: L });
  }), q = W(() => ({ onChange: $, registerOption: B, goToOption: N, setIsTyping: K, closeCombobox: O, openCombobox: V, setActivationTrigger: le, selectActiveOption: z, setInputElement: te, setButtonElement: ae, setOptionsElement: ie }), []), [ee, me] = Gu(), J = t === null ? {} : { ref: t }, ge = oe(() => {
    if (y !== void 0) return T == null ? void 0 : T(y);
  }, [T, y]), we = Ce();
  return D.createElement(me, { value: ee, props: { htmlFor: (r = P.inputElement) == null ? void 0 : r.id }, slot: { open: P.comboboxState === 0, disabled: p } }, D.createElement(qd, null, D.createElement(Oo.Provider, { value: q }, D.createElement(pn.Provider, { value: P }, D.createElement(bs, { value: ke(P.comboboxState, { 0: Pe.Open, 1: Pe.Closed }) }, u != null && D.createElement(Au, { disabled: p, data: C != null ? { [u]: C } : {}, form: a, onReset: ge }), we({ ourProps: J, theirProps: S, slot: G, defaultTag: vf, name: "Combobox" }))))));
}
let bf = "input";
function yf(e, t) {
  var n, r, o, i, l;
  let s = Xt("Combobox.Input"), a = xn("Combobox.Input"), u = Me(), c = Dl(), { id: p = c || `headlessui-combobox-input-${u}`, onChange: g, displayValue: d, disabled: m = s.disabled || !1, autoFocus: h = !1, type: w = "text", ..._ } = e, S = k(null), y = Ae(S, t, Ud(), a.setInputElement), C = Mt(s.inputElement), T = Ot(), M = U(() => {
    a.onChange(null), s.optionsElement && (s.optionsElement.scrollTop = 0), a.goToOption(ye.Nothing);
  }), I = W(() => {
    var $;
    return typeof d == "function" && s.value !== void 0 ? ($ = d(s.value)) != null ? $ : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, d]);
  cn(([$, le], [te, ae]) => {
    if (s.isTyping) return;
    let ie = S.current;
    ie && ((ae === 0 && le === 1 || $ !== te) && (ie.value = $), requestAnimationFrame(() => {
      if (s.isTyping || !ie || (C == null ? void 0 : C.activeElement) !== ie) return;
      let { selectionStart: q, selectionEnd: ee } = ie;
      Math.abs((ee ?? 0) - (q ?? 0)) === 0 && q === 0 && ie.setSelectionRange(ie.value.length, ie.value.length);
    }));
  }, [I, s.comboboxState, C, s.isTyping]), cn(([$], [le]) => {
    if ($ === 0 && le === 1) {
      if (s.isTyping) return;
      let te = S.current;
      if (!te) return;
      let ae = te.value, { selectionStart: ie, selectionEnd: q, selectionDirection: ee } = te;
      te.value = "", te.value = ae, ee !== null ? te.setSelectionRange(ie, q, ee) : te.setSelectionRange(ie, q);
    }
  }, [s.comboboxState]);
  let v = k(!1), b = U(() => {
    v.current = !0;
  }), x = U(() => {
    T.nextFrame(() => {
      v.current = !1;
    });
  }), E = U(($) => {
    switch (a.setIsTyping(!0), $.key) {
      case Ie.Enter:
        if (s.comboboxState !== 0 || v.current) return;
        if ($.preventDefault(), $.stopPropagation(), s.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), s.mode === 0 && a.closeCombobox();
        break;
      case Ie.ArrowDown:
        return $.preventDefault(), $.stopPropagation(), ke(s.comboboxState, { 0: () => a.goToOption(ye.Next), 1: () => a.openCombobox() });
      case Ie.ArrowUp:
        return $.preventDefault(), $.stopPropagation(), ke(s.comboboxState, { 0: () => a.goToOption(ye.Previous), 1: () => {
          De(() => a.openCombobox()), s.value || a.goToOption(ye.Last);
        } });
      case Ie.Home:
        if ($.shiftKey) break;
        return $.preventDefault(), $.stopPropagation(), a.goToOption(ye.First);
      case Ie.PageUp:
        return $.preventDefault(), $.stopPropagation(), a.goToOption(ye.First);
      case Ie.End:
        if ($.shiftKey) break;
        return $.preventDefault(), $.stopPropagation(), a.goToOption(ye.Last);
      case Ie.PageDown:
        return $.preventDefault(), $.stopPropagation(), a.goToOption(ye.Last);
      case Ie.Escape:
        return s.comboboxState !== 0 ? void 0 : ($.preventDefault(), s.optionsElement && !s.optionsPropsRef.current.static && $.stopPropagation(), s.mode === 0 && s.value === null && M(), a.closeCombobox());
      case Ie.Tab:
        if (s.comboboxState !== 0) return;
        s.mode === 0 && s.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), R = U(($) => {
    g == null || g($), s.mode === 0 && $.target.value === "" && M(), a.openCombobox();
  }), F = U(($) => {
    var le, te, ae;
    let ie = (le = $.relatedTarget) != null ? le : qe.find((q) => q !== $.currentTarget);
    if (!((te = s.optionsElement) != null && te.contains(ie)) && !((ae = s.buttonElement) != null && ae.contains(ie)) && s.comboboxState === 0) return $.preventDefault(), s.mode === 0 && s.value === null && M(), a.closeCombobox();
  }), P = U(($) => {
    var le, te, ae;
    let ie = (le = $.relatedTarget) != null ? le : qe.find((q) => q !== $.currentTarget);
    (te = s.buttonElement) != null && te.contains(ie) || (ae = s.optionsElement) != null && ae.contains(ie) || s.disabled || s.immediate && s.comboboxState !== 0 && T.microTask(() => {
      De(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), j = Jn(), G = Hu(), { isFocused: z, focusProps: V } = Fl({ autoFocus: h }), { isHovered: O, hoverProps: K } = Ml({ isDisabled: m }), N = W(() => ({ open: s.comboboxState === 0, disabled: m, hover: O, focus: z, autofocus: h }), [s, O, z, h, m]), B = _o({ ref: y, id: p, role: "combobox", type: w, "aria-controls": (n = s.optionsElement) == null ? void 0 : n.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find(($) => !$.dataRef.current.disabled && s.compare($.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (o = s.options[s.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": j, "aria-describedby": G, "aria-autocomplete": "list", defaultValue: (l = (i = e.defaultValue) != null ? i : s.defaultValue !== void 0 ? d == null ? void 0 : d(s.defaultValue) : null) != null ? l : s.defaultValue, disabled: m || void 0, autoFocus: h, onCompositionStart: b, onCompositionEnd: x, onKeyDown: E, onChange: R, onFocus: P, onBlur: F }, V, K);
  return Ce()({ ourProps: B, theirProps: _, slot: N, defaultTag: bf, name: "Combobox.Input" });
}
let xf = "button";
function _f(e, t) {
  var n;
  let r = Xt("Combobox.Button"), o = xn("Combobox.Button"), i = Ae(t, o.setButtonElement), l = Me(), { id: s = `headlessui-combobox-button-${l}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...c } = e, p = Ql(r.inputElement), g = U((I) => {
    switch (I.key) {
      case Ie.Space:
      case Ie.Enter:
        I.preventDefault(), I.stopPropagation(), r.comboboxState === 1 && De(() => o.openCombobox()), p();
        return;
      case Ie.ArrowDown:
        I.preventDefault(), I.stopPropagation(), r.comboboxState === 1 && (De(() => o.openCombobox()), r.value || o.goToOption(ye.First)), p();
        return;
      case Ie.ArrowUp:
        I.preventDefault(), I.stopPropagation(), r.comboboxState === 1 && (De(() => o.openCombobox()), r.value || o.goToOption(ye.Last)), p();
        return;
      case Ie.Escape:
        if (r.comboboxState !== 0) return;
        I.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && I.stopPropagation(), De(() => o.closeCombobox()), p();
        return;
      default:
        return;
    }
  }), d = U((I) => {
    I.preventDefault(), !Du(I.currentTarget) && (I.button === Io.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), p());
  }), m = Jn([s]), { isFocusVisible: h, focusProps: w } = Fl({ autoFocus: u }), { isHovered: _, hoverProps: S } = Ml({ isDisabled: a }), { pressed: y, pressProps: C } = _u({ disabled: a }), T = W(() => ({ open: r.comboboxState === 0, active: y || r.comboboxState === 0, disabled: a, value: r.value, hover: _, focus: h }), [r, _, h, y, a]), M = _o({ ref: i, id: s, type: Cc(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": m, disabled: a || void 0, autoFocus: u, onMouseDown: d, onKeyDown: g }, w, S, C);
  return Ce()({ ourProps: M, theirProps: c, slot: T, defaultTag: xf, name: "Combobox.Button" });
}
let Sf = "div", Cf = Bt.RenderStrategy | Bt.Static;
function Ef(e, t) {
  var n, r, o;
  let i = Me(), { id: l = `headlessui-combobox-options-${i}`, hold: s = !1, anchor: a, portal: u = !1, modal: c = !0, transition: p = !1, ...g } = e, d = Xt("Combobox.Options"), m = xn("Combobox.Options"), h = jd(a);
  h && (u = !0);
  let [w, _] = Gd(h), [S, y] = H(null), C = Wd(), T = Ae(t, h ? w : null, m.setOptionsElement, y), M = Mt(d.optionsElement), I = bn(), [v, b] = ns(p, S, I !== null ? (I & Pe.Open) === Pe.Open : d.comboboxState === 0);
  Gl(v, d.inputElement, m.closeCombobox);
  let x = d.__demoMode ? !1 : c && d.comboboxState === 0;
  es(x, M);
  let E = d.__demoMode ? !1 : c && d.comboboxState === 0;
  Wl(E, { allowed: oe(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), ue(() => {
    var B;
    d.optionsPropsRef.current.static = (B = e.static) != null ? B : !1;
  }, [d.optionsPropsRef, e.static]), ue(() => {
    d.optionsPropsRef.current.hold = s;
  }, [d.optionsPropsRef, s]), Dc(d.comboboxState === 0, { container: d.optionsElement, accept(B) {
    return B.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : B.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(B) {
    B.setAttribute("role", "none");
  } });
  let R = Jn([(n = d.buttonElement) == null ? void 0 : n.id]), F = W(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), P = U(() => {
    m.setActivationTrigger(0);
  }), j = U((B) => {
    B.preventDefault(), m.setActivationTrigger(0);
  }), G = _o(h ? C() : {}, { "aria-labelledby": R, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: l, ref: T, style: { ...g.style, ..._, "--input-width": gi(d.inputElement, !0).width, "--button-width": gi(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : P, onMouseDown: j, ...ts(b) }), z = v && d.comboboxState === 1, V = Wr(z, (r = d.virtual) == null ? void 0 : r.options), O = Wr(z, d.value), K = U((B) => d.compare(O, B));
  if (d.virtual) {
    if (V === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(g, { children: D.createElement(pn.Provider, { value: V !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: V } } : d }, D.createElement(gf, { slot: F }, g.children)) });
  }
  let N = Ce();
  return D.createElement(Es, { enabled: u ? e.static || v : !1 }, D.createElement(pn.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: K } }, N({ ourProps: G, theirProps: { ...g, children: D.createElement(Xd, { freeze: z }, typeof g.children == "function" ? (o = g.children) == null ? void 0 : o.call(g, F) : g.children) }, slot: F, defaultTag: Sf, features: Cf, visible: v, name: "Combobox.Options" })));
}
let Rf = "div";
function $f(e, t) {
  var n, r, o, i;
  let l = Xt("Combobox.Option"), s = xn("Combobox.Option"), a = Me(), { id: u = `headlessui-combobox-option-${a}`, value: c, disabled: p = (o = (r = (n = l.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null ? o : !1, order: g = null, ...d } = e, m = Ql(l.inputElement), h = l.virtual ? l.activeOptionIndex === l.calculateIndex(c) : l.activeOptionIndex === null ? !1 : ((i = l.options[l.activeOptionIndex]) == null ? void 0 : i.id) === u, w = l.isSelected(c), _ = k(null), S = bt({ disabled: p, value: c, domRef: _, order: g }), y = se(Rs), C = Ae(t, _, y ? y.measureElement : null), T = U(() => {
    s.setIsTyping(!1), s.onChange(c);
  });
  ue(() => s.registerOption(u, S), [S, u]);
  let M = k(!(l.virtual || l.__demoMode));
  ue(() => {
    if (!l.virtual && !l.__demoMode) return Ye().requestAnimationFrame(() => {
      M.current = !0;
    });
  }, [l.virtual, l.__demoMode]), ue(() => {
    if (M.current && l.comboboxState === 0 && h && l.activationTrigger !== 0) return Ye().requestAnimationFrame(() => {
      var j, G;
      (G = (j = _.current) == null ? void 0 : j.scrollIntoView) == null || G.call(j, { block: "nearest" });
    });
  }, [_, h, l.comboboxState, l.activationTrigger, l.activeOptionIndex]);
  let I = U((j) => {
    j.preventDefault(), j.button === Io.Left && (p || (T(), Xl() || requestAnimationFrame(() => m()), l.mode === 0 && s.closeCombobox()));
  }), v = U(() => {
    if (p) return s.goToOption(ye.Nothing);
    let j = l.calculateIndex(c);
    s.goToOption(ye.Specific, j);
  }), b = Oc(), x = U((j) => b.update(j)), E = U((j) => {
    if (!b.wasMoved(j) || p || h) return;
    let G = l.calculateIndex(c);
    s.goToOption(ye.Specific, G, 0);
  }), R = U((j) => {
    b.wasMoved(j) && (p || h && (l.optionsPropsRef.current.hold || s.goToOption(ye.Nothing)));
  }), F = W(() => ({ active: h, focus: h, selected: w, disabled: p }), [h, w, p]), P = { id: u, ref: C, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": w, disabled: void 0, onMouseDown: I, onFocus: v, onPointerEnter: x, onMouseEnter: x, onPointerMove: E, onMouseMove: E, onPointerLeave: R, onMouseLeave: R };
  return Ce()({ ourProps: P, theirProps: d, slot: F, defaultTag: Rf, name: "Combobox.Option" });
}
let Tf = xe(wf), qr = xe(_f), $s = xe(yf), If = Xu, Ts = xe(Ef), Kr = xe($f), Of = Object.assign(Tf, { Input: $s, Button: qr, Label: If, Options: Ts, Option: Kr });
function Mf(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = qt(e, "escape");
  So(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Ie.Escape && n(o));
  });
}
function Ff() {
  var e;
  let [t] = H(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = H((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return ue(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function Pf({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Mt(n), o = U(() => {
    var i, l;
    let s = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? s.push(a) : "current" in a && a.current instanceof HTMLElement && s.push(a.current));
    if (t != null && t.current) for (let a of t.current) s.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((l = n == null ? void 0 : n.getRootNode()) == null ? void 0 : l.host)) || s.some((u) => a.contains(u)) || s.push(a));
    return s;
  });
  return { resolveContainers: o, contains: U((i) => o().some((l) => l.contains(i))) };
}
let Is = fe(null);
function Di({ children: e, node: t }) {
  let [n, r] = H(null), o = Os(t ?? n);
  return D.createElement(Is.Provider, { value: o }, e, o === null && D.createElement(un, { features: jt.Hidden, ref: (i) => {
    var l, s;
    if (i) {
      for (let a of (s = (l = Gt(i)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? s : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function Os(e = null) {
  var t;
  return (t = se(Is)) != null ? t : e;
}
function Mo() {
  let e = k(!1);
  return ue(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var nn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(nn || {});
function Af() {
  let e = k(0);
  return Zl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Ms(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Nf = "div";
var xt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(xt || {});
function kf(e, t) {
  let n = k(null), r = Ae(n, t), { initialFocus: o, initialFocusFallback: i, containers: l, features: s = 15, ...a } = e;
  yn() || (s = 0);
  let u = Mt(n);
  Hf(s, { ownerDocument: u });
  let c = zf(s, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  Bf(s, { ownerDocument: u, container: n, containers: l, previousActiveElement: c });
  let p = Af(), g = U((S) => {
    let y = n.current;
    y && ((C) => C())(() => {
      ke(p.current, { [nn.Forwards]: () => {
        sn(y, tt.First, { skipElements: [S.relatedTarget, i] });
      }, [nn.Backwards]: () => {
        sn(y, tt.Last, { skipElements: [S.relatedTarget, i] });
      } });
    });
  }), d = qt(!!(s & 2), "focus-trap#tab-lock"), m = Ot(), h = k(!1), w = { ref: r, onKeyDown(S) {
    S.key == "Tab" && (h.current = !0, m.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(S) {
    if (!(s & 4)) return;
    let y = Ms(l);
    n.current instanceof HTMLElement && y.add(n.current);
    let C = S.relatedTarget;
    C instanceof HTMLElement && C.dataset.headlessuiFocusGuard !== "true" && (Fs(y, C) || (h.current ? sn(n.current, ke(p.current, { [nn.Forwards]: () => tt.Next, [nn.Backwards]: () => tt.Previous }) | tt.WrapAround, { relativeTo: S.target }) : S.target instanceof HTMLElement && rt(S.target)));
  } }, _ = Ce();
  return D.createElement(D.Fragment, null, d && D.createElement(un, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: g, features: jt.Focusable }), _({ ourProps: w, theirProps: a, defaultTag: Nf, name: "FocusTrap" }), d && D.createElement(un, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: g, features: jt.Focusable }));
}
let Df = xe(kf), Lf = Object.assign(Df, { features: xt });
function Vf(e = !0) {
  let t = k(qe.slice());
  return cn(([n], [r]) => {
    r === !0 && n === !1 && Yn(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = qe.slice());
  }, [e, qe, t]), U(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Hf(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Vf(n);
  cn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && rt(r());
  }, [n]), ys(() => {
    n && rt(r());
  });
}
function zf(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = k(null), l = qt(!!(e & 1), "focus-trap#initial-focus"), s = Mo();
  return cn(() => {
    if (e === 0) return;
    if (!l) {
      o != null && o.current && rt(o.current);
      return;
    }
    let a = n.current;
    a && Yn(() => {
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
      if (r != null && r.current) rt(r.current);
      else {
        if (e & 16) {
          if (sn(a, tt.First | tt.AutoFocus) !== zr.Error) return;
        } else if (sn(a, tt.First) !== zr.Error) return;
        if (o != null && o.current && (rt(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), i;
}
function Bf(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = Mo(), l = !!(e & 4);
  So(t == null ? void 0 : t.defaultView, "focus", (s) => {
    if (!l || !i.current) return;
    let a = Ms(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let u = o.current;
    if (!u) return;
    let c = s.target;
    c && c instanceof HTMLElement ? Fs(a, c) ? (o.current = c, rt(c)) : (s.preventDefault(), s.stopPropagation(), rt(u)) : rt(o.current);
  }, !0);
}
function Fs(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Ps(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Ns) !== pe || D.Children.count(e.children) === 1;
}
let or = fe(null);
or.displayName = "TransitionContext";
var jf = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(jf || {});
function Uf() {
  let e = se(or);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Wf() {
  let e = se(ir);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let ir = fe(null);
ir.displayName = "NestingContext";
function lr(e) {
  return "children" in e ? lr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function As(e, t) {
  let n = bt(e), r = k([]), o = Mo(), i = Ot(), l = U((d, m = ct.Hidden) => {
    let h = r.current.findIndex(({ el: w }) => w === d);
    h !== -1 && (ke(m, { [ct.Unmount]() {
      r.current.splice(h, 1);
    }, [ct.Hidden]() {
      r.current[h].state = "hidden";
    } }), i.microTask(() => {
      var w;
      !lr(r) && o.current && ((w = n.current) == null || w.call(n));
    }));
  }), s = U((d) => {
    let m = r.current.find(({ el: h }) => h === d);
    return m ? m.state !== "visible" && (m.state = "visible") : r.current.push({ el: d, state: "visible" }), () => l(d, ct.Unmount);
  }), a = k([]), u = k(Promise.resolve()), c = k({ enter: [], leave: [] }), p = U((d, m, h) => {
    a.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([w]) => w !== d)), t == null || t.chains.current[m].push([d, new Promise((w) => {
      a.current.push(w);
    })]), t == null || t.chains.current[m].push([d, new Promise((w) => {
      Promise.all(c.current[m].map(([_, S]) => S)).then(() => w());
    })]), m === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => h(m)) : h(m);
  }), g = U((d, m, h) => {
    Promise.all(c.current[m].splice(0).map(([w, _]) => _)).then(() => {
      var w;
      (w = a.current.shift()) == null || w();
    }).then(() => h(m));
  });
  return W(() => ({ children: r, register: s, unregister: l, onStart: p, onStop: g, wait: u, chains: c }), [s, l, r, p, g, c, u]);
}
let Ns = pe, ks = Bt.RenderStrategy;
function Gf(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: u, enterFrom: c, enterTo: p, entered: g, leave: d, leaveFrom: m, leaveTo: h, ...w } = e, [_, S] = H(null), y = k(null), C = Ps(e), T = Ae(...C ? [y, t, S] : t === null ? [] : [t]), M = (n = w.unmount) == null || n ? ct.Unmount : ct.Hidden, { show: I, appear: v, initial: b } = Uf(), [x, E] = H(I ? "visible" : "hidden"), R = Wf(), { register: F, unregister: P } = R;
  ue(() => F(y), [F, y]), ue(() => {
    if (M === ct.Hidden && y.current) {
      if (I && x !== "visible") {
        E("visible");
        return;
      }
      return ke(x, { hidden: () => P(y), visible: () => F(y) });
    }
  }, [x, y, F, P, I, M]);
  let j = yn();
  ue(() => {
    if (C && j && x === "visible" && y.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [y, x, j, C]);
  let G = b && !v, z = v && I && b, V = k(!1), O = As(() => {
    V.current || (E("hidden"), P(y));
  }, R), K = U((ie) => {
    V.current = !0;
    let q = ie ? "enter" : "leave";
    O.onStart(y, q, (ee) => {
      ee === "enter" ? i == null || i() : ee === "leave" && (s == null || s());
    });
  }), N = U((ie) => {
    let q = ie ? "enter" : "leave";
    V.current = !1, O.onStop(y, q, (ee) => {
      ee === "enter" ? l == null || l() : ee === "leave" && (a == null || a());
    }), q === "leave" && !lr(O) && (E("hidden"), P(y));
  });
  re(() => {
    C && o || (K(I), N(I));
  }, [I, C, o]);
  let B = !(!o || !C || !j || G), [, $] = ns(B, _, I, { start: K, end: N }), le = ut({ ref: T, className: ((r = Vr(w.className, z && u, z && c, $.enter && u, $.enter && $.closed && c, $.enter && !$.closed && p, $.leave && d, $.leave && !$.closed && m, $.leave && $.closed && h, !$.transition && I && g)) == null ? void 0 : r.trim()) || void 0, ...ts($) }), te = 0;
  x === "visible" && (te |= Pe.Open), x === "hidden" && (te |= Pe.Closed), $.enter && (te |= Pe.Opening), $.leave && (te |= Pe.Closing);
  let ae = Ce();
  return D.createElement(ir.Provider, { value: O }, D.createElement(bs, { value: te }, ae({ ourProps: le, theirProps: w, defaultTag: Ns, features: ks, visible: x === "visible", name: "Transition.Child" })));
}
function qf(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = k(null), s = Ps(e), a = Ae(...s ? [l, t] : t === null ? [] : [t]);
  yn();
  let u = bn();
  if (n === void 0 && u !== null && (n = (u & Pe.Open) === Pe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, p] = H(n ? "visible" : "hidden"), g = As(() => {
    n || p("hidden");
  }), [d, m] = H(!0), h = k([n]);
  ue(() => {
    d !== !1 && h.current[h.current.length - 1] !== n && (h.current.push(n), m(!1));
  }, [h, n]);
  let w = W(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  ue(() => {
    n ? p("visible") : !lr(g) && l.current !== null && p("hidden");
  }, [n, g]);
  let _ = { unmount: o }, S = U(() => {
    var T;
    d && m(!1), (T = e.beforeEnter) == null || T.call(e);
  }), y = U(() => {
    var T;
    d && m(!1), (T = e.beforeLeave) == null || T.call(e);
  }), C = Ce();
  return D.createElement(ir.Provider, { value: g }, D.createElement(or.Provider, { value: w }, C({ ourProps: { ..._, as: pe, children: D.createElement(Ds, { ref: a, ..._, ...i, beforeEnter: S, beforeLeave: y }) }, theirProps: {}, defaultTag: pe, features: ks, visible: c === "visible", name: "Transition" })));
}
function Kf(e, t) {
  let n = se(or) !== null, r = bn() !== null;
  return D.createElement(D.Fragment, null, !n && r ? D.createElement(Yr, { ref: t, ...e }) : D.createElement(Ds, { ref: t, ...e }));
}
let Yr = xe(qf), Ds = xe(Gf), Fo = xe(Kf), Yf = Object.assign(Yr, { Child: Fo, Root: Yr });
var Xf = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Xf || {}), Zf = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Zf || {});
let Jf = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Po = fe(null);
Po.displayName = "DialogContext";
function sr(e) {
  let t = se(Po);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, sr), n;
  }
  return t;
}
function Qf(e, t) {
  return ke(t.type, Jf, e, t);
}
let Li = xe(function(e, t) {
  let n = Me(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: l, role: s = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: c = !1, ...p } = e, g = k(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (g.current || (g.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = bn();
  o === void 0 && d !== null && (o = (d & Pe.Open) === Pe.Open);
  let m = k(null), h = Ae(m, t), w = Mt(m), _ = o ? 0 : 1, [S, y] = it(Qf, { titleId: null, descriptionId: null, panelRef: qn() }), C = U(() => i(!1)), T = U((N) => y({ type: 0, id: N })), M = yn() ? _ === 0 : !1, [I, v] = af(), b = { get current() {
    var N;
    return (N = S.panelRef.current) != null ? N : m.current;
  } }, x = Os(), { resolveContainers: E } = Pf({ mainTreeNode: x, portals: I, defaultContainers: [b] }), R = d !== null ? (d & Pe.Closing) === Pe.Closing : !1;
  Wl(u || R ? !1 : M, { allowed: U(() => {
    var N, B;
    return [(B = (N = m.current) == null ? void 0 : N.closest("[data-headlessui-portal]")) != null ? B : null];
  }), disallowed: U(() => {
    var N;
    return [(N = x == null ? void 0 : x.closest("body > *:not(#headlessui-portal-root)")) != null ? N : null];
  }) }), Jl(M, E, (N) => {
    N.preventDefault(), C();
  }), Mf(M, w == null ? void 0 : w.defaultView, (N) => {
    N.preventDefault(), N.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), C();
  }), es(u || R ? !1 : M, w, E), Gl(M, m, C);
  let [F, P] = zu(), j = W(() => [{ dialogState: _, close: C, setTitleId: T, unmount: c }, S], [_, S, C, T, c]), G = W(() => ({ open: _ === 0 }), [_]), z = { ref: h, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : _ === 0 ? !0 : void 0, "aria-labelledby": S.titleId, "aria-describedby": F, unmount: c }, V = !Ff(), O = xt.None;
  M && !u && (O |= xt.RestoreFocus, O |= xt.TabLock, a && (O |= xt.AutoFocus), V && (O |= xt.InitialFocus));
  let K = Ce();
  return D.createElement(Zd, null, D.createElement(ki, { force: !0 }, D.createElement(Es, null, D.createElement(Po.Provider, { value: j }, D.createElement(Cs, { target: m }, D.createElement(ki, { force: !1 }, D.createElement(P, { slot: G }, D.createElement(v, null, D.createElement(Lf, { initialFocus: l, initialFocusFallback: m, containers: E, features: O }, D.createElement(Ju, { value: C }, K({ ourProps: z, theirProps: p, slot: G, defaultTag: ep, features: tp, visible: _ === 0, name: "Dialog" })))))))))));
}), ep = "div", tp = Bt.RenderStrategy | Bt.Static;
function np(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = bn(), l = e.hasOwnProperty("open") || i !== null, s = e.hasOwnProperty("onClose");
  if (!l && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? D.createElement(Di, null, D.createElement(Yf, { show: r, transition: n, unmount: o.unmount }, D.createElement(Li, { ref: t, ...o }))) : D.createElement(Di, null, D.createElement(Li, { ref: t, open: r, ...o }));
}
let rp = "div";
function op(e, t) {
  let n = Me(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: l, unmount: s }, a] = sr("Dialog.Panel"), u = Ae(t, a.panelRef), c = W(() => ({ open: l === 0 }), [l]), p = U((w) => {
    w.stopPropagation();
  }), g = { ref: u, id: r, onClick: p }, d = o ? Fo : pe, m = o ? { unmount: s } : {}, h = Ce();
  return D.createElement(d, { ...m }, h({ ourProps: g, theirProps: i, slot: c, defaultTag: rp, name: "Dialog.Panel" }));
}
let ip = "div";
function lp(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = sr("Dialog.Backdrop"), l = W(() => ({ open: o === 0 }), [o]), s = { ref: t, "aria-hidden": !0 }, a = n ? Fo : pe, u = n ? { unmount: i } : {}, c = Ce();
  return D.createElement(a, { ...u }, c({ ourProps: s, theirProps: r, slot: l, defaultTag: ip, name: "Dialog.Backdrop" }));
}
let sp = "h2";
function ap(e, t) {
  let n = Me(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: l }] = sr("Dialog.Title"), s = Ae(t);
  re(() => (l(r), () => l(null)), [r, l]);
  let a = W(() => ({ open: i === 0 }), [i]), u = { ref: s, id: r };
  return Ce()({ ourProps: u, theirProps: o, slot: a, defaultTag: sp, name: "Dialog.Title" });
}
let up = xe(np), Ls = xe(op), cp = xe(lp), Vs = xe(ap), dp = Object.assign(up, { Panel: Ls, Title: Vs, Description: Wu });
function fp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const pp = /* @__PURE__ */ ce(fp);
function mp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const gp = /* @__PURE__ */ ce(mp);
function hp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const vp = /* @__PURE__ */ ce(hp);
function wp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const bp = /* @__PURE__ */ ce(wp);
function yp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const xp = /* @__PURE__ */ ce(yp);
function _p({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Sp = /* @__PURE__ */ ce(_p);
function Cp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const Ep = /* @__PURE__ */ ce(Cp);
function Rp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const $p = /* @__PURE__ */ ce(Rp);
function Tp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const Ip = /* @__PURE__ */ ce(Tp);
function Op({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const Mp = /* @__PURE__ */ ce(Op);
function Fp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const Pp = /* @__PURE__ */ ce(Fp);
function Ap({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const Np = /* @__PURE__ */ ce(Ap);
function kp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const Hs = /* @__PURE__ */ ce(kp), Dp = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear" }, input: { clear: "Clear" } }, Lp = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, Vp = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, Hp = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, zp = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, Bp = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, jp = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, Up = {
  components: Dp,
  importer: Lp,
  uploader: Vp,
  mapper: Hp,
  sheet: zp,
  validators: Bp,
  importStatus: jp
}, Wp = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer" }, input: { clear: "Effacer" } }, Gp = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, qp = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, Kp = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, Yp = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Xp = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, Zp = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, Jp = {
  components: Wp,
  importer: Gp,
  uploader: qp,
  mapper: Kp,
  sheet: Yp,
  validators: Xp,
  importStatus: Zp
}, Qp = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar" }, input: { clear: "Limpar" } }, em = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, tm = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente" }, nm = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, rm = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, om = { includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único" }, im = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, lm = {
  components: Qp,
  importer: em,
  uploader: tm,
  mapper: nm,
  sheet: rm,
  validators: om,
  importStatus: im
}, zs = fe(
  {}
);
function sm({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ f(zs.Provider, { value: e, children: t });
}
function ze() {
  return se(zs);
}
const am = {
  en: Up,
  fr: Jp,
  "pt-BR": lm
}, um = "en";
function Vi(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? am[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function cm(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function dm(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ f("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    let i = r;
    if (o) {
      const l = o[1];
      i = t[l] ?? `{${l}}`;
    }
    return /* @__PURE__ */ f(pe, { children: i }, r);
  }) });
}
const Bs = fe(
  {}
);
function fm({ children: e }) {
  const { translationResources: t, locale: n } = ze(), r = n ?? um;
  function o(l, s = {}) {
    const a = Vi(r, l, t);
    return cm(a, s);
  }
  function i(l, s = {}) {
    const a = Vi(r, l, t);
    return dm(a, s);
  }
  return /* @__PURE__ */ f(Bs.Provider, { value: { t: o, tHtml: i }, children: e });
}
function be() {
  return se(Bs);
}
function Xr({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: l,
  variant: s = "default"
}) {
  const { t: a } = be(), u = {
    danger: {
      icon: /* @__PURE__ */ f(
        Sp,
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
  }, { icon: c, btnVariant: p, bgColor: g } = u[s];
  return /* @__PURE__ */ f(dp, { open: e, onClose: t, className: "relative z-50", children: [
    /* @__PURE__ */ f(
      cp,
      {
        transition: !0,
        className: "fixed inset-0 bg-black/80 transition-opacity data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ f("div", { className: "fixed inset-0 z-50 w-screen overflow-y-auto", children: /* @__PURE__ */ f("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ f(
      Ls,
      {
        transition: !0,
        className: "relative grid w-full max-w-[calc(100%-2rem)] translate-x-0 translate-y-0 gap-6 rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-background p-6 text-left shadow-lg duration-200 data-closed:opacity-0 data-closed:zoom-out-95 data-enter:animate-in data-enter:fade-in-0 data-enter:zoom-in-95 data-leave:animate-out data-leave:fade-out-0 sm:max-w-lg",
        children: [
          /* @__PURE__ */ f("div", { className: "sm:flex sm:items-start", children: [
            c && /* @__PURE__ */ f(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${g} sm:mx-0 sm:size-10`,
                children: c
              }
            ),
            /* @__PURE__ */ f("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ f(
                Vs,
                {
                  as: "h3",
                  className: "text-lg font-semibold text-hello-csv-foreground",
                  children: n
                }
              ),
              r && /* @__PURE__ */ f("div", { className: "mt-2", children: /* @__PURE__ */ f("p", { className: "text-sm text-hello-csv-muted-foreground", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "mt-2 sm:flex sm:flex-row-reverse gap-3", children: [
            /* @__PURE__ */ f("div", { className: "sm:w-auto", children: /* @__PURE__ */ f(
              He,
              {
                variant: p,
                onClick: () => {
                  l(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ f("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ f(
              He,
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
const pm = 100, js = 5, mm = [
  "text/csv",
  "text/tab-separated-values"
], Hi = ",", gm = 500, hm = "headlessui-portal-root", Zr = "hello-csv", vm = 52.62, Jr = "checkbox-column-id", wm = 110, bm = 50, ym = 500, xm = 150, Us = "Yes", Ws = "No", _m = ce(function({ children: t }, n) {
  return re(() => {
    const r = new MutationObserver((o) => {
      for (const i of o)
        i.addedNodes.forEach((l) => {
          l.nodeType === Node.ELEMENT_NODE && l.id === hm && l.classList.add(Zr);
        });
    });
    return r.observe(document.body, { childList: !0, subtree: !1 }), () => r.disconnect();
  }, []), /* @__PURE__ */ f(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Zr}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ f("div", { ref: n, className: "min-h-0 w-full overflow-auto bg-white", children: t })
    }
  );
});
function Sm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Cm = /* @__PURE__ */ ce(Sm);
function Em({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const Rm = /* @__PURE__ */ ce(Em);
function $m({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const Tm = /* @__PURE__ */ ce($m);
function Im({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const Om = /* @__PURE__ */ ce(Im);
function Mm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const Gs = /* @__PURE__ */ ce(Mm), qs = ce(
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
    const { t: c } = be(), [p, g] = H(e);
    re(() => {
      g(e);
    }, [e]);
    const d = l && e != null && e !== "";
    function m(h) {
      const w = h.target, _ = s === "number" ? w == null ? void 0 : w.valueAsNumber : w == null ? void 0 : w.value;
      return (typeof _ == "number" && isNaN(_) ? "" : _) ?? "";
    }
    return /* @__PURE__ */ f("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ f(
        "input",
        {
          "aria-label": a["aria-label"],
          ref: u,
          type: s,
          inputMode: s === "number" ? "numeric" : "text",
          placeholder: r,
          value: typeof p == "boolean" ? p.toString() : p,
          onChange: (h) => (n == null ? void 0 : n(m(h))) ?? g(m(h)),
          className: `${i} ${o != null ? "pl-10" : ""} ${l ? "pr-10" : ""} col-start-1 row-start-1 flex h-10 w-full min-w-0 rounded-[var(--hello-csv-radius-md)] border border-hello-csv-input bg-transparent px-3 py-2 text-base text-hello-csv-foreground transition-[color,box-shadow] outline-none placeholder:text-hello-csv-muted-foreground focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
          onBlur: (h) => t == null ? void 0 : t(m(h))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-hello-csv-muted-foreground sm:size-4"
      }),
      d && /* @__PURE__ */ f(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": c("components.input.clear"),
          onClick: (h) => {
            h.stopPropagation(), n == null || n("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ f(
            Gs,
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
function Ht({
  value: e,
  options: t,
  onChange: n,
  multiple: r = !1,
  compareFunction: o = (p, g) => p === g,
  clearable: i = !1,
  searchable: l = !1,
  placeholder: s,
  classes: a,
  displayPlaceholderWhenSelected: u = !1,
  ...c
}) {
  const { t: p } = be(), [g, d] = H(""), m = (x) => r && Array.isArray(e) ? e.some((E) => o(E, x)) : o(e, x), h = (x) => {
    if (d(""), r) {
      const E = Array.isArray(x) ? x : [x];
      n(E);
    } else
      n(x);
  }, w = () => {
    d(""), n(r ? [] : null);
  }, _ = t.filter((x) => m(x.value)), S = _.map((x) => x.label).join(", "), y = g && l ? t.filter(
    (x) => String(x.label).toLowerCase().includes(g.toLowerCase())
  ) : t, C = s ?? p("components.select.optionPlaceholder"), T = () => l ? S : _.length > 0 ? u ? `${C}: ${S}` : S : "", I = y.some((x) => x.group) ? Object.entries(
    y.reduce(
      (x, E) => {
        const R = E.group || "ungrouped";
        return x[R] = x[R] || [], x[R].push(E), x;
      },
      {}
    )
  ).map(([x, E]) => ({
    label: x,
    items: E
  })) : [{ label: null, items: y }], v = I.every(({ items: x }) => x.length === 0), b = i && _.length > 0;
  return /* @__PURE__ */ f(Of, { value: e, onChange: h, multiple: r, children: /* @__PURE__ */ f("div", { className: "relative", children: [
    /* @__PURE__ */ f(
      qr,
      {
        className: "w-full",
        "aria-label": c["aria-label"] ?? s,
        children: /* @__PURE__ */ f(
          $s,
          {
            className: `${a} flex h-10 w-full items-center justify-between gap-2 rounded-[var(--hello-csv-radius-md)] border border-hello-csv-input bg-transparent px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-hello-csv-ring focus-visible:ring-[3px] focus-visible:ring-hello-csv-ring/50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer truncate focus:cursor-text ${b ? "pr-12" : "pr-8"} text-left text-hello-csv-foreground placeholder:text-hello-csv-muted-foreground`,
            displayValue: T,
            onChange: (x) => l && d(x.target.value),
            placeholder: C,
            readOnly: !l
          }
        )
      }
    ),
    b && /* @__PURE__ */ f(
      "span",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": p("components.select.clear"),
        onClick: (x) => {
          x.stopPropagation(), w();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-hello-csv-muted-foreground hover:text-hello-csv-foreground",
        children: /* @__PURE__ */ f(
          Gs,
          {
            className: "h-5 w-5",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ f(qr, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ f(
      Tm,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-4 self-center justify-self-end text-hello-csv-muted-foreground opacity-50"
      }
    ) }),
    /* @__PURE__ */ f(
      Ts,
      {
        anchor: "bottom",
        transition: !0,
        className: "absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-[var(--hello-csv-radius-md)] border border-hello-csv-border bg-hello-csv-popover p-1 text-hello-csv-popover-foreground shadow-md focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 text-sm",
        children: [
          v && /* @__PURE__ */ f(
            Kr,
            {
              disabled: !0,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-1.5 pr-8 pl-2 text-hello-csv-muted-foreground select-none",
              children: /* @__PURE__ */ f("span", { className: "block truncate font-normal", children: p("components.select.noOptions") })
            },
            "no-options"
          ),
          I.map(({ label: x, items: E }) => /* @__PURE__ */ f("div", { children: [
            x && /* @__PURE__ */ f("div", { className: "py-1.5 pr-8 pl-2 text-hello-csv-muted-foreground text-xs font-medium uppercase", children: x }),
            E.map((R) => /* @__PURE__ */ f(
              Kr,
              {
                value: R.value,
                className: "group relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-hello-csv-foreground select-none outline-hidden data-focus:bg-hello-csv-accent data-focus:text-hello-csv-accent-foreground",
                children: [
                  R.icon,
                  /* @__PURE__ */ f("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: R.label }),
                  m(R.value) && /* @__PURE__ */ f("span", { className: "absolute right-2 flex size-3.5 items-center justify-center text-hello-csv-primary group-data-focus:text-hello-csv-accent-foreground", children: /* @__PURE__ */ f(Cm, { "aria-hidden": "true", className: "size-4" }) })
                ]
              },
              typeof R.value == "object" ? JSON.stringify(R.value) : String(R.value)
            ))
          ] }, x || "all"))
        ]
      }
    )
  ] }) });
}
function Fm({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ f(
      Ht,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "hidden sm:block", children: /* @__PURE__ */ f("div", { className: "border-b border-hello-csv-border", children: /* @__PURE__ */ f(
      "nav",
      {
        "aria-label": "Tabs",
        className: "-mb-px flex space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ f(
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
const Pm = vt(
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
), Am = vt("group relative h-full w-full", {
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
function Nm({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = Pm({ variant: e }), o = Am({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ f("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ f("span", { className: r, children: n })
  ] });
}
const km = vt(
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
function Dm({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ f("span", { className: "isolate inline-flex rounded-[var(--hello-csv-radius-md)] shadow-xs", children: t.map((n, r) => /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: km({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
function Ks(e, t) {
  return e.indexOf(t) !== -1;
}
function Ys(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function Xs(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
class _n {
  constructor(t) {
    _e(this, "definition");
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
class Lm extends _n {
  constructor(n) {
    super(n);
    _e(this, "key");
    _e(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class Vm extends _n {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class Hm extends _n {
  parse(t) {
    if (typeof t == "string" && Ks(t, "-"))
      return t.split("-")[0];
  }
}
const zi = [
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
class zm extends _n {
  parse(t) {
    const n = zi.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Ks(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return zi[r][1];
    }
  }
}
class Bm extends _n {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function jm(e) {
  const t = {
    phone_number: Vm,
    postal_code: Hm,
    state_code: zm,
    strip: Bm,
    custom: Lm
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function Um(e, t) {
  const n = Ys(
    e.columns,
    (r, o) => {
      o[r.id] = new Wm(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          jm(i)
        );
      });
    }
  );
  return e.columns.forEach((r) => {
    const o = r.id, i = n[o];
    t.rows.forEach((l) => {
      if (!Xs(l))
        return;
      const s = l[o];
      Ao(s) || (l[o] = i.transform(s));
    });
  }), t.rows;
}
function Qr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = Um(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class Wm {
  // Series of transformations
  constructor(t = []) {
    _e(this, "steps");
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
const Gm = (e) => e == null, qm = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function Ao(e) {
  return Gm(e) || e === "";
}
const Bi = (e) => [...new Set(e)];
function $n(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Un(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function ji(e) {
  if (e == null)
    return "";
  let t = String(e);
  return t = t.replace(/"/g, '""'), /[",\n\r]/.test(t) && (t = `"${t}"`), t;
}
function No(e, t, n, r) {
  const o = e.columns.map(
    (s) => ji(r === "label" ? s.label : s.id)
  ).join(Hi), i = t.map(
    (s) => e.columns.map((a) => {
      const u = s[a.id];
      let c;
      return r === "value" || u == null ? c = u : a.type === "enum" ? c = Wn(
        n[e.id][a.id],
        u
      ) : a.type === "reference" ? c = Wn(
        ko(a, n),
        u
      ) : c = u, ji(c);
    }).join(Hi)
  ), l = [o, ...i].join(`
`);
  return new Blob([l], { type: "text/csv" });
}
function Zs(e, t, n, r) {
  const o = No(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), l = document.createElement("a");
  l.href = i, l.download = `${e.label}.csv`, l.click(), URL.revokeObjectURL(i);
}
function ko(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function Wn(e, t) {
  return typeof t != "string" ? t : e[t] ?? t;
}
function Do(e, t) {
  return Qr(
    e,
    t.map((n) => ({ ...n, rows: qm(n) }))
  );
}
const yt = 8, Tn = 8, at = 8, In = -4, Km = vt(
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
function Dt({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = H(!1), [l, s] = H({ top: 0, left: 0 }), [a, u] = H("bottom"), [c, p] = H(0), g = k(null), d = k(null), [m, h] = H(null);
  re(() => {
    const y = document.createElement("div");
    return y.classList.add(Zr), document.body.appendChild(y), h(y), () => {
      document.body.removeChild(y);
    };
  }, []);
  const w = () => {
    requestAnimationFrame(() => {
      if (!g.current || !d.current) return;
      const y = g.current.getBoundingClientRect(), C = d.current.getBoundingClientRect(), T = window.innerWidth, M = window.innerHeight, I = M - y.bottom, v = y.top, b = T - y.right;
      let x = "bottom";
      I >= C.height + yt ? x = "bottom" : v >= C.height + yt ? x = "top" : b >= C.width + yt ? x = "right" : x = "left";
      let E = 0, R = 0;
      switch (x) {
        case "bottom":
          E = y.bottom + yt + window.scrollY, R = y.left + y.width / 2 - C.width / 2 + window.scrollX;
          break;
        case "top":
          E = y.top - C.height - yt + window.scrollY, R = y.left + y.width / 2 - C.width / 2 + window.scrollX;
          break;
        case "right":
          E = y.top + y.height / 2 - C.height / 2 + window.scrollY, R = y.right + yt + window.scrollX;
          break;
        case "left":
          E = y.top + y.height / 2 - C.height / 2 + window.scrollY, R = y.left - C.width - yt + window.scrollX;
          break;
      }
      E = $n(
        E,
        Tn + window.scrollY,
        window.scrollY + M - C.height - Tn
      ), R = $n(
        R,
        Tn + window.scrollX,
        window.scrollX + T - C.width - Tn
      );
      const F = y.left + y.width / 2 + window.scrollX, P = y.top + y.height / 2 + window.scrollY;
      let j = 0;
      if (x === "top" || x === "bottom") {
        const G = F - R;
        j = $n(
          G,
          at,
          C.width - at
        );
      } else {
        const G = P - E;
        j = $n(
          G,
          at,
          C.height - at
        );
      }
      u(x), s({ top: E, left: R }), p(j), i(!0);
    });
  }, _ = () => i(!1), S = Me();
  return /* @__PURE__ */ f(
    "div",
    {
      ref: g,
      tabIndex: 0,
      className: `${n ?? ""} relative inline-block`,
      onMouseEnter: w,
      onMouseLeave: _,
      onFocus: w,
      onBlur: _,
      "aria-describedby": S,
      children: [
        t,
        m && mn(
          /* @__PURE__ */ f(
            "div",
            {
              id: S,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: d,
              className: Km({ visible: o, hidden: r }),
              style: {
                top: `${l.top}px`,
                left: `${l.left}px`
              },
              children: [
                e,
                /* @__PURE__ */ f(
                  "div",
                  {
                    className: "absolute h-2 w-2 rotate-45 border border-hello-csv-border bg-hello-csv-popover",
                    style: a === "bottom" ? { top: In, left: c - at / 2 } : a === "top" ? {
                      bottom: In,
                      left: c - at / 2
                    } : a === "left" ? {
                      right: In,
                      top: c - at / 2
                    } : {
                      left: In,
                      top: c - at / 2
                    }
                  }
                )
              ]
            }
          ),
          m
        )
      ]
    }
  );
}
const Ym = vt(
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
function Lo({ children: e, variant: t }) {
  const n = Ym({ variant: t });
  return /* @__PURE__ */ f("div", { className: n, children: e });
}
function Xm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Js = /* @__PURE__ */ ce(Xm);
function Zm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Jm = /* @__PURE__ */ ce(Zm);
function Qm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const eo = /* @__PURE__ */ ce(Qm);
function eg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const tg = /* @__PURE__ */ ce(eg), ng = {
  info: {
    icon: /* @__PURE__ */ f(tg, { className: "size-4 text-current", "aria-hidden": "true" }),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-card-foreground px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-muted-foreground"
  },
  success: {
    icon: /* @__PURE__ */ f(Js, { className: "size-4 text-hello-csv-success", "aria-hidden": "true" }),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-success px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-success/90"
  },
  error: {
    icon: /* @__PURE__ */ f(
      eo,
      {
        className: "size-4 text-hello-csv-destructive",
        "aria-hidden": "true"
      }
    ),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-destructive px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-destructive/90"
  },
  warning: {
    icon: /* @__PURE__ */ f(
      eo,
      {
        className: "size-4 text-hello-csv-warning",
        "aria-hidden": "true"
      }
    ),
    classes: "relative w-full rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card text-hello-csv-warning px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start",
    descriptionClasses: "text-hello-csv-warning/90"
  }
};
function Vo({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o, descriptionClasses: i } = ng[e];
  return /* @__PURE__ */ f("div", { className: o, children: [
    r,
    /* @__PURE__ */ f("div", { className: "col-start-2", children: [
      t && /* @__PURE__ */ f("div", { className: "font-medium leading-none tracking-tight", children: t }),
      /* @__PURE__ */ f("div", { className: `text-sm ${i} ${t ? "mt-1" : ""}`, children: n })
    ] })
  ] });
}
function rg({ children: e }) {
  return /* @__PURE__ */ f("div", { className: "flex", children: [
    /* @__PURE__ */ f("div", { className: "shrink-0", children: /* @__PURE__ */ f(
      Np,
      {
        "aria-hidden": "true",
        className: "text-hello-csv-destructive size-5"
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ f("p", { className: "text-hello-csv-destructive text-sm", children: e }) })
  ] });
}
const og = vt(
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
function Qs({ color: e = "primary" }) {
  return /* @__PURE__ */ f("span", { className: `${og({ color: e })}` });
}
class Ft {
  constructor(t) {
    _e(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class ig extends Ft {
  constructor(n) {
    super(n);
    _e(this, "key");
    _e(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
function lg(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class ar extends Ft {
  constructor(n) {
    super(n);
    _e(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(lg(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class sg extends ar {
  constructor(t) {
    super({
      ...t,
      regex: /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i
    });
  }
}
class ag extends Ft {
  constructor(n) {
    super(n);
    _e(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class ug extends Ft {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class cg extends Ft {
  constructor(n) {
    super(n);
    _e(this, "delimiter");
    _e(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    var o;
    if ((((o = n == null ? void 0 : n.toString()) == null ? void 0 : o.split(this.delimiter)) ?? []).some((i) => !this.values.includes(i.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class dg extends ar {
  constructor(t) {
    super({
      ...t,
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    });
  }
}
class fg extends ar {
  constructor(t) {
    super({
      ...t,
      regex: /^\d{5}(-\d{4})?$/
    });
  }
}
class pg extends Ft {
  constructor(n) {
    super(n);
    _e(this, "when");
    this.when = n.when ?? (() => !0);
  }
  isValid(n, r) {
    if (this.when(r) && Ao(n))
      return this.definition.error || "validators.required";
  }
}
class mg extends Ft {
  constructor(n) {
    super(n);
    _e(this, "seen");
    _e(this, "caseInsensitive");
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
function gg(e) {
  const t = {
    regex_matches: ar,
    required: pg,
    unique: mg,
    includes: ag,
    multi_includes: cg,
    is_integer: ug,
    postal_code: fg,
    phone_number: dg,
    email: sg,
    custom: ig
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function ea(e, t) {
  var o, i, l;
  const n = e.typeArguments, r = t.find(
    (s) => s.sheetId === n.sheetId
  );
  return ((l = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((s) => s[n.sheetColumnId])) == null ? void 0 : i.filter((s) => !Ao(s))) == null ? void 0 : l.filter((s, a, u) => u.indexOf(s) === a)) ?? [];
}
function ta(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function hg(e, t, n, r, o, i, l) {
  return W(() => {
    let a = e.rows;
    switch (n) {
      case "errors":
        a = e.rows.filter(
          (u, c) => r.some((p) => p.rowIndex === c)
        );
        break;
      case "valid":
        a = e.rows.filter(
          (u, c) => !r.some((p) => p.rowIndex === c)
        );
        break;
      case "all":
      default:
        a = e.rows;
    }
    return o != null && (a = a.filter((u) => {
      const c = ta(t, i.id, u);
      return r.find(
        (g) => g.rowIndex === c && g.columnId === o
      ) != null;
    })), l.trim() !== "" && (a = a.filter(
      (u) => Object.values(u).some(
        (c) => {
          var p;
          return (p = Un(c)) == null ? void 0 : p.includes(Un(l));
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
function na(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function vg(e) {
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
function wg(e, t, n) {
  var i, l, s;
  const r = e.type === "enum" ? ((i = e.typeArguments.values.find((a) => a.value === t)) == null ? void 0 : i.label) ?? t : e.type === "reference" && t != null ? Wn(
    ko(e, n),
    t
  ) : e.type === "boolean" ? t === !0 ? ((l = e.typeArguments) == null ? void 0 : l.trueLabel) ?? Us : t === !1 ? ((s = e.typeArguments) == null ? void 0 : s.falseLabel) ?? Ws : t : t, o = r == null || typeof r == "string" && r.trim() === "";
  return { displayValue: o ? " " : r, valueEmpty: o };
}
function Sn(e, { skipConditionCheck: t } = {}) {
  if (e.validators && e.validators.length > 0) {
    const n = e.validators.find(
      (r) => r.validate === "required"
    );
    return n != null && (t ? !0 : n.when == null);
  }
  return !1;
}
function bg(e, t) {
  const n = [];
  if (e.type === "enum" && n.push({
    values: e.typeArguments.values.map((r) => r.value),
    validate: "includes"
  }), e.type === "reference") {
    const r = ea(
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
async function yg(e, t, n) {
  const r = [], o = [], i = Ys(e.columns, (l, s) => {
    s[l.id] = [], [
      ...l.validators ?? [],
      ...bg(l, n)
    ].forEach((u) => {
      s[l.id].push(
        gg(u)
      );
    });
  });
  return e.columns.forEach((l) => {
    t.rows.forEach((s, a) => {
      if (!Xs(s) || !(l.id in s) && !Sn(l, { skipConditionCheck: !0 }))
        return;
      const u = s[l.id];
      i[l.id].forEach((p) => {
        const g = Promise.resolve(p.isValid(u, s)).then(
          (d) => {
            d != null && r.push({
              sheetId: e.id,
              columnId: l.id,
              rowIndex: a,
              message: d
            });
          }
        );
        o.push(g);
      });
    });
  }), await Promise.all(o), r;
}
async function xg(e, t) {
  const n = e.map(async (o) => {
    const i = t.find(
      (l) => l.sheetId === o.id
    );
    return i ? await yg(
      o,
      i,
      t
    ) : [];
  });
  return (await Promise.all(n)).flat();
}
const _g = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, ra = Math.pow(2, 53), Sg = -ra;
function oa(e, t, n) {
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
function Cg(e, t) {
  return oa(
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
function Eg(e, t) {
  return oa(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function Rg(e) {
  if (_g.test(e)) {
    const t = parseFloat(e);
    if (t > Sg && t < ra)
      return !0;
  }
  return !1;
}
function $g(e, t) {
  return t.type === "number" && Rg(e) ? parseFloat(e) : e;
}
function Tg(e, t) {
  if (t.type === "enum") {
    const n = t.typeArguments.values.find(
      (r) => r.label === e
    );
    if (n != null)
      return n.value;
  }
  return $g(e, t);
}
function Ig(e, t, n) {
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
        u != null && (s[u.sheetColumnId] = Tg(
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
function Og(e, t, n) {
  const r = n.data, o = Ig(e, t, r), i = Eg(
    e,
    o
  );
  return Cg(e, i);
}
function ur(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function Mg(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function Fg(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!ur(i))
        return !1;
      const l = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Un(a)), s = Un(r);
      return l.includes(s);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const Pg = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = Fg(r, t);
    n.push(...o);
  }), Mg(n);
};
function Ag(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Ng(e, t) {
  const n = kg(e, t), r = Dg(n);
  return Lg(r);
}
function kg(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, js);
}
function Dg(e) {
  return [
    ...e,
    ...Array(js - e.length).fill("")
  ];
}
function Lg(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > gm && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function Vg(e, t) {
  const { t: n } = be();
  return e.flatMap(
    (o) => o.columns.filter((i) => ur(i)).map((i) => ({
      label: `${i.label}${Sn(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (l) => l.sheetId === o.id && l.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => Hg(o, i, n("mapper.unused")));
}
function Hg(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function zg(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (Sn(r) && ur(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function Bg({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = be();
  return t && /* @__PURE__ */ f("div", { className: "m-4 rounded-[var(--hello-csv-radius)] border border-hello-csv-border bg-hello-csv-card px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ f("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ f("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ f("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ f("table", { className: "min-w-full divide-y divide-hello-csv-border", children: [
    /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-medium text-hello-csv-muted-foreground sm:pl-6 lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ f(Lo, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ f("tbody", { className: "divide-y divide-hello-csv-border", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { className: "h-12 py-4 pr-3 pl-4 text-sm text-hello-csv-foreground sm:pl-6 lg:pl-8", children: o || i === 0 && /* @__PURE__ */ f("span", { className: "text-hello-csv-muted-foreground italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function jg({
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
  return /* @__PURE__ */ f(
    "div",
    {
      className: "hover:bg-hello-csv-muted rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ f("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ f("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(Lo, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ f("div", { className: "mx-5", children: /* @__PURE__ */ f(gp, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ f("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ f(
          Ht,
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
const ia = "HelloCSV", la = 1, nt = "state";
async function Ug(e, t) {
  return new Promise((n, r) => {
    const o = aa(e, t), i = indexedDB.open(ia, la);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const u = i.result.transaction(nt, "readonly").objectStore(nt).get(o);
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
      s.objectStoreNames.contains(nt) && s.deleteObjectStore(nt), s.createObjectStore(nt);
    };
  });
}
async function sa(e, t) {
  return new Promise((n, r) => {
    const o = aa(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const l = indexedDB.open(ia, la);
    l.onerror = () => r(l.error), l.onsuccess = () => {
      const c = l.result.transaction(nt, "readwrite").objectStore(nt).put(i, o);
      c.onerror = () => r(c.error), c.onsuccess = () => n();
    }, l.onupgradeneeded = (s) => {
      const a = s.target.result;
      a.objectStoreNames.contains(nt) || a.createObjectStore(nt);
    };
  });
}
function aa(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${Wg(r)}`;
}
function Wg(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function Gg(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => ur(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      Sn(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const Nn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, qg = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), Kg = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await qg(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), l = new Blob([i], { type: "text/csv" });
    return new File([l], o, {
      type: "text/csv"
    });
  }
  return e;
};
function Yg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Xg = kn.exports, Ui;
function Zg() {
  return Ui || (Ui = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Xg, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, l = r.IS_PAPA_WORKER || !1, s = {}, a = 0, u = {};
      function c(v) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(b) {
          var x = T(b);
          x.chunkSize = parseInt(x.chunkSize), b.step || b.chunk || (x.chunkSize = null), this._handle = new h(x), (this._handle.streamer = this)._config = x;
        }).call(this, v), this.parseChunk = function(b, x) {
          var E = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < E) {
            let F = this._config.newline;
            F || (R = this._config.quoteChar || '"', F = this._handle.guessLineEndings(b, R)), b = [...b.split(F).slice(E)].join(F);
          }
          this.isFirstChunk && I(this._config.beforeFirstChunk) && (R = this._config.beforeFirstChunk(b)) !== void 0 && (b = R), this.isFirstChunk = !1, this._halted = !1;
          var E = this._partialLine + b, R = (this._partialLine = "", this._handle.parse(E, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (b = R.meta.cursor, E = (this._finished || (this._partialLine = E.substring(b - this._baseIndex), this._baseIndex = b), R && R.data && (this._rowCount += R.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), l) r.postMessage({ results: R, workerId: u.WORKER_ID, finished: E });
            else if (I(this._config.chunk) && !x) {
              if (this._config.chunk(R, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = R = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(R.data), this._completeResults.errors = this._completeResults.errors.concat(R.errors), this._completeResults.meta = R.meta), this._completed || !E || !I(this._config.complete) || R && R.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), E || R && R.meta.paused || this._nextChunk(), R;
          }
          this._halted = !0;
        }, this._sendError = function(b) {
          I(this._config.error) ? this._config.error(b) : l && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: b, finished: !1 });
        };
      }
      function p(v) {
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
            if (b = new XMLHttpRequest(), this._config.withCredentials && (b.withCredentials = this._config.withCredentials), i || (b.onload = M(this._chunkLoaded, this), b.onerror = M(this._chunkError, this)), b.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var x, E = this._config.downloadRequestHeaders;
              for (x in E) b.setRequestHeader(x, E[x]);
            }
            var R;
            this._config.chunkSize && (R = this._start + this._config.chunkSize - 1, b.setRequestHeader("Range", "bytes=" + this._start + "-" + R));
            try {
              b.send(this._config.downloadRequestBody);
            } catch (F) {
              this._chunkError(F.message);
            }
            i && b.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          b.readyState === 4 && (b.status < 200 || 400 <= b.status ? this._chunkError() : (this._start += this._config.chunkSize || b.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((x) => (x = x.getResponseHeader("Content-Range")) !== null ? parseInt(x.substring(x.lastIndexOf("/") + 1)) : -1)(b), this.parseChunk(b.responseText)));
        }, this._chunkError = function(x) {
          x = b.statusText || x, this._sendError(new Error(x));
        };
      }
      function g(v) {
        (v = v || {}).chunkSize || (v.chunkSize = u.LocalChunkSize), c.call(this, v);
        var b, x, E = typeof FileReader < "u";
        this.stream = function(R) {
          this._input = R, x = R.slice || R.webkitSlice || R.mozSlice, E ? ((b = new FileReader()).onload = M(this._chunkLoaded, this), b.onerror = M(this._chunkError, this)) : b = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var R = this._input, F = (this._config.chunkSize && (F = Math.min(this._start + this._config.chunkSize, this._input.size), R = x.call(R, this._start, F)), b.readAsText(R, this._config.encoding));
          E || this._chunkLoaded({ target: { result: F } });
        }, this._chunkLoaded = function(R) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(R.target.result);
        }, this._chunkError = function() {
          this._sendError(b.error);
        };
      }
      function d(v) {
        var b;
        c.call(this, v = v || {}), this.stream = function(x) {
          return b = x, this._nextChunk();
        }, this._nextChunk = function() {
          var x, E;
          if (!this._finished) return x = this._config.chunkSize, b = x ? (E = b.substring(0, x), b.substring(x)) : (E = b, ""), this._finished = !b, this.parseChunk(E);
        };
      }
      function m(v) {
        c.call(this, v = v || {});
        var b = [], x = !0, E = !1;
        this.pause = function() {
          c.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          c.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(R) {
          this._input = R, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          E && b.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), b.length ? this.parseChunk(b.shift()) : x = !0;
        }, this._streamData = M(function(R) {
          try {
            b.push(typeof R == "string" ? R : R.toString(this._config.encoding)), x && (x = !1, this._checkIsFinished(), this.parseChunk(b.shift()));
          } catch (F) {
            this._streamError(F);
          }
        }, this), this._streamError = M(function(R) {
          this._streamCleanUp(), this._sendError(R);
        }, this), this._streamEnd = M(function() {
          this._streamCleanUp(), E = !0, this._streamData("");
        }, this), this._streamCleanUp = M(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function h(v) {
        var b, x, E, R, F = Math.pow(2, 53), P = -F, j = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, G = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, z = this, V = 0, O = 0, K = !1, N = !1, B = [], $ = { data: [], errors: [], meta: {} };
        function le(q) {
          return v.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0;
        }
        function te() {
          if ($ && E && (ie("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), E = !1), v.skipEmptyLines && ($.data = $.data.filter(function(J) {
            return !le(J);
          })), ae()) {
            let J = function(ge, we) {
              I(v.transformHeader) && (ge = v.transformHeader(ge, we)), B.push(ge);
            };
            if ($) if (Array.isArray($.data[0])) {
              for (var q = 0; ae() && q < $.data.length; q++) $.data[q].forEach(J);
              $.data.splice(0, 1);
            } else $.data.forEach(J);
          }
          function ee(J, ge) {
            for (var we = v.header ? {} : [], L = 0; L < J.length; L++) {
              var Y = L, Q = J[L], Q = ((Re, ne) => ((he) => (v.dynamicTypingFunction && v.dynamicTyping[he] === void 0 && (v.dynamicTyping[he] = v.dynamicTypingFunction(he)), (v.dynamicTyping[he] || v.dynamicTyping) === !0))(Re) ? ne === "true" || ne === "TRUE" || ne !== "false" && ne !== "FALSE" && (((he) => {
                if (j.test(he) && (he = parseFloat(he), P < he && he < F))
                  return 1;
              })(ne) ? parseFloat(ne) : G.test(ne) ? new Date(ne) : ne === "" ? null : ne) : ne)(Y = v.header ? L >= B.length ? "__parsed_extra" : B[L] : Y, Q = v.transform ? v.transform(Q, Y) : Q);
              Y === "__parsed_extra" ? (we[Y] = we[Y] || [], we[Y].push(Q)) : we[Y] = Q;
            }
            return v.header && (L > B.length ? ie("FieldMismatch", "TooManyFields", "Too many fields: expected " + B.length + " fields but parsed " + L, O + ge) : L < B.length && ie("FieldMismatch", "TooFewFields", "Too few fields: expected " + B.length + " fields but parsed " + L, O + ge)), we;
          }
          var me;
          $ && (v.header || v.dynamicTyping || v.transform) && (me = 1, !$.data.length || Array.isArray($.data[0]) ? ($.data = $.data.map(ee), me = $.data.length) : $.data = ee($.data, 0), v.header && $.meta && ($.meta.fields = B), O += me);
        }
        function ae() {
          return v.header && B.length === 0;
        }
        function ie(q, ee, me, J) {
          q = { type: q, code: ee, message: me }, J !== void 0 && (q.row = J), $.errors.push(q);
        }
        I(v.step) && (R = v.step, v.step = function(q) {
          $ = q, ae() ? te() : (te(), $.data.length !== 0 && (V += q.data.length, v.preview && V > v.preview ? x.abort() : ($.data = $.data[0], R($, z))));
        }), this.parse = function(q, ee, me) {
          var J = v.quoteChar || '"', J = (v.newline || (v.newline = this.guessLineEndings(q, J)), E = !1, v.delimiter ? I(v.delimiter) && (v.delimiter = v.delimiter(q), $.meta.delimiter = v.delimiter) : ((J = ((ge, we, L, Y, Q) => {
            var Re, ne, he, st;
            Q = Q || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Pt = 0; Pt < Q.length; Pt++) {
              for (var Ue, Zt = Q[Pt], $e = 0, We = 0, Se = 0, Ne = (he = void 0, new _({ comments: Y, delimiter: Zt, newline: we, preview: 10 }).parse(ge)), Qe = 0; Qe < Ne.data.length; Qe++) L && le(Ne.data[Qe]) ? Se++ : (Ue = Ne.data[Qe].length, We += Ue, he === void 0 ? he = Ue : 0 < Ue && ($e += Math.abs(Ue - he), he = Ue));
              0 < Ne.data.length && (We /= Ne.data.length - Se), (ne === void 0 || $e <= ne) && (st === void 0 || st < We) && 1.99 < We && (ne = $e, Re = Zt, st = We);
            }
            return { successful: !!(v.delimiter = Re), bestDelimiter: Re };
          })(q, v.newline, v.skipEmptyLines, v.comments, v.delimitersToGuess)).successful ? v.delimiter = J.bestDelimiter : (E = !0, v.delimiter = u.DefaultDelimiter), $.meta.delimiter = v.delimiter), T(v));
          return v.preview && v.header && J.preview++, b = q, x = new _(J), $ = x.parse(b, ee, me), te(), K ? { meta: { paused: !0 } } : $ || { meta: { paused: !1 } };
        }, this.paused = function() {
          return K;
        }, this.pause = function() {
          K = !0, x.abort(), b = I(v.chunk) ? "" : b.substring(x.getCharIndex());
        }, this.resume = function() {
          z.streamer._halted ? (K = !1, z.streamer.parseChunk(b, !0)) : setTimeout(z.resume, 3);
        }, this.aborted = function() {
          return N;
        }, this.abort = function() {
          N = !0, x.abort(), $.meta.aborted = !0, I(v.complete) && v.complete($), b = "";
        }, this.guessLineEndings = function(ge, J) {
          ge = ge.substring(0, 1048576);
          var J = new RegExp(w(J) + "([^]*?)" + w(J), "gm"), me = (ge = ge.replace(J, "")).split("\r"), J = ge.split(`
`), ge = 1 < J.length && J[0].length < me[0].length;
          if (me.length === 1 || ge) return `
`;
          for (var we = 0, L = 0; L < me.length; L++) me[L][0] === `
` && we++;
          return we >= me.length / 2 ? `\r
` : "\r";
        };
      }
      function w(v) {
        return v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function _(v) {
        var b = (v = v || {}).delimiter, x = v.newline, E = v.comments, R = v.step, F = v.preview, P = v.fastMode, j = null, G = !1, z = v.quoteChar == null ? '"' : v.quoteChar, V = z;
        if (v.escapeChar !== void 0 && (V = v.escapeChar), (typeof b != "string" || -1 < u.BAD_DELIMITERS.indexOf(b)) && (b = ","), E === b) throw new Error("Comment character same as delimiter");
        E === !0 ? E = "#" : (typeof E != "string" || -1 < u.BAD_DELIMITERS.indexOf(E)) && (E = !1), x !== `
` && x !== "\r" && x !== `\r
` && (x = `
`);
        var O = 0, K = !1;
        this.parse = function(N, B, $) {
          if (typeof N != "string") throw new Error("Input must be a string");
          var le = N.length, te = b.length, ae = x.length, ie = E.length, q = I(R), ee = [], me = [], J = [], ge = O = 0;
          if (!N) return $e();
          if (P || P !== !1 && N.indexOf(z) === -1) {
            for (var we = N.split(x), L = 0; L < we.length; L++) {
              if (J = we[L], O += J.length, L !== we.length - 1) O += x.length;
              else if ($) return $e();
              if (!E || J.substring(0, ie) !== E) {
                if (q) {
                  if (ee = [], st(J.split(b)), We(), K) return $e();
                } else st(J.split(b));
                if (F && F <= L) return ee = ee.slice(0, F), $e(!0);
              }
            }
            return $e();
          }
          for (var Y = N.indexOf(b, O), Q = N.indexOf(x, O), Re = new RegExp(w(V) + w(z), "g"), ne = N.indexOf(z, O); ; ) if (N[O] === z) for (ne = O, O++; ; ) {
            if ((ne = N.indexOf(z, ne + 1)) === -1) return $ || me.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ee.length, index: O }), Ue();
            if (ne === le - 1) return Ue(N.substring(O, ne).replace(Re, z));
            if (z === V && N[ne + 1] === V) ne++;
            else if (z === V || ne === 0 || N[ne - 1] !== V) {
              Y !== -1 && Y < ne + 1 && (Y = N.indexOf(b, ne + 1));
              var he = Pt((Q = Q !== -1 && Q < ne + 1 ? N.indexOf(x, ne + 1) : Q) === -1 ? Y : Math.min(Y, Q));
              if (N.substr(ne + 1 + he, te) === b) {
                J.push(N.substring(O, ne).replace(Re, z)), N[O = ne + 1 + he + te] !== z && (ne = N.indexOf(z, O)), Y = N.indexOf(b, O), Q = N.indexOf(x, O);
                break;
              }
              if (he = Pt(Q), N.substring(ne + 1 + he, ne + 1 + he + ae) === x) {
                if (J.push(N.substring(O, ne).replace(Re, z)), Zt(ne + 1 + he + ae), Y = N.indexOf(b, O), ne = N.indexOf(z, O), q && (We(), K)) return $e();
                if (F && ee.length >= F) return $e(!0);
                break;
              }
              me.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ee.length, index: O }), ne++;
            }
          }
          else if (E && J.length === 0 && N.substring(O, O + ie) === E) {
            if (Q === -1) return $e();
            O = Q + ae, Q = N.indexOf(x, O), Y = N.indexOf(b, O);
          } else if (Y !== -1 && (Y < Q || Q === -1)) J.push(N.substring(O, Y)), O = Y + te, Y = N.indexOf(b, O);
          else {
            if (Q === -1) break;
            if (J.push(N.substring(O, Q)), Zt(Q + ae), q && (We(), K)) return $e();
            if (F && ee.length >= F) return $e(!0);
          }
          return Ue();
          function st(Se) {
            ee.push(Se), ge = O;
          }
          function Pt(Se) {
            var Ne = 0;
            return Ne = Se !== -1 && (Se = N.substring(ne + 1, Se)) && Se.trim() === "" ? Se.length : Ne;
          }
          function Ue(Se) {
            return $ || (Se === void 0 && (Se = N.substring(O)), J.push(Se), O = le, st(J), q && We()), $e();
          }
          function Zt(Se) {
            O = Se, st(J), J = [], Q = N.indexOf(x, O);
          }
          function $e(Se) {
            if (v.header && !B && ee.length && !G) {
              var Ne = ee[0], Qe = {}, dr = new Set(Ne);
              let jo = !1;
              for (let At = 0; At < Ne.length; At++) {
                let Ge = Ne[At];
                if (Qe[Ge = I(v.transformHeader) ? v.transformHeader(Ge, At) : Ge]) {
                  let Jt, Uo = Qe[Ge];
                  for (; Jt = Ge + "_" + Uo, Uo++, dr.has(Jt); ) ;
                  dr.add(Jt), Ne[At] = Jt, Qe[Ge]++, jo = !0, (j = j === null ? {} : j)[Jt] = Ge;
                } else Qe[Ge] = 1, Ne[At] = Ge;
                dr.add(Ge);
              }
              jo && console.warn("Duplicate headers found and renamed."), G = !0;
            }
            return { data: ee, errors: me, meta: { delimiter: b, linebreak: x, aborted: K, truncated: !!Se, cursor: ge + (B || 0), renamedHeaders: j } };
          }
          function We() {
            R($e()), ee = [], me = [];
          }
        }, this.abort = function() {
          K = !0;
        }, this.getCharIndex = function() {
          return O;
        };
      }
      function S(v) {
        var b = v.data, x = s[b.workerId], E = !1;
        if (b.error) x.userError(b.error, b.file);
        else if (b.results && b.results.data) {
          var R = { abort: function() {
            E = !0, y(b.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: C, resume: C };
          if (I(x.userStep)) {
            for (var F = 0; F < b.results.data.length && (x.userStep({ data: b.results.data[F], errors: b.results.errors, meta: b.results.meta }, R), !E); F++) ;
            delete b.results;
          } else I(x.userChunk) && (x.userChunk(b.results, R, b.file), delete b.results);
        }
        b.finished && !E && y(b.workerId, b.results);
      }
      function y(v, b) {
        var x = s[v];
        I(x.userComplete) && x.userComplete(b), x.terminate(), delete s[v];
      }
      function C() {
        throw new Error("Not implemented.");
      }
      function T(v) {
        if (typeof v != "object" || v === null) return v;
        var b, x = Array.isArray(v) ? [] : {};
        for (b in v) x[b] = T(v[b]);
        return x;
      }
      function M(v, b) {
        return function() {
          v.apply(b, arguments);
        };
      }
      function I(v) {
        return typeof v == "function";
      }
      return u.parse = function(v, b) {
        var x = (b = b || {}).dynamicTyping || !1;
        if (I(x) && (b.dynamicTypingFunction = x, x = {}), b.dynamicTyping = x, b.transform = !!I(b.transform) && b.transform, !b.worker || !u.WORKERS_SUPPORTED) return x = null, u.NODE_STREAM_INPUT, typeof v == "string" ? (v = ((E) => E.charCodeAt(0) !== 65279 ? E : E.slice(1))(v), x = new (b.download ? p : d)(b)) : v.readable === !0 && I(v.read) && I(v.on) ? x = new m(b) : (r.File && v instanceof File || v instanceof Object) && (x = new g(b)), x.stream(v);
        (x = (() => {
          var E;
          return !!u.WORKERS_SUPPORTED && (E = (() => {
            var R = r.URL || r.webkitURL || null, F = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", F, ")();"], { type: "text/javascript" })));
          })(), (E = new r.Worker(E)).onmessage = S, E.id = a++, s[E.id] = E);
        })()).userStep = b.step, x.userChunk = b.chunk, x.userComplete = b.complete, x.userError = b.error, b.step = I(b.step), b.chunk = I(b.chunk), b.complete = I(b.complete), b.error = I(b.error), delete b.worker, x.postMessage({ input: v, config: b, workerId: x.id });
      }, u.unparse = function(v, b) {
        var x = !1, E = !0, R = ",", F = `\r
`, P = '"', j = P + P, G = !1, z = null, V = !1, O = ((() => {
          if (typeof b == "object") {
            if (typeof b.delimiter != "string" || u.BAD_DELIMITERS.filter(function(B) {
              return b.delimiter.indexOf(B) !== -1;
            }).length || (R = b.delimiter), typeof b.quotes != "boolean" && typeof b.quotes != "function" && !Array.isArray(b.quotes) || (x = b.quotes), typeof b.skipEmptyLines != "boolean" && typeof b.skipEmptyLines != "string" || (G = b.skipEmptyLines), typeof b.newline == "string" && (F = b.newline), typeof b.quoteChar == "string" && (P = b.quoteChar), typeof b.header == "boolean" && (E = b.header), Array.isArray(b.columns)) {
              if (b.columns.length === 0) throw new Error("Option columns is empty");
              z = b.columns;
            }
            b.escapeChar !== void 0 && (j = b.escapeChar + P), b.escapeFormulae instanceof RegExp ? V = b.escapeFormulae : typeof b.escapeFormulae == "boolean" && b.escapeFormulae && (V = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(w(P), "g"));
        if (typeof v == "string" && (v = JSON.parse(v)), Array.isArray(v)) {
          if (!v.length || Array.isArray(v[0])) return K(null, v, G);
          if (typeof v[0] == "object") return K(z || Object.keys(v[0]), v, G);
        } else if (typeof v == "object") return typeof v.data == "string" && (v.data = JSON.parse(v.data)), Array.isArray(v.data) && (v.fields || (v.fields = v.meta && v.meta.fields || z), v.fields || (v.fields = Array.isArray(v.data[0]) ? v.fields : typeof v.data[0] == "object" ? Object.keys(v.data[0]) : []), Array.isArray(v.data[0]) || typeof v.data[0] == "object" || (v.data = [v.data])), K(v.fields || [], v.data || [], G);
        throw new Error("Unable to serialize unrecognized input");
        function K(B, $, le) {
          var te = "", ae = (typeof B == "string" && (B = JSON.parse(B)), typeof $ == "string" && ($ = JSON.parse($)), Array.isArray(B) && 0 < B.length), ie = !Array.isArray($[0]);
          if (ae && E) {
            for (var q = 0; q < B.length; q++) 0 < q && (te += R), te += N(B[q], q);
            0 < $.length && (te += F);
          }
          for (var ee = 0; ee < $.length; ee++) {
            var me = (ae ? B : $[ee]).length, J = !1, ge = ae ? Object.keys($[ee]).length === 0 : $[ee].length === 0;
            if (le && !ae && (J = le === "greedy" ? $[ee].join("").trim() === "" : $[ee].length === 1 && $[ee][0].length === 0), le === "greedy" && ae) {
              for (var we = [], L = 0; L < me; L++) {
                var Y = ie ? B[L] : L;
                we.push($[ee][Y]);
              }
              J = we.join("").trim() === "";
            }
            if (!J) {
              for (var Q = 0; Q < me; Q++) {
                0 < Q && !ge && (te += R);
                var Re = ae && ie ? B[Q] : Q;
                te += N($[ee][Re], Q);
              }
              ee < $.length - 1 && (!le || 0 < me && !ge) && (te += F);
            }
          }
          return te;
        }
        function N(B, $) {
          var le, te;
          return B == null ? "" : B.constructor === Date ? JSON.stringify(B).slice(1, 25) : (te = !1, V && typeof B == "string" && V.test(B) && (B = "'" + B, te = !0), le = B.toString().replace(O, j), (te = te || x === !0 || typeof x == "function" && x(B, $) || Array.isArray(x) && x[$] || ((ae, ie) => {
            for (var q = 0; q < ie.length; q++) if (-1 < ae.indexOf(ie[q])) return !0;
            return !1;
          })(le, u.BAD_DELIMITERS) || -1 < le.indexOf(R) || le.charAt(0) === " " || le.charAt(le.length - 1) === " ") ? P + le + P : le);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = _, u.ParserHandle = h, u.NetworkStreamer = p, u.FileStreamer = g, u.StringStreamer = d, u.ReadableStreamStreamer = m, r.jQuery && ((o = r.jQuery).fn.parse = function(v) {
        var b = v.config || {}, x = [];
        return this.each(function(F) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var P = 0; P < this.files.length; P++) x.push({ file: this.files[P], inputElem: this, instanceConfig: o.extend({}, b) });
        }), E(), this;
        function E() {
          if (x.length === 0) I(v.complete) && v.complete();
          else {
            var F, P, j, G, z = x[0];
            if (I(v.before)) {
              var V = v.before(z.file, z.inputElem);
              if (typeof V == "object") {
                if (V.action === "abort") return F = "AbortError", P = z.file, j = z.inputElem, G = V.reason, void (I(v.error) && v.error({ name: F }, P, j, G));
                if (V.action === "skip") return void R();
                typeof V.config == "object" && (z.instanceConfig = o.extend(z.instanceConfig, V.config));
              } else if (V === "skip") return void R();
            }
            var O = z.instanceConfig.complete;
            z.instanceConfig.complete = function(K) {
              I(O) && O(K, z.file, z.inputElem), R();
            }, u.parse(z.file, z.instanceConfig);
          }
        }
        function R() {
          x.splice(0, 1), E();
        }
      }), l && (r.onmessage = function(v) {
        v = v.data, u.WORKER_ID === void 0 && v && (u.WORKER_ID = v.workerId), typeof v.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(v.input, v.config), finished: !0 }) : (r.File && v.input instanceof File || v.input instanceof Object) && (v = u.parse(v.input, v.config)) && r.postMessage({ workerId: u.WORKER_ID, results: v, finished: !0 });
      }), (p.prototype = Object.create(c.prototype)).constructor = p, (g.prototype = Object.create(c.prototype)).constructor = g, (d.prototype = Object.create(d.prototype)).constructor = d, (m.prototype = Object.create(c.prototype)).constructor = m, u;
    });
  }(kn)), kn.exports;
}
var Jg = Zg();
const Qg = /* @__PURE__ */ Yg(Jg);
async function eh({ file: e }) {
  return new Promise((t, n) => {
    Qg.parse(e, {
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
let Sr = 0;
function th() {
  return Sr = (Sr + 1) % Number.MAX_SAFE_INTEGER, `${Date.now()}-${Sr}`;
}
async function nh(e, t) {
  const n = Cn(e);
  try {
    return t.enabled ? await rh(e, t) : n;
  } catch {
    return n;
  }
}
function Cn(e) {
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
async function rh(e, t) {
  const n = await Ug(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = Cn(e);
  return sa(r, t.customKey), r;
}
class ua {
  constructor(t, n) {
    _e(this, "initialState");
    _e(this, "importerDefinition");
    _e(this, "buildSteps");
    this.importerDefinition = t, this.initialState = n ?? Cn(t.sheets), this.buildSteps = [];
  }
  async getState() {
    let t = this.initialState;
    this.buildSteps.forEach((r) => {
      t = ca(t, r);
    });
    const n = await xg(
      this.importerDefinition.sheets,
      t.sheetData
    ).catch(() => t.validationErrors);
    return { ...t, validationErrors: n };
  }
  async uploadFile(t) {
    const n = await Kg(
      t,
      this.importerDefinition.customFileLoaders
    ), r = await eh({ file: n }), o = r.meta.fields, i = this.importerDefinition.customSuggestedMapper != null ? await this.importerDefinition.customSuggestedMapper(
      this.importerDefinition.sheets,
      o
    ) : Pg(
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
        amountOfEmptyRowsToAdd: t ?? pm
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
    const t = await this.getState(), n = Og(
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
class Av extends ua {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
}
const Gn = class Gn extends ua {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t, n) {
    super(t, n);
  }
  async dispatchChange(t) {
    const n = this.buildSteps.some(
      (o) => Gn.actionTypesThatRequireValidation.has(o.type)
    ), r = th();
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
_e(Gn, "actionTypesThatRequireValidation", /* @__PURE__ */ new Set([
  "DATA_MAPPED",
  "CELL_CHANGED",
  "REMOVE_ROWS"
]));
let to = Gn;
function oh(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
const ca = (e, t) => {
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
        sheetData: Qr(
          e.sheetDefinitions,
          t.payload.mappedData
        ),
        mode: "preview"
      };
    case "CELL_CHANGED": {
      const r = e.sheetData.map((o) => {
        if (o.sheetId === t.payload.sheetId) {
          const i = [...o.rows];
          return i[t.payload.rowIndex] = oh(
            t.payload.value,
            t.payload,
            e
          ), { ...o, rows: i };
        } else
          return o;
      });
      return {
        ...e,
        sheetData: Qr(e.sheetDefinitions, r)
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
      return Cn(e.sheetDefinitions);
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
}, ih = (e, t, n) => {
  const [r, o] = it(
    ca,
    n ?? Cn(e)
  );
  return re(() => {
    const i = async () => {
      const l = await nh(e, t);
      o({ type: "SET_STATE", payload: { state: l } });
    };
    n == null && i();
  }, []), re(() => {
    t.enabled && sa(r, t.customKey);
  }, [r, t]), [r, o];
}, da = fe({}), fa = fe(
  {}
);
function lh({
  sheets: e,
  persistenceConfig: t,
  initialState: n,
  onStateChanged: r,
  children: o
}) {
  const [i, l] = ih(
    e,
    t,
    n
  ), s = k(i);
  return re(() => {
    s.current !== i && (r == null || r(s.current, i), s.current = i);
  }, [i, r]), /* @__PURE__ */ f(da.Provider, { value: i, children: /* @__PURE__ */ f(fa.Provider, { value: l, children: o }) });
}
function lt() {
  return se(da);
}
function sh() {
  return se(fa);
}
function ah({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = lt(), { sheets: i } = ze(), { t: l } = be(), [s, a] = H(null), u = r ?? [], c = o, p = c.data, g = c.meta.fields, d = Vg(
    i,
    u
  ), m = zg(
    i,
    u
  ), h = W(() => s ? Ng(p, s) : [], [s, p]), [w, _] = H(!1);
  async function S() {
    try {
      _(!0), await t();
    } finally {
      _(!1);
    }
  }
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f("div", { className: "flex-none text-2xl", children: l("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ f("div", { className: "min-h-0 flex-auto", children: /* @__PURE__ */ f("div", { className: "flex h-full justify-between space-x-5", children: [
      /* @__PURE__ */ f("div", { className: "flex flex-2 flex-col", children: [
        /* @__PURE__ */ f("div", { className: "my-5 flex text-sm font-light uppercase", children: [
          /* @__PURE__ */ f("div", { className: "flex-1", children: l("mapper.importedColumn") }),
          /* @__PURE__ */ f("div", { className: "flex-1", children: l("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex-1 overflow-y-auto", children: g.map((y, C) => {
          const T = u.find(
            (M) => M.csvColumnName === y
          ) ?? null;
          return /* @__PURE__ */ f(
            jg,
            {
              csvHeader: y,
              currentMapping: T,
              setMapping: (M) => {
                const I = Ag(
                  u,
                  y,
                  M
                );
                e(I);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(y);
              }
            },
            C
          );
        }) })
      ] }),
      /* @__PURE__ */ f("div", { className: "bg-hello-csv-muted hidden flex-1 overflow-y-auto sm:block", children: /* @__PURE__ */ f(
        Bg,
        {
          examples: h,
          csvHeader: s ?? ""
        }
      ) })
    ] }) }),
    !m && /* @__PURE__ */ f("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ f(rg, { children: l("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ f("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ f("div", { className: "mt-5 flex justify-between", children: [
      /* @__PURE__ */ f(
        He,
        {
          variant: "secondary",
          outline: !0,
          onClick: n,
          disabled: w,
          children: l("mapper.back")
        }
      ),
      /* @__PURE__ */ f(
        He,
        {
          onClick: S,
          disabled: !m || w,
          children: /* @__PURE__ */ f("div", { className: "flex items-center", children: [
            w && /* @__PURE__ */ f(pe, { children: [
              /* @__PURE__ */ f(Qs, { color: "light" }),
              /* @__PURE__ */ f("div", { className: "mr-2" })
            ] }),
            l("mapper.confirm")
          ] })
        }
      )
    ] }) })
  ] });
}
var uh = { NODE_ENV: "production" };
function dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: dt(n, r[e])
    }));
  };
}
function cr(e) {
  return e instanceof Function;
}
function ch(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function dh(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const l = t(i);
      l != null && l.length && r(l);
    });
  };
  return r(e), n;
}
function X(e, t, n) {
  let r = [], o;
  return (i) => {
    let l;
    n.key && n.debug && (l = Date.now());
    const s = e(i);
    if (!(s.length !== r.length || s.some((c, p) => r[p] !== c)))
      return o;
    r = s;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const c = Math.round((Date.now() - l) * 100) / 100, p = Math.round((Date.now() - u) * 100) / 100, g = p / 16, d = (m, h) => {
        for (m = String(m); m.length < h; )
          m = " " + m;
        return m;
      };
      console.info(`%c⏱ ${d(p, 5)} /${d(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function Z(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: uh.NODE_ENV === "development",
    onChange: r
  };
}
function fh(e, t, n, r) {
  const o = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: X(() => [e, n, t, i], (l, s, a, u) => ({
      table: l,
      column: s,
      row: a,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), Z(e.options, "debugCells"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, n, t, e);
  }, {}), i;
}
function ph(e, t, n, r) {
  var o, i;
  const s = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = s.accessorKey;
  let u = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, c;
  if (s.accessorFn ? c = s.accessorFn : a && (a.includes(".") ? c = (g) => {
    let d = g;
    for (const h of a.split(".")) {
      var m;
      d = (m = d) == null ? void 0 : m[h];
    }
    return d;
  } : c = (g) => g[s.accessorKey]), !u)
    throw new Error();
  let p = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: X(() => [!0], () => {
      var g;
      return [p, ...(g = p.columns) == null ? void 0 : g.flatMap((d) => d.getFlatColumns())];
    }, Z(e.options, "debugColumns")),
    getLeafColumns: X(() => [e._getOrderColumnsFn()], (g) => {
      var d;
      if ((d = p.columns) != null && d.length) {
        let m = p.columns.flatMap((h) => h.getLeafColumns());
        return g(m);
      }
      return [p];
    }, Z(e.options, "debugColumns"))
  };
  for (const g of e._features)
    g.createColumn == null || g.createColumn(p, e);
  return p;
}
const Te = "debugHeaders";
function Wi(e, t, n) {
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
const mh = {
  createTable: (e) => {
    e.getHeaderGroups = X(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, l;
      const s = (i = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? l : [], u = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return On(t, [...s, ...u, ...a], e);
    }, Z(e.options, Te)), e.getCenterHeaderGroups = X(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), On(t, n, e, "center")), Z(e.options, Te)), e.getLeftHeaderGroups = X(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return On(t, i, e, "left");
    }, Z(e.options, Te)), e.getRightHeaderGroups = X(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return On(t, i, e, "right");
    }, Z(e.options, Te)), e.getFooterGroups = X(() => [e.getHeaderGroups()], (t) => [...t].reverse(), Z(e.options, Te)), e.getLeftFooterGroups = X(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), Z(e.options, Te)), e.getCenterFooterGroups = X(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), Z(e.options, Te)), e.getRightFooterGroups = X(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), Z(e.options, Te)), e.getFlatHeaders = X(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Z(e.options, Te)), e.getLeftFlatHeaders = X(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Z(e.options, Te)), e.getCenterFlatHeaders = X(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Z(e.options, Te)), e.getRightFlatHeaders = X(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Z(e.options, Te)), e.getCenterLeafHeaders = X(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), Z(e.options, Te)), e.getLeftLeafHeaders = X(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), Z(e.options, Te)), e.getRightLeafHeaders = X(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), Z(e.options, Te)), e.getLeafHeaders = X(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, l, s, a, u;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []].map((c) => c.getLeafHeaders()).flat();
    }, Z(e.options, Te));
  }
};
function On(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(g, d) {
    d === void 0 && (d = 1), l = Math.max(l, d), g.filter((m) => m.getIsVisible()).forEach((m) => {
      var h;
      (h = m.columns) != null && h.length && s(m.columns, d + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const u = (g, d) => {
    const m = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    g.forEach((w) => {
      const _ = [...h].reverse()[0], S = w.column.depth === m.depth;
      let y, C = !1;
      if (S && w.column.parent ? y = w.column.parent : (y = w.column, C = !0), _ && (_ == null ? void 0 : _.column) === y)
        _.subHeaders.push(w);
      else {
        const T = Wi(n, y, {
          id: [r, d, y.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${h.filter((M) => M.column === y).length}` : void 0,
          depth: d,
          index: h.length
        });
        T.subHeaders.push(w), h.push(T);
      }
      m.headers.push(w), w.headerGroup = m;
    }), a.push(m), d > 0 && u(h, d - 1);
  }, c = t.map((g, d) => Wi(n, g, {
    depth: l,
    index: d
  }));
  u(c, l - 1), a.reverse();
  const p = (g) => g.filter((m) => m.column.getIsVisible()).map((m) => {
    let h = 0, w = 0, _ = [0];
    m.subHeaders && m.subHeaders.length ? (_ = [], p(m.subHeaders).forEach((y) => {
      let {
        colSpan: C,
        rowSpan: T
      } = y;
      h += C, _.push(T);
    })) : h = 1;
    const S = Math.min(..._);
    return w = w + S, m.colSpan = h, m.rowSpan = w, {
      colSpan: h,
      rowSpan: w
    };
  });
  return p((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const gh = (e, t, n, r, o, i, l) => {
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
    getLeafRows: () => dh(s.subRows, (a) => a.subRows),
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
    getAllCells: X(() => [e.getAllLeafColumns()], (a) => a.map((u) => fh(e, s, u, u.id)), Z(e.options, "debugRows")),
    _getAllCellsByColumnId: X(() => [s.getAllCells()], (a) => a.reduce((u, c) => (u[c.column.id] = c, u), {}), Z(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, hh = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, pa = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
pa.autoRemove = (e) => Be(e);
const ma = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
ma.autoRemove = (e) => Be(e);
const ga = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ga.autoRemove = (e) => Be(e);
const ha = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
ha.autoRemove = (e) => Be(e);
const va = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
va.autoRemove = (e) => Be(e) || !(e != null && e.length);
const wa = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
wa.autoRemove = (e) => Be(e) || !(e != null && e.length);
const ba = (e, t, n) => e.getValue(t) === n;
ba.autoRemove = (e) => Be(e);
const ya = (e, t, n) => e.getValue(t) == n;
ya.autoRemove = (e) => Be(e);
const Ho = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Ho.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
Ho.autoRemove = (e) => Be(e) || Be(e[0]) && Be(e[1]);
const et = {
  includesString: pa,
  includesStringSensitive: ma,
  equalsString: ga,
  arrIncludes: ha,
  arrIncludesAll: va,
  arrIncludesSome: wa,
  equals: ba,
  weakEquals: ya,
  inNumberRange: Ho
};
function Be(e) {
  return e == null || e === "";
}
const vh = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ve("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? et.includesString : typeof r == "number" ? et.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? et.equals : Array.isArray(r) ? et.arrIncludes : et.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return cr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : et[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((c) => c.id === e.id), l = dt(n, i ? i.value : void 0);
        if (Gi(o, l, e)) {
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
        return (i = dt(t, o)) == null ? void 0 : i.filter((l) => {
          const s = n.find((a) => a.id === l.id);
          if (s) {
            const a = s.getFilterFn();
            if (Gi(a, l.value, s))
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
function Gi(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const wh = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), bh = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, yh = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, xh = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, _h = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Sh = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!ch(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Ch = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Eh = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Rh = (e, t) => t.length, Cr = {
  sum: wh,
  min: bh,
  max: yh,
  extent: xh,
  mean: _h,
  median: Sh,
  unique: Ch,
  uniqueCount: Eh,
  count: Rh
}, $h = {
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
    onGroupingChange: Ve("grouping", e),
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
        return Cr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Cr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return cr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : Cr[e.columnDef.aggregationFn];
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
function Th(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const Ih = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ve("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = X((n) => [an(t, n)], (n) => n.findIndex((r) => r.id === e.id), Z(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = an(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = an(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = X(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
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
      return Th(i, n, r);
    }, Z(e.options, "debugTable"));
  }
}, Er = () => ({
  left: [],
  right: []
}), Oh = {
  getInitialState: (e) => ({
    columnPinning: Er(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ve("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, l;
        if (n === "right") {
          var s, a;
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((p) => !(r != null && r.includes(p))), ...r]
          };
        }
        if (n === "left") {
          var u, c;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((c = o == null ? void 0 : o.right) != null ? c : []).filter((p) => !(r != null && r.includes(p)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((p) => !(r != null && r.includes(p))),
          right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((p) => !(r != null && r.includes(p)))
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
    e.getCenterVisibleCells = X(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((l) => !i.includes(l.column.id));
    }, Z(t.options, "debugRows")), e.getLeftVisibleCells = X(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), Z(t.options, "debugRows")), e.getRightVisibleCells = X(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), Z(t.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? Er() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Er());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = X(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), Z(e.options, "debugColumns")), e.getRightLeafColumns = X(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), Z(e.options, "debugColumns")), e.getCenterLeafColumns = X(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, Z(e.options, "debugColumns"));
  }
}, Mn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Rr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Mh = {
  getDefaultColumnDef: () => Mn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Rr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ve("columnSizing", e),
    onColumnSizingInfoChange: Ve("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Mn.minSize, (r = i ?? e.columnDef.size) != null ? r : Mn.size), (o = e.columnDef.maxSize) != null ? o : Mn.maxSize);
    }, e.getStart = X((n) => [n, an(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), Z(t.options, "debugColumns")), e.getAfter = X((n) => [n, an(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), Z(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), $r(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((_) => [_.column.id, _.column.getSize()]) : [[r.id, r.getSize()]], a = $r(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (_, S) => {
          typeof S == "number" && (t.setColumnSizingInfo((y) => {
            var C, T;
            const M = t.options.columnResizeDirection === "rtl" ? -1 : 1, I = (S - ((C = y == null ? void 0 : y.startOffset) != null ? C : 0)) * M, v = Math.max(I / ((T = y == null ? void 0 : y.startSize) != null ? T : 0), -0.999999);
            return y.columnSizingStart.forEach((b) => {
              let [x, E] = b;
              u[x] = Math.round(Math.max(E + E * v, 0) * 100) / 100;
            }), {
              ...y,
              deltaOffset: I,
              deltaPercentage: v
            };
          }), (t.options.columnResizeMode === "onChange" || _ === "end") && t.setColumnSizing((y) => ({
            ...y,
            ...u
          })));
        }, p = (_) => c("move", _), g = (_) => {
          c("end", _), t.setColumnSizingInfo((S) => ({
            ...S,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, d = n || typeof document < "u" ? document : null, m = {
          moveHandler: (_) => p(_.clientX),
          upHandler: (_) => {
            d == null || d.removeEventListener("mousemove", m.moveHandler), d == null || d.removeEventListener("mouseup", m.upHandler), g(_.clientX);
          }
        }, h = {
          moveHandler: (_) => (_.cancelable && (_.preventDefault(), _.stopPropagation()), p(_.touches[0].clientX), !1),
          upHandler: (_) => {
            var S;
            d == null || d.removeEventListener("touchmove", h.moveHandler), d == null || d.removeEventListener("touchend", h.upHandler), _.cancelable && (_.preventDefault(), _.stopPropagation()), g((S = _.touches[0]) == null ? void 0 : S.clientX);
          }
        }, w = Fh() ? {
          passive: !1
        } : !1;
        $r(i) ? (d == null || d.addEventListener("touchmove", h.moveHandler, w), d == null || d.addEventListener("touchend", h.upHandler, w)) : (d == null || d.addEventListener("mousemove", m.moveHandler, w), d == null || d.addEventListener("mouseup", m.upHandler, w)), t.setColumnSizingInfo((_) => ({
          ..._,
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
      e.setColumnSizingInfo(t ? Rr() : (n = e.initialState.columnSizingInfo) != null ? n : Rr());
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
let Fn = null;
function Fh() {
  if (typeof Fn == "boolean") return Fn;
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
  return Fn = e, Fn;
}
function $r(e) {
  return e.type === "touchstart";
}
const Ph = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ve("columnVisibility", e)
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
    e._getAllVisibleCells = X(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), Z(t.options, "debugRows")), e.getVisibleCells = X(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], Z(t.options, "debugRows"));
  },
  createTable: (e) => {
    const t = (n, r) => X(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), Z(e.options, "debugColumns"));
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
function an(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Ah = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Nh = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ve("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => et.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return cr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : et[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, kh = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ve("expanded", e),
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
}, no = 0, ro = 10, Tr = () => ({
  pageIndex: no,
  pageSize: ro
}), Dh = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Tr(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ve("pagination", e)
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
      const o = (i) => dt(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Tr() : (o = e.initialState.pagination) != null ? o : Tr());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = dt(r, o.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? no : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : no);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? ro : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : ro);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, dt(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
        return {
          ...o,
          pageIndex: s,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let l = dt(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...o,
        pageCount: l
      };
    }), e.getPageOptions = X(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, l) => l)), o;
    }, Z(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, Ir = () => ({
  top: [],
  bottom: []
}), Lh = {
  getInitialState: (e) => ({
    rowPinning: Ir(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ve("rowPinning", e)
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
          var p, g;
          return {
            top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((h) => !(s != null && s.has(h))),
            bottom: [...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)]
          };
        }
        if (n === "top") {
          var d, m;
          return {
            top: [...((d = a == null ? void 0 : a.top) != null ? d : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)],
            bottom: ((m = a == null ? void 0 : a.bottom) != null ? m : []).filter((h) => !(s != null && s.has(h)))
          };
        }
        return {
          top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter((h) => !(s != null && s.has(h))),
          bottom: ((c = a == null ? void 0 : a.bottom) != null ? c : []).filter((h) => !(s != null && s.has(h)))
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
      return e.setRowPinning(t ? Ir() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Ir());
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
    }, e.getTopRows = X(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), Z(e.options, "debugRows")), e.getBottomRows = X(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), Z(e.options, "debugRows")), e.getCenterRows = X(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, Z(e.options, "debugRows"));
  }
}, Vh = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ve("rowSelection", e),
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
        oo(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = X(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Or(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Z(e.options, "debugTable")), e.getFilteredSelectedRowModel = X(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Or(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Z(e.options, "debugTable")), e.getGroupedSelectedRowModel = X(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Or(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Z(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
        return oo(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return zo(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return io(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return io(e, n) === "all";
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
}, oo = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, !0);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => oo(e, s.id, n, r, o));
};
function Or(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var u;
      const c = zo(a, n);
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
function zo(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function io(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (zo(l, t) ? i = !0 : o = !1), l.subRows && l.subRows.length)) {
      const s = io(l, t);
      s === "all" ? i = !0 : (s === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const lo = /([0-9]+)/gm, Hh = (e, t, n) => xa(ht(e.getValue(n)).toLowerCase(), ht(t.getValue(n)).toLowerCase()), zh = (e, t, n) => xa(ht(e.getValue(n)), ht(t.getValue(n))), Bh = (e, t, n) => Bo(ht(e.getValue(n)).toLowerCase(), ht(t.getValue(n)).toLowerCase()), jh = (e, t, n) => Bo(ht(e.getValue(n)), ht(t.getValue(n))), Uh = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Wh = (e, t, n) => Bo(e.getValue(n), t.getValue(n));
function Bo(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function ht(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function xa(e, t) {
  const n = e.split(lo).filter(Boolean), r = t.split(lo).filter(Boolean);
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
const tn = {
  alphanumeric: Hh,
  alphanumericCaseSensitive: zh,
  text: Bh,
  textCaseSensitive: jh,
  datetime: Uh,
  basic: Wh
}, Gh = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ve("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return tn.datetime;
        if (typeof i == "string" && (r = !0, i.split(lo).length > 1))
          return tn.alphanumeric;
      }
      return r ? tn.text : tn.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return cr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : tn[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((l) => {
        const s = l == null ? void 0 : l.find((d) => d.id === e.id), a = l == null ? void 0 : l.findIndex((d) => d.id === e.id);
        let u = [], c, p = i ? n : o === "desc";
        if (l != null && l.length && e.getCanMultiSort() && r ? s ? c = "toggle" : c = "add" : l != null && l.length && a !== l.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (i || o || (c = "remove")), c === "add") {
          var g;
          u = [...l, {
            id: e.id,
            desc: p
          }], u.splice(0, u.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = l.map((d) => d.id === e.id ? {
          ...d,
          desc: p
        } : d) : c === "remove" ? u = l.filter((d) => d.id !== e.id) : u = [{
          id: e.id,
          desc: p
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
}, qh = [
  mh,
  Ph,
  Ih,
  Oh,
  hh,
  vh,
  Ah,
  //depends on ColumnFaceting
  Nh,
  //depends on ColumnFiltering
  Gh,
  $h,
  //depends on RowSorting
  kh,
  Dh,
  Lh,
  Vh,
  Mh
];
function Kh(e) {
  var t, n;
  const r = [...qh, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((g, d) => Object.assign(g, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(o)), {}), l = (g) => o.options.mergeOptions ? o.options.mergeOptions(i, g) : {
    ...i,
    ...g
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((g) => {
    var d;
    a = (d = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? d : a;
  });
  const u = [];
  let c = !1;
  const p = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: a,
    _queue: (g) => {
      u.push(g), c || (c = !0, Promise.resolve().then(() => {
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
    setOptions: (g) => {
      const d = dt(g, o.options);
      o.options = l(d);
    },
    getState: () => o.options.state,
    setState: (g) => {
      o.options.onStateChange == null || o.options.onStateChange(g);
    },
    _getRowId: (g, d, m) => {
      var h;
      return (h = o.options.getRowId == null ? void 0 : o.options.getRowId(g, d, m)) != null ? h : `${m ? [m.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (g, d) => {
      let m = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
      if (!m && (m = o.getCoreRowModel().rowsById[g], !m))
        throw new Error();
      return m;
    },
    _getDefaultColumnDef: X(() => [o.options.defaultColumn], (g) => {
      var d;
      return g = (d = g) != null ? d : {}, {
        header: (m) => {
          const h = m.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var h, w;
          return (h = (w = m.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? h : null;
        },
        ...o._features.reduce((m, h) => Object.assign(m, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...g
      };
    }, Z(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: X(() => [o._getColumnDefs()], (g) => {
      const d = function(m, h, w) {
        return w === void 0 && (w = 0), m.map((_) => {
          const S = ph(o, _, w, h), y = _;
          return S.columns = y.columns ? d(y.columns, S, w + 1) : [], S;
        });
      };
      return d(g);
    }, Z(e, "debugColumns")),
    getAllFlatColumns: X(() => [o.getAllColumns()], (g) => g.flatMap((d) => d.getFlatColumns()), Z(e, "debugColumns")),
    _getAllFlatColumnsById: X(() => [o.getAllFlatColumns()], (g) => g.reduce((d, m) => (d[m.id] = m, d), {}), Z(e, "debugColumns")),
    getAllLeafColumns: X(() => [o.getAllColumns(), o._getOrderColumnsFn()], (g, d) => {
      let m = g.flatMap((h) => h.getLeafColumns());
      return d(m);
    }, Z(e, "debugColumns")),
    getColumn: (g) => o._getAllFlatColumnsById()[g]
  };
  Object.assign(o, p);
  for (let g = 0; g < o._features.length; g++) {
    const d = o._features[g];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function Yh() {
  return (e) => X(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let u = 0; u < o.length; u++) {
        const c = gh(e, e._getRowId(o[u], u, l), o[u], u, i, void 0, l == null ? void 0 : l.id);
        if (n.flatRows.push(c), n.rowsById[c.id] = c, s.push(c), e.options.getSubRows) {
          var a;
          c.originalSubRows = e.options.getSubRows(o[u], u), (a = c.originalSubRows) != null && a.length && (c.subRows = r(c.originalSubRows, i + 1, c));
        }
      }
      return s;
    };
    return n.rows = r(t), n;
  }, Z(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Xh() {
  return (e) => X(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
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
      return u.sort((c, p) => {
        for (let d = 0; d < i.length; d += 1) {
          var g;
          const m = i[d], h = l[m.id], w = h.sortUndefined, _ = (g = m == null ? void 0 : m.desc) != null ? g : !1;
          let S = 0;
          if (w) {
            const y = c.getValue(m.id), C = p.getValue(m.id), T = y === void 0, M = C === void 0;
            if (T || M) {
              if (w === "first") return T ? -1 : 1;
              if (w === "last") return T ? 1 : -1;
              S = T && M ? 0 : T ? w : -w;
            }
          }
          if (S === 0 && (S = h.sortingFn(c, p, m.id)), S !== 0)
            return _ && (S *= -1), h.invertSorting && (S *= -1), S;
        }
        return c.index - p.index;
      }), u.forEach((c) => {
        var p;
        o.push(c), (p = c.subRows) != null && p.length && (c.subRows = s(c.subRows));
      }), u;
    };
    return {
      rows: s(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, Z(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function qi(e, t) {
  return e ? Zh(e) ? /* @__PURE__ */ A(e, t) : e : null;
}
function Zh(e) {
  return Jh(e) || typeof e == "function" || Qh(e);
}
function Jh(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Qh(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function ev(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = H(() => ({
    current: Kh(t)
  })), [r, o] = H(() => n.current.initialState);
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
const tv = 500, Ki = 10;
function nv(e, { disabled: t = !1 } = {}) {
  const n = k(null), r = k(0), o = k(0), i = k(!1), l = oe(
    (u) => {
      if (t) return;
      const c = u.touches[0];
      r.current = c.clientX, o.current = c.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, tv);
    },
    [e, t]
  ), s = oe(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = oe(
    (u) => {
      const c = u.touches[0], p = Math.abs(c.clientX - r.current), g = Math.abs(c.clientY - o.current);
      (p > Ki || g > Ki) && (i.current = !0, s());
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
function rv({
  rowId: e,
  columnDefinition: t,
  value: n,
  onUpdated: r,
  allData: o,
  clearRowsSelection: i,
  errorsText: l,
  enumLabelDict: s
}) {
  const { t: a } = be(), { availableActions: u } = ze(), [c, p] = H(!1), g = k(null);
  re(() => {
    c && (i(), g.current && g.current.focus());
  }, [c]);
  const { displayValue: d, valueEmpty: m } = wg(
    t,
    n,
    s
  ), h = na(t) || !u.includes("editRows"), w = nv(
    () => {
      h || p(!0);
    },
    { disabled: h }
  ), _ = l ? "bg-hello-csv-destructive/10" : h ? "bg-hello-csv-muted" : "";
  if (!c)
    return /* @__PURE__ */ f(
      Nm,
      {
        variant: l ? "error" : "info",
        tooltipText: l || (h ? a("sheet.readOnly") : ""),
        children: /* @__PURE__ */ f(
          "div",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": `row ${Number(e) + 1} ${t.label} ${d}`,
            ...w,
            onClick: (y) => !h && y.detail > 1 && p(!0),
            className: `h-full w-full py-4 pr-3 pl-4 ${_} touch-manipulation truncate overflow-hidden whitespace-nowrap`,
            title: m ? void 0 : `${d}`,
            children: t.customRender ? t.customRender(n, d) : d
          }
        )
      }
    );
  function S(y) {
    p(!1), t.type === "number" && y !== "" && !isNaN(Number(y)) ? r(Number(y)) : r(y ?? "");
  }
  if (t.type === "boolean") {
    const y = [!0, !1].map((C) => {
      var T, M;
      return {
        label: C ? ((T = t.typeArguments) == null ? void 0 : T.trueLabel) ?? Us : ((M = t.typeArguments) == null ? void 0 : M.falseLabel) ?? Ws,
        value: C
      };
    });
    return /* @__PURE__ */ f(
      Ht,
      {
        options: y,
        value: n,
        onChange: (C) => S(C ?? "")
      }
    );
  }
  if (t.type === "reference") {
    const y = ea(
      t,
      o
    ), C = ko(t, s), T = y.map((M) => ({
      label: String(Wn(C, M)),
      value: M
    }));
    return /* @__PURE__ */ f(
      Ht,
      {
        searchable: !0,
        options: T,
        value: n,
        onChange: (M) => S(M ?? "")
      }
    );
  }
  if (t.type === "enum") {
    const C = t.typeArguments.values;
    return /* @__PURE__ */ f(
      Ht,
      {
        searchable: !0,
        options: C,
        value: n,
        onChange: (T) => S(T ?? "")
      }
    );
  }
  return /* @__PURE__ */ f(
    qs,
    {
      "aria-label": `edit row ${Number(e) + 1}'s ${t.label}`,
      type: t.type === "number" ? "number" : "text",
      classes: "block w-full",
      value: n,
      onBlur: S,
      ref: g
    }
  );
}
function ov({
  table: e,
  sheetDefinition: t,
  allData: n,
  sheetValidationErrors: r,
  onCellValueChanged: o,
  setSelectedRows: i,
  tableContainerRef: l,
  enumLabelDict: s
}) {
  const { t: a } = be(), { availableActions: u } = ze();
  function c(y, C) {
    return r.filter(
      (T) => T.columnId === y && T.rowIndex === C
    );
  }
  const p = "bg-hello-csv-muted h-10 px-2 text-left align-middle text-sm font-medium whitespace-nowrap text-hello-csv-muted-foreground border-b border-hello-csv-border", g = "text-sm whitespace-nowrap text-hello-csv-foreground border-b border-hello-csv-border p-2 align-middle", d = e.getRowModel().rows, m = Bl({
    count: d.length,
    getScrollElement: () => l.current,
    estimateSize: () => vm,
    measureElement: (y) => y == null ? void 0 : y.getBoundingClientRect().height,
    overscan: 20
  }), h = m.getVirtualItems().map((y) => ({
    row: d[y.index],
    index: y.index,
    start: y.start,
    end: y.end
  })), [w, _] = h.length > 0 ? [
    Math.max(
      0,
      h[0].start - m.options.scrollMargin
    ),
    Math.max(
      0,
      m.getTotalSize() - h[h.length - 1].end
    )
  ] : [0, 0], S = oe(
    (y) => {
      y && m.measureElement(y);
    },
    [m]
  );
  return /* @__PURE__ */ f(
    "table",
    {
      className: "w-full table-fixed border-separate border-spacing-0",
      "aria-label": a("sheet.sheetTitle"),
      children: [
        /* @__PURE__ */ f("thead", { className: "bg-hello-csv-muted sticky top-0 z-10 [&_tr]:border-b", children: e.getHeaderGroups().map((y) => /* @__PURE__ */ f("tr", { children: y.headers.map((C) => /* @__PURE__ */ f(
          "th",
          {
            className: C.column.id === Jr ? `${p} sticky left-0 z-20` : `relative z-10 ${p}`,
            colSpan: C.colSpan,
            style: { width: C.getSize() },
            children: /* @__PURE__ */ f(
              "div",
              {
                className: `flex w-full ${C.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
                onClick: C.column.getToggleSortingHandler(),
                children: [
                  C.isPlaceholder ? null : /* @__PURE__ */ f("div", { children: qi(
                    C.column.columnDef.header,
                    C.getContext()
                  ) }, `header-${y.id}-${C.id}`),
                  /* @__PURE__ */ f(
                    "span",
                    {
                      className: "ml-2 flex-none rounded-sm bg-hello-csv-muted-foreground text-hello-csv-muted",
                      children: {
                        asc: /* @__PURE__ */ f(Om, { "aria-hidden": "true", className: "size-5" }),
                        desc: /* @__PURE__ */ f(
                          Rm,
                          {
                            "aria-hidden": "true",
                            className: "size-5"
                          }
                        )
                      }[C.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${y.id}-${C.id}`
                  ),
                  C.column.getCanResize() && /* @__PURE__ */ f(
                    "div",
                    {
                      onMouseDown: C.getResizeHandler(),
                      onTouchStart: C.getResizeHandler(),
                      className: "absolute top-0 right-0 h-full w-0.5 cursor-col-resize touch-none bg-hello-csv-border select-none"
                    },
                    `resize-icon-${y.id}-${C.id}`
                  )
                ]
              }
            )
          },
          C.id
        )) }, y.id)) }),
        /* @__PURE__ */ f(
          "tbody",
          {
            className: "divide-y divide-hello-csv-border",
            style: {
              height: `${m.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { style: { height: w } }) }),
              h.map(({ row: y, index: C }) => /* @__PURE__ */ f("tr", { "data-index": C, ref: S, children: y.getVisibleCells().map((T, M) => {
                if (T.column.id === Jr)
                  return /* @__PURE__ */ f(
                    "td",
                    {
                      "aria-label": `Select row ${Number(y.id) + 1}`,
                      className: `bg-hello-csv-muted ${g} sticky left-0 z-6 pr-3 pl-4`,
                      style: { width: T.column.getSize() },
                      children: qi(T.column.columnDef.cell, T.getContext())
                    },
                    T.id
                  );
                const I = u.includes("removeRows"), v = t.columns[M - (I ? 1 : 0)].id, b = ta(
                  n,
                  t.id,
                  y.original
                ), x = c(v, b).map((E) => a(E.message)).join(", ");
                return /* @__PURE__ */ f(
                  "td",
                  {
                    className: g,
                    style: { width: T.column.getSize() },
                    children: /* @__PURE__ */ f(
                      rv,
                      {
                        rowId: y.id,
                        columnDefinition: t.columns.find((E) => E.id === v),
                        allData: n,
                        value: T.getValue(),
                        onUpdated: (E) => o(b, v, E),
                        clearRowsSelection: () => i([]),
                        errorsText: x,
                        enumLabelDict: s
                      }
                    )
                  },
                  T.id
                );
              }) }, y.id)),
              /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { style: { height: _ } }) })
            ]
          }
        )
      ]
    }
  );
}
function iv({ column: e }) {
  const { t } = be(), n = na(e);
  return /* @__PURE__ */ f(
    "div",
    {
      className: "flex items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ f("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ f(Hs, { className: "absolute top-0 left-0 h-5 w-5 text-hello-csv-muted-foreground/60" }),
          /* @__PURE__ */ f(Ip, { className: "absolute top-0 left-0 h-5 w-5 text-hello-csv-muted-foreground" })
        ] }),
        e.label,
        " ",
        Sn(e) && "*"
      ]
    }
  );
}
function lv({
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
  addEmptyRow: p,
  sheetValidationErrors: g,
  rowValidationSummary: d,
  resetState: m,
  enumLabelDict: h
}) {
  const { csvDownloadMode: w, availableActions: _ } = ze(), { t: S } = be(), { validationInProgress: y } = lt(), [C, T] = H(!1), [M, I] = H(!1), v = "pointer-events-none cursor-not-allowed opacity-50";
  function b(F) {
    const P = e.columns.find(
      (G) => G.id === F
    ), j = Bi(
      g.filter((G) => G.columnId === F).map((G) => G.rowIndex)
    ).length;
    return {
      label: `${(P == null ? void 0 : P.label) || F} (${j})`,
      value: F
    };
  }
  const x = Bi(
    g.map((F) => F.columnId)
  ).map((F) => b(F));
  a != null && x.find((F) => F.value === a) == null && x.push(b(a));
  const E = [
    {
      value: "all",
      label: S("sheet.all") + ` (${d.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: S("sheet.valid") + ` (${d.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: S("sheet.invalid") + ` (${d.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function R() {
    c({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ f("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ f("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(Dm, { activeButton: o, buttons: E }) }),
      _.includes("search") && /* @__PURE__ */ f(
        qs,
        {
          clearable: !0,
          value: l,
          onChange: (F) => s(F),
          placeholder: S("sheet.search"),
          iconBuilder: (F) => /* @__PURE__ */ f($p, { ...F })
        }
      ),
      _.includes("removeRows") && /* @__PURE__ */ f(
        Dt,
        {
          tooltipText: S(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ f(
            Pp,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": S(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : v}`,
              onClick: () => T(!0)
            }
          )
        }
      ),
      _.includes("addRows") && /* @__PURE__ */ f(Dt, { tooltipText: S("sheet.addRowsTooltip"), children: /* @__PURE__ */ f(
        Mp,
        {
          className: "h-6 w-6 cursor-pointer",
          onClick: p
        }
      ) }),
      _.includes("downloadCsv") && /* @__PURE__ */ f(Dt, { tooltipText: S("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ f(
        pp,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : v}`,
          onClick: () => Zs(
            e,
            t,
            h,
            w
          )
        }
      ) }),
      /* @__PURE__ */ f(
        Ht,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: S("sheet.filterByError"),
          classes: "min-w-48",
          options: x,
          value: a,
          onChange: (F) => u(F)
        }
      ),
      _.includes("removeRows") && /* @__PURE__ */ f(
        Xr,
        {
          open: C,
          setOpen: T,
          onConfirm: R,
          title: S("sheet.removeConfirmationModalTitle"),
          confirmationText: S(
            "sheet.removeConfirmationModalConfirmationText"
          ),
          subTitle: S("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ f("div", { className: "ml-5 flex items-center", children: [
      y && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(Qs, { color: "dark" }),
        /* @__PURE__ */ f("div", { className: "mr-2" })
      ] }),
      _.includes("resetState") && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(Dt, { tooltipText: S("sheet.resetTooltip"), children: /* @__PURE__ */ f(
          Hs,
          {
            className: "h-6 w-6 cursor-pointer",
            onClick: () => I(!0)
          }
        ) }),
        /* @__PURE__ */ f(
          Xr,
          {
            open: M,
            setOpen: I,
            onConfirm: m,
            title: S("sheet.resetConfirmationModalTitle"),
            confirmationText: S(
              "sheet.resetConfirmationModalConfirmationText"
            ),
            subTitle: S("sheet.resetConfirmationModalSubTitle"),
            variant: "danger"
          }
        )
      ] })
    ] })
  ] });
}
function sv({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ f(wl, { checked: r, setChecked: o });
}
function av({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((l) => l !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ f(
    wl,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
function uv({
  sheetDefinition: e,
  data: t,
  sheetValidationErrors: n,
  setRowData: r,
  removeRows: o,
  addEmptyRow: i,
  resetState: l,
  enumLabelDict: s
}) {
  const { sheetData: a } = lt(), { availableActions: u } = ze(), [c, p] = H([]), [g, d] = H("all"), [m, h] = H(""), [w, _] = H(
    null
  );
  re(() => {
    p([]), d("all");
  }, [e]);
  const S = hg(
    t,
    a,
    g,
    n,
    w,
    e,
    m
  ), y = W(() => {
    const v = t.rows, b = v.filter(
      (E, R) => !n.some((F) => F.rowIndex === R)
    ), x = v.filter(
      (E, R) => n.some((F) => F.rowIndex === R)
    );
    return {
      all: v.length,
      valid: b.length,
      errors: x.length
    };
  }, [t, n]), C = W(() => [
    ...u.includes(
      "removeRows"
    ) ? [
      {
        id: Jr,
        header: () => /* @__PURE__ */ f(
          sv,
          {
            visibleData: S,
            selectedRows: c,
            setSelectedRows: p
          }
        ),
        cell: ({ row: b }) => /* @__PURE__ */ f(
          av,
          {
            row: b,
            selectedRows: c,
            setSelectedRows: p
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: wm
      }
    ] : [],
    ...e.columns.map(
      (b) => ({
        id: b.id,
        accessorFn: (x) => x[b.id],
        header: () => /* @__PURE__ */ f(iv, { column: b }),
        sortUndefined: "last",
        sortingFn: "auto",
        meta: { columnLabel: b.label },
        enableResizing: !0
      })
    )
  ], [e, c, S, u]), T = ev({
    data: S,
    columns: C,
    getCoreRowModel: Yh(),
    getSortedRowModel: Xh(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: bm,
      maxSize: ym,
      size: xm
    }
  });
  function M(v, b, x) {
    const E = { ...t.rows[v] };
    E[b] = x, r({
      sheetId: e.id,
      value: E,
      rowIndex: v
    });
  }
  const I = k(null);
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f("div", { className: "flex-none", children: /* @__PURE__ */ f(
      lv,
      {
        sheetDefinition: e,
        rowData: S,
        selectedRows: c,
        setSelectedRows: p,
        viewMode: g,
        setViewMode: d,
        searchPhrase: m,
        setSearchPhrase: h,
        errorColumnFilter: w,
        setErrorColumnFilter: _,
        removeRows: o,
        addEmptyRow: i,
        sheetValidationErrors: n,
        rowValidationSummary: y,
        resetState: l,
        enumLabelDict: s
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "min-h-0 flex-1 overflow-auto", ref: I, children: /* @__PURE__ */ f(
      ov,
      {
        tableContainerRef: I,
        table: T,
        sheetDefinition: e,
        allData: a,
        sheetValidationErrors: n,
        onCellValueChanged: M,
        setSelectedRows: p,
        enumLabelDict: s
      }
    ) })
  ] });
}
function _a(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function cv(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (l) => l.id === o.sheetId
    );
    i && Zs(
      i,
      o.rows,
      n,
      r
    );
  });
}
const Yi = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const l = t.find(
    (s) => s.id === i.sheetId
  );
  return l ? o + No(
    l,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function dv({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: l
  } = lt(), s = Do(l, o), { csvDownloadMode: a } = ze(), { t: u } = be(), c = _a(s);
  return /* @__PURE__ */ f("div", { className: "flex flex-row px-4 pt-3 pb-2", children: /* @__PURE__ */ f("div", { className: "flex-1 space-y-4", children: [
    /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ f("div", { className: "my-2 mr-5 text-center", children: /* @__PURE__ */ f(xp, { className: "text-hello-csv-primary h-8 w-8" }) }),
      /* @__PURE__ */ f("div", { className: "flex-1", children: [
        /* @__PURE__ */ f("div", { className: "my-2 text-sm font-light uppercase", children: u("importStatus.fileInformation") }),
        /* @__PURE__ */ f("div", { className: "text-md my-2 font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ f("div", { className: "my-2 text-sm text-hello-csv-muted-foreground", children: n ? `${u("importStatus.original")}: ${Nn((n == null ? void 0 : n.size) || 0)} · ${u("importStatus.processed")}: ${Nn(Yi(s, l, t, a))}` : `${u("importStatus.processed")}: ${Nn(Yi(s, l, t, a))}` }),
        /* @__PURE__ */ f("div", { className: "mt-5", children: /* @__PURE__ */ f(
          He,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => cv(
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
    /* @__PURE__ */ f("div", { className: "border-b border-hello-csv-border pb-2" }),
    /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ f("div", { className: "my-2 mr-5 text-center", children: r === "failed" ? /* @__PURE__ */ f(eo, { className: "text-hello-csv-destructive h-8 w-8" }) : e ? /* @__PURE__ */ f(Jm, { className: "text-hello-csv-warning h-8 w-8" }) : /* @__PURE__ */ f(Js, { className: "text-hello-csv-success h-8 w-8" }) }),
      /* @__PURE__ */ f("div", { className: "flex-1", children: [
        /* @__PURE__ */ f("div", { className: "my-2 text-sm font-light uppercase", children: u("importStatus.importResults") }),
        /* @__PURE__ */ f("div", { className: "text-md my-2 font-medium", children: u("importStatus.totalRows", { totalRows: c }) }),
        i && /* @__PURE__ */ f("div", { className: "my-2 text-sm text-hello-csv-muted-foreground", children: [
          i.skipped >= 0 && /* @__PURE__ */ f("span", { children: [
            u("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ f("span", { children: [
            u("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ f("span", { children: u("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ f("div", { className: "my-2 text-sm text-hello-csv-muted-foreground", children: [
          u("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ f(Lo, { variant: "error", children: u("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function Sa({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = be();
  return /* @__PURE__ */ f(vl, { withPadding: !1, className: "h-full", children: /* @__PURE__ */ f("div", { className: "flex flex-col py-5", children: [
    /* @__PURE__ */ f("div", { className: "px-4 pb-2 text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ f("div", { className: "px-4 pb-2 text-sm text-hello-csv-muted-foreground", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ f("div", { className: "border-b border-hello-csv-border pb-2" }),
    /* @__PURE__ */ f(
      dv,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function fv({ resetState: e, enumLabelDict: t }) {
  const {
    sheetDefinitions: n,
    sheetData: r,
    importStatistics: o
  } = lt(), { onSummaryFinished: i } = ze(), { t: l } = be(), s = Do(n, r), a = _a(s), u = (o == null ? void 0 : o.imported) ?? 0, c = !!(o != null && o.failed) || !!(o != null && o.skipped);
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f("div", { className: "flex-none text-2xl", children: l("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "grow overflow-auto", children: [
      /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
        Vo,
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
      /* @__PURE__ */ f("div", { className: "mt-6", children: /* @__PURE__ */ f(
        Sa,
        {
          completedWithErrors: c,
          enumLabelDict: t
        }
      ) })
    ] }),
    /* @__PURE__ */ f("div", { className: "flex-none", children: /* @__PURE__ */ f("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ f(He, { variant: "primary", onClick: i || e, children: l("importStatus.continue") }) }) })
  ] });
}
function pv({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = be();
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f("div", { className: "text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "grow overflow-auto", children: [
      /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
        Vo,
        {
          variant: "error",
          header: r("importStatus.importFailed"),
          description: r("importStatus.failedDescription")
        }
      ) }),
      /* @__PURE__ */ f("div", { className: "mt-6", children: /* @__PURE__ */ f(Sa, { completedWithErrors: !1, enumLabelDict: n }) })
    ] }),
    /* @__PURE__ */ f("div", { className: "mt-6 flex justify-between", children: [
      /* @__PURE__ */ f(He, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ f(He, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] });
}
function mv({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, l] = H(!1);
  return re(() => {
    if (e === 0) {
      const s = setTimeout(() => {
        l(!0);
      }, 3e3);
      return () => clearTimeout(s);
    }
  }, [e]), i ? /* @__PURE__ */ f("div", { className: "flex justify-center", children: /* @__PURE__ */ f(
    "div",
    {
      className: `border-hello-csv-success h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ f("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ f(
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
    /* @__PURE__ */ f(
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
function gv() {
  return /* @__PURE__ */ f(vp, { className: "text-hello-csv-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function hv({ resetState: e }) {
  const { importProgress: t, mode: n } = lt(), r = n === "submit", { t: o } = be();
  return /* @__PURE__ */ f("div", { className: "flex h-full p-10", children: /* @__PURE__ */ f("div", { className: "flex h-full w-full flex-col", children: /* @__PURE__ */ f("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ f("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ f(mv, { progress: t, pending: r }),
      r && /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f("b", { className: "text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ f("h2", { className: "text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ f(gv, {})
    ] }),
    !r && /* @__PURE__ */ f("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ f("h2", { className: "text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ f("div", { className: "h-5" }),
      /* @__PURE__ */ f(He, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function vv({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = lt();
  return /* @__PURE__ */ f("div", { className: "h-full overflow-auto", children: [
    o === "submit" && /* @__PURE__ */ f(hv, { resetState: n }),
    o === "failed" && /* @__PURE__ */ f(
      pv,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ f(fv, { resetState: n, enumLabelDict: r })
  ] });
}
async function Xi(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
const wv = [
  "addRows",
  "removeRows",
  "editRows",
  "downloadCsv",
  "search",
  "resetState",
  "backToPreviousStep"
], bv = ({ children: e }) => {
  const { theme: t } = ze();
  return re(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ f(pe, { children: e });
};
function yv({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ A("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ A("title", {
    id: t
  }, e) : null, /* @__PURE__ */ A("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const xv = /* @__PURE__ */ ce(yv);
function _v({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = lt(), { sheets: i } = ze();
  return /* @__PURE__ */ f(
    Fm,
    {
      tabs: i.map((l) => ({
        label: l.label + ` (${t[l.id]})`,
        value: l.id,
        icon: o.some((s) => s.sheetId === l.id) ? /* @__PURE__ */ f(xv, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function Sv({ onBackToMapping: e }) {
  const { t } = be(), [n, r] = H(!1);
  return /* @__PURE__ */ f(pe, { children: [
    /* @__PURE__ */ f(
      He,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ f(
      Xr,
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
function Cv({ importerRequirements: e }) {
  const { t } = be();
  return /* @__PURE__ */ f("div", { className: "h-full w-full space-y-5 overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ f("div", { className: "me-3", children: [
      /* @__PURE__ */ f("div", { className: "my-3 border-b border-hello-csv-border pb-4 text-sm font-light uppercase text-hello-csv-muted-foreground", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ f("div", { className: "mt-4", children: r.map((i) => /* @__PURE__ */ f(
        "div",
        {
          className: "my-3 flex justify-between",
          children: [
            /* @__PURE__ */ f("div", { className: "text-xs text-hello-csv-foreground", children: i.columnLabel }),
            /* @__PURE__ */ f("div", { className: "text-xs font-light", children: /* @__PURE__ */ f(
              Dt,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ f(Ep, { className: "size-5 text-hello-csv-muted-foreground" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function Ev({ importerRequirements: e }) {
  const { t } = be();
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col space-y-5", children: [
    /* @__PURE__ */ f("div", { className: "me-3", children: /* @__PURE__ */ f(Vo, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ f("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ f(Cv, { importerRequirements: e }) })
  ] });
}
function Rv({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = ze(), { t: i, tHtml: l } = be(), s = k(null), [a, u] = H(!1), c = mm.concat(
    (r == null ? void 0 : r.map((m) => m.mimeType)) ?? []
  ), p = (m, h) => {
    c.includes(m.type) && m.size <= h && e(m);
  }, g = (m) => {
    var w;
    const h = m.target;
    (w = h.files) != null && w.length && p(h.files[0], n);
  }, d = (m) => {
    var h;
    m.preventDefault(), u(!1), (h = m.dataTransfer) != null && h.files.length && p(m.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ f(vl, { variant: "muted", withPadding: !1, className: "h-full", children: /* @__PURE__ */ f(
    "div",
    {
      className: `flex h-full flex-col p-5 transition-colors ${a ? "bg-hello-csv-accent" : "bg-hello-csv-muted"}`,
      onClick: () => {
        var m;
        return (m = s.current) == null ? void 0 : m.click();
      },
      onDragOver: (m) => {
        m.preventDefault(), u(!0);
      },
      onDragEnter: () => u(!0),
      onDragLeave: () => u(!1),
      onDrop: (m) => d(m),
      children: [
        /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
          /* @__PURE__ */ f(bp, { className: "text-hello-csv-primary h-12 w-12" }),
          /* @__PURE__ */ f("p", { className: "mt-3 text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ f("div", { className: "mt-3 text-sm text-hello-csv-muted-foreground", children: [
            l("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ f("b", { children: Nn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((m) => m.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ f("div", { className: "mt-3", children: /* @__PURE__ */ f(He, { children: i("uploader.browseFiles") }) }),
          o && /* @__PURE__ */ f("div", { className: "mt-3 text-sm", children: /* @__PURE__ */ f(
            "p",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": i("uploader.enterManually"),
              onClick: (m) => {
                m.stopPropagation(), t == null || t();
              },
              className: "text-hello-csv-primary hover:text-hello-csv-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none",
              children: i("uploader.enterManually")
            }
          ) })
        ] }),
        /* @__PURE__ */ f(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: s,
            type: "file",
            accept: c.join(","),
            className: "sr-only",
            onChange: (m) => g(m)
          }
        )
      ]
    }
  ) });
}
function $v({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = ze(), r = Gg(n), { t: o } = be();
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col space-y-4", children: [
    /* @__PURE__ */ f("div", { className: "flex-none text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ f("div", { className: "flex-auto md:min-h-0", children: /* @__PURE__ */ f("div", { className: "flex h-full flex-col-reverse gap-5 md:flex-row", children: [
      /* @__PURE__ */ f("div", { className: "h-full flex-1 lg:flex-1", children: /* @__PURE__ */ f(Ev, { importerRequirements: r }) }),
      /* @__PURE__ */ f("div", { className: "flex-1 lg:flex-2", children: /* @__PURE__ */ f(
        Rv,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
function Tv(e) {
  const {
    onComplete: t,
    sheets: n,
    preventUploadOnValidationErrors: r,
    availableActions: o
  } = e, { t: i } = be(), l = k(!0), s = k(null), a = lt(), u = sh(), c = Me(), { mode: p, currentSheetId: g, sheetData: d, columnMappings: m, validationErrors: h } = a;
  re(() => {
    var O;
    if (l.current) {
      l.current = !1;
      return;
    }
    (O = s.current) == null || O.scrollIntoView({ behavior: "smooth" });
  }, [p]);
  const w = d.find(
    (O) => O.sheetId === g
  ), _ = W(() => Object.fromEntries(
    d.map((O) => [O.sheetId, O.rows.length])
  ), [d]), S = n.find(
    (O) => O.id === g
  ), y = vg(n), T = (typeof r == "function" ? (r == null ? void 0 : r(h)) ?? !1 : r ?? !1) && h.length > 0, M = new to(e, a);
  async function I(O) {
    await M.uploadFile(O), M.dispatchChange(u);
  }
  function v() {
    M.setEnterDataManually(), M.dispatchChange(u);
  }
  function b(O) {
    M.setMappings(O), M.dispatchChange(u);
  }
  async function x() {
    await M.confirmMappings(), M.dispatchChange(u);
  }
  function E(O) {
    M.changeCell(O), M.dispatchChange(u);
  }
  function R(O) {
    M.removeRows(O), M.dispatchChange(u);
  }
  function F() {
    u({ type: "ADD_EMPTY_ROW" });
  }
  function P() {
    u({ type: "RESET" });
  }
  async function j() {
    u({ type: "PROGRESS", payload: { progress: 0 } }), u({ type: "SUBMIT" });
    try {
      const O = Do(n, d), K = await t(
        { ...a, sheetData: O },
        (N) => {
          u({ type: "PROGRESS", payload: { progress: N } });
        },
        a.sheetDefinitions.map((N) => {
          var B;
          return {
            file: No(
              N,
              ((B = O.find(($) => $.sheetId === N.id)) == null ? void 0 : B.rows) ?? [],
              {},
              "value"
            ),
            sheetId: N.id
          };
        })
      );
      await Xi(400), u({ type: "PROGRESS", payload: { progress: 100 } }), await Xi(200), u({
        type: "COMPLETED",
        payload: { importStatistics: K ?? void 0 }
      });
    } catch {
      u({ type: "FAILED" });
    }
  }
  function G() {
    u({ type: "PREVIEW" });
  }
  function z() {
    u({ type: "UPLOAD" });
  }
  function V() {
    u({ type: "MAPPING" });
  }
  return /* @__PURE__ */ f(bv, { children: /* @__PURE__ */ f(_m, { ref: s, children: [
    p === "upload" && /* @__PURE__ */ f(
      $v,
      {
        onFileUploaded: I,
        onEnterDataManually: v
      }
    ),
    p === "mapping" && /* @__PURE__ */ f(
      ah,
      {
        onMappingsChanged: b,
        onMappingsSet: x,
        onBack: z
      }
    ),
    p === "preview" && // TODO: Move these to separate component in future PR
    /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ f("div", { className: "flex-none", children: /* @__PURE__ */ f(
        _v,
        {
          idPrefix: c,
          sheetCountDict: _,
          onSheetChange: (O) => u({ type: "SHEET_CHANGED", payload: { sheetId: O } })
        }
      ) }),
      /* @__PURE__ */ f(
        "div",
        {
          className: "flex-1 overflow-auto",
          role: "tabpanel",
          id: `${c}-tabpanel-${g}`,
          "aria-labelledby": `${c}-tab-${g}`,
          tabIndex: 0,
          children: /* @__PURE__ */ f(
            uv,
            {
              data: w,
              sheetDefinition: S,
              sheetValidationErrors: h.filter(
                (O) => O.sheetId === (S == null ? void 0 : S.id)
              ),
              setRowData: E,
              removeRows: R,
              addEmptyRow: F,
              resetState: P,
              enumLabelDict: y
            }
          )
        }
      ),
      /* @__PURE__ */ f("div", { className: "flex-none", children: w.rows.length > 0 && /* @__PURE__ */ f("div", { className: "mt-5 flex justify-between", children: [
        /* @__PURE__ */ f("div", { children: m != null && o.includes("backToPreviousStep") && /* @__PURE__ */ f(
          Sv,
          {
            onBackToMapping: V
          }
        ) }),
        /* @__PURE__ */ f(
          Dt,
          {
            tooltipText: i("importer.uploadBlocked"),
            hidden: !T,
            children: /* @__PURE__ */ f(He, { onClick: j, disabled: T, children: i("importer.upload") })
          }
        )
      ] }) })
    ] }),
    (p === "submit" || p === "failed" || p === "completed") && /* @__PURE__ */ f(
      vv,
      {
        onRetry: j,
        onBackToPreview: G,
        resetState: P,
        enumLabelDict: y
      }
    )
  ] }) });
}
function Iv(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1,
    availableActions: e.availableActions ?? [...wv]
  };
  return /* @__PURE__ */ f(sm, { importerDefintion: t, children: /* @__PURE__ */ f(
    lh,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      initialState: t.initialState,
      onStateChanged: t.onStateChanged,
      children: /* @__PURE__ */ f(fm, { children: /* @__PURE__ */ f(Tv, { ...t }) })
    }
  ) });
}
function Nv(e, t) {
  Wa(e).render(A(Iv, t));
}
export {
  Av as CsvImporterStateBuilder,
  wv as availableActionList,
  Iv as default,
  Nv as renderImporter
};
