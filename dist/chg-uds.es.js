import re from "react";
var P = { exports: {} }, g = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function te() {
  if (z) return g;
  z = 1;
  var c = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function d(_, a, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), a.key !== void 0 && (u = "" + a.key), "key" in a) {
      o = {};
      for (var t in a)
        t !== "key" && (o[t] = a[t]);
    } else o = a;
    return a = o.ref, {
      $$typeof: c,
      type: _,
      key: u,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return g.Fragment = f, g.jsx = d, g.jsxs = d, g;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function ne() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case S:
          return "Profiler";
        case y:
          return "StrictMode";
        case A:
          return "Suspense";
        case I:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case b:
            return "Portal";
          case C:
            return (e.displayName || "Context") + ".Provider";
          case O:
            return (e._context.displayName || "Context") + ".Consumer";
          case F:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case j:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case M:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function d(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), f(e);
      }
    }
    function _(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = $.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function t(e, r) {
      function n() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function T() {
      var e = c(this.type);
      return B[e] || (B[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, r, n, s, p, m, Y, L) {
      return n = m.ref, e = {
        $$typeof: v,
        type: e,
        key: r,
        props: m,
        _owner: p
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: T
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, n, s, p, m, Y, L) {
      var l = r.children;
      if (l !== void 0)
        if (s)
          if (X(l)) {
            for (s = 0; s < l.length; s++)
              w(l[s]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(l);
      if (W.call(r, "key")) {
        l = c(e);
        var h = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        s = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", V[l + s] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          l,
          h,
          l
        ), V[l + s] = !0);
      }
      if (l = null, n !== void 0 && (d(n), l = "" + n), u(r) && (d(r.key), l = "" + r.key), "key" in r) {
        n = {};
        for (var U in r)
          U !== "key" && (n[U] = r[U]);
      } else n = r;
      return l && t(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        l,
        m,
        p,
        a(),
        n,
        Y,
        L
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === v && e._store && (e._store.validated = 1);
    }
    var R = re, v = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), C = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), $ = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, X = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var q, B = {}, G = R.react_stack_bottom_frame.bind(
      R,
      o
    )(), J = D(_(o)), V = {};
    N.Fragment = x, N.jsx = function(e, r, n, s, p) {
      var m = 1e4 > $.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        n,
        !1,
        s,
        p,
        m ? Error("react-stack-top-frame") : G,
        m ? D(_(e)) : J
      );
    }, N.jsxs = function(e, r, n, s, p) {
      var m = 1e4 > $.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        n,
        !0,
        s,
        p,
        m ? Error("react-stack-top-frame") : G,
        m ? D(_(e)) : J
      );
    };
  })()), N;
}
var Z;
function ae() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? P.exports = te() : P.exports = ne()), P.exports;
}
var i = ae();
function se({
  children: c,
  icon: f,
  iconPlacement: d = "leading",
  iconOnly: _ = !1,
  size: a,
  ariaLabel: o,
  className: u = "",
  ...t
}) {
  const T = !!f, k = d === "tailing" ? "trailing" : d, E = _ && T, w = t["aria-label"], R = t.title;
  E && !t["aria-label"] && !t.title && console.warn("Button (iconOnly) requires aria-label or title for accessibility.");
  const v = t["aria-disabled"] === !0 || t["aria-disabled"] === "true", b = v ? void 0 : t.onClick, x = v ? -1 : t.tabIndex, y = ["xs", "sm", "lg"], S = a && y.includes(a) ? `uds-btn-${a}` : null;
  a && !S && console.warn(`Button: invalid size "${a}". Allowed: ${y.join(", ")}`);
  const { ["aria-label"]: O, ...C } = t, F = E ? { "aria-label": w || R } : {}, A = ["uds-btn", S, u];
  E ? A.push("uds-btn--icon-only") : T && A.push(k === "trailing" ? "uds-btn--icon-trailing" : "uds-btn--icon-leading");
  function I(j) {
    if (v && (j.key === "Enter" || j.key === " ")) {
      j.preventDefault(), j.stopPropagation();
      return;
    }
    onKeyDown?.(j);
  }
  return /* @__PURE__ */ i.jsx(
    "button",
    {
      type: t.type || "button",
      disabled: t.disabled,
      "aria-disabled": v || void 0,
      onClick: b,
      tabIndex: x,
      className: A.filter(Boolean).join(" "),
      onKeyDown: I,
      ...C,
      ...F,
      ...t,
      children: E ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("span", { className: "uds-btn__icon", "aria-hidden": "true", children: f }),
        /* @__PURE__ */ i.jsx("span", { className: "uds-btn__label", children: c })
      ] }) : T ? k === "trailing" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("span", { className: "uds-btn__label", children: c }),
        /* @__PURE__ */ i.jsx("span", { className: "uds-btn__icon", "aria-hidden": "true", children: f })
      ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("span", { className: "uds-btn__icon", "aria-hidden": "true", children: f }),
        /* @__PURE__ */ i.jsx("span", { className: "uds-btn__label", children: c })
      ] }) : /* @__PURE__ */ i.jsx("span", { className: "uds-btn__label", children: c })
    }
  );
}
function le({
  as: c = "div",
  direction: f = "row",
  justify: d,
  align: _,
  wrap: a = "nowrap",
  gap: o,
  gapX: u,
  gapY: t,
  inline: T = !1,
  fullWidth: k = !1,
  className: E = "",
  style: w,
  children: R,
  ...v
}) {
  const b = (O) => typeof O == "number" || /^\d+$/.test(String(O)), x = {
    "data-dir": f === "column" ? "column" : "row",
    "data-inline": T ? "true" : void 0,
    "data-justify": d || void 0,
    "data-align": _ || void 0,
    "data-wrap": typeof a == "boolean" ? a ? "wrap" : "nowrap" : a,
    "data-gap": b(o) ? String(o) : void 0,
    "data-gap-x": b(u) ? String(u) : void 0,
    "data-gap-y": b(t) ? String(t) : void 0
  }, y = {
    ...k ? { width: "100%" } : {},
    ...w || {},
    ...o && !b(o) ? { gap: o } : {},
    ...u && !b(u) ? { columnGap: u } : {},
    ...t && !b(t) ? { rowGap: t } : {}
  }, S = ["uds-flex", E].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.jsx(c, { className: S, style: y, ...x, ...v, children: R });
}
export {
  se as Button,
  le as Flex
};
//# sourceMappingURL=chg-uds.es.js.map
