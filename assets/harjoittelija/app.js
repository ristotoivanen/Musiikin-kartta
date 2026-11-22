function Xm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var po = { exports: {} }, Qr = {}, vo = { exports: {} }, Be = {};
var Td;
function Zm() {
  if (Td) return Be;
  Td = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = Symbol.iterator;
  function C(x) {
    return x === null || typeof x != "object" ? null : (x = g && x[g] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var M = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, S = {};
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
  U.constructor = T, A(U, N.prototype), U.isPureReactComponent = !0;
  var z = Array.isArray, B = Object.prototype.hasOwnProperty, D = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(x, y, ne) {
    var ue, Ee = {}, H = null, K = null;
    if (y != null) for (ue in y.ref !== void 0 && (K = y.ref), y.key !== void 0 && (H = "" + y.key), y) B.call(y, ue) && !$.hasOwnProperty(ue) && (Ee[ue] = y[ue]);
    var ee = arguments.length - 2;
    if (ee === 1) Ee.children = ne;
    else if (1 < ee) {
      for (var Z = Array(ee), me = 0; me < ee; me++) Z[me] = arguments[me + 2];
      Ee.children = Z;
    }
    if (x && x.defaultProps) for (ue in ee = x.defaultProps, ee) Ee[ue] === void 0 && (Ee[ue] = ee[ue]);
    return { $$typeof: s, type: x, key: H, ref: K, props: Ee, _owner: D.current };
  }
  function se(x, y) {
    return { $$typeof: s, type: x.type, key: y, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function X(x) {
    return typeof x == "object" && x !== null && x.$$typeof === s;
  }
  function we(x) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ne) {
      return y[ne];
    });
  }
  var Ce = /\/+/g;
  function Q(x, y) {
    return typeof x == "object" && x !== null && x.key != null ? we("" + x.key) : y.toString(36);
  }
  function de(x, y, ne, ue, Ee) {
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
    if (K) return K = x, Ee = Ee(K), x = ue === "" ? "." + Q(K, 0) : ue, z(Ee) ? (ne = "", x != null && (ne = x.replace(Ce, "$&/") + "/"), de(Ee, y, ne, "", function(me) {
      return me;
    })) : Ee != null && (X(Ee) && (Ee = se(Ee, ne + (!Ee.key || K && K.key === Ee.key ? "" : ("" + Ee.key).replace(Ce, "$&/") + "/") + x)), y.push(Ee)), 1;
    if (K = 0, ue = ue === "" ? "." : ue + ":", z(x)) for (var ee = 0; ee < x.length; ee++) {
      H = x[ee];
      var Z = ue + Q(H, ee);
      K += de(H, y, ne, Z, Ee);
    }
    else if (Z = C(x), typeof Z == "function") for (x = Z.call(x), ee = 0; !(H = x.next()).done; ) H = H.value, Z = ue + Q(H, ee++), K += de(H, y, ne, Z, Ee);
    else if (H === "object") throw y = String(x), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function G(x, y, ne) {
    if (x == null) return x;
    var ue = [], Ee = 0;
    return de(x, ue, "", "", function(H) {
      return y.call(ne, H, Ee++);
    }), ue;
  }
  function oe(x) {
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
    if (!X(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, Be.Component = N, Be.Fragment = o, Be.Profiler = d, Be.PureComponent = T, Be.StrictMode = c, Be.Suspense = w, Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Be.act = te, Be.cloneElement = function(x, y, ne) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ue = A({}, x.props), Ee = x.key, H = x.ref, K = x._owner;
    if (y != null) {
      if (y.ref !== void 0 && (H = y.ref, K = D.current), y.key !== void 0 && (Ee = "" + y.key), x.type && x.type.defaultProps) var ee = x.type.defaultProps;
      for (Z in y) B.call(y, Z) && !$.hasOwnProperty(Z) && (ue[Z] = y[Z] === void 0 && ee !== void 0 ? ee[Z] : y[Z]);
    }
    var Z = arguments.length - 2;
    if (Z === 1) ue.children = ne;
    else if (1 < Z) {
      ee = Array(Z);
      for (var me = 0; me < Z; me++) ee[me] = arguments[me + 2];
      ue.children = ee;
    }
    return { $$typeof: s, type: x.type, key: Ee, ref: H, props: ue, _owner: K };
  }, Be.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: f, _context: x }, x.Consumer = x;
  }, Be.createElement = I, Be.createFactory = function(x) {
    var y = I.bind(null, x);
    return y.type = x, y;
  }, Be.createRef = function() {
    return { current: null };
  }, Be.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, Be.isValidElement = X, Be.lazy = function(x) {
    return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: oe };
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
var Md;
function Qo() {
  return Md || (Md = 1, vo.exports = Zm()), vo.exports;
}
var _d;
function qm() {
  if (_d) return Qr;
  _d = 1;
  var s = Qo(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, w, b) {
    var v, g = {}, C = null, M = null;
    b !== void 0 && (C = "" + b), w.key !== void 0 && (C = "" + w.key), w.ref !== void 0 && (M = w.ref);
    for (v in w) c.call(w, v) && !f.hasOwnProperty(v) && (g[v] = w[v]);
    if (m && m.defaultProps) for (v in w = m.defaultProps, w) g[v] === void 0 && (g[v] = w[v]);
    return { $$typeof: a, type: m, key: C, ref: M, props: g, _owner: d.current };
  }
  return Qr.Fragment = o, Qr.jsx = p, Qr.jsxs = p, Qr;
}
var bd;
function ep() {
  return bd || (bd = 1, po.exports = qm()), po.exports;
}
var r = ep(), _ = Qo(), ka = {}, ko = { exports: {} }, Ht = {}, yo = { exports: {} }, go = {};
var Pd;
function tp() {
  return Pd || (Pd = 1, (function(s) {
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
          var ue = 2 * (x + 1) - 1, Ee = W[ue], H = ue + 1, K = W[H];
          if (0 > d(Ee, te)) H < y && 0 > d(K, Ee) ? (W[x] = K, W[H] = te, x = H) : (W[x] = Ee, W[ue] = te, x = ue);
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
    var w = [], b = [], v = 1, g = null, C = 3, M = !1, A = !1, S = !1, N = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
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
      if (S = !1, U(W), !A) if (o(w) !== null) A = !0, oe(B);
      else {
        var ae = o(b);
        ae !== null && re(z, ae.startTime - W);
      }
    }
    function B(W, ae) {
      A = !1, S && (S = !1, V(I), I = -1), M = !0;
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
          var ue = o(b);
          ue !== null && re(z, ue.startTime - ae), ne = !1;
        }
        return ne;
      } finally {
        g = null, C = te, M = !1;
      }
    }
    var D = !1, $ = null, I = -1, se = 5, X = -1;
    function we() {
      return !(s.unstable_now() - X < se);
    }
    function Ce() {
      if ($ !== null) {
        var W = s.unstable_now();
        X = W;
        var ae = !0;
        try {
          ae = $(!0, W);
        } finally {
          ae ? Q() : (D = !1, $ = null);
        }
      } else D = !1;
    }
    var Q;
    if (typeof T == "function") Q = function() {
      T(Ce);
    };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), G = de.port2;
      de.port1.onmessage = Ce, Q = function() {
        G.postMessage(null);
      };
    } else Q = function() {
      N(Ce, 0);
    };
    function oe(W) {
      $ = W, D || (D = !0, Q());
    }
    function re(W, ae) {
      I = N(function() {
        W(s.unstable_now());
      }, ae);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, s.unstable_continueExecution = function() {
      A || M || (A = !0, oe(B));
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
      return y = te + y, W = { id: v++, callback: ae, priorityLevel: W, startTime: te, expirationTime: y, sortIndex: -1 }, te > x ? (W.sortIndex = te, a(b, W), o(w) === null && W === o(b) && (S ? (V(I), I = -1) : S = !0, re(z, te - x))) : (W.sortIndex = y, a(w, W), A || M || (A = !0, oe(B))), W;
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
var Ad;
function np() {
  return Ad || (Ad = 1, yo.exports = tp()), yo.exports;
}
var Ld;
function ip() {
  if (Ld) return Ht;
  Ld = 1;
  var s = Qo(), a = np();
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
  function A(e, t, n, i) {
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
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A(t, n, l, i) && (n = null), i || l === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var z = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = /* @__PURE__ */ Symbol.for("react.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.provider"), we = /* @__PURE__ */ Symbol.for("react.context"), Ce = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), de = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
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
  function ue(e, t) {
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
  function Ee(e) {
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
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case D:
        return "Portal";
      case se:
        return "Profiler";
      case I:
        return "StrictMode";
      case Q:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case we:
        return (e.displayName || "Context") + ".Consumer";
      case X:
        return (e._context.displayName || "Context") + ".Provider";
      case Ce:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case G:
        return t = e.displayName || null, t !== null ? t : H(e.type) || "Memo";
      case oe:
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
  function Z(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function me(e) {
    var t = Z(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function Te(e) {
    e._valueTracker || (e._valueTracker = me(e));
  }
  function pe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = Z(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function je(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ne(e, t) {
    var n = t.checked;
    return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function $e(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _e(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function Ve(e, t) {
    _e(e, t);
    var n = ee(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Je(e, t.type, n) : t.hasOwnProperty("defaultValue") && Je(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function tt(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Je(e, t, n) {
    (t !== "number" || je(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var O = Array.isArray;
  function le(e, t, n, i) {
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
  function ye(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Me(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (O(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function ve(e, t) {
    var n = ee(t.value), i = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function Ie(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ze(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function St(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ze(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var vt, qt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (vt = vt || document.createElement("div"), vt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Gt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lt = {
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
  Object.keys(Lt).forEach(function(e) {
    yn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Lt[t] = Lt[e];
    });
  });
  function be(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lt.hasOwnProperty(e) && Lt[e] ? ("" + t).trim() : t + "px";
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
  function lt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var on = null, wt = null, Rt = null;
  function Cn(e) {
    if (e = Rr(e)) {
      if (typeof on != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = As(t), on(e.stateNode, e.type, t));
    }
  }
  function un(e) {
    wt ? Rt ? Rt.push(e) : Rt = [e] : wt = e;
  }
  function Tn() {
    if (wt) {
      var e = wt, t = Rt;
      if (Rt = wt = null, Cn(e), t) for (e = 0; e < t.length; e++) Cn(t[e]);
    }
  }
  function ls(e, t) {
    return e(t);
  }
  function fr() {
  }
  var di = !1;
  function Pi(e, t, n) {
    if (di) return e(t, n);
    di = !0;
    try {
      return ls(e, t, n);
    } finally {
      di = !1, (wt !== null || Rt !== null) && (fr(), Tn());
    }
  }
  function fi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = As(n);
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
  var Ke = !1;
  if (m) try {
    var et = {};
    Object.defineProperty(et, "passive", { get: function() {
      Ke = !0;
    } }), window.addEventListener("test", et, et), window.removeEventListener("test", et, et);
  } catch {
    Ke = !1;
  }
  function it(e, t, n, i, l, u, h, k, j) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, F);
    } catch (J) {
      this.onError(J);
    }
  }
  var ht = !1, Dt = null, cn = !1, Dn = null, hr = { onError: function(e) {
    ht = !0, Dt = e;
  } };
  function mr(e, t, n, i, l, u, h, k, j) {
    ht = !1, Dt = null, it.apply(hr, arguments);
  }
  function os(e, t, n, i, l, u, h, k, j) {
    if (mr.apply(this, arguments), ht) {
      if (ht) {
        var F = Dt;
        ht = !1, Dt = null;
      } else throw Error(o(198));
      cn || (cn = !0, Dn = F);
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
  function zn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ai(e) {
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
          if (u === n) return Ai(l), e;
          if (u === i) return Ai(l), t;
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
  var Nt = a.unstable_scheduleCallback, fs = a.unstable_cancelCallback, hs = a.unstable_shouldYield, Ra = a.unstable_requestPaint, ot = a.unstable_now, Bn = a.unstable_getCurrentPriorityLevel, gn = a.unstable_ImmediatePriority, L = a.unstable_UserBlockingPriority, fe = a.unstable_NormalPriority, Ge = a.unstable_LowPriority, Wt = a.unstable_IdlePriority, ut = null, Ot = null;
  function pr(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function") try {
      Ot.onCommitFiberRoot(ut, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Et = Math.clz32 ? Math.clz32 : ph, hh = Math.log, mh = Math.LN2;
  function ph(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hh(e) / mh | 0) | 0;
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
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - Et(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function vh(e, t) {
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
  function kh(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - Et(u), k = 1 << h, j = l[h];
      j === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = vh(k, t)) : j <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Oa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ru() {
    var e = ms;
    return ms <<= 1, (ms & 4194240) === 0 && (ms = 64), e;
  }
  function $a(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function kr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Et(t), e[t] = n;
  }
  function yh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Et(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Fa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - Et(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var qe = 0;
  function su(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var au, Ia, lu, ou, uu, Da = !1, ks = [], Vn = null, Kn = null, Un = null, yr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Hn = [], gh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cu(e, t) {
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
  function xh(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Vn = xr(Vn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = xr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Un = xr(Un, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return yr.set(u, xr(yr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, gr.set(u, xr(gr.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function du(e) {
    var t = hi(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = zn(n), t !== null) {
            e.blockedOn = t, uu(e.priority, function() {
              lu(n);
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
  function fu(e, t, n) {
    ys(e) && n.delete(t);
  }
  function jh() {
    Da = !1, Vn !== null && ys(Vn) && (Vn = null), Kn !== null && ys(Kn) && (Kn = null), Un !== null && ys(Un) && (Un = null), yr.forEach(fu), gr.forEach(fu);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Da || (Da = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, jh)));
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
    for (Vn !== null && jr(Vn, e), Kn !== null && jr(Kn, e), Un !== null && jr(Un, e), yr.forEach(t), gr.forEach(t), n = 0; n < Hn.length; n++) i = Hn[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null); ) du(n), n.blockedOn === null && Hn.shift();
  }
  var Li = z.ReactCurrentBatchConfig, gs = !0;
  function Sh(e, t, n, i) {
    var l = qe, u = Li.transition;
    Li.transition = null;
    try {
      qe = 1, za(e, t, n, i);
    } finally {
      qe = l, Li.transition = u;
    }
  }
  function wh(e, t, n, i) {
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
      if (l === null) rl(e, t, i, xs, n), cu(e, i);
      else if (xh(l, e, t, n, i)) i.stopPropagation();
      else if (cu(e, i), t & 4 && -1 < gh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Rr(l);
          if (u !== null && au(u), u = Ba(e, t, n, i), u === null && rl(e, t, i, xs, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else rl(e, t, i, null, n);
    }
  }
  var xs = null;
  function Ba(e, t, n, i) {
    if (xs = null, e = lt(i), e = hi(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = zn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return xs = e, null;
  }
  function hu(e) {
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
        switch (Bn()) {
          case gn:
            return 1;
          case L:
            return 4;
          case fe:
          case Ge:
            return 16;
          case Wt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, Va = null, js = null;
  function mu() {
    if (js) return js;
    var e, t = Va, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, u = l.length;
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
  function pu() {
    return !1;
  }
  function Yt(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ws : pu, this.isPropagationStopped = pu, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, Ka = Yt(Ri), wr = te({}, Ri, { view: 0, detail: 0 }), Nh = Yt(wr), Ua, Ha, Nr, Ns = te({}, wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (Ua = e.screenX - Nr.screenX, Ha = e.screenY - Nr.screenY) : Ha = Ua = 0, Nr = e), Ua);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ha;
  } }), vu = Yt(Ns), Eh = te({}, Ns, { dataTransfer: 0 }), Ch = Yt(Eh), Th = te({}, wr, { relatedTarget: 0 }), Ga = Yt(Th), Mh = te({}, Ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _h = Yt(Mh), bh = te({}, Ri, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ph = Yt(bh), Ah = te({}, Ri, { data: 0 }), ku = Yt(Ah), Lh = {
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
  }, Rh = {
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
  }, Oh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $h(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Oh[e]) ? !!t[e] : !1;
  }
  function Wa() {
    return $h;
  }
  var Fh = te({}, wr, { key: function(e) {
    if (e.key) {
      var t = Lh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wa, charCode: function(e) {
    return e.type === "keypress" ? Ss(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ih = Yt(Fh), Dh = te({}, Ns, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = Yt(Dh), zh = te({}, wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wa }), Bh = Yt(zh), Vh = te({}, Ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kh = Yt(Vh), Uh = te({}, Ns, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hh = Yt(Uh), Gh = [9, 13, 27, 32], Ya = m && "CompositionEvent" in window, Er = null;
  m && "documentMode" in document && (Er = document.documentMode);
  var Wh = m && "TextEvent" in window && !Er, gu = m && (!Ya || Er && 8 < Er && 11 >= Er), xu = " ", ju = !1;
  function Su(e, t) {
    switch (e) {
      case "keyup":
        return Gh.indexOf(t.keyCode) !== -1;
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
  function wu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Oi = !1;
  function Yh(e, t) {
    switch (e) {
      case "compositionend":
        return wu(t);
      case "keypress":
        return t.which !== 32 ? null : (ju = !0, xu);
      case "textInput":
        return e = t.data, e === xu && ju ? null : e;
      default:
        return null;
    }
  }
  function Qh(e, t) {
    if (Oi) return e === "compositionend" || !Ya && Su(e, t) ? (e = mu(), js = Va = Gn = null, Oi = !1, e) : null;
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
        return gu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jh[e.type] : t === "textarea";
  }
  function Eu(e, t, n, i) {
    un(i), t = _s(t, "onChange"), 0 < t.length && (n = new Ka("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Cr = null, Tr = null;
  function Xh(e) {
    Ku(e, 0);
  }
  function Es(e) {
    var t = zi(e);
    if (pe(t)) return e;
  }
  function Zh(e, t) {
    if (e === "change") return t;
  }
  var Cu = !1;
  if (m) {
    var Qa;
    if (m) {
      var Ja = "oninput" in document;
      if (!Ja) {
        var Tu = document.createElement("div");
        Tu.setAttribute("oninput", "return;"), Ja = typeof Tu.oninput == "function";
      }
      Qa = Ja;
    } else Qa = !1;
    Cu = Qa && (!document.documentMode || 9 < document.documentMode);
  }
  function Mu() {
    Cr && (Cr.detachEvent("onpropertychange", _u), Tr = Cr = null);
  }
  function _u(e) {
    if (e.propertyName === "value" && Es(Tr)) {
      var t = [];
      Eu(t, Tr, e, lt(e)), Pi(Xh, t);
    }
  }
  function qh(e, t, n) {
    e === "focusin" ? (Mu(), Cr = t, Tr = n, Cr.attachEvent("onpropertychange", _u)) : e === "focusout" && Mu();
  }
  function em(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Es(Tr);
  }
  function tm(e, t) {
    if (e === "click") return Es(t);
  }
  function nm(e, t) {
    if (e === "input" || e === "change") return Es(t);
  }
  function im(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dn = typeof Object.is == "function" ? Object.is : im;
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
  function bu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pu(e, t) {
    var n = bu(e);
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
      n = bu(n);
    }
  }
  function Au(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Lu() {
    for (var e = window, t = je(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = je(e.document);
    }
    return t;
  }
  function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function rm(e) {
    var t = Lu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Au(n.ownerDocument.documentElement, n)) {
      if (i !== null && Xa(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(i.start, l);
          i = i.end === void 0 ? u : Math.min(i.end, l), !e.extend && u > i && (l = i, i = u, u = l), l = Pu(n, u);
          var h = Pu(
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
  var sm = m && "documentMode" in document && 11 >= document.documentMode, $i = null, Za = null, _r = null, qa = !1;
  function Ru(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qa || $i == null || $i !== je(i) || (i = $i, "selectionStart" in i && Xa(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), _r && Mr(_r, i) || (_r = i, i = _s(Za, "onSelect"), 0 < i.length && (t = new Ka("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = $i)));
  }
  function Cs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Fi = { animationend: Cs("Animation", "AnimationEnd"), animationiteration: Cs("Animation", "AnimationIteration"), animationstart: Cs("Animation", "AnimationStart"), transitionend: Cs("Transition", "TransitionEnd") }, el = {}, Ou = {};
  m && (Ou = document.createElement("div").style, "AnimationEvent" in window || (delete Fi.animationend.animation, delete Fi.animationiteration.animation, delete Fi.animationstart.animation), "TransitionEvent" in window || delete Fi.transitionend.transition);
  function Ts(e) {
    if (el[e]) return el[e];
    if (!Fi[e]) return e;
    var t = Fi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ou) return el[e] = t[n];
    return e;
  }
  var $u = Ts("animationend"), Fu = Ts("animationiteration"), Iu = Ts("animationstart"), Du = Ts("transitionend"), zu = /* @__PURE__ */ new Map(), Bu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    zu.set(e, t), f(t, [e]);
  }
  for (var tl = 0; tl < Bu.length; tl++) {
    var nl = Bu[tl], am = nl.toLowerCase(), lm = nl[0].toUpperCase() + nl.slice(1);
    Wn(am, "on" + lm);
  }
  Wn($u, "onAnimationEnd"), Wn(Fu, "onAnimationIteration"), Wn(Iu, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Du, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), om = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
  function Vu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, os(i, t, void 0, e), e.currentTarget = null;
  }
  function Ku(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], j = k.instance, F = k.currentTarget;
          if (k = k.listener, j !== u && l.isPropagationStopped()) break e;
          Vu(l, k, F), u = j;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], j = k.instance, F = k.currentTarget, k = k.listener, j !== u && l.isPropagationStopped()) break e;
          Vu(l, k, F), u = j;
        }
      }
    }
    if (cn) throw e = Dn, cn = !1, Dn = null, e;
  }
  function rt(e, t) {
    var n = t[cl];
    n === void 0 && (n = t[cl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Uu(t, e, 2, !1), n.add(i));
  }
  function il(e, t, n) {
    var i = 0;
    t && (i |= 4), Uu(n, e, i, t);
  }
  var Ms = "_reactListening" + Math.random().toString(36).slice(2);
  function Pr(e) {
    if (!e[Ms]) {
      e[Ms] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (om.has(n) || il(n, !1, e), il(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ms] || (t[Ms] = !0, il("selectionchange", !1, t));
    }
  }
  function Uu(e, t, n, i) {
    switch (hu(t)) {
      case 1:
        var l = Sh;
        break;
      case 4:
        l = wh;
        break;
      default:
        l = za;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ke || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
    Pi(function() {
      var F = u, J = lt(n), q = [];
      e: {
        var Y = zu.get(e);
        if (Y !== void 0) {
          var ce = Ka, ke = e;
          switch (e) {
            case "keypress":
              if (Ss(n) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Ih;
              break;
            case "focusin":
              ke = "focus", ce = Ga;
              break;
            case "focusout":
              ke = "blur", ce = Ga;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Ga;
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
              ce = vu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Ch;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Bh;
              break;
            case $u:
            case Fu:
            case Iu:
              ce = _h;
              break;
            case Du:
              ce = Kh;
              break;
            case "scroll":
              ce = Nh;
              break;
            case "wheel":
              ce = Hh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Ph;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = yu;
          }
          var xe = (t & 4) !== 0, mt = !xe && e === "scroll", P = xe ? Y !== null ? Y + "Capture" : null : Y;
          xe = [];
          for (var E = F, R; E !== null; ) {
            R = E;
            var ie = R.stateNode;
            if (R.tag === 5 && ie !== null && (R = ie, P !== null && (ie = fi(E, P), ie != null && xe.push(Ar(E, ie, R)))), mt) break;
            E = E.return;
          }
          0 < xe.length && (Y = new ce(Y, ke, null, n, J), q.push({ event: Y, listeners: xe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Y = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", Y && n !== Ze && (ke = n.relatedTarget || n.fromElement) && (hi(ke) || ke[_n])) break e;
          if ((ce || Y) && (Y = J.window === J ? J : (Y = J.ownerDocument) ? Y.defaultView || Y.parentWindow : window, ce ? (ke = n.relatedTarget || n.toElement, ce = F, ke = ke ? hi(ke) : null, ke !== null && (mt = Mn(ke), ke !== mt || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (ce = null, ke = F), ce !== ke)) {
            if (xe = vu, ie = "onMouseLeave", P = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (xe = yu, ie = "onPointerLeave", P = "onPointerEnter", E = "pointer"), mt = ce == null ? Y : zi(ce), R = ke == null ? Y : zi(ke), Y = new xe(ie, E + "leave", ce, n, J), Y.target = mt, Y.relatedTarget = R, ie = null, hi(J) === F && (xe = new xe(P, E + "enter", ke, n, J), xe.target = R, xe.relatedTarget = mt, ie = xe), mt = ie, ce && ke) t: {
              for (xe = ce, P = ke, E = 0, R = xe; R; R = Ii(R)) E++;
              for (R = 0, ie = P; ie; ie = Ii(ie)) R++;
              for (; 0 < E - R; ) xe = Ii(xe), E--;
              for (; 0 < R - E; ) P = Ii(P), R--;
              for (; E--; ) {
                if (xe === P || P !== null && xe === P.alternate) break t;
                xe = Ii(xe), P = Ii(P);
              }
              xe = null;
            }
            else xe = null;
            ce !== null && Hu(q, Y, ce, xe, !1), ke !== null && mt !== null && Hu(q, mt, ke, xe, !0);
          }
        }
        e: {
          if (Y = F ? zi(F) : window, ce = Y.nodeName && Y.nodeName.toLowerCase(), ce === "select" || ce === "input" && Y.type === "file") var Se = Zh;
          else if (Nu(Y)) if (Cu) Se = nm;
          else {
            Se = em;
            var Pe = qh;
          }
          else (ce = Y.nodeName) && ce.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (Se = tm);
          if (Se && (Se = Se(e, F))) {
            Eu(q, Se, n, J);
            break e;
          }
          Pe && Pe(e, Y, F), e === "focusout" && (Pe = Y._wrapperState) && Pe.controlled && Y.type === "number" && Je(Y, "number", Y.value);
        }
        switch (Pe = F ? zi(F) : window, e) {
          case "focusin":
            (Nu(Pe) || Pe.contentEditable === "true") && ($i = Pe, Za = F, _r = null);
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
            qa = !1, Ru(q, n, J);
            break;
          case "selectionchange":
            if (sm) break;
          case "keydown":
          case "keyup":
            Ru(q, n, J);
        }
        var Ae;
        if (Ya) e: {
          switch (e) {
            case "compositionstart":
              var Oe = "onCompositionStart";
              break e;
            case "compositionend":
              Oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Oe = "onCompositionUpdate";
              break e;
          }
          Oe = void 0;
        }
        else Oi ? Su(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (gu && n.locale !== "ko" && (Oi || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Oi && (Ae = mu()) : (Gn = J, Va = "value" in Gn ? Gn.value : Gn.textContent, Oi = !0)), Pe = _s(F, Oe), 0 < Pe.length && (Oe = new ku(Oe, e, null, n, J), q.push({ event: Oe, listeners: Pe }), Ae ? Oe.data = Ae : (Ae = wu(n), Ae !== null && (Oe.data = Ae)))), (Ae = Wh ? Yh(e, n) : Qh(e, n)) && (F = _s(F, "onBeforeInput"), 0 < F.length && (J = new ku("onBeforeInput", "beforeinput", null, n, J), q.push({ event: J, listeners: F }), J.data = Ae));
      }
      Ku(q, t);
    });
  }
  function Ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function _s(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = fi(e, n), u != null && i.unshift(Ar(e, u, l)), u = fi(e, t), u != null && i.push(Ar(e, u, l))), e = e.return;
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
  function Hu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, j = k.alternate, F = k.stateNode;
      if (j !== null && j === i) break;
      k.tag === 5 && F !== null && (k = F, l ? (j = fi(n, u), j != null && h.unshift(Ar(n, j, k))) : l || (j = fi(n, u), j != null && h.push(Ar(n, j, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var um = /\r\n?/g, cm = /\u0000|\uFFFD/g;
  function Gu(e) {
    return (typeof e == "string" ? e : "" + e).replace(um, `
`).replace(cm, "");
  }
  function bs(e, t, n) {
    if (t = Gu(t), Gu(e) !== t && n) throw Error(o(425));
  }
  function Ps() {
  }
  var sl = null, al = null;
  function ll(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ol = typeof setTimeout == "function" ? setTimeout : void 0, dm = typeof clearTimeout == "function" ? clearTimeout : void 0, Wu = typeof Promise == "function" ? Promise : void 0, fm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wu < "u" ? function(e) {
    return Wu.resolve(null).then(e).catch(hm);
  } : ol;
  function hm(e) {
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
  function Yu(e) {
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
  var Di = Math.random().toString(36).slice(2), xn = "__reactFiber$" + Di, Lr = "__reactProps$" + Di, _n = "__reactContainer$" + Di, cl = "__reactEvents$" + Di, mm = "__reactListeners$" + Di, pm = "__reactHandles$" + Di;
  function hi(e) {
    var t = e[xn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[xn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Yu(e); e !== null; ) {
          if (n = e[xn]) return n;
          e = Yu(e);
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
  function As(e) {
    return e[Lr] || null;
  }
  var dl = [], Bi = -1;
  function Qn(e) {
    return { current: e };
  }
  function st(e) {
    0 > Bi || (e.current = dl[Bi], dl[Bi] = null, Bi--);
  }
  function nt(e, t) {
    Bi++, dl[Bi] = e.current, e.current = t;
  }
  var Jn = {}, _t = Qn(Jn), zt = Qn(!1), mi = Jn;
  function Vi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Bt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ls() {
    st(zt), st(_t);
  }
  function Qu(e, t, n) {
    if (_t.current !== Jn) throw Error(o(168));
    nt(_t, t), nt(zt, n);
  }
  function Ju(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, K(e) || "Unknown", l));
    return te({}, n, i);
  }
  function Rs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, mi = _t.current, nt(_t, e), nt(zt, zt.current), !0;
  }
  function Xu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Ju(e, t, mi), i.__reactInternalMemoizedMergedChildContext = e, st(zt), st(_t), nt(_t, e)) : st(zt), nt(zt, n);
  }
  var bn = null, Os = !1, fl = !1;
  function Zu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function vm(e) {
    Os = !0, Zu(e);
  }
  function Xn() {
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
        throw bn !== null && (bn = bn.slice(e + 1)), Nt(gn, Xn), l;
      } finally {
        qe = t, fl = !1;
      }
    }
    return null;
  }
  var Ki = [], Ui = 0, $s = null, Fs = 0, en = [], tn = 0, pi = null, Pn = 1, An = "";
  function vi(e, t) {
    Ki[Ui++] = Fs, Ki[Ui++] = $s, $s = e, Fs = t;
  }
  function qu(e, t, n) {
    en[tn++] = Pn, en[tn++] = An, en[tn++] = pi, pi = e;
    var i = Pn;
    e = An;
    var l = 32 - Et(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - Et(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, Pn = 1 << 32 - Et(t) + l | n << l | i, An = u + e;
    } else Pn = 1 << u | n << l | i, An = e;
  }
  function hl(e) {
    e.return !== null && (vi(e, 1), qu(e, 1, 0));
  }
  function ml(e) {
    for (; e === $s; ) $s = Ki[--Ui], Ki[Ui] = null, Fs = Ki[--Ui], Ki[Ui] = null;
    for (; e === pi; ) pi = en[--tn], en[tn] = null, An = en[--tn], en[tn] = null, Pn = en[--tn], en[tn] = null;
  }
  var Qt = null, Jt = null, at = !1, fn = null;
  function ec(e, t) {
    var n = an(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function tc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qt = e, Jt = Yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qt = e, Jt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = an(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qt = e, Jt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if (at) {
      var t = Jt;
      if (t) {
        var n = t;
        if (!tc(e, t)) {
          if (pl(e)) throw Error(o(418));
          t = Yn(n.nextSibling);
          var i = Qt;
          t && tc(e, t) ? ec(i, n) : (e.flags = e.flags & -4097 | 2, at = !1, Qt = e);
        }
      } else {
        if (pl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, at = !1, Qt = e;
      }
    }
  }
  function nc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Qt = e;
  }
  function Is(e) {
    if (e !== Qt) return !1;
    if (!at) return nc(e), at = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ll(e.type, e.memoizedProps)), t && (t = Jt)) {
      if (pl(e)) throw ic(), Error(o(418));
      for (; t; ) ec(e, t), t = Yn(t.nextSibling);
    }
    if (nc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Jt = Yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Jt = null;
      }
    } else Jt = Qt ? Yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ic() {
    for (var e = Jt; e; ) e = Yn(e.nextSibling);
  }
  function Hi() {
    Jt = Qt = null, at = !1;
  }
  function kl(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  var km = z.ReactCurrentBatchConfig;
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
  function rc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sc(e) {
    function t(P, E) {
      if (e) {
        var R = P.deletions;
        R === null ? (P.deletions = [E], P.flags |= 16) : R.push(E);
      }
    }
    function n(P, E) {
      if (!e) return null;
      for (; E !== null; ) t(P, E), E = E.sibling;
      return null;
    }
    function i(P, E) {
      for (P = /* @__PURE__ */ new Map(); E !== null; ) E.key !== null ? P.set(E.key, E) : P.set(E.index, E), E = E.sibling;
      return P;
    }
    function l(P, E) {
      return P = si(P, E), P.index = 0, P.sibling = null, P;
    }
    function u(P, E, R) {
      return P.index = R, e ? (R = P.alternate, R !== null ? (R = R.index, R < E ? (P.flags |= 2, E) : R) : (P.flags |= 2, E)) : (P.flags |= 1048576, E);
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function k(P, E, R, ie) {
      return E === null || E.tag !== 6 ? (E = oo(R, P.mode, ie), E.return = P, E) : (E = l(E, R), E.return = P, E);
    }
    function j(P, E, R, ie) {
      var Se = R.type;
      return Se === $ ? J(P, E, R.props.children, ie, R.key) : E !== null && (E.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === oe && rc(Se) === E.type) ? (ie = l(E, R.props), ie.ref = Or(P, E, R), ie.return = P, ie) : (ie = ua(R.type, R.key, R.props, null, P.mode, ie), ie.ref = Or(P, E, R), ie.return = P, ie);
    }
    function F(P, E, R, ie) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== R.containerInfo || E.stateNode.implementation !== R.implementation ? (E = uo(R, P.mode, ie), E.return = P, E) : (E = l(E, R.children || []), E.return = P, E);
    }
    function J(P, E, R, ie, Se) {
      return E === null || E.tag !== 7 ? (E = Ni(R, P.mode, ie, Se), E.return = P, E) : (E = l(E, R), E.return = P, E);
    }
    function q(P, E, R) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return E = oo("" + E, P.mode, R), E.return = P, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case B:
            return R = ua(E.type, E.key, E.props, null, P.mode, R), R.ref = Or(P, null, E), R.return = P, R;
          case D:
            return E = uo(E, P.mode, R), E.return = P, E;
          case oe:
            var ie = E._init;
            return q(P, ie(E._payload), R);
        }
        if (O(E) || ae(E)) return E = Ni(E, P.mode, R, null), E.return = P, E;
        Ds(P, E);
      }
      return null;
    }
    function Y(P, E, R, ie) {
      var Se = E !== null ? E.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return Se !== null ? null : k(P, E, "" + R, ie);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            return R.key === Se ? j(P, E, R, ie) : null;
          case D:
            return R.key === Se ? F(P, E, R, ie) : null;
          case oe:
            return Se = R._init, Y(
              P,
              E,
              Se(R._payload),
              ie
            );
        }
        if (O(R) || ae(R)) return Se !== null ? null : J(P, E, R, ie, null);
        Ds(P, R);
      }
      return null;
    }
    function ce(P, E, R, ie, Se) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return P = P.get(R) || null, k(E, P, "" + ie, Se);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case B:
            return P = P.get(ie.key === null ? R : ie.key) || null, j(E, P, ie, Se);
          case D:
            return P = P.get(ie.key === null ? R : ie.key) || null, F(E, P, ie, Se);
          case oe:
            var Pe = ie._init;
            return ce(P, E, R, Pe(ie._payload), Se);
        }
        if (O(ie) || ae(ie)) return P = P.get(R) || null, J(E, P, ie, Se, null);
        Ds(E, ie);
      }
      return null;
    }
    function ke(P, E, R, ie) {
      for (var Se = null, Pe = null, Ae = E, Oe = E = 0, jt = null; Ae !== null && Oe < R.length; Oe++) {
        Ae.index > Oe ? (jt = Ae, Ae = null) : jt = Ae.sibling;
        var Qe = Y(P, Ae, R[Oe], ie);
        if (Qe === null) {
          Ae === null && (Ae = jt);
          break;
        }
        e && Ae && Qe.alternate === null && t(P, Ae), E = u(Qe, E, Oe), Pe === null ? Se = Qe : Pe.sibling = Qe, Pe = Qe, Ae = jt;
      }
      if (Oe === R.length) return n(P, Ae), at && vi(P, Oe), Se;
      if (Ae === null) {
        for (; Oe < R.length; Oe++) Ae = q(P, R[Oe], ie), Ae !== null && (E = u(Ae, E, Oe), Pe === null ? Se = Ae : Pe.sibling = Ae, Pe = Ae);
        return at && vi(P, Oe), Se;
      }
      for (Ae = i(P, Ae); Oe < R.length; Oe++) jt = ce(Ae, P, Oe, R[Oe], ie), jt !== null && (e && jt.alternate !== null && Ae.delete(jt.key === null ? Oe : jt.key), E = u(jt, E, Oe), Pe === null ? Se = jt : Pe.sibling = jt, Pe = jt);
      return e && Ae.forEach(function(ai) {
        return t(P, ai);
      }), at && vi(P, Oe), Se;
    }
    function xe(P, E, R, ie) {
      var Se = ae(R);
      if (typeof Se != "function") throw Error(o(150));
      if (R = Se.call(R), R == null) throw Error(o(151));
      for (var Pe = Se = null, Ae = E, Oe = E = 0, jt = null, Qe = R.next(); Ae !== null && !Qe.done; Oe++, Qe = R.next()) {
        Ae.index > Oe ? (jt = Ae, Ae = null) : jt = Ae.sibling;
        var ai = Y(P, Ae, Qe.value, ie);
        if (ai === null) {
          Ae === null && (Ae = jt);
          break;
        }
        e && Ae && ai.alternate === null && t(P, Ae), E = u(ai, E, Oe), Pe === null ? Se = ai : Pe.sibling = ai, Pe = ai, Ae = jt;
      }
      if (Qe.done) return n(
        P,
        Ae
      ), at && vi(P, Oe), Se;
      if (Ae === null) {
        for (; !Qe.done; Oe++, Qe = R.next()) Qe = q(P, Qe.value, ie), Qe !== null && (E = u(Qe, E, Oe), Pe === null ? Se = Qe : Pe.sibling = Qe, Pe = Qe);
        return at && vi(P, Oe), Se;
      }
      for (Ae = i(P, Ae); !Qe.done; Oe++, Qe = R.next()) Qe = ce(Ae, P, Oe, Qe.value, ie), Qe !== null && (e && Qe.alternate !== null && Ae.delete(Qe.key === null ? Oe : Qe.key), E = u(Qe, E, Oe), Pe === null ? Se = Qe : Pe.sibling = Qe, Pe = Qe);
      return e && Ae.forEach(function(Jm) {
        return t(P, Jm);
      }), at && vi(P, Oe), Se;
    }
    function mt(P, E, R, ie) {
      if (typeof R == "object" && R !== null && R.type === $ && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case B:
            e: {
              for (var Se = R.key, Pe = E; Pe !== null; ) {
                if (Pe.key === Se) {
                  if (Se = R.type, Se === $) {
                    if (Pe.tag === 7) {
                      n(P, Pe.sibling), E = l(Pe, R.props.children), E.return = P, P = E;
                      break e;
                    }
                  } else if (Pe.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === oe && rc(Se) === Pe.type) {
                    n(P, Pe.sibling), E = l(Pe, R.props), E.ref = Or(P, Pe, R), E.return = P, P = E;
                    break e;
                  }
                  n(P, Pe);
                  break;
                } else t(P, Pe);
                Pe = Pe.sibling;
              }
              R.type === $ ? (E = Ni(R.props.children, P.mode, ie, R.key), E.return = P, P = E) : (ie = ua(R.type, R.key, R.props, null, P.mode, ie), ie.ref = Or(P, E, R), ie.return = P, P = ie);
            }
            return h(P);
          case D:
            e: {
              for (Pe = R.key; E !== null; ) {
                if (E.key === Pe) if (E.tag === 4 && E.stateNode.containerInfo === R.containerInfo && E.stateNode.implementation === R.implementation) {
                  n(P, E.sibling), E = l(E, R.children || []), E.return = P, P = E;
                  break e;
                } else {
                  n(P, E);
                  break;
                }
                else t(P, E);
                E = E.sibling;
              }
              E = uo(R, P.mode, ie), E.return = P, P = E;
            }
            return h(P);
          case oe:
            return Pe = R._init, mt(P, E, Pe(R._payload), ie);
        }
        if (O(R)) return ke(P, E, R, ie);
        if (ae(R)) return xe(P, E, R, ie);
        Ds(P, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, E !== null && E.tag === 6 ? (n(P, E.sibling), E = l(E, R), E.return = P, P = E) : (n(P, E), E = oo(R, P.mode, ie), E.return = P, P = E), h(P)) : n(P, E);
    }
    return mt;
  }
  var Gi = sc(!0), ac = sc(!1), zs = Qn(null), Bs = null, Wi = null, yl = null;
  function gl() {
    yl = Wi = Bs = null;
  }
  function xl(e) {
    var t = zs.current;
    st(zs), e._currentValue = t;
  }
  function jl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Yi(e, t) {
    Bs = e, yl = Wi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Vt = !0), e.firstContext = null);
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
  function lc(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Sl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function wl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function oc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
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
  function uc(e, t) {
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
    Zn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var j = k, F = j.next;
      j.next = null, h === null ? u = F : h.next = F, h = j;
      var J = e.alternate;
      J !== null && (J = J.updateQueue, k = J.lastBaseUpdate, k !== h && (k === null ? J.firstBaseUpdate = F : k.next = F, J.lastBaseUpdate = j));
    }
    if (u !== null) {
      var q = l.baseState;
      h = 0, J = F = j = null, k = u;
      do {
        var Y = k.lane, ce = k.eventTime;
        if ((i & Y) === Y) {
          J !== null && (J = J.next = {
            eventTime: ce,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ke = e, xe = k;
            switch (Y = t, ce = n, xe.tag) {
              case 1:
                if (ke = xe.payload, typeof ke == "function") {
                  q = ke.call(ce, q, Y);
                  break e;
                }
                q = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = xe.payload, Y = typeof ke == "function" ? ke.call(ce, q, Y) : ke, Y == null) break e;
                q = te({}, q, Y);
                break e;
              case 2:
                Zn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Y = l.effects, Y === null ? l.effects = [k] : Y.push(k));
        } else ce = { eventTime: ce, lane: Y, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, J === null ? (F = J = ce, j = q) : J = J.next = ce, h |= Y;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Y = k, k = Y.next, Y.next = null, l.lastBaseUpdate = Y, l.shared.pending = null;
        }
      } while (!0);
      if (J === null && (j = q), l.baseState = j, l.firstBaseUpdate = F, l.lastBaseUpdate = J, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      xi |= h, e.lanes = h, e.memoizedState = q;
    }
  }
  function cc(e, t, n) {
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
    switch (nt(Ir, t), nt(Fr, e), nt(jn, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : St(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = St(t, e);
    }
    st(jn), nt(jn, t);
  }
  function Qi() {
    st(jn), st(Fr), st(Ir);
  }
  function dc(e) {
    yi(Ir.current);
    var t = yi(jn.current), n = St(t, e.type);
    t !== n && (nt(Fr, e), nt(jn, n));
  }
  function El(e) {
    Fr.current === e && (st(jn), st(Fr));
  }
  var ct = Qn(0);
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
  var Hs = z.ReactCurrentDispatcher, Ml = z.ReactCurrentBatchConfig, gi = 0, dt = null, kt = null, gt = null, Gs = !1, Dr = !1, zr = 0, ym = 0;
  function bt() {
    throw Error(o(321));
  }
  function _l(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dn(e[n], t[n])) return !1;
    return !0;
  }
  function bl(e, t, n, i, l, u) {
    if (gi = u, dt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hs.current = e === null || e.memoizedState === null ? Sm : wm, e = n(i, l), Dr) {
      u = 0;
      do {
        if (Dr = !1, zr = 0, 25 <= u) throw Error(o(301));
        u += 1, gt = kt = null, t.updateQueue = null, Hs.current = Nm, e = n(i, l);
      } while (Dr);
    }
    if (Hs.current = Qs, t = kt !== null && kt.next !== null, gi = 0, gt = kt = dt = null, Gs = !1, t) throw Error(o(300));
    return e;
  }
  function Pl() {
    var e = zr !== 0;
    return zr = 0, e;
  }
  function Sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return gt === null ? dt.memoizedState = gt = e : gt = gt.next = e, gt;
  }
  function rn() {
    if (kt === null) {
      var e = dt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = kt.next;
    var t = gt === null ? dt.memoizedState : gt.next;
    if (t !== null) gt = t, kt = e;
    else {
      if (e === null) throw Error(o(310));
      kt = e, e = { memoizedState: kt.memoizedState, baseState: kt.baseState, baseQueue: kt.baseQueue, queue: kt.queue, next: null }, gt === null ? dt.memoizedState = gt = e : gt = gt.next = e;
    }
    return gt;
  }
  function Br(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Al(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = kt, l = i.baseQueue, u = n.pending;
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
        var J = F.lane;
        if ((gi & J) === J) j !== null && (j = j.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), i = F.hasEagerState ? F.eagerState : e(i, F.action);
        else {
          var q = {
            lane: J,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          j === null ? (k = j = q, h = i) : j = j.next = q, dt.lanes |= J, xi |= J;
        }
        F = F.next;
      } while (F !== null && F !== u);
      j === null ? h = i : j.next = k, dn(i, t.memoizedState) || (Vt = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = j, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, dt.lanes |= u, xi |= u, l = l.next;
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
      dn(u, t.memoizedState) || (Vt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function fc() {
  }
  function hc(e, t) {
    var n = dt, i = rn(), l = t(), u = !dn(i.memoizedState, l);
    if (u && (i.memoizedState = l, Vt = !0), i = i.queue, Rl(vc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || gt !== null && gt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Vr(9, pc.bind(null, n, i, l, t), void 0, null), xt === null) throw Error(o(349));
      (gi & 30) !== 0 || mc(n, t, l);
    }
    return l;
  }
  function mc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function pc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, kc(t) && yc(e);
  }
  function vc(e, t, n) {
    return n(function() {
      kc(t) && yc(e);
    });
  }
  function kc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dn(e, n);
    } catch {
      return !0;
    }
  }
  function yc(e) {
    var t = Ln(e, 1);
    t !== null && vn(t, e, 1, -1);
  }
  function gc(e) {
    var t = Sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Br, lastRenderedState: e }, t.queue = e, e = e.dispatch = jm.bind(null, dt, e), [t.memoizedState, e];
  }
  function Vr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function xc() {
    return rn().memoizedState;
  }
  function Ws(e, t, n, i) {
    var l = Sn();
    dt.flags |= e, l.memoizedState = Vr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Ys(e, t, n, i) {
    var l = rn();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (kt !== null) {
      var h = kt.memoizedState;
      if (u = h.destroy, i !== null && _l(i, h.deps)) {
        l.memoizedState = Vr(t, n, u, i);
        return;
      }
    }
    dt.flags |= e, l.memoizedState = Vr(1 | t, n, u, i);
  }
  function jc(e, t) {
    return Ws(8390656, 8, e, t);
  }
  function Rl(e, t) {
    return Ys(2048, 8, e, t);
  }
  function Sc(e, t) {
    return Ys(4, 2, e, t);
  }
  function wc(e, t) {
    return Ys(4, 4, e, t);
  }
  function Nc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ec(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ys(4, 4, Nc.bind(null, t, e), n);
  }
  function Ol() {
  }
  function Cc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && _l(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function Tc(e, t) {
    var n = rn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && _l(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Mc(e, t, n) {
    return (gi & 21) === 0 ? (e.baseState && (e.baseState = !1, Vt = !0), e.memoizedState = n) : (dn(n, t) || (n = ru(), dt.lanes |= n, xi |= n, e.baseState = !0), t);
  }
  function gm(e, t) {
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
  function _c() {
    return rn().memoizedState;
  }
  function xm(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, bc(e)) Pc(t, n);
    else if (n = lc(e, t, n, i), n !== null) {
      var l = Ft();
      vn(n, e, i, l), Ac(n, t, i);
    }
  }
  function jm(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (bc(e)) Pc(t, l);
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
      n = lc(e, t, l, i), n !== null && (l = Ft(), vn(n, e, i, l), Ac(n, t, i));
    }
  }
  function bc(e) {
    var t = e.alternate;
    return e === dt || t !== null && t === dt;
  }
  function Pc(e, t) {
    Dr = Gs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ac(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Fa(e, n);
    }
  }
  var Qs = { readContext: nn, useCallback: bt, useContext: bt, useEffect: bt, useImperativeHandle: bt, useInsertionEffect: bt, useLayoutEffect: bt, useMemo: bt, useReducer: bt, useRef: bt, useState: bt, useDebugValue: bt, useDeferredValue: bt, useTransition: bt, useMutableSource: bt, useSyncExternalStore: bt, useId: bt, unstable_isNewReconciler: !1 }, Sm = { readContext: nn, useCallback: function(e, t) {
    return Sn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: nn, useEffect: jc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ws(
      4194308,
      4,
      Nc.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = xm.bind(null, dt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Sn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: gc, useDebugValue: Ol, useDeferredValue: function(e) {
    return Sn().memoizedState = e;
  }, useTransition: function() {
    var e = gc(!1), t = e[0];
    return e = gm.bind(null, e[1]), Sn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = dt, l = Sn();
    if (at) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), xt === null) throw Error(o(349));
      (gi & 30) !== 0 || mc(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, jc(vc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, Vr(9, pc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Sn(), t = xt.identifierPrefix;
    if (at) {
      var n = An, i = Pn;
      n = (i & ~(1 << 32 - Et(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = ym++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, wm = {
    readContext: nn,
    useCallback: Cc,
    useContext: nn,
    useEffect: Rl,
    useImperativeHandle: Ec,
    useInsertionEffect: Sc,
    useLayoutEffect: wc,
    useMemo: Tc,
    useReducer: Al,
    useRef: xc,
    useState: function() {
      return Al(Br);
    },
    useDebugValue: Ol,
    useDeferredValue: function(e) {
      var t = rn();
      return Mc(t, kt.memoizedState, e);
    },
    useTransition: function() {
      var e = Al(Br)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: hc,
    useId: _c,
    unstable_isNewReconciler: !1
  }, Nm = { readContext: nn, useCallback: Cc, useContext: nn, useEffect: Rl, useImperativeHandle: Ec, useInsertionEffect: Sc, useLayoutEffect: wc, useMemo: Tc, useReducer: Ll, useRef: xc, useState: function() {
    return Ll(Br);
  }, useDebugValue: Ol, useDeferredValue: function(e) {
    var t = rn();
    return kt === null ? t.memoizedState = e : Mc(t, kt.memoizedState, e);
  }, useTransition: function() {
    var e = Ll(Br)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: fc, useSyncExternalStore: hc, useId: _c, unstable_isNewReconciler: !1 };
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
    var i = Ft(), l = ii(e), u = Rn(i, l);
    u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (vn(t, e, l, i), Vs(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Ft(), l = ii(e), u = Rn(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (vn(t, e, l, i), Vs(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ft(), i = ii(e), l = Rn(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (vn(t, e, i, n), Vs(t, e, i));
  } };
  function Lc(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, i) || !Mr(l, u) : !0;
  }
  function Rc(e, t, n) {
    var i = !1, l = Jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = nn(u) : (l = Bt(t) ? mi : _t.current, i = t.contextTypes, u = (i = i != null) ? Vi(e, l) : Jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Js, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Oc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Js.enqueueReplaceState(t, t.state, null);
  }
  function Fl(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, wl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = nn(u) : (u = Bt(t) ? mi : _t.current, l.context = Vi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && ($l(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Js.enqueueReplaceState(l, l.state, null), Ks(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ji(e, t) {
    try {
      var n = "", i = t;
      do
        n += Ee(i), i = i.return;
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
  var Em = typeof WeakMap == "function" ? WeakMap : Map;
  function $c(e, t, n) {
    n = Rn(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ia || (ia = !0, eo = i), Dl(e, t);
    }, n;
  }
  function Fc(e, t, n) {
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
      Dl(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Ic(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Em();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Dm.bind(null, e, t, n), t.then(e, e));
  }
  function Dc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function zc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rn(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Cm = z.ReactCurrentOwner, Vt = !1;
  function $t(e, t, n, i) {
    t.child = e === null ? ac(t, null, n, i) : Gi(t, e.child, n, i);
  }
  function Bc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Yi(t, l), i = bl(e, t, n, i, u, l), n = Pl(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (at && n && hl(t), t.flags |= 1, $t(e, t, i, l), t.child);
  }
  function Vc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !lo(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Kc(e, t, u, i, l)) : (e = ua(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Mr, n(h, i) && e.ref === t.ref) return On(e, t, l);
    }
    return t.flags |= 1, e = si(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Kc(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Mr(u, i) && e.ref === t.ref) if (Vt = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Vt = !0);
      else return t.lanes = e.lanes, On(e, t, l);
    }
    return zl(e, t, n, i, l);
  }
  function Uc(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nt(Zi, Xt), Xt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, nt(Zi, Xt), Xt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, nt(Zi, Xt), Xt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, nt(Zi, Xt), Xt |= i;
    return $t(e, t, l, n), t.child;
  }
  function Hc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function zl(e, t, n, i, l) {
    var u = Bt(n) ? mi : _t.current;
    return u = Vi(t, u), Yi(t, l), n = bl(e, t, n, i, u, l), i = Pl(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (at && i && hl(t), t.flags |= 1, $t(e, t, n, l), t.child);
  }
  function Gc(e, t, n, i, l) {
    if (Bt(n)) {
      var u = !0;
      Rs(t);
    } else u = !1;
    if (Yi(t, l), t.stateNode === null) Zs(e, t), Rc(t, n, i), Fl(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var j = h.context, F = n.contextType;
      typeof F == "object" && F !== null ? F = nn(F) : (F = Bt(n) ? mi : _t.current, F = Vi(t, F));
      var J = n.getDerivedStateFromProps, q = typeof J == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      q || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || j !== F) && Oc(t, h, i, F), Zn = !1;
      var Y = t.memoizedState;
      h.state = Y, Ks(t, i, h, l), j = t.memoizedState, k !== i || Y !== j || zt.current || Zn ? (typeof J == "function" && ($l(t, n, J, i), j = t.memoizedState), (k = Zn || Lc(t, n, k, i, Y, j, F)) ? (q || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = j), h.props = i, h.state = j, h.context = F, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, oc(e, t), k = t.memoizedProps, F = t.type === t.elementType ? k : hn(t.type, k), h.props = F, q = t.pendingProps, Y = h.context, j = n.contextType, typeof j == "object" && j !== null ? j = nn(j) : (j = Bt(n) ? mi : _t.current, j = Vi(t, j));
      var ce = n.getDerivedStateFromProps;
      (J = typeof ce == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== q || Y !== j) && Oc(t, h, i, j), Zn = !1, Y = t.memoizedState, h.state = Y, Ks(t, i, h, l);
      var ke = t.memoizedState;
      k !== q || Y !== ke || zt.current || Zn ? (typeof ce == "function" && ($l(t, n, ce, i), ke = t.memoizedState), (F = Zn || Lc(t, n, F, i, Y, ke, j) || !1) ? (J || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ke, j), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ke, j)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ke), h.props = i, h.state = ke, h.context = j, i = F) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Y === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Bl(e, t, n, i, u, l);
  }
  function Bl(e, t, n, i, l, u) {
    Hc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Xu(t, n, !1), On(e, t, u);
    i = t.stateNode, Cm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Gi(t, e.child, null, u), t.child = Gi(t, null, k, u)) : $t(e, t, k, u), t.memoizedState = i.state, l && Xu(t, n, !0), t.child;
  }
  function Wc(e) {
    var t = e.stateNode;
    t.pendingContext ? Qu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qu(e, t.context, !1), Nl(e, t.containerInfo);
  }
  function Yc(e, t, n, i, l) {
    return Hi(), kl(l), t.flags |= 256, $t(e, t, n, i), t.child;
  }
  var Vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Qc(e, t, n) {
    var i = t.pendingProps, l = ct.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), nt(ct, l & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = ca(h, i, 0, null), e = Ni(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Kl(n), t.memoizedState = Vl, e) : Ul(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Tm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var j = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = j, t.deletions = null) : (i = si(l, j), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = si(k, u) : (u = Ni(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? Kl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Vl, i;
    }
    return u = e.child, e = u.sibling, i = si(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Ul(e, t) {
    return t = ca({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Xs(e, t, n, i) {
    return i !== null && kl(i), Gi(t, e.child, null, n), e = Ul(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Tm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Il(Error(o(422))), Xs(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = ca({ mode: "visible", children: i.children }, l, 0, null), u = Ni(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Gi(t, e.child, null, h), t.child.memoizedState = Kl(h), t.memoizedState = Vl, u);
    if ((t.mode & 1) === 0) return Xs(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = Il(u, i, void 0), Xs(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, Vt || k) {
      if (i = xt, i !== null) {
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
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Jt = Yn(l.nextSibling), Qt = t, at = !0, fn = null, e !== null && (en[tn++] = Pn, en[tn++] = An, en[tn++] = pi, Pn = e.id, An = e.overflow, pi = t), t = Ul(t, i.children), t.flags |= 4096, t);
  }
  function Jc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), jl(e.return, t, n);
  }
  function Hl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Xc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if ($t(e, t, i.children, n), i = ct.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jc(e, n, t);
        else if (e.tag === 19) Jc(e, n, t);
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
    if (nt(ct, i), (t.mode & 1) === 0) t.memoizedState = null;
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
      for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Mm(e, t, n) {
    switch (t.tag) {
      case 3:
        Wc(t), Hi();
        break;
      case 5:
        dc(t);
        break;
      case 1:
        Bt(t.type) && Rs(t);
        break;
      case 4:
        Nl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        nt(zs, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (nt(ct, ct.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Qc(e, t, n) : (nt(ct, ct.current & 1), e = On(e, t, n), e !== null ? e.sibling : null);
        nt(ct, ct.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Xc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), nt(ct, ct.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Uc(e, t, n);
    }
    return On(e, t, n);
  }
  var Zc, Gl, qc, ed;
  Zc = function(e, t) {
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
  }, qc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, yi(jn.current);
      var u = null;
      switch (n) {
        case "input":
          l = Ne(e, l), i = Ne(e, i), u = [];
          break;
        case "select":
          l = te({}, l, { value: void 0 }), i = te({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ye(e, l), i = ye(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ps);
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
        else F === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, k = k ? k.__html : void 0, j != null && k !== j && (u = u || []).push(F, j)) : F === "children" ? typeof j != "string" && typeof j != "number" || (u = u || []).push(F, "" + j) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (d.hasOwnProperty(F) ? (j != null && F === "onScroll" && rt("scroll", e), u || k === j || (u = [])) : (u = u || []).push(F, j));
      }
      n && (u = u || []).push("style", n);
      var F = u;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, ed = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Kr(e, t) {
    if (!at) switch (e.tailMode) {
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
  function Pt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function _m(e, t, n) {
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
        return Pt(t), null;
      case 1:
        return Bt(t.type) && Ls(), Pt(t), null;
      case 3:
        return i = t.stateNode, Qi(), st(zt), st(_t), Tl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Is(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fn !== null && (io(fn), fn = null))), Gl(e, t), Pt(t), null;
      case 5:
        El(t);
        var l = yi(Ir.current);
        if (n = t.type, e !== null && t.stateNode != null) qc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Pt(t), null;
          }
          if (e = yi(jn.current), Is(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[xn] = t, i[Lr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                rt("cancel", i), rt("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                rt("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < br.length; l++) rt(br[l], i);
                break;
              case "source":
                rt("error", i);
                break;
              case "img":
              case "image":
              case "link":
                rt(
                  "error",
                  i
                ), rt("load", i);
                break;
              case "details":
                rt("toggle", i);
                break;
              case "input":
                $e(i, u), rt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, rt("invalid", i);
                break;
              case "textarea":
                Me(i, u), rt("invalid", i);
            }
            Re(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && bs(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && bs(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && rt("scroll", i);
            }
            switch (n) {
              case "input":
                Te(i), tt(i, u, !0);
                break;
              case "textarea":
                Te(i), Ie(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = Ps);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ze(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[xn] = t, e[Lr] = i, Zc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = De(n, i), n) {
                case "dialog":
                  rt("cancel", e), rt("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  rt("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < br.length; l++) rt(br[l], e);
                  l = i;
                  break;
                case "source":
                  rt("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  rt(
                    "error",
                    e
                  ), rt("load", e), l = i;
                  break;
                case "details":
                  rt("toggle", e), l = i;
                  break;
                case "input":
                  $e(e, i), l = Ne(e, i), rt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = te({}, i, { value: void 0 }), rt("invalid", e);
                  break;
                case "textarea":
                  Me(e, i), l = ye(e, i), rt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Re(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var j = k[u];
                u === "style" ? ln(e, j) : u === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && qt(e, j)) : u === "children" ? typeof j == "string" ? (n !== "textarea" || j !== "") && Gt(e, j) : typeof j == "number" && Gt(e, "" + j) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? j != null && u === "onScroll" && rt("scroll", e) : j != null && U(e, u, j, h));
              }
              switch (n) {
                case "input":
                  Te(e), tt(e, i, !1);
                  break;
                case "textarea":
                  Te(e), Ie(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ee(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? le(e, !!i.multiple, u, !1) : i.defaultValue != null && le(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ps);
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
        return Pt(t), null;
      case 6:
        if (e && t.stateNode != null) ed(e, t, e.memoizedProps, i);
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
        return Pt(t), null;
      case 13:
        if (st(ct), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (at && Jt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ic(), Hi(), t.flags |= 98560, u = !1;
          else if (u = Is(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[xn] = t;
            } else Hi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pt(t), u = !1;
          } else fn !== null && (io(fn), fn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ct.current & 1) !== 0 ? yt === 0 && (yt = 3) : ao())), t.updateQueue !== null && (t.flags |= 4), Pt(t), null);
      case 4:
        return Qi(), Gl(e, t), e === null && Pr(t.stateNode.containerInfo), Pt(t), null;
      case 10:
        return xl(t.type._context), Pt(t), null;
      case 17:
        return Bt(t.type) && Ls(), Pt(t), null;
      case 19:
        if (st(ct), u = t.memoizedState, u === null) return Pt(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Kr(u, !1);
        else {
          if (yt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Us(e), h !== null) {
              for (t.flags |= 128, Kr(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return nt(ct, ct.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ot() > qi && (t.flags |= 128, i = !0, Kr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Us(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kr(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !at) return Pt(t), null;
          } else 2 * ot() - u.renderingStartTime > qi && n !== 1073741824 && (t.flags |= 128, i = !0, Kr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ot(), t.sibling = null, n = ct.current, nt(ct, i ? n & 1 | 2 : n & 1), t) : (Pt(t), null);
      case 22:
      case 23:
        return so(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Xt & 1073741824) !== 0 && (Pt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function bm(e, t) {
    switch (ml(t), t.tag) {
      case 1:
        return Bt(t.type) && Ls(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qi(), st(zt), st(_t), Tl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return El(t), null;
      case 13:
        if (st(ct), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Hi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return st(ct), null;
      case 4:
        return Qi(), null;
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
  var qs = !1, At = !1, Pm = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Xi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ft(e, t, i);
    }
    else n.current = null;
  }
  function Wl(e, t, n) {
    try {
      n();
    } catch (i) {
      ft(e, t, i);
    }
  }
  var td = !1;
  function Am(e, t) {
    if (sl = gs, e = Lu(), Xa(e)) {
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
          var h = 0, k = -1, j = -1, F = 0, J = 0, q = e, Y = null;
          t: for (; ; ) {
            for (var ce; q !== n || l !== 0 && q.nodeType !== 3 || (k = h + l), q !== u || i !== 0 && q.nodeType !== 3 || (j = h + i), q.nodeType === 3 && (h += q.nodeValue.length), (ce = q.firstChild) !== null; )
              Y = q, q = ce;
            for (; ; ) {
              if (q === e) break t;
              if (Y === n && ++F === l && (k = h), Y === u && ++J === i && (j = h), (ce = q.nextSibling) !== null) break;
              q = Y, Y = q.parentNode;
            }
            q = ce;
          }
          n = k === -1 || j === -1 ? null : { start: k, end: j };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (al = { focusedElem: e, selectionRange: n }, gs = !1, he = t; he !== null; ) if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, he = e;
    else for (; he !== null; ) {
      t = he;
      try {
        var ke = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ke !== null) {
              var xe = ke.memoizedProps, mt = ke.memoizedState, P = t.stateNode, E = P.getSnapshotBeforeUpdate(t.elementType === t.type ? xe : hn(t.type, xe), mt);
              P.__reactInternalSnapshotBeforeUpdate = E;
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
        ft(t, t.return, ie);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, he = e;
        break;
      }
      he = t.return;
    }
    return ke = td, td = !1, ke;
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
  function Yl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function nd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xn], delete t[Lr], delete t[cl], delete t[mm], delete t[pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function id(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function rd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || id(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ql(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ps));
    else if (i !== 4 && (e = e.child, e !== null)) for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), e = e.sibling;
  }
  function Jl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), e = e.sibling;
  }
  var Ct = null, mn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) sd(e, t, n), n = n.sibling;
  }
  function sd(e, t, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function") try {
      Ot.onCommitFiberUnmount(ut, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        At || Xi(n, t);
      case 6:
        var i = Ct, l = mn;
        Ct = null, ei(e, t, n), Ct = i, mn = l, Ct !== null && (mn ? (e = Ct, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ct.removeChild(n.stateNode));
        break;
      case 18:
        Ct !== null && (mn ? (e = Ct, n = n.stateNode, e.nodeType === 8 ? ul(e.parentNode, n) : e.nodeType === 1 && ul(e, n), Sr(e)) : ul(Ct, n.stateNode));
        break;
      case 4:
        i = Ct, l = mn, Ct = n.stateNode.containerInfo, mn = !0, ei(e, t, n), Ct = i, mn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!At && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Wl(n, t, h), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!At && (Xi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          ft(n, t, k);
        }
        ei(e, t, n);
        break;
      case 21:
        ei(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (At = (i = At) || n.memoizedState !== null, ei(e, t, n), At = i) : ei(e, t, n);
        break;
      default:
        ei(e, t, n);
    }
  }
  function ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Pm()), t.forEach(function(i) {
        var l = Bm.bind(null, e, i);
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
              Ct = k.stateNode, mn = !1;
              break e;
            case 3:
              Ct = k.stateNode.containerInfo, mn = !0;
              break e;
            case 4:
              Ct = k.stateNode.containerInfo, mn = !0;
              break e;
          }
          k = k.return;
        }
        if (Ct === null) throw Error(o(160));
        sd(u, h, l), Ct = null, mn = !1;
        var j = l.alternate;
        j !== null && (j.return = null), l.return = null;
      } catch (F) {
        ft(l, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ld(t, e), t = t.sibling;
  }
  function ld(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(t, e), wn(e), i & 4) {
          try {
            Ur(3, e, e.return), ea(3, e);
          } catch (xe) {
            ft(e, e.return, xe);
          }
          try {
            Ur(5, e, e.return);
          } catch (xe) {
            ft(e, e.return, xe);
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
            Gt(l, "");
          } catch (xe) {
            ft(e, e.return, xe);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, j = e.updateQueue;
          if (e.updateQueue = null, j !== null) try {
            k === "input" && u.type === "radio" && u.name != null && _e(l, u), De(k, h);
            var F = De(k, u);
            for (h = 0; h < j.length; h += 2) {
              var J = j[h], q = j[h + 1];
              J === "style" ? ln(l, q) : J === "dangerouslySetInnerHTML" ? qt(l, q) : J === "children" ? Gt(l, q) : U(l, J, q, F);
            }
            switch (k) {
              case "input":
                Ve(l, u);
                break;
              case "textarea":
                ve(l, u);
                break;
              case "select":
                var Y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var ce = u.value;
                ce != null ? le(l, !!u.multiple, ce, !1) : Y !== !!u.multiple && (u.defaultValue != null ? le(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : le(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Lr] = u;
          } catch (xe) {
            ft(e, e.return, xe);
          }
        }
        break;
      case 6:
        if (pn(t, e), wn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (xe) {
            ft(e, e.return, xe);
          }
        }
        break;
      case 3:
        if (pn(t, e), wn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Sr(t.containerInfo);
        } catch (xe) {
          ft(e, e.return, xe);
        }
        break;
      case 4:
        pn(t, e), wn(e);
        break;
      case 13:
        pn(t, e), wn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (ql = ot())), i & 4 && ad(e);
        break;
      case 22:
        if (J = n !== null && n.memoizedState !== null, e.mode & 1 ? (At = (F = At) || J, pn(t, e), At = F) : pn(t, e), wn(e), i & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !J && (e.mode & 1) !== 0) for (he = e, J = e.child; J !== null; ) {
            for (q = he = J; he !== null; ) {
              switch (Y = he, ce = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, Y, Y.return);
                  break;
                case 1:
                  Xi(Y, Y.return);
                  var ke = Y.stateNode;
                  if (typeof ke.componentWillUnmount == "function") {
                    i = Y, n = Y.return;
                    try {
                      t = i, ke.props = t.memoizedProps, ke.state = t.memoizedState, ke.componentWillUnmount();
                    } catch (xe) {
                      ft(i, n, xe);
                    }
                  }
                  break;
                case 5:
                  Xi(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    cd(q);
                    continue;
                  }
              }
              ce !== null ? (ce.return = Y, he = ce) : cd(q);
            }
            J = J.sibling;
          }
          e: for (J = null, q = e; ; ) {
            if (q.tag === 5) {
              if (J === null) {
                J = q;
                try {
                  l = q.stateNode, F ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = q.stateNode, j = q.memoizedProps.style, h = j != null && j.hasOwnProperty("display") ? j.display : null, k.style.display = be("display", h));
                } catch (xe) {
                  ft(e, e.return, xe);
                }
              }
            } else if (q.tag === 6) {
              if (J === null) try {
                q.stateNode.nodeValue = F ? "" : q.memoizedProps;
              } catch (xe) {
                ft(e, e.return, xe);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              J === q && (J = null), q = q.return;
            }
            J === q && (J = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        pn(t, e), wn(e), i & 4 && ad(e);
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
            if (id(n)) {
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
            i.flags & 32 && (Gt(l, ""), i.flags &= -33);
            var u = rd(e);
            Jl(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = rd(e);
            Ql(e, k, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        ft(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lm(e, t, n) {
    he = e, od(e);
  }
  function od(e, t, n) {
    for (var i = (e.mode & 1) !== 0; he !== null; ) {
      var l = he, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || qs;
        if (!h) {
          var k = l.alternate, j = k !== null && k.memoizedState !== null || At;
          k = qs;
          var F = At;
          if (qs = h, (At = j) && !F) for (he = l; he !== null; ) h = he, j = h.child, h.tag === 22 && h.memoizedState !== null ? dd(l) : j !== null ? (j.return = h, he = j) : dd(l);
          for (; u !== null; ) he = u, od(u), u = u.sibling;
          he = l, qs = k, At = F;
        }
        ud(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, he = u) : ud(e);
    }
  }
  function ud(e) {
    for (; he !== null; ) {
      var t = he;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              At || ea(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !At) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : hn(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && cc(t, u, i);
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
                cc(t, h, n);
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
                  var J = F.memoizedState;
                  if (J !== null) {
                    var q = J.dehydrated;
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
          At || t.flags & 512 && Yl(t);
        } catch (Y) {
          ft(t, t.return, Y);
        }
      }
      if (t === e) {
        he = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function cd(e) {
    for (; he !== null; ) {
      var t = he;
      if (t === e) {
        he = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function dd(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ea(4, t);
            } catch (j) {
              ft(t, n, j);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (j) {
                ft(t, l, j);
              }
            }
            var u = t.return;
            try {
              Yl(t);
            } catch (j) {
              ft(t, u, j);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Yl(t);
            } catch (j) {
              ft(t, h, j);
            }
        }
      } catch (j) {
        ft(t, t.return, j);
      }
      if (t === e) {
        he = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, he = k;
        break;
      }
      he = t.return;
    }
  }
  var Rm = Math.ceil, ta = z.ReactCurrentDispatcher, Xl = z.ReactCurrentOwner, sn = z.ReactCurrentBatchConfig, We = 0, xt = null, pt = null, Tt = 0, Xt = 0, Zi = Qn(0), yt = 0, Hr = null, xi = 0, na = 0, Zl = 0, Gr = null, Kt = null, ql = 0, qi = 1 / 0, $n = null, ia = !1, eo = null, ti = null, ra = !1, ni = null, sa = 0, Wr = 0, to = null, aa = -1, la = 0;
  function Ft() {
    return (We & 6) !== 0 ? ot() : aa !== -1 ? aa : aa = ot();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (We & 2) !== 0 && Tt !== 0 ? Tt & -Tt : km.transition !== null ? (la === 0 && (la = ru()), la) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hu(e.type)), e);
  }
  function vn(e, t, n, i) {
    if (50 < Wr) throw Wr = 0, to = null, Error(o(185));
    kr(e, n, i), ((We & 2) === 0 || e !== xt) && (e === xt && ((We & 2) === 0 && (na |= n), yt === 4 && ri(e, Tt)), Ut(e, i), n === 1 && We === 0 && (t.mode & 1) === 0 && (qi = ot() + 500, Os && Xn()));
  }
  function Ut(e, t) {
    var n = e.callbackNode;
    kh(e, t);
    var i = vs(e, e === xt ? Tt : 0);
    if (i === 0) n !== null && fs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && fs(n), t === 1) e.tag === 0 ? vm(hd.bind(null, e)) : Zu(hd.bind(null, e)), fm(function() {
        (We & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (su(i)) {
          case 1:
            n = gn;
            break;
          case 4:
            n = L;
            break;
          case 16:
            n = fe;
            break;
          case 536870912:
            n = Wt;
            break;
          default:
            n = fe;
        }
        n = jd(n, fd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function fd(e, t) {
    if (aa = -1, la = 0, (We & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var i = vs(e, e === xt ? Tt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = oa(e, i);
    else {
      t = i;
      var l = We;
      We |= 2;
      var u = pd();
      (xt !== e || Tt !== t) && ($n = null, qi = ot() + 500, Si(e, t));
      do
        try {
          Fm();
          break;
        } catch (k) {
          md(e, k);
        }
      while (!0);
      gl(), ta.current = u, We = l, pt !== null ? t = 0 : (xt = null, Tt = 0, t = yt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Oa(e), l !== 0 && (i = l, t = no(e, l))), t === 1) throw n = Hr, Si(e, 0), ri(e, i), Ut(e, ot()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Om(l) && (t = oa(e, i), t === 2 && (u = Oa(e), u !== 0 && (i = u, t = no(e, u))), t === 1)) throw n = Hr, Si(e, 0), ri(e, i), Ut(e, ot()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wi(e, Kt, $n);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = ql + 500 - ot(), 10 < t)) {
              if (vs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Ft(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ol(wi.bind(null, e, Kt, $n), t);
              break;
            }
            wi(e, Kt, $n);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - Et(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = ot() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Rm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = ol(wi.bind(null, e, Kt, $n), i);
              break;
            }
            wi(e, Kt, $n);
            break;
          case 5:
            wi(e, Kt, $n);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Ut(e, ot()), e.callbackNode === n ? fd.bind(null, e) : null;
  }
  function no(e, t) {
    var n = Gr;
    return e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256), e = oa(e, t), e !== 2 && (t = Kt, Kt = n, t !== null && io(t)), e;
  }
  function io(e) {
    Kt === null ? Kt = e : Kt.push.apply(Kt, e);
  }
  function Om(e) {
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
  function ri(e, t) {
    for (t &= ~Zl, t &= ~na, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Et(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function hd(e) {
    if ((We & 6) !== 0) throw Error(o(327));
    er();
    var t = vs(e, 0);
    if ((t & 1) === 0) return Ut(e, ot()), null;
    var n = oa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Oa(e);
      i !== 0 && (t = i, n = no(e, i));
    }
    if (n === 1) throw n = Hr, Si(e, 0), ri(e, t), Ut(e, ot()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wi(e, Kt, $n), Ut(e, ot()), null;
  }
  function ro(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (qi = ot() + 500, Os && Xn());
    }
  }
  function ji(e) {
    ni !== null && ni.tag === 0 && (We & 6) === 0 && er();
    var t = We;
    We |= 1;
    var n = sn.transition, i = qe;
    try {
      if (sn.transition = null, qe = 1, e) return e();
    } finally {
      qe = i, sn.transition = n, We = t, (We & 6) === 0 && Xn();
    }
  }
  function so() {
    Xt = Zi.current, st(Zi);
  }
  function Si(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, dm(n)), pt !== null) for (n = pt.return; n !== null; ) {
      var i = n;
      switch (ml(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ls();
          break;
        case 3:
          Qi(), st(zt), st(_t), Tl();
          break;
        case 5:
          El(i);
          break;
        case 4:
          Qi();
          break;
        case 13:
          st(ct);
          break;
        case 19:
          st(ct);
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
    if (xt = e, pt = e = si(e.current, null), Tt = Xt = t, yt = 0, Hr = null, Zl = na = xi = 0, Kt = Gr = null, ki !== null) {
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
  function md(e, t) {
    do {
      var n = pt;
      try {
        if (gl(), Hs.current = Qs, Gs) {
          for (var i = dt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Gs = !1;
        }
        if (gi = 0, gt = kt = dt = null, Dr = !1, zr = 0, Xl.current = null, n === null || n.return === null) {
          yt = 1, Hr = t, pt = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, j = t;
          if (t = Tt, k.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var F = j, J = k, q = J.tag;
            if ((J.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var Y = J.alternate;
              Y ? (J.updateQueue = Y.updateQueue, J.memoizedState = Y.memoizedState, J.lanes = Y.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var ce = Dc(h);
            if (ce !== null) {
              ce.flags &= -257, zc(ce, h, k, u, t), ce.mode & 1 && Ic(u, F, t), t = ce, j = F;
              var ke = t.updateQueue;
              if (ke === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(j), t.updateQueue = xe;
              } else ke.add(j);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ic(u, F, t), ao();
                break e;
              }
              j = Error(o(426));
            }
          } else if (at && k.mode & 1) {
            var mt = Dc(h);
            if (mt !== null) {
              (mt.flags & 65536) === 0 && (mt.flags |= 256), zc(mt, h, k, u, t), kl(Ji(j, k));
              break e;
            }
          }
          u = j = Ji(j, k), yt !== 4 && (yt = 2), Gr === null ? Gr = [u] : Gr.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = $c(u, j, t);
                uc(u, P);
                break e;
              case 1:
                k = j;
                var E = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (ti === null || !ti.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var ie = Fc(u, k, t);
                  uc(u, ie);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        kd(n);
      } catch (Se) {
        t = Se, pt === n && n !== null && (pt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function pd() {
    var e = ta.current;
    return ta.current = Qs, e === null ? Qs : e;
  }
  function ao() {
    (yt === 0 || yt === 3 || yt === 2) && (yt = 4), xt === null || (xi & 268435455) === 0 && (na & 268435455) === 0 || ri(xt, Tt);
  }
  function oa(e, t) {
    var n = We;
    We |= 2;
    var i = pd();
    (xt !== e || Tt !== t) && ($n = null, Si(e, t));
    do
      try {
        $m();
        break;
      } catch (l) {
        md(e, l);
      }
    while (!0);
    if (gl(), We = n, ta.current = i, pt !== null) throw Error(o(261));
    return xt = null, Tt = 0, yt;
  }
  function $m() {
    for (; pt !== null; ) vd(pt);
  }
  function Fm() {
    for (; pt !== null && !hs(); ) vd(pt);
  }
  function vd(e) {
    var t = xd(e.alternate, e, Xt);
    e.memoizedProps = e.pendingProps, t === null ? kd(e) : pt = t, Xl.current = null;
  }
  function kd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = _m(n, t, Xt), n !== null) {
          pt = n;
          return;
        }
      } else {
        if (n = bm(n, t), n !== null) {
          n.flags &= 32767, pt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          yt = 6, pt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        pt = t;
        return;
      }
      pt = t = e;
    } while (t !== null);
    yt === 0 && (yt = 5);
  }
  function wi(e, t, n) {
    var i = qe, l = sn.transition;
    try {
      sn.transition = null, qe = 1, Im(e, t, n, i);
    } finally {
      sn.transition = l, qe = i;
    }
    return null;
  }
  function Im(e, t, n, i) {
    do
      er();
    while (ni !== null);
    if ((We & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (yh(e, u), e === xt && (pt = xt = null, Tt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ra || (ra = !0, jd(fe, function() {
      return er(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = sn.transition, sn.transition = null;
      var h = qe;
      qe = 1;
      var k = We;
      We |= 4, Xl.current = null, Am(e, n), ld(n, e), rm(al), gs = !!sl, al = sl = null, e.current = n, Lm(n), Ra(), We = k, qe = h, sn.transition = u;
    } else e.current = n;
    if (ra && (ra = !1, ni = e, sa = l), u = e.pendingLanes, u === 0 && (ti = null), pr(n.stateNode), Ut(e, ot()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ia) throw ia = !1, e = eo, eo = null, e;
    return (sa & 1) !== 0 && e.tag !== 0 && er(), u = e.pendingLanes, (u & 1) !== 0 ? e === to ? Wr++ : (Wr = 0, to = e) : Wr = 0, Xn(), null;
  }
  function er() {
    if (ni !== null) {
      var e = su(sa), t = sn.transition, n = qe;
      try {
        if (sn.transition = null, qe = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, sa = 0, (We & 6) !== 0) throw Error(o(331));
          var l = We;
          for (We |= 4, he = e.current; he !== null; ) {
            var u = he, h = u.child;
            if ((he.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var j = 0; j < k.length; j++) {
                  var F = k[j];
                  for (he = F; he !== null; ) {
                    var J = he;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ur(8, J, u);
                    }
                    var q = J.child;
                    if (q !== null) q.return = J, he = q;
                    else for (; he !== null; ) {
                      J = he;
                      var Y = J.sibling, ce = J.return;
                      if (nd(J), J === F) {
                        he = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = ce, he = Y;
                        break;
                      }
                      he = ce;
                    }
                  }
                }
                var ke = u.alternate;
                if (ke !== null) {
                  var xe = ke.child;
                  if (xe !== null) {
                    ke.child = null;
                    do {
                      var mt = xe.sibling;
                      xe.sibling = null, xe = mt;
                    } while (xe !== null);
                  }
                }
                he = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, he = h;
            else e: for (; he !== null; ) {
              if (u = he, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ur(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, he = P;
                break e;
              }
              he = u.return;
            }
          }
          var E = e.current;
          for (he = E; he !== null; ) {
            h = he;
            var R = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && R !== null) R.return = h, he = R;
            else e: for (h = E; he !== null; ) {
              if (k = he, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ea(9, k);
                }
              } catch (Se) {
                ft(k, k.return, Se);
              }
              if (k === h) {
                he = null;
                break e;
              }
              var ie = k.sibling;
              if (ie !== null) {
                ie.return = k.return, he = ie;
                break e;
              }
              he = k.return;
            }
          }
          if (We = l, Xn(), Ot && typeof Ot.onPostCommitFiberRoot == "function") try {
            Ot.onPostCommitFiberRoot(ut, e);
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
  function yd(e, t, n) {
    t = Ji(n, t), t = $c(e, t, 1), e = qn(e, t, 1), t = Ft(), e !== null && (kr(e, 1, t), Ut(e, t));
  }
  function ft(e, t, n) {
    if (e.tag === 3) yd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        yd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Ji(n, e), e = Fc(t, e, 1), t = qn(t, e, 1), e = Ft(), t !== null && (kr(t, 1, e), Ut(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Dm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Ft(), e.pingedLanes |= e.suspendedLanes & n, xt === e && (Tt & n) === n && (yt === 4 || yt === 3 && (Tt & 130023424) === Tt && 500 > ot() - ql ? Si(e, 0) : Zl |= n), Ut(e, t);
  }
  function gd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ps, ps <<= 1, (ps & 130023424) === 0 && (ps = 4194304)));
    var n = Ft();
    e = Ln(e, t), e !== null && (kr(e, t, n), Ut(e, n));
  }
  function zm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), gd(e, n);
  }
  function Bm(e, t) {
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
    i !== null && i.delete(t), gd(e, n);
  }
  var xd;
  xd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || zt.current) Vt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Vt = !1, Mm(e, t, n);
      Vt = (e.flags & 131072) !== 0;
    }
    else Vt = !1, at && (t.flags & 1048576) !== 0 && qu(t, Fs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Zs(e, t), e = t.pendingProps;
        var l = Vi(t, _t.current);
        Yi(t, n), l = bl(null, t, i, e, l, n);
        var u = Pl();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Bt(i) ? (u = !0, Rs(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, wl(t), l.updater = Js, t.stateNode = l, l._reactInternals = t, Fl(t, i, e, n), t = Bl(null, t, i, !0, u, n)) : (t.tag = 0, at && u && hl(t), $t(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Zs(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Km(i), e = hn(i, e), l) {
            case 0:
              t = zl(null, t, i, e, n);
              break e;
            case 1:
              t = Gc(null, t, i, e, n);
              break e;
            case 11:
              t = Bc(null, t, i, e, n);
              break e;
            case 14:
              t = Vc(null, t, i, hn(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Gc(e, t, i, l, n);
      case 3:
        e: {
          if (Wc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, oc(e, t), Ks(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Ji(Error(o(423)), t), t = Yc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Ji(Error(o(424)), t), t = Yc(e, t, i, n, l);
            break e;
          } else for (Jt = Yn(t.stateNode.containerInfo.firstChild), Qt = t, at = !0, fn = null, n = ac(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Hi(), i === l) {
              t = On(e, t, n);
              break e;
            }
            $t(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return dc(t), e === null && vl(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, ll(i, l) ? h = null : u !== null && ll(i, u) && (t.flags |= 32), Hc(e, t), $t(e, t, h, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return Qc(e, t, n);
      case 4:
        return Nl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Gi(t, null, i, n) : $t(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Bc(e, t, i, l, n);
      case 7:
        return $t(e, t, t.pendingProps, n), t.child;
      case 8:
        return $t(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return $t(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, nt(zs, i._currentValue), i._currentValue = h, u !== null) if (dn(u.value, h)) {
            if (u.children === l.children && !zt.current) {
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
                      var J = F.pending;
                      J === null ? j.next = j : (j.next = J.next, J.next = j), F.pending = j;
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
          $t(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Yi(t, n), l = nn(l), i = i(l), t.flags |= 1, $t(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = hn(i, t.pendingProps), l = hn(i.type, l), Vc(e, t, i, l, n);
      case 15:
        return Kc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Zs(e, t), t.tag = 1, Bt(i) ? (e = !0, Rs(t)) : e = !1, Yi(t, n), Rc(t, i, l), Fl(t, i, l, n), Bl(null, t, i, !0, e, n);
      case 19:
        return Xc(e, t, n);
      case 22:
        return Uc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function jd(e, t) {
    return Nt(e, t);
  }
  function Vm(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(e, t, n, i) {
    return new Vm(e, t, n, i);
  }
  function lo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Km(e) {
    if (typeof e == "function") return lo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ce) return 11;
      if (e === G) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = an(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ua(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") lo(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case $:
        return Ni(n.children, l, u, t);
      case I:
        h = 8, l |= 8;
        break;
      case se:
        return e = an(12, n, t, l | 2), e.elementType = se, e.lanes = u, e;
      case Q:
        return e = an(13, n, t, l), e.elementType = Q, e.lanes = u, e;
      case de:
        return e = an(19, n, t, l), e.elementType = de, e.lanes = u, e;
      case re:
        return ca(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case X:
            h = 10;
            break e;
          case we:
            h = 9;
            break e;
          case Ce:
            h = 11;
            break e;
          case G:
            h = 14;
            break e;
          case oe:
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
  function Um(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $a(0), this.expirationTimes = $a(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $a(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function co(e, t, n, i, l, u, h, k, j) {
    return e = new Um(e, t, n, k, j), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = an(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wl(u), e;
  }
  function Hm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function Sd(e) {
    if (!e) return Jn;
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
            if (Bt(t.type)) {
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
      if (Bt(n)) return Ju(e, n, t);
    }
    return t;
  }
  function wd(e, t, n, i, l, u, h, k, j) {
    return e = co(n, i, !0, e, l, u, h, k, j), e.context = Sd(null), n = e.current, i = Ft(), l = ii(n), u = Rn(i, l), u.callback = t ?? null, qn(n, u, l), e.current.lanes = l, kr(e, l, i), Ut(e, i), e;
  }
  function da(e, t, n, i) {
    var l = t.current, u = Ft(), h = ii(l);
    return n = Sd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rn(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, h), e !== null && (vn(e, l, h, u), Vs(e, l, h)), h;
  }
  function fa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Nd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fo(e, t) {
    Nd(e, t), (e = e.alternate) && Nd(e, t);
  }
  function Gm() {
    return null;
  }
  var Ed = typeof reportError == "function" ? reportError : function(e) {
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
      var t = ou();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++) ;
      Hn.splice(n, 0, e), n === 0 && du(e);
    }
  };
  function mo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ma(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Cd() {
  }
  function Wm(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var F = fa(h);
          u.call(F);
        };
      }
      var h = wd(t, i, e, 0, null, !1, !1, "", Cd);
      return e._reactRootContainer = h, e[_n] = h.current, Pr(e.nodeType === 8 ? e.parentNode : e), ji(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var F = fa(j);
        k.call(F);
      };
    }
    var j = co(e, 0, !1, null, null, !1, !1, "", Cd);
    return e._reactRootContainer = j, e[_n] = j.current, Pr(e.nodeType === 8 ? e.parentNode : e), ji(function() {
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
    } else h = Wm(n, t, e, l, i);
    return fa(h);
  }
  au = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = vr(t.pendingLanes);
          n !== 0 && (Fa(t, n | 1), Ut(t, ot()), (We & 6) === 0 && (qi = ot() + 500, Xn()));
        }
        break;
      case 13:
        ji(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = Ft();
            vn(i, e, 1, l);
          }
        }), fo(e, 1);
    }
  }, Ia = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Ft();
        vn(t, e, 134217728, n);
      }
      fo(e, 134217728);
    }
  }, lu = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Ln(e, t);
      if (n !== null) {
        var i = Ft();
        vn(n, e, t, i);
      }
      fo(e, t);
    }
  }, ou = function() {
    return qe;
  }, uu = function(e, t) {
    var n = qe;
    try {
      return qe = e, t();
    } finally {
      qe = n;
    }
  }, on = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ve(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = As(i);
              if (!l) throw Error(o(90));
              pe(i), Ve(i, l);
            }
          }
        }
        break;
      case "textarea":
        ve(e, n);
        break;
      case "select":
        t = n.value, t != null && le(e, !!n.multiple, t, !1);
    }
  }, ls = ro, fr = ji;
  var Ym = { usingClientEntryPoint: !1, Events: [Rr, zi, As, un, Tn, ro] }, Yr = { findFiberByHostInstance: hi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qm = { bundleType: Yr.bundleType, version: Yr.version, rendererPackageName: Yr.rendererPackageName, rendererConfig: Yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = cs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Yr.findFiberByHostInstance || Gm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var va = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!va.isDisabled && va.supportsFiber) try {
      ut = va.inject(Qm), Ot = va;
    } catch {
    }
  }
  return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym, Ht.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mo(t)) throw Error(o(200));
    return Hm(e, t, null, n);
  }, Ht.createRoot = function(e, t) {
    if (!mo(e)) throw Error(o(299));
    var n = !1, i = "", l = Ed;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = co(e, 1, !1, null, null, n, !1, i, l), e[_n] = t.current, Pr(e.nodeType === 8 ? e.parentNode : e), new ho(t);
  }, Ht.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = cs(t), e = e === null ? null : e.stateNode, e;
  }, Ht.flushSync = function(e) {
    return ji(e);
  }, Ht.hydrate = function(e, t, n) {
    if (!ma(t)) throw Error(o(200));
    return pa(null, e, t, !0, n);
  }, Ht.hydrateRoot = function(e, t, n) {
    if (!mo(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = Ed;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = wd(t, null, e, 1, n ?? null, l, !1, u, h), e[_n] = t.current, Pr(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ha(t);
  }, Ht.render = function(e, t, n) {
    if (!ma(t)) throw Error(o(200));
    return pa(null, e, t, !1, n);
  }, Ht.unmountComponentAtNode = function(e) {
    if (!ma(e)) throw Error(o(40));
    return e._reactRootContainer ? (ji(function() {
      pa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Ht.unstable_batchedUpdates = ro, Ht.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!ma(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return pa(e, t, n, !1, i);
  }, Ht.version = "18.3.1-next-f1338f8080-20240426", Ht;
}
var Rd;
function rp() {
  if (Rd) return ko.exports;
  Rd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), ko.exports = ip(), ko.exports;
}
var Od;
function sp() {
  if (Od) return ka;
  Od = 1;
  var s = rp();
  return ka.createRoot = s.createRoot, ka.hydrateRoot = s.hydrateRoot, ka;
}
var ap = sp();
const lp = (() => {
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
  }, M = 26, A = 72, S = 30, N = 54, V = 34, T = 11, U = (M + A) / 2, z = S + (c.length - 1) * V + 30, B = (K) => A + K * N, D = (K) => K === 0 ? U : B(K) - N / 2, $ = (K) => S + K * V;
  function I(K, ee, Z) {
    const me = a.indexOf(s[K][0]) + Number(Z.slice(-1)) - 1, Te = me % a.length, pe = o[Te] + 12 * Math.floor(me / a.length), je = K + ee - pe;
    return a[Te] + (je < 0 ? "♭" : "♯").repeat(Math.abs(je));
  }
  function se(K) {
    return [...K.base, ...K.add].sort((ee, Z) => ee[0] - Z[0]);
  }
  function X(K, ee, Z) {
    const me = ee + (Z ? 1 : 0), Te = m[me % m.length], pe = Math.min(...Te.map(([Ve]) => Ve)), je = Math.max(...Te.map(([, Ve]) => Ve));
    let _e = (K - d % 12 + 12) % 12 - (Z ? 8 : 5) + 12 * Math.floor(me / m.length);
    return pe + _e < 0 && (_e += 12), je + _e > f.pentatonic && (_e -= 12), {
      strings: Te.map((Ve) => Ve.map((tt) => tt + _e)),
      start: pe + _e,
      end: je + _e
    };
  }
  function we(K, ee, Z) {
    const me = Z[ee], Te = (K + me - d % 12 + 12) % 12, pe = d + Te - me, je = c.map((Ne, $e) => {
      const _e = ee + (c.length - 1 - $e) * 3;
      return [_e, _e + 1, _e + 2].map((Ve) => {
        const tt = Math.floor(Ve / Z.length), Je = Z[Ve % Z.length];
        return pe + Je + 12 * tt - Ne;
      });
    });
    return {
      strings: je,
      start: Math.min(...je.map((Ne) => Ne[0])),
      end: Math.max(...je.map((Ne) => Ne.at(-1)))
    };
  }
  function Ce(K, ee) {
    const Z = [], me = Math.ceil(-K.end / 12) * 12;
    for (let pe = me; K.start + pe <= ee; pe += 12) {
      const je = K.strings.map(($e) => $e.map((_e) => _e + pe).filter((_e) => _e >= 0 && _e <= ee)), Ne = je.flat();
      Z.push({
        strings: je,
        start: Math.min(...Ne),
        end: Math.max(...Ne),
        partial: K.start + pe < 0 || K.end + pe > ee
      });
    }
    const Te = Z.filter((pe) => !pe.partial);
    return Te.length ? Te : Z;
  }
  function Q(K) {
    return se(K).length === p;
  }
  function de(K, ee, Z) {
    const me = Q(ee);
    K.querySelector('[value="3nps"]').disabled = !me, K.value = me ? Z ?? "3nps" : "pentatonic";
  }
  function G(K, ee, Z, me, Te) {
    const pe = se(ee).map(([je]) => je);
    return me.map((je) => {
      const Ne = je - 1, $e = Z === "3nps" ? we(K, Ne, pe) : X(K, Ne, ee.base === g), _e = Te === void 0 ? [$e] : Ce($e, Te);
      return { number: je, positions: _e };
    });
  }
  function oe(K, ee) {
    const Z = K.getBoundingClientRect(), me = K.querySelectorAll(ee);
    let Te = 1 / 0;
    me.forEach((pe) => {
      const je = pe.getBoundingClientRect();
      let Ne = 0;
      je.left < Z.left ? Ne = je.left - Z.left - 8 : je.right > Z.right && (Ne = je.right - Z.right + 8), Math.abs(Ne) < Math.abs(Te) && (Te = Ne);
    }), Number.isFinite(Te) && (K.scrollLeft += Te);
  }
  function re(K, ee = !1) {
    const Z = K === "3nps" ? p : m.length;
    return Array.from({ length: Z }, (me, Te) => {
      const pe = Te + 1;
      return '<label class="box-toggle" data-box="' + pe + '"><input type="checkbox" value="' + pe + '"' + (ee && Te === 0 ? " checked" : "") + "> Boksi " + pe + "</label>";
    }).join("");
  }
  function W(K, ee) {
    const Z = se(ee), me = new Map(Z.map(([pe, je]) => [pe, I(K, pe, je)])), Te = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return Z.flatMap(([pe, je]) => Te.flatMap(({ suffix: Ne, base: $e }) => {
      const _e = $e.map(([Ve]) => me.get((pe + Ve) % 12));
      return _e.every(Boolean) ? {
        root: (K + pe) % 12,
        degree: Number(String(je).replace(/\D/g, "")),
        name: _e[0] + Ne,
        notes: _e,
        base: $e,
        add: []
      } : [];
    }));
  }
  function ae(K, ee) {
    const Z = K.base.map(([pe]) => (K.root + pe) % 12), me = c.map((pe) => {
      const je = [];
      for (let Ne = 0; Ne <= ee; Ne++) {
        const $e = (pe + Ne) % 12;
        Z.includes($e) && je.push({ fret: Ne, pitch: $e });
      }
      return je;
    }), Te = [];
    for (let pe = 0; pe <= me.length - 3; pe++)
      for (const je of me[pe])
        for (const Ne of me[pe + 1])
          if (je.pitch !== Ne.pitch)
            for (const $e of me[pe + 2]) {
              if ($e.pitch === je.pitch || $e.pitch === Ne.pitch) continue;
              const _e = [je.fret, Ne.fret, $e.fret], Ve = Math.min(..._e), tt = Math.max(..._e);
              if (tt - Ve > 3) continue;
              const Je = Array(c.length).fill(null);
              Je.splice(pe, 3, ..._e), Te.push({ strings: Je, low: Ve, high: tt });
            }
    return Te.sort((pe, je) => pe.high - je.high || pe.low - je.low);
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
    const Z = te[K + ":" + ee];
    if (Z) return { frets: Z, barre: null };
    let me = null;
    return x.forEach(({ string: Te, openPC: pe, shapes: je }) => {
      const Ne = je[ee];
      if (!Ne) return;
      let $e = (K - pe + 12) % 12;
      if ($e + Math.min(...Ne.filter((tt) => tt !== null)) < 0 && ($e += 12), me && me.fret <= $e) return;
      const _e = Ne.map((tt) => tt === null ? null : $e + tt), Ve = $e > 0 && Ne.at(-1) === 0 ? { fret: $e, from: Te, to: Ne.length - 1 } : null;
      me = { fret: $e, frets: _e, barre: Ve };
    }), me && { frets: me.frets, barre: me.barre };
  }
  function ne(K, { frets: ee, barre: Z }, me) {
    const _e = [...c].reverse(), Ve = ee.filter((ve) => ve > 0), Je = !Ve.length || Math.max(...Ve) <= 4 && (ee.includes(0) || Math.min(...Ve) === 1) ? 1 : Math.min(...Ve), O = (ve) => 24 + ve * 14, le = (ve) => 30 + (ve - Je) * 18 + 18 / 2, ye = 102;
    let Me = '<svg class="chord-svg" viewBox="0 0 108 ' + (ye + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + me + "-ote paksusta kielestä ohueen: " + ee.map((ve) => ve ?? "x").join(" ") + '">';
    for (let ve = 0; ve <= 4; ve++)
      Me += '<line class="' + (ve === 0 && Je === 1 ? "nut" : "fret") + '" x1="' + O(0) + '" y1="' + (30 + ve * 18) + '" x2="' + O(5) + '" y2="' + (30 + ve * 18) + '"/>';
    return ee.forEach((ve, Ie) => {
      Me += '<line class="string" x1="' + O(Ie) + '" y1="30" x2="' + O(Ie) + '" y2="' + ye + '"/>';
    }), Je > 1 && (Me += '<text class="fret-label" x="15" y="' + (le(Je) + 4) + '">' + Je + "</text>"), Z && (Me += '<rect class="barre" x="' + (O(Z.from) - 6.5) + '" y="' + (le(Z.fret) - 6.5) + '" width="' + ((Z.to - Z.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ee.forEach((ve, Ie) => {
      if (ve === null) {
        Me += '<text class="marker" x="' + O(Ie) + '" y="22">×</text>';
        return;
      }
      const ze = (_e[Ie] + ve) % 12 === K;
      if (ve === 0) {
        Me += '<circle class="open' + (ze ? " root-open" : "") + '" cx="' + O(Ie) + '" cy="18" r="4.5"/>';
        return;
      }
      Z && ve === Z.fret && Ie >= Z.from && Ie <= Z.to && !ze || (Me += '<circle class="' + (ze ? "root" : "tone") + '" cx="' + O(Ie) + '" cy="' + le(ve) + '" r="6.5"/>');
    }), Me + "</svg>";
  }
  function ue(K, ee) {
    const Z = new URLSearchParams(location.search), me = s.indexOf(Z.get("toonikka")), Te = Z.get("asteikko");
    return {
      rootPC: me === -1 ? K : me,
      scaleId: Object.hasOwn(C, Te) ? Te : ee
    };
  }
  function Ee(K, ee, Z) {
    return K + "?" + new URLSearchParams({ toonikka: s[ee], asteikko: Z });
  }
  function H(K, ee, Z, {
    boxes: me = [],
    onlyBoxNotes: Te = !1,
    automatic: pe = !0,
    focusDegree: je = "",
    grip: Ne = null,
    barre: $e = null,
    label: _e = s[K] + " " + ee.name,
    notes: Ve = null,
    targets: tt = !1,
    muteFret: Je = null
  } = {}) {
    const O = B(Z), le = O + 48, ye = le + 28, Me = S - 14, ve = $(c.length - 1) + 14, Ie = ve - Me, ze = pe ? 680 : Math.ceil(ye * 0.64), St = me.flatMap((Le) => Le.positions), vt = {};
    ee.base.forEach(([Le, Re]) => vt[(K + Le) % 12] = { deg: Re, added: !1 }), ee.add.forEach(([Le, Re]) => vt[(K + Le) % 12] = { deg: Re, added: !0 });
    const qt = c.map((Le, Re) => !!Ne && Ne[Re] === null), Gt = !!Ne && Je !== null, Lt = b.filter((Le, Re) => qt[Re]).reverse(), yn = _e + ". " + Z + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Lt.length ? " Soittamatta jäävät kielet: " + Lt.join(", ") + "." : "");
    let be = '<svg viewBox="0 0 ' + ye + " " + z + '" style="min-width:' + ze + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (tt ? "group" : "img") + '" aria-label="' + yn + '">';
    be += '<rect x="' + M + '" y="' + Me + '" width="' + (A - M) + '" height="' + Ie + '" rx="6" fill="#2a2338"/>', be += '<rect x="' + A + '" y="' + Me + '" width="' + (O - A) + '" height="' + Ie + '" fill="#231a12"/>', be += '<rect x="' + O + '" y="' + Me + '" width="' + (ye - O - 4) + '" height="' + Ie + '" rx="8" fill="#32251e"/>';
    for (let Le = 1; Le <= Z; Le++)
      be += '<line x1="' + B(Le) + '" y1="' + Me + '" x2="' + B(Le) + '" y2="' + ve + '" stroke="#6f5b47" stroke-width="2"/>';
    be += '<rect x="' + (A - 3) + '" y="' + Me + '" width="6" height="' + Ie + '" rx="2" fill="#d8cbb6"/>', be += '<rect x="' + (le - 11) + '" y="' + (Me + 3) + '" width="22" height="' + (Ie - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', be += '<rect x="' + (le - 4) + '" y="' + (Me + 7) + '" width="3" height="' + (Ie - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const ln = (Me + ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Le) => Le <= Z).forEach((Le) => be += '<circle cx="' + D(Le) + '" cy="' + ln + '" r="5.5" fill="#7a6550"/>');
    for (let Le = 12; Le <= Z; Le += 12)
      be += '<circle cx="' + D(Le) + '" cy="' + (ln - V) + '" r="5.5" fill="#7a6550"/>', be += '<circle cx="' + D(Le) + '" cy="' + (ln + V) + '" r="5.5" fill="#7a6550"/>';
    be += '<text x="' + U + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', be += '<text x="' + A + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', be += '<text x="' + le + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Le = 1; Le <= Z; Le++)
      be += '<text x="' + D(Le) + '" y="' + (z - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Le + "</text>";
    if (me.forEach(({ number: Le, positions: Re }) => {
      Re.forEach((De) => {
        const Ze = De.partial ? "box-highlight box-partial" : "box-highlight";
        be += '<g class="' + Ze + '" data-box="' + Le + '" aria-hidden="true">';
        const lt = De.strings.find((wt) => wt.length), on = (D(lt[0]) + D(lt.at(-1))) / 2;
        be += '<text class="box-number" x="' + on + '" y="12">' + Le + "</text>", De.strings.forEach((wt, Rt) => {
          if (!wt.length) return;
          const Cn = D(wt[0]) - 16, un = D(wt.at(-1)) - D(wt[0]) + 32;
          be += '<rect class="box-band" x="' + Cn + '" y="' + ($(Rt) - 14) + '" width="' + un + '" height="28" rx="14"/>';
        }), be += "</g>";
      });
    }), c.forEach((Le, Re) => {
      const De = 1 + Re * 0.45, Ze = $(Re), lt = qt[Re] && !Gt;
      lt ? be += '<text class="muted-mark" x="' + U + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : qt[Re] && Je === 0 || (be += '<line x1="' + (M + 4) + '" y1="' + Ze + '" x2="' + (A - 4) + '" y2="' + Ze + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), be += "<g" + (lt ? ' opacity=".35"' : "") + ">", be += '<line x1="' + A + '" y1="' + Ze + '" x2="' + (le + 5) + '" y2="' + Ze + '" stroke="#b9b9c4" stroke-width="' + De.toFixed(2) + '"/>', be += '<circle cx="' + (le + 5) + '" cy="' + Ze + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', be += "</g>", be += '<text x="13" y="' + (Ze + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + w[Re] + "</text>";
    }), Ne && $e && $e.fret >= 1 && $e.fret <= Z) {
      const Le = $($e.from), Re = $($e.to), De = Math.min(Le, Re) - 6, Ze = Math.max(Le, Re) + 6;
      be += '<rect class="barre-indicator" x="' + (D($e.fret) - 7) + '" y="' + De + '" width="14" height="' + (Ze - De) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return tt && (be += '<g class="fret-targets">', c.forEach((Le, Re) => {
      for (let De = 0; De <= Z; De++) {
        const Ze = De ? b[Re] + "-kieli, " + De + ". nauha" : "vapaa " + b[Re] + "-kieli", lt = De ? N : A - M - 6;
        be += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Re + '" data-fret="' + De + '" data-midi="' + (Le + De) + '" aria-label="' + Ze + '" x="' + (D(De) - lt / 2) + '" y="' + ($(Re) - V / 2) + '" width="' + lt + '" height="' + V + '" fill="transparent"/>';
      }
    }), be += "</g>"), (Ve ?? []).forEach(({ string: Le, fret: Re, label: De, kind: Ze }) => {
      be += '<g class="octave-note octave-' + Ze + '">', be += '<circle cx="' + D(Re) + '" cy="' + $(Le) + '" r="' + T + '"/>', be += '<text x="' + D(Re) + '" y="' + ($(Le) + 3.5) + '" font-size="' + (De.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + De + "</text>", be += "</g>";
    }), Ne && (be += '<g class="grip-notes">'), (Ve ? [] : c).forEach((Le, Re) => {
      for (let De = 0; De <= Z; De++) {
        const Ze = (Le + De) % 12;
        if (!(Ze in vt) || Ne && Ne[Re] !== De || Te && !St.some(({ strings: un }) => {
          const Tn = un[Re];
          return Tn.length > 0 && De >= Tn[0] && De <= Tn.at(-1);
        })) continue;
        const lt = vt[Ze], on = lt.deg === "1", wt = lt.added ? "#f0a13c" : on ? "#4b2fd6" : "#6d4aff", Rt = lt.added ? "#1a1430" : "#fff";
        lt.deg === je && (be += '<circle class="focus-note" cx="' + D(De) + '" cy="' + $(Re) + '" r="14.5"/>');
        const Cn = Ne ? ' data-string="' + (Re + 1) + '" data-fret="' + De + '" data-degree="' + lt.deg + '"' : "";
        be += "<circle" + Cn + ' cx="' + D(De) + '" cy="' + $(Re) + '" r="' + T + '" fill="' + wt + '" stroke="' + (on ? "#fff" : "#1a1430") + '" stroke-width="' + (on ? 2.5 : 1) + '"/>', be += '<text x="' + D(De) + '" y="' + ($(Re) + 3.5) + '" font-size="' + (lt.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Rt + '" text-anchor="middle">' + lt.deg + "</text>";
      }
    }), Ne && (be += "</g>"), Gt && qt.forEach((Le, Re) => {
      if (!Le) return;
      const De = D(Je), Ze = $(Re);
      be += '<g class="muted-mark grip-mute" data-string="' + (Re + 1) + '" data-fret="' + Je + '">', be += '<circle cx="' + De + '" cy="' + Ze + '" r="9" fill="' + (Je === 0 ? "#2a2338" : "#231a12") + '"/>', be += '<text x="' + De + '" y="' + (Ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', be += "</g>";
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
    selectionFromURL: ue,
    selectionHref: Ee,
    renderBoard: H,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: Q,
    syncBoxSystem: de,
    fingeringBoxes: G,
    boxOptions: re,
    revealPositions: oe
  };
})();
globalThis.MusicMapFretboard = lp;
function xo(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function op(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function up(s) {
  const a = op(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const He = globalThis.MusicMapFretboard, Ye = (s) => (s % 12 + 12) % 12, cp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], dp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Fe = (s, a = !1, o = !1) => (a ? dp : cp)[Ye(s)] + (o ? Math.floor(s / 12) - 1 : ""), oi = (s) => He.CHROM[Ye(s)], es = (s, a, o) => He.noteName(Ye(s), a, o);
function fp(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Ye(s) < 2 ? o - 1 : a[0] === "C" && Ye(s) > 9 ? o + 1 : o;
}
const Zt = ["ohut E", "B", "G", "D", "A", "paksu E"], Jo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], Tf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], hp = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Mi = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Ue = (s, a) => ({ string: s, fret: a, midi: He.OPEN_PITCHES[s] + a });
function cr(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Ue(c, a + f)));
}
const Xe = (s) => `${s.string}:${s.fret}`, Ti = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Mf = (s, a) => a === "maj" ? `${oi(s)}-duurisointu` : a === "min" ? `${oi(s)}-mollisointu` : `${oi(s)}7-sointu`, ts = [
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
], $d = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function _f(s, a) {
  const o = $d[a] ?? $d.E, c = Ye(s - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [Ue(f, d + c)]);
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
}, Pa = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (s, a, o, c) => typeof s == "number" && Number.isFinite(s) ? Math.max(a, Math.min(o, s)) : c, Nn = (s, a, o) => a.includes(s) ? s : o;
function Ta(s) {
  const a = { ...ja };
  a.mode = Nn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, c) => o - c) : a.strings, a.strings.length || (a.strings = [...ja.strings]), a.min = Math.round(li(s.min, 0, 24, a.min)), a.max = Math.round(li(s.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (a[o] = s[o]);
  return a.check = Nn(s.check, ["class", "pitch"], a.check), a.input = Nn(s.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : a.rounds, a.root = Math.round(li(s.root, 0, 11, a.root)), a.scale = typeof s.scale == "string" && Object.hasOwn(He.SCALES, s.scale) ? s.scale : a.scale, a.box = Math.round(li(s.box, 0, 5, a.box)), a.order = Nn(s.order, ["random", "up", "down"], a.order), a.chord = Nn(s.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Nn(s.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Nn(s.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ja.intervals]), a.direction = Nn(s.direction, ["up", "down", "both"], a.direction), a.hints = Nn(s.hints, ["off", "always", "fade"], a.hints), a.activity = Nn(s.activity, ["play", "degree"], a.activity), a.minRms = li(s.minRms, 1e-3, 0.15, a.minRms), a.clarity = li(s.clarity, 0.85, 0.99, a.clarity), a.stability = li(s.stability, 120, 800, a.stability), a.cents = li(s.cents, 10, 45, a.cents), a.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", a;
}
function mp(s, a) {
  const o = new URLSearchParams(s), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(He.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Ta(c);
}
function pp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: He.CHROM[s.root],
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
const _i = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, In = (s) => s.mode === "scale" && s.order !== "random", bf = (s) => ["note", "degree"].includes(_i(s)) ? "class" : In(s) ? "pitch" : s.check, ya = (s) => _i(s) === "mic", Fd = "musiikin-kartta:harjoittelu", Pf = 3, Lo = () => ({ version: Pf, settings: { ...ja }, stats: {}, recent: [], sessions: [] }), Af = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, kn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function vp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => kn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || kn(s.errors)) && (s.ema === void 0 || kn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || kn(s.emaMs));
}
function kp(s) {
  return !!s && typeof s.id == "string" && kn(s.count) && kn(s.first) && s.first <= s.count && kn(s.ms) && kn(s.at) && (s.solo === void 0 || kn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || kn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Id(s) {
  if (!s) return Lo();
  const a = JSON.parse(s);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !vp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !kn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !kp(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Ta(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: Pf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Dd = 2500, yp = 8e3, zd = 0.3, ns = (s) => s.ema ?? s.correct / s.attempts, is = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Xo(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (is(s) - Dd) / (yp - Dd)));
  return ns(s) * 0.65 + a * 0.35;
}
function gp(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Xo(s)) * 3;
}
class Bd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Id(a?.getItem(Fd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Lo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Fd, JSON.stringify(this.data)), this.warning = "";
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
    const o = Af(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? ns(c) + zd * (d - ns(c)) : d,
      emaMs: c.attempts ? is(c) + zd * (a.ms - is(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: f, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Id(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Lo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const xp = 4e3, Vd = 12, jp = 1500;
function Sp(s, a) {
  const o = s.left + s.stickyLeft, c = s.right;
  let d = 0;
  if (a.left < o ? d = a.left - o - Vd : a.right > c && (d = a.right - c + Vd), d === 0) return null;
  const f = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(f - s.scrollLeft) < 1 ? null : f;
}
function wp(s, a) {
  return a.right <= s.left + s.stickyLeft || a.left >= s.right;
}
function Lf(s, a, o, { stickySelector: c, enabled: d = !0, playback: f } = {}) {
  const p = _.useRef(0), m = _.useRef(!1), w = _.useRef(""), b = _.useRef(0), v = _.useRef(f);
  _.useEffect(() => {
    const g = s.current;
    if (!g || !d) return;
    const C = () => {
      p.current = Date.now() + xp;
    }, M = () => {
      m.current = !0, C();
    }, A = () => {
      m.current && (m.current = !1, C());
    }, S = (N) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(N.key) && C();
    };
    return g.addEventListener("pointerdown", M, { passive: !0 }), g.addEventListener("touchstart", M, { passive: !0 }), g.addEventListener("wheel", C, { passive: !0 }), g.addEventListener("keydown", S), window.addEventListener("pointerup", A, { passive: !0 }), window.addEventListener("pointercancel", A, { passive: !0 }), window.addEventListener("touchend", A, { passive: !0 }), window.addEventListener("touchcancel", A, { passive: !0 }), () => {
      g.removeEventListener("pointerdown", M), g.removeEventListener("touchstart", M), g.removeEventListener("wheel", C), g.removeEventListener("keydown", S), window.removeEventListener("pointerup", A), window.removeEventListener("pointercancel", A), window.removeEventListener("touchend", A), window.removeEventListener("touchcancel", A);
    };
  }, [s, d]), _.useLayoutEffect(() => {
    const g = f !== void 0 && !!f && f !== v.current;
    v.current = f, g && !m.current && (p.current = 0);
  }, [f]), _.useLayoutEffect(() => {
    f === void 0 && w.current === "" && o !== "" && Date.now() - b.current > jp && !m.current && (p.current = 0), w.current !== "" && o === "" && (b.current = Date.now()), w.current = o;
    const g = s.current;
    if (!g || !d || !o || m.current || Date.now() < p.current) return;
    const C = g.querySelector(a);
    if (!C) return;
    const M = g.getBoundingClientRect(), A = C.getBoundingClientRect(), S = c ? g.querySelector(c) : null, N = S && getComputedStyle(S).position === "sticky" ? S.getBoundingClientRect().width : 0, V = {
      left: M.left,
      right: M.left + g.clientWidth,
      scrollLeft: g.scrollLeft,
      maxScroll: g.scrollWidth - g.clientWidth,
      stickyLeft: N
    }, T = Sp(V, A);
    if (T === null) return;
    const z = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || wp(V, A);
    typeof g.scrollTo == "function" ? g.scrollTo({ left: T, behavior: z ? "auto" : "smooth" }) : g.scrollLeft = T;
  }, [s, a, o, c, d, f]);
}
const Np = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Ep = ["e", "B", "G", "D", "A", "E"];
function Rf({ string: s }) {
  return /* @__PURE__ */ r.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ r.jsx("strong", { children: Ep[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ r.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ r.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Of = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), Cp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function $f({ min: s, max: a }) {
  return /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - s + 1 }, (o, c) => {
      const d = s + c;
      return /* @__PURE__ */ r.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Np.has(d) ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ui({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints", playback: m }) {
  const w = { "--cols": s.max - s.min + 1 }, { strings: b, min: v, max: g } = s, [C, M] = _.useState({ string: Math.min(...b), fret: v }), A = _.useRef(null), S = new Map(a.map((B) => [Xe(B), B])), N = a.map((B) => `${Xe(B)}${B.kind}`).join(",");
  _.useEffect(() => {
    if (p !== "hints") return;
    const B = A.current, D = B?.querySelector(".target, .anchor");
    B && D && (B.scrollLeft += D.getBoundingClientRect().left - B.getBoundingClientRect().left - B.clientWidth / 2 + D.clientWidth / 2);
  }, [N, p]), _.useEffect(() => {
    p === "playing" && A.current && (A.current.scrollLeft = 0);
  }, [p, v, g]);
  const V = a.find((B) => B.kind === "playing");
  Lf(A, ".playing", V ? Xe(V) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [T, U] = _.useState({ left: !1, right: !1 });
  _.useEffect(() => {
    const B = A.current;
    if (!B) return;
    const D = () => {
      const I = B.scrollLeft > 2, se = B.scrollLeft + B.clientWidth < B.scrollWidth - 2;
      U((X) => X.left === I && X.right === se ? X : { left: I, right: se });
    };
    D(), B.addEventListener("scroll", D, { passive: !0 });
    const $ = typeof ResizeObserver > "u" ? null : new ResizeObserver(D);
    return $?.observe(B), () => {
      B.removeEventListener("scroll", D), $?.disconnect();
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
    /* @__PURE__ */ r.jsx("div", { ref: A, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board", style: w, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx($f, { min: v, max: g }),
      /* @__PURE__ */ r.jsx("tbody", { children: He.OPEN_PITCHES.map((B, D) => /* @__PURE__ */ r.jsxs("tr", { className: b.includes(D) ? "" : "unused", style: Of(D), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${D + 1}. kieli: ${Zt[D]}${o.includes(D) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(Rf, { string: D }),
          o.includes(D) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        cr([D], v, g).map(($) => {
          const I = S.get(Xe($)), se = `${Zt[D]}-kieli, ${Mi($.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${$.fret === 0 ? "open-fret " : ""}${I ? I.kind === "answer" ? "target" : I.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": D,
              "data-fret": $.fret,
              tabIndex: z.string === D && z.fret === $.fret ? 0 : -1,
              onFocus: () => M($),
              onKeyDown: (X) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(X.key)) return;
                X.preventDefault();
                const we = [...b].sort((G, oe) => G - oe), Ce = we.indexOf(D), Q = X.key === "ArrowUp" ? we[Math.max(0, Ce - 1)] : X.key === "ArrowDown" ? we[Math.min(we.length - 1, Ce + 1)] : D, de = X.key === "Home" ? v : X.key === "End" ? g : Math.max(v, Math.min(g, $.fret + (X.key === "ArrowRight" ? 1 : X.key === "ArrowLeft" ? -1 : 0)));
                X.currentTarget.closest("table")?.querySelector(`button[data-string="${Q}"][data-fret="${de}"]`)?.focus();
              },
              disabled: c || !b.includes(D),
              "aria-label": se + (I ? `, ${Cp[I.kind]}${I.label ? " " + I.label : ""}` : ""),
              onClick: () => d?.($),
              children: I ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: I.label || "●" }) : null
            }
          ) }, $.fret);
        })
      ] }, D)) })
    ] }) })
  ] });
}
function Tp({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, w = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx($f, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: He.OPEN_PITCHES.map((b, v) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Of(v), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Zt[v]}`, children: /* @__PURE__ */ r.jsx(Rf, { string: v }) }),
      cr([v], p, m).map((g) => {
        const C = Object.hasOwn(a, w + Xe(g)) ? a[w + Xe(g)] : void 0, M = Xo(C), A = M === null ? "unseen" : C.attempts < 3 ? "few" : M >= 0.8 ? "strong" : M >= 0.5 ? "growing" : "weak", S = `${Zt[v]}-kieli, ${Mi(g.fret)}, ${Fe(g.midi, d)}`, N = C ? `${Math.round(M * 100)} %, ${C.correct}/${C.attempts} heti oikein, viime aikoina ${Math.round(ns(C) * 100)} % ja ${(is(C) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${g.fret === 0 ? "open-fret " : ""}${A}`, title: `${S}: ${N}`, children: [
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
const Mp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Aa = (s) => s.mode === "scale" ? He.scaleNotes(He.SCALES[s.scale]) : Ti[s.mode === "caged" ? "maj" : s.chord].tones, Ff = (s) => He.fingeringBoxes(s.root, He.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function bi(s) {
  if (s.mode === "caged") {
    const a = _f(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const a = Ff(s);
    return { strings: s.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function _p(s) {
  const a = bi(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function ss(s) {
  const a = bi(s), o = cr(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Ye(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(_f(s.root, s.shape).map(Xe));
    return o.filter((p) => f.has(Xe(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => Aa(s).some(([p]) => Ye(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return c;
  const d = Ff(s);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function If(s, a) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((c) => s.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function bp(s) {
  const a = Aa(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function Ro(s) {
  const a = ss(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = bp(s).filter(([d]) => !a.some((f) => Ye(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !If(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Pp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function Df(s) {
  return In(s) ? new Set(ss(s).map((a) => a.midi)).size : s.rounds;
}
function Ap(s, a) {
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
const Kd = (s, a) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${a}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${a}:${s.activity}` : `scale:${s.root}:${s.scale}:${a}:${s.activity}`;
function Ei(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function Lp(s, a, o = {}, c, d = Math.random) {
  const f = Ro(s);
  if (f) throw new Error(f);
  const p = bf(s), m = _i(s), w = p === "pitch", b = ($) => s.weak ? gp(o[Af({ input: m, check: p, hint: !1, item: $ })]) : 1, v = ($) => tr($, $.map(() => 1), d), g = ss(s), C = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const $ = Ei(g, (X) => !!c && Xe(X) === Xe(c.position)), I = tr($, $.map((X) => b(`notes:${Xe(X)}`)), d), se = Fe(I.midi, s.flats, w);
    return {
      ...C,
      position: I,
      midi: I.midi,
      name: se,
      item: `notes:${Xe(I)}`,
      prompt: `Etsi ${se} ${Jo[I.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const $ = (we) => `ear-note:${Ye(we.midi)}${s.reference ? ":ref" : ""}`, I = Ei(g, (we) => !!c && Ye(we.midi) === Ye(c.midi)), se = tr(I, I.map((we) => b($(we))), d), X = s.reference ? 57 + 12 * Math.round((se.midi - 57) / 12) : void 0;
    return {
      ...C,
      position: se,
      midi: se.midi,
      name: Fe(se.midi, s.flats),
      item: $(se),
      choices: "note",
      reference: X,
      sound: X === void 0 ? [se.midi] : [X, se.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const $ = Ei(g, (se) => !!c && se.midi === c.midi), I = tr($, $.map((se) => b(`repeat:${se.midi}`)), d);
    return {
      ...C,
      position: I,
      midi: I.midi,
      name: Fe(I.midi, s.flats, !0),
      item: `repeat:${I.midi}`,
      sound: [I.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const $ = Ei(If(s, g), (X) => c?.interval === X.iv && c?.direction === X.direction), I = tr($, $.map((X) => b(`interval:${X.iv}:${X.direction}`)), d), se = v(Ei(I.pairs, (X) => c?.reference === X.reference.midi));
    return {
      ...C,
      position: se.target,
      midi: se.target.midi,
      name: Fe(se.target.midi, s.flats, !0),
      item: `interval:${I.iv}:${I.direction}`,
      interval: I.iv,
      direction: I.direction,
      reference: se.reference.midi,
      sound: [se.reference.midi, se.target.midi],
      prompt: `Kuulet ${I.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Fe(se.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const M = Aa(s);
  let A, S = 0;
  if (In(s)) {
    const $ = Pp(s, g);
    S = $.length, A = $[a % $.length];
  } else {
    const $ = M.filter(([X]) => g.some((we) => Ye(we.midi - s.root) === X)), I = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [M[a % M.length]] : M.filter(([, X]) => X.endsWith(s.chordTone)) : Ei($, ([X]) => c?.interval === X), [se] = tr(I, I.map(([X]) => b(Kd(s, X))), d);
    A = v(Ei(g.filter((X) => Ye(X.midi - s.root) === se), (X) => !!c && Xe(X) === Xe(c.position)));
  }
  const N = Ye(A.midi - s.root), V = M.find(([$]) => $ === N)[1], T = es(s.root, N, V), U = w ? T + fp(A.midi, T) : T, z = s.mode === "scale" ? `${oi(s.root)}-${He.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${oi(s.root)}-duurisointu, ${s.shape}-muoto` : Mf(s.root, s.chord), B = s.mode !== "caged" && s.activity === "degree", D = B ? `${z}: mikä aste on ${T}?` : S ? `${z} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % S + 1}/${S}: ${V}. aste (${U}).` : `${z}: etsi ${V}. aste${w ? ` (${U})` : ""}.`;
  return {
    ...C,
    position: A,
    midi: A.midi,
    name: U,
    item: Kd(s, N),
    prompt: D,
    degree: V,
    interval: N,
    choices: B ? "degree" : "position"
  };
}
function Oo(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Ye(s) === Ye(a) : s === a);
}
function zf(s, a, o) {
  return Oo(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : Mp(s) ? ss(s).some((c) => Xe(c) === Xe(o)) : !0 : !1;
}
function Rp(s, a) {
  const o = bi(s);
  return cr(o.strings, o.min, o.max).filter((c) => zf(s, a, c));
}
const Mt = (s, a, o) => ({ ...s, label: a, kind: o }), Op = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function $p(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = bi(s), f = cr(d.strings, d.min, d.max), p = Rp(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((V) => Mt(V, a.name, "answer")), text: `${a.name} on ${Tf[a.position.string]}: ${Mi(a.position.fret)}.` };
    const S = f.find((V) => V.string === a.position.string), N = Fe(S.midi, s.flats);
    return {
      marks: [Mt(S, N, "anchor")],
      text: `Apupiste: ${hp[S.string]} ${S.fret === 0 ? "vapaa sävel" : S.fret + ". nauhan sävel"} on ${N}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [Mt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Mt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Zt[a.position.string]}-kieli, ${Mi(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((S) => Mt(S, Fe(S.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Jo[a.position.string]}.` };
  if (s.mode === "interval") {
    const S = Fe(a.reference, s.flats, !0), N = f.filter((V) => V.midi === a.reference).map((V) => Mt(V, S, "anchor"));
    return c ? {
      marks: [...N, ...p.map((V) => Mt(V, Fe(V.midi, s.flats, !0), "answer"))],
      text: `${Op(ts[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${S} → ${a.name}.`
    } : { marks: N, text: `Alkusävel ${S} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = ss(s), w = Aa(s), b = (S) => w.find(([N]) => N === Ye(S.midi - s.root))?.[1] ?? "", v = es(s.root, a.interval, a.degree), g = m.filter((S) => Ye(S.midi - s.root) === 0), C = (S) => p.some((N) => Xe(N) === Xe(S)), M = `${a.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((S) => Mt(S, b(S), C(S) ? "answer" : "shape")), text: M } : { marks: m.map((S) => Mt(S, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const A = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const S = m.filter((N) => Ye(N.midi) === Ye(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : g).map((N) => Mt(N, "1", "anchor")), ...S.map((N) => Mt(N, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: S.map((N) => Mt(N, v, "shape")), text: `Katso ${A} nimeä: mikä on sen perussävel?` } : {
      marks: [...g.map((N) => Mt(N, "1", "anchor")), ...S.map((N) => Mt(N, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...g.filter((S) => !C(S)).map((S) => Mt(S, "1", "anchor")), ...p.map((S) => Mt(S, a.degree, "answer"))], text: M } : a.interval === 0 ? { marks: [], text: `1. aste on ${A} perussävel ${oi(s.root)}.` } : { marks: g.map((S) => Mt(S, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Fp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = Df(a);
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
      this.question = Lp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = Ap(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? Oo(f.midi, a, "class") : o === "board" ? !!c && zf(this.settings, f, c) : Oo(f.midi, a, f.check)))
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
function $o(s) {
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
const Fo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], rr = (s) => Fo.find(([a]) => a === s)?.[1] ?? s;
function It({ label: s, children: a }) {
  const o = _.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    _.cloneElement(a, { id: o })
  ] });
}
function Ud({ legend: s, name: a, value: o, options: c, onChange: d, disabled: f }) {
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
function Hd(s) {
  const a = bi(s), o = Df(s), c = _i(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Pa[s.hints].title} · ${d} · ${In(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Gd({ s, change: a, locked: o, problem: c }) {
  const d = _.useId(), f = (v, g) => a({ ...s, [v]: g }), p = bi(s), m = _i(s) === "note" || _i(s) === "degree", w = ["scale", "chord", "caged"].includes(s.mode), b = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(It, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: Fo.map(([v, g]) => /* @__PURE__ */ r.jsx("option", { value: v, children: g }, v)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: Fo.find(([v]) => v === s.mode)[2] })
    ] }),
    w && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(It, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: He.CHROM.map((v, g) => /* @__PURE__ */ r.jsx("option", { value: g, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(It, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(He.SCALES).map(([v, g]) => /* @__PURE__ */ r.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(It, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ r.jsxs("select", { value: s.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ r.jsx(It, { label: "Sävelten järjestys", children: /* @__PURE__ */ r.jsxs("select", { value: s.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ r.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ r.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(It, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ti).map(([v, g]) => /* @__PURE__ */ r.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(It, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ r.jsxs("select", { value: s.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
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
      s.mode === "caged" ? /* @__PURE__ */ r.jsx(It, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ r.jsx("select", { value: s.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ r.jsx(It, { label: "Tehtävä", children: /* @__PURE__ */ r.jsxs("select", { value: s.activity, onChange: (v) => f("activity", v.target.value), children: [
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
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx(It, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ r.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ r.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Ud,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Pa[v] }))
      }
    ),
    m ? /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ r.jsx(Ud, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => f("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ r.jsx(It, { label: "Kierroksen pituus", children: /* @__PURE__ */ r.jsxs("select", { value: s.rounds, disabled: In(s), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ r.jsx(It, { label: "Vastausten tarkistus", children: /* @__PURE__ */ r.jsxs("select", { value: In(s) ? "pitch" : s.check, disabled: In(s), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ r.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ r.jsx(It, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ r.jsxs("select", { value: String(s.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
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
          /* @__PURE__ */ r.jsx(It, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ r.jsx(It, { label: "Viimeinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: Zt.map((v, g) => /* @__PURE__ */ r.jsxs("label", { children: [
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
const Wd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Ip(s) {
  return s && Object.hasOwn(Wd, s) ? Wd[s] : null;
}
const Dp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function zp({ onSelect: s }) {
  return /* @__PURE__ */ r.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ r.jsx("div", { className: "learning-grid", children: Dp.map((a) => /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(a.id), children: [
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
function Bp({ onBack: s, onNotes: a }) {
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
const Vp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Io = 100, Bf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Zo(s) {
  if (s === null || s.trim() === "") return Io;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Io;
}
function Kp() {
  try {
    return Zo(localStorage.getItem(Bf));
  } catch {
    return Io;
  }
}
function Up(s) {
  try {
    localStorage.setItem(Bf, String(Zo(String(s))));
  } catch {
  }
}
function jo(s, a, o = !0) {
  return o ? Vp[s] * Zo(String(a)) / 100 : 0;
}
function Vf(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Kf = 0.12, Hp = 2e3, Uf = 3, Yd = 1e-3, Gp = Kf, Qd = 1500, Wp = 4e3;
function Hf(s) {
  return s.readyState >= Uf && !s.seeking;
}
function Gf(s) {
  return s.every(Hf);
}
function Yp(s) {
  let a = 0;
  for (const o of s)
    if (!Hf(o))
      try {
        const c = o.play();
        o.pause(), c && typeof c.catch == "function" && c.catch(() => {
        }), a++;
      } catch {
      }
  return a;
}
function Qp(s, a, o, c = {
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
        for (const M of s) for (const A of f) M.removeEventListener(A, v);
        d(C);
      }
    }
    function v() {
      o() ? b("ohitettu") : s.some((C) => C.error) ? b("virhe") : Gf(s) && b("valmis");
    }
    const g = () => {
      v(), p || (m = c.set(g, 50));
    };
    for (const C of s) for (const M of f) C.addEventListener(M, v);
    v(), p || (m = c.set(g, 50));
  });
}
function Jp(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= Kf || s.seeking || s.readyState < Uf ? !1 : s.msSinceLastFix >= Hp;
}
const Xp = 1.5, Zp = 0.4, qp = 0.5;
let Do = null, ev = null;
function tv(s) {
  return Do !== null ? Do : (ev ??= Vf()) ? 0 : Zp;
}
class Wf {
  constructor(a = tv()) {
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
  align(a, o, c = !1, d = performance.now(), f = Yd) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused) || !c && d < this.holdUntil) return !1;
    const p = o.currentTime - a.currentTime, m = Math.abs(p), w = a.loop && Number.isFinite(a.duration) && Math.abs(m - a.duration) < 0.35, b = this.lastFix.get(o);
    if (!Jp({
      drift: m,
      atLoopBoundary: w,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: b === void 0 ? 1 / 0 : d - b
    }, c)) return !1;
    const v = !a.paused;
    !c && v && b !== void 0 && (this.latency = Math.min(Xp, Math.max(0, this.latency - qp * p)), Do = this.latency);
    let g = a.currentTime + (v ? this.latency : 0);
    if (Number.isFinite(o.duration) && (g = Math.min(g, Math.max(0, o.duration - 0.05))), Math.abs(o.currentTime - g) < Math.max(f, Yd)) return !1;
    try {
      o.currentTime = g;
    } catch {
      return !1;
    }
    return v ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function nv(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function iv(s = nv(), a = () => Vf()) {
  return s ? "webaudio" : a() ? "element" : "webaudio";
}
function rv(s = globalThis.navigator) {
  const a = s?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const sv = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class av {
  constructor(a = sv, o = globalThis.navigator) {
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
        rv(this.nav);
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
const lv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", ov = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Jd(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Yf() {
  const s = _.useRef(null), a = _.useRef(null), [o, c] = _.useState(!1), [d, f] = _.useState(!1), [p, m] = _.useState(!1), [w, b] = _.useState(0), [v, g] = _.useState(0), [C, M] = _.useState(""), A = _.useRef(new Wf());
  function S(z = !1) {
    const B = s.current, D = a.current;
    !B || !D || !Number.isFinite(B.currentTime) || A.current.align(B, D, z);
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
        Jd(w),
        " / ",
        Jd(v)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: lv,
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
        src: ov,
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
const uv = 4e3;
class Xd extends Error {
  name = "MicSetupError";
}
async function cv(s, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Xd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
          b = setTimeout(() => g(new Xd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), uv);
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
async function dv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var So, Zd;
function fv() {
  if (Zd) return So;
  Zd = 1;
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
        for (var M = m + C, A = m, S = 0; A < M; A += 2, S += f) {
          const N = A, V = N + C, T = V + C, U = T + C, z = o[N], B = o[N + 1], D = o[V], $ = o[V + 1], I = o[T], se = o[T + 1], X = o[U], we = o[U + 1], Ce = z, Q = B, de = g[S], G = v * g[S + 1], oe = D * de - $ * G, re = D * G + $ * de, W = g[2 * S], ae = v * g[2 * S + 1], te = I * W - se * ae, x = I * ae + se * W, y = g[3 * S], ne = v * g[3 * S + 1], ue = X * y - we * ne, Ee = X * ne + we * y, H = Ce + te, K = Q + x, ee = Ce - te, Z = Q - x, me = oe + ue, Te = re + Ee, pe = v * (oe - ue), je = v * (re - Ee), Ne = H + me, $e = K + Te, _e = H - me, Ve = K - Te, tt = ee + je, Je = Z - pe, O = ee - je, le = Z + pe;
          o[N] = Ne, o[N + 1] = $e, o[V] = tt, o[V + 1] = Je, o[T] = _e, o[T + 1] = Ve, o[U] = O, o[U + 1] = le;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], w = p[c + 1], b = p[c + d], v = p[c + d + 1], g = m + b, C = w + v, M = m - b, A = w - v;
    f[o] = g, f[o + 1] = C, f[o + 2] = M, f[o + 3] = A;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, w = d * 2, b = d * 3, v = p[c], g = p[c + 1], C = p[c + d], M = p[c + d + 1], A = p[c + w], S = p[c + w + 1], N = p[c + b], V = p[c + b + 1], T = v + A, U = g + S, z = v - A, B = g - S, D = C + N, $ = M + V, I = m * (C - N), se = m * (M - V), X = T + D, we = U + $, Ce = z + se, Q = B - I, de = T - D, G = U - $, oe = z - se, re = B + I;
    f[o] = X, f[o + 1] = we, f[o + 2] = Ce, f[o + 3] = Q, f[o + 4] = de, f[o + 5] = G, f[o + 6] = oe, f[o + 7] = re;
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
      var C = p >>> 1, M = C >>> 1, A = M >>> 1;
      for (m = 0; m < c; m += p)
        for (var S = 0, N = 0; S <= A; S += 2, N += f) {
          var V = m + S, T = V + M, U = T + M, z = U + M, B = o[V], D = o[V + 1], $ = o[T], I = o[T + 1], se = o[U], X = o[U + 1], we = o[z], Ce = o[z + 1], Q = B, de = D, G = g[N], oe = v * g[N + 1], re = $ * G - I * oe, W = $ * oe + I * G, ae = g[2 * N], te = v * g[2 * N + 1], x = se * ae - X * te, y = se * te + X * ae, ne = g[3 * N], ue = v * g[3 * N + 1], Ee = we * ne - Ce * ue, H = we * ue + Ce * ne, K = Q + x, ee = de + y, Z = Q - x, me = de - y, Te = re + Ee, pe = W + H, je = v * (re - Ee), Ne = v * (W - H), $e = K + Te, _e = ee + pe, Ve = Z + Ne, tt = me - je;
          if (o[V] = $e, o[V + 1] = _e, o[T] = Ve, o[T + 1] = tt, S === 0) {
            var Je = K - Te, O = ee - pe;
            o[U] = Je, o[U + 1] = O;
            continue;
          }
          if (S !== A) {
            var le = Z, ye = -me, Me = K, ve = -ee, Ie = -v * Ne, ze = -v * je, St = -v * pe, vt = -v * Te, qt = le + Ie, Gt = ye + ze, Lt = Me + vt, yn = ve - St, be = m + M - S, ln = m + C - S;
            o[be] = qt, o[be + 1] = Gt, o[ln] = Lt, o[ln + 1] = yn;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], w = p[c + d], b = m + w, v = m - w;
    f[o] = b, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, w = d * 2, b = d * 3, v = p[c], g = p[c + d], C = p[c + w], M = p[c + b], A = v + C, S = v - C, N = g + M, V = m * (g - M), T = A + N, U = S, z = -V, B = A - N, D = S, $ = V;
    f[o] = T, f[o + 1] = 0, f[o + 2] = U, f[o + 3] = z, f[o + 4] = B, f[o + 5] = 0, f[o + 6] = D, f[o + 7] = $;
  }, So;
}
var hv = fv();
const mv = /* @__PURE__ */ Xm(hv);
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
    this._inputLength = a, this._fft = new mv(kv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function pv(s) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, c = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && s[f] > c && (c = s[f], d = f);
  return a;
}
function vv(s, a) {
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
    const c = pv(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((w) => this._nsdfBuffer[w])), f = c.find(
      (w) => this._nsdfBuffer[w] >= this._clarityThreshold * d
    ), [p, m] = vv(
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
function kv(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function yv(s) {
  const a = s * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const gv = 0.05, xv = 1.5;
class jv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = yv(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * gv))), this.detector = Zr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Sv();
  onset = new wv();
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
    } = this.opts, v = this.analysers.map(($, I) => ($.getFloatTimeDomainData(this.buffers[I]), qd(this.buffers[I], this.buffers[I].length - this.shortLength))), g = v.indexOf(Math.max(...v));
    g !== this.channel && v[g] > (v[this.channel] ?? 0) * xv && (this.channel = g);
    const C = this.buffers[this.channel], M = v[this.channel], A = Nv(C, C.length - this.shortLength), S = { rms: M, peak: A, channel: this.channel, levels: v }, N = M < c, V = this.onset.feed(M, a, c);
    if (N && qd(C, 0) < c) {
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
    const { midi: z, cents: B } = up(T);
    if (Math.abs(B) > f) {
      this.gate.feed(null, a, d, N, V), w?.({ ...S, status: "off-pitch", frequency: T, clarity: U, midi: z, cents: B });
      return;
    }
    w?.({ ...S, status: "pitch", frequency: T, clarity: U, midi: z, cents: B });
    const D = this.gate.feed(z, a, d, N, V);
    D !== null && b?.({ midi: z, frequency: T, cents: B, clarity: U, timestamp: a, heldMs: D.heldMs });
  }
}
class Sv {
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
class wv {
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
function qd(s, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < s.length; d++) c += s[d] * s[d];
  return Math.sqrt(c / Math.max(1, s.length - o));
}
function Nv(s, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < s.length; c++) {
    const d = Math.abs(s[c]);
    d > o && (o = d);
  }
  return o;
}
const ur = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let nr;
function Qf() {
  return (!nr || nr.state === "closed") && (nr = new AudioContext()), nr;
}
function Ev() {
  const s = nr;
  nr = void 0, s?.close().catch(() => {
  });
}
const Jf = (s) => s instanceof Error ? s.name : "";
function Cv(s) {
  const a = Jf(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Tv {
  constructor(a = (o) => cv(o, Qf)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Jf(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new jv(f, { ...o });
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
function Xf(s, a) {
  return s !== "on" ? s : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const ef = (s) => Math.max(0, Math.min(1, (ur(s) + 60) / 60));
function Mv(s) {
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
  constructor(a = Qf) {
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
    const b = Array.from({ length: 12 }, (A, S) => 1 / (S + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...b.map(() => 0)]),
      new Float32Array([0, ...b])
    ), g = p.currentTime + 0.05;
    let C = 0;
    return a.forEach((A, S) => {
      if (!Number.isFinite(A.beat) || A.beat < 0 || !Number.isFinite(A.duration) || A.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const N = g + A.beat * m, V = A.duration * m, T = N + Math.max(0.08, V * 0.94), U = p.createOscillator(), z = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = xo(A.midi), z.gain.setValueAtTime(0, N), z.gain.linearRampToValueAtTime(0.22, N + 0.012), z.gain.exponentialRampToValueAtTime(1e-3, T - 0.01), U.connect(z), z.connect(w), U.start(N), U.stop(T), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(S);
      }, 50 + A.beat * m * 1e3));
      const B = a[S + 1]?.beat ?? 1 / 0;
      d && B > A.beat + A.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + A.beat * m * 1e3 + V * 1e3)), C = Math.max(C, A.beat + A.duration);
    }), !await new Promise((A) => {
      this.settle = A, this.timer = setTimeout(() => A(!0), 50 + C * m * 1e3 + 150);
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
    const M = [], A = () => {
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
    return A(), this.loopTick = setInterval(A, 25), new Promise((S) => {
      this.settle = S;
    });
  }
}
function ci(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const w = { position: d === null || f === null ? null : Ue(d, f), beat: o, duration: p };
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
const tf = ci("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), nf = ci("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), _v = ci("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), rf = ci("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), sf = ci("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), bv = ci("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), af = ci("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), lf = ci("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), Pv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [tf, nf],
    whole: No("Melodia · A + B + C", tf, nf, _v),
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
    fragments: [rf, sf],
    whole: No("Ukko Nooa · A + B", rf, sf),
    bonus: bv,
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
    fragments: [af, lf],
    whole: No("Siirtymämelodia · A + B", af, lf),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Av(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const of = ["e", "B", "G", "D", "A", "E"];
function qo({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = Pv[s], [f, p] = _.useState(a === "fingering" ? "a" : "whole"), [m, w] = _.useState(d.tempo), [b, v] = _.useState(!1), [g, C] = _.useState(!1), [M, A] = _.useState(a !== "memory"), [S, N] = _.useState(!1), [V, T] = _.useState(null), [U, z] = _.useState(""), B = _.useRef(new as()), D = _.useRef(0);
  function $() {
    D.current++, B.current.stop(), N(!1), T(null);
  }
  _.useEffect(() => {
    c && (c.current = $);
    const y = () => {
      document.hidden && $();
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, B.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const I = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], se = I.find((y) => y.id === f) ?? I[0], X = se.clip, we = Av(X), Ce = V === null ? null : we[V]?.beat ?? null, Q = Ce === null ? null : X.events.find((y) => y.beat === Ce)?.position ?? null, de = _.useRef(null);
  Lf(de, ".melody-playing", S && Ce !== null ? String(Ce) : "", { enabled: b && g, playback: S });
  const G = X.beats / 4, oe = [...new Map(X.events.filter((y) => y.position).map((y) => [Xe(y.position), y.position])).values()], re = oe.map((y) => y.fret), W = oe.filter((y) => M || Q?.string === y.string && Q.fret === y.fret).map((y) => ({
    ...y,
    label: Fe(y.midi),
    kind: Q?.string === y.string && Q.fret === y.fret ? "playing" : Ye(y.midi) === d.tonic ? "answer" : "shape"
  })), ae = {
    strings: [...new Set(oe.map((y) => y.string))],
    min: Math.min(...re),
    max: Math.max(...re),
    fixed: "box"
  };
  async function te() {
    if (S) {
      $();
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
    $(), z(""), p(y);
  }
  return /* @__PURE__ */ r.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ r.jsxs("details", { onToggle: (y) => {
    const ne = y.currentTarget.open;
    v(ne), ne || $();
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
            $(), w(Number(y.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((y, ne) => y - ne).filter((y, ne, ue) => ue.indexOf(y) === ne).map((y) => /* @__PURE__ */ r.jsxs("option", { value: y, children: [
            y,
            " BPM"
          ] }, y)) })
        ] }),
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": g, onClick: () => C((y) => !y), children: g ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: S && V !== null ? `Nyt soi ${Fe(we[V].midi)} · ${of[Q.string]}-kieli, ${Q.fret}. nauha` : S ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ r.jsx(ui, { area: ae, marks: W, disabled: !0, follow: "playing", playback: S, caption: `${d.title}, ${se.name}` }),
        /* @__PURE__ */ r.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M,
              onClick: () => A((y) => !y),
              children: M ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      g && /* @__PURE__ */ r.jsxs("div", { ref: de, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${se.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
            X.events.map((y, ne) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: y.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: y.beat % 4 === 0 ? `T${Math.floor(y.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: y.duration === 1 ? "♩" : `${y.duration} iskua` })
            ] }, ne))
          ] }) }),
          /* @__PURE__ */ r.jsx("tbody", { children: of.map((y, ne) => /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "row", children: y }),
            X.events.map((ue, Ee) => {
              const H = ue.position?.string === ne, K = H && Ce === ue.beat;
              return /* @__PURE__ */ r.jsx(
                "td",
                {
                  className: `${ue.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${H && Ye(ue.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": H ? `${y}-kieli, ${ue.position.fret}. nauha, ${Fe(ue.position.midi)}` : void 0,
                  children: H ? ue.position.fret : "—"
                },
                Ee
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
const zo = He.fingeringBoxes(9, He.SCALES.mp, "pentatonic", [1, 2]), Zf = [...new Map(zo.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Ue(o, c);
  return [Xe(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ma = [5, 4, 3, 2, 1, 0].flatMap((s) => Zf.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), Bo = [
  ...Ma,
  ...Ma.slice(1, -1).reverse()
], Lv = [...Bo, Ma[0]], uf = new Set(
  zo[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Ue(a, o);
    return Xe(c);
  })).filter((s) => zo[1].positions[0].strings.flatMap((a, o) => a.map((c) => Xe(Ue(o, c)))).includes(s))
), Rv = [
  Ue(5, 5),
  Ue(5, 8),
  Ue(5, 10),
  Ue(4, 7),
  Ue(4, 10),
  Ue(3, 7),
  Ue(3, 10),
  Ue(3, 7),
  Ue(4, 10),
  Ue(4, 7),
  Ue(5, 10),
  Ue(5, 8),
  Ue(5, 5)
], qf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", eh = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Eo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], cf = (s) => Ye(s) === 9;
function df() {
  try {
    const s = Number(localStorage.getItem(qf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function Ov() {
  try {
    const s = Number(localStorage.getItem(eh));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function $v({ onBack: s, onPosition: a }) {
  const [o, c] = _.useState(df), [d, f] = _.useState(df), [p, m] = _.useState(!1), [w, b] = _.useState("roots"), [v, g] = _.useState(Ov), [C, M] = _.useState(null), [A, S] = _.useState(null), [N, V] = _.useState(""), T = _.useRef(new as()), U = _.useRef(0), z = _.useRef(null), B = A === null ? null : Bo[A];
  function D() {
    z.current?.(), U.current++, T.current.stop(), M(null), S(null);
  }
  _.useEffect(() => {
    const Q = () => {
      document.hidden && (U.current++, T.current.stop(), M(null), S(null));
    };
    return document.addEventListener("visibilitychange", Q), () => {
      document.removeEventListener("visibilitychange", Q), U.current++, T.current.stop();
    };
  }, []);
  async function $(Q) {
    z.current?.();
    const de = ++U.current;
    T.current.stop(), S(null), V(""), M(Q);
    try {
      Q === "transition" ? await T.current.play(Rv.map((G) => G.midi)) : Q === "once" ? await T.current.play(Lv.map((G) => G.midi)) : await T.current.loop(Bo.map((G) => G.midi), (G) => {
        de === U.current && S(G);
      }, v);
    } catch (G) {
      de === U.current && V(La(G));
    } finally {
      de === U.current && (M(null), S(null));
    }
  }
  function I(Q) {
    const de = Math.max(40, Math.min(140, Q));
    g(de), T.current.setLoopTempo(de);
    try {
      localStorage.setItem(eh, String(de));
    } catch {
    }
  }
  function se(Q) {
    Q > o || (D(), f(Q), m(!1), b("roots"));
  }
  function X() {
    D();
    const Q = Math.min(4, d + 1);
    if (f(Q), m(!1), b("roots"), Q > o) {
      c(Q);
      try {
        localStorage.setItem(qf, String(Q));
      } catch {
      }
    }
  }
  const we = (Q, de) => d < 2 || d === 2 && p && uf.has(de) || d === 3 && (w === "all" || w === "roots" && cf(Q)), Ce = Zf.filter((Q) => we(Q.midi, Xe(Q))).map((Q) => ({
    ...Q,
    label: d < 2 || d === 2 && p || d === 3 && w === "all" ? Fe(Q.midi) : "A",
    kind: d < 2 && B?.string === Q.string && B?.fret === Q.fret ? "playing" : cf(Q.midi) ? "answer" : uf.has(Xe(Q)) ? "anchor" : "shape"
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
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Eo.map((Q, de) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: de === d ? "journey-step current" : "journey-step",
        "aria-current": de === d ? "step" : void 0,
        disabled: de > o,
        onClick: () => se(de),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: de > o ? "🔒" : de < o ? "✓" : de + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: Q.title })
        ]
      },
      Q.title
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
              onClick: () => C === "whole" ? D() : void $("whole"),
              children: C === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "once",
              onClick: () => C === "once" ? D() : void $("once"),
              children: C === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "transition",
              onClick: () => C === "transition" ? D() : void $("transition"),
              children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((Q) => !Q), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => se(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((Q) => /* @__PURE__ */ r.jsxs("label", { children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: Q.value,
                  checked: w === Q.value,
                  onChange: () => b(Q.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: Q.name })
            ] }, Q.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C === "once" ? D() : void $("once"), children: C === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C === "transition" ? D() : void $("transition"), children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: C === "whole" ? B && d < 2 ? `Nyt soi ${Fe(B.midi, !1, !0)} · ${Zt[B.string]}-kieli, nauha ${B.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : C === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : C === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        N && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: N }),
        /* @__PURE__ */ r.jsx(
          ui,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: C,
            marks: Ce,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? w === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : w === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ r.jsx(
          qo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: D,
            stopHandleRef: z
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ r.jsx(Yf, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: X, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
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
const qr = "musiikin-kartta:skaalapolku:v1", Sa = "musiikin-kartta:skaalapolku:position-2:v1", Co = "musiikin-kartta:skaalapolku:position-3:v1", wa = "musiikin-kartta:skaalapolku:bridge-1-2:v1", _a = "musiikin-kartta:skaalapolku:active-position:v1", th = "musiikin-kartta:skaalapolku:tempo:v1", sr = 75, Vo = 40, Ko = 140;
function Fv() {
  try {
    const s = localStorage.getItem(th);
    if (s === null) return sr;
    const a = Number(s);
    return Number.isInteger(a) && a >= Vo && a <= Ko && a % 5 === 0 ? a : sr;
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
], ff = [
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
function Iv() {
  try {
    return En(Sa) === 4 && localStorage.getItem(_a) === "bridge";
  } catch {
    return !1;
  }
}
function Dv({ onBack: s }) {
  const [a, o] = _.useState(Mo), [c, d] = _.useState(Iv), [f, p] = _.useState(() => ({
    1: En(qr),
    2: En(Sa),
    3: En(Co)
  })), [m, w] = _.useState(() => En(Mo() === 3 ? Co : Mo() === 2 ? Sa : qr)), b = f[a], [v, g] = _.useState(!1), [C, M] = _.useState("roots"), [A, S] = _.useState(Fv), [N, V] = _.useState(null), [T, U] = _.useState(null), [z, B] = _.useState(""), D = _.useRef(new as()), $ = _.useRef(0), I = _.useRef(null);
  function se(H) {
    const K = Math.max(Vo, Math.min(Ko, H));
    S(K), D.current.setLoopTempo(K);
    try {
      localStorage.setItem(th, String(K));
    } catch {
    }
  }
  function X() {
    I.current?.(), $.current++, D.current.stop(), V(null), U(null);
  }
  _.useEffect(() => {
    const H = () => {
      document.hidden && ($.current++, D.current.stop(), V(null), U(null));
    };
    return document.addEventListener("visibilitychange", H), () => {
      document.removeEventListener("visibilitychange", H), $.current++, D.current.stop();
    };
  }, []);
  const we = He.fingeringBoxes(9, He.SCALES.mp, "pentatonic", [a])[0].positions[0], Ce = we.strings.flatMap((H, K) => H.map((ee) => Ue(K, ee))).sort((H, K) => H.midi - K.midi || K.string - H.string), Q = [...Ce, ...Ce.slice(1, -1).reverse()], de = T === null ? null : Q[T], G = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], oe = we.start, re = we.end, W = (H) => Ye(H) === 9, ae = (H) => m < 2 ? !0 : m === 2 ? v && W(H) : C === "scale" || C === "roots" && W(H), te = Ce.filter((H) => ae(H.midi)).map((H) => ({
    ...H,
    label: m < 2 || m === 3 && C === "scale" ? Fe(H.midi) : "A",
    kind: m < 2 && de?.string === H.string && de.fret === H.fret ? "playing" : W(H.midi) ? "answer" : "shape"
  }));
  async function x(H) {
    I.current?.();
    const K = ++$.current;
    D.current.stop(), U(null), B(""), V(H);
    try {
      H === "phrase" ? await D.current.play(G) : await D.current.loop(Q.map((ee) => ee.midi), (ee) => {
        K === $.current && U(ee);
      }, m === 2 ? A : sr);
    } catch (ee) {
      K === $.current && B(La(ee));
    } finally {
      K === $.current && (V(null), U(null));
    }
  }
  function y() {
    X();
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
    H > b || (X(), w(H), g(!1), M("roots"));
  }
  function ue(H) {
    if (!(H === 2 && f[1] < 4) && !(H === 3 && En(wa) < 4)) {
      X(), d(!1), o(H), w(f[H]), g(!1), M("roots"), B("");
      try {
        localStorage.setItem(_a, String(H));
      } catch {
      }
    }
  }
  function Ee() {
    if (!(f[2] < 4)) {
      X(), d(!0), g(!1), B("");
      try {
        localStorage.setItem(_a, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx($v, { onBack: s, onPosition: ue }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      X(), s();
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
      oe,
      "–",
      re,
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
          onClick: Ee,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: En(wa) < 4,
          onClick: () => ue(3),
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
              disabled: A <= Vo,
              onClick: () => se(A - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            A,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: A >= Ko,
              onClick: () => se(A + 5),
              children: "+ 5"
            }
          ),
          A !== sr && /* @__PURE__ */ r.jsx(
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
              onClick: () => N === "loop" ? X() : void x("loop"),
              children: N === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => N === "phrase" ? X() : void x("phrase"), children: N === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: N === "loop" ? de && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Fe(de.midi, !1, !0)} · ${Zt[de.string]}-kieli, nauha ${de.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        z && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: z }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": v, onClick: () => g((H) => !H), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              ff.map((H) => /* @__PURE__ */ r.jsxs("label", { children: [
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
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: re, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: N, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? ff.find((H) => H.value === C).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: oe, max: re, fixed: "box" }, marks: te, disabled: !0, follow: "playing", playback: N, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ r.jsx(
          qo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: X,
            stopHandleRef: I
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ r.jsx(Yf, {}, a),
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
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => ue(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Ee, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ue(2), children: "Kertaa positio 2" })
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
const zv = ["ionian", "aeolian"], ir = {
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
      Ue(4, 3),
      Ue(4, 5),
      Ue(3, 2),
      Ue(3, 3),
      Ue(3, 5),
      Ue(2, 2),
      Ue(2, 4),
      Ue(2, 5)
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
      Ue(5, 5),
      Ue(5, 7),
      Ue(5, 8),
      Ue(4, 5),
      Ue(4, 7),
      Ue(4, 8),
      Ue(3, 5),
      Ue(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, nh = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", ih = "musiikin-kartta:moodipolku:active:v1", Bv = (s) => {
  const a = ir[s].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Vv = (s) => [...Bv(s), ir[s].positions[0]], hf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Na(s) {
  try {
    const a = Number(localStorage.getItem(nh(s)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function mf() {
  try {
    return localStorage.getItem(ih) === "aeolian" && Na("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Kv({ onBack: s }) {
  const [a, o] = _.useState(mf), [c, d] = _.useState(() => ({
    ionian: Na("ionian"),
    aeolian: Na("aeolian")
  })), [f, p] = _.useState(() => Na(mf())), [m, w] = _.useState(null), [b, v] = _.useState(null), [g, C] = _.useState(!1), [M, A] = _.useState("roots"), [S, N] = _.useState(""), [V, T] = _.useState(null), [U, z] = _.useState(null), B = _.useRef(new as()), D = _.useRef(0), $ = _.useRef(null), I = ir[a], se = Vv(a), X = m === "scale" && b !== null ? se[b] : null;
  function we() {
    $.current?.(), D.current++, B.current.stop(), w(null), v(null);
  }
  _.useEffect(() => {
    const y = () => {
      document.hidden && (D.current++, B.current.stop(), w(null), v(null));
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), D.current++, B.current.stop();
    };
  }, []);
  async function Ce(y, ne, ue = !1) {
    $.current?.();
    const Ee = ++D.current;
    B.current.stop(), v(null), N(""), w(y);
    try {
      const H = ue ? await B.current.loop(ne, void 0, 75) : await B.current.play(ne, (K) => {
        Ee === D.current && y === "scale" && v(K);
      });
      return Ee === D.current && H;
    } catch (H) {
      return Ee === D.current && N(La(H)), !1;
    } finally {
      Ee === D.current && (w(null), v(null));
    }
  }
  function Q(y) {
    y > c[a] || (we(), p(y), T(null), z(null), C(!1), A("roots"), N(""));
  }
  function de() {
    we();
    const y = Math.min(5, f + 1);
    if (p(y), T(null), z(null), C(!1), A("roots"), y > c[a]) {
      d((ne) => ({ ...ne, [a]: y }));
      try {
        localStorage.setItem(nh(a), String(y));
      } catch {
      }
    }
  }
  function G(y) {
    if (!(y === "aeolian" && c.ionian < 5)) {
      we(), o(y), p(c[y]), T(null), z(null), C(!1), A("roots"), N("");
      try {
        localStorage.setItem(ih, y);
      } catch {
      }
    }
  }
  async function oe() {
    we(), z(null), T(null);
    const y = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Ce("comparison", ir[y].phrase) && T(y);
  }
  const re = (y) => Ye(y) === I.tonic, W = I.positions.filter((y) => f < 2 ? !0 : f === 2 ? g && re(y.midi) : f === 4 ? M === "all" || M === "roots" && re(y.midi) : !1).map((y) => ({
    ...y,
    label: f === 2 || f === 4 && M === "roots" ? I.tonicName : Fe(y.midi),
    kind: X?.string === y.string && X.fret === y.fret ? "playing" : re(y.midi) ? "answer" : "shape"
  })), ae = [...new Set(I.positions.map((y) => y.string))], te = Math.min(...I.positions.map((y) => y.fret)), x = Math.max(...I.positions.map((y) => y.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      we(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      zv.indexOf(a) + 1,
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
      hf.map((y, ne) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === ne ? "journey-step current" : "journey-step",
          "aria-current": f === ne ? "step" : void 0,
          disabled: ne > c[a],
          onClick: () => Q(ne),
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
          onClick: () => Q(5),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ r.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : hf[f] }),
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
                oe();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          V !== null && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Ce("comparison", ir[V].phrase);
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
                onChange: () => A(y)
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
          onClick: () => m === "scale" ? we() : void Ce("scale", se.map((y) => y.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? we() : void Ce("accompaniment", I.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && X && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Fe(X.midi, !1, !0),
        " · ",
        Zt[X.string],
        "-kieli, nauha ",
        X.fret,
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
        qo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: we,
          stopHandleRef: $
        },
        `nooa:${f}`
      ),
      S && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: S }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: de, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          I.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ r.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Q(2), children: "Kertaa muistiharjoitus" }),
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
function Uv({ onBack: s }) {
  const [a, o] = _.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ r.jsx(Dv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ r.jsx(Kv, { onBack: () => o(null) }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
function Hv({ onBack: s }) {
  const [a, o] = _.useState(0), [c, d] = _.useState([]), [f, p] = _.useState(!1), [m, w] = _.useState(""), [b, v] = _.useState(0), g = a >= Jr.length, C = Jr[Math.min(a, Jr.length - 1)], M = cr(ga.strings, ga.min, ga.max).filter((B) => Ye(B.midi) === C), A = M.filter((B) => !c.includes(Xe(B))), S = A.length === 0 && !g, N = !S && f ? A[0] : void 0, V = [
    ...M.filter((B) => c.includes(Xe(B))).map((B) => ({ ...B, kind: "answer", label: Fe(B.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function T(B) {
    if (g || S) return;
    const D = Xe(B);
    if (Ye(B.midi) !== C) {
      v((se) => se + 1), w(`Valitsit sävelen ${Fe(B.midi)}. Etsi ${Fe(C)}.`);
      return;
    }
    if (c.includes(D)) {
      w("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const $ = [...c, D];
    d($), p(!1);
    const I = M.length - $.length;
    w(I ? `Oikein! ${Fe(C)} löytyi ${Zt[B.string]}-kieleltä (${Mi(B.fret)}). Vielä ${I}.` : `Löysit kaikki ${M.length} ${Fe(C)}-säveltä tällä alueella.`);
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
          Fe(C),
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
        Fe(C),
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
const Gv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, _o = ["C", "G", "D", "Em"], pf = ["C", "G", "D", "Em", "Am", "E", "A"], Wv = { min: 0, max: 3, fixed: "" };
function vf(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Yv({ onBack: s }) {
  const [a, o] = _.useState(4), [c, d] = _.useState(() => vf(_o)), [f, p] = _.useState(0), [m, w] = _.useState(null), [b, v] = _.useState([]), [g, C] = _.useState(0), M = f >= c.length, A = Gv[c[Math.min(f, c.length - 1)]], S = a === 4 ? _o : pf, N = A.frets.flatMap(($, I) => $ === null ? [] : [I]), V = A.frets.flatMap(($, I) => $ === null ? [I] : []), T = { ...Wv, strings: N }, U = A.frets.flatMap(($, I) => $ === null ? [] : [{
    ...Ue(I, $),
    kind: $ === 0 ? "anchor" : "shape",
    label: $ === 0 ? "○" : "●"
  }]);
  function z($ = a) {
    o($), d(vf($ === 4 ? _o : pf)), p(0), w(null), v([]), C(0);
  }
  function B($) {
    m || M || b.includes($) || ($ === A.name ? w($) : (v((I) => [...I, $]), C((I) => I + 1)));
  }
  function D() {
    m && (p(($) => $ + 1), w(null), v([]));
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
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: S.map(($) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === $ ? "right" : b.includes($) ? "wrong" : "",
          disabled: !!m || b.includes($),
          "aria-pressed": m === $,
          onClick: () => B($),
          children: $
        },
        $
      )) }),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: m ? "feedback good" : b.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${A.name}-sointu.` : b.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: D, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ge = (s, a) => ({ first: s, ...a ? { second: a } : {} }), ar = () => [
  ge("Gm", "F"),
  ge("Gm"),
  ge("B♭", "F"),
  ge("Gm"),
  ge("Gm", "F"),
  ge("Gm"),
  ge("E♭", "F"),
  ge("Gm")
], lr = () => [
  ge("B♭", "F"),
  ge("Gm", "Dm"),
  ge("E♭", "F"),
  ge("Gm", "Dm")
], or = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], rh = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Qv = [
  { id: "intro", title: "Intro", start: 0, bars: [ge("Gm", "F"), ge("Gm"), ge("B♭", "F"), ge("Gm")] },
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
    bars: [...lr(), ge("E♭"), { ...ge("E♭"), passingBass: "F" }],
    lyrics: or,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ge("Gm", "F"), ge("Gm")] },
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
    bars: [...lr(), ge("E♭"), ge("F")],
    lyrics: or
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ge("Gm"), ge("Dm"), ge("F"), ge("C"), ge("Gm"), ge("Dm"), ge("E♭"), ge("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: ar(),
    lyrics: rh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...lr(), ge("E♭", "F"), ge("Gm")],
    lyrics: or
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ge("E♭", "F"),
      { ...ge("Gm"), possibleChord: "Dm" },
      ge("E♭", "F"),
      ge("Gm", "F"),
      { ...ge("Gm"), possibleChord: "Dm" },
      ge("Gm", "F"),
      ge("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Jv = [
  { id: "intro", title: "Intro", start: 0, bars: [ge("Gm", "F"), ge("Gm"), ge("B♭", "F"), ge("Gm")] },
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
    bars: [...lr(), ge("E♭"), ge("E♭")],
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
    bars: [...lr(), ge("E♭"), ge("F")],
    lyrics: or
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ge("Gm"), ge("Dm"), ge("F"), ge("C"), ge("Gm"), ge("Dm"), ge("E♭"), ge("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: ar(),
    lyrics: rh
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...lr(), ge("B♭", "F"), ge("Gm"), ge("E♭", "F"), ge("Gm")],
    lyrics: or
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ge("E♭", "F"), ge("Gm", "F"), ge("E♭", "F"), ge("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], dr = {
  acoustic: Qv,
  normal: Jv
}, Xv = "normal", Uo = "yksi-sointu-kaksi-askelta", eu = {
  acoustic: Uo + "-akustinen",
  normal: Uo + "-normaali"
}, sh = (s) => s === Uo || Object.values(eu).includes(s ?? "");
function Zv(s) {
  const a = Object.entries(eu).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const ah = (s) => eu[s], kf = (s) => {
  const a = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function tu(s, a = "acoustic") {
  const o = dr[a], c = o[s], d = o[s + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function nu(s, a = "acoustic") {
  const o = dr[a], c = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let g = 1; g < o.length && !(c < o[g].start); g++)
    d = g;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= rs(d, p + 1, a); )
    p++;
  const m = rs(d, p, a), w = tu(d, a) / 4;
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
  return dr[o][s].start + tu(s, o) * a;
}
function qv(s) {
  return dr[s].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = rs(o, d, s), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = tu(o, s) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function ek(s, a = "acoustic", o = !1) {
  const c = dr[a], d = nu(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = qv(a), w = m.findIndex((M) => M.sectionIndex === d.sectionIndex && M.barIndex === d.barIndex && M.part === p), v = [
    ...m.slice(w + 1).map((M) => ({ ...M, wrapped: !1 })),
    ...o ? m.slice(0, w + 1).map((M) => ({ ...M, wrapped: !0 })) : []
  ].find((M) => M.chord !== d.chord) ?? null;
  let g = null;
  const C = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!C || o)) {
    const M = C ? 0 : d.sectionIndex + 1, A = c[M], S = A.bars[0].first;
    g = {
      section: A,
      sectionIndex: M,
      firstChord: S,
      wrapped: C,
      continues: S === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: g };
}
function tk(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, w) => m + o(w), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const w = Math.abs(c - 2 * p);
    (w < f || w === f && p >= c - p) && (d = m, f = w), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Ho = ["Gm", "F", "B♭", "E♭", "Dm", "C"], lh = "musiikin-kartta:kappale-sointuvihjeet:v1", Ea = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, yf = {
  showChords: !0,
  level: 0,
  fadeOrder: Ea
};
function xa(s, a) {
  return !a.showChords || a.level >= a.fadeOrder[s];
}
function gf(s) {
  if (!s) return { ...yf, fadeOrder: { ...Ea } };
  try {
    const a = JSON.parse(s);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...Ea }, f = o.fadeOrder;
    if (f && typeof f == "object") {
      const p = f;
      for (const m of Ho)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...yf, fadeOrder: { ...Ea } };
  }
}
function nk() {
  try {
    return gf(localStorage.getItem(lh));
  } catch {
    return gf(null);
  }
}
const ik = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function rk(s) {
  const a = ik.exec(s.trim());
  if (!a) return s;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const sk = (s, a) => a === "power" ? rk(s) : s, ak = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], lk = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function ok({ version: s, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = _.useState(nk), [p, m] = _.useState(null), [w, b] = _.useState(!1), [v, g] = _.useState("full"), C = (G) => sk(G, v), M = dr[s], A = nu(a, s), { section: S, sectionIndex: N, barIndex: V, beat: T, chord: U } = A, z = T >= 3 && S.bars[V].second ? "second" : "first", B = (G, oe, re) => `${s}:${G}:${oe}:${re}`, D = (G, oe) => B(S.id, G, oe), $ = D(V, z), I = xa(U, d), se = I && p === $, X = (G, oe, re) => !xa(G, d) || p === D(oe, re), we = d.showChords && d.level === 0, Ce = Ho.filter((G) => xa(G, d)).length, { nextSection: Q } = ek(a, s, o), de = !!Q && xa(Q.firstChord, d);
  return _.useEffect(() => {
    m(null);
  }, [$]), _.useEffect(() => {
    try {
      localStorage.setItem(lh, JSON.stringify(d));
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
              f((oe) => ({ ...oe, showChords: G.target.checked })), m(null);
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
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([G, oe]) => /* @__PURE__ */ r.jsxs("label", { children: [
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
          /* @__PURE__ */ r.jsx("span", { children: oe })
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
              const oe = Number(G.target.value);
              f((re) => ({ ...re, level: oe })), m(null);
            },
            children: ak.map((G) => /* @__PURE__ */ r.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ce === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ce}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: Ho.map((G) => /* @__PURE__ */ r.jsxs("label", { children: [
        G,
        /* @__PURE__ */ r.jsx(
          "select",
          {
            "aria-label": G + ": piilotusvaihe",
            value: d.fadeOrder[G],
            onChange: (oe) => {
              const re = Number(oe.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [G]: re } })), m(null);
            },
            children: lk.map((oe) => /* @__PURE__ */ r.jsx("option", { value: oe.value, children: oe.label }, oe.value))
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
              const oe = M.find((re) => re.id === G.target.value);
              oe && c(oe.start);
            },
            children: M.map((G) => /* @__PURE__ */ r.jsxs("option", { value: G.id, children: [
              kf(G.start),
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
              onClick: () => m(se ? null : $),
              children: se ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Q && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: de ? "?" : C(Q.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": S.title + ": tahdit", children: S.bars.map((G, oe) => {
      const re = oe === V, W = re && (T < 3 || !G.second), ae = re && T >= 3 && !!G.second, te = X(G.first, oe, "first"), x = G.second ? X(G.second, oe, "second") : !1, y = (te ? C(G.first) : "sointu piilossa") + (G.second ? " " + (x ? C(G.second) : "sointu piilossa") : "") + (we && G.passingBass ? " (basson kulku " + G.passingBass + ")" : "") + (we && G.possibleChord ? " (" + C(G.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (re ? " active" : ""),
          "aria-pressed": re,
          "aria-label": "Tahti " + (oe + 1) + ": " + y + ". Siirry kohtaan " + kf(rs(N, oe, s)),
          onClick: () => c(rs(N, oe, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              oe + 1
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
        oe
      );
    }) }),
    w ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: tk(M).map((G, oe) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: G.map((re) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: re.title }),
        re.lyrics?.map((W, ae) => /* @__PURE__ */ r.jsx("p", { children: W }, ae))
      ] }, re.id)) }, oe)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : S.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        S.title,
        ": sanat"
      ] }),
      S.lyrics.map((G, oe) => /* @__PURE__ */ r.jsx("p", { children: G }, oe))
    ] }),
    we && S.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: S.note })
  ] });
}
const ba = 7, uk = { name: "bluesasteikko", base: He.SCALES.mp.base, add: [[6, "♭5"]] }, bo = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: He.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: uk,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: He.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function ck(s) {
  return He.scaleNotes(s).map(([a, o]) => He.noteName(ba, a, o));
}
const oh = (s) => s === "pentatonic" ? 5 : 7;
function dk(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= oh(s.system)), d = He.fingeringBoxes(ba, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (ba + m) % 12), p = (m, w) => w >= 0 && w <= o && f.includes((He.OPEN_PITCHES[m] + w) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((w) => {
    const b = w.strings.map((g, C) => {
      if (!g.length) return g;
      const M = g[g.length - 1];
      return p(C, M + 1) ? [...g.slice(0, -1), M + 1] : g;
    }), v = b.flat();
    return { ...w, strings: b, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const xf = 17;
function fk({ open: s }) {
  const [a, o] = _.useState("mp"), [c, d] = _.useState({ pentatonic: [], "3nps": [] }), [f, p] = _.useState(!1), [m, w] = _.useState(!1), b = _.useRef(null), v = bo.find((N) => N.id === a) ?? bo[0], g = c[v.system], C = dk(v, g, xf), M = C.some((N) => N.positions.length > 0), A = He.renderBoard(ba, v.scale, xf, {
    automatic: !0,
    boxes: C,
    onlyBoxNotes: M && f,
    label: v.title + (g.length ? ", " + g.map((N) => "boksi " + N).join(", ") : "")
  });
  _.useEffect(() => {
    const N = b.current;
    !N || !s || C.length === 1 && He.revealPositions(N, ".box-highlight");
  }, [A, s]);
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
      /* @__PURE__ */ r.jsx("span", { children: ck(v.scale).join(" · ") })
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
        dangerouslySetInnerHTML: { __html: A }
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
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: oh(v.system) }, (N, V) => V + 1).map((N) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": N, children: [
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
const Ci = ["backing", "guitar", "vocals"], hk = 0.05, mk = 5e-3;
class pk {
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
    const c = Math.max(0, Math.min(a, o - 1e-3)), d = this.context.currentTime + hk, f = Ci.map((p) => {
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
    typeof c.setTargetAtTime == "function" ? c.setTargetAtTime(o, this.context.currentTime, mk) : c.value = o;
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
function vk() {
  const s = globalThis.navigator?.audioSession;
  s && s.type !== "playback" && (s.type = "playback");
  const a = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!a) throw new Error("Web Audio API puuttuu");
  return new a();
}
const Fn = typeof location < "u" && new URLSearchParams(location.search).get("soitin") === "d1", Po = Fn && new URLSearchParams(location.search).get("vaihto") === "sivu", Ao = "musiikin-kartta:kappale-vieritys";
let iu = null;
function kk() {
  return Zv(new URLSearchParams(location.search).get("kappale")) ?? iu ?? Xv;
}
function yk(s) {
  iu = s;
  const a = new URL(location.href);
  sh(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", ah(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const gk = {
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
}, jf = 1e-3;
function Sf(s, a) {
  try {
    s.currentTime = a;
  } catch {
  }
}
function wf(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function xk({ onBack: s }) {
  const a = _.useRef(null), o = _.useRef(null), c = _.useRef(null), d = _.useRef(0), f = _.useRef(new Wf()), p = _.useRef(null), m = _.useRef(null), w = _.useRef(0), [b, v] = _.useState("tyhja"), [g, C] = _.useState(kk), M = gk[g], [A, S] = _.useState(!1), [N, V] = _.useState(!0), [T, U] = _.useState(!0), [z, B] = _.useState(!1), [D, $] = _.useState(!1), [I, se] = _.useState(!1), [X, we] = _.useState(Kp), [Ce] = _.useState(() => iv()), Q = _.useRef(null), [de, G] = _.useState(""), [oe, re] = _.useState(0), [W, ae] = _.useState(0), [te, x] = _.useState("");
  function y(O = !1, le, ye) {
    const Me = a.current;
    if (Me)
      for (const ve of [o.current, c.current])
        ve && (!le || ve === le) && f.current.align(Me, ve, O, void 0, ye);
  }
  function ne() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, N],
      ["vocals", c.current, T]
    ];
  }
  function ue(O = X, le) {
    if (Fn) {
      const ye = m.current?.player;
      if (ye) for (const [Me, , ve] of ne()) ye.setLevel(Me, jo(Me, O, le?.[Me] ?? ve));
      return;
    }
    for (const [ye, Me, ve] of ne()) {
      if (!Me) continue;
      const Ie = jo(ye, O, le?.[ye] ?? ve);
      if (Ce === "webaudio" && Q.current?.routed(Me))
        Q.current.setLevel(Me, Ie);
      else
        try {
          Me.volume = jo(ye, O);
        } catch {
        }
    }
  }
  function Ee(O) {
    we(O), Up(O), ue(O);
  }
  function H() {
    if (Fn) {
      const O = m.current?.player;
      O?.playing && re(O.pause());
    }
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), S(!1);
  }
  function K() {
    w.current++, m.current?.player.dispose(), m.current?.context.close().catch(() => {
    }), m.current = null, delete window.__kappaleD1;
  }
  function ee(O) {
    K();
    try {
      sessionStorage.setItem(Ao, String(window.scrollY));
    } catch {
    }
    location.replace(O.pathname + O.search + O.hash);
  }
  function Z() {
    if (!Po) {
      s();
      return;
    }
    const O = new URL(location.href);
    O.searchParams.delete("kappale"), O.searchParams.delete("polku"), ee(O);
  }
  function me(O) {
    if (O !== g) {
      if (Po) {
        iu = O;
        const le = new URL(location.href);
        le.searchParams.set("kappale", ah(O)), ee(le);
        return;
      }
      Fn && (w.current++, m.current?.player.release()), p.current = null, H();
      for (const le of [a.current, o.current, c.current])
        if (le)
          try {
            le.currentTime = 0;
          } catch {
          }
      re(0), ae(0), x(""), C(O), yk(O);
    }
  }
  function Te(O) {
    if (Fn) {
      const Me = m.current?.player, ve = Math.max(0, Math.min(O, W > 0 ? W : O));
      re(ve), Me?.state === "valmis" ? Me.seek(ve) : p.current = ve;
      return;
    }
    const le = a.current;
    if (!le || !Number.isFinite(O)) return;
    const ye = Math.max(0, Math.min(O, Number.isFinite(le.duration) ? le.duration : O));
    p.current = ye, re(ye), Sf(le, ye);
  }
  function pe(O) {
    const le = p.current;
    if (le === null || O !== a.current || O.seeking) return;
    const ye = Number.isFinite(O.duration) ? Math.min(le, O.duration) : le;
    if (ye !== le && (p.current = ye, re(ye)), Math.abs(O.currentTime - ye) < jf) return;
    const Me = O.seekable;
    for (let ve = 0; ve < Me.length; ve++)
      if (Me.start(ve) <= ye && ye <= Me.end(ve)) {
        Sf(O, ye);
        return;
      }
  }
  function je(O) {
    if (O !== a.current) return;
    const le = p.current;
    if (le === null)
      re(O.currentTime);
    else if (O.readyState >= 1 && !O.seeking && Math.abs(O.currentTime - le) < jf) {
      p.current = null, y(!0);
      return;
    }
    O.paused || y();
  }
  function Ne() {
    if (m.current) return m.current;
    try {
      const O = vk(), le = new pk(O);
      return le.onStateChange = v, le.onEnded = () => {
        S(!1), re(le.duration);
      }, O.onstatechange = () => {
        O.state !== "running" && le.playing && (re(le.pause()), S(!1));
      }, m.current = { context: O, player: le }, window.__kappaleD1 = { context: O, player: le }, m.current;
    } catch (O) {
      return x("Web Audio ei ole käytettävissä tässä selaimessa. " + (O instanceof Error ? O.message : "")), null;
    }
  }
  async function $e() {
    const O = Ne();
    if (!O) return;
    const { context: le, player: ye } = O;
    if (A) {
      re(ye.pause()), S(!1);
      return;
    }
    if (ye.state === "ladataan" || ye.state === "puretaan") {
      w.current++, ye.cancel();
      return;
    }
    const Me = le.state === "running" ? Promise.resolve() : le.resume();
    x("");
    const ve = ++w.current;
    if (ye.state !== "valmis") {
      const ze = await ye.load({ backing: M.backing, guitar: M.guitar, vocals: M.vocals });
      if (ve !== w.current) return;
      if (ze === "virhe") {
        x("Kappaleen lataus epäonnistui. Tarkista yhteys ja paina Soita uudelleen.");
        return;
      }
      if (ze !== "valmis") return;
      ae(ye.duration);
    }
    try {
      await Me;
    } catch {
    }
    if (ve !== w.current) return;
    if (le.state !== "running") {
      x(`Ääni ei käynnistynyt (Web Audio: ${le.state}). Paina Soita uudelleen.`);
      return;
    }
    ue(), ye.setLoop(z), p.current !== null && (ye.seek(p.current), p.current = null);
    let Ie = ye.position();
    if (Ie >= ye.duration - 0.05 && (Ie = 0), !ye.play(Ie)) {
      x("Toisto epäonnistui. Paina Soita uudelleen.");
      return;
    }
    re(Ie), S(!0);
  }
  async function _e() {
    if (Fn) {
      await $e();
      return;
    }
    const O = a.current, le = o.current, ye = c.current;
    if (!O || !le || !ye) return;
    if (A) {
      H();
      return;
    }
    x("");
    const Me = p.current ?? O.currentTime;
    if (Number.isFinite(O.duration) && Me >= O.duration - 0.05 && Te(0), pe(O), Ce === "webaudio") {
      const ze = Q.current ??= new av(), St = ze.unlock() && [O, le, ye].map((vt) => ze.route(vt)).every(Boolean);
      G(St ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + ze.lastError);
    }
    ue(), le.muted = !N, ye.muted = !T, y(!0, void 0, Gp);
    const ve = ++d.current;
    N || le.pause(), T || ye.pause();
    const Ie = [O, ...N ? [le] : [], ...T ? [ye] : []];
    if (!Gf(Ie)) {
      Yp(Ie);
      const ze = await Qp(Ie, Wp, () => ve !== d.current);
      if (ze === "ohitettu" || ve !== d.current) return;
      if (ze === "virhe") {
        H(), x("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
        return;
      }
    }
    try {
      if (f.current.hold(performance.now() + Qd), await Promise.all(Ie.map((ze) => ze.play())), ve !== d.current) return;
      if (f.current.hold(performance.now() + Qd), y(), S(!0), Ce === "webaudio" && Q.current?.routed(O)) {
        const ze = Q.current;
        setTimeout(() => {
          ve === d.current && ze.state !== "running" && x(`Ääni ei käynnistynyt (Web Audio: ${ze.state}). Pysäytä ja soita uudelleen.${ze.lastError ? " " + ze.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (ve !== d.current) return;
      H(), x("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function Ve(O, le, ye) {
    if (!O) return;
    if (O.muted = !le, !le) {
      O.pause();
      return;
    }
    !a.current || !A || (y(!0, O), O.play().catch(() => x(ye + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function tt(O) {
    V(O), ue(X, { guitar: O }), Ve(o.current, O, "Kitararaita");
  }
  function Je(O) {
    U(O), ue(X, { vocals: O }), Ve(c.current, O, "Lauluraita");
  }
  return _.useEffect(() => {
    const O = () => {
      document.hidden && H();
    };
    return document.addEventListener("visibilitychange", O), () => {
      document.removeEventListener("visibilitychange", O), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), Q.current?.close(), K(), window.removeEventListener("pagehide", K);
    };
  }, []), _.useEffect(() => {
    if (Po) {
      window.addEventListener("pagehide", K);
      try {
        const O = Number(sessionStorage.getItem(Ao));
        sessionStorage.removeItem(Ao), O > 0 && window.scrollTo(0, O);
      } catch {
      }
      return () => window.removeEventListener("pagehide", K);
    }
  }, []), _.useEffect(() => {
    ue();
  }, [g]), _.useEffect(() => {
    m.current?.player.setLoop(z);
  }, [z]), _.useEffect(() => {
    if (!Fn || !A) return;
    let O = 0, le = "", ye = 0;
    const Me = () => {
      const ve = m.current?.player;
      if (ve?.playing) {
        const Ie = ve.audiblePosition(), ze = nu(Ie, g), St = `${ze.sectionIndex}:${ze.barIndex}:${ze.beat}`, vt = performance.now();
        (St !== le || vt - ye > 250) && (le = St, ye = vt, re(Ie));
      }
      O = requestAnimationFrame(Me);
    };
    return O = requestAnimationFrame(Me), () => cancelAnimationFrame(O);
  }, [A, g]), /* @__PURE__ */ r.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: Z, children: "← Oppimispolut" }),
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
          onChange: (O) => me(O.target.value),
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
          _e();
        }, children: A ? "■ Tauko" : b === "ladataan" || b === "puretaan" ? "■ Peruuta lataus" : "▶ Soita kappale" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: W > 0 ? W : 1,
            step: 0.1,
            value: Math.min(oe, W > 0 ? W : 1),
            disabled: W <= 0,
            onChange: (O) => Te(Number(O.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          wf(oe),
          " / ",
          wf(W)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: N,
              onChange: (O) => tt(O.target.checked)
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
              onChange: (O) => Je(O.target.checked)
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
              onChange: (O) => B(O.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": Ce, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            X > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            X > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: X,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": X + " %",
              onChange: (O) => Ee(Number(O.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            X,
            " %"
          ] })
        ] })
      ] }),
      de && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: de }),
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
      Fn && (b === "ladataan" || b === "puretaan") && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: b === "ladataan" ? "Ladataan kappaleen raitoja…" : "Valmistellaan raitoja soittoa varten…" }),
      !Fn && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(
          "audio",
          {
            ref: a,
            src: M.backing,
            preload: "metadata",
            loop: z,
            onLoadedMetadata: (O) => {
              O.currentTarget === a.current && (ae(O.currentTarget.duration), pe(O.currentTarget));
            },
            onProgress: (O) => pe(O.currentTarget),
            onCanPlay: (O) => pe(O.currentTarget),
            onTimeUpdate: (O) => je(O.currentTarget),
            onEnded: (O) => {
              O.currentTarget !== a.current || O.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), S(!1), re(O.currentTarget.duration));
            },
            onPause: (O) => {
              O.currentTarget === a.current && S(!1);
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
      /* @__PURE__ */ r.jsx("summary", { onClick: (O) => {
        O.preventDefault(), $((le) => !le);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(ok, { version: g, position: oe, loop: z, onSeek: Te })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: I, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (O) => {
        O.preventDefault(), se((le) => !le);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(fk, { open: I })
    ] })
  ] });
}
const Go = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, Ca = (s, a = 1) => s.toFixed(a).replace(".", ",").replace("-", "−"), uh = (s) => {
  const a = Math.round(s);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Wo = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function jk(s, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Wo(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function ch({ frame: s, threshold: a }) {
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
        /* @__PURE__ */ r.jsx("div", { className: "meter-fill", style: { width: `${ef(o) * 100}%` } }),
        /* @__PURE__ */ r.jsx("div", { className: "meter-threshold", style: { left: `${ef(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Sk({ mic: s, frame: a, heard: o, s: c, now: d }) {
  const f = Xf(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Fe(p.midi, c.flats, !0)} · ${uh(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Go[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(ch, { frame: a, threshold: c.minRms })
  ] });
}
function wk({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: w, calibrating: b, calibration: v, onTest: g, onStop: C, onCalibrate: M }) {
  const A = _.useId(), S = Xf(s.phase, a), N = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", V = s.phase === "on", T = o && d - o.at < 1500 ? o : null, U = T && (S === "pitch" || S === "untuned"), z = V && (a?.peak ?? 0) >= 0.98, B = s.phase === "error" ? [] : jk(S, f, s.info, z), D = !f.device || m.some((I) => I.deviceId === f.device), $ = (I, se) => p({ ...f, [I]: se });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${A}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${A}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${S}`, "data-testid": "mic-state", "data-reading": S, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : Go[S],
      S === "pitch" && T ? ` ${Fe(T.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Wo(s.info)}.` : s.phase === "error" ? s.error : Go[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    V && /* @__PURE__ */ r.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ r.jsxs("dd", { "data-testid": "mic-device", children: [
          Wo(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ r.jsxs("dd", { children: [
          /* @__PURE__ */ r.jsx(ch, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Ca(Math.max(-60, ur(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: T ? Fe(T.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: T ? `${Ca(T.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: T ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          uh(T.cents),
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
      Fe(c.midi, f.flats, !0),
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
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${A}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${A}-device`, value: f.device, onChange: (I) => $("device", I.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !D && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((I, se) => /* @__PURE__ */ r.jsx("option", { value: I.deviceId, children: I.label || `Äänitulo ${se + 1}` }, I.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${A}-rms`, children: [
              "Äänikynnys · ",
              Ca(ur(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${A}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (I) => $("minRms", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${A}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${A}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (I) => $("clarity", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${A}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${A}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (I) => $("stability", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${A}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${A}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (I) => $("cents", Number(I.target.value)) })
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
const Nk = (s) => s.mode === "scale" ? He.scaleNotes(He.SCALES[s.scale]) : Ti[s.mode === "caged" ? "maj" : s.chord].tones, Nf = (s, a) => Nk(s).find(([o]) => o === a)?.[1], dh = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Ek = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function Ck(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Tk(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${es(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : dh(s) ? `Oikein! ${a.degree}. aste on ${es(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${Fe(a.reference, s.flats, !0)} → ${a.name} on ${ts[a.interval]} ${Ek(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${Fe(d.midi, s.flats)} on ${Tf[d.string]}: ${Mi(d.fret)}.` : `Oikein! Soitit sävelen ${Fe(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function Mk(s, a, o, c, d) {
  if (o === "note") return `Ei ${Fe(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${Nf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ye(d.midi) === Ye(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${Zt[d.string]}-kieli. Etsi sävel ${Jo[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Fe(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (dh(s)) {
    const p = Ye(d.midi - s.root), m = Nf(s, p), w = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${es(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Fe(d.midi, s.flats)}, joka ei kuulu ${w}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Fe(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function _k(s, a, o) {
  const c = Fe(o, s.flats, !0);
  return Ye(o) === Ye(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function fh(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => Zt[p] ? `${Zt[p]}-kieli, ${Mi(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Fe(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Fe(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && ts[c(1)] ? `${ts[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ti[p]) return null;
      const m = Ti[p].tones.find(([w]) => w === c(3))?.[1];
      return m ? `${Mf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = He.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const w = He.scaleNotes(p).find(([b]) => b === c(3))?.[1];
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
function Ef(s) {
  return Object.entries(s).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Yo = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", bk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Pk(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${rr(s.mode)}${s.hints ? ` · ${Pa[s.hints].title}` : ""} · ${a} · keskimäärin ${Yo(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function Ak({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = _.useState(""), p = _.useRef(null), { recent: m, sessions: w, stats: b } = s.data, v = _i(a), g = bf(a), C = [...new Set(m.map((T) => T.mode))].map((T) => {
    const U = m.filter((z) => z.mode === T);
    return { mode: T, ...$o(U), last: Math.max(...U.map((z) => z.at)) };
  }).sort((T, U) => U.last - T.last), M = Ef(b).filter((T) => !T.guided && T.mode === a.mode && T.input === v && T.check === g && T.stat.attempts >= 3).map((T) => ({ ...T, score: Xo(T.stat), text: fh(T.item, a.flats) })).filter((T) => T.text && T.score < 0.8).sort((T, U) => T.score - U.score).slice(0, 5), A = Ef(b).reduce((T, U) => T + U.stat.attempts, 0);
  function S() {
    const T = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(T), z = document.createElement("a");
    z.href = U, z.download = "musiikin-kartta-harjoittelu.json", z.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function N(T) {
    if (T)
      try {
        const U = await T.text();
        if (A && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
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
    A === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        A,
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
          /* @__PURE__ */ r.jsx("td", { children: Yo(T.ms / T.count) })
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
        Yo(is(T.stat))
      ] }, T.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: A ? `Harjoituksessa ${rr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        bk[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ r.jsx(Tp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: b, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      w.length ? /* @__PURE__ */ r.jsx("ul", { children: w.slice(-10).reverse().map((T) => /* @__PURE__ */ r.jsx("li", { children: Pk(T) }, T.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
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
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !A, onClick: V, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ r.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ r.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function Lk() {
  try {
    return new Bd(localStorage);
  } catch {
    return new Bd();
  }
}
const Cf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), Rk = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", Ok = [0, 2, 4, 5, 7, 9, 11];
function $k(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Fk() {
  const [s] = _.useState(Lk), [a, o] = _.useState(() => mp(location.search, s.data.settings)), [, c] = _.useReducer((L) => L + 1, 0), d = _.useRef(null), f = _.useRef(new Tv()), p = _.useRef(new as()), m = _.useRef(0), w = _.useRef(), b = _.useRef(), v = _.useRef(null), g = _.useRef(0), C = _.useRef(null), M = _.useRef(a);
  M.current = a;
  const [A, S] = _.useState({ phase: "off", purpose: "none" }), N = _.useRef(A), V = (L) => {
    N.current = L, S(L);
  }, [T, U] = _.useState(null), [z, B] = _.useState(null), [D, $] = _.useState(null), [I, se] = _.useState(0), [X, we] = _.useState([]), [Ce, Q] = _.useState(!1), [de, G] = _.useState(!1), [oe, re] = _.useState(""), [W, ae] = _.useState("info"), [te, x] = _.useState(""), [y, ne] = _.useState(0), [ue, Ee] = _.useState([]), [H, K] = _.useState([]), [ee, Z] = _.useState(null), [me, Te] = _.useState(!1), [pe, je] = _.useState(""), [Ne, $e] = _.useState(""), [_e, Ve] = _.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.has("tila") || L.has("vanha") ? "legacy" : sh(L.get("kappale")) ? "songs" : Ip(L.get("polku"));
  }), [tt, Je] = _.useState(() => {
    const L = new URLSearchParams(location.search);
    return L.get("polku") === "otelauta" && L.get("harjoitus") === "savelten-etsinta";
  });
  function O() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), Je(!0);
  }
  function le() {
    const L = new URL(location.href);
    L.searchParams.set("polku", "otelauta"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash), Je(!1);
  }
  function ye() {
    Ve(null), Je(!1);
    const L = new URL(location.href);
    L.searchParams.delete("polku"), L.searchParams.delete("harjoitus"), history.replaceState(history.state, "", L.pathname + L.search + L.hash);
  }
  const Me = () => {
    dv().then(we).catch(() => {
    });
  };
  function ve() {
    clearTimeout(b.current), v.current = null, Te(!1);
  }
  function Ie() {
    U(null), B(null), $(null);
  }
  function ze() {
    f.current.stop(), ve(), V({ phase: "off", purpose: "none" }), Ie();
  }
  async function St(L) {
    if (f.current.active && N.current.phase === "on")
      return ve(), V({ ...N.current, purpose: L }), f.current.rearm(), !0;
    V({ phase: "requesting", purpose: L }), Ie();
    try {
      const fe = await f.current.start(M.current.device, {
        ...Cf(M.current),
        onFrame: (Ge) => Lt.current.frame(Ge),
        onStableNote: (Ge) => Lt.current.stable(Ge)
      }, () => Lt.current.lost());
      return fe ? (V({ phase: "on", purpose: L, info: fe }), Me(), !0) : !1;
    } catch (fe) {
      return V({ phase: "error", purpose: "none", error: Cv(fe) }), !1;
    }
  }
  function vt(L) {
    v.current?.push(L.rms);
    const fe = performance.now();
    fe - g.current < 66 || (g.current = fe, U(L), se(fe), L.midi !== void 0 && L.frequency !== void 0 && B({ midi: L.midi, frequency: L.frequency, cents: L.cents ?? 0, clarity: L.clarity ?? 0, tuned: L.status === "pitch", at: fe }));
  }
  function qt(L) {
    N.current.purpose === "test" ? $(L) : N.current.purpose === "round" && Rt(L.midi, "mic", void 0, L.heldMs);
  }
  function Gt() {
    const L = N.current.purpose === "round";
    ve(), Ie(), V({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const fe = d.current;
    L && fe && ["active", "feedback", "paused"].includes(fe.phase) && (Re(), G(!1), fe.pause(), x("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Lt = _.useRef({ frame: vt, stable: qt, lost: Gt });
  Lt.current = { frame: vt, stable: qt, lost: Gt };
  function yn(L) {
    const fe = Ta(L), Ge = fe.device !== M.current.device;
    M.current = fe, o(fe), s.settings(fe), x(""), f.current.active && (Ge && N.current.purpose === "test" ? (ze(), St("test")) : f.current.setOptions(Cf(fe)));
  }
  function be(L) {
    $e(""), d.current = null, Je(!1), Ve(L);
  }
  function ln() {
    je(""), St("test");
  }
  function Le() {
    N.current.phase !== "on" || N.current.purpose !== "test" || (ve(), v.current = [], Te(!0), je("Mitataan taustakohinaa kolme sekuntia. Älä soita."), b.current = setTimeout(() => {
      const L = v.current ?? [];
      if (ve(), L.length < 10) {
        je("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: fe, noise: Ge, loud: Wt } = Mv(L);
      yn({ ...M.current, minRms: fe }), je(`Taustakohina on ${Math.round(ur(Ge))} dB ja äänikynnys nyt ${Math.round(ur(fe))} dB. ${Wt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Re() {
    m.current++, clearTimeout(w.current), p.current.stop();
  }
  function De(L, fe) {
    if (!L.results.length) return;
    const Ge = $o(L.results);
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
      complete: fe
    });
  }
  async function Ze(L) {
    if (!L.question?.sound.length || L.phase !== "active") return;
    Re();
    const fe = m.current;
    L.pause(), f.current.pause(), G(!0), ae("info"), re("Kuuntele…"), c();
    try {
      await p.current.play(L.question.sound);
    } catch {
      fe === m.current && x("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    fe !== m.current || d.current !== L || (L.resume(), f.current.resume(), G(!1), re(""), c());
  }
  async function lt(L) {
    Ee([]), K([]), Z(null), x(""), ne(L.hintLevel), f.current.rearm(), ae("info"), re(""), c(), L.question?.sound.length && await Ze(L);
  }
  async function on() {
    const L = M.current, fe = Ro(L);
    if (fe) {
      x(fe);
      return;
    }
    Re();
    const Ge = m.current;
    if (x(""), je(""), $e(""), ya(L)) {
      Q(!0);
      const ut = await St("round");
      if (Ge !== m.current) return;
      if (Q(!1), !ut) {
        x("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else N.current.phase !== "off" && ze();
    const Wt = new Fp(L, () => s.data.stats, (ut) => s.record(ut));
    try {
      Wt.start();
    } catch (ut) {
      N.current.purpose === "round" && ze(), x(ut instanceof Error ? ut.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Wt, requestAnimationFrame(() => C.current?.scrollIntoView({ block: "start", behavior: "auto" })), await lt(Wt);
  }
  function wt() {
    Re(), Q(!1), ze();
  }
  function Rt(L, fe, Ge, Wt = 0) {
    const ut = d.current, Ot = ut?.question;
    if (!ut || !Ot || ut.phase !== "active") return;
    const pr = ut.answer(L, fe, Ge, Wt);
    if (pr !== "ignored") {
      if (pr === "candidate")
        Z(L), ae("bad"), re(_k(ut.settings, Ot, L));
      else if (pr === "wrong")
        Ge ? Ee((Et) => [...Et, Ge]) : K((Et) => [...Et, L]), ae("bad"), re(Mk(ut.settings, Ot, fe, L, Ge));
      else if (Z(null), ae("good"), re(Tk(ut.settings, Ot, fe, L, Ge)), De(ut, !1), ut.settings.advance) {
        const Et = m.current;
        w.current = setTimeout(() => {
          Et === m.current && Cn();
        }, fe === "mic" ? 1800 : 1400);
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
      } catch (fe) {
        un(!1), x(fe instanceof Error ? fe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (L.phase === "done") {
        un(!0);
        return;
      }
      await lt(L);
    }
  }
  function un(L = !1) {
    Re(), G(!1), Q(!1), (N.current.purpose === "round" || N.current.phase === "requesting") && ze();
    const fe = d.current;
    fe && (fe.stop(), De(fe, L)), Z(null), ne(0), Ee([]), K([]), x(""), $e(L ? "complete" : "stopped"), ae("info"), re(""), c();
  }
  function Tn() {
    const L = d.current;
    if (!L || !["active", "feedback", "paused"].includes(L.phase)) return;
    Re(), G(!1), L.pause();
    const fe = N.current.purpose === "round";
    fe && ze(), ae("info"), re(`Harjoitus on tauolla.${fe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function ls() {
    const L = d.current;
    if (!L || L.phase !== "paused" || de) return;
    Re();
    const fe = m.current;
    if (x(""), ya(L.settings)) {
      Q(!0);
      const Ge = await St("round");
      if (fe !== m.current) return;
      if (Q(!1), !Ge) {
        x("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    L.resume(), ae("info"), re(""), c(), L.phase === "active" && (f.current.rearm(), L.question?.sound.length && await Ze(L));
  }
  function fr(L) {
    const fe = d.current;
    !fe || fe.phase !== "active" || (fe.useHint(L), ne(L), c());
  }
  const di = _.useRef({ hidden: () => {
  }, restored: () => {
  } });
  di.current = {
    hidden: () => {
      const L = d.current;
      L && ["active", "feedback"].includes(L.phase) || de ? Tn() : N.current.phase !== "off" && N.current.phase !== "error" && (Re(), Q(!1), ze());
    },
    restored: () => {
      Q(!1), G(!1), V({ phase: "off", purpose: "none" }), Ie(), c();
    }
  }, _.useEffect(() => {
    Me();
    const L = () => Me();
    navigator.mediaDevices?.addEventListener?.("devicechange", L);
    const fe = () => {
      m.current++, clearTimeout(w.current), clearTimeout(b.current), f.current.stop(), p.current.stop(), Ev(), d.current?.pause();
    }, Ge = () => {
      document.hidden && di.current.hidden();
    }, Wt = (ut) => {
      ut.persisted && di.current.restored();
    };
    return document.addEventListener("visibilitychange", Ge), window.addEventListener("pagehide", fe), window.addEventListener("pageshow", Wt), () => {
      fe(), navigator.mediaDevices?.removeEventListener?.("devicechange", L), document.removeEventListener("visibilitychange", Ge), window.removeEventListener("pagehide", fe), window.removeEventListener("pageshow", Wt);
    };
  }, []);
  const Pi = _.useRef(null), fi = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${de}`;
  _.useEffect(() => {
    const L = d.current, fe = C.current, Ge = document.activeElement;
    !L || !fe || !(Ge === document.body || fe.contains(Ge)) || (L.phase === "feedback" ? Pi.current?.focus({ preventScroll: !0 }) : L.phase === "active" && !de && (Ge === document.body || Ge === Pi.current) && fe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [fi]);
  const Ke = d.current, et = !!Ke && ["active", "paused", "feedback"].includes(Ke.phase), it = et ? Ke.settings : a, ht = et ? Ke.question : void 0, Dt = !!ht && !!Ke?.answered, cn = et && Ke.phase === "paused" && !de && !Dt, Dn = et && Ke.phase === "active" && !de, hr = et ? null : Ro(a), mr = et || Ce, os = bi(it), Mn = _p(it), zn = ht && !Dt ? y : 0, Ai = ht ? $p(it, ht, Dt ? 2 : zn) : { marks: [], text: "" }, us = [...new Map([...Ai.marks, ...Dt ? [] : ue.map((L) => ({ ...L, label: Fe(L.midi, it.flats), kind: "wrong" }))].map((L) => [Xe(L), L])).values()], cs = et && ya(it), ds = !!ht && !cn && (ht.choices === "position" || us.length > 0), Nt = Ke ? $o(Ke.results) : null, fs = !Ke || it.hints !== "fade" ? "" : Ke.index <= 3 ? " · vastaus näkyy" : Ke.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hs = Ke && !et ? Ke.results.filter((L) => L.errors > 0 || L.hint) : [], [Ra, ot] = $k(it), Bn = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
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
  return !et && _e === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Bn,
    gn,
    /* @__PURE__ */ r.jsx(zp, { onSelect: be })
  ] }) : !et && _e === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Bn,
    gn,
    /* @__PURE__ */ r.jsx(Uv, { onBack: ye })
  ] }) : !et && _e === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Bn,
    gn,
    tt ? /* @__PURE__ */ r.jsx(Hv, { onBack: le }) : /* @__PURE__ */ r.jsx(Bp, { onBack: ye, onNotes: O })
  ] }) : !et && _e === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Bn,
    gn,
    /* @__PURE__ */ r.jsx(Yv, { onBack: ye })
  ] }) : !et && _e === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Bn,
    gn,
    /* @__PURE__ */ r.jsx(xk, { onBack: ye })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Bn,
    gn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: Ra, children: [
      "Lue tämän harjoituksen teoria: ",
      ot,
      " →"
    ] }) }),
    _e !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && un(), ye();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: _e === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: _e === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: rr(it.mode) }),
      " · ",
      Hd(it)
    ] }) : _e === "legacy" ? /* @__PURE__ */ r.jsx(Gd, { s: a, change: yn, locked: mr, problem: hr }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Gd, { s: a, change: yn, locked: mr, problem: hr })
    ] }),
    !et && (_e === "legacy" || ya(a)) && /* @__PURE__ */ r.jsx(
      wk,
      {
        mic: A,
        frame: T,
        heard: z,
        accepted: D,
        now: I,
        s: a,
        change: yn,
        devices: X,
        locked: Ce,
        calibrating: me,
        calibration: pe,
        onTest: ln,
        onStop: ze,
        onCalibrate: Le
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: C, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: rr(it.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Ke.index}${Ke.total ? " / " + Ke.total : " · vapaa harjoittelu"} · ${Pa[it.hints].title}${fs}${Ke.phase === "paused" && !de ? " · tauolla" : ""}` : Ne === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        Ke && Ke.results.length > 0 && Nt ? /* @__PURE__ */ r.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ r.jsx("h3", { children: Ne === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ r.jsxs("dl", { children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-solo", children: Nt.solo ? `${Nt.soloFirst} / ${Nt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ r.jsx("dd", { "data-testid": "summary-guided", children: Nt.guided })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ r.jsx("dd", { children: Rk(Nt.ms / Nt.count) })
            ] })
          ] }),
          Nt.solo === 0 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          hs.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(hs.map((L) => fh(L.item, a.flats)).filter(Boolean))].slice(0, 6).map((L) => /* @__PURE__ */ r.jsx("li", { children: L }, L)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: Hd(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: Ce ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: wt, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!hr, onClick: () => {
          on();
        }, children: Ke?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Ke && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ht && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: cn ? "Harjoitus on tauolla." : ht.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: cn ? "Kysymys palaa näkyviin, kun jatkat." : de ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Ck(it, ht) }),
        Ke.hintLevel > 0 && !Dt && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: it.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        cs && /* @__PURE__ */ r.jsx(Sk, { mic: A, frame: T, heard: z, s: it, now: I }),
        ht.choices === "note" && !cn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (it.accidentals ? Array.from({ length: 12 }, (L, fe) => fe) : Ok).map((L) => /* @__PURE__ */ r.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Dt && L === ht.midi % 12 ? "right" : "", disabled: !Dn || H.includes(L), onClick: () => Rt(L, "note"), children: Fe(L, it.flats) }, L)) }),
        ht.choices === "degree" && !cn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (it.mode === "scale" ? He.scaleNotes(He.SCALES[it.scale]) : Ti[it.chord].tones).map(([L, fe]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: H.includes(L) ? "wrong" : Dt && L === ht.interval ? "right" : "", disabled: !Dn || H.includes(L), onClick: () => Rt(L, "degree"), children: fe }, L)) }),
        ds && /* @__PURE__ */ r.jsx(
          ui,
          {
            area: Mn,
            marks: us,
            disabled: !Dn || ht.choices !== "position" || it.input === "mic",
            onAnswer: (L) => Rt(L.midi, "board", L),
            caption: os.fixed === "shape" ? `${it.shape}-muodon alue` : os.fixed === "box" ? `Boksin ${it.box} alue` : "Otelauta"
          }
        ),
        !Dt && !cn && zn > 0 && Ai.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: Ai.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: oe }),
        ee !== null && Ke.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Ke.confirmWrong(), Z(null), re("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        te && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: te }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          Ke.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: Pi, onClick: () => {
            Cn();
          }, children: Ke.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Ke.phase === "active" && !Dt && !de && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            zn === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => fr(Math.max(1, Ke.hintLevel)), children: Ke.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            zn === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => fr(2), children: "Näytä vastaus" }),
            zn > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(0), children: "Piilota vihje" })
          ] }),
          ht.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !Dn, onClick: () => {
            Ze(Ke);
          }, children: "Kuuntele uudelleen" }),
          Ke.phase === "paused" && !de ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: Ce, onClick: () => {
            ls();
          }, children: Ce ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Tn, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => un(), children: "Lopeta harjoitus" })
        ] }),
        Ke.phase === "feedback" && it.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: Nt?.count ? `Vastattu ${Nt.count} · itsenäisesti heti oikein ${Nt.soloFirst}/${Nt.solo}${Nt.guided ? ` · vihjeen kanssa ${Nt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && te && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: te })
    ] }),
    !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(He.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: pp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(Ak, { store: s, s: a, locked: mr, changed: () => {
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
ap.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ r.jsx(Fk, {}));
//# sourceMappingURL=app.js.map
