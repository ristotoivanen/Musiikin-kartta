function Im(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var fo = { exports: {} }, Qr = {}, ho = { exports: {} }, Le = {};
var gd;
function Dm() {
  if (gd) return Le;
  gd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), T = Symbol.iterator;
  function _(v) {
    return v === null || typeof v != "object" ? null : (v = T && v[T] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, S = {};
  function w(v, E, ie) {
    this.props = v, this.context = E, this.refs = S, this.updater = ie || O;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(v, E) {
    if (typeof v != "object" && typeof v != "function" && v != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, v, E, "setState");
  }, w.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function V() {
  }
  V.prototype = w.prototype;
  function N(v, E, ie) {
    this.props = v, this.context = E, this.refs = S, this.updater = ie || O;
  }
  var F = N.prototype = new V();
  F.constructor = N, L(F, w.prototype), F.isPureReactComponent = !0;
  var z = Array.isArray, G = Object.prototype.hasOwnProperty, B = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(v, E, ie) {
    var je, Se = {}, U = null, K = null;
    if (E != null) for (je in E.ref !== void 0 && (K = E.ref), E.key !== void 0 && (U = "" + E.key), E) G.call(E, je) && !M.hasOwnProperty(je) && (Se[je] = E[je]);
    var ee = arguments.length - 2;
    if (ee === 1) Se.children = ie;
    else if (1 < ee) {
      for (var C = Array(ee), X = 0; X < ee; X++) C[X] = arguments[X + 2];
      Se.children = C;
    }
    if (v && v.defaultProps) for (je in ee = v.defaultProps, ee) Se[je] === void 0 && (Se[je] = ee[je]);
    return { $$typeof: s, type: v, key: U, ref: K, props: Se, _owner: B.current };
  }
  function ne(v, E) {
    return { $$typeof: s, type: v.type, key: E, ref: v.ref, props: v.props, _owner: v._owner };
  }
  function re(v) {
    return typeof v == "object" && v !== null && v.$$typeof === s;
  }
  function ye(v) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(ie) {
      return E[ie];
    });
  }
  var we = /\/+/g;
  function J(v, E) {
    return typeof v == "object" && v !== null && v.key != null ? ye("" + v.key) : E.toString(36);
  }
  function he(v, E, ie, je, Se) {
    var U = typeof v;
    (U === "undefined" || U === "boolean") && (v = null);
    var K = !1;
    if (v === null) K = !0;
    else switch (U) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (v.$$typeof) {
          case s:
          case a:
            K = !0;
        }
    }
    if (K) return K = v, Se = Se(K), v = je === "" ? "." + J(K, 0) : je, z(Se) ? (ie = "", v != null && (ie = v.replace(we, "$&/") + "/"), he(Se, E, ie, "", function(X) {
      return X;
    })) : Se != null && (re(Se) && (Se = ne(Se, ie + (!Se.key || K && K.key === Se.key ? "" : ("" + Se.key).replace(we, "$&/") + "/") + v)), E.push(Se)), 1;
    if (K = 0, je = je === "" ? "." : je + ":", z(v)) for (var ee = 0; ee < v.length; ee++) {
      U = v[ee];
      var C = je + J(U, ee);
      K += he(U, E, ie, C, Se);
    }
    else if (C = _(v), typeof C == "function") for (v = C.call(v), ee = 0; !(U = v.next()).done; ) U = U.value, C = je + J(U, ee++), K += he(U, E, ie, C, Se);
    else if (U === "object") throw E = String(v), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function H(v, E, ie) {
    if (v == null) return v;
    var je = [], Se = 0;
    return he(v, je, "", "", function(U) {
      return E.call(ie, U, Se++);
    }), je;
  }
  function le(v) {
    if (v._status === -1) {
      var E = v._result;
      E = E(), E.then(function(ie) {
        (v._status === 0 || v._status === -1) && (v._status = 1, v._result = ie);
      }, function(ie) {
        (v._status === 0 || v._status === -1) && (v._status = 2, v._result = ie);
      }), v._status === -1 && (v._status = 0, v._result = E);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var ce = { current: null }, W = { transition: null }, ae = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: W, ReactCurrentOwner: B };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: H, forEach: function(v, E, ie) {
    H(v, function() {
      E.apply(this, arguments);
    }, ie);
  }, count: function(v) {
    var E = 0;
    return H(v, function() {
      E++;
    }), E;
  }, toArray: function(v) {
    return H(v, function(E) {
      return E;
    }) || [];
  }, only: function(v) {
    if (!re(v)) throw Error("React.Children.only expected to receive a single React element child.");
    return v;
  } }, Le.Component = w, Le.Fragment = o, Le.Profiler = d, Le.PureComponent = N, Le.StrictMode = c, Le.Suspense = j, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Le.act = q, Le.cloneElement = function(v, E, ie) {
    if (v == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + v + ".");
    var je = L({}, v.props), Se = v.key, U = v.ref, K = v._owner;
    if (E != null) {
      if (E.ref !== void 0 && (U = E.ref, K = B.current), E.key !== void 0 && (Se = "" + E.key), v.type && v.type.defaultProps) var ee = v.type.defaultProps;
      for (C in E) G.call(E, C) && !M.hasOwnProperty(C) && (je[C] = E[C] === void 0 && ee !== void 0 ? ee[C] : E[C]);
    }
    var C = arguments.length - 2;
    if (C === 1) je.children = ie;
    else if (1 < C) {
      ee = Array(C);
      for (var X = 0; X < C; X++) ee[X] = arguments[X + 2];
      je.children = ee;
    }
    return { $$typeof: s, type: v.type, key: Se, ref: U, props: je, _owner: K };
  }, Le.createContext = function(v) {
    return v = { $$typeof: p, _currentValue: v, _currentValue2: v, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, v.Provider = { $$typeof: f, _context: v }, v.Consumer = v;
  }, Le.createElement = D, Le.createFactory = function(v) {
    var E = D.bind(null, v);
    return E.type = v, E;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(v) {
    return { $$typeof: m, render: v };
  }, Le.isValidElement = re, Le.lazy = function(v) {
    return { $$typeof: k, _payload: { _status: -1, _result: v }, _init: le };
  }, Le.memo = function(v, E) {
    return { $$typeof: R, type: v, compare: E === void 0 ? null : E };
  }, Le.startTransition = function(v) {
    var E = W.transition;
    W.transition = {};
    try {
      v();
    } finally {
      W.transition = E;
    }
  }, Le.unstable_act = q, Le.useCallback = function(v, E) {
    return ce.current.useCallback(v, E);
  }, Le.useContext = function(v) {
    return ce.current.useContext(v);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(v) {
    return ce.current.useDeferredValue(v);
  }, Le.useEffect = function(v, E) {
    return ce.current.useEffect(v, E);
  }, Le.useId = function() {
    return ce.current.useId();
  }, Le.useImperativeHandle = function(v, E, ie) {
    return ce.current.useImperativeHandle(v, E, ie);
  }, Le.useInsertionEffect = function(v, E) {
    return ce.current.useInsertionEffect(v, E);
  }, Le.useLayoutEffect = function(v, E) {
    return ce.current.useLayoutEffect(v, E);
  }, Le.useMemo = function(v, E) {
    return ce.current.useMemo(v, E);
  }, Le.useReducer = function(v, E, ie) {
    return ce.current.useReducer(v, E, ie);
  }, Le.useRef = function(v) {
    return ce.current.useRef(v);
  }, Le.useState = function(v) {
    return ce.current.useState(v);
  }, Le.useSyncExternalStore = function(v, E, ie) {
    return ce.current.useSyncExternalStore(v, E, ie);
  }, Le.useTransition = function() {
    return ce.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var jd;
function Ko() {
  return jd || (jd = 1, ho.exports = Dm()), ho.exports;
}
var xd;
function zm() {
  if (xd) return Qr;
  xd = 1;
  var s = Ko(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, j, R) {
    var k, T = {}, _ = null, O = null;
    R !== void 0 && (_ = "" + R), j.key !== void 0 && (_ = "" + j.key), j.ref !== void 0 && (O = j.ref);
    for (k in j) c.call(j, k) && !f.hasOwnProperty(k) && (T[k] = j[k]);
    if (m && m.defaultProps) for (k in j = m.defaultProps, j) T[k] === void 0 && (T[k] = j[k]);
    return { $$typeof: a, type: m, key: _, ref: O, props: T, _owner: d.current };
  }
  return Qr.Fragment = o, Qr.jsx = p, Qr.jsxs = p, Qr;
}
var Sd;
function Vm() {
  return Sd || (Sd = 1, fo.exports = zm()), fo.exports;
}
var r = Vm(), P = Ko(), ma = {}, mo = { exports: {} }, zt = {}, po = { exports: {} }, vo = {};
var wd;
function Bm() {
  return wd || (wd = 1, (function(s) {
    function a(W, ae) {
      var q = W.length;
      W.push(ae);
      e: for (; 0 < q; ) {
        var v = q - 1 >>> 1, E = W[v];
        if (0 < d(E, ae)) W[v] = ae, W[q] = E, q = v;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var ae = W[0], q = W.pop();
      if (q !== ae) {
        W[0] = q;
        e: for (var v = 0, E = W.length, ie = E >>> 1; v < ie; ) {
          var je = 2 * (v + 1) - 1, Se = W[je], U = je + 1, K = W[U];
          if (0 > d(Se, q)) U < E && 0 > d(K, Se) ? (W[v] = K, W[U] = q, v = U) : (W[v] = Se, W[je] = q, v = je);
          else if (U < E && 0 > d(K, q)) W[v] = K, W[U] = q, v = U;
          else break e;
        }
      }
      return ae;
    }
    function d(W, ae) {
      var q = W.sortIndex - ae.sortIndex;
      return q !== 0 ? q : W.id - ae.id;
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
    var j = [], R = [], k = 1, T = null, _ = 3, O = !1, L = !1, S = !1, w = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function F(W) {
      for (var ae = o(R); ae !== null; ) {
        if (ae.callback === null) c(R);
        else if (ae.startTime <= W) c(R), ae.sortIndex = ae.expirationTime, a(j, ae);
        else break;
        ae = o(R);
      }
    }
    function z(W) {
      if (S = !1, F(W), !L) if (o(j) !== null) L = !0, le(G);
      else {
        var ae = o(R);
        ae !== null && ce(z, ae.startTime - W);
      }
    }
    function G(W, ae) {
      L = !1, S && (S = !1, V(D), D = -1), O = !0;
      var q = _;
      try {
        for (F(ae), T = o(j); T !== null && (!(T.expirationTime > ae) || W && !ye()); ) {
          var v = T.callback;
          if (typeof v == "function") {
            T.callback = null, _ = T.priorityLevel;
            var E = v(T.expirationTime <= ae);
            ae = s.unstable_now(), typeof E == "function" ? T.callback = E : T === o(j) && c(j), F(ae);
          } else c(j);
          T = o(j);
        }
        if (T !== null) var ie = !0;
        else {
          var je = o(R);
          je !== null && ce(z, je.startTime - ae), ie = !1;
        }
        return ie;
      } finally {
        T = null, _ = q, O = !1;
      }
    }
    var B = !1, M = null, D = -1, ne = 5, re = -1;
    function ye() {
      return !(s.unstable_now() - re < ne);
    }
    function we() {
      if (M !== null) {
        var W = s.unstable_now();
        re = W;
        var ae = !0;
        try {
          ae = M(!0, W);
        } finally {
          ae ? J() : (B = !1, M = null);
        }
      } else B = !1;
    }
    var J;
    if (typeof N == "function") J = function() {
      N(we);
    };
    else if (typeof MessageChannel < "u") {
      var he = new MessageChannel(), H = he.port2;
      he.port1.onmessage = we, J = function() {
        H.postMessage(null);
      };
    } else J = function() {
      w(we, 0);
    };
    function le(W) {
      M = W, B || (B = !0, J());
    }
    function ce(W, ae) {
      D = w(function() {
        W(s.unstable_now());
      }, ae);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, s.unstable_continueExecution = function() {
      L || O || (L = !0, le(G));
    }, s.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < W ? Math.floor(1e3 / W) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(j);
    }, s.unstable_next = function(W) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = _;
      }
      var q = _;
      _ = ae;
      try {
        return W();
      } finally {
        _ = q;
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
      var q = _;
      _ = W;
      try {
        return ae();
      } finally {
        _ = q;
      }
    }, s.unstable_scheduleCallback = function(W, ae, q) {
      var v = s.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? v + q : v) : q = v, W) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = q + E, W = { id: k++, callback: ae, priorityLevel: W, startTime: q, expirationTime: E, sortIndex: -1 }, q > v ? (W.sortIndex = q, a(R, W), o(j) === null && W === o(R) && (S ? (V(D), D = -1) : S = !0, ce(z, q - v))) : (W.sortIndex = E, a(j, W), L || O || (L = !0, le(G))), W;
    }, s.unstable_shouldYield = ye, s.unstable_wrapCallback = function(W) {
      var ae = _;
      return function() {
        var q = _;
        _ = ae;
        try {
          return W.apply(this, arguments);
        } finally {
          _ = q;
        }
      };
    };
  })(vo)), vo;
}
var Nd;
function Km() {
  return Nd || (Nd = 1, po.exports = Bm()), po.exports;
}
var Ed;
function Hm() {
  if (Ed) return zt;
  Ed = 1;
  var s = Ko(), a = Km();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, T = {};
  function _(e) {
    return j.call(T, e) ? !0 : j.call(k, e) ? !1 : R.test(e) ? T[e] = !0 : (k[e] = !0, !1);
  }
  function O(e, t, n, i) {
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
  function L(e, t, n, i) {
    if (t === null || typeof t > "u" || O(e, t, n, i)) return !0;
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
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new S(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    w[t] = new S(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new S(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new S(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new S(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new S(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      V,
      N
    );
    w[t] = new S(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(V, N);
    w[t] = new S(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(V, N);
    w[t] = new S(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function F(e, t, n, i) {
    var l = w.hasOwnProperty(t) ? w[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, n, l, i) && (n = null), i || l === null ? _(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var z = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, G = /* @__PURE__ */ Symbol.for("react.element"), B = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), D = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), re = /* @__PURE__ */ Symbol.for("react.provider"), ye = /* @__PURE__ */ Symbol.for("react.context"), we = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), he = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), ce = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, v;
  function E(e) {
    if (v === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      v = t && t[1] || "";
    }
    return `
` + v + e;
  }
  var ie = !1;
  function je(e, t) {
    if (!e || ie) return "";
    ie = !0;
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
        } catch ($) {
          var i = $;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch ($) {
          i = $;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          i = $;
        }
        e();
      }
    } catch ($) {
      if ($ && i && typeof $.stack == "string") {
        for (var l = $.stack.split(`
`), u = i.stack.split(`
`), h = l.length - 1, y = u.length - 1; 1 <= h && 0 <= y && l[h] !== u[y]; ) y--;
        for (; 1 <= h && 0 <= y; h--, y--) if (l[h] !== u[y]) {
          if (h !== 1 || y !== 1)
            do
              if (h--, y--, 0 > y || l[h] !== u[y]) {
                var g = `
` + l[h].replace(" at new ", " at ");
                return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
              }
            while (1 <= h && 0 <= y);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function Se(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = je(e.type, !1), e;
      case 11:
        return e = je(e.type.render, !1), e;
      case 1:
        return e = je(e.type, !0), e;
      default:
        return "";
    }
  }
  function U(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case B:
        return "Portal";
      case ne:
        return "Profiler";
      case D:
        return "StrictMode";
      case J:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ye:
        return (e.displayName || "Context") + ".Consumer";
      case re:
        return (e._context.displayName || "Context") + ".Provider";
      case we:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : U(e.type) || "Memo";
      case le:
        t = e._payload, e = e._init;
        try {
          return U(e(t));
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
        return U(t);
      case 8:
        return t === D ? "StrictMode" : "Mode";
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
  function C(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function X(e) {
    var t = C(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function oe(e) {
    e._valueTracker || (e._valueTracker = X(e));
  }
  function ue(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = C(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function fe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ve(e, t) {
    var n = t.checked;
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Me(e, t) {
    t = t.checked, t != null && F(e, "checked", t, !1);
  }
  function Ie(e, t) {
    Me(e, t);
    var n = ee(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ye(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ye(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ye(e, t, n) {
    (t !== "number" || fe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ge = Array.isArray;
  function Xe(e, t, n, i) {
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
  function ut(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Je(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Ge(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function Be(e, t) {
    var n = ee(t.value), i = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
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
  function Yt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jt = {
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
  Object.keys(Jt).forEach(function(e) {
    _t.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e];
    });
  });
  function Ne(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px";
  }
  function Bt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = Ne(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Te = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Pe(e, t) {
    if (t) {
      if (Te[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
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
  var He = null;
  function st(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rt = null, vt = null, Xt = null;
  function En(e) {
    if (e = Rr(e)) {
      if (typeof Rt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = _s(t), Rt(e.stateNode, e.type, t));
    }
  }
  function vn(e) {
    vt ? Xt ? Xt.push(e) : Xt = [e] : vt = e;
  }
  function kn() {
    if (vt) {
      var e = vt, t = Xt;
      if (Xt = vt = null, En(e), t) for (e = 0; e < t.length; e++) En(t[e]);
    }
  }
  function ss(e, t) {
    return e(t);
  }
  function $e() {
  }
  var et = !1;
  function Ze(e, t, n) {
    if (et) return e(t, n);
    et = !0;
    try {
      return ss(e, t, n);
    } finally {
      et = !1, (vt !== null || Xt !== null) && ($e(), kn());
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
    var Zt = {};
    Object.defineProperty(Zt, "passive", { get: function() {
      Kt = !0;
    } }), window.addEventListener("test", Zt, Zt), window.removeEventListener("test", Zt, Zt);
  } catch {
    Kt = !1;
  }
  function Ai(e, t, n, i, l, u, h, y, g) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, $);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Cn = !1, Dn = null, di = !1, dr = null, fi = { onError: function(e) {
    Cn = !0, Dn = e;
  } };
  function fr(e, t, n, i, l, u, h, y, g) {
    Cn = !1, Dn = null, Ai.apply(fi, arguments);
  }
  function as(e, t, n, i, l, u, h, y, g) {
    if (fr.apply(this, arguments), Cn) {
      if (Cn) {
        var $ = Dn;
        Cn = !1, Dn = null;
      } else throw Error(o(198));
      di || (di = !0, dr = $);
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
  function Pa(e) {
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
        for (var h = !1, y = l.child; y; ) {
          if (y === n) {
            h = !0, n = l, i = u;
            break;
          }
          if (y === i) {
            h = !0, i = l, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!h) {
          for (y = u.child; y; ) {
            if (y === n) {
              h = !0, n = u, i = l;
              break;
            }
            if (y === i) {
              h = !0, i = u, n = l;
              break;
            }
            y = y.sibling;
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
    return e = Pa(e), e !== null ? os(e) : null;
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
  var us = a.unstable_scheduleCallback, Mn = a.unstable_cancelCallback, zn = a.unstable_shouldYield, I = a.unstable_requestPaint, se = a.unstable_now, De = a.unstable_getCurrentPriorityLevel, Lt = a.unstable_ImmediatePriority, dt = a.unstable_UserBlockingPriority, _n = a.unstable_NormalPriority, mr = a.unstable_LowPriority, Vn = a.unstable_IdlePriority, cs = null, yn = null;
  function qf(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(cs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var on = Math.clz32 ? Math.clz32 : nh, eh = Math.log, th = Math.LN2;
  function nh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (eh(e) / th | 0) | 0;
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
      var y = h & ~l;
      y !== 0 ? i = pr(y) : (u &= h, u !== 0 && (i = pr(u)));
    } else h = n & ~l, h !== 0 ? i = pr(h) : u !== 0 && (i = pr(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - on(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function ih(e, t) {
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
  function rh(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - on(u), y = 1 << h, g = l[h];
      g === -1 ? ((y & n) === 0 || (y & i) !== 0) && (l[h] = ih(y, t)) : g <= t && (e.expiredLanes |= y), u &= ~y;
    }
  }
  function ba(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var e = ds;
    return ds <<= 1, (ds & 4194240) === 0 && (ds = 64), e;
  }
  function Ra(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - on(t), e[t] = n;
  }
  function sh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - on(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function La(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - on(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var We = 0;
  function Xo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Zo, Oa, qo, eu, tu, $a = !1, ms = [], Bn = null, Kn = null, Hn = null, kr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), Un = [], ah = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function nu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
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
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Rr(t), t !== null && Oa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function lh(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = gr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = gr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Hn = gr(Hn, e, t, n, i, l), !0;
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
        He = i, n.target.dispatchEvent(i), He = null;
      } else return t = Rr(n), t !== null && Oa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ru(e, t, n) {
    ps(e) && n.delete(t);
  }
  function oh() {
    $a = !1, Bn !== null && ps(Bn) && (Bn = null), Kn !== null && ps(Kn) && (Kn = null), Hn !== null && ps(Hn) && (Hn = null), kr.forEach(ru), yr.forEach(ru);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $a || ($a = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, oh)));
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
    for (Bn !== null && jr(Bn, e), Kn !== null && jr(Kn, e), Hn !== null && jr(Hn, e), kr.forEach(t), yr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) iu(n), n.blockedOn === null && Un.shift();
  }
  var Pi = z.ReactCurrentBatchConfig, vs = !0;
  function uh(e, t, n, i) {
    var l = We, u = Pi.transition;
    Pi.transition = null;
    try {
      We = 1, Fa(e, t, n, i);
    } finally {
      We = l, Pi.transition = u;
    }
  }
  function ch(e, t, n, i) {
    var l = We, u = Pi.transition;
    Pi.transition = null;
    try {
      We = 4, Fa(e, t, n, i);
    } finally {
      We = l, Pi.transition = u;
    }
  }
  function Fa(e, t, n, i) {
    if (vs) {
      var l = Ia(e, t, n, i);
      if (l === null) tl(e, t, i, ks, n), nu(e, i);
      else if (lh(l, e, t, n, i)) i.stopPropagation();
      else if (nu(e, i), t & 4 && -1 < ah.indexOf(e)) {
        for (; l !== null; ) {
          var u = Rr(l);
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
          case Lt:
            return 1;
          case dt:
            return 4;
          case _n:
          case mr:
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
  function Ht(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? js : lu, this.isPropagationStopped = lu, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = js);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = js);
    }, persist: function() {
    }, isPersistent: js }), t;
  }
  var bi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, za = Ht(bi), Sr = q({}, bi, { view: 0, detail: 0 }), dh = Ht(Sr), Va, Ba, wr, xs = q({}, Sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (Va = e.screenX - wr.screenX, Ba = e.screenY - wr.screenY) : Ba = Va = 0, wr = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ba;
  } }), ou = Ht(xs), fh = q({}, xs, { dataTransfer: 0 }), hh = Ht(fh), mh = q({}, Sr, { relatedTarget: 0 }), Ka = Ht(mh), ph = q({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vh = Ht(ph), kh = q({}, bi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), yh = Ht(kh), gh = q({}, bi, { data: 0 }), uu = Ht(gh), jh = {
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
  }, xh = {
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
  }, Sh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function wh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Sh[e]) ? !!t[e] : !1;
  }
  function Ha() {
    return wh;
  }
  var Nh = q({}, Sr, { key: function(e) {
    if (e.key) {
      var t = jh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = gs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ha, charCode: function(e) {
    return e.type === "keypress" ? gs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Eh = Ht(Nh), Ch = q({}, xs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cu = Ht(Ch), Th = q({}, Sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ha }), Mh = Ht(Th), _h = q({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ah = Ht(_h), Ph = q({}, xs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bh = Ht(Ph), Rh = [9, 13, 27, 32], Ua = m && "CompositionEvent" in window, Nr = null;
  m && "documentMode" in document && (Nr = document.documentMode);
  var Lh = m && "TextEvent" in window && !Nr, du = m && (!Ua || Nr && 8 < Nr && 11 >= Nr), fu = " ", hu = !1;
  function mu(e, t) {
    switch (e) {
      case "keyup":
        return Rh.indexOf(t.keyCode) !== -1;
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
  var Ri = !1;
  function Oh(e, t) {
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
  function $h(e, t) {
    if (Ri) return e === "compositionend" || !Ua && mu(e, t) ? (e = au(), ys = Da = Gn = null, Ri = !1, e) : null;
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
  var Fh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Fh[e.type] : t === "textarea";
  }
  function ku(e, t, n, i) {
    vn(i), t = Cs(t, "onChange"), 0 < t.length && (n = new za("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Er = null, Cr = null;
  function Ih(e) {
    Ou(e, 0);
  }
  function Ss(e) {
    var t = Ii(e);
    if (ue(t)) return e;
  }
  function Dh(e, t) {
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
      ku(t, Cr, e, st(e)), Ze(Ih, t);
    }
  }
  function zh(e, t, n) {
    e === "focusin" ? (ju(), Er = t, Cr = n, Er.attachEvent("onpropertychange", xu)) : e === "focusout" && ju();
  }
  function Vh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ss(Cr);
  }
  function Bh(e, t) {
    if (e === "click") return Ss(t);
  }
  function Kh(e, t) {
    if (e === "input" || e === "change") return Ss(t);
  }
  function Hh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : Hh;
  function Tr(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!j.call(t, l) || !un(e[l], t[l])) return !1;
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
    for (var e = window, t = fe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = fe(e.document);
    }
    return t;
  }
  function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Uh(e) {
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
  var Gh = m && "documentMode" in document && 11 >= document.documentMode, Li = null, Ya = null, Mr = null, Ja = !1;
  function Cu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ja || Li == null || Li !== fe(i) || (i = Li, "selectionStart" in i && Qa(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Mr && Tr(Mr, i) || (Mr = i, i = Cs(Ya, "onSelect"), 0 < i.length && (t = new za("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Li)));
  }
  function ws(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Oi = { animationend: ws("Animation", "AnimationEnd"), animationiteration: ws("Animation", "AnimationIteration"), animationstart: ws("Animation", "AnimationStart"), transitionend: ws("Transition", "TransitionEnd") }, Xa = {}, Tu = {};
  m && (Tu = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function Ns(e) {
    if (Xa[e]) return Xa[e];
    if (!Oi[e]) return e;
    var t = Oi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Tu) return Xa[e] = t[n];
    return e;
  }
  var Mu = Ns("animationend"), _u = Ns("animationiteration"), Au = Ns("animationstart"), Pu = Ns("transitionend"), bu = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    bu.set(e, t), f(t, [e]);
  }
  for (var Za = 0; Za < Ru.length; Za++) {
    var qa = Ru[Za], Wh = qa.toLowerCase(), Qh = qa[0].toUpperCase() + qa.slice(1);
    Wn(Wh, "on" + Qh);
  }
  Wn(Mu, "onAnimationEnd"), Wn(_u, "onAnimationIteration"), Wn(Au, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Pu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
  function Lu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, as(i, t, void 0, e), e.currentTarget = null;
  }
  function Ou(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var y = i[h], g = y.instance, $ = y.currentTarget;
          if (y = y.listener, g !== u && l.isPropagationStopped()) break e;
          Lu(l, y, $), u = g;
        }
        else for (h = 0; h < i.length; h++) {
          if (y = i[h], g = y.instance, $ = y.currentTarget, y = y.listener, g !== u && l.isPropagationStopped()) break e;
          Lu(l, y, $), u = g;
        }
      }
    }
    if (di) throw e = dr, di = !1, dr = null, e;
  }
  function tt(e, t) {
    var n = t[ll];
    n === void 0 && (n = t[ll] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || ($u(t, e, 2, !1), n.add(i));
  }
  function el(e, t, n) {
    var i = 0;
    t && (i |= 4), $u(n, e, i, t);
  }
  var Es = "_reactListening" + Math.random().toString(36).slice(2);
  function Ar(e) {
    if (!e[Es]) {
      e[Es] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Yh.has(n) || el(n, !1, e), el(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Es] || (t[Es] = !0, el("selectionchange", !1, t));
    }
  }
  function $u(e, t, n, i) {
    switch (su(t)) {
      case 1:
        var l = uh;
        break;
      case 4:
        l = ch;
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
        var y = i.stateNode.containerInfo;
        if (y === l || y.nodeType === 8 && y.parentNode === l) break;
        if (h === 4) for (h = i.return; h !== null; ) {
          var g = h.tag;
          if ((g === 3 || g === 4) && (g = h.stateNode.containerInfo, g === l || g.nodeType === 8 && g.parentNode === l)) return;
          h = h.return;
        }
        for (; y !== null; ) {
          if (h = hi(y), h === null) return;
          if (g = h.tag, g === 5 || g === 6) {
            i = u = h;
            continue e;
          }
          y = y.parentNode;
        }
      }
      i = i.return;
    }
    Ze(function() {
      var $ = u, Y = st(n), Z = [];
      e: {
        var Q = bu.get(e);
        if (Q !== void 0) {
          var de = za, pe = e;
          switch (e) {
            case "keypress":
              if (gs(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Eh;
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
              de = hh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Mh;
              break;
            case Mu:
            case _u:
            case Au:
              de = vh;
              break;
            case Pu:
              de = Ah;
              break;
            case "scroll":
              de = dh;
              break;
            case "wheel":
              de = bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = yh;
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
          var ge = (t & 4) !== 0, ft = !ge && e === "scroll", A = ge ? Q !== null ? Q + "Capture" : null : Q;
          ge = [];
          for (var x = $, b; x !== null; ) {
            b = x;
            var te = b.stateNode;
            if (b.tag === 5 && te !== null && (b = te, A !== null && (te = ct(x, A), te != null && ge.push(Pr(x, te, b)))), ft) break;
            x = x.return;
          }
          0 < ge.length && (Q = new de(Q, pe, null, n, Y), Z.push({ event: Q, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", Q && n !== He && (pe = n.relatedTarget || n.fromElement) && (hi(pe) || pe[An])) break e;
          if ((de || Q) && (Q = Y.window === Y ? Y : (Q = Y.ownerDocument) ? Q.defaultView || Q.parentWindow : window, de ? (pe = n.relatedTarget || n.toElement, de = $, pe = pe ? hi(pe) : null, pe !== null && (ft = Tn(pe), pe !== ft || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (de = null, pe = $), de !== pe)) {
            if (ge = ou, te = "onMouseLeave", A = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ge = cu, te = "onPointerLeave", A = "onPointerEnter", x = "pointer"), ft = de == null ? Q : Ii(de), b = pe == null ? Q : Ii(pe), Q = new ge(te, x + "leave", de, n, Y), Q.target = ft, Q.relatedTarget = b, te = null, hi(Y) === $ && (ge = new ge(A, x + "enter", pe, n, Y), ge.target = b, ge.relatedTarget = ft, te = ge), ft = te, de && pe) t: {
              for (ge = de, A = pe, x = 0, b = ge; b; b = $i(b)) x++;
              for (b = 0, te = A; te; te = $i(te)) b++;
              for (; 0 < x - b; ) ge = $i(ge), x--;
              for (; 0 < b - x; ) A = $i(A), b--;
              for (; x--; ) {
                if (ge === A || A !== null && ge === A.alternate) break t;
                ge = $i(ge), A = $i(A);
              }
              ge = null;
            }
            else ge = null;
            de !== null && Fu(Z, Q, de, ge, !1), pe !== null && ft !== null && Fu(Z, ft, pe, ge, !0);
          }
        }
        e: {
          if (Q = $ ? Ii($) : window, de = Q.nodeName && Q.nodeName.toLowerCase(), de === "select" || de === "input" && Q.type === "file") var xe = Dh;
          else if (vu(Q)) if (yu) xe = Kh;
          else {
            xe = Vh;
            var Ee = zh;
          }
          else (de = Q.nodeName) && de.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (xe = Bh);
          if (xe && (xe = xe(e, $))) {
            ku(Z, xe, n, Y);
            break e;
          }
          Ee && Ee(e, Q, $), e === "focusout" && (Ee = Q._wrapperState) && Ee.controlled && Q.type === "number" && Ye(Q, "number", Q.value);
        }
        switch (Ee = $ ? Ii($) : window, e) {
          case "focusin":
            (vu(Ee) || Ee.contentEditable === "true") && (Li = Ee, Ya = $, Mr = null);
            break;
          case "focusout":
            Mr = Ya = Li = null;
            break;
          case "mousedown":
            Ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ja = !1, Cu(Z, n, Y);
            break;
          case "selectionchange":
            if (Gh) break;
          case "keydown":
          case "keyup":
            Cu(Z, n, Y);
        }
        var Ce;
        if (Ua) e: {
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
        else Ri ? mu(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (du && n.locale !== "ko" && (Ri || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Ri && (Ce = au()) : (Gn = Y, Da = "value" in Gn ? Gn.value : Gn.textContent, Ri = !0)), Ee = Cs($, _e), 0 < Ee.length && (_e = new uu(_e, e, null, n, Y), Z.push({ event: _e, listeners: Ee }), Ce ? _e.data = Ce : (Ce = pu(n), Ce !== null && (_e.data = Ce)))), (Ce = Lh ? Oh(e, n) : $h(e, n)) && ($ = Cs($, "onBeforeInput"), 0 < $.length && (Y = new uu("onBeforeInput", "beforeinput", null, n, Y), Z.push({ event: Y, listeners: $ }), Y.data = Ce));
      }
      Ou(Z, t);
    });
  }
  function Pr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Cs(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = ct(e, n), u != null && i.unshift(Pr(e, u, l)), u = ct(e, t), u != null && i.push(Pr(e, u, l))), e = e.return;
    }
    return i;
  }
  function $i(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Fu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var y = n, g = y.alternate, $ = y.stateNode;
      if (g !== null && g === i) break;
      y.tag === 5 && $ !== null && (y = $, l ? (g = ct(n, u), g != null && h.unshift(Pr(n, g, y))) : l || (g = ct(n, u), g != null && h.push(Pr(n, g, y)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Jh = /\r\n?/g, Xh = /\u0000|\uFFFD/g;
  function Iu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jh, `
`).replace(Xh, "");
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
  var sl = typeof setTimeout == "function" ? setTimeout : void 0, Zh = typeof clearTimeout == "function" ? clearTimeout : void 0, Du = typeof Promise == "function" ? Promise : void 0, qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Du < "u" ? function(e) {
    return Du.resolve(null).then(e).catch(em);
  } : sl;
  function em(e) {
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
  var Fi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fi, br = "__reactProps$" + Fi, An = "__reactContainer$" + Fi, ll = "__reactEvents$" + Fi, tm = "__reactListeners$" + Fi, nm = "__reactHandles$" + Fi;
  function hi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[An] || n[gn]) {
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
  function Rr(e) {
    return e = e[gn] || e[An], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function _s(e) {
    return e[br] || null;
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
  var Jn = {}, Et = Yn(Jn), Ot = Yn(!1), mi = Jn;
  function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function $t(e) {
    return e = e.childContextTypes, e != null;
  }
  function As() {
    nt(Ot), nt(Et);
  }
  function Vu(e, t, n) {
    if (Et.current !== Jn) throw Error(o(168));
    qe(Et, t), qe(Ot, n);
  }
  function Bu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, K(e) || "Unknown", l));
    return q({}, n, i);
  }
  function Ps(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, mi = Et.current, qe(Et, e), qe(Ot, Ot.current), !0;
  }
  function Ku(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Bu(e, t, mi), i.__reactInternalMemoizedMergedChildContext = e, nt(Ot), nt(Et), qe(Et, e)) : nt(Ot), qe(Ot, n);
  }
  var Pn = null, bs = !1, ul = !1;
  function Hu(e) {
    Pn === null ? Pn = [e] : Pn.push(e);
  }
  function im(e) {
    bs = !0, Hu(e);
  }
  function Xn() {
    if (!ul && Pn !== null) {
      ul = !0;
      var e = 0, t = We;
      try {
        var n = Pn;
        for (We = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        Pn = null, bs = !1;
      } catch (l) {
        throw Pn !== null && (Pn = Pn.slice(e + 1)), us(Lt, Xn), l;
      } finally {
        We = t, ul = !1;
      }
    }
    return null;
  }
  var Vi = [], Bi = 0, Rs = null, Ls = 0, qt = [], en = 0, pi = null, bn = 1, Rn = "";
  function vi(e, t) {
    Vi[Bi++] = Ls, Vi[Bi++] = Rs, Rs = e, Ls = t;
  }
  function Uu(e, t, n) {
    qt[en++] = bn, qt[en++] = Rn, qt[en++] = pi, pi = e;
    var i = bn;
    e = Rn;
    var l = 32 - on(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - on(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, bn = 1 << 32 - on(t) + l | n << l | i, Rn = u + e;
    } else bn = 1 << u | n << l | i, Rn = e;
  }
  function cl(e) {
    e.return !== null && (vi(e, 1), Uu(e, 1, 0));
  }
  function dl(e) {
    for (; e === Rs; ) Rs = Vi[--Bi], Vi[Bi] = null, Ls = Vi[--Bi], Vi[Bi] = null;
    for (; e === pi; ) pi = qt[--en], qt[en] = null, Rn = qt[--en], qt[en] = null, bn = qt[--en], qt[en] = null;
  }
  var Ut = null, Gt = null, rt = !1, cn = null;
  function Gu(e, t) {
    var n = sn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Wu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ut = e, Gt = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ut = e, Gt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pi !== null ? { id: bn, overflow: Rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = sn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ut = e, Gt = null, !0) : !1;
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
          var i = Ut;
          t && Wu(e, t) ? Gu(i, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Ut = e);
        }
      } else {
        if (fl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, rt = !1, Ut = e;
      }
    }
  }
  function Qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ut = e;
  }
  function Os(e) {
    if (e !== Ut) return !1;
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
    } else Gt = Ut ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Yu() {
    for (var e = Gt; e; ) e = Qn(e.nextSibling);
  }
  function Ki() {
    Gt = Ut = null, rt = !1;
  }
  function ml(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var rm = z.ReactCurrentBatchConfig;
  function Lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(o(147, e));
        var l = i, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
          var y = l.refs;
          h === null ? delete y[u] : y[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function $s(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ju(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xu(e) {
    function t(A, x) {
      if (e) {
        var b = A.deletions;
        b === null ? (A.deletions = [x], A.flags |= 16) : b.push(x);
      }
    }
    function n(A, x) {
      if (!e) return null;
      for (; x !== null; ) t(A, x), x = x.sibling;
      return null;
    }
    function i(A, x) {
      for (A = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? A.set(x.key, x) : A.set(x.index, x), x = x.sibling;
      return A;
    }
    function l(A, x) {
      return A = si(A, x), A.index = 0, A.sibling = null, A;
    }
    function u(A, x, b) {
      return A.index = b, e ? (b = A.alternate, b !== null ? (b = b.index, b < x ? (A.flags |= 2, x) : b) : (A.flags |= 2, x)) : (A.flags |= 1048576, x);
    }
    function h(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function y(A, x, b, te) {
      return x === null || x.tag !== 6 ? (x = so(b, A.mode, te), x.return = A, x) : (x = l(x, b), x.return = A, x);
    }
    function g(A, x, b, te) {
      var xe = b.type;
      return xe === M ? Y(A, x, b.props.children, te, b.key) : x !== null && (x.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === le && Ju(xe) === x.type) ? (te = l(x, b.props), te.ref = Lr(A, x, b), te.return = A, te) : (te = aa(b.type, b.key, b.props, null, A.mode, te), te.ref = Lr(A, x, b), te.return = A, te);
    }
    function $(A, x, b, te) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== b.containerInfo || x.stateNode.implementation !== b.implementation ? (x = ao(b, A.mode, te), x.return = A, x) : (x = l(x, b.children || []), x.return = A, x);
    }
    function Y(A, x, b, te, xe) {
      return x === null || x.tag !== 7 ? (x = Ni(b, A.mode, te, xe), x.return = A, x) : (x = l(x, b), x.return = A, x);
    }
    function Z(A, x, b) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = so("" + x, A.mode, b), x.return = A, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case G:
            return b = aa(x.type, x.key, x.props, null, A.mode, b), b.ref = Lr(A, null, x), b.return = A, b;
          case B:
            return x = ao(x, A.mode, b), x.return = A, x;
          case le:
            var te = x._init;
            return Z(A, te(x._payload), b);
        }
        if (Ge(x) || ae(x)) return x = Ni(x, A.mode, b, null), x.return = A, x;
        $s(A, x);
      }
      return null;
    }
    function Q(A, x, b, te) {
      var xe = x !== null ? x.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number") return xe !== null ? null : y(A, x, "" + b, te);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case G:
            return b.key === xe ? g(A, x, b, te) : null;
          case B:
            return b.key === xe ? $(A, x, b, te) : null;
          case le:
            return xe = b._init, Q(
              A,
              x,
              xe(b._payload),
              te
            );
        }
        if (Ge(b) || ae(b)) return xe !== null ? null : Y(A, x, b, te, null);
        $s(A, b);
      }
      return null;
    }
    function de(A, x, b, te, xe) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return A = A.get(b) || null, y(x, A, "" + te, xe);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case G:
            return A = A.get(te.key === null ? b : te.key) || null, g(x, A, te, xe);
          case B:
            return A = A.get(te.key === null ? b : te.key) || null, $(x, A, te, xe);
          case le:
            var Ee = te._init;
            return de(A, x, b, Ee(te._payload), xe);
        }
        if (Ge(te) || ae(te)) return A = A.get(b) || null, Y(x, A, te, xe, null);
        $s(x, te);
      }
      return null;
    }
    function pe(A, x, b, te) {
      for (var xe = null, Ee = null, Ce = x, _e = x = 0, gt = null; Ce !== null && _e < b.length; _e++) {
        Ce.index > _e ? (gt = Ce, Ce = null) : gt = Ce.sibling;
        var Ke = Q(A, Ce, b[_e], te);
        if (Ke === null) {
          Ce === null && (Ce = gt);
          break;
        }
        e && Ce && Ke.alternate === null && t(A, Ce), x = u(Ke, x, _e), Ee === null ? xe = Ke : Ee.sibling = Ke, Ee = Ke, Ce = gt;
      }
      if (_e === b.length) return n(A, Ce), rt && vi(A, _e), xe;
      if (Ce === null) {
        for (; _e < b.length; _e++) Ce = Z(A, b[_e], te), Ce !== null && (x = u(Ce, x, _e), Ee === null ? xe = Ce : Ee.sibling = Ce, Ee = Ce);
        return rt && vi(A, _e), xe;
      }
      for (Ce = i(A, Ce); _e < b.length; _e++) gt = de(Ce, A, _e, b[_e], te), gt !== null && (e && gt.alternate !== null && Ce.delete(gt.key === null ? _e : gt.key), x = u(gt, x, _e), Ee === null ? xe = gt : Ee.sibling = gt, Ee = gt);
      return e && Ce.forEach(function(ai) {
        return t(A, ai);
      }), rt && vi(A, _e), xe;
    }
    function ge(A, x, b, te) {
      var xe = ae(b);
      if (typeof xe != "function") throw Error(o(150));
      if (b = xe.call(b), b == null) throw Error(o(151));
      for (var Ee = xe = null, Ce = x, _e = x = 0, gt = null, Ke = b.next(); Ce !== null && !Ke.done; _e++, Ke = b.next()) {
        Ce.index > _e ? (gt = Ce, Ce = null) : gt = Ce.sibling;
        var ai = Q(A, Ce, Ke.value, te);
        if (ai === null) {
          Ce === null && (Ce = gt);
          break;
        }
        e && Ce && ai.alternate === null && t(A, Ce), x = u(ai, x, _e), Ee === null ? xe = ai : Ee.sibling = ai, Ee = ai, Ce = gt;
      }
      if (Ke.done) return n(
        A,
        Ce
      ), rt && vi(A, _e), xe;
      if (Ce === null) {
        for (; !Ke.done; _e++, Ke = b.next()) Ke = Z(A, Ke.value, te), Ke !== null && (x = u(Ke, x, _e), Ee === null ? xe = Ke : Ee.sibling = Ke, Ee = Ke);
        return rt && vi(A, _e), xe;
      }
      for (Ce = i(A, Ce); !Ke.done; _e++, Ke = b.next()) Ke = de(Ce, A, _e, Ke.value, te), Ke !== null && (e && Ke.alternate !== null && Ce.delete(Ke.key === null ? _e : Ke.key), x = u(Ke, x, _e), Ee === null ? xe = Ke : Ee.sibling = Ke, Ee = Ke);
      return e && Ce.forEach(function(Fm) {
        return t(A, Fm);
      }), rt && vi(A, _e), xe;
    }
    function ft(A, x, b, te) {
      if (typeof b == "object" && b !== null && b.type === M && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case G:
            e: {
              for (var xe = b.key, Ee = x; Ee !== null; ) {
                if (Ee.key === xe) {
                  if (xe = b.type, xe === M) {
                    if (Ee.tag === 7) {
                      n(A, Ee.sibling), x = l(Ee, b.props.children), x.return = A, A = x;
                      break e;
                    }
                  } else if (Ee.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === le && Ju(xe) === Ee.type) {
                    n(A, Ee.sibling), x = l(Ee, b.props), x.ref = Lr(A, Ee, b), x.return = A, A = x;
                    break e;
                  }
                  n(A, Ee);
                  break;
                } else t(A, Ee);
                Ee = Ee.sibling;
              }
              b.type === M ? (x = Ni(b.props.children, A.mode, te, b.key), x.return = A, A = x) : (te = aa(b.type, b.key, b.props, null, A.mode, te), te.ref = Lr(A, x, b), te.return = A, A = te);
            }
            return h(A);
          case B:
            e: {
              for (Ee = b.key; x !== null; ) {
                if (x.key === Ee) if (x.tag === 4 && x.stateNode.containerInfo === b.containerInfo && x.stateNode.implementation === b.implementation) {
                  n(A, x.sibling), x = l(x, b.children || []), x.return = A, A = x;
                  break e;
                } else {
                  n(A, x);
                  break;
                }
                else t(A, x);
                x = x.sibling;
              }
              x = ao(b, A.mode, te), x.return = A, A = x;
            }
            return h(A);
          case le:
            return Ee = b._init, ft(A, x, Ee(b._payload), te);
        }
        if (Ge(b)) return pe(A, x, b, te);
        if (ae(b)) return ge(A, x, b, te);
        $s(A, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, x !== null && x.tag === 6 ? (n(A, x.sibling), x = l(x, b), x.return = A, A = x) : (n(A, x), x = so(b, A.mode, te), x.return = A, A = x), h(A)) : n(A, x);
    }
    return ft;
  }
  var Hi = Xu(!0), Zu = Xu(!1), Fs = Yn(null), Is = null, Ui = null, pl = null;
  function vl() {
    pl = Ui = Is = null;
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
    Is = e, pl = Ui = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function tn(e) {
    var t = e._currentValue;
    if (pl !== e) if (e = { context: e, memoizedValue: t, next: null }, Ui === null) {
      if (Is === null) throw Error(o(308));
      Ui = e, Is.dependencies = { lanes: 0, firstContext: e };
    } else Ui = Ui.next = e;
    return t;
  }
  var ki = null;
  function gl(e) {
    ki === null ? ki = [e] : ki.push(e);
  }
  function qu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, gl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
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
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (ze & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Ln(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, gl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Ln(e, n);
  }
  function Ds(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, La(e, n);
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
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, y = l.shared.pending;
    if (y !== null) {
      l.shared.pending = null;
      var g = y, $ = g.next;
      g.next = null, h === null ? u = $ : h.next = $, h = g;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, y = Y.lastBaseUpdate, y !== h && (y === null ? Y.firstBaseUpdate = $ : y.next = $, Y.lastBaseUpdate = g));
    }
    if (u !== null) {
      var Z = l.baseState;
      h = 0, Y = $ = g = null, y = u;
      do {
        var Q = y.lane, de = y.eventTime;
        if ((i & Q) === Q) {
          Y !== null && (Y = Y.next = {
            eventTime: de,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var pe = e, ge = y;
            switch (Q = t, de = n, ge.tag) {
              case 1:
                if (pe = ge.payload, typeof pe == "function") {
                  Z = pe.call(de, Z, Q);
                  break e;
                }
                Z = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = ge.payload, Q = typeof pe == "function" ? pe.call(de, Z, Q) : pe, Q == null) break e;
                Z = q({}, Z, Q);
                break e;
              case 2:
                Zn = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [y] : Q.push(y));
        } else de = { eventTime: de, lane: Q, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, Y === null ? ($ = Y = de, g = Z) : Y = Y.next = de, h |= Q;
        if (y = y.next, y === null) {
          if (y = l.shared.pending, y === null) break;
          Q = y, y = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (g = Z), l.baseState = g, l.firstBaseUpdate = $, l.lastBaseUpdate = Y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ji |= h, e.lanes = h, e.memoizedState = Z;
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
  var Or = {}, jn = Yn(Or), $r = Yn(Or), Fr = Yn(Or);
  function yi(e) {
    if (e === Or) throw Error(o(174));
    return e;
  }
  function xl(e, t) {
    switch (qe(Fr, t), qe($r, e), qe(jn, Or), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qt(t, e);
    }
    nt(jn), qe(jn, t);
  }
  function Wi() {
    nt(jn), nt($r), nt(Fr);
  }
  function ic(e) {
    yi(Fr.current);
    var t = yi(jn.current), n = Qt(t, e.type);
    t !== n && (qe($r, e), qe(jn, n));
  }
  function Sl(e) {
    $r.current === e && (nt(jn), nt($r));
  }
  var at = Yn(0);
  function Vs(e) {
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
  var Bs = z.ReactCurrentDispatcher, El = z.ReactCurrentBatchConfig, gi = 0, lt = null, mt = null, kt = null, Ks = !1, Ir = !1, Dr = 0, sm = 0;
  function Ct() {
    throw Error(o(321));
  }
  function Cl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!un(e[n], t[n])) return !1;
    return !0;
  }
  function Tl(e, t, n, i, l, u) {
    if (gi = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bs.current = e === null || e.memoizedState === null ? um : cm, e = n(i, l), Ir) {
      u = 0;
      do {
        if (Ir = !1, Dr = 0, 25 <= u) throw Error(o(301));
        u += 1, kt = mt = null, t.updateQueue = null, Bs.current = dm, e = n(i, l);
      } while (Ir);
    }
    if (Bs.current = Gs, t = mt !== null && mt.next !== null, gi = 0, kt = mt = lt = null, Ks = !1, t) throw Error(o(300));
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
  function nn() {
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
    var t = nn(), n = t.queue;
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
      var y = h = null, g = null, $ = u;
      do {
        var Y = $.lane;
        if ((gi & Y) === Y) g !== null && (g = g.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), i = $.hasEagerState ? $.eagerState : e(i, $.action);
        else {
          var Z = {
            lane: Y,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          g === null ? (y = g = Z, h = i) : g = g.next = Z, lt.lanes |= Y, ji |= Y;
        }
        $ = $.next;
      } while ($ !== null && $ !== u);
      g === null ? h = i : g.next = y, un(i, t.memoizedState) || (Ft = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = g, n.lastRenderedState = i;
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
    var t = nn(), n = t.queue;
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
    var n = lt, i = nn(), l = t(), u = !un(i.memoizedState, l);
    if (u && (i.memoizedState = l, Ft = !0), i = i.queue, Pl(oc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || kt !== null && kt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Vr(9, lc.bind(null, n, i, l, t), void 0, null), yt === null) throw Error(o(349));
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
    var t = Ln(e, 1);
    t !== null && mn(t, e, 1, -1);
  }
  function dc(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = om.bind(null, lt, e), [t.memoizedState, e];
  }
  function Vr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function fc() {
    return nn().memoizedState;
  }
  function Hs(e, t, n, i) {
    var l = xn();
    lt.flags |= e, l.memoizedState = Vr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Us(e, t, n, i) {
    var l = nn();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (mt !== null) {
      var h = mt.memoizedState;
      if (u = h.destroy, i !== null && Cl(i, h.deps)) {
        l.memoizedState = Vr(t, n, u, i);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Vr(1 | t, n, u, i);
  }
  function hc(e, t) {
    return Hs(8390656, 8, e, t);
  }
  function Pl(e, t) {
    return Us(2048, 8, e, t);
  }
  function mc(e, t) {
    return Us(4, 2, e, t);
  }
  function pc(e, t) {
    return Us(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, Us(4, 4, vc.bind(null, t, e), n);
  }
  function bl() {
  }
  function yc(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function gc(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Cl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function jc(e, t, n) {
    return (gi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (un(n, t) || (n = Jo(), lt.lanes |= n, ji |= n, e.baseState = !0), t);
  }
  function am(e, t) {
    var n = We;
    We = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = El.transition;
    El.transition = {};
    try {
      e(!1), t();
    } finally {
      We = n, El.transition = i;
    }
  }
  function xc() {
    return nn().memoizedState;
  }
  function lm(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Sc(e)) wc(t, n);
    else if (n = qu(e, t, n, i), n !== null) {
      var l = Pt();
      mn(n, e, i, l), Nc(n, t, i);
    }
  }
  function om(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Sc(e)) wc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, y = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = y, un(y, h)) {
          var g = t.interleaved;
          g === null ? (l.next = l, gl(t)) : (l.next = g.next, g.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = qu(e, t, l, i), n !== null && (l = Pt(), mn(n, e, i, l), Nc(n, t, i));
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
      i &= e.pendingLanes, n |= i, t.lanes = n, La(e, n);
    }
  }
  var Gs = { readContext: tn, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, um = { readContext: tn, useCallback: function(e, t) {
    return xn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: tn, useEffect: hc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hs(
      4194308,
      4,
      vc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Hs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Hs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = xn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = lm.bind(null, lt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = xn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: dc, useDebugValue: bl, useDeferredValue: function(e) {
    return xn().memoizedState = e;
  }, useTransition: function() {
    var e = dc(!1), t = e[0];
    return e = am.bind(null, e[1]), xn().memoizedState = e, [t, e];
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
    ), [e]), i.flags |= 2048, Vr(9, lc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = xn(), t = yt.identifierPrefix;
    if (rt) {
      var n = Rn, i = bn;
      n = (i & ~(1 << 32 - on(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = sm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, cm = {
    readContext: tn,
    useCallback: yc,
    useContext: tn,
    useEffect: Pl,
    useImperativeHandle: kc,
    useInsertionEffect: mc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: _l,
    useRef: fc,
    useState: function() {
      return _l(zr);
    },
    useDebugValue: bl,
    useDeferredValue: function(e) {
      var t = nn();
      return jc(t, mt.memoizedState, e);
    },
    useTransition: function() {
      var e = _l(zr)[0], t = nn().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: sc,
    useId: xc,
    unstable_isNewReconciler: !1
  }, dm = { readContext: tn, useCallback: yc, useContext: tn, useEffect: Pl, useImperativeHandle: kc, useInsertionEffect: mc, useLayoutEffect: pc, useMemo: gc, useReducer: Al, useRef: fc, useState: function() {
    return Al(zr);
  }, useDebugValue: bl, useDeferredValue: function(e) {
    var t = nn();
    return mt === null ? t.memoizedState = e : jc(t, mt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(zr)[0], t = nn().memoizedState;
    return [e, t];
  }, useMutableSource: rc, useSyncExternalStore: sc, useId: xc, unstable_isNewReconciler: !1 };
  function dn(e, t) {
    if (e && e.defaultProps) {
      t = q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Rl(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ws = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = Pt(), l = ii(e), u = On(i, l);
    u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Pt(), l = ii(e), u = On(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Pt(), i = ii(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (mn(t, e, i, n), Ds(t, e, i));
  } };
  function Ec(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, i) || !Tr(l, u) : !0;
  }
  function Cc(e, t, n) {
    var i = !1, l = Jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = tn(u) : (l = $t(t) ? mi : Et.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ws, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Tc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
  }
  function Ll(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, jl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = tn(u) : (u = $t(t) ? mi : Et.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Rl(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ws.enqueueReplaceState(l, l.state, null), zs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qi(e, t) {
    try {
      var n = "", i = t;
      do
        n += Se(i), i = i.return;
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
  function $l(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var fm = typeof WeakMap == "function" ? WeakMap : Map;
  function Mc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ea || (ea = !0, Xl = i), $l(e, t);
    }, n;
  }
  function _c(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        $l(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      $l(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Ac(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new fm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Cm.bind(null, e, t, n), t.then(e, e));
  }
  function Pc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function bc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var hm = z.ReactCurrentOwner, Ft = !1;
  function At(e, t, n, i) {
    t.child = e === null ? Zu(t, null, n, i) : Hi(t, e.child, n, i);
  }
  function Rc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = Tl(e, t, n, i, u, l), n = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (rt && n && cl(t), t.flags |= 1, At(e, t, i, l), t.child);
  }
  function Lc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ro(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Oc(e, t, u, i, l)) : (e = aa(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Tr, n(h, i) && e.ref === t.ref) return $n(e, t, l);
    }
    return t.flags |= 1, e = si(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Oc(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Tr(u, i) && e.ref === t.ref) if (Ft = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ft = !0);
      else return t.lanes = e.lanes, $n(e, t, l);
    }
    return Fl(e, t, n, i, l);
  }
  function $c(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Ji, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(Ji, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, qe(Ji, Wt), Wt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, qe(Ji, Wt), Wt |= i;
    return At(e, t, l, n), t.child;
  }
  function Fc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Fl(e, t, n, i, l) {
    var u = $t(n) ? mi : Et.current;
    return u = zi(t, u), Gi(t, l), n = Tl(e, t, n, i, u, l), i = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (rt && i && cl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Ic(e, t, n, i, l) {
    if ($t(n)) {
      var u = !0;
      Ps(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Ys(e, t), Cc(t, n, i), Ll(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, y = t.memoizedProps;
      h.props = y;
      var g = h.context, $ = n.contextType;
      typeof $ == "object" && $ !== null ? $ = tn($) : ($ = $t(n) ? mi : Et.current, $ = zi(t, $));
      var Y = n.getDerivedStateFromProps, Z = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Z || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (y !== i || g !== $) && Tc(t, h, i, $), Zn = !1;
      var Q = t.memoizedState;
      h.state = Q, zs(t, i, h, l), g = t.memoizedState, y !== i || Q !== g || Ot.current || Zn ? (typeof Y == "function" && (Rl(t, n, Y, i), g = t.memoizedState), (y = Zn || Ec(t, n, y, i, Q, g, $)) ? (Z || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = g), h.props = i, h.state = g, h.context = $, i = y) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, ec(e, t), y = t.memoizedProps, $ = t.type === t.elementType ? y : dn(t.type, y), h.props = $, Z = t.pendingProps, Q = h.context, g = n.contextType, typeof g == "object" && g !== null ? g = tn(g) : (g = $t(n) ? mi : Et.current, g = zi(t, g));
      var de = n.getDerivedStateFromProps;
      (Y = typeof de == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (y !== Z || Q !== g) && Tc(t, h, i, g), Zn = !1, Q = t.memoizedState, h.state = Q, zs(t, i, h, l);
      var pe = t.memoizedState;
      y !== Z || Q !== pe || Ot.current || Zn ? (typeof de == "function" && (Rl(t, n, de, i), pe = t.memoizedState), ($ = Zn || Ec(t, n, $, i, Q, pe, g) || !1) ? (Y || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, pe, g), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, pe, g)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = pe), h.props = i, h.state = pe, h.context = g, i = $) : (typeof h.componentDidUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Il(e, t, n, i, u, l);
  }
  function Il(e, t, n, i, l, u) {
    Fc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Ku(t, n, !1), $n(e, t, u);
    i = t.stateNode, hm.current = t;
    var y = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Hi(t, e.child, null, u), t.child = Hi(t, null, y, u)) : At(e, t, y, u), t.memoizedState = i.state, l && Ku(t, n, !0), t.child;
  }
  function Dc(e) {
    var t = e.stateNode;
    t.pendingContext ? Vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vu(e, t.context, !1), xl(e, t.containerInfo);
  }
  function zc(e, t, n, i, l) {
    return Ki(), ml(l), t.flags |= 256, At(e, t, n, i), t.child;
  }
  var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vc(e, t, n) {
    var i = t.pendingProps, l = at.current, u = !1, h = (t.flags & 128) !== 0, y;
    if ((y = h) || (y = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), y ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return hl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = la(h, i, 0, null), e = Ni(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = zl(n), t.memoizedState = Dl, e) : Vl(t, h));
    if (l = e.memoizedState, l !== null && (y = l.dehydrated, y !== null)) return mm(e, t, h, i, y, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, y = l.sibling;
      var g = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = g, t.deletions = null) : (i = si(l, g), i.subtreeFlags = l.subtreeFlags & 14680064), y !== null ? u = si(y, u) : (u = Ni(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? zl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = Dl, i;
    }
    return u = e.child, e = u.sibling, i = si(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Vl(e, t) {
    return t = la({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Qs(e, t, n, i) {
    return i !== null && ml(i), Hi(t, e.child, null, n), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function mm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Ol(Error(o(422))), Qs(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = la({ mode: "visible", children: i.children }, l, 0, null), u = Ni(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Hi(t, e.child, null, h), t.child.memoizedState = zl(h), t.memoizedState = Dl, u);
    if ((t.mode & 1) === 0) return Qs(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var y = i.dgst;
      return i = y, u = Error(o(419)), i = Ol(u, i, void 0), Qs(e, t, h, i);
    }
    if (y = (h & e.childLanes) !== 0, Ft || y) {
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
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ln(e, l), mn(i, e, l, -1));
      }
      return io(), i = Ol(Error(o(421))), Qs(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Gt = Qn(l.nextSibling), Ut = t, rt = !0, cn = null, e !== null && (qt[en++] = bn, qt[en++] = Rn, qt[en++] = pi, bn = e.id, Rn = e.overflow, pi = t), t = Vl(t, i.children), t.flags |= 4096, t);
  }
  function Bc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), yl(e.return, t, n);
  }
  function Bl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Kc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (At(e, t, i.children, n), i = at.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bc(e, n, t);
        else if (e.tag === 19) Bc(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Vs(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Bl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Vs(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Bl(t, !0, n, null, u);
        break;
      case "together":
        Bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ys(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ji |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function pm(e, t, n) {
    switch (t.tag) {
      case 3:
        Dc(t), Ki();
        break;
      case 5:
        ic(t);
        break;
      case 1:
        $t(t.type) && Ps(t);
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
          return i.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Vc(e, t, n) : (qe(at, at.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
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
        return t.lanes = 0, $c(e, t, n);
    }
    return $n(e, t, n);
  }
  var Hc, Kl, Uc, Gc;
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
  }, Kl = function() {
  }, Uc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, yi(jn.current);
      var u = null;
      switch (n) {
        case "input":
          l = ve(e, l), i = ve(e, i), u = [];
          break;
        case "select":
          l = q({}, l, { value: void 0 }), i = q({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ut(e, l), i = ut(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ms);
      }
      Pe(n, i);
      var h;
      n = null;
      for ($ in l) if (!i.hasOwnProperty($) && l.hasOwnProperty($) && l[$] != null) if ($ === "style") {
        var y = l[$];
        for (h in y) y.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (d.hasOwnProperty($) ? u || (u = []) : (u = u || []).push($, null));
      for ($ in i) {
        var g = i[$];
        if (y = l?.[$], i.hasOwnProperty($) && g !== y && (g != null || y != null)) if ($ === "style") if (y) {
          for (h in y) !y.hasOwnProperty(h) || g && g.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in g) g.hasOwnProperty(h) && y[h] !== g[h] && (n || (n = {}), n[h] = g[h]);
        } else n || (u || (u = []), u.push(
          $,
          n
        )), n = g;
        else $ === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, y = y ? y.__html : void 0, g != null && y !== g && (u = u || []).push($, g)) : $ === "children" ? typeof g != "string" && typeof g != "number" || (u = u || []).push($, "" + g) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (d.hasOwnProperty($) ? (g != null && $ === "onScroll" && tt("scroll", e), u || y === g || (u = [])) : (u = u || []).push($, g));
      }
      n && (u = u || []).push("style", n);
      var $ = u;
      (t.updateQueue = $) && (t.flags |= 4);
    }
  }, Gc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Br(e, t) {
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
  function vm(e, t, n) {
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
        return $t(t.type) && As(), Tt(t), null;
      case 3:
        return i = t.stateNode, Wi(), nt(Ot), nt(Et), Nl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Os(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cn !== null && (eo(cn), cn = null))), Kl(e, t), Tt(t), null;
      case 5:
        Sl(t);
        var l = yi(Fr.current);
        if (n = t.type, e !== null && t.stateNode != null) Uc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Tt(t), null;
          }
          if (e = yi(jn.current), Os(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[gn] = t, i[br] = u, e = (t.mode & 1) !== 0, n) {
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
                Ae(i, u), tt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, tt("invalid", i);
                break;
              case "textarea":
                Je(i, u), tt("invalid", i);
            }
            Pe(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var y = u[h];
              h === "children" ? typeof y == "string" ? i.textContent !== y && (u.suppressHydrationWarning !== !0 && Ts(i.textContent, y, e), l = ["children", y]) : typeof y == "number" && i.textContent !== "" + y && (u.suppressHydrationWarning !== !0 && Ts(
                i.textContent,
                y,
                e
              ), l = ["children", "" + y]) : d.hasOwnProperty(h) && y != null && h === "onScroll" && tt("scroll", i);
            }
            switch (n) {
              case "input":
                oe(i), Qe(i, u, !0);
                break;
              case "textarea":
                oe(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = Ms);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[gn] = t, e[br] = i, Hc(e, t, !1, !1), t.stateNode = e;
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
                  Ae(e, i), l = ve(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = q({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Je(e, i), l = ut(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Pe(n, l), y = l;
              for (u in y) if (y.hasOwnProperty(u)) {
                var g = y[u];
                u === "style" ? Bt(e, g) : u === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && ln(e, g)) : u === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && Yt(e, g) : typeof g == "number" && Yt(e, "" + g) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? g != null && u === "onScroll" && tt("scroll", e) : g != null && F(e, u, g, h));
              }
              switch (n) {
                case "input":
                  oe(e), Qe(e, i, !1);
                  break;
                case "textarea":
                  oe(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ee(i.value));
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
          if (n = yi(Fr.current), yi(jn.current), Os(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[gn] = t, (u = i.nodeValue !== n) && (e = Ut, e !== null)) switch (e.tag) {
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
          else if (u = Os(t), i !== null && i.dehydrated !== null) {
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
        return Wi(), Kl(e, t), e === null && Ar(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return kl(t.type._context), Tt(t), null;
      case 17:
        return $t(t.type) && As(), Tt(t), null;
      case 19:
        if (nt(at), u = t.memoizedState, u === null) return Tt(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Br(u, !1);
        else {
          if (pt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Vs(e), h !== null) {
              for (t.flags |= 128, Br(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return qe(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && se() > Xi && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Vs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Br(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !rt) return Tt(t), null;
          } else 2 * se() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = se(), t.sibling = null, n = at.current, qe(at, i ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
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
  function km(e, t) {
    switch (dl(t), t.tag) {
      case 1:
        return $t(t.type) && As(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), nt(Ot), nt(Et), Nl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
  var Js = !1, Mt = !1, ym = typeof WeakSet == "function" ? WeakSet : Set, me = null;
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
  var Wc = !1;
  function gm(e, t) {
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
          var h = 0, y = -1, g = -1, $ = 0, Y = 0, Z = e, Q = null;
          t: for (; ; ) {
            for (var de; Z !== n || l !== 0 && Z.nodeType !== 3 || (y = h + l), Z !== u || i !== 0 && Z.nodeType !== 3 || (g = h + i), Z.nodeType === 3 && (h += Z.nodeValue.length), (de = Z.firstChild) !== null; )
              Q = Z, Z = de;
            for (; ; ) {
              if (Z === e) break t;
              if (Q === n && ++$ === l && (y = h), Q === u && ++Y === i && (g = h), (de = Z.nextSibling) !== null) break;
              Z = Q, Q = Z.parentNode;
            }
            Z = de;
          }
          n = y === -1 || g === -1 ? null : { start: y, end: g };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (il = { focusedElem: e, selectionRange: n }, vs = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
    else for (; me !== null; ) {
      t = me;
      try {
        var pe = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (pe !== null) {
              var ge = pe.memoizedProps, ft = pe.memoizedState, A = t.stateNode, x = A.getSnapshotBeforeUpdate(t.elementType === t.type ? ge : dn(t.type, ge), ft);
              A.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var b = t.stateNode.containerInfo;
            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (te) {
        ot(t, t.return, te);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, me = e;
        break;
      }
      me = t.return;
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
          l.destroy = void 0, u !== void 0 && Hl(t, n, u);
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
  function Ul(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Qc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[br], delete t[ll], delete t[tm], delete t[nm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Hl(n, t, h), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!Mt && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (y) {
          ot(n, t, y);
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
      n === null && (n = e.stateNode = new ym()), t.forEach(function(i) {
        var l = Mm.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function hn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e, h = t, y = h;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              xt = y.stateNode, fn = !1;
              break e;
            case 3:
              xt = y.stateNode.containerInfo, fn = !0;
              break e;
            case 4:
              xt = y.stateNode.containerInfo, fn = !0;
              break e;
          }
          y = y.return;
        }
        if (xt === null) throw Error(o(160));
        Xc(u, h, l), xt = null, fn = !1;
        var g = l.alternate;
        g !== null && (g.return = null), l.return = null;
      } catch ($) {
        ot(l, t, $);
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
          } catch (ge) {
            ot(e, e.return, ge);
          }
          try {
            Kr(5, e, e.return);
          } catch (ge) {
            ot(e, e.return, ge);
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
            Yt(l, "");
          } catch (ge) {
            ot(e, e.return, ge);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, y = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null) try {
            y === "input" && u.type === "radio" && u.name != null && Me(l, u), Re(y, h);
            var $ = Re(y, u);
            for (h = 0; h < g.length; h += 2) {
              var Y = g[h], Z = g[h + 1];
              Y === "style" ? Bt(l, Z) : Y === "dangerouslySetInnerHTML" ? ln(l, Z) : Y === "children" ? Yt(l, Z) : F(l, Y, Z, $);
            }
            switch (y) {
              case "input":
                Ie(l, u);
                break;
              case "textarea":
                Be(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var de = u.value;
                de != null ? Xe(l, !!u.multiple, de, !1) : Q !== !!u.multiple && (u.defaultValue != null ? Xe(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xe(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[br] = u;
          } catch (ge) {
            ot(e, e.return, ge);
          }
        }
        break;
      case 6:
        if (hn(t, e), Sn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ge) {
            ot(e, e.return, ge);
          }
        }
        break;
      case 3:
        if (hn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          xr(t.containerInfo);
        } catch (ge) {
          ot(e, e.return, ge);
        }
        break;
      case 4:
        hn(t, e), Sn(e);
        break;
      case 13:
        hn(t, e), Sn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Jl = se())), i & 4 && Zc(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (Mt = ($ = Mt) || Y, hn(t, e), Mt = $) : hn(t, e), Sn(e), i & 8192) {
          if ($ = e.memoizedState !== null, (e.stateNode.isHidden = $) && !Y && (e.mode & 1) !== 0) for (me = e, Y = e.child; Y !== null; ) {
            for (Z = me = Y; me !== null; ) {
              switch (Q = me, de = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, Q, Q.return);
                  break;
                case 1:
                  Yi(Q, Q.return);
                  var pe = Q.stateNode;
                  if (typeof pe.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, pe.props = t.memoizedProps, pe.state = t.memoizedState, pe.componentWillUnmount();
                    } catch (ge) {
                      ot(i, n, ge);
                    }
                  }
                  break;
                case 5:
                  Yi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    nd(Z);
                    continue;
                  }
              }
              de !== null ? (de.return = Q, me = de) : nd(Z);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (Y === null) {
                Y = Z;
                try {
                  l = Z.stateNode, $ ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (y = Z.stateNode, g = Z.memoizedProps.style, h = g != null && g.hasOwnProperty("display") ? g.display : null, y.style.display = Ne("display", h));
                } catch (ge) {
                  ot(e, e.return, ge);
                }
              }
            } else if (Z.tag === 6) {
              if (Y === null) try {
                Z.stateNode.nodeValue = $ ? "" : Z.memoizedProps;
              } catch (ge) {
                ot(e, e.return, ge);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === e) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === e) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === e) break e;
              Y === Z && (Y = null), Z = Z.return;
            }
            Y === Z && (Y = null), Z.sibling.return = Z.return, Z = Z.sibling;
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
            i.flags & 32 && (Yt(l, ""), i.flags &= -33);
            var u = Jc(e);
            Wl(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, y = Jc(e);
            Gl(e, y, h);
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
  function jm(e, t, n) {
    me = e, ed(e);
  }
  function ed(e, t, n) {
    for (var i = (e.mode & 1) !== 0; me !== null; ) {
      var l = me, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Js;
        if (!h) {
          var y = l.alternate, g = y !== null && y.memoizedState !== null || Mt;
          y = Js;
          var $ = Mt;
          if (Js = h, (Mt = g) && !$) for (me = l; me !== null; ) h = me, g = h.child, h.tag === 22 && h.memoizedState !== null ? id(l) : g !== null ? (g.return = h, me = g) : id(l);
          for (; u !== null; ) me = u, ed(u), u = u.sibling;
          me = l, Js = y, Mt = $;
        }
        td(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, me = u) : td(e);
    }
  }
  function td(e) {
    for (; me !== null; ) {
      var t = me;
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
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
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
                var $ = t.alternate;
                if ($ !== null) {
                  var Y = $.memoizedState;
                  if (Y !== null) {
                    var Z = Y.dehydrated;
                    Z !== null && xr(Z);
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
          Mt || t.flags & 512 && Ul(t);
        } catch (Q) {
          ot(t, t.return, Q);
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
  function nd(e) {
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
  function id(e) {
    for (; me !== null; ) {
      var t = me;
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
              Ul(t);
            } catch (g) {
              ot(t, u, g);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Ul(t);
            } catch (g) {
              ot(t, h, g);
            }
        }
      } catch (g) {
        ot(t, t.return, g);
      }
      if (t === e) {
        me = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, me = y;
        break;
      }
      me = t.return;
    }
  }
  var xm = Math.ceil, Zs = z.ReactCurrentDispatcher, Ql = z.ReactCurrentOwner, rn = z.ReactCurrentBatchConfig, ze = 0, yt = null, ht = null, St = 0, Wt = 0, Ji = Yn(0), pt = 0, Hr = null, ji = 0, qs = 0, Yl = 0, Ur = null, It = null, Jl = 0, Xi = 1 / 0, Fn = null, ea = !1, Xl = null, ti = null, ta = !1, ni = null, na = 0, Gr = 0, Zl = null, ia = -1, ra = 0;
  function Pt() {
    return (ze & 6) !== 0 ? se() : ia !== -1 ? ia : ia = se();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && St !== 0 ? St & -St : rm.transition !== null ? (ra === 0 && (ra = Jo()), ra) : (e = We, e !== 0 || (e = window.event, e = e === void 0 ? 16 : su(e.type)), e);
  }
  function mn(e, t, n, i) {
    if (50 < Gr) throw Gr = 0, Zl = null, Error(o(185));
    vr(e, n, i), ((ze & 2) === 0 || e !== yt) && (e === yt && ((ze & 2) === 0 && (qs |= n), pt === 4 && ri(e, St)), Dt(e, i), n === 1 && ze === 0 && (t.mode & 1) === 0 && (Xi = se() + 500, bs && Xn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    rh(e, t);
    var i = hs(e, e === yt ? St : 0);
    if (i === 0) n !== null && Mn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Mn(n), t === 1) e.tag === 0 ? im(sd.bind(null, e)) : Hu(sd.bind(null, e)), qh(function() {
        (ze & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Xo(i)) {
          case 1:
            n = Lt;
            break;
          case 4:
            n = dt;
            break;
          case 16:
            n = _n;
            break;
          case 536870912:
            n = Vn;
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
      (yt !== e || St !== t) && (Fn = null, Xi = se() + 500, Si(e, t));
      do
        try {
          Nm();
          break;
        } catch (y) {
          ad(e, y);
        }
      while (!0);
      vl(), Zs.current = u, ze = l, ht !== null ? t = 0 : (yt = null, St = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (l = ba(e), l !== 0 && (i = l, t = ql(e, l))), t === 1) throw n = Hr, Si(e, 0), ri(e, i), Dt(e, se()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Sm(l) && (t = sa(e, i), t === 2 && (u = ba(e), u !== 0 && (i = u, t = ql(e, u))), t === 1)) throw n = Hr, Si(e, 0), ri(e, i), Dt(e, se()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wi(e, It, Fn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Jl + 500 - se(), 10 < t)) {
              if (hs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Pt(), e.pingedLanes |= e.suspendedLanes & l;
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
            if (i = l, i = se() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * xm(i / 1960)) - i, 10 < i) {
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
    return Dt(e, se()), e.callbackNode === n ? rd.bind(null, e) : null;
  }
  function ql(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256), e = sa(e, t), e !== 2 && (t = It, It = n, t !== null && eo(t)), e;
  }
  function eo(e) {
    It === null ? It = e : It.push.apply(It, e);
  }
  function Sm(e) {
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
    if ((t & 1) === 0) return Dt(e, se()), null;
    var n = sa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = ba(e);
      i !== 0 && (t = i, n = ql(e, i));
    }
    if (n === 1) throw n = Hr, Si(e, 0), ri(e, t), Dt(e, se()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wi(e, It, Fn), Dt(e, se()), null;
  }
  function to(e, t) {
    var n = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ze = n, ze === 0 && (Xi = se() + 500, bs && Xn());
    }
  }
  function xi(e) {
    ni !== null && ni.tag === 0 && (ze & 6) === 0 && Zi();
    var t = ze;
    ze |= 1;
    var n = rn.transition, i = We;
    try {
      if (rn.transition = null, We = 1, e) return e();
    } finally {
      We = i, rn.transition = n, ze = t, (ze & 6) === 0 && Xn();
    }
  }
  function no() {
    Wt = Ji.current, nt(Ji);
  }
  function Si(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Zh(n)), ht !== null) for (n = ht.return; n !== null; ) {
      var i = n;
      switch (dl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && As();
          break;
        case 3:
          Wi(), nt(Ot), nt(Et), Nl();
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
    if (yt = e, ht = e = si(e.current, null), St = Wt = t, pt = 0, Hr = null, Yl = qs = ji = 0, It = Ur = null, ki !== null) {
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
        if (vl(), Bs.current = Gs, Ks) {
          for (var i = lt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Ks = !1;
        }
        if (gi = 0, kt = mt = lt = null, Ir = !1, Dr = 0, Ql.current = null, n === null || n.return === null) {
          pt = 1, Hr = t, ht = null;
          break;
        }
        e: {
          var u = e, h = n.return, y = n, g = t;
          if (t = St, y.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var $ = g, Y = y, Z = Y.tag;
            if ((Y.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var Q = Y.alternate;
              Q ? (Y.updateQueue = Q.updateQueue, Y.memoizedState = Q.memoizedState, Y.lanes = Q.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var de = Pc(h);
            if (de !== null) {
              de.flags &= -257, bc(de, h, y, u, t), de.mode & 1 && Ac(u, $, t), t = de, g = $;
              var pe = t.updateQueue;
              if (pe === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(g), t.updateQueue = ge;
              } else pe.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ac(u, $, t), io();
                break e;
              }
              g = Error(o(426));
            }
          } else if (rt && y.mode & 1) {
            var ft = Pc(h);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), bc(ft, h, y, u, t), ml(Qi(g, y));
              break e;
            }
          }
          u = g = Qi(g, y), pt !== 4 && (pt = 2), Ur === null ? Ur = [u] : Ur.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var A = Mc(u, g, t);
                tc(u, A);
                break e;
              case 1:
                y = g;
                var x = u.type, b = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ti === null || !ti.has(b)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var te = _c(u, y, t);
                  tc(u, te);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ud(n);
      } catch (xe) {
        t = xe, ht === n && n !== null && (ht = n = n.return);
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
        wm();
        break;
      } catch (l) {
        ad(e, l);
      }
    while (!0);
    if (vl(), ze = n, Zs.current = i, ht !== null) throw Error(o(261));
    return yt = null, St = 0, pt;
  }
  function wm() {
    for (; ht !== null; ) od(ht);
  }
  function Nm() {
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
        if (n = vm(n, t, Wt), n !== null) {
          ht = n;
          return;
        }
      } else {
        if (n = km(n, t), n !== null) {
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
    var i = We, l = rn.transition;
    try {
      rn.transition = null, We = 1, Em(e, t, n, i);
    } finally {
      rn.transition = l, We = i;
    }
    return null;
  }
  function Em(e, t, n, i) {
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
    if (sh(e, u), e === yt && (ht = yt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ta || (ta = !0, hd(_n, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = rn.transition, rn.transition = null;
      var h = We;
      We = 1;
      var y = ze;
      ze |= 4, Ql.current = null, gm(e, n), qc(n, e), Uh(il), vs = !!nl, il = nl = null, e.current = n, jm(n), I(), ze = y, We = h, rn.transition = u;
    } else e.current = n;
    if (ta && (ta = !1, ni = e, na = l), u = e.pendingLanes, u === 0 && (ti = null), qf(n.stateNode), Dt(e, se()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ea) throw ea = !1, e = Xl, Xl = null, e;
    return (na & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === Zl ? Gr++ : (Gr = 0, Zl = e) : Gr = 0, Xn(), null;
  }
  function Zi() {
    if (ni !== null) {
      var e = Xo(na), t = rn.transition, n = We;
      try {
        if (rn.transition = null, We = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, na = 0, (ze & 6) !== 0) throw Error(o(331));
          var l = ze;
          for (ze |= 4, me = e.current; me !== null; ) {
            var u = me, h = u.child;
            if ((me.flags & 16) !== 0) {
              var y = u.deletions;
              if (y !== null) {
                for (var g = 0; g < y.length; g++) {
                  var $ = y[g];
                  for (me = $; me !== null; ) {
                    var Y = me;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Kr(8, Y, u);
                    }
                    var Z = Y.child;
                    if (Z !== null) Z.return = Y, me = Z;
                    else for (; me !== null; ) {
                      Y = me;
                      var Q = Y.sibling, de = Y.return;
                      if (Qc(Y), Y === $) {
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
                var pe = u.alternate;
                if (pe !== null) {
                  var ge = pe.child;
                  if (ge !== null) {
                    pe.child = null;
                    do {
                      var ft = ge.sibling;
                      ge.sibling = null, ge = ft;
                    } while (ge !== null);
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
                  Kr(9, u, u.return);
              }
              var A = u.sibling;
              if (A !== null) {
                A.return = u.return, me = A;
                break e;
              }
              me = u.return;
            }
          }
          var x = e.current;
          for (me = x; me !== null; ) {
            h = me;
            var b = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && b !== null) b.return = h, me = b;
            else e: for (h = x; me !== null; ) {
              if (y = me, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xs(9, y);
                }
              } catch (xe) {
                ot(y, y.return, xe);
              }
              if (y === h) {
                me = null;
                break e;
              }
              var te = y.sibling;
              if (te !== null) {
                te.return = y.return, me = te;
                break e;
              }
              me = y.return;
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
        We = n, rn.transition = t;
      }
    }
    return !1;
  }
  function cd(e, t, n) {
    t = Qi(n, t), t = Mc(e, t, 1), e = qn(e, t, 1), t = Pt(), e !== null && (vr(e, 1, t), Dt(e, t));
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
          e = Qi(n, e), e = _c(t, e, 1), t = qn(t, e, 1), e = Pt(), t !== null && (vr(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Cm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & n, yt === e && (St & n) === n && (pt === 4 || pt === 3 && (St & 130023424) === St && 500 > se() - Jl ? Si(e, 0) : Yl |= n), Dt(e, t);
  }
  function dd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = fs, fs <<= 1, (fs & 130023424) === 0 && (fs = 4194304)));
    var n = Pt();
    e = Ln(e, t), e !== null && (vr(e, t, n), Dt(e, n));
  }
  function Tm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), dd(e, n);
  }
  function Mm(e, t) {
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ot.current) Ft = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ft = !1, pm(e, t, n);
      Ft = (e.flags & 131072) !== 0;
    }
    else Ft = !1, rt && (t.flags & 1048576) !== 0 && Uu(t, Ls, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Ys(e, t), e = t.pendingProps;
        var l = zi(t, Et.current);
        Gi(t, n), l = Tl(null, t, i, e, l, n);
        var u = Ml();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $t(i) ? (u = !0, Ps(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jl(t), l.updater = Ws, t.stateNode = l, l._reactInternals = t, Ll(t, i, e, n), t = Il(null, t, i, !0, u, n)) : (t.tag = 0, rt && u && cl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Ys(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Am(i), e = dn(i, e), l) {
            case 0:
              t = Fl(null, t, i, e, n);
              break e;
            case 1:
              t = Ic(null, t, i, e, n);
              break e;
            case 11:
              t = Rc(null, t, i, e, n);
              break e;
            case 14:
              t = Lc(null, t, i, dn(i.type, e), n);
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
          } else for (Gt = Qn(t.stateNode.containerInfo.firstChild), Ut = t, rt = !0, cn = null, n = Zu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ki(), i === l) {
              t = $n(e, t, n);
              break e;
            }
            At(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ic(t), e === null && hl(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, rl(i, l) ? h = null : u !== null && rl(i, u) && (t.flags |= 32), Fc(e, t), At(e, t, h, n), t.child;
      case 6:
        return e === null && hl(t), null;
      case 13:
        return Vc(e, t, n);
      case 4:
        return xl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Hi(t, null, i, n) : At(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Rc(e, t, i, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, qe(Fs, i._currentValue), i._currentValue = h, u !== null) if (un(u.value, h)) {
            if (u.children === l.children && !Ot.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var y = u.dependencies;
            if (y !== null) {
              h = u.child;
              for (var g = y.firstContext; g !== null; ) {
                if (g.context === i) {
                  if (u.tag === 1) {
                    g = On(-1, n & -n), g.tag = 2;
                    var $ = u.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var Y = $.pending;
                      Y === null ? g.next = g : (g.next = Y.next, Y.next = g), $.pending = g;
                    }
                  }
                  u.lanes |= n, g = u.alternate, g !== null && (g.lanes |= n), yl(
                    u.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                g = g.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(o(341));
              h.lanes |= n, y = h.alternate, y !== null && (y.lanes |= n), yl(h, n, t), h = u.sibling;
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
          At(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = tn(l), i = i(l), t.flags |= 1, At(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = dn(i, t.pendingProps), l = dn(i.type, l), Lc(e, t, i, l, n);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Ys(e, t), t.tag = 1, $t(i) ? (e = !0, Ps(t)) : e = !1, Gi(t, n), Cc(t, i, l), Ll(t, i, l, n), Il(null, t, i, !0, e, n);
      case 19:
        return Kc(e, t, n);
      case 22:
        return $c(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function hd(e, t) {
    return us(e, t);
  }
  function _m(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sn(e, t, n, i) {
    return new _m(e, t, n, i);
  }
  function ro(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Am(e) {
    if (typeof e == "function") return ro(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === we) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = sn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function aa(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") ro(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case M:
        return Ni(n.children, l, u, t);
      case D:
        h = 8, l |= 8;
        break;
      case ne:
        return e = sn(12, n, t, l | 2), e.elementType = ne, e.lanes = u, e;
      case J:
        return e = sn(13, n, t, l), e.elementType = J, e.lanes = u, e;
      case he:
        return e = sn(19, n, t, l), e.elementType = he, e.lanes = u, e;
      case ce:
        return la(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case re:
            h = 10;
            break e;
          case ye:
            h = 9;
            break e;
          case we:
            h = 11;
            break e;
          case H:
            h = 14;
            break e;
          case le:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = sn(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function Ni(e, t, n, i) {
    return e = sn(7, e, i, t), e.lanes = n, e;
  }
  function la(e, t, n, i) {
    return e = sn(22, e, i, t), e.elementType = ce, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function so(e, t, n) {
    return e = sn(6, e, null, t), e.lanes = n, e;
  }
  function ao(e, t, n) {
    return t = sn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Pm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ra(0), this.expirationTimes = Ra(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ra(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function lo(e, t, n, i, l, u, h, y, g) {
    return e = new Pm(e, t, n, y, g), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = sn(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jl(u), e;
  }
  function bm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: B, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
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
            if ($t(t.type)) {
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
      if ($t(n)) return Bu(e, n, t);
    }
    return t;
  }
  function pd(e, t, n, i, l, u, h, y, g) {
    return e = lo(n, i, !0, e, l, u, h, y, g), e.context = md(null), n = e.current, i = Pt(), l = ii(n), u = On(i, l), u.callback = t ?? null, qn(n, u, l), e.current.lanes = l, vr(e, l, i), Dt(e, i), e;
  }
  function oa(e, t, n, i) {
    var l = t.current, u = Pt(), h = ii(l);
    return n = md(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, h), e !== null && (mn(e, l, h, u), Ds(e, l, h)), h;
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
  function Rm() {
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
      }), t[An] = null;
    }
  };
  function ca(e) {
    this._internalRoot = e;
  }
  ca.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && iu(e);
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
  function Lm(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var $ = ua(h);
          u.call($);
        };
      }
      var h = pd(t, i, e, 0, null, !1, !1, "", yd);
      return e._reactRootContainer = h, e[An] = h.current, Ar(e.nodeType === 8 ? e.parentNode : e), xi(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var y = i;
      i = function() {
        var $ = ua(g);
        y.call($);
      };
    }
    var g = lo(e, 0, !1, null, null, !1, !1, "", yd);
    return e._reactRootContainer = g, e[An] = g.current, Ar(e.nodeType === 8 ? e.parentNode : e), xi(function() {
      oa(t, g, n, i);
    }), g;
  }
  function fa(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var y = l;
        l = function() {
          var g = ua(h);
          y.call(g);
        };
      }
      oa(t, h, e, l);
    } else h = Lm(n, t, e, l, i);
    return ua(h);
  }
  Zo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pr(t.pendingLanes);
          n !== 0 && (La(t, n | 1), Dt(t, se()), (ze & 6) === 0 && (Xi = se() + 500, Xn()));
        }
        break;
      case 13:
        xi(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = Pt();
            mn(i, e, 1, l);
          }
        }), oo(e, 1);
    }
  }, Oa = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Pt();
        mn(t, e, 134217728, n);
      }
      oo(e, 134217728);
    }
  }, qo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Ln(e, t);
      if (n !== null) {
        var i = Pt();
        mn(n, e, t, i);
      }
      oo(e, t);
    }
  }, eu = function() {
    return We;
  }, tu = function(e, t) {
    var n = We;
    try {
      return We = e, t();
    } finally {
      We = n;
    }
  }, Rt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ie(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = _s(i);
              if (!l) throw Error(o(90));
              ue(i), Ie(i, l);
            }
          }
        }
        break;
      case "textarea":
        Be(e, n);
        break;
      case "select":
        t = n.value, t != null && Xe(e, !!n.multiple, t, !1);
    }
  }, ss = to, $e = xi;
  var Om = { usingClientEntryPoint: !1, Events: [Rr, Ii, _s, vn, kn, to] }, Wr = { findFiberByHostInstance: hi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $m = { bundleType: Wr.bundleType, version: Wr.version, rendererPackageName: Wr.rendererPackageName, rendererConfig: Wr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = hr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Wr.findFiberByHostInstance || Rm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ha.isDisabled && ha.supportsFiber) try {
      cs = ha.inject($m), yn = ha;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Om, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!co(t)) throw Error(o(200));
    return bm(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!co(e)) throw Error(o(299));
    var n = !1, i = "", l = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = lo(e, 1, !1, null, null, n, !1, i, l), e[An] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new uo(t);
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
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = pd(t, null, e, 1, n ?? null, l, !1, u, h), e[An] = t.current, Ar(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
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
        e._reactRootContainer = null, e[An] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = to, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!da(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return fa(e, t, n, !1, i);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Cd;
function Um() {
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
  return s(), mo.exports = Hm(), mo.exports;
}
var Td;
function Gm() {
  if (Td) return ma;
  Td = 1;
  var s = Um();
  return ma.createRoot = s.createRoot, ma.hydrateRoot = s.hydrateRoot, ma;
}
var Wm = Gm();
const Qm = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], R = ["ohut e", "B", "G", "D", "A", "paksu E"], k = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], T = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], _ = {
    mp: {
      name: "mollipentatoninen",
      base: k,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: k,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: k,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: k,
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
      base: T,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: T,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: T,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: T,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, O = 26, L = 72, S = 30, w = 54, V = 34, N = 11, F = (O + L) / 2, z = S + (c.length - 1) * V + 30, G = (K) => L + K * w, B = (K) => K === 0 ? F : G(K) - w / 2, M = (K) => S + K * V;
  function D(K, ee, C) {
    const X = a.indexOf(s[K][0]) + Number(C.slice(-1)) - 1, oe = X % a.length, ue = o[oe] + 12 * Math.floor(X / a.length), fe = K + ee - ue;
    return a[oe] + (fe < 0 ? "♭" : "♯").repeat(Math.abs(fe));
  }
  function ne(K) {
    return [...K.base, ...K.add].sort((ee, C) => ee[0] - C[0]);
  }
  function re(K, ee, C) {
    const X = ee + (C ? 1 : 0), oe = m[X % m.length], ue = Math.min(...oe.map(([Ie]) => Ie)), fe = Math.max(...oe.map(([, Ie]) => Ie));
    let Me = (K - d % 12 + 12) % 12 - (C ? 8 : 5) + 12 * Math.floor(X / m.length);
    return ue + Me < 0 && (Me += 12), fe + Me > f.pentatonic && (Me -= 12), {
      strings: oe.map((Ie) => Ie.map((Qe) => Qe + Me)),
      start: ue + Me,
      end: fe + Me
    };
  }
  function ye(K, ee, C) {
    const X = C[ee], oe = (K + X - d % 12 + 12) % 12, ue = d + oe - X, fe = c.map((ve, Ae) => {
      const Me = ee + (c.length - 1 - Ae) * 3;
      return [Me, Me + 1, Me + 2].map((Ie) => {
        const Qe = Math.floor(Ie / C.length), Ye = C[Ie % C.length];
        return ue + Ye + 12 * Qe - ve;
      });
    });
    return {
      strings: fe,
      start: Math.min(...fe.map((ve) => ve[0])),
      end: Math.max(...fe.map((ve) => ve.at(-1)))
    };
  }
  function we(K, ee) {
    const C = [], X = Math.ceil(-K.end / 12) * 12;
    for (let ue = X; K.start + ue <= ee; ue += 12) {
      const fe = K.strings.map((Ae) => Ae.map((Me) => Me + ue).filter((Me) => Me >= 0 && Me <= ee)), ve = fe.flat();
      C.push({
        strings: fe,
        start: Math.min(...ve),
        end: Math.max(...ve),
        partial: K.start + ue < 0 || K.end + ue > ee
      });
    }
    const oe = C.filter((ue) => !ue.partial);
    return oe.length ? oe : C;
  }
  function J(K) {
    return ne(K).length === p;
  }
  function he(K, ee, C) {
    const X = J(ee);
    K.querySelector('[value="3nps"]').disabled = !X, K.value = X ? C ?? "3nps" : "pentatonic";
  }
  function H(K, ee, C, X, oe) {
    const ue = ne(ee).map(([fe]) => fe);
    return X.map((fe) => {
      const ve = fe - 1, Ae = C === "3nps" ? ye(K, ve, ue) : re(K, ve, ee.base === T), Me = oe === void 0 ? [Ae] : we(Ae, oe);
      return { number: fe, positions: Me };
    });
  }
  function le(K, ee) {
    const C = K.getBoundingClientRect(), X = K.querySelectorAll(ee);
    let oe = 1 / 0;
    X.forEach((ue) => {
      const fe = ue.getBoundingClientRect();
      let ve = 0;
      fe.left < C.left ? ve = fe.left - C.left - 8 : fe.right > C.right && (ve = fe.right - C.right + 8), Math.abs(ve) < Math.abs(oe) && (oe = ve);
    }), Number.isFinite(oe) && (K.scrollLeft += oe);
  }
  function ce(K, ee = !1) {
    const C = K === "3nps" ? p : m.length;
    return Array.from({ length: C }, (X, oe) => {
      const ue = oe + 1;
      return '<label class="box-toggle" data-box="' + ue + '"><input type="checkbox" value="' + ue + '"' + (ee && oe === 0 ? " checked" : "") + "> Boksi " + ue + "</label>";
    }).join("");
  }
  function W(K, ee) {
    const C = ne(ee), X = new Map(C.map(([ue, fe]) => [ue, D(K, ue, fe)])), oe = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return C.flatMap(([ue, fe]) => oe.flatMap(({ suffix: ve, base: Ae }) => {
      const Me = Ae.map(([Ie]) => X.get((ue + Ie) % 12));
      return Me.every(Boolean) ? {
        root: (K + ue) % 12,
        degree: Number(String(fe).replace(/\D/g, "")),
        name: Me[0] + ve,
        notes: Me,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function ae(K, ee) {
    const C = K.base.map(([ue]) => (K.root + ue) % 12), X = c.map((ue) => {
      const fe = [];
      for (let ve = 0; ve <= ee; ve++) {
        const Ae = (ue + ve) % 12;
        C.includes(Ae) && fe.push({ fret: ve, pitch: Ae });
      }
      return fe;
    }), oe = [];
    for (let ue = 0; ue <= X.length - 3; ue++)
      for (const fe of X[ue])
        for (const ve of X[ue + 1])
          if (fe.pitch !== ve.pitch)
            for (const Ae of X[ue + 2]) {
              if (Ae.pitch === fe.pitch || Ae.pitch === ve.pitch) continue;
              const Me = [fe.fret, ve.fret, Ae.fret], Ie = Math.min(...Me), Qe = Math.max(...Me);
              if (Qe - Ie > 3) continue;
              const Ye = Array(c.length).fill(null);
              Ye.splice(ue, 3, ...Me), oe.push({ strings: Ye, low: Ie, high: Qe });
            }
    return oe.sort((ue, fe) => ue.high - fe.high || ue.low - fe.low);
  }
  const q = {
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
  }, v = [
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
  function E(K, ee) {
    const C = q[K + ":" + ee];
    if (C) return { frets: C, barre: null };
    let X = null;
    return v.forEach(({ string: oe, openPC: ue, shapes: fe }) => {
      const ve = fe[ee];
      if (!ve) return;
      let Ae = (K - ue + 12) % 12;
      if (Ae + Math.min(...ve.filter((Qe) => Qe !== null)) < 0 && (Ae += 12), X && X.fret <= Ae) return;
      const Me = ve.map((Qe) => Qe === null ? null : Ae + Qe), Ie = Ae > 0 && ve.at(-1) === 0 ? { fret: Ae, from: oe, to: ve.length - 1 } : null;
      X = { fret: Ae, frets: Me, barre: Ie };
    }), X && { frets: X.frets, barre: X.barre };
  }
  function ie(K, { frets: ee, barre: C }, X) {
    const Me = [...c].reverse(), Ie = ee.filter((Be) => Be > 0), Ye = !Ie.length || Math.max(...Ie) <= 4 && (ee.includes(0) || Math.min(...Ie) === 1) ? 1 : Math.min(...Ie), Ge = (Be) => 24 + Be * 14, Xe = (Be) => 30 + (Be - Ye) * 18 + 18 / 2, ut = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (ut + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + X + "-ote paksusta kielestä ohueen: " + ee.map((Be) => Be ?? "x").join(" ") + '">';
    for (let Be = 0; Be <= 4; Be++)
      Je += '<line class="' + (Be === 0 && Ye === 1 ? "nut" : "fret") + '" x1="' + Ge(0) + '" y1="' + (30 + Be * 18) + '" x2="' + Ge(5) + '" y2="' + (30 + Be * 18) + '"/>';
    return ee.forEach((Be, it) => {
      Je += '<line class="string" x1="' + Ge(it) + '" y1="30" x2="' + Ge(it) + '" y2="' + ut + '"/>';
    }), Ye > 1 && (Je += '<text class="fret-label" x="15" y="' + (Xe(Ye) + 4) + '">' + Ye + "</text>"), C && (Je += '<rect class="barre" x="' + (Ge(C.from) - 6.5) + '" y="' + (Xe(C.fret) - 6.5) + '" width="' + ((C.to - C.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ee.forEach((Be, it) => {
      if (Be === null) {
        Je += '<text class="marker" x="' + Ge(it) + '" y="22">×</text>';
        return;
      }
      const Vt = (Me[it] + Be) % 12 === K;
      if (Be === 0) {
        Je += '<circle class="open' + (Vt ? " root-open" : "") + '" cx="' + Ge(it) + '" cy="18" r="4.5"/>';
        return;
      }
      C && Be === C.fret && it >= C.from && it <= C.to && !Vt || (Je += '<circle class="' + (Vt ? "root" : "tone") + '" cx="' + Ge(it) + '" cy="' + Xe(Be) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function je(K, ee) {
    const C = new URLSearchParams(location.search), X = s.indexOf(C.get("toonikka")), oe = C.get("asteikko");
    return {
      rootPC: X === -1 ? K : X,
      scaleId: Object.hasOwn(_, oe) ? oe : ee
    };
  }
  function Se(K, ee, C) {
    return K + "?" + new URLSearchParams({ toonikka: s[ee], asteikko: C });
  }
  function U(K, ee, C, {
    boxes: X = [],
    onlyBoxNotes: oe = !1,
    automatic: ue = !0,
    focusDegree: fe = "",
    grip: ve = null,
    barre: Ae = null,
    label: Me = s[K] + " " + ee.name,
    notes: Ie = null,
    targets: Qe = !1,
    muteFret: Ye = null
  } = {}) {
    const Ge = G(C), Xe = Ge + 48, ut = Xe + 28, Je = S - 14, Be = M(c.length - 1) + 14, it = Be - Je, Vt = ue ? 680 : Math.ceil(ut * 0.64), Qt = X.flatMap((Te) => Te.positions), Nt = {};
    ee.base.forEach(([Te, Pe]) => Nt[(K + Te) % 12] = { deg: Pe, added: !1 }), ee.add.forEach(([Te, Pe]) => Nt[(K + Te) % 12] = { deg: Pe, added: !0 });
    const ln = c.map((Te, Pe) => !!ve && ve[Pe] === null), Yt = !!ve && Ye !== null, Jt = R.filter((Te, Pe) => ln[Pe]).reverse(), _t = Me + ". " + C + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Jt.length ? " Soittamatta jäävät kielet: " + Jt.join(", ") + "." : "");
    let Ne = '<svg viewBox="0 0 ' + ut + " " + z + '" style="min-width:' + Vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + _t + '">';
    Ne += '<rect x="' + O + '" y="' + Je + '" width="' + (L - O) + '" height="' + it + '" rx="6" fill="#2a2338"/>', Ne += '<rect x="' + L + '" y="' + Je + '" width="' + (Ge - L) + '" height="' + it + '" fill="#231a12"/>', Ne += '<rect x="' + Ge + '" y="' + Je + '" width="' + (ut - Ge - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let Te = 1; Te <= C; Te++)
      Ne += '<line x1="' + G(Te) + '" y1="' + Je + '" x2="' + G(Te) + '" y2="' + Be + '" stroke="#6f5b47" stroke-width="2"/>';
    Ne += '<rect x="' + (L - 3) + '" y="' + Je + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', Ne += '<rect x="' + (Xe - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', Ne += '<rect x="' + (Xe - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Bt = (Je + Be) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Te) => Te <= C).forEach((Te) => Ne += '<circle cx="' + B(Te) + '" cy="' + Bt + '" r="5.5" fill="#7a6550"/>');
    for (let Te = 12; Te <= C; Te += 12)
      Ne += '<circle cx="' + B(Te) + '" cy="' + (Bt - V) + '" r="5.5" fill="#7a6550"/>', Ne += '<circle cx="' + B(Te) + '" cy="' + (Bt + V) + '" r="5.5" fill="#7a6550"/>';
    Ne += '<text x="' + F + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', Ne += '<text x="' + L + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', Ne += '<text x="' + Xe + '" y="' + (z - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Te = 1; Te <= C; Te++)
      Ne += '<text x="' + B(Te) + '" y="' + (z - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Te + "</text>";
    if (X.forEach(({ number: Te, positions: Pe }) => {
      Pe.forEach((Re) => {
        const He = Re.partial ? "box-highlight box-partial" : "box-highlight";
        Ne += '<g class="' + He + '" data-box="' + Te + '" aria-hidden="true">';
        const st = Re.strings.find((vt) => vt.length), Rt = (B(st[0]) + B(st.at(-1))) / 2;
        Ne += '<text class="box-number" x="' + Rt + '" y="12">' + Te + "</text>", Re.strings.forEach((vt, Xt) => {
          if (!vt.length) return;
          const En = B(vt[0]) - 16, vn = B(vt.at(-1)) - B(vt[0]) + 32;
          Ne += '<rect class="box-band" x="' + En + '" y="' + (M(Xt) - 14) + '" width="' + vn + '" height="28" rx="14"/>';
        }), Ne += "</g>";
      });
    }), c.forEach((Te, Pe) => {
      const Re = 1 + Pe * 0.45, He = M(Pe), st = ln[Pe] && !Yt;
      st ? Ne += '<text class="muted-mark" x="' + F + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : ln[Pe] && Ye === 0 || (Ne += '<line x1="' + (O + 4) + '" y1="' + He + '" x2="' + (L - 4) + '" y2="' + He + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Ne += "<g" + (st ? ' opacity=".35"' : "") + ">", Ne += '<line x1="' + L + '" y1="' + He + '" x2="' + (Xe + 5) + '" y2="' + He + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', Ne += '<circle cx="' + (Xe + 5) + '" cy="' + He + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', Ne += "</g>", Ne += '<text x="13" y="' + (He + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[Pe] + "</text>";
    }), ve && Ae && Ae.fret >= 1 && Ae.fret <= C) {
      const Te = M(Ae.from), Pe = M(Ae.to), Re = Math.min(Te, Pe) - 6, He = Math.max(Te, Pe) + 6;
      Ne += '<rect class="barre-indicator" x="' + (B(Ae.fret) - 7) + '" y="' + Re + '" width="14" height="' + (He - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (Ne += '<g class="fret-targets">', c.forEach((Te, Pe) => {
      for (let Re = 0; Re <= C; Re++) {
        const He = Re ? R[Pe] + "-kieli, " + Re + ". nauha" : "vapaa " + R[Pe] + "-kieli", st = Re ? w : L - O - 6;
        Ne += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Pe + '" data-fret="' + Re + '" data-midi="' + (Te + Re) + '" aria-label="' + He + '" x="' + (B(Re) - st / 2) + '" y="' + (M(Pe) - V / 2) + '" width="' + st + '" height="' + V + '" fill="transparent"/>';
      }
    }), Ne += "</g>"), (Ie ?? []).forEach(({ string: Te, fret: Pe, label: Re, kind: He }) => {
      Ne += '<g class="octave-note octave-' + He + '">', Ne += '<circle cx="' + B(Pe) + '" cy="' + M(Te) + '" r="' + N + '"/>', Ne += '<text x="' + B(Pe) + '" y="' + (M(Te) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", Ne += "</g>";
    }), ve && (Ne += '<g class="grip-notes">'), (Ie ? [] : c).forEach((Te, Pe) => {
      for (let Re = 0; Re <= C; Re++) {
        const He = (Te + Re) % 12;
        if (!(He in Nt) || ve && ve[Pe] !== Re || oe && !Qt.some(({ strings: vn }) => {
          const kn = vn[Pe];
          return kn.length > 0 && Re >= kn[0] && Re <= kn.at(-1);
        })) continue;
        const st = Nt[He], Rt = st.deg === "1", vt = st.added ? "#f0a13c" : Rt ? "#4b2fd6" : "#6d4aff", Xt = st.added ? "#1a1430" : "#fff";
        st.deg === fe && (Ne += '<circle class="focus-note" cx="' + B(Re) + '" cy="' + M(Pe) + '" r="14.5"/>');
        const En = ve ? ' data-string="' + (Pe + 1) + '" data-fret="' + Re + '" data-degree="' + st.deg + '"' : "";
        Ne += "<circle" + En + ' cx="' + B(Re) + '" cy="' + M(Pe) + '" r="' + N + '" fill="' + vt + '" stroke="' + (Rt ? "#fff" : "#1a1430") + '" stroke-width="' + (Rt ? 2.5 : 1) + '"/>', Ne += '<text x="' + B(Re) + '" y="' + (M(Pe) + 3.5) + '" font-size="' + (st.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Xt + '" text-anchor="middle">' + st.deg + "</text>";
      }
    }), ve && (Ne += "</g>"), Yt && ln.forEach((Te, Pe) => {
      if (!Te) return;
      const Re = B(Ye), He = M(Pe);
      Ne += '<g class="muted-mark grip-mute" data-string="' + (Pe + 1) + '" data-fret="' + Ye + '">', Ne += '<circle cx="' + Re + '" cy="' + He + '" r="9" fill="' + (Ye === 0 ? "#2a2338" : "#231a12") + '"/>', Ne += '<text x="' + Re + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Ne += "</g>";
    }), Ne += "</svg>", Ne;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: c,
    PENT_MAJ: T,
    SCALES: _,
    noteName: D,
    scaleNotes: ne,
    scaleTriads: W,
    triadGrips: ae,
    chordGrip: E,
    renderChordDiagram: ie,
    selectionFromURL: je,
    selectionHref: Se,
    renderBoard: U,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: J,
    syncBoxSystem: he,
    fingeringBoxes: H,
    boxOptions: ce,
    revealPositions: le
  };
})();
globalThis.MusicMapFretboard = Qm;
function ko(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Ym(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Jm(s) {
  const a = Ym(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const Fe = globalThis.MusicMapFretboard, Ve = (s) => (s % 12 + 12) % 12, Xm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Zm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], be = (s, a = !1, o = !1) => (a ? Zm : Xm)[Ve(s)] + (o ? Math.floor(s / 12) - 1 : ""), oi = (s) => Fe.CHROM[Ve(s)], Zr = (s, a, o) => Fe.noteName(Ve(s), a, o);
function qm(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Ve(s) < 2 ? o - 1 : a[0] === "C" && Ve(s) > 9 ? o + 1 : o;
}
const an = ["ohut E", "B", "G", "D", "A", "paksu E"], Ho = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], kf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], ep = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ti = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Oe = (s, a) => ({ string: s, fret: a, midi: Fe.OPEN_PITCHES[s] + a });
function ur(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Oe(c, a + f)));
}
const Ue = (s) => `${s.string}:${s.fret}`, Ci = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, yf = (s, a) => a === "maj" ? `${oi(s)}-duurisointu` : a === "min" ? `${oi(s)}-mollisointu` : `${oi(s)}7-sointu`, qr = [
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
function gf(s, a) {
  const o = Md[a] ?? Md.E, c = Ve(s - o.root);
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
  return a.check = wn(s.check, ["class", "pitch"], a.check), a.input = wn(s.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : a.rounds, a.root = Math.round(li(s.root, 0, 11, a.root)), a.scale = typeof s.scale == "string" && Object.hasOwn(Fe.SCALES, s.scale) ? s.scale : a.scale, a.box = Math.round(li(s.box, 0, 5, a.box)), a.order = wn(s.order, ["random", "up", "down"], a.order), a.chord = wn(s.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = wn(s.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = wn(s.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ya.intervals]), a.direction = wn(s.direction, ["up", "down", "both"], a.direction), a.hints = wn(s.hints, ["off", "always", "fade"], a.hints), a.activity = wn(s.activity, ["play", "degree"], a.activity), a.minRms = li(s.minRms, 1e-3, 0.15, a.minRms), a.clarity = li(s.clarity, 0.85, 0.99, a.clarity), a.stability = li(s.stability, 120, 800, a.stability), a.cents = li(s.cents, 10, 45, a.cents), a.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", a;
}
function tp(s, a) {
  const o = new URLSearchParams(s), c = { ...a };
  for (const [d, f] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(d) && Object.assign(c, { [f]: o.get(d) });
  for (const [d, f] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(d) && (c[f] = Number(o.get(d)));
  o.has("kielet") && (c.strings = o.get("kielet").split(",").map((d) => Number(d) - 1)), o.has("intervallit") && (c.intervals = o.get("intervallit").split(",").map(Number));
  for (const [d, f] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(d) && (c[f] = o.get(d) === "1");
  if (o.has("toonikka")) {
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Fe.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Na(c);
}
function np(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: Fe.CHROM[s.root],
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
const Mi = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, In = (s) => s.mode === "scale" && s.order !== "random", jf = (s) => ["note", "degree"].includes(Mi(s)) ? "class" : In(s) ? "pitch" : s.check, pa = (s) => Mi(s) === "mic", _d = "musiikin-kartta:harjoittelu", xf = 3, To = () => ({ version: xf, settings: { ...ya }, stats: {}, recent: [], sessions: [] }), Sf = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, pn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function ip(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => pn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || pn(s.errors)) && (s.ema === void 0 || pn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || pn(s.emaMs));
}
function rp(s) {
  return !!s && typeof s.id == "string" && pn(s.count) && pn(s.first) && s.first <= s.count && pn(s.ms) && pn(s.at) && (s.solo === void 0 || pn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || pn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Ad(s) {
  if (!s) return To();
  const a = JSON.parse(s);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !ip(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !pn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !rp(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Na(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: xf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Pd = 2500, sp = 8e3, bd = 0.3, es = (s) => s.ema ?? s.correct / s.attempts, ts = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Uo(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (ts(s) - Pd) / (sp - Pd)));
  return es(s) * 0.65 + a * 0.35;
}
function ap(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Uo(s)) * 3;
}
class Rd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Ad(a?.getItem(_d) ?? null);
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
    const o = Sf(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? es(c) + bd * (d - es(c)) : d,
      emaMs: c.attempts ? ts(c) + bd * (a.ms - ts(c)) : a.ms
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
    this.data = { ...To(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const lp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), op = ["e", "B", "G", "D", "A", "E"];
function wf({ string: s }) {
  return /* @__PURE__ */ r.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ r.jsx("strong", { children: op[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ r.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ r.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Nf = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), up = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Ef({ min: s, max: a }) {
  return /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - s + 1 }, (o, c) => {
      const d = s + c;
      return /* @__PURE__ */ r.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : lp.has(d) ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ui({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta" }) {
  const p = { "--cols": s.max - s.min + 1 }, { strings: m, min: j, max: R } = s, [k, T] = P.useState({ string: Math.min(...m), fret: j }), _ = P.useRef(null), O = new Map(a.map((N) => [Ue(N), N])), L = a.map((N) => `${Ue(N)}${N.kind}`).join(",");
  P.useEffect(() => {
    const N = _.current, F = N?.querySelector(".target, .anchor");
    N && F && (N.scrollLeft += F.getBoundingClientRect().left - N.getBoundingClientRect().left - N.clientWidth / 2 + F.clientWidth / 2);
  }, [L]);
  const [S, w] = P.useState({ left: !1, right: !1 });
  P.useEffect(() => {
    const N = _.current;
    if (!N) return;
    const F = () => {
      const G = N.scrollLeft > 2, B = N.scrollLeft + N.clientWidth < N.scrollWidth - 2;
      w((M) => M.left === G && M.right === B ? M : { left: G, right: B });
    };
    F(), N.addEventListener("scroll", F, { passive: !0 });
    const z = typeof ResizeObserver > "u" ? null : new ResizeObserver(F);
    return z?.observe(N), () => {
      N.removeEventListener("scroll", F), z?.disconnect();
    };
  }, [L, j, R]);
  const V = m.includes(k.string) && k.fret >= j && k.fret <= R ? k : { string: Math.min(...m), fret: j };
  return /* @__PURE__ */ r.jsxs("div", { className: "fret-wrap" + (S.left ? " more-left" : "") + (S.right ? " more-right" : ""), children: [
    (S.left || S.right) && /* @__PURE__ */ r.jsxs("p", { className: "fret-scroll-hint", children: [
      S.left && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      S.left && S.right ? "molemmilla puolilla" : S.right ? "oikealla" : "vasemmalla",
      S.right && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { ref: _, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board", style: p, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx(Ef, { min: j, max: R }),
      /* @__PURE__ */ r.jsx("tbody", { children: Fe.OPEN_PITCHES.map((N, F) => /* @__PURE__ */ r.jsxs("tr", { className: m.includes(F) ? "" : "unused", style: Nf(F), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${F + 1}. kieli: ${an[F]}${o.includes(F) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(wf, { string: F }),
          o.includes(F) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        ur([F], j, R).map((z) => {
          const G = O.get(Ue(z)), B = `${an[F]}-kieli, ${Ti(z.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${z.fret === 0 ? "open-fret " : ""}${G ? G.kind === "answer" ? "target" : G.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": F,
              "data-fret": z.fret,
              tabIndex: V.string === F && V.fret === z.fret ? 0 : -1,
              onFocus: () => T(z),
              onKeyDown: (M) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) return;
                M.preventDefault();
                const D = [...m].sort((we, J) => we - J), ne = D.indexOf(F), re = M.key === "ArrowUp" ? D[Math.max(0, ne - 1)] : M.key === "ArrowDown" ? D[Math.min(D.length - 1, ne + 1)] : F, ye = M.key === "Home" ? j : M.key === "End" ? R : Math.max(j, Math.min(R, z.fret + (M.key === "ArrowRight" ? 1 : M.key === "ArrowLeft" ? -1 : 0)));
                M.currentTarget.closest("table")?.querySelector(`button[data-string="${re}"][data-fret="${ye}"]`)?.focus();
              },
              disabled: c || !m.includes(F),
              "aria-label": B + (G ? `, ${up[G.kind]}${G.label ? " " + G.label : ""}` : ""),
              onClick: () => d?.(z),
              children: G ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: G.label || "●" }) : null
            }
          ) }, z.fret);
        })
      ] }, F)) })
    ] }) })
  ] });
}
function cp({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, j = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx(Ef, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: Fe.OPEN_PITCHES.map((R, k) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(k) ? "" : "unused", style: Nf(k), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${k + 1}. kieli: ${an[k]}`, children: /* @__PURE__ */ r.jsx(wf, { string: k }) }),
      ur([k], p, m).map((T) => {
        const _ = Object.hasOwn(a, j + Ue(T)) ? a[j + Ue(T)] : void 0, O = Uo(_), L = O === null ? "unseen" : _.attempts < 3 ? "few" : O >= 0.8 ? "strong" : O >= 0.5 ? "growing" : "weak", S = `${an[k]}-kieli, ${Ti(T.fret)}, ${be(T.midi, d)}`, w = _ ? `${Math.round(O * 100)} %, ${_.correct}/${_.attempts} heti oikein, viime aikoina ${Math.round(es(_) * 100)} % ja ${(ts(_) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${T.fret === 0 ? "open-fret " : ""}${L}`, title: `${S}: ${w}`, children: [
          /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: O === null ? "·" : _.attempts < 3 ? "?" : Math.round(O * 100) }),
          /* @__PURE__ */ r.jsxs("span", { className: "sr-only", children: [
            S,
            ": ",
            w
          ] })
        ] }, T.fret);
      })
    ] }, k)) })
  ] }) });
}
const dp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", _a = (s) => s.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, Cf = (s) => Fe.fingeringBoxes(s.root, Fe.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function _i(s) {
  if (s.mode === "caged") {
    const a = gf(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const a = Cf(s);
    return { strings: s.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function fp(s) {
  const a = _i(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function is(s) {
  const a = _i(s), o = ur(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Ve(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(gf(s.root, s.shape).map(Ue));
    return o.filter((p) => f.has(Ue(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => _a(s).some(([p]) => Ve(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return c;
  const d = Cf(s);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function Tf(s, a) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((c) => s.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function hp(s) {
  const a = _a(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function Mo(s) {
  const a = is(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = hp(s).filter(([d]) => !a.some((f) => Ve(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !Tf(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function mp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function Mf(s) {
  return In(s) ? new Set(is(s).map((a) => a.midi)).size : s.rounds;
}
function pp(s, a) {
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
const Ld = (s, a) => s.mode === "caged" ? `caged:${s.root}:${s.shape}:${a}` : s.mode === "chord" ? `chord:${s.root}:${s.chord}:${a}:${s.activity}` : `scale:${s.root}:${s.scale}:${a}:${s.activity}`;
function Ei(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function vp(s, a, o = {}, c, d = Math.random) {
  const f = Mo(s);
  if (f) throw new Error(f);
  const p = jf(s), m = Mi(s), j = p === "pitch", R = (M) => s.weak ? ap(o[Sf({ input: m, check: p, hint: !1, item: M })]) : 1, k = (M) => qi(M, M.map(() => 1), d), T = is(s), _ = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const M = Ei(T, (re) => !!c && Ue(re) === Ue(c.position)), D = qi(M, M.map((re) => R(`notes:${Ue(re)}`)), d), ne = be(D.midi, s.flats, j);
    return {
      ..._,
      position: D,
      midi: D.midi,
      name: ne,
      item: `notes:${Ue(D)}`,
      prompt: `Etsi ${ne} ${Ho[D.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const M = (ye) => `ear-note:${Ve(ye.midi)}${s.reference ? ":ref" : ""}`, D = Ei(T, (ye) => !!c && Ve(ye.midi) === Ve(c.midi)), ne = qi(D, D.map((ye) => R(M(ye))), d), re = s.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ..._,
      position: ne,
      midi: ne.midi,
      name: be(ne.midi, s.flats),
      item: M(ne),
      choices: "note",
      reference: re,
      sound: re === void 0 ? [ne.midi] : [re, ne.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const M = Ei(T, (ne) => !!c && ne.midi === c.midi), D = qi(M, M.map((ne) => R(`repeat:${ne.midi}`)), d);
    return {
      ..._,
      position: D,
      midi: D.midi,
      name: be(D.midi, s.flats, !0),
      item: `repeat:${D.midi}`,
      sound: [D.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const M = Ei(Tf(s, T), (re) => c?.interval === re.iv && c?.direction === re.direction), D = qi(M, M.map((re) => R(`interval:${re.iv}:${re.direction}`)), d), ne = k(Ei(D.pairs, (re) => c?.reference === re.reference.midi));
    return {
      ..._,
      position: ne.target,
      midi: ne.target.midi,
      name: be(ne.target.midi, s.flats, !0),
      item: `interval:${D.iv}:${D.direction}`,
      interval: D.iv,
      direction: D.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${D.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${be(ne.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const O = _a(s);
  let L, S = 0;
  if (In(s)) {
    const M = mp(s, T);
    S = M.length, L = M[a % M.length];
  } else {
    const M = O.filter(([re]) => T.some((ye) => Ve(ye.midi - s.root) === re)), D = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [O[a % O.length]] : O.filter(([, re]) => re.endsWith(s.chordTone)) : Ei(M, ([re]) => c?.interval === re), [ne] = qi(D, D.map(([re]) => R(Ld(s, re))), d);
    L = k(Ei(T.filter((re) => Ve(re.midi - s.root) === ne), (re) => !!c && Ue(re) === Ue(c.position)));
  }
  const w = Ve(L.midi - s.root), V = O.find(([M]) => M === w)[1], N = Zr(s.root, w, V), F = j ? N + qm(L.midi, N) : N, z = s.mode === "scale" ? `${oi(s.root)}-${Fe.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${oi(s.root)}-duurisointu, ${s.shape}-muoto` : yf(s.root, s.chord), G = s.mode !== "caged" && s.activity === "degree", B = G ? `${z}: mikä aste on ${N}?` : S ? `${z} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % S + 1}/${S}: ${V}. aste (${F}).` : `${z}: etsi ${V}. aste${j ? ` (${F})` : ""}.`;
  return {
    ..._,
    position: L,
    midi: L.midi,
    name: F,
    item: Ld(s, w),
    prompt: B,
    degree: V,
    interval: w,
    choices: G ? "degree" : "position"
  };
}
function _o(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Ve(s) === Ve(a) : s === a);
}
function _f(s, a, o) {
  return _o(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : dp(s) ? is(s).some((c) => Ue(c) === Ue(o)) : !0 : !1;
}
function kp(s, a) {
  const o = _i(s);
  return ur(o.strings, o.min, o.max).filter((c) => _f(s, a, c));
}
const wt = (s, a, o) => ({ ...s, label: a, kind: o }), yp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function gp(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = _i(s), f = ur(d.strings, d.min, d.max), p = kp(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((V) => wt(V, a.name, "answer")), text: `${a.name} on ${kf[a.position.string]}: ${Ti(a.position.fret)}.` };
    const S = f.find((V) => V.string === a.position.string), w = be(S.midi, s.flats);
    return {
      marks: [wt(S, w, "anchor")],
      text: `Apupiste: ${ep[S.string]} ${S.fret === 0 ? "vapaa sävel" : S.fret + ". nauhan sävel"} on ${w}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [wt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [wt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${an[a.position.string]}-kieli, ${Ti(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((S) => wt(S, be(S.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Ho[a.position.string]}.` };
  if (s.mode === "interval") {
    const S = be(a.reference, s.flats, !0), w = f.filter((V) => V.midi === a.reference).map((V) => wt(V, S, "anchor"));
    return c ? {
      marks: [...w, ...p.map((V) => wt(V, be(V.midi, s.flats, !0), "answer"))],
      text: `${yp(qr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${S} → ${a.name}.`
    } : { marks: w, text: `Alkusävel ${S} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = is(s), j = _a(s), R = (S) => j.find(([w]) => w === Ve(S.midi - s.root))?.[1] ?? "", k = Zr(s.root, a.interval, a.degree), T = m.filter((S) => Ve(S.midi - s.root) === 0), _ = (S) => p.some((w) => Ue(w) === Ue(S)), O = `${a.degree}. aste on ${k}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((S) => wt(S, R(S), _(S) ? "answer" : "shape")), text: O } : { marks: m.map((S) => wt(S, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const L = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const S = m.filter((w) => Ve(w.midi) === Ve(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : T).map((w) => wt(w, "1", "anchor")), ...S.map((w) => wt(w, a.degree, "answer"))], text: `${k} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: S.map((w) => wt(w, k, "shape")), text: `Katso ${L} nimeä: mikä on sen perussävel?` } : {
      marks: [...T.map((w) => wt(w, "1", "anchor")), ...S.map((w) => wt(w, k, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${k} kohdalle.`
    };
  }
  return c ? { marks: [...T.filter((S) => !_(S)).map((S) => wt(S, "1", "anchor")), ...p.map((S) => wt(S, a.degree, "answer"))], text: O } : a.interval === 0 ? { marks: [], text: `1. aste on ${L} perussävel ${oi(s.root)}.` } : { marks: T.map((S) => wt(S, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class jp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = Mf(a);
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
      this.question = vp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = pp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? _o(f.midi, a, "class") : o === "board" ? !!c && _f(this.settings, f, c) : _o(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, j = {
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
    return m ? j.position = Ue(m) : this.settings.mode === "notes" && (j.position = Ue(f.position)), this.results.push(j), this.record(j), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Ao(s) {
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
const Po = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], ir = (s) => Po.find(([a]) => a === s)?.[1] ?? s;
function bt({ label: s, children: a }) {
  const o = P.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    P.cloneElement(a, { id: o })
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
function $d(s) {
  const a = _i(s), o = Mf(s), c = Mi(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Ma[s.hints].title} · ${d} · ${In(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Fd({ s, change: a, locked: o, problem: c }) {
  const d = P.useId(), f = (k, T) => a({ ...s, [k]: T }), p = _i(s), m = Mi(s) === "note" || Mi(s) === "degree", j = ["scale", "chord", "caged"].includes(s.mode), R = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(bt, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (k) => f("mode", k.target.value), children: Po.map(([k, T]) => /* @__PURE__ */ r.jsx("option", { value: k, children: T }, k)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: Po.find(([k]) => k === s.mode)[2] })
    ] }),
    j && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(bt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (k) => f("root", Number(k.target.value)), children: Fe.CHROM.map((k, T) => /* @__PURE__ */ r.jsx("option", { value: T, children: k }, k)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (k) => f("scale", k.target.value), children: Object.entries(Fe.SCALES).map(([k, T]) => /* @__PURE__ */ r.jsx("option", { value: k, children: T.name }, k)) }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ r.jsxs("select", { value: s.box, onChange: (k) => f("box", Number(k.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ r.jsxs("option", { value: k, children: [
            "Boksi ",
            k
          ] }, k))
        ] }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Sävelten järjestys", children: /* @__PURE__ */ r.jsxs("select", { value: s.order, onChange: (k) => f("order", k.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ r.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ r.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (k) => f("chord", k.target.value), children: Object.entries(Ci).map(([k, T]) => /* @__PURE__ */ r.jsx("option", { value: k, children: T.name }, k)) }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ r.jsxs("select", { value: s.chordTone, onChange: (k) => f("chordTone", k.target.value), children: [
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
      s.mode === "caged" ? /* @__PURE__ */ r.jsx(bt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ r.jsx("select", { value: s.shape, onChange: (k) => f("shape", k.target.value), children: ["C", "A", "G", "E", "D"].map((k) => /* @__PURE__ */ r.jsxs("option", { value: k, children: [
        k,
        "-muoto"
      ] }, k)) }) }) : /* @__PURE__ */ r.jsx(bt, { label: "Tehtävä", children: /* @__PURE__ */ r.jsxs("select", { value: s.activity, onChange: (k) => f("activity", k.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ r.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ r.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.intervals.includes(k), onChange: (T) => f("intervals", T.target.checked ? [...s.intervals, k] : s.intervals.filter((_) => _ !== k)) }),
        qr[k]
      ] }, k)) }),
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx(bt, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (k) => f("direction", k.target.value), children: [
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
        onChange: (k) => f("hints", k),
        options: ["off", "always", "fade"].map((k) => ({ value: k, ...Ma[k] }))
      }
    ),
    m ? /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ r.jsx(Od, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (k) => f("input", k), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Kierroksen pituus", children: /* @__PURE__ */ r.jsxs("select", { value: s.rounds, disabled: In(s), onChange: (k) => f("rounds", Number(k.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ r.jsx(bt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ r.jsxs("select", { value: In(s) ? "pitch" : s.check, disabled: In(s), onChange: (k) => f("check", k.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ r.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ r.jsxs("select", { value: String(s.flats), onChange: (k) => f("flats", k.target.value === "true"), children: [
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
        /* @__PURE__ */ r.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((k) => /* @__PURE__ */ r.jsxs("button", { type: "button", "aria-pressed": s.min === 0 && s.max === k, onClick: () => a({ ...s, min: 0, max: k }), children: [
          "Nauhat 0–",
          k,
          k === 24 ? " · koko otelauta" : ""
        ] }, k)) }),
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsx(bt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (k) => f("min", Number(k.target.value)) }) }),
          /* @__PURE__ */ r.jsx(bt, { label: "Viimeinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (k) => f("max", Number(k.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: an.map((k, T) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.strings.includes(T), onChange: (_) => f("strings", _.target.checked ? [...s.strings, T] : s.strings.filter((O) => O !== T)) }),
          T + 1,
          " · ",
          k
        ] }, k)) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "check-row", children: [
        R && /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.accidentals, onChange: (k) => f("accidentals", k.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        s.mode === "ear-note" && /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.reference, onChange: (k) => f("reference", k.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.weak, onChange: (k) => f("weak", k.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.advance, onChange: (k) => f("advance", k.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const Id = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function xp(s) {
  return s && Object.hasOwn(Id, s) ? Id[s] : null;
}
const Sp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function wp({ onSelect: s }) {
  return /* @__PURE__ */ r.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ r.jsx("div", { className: "learning-grid", children: Sp.map((a) => /* @__PURE__ */ r.jsxs("button", { type: "button", className: "learning-card", onClick: () => s(a.id), children: [
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
const Np = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, bo = 100, Af = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Go(s) {
  if (s === null || s.trim() === "") return bo;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : bo;
}
function Ep() {
  try {
    return Go(localStorage.getItem(Af));
  } catch {
    return bo;
  }
}
function Cp(s) {
  try {
    localStorage.setItem(Af, String(Go(String(s))));
  } catch {
  }
}
function Dd(s, a, o = !0) {
  return o ? Np[s] * Go(String(a)) / 100 : 0;
}
function Pf(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Tp = 0.12, Mp = 2e3, _p = 3;
function Ap(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= Tp || s.seeking || s.readyState < _p ? !1 : s.msSinceLastFix >= Mp;
}
const Pp = 1.5, bp = 0.4, Rp = 0.5;
let Ro = null, Lp = null;
function Op(s) {
  return Ro !== null ? Ro : (Lp ??= Pf()) ? 0 : bp;
}
class bf {
  constructor(a = Op()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, c = !1, d = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused)) return !1;
    const f = o.currentTime - a.currentTime, p = Math.abs(f), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, j = this.lastFix.get(o);
    if (!Ap({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: j === void 0 ? 1 / 0 : d - j
    }, c)) return !1;
    const R = !a.paused;
    !c && R && j !== void 0 && (this.latency = Math.min(Pp, Math.max(0, this.latency - Rp * f)), Ro = this.latency);
    let k = a.currentTime + (R ? this.latency : 0);
    Number.isFinite(o.duration) && (k = Math.min(k, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = k;
    } catch {
      return !1;
    }
    return R ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
const $p = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class Fp {
  constructor(a = $p) {
    this.create = a;
  }
  create;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  /** Kutsutaan käyttäjän painalluksesta ennen play()-kutsuja. */
  unlock() {
    try {
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap()), this.context.state !== "running" && this.context.resume().catch(() => {
      }), !0;
    } catch {
      return !1;
    }
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(a) {
    if (this.gains.has(a)) return !0;
    if (!this.context) return !1;
    try {
      const o = this.context.createMediaElementSource(a), c = this.context.createGain();
      return o.connect(c), c.connect(this.context.destination), this.gains.set(a, c), !0;
    } catch {
      return !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, o) {
    const c = this.gains.get(a);
    c && (c.gain.value = o);
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
const Ip = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Dp = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function zd(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Rf() {
  const s = P.useRef(null), a = P.useRef(null), [o, c] = P.useState(!1), [d, f] = P.useState(!1), [p, m] = P.useState(!1), [j, R] = P.useState(0), [k, T] = P.useState(0), [_, O] = P.useState(""), L = P.useRef(new bf());
  function S(z = !1) {
    const G = s.current, B = a.current;
    !G || !B || !Number.isFinite(G.currentTime) || L.current.align(G, B, z);
  }
  function w() {
    s.current?.pause(), a.current?.pause(), c(!1);
  }
  async function V() {
    const z = s.current, G = a.current;
    if (!(!z || !G)) {
      if (o) {
        w();
        return;
      }
      O(""), G.muted = !d, G.volume = 0.55, z.volume = 0.75, S(!0);
      try {
        await Promise.all(d ? [z.play(), G.play()] : [z.play()]), S(), c(!0);
      } catch {
        w(), O("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function N(z) {
    const G = s.current, B = a.current;
    if (!(!G || !B || !Number.isFinite(z))) {
      G.currentTime = z;
      try {
        B.currentTime = z;
      } catch {
      }
      R(z);
    }
  }
  function F(z) {
    const G = s.current, B = a.current;
    if (f(z), !!B) {
      if (B.muted = !z, !z) {
        B.pause();
        return;
      }
      !G || !o || (S(!0), B.play().catch(() => O("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return P.useEffect(() => {
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
              onChange: (z) => F(z.target.checked)
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
          max: k > 0 ? k : 1,
          step: 0.1,
          value: Math.min(j, k > 0 ? k : 1),
          disabled: !k,
          onChange: (z) => N(Number(z.target.value))
        }
      ),
      /* @__PURE__ */ r.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        zd(j),
        " / ",
        zd(k)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Ip,
        loop: p,
        onLoadedMetadata: (z) => T(z.currentTarget.duration),
        onTimeUpdate: (z) => {
          R(z.currentTarget.currentTime), z.currentTarget.paused || S();
        },
        onEnded: () => {
          s.current?.loop || (a.current?.pause(), c(!1), R(k));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => O("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: Dp,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const z = s.current, G = a.current;
          z?.duration && G?.duration && Math.abs(z.duration - G.duration) > 0.15 && O("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => O("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    _ && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: _ }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const zp = 4e3;
class Vd extends Error {
  name = "MicSetupError";
}
async function Vp(s, a) {
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
      let R;
      await Promise.race([
        d.resume(),
        new Promise((k, T) => {
          R = setTimeout(() => T(new Vd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), zp);
        })
      ]).finally(() => clearTimeout(R));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], j = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((R) => R.stop()), f.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (f) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), f;
  }
}
async function Bp() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var yo, Bd;
function Kp() {
  if (Bd) return yo;
  Bd = 1;
  function s(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const R = Math.PI * c / this.size;
      o[c] = Math.cos(R), o[c + 1] = -Math.sin(R);
    }
    this.table = o;
    for (var d = 0, f = 1; this.size > f; f <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var j = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << j;
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
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, j, R = this._bitrev;
    if (p === 4)
      for (m = 0, j = 0; m < c; m += p, j++) {
        const w = R[j];
        this._singleTransform2(m, w, f);
      }
    else
      for (m = 0, j = 0; m < c; m += p, j++) {
        const w = R[j];
        this._singleTransform4(m, w, f);
      }
    var k = this._inv ? -1 : 1, T = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var _ = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var O = m + _, L = m, S = 0; L < O; L += 2, S += f) {
          const w = L, V = w + _, N = V + _, F = N + _, z = o[w], G = o[w + 1], B = o[V], M = o[V + 1], D = o[N], ne = o[N + 1], re = o[F], ye = o[F + 1], we = z, J = G, he = T[S], H = k * T[S + 1], le = B * he - M * H, ce = B * H + M * he, W = T[2 * S], ae = k * T[2 * S + 1], q = D * W - ne * ae, v = D * ae + ne * W, E = T[3 * S], ie = k * T[3 * S + 1], je = re * E - ye * ie, Se = re * ie + ye * E, U = we + q, K = J + v, ee = we - q, C = J - v, X = le + je, oe = ce + Se, ue = k * (le - je), fe = k * (ce - Se), ve = U + X, Ae = K + oe, Me = U - X, Ie = K - oe, Qe = ee + fe, Ye = C - ue, Ge = ee - fe, Xe = C + ue;
          o[w] = ve, o[w + 1] = Ae, o[V] = Qe, o[V + 1] = Ye, o[N] = Me, o[N + 1] = Ie, o[F] = Ge, o[F + 1] = Xe;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], j = p[c + 1], R = p[c + d], k = p[c + d + 1], T = m + R, _ = j + k, O = m - R, L = j - k;
    f[o] = T, f[o + 1] = _, f[o + 2] = O, f[o + 3] = L;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, j = d * 2, R = d * 3, k = p[c], T = p[c + 1], _ = p[c + d], O = p[c + d + 1], L = p[c + j], S = p[c + j + 1], w = p[c + R], V = p[c + R + 1], N = k + L, F = T + S, z = k - L, G = T - S, B = _ + w, M = O + V, D = m * (_ - w), ne = m * (O - V), re = N + B, ye = F + M, we = z + ne, J = G - D, he = N - B, H = F - M, le = z - ne, ce = G + D;
    f[o] = re, f[o + 1] = ye, f[o + 2] = we, f[o + 3] = J, f[o + 4] = he, f[o + 5] = H, f[o + 6] = le, f[o + 7] = ce;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, j, R = this._bitrev;
    if (p === 4)
      for (m = 0, j = 0; m < c; m += p, j++) {
        const Te = R[j];
        this._singleRealTransform2(m, Te >>> 1, f >>> 1);
      }
    else
      for (m = 0, j = 0; m < c; m += p, j++) {
        const Te = R[j];
        this._singleRealTransform4(m, Te >>> 1, f >>> 1);
      }
    var k = this._inv ? -1 : 1, T = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var _ = p >>> 1, O = _ >>> 1, L = O >>> 1;
      for (m = 0; m < c; m += p)
        for (var S = 0, w = 0; S <= L; S += 2, w += f) {
          var V = m + S, N = V + O, F = N + O, z = F + O, G = o[V], B = o[V + 1], M = o[N], D = o[N + 1], ne = o[F], re = o[F + 1], ye = o[z], we = o[z + 1], J = G, he = B, H = T[w], le = k * T[w + 1], ce = M * H - D * le, W = M * le + D * H, ae = T[2 * w], q = k * T[2 * w + 1], v = ne * ae - re * q, E = ne * q + re * ae, ie = T[3 * w], je = k * T[3 * w + 1], Se = ye * ie - we * je, U = ye * je + we * ie, K = J + v, ee = he + E, C = J - v, X = he - E, oe = ce + Se, ue = W + U, fe = k * (ce - Se), ve = k * (W - U), Ae = K + oe, Me = ee + ue, Ie = C + ve, Qe = X - fe;
          if (o[V] = Ae, o[V + 1] = Me, o[N] = Ie, o[N + 1] = Qe, S === 0) {
            var Ye = K - oe, Ge = ee - ue;
            o[F] = Ye, o[F + 1] = Ge;
            continue;
          }
          if (S !== L) {
            var Xe = C, ut = -X, Je = K, Be = -ee, it = -k * ve, Vt = -k * fe, Qt = -k * ue, Nt = -k * oe, ln = Xe + it, Yt = ut + Vt, Jt = Je + Nt, _t = Be - Qt, Ne = m + O - S, Bt = m + _ - S;
            o[Ne] = ln, o[Ne + 1] = Yt, o[Bt] = Jt, o[Bt + 1] = _t;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], j = p[c + d], R = m + j, k = m - j;
    f[o] = R, f[o + 1] = 0, f[o + 2] = k, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, j = d * 2, R = d * 3, k = p[c], T = p[c + d], _ = p[c + j], O = p[c + R], L = k + _, S = k - _, w = T + O, V = m * (T - O), N = L + w, F = S, z = -V, G = L - w, B = S, M = V;
    f[o] = N, f[o + 1] = 0, f[o + 2] = F, f[o + 3] = z, f[o + 4] = G, f[o + 5] = 0, f[o + 6] = B, f[o + 7] = M;
  }, yo;
}
var Hp = Kp();
const Up = /* @__PURE__ */ Im(Hp);
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
    this._inputLength = a, this._fft = new Up(Qp(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function Gp(s) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, c = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && s[f] > c && (c = s[f], d = f);
  return a;
}
function Wp(s, a) {
  const [o, c, d] = [s - 1, s, s + 1], [f, p, m] = [a[o], a[c], a[d]], j = f / 2 - p + m / 2, R = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), k = f * c * d / 2 - p * o * d + m * o * c / 2, T = -R / (2 * j), _ = j * T * T + R * T + k;
  return [T, _];
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
    const c = Gp(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((j) => this._nsdfBuffer[j])), f = c.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * d
    ), [p, m] = Wp(
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
function Qp(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function Yp(s) {
  const a = s * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const Jp = 0.05, Xp = 1.5;
class Zp {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = Yp(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * Jp))), this.detector = Jr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new qp();
  onset = new ev();
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
      onFrame: j,
      onStableNote: R
    } = this.opts, k = this.analysers.map((M, D) => (M.getFloatTimeDomainData(this.buffers[D]), Kd(this.buffers[D], this.buffers[D].length - this.shortLength))), T = k.indexOf(Math.max(...k));
    T !== this.channel && k[T] > (k[this.channel] ?? 0) * Xp && (this.channel = T);
    const _ = this.buffers[this.channel], O = k[this.channel], L = tv(_, _.length - this.shortLength), S = { rms: O, peak: L, channel: this.channel, levels: k }, w = O < c, V = this.onset.feed(O, a, c);
    if (w && Kd(_, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), j?.({ ...S, status: "silent" });
      return;
    }
    const [N, F] = this.detector.findPitch(_, this.mic.context.sampleRate);
    if (!isFinite(N) || F < o) {
      this.gate.feed(null, a, d, w, V), j?.({ ...S, status: w ? "silent" : "unclear", clarity: isFinite(F) ? F : 0 });
      return;
    }
    if (N < p || N > m) {
      this.gate.feed(null, a, d, w, V), j?.({ ...S, status: "out-of-range", frequency: N, clarity: F });
      return;
    }
    const { midi: z, cents: G } = Jm(N);
    if (Math.abs(G) > f) {
      this.gate.feed(null, a, d, w, V), j?.({ ...S, status: "off-pitch", frequency: N, clarity: F, midi: z, cents: G });
      return;
    }
    j?.({ ...S, status: "pitch", frequency: N, clarity: F, midi: z, cents: G });
    const B = this.gate.feed(z, a, d, w, V);
    B !== null && R?.({ midi: z, frequency: N, cents: G, clarity: F, timestamp: a, heldMs: B.heldMs });
  }
}
class qp {
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
class ev {
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
function Kd(s, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < s.length; d++) c += s[d] * s[d];
  return Math.sqrt(c / Math.max(1, s.length - o));
}
function tv(s, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < s.length; c++) {
    const d = Math.abs(s[c]);
    d > o && (o = d);
  }
  return o;
}
const or = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let tr;
function Lf() {
  return (!tr || tr.state === "closed") && (tr = new AudioContext()), tr;
}
function nv() {
  const s = tr;
  tr = void 0, s?.close().catch(() => {
  });
}
const Of = (s) => s instanceof Error ? s.name : "";
function iv(s) {
  const a = Of(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class rv {
  constructor(a = (o) => Vp(o, Lf)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Of(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new Zp(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, j = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((R) => R.addEventListener("ended", m, { once: !0, signal: j.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: j.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
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
function $f(s, a) {
  return s !== "on" ? s : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Hd = (s) => Math.max(0, Math.min(1, (or(s) + 60) / 60));
function sv(s) {
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
function Aa(s) {
  const a = s instanceof Error ? s.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class rs {
  constructor(a = Lf) {
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
    const p = Array.from({ length: 12 }, (R, k) => 1 / (k + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((R, k) => {
      const T = d.createOscillator(), _ = d.createGain(), O = d.currentTime + 0.05 + k * 0.8;
      m ? T.setPeriodicWave(m) : T.type = "triangle", T.frequency.value = ko(R), _.gain.setValueAtTime(0, O), _.gain.linearRampToValueAtTime(0.22, O + 0.012), _.gain.exponentialRampToValueAtTime(1e-3, O + 0.7), T.connect(_), _.connect(f), T.start(O), T.stop(O + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(k);
      }, 50 + k * 800));
    }), !await new Promise((R) => {
      this.settle = R, this.timer = setTimeout(() => R(!0), a.length * 800 + 350);
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
    const m = 60 / Math.max(40, Math.min(140, o)), j = p.createGain();
    j.connect(p.destination), this.master = j;
    const R = Array.from({ length: 12 }, (L, S) => 1 / (S + 1) ** 1.3), k = p.createPeriodicWave?.(
      new Float32Array([0, ...R.map(() => 0)]),
      new Float32Array([0, ...R])
    ), T = p.currentTime + 0.05;
    let _ = 0;
    return a.forEach((L, S) => {
      if (!Number.isFinite(L.beat) || L.beat < 0 || !Number.isFinite(L.duration) || L.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const w = T + L.beat * m, V = L.duration * m, N = w + Math.max(0.08, V * 0.94), F = p.createOscillator(), z = p.createGain();
      k ? F.setPeriodicWave(k) : F.type = "triangle", F.frequency.value = ko(L.midi), z.gain.setValueAtTime(0, w), z.gain.linearRampToValueAtTime(0.22, w + 0.012), z.gain.exponentialRampToValueAtTime(1e-3, N - 0.01), F.connect(z), z.connect(j), F.start(w), F.stop(N), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(S);
      }, 50 + L.beat * m * 1e3));
      const G = a[S + 1]?.beat ?? 1 / 0;
      d && G > L.beat + L.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + L.beat * m * 1e3 + V * 1e3)), _ = Math.max(_, L.beat + L.duration);
    }), !await new Promise((L) => {
      this.settle = L, this.timer = setTimeout(() => L(!0), 50 + _ * m * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], j.disconnect(), this.master = void 0, !0);
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
    const m = Array.from({ length: 12 }, (S, w) => 1 / (w + 1) ** 1.3), j = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let R = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (S) => {
      d === this.token && Number.isFinite(S) && (R = 60 / Math.max(40, Math.min(140, S)));
    };
    const k = 1.6;
    let T = f.currentTime + 0.05, _ = 0;
    const O = [], L = () => {
      if (d === this.token) {
        if (T < f.currentTime - 0.02) {
          const S = Math.ceil((f.currentTime - T) / R);
          T += S * R, _ = (_ + S) % a.length, O.length = 0;
        }
        for (; T < f.currentTime + k; ) {
          const S = a[_], w = _, V = T, N = f.createOscillator(), F = f.createGain();
          j ? N.setPeriodicWave(j) : N.type = "triangle", N.frequency.value = ko(S), F.gain.setValueAtTime(0, V), F.gain.linearRampToValueAtTime(0.22, V + 0.012), F.gain.exponentialRampToValueAtTime(1e-3, V + R * 0.975), N.connect(F), F.connect(p), N.start(V), N.stop(V + R * 0.985), O.push({ at: V, index: w }), T += R, _ = (_ + 1) % a.length;
        }
        for (; O.length && O[0].at <= f.currentTime + 0.01; ) {
          const S = O.shift();
          o?.(S.index);
        }
      }
    };
    return L(), this.loopTick = setInterval(L, 25), new Promise((S) => {
      this.settle = S;
    });
  }
}
function ci(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const j = { position: d === null || f === null ? null : Oe(d, f), beat: o, duration: p };
    return o += p, j;
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
const Ud = ci("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), Gd = ci("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), av = ci("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), Wd = ci("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), Qd = ci("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), lv = ci("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), Yd = ci("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), Jd = ci("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), ov = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Ud, Gd],
    whole: jo("Melodia · A + B + C", Ud, Gd, av),
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
    fragments: [Wd, Qd],
    whole: jo("Ukko Nooa · A + B", Wd, Qd),
    bonus: lv,
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
    fragments: [Yd, Jd],
    whole: jo("Siirtymämelodia · A + B", Yd, Jd),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function uv(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const Xd = ["e", "B", "G", "D", "A", "E"];
function Wo({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = ov[s], [f, p] = P.useState(a === "fingering" ? "a" : "whole"), [m, j] = P.useState(d.tempo), [R, k] = P.useState(!1), [T, _] = P.useState(!1), [O, L] = P.useState(a !== "memory"), [S, w] = P.useState(!1), [V, N] = P.useState(null), [F, z] = P.useState(""), G = P.useRef(new rs()), B = P.useRef(0);
  function M() {
    B.current++, G.current.stop(), w(!1), N(null);
  }
  P.useEffect(() => {
    c && (c.current = M);
    const v = () => {
      document.hidden && M();
    };
    return document.addEventListener("visibilitychange", v), () => {
      document.removeEventListener("visibilitychange", v), B.current++, G.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const D = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], ne = D.find((v) => v.id === f) ?? D[0], re = ne.clip, ye = uv(re), we = V === null ? null : ye[V]?.beat ?? null, J = we === null ? null : re.events.find((v) => v.beat === we)?.position ?? null, he = re.beats / 4, H = [...new Map(re.events.filter((v) => v.position).map((v) => [Ue(v.position), v.position])).values()], le = H.map((v) => v.fret), ce = H.filter((v) => O || J?.string === v.string && J.fret === v.fret).map((v) => ({
    ...v,
    label: be(v.midi),
    kind: J?.string === v.string && J.fret === v.fret ? "playing" : Ve(v.midi) === d.tonic ? "answer" : "shape"
  })), W = {
    strings: [...new Set(H.map((v) => v.string))],
    min: Math.min(...le),
    max: Math.max(...le),
    fixed: "box"
  };
  async function ae() {
    if (S) {
      M();
      return;
    }
    o?.();
    const v = ++B.current;
    G.current.stop(), w(!0), N(null), z("");
    try {
      await G.current.playTimed(ye, m, (E) => {
        v === B.current && N(E);
      }, () => {
        v === B.current && N(null);
      });
    } catch (E) {
      v === B.current && z(Aa(E));
    } finally {
      v === B.current && (w(!1), N(null));
    }
  }
  function q(v) {
    M(), z(""), p(v);
  }
  return /* @__PURE__ */ r.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ r.jsxs("details", { onToggle: (v) => {
    const E = v.currentTarget.open;
    k(E), E || M();
  }, children: [
    /* @__PURE__ */ r.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    R && /* @__PURE__ */ r.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ r.jsx("h4", { children: d.title }),
      /* @__PURE__ */ r.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        he.toString().replace(".", ","),
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
      a !== "memory" && /* @__PURE__ */ r.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: D.map((v) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": ne.id === v.id,
          onClick: () => q(v.id),
          children: v.name
        },
        v.id
      )) }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": S, onClick: () => {
          ae();
        }, children: S ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ r.jsx("select", { value: m, onChange: (v) => {
            M(), j(Number(v.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((v, E) => v - E).filter((v, E, ie) => ie.indexOf(v) === E).map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
            v,
            " BPM"
          ] }, v)) })
        ] }),
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": T, onClick: () => _((v) => !v), children: T ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      F && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: F }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: S && V !== null ? `Nyt soi ${be(ye[V].midi)} · ${Xd[J.string]}-kieli, ${J.fret}. nauha` : S ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ r.jsx(ui, { area: W, marks: ce, disabled: !0, caption: `${d.title}, ${ne.name}` }),
        /* @__PURE__ */ r.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": O,
              onClick: () => L((v) => !v),
              children: O ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      T && /* @__PURE__ */ r.jsxs("div", { className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${ne.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
            re.events.map((v, E) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: v.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: v.beat % 4 === 0 ? `T${Math.floor(v.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: v.duration === 1 ? "♩" : `${v.duration} iskua` })
            ] }, E))
          ] }) }),
          /* @__PURE__ */ r.jsx("tbody", { children: Xd.map((v, E) => /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "row", children: v }),
            re.events.map((ie, je) => {
              const Se = ie.position?.string === E, U = Se && we === ie.beat;
              return /* @__PURE__ */ r.jsx(
                "td",
                {
                  className: `${ie.beat % 4 === 0 ? "bar-start " : ""}${U ? "melody-playing " : ""}${Se && Ve(ie.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": Se ? `${v}-kieli, ${ie.position.fret}. nauha, ${be(ie.position.midi)}` : void 0,
                  children: Se ? ie.position.fret : "—"
                },
                je
              );
            })
          ] }, E)) })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ r.jsx("p", { className: "melody-source", children: /* @__PURE__ */ r.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Lo = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [1, 2]), Ff = [...new Map(Lo.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Oe(o, c);
  return [Ue(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ea = [5, 4, 3, 2, 1, 0].flatMap((s) => Ff.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), Oo = [
  ...Ea,
  ...Ea.slice(1, -1).reverse()
], cv = [...Oo, Ea[0]], Zd = new Set(
  Lo[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Oe(a, o);
    return Ue(c);
  })).filter((s) => Lo[1].positions[0].strings.flatMap((a, o) => a.map((c) => Ue(Oe(o, c)))).includes(s))
), dv = [
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
], If = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Df = "musiikin-kartta:skaalapolku:bridge-tempo:v1", xo = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], qd = (s) => Ve(s) === 9;
function ef() {
  try {
    const s = Number(localStorage.getItem(If));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function fv() {
  try {
    const s = Number(localStorage.getItem(Df));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function hv({ onBack: s, onPosition: a }) {
  const [o, c] = P.useState(ef), [d, f] = P.useState(ef), [p, m] = P.useState(!1), [j, R] = P.useState("roots"), [k, T] = P.useState(fv), [_, O] = P.useState(null), [L, S] = P.useState(null), [w, V] = P.useState(""), N = P.useRef(new rs()), F = P.useRef(0), z = P.useRef(null), G = L === null ? null : Oo[L];
  function B() {
    z.current?.(), F.current++, N.current.stop(), O(null), S(null);
  }
  P.useEffect(() => {
    const J = () => {
      document.hidden && (F.current++, N.current.stop(), O(null), S(null));
    };
    return document.addEventListener("visibilitychange", J), () => {
      document.removeEventListener("visibilitychange", J), F.current++, N.current.stop();
    };
  }, []);
  async function M(J) {
    z.current?.();
    const he = ++F.current;
    N.current.stop(), S(null), V(""), O(J);
    try {
      J === "transition" ? await N.current.play(dv.map((H) => H.midi)) : J === "once" ? await N.current.play(cv.map((H) => H.midi)) : await N.current.loop(Oo.map((H) => H.midi), (H) => {
        he === F.current && S(H);
      }, k);
    } catch (H) {
      he === F.current && V(Aa(H));
    } finally {
      he === F.current && (O(null), S(null));
    }
  }
  function D(J) {
    const he = Math.max(40, Math.min(140, J));
    T(he), N.current.setLoopTempo(he);
    try {
      localStorage.setItem(Df, String(he));
    } catch {
    }
  }
  function ne(J) {
    J > o || (B(), f(J), m(!1), R("roots"));
  }
  function re() {
    B();
    const J = Math.min(4, d + 1);
    if (f(J), m(!1), R("roots"), J > o) {
      c(J);
      try {
        localStorage.setItem(If, String(J));
      } catch {
      }
    }
  }
  const ye = (J, he) => d < 2 || d === 2 && p && Zd.has(he) || d === 3 && (j === "all" || j === "roots" && qd(J)), we = Ff.filter((J) => ye(J.midi, Ue(J))).map((J) => ({
    ...J,
    label: d < 2 || d === 2 && p || d === 3 && j === "all" ? be(J.midi) : "A",
    kind: d < 2 && G?.string === J.string && G?.fret === J.fret ? "playing" : qd(J.midi) ? "answer" : Zd.has(Ue(J)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      B(), s();
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
        B(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        B(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => ne(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: xo.map((J, he) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: he === d ? "journey-step current" : "journey-step",
        "aria-current": he === d ? "step" : void 0,
        disabled: he > o,
        onClick: () => ne(he),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: he > o ? "🔒" : he < o ? "✓" : he + 1 }),
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
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: k <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => D(k - 5), children: "− 5" }),
          /* @__PURE__ */ r.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            k,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx("button", { type: "button", disabled: k >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => D(k + 5), children: "+ 5" }),
          /* @__PURE__ */ r.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": _ === "whole",
              onClick: () => _ === "whole" ? B() : void M("whole"),
              children: _ === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": _ === "once",
              onClick: () => _ === "once" ? B() : void M("once"),
              children: _ === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": _ === "transition",
              onClick: () => _ === "transition" ? B() : void M("transition"),
              children: _ === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((J) => !J), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa sormitukseen" })
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
                  checked: j === J.value,
                  onChange: () => R(J.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: J.name })
            ] }, J.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => _ === "once" ? B() : void M("once"), children: _ === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => _ === "transition" ? B() : void M("transition"), children: _ === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: _ === "whole" ? G && d < 2 ? `Nyt soi ${be(G.midi, !1, !0)} · ${an[G.string]}-kieli, nauha ${G.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : _ === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : _ === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        w && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: w }),
        /* @__PURE__ */ r.jsx(
          ui,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: we,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? j === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : j === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ r.jsx(
          Wo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: B,
            stopHandleRef: z
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ r.jsx(Rf, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: re, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ r.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(2), children: "Kertaa muistiharjoitus" }),
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
const Xr = "musiikin-kartta:skaalapolku:v1", ga = "musiikin-kartta:skaalapolku:position-2:v1", So = "musiikin-kartta:skaalapolku:position-3:v1", ja = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ca = "musiikin-kartta:skaalapolku:active-position:v1", zf = "musiikin-kartta:skaalapolku:tempo:v1", rr = 75, $o = 40, Fo = 140;
function mv() {
  try {
    const s = localStorage.getItem(zf);
    if (s === null) return rr;
    const a = Number(s);
    return Number.isInteger(a) && a >= $o && a <= Fo && a % 5 === 0 ? a : rr;
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
], tf = [
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
function pv() {
  try {
    return Nn(ga) === 4 && localStorage.getItem(Ca) === "bridge";
  } catch {
    return !1;
  }
}
function vv({ onBack: s }) {
  const [a, o] = P.useState(No), [c, d] = P.useState(pv), [f, p] = P.useState(() => ({
    1: Nn(Xr),
    2: Nn(ga),
    3: Nn(So)
  })), [m, j] = P.useState(() => Nn(No() === 3 ? So : No() === 2 ? ga : Xr)), R = f[a], [k, T] = P.useState(!1), [_, O] = P.useState("roots"), [L, S] = P.useState(mv), [w, V] = P.useState(null), [N, F] = P.useState(null), [z, G] = P.useState(""), B = P.useRef(new rs()), M = P.useRef(0), D = P.useRef(null);
  function ne(U) {
    const K = Math.max($o, Math.min(Fo, U));
    S(K), B.current.setLoopTempo(K);
    try {
      localStorage.setItem(zf, String(K));
    } catch {
    }
  }
  function re() {
    D.current?.(), M.current++, B.current.stop(), V(null), F(null);
  }
  P.useEffect(() => {
    const U = () => {
      document.hidden && (M.current++, B.current.stop(), V(null), F(null));
    };
    return document.addEventListener("visibilitychange", U), () => {
      document.removeEventListener("visibilitychange", U), M.current++, B.current.stop();
    };
  }, []);
  const ye = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [a])[0].positions[0], we = ye.strings.flatMap((U, K) => U.map((ee) => Oe(K, ee))).sort((U, K) => U.midi - K.midi || K.string - U.string), J = [...we, ...we.slice(1, -1).reverse()], he = N === null ? null : J[N], H = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], le = ye.start, ce = ye.end, W = (U) => Ve(U) === 9, ae = (U) => m < 2 ? !0 : m === 2 ? k && W(U) : _ === "scale" || _ === "roots" && W(U), q = we.filter((U) => ae(U.midi)).map((U) => ({
    ...U,
    label: m < 2 || m === 3 && _ === "scale" ? be(U.midi) : "A",
    kind: m < 2 && he?.string === U.string && he.fret === U.fret ? "playing" : W(U.midi) ? "answer" : "shape"
  }));
  async function v(U) {
    D.current?.();
    const K = ++M.current;
    B.current.stop(), F(null), G(""), V(U);
    try {
      U === "phrase" ? await B.current.play(H) : await B.current.loop(J.map((ee) => ee.midi), (ee) => {
        K === M.current && F(ee);
      }, m === 2 ? L : rr);
    } catch (ee) {
      K === M.current && G(Aa(ee));
    } finally {
      K === M.current && (V(null), F(null));
    }
  }
  function E() {
    re();
    const U = Math.min(4, m + 1);
    if (j(U), T(!1), O("roots"), U > R) {
      p((ee) => ({ ...ee, [a]: U }));
      const K = a === 1 ? Xr : a === 2 ? ga : So;
      try {
        localStorage.setItem(K, String(U));
      } catch {
      }
    }
  }
  function ie(U) {
    U > R || (re(), j(U), T(!1), O("roots"));
  }
  function je(U) {
    if (!(U === 2 && f[1] < 4) && !(U === 3 && Nn(ja) < 4)) {
      re(), d(!1), o(U), j(f[U]), T(!1), O("roots"), G("");
      try {
        localStorage.setItem(Ca, String(U));
      } catch {
      }
    }
  }
  function Se() {
    if (!(f[2] < 4)) {
      re(), d(!0), T(!1), G("");
      try {
        localStorage.setItem(Ca, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx(hv, { onBack: s, onPosition: je }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      re(), s();
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
      ce,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => je(1), children: "Positio 1" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => je(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          disabled: f[2] < 4,
          onClick: Se,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: Nn(ja) < 4,
          onClick: () => je(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: wo.map((U, K) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: K === m ? "journey-step current" : "journey-step",
        "aria-current": K === m ? "step" : void 0,
        disabled: K > R,
        onClick: () => ie(K),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: K > R ? "🔒" : K < R ? "✓" : K + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: K === 4 ? `Positio ${a} harjoiteltu` : U.title })
        ]
      },
      U.title
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
              disabled: L <= $o,
              onClick: () => ne(L - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            L,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: L >= Fo,
              onClick: () => ne(L + 5),
              children: "+ 5"
            }
          ),
          L !== rr && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => ne(rr),
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
              "aria-pressed": w === "loop",
              onClick: () => w === "loop" ? re() : void v("loop"),
              children: w === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => w === "phrase" ? re() : void v("phrase"), children: w === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: w === "loop" ? he && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${be(he.midi, !1, !0)} · ${an[he.string]}-kieli, nauha ${he.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        z && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: z }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": k, onClick: () => T((U) => !U), children: k ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ie(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              tf.map((U) => /* @__PURE__ */ r.jsxs("label", { children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: U.value,
                    checked: _ === U.value,
                    onChange: () => O(U.value)
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { children: U.label })
              ] }, U.value))
            ] }),
            a !== 1 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
              v("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: le, max: ce, fixed: "box" }, marks: q, disabled: !0, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? tf.find((U) => U.value === _).note : k ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(ui, { area: { strings: [0, 1, 2, 3, 4, 5], min: le, max: ce, fixed: "box" }, marks: q, disabled: !0, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ r.jsx(
          Wo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: re,
            stopHandleRef: D
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ r.jsx(Rf, {}, a),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: E, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ r.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ie(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => je(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Se, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => je(2), children: "Kertaa positio 2" })
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
const kv = ["ionian", "aeolian"], nr = {
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
}, Vf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", Bf = "musiikin-kartta:moodipolku:active:v1", yv = (s) => {
  const a = nr[s].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, gv = (s) => [...yv(s), nr[s].positions[0]], nf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function xa(s) {
  try {
    const a = Number(localStorage.getItem(Vf(s)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function rf() {
  try {
    return localStorage.getItem(Bf) === "aeolian" && xa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function jv({ onBack: s }) {
  const [a, o] = P.useState(rf), [c, d] = P.useState(() => ({
    ionian: xa("ionian"),
    aeolian: xa("aeolian")
  })), [f, p] = P.useState(() => xa(rf())), [m, j] = P.useState(null), [R, k] = P.useState(null), [T, _] = P.useState(!1), [O, L] = P.useState("roots"), [S, w] = P.useState(""), [V, N] = P.useState(null), [F, z] = P.useState(null), G = P.useRef(new rs()), B = P.useRef(0), M = P.useRef(null), D = nr[a], ne = gv(a), re = m === "scale" && R !== null ? ne[R] : null;
  function ye() {
    M.current?.(), B.current++, G.current.stop(), j(null), k(null);
  }
  P.useEffect(() => {
    const E = () => {
      document.hidden && (B.current++, G.current.stop(), j(null), k(null));
    };
    return document.addEventListener("visibilitychange", E), () => {
      document.removeEventListener("visibilitychange", E), B.current++, G.current.stop();
    };
  }, []);
  async function we(E, ie, je = !1) {
    M.current?.();
    const Se = ++B.current;
    G.current.stop(), k(null), w(""), j(E);
    try {
      const U = je ? await G.current.loop(ie, void 0, 75) : await G.current.play(ie, (K) => {
        Se === B.current && E === "scale" && k(K);
      });
      return Se === B.current && U;
    } catch (U) {
      return Se === B.current && w(Aa(U)), !1;
    } finally {
      Se === B.current && (j(null), k(null));
    }
  }
  function J(E) {
    E > c[a] || (ye(), p(E), N(null), z(null), _(!1), L("roots"), w(""));
  }
  function he() {
    ye();
    const E = Math.min(5, f + 1);
    if (p(E), N(null), z(null), _(!1), L("roots"), E > c[a]) {
      d((ie) => ({ ...ie, [a]: E }));
      try {
        localStorage.setItem(Vf(a), String(E));
      } catch {
      }
    }
  }
  function H(E) {
    if (!(E === "aeolian" && c.ionian < 5)) {
      ye(), o(E), p(c[E]), N(null), z(null), _(!1), L("roots"), w("");
      try {
        localStorage.setItem(Bf, E);
      } catch {
      }
    }
  }
  async function le() {
    ye(), z(null), N(null);
    const E = Math.random() < 0.5 ? "ionian" : "aeolian";
    await we("comparison", nr[E].phrase) && N(E);
  }
  const ce = (E) => Ve(E) === D.tonic, W = D.positions.filter((E) => f < 2 ? !0 : f === 2 ? T && ce(E.midi) : f === 4 ? O === "all" || O === "roots" && ce(E.midi) : !1).map((E) => ({
    ...E,
    label: f === 2 || f === 4 && O === "roots" ? D.tonicName : be(E.midi),
    kind: re?.string === E.string && re.fret === E.fret ? "playing" : ce(E.midi) ? "answer" : "shape"
  })), ae = [...new Set(D.positions.map((E) => E.string))], q = Math.min(...D.positions.map((E) => E.fret)), v = Math.max(...D.positions.map((E) => E.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ye(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      kv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ r.jsxs("h2", { id: "mode-path-title", children: [
      D.title,
      " · ",
      D.alias
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: D.explanation }),
    /* @__PURE__ */ r.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ r.jsx("strong", { children: D.noteNames }),
      " · Pohjasävel ",
      D.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => H("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => H("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ r.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      nf.map((E, ie) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === ie ? "journey-step current" : "journey-step",
          "aria-current": f === ie ? "step" : void 0,
          disabled: ie > c[a],
          onClick: () => J(ie),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: ie > c[a] ? "🔒" : ie < c[a] ? "✓" : ie + 1 }),
            /* @__PURE__ */ r.jsx("span", { children: E })
          ]
        },
        E
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
        /* @__PURE__ */ r.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : nf[f] }),
        /* @__PURE__ */ r.jsx("span", { children: f === 5 ? "Valmis" : "Harjoitus " + (f + 1) + " / 5" })
      ] }),
      f === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          D.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          D.contrast
        ] })
      ] }),
      f === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      f === 2 && /* @__PURE__ */ r.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        D.tonicName,
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
            we("comparison", nr[V].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        V !== null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: F !== null || m !== null,
                onClick: () => z("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: F !== null || m !== null,
                onClick: () => z("aeolian"),
                children: "A"
              }
            )
          ] }),
          F !== null && /* @__PURE__ */ r.jsxs("p", { role: "status", children: [
            F === V ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            nr[V].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "Soita ",
          D.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          D.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          D.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([E, ie]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: E,
                checked: O === E,
                onChange: () => L(E)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: ie })
          ] }, E))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => _((E) => !E), children: T ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? ye() : void we("scale", ne.map((E) => E.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? ye() : void we("accompaniment", D.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f !== 3 && f !== 5 && /* @__PURE__ */ r.jsx(
        ui,
        {
          area: { strings: ae, min: q, max: v, fixed: "box" },
          marks: W,
          disabled: !0,
          caption: D.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ r.jsx(
        Wo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: ye,
          stopHandleRef: M
        },
        `nooa:${f}`
      ),
      f < 2 && m === "scale" && re && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        be(re.midi),
        " · nauha ",
        re.fret,
        "."
      ] }),
      S && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: S }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: he, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          D.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ r.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => J(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => H("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ r.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function xv({ onBack: s }) {
  const [a, o] = P.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ r.jsx(vv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ r.jsx(jv, { onBack: () => o(null) }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
const er = [0, 2, 4, 5, 7, 9, 11], Sv = 1200, va = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function wv({ onBack: s }) {
  const [a, o] = P.useState(0), [c, d] = P.useState([]), [f, p] = P.useState(!1), [m, j] = P.useState(""), [R, k] = P.useState(0), [T, _] = P.useState(!1), O = a >= er.length, L = er[Math.min(a, er.length - 1)], S = ur(va.strings, va.min, va.max).filter((M) => Ve(M.midi) === L), w = S.filter((M) => !c.includes(Ue(M))), V = w.length === 0 && !O, N = !V && f ? w[0] : void 0;
  P.useEffect(() => {
    if (!T || !V) return;
    const M = window.setTimeout(() => {
      o((D) => D + 1), d([]), p(!1), j("");
    }, Sv);
    return () => window.clearTimeout(M);
  }, [T, V]);
  const F = [
    ...S.filter((M) => c.includes(Ue(M))).map((M) => ({ ...M, kind: "answer", label: be(M.midi) })),
    ...N ? [{ ...N, kind: "anchor", label: "?" }] : []
  ];
  function z(M) {
    if (O || V) return;
    const D = Ue(M);
    if (Ve(M.midi) !== L) {
      k((ye) => ye + 1), j(`Valitsit sävelen ${be(M.midi)}. Etsi ${be(L)}.`);
      return;
    }
    if (c.includes(D)) {
      j("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ne = [...c, D];
    d(ne), p(!1);
    const re = S.length - ne.length;
    j(re ? `Oikein! ${be(L)} löytyi ${an[M.string]}-kieleltä (${Ti(M.fret)}). Vielä ${re}.` : `Löysit kaikki ${S.length} ${be(L)}-säveltä tällä alueella.`);
  }
  function G() {
    V && (o((M) => M + 1), d([]), p(!1), j(""));
  }
  function B() {
    o(0), d([]), p(!1), j(""), k(0);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !O && /* @__PURE__ */ r.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          checked: T,
          onChange: (M) => _(M.target.checked)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: O ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        R ? `Vääriä valintoja yhteensä ${R}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: B, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          "Etsi kaikki ",
          be(L),
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
        be(L),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        S.length
      ] }),
      /* @__PURE__ */ r.jsx(
        ui,
        {
          area: va,
          marks: F,
          onAnswer: z,
          disabled: V,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: V ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        !V && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((M) => !M),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        V && (T ? /* @__PURE__ */ r.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === er.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: G, children: a === er.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const Nv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Eo = ["C", "G", "D", "Em"], sf = ["C", "G", "D", "Em", "Am", "E", "A"], Ev = { min: 0, max: 3, fixed: "" };
function af(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Cv({ onBack: s }) {
  const [a, o] = P.useState(4), [c, d] = P.useState(() => af(Eo)), [f, p] = P.useState(0), [m, j] = P.useState(null), [R, k] = P.useState([]), [T, _] = P.useState(0), O = f >= c.length, L = Nv[c[Math.min(f, c.length - 1)]], S = a === 4 ? Eo : sf, w = L.frets.flatMap((M, D) => M === null ? [] : [D]), V = L.frets.flatMap((M, D) => M === null ? [D] : []), N = { ...Ev, strings: w }, F = L.frets.flatMap((M, D) => M === null ? [] : [{
    ...Oe(D, M),
    kind: M === 0 ? "anchor" : "shape",
    label: M === 0 ? "○" : "●"
  }]);
  function z(M = a) {
    o(M), d(af(M === 4 ? Eo : sf)), p(0), j(null), k([]), _(0);
  }
  function G(M) {
    m || O || R.includes(M) || (M === L.name ? j(M) : (k((D) => [...D, M]), _((D) => D + 1)));
  }
  function B() {
    m && (p((M) => M + 1), j(null), k([]));
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
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: O ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        T ? `Vääriä valintoja yhteensä ${T}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
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
          area: N,
          marks: F,
          mutedStrings: V,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: S.map((M) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === M ? "right" : R.includes(M) ? "wrong" : "",
          disabled: !!m || R.includes(M),
          "aria-pressed": m === M,
          onClick: () => G(M),
          children: M
        },
        M
      )) }),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: m ? "feedback good" : R.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${L.name}-sointu.` : R.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: B, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ke = (s, a) => ({ first: s, ...a ? { second: a } : {} }), sr = () => [
  ke("Gm", "F"),
  ke("Gm"),
  ke("B♭", "F"),
  ke("Gm"),
  ke("Gm", "F"),
  ke("Gm"),
  ke("E♭", "F"),
  ke("Gm")
], ar = () => [
  ke("B♭", "F"),
  ke("Gm", "Dm"),
  ke("E♭", "F"),
  ke("Gm", "Dm")
], lr = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Kf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Tv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
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
    bars: [...ar(), ke("E♭"), { ...ke("E♭"), passingBass: "F" }],
    lyrics: lr,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ke("Gm", "F"), ke("Gm")] },
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
    bars: [...ar(), ke("E♭"), ke("F")],
    lyrics: lr
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
    bars: sr(),
    lyrics: Kf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ar(), ke("E♭", "F"), ke("Gm")],
    lyrics: lr
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
], Mv = [
  { id: "intro", title: "Intro", start: 0, bars: [ke("Gm", "F"), ke("Gm"), ke("B♭", "F"), ke("Gm")] },
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
    bars: [...ar(), ke("E♭"), ke("E♭")],
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
    bars: [...ar(), ke("E♭"), ke("F")],
    lyrics: lr
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
    bars: sr(),
    lyrics: Kf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ar(), ke("B♭", "F"), ke("Gm"), ke("E♭", "F"), ke("Gm")],
    lyrics: lr
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ke("E♭", "F"), ke("Gm", "F"), ke("E♭", "F"), ke("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], cr = {
  acoustic: Tv,
  normal: Mv
}, _v = "normal", Io = "yksi-sointu-kaksi-askelta", Qo = {
  acoustic: Io + "-akustinen",
  normal: Io + "-normaali"
}, Hf = (s) => s === Io || Object.values(Qo).includes(s ?? "");
function Av(s) {
  const a = Object.entries(Qo).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const Pv = (s) => Qo[s], lf = (s) => {
  const a = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Yo(s, a = "acoustic") {
  const o = cr[a], c = o[s], d = o[s + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Uf(s, a = "acoustic") {
  const o = cr[a], c = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let T = 1; T < o.length && !(c < o[T].start); T++)
    d = T;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ns(d, p + 1, a); )
    p++;
  const m = ns(d, p, a), j = Yo(d, a) / 4;
  let R = 1;
  for (; R < 4 && c >= m + R * j; ) R++;
  const k = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: R,
    chord: k.second && R >= 3 ? k.second : k.first
  };
}
function ns(s, a, o = "acoustic") {
  return cr[o][s].start + Yo(s, o) * a;
}
function bv(s) {
  return cr[s].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = ns(o, d, s), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = Yo(o, s) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function Rv(s, a = "acoustic", o = !1) {
  const c = cr[a], d = Uf(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = bv(a), j = m.findIndex((O) => O.sectionIndex === d.sectionIndex && O.barIndex === d.barIndex && O.part === p), k = [
    ...m.slice(j + 1).map((O) => ({ ...O, wrapped: !1 })),
    ...o ? m.slice(0, j + 1).map((O) => ({ ...O, wrapped: !0 })) : []
  ].find((O) => O.chord !== d.chord) ?? null;
  let T = null;
  const _ = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!_ || o)) {
    const O = _ ? 0 : d.sectionIndex + 1, L = c[O], S = L.bars[0].first;
    T = {
      section: L,
      sectionIndex: O,
      firstChord: S,
      wrapped: _,
      continues: S === (f.second ?? f.first)
    };
  }
  return { nextChord: k, nextSection: T };
}
function Lv(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, j) => m + o(j), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const j = Math.abs(c - 2 * p);
    (j < f || j === f && p >= c - p) && (d = m, f = j), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const Do = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Gf = "musiikin-kartta:kappale-sointuvihjeet:v1", Sa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, of = {
  showChords: !0,
  level: 0,
  fadeOrder: Sa
};
function ka(s, a) {
  return !a.showChords || a.level >= a.fadeOrder[s];
}
function uf(s) {
  if (!s) return { ...of, fadeOrder: { ...Sa } };
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
    return { ...of, fadeOrder: { ...Sa } };
  }
}
function Ov() {
  try {
    return uf(localStorage.getItem(Gf));
  } catch {
    return uf(null);
  }
}
const $v = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Fv(s) {
  const a = $v.exec(s.trim());
  if (!a) return s;
  const [, o, , c = "", d = ""] = a;
  return o + "5" + c + d;
}
const Iv = (s, a) => a === "power" ? Fv(s) : s, Dv = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], zv = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Vv({ version: s, position: a, loop: o = !1, onSeek: c }) {
  const [d, f] = P.useState(Ov), [p, m] = P.useState(null), [j, R] = P.useState(!1), [k, T] = P.useState("full"), _ = (H) => Iv(H, k), O = cr[s], L = Uf(a, s), { section: S, sectionIndex: w, barIndex: V, beat: N, chord: F } = L, z = N >= 3 && S.bars[V].second ? "second" : "first", G = (H, le, ce) => `${s}:${H}:${le}:${ce}`, B = (H, le) => G(S.id, H, le), M = B(V, z), D = ka(F, d), ne = D && p === M, re = (H, le, ce) => !ka(H, d) || p === B(le, ce), ye = d.showChords && d.level === 0, we = Do.filter((H) => ka(H, d)).length, { nextSection: J } = Rv(a, s, o), he = !!J && ka(J.firstChord, d);
  return P.useEffect(() => {
    m(null);
  }, [M]), P.useEffect(() => {
    try {
      localStorage.setItem(Gf, JSON.stringify(d));
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
            onChange: (H) => {
              f((le) => ({ ...le, showChords: H.target.checked })), m(null);
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
            checked: j,
            onChange: (H) => R(H.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, le]) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: H,
              checked: k === H,
              onChange: () => T(H)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: le })
        ] }, H))
      ] }),
      /* @__PURE__ */ r.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (H) => {
              const le = Number(H.target.value);
              f((ce) => ({ ...ce, level: le })), m(null);
            },
            children: Dv.map((H) => /* @__PURE__ */ r.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: we === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${we}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: Do.map((H) => /* @__PURE__ */ r.jsxs("label", { children: [
        H,
        /* @__PURE__ */ r.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: d.fadeOrder[H],
            onChange: (le) => {
              const ce = Number(le.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [H]: ce } })), m(null);
            },
            children: zv.map((le) => /* @__PURE__ */ r.jsx("option", { value: le.value, children: le.label }, le.value))
          }
        )
      ] }, H)) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ r.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-section-jump",
            value: S.id,
            onChange: (H) => {
              const le = O.find((ce) => ce.id === H.target.value);
              le && c(le.start);
            },
            children: O.map((H) => /* @__PURE__ */ r.jsxs("option", { value: H.id, children: [
              lf(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ r.jsxs("p", { className: "song-current-chord", children: [
          D && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ r.jsx("strong", { children: D && !ne ? "?" : _(F) }),
          /* @__PURE__ */ r.jsxs("span", { children: [
            S.title,
            ", tahti ",
            V + 1,
            ", isku ",
            N,
            "/4"
          ] }),
          D && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ne ? null : M),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        J && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: he ? "?" : _(J.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": S.title + ": tahdit", children: S.bars.map((H, le) => {
      const ce = le === V, W = ce && (N < 3 || !H.second), ae = ce && N >= 3 && !!H.second, q = re(H.first, le, "first"), v = H.second ? re(H.second, le, "second") : !1, E = (q ? _(H.first) : "sointu piilossa") + (H.second ? " " + (v ? _(H.second) : "sointu piilossa") : "") + (ye && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (ye && H.possibleChord ? " (" + _(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ce ? " active" : ""),
          "aria-pressed": ce,
          "aria-label": "Tahti " + (le + 1) + ": " + E + ". Siirry kohtaan " + lf(ns(w, le, s)),
          onClick: () => c(ns(w, le, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              le + 1
            ] }),
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ r.jsx("strong", { className: W && q ? "now" : "", children: q ? _(H.first) : "?" }),
              H.second && /* @__PURE__ */ r.jsx("strong", { className: ae && v ? "now" : "", children: v ? _(H.second) : "?" })
            ] }),
            ye && H.passingBass && /* @__PURE__ */ r.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            ye && H.possibleChord && /* @__PURE__ */ r.jsxs("small", { children: [
              "Mahdollinen (",
              _(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        le
      );
    }) }),
    j ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: Lv(O).map((H, le) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: H.map((ce) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: ce.title }),
        ce.lyrics?.map((W, ae) => /* @__PURE__ */ r.jsx("p", { children: W }, ae))
      ] }, ce.id)) }, le)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : S.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        S.title,
        ": sanat"
      ] }),
      S.lyrics.map((H, le) => /* @__PURE__ */ r.jsx("p", { children: H }, le))
    ] }),
    ye && S.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: S.note })
  ] });
}
const Ta = 7, Bv = { name: "bluesasteikko", base: Fe.SCALES.mp.base, add: [[6, "♭5"]] }, Co = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: Fe.SCALES.mp,
    system: "pentatonic",
    note: "G-mollipentatoninen on hyvä lähtökohta kappaleen improvisointiin. Kuuntele, miten eri sävelet sopivat kulloinkin soivaan sointuun."
  },
  {
    id: "blues",
    title: "G-bluesasteikko",
    scale: Bv,
    system: "pentatonic",
    note: "Bluesille ominainen lisäsävel D♭ (♭5) on jännite- ja ohitussävel: soita se ohimennen C:n ja D:n välissä, älä jää siihen pitkäksi kohdesäveleksi."
  },
  {
    id: "aeolian",
    title: "G-luonnollinen molli (aiolinen)",
    scale: Fe.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function Kv(s) {
  return Fe.scaleNotes(s).map(([a, o]) => Fe.noteName(Ta, a, o));
}
const Wf = (s) => s === "pentatonic" ? 5 : 7;
function Hv(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= Wf(s.system)), d = Fe.fingeringBoxes(Ta, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (Ta + m) % 12), p = (m, j) => j >= 0 && j <= o && f.includes((Fe.OPEN_PITCHES[m] + j) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((j) => {
    const R = j.strings.map((T, _) => {
      if (!T.length) return T;
      const O = T[T.length - 1];
      return p(_, O + 1) ? [...T.slice(0, -1), O + 1] : T;
    }), k = R.flat();
    return { ...j, strings: R, start: Math.min(...k), end: Math.max(...k) };
  }) }));
}
const cf = 17;
function Uv({ open: s }) {
  const [a, o] = P.useState("mp"), [c, d] = P.useState({ pentatonic: [], "3nps": [] }), [f, p] = P.useState(!1), [m, j] = P.useState(!1), R = P.useRef(null), k = Co.find((w) => w.id === a) ?? Co[0], T = c[k.system], _ = Hv(k, T, cf), O = _.some((w) => w.positions.length > 0), L = Fe.renderBoard(Ta, k.scale, cf, {
    automatic: !0,
    boxes: _,
    onlyBoxNotes: O && f,
    label: k.title + (T.length ? ", " + T.map((w) => "boksi " + w).join(", ") : "")
  });
  P.useEffect(() => {
    const w = R.current;
    !w || !s || _.length === 1 && Fe.revealPositions(w, ".box-highlight");
  }, [L, s]);
  function S(w, V) {
    d((N) => ({ ...N, [k.system]: V ? [...N[k.system], w].sort((F, z) => F - z) : N[k.system].filter((F) => F !== w) }));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ r.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ r.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ r.jsx("select", { value: a, onChange: (w) => o(w.target.value), children: Co.map((w) => /* @__PURE__ */ r.jsx("option", { value: w.id, children: w.title }, w.id)) })
    ] }) }),
    /* @__PURE__ */ r.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ r.jsx("strong", { children: k.title }),
      /* @__PURE__ */ r.jsx("span", { children: Kv(k.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "song-scale-note", children: k.note }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: R,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: L }
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
      k.scale.add.length > 0 && /* @__PURE__ */ r.jsxs("span", { children: [
        /* @__PURE__ */ r.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        k.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (w) => {
        w.preventDefault(), j((V) => !V);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ r.jsx("p", { className: "song-box-system", children: k.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Wf(k.system) }, (w, V) => V + 1).map((w) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": w, children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            value: w,
            checked: T.includes(w),
            onChange: (V) => S(w, V.target.checked)
          }
        ),
        " Boksi ",
        w
      ] }, k.system + w)) }),
      /* @__PURE__ */ r.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            checked: O && f,
            disabled: !O,
            onChange: (w) => p(w.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: O ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Qf = null;
function Gv() {
  return Av(new URLSearchParams(location.search).get("kappale")) ?? Qf ?? _v;
}
function Wv(s) {
  Qf = s;
  const a = new URL(location.href);
  Hf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Pv(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Qv = {
  acoustic: {
    label: "Akustinen versio",
    length: "3:53",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-laulu.mp3"
  },
  normal: {
    label: "Normaali versio",
    length: "3:32",
    backing: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3",
    guitar: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kitara.mp3",
    vocals: "assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-laulu.mp3"
  }
}, df = 1e-3;
function ff(s, a) {
  try {
    s.currentTime = a;
  } catch {
  }
}
function hf(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Yv({ onBack: s }) {
  const a = P.useRef(null), o = P.useRef(null), c = P.useRef(null), d = P.useRef(0), f = P.useRef(new bf()), p = P.useRef(null), [m, j] = P.useState(Gv), R = Qv[m], [k, T] = P.useState(!1), [_, O] = P.useState(!0), [L, S] = P.useState(!0), [w, V] = P.useState(!1), [N, F] = P.useState(!1), [z, G] = P.useState(!1), [B, M] = P.useState(Ep), [D] = P.useState(() => Pf() ? "element" : "webaudio"), ne = P.useRef(null), [re, ye] = P.useState(0), [we, J] = P.useState(0), [he, H] = P.useState("");
  function le(C = !1, X) {
    const oe = a.current;
    if (oe)
      for (const ue of [o.current, c.current])
        ue && (!X || ue === X) && f.current.align(oe, ue, C);
  }
  function ce() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, _],
      ["vocals", c.current, L]
    ];
  }
  function W(C = B, X) {
    for (const [oe, ue, fe] of ce()) {
      if (!ue) continue;
      const ve = Dd(oe, C, X?.[oe] ?? fe);
      if (D === "webaudio" && ne.current?.routed(ue))
        ne.current.setLevel(ue, ve);
      else
        try {
          ue.volume = Dd(oe, C);
        } catch {
        }
    }
  }
  function ae(C) {
    M(C), Cp(C), W(C);
  }
  function q() {
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), T(!1);
  }
  function v(C) {
    if (C !== m) {
      p.current = null, q();
      for (const X of [a.current, o.current, c.current])
        if (X)
          try {
            X.currentTime = 0;
          } catch {
          }
      ye(0), J(0), H(""), j(C), Wv(C);
    }
  }
  function E(C) {
    const X = a.current;
    if (!X || !Number.isFinite(C)) return;
    const oe = Math.max(0, Math.min(C, Number.isFinite(X.duration) ? X.duration : C));
    p.current = oe, ye(oe), ff(X, oe);
  }
  function ie(C) {
    const X = p.current;
    if (X === null || C !== a.current || C.seeking) return;
    const oe = Number.isFinite(C.duration) ? Math.min(X, C.duration) : X;
    if (oe !== X && (p.current = oe, ye(oe)), Math.abs(C.currentTime - oe) < df) return;
    const ue = C.seekable;
    for (let fe = 0; fe < ue.length; fe++)
      if (ue.start(fe) <= oe && oe <= ue.end(fe)) {
        ff(C, oe);
        return;
      }
  }
  function je(C) {
    if (C !== a.current) return;
    const X = p.current;
    if (X === null)
      ye(C.currentTime);
    else if (C.readyState >= 1 && !C.seeking && Math.abs(C.currentTime - X) < df) {
      p.current = null, le(!0);
      return;
    }
    C.paused || le();
  }
  async function Se() {
    const C = a.current, X = o.current, oe = c.current;
    if (!C || !X || !oe) return;
    if (k) {
      q();
      return;
    }
    H("");
    const ue = p.current ?? C.currentTime;
    if (Number.isFinite(C.duration) && ue >= C.duration - 0.05 && E(0), ie(C), D === "webaudio" && (ne.current ??= new Fp(), ne.current.unlock()))
      for (const ve of [C, X, oe]) ne.current.route(ve);
    W(), X.muted = !_, oe.muted = !L, le(!0);
    const fe = ++d.current;
    try {
      _ || X.pause(), L || oe.pause();
      const ve = [C.play(), ..._ ? [X.play()] : [], ...L ? [oe.play()] : []];
      if (await Promise.all(ve), fe !== d.current) return;
      le(), T(!0);
    } catch {
      if (fe !== d.current) return;
      q(), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function U(C, X, oe) {
    if (!C) return;
    if (C.muted = !X, !X) {
      C.pause();
      return;
    }
    !a.current || !k || (le(!0, C), C.play().catch(() => H(oe + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function K(C) {
    O(C), W(B, { guitar: C }), U(o.current, C, "Kitararaita");
  }
  function ee(C) {
    S(C), W(B, { vocals: C }), U(c.current, C, "Lauluraita");
  }
  return P.useEffect(() => {
    const C = () => {
      document.hidden && q();
    };
    return document.addEventListener("visibilitychange", C), () => {
      document.removeEventListener("visibilitychange", C), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), ne.current?.close();
    };
  }, []), P.useEffect(() => {
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
          onChange: (C) => v(C.target.value),
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
          R.label,
          " · ",
          R.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          Se();
        }, children: k ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: we > 0 ? we : 1,
            step: 0.1,
            value: Math.min(re, we > 0 ? we : 1),
            disabled: we <= 0,
            onChange: (C) => E(Number(C.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          hf(re),
          " / ",
          hf(we)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: _,
              onChange: (C) => K(C.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: L,
              onChange: (C) => ee(C.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: w,
              onChange: (C) => V(C.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": D, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            B > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            B > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: B,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": B + " %",
              onChange: (C) => ae(Number(C.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            B,
            " %"
          ] })
        ] })
      ] }),
      he && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: he }),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: a,
          src: R.backing,
          preload: "metadata",
          loop: w,
          onLoadedMetadata: (C) => {
            C.currentTarget === a.current && (J(C.currentTarget.duration), ie(C.currentTarget));
          },
          onProgress: (C) => ie(C.currentTarget),
          onCanPlay: (C) => ie(C.currentTarget),
          onTimeUpdate: (C) => je(C.currentTarget),
          onEnded: (C) => {
            C.currentTarget !== a.current || C.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), T(!1), ye(C.currentTarget.duration));
          },
          onPause: (C) => {
            C.currentTarget === a.current && T(!1);
          },
          onError: () => H(R.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: o,
          src: R.guitar,
          preload: "metadata",
          muted: !_,
          loop: w,
          onLoadedMetadata: () => {
            a.current?.paused && le(!0);
          },
          onError: () => H(R.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: c,
          src: R.vocals,
          preload: "metadata",
          muted: !L,
          loop: w,
          onLoadedMetadata: () => {
            a.current?.paused && le(!0);
          },
          onError: () => H(R.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-collapse", open: N, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (C) => {
        C.preventDefault(), F((X) => !X);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(Vv, { version: m, position: re, loop: w, onSeek: E })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: z, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (C) => {
        C.preventDefault(), G((X) => !X);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(Uv, { open: z })
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
}, wa = (s, a = 1) => s.toFixed(a).replace(".", ",").replace("-", "−"), Yf = (s) => {
  const a = Math.round(s);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Vo = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function Jv(s, a, o, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (s) {
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
function Jf({ frame: s, threshold: a }) {
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
function Xv({ mic: s, frame: a, heard: o, s: c, now: d }) {
  const f = $f(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${be(p.midi, c.flats, !0)} · ${Yf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : zo[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(Jf, { frame: a, threshold: c.minRms })
  ] });
}
function Zv({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: j, calibrating: R, calibration: k, onTest: T, onStop: _, onCalibrate: O }) {
  const L = P.useId(), S = $f(s.phase, a), w = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", V = s.phase === "on", N = o && d - o.at < 1500 ? o : null, F = N && (S === "pitch" || S === "untuned"), z = V && (a?.peak ?? 0) >= 0.98, G = s.phase === "error" ? [] : Jv(S, f, s.info, z), B = !f.device || m.some((D) => D.deviceId === f.device), M = (D, ne) => p({ ...f, [D]: ne });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${L}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${L}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${S}`, "data-testid": "mic-state", "data-reading": S, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : zo[S],
      S === "pitch" && N ? ` ${be(N.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Vo(s.info)}.` : s.phase === "error" ? s.error : zo[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    V && /* @__PURE__ */ r.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ r.jsxs("dd", { "data-testid": "mic-device", children: [
          Vo(s.info),
          s.info && s.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${s.info.channels}` : "",
          s.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ r.jsxs("dd", { children: [
          /* @__PURE__ */ r.jsx(Jf, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            wa(Math.max(-60, or(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: N ? be(N.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: N ? `${wa(N.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: N ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          Yf(N.cents),
          " senttiä",
          /* @__PURE__ */ r.jsx("span", { className: `cents ${N.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, N.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-clarity", children: N ? `${Math.round(N.clarity * 100)} %` : a?.clarity !== void 0 && S === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    V && c && d - c.timestamp < 4e3 && /* @__PURE__ */ r.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      be(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    G.length > 0 && V && /* @__PURE__ */ r.jsx("ul", { className: "mic-advice", children: G.map((D) => /* @__PURE__ */ r.jsx("li", { children: D }, D)) }),
    s.phase === "error" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    k && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: k }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
      w ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: _, children: "Lopeta testi" }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: j, onClick: T, children: "Testaa mikrofoni" }),
      w && V && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: R, onClick: O, children: R ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    j && s.purpose !== "test" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", disabled: j, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${L}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${L}-device`, value: f.device, onChange: (D) => M("device", D.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !B && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((D, ne) => /* @__PURE__ */ r.jsx("option", { value: D.deviceId, children: D.label || `Äänitulo ${ne + 1}` }, D.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${L}-rms`, children: [
              "Äänikynnys · ",
              wa(or(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${L}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (D) => M("minRms", Number(D.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${L}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${L}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (D) => M("clarity", Number(D.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${L}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${L}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (D) => M("stability", Number(D.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${L}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${L}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (D) => M("cents", Number(D.target.value)) })
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
const qv = (s) => s.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[s.scale]) : Ci[s.mode === "caged" ? "maj" : s.chord].tones, mf = (s, a) => qv(s).find(([o]) => o === a)?.[1], Xf = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", ek = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function tk(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function nk(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Zr(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : Xf(s) ? `Oikein! ${a.degree}. aste on ${Zr(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${be(a.reference, s.flats, !0)} → ${a.name} on ${qr[a.interval]} ${ek(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${be(d.midi, s.flats)} on ${kf[d.string]}: ${Ti(d.fret)}.` : `Oikein! Soitit sävelen ${be(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function ik(s, a, o, c, d) {
  if (o === "note") return `Ei ${be(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${mf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ve(d.midi) === Ve(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${an[d.string]}-kieli. Etsi sävel ${Ho[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${be(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (Xf(s)) {
    const p = Ve(d.midi - s.root), m = mf(s, p), j = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Zr(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${be(d.midi, s.flats)}, joka ei kuulu ${j}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${be(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function rk(s, a, o) {
  const c = be(o, s.flats, !0);
  return Ve(o) === Ve(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Zf(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => an[p] ? `${an[p]}-kieli, ${Ti(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${be(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${be(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && qr[c(1)] ? `${qr[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ci[p]) return null;
      const m = Ci[p].tones.find(([j]) => j === c(3))?.[1];
      return m ? `${yf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Fe.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const j = Fe.scaleNotes(p).find(([R]) => R === c(3))?.[1];
        return j ? `${m}: ${j}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ci.maj.tones.find(([j]) => j === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function pf(s) {
  return Object.entries(s).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Bo = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", sk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function ak(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${ir(s.mode)}${s.hints ? ` · ${Ma[s.hints].title}` : ""} · ${a} · keskimäärin ${Bo(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function lk({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = P.useState(""), p = P.useRef(null), { recent: m, sessions: j, stats: R } = s.data, k = Mi(a), T = jf(a), _ = [...new Set(m.map((N) => N.mode))].map((N) => {
    const F = m.filter((z) => z.mode === N);
    return { mode: N, ...Ao(F), last: Math.max(...F.map((z) => z.at)) };
  }).sort((N, F) => F.last - N.last), O = pf(R).filter((N) => !N.guided && N.mode === a.mode && N.input === k && N.check === T && N.stat.attempts >= 3).map((N) => ({ ...N, score: Uo(N.stat), text: Zf(N.item, a.flats) })).filter((N) => N.text && N.score < 0.8).sort((N, F) => N.score - F.score).slice(0, 5), L = pf(R).reduce((N, F) => N + F.stat.attempts, 0);
  function S() {
    const N = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), F = URL.createObjectURL(N), z = document.createElement("a");
    z.href = F, z.download = "musiikin-kartta-harjoittelu.json", z.click(), setTimeout(() => URL.revokeObjectURL(F), 1e3);
  }
  async function w(N) {
    if (N)
      try {
        const F = await N.text();
        if (L && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore(F), f("Varmuuskopio palautettu."), c();
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
    L === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        L,
        " vastattua kysymystä · ",
        j.length,
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
        /* @__PURE__ */ r.jsx("tbody", { children: _.map((N) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: ir(N.mode) }),
          /* @__PURE__ */ r.jsx("td", { children: N.count }),
          /* @__PURE__ */ r.jsx("td", { children: N.solo ? `${N.soloFirst}/${N.solo} · ${Math.round(N.soloFirst / N.solo * 100)} %` : "–" }),
          /* @__PURE__ */ r.jsx("td", { children: N.guided }),
          /* @__PURE__ */ r.jsx("td", { children: Bo(N.ms / N.count) })
        ] }, N.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi" }),
    O.length ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        ir(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ r.jsx("ul", { children: O.map((N) => /* @__PURE__ */ r.jsxs("li", { children: [
        N.text,
        " · viime aikoina ",
        Math.round(es(N.stat) * 100),
        " % heti oikein · ",
        Bo(ts(N.stat))
      ] }, N.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: L ? `Harjoituksessa ${ir(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        sk[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ r.jsx(cp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: R, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      j.length ? /* @__PURE__ */ r.jsx("ul", { children: j.slice(-10).reverse().map((N) => /* @__PURE__ */ r.jsx("li", { children: ak(N) }, N.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ r.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: S, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ r.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (N) => {
          w(N.target.files?.[0]);
        } }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !L, onClick: V, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ r.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ r.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function ok() {
  try {
    return new Rd(localStorage);
  } catch {
    return new Rd();
  }
}
const vf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), uk = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", ck = [0, 2, 4, 5, 7, 9, 11];
function dk(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function fk() {
  const [s] = P.useState(ok), [a, o] = P.useState(() => tp(location.search, s.data.settings)), [, c] = P.useReducer((I) => I + 1, 0), d = P.useRef(null), f = P.useRef(new rv()), p = P.useRef(new rs()), m = P.useRef(0), j = P.useRef(), R = P.useRef(), k = P.useRef(null), T = P.useRef(0), _ = P.useRef(null), O = P.useRef(a);
  O.current = a;
  const [L, S] = P.useState({ phase: "off", purpose: "none" }), w = P.useRef(L), V = (I) => {
    w.current = I, S(I);
  }, [N, F] = P.useState(null), [z, G] = P.useState(null), [B, M] = P.useState(null), [D, ne] = P.useState(0), [re, ye] = P.useState([]), [we, J] = P.useState(!1), [he, H] = P.useState(!1), [le, ce] = P.useState(""), [W, ae] = P.useState("info"), [q, v] = P.useState(""), [E, ie] = P.useState(0), [je, Se] = P.useState([]), [U, K] = P.useState([]), [ee, C] = P.useState(null), [X, oe] = P.useState(!1), [ue, fe] = P.useState(""), [ve, Ae] = P.useState(""), [Me, Ie] = P.useState(() => {
    const I = new URLSearchParams(location.search);
    return I.has("tila") || I.has("vanha") ? "legacy" : Hf(I.get("kappale")) ? "songs" : xp(I.get("polku"));
  });
  function Qe() {
    Ie(null);
    const I = new URL(location.href);
    I.searchParams.has("polku") && (I.searchParams.delete("polku"), history.replaceState(history.state, "", I.pathname + I.search + I.hash));
  }
  const Ye = () => {
    Bp().then(ye).catch(() => {
    });
  };
  function Ge() {
    clearTimeout(R.current), k.current = null, oe(!1);
  }
  function Xe() {
    F(null), G(null), M(null);
  }
  function ut() {
    f.current.stop(), Ge(), V({ phase: "off", purpose: "none" }), Xe();
  }
  async function Je(I) {
    if (f.current.active && w.current.phase === "on")
      return Ge(), V({ ...w.current, purpose: I }), f.current.rearm(), !0;
    V({ phase: "requesting", purpose: I }), Xe();
    try {
      const se = await f.current.start(O.current.device, {
        ...vf(O.current),
        onFrame: (De) => Qt.current.frame(De),
        onStableNote: (De) => Qt.current.stable(De)
      }, () => Qt.current.lost());
      return se ? (V({ phase: "on", purpose: I, info: se }), Ye(), !0) : !1;
    } catch (se) {
      return V({ phase: "error", purpose: "none", error: iv(se) }), !1;
    }
  }
  function Be(I) {
    k.current?.push(I.rms);
    const se = performance.now();
    se - T.current < 66 || (T.current = se, F(I), ne(se), I.midi !== void 0 && I.frequency !== void 0 && G({ midi: I.midi, frequency: I.frequency, cents: I.cents ?? 0, clarity: I.clarity ?? 0, tuned: I.status === "pitch", at: se }));
  }
  function it(I) {
    w.current.purpose === "test" ? M(I) : w.current.purpose === "round" && He(I.midi, "mic", void 0, I.heldMs);
  }
  function Vt() {
    const I = w.current.purpose === "round";
    Ge(), Xe(), V({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const se = d.current;
    I && se && ["active", "feedback", "paused"].includes(se.phase) && (_t(), H(!1), se.pause(), v("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Qt = P.useRef({ frame: Be, stable: it, lost: Vt });
  Qt.current = { frame: Be, stable: it, lost: Vt };
  function Nt(I) {
    const se = Na(I), De = se.device !== O.current.device;
    O.current = se, o(se), s.settings(se), v(""), f.current.active && (De && w.current.purpose === "test" ? (ut(), Je("test")) : f.current.setOptions(vf(se)));
  }
  function ln(I) {
    Ae(""), d.current = null, Ie(I);
  }
  function Yt() {
    fe(""), Je("test");
  }
  function Jt() {
    w.current.phase !== "on" || w.current.purpose !== "test" || (Ge(), k.current = [], oe(!0), fe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), R.current = setTimeout(() => {
      const I = k.current ?? [];
      if (Ge(), I.length < 10) {
        fe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: se, noise: De, loud: Lt } = sv(I);
      Nt({ ...O.current, minRms: se }), fe(`Taustakohina on ${Math.round(or(De))} dB ja äänikynnys nyt ${Math.round(or(se))} dB. ${Lt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function _t() {
    m.current++, clearTimeout(j.current), p.current.stop();
  }
  function Ne(I, se) {
    if (!I.results.length) return;
    const De = Ao(I.results);
    s.session({
      id: I.id,
      mode: I.settings.mode,
      count: De.count,
      first: De.first,
      ms: De.ms,
      solo: De.solo,
      soloFirst: De.soloFirst,
      hints: I.settings.hints,
      at: Date.now(),
      complete: se
    });
  }
  async function Bt(I) {
    if (!I.question?.sound.length || I.phase !== "active") return;
    _t();
    const se = m.current;
    I.pause(), f.current.pause(), H(!0), ae("info"), ce("Kuuntele…"), c();
    try {
      await p.current.play(I.question.sound);
    } catch {
      se === m.current && v("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    se !== m.current || d.current !== I || (I.resume(), f.current.resume(), H(!1), ce(""), c());
  }
  async function Te(I) {
    Se([]), K([]), C(null), v(""), ie(I.hintLevel), f.current.rearm(), ae("info"), ce(""), c(), I.question?.sound.length && await Bt(I);
  }
  async function Pe() {
    const I = O.current, se = Mo(I);
    if (se) {
      v(se);
      return;
    }
    _t();
    const De = m.current;
    if (v(""), fe(""), Ae(""), pa(I)) {
      J(!0);
      const dt = await Je("round");
      if (De !== m.current) return;
      if (J(!1), !dt) {
        v("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else w.current.phase !== "off" && ut();
    const Lt = new jp(I, () => s.data.stats, (dt) => s.record(dt));
    try {
      Lt.start();
    } catch (dt) {
      w.current.purpose === "round" && ut(), v(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Lt, requestAnimationFrame(() => _.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Te(Lt);
  }
  function Re() {
    _t(), J(!1), ut();
  }
  function He(I, se, De, Lt = 0) {
    const dt = d.current, _n = dt?.question;
    if (!dt || !_n || dt.phase !== "active") return;
    const mr = dt.answer(I, se, De, Lt);
    if (mr !== "ignored") {
      if (mr === "candidate")
        C(I), ae("bad"), ce(rk(dt.settings, _n, I));
      else if (mr === "wrong")
        De ? Se((Vn) => [...Vn, De]) : K((Vn) => [...Vn, I]), ae("bad"), ce(ik(dt.settings, _n, se, I, De));
      else if (C(null), ae("good"), ce(nk(dt.settings, _n, se, I, De)), Ne(dt, !1), dt.settings.advance) {
        const Vn = m.current;
        j.current = setTimeout(() => {
          Vn === m.current && st();
        }, se === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function st() {
    const I = d.current;
    if (!(!I || I.phase !== "feedback")) {
      _t();
      try {
        I.next();
      } catch (se) {
        Rt(!1), v(se instanceof Error ? se.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (I.phase === "done") {
        Rt(!0);
        return;
      }
      await Te(I);
    }
  }
  function Rt(I = !1) {
    _t(), H(!1), J(!1), (w.current.purpose === "round" || w.current.phase === "requesting") && ut();
    const se = d.current;
    se && (se.stop(), Ne(se, I)), C(null), ie(0), Se([]), K([]), v(""), Ae(I ? "complete" : "stopped"), ae("info"), ce(""), c();
  }
  function vt() {
    const I = d.current;
    if (!I || !["active", "feedback", "paused"].includes(I.phase)) return;
    _t(), H(!1), I.pause();
    const se = w.current.purpose === "round";
    se && ut(), ae("info"), ce(`Harjoitus on tauolla.${se ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function Xt() {
    const I = d.current;
    if (!I || I.phase !== "paused" || he) return;
    _t();
    const se = m.current;
    if (v(""), pa(I.settings)) {
      J(!0);
      const De = await Je("round");
      if (se !== m.current) return;
      if (J(!1), !De) {
        v("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    I.resume(), ae("info"), ce(""), c(), I.phase === "active" && (f.current.rearm(), I.question?.sound.length && await Bt(I));
  }
  function En(I) {
    const se = d.current;
    !se || se.phase !== "active" || (se.useHint(I), ie(I), c());
  }
  const vn = P.useRef({ hidden: () => {
  }, restored: () => {
  } });
  vn.current = {
    hidden: () => {
      const I = d.current;
      I && ["active", "feedback"].includes(I.phase) || he ? vt() : w.current.phase !== "off" && w.current.phase !== "error" && (_t(), J(!1), ut());
    },
    restored: () => {
      J(!1), H(!1), V({ phase: "off", purpose: "none" }), Xe(), c();
    }
  }, P.useEffect(() => {
    Ye();
    const I = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", I);
    const se = () => {
      m.current++, clearTimeout(j.current), clearTimeout(R.current), f.current.stop(), p.current.stop(), nv(), d.current?.pause();
    }, De = () => {
      document.hidden && vn.current.hidden();
    }, Lt = (dt) => {
      dt.persisted && vn.current.restored();
    };
    return document.addEventListener("visibilitychange", De), window.addEventListener("pagehide", se), window.addEventListener("pageshow", Lt), () => {
      se(), navigator.mediaDevices?.removeEventListener?.("devicechange", I), document.removeEventListener("visibilitychange", De), window.removeEventListener("pagehide", se), window.removeEventListener("pageshow", Lt);
    };
  }, []);
  const kn = P.useRef(null), ss = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${he}`;
  P.useEffect(() => {
    const I = d.current, se = _.current, De = document.activeElement;
    !I || !se || !(De === document.body || se.contains(De)) || (I.phase === "feedback" ? kn.current?.focus({ preventScroll: !0 }) : I.phase === "active" && !he && (De === document.body || De === kn.current) && se.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [ss]);
  const $e = d.current, et = !!$e && ["active", "paused", "feedback"].includes($e.phase), Ze = et ? $e.settings : a, ct = et ? $e.question : void 0, Kt = !!ct && !!$e?.answered, Zt = et && $e.phase === "paused" && !he && !Kt, Ai = et && $e.phase === "active" && !he, Cn = et ? null : Mo(a), Dn = et || we, di = _i(Ze), dr = fp(Ze), fi = ct && !Kt ? E : 0, fr = ct ? gp(Ze, ct, Kt ? 2 : fi) : { marks: [], text: "" }, as = [...new Map([...fr.marks, ...Kt ? [] : je.map((I) => ({ ...I, label: be(I.midi, Ze.flats), kind: "wrong" }))].map((I) => [Ue(I), I])).values()], Tn = et && pa(Ze), ls = !!ct && !Zt && (ct.choices === "position" || as.length > 0), jt = $e ? Ao($e.results) : null, Pa = !$e || Ze.hints !== "fade" ? "" : $e.index <= 3 ? " · vastaus näkyy" : $e.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hr = $e && !et ? $e.results.filter((I) => I.errors > 0 || I.hint) : [], [os, us] = dk(Ze), Mn = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
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
  return !et && Me === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(wp, { onSelect: ln })
  ] }) : !et && Me === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(xv, { onBack: Qe })
  ] }) : !et && Me === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(wv, { onBack: Qe })
  ] }) : !et && Me === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(Cv, { onBack: Qe })
  ] }) : !et && Me === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx(Yv, { onBack: Qe })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    Mn,
    zn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: os, children: [
      "Lue tämän harjoituksen teoria: ",
      us,
      " →"
    ] }) }),
    Me !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && Rt(), Qe();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: Me === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: Me === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: ir(Ze.mode) }),
      " · ",
      $d(Ze)
    ] }) : Me === "legacy" ? /* @__PURE__ */ r.jsx(Fd, { s: a, change: Nt, locked: Dn, problem: Cn }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Fd, { s: a, change: Nt, locked: Dn, problem: Cn })
    ] }),
    !et && (Me === "legacy" || pa(a)) && /* @__PURE__ */ r.jsx(
      Zv,
      {
        mic: L,
        frame: N,
        heard: z,
        accepted: B,
        now: D,
        s: a,
        change: Nt,
        devices: re,
        locked: we,
        calibrating: X,
        calibration: ue,
        onTest: Yt,
        onStop: ut,
        onCalibrate: Jt
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: _, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: ir(Ze.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${$e.index}${$e.total ? " / " + $e.total : " · vapaa harjoittelu"} · ${Ma[Ze.hints].title}${Pa}${$e.phase === "paused" && !he ? " · tauolla" : ""}` : ve === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        $e && $e.results.length > 0 && jt ? /* @__PURE__ */ r.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ r.jsx("h3", { children: ve === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
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
              /* @__PURE__ */ r.jsx("dd", { children: uk(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          hr.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(hr.map((I) => Zf(I.item, a.flats)).filter(Boolean))].slice(0, 6).map((I) => /* @__PURE__ */ r.jsx("li", { children: I }, I)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: $d(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: we ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!Cn, onClick: () => {
          Pe();
        }, children: $e?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !$e && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ct && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: Zt ? "Harjoitus on tauolla." : ct.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: Zt ? "Kysymys palaa näkyviin, kun jatkat." : he ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : tk(Ze, ct) }),
        $e.hintLevel > 0 && !Kt && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ze.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Tn && /* @__PURE__ */ r.jsx(Xv, { mic: L, frame: N, heard: z, s: Ze, now: D }),
        ct.choices === "note" && !Zt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ze.accidentals ? Array.from({ length: 12 }, (I, se) => se) : ck).map((I) => /* @__PURE__ */ r.jsx("button", { type: "button", className: U.includes(I) ? "wrong" : Kt && I === ct.midi % 12 ? "right" : "", disabled: !Ai || U.includes(I), onClick: () => He(I, "note"), children: be(I, Ze.flats) }, I)) }),
        ct.choices === "degree" && !Zt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ze.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[Ze.scale]) : Ci[Ze.chord].tones).map(([I, se]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: U.includes(I) ? "wrong" : Kt && I === ct.interval ? "right" : "", disabled: !Ai || U.includes(I), onClick: () => He(I, "degree"), children: se }, I)) }),
        ls && /* @__PURE__ */ r.jsx(
          ui,
          {
            area: dr,
            marks: as,
            disabled: !Ai || ct.choices !== "position" || Ze.input === "mic",
            onAnswer: (I) => He(I.midi, "board", I),
            caption: di.fixed === "shape" ? `${Ze.shape}-muodon alue` : di.fixed === "box" ? `Boksin ${Ze.box} alue` : "Otelauta"
          }
        ),
        !Kt && !Zt && fi > 0 && fr.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: fr.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: le }),
        ee !== null && $e.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            $e.confirmWrong(), C(null), ce("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        q && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: q }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          $e.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: kn, onClick: () => {
            st();
          }, children: $e.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          $e.phase === "active" && !Kt && !he && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            fi === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(Math.max(1, $e.hintLevel)), children: $e.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            fi === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(2), children: "Näytä vastaus" }),
            fi > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ie(0), children: "Piilota vihje" })
          ] }),
          ct.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !Ai, onClick: () => {
            Bt($e);
          }, children: "Kuuntele uudelleen" }),
          $e.phase === "paused" && !he ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: we, onClick: () => {
            Xt();
          }, children: we ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: vt, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Rt(), children: "Lopeta harjoitus" })
        ] }),
        $e.phase === "feedback" && Ze.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && q && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: q })
    ] }),
    !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Fe.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: np(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(lk, { store: s, s: a, locked: Dn, changed: () => {
        const I = Na(s.data.settings);
        O.current = I, o(I), c();
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
Wm.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ r.jsx(fk, {}));
//# sourceMappingURL=app.js.map
