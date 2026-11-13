function zm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var fo = { exports: {} }, Qr = {}, ho = { exports: {} }, $e = {};
var gd;
function Bm() {
  if (gd) return $e;
  gd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), j = Symbol.iterator;
  function M(x) {
    return x === null || typeof x != "object" ? null : (x = j && x[j] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, E = {};
  function S(x, y, te) {
    this.props = x, this.context = y, this.refs = E, this.updater = te || $;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(x, y) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, y, "setState");
  }, S.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function I() {
  }
  I.prototype = S.prototype;
  function C(x, y, te) {
    this.props = x, this.context = y, this.refs = E, this.updater = te || $;
  }
  var U = C.prototype = new I();
  U.constructor = C, T(U, S.prototype), U.isPureReactComponent = !0;
  var V = Array.isArray, H = Object.prototype.hasOwnProperty, D = { current: null }, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(x, y, te) {
    var ue, ye = {}, Q = null, K = null;
    if (y != null) for (ue in y.ref !== void 0 && (K = y.ref), y.key !== void 0 && (Q = "" + y.key), y) H.call(y, ue) && !b.hasOwnProperty(ue) && (ye[ue] = y[ue]);
    var ne = arguments.length - 2;
    if (ne === 1) ye.children = te;
    else if (1 < ne) {
      for (var q = Array(ne), me = 0; me < ne; me++) q[me] = arguments[me + 2];
      ye.children = q;
    }
    if (x && x.defaultProps) for (ue in ne = x.defaultProps, ne) ye[ue] === void 0 && (ye[ue] = ne[ue]);
    return { $$typeof: s, type: x, key: Q, ref: K, props: ye, _owner: D.current };
  }
  function re(x, y) {
    return { $$typeof: s, type: x.type, key: y, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Z(x) {
    return typeof x == "object" && x !== null && x.$$typeof === s;
  }
  function ge(x) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(te) {
      return y[te];
    });
  }
  var we = /\/+/g;
  function J(x, y) {
    return typeof x == "object" && x !== null && x.key != null ? ge("" + x.key) : y.toString(36);
  }
  function oe(x, y, te, ue, ye) {
    var Q = typeof x;
    (Q === "undefined" || Q === "boolean") && (x = null);
    var K = !1;
    if (x === null) K = !0;
    else switch (Q) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case s:
          case a:
            K = !0;
        }
    }
    if (K) return K = x, ye = ye(K), x = ue === "" ? "." + J(K, 0) : ue, V(ye) ? (te = "", x != null && (te = x.replace(we, "$&/") + "/"), oe(ye, y, te, "", function(me) {
      return me;
    })) : ye != null && (Z(ye) && (ye = re(ye, te + (!ye.key || K && K.key === ye.key ? "" : ("" + ye.key).replace(we, "$&/") + "/") + x)), y.push(ye)), 1;
    if (K = 0, ue = ue === "" ? "." : ue + ":", V(x)) for (var ne = 0; ne < x.length; ne++) {
      Q = x[ne];
      var q = ue + J(Q, ne);
      K += oe(Q, y, te, q, ye);
    }
    else if (q = M(x), typeof q == "function") for (x = q.call(x), ne = 0; !(Q = x.next()).done; ) Q = Q.value, q = ue + J(Q, ne++), K += oe(Q, y, te, q, ye);
    else if (Q === "object") throw y = String(x), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function Ee(x, y, te) {
    if (x == null) return x;
    var ue = [], ye = 0;
    return oe(x, ue, "", "", function(Q) {
      return y.call(te, Q, ye++);
    }), ue;
  }
  function be(x) {
    if (x._status === -1) {
      var y = x._result;
      y = y(), y.then(function(te) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = te);
      }, function(te) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = te);
      }), x._status === -1 && (x._status = 0, x._result = y);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var he = { current: null }, P = { transition: null }, G = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: P, ReactCurrentOwner: D };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $e.Children = { map: Ee, forEach: function(x, y, te) {
    Ee(x, function() {
      y.apply(this, arguments);
    }, te);
  }, count: function(x) {
    var y = 0;
    return Ee(x, function() {
      y++;
    }), y;
  }, toArray: function(x) {
    return Ee(x, function(y) {
      return y;
    }) || [];
  }, only: function(x) {
    if (!Z(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, $e.Component = S, $e.Fragment = o, $e.Profiler = d, $e.PureComponent = C, $e.StrictMode = c, $e.Suspense = N, $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, $e.act = W, $e.cloneElement = function(x, y, te) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ue = T({}, x.props), ye = x.key, Q = x.ref, K = x._owner;
    if (y != null) {
      if (y.ref !== void 0 && (Q = y.ref, K = D.current), y.key !== void 0 && (ye = "" + y.key), x.type && x.type.defaultProps) var ne = x.type.defaultProps;
      for (q in y) H.call(y, q) && !b.hasOwnProperty(q) && (ue[q] = y[q] === void 0 && ne !== void 0 ? ne[q] : y[q]);
    }
    var q = arguments.length - 2;
    if (q === 1) ue.children = te;
    else if (1 < q) {
      ne = Array(q);
      for (var me = 0; me < q; me++) ne[me] = arguments[me + 2];
      ue.children = ne;
    }
    return { $$typeof: s, type: x.type, key: ye, ref: Q, props: ue, _owner: K };
  }, $e.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: f, _context: x }, x.Consumer = x;
  }, $e.createElement = F, $e.createFactory = function(x) {
    var y = F.bind(null, x);
    return y.type = x, y;
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, $e.isValidElement = Z, $e.lazy = function(x) {
    return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: be };
  }, $e.memo = function(x, y) {
    return { $$typeof: L, type: x, compare: y === void 0 ? null : y };
  }, $e.startTransition = function(x) {
    var y = P.transition;
    P.transition = {};
    try {
      x();
    } finally {
      P.transition = y;
    }
  }, $e.unstable_act = W, $e.useCallback = function(x, y) {
    return he.current.useCallback(x, y);
  }, $e.useContext = function(x) {
    return he.current.useContext(x);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(x) {
    return he.current.useDeferredValue(x);
  }, $e.useEffect = function(x, y) {
    return he.current.useEffect(x, y);
  }, $e.useId = function() {
    return he.current.useId();
  }, $e.useImperativeHandle = function(x, y, te) {
    return he.current.useImperativeHandle(x, y, te);
  }, $e.useInsertionEffect = function(x, y) {
    return he.current.useInsertionEffect(x, y);
  }, $e.useLayoutEffect = function(x, y) {
    return he.current.useLayoutEffect(x, y);
  }, $e.useMemo = function(x, y) {
    return he.current.useMemo(x, y);
  }, $e.useReducer = function(x, y, te) {
    return he.current.useReducer(x, y, te);
  }, $e.useRef = function(x) {
    return he.current.useRef(x);
  }, $e.useState = function(x) {
    return he.current.useState(x);
  }, $e.useSyncExternalStore = function(x, y, te) {
    return he.current.useSyncExternalStore(x, y, te);
  }, $e.useTransition = function() {
    return he.current.useTransition();
  }, $e.version = "18.3.1", $e;
}
var jd;
function Ko() {
  return jd || (jd = 1, ho.exports = Bm()), ho.exports;
}
var xd;
function Vm() {
  if (xd) return Qr;
  xd = 1;
  var s = Ko(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, N, L) {
    var v, j = {}, M = null, $ = null;
    L !== void 0 && (M = "" + L), N.key !== void 0 && (M = "" + N.key), N.ref !== void 0 && ($ = N.ref);
    for (v in N) c.call(N, v) && !f.hasOwnProperty(v) && (j[v] = N[v]);
    if (m && m.defaultProps) for (v in N = m.defaultProps, N) j[v] === void 0 && (j[v] = N[v]);
    return { $$typeof: a, type: m, key: M, ref: $, props: j, _owner: d.current };
  }
  return Qr.Fragment = o, Qr.jsx = p, Qr.jsxs = p, Qr;
}
var Sd;
function Km() {
  return Sd || (Sd = 1, fo.exports = Vm()), fo.exports;
}
var r = Km(), _ = Ko(), ma = {}, mo = { exports: {} }, zt = {}, po = { exports: {} }, vo = {};
var wd;
function Um() {
  return wd || (wd = 1, (function(s) {
    function a(P, G) {
      var W = P.length;
      P.push(G);
      e: for (; 0 < W; ) {
        var x = W - 1 >>> 1, y = P[x];
        if (0 < d(y, G)) P[x] = G, P[W] = y, W = x;
        else break e;
      }
    }
    function o(P) {
      return P.length === 0 ? null : P[0];
    }
    function c(P) {
      if (P.length === 0) return null;
      var G = P[0], W = P.pop();
      if (W !== G) {
        P[0] = W;
        e: for (var x = 0, y = P.length, te = y >>> 1; x < te; ) {
          var ue = 2 * (x + 1) - 1, ye = P[ue], Q = ue + 1, K = P[Q];
          if (0 > d(ye, W)) Q < y && 0 > d(K, ye) ? (P[x] = K, P[Q] = W, x = Q) : (P[x] = ye, P[ue] = W, x = ue);
          else if (Q < y && 0 > d(K, W)) P[x] = K, P[Q] = W, x = Q;
          else break e;
        }
      }
      return G;
    }
    function d(P, G) {
      var W = P.sortIndex - G.sortIndex;
      return W !== 0 ? W : P.id - G.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      s.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, m = p.now();
      s.unstable_now = function() {
        return p.now() - m;
      };
    }
    var N = [], L = [], v = 1, j = null, M = 3, $ = !1, T = !1, E = !1, S = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(P) {
      for (var G = o(L); G !== null; ) {
        if (G.callback === null) c(L);
        else if (G.startTime <= P) c(L), G.sortIndex = G.expirationTime, a(N, G);
        else break;
        G = o(L);
      }
    }
    function V(P) {
      if (E = !1, U(P), !T) if (o(N) !== null) T = !0, be(H);
      else {
        var G = o(L);
        G !== null && he(V, G.startTime - P);
      }
    }
    function H(P, G) {
      T = !1, E && (E = !1, I(F), F = -1), $ = !0;
      var W = M;
      try {
        for (U(G), j = o(N); j !== null && (!(j.expirationTime > G) || P && !ge()); ) {
          var x = j.callback;
          if (typeof x == "function") {
            j.callback = null, M = j.priorityLevel;
            var y = x(j.expirationTime <= G);
            G = s.unstable_now(), typeof y == "function" ? j.callback = y : j === o(N) && c(N), U(G);
          } else c(N);
          j = o(N);
        }
        if (j !== null) var te = !0;
        else {
          var ue = o(L);
          ue !== null && he(V, ue.startTime - G), te = !1;
        }
        return te;
      } finally {
        j = null, M = W, $ = !1;
      }
    }
    var D = !1, b = null, F = -1, re = 5, Z = -1;
    function ge() {
      return !(s.unstable_now() - Z < re);
    }
    function we() {
      if (b !== null) {
        var P = s.unstable_now();
        Z = P;
        var G = !0;
        try {
          G = b(!0, P);
        } finally {
          G ? J() : (D = !1, b = null);
        }
      } else D = !1;
    }
    var J;
    if (typeof C == "function") J = function() {
      C(we);
    };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), Ee = oe.port2;
      oe.port1.onmessage = we, J = function() {
        Ee.postMessage(null);
      };
    } else J = function() {
      S(we, 0);
    };
    function be(P) {
      b = P, D || (D = !0, J());
    }
    function he(P, G) {
      F = S(function() {
        P(s.unstable_now());
      }, G);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, s.unstable_continueExecution = function() {
      T || $ || (T = !0, be(H));
    }, s.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < P ? Math.floor(1e3 / P) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(N);
    }, s.unstable_next = function(P) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = M;
      }
      var W = M;
      M = G;
      try {
        return P();
      } finally {
        M = W;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(P, G) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var W = M;
      M = P;
      try {
        return G();
      } finally {
        M = W;
      }
    }, s.unstable_scheduleCallback = function(P, G, W) {
      var x = s.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? x + W : x) : W = x, P) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = W + y, P = { id: v++, callback: G, priorityLevel: P, startTime: W, expirationTime: y, sortIndex: -1 }, W > x ? (P.sortIndex = W, a(L, P), o(N) === null && P === o(L) && (E ? (I(F), F = -1) : E = !0, he(V, W - x))) : (P.sortIndex = y, a(N, P), T || $ || (T = !0, be(H))), P;
    }, s.unstable_shouldYield = ge, s.unstable_wrapCallback = function(P) {
      var G = M;
      return function() {
        var W = M;
        M = G;
        try {
          return P.apply(this, arguments);
        } finally {
          M = W;
        }
      };
    };
  })(vo)), vo;
}
var Nd;
function Hm() {
  return Nd || (Nd = 1, po.exports = Um()), po.exports;
}
var Ed;
function Gm() {
  if (Ed) return zt;
  Ed = 1;
  var s = Ko(), a = Hm();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, j = {};
  function M(e) {
    return N.call(j, e) ? !0 : N.call(v, e) ? !1 : L.test(e) ? j[e] = !0 : (v[e] = !0, !1);
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
  function E(e, t, n, i, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    S[e] = new E(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    S[t] = new E(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    S[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    S[e] = new E(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    S[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    S[e] = new E(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    S[e] = new E(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    S[e] = new E(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    S[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function C(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      C
    );
    S[t] = new E(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, C);
    S[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, C);
    S[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    S[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), S.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    S[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, i) {
    var l = S.hasOwnProperty(t) ? S[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T(t, n, l, i) && (n = null), i || l === null ? M(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var V = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), re = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.provider"), ge = /* @__PURE__ */ Symbol.for("react.context"), we = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), oe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ee = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.offscreen"), P = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, x;
  function y(e) {
    if (x === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
  }
  var te = !1;
  function ue(e, t) {
    if (!e || te) return "";
    te = !0;
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
                var g = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
              }
            while (1 <= h && 0 <= k);
          break;
        }
      }
    } finally {
      te = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function ye(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ue(e.type, !1), e;
      case 11:
        return e = ue(e.type.render, !1), e;
      case 1:
        return e = ue(e.type, !0), e;
      default:
        return "";
    }
  }
  function Q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case D:
        return "Portal";
      case re:
        return "Profiler";
      case F:
        return "StrictMode";
      case J:
        return "Suspense";
      case oe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ge:
        return (e.displayName || "Context") + ".Consumer";
      case Z:
        return (e._context.displayName || "Context") + ".Provider";
      case we:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ee:
        return t = e.displayName || null, t !== null ? t : Q(e.type) || "Memo";
      case be:
        t = e._payload, e = e._init;
        try {
          return Q(e(t));
        } catch {
        }
    }
    return null;
  }
  function K(e) {
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
        return Q(t);
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
  function ne(e) {
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
  function me(e) {
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
    e._valueTracker || (e._valueTracker = me(e));
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
  function ce(e, t) {
    var n = t.checked;
    return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Se(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ne(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function xe(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function Le(e, t) {
    xe(e, t);
    var n = ne(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ye(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ye(e, t.type, ne(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
      for (n = "" + ne(n), t = null, l = 0; l < e.length; l++) {
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
    return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
    e._wrapperState = { initialValue: ne(n) };
  }
  function Ve(e, t) {
    var n = ne(t.value), i = ne(t.defaultValue);
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
  function Yt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Nt, ln = (function(e) {
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
  function Jt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xt = {
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
  Object.keys(Xt).forEach(function(e) {
    _t.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Xt[t] = Xt[e];
    });
  });
  function Ne(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xt.hasOwnProperty(e) && Xt[e] ? ("" + t).trim() : t + "px";
  }
  function Vt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = Ne(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Me = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ae(e, t) {
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
  function st(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Lt = null, vt = null, Zt = null;
  function En(e) {
    if (e = Lr(e)) {
      if (typeof Lt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = _s(t), Lt(e.stateNode, e.type, t));
    }
  }
  function vn(e) {
    vt ? Zt ? Zt.push(e) : Zt = [e] : vt = e;
  }
  function kn() {
    if (vt) {
      var e = vt, t = Zt;
      if (Zt = vt = null, En(e), t) for (e = 0; e < t.length; e++) En(t[e]);
    }
  }
  function ss(e, t) {
    return e(t);
  }
  function Fe() {
  }
  var et = !1;
  function Ze(e, t, n) {
    if (et) return e(t, n);
    et = !0;
    try {
      return ss(e, t, n);
    } finally {
      et = !1, (vt !== null || Zt !== null) && (Fe(), kn());
    }
  }
  function ct(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = _s(n);
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
    var qt = {};
    Object.defineProperty(qt, "passive", { get: function() {
      Kt = !0;
    } }), window.addEventListener("test", qt, qt), window.removeEventListener("test", qt, qt);
  } catch {
    Kt = !1;
  }
  function bi(e, t, n, i, l, u, h, k, g) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, O);
    } catch (X) {
      this.onError(X);
    }
  }
  var Cn = !1, Dn = null, di = !1, dr = null, fi = { onError: function(e) {
    Cn = !0, Dn = e;
  } };
  function fr(e, t, n, i, l, u, h, k, g) {
    Cn = !1, Dn = null, bi.apply(fi, arguments);
  }
  function as(e, t, n, i, l, u, h, k, g) {
    if (fr.apply(this, arguments), Cn) {
      if (Cn) {
        var O = Dn;
        Cn = !1, Dn = null;
      } else throw Error(o(198));
      di || (di = !0, dr = O);
    }
  }
  function Tn(e) {
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
  function ls(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function jt(e) {
    if (Tn(e) !== e) throw Error(o(188));
  }
  function Aa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(o(188));
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
  function hr(e) {
    return e = Aa(e), e !== null ? os(e) : null;
  }
  function os(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = os(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var us = a.unstable_scheduleCallback, Mn = a.unstable_cancelCallback, zn = a.unstable_shouldYield, B = a.unstable_requestPaint, le = a.unstable_now, De = a.unstable_getCurrentPriorityLevel, Rt = a.unstable_ImmediatePriority, dt = a.unstable_UserBlockingPriority, _n = a.unstable_NormalPriority, mr = a.unstable_LowPriority, Bn = a.unstable_IdlePriority, cs = null, yn = null;
  function th(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(cs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var on = Math.clz32 ? Math.clz32 : rh, nh = Math.log, ih = Math.LN2;
  function rh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (nh(e) / ih | 0) | 0;
  }
  var ds = 64, fs = 4194304;
  function pr(e) {
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
  function hs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? i = pr(k) : (u &= h, u !== 0 && (i = pr(u)));
    } else h = n & ~l, h !== 0 ? i = pr(h) : u !== 0 && (i = pr(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - on(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function sh(e, t) {
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
  function ah(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - on(u), k = 1 << h, g = l[h];
      g === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = sh(k, t)) : g <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Pa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var e = ds;
    return ds <<= 1, (ds & 4194240) === 0 && (ds = 64), e;
  }
  function La(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = n;
  }
  function lh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - on(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Ra(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - on(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Qe = 0;
  function Xo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Zo, $a, qo, eu, tu, Oa = !1, ms = [], Vn = null, Kn = null, Un = null, kr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), Hn = [], oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function nu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        kr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yr.delete(t.pointerId);
    }
  }
  function gr(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Lr(t), t !== null && $a(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function uh(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Vn = gr(Vn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = gr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Un = gr(Un, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return kr.set(u, gr(kr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, yr.set(u, gr(yr.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function iu(e) {
    var t = hi(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ls(n), t !== null) {
            e.blockedOn = t, tu(e.priority, function() {
              qo(n);
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
  function ps(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Ge = i, n.target.dispatchEvent(i), Ge = null;
      } else return t = Lr(n), t !== null && $a(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ru(e, t, n) {
    ps(e) && n.delete(t);
  }
  function ch() {
    Oa = !1, Vn !== null && ps(Vn) && (Vn = null), Kn !== null && ps(Kn) && (Kn = null), Un !== null && ps(Un) && (Un = null), kr.forEach(ru), yr.forEach(ru);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Oa || (Oa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, ch)));
  }
  function xr(e) {
    function t(l) {
      return jr(l, e);
    }
    if (0 < ms.length) {
      jr(ms[0], e);
      for (var n = 1; n < ms.length; n++) {
        var i = ms[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Vn !== null && jr(Vn, e), Kn !== null && jr(Kn, e), Un !== null && jr(Un, e), kr.forEach(t), yr.forEach(t), n = 0; n < Hn.length; n++) i = Hn[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null); ) iu(n), n.blockedOn === null && Hn.shift();
  }
  var Ai = V.ReactCurrentBatchConfig, vs = !0;
  function dh(e, t, n, i) {
    var l = Qe, u = Ai.transition;
    Ai.transition = null;
    try {
      Qe = 1, Fa(e, t, n, i);
    } finally {
      Qe = l, Ai.transition = u;
    }
  }
  function fh(e, t, n, i) {
    var l = Qe, u = Ai.transition;
    Ai.transition = null;
    try {
      Qe = 4, Fa(e, t, n, i);
    } finally {
      Qe = l, Ai.transition = u;
    }
  }
  function Fa(e, t, n, i) {
    if (vs) {
      var l = Ia(e, t, n, i);
      if (l === null) tl(e, t, i, ks, n), nu(e, i);
      else if (uh(l, e, t, n, i)) i.stopPropagation();
      else if (nu(e, i), t & 4 && -1 < oh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Lr(l);
          if (u !== null && Zo(u), u = Ia(e, t, n, i), u === null && tl(e, t, i, ks, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else tl(e, t, i, null, n);
    }
  }
  var ks = null;
  function Ia(e, t, n, i) {
    if (ks = null, e = st(i), e = hi(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ls(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ks = e, null;
  }
  function su(e) {
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
          case _n:
          case mr:
            return 16;
          case Bn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, Da = null, ys = null;
  function au() {
    if (ys) return ys;
    var e, t = Da, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === l[u - i]; i++) ;
    return ys = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function gs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function js() {
    return !0;
  }
  function lu() {
    return !1;
  }
  function Ut(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? js : lu, this.isPropagationStopped = lu, this;
    }
    return W(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = js);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = js);
    }, persist: function() {
    }, isPersistent: js }), t;
  }
  var Pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, za = Ut(Pi), Sr = W({}, Pi, { view: 0, detail: 0 }), hh = Ut(Sr), Ba, Va, wr, xs = W({}, Sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ua, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (Ba = e.screenX - wr.screenX, Va = e.screenY - wr.screenY) : Va = Ba = 0, wr = e), Ba);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Va;
  } }), ou = Ut(xs), mh = W({}, xs, { dataTransfer: 0 }), ph = Ut(mh), vh = W({}, Sr, { relatedTarget: 0 }), Ka = Ut(vh), kh = W({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yh = Ut(kh), gh = W({}, Pi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), jh = Ut(gh), xh = W({}, Pi, { data: 0 }), uu = Ut(xh), Sh = {
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
  }, wh = {
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
  }, Nh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Eh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Nh[e]) ? !!t[e] : !1;
  }
  function Ua() {
    return Eh;
  }
  var Ch = W({}, Sr, { key: function(e) {
    if (e.key) {
      var t = Sh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = gs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ua, charCode: function(e) {
    return e.type === "keypress" ? gs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Th = Ut(Ch), Mh = W({}, xs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cu = Ut(Mh), _h = W({}, Sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ua }), bh = Ut(_h), Ah = W({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ph = Ut(Ah), Lh = W({}, xs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rh = Ut(Lh), $h = [9, 13, 27, 32], Ha = m && "CompositionEvent" in window, Nr = null;
  m && "documentMode" in document && (Nr = document.documentMode);
  var Oh = m && "TextEvent" in window && !Nr, du = m && (!Ha || Nr && 8 < Nr && 11 >= Nr), fu = " ", hu = !1;
  function mu(e, t) {
    switch (e) {
      case "keyup":
        return $h.indexOf(t.keyCode) !== -1;
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
  function pu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Li = !1;
  function Fh(e, t) {
    switch (e) {
      case "compositionend":
        return pu(t);
      case "keypress":
        return t.which !== 32 ? null : (hu = !0, fu);
      case "textInput":
        return e = t.data, e === fu && hu ? null : e;
      default:
        return null;
    }
  }
  function Ih(e, t) {
    if (Li) return e === "compositionend" || !Ha && mu(e, t) ? (e = au(), ys = Da = Gn = null, Li = !1, e) : null;
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
        return du && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dh[e.type] : t === "textarea";
  }
  function ku(e, t, n, i) {
    vn(i), t = Cs(t, "onChange"), 0 < t.length && (n = new za("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Er = null, Cr = null;
  function zh(e) {
    $u(e, 0);
  }
  function Ss(e) {
    var t = Ii(e);
    if (ie(t)) return e;
  }
  function Bh(e, t) {
    if (e === "change") return t;
  }
  var yu = !1;
  if (m) {
    var Ga;
    if (m) {
      var Wa = "oninput" in document;
      if (!Wa) {
        var gu = document.createElement("div");
        gu.setAttribute("oninput", "return;"), Wa = typeof gu.oninput == "function";
      }
      Ga = Wa;
    } else Ga = !1;
    yu = Ga && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    Er && (Er.detachEvent("onpropertychange", xu), Cr = Er = null);
  }
  function xu(e) {
    if (e.propertyName === "value" && Ss(Cr)) {
      var t = [];
      ku(t, Cr, e, st(e)), Ze(zh, t);
    }
  }
  function Vh(e, t, n) {
    e === "focusin" ? (ju(), Er = t, Cr = n, Er.attachEvent("onpropertychange", xu)) : e === "focusout" && ju();
  }
  function Kh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ss(Cr);
  }
  function Uh(e, t) {
    if (e === "click") return Ss(t);
  }
  function Hh(e, t) {
    if (e === "input" || e === "change") return Ss(t);
  }
  function Gh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : Gh;
  function Tr(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!N.call(t, l) || !un(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Su(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wu(e, t) {
    var n = Su(e);
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
      n = Su(n);
    }
  }
  function Nu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Eu() {
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
  function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Wh(e) {
    var t = Eu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Qa(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(i.start, l);
          i = i.end === void 0 ? u : Math.min(i.end, l), !e.extend && u > i && (l = i, i = u, u = l), l = wu(n, u);
          var h = wu(
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
  var Qh = m && "documentMode" in document && 11 >= document.documentMode, Ri = null, Ya = null, Mr = null, Ja = !1;
  function Cu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ja || Ri == null || Ri !== ae(i) || (i = Ri, "selectionStart" in i && Qa(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Mr && Tr(Mr, i) || (Mr = i, i = Cs(Ya, "onSelect"), 0 < i.length && (t = new za("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Ri)));
  }
  function ws(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $i = { animationend: ws("Animation", "AnimationEnd"), animationiteration: ws("Animation", "AnimationIteration"), animationstart: ws("Animation", "AnimationStart"), transitionend: ws("Transition", "TransitionEnd") }, Xa = {}, Tu = {};
  m && (Tu = document.createElement("div").style, "AnimationEvent" in window || (delete $i.animationend.animation, delete $i.animationiteration.animation, delete $i.animationstart.animation), "TransitionEvent" in window || delete $i.transitionend.transition);
  function Ns(e) {
    if (Xa[e]) return Xa[e];
    if (!$i[e]) return e;
    var t = $i[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Tu) return Xa[e] = t[n];
    return e;
  }
  var Mu = Ns("animationend"), _u = Ns("animationiteration"), bu = Ns("animationstart"), Au = Ns("transitionend"), Pu = /* @__PURE__ */ new Map(), Lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    Pu.set(e, t), f(t, [e]);
  }
  for (var Za = 0; Za < Lu.length; Za++) {
    var qa = Lu[Za], Yh = qa.toLowerCase(), Jh = qa[0].toUpperCase() + qa.slice(1);
    Wn(Yh, "on" + Jh);
  }
  Wn(Mu, "onAnimationEnd"), Wn(_u, "onAnimationIteration"), Wn(bu, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Au, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
  function Ru(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, as(i, t, void 0, e), e.currentTarget = null;
  }
  function $u(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], g = k.instance, O = k.currentTarget;
          if (k = k.listener, g !== u && l.isPropagationStopped()) break e;
          Ru(l, k, O), u = g;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], g = k.instance, O = k.currentTarget, k = k.listener, g !== u && l.isPropagationStopped()) break e;
          Ru(l, k, O), u = g;
        }
      }
    }
    if (di) throw e = dr, di = !1, dr = null, e;
  }
  function tt(e, t) {
    var n = t[ll];
    n === void 0 && (n = t[ll] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Ou(t, e, 2, !1), n.add(i));
  }
  function el(e, t, n) {
    var i = 0;
    t && (i |= 4), Ou(n, e, i, t);
  }
  var Es = "_reactListening" + Math.random().toString(36).slice(2);
  function br(e) {
    if (!e[Es]) {
      e[Es] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Xh.has(n) || el(n, !1, e), el(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Es] || (t[Es] = !0, el("selectionchange", !1, t));
    }
  }
  function Ou(e, t, n, i) {
    switch (su(t)) {
      case 1:
        var l = dh;
        break;
      case 4:
        l = fh;
        break;
      default:
        l = Fa;
    }
    n = l.bind(null, t, n, e), l = void 0, !Kt || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function tl(e, t, n, i, l) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var h = i.tag;
      if (h === 3 || h === 4) {
        var k = i.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (h === 4) for (h = i.return; h !== null; ) {
          var g = h.tag;
          if ((g === 3 || g === 4) && (g = h.stateNode.containerInfo, g === l || g.nodeType === 8 && g.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = hi(k), h === null) return;
          if (g = h.tag, g === 5 || g === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    Ze(function() {
      var O = u, X = st(n), ee = [];
      e: {
        var Y = Pu.get(e);
        if (Y !== void 0) {
          var de = za, pe = e;
          switch (e) {
            case "keypress":
              if (gs(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Th;
              break;
            case "focusin":
              pe = "focus", de = Ka;
              break;
            case "focusout":
              pe = "blur", de = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              de = Ka;
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
              de = ou;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = ph;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = bh;
              break;
            case Mu:
            case _u:
            case bu:
              de = yh;
              break;
            case Au:
              de = Ph;
              break;
            case "scroll":
              de = hh;
              break;
            case "wheel":
              de = Rh;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = jh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = cu;
          }
          var ke = (t & 4) !== 0, ft = !ke && e === "scroll", A = ke ? Y !== null ? Y + "Capture" : null : Y;
          ke = [];
          for (var w = O, R; w !== null; ) {
            R = w;
            var se = R.stateNode;
            if (R.tag === 5 && se !== null && (R = se, A !== null && (se = ct(w, A), se != null && ke.push(Ar(w, se, R)))), ft) break;
            w = w.return;
          }
          0 < ke.length && (Y = new de(Y, pe, null, n, X), ee.push({ event: Y, listeners: ke }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Y = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Y && n !== Ge && (pe = n.relatedTarget || n.fromElement) && (hi(pe) || pe[bn])) break e;
          if ((de || Y) && (Y = X.window === X ? X : (Y = X.ownerDocument) ? Y.defaultView || Y.parentWindow : window, de ? (pe = n.relatedTarget || n.toElement, de = O, pe = pe ? hi(pe) : null, pe !== null && (ft = Tn(pe), pe !== ft || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (de = null, pe = O), de !== pe)) {
            if (ke = ou, se = "onMouseLeave", A = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (ke = cu, se = "onPointerLeave", A = "onPointerEnter", w = "pointer"), ft = de == null ? Y : Ii(de), R = pe == null ? Y : Ii(pe), Y = new ke(se, w + "leave", de, n, X), Y.target = ft, Y.relatedTarget = R, se = null, hi(X) === O && (ke = new ke(A, w + "enter", pe, n, X), ke.target = R, ke.relatedTarget = ft, se = ke), ft = se, de && pe) t: {
              for (ke = de, A = pe, w = 0, R = ke; R; R = Oi(R)) w++;
              for (R = 0, se = A; se; se = Oi(se)) R++;
              for (; 0 < w - R; ) ke = Oi(ke), w--;
              for (; 0 < R - w; ) A = Oi(A), R--;
              for (; w--; ) {
                if (ke === A || A !== null && ke === A.alternate) break t;
                ke = Oi(ke), A = Oi(A);
              }
              ke = null;
            }
            else ke = null;
            de !== null && Fu(ee, Y, de, ke, !1), pe !== null && ft !== null && Fu(ee, ft, pe, ke, !0);
          }
        }
        e: {
          if (Y = O ? Ii(O) : window, de = Y.nodeName && Y.nodeName.toLowerCase(), de === "select" || de === "input" && Y.type === "file") var je = Bh;
          else if (vu(Y)) if (yu) je = Hh;
          else {
            je = Kh;
            var Ce = Vh;
          }
          else (de = Y.nodeName) && de.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (je = Uh);
          if (je && (je = je(e, O))) {
            ku(ee, je, n, X);
            break e;
          }
          Ce && Ce(e, Y, O), e === "focusout" && (Ce = Y._wrapperState) && Ce.controlled && Y.type === "number" && Ye(Y, "number", Y.value);
        }
        switch (Ce = O ? Ii(O) : window, e) {
          case "focusin":
            (vu(Ce) || Ce.contentEditable === "true") && (Ri = Ce, Ya = O, Mr = null);
            break;
          case "focusout":
            Mr = Ya = Ri = null;
            break;
          case "mousedown":
            Ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ja = !1, Cu(ee, n, X);
            break;
          case "selectionchange":
            if (Qh) break;
          case "keydown":
          case "keyup":
            Cu(ee, n, X);
        }
        var Te;
        if (Ha) e: {
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
        else Li ? mu(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (du && n.locale !== "ko" && (Li || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Li && (Te = au()) : (Gn = X, Da = "value" in Gn ? Gn.value : Gn.textContent, Li = !0)), Ce = Cs(O, _e), 0 < Ce.length && (_e = new uu(_e, e, null, n, X), ee.push({ event: _e, listeners: Ce }), Te ? _e.data = Te : (Te = pu(n), Te !== null && (_e.data = Te)))), (Te = Oh ? Fh(e, n) : Ih(e, n)) && (O = Cs(O, "onBeforeInput"), 0 < O.length && (X = new uu("onBeforeInput", "beforeinput", null, n, X), ee.push({ event: X, listeners: O }), X.data = Te));
      }
      $u(ee, t);
    });
  }
  function Ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Cs(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = ct(e, n), u != null && i.unshift(Ar(e, u, l)), u = ct(e, t), u != null && i.push(Ar(e, u, l))), e = e.return;
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
  function Fu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, g = k.alternate, O = k.stateNode;
      if (g !== null && g === i) break;
      k.tag === 5 && O !== null && (k = O, l ? (g = ct(n, u), g != null && h.unshift(Ar(n, g, k))) : l || (g = ct(n, u), g != null && h.push(Ar(n, g, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Zh = /\r\n?/g, qh = /\u0000|\uFFFD/g;
  function Iu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zh, `
`).replace(qh, "");
  }
  function Ts(e, t, n) {
    if (t = Iu(t), Iu(e) !== t && n) throw Error(o(425));
  }
  function Ms() {
  }
  var nl = null, il = null;
  function rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var sl = typeof setTimeout == "function" ? setTimeout : void 0, em = typeof clearTimeout == "function" ? clearTimeout : void 0, Du = typeof Promise == "function" ? Promise : void 0, tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Du < "u" ? function(e) {
    return Du.resolve(null).then(e).catch(nm);
  } : sl;
  function nm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function al(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), xr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    xr(t);
  }
  function Qn(e) {
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
  function zu(e) {
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
  var Fi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fi, Pr = "__reactProps$" + Fi, bn = "__reactContainer$" + Fi, ll = "__reactEvents$" + Fi, im = "__reactListeners$" + Fi, rm = "__reactHandles$" + Fi;
  function hi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bn] || n[gn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zu(e); e !== null; ) {
          if (n = e[gn]) return n;
          e = zu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Lr(e) {
    return e = e[gn] || e[bn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function _s(e) {
    return e[Pr] || null;
  }
  var ol = [], Di = -1;
  function Yn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Di || (e.current = ol[Di], ol[Di] = null, Di--);
  }
  function qe(e, t) {
    Di++, ol[Di] = e.current, e.current = t;
  }
  var Jn = {}, Et = Yn(Jn), $t = Yn(!1), mi = Jn;
  function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function bs() {
    nt($t), nt(Et);
  }
  function Bu(e, t, n) {
    if (Et.current !== Jn) throw Error(o(168));
    qe(Et, t), qe($t, n);
  }
  function Vu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, K(e) || "Unknown", l));
    return W({}, n, i);
  }
  function As(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, mi = Et.current, qe(Et, e), qe($t, $t.current), !0;
  }
  function Ku(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Vu(e, t, mi), i.__reactInternalMemoizedMergedChildContext = e, nt($t), nt(Et), qe(Et, e)) : nt($t), qe($t, n);
  }
  var An = null, Ps = !1, ul = !1;
  function Uu(e) {
    An === null ? An = [e] : An.push(e);
  }
  function sm(e) {
    Ps = !0, Uu(e);
  }
  function Xn() {
    if (!ul && An !== null) {
      ul = !0;
      var e = 0, t = Qe;
      try {
        var n = An;
        for (Qe = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        An = null, Ps = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), us(Rt, Xn), l;
      } finally {
        Qe = t, ul = !1;
      }
    }
    return null;
  }
  var Bi = [], Vi = 0, Ls = null, Rs = 0, en = [], tn = 0, pi = null, Pn = 1, Ln = "";
  function vi(e, t) {
    Bi[Vi++] = Rs, Bi[Vi++] = Ls, Ls = e, Rs = t;
  }
  function Hu(e, t, n) {
    en[tn++] = Pn, en[tn++] = Ln, en[tn++] = pi, pi = e;
    var i = Pn;
    e = Ln;
    var l = 32 - on(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - on(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, Pn = 1 << 32 - on(t) + l | n << l | i, Ln = u + e;
    } else Pn = 1 << u | n << l | i, Ln = e;
  }
  function cl(e) {
    e.return !== null && (vi(e, 1), Hu(e, 1, 0));
  }
  function dl(e) {
    for (; e === Ls; ) Ls = Bi[--Vi], Bi[Vi] = null, Rs = Bi[--Vi], Bi[Vi] = null;
    for (; e === pi; ) pi = en[--tn], en[tn] = null, Ln = en[--tn], en[tn] = null, Pn = en[--tn], en[tn] = null;
  }
  var Ht = null, Gt = null, rt = !1, cn = null;
  function Gu(e, t) {
    var n = an(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Wu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ht = e, Gt = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ht = e, Gt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: Pn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = an(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ht = e, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function fl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function hl(e) {
    if (rt) {
      var t = Gt;
      if (t) {
        var n = t;
        if (!Wu(e, t)) {
          if (fl(e)) throw Error(o(418));
          t = Qn(n.nextSibling);
          var i = Ht;
          t && Wu(e, t) ? Gu(i, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Ht = e);
        }
      } else {
        if (fl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Ht = e;
      }
    }
  }
  function Qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ht = e;
  }
  function $s(e) {
    if (e !== Ht) return !1;
    if (!rt) return Qu(e), rt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rl(e.type, e.memoizedProps)), t && (t = Gt)) {
      if (fl(e)) throw Yu(), Error(o(418));
      for (; t; ) Gu(e, t), t = Qn(t.nextSibling);
    }
    if (Qu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Gt = Qn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Gt = null;
      }
    } else Gt = Ht ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Yu() {
    for (var e = Gt; e; ) e = Qn(e.nextSibling);
  }
  function Ki() {
    Gt = Ht = null, rt = !1;
  }
  function ml(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var am = V.ReactCurrentBatchConfig;
  function Rr(e, t, n) {
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
  function Os(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ju(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xu(e) {
    function t(A, w) {
      if (e) {
        var R = A.deletions;
        R === null ? (A.deletions = [w], A.flags |= 16) : R.push(w);
      }
    }
    function n(A, w) {
      if (!e) return null;
      for (; w !== null; ) t(A, w), w = w.sibling;
      return null;
    }
    function i(A, w) {
      for (A = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? A.set(w.key, w) : A.set(w.index, w), w = w.sibling;
      return A;
    }
    function l(A, w) {
      return A = si(A, w), A.index = 0, A.sibling = null, A;
    }
    function u(A, w, R) {
      return A.index = R, e ? (R = A.alternate, R !== null ? (R = R.index, R < w ? (A.flags |= 2, w) : R) : (A.flags |= 2, w)) : (A.flags |= 1048576, w);
    }
    function h(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function k(A, w, R, se) {
      return w === null || w.tag !== 6 ? (w = so(R, A.mode, se), w.return = A, w) : (w = l(w, R), w.return = A, w);
    }
    function g(A, w, R, se) {
      var je = R.type;
      return je === b ? X(A, w, R.props.children, se, R.key) : w !== null && (w.elementType === je || typeof je == "object" && je !== null && je.$$typeof === be && Ju(je) === w.type) ? (se = l(w, R.props), se.ref = Rr(A, w, R), se.return = A, se) : (se = aa(R.type, R.key, R.props, null, A.mode, se), se.ref = Rr(A, w, R), se.return = A, se);
    }
    function O(A, w, R, se) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== R.containerInfo || w.stateNode.implementation !== R.implementation ? (w = ao(R, A.mode, se), w.return = A, w) : (w = l(w, R.children || []), w.return = A, w);
    }
    function X(A, w, R, se, je) {
      return w === null || w.tag !== 7 ? (w = Ni(R, A.mode, se, je), w.return = A, w) : (w = l(w, R), w.return = A, w);
    }
    function ee(A, w, R) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = so("" + w, A.mode, R), w.return = A, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case H:
            return R = aa(w.type, w.key, w.props, null, A.mode, R), R.ref = Rr(A, null, w), R.return = A, R;
          case D:
            return w = ao(w, A.mode, R), w.return = A, w;
          case be:
            var se = w._init;
            return ee(A, se(w._payload), R);
        }
        if (We(w) || G(w)) return w = Ni(w, A.mode, R, null), w.return = A, w;
        Os(A, w);
      }
      return null;
    }
    function Y(A, w, R, se) {
      var je = w !== null ? w.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return je !== null ? null : k(A, w, "" + R, se);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            return R.key === je ? g(A, w, R, se) : null;
          case D:
            return R.key === je ? O(A, w, R, se) : null;
          case be:
            return je = R._init, Y(
              A,
              w,
              je(R._payload),
              se
            );
        }
        if (We(R) || G(R)) return je !== null ? null : X(A, w, R, se, null);
        Os(A, R);
      }
      return null;
    }
    function de(A, w, R, se, je) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return A = A.get(R) || null, k(w, A, "" + se, je);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case H:
            return A = A.get(se.key === null ? R : se.key) || null, g(w, A, se, je);
          case D:
            return A = A.get(se.key === null ? R : se.key) || null, O(w, A, se, je);
          case be:
            var Ce = se._init;
            return de(A, w, R, Ce(se._payload), je);
        }
        if (We(se) || G(se)) return A = A.get(R) || null, X(w, A, se, je, null);
        Os(w, se);
      }
      return null;
    }
    function pe(A, w, R, se) {
      for (var je = null, Ce = null, Te = w, _e = w = 0, gt = null; Te !== null && _e < R.length; _e++) {
        Te.index > _e ? (gt = Te, Te = null) : gt = Te.sibling;
        var Ke = Y(A, Te, R[_e], se);
        if (Ke === null) {
          Te === null && (Te = gt);
          break;
        }
        e && Te && Ke.alternate === null && t(A, Te), w = u(Ke, w, _e), Ce === null ? je = Ke : Ce.sibling = Ke, Ce = Ke, Te = gt;
      }
      if (_e === R.length) return n(A, Te), rt && vi(A, _e), je;
      if (Te === null) {
        for (; _e < R.length; _e++) Te = ee(A, R[_e], se), Te !== null && (w = u(Te, w, _e), Ce === null ? je = Te : Ce.sibling = Te, Ce = Te);
        return rt && vi(A, _e), je;
      }
      for (Te = i(A, Te); _e < R.length; _e++) gt = de(Te, A, _e, R[_e], se), gt !== null && (e && gt.alternate !== null && Te.delete(gt.key === null ? _e : gt.key), w = u(gt, w, _e), Ce === null ? je = gt : Ce.sibling = gt, Ce = gt);
      return e && Te.forEach(function(ai) {
        return t(A, ai);
      }), rt && vi(A, _e), je;
    }
    function ke(A, w, R, se) {
      var je = G(R);
      if (typeof je != "function") throw Error(o(150));
      if (R = je.call(R), R == null) throw Error(o(151));
      for (var Ce = je = null, Te = w, _e = w = 0, gt = null, Ke = R.next(); Te !== null && !Ke.done; _e++, Ke = R.next()) {
        Te.index > _e ? (gt = Te, Te = null) : gt = Te.sibling;
        var ai = Y(A, Te, Ke.value, se);
        if (ai === null) {
          Te === null && (Te = gt);
          break;
        }
        e && Te && ai.alternate === null && t(A, Te), w = u(ai, w, _e), Ce === null ? je = ai : Ce.sibling = ai, Ce = ai, Te = gt;
      }
      if (Ke.done) return n(
        A,
        Te
      ), rt && vi(A, _e), je;
      if (Te === null) {
        for (; !Ke.done; _e++, Ke = R.next()) Ke = ee(A, Ke.value, se), Ke !== null && (w = u(Ke, w, _e), Ce === null ? je = Ke : Ce.sibling = Ke, Ce = Ke);
        return rt && vi(A, _e), je;
      }
      for (Te = i(A, Te); !Ke.done; _e++, Ke = R.next()) Ke = de(Te, A, _e, Ke.value, se), Ke !== null && (e && Ke.alternate !== null && Te.delete(Ke.key === null ? _e : Ke.key), w = u(Ke, w, _e), Ce === null ? je = Ke : Ce.sibling = Ke, Ce = Ke);
      return e && Te.forEach(function(Dm) {
        return t(A, Dm);
      }), rt && vi(A, _e), je;
    }
    function ft(A, w, R, se) {
      if (typeof R == "object" && R !== null && R.type === b && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            e: {
              for (var je = R.key, Ce = w; Ce !== null; ) {
                if (Ce.key === je) {
                  if (je = R.type, je === b) {
                    if (Ce.tag === 7) {
                      n(A, Ce.sibling), w = l(Ce, R.props.children), w.return = A, A = w;
                      break e;
                    }
                  } else if (Ce.elementType === je || typeof je == "object" && je !== null && je.$$typeof === be && Ju(je) === Ce.type) {
                    n(A, Ce.sibling), w = l(Ce, R.props), w.ref = Rr(A, Ce, R), w.return = A, A = w;
                    break e;
                  }
                  n(A, Ce);
                  break;
                } else t(A, Ce);
                Ce = Ce.sibling;
              }
              R.type === b ? (w = Ni(R.props.children, A.mode, se, R.key), w.return = A, A = w) : (se = aa(R.type, R.key, R.props, null, A.mode, se), se.ref = Rr(A, w, R), se.return = A, A = se);
            }
            return h(A);
          case D:
            e: {
              for (Ce = R.key; w !== null; ) {
                if (w.key === Ce) if (w.tag === 4 && w.stateNode.containerInfo === R.containerInfo && w.stateNode.implementation === R.implementation) {
                  n(A, w.sibling), w = l(w, R.children || []), w.return = A, A = w;
                  break e;
                } else {
                  n(A, w);
                  break;
                }
                else t(A, w);
                w = w.sibling;
              }
              w = ao(R, A.mode, se), w.return = A, A = w;
            }
            return h(A);
          case be:
            return Ce = R._init, ft(A, w, Ce(R._payload), se);
        }
        if (We(R)) return pe(A, w, R, se);
        if (G(R)) return ke(A, w, R, se);
        Os(A, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, w !== null && w.tag === 6 ? (n(A, w.sibling), w = l(w, R), w.return = A, A = w) : (n(A, w), w = so(R, A.mode, se), w.return = A, A = w), h(A)) : n(A, w);
    }
    return ft;
  }
  var Ui = Xu(!0), Zu = Xu(!1), Fs = Yn(null), Is = null, Hi = null, pl = null;
  function vl() {
    pl = Hi = Is = null;
  }
  function kl(e) {
    var t = Fs.current;
    nt(Fs), e._currentValue = t;
  }
  function yl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gi(e, t) {
    Is = e, pl = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function nn(e) {
    var t = e._currentValue;
    if (pl !== e) if (e = { context: e, memoizedValue: t, next: null }, Hi === null) {
      if (Is === null) throw Error(o(308));
      Hi = e, Is.dependencies = { lanes: 0, firstContext: e };
    } else Hi = Hi.next = e;
    return t;
  }
  var ki = null;
  function gl(e) {
    ki === null ? ki = [e] : ki.push(e);
  }
  function qu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, gl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Rn(e, i);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function jl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ec(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function $n(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (ze & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Rn(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, gl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Rn(e, n);
  }
  function Ds(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ra(e, n);
    }
  }
  function tc(e, t) {
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
  function zs(e, t, n, i) {
    var l = e.updateQueue;
    Zn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var g = k, O = g.next;
      g.next = null, h === null ? u = O : h.next = O, h = g;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, k = X.lastBaseUpdate, k !== h && (k === null ? X.firstBaseUpdate = O : k.next = O, X.lastBaseUpdate = g));
    }
    if (u !== null) {
      var ee = l.baseState;
      h = 0, X = O = g = null, k = u;
      do {
        var Y = k.lane, de = k.eventTime;
        if ((i & Y) === Y) {
          X !== null && (X = X.next = {
            eventTime: de,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var pe = e, ke = k;
            switch (Y = t, de = n, ke.tag) {
              case 1:
                if (pe = ke.payload, typeof pe == "function") {
                  ee = pe.call(de, ee, Y);
                  break e;
                }
                ee = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = ke.payload, Y = typeof pe == "function" ? pe.call(de, ee, Y) : pe, Y == null) break e;
                ee = W({}, ee, Y);
                break e;
              case 2:
                Zn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Y = l.effects, Y === null ? l.effects = [k] : Y.push(k));
        } else de = { eventTime: de, lane: Y, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, X === null ? (O = X = de, g = ee) : X = X.next = de, h |= Y;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Y = k, k = Y.next, Y.next = null, l.lastBaseUpdate = Y, l.shared.pending = null;
        }
      } while (!0);
      if (X === null && (g = ee), l.baseState = g, l.firstBaseUpdate = O, l.lastBaseUpdate = X, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ji |= h, e.lanes = h, e.memoizedState = ee;
    }
  }
  function nc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(o(191, l));
        l.call(i);
      }
    }
  }
  var $r = {}, jn = Yn($r), Or = Yn($r), Fr = Yn($r);
  function yi(e) {
    if (e === $r) throw Error(o(174));
    return e;
  }
  function xl(e, t) {
    switch (qe(Fr, t), qe(Or, e), qe(jn, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Yt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yt(t, e);
    }
    nt(jn), qe(jn, t);
  }
  function Wi() {
    nt(jn), nt(Or), nt(Fr);
  }
  function ic(e) {
    yi(Fr.current);
    var t = yi(jn.current), n = Yt(t, e.type);
    t !== n && (qe(Or, e), qe(jn, n));
  }
  function Sl(e) {
    Or.current === e && (nt(jn), nt(Or));
  }
  var at = Yn(0);
  function Bs(e) {
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
  var wl = [];
  function Nl() {
    for (var e = 0; e < wl.length; e++) wl[e]._workInProgressVersionPrimary = null;
    wl.length = 0;
  }
  var Vs = V.ReactCurrentDispatcher, El = V.ReactCurrentBatchConfig, gi = 0, lt = null, mt = null, kt = null, Ks = !1, Ir = !1, Dr = 0, lm = 0;
  function Ct() {
    throw Error(o(321));
  }
  function Cl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!un(e[n], t[n])) return !1;
    return !0;
  }
  function Tl(e, t, n, i, l, u) {
    if (gi = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vs.current = e === null || e.memoizedState === null ? dm : fm, e = n(i, l), Ir) {
      u = 0;
      do {
        if (Ir = !1, Dr = 0, 25 <= u) throw Error(o(301));
        u += 1, kt = mt = null, t.updateQueue = null, Vs.current = hm, e = n(i, l);
      } while (Ir);
    }
    if (Vs.current = Gs, t = mt !== null && mt.next !== null, gi = 0, kt = mt = lt = null, Ks = !1, t) throw Error(o(300));
    return e;
  }
  function Ml() {
    var e = Dr !== 0;
    return Dr = 0, e;
  }
  function xn() {
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
  function zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _l(e) {
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
      var k = h = null, g = null, O = u;
      do {
        var X = O.lane;
        if ((gi & X) === X) g !== null && (g = g.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), i = O.hasEagerState ? O.eagerState : e(i, O.action);
        else {
          var ee = {
            lane: X,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          g === null ? (k = g = ee, h = i) : g = g.next = ee, lt.lanes |= X, ji |= X;
        }
        O = O.next;
      } while (O !== null && O !== u);
      g === null ? h = i : g.next = k, un(i, t.memoizedState) || (Ft = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = g, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, lt.lanes |= u, ji |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function bl(e) {
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
      un(u, t.memoizedState) || (Ft = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function rc() {
  }
  function sc(e, t) {
    var n = lt, i = rn(), l = t(), u = !un(i.memoizedState, l);
    if (u && (i.memoizedState = l, Ft = !0), i = i.queue, Al(oc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || kt !== null && kt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Br(9, lc.bind(null, n, i, l, t), void 0, null), yt === null) throw Error(o(349));
      (gi & 30) !== 0 || ac(n, t, l);
    }
    return l;
  }
  function ac(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function lc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, uc(t) && cc(e);
  }
  function oc(e, t, n) {
    return n(function() {
      uc(t) && cc(e);
    });
  }
  function uc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !un(e, n);
    } catch {
      return !0;
    }
  }
  function cc(e) {
    var t = Rn(e, 1);
    t !== null && mn(t, e, 1, -1);
  }
  function dc(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cm.bind(null, lt, e), [t.memoizedState, e];
  }
  function Br(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function fc() {
    return rn().memoizedState;
  }
  function Us(e, t, n, i) {
    var l = xn();
    lt.flags |= e, l.memoizedState = Br(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Hs(e, t, n, i) {
    var l = rn();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (mt !== null) {
      var h = mt.memoizedState;
      if (u = h.destroy, i !== null && Cl(i, h.deps)) {
        l.memoizedState = Br(t, n, u, i);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Br(1 | t, n, u, i);
  }
  function hc(e, t) {
    return Us(8390656, 8, e, t);
  }
  function Al(e, t) {
    return Hs(2048, 8, e, t);
  }
  function mc(e, t) {
    return Hs(4, 2, e, t);
  }
  function pc(e, t) {
    return Hs(4, 4, e, t);
  }
  function vc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function kc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hs(4, 4, vc.bind(null, t, e), n);
  }
  function Pl() {
  }
  function yc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function gc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function jc(e, t, n) {
    return (gi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (un(n, t) || (n = Jo(), lt.lanes |= n, ji |= n, e.baseState = !0), t);
  }
  function om(e, t) {
    var n = Qe;
    Qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = El.transition;
    El.transition = {};
    try {
      e(!1), t();
    } finally {
      Qe = n, El.transition = i;
    }
  }
  function xc() {
    return rn().memoizedState;
  }
  function um(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Sc(e)) wc(t, n);
    else if (n = qu(e, t, n, i), n !== null) {
      var l = At();
      mn(n, e, i, l), Nc(n, t, i);
    }
  }
  function cm(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Sc(e)) wc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, un(k, h)) {
          var g = t.interleaved;
          g === null ? (l.next = l, gl(t)) : (l.next = g.next, g.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = qu(e, t, l, i), n !== null && (l = At(), mn(n, e, i, l), Nc(n, t, i));
    }
  }
  function Sc(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function wc(e, t) {
    Ir = Ks = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Nc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Ra(e, n);
    }
  }
  var Gs = { readContext: nn, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, dm = { readContext: nn, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: nn, useEffect: hc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Us(
      4194308,
      4,
      vc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Us(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Us(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = xn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = um.bind(null, lt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: dc, useDebugValue: Pl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = dc(!1), t = e[0];
    return e = om.bind(null, e[1]), xn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = lt, l = xn();
    if (rt) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), yt === null) throw Error(o(349));
      (gi & 30) !== 0 || ac(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, hc(oc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, Br(9, lc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = yt.identifierPrefix;
    if (rt) {
      var n = Ln, i = Pn;
      n = (i & ~(1 << 32 - on(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = lm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, fm = {
    readContext: nn,
    useCallback: yc,
    useContext: nn,
    useEffect: Al,
    useImperativeHandle: kc,
    useInsertionEffect: mc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: _l,
    useRef: fc,
    useState: function() {
      return _l(zr);
    },
    useDebugValue: Pl,
    useDeferredValue: function(e) {
      var t = rn();
      return jc(t, mt.memoizedState, e);
    },
    useTransition: function() {
      var e = _l(zr)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: sc,
    useId: xc,
    unstable_isNewReconciler: !1
  }, hm = { readContext: nn, useCallback: yc, useContext: nn, useEffect: Al, useImperativeHandle: kc, useInsertionEffect: mc, useLayoutEffect: pc, useMemo: gc, useReducer: bl, useRef: fc, useState: function() {
    return bl(zr);
  }, useDebugValue: Pl, useDeferredValue: function(e) {
    var t = rn();
    return mt === null ? t.memoizedState = e : jc(t, mt.memoizedState, e);
  }, useTransition: function() {
    var e = bl(zr)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: rc, useSyncExternalStore: sc, useId: xc, unstable_isNewReconciler: !1 };
  function dn(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ll(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ws = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = ii(e), u = $n(i, l);
    u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = ii(e), u = $n(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), i = ii(e), l = $n(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (mn(t, e, i, n), Ds(t, e, i));
  } };
  function Ec(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, i) || !Tr(l, u) : !0;
  }
  function Cc(e, t, n) {
    var i = !1, l = Jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = nn(u) : (l = Ot(t) ? mi : Et.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ws, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Tc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
  }
  function Rl(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, jl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = nn(u) : (u = Ot(t) ? mi : Et.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ll(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ws.enqueueReplaceState(l, l.state, null), zs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qi(e, t) {
    try {
      var n = "", i = t;
      do
        n += ye(i), i = i.return;
      while (i);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function $l(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ol(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var mm = typeof WeakMap == "function" ? WeakMap : Map;
  function Mc(e, t, n) {
    n = $n(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ea || (ea = !0, Xl = i), Ol(e, t);
    }, n;
  }
  function _c(e, t, n) {
    n = $n(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        Ol(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Ol(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function bc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new mm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Mm.bind(null, e, t, n), t.then(e, e));
  }
  function Ac(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Pc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $n(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var pm = V.ReactCurrentOwner, Ft = !1;
  function bt(e, t, n, i) {
    t.child = e === null ? Zu(t, null, n, i) : Ui(t, e.child, n, i);
  }
  function Lc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = Tl(e, t, n, i, u, l), n = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (rt && n && cl(t), t.flags |= 1, bt(e, t, i, l), t.child);
  }
  function Rc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ro(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, $c(e, t, u, i, l)) : (e = aa(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Tr, n(h, i) && e.ref === t.ref) return On(e, t, l);
    }
    return t.flags |= 1, e = si(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function $c(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Tr(u, i) && e.ref === t.ref) if (Ft = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, On(e, t, l);
    }
    return Fl(e, t, n, i, l);
  }
  function Oc(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Ji, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(Ji, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, qe(Ji, Wt), Wt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, qe(Ji, Wt), Wt |= i;
    return bt(e, t, l, n), t.child;
  }
  function Fc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Fl(e, t, n, i, l) {
    var u = Ot(n) ? mi : Et.current;
    return u = zi(t, u), Gi(t, l), n = Tl(e, t, n, i, u, l), i = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (rt && i && cl(t), t.flags |= 1, bt(e, t, n, l), t.child);
  }
  function Ic(e, t, n, i, l) {
    if (Ot(n)) {
      var u = !0;
      As(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Ys(e, t), Cc(t, n, i), Rl(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var g = h.context, O = n.contextType;
      typeof O == "object" && O !== null ? O = nn(O) : (O = Ot(n) ? mi : Et.current, O = zi(t, O));
      var X = n.getDerivedStateFromProps, ee = typeof X == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      ee || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || g !== O) && Tc(t, h, i, O), Zn = !1;
      var Y = t.memoizedState;
      h.state = Y, zs(t, i, h, l), g = t.memoizedState, k !== i || Y !== g || $t.current || Zn ? (typeof X == "function" && (Ll(t, n, X, i), g = t.memoizedState), (k = Zn || Ec(t, n, k, i, Y, g, O)) ? (ee || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = g), h.props = i, h.state = g, h.context = O, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, ec(e, t), k = t.memoizedProps, O = t.type === t.elementType ? k : dn(t.type, k), h.props = O, ee = t.pendingProps, Y = h.context, g = n.contextType, typeof g == "object" && g !== null ? g = nn(g) : (g = Ot(n) ? mi : Et.current, g = zi(t, g));
      var de = n.getDerivedStateFromProps;
      (X = typeof de == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== ee || Y !== g) && Tc(t, h, i, g), Zn = !1, Y = t.memoizedState, h.state = Y, zs(t, i, h, l);
      var pe = t.memoizedState;
      k !== ee || Y !== pe || $t.current || Zn ? (typeof de == "function" && (Ll(t, n, de, i), pe = t.memoizedState), (O = Zn || Ec(t, n, O, i, Y, pe, g) || !1) ? (X || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, pe, g), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, pe, g)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = pe), h.props = i, h.state = pe, h.context = g, i = O) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Il(e, t, n, i, u, l);
  }
  function Il(e, t, n, i, l, u) {
    Fc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Ku(t, n, !1), On(e, t, u);
    i = t.stateNode, pm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Ui(t, e.child, null, u), t.child = Ui(t, null, k, u)) : bt(e, t, k, u), t.memoizedState = i.state, l && Ku(t, n, !0), t.child;
  }
  function Dc(e) {
    var t = e.stateNode;
    t.pendingContext ? Bu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bu(e, t.context, !1), xl(e, t.containerInfo);
  }
  function zc(e, t, n, i, l) {
    return Ki(), ml(l), t.flags |= 256, bt(e, t, n, i), t.child;
  }
  var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Bc(e, t, n) {
    var i = t.pendingProps, l = at.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return hl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = la(h, i, 0, null), e = Ni(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = zl(n), t.memoizedState = Dl, e) : Bl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return vm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var g = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = g, t.deletions = null) : (i = si(l, g), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = si(k, u) : (u = Ni(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? zl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Dl, i;
    }
    return u = e.child, e = u.sibling, i = si(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Bl(e, t) {
    return t = la({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Qs(e, t, n, i) {
    return i !== null && ml(i), Ui(t, e.child, null, n), e = Bl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function vm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = $l(Error(o(422))), Qs(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = la({ mode: "visible", children: i.children }, l, 0, null), u = Ni(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Ui(t, e.child, null, h), t.child.memoizedState = zl(h), t.memoizedState = Dl, u);
    if ((t.mode & 1) === 0) return Qs(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = $l(u, i, void 0), Qs(e, t, h, i);
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
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Rn(e, l), mn(i, e, l, -1));
      }
      return io(), i = $l(Error(o(421))), Qs(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _m.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Gt = Qn(l.nextSibling), Ht = t, rt = !0, cn = null, e !== null && (en[tn++] = Pn, en[tn++] = Ln, en[tn++] = pi, Pn = e.id, Ln = e.overflow, pi = t), t = Bl(t, i.children), t.flags |= 4096, t);
  }
  function Vc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), yl(e.return, t, n);
  }
  function Vl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Kc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (bt(e, t, i.children, n), i = at.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vc(e, n, t);
        else if (e.tag === 19) Vc(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Bs(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Vl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Bs(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Vl(t, !0, n, null, u);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ys(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function On(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ji |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function km(e, t, n) {
    switch (t.tag) {
      case 3:
        Dc(t), Ki();
        break;
      case 5:
        ic(t);
        break;
      case 1:
        Ot(t.type) && As(t);
        break;
      case 4:
        xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        qe(Fs, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Bc(e, t, n) : (qe(at, at.current & 1), e = On(e, t, n), e !== null ? e.sibling : null);
        qe(at, at.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Kc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), qe(at, at.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Oc(e, t, n);
    }
    return On(e, t, n);
  }
  var Uc, Kl, Hc, Gc;
  Uc = function(e, t) {
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
  }, Kl = function() {
  }, Hc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, yi(jn.current);
      var u = null;
      switch (n) {
        case "input":
          l = ce(e, l), i = ce(e, i), u = [];
          break;
        case "select":
          l = W({}, l, { value: void 0 }), i = W({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ut(e, l), i = ut(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ms);
      }
      Ae(n, i);
      var h;
      n = null;
      for (O in l) if (!i.hasOwnProperty(O) && l.hasOwnProperty(O) && l[O] != null) if (O === "style") {
        var k = l[O];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (d.hasOwnProperty(O) ? u || (u = []) : (u = u || []).push(O, null));
      for (O in i) {
        var g = i[O];
        if (k = l?.[O], i.hasOwnProperty(O) && g !== k && (g != null || k != null)) if (O === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || g && g.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in g) g.hasOwnProperty(h) && k[h] !== g[h] && (n || (n = {}), n[h] = g[h]);
        } else n || (u || (u = []), u.push(
          O,
          n
        )), n = g;
        else O === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, k = k ? k.__html : void 0, g != null && k !== g && (u = u || []).push(O, g)) : O === "children" ? typeof g != "string" && typeof g != "number" || (u = u || []).push(O, "" + g) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (d.hasOwnProperty(O) ? (g != null && O === "onScroll" && tt("scroll", e), u || k === g || (u = [])) : (u = u || []).push(O, g));
      }
      n && (u = u || []).push("style", n);
      var O = u;
      (t.updateQueue = O) && (t.flags |= 4);
    }
  }, Gc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Vr(e, t) {
    if (!rt) switch (e.tailMode) {
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
  function ym(e, t, n) {
    var i = t.pendingProps;
    switch (dl(t), t.tag) {
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
        return Ot(t.type) && bs(), Tt(t), null;
      case 3:
        return i = t.stateNode, Wi(), nt($t), nt(Et), Nl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && ($s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cn !== null && (eo(cn), cn = null))), Kl(e, t), Tt(t), null;
      case 5:
        Sl(t);
        var l = yi(Fr.current);
        if (n = t.type, e !== null && t.stateNode != null) Hc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Tt(t), null;
          }
          if (e = yi(jn.current), $s(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[gn] = t, i[Pr] = u, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < _r.length; l++) tt(_r[l], i);
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
            Ae(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && Ts(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Ts(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && tt("scroll", i);
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
                typeof u.onClick == "function" && (i.onclick = Ms);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[gn] = t, e[Pr] = i, Uc(e, t, !1, !1), t.stateNode = e;
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
                  for (l = 0; l < _r.length; l++) tt(_r[l], e);
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
                  Se(e, i), l = ce(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = W({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Je(e, i), l = ut(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Ae(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var g = k[u];
                u === "style" ? Vt(e, g) : u === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && ln(e, g)) : u === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && Jt(e, g) : typeof g == "number" && Jt(e, "" + g) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? g != null && u === "onScroll" && tt("scroll", e) : g != null && U(e, u, g, h));
              }
              switch (n) {
                case "input":
                  z(e), He(e, i, !1);
                  break;
                case "textarea":
                  z(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ne(i.value));
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
                  typeof l.onClick == "function" && (e.onclick = Ms);
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
        if (e && t.stateNode != null) Gc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (n = yi(Fr.current), yi(jn.current), $s(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[gn] = t, (u = i.nodeValue !== n) && (e = Ht, e !== null)) switch (e.tag) {
              case 3:
                Ts(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ts(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[gn] = t, t.stateNode = i;
        }
        return Tt(t), null;
      case 13:
        if (nt(at), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (rt && Gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Yu(), Ki(), t.flags |= 98560, u = !1;
          else if (u = $s(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[gn] = t;
            } else Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tt(t), u = !1;
          } else cn !== null && (eo(cn), cn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? pt === 0 && (pt = 3) : io())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
      case 4:
        return Wi(), Kl(e, t), e === null && br(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return kl(t.type._context), Tt(t), null;
      case 17:
        return Ot(t.type) && bs(), Tt(t), null;
      case 19:
        if (nt(at), u = t.memoizedState, u === null) return Tt(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Vr(u, !1);
        else {
          if (pt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Bs(e), h !== null) {
              for (t.flags |= 128, Vr(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return qe(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && le() > Xi && (t.flags |= 128, i = !0, Vr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Bs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vr(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !rt) return Tt(t), null;
          } else 2 * le() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Vr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = le(), t.sibling = null, n = at.current, qe(at, i ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
      case 22:
      case 23:
        return no(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function gm(e, t) {
    switch (dl(t), t.tag) {
      case 1:
        return Ot(t.type) && bs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), nt($t), nt(Et), Nl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Sl(t), null;
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
        return kl(t.type._context), null;
      case 22:
      case 23:
        return no(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Js = !1, Mt = !1, jm = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function Yi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ot(e, t, i);
    }
    else n.current = null;
  }
  function Ul(e, t, n) {
    try {
      n();
    } catch (i) {
      ot(e, t, i);
    }
  }
  var Wc = !1;
  function xm(e, t) {
    if (nl = vs, e = Eu(), Qa(e)) {
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
          var h = 0, k = -1, g = -1, O = 0, X = 0, ee = e, Y = null;
          t: for (; ; ) {
            for (var de; ee !== n || l !== 0 && ee.nodeType !== 3 || (k = h + l), ee !== u || i !== 0 && ee.nodeType !== 3 || (g = h + i), ee.nodeType === 3 && (h += ee.nodeValue.length), (de = ee.firstChild) !== null; )
              Y = ee, ee = de;
            for (; ; ) {
              if (ee === e) break t;
              if (Y === n && ++O === l && (k = h), Y === u && ++X === i && (g = h), (de = ee.nextSibling) !== null) break;
              ee = Y, Y = ee.parentNode;
            }
            ee = de;
          }
          n = k === -1 || g === -1 ? null : { start: k, end: g };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (il = { focusedElem: e, selectionRange: n }, vs = !1, fe = t; fe !== null; ) if (t = fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, fe = e;
    else for (; fe !== null; ) {
      t = fe;
      try {
        var pe = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (pe !== null) {
              var ke = pe.memoizedProps, ft = pe.memoizedState, A = t.stateNode, w = A.getSnapshotBeforeUpdate(t.elementType === t.type ? ke : dn(t.type, ke), ft);
              A.__reactInternalSnapshotBeforeUpdate = w;
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
      } catch (se) {
        ot(t, t.return, se);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, fe = e;
        break;
      }
      fe = t.return;
    }
    return pe = Wc, Wc = !1, pe;
  }
  function Kr(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Ul(t, n, u);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Xs(e, t) {
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
  function Hl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Qc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[Pr], delete t[ll], delete t[im], delete t[rm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Yc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Jc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Gl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ms));
    else if (i !== 4 && (e = e.child, e !== null)) for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), e = e.sibling;
  }
  function Wl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), e = e.sibling;
  }
  var xt = null, fn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) Xc(e, t, n), n = n.sibling;
  }
  function Xc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(cs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Mt || Yi(n, t);
      case 6:
        var i = xt, l = fn;
        xt = null, ei(e, t, n), xt = i, fn = l, xt !== null && (fn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xt.removeChild(n.stateNode));
        break;
      case 18:
        xt !== null && (fn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? al(e.parentNode, n) : e.nodeType === 1 && al(e, n), xr(e)) : al(xt, n.stateNode));
        break;
      case 4:
        i = xt, l = fn, xt = n.stateNode.containerInfo, fn = !0, ei(e, t, n), xt = i, fn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ul(n, t, h), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!Mt && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          ot(n, t, k);
        }
        ei(e, t, n);
        break;
      case 21:
        ei(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Mt = (i = Mt) || n.memoizedState !== null, ei(e, t, n), Mt = i) : ei(e, t, n);
        break;
      default:
        ei(e, t, n);
    }
  }
  function Zc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new jm()), t.forEach(function(i) {
        var l = bm.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function hn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              xt = k.stateNode, fn = !1;
              break e;
            case 3:
              xt = k.stateNode.containerInfo, fn = !0;
              break e;
            case 4:
              xt = k.stateNode.containerInfo, fn = !0;
              break e;
          }
          k = k.return;
        }
        if (xt === null) throw Error(o(160));
        Xc(u, h, l), xt = null, fn = !1;
        var g = l.alternate;
        g !== null && (g.return = null), l.return = null;
      } catch (O) {
        ot(l, t, O);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qc(t, e), t = t.sibling;
  }
  function qc(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (hn(t, e), Sn(e), i & 4) {
          try {
            Kr(3, e, e.return), Xs(3, e);
          } catch (ke) {
            ot(e, e.return, ke);
          }
          try {
            Kr(5, e, e.return);
          } catch (ke) {
            ot(e, e.return, ke);
          }
        }
        break;
      case 1:
        hn(t, e), Sn(e), i & 512 && n !== null && Yi(n, n.return);
        break;
      case 5:
        if (hn(t, e), Sn(e), i & 512 && n !== null && Yi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Jt(l, "");
          } catch (ke) {
            ot(e, e.return, ke);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null) try {
            k === "input" && u.type === "radio" && u.name != null && xe(l, u), Re(k, h);
            var O = Re(k, u);
            for (h = 0; h < g.length; h += 2) {
              var X = g[h], ee = g[h + 1];
              X === "style" ? Vt(l, ee) : X === "dangerouslySetInnerHTML" ? ln(l, ee) : X === "children" ? Jt(l, ee) : U(l, X, ee, O);
            }
            switch (k) {
              case "input":
                Le(l, u);
                break;
              case "textarea":
                Ve(l, u);
                break;
              case "select":
                var Y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var de = u.value;
                de != null ? Xe(l, !!u.multiple, de, !1) : Y !== !!u.multiple && (u.defaultValue != null ? Xe(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xe(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Pr] = u;
          } catch (ke) {
            ot(e, e.return, ke);
          }
        }
        break;
      case 6:
        if (hn(t, e), Sn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ke) {
            ot(e, e.return, ke);
          }
        }
        break;
      case 3:
        if (hn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          xr(t.containerInfo);
        } catch (ke) {
          ot(e, e.return, ke);
        }
        break;
      case 4:
        hn(t, e), Sn(e);
        break;
      case 13:
        hn(t, e), Sn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Jl = le())), i & 4 && Zc(e);
        break;
      case 22:
        if (X = n !== null && n.memoizedState !== null, e.mode & 1 ? (Mt = (O = Mt) || X, hn(t, e), Mt = O) : hn(t, e), Sn(e), i & 8192) {
          if (O = e.memoizedState !== null, (e.stateNode.isHidden = O) && !X && (e.mode & 1) !== 0) for (fe = e, X = e.child; X !== null; ) {
            for (ee = fe = X; fe !== null; ) {
              switch (Y = fe, de = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, Y, Y.return);
                  break;
                case 1:
                  Yi(Y, Y.return);
                  var pe = Y.stateNode;
                  if (typeof pe.componentWillUnmount == "function") {
                    i = Y, n = Y.return;
                    try {
                      t = i, pe.props = t.memoizedProps, pe.state = t.memoizedState, pe.componentWillUnmount();
                    } catch (ke) {
                      ot(i, n, ke);
                    }
                  }
                  break;
                case 5:
                  Yi(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    nd(ee);
                    continue;
                  }
              }
              de !== null ? (de.return = Y, fe = de) : nd(ee);
            }
            X = X.sibling;
          }
          e: for (X = null, ee = e; ; ) {
            if (ee.tag === 5) {
              if (X === null) {
                X = ee;
                try {
                  l = ee.stateNode, O ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = ee.stateNode, g = ee.memoizedProps.style, h = g != null && g.hasOwnProperty("display") ? g.display : null, k.style.display = Ne("display", h));
                } catch (ke) {
                  ot(e, e.return, ke);
                }
              }
            } else if (ee.tag === 6) {
              if (X === null) try {
                ee.stateNode.nodeValue = O ? "" : ee.memoizedProps;
              } catch (ke) {
                ot(e, e.return, ke);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === e) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === e) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === e) break e;
              X === ee && (X = null), ee = ee.return;
            }
            X === ee && (X = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        hn(t, e), Sn(e), i & 4 && Zc(e);
        break;
      case 21:
        break;
      default:
        hn(
          t,
          e
        ), Sn(e);
    }
  }
  function Sn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Yc(n)) {
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
            i.flags & 32 && (Jt(l, ""), i.flags &= -33);
            var u = Jc(e);
            Wl(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = Jc(e);
            Gl(e, k, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        ot(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sm(e, t, n) {
    fe = e, ed(e);
  }
  function ed(e, t, n) {
    for (var i = (e.mode & 1) !== 0; fe !== null; ) {
      var l = fe, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Js;
        if (!h) {
          var k = l.alternate, g = k !== null && k.memoizedState !== null || Mt;
          k = Js;
          var O = Mt;
          if (Js = h, (Mt = g) && !O) for (fe = l; fe !== null; ) h = fe, g = h.child, h.tag === 22 && h.memoizedState !== null ? id(l) : g !== null ? (g.return = h, fe = g) : id(l);
          for (; u !== null; ) fe = u, ed(u), u = u.sibling;
          fe = l, Js = k, Mt = O;
        }
        td(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, fe = u) : td(e);
    }
  }
  function td(e) {
    for (; fe !== null; ) {
      var t = fe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Mt || Xs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Mt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : dn(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && nc(t, u, i);
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
                nc(t, h, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var g = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    g.autoFocus && n.focus();
                    break;
                  case "img":
                    g.src && (n.src = g.src);
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
                  var X = O.memoizedState;
                  if (X !== null) {
                    var ee = X.dehydrated;
                    ee !== null && xr(ee);
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
          Mt || t.flags & 512 && Hl(t);
        } catch (Y) {
          ot(t, t.return, Y);
        }
      }
      if (t === e) {
        fe = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, fe = n;
        break;
      }
      fe = t.return;
    }
  }
  function nd(e) {
    for (; fe !== null; ) {
      var t = fe;
      if (t === e) {
        fe = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, fe = n;
        break;
      }
      fe = t.return;
    }
  }
  function id(e) {
    for (; fe !== null; ) {
      var t = fe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xs(4, t);
            } catch (g) {
              ot(t, n, g);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (g) {
                ot(t, l, g);
              }
            }
            var u = t.return;
            try {
              Hl(t);
            } catch (g) {
              ot(t, u, g);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Hl(t);
            } catch (g) {
              ot(t, h, g);
            }
        }
      } catch (g) {
        ot(t, t.return, g);
      }
      if (t === e) {
        fe = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, fe = k;
        break;
      }
      fe = t.return;
    }
  }
  var wm = Math.ceil, Zs = V.ReactCurrentDispatcher, Ql = V.ReactCurrentOwner, sn = V.ReactCurrentBatchConfig, ze = 0, yt = null, ht = null, St = 0, Wt = 0, Ji = Yn(0), pt = 0, Ur = null, ji = 0, qs = 0, Yl = 0, Hr = null, It = null, Jl = 0, Xi = 1 / 0, Fn = null, ea = !1, Xl = null, ti = null, ta = !1, ni = null, na = 0, Gr = 0, Zl = null, ia = -1, ra = 0;
  function At() {
    return (ze & 6) !== 0 ? le() : ia !== -1 ? ia : ia = le();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && St !== 0 ? St & -St : am.transition !== null ? (ra === 0 && (ra = Jo()), ra) : (e = Qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : su(e.type)), e);
  }
  function mn(e, t, n, i) {
    if (50 < Gr) throw Gr = 0, Zl = null, Error(o(185));
    vr(e, n, i), ((ze & 2) === 0 || e !== yt) && (e === yt && ((ze & 2) === 0 && (qs |= n), pt === 4 && ri(e, St)), Dt(e, i), n === 1 && ze === 0 && (t.mode & 1) === 0 && (Xi = le() + 500, Ps && Xn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    ah(e, t);
    var i = hs(e, e === yt ? St : 0);
    if (i === 0) n !== null && Mn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Mn(n), t === 1) e.tag === 0 ? sm(sd.bind(null, e)) : Uu(sd.bind(null, e)), tm(function() {
        (ze & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Xo(i)) {
          case 1:
            n = Rt;
            break;
          case 4:
            n = dt;
            break;
          case 16:
            n = _n;
            break;
          case 536870912:
            n = Bn;
            break;
          default:
            n = _n;
        }
        n = hd(n, rd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function rd(e, t) {
    if (ia = -1, ra = 0, (ze & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Zi() && e.callbackNode !== n) return null;
    var i = hs(e, e === yt ? St : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = sa(e, i);
    else {
      t = i;
      var l = ze;
      ze |= 2;
      var u = ld();
      (yt !== e || St !== t) && (Fn = null, Xi = le() + 500, Si(e, t));
      do
        try {
          Cm();
          break;
        } catch (k) {
          ad(e, k);
        }
      while (!0);
      vl(), Zs.current = u, ze = l, ht !== null ? t = 0 : (yt = null, St = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Pa(e), l !== 0 && (i = l, t = ql(e, l))), t === 1) throw n = Ur, Si(e, 0), ri(e, i), Dt(e, le()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Nm(l) && (t = sa(e, i), t === 2 && (u = Pa(e), u !== 0 && (i = u, t = ql(e, u))), t === 1)) throw n = Ur, Si(e, 0), ri(e, i), Dt(e, le()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wi(e, It, Fn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Jl + 500 - le(), 10 < t)) {
              if (hs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                At(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = sl(wi.bind(null, e, It, Fn), t);
              break;
            }
            wi(e, It, Fn);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - on(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = le() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * wm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = sl(wi.bind(null, e, It, Fn), i);
              break;
            }
            wi(e, It, Fn);
            break;
          case 5:
            wi(e, It, Fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Dt(e, le()), e.callbackNode === n ? rd.bind(null, e) : null;
  }
  function ql(e, t) {
    var n = Hr;
    return e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256), e = sa(e, t), e !== 2 && (t = It, It = n, t !== null && eo(t)), e;
  }
  function eo(e) {
    It === null ? It = e : It.push.apply(It, e);
  }
  function Nm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], u = l.getSnapshot;
          l = l.value;
          try {
            if (!un(u(), l)) return !1;
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
    for (t &= ~Yl, t &= ~qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - on(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function sd(e) {
    if ((ze & 6) !== 0) throw Error(o(327));
    Zi();
    var t = hs(e, 0);
    if ((t & 1) === 0) return Dt(e, le()), null;
    var n = sa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Pa(e);
      i !== 0 && (t = i, n = ql(e, i));
    }
    if (n === 1) throw n = Ur, Si(e, 0), ri(e, t), Dt(e, le()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wi(e, It, Fn), Dt(e, le()), null;
  }
  function to(e, t) {
    var n = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ze = n, ze === 0 && (Xi = le() + 500, Ps && Xn());
    }
  }
  function xi(e) {
    ni !== null && ni.tag === 0 && (ze & 6) === 0 && Zi();
    var t = ze;
    ze |= 1;
    var n = sn.transition, i = Qe;
    try {
      if (sn.transition = null, Qe = 1, e) return e();
    } finally {
      Qe = i, sn.transition = n, ze = t, (ze & 6) === 0 && Xn();
    }
  }
  function no() {
    Wt = Ji.current, nt(Ji);
  }
  function Si(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, em(n)), ht !== null) for (n = ht.return; n !== null; ) {
      var i = n;
      switch (dl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && bs();
          break;
        case 3:
          Wi(), nt($t), nt(Et), Nl();
          break;
        case 5:
          Sl(i);
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
          kl(i.type._context);
          break;
        case 22:
        case 23:
          no();
      }
      n = n.return;
    }
    if (yt = e, ht = e = si(e.current, null), St = Wt = t, pt = 0, Ur = null, Yl = qs = ji = 0, It = Hr = null, ki !== null) {
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
  function ad(e, t) {
    do {
      var n = ht;
      try {
        if (vl(), Vs.current = Gs, Ks) {
          for (var i = lt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Ks = !1;
        }
        if (gi = 0, kt = mt = lt = null, Ir = !1, Dr = 0, Ql.current = null, n === null || n.return === null) {
          pt = 1, Ur = t, ht = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, g = t;
          if (t = St, k.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var O = g, X = k, ee = X.tag;
            if ((X.mode & 1) === 0 && (ee === 0 || ee === 11 || ee === 15)) {
              var Y = X.alternate;
              Y ? (X.updateQueue = Y.updateQueue, X.memoizedState = Y.memoizedState, X.lanes = Y.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var de = Ac(h);
            if (de !== null) {
              de.flags &= -257, Pc(de, h, k, u, t), de.mode & 1 && bc(u, O, t), t = de, g = O;
              var pe = t.updateQueue;
              if (pe === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(g), t.updateQueue = ke;
              } else pe.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                bc(u, O, t), io();
                break e;
              }
              g = Error(o(426));
            }
          } else if (rt && k.mode & 1) {
            var ft = Ac(h);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), Pc(ft, h, k, u, t), ml(Qi(g, k));
              break e;
            }
          }
          u = g = Qi(g, k), pt !== 4 && (pt = 2), Hr === null ? Hr = [u] : Hr.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var A = Mc(u, g, t);
                tc(u, A);
                break e;
              case 1:
                k = g;
                var w = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof w.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ti === null || !ti.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var se = _c(u, k, t);
                  tc(u, se);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ud(n);
      } catch (je) {
        t = je, ht === n && n !== null && (ht = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ld() {
    var e = Zs.current;
    return Zs.current = Gs, e === null ? Gs : e;
  }
  function io() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || (ji & 268435455) === 0 && (qs & 268435455) === 0 || ri(yt, St);
  }
  function sa(e, t) {
    var n = ze;
    ze |= 2;
    var i = ld();
    (yt !== e || St !== t) && (Fn = null, Si(e, t));
    do
      try {
        Em();
        break;
      } catch (l) {
        ad(e, l);
      }
    while (!0);
    if (vl(), ze = n, Zs.current = i, ht !== null) throw Error(o(261));
    return yt = null, St = 0, pt;
  }
  function Em() {
    for (; ht !== null; ) od(ht);
  }
  function Cm() {
    for (; ht !== null && !zn(); ) od(ht);
  }
  function od(e) {
    var t = fd(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? ud(e) : ht = t, Ql.current = null;
  }
  function ud(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ym(n, t, Wt), n !== null) {
          ht = n;
          return;
        }
      } else {
        if (n = gm(n, t), n !== null) {
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
    var i = Qe, l = sn.transition;
    try {
      sn.transition = null, Qe = 1, Tm(e, t, n, i);
    } finally {
      sn.transition = l, Qe = i;
    }
    return null;
  }
  function Tm(e, t, n, i) {
    do
      Zi();
    while (ni !== null);
    if ((ze & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (lh(e, u), e === yt && (ht = yt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ta || (ta = !0, hd(_n, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = sn.transition, sn.transition = null;
      var h = Qe;
      Qe = 1;
      var k = ze;
      ze |= 4, Ql.current = null, xm(e, n), qc(n, e), Wh(il), vs = !!nl, il = nl = null, e.current = n, Sm(n), B(), ze = k, Qe = h, sn.transition = u;
    } else e.current = n;
    if (ta && (ta = !1, ni = e, na = l), u = e.pendingLanes, u === 0 && (ti = null), th(n.stateNode), Dt(e, le()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ea) throw ea = !1, e = Xl, Xl = null, e;
    return (na & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === Zl ? Gr++ : (Gr = 0, Zl = e) : Gr = 0, Xn(), null;
  }
  function Zi() {
    if (ni !== null) {
      var e = Xo(na), t = sn.transition, n = Qe;
      try {
        if (sn.transition = null, Qe = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, na = 0, (ze & 6) !== 0) throw Error(o(331));
          var l = ze;
          for (ze |= 4, fe = e.current; fe !== null; ) {
            var u = fe, h = u.child;
            if ((fe.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var g = 0; g < k.length; g++) {
                  var O = k[g];
                  for (fe = O; fe !== null; ) {
                    var X = fe;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Kr(8, X, u);
                    }
                    var ee = X.child;
                    if (ee !== null) ee.return = X, fe = ee;
                    else for (; fe !== null; ) {
                      X = fe;
                      var Y = X.sibling, de = X.return;
                      if (Qc(X), X === O) {
                        fe = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = de, fe = Y;
                        break;
                      }
                      fe = de;
                    }
                  }
                }
                var pe = u.alternate;
                if (pe !== null) {
                  var ke = pe.child;
                  if (ke !== null) {
                    pe.child = null;
                    do {
                      var ft = ke.sibling;
                      ke.sibling = null, ke = ft;
                    } while (ke !== null);
                  }
                }
                fe = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, fe = h;
            else e: for (; fe !== null; ) {
              if (u = fe, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Kr(9, u, u.return);
              }
              var A = u.sibling;
              if (A !== null) {
                A.return = u.return, fe = A;
                break e;
              }
              fe = u.return;
            }
          }
          var w = e.current;
          for (fe = w; fe !== null; ) {
            h = fe;
            var R = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && R !== null) R.return = h, fe = R;
            else e: for (h = w; fe !== null; ) {
              if (k = fe, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xs(9, k);
                }
              } catch (je) {
                ot(k, k.return, je);
              }
              if (k === h) {
                fe = null;
                break e;
              }
              var se = k.sibling;
              if (se !== null) {
                se.return = k.return, fe = se;
                break e;
              }
              fe = k.return;
            }
          }
          if (ze = l, Xn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(cs, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Qe = n, sn.transition = t;
      }
    }
    return !1;
  }
  function cd(e, t, n) {
    t = Qi(n, t), t = Mc(e, t, 1), e = qn(e, t, 1), t = At(), e !== null && (vr(e, 1, t), Dt(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) cd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        cd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Qi(n, e), e = _c(t, e, 1), t = qn(t, e, 1), e = At(), t !== null && (vr(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Mm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, yt === e && (St & n) === n && (pt === 4 || pt === 3 && (St & 130023424) === St && 500 > le() - Jl ? Si(e, 0) : Yl |= n), Dt(e, t);
  }
  function dd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = fs, fs <<= 1, (fs & 130023424) === 0 && (fs = 4194304)));
    var n = At();
    e = Rn(e, t), e !== null && (vr(e, t, n), Dt(e, n));
  }
  function _m(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), dd(e, n);
  }
  function bm(e, t) {
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
    i !== null && i.delete(t), dd(e, n);
  }
  var fd;
  fd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $t.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, km(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, rt && (t.flags & 1048576) !== 0 && Hu(t, Rs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Ys(e, t), e = t.pendingProps;
        var l = zi(t, Et.current);
        Gi(t, n), l = Tl(null, t, i, e, l, n);
        var u = Ml();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(i) ? (u = !0, As(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jl(t), l.updater = Ws, t.stateNode = l, l._reactInternals = t, Rl(t, i, e, n), t = Il(null, t, i, !0, u, n)) : (t.tag = 0, rt && u && cl(t), bt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Ys(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Pm(i), e = dn(i, e), l) {
            case 0:
              t = Fl(null, t, i, e, n);
              break e;
            case 1:
              t = Ic(null, t, i, e, n);
              break e;
            case 11:
              t = Lc(null, t, i, e, n);
              break e;
            case 14:
              t = Rc(null, t, i, dn(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Fl(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Ic(e, t, i, l, n);
      case 3:
        e: {
          if (Dc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, ec(e, t), zs(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Qi(Error(o(423)), t), t = zc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Qi(Error(o(424)), t), t = zc(e, t, i, n, l);
            break e;
          } else for (Gt = Qn(t.stateNode.containerInfo.firstChild), Ht = t, rt = !0, cn = null, n = Zu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ki(), i === l) {
              t = On(e, t, n);
              break e;
            }
            bt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ic(t), e === null && hl(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, rl(i, l) ? h = null : u !== null && rl(i, u) && (t.flags |= 32), Fc(e, t), bt(e, t, h, n), t.child;
      case 6:
        return e === null && hl(t), null;
      case 13:
        return Bc(e, t, n);
      case 4:
        return xl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ui(t, null, i, n) : bt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Lc(e, t, i, l, n);
      case 7:
        return bt(e, t, t.pendingProps, n), t.child;
      case 8:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, qe(Fs, i._currentValue), i._currentValue = h, u !== null) if (un(u.value, h)) {
            if (u.children === l.children && !$t.current) {
              t = On(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var g = k.firstContext; g !== null; ) {
                if (g.context === i) {
                  if (u.tag === 1) {
                    g = $n(-1, n & -n), g.tag = 2;
                    var O = u.updateQueue;
                    if (O !== null) {
                      O = O.shared;
                      var X = O.pending;
                      X === null ? g.next = g : (g.next = X.next, X.next = g), O.pending = g;
                    }
                  }
                  u.lanes |= n, g = u.alternate, g !== null && (g.lanes |= n), yl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                g = g.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(o(341));
              h.lanes |= n, k = h.alternate, k !== null && (k.lanes |= n), yl(h, n, t), h = u.sibling;
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
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = nn(l), i = i(l), t.flags |= 1, bt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = dn(i, t.pendingProps), l = dn(i.type, l), Rc(e, t, i, l, n);
      case 15:
        return $c(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Ys(e, t), t.tag = 1, Ot(i) ? (e = !0, As(t)) : e = !1, Gi(t, n), Cc(t, i, l), Rl(t, i, l, n), Il(null, t, i, !0, e, n);
      case 19:
        return Kc(e, t, n);
      case 22:
        return Oc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function hd(e, t) {
    return us(e, t);
  }
  function Am(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(e, t, n, i) {
    return new Am(e, t, n, i);
  }
  function ro(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pm(e) {
    if (typeof e == "function") return ro(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === we) return 11;
      if (e === Ee) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = an(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function aa(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") ro(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case b:
        return Ni(n.children, l, u, t);
      case F:
        h = 8, l |= 8;
        break;
      case re:
        return e = an(12, n, t, l | 2), e.elementType = re, e.lanes = u, e;
      case J:
        return e = an(13, n, t, l), e.elementType = J, e.lanes = u, e;
      case oe:
        return e = an(19, n, t, l), e.elementType = oe, e.lanes = u, e;
      case he:
        return la(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Z:
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
    return t = an(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function Ni(e, t, n, i) {
    return e = an(7, e, i, t), e.lanes = n, e;
  }
  function la(e, t, n, i) {
    return e = an(22, e, i, t), e.elementType = he, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function so(e, t, n) {
    return e = an(6, e, null, t), e.lanes = n, e;
  }
  function ao(e, t, n) {
    return t = an(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Lm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function lo(e, t, n, i, l, u, h, k, g) {
    return e = new Lm(e, t, n, k, g), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = an(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jl(u), e;
  }
  function Rm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function md(e) {
    if (!e) return Jn;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(o(170));
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
      if (Ot(n)) return Vu(e, n, t);
    }
    return t;
  }
  function pd(e, t, n, i, l, u, h, k, g) {
    return e = lo(n, i, !0, e, l, u, h, k, g), e.context = md(null), n = e.current, i = At(), l = ii(n), u = $n(i, l), u.callback = t ?? null, qn(n, u, l), e.current.lanes = l, vr(e, l, i), Dt(e, i), e;
  }
  function oa(e, t, n, i) {
    var l = t.current, u = At(), h = ii(l);
    return n = md(n), t.context === null ? t.context = n : t.pendingContext = n, t = $n(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, h), e !== null && (mn(e, l, h, u), Ds(e, l, h)), h;
  }
  function ua(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function vd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oo(e, t) {
    vd(e, t), (e = e.alternate) && vd(e, t);
  }
  function $m() {
    return null;
  }
  var kd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function uo(e) {
    this._internalRoot = e;
  }
  ca.prototype.render = uo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    oa(e, t, null, null);
  }, ca.prototype.unmount = uo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xi(function() {
        oa(null, e, null, null);
      }), t[bn] = null;
    }
  };
  function ca(e) {
    this._internalRoot = e;
  }
  ca.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++) ;
      Hn.splice(n, 0, e), n === 0 && iu(e);
    }
  };
  function co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function da(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function yd() {
  }
  function Om(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var O = ua(h);
          u.call(O);
        };
      }
      var h = pd(t, i, e, 0, null, !1, !1, "", yd);
      return e._reactRootContainer = h, e[bn] = h.current, br(e.nodeType === 8 ? e.parentNode : e), xi(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var O = ua(g);
        k.call(O);
      };
    }
    var g = lo(e, 0, !1, null, null, !1, !1, "", yd);
    return e._reactRootContainer = g, e[bn] = g.current, br(e.nodeType === 8 ? e.parentNode : e), xi(function() {
      oa(t, g, n, i);
    }), g;
  }
  function fa(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var g = ua(h);
          k.call(g);
        };
      }
      oa(t, h, e, l);
    } else h = Om(n, t, e, l, i);
    return ua(h);
  }
  Zo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pr(t.pendingLanes);
          n !== 0 && (Ra(t, n | 1), Dt(t, le()), (ze & 6) === 0 && (Xi = le() + 500, Xn()));
        }
        break;
      case 13:
        xi(function() {
          var i = Rn(e, 1);
          if (i !== null) {
            var l = At();
            mn(i, e, 1, l);
          }
        }), oo(e, 1);
    }
  }, $a = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = At();
        mn(t, e, 134217728, n);
      }
      oo(e, 134217728);
    }
  }, qo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Rn(e, t);
      if (n !== null) {
        var i = At();
        mn(n, e, t, i);
      }
      oo(e, t);
    }
  }, eu = function() {
    return Qe;
  }, tu = function(e, t) {
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
              var l = _s(i);
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
  }, ss = to, Fe = xi;
  var Fm = { usingClientEntryPoint: !1, Events: [Lr, Ii, _s, vn, kn, to] }, Wr = { findFiberByHostInstance: hi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Im = { bundleType: Wr.bundleType, version: Wr.version, rendererPackageName: Wr.rendererPackageName, rendererConfig: Wr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = hr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Wr.findFiberByHostInstance || $m, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ha.isDisabled && ha.supportsFiber) try {
      cs = ha.inject(Im), yn = ha;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!co(t)) throw Error(o(200));
    return Rm(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!co(e)) throw Error(o(299));
    var n = !1, i = "", l = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = lo(e, 1, !1, null, null, n, !1, i, l), e[bn] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new uo(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = hr(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return xi(e);
  }, zt.hydrate = function(e, t, n) {
    if (!da(t)) throw Error(o(200));
    return fa(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!co(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = kd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = pd(t, null, e, 1, n ?? null, l, !1, u, h), e[bn] = t.current, br(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ca(t);
  }, zt.render = function(e, t, n) {
    if (!da(t)) throw Error(o(200));
    return fa(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!da(e)) throw Error(o(40));
    return e._reactRootContainer ? (xi(function() {
      fa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bn] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = to, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!da(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return fa(e, t, n, !1, i);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Cd;
function Wm() {
  if (Cd) return mo.exports;
  Cd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), mo.exports = Gm(), mo.exports;
}
var Td;
function Qm() {
  if (Td) return ma;
  Td = 1;
  var s = Wm();
  return ma.createRoot = s.createRoot, ma.hydrateRoot = s.hydrateRoot, ma;
}
var Ym = Qm();
const Jm = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], N = ["e", "B", "G", "D", "A", "E"], L = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], j = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], M = {
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
      base: j,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: j,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: j,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: j,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, $ = 26, T = 72, E = 30, S = 54, I = 34, C = 11, U = ($ + T) / 2, V = E + (c.length - 1) * I + 30, H = (K) => T + K * S, D = (K) => K === 0 ? U : H(K) - S / 2, b = (K) => E + K * I;
  function F(K, ne, q) {
    const me = a.indexOf(s[K][0]) + Number(q.slice(-1)) - 1, z = me % a.length, ie = o[z] + 12 * Math.floor(me / a.length), ae = K + ne - ie;
    return a[z] + (ae < 0 ? "♭" : "♯").repeat(Math.abs(ae));
  }
  function re(K) {
    return [...K.base, ...K.add].sort((ne, q) => ne[0] - q[0]);
  }
  function Z(K, ne, q) {
    const me = ne + (q ? 1 : 0), z = m[me % m.length], ie = Math.min(...z.map(([Le]) => Le)), ae = Math.max(...z.map(([, Le]) => Le));
    let xe = (K - d % 12 + 12) % 12 - (q ? 8 : 5) + 12 * Math.floor(me / m.length);
    return ie + xe < 0 && (xe += 12), ae + xe > f.pentatonic && (xe -= 12), {
      strings: z.map((Le) => Le.map((He) => He + xe)),
      start: ie + xe,
      end: ae + xe
    };
  }
  function ge(K, ne, q) {
    const me = q[ne], z = (K + me - d % 12 + 12) % 12, ie = d + z - me, ae = c.map((ce, Se) => {
      const xe = ne + (c.length - 1 - Se) * 3;
      return [xe, xe + 1, xe + 2].map((Le) => {
        const He = Math.floor(Le / q.length), Ye = q[Le % q.length];
        return ie + Ye + 12 * He - ce;
      });
    });
    return {
      strings: ae,
      start: Math.min(...ae.map((ce) => ce[0])),
      end: Math.max(...ae.map((ce) => ce.at(-1)))
    };
  }
  function we(K, ne) {
    const q = [], me = Math.ceil(-K.end / 12) * 12;
    for (let ie = me; K.start + ie <= ne; ie += 12) {
      const ae = K.strings.map((Se) => Se.map((xe) => xe + ie).filter((xe) => xe >= 0 && xe <= ne)), ce = ae.flat();
      q.push({
        strings: ae,
        start: Math.min(...ce),
        end: Math.max(...ce),
        partial: K.start + ie < 0 || K.end + ie > ne
      });
    }
    const z = q.filter((ie) => !ie.partial);
    return z.length ? z : q;
  }
  function J(K) {
    return re(K).length === p;
  }
  function oe(K, ne, q) {
    const me = J(ne);
    K.querySelector('[value="3nps"]').disabled = !me, K.value = me ? q ?? "3nps" : "pentatonic";
  }
  function Ee(K, ne, q, me, z) {
    const ie = re(ne).map(([ae]) => ae);
    return me.map((ae) => {
      const ce = ae - 1, Se = q === "3nps" ? ge(K, ce, ie) : Z(K, ce, ne.base === j), xe = z === void 0 ? [Se] : we(Se, z);
      return { number: ae, positions: xe };
    });
  }
  function be(K, ne) {
    const q = K.getBoundingClientRect(), me = K.querySelectorAll(ne);
    let z = 1 / 0;
    me.forEach((ie) => {
      const ae = ie.getBoundingClientRect();
      let ce = 0;
      ae.left < q.left ? ce = ae.left - q.left - 8 : ae.right > q.right && (ce = ae.right - q.right + 8), Math.abs(ce) < Math.abs(z) && (z = ce);
    }), Number.isFinite(z) && (K.scrollLeft += z);
  }
  function he(K, ne = !1) {
    const q = K === "3nps" ? p : m.length;
    return Array.from({ length: q }, (me, z) => {
      const ie = z + 1;
      return '<label class="box-toggle" data-box="' + ie + '"><input type="checkbox" value="' + ie + '"' + (ne && z === 0 ? " checked" : "") + "> Boksi " + ie + "</label>";
    }).join("");
  }
  function P(K, ne) {
    const q = re(ne), me = new Map(q.map(([ie, ae]) => [ie, F(K, ie, ae)])), z = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return q.flatMap(([ie, ae]) => z.flatMap(({ suffix: ce, base: Se }) => {
      const xe = Se.map(([Le]) => me.get((ie + Le) % 12));
      return xe.every(Boolean) ? {
        root: (K + ie) % 12,
        degree: Number(String(ae).replace(/\D/g, "")),
        name: xe[0] + ce,
        notes: xe,
        base: Se,
        add: []
      } : [];
    }));
  }
  function G(K, ne) {
    const q = K.base.map(([ie]) => (K.root + ie) % 12), me = c.map((ie) => {
      const ae = [];
      for (let ce = 0; ce <= ne; ce++) {
        const Se = (ie + ce) % 12;
        q.includes(Se) && ae.push({ fret: ce, pitch: Se });
      }
      return ae;
    }), z = [];
    for (let ie = 0; ie <= me.length - 3; ie++)
      for (const ae of me[ie])
        for (const ce of me[ie + 1])
          if (ae.pitch !== ce.pitch)
            for (const Se of me[ie + 2]) {
              if (Se.pitch === ae.pitch || Se.pitch === ce.pitch) continue;
              const xe = [ae.fret, ce.fret, Se.fret], Le = Math.min(...xe), He = Math.max(...xe);
              if (He - Le > 3) continue;
              const Ye = Array(c.length).fill(null);
              Ye.splice(ie, 3, ...xe), z.push({ strings: Ye, low: Le, high: He });
            }
    return z.sort((ie, ae) => ie.high - ae.high || ie.low - ae.low);
  }
  const W = {
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
  }, x = [
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
  function y(K, ne) {
    const q = W[K + ":" + ne];
    if (q) return { frets: q, barre: null };
    let me = null;
    return x.forEach(({ string: z, openPC: ie, shapes: ae }) => {
      const ce = ae[ne];
      if (!ce) return;
      let Se = (K - ie + 12) % 12;
      if (Se + Math.min(...ce.filter((He) => He !== null)) < 0 && (Se += 12), me && me.fret <= Se) return;
      const xe = ce.map((He) => He === null ? null : Se + He), Le = Se > 0 && ce.at(-1) === 0 ? { fret: Se, from: z, to: ce.length - 1 } : null;
      me = { fret: Se, frets: xe, barre: Le };
    }), me && { frets: me.frets, barre: me.barre };
  }
  function te(K, { frets: ne, barre: q }, me) {
    const xe = [...c].reverse(), Le = ne.filter((Ve) => Ve > 0), Ye = !Le.length || Math.max(...Le) <= 4 && (ne.includes(0) || Math.min(...Le) === 1) ? 1 : Math.min(...Le), We = (Ve) => 24 + Ve * 14, Xe = (Ve) => 30 + (Ve - Ye) * 18 + 18 / 2, ut = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (ut + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + me + "-ote paksusta kielestä ohueen: " + ne.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Je += '<line class="' + (Ve === 0 && Ye === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + We(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return ne.forEach((Ve, it) => {
      Je += '<line class="string" x1="' + We(it) + '" y1="30" x2="' + We(it) + '" y2="' + ut + '"/>';
    }), Ye > 1 && (Je += '<text class="fret-label" x="15" y="' + (Xe(Ye) + 4) + '">' + Ye + "</text>"), q && (Je += '<rect class="barre" x="' + (We(q.from) - 6.5) + '" y="' + (Xe(q.fret) - 6.5) + '" width="' + ((q.to - q.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ne.forEach((Ve, it) => {
      if (Ve === null) {
        Je += '<text class="marker" x="' + We(it) + '" y="22">×</text>';
        return;
      }
      const Bt = (xe[it] + Ve) % 12 === K;
      if (Ve === 0) {
        Je += '<circle class="open' + (Bt ? " root-open" : "") + '" cx="' + We(it) + '" cy="18" r="4.5"/>';
        return;
      }
      q && Ve === q.fret && it >= q.from && it <= q.to && !Bt || (Je += '<circle class="' + (Bt ? "root" : "tone") + '" cx="' + We(it) + '" cy="' + Xe(Ve) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function ue(K, ne) {
    const q = new URLSearchParams(location.search), me = s.indexOf(q.get("toonikka")), z = q.get("asteikko");
    return {
      rootPC: me === -1 ? K : me,
      scaleId: Object.hasOwn(M, z) ? z : ne
    };
  }
  function ye(K, ne, q) {
    return K + "?" + new URLSearchParams({ toonikka: s[ne], asteikko: q });
  }
  function Q(K, ne, q, {
    boxes: me = [],
    onlyBoxNotes: z = !1,
    automatic: ie = !0,
    focusDegree: ae = "",
    grip: ce = null,
    barre: Se = null,
    label: xe = s[K] + " " + ne.name,
    notes: Le = null,
    targets: He = !1,
    muteFret: Ye = null
  } = {}) {
    const We = H(q), Xe = We + 48, ut = Xe + 28, Je = E - 14, Ve = b(c.length - 1) + 14, it = Ve - Je, Bt = ie ? 680 : Math.ceil(ut * 0.64), Yt = me.flatMap((Me) => Me.positions), Nt = {};
    ne.base.forEach(([Me, Ae]) => Nt[(K + Me) % 12] = { deg: Ae, added: !1 }), ne.add.forEach(([Me, Ae]) => Nt[(K + Me) % 12] = { deg: Ae, added: !0 });
    const ln = c.map((Me, Ae) => !!ce && ce[Ae] === null), Jt = !!ce && Ye !== null, Xt = L.filter((Me, Ae) => ln[Ae]).reverse(), _t = xe + ". " + q + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Xt.length ? " Soittamatta jäävät kielet: " + Xt.join(", ") + "." : "");
    let Ne = '<svg viewBox="0 0 ' + ut + " " + V + '" style="min-width:' + Bt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (He ? "group" : "img") + '" aria-label="' + _t + '">';
    Ne += '<rect x="' + $ + '" y="' + Je + '" width="' + (T - $) + '" height="' + it + '" rx="6" fill="#2a2338"/>', Ne += '<rect x="' + T + '" y="' + Je + '" width="' + (We - T) + '" height="' + it + '" fill="#231a12"/>', Ne += '<rect x="' + We + '" y="' + Je + '" width="' + (ut - We - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let Me = 1; Me <= q; Me++)
      Ne += '<line x1="' + H(Me) + '" y1="' + Je + '" x2="' + H(Me) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    Ne += '<rect x="' + (T - 3) + '" y="' + Je + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', Ne += '<rect x="' + (Xe - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', Ne += '<rect x="' + (Xe - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Vt = (Je + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Me) => Me <= q).forEach((Me) => Ne += '<circle cx="' + D(Me) + '" cy="' + Vt + '" r="5.5" fill="#7a6550"/>');
    for (let Me = 12; Me <= q; Me += 12)
      Ne += '<circle cx="' + D(Me) + '" cy="' + (Vt - I) + '" r="5.5" fill="#7a6550"/>', Ne += '<circle cx="' + D(Me) + '" cy="' + (Vt + I) + '" r="5.5" fill="#7a6550"/>';
    Ne += '<text x="' + U + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', Ne += '<text x="' + T + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', Ne += '<text x="' + Xe + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Me = 1; Me <= q; Me++)
      Ne += '<text x="' + D(Me) + '" y="' + (V - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Me + "</text>";
    if (me.forEach(({ number: Me, positions: Ae }) => {
      Ae.forEach((Re) => {
        const Ge = Re.partial ? "box-highlight box-partial" : "box-highlight";
        Ne += '<g class="' + Ge + '" data-box="' + Me + '" aria-hidden="true">';
        const st = Re.strings.find((vt) => vt.length), Lt = (D(st[0]) + D(st.at(-1))) / 2;
        Ne += '<text class="box-number" x="' + Lt + '" y="12">' + Me + "</text>", Re.strings.forEach((vt, Zt) => {
          if (!vt.length) return;
          const En = D(vt[0]) - 16, vn = D(vt.at(-1)) - D(vt[0]) + 32;
          Ne += '<rect class="box-band" x="' + En + '" y="' + (b(Zt) - 14) + '" width="' + vn + '" height="28" rx="14"/>';
        }), Ne += "</g>";
      });
    }), c.forEach((Me, Ae) => {
      const Re = 1 + Ae * 0.45, Ge = b(Ae), st = ln[Ae] && !Jt;
      st ? Ne += '<text class="muted-mark" x="' + U + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : ln[Ae] && Ye === 0 || (Ne += '<line x1="' + ($ + 4) + '" y1="' + Ge + '" x2="' + (T - 4) + '" y2="' + Ge + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Ne += "<g" + (st ? ' opacity=".35"' : "") + ">", Ne += '<line x1="' + T + '" y1="' + Ge + '" x2="' + (Xe + 5) + '" y2="' + Ge + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', Ne += '<circle cx="' + (Xe + 5) + '" cy="' + Ge + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', Ne += "</g>", Ne += '<text x="13" y="' + (Ge + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + N[Ae] + "</text>";
    }), ce && Se && Se.fret >= 1 && Se.fret <= q) {
      const Me = b(Se.from), Ae = b(Se.to), Re = Math.min(Me, Ae) - 6, Ge = Math.max(Me, Ae) + 6;
      Ne += '<rect class="barre-indicator" x="' + (D(Se.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Ge - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return He && (Ne += '<g class="fret-targets">', c.forEach((Me, Ae) => {
      for (let Re = 0; Re <= q; Re++) {
        const Ge = Re ? L[Ae] + "-kieli, " + Re + ". nauha" : "vapaa " + L[Ae] + "-kieli", st = Re ? S : T - $ - 6;
        Ne += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Ae + '" data-fret="' + Re + '" data-midi="' + (Me + Re) + '" aria-label="' + Ge + '" x="' + (D(Re) - st / 2) + '" y="' + (b(Ae) - I / 2) + '" width="' + st + '" height="' + I + '" fill="transparent"/>';
      }
    }), Ne += "</g>"), (Le ?? []).forEach(({ string: Me, fret: Ae, label: Re, kind: Ge }) => {
      Ne += '<g class="octave-note octave-' + Ge + '">', Ne += '<circle cx="' + D(Ae) + '" cy="' + b(Me) + '" r="' + C + '"/>', Ne += '<text x="' + D(Ae) + '" y="' + (b(Me) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", Ne += "</g>";
    }), ce && (Ne += '<g class="grip-notes">'), (Le ? [] : c).forEach((Me, Ae) => {
      for (let Re = 0; Re <= q; Re++) {
        const Ge = (Me + Re) % 12;
        if (!(Ge in Nt) || ce && ce[Ae] !== Re || z && !Yt.some(({ strings: vn }) => {
          const kn = vn[Ae];
          return kn.length > 0 && Re >= kn[0] && Re <= kn.at(-1);
        })) continue;
        const st = Nt[Ge], Lt = st.deg === "1", vt = st.added ? "#f0a13c" : Lt ? "#4b2fd6" : "#6d4aff", Zt = st.added ? "#1a1430" : "#fff";
        st.deg === ae && (Ne += '<circle class="focus-note" cx="' + D(Re) + '" cy="' + b(Ae) + '" r="14.5"/>');
        const En = ce ? ' data-string="' + (Ae + 1) + '" data-fret="' + Re + '" data-degree="' + st.deg + '"' : "";
        Ne += "<circle" + En + ' cx="' + D(Re) + '" cy="' + b(Ae) + '" r="' + C + '" fill="' + vt + '" stroke="' + (Lt ? "#fff" : "#1a1430") + '" stroke-width="' + (Lt ? 2.5 : 1) + '"/>', Ne += '<text x="' + D(Re) + '" y="' + (b(Ae) + 3.5) + '" font-size="' + (st.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Zt + '" text-anchor="middle">' + st.deg + "</text>";
      }
    }), ce && (Ne += "</g>"), Jt && ln.forEach((Me, Ae) => {
      if (!Me) return;
      const Re = D(Ye), Ge = b(Ae);
      Ne += '<g class="muted-mark grip-mute" data-string="' + (Ae + 1) + '" data-fret="' + Ye + '">', Ne += '<circle cx="' + Re + '" cy="' + Ge + '" r="9" fill="' + (Ye === 0 ? "#2a2338" : "#231a12") + '"/>', Ne += '<text x="' + Re + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Ne += "</g>";
    }), Ne += "</svg>", Ne;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: c,
    PENT_MAJ: j,
    SCALES: M,
    noteName: F,
    scaleNotes: re,
    scaleTriads: P,
    triadGrips: G,
    chordGrip: y,
    renderChordDiagram: te,
    selectionFromURL: ue,
    selectionHref: ye,
    renderBoard: Q,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: J,
    syncBoxSystem: oe,
    fingeringBoxes: Ee,
    boxOptions: he,
    revealPositions: be
  };
})();
globalThis.MusicMapFretboard = Jm;
function ko(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Xm(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Zm(s) {
  const a = Xm(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const Ie = globalThis.MusicMapFretboard, Be = (s) => (s % 12 + 12) % 12, qm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], ep = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Pe = (s, a = !1, o = !1) => (a ? ep : qm)[Be(s)] + (o ? Math.floor(s / 12) - 1 : ""), oi = (s) => Ie.CHROM[Be(s)], Zr = (s, a, o) => Ie.noteName(Be(s), a, o);
function tp(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Be(s) < 2 ? o - 1 : a[0] === "C" && Be(s) > 9 ? o + 1 : o;
}
const Qt = ["ohut E", "B", "G", "D", "A", "paksu E"], Uo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], yf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], np = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ti = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Oe = (s, a) => ({ string: s, fret: a, midi: Ie.OPEN_PITCHES[s] + a });
function ur(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Oe(c, a + f)));
}
const Ue = (s) => `${s.string}:${s.fret}`, Ci = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, gf = (s, a) => a === "maj" ? `${oi(s)}-duurisointu` : a === "min" ? `${oi(s)}-mollisointu` : `${oi(s)}7-sointu`, qr = [
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
], Md = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function jf(s, a) {
  const o = Md[a] ?? Md.E, c = Be(s - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [Oe(f, d + c)]);
}
const ya = {
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
}, Ma = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (s, a, o, c) => typeof s == "number" && Number.isFinite(s) ? Math.max(a, Math.min(o, s)) : c, wn = (s, a, o) => a.includes(s) ? s : o;
function Na(s) {
  const a = { ...ya };
  a.mode = wn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, c) => o - c) : a.strings, a.strings.length || (a.strings = [...ya.strings]), a.min = Math.round(li(s.min, 0, 24, a.min)), a.max = Math.round(li(s.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (a[o] = s[o]);
  return a.check = wn(s.check, ["class", "pitch"], a.check), a.input = wn(s.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : a.rounds, a.root = Math.round(li(s.root, 0, 11, a.root)), a.scale = typeof s.scale == "string" && Object.hasOwn(Ie.SCALES, s.scale) ? s.scale : a.scale, a.box = Math.round(li(s.box, 0, 5, a.box)), a.order = wn(s.order, ["random", "up", "down"], a.order), a.chord = wn(s.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = wn(s.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = wn(s.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ya.intervals]), a.direction = wn(s.direction, ["up", "down", "both"], a.direction), a.hints = wn(s.hints, ["off", "always", "fade"], a.hints), a.activity = wn(s.activity, ["play", "degree"], a.activity), a.minRms = li(s.minRms, 1e-3, 0.15, a.minRms), a.clarity = li(s.clarity, 0.85, 0.99, a.clarity), a.stability = li(s.stability, 120, 800, a.stability), a.cents = li(s.cents, 10, 45, a.cents), a.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", a;
}
function ip(s, a) {
  const o = new URLSearchParams(s), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ie.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Na(c);
}
function rp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: Ie.CHROM[s.root],
    asteikko: s.scale,
    alku: String(s.min),
    loppu: String(s.max),
    boksi: String(s.box),
    kierros: String(s.rounds),
    tarkistus: s.check,
    muoto: s.shape,
    sointu: s.chord,
    jarjestys: s.order,
    vastaus: s.input,
    vihjeet: s.hints,
    tehtava: s.activity,
    sointuaste: s.chordTone,
    suunta: s.direction,
    kielet: s.strings.map((a) => a + 1).join(","),
    intervallit: s.intervals.join(","),
    kromaattinen: s.accidentals ? "1" : "0",
    alennukset: s.flats ? "1" : "0",
    kertaus: s.weak ? "1" : "0",
    vertailu: s.reference ? "1" : "0"
  });
}
const Mi = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, In = (s) => s.mode === "scale" && s.order !== "random", xf = (s) => ["note", "degree"].includes(Mi(s)) ? "class" : In(s) ? "pitch" : s.check, pa = (s) => Mi(s) === "mic", _d = "musiikin-kartta:harjoittelu", Sf = 3, To = () => ({ version: Sf, settings: { ...ya }, stats: {}, recent: [], sessions: [] }), wf = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, pn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function sp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => pn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || pn(s.errors)) && (s.ema === void 0 || pn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || pn(s.emaMs));
}
function ap(s) {
  return !!s && typeof s.id == "string" && pn(s.count) && pn(s.first) && s.first <= s.count && pn(s.ms) && pn(s.at) && (s.solo === void 0 || pn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || pn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function bd(s) {
  if (!s) return To();
  const a = JSON.parse(s);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !sp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !pn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !ap(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Na(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: Sf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Ad = 2500, lp = 8e3, Pd = 0.3, es = (s) => s.ema ?? s.correct / s.attempts, ts = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Ho(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (ts(s) - Ad) / (lp - Ad)));
  return es(s) * 0.65 + a * 0.35;
}
function op(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Ho(s)) * 3;
}
class Ld {
  constructor(a) {
    this.storage = a;
    try {
      this.data = bd(a?.getItem(_d) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = To();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(_d, JSON.stringify(this.data)), this.warning = "";
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
    const o = wf(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? es(c) + Pd * (d - es(c)) : d,
      emaMs: c.attempts ? ts(c) + Pd * (a.ms - ts(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = bd(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...To(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const up = 4e3, Rd = 12, cp = 1500;
function dp(s, a) {
  const o = s.left + s.stickyLeft, c = s.right;
  let d = 0;
  if (a.left < o ? d = a.left - o - Rd : a.right > c && (d = a.right - c + Rd), d === 0) return null;
  const f = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(f - s.scrollLeft) < 1 ? null : f;
}
function fp(s, a) {
  return a.right <= s.left + s.stickyLeft || a.left >= s.right;
}
function Nf(s, a, o, { stickySelector: c, enabled: d = !0, playback: f } = {}) {
  const p = _.useRef(0), m = _.useRef(!1), N = _.useRef(""), L = _.useRef(0), v = _.useRef(f);
  _.useEffect(() => {
    const j = s.current;
    if (!j || !d) return;
    const M = () => {
      p.current = Date.now() + up;
    }, $ = () => {
      m.current = !0, M();
    }, T = () => {
      m.current && (m.current = !1, M());
    }, E = (S) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(S.key) && M();
    };
    return j.addEventListener("pointerdown", $, { passive: !0 }), j.addEventListener("touchstart", $, { passive: !0 }), j.addEventListener("wheel", M, { passive: !0 }), j.addEventListener("keydown", E), window.addEventListener("pointerup", T, { passive: !0 }), window.addEventListener("pointercancel", T, { passive: !0 }), window.addEventListener("touchend", T, { passive: !0 }), window.addEventListener("touchcancel", T, { passive: !0 }), () => {
      j.removeEventListener("pointerdown", $), j.removeEventListener("touchstart", $), j.removeEventListener("wheel", M), j.removeEventListener("keydown", E), window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), window.removeEventListener("touchend", T), window.removeEventListener("touchcancel", T);
    };
  }, [s, d]), _.useLayoutEffect(() => {
    const j = f !== void 0 && !!f && f !== v.current;
    v.current = f, j && !m.current && (p.current = 0);
  }, [f]), _.useLayoutEffect(() => {
    f === void 0 && N.current === "" && o !== "" && Date.now() - L.current > cp && !m.current && (p.current = 0), N.current !== "" && o === "" && (L.current = Date.now()), N.current = o;
    const j = s.current;
    if (!j || !d || !o || m.current || Date.now() < p.current) return;
    const M = j.querySelector(a);
    if (!M) return;
    const $ = j.getBoundingClientRect(), T = M.getBoundingClientRect(), E = c ? j.querySelector(c) : null, S = E && getComputedStyle(E).position === "sticky" ? E.getBoundingClientRect().width : 0, I = {
      left: $.left,
      right: $.left + j.clientWidth,
      scrollLeft: j.scrollLeft,
      maxScroll: j.scrollWidth - j.clientWidth,
      stickyLeft: S
    }, C = dp(I, T);
    if (C === null) return;
    const V = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || fp(I, T);
    typeof j.scrollTo == "function" ? j.scrollTo({ left: C, behavior: V ? "auto" : "smooth" }) : j.scrollLeft = C;
  }, [s, a, o, c, d, f]);
}
const hp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), mp = ["e", "B", "G", "D", "A", "E"];
function Ef({ string: s }) {
  return /* @__PURE__ */ r.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      /* @__PURE__ */ r.jsxs("span", { className: "string-number", children: [
        s + 1,
        " · "
      ] }),
      /* @__PURE__ */ r.jsx("strong", { children: mp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ r.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ r.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Cf = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), pp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Tf({ min: s, max: a }) {
  return /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { scope: "col", children: /* @__PURE__ */ r.jsx("span", { className: "board-head-label", children: "Kielet" }) }),
    Array.from({ length: a - s + 1 }, (o, c) => {
      const d = s + c;
      return /* @__PURE__ */ r.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : hp.has(d) ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ui({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints", playback: m }) {
  const N = { "--cols": s.max - s.min + 1 }, { strings: L, min: v, max: j } = s, [M, $] = _.useState({ string: Math.min(...L), fret: v }), T = _.useRef(null), E = new Map(a.map((H) => [Ue(H), H])), S = a.map((H) => `${Ue(H)}${H.kind}`).join(",");
  _.useEffect(() => {
    if (p !== "hints") return;
    const H = T.current, D = H?.querySelector(".target, .anchor");
    H && D && (H.scrollLeft += D.getBoundingClientRect().left - H.getBoundingClientRect().left - H.clientWidth / 2 + D.clientWidth / 2);
  }, [S, p]), _.useEffect(() => {
    p === "playing" && T.current && (T.current.scrollLeft = 0);
  }, [p, v, j]);
  const I = a.find((H) => H.kind === "playing");
  Nf(T, ".playing", I ? Ue(I) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [C, U] = _.useState({ left: !1, right: !1 });
  _.useEffect(() => {
    const H = T.current;
    if (!H) return;
    const D = () => {
      const F = H.scrollLeft > 2, re = H.scrollLeft + H.clientWidth < H.scrollWidth - 2;
      U((Z) => Z.left === F && Z.right === re ? Z : { left: F, right: re });
    };
    D(), H.addEventListener("scroll", D, { passive: !0 });
    const b = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return b?.observe(H), () => {
      H.removeEventListener("scroll", D), b?.disconnect();
    };
  }, [S, v, j]);
  const V = L.includes(M.string) && M.fret >= v && M.fret <= j ? M : { string: Math.min(...L), fret: v };
  return /* @__PURE__ */ r.jsxs("div", { className: "fret-wrap" + (C.left ? " more-left" : "") + (C.right ? " more-right" : ""), children: [
    (C.left || C.right) && /* @__PURE__ */ r.jsxs("p", { className: "fret-scroll-hint", children: [
      C.left && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      C.left && C.right ? "molemmilla puolilla" : C.right ? "oikealla" : "vasemmalla",
      C.right && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { ref: T, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board" + (c && !d ? " display-only" : ""), style: N, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx(Tf, { min: v, max: j }),
      /* @__PURE__ */ r.jsx("tbody", { children: Ie.OPEN_PITCHES.map((H, D) => /* @__PURE__ */ r.jsxs("tr", { className: L.includes(D) ? "" : "unused", style: Cf(D), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${Qt[D]}${o.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(Ef, { string: D }),
          o.includes(D) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        ur([D], v, j).map((b) => {
          const F = E.get(Ue(b)), re = `${Qt[D]}-kieli, ${Ti(b.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${b.fret === 0 ? "open-fret " : ""}${F ? F.kind === "answer" ? "target" : F.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": b.fret,
              tabIndex: V.string === D && V.fret === b.fret ? 0 : -1,
              onFocus: () => $(b),
              onKeyDown: (Z) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key)) return;
                Z.preventDefault();
                const ge = [...L].sort((Ee, be) => Ee - be), we = ge.indexOf(D), J = Z.key === "ArrowUp" ? ge[Math.max(0, we - 1)] : Z.key === "ArrowDown" ? ge[Math.min(ge.length - 1, we + 1)] : D, oe = Z.key === "Home" ? v : Z.key === "End" ? j : Math.max(v, Math.min(j, b.fret + (Z.key === "ArrowRight" ? 1 : Z.key === "ArrowLeft" ? -1 : 0)));
                Z.currentTarget.closest("table")?.querySelector(`button[data-string="${J}"][data-fret="${oe}"]`)?.focus();
              },
              disabled: c || !L.includes(D),
              "aria-label": re + (F ? `, ${pp[F.kind]}${F.label ? " " + F.label : ""}` : ""),
              onClick: () => d?.(b),
              children: F ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: F.label || "●" }) : null
            }
          ) }, b.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function vp({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, N = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx(Tf, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: Ie.OPEN_PITCHES.map((L, v) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Cf(v), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Qt[v]}`, children: /* @__PURE__ */ r.jsx(Ef, { string: v }) }),
      ur([v], p, m).map((j) => {
        const M = Object.hasOwn(a, N + Ue(j)) ? a[N + Ue(j)] : void 0, $ = Ho(M), T = $ === null ? "unseen" : M.attempts < 3 ? "few" : $ >= 0.8 ? "strong" : $ >= 0.5 ? "growing" : "weak", E = `${Qt[v]}-kieli, ${Ti(j.fret)}, ${Pe(j.midi, d)}`, S = M ? `${Math.round($ * 100)} %, ${M.correct}/${M.attempts} heti oikein, viime aikoina ${Math.round(es(M) * 100)} % ja ${(ts(M) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${j.fret === 0 ? "open-fret " : ""}${T}`, title: `${E}: ${S}`, children: [
          /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: $ === null ? "·" : M.attempts < 3 ? "?" : Math.round($ * 100) }),
          /* @__PURE__ */ r.jsxs("span", { className: "sr-only", children: [
            E,
            ": ",
            S
          ] })
        ] }, j.fret);
      })
    ] }, v)) })
  ] }) });
}
const kp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", _a = (s) => s.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, Mf = (s) => Ie.fingeringBoxes(s.root, Ie.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function _i(s) {
  if (s.mode === "caged") {
    const a = jf(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const a = Mf(s);
    return { strings: s.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function yp(s) {
  const a = _i(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function is(s) {
  const a = _i(s), o = ur(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Be(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(jf(s.root, s.shape).map(Ue));
    return o.filter((p) => f.has(Ue(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => _a(s).some(([p]) => Be(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return c;
  const d = Mf(s);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function _f(s, a) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((c) => s.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function gp(s) {
  const a = _a(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function Mo(s) {
  const a = is(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = gp(s).filter(([d]) => !a.some((f) => Be(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !_f(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function jp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function bf(s) {
  return In(s) ? new Set(is(s).map((a) => a.midi)).size : s.rounds;
}
function xp(s, a) {
  return s.hints === "always" ? 2 : s.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function qi(s, a, o = Math.random) {
  if (!s.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, o()));
  if (!(c > 0)) return s[Math.floor(d * s.length)];
  let f = d * c;
  for (let p = 0; p < s.length; p++)
    if (f -= a[p], f < 0) return s[p];
  return s.at(-1);
}
const $d = (s, a) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${a}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${a}:${s.activity}` : `scale:${s.root}:${s.scale}:${a}:${s.activity}`;
function Ei(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function Sp(s, a, o = {}, c, d = Math.random) {
  const f = Mo(s);
  if (f) throw new Error(f);
  const p = xf(s), m = Mi(s), N = p === "pitch", L = (b) => s.weak ? op(o[wf({ input: m, check: p, hint: !1, item: b })]) : 1, v = (b) => qi(b, b.map(() => 1), d), j = is(s), M = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const b = Ei(j, (Z) => !!c && Ue(Z) === Ue(c.position)), F = qi(b, b.map((Z) => L(`notes:${Ue(Z)}`)), d), re = Pe(F.midi, s.flats, N);
    return {
      ...M,
      position: F,
      midi: F.midi,
      name: re,
      item: `notes:${Ue(F)}`,
      prompt: `Etsi ${re} ${Uo[F.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const b = (ge) => `ear-note:${Be(ge.midi)}${s.reference ? ":ref" : ""}`, F = Ei(j, (ge) => !!c && Be(ge.midi) === Be(c.midi)), re = qi(F, F.map((ge) => L(b(ge))), d), Z = s.reference ? 57 + 12 * Math.round((re.midi - 57) / 12) : void 0;
    return {
      ...M,
      position: re,
      midi: re.midi,
      name: Pe(re.midi, s.flats),
      item: b(re),
      choices: "note",
      reference: Z,
      sound: Z === void 0 ? [re.midi] : [Z, re.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const b = Ei(j, (re) => !!c && re.midi === c.midi), F = qi(b, b.map((re) => L(`repeat:${re.midi}`)), d);
    return {
      ...M,
      position: F,
      midi: F.midi,
      name: Pe(F.midi, s.flats, !0),
      item: `repeat:${F.midi}`,
      sound: [F.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const b = Ei(_f(s, j), (Z) => c?.interval === Z.iv && c?.direction === Z.direction), F = qi(b, b.map((Z) => L(`interval:${Z.iv}:${Z.direction}`)), d), re = v(Ei(F.pairs, (Z) => c?.reference === Z.reference.midi));
    return {
      ...M,
      position: re.target,
      midi: re.target.midi,
      name: Pe(re.target.midi, s.flats, !0),
      item: `interval:${F.iv}:${F.direction}`,
      interval: F.iv,
      direction: F.direction,
      reference: re.reference.midi,
      sound: [re.reference.midi, re.target.midi],
      prompt: `Kuulet ${F.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Pe(re.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const $ = _a(s);
  let T, E = 0;
  if (In(s)) {
    const b = jp(s, j);
    E = b.length, T = b[a % b.length];
  } else {
    const b = $.filter(([Z]) => j.some((ge) => Be(ge.midi - s.root) === Z)), F = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [$[a % $.length]] : $.filter(([, Z]) => Z.endsWith(s.chordTone)) : Ei(b, ([Z]) => c?.interval === Z), [re] = qi(F, F.map(([Z]) => L($d(s, Z))), d);
    T = v(Ei(j.filter((Z) => Be(Z.midi - s.root) === re), (Z) => !!c && Ue(Z) === Ue(c.position)));
  }
  const S = Be(T.midi - s.root), I = $.find(([b]) => b === S)[1], C = Zr(s.root, S, I), U = N ? C + tp(T.midi, C) : C, V = s.mode === "scale" ? `${oi(s.root)}-${Ie.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${oi(s.root)}-duurisointu, ${s.shape}-muoto` : gf(s.root, s.chord), H = s.mode !== "caged" && s.activity === "degree", D = H ? `${V}: mikä aste on ${C}?` : E ? `${V} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % E + 1}/${E}: ${I}. aste (${U}).` : `${V}: etsi ${I}. aste${N ? ` (${U})` : ""}.`;
  return {
    ...M,
    position: T,
    midi: T.midi,
    name: U,
    item: $d(s, S),
    prompt: D,
    degree: I,
    interval: S,
    choices: H ? "degree" : "position"
  };
}
function _o(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Be(s) === Be(a) : s === a);
}
function Af(s, a, o) {
  return _o(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : kp(s) ? is(s).some((c) => Ue(c) === Ue(o)) : !0 : !1;
}
function wp(s, a) {
  const o = _i(s);
  return ur(o.strings, o.min, o.max).filter((c) => Af(s, a, c));
}
const wt = (s, a, o) => ({ ...s, label: a, kind: o }), Np = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function Ep(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = _i(s), f = ur(d.strings, d.min, d.max), p = wp(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((I) => wt(I, a.name, "answer")), text: `${a.name} on ${yf[a.position.string]}: ${Ti(a.position.fret)}.` };
    const E = f.find((I) => I.string === a.position.string), S = Pe(E.midi, s.flats);
    return {
      marks: [wt(E, S, "anchor")],
      text: `Apupiste: ${np[E.string]} ${E.fret === 0 ? "vapaa sävel" : E.fret + ". nauhan sävel"} on ${S}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [wt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [wt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Qt[a.position.string]}-kieli, ${Ti(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((E) => wt(E, Pe(E.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Uo[a.position.string]}.` };
  if (s.mode === "interval") {
    const E = Pe(a.reference, s.flats, !0), S = f.filter((I) => I.midi === a.reference).map((I) => wt(I, E, "anchor"));
    return c ? {
      marks: [...S, ...p.map((I) => wt(I, Pe(I.midi, s.flats, !0), "answer"))],
      text: `${Np(qr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${E} → ${a.name}.`
    } : { marks: S, text: `Alkusävel ${E} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = is(s), N = _a(s), L = (E) => N.find(([S]) => S === Be(E.midi - s.root))?.[1] ?? "", v = Zr(s.root, a.interval, a.degree), j = m.filter((E) => Be(E.midi - s.root) === 0), M = (E) => p.some((S) => Ue(S) === Ue(E)), $ = `${a.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((E) => wt(E, L(E), M(E) ? "answer" : "shape")), text: $ } : { marks: m.map((E) => wt(E, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const T = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const E = m.filter((S) => Be(S.midi) === Be(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : j).map((S) => wt(S, "1", "anchor")), ...E.map((S) => wt(S, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: E.map((S) => wt(S, v, "shape")), text: `Katso ${T} nimeä: mikä on sen perussävel?` } : {
      marks: [...j.map((S) => wt(S, "1", "anchor")), ...E.map((S) => wt(S, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...j.filter((E) => !M(E)).map((E) => wt(E, "1", "anchor")), ...p.map((E) => wt(E, a.degree, "answer"))], text: $ } : a.interval === 0 ? { marks: [], text: `1. aste on ${T} perussävel ${oi(s.root)}.` } : { marks: j.map((E) => wt(E, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Cp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = bf(a);
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
      this.question = Sp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = xp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
  answer(a, o, c, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const f = this.question;
    if (!(o === "degree" ? a === f.interval : o === "note" ? _o(f.midi, a, "class") : o === "board" ? !!c && Af(this.settings, f, c) : _o(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, N = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Ue(m)}` : f.item,
      mode: this.settings.mode,
      input: o,
      check: f.check,
      expected: f.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? N.position = Ue(m) : this.settings.mode === "notes" && (N.position = Ue(f.position)), this.results.push(N), this.record(N), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function bo(s) {
  const a = s.filter((o) => !o.hint);
  return {
    count: s.length,
    first: s.filter((o) => o.first).length,
    solo: a.length,
    soloFirst: a.filter((o) => o.first).length,
    guided: s.length - a.length,
    ms: s.reduce((o, c) => o + c.ms, 0)
  };
}
const Ao = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], ir = (s) => Ao.find(([a]) => a === s)?.[1] ?? s;
function Pt({ label: s, children: a }) {
  const o = _.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    _.cloneElement(a, { id: o })
  ] });
}
function Od({ legend: s, name: a, value: o, options: c, onChange: d, disabled: f }) {
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "choice", disabled: f, children: [
    /* @__PURE__ */ r.jsx("legend", { children: s }),
    /* @__PURE__ */ r.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ r.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ r.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === o, onChange: () => d(p.value) }),
      /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("strong", { children: p.title }),
        /* @__PURE__ */ r.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Fd(s) {
  const a = _i(s), o = bf(s), c = Mi(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Ma[s.hints].title} · ${d} · ${In(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Id({ s, change: a, locked: o, problem: c }) {
  const d = _.useId(), f = (v, j) => a({ ...s, [v]: j }), p = _i(s), m = Mi(s) === "note" || Mi(s) === "degree", N = ["scale", "chord", "caged"].includes(s.mode), L = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(Pt, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: Ao.map(([v, j]) => /* @__PURE__ */ r.jsx("option", { value: v, children: j }, v)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: Ao.find(([v]) => v === s.mode)[2] })
    ] }),
    N && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(Pt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: Ie.CHROM.map((v, j) => /* @__PURE__ */ r.jsx("option", { value: j, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(Pt, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(Ie.SCALES).map(([v, j]) => /* @__PURE__ */ r.jsx("option", { value: v, children: j.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(Pt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ r.jsxs("select", { value: s.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ r.jsx(Pt, { label: "Sävelten järjestys", children: /* @__PURE__ */ r.jsxs("select", { value: s.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ r.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ r.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(Pt, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ci).map(([v, j]) => /* @__PURE__ */ r.jsx("option", { value: v, children: j.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(Pt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ r.jsxs("select", { value: s.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
          /* @__PURE__ */ r.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            s.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ r.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ r.jsxs("option", { value: "3", children: [
            "Terssi · ",
            s.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ r.jsx("option", { value: "5", children: "Kvintti · 5" }),
          s.chord === "dom7" && /* @__PURE__ */ r.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      s.mode === "caged" ? /* @__PURE__ */ r.jsx(Pt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ r.jsx("select", { value: s.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ r.jsx(Pt, { label: "Tehtävä", children: /* @__PURE__ */ r.jsxs("select", { value: s.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ r.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ r.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (j) => f("intervals", j.target.checked ? [...s.intervals, v] : s.intervals.filter((M) => M !== v)) }),
        qr[v]
      ] }, v)) }),
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx(Pt, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ r.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ r.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Od,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Ma[v] }))
      }
    ),
    m ? /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ r.jsx(Od, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ r.jsx(Pt, { label: "Kierroksen pituus", children: /* @__PURE__ */ r.jsxs("select", { value: s.rounds, disabled: In(s), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ r.jsx(Pt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ r.jsxs("select", { value: In(s) ? "pitch" : s.check, disabled: In(s), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ r.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ r.jsx(Pt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ r.jsxs("select", { value: String(s.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ r.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ r.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      In(s) && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ r.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${s.shape}-muoto` : `Boksi ${s.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ r.jsxs("button", { type: "button", "aria-pressed": s.min === 0 && s.max === v, onClick: () => a({ ...s, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsx(Pt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ r.jsx(Pt, { label: "Viimeinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: Qt.map((v, j) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.strings.includes(j), onChange: (M) => f("strings", M.target.checked ? [...s.strings, j] : s.strings.filter(($) => $ !== j)) }),
          j + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "check-row", children: [
        L && /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.accidentals, onChange: (v) => f("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        s.mode === "ear-note" && /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.reference, onChange: (v) => f("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.weak, onChange: (v) => f("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.advance, onChange: (v) => f("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Dd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Tp(s) {
  return s && Object.hasOwn(Dd, s) ? Dd[s] : null;
}
const Mp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function _p({ onSelect: s }) {
  return /* @__PURE__ */ r.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ r.jsx("div", { className: "learning-grid", children: Mp.map((a) => /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(a.id), children: [
      /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ r.jsx("strong", { children: a.title }),
        /* @__PURE__ */ r.jsx("span", { children: a.description }),
        /* @__PURE__ */ r.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
const bp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Po = 100, Pf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Go(s) {
  if (s === null || s.trim() === "") return Po;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Po;
}
function Ap() {
  try {
    return Go(localStorage.getItem(Pf));
  } catch {
    return Po;
  }
}
function Pp(s) {
  try {
    localStorage.setItem(Pf, String(Go(String(s))));
  } catch {
  }
}
function zd(s, a, o = !0) {
  return o ? bp[s] * Go(String(a)) / 100 : 0;
}
function Lf(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Lp = 0.12, Rp = 2e3, $p = 3;
function Op(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= Lp || s.seeking || s.readyState < $p ? !1 : s.msSinceLastFix >= Rp;
}
const Fp = 1.5, Ip = 0.4, Dp = 0.5;
let Lo = null, zp = null;
function Bp(s) {
  return Lo !== null ? Lo : (zp ??= Lf()) ? 0 : Ip;
}
class Rf {
  constructor(a = Bp()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, c = !1, d = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused)) return !1;
    const f = o.currentTime - a.currentTime, p = Math.abs(f), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, N = this.lastFix.get(o);
    if (!Op({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: N === void 0 ? 1 / 0 : d - N
    }, c)) return !1;
    const L = !a.paused;
    !c && L && N !== void 0 && (this.latency = Math.min(Fp, Math.max(0, this.latency - Dp * f)), Lo = this.latency);
    let v = a.currentTime + (L ? this.latency : 0);
    Number.isFinite(o.duration) && (v = Math.min(v, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = v;
    } catch {
      return !1;
    }
    return L ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function Vp(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function Kp(s = Vp(), a = () => Lf()) {
  return s ? "webaudio" : a() ? "element" : "webaudio";
}
function Up(s = globalThis.navigator) {
  const a = s?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const Hp = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class Gp {
  constructor(a = Hp, o = globalThis.navigator) {
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
        Up(this.nav);
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
      const o = this.context.createMediaElementSource(a), c = this.context.createGain();
      return o.connect(c), c.connect(this.context.destination), this.gains.set(a, c), !0;
    } catch (o) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(o), !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, o) {
    const c = this.gains.get(a);
    c && (c.gain.value = o);
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
const Wp = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Qp = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Bd(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function $f() {
  const s = _.useRef(null), a = _.useRef(null), [o, c] = _.useState(!1), [d, f] = _.useState(!1), [p, m] = _.useState(!1), [N, L] = _.useState(0), [v, j] = _.useState(0), [M, $] = _.useState(""), T = _.useRef(new Rf());
  function E(V = !1) {
    const H = s.current, D = a.current;
    !H || !D || !Number.isFinite(H.currentTime) || T.current.align(H, D, V);
  }
  function S() {
    s.current?.pause(), a.current?.pause(), c(!1);
  }
  async function I() {
    const V = s.current, H = a.current;
    if (!(!V || !H)) {
      if (o) {
        S();
        return;
      }
      $(""), H.muted = !d, H.volume = 0.55, V.volume = 0.75, E(!0);
      try {
        await Promise.all(d ? [V.play(), H.play()] : [V.play()]), E(), c(!0);
      } catch {
        S(), $("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function C(V) {
    const H = s.current, D = a.current;
    if (!(!H || !D || !Number.isFinite(V))) {
      H.currentTime = V;
      try {
        D.currentTime = V;
      } catch {
      }
      L(V);
    }
  }
  function U(V) {
    const H = s.current, D = a.current;
    if (f(V), !!D) {
      if (D.muted = !V, !V) {
        D.pause();
        return;
      }
      !H || !o || (E(!0), D.play().catch(() => $("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return _.useEffect(() => {
    const V = () => {
      document.hidden && (s.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", V), () => {
      document.removeEventListener("visibilitychange", V), s.current?.pause(), a.current?.pause();
    };
  }, []), /* @__PURE__ */ r.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ r.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ r.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: d,
              onChange: (V) => U(V.target.checked)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (V) => m(V.target.checked)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ r.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        I();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(N, v > 0 ? v : 1),
          disabled: !v,
          onChange: (V) => C(Number(V.target.value))
        }
      ),
      /* @__PURE__ */ r.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Bd(N),
        " / ",
        Bd(v)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Wp,
        loop: p,
        onLoadedMetadata: (V) => j(V.currentTarget.duration),
        onTimeUpdate: (V) => {
          L(V.currentTarget.currentTime), V.currentTarget.paused || E();
        },
        onEnded: () => {
          s.current?.loop || (a.current?.pause(), c(!1), L(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => $("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: Qp,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const V = s.current, H = a.current;
          V?.duration && H?.duration && Math.abs(V.duration - H.duration) > 0.15 && $("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => $("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    M && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: M }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Yp = 4e3;
class Vd extends Error {
  name = "MicSetupError";
}
async function Jp(s, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Vd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
    audio: {
      deviceId: s ? { exact: s } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, c = await navigator.mediaDevices.getUserMedia(o);
  let d;
  try {
    if (d = a ? a() : new AudioContext(), d.state !== "running") {
      let L;
      await Promise.race([
        d.resume(),
        new Promise((v, j) => {
          L = setTimeout(() => j(new Vd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Yp);
        })
      ]).finally(() => clearTimeout(L));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], N = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: N.deviceId ?? "",
      channelCount: N.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((L) => L.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), f;
  }
}
async function Xp() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var yo, Kd;
function Zp() {
  if (Kd) return yo;
  Kd = 1;
  function s(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const L = Math.PI * c / this.size;
      o[c] = Math.cos(L), o[c + 1] = -Math.sin(L);
    }
    this.table = o;
    for (var d = 0, f = 1; this.size > f; f <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var N = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << N;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return yo = s, s.prototype.fromComplexArray = function(o, c) {
    for (var d = c || new Array(o.length >>> 1), f = 0; f < o.length; f += 2)
      d[f >>> 1] = o[f];
    return d;
  }, s.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var c = 0; c < o.length; c++)
      o[c] = 0;
    return o;
  }, s.prototype.toComplexArray = function(o, c) {
    for (var d = c || this.createComplexArray(), f = 0; f < d.length; f += 2)
      d[f] = o[f >>> 1], d[f + 1] = 0;
    return d;
  }, s.prototype.completeSpectrum = function(o) {
    for (var c = this._csize, d = c >>> 1, f = 2; f < d; f += 2)
      o[c - f] = o[f], o[c - f + 1] = -o[f + 1];
  }, s.prototype.transform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, s.prototype.realTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, s.prototype.inverseTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 1, this._transform4();
    for (var d = 0; d < o.length; d++)
      o[d] /= this.size;
    this._out = null, this._data = null;
  }, s.prototype._transform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, N, L = this._bitrev;
    if (p === 4)
      for (m = 0, N = 0; m < c; m += p, N++) {
        const S = L[N];
        this._singleTransform2(m, S, f);
      }
    else
      for (m = 0, N = 0; m < c; m += p, N++) {
        const S = L[N];
        this._singleTransform4(m, S, f);
      }
    var v = this._inv ? -1 : 1, j = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var M = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var $ = m + M, T = m, E = 0; T < $; T += 2, E += f) {
          const S = T, I = S + M, C = I + M, U = C + M, V = o[S], H = o[S + 1], D = o[I], b = o[I + 1], F = o[C], re = o[C + 1], Z = o[U], ge = o[U + 1], we = V, J = H, oe = j[E], Ee = v * j[E + 1], be = D * oe - b * Ee, he = D * Ee + b * oe, P = j[2 * E], G = v * j[2 * E + 1], W = F * P - re * G, x = F * G + re * P, y = j[3 * E], te = v * j[3 * E + 1], ue = Z * y - ge * te, ye = Z * te + ge * y, Q = we + W, K = J + x, ne = we - W, q = J - x, me = be + ue, z = he + ye, ie = v * (be - ue), ae = v * (he - ye), ce = Q + me, Se = K + z, xe = Q - me, Le = K - z, He = ne + ae, Ye = q - ie, We = ne - ae, Xe = q + ie;
          o[S] = ce, o[S + 1] = Se, o[I] = He, o[I + 1] = Ye, o[C] = xe, o[C + 1] = Le, o[U] = We, o[U + 1] = Xe;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], N = p[c + 1], L = p[c + d], v = p[c + d + 1], j = m + L, M = N + v, $ = m - L, T = N - v;
    f[o] = j, f[o + 1] = M, f[o + 2] = $, f[o + 3] = T;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, N = d * 2, L = d * 3, v = p[c], j = p[c + 1], M = p[c + d], $ = p[c + d + 1], T = p[c + N], E = p[c + N + 1], S = p[c + L], I = p[c + L + 1], C = v + T, U = j + E, V = v - T, H = j - E, D = M + S, b = $ + I, F = m * (M - S), re = m * ($ - I), Z = C + D, ge = U + b, we = V + re, J = H - F, oe = C - D, Ee = U - b, be = V - re, he = H + F;
    f[o] = Z, f[o + 1] = ge, f[o + 2] = we, f[o + 3] = J, f[o + 4] = oe, f[o + 5] = Ee, f[o + 6] = be, f[o + 7] = he;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, N, L = this._bitrev;
    if (p === 4)
      for (m = 0, N = 0; m < c; m += p, N++) {
        const Me = L[N];
        this._singleRealTransform2(m, Me >>> 1, f >>> 1);
      }
    else
      for (m = 0, N = 0; m < c; m += p, N++) {
        const Me = L[N];
        this._singleRealTransform4(m, Me >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, j = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var M = p >>> 1, $ = M >>> 1, T = $ >>> 1;
      for (m = 0; m < c; m += p)
        for (var E = 0, S = 0; E <= T; E += 2, S += f) {
          var I = m + E, C = I + $, U = C + $, V = U + $, H = o[I], D = o[I + 1], b = o[C], F = o[C + 1], re = o[U], Z = o[U + 1], ge = o[V], we = o[V + 1], J = H, oe = D, Ee = j[S], be = v * j[S + 1], he = b * Ee - F * be, P = b * be + F * Ee, G = j[2 * S], W = v * j[2 * S + 1], x = re * G - Z * W, y = re * W + Z * G, te = j[3 * S], ue = v * j[3 * S + 1], ye = ge * te - we * ue, Q = ge * ue + we * te, K = J + x, ne = oe + y, q = J - x, me = oe - y, z = he + ye, ie = P + Q, ae = v * (he - ye), ce = v * (P - Q), Se = K + z, xe = ne + ie, Le = q + ce, He = me - ae;
          if (o[I] = Se, o[I + 1] = xe, o[C] = Le, o[C + 1] = He, E === 0) {
            var Ye = K - z, We = ne - ie;
            o[U] = Ye, o[U + 1] = We;
            continue;
          }
          if (E !== T) {
            var Xe = q, ut = -me, Je = K, Ve = -ne, it = -v * ce, Bt = -v * ae, Yt = -v * ie, Nt = -v * z, ln = Xe + it, Jt = ut + Bt, Xt = Je + Nt, _t = Ve - Yt, Ne = m + $ - E, Vt = m + M - E;
            o[Ne] = ln, o[Ne + 1] = Jt, o[Vt] = Xt, o[Vt + 1] = _t;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], N = p[c + d], L = m + N, v = m - N;
    f[o] = L, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, N = d * 2, L = d * 3, v = p[c], j = p[c + d], M = p[c + N], $ = p[c + L], T = v + M, E = v - M, S = j + $, I = m * (j - $), C = T + S, U = E, V = -I, H = T - S, D = E, b = I;
    f[o] = C, f[o + 1] = 0, f[o + 2] = U, f[o + 3] = V, f[o + 4] = H, f[o + 5] = 0, f[o + 6] = D, f[o + 7] = b;
  }, yo;
}
var qp = Zp();
const ev = /* @__PURE__ */ zm(qp);
class Yr {
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
    return new Yr(
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
    return new Yr(
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
    return new Yr(a, (o) => Array(o));
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
    this._inputLength = a, this._fft = new ev(iv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
    for (let d = 0; d < a.length; d++)
      this._paddedInputBuffer[d] = a[d];
    for (let d = a.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let d = 0; d < c.length; d += 2)
      c[d] = c[d] * c[d] + c[d + 1] * c[d + 1], c[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < a.length; d++)
      o[d] = this._inverseBuffer[2 * d];
    return o;
  }
}
function tv(s) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, c = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && s[f] > c && (c = s[f], d = f);
  return a;
}
function nv(s, a) {
  const [o, c, d] = [s - 1, s, s + 1], [f, p, m] = [a[o], a[c], a[d]], N = f / 2 - p + m / 2, L = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, j = -L / (2 * N), M = N * j * j + L * j + v;
  return [j, M];
}
class Jr {
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
    return new Jr(a, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Jr(a, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Jr(a, (o) => Array(o));
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
    this._autocorrelator = new Yr(a, o), this._nsdfBuffer = o(a);
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
    const c = tv(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((N) => this._nsdfBuffer[N])), f = c.find(
      (N) => this._nsdfBuffer[N] >= this._clarityThreshold * d
    ), [p, m] = nv(
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
    for (let c = 0; c < a.length; c++)
      o += a[c] ** 2;
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
    let o = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && o > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / o, o -= a[c] ** 2 + a[a.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function iv(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function rv(s) {
  const a = s * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const sv = 0.05, av = 1.5;
class lv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = rv(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * sv))), this.detector = Jr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new ov();
  onset = new uv();
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
      minRms: c = 0.01,
      stabilityMs: d = 240,
      centsTolerance: f = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: N,
      onStableNote: L
    } = this.opts, v = this.analysers.map((b, F) => (b.getFloatTimeDomainData(this.buffers[F]), Ud(this.buffers[F], this.buffers[F].length - this.shortLength))), j = v.indexOf(Math.max(...v));
    j !== this.channel && v[j] > (v[this.channel] ?? 0) * av && (this.channel = j);
    const M = this.buffers[this.channel], $ = v[this.channel], T = cv(M, M.length - this.shortLength), E = { rms: $, peak: T, channel: this.channel, levels: v }, S = $ < c, I = this.onset.feed($, a, c);
    if (S && Ud(M, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), N?.({ ...E, status: "silent" });
      return;
    }
    const [C, U] = this.detector.findPitch(M, this.mic.context.sampleRate);
    if (!isFinite(C) || U < o) {
      this.gate.feed(null, a, d, S, I), N?.({ ...E, status: S ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (C < p || C > m) {
      this.gate.feed(null, a, d, S, I), N?.({ ...E, status: "out-of-range", frequency: C, clarity: U });
      return;
    }
    const { midi: V, cents: H } = Zm(C);
    if (Math.abs(H) > f) {
      this.gate.feed(null, a, d, S, I), N?.({ ...E, status: "off-pitch", frequency: C, clarity: U, midi: V, cents: H });
      return;
    }
    N?.({ ...E, status: "pitch", frequency: C, clarity: U, midi: V, cents: H });
    const D = this.gate.feed(V, a, d, S, I);
    D !== null && L?.({ midi: V, frequency: C, cents: H, clarity: U, timestamp: a, heldMs: D.heldMs });
  }
}
class ov {
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
  feed(a, o, c, d, f) {
    if (d ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, f && (this.armed = !0, this.current = null)), a === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: o, seen: o }), this.current.seen = o;
    const p = o - this.current.since;
    return p < c ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class uv {
  constructor(a = 2, o = 300, c = 150) {
    this.ratio = a, this.windowMs = o, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(a, o, c) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: a }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((f) => f.rms)) : a;
    return this.history.push({ time: o, rms: a }), a < c * 1.5 || a < d * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: a }], !0);
  }
}
function Ud(s, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < s.length; d++) c += s[d] * s[d];
  return Math.sqrt(c / Math.max(1, s.length - o));
}
function cv(s, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < s.length; c++) {
    const d = Math.abs(s[c]);
    d > o && (o = d);
  }
  return o;
}
const or = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let tr;
function Of() {
  return (!tr || tr.state === "closed") && (tr = new AudioContext()), tr;
}
function dv() {
  const s = tr;
  tr = void 0, s?.close().catch(() => {
  });
}
const Ff = (s) => s instanceof Error ? s.name : "";
function fv(s) {
  const a = Ff(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class hv {
  constructor(a = (o) => Jp(o, Of)) {
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
  async start(a, o, c) {
    this.stop();
    const d = this.generation;
    let f, p = !1;
    try {
      f = await this.opener(a || void 0);
    } catch (m) {
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Ff(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new lv(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, N = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((L) => L.addEventListener("ended", m, { once: !0, signal: N.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: N.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
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
function If(s, a) {
  return s !== "on" ? s : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Hd = (s) => Math.max(0, Math.min(1, (or(s) + 60) / 60));
function mv(s) {
  const a = [...s].sort((c, d) => c - d), o = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function go(s) {
  const a = () => s.state === "running";
  if (a()) return;
  let o;
  try {
    await Promise.race([
      s.resume(),
      new Promise((c, d) => {
        o = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!a()) throw new Error("reference-audio-not-running");
}
function ba(s) {
  const a = s instanceof Error ? s.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class rs {
  constructor(a = Of) {
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
    const c = this.token, d = this.provide();
    if (await go(d), c !== this.token) return !1;
    const f = d.createGain();
    f.connect(d.destination), this.master = f;
    const p = Array.from({ length: 12 }, (L, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((L, v) => {
      const j = d.createOscillator(), M = d.createGain(), $ = d.currentTime + 0.05 + v * 0.8;
      m ? j.setPeriodicWave(m) : j.type = "triangle", j.frequency.value = ko(L), M.gain.setValueAtTime(0, $), M.gain.linearRampToValueAtTime(0.22, $ + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, $ + 0.7), j.connect(M), M.connect(f), j.start($), j.stop($ + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((L) => {
      this.settle = L, this.timer = setTimeout(() => L(!0), a.length * 800 + 350);
    }) || c !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], f.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(a, o, c, d) {
    if (this.stop(), !a.length) return !1;
    const f = this.token, p = this.provide();
    if (await go(p), f !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), N = p.createGain();
    N.connect(p.destination), this.master = N;
    const L = Array.from({ length: 12 }, (T, E) => 1 / (E + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...L.map(() => 0)]),
      new Float32Array([0, ...L])
    ), j = p.currentTime + 0.05;
    let M = 0;
    return a.forEach((T, E) => {
      if (!Number.isFinite(T.beat) || T.beat < 0 || !Number.isFinite(T.duration) || T.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const S = j + T.beat * m, I = T.duration * m, C = S + Math.max(0.08, I * 0.94), U = p.createOscillator(), V = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = ko(T.midi), V.gain.setValueAtTime(0, S), V.gain.linearRampToValueAtTime(0.22, S + 0.012), V.gain.exponentialRampToValueAtTime(1e-3, C - 0.01), U.connect(V), V.connect(N), U.start(S), U.stop(C), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(E);
      }, 50 + T.beat * m * 1e3));
      const H = a[E + 1]?.beat ?? 1 / 0;
      d && H > T.beat + T.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + T.beat * m * 1e3 + I * 1e3)), M = Math.max(M, T.beat + T.duration);
    }), !await new Promise((T) => {
      this.settle = T, this.timer = setTimeout(() => T(!0), 50 + M * m * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], N.disconnect(), this.master = void 0, !0);
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
  async loop(a, o, c = 75) {
    if (this.stop(), !a.length) return !1;
    const d = this.token, f = this.provide();
    if (await go(f), d !== this.token) return !1;
    const p = f.createGain();
    p.connect(f.destination), this.master = p;
    const m = Array.from({ length: 12 }, (E, S) => 1 / (S + 1) ** 1.3), N = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let L = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (E) => {
      d === this.token && Number.isFinite(E) && (L = 60 / Math.max(40, Math.min(140, E)));
    };
    const v = 1.6;
    let j = f.currentTime + 0.05, M = 0;
    const $ = [], T = () => {
      if (d === this.token) {
        if (j < f.currentTime - 0.02) {
          const E = Math.ceil((f.currentTime - j) / L);
          j += E * L, M = (M + E) % a.length, $.length = 0;
        }
        for (; j < f.currentTime + v; ) {
          const E = a[M], S = M, I = j, C = f.createOscillator(), U = f.createGain();
          N ? C.setPeriodicWave(N) : C.type = "triangle", C.frequency.value = ko(E), U.gain.setValueAtTime(0, I), U.gain.linearRampToValueAtTime(0.22, I + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, I + L * 0.975), C.connect(U), U.connect(p), C.start(I), C.stop(I + L * 0.985), $.push({ at: I, index: S }), j += L, M = (M + 1) % a.length;
        }
        for (; $.length && $[0].at <= f.currentTime + 0.01; ) {
          const E = $.shift();
          o?.(E.index);
        }
      }
    };
    return T(), this.loopTick = setInterval(T, 25), new Promise((E) => {
      this.settle = E;
    });
  }
}
function ci(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const N = { position: d === null || f === null ? null : Oe(d, f), beat: o, duration: p };
    return o += p, N;
  });
  return { label: s, events: c, beats: o };
}
function jo(s, ...a) {
  let o = 0;
  const c = a.flatMap((d) => {
    const f = d.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += d.beats, f;
  });
  return { label: s, events: c, beats: o };
}
const Gd = ci("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), Wd = ci("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), pv = ci("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), Qd = ci("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), Yd = ci("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), vv = ci("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), Jd = ci("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), Xd = ci("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), kv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Gd, Wd],
    whole: jo("Melodia · A + B + C", Gd, Wd, pv),
    source: "https://hymnary.org/tune/wayfaring_stranger",
    note: "Sävelkulku perustuu perinteisen melodian 15-säveliseen alkumotiiviin. Rytmi on tätä harjoitusta varten itse laadittu: kyse ei ole tietyn levytyksen tai nuottisovituksen tarkasta versiosta."
  },
  nooa: {
    id: "nooa",
    title: "Ukko Nooa",
    qualifier: "Perinteinen melodia · C-jooninen",
    tempo: 84,
    tonic: 0,
    permitted: [0, 2, 4, 5, 7, 9, 11],
    fragments: [Qd, Yd],
    whole: jo("Ukko Nooa · A + B", Qd, Yd),
    bonus: vv,
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
    fragments: [Jd, Xd],
    whole: jo("Siirtymämelodia · A + B", Jd, Xd),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function yv(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const Zd = ["e", "B", "G", "D", "A", "E"];
function Wo({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = kv[s], [f, p] = _.useState(a === "fingering" ? "a" : "whole"), [m, N] = _.useState(d.tempo), [L, v] = _.useState(!1), [j, M] = _.useState(!1), [$, T] = _.useState(a !== "memory"), [E, S] = _.useState(!1), [I, C] = _.useState(null), [U, V] = _.useState(""), H = _.useRef(new rs()), D = _.useRef(0);
  function b() {
    D.current++, H.current.stop(), S(!1), C(null);
  }
  _.useEffect(() => {
    c && (c.current = b);
    const y = () => {
      document.hidden && b();
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, H.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const F = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], re = F.find((y) => y.id === f) ?? F[0], Z = re.clip, ge = yv(Z), we = I === null ? null : ge[I]?.beat ?? null, J = we === null ? null : Z.events.find((y) => y.beat === we)?.position ?? null, oe = _.useRef(null);
  Nf(oe, ".melody-playing", E && we !== null ? String(we) : "", { enabled: L && j, playback: E });
  const Ee = Z.beats / 4, be = [...new Map(Z.events.filter((y) => y.position).map((y) => [Ue(y.position), y.position])).values()], he = be.map((y) => y.fret), P = be.filter((y) => $ || J?.string === y.string && J.fret === y.fret).map((y) => ({
    ...y,
    label: Pe(y.midi),
    kind: J?.string === y.string && J.fret === y.fret ? "playing" : Be(y.midi) === d.tonic ? "answer" : "shape"
  })), G = {
    strings: [...new Set(be.map((y) => y.string))],
    min: Math.min(...he),
    max: Math.max(...he),
    fixed: "box"
  };
  async function W() {
    if (E) {
      b();
      return;
    }
    o?.();
    const y = ++D.current;
    H.current.stop(), S(!0), C(null), V("");
    try {
      await H.current.playTimed(ge, m, (te) => {
        y === D.current && C(te);
      }, () => {
        y === D.current && C(null);
      });
    } catch (te) {
      y === D.current && V(ba(te));
    } finally {
      y === D.current && (S(!1), C(null));
    }
  }
  function x(y) {
    b(), V(""), p(y);
  }
  return /* @__PURE__ */ r.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ r.jsxs("details", { onToggle: (y) => {
    const te = y.currentTarget.open;
    v(te), te || b();
  }, children: [
    /* @__PURE__ */ r.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    L && /* @__PURE__ */ r.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ r.jsx("h4", { children: d.title }),
      /* @__PURE__ */ r.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        Ee.toString().replace(".", ","),
        " tahtia ",
        a === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-instruction", children: a === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      a === "fingering" && d.bonus && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ r.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        d.title,
        " -sävelmää."
      ] }),
      a !== "memory" && /* @__PURE__ */ r.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: F.map((y) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": re.id === y.id,
          onClick: () => x(y.id),
          children: y.name
        },
        y.id
      )) }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": E, onClick: () => {
          W();
        }, children: E ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ r.jsx("select", { value: m, onChange: (y) => {
            b(), N(Number(y.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((y, te) => y - te).filter((y, te, ue) => ue.indexOf(y) === te).map((y) => /* @__PURE__ */ r.jsxs("option", { value: y, children: [
            y,
            " BPM"
          ] }, y)) })
        ] }),
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": j, onClick: () => M((y) => !y), children: j ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: E && I !== null ? `Nyt soi ${Pe(ge[I].midi)} · ${Zd[J.string]}-kieli, ${J.fret}. nauha` : E ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ r.jsx(ui, { area: G, marks: P, disabled: !0, follow: "playing", playback: E, caption: `${d.title}, ${re.name}` }),
        /* @__PURE__ */ r.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": $,
              onClick: () => T((y) => !y),
              children: $ ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      j && /* @__PURE__ */ r.jsxs("div", { ref: oe, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${re.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
            Z.events.map((y, te) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: y.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: y.beat % 4 === 0 ? `T${Math.floor(y.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: y.duration === 1 ? "♩" : `${y.duration} iskua` })
            ] }, te))
          ] }) }),
          /* @__PURE__ */ r.jsx("tbody", { children: Zd.map((y, te) => /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "row", children: y }),
            Z.events.map((ue, ye) => {
              const Q = ue.position?.string === te, K = Q && we === ue.beat;
              return /* @__PURE__ */ r.jsx(
                "td",
                {
                  className: `${ue.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${Q && Be(ue.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": Q ? `${y}-kieli, ${ue.position.fret}. nauha, ${Pe(ue.position.midi)}` : void 0,
                  children: Q ? ue.position.fret : "—"
                },
                ye
              );
            })
          ] }, te)) })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ r.jsx("p", { className: "melody-source", children: /* @__PURE__ */ r.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Ro = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [1, 2]), Df = [...new Map(Ro.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Oe(o, c);
  return [Ue(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ea = [5, 4, 3, 2, 1, 0].flatMap((s) => Df.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), $o = [
  ...Ea,
  ...Ea.slice(1, -1).reverse()
], gv = [...$o, Ea[0]], qd = new Set(
  Ro[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Oe(a, o);
    return Ue(c);
  })).filter((s) => Ro[1].positions[0].strings.flatMap((a, o) => a.map((c) => Ue(Oe(o, c)))).includes(s))
), jv = [
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
], zf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Bf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", xo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], ef = (s) => Be(s) === 9;
function tf() {
  try {
    const s = Number(localStorage.getItem(zf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function xv() {
  try {
    const s = Number(localStorage.getItem(Bf));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function Sv({ onBack: s, onPosition: a }) {
  const [o, c] = _.useState(tf), [d, f] = _.useState(tf), [p, m] = _.useState(!1), [N, L] = _.useState("roots"), [v, j] = _.useState(xv), [M, $] = _.useState(null), [T, E] = _.useState(null), [S, I] = _.useState(""), C = _.useRef(new rs()), U = _.useRef(0), V = _.useRef(null), H = T === null ? null : $o[T];
  function D() {
    V.current?.(), U.current++, C.current.stop(), $(null), E(null);
  }
  _.useEffect(() => {
    const J = () => {
      document.hidden && (U.current++, C.current.stop(), $(null), E(null));
    };
    return document.addEventListener("visibilitychange", J), () => {
      document.removeEventListener("visibilitychange", J), U.current++, C.current.stop();
    };
  }, []);
  async function b(J) {
    V.current?.();
    const oe = ++U.current;
    C.current.stop(), E(null), I(""), $(J);
    try {
      J === "transition" ? await C.current.play(jv.map((Ee) => Ee.midi)) : J === "once" ? await C.current.play(gv.map((Ee) => Ee.midi)) : await C.current.loop($o.map((Ee) => Ee.midi), (Ee) => {
        oe === U.current && E(Ee);
      }, v);
    } catch (Ee) {
      oe === U.current && I(ba(Ee));
    } finally {
      oe === U.current && ($(null), E(null));
    }
  }
  function F(J) {
    const oe = Math.max(40, Math.min(140, J));
    j(oe), C.current.setLoopTempo(oe);
    try {
      localStorage.setItem(Bf, String(oe));
    } catch {
    }
  }
  function re(J) {
    J > o || (D(), f(J), m(!1), L("roots"));
  }
  function Z() {
    D();
    const J = Math.min(4, d + 1);
    if (f(J), m(!1), L("roots"), J > o) {
      c(J);
      try {
        localStorage.setItem(zf, String(J));
      } catch {
      }
    }
  }
  const ge = (J, oe) => d < 2 || d === 2 && p && qd.has(oe) || d === 3 && (N === "all" || N === "roots" && ef(J)), we = Df.filter((J) => ge(J.midi, Ue(J))).map((J) => ({
    ...J,
    label: d < 2 || d === 2 && p || d === 3 && N === "all" ? Pe(J.midi) : "A",
    kind: d < 2 && H?.string === J.string && H?.fret === J.fret ? "playing" : ef(J.midi) ? "answer" : qd.has(Ue(J)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      D(), s();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ r.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        D(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        D(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => re(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: xo.map((J, oe) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: oe === d ? "journey-step current" : "journey-step",
        "aria-current": oe === d ? "step" : void 0,
        disabled: oe > o,
        onClick: () => re(oe),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: oe > o ? "🔒" : oe < o ? "✓" : oe + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: J.title })
        ]
      },
      J.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: xo[d].title }),
        /* @__PURE__ */ r.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: xo[d].detail }),
      d < 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        d === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ r.jsxs("p", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        d === 1 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ r.jsxs("strong", { children: [
              Ea.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ r.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ r.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ r.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        d === 2 && /* @__PURE__ */ r.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        d === 3 && /* @__PURE__ */ r.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ r.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => F(v - 5), children: "− 5" }),
          /* @__PURE__ */ r.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => F(v + 5), children: "+ 5" }),
          /* @__PURE__ */ r.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "whole",
              onClick: () => M === "whole" ? D() : void b("whole"),
              children: M === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "once",
              onClick: () => M === "once" ? D() : void b("once"),
              children: M === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "transition",
              onClick: () => M === "transition" ? D() : void b("transition"),
              children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((J) => !J), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => re(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((J) => /* @__PURE__ */ r.jsxs("label", { children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: J.value,
                  checked: N === J.value,
                  onChange: () => L(J.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: J.name })
            ] }, J.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M === "once" ? D() : void b("once"), children: M === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M === "transition" ? D() : void b("transition"), children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: M === "whole" ? H && d < 2 ? `Nyt soi ${Pe(H.midi, !1, !0)} · ${Qt[H.string]}-kieli, nauha ${H.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : M === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : M === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        S && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: S }),
        /* @__PURE__ */ r.jsx(
          ui,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: M,
            marks: we,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? N === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : N === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ r.jsx(
          Wo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: V
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ r.jsx($f, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Z, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ r.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => re(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ r.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const Xr = "musiikin-kartta:skaalapolku:v1", ga = "musiikin-kartta:skaalapolku:position-2:v1", So = "musiikin-kartta:skaalapolku:position-3:v1", ja = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ca = "musiikin-kartta:skaalapolku:active-position:v1", Vf = "musiikin-kartta:skaalapolku:tempo:v1", rr = 75, Oo = 40, Fo = 140;
function wv() {
  try {
    const s = localStorage.getItem(Vf);
    if (s === null) return rr;
    const a = Number(s);
    return Number.isInteger(a) && a >= Oo && a <= Fo && a % 5 === 0 ? a : rr;
  } catch {
    return rr;
  }
}
const wo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], nf = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Nn(s = Xr) {
  try {
    const a = Number(localStorage.getItem(s));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function No() {
  try {
    const s = localStorage.getItem(Ca);
    return s === "3" && Nn(ja) === 4 ? 3 : Nn(Xr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Nv() {
  try {
    return Nn(ga) === 4 && localStorage.getItem(Ca) === "bridge";
  } catch {
    return !1;
  }
}
function Ev({ onBack: s }) {
  const [a, o] = _.useState(No), [c, d] = _.useState(Nv), [f, p] = _.useState(() => ({
    1: Nn(Xr),
    2: Nn(ga),
    3: Nn(So)
  })), [m, N] = _.useState(() => Nn(No() === 3 ? So : No() === 2 ? ga : Xr)), L = f[a], [v, j] = _.useState(!1), [M, $] = _.useState("roots"), [T, E] = _.useState(wv), [S, I] = _.useState(null), [C, U] = _.useState(null), [V, H] = _.useState(""), D = _.useRef(new rs()), b = _.useRef(0), F = _.useRef(null);
  function re(Q) {
    const K = Math.max(Oo, Math.min(Fo, Q));
    E(K), D.current.setLoopTempo(K);
    try {
      localStorage.setItem(Vf, String(K));
    } catch {
    }
  }
  function Z() {
    F.current?.(), b.current++, D.current.stop(), I(null), U(null);
  }
  _.useEffect(() => {
    const Q = () => {
      document.hidden && (b.current++, D.current.stop(), I(null), U(null));
    };
    return document.addEventListener("visibilitychange", Q), () => {
      document.removeEventListener("visibilitychange", Q), b.current++, D.current.stop();
    };
  }, []);
  const ge = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [a])[0].positions[0], we = ge.strings.flatMap((Q, K) => Q.map((ne) => Oe(K, ne))).sort((Q, K) => Q.midi - K.midi || K.string - Q.string), J = [...we, ...we.slice(1, -1).reverse()], oe = C === null ? null : J[C], Ee = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], be = ge.start, he = ge.end, P = (Q) => Be(Q) === 9, G = (Q) => m < 2 ? !0 : m === 2 ? v && P(Q) : M === "scale" || M === "roots" && P(Q), W = we.filter((Q) => G(Q.midi)).map((Q) => ({
    ...Q,
    label: m < 2 || m === 3 && M === "scale" ? Pe(Q.midi) : "A",
    kind: m < 2 && oe?.string === Q.string && oe.fret === Q.fret ? "playing" : P(Q.midi) ? "answer" : "shape"
  }));
  async function x(Q) {
    F.current?.();
    const K = ++b.current;
    D.current.stop(), U(null), H(""), I(Q);
    try {
      Q === "phrase" ? await D.current.play(Ee) : await D.current.loop(J.map((ne) => ne.midi), (ne) => {
        K === b.current && U(ne);
      }, m === 2 ? T : rr);
    } catch (ne) {
      K === b.current && H(ba(ne));
    } finally {
      K === b.current && (I(null), U(null));
    }
  }
  function y() {
    Z();
    const Q = Math.min(4, m + 1);
    if (N(Q), j(!1), $("roots"), Q > L) {
      p((ne) => ({ ...ne, [a]: Q }));
      const K = a === 1 ? Xr : a === 2 ? ga : So;
      try {
        localStorage.setItem(K, String(Q));
      } catch {
      }
    }
  }
  function te(Q) {
    Q > L || (Z(), N(Q), j(!1), $("roots"));
  }
  function ue(Q) {
    if (!(Q === 2 && f[1] < 4) && !(Q === 3 && Nn(ja) < 4)) {
      Z(), d(!1), o(Q), N(f[Q]), j(!1), $("roots"), H("");
      try {
        localStorage.setItem(Ca, String(Q));
      } catch {
      }
    }
  }
  function ye() {
    if (!(f[2] < 4)) {
      Z(), d(!0), j(!1), H("");
      try {
        localStorage.setItem(Ca, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx(Sv, { onBack: s, onPosition: ue }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Z(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      a
    ] }),
    /* @__PURE__ */ r.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      a
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      be,
      "–",
      he,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => ue(1), children: "Positio 1" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => ue(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: ye,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: Nn(ja) < 4,
          onClick: () => ue(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: wo.map((Q, K) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: K === m ? "journey-step current" : "journey-step",
        "aria-current": K === m ? "step" : void 0,
        disabled: K > L,
        onClick: () => te(K),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: K > L ? "🔒" : K < L ? "✓" : K + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: K === 4 ? `Positio ${a} harjoiteltu` : Q.title })
        ]
      },
      Q.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : wo[m].title }),
        /* @__PURE__ */ r.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: wo[m].detail }),
      m < 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        m === 0 && /* @__PURE__ */ r.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          a === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ r.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ r.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ r.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ r.jsxs("p", { children: [
          a === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ r.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: T <= Oo,
              onClick: () => re(T - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            T,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: T >= Fo,
              onClick: () => re(T + 5),
              children: "+ 5"
            }
          ),
          T !== rr && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => re(rr),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ r.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": S === "loop",
              onClick: () => S === "loop" ? Z() : void x("loop"),
              children: S === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => S === "phrase" ? Z() : void x("phrase"), children: S === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: S === "loop" ? oe && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Pe(oe.midi, !1, !0)} · ${Qt[oe.string]}-kieli, nauha ${oe.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        V && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: V }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": v, onClick: () => j((Q) => !Q), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => te(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              nf.map((Q) => /* @__PURE__ */ r.jsxs("label", { children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: Q.value,
                    checked: M === Q.value,
                    onChange: () => $(Q.value)
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { children: Q.label })
              ] }, Q.value))
            ] }),
            a !== 1 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
              x("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: be, max: he, fixed: "box" }, marks: W, disabled: !0, follow: "playing", playback: S, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? nf.find((Q) => Q.value === M).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: be, max: he, fixed: "box" }, marks: W, disabled: !0, follow: "playing", playback: S, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ r.jsx(
          Wo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: Z,
            stopHandleRef: F
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ r.jsx($f, {}, a),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: y, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ r.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => te(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => ue(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: ye, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ue(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Nn(ja) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Cv = ["ionian", "aeolian"], nr = {
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
}, Kf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", Uf = "musiikin-kartta:moodipolku:active:v1", Tv = (s) => {
  const a = nr[s].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Mv = (s) => [...Tv(s), nr[s].positions[0]], rf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function xa(s) {
  try {
    const a = Number(localStorage.getItem(Kf(s)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function sf() {
  try {
    return localStorage.getItem(Uf) === "aeolian" && xa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function _v({ onBack: s }) {
  const [a, o] = _.useState(sf), [c, d] = _.useState(() => ({
    ionian: xa("ionian"),
    aeolian: xa("aeolian")
  })), [f, p] = _.useState(() => xa(sf())), [m, N] = _.useState(null), [L, v] = _.useState(null), [j, M] = _.useState(!1), [$, T] = _.useState("roots"), [E, S] = _.useState(""), [I, C] = _.useState(null), [U, V] = _.useState(null), H = _.useRef(new rs()), D = _.useRef(0), b = _.useRef(null), F = nr[a], re = Mv(a), Z = m === "scale" && L !== null ? re[L] : null;
  function ge() {
    b.current?.(), D.current++, H.current.stop(), N(null), v(null);
  }
  _.useEffect(() => {
    const y = () => {
      document.hidden && (D.current++, H.current.stop(), N(null), v(null));
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, H.current.stop();
    };
  }, []);
  async function we(y, te, ue = !1) {
    b.current?.();
    const ye = ++D.current;
    H.current.stop(), v(null), S(""), N(y);
    try {
      const Q = ue ? await H.current.loop(te, void 0, 75) : await H.current.play(te, (K) => {
        ye === D.current && y === "scale" && v(K);
      });
      return ye === D.current && Q;
    } catch (Q) {
      return ye === D.current && S(ba(Q)), !1;
    } finally {
      ye === D.current && (N(null), v(null));
    }
  }
  function J(y) {
    y > c[a] || (ge(), p(y), C(null), V(null), M(!1), T("roots"), S(""));
  }
  function oe() {
    ge();
    const y = Math.min(5, f + 1);
    if (p(y), C(null), V(null), M(!1), T("roots"), y > c[a]) {
      d((te) => ({ ...te, [a]: y }));
      try {
        localStorage.setItem(Kf(a), String(y));
      } catch {
      }
    }
  }
  function Ee(y) {
    if (!(y === "aeolian" && c.ionian < 5)) {
      ge(), o(y), p(c[y]), C(null), V(null), M(!1), T("roots"), S("");
      try {
        localStorage.setItem(Uf, y);
      } catch {
      }
    }
  }
  async function be() {
    ge(), V(null), C(null);
    const y = Math.random() < 0.5 ? "ionian" : "aeolian";
    await we("comparison", nr[y].phrase) && C(y);
  }
  const he = (y) => Be(y) === F.tonic, P = F.positions.filter((y) => f < 2 ? !0 : f === 2 ? j && he(y.midi) : f === 4 ? $ === "all" || $ === "roots" && he(y.midi) : !1).map((y) => ({
    ...y,
    label: f === 2 || f === 4 && $ === "roots" ? F.tonicName : Pe(y.midi),
    kind: Z?.string === y.string && Z.fret === y.fret ? "playing" : he(y.midi) ? "answer" : "shape"
  })), G = [...new Set(F.positions.map((y) => y.string))], W = Math.min(...F.positions.map((y) => y.fret)), x = Math.max(...F.positions.map((y) => y.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ge(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Cv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ r.jsxs("h2", { id: "mode-path-title", children: [
      F.title,
      " · ",
      F.alias
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: F.explanation }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: F.noteNames }),
      " · Pohjasävel ",
      F.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => Ee("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => Ee("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ r.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      rf.map((y, te) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === te ? "journey-step current" : "journey-step",
          "aria-current": f === te ? "step" : void 0,
          disabled: te > c[a],
          onClick: () => J(te),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: te > c[a] ? "🔒" : te < c[a] ? "✓" : te + 1 }),
            /* @__PURE__ */ r.jsx("span", { children: y })
          ]
        },
        y
      )),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === 5 ? "journey-step current" : "journey-step",
          disabled: c[a] < 5,
          "aria-current": f === 5 ? "step" : void 0,
          onClick: () => J(5),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ r.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : rf[f] }),
        /* @__PURE__ */ r.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          F.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          F.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ r.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        F.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      f === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ r.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
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
          I !== null && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            we("comparison", nr[I].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        I !== null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => V("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => V("aeolian"),
                children: "A"
              }
            )
          ] }),
          U !== null && /* @__PURE__ */ r.jsxs("p", { role: "status", children: [
            U === I ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            nr[I].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Soita ",
          F.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          F.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          F.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([y, te]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: y,
                checked: $ === y,
                onChange: () => T(y)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: te })
          ] }, y))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M((y) => !y), children: j ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? ge() : void we("scale", re.map((y) => y.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? ge() : void we("accompaniment", F.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && Z && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Pe(Z.midi, !1, !0),
        " · ",
        Qt[Z.string],
        "-kieli, nauha ",
        Z.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ r.jsx(
        ui,
        {
          area: { strings: G, min: W, max: x, fixed: "box" },
          marks: P,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: F.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ r.jsx(
        Wo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: ge,
          stopHandleRef: b
        },
        `nooa:${f}`
      ),
      E && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: E }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: oe, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          F.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ r.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => J(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => Ee("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ r.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function bv({ onBack: s }) {
  const [a, o] = _.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ r.jsx(Ev, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ r.jsx(_v, { onBack: () => o(null) }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ r.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ r.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ r.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ r.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ r.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ r.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const er = [0, 2, 4, 5, 7, 9, 11], Av = 1200, va = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Pv({ onBack: s }) {
  const [a, o] = _.useState(0), [c, d] = _.useState([]), [f, p] = _.useState(!1), [m, N] = _.useState(""), [L, v] = _.useState(0), [j, M] = _.useState(!1), $ = a >= er.length, T = er[Math.min(a, er.length - 1)], E = ur(va.strings, va.min, va.max).filter((b) => Be(b.midi) === T), S = E.filter((b) => !c.includes(Ue(b))), I = S.length === 0 && !$, C = !I && f ? S[0] : void 0;
  _.useEffect(() => {
    if (!j || !I) return;
    const b = window.setTimeout(() => {
      o((F) => F + 1), d([]), p(!1), N("");
    }, Av);
    return () => window.clearTimeout(b);
  }, [j, I]);
  const U = [
    ...E.filter((b) => c.includes(Ue(b))).map((b) => ({ ...b, kind: "answer", label: Pe(b.midi) })),
    ...C ? [{ ...C, kind: "anchor", label: "?" }] : []
  ];
  function V(b) {
    if ($ || I) return;
    const F = Ue(b);
    if (Be(b.midi) !== T) {
      v((ge) => ge + 1), N(`Valitsit sävelen ${Pe(b.midi)}. Etsi ${Pe(T)}.`);
      return;
    }
    if (c.includes(F)) {
      N("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const re = [...c, F];
    d(re), p(!1);
    const Z = E.length - re.length;
    N(Z ? `Oikein! ${Pe(T)} löytyi ${Qt[b.string]}-kieleltä (${Ti(b.fret)}). Vielä ${Z}.` : `Löysit kaikki ${E.length} ${Pe(T)}-säveltä tällä alueella.`);
  }
  function H() {
    I && (o((b) => b + 1), d([]), p(!1), N(""));
  }
  function D() {
    o(0), d([]), p(!1), N(""), v(0);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !$ && /* @__PURE__ */ r.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          checked: j,
          onChange: (b) => M(b.target.checked)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: $ ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        L ? `Vääriä valintoja yhteensä ${L}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: D, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          "Etsi kaikki ",
          Pe(T),
          "-sävelet"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          er.length
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Pe(T),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        E.length
      ] }),
      /* @__PURE__ */ r.jsx(
        ui,
        {
          area: va,
          marks: U,
          onAnswer: V,
          disabled: I,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: I ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        !I && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((b) => !b),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        I && (j ? /* @__PURE__ */ r.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === er.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: H, children: a === er.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const Lv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Eo = ["C", "G", "D", "Em"], af = ["C", "G", "D", "Em", "Am", "E", "A"], Rv = { min: 0, max: 3, fixed: "" };
function lf(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function $v({ onBack: s }) {
  const [a, o] = _.useState(4), [c, d] = _.useState(() => lf(Eo)), [f, p] = _.useState(0), [m, N] = _.useState(null), [L, v] = _.useState([]), [j, M] = _.useState(0), $ = f >= c.length, T = Lv[c[Math.min(f, c.length - 1)]], E = a === 4 ? Eo : af, S = T.frets.flatMap((b, F) => b === null ? [] : [F]), I = T.frets.flatMap((b, F) => b === null ? [F] : []), C = { ...Rv, strings: S }, U = T.frets.flatMap((b, F) => b === null ? [] : [{
    ...Oe(F, b),
    kind: b === 0 ? "anchor" : "shape",
    label: b === 0 ? "○" : "●"
  }]);
  function V(b = a) {
    o(b), d(lf(b === 4 ? Eo : af)), p(0), N(null), v([]), M(0);
  }
  function H(b) {
    m || $ || L.includes(b) || (b === T.name ? N(b) : (v((F) => [...F, b]), M((F) => F + 1)));
  }
  function D() {
    m && (p((b) => b + 1), N(null), v([]));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ r.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 4,
            onChange: () => V(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 7,
            onChange: () => V(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: $ ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        j ? `Vääriä valintoja yhteensä ${j}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => V(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Sointu ",
          f + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ r.jsx(
        ui,
        {
          area: C,
          marks: U,
          mutedStrings: I,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: E.map((b) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === b ? "right" : L.includes(b) ? "wrong" : "",
          disabled: !!m || L.includes(b),
          "aria-pressed": m === b,
          onClick: () => H(b),
          children: b
        },
        b
      )) }),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: m ? "feedback good" : L.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${T.name}-sointu.` : L.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: D, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ve = (s, a) => ({ first: s, ...a ? { second: a } : {} }), sr = () => [
  ve("Gm", "F"),
  ve("Gm"),
  ve("B♭", "F"),
  ve("Gm"),
  ve("Gm", "F"),
  ve("Gm"),
  ve("E♭", "F"),
  ve("Gm")
], ar = () => [
  ve("B♭", "F"),
  ve("Gm", "Dm"),
  ve("E♭", "F"),
  ve("Gm", "Dm")
], lr = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Hf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Ov = [
  { id: "intro", title: "Intro", start: 0, bars: [ve("Gm", "F"), ve("Gm"), ve("B♭", "F"), ve("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: sr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ar(), ve("E♭"), { ...ve("E♭"), passingBass: "F" }],
    lyrics: lr,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ve("Gm", "F"), ve("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: sr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ar(), ve("E♭"), ve("F")],
    lyrics: lr
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ve("Gm"), ve("Dm"), ve("F"), ve("C"), ve("Gm"), ve("Dm"), ve("E♭"), ve("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: sr(),
    lyrics: Hf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ar(), ve("E♭", "F"), ve("Gm")],
    lyrics: lr
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ve("E♭", "F"),
      { ...ve("Gm"), possibleChord: "Dm" },
      ve("E♭", "F"),
      ve("Gm", "F"),
      { ...ve("Gm"), possibleChord: "Dm" },
      ve("Gm", "F"),
      ve("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Fv = [
  { id: "intro", title: "Intro", start: 0, bars: [ve("Gm", "F"), ve("Gm"), ve("B♭", "F"), ve("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: sr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ar(), ve("E♭"), ve("E♭")],
    lyrics: lr
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: sr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ar(), ve("E♭"), ve("F")],
    lyrics: lr
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ve("Gm"), ve("Dm"), ve("F"), ve("C"), ve("Gm"), ve("Dm"), ve("E♭"), ve("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: sr(),
    lyrics: Hf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ar(), ve("B♭", "F"), ve("Gm"), ve("E♭", "F"), ve("Gm")],
    lyrics: lr
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ve("E♭", "F"), ve("Gm", "F"), ve("E♭", "F"), ve("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], cr = {
  acoustic: Ov,
  normal: Fv
}, Iv = "normal", Io = "yksi-sointu-kaksi-askelta", Qo = {
  acoustic: Io + "-akustinen",
  normal: Io + "-normaali"
}, Gf = (s) => s === Io || Object.values(Qo).includes(s ?? "");
function Dv(s) {
  const a = Object.entries(Qo).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const zv = (s) => Qo[s], of = (s) => {
  const a = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Yo(s, a = "acoustic") {
  const o = cr[a], c = o[s], d = o[s + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Wf(s, a = "acoustic") {
  const o = cr[a], c = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let j = 1; j < o.length && !(c < o[j].start); j++)
    d = j;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ns(d, p + 1, a); )
    p++;
  const m = ns(d, p, a), N = Yo(d, a) / 4;
  let L = 1;
  for (; L < 4 && c >= m + L * N; ) L++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: L,
    chord: v.second && L >= 3 ? v.second : v.first
  };
}
function ns(s, a, o = "acoustic") {
  return cr[o][s].start + Yo(s, o) * a;
}
function Bv(s) {
  return cr[s].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = ns(o, d, s), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = Yo(o, s) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function Vv(s, a = "acoustic", o = !1) {
  const c = cr[a], d = Wf(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = Bv(a), N = m.findIndex(($) => $.sectionIndex === d.sectionIndex && $.barIndex === d.barIndex && $.part === p), v = [
    ...m.slice(N + 1).map(($) => ({ ...$, wrapped: !1 })),
    ...o ? m.slice(0, N + 1).map(($) => ({ ...$, wrapped: !0 })) : []
  ].find(($) => $.chord !== d.chord) ?? null;
  let j = null;
  const M = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!M || o)) {
    const $ = M ? 0 : d.sectionIndex + 1, T = c[$], E = T.bars[0].first;
    j = {
      section: T,
      sectionIndex: $,
      firstChord: E,
      wrapped: M,
      continues: E === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: j };
}
function Kv(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, N) => m + o(N), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const N = Math.abs(c - 2 * p);
    (N < f || N === f && p >= c - p) && (d = m, f = N), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Do = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Qf = "musiikin-kartta:kappale-sointuvihjeet:v1", Sa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, uf = {
  showChords: !0,
  level: 0,
  fadeOrder: Sa
};
function ka(s, a) {
  return !a.showChords || a.level >= a.fadeOrder[s];
}
function cf(s) {
  if (!s) return { ...uf, fadeOrder: { ...Sa } };
  try {
    const a = JSON.parse(s);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...Sa }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const m of Do)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...uf, fadeOrder: { ...Sa } };
  }
}
function Uv() {
  try {
    return cf(localStorage.getItem(Qf));
  } catch {
    return cf(null);
  }
}
const Hv = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Gv(s) {
  const a = Hv.exec(s.trim());
  if (!a) return s;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const Wv = (s, a) => a === "power" ? Gv(s) : s, Qv = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Yv = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Jv({ version: s, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = _.useState(Uv), [p, m] = _.useState(null), [N, L] = _.useState(!1), [v, j] = _.useState(() => typeof matchMedia != "function" || matchMedia("(min-width: 701px)").matches), [M, $] = _.useState("full"), T = (P) => Wv(P, M), E = cr[s], S = Wf(a, s), { section: I, sectionIndex: C, barIndex: U, beat: V, chord: H } = S, D = V >= 3 && I.bars[U].second ? "second" : "first", b = (P, G, W) => `${s}:${P}:${G}:${W}`, F = (P, G) => b(I.id, P, G), re = F(U, D), Z = ka(H, d), ge = Z && p === re, we = (P, G, W) => !ka(P, d) || p === F(G, W), J = d.showChords && d.level === 0, oe = Do.filter((P) => ka(P, d)).length, Ee = d.showChords ? d.level === 0 ? "Kaikki soinnut näkyvät" : `Taso ${d.level} · piilossa ${oe}/6` : "Soinnut piilossa", { nextSection: be } = Vv(a, s, o), he = !!be && ka(be.firstChord, d);
  return _.useEffect(() => {
    m(null);
  }, [re]), _.useEffect(() => {
    try {
      localStorage.setItem(Qf, JSON.stringify(d));
    } catch {
    }
  }, [d]), /* @__PURE__ */ r.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ r.jsxs("span", { children: [
        d.showChords && d.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ r.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-section-jump",
            value: I.id,
            onChange: (P) => {
              const G = E.find((W) => W.id === P.target.value);
              G && c(G.start);
            },
            children: E.map((P) => /* @__PURE__ */ r.jsxs("option", { value: P.id, children: [
              of(P.start),
              " · ",
              P.title
            ] }, P.id))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ r.jsxs("p", { className: "song-current-chord", children: [
          Z && !ge ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ r.jsx("strong", { children: Z && !ge ? "?" : T(H) }),
          /* @__PURE__ */ r.jsxs("span", { children: [
            I.title,
            ", tahti ",
            U + 1,
            ", isku ",
            V,
            "/4"
          ] }),
          Z && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ge ? null : re),
              children: ge ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        be && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: he ? "?" : T(be.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": I.title + ": tahdit", children: I.bars.map((P, G) => {
      const W = G === U, x = W && (V < 3 || !P.second), y = W && V >= 3 && !!P.second, te = we(P.first, G, "first"), ue = P.second ? we(P.second, G, "second") : !1, ye = (te ? T(P.first) : "sointu piilossa") + (P.second ? " " + (ue ? T(P.second) : "sointu piilossa") : "") + (J && P.passingBass ? " (basson kulku " + P.passingBass + ")" : "") + (J && P.possibleChord ? " (" + T(P.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (W ? " active" : ""),
          "aria-pressed": W,
          "aria-label": "Tahti " + (G + 1) + ": " + ye + ". Siirry kohtaan " + of(ns(C, G, s)),
          onClick: () => c(ns(C, G, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              G + 1
            ] }),
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ r.jsx("strong", { className: x && te ? "now" : "", children: te ? T(P.first) : "?" }),
              P.second && /* @__PURE__ */ r.jsx("strong", { className: y && ue ? "now" : "", children: ue ? T(P.second) : "?" })
            ] }),
            J && P.passingBass && /* @__PURE__ */ r.jsxs("small", { children: [
              "Basso: (",
              P.passingBass,
              "), isku 4"
            ] }),
            J && P.possibleChord && /* @__PURE__ */ r.jsxs("small", { children: [
              "Mahdollinen (",
              T(P.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        G
      );
    }) }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-settings", open: v, children: [
      /* @__PURE__ */ r.jsxs("summary", { onClick: (P) => {
        P.preventDefault(), j((G) => !G);
      }, children: [
        "Harjoituskartan asetukset",
        /* @__PURE__ */ r.jsx("span", { className: "song-chart-settings-state", children: Ee })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
        /* @__PURE__ */ r.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: d.showChords,
              onChange: (P) => {
                f((G) => ({ ...G, showChords: P.target.checked })), m(null);
              }
            }
          ),
          "Näytä soinnut"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: N,
              onChange: (P) => L(P.target.checked)
            }
          ),
          "Näytä koko sanoitus"
        ] }),
        /* @__PURE__ */ r.jsxs("fieldset", { className: "song-chord-display", children: [
          /* @__PURE__ */ r.jsx("legend", { children: "Sointumerkinnät" }),
          [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([P, G]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "song-chord-display",
                value: P,
                checked: M === P,
                onChange: () => $(P)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: G })
          ] }, P))
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
          "Harjoitustaso",
          /* @__PURE__ */ r.jsx(
            "select",
            {
              id: "song-hint-level",
              value: d.level,
              disabled: !d.showChords,
              onChange: (P) => {
                const G = Number(P.target.value);
                f((W) => ({ ...W, level: G })), m(null);
              },
              children: Qv.map((P) => /* @__PURE__ */ r.jsx("option", { value: P.value, children: P.label }, P.value))
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: oe === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${oe}/6 sointua` })
      ] }),
      d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
        /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
        /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
        /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: Do.map((P) => /* @__PURE__ */ r.jsxs("label", { children: [
          P,
          /* @__PURE__ */ r.jsx(
            "select",
            {
              "aria-label": P + ": piilotusvaihe",
              value: d.fadeOrder[P],
              onChange: (G) => {
                const W = Number(G.target.value);
                f((x) => ({ ...x, fadeOrder: { ...x.fadeOrder, [P]: W } })), m(null);
              },
              children: Yv.map((G) => /* @__PURE__ */ r.jsx("option", { value: G.value, children: G.label }, G.value))
            }
          )
        ] }, P)) })
      ] })
    ] }),
    N ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: Kv(E).map((P, G) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: P.map((W) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: W.title }),
        W.lyrics?.map((x, y) => /* @__PURE__ */ r.jsx("p", { children: x }, y))
      ] }, W.id)) }, G)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : I.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        I.title,
        ": sanat"
      ] }),
      I.lyrics.map((P, G) => /* @__PURE__ */ r.jsx("p", { children: P }, G))
    ] }),
    J && I.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: I.note })
  ] });
}
const Ta = 7, Xv = { name: "bluesasteikko", base: Ie.SCALES.mp.base, add: [[6, "♭5"]] }, Co = [
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
    scale: Xv,
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
function Zv(s) {
  return Ie.scaleNotes(s).map(([a, o]) => Ie.noteName(Ta, a, o));
}
const Yf = (s) => s === "pentatonic" ? 5 : 7;
function qv(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= Yf(s.system)), d = Ie.fingeringBoxes(Ta, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (Ta + m) % 12), p = (m, N) => N >= 0 && N <= o && f.includes((Ie.OPEN_PITCHES[m] + N) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((N) => {
    const L = N.strings.map((j, M) => {
      if (!j.length) return j;
      const $ = j[j.length - 1];
      return p(M, $ + 1) ? [...j.slice(0, -1), $ + 1] : j;
    }), v = L.flat();
    return { ...N, strings: L, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const df = 17;
function ek({ open: s }) {
  const [a, o] = _.useState("mp"), [c, d] = _.useState({ pentatonic: [], "3nps": [] }), [f, p] = _.useState(!1), [m, N] = _.useState(!1), L = _.useRef(null), v = Co.find((S) => S.id === a) ?? Co[0], j = c[v.system], M = qv(v, j, df), $ = M.some((S) => S.positions.length > 0), T = Ie.renderBoard(Ta, v.scale, df, {
    automatic: !0,
    boxes: M,
    onlyBoxNotes: $ && f,
    label: v.title + (j.length ? ", " + j.map((S) => "boksi " + S).join(", ") : "")
  });
  _.useEffect(() => {
    const S = L.current;
    !S || !s || M.length === 1 && Ie.revealPositions(S, ".box-highlight");
  }, [T, s]);
  function E(S, I) {
    d((C) => ({ ...C, [v.system]: I ? [...C[v.system], S].sort((U, V) => U - V) : C[v.system].filter((U) => U !== S) }));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ r.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ r.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ r.jsx("select", { value: a, onChange: (S) => o(S.target.value), children: Co.map((S) => /* @__PURE__ */ r.jsx("option", { value: S.id, children: S.title }, S.id)) })
    ] }) }),
    /* @__PURE__ */ r.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ r.jsx("strong", { children: v.title }),
      /* @__PURE__ */ r.jsx("span", { children: Zv(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ r.jsx(
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
    /* @__PURE__ */ r.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (S) => {
        S.preventDefault(), N((I) => !I);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ r.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Yf(v.system) }, (S, I) => I + 1).map((S) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": S, children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            value: S,
            checked: j.includes(S),
            onChange: (I) => E(S, I.target.checked)
          }
        ),
        " Boksi ",
        S
      ] }, v.system + S)) }),
      /* @__PURE__ */ r.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: $ && f,
            disabled: !$,
            onChange: (S) => p(S.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: $ ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Jf = null;
function tk() {
  return Dv(new URLSearchParams(location.search).get("kappale")) ?? Jf ?? Iv;
}
function nk(s) {
  Jf = s;
  const a = new URL(location.href);
  Gf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", zv(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const ik = {
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
}, ff = 1e-3;
function hf(s, a) {
  try {
    s.currentTime = a;
  } catch {
  }
}
function mf(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function rk({ onBack: s }) {
  const a = _.useRef(null), o = _.useRef(null), c = _.useRef(null), d = _.useRef(0), f = _.useRef(new Rf()), p = _.useRef(null), [m, N] = _.useState(tk), L = ik[m], [v, j] = _.useState(!1), [M, $] = _.useState(!0), [T, E] = _.useState(!0), [S, I] = _.useState(!1), [C, U] = _.useState(!1), [V, H] = _.useState(!1), [D, b] = _.useState(Ap), [F] = _.useState(() => Kp()), re = _.useRef(null), [Z, ge] = _.useState(""), [we, J] = _.useState(0), [oe, Ee] = _.useState(0), [be, he] = _.useState("");
  function P(z = !1, ie) {
    const ae = a.current;
    if (ae)
      for (const ce of [o.current, c.current])
        ce && (!ie || ce === ie) && f.current.align(ae, ce, z);
  }
  function G() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, M],
      ["vocals", c.current, T]
    ];
  }
  function W(z = D, ie) {
    for (const [ae, ce, Se] of G()) {
      if (!ce) continue;
      const xe = zd(ae, z, ie?.[ae] ?? Se);
      if (F === "webaudio" && re.current?.routed(ce))
        re.current.setLevel(ce, xe);
      else
        try {
          ce.volume = zd(ae, z);
        } catch {
        }
    }
  }
  function x(z) {
    b(z), Pp(z), W(z);
  }
  function y() {
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), j(!1);
  }
  function te(z) {
    if (z !== m) {
      p.current = null, y();
      for (const ie of [a.current, o.current, c.current])
        if (ie)
          try {
            ie.currentTime = 0;
          } catch {
          }
      J(0), Ee(0), he(""), N(z), nk(z);
    }
  }
  function ue(z) {
    const ie = a.current;
    if (!ie || !Number.isFinite(z)) return;
    const ae = Math.max(0, Math.min(z, Number.isFinite(ie.duration) ? ie.duration : z));
    p.current = ae, J(ae), hf(ie, ae);
  }
  function ye(z) {
    const ie = p.current;
    if (ie === null || z !== a.current || z.seeking) return;
    const ae = Number.isFinite(z.duration) ? Math.min(ie, z.duration) : ie;
    if (ae !== ie && (p.current = ae, J(ae)), Math.abs(z.currentTime - ae) < ff) return;
    const ce = z.seekable;
    for (let Se = 0; Se < ce.length; Se++)
      if (ce.start(Se) <= ae && ae <= ce.end(Se)) {
        hf(z, ae);
        return;
      }
  }
  function Q(z) {
    if (z !== a.current) return;
    const ie = p.current;
    if (ie === null)
      J(z.currentTime);
    else if (z.readyState >= 1 && !z.seeking && Math.abs(z.currentTime - ie) < ff) {
      p.current = null, P(!0);
      return;
    }
    z.paused || P();
  }
  async function K() {
    const z = a.current, ie = o.current, ae = c.current;
    if (!z || !ie || !ae) return;
    if (v) {
      y();
      return;
    }
    he("");
    const ce = p.current ?? z.currentTime;
    if (Number.isFinite(z.duration) && ce >= z.duration - 0.05 && ue(0), ye(z), F === "webaudio") {
      const xe = re.current ??= new Gp(), Le = xe.unlock() && [z, ie, ae].map((He) => xe.route(He)).every(Boolean);
      ge(Le ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + xe.lastError);
    }
    W(), ie.muted = !M, ae.muted = !T, P(!0);
    const Se = ++d.current;
    try {
      M || ie.pause(), T || ae.pause();
      const xe = [z.play(), ...M ? [ie.play()] : [], ...T ? [ae.play()] : []];
      if (await Promise.all(xe), Se !== d.current) return;
      if (P(), j(!0), F === "webaudio" && re.current?.routed(z)) {
        const Le = re.current;
        setTimeout(() => {
          Se === d.current && Le.state !== "running" && he(`Ääni ei käynnistynyt (Web Audio: ${Le.state}). Pysäytä ja soita uudelleen.${Le.lastError ? " " + Le.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Se !== d.current) return;
      y(), he("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function ne(z, ie, ae) {
    if (!z) return;
    if (z.muted = !ie, !ie) {
      z.pause();
      return;
    }
    !a.current || !v || (P(!0, z), z.play().catch(() => he(ae + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function q(z) {
    $(z), W(D, { guitar: z }), ne(o.current, z, "Kitararaita");
  }
  function me(z) {
    E(z), W(D, { vocals: z }), ne(c.current, z, "Lauluraita");
  }
  return _.useEffect(() => {
    const z = () => {
      document.hidden && y();
    };
    return document.addEventListener("visibilitychange", z), () => {
      document.removeEventListener("visibilitychange", z), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), re.current?.close();
    };
  }, []), _.useEffect(() => {
    W();
  }, [m]), /* @__PURE__ */ r.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ r.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ r.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ r.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ r.jsxs(
        "select",
        {
          id: "song-version-select",
          value: m,
          onChange: (z) => te(z.target.value),
          children: [
            /* @__PURE__ */ r.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ r.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          L.label,
          " · ",
          L.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          K();
        }, children: v ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: oe > 0 ? oe : 1,
            step: 0.1,
            value: Math.min(we, oe > 0 ? oe : 1),
            disabled: oe <= 0,
            onChange: (z) => ue(Number(z.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          mf(we),
          " / ",
          mf(oe)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: M,
              onChange: (z) => q(z.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: T,
              onChange: (z) => me(z.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: S,
              onChange: (z) => I(z.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": F, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            D > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            D > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: D,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": D + " %",
              onChange: (z) => x(Number(z.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            D,
            " %"
          ] })
        ] })
      ] }),
      Z && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: Z }),
      /* @__PURE__ */ r.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ r.jsxs("a", { href: L.download, download: L.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ r.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ r.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          L.label,
          ", koko kappale · ",
          L.downloadSize
        ] })
      ] }),
      be && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: be }),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: a,
          src: L.backing,
          preload: "metadata",
          loop: S,
          onLoadedMetadata: (z) => {
            z.currentTarget === a.current && (Ee(z.currentTarget.duration), ye(z.currentTarget));
          },
          onProgress: (z) => ye(z.currentTarget),
          onCanPlay: (z) => ye(z.currentTarget),
          onTimeUpdate: (z) => Q(z.currentTarget),
          onEnded: (z) => {
            z.currentTarget !== a.current || z.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), j(!1), J(z.currentTarget.duration));
          },
          onPause: (z) => {
            z.currentTarget === a.current && j(!1);
          },
          onError: () => he(L.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: o,
          src: L.guitar,
          preload: "metadata",
          muted: !M,
          loop: S,
          onLoadedMetadata: () => {
            a.current?.paused && P(!0);
          },
          onError: () => he(L.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: c,
          src: L.vocals,
          preload: "metadata",
          muted: !T,
          loop: S,
          onLoadedMetadata: () => {
            a.current?.paused && P(!0);
          },
          onError: () => he(L.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-collapse", open: C, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (z) => {
        z.preventDefault(), U((ie) => !ie);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(Jv, { version: m, position: we, loop: S, onSeek: ue })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: V, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (z) => {
        z.preventDefault(), H((ie) => !ie);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(ek, { open: V })
    ] })
  ] });
}
const zo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, wa = (s, a = 1) => s.toFixed(a).replace(".", ",").replace("-", "−"), Xf = (s) => {
  const a = Math.round(s);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Bo = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function sk(s, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Bo(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function Zf({ frame: s, threshold: a }) {
  const o = s?.rms ?? 0, c = or(o), d = (s?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${wa(Math.max(-60, c), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "meter-fill", style: { width: `${Hd(o) * 100}%` } }),
        /* @__PURE__ */ r.jsx("div", { className: "meter-threshold", style: { left: `${Hd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function ak({ mic: s, frame: a, heard: o, s: c, now: d }) {
  const f = If(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Pe(p.midi, c.flats, !0)} · ${Xf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : zo[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(Zf, { frame: a, threshold: c.minRms })
  ] });
}
function lk({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: N, calibrating: L, calibration: v, onTest: j, onStop: M, onCalibrate: $ }) {
  const T = _.useId(), E = If(s.phase, a), S = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", I = s.phase === "on", C = o && d - o.at < 1500 ? o : null, U = C && (E === "pitch" || E === "untuned"), V = I && (a?.peak ?? 0) >= 0.98, H = s.phase === "error" ? [] : sk(E, f, s.info, V), D = !f.device || m.some((F) => F.deviceId === f.device), b = (F, re) => p({ ...f, [F]: re });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${T}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${T}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${E}`, "data-testid": "mic-state", "data-reading": E, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : zo[E],
      E === "pitch" && C ? ` ${Pe(C.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Bo(s.info)}.` : s.phase === "error" ? s.error : zo[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    I && /* @__PURE__ */ r.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ r.jsxs("dd", { "data-testid": "mic-device", children: [
          Bo(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ r.jsxs("dd", { children: [
          /* @__PURE__ */ r.jsx(Zf, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            wa(Math.max(-60, or(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: C ? Pe(C.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: C ? `${wa(C.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: C ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          Xf(C.cents),
          " senttiä",
          /* @__PURE__ */ r.jsx("span", { className: `cents ${C.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, C.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-clarity", children: C ? `${Math.round(C.clarity * 100)} %` : a?.clarity !== void 0 && E === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    I && c && d - c.timestamp < 4e3 && /* @__PURE__ */ r.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Pe(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    H.length > 0 && I && /* @__PURE__ */ r.jsx("ul", { className: "mic-advice", children: H.map((F) => /* @__PURE__ */ r.jsx("li", { children: F }, F)) }),
    s.phase === "error" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
      S ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: M, children: "Lopeta testi" }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: N, onClick: j, children: "Testaa mikrofoni" }),
      S && I && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: L, onClick: $, children: L ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    N && s.purpose !== "test" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", disabled: N, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${T}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${T}-device`, value: f.device, onChange: (F) => b("device", F.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((F, re) => /* @__PURE__ */ r.jsx("option", { value: F.deviceId, children: F.label || `Äänitulo ${re + 1}` }, F.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${T}-rms`, children: [
              "Äänikynnys · ",
              wa(or(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${T}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (F) => b("minRms", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${T}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${T}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (F) => b("clarity", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${T}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${T}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (F) => b("stability", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${T}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${T}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (F) => b("cents", Number(F.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          m.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const ok = (s) => s.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, pf = (s, a) => ok(s).find(([o]) => o === a)?.[1], qf = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", uk = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function ck(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function dk(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Zr(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : qf(s) ? `Oikein! ${a.degree}. aste on ${Zr(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${Pe(a.reference, s.flats, !0)} → ${a.name} on ${qr[a.interval]} ${uk(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${Pe(d.midi, s.flats)} on ${yf[d.string]}: ${Ti(d.fret)}.` : `Oikein! Soitit sävelen ${Pe(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function fk(s, a, o, c, d) {
  if (o === "note") return `Ei ${Pe(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${pf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Be(d.midi) === Be(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${Qt[d.string]}-kieli. Etsi sävel ${Uo[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Pe(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (qf(s)) {
    const p = Be(d.midi - s.root), m = pf(s, p), N = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Zr(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Pe(d.midi, s.flats)}, joka ei kuulu ${N}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Pe(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function hk(s, a, o) {
  const c = Pe(o, s.flats, !0);
  return Be(o) === Be(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function eh(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => Qt[p] ? `${Qt[p]}-kieli, ${Ti(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Pe(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Pe(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && qr[c(1)] ? `${qr[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ci[p]) return null;
      const m = Ci[p].tones.find(([N]) => N === c(3))?.[1];
      return m ? `${gf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ie.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const N = Ie.scaleNotes(p).find(([L]) => L === c(3))?.[1];
        return N ? `${m}: ${N}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ci.maj.tones.find(([N]) => N === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function vf(s) {
  return Object.entries(s).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Vo = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", mk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function pk(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${ir(s.mode)}${s.hints ? ` · ${Ma[s.hints].title}` : ""} · ${a} · keskimäärin ${Vo(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function vk({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = _.useState(""), p = _.useRef(null), { recent: m, sessions: N, stats: L } = s.data, v = Mi(a), j = xf(a), M = [...new Set(m.map((C) => C.mode))].map((C) => {
    const U = m.filter((V) => V.mode === C);
    return { mode: C, ...bo(U), last: Math.max(...U.map((V) => V.at)) };
  }).sort((C, U) => U.last - C.last), $ = vf(L).filter((C) => !C.guided && C.mode === a.mode && C.input === v && C.check === j && C.stat.attempts >= 3).map((C) => ({ ...C, score: Ho(C.stat), text: eh(C.item, a.flats) })).filter((C) => C.text && C.score < 0.8).sort((C, U) => C.score - U.score).slice(0, 5), T = vf(L).reduce((C, U) => C + U.stat.attempts, 0);
  function E() {
    const C = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(C), V = document.createElement("a");
    V.href = U, V.download = "musiikin-kartta-harjoittelu.json", V.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function S(C) {
    if (C)
      try {
        const U = await C.text();
        if (T && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore(U), f("Varmuuskopio palautettu."), c();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function I() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (s.clearProgress(), f("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    T === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        T,
        " vastattua kysymystä · ",
        N.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ r.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ r.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ r.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ r.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ r.jsx("tbody", { children: M.map((C) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: ir(C.mode) }),
          /* @__PURE__ */ r.jsx("td", { children: C.count }),
          /* @__PURE__ */ r.jsx("td", { children: C.solo ? `${C.soloFirst}/${C.solo} · ${Math.round(C.soloFirst / C.solo * 100)} %` : "–" }),
          /* @__PURE__ */ r.jsx("td", { children: C.guided }),
          /* @__PURE__ */ r.jsx("td", { children: Vo(C.ms / C.count) })
        ] }, C.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi" }),
    $.length ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        ir(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ r.jsx("ul", { children: $.map((C) => /* @__PURE__ */ r.jsxs("li", { children: [
        C.text,
        " · viime aikoina ",
        Math.round(es(C.stat) * 100),
        " % heti oikein · ",
        Vo(ts(C.stat))
      ] }, C.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: T ? `Harjoituksessa ${ir(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        mk[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ r.jsx(vp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: L, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      N.length ? /* @__PURE__ */ r.jsx("ul", { children: N.slice(-10).reverse().map((C) => /* @__PURE__ */ r.jsx("li", { children: pk(C) }, C.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ r.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: E, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ r.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (C) => {
          S(C.target.files?.[0]);
        } }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !T, onClick: I, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ r.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ r.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function kk() {
  try {
    return new Ld(localStorage);
  } catch {
    return new Ld();
  }
}
const kf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), yk = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", gk = [0, 2, 4, 5, 7, 9, 11];
function jk(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function xk() {
  const [s] = _.useState(kk), [a, o] = _.useState(() => ip(location.search, s.data.settings)), [, c] = _.useReducer((B) => B + 1, 0), d = _.useRef(null), f = _.useRef(new hv()), p = _.useRef(new rs()), m = _.useRef(0), N = _.useRef(), L = _.useRef(), v = _.useRef(null), j = _.useRef(0), M = _.useRef(null), $ = _.useRef(a);
  $.current = a;
  const [T, E] = _.useState({ phase: "off", purpose: "none" }), S = _.useRef(T), I = (B) => {
    S.current = B, E(B);
  }, [C, U] = _.useState(null), [V, H] = _.useState(null), [D, b] = _.useState(null), [F, re] = _.useState(0), [Z, ge] = _.useState([]), [we, J] = _.useState(!1), [oe, Ee] = _.useState(!1), [be, he] = _.useState(""), [P, G] = _.useState("info"), [W, x] = _.useState(""), [y, te] = _.useState(0), [ue, ye] = _.useState([]), [Q, K] = _.useState([]), [ne, q] = _.useState(null), [me, z] = _.useState(!1), [ie, ae] = _.useState(""), [ce, Se] = _.useState(""), [xe, Le] = _.useState(() => {
    const B = new URLSearchParams(location.search);
    return B.has("tila") || B.has("vanha") ? "legacy" : Gf(B.get("kappale")) ? "songs" : Tp(B.get("polku"));
  });
  function He() {
    Le(null);
    const B = new URL(location.href);
    B.searchParams.has("polku") && (B.searchParams.delete("polku"), history.replaceState(history.state, "", B.pathname + B.search + B.hash));
  }
  const Ye = () => {
    Xp().then(ge).catch(() => {
    });
  };
  function We() {
    clearTimeout(L.current), v.current = null, z(!1);
  }
  function Xe() {
    U(null), H(null), b(null);
  }
  function ut() {
    f.current.stop(), We(), I({ phase: "off", purpose: "none" }), Xe();
  }
  async function Je(B) {
    if (f.current.active && S.current.phase === "on")
      return We(), I({ ...S.current, purpose: B }), f.current.rearm(), !0;
    I({ phase: "requesting", purpose: B }), Xe();
    try {
      const le = await f.current.start($.current.device, {
        ...kf($.current),
        onFrame: (De) => Yt.current.frame(De),
        onStableNote: (De) => Yt.current.stable(De)
      }, () => Yt.current.lost());
      return le ? (I({ phase: "on", purpose: B, info: le }), Ye(), !0) : !1;
    } catch (le) {
      return I({ phase: "error", purpose: "none", error: fv(le) }), !1;
    }
  }
  function Ve(B) {
    v.current?.push(B.rms);
    const le = performance.now();
    le - j.current < 66 || (j.current = le, U(B), re(le), B.midi !== void 0 && B.frequency !== void 0 && H({ midi: B.midi, frequency: B.frequency, cents: B.cents ?? 0, clarity: B.clarity ?? 0, tuned: B.status === "pitch", at: le }));
  }
  function it(B) {
    S.current.purpose === "test" ? b(B) : S.current.purpose === "round" && Ge(B.midi, "mic", void 0, B.heldMs);
  }
  function Bt() {
    const B = S.current.purpose === "round";
    We(), Xe(), I({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const le = d.current;
    B && le && ["active", "feedback", "paused"].includes(le.phase) && (_t(), Ee(!1), le.pause(), x("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Yt = _.useRef({ frame: Ve, stable: it, lost: Bt });
  Yt.current = { frame: Ve, stable: it, lost: Bt };
  function Nt(B) {
    const le = Na(B), De = le.device !== $.current.device;
    $.current = le, o(le), s.settings(le), x(""), f.current.active && (De && S.current.purpose === "test" ? (ut(), Je("test")) : f.current.setOptions(kf(le)));
  }
  function ln(B) {
    Se(""), d.current = null, Le(B);
  }
  function Jt() {
    ae(""), Je("test");
  }
  function Xt() {
    S.current.phase !== "on" || S.current.purpose !== "test" || (We(), v.current = [], z(!0), ae("Mitataan taustakohinaa kolme sekuntia. Älä soita."), L.current = setTimeout(() => {
      const B = v.current ?? [];
      if (We(), B.length < 10) {
        ae("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: le, noise: De, loud: Rt } = mv(B);
      Nt({ ...$.current, minRms: le }), ae(`Taustakohina on ${Math.round(or(De))} dB ja äänikynnys nyt ${Math.round(or(le))} dB. ${Rt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function _t() {
    m.current++, clearTimeout(N.current), p.current.stop();
  }
  function Ne(B, le) {
    if (!B.results.length) return;
    const De = bo(B.results);
    s.session({
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
    B.pause(), f.current.pause(), Ee(!0), G("info"), he("Kuuntele…"), c();
    try {
      await p.current.play(B.question.sound);
    } catch {
      le === m.current && x("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    le !== m.current || d.current !== B || (B.resume(), f.current.resume(), Ee(!1), he(""), c());
  }
  async function Me(B) {
    ye([]), K([]), q(null), x(""), te(B.hintLevel), f.current.rearm(), G("info"), he(""), c(), B.question?.sound.length && await Vt(B);
  }
  async function Ae() {
    const B = $.current, le = Mo(B);
    if (le) {
      x(le);
      return;
    }
    _t();
    const De = m.current;
    if (x(""), ae(""), Se(""), pa(B)) {
      J(!0);
      const dt = await Je("round");
      if (De !== m.current) return;
      if (J(!1), !dt) {
        x("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else S.current.phase !== "off" && ut();
    const Rt = new Cp(B, () => s.data.stats, (dt) => s.record(dt));
    try {
      Rt.start();
    } catch (dt) {
      S.current.purpose === "round" && ut(), x(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Rt, requestAnimationFrame(() => M.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Me(Rt);
  }
  function Re() {
    _t(), J(!1), ut();
  }
  function Ge(B, le, De, Rt = 0) {
    const dt = d.current, _n = dt?.question;
    if (!dt || !_n || dt.phase !== "active") return;
    const mr = dt.answer(B, le, De, Rt);
    if (mr !== "ignored") {
      if (mr === "candidate")
        q(B), G("bad"), he(hk(dt.settings, _n, B));
      else if (mr === "wrong")
        De ? ye((Bn) => [...Bn, De]) : K((Bn) => [...Bn, B]), G("bad"), he(fk(dt.settings, _n, le, B, De));
      else if (q(null), G("good"), he(dk(dt.settings, _n, le, B, De)), Ne(dt, !1), dt.settings.advance) {
        const Bn = m.current;
        N.current = setTimeout(() => {
          Bn === m.current && st();
        }, le === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function st() {
    const B = d.current;
    if (!(!B || B.phase !== "feedback")) {
      _t();
      try {
        B.next();
      } catch (le) {
        Lt(!1), x(le instanceof Error ? le.message : "Seuraavaa kysymystä ei voitu muodostaa.");
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
    _t(), Ee(!1), J(!1), (S.current.purpose === "round" || S.current.phase === "requesting") && ut();
    const le = d.current;
    le && (le.stop(), Ne(le, B)), q(null), te(0), ye([]), K([]), x(""), Se(B ? "complete" : "stopped"), G("info"), he(""), c();
  }
  function vt() {
    const B = d.current;
    if (!B || !["active", "feedback", "paused"].includes(B.phase)) return;
    _t(), Ee(!1), B.pause();
    const le = S.current.purpose === "round";
    le && ut(), G("info"), he(`Harjoitus on tauolla.${le ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function Zt() {
    const B = d.current;
    if (!B || B.phase !== "paused" || oe) return;
    _t();
    const le = m.current;
    if (x(""), pa(B.settings)) {
      J(!0);
      const De = await Je("round");
      if (le !== m.current) return;
      if (J(!1), !De) {
        x("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    B.resume(), G("info"), he(""), c(), B.phase === "active" && (f.current.rearm(), B.question?.sound.length && await Vt(B));
  }
  function En(B) {
    const le = d.current;
    !le || le.phase !== "active" || (le.useHint(B), te(B), c());
  }
  const vn = _.useRef({ hidden: () => {
  }, restored: () => {
  } });
  vn.current = {
    hidden: () => {
      const B = d.current;
      B && ["active", "feedback"].includes(B.phase) || oe ? vt() : S.current.phase !== "off" && S.current.phase !== "error" && (_t(), J(!1), ut());
    },
    restored: () => {
      J(!1), Ee(!1), I({ phase: "off", purpose: "none" }), Xe(), c();
    }
  }, _.useEffect(() => {
    Ye();
    const B = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", B);
    const le = () => {
      m.current++, clearTimeout(N.current), clearTimeout(L.current), f.current.stop(), p.current.stop(), dv(), d.current?.pause();
    }, De = () => {
      document.hidden && vn.current.hidden();
    }, Rt = (dt) => {
      dt.persisted && vn.current.restored();
    };
    return document.addEventListener("visibilitychange", De), window.addEventListener("pagehide", le), window.addEventListener("pageshow", Rt), () => {
      le(), navigator.mediaDevices?.removeEventListener?.("devicechange", B), document.removeEventListener("visibilitychange", De), window.removeEventListener("pagehide", le), window.removeEventListener("pageshow", Rt);
    };
  }, []);
  const kn = _.useRef(null), ss = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${oe}`;
  _.useEffect(() => {
    const B = d.current, le = M.current, De = document.activeElement;
    !B || !le || !(De === document.body || le.contains(De)) || (B.phase === "feedback" ? kn.current?.focus({ preventScroll: !0 }) : B.phase === "active" && !oe && (De === document.body || De === kn.current) && le.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [ss]);
  const Fe = d.current, et = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), Ze = et ? Fe.settings : a, ct = et ? Fe.question : void 0, Kt = !!ct && !!Fe?.answered, qt = et && Fe.phase === "paused" && !oe && !Kt, bi = et && Fe.phase === "active" && !oe, Cn = et ? null : Mo(a), Dn = et || we, di = _i(Ze), dr = yp(Ze), fi = ct && !Kt ? y : 0, fr = ct ? Ep(Ze, ct, Kt ? 2 : fi) : { marks: [], text: "" }, as = [...new Map([...fr.marks, ...Kt ? [] : ue.map((B) => ({ ...B, label: Pe(B.midi, Ze.flats), kind: "wrong" }))].map((B) => [Ue(B), B])).values()], Tn = et && pa(Ze), ls = !!ct && !qt && (ct.choices === "position" || as.length > 0), jt = Fe ? bo(Fe.results) : null, Aa = !Fe || Ze.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hr = Fe && !et ? Fe.results.filter((B) => B.errors > 0 || B.hint) : [], [os, us] = jk(Ze), Mn = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ r.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ r.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), zn = s.data.notice === "hints-default" && /* @__PURE__ */ r.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ r.jsxs("p", { children: [
      /* @__PURE__ */ r.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ r.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ r.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ r.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
      s.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !et && xe === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(_p, { onSelect: ln })
  ] }) : !et && xe === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(bv, { onBack: He })
  ] }) : !et && xe === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(Pv, { onBack: He })
  ] }) : !et && xe === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx($v, { onBack: He })
  ] }) : !et && xe === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(rk, { onBack: He })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: os, children: [
      "Lue tämän harjoituksen teoria: ",
      us,
      " →"
    ] }) }),
    xe !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && Lt(), He();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: xe === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: xe === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: ir(Ze.mode) }),
      " · ",
      Fd(Ze)
    ] }) : xe === "legacy" ? /* @__PURE__ */ r.jsx(Id, { s: a, change: Nt, locked: Dn, problem: Cn }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Id, { s: a, change: Nt, locked: Dn, problem: Cn })
    ] }),
    !et && (xe === "legacy" || pa(a)) && /* @__PURE__ */ r.jsx(
      lk,
      {
        mic: T,
        frame: C,
        heard: V,
        accepted: D,
        now: F,
        s: a,
        change: Nt,
        devices: Z,
        locked: we,
        calibrating: me,
        calibration: ie,
        onTest: Jt,
        onStop: ut,
        onCalibrate: Xt
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: M, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: ir(Ze.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${Ma[Ze.hints].title}${Aa}${Fe.phase === "paused" && !oe ? " · tauolla" : ""}` : ce === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        Fe && Fe.results.length > 0 && jt ? /* @__PURE__ */ r.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ r.jsx("h3", { children: ce === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ r.jsxs("dl", { children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-solo", children: jt.solo ? `${jt.soloFirst} / ${jt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-guided", children: jt.guided })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ r.jsx("dd", { children: yk(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          hr.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(hr.map((B) => eh(B.item, a.flats)).filter(Boolean))].slice(0, 6).map((B) => /* @__PURE__ */ r.jsx("li", { children: B }, B)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: Fd(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: we ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!Cn, onClick: () => {
          Ae();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ct && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: qt ? "Harjoitus on tauolla." : ct.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: qt ? "Kysymys palaa näkyviin, kun jatkat." : oe ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : ck(Ze, ct) }),
        Fe.hintLevel > 0 && !Kt && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ze.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Tn && /* @__PURE__ */ r.jsx(ak, { mic: T, frame: C, heard: V, s: Ze, now: F }),
        ct.choices === "note" && !qt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ze.accidentals ? Array.from({ length: 12 }, (B, le) => le) : gk).map((B) => /* @__PURE__ */ r.jsx("button", { type: "button", className: Q.includes(B) ? "wrong" : Kt && B === ct.midi % 12 ? "right" : "", disabled: !bi || Q.includes(B), onClick: () => Ge(B, "note"), children: Pe(B, Ze.flats) }, B)) }),
        ct.choices === "degree" && !qt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ze.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[Ze.scale]) : Ci[Ze.chord].tones).map(([B, le]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: Q.includes(B) ? "wrong" : Kt && B === ct.interval ? "right" : "", disabled: !bi || Q.includes(B), onClick: () => Ge(B, "degree"), children: le }, B)) }),
        ls && /* @__PURE__ */ r.jsx(
          ui,
          {
            area: dr,
            marks: as,
            disabled: !bi || ct.choices !== "position" || Ze.input === "mic",
            onAnswer: (B) => Ge(B.midi, "board", B),
            caption: di.fixed === "shape" ? `${Ze.shape}-muodon alue` : di.fixed === "box" ? `Boksin ${Ze.box} alue` : "Otelauta"
          }
        ),
        !Kt && !qt && fi > 0 && fr.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: fr.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${P}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: be }),
        ne !== null && Fe.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), q(null), he("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        W && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: W }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: kn, onClick: () => {
            st();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Kt && !oe && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            fi === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            fi === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(2), children: "Näytä vastaus" }),
            fi > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => te(0), children: "Piilota vihje" })
          ] }),
          ct.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !bi, onClick: () => {
            Vt(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !oe ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: we, onClick: () => {
            Zt();
          }, children: we ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: vt, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Lt(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && Ze.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && W && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: W })
    ] }),
    !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ie.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: rp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(vk, { store: s, s: a, locked: Dn, changed: () => {
        const B = Na(s.data.settings);
        $.current = B, o(B), c();
      } }),
      /* @__PURE__ */ r.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ r.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ r.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ r.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ r.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ r.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ r.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ r.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
Ym.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ r.jsx(xk, {}));
//# sourceMappingURL=app.js.map
