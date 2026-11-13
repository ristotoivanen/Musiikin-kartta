function Gm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ho = { exports: {} }, Qs = {}, mo = { exports: {} }, $e = {};
var jd;
function Wm() {
  if (jd) return $e;
  jd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = Symbol.iterator;
  function M(j) {
    return j === null || typeof j != "object" ? null : (j = g && j[g] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, N = {};
  function x(j, C, oe) {
    this.props = j, this.context = C, this.refs = N, this.updater = oe || $;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(j, C) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, C, "setState");
  }, x.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function I() {
  }
  I.prototype = x.prototype;
  function E(j, C, oe) {
    this.props = j, this.context = C, this.refs = N, this.updater = oe || $;
  }
  var H = E.prototype = new I();
  H.constructor = E, T(H, x.prototype), H.isPureReactComponent = !0;
  var K = Array.isArray, G = Object.prototype.hasOwnProperty, D = { current: null }, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(j, C, oe) {
    var V, ce = {}, W = null, U = null;
    if (C != null) for (V in C.ref !== void 0 && (U = C.ref), C.key !== void 0 && (W = "" + C.key), C) G.call(C, V) && !b.hasOwnProperty(V) && (ce[V] = C[V]);
    var te = arguments.length - 2;
    if (te === 1) ce.children = oe;
    else if (1 < te) {
      for (var q = Array(te), pe = 0; pe < te; pe++) q[pe] = arguments[pe + 2];
      ce.children = q;
    }
    if (j && j.defaultProps) for (V in te = j.defaultProps, te) ce[V] === void 0 && (ce[V] = te[V]);
    return { $$typeof: r, type: j, key: W, ref: U, props: ce, _owner: D.current };
  }
  function se(j, C) {
    return { $$typeof: r, type: j.type, key: C, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function ee(j) {
    return typeof j == "object" && j !== null && j.$$typeof === r;
  }
  function ge(j) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(oe) {
      return C[oe];
    });
  }
  var we = /\/+/g;
  function X(j, C) {
    return typeof j == "object" && j !== null && j.key != null ? ge("" + j.key) : C.toString(36);
  }
  function ue(j, C, oe, V, ce) {
    var W = typeof j;
    (W === "undefined" || W === "boolean") && (j = null);
    var U = !1;
    if (j === null) U = !0;
    else switch (W) {
      case "string":
      case "number":
        U = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case r:
          case a:
            U = !0;
        }
    }
    if (U) return U = j, ce = ce(U), j = V === "" ? "." + X(U, 0) : V, K(ce) ? (oe = "", j != null && (oe = j.replace(we, "$&/") + "/"), ue(ce, C, oe, "", function(pe) {
      return pe;
    })) : ce != null && (ee(ce) && (ce = se(ce, oe + (!ce.key || U && U.key === ce.key ? "" : ("" + ce.key).replace(we, "$&/") + "/") + j)), C.push(ce)), 1;
    if (U = 0, V = V === "" ? "." : V + ":", K(j)) for (var te = 0; te < j.length; te++) {
      W = j[te];
      var q = V + X(W, te);
      U += ue(W, C, oe, q, ce);
    }
    else if (q = M(j), typeof q == "function") for (j = q.call(j), te = 0; !(W = j.next()).done; ) W = W.value, q = V + X(W, te++), U += ue(W, C, oe, q, ce);
    else if (W === "object") throw C = String(j), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    return U;
  }
  function Ee(j, C, oe) {
    if (j == null) return j;
    var V = [], ce = 0;
    return ue(j, V, "", "", function(W) {
      return C.call(oe, W, ce++);
    }), V;
  }
  function be(j) {
    if (j._status === -1) {
      var C = j._result;
      C = C(), C.then(function(oe) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = oe);
      }, function(oe) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = oe);
      }), j._status === -1 && (j._status = 0, j._result = C);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var he = { current: null }, A = { transition: null }, Q = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: A, ReactCurrentOwner: D };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $e.Children = { map: Ee, forEach: function(j, C, oe) {
    Ee(j, function() {
      C.apply(this, arguments);
    }, oe);
  }, count: function(j) {
    var C = 0;
    return Ee(j, function() {
      C++;
    }), C;
  }, toArray: function(j) {
    return Ee(j, function(C) {
      return C;
    }) || [];
  }, only: function(j) {
    if (!ee(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, $e.Component = x, $e.Fragment = o, $e.Profiler = c, $e.PureComponent = E, $e.StrictMode = d, $e.Suspense = w, $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, $e.act = Y, $e.cloneElement = function(j, C, oe) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var V = T({}, j.props), ce = j.key, W = j.ref, U = j._owner;
    if (C != null) {
      if (C.ref !== void 0 && (W = C.ref, U = D.current), C.key !== void 0 && (ce = "" + C.key), j.type && j.type.defaultProps) var te = j.type.defaultProps;
      for (q in C) G.call(C, q) && !b.hasOwnProperty(q) && (V[q] = C[q] === void 0 && te !== void 0 ? te[q] : C[q]);
    }
    var q = arguments.length - 2;
    if (q === 1) V.children = oe;
    else if (1 < q) {
      te = Array(q);
      for (var pe = 0; pe < q; pe++) te[pe] = arguments[pe + 2];
      V.children = te;
    }
    return { $$typeof: r, type: j.type, key: ce, ref: W, props: V, _owner: U };
  }, $e.createContext = function(j) {
    return j = { $$typeof: p, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: f, _context: j }, j.Consumer = j;
  }, $e.createElement = F, $e.createFactory = function(j) {
    var C = F.bind(null, j);
    return C.type = j, C;
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(j) {
    return { $$typeof: m, render: j };
  }, $e.isValidElement = ee, $e.lazy = function(j) {
    return { $$typeof: v, _payload: { _status: -1, _result: j }, _init: be };
  }, $e.memo = function(j, C) {
    return { $$typeof: L, type: j, compare: C === void 0 ? null : C };
  }, $e.startTransition = function(j) {
    var C = A.transition;
    A.transition = {};
    try {
      j();
    } finally {
      A.transition = C;
    }
  }, $e.unstable_act = Y, $e.useCallback = function(j, C) {
    return he.current.useCallback(j, C);
  }, $e.useContext = function(j) {
    return he.current.useContext(j);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(j) {
    return he.current.useDeferredValue(j);
  }, $e.useEffect = function(j, C) {
    return he.current.useEffect(j, C);
  }, $e.useId = function() {
    return he.current.useId();
  }, $e.useImperativeHandle = function(j, C, oe) {
    return he.current.useImperativeHandle(j, C, oe);
  }, $e.useInsertionEffect = function(j, C) {
    return he.current.useInsertionEffect(j, C);
  }, $e.useLayoutEffect = function(j, C) {
    return he.current.useLayoutEffect(j, C);
  }, $e.useMemo = function(j, C) {
    return he.current.useMemo(j, C);
  }, $e.useReducer = function(j, C, oe) {
    return he.current.useReducer(j, C, oe);
  }, $e.useRef = function(j) {
    return he.current.useRef(j);
  }, $e.useState = function(j) {
    return he.current.useState(j);
  }, $e.useSyncExternalStore = function(j, C, oe) {
    return he.current.useSyncExternalStore(j, C, oe);
  }, $e.useTransition = function() {
    return he.current.useTransition();
  }, $e.version = "18.3.1", $e;
}
var xd;
function Uo() {
  return xd || (xd = 1, mo.exports = Wm()), mo.exports;
}
var Sd;
function Qm() {
  if (Sd) return Qs;
  Sd = 1;
  var r = Uo(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, w, L) {
    var v, g = {}, M = null, $ = null;
    L !== void 0 && (M = "" + L), w.key !== void 0 && (M = "" + w.key), w.ref !== void 0 && ($ = w.ref);
    for (v in w) d.call(w, v) && !f.hasOwnProperty(v) && (g[v] = w[v]);
    if (m && m.defaultProps) for (v in w = m.defaultProps, w) g[v] === void 0 && (g[v] = w[v]);
    return { $$typeof: a, type: m, key: M, ref: $, props: g, _owner: c.current };
  }
  return Qs.Fragment = o, Qs.jsx = p, Qs.jsxs = p, Qs;
}
var wd;
function Ym() {
  return wd || (wd = 1, ho.exports = Qm()), ho.exports;
}
var s = Ym(), _ = Uo(), pa = {}, po = { exports: {} }, zt = {}, vo = { exports: {} }, ko = {};
var Nd;
function Jm() {
  return Nd || (Nd = 1, (function(r) {
    function a(A, Q) {
      var Y = A.length;
      A.push(Q);
      e: for (; 0 < Y; ) {
        var j = Y - 1 >>> 1, C = A[j];
        if (0 < c(C, Q)) A[j] = Q, A[Y] = C, Y = j;
        else break e;
      }
    }
    function o(A) {
      return A.length === 0 ? null : A[0];
    }
    function d(A) {
      if (A.length === 0) return null;
      var Q = A[0], Y = A.pop();
      if (Y !== Q) {
        A[0] = Y;
        e: for (var j = 0, C = A.length, oe = C >>> 1; j < oe; ) {
          var V = 2 * (j + 1) - 1, ce = A[V], W = V + 1, U = A[W];
          if (0 > c(ce, Y)) W < C && 0 > c(U, ce) ? (A[j] = U, A[W] = Y, j = W) : (A[j] = ce, A[V] = Y, j = V);
          else if (W < C && 0 > c(U, Y)) A[j] = U, A[W] = Y, j = W;
          else break e;
        }
      }
      return Q;
    }
    function c(A, Q) {
      var Y = A.sortIndex - Q.sortIndex;
      return Y !== 0 ? Y : A.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, m = p.now();
      r.unstable_now = function() {
        return p.now() - m;
      };
    }
    var w = [], L = [], v = 1, g = null, M = 3, $ = !1, T = !1, N = !1, x = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function H(A) {
      for (var Q = o(L); Q !== null; ) {
        if (Q.callback === null) d(L);
        else if (Q.startTime <= A) d(L), Q.sortIndex = Q.expirationTime, a(w, Q);
        else break;
        Q = o(L);
      }
    }
    function K(A) {
      if (N = !1, H(A), !T) if (o(w) !== null) T = !0, be(G);
      else {
        var Q = o(L);
        Q !== null && he(K, Q.startTime - A);
      }
    }
    function G(A, Q) {
      T = !1, N && (N = !1, I(F), F = -1), $ = !0;
      var Y = M;
      try {
        for (H(Q), g = o(w); g !== null && (!(g.expirationTime > Q) || A && !ge()); ) {
          var j = g.callback;
          if (typeof j == "function") {
            g.callback = null, M = g.priorityLevel;
            var C = j(g.expirationTime <= Q);
            Q = r.unstable_now(), typeof C == "function" ? g.callback = C : g === o(w) && d(w), H(Q);
          } else d(w);
          g = o(w);
        }
        if (g !== null) var oe = !0;
        else {
          var V = o(L);
          V !== null && he(K, V.startTime - Q), oe = !1;
        }
        return oe;
      } finally {
        g = null, M = Y, $ = !1;
      }
    }
    var D = !1, b = null, F = -1, se = 5, ee = -1;
    function ge() {
      return !(r.unstable_now() - ee < se);
    }
    function we() {
      if (b !== null) {
        var A = r.unstable_now();
        ee = A;
        var Q = !0;
        try {
          Q = b(!0, A);
        } finally {
          Q ? X() : (D = !1, b = null);
        }
      } else D = !1;
    }
    var X;
    if (typeof E == "function") X = function() {
      E(we);
    };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), Ee = ue.port2;
      ue.port1.onmessage = we, X = function() {
        Ee.postMessage(null);
      };
    } else X = function() {
      x(we, 0);
    };
    function be(A) {
      b = A, D || (D = !0, X());
    }
    function he(A, Q) {
      F = x(function() {
        A(r.unstable_now());
      }, Q);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, r.unstable_continueExecution = function() {
      T || $ || (T = !0, be(G));
    }, r.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < A ? Math.floor(1e3 / A) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(w);
    }, r.unstable_next = function(A) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = M;
      }
      var Y = M;
      M = Q;
      try {
        return A();
      } finally {
        M = Y;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(A, Q) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Y = M;
      M = A;
      try {
        return Q();
      } finally {
        M = Y;
      }
    }, r.unstable_scheduleCallback = function(A, Q, Y) {
      var j = r.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? j + Y : j) : Y = j, A) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = Y + C, A = { id: v++, callback: Q, priorityLevel: A, startTime: Y, expirationTime: C, sortIndex: -1 }, Y > j ? (A.sortIndex = Y, a(L, A), o(w) === null && A === o(L) && (N ? (I(F), F = -1) : N = !0, he(K, Y - j))) : (A.sortIndex = C, a(w, A), T || $ || (T = !0, be(G))), A;
    }, r.unstable_shouldYield = ge, r.unstable_wrapCallback = function(A) {
      var Q = M;
      return function() {
        var Y = M;
        M = Q;
        try {
          return A.apply(this, arguments);
        } finally {
          M = Y;
        }
      };
    };
  })(ko)), ko;
}
var Ed;
function Xm() {
  return Ed || (Ed = 1, vo.exports = Jm()), vo.exports;
}
var Cd;
function Zm() {
  if (Cd) return zt;
  Cd = 1;
  var r = Uo(), a = Xm();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), c = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, g = {};
  function M(e) {
    return w.call(g, e) ? !0 : w.call(v, e) ? !1 : L.test(e) ? g[e] = !0 : (v[e] = !0, !1);
  }
  function $(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, i) {
    if (t === null || typeof t > "u" || $(e, t, n, i)) return !0;
    if (i) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function N(e, t, n, i, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    x[e] = new N(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    x[t] = new N(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    x[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    x[e] = new N(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    x[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    x[e] = new N(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    x[e] = new N(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    x[e] = new N(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    x[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function E(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      E
    );
    x[t] = new N(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, E);
    x[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, E);
    x[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    x[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    x[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function H(e, t, n, i) {
    var l = x.hasOwnProperty(t) ? x[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T(t, n, l, i) && (n = null), i || l === null ? M(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var K = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, G = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.provider"), ge = /* @__PURE__ */ Symbol.for("react.context"), we = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ee = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.offscreen"), A = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, j;
  function C(e) {
    if (j === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      j = t && t[1] || "";
    }
    return `
` + j + e;
  }
  var oe = !1;
  function V(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (O) {
          var i = O;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (O) {
          i = O;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (O) {
          i = O;
        }
        e();
      }
    } catch (O) {
      if (O && i && typeof O.stack == "string") {
        for (var l = O.stack.split(`
`), u = i.stack.split(`
`), h = l.length - 1, k = u.length - 1; 1 <= h && 0 <= k && l[h] !== u[k]; ) k--;
        for (; 1 <= h && 0 <= k; h--, k--) if (l[h] !== u[k]) {
          if (h !== 1 || k !== 1)
            do
              if (h--, k--, 0 > k || l[h] !== u[k]) {
                var y = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= h && 0 <= k);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = V(e.type, !1), e;
      case 11:
        return e = V(e.type.render, !1), e;
      case 1:
        return e = V(e.type, !0), e;
      default:
        return "";
    }
  }
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case D:
        return "Portal";
      case se:
        return "Profiler";
      case F:
        return "StrictMode";
      case X:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ge:
        return (e.displayName || "Context") + ".Consumer";
      case ee:
        return (e._context.displayName || "Context") + ".Provider";
      case we:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ee:
        return t = e.displayName || null, t !== null ? t : W(e.type) || "Memo";
      case be:
        t = e._payload, e = e._init;
        try {
          return W(e(t));
        } catch {
        }
    }
    return null;
  }
  function U(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return W(t);
      case 8:
        return t === F ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function q(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function pe(e) {
    var t = q(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(h) {
        i = "" + h, u.call(this, h);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(h) {
        i = "" + h;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function z(e) {
    e._valueTracker || (e._valueTracker = pe(e));
  }
  function ie(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = q(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ae(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function de(e, t) {
    var n = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Se(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function xe(e, t) {
    t = t.checked, t != null && H(e, "checked", t, !1);
  }
  function Le(e, t) {
    xe(e, t);
    var n = te(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ye(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ye(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function He(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ye(e, t, n) {
    (t !== "number" || ae(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Xe(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ut(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Je(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (We(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Ve(e, t) {
    var n = te(t.value), i = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Jt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Nt, on = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Nt = Nt || document.createElement("div"), Nt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Nt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Xt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, _t = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Zt).forEach(function(e) {
    _t.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Zt[t] = Zt[e];
    });
  });
  function Ne(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zt.hasOwnProperty(e) && Zt[e] ? ("" + t).trim() : t + "px";
  }
  function Vt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = Ne(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Me = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Pe(e, t) {
    if (t) {
      if (Me[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Re(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ge = null;
  function rt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Lt = null, vt = null, qt = null;
  function Cn(e) {
    if (e = Ls(e)) {
      if (typeof Lt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = br(t), Lt(e.stateNode, e.type, t));
    }
  }
  function kn(e) {
    vt ? qt ? qt.push(e) : qt = [e] : vt = e;
  }
  function yn() {
    if (vt) {
      var e = vt, t = qt;
      if (qt = vt = null, Cn(e), t) for (e = 0; e < t.length; e++) Cn(t[e]);
    }
  }
  function ar(e, t) {
    return e(t);
  }
  function Fe() {
  }
  var et = !1;
  function Ze(e, t, n) {
    if (et) return e(t, n);
    et = !0;
    try {
      return ar(e, t, n);
    } finally {
      et = !1, (vt !== null || qt !== null) && (Fe(), yn());
    }
  }
  function ct(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = br(n);
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Kt = !1;
  if (m) try {
    var en = {};
    Object.defineProperty(en, "passive", { get: function() {
      Kt = !0;
    } }), window.addEventListener("test", en, en), window.removeEventListener("test", en, en);
  } catch {
    Kt = !1;
  }
  function bi(e, t, n, i, l, u, h, k, y) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, O);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var Tn = !1, zn = null, di = !1, ds = null, fi = { onError: function(e) {
    Tn = !0, zn = e;
  } };
  function fs(e, t, n, i, l, u, h, k, y) {
    Tn = !1, zn = null, bi.apply(fi, arguments);
  }
  function lr(e, t, n, i, l, u, h, k, y) {
    if (fs.apply(this, arguments), Tn) {
      if (Tn) {
        var O = zn;
        Tn = !1, zn = null;
      } else throw Error(o(198));
      di || (di = !0, ds = O);
    }
  }
  function Mn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function or(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function jt(e) {
    if (Mn(e) !== e) throw Error(o(188));
  }
  function Pa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Mn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (i = l.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return jt(l), e;
          if (u === i) return jt(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) n = l, i = u;
      else {
        for (var h = !1, k = l.child; k; ) {
          if (k === n) {
            h = !0, n = l, i = u;
            break;
          }
          if (k === i) {
            h = !0, i = l, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!h) {
          for (k = u.child; k; ) {
            if (k === n) {
              h = !0, n = u, i = l;
              break;
            }
            if (k === i) {
              h = !0, i = u, n = l;
              break;
            }
            k = k.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function hs(e) {
    return e = Pa(e), e !== null ? ur(e) : null;
  }
  function ur(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ur(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var cr = a.unstable_scheduleCallback, _n = a.unstable_cancelCallback, Bn = a.unstable_shouldYield, B = a.unstable_requestPaint, le = a.unstable_now, De = a.unstable_getCurrentPriorityLevel, Rt = a.unstable_ImmediatePriority, dt = a.unstable_UserBlockingPriority, bn = a.unstable_NormalPriority, ms = a.unstable_LowPriority, Vn = a.unstable_IdlePriority, dr = null, gn = null;
  function lh(e) {
    if (gn && typeof gn.onCommitFiberRoot == "function") try {
      gn.onCommitFiberRoot(dr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var un = Math.clz32 ? Math.clz32 : ch, oh = Math.log, uh = Math.LN2;
  function ch(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (oh(e) / uh | 0) | 0;
  }
  var fr = 64, hr = 4194304;
  function ps(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function mr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? i = ps(k) : (u &= h, u !== 0 && (i = ps(u)));
    } else h = n & ~l, h !== 0 ? i = ps(h) : u !== 0 && (i = ps(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - un(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function dh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fh(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - un(u), k = 1 << h, y = l[h];
      y === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = dh(k, t)) : y <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function La(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Xo() {
    var e = fr;
    return fr <<= 1, (fr & 4194240) === 0 && (fr = 64), e;
  }
  function Ra(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - un(t), e[t] = n;
  }
  function hh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - un(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function $a(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - un(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Qe = 0;
  function Zo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var qo, Oa, eu, tu, nu, Fa = !1, pr = [], Kn = null, Un = null, Hn = null, ks = /* @__PURE__ */ new Map(), ys = /* @__PURE__ */ new Map(), Gn = [], mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function iu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Un = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        ks.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ys.delete(t.pointerId);
    }
  }
  function gs(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Ls(t), t !== null && Oa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function ph(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Kn = gs(Kn, e, t, n, i, l), !0;
      case "dragenter":
        return Un = gs(Un, e, t, n, i, l), !0;
      case "mouseover":
        return Hn = gs(Hn, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return ks.set(u, gs(ks.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, ys.set(u, gs(ys.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function su(e) {
    var t = hi(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = or(n), t !== null) {
            e.blockedOn = t, nu(e.priority, function() {
              eu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Ge = i, n.target.dispatchEvent(i), Ge = null;
      } else return t = Ls(n), t !== null && Oa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ru(e, t, n) {
    vr(e) && n.delete(t);
  }
  function vh() {
    Fa = !1, Kn !== null && vr(Kn) && (Kn = null), Un !== null && vr(Un) && (Un = null), Hn !== null && vr(Hn) && (Hn = null), ks.forEach(ru), ys.forEach(ru);
  }
  function js(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fa || (Fa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, vh)));
  }
  function xs(e) {
    function t(l) {
      return js(l, e);
    }
    if (0 < pr.length) {
      js(pr[0], e);
      for (var n = 1; n < pr.length; n++) {
        var i = pr[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Kn !== null && js(Kn, e), Un !== null && js(Un, e), Hn !== null && js(Hn, e), ks.forEach(t), ys.forEach(t), n = 0; n < Gn.length; n++) i = Gn[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Gn.length && (n = Gn[0], n.blockedOn === null); ) su(n), n.blockedOn === null && Gn.shift();
  }
  var Ai = K.ReactCurrentBatchConfig, kr = !0;
  function kh(e, t, n, i) {
    var l = Qe, u = Ai.transition;
    Ai.transition = null;
    try {
      Qe = 1, Ia(e, t, n, i);
    } finally {
      Qe = l, Ai.transition = u;
    }
  }
  function yh(e, t, n, i) {
    var l = Qe, u = Ai.transition;
    Ai.transition = null;
    try {
      Qe = 4, Ia(e, t, n, i);
    } finally {
      Qe = l, Ai.transition = u;
    }
  }
  function Ia(e, t, n, i) {
    if (kr) {
      var l = Da(e, t, n, i);
      if (l === null) nl(e, t, i, yr, n), iu(e, i);
      else if (ph(l, e, t, n, i)) i.stopPropagation();
      else if (iu(e, i), t & 4 && -1 < mh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Ls(l);
          if (u !== null && qo(u), u = Da(e, t, n, i), u === null && nl(e, t, i, yr, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else nl(e, t, i, null, n);
    }
  }
  var yr = null;
  function Da(e, t, n, i) {
    if (yr = null, e = rt(i), e = hi(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = or(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return yr = e, null;
  }
  function au(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (De()) {
          case Rt:
            return 1;
          case dt:
            return 4;
          case bn:
          case ms:
            return 16;
          case Vn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wn = null, za = null, gr = null;
  function lu() {
    if (gr) return gr;
    var e, t = za, n = t.length, i, l = "value" in Wn ? Wn.value : Wn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === l[u - i]; i++) ;
    return gr = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function jr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xr() {
    return !0;
  }
  function ou() {
    return !1;
  }
  function Ut(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? xr : ou, this.isPropagationStopped = ou, this;
    }
    return Y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xr);
    }, persist: function() {
    }, isPersistent: xr }), t;
  }
  var Pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ba = Ut(Pi), Ss = Y({}, Pi, { view: 0, detail: 0 }), gh = Ut(Ss), Va, Ka, ws, Sr = Y({}, Ss, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ws && (ws && e.type === "mousemove" ? (Va = e.screenX - ws.screenX, Ka = e.screenY - ws.screenY) : Ka = Va = 0, ws = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ka;
  } }), uu = Ut(Sr), jh = Y({}, Sr, { dataTransfer: 0 }), xh = Ut(jh), Sh = Y({}, Ss, { relatedTarget: 0 }), Ua = Ut(Sh), wh = Y({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nh = Ut(wh), Eh = Y({}, Pi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ch = Ut(Eh), Th = Y({}, Pi, { data: 0 }), cu = Ut(Th), Mh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _h = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, bh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ah(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = bh[e]) ? !!t[e] : !1;
  }
  function Ha() {
    return Ah;
  }
  var Ph = Y({}, Ss, { key: function(e) {
    if (e.key) {
      var t = Mh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = jr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _h[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ha, charCode: function(e) {
    return e.type === "keypress" ? jr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Lh = Ut(Ph), Rh = Y({}, Sr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), du = Ut(Rh), $h = Y({}, Ss, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ha }), Oh = Ut($h), Fh = Y({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ih = Ut(Fh), Dh = Y({}, Sr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zh = Ut(Dh), Bh = [9, 13, 27, 32], Ga = m && "CompositionEvent" in window, Ns = null;
  m && "documentMode" in document && (Ns = document.documentMode);
  var Vh = m && "TextEvent" in window && !Ns, fu = m && (!Ga || Ns && 8 < Ns && 11 >= Ns), hu = " ", mu = !1;
  function pu(e, t) {
    switch (e) {
      case "keyup":
        return Bh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Li = !1;
  function Kh(e, t) {
    switch (e) {
      case "compositionend":
        return vu(t);
      case "keypress":
        return t.which !== 32 ? null : (mu = !0, hu);
      case "textInput":
        return e = t.data, e === hu && mu ? null : e;
      default:
        return null;
    }
  }
  function Uh(e, t) {
    if (Li) return e === "compositionend" || !Ga && pu(e, t) ? (e = lu(), gr = za = Wn = null, Li = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return fu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Hh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hh[e.type] : t === "textarea";
  }
  function yu(e, t, n, i) {
    kn(i), t = Tr(t, "onChange"), 0 < t.length && (n = new Ba("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Es = null, Cs = null;
  function Gh(e) {
    Ou(e, 0);
  }
  function wr(e) {
    var t = Ii(e);
    if (ie(t)) return e;
  }
  function Wh(e, t) {
    if (e === "change") return t;
  }
  var gu = !1;
  if (m) {
    var Wa;
    if (m) {
      var Qa = "oninput" in document;
      if (!Qa) {
        var ju = document.createElement("div");
        ju.setAttribute("oninput", "return;"), Qa = typeof ju.oninput == "function";
      }
      Wa = Qa;
    } else Wa = !1;
    gu = Wa && (!document.documentMode || 9 < document.documentMode);
  }
  function xu() {
    Es && (Es.detachEvent("onpropertychange", Su), Cs = Es = null);
  }
  function Su(e) {
    if (e.propertyName === "value" && wr(Cs)) {
      var t = [];
      yu(t, Cs, e, rt(e)), Ze(Gh, t);
    }
  }
  function Qh(e, t, n) {
    e === "focusin" ? (xu(), Es = t, Cs = n, Es.attachEvent("onpropertychange", Su)) : e === "focusout" && xu();
  }
  function Yh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wr(Cs);
  }
  function Jh(e, t) {
    if (e === "click") return wr(t);
  }
  function Xh(e, t) {
    if (e === "input" || e === "change") return wr(t);
  }
  function Zh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var cn = typeof Object.is == "function" ? Object.is : Zh;
  function Ts(e, t) {
    if (cn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!w.call(t, l) || !cn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function wu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nu(e, t) {
    var n = wu(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t) return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = wu(n);
    }
  }
  function Eu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Eu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Cu() {
    for (var e = window, t = ae(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ae(e.document);
    }
    return t;
  }
  function Ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function qh(e) {
    var t = Cu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Eu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ya(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(i.start, l);
          i = i.end === void 0 ? u : Math.min(i.end, l), !e.extend && u > i && (l = i, i = u, u = l), l = Nu(n, u);
          var h = Nu(
            n,
            i
          );
          l && h && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > i ? (e.addRange(t), e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var em = m && "documentMode" in document && 11 >= document.documentMode, Ri = null, Ja = null, Ms = null, Xa = !1;
  function Tu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xa || Ri == null || Ri !== ae(i) || (i = Ri, "selectionStart" in i && Ya(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Ms && Ts(Ms, i) || (Ms = i, i = Tr(Ja, "onSelect"), 0 < i.length && (t = new Ba("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Ri)));
  }
  function Nr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $i = { animationend: Nr("Animation", "AnimationEnd"), animationiteration: Nr("Animation", "AnimationIteration"), animationstart: Nr("Animation", "AnimationStart"), transitionend: Nr("Transition", "TransitionEnd") }, Za = {}, Mu = {};
  m && (Mu = document.createElement("div").style, "AnimationEvent" in window || (delete $i.animationend.animation, delete $i.animationiteration.animation, delete $i.animationstart.animation), "TransitionEvent" in window || delete $i.transitionend.transition);
  function Er(e) {
    if (Za[e]) return Za[e];
    if (!$i[e]) return e;
    var t = $i[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mu) return Za[e] = t[n];
    return e;
  }
  var _u = Er("animationend"), bu = Er("animationiteration"), Au = Er("animationstart"), Pu = Er("transitionend"), Lu = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qn(e, t) {
    Lu.set(e, t), f(t, [e]);
  }
  for (var qa = 0; qa < Ru.length; qa++) {
    var el = Ru[qa], tm = el.toLowerCase(), nm = el[0].toUpperCase() + el.slice(1);
    Qn(tm, "on" + nm);
  }
  Qn(_u, "onAnimationEnd"), Qn(bu, "onAnimationIteration"), Qn(Au, "onAnimationStart"), Qn("dblclick", "onDoubleClick"), Qn("focusin", "onFocus"), Qn("focusout", "onBlur"), Qn(Pu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _s = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), im = new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));
  function $u(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, lr(i, t, void 0, e), e.currentTarget = null;
  }
  function Ou(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], y = k.instance, O = k.currentTarget;
          if (k = k.listener, y !== u && l.isPropagationStopped()) break e;
          $u(l, k, O), u = y;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], y = k.instance, O = k.currentTarget, k = k.listener, y !== u && l.isPropagationStopped()) break e;
          $u(l, k, O), u = y;
        }
      }
    }
    if (di) throw e = ds, di = !1, ds = null, e;
  }
  function tt(e, t) {
    var n = t[ol];
    n === void 0 && (n = t[ol] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Fu(t, e, 2, !1), n.add(i));
  }
  function tl(e, t, n) {
    var i = 0;
    t && (i |= 4), Fu(n, e, i, t);
  }
  var Cr = "_reactListening" + Math.random().toString(36).slice(2);
  function bs(e) {
    if (!e[Cr]) {
      e[Cr] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (im.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cr] || (t[Cr] = !0, tl("selectionchange", !1, t));
    }
  }
  function Fu(e, t, n, i) {
    switch (au(t)) {
      case 1:
        var l = kh;
        break;
      case 4:
        l = yh;
        break;
      default:
        l = Ia;
    }
    n = l.bind(null, t, n, e), l = void 0, !Kt || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function nl(e, t, n, i, l) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var h = i.tag;
      if (h === 3 || h === 4) {
        var k = i.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (h === 4) for (h = i.return; h !== null; ) {
          var y = h.tag;
          if ((y === 3 || y === 4) && (y = h.stateNode.containerInfo, y === l || y.nodeType === 8 && y.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = hi(k), h === null) return;
          if (y = h.tag, y === 5 || y === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    Ze(function() {
      var O = u, Z = rt(n), ne = [];
      e: {
        var J = Lu.get(e);
        if (J !== void 0) {
          var fe = Ba, ve = e;
          switch (e) {
            case "keypress":
              if (jr(n) === 0) break e;
            case "keydown":
            case "keyup":
              fe = Lh;
              break;
            case "focusin":
              ve = "focus", fe = Ua;
              break;
            case "focusout":
              ve = "blur", fe = Ua;
              break;
            case "beforeblur":
            case "afterblur":
              fe = Ua;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = uu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = xh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = Oh;
              break;
            case _u:
            case bu:
            case Au:
              fe = Nh;
              break;
            case Pu:
              fe = Ih;
              break;
            case "scroll":
              fe = gh;
              break;
            case "wheel":
              fe = zh;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = Ch;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = du;
          }
          var ye = (t & 4) !== 0, ft = !ye && e === "scroll", P = ye ? J !== null ? J + "Capture" : null : J;
          ye = [];
          for (var S = O, R; S !== null; ) {
            R = S;
            var re = R.stateNode;
            if (R.tag === 5 && re !== null && (R = re, P !== null && (re = ct(S, P), re != null && ye.push(As(S, re, R)))), ft) break;
            S = S.return;
          }
          0 < ye.length && (J = new fe(J, ve, null, n, Z), ne.push({ event: J, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (J = e === "mouseover" || e === "pointerover", fe = e === "mouseout" || e === "pointerout", J && n !== Ge && (ve = n.relatedTarget || n.fromElement) && (hi(ve) || ve[An])) break e;
          if ((fe || J) && (J = Z.window === Z ? Z : (J = Z.ownerDocument) ? J.defaultView || J.parentWindow : window, fe ? (ve = n.relatedTarget || n.toElement, fe = O, ve = ve ? hi(ve) : null, ve !== null && (ft = Mn(ve), ve !== ft || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (fe = null, ve = O), fe !== ve)) {
            if (ye = uu, re = "onMouseLeave", P = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (ye = du, re = "onPointerLeave", P = "onPointerEnter", S = "pointer"), ft = fe == null ? J : Ii(fe), R = ve == null ? J : Ii(ve), J = new ye(re, S + "leave", fe, n, Z), J.target = ft, J.relatedTarget = R, re = null, hi(Z) === O && (ye = new ye(P, S + "enter", ve, n, Z), ye.target = R, ye.relatedTarget = ft, re = ye), ft = re, fe && ve) t: {
              for (ye = fe, P = ve, S = 0, R = ye; R; R = Oi(R)) S++;
              for (R = 0, re = P; re; re = Oi(re)) R++;
              for (; 0 < S - R; ) ye = Oi(ye), S--;
              for (; 0 < R - S; ) P = Oi(P), R--;
              for (; S--; ) {
                if (ye === P || P !== null && ye === P.alternate) break t;
                ye = Oi(ye), P = Oi(P);
              }
              ye = null;
            }
            else ye = null;
            fe !== null && Iu(ne, J, fe, ye, !1), ve !== null && ft !== null && Iu(ne, ft, ve, ye, !0);
          }
        }
        e: {
          if (J = O ? Ii(O) : window, fe = J.nodeName && J.nodeName.toLowerCase(), fe === "select" || fe === "input" && J.type === "file") var je = Wh;
          else if (ku(J)) if (gu) je = Xh;
          else {
            je = Yh;
            var Ce = Qh;
          }
          else (fe = J.nodeName) && fe.toLowerCase() === "input" && (J.type === "checkbox" || J.type === "radio") && (je = Jh);
          if (je && (je = je(e, O))) {
            yu(ne, je, n, Z);
            break e;
          }
          Ce && Ce(e, J, O), e === "focusout" && (Ce = J._wrapperState) && Ce.controlled && J.type === "number" && Ye(J, "number", J.value);
        }
        switch (Ce = O ? Ii(O) : window, e) {
          case "focusin":
            (ku(Ce) || Ce.contentEditable === "true") && (Ri = Ce, Ja = O, Ms = null);
            break;
          case "focusout":
            Ms = Ja = Ri = null;
            break;
          case "mousedown":
            Xa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xa = !1, Tu(ne, n, Z);
            break;
          case "selectionchange":
            if (em) break;
          case "keydown":
          case "keyup":
            Tu(ne, n, Z);
        }
        var Te;
        if (Ga) e: {
          switch (e) {
            case "compositionstart":
              var _e = "onCompositionStart";
              break e;
            case "compositionend":
              _e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _e = "onCompositionUpdate";
              break e;
          }
          _e = void 0;
        }
        else Li ? pu(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (fu && n.locale !== "ko" && (Li || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Li && (Te = lu()) : (Wn = Z, za = "value" in Wn ? Wn.value : Wn.textContent, Li = !0)), Ce = Tr(O, _e), 0 < Ce.length && (_e = new cu(_e, e, null, n, Z), ne.push({ event: _e, listeners: Ce }), Te ? _e.data = Te : (Te = vu(n), Te !== null && (_e.data = Te)))), (Te = Vh ? Kh(e, n) : Uh(e, n)) && (O = Tr(O, "onBeforeInput"), 0 < O.length && (Z = new cu("onBeforeInput", "beforeinput", null, n, Z), ne.push({ event: Z, listeners: O }), Z.data = Te));
      }
      Ou(ne, t);
    });
  }
  function As(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Tr(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = ct(e, n), u != null && i.unshift(As(e, u, l)), u = ct(e, t), u != null && i.push(As(e, u, l))), e = e.return;
    }
    return i;
  }
  function Oi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Iu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, y = k.alternate, O = k.stateNode;
      if (y !== null && y === i) break;
      k.tag === 5 && O !== null && (k = O, l ? (y = ct(n, u), y != null && h.unshift(As(n, y, k))) : l || (y = ct(n, u), y != null && h.push(As(n, y, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var sm = /\r\n?/g, rm = /\u0000|\uFFFD/g;
  function Du(e) {
    return (typeof e == "string" ? e : "" + e).replace(sm, `
`).replace(rm, "");
  }
  function Mr(e, t, n) {
    if (t = Du(t), Du(e) !== t && n) throw Error(o(425));
  }
  function _r() {
  }
  var il = null, sl = null;
  function rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var al = typeof setTimeout == "function" ? setTimeout : void 0, am = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
    return zu.resolve(null).then(e).catch(om);
  } : al;
  function om(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ll(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), xs(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    xs(t);
  }
  function Yn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Bu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Fi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + Fi, Ps = "__reactProps$" + Fi, An = "__reactContainer$" + Fi, ol = "__reactEvents$" + Fi, um = "__reactListeners$" + Fi, cm = "__reactHandles$" + Fi;
  function hi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[An] || n[jn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Bu(e); e !== null; ) {
          if (n = e[jn]) return n;
          e = Bu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ls(e) {
    return e = e[jn] || e[An], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function br(e) {
    return e[Ps] || null;
  }
  var ul = [], Di = -1;
  function Jn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Di || (e.current = ul[Di], ul[Di] = null, Di--);
  }
  function qe(e, t) {
    Di++, ul[Di] = e.current, e.current = t;
  }
  var Xn = {}, Et = Jn(Xn), $t = Jn(!1), mi = Xn;
  function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Xn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ar() {
    nt($t), nt(Et);
  }
  function Vu(e, t, n) {
    if (Et.current !== Xn) throw Error(o(168));
    qe(Et, t), qe($t, n);
  }
  function Ku(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, U(e) || "Unknown", l));
    return Y({}, n, i);
  }
  function Pr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xn, mi = Et.current, qe(Et, e), qe($t, $t.current), !0;
  }
  function Uu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Ku(e, t, mi), i.__reactInternalMemoizedMergedChildContext = e, nt($t), nt(Et), qe(Et, e)) : nt($t), qe($t, n);
  }
  var Pn = null, Lr = !1, cl = !1;
  function Hu(e) {
    Pn === null ? Pn = [e] : Pn.push(e);
  }
  function dm(e) {
    Lr = !0, Hu(e);
  }
  function Zn() {
    if (!cl && Pn !== null) {
      cl = !0;
      var e = 0, t = Qe;
      try {
        var n = Pn;
        for (Qe = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        Pn = null, Lr = !1;
      } catch (l) {
        throw Pn !== null && (Pn = Pn.slice(e + 1)), cr(Rt, Zn), l;
      } finally {
        Qe = t, cl = !1;
      }
    }
    return null;
  }
  var Bi = [], Vi = 0, Rr = null, $r = 0, tn = [], nn = 0, pi = null, Ln = 1, Rn = "";
  function vi(e, t) {
    Bi[Vi++] = $r, Bi[Vi++] = Rr, Rr = e, $r = t;
  }
  function Gu(e, t, n) {
    tn[nn++] = Ln, tn[nn++] = Rn, tn[nn++] = pi, pi = e;
    var i = Ln;
    e = Rn;
    var l = 32 - un(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - un(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, Ln = 1 << 32 - un(t) + l | n << l | i, Rn = u + e;
    } else Ln = 1 << u | n << l | i, Rn = e;
  }
  function dl(e) {
    e.return !== null && (vi(e, 1), Gu(e, 1, 0));
  }
  function fl(e) {
    for (; e === Rr; ) Rr = Bi[--Vi], Bi[Vi] = null, $r = Bi[--Vi], Bi[Vi] = null;
    for (; e === pi; ) pi = tn[--nn], tn[nn] = null, Rn = tn[--nn], tn[nn] = null, Ln = tn[--nn], tn[nn] = null;
  }
  var Ht = null, Gt = null, st = !1, dn = null;
  function Wu(e, t) {
    var n = ln(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Qu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ht = e, Gt = Yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ht = e, Gt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: Ln, overflow: Rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ln(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ht = e, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ml(e) {
    if (st) {
      var t = Gt;
      if (t) {
        var n = t;
        if (!Qu(e, t)) {
          if (hl(e)) throw Error(o(418));
          t = Yn(n.nextSibling);
          var i = Ht;
          t && Qu(e, t) ? Wu(i, n) : (e.flags = e.flags & -4097 | 2, st = !1, Ht = e);
        }
      } else {
        if (hl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, st = !1, Ht = e;
      }
    }
  }
  function Yu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ht = e;
  }
  function Or(e) {
    if (e !== Ht) return !1;
    if (!st) return Yu(e), st = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rl(e.type, e.memoizedProps)), t && (t = Gt)) {
      if (hl(e)) throw Ju(), Error(o(418));
      for (; t; ) Wu(e, t), t = Yn(t.nextSibling);
    }
    if (Yu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Gt = Yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Gt = null;
      }
    } else Gt = Ht ? Yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ju() {
    for (var e = Gt; e; ) e = Yn(e.nextSibling);
  }
  function Ki() {
    Gt = Ht = null, st = !1;
  }
  function pl(e) {
    dn === null ? dn = [e] : dn.push(e);
  }
  var fm = K.ReactCurrentBatchConfig;
  function Rs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(o(147, e));
        var l = i, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
          var k = l.refs;
          h === null ? delete k[u] : k[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Fr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Xu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Zu(e) {
    function t(P, S) {
      if (e) {
        var R = P.deletions;
        R === null ? (P.deletions = [S], P.flags |= 16) : R.push(S);
      }
    }
    function n(P, S) {
      if (!e) return null;
      for (; S !== null; ) t(P, S), S = S.sibling;
      return null;
    }
    function i(P, S) {
      for (P = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? P.set(S.key, S) : P.set(S.index, S), S = S.sibling;
      return P;
    }
    function l(P, S) {
      return P = ai(P, S), P.index = 0, P.sibling = null, P;
    }
    function u(P, S, R) {
      return P.index = R, e ? (R = P.alternate, R !== null ? (R = R.index, R < S ? (P.flags |= 2, S) : R) : (P.flags |= 2, S)) : (P.flags |= 1048576, S);
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function k(P, S, R, re) {
      return S === null || S.tag !== 6 ? (S = ao(R, P.mode, re), S.return = P, S) : (S = l(S, R), S.return = P, S);
    }
    function y(P, S, R, re) {
      var je = R.type;
      return je === b ? Z(P, S, R.props.children, re, R.key) : S !== null && (S.elementType === je || typeof je == "object" && je !== null && je.$$typeof === be && Xu(je) === S.type) ? (re = l(S, R.props), re.ref = Rs(P, S, R), re.return = P, re) : (re = la(R.type, R.key, R.props, null, P.mode, re), re.ref = Rs(P, S, R), re.return = P, re);
    }
    function O(P, S, R, re) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== R.containerInfo || S.stateNode.implementation !== R.implementation ? (S = lo(R, P.mode, re), S.return = P, S) : (S = l(S, R.children || []), S.return = P, S);
    }
    function Z(P, S, R, re, je) {
      return S === null || S.tag !== 7 ? (S = Ni(R, P.mode, re, je), S.return = P, S) : (S = l(S, R), S.return = P, S);
    }
    function ne(P, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = ao("" + S, P.mode, R), S.return = P, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case G:
            return R = la(S.type, S.key, S.props, null, P.mode, R), R.ref = Rs(P, null, S), R.return = P, R;
          case D:
            return S = lo(S, P.mode, R), S.return = P, S;
          case be:
            var re = S._init;
            return ne(P, re(S._payload), R);
        }
        if (We(S) || Q(S)) return S = Ni(S, P.mode, R, null), S.return = P, S;
        Fr(P, S);
      }
      return null;
    }
    function J(P, S, R, re) {
      var je = S !== null ? S.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return je !== null ? null : k(P, S, "" + R, re);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case G:
            return R.key === je ? y(P, S, R, re) : null;
          case D:
            return R.key === je ? O(P, S, R, re) : null;
          case be:
            return je = R._init, J(
              P,
              S,
              je(R._payload),
              re
            );
        }
        if (We(R) || Q(R)) return je !== null ? null : Z(P, S, R, re, null);
        Fr(P, R);
      }
      return null;
    }
    function fe(P, S, R, re, je) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return P = P.get(R) || null, k(S, P, "" + re, je);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case G:
            return P = P.get(re.key === null ? R : re.key) || null, y(S, P, re, je);
          case D:
            return P = P.get(re.key === null ? R : re.key) || null, O(S, P, re, je);
          case be:
            var Ce = re._init;
            return fe(P, S, R, Ce(re._payload), je);
        }
        if (We(re) || Q(re)) return P = P.get(R) || null, Z(S, P, re, je, null);
        Fr(S, re);
      }
      return null;
    }
    function ve(P, S, R, re) {
      for (var je = null, Ce = null, Te = S, _e = S = 0, gt = null; Te !== null && _e < R.length; _e++) {
        Te.index > _e ? (gt = Te, Te = null) : gt = Te.sibling;
        var Ke = J(P, Te, R[_e], re);
        if (Ke === null) {
          Te === null && (Te = gt);
          break;
        }
        e && Te && Ke.alternate === null && t(P, Te), S = u(Ke, S, _e), Ce === null ? je = Ke : Ce.sibling = Ke, Ce = Ke, Te = gt;
      }
      if (_e === R.length) return n(P, Te), st && vi(P, _e), je;
      if (Te === null) {
        for (; _e < R.length; _e++) Te = ne(P, R[_e], re), Te !== null && (S = u(Te, S, _e), Ce === null ? je = Te : Ce.sibling = Te, Ce = Te);
        return st && vi(P, _e), je;
      }
      for (Te = i(P, Te); _e < R.length; _e++) gt = fe(Te, P, _e, R[_e], re), gt !== null && (e && gt.alternate !== null && Te.delete(gt.key === null ? _e : gt.key), S = u(gt, S, _e), Ce === null ? je = gt : Ce.sibling = gt, Ce = gt);
      return e && Te.forEach(function(li) {
        return t(P, li);
      }), st && vi(P, _e), je;
    }
    function ye(P, S, R, re) {
      var je = Q(R);
      if (typeof je != "function") throw Error(o(150));
      if (R = je.call(R), R == null) throw Error(o(151));
      for (var Ce = je = null, Te = S, _e = S = 0, gt = null, Ke = R.next(); Te !== null && !Ke.done; _e++, Ke = R.next()) {
        Te.index > _e ? (gt = Te, Te = null) : gt = Te.sibling;
        var li = J(P, Te, Ke.value, re);
        if (li === null) {
          Te === null && (Te = gt);
          break;
        }
        e && Te && li.alternate === null && t(P, Te), S = u(li, S, _e), Ce === null ? je = li : Ce.sibling = li, Ce = li, Te = gt;
      }
      if (Ke.done) return n(
        P,
        Te
      ), st && vi(P, _e), je;
      if (Te === null) {
        for (; !Ke.done; _e++, Ke = R.next()) Ke = ne(P, Ke.value, re), Ke !== null && (S = u(Ke, S, _e), Ce === null ? je = Ke : Ce.sibling = Ke, Ce = Ke);
        return st && vi(P, _e), je;
      }
      for (Te = i(P, Te); !Ke.done; _e++, Ke = R.next()) Ke = fe(Te, P, _e, Ke.value, re), Ke !== null && (e && Ke.alternate !== null && Te.delete(Ke.key === null ? _e : Ke.key), S = u(Ke, S, _e), Ce === null ? je = Ke : Ce.sibling = Ke, Ce = Ke);
      return e && Te.forEach(function(Hm) {
        return t(P, Hm);
      }), st && vi(P, _e), je;
    }
    function ft(P, S, R, re) {
      if (typeof R == "object" && R !== null && R.type === b && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case G:
            e: {
              for (var je = R.key, Ce = S; Ce !== null; ) {
                if (Ce.key === je) {
                  if (je = R.type, je === b) {
                    if (Ce.tag === 7) {
                      n(P, Ce.sibling), S = l(Ce, R.props.children), S.return = P, P = S;
                      break e;
                    }
                  } else if (Ce.elementType === je || typeof je == "object" && je !== null && je.$$typeof === be && Xu(je) === Ce.type) {
                    n(P, Ce.sibling), S = l(Ce, R.props), S.ref = Rs(P, Ce, R), S.return = P, P = S;
                    break e;
                  }
                  n(P, Ce);
                  break;
                } else t(P, Ce);
                Ce = Ce.sibling;
              }
              R.type === b ? (S = Ni(R.props.children, P.mode, re, R.key), S.return = P, P = S) : (re = la(R.type, R.key, R.props, null, P.mode, re), re.ref = Rs(P, S, R), re.return = P, P = re);
            }
            return h(P);
          case D:
            e: {
              for (Ce = R.key; S !== null; ) {
                if (S.key === Ce) if (S.tag === 4 && S.stateNode.containerInfo === R.containerInfo && S.stateNode.implementation === R.implementation) {
                  n(P, S.sibling), S = l(S, R.children || []), S.return = P, P = S;
                  break e;
                } else {
                  n(P, S);
                  break;
                }
                else t(P, S);
                S = S.sibling;
              }
              S = lo(R, P.mode, re), S.return = P, P = S;
            }
            return h(P);
          case be:
            return Ce = R._init, ft(P, S, Ce(R._payload), re);
        }
        if (We(R)) return ve(P, S, R, re);
        if (Q(R)) return ye(P, S, R, re);
        Fr(P, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, S !== null && S.tag === 6 ? (n(P, S.sibling), S = l(S, R), S.return = P, P = S) : (n(P, S), S = ao(R, P.mode, re), S.return = P, P = S), h(P)) : n(P, S);
    }
    return ft;
  }
  var Ui = Zu(!0), qu = Zu(!1), Ir = Jn(null), Dr = null, Hi = null, vl = null;
  function kl() {
    vl = Hi = Dr = null;
  }
  function yl(e) {
    var t = Ir.current;
    nt(Ir), e._currentValue = t;
  }
  function gl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gi(e, t) {
    Dr = e, vl = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function sn(e) {
    var t = e._currentValue;
    if (vl !== e) if (e = { context: e, memoizedValue: t, next: null }, Hi === null) {
      if (Dr === null) throw Error(o(308));
      Hi = e, Dr.dependencies = { lanes: 0, firstContext: e };
    } else Hi = Hi.next = e;
    return t;
  }
  var ki = null;
  function jl(e) {
    ki === null ? ki = [e] : ki.push(e);
  }
  function ec(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, jl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, $n(e, i);
  }
  function $n(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var qn = !1;
  function xl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ei(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (ze & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, $n(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, jl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, $n(e, n);
  }
  function zr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, $a(e, n);
    }
  }
  function nc(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = h : u = u.next = h, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: i.shared, effects: i.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Br(e, t, n, i) {
    var l = e.updateQueue;
    qn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var y = k, O = y.next;
      y.next = null, h === null ? u = O : h.next = O, h = y;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, k = Z.lastBaseUpdate, k !== h && (k === null ? Z.firstBaseUpdate = O : k.next = O, Z.lastBaseUpdate = y));
    }
    if (u !== null) {
      var ne = l.baseState;
      h = 0, Z = O = y = null, k = u;
      do {
        var J = k.lane, fe = k.eventTime;
        if ((i & J) === J) {
          Z !== null && (Z = Z.next = {
            eventTime: fe,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ve = e, ye = k;
            switch (J = t, fe = n, ye.tag) {
              case 1:
                if (ve = ye.payload, typeof ve == "function") {
                  ne = ve.call(fe, ne, J);
                  break e;
                }
                ne = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ye.payload, J = typeof ve == "function" ? ve.call(fe, ne, J) : ve, J == null) break e;
                ne = Y({}, ne, J);
                break e;
              case 2:
                qn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, J = l.effects, J === null ? l.effects = [k] : J.push(k));
        } else fe = { eventTime: fe, lane: J, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Z === null ? (O = Z = fe, y = ne) : Z = Z.next = fe, h |= J;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          J = k, k = J.next, J.next = null, l.lastBaseUpdate = J, l.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (y = ne), l.baseState = y, l.firstBaseUpdate = O, l.lastBaseUpdate = Z, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ji |= h, e.lanes = h, e.memoizedState = ne;
    }
  }
  function ic(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(o(191, l));
        l.call(i);
      }
    }
  }
  var $s = {}, xn = Jn($s), Os = Jn($s), Fs = Jn($s);
  function yi(e) {
    if (e === $s) throw Error(o(174));
    return e;
  }
  function Sl(e, t) {
    switch (qe(Fs, t), qe(Os, e), qe(xn, $s), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Jt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jt(t, e);
    }
    nt(xn), qe(xn, t);
  }
  function Wi() {
    nt(xn), nt(Os), nt(Fs);
  }
  function sc(e) {
    yi(Fs.current);
    var t = yi(xn.current), n = Jt(t, e.type);
    t !== n && (qe(Os, e), qe(xn, n));
  }
  function wl(e) {
    Os.current === e && (nt(xn), nt(Os));
  }
  var at = Jn(0);
  function Vr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Nl = [];
  function El() {
    for (var e = 0; e < Nl.length; e++) Nl[e]._workInProgressVersionPrimary = null;
    Nl.length = 0;
  }
  var Kr = K.ReactCurrentDispatcher, Cl = K.ReactCurrentBatchConfig, gi = 0, lt = null, mt = null, kt = null, Ur = !1, Is = !1, Ds = 0, hm = 0;
  function Ct() {
    throw Error(o(321));
  }
  function Tl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!cn(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, i, l, u) {
    if (gi = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Kr.current = e === null || e.memoizedState === null ? km : ym, e = n(i, l), Is) {
      u = 0;
      do {
        if (Is = !1, Ds = 0, 25 <= u) throw Error(o(301));
        u += 1, kt = mt = null, t.updateQueue = null, Kr.current = gm, e = n(i, l);
      } while (Is);
    }
    if (Kr.current = Wr, t = mt !== null && mt.next !== null, gi = 0, kt = mt = lt = null, Ur = !1, t) throw Error(o(300));
    return e;
  }
  function _l() {
    var e = Ds !== 0;
    return Ds = 0, e;
  }
  function Sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return kt === null ? lt.memoizedState = kt = e : kt = kt.next = e, kt;
  }
  function rn() {
    if (mt === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = mt.next;
    var t = kt === null ? lt.memoizedState : kt.next;
    if (t !== null) kt = t, mt = e;
    else {
      if (e === null) throw Error(o(310));
      mt = e, e = { memoizedState: mt.memoizedState, baseState: mt.baseState, baseQueue: mt.baseQueue, queue: mt.queue, next: null }, kt === null ? lt.memoizedState = kt = e : kt = kt.next = e;
    }
    return kt;
  }
  function zs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bl(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = mt, l = i.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        l.next = u.next, u.next = h;
      }
      i.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, i = i.baseState;
      var k = h = null, y = null, O = u;
      do {
        var Z = O.lane;
        if ((gi & Z) === Z) y !== null && (y = y.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), i = O.hasEagerState ? O.eagerState : e(i, O.action);
        else {
          var ne = {
            lane: Z,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          y === null ? (k = y = ne, h = i) : y = y.next = ne, lt.lanes |= Z, ji |= Z;
        }
        O = O.next;
      } while (O !== null && O !== u);
      y === null ? h = i : y.next = k, cn(i, t.memoizedState) || (Ft = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = y, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, lt.lanes |= u, ji |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Al(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = l = l.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== l);
      cn(u, t.memoizedState) || (Ft = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function rc() {
  }
  function ac(e, t) {
    var n = lt, i = rn(), l = t(), u = !cn(i.memoizedState, l);
    if (u && (i.memoizedState = l, Ft = !0), i = i.queue, Pl(uc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || kt !== null && kt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Bs(9, oc.bind(null, n, i, l, t), void 0, null), yt === null) throw Error(o(349));
      (gi & 30) !== 0 || lc(n, t, l);
    }
    return l;
  }
  function lc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function oc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, cc(t) && dc(e);
  }
  function uc(e, t, n) {
    return n(function() {
      cc(t) && dc(e);
    });
  }
  function cc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !cn(e, n);
    } catch {
      return !0;
    }
  }
  function dc(e) {
    var t = $n(e, 1);
    t !== null && pn(t, e, 1, -1);
  }
  function fc(e) {
    var t = Sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zs, lastRenderedState: e }, t.queue = e, e = e.dispatch = vm.bind(null, lt, e), [t.memoizedState, e];
  }
  function Bs(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function hc() {
    return rn().memoizedState;
  }
  function Hr(e, t, n, i) {
    var l = Sn();
    lt.flags |= e, l.memoizedState = Bs(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Gr(e, t, n, i) {
    var l = rn();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (mt !== null) {
      var h = mt.memoizedState;
      if (u = h.destroy, i !== null && Tl(i, h.deps)) {
        l.memoizedState = Bs(t, n, u, i);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Bs(1 | t, n, u, i);
  }
  function mc(e, t) {
    return Hr(8390656, 8, e, t);
  }
  function Pl(e, t) {
    return Gr(2048, 8, e, t);
  }
  function pc(e, t) {
    return Gr(4, 2, e, t);
  }
  function vc(e, t) {
    return Gr(4, 4, e, t);
  }
  function kc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function yc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gr(4, 4, kc.bind(null, t, e), n);
  }
  function Ll() {
  }
  function gc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function jc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function xc(e, t, n) {
    return (gi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (cn(n, t) || (n = Xo(), lt.lanes |= n, ji |= n, e.baseState = !0), t);
  }
  function mm(e, t) {
    var n = Qe;
    Qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = Cl.transition;
    Cl.transition = {};
    try {
      e(!1), t();
    } finally {
      Qe = n, Cl.transition = i;
    }
  }
  function Sc() {
    return rn().memoizedState;
  }
  function pm(e, t, n) {
    var i = si(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, wc(e)) Nc(t, n);
    else if (n = ec(e, t, n, i), n !== null) {
      var l = At();
      pn(n, e, i, l), Ec(n, t, i);
    }
  }
  function vm(e, t, n) {
    var i = si(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (wc(e)) Nc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, cn(k, h)) {
          var y = t.interleaved;
          y === null ? (l.next = l, jl(t)) : (l.next = y.next, y.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = ec(e, t, l, i), n !== null && (l = At(), pn(n, e, i, l), Ec(n, t, i));
    }
  }
  function wc(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function Nc(e, t) {
    Is = Ur = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ec(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, $a(e, n);
    }
  }
  var Wr = { readContext: sn, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, km = { readContext: sn, useCallback: function(e, t) {
    return Sn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: sn, useEffect: mc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hr(
      4194308,
      4,
      kc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Hr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Hr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Sn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = Sn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = pm.bind(null, lt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Sn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: fc, useDebugValue: Ll, useDeferredValue: function(e) {
    return Sn().memoizedState = e;
  }, useTransition: function() {
    var e = fc(!1), t = e[0];
    return e = mm.bind(null, e[1]), Sn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = lt, l = Sn();
    if (st) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), yt === null) throw Error(o(349));
      (gi & 30) !== 0 || lc(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, mc(uc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, Bs(9, oc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Sn(), t = yt.identifierPrefix;
    if (st) {
      var n = Rn, i = Ln;
      n = (i & ~(1 << 32 - un(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ds++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = hm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, ym = {
    readContext: sn,
    useCallback: gc,
    useContext: sn,
    useEffect: Pl,
    useImperativeHandle: yc,
    useInsertionEffect: pc,
    useLayoutEffect: vc,
    useMemo: jc,
    useReducer: bl,
    useRef: hc,
    useState: function() {
      return bl(zs);
    },
    useDebugValue: Ll,
    useDeferredValue: function(e) {
      var t = rn();
      return xc(t, mt.memoizedState, e);
    },
    useTransition: function() {
      var e = bl(zs)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: ac,
    useId: Sc,
    unstable_isNewReconciler: !1
  }, gm = { readContext: sn, useCallback: gc, useContext: sn, useEffect: Pl, useImperativeHandle: yc, useInsertionEffect: pc, useLayoutEffect: vc, useMemo: jc, useReducer: Al, useRef: hc, useState: function() {
    return Al(zs);
  }, useDebugValue: Ll, useDeferredValue: function(e) {
    var t = rn();
    return mt === null ? t.memoizedState = e : xc(t, mt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(zs)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: rc, useSyncExternalStore: ac, useId: Sc, unstable_isNewReconciler: !1 };
  function fn(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Rl(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Qr = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = si(e), u = On(i, l);
    u.payload = t, n != null && (u.callback = n), t = ei(e, u, l), t !== null && (pn(t, e, l, i), zr(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = si(e), u = On(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = ei(e, u, l), t !== null && (pn(t, e, l, i), zr(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), i = si(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = ei(e, l, i), t !== null && (pn(t, e, i, n), zr(t, e, i));
  } };
  function Cc(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Ts(n, i) || !Ts(l, u) : !0;
  }
  function Tc(e, t, n) {
    var i = !1, l = Xn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = sn(u) : (l = Ot(t) ? mi : Et.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Xn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qr, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Mc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Qr.enqueueReplaceState(t, t.state, null);
  }
  function $l(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = sn(u) : (u = Ot(t) ? mi : Et.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Rl(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Qr.enqueueReplaceState(l, l.state, null), Br(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qi(e, t) {
    try {
      var n = "", i = t;
      do
        n += ce(i), i = i.return;
      while (i);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ol(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Fl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var jm = typeof WeakMap == "function" ? WeakMap : Map;
  function _c(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ta || (ta = !0, Zl = i), Fl(e, t);
    }, n;
  }
  function bc(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        Fl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Fl(e, t), typeof i != "function" && (ni === null ? ni = /* @__PURE__ */ new Set([this]) : ni.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Ac(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new jm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Rm.bind(null, e, t, n), t.then(e, e));
  }
  function Pc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Lc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, ei(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var xm = K.ReactCurrentOwner, Ft = !1;
  function bt(e, t, n, i) {
    t.child = e === null ? qu(t, null, n, i) : Ui(t, e.child, n, i);
  }
  function Rc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = Ml(e, t, n, i, u, l), n = _l(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (st && n && dl(t), t.flags |= 1, bt(e, t, i, l), t.child);
  }
  function $c(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ro(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Oc(e, t, u, i, l)) : (e = la(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ts, n(h, i) && e.ref === t.ref) return Fn(e, t, l);
    }
    return t.flags |= 1, e = ai(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Oc(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ts(u, i) && e.ref === t.ref) if (Ft = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, Fn(e, t, l);
    }
    return Il(e, t, n, i, l);
  }
  function Fc(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Ji, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(Ji, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, qe(Ji, Wt), Wt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, qe(Ji, Wt), Wt |= i;
    return bt(e, t, l, n), t.child;
  }
  function Ic(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Il(e, t, n, i, l) {
    var u = Ot(n) ? mi : Et.current;
    return u = zi(t, u), Gi(t, l), n = Ml(e, t, n, i, u, l), i = _l(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Fn(e, t, l)) : (st && i && dl(t), t.flags |= 1, bt(e, t, n, l), t.child);
  }
  function Dc(e, t, n, i, l) {
    if (Ot(n)) {
      var u = !0;
      Pr(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Jr(e, t), Tc(t, n, i), $l(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var y = h.context, O = n.contextType;
      typeof O == "object" && O !== null ? O = sn(O) : (O = Ot(n) ? mi : Et.current, O = zi(t, O));
      var Z = n.getDerivedStateFromProps, ne = typeof Z == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      ne || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || y !== O) && Mc(t, h, i, O), qn = !1;
      var J = t.memoizedState;
      h.state = J, Br(t, i, h, l), y = t.memoizedState, k !== i || J !== y || $t.current || qn ? (typeof Z == "function" && (Rl(t, n, Z, i), y = t.memoizedState), (k = qn || Cc(t, n, k, i, J, y, O)) ? (ne || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = y), h.props = i, h.state = y, h.context = O, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, tc(e, t), k = t.memoizedProps, O = t.type === t.elementType ? k : fn(t.type, k), h.props = O, ne = t.pendingProps, J = h.context, y = n.contextType, typeof y == "object" && y !== null ? y = sn(y) : (y = Ot(n) ? mi : Et.current, y = zi(t, y));
      var fe = n.getDerivedStateFromProps;
      (Z = typeof fe == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== ne || J !== y) && Mc(t, h, i, y), qn = !1, J = t.memoizedState, h.state = J, Br(t, i, h, l);
      var ve = t.memoizedState;
      k !== ne || J !== ve || $t.current || qn ? (typeof fe == "function" && (Rl(t, n, fe, i), ve = t.memoizedState), (O = qn || Cc(t, n, O, i, J, ve, y) || !1) ? (Z || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ve, y), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ve, y)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), h.props = i, h.state = ve, h.context = y, i = O) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Dl(e, t, n, i, u, l);
  }
  function Dl(e, t, n, i, l, u) {
    Ic(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Uu(t, n, !1), Fn(e, t, u);
    i = t.stateNode, xm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Ui(t, e.child, null, u), t.child = Ui(t, null, k, u)) : bt(e, t, k, u), t.memoizedState = i.state, l && Uu(t, n, !0), t.child;
  }
  function zc(e) {
    var t = e.stateNode;
    t.pendingContext ? Vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vu(e, t.context, !1), Sl(e, t.containerInfo);
  }
  function Bc(e, t, n, i, l) {
    return Ki(), pl(l), t.flags |= 256, bt(e, t, n, i), t.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vc(e, t, n) {
    var i = t.pendingProps, l = at.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return ml(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = oa(h, i, 0, null), e = Ni(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Bl(n), t.memoizedState = zl, e) : Vl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Sm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var y = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = y, t.deletions = null) : (i = ai(l, y), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = ai(k, u) : (u = Ni(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? Bl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = zl, i;
    }
    return u = e.child, e = u.sibling, i = ai(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Vl(e, t) {
    return t = oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Yr(e, t, n, i) {
    return i !== null && pl(i), Ui(t, e.child, null, n), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Sm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Ol(Error(o(422))), Yr(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = oa({ mode: "visible", children: i.children }, l, 0, null), u = Ni(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Ui(t, e.child, null, h), t.child.memoizedState = Bl(h), t.memoizedState = zl, u);
    if ((t.mode & 1) === 0) return Yr(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = Ol(u, i, void 0), Yr(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, Ft || k) {
      if (i = yt, i !== null) {
        switch (h & -h) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, $n(e, l), pn(i, e, l, -1));
      }
      return so(), i = Ol(Error(o(421))), Yr(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $m.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Gt = Yn(l.nextSibling), Ht = t, st = !0, dn = null, e !== null && (tn[nn++] = Ln, tn[nn++] = Rn, tn[nn++] = pi, Ln = e.id, Rn = e.overflow, pi = t), t = Vl(t, i.children), t.flags |= 4096, t);
  }
  function Kc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), gl(e.return, t, n);
  }
  function Kl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Uc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (bt(e, t, i.children, n), i = at.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Kc(e, n, t);
        else if (e.tag === 19) Kc(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      i &= 1;
    }
    if (qe(at, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Vr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Kl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Vr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Kl(t, !0, n, null, u);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jr(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ji |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = ai(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ai(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function wm(e, t, n) {
    switch (t.tag) {
      case 3:
        zc(t), Ki();
        break;
      case 5:
        sc(t);
        break;
      case 1:
        Ot(t.type) && Pr(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        qe(Ir, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Vc(e, t, n) : (qe(at, at.current & 1), e = Fn(e, t, n), e !== null ? e.sibling : null);
        qe(at, at.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Uc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), qe(at, at.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Fc(e, t, n);
    }
    return Fn(e, t, n);
  }
  var Hc, Ul, Gc, Wc;
  Hc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ul = function() {
  }, Gc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, yi(xn.current);
      var u = null;
      switch (n) {
        case "input":
          l = de(e, l), i = de(e, i), u = [];
          break;
        case "select":
          l = Y({}, l, { value: void 0 }), i = Y({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ut(e, l), i = ut(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = _r);
      }
      Pe(n, i);
      var h;
      n = null;
      for (O in l) if (!i.hasOwnProperty(O) && l.hasOwnProperty(O) && l[O] != null) if (O === "style") {
        var k = l[O];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (c.hasOwnProperty(O) ? u || (u = []) : (u = u || []).push(O, null));
      for (O in i) {
        var y = i[O];
        if (k = l?.[O], i.hasOwnProperty(O) && y !== k && (y != null || k != null)) if (O === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || y && y.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in y) y.hasOwnProperty(h) && k[h] !== y[h] && (n || (n = {}), n[h] = y[h]);
        } else n || (u || (u = []), u.push(
          O,
          n
        )), n = y;
        else O === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, k = k ? k.__html : void 0, y != null && k !== y && (u = u || []).push(O, y)) : O === "children" ? typeof y != "string" && typeof y != "number" || (u = u || []).push(O, "" + y) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (c.hasOwnProperty(O) ? (y != null && O === "onScroll" && tt("scroll", e), u || k === y || (u = [])) : (u = u || []).push(O, y));
      }
      n && (u = u || []).push("style", n);
      var O = u;
      (t.updateQueue = O) && (t.flags |= 4);
    }
  }, Wc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Vs(e, t) {
    if (!st) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function Tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Nm(e, t, n) {
    var i = t.pendingProps;
    switch (fl(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(t), null;
      case 1:
        return Ot(t.type) && Ar(), Tt(t), null;
      case 3:
        return i = t.stateNode, Wi(), nt($t), nt(Et), El(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Or(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, dn !== null && (to(dn), dn = null))), Ul(e, t), Tt(t), null;
      case 5:
        wl(t);
        var l = yi(Fs.current);
        if (n = t.type, e !== null && t.stateNode != null) Gc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Tt(t), null;
          }
          if (e = yi(xn.current), Or(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[jn] = t, i[Ps] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                tt("cancel", i), tt("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                tt("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < _s.length; l++) tt(_s[l], i);
                break;
              case "source":
                tt("error", i);
                break;
              case "img":
              case "image":
              case "link":
                tt(
                  "error",
                  i
                ), tt("load", i);
                break;
              case "details":
                tt("toggle", i);
                break;
              case "input":
                Se(i, u), tt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, tt("invalid", i);
                break;
              case "textarea":
                Je(i, u), tt("invalid", i);
            }
            Pe(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && Mr(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Mr(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : c.hasOwnProperty(h) && k != null && h === "onScroll" && tt("scroll", i);
            }
            switch (n) {
              case "input":
                z(i), He(i, u, !0);
                break;
              case "textarea":
                z(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = _r);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[jn] = t, e[Ps] = i, Hc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = Re(n, i), n) {
                case "dialog":
                  tt("cancel", e), tt("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tt("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < _s.length; l++) tt(_s[l], e);
                  l = i;
                  break;
                case "source":
                  tt("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  tt(
                    "error",
                    e
                  ), tt("load", e), l = i;
                  break;
                case "details":
                  tt("toggle", e), l = i;
                  break;
                case "input":
                  Se(e, i), l = de(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = Y({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Je(e, i), l = ut(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Pe(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var y = k[u];
                u === "style" ? Vt(e, y) : u === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && on(e, y)) : u === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Xt(e, y) : typeof y == "number" && Xt(e, "" + y) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? y != null && u === "onScroll" && tt("scroll", e) : y != null && H(e, u, y, h));
              }
              switch (n) {
                case "input":
                  z(e), He(e, i, !1);
                  break;
                case "textarea":
                  z(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + te(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? Xe(e, !!i.multiple, u, !1) : i.defaultValue != null && Xe(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = _r);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Tt(t), null;
      case 6:
        if (e && t.stateNode != null) Wc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (n = yi(Fs.current), yi(xn.current), Or(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[jn] = t, (u = i.nodeValue !== n) && (e = Ht, e !== null)) switch (e.tag) {
              case 3:
                Mr(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Mr(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[jn] = t, t.stateNode = i;
        }
        return Tt(t), null;
      case 13:
        if (nt(at), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (st && Gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ju(), Ki(), t.flags |= 98560, u = !1;
          else if (u = Or(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[jn] = t;
            } else Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tt(t), u = !1;
          } else dn !== null && (to(dn), dn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? pt === 0 && (pt = 3) : so())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
      case 4:
        return Wi(), Ul(e, t), e === null && bs(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return yl(t.type._context), Tt(t), null;
      case 17:
        return Ot(t.type) && Ar(), Tt(t), null;
      case 19:
        if (nt(at), u = t.memoizedState, u === null) return Tt(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Vs(u, !1);
        else {
          if (pt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Vr(e), h !== null) {
              for (t.flags |= 128, Vs(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return qe(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && le() > Xi && (t.flags |= 128, i = !0, Vs(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Vr(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vs(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !st) return Tt(t), null;
          } else 2 * le() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Vs(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = le(), t.sibling = null, n = at.current, qe(at, i ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
      case 22:
      case 23:
        return io(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Em(e, t) {
    switch (fl(t), t.tag) {
      case 1:
        return Ot(t.type) && Ar(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), nt($t), nt(Et), El(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return wl(t), null;
      case 13:
        if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return nt(at), null;
      case 4:
        return Wi(), null;
      case 10:
        return yl(t.type._context), null;
      case 22:
      case 23:
        return io(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Xr = !1, Mt = !1, Cm = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Yi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ot(e, t, i);
    }
    else n.current = null;
  }
  function Hl(e, t, n) {
    try {
      n();
    } catch (i) {
      ot(e, t, i);
    }
  }
  var Qc = !1;
  function Tm(e, t) {
    if (il = kr, e = Cu(), Ya(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var l = i.anchorOffset, u = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var h = 0, k = -1, y = -1, O = 0, Z = 0, ne = e, J = null;
          t: for (; ; ) {
            for (var fe; ne !== n || l !== 0 && ne.nodeType !== 3 || (k = h + l), ne !== u || i !== 0 && ne.nodeType !== 3 || (y = h + i), ne.nodeType === 3 && (h += ne.nodeValue.length), (fe = ne.firstChild) !== null; )
              J = ne, ne = fe;
            for (; ; ) {
              if (ne === e) break t;
              if (J === n && ++O === l && (k = h), J === u && ++Z === i && (y = h), (fe = ne.nextSibling) !== null) break;
              ne = J, J = ne.parentNode;
            }
            ne = fe;
          }
          n = k === -1 || y === -1 ? null : { start: k, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (sl = { focusedElem: e, selectionRange: n }, kr = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
    else for (; me !== null; ) {
      t = me;
      try {
        var ve = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var ye = ve.memoizedProps, ft = ve.memoizedState, P = t.stateNode, S = P.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : fn(t.type, ye), ft);
              P.__reactInternalSnapshotBeforeUpdate = S;
            }
            break;
          case 3:
            var R = t.stateNode.containerInfo;
            R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (re) {
        ot(t, t.return, re);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, me = e;
        break;
      }
      me = t.return;
    }
    return ve = Qc, Qc = !1, ve;
  }
  function Ks(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Hl(t, n, u);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Zr(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var i = n.create;
          n.destroy = i();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Gl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Yc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[Ps], delete t[ol], delete t[um], delete t[cm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Jc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Xc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _r));
    else if (i !== 4 && (e = e.child, e !== null)) for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), e = e.sibling;
  }
  function Ql(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), e = e.sibling;
  }
  var xt = null, hn = !1;
  function ti(e, t, n) {
    for (n = n.child; n !== null; ) Zc(e, t, n), n = n.sibling;
  }
  function Zc(e, t, n) {
    if (gn && typeof gn.onCommitFiberUnmount == "function") try {
      gn.onCommitFiberUnmount(dr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Mt || Yi(n, t);
      case 6:
        var i = xt, l = hn;
        xt = null, ti(e, t, n), xt = i, hn = l, xt !== null && (hn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xt.removeChild(n.stateNode));
        break;
      case 18:
        xt !== null && (hn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), xs(e)) : ll(xt, n.stateNode));
        break;
      case 4:
        i = xt, l = hn, xt = n.stateNode.containerInfo, hn = !0, ti(e, t, n), xt = i, hn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Hl(n, t, h), l = l.next;
          } while (l !== i);
        }
        ti(e, t, n);
        break;
      case 1:
        if (!Mt && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          ot(n, t, k);
        }
        ti(e, t, n);
        break;
      case 21:
        ti(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Mt = (i = Mt) || n.memoizedState !== null, ti(e, t, n), Mt = i) : ti(e, t, n);
        break;
      default:
        ti(e, t, n);
    }
  }
  function qc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Cm()), t.forEach(function(i) {
        var l = Om.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function mn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              xt = k.stateNode, hn = !1;
              break e;
            case 3:
              xt = k.stateNode.containerInfo, hn = !0;
              break e;
            case 4:
              xt = k.stateNode.containerInfo, hn = !0;
              break e;
          }
          k = k.return;
        }
        if (xt === null) throw Error(o(160));
        Zc(u, h, l), xt = null, hn = !1;
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
      } catch (O) {
        ot(l, t, O);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ed(t, e), t = t.sibling;
  }
  function ed(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mn(t, e), wn(e), i & 4) {
          try {
            Ks(3, e, e.return), Zr(3, e);
          } catch (ye) {
            ot(e, e.return, ye);
          }
          try {
            Ks(5, e, e.return);
          } catch (ye) {
            ot(e, e.return, ye);
          }
        }
        break;
      case 1:
        mn(t, e), wn(e), i & 512 && n !== null && Yi(n, n.return);
        break;
      case 5:
        if (mn(t, e), wn(e), i & 512 && n !== null && Yi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Xt(l, "");
          } catch (ye) {
            ot(e, e.return, ye);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            k === "input" && u.type === "radio" && u.name != null && xe(l, u), Re(k, h);
            var O = Re(k, u);
            for (h = 0; h < y.length; h += 2) {
              var Z = y[h], ne = y[h + 1];
              Z === "style" ? Vt(l, ne) : Z === "dangerouslySetInnerHTML" ? on(l, ne) : Z === "children" ? Xt(l, ne) : H(l, Z, ne, O);
            }
            switch (k) {
              case "input":
                Le(l, u);
                break;
              case "textarea":
                Ve(l, u);
                break;
              case "select":
                var J = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var fe = u.value;
                fe != null ? Xe(l, !!u.multiple, fe, !1) : J !== !!u.multiple && (u.defaultValue != null ? Xe(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xe(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Ps] = u;
          } catch (ye) {
            ot(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (mn(t, e), wn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ye) {
            ot(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (mn(t, e), wn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          xs(t.containerInfo);
        } catch (ye) {
          ot(e, e.return, ye);
        }
        break;
      case 4:
        mn(t, e), wn(e);
        break;
      case 13:
        mn(t, e), wn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Xl = le())), i & 4 && qc(e);
        break;
      case 22:
        if (Z = n !== null && n.memoizedState !== null, e.mode & 1 ? (Mt = (O = Mt) || Z, mn(t, e), Mt = O) : mn(t, e), wn(e), i & 8192) {
          if (O = e.memoizedState !== null, (e.stateNode.isHidden = O) && !Z && (e.mode & 1) !== 0) for (me = e, Z = e.child; Z !== null; ) {
            for (ne = me = Z; me !== null; ) {
              switch (J = me, fe = J.child, J.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ks(4, J, J.return);
                  break;
                case 1:
                  Yi(J, J.return);
                  var ve = J.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = J, n = J.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ye) {
                      ot(i, n, ye);
                    }
                  }
                  break;
                case 5:
                  Yi(J, J.return);
                  break;
                case 22:
                  if (J.memoizedState !== null) {
                    id(ne);
                    continue;
                  }
              }
              fe !== null ? (fe.return = J, me = fe) : id(ne);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, ne = e; ; ) {
            if (ne.tag === 5) {
              if (Z === null) {
                Z = ne;
                try {
                  l = ne.stateNode, O ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = ne.stateNode, y = ne.memoizedProps.style, h = y != null && y.hasOwnProperty("display") ? y.display : null, k.style.display = Ne("display", h));
                } catch (ye) {
                  ot(e, e.return, ye);
                }
              }
            } else if (ne.tag === 6) {
              if (Z === null) try {
                ne.stateNode.nodeValue = O ? "" : ne.memoizedProps;
              } catch (ye) {
                ot(e, e.return, ye);
              }
            } else if ((ne.tag !== 22 && ne.tag !== 23 || ne.memoizedState === null || ne === e) && ne.child !== null) {
              ne.child.return = ne, ne = ne.child;
              continue;
            }
            if (ne === e) break e;
            for (; ne.sibling === null; ) {
              if (ne.return === null || ne.return === e) break e;
              Z === ne && (Z = null), ne = ne.return;
            }
            Z === ne && (Z = null), ne.sibling.return = ne.return, ne = ne.sibling;
          }
        }
        break;
      case 19:
        mn(t, e), wn(e), i & 4 && qc(e);
        break;
      case 21:
        break;
      default:
        mn(
          t,
          e
        ), wn(e);
    }
  }
  function wn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Jc(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (Xt(l, ""), i.flags &= -33);
            var u = Xc(e);
            Ql(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = Xc(e);
            Wl(e, k, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (y) {
        ot(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mm(e, t, n) {
    me = e, td(e);
  }
  function td(e, t, n) {
    for (var i = (e.mode & 1) !== 0; me !== null; ) {
      var l = me, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Xr;
        if (!h) {
          var k = l.alternate, y = k !== null && k.memoizedState !== null || Mt;
          k = Xr;
          var O = Mt;
          if (Xr = h, (Mt = y) && !O) for (me = l; me !== null; ) h = me, y = h.child, h.tag === 22 && h.memoizedState !== null ? sd(l) : y !== null ? (y.return = h, me = y) : sd(l);
          for (; u !== null; ) me = u, td(u), u = u.sibling;
          me = l, Xr = k, Mt = O;
        }
        nd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, me = u) : nd(e);
    }
  }
  function nd(e) {
    for (; me !== null; ) {
      var t = me;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Mt || Zr(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Mt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : fn(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && ic(t, u, i);
              break;
            case 3:
              var h = t.updateQueue;
              if (h !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ic(t, h, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var y = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    y.autoFocus && n.focus();
                    break;
                  case "img":
                    y.src && (n.src = y.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var O = t.alternate;
                if (O !== null) {
                  var Z = O.memoizedState;
                  if (Z !== null) {
                    var ne = Z.dehydrated;
                    ne !== null && xs(ne);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(o(163));
          }
          Mt || t.flags & 512 && Gl(t);
        } catch (J) {
          ot(t, t.return, J);
        }
      }
      if (t === e) {
        me = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, me = n;
        break;
      }
      me = t.return;
    }
  }
  function id(e) {
    for (; me !== null; ) {
      var t = me;
      if (t === e) {
        me = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, me = n;
        break;
      }
      me = t.return;
    }
  }
  function sd(e) {
    for (; me !== null; ) {
      var t = me;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Zr(4, t);
            } catch (y) {
              ot(t, n, y);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (y) {
                ot(t, l, y);
              }
            }
            var u = t.return;
            try {
              Gl(t);
            } catch (y) {
              ot(t, u, y);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Gl(t);
            } catch (y) {
              ot(t, h, y);
            }
        }
      } catch (y) {
        ot(t, t.return, y);
      }
      if (t === e) {
        me = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, me = k;
        break;
      }
      me = t.return;
    }
  }
  var _m = Math.ceil, qr = K.ReactCurrentDispatcher, Yl = K.ReactCurrentOwner, an = K.ReactCurrentBatchConfig, ze = 0, yt = null, ht = null, St = 0, Wt = 0, Ji = Jn(0), pt = 0, Us = null, ji = 0, ea = 0, Jl = 0, Hs = null, It = null, Xl = 0, Xi = 1 / 0, In = null, ta = !1, Zl = null, ni = null, na = !1, ii = null, ia = 0, Gs = 0, ql = null, sa = -1, ra = 0;
  function At() {
    return (ze & 6) !== 0 ? le() : sa !== -1 ? sa : sa = le();
  }
  function si(e) {
    return (e.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && St !== 0 ? St & -St : fm.transition !== null ? (ra === 0 && (ra = Xo()), ra) : (e = Qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : au(e.type)), e);
  }
  function pn(e, t, n, i) {
    if (50 < Gs) throw Gs = 0, ql = null, Error(o(185));
    vs(e, n, i), ((ze & 2) === 0 || e !== yt) && (e === yt && ((ze & 2) === 0 && (ea |= n), pt === 4 && ri(e, St)), Dt(e, i), n === 1 && ze === 0 && (t.mode & 1) === 0 && (Xi = le() + 500, Lr && Zn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    fh(e, t);
    var i = mr(e, e === yt ? St : 0);
    if (i === 0) n !== null && _n(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && _n(n), t === 1) e.tag === 0 ? dm(ad.bind(null, e)) : Hu(ad.bind(null, e)), lm(function() {
        (ze & 6) === 0 && Zn();
      }), n = null;
      else {
        switch (Zo(i)) {
          case 1:
            n = Rt;
            break;
          case 4:
            n = dt;
            break;
          case 16:
            n = bn;
            break;
          case 536870912:
            n = Vn;
            break;
          default:
            n = bn;
        }
        n = md(n, rd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function rd(e, t) {
    if (sa = -1, ra = 0, (ze & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Zi() && e.callbackNode !== n) return null;
    var i = mr(e, e === yt ? St : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = aa(e, i);
    else {
      t = i;
      var l = ze;
      ze |= 2;
      var u = od();
      (yt !== e || St !== t) && (In = null, Xi = le() + 500, Si(e, t));
      do
        try {
          Pm();
          break;
        } catch (k) {
          ld(e, k);
        }
      while (!0);
      kl(), qr.current = u, ze = l, ht !== null ? t = 0 : (yt = null, St = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (l = La(e), l !== 0 && (i = l, t = eo(e, l))), t === 1) throw n = Us, Si(e, 0), ri(e, i), Dt(e, le()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !bm(l) && (t = aa(e, i), t === 2 && (u = La(e), u !== 0 && (i = u, t = eo(e, u))), t === 1)) throw n = Us, Si(e, 0), ri(e, i), Dt(e, le()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wi(e, It, In);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Xl + 500 - le(), 10 < t)) {
              if (mr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                At(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = al(wi.bind(null, e, It, In), t);
              break;
            }
            wi(e, It, In);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - un(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = le() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * _m(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = al(wi.bind(null, e, It, In), i);
              break;
            }
            wi(e, It, In);
            break;
          case 5:
            wi(e, It, In);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Dt(e, le()), e.callbackNode === n ? rd.bind(null, e) : null;
  }
  function eo(e, t) {
    var n = Hs;
    return e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256), e = aa(e, t), e !== 2 && (t = It, It = n, t !== null && to(t)), e;
  }
  function to(e) {
    It === null ? It = e : It.push.apply(It, e);
  }
  function bm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], u = l.getSnapshot;
          l = l.value;
          try {
            if (!cn(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ri(e, t) {
    for (t &= ~Jl, t &= ~ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - un(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function ad(e) {
    if ((ze & 6) !== 0) throw Error(o(327));
    Zi();
    var t = mr(e, 0);
    if ((t & 1) === 0) return Dt(e, le()), null;
    var n = aa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = La(e);
      i !== 0 && (t = i, n = eo(e, i));
    }
    if (n === 1) throw n = Us, Si(e, 0), ri(e, t), Dt(e, le()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wi(e, It, In), Dt(e, le()), null;
  }
  function no(e, t) {
    var n = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ze = n, ze === 0 && (Xi = le() + 500, Lr && Zn());
    }
  }
  function xi(e) {
    ii !== null && ii.tag === 0 && (ze & 6) === 0 && Zi();
    var t = ze;
    ze |= 1;
    var n = an.transition, i = Qe;
    try {
      if (an.transition = null, Qe = 1, e) return e();
    } finally {
      Qe = i, an.transition = n, ze = t, (ze & 6) === 0 && Zn();
    }
  }
  function io() {
    Wt = Ji.current, nt(Ji);
  }
  function Si(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, am(n)), ht !== null) for (n = ht.return; n !== null; ) {
      var i = n;
      switch (fl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ar();
          break;
        case 3:
          Wi(), nt($t), nt(Et), El();
          break;
        case 5:
          wl(i);
          break;
        case 4:
          Wi();
          break;
        case 13:
          nt(at);
          break;
        case 19:
          nt(at);
          break;
        case 10:
          yl(i.type._context);
          break;
        case 22:
        case 23:
          io();
      }
      n = n.return;
    }
    if (yt = e, ht = e = ai(e.current, null), St = Wt = t, pt = 0, Us = null, Jl = ea = ji = 0, It = Hs = null, ki !== null) {
      for (t = 0; t < ki.length; t++) if (n = ki[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, i.next = h;
        }
        n.pending = i;
      }
      ki = null;
    }
    return e;
  }
  function ld(e, t) {
    do {
      var n = ht;
      try {
        if (kl(), Kr.current = Wr, Ur) {
          for (var i = lt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Ur = !1;
        }
        if (gi = 0, kt = mt = lt = null, Is = !1, Ds = 0, Yl.current = null, n === null || n.return === null) {
          pt = 1, Us = t, ht = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, y = t;
          if (t = St, k.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var O = y, Z = k, ne = Z.tag;
            if ((Z.mode & 1) === 0 && (ne === 0 || ne === 11 || ne === 15)) {
              var J = Z.alternate;
              J ? (Z.updateQueue = J.updateQueue, Z.memoizedState = J.memoizedState, Z.lanes = J.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var fe = Pc(h);
            if (fe !== null) {
              fe.flags &= -257, Lc(fe, h, k, u, t), fe.mode & 1 && Ac(u, O, t), t = fe, y = O;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(y), t.updateQueue = ye;
              } else ve.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ac(u, O, t), so();
                break e;
              }
              y = Error(o(426));
            }
          } else if (st && k.mode & 1) {
            var ft = Pc(h);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), Lc(ft, h, k, u, t), pl(Qi(y, k));
              break e;
            }
          }
          u = y = Qi(y, k), pt !== 4 && (pt = 2), Hs === null ? Hs = [u] : Hs.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = _c(u, y, t);
                nc(u, P);
                break e;
              case 1:
                k = y;
                var S = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ni === null || !ni.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var re = bc(u, k, t);
                  nc(u, re);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        cd(n);
      } catch (je) {
        t = je, ht === n && n !== null && (ht = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function od() {
    var e = qr.current;
    return qr.current = Wr, e === null ? Wr : e;
  }
  function so() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || (ji & 268435455) === 0 && (ea & 268435455) === 0 || ri(yt, St);
  }
  function aa(e, t) {
    var n = ze;
    ze |= 2;
    var i = od();
    (yt !== e || St !== t) && (In = null, Si(e, t));
    do
      try {
        Am();
        break;
      } catch (l) {
        ld(e, l);
      }
    while (!0);
    if (kl(), ze = n, qr.current = i, ht !== null) throw Error(o(261));
    return yt = null, St = 0, pt;
  }
  function Am() {
    for (; ht !== null; ) ud(ht);
  }
  function Pm() {
    for (; ht !== null && !Bn(); ) ud(ht);
  }
  function ud(e) {
    var t = hd(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? cd(e) : ht = t, Yl.current = null;
  }
  function cd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Nm(n, t, Wt), n !== null) {
          ht = n;
          return;
        }
      } else {
        if (n = Em(n, t), n !== null) {
          n.flags &= 32767, ht = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pt = 6, ht = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ht = t;
        return;
      }
      ht = t = e;
    } while (t !== null);
    pt === 0 && (pt = 5);
  }
  function wi(e, t, n) {
    var i = Qe, l = an.transition;
    try {
      an.transition = null, Qe = 1, Lm(e, t, n, i);
    } finally {
      an.transition = l, Qe = i;
    }
    return null;
  }
  function Lm(e, t, n, i) {
    do
      Zi();
    while (ii !== null);
    if ((ze & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (hh(e, u), e === yt && (ht = yt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || na || (na = !0, md(bn, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = an.transition, an.transition = null;
      var h = Qe;
      Qe = 1;
      var k = ze;
      ze |= 4, Yl.current = null, Tm(e, n), ed(n, e), qh(sl), kr = !!il, sl = il = null, e.current = n, Mm(n), B(), ze = k, Qe = h, an.transition = u;
    } else e.current = n;
    if (na && (na = !1, ii = e, ia = l), u = e.pendingLanes, u === 0 && (ni = null), lh(n.stateNode), Dt(e, le()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ta) throw ta = !1, e = Zl, Zl = null, e;
    return (ia & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === ql ? Gs++ : (Gs = 0, ql = e) : Gs = 0, Zn(), null;
  }
  function Zi() {
    if (ii !== null) {
      var e = Zo(ia), t = an.transition, n = Qe;
      try {
        if (an.transition = null, Qe = 16 > e ? 16 : e, ii === null) var i = !1;
        else {
          if (e = ii, ii = null, ia = 0, (ze & 6) !== 0) throw Error(o(331));
          var l = ze;
          for (ze |= 4, me = e.current; me !== null; ) {
            var u = me, h = u.child;
            if ((me.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var y = 0; y < k.length; y++) {
                  var O = k[y];
                  for (me = O; me !== null; ) {
                    var Z = me;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ks(8, Z, u);
                    }
                    var ne = Z.child;
                    if (ne !== null) ne.return = Z, me = ne;
                    else for (; me !== null; ) {
                      Z = me;
                      var J = Z.sibling, fe = Z.return;
                      if (Yc(Z), Z === O) {
                        me = null;
                        break;
                      }
                      if (J !== null) {
                        J.return = fe, me = J;
                        break;
                      }
                      me = fe;
                    }
                  }
                }
                var ve = u.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var ft = ye.sibling;
                      ye.sibling = null, ye = ft;
                    } while (ye !== null);
                  }
                }
                me = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, me = h;
            else e: for (; me !== null; ) {
              if (u = me, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ks(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, me = P;
                break e;
              }
              me = u.return;
            }
          }
          var S = e.current;
          for (me = S; me !== null; ) {
            h = me;
            var R = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && R !== null) R.return = h, me = R;
            else e: for (h = S; me !== null; ) {
              if (k = me, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, k);
                }
              } catch (je) {
                ot(k, k.return, je);
              }
              if (k === h) {
                me = null;
                break e;
              }
              var re = k.sibling;
              if (re !== null) {
                re.return = k.return, me = re;
                break e;
              }
              me = k.return;
            }
          }
          if (ze = l, Zn(), gn && typeof gn.onPostCommitFiberRoot == "function") try {
            gn.onPostCommitFiberRoot(dr, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Qe = n, an.transition = t;
      }
    }
    return !1;
  }
  function dd(e, t, n) {
    t = Qi(n, t), t = _c(e, t, 1), e = ei(e, t, 1), t = At(), e !== null && (vs(e, 1, t), Dt(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) dd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        dd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ni === null || !ni.has(i))) {
          e = Qi(n, e), e = bc(t, e, 1), t = ei(t, e, 1), e = At(), t !== null && (vs(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Rm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, yt === e && (St & n) === n && (pt === 4 || pt === 3 && (St & 130023424) === St && 500 > le() - Xl ? Si(e, 0) : Jl |= n), Dt(e, t);
  }
  function fd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = hr, hr <<= 1, (hr & 130023424) === 0 && (hr = 4194304)));
    var n = At();
    e = $n(e, t), e !== null && (vs(e, t, n), Dt(e, n));
  }
  function $m(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), fd(e, n);
  }
  function Om(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(t), fd(e, n);
  }
  var hd;
  hd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $t.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, wm(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, st && (t.flags & 1048576) !== 0 && Gu(t, $r, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Jr(e, t), e = t.pendingProps;
        var l = zi(t, Et.current);
        Gi(t, n), l = Ml(null, t, i, e, l, n);
        var u = _l();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(i) ? (u = !0, Pr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xl(t), l.updater = Qr, t.stateNode = l, l._reactInternals = t, $l(t, i, e, n), t = Dl(null, t, i, !0, u, n)) : (t.tag = 0, st && u && dl(t), bt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Jr(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Im(i), e = fn(i, e), l) {
            case 0:
              t = Il(null, t, i, e, n);
              break e;
            case 1:
              t = Dc(null, t, i, e, n);
              break e;
            case 11:
              t = Rc(null, t, i, e, n);
              break e;
            case 14:
              t = $c(null, t, i, fn(i.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : fn(i, l), Il(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : fn(i, l), Dc(e, t, i, l, n);
      case 3:
        e: {
          if (zc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, tc(e, t), Br(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Qi(Error(o(423)), t), t = Bc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Qi(Error(o(424)), t), t = Bc(e, t, i, n, l);
            break e;
          } else for (Gt = Yn(t.stateNode.containerInfo.firstChild), Ht = t, st = !0, dn = null, n = qu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ki(), i === l) {
              t = Fn(e, t, n);
              break e;
            }
            bt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return sc(t), e === null && ml(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, rl(i, l) ? h = null : u !== null && rl(i, u) && (t.flags |= 32), Ic(e, t), bt(e, t, h, n), t.child;
      case 6:
        return e === null && ml(t), null;
      case 13:
        return Vc(e, t, n);
      case 4:
        return Sl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ui(t, null, i, n) : bt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : fn(i, l), Rc(e, t, i, l, n);
      case 7:
        return bt(e, t, t.pendingProps, n), t.child;
      case 8:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, qe(Ir, i._currentValue), i._currentValue = h, u !== null) if (cn(u.value, h)) {
            if (u.children === l.children && !$t.current) {
              t = Fn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var y = k.firstContext; y !== null; ) {
                if (y.context === i) {
                  if (u.tag === 1) {
                    y = On(-1, n & -n), y.tag = 2;
                    var O = u.updateQueue;
                    if (O !== null) {
                      O = O.shared;
                      var Z = O.pending;
                      Z === null ? y.next = y : (y.next = Z.next, Z.next = y), O.pending = y;
                    }
                  }
                  u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), gl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(o(341));
              h.lanes |= n, k = h.alternate, k !== null && (k.lanes |= n), gl(h, n, t), h = u.sibling;
            } else h = u.child;
            if (h !== null) h.return = u;
            else for (h = u; h !== null; ) {
              if (h === t) {
                h = null;
                break;
              }
              if (u = h.sibling, u !== null) {
                u.return = h.return, h = u;
                break;
              }
              h = h.return;
            }
            u = h;
          }
          bt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = sn(l), i = i(l), t.flags |= 1, bt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = fn(i, t.pendingProps), l = fn(i.type, l), $c(e, t, i, l, n);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : fn(i, l), Jr(e, t), t.tag = 1, Ot(i) ? (e = !0, Pr(t)) : e = !1, Gi(t, n), Tc(t, i, l), $l(t, i, l, n), Dl(null, t, i, !0, e, n);
      case 19:
        return Uc(e, t, n);
      case 22:
        return Fc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function md(e, t) {
    return cr(e, t);
  }
  function Fm(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, t, n, i) {
    return new Fm(e, t, n, i);
  }
  function ro(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Im(e) {
    if (typeof e == "function") return ro(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === we) return 11;
      if (e === Ee) return 14;
    }
    return 2;
  }
  function ai(e, t) {
    var n = e.alternate;
    return n === null ? (n = ln(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function la(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") ro(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case b:
        return Ni(n.children, l, u, t);
      case F:
        h = 8, l |= 8;
        break;
      case se:
        return e = ln(12, n, t, l | 2), e.elementType = se, e.lanes = u, e;
      case X:
        return e = ln(13, n, t, l), e.elementType = X, e.lanes = u, e;
      case ue:
        return e = ln(19, n, t, l), e.elementType = ue, e.lanes = u, e;
      case he:
        return oa(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ee:
            h = 10;
            break e;
          case ge:
            h = 9;
            break e;
          case we:
            h = 11;
            break e;
          case Ee:
            h = 14;
            break e;
          case be:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = ln(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function Ni(e, t, n, i) {
    return e = ln(7, e, i, t), e.lanes = n, e;
  }
  function oa(e, t, n, i) {
    return e = ln(22, e, i, t), e.elementType = he, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ao(e, t, n) {
    return e = ln(6, e, null, t), e.lanes = n, e;
  }
  function lo(e, t, n) {
    return t = ln(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Dm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ra(0), this.expirationTimes = Ra(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ra(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function oo(e, t, n, i, l, u, h, k, y) {
    return e = new Dm(e, t, n, k, y), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = ln(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xl(u), e;
  }
  function zm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function pd(e) {
    if (!e) return Xn;
    e = e._reactInternals;
    e: {
      if (Mn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ot(n)) return Ku(e, n, t);
    }
    return t;
  }
  function vd(e, t, n, i, l, u, h, k, y) {
    return e = oo(n, i, !0, e, l, u, h, k, y), e.context = pd(null), n = e.current, i = At(), l = si(n), u = On(i, l), u.callback = t ?? null, ei(n, u, l), e.current.lanes = l, vs(e, l, i), Dt(e, i), e;
  }
  function ua(e, t, n, i) {
    var l = t.current, u = At(), h = si(l);
    return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = ei(l, t, h), e !== null && (pn(e, l, h, u), zr(e, l, h)), h;
  }
  function ca(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function kd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function uo(e, t) {
    kd(e, t), (e = e.alternate) && kd(e, t);
  }
  function Bm() {
    return null;
  }
  var yd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function co(e) {
    this._internalRoot = e;
  }
  da.prototype.render = co.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    ua(e, t, null, null);
  }, da.prototype.unmount = co.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xi(function() {
        ua(null, e, null, null);
      }), t[An] = null;
    }
  };
  function da(e) {
    this._internalRoot = e;
  }
  da.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = tu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++) ;
      Gn.splice(n, 0, e), n === 0 && su(e);
    }
  };
  function fo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function fa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gd() {
  }
  function Vm(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var O = ca(h);
          u.call(O);
        };
      }
      var h = vd(t, i, e, 0, null, !1, !1, "", gd);
      return e._reactRootContainer = h, e[An] = h.current, bs(e.nodeType === 8 ? e.parentNode : e), xi(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var O = ca(y);
        k.call(O);
      };
    }
    var y = oo(e, 0, !1, null, null, !1, !1, "", gd);
    return e._reactRootContainer = y, e[An] = y.current, bs(e.nodeType === 8 ? e.parentNode : e), xi(function() {
      ua(t, y, n, i);
    }), y;
  }
  function ha(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var y = ca(h);
          k.call(y);
        };
      }
      ua(t, h, e, l);
    } else h = Vm(n, t, e, l, i);
    return ca(h);
  }
  qo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ps(t.pendingLanes);
          n !== 0 && ($a(t, n | 1), Dt(t, le()), (ze & 6) === 0 && (Xi = le() + 500, Zn()));
        }
        break;
      case 13:
        xi(function() {
          var i = $n(e, 1);
          if (i !== null) {
            var l = At();
            pn(i, e, 1, l);
          }
        }), uo(e, 1);
    }
  }, Oa = function(e) {
    if (e.tag === 13) {
      var t = $n(e, 134217728);
      if (t !== null) {
        var n = At();
        pn(t, e, 134217728, n);
      }
      uo(e, 134217728);
    }
  }, eu = function(e) {
    if (e.tag === 13) {
      var t = si(e), n = $n(e, t);
      if (n !== null) {
        var i = At();
        pn(n, e, t, i);
      }
      uo(e, t);
    }
  }, tu = function() {
    return Qe;
  }, nu = function(e, t) {
    var n = Qe;
    try {
      return Qe = e, t();
    } finally {
      Qe = n;
    }
  }, Lt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Le(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = br(i);
              if (!l) throw Error(o(90));
              ie(i), Le(i, l);
            }
          }
        }
        break;
      case "textarea":
        Ve(e, n);
        break;
      case "select":
        t = n.value, t != null && Xe(e, !!n.multiple, t, !1);
    }
  }, ar = no, Fe = xi;
  var Km = { usingClientEntryPoint: !1, Events: [Ls, Ii, br, kn, yn, no] }, Ws = { findFiberByHostInstance: hi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Um = { bundleType: Ws.bundleType, version: Ws.version, rendererPackageName: Ws.rendererPackageName, rendererConfig: Ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = hs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ws.findFiberByHostInstance || Bm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ma.isDisabled && ma.supportsFiber) try {
      dr = ma.inject(Um), gn = ma;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Km, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fo(t)) throw Error(o(200));
    return zm(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!fo(e)) throw Error(o(299));
    var n = !1, i = "", l = yd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = oo(e, 1, !1, null, null, n, !1, i, l), e[An] = t.current, bs(e.nodeType === 8 ? e.parentNode : e), new co(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = hs(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return xi(e);
  }, zt.hydrate = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!fo(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = yd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = vd(t, null, e, 1, n ?? null, l, !1, u, h), e[An] = t.current, bs(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new da(t);
  }, zt.render = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!fa(e)) throw Error(o(40));
    return e._reactRootContainer ? (xi(function() {
      ha(null, null, e, !1, function() {
        e._reactRootContainer = null, e[An] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = no, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!fa(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ha(e, t, n, !1, i);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Td;
function qm() {
  if (Td) return po.exports;
  Td = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), po.exports = Zm(), po.exports;
}
var Md;
function ep() {
  if (Md) return pa;
  Md = 1;
  var r = qm();
  return pa.createRoot = r.createRoot, pa.hydrateRoot = r.hydrateRoot, pa;
}
var tp = ep();
const np = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], d = [64, 59, 55, 50, 45, 40], c = d.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], w = ["e", "B", "G", "D", "A", "E"], L = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], g = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], M = {
    mp: {
      name: "mollipentatoninen",
      base: v,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: v,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: v,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: v,
      add: [[2, "2"], [8, "♭6"]],
      hint: "Aiolinen on luonnollinen molli."
    },
    locrian: {
      name: "lokrinen",
      base: [[0, "1"], [3, "♭3"], [5, "4"], [10, "♭7"]],
      add: [[1, "♭2"], [6, "♭5"], [8, "♭6"]],
      hint: "Mollipentatoninen boksi toimii vertailukohtana. Lokrinen käyttää puhtaan kvintin tilalla alennettua kvinttiä."
    },
    majp: {
      name: "duuripentatoninen",
      base: g,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: g,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: g,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: g,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, $ = 26, T = 72, N = 30, x = 54, I = 34, E = 11, H = ($ + T) / 2, K = N + (d.length - 1) * I + 30, G = (U) => T + U * x, D = (U) => U === 0 ? H : G(U) - x / 2, b = (U) => N + U * I;
  function F(U, te, q) {
    const pe = a.indexOf(r[U][0]) + Number(q.slice(-1)) - 1, z = pe % a.length, ie = o[z] + 12 * Math.floor(pe / a.length), ae = U + te - ie;
    return a[z] + (ae < 0 ? "♭" : "♯").repeat(Math.abs(ae));
  }
  function se(U) {
    return [...U.base, ...U.add].sort((te, q) => te[0] - q[0]);
  }
  function ee(U, te, q) {
    const pe = te + (q ? 1 : 0), z = m[pe % m.length], ie = Math.min(...z.map(([Le]) => Le)), ae = Math.max(...z.map(([, Le]) => Le));
    let xe = (U - c % 12 + 12) % 12 - (q ? 8 : 5) + 12 * Math.floor(pe / m.length);
    return ie + xe < 0 && (xe += 12), ae + xe > f.pentatonic && (xe -= 12), {
      strings: z.map((Le) => Le.map((He) => He + xe)),
      start: ie + xe,
      end: ae + xe
    };
  }
  function ge(U, te, q) {
    const pe = q[te], z = (U + pe - c % 12 + 12) % 12, ie = c + z - pe, ae = d.map((de, Se) => {
      const xe = te + (d.length - 1 - Se) * 3;
      return [xe, xe + 1, xe + 2].map((Le) => {
        const He = Math.floor(Le / q.length), Ye = q[Le % q.length];
        return ie + Ye + 12 * He - de;
      });
    });
    return {
      strings: ae,
      start: Math.min(...ae.map((de) => de[0])),
      end: Math.max(...ae.map((de) => de.at(-1)))
    };
  }
  function we(U, te) {
    const q = [], pe = Math.ceil(-U.end / 12) * 12;
    for (let ie = pe; U.start + ie <= te; ie += 12) {
      const ae = U.strings.map((Se) => Se.map((xe) => xe + ie).filter((xe) => xe >= 0 && xe <= te)), de = ae.flat();
      q.push({
        strings: ae,
        start: Math.min(...de),
        end: Math.max(...de),
        partial: U.start + ie < 0 || U.end + ie > te
      });
    }
    const z = q.filter((ie) => !ie.partial);
    return z.length ? z : q;
  }
  function X(U) {
    return se(U).length === p;
  }
  function ue(U, te, q) {
    const pe = X(te);
    U.querySelector('[value="3nps"]').disabled = !pe, U.value = pe ? q ?? "3nps" : "pentatonic";
  }
  function Ee(U, te, q, pe, z) {
    const ie = se(te).map(([ae]) => ae);
    return pe.map((ae) => {
      const de = ae - 1, Se = q === "3nps" ? ge(U, de, ie) : ee(U, de, te.base === g), xe = z === void 0 ? [Se] : we(Se, z);
      return { number: ae, positions: xe };
    });
  }
  function be(U, te) {
    const q = U.getBoundingClientRect(), pe = U.querySelectorAll(te);
    let z = 1 / 0;
    pe.forEach((ie) => {
      const ae = ie.getBoundingClientRect();
      let de = 0;
      ae.left < q.left ? de = ae.left - q.left - 8 : ae.right > q.right && (de = ae.right - q.right + 8), Math.abs(de) < Math.abs(z) && (z = de);
    }), Number.isFinite(z) && (U.scrollLeft += z);
  }
  function he(U, te = !1) {
    const q = U === "3nps" ? p : m.length;
    return Array.from({ length: q }, (pe, z) => {
      const ie = z + 1;
      return '<label class="box-toggle" data-box="' + ie + '"><input type="checkbox" value="' + ie + '"' + (te && z === 0 ? " checked" : "") + "> Boksi " + ie + "</label>";
    }).join("");
  }
  function A(U, te) {
    const q = se(te), pe = new Map(q.map(([ie, ae]) => [ie, F(U, ie, ae)])), z = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return q.flatMap(([ie, ae]) => z.flatMap(({ suffix: de, base: Se }) => {
      const xe = Se.map(([Le]) => pe.get((ie + Le) % 12));
      return xe.every(Boolean) ? {
        root: (U + ie) % 12,
        degree: Number(String(ae).replace(/\D/g, "")),
        name: xe[0] + de,
        notes: xe,
        base: Se,
        add: []
      } : [];
    }));
  }
  function Q(U, te) {
    const q = U.base.map(([ie]) => (U.root + ie) % 12), pe = d.map((ie) => {
      const ae = [];
      for (let de = 0; de <= te; de++) {
        const Se = (ie + de) % 12;
        q.includes(Se) && ae.push({ fret: de, pitch: Se });
      }
      return ae;
    }), z = [];
    for (let ie = 0; ie <= pe.length - 3; ie++)
      for (const ae of pe[ie])
        for (const de of pe[ie + 1])
          if (ae.pitch !== de.pitch)
            for (const Se of pe[ie + 2]) {
              if (Se.pitch === ae.pitch || Se.pitch === de.pitch) continue;
              const xe = [ae.fret, de.fret, Se.fret], Le = Math.min(...xe), He = Math.max(...xe);
              if (He - Le > 3) continue;
              const Ye = Array(d.length).fill(null);
              Ye.splice(ie, 3, ...xe), z.push({ strings: Ye, low: Le, high: He });
            }
    return z.sort((ie, ae) => ie.high - ae.high || ie.low - ae.low);
  }
  const Y = {
    "0:": [null, 3, 2, 0, 1, 0],
    "2:": [null, null, 0, 2, 3, 2],
    "4:": [0, 2, 2, 1, 0, 0],
    "7:": [3, 2, 0, 0, 0, 3],
    "9:": [null, 0, 2, 2, 2, 0],
    "2:m": [null, null, 0, 2, 3, 1],
    "4:m": [0, 2, 2, 0, 0, 0],
    "9:m": [null, 0, 2, 2, 1, 0],
    "0:7": [null, 3, 2, 3, 1, 0],
    "2:7": [null, null, 0, 2, 1, 2],
    "4:7": [0, 2, 0, 1, 0, 0],
    "7:7": [3, 2, 0, 0, 0, 1],
    "9:7": [null, 0, 2, 0, 2, 0],
    "11:7": [null, 2, 1, 2, 0, 2],
    "2:m7": [null, null, 0, 2, 1, 1],
    "4:m7": [0, 2, 0, 0, 0, 0],
    "9:m7": [null, 0, 2, 0, 1, 0],
    "0:maj7": [null, 3, 2, 0, 0, 0],
    "2:maj7": [null, null, 0, 2, 2, 2],
    "4:maj7": [0, 2, 1, 1, 0, 0],
    "5:maj7": [null, null, 3, 2, 1, 0],
    "7:maj7": [3, 2, 0, 0, 0, 2],
    "9:maj7": [null, 0, 2, 1, 2, 0],
    "2:5": [null, null, 0, 2, 3, null]
  }, j = [
    { string: 0, openPC: 4, shapes: {
      "": [0, 2, 2, 1, 0, 0],
      m: [0, 2, 2, 0, 0, 0],
      7: [0, 2, 0, 1, 0, 0],
      m7: [0, 2, 0, 0, 0, 0],
      maj7: [0, null, 1, 1, 0, null],
      9: [0, 2, 0, 1, 0, 2],
      "m7♭5": [0, null, 0, 0, -1, null],
      "°": [0, 1, 2, 0, null, null],
      5: [0, 2, 2, null, null, null],
      "5♭5": [0, 1, 2, null, null, null]
    } },
    { string: 1, openPC: 9, shapes: {
      "": [null, 0, 2, 2, 2, 0],
      m: [null, 0, 2, 2, 1, 0],
      7: [null, 0, 2, 0, 2, 0],
      m7: [null, 0, 2, 0, 1, 0],
      maj7: [null, 0, 2, 1, 2, 0],
      9: [null, 0, -1, 0, 0, 0],
      "m7♭5": [null, 0, 1, 0, 1, null],
      "°": [null, 0, 1, 2, 1, null],
      5: [null, 0, 2, 2, null, null],
      "5♭5": [null, 0, 1, 2, null, null]
    } }
  ];
  function C(U, te) {
    const q = Y[U + ":" + te];
    if (q) return { frets: q, barre: null };
    let pe = null;
    return j.forEach(({ string: z, openPC: ie, shapes: ae }) => {
      const de = ae[te];
      if (!de) return;
      let Se = (U - ie + 12) % 12;
      if (Se + Math.min(...de.filter((He) => He !== null)) < 0 && (Se += 12), pe && pe.fret <= Se) return;
      const xe = de.map((He) => He === null ? null : Se + He), Le = Se > 0 && de.at(-1) === 0 ? { fret: Se, from: z, to: de.length - 1 } : null;
      pe = { fret: Se, frets: xe, barre: Le };
    }), pe && { frets: pe.frets, barre: pe.barre };
  }
  function oe(U, { frets: te, barre: q }, pe) {
    const xe = [...d].reverse(), Le = te.filter((Ve) => Ve > 0), Ye = !Le.length || Math.max(...Le) <= 4 && (te.includes(0) || Math.min(...Le) === 1) ? 1 : Math.min(...Le), We = (Ve) => 24 + Ve * 14, Xe = (Ve) => 30 + (Ve - Ye) * 18 + 18 / 2, ut = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (ut + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + pe + "-ote paksusta kielestä ohueen: " + te.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Je += '<line class="' + (Ve === 0 && Ye === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + We(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return te.forEach((Ve, it) => {
      Je += '<line class="string" x1="' + We(it) + '" y1="30" x2="' + We(it) + '" y2="' + ut + '"/>';
    }), Ye > 1 && (Je += '<text class="fret-label" x="15" y="' + (Xe(Ye) + 4) + '">' + Ye + "</text>"), q && (Je += '<rect class="barre" x="' + (We(q.from) - 6.5) + '" y="' + (Xe(q.fret) - 6.5) + '" width="' + ((q.to - q.from) * 14 + 13) + '" height="13" rx="6.5"/>'), te.forEach((Ve, it) => {
      if (Ve === null) {
        Je += '<text class="marker" x="' + We(it) + '" y="22">×</text>';
        return;
      }
      const Bt = (xe[it] + Ve) % 12 === U;
      if (Ve === 0) {
        Je += '<circle class="open' + (Bt ? " root-open" : "") + '" cx="' + We(it) + '" cy="18" r="4.5"/>';
        return;
      }
      q && Ve === q.fret && it >= q.from && it <= q.to && !Bt || (Je += '<circle class="' + (Bt ? "root" : "tone") + '" cx="' + We(it) + '" cy="' + Xe(Ve) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function V(U, te) {
    const q = new URLSearchParams(location.search), pe = r.indexOf(q.get("toonikka")), z = q.get("asteikko");
    return {
      rootPC: pe === -1 ? U : pe,
      scaleId: Object.hasOwn(M, z) ? z : te
    };
  }
  function ce(U, te, q) {
    return U + "?" + new URLSearchParams({ toonikka: r[te], asteikko: q });
  }
  function W(U, te, q, {
    boxes: pe = [],
    onlyBoxNotes: z = !1,
    automatic: ie = !0,
    focusDegree: ae = "",
    grip: de = null,
    barre: Se = null,
    label: xe = r[U] + " " + te.name,
    notes: Le = null,
    targets: He = !1,
    muteFret: Ye = null
  } = {}) {
    const We = G(q), Xe = We + 48, ut = Xe + 28, Je = N - 14, Ve = b(d.length - 1) + 14, it = Ve - Je, Bt = ie ? 680 : Math.ceil(ut * 0.64), Jt = pe.flatMap((Me) => Me.positions), Nt = {};
    te.base.forEach(([Me, Pe]) => Nt[(U + Me) % 12] = { deg: Pe, added: !1 }), te.add.forEach(([Me, Pe]) => Nt[(U + Me) % 12] = { deg: Pe, added: !0 });
    const on = d.map((Me, Pe) => !!de && de[Pe] === null), Xt = !!de && Ye !== null, Zt = L.filter((Me, Pe) => on[Pe]).reverse(), _t = xe + ". " + q + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Zt.length ? " Soittamatta jäävät kielet: " + Zt.join(", ") + "." : "");
    let Ne = '<svg viewBox="0 0 ' + ut + " " + K + '" style="min-width:' + Bt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (He ? "group" : "img") + '" aria-label="' + _t + '">';
    Ne += '<rect x="' + $ + '" y="' + Je + '" width="' + (T - $) + '" height="' + it + '" rx="6" fill="#2a2338"/>', Ne += '<rect x="' + T + '" y="' + Je + '" width="' + (We - T) + '" height="' + it + '" fill="#231a12"/>', Ne += '<rect x="' + We + '" y="' + Je + '" width="' + (ut - We - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let Me = 1; Me <= q; Me++)
      Ne += '<line x1="' + G(Me) + '" y1="' + Je + '" x2="' + G(Me) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    Ne += '<rect x="' + (T - 3) + '" y="' + Je + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', Ne += '<rect x="' + (Xe - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', Ne += '<rect x="' + (Xe - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Vt = (Je + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Me) => Me <= q).forEach((Me) => Ne += '<circle cx="' + D(Me) + '" cy="' + Vt + '" r="5.5" fill="#7a6550"/>');
    for (let Me = 12; Me <= q; Me += 12)
      Ne += '<circle cx="' + D(Me) + '" cy="' + (Vt - I) + '" r="5.5" fill="#7a6550"/>', Ne += '<circle cx="' + D(Me) + '" cy="' + (Vt + I) + '" r="5.5" fill="#7a6550"/>';
    Ne += '<text x="' + H + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', Ne += '<text x="' + T + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', Ne += '<text x="' + Xe + '" y="' + (K - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Me = 1; Me <= q; Me++)
      Ne += '<text x="' + D(Me) + '" y="' + (K - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Me + "</text>";
    if (pe.forEach(({ number: Me, positions: Pe }) => {
      Pe.forEach((Re) => {
        const Ge = Re.partial ? "box-highlight box-partial" : "box-highlight";
        Ne += '<g class="' + Ge + '" data-box="' + Me + '" aria-hidden="true">';
        const rt = Re.strings.find((vt) => vt.length), Lt = (D(rt[0]) + D(rt.at(-1))) / 2;
        Ne += '<text class="box-number" x="' + Lt + '" y="12">' + Me + "</text>", Re.strings.forEach((vt, qt) => {
          if (!vt.length) return;
          const Cn = D(vt[0]) - 16, kn = D(vt.at(-1)) - D(vt[0]) + 32;
          Ne += '<rect class="box-band" x="' + Cn + '" y="' + (b(qt) - 14) + '" width="' + kn + '" height="28" rx="14"/>';
        }), Ne += "</g>";
      });
    }), d.forEach((Me, Pe) => {
      const Re = 1 + Pe * 0.45, Ge = b(Pe), rt = on[Pe] && !Xt;
      rt ? Ne += '<text class="muted-mark" x="' + H + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : on[Pe] && Ye === 0 || (Ne += '<line x1="' + ($ + 4) + '" y1="' + Ge + '" x2="' + (T - 4) + '" y2="' + Ge + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Ne += "<g" + (rt ? ' opacity=".35"' : "") + ">", Ne += '<line x1="' + T + '" y1="' + Ge + '" x2="' + (Xe + 5) + '" y2="' + Ge + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', Ne += '<circle cx="' + (Xe + 5) + '" cy="' + Ge + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', Ne += "</g>", Ne += '<text x="13" y="' + (Ge + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + w[Pe] + "</text>";
    }), de && Se && Se.fret >= 1 && Se.fret <= q) {
      const Me = b(Se.from), Pe = b(Se.to), Re = Math.min(Me, Pe) - 6, Ge = Math.max(Me, Pe) + 6;
      Ne += '<rect class="barre-indicator" x="' + (D(Se.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Ge - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return He && (Ne += '<g class="fret-targets">', d.forEach((Me, Pe) => {
      for (let Re = 0; Re <= q; Re++) {
        const Ge = Re ? L[Pe] + "-kieli, " + Re + ". nauha" : "vapaa " + L[Pe] + "-kieli", rt = Re ? x : T - $ - 6;
        Ne += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Pe + '" data-fret="' + Re + '" data-midi="' + (Me + Re) + '" aria-label="' + Ge + '" x="' + (D(Re) - rt / 2) + '" y="' + (b(Pe) - I / 2) + '" width="' + rt + '" height="' + I + '" fill="transparent"/>';
      }
    }), Ne += "</g>"), (Le ?? []).forEach(({ string: Me, fret: Pe, label: Re, kind: Ge }) => {
      Ne += '<g class="octave-note octave-' + Ge + '">', Ne += '<circle cx="' + D(Pe) + '" cy="' + b(Me) + '" r="' + E + '"/>', Ne += '<text x="' + D(Pe) + '" y="' + (b(Me) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", Ne += "</g>";
    }), de && (Ne += '<g class="grip-notes">'), (Le ? [] : d).forEach((Me, Pe) => {
      for (let Re = 0; Re <= q; Re++) {
        const Ge = (Me + Re) % 12;
        if (!(Ge in Nt) || de && de[Pe] !== Re || z && !Jt.some(({ strings: kn }) => {
          const yn = kn[Pe];
          return yn.length > 0 && Re >= yn[0] && Re <= yn.at(-1);
        })) continue;
        const rt = Nt[Ge], Lt = rt.deg === "1", vt = rt.added ? "#f0a13c" : Lt ? "#4b2fd6" : "#6d4aff", qt = rt.added ? "#1a1430" : "#fff";
        rt.deg === ae && (Ne += '<circle class="focus-note" cx="' + D(Re) + '" cy="' + b(Pe) + '" r="14.5"/>');
        const Cn = de ? ' data-string="' + (Pe + 1) + '" data-fret="' + Re + '" data-degree="' + rt.deg + '"' : "";
        Ne += "<circle" + Cn + ' cx="' + D(Re) + '" cy="' + b(Pe) + '" r="' + E + '" fill="' + vt + '" stroke="' + (Lt ? "#fff" : "#1a1430") + '" stroke-width="' + (Lt ? 2.5 : 1) + '"/>', Ne += '<text x="' + D(Re) + '" y="' + (b(Pe) + 3.5) + '" font-size="' + (rt.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + qt + '" text-anchor="middle">' + rt.deg + "</text>";
      }
    }), de && (Ne += "</g>"), Xt && on.forEach((Me, Pe) => {
      if (!Me) return;
      const Re = D(Ye), Ge = b(Pe);
      Ne += '<g class="muted-mark grip-mute" data-string="' + (Pe + 1) + '" data-fret="' + Ye + '">', Ne += '<circle cx="' + Re + '" cy="' + Ge + '" r="9" fill="' + (Ye === 0 ? "#2a2338" : "#231a12") + '"/>', Ne += '<text x="' + Re + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Ne += "</g>";
    }), Ne += "</svg>", Ne;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: d,
    PENT_MAJ: g,
    SCALES: M,
    noteName: F,
    scaleNotes: se,
    scaleTriads: A,
    triadGrips: Q,
    chordGrip: C,
    renderChordDiagram: oe,
    selectionFromURL: V,
    selectionHref: ce,
    renderBoard: W,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: X,
    syncBoxSystem: ue,
    fingeringBoxes: Ee,
    boxOptions: he,
    revealPositions: be
  };
})();
globalThis.MusicMapFretboard = np;
function yo(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function ip(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function sp(r) {
  const a = ip(r), o = Math.round(a), d = (a - o) * 100;
  return { midi: o, cents: d };
}
const Ie = globalThis.MusicMapFretboard, Be = (r) => (r % 12 + 12) % 12, rp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], ap = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ae = (r, a = !1, o = !1) => (a ? ap : rp)[Be(r)] + (o ? Math.floor(r / 12) - 1 : ""), ui = (r) => Ie.CHROM[Be(r)], qs = (r, a, o) => Ie.noteName(Be(r), a, o);
function lp(r, a) {
  const o = Math.floor(r / 12) - 1;
  return a[0] === "B" && Be(r) < 2 ? o - 1 : a[0] === "C" && Be(r) > 9 ? o + 1 : o;
}
const Qt = ["ohut E", "B", "G", "D", "A", "paksu E"], Ho = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Nf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], op = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ti = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, Oe = (r, a) => ({ string: r, fret: a, midi: Ie.OPEN_PITCHES[r] + a });
function us(r, a, o) {
  return [...r].sort((d, c) => d - c).flatMap((d) => Array.from({ length: Math.max(0, o - a + 1) }, (c, f) => Oe(d, a + f)));
}
const Ue = (r) => `${r.string}:${r.fret}`, Ci = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Ef = (r, a) => a === "maj" ? `${ui(r)}-duurisointu` : a === "min" ? `${ui(r)}-mollisointu` : `${ui(r)}7-sointu`, er = [
  "priimi",
  "pieni sekunti",
  "suuri sekunti",
  "pieni terssi",
  "suuri terssi",
  "puhdas kvartti",
  "tritonus",
  "puhdas kvintti",
  "pieni seksti",
  "suuri seksti",
  "pieni septimi",
  "suuri septimi",
  "oktaavi"
], _d = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Cf(r, a) {
  const o = _d[a] ?? _d.E, d = Be(r - o.root);
  return o.frets.flatMap((c, f) => c === null ? [] : [Oe(f, c + d)]);
}
const ga = {
  mode: "notes",
  strings: [0, 1, 2, 3, 4, 5],
  min: 0,
  max: 5,
  accidentals: !1,
  flats: !1,
  check: "class",
  input: "board",
  rounds: 10,
  weak: !0,
  root: 9,
  scale: "mp",
  box: 0,
  order: "random",
  chord: "maj",
  chordTone: "build",
  shape: "E",
  intervals: [3, 4, 7],
  direction: "both",
  hints: "off",
  activity: "play",
  advance: !0,
  reference: !0,
  minRms: 0.01,
  clarity: 0.94,
  stability: 240,
  cents: 35,
  device: ""
}, _a = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, oi = (r, a, o, d) => typeof r == "number" && Number.isFinite(r) ? Math.max(a, Math.min(o, r)) : d, Nn = (r, a, o) => a.includes(r) ? r : o;
function Ea(r) {
  const a = { ...ga };
  a.mode = Nn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, d) => o - d) : a.strings, a.strings.length || (a.strings = [...ga.strings]), a.min = Math.round(oi(r.min, 0, 24, a.min)), a.max = Math.round(oi(r.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[o] == "boolean" && (a[o] = r[o]);
  return a.check = Nn(r.check, ["class", "pitch"], a.check), a.input = Nn(r.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : a.rounds, a.root = Math.round(oi(r.root, 0, 11, a.root)), a.scale = typeof r.scale == "string" && Object.hasOwn(Ie.SCALES, r.scale) ? r.scale : a.scale, a.box = Math.round(oi(r.box, 0, 5, a.box)), a.order = Nn(r.order, ["random", "up", "down"], a.order), a.chord = Nn(r.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Nn(r.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Nn(r.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, d) => o - d) : a.intervals, a.intervals.length || (a.intervals = [...ga.intervals]), a.direction = Nn(r.direction, ["up", "down", "both"], a.direction), a.hints = Nn(r.hints, ["off", "always", "fade"], a.hints), a.activity = Nn(r.activity, ["play", "degree"], a.activity), a.minRms = oi(r.minRms, 1e-3, 0.15, a.minRms), a.clarity = oi(r.clarity, 0.85, 0.99, a.clarity), a.stability = oi(r.stability, 120, 800, a.stability), a.cents = oi(r.cents, 10, 45, a.cents), a.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", a;
}
function up(r, a) {
  const o = new URLSearchParams(r), d = { ...a };
  for (const [c, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(c) && Object.assign(d, { [f]: o.get(c) });
  for (const [c, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(c) && (d[f] = Number(o.get(c)));
  o.has("kielet") && (d.strings = o.get("kielet").split(",").map((c) => Number(c) - 1)), o.has("intervallit") && (d.intervals = o.get("intervallit").split(",").map(Number));
  for (const [c, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(c) && (d[f] = o.get(c) === "1");
  if (o.has("toonikka")) {
    const c = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = c.charAt(0).toUpperCase() + c.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ie.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (d.root = m);
  }
  return Ea(d);
}
function cp(r) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: r.mode,
    toonikka: Ie.CHROM[r.root],
    asteikko: r.scale,
    alku: String(r.min),
    loppu: String(r.max),
    boksi: String(r.box),
    kierros: String(r.rounds),
    tarkistus: r.check,
    muoto: r.shape,
    sointu: r.chord,
    jarjestys: r.order,
    vastaus: r.input,
    vihjeet: r.hints,
    tehtava: r.activity,
    sointuaste: r.chordTone,
    suunta: r.direction,
    kielet: r.strings.map((a) => a + 1).join(","),
    intervallit: r.intervals.join(","),
    kromaattinen: r.accidentals ? "1" : "0",
    alennukset: r.flats ? "1" : "0",
    kertaus: r.weak ? "1" : "0",
    vertailu: r.reference ? "1" : "0"
  });
}
const Mi = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, Dn = (r) => r.mode === "scale" && r.order !== "random", Tf = (r) => ["note", "degree"].includes(Mi(r)) ? "class" : Dn(r) ? "pitch" : r.check, va = (r) => Mi(r) === "mic", bd = "musiikin-kartta:harjoittelu", Mf = 3, Mo = () => ({ version: Mf, settings: { ...ga }, stats: {}, recent: [], sessions: [] }), _f = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, vn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function dp(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => vn(r[a])) && r.correct <= r.attempts && (r.errors === void 0 || vn(r.errors)) && (r.ema === void 0 || vn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || vn(r.emaMs));
}
function fp(r) {
  return !!r && typeof r.id == "string" && vn(r.count) && vn(r.first) && r.first <= r.count && vn(r.ms) && vn(r.at) && (r.solo === void 0 || vn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || vn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Ad(r) {
  if (!r) return Mo();
  const a = JSON.parse(r);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !dp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !vn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !fp(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, d = Ea(a.settings ?? {}), c = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  c && (d.hints = "off");
  const f = {
    version: Mf,
    settings: d,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (c || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Pd = 2500, hp = 8e3, Ld = 0.3, tr = (r) => r.ema ?? r.correct / r.attempts, nr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function Go(r) {
  if (!r?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (nr(r) - Pd) / (hp - Pd)));
  return tr(r) * 0.65 + a * 0.35;
}
function mp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - Go(r)) * 3;
}
class Rd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Ad(a?.getItem(bd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Mo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(bd, JSON.stringify(this.data)), this.warning = "";
      } catch {
        this.warning = "Selaintallennus ei onnistu. Tämän käynnin tulokset säilyvät vain sivun aukiolon ajan. Voit ladata varmuuskopion.";
      }
  }
  settings(a) {
    this.data.settings = a, this.save();
  }
  dismissNotice() {
    delete this.data.notice, this.save();
  }
  record(a) {
    if (this.data.recent.some((p) => p.id === a.id)) return;
    const o = _f(a), d = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, c = Number(a.first), f = {
      attempts: d.attempts + 1,
      correct: d.correct + c,
      errors: d.errors + a.errors,
      totalMs: d.totalMs + a.ms,
      lastSeen: a.at,
      ema: d.attempts ? tr(d) + Ld * (c - tr(d)) : c,
      emaMs: d.attempts ? nr(d) + Ld * (a.ms - nr(d)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Ad(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Mo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const pp = 4e3, $d = 12, vp = 1500;
function kp(r, a) {
  const o = r.left + r.stickyLeft, d = r.right;
  let c = 0;
  if (a.left < o ? c = a.left - o - $d : a.right > d && (c = a.right - d + $d), c === 0) return null;
  const f = Math.max(0, Math.min(r.maxScroll, r.scrollLeft + c));
  return Math.abs(f - r.scrollLeft) < 1 ? null : f;
}
function yp(r, a) {
  return a.right <= r.left + r.stickyLeft || a.left >= r.right;
}
function bf(r, a, o, { stickySelector: d, enabled: c = !0, playback: f } = {}) {
  const p = _.useRef(0), m = _.useRef(!1), w = _.useRef(""), L = _.useRef(0), v = _.useRef(f);
  _.useEffect(() => {
    const g = r.current;
    if (!g || !c) return;
    const M = () => {
      p.current = Date.now() + pp;
    }, $ = () => {
      m.current = !0, M();
    }, T = () => {
      m.current && (m.current = !1, M());
    }, N = (x) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(x.key) && M();
    };
    return g.addEventListener("pointerdown", $, { passive: !0 }), g.addEventListener("touchstart", $, { passive: !0 }), g.addEventListener("wheel", M, { passive: !0 }), g.addEventListener("keydown", N), window.addEventListener("pointerup", T, { passive: !0 }), window.addEventListener("pointercancel", T, { passive: !0 }), window.addEventListener("touchend", T, { passive: !0 }), window.addEventListener("touchcancel", T, { passive: !0 }), () => {
      g.removeEventListener("pointerdown", $), g.removeEventListener("touchstart", $), g.removeEventListener("wheel", M), g.removeEventListener("keydown", N), window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), window.removeEventListener("touchend", T), window.removeEventListener("touchcancel", T);
    };
  }, [r, c]), _.useLayoutEffect(() => {
    const g = f !== void 0 && !!f && f !== v.current;
    v.current = f, g && !m.current && (p.current = 0);
  }, [f]), _.useLayoutEffect(() => {
    f === void 0 && w.current === "" && o !== "" && Date.now() - L.current > vp && !m.current && (p.current = 0), w.current !== "" && o === "" && (L.current = Date.now()), w.current = o;
    const g = r.current;
    if (!g || !c || !o || m.current || Date.now() < p.current) return;
    const M = g.querySelector(a);
    if (!M) return;
    const $ = g.getBoundingClientRect(), T = M.getBoundingClientRect(), N = d ? g.querySelector(d) : null, x = N && getComputedStyle(N).position === "sticky" ? N.getBoundingClientRect().width : 0, I = {
      left: $.left,
      right: $.left + g.clientWidth,
      scrollLeft: g.scrollLeft,
      maxScroll: g.scrollWidth - g.clientWidth,
      stickyLeft: x
    }, E = kp(I, T);
    if (E === null) return;
    const K = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || yp(I, T);
    typeof g.scrollTo == "function" ? g.scrollTo({ left: E, behavior: K ? "auto" : "smooth" }) : g.scrollLeft = E;
  }, [r, a, o, d, c, f]);
}
const gp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), jp = ["e", "B", "G", "D", "A", "E"];
function Af({ string: r }) {
  return /* @__PURE__ */ s.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ s.jsxs("span", { children: [
      /* @__PURE__ */ s.jsxs("span", { className: "string-number", children: [
        r + 1,
        " · "
      ] }),
      /* @__PURE__ */ s.jsx("strong", { children: jp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ s.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ s.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Pf = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), xp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Lf({ min: r, max: a }) {
  return /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
    /* @__PURE__ */ s.jsx("th", { scope: "col", children: /* @__PURE__ */ s.jsx("span", { className: "board-head-label", children: "Kielet" }) }),
    Array.from({ length: a - r + 1 }, (o, d) => {
      const c = r + d;
      return /* @__PURE__ */ s.jsxs("th", { scope: "col", className: c === 0 ? "open-fret" : "", children: [
        c,
        c > 0 && c % 12 === 0 ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : gp.has(c) ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, c);
    })
  ] }) });
}
function ci({ area: r, marks: a = [], mutedStrings: o = [], disabled: d = !1, onAnswer: c, caption: f = "Otelauta", follow: p = "hints", playback: m }) {
  const w = { "--cols": r.max - r.min + 1 }, { strings: L, min: v, max: g } = r, [M, $] = _.useState({ string: Math.min(...L), fret: v }), T = _.useRef(null), N = new Map(a.map((G) => [Ue(G), G])), x = a.map((G) => `${Ue(G)}${G.kind}`).join(",");
  _.useEffect(() => {
    if (p !== "hints") return;
    const G = T.current, D = G?.querySelector(".target, .anchor");
    G && D && (G.scrollLeft += D.getBoundingClientRect().left - G.getBoundingClientRect().left - G.clientWidth / 2 + D.clientWidth / 2);
  }, [x, p]), _.useEffect(() => {
    p === "playing" && T.current && (T.current.scrollLeft = 0);
  }, [p, v, g]);
  const I = a.find((G) => G.kind === "playing");
  bf(T, ".playing", I ? Ue(I) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [E, H] = _.useState({ left: !1, right: !1 });
  _.useEffect(() => {
    const G = T.current;
    if (!G) return;
    const D = () => {
      const F = G.scrollLeft > 2, se = G.scrollLeft + G.clientWidth < G.scrollWidth - 2;
      H((ee) => ee.left === F && ee.right === se ? ee : { left: F, right: se });
    };
    D(), G.addEventListener("scroll", D, { passive: !0 });
    const b = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return b?.observe(G), () => {
      G.removeEventListener("scroll", D), b?.disconnect();
    };
  }, [x, v, g]);
  const K = L.includes(M.string) && M.fret >= v && M.fret <= g ? M : { string: Math.min(...L), fret: v };
  return /* @__PURE__ */ s.jsxs("div", { className: "fret-wrap" + (E.left ? " more-left" : "") + (E.right ? " more-right" : ""), children: [
    (E.left || E.right) && /* @__PURE__ */ s.jsxs("p", { className: "fret-scroll-hint", children: [
      E.left && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      E.left && E.right ? "molemmilla puolilla" : E.right ? "oikealla" : "vasemmalla",
      E.right && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { ref: T, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board" + (d && !c ? " display-only" : ""), style: w, children: [
      /* @__PURE__ */ s.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ s.jsx(Lf, { min: v, max: g }),
      /* @__PURE__ */ s.jsx("tbody", { children: Ie.OPEN_PITCHES.map((G, D) => /* @__PURE__ */ s.jsxs("tr", { className: L.includes(D) ? "" : "unused", style: Pf(D), children: [
        /* @__PURE__ */ s.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${Qt[D]}${o.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ s.jsx(Af, { string: D }),
          o.includes(D) && /* @__PURE__ */ s.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        us([D], v, g).map((b) => {
          const F = N.get(Ue(b)), se = `${Qt[D]}-kieli, ${Ti(b.fret)}`;
          return /* @__PURE__ */ s.jsx("td", { className: `${b.fret === 0 ? "open-fret " : ""}${F ? F.kind === "answer" ? "target" : F.kind : ""}`, children: /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": b.fret,
              tabIndex: K.string === D && K.fret === b.fret ? 0 : -1,
              onFocus: () => $(b),
              onKeyDown: (ee) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(ee.key)) return;
                ee.preventDefault();
                const ge = [...L].sort((Ee, be) => Ee - be), we = ge.indexOf(D), X = ee.key === "ArrowUp" ? ge[Math.max(0, we - 1)] : ee.key === "ArrowDown" ? ge[Math.min(ge.length - 1, we + 1)] : D, ue = ee.key === "Home" ? v : ee.key === "End" ? g : Math.max(v, Math.min(g, b.fret + (ee.key === "ArrowRight" ? 1 : ee.key === "ArrowLeft" ? -1 : 0)));
                ee.currentTarget.closest("table")?.querySelector(`button[data-string="${X}"][data-fret="${ue}"]`)?.focus();
              },
              disabled: d || !L.includes(D),
              "aria-label": se + (F ? `, ${xp[F.kind]}${F.label ? " " + F.label : ""}` : ""),
              onClick: () => c?.(b),
              children: F ? /* @__PURE__ */ s.jsx("span", { className: "dot", children: F.label || "●" }) : null
            }
          ) }, b.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function Sp({ area: r, stats: a, input: o, check: d, flats: c }) {
  const { strings: f, min: p, max: m } = r, w = `${o}:${d}:solo:notes:`;
  return /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ s.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ s.jsx(Lf, { min: p, max: m }),
    /* @__PURE__ */ s.jsx("tbody", { children: Ie.OPEN_PITCHES.map((L, v) => /* @__PURE__ */ s.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Pf(v), children: [
      /* @__PURE__ */ s.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Qt[v]}`, children: /* @__PURE__ */ s.jsx(Af, { string: v }) }),
      us([v], p, m).map((g) => {
        const M = Object.hasOwn(a, w + Ue(g)) ? a[w + Ue(g)] : void 0, $ = Go(M), T = $ === null ? "unseen" : M.attempts < 3 ? "few" : $ >= 0.8 ? "strong" : $ >= 0.5 ? "growing" : "weak", N = `${Qt[v]}-kieli, ${Ti(g.fret)}, ${Ae(g.midi, c)}`, x = M ? `${Math.round($ * 100)} %, ${M.correct}/${M.attempts} heti oikein, viime aikoina ${Math.round(tr(M) * 100)} % ja ${(nr(M) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ s.jsxs("td", { className: `${g.fret === 0 ? "open-fret " : ""}${T}`, title: `${N}: ${x}`, children: [
          /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: $ === null ? "·" : M.attempts < 3 ? "?" : Math.round($ * 100) }),
          /* @__PURE__ */ s.jsxs("span", { className: "sr-only", children: [
            N,
            ": ",
            x
          ] })
        ] }, g.fret);
      })
    ] }, v)) })
  ] }) });
}
const wp = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", ba = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ci[r.mode === "caged" ? "maj" : r.chord].tones, Rf = (r) => Ie.fingeringBoxes(r.root, Ie.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function _i(r) {
  if (r.mode === "caged") {
    const a = Cf(r.root, r.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const a = Rf(r);
    return { strings: r.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Np(r) {
  const a = _i(r);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function sr(r) {
  const a = _i(r), o = us(a.strings, a.min, a.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return o.filter((f) => r.accidentals || ![1, 3, 6, 8, 10].includes(Be(f.midi)));
  if (r.mode === "caged") {
    const f = new Set(Cf(r.root, r.shape).map(Ue));
    return o.filter((p) => f.has(Ue(p)));
  }
  if (r.mode === "interval") return o;
  const d = o.filter((f) => ba(r).some(([p]) => Be(f.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return d;
  const c = Rf(r);
  return d.filter((f) => {
    const p = c.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function $f(r, a) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((d) => r.intervals.map((c) => ({
    iv: c,
    direction: d,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (d === "down" ? -c : c)).map((p) => ({ reference: f, target: p })))
  }))).filter((d) => d.pairs.length);
}
function Ep(r) {
  const a = ba(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(r.chordTone));
}
function _o(r) {
  const a = sr(r), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const d = Ep(r).filter(([c]) => !a.some((f) => Be(f.midi - r.root) === c));
  return d.length ? `Valitulta alueelta puuttuu soinnun ${d.map(([, c]) => c + ". aste").join(" ja ")}. ${o}` : r.mode === "interval" && !$f(r, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Dn(r) && new Set(a.map((c) => c.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Cp(r, a) {
  const o = [...new Map([...a].sort((d, c) => d.midi - c.midi || d.string - c.string).map((d) => [d.midi, d])).values()];
  return r.order === "down" ? o.reverse() : o;
}
function Of(r) {
  return Dn(r) ? new Set(sr(r).map((a) => a.midi)).size : r.rounds;
}
function Tp(r, a) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function qi(r, a, o = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const d = a.reduce((p, m) => p + m, 0), c = Math.min(0.999999999, Math.max(0, o()));
  if (!(d > 0)) return r[Math.floor(c * r.length)];
  let f = c * d;
  for (let p = 0; p < r.length; p++)
    if (f -= a[p], f < 0) return r[p];
  return r.at(-1);
}
const Od = (r, a) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${a}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${a}:${r.activity}` : `scale:${r.root}:${r.scale}:${a}:${r.activity}`;
function Ei(r, a) {
  const o = r.filter((d) => !a(d));
  return o.length ? o : r;
}
function Mp(r, a, o = {}, d, c = Math.random) {
  const f = _o(r);
  if (f) throw new Error(f);
  const p = Tf(r), m = Mi(r), w = p === "pitch", L = (b) => r.weak ? mp(o[_f({ input: m, check: p, hint: !1, item: b })]) : 1, v = (b) => qi(b, b.map(() => 1), c), g = sr(r), M = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const b = Ei(g, (ee) => !!d && Ue(ee) === Ue(d.position)), F = qi(b, b.map((ee) => L(`notes:${Ue(ee)}`)), c), se = Ae(F.midi, r.flats, w);
    return {
      ...M,
      position: F,
      midi: F.midi,
      name: se,
      item: `notes:${Ue(F)}`,
      prompt: `Etsi ${se} ${Ho[F.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const b = (ge) => `ear-note:${Be(ge.midi)}${r.reference ? ":ref" : ""}`, F = Ei(g, (ge) => !!d && Be(ge.midi) === Be(d.midi)), se = qi(F, F.map((ge) => L(b(ge))), c), ee = r.reference ? 57 + 12 * Math.round((se.midi - 57) / 12) : void 0;
    return {
      ...M,
      position: se,
      midi: se.midi,
      name: Ae(se.midi, r.flats),
      item: b(se),
      choices: "note",
      reference: ee,
      sound: ee === void 0 ? [se.midi] : [ee, se.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const b = Ei(g, (se) => !!d && se.midi === d.midi), F = qi(b, b.map((se) => L(`repeat:${se.midi}`)), c);
    return {
      ...M,
      position: F,
      midi: F.midi,
      name: Ae(F.midi, r.flats, !0),
      item: `repeat:${F.midi}`,
      sound: [F.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const b = Ei($f(r, g), (ee) => d?.interval === ee.iv && d?.direction === ee.direction), F = qi(b, b.map((ee) => L(`interval:${ee.iv}:${ee.direction}`)), c), se = v(Ei(F.pairs, (ee) => d?.reference === ee.reference.midi));
    return {
      ...M,
      position: se.target,
      midi: se.target.midi,
      name: Ae(se.target.midi, r.flats, !0),
      item: `interval:${F.iv}:${F.direction}`,
      interval: F.iv,
      direction: F.direction,
      reference: se.reference.midi,
      sound: [se.reference.midi, se.target.midi],
      prompt: `Kuulet ${F.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ae(se.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const $ = ba(r);
  let T, N = 0;
  if (Dn(r)) {
    const b = Cp(r, g);
    N = b.length, T = b[a % b.length];
  } else {
    const b = $.filter(([ee]) => g.some((ge) => Be(ge.midi - r.root) === ee)), F = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [$[a % $.length]] : $.filter(([, ee]) => ee.endsWith(r.chordTone)) : Ei(b, ([ee]) => d?.interval === ee), [se] = qi(F, F.map(([ee]) => L(Od(r, ee))), c);
    T = v(Ei(g.filter((ee) => Be(ee.midi - r.root) === se), (ee) => !!d && Ue(ee) === Ue(d.position)));
  }
  const x = Be(T.midi - r.root), I = $.find(([b]) => b === x)[1], E = qs(r.root, x, I), H = w ? E + lp(T.midi, E) : E, K = r.mode === "scale" ? `${ui(r.root)}-${Ie.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${ui(r.root)}-duurisointu, ${r.shape}-muoto` : Ef(r.root, r.chord), G = r.mode !== "caged" && r.activity === "degree", D = G ? `${K}: mikä aste on ${E}?` : N ? `${K} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % N + 1}/${N}: ${I}. aste (${H}).` : `${K}: etsi ${I}. aste${w ? ` (${H})` : ""}.`;
  return {
    ...M,
    position: T,
    midi: T.midi,
    name: H,
    item: Od(r, x),
    prompt: D,
    degree: I,
    interval: x,
    choices: G ? "degree" : "position"
  };
}
function bo(r, a, o) {
  return Number.isInteger(a) && (o === "class" ? Be(r) === Be(a) : r === a);
}
function Ff(r, a, o) {
  return bo(a.midi, o.midi, a.check) ? r.mode === "notes" ? o.string === a.position.string : wp(r) ? sr(r).some((d) => Ue(d) === Ue(o)) : !0 : !1;
}
function _p(r, a) {
  const o = _i(r);
  return us(o.strings, o.min, o.max).filter((d) => Ff(r, a, d));
}
const wt = (r, a, o) => ({ ...r, label: a, kind: o }), bp = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function Ap(r, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const d = o >= 2, c = _i(r), f = us(c.strings, c.min, c.max), p = _p(r, a);
  if (r.mode === "notes") {
    if (d) return { marks: p.map((I) => wt(I, a.name, "answer")), text: `${a.name} on ${Nf[a.position.string]}: ${Ti(a.position.fret)}.` };
    const N = f.find((I) => I.string === a.position.string), x = Ae(N.midi, r.flats);
    return {
      marks: [wt(N, x, "anchor")],
      text: `Apupiste: ${op[N.string]} ${N.fret === 0 ? "vapaa sävel" : N.fret + ". nauhan sävel"} on ${x}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return d ? { marks: [wt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [wt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Qt[a.position.string]}-kieli, ${Ti(a.position.fret)}.` };
  if (r.mode === "repeat")
    return d ? { marks: p.map((N) => wt(N, Ae(N.midi, r.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Ho[a.position.string]}.` };
  if (r.mode === "interval") {
    const N = Ae(a.reference, r.flats, !0), x = f.filter((I) => I.midi === a.reference).map((I) => wt(I, N, "anchor"));
    return d ? {
      marks: [...x, ...p.map((I) => wt(I, Ae(I.midi, r.flats, !0), "answer"))],
      text: `${bp(er[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${N} → ${a.name}.`
    } : { marks: x, text: `Alkusävel ${N} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = sr(r), w = ba(r), L = (N) => w.find(([x]) => x === Be(N.midi - r.root))?.[1] ?? "", v = qs(r.root, a.interval, a.degree), g = m.filter((N) => Be(N.midi - r.root) === 0), M = (N) => p.some((x) => Ue(x) === Ue(N)), $ = `${a.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return d ? { marks: m.map((N) => wt(N, L(N), M(N) ? "answer" : "shape")), text: $ } : { marks: m.map((N) => wt(N, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const T = r.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const N = m.filter((x) => Be(x.midi) === Be(a.midi));
    return d ? { marks: [...(a.interval === 0 ? [] : g).map((x) => wt(x, "1", "anchor")), ...N.map((x) => wt(x, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: N.map((x) => wt(x, v, "shape")), text: `Katso ${T} nimeä: mikä on sen perussävel?` } : {
      marks: [...g.map((x) => wt(x, "1", "anchor")), ...N.map((x) => wt(x, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return d ? { marks: [...g.filter((N) => !M(N)).map((N) => wt(N, "1", "anchor")), ...p.map((N) => wt(N, a.degree, "answer"))], text: $ } : a.interval === 0 ? { marks: [], text: `1. aste on ${T} perussävel ${ui(r.root)}.` } : { marks: g.map((N) => wt(N, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Pp {
  constructor(a, o, d, c = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = d, this.now = c, this.random = f, this.total = Of(a);
  }
  settings;
  stats;
  record;
  now;
  random;
  phase = "idle";
  question;
  index = 0;
  results = [];
  errors = 0;
  started = 0;
  /** 0 = ei vihjettä, 1 = apupiste, 2 = vastaus. Arvo ei laske kysymyksen aikana. */
  hintLevel = 0;
  /** Mikrofonin vakaat, tehtävästä eriävät havainnot tässä kysymyksessä. */
  mismatches = 0;
  /** Kierroksen pituus; 0 = vapaa harjoittelu. */
  total;
  pendingMismatch = !1;
  pausedAt = 0;
  prior = "active";
  id = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + Math.random();
  get isLast() {
    return this.total > 0 && this.index >= this.total;
  }
  /** Onko nykyiseen kysymykseen jo vastattu oikein (myös tauolla palautteen aikana). */
  get answered() {
    return this.index > 0 && this.results.at(-1)?.id === `${this.id}:${this.index}`;
  }
  start() {
    this.phase === "idle" && this.next();
  }
  next() {
    if (["idle", "feedback"].includes(this.phase)) {
      if (this.isLast) {
        this.phase = "done";
        return;
      }
      this.question = Mp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Tp(this.settings, this.index), this.started = this.now(), this.phase = "active";
    }
  }
  pause() {
    ["active", "feedback"].includes(this.phase) && (this.prior = this.phase, this.pausedAt = this.now(), this.phase = "paused");
  }
  resume() {
    this.phase === "paused" && (this.started += this.now() - this.pausedAt, this.phase = this.prior);
  }
  /** Vihjeen käyttö jää voimaan, vaikka vihje piilotettaisiin näkyvistä. */
  useHint(a) {
    this.phase === "active" && (this.hintLevel = Math.max(this.hintLevel, Math.min(2, Math.round(a))));
  }
  /** heldMs: kuinka kauan mikrofonin sävel oli soinut ennen hyväksymistä. Se ei kuulu vastausaikaan. */
  answer(a, o, d, c = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const f = this.question;
    if (!(o === "degree" ? a === f.interval : o === "note" ? bo(f.midi, a, "class") : o === "board" ? !!d && Ff(this.settings, f, d) : bo(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? d : void 0, w = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Ue(m)}` : f.item,
      mode: this.settings.mode,
      input: o,
      check: f.check,
      expected: f.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, c)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? w.position = Ue(m) : this.settings.mode === "notes" && (w.position = Ue(f.position)), this.results.push(w), this.record(w), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Ao(r) {
  const a = r.filter((o) => !o.hint);
  return {
    count: r.length,
    first: r.filter((o) => o.first).length,
    solo: a.length,
    soloFirst: a.filter((o) => o.first).length,
    guided: r.length - a.length,
    ms: r.reduce((o, d) => o + d.ms, 0)
  };
}
const Po = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], is = (r) => Po.find(([a]) => a === r)?.[1] ?? r;
function Pt({ label: r, children: a }) {
  const o = _.useId();
  return /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ s.jsx("label", { htmlFor: o, children: r }),
    _.cloneElement(a, { id: o })
  ] });
}
function Fd({ legend: r, name: a, value: o, options: d, onChange: c, disabled: f }) {
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "choice", disabled: f, children: [
    /* @__PURE__ */ s.jsx("legend", { children: r }),
    /* @__PURE__ */ s.jsx("div", { className: "choice-row", children: d.map((p) => /* @__PURE__ */ s.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ s.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === o, onChange: () => c(p.value) }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("strong", { children: p.title }),
        /* @__PURE__ */ s.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Id(r) {
  const a = _i(r), o = Of(r), d = Mi(r), c = d === "mic" ? "soita kitaralla" : d === "board" ? "vastaa otelaudalta" : d === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${r.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${r.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${_a[r.hints].title} · ${c} · ${Dn(r) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Dd({ s: r, change: a, locked: o, problem: d }) {
  const c = _.useId(), f = (v, g) => a({ ...r, [v]: g }), p = _i(r), m = Mi(r) === "note" || Mi(r) === "degree", w = ["scale", "chord", "caged"].includes(r.mode), L = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ s.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(Pt, { label: "Harjoitus", children: /* @__PURE__ */ s.jsx("select", { value: r.mode, onChange: (v) => f("mode", v.target.value), children: Po.map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g }, v)) }) }),
      /* @__PURE__ */ s.jsx("p", { className: "mode-note", children: Po.find(([v]) => v === r.mode)[2] })
    ] }),
    w && /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(Pt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ s.jsx("select", { value: r.root, onChange: (v) => f("root", Number(v.target.value)), children: Ie.CHROM.map((v, g) => /* @__PURE__ */ s.jsx("option", { value: g, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(Pt, { label: "Asteikko", children: /* @__PURE__ */ s.jsx("select", { value: r.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(Ie.SCALES).map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ s.jsx(Pt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ s.jsxs("select", { value: r.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ s.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ s.jsx(Pt, { label: "Sävelten järjestys", children: /* @__PURE__ */ s.jsxs("select", { value: r.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ s.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ s.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(Pt, { label: "Sointutyyppi", children: /* @__PURE__ */ s.jsx("select", { value: r.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ci).map(([v, g]) => /* @__PURE__ */ s.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ s.jsx(Pt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ s.jsxs("select", { value: r.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
          /* @__PURE__ */ s.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            r.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ s.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ s.jsxs("option", { value: "3", children: [
            "Terssi · ",
            r.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ s.jsx("option", { value: "5", children: "Kvintti · 5" }),
          r.chord === "dom7" && /* @__PURE__ */ s.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      r.mode === "caged" ? /* @__PURE__ */ s.jsx(Pt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ s.jsx("select", { value: r.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ s.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ s.jsx(Pt, { label: "Tehtävä", children: /* @__PURE__ */ s.jsxs("select", { value: r.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ s.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ s.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (g) => f("intervals", g.target.checked ? [...r.intervals, v] : r.intervals.filter((M) => M !== v)) }),
        er[v]
      ] }, v)) }),
      /* @__PURE__ */ s.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ s.jsx(Pt, { label: "Intervallin suunta", children: /* @__PURE__ */ s.jsxs("select", { value: r.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ s.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ s.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ s.jsx(
      Fd,
      {
        legend: "Harjoittelutapa",
        name: `${c}-way`,
        value: r.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ..._a[v] }))
      }
    ),
    m ? /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ s.jsx(Fd, { legend: "Vastaustapa", name: `${c}-input`, value: r.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ s.jsx(Pt, { label: "Kierroksen pituus", children: /* @__PURE__ */ s.jsxs("select", { value: r.rounds, disabled: Dn(r), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ s.jsx(Pt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ s.jsxs("select", { value: Dn(r) ? "pitch" : r.check, disabled: Dn(r), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ s.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ s.jsx(Pt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ s.jsxs("select", { value: String(r.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ s.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ s.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Dn(r) && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ s.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${r.shape}-muoto` : `Boksi ${r.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ s.jsxs("button", { type: "button", "aria-pressed": r.min === 0 && r.max === v, onClick: () => a({ ...r, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsx(Pt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ s.jsx(Pt, { label: "Viimeinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ s.jsx("div", { className: "check-row", children: Qt.map((v, g) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.strings.includes(g), onChange: (M) => f("strings", M.target.checked ? [...r.strings, g] : r.strings.filter(($) => $ !== g)) }),
          g + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "check-row", children: [
        L && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (v) => f("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.reference, onChange: (v) => f("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.weak, onChange: (v) => f("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.advance, onChange: (v) => f("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: d })
  ] });
}
const zd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Lp(r) {
  return r && Object.hasOwn(zd, r) ? zd[r] : null;
}
const Rp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function $p({ onSelect: r }) {
  return /* @__PURE__ */ s.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ s.jsx("div", { className: "learning-grid", children: Rp.map((a) => /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(a.id), children: [
      /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ s.jsx("strong", { children: a.title }),
        /* @__PURE__ */ s.jsx("span", { children: a.description }),
        /* @__PURE__ */ s.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
const Op = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Lo = 100, If = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Wo(r) {
  if (r === null || r.trim() === "") return Lo;
  const a = Number(r);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Lo;
}
function Fp() {
  try {
    return Wo(localStorage.getItem(If));
  } catch {
    return Lo;
  }
}
function Ip(r) {
  try {
    localStorage.setItem(If, String(Wo(String(r))));
  } catch {
  }
}
function Bd(r, a, o = !0) {
  return o ? Op[r] * Wo(String(a)) / 100 : 0;
}
function Df(r = () => new Audio()) {
  try {
    const a = r();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Dp = 0.12, zp = 2e3, Bp = 3;
function Vp(r, a = !1) {
  return a ? !0 : r.atLoopBoundary || r.drift <= Dp || r.seeking || r.readyState < Bp ? !1 : r.msSinceLastFix >= zp;
}
const Kp = 1.5, Up = 0.4, Hp = 0.5;
let Ro = null, Gp = null;
function Wp(r) {
  return Ro !== null ? Ro : (Gp ??= Df()) ? 0 : Up;
}
class zf {
  constructor(a = Wp()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, d = !1, c = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !d && (o.paused || a.paused)) return !1;
    const f = o.currentTime - a.currentTime, p = Math.abs(f), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, w = this.lastFix.get(o);
    if (!Vp({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: w === void 0 ? 1 / 0 : c - w
    }, d)) return !1;
    const L = !a.paused;
    !d && L && w !== void 0 && (this.latency = Math.min(Kp, Math.max(0, this.latency - Hp * f)), Ro = this.latency);
    let v = a.currentTime + (L ? this.latency : 0);
    Number.isFinite(o.duration) && (v = Math.min(v, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = v;
    } catch {
      return !1;
    }
    return L ? this.lastFix.set(o, c) : this.lastFix.delete(o), !0;
  }
}
function Qp(r = globalThis.navigator) {
  return r ? /iPhone|iPad|iPod/.test(r.userAgent) || r.platform === "MacIntel" && r.maxTouchPoints > 1 : !1;
}
function Yp(r = Qp(), a = () => Df()) {
  return r ? "webaudio" : a() ? "element" : "webaudio";
}
function Jp(r = globalThis.navigator) {
  const a = r?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const Xp = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class Zp {
  constructor(a = Xp, o = globalThis.navigator) {
    this.create = a, this.nav = o;
  }
  create;
  nav;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  /** Viimeisin virhe käyttäjälle ja diagnostiikalle: virheitä ei niellä hiljaa. */
  lastError = "";
  /** Web Audion tila ('running', 'suspended', 'interrupted' iOS:llä, 'closed') tai 'none'. */
  get state() {
    return this.context?.state ?? "none";
  }
  /** Kutsutaan käyttäjän painalluksesta ennen play()-kutsuja. */
  unlock() {
    try {
      try {
        Jp(this.nav);
      } catch (a) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(a);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch((a) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(a);
      }), !0;
    } catch (a) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(a), !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(a) {
    if (this.gains.has(a)) return !0;
    if (!this.context) return !1;
    try {
      const o = this.context.createMediaElementSource(a), d = this.context.createGain();
      return o.connect(d), d.connect(this.context.destination), this.gains.set(a, d), !0;
    } catch (o) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(o), !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, o) {
    const d = this.gains.get(a);
    d && (d.gain.value = o);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(a) {
    const o = a ? this.gains.get(a) : void 0;
    return o ? o.gain.value : null;
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
const qp = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", ev = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Vd(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Bf() {
  const r = _.useRef(null), a = _.useRef(null), [o, d] = _.useState(!1), [c, f] = _.useState(!1), [p, m] = _.useState(!1), [w, L] = _.useState(0), [v, g] = _.useState(0), [M, $] = _.useState(""), T = _.useRef(new zf());
  function N(K = !1) {
    const G = r.current, D = a.current;
    !G || !D || !Number.isFinite(G.currentTime) || T.current.align(G, D, K);
  }
  function x() {
    r.current?.pause(), a.current?.pause(), d(!1);
  }
  async function I() {
    const K = r.current, G = a.current;
    if (!(!K || !G)) {
      if (o) {
        x();
        return;
      }
      $(""), G.muted = !c, G.volume = 0.55, K.volume = 0.75, N(!0);
      try {
        await Promise.all(c ? [K.play(), G.play()] : [K.play()]), N(), d(!0);
      } catch {
        x(), $("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function E(K) {
    const G = r.current, D = a.current;
    if (!(!G || !D || !Number.isFinite(K))) {
      G.currentTime = K;
      try {
        D.currentTime = K;
      } catch {
      }
      L(K);
    }
  }
  function H(K) {
    const G = r.current, D = a.current;
    if (f(K), !!D) {
      if (D.muted = !K, !K) {
        D.pause();
        return;
      }
      !G || !o || (N(!0), D.play().catch(() => $("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return _.useEffect(() => {
    const K = () => {
      document.hidden && (r.current?.pause(), a.current?.pause(), d(!1));
    };
    return document.addEventListener("visibilitychange", K), () => {
      document.removeEventListener("visibilitychange", K), r.current?.pause(), a.current?.pause();
    };
  }, []), /* @__PURE__ */ s.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ s.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ s.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: c,
              onChange: (K) => H(K.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (K) => m(K.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ s.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        I();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(w, v > 0 ? v : 1),
          disabled: !v,
          onChange: (K) => E(Number(K.target.value))
        }
      ),
      /* @__PURE__ */ s.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Vd(w),
        " / ",
        Vd(v)
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: qp,
        loop: p,
        onLoadedMetadata: (K) => g(K.currentTarget.duration),
        onTimeUpdate: (K) => {
          L(K.currentTarget.currentTime), K.currentTarget.paused || N();
        },
        onEnded: () => {
          r.current?.loop || (a.current?.pause(), d(!1), L(v));
        },
        onPause: () => {
          a.current?.pause(), d(!1);
        },
        onError: () => $("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: ev,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const K = r.current, G = a.current;
          K?.duration && G?.duration && Math.abs(K.duration - G.duration) > 0.15 && $("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => $("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    M && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: M }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const tv = 4e3;
class Kd extends Error {
  name = "MicSetupError";
}
async function nv(r, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Kd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
    audio: {
      deviceId: r ? { exact: r } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, d = await navigator.mediaDevices.getUserMedia(o);
  let c;
  try {
    if (c = a ? a() : new AudioContext(), c.state !== "running") {
      let L;
      await Promise.race([
        c.resume(),
        new Promise((v, g) => {
          L = setTimeout(() => g(new Kd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), tv);
        })
      ]).finally(() => clearTimeout(L));
    }
    const f = c.createMediaStreamSource(d), p = c, m = d.getAudioTracks?.()[0] ?? d.getTracks()[0], w = m?.getSettings?.() ?? {};
    return {
      context: c,
      source: f,
      stream: d,
      label: m?.label ?? "",
      deviceId: w.deviceId ?? "",
      channelCount: w.channelCount ?? 1,
      stop: () => {
        d.getTracks().forEach((L) => L.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw d.getTracks().forEach((p) => p.stop()), a || await c?.close().catch(() => {
    }), f;
  }
}
async function iv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var go, Ud;
function sv() {
  if (Ud) return go;
  Ud = 1;
  function r(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), d = 0; d < o.length; d += 2) {
      const L = Math.PI * d / this.size;
      o[d] = Math.cos(L), o[d + 1] = -Math.sin(L);
    }
    this.table = o;
    for (var c = 0, f = 1; this.size > f; f <<= 1)
      c++;
    this._width = c % 2 === 0 ? c - 1 : c, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var w = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << w;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return go = r, r.prototype.fromComplexArray = function(o, d) {
    for (var c = d || new Array(o.length >>> 1), f = 0; f < o.length; f += 2)
      c[f >>> 1] = o[f];
    return c;
  }, r.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var d = 0; d < o.length; d++)
      o[d] = 0;
    return o;
  }, r.prototype.toComplexArray = function(o, d) {
    for (var c = d || this.createComplexArray(), f = 0; f < c.length; f += 2)
      c[f] = o[f >>> 1], c[f + 1] = 0;
    return c;
  }, r.prototype.completeSpectrum = function(o) {
    for (var d = this._csize, c = d >>> 1, f = 2; f < c; f += 2)
      o[d - f] = o[f], o[d - f + 1] = -o[f + 1];
  }, r.prototype.transform = function(o, d) {
    if (o === d)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = d, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, r.prototype.realTransform = function(o, d) {
    if (o === d)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = d, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, r.prototype.inverseTransform = function(o, d) {
    if (o === d)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = d, this._inv = 1, this._transform4();
    for (var c = 0; c < o.length; c++)
      o[c] /= this.size;
    this._out = null, this._data = null;
  }, r.prototype._transform4 = function() {
    var o = this._out, d = this._csize, c = this._width, f = 1 << c, p = d / f << 1, m, w, L = this._bitrev;
    if (p === 4)
      for (m = 0, w = 0; m < d; m += p, w++) {
        const x = L[w];
        this._singleTransform2(m, x, f);
      }
    else
      for (m = 0, w = 0; m < d; m += p, w++) {
        const x = L[w];
        this._singleTransform4(m, x, f);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = d / f << 1;
      var M = p >>> 2;
      for (m = 0; m < d; m += p)
        for (var $ = m + M, T = m, N = 0; T < $; T += 2, N += f) {
          const x = T, I = x + M, E = I + M, H = E + M, K = o[x], G = o[x + 1], D = o[I], b = o[I + 1], F = o[E], se = o[E + 1], ee = o[H], ge = o[H + 1], we = K, X = G, ue = g[N], Ee = v * g[N + 1], be = D * ue - b * Ee, he = D * Ee + b * ue, A = g[2 * N], Q = v * g[2 * N + 1], Y = F * A - se * Q, j = F * Q + se * A, C = g[3 * N], oe = v * g[3 * N + 1], V = ee * C - ge * oe, ce = ee * oe + ge * C, W = we + Y, U = X + j, te = we - Y, q = X - j, pe = be + V, z = he + ce, ie = v * (be - V), ae = v * (he - ce), de = W + pe, Se = U + z, xe = W - pe, Le = U - z, He = te + ae, Ye = q - ie, We = te - ae, Xe = q + ie;
          o[x] = de, o[x + 1] = Se, o[I] = He, o[I + 1] = Ye, o[E] = xe, o[E + 1] = Le, o[H] = We, o[H + 1] = Xe;
        }
    }
  }, r.prototype._singleTransform2 = function(o, d, c) {
    const f = this._out, p = this._data, m = p[d], w = p[d + 1], L = p[d + c], v = p[d + c + 1], g = m + L, M = w + v, $ = m - L, T = w - v;
    f[o] = g, f[o + 1] = M, f[o + 2] = $, f[o + 3] = T;
  }, r.prototype._singleTransform4 = function(o, d, c) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, w = c * 2, L = c * 3, v = p[d], g = p[d + 1], M = p[d + c], $ = p[d + c + 1], T = p[d + w], N = p[d + w + 1], x = p[d + L], I = p[d + L + 1], E = v + T, H = g + N, K = v - T, G = g - N, D = M + x, b = $ + I, F = m * (M - x), se = m * ($ - I), ee = E + D, ge = H + b, we = K + se, X = G - F, ue = E - D, Ee = H - b, be = K - se, he = G + F;
    f[o] = ee, f[o + 1] = ge, f[o + 2] = we, f[o + 3] = X, f[o + 4] = ue, f[o + 5] = Ee, f[o + 6] = be, f[o + 7] = he;
  }, r.prototype._realTransform4 = function() {
    var o = this._out, d = this._csize, c = this._width, f = 1 << c, p = d / f << 1, m, w, L = this._bitrev;
    if (p === 4)
      for (m = 0, w = 0; m < d; m += p, w++) {
        const Me = L[w];
        this._singleRealTransform2(m, Me >>> 1, f >>> 1);
      }
    else
      for (m = 0, w = 0; m < d; m += p, w++) {
        const Me = L[w];
        this._singleRealTransform4(m, Me >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = d / f << 1;
      var M = p >>> 1, $ = M >>> 1, T = $ >>> 1;
      for (m = 0; m < d; m += p)
        for (var N = 0, x = 0; N <= T; N += 2, x += f) {
          var I = m + N, E = I + $, H = E + $, K = H + $, G = o[I], D = o[I + 1], b = o[E], F = o[E + 1], se = o[H], ee = o[H + 1], ge = o[K], we = o[K + 1], X = G, ue = D, Ee = g[x], be = v * g[x + 1], he = b * Ee - F * be, A = b * be + F * Ee, Q = g[2 * x], Y = v * g[2 * x + 1], j = se * Q - ee * Y, C = se * Y + ee * Q, oe = g[3 * x], V = v * g[3 * x + 1], ce = ge * oe - we * V, W = ge * V + we * oe, U = X + j, te = ue + C, q = X - j, pe = ue - C, z = he + ce, ie = A + W, ae = v * (he - ce), de = v * (A - W), Se = U + z, xe = te + ie, Le = q + de, He = pe - ae;
          if (o[I] = Se, o[I + 1] = xe, o[E] = Le, o[E + 1] = He, N === 0) {
            var Ye = U - z, We = te - ie;
            o[H] = Ye, o[H + 1] = We;
            continue;
          }
          if (N !== T) {
            var Xe = q, ut = -pe, Je = U, Ve = -te, it = -v * de, Bt = -v * ae, Jt = -v * ie, Nt = -v * z, on = Xe + it, Xt = ut + Bt, Zt = Je + Nt, _t = Ve - Jt, Ne = m + $ - N, Vt = m + M - N;
            o[Ne] = on, o[Ne + 1] = Xt, o[Vt] = Zt, o[Vt + 1] = _t;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(o, d, c) {
    const f = this._out, p = this._data, m = p[d], w = p[d + c], L = m + w, v = m - w;
    f[o] = L, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(o, d, c) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, w = c * 2, L = c * 3, v = p[d], g = p[d + c], M = p[d + w], $ = p[d + L], T = v + M, N = v - M, x = g + $, I = m * (g - $), E = T + x, H = N, K = -I, G = T - x, D = N, b = I;
    f[o] = E, f[o + 1] = 0, f[o + 2] = H, f[o + 3] = K, f[o + 4] = G, f[o + 5] = 0, f[o + 6] = D, f[o + 7] = b;
  }, go;
}
var rv = sv();
const av = /* @__PURE__ */ Gm(rv);
class Js {
  /** @private @readonly @type {number} */
  _inputLength;
  /** @private @type {FFT} */
  _fft;
  /** @private @type {(size: number) => T} */
  _bufferSupplier;
  /** @private @type {T} */
  _paddedInputBuffer;
  /** @private @type {T} */
  _transformBuffer;
  /** @private @type {T} */
  _inverseBuffer;
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float32Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float32Array>}
   */
  static forFloat32Array(a) {
    return new Js(
      a,
      (o) => new Float32Array(o)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Js(
      a,
      (o) => new Float64Array(o)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using `number[]`
   * buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<number[]>}
   */
  static forNumberArray(a) {
    return new Js(a, (o) => Array(o));
  }
  /**
   * Constructs a new {@link Autocorrelator} able to handle input arrays of the
   * given length.
   *
   * @param inputLength {number} the input array length to support. This
   * `Autocorrelator` will only support operation on arrays of this length.
   * @param bufferSupplier {(length: number) => T} the function to use for
   * creating buffers, accepting the length of the buffer to create and
   * returning a new buffer of that length. The values of the returned buffer
   * need not be initialized in any particular way.
   */
  constructor(a, o) {
    if (a < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = a, this._fft = new av(uv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
  }
  /**
   * Returns the supported input length.
   *
   * @returns {number} the supported input length
   */
  get inputLength() {
    return this._inputLength;
  }
  /**
   * Autocorrelates the given input data.
   *
   * @param input {ArrayLike<number>} the input data to autocorrelate
   * @param output {T} the output buffer into which to write the autocorrelated
   * data. If not provided, a new buffer will be created.
   * @returns {T} `output`
   */
  autocorrelate(a, o = this._bufferSupplier(a.length)) {
    if (a.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${a.length}`
      );
    for (let c = 0; c < a.length; c++)
      this._paddedInputBuffer[c] = a[c];
    for (let c = a.length; c < this._paddedInputBuffer.length; c++)
      this._paddedInputBuffer[c] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const d = this._transformBuffer;
    for (let c = 0; c < d.length; c += 2)
      d[c] = d[c] * d[c] + d[c + 1] * d[c + 1], d[c + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let c = 0; c < a.length; c++)
      o[c] = this._inverseBuffer[2 * c];
    return o;
  }
}
function lv(r) {
  const a = [];
  let o = !1, d = -1 / 0, c = -1;
  for (let f = 1; f < r.length - 1; f++)
    r[f - 1] <= 0 && r[f] > 0 ? (o = !0, c = f, d = r[f]) : r[f - 1] > 0 && r[f] <= 0 ? (o = !1, c !== -1 && a.push(c)) : o && r[f] > d && (d = r[f], c = f);
  return a;
}
function ov(r, a) {
  const [o, d, c] = [r - 1, r, r + 1], [f, p, m] = [a[o], a[d], a[c]], w = f / 2 - p + m / 2, L = -(f / 2) * (d + c) + p * (o + c) - m / 2 * (o + d), v = f * d * c / 2 - p * o * c + m * o * d / 2, g = -L / (2 * w), M = w * g * g + L * g + v;
  return [g, M];
}
class Xs {
  /** @private @type {Autocorrelator<T>} */
  _autocorrelator;
  /** @private @type {T} */
  _nsdfBuffer;
  /** @private @type {number} */
  _clarityThreshold = 0.9;
  /** @private @type {number} */
  _minVolumeAbsolute = 0;
  /** @private @type {number} */
  _maxInputAmplitude = 1;
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float32Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float32Array>}
   */
  static forFloat32Array(a) {
    return new Xs(a, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Xs(a, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Xs(a, (o) => Array(o));
  }
  /**
   * Constructs a new {@link PitchDetector} able to handle input arrays of the
   * given length.
   *
   * @param inputLength {number} the input array length to support. This
   * `PitchDetector` will only support operation on arrays of this length.
   * @param bufferSupplier {(inputLength: number) => T} the function to use for
   * creating buffers, accepting the length of the buffer to create and
   * returning a new buffer of that length. The values of the returned buffer
   * need not be initialized in any particular way.
   */
  constructor(a, o) {
    this._autocorrelator = new Js(a, o), this._nsdfBuffer = o(a);
  }
  /**
   * Returns the supported input length.
   *
   * @returns {number} the supported input length
   */
  get inputLength() {
    return this._autocorrelator.inputLength;
  }
  /**
   * Sets the clarity threshold used when identifying the correct pitch (the constant
   * `k` from the MPM paper). The value must be between 0 (exclusive) and 1
   * (inclusive), with the most suitable range being between 0.8 and 1.
   *
   * @param threshold {number} the clarity threshold
   */
  set clarityThreshold(a) {
    if (!Number.isFinite(a) || a <= 0 || a > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = a;
  }
  /**
   * Sets the minimum detectable volume, as an absolute number between 0 and
   * `maxInputAmplitude`, inclusive, to consider in a sample when detecting the
   * pitch. If a sample fails to meet this minimum volume, `findPitch` will
   * return a clarity of 0.
   *
   * Volume is calculated as the RMS (root mean square) of the input samples.
   *
   * @param volume {number} the minimum volume as an absolute amplitude value
   */
  set minVolumeAbsolute(a) {
    if (!Number.isFinite(a) || a < 0 || a > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = a;
  }
  /**
   * Sets the minimum volume using a decibel measurement. Must be less than or
   * equal to 0: 0 indicates the loudest possible sound (see
   * `maxInputAmplitude`), -10 is a sound with a tenth of the volume of the
   * loudest possible sound, etc.
   *
   * Volume is calculated as the RMS (root mean square) of the input samples.
   *
   * @param db {number} the minimum volume in decibels, with 0 being the loudest
   * sound
   */
  set minVolumeDecibels(a) {
    if (!Number.isFinite(a) || a > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (a / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(a) {
    if (!Number.isFinite(a) || a <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = a;
  }
  /**
   * Returns the pitch detected using McLeod Pitch Method (MPM) along with a
   * measure of its clarity.
   *
   * The clarity is a value between 0 and 1 (potentially inclusive) that
   * represents how "clear" the pitch was. A clarity value of 1 indicates that
   * the pitch was very distinct, while lower clarity values indicate less
   * definite pitches.
   *
   * @param input {ArrayLike<number>} the time-domain input data
   * @param sampleRate {number} the sample rate at which the input data was
   * collected
   * @returns {[number, number]} the detected pitch, in Hz, followed by the
   * clarity. If a pitch cannot be determined from the input, such as if the
   * volume is too low (see `minVolumeAbsolute` and `minVolumeDecibels`), this
   * will be `[0, 0]`.
   */
  findPitch(a, o) {
    if (this._belowMinimumVolume(a)) return [0, 0];
    this._nsdf(a);
    const d = lv(this._nsdfBuffer);
    if (d.length === 0)
      return [0, 0];
    const c = Math.max(...d.map((w) => this._nsdfBuffer[w])), f = d.find(
      (w) => this._nsdfBuffer[w] >= this._clarityThreshold * c
    ), [p, m] = ov(
      // @ts-expect-error resultIndex is guaranteed to be defined
      f,
      this._nsdfBuffer
    );
    return [o / p, Math.min(m, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(a) {
    if (this._minVolumeAbsolute === 0) return !1;
    let o = 0;
    for (let d = 0; d < a.length; d++)
      o += a[d] ** 2;
    return Math.sqrt(o / a.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(a) {
    this._autocorrelator.autocorrelate(a, this._nsdfBuffer);
    let o = 2 * this._nsdfBuffer[0], d;
    for (d = 0; d < this._nsdfBuffer.length && o > 0; d++)
      this._nsdfBuffer[d] = 2 * this._nsdfBuffer[d] / o, o -= a[d] ** 2 + a[a.length - d - 1] ** 2;
    for (; d < this._nsdfBuffer.length; d++)
      this._nsdfBuffer[d] = 0;
  }
}
function uv(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function cv(r) {
  const a = r * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const dv = 0.05, fv = 1.5;
class hv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const d = a.context, c = cv(d.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof d.createChannelSplitter == "function" && (this.splitter = d.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = d.createAnalyser();
      m.fftSize = c, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(c * 4)));
    }
    this.shortLength = Math.min(c, Math.max(256, Math.round(d.sampleRate * dv))), this.detector = Xs.forFloat32Array(c), this.detector.minVolumeDecibels = -60;
  }
  mic;
  opts;
  analysers = [];
  splitter = null;
  detector;
  buffers = [];
  shortLength;
  rafId = null;
  running = !1;
  paused = !1;
  channel = 0;
  gate = new mv();
  onset = new pv();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(a) {
    Object.assign(this.opts, a);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const a = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(a));
    };
    this.rafId = requestAnimationFrame(a);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const a of this.analysers) a.disconnect();
    this.splitter?.disconnect();
  }
  /** Stop processing frames without tearing down the audio graph (esimerkkiäänen ajaksi). */
  pause() {
    this.paused = !0, this.gate.reset(), this.onset.reset();
  }
  resume() {
    this.paused = !1, this.gate.reset(), this.onset.reset();
  }
  /** Uusi kysymys: edellisestä vastauksesta soimaan jäänyt sävel ei saa vastata siihen. */
  rearm() {
    this.gate.reset();
  }
  processFrame(a) {
    const {
      minClarity: o = 0.9,
      minRms: d = 0.01,
      stabilityMs: c = 240,
      centsTolerance: f = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: w,
      onStableNote: L
    } = this.opts, v = this.analysers.map((b, F) => (b.getFloatTimeDomainData(this.buffers[F]), Hd(this.buffers[F], this.buffers[F].length - this.shortLength))), g = v.indexOf(Math.max(...v));
    g !== this.channel && v[g] > (v[this.channel] ?? 0) * fv && (this.channel = g);
    const M = this.buffers[this.channel], $ = v[this.channel], T = vv(M, M.length - this.shortLength), N = { rms: $, peak: T, channel: this.channel, levels: v }, x = $ < d, I = this.onset.feed($, a, d);
    if (x && Hd(M, 0) < d) {
      this.gate.feed(null, a, c, !0, !1), w?.({ ...N, status: "silent" });
      return;
    }
    const [E, H] = this.detector.findPitch(M, this.mic.context.sampleRate);
    if (!isFinite(E) || H < o) {
      this.gate.feed(null, a, c, x, I), w?.({ ...N, status: x ? "silent" : "unclear", clarity: isFinite(H) ? H : 0 });
      return;
    }
    if (E < p || E > m) {
      this.gate.feed(null, a, c, x, I), w?.({ ...N, status: "out-of-range", frequency: E, clarity: H });
      return;
    }
    const { midi: K, cents: G } = sp(E);
    if (Math.abs(G) > f) {
      this.gate.feed(null, a, c, x, I), w?.({ ...N, status: "off-pitch", frequency: E, clarity: H, midi: K, cents: G });
      return;
    }
    w?.({ ...N, status: "pitch", frequency: E, clarity: H, midi: K, cents: G });
    const D = this.gate.feed(K, a, c, x, I);
    D !== null && L?.({ midi: K, frequency: E, cents: G, clarity: H, timestamp: a, heldMs: D.heldMs });
  }
}
class mv {
  constructor(a = 120, o = 80) {
    this.releaseMs = a, this.gapMs = o;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(a, o, d, c, f) {
    if (c ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, f && (this.armed = !0, this.current = null)), a === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: o, seen: o }), this.current.seen = o;
    const p = o - this.current.since;
    return p < d ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class pv {
  constructor(a = 2, o = 300, d = 150) {
    this.ratio = a, this.windowMs = o, this.refractoryMs = d;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(a, o, d) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: a }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const c = this.history.length ? Math.min(...this.history.map((f) => f.rms)) : a;
    return this.history.push({ time: o, rms: a }), a < d * 1.5 || a < c * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: a }], !0);
  }
}
function Hd(r, a = 0) {
  const o = Math.max(0, a);
  let d = 0;
  for (let c = o; c < r.length; c++) d += r[c] * r[c];
  return Math.sqrt(d / Math.max(1, r.length - o));
}
function vv(r, a = 0) {
  let o = 0;
  for (let d = Math.max(0, a); d < r.length; d++) {
    const c = Math.abs(r[d]);
    c > o && (o = c);
  }
  return o;
}
const os = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let ts;
function Vf() {
  return (!ts || ts.state === "closed") && (ts = new AudioContext()), ts;
}
function kv() {
  const r = ts;
  ts = void 0, r?.close().catch(() => {
  });
}
const Kf = (r) => r instanceof Error ? r.name : "";
function yv(r) {
  const a = Kf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class gv {
  constructor(a = (o) => nv(o, Vf)) {
    this.opener = a;
  }
  opener;
  generation = 0;
  mic;
  loop;
  listeners;
  get active() {
    return !!this.mic;
  }
  /** Palauttaa null, jos kuuntelu peruttiin ennen kuin laite ehti avautua. */
  async start(a, o, d) {
    this.stop();
    const c = this.generation;
    let f, p = !1;
    try {
      f = await this.opener(a || void 0);
    } catch (m) {
      if (!a || c !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Kf(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (c !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new hv(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), d());
      }, w = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((L) => L.addEventListener("ended", m, { once: !0, signal: w.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: w.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
    } catch (m) {
      throw this.stop(), m;
    }
  }
  setOptions(a) {
    this.loop?.setOptions(a);
  }
  /** Esimerkkiäänen ajaksi: kaiuttimen ääni ei saa vastata tehtävään. */
  pause() {
    this.loop?.pause();
  }
  resume() {
    this.loop?.resume();
  }
  /** Uusi kysymys vaatii uuden näppäyksen tai vaimennuksen. */
  rearm() {
    this.loop?.rearm();
  }
  /** Vapauttaa mikrofonin: äänivirta pysäytetään ja analyysisolmut irrotetaan. */
  stop() {
    this.generation++, this.listeners?.abort(), this.listeners = void 0, this.loop?.stop(), this.loop = void 0, this.mic?.stop(), this.mic = void 0;
  }
}
function Uf(r, a) {
  return r !== "on" ? r : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Gd = (r) => Math.max(0, Math.min(1, (os(r) + 60) / 60));
function jv(r) {
  const a = [...r].sort((d, c) => d - c), o = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function jo(r) {
  const a = () => r.state === "running";
  if (a()) return;
  let o;
  try {
    await Promise.race([
      r.resume(),
      new Promise((d, c) => {
        o = setTimeout(() => c(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!a()) throw new Error("reference-audio-not-running");
}
function Aa(r) {
  const a = r instanceof Error ? r.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class rr {
  constructor(a = Vf) {
    this.provide = a;
  }
  provide;
  master;
  token = 0;
  timer;
  noteTimers = [];
  loopTick;
  adjustLoopTempo;
  settle;
  /** Keskeyttää soivan esimerkin heti. Kesken jäänyt play palauttaa false. */
  stop() {
    this.token++, clearTimeout(this.timer), this.noteTimers.forEach(clearTimeout), this.noteTimers = [], clearInterval(this.loopTick), this.loopTick = void 0, this.adjustLoopTempo = void 0, this.settle?.(!1), this.settle = void 0, this.master?.disconnect(), this.master = void 0;
  }
  async play(a, o) {
    this.stop();
    const d = this.token, c = this.provide();
    if (await jo(c), d !== this.token) return !1;
    const f = c.createGain();
    f.connect(c.destination), this.master = f;
    const p = Array.from({ length: 12 }, (L, v) => 1 / (v + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((L, v) => {
      const g = c.createOscillator(), M = c.createGain(), $ = c.currentTime + 0.05 + v * 0.8;
      m ? g.setPeriodicWave(m) : g.type = "triangle", g.frequency.value = yo(L), M.gain.setValueAtTime(0, $), M.gain.linearRampToValueAtTime(0.22, $ + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, $ + 0.7), g.connect(M), M.connect(f), g.start($), g.stop($ + 0.72), o && this.noteTimers.push(setTimeout(() => {
        d === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((L) => {
      this.settle = L, this.timer = setTimeout(() => L(!0), a.length * 800 + 350);
    }) || d !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], f.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(a, o, d, c) {
    if (this.stop(), !a.length) return !1;
    const f = this.token, p = this.provide();
    if (await jo(p), f !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), w = p.createGain();
    w.connect(p.destination), this.master = w;
    const L = Array.from({ length: 12 }, (T, N) => 1 / (N + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...L.map(() => 0)]),
      new Float32Array([0, ...L])
    ), g = p.currentTime + 0.05;
    let M = 0;
    return a.forEach((T, N) => {
      if (!Number.isFinite(T.beat) || T.beat < 0 || !Number.isFinite(T.duration) || T.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const x = g + T.beat * m, I = T.duration * m, E = x + Math.max(0.08, I * 0.94), H = p.createOscillator(), K = p.createGain();
      v ? H.setPeriodicWave(v) : H.type = "triangle", H.frequency.value = yo(T.midi), K.gain.setValueAtTime(0, x), K.gain.linearRampToValueAtTime(0.22, x + 0.012), K.gain.exponentialRampToValueAtTime(1e-3, E - 0.01), H.connect(K), K.connect(w), H.start(x), H.stop(E), d && this.noteTimers.push(setTimeout(() => {
        f === this.token && d(N);
      }, 50 + T.beat * m * 1e3));
      const G = a[N + 1]?.beat ?? 1 / 0;
      c && G > T.beat + T.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && c();
      }, 50 + T.beat * m * 1e3 + I * 1e3)), M = Math.max(M, T.beat + T.duration);
    }), !await new Promise((T) => {
      this.settle = T, this.timer = setTimeout(() => T(!0), 50 + M * m * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], w.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(a) {
    this.adjustLoopTempo?.(a);
  }
  async loop(a, o, d = 75) {
    if (this.stop(), !a.length) return !1;
    const c = this.token, f = this.provide();
    if (await jo(f), c !== this.token) return !1;
    const p = f.createGain();
    p.connect(f.destination), this.master = p;
    const m = Array.from({ length: 12 }, (N, x) => 1 / (x + 1) ** 1.3), w = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let L = 60 / Math.max(40, Math.min(140, d));
    this.adjustLoopTempo = (N) => {
      c === this.token && Number.isFinite(N) && (L = 60 / Math.max(40, Math.min(140, N)));
    };
    const v = 1.6;
    let g = f.currentTime + 0.05, M = 0;
    const $ = [], T = () => {
      if (c === this.token) {
        if (g < f.currentTime - 0.02) {
          const N = Math.ceil((f.currentTime - g) / L);
          g += N * L, M = (M + N) % a.length, $.length = 0;
        }
        for (; g < f.currentTime + v; ) {
          const N = a[M], x = M, I = g, E = f.createOscillator(), H = f.createGain();
          w ? E.setPeriodicWave(w) : E.type = "triangle", E.frequency.value = yo(N), H.gain.setValueAtTime(0, I), H.gain.linearRampToValueAtTime(0.22, I + 0.012), H.gain.exponentialRampToValueAtTime(1e-3, I + L * 0.975), E.connect(H), H.connect(p), E.start(I), E.stop(I + L * 0.985), $.push({ at: I, index: x }), g += L, M = (M + 1) % a.length;
        }
        for (; $.length && $[0].at <= f.currentTime + 0.01; ) {
          const N = $.shift();
          o?.(N.index);
        }
      }
    };
    return T(), this.loopTick = setInterval(T, 25), new Promise((N) => {
      this.settle = N;
    });
  }
}
function Yt(r, a) {
  let o = 0;
  const d = a.map(([c, f, p]) => {
    const w = { position: c === null || f === null ? null : Oe(c, f), beat: o, duration: p };
    return o += p, w;
  });
  return { label: r, events: d, beats: o };
}
function Ys(r, ...a) {
  let o = 0;
  const d = a.flatMap((c) => {
    const f = c.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += c.beats, f;
  });
  return { label: r, events: d, beats: o };
}
const Wd = Yt("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), Qd = Yt("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), xv = Yt("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), Yd = Yt("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [2, 9, 1],
  [2, 9, 1],
  [2, 7, 2],
  [null, null, 2]
]), Jd = Yt("B · Vastaus", [
  [2, 9, 1],
  [2, 7, 1],
  [3, 10, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Sv = Yt("C · Jatko", [
  [3, 10, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [3, 10, 4]
]), Xd = Yt("A · Kysymys", [
  [1, 10, 1],
  [1, 13, 1],
  [0, 10, 2],
  [1, 13, 1],
  [1, 10, 1],
  [2, 12, 2]
]), Zd = Yt("B · Vastaus", [
  [0, 12, 1],
  [0, 10, 1],
  [1, 13, 1],
  [1, 10, 1],
  [2, 12, 1],
  [2, 9, 1],
  [1, 10, 2]
]), qd = Yt("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), ef = Yt("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), wv = Yt("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), tf = Yt("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), nf = Yt("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), sf = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Wd, Qd],
    whole: Ys("Melodia · A + B + C", Wd, Qd, xv),
    source: "https://hymnary.org/tune/wayfaring_stranger",
    note: "Sävelkulku perustuu perinteisen melodian 15-säveliseen alkumotiiviin. Rytmi on tätä harjoitusta varten itse laadittu: kyse ei ole tietyn levytyksen tai nuottisovituksen tarkasta versiosta."
  },
  "wayfaring-p2": {
    id: "wayfaring-p2",
    title: "Wayfaring Stranger · positio 2",
    qualifier: "Sama perinnesävelmän alku uudessa käsiasemassa · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Yd, Jd],
    whole: Ys("Melodia · A + B + C", Yd, Jd, Sv),
    compareWith: { id: "wayfaring", label: "Positio 1", ownLabel: "Positio 2" },
    source: "https://hymnary.org/tune/wayfaring_stranger",
    note: "Sama sävelkulku, samat sävelkorkeudet ja sama itse laadittu harjoitusrytmi kuin positiossa 1. Vain sormitus vaihtuu: kaksi säveltä siirtyy toiselle kielelle. Sävelkulku perustuu perinteisen melodian alkumotiiviin."
  },
  "high-answer": {
    id: "high-answer",
    title: "Korkea vastaus",
    qualifier: "Oma sävellys · A-mollipentatoninen · positio 3",
    tempo: 76,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Xd, Zd],
    whole: Ys("Korkea vastaus · A + B", Xd, Zd),
    source: "",
    note: "Alkuperäinen tätä harjoitusta varten sävelletty neljän tahdin melodia. Kysymys jää G-säveleen, ja vastaus laskeutuu position ylimmästä E-sävelestä A-pohjasäveleen. Melodia käyttää position 3 kolmea ohuinta kieltä."
  },
  nooa: {
    id: "nooa",
    title: "Ukko Nooa",
    qualifier: "Perinteinen melodia · C-jooninen",
    tempo: 84,
    tonic: 0,
    permitted: [0, 2, 4, 5, 7, 9, 11],
    fragments: [qd, ef],
    whole: Ys("Ukko Nooa · A + B", qd, ef),
    bonus: wv,
    source: "https://aoe.fi/api/v1/download/file/opisavellajitjaasteikothankkeentehtavapaketti1-1701684466136.pdf",
    note: "Lähde: Opi sävellajit ja asteikot (2023), s. 56, Ukko Nooan alku C-duurissa. Tässä soitetaan oktaavia alempaa samalla säveljonolla ja rytmillä. Erillinen B → C -täydennys on itse sävelletty."
  },
  "pentatonic-bridge": {
    id: "pentatonic-bridge",
    title: "Siirtymä kahden position välillä",
    qualifier: "Oma sävellys · A-mollipentatoninen",
    tempo: 75,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [tf, nf],
    whole: Ys("Siirtymämelodia · A + B", tf, nf),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Nv(r) {
  return r.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
function Ev(r, a) {
  const o = (f) => new Map(f.events.filter((p) => p.position).map((p) => [p.position.midi, p.position]).reverse()), d = o(r);
  return [...o(a).entries()].sort((f, p) => p[0] - f[0]).map(([f, p]) => {
    const m = d.get(f) ?? null;
    return { midi: f, from: m, to: p, moved: !m || m.string !== p.string || m.fret !== p.fret };
  });
}
const xo = ["e", "B", "G", "D", "A", "E"];
function Qo({ pieceId: r, stage: a, onBeforePlay: o, stopHandleRef: d }) {
  const c = sf[r], [f, p] = _.useState(a === "fingering" ? "a" : "whole"), [m, w] = _.useState(c.tempo), [L, v] = _.useState(!1), [g, M] = _.useState(!1), [$, T] = _.useState(a !== "memory"), [N, x] = _.useState(!1), [I, E] = _.useState(null), [H, K] = _.useState(""), G = _.useRef(new rr()), D = _.useRef(0);
  function b() {
    D.current++, G.current.stop(), x(!1), E(null);
  }
  _.useEffect(() => {
    d && (d.current = b);
    const V = () => {
      document.hidden && b();
    };
    return document.addEventListener("visibilitychange", V), () => {
      document.removeEventListener("visibilitychange", V), D.current++, G.current.stop(), d && (d.current = null);
    };
  }, [d]);
  const F = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: c.whole }] : [
    { id: "a", name: "Osa A", clip: c.fragments[0] },
    { id: "b", name: "Osa B", clip: c.fragments[1] },
    ...c.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: c.bonus }] : []
  ], se = F.find((V) => V.id === f) ?? F[0], ee = se.clip, ge = Nv(ee), we = I === null ? null : ge[I]?.beat ?? null, X = we === null ? null : ee.events.find((V) => V.beat === we)?.position ?? null, ue = _.useRef(null);
  bf(ue, ".melody-playing", N && we !== null ? String(we) : "", { enabled: L && g, playback: N });
  const Ee = ee.beats / 4, be = a === "fingering" && c.compareWith ? Ev(sf[c.compareWith.id].whole, c.whole) : null, he = (V) => V ? `${xo[V.string]}-kieli, ${V.fret}. nauha` : "–", A = [...new Map(ee.events.filter((V) => V.position).map((V) => [Ue(V.position), V.position])).values()], Q = A.map((V) => V.fret), Y = A.filter((V) => $ || X?.string === V.string && X.fret === V.fret).map((V) => ({
    ...V,
    label: Ae(V.midi),
    kind: X?.string === V.string && X.fret === V.fret ? "playing" : Be(V.midi) === c.tonic ? "answer" : "shape"
  })), j = {
    strings: [...new Set(A.map((V) => V.string))],
    min: Math.min(...Q),
    max: Math.max(...Q),
    fixed: "box"
  };
  async function C() {
    if (N) {
      b();
      return;
    }
    o?.();
    const V = ++D.current;
    G.current.stop(), x(!0), E(null), K("");
    try {
      await G.current.playTimed(ge, m, (ce) => {
        V === D.current && E(ce);
      }, () => {
        V === D.current && E(null);
      });
    } catch (ce) {
      V === D.current && K(Aa(ce));
    } finally {
      V === D.current && (x(!1), E(null));
    }
  }
  function oe(V) {
    b(), K(""), p(V);
  }
  return /* @__PURE__ */ s.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${c.title}`, children: /* @__PURE__ */ s.jsxs("details", { onToggle: (V) => {
    const ce = V.currentTarget.open;
    v(ce), ce || b();
  }, children: [
    /* @__PURE__ */ s.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${c.title}` : `Valinnainen melodiaharjoitus · ${c.title}` }),
    L && /* @__PURE__ */ s.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ s.jsx("h4", { children: c.title }),
      /* @__PURE__ */ s.jsxs("p", { className: "melody-subtitle", children: [
        c.qualifier,
        " · 4/4 · ",
        Ee.toString().replace(".", ","),
        " tahtia ",
        a === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "melody-instruction", children: a === "fingering" && c.compareWith ? `Sama melodia kuin ${c.compareWith.label.toLowerCase().replace("positio", "positiossa")}, samoilla sävelkorkeuksilla ja samalla rytmillä. Vain sormitus vaihtuu. Kokeile osia A ja B erikseen ja seuraa keltaista korostusta otelaudalla.` : a === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      be && c.compareWith && /* @__PURE__ */ s.jsxs("details", { className: "melody-compare", children: [
        /* @__PURE__ */ s.jsxs("summary", { children: [
          "Vertaa sormitusta: ",
          c.compareWith.label.toLowerCase(),
          " ja ",
          c.compareWith.ownLabel.toLowerCase()
        ] }),
        /* @__PURE__ */ s.jsxs("table", { className: "melody-compare-table", children: [
          /* @__PURE__ */ s.jsxs("caption", { className: "sr-only", children: [
            "Melodian sävelet: paikka ",
            c.compareWith.label.toLowerCase().replace("positio", "positiossa"),
            " ja ",
            c.compareWith.ownLabel.toLowerCase().replace("positio", "positiossa")
          ] }),
          /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
            /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Sävel" }),
            /* @__PURE__ */ s.jsx("th", { scope: "col", children: c.compareWith.label }),
            /* @__PURE__ */ s.jsx("th", { scope: "col", children: c.compareWith.ownLabel })
          ] }) }),
          /* @__PURE__ */ s.jsx("tbody", { children: be.map((V) => /* @__PURE__ */ s.jsxs("tr", { className: V.moved ? "moved" : "", children: [
            /* @__PURE__ */ s.jsx("th", { scope: "row", children: Ae(V.midi, !1, !0) }),
            /* @__PURE__ */ s.jsx("td", { children: he(V.from) }),
            /* @__PURE__ */ s.jsx("td", { children: V.moved ? /* @__PURE__ */ s.jsx("strong", { children: he(V.to) }) : he(V.to) })
          ] }, V.midi)) })
        ] }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Lihavoidut sävelet soitetaan uudessa käsiasemassa eri kieleltä. Muut pysyvät samassa paikassa." })
      ] }),
      a === "fingering" && c.bonus && /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ s.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        c.title,
        " -sävelmää."
      ] }),
      a !== "memory" && /* @__PURE__ */ s.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: F.map((V) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": se.id === V.id,
          onClick: () => oe(V.id),
          children: V.name
        },
        V.id
      )) }),
      /* @__PURE__ */ s.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": N, onClick: () => {
          C();
        }, children: N ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ s.jsx("select", { value: m, onChange: (V) => {
            b(), w(Number(V.target.value));
          }, children: [60, 75, 84, 96, 108].concat([c.tempo]).sort((V, ce) => V - ce).filter((V, ce, W) => W.indexOf(V) === ce).map((V) => /* @__PURE__ */ s.jsxs("option", { value: V, children: [
            V,
            " BPM"
          ] }, V)) })
        ] }),
        /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": g, onClick: () => M((V) => !V), children: g ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      H && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: H }),
      /* @__PURE__ */ s.jsx("p", { className: "melody-now", "aria-live": "polite", children: N && I !== null ? `Nyt soi ${Ae(ge[I].midi)} · ${xo[X.string]}-kieli, ${X.fret}. nauha` : N ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ s.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ s.jsx(ci, { area: j, marks: Y, disabled: !0, follow: "playing", playback: N, caption: `${c.title}, ${se.name}` }),
        /* @__PURE__ */ s.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": $,
              onClick: () => T((V) => !V),
              children: $ ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      g && /* @__PURE__ */ s.jsxs("div", { ref: ue, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ s.jsxs("table", { className: "melody-tab", "aria-label": `${c.title}, ${se.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
            /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kieli" }),
            ee.events.map((V, ce) => /* @__PURE__ */ s.jsxs("th", { scope: "col", className: V.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ s.jsx("span", { className: "melody-bar", children: V.beat % 4 === 0 ? `T${Math.floor(V.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ s.jsx("span", { className: "melody-duration", children: V.duration === 1 ? "♩" : `${V.duration} iskua` })
            ] }, ce))
          ] }) }),
          /* @__PURE__ */ s.jsx("tbody", { children: xo.map((V, ce) => /* @__PURE__ */ s.jsxs("tr", { children: [
            /* @__PURE__ */ s.jsx("th", { scope: "row", children: V }),
            ee.events.map((W, U) => {
              const te = W.position?.string === ce, q = te && we === W.beat;
              return /* @__PURE__ */ s.jsx(
                "td",
                {
                  className: `${W.beat % 4 === 0 ? "bar-start " : ""}${q ? "melody-playing " : ""}${te && Be(W.position.midi) === c.tonic ? "melody-root" : ""}`,
                  "aria-label": te ? `${V}-kieli, ${W.position.fret}. nauha, ${Ae(W.position.midi)}` : void 0,
                  children: te ? W.position.fret : "—"
                },
                U
              );
            })
          ] }, ce)) })
        ] }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: c.note }),
      c.source && /* @__PURE__ */ s.jsx("p", { className: "melody-source", children: /* @__PURE__ */ s.jsx("a", { href: c.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const $o = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [1, 2]), Hf = [...new Map($o.flatMap((r) => r.positions[0].strings.flatMap((a, o) => a.map((d) => {
  const c = Oe(o, d);
  return [Ue(c), c];
})))).values()].sort((r, a) => r.midi - a.midi || a.string - r.string), Ca = [5, 4, 3, 2, 1, 0].flatMap((r) => Hf.filter((a) => a.string === r).sort((a, o) => a.fret - o.fret)), Oo = [
  ...Ca,
  ...Ca.slice(1, -1).reverse()
], Cv = [...Oo, Ca[0]], rf = new Set(
  $o[0].positions[0].strings.flatMap((r, a) => r.map((o) => {
    const d = Oe(a, o);
    return Ue(d);
  })).filter((r) => $o[1].positions[0].strings.flatMap((a, o) => a.map((d) => Ue(Oe(o, d)))).includes(r))
), Tv = [
  Oe(5, 5),
  Oe(5, 8),
  Oe(5, 10),
  Oe(4, 7),
  Oe(4, 10),
  Oe(3, 7),
  Oe(3, 10),
  Oe(3, 7),
  Oe(4, 10),
  Oe(4, 7),
  Oe(5, 10),
  Oe(5, 8),
  Oe(5, 5)
], Gf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Wf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", So = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], af = (r) => Be(r) === 9;
function lf() {
  try {
    const r = Number(localStorage.getItem(Gf));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Mv() {
  try {
    const r = Number(localStorage.getItem(Wf));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function _v({ onBack: r, onPosition: a }) {
  const [o, d] = _.useState(lf), [c, f] = _.useState(lf), [p, m] = _.useState(!1), [w, L] = _.useState("roots"), [v, g] = _.useState(Mv), [M, $] = _.useState(null), [T, N] = _.useState(null), [x, I] = _.useState(""), E = _.useRef(new rr()), H = _.useRef(0), K = _.useRef(null), G = T === null ? null : Oo[T];
  function D() {
    K.current?.(), H.current++, E.current.stop(), $(null), N(null);
  }
  _.useEffect(() => {
    const X = () => {
      document.hidden && (H.current++, E.current.stop(), $(null), N(null));
    };
    return document.addEventListener("visibilitychange", X), () => {
      document.removeEventListener("visibilitychange", X), H.current++, E.current.stop();
    };
  }, []);
  async function b(X) {
    K.current?.();
    const ue = ++H.current;
    E.current.stop(), N(null), I(""), $(X);
    try {
      X === "transition" ? await E.current.play(Tv.map((Ee) => Ee.midi)) : X === "once" ? await E.current.play(Cv.map((Ee) => Ee.midi)) : await E.current.loop(Oo.map((Ee) => Ee.midi), (Ee) => {
        ue === H.current && N(Ee);
      }, v);
    } catch (Ee) {
      ue === H.current && I(Aa(Ee));
    } finally {
      ue === H.current && ($(null), N(null));
    }
  }
  function F(X) {
    const ue = Math.max(40, Math.min(140, X));
    g(ue), E.current.setLoopTempo(ue);
    try {
      localStorage.setItem(Wf, String(ue));
    } catch {
    }
  }
  function se(X) {
    X > o || (D(), f(X), m(!1), L("roots"));
  }
  function ee() {
    D();
    const X = Math.min(4, c + 1);
    if (f(X), m(!1), L("roots"), X > o) {
      d(X);
      try {
        localStorage.setItem(Gf, String(X));
      } catch {
      }
    }
  }
  const ge = (X, ue) => c < 2 || c === 2 && p && rf.has(ue) || c === 3 && (w === "all" || w === "roots" && af(X)), we = Hf.filter((X) => ge(X.midi, Ue(X))).map((X) => ({
    ...X,
    label: c < 2 || c === 2 && p || c === 3 && w === "all" ? Ae(X.midi) : "A",
    kind: c < 2 && G?.string === X.string && G?.fret === X.fret ? "playing" : af(X.midi) ? "answer" : rf.has(Ue(X)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      D(), r();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ s.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
        D(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
        D(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => se(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: So.map((X, ue) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: ue === c ? "journey-step current" : "journey-step",
        "aria-current": ue === c ? "step" : void 0,
        disabled: ue > o,
        onClick: () => se(ue),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: ue > o ? "🔒" : ue < o ? "✓" : ue + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: X.title })
        ]
      },
      X.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: So[c].title }),
        /* @__PURE__ */ s.jsx("span", { children: c === 4 ? "Valmis" : `Harjoitus ${c + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: So[c].detail }),
      c < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        c === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ s.jsxs("p", { children: [
            /* @__PURE__ */ s.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        c === 1 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ s.jsxs("strong", { children: [
              Ca.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ s.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ s.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ s.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        c === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        c === 3 && /* @__PURE__ */ s.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        c === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => F(v - 5), children: "− 5" }),
          /* @__PURE__ */ s.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => F(v + 5), children: "+ 5" }),
          /* @__PURE__ */ s.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        c < 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "whole",
              onClick: () => M === "whole" ? D() : void b("whole"),
              children: M === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "once",
              onClick: () => M === "once" ? D() : void b("once"),
              children: M === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "transition",
              onClick: () => M === "transition" ? D() : void b("transition"),
              children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        c === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((X) => !X), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => se(1), children: "← Palaa sormitukseen" })
        ] }),
        c === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((X) => /* @__PURE__ */ s.jsxs("label", { children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: X.value,
                  checked: w === X.value,
                  onChange: () => L(X.value)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: X.name })
            ] }, X.value))
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => M === "once" ? D() : void b("once"), children: M === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => M === "transition" ? D() : void b("transition"), children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        c !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: M === "whole" ? G && c < 2 ? `Nyt soi ${Ae(G.midi, !1, !0)} · ${Qt[G.string]}-kieli, nauha ${G.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : M === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : M === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        x && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: x }),
        /* @__PURE__ */ s.jsx(
          ci,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: M,
            marks: we,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          c === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : c === 3 ? w === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : w === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (c === 1 || c === 2) && /* @__PURE__ */ s.jsx(
          Qo,
          {
            pieceId: "pentatonic-bridge",
            stage: c === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: K
          },
          `bridge:${c}`
        ),
        c === 3 && /* @__PURE__ */ s.jsx(Bf, {}),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: c === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : c === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : c === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: ee, children: c === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      c === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ s.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => se(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const Zs = "musiikin-kartta:skaalapolku:v1", ja = "musiikin-kartta:skaalapolku:position-2:v1", wo = "musiikin-kartta:skaalapolku:position-3:v1", xa = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ta = "musiikin-kartta:skaalapolku:active-position:v1", Qf = "musiikin-kartta:skaalapolku:tempo:v1", ss = 75, Fo = 40, Io = 140;
function bv() {
  try {
    const r = localStorage.getItem(Qf);
    if (r === null) return ss;
    const a = Number(r);
    return Number.isInteger(a) && a >= Fo && a <= Io && a % 5 === 0 ? a : ss;
  } catch {
    return ss;
  }
}
const No = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], of = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
], uf = { 1: "wayfaring", 2: "wayfaring-p2", 3: "high-answer" };
function En(r = Zs) {
  try {
    const a = Number(localStorage.getItem(r));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function Eo() {
  try {
    const r = localStorage.getItem(Ta);
    return r === "3" && En(xa) === 4 ? 3 : En(Zs) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Av() {
  try {
    return En(ja) === 4 && localStorage.getItem(Ta) === "bridge";
  } catch {
    return !1;
  }
}
function Pv({ onBack: r }) {
  const [a, o] = _.useState(Eo), [d, c] = _.useState(Av), [f, p] = _.useState(() => ({
    1: En(Zs),
    2: En(ja),
    3: En(wo)
  })), [m, w] = _.useState(() => En(Eo() === 3 ? wo : Eo() === 2 ? ja : Zs)), L = f[a], [v, g] = _.useState(!1), [M, $] = _.useState("roots"), [T, N] = _.useState(bv), [x, I] = _.useState(null), [E, H] = _.useState(null), [K, G] = _.useState(""), D = _.useRef(new rr()), b = _.useRef(0), F = _.useRef(null);
  function se(W) {
    const U = Math.max(Fo, Math.min(Io, W));
    N(U), D.current.setLoopTempo(U);
    try {
      localStorage.setItem(Qf, String(U));
    } catch {
    }
  }
  function ee() {
    F.current?.(), b.current++, D.current.stop(), I(null), H(null);
  }
  _.useEffect(() => {
    const W = () => {
      document.hidden && (b.current++, D.current.stop(), I(null), H(null));
    };
    return document.addEventListener("visibilitychange", W), () => {
      document.removeEventListener("visibilitychange", W), b.current++, D.current.stop();
    };
  }, []);
  const ge = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [a])[0].positions[0], we = ge.strings.flatMap((W, U) => W.map((te) => Oe(U, te))).sort((W, U) => W.midi - U.midi || U.string - W.string), X = [...we, ...we.slice(1, -1).reverse()], ue = E === null ? null : X[E], Ee = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], be = ge.start, he = ge.end, A = (W) => Be(W) === 9, Q = (W) => m < 2 ? !0 : m === 2 ? v && A(W) : M === "scale" || M === "roots" && A(W), Y = we.filter((W) => Q(W.midi)).map((W) => ({
    ...W,
    label: m < 2 || m === 3 && M === "scale" ? Ae(W.midi) : "A",
    kind: m < 2 && ue?.string === W.string && ue.fret === W.fret ? "playing" : A(W.midi) ? "answer" : "shape"
  }));
  async function j(W) {
    F.current?.();
    const U = ++b.current;
    D.current.stop(), H(null), G(""), I(W);
    try {
      W === "phrase" ? await D.current.play(Ee) : await D.current.loop(X.map((te) => te.midi), (te) => {
        U === b.current && H(te);
      }, m === 2 ? T : ss);
    } catch (te) {
      U === b.current && G(Aa(te));
    } finally {
      U === b.current && (I(null), H(null));
    }
  }
  function C() {
    ee();
    const W = Math.min(4, m + 1);
    if (w(W), g(!1), $("roots"), W > L) {
      p((te) => ({ ...te, [a]: W }));
      const U = a === 1 ? Zs : a === 2 ? ja : wo;
      try {
        localStorage.setItem(U, String(W));
      } catch {
      }
    }
  }
  function oe(W) {
    W > L || (ee(), w(W), g(!1), $("roots"));
  }
  function V(W) {
    if (!(W === 2 && f[1] < 4) && !(W === 3 && En(xa) < 4)) {
      ee(), c(!1), o(W), w(f[W]), g(!1), $("roots"), G("");
      try {
        localStorage.setItem(Ta, String(W));
      } catch {
      }
    }
  }
  function ce() {
    if (!(f[2] < 4)) {
      ee(), c(!0), g(!1), G("");
      try {
        localStorage.setItem(Ta, "bridge");
      } catch {
      }
    }
  }
  return d ? /* @__PURE__ */ s.jsx(_v, { onBack: r, onPosition: V }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ee(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ s.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      a
    ] }),
    /* @__PURE__ */ s.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      a
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      be,
      "–",
      he,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => V(1), children: "Positio 1" }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => V(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: ce,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: En(xa) < 4,
          onClick: () => V(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: No.map((W, U) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: U === m ? "journey-step current" : "journey-step",
        "aria-current": U === m ? "step" : void 0,
        disabled: U > L,
        onClick: () => oe(U),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: U > L ? "🔒" : U < L ? "✓" : U + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: U === 4 ? `Positio ${a} harjoiteltu` : W.title })
        ]
      },
      W.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : No[m].title }),
        /* @__PURE__ */ s.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: No[m].detail }),
      m < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        m === 0 && /* @__PURE__ */ s.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          a === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ s.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ s.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ s.jsxs("p", { children: [
          a === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: T <= Fo,
              onClick: () => se(T - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            T,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: T >= Io,
              onClick: () => se(T + 5),
              children: "+ 5"
            }
          ),
          T !== ss && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => se(ss),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ s.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": x === "loop",
              onClick: () => x === "loop" ? ee() : void j("loop"),
              children: x === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => x === "phrase" ? ee() : void j("phrase"), children: x === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: x === "loop" ? ue && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ae(ue.midi, !1, !0)} · ${Qt[ue.string]}-kieli, nauha ${ue.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        K && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: K }),
        m >= 1 && m <= 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": v, onClick: () => g((W) => !W), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => oe(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              of.map((W) => /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: W.value,
                    checked: M === W.value,
                    onChange: () => $(W.value)
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { children: W.label })
              ] }, W.value))
            ] }),
            a !== 1 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
              j("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ s.jsx(ci, { area: { strings: [0, 1, 2, 3, 4, 5], min: be, max: he, fixed: "box" }, marks: Y, disabled: !0, follow: "playing", playback: x, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? of.find((W) => W.value === M).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(ci, { area: { strings: [0, 1, 2, 3, 4, 5], min: be, max: he, fixed: "box" }, marks: Y, disabled: !0, follow: "playing", playback: x, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        (m === 1 || m === 2) && /* @__PURE__ */ s.jsx(
          Qo,
          {
            pieceId: uf[a],
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: ee,
            stopHandleRef: F
          },
          `${uf[a]}:${m}`
        ),
        m === 3 && /* @__PURE__ */ s.jsx(Bf, {}, a),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: C, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ s.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => oe(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => V(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: ce, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => V(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        En(xa) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Lv = ["ionian", "aeolian"], ns = {
  ionian: {
    id: "ionian",
    title: "C-jooninen",
    alias: "Ionian · tavallinen duuri",
    tonic: 0,
    scaleKey: "ionian",
    tonicName: "C",
    chord: "C-duuri",
    noteNames: "C · D · E · F · G · A · B",
    explanation: "Seitsemän säveltä ja C kotisävelenä. Kuuntele, miten B pyrkii C:hen.",
    contrast: "A-aiolisessa ovat samat seitsemän säveltä, mutta A on kotisävel.",
    // A-kieli 3.–5., D-kieli 2.–5. ja G-kieli 2.–5. nauha.
    positions: [
      Oe(4, 3),
      Oe(4, 5),
      Oe(3, 2),
      Oe(3, 3),
      Oe(3, 5),
      Oe(2, 2),
      Oe(2, 4),
      Oe(2, 5)
    ],
    phrase: [48, 52, 55, 59, 60, 59, 55, 52, 48],
    accompaniment: [48, 52, 55, 52]
  },
  aeolian: {
    id: "aeolian",
    title: "A-aiolinen",
    alias: "Aeolian · luonnollinen molli",
    tonic: 9,
    scaleKey: "aeolian",
    tonicName: "A",
    chord: "A-molli",
    noteNames: "A · B · C · D · E · F · G",
    explanation: "A tuntuu nyt kotisäveleltä, vaikka sävelnimet ovat samat kuin C-duurissa.",
    contrast: "C-joonisessa C on kotisävel. Opettele kuulemaan A:n ja C:n eri vetovoima.",
    // Paksu E 5.–8., A-kieli 5.–8. ja D-kieli 5.–7. nauha.
    positions: [
      Oe(5, 5),
      Oe(5, 7),
      Oe(5, 8),
      Oe(4, 5),
      Oe(4, 7),
      Oe(4, 8),
      Oe(3, 5),
      Oe(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, Yf = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", Jf = "musiikin-kartta:moodipolku:active:v1", Rv = (r) => {
  const a = ns[r].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, $v = (r) => [...Rv(r), ns[r].positions[0]], cf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Sa(r) {
  try {
    const a = Number(localStorage.getItem(Yf(r)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function df() {
  try {
    return localStorage.getItem(Jf) === "aeolian" && Sa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Ov({ onBack: r }) {
  const [a, o] = _.useState(df), [d, c] = _.useState(() => ({
    ionian: Sa("ionian"),
    aeolian: Sa("aeolian")
  })), [f, p] = _.useState(() => Sa(df())), [m, w] = _.useState(null), [L, v] = _.useState(null), [g, M] = _.useState(!1), [$, T] = _.useState("roots"), [N, x] = _.useState(""), [I, E] = _.useState(null), [H, K] = _.useState(null), G = _.useRef(new rr()), D = _.useRef(0), b = _.useRef(null), F = ns[a], se = $v(a), ee = m === "scale" && L !== null ? se[L] : null;
  function ge() {
    b.current?.(), D.current++, G.current.stop(), w(null), v(null);
  }
  _.useEffect(() => {
    const C = () => {
      document.hidden && (D.current++, G.current.stop(), w(null), v(null));
    };
    return document.addEventListener("visibilitychange", C), () => {
      document.removeEventListener("visibilitychange", C), D.current++, G.current.stop();
    };
  }, []);
  async function we(C, oe, V = !1) {
    b.current?.();
    const ce = ++D.current;
    G.current.stop(), v(null), x(""), w(C);
    try {
      const W = V ? await G.current.loop(oe, void 0, 75) : await G.current.play(oe, (U) => {
        ce === D.current && C === "scale" && v(U);
      });
      return ce === D.current && W;
    } catch (W) {
      return ce === D.current && x(Aa(W)), !1;
    } finally {
      ce === D.current && (w(null), v(null));
    }
  }
  function X(C) {
    C > d[a] || (ge(), p(C), E(null), K(null), M(!1), T("roots"), x(""));
  }
  function ue() {
    ge();
    const C = Math.min(5, f + 1);
    if (p(C), E(null), K(null), M(!1), T("roots"), C > d[a]) {
      c((oe) => ({ ...oe, [a]: C }));
      try {
        localStorage.setItem(Yf(a), String(C));
      } catch {
      }
    }
  }
  function Ee(C) {
    if (!(C === "aeolian" && d.ionian < 5)) {
      ge(), o(C), p(d[C]), E(null), K(null), M(!1), T("roots"), x("");
      try {
        localStorage.setItem(Jf, C);
      } catch {
      }
    }
  }
  async function be() {
    ge(), K(null), E(null);
    const C = Math.random() < 0.5 ? "ionian" : "aeolian";
    await we("comparison", ns[C].phrase) && E(C);
  }
  const he = (C) => Be(C) === F.tonic, A = F.positions.filter((C) => f < 2 ? !0 : f === 2 ? g && he(C.midi) : f === 4 ? $ === "all" || $ === "roots" && he(C.midi) : !1).map((C) => ({
    ...C,
    label: f === 2 || f === 4 && $ === "roots" ? F.tonicName : Ae(C.midi),
    kind: ee?.string === C.string && ee.fret === C.fret ? "playing" : he(C.midi) ? "answer" : "shape"
  })), Q = [...new Set(F.positions.map((C) => C.string))], Y = Math.min(...F.positions.map((C) => C.fret)), j = Math.max(...F.positions.map((C) => C.fret));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ge(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ s.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Lv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ s.jsxs("h2", { id: "mode-path-title", children: [
      F.title,
      " · ",
      F.alias
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: F.explanation }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: F.noteNames }),
      " · Pohjasävel ",
      F.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => Ee("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: d.ionian < 5,
          onClick: () => Ee("aeolian"),
          children: [
            "2. A-aiolinen ",
            d.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ s.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      cf.map((C, oe) => /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: f === oe ? "journey-step current" : "journey-step",
          "aria-current": f === oe ? "step" : void 0,
          disabled: oe > d[a],
          onClick: () => X(oe),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: oe > d[a] ? "🔒" : oe < d[a] ? "✓" : oe + 1 }),
            /* @__PURE__ */ s.jsx("span", { children: C })
          ]
        },
        C
      )),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: f === 5 ? "journey-step current" : "journey-step",
          disabled: d[a] < 5,
          "aria-current": f === 5 ? "step" : void 0,
          onClick: () => X(5),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: d[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ s.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : cf[f] }),
        /* @__PURE__ */ s.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          F.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          F.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ s.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        F.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      f === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ s.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              disabled: m !== null,
              onClick: () => {
                be();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          I !== null && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            we("comparison", ns[I].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        I !== null && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: H !== null || m !== null,
                onClick: () => K("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: H !== null || m !== null,
                onClick: () => K("aeolian"),
                children: "A"
              }
            )
          ] }),
          H !== null && /* @__PURE__ */ s.jsxs("p", { role: "status", children: [
            H === I ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            ns[I].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Soita ",
          F.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          F.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          F.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([C, oe]) => /* @__PURE__ */ s.jsxs("label", { children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: C,
                checked: $ === C,
                onChange: () => T(C)
              }
            ),
            /* @__PURE__ */ s.jsx("span", { children: oe })
          ] }, C))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => M((C) => !C), children: g ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? ge() : void we("scale", se.map((C) => C.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? ge() : void we("accompaniment", F.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && ee && /* @__PURE__ */ s.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Ae(ee.midi, !1, !0),
        " · ",
        Qt[ee.string],
        "-kieli, nauha ",
        ee.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ s.jsx(
        ci,
        {
          area: { strings: Q, min: Y, max: j, fixed: "box" },
          marks: A,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: F.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ s.jsx(
        Qo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: ge,
          stopHandleRef: b
        },
        `nooa:${f}`
      ),
      N && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: N }),
      f < 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ s.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: ue, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          F.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ s.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => X(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => Ee("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ s.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function Fv({ onBack: r }) {
  const [a, o] = _.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ s.jsx(Pv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ s.jsx(Ov, { onBack: () => o(null) }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ s.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ s.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ s.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ s.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ s.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ s.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const es = [0, 2, 4, 5, 7, 9, 11], Iv = 1200, ka = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Dv({ onBack: r }) {
  const [a, o] = _.useState(0), [d, c] = _.useState([]), [f, p] = _.useState(!1), [m, w] = _.useState(""), [L, v] = _.useState(0), [g, M] = _.useState(!1), $ = a >= es.length, T = es[Math.min(a, es.length - 1)], N = us(ka.strings, ka.min, ka.max).filter((b) => Be(b.midi) === T), x = N.filter((b) => !d.includes(Ue(b))), I = x.length === 0 && !$, E = !I && f ? x[0] : void 0;
  _.useEffect(() => {
    if (!g || !I) return;
    const b = window.setTimeout(() => {
      o((F) => F + 1), c([]), p(!1), w("");
    }, Iv);
    return () => window.clearTimeout(b);
  }, [g, I]);
  const H = [
    ...N.filter((b) => d.includes(Ue(b))).map((b) => ({ ...b, kind: "answer", label: Ae(b.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function K(b) {
    if ($ || I) return;
    const F = Ue(b);
    if (Be(b.midi) !== T) {
      v((ge) => ge + 1), w(`Valitsit sävelen ${Ae(b.midi)}. Etsi ${Ae(T)}.`);
      return;
    }
    if (d.includes(F)) {
      w("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const se = [...d, F];
    c(se), p(!1);
    const ee = N.length - se.length;
    w(ee ? `Oikein! ${Ae(T)} löytyi ${Qt[b.string]}-kieleltä (${Ti(b.fret)}). Vielä ${ee}.` : `Löysit kaikki ${N.length} ${Ae(T)}-säveltä tällä alueella.`);
  }
  function G() {
    I && (o((b) => b + 1), c([]), p(!1), w(""));
  }
  function D() {
    o(0), c([]), p(!1), w(""), v(0);
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ s.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !$ && /* @__PURE__ */ s.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: g,
          onChange: (b) => M(b.target.checked)
        }
      ),
      /* @__PURE__ */ s.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: $ ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        L ? `Vääriä valintoja yhteensä ${L}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: D, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ae(T),
          "-sävelet"
        ] }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          es.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ae(T),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ s.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        d.length,
        " / ",
        N.length
      ] }),
      /* @__PURE__ */ s.jsx(
        ci,
        {
          area: ka,
          marks: H,
          onAnswer: K,
          disabled: I,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: I ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        !I && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((b) => !b),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        I && (g ? /* @__PURE__ */ s.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === es.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: G, children: a === es.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const zv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Co = ["C", "G", "D", "Em"], ff = ["C", "G", "D", "Em", "Am", "E", "A"], Bv = { min: 0, max: 3, fixed: "" };
function hf(r) {
  const a = [...r];
  for (let o = a.length - 1; o > 0; o--) {
    const d = Math.floor(Math.random() * (o + 1));
    [a[o], a[d]] = [a[d], a[o]];
  }
  return a;
}
function Vv({ onBack: r }) {
  const [a, o] = _.useState(4), [d, c] = _.useState(() => hf(Co)), [f, p] = _.useState(0), [m, w] = _.useState(null), [L, v] = _.useState([]), [g, M] = _.useState(0), $ = f >= d.length, T = zv[d[Math.min(f, d.length - 1)]], N = a === 4 ? Co : ff, x = T.frets.flatMap((b, F) => b === null ? [] : [F]), I = T.frets.flatMap((b, F) => b === null ? [F] : []), E = { ...Bv, strings: x }, H = T.frets.flatMap((b, F) => b === null ? [] : [{
    ...Oe(F, b),
    kind: b === 0 ? "anchor" : "shape",
    label: b === 0 ? "○" : "●"
  }]);
  function K(b = a) {
    o(b), c(hf(b === 4 ? Co : ff)), p(0), w(null), v([]), M(0);
  }
  function G(b) {
    m || $ || L.includes(b) || (b === T.name ? w(b) : (v((F) => [...F, b]), M((F) => F + 1)));
  }
  function D() {
    m && (p((b) => b + 1), w(null), v([]));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ s.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ s.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ s.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 4,
            onChange: () => K(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 7,
            onChange: () => K(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: $ ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        g ? `Vääriä valintoja yhteensä ${g}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => K(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sointu ",
          f + 1,
          " / ",
          d.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ s.jsx(
        ci,
        {
          area: E,
          marks: H,
          mutedStrings: I,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ s.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: N.map((b) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: m === b ? "right" : L.includes(b) ? "wrong" : "",
          disabled: !!m || L.includes(b),
          "aria-pressed": m === b,
          onClick: () => G(b),
          children: b
        },
        b
      )) }),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: m ? "feedback good" : L.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${T.name}-sointu.` : L.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: D, children: f === d.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ke = (r, a) => ({ first: r, ...a ? { second: a } : {} }), rs = () => [
  ke("Gm", "F"),
  ke("Gm"),
  ke("B♭", "F"),
  ke("Gm"),
  ke("Gm", "F"),
  ke("Gm"),
  ke("E♭", "F"),
  ke("Gm")
], as = () => [
  ke("B♭", "F"),
  ke("Gm", "Dm"),
  ke("E♭", "F"),
  ke("Gm", "Dm")
], ls = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Xf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Kv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: rs(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...as(), ke("E♭"), { ...ke("E♭"), passingBass: "F" }],
    lyrics: ls,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ke("Gm", "F"), ke("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: rs(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...as(), ke("E♭"), ke("F")],
    lyrics: ls
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ke("Gm"), ke("Dm"), ke("F"), ke("C"), ke("Gm"), ke("Dm"), ke("E♭"), ke("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: rs(),
    lyrics: Xf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...as(), ke("E♭", "F"), ke("Gm")],
    lyrics: ls
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ke("E♭", "F"),
      { ...ke("Gm"), possibleChord: "Dm" },
      ke("E♭", "F"),
      ke("Gm", "F"),
      { ...ke("Gm"), possibleChord: "Dm" },
      ke("Gm", "F"),
      ke("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Uv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: rs(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...as(), ke("E♭"), ke("E♭")],
    lyrics: ls
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: rs(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...as(), ke("E♭"), ke("F")],
    lyrics: ls
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ke("Gm"), ke("Dm"), ke("F"), ke("C"), ke("Gm"), ke("Dm"), ke("E♭"), ke("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: rs(),
    lyrics: Xf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...as(), ke("B♭", "F"), ke("Gm"), ke("E♭", "F"), ke("Gm")],
    lyrics: ls
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ke("E♭", "F"), ke("Gm", "F"), ke("E♭", "F"), ke("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], cs = {
  acoustic: Kv,
  normal: Uv
}, Hv = "normal", Do = "yksi-sointu-kaksi-askelta", Yo = {
  acoustic: Do + "-akustinen",
  normal: Do + "-normaali"
}, Zf = (r) => r === Do || Object.values(Yo).includes(r ?? "");
function Gv(r) {
  const a = Object.entries(Yo).find(([, o]) => o === r);
  return a ? a[0] : null;
}
const Wv = (r) => Yo[r], mf = (r) => {
  const a = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Jo(r, a = "acoustic") {
  const o = cs[a], d = o[r], c = o[r + 1];
  return c ? (c.start - d.start) / d.bars.length : 240 / 69;
}
function qf(r, a = "acoustic") {
  const o = cs[a], d = Math.max(0, Number.isFinite(r) ? r : 0);
  let c = 0;
  for (let g = 1; g < o.length && !(d < o[g].start); g++)
    c = g;
  const f = o[c];
  let p = 0;
  for (; p + 1 < f.bars.length && d >= ir(c, p + 1, a); )
    p++;
  const m = ir(c, p, a), w = Jo(c, a) / 4;
  let L = 1;
  for (; L < 4 && d >= m + L * w; ) L++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: c,
    barIndex: p,
    beat: L,
    chord: v.second && L >= 3 ? v.second : v.first
  };
}
function ir(r, a, o = "acoustic") {
  return cs[o][r].start + Jo(r, o) * a;
}
function Qv(r) {
  return cs[r].flatMap((a, o) => a.bars.flatMap((d, c) => {
    const f = ir(o, c, r), p = { section: a, sectionIndex: o, barIndex: c, part: "first", chord: d.first, time: f };
    if (!d.second) return [p];
    const m = Jo(o, r) / 2;
    return [p, { ...p, part: "second", chord: d.second, time: f + m }];
  }));
}
function Yv(r, a = "acoustic", o = !1) {
  const d = cs[a], c = qf(r, a), f = c.section.bars[c.barIndex], p = c.beat >= 3 && f.second ? "second" : "first", m = Qv(a), w = m.findIndex(($) => $.sectionIndex === c.sectionIndex && $.barIndex === c.barIndex && $.part === p), v = [
    ...m.slice(w + 1).map(($) => ({ ...$, wrapped: !1 })),
    ...o ? m.slice(0, w + 1).map(($) => ({ ...$, wrapped: !0 })) : []
  ].find(($) => $.chord !== c.chord) ?? null;
  let g = null;
  const M = c.sectionIndex === d.length - 1;
  if (c.barIndex === c.section.bars.length - 1 && (!M || o)) {
    const $ = M ? 0 : c.sectionIndex + 1, T = d[$], N = T.bars[0].first;
    g = {
      section: T,
      sectionIndex: $,
      firstChord: N,
      wrapped: M,
      continues: N === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: g };
}
function Jv(r) {
  const a = r.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), d = a.reduce((m, w) => m + o(w), 0);
  let c = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const w = Math.abs(d - 2 * p);
    (w < f || w === f && p >= d - p) && (c = m, f = w), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, c), a.slice(c)];
}
const zo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], eh = "musiikin-kartta:kappale-sointuvihjeet:v1", wa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, pf = {
  showChords: !0,
  level: 0,
  fadeOrder: wa
};
function ya(r, a) {
  return !a.showChords || a.level >= a.fadeOrder[r];
}
function vf(r) {
  if (!r) return { ...pf, fadeOrder: { ...wa } };
  try {
    const a = JSON.parse(r);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, d = o.level, c = { ...wa }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const m of zo)
        [1, 2, 3, 4].includes(p[m]) && (c[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof d == "number" && [0, 1, 2, 3, 4].includes(d) ? d : 0,
      fadeOrder: c
    };
  } catch {
    return { ...pf, fadeOrder: { ...wa } };
  }
}
function Xv() {
  try {
    return vf(localStorage.getItem(eh));
  } catch {
    return vf(null);
  }
}
const Zv = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function qv(r) {
  const a = Zv.exec(r.trim());
  if (!a) return r;
  const [, o, , d = "", c = ""] = a;
  return o + "5" + d + c;
}
const ek = (r, a) => a === "power" ? qv(r) : r, tk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], nk = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function ik({ version: r, position: a, loop: o = !1, onSeek: d }) {
  const [c, f] = _.useState(Xv), [p, m] = _.useState(null), [w, L] = _.useState(!1), [v, g] = _.useState(() => typeof matchMedia != "function" || matchMedia("(min-width: 701px)").matches), [M, $] = _.useState("full"), T = (A) => ek(A, M), N = cs[r], x = qf(a, r), { section: I, sectionIndex: E, barIndex: H, beat: K, chord: G } = x, D = K >= 3 && I.bars[H].second ? "second" : "first", b = (A, Q, Y) => `${r}:${A}:${Q}:${Y}`, F = (A, Q) => b(I.id, A, Q), se = F(H, D), ee = ya(G, c), ge = ee && p === se, we = (A, Q, Y) => !ya(A, c) || p === F(Q, Y), X = c.showChords && c.level === 0, ue = zo.filter((A) => ya(A, c)).length, Ee = c.showChords ? c.level === 0 ? "Kaikki soinnut näkyvät" : `Taso ${c.level} · piilossa ${ue}/6` : "Soinnut piilossa", { nextSection: be } = Yv(a, r, o), he = !!be && ya(be.firstChord, c);
  return _.useEffect(() => {
    m(null);
  }, [se]), _.useEffect(() => {
    try {
      localStorage.setItem(eh, JSON.stringify(c));
    } catch {
    }
  }, [c]), /* @__PURE__ */ s.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        c.showChords && c.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ s.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-section-jump",
            value: I.id,
            onChange: (A) => {
              const Q = N.find((Y) => Y.id === A.target.value);
              Q && d(Q.start);
            },
            children: N.map((A) => /* @__PURE__ */ s.jsxs("option", { value: A.id, children: [
              mf(A.start),
              " · ",
              A.title
            ] }, A.id))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ s.jsxs("p", { className: "song-current-chord", children: [
          ee && !ge ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ s.jsx("strong", { children: ee && !ge ? "?" : T(G) }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            I.title,
            ", tahti ",
            H + 1,
            ", isku ",
            K,
            "/4"
          ] }),
          ee && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ge ? null : se),
              children: ge ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        be && /* @__PURE__ */ s.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ s.jsx("strong", { children: he ? "?" : T(be.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": I.title + ": tahdit", children: I.bars.map((A, Q) => {
      const Y = Q === H, j = Y && (K < 3 || !A.second), C = Y && K >= 3 && !!A.second, oe = we(A.first, Q, "first"), V = A.second ? we(A.second, Q, "second") : !1, ce = (oe ? T(A.first) : "sointu piilossa") + (A.second ? " " + (V ? T(A.second) : "sointu piilossa") : "") + (X && A.passingBass ? " (basson kulku " + A.passingBass + ")" : "") + (X && A.possibleChord ? " (" + T(A.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (Y ? " active" : ""),
          "aria-pressed": Y,
          "aria-label": "Tahti " + (Q + 1) + ": " + ce + ". Siirry kohtaan " + mf(ir(E, Q, r)),
          onClick: () => d(ir(E, Q, r)),
          children: [
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              Q + 1
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ s.jsx("strong", { className: j && oe ? "now" : "", children: oe ? T(A.first) : "?" }),
              A.second && /* @__PURE__ */ s.jsx("strong", { className: C && V ? "now" : "", children: V ? T(A.second) : "?" })
            ] }),
            X && A.passingBass && /* @__PURE__ */ s.jsxs("small", { children: [
              "Basso: (",
              A.passingBass,
              "), isku 4"
            ] }),
            X && A.possibleChord && /* @__PURE__ */ s.jsxs("small", { children: [
              "Mahdollinen (",
              T(A.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        Q
      );
    }) }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-chart-settings", open: v, children: [
      /* @__PURE__ */ s.jsxs("summary", { onClick: (A) => {
        A.preventDefault(), g((Q) => !Q);
      }, children: [
        "Harjoituskartan asetukset",
        /* @__PURE__ */ s.jsx("span", { className: "song-chart-settings-state", children: Ee })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
        /* @__PURE__ */ s.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: c.showChords,
              onChange: (A) => {
                f((Q) => ({ ...Q, showChords: A.target.checked })), m(null);
              }
            }
          ),
          "Näytä soinnut"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: w,
              onChange: (A) => L(A.target.checked)
            }
          ),
          "Näytä koko sanoitus"
        ] }),
        /* @__PURE__ */ s.jsxs("fieldset", { className: "song-chord-display", children: [
          /* @__PURE__ */ s.jsx("legend", { children: "Sointumerkinnät" }),
          [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([A, Q]) => /* @__PURE__ */ s.jsxs("label", { children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "radio",
                name: "song-chord-display",
                value: A,
                checked: M === A,
                onChange: () => $(A)
              }
            ),
            /* @__PURE__ */ s.jsx("span", { children: Q })
          ] }, A))
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
          "Harjoitustaso",
          /* @__PURE__ */ s.jsx(
            "select",
            {
              id: "song-hint-level",
              value: c.level,
              disabled: !c.showChords,
              onChange: (A) => {
                const Q = Number(A.target.value);
                f((Y) => ({ ...Y, level: Q })), m(null);
              },
              children: tk.map((A) => /* @__PURE__ */ s.jsx("option", { value: A.value, children: A.label }, A.value))
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: ue === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${ue}/6 sointua` })
      ] }),
      c.showChords && c.level < 4 && /* @__PURE__ */ s.jsxs("details", { className: "song-fade-customize", children: [
        /* @__PURE__ */ s.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
        /* @__PURE__ */ s.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
        /* @__PURE__ */ s.jsx("div", { className: "song-fade-order", children: zo.map((A) => /* @__PURE__ */ s.jsxs("label", { children: [
          A,
          /* @__PURE__ */ s.jsx(
            "select",
            {
              "aria-label": A + ": piilotusvaihe",
              value: c.fadeOrder[A],
              onChange: (Q) => {
                const Y = Number(Q.target.value);
                f((j) => ({ ...j, fadeOrder: { ...j.fadeOrder, [A]: Y } })), m(null);
              },
              children: nk.map((Q) => /* @__PURE__ */ s.jsx("option", { value: Q.value, children: Q.label }, Q.value))
            }
          )
        ] }, A)) })
      ] })
    ] }),
    w ? /* @__PURE__ */ s.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ s.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ s.jsx("div", { className: "song-all-lyrics-grid", children: Jv(N).map((A, Q) => /* @__PURE__ */ s.jsx("div", { className: "song-lyrics-column", children: A.map((Y) => /* @__PURE__ */ s.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ s.jsx("h5", { children: Y.title }),
        Y.lyrics?.map((j, C) => /* @__PURE__ */ s.jsx("p", { children: j }, C))
      ] }, Y.id)) }, Q)) }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : I.lyrics && /* @__PURE__ */ s.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ s.jsxs("h4", { children: [
        I.title,
        ": sanat"
      ] }),
      I.lyrics.map((A, Q) => /* @__PURE__ */ s.jsx("p", { children: A }, Q))
    ] }),
    X && I.note && /* @__PURE__ */ s.jsx("p", { className: "song-chord-note", children: I.note })
  ] });
}
const Ma = 7, sk = { name: "bluesasteikko", base: Ie.SCALES.mp.base, add: [[6, "♭5"]] }, To = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ie.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: sk,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ie.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function rk(r) {
  return Ie.scaleNotes(r).map(([a, o]) => Ie.noteName(Ma, a, o));
}
const th = (r) => r === "pentatonic" ? 5 : 7;
function ak(r, a, o) {
  const d = a.filter((m) => m >= 1 && m <= th(r.system)), c = Ie.fingeringBoxes(Ma, r.scale, r.system, d, o);
  if (r.id !== "blues") return c;
  const f = r.scale.add.map(([m]) => (Ma + m) % 12), p = (m, w) => w >= 0 && w <= o && f.includes((Ie.OPEN_PITCHES[m] + w) % 12);
  return c.map((m) => ({ ...m, positions: m.positions.map((w) => {
    const L = w.strings.map((g, M) => {
      if (!g.length) return g;
      const $ = g[g.length - 1];
      return p(M, $ + 1) ? [...g.slice(0, -1), $ + 1] : g;
    }), v = L.flat();
    return { ...w, strings: L, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const kf = 17;
function lk({ open: r }) {
  const [a, o] = _.useState("mp"), [d, c] = _.useState({ pentatonic: [], "3nps": [] }), [f, p] = _.useState(!1), [m, w] = _.useState(!1), L = _.useRef(null), v = To.find((x) => x.id === a) ?? To[0], g = d[v.system], M = ak(v, g, kf), $ = M.some((x) => x.positions.length > 0), T = Ie.renderBoard(Ma, v.scale, kf, {
    automatic: !0,
    boxes: M,
    onlyBoxNotes: $ && f,
    label: v.title + (g.length ? ", " + g.map((x) => "boksi " + x).join(", ") : "")
  });
  _.useEffect(() => {
    const x = L.current;
    !x || !r || M.length === 1 && Ie.revealPositions(x, ".box-highlight");
  }, [T, r]);
  function N(x, I) {
    c((E) => ({ ...E, [v.system]: I ? [...E[v.system], x].sort((H, K) => H - K) : E[v.system].filter((H) => H !== x) }));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ s.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ s.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ s.jsx("select", { value: a, onChange: (x) => o(x.target.value), children: To.map((x) => /* @__PURE__ */ s.jsx("option", { value: x.id, children: x.title }, x.id)) })
    ] }) }),
    /* @__PURE__ */ s.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ s.jsx("strong", { children: v.title }),
      /* @__PURE__ */ s.jsx("span", { children: rk(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: L,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: T }
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (x) => {
        x.preventDefault(), w((I) => !I);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ s.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ s.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: th(v.system) }, (x, I) => I + 1).map((x) => /* @__PURE__ */ s.jsxs("label", { className: "box-toggle", "data-box": x, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            value: x,
            checked: g.includes(x),
            onChange: (I) => N(x, I.target.checked)
          }
        ),
        " Boksi ",
        x
      ] }, v.system + x)) }),
      /* @__PURE__ */ s.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: $ && f,
            disabled: !$,
            onChange: (x) => p(x.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: $ ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let nh = null;
function ok() {
  return Gv(new URLSearchParams(location.search).get("kappale")) ?? nh ?? Hv;
}
function uk(r) {
  nh = r;
  const a = new URL(location.href);
  Zf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Wv(r)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const ck = {
  acoustic: {
    label: "Akustinen versio",
    length: "3:53",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3",
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3",
    downloadSize: "5,3 Mt"
  },
  normal: {
    label: "Normaali versio",
    length: "3:32",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3",
    // Valmis kokonainen MP3 sellaisenaan, ei soittimen raitojen miksausta.
    download: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3",
    downloadSize: "4,9 Mt"
  }
}, yf = 1e-3;
function gf(r, a) {
  try {
    r.currentTime = a;
  } catch {
  }
}
function jf(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function dk({ onBack: r }) {
  const a = _.useRef(null), o = _.useRef(null), d = _.useRef(null), c = _.useRef(0), f = _.useRef(new zf()), p = _.useRef(null), [m, w] = _.useState(ok), L = ck[m], [v, g] = _.useState(!1), [M, $] = _.useState(!0), [T, N] = _.useState(!0), [x, I] = _.useState(!1), [E, H] = _.useState(!1), [K, G] = _.useState(!1), [D, b] = _.useState(Fp), [F] = _.useState(() => Yp()), se = _.useRef(null), [ee, ge] = _.useState(""), [we, X] = _.useState(0), [ue, Ee] = _.useState(0), [be, he] = _.useState("");
  function A(z = !1, ie) {
    const ae = a.current;
    if (ae)
      for (const de of [o.current, d.current])
        de && (!ie || de === ie) && f.current.align(ae, de, z);
  }
  function Q() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, M],
      ["vocals", d.current, T]
    ];
  }
  function Y(z = D, ie) {
    for (const [ae, de, Se] of Q()) {
      if (!de) continue;
      const xe = Bd(ae, z, ie?.[ae] ?? Se);
      if (F === "webaudio" && se.current?.routed(de))
        se.current.setLevel(de, xe);
      else
        try {
          de.volume = Bd(ae, z);
        } catch {
        }
    }
  }
  function j(z) {
    b(z), Ip(z), Y(z);
  }
  function C() {
    c.current++, a.current?.pause(), o.current?.pause(), d.current?.pause(), g(!1);
  }
  function oe(z) {
    if (z !== m) {
      p.current = null, C();
      for (const ie of [a.current, o.current, d.current])
        if (ie)
          try {
            ie.currentTime = 0;
          } catch {
          }
      X(0), Ee(0), he(""), w(z), uk(z);
    }
  }
  function V(z) {
    const ie = a.current;
    if (!ie || !Number.isFinite(z)) return;
    const ae = Math.max(0, Math.min(z, Number.isFinite(ie.duration) ? ie.duration : z));
    p.current = ae, X(ae), gf(ie, ae);
  }
  function ce(z) {
    const ie = p.current;
    if (ie === null || z !== a.current || z.seeking) return;
    const ae = Number.isFinite(z.duration) ? Math.min(ie, z.duration) : ie;
    if (ae !== ie && (p.current = ae, X(ae)), Math.abs(z.currentTime - ae) < yf) return;
    const de = z.seekable;
    for (let Se = 0; Se < de.length; Se++)
      if (de.start(Se) <= ae && ae <= de.end(Se)) {
        gf(z, ae);
        return;
      }
  }
  function W(z) {
    if (z !== a.current) return;
    const ie = p.current;
    if (ie === null)
      X(z.currentTime);
    else if (z.readyState >= 1 && !z.seeking && Math.abs(z.currentTime - ie) < yf) {
      p.current = null, A(!0);
      return;
    }
    z.paused || A();
  }
  async function U() {
    const z = a.current, ie = o.current, ae = d.current;
    if (!z || !ie || !ae) return;
    if (v) {
      C();
      return;
    }
    he("");
    const de = p.current ?? z.currentTime;
    if (Number.isFinite(z.duration) && de >= z.duration - 0.05 && V(0), ce(z), F === "webaudio") {
      const xe = se.current ??= new Zp(), Le = xe.unlock() && [z, ie, ae].map((He) => xe.route(He)).every(Boolean);
      ge(Le ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + xe.lastError);
    }
    Y(), ie.muted = !M, ae.muted = !T, A(!0);
    const Se = ++c.current;
    try {
      M || ie.pause(), T || ae.pause();
      const xe = [z.play(), ...M ? [ie.play()] : [], ...T ? [ae.play()] : []];
      if (await Promise.all(xe), Se !== c.current) return;
      if (A(), g(!0), F === "webaudio" && se.current?.routed(z)) {
        const Le = se.current;
        setTimeout(() => {
          Se === c.current && Le.state !== "running" && he(`Ääni ei käynnistynyt (Web Audio: ${Le.state}). Pysäytä ja soita uudelleen.${Le.lastError ? " " + Le.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Se !== c.current) return;
      C(), he("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function te(z, ie, ae) {
    if (!z) return;
    if (z.muted = !ie, !ie) {
      z.pause();
      return;
    }
    !a.current || !v || (A(!0, z), z.play().catch(() => he(ae + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function q(z) {
    $(z), Y(D, { guitar: z }), te(o.current, z, "Kitararaita");
  }
  function pe(z) {
    N(z), Y(D, { vocals: z }), te(d.current, z, "Lauluraita");
  }
  return _.useEffect(() => {
    const z = () => {
      document.hidden && C();
    };
    return document.addEventListener("visibilitychange", z), () => {
      document.removeEventListener("visibilitychange", z), c.current++, a.current?.pause(), o.current?.pause(), d.current?.pause(), se.current?.close();
    };
  }, []), _.useEffect(() => {
    Y();
  }, [m]), /* @__PURE__ */ s.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ s.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ s.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ s.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ s.jsxs(
        "select",
        {
          id: "song-version-select",
          value: m,
          onChange: (z) => oe(z.target.value),
          children: [
            /* @__PURE__ */ s.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ s.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          L.label,
          " · ",
          L.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          U();
        }, children: v ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: ue > 0 ? ue : 1,
            step: 0.1,
            value: Math.min(we, ue > 0 ? ue : 1),
            disabled: ue <= 0,
            onChange: (z) => V(Number(z.target.value))
          }
        ),
        /* @__PURE__ */ s.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          jf(we),
          " / ",
          jf(ue)
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: M,
              onChange: (z) => q(z.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: T,
              onChange: (z) => pe(z.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: x,
              onChange: (z) => I(z.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-volume", "data-volume-mode": F, children: [
          /* @__PURE__ */ s.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ s.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            D > 0 && /* @__PURE__ */ s.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            D > 50 && /* @__PURE__ */ s.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: D,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": D + " %",
              onChange: (z) => j(Number(z.target.value))
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-hidden": "true", children: [
            D,
            " %"
          ] })
        ] })
      ] }),
      ee && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: ee }),
      /* @__PURE__ */ s.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ s.jsxs("a", { href: L.download, download: L.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ s.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ s.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          L.label,
          ", koko kappale · ",
          L.downloadSize
        ] })
      ] }),
      be && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: be }),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: a,
          src: L.backing,
          preload: "metadata",
          loop: x,
          onLoadedMetadata: (z) => {
            z.currentTarget === a.current && (Ee(z.currentTarget.duration), ce(z.currentTarget));
          },
          onProgress: (z) => ce(z.currentTarget),
          onCanPlay: (z) => ce(z.currentTarget),
          onTimeUpdate: (z) => W(z.currentTarget),
          onEnded: (z) => {
            z.currentTarget !== a.current || z.currentTarget.loop || (p.current = null, o.current?.pause(), d.current?.pause(), g(!1), X(z.currentTarget.duration));
          },
          onPause: (z) => {
            z.currentTarget === a.current && g(!1);
          },
          onError: () => he(L.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: o,
          src: L.guitar,
          preload: "metadata",
          muted: !M,
          loop: x,
          onLoadedMetadata: () => {
            a.current?.paused && A(!0);
          },
          onError: () => he(L.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: d,
          src: L.vocals,
          preload: "metadata",
          muted: !T,
          loop: x,
          onLoadedMetadata: () => {
            a.current?.paused && A(!0);
          },
          onError: () => he(L.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-chart-collapse", open: E, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (z) => {
        z.preventDefault(), H((ie) => !ie);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ s.jsx(ik, { version: m, position: we, loop: x, onSeek: V })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-scales-collapse", open: K, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (z) => {
        z.preventDefault(), G((ie) => !ie);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ s.jsx(lk, { open: K })
    ] })
  ] });
}
const Bo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Na = (r, a = 1) => r.toFixed(a).replace(".", ",").replace("-", "−"), ih = (r) => {
  const a = Math.round(r);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Vo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function fk(r, a, o, d) {
  if (d) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Vo(o)}. Vaihda laite Mikrofonin asetuksista.`,
        "Äänikortti: kytke kitara soitintuloon (INST), käännä gain-säädintä ylemmäs ja avaa kitaran volume.",
        "Jos mittari liikkuu mutta jää kynnysviivan alle, mittaa taustakohina tai laske äänikynnystä."
      ];
    case "noise":
      return [
        "Soita vain yhtä kieltä ja vaimenna muut kädellä.",
        "Sammuta taustamusiikki ja muut äänet. Kaiuttimista kuuluva ääni sekoittaa tunnistusta.",
        "Soita hieman voimakkaammin ja anna sävelen soida hetki."
      ];
    case "untuned":
      return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${a.cents} senttiä.`];
    case "pitch":
      return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${a.stability} ms.`];
    default:
      return [];
  }
}
function sh({ frame: r, threshold: a }) {
  const o = r?.rms ?? 0, d = os(o), c = (r?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meter ${c}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, d)),
      "aria-valuetext": `${Na(Math.max(-60, d), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meter-fill", style: { width: `${Gd(o) * 100}%` } }),
        /* @__PURE__ */ s.jsx("div", { className: "meter-threshold", style: { left: `${Gd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function hk({ mic: r, frame: a, heard: o, s: d, now: c }) {
  const f = Uf(r.phase, a), p = o && c - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Ae(p.midi, d.flats, !0)} · ${ih(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Bo[f];
  return /* @__PURE__ */ s.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ s.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ s.jsx(sh, { frame: a, threshold: d.minRms })
  ] });
}
function mk({ mic: r, frame: a, heard: o, accepted: d, now: c, s: f, change: p, devices: m, locked: w, calibrating: L, calibration: v, onTest: g, onStop: M, onCalibrate: $ }) {
  const T = _.useId(), N = Uf(r.phase, a), x = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", I = r.phase === "on", E = o && c - o.at < 1500 ? o : null, H = E && (N === "pitch" || N === "untuned"), K = I && (a?.peak ?? 0) >= 0.98, G = r.phase === "error" ? [] : fk(N, f, r.info, K), D = !f.device || m.some((F) => F.deviceId === f.device), b = (F, se) => p({ ...f, [F]: se });
  return /* @__PURE__ */ s.jsxs("section", { className: "mic-panel", "aria-labelledby": `${T}-title`, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h2", { id: `${T}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ s.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ s.jsxs("p", { className: `mic-state ${N}`, "data-testid": "mic-state", "data-reading": N, children: [
      /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Bo[N],
      N === "pitch" && E ? ` ${Ae(E.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Vo(r.info)}.` : r.phase === "error" ? r.error : Bo[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    I && /* @__PURE__ */ s.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ s.jsxs("dd", { "data-testid": "mic-device", children: [
          Vo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ s.jsxs("dd", { children: [
          /* @__PURE__ */ s.jsx(sh, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ s.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Na(Math.max(-60, os(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: H ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ s.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: E ? Ae(E.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: H ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-frequency", children: E ? `${Na(E.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: H ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-cents", children: E ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          ih(E.cents),
          " senttiä",
          /* @__PURE__ */ s.jsx("span", { className: `cents ${E.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, E.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: H ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-clarity", children: E ? `${Math.round(E.clarity * 100)} %` : a?.clarity !== void 0 && N === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    I && d && c - d.timestamp < 4e3 && /* @__PURE__ */ s.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ae(d.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    G.length > 0 && I && /* @__PURE__ */ s.jsx("ul", { className: "mic-advice", children: G.map((F) => /* @__PURE__ */ s.jsx("li", { children: F }, F)) }),
    r.phase === "error" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
      x ? /* @__PURE__ */ s.jsx("button", { type: "button", onClick: M, children: "Lopeta testi" }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: f.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: w, onClick: g, children: "Testaa mikrofoni" }),
      x && I && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: L, onClick: $, children: L ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    w && r.purpose !== "test" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", disabled: w, children: [
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: `${T}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ s.jsxs("select", { id: `${T}-device`, value: f.device, onChange: (F) => b("device", F.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ s.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((F, se) => /* @__PURE__ */ s.jsx("option", { value: F.deviceId, children: F.label || `Äänitulo ${se + 1}` }, F.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${T}-rms`, children: [
              "Äänikynnys · ",
              Na(os(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${T}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (F) => b("minRms", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${T}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${T}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (F) => b("clarity", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${T}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${T}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (F) => b("stability", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${T}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${T}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (F) => b("cents", Number(F.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          m.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const pk = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ci[r.mode === "caged" ? "maj" : r.chord].tones, xf = (r, a) => pk(r).find(([o]) => o === a)?.[1], rh = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", vk = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function kk(r, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function yk(r, a, o, d, c) {
  return a.choices === "degree" ? `Oikein! ${qs(r.root, a.interval, a.degree)} on ${a.degree}. aste.` : rh(r) ? `Oikein! ${a.degree}. aste on ${qs(r.root, a.interval, a.degree)}.` : r.mode === "interval" ? `Oikein! ${Ae(a.reference, r.flats, !0)} → ${a.name} on ${er[a.interval]} ${vk(a)}.` : r.mode === "notes" ? o === "board" && c ? `Oikein! ${Ae(c.midi, r.flats)} on ${Nf[c.string]}: ${Ti(c.fret)}.` : `Oikein! Soitit sävelen ${Ae(d, r.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function gk(r, a, o, d, c) {
  if (o === "note") return `Ei ${Ae(d, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${xf(r, d) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!c) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Be(c.midi) === Be(a.midi);
  if (r.mode === "notes")
    return c.string !== a.position.string ? `Tuo on ${Qt[c.string]}-kieli. Etsi sävel ${Ho[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Ae(c.midi, r.flats)}. Etsi ${a.name}.`;
  if (rh(r)) {
    const p = Be(c.midi - r.root), m = xf(r, p), w = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && c.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${qs(r.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Ae(c.midi, r.flats)}, joka ei kuulu ${w}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ae(c.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function jk(r, a, o) {
  const d = Ae(o, r.flats, !0);
  return Be(o) === Be(a.midi) ? `Kuulin sävelen ${d}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${d}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function ah(r, a = !1) {
  const o = r.split(":"), d = (p) => Number(o[p]), c = (...p) => p.every((m) => Number.isInteger(d(m))), f = (p, m) => Qt[p] ? `${Qt[p]}-kieli, ${Ti(m)}` : null;
  switch (o[0]) {
    case "notes":
      return c(1, 2) ? f(d(1), d(2)) : null;
    case "ear-note":
      return c(1) ? `Kuultu sävel ${Ae(d(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && c(1) ? `Kuule ja toista: ${Ae(d(1), a, !0)}` : c(1, 2) && f(d(1), d(2)) ? `Kuule ja toista: ${f(d(1), d(2))}` : null;
    case "interval":
      return c(1) && er[d(1)] ? `${er[d(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!c(1, 3) || !Ci[p]) return null;
      const m = Ci[p].tones.find(([w]) => w === d(3))?.[1];
      return m ? `${Ef(d(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ie.SCALES[o[2]];
      if (!c(1) || !p) return null;
      const m = `${ui(d(1))}-${p.name}`;
      if (o.length === 5 && c(3)) {
        const w = Ie.scaleNotes(p).find(([L]) => L === d(3))?.[1];
        return w ? `${m}: ${w}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return c(3, 4) && f(d(3), d(4)) ? `${m}: ${f(d(3), d(4))}` : null;
    }
    case "caged": {
      if (!c(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${ui(d(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && c(3)) {
        const m = Ci.maj.tones.find(([w]) => w === d(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return c(3, 4) && f(d(3), d(4)) ? `${p}: ${f(d(3), d(4))}` : null;
    }
    default:
      return null;
  }
}
function Sf(r) {
  return Object.entries(r).flatMap(([a, o]) => {
    const [d, c, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: d, check: c, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Ko = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", xk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Sk(r) {
  const a = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${is(r.mode)}${r.hints ? ` · ${_a[r.hints].title}` : ""} · ${a} · keskimäärin ${Ko(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function wk({ store: r, s: a, locked: o, changed: d }) {
  const [c, f] = _.useState(""), p = _.useRef(null), { recent: m, sessions: w, stats: L } = r.data, v = Mi(a), g = Tf(a), M = [...new Set(m.map((E) => E.mode))].map((E) => {
    const H = m.filter((K) => K.mode === E);
    return { mode: E, ...Ao(H), last: Math.max(...H.map((K) => K.at)) };
  }).sort((E, H) => H.last - E.last), $ = Sf(L).filter((E) => !E.guided && E.mode === a.mode && E.input === v && E.check === g && E.stat.attempts >= 3).map((E) => ({ ...E, score: Go(E.stat), text: ah(E.item, a.flats) })).filter((E) => E.text && E.score < 0.8).sort((E, H) => E.score - H.score).slice(0, 5), T = Sf(L).reduce((E, H) => E + H.stat.attempts, 0);
  function N() {
    const E = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), H = URL.createObjectURL(E), K = document.createElement("a");
    K.href = H, K.download = "musiikin-kartta-harjoittelu.json", K.click(), setTimeout(() => URL.revokeObjectURL(H), 1e3);
  }
  async function x(E) {
    if (E)
      try {
        const H = await E.text();
        if (T && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(H), f("Varmuuskopio palautettu."), d();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function I() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), f("Harjoitustulokset poistettu."), d());
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    T === 0 ? /* @__PURE__ */ s.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        T,
        " vastattua kysymystä · ",
        w.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ s.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ s.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ s.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ s.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ s.jsx("tbody", { children: M.map((E) => /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "row", children: is(E.mode) }),
          /* @__PURE__ */ s.jsx("td", { children: E.count }),
          /* @__PURE__ */ s.jsx("td", { children: E.solo ? `${E.soloFirst}/${E.solo} · ${Math.round(E.soloFirst / E.solo * 100)} %` : "–" }),
          /* @__PURE__ */ s.jsx("td", { children: E.guided }),
          /* @__PURE__ */ s.jsx("td", { children: Ko(E.ms / E.count) })
        ] }, E.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi" }),
    $.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        is(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ s.jsx("ul", { children: $.map((E) => /* @__PURE__ */ s.jsxs("li", { children: [
        E.text,
        " · viime aikoina ",
        Math.round(tr(E.stat) * 100),
        " % heti oikein · ",
        Ko(nr(E.stat))
      ] }, E.key)) })
    ] }) : /* @__PURE__ */ s.jsx("p", { children: T ? `Harjoituksessa ${is(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        xk[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ s.jsx(Sp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: L, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      w.length ? /* @__PURE__ */ s.jsx("ul", { children: w.slice(-10).reverse().map((E) => /* @__PURE__ */ s.jsx("li", { children: Sk(E) }, E.id)) }) : /* @__PURE__ */ s.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ s.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: N, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ s.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (E) => {
          x(E.target.files?.[0]);
        } }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: o || !T, onClick: I, children: "Poista harjoitustulokset" })
      ] }),
      c && /* @__PURE__ */ s.jsx("p", { role: "status", children: c })
    ] }),
    r.warning && /* @__PURE__ */ s.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function Nk() {
  try {
    return new Rd(localStorage);
  } catch {
    return new Rd();
  }
}
const wf = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), Ek = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Ck = [0, 2, 4, 5, 7, 9, 11];
function Tk(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Mk() {
  const [r] = _.useState(Nk), [a, o] = _.useState(() => up(location.search, r.data.settings)), [, d] = _.useReducer((B) => B + 1, 0), c = _.useRef(null), f = _.useRef(new gv()), p = _.useRef(new rr()), m = _.useRef(0), w = _.useRef(), L = _.useRef(), v = _.useRef(null), g = _.useRef(0), M = _.useRef(null), $ = _.useRef(a);
  $.current = a;
  const [T, N] = _.useState({ phase: "off", purpose: "none" }), x = _.useRef(T), I = (B) => {
    x.current = B, N(B);
  }, [E, H] = _.useState(null), [K, G] = _.useState(null), [D, b] = _.useState(null), [F, se] = _.useState(0), [ee, ge] = _.useState([]), [we, X] = _.useState(!1), [ue, Ee] = _.useState(!1), [be, he] = _.useState(""), [A, Q] = _.useState("info"), [Y, j] = _.useState(""), [C, oe] = _.useState(0), [V, ce] = _.useState([]), [W, U] = _.useState([]), [te, q] = _.useState(null), [pe, z] = _.useState(!1), [ie, ae] = _.useState(""), [de, Se] = _.useState(""), [xe, Le] = _.useState(() => {
    const B = new URLSearchParams(location.search);
    return B.has("tila") || B.has("vanha") ? "legacy" : Zf(B.get("kappale")) ? "songs" : Lp(B.get("polku"));
  });
  function He() {
    Le(null);
    const B = new URL(location.href);
    B.searchParams.has("polku") && (B.searchParams.delete("polku"), history.replaceState(history.state, "", B.pathname + B.search + B.hash));
  }
  const Ye = () => {
    iv().then(ge).catch(() => {
    });
  };
  function We() {
    clearTimeout(L.current), v.current = null, z(!1);
  }
  function Xe() {
    H(null), G(null), b(null);
  }
  function ut() {
    f.current.stop(), We(), I({ phase: "off", purpose: "none" }), Xe();
  }
  async function Je(B) {
    if (f.current.active && x.current.phase === "on")
      return We(), I({ ...x.current, purpose: B }), f.current.rearm(), !0;
    I({ phase: "requesting", purpose: B }), Xe();
    try {
      const le = await f.current.start($.current.device, {
        ...wf($.current),
        onFrame: (De) => Jt.current.frame(De),
        onStableNote: (De) => Jt.current.stable(De)
      }, () => Jt.current.lost());
      return le ? (I({ phase: "on", purpose: B, info: le }), Ye(), !0) : !1;
    } catch (le) {
      return I({ phase: "error", purpose: "none", error: yv(le) }), !1;
    }
  }
  function Ve(B) {
    v.current?.push(B.rms);
    const le = performance.now();
    le - g.current < 66 || (g.current = le, H(B), se(le), B.midi !== void 0 && B.frequency !== void 0 && G({ midi: B.midi, frequency: B.frequency, cents: B.cents ?? 0, clarity: B.clarity ?? 0, tuned: B.status === "pitch", at: le }));
  }
  function it(B) {
    x.current.purpose === "test" ? b(B) : x.current.purpose === "round" && Ge(B.midi, "mic", void 0, B.heldMs);
  }
  function Bt() {
    const B = x.current.purpose === "round";
    We(), Xe(), I({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const le = c.current;
    B && le && ["active", "feedback", "paused"].includes(le.phase) && (_t(), Ee(!1), le.pause(), j("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), d());
  }
  const Jt = _.useRef({ frame: Ve, stable: it, lost: Bt });
  Jt.current = { frame: Ve, stable: it, lost: Bt };
  function Nt(B) {
    const le = Ea(B), De = le.device !== $.current.device;
    $.current = le, o(le), r.settings(le), j(""), f.current.active && (De && x.current.purpose === "test" ? (ut(), Je("test")) : f.current.setOptions(wf(le)));
  }
  function on(B) {
    Se(""), c.current = null, Le(B);
  }
  function Xt() {
    ae(""), Je("test");
  }
  function Zt() {
    x.current.phase !== "on" || x.current.purpose !== "test" || (We(), v.current = [], z(!0), ae("Mitataan taustakohinaa kolme sekuntia. Älä soita."), L.current = setTimeout(() => {
      const B = v.current ?? [];
      if (We(), B.length < 10) {
        ae("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: le, noise: De, loud: Rt } = jv(B);
      Nt({ ...$.current, minRms: le }), ae(`Taustakohina on ${Math.round(os(De))} dB ja äänikynnys nyt ${Math.round(os(le))} dB. ${Rt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function _t() {
    m.current++, clearTimeout(w.current), p.current.stop();
  }
  function Ne(B, le) {
    if (!B.results.length) return;
    const De = Ao(B.results);
    r.session({
      id: B.id,
      mode: B.settings.mode,
      count: De.count,
      first: De.first,
      ms: De.ms,
      solo: De.solo,
      soloFirst: De.soloFirst,
      hints: B.settings.hints,
      at: Date.now(),
      complete: le
    });
  }
  async function Vt(B) {
    if (!B.question?.sound.length || B.phase !== "active") return;
    _t();
    const le = m.current;
    B.pause(), f.current.pause(), Ee(!0), Q("info"), he("Kuuntele…"), d();
    try {
      await p.current.play(B.question.sound);
    } catch {
      le === m.current && j("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    le !== m.current || c.current !== B || (B.resume(), f.current.resume(), Ee(!1), he(""), d());
  }
  async function Me(B) {
    ce([]), U([]), q(null), j(""), oe(B.hintLevel), f.current.rearm(), Q("info"), he(""), d(), B.question?.sound.length && await Vt(B);
  }
  async function Pe() {
    const B = $.current, le = _o(B);
    if (le) {
      j(le);
      return;
    }
    _t();
    const De = m.current;
    if (j(""), ae(""), Se(""), va(B)) {
      X(!0);
      const dt = await Je("round");
      if (De !== m.current) return;
      if (X(!1), !dt) {
        j("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else x.current.phase !== "off" && ut();
    const Rt = new Pp(B, () => r.data.stats, (dt) => r.record(dt));
    try {
      Rt.start();
    } catch (dt) {
      x.current.purpose === "round" && ut(), j(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    c.current = Rt, requestAnimationFrame(() => M.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Me(Rt);
  }
  function Re() {
    _t(), X(!1), ut();
  }
  function Ge(B, le, De, Rt = 0) {
    const dt = c.current, bn = dt?.question;
    if (!dt || !bn || dt.phase !== "active") return;
    const ms = dt.answer(B, le, De, Rt);
    if (ms !== "ignored") {
      if (ms === "candidate")
        q(B), Q("bad"), he(jk(dt.settings, bn, B));
      else if (ms === "wrong")
        De ? ce((Vn) => [...Vn, De]) : U((Vn) => [...Vn, B]), Q("bad"), he(gk(dt.settings, bn, le, B, De));
      else if (q(null), Q("good"), he(yk(dt.settings, bn, le, B, De)), Ne(dt, !1), dt.settings.advance) {
        const Vn = m.current;
        w.current = setTimeout(() => {
          Vn === m.current && rt();
        }, le === "mic" ? 1800 : 1400);
      }
      d();
    }
  }
  async function rt() {
    const B = c.current;
    if (!(!B || B.phase !== "feedback")) {
      _t();
      try {
        B.next();
      } catch (le) {
        Lt(!1), j(le instanceof Error ? le.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (B.phase === "done") {
        Lt(!0);
        return;
      }
      await Me(B);
    }
  }
  function Lt(B = !1) {
    _t(), Ee(!1), X(!1), (x.current.purpose === "round" || x.current.phase === "requesting") && ut();
    const le = c.current;
    le && (le.stop(), Ne(le, B)), q(null), oe(0), ce([]), U([]), j(""), Se(B ? "complete" : "stopped"), Q("info"), he(""), d();
  }
  function vt() {
    const B = c.current;
    if (!B || !["active", "feedback", "paused"].includes(B.phase)) return;
    _t(), Ee(!1), B.pause();
    const le = x.current.purpose === "round";
    le && ut(), Q("info"), he(`Harjoitus on tauolla.${le ? " Mikrofoni on suljettu." : ""}`), d();
  }
  async function qt() {
    const B = c.current;
    if (!B || B.phase !== "paused" || ue) return;
    _t();
    const le = m.current;
    if (j(""), va(B.settings)) {
      X(!0);
      const De = await Je("round");
      if (le !== m.current) return;
      if (X(!1), !De) {
        j("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    B.resume(), Q("info"), he(""), d(), B.phase === "active" && (f.current.rearm(), B.question?.sound.length && await Vt(B));
  }
  function Cn(B) {
    const le = c.current;
    !le || le.phase !== "active" || (le.useHint(B), oe(B), d());
  }
  const kn = _.useRef({ hidden: () => {
  }, restored: () => {
  } });
  kn.current = {
    hidden: () => {
      const B = c.current;
      B && ["active", "feedback"].includes(B.phase) || ue ? vt() : x.current.phase !== "off" && x.current.phase !== "error" && (_t(), X(!1), ut());
    },
    restored: () => {
      X(!1), Ee(!1), I({ phase: "off", purpose: "none" }), Xe(), d();
    }
  }, _.useEffect(() => {
    Ye();
    const B = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", B);
    const le = () => {
      m.current++, clearTimeout(w.current), clearTimeout(L.current), f.current.stop(), p.current.stop(), kv(), c.current?.pause();
    }, De = () => {
      document.hidden && kn.current.hidden();
    }, Rt = (dt) => {
      dt.persisted && kn.current.restored();
    };
    return document.addEventListener("visibilitychange", De), window.addEventListener("pagehide", le), window.addEventListener("pageshow", Rt), () => {
      le(), navigator.mediaDevices?.removeEventListener?.("devicechange", B), document.removeEventListener("visibilitychange", De), window.removeEventListener("pagehide", le), window.removeEventListener("pageshow", Rt);
    };
  }, []);
  const yn = _.useRef(null), ar = `${c.current?.id}:${c.current?.index}:${c.current?.phase}:${ue}`;
  _.useEffect(() => {
    const B = c.current, le = M.current, De = document.activeElement;
    !B || !le || !(De === document.body || le.contains(De)) || (B.phase === "feedback" ? yn.current?.focus({ preventScroll: !0 }) : B.phase === "active" && !ue && (De === document.body || De === yn.current) && le.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [ar]);
  const Fe = c.current, et = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), Ze = et ? Fe.settings : a, ct = et ? Fe.question : void 0, Kt = !!ct && !!Fe?.answered, en = et && Fe.phase === "paused" && !ue && !Kt, bi = et && Fe.phase === "active" && !ue, Tn = et ? null : _o(a), zn = et || we, di = _i(Ze), ds = Np(Ze), fi = ct && !Kt ? C : 0, fs = ct ? Ap(Ze, ct, Kt ? 2 : fi) : { marks: [], text: "" }, lr = [...new Map([...fs.marks, ...Kt ? [] : V.map((B) => ({ ...B, label: Ae(B.midi, Ze.flats), kind: "wrong" }))].map((B) => [Ue(B), B])).values()], Mn = et && va(Ze), or = !!ct && !en && (ct.choices === "position" || lr.length > 0), jt = Fe ? Ao(Fe.results) : null, Pa = !Fe || Ze.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hs = Fe && !et ? Fe.results.filter((B) => B.errors > 0 || B.hint) : [], [ur, cr] = Tk(Ze), _n = /* @__PURE__ */ s.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ s.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ s.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Bn = r.data.notice === "hints-default" && /* @__PURE__ */ s.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ s.jsxs("p", { children: [
      /* @__PURE__ */ s.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ s.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ s.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ s.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
      r.dismissNotice(), d();
    }, children: "Selvä" })
  ] });
  return !et && xe === null ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    _n,
    Bn,
    /* @__PURE__ */ s.jsx($p, { onSelect: on })
  ] }) : !et && xe === "scales" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    _n,
    Bn,
    /* @__PURE__ */ s.jsx(Fv, { onBack: He })
  ] }) : !et && xe === "ear" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    _n,
    Bn,
    /* @__PURE__ */ s.jsx(Dv, { onBack: He })
  ] }) : !et && xe === "chords" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    _n,
    Bn,
    /* @__PURE__ */ s.jsx(Vv, { onBack: He })
  ] }) : !et && xe === "songs" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    _n,
    Bn,
    /* @__PURE__ */ s.jsx(dk, { onBack: He })
  ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    _n,
    Bn,
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsxs("a", { href: ur, children: [
      "Lue tämän harjoituksen teoria: ",
      cr,
      " →"
    ] }) }),
    xe !== "legacy" && /* @__PURE__ */ s.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && Lt(), He();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ s.jsx("h2", { children: xe === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ s.jsx("p", { children: xe === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ s.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ s.jsx("strong", { children: is(Ze.mode) }),
      " · ",
      Id(Ze)
    ] }) : xe === "legacy" ? /* @__PURE__ */ s.jsx(Dd, { s: a, change: Nt, locked: zn, problem: Tn }) : /* @__PURE__ */ s.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ s.jsx(Dd, { s: a, change: Nt, locked: zn, problem: Tn })
    ] }),
    !et && (xe === "legacy" || va(a)) && /* @__PURE__ */ s.jsx(
      mk,
      {
        mic: T,
        frame: E,
        heard: K,
        accepted: D,
        now: F,
        s: a,
        change: Nt,
        devices: ee,
        locked: we,
        calibrating: pe,
        calibration: ie,
        onTest: Xt,
        onStop: ut,
        onCalibrate: Zt
      }
    ),
    /* @__PURE__ */ s.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: M, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h2", { id: "session-title", children: is(Ze.mode) }),
        /* @__PURE__ */ s.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${_a[Ze.hints].title}${Pa}${Fe.phase === "paused" && !ue ? " · tauolla" : ""}` : de === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        Fe && Fe.results.length > 0 && jt ? /* @__PURE__ */ s.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ s.jsx("h3", { children: de === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ s.jsxs("dl", { children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-solo", children: jt.solo ? `${jt.soloFirst} / ${jt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ s.jsx("dd", { "data-testid": "summary-guided", children: jt.guided })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ s.jsx("dd", { children: Ek(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          hs.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ s.jsx("ul", { children: [...new Set(hs.map((B) => ah(B.item, a.flats)).filter(Boolean))].slice(0, 6).map((B) => /* @__PURE__ */ s.jsx("li", { children: B }, B)) })
          ] })
        ] }) : /* @__PURE__ */ s.jsx("p", { className: "question idle", children: Id(a) }),
        /* @__PURE__ */ s.jsx("div", { className: "action-row", children: we ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !!Tn, onClick: () => {
          Pe();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ct && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: en ? "Harjoitus on tauolla." : ct.prompt }),
        /* @__PURE__ */ s.jsx("p", { className: "how", "data-testid": "instruction", children: en ? "Kysymys palaa näkyviin, kun jatkat." : ue ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : kk(Ze, ct) }),
        Fe.hintLevel > 0 && !Kt && /* @__PURE__ */ s.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ze.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Mn && /* @__PURE__ */ s.jsx(hk, { mic: T, frame: E, heard: K, s: Ze, now: F }),
        ct.choices === "note" && !en && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ze.accidentals ? Array.from({ length: 12 }, (B, le) => le) : Ck).map((B) => /* @__PURE__ */ s.jsx("button", { type: "button", className: W.includes(B) ? "wrong" : Kt && B === ct.midi % 12 ? "right" : "", disabled: !bi || W.includes(B), onClick: () => Ge(B, "note"), children: Ae(B, Ze.flats) }, B)) }),
        ct.choices === "degree" && !en && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ze.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[Ze.scale]) : Ci[Ze.chord].tones).map(([B, le]) => /* @__PURE__ */ s.jsx("button", { type: "button", className: W.includes(B) ? "wrong" : Kt && B === ct.interval ? "right" : "", disabled: !bi || W.includes(B), onClick: () => Ge(B, "degree"), children: le }, B)) }),
        or && /* @__PURE__ */ s.jsx(
          ci,
          {
            area: ds,
            marks: lr,
            disabled: !bi || ct.choices !== "position" || Ze.input === "mic",
            onAnswer: (B) => Ge(B.midi, "board", B),
            caption: di.fixed === "shape" ? `${Ze.shape}-muodon alue` : di.fixed === "box" ? `Boksin ${Ze.box} alue` : "Otelauta"
          }
        ),
        !Kt && !en && fi > 0 && fs.text && /* @__PURE__ */ s.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: fs.text }),
        /* @__PURE__ */ s.jsx("p", { className: `feedback ${A}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: be }),
        te !== null && Fe.phase === "active" && /* @__PURE__ */ s.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), q(null), he("Kirjattu virheeksi. Etsi sävel uudelleen."), d();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ s.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        Y && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Y }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", ref: yn, onClick: () => {
            rt();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Kt && !ue && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            fi === 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Cn(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            fi === 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Cn(2), children: "Näytä vastaus" }),
            fi > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => oe(0), children: "Piilota vihje" })
          ] }),
          ct.sound.length > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: !bi, onClick: () => {
            Vt(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !ue ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: we, onClick: () => {
            qt();
          }, children: we ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: vt, children: "Tauko" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Lt(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && Ze.advance && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && Y && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Y })
    ] }),
    !et && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ s.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ie.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ s.jsx("a", { href: cp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ s.jsx(wk, { store: r, s: a, locked: zn, changed: () => {
        const B = Ea(r.data.settings);
        $.current = B, o(B), d();
      } }),
      /* @__PURE__ */ s.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ s.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ s.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ s.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ s.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ s.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ s.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ s.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
tp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ s.jsx(Mk, {}));
//# sourceMappingURL=app.js.map
