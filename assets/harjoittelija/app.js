function Qm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var po = { exports: {} }, Yr = {}, vo = { exports: {} }, Be = {};
var Nd;
function Ym() {
  if (Nd) return Be;
  Nd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = Symbol.iterator;
  function C(x) {
    return x === null || typeof x != "object" ? null : (x = g && x[g] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var M = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, S = {};
  function N(x, y, ne) {
    this.props = x, this.context = y, this.refs = S, this.updater = ne || M;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(x, y) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, y, "setState");
  }, N.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function V() {
  }
  V.prototype = N.prototype;
  function T(x, y, ne) {
    this.props = x, this.context = y, this.refs = S, this.updater = ne || M;
  }
  var U = T.prototype = new V();
  U.constructor = T, P(U, N.prototype), U.isPureReactComponent = !0;
  var z = Array.isArray, B = Object.prototype.hasOwnProperty, D = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(x, y, ne) {
    var ce, Ne = {}, H = null, K = null;
    if (y != null) for (ce in y.ref !== void 0 && (K = y.ref), y.key !== void 0 && (H = "" + y.key), y) B.call(y, ce) && !O.hasOwnProperty(ce) && (Ne[ce] = y[ce]);
    var ee = arguments.length - 2;
    if (ee === 1) Ne.children = ne;
    else if (1 < ee) {
      for (var J = Array(ee), pe = 0; pe < ee; pe++) J[pe] = arguments[pe + 2];
      Ne.children = J;
    }
    if (x && x.defaultProps) for (ce in ee = x.defaultProps, ee) Ne[ce] === void 0 && (Ne[ce] = ee[ce]);
    return { $$typeof: s, type: x, key: H, ref: K, props: Ne, _owner: D.current };
  }
  function se(x, y) {
    return { $$typeof: s, type: x.type, key: y, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Z(x) {
    return typeof x == "object" && x !== null && x.$$typeof === s;
  }
  function we(x) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ne) {
      return y[ne];
    });
  }
  var Ee = /\/+/g;
  function Y(x, y) {
    return typeof x == "object" && x !== null && x.key != null ? we("" + x.key) : y.toString(36);
  }
  function fe(x, y, ne, ce, Ne) {
    var H = typeof x;
    (H === "undefined" || H === "boolean") && (x = null);
    var K = !1;
    if (x === null) K = !0;
    else switch (H) {
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
    if (K) return K = x, Ne = Ne(K), x = ce === "" ? "." + Y(K, 0) : ce, z(Ne) ? (ne = "", x != null && (ne = x.replace(Ee, "$&/") + "/"), fe(Ne, y, ne, "", function(pe) {
      return pe;
    })) : Ne != null && (Z(Ne) && (Ne = se(Ne, ne + (!Ne.key || K && K.key === Ne.key ? "" : ("" + Ne.key).replace(Ee, "$&/") + "/") + x)), y.push(Ne)), 1;
    if (K = 0, ce = ce === "" ? "." : ce + ":", z(x)) for (var ee = 0; ee < x.length; ee++) {
      H = x[ee];
      var J = ce + Y(H, ee);
      K += fe(H, y, ne, J, Ne);
    }
    else if (J = C(x), typeof J == "function") for (x = J.call(x), ee = 0; !(H = x.next()).done; ) H = H.value, J = ce + Y(H, ee++), K += fe(H, y, ne, J, Ne);
    else if (H === "object") throw y = String(x), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function G(x, y, ne) {
    if (x == null) return x;
    var ce = [], Ne = 0;
    return fe(x, ce, "", "", function(H) {
      return y.call(ne, H, Ne++);
    }), ce;
  }
  function le(x) {
    if (x._status === -1) {
      var y = x._result;
      y = y(), y.then(function(ne) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ne);
      }, function(ne) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ne);
      }), x._status === -1 && (x._status = 0, x._result = y);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var re = { current: null }, W = { transition: null }, ae = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: W, ReactCurrentOwner: D };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Be.Children = { map: G, forEach: function(x, y, ne) {
    G(x, function() {
      y.apply(this, arguments);
    }, ne);
  }, count: function(x) {
    var y = 0;
    return G(x, function() {
      y++;
    }), y;
  }, toArray: function(x) {
    return G(x, function(y) {
      return y;
    }) || [];
  }, only: function(x) {
    if (!Z(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, Be.Component = N, Be.Fragment = o, Be.Profiler = d, Be.PureComponent = T, Be.StrictMode = c, Be.Suspense = w, Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Be.act = te, Be.cloneElement = function(x, y, ne) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ce = P({}, x.props), Ne = x.key, H = x.ref, K = x._owner;
    if (y != null) {
      if (y.ref !== void 0 && (H = y.ref, K = D.current), y.key !== void 0 && (Ne = "" + y.key), x.type && x.type.defaultProps) var ee = x.type.defaultProps;
      for (J in y) B.call(y, J) && !O.hasOwnProperty(J) && (ce[J] = y[J] === void 0 && ee !== void 0 ? ee[J] : y[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) ce.children = ne;
    else if (1 < J) {
      ee = Array(J);
      for (var pe = 0; pe < J; pe++) ee[pe] = arguments[pe + 2];
      ce.children = ee;
    }
    return { $$typeof: s, type: x.type, key: Ne, ref: H, props: ce, _owner: K };
  }, Be.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: f, _context: x }, x.Consumer = x;
  }, Be.createElement = I, Be.createFactory = function(x) {
    var y = I.bind(null, x);
    return y.type = x, y;
  }, Be.createRef = function() {
    return { current: null };
  }, Be.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, Be.isValidElement = Z, Be.lazy = function(x) {
    return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: le };
  }, Be.memo = function(x, y) {
    return { $$typeof: b, type: x, compare: y === void 0 ? null : y };
  }, Be.startTransition = function(x) {
    var y = W.transition;
    W.transition = {};
    try {
      x();
    } finally {
      W.transition = y;
    }
  }, Be.unstable_act = te, Be.useCallback = function(x, y) {
    return re.current.useCallback(x, y);
  }, Be.useContext = function(x) {
    return re.current.useContext(x);
  }, Be.useDebugValue = function() {
  }, Be.useDeferredValue = function(x) {
    return re.current.useDeferredValue(x);
  }, Be.useEffect = function(x, y) {
    return re.current.useEffect(x, y);
  }, Be.useId = function() {
    return re.current.useId();
  }, Be.useImperativeHandle = function(x, y, ne) {
    return re.current.useImperativeHandle(x, y, ne);
  }, Be.useInsertionEffect = function(x, y) {
    return re.current.useInsertionEffect(x, y);
  }, Be.useLayoutEffect = function(x, y) {
    return re.current.useLayoutEffect(x, y);
  }, Be.useMemo = function(x, y) {
    return re.current.useMemo(x, y);
  }, Be.useReducer = function(x, y, ne) {
    return re.current.useReducer(x, y, ne);
  }, Be.useRef = function(x) {
    return re.current.useRef(x);
  }, Be.useState = function(x) {
    return re.current.useState(x);
  }, Be.useSyncExternalStore = function(x, y, ne) {
    return re.current.useSyncExternalStore(x, y, ne);
  }, Be.useTransition = function() {
    return re.current.useTransition();
  }, Be.version = "18.3.1", Be;
}
var Ed;
function Wo() {
  return Ed || (Ed = 1, vo.exports = Ym()), vo.exports;
}
var Cd;
function Jm() {
  if (Cd) return Yr;
  Cd = 1;
  var s = Wo(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, w, b) {
    var v, g = {}, C = null, M = null;
    b !== void 0 && (C = "" + b), w.key !== void 0 && (C = "" + w.key), w.ref !== void 0 && (M = w.ref);
    for (v in w) c.call(w, v) && !f.hasOwnProperty(v) && (g[v] = w[v]);
    if (m && m.defaultProps) for (v in w = m.defaultProps, w) g[v] === void 0 && (g[v] = w[v]);
    return { $$typeof: a, type: m, key: C, ref: M, props: g, _owner: d.current };
  }
  return Yr.Fragment = o, Yr.jsx = p, Yr.jsxs = p, Yr;
}
var Td;
function Xm() {
  return Td || (Td = 1, po.exports = Jm()), po.exports;
}
var r = Xm(), _ = Wo(), ka = {}, ko = { exports: {} }, Ut = {}, yo = { exports: {} }, go = {};
var Md;
function Zm() {
  return Md || (Md = 1, (function(s) {
    function a(W, ae) {
      var te = W.length;
      W.push(ae);
      e: for (; 0 < te; ) {
        var x = te - 1 >>> 1, y = W[x];
        if (0 < d(y, ae)) W[x] = ae, W[te] = y, te = x;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var ae = W[0], te = W.pop();
      if (te !== ae) {
        W[0] = te;
        e: for (var x = 0, y = W.length, ne = y >>> 1; x < ne; ) {
          var ce = 2 * (x + 1) - 1, Ne = W[ce], H = ce + 1, K = W[H];
          if (0 > d(Ne, te)) H < y && 0 > d(K, Ne) ? (W[x] = K, W[H] = te, x = H) : (W[x] = Ne, W[ce] = te, x = ce);
          else if (H < y && 0 > d(K, te)) W[x] = K, W[H] = te, x = H;
          else break e;
        }
      }
      return ae;
    }
    function d(W, ae) {
      var te = W.sortIndex - ae.sortIndex;
      return te !== 0 ? te : W.id - ae.id;
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
    var w = [], b = [], v = 1, g = null, C = 3, M = !1, P = !1, S = !1, N = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(W) {
      for (var ae = o(b); ae !== null; ) {
        if (ae.callback === null) c(b);
        else if (ae.startTime <= W) c(b), ae.sortIndex = ae.expirationTime, a(w, ae);
        else break;
        ae = o(b);
      }
    }
    function z(W) {
      if (S = !1, U(W), !P) if (o(w) !== null) P = !0, le(B);
      else {
        var ae = o(b);
        ae !== null && re(z, ae.startTime - W);
      }
    }
    function B(W, ae) {
      P = !1, S && (S = !1, V(I), I = -1), M = !0;
      var te = C;
      try {
        for (U(ae), g = o(w); g !== null && (!(g.expirationTime > ae) || W && !we()); ) {
          var x = g.callback;
          if (typeof x == "function") {
            g.callback = null, C = g.priorityLevel;
            var y = x(g.expirationTime <= ae);
            ae = s.unstable_now(), typeof y == "function" ? g.callback = y : g === o(w) && c(w), U(ae);
          } else c(w);
          g = o(w);
        }
        if (g !== null) var ne = !0;
        else {
          var ce = o(b);
          ce !== null && re(z, ce.startTime - ae), ne = !1;
        }
        return ne;
      } finally {
        g = null, C = te, M = !1;
      }
    }
    var D = !1, O = null, I = -1, se = 5, Z = -1;
    function we() {
      return !(s.unstable_now() - Z < se);
    }
    function Ee() {
      if (O !== null) {
        var W = s.unstable_now();
        Z = W;
        var ae = !0;
        try {
          ae = O(!0, W);
        } finally {
          ae ? Y() : (D = !1, O = null);
        }
      } else D = !1;
    }
    var Y;
    if (typeof T == "function") Y = function() {
      T(Ee);
    };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), G = fe.port2;
      fe.port1.onmessage = Ee, Y = function() {
        G.postMessage(null);
      };
    } else Y = function() {
      N(Ee, 0);
    };
    function le(W) {
      O = W, D || (D = !0, Y());
    }
    function re(W, ae) {
      I = N(function() {
        W(s.unstable_now());
      }, ae);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, s.unstable_continueExecution = function() {
      P || M || (P = !0, le(B));
    }, s.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < W ? Math.floor(1e3 / W) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(w);
    }, s.unstable_next = function(W) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = C;
      }
      var te = C;
      C = ae;
      try {
        return W();
      } finally {
        C = te;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(W, ae) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var te = C;
      C = W;
      try {
        return ae();
      } finally {
        C = te;
      }
    }, s.unstable_scheduleCallback = function(W, ae, te) {
      var x = s.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? x + te : x) : te = x, W) {
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
      return y = te + y, W = { id: v++, callback: ae, priorityLevel: W, startTime: te, expirationTime: y, sortIndex: -1 }, te > x ? (W.sortIndex = te, a(b, W), o(w) === null && W === o(b) && (S ? (V(I), I = -1) : S = !0, re(z, te - x))) : (W.sortIndex = y, a(w, W), P || M || (P = !0, le(B))), W;
    }, s.unstable_shouldYield = we, s.unstable_wrapCallback = function(W) {
      var ae = C;
      return function() {
        var te = C;
        C = ae;
        try {
          return W.apply(this, arguments);
        } finally {
          C = te;
        }
      };
    };
  })(go)), go;
}
var _d;
function qm() {
  return _d || (_d = 1, yo.exports = Zm()), yo.exports;
}
var bd;
function ep() {
  if (bd) return Ut;
  bd = 1;
  var s = Wo(), a = qm();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, g = {};
  function C(e) {
    return w.call(g, e) ? !0 : w.call(v, e) ? !1 : b.test(e) ? g[e] = !0 : (v[e] = !0, !1);
  }
  function M(e, t, n, i) {
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
  function P(e, t, n, i) {
    if (t === null || typeof t > "u" || M(e, t, n, i)) return !0;
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
  function S(e, t, n, i, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new S(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new S(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new S(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new S(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new S(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new S(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      V,
      T
    );
    N[t] = new S(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(V, T);
    N[t] = new S(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(V, T);
    N[t] = new S(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, i) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P(t, n, l, i) && (n = null), i || l === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var z = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.provider"), we = /* @__PURE__ */ Symbol.for("react.context"), Ee = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), fe = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var te = Object.assign, x;
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
  var ne = !1;
  function ce(e, t) {
    if (!e || ne) return "";
    ne = !0;
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
        } catch (F) {
          var i = F;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (F) {
          i = F;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          i = F;
        }
        e();
      }
    } catch (F) {
      if (F && i && typeof F.stack == "string") {
        for (var l = F.stack.split(`
`), u = i.stack.split(`
`), h = l.length - 1, k = u.length - 1; 1 <= h && 0 <= k && l[h] !== u[k]; ) k--;
        for (; 1 <= h && 0 <= k; h--, k--) if (l[h] !== u[k]) {
          if (h !== 1 || k !== 1)
            do
              if (h--, k--, 0 > k || l[h] !== u[k]) {
                var j = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
              }
            while (1 <= h && 0 <= k);
          break;
        }
      }
    } finally {
      ne = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Ne(e) {
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
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case D:
        return "Portal";
      case se:
        return "Profiler";
      case I:
        return "StrictMode";
      case Y:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case we:
        return (e.displayName || "Context") + ".Consumer";
      case Z:
        return (e._context.displayName || "Context") + ".Provider";
      case Ee:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case G:
        return t = e.displayName || null, t !== null ? t : H(e.type) || "Memo";
      case le:
        t = e._payload, e = e._init;
        try {
          return H(e(t));
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
        return H(t);
      case 8:
        return t === I ? "StrictMode" : "Mode";
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
  function ee(e) {
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
  function J(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function pe(e) {
    var t = J(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function Ce(e) {
    e._valueTracker || (e._valueTracker = pe(e));
  }
  function ge(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = J(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function xe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function je(e, t) {
    var n = t.checked;
    return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Fe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Te(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function $(e, t) {
    Te(e, t);
    var n = ee(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ue(e, t.type, n) : t.hasOwnProperty("defaultValue") && ue(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function oe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ue(e, t, n) {
    (t !== "number" || xe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Me = Array.isArray;
  function _e(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ee(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function He(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Oe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Me(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function ze(e, t) {
    var n = ee(t.value), i = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function Je(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function pt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Zt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? pt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ft, qt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ft = Ft || document.createElement("div"), Ft.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ft.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Ht(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var At = {
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
  }, yn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(At).forEach(function(e) {
    yn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), At[t] = At[e];
    });
  });
  function be(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || At.hasOwnProperty(e) && At[e] ? ("" + t).trim() : t + "px";
  }
  function ln(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = be(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Le = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Re(e, t) {
    if (t) {
      if (Le[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function De(e, t) {
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
  var Ze = null;
  function at(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var on = null, jt = null, Pt = null;
  function Cn(e) {
    if (e = Rr(e)) {
      if (typeof on != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Ps(t), on(e.stateNode, e.type, t));
    }
  }
  function un(e) {
    jt ? Pt ? Pt.push(e) : Pt = [e] : jt = e;
  }
  function Tn() {
    if (jt) {
      var e = jt, t = Pt;
      if (Pt = jt = null, Cn(e), t) for (e = 0; e < t.length; e++) Cn(t[e]);
    }
  }
  function ls(e, t) {
    return e(t);
  }
  function fr() {
  }
  var di = !1;
  function Ai(e, t, n) {
    if (di) return e(t, n);
    di = !0;
    try {
      return ls(e, t, n);
    } finally {
      di = !1, (jt !== null || Pt !== null) && (fr(), Tn());
    }
  }
  function fi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Ps(n);
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
  var Ve = !1;
  if (m) try {
    var et = {};
    Object.defineProperty(et, "passive", { get: function() {
      Ve = !0;
    } }), window.addEventListener("test", et, et), window.removeEventListener("test", et, et);
  } catch {
    Ve = !1;
  }
  function nt(e, t, n, i, l, u, h, k, j) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, F);
    } catch (X) {
      this.onError(X);
    }
  }
  var ft = !1, It = null, cn = !1, In = null, hr = { onError: function(e) {
    ft = !0, It = e;
  } };
  function mr(e, t, n, i, l, u, h, k, j) {
    ft = !1, It = null, nt.apply(hr, arguments);
  }
  function os(e, t, n, i, l, u, h, k, j) {
    if (mr.apply(this, arguments), ft) {
      if (ft) {
        var F = It;
        ft = !1, It = null;
      } else throw Error(o(198));
      cn || (cn = !0, In = F);
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
  function Dn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Pi(e) {
    if (Mn(e) !== e) throw Error(o(188));
  }
  function us(e) {
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
          if (u === n) return Pi(l), e;
          if (u === i) return Pi(l), t;
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
  function cs(e) {
    return e = us(e), e !== null ? ds(e) : null;
  }
  function ds(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ds(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var St = a.unstable_scheduleCallback, fs = a.unstable_cancelCallback, hs = a.unstable_shouldYield, Ra = a.unstable_requestPaint, lt = a.unstable_now, zn = a.unstable_getCurrentPriorityLevel, gn = a.unstable_ImmediatePriority, L = a.unstable_UserBlockingPriority, he = a.unstable_NormalPriority, Ge = a.unstable_LowPriority, Gt = a.unstable_IdlePriority, ot = null, Lt = null;
  function pr(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
      Lt.onCommitFiberRoot(ot, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : fh, ch = Math.log, dh = Math.LN2;
  function fh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ch(e) / dh | 0) | 0;
  }
  var ms = 64, ps = 4194304;
  function vr(e) {
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
  function vs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? i = vr(k) : (u &= h, u !== 0 && (i = vr(u)));
    } else h = n & ~l, h !== 0 ? i = vr(h) : u !== 0 && (i = vr(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - wt(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function hh(e, t) {
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
  function mh(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - wt(u), k = 1 << h, j = l[h];
      j === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = hh(k, t)) : j <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Oa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function tu() {
    var e = ms;
    return ms <<= 1, (ms & 4194240) === 0 && (ms = 64), e;
  }
  function $a(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function kr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function ph(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - wt(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Fa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - wt(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var qe = 0;
  function nu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var iu, Ia, ru, su, au, Da = !1, ks = [], Bn = null, Vn = null, Kn = null, yr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Un = [], vh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function lu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        yr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gr.delete(t.pointerId);
    }
  }
  function xr(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Rr(t), t !== null && Ia(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function kh(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = xr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Vn = xr(Vn, e, t, n, i, l), !0;
      case "mouseover":
        return Kn = xr(Kn, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return yr.set(u, xr(yr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, gr.set(u, xr(gr.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function ou(e) {
    var t = hi(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Dn(n), t !== null) {
            e.blockedOn = t, au(e.priority, function() {
              ru(n);
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
  function ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Ze = i, n.target.dispatchEvent(i), Ze = null;
      } else return t = Rr(n), t !== null && Ia(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function uu(e, t, n) {
    ys(e) && n.delete(t);
  }
  function yh() {
    Da = !1, Bn !== null && ys(Bn) && (Bn = null), Vn !== null && ys(Vn) && (Vn = null), Kn !== null && ys(Kn) && (Kn = null), yr.forEach(uu), gr.forEach(uu);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Da || (Da = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, yh)));
  }
  function Sr(e) {
    function t(l) {
      return jr(l, e);
    }
    if (0 < ks.length) {
      jr(ks[0], e);
      for (var n = 1; n < ks.length; n++) {
        var i = ks[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Bn !== null && jr(Bn, e), Vn !== null && jr(Vn, e), Kn !== null && jr(Kn, e), yr.forEach(t), gr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) ou(n), n.blockedOn === null && Un.shift();
  }
  var Li = z.ReactCurrentBatchConfig, gs = !0;
  function gh(e, t, n, i) {
    var l = qe, u = Li.transition;
    Li.transition = null;
    try {
      qe = 1, za(e, t, n, i);
    } finally {
      qe = l, Li.transition = u;
    }
  }
  function xh(e, t, n, i) {
    var l = qe, u = Li.transition;
    Li.transition = null;
    try {
      qe = 4, za(e, t, n, i);
    } finally {
      qe = l, Li.transition = u;
    }
  }
  function za(e, t, n, i) {
    if (gs) {
      var l = Ba(e, t, n, i);
      if (l === null) rl(e, t, i, xs, n), lu(e, i);
      else if (kh(l, e, t, n, i)) i.stopPropagation();
      else if (lu(e, i), t & 4 && -1 < vh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Rr(l);
          if (u !== null && iu(u), u = Ba(e, t, n, i), u === null && rl(e, t, i, xs, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else rl(e, t, i, null, n);
    }
  }
  var xs = null;
  function Ba(e, t, n, i) {
    if (xs = null, e = at(i), e = hi(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Dn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return xs = e, null;
  }
  function cu(e) {
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
        switch (zn()) {
          case gn:
            return 1;
          case L:
            return 4;
          case he:
          case Ge:
            return 16;
          case Gt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null, Va = null, js = null;
  function du() {
    if (js) return js;
    var e, t = Va, n = t.length, i, l = "value" in Hn ? Hn.value : Hn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === l[u - i]; i++) ;
    return js = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Ss(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ws() {
    return !0;
  }
  function fu() {
    return !1;
  }
  function Wt(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ws : fu, this.isPropagationStopped = fu, this;
    }
    return te(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ws);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ws);
    }, persist: function() {
    }, isPersistent: ws }), t;
  }
  var Ri = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ka = Wt(Ri), wr = te({}, Ri, { view: 0, detail: 0 }), jh = Wt(wr), Ua, Ha, Nr, Ns = te({}, wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (Ua = e.screenX - Nr.screenX, Ha = e.screenY - Nr.screenY) : Ha = Ua = 0, Nr = e), Ua);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ha;
  } }), hu = Wt(Ns), Sh = te({}, Ns, { dataTransfer: 0 }), wh = Wt(Sh), Nh = te({}, wr, { relatedTarget: 0 }), Ga = Wt(Nh), Eh = te({}, Ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ch = Wt(Eh), Th = te({}, Ri, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Mh = Wt(Th), _h = te({}, Ri, { data: 0 }), mu = Wt(_h), bh = {
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
  }, Ah = {
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
  }, Ph = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ph[e]) ? !!t[e] : !1;
  }
  function Wa() {
    return Lh;
  }
  var Rh = te({}, wr, { key: function(e) {
    if (e.key) {
      var t = bh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ah[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wa, charCode: function(e) {
    return e.type === "keypress" ? Ss(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Oh = Wt(Rh), $h = te({}, Ns, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pu = Wt($h), Fh = te({}, wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wa }), Ih = Wt(Fh), Dh = te({}, Ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zh = Wt(Dh), Bh = te({}, Ns, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Vh = Wt(Bh), Kh = [9, 13, 27, 32], Qa = m && "CompositionEvent" in window, Er = null;
  m && "documentMode" in document && (Er = document.documentMode);
  var Uh = m && "TextEvent" in window && !Er, vu = m && (!Qa || Er && 8 < Er && 11 >= Er), ku = " ", yu = !1;
  function gu(e, t) {
    switch (e) {
      case "keyup":
        return Kh.indexOf(t.keyCode) !== -1;
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
  function xu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Oi = !1;
  function Hh(e, t) {
    switch (e) {
      case "compositionend":
        return xu(t);
      case "keypress":
        return t.which !== 32 ? null : (yu = !0, ku);
      case "textInput":
        return e = t.data, e === ku && yu ? null : e;
      default:
        return null;
    }
  }
  function Gh(e, t) {
    if (Oi) return e === "compositionend" || !Qa && gu(e, t) ? (e = du(), js = Va = Hn = null, Oi = !1, e) : null;
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
        return vu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ju(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wh[e.type] : t === "textarea";
  }
  function Su(e, t, n, i) {
    un(i), t = _s(t, "onChange"), 0 < t.length && (n = new Ka("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Cr = null, Tr = null;
  function Qh(e) {
    zu(e, 0);
  }
  function Es(e) {
    var t = zi(e);
    if (ge(t)) return e;
  }
  function Yh(e, t) {
    if (e === "change") return t;
  }
  var wu = !1;
  if (m) {
    var Ya;
    if (m) {
      var Ja = "oninput" in document;
      if (!Ja) {
        var Nu = document.createElement("div");
        Nu.setAttribute("oninput", "return;"), Ja = typeof Nu.oninput == "function";
      }
      Ya = Ja;
    } else Ya = !1;
    wu = Ya && (!document.documentMode || 9 < document.documentMode);
  }
  function Eu() {
    Cr && (Cr.detachEvent("onpropertychange", Cu), Tr = Cr = null);
  }
  function Cu(e) {
    if (e.propertyName === "value" && Es(Tr)) {
      var t = [];
      Su(t, Tr, e, at(e)), Ai(Qh, t);
    }
  }
  function Jh(e, t, n) {
    e === "focusin" ? (Eu(), Cr = t, Tr = n, Cr.attachEvent("onpropertychange", Cu)) : e === "focusout" && Eu();
  }
  function Xh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Es(Tr);
  }
  function Zh(e, t) {
    if (e === "click") return Es(t);
  }
  function qh(e, t) {
    if (e === "input" || e === "change") return Es(t);
  }
  function em(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dn = typeof Object.is == "function" ? Object.is : em;
  function Mr(e, t) {
    if (dn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!w.call(t, l) || !dn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mu(e, t) {
    var n = Tu(e);
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
      n = Tu(n);
    }
  }
  function _u(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _u(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function bu() {
    for (var e = window, t = xe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xe(e.document);
    }
    return t;
  }
  function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function tm(e) {
    var t = bu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _u(n.ownerDocument.documentElement, n)) {
      if (i !== null && Xa(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(i.start, l);
          i = i.end === void 0 ? u : Math.min(i.end, l), !e.extend && u > i && (l = i, i = u, u = l), l = Mu(n, u);
          var h = Mu(
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
  var nm = m && "documentMode" in document && 11 >= document.documentMode, $i = null, Za = null, _r = null, qa = !1;
  function Au(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qa || $i == null || $i !== xe(i) || (i = $i, "selectionStart" in i && Xa(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), _r && Mr(_r, i) || (_r = i, i = _s(Za, "onSelect"), 0 < i.length && (t = new Ka("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = $i)));
  }
  function Cs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Fi = { animationend: Cs("Animation", "AnimationEnd"), animationiteration: Cs("Animation", "AnimationIteration"), animationstart: Cs("Animation", "AnimationStart"), transitionend: Cs("Transition", "TransitionEnd") }, el = {}, Pu = {};
  m && (Pu = document.createElement("div").style, "AnimationEvent" in window || (delete Fi.animationend.animation, delete Fi.animationiteration.animation, delete Fi.animationstart.animation), "TransitionEvent" in window || delete Fi.transitionend.transition);
  function Ts(e) {
    if (el[e]) return el[e];
    if (!Fi[e]) return e;
    var t = Fi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Pu) return el[e] = t[n];
    return e;
  }
  var Lu = Ts("animationend"), Ru = Ts("animationiteration"), Ou = Ts("animationstart"), $u = Ts("transitionend"), Fu = /* @__PURE__ */ new Map(), Iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gn(e, t) {
    Fu.set(e, t), f(t, [e]);
  }
  for (var tl = 0; tl < Iu.length; tl++) {
    var nl = Iu[tl], im = nl.toLowerCase(), rm = nl[0].toUpperCase() + nl.slice(1);
    Gn(im, "on" + rm);
  }
  Gn(Lu, "onAnimationEnd"), Gn(Ru, "onAnimationIteration"), Gn(Ou, "onAnimationStart"), Gn("dblclick", "onDoubleClick"), Gn("focusin", "onFocus"), Gn("focusout", "onBlur"), Gn($u, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
  function Du(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, os(i, t, void 0, e), e.currentTarget = null;
  }
  function zu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], j = k.instance, F = k.currentTarget;
          if (k = k.listener, j !== u && l.isPropagationStopped()) break e;
          Du(l, k, F), u = j;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], j = k.instance, F = k.currentTarget, k = k.listener, j !== u && l.isPropagationStopped()) break e;
          Du(l, k, F), u = j;
        }
      }
    }
    if (cn) throw e = In, cn = !1, In = null, e;
  }
  function it(e, t) {
    var n = t[cl];
    n === void 0 && (n = t[cl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Bu(t, e, 2, !1), n.add(i));
  }
  function il(e, t, n) {
    var i = 0;
    t && (i |= 4), Bu(n, e, i, t);
  }
  var Ms = "_reactListening" + Math.random().toString(36).slice(2);
  function Ar(e) {
    if (!e[Ms]) {
      e[Ms] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (sm.has(n) || il(n, !1, e), il(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ms] || (t[Ms] = !0, il("selectionchange", !1, t));
    }
  }
  function Bu(e, t, n, i) {
    switch (cu(t)) {
      case 1:
        var l = gh;
        break;
      case 4:
        l = xh;
        break;
      default:
        l = za;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ve || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function rl(e, t, n, i, l) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var h = i.tag;
      if (h === 3 || h === 4) {
        var k = i.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (h === 4) for (h = i.return; h !== null; ) {
          var j = h.tag;
          if ((j === 3 || j === 4) && (j = h.stateNode.containerInfo, j === l || j.nodeType === 8 && j.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = hi(k), h === null) return;
          if (j = h.tag, j === 5 || j === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    Ai(function() {
      var F = u, X = at(n), q = [];
      e: {
        var Q = Fu.get(e);
        if (Q !== void 0) {
          var de = Ka, ve = e;
          switch (e) {
            case "keypress":
              if (Ss(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Oh;
              break;
            case "focusin":
              ve = "focus", de = Ga;
              break;
            case "focusout":
              ve = "blur", de = Ga;
              break;
            case "beforeblur":
            case "afterblur":
              de = Ga;
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
              de = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = wh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Ih;
              break;
            case Lu:
            case Ru:
            case Ou:
              de = Ch;
              break;
            case $u:
              de = zh;
              break;
            case "scroll":
              de = jh;
              break;
            case "wheel":
              de = Vh;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = Mh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = pu;
          }
          var ye = (t & 4) !== 0, ht = !ye && e === "scroll", A = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var E = F, R; E !== null; ) {
            R = E;
            var ie = R.stateNode;
            if (R.tag === 5 && ie !== null && (R = ie, A !== null && (ie = fi(E, A), ie != null && ye.push(Pr(E, ie, R)))), ht) break;
            E = E.return;
          }
          0 < ye.length && (Q = new de(Q, ve, null, n, X), q.push({ event: Q, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Q && n !== Ze && (ve = n.relatedTarget || n.fromElement) && (hi(ve) || ve[_n])) break e;
          if ((de || Q) && (Q = X.window === X ? X : (Q = X.ownerDocument) ? Q.defaultView || Q.parentWindow : window, de ? (ve = n.relatedTarget || n.toElement, de = F, ve = ve ? hi(ve) : null, ve !== null && (ht = Mn(ve), ve !== ht || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (de = null, ve = F), de !== ve)) {
            if (ye = hu, ie = "onMouseLeave", A = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (ye = pu, ie = "onPointerLeave", A = "onPointerEnter", E = "pointer"), ht = de == null ? Q : zi(de), R = ve == null ? Q : zi(ve), Q = new ye(ie, E + "leave", de, n, X), Q.target = ht, Q.relatedTarget = R, ie = null, hi(X) === F && (ye = new ye(A, E + "enter", ve, n, X), ye.target = R, ye.relatedTarget = ht, ie = ye), ht = ie, de && ve) t: {
              for (ye = de, A = ve, E = 0, R = ye; R; R = Ii(R)) E++;
              for (R = 0, ie = A; ie; ie = Ii(ie)) R++;
              for (; 0 < E - R; ) ye = Ii(ye), E--;
              for (; 0 < R - E; ) A = Ii(A), R--;
              for (; E--; ) {
                if (ye === A || A !== null && ye === A.alternate) break t;
                ye = Ii(ye), A = Ii(A);
              }
              ye = null;
            }
            else ye = null;
            de !== null && Vu(q, Q, de, ye, !1), ve !== null && ht !== null && Vu(q, ht, ve, ye, !0);
          }
        }
        e: {
          if (Q = F ? zi(F) : window, de = Q.nodeName && Q.nodeName.toLowerCase(), de === "select" || de === "input" && Q.type === "file") var Se = Yh;
          else if (ju(Q)) if (wu) Se = qh;
          else {
            Se = Xh;
            var Ae = Jh;
          }
          else (de = Q.nodeName) && de.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Se = Zh);
          if (Se && (Se = Se(e, F))) {
            Su(q, Se, n, X);
            break e;
          }
          Ae && Ae(e, Q, F), e === "focusout" && (Ae = Q._wrapperState) && Ae.controlled && Q.type === "number" && ue(Q, "number", Q.value);
        }
        switch (Ae = F ? zi(F) : window, e) {
          case "focusin":
            (ju(Ae) || Ae.contentEditable === "true") && ($i = Ae, Za = F, _r = null);
            break;
          case "focusout":
            _r = Za = $i = null;
            break;
          case "mousedown":
            qa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qa = !1, Au(q, n, X);
            break;
          case "selectionchange":
            if (nm) break;
          case "keydown":
          case "keyup":
            Au(q, n, X);
        }
        var Pe;
        if (Qa) e: {
          switch (e) {
            case "compositionstart":
              var $e = "onCompositionStart";
              break e;
            case "compositionend":
              $e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $e = "onCompositionUpdate";
              break e;
          }
          $e = void 0;
        }
        else Oi ? gu(e, n) && ($e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($e = "onCompositionStart");
        $e && (vu && n.locale !== "ko" && (Oi || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Oi && (Pe = du()) : (Hn = X, Va = "value" in Hn ? Hn.value : Hn.textContent, Oi = !0)), Ae = _s(F, $e), 0 < Ae.length && ($e = new mu($e, e, null, n, X), q.push({ event: $e, listeners: Ae }), Pe ? $e.data = Pe : (Pe = xu(n), Pe !== null && ($e.data = Pe)))), (Pe = Uh ? Hh(e, n) : Gh(e, n)) && (F = _s(F, "onBeforeInput"), 0 < F.length && (X = new mu("onBeforeInput", "beforeinput", null, n, X), q.push({ event: X, listeners: F }), X.data = Pe));
      }
      zu(q, t);
    });
  }
  function Pr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function _s(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = fi(e, n), u != null && i.unshift(Pr(e, u, l)), u = fi(e, t), u != null && i.push(Pr(e, u, l))), e = e.return;
    }
    return i;
  }
  function Ii(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Vu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, j = k.alternate, F = k.stateNode;
      if (j !== null && j === i) break;
      k.tag === 5 && F !== null && (k = F, l ? (j = fi(n, u), j != null && h.unshift(Pr(n, j, k))) : l || (j = fi(n, u), j != null && h.push(Pr(n, j, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var am = /\r\n?/g, lm = /\u0000|\uFFFD/g;
  function Ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(am, `
`).replace(lm, "");
  }
  function bs(e, t, n) {
    if (t = Ku(t), Ku(e) !== t && n) throw Error(o(425));
  }
  function As() {
  }
  var sl = null, al = null;
  function ll(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ol = typeof setTimeout == "function" ? setTimeout : void 0, om = typeof clearTimeout == "function" ? clearTimeout : void 0, Uu = typeof Promise == "function" ? Promise : void 0, um = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uu < "u" ? function(e) {
    return Uu.resolve(null).then(e).catch(cm);
  } : ol;
  function cm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ul(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), Sr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    Sr(t);
  }
  function Wn(e) {
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
  function Hu(e) {
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
  var Di = Math.random().toString(36).slice(2), xn = "__reactFiber$" + Di, Lr = "__reactProps$" + Di, _n = "__reactContainer$" + Di, cl = "__reactEvents$" + Di, dm = "__reactListeners$" + Di, fm = "__reactHandles$" + Di;
  function hi(e) {
    var t = e[xn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[xn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Hu(e); e !== null; ) {
          if (n = e[xn]) return n;
          e = Hu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Rr(e) {
    return e = e[xn] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function zi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ps(e) {
    return e[Lr] || null;
  }
  var dl = [], Bi = -1;
  function Qn(e) {
    return { current: e };
  }
  function rt(e) {
    0 > Bi || (e.current = dl[Bi], dl[Bi] = null, Bi--);
  }
  function tt(e, t) {
    Bi++, dl[Bi] = e.current, e.current = t;
  }
  var Yn = {}, Tt = Qn(Yn), Dt = Qn(!1), mi = Yn;
  function Vi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function zt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ls() {
    rt(Dt), rt(Tt);
  }
  function Gu(e, t, n) {
    if (Tt.current !== Yn) throw Error(o(168));
    tt(Tt, t), tt(Dt, n);
  }
  function Wu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, K(e) || "Unknown", l));
    return te({}, n, i);
  }
  function Rs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yn, mi = Tt.current, tt(Tt, e), tt(Dt, Dt.current), !0;
  }
  function Qu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Wu(e, t, mi), i.__reactInternalMemoizedMergedChildContext = e, rt(Dt), rt(Tt), tt(Tt, e)) : rt(Dt), tt(Dt, n);
  }
  var bn = null, Os = !1, fl = !1;
  function Yu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function hm(e) {
    Os = !0, Yu(e);
  }
  function Jn() {
    if (!fl && bn !== null) {
      fl = !0;
      var e = 0, t = qe;
      try {
        var n = bn;
        for (qe = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        bn = null, Os = !1;
      } catch (l) {
        throw bn !== null && (bn = bn.slice(e + 1)), St(gn, Jn), l;
      } finally {
        qe = t, fl = !1;
      }
    }
    return null;
  }
  var Ki = [], Ui = 0, $s = null, Fs = 0, en = [], tn = 0, pi = null, An = 1, Pn = "";
  function vi(e, t) {
    Ki[Ui++] = Fs, Ki[Ui++] = $s, $s = e, Fs = t;
  }
  function Ju(e, t, n) {
    en[tn++] = An, en[tn++] = Pn, en[tn++] = pi, pi = e;
    var i = An;
    e = Pn;
    var l = 32 - wt(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - wt(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, An = 1 << 32 - wt(t) + l | n << l | i, Pn = u + e;
    } else An = 1 << u | n << l | i, Pn = e;
  }
  function hl(e) {
    e.return !== null && (vi(e, 1), Ju(e, 1, 0));
  }
  function ml(e) {
    for (; e === $s; ) $s = Ki[--Ui], Ki[Ui] = null, Fs = Ki[--Ui], Ki[Ui] = null;
    for (; e === pi; ) pi = en[--tn], en[tn] = null, Pn = en[--tn], en[tn] = null, An = en[--tn], en[tn] = null;
  }
  var Qt = null, Yt = null, st = !1, fn = null;
  function Xu(e, t) {
    var n = an(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Zu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qt = e, Yt = Wn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qt = e, Yt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: An, overflow: Pn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = an(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qt = e, Yt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if (st) {
      var t = Yt;
      if (t) {
        var n = t;
        if (!Zu(e, t)) {
          if (pl(e)) throw Error(o(418));
          t = Wn(n.nextSibling);
          var i = Qt;
          t && Zu(e, t) ? Xu(i, n) : (e.flags = e.flags & -4097 | 2, st = !1, Qt = e);
        }
      } else {
        if (pl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, st = !1, Qt = e;
      }
    }
  }
  function qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Qt = e;
  }
  function Is(e) {
    if (e !== Qt) return !1;
    if (!st) return qu(e), st = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ll(e.type, e.memoizedProps)), t && (t = Yt)) {
      if (pl(e)) throw ec(), Error(o(418));
      for (; t; ) Xu(e, t), t = Wn(t.nextSibling);
    }
    if (qu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Yt = Wn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Yt = null;
      }
    } else Yt = Qt ? Wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ec() {
    for (var e = Yt; e; ) e = Wn(e.nextSibling);
  }
  function Hi() {
    Yt = Qt = null, st = !1;
  }
  function kl(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  var mm = z.ReactCurrentBatchConfig;
  function Or(e, t, n) {
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
  function Ds(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function tc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function nc(e) {
    function t(A, E) {
      if (e) {
        var R = A.deletions;
        R === null ? (A.deletions = [E], A.flags |= 16) : R.push(E);
      }
    }
    function n(A, E) {
      if (!e) return null;
      for (; E !== null; ) t(A, E), E = E.sibling;
      return null;
    }
    function i(A, E) {
      for (A = /* @__PURE__ */ new Map(); E !== null; ) E.key !== null ? A.set(E.key, E) : A.set(E.index, E), E = E.sibling;
      return A;
    }
    function l(A, E) {
      return A = ri(A, E), A.index = 0, A.sibling = null, A;
    }
    function u(A, E, R) {
      return A.index = R, e ? (R = A.alternate, R !== null ? (R = R.index, R < E ? (A.flags |= 2, E) : R) : (A.flags |= 2, E)) : (A.flags |= 1048576, E);
    }
    function h(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function k(A, E, R, ie) {
      return E === null || E.tag !== 6 ? (E = oo(R, A.mode, ie), E.return = A, E) : (E = l(E, R), E.return = A, E);
    }
    function j(A, E, R, ie) {
      var Se = R.type;
      return Se === O ? X(A, E, R.props.children, ie, R.key) : E !== null && (E.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === le && tc(Se) === E.type) ? (ie = l(E, R.props), ie.ref = Or(A, E, R), ie.return = A, ie) : (ie = ua(R.type, R.key, R.props, null, A.mode, ie), ie.ref = Or(A, E, R), ie.return = A, ie);
    }
    function F(A, E, R, ie) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== R.containerInfo || E.stateNode.implementation !== R.implementation ? (E = uo(R, A.mode, ie), E.return = A, E) : (E = l(E, R.children || []), E.return = A, E);
    }
    function X(A, E, R, ie, Se) {
      return E === null || E.tag !== 7 ? (E = Ni(R, A.mode, ie, Se), E.return = A, E) : (E = l(E, R), E.return = A, E);
    }
    function q(A, E, R) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return E = oo("" + E, A.mode, R), E.return = A, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case B:
            return R = ua(E.type, E.key, E.props, null, A.mode, R), R.ref = Or(A, null, E), R.return = A, R;
          case D:
            return E = uo(E, A.mode, R), E.return = A, E;
          case le:
            var ie = E._init;
            return q(A, ie(E._payload), R);
        }
        if (Me(E) || ae(E)) return E = Ni(E, A.mode, R, null), E.return = A, E;
        Ds(A, E);
      }
      return null;
    }
    function Q(A, E, R, ie) {
      var Se = E !== null ? E.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return Se !== null ? null : k(A, E, "" + R, ie);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            return R.key === Se ? j(A, E, R, ie) : null;
          case D:
            return R.key === Se ? F(A, E, R, ie) : null;
          case le:
            return Se = R._init, Q(
              A,
              E,
              Se(R._payload),
              ie
            );
        }
        if (Me(R) || ae(R)) return Se !== null ? null : X(A, E, R, ie, null);
        Ds(A, R);
      }
      return null;
    }
    function de(A, E, R, ie, Se) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return A = A.get(R) || null, k(E, A, "" + ie, Se);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case B:
            return A = A.get(ie.key === null ? R : ie.key) || null, j(E, A, ie, Se);
          case D:
            return A = A.get(ie.key === null ? R : ie.key) || null, F(E, A, ie, Se);
          case le:
            var Ae = ie._init;
            return de(A, E, R, Ae(ie._payload), Se);
        }
        if (Me(ie) || ae(ie)) return A = A.get(R) || null, X(E, A, ie, Se, null);
        Ds(E, ie);
      }
      return null;
    }
    function ve(A, E, R, ie) {
      for (var Se = null, Ae = null, Pe = E, $e = E = 0, xt = null; Pe !== null && $e < R.length; $e++) {
        Pe.index > $e ? (xt = Pe, Pe = null) : xt = Pe.sibling;
        var Ye = Q(A, Pe, R[$e], ie);
        if (Ye === null) {
          Pe === null && (Pe = xt);
          break;
        }
        e && Pe && Ye.alternate === null && t(A, Pe), E = u(Ye, E, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye, Pe = xt;
      }
      if ($e === R.length) return n(A, Pe), st && vi(A, $e), Se;
      if (Pe === null) {
        for (; $e < R.length; $e++) Pe = q(A, R[$e], ie), Pe !== null && (E = u(Pe, E, $e), Ae === null ? Se = Pe : Ae.sibling = Pe, Ae = Pe);
        return st && vi(A, $e), Se;
      }
      for (Pe = i(A, Pe); $e < R.length; $e++) xt = de(Pe, A, $e, R[$e], ie), xt !== null && (e && xt.alternate !== null && Pe.delete(xt.key === null ? $e : xt.key), E = u(xt, E, $e), Ae === null ? Se = xt : Ae.sibling = xt, Ae = xt);
      return e && Pe.forEach(function(si) {
        return t(A, si);
      }), st && vi(A, $e), Se;
    }
    function ye(A, E, R, ie) {
      var Se = ae(R);
      if (typeof Se != "function") throw Error(o(150));
      if (R = Se.call(R), R == null) throw Error(o(151));
      for (var Ae = Se = null, Pe = E, $e = E = 0, xt = null, Ye = R.next(); Pe !== null && !Ye.done; $e++, Ye = R.next()) {
        Pe.index > $e ? (xt = Pe, Pe = null) : xt = Pe.sibling;
        var si = Q(A, Pe, Ye.value, ie);
        if (si === null) {
          Pe === null && (Pe = xt);
          break;
        }
        e && Pe && si.alternate === null && t(A, Pe), E = u(si, E, $e), Ae === null ? Se = si : Ae.sibling = si, Ae = si, Pe = xt;
      }
      if (Ye.done) return n(
        A,
        Pe
      ), st && vi(A, $e), Se;
      if (Pe === null) {
        for (; !Ye.done; $e++, Ye = R.next()) Ye = q(A, Ye.value, ie), Ye !== null && (E = u(Ye, E, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye);
        return st && vi(A, $e), Se;
      }
      for (Pe = i(A, Pe); !Ye.done; $e++, Ye = R.next()) Ye = de(Pe, A, $e, Ye.value, ie), Ye !== null && (e && Ye.alternate !== null && Pe.delete(Ye.key === null ? $e : Ye.key), E = u(Ye, E, $e), Ae === null ? Se = Ye : Ae.sibling = Ye, Ae = Ye);
      return e && Pe.forEach(function(Wm) {
        return t(A, Wm);
      }), st && vi(A, $e), Se;
    }
    function ht(A, E, R, ie) {
      if (typeof R == "object" && R !== null && R.type === O && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            e: {
              for (var Se = R.key, Ae = E; Ae !== null; ) {
                if (Ae.key === Se) {
                  if (Se = R.type, Se === O) {
                    if (Ae.tag === 7) {
                      n(A, Ae.sibling), E = l(Ae, R.props.children), E.return = A, A = E;
                      break e;
                    }
                  } else if (Ae.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === le && tc(Se) === Ae.type) {
                    n(A, Ae.sibling), E = l(Ae, R.props), E.ref = Or(A, Ae, R), E.return = A, A = E;
                    break e;
                  }
                  n(A, Ae);
                  break;
                } else t(A, Ae);
                Ae = Ae.sibling;
              }
              R.type === O ? (E = Ni(R.props.children, A.mode, ie, R.key), E.return = A, A = E) : (ie = ua(R.type, R.key, R.props, null, A.mode, ie), ie.ref = Or(A, E, R), ie.return = A, A = ie);
            }
            return h(A);
          case D:
            e: {
              for (Ae = R.key; E !== null; ) {
                if (E.key === Ae) if (E.tag === 4 && E.stateNode.containerInfo === R.containerInfo && E.stateNode.implementation === R.implementation) {
                  n(A, E.sibling), E = l(E, R.children || []), E.return = A, A = E;
                  break e;
                } else {
                  n(A, E);
                  break;
                }
                else t(A, E);
                E = E.sibling;
              }
              E = uo(R, A.mode, ie), E.return = A, A = E;
            }
            return h(A);
          case le:
            return Ae = R._init, ht(A, E, Ae(R._payload), ie);
        }
        if (Me(R)) return ve(A, E, R, ie);
        if (ae(R)) return ye(A, E, R, ie);
        Ds(A, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, E !== null && E.tag === 6 ? (n(A, E.sibling), E = l(E, R), E.return = A, A = E) : (n(A, E), E = oo(R, A.mode, ie), E.return = A, A = E), h(A)) : n(A, E);
    }
    return ht;
  }
  var Gi = nc(!0), ic = nc(!1), zs = Qn(null), Bs = null, Wi = null, yl = null;
  function gl() {
    yl = Wi = Bs = null;
  }
  function xl(e) {
    var t = zs.current;
    rt(zs), e._currentValue = t;
  }
  function jl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Qi(e, t) {
    Bs = e, yl = Wi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Bt = !0), e.firstContext = null);
  }
  function nn(e) {
    var t = e._currentValue;
    if (yl !== e) if (e = { context: e, memoizedValue: t, next: null }, Wi === null) {
      if (Bs === null) throw Error(o(308));
      Wi = e, Bs.dependencies = { lanes: 0, firstContext: e };
    } else Wi = Wi.next = e;
    return t;
  }
  var ki = null;
  function Sl(e) {
    ki === null ? ki = [e] : ki.push(e);
  }
  function rc(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Sl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Xn = !1;
  function wl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function sc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Zn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (We & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Ln(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, Sl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Ln(e, n);
  }
  function Vs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Fa(e, n);
    }
  }
  function ac(e, t) {
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
  function Ks(e, t, n, i) {
    var l = e.updateQueue;
    Xn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var j = k, F = j.next;
      j.next = null, h === null ? u = F : h.next = F, h = j;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, k = X.lastBaseUpdate, k !== h && (k === null ? X.firstBaseUpdate = F : k.next = F, X.lastBaseUpdate = j));
    }
    if (u !== null) {
      var q = l.baseState;
      h = 0, X = F = j = null, k = u;
      do {
        var Q = k.lane, de = k.eventTime;
        if ((i & Q) === Q) {
          X !== null && (X = X.next = {
            eventTime: de,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ve = e, ye = k;
            switch (Q = t, de = n, ye.tag) {
              case 1:
                if (ve = ye.payload, typeof ve == "function") {
                  q = ve.call(de, q, Q);
                  break e;
                }
                q = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ye.payload, Q = typeof ve == "function" ? ve.call(de, q, Q) : ve, Q == null) break e;
                q = te({}, q, Q);
                break e;
              case 2:
                Xn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [k] : Q.push(k));
        } else de = { eventTime: de, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, X === null ? (F = X = de, j = q) : X = X.next = de, h |= Q;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (X === null && (j = q), l.baseState = j, l.firstBaseUpdate = F, l.lastBaseUpdate = X, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      xi |= h, e.lanes = h, e.memoizedState = q;
    }
  }
  function lc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(o(191, l));
        l.call(i);
      }
    }
  }
  var $r = {}, jn = Qn($r), Fr = Qn($r), Ir = Qn($r);
  function yi(e) {
    if (e === $r) throw Error(o(174));
    return e;
  }
  function Nl(e, t) {
    switch (tt(Ir, t), tt(Fr, e), tt(jn, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zt(t, e);
    }
    rt(jn), tt(jn, t);
  }
  function Yi() {
    rt(jn), rt(Fr), rt(Ir);
  }
  function oc(e) {
    yi(Ir.current);
    var t = yi(jn.current), n = Zt(t, e.type);
    t !== n && (tt(Fr, e), tt(jn, n));
  }
  function El(e) {
    Fr.current === e && (rt(jn), rt(Fr));
  }
  var ut = Qn(0);
  function Us(e) {
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
  var Cl = [];
  function Tl() {
    for (var e = 0; e < Cl.length; e++) Cl[e]._workInProgressVersionPrimary = null;
    Cl.length = 0;
  }
  var Hs = z.ReactCurrentDispatcher, Ml = z.ReactCurrentBatchConfig, gi = 0, ct = null, vt = null, yt = null, Gs = !1, Dr = !1, zr = 0, pm = 0;
  function Mt() {
    throw Error(o(321));
  }
  function _l(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dn(e[n], t[n])) return !1;
    return !0;
  }
  function bl(e, t, n, i, l, u) {
    if (gi = u, ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hs.current = e === null || e.memoizedState === null ? gm : xm, e = n(i, l), Dr) {
      u = 0;
      do {
        if (Dr = !1, zr = 0, 25 <= u) throw Error(o(301));
        u += 1, yt = vt = null, t.updateQueue = null, Hs.current = jm, e = n(i, l);
      } while (Dr);
    }
    if (Hs.current = Ys, t = vt !== null && vt.next !== null, gi = 0, yt = vt = ct = null, Gs = !1, t) throw Error(o(300));
    return e;
  }
  function Al() {
    var e = zr !== 0;
    return zr = 0, e;
  }
  function Sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? ct.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function rn() {
    if (vt === null) {
      var e = ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = vt.next;
    var t = yt === null ? ct.memoizedState : yt.next;
    if (t !== null) yt = t, vt = e;
    else {
      if (e === null) throw Error(o(310));
      vt = e, e = { memoizedState: vt.memoizedState, baseState: vt.baseState, baseQueue: vt.baseQueue, queue: vt.queue, next: null }, yt === null ? ct.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Br(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pl(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = vt, l = i.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        l.next = u.next, u.next = h;
      }
      i.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, i = i.baseState;
      var k = h = null, j = null, F = u;
      do {
        var X = F.lane;
        if ((gi & X) === X) j !== null && (j = j.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), i = F.hasEagerState ? F.eagerState : e(i, F.action);
        else {
          var q = {
            lane: X,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          j === null ? (k = j = q, h = i) : j = j.next = q, ct.lanes |= X, xi |= X;
        }
        F = F.next;
      } while (F !== null && F !== u);
      j === null ? h = i : j.next = k, dn(i, t.memoizedState) || (Bt = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = j, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ct.lanes |= u, xi |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ll(e) {
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
      dn(u, t.memoizedState) || (Bt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function uc() {
  }
  function cc(e, t) {
    var n = ct, i = rn(), l = t(), u = !dn(i.memoizedState, l);
    if (u && (i.memoizedState = l, Bt = !0), i = i.queue, Rl(hc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || yt !== null && yt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Vr(9, fc.bind(null, n, i, l, t), void 0, null), gt === null) throw Error(o(349));
      (gi & 30) !== 0 || dc(n, t, l);
    }
    return l;
  }
  function dc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function fc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, mc(t) && pc(e);
  }
  function hc(e, t, n) {
    return n(function() {
      mc(t) && pc(e);
    });
  }
  function mc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dn(e, n);
    } catch {
      return !0;
    }
  }
  function pc(e) {
    var t = Ln(e, 1);
    t !== null && vn(t, e, 1, -1);
  }
  function vc(e) {
    var t = Sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Br, lastRenderedState: e }, t.queue = e, e = e.dispatch = ym.bind(null, ct, e), [t.memoizedState, e];
  }
  function Vr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function kc() {
    return rn().memoizedState;
  }
  function Ws(e, t, n, i) {
    var l = Sn();
    ct.flags |= e, l.memoizedState = Vr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Qs(e, t, n, i) {
    var l = rn();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (vt !== null) {
      var h = vt.memoizedState;
      if (u = h.destroy, i !== null && _l(i, h.deps)) {
        l.memoizedState = Vr(t, n, u, i);
        return;
      }
    }
    ct.flags |= e, l.memoizedState = Vr(1 | t, n, u, i);
  }
  function yc(e, t) {
    return Ws(8390656, 8, e, t);
  }
  function Rl(e, t) {
    return Qs(2048, 8, e, t);
  }
  function gc(e, t) {
    return Qs(4, 2, e, t);
  }
  function xc(e, t) {
    return Qs(4, 4, e, t);
  }
  function jc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Sc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Qs(4, 4, jc.bind(null, t, e), n);
  }
  function Ol() {
  }
  function wc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && _l(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function Nc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && _l(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ec(e, t, n) {
    return (gi & 21) === 0 ? (e.baseState && (e.baseState = !1, Bt = !0), e.memoizedState = n) : (dn(n, t) || (n = tu(), ct.lanes |= n, xi |= n, e.baseState = !0), t);
  }
  function vm(e, t) {
    var n = qe;
    qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = Ml.transition;
    Ml.transition = {};
    try {
      e(!1), t();
    } finally {
      qe = n, Ml.transition = i;
    }
  }
  function Cc() {
    return rn().memoizedState;
  }
  function km(e, t, n) {
    var i = ni(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Tc(e)) Mc(t, n);
    else if (n = rc(e, t, n, i), n !== null) {
      var l = Ot();
      vn(n, e, i, l), _c(n, t, i);
    }
  }
  function ym(e, t, n) {
    var i = ni(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Tc(e)) Mc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, dn(k, h)) {
          var j = t.interleaved;
          j === null ? (l.next = l, Sl(t)) : (l.next = j.next, j.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = rc(e, t, l, i), n !== null && (l = Ot(), vn(n, e, i, l), _c(n, t, i));
    }
  }
  function Tc(e) {
    var t = e.alternate;
    return e === ct || t !== null && t === ct;
  }
  function Mc(e, t) {
    Dr = Gs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function _c(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Fa(e, n);
    }
  }
  var Ys = { readContext: nn, useCallback: Mt, useContext: Mt, useEffect: Mt, useImperativeHandle: Mt, useInsertionEffect: Mt, useLayoutEffect: Mt, useMemo: Mt, useReducer: Mt, useRef: Mt, useState: Mt, useDebugValue: Mt, useDeferredValue: Mt, useTransition: Mt, useMutableSource: Mt, useSyncExternalStore: Mt, useId: Mt, unstable_isNewReconciler: !1 }, gm = { readContext: nn, useCallback: function(e, t) {
    return Sn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: nn, useEffect: yc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ws(
      4194308,
      4,
      jc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ws(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ws(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Sn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = Sn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = km.bind(null, ct, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Sn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: vc, useDebugValue: Ol, useDeferredValue: function(e) {
    return Sn().memoizedState = e;
  }, useTransition: function() {
    var e = vc(!1), t = e[0];
    return e = vm.bind(null, e[1]), Sn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = ct, l = Sn();
    if (st) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), gt === null) throw Error(o(349));
      (gi & 30) !== 0 || dc(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, yc(hc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, Vr(9, fc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Sn(), t = gt.identifierPrefix;
    if (st) {
      var n = Pn, i = An;
      n = (i & ~(1 << 32 - wt(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = pm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, xm = {
    readContext: nn,
    useCallback: wc,
    useContext: nn,
    useEffect: Rl,
    useImperativeHandle: Sc,
    useInsertionEffect: gc,
    useLayoutEffect: xc,
    useMemo: Nc,
    useReducer: Pl,
    useRef: kc,
    useState: function() {
      return Pl(Br);
    },
    useDebugValue: Ol,
    useDeferredValue: function(e) {
      var t = rn();
      return Ec(t, vt.memoizedState, e);
    },
    useTransition: function() {
      var e = Pl(Br)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: cc,
    useId: Cc,
    unstable_isNewReconciler: !1
  }, jm = { readContext: nn, useCallback: wc, useContext: nn, useEffect: Rl, useImperativeHandle: Sc, useInsertionEffect: gc, useLayoutEffect: xc, useMemo: Nc, useReducer: Ll, useRef: kc, useState: function() {
    return Ll(Br);
  }, useDebugValue: Ol, useDeferredValue: function(e) {
    var t = rn();
    return vt === null ? t.memoizedState = e : Ec(t, vt.memoizedState, e);
  }, useTransition: function() {
    var e = Ll(Br)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: uc, useSyncExternalStore: cc, useId: Cc, unstable_isNewReconciler: !1 };
  function hn(e, t) {
    if (e && e.defaultProps) {
      t = te({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function $l(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Js = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = Ot(), l = ni(e), u = Rn(i, l);
    u.payload = t, n != null && (u.callback = n), t = Zn(e, u, l), t !== null && (vn(t, e, l, i), Vs(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Ot(), l = ni(e), u = Rn(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Zn(e, u, l), t !== null && (vn(t, e, l, i), Vs(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ot(), i = ni(e), l = Rn(n, i);
    l.tag = 2, t != null && (l.callback = t), t = Zn(e, l, i), t !== null && (vn(t, e, i, n), Vs(t, e, i));
  } };
  function bc(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, i) || !Mr(l, u) : !0;
  }
  function Ac(e, t, n) {
    var i = !1, l = Yn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = nn(u) : (l = zt(t) ? mi : Tt.current, i = t.contextTypes, u = (i = i != null) ? Vi(e, l) : Yn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Js, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Pc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Js.enqueueReplaceState(t, t.state, null);
  }
  function Fl(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, wl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = nn(u) : (u = zt(t) ? mi : Tt.current, l.context = Vi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && ($l(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Js.enqueueReplaceState(l, l.state, null), Ks(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ji(e, t) {
    try {
      var n = "", i = t;
      do
        n += Ne(i), i = i.return;
      while (i);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Il(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Dl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Sm = typeof WeakMap == "function" ? WeakMap : Map;
  function Lc(e, t, n) {
    n = Rn(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ia || (ia = !0, eo = i), Dl(e, t);
    }, n;
  }
  function Rc(e, t, n) {
    n = Rn(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        Dl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Dl(e, t), typeof i != "function" && (ei === null ? ei = /* @__PURE__ */ new Set([this]) : ei.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Oc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Sm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = $m.bind(null, e, t, n), t.then(e, e));
  }
  function $c(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rn(-1, 1), t.tag = 2, Zn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var wm = z.ReactCurrentOwner, Bt = !1;
  function Rt(e, t, n, i) {
    t.child = e === null ? ic(t, null, n, i) : Gi(t, e.child, n, i);
  }
  function Ic(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Qi(t, l), i = bl(e, t, n, i, u, l), n = Al(), e !== null && !Bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (st && n && hl(t), t.flags |= 1, Rt(e, t, i, l), t.child);
  }
  function Dc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !lo(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, zc(e, t, u, i, l)) : (e = ua(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Mr, n(h, i) && e.ref === t.ref) return On(e, t, l);
    }
    return t.flags |= 1, e = ri(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function zc(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Mr(u, i) && e.ref === t.ref) if (Bt = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Bt = !0);
      else return t.lanes = e.lanes, On(e, t, l);
    }
    return zl(e, t, n, i, l);
  }
  function Bc(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(Zi, Jt), Jt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, tt(Zi, Jt), Jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, tt(Zi, Jt), Jt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, tt(Zi, Jt), Jt |= i;
    return Rt(e, t, l, n), t.child;
  }
  function Vc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function zl(e, t, n, i, l) {
    var u = zt(n) ? mi : Tt.current;
    return u = Vi(t, u), Qi(t, l), n = bl(e, t, n, i, u, l), i = Al(), e !== null && !Bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (st && i && hl(t), t.flags |= 1, Rt(e, t, n, l), t.child);
  }
  function Kc(e, t, n, i, l) {
    if (zt(n)) {
      var u = !0;
      Rs(t);
    } else u = !1;
    if (Qi(t, l), t.stateNode === null) Zs(e, t), Ac(t, n, i), Fl(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var j = h.context, F = n.contextType;
      typeof F == "object" && F !== null ? F = nn(F) : (F = zt(n) ? mi : Tt.current, F = Vi(t, F));
      var X = n.getDerivedStateFromProps, q = typeof X == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      q || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || j !== F) && Pc(t, h, i, F), Xn = !1;
      var Q = t.memoizedState;
      h.state = Q, Ks(t, i, h, l), j = t.memoizedState, k !== i || Q !== j || Dt.current || Xn ? (typeof X == "function" && ($l(t, n, X, i), j = t.memoizedState), (k = Xn || bc(t, n, k, i, Q, j, F)) ? (q || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = j), h.props = i, h.state = j, h.context = F, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, sc(e, t), k = t.memoizedProps, F = t.type === t.elementType ? k : hn(t.type, k), h.props = F, q = t.pendingProps, Q = h.context, j = n.contextType, typeof j == "object" && j !== null ? j = nn(j) : (j = zt(n) ? mi : Tt.current, j = Vi(t, j));
      var de = n.getDerivedStateFromProps;
      (X = typeof de == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== q || Q !== j) && Pc(t, h, i, j), Xn = !1, Q = t.memoizedState, h.state = Q, Ks(t, i, h, l);
      var ve = t.memoizedState;
      k !== q || Q !== ve || Dt.current || Xn ? (typeof de == "function" && ($l(t, n, de, i), ve = t.memoizedState), (F = Xn || bc(t, n, F, i, Q, ve, j) || !1) ? (X || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ve, j), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ve, j)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), h.props = i, h.state = ve, h.context = j, i = F) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Bl(e, t, n, i, u, l);
  }
  function Bl(e, t, n, i, l, u) {
    Vc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Qu(t, n, !1), On(e, t, u);
    i = t.stateNode, wm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Gi(t, e.child, null, u), t.child = Gi(t, null, k, u)) : Rt(e, t, k, u), t.memoizedState = i.state, l && Qu(t, n, !0), t.child;
  }
  function Uc(e) {
    var t = e.stateNode;
    t.pendingContext ? Gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gu(e, t.context, !1), Nl(e, t.containerInfo);
  }
  function Hc(e, t, n, i, l) {
    return Hi(), kl(l), t.flags |= 256, Rt(e, t, n, i), t.child;
  }
  var Vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gc(e, t, n) {
    var i = t.pendingProps, l = ut.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), tt(ut, l & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = ca(h, i, 0, null), e = Ni(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Kl(n), t.memoizedState = Vl, e) : Ul(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Nm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var j = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = j, t.deletions = null) : (i = ri(l, j), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = ri(k, u) : (u = Ni(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? Kl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Vl, i;
    }
    return u = e.child, e = u.sibling, i = ri(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Ul(e, t) {
    return t = ca({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Xs(e, t, n, i) {
    return i !== null && kl(i), Gi(t, e.child, null, n), e = Ul(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Nm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Il(Error(o(422))), Xs(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = ca({ mode: "visible", children: i.children }, l, 0, null), u = Ni(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Gi(t, e.child, null, h), t.child.memoizedState = Kl(h), t.memoizedState = Vl, u);
    if ((t.mode & 1) === 0) return Xs(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = Il(u, i, void 0), Xs(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, Bt || k) {
      if (i = gt, i !== null) {
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
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ln(e, l), vn(i, e, l, -1));
      }
      return ao(), i = Il(Error(o(421))), Xs(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Yt = Wn(l.nextSibling), Qt = t, st = !0, fn = null, e !== null && (en[tn++] = An, en[tn++] = Pn, en[tn++] = pi, An = e.id, Pn = e.overflow, pi = t), t = Ul(t, i.children), t.flags |= 4096, t);
  }
  function Wc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), jl(e.return, t, n);
  }
  function Hl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Qc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (Rt(e, t, i.children, n), i = ut.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
        else if (e.tag === 19) Wc(e, n, t);
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
    if (tt(ut, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Us(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Us(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Hl(t, !0, n, null, u);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function On(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), xi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ri(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Em(e, t, n) {
    switch (t.tag) {
      case 3:
        Uc(t), Hi();
        break;
      case 5:
        oc(t);
        break;
      case 1:
        zt(t.type) && Rs(t);
        break;
      case 4:
        Nl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        tt(zs, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (tt(ut, ut.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Gc(e, t, n) : (tt(ut, ut.current & 1), e = On(e, t, n), e !== null ? e.sibling : null);
        tt(ut, ut.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Qc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), tt(ut, ut.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Bc(e, t, n);
    }
    return On(e, t, n);
  }
  var Yc, Gl, Jc, Xc;
  Yc = function(e, t) {
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
  }, Gl = function() {
  }, Jc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, yi(jn.current);
      var u = null;
      switch (n) {
        case "input":
          l = je(e, l), i = je(e, i), u = [];
          break;
        case "select":
          l = te({}, l, { value: void 0 }), i = te({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = He(e, l), i = He(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = As);
      }
      Re(n, i);
      var h;
      n = null;
      for (F in l) if (!i.hasOwnProperty(F) && l.hasOwnProperty(F) && l[F] != null) if (F === "style") {
        var k = l[F];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (d.hasOwnProperty(F) ? u || (u = []) : (u = u || []).push(F, null));
      for (F in i) {
        var j = i[F];
        if (k = l?.[F], i.hasOwnProperty(F) && j !== k && (j != null || k != null)) if (F === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || j && j.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in j) j.hasOwnProperty(h) && k[h] !== j[h] && (n || (n = {}), n[h] = j[h]);
        } else n || (u || (u = []), u.push(
          F,
          n
        )), n = j;
        else F === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, k = k ? k.__html : void 0, j != null && k !== j && (u = u || []).push(F, j)) : F === "children" ? typeof j != "string" && typeof j != "number" || (u = u || []).push(F, "" + j) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (d.hasOwnProperty(F) ? (j != null && F === "onScroll" && it("scroll", e), u || k === j || (u = [])) : (u = u || []).push(F, j));
      }
      n && (u = u || []).push("style", n);
      var F = u;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, Xc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Kr(e, t) {
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
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Cm(e, t, n) {
    var i = t.pendingProps;
    switch (ml(t), t.tag) {
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
        return _t(t), null;
      case 1:
        return zt(t.type) && Ls(), _t(t), null;
      case 3:
        return i = t.stateNode, Yi(), rt(Dt), rt(Tt), Tl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Is(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fn !== null && (io(fn), fn = null))), Gl(e, t), _t(t), null;
      case 5:
        El(t);
        var l = yi(Ir.current);
        if (n = t.type, e !== null && t.stateNode != null) Jc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return _t(t), null;
          }
          if (e = yi(jn.current), Is(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[xn] = t, i[Lr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                it("cancel", i), it("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                it("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < br.length; l++) it(br[l], i);
                break;
              case "source":
                it("error", i);
                break;
              case "img":
              case "image":
              case "link":
                it(
                  "error",
                  i
                ), it("load", i);
                break;
              case "details":
                it("toggle", i);
                break;
              case "input":
                Fe(i, u), it("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, it("invalid", i);
                break;
              case "textarea":
                Oe(i, u), it("invalid", i);
            }
            Re(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && bs(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && bs(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && it("scroll", i);
            }
            switch (n) {
              case "input":
                Ce(i), oe(i, u, !0);
                break;
              case "textarea":
                Ce(i), Je(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = As);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[xn] = t, e[Lr] = i, Yc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = De(n, i), n) {
                case "dialog":
                  it("cancel", e), it("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  it("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < br.length; l++) it(br[l], e);
                  l = i;
                  break;
                case "source":
                  it("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  it(
                    "error",
                    e
                  ), it("load", e), l = i;
                  break;
                case "details":
                  it("toggle", e), l = i;
                  break;
                case "input":
                  Fe(e, i), l = je(e, i), it("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = te({}, i, { value: void 0 }), it("invalid", e);
                  break;
                case "textarea":
                  Oe(e, i), l = He(e, i), it("invalid", e);
                  break;
                default:
                  l = i;
              }
              Re(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var j = k[u];
                u === "style" ? ln(e, j) : u === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && qt(e, j)) : u === "children" ? typeof j == "string" ? (n !== "textarea" || j !== "") && Ht(e, j) : typeof j == "number" && Ht(e, "" + j) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? j != null && u === "onScroll" && it("scroll", e) : j != null && U(e, u, j, h));
              }
              switch (n) {
                case "input":
                  Ce(e), oe(e, i, !1);
                  break;
                case "textarea":
                  Ce(e), Je(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ee(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? _e(e, !!i.multiple, u, !1) : i.defaultValue != null && _e(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = As);
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
        return _t(t), null;
      case 6:
        if (e && t.stateNode != null) Xc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (n = yi(Ir.current), yi(jn.current), Is(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[xn] = t, (u = i.nodeValue !== n) && (e = Qt, e !== null)) switch (e.tag) {
              case 3:
                bs(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && bs(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[xn] = t, t.stateNode = i;
        }
        return _t(t), null;
      case 13:
        if (rt(ut), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (st && Yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ec(), Hi(), t.flags |= 98560, u = !1;
          else if (u = Is(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[xn] = t;
            } else Hi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _t(t), u = !1;
          } else fn !== null && (io(fn), fn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ut.current & 1) !== 0 ? kt === 0 && (kt = 3) : ao())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return Yi(), Gl(e, t), e === null && Ar(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return xl(t.type._context), _t(t), null;
      case 17:
        return zt(t.type) && Ls(), _t(t), null;
      case 19:
        if (rt(ut), u = t.memoizedState, u === null) return _t(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Kr(u, !1);
        else {
          if (kt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Us(e), h !== null) {
              for (t.flags |= 128, Kr(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return tt(ut, ut.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && lt() > qi && (t.flags |= 128, i = !0, Kr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Us(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kr(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !st) return _t(t), null;
          } else 2 * lt() - u.renderingStartTime > qi && n !== 1073741824 && (t.flags |= 128, i = !0, Kr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = lt(), t.sibling = null, n = ut.current, tt(ut, i ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return so(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Jt & 1073741824) !== 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Tm(e, t) {
    switch (ml(t), t.tag) {
      case 1:
        return zt(t.type) && Ls(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yi(), rt(Dt), rt(Tt), Tl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return El(t), null;
      case 13:
        if (rt(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Hi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return rt(ut), null;
      case 4:
        return Yi(), null;
      case 10:
        return xl(t.type._context), null;
      case 22:
      case 23:
        return so(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var qs = !1, bt = !1, Mm = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Xi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      dt(e, t, i);
    }
    else n.current = null;
  }
  function Wl(e, t, n) {
    try {
      n();
    } catch (i) {
      dt(e, t, i);
    }
  }
  var Zc = !1;
  function _m(e, t) {
    if (sl = gs, e = bu(), Xa(e)) {
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
          var h = 0, k = -1, j = -1, F = 0, X = 0, q = e, Q = null;
          t: for (; ; ) {
            for (var de; q !== n || l !== 0 && q.nodeType !== 3 || (k = h + l), q !== u || i !== 0 && q.nodeType !== 3 || (j = h + i), q.nodeType === 3 && (h += q.nodeValue.length), (de = q.firstChild) !== null; )
              Q = q, q = de;
            for (; ; ) {
              if (q === e) break t;
              if (Q === n && ++F === l && (k = h), Q === u && ++X === i && (j = h), (de = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = de;
          }
          n = k === -1 || j === -1 ? null : { start: k, end: j };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (al = { focusedElem: e, selectionRange: n }, gs = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
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
              var ye = ve.memoizedProps, ht = ve.memoizedState, A = t.stateNode, E = A.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : hn(t.type, ye), ht);
              A.__reactInternalSnapshotBeforeUpdate = E;
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
      } catch (ie) {
        dt(t, t.return, ie);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, me = e;
        break;
      }
      me = t.return;
    }
    return ve = Zc, Zc = !1, ve;
  }
  function Ur(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && Wl(t, n, u);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function ea(e, t) {
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
  function Ql(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function qc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xn], delete t[Lr], delete t[cl], delete t[dm], delete t[fm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ed(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function td(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ed(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Yl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = As));
    else if (i !== 4 && (e = e.child, e !== null)) for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), e = e.sibling;
  }
  function Jl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), e = e.sibling;
  }
  var Nt = null, mn = !1;
  function qn(e, t, n) {
    for (n = n.child; n !== null; ) nd(e, t, n), n = n.sibling;
  }
  function nd(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
      Lt.onCommitFiberUnmount(ot, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        bt || Xi(n, t);
      case 6:
        var i = Nt, l = mn;
        Nt = null, qn(e, t, n), Nt = i, mn = l, Nt !== null && (mn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nt.removeChild(n.stateNode));
        break;
      case 18:
        Nt !== null && (mn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? ul(e.parentNode, n) : e.nodeType === 1 && ul(e, n), Sr(e)) : ul(Nt, n.stateNode));
        break;
      case 4:
        i = Nt, l = mn, Nt = n.stateNode.containerInfo, mn = !0, qn(e, t, n), Nt = i, mn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!bt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Wl(n, t, h), l = l.next;
          } while (l !== i);
        }
        qn(e, t, n);
        break;
      case 1:
        if (!bt && (Xi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          dt(n, t, k);
        }
        qn(e, t, n);
        break;
      case 21:
        qn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (bt = (i = bt) || n.memoizedState !== null, qn(e, t, n), bt = i) : qn(e, t, n);
        break;
      default:
        qn(e, t, n);
    }
  }
  function id(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Mm()), t.forEach(function(i) {
        var l = Im.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function pn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Nt = k.stateNode, mn = !1;
              break e;
            case 3:
              Nt = k.stateNode.containerInfo, mn = !0;
              break e;
            case 4:
              Nt = k.stateNode.containerInfo, mn = !0;
              break e;
          }
          k = k.return;
        }
        if (Nt === null) throw Error(o(160));
        nd(u, h, l), Nt = null, mn = !1;
        var j = l.alternate;
        j !== null && (j.return = null), l.return = null;
      } catch (F) {
        dt(l, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rd(t, e), t = t.sibling;
  }
  function rd(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(t, e), wn(e), i & 4) {
          try {
            Ur(3, e, e.return), ea(3, e);
          } catch (ye) {
            dt(e, e.return, ye);
          }
          try {
            Ur(5, e, e.return);
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        break;
      case 1:
        pn(t, e), wn(e), i & 512 && n !== null && Xi(n, n.return);
        break;
      case 5:
        if (pn(t, e), wn(e), i & 512 && n !== null && Xi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ht(l, "");
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, j = e.updateQueue;
          if (e.updateQueue = null, j !== null) try {
            k === "input" && u.type === "radio" && u.name != null && Te(l, u), De(k, h);
            var F = De(k, u);
            for (h = 0; h < j.length; h += 2) {
              var X = j[h], q = j[h + 1];
              X === "style" ? ln(l, q) : X === "dangerouslySetInnerHTML" ? qt(l, q) : X === "children" ? Ht(l, q) : U(l, X, q, F);
            }
            switch (k) {
              case "input":
                $(l, u);
                break;
              case "textarea":
                ze(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var de = u.value;
                de != null ? _e(l, !!u.multiple, de, !1) : Q !== !!u.multiple && (u.defaultValue != null ? _e(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : _e(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Lr] = u;
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (pn(t, e), wn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ye) {
            dt(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (pn(t, e), wn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Sr(t.containerInfo);
        } catch (ye) {
          dt(e, e.return, ye);
        }
        break;
      case 4:
        pn(t, e), wn(e);
        break;
      case 13:
        pn(t, e), wn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (ql = lt())), i & 4 && id(e);
        break;
      case 22:
        if (X = n !== null && n.memoizedState !== null, e.mode & 1 ? (bt = (F = bt) || X, pn(t, e), bt = F) : pn(t, e), wn(e), i & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !X && (e.mode & 1) !== 0) for (me = e, X = e.child; X !== null; ) {
            for (q = me = X; me !== null; ) {
              switch (Q = me, de = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, Q, Q.return);
                  break;
                case 1:
                  Xi(Q, Q.return);
                  var ve = Q.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ye) {
                      dt(i, n, ye);
                    }
                  }
                  break;
                case 5:
                  Xi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    ld(q);
                    continue;
                  }
              }
              de !== null ? (de.return = Q, me = de) : ld(q);
            }
            X = X.sibling;
          }
          e: for (X = null, q = e; ; ) {
            if (q.tag === 5) {
              if (X === null) {
                X = q;
                try {
                  l = q.stateNode, F ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = q.stateNode, j = q.memoizedProps.style, h = j != null && j.hasOwnProperty("display") ? j.display : null, k.style.display = be("display", h));
                } catch (ye) {
                  dt(e, e.return, ye);
                }
              }
            } else if (q.tag === 6) {
              if (X === null) try {
                q.stateNode.nodeValue = F ? "" : q.memoizedProps;
              } catch (ye) {
                dt(e, e.return, ye);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              X === q && (X = null), q = q.return;
            }
            X === q && (X = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        pn(t, e), wn(e), i & 4 && id(e);
        break;
      case 21:
        break;
      default:
        pn(
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
            if (ed(n)) {
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
            i.flags & 32 && (Ht(l, ""), i.flags &= -33);
            var u = td(e);
            Jl(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = td(e);
            Yl(e, k, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        dt(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bm(e, t, n) {
    me = e, sd(e);
  }
  function sd(e, t, n) {
    for (var i = (e.mode & 1) !== 0; me !== null; ) {
      var l = me, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || qs;
        if (!h) {
          var k = l.alternate, j = k !== null && k.memoizedState !== null || bt;
          k = qs;
          var F = bt;
          if (qs = h, (bt = j) && !F) for (me = l; me !== null; ) h = me, j = h.child, h.tag === 22 && h.memoizedState !== null ? od(l) : j !== null ? (j.return = h, me = j) : od(l);
          for (; u !== null; ) me = u, sd(u), u = u.sibling;
          me = l, qs = k, bt = F;
        }
        ad(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, me = u) : ad(e);
    }
  }
  function ad(e) {
    for (; me !== null; ) {
      var t = me;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              bt || ea(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !bt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : hn(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && lc(t, u, i);
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
                lc(t, h, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var j = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && n.focus();
                    break;
                  case "img":
                    j.src && (n.src = j.src);
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
                var F = t.alternate;
                if (F !== null) {
                  var X = F.memoizedState;
                  if (X !== null) {
                    var q = X.dehydrated;
                    q !== null && Sr(q);
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
          bt || t.flags & 512 && Ql(t);
        } catch (Q) {
          dt(t, t.return, Q);
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
  function ld(e) {
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
  function od(e) {
    for (; me !== null; ) {
      var t = me;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ea(4, t);
            } catch (j) {
              dt(t, n, j);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (j) {
                dt(t, l, j);
              }
            }
            var u = t.return;
            try {
              Ql(t);
            } catch (j) {
              dt(t, u, j);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ql(t);
            } catch (j) {
              dt(t, h, j);
            }
        }
      } catch (j) {
        dt(t, t.return, j);
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
  var Am = Math.ceil, ta = z.ReactCurrentDispatcher, Xl = z.ReactCurrentOwner, sn = z.ReactCurrentBatchConfig, We = 0, gt = null, mt = null, Et = 0, Jt = 0, Zi = Qn(0), kt = 0, Hr = null, xi = 0, na = 0, Zl = 0, Gr = null, Vt = null, ql = 0, qi = 1 / 0, $n = null, ia = !1, eo = null, ei = null, ra = !1, ti = null, sa = 0, Wr = 0, to = null, aa = -1, la = 0;
  function Ot() {
    return (We & 6) !== 0 ? lt() : aa !== -1 ? aa : aa = lt();
  }
  function ni(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && Et !== 0 ? Et & -Et : mm.transition !== null ? (la === 0 && (la = tu()), la) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cu(e.type)), e);
  }
  function vn(e, t, n, i) {
    if (50 < Wr) throw Wr = 0, to = null, Error(o(185));
    kr(e, n, i), ((We & 2) === 0 || e !== gt) && (e === gt && ((We & 2) === 0 && (na |= n), kt === 4 && ii(e, Et)), Kt(e, i), n === 1 && We === 0 && (t.mode & 1) === 0 && (qi = lt() + 500, Os && Jn()));
  }
  function Kt(e, t) {
    var n = e.callbackNode;
    mh(e, t);
    var i = vs(e, e === gt ? Et : 0);
    if (i === 0) n !== null && fs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && fs(n), t === 1) e.tag === 0 ? hm(cd.bind(null, e)) : Yu(cd.bind(null, e)), um(function() {
        (We & 6) === 0 && Jn();
      }), n = null;
      else {
        switch (nu(i)) {
          case 1:
            n = gn;
            break;
          case 4:
            n = L;
            break;
          case 16:
            n = he;
            break;
          case 536870912:
            n = Gt;
            break;
          default:
            n = he;
        }
        n = yd(n, ud.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ud(e, t) {
    if (aa = -1, la = 0, (We & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var i = vs(e, e === gt ? Et : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = oa(e, i);
    else {
      t = i;
      var l = We;
      We |= 2;
      var u = fd();
      (gt !== e || Et !== t) && ($n = null, qi = lt() + 500, Si(e, t));
      do
        try {
          Rm();
          break;
        } catch (k) {
          dd(e, k);
        }
      while (!0);
      gl(), ta.current = u, We = l, mt !== null ? t = 0 : (gt = null, Et = 0, t = kt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Oa(e), l !== 0 && (i = l, t = no(e, l))), t === 1) throw n = Hr, Si(e, 0), ii(e, i), Kt(e, lt()), n;
      if (t === 6) ii(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Pm(l) && (t = oa(e, i), t === 2 && (u = Oa(e), u !== 0 && (i = u, t = no(e, u))), t === 1)) throw n = Hr, Si(e, 0), ii(e, i), Kt(e, lt()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wi(e, Vt, $n);
            break;
          case 3:
            if (ii(e, i), (i & 130023424) === i && (t = ql + 500 - lt(), 10 < t)) {
              if (vs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Ot(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ol(wi.bind(null, e, Vt, $n), t);
              break;
            }
            wi(e, Vt, $n);
            break;
          case 4:
            if (ii(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - wt(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = lt() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Am(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = ol(wi.bind(null, e, Vt, $n), i);
              break;
            }
            wi(e, Vt, $n);
            break;
          case 5:
            wi(e, Vt, $n);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Kt(e, lt()), e.callbackNode === n ? ud.bind(null, e) : null;
  }
  function no(e, t) {
    var n = Gr;
    return e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256), e = oa(e, t), e !== 2 && (t = Vt, Vt = n, t !== null && io(t)), e;
  }
  function io(e) {
    Vt === null ? Vt = e : Vt.push.apply(Vt, e);
  }
  function Pm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], u = l.getSnapshot;
          l = l.value;
          try {
            if (!dn(u(), l)) return !1;
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
  function ii(e, t) {
    for (t &= ~Zl, t &= ~na, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function cd(e) {
    if ((We & 6) !== 0) throw Error(o(327));
    er();
    var t = vs(e, 0);
    if ((t & 1) === 0) return Kt(e, lt()), null;
    var n = oa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Oa(e);
      i !== 0 && (t = i, n = no(e, i));
    }
    if (n === 1) throw n = Hr, Si(e, 0), ii(e, t), Kt(e, lt()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wi(e, Vt, $n), Kt(e, lt()), null;
  }
  function ro(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (qi = lt() + 500, Os && Jn());
    }
  }
  function ji(e) {
    ti !== null && ti.tag === 0 && (We & 6) === 0 && er();
    var t = We;
    We |= 1;
    var n = sn.transition, i = qe;
    try {
      if (sn.transition = null, qe = 1, e) return e();
    } finally {
      qe = i, sn.transition = n, We = t, (We & 6) === 0 && Jn();
    }
  }
  function so() {
    Jt = Zi.current, rt(Zi);
  }
  function Si(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, om(n)), mt !== null) for (n = mt.return; n !== null; ) {
      var i = n;
      switch (ml(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ls();
          break;
        case 3:
          Yi(), rt(Dt), rt(Tt), Tl();
          break;
        case 5:
          El(i);
          break;
        case 4:
          Yi();
          break;
        case 13:
          rt(ut);
          break;
        case 19:
          rt(ut);
          break;
        case 10:
          xl(i.type._context);
          break;
        case 22:
        case 23:
          so();
      }
      n = n.return;
    }
    if (gt = e, mt = e = ri(e.current, null), Et = Jt = t, kt = 0, Hr = null, Zl = na = xi = 0, Vt = Gr = null, ki !== null) {
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
  function dd(e, t) {
    do {
      var n = mt;
      try {
        if (gl(), Hs.current = Ys, Gs) {
          for (var i = ct.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Gs = !1;
        }
        if (gi = 0, yt = vt = ct = null, Dr = !1, zr = 0, Xl.current = null, n === null || n.return === null) {
          kt = 1, Hr = t, mt = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, j = t;
          if (t = Et, k.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var F = j, X = k, q = X.tag;
            if ((X.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var Q = X.alternate;
              Q ? (X.updateQueue = Q.updateQueue, X.memoizedState = Q.memoizedState, X.lanes = Q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var de = $c(h);
            if (de !== null) {
              de.flags &= -257, Fc(de, h, k, u, t), de.mode & 1 && Oc(u, F, t), t = de, j = F;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(j), t.updateQueue = ye;
              } else ve.add(j);
              break e;
            } else {
              if ((t & 1) === 0) {
                Oc(u, F, t), ao();
                break e;
              }
              j = Error(o(426));
            }
          } else if (st && k.mode & 1) {
            var ht = $c(h);
            if (ht !== null) {
              (ht.flags & 65536) === 0 && (ht.flags |= 256), Fc(ht, h, k, u, t), kl(Ji(j, k));
              break e;
            }
          }
          u = j = Ji(j, k), kt !== 4 && (kt = 2), Gr === null ? Gr = [u] : Gr.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var A = Lc(u, j, t);
                ac(u, A);
                break e;
              case 1:
                k = j;
                var E = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ei === null || !ei.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var ie = Rc(u, k, t);
                  ac(u, ie);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        md(n);
      } catch (Se) {
        t = Se, mt === n && n !== null && (mt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fd() {
    var e = ta.current;
    return ta.current = Ys, e === null ? Ys : e;
  }
  function ao() {
    (kt === 0 || kt === 3 || kt === 2) && (kt = 4), gt === null || (xi & 268435455) === 0 && (na & 268435455) === 0 || ii(gt, Et);
  }
  function oa(e, t) {
    var n = We;
    We |= 2;
    var i = fd();
    (gt !== e || Et !== t) && ($n = null, Si(e, t));
    do
      try {
        Lm();
        break;
      } catch (l) {
        dd(e, l);
      }
    while (!0);
    if (gl(), We = n, ta.current = i, mt !== null) throw Error(o(261));
    return gt = null, Et = 0, kt;
  }
  function Lm() {
    for (; mt !== null; ) hd(mt);
  }
  function Rm() {
    for (; mt !== null && !hs(); ) hd(mt);
  }
  function hd(e) {
    var t = kd(e.alternate, e, Jt);
    e.memoizedProps = e.pendingProps, t === null ? md(e) : mt = t, Xl.current = null;
  }
  function md(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Cm(n, t, Jt), n !== null) {
          mt = n;
          return;
        }
      } else {
        if (n = Tm(n, t), n !== null) {
          n.flags &= 32767, mt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          kt = 6, mt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        mt = t;
        return;
      }
      mt = t = e;
    } while (t !== null);
    kt === 0 && (kt = 5);
  }
  function wi(e, t, n) {
    var i = qe, l = sn.transition;
    try {
      sn.transition = null, qe = 1, Om(e, t, n, i);
    } finally {
      sn.transition = l, qe = i;
    }
    return null;
  }
  function Om(e, t, n, i) {
    do
      er();
    while (ti !== null);
    if ((We & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (ph(e, u), e === gt && (mt = gt = null, Et = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ra || (ra = !0, yd(he, function() {
      return er(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = sn.transition, sn.transition = null;
      var h = qe;
      qe = 1;
      var k = We;
      We |= 4, Xl.current = null, _m(e, n), rd(n, e), tm(al), gs = !!sl, al = sl = null, e.current = n, bm(n), Ra(), We = k, qe = h, sn.transition = u;
    } else e.current = n;
    if (ra && (ra = !1, ti = e, sa = l), u = e.pendingLanes, u === 0 && (ei = null), pr(n.stateNode), Kt(e, lt()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ia) throw ia = !1, e = eo, eo = null, e;
    return (sa & 1) !== 0 && e.tag !== 0 && er(), u = e.pendingLanes, (u & 1) !== 0 ? e === to ? Wr++ : (Wr = 0, to = e) : Wr = 0, Jn(), null;
  }
  function er() {
    if (ti !== null) {
      var e = nu(sa), t = sn.transition, n = qe;
      try {
        if (sn.transition = null, qe = 16 > e ? 16 : e, ti === null) var i = !1;
        else {
          if (e = ti, ti = null, sa = 0, (We & 6) !== 0) throw Error(o(331));
          var l = We;
          for (We |= 4, me = e.current; me !== null; ) {
            var u = me, h = u.child;
            if ((me.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var j = 0; j < k.length; j++) {
                  var F = k[j];
                  for (me = F; me !== null; ) {
                    var X = me;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ur(8, X, u);
                    }
                    var q = X.child;
                    if (q !== null) q.return = X, me = q;
                    else for (; me !== null; ) {
                      X = me;
                      var Q = X.sibling, de = X.return;
                      if (qc(X), X === F) {
                        me = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = de, me = Q;
                        break;
                      }
                      me = de;
                    }
                  }
                }
                var ve = u.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var ht = ye.sibling;
                      ye.sibling = null, ye = ht;
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
                  Ur(9, u, u.return);
              }
              var A = u.sibling;
              if (A !== null) {
                A.return = u.return, me = A;
                break e;
              }
              me = u.return;
            }
          }
          var E = e.current;
          for (me = E; me !== null; ) {
            h = me;
            var R = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && R !== null) R.return = h, me = R;
            else e: for (h = E; me !== null; ) {
              if (k = me, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ea(9, k);
                }
              } catch (Se) {
                dt(k, k.return, Se);
              }
              if (k === h) {
                me = null;
                break e;
              }
              var ie = k.sibling;
              if (ie !== null) {
                ie.return = k.return, me = ie;
                break e;
              }
              me = k.return;
            }
          }
          if (We = l, Jn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
            Lt.onPostCommitFiberRoot(ot, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        qe = n, sn.transition = t;
      }
    }
    return !1;
  }
  function pd(e, t, n) {
    t = Ji(n, t), t = Lc(e, t, 1), e = Zn(e, t, 1), t = Ot(), e !== null && (kr(e, 1, t), Kt(e, t));
  }
  function dt(e, t, n) {
    if (e.tag === 3) pd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        pd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ei === null || !ei.has(i))) {
          e = Ji(n, e), e = Rc(t, e, 1), t = Zn(t, e, 1), e = Ot(), t !== null && (kr(t, 1, e), Kt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function $m(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Ot(), e.pingedLanes |= e.suspendedLanes & n, gt === e && (Et & n) === n && (kt === 4 || kt === 3 && (Et & 130023424) === Et && 500 > lt() - ql ? Si(e, 0) : Zl |= n), Kt(e, t);
  }
  function vd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ps, ps <<= 1, (ps & 130023424) === 0 && (ps = 4194304)));
    var n = Ot();
    e = Ln(e, t), e !== null && (kr(e, t, n), Kt(e, n));
  }
  function Fm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), vd(e, n);
  }
  function Im(e, t) {
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
    i !== null && i.delete(t), vd(e, n);
  }
  var kd;
  kd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Dt.current) Bt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Bt = !1, Em(e, t, n);
      Bt = (e.flags & 131072) !== 0;
    }
    else Bt = !1, st && (t.flags & 1048576) !== 0 && Ju(t, Fs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Zs(e, t), e = t.pendingProps;
        var l = Vi(t, Tt.current);
        Qi(t, n), l = bl(null, t, i, e, l, n);
        var u = Al();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, zt(i) ? (u = !0, Rs(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, wl(t), l.updater = Js, t.stateNode = l, l._reactInternals = t, Fl(t, i, e, n), t = Bl(null, t, i, !0, u, n)) : (t.tag = 0, st && u && hl(t), Rt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Zs(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = zm(i), e = hn(i, e), l) {
            case 0:
              t = zl(null, t, i, e, n);
              break e;
            case 1:
              t = Kc(null, t, i, e, n);
              break e;
            case 11:
              t = Ic(null, t, i, e, n);
              break e;
            case 14:
              t = Dc(null, t, i, hn(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), zl(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Kc(e, t, i, l, n);
      case 3:
        e: {
          if (Uc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, sc(e, t), Ks(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Ji(Error(o(423)), t), t = Hc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Ji(Error(o(424)), t), t = Hc(e, t, i, n, l);
            break e;
          } else for (Yt = Wn(t.stateNode.containerInfo.firstChild), Qt = t, st = !0, fn = null, n = ic(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Hi(), i === l) {
              t = On(e, t, n);
              break e;
            }
            Rt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return oc(t), e === null && vl(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, ll(i, l) ? h = null : u !== null && ll(i, u) && (t.flags |= 32), Vc(e, t), Rt(e, t, h, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return Gc(e, t, n);
      case 4:
        return Nl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Gi(t, null, i, n) : Rt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Ic(e, t, i, l, n);
      case 7:
        return Rt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Rt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Rt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, tt(zs, i._currentValue), i._currentValue = h, u !== null) if (dn(u.value, h)) {
            if (u.children === l.children && !Dt.current) {
              t = On(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              h = u.child;
              for (var j = k.firstContext; j !== null; ) {
                if (j.context === i) {
                  if (u.tag === 1) {
                    j = Rn(-1, n & -n), j.tag = 2;
                    var F = u.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var X = F.pending;
                      X === null ? j.next = j : (j.next = X.next, X.next = j), F.pending = j;
                    }
                  }
                  u.lanes |= n, j = u.alternate, j !== null && (j.lanes |= n), jl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                j = j.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(o(341));
              h.lanes |= n, k = h.alternate, k !== null && (k.lanes |= n), jl(h, n, t), h = u.sibling;
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
          Rt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Qi(t, n), l = nn(l), i = i(l), t.flags |= 1, Rt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = hn(i, t.pendingProps), l = hn(i.type, l), Dc(e, t, i, l, n);
      case 15:
        return zc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Zs(e, t), t.tag = 1, zt(i) ? (e = !0, Rs(t)) : e = !1, Qi(t, n), Ac(t, i, l), Fl(t, i, l, n), Bl(null, t, i, !0, e, n);
      case 19:
        return Qc(e, t, n);
      case 22:
        return Bc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function yd(e, t) {
    return St(e, t);
  }
  function Dm(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(e, t, n, i) {
    return new Dm(e, t, n, i);
  }
  function lo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function zm(e) {
    if (typeof e == "function") return lo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ee) return 11;
      if (e === G) return 14;
    }
    return 2;
  }
  function ri(e, t) {
    var n = e.alternate;
    return n === null ? (n = an(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ua(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") lo(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case O:
        return Ni(n.children, l, u, t);
      case I:
        h = 8, l |= 8;
        break;
      case se:
        return e = an(12, n, t, l | 2), e.elementType = se, e.lanes = u, e;
      case Y:
        return e = an(13, n, t, l), e.elementType = Y, e.lanes = u, e;
      case fe:
        return e = an(19, n, t, l), e.elementType = fe, e.lanes = u, e;
      case re:
        return ca(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Z:
            h = 10;
            break e;
          case we:
            h = 9;
            break e;
          case Ee:
            h = 11;
            break e;
          case G:
            h = 14;
            break e;
          case le:
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
  function ca(e, t, n, i) {
    return e = an(22, e, i, t), e.elementType = re, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function oo(e, t, n) {
    return e = an(6, e, null, t), e.lanes = n, e;
  }
  function uo(e, t, n) {
    return t = an(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Bm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $a(0), this.expirationTimes = $a(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $a(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function co(e, t, n, i, l, u, h, k, j) {
    return e = new Bm(e, t, n, k, j), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = an(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wl(u), e;
  }
  function Vm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function gd(e) {
    if (!e) return Yn;
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
            if (zt(t.type)) {
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
      if (zt(n)) return Wu(e, n, t);
    }
    return t;
  }
  function xd(e, t, n, i, l, u, h, k, j) {
    return e = co(n, i, !0, e, l, u, h, k, j), e.context = gd(null), n = e.current, i = Ot(), l = ni(n), u = Rn(i, l), u.callback = t ?? null, Zn(n, u, l), e.current.lanes = l, kr(e, l, i), Kt(e, i), e;
  }
  function da(e, t, n, i) {
    var l = t.current, u = Ot(), h = ni(l);
    return n = gd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rn(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Zn(l, t, h), e !== null && (vn(e, l, h, u), Vs(e, l, h)), h;
  }
  function fa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function jd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fo(e, t) {
    jd(e, t), (e = e.alternate) && jd(e, t);
  }
  function Km() {
    return null;
  }
  var Sd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ho(e) {
    this._internalRoot = e;
  }
  ha.prototype.render = ho.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    da(e, t, null, null);
  }, ha.prototype.unmount = ho.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ji(function() {
        da(null, e, null, null);
      }), t[_n] = null;
    }
  };
  function ha(e) {
    this._internalRoot = e;
  }
  ha.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = su();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && ou(e);
    }
  };
  function mo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ma(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function wd() {
  }
  function Um(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var F = fa(h);
          u.call(F);
        };
      }
      var h = xd(t, i, e, 0, null, !1, !1, "", wd);
      return e._reactRootContainer = h, e[_n] = h.current, Ar(e.nodeType === 8 ? e.parentNode : e), ji(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var F = fa(j);
        k.call(F);
      };
    }
    var j = co(e, 0, !1, null, null, !1, !1, "", wd);
    return e._reactRootContainer = j, e[_n] = j.current, Ar(e.nodeType === 8 ? e.parentNode : e), ji(function() {
      da(t, j, n, i);
    }), j;
  }
  function pa(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var j = fa(h);
          k.call(j);
        };
      }
      da(t, h, e, l);
    } else h = Um(n, t, e, l, i);
    return fa(h);
  }
  iu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = vr(t.pendingLanes);
          n !== 0 && (Fa(t, n | 1), Kt(t, lt()), (We & 6) === 0 && (qi = lt() + 500, Jn()));
        }
        break;
      case 13:
        ji(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = Ot();
            vn(i, e, 1, l);
          }
        }), fo(e, 1);
    }
  }, Ia = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Ot();
        vn(t, e, 134217728, n);
      }
      fo(e, 134217728);
    }
  }, ru = function(e) {
    if (e.tag === 13) {
      var t = ni(e), n = Ln(e, t);
      if (n !== null) {
        var i = Ot();
        vn(n, e, t, i);
      }
      fo(e, t);
    }
  }, su = function() {
    return qe;
  }, au = function(e, t) {
    var n = qe;
    try {
      return qe = e, t();
    } finally {
      qe = n;
    }
  }, on = function(e, t, n) {
    switch (t) {
      case "input":
        if ($(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = Ps(i);
              if (!l) throw Error(o(90));
              ge(i), $(i, l);
            }
          }
        }
        break;
      case "textarea":
        ze(e, n);
        break;
      case "select":
        t = n.value, t != null && _e(e, !!n.multiple, t, !1);
    }
  }, ls = ro, fr = ji;
  var Hm = { usingClientEntryPoint: !1, Events: [Rr, zi, Ps, un, Tn, ro] }, Qr = { findFiberByHostInstance: hi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gm = { bundleType: Qr.bundleType, version: Qr.version, rendererPackageName: Qr.rendererPackageName, rendererConfig: Qr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = cs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Qr.findFiberByHostInstance || Km, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var va = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!va.isDisabled && va.supportsFiber) try {
      ot = va.inject(Gm), Lt = va;
    } catch {
    }
  }
  return Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm, Ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mo(t)) throw Error(o(200));
    return Vm(e, t, null, n);
  }, Ut.createRoot = function(e, t) {
    if (!mo(e)) throw Error(o(299));
    var n = !1, i = "", l = Sd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = co(e, 1, !1, null, null, n, !1, i, l), e[_n] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new ho(t);
  }, Ut.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = cs(t), e = e === null ? null : e.stateNode, e;
  }, Ut.flushSync = function(e) {
    return ji(e);
  }, Ut.hydrate = function(e, t, n) {
    if (!ma(t)) throw Error(o(200));
    return pa(null, e, t, !0, n);
  }, Ut.hydrateRoot = function(e, t, n) {
    if (!mo(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = Sd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = xd(t, null, e, 1, n ?? null, l, !1, u, h), e[_n] = t.current, Ar(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ha(t);
  }, Ut.render = function(e, t, n) {
    if (!ma(t)) throw Error(o(200));
    return pa(null, e, t, !1, n);
  }, Ut.unmountComponentAtNode = function(e) {
    if (!ma(e)) throw Error(o(40));
    return e._reactRootContainer ? (ji(function() {
      pa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Ut.unstable_batchedUpdates = ro, Ut.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!ma(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return pa(e, t, n, !1, i);
  }, Ut.version = "18.3.1-next-f1338f8080-20240426", Ut;
}
var Ad;
function tp() {
  if (Ad) return ko.exports;
  Ad = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), ko.exports = ep(), ko.exports;
}
var Pd;
function np() {
  if (Pd) return ka;
  Pd = 1;
  var s = tp();
  return ka.createRoot = s.createRoot, ka.hydrateRoot = s.hydrateRoot, ka;
}
var ip = np();
const rp = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], w = ["e", "B", "G", "D", "A", "E"], b = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], g = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], C = {
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
  }, M = 26, P = 72, S = 30, N = 54, V = 34, T = 11, U = (M + P) / 2, z = S + (c.length - 1) * V + 30, B = (K) => P + K * N, D = (K) => K === 0 ? U : B(K) - N / 2, O = (K) => S + K * V;
  function I(K, ee, J) {
    const pe = a.indexOf(s[K][0]) + Number(J.slice(-1)) - 1, Ce = pe % a.length, ge = o[Ce] + 12 * Math.floor(pe / a.length), xe = K + ee - ge;
    return a[Ce] + (xe < 0 ? "♭" : "♯").repeat(Math.abs(xe));
  }
  function se(K) {
    return [...K.base, ...K.add].sort((ee, J) => ee[0] - J[0]);
  }
  function Z(K, ee, J) {
    const pe = ee + (J ? 1 : 0), Ce = m[pe % m.length], ge = Math.min(...Ce.map(([$]) => $)), xe = Math.max(...Ce.map(([, $]) => $));
    let Te = (K - d % 12 + 12) % 12 - (J ? 8 : 5) + 12 * Math.floor(pe / m.length);
    return ge + Te < 0 && (Te += 12), xe + Te > f.pentatonic && (Te -= 12), {
      strings: Ce.map(($) => $.map((oe) => oe + Te)),
      start: ge + Te,
      end: xe + Te
    };
  }
  function we(K, ee, J) {
    const pe = J[ee], Ce = (K + pe - d % 12 + 12) % 12, ge = d + Ce - pe, xe = c.map((je, Fe) => {
      const Te = ee + (c.length - 1 - Fe) * 3;
      return [Te, Te + 1, Te + 2].map(($) => {
        const oe = Math.floor($ / J.length), ue = J[$ % J.length];
        return ge + ue + 12 * oe - je;
      });
    });
    return {
      strings: xe,
      start: Math.min(...xe.map((je) => je[0])),
      end: Math.max(...xe.map((je) => je.at(-1)))
    };
  }
  function Ee(K, ee) {
    const J = [], pe = Math.ceil(-K.end / 12) * 12;
    for (let ge = pe; K.start + ge <= ee; ge += 12) {
      const xe = K.strings.map((Fe) => Fe.map((Te) => Te + ge).filter((Te) => Te >= 0 && Te <= ee)), je = xe.flat();
      J.push({
        strings: xe,
        start: Math.min(...je),
        end: Math.max(...je),
        partial: K.start + ge < 0 || K.end + ge > ee
      });
    }
    const Ce = J.filter((ge) => !ge.partial);
    return Ce.length ? Ce : J;
  }
  function Y(K) {
    return se(K).length === p;
  }
  function fe(K, ee, J) {
    const pe = Y(ee);
    K.querySelector('[value="3nps"]').disabled = !pe, K.value = pe ? J ?? "3nps" : "pentatonic";
  }
  function G(K, ee, J, pe, Ce) {
    const ge = se(ee).map(([xe]) => xe);
    return pe.map((xe) => {
      const je = xe - 1, Fe = J === "3nps" ? we(K, je, ge) : Z(K, je, ee.base === g), Te = Ce === void 0 ? [Fe] : Ee(Fe, Ce);
      return { number: xe, positions: Te };
    });
  }
  function le(K, ee) {
    const J = K.getBoundingClientRect(), pe = K.querySelectorAll(ee);
    let Ce = 1 / 0;
    pe.forEach((ge) => {
      const xe = ge.getBoundingClientRect();
      let je = 0;
      xe.left < J.left ? je = xe.left - J.left - 8 : xe.right > J.right && (je = xe.right - J.right + 8), Math.abs(je) < Math.abs(Ce) && (Ce = je);
    }), Number.isFinite(Ce) && (K.scrollLeft += Ce);
  }
  function re(K, ee = !1) {
    const J = K === "3nps" ? p : m.length;
    return Array.from({ length: J }, (pe, Ce) => {
      const ge = Ce + 1;
      return '<label class="box-toggle" data-box="' + ge + '"><input type="checkbox" value="' + ge + '"' + (ee && Ce === 0 ? " checked" : "") + "> Boksi " + ge + "</label>";
    }).join("");
  }
  function W(K, ee) {
    const J = se(ee), pe = new Map(J.map(([ge, xe]) => [ge, I(K, ge, xe)])), Ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return J.flatMap(([ge, xe]) => Ce.flatMap(({ suffix: je, base: Fe }) => {
      const Te = Fe.map(([$]) => pe.get((ge + $) % 12));
      return Te.every(Boolean) ? {
        root: (K + ge) % 12,
        degree: Number(String(xe).replace(/\D/g, "")),
        name: Te[0] + je,
        notes: Te,
        base: Fe,
        add: []
      } : [];
    }));
  }
  function ae(K, ee) {
    const J = K.base.map(([ge]) => (K.root + ge) % 12), pe = c.map((ge) => {
      const xe = [];
      for (let je = 0; je <= ee; je++) {
        const Fe = (ge + je) % 12;
        J.includes(Fe) && xe.push({ fret: je, pitch: Fe });
      }
      return xe;
    }), Ce = [];
    for (let ge = 0; ge <= pe.length - 3; ge++)
      for (const xe of pe[ge])
        for (const je of pe[ge + 1])
          if (xe.pitch !== je.pitch)
            for (const Fe of pe[ge + 2]) {
              if (Fe.pitch === xe.pitch || Fe.pitch === je.pitch) continue;
              const Te = [xe.fret, je.fret, Fe.fret], $ = Math.min(...Te), oe = Math.max(...Te);
              if (oe - $ > 3) continue;
              const ue = Array(c.length).fill(null);
              ue.splice(ge, 3, ...Te), Ce.push({ strings: ue, low: $, high: oe });
            }
    return Ce.sort((ge, xe) => ge.high - xe.high || ge.low - xe.low);
  }
  const te = {
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
  function y(K, ee) {
    const J = te[K + ":" + ee];
    if (J) return { frets: J, barre: null };
    let pe = null;
    return x.forEach(({ string: Ce, openPC: ge, shapes: xe }) => {
      const je = xe[ee];
      if (!je) return;
      let Fe = (K - ge + 12) % 12;
      if (Fe + Math.min(...je.filter((oe) => oe !== null)) < 0 && (Fe += 12), pe && pe.fret <= Fe) return;
      const Te = je.map((oe) => oe === null ? null : Fe + oe), $ = Fe > 0 && je.at(-1) === 0 ? { fret: Fe, from: Ce, to: je.length - 1 } : null;
      pe = { fret: Fe, frets: Te, barre: $ };
    }), pe && { frets: pe.frets, barre: pe.barre };
  }
  function ne(K, { frets: ee, barre: J }, pe) {
    const Te = [...c].reverse(), $ = ee.filter((ze) => ze > 0), ue = !$.length || Math.max(...$) <= 4 && (ee.includes(0) || Math.min(...$) === 1) ? 1 : Math.min(...$), Me = (ze) => 24 + ze * 14, _e = (ze) => 30 + (ze - ue) * 18 + 18 / 2, He = 102;
    let Oe = '<svg class="chord-svg" viewBox="0 0 108 ' + (He + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + pe + "-ote paksusta kielestä ohueen: " + ee.map((ze) => ze ?? "x").join(" ") + '">';
    for (let ze = 0; ze <= 4; ze++)
      Oe += '<line class="' + (ze === 0 && ue === 1 ? "nut" : "fret") + '" x1="' + Me(0) + '" y1="' + (30 + ze * 18) + '" x2="' + Me(5) + '" y2="' + (30 + ze * 18) + '"/>';
    return ee.forEach((ze, Je) => {
      Oe += '<line class="string" x1="' + Me(Je) + '" y1="30" x2="' + Me(Je) + '" y2="' + He + '"/>';
    }), ue > 1 && (Oe += '<text class="fret-label" x="15" y="' + (_e(ue) + 4) + '">' + ue + "</text>"), J && (Oe += '<rect class="barre" x="' + (Me(J.from) - 6.5) + '" y="' + (_e(J.fret) - 6.5) + '" width="' + ((J.to - J.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ee.forEach((ze, Je) => {
      if (ze === null) {
        Oe += '<text class="marker" x="' + Me(Je) + '" y="22">×</text>';
        return;
      }
      const pt = (Te[Je] + ze) % 12 === K;
      if (ze === 0) {
        Oe += '<circle class="open' + (pt ? " root-open" : "") + '" cx="' + Me(Je) + '" cy="18" r="4.5"/>';
        return;
      }
      J && ze === J.fret && Je >= J.from && Je <= J.to && !pt || (Oe += '<circle class="' + (pt ? "root" : "tone") + '" cx="' + Me(Je) + '" cy="' + _e(ze) + '" r="6.5"/>');
    }), Oe + "</svg>";
  }
  function ce(K, ee) {
    const J = new URLSearchParams(location.search), pe = s.indexOf(J.get("toonikka")), Ce = J.get("asteikko");
    return {
      rootPC: pe === -1 ? K : pe,
      scaleId: Object.hasOwn(C, Ce) ? Ce : ee
    };
  }
  function Ne(K, ee, J) {
    return K + "?" + new URLSearchParams({ toonikka: s[ee], asteikko: J });
  }
  function H(K, ee, J, {
    boxes: pe = [],
    onlyBoxNotes: Ce = !1,
    automatic: ge = !0,
    focusDegree: xe = "",
    grip: je = null,
    barre: Fe = null,
    label: Te = s[K] + " " + ee.name,
    notes: $ = null,
    targets: oe = !1,
    muteFret: ue = null
  } = {}) {
    const Me = B(J), _e = Me + 48, He = _e + 28, Oe = S - 14, ze = O(c.length - 1) + 14, Je = ze - Oe, pt = ge ? 680 : Math.ceil(He * 0.64), Zt = pe.flatMap((Le) => Le.positions), Ft = {};
    ee.base.forEach(([Le, Re]) => Ft[(K + Le) % 12] = { deg: Re, added: !1 }), ee.add.forEach(([Le, Re]) => Ft[(K + Le) % 12] = { deg: Re, added: !0 });
    const qt = c.map((Le, Re) => !!je && je[Re] === null), Ht = !!je && ue !== null, At = b.filter((Le, Re) => qt[Re]).reverse(), yn = Te + ". " + J + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (At.length ? " Soittamatta jäävät kielet: " + At.join(", ") + "." : "");
    let be = '<svg viewBox="0 0 ' + He + " " + z + '" style="min-width:' + pt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (oe ? "group" : "img") + '" aria-label="' + yn + '">';
    be += '<rect x="' + M + '" y="' + Oe + '" width="' + (P - M) + '" height="' + Je + '" rx="6" fill="#2a2338"/>', be += '<rect x="' + P + '" y="' + Oe + '" width="' + (Me - P) + '" height="' + Je + '" fill="#231a12"/>', be += '<rect x="' + Me + '" y="' + Oe + '" width="' + (He - Me - 4) + '" height="' + Je + '" rx="8" fill="#32251e"/>';
    for (let Le = 1; Le <= J; Le++)
      be += '<line x1="' + B(Le) + '" y1="' + Oe + '" x2="' + B(Le) + '" y2="' + ze + '" stroke="#6f5b47" stroke-width="2"/>';
    be += '<rect x="' + (P - 3) + '" y="' + Oe + '" width="6" height="' + Je + '" rx="2" fill="#d8cbb6"/>', be += '<rect x="' + (_e - 11) + '" y="' + (Oe + 3) + '" width="22" height="' + (Je - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', be += '<rect x="' + (_e - 4) + '" y="' + (Oe + 7) + '" width="3" height="' + (Je - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const ln = (Oe + ze) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Le) => Le <= J).forEach((Le) => be += '<circle cx="' + D(Le) + '" cy="' + ln + '" r="5.5" fill="#7a6550"/>');
    for (let Le = 12; Le <= J; Le += 12)
      be += '<circle cx="' + D(Le) + '" cy="' + (ln - V) + '" r="5.5" fill="#7a6550"/>', be += '<circle cx="' + D(Le) + '" cy="' + (ln + V) + '" r="5.5" fill="#7a6550"/>';
    be += '<text x="' + U + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', be += '<text x="' + P + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', be += '<text x="' + _e + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Le = 1; Le <= J; Le++)
      be += '<text x="' + D(Le) + '" y="' + (z - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Le + "</text>";
    if (pe.forEach(({ number: Le, positions: Re }) => {
      Re.forEach((De) => {
        const Ze = De.partial ? "box-highlight box-partial" : "box-highlight";
        be += '<g class="' + Ze + '" data-box="' + Le + '" aria-hidden="true">';
        const at = De.strings.find((jt) => jt.length), on = (D(at[0]) + D(at.at(-1))) / 2;
        be += '<text class="box-number" x="' + on + '" y="12">' + Le + "</text>", De.strings.forEach((jt, Pt) => {
          if (!jt.length) return;
          const Cn = D(jt[0]) - 16, un = D(jt.at(-1)) - D(jt[0]) + 32;
          be += '<rect class="box-band" x="' + Cn + '" y="' + (O(Pt) - 14) + '" width="' + un + '" height="28" rx="14"/>';
        }), be += "</g>";
      });
    }), c.forEach((Le, Re) => {
      const De = 1 + Re * 0.45, Ze = O(Re), at = qt[Re] && !Ht;
      at ? be += '<text class="muted-mark" x="' + U + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : qt[Re] && ue === 0 || (be += '<line x1="' + (M + 4) + '" y1="' + Ze + '" x2="' + (P - 4) + '" y2="' + Ze + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), be += "<g" + (at ? ' opacity=".35"' : "") + ">", be += '<line x1="' + P + '" y1="' + Ze + '" x2="' + (_e + 5) + '" y2="' + Ze + '" stroke="#b9b9c4" stroke-width="' + De.toFixed(2) + '"/>', be += '<circle cx="' + (_e + 5) + '" cy="' + Ze + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', be += "</g>", be += '<text x="13" y="' + (Ze + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + w[Re] + "</text>";
    }), je && Fe && Fe.fret >= 1 && Fe.fret <= J) {
      const Le = O(Fe.from), Re = O(Fe.to), De = Math.min(Le, Re) - 6, Ze = Math.max(Le, Re) + 6;
      be += '<rect class="barre-indicator" x="' + (D(Fe.fret) - 7) + '" y="' + De + '" width="14" height="' + (Ze - De) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return oe && (be += '<g class="fret-targets">', c.forEach((Le, Re) => {
      for (let De = 0; De <= J; De++) {
        const Ze = De ? b[Re] + "-kieli, " + De + ". nauha" : "vapaa " + b[Re] + "-kieli", at = De ? N : P - M - 6;
        be += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + De + '" data-midi="' + (Le + De) + '" aria-label="' + Ze + '" x="' + (D(De) - at / 2) + '" y="' + (O(Re) - V / 2) + '" width="' + at + '" height="' + V + '" fill="transparent"/>';
      }
    }), be += "</g>"), ($ ?? []).forEach(({ string: Le, fret: Re, label: De, kind: Ze }) => {
      be += '<g class="octave-note octave-' + Ze + '">', be += '<circle cx="' + D(Re) + '" cy="' + O(Le) + '" r="' + T + '"/>', be += '<text x="' + D(Re) + '" y="' + (O(Le) + 3.5) + '" font-size="' + (De.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + De + "</text>", be += "</g>";
    }), je && (be += '<g class="grip-notes">'), ($ ? [] : c).forEach((Le, Re) => {
      for (let De = 0; De <= J; De++) {
        const Ze = (Le + De) % 12;
        if (!(Ze in Ft) || je && je[Re] !== De || Ce && !Zt.some(({ strings: un }) => {
          const Tn = un[Re];
          return Tn.length > 0 && De >= Tn[0] && De <= Tn.at(-1);
        })) continue;
        const at = Ft[Ze], on = at.deg === "1", jt = at.added ? "#f0a13c" : on ? "#4b2fd6" : "#6d4aff", Pt = at.added ? "#1a1430" : "#fff";
        at.deg === xe && (be += '<circle class="focus-note" cx="' + D(De) + '" cy="' + O(Re) + '" r="14.5"/>');
        const Cn = je ? ' data-string="' + (Re + 1) + '" data-fret="' + De + '" data-degree="' + at.deg + '"' : "";
        be += "<circle" + Cn + ' cx="' + D(De) + '" cy="' + O(Re) + '" r="' + T + '" fill="' + jt + '" stroke="' + (on ? "#fff" : "#1a1430") + '" stroke-width="' + (on ? 2.5 : 1) + '"/>', be += '<text x="' + D(De) + '" y="' + (O(Re) + 3.5) + '" font-size="' + (at.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Pt + '" text-anchor="middle">' + at.deg + "</text>";
      }
    }), je && (be += "</g>"), Ht && qt.forEach((Le, Re) => {
      if (!Le) return;
      const De = D(ue), Ze = O(Re);
      be += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + ue + '">', be += '<circle cx="' + De + '" cy="' + Ze + '" r="9" fill="' + (ue === 0 ? "#2a2338" : "#231a12") + '"/>', be += '<text x="' + De + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', be += "</g>";
    }), be += "</svg>", be;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: c,
    PENT_MAJ: g,
    SCALES: C,
    noteName: I,
    scaleNotes: se,
    scaleTriads: W,
    triadGrips: ae,
    chordGrip: y,
    renderChordDiagram: ne,
    selectionFromURL: ce,
    selectionHref: Ne,
    renderBoard: H,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: Y,
    syncBoxSystem: fe,
    fingeringBoxes: G,
    boxOptions: re,
    revealPositions: le
  };
})();
globalThis.MusicMapFretboard = rp;
function xo(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function sp(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function ap(s) {
  const a = sp(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const Ue = globalThis.MusicMapFretboard, Qe = (s) => (s % 12 + 12) % 12, lp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], op = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ie = (s, a = !1, o = !1) => (a ? op : lp)[Qe(s)] + (o ? Math.floor(s / 12) - 1 : ""), oi = (s) => Ue.CHROM[Qe(s)], es = (s, a, o) => Ue.noteName(Qe(s), a, o);
function up(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Qe(s) < 2 ? o - 1 : a[0] === "C" && Qe(s) > 9 ? o + 1 : o;
}
const Xt = ["ohut E", "B", "G", "D", "A", "paksu E"], Qo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Nf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], cp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Mi = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Ke = (s, a) => ({ string: s, fret: a, midi: Ue.OPEN_PITCHES[s] + a });
function cr(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Ke(c, a + f)));
}
const Xe = (s) => `${s.string}:${s.fret}`, Ti = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Ef = (s, a) => a === "maj" ? `${oi(s)}-duurisointu` : a === "min" ? `${oi(s)}-mollisointu` : `${oi(s)}7-sointu`, ts = [
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
], Ld = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Cf(s, a) {
  const o = Ld[a] ?? Ld.E, c = Qe(s - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [Ke(f, d + c)]);
}
const ja = {
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
}, Aa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, ai = (s, a, o, c) => typeof s == "number" && Number.isFinite(s) ? Math.max(a, Math.min(o, s)) : c, Nn = (s, a, o) => a.includes(s) ? s : o;
function Ta(s) {
  const a = { ...ja };
  a.mode = Nn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, c) => o - c) : a.strings, a.strings.length || (a.strings = [...ja.strings]), a.min = Math.round(ai(s.min, 0, 24, a.min)), a.max = Math.round(ai(s.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (a[o] = s[o]);
  return a.check = Nn(s.check, ["class", "pitch"], a.check), a.input = Nn(s.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : a.rounds, a.root = Math.round(ai(s.root, 0, 11, a.root)), a.scale = typeof s.scale == "string" && Object.hasOwn(Ue.SCALES, s.scale) ? s.scale : a.scale, a.box = Math.round(ai(s.box, 0, 5, a.box)), a.order = Nn(s.order, ["random", "up", "down"], a.order), a.chord = Nn(s.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Nn(s.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Nn(s.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ja.intervals]), a.direction = Nn(s.direction, ["up", "down", "both"], a.direction), a.hints = Nn(s.hints, ["off", "always", "fade"], a.hints), a.activity = Nn(s.activity, ["play", "degree"], a.activity), a.minRms = ai(s.minRms, 1e-3, 0.15, a.minRms), a.clarity = ai(s.clarity, 0.85, 0.99, a.clarity), a.stability = ai(s.stability, 120, 800, a.stability), a.cents = ai(s.cents, 10, 45, a.cents), a.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", a;
}
function dp(s, a) {
  const o = new URLSearchParams(s), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ue.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Ta(c);
}
function fp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: Ue.CHROM[s.root],
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
const _i = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, Fn = (s) => s.mode === "scale" && s.order !== "random", Tf = (s) => ["note", "degree"].includes(_i(s)) ? "class" : Fn(s) ? "pitch" : s.check, ya = (s) => _i(s) === "mic", Rd = "musiikin-kartta:harjoittelu", Mf = 3, Ao = () => ({ version: Mf, settings: { ...ja }, stats: {}, recent: [], sessions: [] }), _f = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, kn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function hp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => kn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || kn(s.errors)) && (s.ema === void 0 || kn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || kn(s.emaMs));
}
function mp(s) {
  return !!s && typeof s.id == "string" && kn(s.count) && kn(s.first) && s.first <= s.count && kn(s.ms) && kn(s.at) && (s.solo === void 0 || kn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || kn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Od(s) {
  if (!s) return Ao();
  const a = JSON.parse(s);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !hp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !kn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !mp(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Ta(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: Mf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const $d = 2500, pp = 8e3, Fd = 0.3, ns = (s) => s.ema ?? s.correct / s.attempts, is = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Yo(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (is(s) - $d) / (pp - $d)));
  return ns(s) * 0.65 + a * 0.35;
}
function vp(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Yo(s)) * 3;
}
class Id {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Od(a?.getItem(Rd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Ao();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Rd, JSON.stringify(this.data)), this.warning = "";
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
    const o = _f(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? ns(c) + Fd * (d - ns(c)) : d,
      emaMs: c.attempts ? is(c) + Fd * (a.ms - is(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Od(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Ao(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const kp = 4e3, Dd = 12, yp = 1500;
function gp(s, a) {
  const o = s.left + s.stickyLeft, c = s.right;
  let d = 0;
  if (a.left < o ? d = a.left - o - Dd : a.right > c && (d = a.right - c + Dd), d === 0) return null;
  const f = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(f - s.scrollLeft) < 1 ? null : f;
}
function xp(s, a) {
  return a.right <= s.left + s.stickyLeft || a.left >= s.right;
}
function bf(s, a, o, { stickySelector: c, enabled: d = !0, playback: f } = {}) {
  const p = _.useRef(0), m = _.useRef(!1), w = _.useRef(""), b = _.useRef(0), v = _.useRef(f);
  _.useEffect(() => {
    const g = s.current;
    if (!g || !d) return;
    const C = () => {
      p.current = Date.now() + kp;
    }, M = () => {
      m.current = !0, C();
    }, P = () => {
      m.current && (m.current = !1, C());
    }, S = (N) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(N.key) && C();
    };
    return g.addEventListener("pointerdown", M, { passive: !0 }), g.addEventListener("touchstart", M, { passive: !0 }), g.addEventListener("wheel", C, { passive: !0 }), g.addEventListener("keydown", S), window.addEventListener("pointerup", P, { passive: !0 }), window.addEventListener("pointercancel", P, { passive: !0 }), window.addEventListener("touchend", P, { passive: !0 }), window.addEventListener("touchcancel", P, { passive: !0 }), () => {
      g.removeEventListener("pointerdown", M), g.removeEventListener("touchstart", M), g.removeEventListener("wheel", C), g.removeEventListener("keydown", S), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), window.removeEventListener("touchend", P), window.removeEventListener("touchcancel", P);
    };
  }, [s, d]), _.useLayoutEffect(() => {
    const g = f !== void 0 && !!f && f !== v.current;
    v.current = f, g && !m.current && (p.current = 0);
  }, [f]), _.useLayoutEffect(() => {
    f === void 0 && w.current === "" && o !== "" && Date.now() - b.current > yp && !m.current && (p.current = 0), w.current !== "" && o === "" && (b.current = Date.now()), w.current = o;
    const g = s.current;
    if (!g || !d || !o || m.current || Date.now() < p.current) return;
    const C = g.querySelector(a);
    if (!C) return;
    const M = g.getBoundingClientRect(), P = C.getBoundingClientRect(), S = c ? g.querySelector(c) : null, N = S && getComputedStyle(S).position === "sticky" ? S.getBoundingClientRect().width : 0, V = {
      left: M.left,
      right: M.left + g.clientWidth,
      scrollLeft: g.scrollLeft,
      maxScroll: g.scrollWidth - g.clientWidth,
      stickyLeft: N
    }, T = gp(V, P);
    if (T === null) return;
    const z = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || xp(V, P);
    typeof g.scrollTo == "function" ? g.scrollTo({ left: T, behavior: z ? "auto" : "smooth" }) : g.scrollLeft = T;
  }, [s, a, o, c, d, f]);
}
const jp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Sp = ["e", "B", "G", "D", "A", "E"];
function Af({ string: s }) {
  return /* @__PURE__ */ r.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ r.jsx("strong", { children: Sp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ r.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ r.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Pf = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), wp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Lf({ min: s, max: a }) {
  return /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - s + 1 }, (o, c) => {
      const d = s + c;
      return /* @__PURE__ */ r.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : jp.has(d) ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ui({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints", playback: m }) {
  const w = { "--cols": s.max - s.min + 1 }, { strings: b, min: v, max: g } = s, [C, M] = _.useState({ string: Math.min(...b), fret: v }), P = _.useRef(null), S = new Map(a.map((B) => [Xe(B), B])), N = a.map((B) => `${Xe(B)}${B.kind}`).join(",");
  _.useEffect(() => {
    if (p !== "hints") return;
    const B = P.current, D = B?.querySelector(".target, .anchor");
    B && D && (B.scrollLeft += D.getBoundingClientRect().left - B.getBoundingClientRect().left - B.clientWidth / 2 + D.clientWidth / 2);
  }, [N, p]), _.useEffect(() => {
    p === "playing" && P.current && (P.current.scrollLeft = 0);
  }, [p, v, g]);
  const V = a.find((B) => B.kind === "playing");
  bf(P, ".playing", V ? Xe(V) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [T, U] = _.useState({ left: !1, right: !1 });
  _.useEffect(() => {
    const B = P.current;
    if (!B) return;
    const D = () => {
      const I = B.scrollLeft > 2, se = B.scrollLeft + B.clientWidth < B.scrollWidth - 2;
      U((Z) => Z.left === I && Z.right === se ? Z : { left: I, right: se });
    };
    D(), B.addEventListener("scroll", D, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return O?.observe(B), () => {
      B.removeEventListener("scroll", D), O?.disconnect();
    };
  }, [N, v, g]);
  const z = b.includes(C.string) && C.fret >= v && C.fret <= g ? C : { string: Math.min(...b), fret: v };
  return /* @__PURE__ */ r.jsxs("div", { className: "fret-wrap" + (T.left ? " more-left" : "") + (T.right ? " more-right" : ""), children: [
    (T.left || T.right) && /* @__PURE__ */ r.jsxs("p", { className: "fret-scroll-hint", children: [
      T.left && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      T.left && T.right ? "molemmilla puolilla" : T.right ? "oikealla" : "vasemmalla",
      T.right && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { ref: P, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board", style: w, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx(Lf, { min: v, max: g }),
      /* @__PURE__ */ r.jsx("tbody", { children: Ue.OPEN_PITCHES.map((B, D) => /* @__PURE__ */ r.jsxs("tr", { className: b.includes(D) ? "" : "unused", style: Pf(D), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${Xt[D]}${o.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(Af, { string: D }),
          o.includes(D) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        cr([D], v, g).map((O) => {
          const I = S.get(Xe(O)), se = `${Xt[D]}-kieli, ${Mi(O.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${I ? I.kind === "answer" ? "target" : I.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": O.fret,
              tabIndex: z.string === D && z.fret === O.fret ? 0 : -1,
              onFocus: () => M(O),
              onKeyDown: (Z) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key)) return;
                Z.preventDefault();
                const we = [...b].sort((G, le) => G - le), Ee = we.indexOf(D), Y = Z.key === "ArrowUp" ? we[Math.max(0, Ee - 1)] : Z.key === "ArrowDown" ? we[Math.min(we.length - 1, Ee + 1)] : D, fe = Z.key === "Home" ? v : Z.key === "End" ? g : Math.max(v, Math.min(g, O.fret + (Z.key === "ArrowRight" ? 1 : Z.key === "ArrowLeft" ? -1 : 0)));
                Z.currentTarget.closest("table")?.querySelector(`button[data-string="${Y}"][data-fret="${fe}"]`)?.focus();
              },
              disabled: c || !b.includes(D),
              "aria-label": se + (I ? `, ${wp[I.kind]}${I.label ? " " + I.label : ""}` : ""),
              onClick: () => d?.(O),
              children: I ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: I.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function Np({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, w = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx(Lf, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: Ue.OPEN_PITCHES.map((b, v) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Pf(v), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Xt[v]}`, children: /* @__PURE__ */ r.jsx(Af, { string: v }) }),
      cr([v], p, m).map((g) => {
        const C = Object.hasOwn(a, w + Xe(g)) ? a[w + Xe(g)] : void 0, M = Yo(C), P = M === null ? "unseen" : C.attempts < 3 ? "few" : M >= 0.8 ? "strong" : M >= 0.5 ? "growing" : "weak", S = `${Xt[v]}-kieli, ${Mi(g.fret)}, ${Ie(g.midi, d)}`, N = C ? `${Math.round(M * 100)} %, ${C.correct}/${C.attempts} heti oikein, viime aikoina ${Math.round(ns(C) * 100)} % ja ${(is(C) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${g.fret === 0 ? "open-fret " : ""}${P}`, title: `${S}: ${N}`, children: [
          /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: M === null ? "·" : C.attempts < 3 ? "?" : Math.round(M * 100) }),
          /* @__PURE__ */ r.jsxs("span", { className: "sr-only", children: [
            S,
            ": ",
            N
          ] })
        ] }, g.fret);
      })
    ] }, v)) })
  ] }) });
}
const Ep = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Pa = (s) => s.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[s.scale]) : Ti[s.mode === "caged" ? "maj" : s.chord].tones, Rf = (s) => Ue.fingeringBoxes(s.root, Ue.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function bi(s) {
  if (s.mode === "caged") {
    const a = Cf(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const a = Rf(s);
    return { strings: s.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function Cp(s) {
  const a = bi(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function ss(s) {
  const a = bi(s), o = cr(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Qe(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(Cf(s.root, s.shape).map(Xe));
    return o.filter((p) => f.has(Xe(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => Pa(s).some(([p]) => Qe(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return c;
  const d = Rf(s);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function Of(s, a) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((c) => s.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function Tp(s) {
  const a = Pa(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function Po(s) {
  const a = ss(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = Tp(s).filter(([d]) => !a.some((f) => Qe(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !Of(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Fn(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Mp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function $f(s) {
  return Fn(s) ? new Set(ss(s).map((a) => a.midi)).size : s.rounds;
}
function _p(s, a) {
  return s.hints === "always" ? 2 : s.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function tr(s, a, o = Math.random) {
  if (!s.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, o()));
  if (!(c > 0)) return s[Math.floor(d * s.length)];
  let f = d * c;
  for (let p = 0; p < s.length; p++)
    if (f -= a[p], f < 0) return s[p];
  return s.at(-1);
}
const zd = (s, a) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${a}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${a}:${s.activity}` : `scale:${s.root}:${s.scale}:${a}:${s.activity}`;
function Ei(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function bp(s, a, o = {}, c, d = Math.random) {
  const f = Po(s);
  if (f) throw new Error(f);
  const p = Tf(s), m = _i(s), w = p === "pitch", b = (O) => s.weak ? vp(o[_f({ input: m, check: p, hint: !1, item: O })]) : 1, v = (O) => tr(O, O.map(() => 1), d), g = ss(s), C = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const O = Ei(g, (Z) => !!c && Xe(Z) === Xe(c.position)), I = tr(O, O.map((Z) => b(`notes:${Xe(Z)}`)), d), se = Ie(I.midi, s.flats, w);
    return {
      ...C,
      position: I,
      midi: I.midi,
      name: se,
      item: `notes:${Xe(I)}`,
      prompt: `Etsi ${se} ${Qo[I.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const O = (we) => `ear-note:${Qe(we.midi)}${s.reference ? ":ref" : ""}`, I = Ei(g, (we) => !!c && Qe(we.midi) === Qe(c.midi)), se = tr(I, I.map((we) => b(O(we))), d), Z = s.reference ? 57 + 12 * Math.round((se.midi - 57) / 12) : void 0;
    return {
      ...C,
      position: se,
      midi: se.midi,
      name: Ie(se.midi, s.flats),
      item: O(se),
      choices: "note",
      reference: Z,
      sound: Z === void 0 ? [se.midi] : [Z, se.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const O = Ei(g, (se) => !!c && se.midi === c.midi), I = tr(O, O.map((se) => b(`repeat:${se.midi}`)), d);
    return {
      ...C,
      position: I,
      midi: I.midi,
      name: Ie(I.midi, s.flats, !0),
      item: `repeat:${I.midi}`,
      sound: [I.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const O = Ei(Of(s, g), (Z) => c?.interval === Z.iv && c?.direction === Z.direction), I = tr(O, O.map((Z) => b(`interval:${Z.iv}:${Z.direction}`)), d), se = v(Ei(I.pairs, (Z) => c?.reference === Z.reference.midi));
    return {
      ...C,
      position: se.target,
      midi: se.target.midi,
      name: Ie(se.target.midi, s.flats, !0),
      item: `interval:${I.iv}:${I.direction}`,
      interval: I.iv,
      direction: I.direction,
      reference: se.reference.midi,
      sound: [se.reference.midi, se.target.midi],
      prompt: `Kuulet ${I.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ie(se.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const M = Pa(s);
  let P, S = 0;
  if (Fn(s)) {
    const O = Mp(s, g);
    S = O.length, P = O[a % O.length];
  } else {
    const O = M.filter(([Z]) => g.some((we) => Qe(we.midi - s.root) === Z)), I = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [M[a % M.length]] : M.filter(([, Z]) => Z.endsWith(s.chordTone)) : Ei(O, ([Z]) => c?.interval === Z), [se] = tr(I, I.map(([Z]) => b(zd(s, Z))), d);
    P = v(Ei(g.filter((Z) => Qe(Z.midi - s.root) === se), (Z) => !!c && Xe(Z) === Xe(c.position)));
  }
  const N = Qe(P.midi - s.root), V = M.find(([O]) => O === N)[1], T = es(s.root, N, V), U = w ? T + up(P.midi, T) : T, z = s.mode === "scale" ? `${oi(s.root)}-${Ue.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${oi(s.root)}-duurisointu, ${s.shape}-muoto` : Ef(s.root, s.chord), B = s.mode !== "caged" && s.activity === "degree", D = B ? `${z}: mikä aste on ${T}?` : S ? `${z} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % S + 1}/${S}: ${V}. aste (${U}).` : `${z}: etsi ${V}. aste${w ? ` (${U})` : ""}.`;
  return {
    ...C,
    position: P,
    midi: P.midi,
    name: U,
    item: zd(s, N),
    prompt: D,
    degree: V,
    interval: N,
    choices: B ? "degree" : "position"
  };
}
function Lo(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Qe(s) === Qe(a) : s === a);
}
function Ff(s, a, o) {
  return Lo(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : Ep(s) ? ss(s).some((c) => Xe(c) === Xe(o)) : !0 : !1;
}
function Ap(s, a) {
  const o = bi(s);
  return cr(o.strings, o.min, o.max).filter((c) => Ff(s, a, c));
}
const Ct = (s, a, o) => ({ ...s, label: a, kind: o }), Pp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function Lp(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = bi(s), f = cr(d.strings, d.min, d.max), p = Ap(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((V) => Ct(V, a.name, "answer")), text: `${a.name} on ${Nf[a.position.string]}: ${Mi(a.position.fret)}.` };
    const S = f.find((V) => V.string === a.position.string), N = Ie(S.midi, s.flats);
    return {
      marks: [Ct(S, N, "anchor")],
      text: `Apupiste: ${cp[S.string]} ${S.fret === 0 ? "vapaa sävel" : S.fret + ". nauhan sävel"} on ${N}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [Ct(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Ct(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Xt[a.position.string]}-kieli, ${Mi(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((S) => Ct(S, Ie(S.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Qo[a.position.string]}.` };
  if (s.mode === "interval") {
    const S = Ie(a.reference, s.flats, !0), N = f.filter((V) => V.midi === a.reference).map((V) => Ct(V, S, "anchor"));
    return c ? {
      marks: [...N, ...p.map((V) => Ct(V, Ie(V.midi, s.flats, !0), "answer"))],
      text: `${Pp(ts[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${S} → ${a.name}.`
    } : { marks: N, text: `Alkusävel ${S} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = ss(s), w = Pa(s), b = (S) => w.find(([N]) => N === Qe(S.midi - s.root))?.[1] ?? "", v = es(s.root, a.interval, a.degree), g = m.filter((S) => Qe(S.midi - s.root) === 0), C = (S) => p.some((N) => Xe(N) === Xe(S)), M = `${a.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((S) => Ct(S, b(S), C(S) ? "answer" : "shape")), text: M } : { marks: m.map((S) => Ct(S, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const P = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const S = m.filter((N) => Qe(N.midi) === Qe(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : g).map((N) => Ct(N, "1", "anchor")), ...S.map((N) => Ct(N, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: S.map((N) => Ct(N, v, "shape")), text: `Katso ${P} nimeä: mikä on sen perussävel?` } : {
      marks: [...g.map((N) => Ct(N, "1", "anchor")), ...S.map((N) => Ct(N, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...g.filter((S) => !C(S)).map((S) => Ct(S, "1", "anchor")), ...p.map((S) => Ct(S, a.degree, "answer"))], text: M } : a.interval === 0 ? { marks: [], text: `1. aste on ${P} perussävel ${oi(s.root)}.` } : { marks: g.map((S) => Ct(S, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Rp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = $f(a);
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
      this.question = bp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = _p(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? Lo(f.midi, a, "class") : o === "board" ? !!c && Ff(this.settings, f, c) : Lo(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, w = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Xe(m)}` : f.item,
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
    return m ? w.position = Xe(m) : this.settings.mode === "notes" && (w.position = Xe(f.position)), this.results.push(w), this.record(w), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Ro(s) {
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
const Oo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], rr = (s) => Oo.find(([a]) => a === s)?.[1] ?? s;
function $t({ label: s, children: a }) {
  const o = _.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    _.cloneElement(a, { id: o })
  ] });
}
function Bd({ legend: s, name: a, value: o, options: c, onChange: d, disabled: f }) {
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
function Vd(s) {
  const a = bi(s), o = $f(s), c = _i(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Aa[s.hints].title} · ${d} · ${Fn(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Kd({ s, change: a, locked: o, problem: c }) {
  const d = _.useId(), f = (v, g) => a({ ...s, [v]: g }), p = bi(s), m = _i(s) === "note" || _i(s) === "degree", w = ["scale", "chord", "caged"].includes(s.mode), b = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx($t, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: Oo.map(([v, g]) => /* @__PURE__ */ r.jsx("option", { value: v, children: g }, v)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: Oo.find(([v]) => v === s.mode)[2] })
    ] }),
    w && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx($t, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: Ue.CHROM.map((v, g) => /* @__PURE__ */ r.jsx("option", { value: g, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx($t, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(Ue.SCALES).map(([v, g]) => /* @__PURE__ */ r.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ r.jsx($t, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ r.jsxs("select", { value: s.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ r.jsx($t, { label: "Sävelten järjestys", children: /* @__PURE__ */ r.jsxs("select", { value: s.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ r.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ r.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx($t, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ti).map(([v, g]) => /* @__PURE__ */ r.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ r.jsx($t, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ r.jsxs("select", { value: s.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
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
      s.mode === "caged" ? /* @__PURE__ */ r.jsx($t, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ r.jsx("select", { value: s.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ r.jsx($t, { label: "Tehtävä", children: /* @__PURE__ */ r.jsxs("select", { value: s.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ r.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ r.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (g) => f("intervals", g.target.checked ? [...s.intervals, v] : s.intervals.filter((C) => C !== v)) }),
        ts[v]
      ] }, v)) }),
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx($t, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ r.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ r.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Bd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Aa[v] }))
      }
    ),
    m ? /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ r.jsx(Bd, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ r.jsx($t, { label: "Kierroksen pituus", children: /* @__PURE__ */ r.jsxs("select", { value: s.rounds, disabled: Fn(s), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ r.jsx($t, { label: "Vastausten tarkistus", children: /* @__PURE__ */ r.jsxs("select", { value: Fn(s) ? "pitch" : s.check, disabled: Fn(s), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ r.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ r.jsx($t, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ r.jsxs("select", { value: String(s.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ r.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ r.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Fn(s) && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
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
          /* @__PURE__ */ r.jsx($t, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ r.jsx($t, { label: "Viimeinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: Xt.map((v, g) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.strings.includes(g), onChange: (C) => f("strings", C.target.checked ? [...s.strings, g] : s.strings.filter((M) => M !== g)) }),
          g + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "check-row", children: [
        b && /* @__PURE__ */ r.jsxs("label", { children: [
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
const Ud = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Op(s) {
  return s && Object.hasOwn(Ud, s) ? Ud[s] : null;
}
const $p = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Fp({ onSelect: s }) {
  return /* @__PURE__ */ r.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ r.jsx("div", { className: "learning-grid", children: $p.map((a) => /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(a.id), children: [
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
function Ip({ onBack: s, onNotes: a }) {
  return /* @__PURE__ */ r.jsxs("section", { className: "learning-home ear-exercise-menu", "aria-labelledby": "ear-exercise-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("h2", { id: "ear-exercise-title", children: "Sävelkorva ja otelauta" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse harjoitus. Voit aloittaa sävelten paikoista tai opetella kuuntelemalla." }),
    /* @__PURE__ */ r.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: a, children: [
        /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Sävelten etsintä" }),
          /* @__PURE__ */ r.jsx("span", { children: "Etsi seitsemän eri sävelen sijainnit kitaran otelaudalta. Aloita C-sävelestä." }),
          /* @__PURE__ */ r.jsx("small", { children: "Avaa harjoitus" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ r.jsxs("a", { className: "learning-card", href: "riffikaiku.html", children: [
        /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Riffikaiku (beta)" }),
          /* @__PURE__ */ r.jsx("span", { children: "Kuuntele lyhyt kitarariffi ja toista se virtuaalikitaralla tai oikealla kitaralla." }),
          /* @__PURE__ */ r.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ r.jsxs("a", { className: "learning-card", href: "pelit/ensikeikka/", children: [
        /* @__PURE__ */ r.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ r.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Ensikeikka (beta)" }),
          /* @__PURE__ */ r.jsx("span", { children: "Kuuntele kappaleita ja löydä melodian kotisävel viiden kappaleen ensikeikassa." }),
          /* @__PURE__ */ r.jsx("small", { children: "Avaa peli" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const Dp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, $o = 100, If = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Jo(s) {
  if (s === null || s.trim() === "") return $o;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : $o;
}
function zp() {
  try {
    return Jo(localStorage.getItem(If));
  } catch {
    return $o;
  }
}
function Bp(s) {
  try {
    localStorage.setItem(If, String(Jo(String(s))));
  } catch {
  }
}
function jo(s, a, o = !0) {
  return o ? Dp[s] * Jo(String(a)) / 100 : 0;
}
function Df(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const zf = 0.12, Vp = 2e3, Bf = 3, Hd = 1e-3, Kp = zf, Gd = 1500, Up = 4e3;
function Vf(s) {
  return s.readyState >= Bf && !s.seeking;
}
function Kf(s) {
  return s.every(Vf);
}
function Hp(s) {
  let a = 0;
  for (const o of s)
    if (!Vf(o))
      try {
        const c = o.play();
        o.pause(), c && typeof c.catch == "function" && c.catch(() => {
        }), a++;
      } catch {
      }
  return a;
}
function Gp(s, a, o, c = {
  set: (d, f) => setTimeout(d, f),
  clear: (d) => clearTimeout(d)
}) {
  return new Promise((d) => {
    const f = ["loadeddata", "canplay", "canplaythrough", "seeked", "error"];
    let p = !1, m = null;
    const w = c.set(() => b("aikakatkaisu"), a);
    function b(C) {
      if (!p) {
        p = !0, c.clear(w), m !== null && c.clear(m);
        for (const M of s) for (const P of f) M.removeEventListener(P, v);
        d(C);
      }
    }
    function v() {
      o() ? b("ohitettu") : s.some((C) => C.error) ? b("virhe") : Kf(s) && b("valmis");
    }
    const g = () => {
      v(), p || (m = c.set(g, 50));
    };
    for (const C of s) for (const M of f) C.addEventListener(M, v);
    v(), p || (m = c.set(g, 50));
  });
}
function Wp(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= zf || s.seeking || s.readyState < Bf ? !1 : s.msSinceLastFix >= Vp;
}
const Qp = 1.5, Yp = 0.4, Jp = 0.5;
let Fo = null, Xp = null;
function Zp(s) {
  return Fo !== null ? Fo : (Xp ??= Df()) ? 0 : Yp;
}
class Uf {
  constructor(a = Zp()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  holdUntil = -1 / 0;
  /**
   * Pidättää korjauskelaukset hetkeen until (performance.now) asti, esimerkiksi toiston alun
   * vakiintumisen ajaksi. Pakotettu tahdistus (käyttäjän kelaus, raidan päälle kytkentä) tehdään silti.
   */
  hold(a) {
    this.holdUntil = a;
  }
  /**
   * Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä.
   * tolerance = ero (s), jota pienempää ei kelata (toiston alussa START_ALIGN_TOLERANCE_SECONDS).
   */
  align(a, o, c = !1, d = performance.now(), f = Hd) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused) || !c && d < this.holdUntil) return !1;
    const p = o.currentTime - a.currentTime, m = Math.abs(p), w = a.loop && Number.isFinite(a.duration) && Math.abs(m - a.duration) < 0.35, b = this.lastFix.get(o);
    if (!Wp({
      drift: m,
      atLoopBoundary: w,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: b === void 0 ? 1 / 0 : d - b
    }, c)) return !1;
    const v = !a.paused;
    !c && v && b !== void 0 && (this.latency = Math.min(Qp, Math.max(0, this.latency - Jp * p)), Fo = this.latency);
    let g = a.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(o.duration) && (g = Math.min(g, Math.max(0, o.duration - 0.05))), Math.abs(o.currentTime - g) < Math.max(f, Hd)) return !1;
    try {
      o.currentTime = g;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function qp(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function ev(s = qp(), a = () => Df()) {
  return s ? "webaudio" : a() ? "element" : "webaudio";
}
function tv(s = globalThis.navigator) {
  const a = s?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const nv = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class iv {
  constructor(a = nv, o = globalThis.navigator) {
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
        tv(this.nav);
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
const rv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", sv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Wd(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Hf() {
  const s = _.useRef(null), a = _.useRef(null), [o, c] = _.useState(!1), [d, f] = _.useState(!1), [p, m] = _.useState(!1), [w, b] = _.useState(0), [v, g] = _.useState(0), [C, M] = _.useState(""), P = _.useRef(new Uf());
  function S(z = !1) {
    const B = s.current, D = a.current;
    !B || !D || !Number.isFinite(B.currentTime) || P.current.align(B, D, z);
  }
  function N() {
    s.current?.pause(), a.current?.pause(), c(!1);
  }
  async function V() {
    const z = s.current, B = a.current;
    if (!(!z || !B)) {
      if (o) {
        N();
        return;
      }
      M(""), B.muted = !d, B.volume = 0.55, z.volume = 0.75, S(!0);
      try {
        await Promise.all(d ? [z.play(), B.play()] : [z.play()]), S(), c(!0);
      } catch {
        N(), M("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function T(z) {
    const B = s.current, D = a.current;
    if (!(!B || !D || !Number.isFinite(z))) {
      B.currentTime = z;
      try {
        D.currentTime = z;
      } catch {
      }
      b(z);
    }
  }
  function U(z) {
    const B = s.current, D = a.current;
    if (f(z), !!D) {
      if (D.muted = !z, !z) {
        D.pause();
        return;
      }
      !B || !o || (S(!0), D.play().catch(() => M("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return _.useEffect(() => {
    const z = () => {
      document.hidden && (s.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", z), () => {
      document.removeEventListener("visibilitychange", z), s.current?.pause(), a.current?.pause();
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
              onChange: (z) => U(z.target.checked)
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
              onChange: (z) => m(z.target.checked)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ r.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        V();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(w, v > 0 ? v : 1),
          disabled: !v,
          onChange: (z) => T(Number(z.target.value))
        }
      ),
      /* @__PURE__ */ r.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Wd(w),
        " / ",
        Wd(v)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: rv,
        loop: p,
        onLoadedMetadata: (z) => g(z.currentTarget.duration),
        onTimeUpdate: (z) => {
          b(z.currentTarget.currentTime), z.currentTarget.paused || S();
        },
        onEnded: () => {
          s.current?.loop || (a.current?.pause(), c(!1), b(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => M("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: sv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const z = s.current, B = a.current;
          z?.duration && B?.duration && Math.abs(z.duration - B.duration) > 0.15 && M("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => M("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    C && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: C }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const av = 4e3;
class Qd extends Error {
  name = "MicSetupError";
}
async function lv(s, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Qd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
      let b;
      await Promise.race([
        d.resume(),
        new Promise((v, g) => {
          b = setTimeout(() => g(new Qd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), av);
        })
      ]).finally(() => clearTimeout(b));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], w = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: w.deviceId ?? "",
      channelCount: w.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((b) => b.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), f;
  }
}
async function ov() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var So, Yd;
function uv() {
  if (Yd) return So;
  Yd = 1;
  function s(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const b = Math.PI * c / this.size;
      o[c] = Math.cos(b), o[c + 1] = -Math.sin(b);
    }
    this.table = o;
    for (var d = 0, f = 1; this.size > f; f <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var w = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << w;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return So = s, s.prototype.fromComplexArray = function(o, c) {
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
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, w, b = this._bitrev;
    if (p === 4)
      for (m = 0, w = 0; m < c; m += p, w++) {
        const N = b[w];
        this._singleTransform2(m, N, f);
      }
    else
      for (m = 0, w = 0; m < c; m += p, w++) {
        const N = b[w];
        this._singleTransform4(m, N, f);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var C = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var M = m + C, P = m, S = 0; P < M; P += 2, S += f) {
          const N = P, V = N + C, T = V + C, U = T + C, z = o[N], B = o[N + 1], D = o[V], O = o[V + 1], I = o[T], se = o[T + 1], Z = o[U], we = o[U + 1], Ee = z, Y = B, fe = g[S], G = v * g[S + 1], le = D * fe - O * G, re = D * G + O * fe, W = g[2 * S], ae = v * g[2 * S + 1], te = I * W - se * ae, x = I * ae + se * W, y = g[3 * S], ne = v * g[3 * S + 1], ce = Z * y - we * ne, Ne = Z * ne + we * y, H = Ee + te, K = Y + x, ee = Ee - te, J = Y - x, pe = le + ce, Ce = re + Ne, ge = v * (le - ce), xe = v * (re - Ne), je = H + pe, Fe = K + Ce, Te = H - pe, $ = K - Ce, oe = ee + xe, ue = J - ge, Me = ee - xe, _e = J + ge;
          o[N] = je, o[N + 1] = Fe, o[V] = oe, o[V + 1] = ue, o[T] = Te, o[T + 1] = $, o[U] = Me, o[U + 1] = _e;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], w = p[c + 1], b = p[c + d], v = p[c + d + 1], g = m + b, C = w + v, M = m - b, P = w - v;
    f[o] = g, f[o + 1] = C, f[o + 2] = M, f[o + 3] = P;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, w = d * 2, b = d * 3, v = p[c], g = p[c + 1], C = p[c + d], M = p[c + d + 1], P = p[c + w], S = p[c + w + 1], N = p[c + b], V = p[c + b + 1], T = v + P, U = g + S, z = v - P, B = g - S, D = C + N, O = M + V, I = m * (C - N), se = m * (M - V), Z = T + D, we = U + O, Ee = z + se, Y = B - I, fe = T - D, G = U - O, le = z - se, re = B + I;
    f[o] = Z, f[o + 1] = we, f[o + 2] = Ee, f[o + 3] = Y, f[o + 4] = fe, f[o + 5] = G, f[o + 6] = le, f[o + 7] = re;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, w, b = this._bitrev;
    if (p === 4)
      for (m = 0, w = 0; m < c; m += p, w++) {
        const Le = b[w];
        this._singleRealTransform2(m, Le >>> 1, f >>> 1);
      }
    else
      for (m = 0, w = 0; m < c; m += p, w++) {
        const Le = b[w];
        this._singleRealTransform4(m, Le >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var C = p >>> 1, M = C >>> 1, P = M >>> 1;
      for (m = 0; m < c; m += p)
        for (var S = 0, N = 0; S <= P; S += 2, N += f) {
          var V = m + S, T = V + M, U = T + M, z = U + M, B = o[V], D = o[V + 1], O = o[T], I = o[T + 1], se = o[U], Z = o[U + 1], we = o[z], Ee = o[z + 1], Y = B, fe = D, G = g[N], le = v * g[N + 1], re = O * G - I * le, W = O * le + I * G, ae = g[2 * N], te = v * g[2 * N + 1], x = se * ae - Z * te, y = se * te + Z * ae, ne = g[3 * N], ce = v * g[3 * N + 1], Ne = we * ne - Ee * ce, H = we * ce + Ee * ne, K = Y + x, ee = fe + y, J = Y - x, pe = fe - y, Ce = re + Ne, ge = W + H, xe = v * (re - Ne), je = v * (W - H), Fe = K + Ce, Te = ee + ge, $ = J + je, oe = pe - xe;
          if (o[V] = Fe, o[V + 1] = Te, o[T] = $, o[T + 1] = oe, S === 0) {
            var ue = K - Ce, Me = ee - ge;
            o[U] = ue, o[U + 1] = Me;
            continue;
          }
          if (S !== P) {
            var _e = J, He = -pe, Oe = K, ze = -ee, Je = -v * je, pt = -v * xe, Zt = -v * ge, Ft = -v * Ce, qt = _e + Je, Ht = He + pt, At = Oe + Ft, yn = ze - Zt, be = m + M - S, ln = m + C - S;
            o[be] = qt, o[be + 1] = Ht, o[ln] = At, o[ln + 1] = yn;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], w = p[c + d], b = m + w, v = m - w;
    f[o] = b, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, w = d * 2, b = d * 3, v = p[c], g = p[c + d], C = p[c + w], M = p[c + b], P = v + C, S = v - C, N = g + M, V = m * (g - M), T = P + N, U = S, z = -V, B = P - N, D = S, O = V;
    f[o] = T, f[o + 1] = 0, f[o + 2] = U, f[o + 3] = z, f[o + 4] = B, f[o + 5] = 0, f[o + 6] = D, f[o + 7] = O;
  }, So;
}
var cv = uv();
const dv = /* @__PURE__ */ Qm(cv);
class Xr {
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
    return new Xr(
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
    return new Xr(
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
    return new Xr(a, (o) => Array(o));
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
    this._inputLength = a, this._fft = new dv(mv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function fv(s) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, c = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && s[f] > c && (c = s[f], d = f);
  return a;
}
function hv(s, a) {
  const [o, c, d] = [s - 1, s, s + 1], [f, p, m] = [a[o], a[c], a[d]], w = f / 2 - p + m / 2, b = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, g = -b / (2 * w), C = w * g * g + b * g + v;
  return [g, C];
}
class Zr {
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
    return new Zr(a, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Zr(a, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Zr(a, (o) => Array(o));
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
    this._autocorrelator = new Xr(a, o), this._nsdfBuffer = o(a);
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
    const c = fv(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((w) => this._nsdfBuffer[w])), f = c.find(
      (w) => this._nsdfBuffer[w] >= this._clarityThreshold * d
    ), [p, m] = hv(
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
function mv(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function pv(s) {
  const a = s * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const vv = 0.05, kv = 1.5;
class yv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = pv(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * vv))), this.detector = Zr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new gv();
  onset = new xv();
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
      onFrame: w,
      onStableNote: b
    } = this.opts, v = this.analysers.map((O, I) => (O.getFloatTimeDomainData(this.buffers[I]), Jd(this.buffers[I], this.buffers[I].length - this.shortLength))), g = v.indexOf(Math.max(...v));
    g !== this.channel && v[g] > (v[this.channel] ?? 0) * kv && (this.channel = g);
    const C = this.buffers[this.channel], M = v[this.channel], P = jv(C, C.length - this.shortLength), S = { rms: M, peak: P, channel: this.channel, levels: v }, N = M < c, V = this.onset.feed(M, a, c);
    if (N && Jd(C, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), w?.({ ...S, status: "silent" });
      return;
    }
    const [T, U] = this.detector.findPitch(C, this.mic.context.sampleRate);
    if (!isFinite(T) || U < o) {
      this.gate.feed(null, a, d, N, V), w?.({ ...S, status: N ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (T < p || T > m) {
      this.gate.feed(null, a, d, N, V), w?.({ ...S, status: "out-of-range", frequency: T, clarity: U });
      return;
    }
    const { midi: z, cents: B } = ap(T);
    if (Math.abs(B) > f) {
      this.gate.feed(null, a, d, N, V), w?.({ ...S, status: "off-pitch", frequency: T, clarity: U, midi: z, cents: B });
      return;
    }
    w?.({ ...S, status: "pitch", frequency: T, clarity: U, midi: z, cents: B });
    const D = this.gate.feed(z, a, d, N, V);
    D !== null && b?.({ midi: z, frequency: T, cents: B, clarity: U, timestamp: a, heldMs: D.heldMs });
  }
}
class gv {
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
class xv {
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
function Jd(s, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < s.length; d++) c += s[d] * s[d];
  return Math.sqrt(c / Math.max(1, s.length - o));
}
function jv(s, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < s.length; c++) {
    const d = Math.abs(s[c]);
    d > o && (o = d);
  }
  return o;
}
const ur = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let nr;
function Gf() {
  return (!nr || nr.state === "closed") && (nr = new AudioContext()), nr;
}
function Sv() {
  const s = nr;
  nr = void 0, s?.close().catch(() => {
  });
}
const Wf = (s) => s instanceof Error ? s.name : "";
function wv(s) {
  const a = Wf(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Nv {
  constructor(a = (o) => lv(o, Gf)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Wf(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new yv(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, w = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((b) => b.addEventListener("ended", m, { once: !0, signal: w.signal })), f.context.addEventListener?.("statechange", () => {
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
function Qf(s, a) {
  return s !== "on" ? s : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Xd = (s) => Math.max(0, Math.min(1, (ur(s) + 60) / 60));
function Ev(s) {
  const a = [...s].sort((c, d) => c - d), o = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function wo(s) {
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
function La(s) {
  const a = s instanceof Error ? s.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class as {
  constructor(a = Gf) {
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
    if (await wo(d), c !== this.token) return !1;
    const f = d.createGain();
    f.connect(d.destination), this.master = f;
    const p = Array.from({ length: 12 }, (b, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((b, v) => {
      const g = d.createOscillator(), C = d.createGain(), M = d.currentTime + 0.05 + v * 0.8;
      m ? g.setPeriodicWave(m) : g.type = "triangle", g.frequency.value = xo(b), C.gain.setValueAtTime(0, M), C.gain.linearRampToValueAtTime(0.22, M + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, M + 0.7), g.connect(C), C.connect(f), g.start(M), g.stop(M + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((b) => {
      this.settle = b, this.timer = setTimeout(() => b(!0), a.length * 800 + 350);
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
    if (await wo(p), f !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), w = p.createGain();
    w.connect(p.destination), this.master = w;
    const b = Array.from({ length: 12 }, (P, S) => 1 / (S + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...b.map(() => 0)]),
      new Float32Array([0, ...b])
    ), g = p.currentTime + 0.05;
    let C = 0;
    return a.forEach((P, S) => {
      if (!Number.isFinite(P.beat) || P.beat < 0 || !Number.isFinite(P.duration) || P.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const N = g + P.beat * m, V = P.duration * m, T = N + Math.max(0.08, V * 0.94), U = p.createOscillator(), z = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = xo(P.midi), z.gain.setValueAtTime(0, N), z.gain.linearRampToValueAtTime(0.22, N + 0.012), z.gain.exponentialRampToValueAtTime(1e-3, T - 0.01), U.connect(z), z.connect(w), U.start(N), U.stop(T), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(S);
      }, 50 + P.beat * m * 1e3));
      const B = a[S + 1]?.beat ?? 1 / 0;
      d && B > P.beat + P.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + P.beat * m * 1e3 + V * 1e3)), C = Math.max(C, P.beat + P.duration);
    }), !await new Promise((P) => {
      this.settle = P, this.timer = setTimeout(() => P(!0), 50 + C * m * 1e3 + 150);
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
  async loop(a, o, c = 75) {
    if (this.stop(), !a.length) return !1;
    const d = this.token, f = this.provide();
    if (await wo(f), d !== this.token) return !1;
    const p = f.createGain();
    p.connect(f.destination), this.master = p;
    const m = Array.from({ length: 12 }, (S, N) => 1 / (N + 1) ** 1.3), w = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let b = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (S) => {
      d === this.token && Number.isFinite(S) && (b = 60 / Math.max(40, Math.min(140, S)));
    };
    const v = 1.6;
    let g = f.currentTime + 0.05, C = 0;
    const M = [], P = () => {
      if (d === this.token) {
        if (g < f.currentTime - 0.02) {
          const S = Math.ceil((f.currentTime - g) / b);
          g += S * b, C = (C + S) % a.length, M.length = 0;
        }
        for (; g < f.currentTime + v; ) {
          const S = a[C], N = C, V = g, T = f.createOscillator(), U = f.createGain();
          w ? T.setPeriodicWave(w) : T.type = "triangle", T.frequency.value = xo(S), U.gain.setValueAtTime(0, V), U.gain.linearRampToValueAtTime(0.22, V + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, V + b * 0.975), T.connect(U), U.connect(p), T.start(V), T.stop(V + b * 0.985), M.push({ at: V, index: N }), g += b, C = (C + 1) % a.length;
        }
        for (; M.length && M[0].at <= f.currentTime + 0.01; ) {
          const S = M.shift();
          o?.(S.index);
        }
      }
    };
    return P(), this.loopTick = setInterval(P, 25), new Promise((S) => {
      this.settle = S;
    });
  }
}
function ci(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const w = { position: d === null || f === null ? null : Ke(d, f), beat: o, duration: p };
    return o += p, w;
  });
  return { label: s, events: c, beats: o };
}
function No(s, ...a) {
  let o = 0;
  const c = a.flatMap((d) => {
    const f = d.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += d.beats, f;
  });
  return { label: s, events: c, beats: o };
}
const Zd = ci("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), qd = ci("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Cv = ci("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), ef = ci("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), tf = ci("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Tv = ci("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), nf = ci("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), rf = ci("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), Mv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Zd, qd],
    whole: No("Melodia · A + B + C", Zd, qd, Cv),
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
    fragments: [ef, tf],
    whole: No("Ukko Nooa · A + B", ef, tf),
    bonus: Tv,
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
    fragments: [nf, rf],
    whole: No("Siirtymämelodia · A + B", nf, rf),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function _v(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const sf = ["e", "B", "G", "D", "A", "E"];
function Xo({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = Mv[s], [f, p] = _.useState(a === "fingering" ? "a" : "whole"), [m, w] = _.useState(d.tempo), [b, v] = _.useState(!1), [g, C] = _.useState(!1), [M, P] = _.useState(a !== "memory"), [S, N] = _.useState(!1), [V, T] = _.useState(null), [U, z] = _.useState(""), B = _.useRef(new as()), D = _.useRef(0);
  function O() {
    D.current++, B.current.stop(), N(!1), T(null);
  }
  _.useEffect(() => {
    c && (c.current = O);
    const y = () => {
      document.hidden && O();
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, B.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const I = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], se = I.find((y) => y.id === f) ?? I[0], Z = se.clip, we = _v(Z), Ee = V === null ? null : we[V]?.beat ?? null, Y = Ee === null ? null : Z.events.find((y) => y.beat === Ee)?.position ?? null, fe = _.useRef(null);
  bf(fe, ".melody-playing", S && Ee !== null ? String(Ee) : "", { enabled: b && g, playback: S });
  const G = Z.beats / 4, le = [...new Map(Z.events.filter((y) => y.position).map((y) => [Xe(y.position), y.position])).values()], re = le.map((y) => y.fret), W = le.filter((y) => M || Y?.string === y.string && Y.fret === y.fret).map((y) => ({
    ...y,
    label: Ie(y.midi),
    kind: Y?.string === y.string && Y.fret === y.fret ? "playing" : Qe(y.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(le.map((y) => y.string))],
    min: Math.min(...re),
    max: Math.max(...re),
    fixed: "box"
  };
  async function te() {
    if (S) {
      O();
      return;
    }
    o?.();
    const y = ++D.current;
    B.current.stop(), N(!0), T(null), z("");
    try {
      await B.current.playTimed(we, m, (ne) => {
        y === D.current && T(ne);
      }, () => {
        y === D.current && T(null);
      });
    } catch (ne) {
      y === D.current && z(La(ne));
    } finally {
      y === D.current && (N(!1), T(null));
    }
  }
  function x(y) {
    O(), z(""), p(y);
  }
  return /* @__PURE__ */ r.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ r.jsxs("details", { onToggle: (y) => {
    const ne = y.currentTarget.open;
    v(ne), ne || O();
  }, children: [
    /* @__PURE__ */ r.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    b && /* @__PURE__ */ r.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ r.jsx("h4", { children: d.title }),
      /* @__PURE__ */ r.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        G.toString().replace(".", ","),
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
      a !== "memory" && /* @__PURE__ */ r.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: I.map((y) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": se.id === y.id,
          onClick: () => x(y.id),
          children: y.name
        },
        y.id
      )) }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": S, onClick: () => {
          te();
        }, children: S ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ r.jsx("select", { value: m, onChange: (y) => {
            O(), w(Number(y.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((y, ne) => y - ne).filter((y, ne, ce) => ce.indexOf(y) === ne).map((y) => /* @__PURE__ */ r.jsxs("option", { value: y, children: [
            y,
            " BPM"
          ] }, y)) })
        ] }),
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": g, onClick: () => C((y) => !y), children: g ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: S && V !== null ? `Nyt soi ${Ie(we[V].midi)} · ${sf[Y.string]}-kieli, ${Y.fret}. nauha` : S ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ r.jsx(ui, { area: ae, marks: W, disabled: !0, follow: "playing", playback: S, caption: `${d.title}, ${se.name}` }),
        /* @__PURE__ */ r.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M,
              onClick: () => P((y) => !y),
              children: M ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      g && /* @__PURE__ */ r.jsxs("div", { ref: fe, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${se.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
            Z.events.map((y, ne) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: y.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: y.beat % 4 === 0 ? `T${Math.floor(y.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: y.duration === 1 ? "♩" : `${y.duration} iskua` })
            ] }, ne))
          ] }) }),
          /* @__PURE__ */ r.jsx("tbody", { children: sf.map((y, ne) => /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "row", children: y }),
            Z.events.map((ce, Ne) => {
              const H = ce.position?.string === ne, K = H && Ee === ce.beat;
              return /* @__PURE__ */ r.jsx(
                "td",
                {
                  className: `${ce.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${H && Qe(ce.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": H ? `${y}-kieli, ${ce.position.fret}. nauha, ${Ie(ce.position.midi)}` : void 0,
                  children: H ? ce.position.fret : "—"
                },
                Ne
              );
            })
          ] }, ne)) })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ r.jsx("p", { className: "melody-source", children: /* @__PURE__ */ r.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Io = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [1, 2]), Yf = [...new Map(Io.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Ke(o, c);
  return [Xe(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ma = [5, 4, 3, 2, 1, 0].flatMap((s) => Yf.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), Do = [
  ...Ma,
  ...Ma.slice(1, -1).reverse()
], bv = [...Do, Ma[0]], af = new Set(
  Io[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Ke(a, o);
    return Xe(c);
  })).filter((s) => Io[1].positions[0].strings.flatMap((a, o) => a.map((c) => Xe(Ke(o, c)))).includes(s))
), Av = [
  Ke(5, 5),
  Ke(5, 8),
  Ke(5, 10),
  Ke(4, 7),
  Ke(4, 10),
  Ke(3, 7),
  Ke(3, 10),
  Ke(3, 7),
  Ke(4, 10),
  Ke(4, 7),
  Ke(5, 10),
  Ke(5, 8),
  Ke(5, 5)
], Jf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Xf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Eo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], lf = (s) => Qe(s) === 9;
function of() {
  try {
    const s = Number(localStorage.getItem(Jf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function Pv() {
  try {
    const s = Number(localStorage.getItem(Xf));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function Lv({ onBack: s, onPosition: a }) {
  const [o, c] = _.useState(of), [d, f] = _.useState(of), [p, m] = _.useState(!1), [w, b] = _.useState("roots"), [v, g] = _.useState(Pv), [C, M] = _.useState(null), [P, S] = _.useState(null), [N, V] = _.useState(""), T = _.useRef(new as()), U = _.useRef(0), z = _.useRef(null), B = P === null ? null : Do[P];
  function D() {
    z.current?.(), U.current++, T.current.stop(), M(null), S(null);
  }
  _.useEffect(() => {
    const Y = () => {
      document.hidden && (U.current++, T.current.stop(), M(null), S(null));
    };
    return document.addEventListener("visibilitychange", Y), () => {
      document.removeEventListener("visibilitychange", Y), U.current++, T.current.stop();
    };
  }, []);
  async function O(Y) {
    z.current?.();
    const fe = ++U.current;
    T.current.stop(), S(null), V(""), M(Y);
    try {
      Y === "transition" ? await T.current.play(Av.map((G) => G.midi)) : Y === "once" ? await T.current.play(bv.map((G) => G.midi)) : await T.current.loop(Do.map((G) => G.midi), (G) => {
        fe === U.current && S(G);
      }, v);
    } catch (G) {
      fe === U.current && V(La(G));
    } finally {
      fe === U.current && (M(null), S(null));
    }
  }
  function I(Y) {
    const fe = Math.max(40, Math.min(140, Y));
    g(fe), T.current.setLoopTempo(fe);
    try {
      localStorage.setItem(Xf, String(fe));
    } catch {
    }
  }
  function se(Y) {
    Y > o || (D(), f(Y), m(!1), b("roots"));
  }
  function Z() {
    D();
    const Y = Math.min(4, d + 1);
    if (f(Y), m(!1), b("roots"), Y > o) {
      c(Y);
      try {
        localStorage.setItem(Jf, String(Y));
      } catch {
      }
    }
  }
  const we = (Y, fe) => d < 2 || d === 2 && p && af.has(fe) || d === 3 && (w === "all" || w === "roots" && lf(Y)), Ee = Yf.filter((Y) => we(Y.midi, Xe(Y))).map((Y) => ({
    ...Y,
    label: d < 2 || d === 2 && p || d === 3 && w === "all" ? Ie(Y.midi) : "A",
    kind: d < 2 && B?.string === Y.string && B?.fret === Y.fret ? "playing" : lf(Y.midi) ? "answer" : af.has(Xe(Y)) ? "anchor" : "shape"
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
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => se(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Eo.map((Y, fe) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: fe === d ? "journey-step current" : "journey-step",
        "aria-current": fe === d ? "step" : void 0,
        disabled: fe > o,
        onClick: () => se(fe),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: fe > o ? "🔒" : fe < o ? "✓" : fe + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: Y.title })
        ]
      },
      Y.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: Eo[d].title }),
        /* @__PURE__ */ r.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: Eo[d].detail }),
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
              Ma.length,
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
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => I(v - 5), children: "− 5" }),
          /* @__PURE__ */ r.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => I(v + 5), children: "+ 5" }),
          /* @__PURE__ */ r.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "whole",
              onClick: () => C === "whole" ? D() : void O("whole"),
              children: C === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "once",
              onClick: () => C === "once" ? D() : void O("once"),
              children: C === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "transition",
              onClick: () => C === "transition" ? D() : void O("transition"),
              children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((Y) => !Y), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => se(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((Y) => /* @__PURE__ */ r.jsxs("label", { children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: Y.value,
                  checked: w === Y.value,
                  onChange: () => b(Y.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: Y.name })
            ] }, Y.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C === "once" ? D() : void O("once"), children: C === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C === "transition" ? D() : void O("transition"), children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: C === "whole" ? B && d < 2 ? `Nyt soi ${Ie(B.midi, !1, !0)} · ${Xt[B.string]}-kieli, nauha ${B.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : C === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : C === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        N && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: N }),
        /* @__PURE__ */ r.jsx(
          ui,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: C,
            marks: Ee,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? w === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : w === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ r.jsx(
          Xo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: z
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ r.jsx(Hf, {}),
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
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => se(2), children: "Kertaa muistiharjoitus" }),
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
const qr = "musiikin-kartta:skaalapolku:v1", Sa = "musiikin-kartta:skaalapolku:position-2:v1", Co = "musiikin-kartta:skaalapolku:position-3:v1", wa = "musiikin-kartta:skaalapolku:bridge-1-2:v1", _a = "musiikin-kartta:skaalapolku:active-position:v1", Zf = "musiikin-kartta:skaalapolku:tempo:v1", sr = 75, zo = 40, Bo = 140;
function Rv() {
  try {
    const s = localStorage.getItem(Zf);
    if (s === null) return sr;
    const a = Number(s);
    return Number.isInteger(a) && a >= zo && a <= Bo && a % 5 === 0 ? a : sr;
  } catch {
    return sr;
  }
}
const To = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], uf = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function En(s = qr) {
  try {
    const a = Number(localStorage.getItem(s));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function Mo() {
  try {
    const s = localStorage.getItem(_a);
    return s === "3" && En(wa) === 4 ? 3 : En(qr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Ov() {
  try {
    return En(Sa) === 4 && localStorage.getItem(_a) === "bridge";
  } catch {
    return !1;
  }
}
function $v({ onBack: s }) {
  const [a, o] = _.useState(Mo), [c, d] = _.useState(Ov), [f, p] = _.useState(() => ({
    1: En(qr),
    2: En(Sa),
    3: En(Co)
  })), [m, w] = _.useState(() => En(Mo() === 3 ? Co : Mo() === 2 ? Sa : qr)), b = f[a], [v, g] = _.useState(!1), [C, M] = _.useState("roots"), [P, S] = _.useState(Rv), [N, V] = _.useState(null), [T, U] = _.useState(null), [z, B] = _.useState(""), D = _.useRef(new as()), O = _.useRef(0), I = _.useRef(null);
  function se(H) {
    const K = Math.max(zo, Math.min(Bo, H));
    S(K), D.current.setLoopTempo(K);
    try {
      localStorage.setItem(Zf, String(K));
    } catch {
    }
  }
  function Z() {
    I.current?.(), O.current++, D.current.stop(), V(null), U(null);
  }
  _.useEffect(() => {
    const H = () => {
      document.hidden && (O.current++, D.current.stop(), V(null), U(null));
    };
    return document.addEventListener("visibilitychange", H), () => {
      document.removeEventListener("visibilitychange", H), O.current++, D.current.stop();
    };
  }, []);
  const we = Ue.fingeringBoxes(9, Ue.SCALES.mp, "pentatonic", [a])[0].positions[0], Ee = we.strings.flatMap((H, K) => H.map((ee) => Ke(K, ee))).sort((H, K) => H.midi - K.midi || K.string - H.string), Y = [...Ee, ...Ee.slice(1, -1).reverse()], fe = T === null ? null : Y[T], G = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], le = we.start, re = we.end, W = (H) => Qe(H) === 9, ae = (H) => m < 2 ? !0 : m === 2 ? v && W(H) : C === "scale" || C === "roots" && W(H), te = Ee.filter((H) => ae(H.midi)).map((H) => ({
    ...H,
    label: m < 2 || m === 3 && C === "scale" ? Ie(H.midi) : "A",
    kind: m < 2 && fe?.string === H.string && fe.fret === H.fret ? "playing" : W(H.midi) ? "answer" : "shape"
  }));
  async function x(H) {
    I.current?.();
    const K = ++O.current;
    D.current.stop(), U(null), B(""), V(H);
    try {
      H === "phrase" ? await D.current.play(G) : await D.current.loop(Y.map((ee) => ee.midi), (ee) => {
        K === O.current && U(ee);
      }, m === 2 ? P : sr);
    } catch (ee) {
      K === O.current && B(La(ee));
    } finally {
      K === O.current && (V(null), U(null));
    }
  }
  function y() {
    Z();
    const H = Math.min(4, m + 1);
    if (w(H), g(!1), M("roots"), H > b) {
      p((ee) => ({ ...ee, [a]: H }));
      const K = a === 1 ? qr : a === 2 ? Sa : Co;
      try {
        localStorage.setItem(K, String(H));
      } catch {
      }
    }
  }
  function ne(H) {
    H > b || (Z(), w(H), g(!1), M("roots"));
  }
  function ce(H) {
    if (!(H === 2 && f[1] < 4) && !(H === 3 && En(wa) < 4)) {
      Z(), d(!1), o(H), w(f[H]), g(!1), M("roots"), B("");
      try {
        localStorage.setItem(_a, String(H));
      } catch {
      }
    }
  }
  function Ne() {
    if (!(f[2] < 4)) {
      Z(), d(!0), g(!1), B("");
      try {
        localStorage.setItem(_a, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx(Lv, { onBack: s, onPosition: ce }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
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
      le,
      "–",
      re,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => ce(1), children: "Positio 1" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => ce(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: Ne,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: En(wa) < 4,
          onClick: () => ce(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: To.map((H, K) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: K === m ? "journey-step current" : "journey-step",
        "aria-current": K === m ? "step" : void 0,
        disabled: K > b,
        onClick: () => ne(K),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: K > b ? "🔒" : K < b ? "✓" : K + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: K === 4 ? `Positio ${a} harjoiteltu` : H.title })
        ]
      },
      H.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : To[m].title }),
        /* @__PURE__ */ r.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: To[m].detail }),
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
              disabled: P <= zo,
              onClick: () => se(P - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            P,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: P >= Bo,
              onClick: () => se(P + 5),
              children: "+ 5"
            }
          ),
          P !== sr && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => se(sr),
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
              "aria-pressed": N === "loop",
              onClick: () => N === "loop" ? Z() : void x("loop"),
              children: N === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => N === "phrase" ? Z() : void x("phrase"), children: N === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: N === "loop" ? fe && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ie(fe.midi, !1, !0)} · ${Xt[fe.string]}-kieli, nauha ${fe.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        z && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: z }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": v, onClick: () => g((H) => !H), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              uf.map((H) => /* @__PURE__ */ r.jsxs("label", { children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: H.value,
                    checked: C === H.value,
                    onChange: () => M(H.value)
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { children: H.label })
              ] }, H.value))
            ] }),
            a !== 1 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
              x("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: le, max: re, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: N, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? uf.find((H) => H.value === C).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: le, max: re, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: N, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ r.jsx(
          Xo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: Z,
            stopHandleRef: I
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ r.jsx(Hf, {}, a),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: y, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ r.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => ce(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Ne, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ce(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        En(wa) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Fv = ["ionian", "aeolian"], ir = {
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
      Ke(4, 3),
      Ke(4, 5),
      Ke(3, 2),
      Ke(3, 3),
      Ke(3, 5),
      Ke(2, 2),
      Ke(2, 4),
      Ke(2, 5)
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
      Ke(5, 5),
      Ke(5, 7),
      Ke(5, 8),
      Ke(4, 5),
      Ke(4, 7),
      Ke(4, 8),
      Ke(3, 5),
      Ke(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, qf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", eh = "musiikin-kartta:moodipolku:active:v1", Iv = (s) => {
  const a = ir[s].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Dv = (s) => [...Iv(s), ir[s].positions[0]], cf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Na(s) {
  try {
    const a = Number(localStorage.getItem(qf(s)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function df() {
  try {
    return localStorage.getItem(eh) === "aeolian" && Na("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function zv({ onBack: s }) {
  const [a, o] = _.useState(df), [c, d] = _.useState(() => ({
    ionian: Na("ionian"),
    aeolian: Na("aeolian")
  })), [f, p] = _.useState(() => Na(df())), [m, w] = _.useState(null), [b, v] = _.useState(null), [g, C] = _.useState(!1), [M, P] = _.useState("roots"), [S, N] = _.useState(""), [V, T] = _.useState(null), [U, z] = _.useState(null), B = _.useRef(new as()), D = _.useRef(0), O = _.useRef(null), I = ir[a], se = Dv(a), Z = m === "scale" && b !== null ? se[b] : null;
  function we() {
    O.current?.(), D.current++, B.current.stop(), w(null), v(null);
  }
  _.useEffect(() => {
    const y = () => {
      document.hidden && (D.current++, B.current.stop(), w(null), v(null));
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, B.current.stop();
    };
  }, []);
  async function Ee(y, ne, ce = !1) {
    O.current?.();
    const Ne = ++D.current;
    B.current.stop(), v(null), N(""), w(y);
    try {
      const H = ce ? await B.current.loop(ne, void 0, 75) : await B.current.play(ne, (K) => {
        Ne === D.current && y === "scale" && v(K);
      });
      return Ne === D.current && H;
    } catch (H) {
      return Ne === D.current && N(La(H)), !1;
    } finally {
      Ne === D.current && (w(null), v(null));
    }
  }
  function Y(y) {
    y > c[a] || (we(), p(y), T(null), z(null), C(!1), P("roots"), N(""));
  }
  function fe() {
    we();
    const y = Math.min(5, f + 1);
    if (p(y), T(null), z(null), C(!1), P("roots"), y > c[a]) {
      d((ne) => ({ ...ne, [a]: y }));
      try {
        localStorage.setItem(qf(a), String(y));
      } catch {
      }
    }
  }
  function G(y) {
    if (!(y === "aeolian" && c.ionian < 5)) {
      we(), o(y), p(c[y]), T(null), z(null), C(!1), P("roots"), N("");
      try {
        localStorage.setItem(eh, y);
      } catch {
      }
    }
  }
  async function le() {
    we(), z(null), T(null);
    const y = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Ee("comparison", ir[y].phrase) && T(y);
  }
  const re = (y) => Qe(y) === I.tonic, W = I.positions.filter((y) => f < 2 ? !0 : f === 2 ? g && re(y.midi) : f === 4 ? M === "all" || M === "roots" && re(y.midi) : !1).map((y) => ({
    ...y,
    label: f === 2 || f === 4 && M === "roots" ? I.tonicName : Ie(y.midi),
    kind: Z?.string === y.string && Z.fret === y.fret ? "playing" : re(y.midi) ? "answer" : "shape"
  })), ae = [...new Set(I.positions.map((y) => y.string))], te = Math.min(...I.positions.map((y) => y.fret)), x = Math.max(...I.positions.map((y) => y.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      we(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Fv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ r.jsxs("h2", { id: "mode-path-title", children: [
      I.title,
      " · ",
      I.alias
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: I.explanation }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: I.noteNames }),
      " · Pohjasävel ",
      I.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => G("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => G("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ r.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      cf.map((y, ne) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === ne ? "journey-step current" : "journey-step",
          "aria-current": f === ne ? "step" : void 0,
          disabled: ne > c[a],
          onClick: () => Y(ne),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: ne > c[a] ? "🔒" : ne < c[a] ? "✓" : ne + 1 }),
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
          onClick: () => Y(5),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ r.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : cf[f] }),
        /* @__PURE__ */ r.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          I.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          I.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ r.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        I.tonicName,
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
                le();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          V !== null && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Ee("comparison", ir[V].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        V !== null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => z("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => z("aeolian"),
                children: "A"
              }
            )
          ] }),
          U !== null && /* @__PURE__ */ r.jsxs("p", { role: "status", children: [
            U === V ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            ir[V].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Soita ",
          I.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          I.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          I.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([y, ne]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: y,
                checked: M === y,
                onChange: () => P(y)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: ne })
          ] }, y))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C((y) => !y), children: g ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? we() : void Ee("scale", se.map((y) => y.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? we() : void Ee("accompaniment", I.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && Z && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Ie(Z.midi, !1, !0),
        " · ",
        Xt[Z.string],
        "-kieli, nauha ",
        Z.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ r.jsx(
        ui,
        {
          area: { strings: ae, min: te, max: x, fixed: "box" },
          marks: W,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: I.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ r.jsx(
        Xo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: we,
          stopHandleRef: O
        },
        `nooa:${f}`
      ),
      S && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: S }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: fe, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          I.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ r.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Y(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => G("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ r.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function Bv({ onBack: s }) {
  const [a, o] = _.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ r.jsx($v, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ r.jsx(zv, { onBack: () => o(null) }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
const Jr = [0, 2, 4, 5, 7, 9, 11], ga = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Vv({ onBack: s }) {
  const [a, o] = _.useState(0), [c, d] = _.useState([]), [f, p] = _.useState(!1), [m, w] = _.useState(""), [b, v] = _.useState(0), g = a >= Jr.length, C = Jr[Math.min(a, Jr.length - 1)], M = cr(ga.strings, ga.min, ga.max).filter((B) => Qe(B.midi) === C), P = M.filter((B) => !c.includes(Xe(B))), S = P.length === 0 && !g, N = !S && f ? P[0] : void 0, V = [
    ...M.filter((B) => c.includes(Xe(B))).map((B) => ({ ...B, kind: "answer", label: Ie(B.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function T(B) {
    if (g || S) return;
    const D = Xe(B);
    if (Qe(B.midi) !== C) {
      v((se) => se + 1), w(`Valitsit sävelen ${Ie(B.midi)}. Etsi ${Ie(C)}.`);
      return;
    }
    if (c.includes(D)) {
      w("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const O = [...c, D];
    d(O), p(!1);
    const I = M.length - O.length;
    w(I ? `Oikein! ${Ie(C)} löytyi ${Xt[B.string]}-kieleltä (${Mi(B.fret)}). Vielä ${I}.` : `Löysit kaikki ${M.length} ${Ie(C)}-säveltä tällä alueella.`);
  }
  function U() {
    S && (o((B) => B + 1), d([]), p(!1), w(""));
  }
  function z() {
    o(0), d([]), p(!1), w(""), v(0);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Harjoitusvalikko" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Etsi kaikkien seitsemän luonnollisen sävelen sijainnit nauhoilta 0–5. Aloita C-sävelestä." }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        b ? `Vääriä valintoja yhteensä ${b}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: z, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ie(C),
          "-sävelet"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          Jr.length
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ie(C),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        M.length
      ] }),
      /* @__PURE__ */ r.jsx(
        ui,
        {
          area: ga,
          marks: V,
          onAnswer: T,
          disabled: S,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: S ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        !S && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((B) => !B),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        S && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: U, children: a === Jr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
  ] });
}
const Kv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, _o = ["C", "G", "D", "Em"], ff = ["C", "G", "D", "Em", "Am", "E", "A"], Uv = { min: 0, max: 3, fixed: "" };
function hf(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Hv({ onBack: s }) {
  const [a, o] = _.useState(4), [c, d] = _.useState(() => hf(_o)), [f, p] = _.useState(0), [m, w] = _.useState(null), [b, v] = _.useState([]), [g, C] = _.useState(0), M = f >= c.length, P = Kv[c[Math.min(f, c.length - 1)]], S = a === 4 ? _o : ff, N = P.frets.flatMap((O, I) => O === null ? [] : [I]), V = P.frets.flatMap((O, I) => O === null ? [I] : []), T = { ...Uv, strings: N }, U = P.frets.flatMap((O, I) => O === null ? [] : [{
    ...Ke(I, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function z(O = a) {
    o(O), d(hf(O === 4 ? _o : ff)), p(0), w(null), v([]), C(0);
  }
  function B(O) {
    m || M || b.includes(O) || (O === P.name ? w(O) : (v((I) => [...I, O]), C((I) => I + 1)));
  }
  function D() {
    m && (p((O) => O + 1), w(null), v([]));
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
            onChange: () => z(4)
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
            onChange: () => z(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: M ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        g ? `Vääriä valintoja yhteensä ${g}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => z(), children: "Harjoittele uudelleen" }) })
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
          area: T,
          marks: U,
          mutedStrings: V,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: S.map((O) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === O ? "right" : b.includes(O) ? "wrong" : "",
          disabled: !!m || b.includes(O),
          "aria-pressed": m === O,
          onClick: () => B(O),
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: m ? "feedback good" : b.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${P.name}-sointu.` : b.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: D, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ke = (s, a) => ({ first: s, ...a ? { second: a } : {} }), ar = () => [
  ke("Gm", "F"),
  ke("Gm"),
  ke("B♭", "F"),
  ke("Gm"),
  ke("Gm", "F"),
  ke("Gm"),
  ke("E♭", "F"),
  ke("Gm")
], lr = () => [
  ke("B♭", "F"),
  ke("Gm", "Dm"),
  ke("E♭", "F"),
  ke("Gm", "Dm")
], or = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], th = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Gv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ar(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...lr(), ke("E♭"), { ...ke("E♭"), passingBass: "F" }],
    lyrics: or,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ke("Gm", "F"), ke("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: ar(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...lr(), ke("E♭"), ke("F")],
    lyrics: or
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
    bars: ar(),
    lyrics: th
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...lr(), ke("E♭", "F"), ke("Gm")],
    lyrics: or
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
], Wv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: ar(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...lr(), ke("E♭"), ke("E♭")],
    lyrics: or
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: ar(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...lr(), ke("E♭"), ke("F")],
    lyrics: or
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
    bars: ar(),
    lyrics: th
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...lr(), ke("B♭", "F"), ke("Gm"), ke("E♭", "F"), ke("Gm")],
    lyrics: or
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ke("E♭", "F"), ke("Gm", "F"), ke("E♭", "F"), ke("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], dr = {
  acoustic: Gv,
  normal: Wv
}, Qv = "normal", Vo = "yksi-sointu-kaksi-askelta", Zo = {
  acoustic: Vo + "-akustinen",
  normal: Vo + "-normaali"
}, nh = (s) => s === Vo || Object.values(Zo).includes(s ?? "");
function Yv(s) {
  const a = Object.entries(Zo).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const Jv = (s) => Zo[s], mf = (s) => {
  const a = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function qo(s, a = "acoustic") {
  const o = dr[a], c = o[s], d = o[s + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function eu(s, a = "acoustic") {
  const o = dr[a], c = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let g = 1; g < o.length && !(c < o[g].start); g++)
    d = g;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= rs(d, p + 1, a); )
    p++;
  const m = rs(d, p, a), w = qo(d, a) / 4;
  let b = 1;
  for (; b < 4 && c >= m + b * w; ) b++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: b,
    chord: v.second && b >= 3 ? v.second : v.first
  };
}
function rs(s, a, o = "acoustic") {
  return dr[o][s].start + qo(s, o) * a;
}
function Xv(s) {
  return dr[s].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = rs(o, d, s), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = qo(o, s) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function Zv(s, a = "acoustic", o = !1) {
  const c = dr[a], d = eu(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = Xv(a), w = m.findIndex((M) => M.sectionIndex === d.sectionIndex && M.barIndex === d.barIndex && M.part === p), v = [
    ...m.slice(w + 1).map((M) => ({ ...M, wrapped: !1 })),
    ...o ? m.slice(0, w + 1).map((M) => ({ ...M, wrapped: !0 })) : []
  ].find((M) => M.chord !== d.chord) ?? null;
  let g = null;
  const C = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!C || o)) {
    const M = C ? 0 : d.sectionIndex + 1, P = c[M], S = P.bars[0].first;
    g = {
      section: P,
      sectionIndex: M,
      firstChord: S,
      wrapped: C,
      continues: S === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: g };
}
function qv(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, w) => m + o(w), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const w = Math.abs(c - 2 * p);
    (w < f || w === f && p >= c - p) && (d = m, f = w), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Ko = ["Gm", "F", "B♭", "E♭", "Dm", "C"], ih = "musiikin-kartta:kappale-sointuvihjeet:v1", Ea = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, pf = {
  showChords: !0,
  level: 0,
  fadeOrder: Ea
};
function xa(s, a) {
  return !a.showChords || a.level >= a.fadeOrder[s];
}
function vf(s) {
  if (!s) return { ...pf, fadeOrder: { ...Ea } };
  try {
    const a = JSON.parse(s);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...Ea }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const m of Ko)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...pf, fadeOrder: { ...Ea } };
  }
}
function ek() {
  try {
    return vf(localStorage.getItem(ih));
  } catch {
    return vf(null);
  }
}
const tk = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function nk(s) {
  const a = tk.exec(s.trim());
  if (!a) return s;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const ik = (s, a) => a === "power" ? nk(s) : s, rk = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], sk = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function ak({ version: s, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = _.useState(ek), [p, m] = _.useState(null), [w, b] = _.useState(!1), [v, g] = _.useState("full"), C = (G) => ik(G, v), M = dr[s], P = eu(a, s), { section: S, sectionIndex: N, barIndex: V, beat: T, chord: U } = P, z = T >= 3 && S.bars[V].second ? "second" : "first", B = (G, le, re) => `${s}:${G}:${le}:${re}`, D = (G, le) => B(S.id, G, le), O = D(V, z), I = xa(U, d), se = I && p === O, Z = (G, le, re) => !xa(G, d) || p === D(le, re), we = d.showChords && d.level === 0, Ee = Ko.filter((G) => xa(G, d)).length, { nextSection: Y } = Zv(a, s, o), fe = !!Y && xa(Y.firstChord, d);
  return _.useEffect(() => {
    m(null);
  }, [O]), _.useEffect(() => {
    try {
      localStorage.setItem(ih, JSON.stringify(d));
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
    /* @__PURE__ */ r.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ r.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: d.showChords,
            onChange: (G) => {
              f((le) => ({ ...le, showChords: G.target.checked })), m(null);
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
            checked: w,
            onChange: (G) => b(G.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([G, le]) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: G,
              checked: v === G,
              onChange: () => g(G)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: le })
        ] }, G))
      ] }),
      /* @__PURE__ */ r.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (G) => {
              const le = Number(G.target.value);
              f((re) => ({ ...re, level: le })), m(null);
            },
            children: rk.map((G) => /* @__PURE__ */ r.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ee === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ee}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: Ko.map((G) => /* @__PURE__ */ r.jsxs("label", { children: [
        G,
        /* @__PURE__ */ r.jsx(
          "select",
          {
            "aria-label": G + ": piilotusvaihe",
            value: d.fadeOrder[G],
            onChange: (le) => {
              const re = Number(le.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [G]: re } })), m(null);
            },
            children: sk.map((le) => /* @__PURE__ */ r.jsx("option", { value: le.value, children: le.label }, le.value))
          }
        )
      ] }, G)) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ r.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-section-jump",
            value: S.id,
            onChange: (G) => {
              const le = M.find((re) => re.id === G.target.value);
              le && c(le.start);
            },
            children: M.map((G) => /* @__PURE__ */ r.jsxs("option", { value: G.id, children: [
              mf(G.start),
              " · ",
              G.title
            ] }, G.id))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ r.jsxs("p", { className: "song-current-chord", children: [
          I && !se ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ r.jsx("strong", { children: I && !se ? "?" : C(U) }),
          /* @__PURE__ */ r.jsxs("span", { children: [
            S.title,
            ", tahti ",
            V + 1,
            ", isku ",
            T,
            "/4"
          ] }),
          I && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(se ? null : O),
              children: se ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Y && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: fe ? "?" : C(Y.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": S.title + ": tahdit", children: S.bars.map((G, le) => {
      const re = le === V, W = re && (T < 3 || !G.second), ae = re && T >= 3 && !!G.second, te = Z(G.first, le, "first"), x = G.second ? Z(G.second, le, "second") : !1, y = (te ? C(G.first) : "sointu piilossa") + (G.second ? " " + (x ? C(G.second) : "sointu piilossa") : "") + (we && G.passingBass ? " (basson kulku " + G.passingBass + ")" : "") + (we && G.possibleChord ? " (" + C(G.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (re ? " active" : ""),
          "aria-pressed": re,
          "aria-label": "Tahti " + (le + 1) + ": " + y + ". Siirry kohtaan " + mf(rs(N, le, s)),
          onClick: () => c(rs(N, le, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              le + 1
            ] }),
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ r.jsx("strong", { className: W && te ? "now" : "", children: te ? C(G.first) : "?" }),
              G.second && /* @__PURE__ */ r.jsx("strong", { className: ae && x ? "now" : "", children: x ? C(G.second) : "?" })
            ] }),
            we && G.passingBass && /* @__PURE__ */ r.jsxs("small", { children: [
              "Basso: (",
              G.passingBass,
              "), isku 4"
            ] }),
            we && G.possibleChord && /* @__PURE__ */ r.jsxs("small", { children: [
              "Mahdollinen (",
              C(G.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        le
      );
    }) }),
    w ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: qv(M).map((G, le) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: G.map((re) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: re.title }),
        re.lyrics?.map((W, ae) => /* @__PURE__ */ r.jsx("p", { children: W }, ae))
      ] }, re.id)) }, le)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : S.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        S.title,
        ": sanat"
      ] }),
      S.lyrics.map((G, le) => /* @__PURE__ */ r.jsx("p", { children: G }, le))
    ] }),
    we && S.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: S.note })
  ] });
}
const ba = 7, lk = { name: "bluesasteikko", base: Ue.SCALES.mp.base, add: [[6, "♭5"]] }, bo = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Ue.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: lk,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Ue.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function ok(s) {
  return Ue.scaleNotes(s).map(([a, o]) => Ue.noteName(ba, a, o));
}
const rh = (s) => s === "pentatonic" ? 5 : 7;
function uk(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= rh(s.system)), d = Ue.fingeringBoxes(ba, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (ba + m) % 12), p = (m, w) => w >= 0 && w <= o && f.includes((Ue.OPEN_PITCHES[m] + w) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((w) => {
    const b = w.strings.map((g, C) => {
      if (!g.length) return g;
      const M = g[g.length - 1];
      return p(C, M + 1) ? [...g.slice(0, -1), M + 1] : g;
    }), v = b.flat();
    return { ...w, strings: b, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const kf = 17;
function ck({ open: s }) {
  const [a, o] = _.useState("mp"), [c, d] = _.useState({ pentatonic: [], "3nps": [] }), [f, p] = _.useState(!1), [m, w] = _.useState(!1), b = _.useRef(null), v = bo.find((N) => N.id === a) ?? bo[0], g = c[v.system], C = uk(v, g, kf), M = C.some((N) => N.positions.length > 0), P = Ue.renderBoard(ba, v.scale, kf, {
    automatic: !0,
    boxes: C,
    onlyBoxNotes: M && f,
    label: v.title + (g.length ? ", " + g.map((N) => "boksi " + N).join(", ") : "")
  });
  _.useEffect(() => {
    const N = b.current;
    !N || !s || C.length === 1 && Ue.revealPositions(N, ".box-highlight");
  }, [P, s]);
  function S(N, V) {
    d((T) => ({ ...T, [v.system]: V ? [...T[v.system], N].sort((U, z) => U - z) : T[v.system].filter((U) => U !== N) }));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ r.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ r.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ r.jsx("select", { value: a, onChange: (N) => o(N.target.value), children: bo.map((N) => /* @__PURE__ */ r.jsx("option", { value: N.id, children: N.title }, N.id)) })
    ] }) }),
    /* @__PURE__ */ r.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ r.jsx("strong", { children: v.title }),
      /* @__PURE__ */ r.jsx("span", { children: ok(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: b,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: P }
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
      /* @__PURE__ */ r.jsx("summary", { onClick: (N) => {
        N.preventDefault(), w((V) => !V);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ r.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: rh(v.system) }, (N, V) => V + 1).map((N) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": N, children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            value: N,
            checked: g.includes(N),
            onChange: (V) => S(N, V.target.checked)
          }
        ),
        " Boksi ",
        N
      ] }, v.system + N)) }),
      /* @__PURE__ */ r.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: M && f,
            disabled: !M,
            onChange: (N) => p(N.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: M ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
const Ci = ["backing", "guitar", "vocals"], dk = 0.05, fk = 5e-3;
class hk {
  constructor(a, o = {}) {
    this.context = a, this.fetchImpl = o.fetch ?? ((f, p) => fetch(f, p)), this.now = o.now ?? (() => performance.now());
    const c = {}, d = {};
    for (const f of Ci)
      c[f] = a.createGain(), d[f] = a.createGain(), c[f].connect(d[f]), d[f].connect(a.destination);
    this.inputs = c, this.levels = d;
  }
  context;
  state = "tyhja";
  error = "";
  events = [];
  /** Kutsutaan, kun kappale soi loppuun ilman looppia. */
  onEnded;
  onStateChange;
  /** Mittausta varten: raitakohtaiset tulot ennen tasoa (lähteet kytkeytyvät näihin). */
  inputs;
  levels;
  buffers = {};
  sources = null;
  when = 0;
  offset = 0;
  looping = !1;
  /** Loop on ollut päällä tämän soiton aikana, joten kohta lasketaan loopin pituuden jakojäännöksenä. */
  wrapped = !1;
  loadToken = 0;
  controller = null;
  fetchImpl;
  now;
  record(a, o = {}) {
    this.events.push({ kind: a, ms: Math.round(this.now()), ...o }), this.events.length > 500 && this.events.shift();
  }
  setState(a) {
    this.state !== a && (this.state = a, this.onStateChange?.(a));
  }
  /** Raitojen yhteinen pituus (lyhimmän raidan kesto). 0, jos puskureita ei ole. */
  get duration() {
    const a = Ci.map((o) => this.buffers[o]?.duration ?? 0);
    return a.every((o) => o > 0) ? Math.min(...a) : 0;
  }
  get playing() {
    return this.sources !== null;
  }
  /** Puskurien todellinen koko tavuina (näytteet × kanavat × 4). */
  get bufferBytes() {
    return Ci.reduce((a, o) => {
      const c = this.buffers[o];
      return a + (c ? c.length * c.numberOfChannels * 4 : 0);
    }, 0);
  }
  /**
   * Lataa ja purkaa yhden version kolme raitaa. Edellisen version puskurit ja lähteet vapautetaan ensin.
   * Purku tehdään raita kerrallaan, jotta purun aikainen huippumuisti pysyy pienempänä.
   */
  async load(a) {
    this.release();
    const o = ++this.loadToken, c = new AbortController();
    this.controller = c;
    const d = () => o === this.loadToken;
    this.error = "", this.setState("ladataan");
    const f = this.now();
    this.record("lataus-alku");
    try {
      const p = await Promise.all(Ci.map(async (w) => {
        const b = await this.fetchImpl(a[w], { signal: c.signal });
        if (!b.ok) throw new Error(`${w}: HTTP ${b.status}`);
        const v = await b.arrayBuffer();
        return this.record("ladattu", { track: w, bytes: v.byteLength, kesto: Math.round(this.now() - f) }), v;
      }));
      if (!d()) return "peruttu";
      this.setState("puretaan");
      const m = {};
      for (const [w, b] of Ci.entries()) {
        const v = this.now();
        this.record("purku-alku", { track: b });
        const g = await this.context.decodeAudioData(p[w]);
        if (!d()) return "peruttu";
        m[b] = g, this.record("purettu", {
          track: b,
          kesto: Math.round(this.now() - v),
          length: g.length,
          channels: g.numberOfChannels,
          sampleRate: g.sampleRate,
          bytes: g.length * g.numberOfChannels * 4
        });
      }
      return this.buffers = m, this.controller = null, this.record("valmis", { kesto: Math.round(this.now() - f), bytes: this.bufferBytes, duration: this.duration }), this.setState("valmis"), "valmis";
    } catch (p) {
      return d() ? (this.controller = null, this.buffers = {}, this.error = p instanceof Error ? p.message : String(p), this.record("virhe", { message: this.error }), this.setState("virhe"), "virhe") : "peruttu";
    }
  }
  /** Peruu kesken olevan latauksen tai purun. Valmiit puskurit säilyvät. */
  cancel() {
    this.state !== "ladataan" && this.state !== "puretaan" || (this.loadToken++, this.controller?.abort(), this.controller = null, this.record("peruttu"), this.setState("tyhja"));
  }
  /** Pysäyttää toiston ja vapauttaa puskurit (versionvaihto, soittimesta poistuminen). */
  release() {
    this.cancel(), this.stopSources();
    const a = this.duration > 0;
    this.buffers = {}, this.offset = 0, a && this.record("vapautettu"), this.state !== "tyhja" && this.setState("tyhja");
  }
  /** Vapauttaa kaiken, myös raitojen tasosolmut. */
  dispose() {
    this.release();
    for (const a of Ci)
      this.inputs[a].disconnect(), this.levels[a].disconnect();
  }
  /**
   * Soittaa kaikki raidat kohdasta at samalla ajoitushetkellä. Edelliset lähteet pysäytetään.
   * Palauttaa false, jos puskureita ei ole.
   */
  play(a = this.offset) {
    const o = this.duration;
    if (this.state !== "valmis" || o <= 0) return !1;
    this.stopSources();
    const c = Math.max(0, Math.min(a, o - 1e-3)), d = this.context.currentTime + dk, f = Ci.map((p) => {
      const m = this.context.createBufferSource();
      return m.buffer = this.buffers[p], m.loop = this.looping, m.loopStart = 0, m.loopEnd = o, m.connect(this.inputs[p]), m.start(d, c), m;
    });
    return f[0].onended = () => {
      this.sources === f && (this.sources = null, this.offset = o, this.record("loppu"), this.onEnded?.());
    }, this.sources = f, this.when = d, this.offset = c, this.wrapped = this.looping, this.record("soitto", { when: d, offset: c, contextTime: this.context.currentTime }), !0;
  }
  /** Pysäyttää ja palauttaa kohdan, josta jatko alkaa. */
  pause() {
    const a = this.position();
    return this.sources && this.record("tauko", { at: a }), this.stopSources(), this.offset = a, a;
  }
  /** Kelaa kohtaan at. Soiva kappale jatkuu uudesta kohdasta, pysäytetty aloittaa siitä. */
  seek(a) {
    this.sources ? this.play(a) : this.offset = Math.max(0, Math.min(a, Math.max(0, this.duration - 1e-3))), this.record("kelaus", { at: a });
  }
  /** Loop kaikille raidoille yhtä aikaa: sama alku (0) ja loppu (yhteinen pituus). */
  setLoop(a) {
    this.looping = a, a && (this.wrapped = !0);
    for (const o of this.sources ?? []) o.loop = a;
  }
  /** Raidan taso (äänenvoimakkuus × tasapaino, 0 kun raita on pois). Soitto ei katkea. */
  setLevel(a, o) {
    const c = this.levels[a].gain;
    typeof c.setTargetAtTime == "function" ? c.setTargetAtTime(o, this.context.currentTime, fk) : c.value = o;
  }
  level(a) {
    return this.levels[a].gain.value;
  }
  /** Aikajanan kohta kontekstin kellon hetkellä c (renderöinnin aika). */
  position(a = this.context.currentTime) {
    if (!this.sources) return this.offset;
    const o = this.duration, c = Math.max(0, a - this.when), d = this.offset + c;
    return o <= 0 ? d : this.wrapped ? d % o : Math.min(d, o);
  }
  /**
   * Kuuluva kohta nyt. AudioContext.currentTime on renderöinnin aika, ei kaiuttimen: getOutputTimestamp kertoo,
   * mikä kontekstin hetki on parhaillaan ulostulossa. Ilman sitä vähennetään ilmoitetut viiveet.
   */
  audiblePosition(a = this.now()) {
    const o = this.context.getOutputTimestamp?.();
    let c;
    return o && typeof o.contextTime == "number" && typeof o.performanceTime == "number" && o.contextTime > 0 ? c = o.contextTime + (a - o.performanceTime) / 1e3 : c = this.context.currentTime - (this.context.outputLatency ?? 0) - (this.context.baseLatency ?? 0), this.position(Math.min(c, this.context.currentTime));
  }
  stopSources() {
    const a = this.sources;
    this.sources = null;
    for (const o of a ?? []) {
      o.onended = null;
      try {
        o.stop();
      } catch {
      }
      o.disconnect();
    }
  }
}
function mk() {
  const s = globalThis.navigator?.audioSession;
  s && s.type !== "playback" && (s.type = "playback");
  const a = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!a) throw new Error("Web Audio API puuttuu");
  return new a();
}
const li = typeof location < "u" && new URLSearchParams(location.search).get("soitin") === "d1";
let sh = null;
function pk() {
  return Yv(new URLSearchParams(location.search).get("kappale")) ?? sh ?? Qv;
}
function vk(s) {
  sh = s;
  const a = new URL(location.href);
  nh(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Jv(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const kk = {
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
function gf(s, a) {
  try {
    s.currentTime = a;
  } catch {
  }
}
function xf(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function yk({ onBack: s }) {
  const a = _.useRef(null), o = _.useRef(null), c = _.useRef(null), d = _.useRef(0), f = _.useRef(new Uf()), p = _.useRef(null), m = _.useRef(null), w = _.useRef(0), [b, v] = _.useState("tyhja"), [g, C] = _.useState(pk), M = kk[g], [P, S] = _.useState(!1), [N, V] = _.useState(!0), [T, U] = _.useState(!0), [z, B] = _.useState(!1), [D, O] = _.useState(!1), [I, se] = _.useState(!1), [Z, we] = _.useState(zp), [Ee] = _.useState(() => ev()), Y = _.useRef(null), [fe, G] = _.useState(""), [le, re] = _.useState(0), [W, ae] = _.useState(0), [te, x] = _.useState("");
  function y($ = !1, oe, ue) {
    const Me = a.current;
    if (Me)
      for (const _e of [o.current, c.current])
        _e && (!oe || _e === oe) && f.current.align(Me, _e, $, void 0, ue);
  }
  function ne() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, N],
      ["vocals", c.current, T]
    ];
  }
  function ce($ = Z, oe) {
    if (li) {
      const ue = m.current?.player;
      if (ue) for (const [Me, , _e] of ne()) ue.setLevel(Me, jo(Me, $, oe?.[Me] ?? _e));
      return;
    }
    for (const [ue, Me, _e] of ne()) {
      if (!Me) continue;
      const He = jo(ue, $, oe?.[ue] ?? _e);
      if (Ee === "webaudio" && Y.current?.routed(Me))
        Y.current.setLevel(Me, He);
      else
        try {
          Me.volume = jo(ue, $);
        } catch {
        }
    }
  }
  function Ne($) {
    we($), Bp($), ce($);
  }
  function H() {
    if (li) {
      const $ = m.current?.player;
      $?.playing && re($.pause());
    }
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), S(!1);
  }
  function K($) {
    if ($ !== g) {
      li && (w.current++, m.current?.player.release()), p.current = null, H();
      for (const oe of [a.current, o.current, c.current])
        if (oe)
          try {
            oe.currentTime = 0;
          } catch {
          }
      re(0), ae(0), x(""), C($), vk($);
    }
  }
  function ee($) {
    if (li) {
      const Me = m.current?.player, _e = Math.max(0, Math.min($, W > 0 ? W : $));
      re(_e), Me?.state === "valmis" ? Me.seek(_e) : p.current = _e;
      return;
    }
    const oe = a.current;
    if (!oe || !Number.isFinite($)) return;
    const ue = Math.max(0, Math.min($, Number.isFinite(oe.duration) ? oe.duration : $));
    p.current = ue, re(ue), gf(oe, ue);
  }
  function J($) {
    const oe = p.current;
    if (oe === null || $ !== a.current || $.seeking) return;
    const ue = Number.isFinite($.duration) ? Math.min(oe, $.duration) : oe;
    if (ue !== oe && (p.current = ue, re(ue)), Math.abs($.currentTime - ue) < yf) return;
    const Me = $.seekable;
    for (let _e = 0; _e < Me.length; _e++)
      if (Me.start(_e) <= ue && ue <= Me.end(_e)) {
        gf($, ue);
        return;
      }
  }
  function pe($) {
    if ($ !== a.current) return;
    const oe = p.current;
    if (oe === null)
      re($.currentTime);
    else if ($.readyState >= 1 && !$.seeking && Math.abs($.currentTime - oe) < yf) {
      p.current = null, y(!0);
      return;
    }
    $.paused || y();
  }
  function Ce() {
    if (m.current) return m.current;
    try {
      const $ = mk(), oe = new hk($);
      return oe.onStateChange = v, oe.onEnded = () => {
        S(!1), re(oe.duration);
      }, $.onstatechange = () => {
        $.state !== "running" && oe.playing && (re(oe.pause()), S(!1));
      }, m.current = { context: $, player: oe }, window.__kappaleD1 = { context: $, player: oe }, m.current;
    } catch ($) {
      return x("Web Audio ei ole käytettävissä tässä selaimessa. " + ($ instanceof Error ? $.message : "")), null;
    }
  }
  async function ge() {
    const $ = Ce();
    if (!$) return;
    const { context: oe, player: ue } = $;
    if (P) {
      re(ue.pause()), S(!1);
      return;
    }
    if (ue.state === "ladataan" || ue.state === "puretaan") {
      w.current++, ue.cancel();
      return;
    }
    const Me = oe.state === "running" ? Promise.resolve() : oe.resume();
    x("");
    const _e = ++w.current;
    if (ue.state !== "valmis") {
      const Oe = await ue.load({ backing: M.backing, guitar: M.guitar, vocals: M.vocals });
      if (_e !== w.current) return;
      if (Oe === "virhe") {
        x("Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen.");
        return;
      }
      if (Oe !== "valmis") return;
      ae(ue.duration);
    }
    try {
      await Me;
    } catch {
    }
    if (_e !== w.current) return;
    if (oe.state !== "running") {
      x(`Ääni ei käynnistynyt (Web Audio: ${oe.state}). Paina Soita uudelleen.`);
      return;
    }
    ce(), ue.setLoop(z), p.current !== null && (ue.seek(p.current), p.current = null);
    let He = ue.position();
    if (He >= ue.duration - 0.05 && (He = 0), !ue.play(He)) {
      x("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    re(He), S(!0);
  }
  async function xe() {
    if (li) {
      await ge();
      return;
    }
    const $ = a.current, oe = o.current, ue = c.current;
    if (!$ || !oe || !ue) return;
    if (P) {
      H();
      return;
    }
    x("");
    const Me = p.current ?? $.currentTime;
    if (Number.isFinite($.duration) && Me >= $.duration - 0.05 && ee(0), J($), Ee === "webaudio") {
      const Oe = Y.current ??= new iv(), ze = Oe.unlock() && [$, oe, ue].map((Je) => Oe.route(Je)).every(Boolean);
      G(ze ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + Oe.lastError);
    }
    ce(), oe.muted = !N, ue.muted = !T, y(!0, void 0, Kp);
    const _e = ++d.current;
    N || oe.pause(), T || ue.pause();
    const He = [$, ...N ? [oe] : [], ...T ? [ue] : []];
    if (!Kf(He)) {
      Hp(He);
      const Oe = await Gp(He, Up, () => _e !== d.current);
      if (Oe === "ohitettu" || _e !== d.current) return;
      if (Oe === "virhe") {
        H(), x("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (f.current.hold(performance.now() + Gd), await Promise.all(He.map((Oe) => Oe.play())), _e !== d.current) return;
      if (f.current.hold(performance.now() + Gd), y(), S(!0), Ee === "webaudio" && Y.current?.routed($)) {
        const Oe = Y.current;
        setTimeout(() => {
          _e === d.current && Oe.state !== "running" && x(`Ääni ei käynnistynyt (Web Audio: ${Oe.state}). Pysäytä ja soita uudelleen.${Oe.lastError ? " " + Oe.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (_e !== d.current) return;
      H(), x("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function je($, oe, ue) {
    if (!$) return;
    if ($.muted = !oe, !oe) {
      $.pause();
      return;
    }
    !a.current || !P || (y(!0, $), $.play().catch(() => x(ue + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function Fe($) {
    V($), ce(Z, { guitar: $ }), je(o.current, $, "Kitararaita");
  }
  function Te($) {
    U($), ce(Z, { vocals: $ }), je(c.current, $, "Lauluraita");
  }
  return _.useEffect(() => {
    const $ = () => {
      document.hidden && H();
    };
    return document.addEventListener("visibilitychange", $), () => {
      document.removeEventListener("visibilitychange", $), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), Y.current?.close(), w.current++, m.current?.player.dispose(), m.current?.context.close().catch(() => {
      }), m.current = null, delete window.__kappaleD1;
    };
  }, []), _.useEffect(() => {
    ce();
  }, [g]), _.useEffect(() => {
    m.current?.player.setLoop(z);
  }, [z]), _.useEffect(() => {
    if (!li || !P) return;
    let $ = 0, oe = "", ue = 0;
    const Me = () => {
      const _e = m.current?.player;
      if (_e?.playing) {
        const He = _e.audiblePosition(), Oe = eu(He, g), ze = `${Oe.sectionIndex}:${Oe.barIndex}:${Oe.beat}`, Je = performance.now();
        (ze !== oe || Je - ue > 250) && (oe = ze, ue = Je, re(He));
      }
      $ = requestAnimationFrame(Me);
    };
    return $ = requestAnimationFrame(Me), () => cancelAnimationFrame($);
  }, [P, g]), /* @__PURE__ */ r.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
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
          value: g,
          onChange: ($) => K($.target.value),
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
          M.label,
          " · ",
          M.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          xe();
        }, children: P ? "■ Tauko" : b === "ladataan" || b === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: W > 0 ? W : 1,
            step: 0.1,
            value: Math.min(le, W > 0 ? W : 1),
            disabled: W <= 0,
            onChange: ($) => ee(Number($.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          xf(le),
          " / ",
          xf(W)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: N,
              onChange: ($) => Fe($.target.checked)
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
              onChange: ($) => Te($.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: z,
              onChange: ($) => B($.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": Ee, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            Z > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            Z > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: Z,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": Z + " %",
              onChange: ($) => Ne(Number($.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            Z,
            " %"
          ] })
        ] })
      ] }),
      fe && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: fe }),
      /* @__PURE__ */ r.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ r.jsxs("a", { href: M.download, download: M.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ r.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ r.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          M.label,
          ", koko kappale · ",
          M.downloadSize
        ] })
      ] }),
      te && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: te }),
      li && (b === "ladataan" || b === "puretaan") && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: b === "ladataan" ? "Ladataan kappaleen raitoja…" : "Valmistellaan raitoja soittoa varten…" }),
      !li && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(
          "audio",
          {
            ref: a,
            src: M.backing,
            preload: "metadata",
            loop: z,
            onLoadedMetadata: ($) => {
              $.currentTarget === a.current && (ae($.currentTarget.duration), J($.currentTarget));
            },
            onProgress: ($) => J($.currentTarget),
            onCanPlay: ($) => J($.currentTarget),
            onTimeUpdate: ($) => pe($.currentTarget),
            onEnded: ($) => {
              $.currentTarget !== a.current || $.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), S(!1), re($.currentTarget.duration));
            },
            onPause: ($) => {
              $.currentTarget === a.current && S(!1);
            },
            onError: () => x(M.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
          },
          g + "-backing"
        ),
        /* @__PURE__ */ r.jsx(
          "audio",
          {
            ref: o,
            src: M.guitar,
            preload: "metadata",
            muted: !N,
            loop: z,
            onLoadedMetadata: () => {
              a.current?.paused && y(!0);
            },
            onError: () => x(M.label + ": kitararaita puuttuu tai ei lataudu.")
          },
          g + "-guitar"
        ),
        /* @__PURE__ */ r.jsx(
          "audio",
          {
            ref: c,
            src: M.vocals,
            preload: "metadata",
            muted: !T,
            loop: z,
            onLoadedMetadata: () => {
              a.current?.paused && y(!0);
            },
            onError: () => x(M.label + ": lauluraita puuttuu tai ei lataudu.")
          },
          g + "-vocals"
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-collapse", open: D, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: ($) => {
        $.preventDefault(), O((oe) => !oe);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(ak, { version: g, position: le, loop: z, onSeek: ee })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: I, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: ($) => {
        $.preventDefault(), se((oe) => !oe);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(ck, { open: I })
    ] })
  ] });
}
const Uo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Ca = (s, a = 1) => s.toFixed(a).replace(".", ",").replace("-", "−"), ah = (s) => {
  const a = Math.round(s);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Ho = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function gk(s, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Ho(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function lh({ frame: s, threshold: a }) {
  const o = s?.rms ?? 0, c = ur(o), d = (s?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${Ca(Math.max(-60, c), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "meter-fill", style: { width: `${Xd(o) * 100}%` } }),
        /* @__PURE__ */ r.jsx("div", { className: "meter-threshold", style: { left: `${Xd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function xk({ mic: s, frame: a, heard: o, s: c, now: d }) {
  const f = Qf(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Ie(p.midi, c.flats, !0)} · ${ah(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Uo[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(lh, { frame: a, threshold: c.minRms })
  ] });
}
function jk({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: w, calibrating: b, calibration: v, onTest: g, onStop: C, onCalibrate: M }) {
  const P = _.useId(), S = Qf(s.phase, a), N = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", V = s.phase === "on", T = o && d - o.at < 1500 ? o : null, U = T && (S === "pitch" || S === "untuned"), z = V && (a?.peak ?? 0) >= 0.98, B = s.phase === "error" ? [] : gk(S, f, s.info, z), D = !f.device || m.some((I) => I.deviceId === f.device), O = (I, se) => p({ ...f, [I]: se });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${P}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${P}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${S}`, "data-testid": "mic-state", "data-reading": S, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : Uo[S],
      S === "pitch" && T ? ` ${Ie(T.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Ho(s.info)}.` : s.phase === "error" ? s.error : Uo[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    V && /* @__PURE__ */ r.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ r.jsxs("dd", { "data-testid": "mic-device", children: [
          Ho(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ r.jsxs("dd", { children: [
          /* @__PURE__ */ r.jsx(lh, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Ca(Math.max(-60, ur(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: T ? Ie(T.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: T ? `${Ca(T.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: T ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          ah(T.cents),
          " senttiä",
          /* @__PURE__ */ r.jsx("span", { className: `cents ${T.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, T.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-clarity", children: T ? `${Math.round(T.clarity * 100)} %` : a?.clarity !== void 0 && S === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    V && c && d - c.timestamp < 4e3 && /* @__PURE__ */ r.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ie(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    B.length > 0 && V && /* @__PURE__ */ r.jsx("ul", { className: "mic-advice", children: B.map((I) => /* @__PURE__ */ r.jsx("li", { children: I }, I)) }),
    s.phase === "error" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
      N ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: C, children: "Lopeta testi" }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: w, onClick: g, children: "Testaa mikrofoni" }),
      N && V && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: b, onClick: M, children: b ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    w && s.purpose !== "test" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", disabled: w, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${P}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${P}-device`, value: f.device, onChange: (I) => O("device", I.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((I, se) => /* @__PURE__ */ r.jsx("option", { value: I.deviceId, children: I.label || `Äänitulo ${se + 1}` }, I.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-rms`, children: [
              "Äänikynnys · ",
              Ca(ur(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (I) => O("minRms", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (I) => O("clarity", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (I) => O("stability", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (I) => O("cents", Number(I.target.value)) })
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
const Sk = (s) => s.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[s.scale]) : Ti[s.mode === "caged" ? "maj" : s.chord].tones, jf = (s, a) => Sk(s).find(([o]) => o === a)?.[1], oh = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", wk = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function Nk(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Ek(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${es(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : oh(s) ? `Oikein! ${a.degree}. aste on ${es(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${Ie(a.reference, s.flats, !0)} → ${a.name} on ${ts[a.interval]} ${wk(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${Ie(d.midi, s.flats)} on ${Nf[d.string]}: ${Mi(d.fret)}.` : `Oikein! Soitit sävelen ${Ie(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function Ck(s, a, o, c, d) {
  if (o === "note") return `Ei ${Ie(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${jf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Qe(d.midi) === Qe(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${Xt[d.string]}-kieli. Etsi sävel ${Qo[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Ie(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (oh(s)) {
    const p = Qe(d.midi - s.root), m = jf(s, p), w = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${es(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Ie(d.midi, s.flats)}, joka ei kuulu ${w}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ie(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Tk(s, a, o) {
  const c = Ie(o, s.flats, !0);
  return Qe(o) === Qe(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function uh(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => Xt[p] ? `${Xt[p]}-kieli, ${Mi(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Ie(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Ie(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && ts[c(1)] ? `${ts[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ti[p]) return null;
      const m = Ti[p].tones.find(([w]) => w === c(3))?.[1];
      return m ? `${Ef(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ue.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const w = Ue.scaleNotes(p).find(([b]) => b === c(3))?.[1];
        return w ? `${m}: ${w}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ti.maj.tones.find(([w]) => w === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function Sf(s) {
  return Object.entries(s).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Go = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", Mk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function _k(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${rr(s.mode)}${s.hints ? ` · ${Aa[s.hints].title}` : ""} · ${a} · keskimäärin ${Go(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function bk({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = _.useState(""), p = _.useRef(null), { recent: m, sessions: w, stats: b } = s.data, v = _i(a), g = Tf(a), C = [...new Set(m.map((T) => T.mode))].map((T) => {
    const U = m.filter((z) => z.mode === T);
    return { mode: T, ...Ro(U), last: Math.max(...U.map((z) => z.at)) };
  }).sort((T, U) => U.last - T.last), M = Sf(b).filter((T) => !T.guided && T.mode === a.mode && T.input === v && T.check === g && T.stat.attempts >= 3).map((T) => ({ ...T, score: Yo(T.stat), text: uh(T.item, a.flats) })).filter((T) => T.text && T.score < 0.8).sort((T, U) => T.score - U.score).slice(0, 5), P = Sf(b).reduce((T, U) => T + U.stat.attempts, 0);
  function S() {
    const T = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(T), z = document.createElement("a");
    z.href = U, z.download = "musiikin-kartta-harjoittelu.json", z.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function N(T) {
    if (T)
      try {
        const U = await T.text();
        if (P && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore(U), f("Varmuuskopio palautettu."), c();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function V() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (s.clearProgress(), f("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    P === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        P,
        " vastattua kysymystä · ",
        w.length,
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
        /* @__PURE__ */ r.jsx("tbody", { children: C.map((T) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: rr(T.mode) }),
          /* @__PURE__ */ r.jsx("td", { children: T.count }),
          /* @__PURE__ */ r.jsx("td", { children: T.solo ? `${T.soloFirst}/${T.solo} · ${Math.round(T.soloFirst / T.solo * 100)} %` : "–" }),
          /* @__PURE__ */ r.jsx("td", { children: T.guided }),
          /* @__PURE__ */ r.jsx("td", { children: Go(T.ms / T.count) })
        ] }, T.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi" }),
    M.length ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        rr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ r.jsx("ul", { children: M.map((T) => /* @__PURE__ */ r.jsxs("li", { children: [
        T.text,
        " · viime aikoina ",
        Math.round(ns(T.stat) * 100),
        " % heti oikein · ",
        Go(is(T.stat))
      ] }, T.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: P ? `Harjoituksessa ${rr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Mk[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ r.jsx(Np, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: b, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      w.length ? /* @__PURE__ */ r.jsx("ul", { children: w.slice(-10).reverse().map((T) => /* @__PURE__ */ r.jsx("li", { children: _k(T) }, T.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ r.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: S, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ r.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (T) => {
          N(T.target.files?.[0]);
        } }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !P, onClick: V, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ r.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ r.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function Ak() {
  try {
    return new Id(localStorage);
  } catch {
    return new Id();
  }
}
const wf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), Pk = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", Lk = [0, 2, 4, 5, 7, 9, 11];
function Rk(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Ok() {
  const [s] = _.useState(Ak), [a, o] = _.useState(() => dp(location.search, s.data.settings)), [, c] = _.useReducer((L) => L + 1, 0), d = _.useRef(null), f = _.useRef(new Nv()), p = _.useRef(new as()), m = _.useRef(0), w = _.useRef(), b = _.useRef(), v = _.useRef(null), g = _.useRef(0), C = _.useRef(null), M = _.useRef(a);
  M.current = a;
  const [P, S] = _.useState({ phase: "off", purpose: "none" }), N = _.useRef(P), V = (L) => {
    N.current = L, S(L);
  }, [T, U] = _.useState(null), [z, B] = _.useState(null), [D, O] = _.useState(null), [I, se] = _.useState(0), [Z, we] = _.useState([]), [Ee, Y] = _.useState(!1), [fe, G] = _.useState(!1), [le, re] = _.useState(""), [W, ae] = _.useState("info"), [te, x] = _.useState(""), [y, ne] = _.useState(0), [ce, Ne] = _.useState([]), [H, K] = _.useState([]), [ee, J] = _.useState(null), [pe, Ce] = _.useState(!1), [ge, xe] = _.useState(""), [je, Fe] = _.useState(""), [Te, $] = _.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : nh(L.get("kappale")) ? "songs" : Op(L.get("polku"));
  }), [oe, ue] = _.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.get("polku") === "otelauta" && L.get("harjoitus") === "savelten-etsinta";
  });
  function Me() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), ue(!0);
  }
  function _e() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), ue(!1);
  }
  function He() {
    $(null), ue(!1);
    const L = new URL(location.href);
    L.searchParams.delete("polku"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash);
  }
  const Oe = () => {
    ov().then(we).catch(() => {
    });
  };
  function ze() {
    clearTimeout(b.current), v.current = null, Ce(!1);
  }
  function Je() {
    U(null), B(null), O(null);
  }
  function pt() {
    f.current.stop(), ze(), V({ phase: "off", purpose: "none" }), Je();
  }
  async function Zt(L) {
    if (f.current.active && N.current.phase === "on")
      return ze(), V({ ...N.current, purpose: L }), f.current.rearm(), !0;
    V({ phase: "requesting", purpose: L }), Je();
    try {
      const he = await f.current.start(M.current.device, {
        ...wf(M.current),
        onFrame: (Ge) => At.current.frame(Ge),
        onStableNote: (Ge) => At.current.stable(Ge)
      }, () => At.current.lost());
      return he ? (V({ phase: "on", purpose: L, info: he }), Oe(), !0) : !1;
    } catch (he) {
      return V({ phase: "error", purpose: "none", error: wv(he) }), !1;
    }
  }
  function Ft(L) {
    v.current?.push(L.rms);
    const he = performance.now();
    he - g.current < 66 || (g.current = he, U(L), se(he), L.midi !== void 0 && L.frequency !== void 0 && B({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: he }));
  }
  function qt(L) {
    N.current.purpose === "test" ? O(L) : N.current.purpose === "round" && Pt(L.midi, "mic", void 0, L.heldMs);
  }
  function Ht() {
    const L = N.current.purpose === "round";
    ze(), Je(), V({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const he = d.current;
    L && he && ["active", "feedback", "paused"].includes(he.phase) && (Re(), G(!1), he.pause(), x("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const At = _.useRef({ frame: Ft, stable: qt, lost: Ht });
  At.current = { frame: Ft, stable: qt, lost: Ht };
  function yn(L) {
    const he = Ta(L), Ge = he.device !== M.current.device;
    M.current = he, o(he), s.settings(he), x(""), f.current.active && (Ge && N.current.purpose === "test" ? (pt(), Zt("test")) : f.current.setOptions(wf(he)));
  }
  function be(L) {
    Fe(""), d.current = null, ue(!1), $(L);
  }
  function ln() {
    xe(""), Zt("test");
  }
  function Le() {
    N.current.phase !== "on" || N.current.purpose !== "test" || (ze(), v.current = [], Ce(!0), xe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), b.current = setTimeout(() => {
      const L = v.current ?? [];
      if (ze(), L.length < 10) {
        xe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: he, noise: Ge, loud: Gt } = Ev(L);
      yn({ ...M.current, minRms: he }), xe(`Taustakohina on ${Math.round(ur(Ge))} dB ja äänikynnys nyt ${Math.round(ur(he))} dB. ${Gt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Re() {
    m.current++, clearTimeout(w.current), p.current.stop();
  }
  function De(L, he) {
    if (!L.results.length) return;
    const Ge = Ro(L.results);
    s.session({
      id: L.id,
      mode: L.settings.mode,
      count: Ge.count,
      first: Ge.first,
      ms: Ge.ms,
      solo: Ge.solo,
      soloFirst: Ge.soloFirst,
      hints: L.settings.hints,
      at: Date.now(),
      complete: he
    });
  }
  async function Ze(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    Re();
    const he = m.current;
    L.pause(), f.current.pause(), G(!0), ae("info"), re("Kuuntele…"), c();
    try {
      await p.current.play(L.question.sound);
    } catch {
      he === m.current && x("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    he !== m.current || d.current !== L || (L.resume(), f.current.resume(), G(!1), re(""), c());
  }
  async function at(L) {
    Ne([]), K([]), J(null), x(""), ne(L.hintLevel), f.current.rearm(), ae("info"), re(""), c(), L.question?.sound.length && await Ze(L);
  }
  async function on() {
    const L = M.current, he = Po(L);
    if (he) {
      x(he);
      return;
    }
    Re();
    const Ge = m.current;
    if (x(""), xe(""), Fe(""), ya(L)) {
      Y(!0);
      const ot = await Zt("round");
      if (Ge !== m.current) return;
      if (Y(!1), !ot) {
        x("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else N.current.phase !== "off" && pt();
    const Gt = new Rp(L, () => s.data.stats, (ot) => s.record(ot));
    try {
      Gt.start();
    } catch (ot) {
      N.current.purpose === "round" && pt(), x(ot instanceof Error ? ot.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Gt, requestAnimationFrame(() => C.current?.scrollIntoView({ block: "start", behavior: "auto" })), await at(Gt);
  }
  function jt() {
    Re(), Y(!1), pt();
  }
  function Pt(L, he, Ge, Gt = 0) {
    const ot = d.current, Lt = ot?.question;
    if (!ot || !Lt || ot.phase !== "active") return;
    const pr = ot.answer(L, he, Ge, Gt);
    if (pr !== "ignored") {
      if (pr === "candidate")
        J(L), ae("bad"), re(Tk(ot.settings, Lt, L));
      else if (pr === "wrong")
        Ge ? Ne((wt) => [...wt, Ge]) : K((wt) => [...wt, L]), ae("bad"), re(Ck(ot.settings, Lt, he, L, Ge));
      else if (J(null), ae("good"), re(Ek(ot.settings, Lt, he, L, Ge)), De(ot, !1), ot.settings.advance) {
        const wt = m.current;
        w.current = setTimeout(() => {
          wt === m.current && Cn();
        }, he === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Cn() {
    const L = d.current;
    if (!(!L || L.phase !== "feedback")) {
      Re();
      try {
        L.next();
      } catch (he) {
        un(!1), x(he instanceof Error ? he.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        un(!0);
        return;
      }
      await at(L);
    }
  }
  function un(L = !1) {
    Re(), G(!1), Y(!1), (N.current.purpose === "round" || N.current.phase === "requesting") && pt();
    const he = d.current;
    he && (he.stop(), De(he, L)), J(null), ne(0), Ne([]), K([]), x(""), Fe(L ? "complete" : "stopped"), ae("info"), re(""), c();
  }
  function Tn() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    Re(), G(!1), L.pause();
    const he = N.current.purpose === "round";
    he && pt(), ae("info"), re(`Harjoitus on tauolla.${he ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function ls() {
    const L = d.current;
    if (!L || L.phase !== "paused" || fe) return;
    Re();
    const he = m.current;
    if (x(""), ya(L.settings)) {
      Y(!0);
      const Ge = await Zt("round");
      if (he !== m.current) return;
      if (Y(!1), !Ge) {
        x("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), ae("info"), re(""), c(), L.phase === "active" && (f.current.rearm(), L.question?.sound.length && await Ze(L));
  }
  function fr(L) {
    const he = d.current;
    !he || he.phase !== "active" || (he.useHint(L), ne(L), c());
  }
  const di = _.useRef({ hidden: () => {
  }, restored: () => {
  } });
  di.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || fe ? Tn() : N.current.phase !== "off" && N.current.phase !== "error" && (Re(), Y(!1), pt());
    },
    restored: () => {
      Y(!1), G(!1), V({ phase: "off", purpose: "none" }), Je(), c();
    }
  }, _.useEffect(() => {
    Oe();
    const L = () => Oe();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const he = () => {
      m.current++, clearTimeout(w.current), clearTimeout(b.current), f.current.stop(), p.current.stop(), Sv(), d.current?.pause();
    }, Ge = () => {
      document.hidden && di.current.hidden();
    }, Gt = (ot) => {
      ot.persisted && di.current.restored();
    };
    return document.addEventListener("visibilitychange", Ge), window.addEventListener("pagehide", he), window.addEventListener("pageshow", Gt), () => {
      he(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Ge), window.removeEventListener("pagehide", he), window.removeEventListener("pageshow", Gt);
    };
  }, []);
  const Ai = _.useRef(null), fi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${fe}`;
  _.useEffect(() => {
    const L = d.current, he = C.current, Ge = document.activeElement;
    !L || !he || !(Ge === document.body || he.contains(Ge)) || (L.phase === "feedback" ? Ai.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !fe && (Ge === document.body || Ge === Ai.current) && he.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [fi]);
  const Ve = d.current, et = !!Ve && ["active", "paused", "feedback"].includes(Ve.phase), nt = et ? Ve.settings : a, ft = et ? Ve.question : void 0, It = !!ft && !!Ve?.answered, cn = et && Ve.phase === "paused" && !fe && !It, In = et && Ve.phase === "active" && !fe, hr = et ? null : Po(a), mr = et || Ee, os = bi(nt), Mn = Cp(nt), Dn = ft && !It ? y : 0, Pi = ft ? Lp(nt, ft, It ? 2 : Dn) : { marks: [], text: "" }, us = [...new Map([...Pi.marks, ...It ? [] : ce.map((L) => ({ ...L, label: Ie(L.midi, nt.flats), kind: "wrong" }))].map((L) => [Xe(L), L])).values()], cs = et && ya(nt), ds = !!ft && !cn && (ft.choices === "position" || us.length > 0), St = Ve ? Ro(Ve.results) : null, fs = !Ve || nt.hints !== "fade" ? "" : Ve.index <= 3 ? " · vastaus näkyy" : Ve.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hs = Ve && !et ? Ve.results.filter((L) => L.errors > 0 || L.hint) : [], [Ra, lt] = Rk(nt), zn = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ r.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ r.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), gn = s.data.notice === "hints-default" && /* @__PURE__ */ r.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
  return !et && Te === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(Fp, { onSelect: be })
  ] }) : !et && Te === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(Bv, { onBack: He })
  ] }) : !et && Te === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    oe ? /* @__PURE__ */ r.jsx(Vv, { onBack: _e }) : /* @__PURE__ */ r.jsx(Ip, { onBack: He, onNotes: Me })
  ] }) : !et && Te === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(Hv, { onBack: He })
  ] }) : !et && Te === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(yk, { onBack: He })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: Ra, children: [
      "Lue tämän harjoituksen teoria: ",
      lt,
      " →"
    ] }) }),
    Te !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && un(), He();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: Te === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: Te === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: rr(nt.mode) }),
      " · ",
      Vd(nt)
    ] }) : Te === "legacy" ? /* @__PURE__ */ r.jsx(Kd, { s: a, change: yn, locked: mr, problem: hr }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Kd, { s: a, change: yn, locked: mr, problem: hr })
    ] }),
    !et && (Te === "legacy" || ya(a)) && /* @__PURE__ */ r.jsx(
      jk,
      {
        mic: P,
        frame: T,
        heard: z,
        accepted: D,
        now: I,
        s: a,
        change: yn,
        devices: Z,
        locked: Ee,
        calibrating: pe,
        calibration: ge,
        onTest: ln,
        onStop: pt,
        onCalibrate: Le
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: C, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: rr(nt.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Ve.index}${Ve.total ? " / " + Ve.total : " · vapaa harjoittelu"} · ${Aa[nt.hints].title}${fs}${Ve.phase === "paused" && !fe ? " · tauolla" : ""}` : je === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        Ve && Ve.results.length > 0 && St ? /* @__PURE__ */ r.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ r.jsx("h3", { children: je === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ r.jsxs("dl", { children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-solo", children: St.solo ? `${St.soloFirst} / ${St.solo}` : "–" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-guided", children: St.guided })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ r.jsx("dd", { children: Pk(St.ms / St.count) })
            ] })
          ] }),
          St.solo === 0 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          hs.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(hs.map((L) => uh(L.item, a.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ r.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: Vd(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: Ee ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: jt, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!hr, onClick: () => {
          on();
        }, children: Ve?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ve && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ft && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: cn ? "Harjoitus on tauolla." : ft.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: cn ? "Kysymys palaa näkyviin, kun jatkat." : fe ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Nk(nt, ft) }),
        Ve.hintLevel > 0 && !It && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: nt.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        cs && /* @__PURE__ */ r.jsx(xk, { mic: P, frame: T, heard: z, s: nt, now: I }),
        ft.choices === "note" && !cn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (nt.accidentals ? Array.from({ length: 12 }, (L, he) => he) : Lk).map((L) => /* @__PURE__ */ r.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : It && L === ft.midi % 12 ? "right" : "", disabled: !In || H.includes(L), onClick: () => Pt(L, "note"), children: Ie(L, nt.flats) }, L)) }),
        ft.choices === "degree" && !cn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (nt.mode === "scale" ? Ue.scaleNotes(Ue.SCALES[nt.scale]) : Ti[nt.chord].tones).map(([L, he]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : It && L === ft.interval ? "right" : "", disabled: !In || H.includes(L), onClick: () => Pt(L, "degree"), children: he }, L)) }),
        ds && /* @__PURE__ */ r.jsx(
          ui,
          {
            area: Mn,
            marks: us,
            disabled: !In || ft.choices !== "position" || nt.input === "mic",
            onAnswer: (L) => Pt(L.midi, "board", L),
            caption: os.fixed === "shape" ? `${nt.shape}-muodon alue` : os.fixed === "box" ? `Boksin ${nt.box} alue` : "Otelauta"
          }
        ),
        !It && !cn && Dn > 0 && Pi.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Pi.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: le }),
        ee !== null && Ve.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Ve.confirmWrong(), J(null), re("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        te && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: te }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          Ve.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: Ai, onClick: () => {
            Cn();
          }, children: Ve.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ve.phase === "active" && !It && !fe && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            Dn === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => fr(Math.max(1, Ve.hintLevel)), children: Ve.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Dn === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => fr(2), children: "Näytä vastaus" }),
            Dn > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(0), children: "Piilota vihje" })
          ] }),
          ft.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !In, onClick: () => {
            Ze(Ve);
          }, children: "Kuuntele uudelleen" }),
          Ve.phase === "paused" && !fe ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: Ee, onClick: () => {
            ls();
          }, children: Ee ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Tn, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => un(), children: "Lopeta harjoitus" })
        ] }),
        Ve.phase === "feedback" && nt.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: St?.count ? `Vastattu ${St.count} · itsenäisesti heti oikein ${St.soloFirst}/${St.solo}${St.guided ? ` · vihjeen kanssa ${St.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && te && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: te })
    ] }),
    !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ue.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: fp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(bk, { store: s, s: a, locked: mr, changed: () => {
        const L = Ta(s.data.settings);
        M.current = L, o(L), c();
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
ip.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ r.jsx(Ok, {}));
//# sourceMappingURL=app.js.map
