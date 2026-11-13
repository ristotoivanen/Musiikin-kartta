function Im(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ho = { exports: {} }, Qr = {}, mo = { exports: {} }, Le = {};
var gd;
function Dm() {
  if (gd) return Le;
  gd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), C = Symbol.iterator;
  function M(g) {
    return g === null || typeof g != "object" ? null : (g = C && g[C] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, w = {};
  function N(g, T, le) {
    this.props = g, this.context = T, this.refs = w, this.updater = le || A;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(g, T) {
    if (typeof g != "object" && typeof g != "function" && g != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, T, "setState");
  }, N.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function z() {
  }
  z.prototype = N.prototype;
  function S(g, T, le) {
    this.props = g, this.context = T, this.refs = w, this.updater = le || A;
  }
  var $ = S.prototype = new z();
  $.constructor = S, D($, N.prototype), $.isPureReactComponent = !0;
  var V = Array.isArray, J = Object.prototype.hasOwnProperty, U = { current: null }, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(g, T, le) {
    var xe, Se = {}, G = null, H = null;
    if (T != null) for (xe in T.ref !== void 0 && (H = T.ref), T.key !== void 0 && (G = "" + T.key), T) J.call(T, xe) && !_.hasOwnProperty(xe) && (Se[xe] = T[xe]);
    var q = arguments.length - 2;
    if (q === 1) Se.children = le;
    else if (1 < q) {
      for (var E = Array(q), X = 0; X < q; X++) E[X] = arguments[X + 2];
      Se.children = E;
    }
    if (g && g.defaultProps) for (xe in q = g.defaultProps, q) Se[xe] === void 0 && (Se[xe] = q[xe]);
    return { $$typeof: s, type: g, key: G, ref: H, props: Se, _owner: U.current };
  }
  function ne(g, T) {
    return { $$typeof: s, type: g.type, key: T, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function re(g) {
    return typeof g == "object" && g !== null && g.$$typeof === s;
  }
  function ge(g) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(le) {
      return T[le];
    });
  }
  var Ce = /\/+/g;
  function B(g, T) {
    return typeof g == "object" && g !== null && g.key != null ? ge("" + g.key) : T.toString(36);
  }
  function se(g, T, le, xe, Se) {
    var G = typeof g;
    (G === "undefined" || G === "boolean") && (g = null);
    var H = !1;
    if (g === null) H = !0;
    else switch (G) {
      case "string":
      case "number":
        H = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case s:
          case a:
            H = !0;
        }
    }
    if (H) return H = g, Se = Se(H), g = xe === "" ? "." + B(H, 0) : xe, V(Se) ? (le = "", g != null && (le = g.replace(Ce, "$&/") + "/"), se(Se, T, le, "", function(X) {
      return X;
    })) : Se != null && (re(Se) && (Se = ne(Se, le + (!Se.key || H && H.key === Se.key ? "" : ("" + Se.key).replace(Ce, "$&/") + "/") + g)), T.push(Se)), 1;
    if (H = 0, xe = xe === "" ? "." : xe + ":", V(g)) for (var q = 0; q < g.length; q++) {
      G = g[q];
      var E = xe + B(G, q);
      H += se(G, T, le, E, Se);
    }
    else if (E = M(g), typeof E == "function") for (g = E.call(g), q = 0; !(G = g.next()).done; ) G = G.value, E = xe + B(G, q++), H += se(G, T, le, E, Se);
    else if (G === "object") throw T = String(g), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    return H;
  }
  function K(g, T, le) {
    if (g == null) return g;
    var xe = [], Se = 0;
    return se(g, xe, "", "", function(G) {
      return T.call(le, G, Se++);
    }), xe;
  }
  function ue(g) {
    if (g._status === -1) {
      var T = g._result;
      T = T(), T.then(function(le) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = le);
      }, function(le) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = le);
      }), g._status === -1 && (g._status = 0, g._result = T);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ae = { current: null }, W = { transition: null }, ce = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: W, ReactCurrentOwner: U };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: K, forEach: function(g, T, le) {
    K(g, function() {
      T.apply(this, arguments);
    }, le);
  }, count: function(g) {
    var T = 0;
    return K(g, function() {
      T++;
    }), T;
  }, toArray: function(g) {
    return K(g, function(T) {
      return T;
    }) || [];
  }, only: function(g) {
    if (!re(g)) throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, Le.Component = N, Le.Fragment = o, Le.Profiler = d, Le.PureComponent = S, Le.StrictMode = c, Le.Suspense = x, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ce, Le.act = ee, Le.cloneElement = function(g, T, le) {
    if (g == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var xe = D({}, g.props), Se = g.key, G = g.ref, H = g._owner;
    if (T != null) {
      if (T.ref !== void 0 && (G = T.ref, H = U.current), T.key !== void 0 && (Se = "" + T.key), g.type && g.type.defaultProps) var q = g.type.defaultProps;
      for (E in T) J.call(T, E) && !_.hasOwnProperty(E) && (xe[E] = T[E] === void 0 && q !== void 0 ? q[E] : T[E]);
    }
    var E = arguments.length - 2;
    if (E === 1) xe.children = le;
    else if (1 < E) {
      q = Array(E);
      for (var X = 0; X < E; X++) q[X] = arguments[X + 2];
      xe.children = q;
    }
    return { $$typeof: s, type: g.type, key: Se, ref: G, props: xe, _owner: H };
  }, Le.createContext = function(g) {
    return g = { $$typeof: p, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: f, _context: g }, g.Consumer = g;
  }, Le.createElement = I, Le.createFactory = function(g) {
    var T = I.bind(null, g);
    return T.type = g, T;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(g) {
    return { $$typeof: m, render: g };
  }, Le.isValidElement = re, Le.lazy = function(g) {
    return { $$typeof: v, _payload: { _status: -1, _result: g }, _init: ue };
  }, Le.memo = function(g, T) {
    return { $$typeof: R, type: g, compare: T === void 0 ? null : T };
  }, Le.startTransition = function(g) {
    var T = W.transition;
    W.transition = {};
    try {
      g();
    } finally {
      W.transition = T;
    }
  }, Le.unstable_act = ee, Le.useCallback = function(g, T) {
    return ae.current.useCallback(g, T);
  }, Le.useContext = function(g) {
    return ae.current.useContext(g);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(g) {
    return ae.current.useDeferredValue(g);
  }, Le.useEffect = function(g, T) {
    return ae.current.useEffect(g, T);
  }, Le.useId = function() {
    return ae.current.useId();
  }, Le.useImperativeHandle = function(g, T, le) {
    return ae.current.useImperativeHandle(g, T, le);
  }, Le.useInsertionEffect = function(g, T) {
    return ae.current.useInsertionEffect(g, T);
  }, Le.useLayoutEffect = function(g, T) {
    return ae.current.useLayoutEffect(g, T);
  }, Le.useMemo = function(g, T) {
    return ae.current.useMemo(g, T);
  }, Le.useReducer = function(g, T, le) {
    return ae.current.useReducer(g, T, le);
  }, Le.useRef = function(g) {
    return ae.current.useRef(g);
  }, Le.useState = function(g) {
    return ae.current.useState(g);
  }, Le.useSyncExternalStore = function(g, T, le) {
    return ae.current.useSyncExternalStore(g, T, le);
  }, Le.useTransition = function() {
    return ae.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var jd;
function Ho() {
  return jd || (jd = 1, mo.exports = Dm()), mo.exports;
}
var xd;
function zm() {
  if (xd) return Qr;
  xd = 1;
  var s = Ho(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, x, R) {
    var v, C = {}, M = null, A = null;
    R !== void 0 && (M = "" + R), x.key !== void 0 && (M = "" + x.key), x.ref !== void 0 && (A = x.ref);
    for (v in x) c.call(x, v) && !f.hasOwnProperty(v) && (C[v] = x[v]);
    if (m && m.defaultProps) for (v in x = m.defaultProps, x) C[v] === void 0 && (C[v] = x[v]);
    return { $$typeof: a, type: m, key: M, ref: A, props: C, _owner: d.current };
  }
  return Qr.Fragment = o, Qr.jsx = p, Qr.jsxs = p, Qr;
}
var Sd;
function Vm() {
  return Sd || (Sd = 1, ho.exports = zm()), ho.exports;
}
var r = Vm(), L = Ho(), ma = {}, po = { exports: {} }, zt = {}, vo = { exports: {} }, ko = {};
var wd;
function Bm() {
  return wd || (wd = 1, (function(s) {
    function a(W, ce) {
      var ee = W.length;
      W.push(ce);
      e: for (; 0 < ee; ) {
        var g = ee - 1 >>> 1, T = W[g];
        if (0 < d(T, ce)) W[g] = ce, W[ee] = T, ee = g;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var ce = W[0], ee = W.pop();
      if (ee !== ce) {
        W[0] = ee;
        e: for (var g = 0, T = W.length, le = T >>> 1; g < le; ) {
          var xe = 2 * (g + 1) - 1, Se = W[xe], G = xe + 1, H = W[G];
          if (0 > d(Se, ee)) G < T && 0 > d(H, Se) ? (W[g] = H, W[G] = ee, g = G) : (W[g] = Se, W[xe] = ee, g = xe);
          else if (G < T && 0 > d(H, ee)) W[g] = H, W[G] = ee, g = G;
          else break e;
        }
      }
      return ce;
    }
    function d(W, ce) {
      var ee = W.sortIndex - ce.sortIndex;
      return ee !== 0 ? ee : W.id - ce.id;
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
    var x = [], R = [], v = 1, C = null, M = 3, A = !1, D = !1, w = !1, N = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, S = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(W) {
      for (var ce = o(R); ce !== null; ) {
        if (ce.callback === null) c(R);
        else if (ce.startTime <= W) c(R), ce.sortIndex = ce.expirationTime, a(x, ce);
        else break;
        ce = o(R);
      }
    }
    function V(W) {
      if (w = !1, $(W), !D) if (o(x) !== null) D = !0, ue(J);
      else {
        var ce = o(R);
        ce !== null && ae(V, ce.startTime - W);
      }
    }
    function J(W, ce) {
      D = !1, w && (w = !1, z(I), I = -1), A = !0;
      var ee = M;
      try {
        for ($(ce), C = o(x); C !== null && (!(C.expirationTime > ce) || W && !ge()); ) {
          var g = C.callback;
          if (typeof g == "function") {
            C.callback = null, M = C.priorityLevel;
            var T = g(C.expirationTime <= ce);
            ce = s.unstable_now(), typeof T == "function" ? C.callback = T : C === o(x) && c(x), $(ce);
          } else c(x);
          C = o(x);
        }
        if (C !== null) var le = !0;
        else {
          var xe = o(R);
          xe !== null && ae(V, xe.startTime - ce), le = !1;
        }
        return le;
      } finally {
        C = null, M = ee, A = !1;
      }
    }
    var U = !1, _ = null, I = -1, ne = 5, re = -1;
    function ge() {
      return !(s.unstable_now() - re < ne);
    }
    function Ce() {
      if (_ !== null) {
        var W = s.unstable_now();
        re = W;
        var ce = !0;
        try {
          ce = _(!0, W);
        } finally {
          ce ? B() : (U = !1, _ = null);
        }
      } else U = !1;
    }
    var B;
    if (typeof S == "function") B = function() {
      S(Ce);
    };
    else if (typeof MessageChannel < "u") {
      var se = new MessageChannel(), K = se.port2;
      se.port1.onmessage = Ce, B = function() {
        K.postMessage(null);
      };
    } else B = function() {
      N(Ce, 0);
    };
    function ue(W) {
      _ = W, U || (U = !0, B());
    }
    function ae(W, ce) {
      I = N(function() {
        W(s.unstable_now());
      }, ce);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, s.unstable_continueExecution = function() {
      D || A || (D = !0, ue(J));
    }, s.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < W ? Math.floor(1e3 / W) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(x);
    }, s.unstable_next = function(W) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var ce = 3;
          break;
        default:
          ce = M;
      }
      var ee = M;
      M = ce;
      try {
        return W();
      } finally {
        M = ee;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(W, ce) {
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
      var ee = M;
      M = W;
      try {
        return ce();
      } finally {
        M = ee;
      }
    }, s.unstable_scheduleCallback = function(W, ce, ee) {
      var g = s.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? g + ee : g) : ee = g, W) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return T = ee + T, W = { id: v++, callback: ce, priorityLevel: W, startTime: ee, expirationTime: T, sortIndex: -1 }, ee > g ? (W.sortIndex = ee, a(R, W), o(x) === null && W === o(R) && (w ? (z(I), I = -1) : w = !0, ae(V, ee - g))) : (W.sortIndex = T, a(x, W), D || A || (D = !0, ue(J))), W;
    }, s.unstable_shouldYield = ge, s.unstable_wrapCallback = function(W) {
      var ce = M;
      return function() {
        var ee = M;
        M = ce;
        try {
          return W.apply(this, arguments);
        } finally {
          M = ee;
        }
      };
    };
  })(ko)), ko;
}
var Nd;
function Km() {
  return Nd || (Nd = 1, vo.exports = Bm()), vo.exports;
}
var Ed;
function Hm() {
  if (Ed) return zt;
  Ed = 1;
  var s = Ho(), a = Km();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, C = {};
  function M(e) {
    return x.call(C, e) ? !0 : x.call(v, e) ? !1 : R.test(e) ? C[e] = !0 : (v[e] = !0, !1);
  }
  function A(e, t, n, i) {
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
  function D(e, t, n, i) {
    if (t === null || typeof t > "u" || A(e, t, n, i)) return !0;
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
  function w(e, t, n, i, l, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function S(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      S
    );
    N[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, S);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, S);
    N[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function $(e, t, n, i) {
    var l = N.hasOwnProperty(t) ? N[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, l, i) && (n = null), i || l === null ? M(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var V = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = /* @__PURE__ */ Symbol.for("react.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), re = /* @__PURE__ */ Symbol.for("react.provider"), ge = /* @__PURE__ */ Symbol.for("react.context"), Ce = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), se = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ee = Object.assign, g;
  function T(e) {
    if (g === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      g = t && t[1] || "";
    }
    return `
` + g + e;
  }
  var le = !1;
  function xe(e, t) {
    if (!e || le) return "";
    le = !0;
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
      le = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function Se(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = xe(e.type, !1), e;
      case 11:
        return e = xe(e.type.render, !1), e;
      case 1:
        return e = xe(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _:
        return "Fragment";
      case U:
        return "Portal";
      case ne:
        return "Profiler";
      case I:
        return "StrictMode";
      case B:
        return "Suspense";
      case se:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ge:
        return (e.displayName || "Context") + ".Consumer";
      case re:
        return (e._context.displayName || "Context") + ".Provider";
      case Ce:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case K:
        return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return G(e(t));
        } catch {
        }
    }
    return null;
  }
  function H(e) {
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
        return G(t);
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
  function q(e) {
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
  function E(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function X(e) {
    var t = E(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function de(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = E(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function he(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ve(e, t) {
    var n = t.checked;
    return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Pe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = q(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _e(e, t) {
    t = t.checked, t != null && $(e, "checked", t, !1);
  }
  function Ie(e, t) {
    _e(e, t);
    var n = q(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ye(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ye(e, t.type, q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
    (t !== "number" || he(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ue = Array.isArray;
  function Xe(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + q(n), t = null, l = 0; l < e.length; l++) {
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
    return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Je(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Ue(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: q(n) };
  }
  function Ve(e, t) {
    var n = q(t.value), i = q(t.defaultValue);
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
  }, Mt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Jt).forEach(function(e) {
    Mt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e];
    });
  });
  function we(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px";
  }
  function Bt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = we(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Te = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ae(e, t) {
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
      t && (t = Ms(t), Rt(e.stateNode, e.type, t));
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
    var i = Ms(n);
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
  function Pi(e, t, n, i, l, u, h, k, y) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, O);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Cn = !1, Dn = null, ci = !1, dr = null, di = { onError: function(e) {
    Cn = !0, Dn = e;
  } };
  function fr(e, t, n, i, l, u, h, k, y) {
    Cn = !1, Dn = null, Pi.apply(di, arguments);
  }
  function as(e, t, n, i, l, u, h, k, y) {
    if (fr.apply(this, arguments), Cn) {
      if (Cn) {
        var O = Dn;
        Cn = !1, Dn = null;
      } else throw Error(o(198));
      ci || (ci = !0, dr = O);
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
  function ba(e) {
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
    return e = ba(e), e !== null ? os(e) : null;
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
  var us = a.unstable_scheduleCallback, _n = a.unstable_cancelCallback, zn = a.unstable_shouldYield, F = a.unstable_requestPaint, ie = a.unstable_now, De = a.unstable_getCurrentPriorityLevel, Lt = a.unstable_ImmediatePriority, dt = a.unstable_UserBlockingPriority, Mn = a.unstable_NormalPriority, mr = a.unstable_LowPriority, Vn = a.unstable_IdlePriority, cs = null, yn = null;
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
      var k = h & ~l;
      k !== 0 ? i = pr(k) : (u &= h, u !== 0 && (i = pr(u)));
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
      var h = 31 - on(u), k = 1 << h, y = l[h];
      y === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = ih(k, t)) : y <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Ra(e) {
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
  function sh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - on(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Oa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - on(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Ge = 0;
  function Xo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Zo, $a, qo, eu, tu, Fa = !1, ms = [], Bn = null, Kn = null, Hn = null, kr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), Un = [], ah = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Rr(t), t !== null && $a(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
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
    var t = fi(e.target);
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
      var n = Da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        He = i, n.target.dispatchEvent(i), He = null;
      } else return t = Rr(n), t !== null && $a(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ru(e, t, n) {
    ps(e) && n.delete(t);
  }
  function oh() {
    Fa = !1, Bn !== null && ps(Bn) && (Bn = null), Kn !== null && ps(Kn) && (Kn = null), Hn !== null && ps(Hn) && (Hn = null), kr.forEach(ru), yr.forEach(ru);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fa || (Fa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, oh)));
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
  var Ai = V.ReactCurrentBatchConfig, vs = !0;
  function uh(e, t, n, i) {
    var l = Ge, u = Ai.transition;
    Ai.transition = null;
    try {
      Ge = 1, Ia(e, t, n, i);
    } finally {
      Ge = l, Ai.transition = u;
    }
  }
  function ch(e, t, n, i) {
    var l = Ge, u = Ai.transition;
    Ai.transition = null;
    try {
      Ge = 4, Ia(e, t, n, i);
    } finally {
      Ge = l, Ai.transition = u;
    }
  }
  function Ia(e, t, n, i) {
    if (vs) {
      var l = Da(e, t, n, i);
      if (l === null) nl(e, t, i, ks, n), nu(e, i);
      else if (lh(l, e, t, n, i)) i.stopPropagation();
      else if (nu(e, i), t & 4 && -1 < ah.indexOf(e)) {
        for (; l !== null; ) {
          var u = Rr(l);
          if (u !== null && Zo(u), u = Da(e, t, n, i), u === null && nl(e, t, i, ks, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else nl(e, t, i, null, n);
    }
  }
  var ks = null;
  function Da(e, t, n, i) {
    if (ks = null, e = st(i), e = fi(e), e !== null) if (t = Tn(e), t === null) e = null;
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
          case Mn:
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
  var Gn = null, za = null, ys = null;
  function au() {
    if (ys) return ys;
    var e, t = za, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, u = l.length;
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
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? js : lu, this.isPropagationStopped = lu, this;
    }
    return ee(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Va = Ht(bi), Sr = ee({}, bi, { view: 0, detail: 0 }), dh = Ht(Sr), Ba, Ka, wr, xs = ee({}, Sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ua, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (Ba = e.screenX - wr.screenX, Ka = e.screenY - wr.screenY) : Ka = Ba = 0, wr = e), Ba);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ka;
  } }), ou = Ht(xs), fh = ee({}, xs, { dataTransfer: 0 }), hh = Ht(fh), mh = ee({}, Sr, { relatedTarget: 0 }), Ha = Ht(mh), ph = ee({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vh = Ht(ph), kh = ee({}, bi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), yh = Ht(kh), gh = ee({}, bi, { data: 0 }), uu = Ht(gh), jh = {
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
  function Ua() {
    return wh;
  }
  var Nh = ee({}, Sr, { key: function(e) {
    if (e.key) {
      var t = jh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = gs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ua, charCode: function(e) {
    return e.type === "keypress" ? gs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Eh = Ht(Nh), Ch = ee({}, xs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cu = Ht(Ch), Th = ee({}, Sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ua }), _h = Ht(Th), Mh = ee({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ph = Ht(Mh), Ah = ee({}, xs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bh = Ht(Ah), Rh = [9, 13, 27, 32], Ga = m && "CompositionEvent" in window, Nr = null;
  m && "documentMode" in document && (Nr = document.documentMode);
  var Lh = m && "TextEvent" in window && !Nr, du = m && (!Ga || Nr && 8 < Nr && 11 >= Nr), fu = " ", hu = !1;
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
    if (Ri) return e === "compositionend" || !Ga && mu(e, t) ? (e = au(), ys = za = Gn = null, Ri = !1, e) : null;
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
    vn(i), t = Cs(t, "onChange"), 0 < t.length && (n = new Va("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Er = null, Cr = null;
  function Ih(e) {
    Ou(e, 0);
  }
  function Ss(e) {
    var t = Ii(e);
    if (de(t)) return e;
  }
  function Dh(e, t) {
    if (e === "change") return t;
  }
  var yu = !1;
  if (m) {
    var Wa;
    if (m) {
      var Qa = "oninput" in document;
      if (!Qa) {
        var gu = document.createElement("div");
        gu.setAttribute("oninput", "return;"), Qa = typeof gu.oninput == "function";
      }
      Wa = Qa;
    } else Wa = !1;
    yu = Wa && (!document.documentMode || 9 < document.documentMode);
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
      if (!x.call(t, l) || !un(e[l], t[l])) return !1;
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
    for (var e = window, t = he(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = he(e.document);
    }
    return t;
  }
  function Ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Uh(e) {
    var t = Eu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ya(n)) {
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
  var Gh = m && "documentMode" in document && 11 >= document.documentMode, Li = null, Ja = null, _r = null, Xa = !1;
  function Cu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xa || Li == null || Li !== he(i) || (i = Li, "selectionStart" in i && Ya(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), _r && Tr(_r, i) || (_r = i, i = Cs(Ja, "onSelect"), 0 < i.length && (t = new Va("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Li)));
  }
  function ws(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Oi = { animationend: ws("Animation", "AnimationEnd"), animationiteration: ws("Animation", "AnimationIteration"), animationstart: ws("Animation", "AnimationStart"), transitionend: ws("Transition", "TransitionEnd") }, Za = {}, Tu = {};
  m && (Tu = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function Ns(e) {
    if (Za[e]) return Za[e];
    if (!Oi[e]) return e;
    var t = Oi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Tu) return Za[e] = t[n];
    return e;
  }
  var _u = Ns("animationend"), Mu = Ns("animationiteration"), Pu = Ns("animationstart"), Au = Ns("transitionend"), bu = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    bu.set(e, t), f(t, [e]);
  }
  for (var qa = 0; qa < Ru.length; qa++) {
    var el = Ru[qa], Wh = el.toLowerCase(), Qh = el[0].toUpperCase() + el.slice(1);
    Wn(Wh, "on" + Qh);
  }
  Wn(_u, "onAnimationEnd"), Wn(Mu, "onAnimationIteration"), Wn(Pu, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Au, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
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
          var k = i[h], y = k.instance, O = k.currentTarget;
          if (k = k.listener, y !== u && l.isPropagationStopped()) break e;
          Lu(l, k, O), u = y;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], y = k.instance, O = k.currentTarget, k = k.listener, y !== u && l.isPropagationStopped()) break e;
          Lu(l, k, O), u = y;
        }
      }
    }
    if (ci) throw e = dr, ci = !1, dr = null, e;
  }
  function tt(e, t) {
    var n = t[ol];
    n === void 0 && (n = t[ol] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || ($u(t, e, 2, !1), n.add(i));
  }
  function tl(e, t, n) {
    var i = 0;
    t && (i |= 4), $u(n, e, i, t);
  }
  var Es = "_reactListening" + Math.random().toString(36).slice(2);
  function Pr(e) {
    if (!e[Es]) {
      e[Es] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Yh.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Es] || (t[Es] = !0, tl("selectionchange", !1, t));
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
          if (h = fi(k), h === null) return;
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
      var O = u, Y = st(n), Z = [];
      e: {
        var Q = bu.get(e);
        if (Q !== void 0) {
          var fe = Va, pe = e;
          switch (e) {
            case "keypress":
              if (gs(n) === 0) break e;
            case "keydown":
            case "keyup":
              fe = Eh;
              break;
            case "focusin":
              pe = "focus", fe = Ha;
              break;
            case "focusout":
              pe = "blur", fe = Ha;
              break;
            case "beforeblur":
            case "afterblur":
              fe = Ha;
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
              fe = ou;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = hh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = _h;
              break;
            case _u:
            case Mu:
            case Pu:
              fe = vh;
              break;
            case Au:
              fe = Ph;
              break;
            case "scroll":
              fe = dh;
              break;
            case "wheel":
              fe = bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = yh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = cu;
          }
          var ye = (t & 4) !== 0, ft = !ye && e === "scroll", P = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var j = O, b; j !== null; ) {
            b = j;
            var te = b.stateNode;
            if (b.tag === 5 && te !== null && (b = te, P !== null && (te = ct(j, P), te != null && ye.push(Ar(j, te, b)))), ft) break;
            j = j.return;
          }
          0 < ye.length && (Q = new fe(Q, pe, null, n, Y), Z.push({ event: Q, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", fe = e === "mouseout" || e === "pointerout", Q && n !== He && (pe = n.relatedTarget || n.fromElement) && (fi(pe) || pe[Pn])) break e;
          if ((fe || Q) && (Q = Y.window === Y ? Y : (Q = Y.ownerDocument) ? Q.defaultView || Q.parentWindow : window, fe ? (pe = n.relatedTarget || n.toElement, fe = O, pe = pe ? fi(pe) : null, pe !== null && (ft = Tn(pe), pe !== ft || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (fe = null, pe = O), fe !== pe)) {
            if (ye = ou, te = "onMouseLeave", P = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (ye = cu, te = "onPointerLeave", P = "onPointerEnter", j = "pointer"), ft = fe == null ? Q : Ii(fe), b = pe == null ? Q : Ii(pe), Q = new ye(te, j + "leave", fe, n, Y), Q.target = ft, Q.relatedTarget = b, te = null, fi(Y) === O && (ye = new ye(P, j + "enter", pe, n, Y), ye.target = b, ye.relatedTarget = ft, te = ye), ft = te, fe && pe) t: {
              for (ye = fe, P = pe, j = 0, b = ye; b; b = $i(b)) j++;
              for (b = 0, te = P; te; te = $i(te)) b++;
              for (; 0 < j - b; ) ye = $i(ye), j--;
              for (; 0 < b - j; ) P = $i(P), b--;
              for (; j--; ) {
                if (ye === P || P !== null && ye === P.alternate) break t;
                ye = $i(ye), P = $i(P);
              }
              ye = null;
            }
            else ye = null;
            fe !== null && Fu(Z, Q, fe, ye, !1), pe !== null && ft !== null && Fu(Z, ft, pe, ye, !0);
          }
        }
        e: {
          if (Q = O ? Ii(O) : window, fe = Q.nodeName && Q.nodeName.toLowerCase(), fe === "select" || fe === "input" && Q.type === "file") var je = Dh;
          else if (vu(Q)) if (yu) je = Kh;
          else {
            je = Vh;
            var Ne = zh;
          }
          else (fe = Q.nodeName) && fe.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (je = Bh);
          if (je && (je = je(e, O))) {
            ku(Z, je, n, Y);
            break e;
          }
          Ne && Ne(e, Q, O), e === "focusout" && (Ne = Q._wrapperState) && Ne.controlled && Q.type === "number" && Ye(Q, "number", Q.value);
        }
        switch (Ne = O ? Ii(O) : window, e) {
          case "focusin":
            (vu(Ne) || Ne.contentEditable === "true") && (Li = Ne, Ja = O, _r = null);
            break;
          case "focusout":
            _r = Ja = Li = null;
            break;
          case "mousedown":
            Xa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xa = !1, Cu(Z, n, Y);
            break;
          case "selectionchange":
            if (Gh) break;
          case "keydown":
          case "keyup":
            Cu(Z, n, Y);
        }
        var Ee;
        if (Ga) e: {
          switch (e) {
            case "compositionstart":
              var Me = "onCompositionStart";
              break e;
            case "compositionend":
              Me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Me = "onCompositionUpdate";
              break e;
          }
          Me = void 0;
        }
        else Ri ? mu(e, n) && (Me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Me = "onCompositionStart");
        Me && (du && n.locale !== "ko" && (Ri || Me !== "onCompositionStart" ? Me === "onCompositionEnd" && Ri && (Ee = au()) : (Gn = Y, za = "value" in Gn ? Gn.value : Gn.textContent, Ri = !0)), Ne = Cs(O, Me), 0 < Ne.length && (Me = new uu(Me, e, null, n, Y), Z.push({ event: Me, listeners: Ne }), Ee ? Me.data = Ee : (Ee = pu(n), Ee !== null && (Me.data = Ee)))), (Ee = Lh ? Oh(e, n) : $h(e, n)) && (O = Cs(O, "onBeforeInput"), 0 < O.length && (Y = new uu("onBeforeInput", "beforeinput", null, n, Y), Z.push({ event: Y, listeners: O }), Y.data = Ee));
      }
      Ou(Z, t);
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
  function $i(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Fu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, y = k.alternate, O = k.stateNode;
      if (y !== null && y === i) break;
      k.tag === 5 && O !== null && (k = O, l ? (y = ct(n, u), y != null && h.unshift(Ar(n, y, k))) : l || (y = ct(n, u), y != null && h.push(Ar(n, y, k)))), n = n.return;
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
  function _s() {
  }
  var il = null, rl = null;
  function sl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var al = typeof setTimeout == "function" ? setTimeout : void 0, Zh = typeof clearTimeout == "function" ? clearTimeout : void 0, Du = typeof Promise == "function" ? Promise : void 0, qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Du < "u" ? function(e) {
    return Du.resolve(null).then(e).catch(em);
  } : al;
  function em(e) {
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
  var Fi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fi, br = "__reactProps$" + Fi, Pn = "__reactContainer$" + Fi, ol = "__reactEvents$" + Fi, tm = "__reactListeners$" + Fi, nm = "__reactHandles$" + Fi;
  function fi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pn] || n[gn]) {
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
    return e = e[gn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ms(e) {
    return e[br] || null;
  }
  var ul = [], Di = -1;
  function Yn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Di || (e.current = ul[Di], ul[Di] = null, Di--);
  }
  function qe(e, t) {
    Di++, ul[Di] = e.current, e.current = t;
  }
  var Jn = {}, Et = Yn(Jn), Ot = Yn(!1), hi = Jn;
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
  function Ps() {
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
    for (var l in i) if (!(l in t)) throw Error(o(108, H(e) || "Unknown", l));
    return ee({}, n, i);
  }
  function As(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, hi = Et.current, qe(Et, e), qe(Ot, Ot.current), !0;
  }
  function Ku(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Bu(e, t, hi), i.__reactInternalMemoizedMergedChildContext = e, nt(Ot), nt(Et), qe(Et, e)) : nt(Ot), qe(Ot, n);
  }
  var An = null, bs = !1, cl = !1;
  function Hu(e) {
    An === null ? An = [e] : An.push(e);
  }
  function im(e) {
    bs = !0, Hu(e);
  }
  function Xn() {
    if (!cl && An !== null) {
      cl = !0;
      var e = 0, t = Ge;
      try {
        var n = An;
        for (Ge = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        An = null, bs = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), us(Lt, Xn), l;
      } finally {
        Ge = t, cl = !1;
      }
    }
    return null;
  }
  var Vi = [], Bi = 0, Rs = null, Ls = 0, qt = [], en = 0, mi = null, bn = 1, Rn = "";
  function pi(e, t) {
    Vi[Bi++] = Ls, Vi[Bi++] = Rs, Rs = e, Ls = t;
  }
  function Uu(e, t, n) {
    qt[en++] = bn, qt[en++] = Rn, qt[en++] = mi, mi = e;
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
  function dl(e) {
    e.return !== null && (pi(e, 1), Uu(e, 1, 0));
  }
  function fl(e) {
    for (; e === Rs; ) Rs = Vi[--Bi], Vi[Bi] = null, Ls = Vi[--Bi], Vi[Bi] = null;
    for (; e === mi; ) mi = qt[--en], qt[en] = null, Rn = qt[--en], qt[en] = null, bn = qt[--en], qt[en] = null;
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
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mi !== null ? { id: bn, overflow: Rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = sn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ut = e, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ml(e) {
    if (rt) {
      var t = Gt;
      if (t) {
        var n = t;
        if (!Wu(e, t)) {
          if (hl(e)) throw Error(o(418));
          t = Qn(n.nextSibling);
          var i = Ut;
          t && Wu(e, t) ? Gu(i, n) : (e.flags = e.flags & -4097 | 2, rt = !1, Ut = e);
        }
      } else {
        if (hl(e)) throw Error(o(418));
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
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps)), t && (t = Gt)) {
      if (hl(e)) throw Yu(), Error(o(418));
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
  function pl(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var rm = V.ReactCurrentBatchConfig;
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
          var k = l.refs;
          h === null ? delete k[u] : k[u] = h;
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
    function t(P, j) {
      if (e) {
        var b = P.deletions;
        b === null ? (P.deletions = [j], P.flags |= 16) : b.push(j);
      }
    }
    function n(P, j) {
      if (!e) return null;
      for (; j !== null; ) t(P, j), j = j.sibling;
      return null;
    }
    function i(P, j) {
      for (P = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? P.set(j.key, j) : P.set(j.index, j), j = j.sibling;
      return P;
    }
    function l(P, j) {
      return P = si(P, j), P.index = 0, P.sibling = null, P;
    }
    function u(P, j, b) {
      return P.index = b, e ? (b = P.alternate, b !== null ? (b = b.index, b < j ? (P.flags |= 2, j) : b) : (P.flags |= 2, j)) : (P.flags |= 1048576, j);
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function k(P, j, b, te) {
      return j === null || j.tag !== 6 ? (j = ao(b, P.mode, te), j.return = P, j) : (j = l(j, b), j.return = P, j);
    }
    function y(P, j, b, te) {
      var je = b.type;
      return je === _ ? Y(P, j, b.props.children, te, b.key) : j !== null && (j.elementType === je || typeof je == "object" && je !== null && je.$$typeof === ue && Ju(je) === j.type) ? (te = l(j, b.props), te.ref = Lr(P, j, b), te.return = P, te) : (te = aa(b.type, b.key, b.props, null, P.mode, te), te.ref = Lr(P, j, b), te.return = P, te);
    }
    function O(P, j, b, te) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== b.containerInfo || j.stateNode.implementation !== b.implementation ? (j = lo(b, P.mode, te), j.return = P, j) : (j = l(j, b.children || []), j.return = P, j);
    }
    function Y(P, j, b, te, je) {
      return j === null || j.tag !== 7 ? (j = wi(b, P.mode, te, je), j.return = P, j) : (j = l(j, b), j.return = P, j);
    }
    function Z(P, j, b) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return j = ao("" + j, P.mode, b), j.return = P, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case J:
            return b = aa(j.type, j.key, j.props, null, P.mode, b), b.ref = Lr(P, null, j), b.return = P, b;
          case U:
            return j = lo(j, P.mode, b), j.return = P, j;
          case ue:
            var te = j._init;
            return Z(P, te(j._payload), b);
        }
        if (Ue(j) || ce(j)) return j = wi(j, P.mode, b, null), j.return = P, j;
        $s(P, j);
      }
      return null;
    }
    function Q(P, j, b, te) {
      var je = j !== null ? j.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number") return je !== null ? null : k(P, j, "" + b, te);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            return b.key === je ? y(P, j, b, te) : null;
          case U:
            return b.key === je ? O(P, j, b, te) : null;
          case ue:
            return je = b._init, Q(
              P,
              j,
              je(b._payload),
              te
            );
        }
        if (Ue(b) || ce(b)) return je !== null ? null : Y(P, j, b, te, null);
        $s(P, b);
      }
      return null;
    }
    function fe(P, j, b, te, je) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return P = P.get(b) || null, k(j, P, "" + te, je);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case J:
            return P = P.get(te.key === null ? b : te.key) || null, y(j, P, te, je);
          case U:
            return P = P.get(te.key === null ? b : te.key) || null, O(j, P, te, je);
          case ue:
            var Ne = te._init;
            return fe(P, j, b, Ne(te._payload), je);
        }
        if (Ue(te) || ce(te)) return P = P.get(b) || null, Y(j, P, te, je, null);
        $s(j, te);
      }
      return null;
    }
    function pe(P, j, b, te) {
      for (var je = null, Ne = null, Ee = j, Me = j = 0, gt = null; Ee !== null && Me < b.length; Me++) {
        Ee.index > Me ? (gt = Ee, Ee = null) : gt = Ee.sibling;
        var Be = Q(P, Ee, b[Me], te);
        if (Be === null) {
          Ee === null && (Ee = gt);
          break;
        }
        e && Ee && Be.alternate === null && t(P, Ee), j = u(Be, j, Me), Ne === null ? je = Be : Ne.sibling = Be, Ne = Be, Ee = gt;
      }
      if (Me === b.length) return n(P, Ee), rt && pi(P, Me), je;
      if (Ee === null) {
        for (; Me < b.length; Me++) Ee = Z(P, b[Me], te), Ee !== null && (j = u(Ee, j, Me), Ne === null ? je = Ee : Ne.sibling = Ee, Ne = Ee);
        return rt && pi(P, Me), je;
      }
      for (Ee = i(P, Ee); Me < b.length; Me++) gt = fe(Ee, P, Me, b[Me], te), gt !== null && (e && gt.alternate !== null && Ee.delete(gt.key === null ? Me : gt.key), j = u(gt, j, Me), Ne === null ? je = gt : Ne.sibling = gt, Ne = gt);
      return e && Ee.forEach(function(ai) {
        return t(P, ai);
      }), rt && pi(P, Me), je;
    }
    function ye(P, j, b, te) {
      var je = ce(b);
      if (typeof je != "function") throw Error(o(150));
      if (b = je.call(b), b == null) throw Error(o(151));
      for (var Ne = je = null, Ee = j, Me = j = 0, gt = null, Be = b.next(); Ee !== null && !Be.done; Me++, Be = b.next()) {
        Ee.index > Me ? (gt = Ee, Ee = null) : gt = Ee.sibling;
        var ai = Q(P, Ee, Be.value, te);
        if (ai === null) {
          Ee === null && (Ee = gt);
          break;
        }
        e && Ee && ai.alternate === null && t(P, Ee), j = u(ai, j, Me), Ne === null ? je = ai : Ne.sibling = ai, Ne = ai, Ee = gt;
      }
      if (Be.done) return n(
        P,
        Ee
      ), rt && pi(P, Me), je;
      if (Ee === null) {
        for (; !Be.done; Me++, Be = b.next()) Be = Z(P, Be.value, te), Be !== null && (j = u(Be, j, Me), Ne === null ? je = Be : Ne.sibling = Be, Ne = Be);
        return rt && pi(P, Me), je;
      }
      for (Ee = i(P, Ee); !Be.done; Me++, Be = b.next()) Be = fe(Ee, P, Me, Be.value, te), Be !== null && (e && Be.alternate !== null && Ee.delete(Be.key === null ? Me : Be.key), j = u(Be, j, Me), Ne === null ? je = Be : Ne.sibling = Be, Ne = Be);
      return e && Ee.forEach(function(Fm) {
        return t(P, Fm);
      }), rt && pi(P, Me), je;
    }
    function ft(P, j, b, te) {
      if (typeof b == "object" && b !== null && b.type === _ && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            e: {
              for (var je = b.key, Ne = j; Ne !== null; ) {
                if (Ne.key === je) {
                  if (je = b.type, je === _) {
                    if (Ne.tag === 7) {
                      n(P, Ne.sibling), j = l(Ne, b.props.children), j.return = P, P = j;
                      break e;
                    }
                  } else if (Ne.elementType === je || typeof je == "object" && je !== null && je.$$typeof === ue && Ju(je) === Ne.type) {
                    n(P, Ne.sibling), j = l(Ne, b.props), j.ref = Lr(P, Ne, b), j.return = P, P = j;
                    break e;
                  }
                  n(P, Ne);
                  break;
                } else t(P, Ne);
                Ne = Ne.sibling;
              }
              b.type === _ ? (j = wi(b.props.children, P.mode, te, b.key), j.return = P, P = j) : (te = aa(b.type, b.key, b.props, null, P.mode, te), te.ref = Lr(P, j, b), te.return = P, P = te);
            }
            return h(P);
          case U:
            e: {
              for (Ne = b.key; j !== null; ) {
                if (j.key === Ne) if (j.tag === 4 && j.stateNode.containerInfo === b.containerInfo && j.stateNode.implementation === b.implementation) {
                  n(P, j.sibling), j = l(j, b.children || []), j.return = P, P = j;
                  break e;
                } else {
                  n(P, j);
                  break;
                }
                else t(P, j);
                j = j.sibling;
              }
              j = lo(b, P.mode, te), j.return = P, P = j;
            }
            return h(P);
          case ue:
            return Ne = b._init, ft(P, j, Ne(b._payload), te);
        }
        if (Ue(b)) return pe(P, j, b, te);
        if (ce(b)) return ye(P, j, b, te);
        $s(P, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, j !== null && j.tag === 6 ? (n(P, j.sibling), j = l(j, b), j.return = P, P = j) : (n(P, j), j = ao(b, P.mode, te), j.return = P, P = j), h(P)) : n(P, j);
    }
    return ft;
  }
  var Hi = Xu(!0), Zu = Xu(!1), Fs = Yn(null), Is = null, Ui = null, vl = null;
  function kl() {
    vl = Ui = Is = null;
  }
  function yl(e) {
    var t = Fs.current;
    nt(Fs), e._currentValue = t;
  }
  function gl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gi(e, t) {
    Is = e, vl = Ui = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ft = !0), e.firstContext = null);
  }
  function tn(e) {
    var t = e._currentValue;
    if (vl !== e) if (e = { context: e, memoizedValue: t, next: null }, Ui === null) {
      if (Is === null) throw Error(o(308));
      Ui = e, Is.dependencies = { lanes: 0, firstContext: e };
    } else Ui = Ui.next = e;
    return t;
  }
  var vi = null;
  function jl(e) {
    vi === null ? vi = [e] : vi.push(e);
  }
  function qu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, jl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function xl(e) {
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
    return l = i.interleaved, l === null ? (t.next = t, jl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Ln(e, n);
  }
  function Ds(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Oa(e, n);
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
      var y = k, O = y.next;
      y.next = null, h === null ? u = O : h.next = O, h = y;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, k = Y.lastBaseUpdate, k !== h && (k === null ? Y.firstBaseUpdate = O : k.next = O, Y.lastBaseUpdate = y));
    }
    if (u !== null) {
      var Z = l.baseState;
      h = 0, Y = O = y = null, k = u;
      do {
        var Q = k.lane, fe = k.eventTime;
        if ((i & Q) === Q) {
          Y !== null && (Y = Y.next = {
            eventTime: fe,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var pe = e, ye = k;
            switch (Q = t, fe = n, ye.tag) {
              case 1:
                if (pe = ye.payload, typeof pe == "function") {
                  Z = pe.call(fe, Z, Q);
                  break e;
                }
                Z = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = ye.payload, Q = typeof pe == "function" ? pe.call(fe, Z, Q) : pe, Q == null) break e;
                Z = ee({}, Z, Q);
                break e;
              case 2:
                Zn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [k] : Q.push(k));
        } else fe = { eventTime: fe, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Y === null ? (O = Y = fe, y = Z) : Y = Y.next = fe, h |= Q;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (y = Z), l.baseState = y, l.firstBaseUpdate = O, l.lastBaseUpdate = Y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      gi |= h, e.lanes = h, e.memoizedState = Z;
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
  function ki(e) {
    if (e === Or) throw Error(o(174));
    return e;
  }
  function Sl(e, t) {
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
    ki(Fr.current);
    var t = ki(jn.current), n = Qt(t, e.type);
    t !== n && (qe($r, e), qe(jn, n));
  }
  function wl(e) {
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
  var Nl = [];
  function El() {
    for (var e = 0; e < Nl.length; e++) Nl[e]._workInProgressVersionPrimary = null;
    Nl.length = 0;
  }
  var Bs = V.ReactCurrentDispatcher, Cl = V.ReactCurrentBatchConfig, yi = 0, lt = null, mt = null, kt = null, Ks = !1, Ir = !1, Dr = 0, sm = 0;
  function Ct() {
    throw Error(o(321));
  }
  function Tl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!un(e[n], t[n])) return !1;
    return !0;
  }
  function _l(e, t, n, i, l, u) {
    if (yi = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bs.current = e === null || e.memoizedState === null ? um : cm, e = n(i, l), Ir) {
      u = 0;
      do {
        if (Ir = !1, Dr = 0, 25 <= u) throw Error(o(301));
        u += 1, kt = mt = null, t.updateQueue = null, Bs.current = dm, e = n(i, l);
      } while (Ir);
    }
    if (Bs.current = Gs, t = mt !== null && mt.next !== null, yi = 0, kt = mt = lt = null, Ks = !1, t) throw Error(o(300));
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
  function Pl(e) {
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
      var k = h = null, y = null, O = u;
      do {
        var Y = O.lane;
        if ((yi & Y) === Y) y !== null && (y = y.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), i = O.hasEagerState ? O.eagerState : e(i, O.action);
        else {
          var Z = {
            lane: Y,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          y === null ? (k = y = Z, h = i) : y = y.next = Z, lt.lanes |= Y, gi |= Y;
        }
        O = O.next;
      } while (O !== null && O !== u);
      y === null ? h = i : y.next = k, un(i, t.memoizedState) || (Ft = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = y, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, lt.lanes |= u, gi |= u, l = l.next;
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
    if (u && (i.memoizedState = l, Ft = !0), i = i.queue, bl(oc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || kt !== null && kt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Vr(9, lc.bind(null, n, i, l, t), void 0, null), yt === null) throw Error(o(349));
      (yi & 30) !== 0 || ac(n, t, l);
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
      if (u = h.destroy, i !== null && Tl(i, h.deps)) {
        l.memoizedState = Vr(t, n, u, i);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Vr(1 | t, n, u, i);
  }
  function hc(e, t) {
    return Hs(8390656, 8, e, t);
  }
  function bl(e, t) {
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
  function Rl() {
  }
  function yc(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function gc(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Tl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function jc(e, t, n) {
    return (yi & 21) === 0 ? (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n) : (un(n, t) || (n = Jo(), lt.lanes |= n, gi |= n, e.baseState = !0), t);
  }
  function am(e, t) {
    var n = Ge;
    Ge = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = Cl.transition;
    Cl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ge = n, Cl.transition = i;
    }
  }
  function xc() {
    return nn().memoizedState;
  }
  function lm(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Sc(e)) wc(t, n);
    else if (n = qu(e, t, n, i), n !== null) {
      var l = At();
      mn(n, e, i, l), Nc(n, t, i);
    }
  }
  function om(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Sc(e)) wc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, un(k, h)) {
          var y = t.interleaved;
          y === null ? (l.next = l, jl(t)) : (l.next = y.next, y.next = l), t.interleaved = l;
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
      i &= e.pendingLanes, n |= i, t.lanes = n, Oa(e, n);
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
  }, useState: dc, useDebugValue: Rl, useDeferredValue: function(e) {
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
      (yi & 30) !== 0 || ac(i, t, n);
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
    useEffect: bl,
    useImperativeHandle: kc,
    useInsertionEffect: mc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: Pl,
    useRef: fc,
    useState: function() {
      return Pl(zr);
    },
    useDebugValue: Rl,
    useDeferredValue: function(e) {
      var t = nn();
      return jc(t, mt.memoizedState, e);
    },
    useTransition: function() {
      var e = Pl(zr)[0], t = nn().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: sc,
    useId: xc,
    unstable_isNewReconciler: !1
  }, dm = { readContext: tn, useCallback: yc, useContext: tn, useEffect: bl, useImperativeHandle: kc, useInsertionEffect: mc, useLayoutEffect: pc, useMemo: gc, useReducer: Al, useRef: fc, useState: function() {
    return Al(zr);
  }, useDebugValue: Rl, useDeferredValue: function(e) {
    var t = nn();
    return mt === null ? t.memoizedState = e : jc(t, mt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(zr)[0], t = nn().memoizedState;
    return [e, t];
  }, useMutableSource: rc, useSyncExternalStore: sc, useId: xc, unstable_isNewReconciler: !1 };
  function dn(e, t) {
    if (e && e.defaultProps) {
      t = ee({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ll(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ws = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = ii(e), u = On(i, l);
    u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = At(), l = ii(e), u = On(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qn(e, u, l), t !== null && (mn(t, e, l, i), Ds(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = At(), i = ii(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (mn(t, e, i, n), Ds(t, e, i));
  } };
  function Ec(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, i) || !Tr(l, u) : !0;
  }
  function Cc(e, t, n) {
    var i = !1, l = Jn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = tn(u) : (l = $t(t) ? hi : Et.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Jn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ws, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Tc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
  }
  function Ol(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = tn(u) : (u = $t(t) ? hi : Et.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ll(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ws.enqueueReplaceState(l, l.state, null), zs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
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
  function $l(e, t, n) {
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
  var fm = typeof WeakMap == "function" ? WeakMap : Map;
  function _c(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ea || (ea = !0, Zl = i), Fl(e, t);
    }, n;
  }
  function Mc(e, t, n) {
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
      Fl(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Pc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new fm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Cm.bind(null, e, t, n), t.then(e, e));
  }
  function Ac(e) {
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
  var hm = V.ReactCurrentOwner, Ft = !1;
  function Pt(e, t, n, i) {
    t.child = e === null ? Zu(t, null, n, i) : Hi(t, e.child, n, i);
  }
  function Rc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = _l(e, t, n, i, u, l), n = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (rt && n && dl(t), t.flags |= 1, Pt(e, t, i, l), t.child);
  }
  function Lc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !so(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Oc(e, t, u, i, l)) : (e = aa(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
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
    return Il(e, t, n, i, l);
  }
  function $c(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Ji, Wt), Wt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(Ji, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, qe(Ji, Wt), Wt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, qe(Ji, Wt), Wt |= i;
    return Pt(e, t, l, n), t.child;
  }
  function Fc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Il(e, t, n, i, l) {
    var u = $t(n) ? hi : Et.current;
    return u = zi(t, u), Gi(t, l), n = _l(e, t, n, i, u, l), i = Ml(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (rt && i && dl(t), t.flags |= 1, Pt(e, t, n, l), t.child);
  }
  function Ic(e, t, n, i, l) {
    if ($t(n)) {
      var u = !0;
      As(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Ys(e, t), Cc(t, n, i), Ol(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var y = h.context, O = n.contextType;
      typeof O == "object" && O !== null ? O = tn(O) : (O = $t(n) ? hi : Et.current, O = zi(t, O));
      var Y = n.getDerivedStateFromProps, Z = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Z || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || y !== O) && Tc(t, h, i, O), Zn = !1;
      var Q = t.memoizedState;
      h.state = Q, zs(t, i, h, l), y = t.memoizedState, k !== i || Q !== y || Ot.current || Zn ? (typeof Y == "function" && (Ll(t, n, Y, i), y = t.memoizedState), (k = Zn || Ec(t, n, k, i, Q, y, O)) ? (Z || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = y), h.props = i, h.state = y, h.context = O, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, ec(e, t), k = t.memoizedProps, O = t.type === t.elementType ? k : dn(t.type, k), h.props = O, Z = t.pendingProps, Q = h.context, y = n.contextType, typeof y == "object" && y !== null ? y = tn(y) : (y = $t(n) ? hi : Et.current, y = zi(t, y));
      var fe = n.getDerivedStateFromProps;
      (Y = typeof fe == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== Z || Q !== y) && Tc(t, h, i, y), Zn = !1, Q = t.memoizedState, h.state = Q, zs(t, i, h, l);
      var pe = t.memoizedState;
      k !== Z || Q !== pe || Ot.current || Zn ? (typeof fe == "function" && (Ll(t, n, fe, i), pe = t.memoizedState), (O = Zn || Ec(t, n, O, i, Q, pe, y) || !1) ? (Y || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, pe, y), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, pe, y)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = pe), h.props = i, h.state = pe, h.context = y, i = O) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Dl(e, t, n, i, u, l);
  }
  function Dl(e, t, n, i, l, u) {
    Fc(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Ku(t, n, !1), $n(e, t, u);
    i = t.stateNode, hm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Hi(t, e.child, null, u), t.child = Hi(t, null, k, u)) : Pt(e, t, k, u), t.memoizedState = i.state, l && Ku(t, n, !0), t.child;
  }
  function Dc(e) {
    var t = e.stateNode;
    t.pendingContext ? Vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vu(e, t.context, !1), Sl(e, t.containerInfo);
  }
  function zc(e, t, n, i, l) {
    return Ki(), pl(l), t.flags |= 256, Pt(e, t, n, i), t.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vc(e, t, n) {
    var i = t.pendingProps, l = at.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return ml(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = la(h, i, 0, null), e = wi(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Vl(n), t.memoizedState = zl, e) : Bl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return mm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var y = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = y, t.deletions = null) : (i = si(l, y), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = si(k, u) : (u = wi(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? Vl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = zl, i;
    }
    return u = e.child, e = u.sibling, i = si(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Bl(e, t) {
    return t = la({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Qs(e, t, n, i) {
    return i !== null && pl(i), Hi(t, e.child, null, n), e = Bl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function mm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = $l(Error(o(422))), Qs(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = la({ mode: "visible", children: i.children }, l, 0, null), u = wi(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Hi(t, e.child, null, h), t.child.memoizedState = Vl(h), t.memoizedState = zl, u);
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
        l = (l & (i.suspendedLanes | h)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ln(e, l), mn(i, e, l, -1));
      }
      return ro(), i = $l(Error(o(421))), Qs(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tm.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Gt = Qn(l.nextSibling), Ut = t, rt = !0, cn = null, e !== null && (qt[en++] = bn, qt[en++] = Rn, qt[en++] = mi, bn = e.id, Rn = e.overflow, mi = t), t = Bl(t, i.children), t.flags |= 4096, t);
  }
  function Bc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), gl(e.return, t, n);
  }
  function Kl(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = i, u.tail = n, u.tailMode = l);
  }
  function Kc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, u = i.tail;
    if (Pt(e, t, i.children, n), i = at.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
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
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Kl(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Vs(e) === null) {
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
  function Ys(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), gi |= t.lanes, (n & t.childLanes) === 0) return null;
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
        $t(t.type) && As(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
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
  var Hc, Hl, Uc, Gc;
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
  }, Hl = function() {
  }, Uc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, ki(jn.current);
      var u = null;
      switch (n) {
        case "input":
          l = ve(e, l), i = ve(e, i), u = [];
          break;
        case "select":
          l = ee({}, l, { value: void 0 }), i = ee({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ut(e, l), i = ut(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = _s);
      }
      Ae(n, i);
      var h;
      n = null;
      for (O in l) if (!i.hasOwnProperty(O) && l.hasOwnProperty(O) && l[O] != null) if (O === "style") {
        var k = l[O];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (d.hasOwnProperty(O) ? u || (u = []) : (u = u || []).push(O, null));
      for (O in i) {
        var y = i[O];
        if (k = l?.[O], i.hasOwnProperty(O) && y !== k && (y != null || k != null)) if (O === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || y && y.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in y) y.hasOwnProperty(h) && k[h] !== y[h] && (n || (n = {}), n[h] = y[h]);
        } else n || (u || (u = []), u.push(
          O,
          n
        )), n = y;
        else O === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, k = k ? k.__html : void 0, y != null && k !== y && (u = u || []).push(O, y)) : O === "children" ? typeof y != "string" && typeof y != "number" || (u = u || []).push(O, "" + y) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (d.hasOwnProperty(O) ? (y != null && O === "onScroll" && tt("scroll", e), u || k === y || (u = [])) : (u = u || []).push(O, y));
      }
      n && (u = u || []).push("style", n);
      var O = u;
      (t.updateQueue = O) && (t.flags |= 4);
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
        return $t(t.type) && Ps(), Tt(t), null;
      case 3:
        return i = t.stateNode, Wi(), nt(Ot), nt(Et), El(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Os(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cn !== null && (to(cn), cn = null))), Hl(e, t), Tt(t), null;
      case 5:
        wl(t);
        var l = ki(Fr.current);
        if (n = t.type, e !== null && t.stateNode != null) Uc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return Tt(t), null;
          }
          if (e = ki(jn.current), Os(t)) {
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
                for (l = 0; l < Mr.length; l++) tt(Mr[l], i);
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
                Pe(i, u), tt("invalid", i);
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
                oe(i), Qe(i, u, !0);
                break;
              case "textarea":
                oe(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = _s);
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
                  for (l = 0; l < Mr.length; l++) tt(Mr[l], e);
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
                  Pe(e, i), l = ve(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = ee({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Je(e, i), l = ut(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              Ae(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var y = k[u];
                u === "style" ? Bt(e, y) : u === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && ln(e, y)) : u === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && Yt(e, y) : typeof y == "number" && Yt(e, "" + y) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? y != null && u === "onScroll" && tt("scroll", e) : y != null && $(e, u, y, h));
              }
              switch (n) {
                case "input":
                  oe(e), Qe(e, i, !1);
                  break;
                case "textarea":
                  oe(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + q(i.value));
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
                  typeof l.onClick == "function" && (e.onclick = _s);
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
          if (n = ki(Fr.current), ki(jn.current), Os(t)) {
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
          } else cn !== null && (to(cn), cn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? pt === 0 && (pt = 3) : ro())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
      case 4:
        return Wi(), Hl(e, t), e === null && Pr(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return yl(t.type._context), Tt(t), null;
      case 17:
        return $t(t.type) && Ps(), Tt(t), null;
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
          u.tail !== null && ie() > Xi && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Vs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Br(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !rt) return Tt(t), null;
          } else 2 * ie() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ie(), t.sibling = null, n = at.current, qe(at, i ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
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
  function km(e, t) {
    switch (fl(t), t.tag) {
      case 1:
        return $t(t.type) && Ps(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), nt(Ot), nt(Et), El(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
  var Js = !1, _t = !1, ym = typeof WeakSet == "function" ? WeakSet : Set, me = null;
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
  function gm(e, t) {
    if (il = vs, e = Eu(), Ya(e)) {
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
          var h = 0, k = -1, y = -1, O = 0, Y = 0, Z = e, Q = null;
          t: for (; ; ) {
            for (var fe; Z !== n || l !== 0 && Z.nodeType !== 3 || (k = h + l), Z !== u || i !== 0 && Z.nodeType !== 3 || (y = h + i), Z.nodeType === 3 && (h += Z.nodeValue.length), (fe = Z.firstChild) !== null; )
              Q = Z, Z = fe;
            for (; ; ) {
              if (Z === e) break t;
              if (Q === n && ++O === l && (k = h), Q === u && ++Y === i && (y = h), (fe = Z.nextSibling) !== null) break;
              Z = Q, Q = Z.parentNode;
            }
            Z = fe;
          }
          n = k === -1 || y === -1 ? null : { start: k, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (rl = { focusedElem: e, selectionRange: n }, vs = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
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
              var ye = pe.memoizedProps, ft = pe.memoizedState, P = t.stateNode, j = P.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : dn(t.type, ye), ft);
              P.__reactInternalSnapshotBeforeUpdate = j;
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
  function Gl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Qc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[br], delete t[ol], delete t[tm], delete t[nm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function Wl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _s));
    else if (i !== 4 && (e = e.child, e !== null)) for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), e = e.sibling;
  }
  function Ql(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), e = e.sibling;
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
        _t || Yi(n, t);
      case 6:
        var i = xt, l = fn;
        xt = null, ei(e, t, n), xt = i, fn = l, xt !== null && (fn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xt.removeChild(n.stateNode));
        break;
      case 18:
        xt !== null && (fn ? (e = xt, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), xr(e)) : ll(xt, n.stateNode));
        break;
      case 4:
        i = xt, l = fn, xt = n.stateNode.containerInfo, fn = !0, ei(e, t, n), xt = i, fn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_t && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var u = l, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Ul(n, t, h), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!_t && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
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
        n.mode & 1 ? (_t = (i = _t) || n.memoizedState !== null, ei(e, t, n), _t = i) : ei(e, t, n);
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
        var l = _m.bind(null, e, i);
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
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
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
          } catch (ye) {
            ot(e, e.return, ye);
          }
          try {
            Kr(5, e, e.return);
          } catch (ye) {
            ot(e, e.return, ye);
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
          } catch (ye) {
            ot(e, e.return, ye);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            k === "input" && u.type === "radio" && u.name != null && _e(l, u), Re(k, h);
            var O = Re(k, u);
            for (h = 0; h < y.length; h += 2) {
              var Y = y[h], Z = y[h + 1];
              Y === "style" ? Bt(l, Z) : Y === "dangerouslySetInnerHTML" ? ln(l, Z) : Y === "children" ? Yt(l, Z) : $(l, Y, Z, O);
            }
            switch (k) {
              case "input":
                Ie(l, u);
                break;
              case "textarea":
                Ve(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var fe = u.value;
                fe != null ? Xe(l, !!u.multiple, fe, !1) : Q !== !!u.multiple && (u.defaultValue != null ? Xe(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xe(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[br] = u;
          } catch (ye) {
            ot(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (hn(t, e), Sn(e), i & 4) {
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
        if (hn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          xr(t.containerInfo);
        } catch (ye) {
          ot(e, e.return, ye);
        }
        break;
      case 4:
        hn(t, e), Sn(e);
        break;
      case 13:
        hn(t, e), Sn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Xl = ie())), i & 4 && Zc(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (O = _t) || Y, hn(t, e), _t = O) : hn(t, e), Sn(e), i & 8192) {
          if (O = e.memoizedState !== null, (e.stateNode.isHidden = O) && !Y && (e.mode & 1) !== 0) for (me = e, Y = e.child; Y !== null; ) {
            for (Z = me = Y; me !== null; ) {
              switch (Q = me, fe = Q.child, Q.tag) {
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
                    } catch (ye) {
                      ot(i, n, ye);
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
              fe !== null ? (fe.return = Q, me = fe) : nd(Z);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (Y === null) {
                Y = Z;
                try {
                  l = Z.stateNode, O ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = Z.stateNode, y = Z.memoizedProps.style, h = y != null && y.hasOwnProperty("display") ? y.display : null, k.style.display = we("display", h));
                } catch (ye) {
                  ot(e, e.return, ye);
                }
              }
            } else if (Z.tag === 6) {
              if (Y === null) try {
                Z.stateNode.nodeValue = O ? "" : Z.memoizedProps;
              } catch (ye) {
                ot(e, e.return, ye);
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
            Ql(e, u, l);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = Jc(e);
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
  function jm(e, t, n) {
    me = e, ed(e);
  }
  function ed(e, t, n) {
    for (var i = (e.mode & 1) !== 0; me !== null; ) {
      var l = me, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Js;
        if (!h) {
          var k = l.alternate, y = k !== null && k.memoizedState !== null || _t;
          k = Js;
          var O = _t;
          if (Js = h, (_t = y) && !O) for (me = l; me !== null; ) h = me, y = h.child, h.tag === 22 && h.memoizedState !== null ? id(l) : y !== null ? (y.return = h, me = y) : id(l);
          for (; u !== null; ) me = u, ed(u), u = u.sibling;
          me = l, Js = k, _t = O;
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
              _t || Xs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !_t) if (n === null) i.componentDidMount();
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
                  var Y = O.memoizedState;
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
          _t || t.flags & 512 && Gl(t);
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
  var xm = Math.ceil, Zs = V.ReactCurrentDispatcher, Yl = V.ReactCurrentOwner, rn = V.ReactCurrentBatchConfig, ze = 0, yt = null, ht = null, St = 0, Wt = 0, Ji = Yn(0), pt = 0, Hr = null, gi = 0, qs = 0, Jl = 0, Ur = null, It = null, Xl = 0, Xi = 1 / 0, Fn = null, ea = !1, Zl = null, ti = null, ta = !1, ni = null, na = 0, Gr = 0, ql = null, ia = -1, ra = 0;
  function At() {
    return (ze & 6) !== 0 ? ie() : ia !== -1 ? ia : ia = ie();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && St !== 0 ? St & -St : rm.transition !== null ? (ra === 0 && (ra = Jo()), ra) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : su(e.type)), e);
  }
  function mn(e, t, n, i) {
    if (50 < Gr) throw Gr = 0, ql = null, Error(o(185));
    vr(e, n, i), ((ze & 2) === 0 || e !== yt) && (e === yt && ((ze & 2) === 0 && (qs |= n), pt === 4 && ri(e, St)), Dt(e, i), n === 1 && ze === 0 && (t.mode & 1) === 0 && (Xi = ie() + 500, bs && Xn()));
  }
  function Dt(e, t) {
    var n = e.callbackNode;
    rh(e, t);
    var i = hs(e, e === yt ? St : 0);
    if (i === 0) n !== null && _n(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && _n(n), t === 1) e.tag === 0 ? im(sd.bind(null, e)) : Hu(sd.bind(null, e)), qh(function() {
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
            n = Mn;
            break;
          case 536870912:
            n = Vn;
            break;
          default:
            n = Mn;
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
      (yt !== e || St !== t) && (Fn = null, Xi = ie() + 500, xi(e, t));
      do
        try {
          Nm();
          break;
        } catch (k) {
          ad(e, k);
        }
      while (!0);
      kl(), Zs.current = u, ze = l, ht !== null ? t = 0 : (yt = null, St = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ra(e), l !== 0 && (i = l, t = eo(e, l))), t === 1) throw n = Hr, xi(e, 0), ri(e, i), Dt(e, ie()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Sm(l) && (t = sa(e, i), t === 2 && (u = Ra(e), u !== 0 && (i = u, t = eo(e, u))), t === 1)) throw n = Hr, xi(e, 0), ri(e, i), Dt(e, ie()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Si(e, It, Fn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Xl + 500 - ie(), 10 < t)) {
              if (hs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                At(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = al(Si.bind(null, e, It, Fn), t);
              break;
            }
            Si(e, It, Fn);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - on(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = ie() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * xm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = al(Si.bind(null, e, It, Fn), i);
              break;
            }
            Si(e, It, Fn);
            break;
          case 5:
            Si(e, It, Fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Dt(e, ie()), e.callbackNode === n ? rd.bind(null, e) : null;
  }
  function eo(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (xi(e, t).flags |= 256), e = sa(e, t), e !== 2 && (t = It, It = n, t !== null && to(t)), e;
  }
  function to(e) {
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
    for (t &= ~Jl, t &= ~qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - on(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function sd(e) {
    if ((ze & 6) !== 0) throw Error(o(327));
    Zi();
    var t = hs(e, 0);
    if ((t & 1) === 0) return Dt(e, ie()), null;
    var n = sa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Ra(e);
      i !== 0 && (t = i, n = eo(e, i));
    }
    if (n === 1) throw n = Hr, xi(e, 0), ri(e, t), Dt(e, ie()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Si(e, It, Fn), Dt(e, ie()), null;
  }
  function no(e, t) {
    var n = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ze = n, ze === 0 && (Xi = ie() + 500, bs && Xn());
    }
  }
  function ji(e) {
    ni !== null && ni.tag === 0 && (ze & 6) === 0 && Zi();
    var t = ze;
    ze |= 1;
    var n = rn.transition, i = Ge;
    try {
      if (rn.transition = null, Ge = 1, e) return e();
    } finally {
      Ge = i, rn.transition = n, ze = t, (ze & 6) === 0 && Xn();
    }
  }
  function io() {
    Wt = Ji.current, nt(Ji);
  }
  function xi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Zh(n)), ht !== null) for (n = ht.return; n !== null; ) {
      var i = n;
      switch (fl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ps();
          break;
        case 3:
          Wi(), nt(Ot), nt(Et), El();
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
    if (yt = e, ht = e = si(e.current, null), St = Wt = t, pt = 0, Hr = null, Jl = qs = gi = 0, It = Ur = null, vi !== null) {
      for (t = 0; t < vi.length; t++) if (n = vi[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, u = n.pending;
        if (u !== null) {
          var h = u.next;
          u.next = l, i.next = h;
        }
        n.pending = i;
      }
      vi = null;
    }
    return e;
  }
  function ad(e, t) {
    do {
      var n = ht;
      try {
        if (kl(), Bs.current = Gs, Ks) {
          for (var i = lt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Ks = !1;
        }
        if (yi = 0, kt = mt = lt = null, Ir = !1, Dr = 0, Yl.current = null, n === null || n.return === null) {
          pt = 1, Hr = t, ht = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, y = t;
          if (t = St, k.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var O = y, Y = k, Z = Y.tag;
            if ((Y.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var Q = Y.alternate;
              Q ? (Y.updateQueue = Q.updateQueue, Y.memoizedState = Q.memoizedState, Y.lanes = Q.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var fe = Ac(h);
            if (fe !== null) {
              fe.flags &= -257, bc(fe, h, k, u, t), fe.mode & 1 && Pc(u, O, t), t = fe, y = O;
              var pe = t.updateQueue;
              if (pe === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(y), t.updateQueue = ye;
              } else pe.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                Pc(u, O, t), ro();
                break e;
              }
              y = Error(o(426));
            }
          } else if (rt && k.mode & 1) {
            var ft = Ac(h);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), bc(ft, h, k, u, t), pl(Qi(y, k));
              break e;
            }
          }
          u = y = Qi(y, k), pt !== 4 && (pt = 2), Ur === null ? Ur = [u] : Ur.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = _c(u, y, t);
                tc(u, P);
                break e;
              case 1:
                k = y;
                var j = u.type, b = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof j.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ti === null || !ti.has(b)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var te = Mc(u, k, t);
                  tc(u, te);
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
  function ro() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || (gi & 268435455) === 0 && (qs & 268435455) === 0 || ri(yt, St);
  }
  function sa(e, t) {
    var n = ze;
    ze |= 2;
    var i = ld();
    (yt !== e || St !== t) && (Fn = null, xi(e, t));
    do
      try {
        wm();
        break;
      } catch (l) {
        ad(e, l);
      }
    while (!0);
    if (kl(), ze = n, Zs.current = i, ht !== null) throw Error(o(261));
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
    e.memoizedProps = e.pendingProps, t === null ? ud(e) : ht = t, Yl.current = null;
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
  function Si(e, t, n) {
    var i = Ge, l = rn.transition;
    try {
      rn.transition = null, Ge = 1, Em(e, t, n, i);
    } finally {
      rn.transition = l, Ge = i;
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
    if (sh(e, u), e === yt && (ht = yt = null, St = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ta || (ta = !0, hd(Mn, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = rn.transition, rn.transition = null;
      var h = Ge;
      Ge = 1;
      var k = ze;
      ze |= 4, Yl.current = null, gm(e, n), qc(n, e), Uh(rl), vs = !!il, rl = il = null, e.current = n, jm(n), F(), ze = k, Ge = h, rn.transition = u;
    } else e.current = n;
    if (ta && (ta = !1, ni = e, na = l), u = e.pendingLanes, u === 0 && (ti = null), qf(n.stateNode), Dt(e, ie()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ea) throw ea = !1, e = Zl, Zl = null, e;
    return (na & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === ql ? Gr++ : (Gr = 0, ql = e) : Gr = 0, Xn(), null;
  }
  function Zi() {
    if (ni !== null) {
      var e = Xo(na), t = rn.transition, n = Ge;
      try {
        if (rn.transition = null, Ge = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, na = 0, (ze & 6) !== 0) throw Error(o(331));
          var l = ze;
          for (ze |= 4, me = e.current; me !== null; ) {
            var u = me, h = u.child;
            if ((me.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var y = 0; y < k.length; y++) {
                  var O = k[y];
                  for (me = O; me !== null; ) {
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
                      var Q = Y.sibling, fe = Y.return;
                      if (Qc(Y), Y === O) {
                        me = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = fe, me = Q;
                        break;
                      }
                      me = fe;
                    }
                  }
                }
                var pe = u.alternate;
                if (pe !== null) {
                  var ye = pe.child;
                  if (ye !== null) {
                    pe.child = null;
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
                  Kr(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, me = P;
                break e;
              }
              me = u.return;
            }
          }
          var j = e.current;
          for (me = j; me !== null; ) {
            h = me;
            var b = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && b !== null) b.return = h, me = b;
            else e: for (h = j; me !== null; ) {
              if (k = me, (k.flags & 2048) !== 0) try {
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
                me = null;
                break e;
              }
              var te = k.sibling;
              if (te !== null) {
                te.return = k.return, me = te;
                break e;
              }
              me = k.return;
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
        Ge = n, rn.transition = t;
      }
    }
    return !1;
  }
  function cd(e, t, n) {
    t = Qi(n, t), t = _c(e, t, 1), e = qn(e, t, 1), t = At(), e !== null && (vr(e, 1, t), Dt(e, t));
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
          e = Qi(n, e), e = Mc(t, e, 1), t = qn(t, e, 1), e = At(), t !== null && (vr(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Cm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, yt === e && (St & n) === n && (pt === 4 || pt === 3 && (St & 130023424) === St && 500 > ie() - Xl ? xi(e, 0) : Jl |= n), Dt(e, t);
  }
  function dd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = fs, fs <<= 1, (fs & 130023424) === 0 && (fs = 4194304)));
    var n = At();
    e = Ln(e, t), e !== null && (vr(e, t, n), Dt(e, n));
  }
  function Tm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), dd(e, n);
  }
  function _m(e, t) {
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
        Gi(t, n), l = _l(null, t, i, e, l, n);
        var u = Ml();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $t(i) ? (u = !0, As(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xl(t), l.updater = Ws, t.stateNode = l, l._reactInternals = t, Ol(t, i, e, n), t = Dl(null, t, i, !0, u, n)) : (t.tag = 0, rt && u && dl(t), Pt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Ys(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Pm(i), e = dn(i, e), l) {
            case 0:
              t = Il(null, t, i, e, n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Il(e, t, i, l, n);
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
            Pt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ic(t), e === null && ml(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, sl(i, l) ? h = null : u !== null && sl(i, u) && (t.flags |= 32), Fc(e, t), Pt(e, t, h, n), t.child;
      case 6:
        return e === null && ml(t), null;
      case 13:
        return Vc(e, t, n);
      case 4:
        return Sl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Hi(t, null, i, n) : Pt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Rc(e, t, i, l, n);
      case 7:
        return Pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, qe(Fs, i._currentValue), i._currentValue = h, u !== null) if (un(u.value, h)) {
            if (u.children === l.children && !Ot.current) {
              t = $n(e, t, n);
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
                      var Y = O.pending;
                      Y === null ? y.next = y : (y.next = Y.next, Y.next = y), O.pending = y;
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
          Pt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = tn(l), i = i(l), t.flags |= 1, Pt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = dn(i, t.pendingProps), l = dn(i.type, l), Lc(e, t, i, l, n);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : dn(i, l), Ys(e, t), t.tag = 1, $t(i) ? (e = !0, As(t)) : e = !1, Gi(t, n), Cc(t, i, l), Ol(t, i, l, n), Dl(null, t, i, !0, e, n);
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
  function Mm(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sn(e, t, n, i) {
    return new Mm(e, t, n, i);
  }
  function so(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pm(e) {
    if (typeof e == "function") return so(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ce) return 11;
      if (e === K) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = sn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function aa(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") so(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case _:
        return wi(n.children, l, u, t);
      case I:
        h = 8, l |= 8;
        break;
      case ne:
        return e = sn(12, n, t, l | 2), e.elementType = ne, e.lanes = u, e;
      case B:
        return e = sn(13, n, t, l), e.elementType = B, e.lanes = u, e;
      case se:
        return e = sn(19, n, t, l), e.elementType = se, e.lanes = u, e;
      case ae:
        return la(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case re:
            h = 10;
            break e;
          case ge:
            h = 9;
            break e;
          case Ce:
            h = 11;
            break e;
          case K:
            h = 14;
            break e;
          case ue:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = sn(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function wi(e, t, n, i) {
    return e = sn(7, e, i, t), e.lanes = n, e;
  }
  function la(e, t, n, i) {
    return e = sn(22, e, i, t), e.elementType = ae, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ao(e, t, n) {
    return e = sn(6, e, null, t), e.lanes = n, e;
  }
  function lo(e, t, n) {
    return t = sn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Am(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function oo(e, t, n, i, l, u, h, k, y) {
    return e = new Am(e, t, n, k, y), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = sn(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xl(u), e;
  }
  function bm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: U, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
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
  function pd(e, t, n, i, l, u, h, k, y) {
    return e = oo(n, i, !0, e, l, u, h, k, y), e.context = md(null), n = e.current, i = At(), l = ii(n), u = On(i, l), u.callback = t ?? null, qn(n, u, l), e.current.lanes = l, vr(e, l, i), Dt(e, i), e;
  }
  function oa(e, t, n, i) {
    var l = t.current, u = At(), h = ii(l);
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
  function uo(e, t) {
    vd(e, t), (e = e.alternate) && vd(e, t);
  }
  function Rm() {
    return null;
  }
  var kd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function co(e) {
    this._internalRoot = e;
  }
  ca.prototype.render = co.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    oa(e, t, null, null);
  }, ca.prototype.unmount = co.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ji(function() {
        oa(null, e, null, null);
      }), t[Pn] = null;
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
  function fo(e) {
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
          var O = ua(h);
          u.call(O);
        };
      }
      var h = pd(t, i, e, 0, null, !1, !1, "", yd);
      return e._reactRootContainer = h, e[Pn] = h.current, Pr(e.nodeType === 8 ? e.parentNode : e), ji(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var O = ua(y);
        k.call(O);
      };
    }
    var y = oo(e, 0, !1, null, null, !1, !1, "", yd);
    return e._reactRootContainer = y, e[Pn] = y.current, Pr(e.nodeType === 8 ? e.parentNode : e), ji(function() {
      oa(t, y, n, i);
    }), y;
  }
  function fa(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var y = ua(h);
          k.call(y);
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
          n !== 0 && (Oa(t, n | 1), Dt(t, ie()), (ze & 6) === 0 && (Xi = ie() + 500, Xn()));
        }
        break;
      case 13:
        ji(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = At();
            mn(i, e, 1, l);
          }
        }), uo(e, 1);
    }
  }, $a = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = At();
        mn(t, e, 134217728, n);
      }
      uo(e, 134217728);
    }
  }, qo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Ln(e, t);
      if (n !== null) {
        var i = At();
        mn(n, e, t, i);
      }
      uo(e, t);
    }
  }, eu = function() {
    return Ge;
  }, tu = function(e, t) {
    var n = Ge;
    try {
      return Ge = e, t();
    } finally {
      Ge = n;
    }
  }, Rt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ie(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = Ms(i);
              if (!l) throw Error(o(90));
              de(i), Ie(i, l);
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
  }, ss = no, $e = ji;
  var Om = { usingClientEntryPoint: !1, Events: [Rr, Ii, Ms, vn, kn, no] }, Wr = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $m = { bundleType: Wr.bundleType, version: Wr.version, rendererPackageName: Wr.rendererPackageName, rendererConfig: Wr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
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
    if (!fo(t)) throw Error(o(200));
    return bm(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!fo(e)) throw Error(o(299));
    var n = !1, i = "", l = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = oo(e, 1, !1, null, null, n, !1, i, l), e[Pn] = t.current, Pr(e.nodeType === 8 ? e.parentNode : e), new co(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = hr(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return ji(e);
  }, zt.hydrate = function(e, t, n) {
    if (!da(t)) throw Error(o(200));
    return fa(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!fo(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = kd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = pd(t, null, e, 1, n ?? null, l, !1, u, h), e[Pn] = t.current, Pr(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ca(t);
  }, zt.render = function(e, t, n) {
    if (!da(t)) throw Error(o(200));
    return fa(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!da(e)) throw Error(o(40));
    return e._reactRootContainer ? (ji(function() {
      fa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = no, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!da(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return fa(e, t, n, !1, i);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Cd;
function Um() {
  if (Cd) return po.exports;
  Cd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), po.exports = Hm(), po.exports;
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
  ], x = ["e", "B", "G", "D", "A", "E"], R = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], C = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], M = {
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
      base: C,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: C,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: C,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: C,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, A = 26, D = 72, w = 30, N = 54, z = 34, S = 11, $ = (A + D) / 2, V = w + (c.length - 1) * z + 30, J = (H) => D + H * N, U = (H) => H === 0 ? $ : J(H) - N / 2, _ = (H) => w + H * z;
  function I(H, q, E) {
    const X = a.indexOf(s[H][0]) + Number(E.slice(-1)) - 1, oe = X % a.length, de = o[oe] + 12 * Math.floor(X / a.length), he = H + q - de;
    return a[oe] + (he < 0 ? "♭" : "♯").repeat(Math.abs(he));
  }
  function ne(H) {
    return [...H.base, ...H.add].sort((q, E) => q[0] - E[0]);
  }
  function re(H, q, E) {
    const X = q + (E ? 1 : 0), oe = m[X % m.length], de = Math.min(...oe.map(([Ie]) => Ie)), he = Math.max(...oe.map(([, Ie]) => Ie));
    let _e = (H - d % 12 + 12) % 12 - (E ? 8 : 5) + 12 * Math.floor(X / m.length);
    return de + _e < 0 && (_e += 12), he + _e > f.pentatonic && (_e -= 12), {
      strings: oe.map((Ie) => Ie.map((Qe) => Qe + _e)),
      start: de + _e,
      end: he + _e
    };
  }
  function ge(H, q, E) {
    const X = E[q], oe = (H + X - d % 12 + 12) % 12, de = d + oe - X, he = c.map((ve, Pe) => {
      const _e = q + (c.length - 1 - Pe) * 3;
      return [_e, _e + 1, _e + 2].map((Ie) => {
        const Qe = Math.floor(Ie / E.length), Ye = E[Ie % E.length];
        return de + Ye + 12 * Qe - ve;
      });
    });
    return {
      strings: he,
      start: Math.min(...he.map((ve) => ve[0])),
      end: Math.max(...he.map((ve) => ve.at(-1)))
    };
  }
  function Ce(H, q) {
    const E = [], X = Math.ceil(-H.end / 12) * 12;
    for (let de = X; H.start + de <= q; de += 12) {
      const he = H.strings.map((Pe) => Pe.map((_e) => _e + de).filter((_e) => _e >= 0 && _e <= q)), ve = he.flat();
      E.push({
        strings: he,
        start: Math.min(...ve),
        end: Math.max(...ve),
        partial: H.start + de < 0 || H.end + de > q
      });
    }
    const oe = E.filter((de) => !de.partial);
    return oe.length ? oe : E;
  }
  function B(H) {
    return ne(H).length === p;
  }
  function se(H, q, E) {
    const X = B(q);
    H.querySelector('[value="3nps"]').disabled = !X, H.value = X ? E ?? "3nps" : "pentatonic";
  }
  function K(H, q, E, X, oe) {
    const de = ne(q).map(([he]) => he);
    return X.map((he) => {
      const ve = he - 1, Pe = E === "3nps" ? ge(H, ve, de) : re(H, ve, q.base === C), _e = oe === void 0 ? [Pe] : Ce(Pe, oe);
      return { number: he, positions: _e };
    });
  }
  function ue(H, q) {
    const E = H.getBoundingClientRect(), X = H.querySelectorAll(q);
    let oe = 1 / 0;
    X.forEach((de) => {
      const he = de.getBoundingClientRect();
      let ve = 0;
      he.left < E.left ? ve = he.left - E.left - 8 : he.right > E.right && (ve = he.right - E.right + 8), Math.abs(ve) < Math.abs(oe) && (oe = ve);
    }), Number.isFinite(oe) && (H.scrollLeft += oe);
  }
  function ae(H, q = !1) {
    const E = H === "3nps" ? p : m.length;
    return Array.from({ length: E }, (X, oe) => {
      const de = oe + 1;
      return '<label class="box-toggle" data-box="' + de + '"><input type="checkbox" value="' + de + '"' + (q && oe === 0 ? " checked" : "") + "> Boksi " + de + "</label>";
    }).join("");
  }
  function W(H, q) {
    const E = ne(q), X = new Map(E.map(([de, he]) => [de, I(H, de, he)])), oe = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return E.flatMap(([de, he]) => oe.flatMap(({ suffix: ve, base: Pe }) => {
      const _e = Pe.map(([Ie]) => X.get((de + Ie) % 12));
      return _e.every(Boolean) ? {
        root: (H + de) % 12,
        degree: Number(String(he).replace(/\D/g, "")),
        name: _e[0] + ve,
        notes: _e,
        base: Pe,
        add: []
      } : [];
    }));
  }
  function ce(H, q) {
    const E = H.base.map(([de]) => (H.root + de) % 12), X = c.map((de) => {
      const he = [];
      for (let ve = 0; ve <= q; ve++) {
        const Pe = (de + ve) % 12;
        E.includes(Pe) && he.push({ fret: ve, pitch: Pe });
      }
      return he;
    }), oe = [];
    for (let de = 0; de <= X.length - 3; de++)
      for (const he of X[de])
        for (const ve of X[de + 1])
          if (he.pitch !== ve.pitch)
            for (const Pe of X[de + 2]) {
              if (Pe.pitch === he.pitch || Pe.pitch === ve.pitch) continue;
              const _e = [he.fret, ve.fret, Pe.fret], Ie = Math.min(..._e), Qe = Math.max(..._e);
              if (Qe - Ie > 3) continue;
              const Ye = Array(c.length).fill(null);
              Ye.splice(de, 3, ..._e), oe.push({ strings: Ye, low: Ie, high: Qe });
            }
    return oe.sort((de, he) => de.high - he.high || de.low - he.low);
  }
  const ee = {
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
  }, g = [
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
  function T(H, q) {
    const E = ee[H + ":" + q];
    if (E) return { frets: E, barre: null };
    let X = null;
    return g.forEach(({ string: oe, openPC: de, shapes: he }) => {
      const ve = he[q];
      if (!ve) return;
      let Pe = (H - de + 12) % 12;
      if (Pe + Math.min(...ve.filter((Qe) => Qe !== null)) < 0 && (Pe += 12), X && X.fret <= Pe) return;
      const _e = ve.map((Qe) => Qe === null ? null : Pe + Qe), Ie = Pe > 0 && ve.at(-1) === 0 ? { fret: Pe, from: oe, to: ve.length - 1 } : null;
      X = { fret: Pe, frets: _e, barre: Ie };
    }), X && { frets: X.frets, barre: X.barre };
  }
  function le(H, { frets: q, barre: E }, X) {
    const _e = [...c].reverse(), Ie = q.filter((Ve) => Ve > 0), Ye = !Ie.length || Math.max(...Ie) <= 4 && (q.includes(0) || Math.min(...Ie) === 1) ? 1 : Math.min(...Ie), Ue = (Ve) => 24 + Ve * 14, Xe = (Ve) => 30 + (Ve - Ye) * 18 + 18 / 2, ut = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (ut + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + X + "-ote paksusta kielestä ohueen: " + q.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Je += '<line class="' + (Ve === 0 && Ye === 1 ? "nut" : "fret") + '" x1="' + Ue(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + Ue(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return q.forEach((Ve, it) => {
      Je += '<line class="string" x1="' + Ue(it) + '" y1="30" x2="' + Ue(it) + '" y2="' + ut + '"/>';
    }), Ye > 1 && (Je += '<text class="fret-label" x="15" y="' + (Xe(Ye) + 4) + '">' + Ye + "</text>"), E && (Je += '<rect class="barre" x="' + (Ue(E.from) - 6.5) + '" y="' + (Xe(E.fret) - 6.5) + '" width="' + ((E.to - E.from) * 14 + 13) + '" height="13" rx="6.5"/>'), q.forEach((Ve, it) => {
      if (Ve === null) {
        Je += '<text class="marker" x="' + Ue(it) + '" y="22">×</text>';
        return;
      }
      const Vt = (_e[it] + Ve) % 12 === H;
      if (Ve === 0) {
        Je += '<circle class="open' + (Vt ? " root-open" : "") + '" cx="' + Ue(it) + '" cy="18" r="4.5"/>';
        return;
      }
      E && Ve === E.fret && it >= E.from && it <= E.to && !Vt || (Je += '<circle class="' + (Vt ? "root" : "tone") + '" cx="' + Ue(it) + '" cy="' + Xe(Ve) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function xe(H, q) {
    const E = new URLSearchParams(location.search), X = s.indexOf(E.get("toonikka")), oe = E.get("asteikko");
    return {
      rootPC: X === -1 ? H : X,
      scaleId: Object.hasOwn(M, oe) ? oe : q
    };
  }
  function Se(H, q, E) {
    return H + "?" + new URLSearchParams({ toonikka: s[q], asteikko: E });
  }
  function G(H, q, E, {
    boxes: X = [],
    onlyBoxNotes: oe = !1,
    automatic: de = !0,
    focusDegree: he = "",
    grip: ve = null,
    barre: Pe = null,
    label: _e = s[H] + " " + q.name,
    notes: Ie = null,
    targets: Qe = !1,
    muteFret: Ye = null
  } = {}) {
    const Ue = J(E), Xe = Ue + 48, ut = Xe + 28, Je = w - 14, Ve = _(c.length - 1) + 14, it = Ve - Je, Vt = de ? 680 : Math.ceil(ut * 0.64), Qt = X.flatMap((Te) => Te.positions), Nt = {};
    q.base.forEach(([Te, Ae]) => Nt[(H + Te) % 12] = { deg: Ae, added: !1 }), q.add.forEach(([Te, Ae]) => Nt[(H + Te) % 12] = { deg: Ae, added: !0 });
    const ln = c.map((Te, Ae) => !!ve && ve[Ae] === null), Yt = !!ve && Ye !== null, Jt = R.filter((Te, Ae) => ln[Ae]).reverse(), Mt = _e + ". " + E + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Jt.length ? " Soittamatta jäävät kielet: " + Jt.join(", ") + "." : "");
    let we = '<svg viewBox="0 0 ' + ut + " " + V + '" style="min-width:' + Vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + Mt + '">';
    we += '<rect x="' + A + '" y="' + Je + '" width="' + (D - A) + '" height="' + it + '" rx="6" fill="#2a2338"/>', we += '<rect x="' + D + '" y="' + Je + '" width="' + (Ue - D) + '" height="' + it + '" fill="#231a12"/>', we += '<rect x="' + Ue + '" y="' + Je + '" width="' + (ut - Ue - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let Te = 1; Te <= E; Te++)
      we += '<line x1="' + J(Te) + '" y1="' + Je + '" x2="' + J(Te) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    we += '<rect x="' + (D - 3) + '" y="' + Je + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', we += '<rect x="' + (Xe - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', we += '<rect x="' + (Xe - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Bt = (Je + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Te) => Te <= E).forEach((Te) => we += '<circle cx="' + U(Te) + '" cy="' + Bt + '" r="5.5" fill="#7a6550"/>');
    for (let Te = 12; Te <= E; Te += 12)
      we += '<circle cx="' + U(Te) + '" cy="' + (Bt - z) + '" r="5.5" fill="#7a6550"/>', we += '<circle cx="' + U(Te) + '" cy="' + (Bt + z) + '" r="5.5" fill="#7a6550"/>';
    we += '<text x="' + $ + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', we += '<text x="' + D + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', we += '<text x="' + Xe + '" y="' + (V - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Te = 1; Te <= E; Te++)
      we += '<text x="' + U(Te) + '" y="' + (V - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Te + "</text>";
    if (X.forEach(({ number: Te, positions: Ae }) => {
      Ae.forEach((Re) => {
        const He = Re.partial ? "box-highlight box-partial" : "box-highlight";
        we += '<g class="' + He + '" data-box="' + Te + '" aria-hidden="true">';
        const st = Re.strings.find((vt) => vt.length), Rt = (U(st[0]) + U(st.at(-1))) / 2;
        we += '<text class="box-number" x="' + Rt + '" y="12">' + Te + "</text>", Re.strings.forEach((vt, Xt) => {
          if (!vt.length) return;
          const En = U(vt[0]) - 16, vn = U(vt.at(-1)) - U(vt[0]) + 32;
          we += '<rect class="box-band" x="' + En + '" y="' + (_(Xt) - 14) + '" width="' + vn + '" height="28" rx="14"/>';
        }), we += "</g>";
      });
    }), c.forEach((Te, Ae) => {
      const Re = 1 + Ae * 0.45, He = _(Ae), st = ln[Ae] && !Yt;
      st ? we += '<text class="muted-mark" x="' + $ + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : ln[Ae] && Ye === 0 || (we += '<line x1="' + (A + 4) + '" y1="' + He + '" x2="' + (D - 4) + '" y2="' + He + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), we += "<g" + (st ? ' opacity=".35"' : "") + ">", we += '<line x1="' + D + '" y1="' + He + '" x2="' + (Xe + 5) + '" y2="' + He + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', we += '<circle cx="' + (Xe + 5) + '" cy="' + He + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', we += "</g>", we += '<text x="13" y="' + (He + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + x[Ae] + "</text>";
    }), ve && Pe && Pe.fret >= 1 && Pe.fret <= E) {
      const Te = _(Pe.from), Ae = _(Pe.to), Re = Math.min(Te, Ae) - 6, He = Math.max(Te, Ae) + 6;
      we += '<rect class="barre-indicator" x="' + (U(Pe.fret) - 7) + '" y="' + Re + '" width="14" height="' + (He - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (we += '<g class="fret-targets">', c.forEach((Te, Ae) => {
      for (let Re = 0; Re <= E; Re++) {
        const He = Re ? R[Ae] + "-kieli, " + Re + ". nauha" : "vapaa " + R[Ae] + "-kieli", st = Re ? N : D - A - 6;
        we += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Ae + '" data-fret="' + Re + '" data-midi="' + (Te + Re) + '" aria-label="' + He + '" x="' + (U(Re) - st / 2) + '" y="' + (_(Ae) - z / 2) + '" width="' + st + '" height="' + z + '" fill="transparent"/>';
      }
    }), we += "</g>"), (Ie ?? []).forEach(({ string: Te, fret: Ae, label: Re, kind: He }) => {
      we += '<g class="octave-note octave-' + He + '">', we += '<circle cx="' + U(Ae) + '" cy="' + _(Te) + '" r="' + S + '"/>', we += '<text x="' + U(Ae) + '" y="' + (_(Te) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", we += "</g>";
    }), ve && (we += '<g class="grip-notes">'), (Ie ? [] : c).forEach((Te, Ae) => {
      for (let Re = 0; Re <= E; Re++) {
        const He = (Te + Re) % 12;
        if (!(He in Nt) || ve && ve[Ae] !== Re || oe && !Qt.some(({ strings: vn }) => {
          const kn = vn[Ae];
          return kn.length > 0 && Re >= kn[0] && Re <= kn.at(-1);
        })) continue;
        const st = Nt[He], Rt = st.deg === "1", vt = st.added ? "#f0a13c" : Rt ? "#4b2fd6" : "#6d4aff", Xt = st.added ? "#1a1430" : "#fff";
        st.deg === he && (we += '<circle class="focus-note" cx="' + U(Re) + '" cy="' + _(Ae) + '" r="14.5"/>');
        const En = ve ? ' data-string="' + (Ae + 1) + '" data-fret="' + Re + '" data-degree="' + st.deg + '"' : "";
        we += "<circle" + En + ' cx="' + U(Re) + '" cy="' + _(Ae) + '" r="' + S + '" fill="' + vt + '" stroke="' + (Rt ? "#fff" : "#1a1430") + '" stroke-width="' + (Rt ? 2.5 : 1) + '"/>', we += '<text x="' + U(Re) + '" y="' + (_(Ae) + 3.5) + '" font-size="' + (st.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Xt + '" text-anchor="middle">' + st.deg + "</text>";
      }
    }), ve && (we += "</g>"), Yt && ln.forEach((Te, Ae) => {
      if (!Te) return;
      const Re = U(Ye), He = _(Ae);
      we += '<g class="muted-mark grip-mute" data-string="' + (Ae + 1) + '" data-fret="' + Ye + '">', we += '<circle cx="' + Re + '" cy="' + He + '" r="9" fill="' + (Ye === 0 ? "#2a2338" : "#231a12") + '"/>', we += '<text x="' + Re + '" y="' + (He + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', we += "</g>";
    }), we += "</svg>", we;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: c,
    PENT_MAJ: C,
    SCALES: M,
    noteName: I,
    scaleNotes: ne,
    scaleTriads: W,
    triadGrips: ce,
    chordGrip: T,
    renderChordDiagram: le,
    selectionFromURL: xe,
    selectionHref: Se,
    renderBoard: G,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: B,
    syncBoxSystem: se,
    fingeringBoxes: K,
    boxOptions: ae,
    revealPositions: ue
  };
})();
globalThis.MusicMapFretboard = Qm;
function yo(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Ym(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Jm(s) {
  const a = Ym(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const Fe = globalThis.MusicMapFretboard, Ke = (s) => (s % 12 + 12) % 12, Xm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Zm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], be = (s, a = !1, o = !1) => (a ? Zm : Xm)[Ke(s)] + (o ? Math.floor(s / 12) - 1 : ""), oi = (s) => Fe.CHROM[Ke(s)], Zr = (s, a, o) => Fe.noteName(Ke(s), a, o);
function qm(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Ke(s) < 2 ? o - 1 : a[0] === "C" && Ke(s) > 9 ? o + 1 : o;
}
const an = ["ohut E", "B", "G", "D", "A", "paksu E"], Uo = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], kf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], ep = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ci = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Oe = (s, a) => ({ string: s, fret: a, midi: Fe.OPEN_PITCHES[s] + a });
function ur(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Oe(c, a + f)));
}
const We = (s) => `${s.string}:${s.fret}`, Ei = {
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
], _d = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function gf(s, a) {
  const o = _d[a] ?? _d.E, c = Ke(s - o.root);
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
const Ti = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, In = (s) => s.mode === "scale" && s.order !== "random", jf = (s) => ["note", "degree"].includes(Ti(s)) ? "class" : In(s) ? "pitch" : s.check, pa = (s) => Ti(s) === "mic", Md = "musiikin-kartta:harjoittelu", xf = 3, _o = () => ({ version: xf, settings: { ...ya }, stats: {}, recent: [], sessions: [] }), Sf = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, pn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function ip(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => pn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || pn(s.errors)) && (s.ema === void 0 || pn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || pn(s.emaMs));
}
function rp(s) {
  return !!s && typeof s.id == "string" && pn(s.count) && pn(s.first) && s.first <= s.count && pn(s.ms) && pn(s.at) && (s.solo === void 0 || pn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || pn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Pd(s) {
  if (!s) return _o();
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
const Ad = 2500, sp = 8e3, bd = 0.3, es = (s) => s.ema ?? s.correct / s.attempts, ts = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Go(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (ts(s) - Ad) / (sp - Ad)));
  return es(s) * 0.65 + a * 0.35;
}
function ap(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Go(s)) * 3;
}
class Rd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Pd(a?.getItem(Md) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = _o();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Md, JSON.stringify(this.data)), this.warning = "";
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
    const o = Pd(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ..._o(), settings: this.data.settings }, this.writable = !0, this.save();
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
function _i({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta" }) {
  const p = { "--cols": s.max - s.min + 1 }, { strings: m, min: x, max: R } = s, [v, C] = L.useState({ string: Math.min(...m), fret: x }), M = L.useRef(null), A = new Map(a.map((S) => [We(S), S])), D = a.map((S) => `${We(S)}${S.kind}`).join(",");
  L.useEffect(() => {
    const S = M.current, $ = S?.querySelector(".target, .anchor");
    S && $ && (S.scrollLeft += $.getBoundingClientRect().left - S.getBoundingClientRect().left - S.clientWidth / 2 + $.clientWidth / 2);
  }, [D]);
  const [w, N] = L.useState({ left: !1, right: !1 });
  L.useEffect(() => {
    const S = M.current;
    if (!S) return;
    const $ = () => {
      const J = S.scrollLeft > 2, U = S.scrollLeft + S.clientWidth < S.scrollWidth - 2;
      N((_) => _.left === J && _.right === U ? _ : { left: J, right: U });
    };
    $(), S.addEventListener("scroll", $, { passive: !0 });
    const V = typeof ResizeObserver > "u" ? null : new ResizeObserver($);
    return V?.observe(S), () => {
      S.removeEventListener("scroll", $), V?.disconnect();
    };
  }, [D, x, R]);
  const z = m.includes(v.string) && v.fret >= x && v.fret <= R ? v : { string: Math.min(...m), fret: x };
  return /* @__PURE__ */ r.jsxs("div", { className: "fret-wrap" + (w.left ? " more-left" : "") + (w.right ? " more-right" : ""), children: [
    (w.left || w.right) && /* @__PURE__ */ r.jsxs("p", { className: "fret-scroll-hint", children: [
      w.left && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      w.left && w.right ? "molemmilla puolilla" : w.right ? "oikealla" : "vasemmalla",
      w.right && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { ref: M, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board", style: p, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx(Ef, { min: x, max: R }),
      /* @__PURE__ */ r.jsx("tbody", { children: Fe.OPEN_PITCHES.map((S, $) => /* @__PURE__ */ r.jsxs("tr", { className: m.includes($) ? "" : "unused", style: Nf($), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${$ + 1}. kieli: ${an[$]}${o.includes($) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(wf, { string: $ }),
          o.includes($) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        ur([$], x, R).map((V) => {
          const J = A.get(We(V)), U = `${an[$]}-kieli, ${Ci(V.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${V.fret === 0 ? "open-fret " : ""}${J ? J.kind === "answer" ? "target" : J.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": $,
              "data-fret": V.fret,
              tabIndex: z.string === $ && z.fret === V.fret ? 0 : -1,
              onFocus: () => C(V),
              onKeyDown: (_) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) return;
                _.preventDefault();
                const I = [...m].sort((Ce, B) => Ce - B), ne = I.indexOf($), re = _.key === "ArrowUp" ? I[Math.max(0, ne - 1)] : _.key === "ArrowDown" ? I[Math.min(I.length - 1, ne + 1)] : $, ge = _.key === "Home" ? x : _.key === "End" ? R : Math.max(x, Math.min(R, V.fret + (_.key === "ArrowRight" ? 1 : _.key === "ArrowLeft" ? -1 : 0)));
                _.currentTarget.closest("table")?.querySelector(`button[data-string="${re}"][data-fret="${ge}"]`)?.focus();
              },
              disabled: c || !m.includes($),
              "aria-label": U + (J ? `, ${up[J.kind]}${J.label ? " " + J.label : ""}` : ""),
              onClick: () => d?.(V),
              children: J ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: J.label || "●" }) : null
            }
          ) }, V.fret);
        })
      ] }, $)) })
    ] }) })
  ] });
}
function cp({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, x = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx(Ef, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: Fe.OPEN_PITCHES.map((R, v) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Nf(v), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${an[v]}`, children: /* @__PURE__ */ r.jsx(wf, { string: v }) }),
      ur([v], p, m).map((C) => {
        const M = Object.hasOwn(a, x + We(C)) ? a[x + We(C)] : void 0, A = Go(M), D = A === null ? "unseen" : M.attempts < 3 ? "few" : A >= 0.8 ? "strong" : A >= 0.5 ? "growing" : "weak", w = `${an[v]}-kieli, ${Ci(C.fret)}, ${be(C.midi, d)}`, N = M ? `${Math.round(A * 100)} %, ${M.correct}/${M.attempts} heti oikein, viime aikoina ${Math.round(es(M) * 100)} % ja ${(ts(M) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${C.fret === 0 ? "open-fret " : ""}${D}`, title: `${w}: ${N}`, children: [
          /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: A === null ? "·" : M.attempts < 3 ? "?" : Math.round(A * 100) }),
          /* @__PURE__ */ r.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            N
          ] })
        ] }, C.fret);
      })
    ] }, v)) })
  ] }) });
}
const dp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", Pa = (s) => s.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[s.scale]) : Ei[s.mode === "caged" ? "maj" : s.chord].tones, Cf = (s) => Fe.fingeringBoxes(s.root, Fe.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function Mi(s) {
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
  const a = Mi(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function is(s) {
  const a = Mi(s), o = ur(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Ke(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(gf(s.root, s.shape).map(We));
    return o.filter((p) => f.has(We(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => Pa(s).some(([p]) => Ke(f.midi - s.root) === p));
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
  const a = Pa(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function Mo(s) {
  const a = is(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = hp(s).filter(([d]) => !a.some((f) => Ke(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !Tf(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function mp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function _f(s) {
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
function Ni(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function vp(s, a, o = {}, c, d = Math.random) {
  const f = Mo(s);
  if (f) throw new Error(f);
  const p = jf(s), m = Ti(s), x = p === "pitch", R = (_) => s.weak ? ap(o[Sf({ input: m, check: p, hint: !1, item: _ })]) : 1, v = (_) => qi(_, _.map(() => 1), d), C = is(s), M = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const _ = Ni(C, (re) => !!c && We(re) === We(c.position)), I = qi(_, _.map((re) => R(`notes:${We(re)}`)), d), ne = be(I.midi, s.flats, x);
    return {
      ...M,
      position: I,
      midi: I.midi,
      name: ne,
      item: `notes:${We(I)}`,
      prompt: `Etsi ${ne} ${Uo[I.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const _ = (ge) => `ear-note:${Ke(ge.midi)}${s.reference ? ":ref" : ""}`, I = Ni(C, (ge) => !!c && Ke(ge.midi) === Ke(c.midi)), ne = qi(I, I.map((ge) => R(_(ge))), d), re = s.reference ? 57 + 12 * Math.round((ne.midi - 57) / 12) : void 0;
    return {
      ...M,
      position: ne,
      midi: ne.midi,
      name: be(ne.midi, s.flats),
      item: _(ne),
      choices: "note",
      reference: re,
      sound: re === void 0 ? [ne.midi] : [re, ne.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const _ = Ni(C, (ne) => !!c && ne.midi === c.midi), I = qi(_, _.map((ne) => R(`repeat:${ne.midi}`)), d);
    return {
      ...M,
      position: I,
      midi: I.midi,
      name: be(I.midi, s.flats, !0),
      item: `repeat:${I.midi}`,
      sound: [I.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const _ = Ni(Tf(s, C), (re) => c?.interval === re.iv && c?.direction === re.direction), I = qi(_, _.map((re) => R(`interval:${re.iv}:${re.direction}`)), d), ne = v(Ni(I.pairs, (re) => c?.reference === re.reference.midi));
    return {
      ...M,
      position: ne.target,
      midi: ne.target.midi,
      name: be(ne.target.midi, s.flats, !0),
      item: `interval:${I.iv}:${I.direction}`,
      interval: I.iv,
      direction: I.direction,
      reference: ne.reference.midi,
      sound: [ne.reference.midi, ne.target.midi],
      prompt: `Kuulet ${I.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${be(ne.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const A = Pa(s);
  let D, w = 0;
  if (In(s)) {
    const _ = mp(s, C);
    w = _.length, D = _[a % _.length];
  } else {
    const _ = A.filter(([re]) => C.some((ge) => Ke(ge.midi - s.root) === re)), I = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [A[a % A.length]] : A.filter(([, re]) => re.endsWith(s.chordTone)) : Ni(_, ([re]) => c?.interval === re), [ne] = qi(I, I.map(([re]) => R(Ld(s, re))), d);
    D = v(Ni(C.filter((re) => Ke(re.midi - s.root) === ne), (re) => !!c && We(re) === We(c.position)));
  }
  const N = Ke(D.midi - s.root), z = A.find(([_]) => _ === N)[1], S = Zr(s.root, N, z), $ = x ? S + qm(D.midi, S) : S, V = s.mode === "scale" ? `${oi(s.root)}-${Fe.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${oi(s.root)}-duurisointu, ${s.shape}-muoto` : yf(s.root, s.chord), J = s.mode !== "caged" && s.activity === "degree", U = J ? `${V}: mikä aste on ${S}?` : w ? `${V} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${z}. aste (${$}).` : `${V}: etsi ${z}. aste${x ? ` (${$})` : ""}.`;
  return {
    ...M,
    position: D,
    midi: D.midi,
    name: $,
    item: Ld(s, N),
    prompt: U,
    degree: z,
    interval: N,
    choices: J ? "degree" : "position"
  };
}
function Po(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Ke(s) === Ke(a) : s === a);
}
function Mf(s, a, o) {
  return Po(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : dp(s) ? is(s).some((c) => We(c) === We(o)) : !0 : !1;
}
function kp(s, a) {
  const o = Mi(s);
  return ur(o.strings, o.min, o.max).filter((c) => Mf(s, a, c));
}
const wt = (s, a, o) => ({ ...s, label: a, kind: o }), yp = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function gp(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = Mi(s), f = ur(d.strings, d.min, d.max), p = kp(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((z) => wt(z, a.name, "answer")), text: `${a.name} on ${kf[a.position.string]}: ${Ci(a.position.fret)}.` };
    const w = f.find((z) => z.string === a.position.string), N = be(w.midi, s.flats);
    return {
      marks: [wt(w, N, "anchor")],
      text: `Apupiste: ${ep[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${N}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [wt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [wt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${an[a.position.string]}-kieli, ${Ci(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((w) => wt(w, be(w.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Uo[a.position.string]}.` };
  if (s.mode === "interval") {
    const w = be(a.reference, s.flats, !0), N = f.filter((z) => z.midi === a.reference).map((z) => wt(z, w, "anchor"));
    return c ? {
      marks: [...N, ...p.map((z) => wt(z, be(z.midi, s.flats, !0), "answer"))],
      text: `${yp(qr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: N, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = is(s), x = Pa(s), R = (w) => x.find(([N]) => N === Ke(w.midi - s.root))?.[1] ?? "", v = Zr(s.root, a.interval, a.degree), C = m.filter((w) => Ke(w.midi - s.root) === 0), M = (w) => p.some((N) => We(N) === We(w)), A = `${a.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((w) => wt(w, R(w), M(w) ? "answer" : "shape")), text: A } : { marks: m.map((w) => wt(w, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const D = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = m.filter((N) => Ke(N.midi) === Ke(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : C).map((N) => wt(N, "1", "anchor")), ...w.map((N) => wt(N, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((N) => wt(N, v, "shape")), text: `Katso ${D} nimeä: mikä on sen perussävel?` } : {
      marks: [...C.map((N) => wt(N, "1", "anchor")), ...w.map((N) => wt(N, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...C.filter((w) => !M(w)).map((w) => wt(w, "1", "anchor")), ...p.map((w) => wt(w, a.degree, "answer"))], text: A } : a.interval === 0 ? { marks: [], text: `1. aste on ${D} perussävel ${oi(s.root)}.` } : { marks: C.map((w) => wt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class jp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = _f(a);
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? Po(f.midi, a, "class") : o === "board" ? !!c && Mf(this.settings, f, c) : Po(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, x = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${We(m)}` : f.item,
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
    return m ? x.position = We(m) : this.settings.mode === "notes" && (x.position = We(f.position)), this.results.push(x), this.record(x), this.phase = "feedback", "correct";
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
const bo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], ir = (s) => bo.find(([a]) => a === s)?.[1] ?? s;
function bt({ label: s, children: a }) {
  const o = L.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    L.cloneElement(a, { id: o })
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
  const a = Mi(s), o = _f(s), c = Ti(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Ma[s.hints].title} · ${d} · ${In(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Fd({ s, change: a, locked: o, problem: c }) {
  const d = L.useId(), f = (v, C) => a({ ...s, [v]: C }), p = Mi(s), m = Ti(s) === "note" || Ti(s) === "degree", x = ["scale", "chord", "caged"].includes(s.mode), R = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(bt, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: bo.map(([v, C]) => /* @__PURE__ */ r.jsx("option", { value: v, children: C }, v)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: bo.find(([v]) => v === s.mode)[2] })
    ] }),
    x && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx(bt, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: Fe.CHROM.map((v, C) => /* @__PURE__ */ r.jsx("option", { value: C, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(Fe.SCALES).map(([v, C]) => /* @__PURE__ */ r.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ r.jsxs("select", { value: s.box, onChange: (v) => f("box", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Sävelten järjestys", children: /* @__PURE__ */ r.jsxs("select", { value: s.order, onChange: (v) => f("order", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ r.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ r.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      s.mode === "chord" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(bt, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ei).map(([v, C]) => /* @__PURE__ */ r.jsx("option", { value: v, children: C.name }, v)) }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ r.jsxs("select", { value: s.chordTone, onChange: (v) => f("chordTone", v.target.value), children: [
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
      s.mode === "caged" ? /* @__PURE__ */ r.jsx(bt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ r.jsx("select", { value: s.shape, onChange: (v) => f("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ r.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ r.jsx(bt, { label: "Tehtävä", children: /* @__PURE__ */ r.jsxs("select", { value: s.activity, onChange: (v) => f("activity", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ r.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    s.mode === "interval" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ r.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ r.jsxs("label", { children: [
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (C) => f("intervals", C.target.checked ? [...s.intervals, v] : s.intervals.filter((M) => M !== v)) }),
        qr[v]
      ] }, v)) }),
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx(bt, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
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
        /* @__PURE__ */ r.jsx(bt, { label: "Kierroksen pituus", children: /* @__PURE__ */ r.jsxs("select", { value: s.rounds, disabled: In(s), onChange: (v) => f("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ r.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ r.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ r.jsx(bt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ r.jsxs("select", { value: In(s) ? "pitch" : s.check, disabled: In(s), onChange: (v) => f("check", v.target.value), children: [
          /* @__PURE__ */ r.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ r.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ r.jsx(bt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ r.jsxs("select", { value: String(s.flats), onChange: (v) => f("flats", v.target.value === "true"), children: [
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
          /* @__PURE__ */ r.jsx(bt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: "0", max: "24", value: s.min, onChange: (v) => f("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ r.jsx(bt, { label: "Viimeinen nauha", children: /* @__PURE__ */ r.jsx("input", { type: "number", min: s.min, max: "24", value: s.max, onChange: (v) => f("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: an.map((v, C) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.strings.includes(C), onChange: (M) => f("strings", M.target.checked ? [...s.strings, C] : s.strings.filter((A) => A !== C)) }),
          C + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "check-row", children: [
        R && /* @__PURE__ */ r.jsxs("label", { children: [
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
const Np = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ro = 100, Pf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Wo(s) {
  if (s === null || s.trim() === "") return Ro;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Ro;
}
function Ep() {
  try {
    return Wo(localStorage.getItem(Pf));
  } catch {
    return Ro;
  }
}
function Cp(s) {
  try {
    localStorage.setItem(Pf, String(Wo(String(s))));
  } catch {
  }
}
function Dd(s, a, o = !0) {
  return o ? Np[s] * Wo(String(a)) / 100 : 0;
}
function Af(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Tp = 0.12, _p = 2e3, Mp = 3;
function Pp(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= Tp || s.seeking || s.readyState < Mp ? !1 : s.msSinceLastFix >= _p;
}
const Ap = 1.5, bp = 0.4, Rp = 0.5;
let Lo = null, Lp = null;
function Op(s) {
  return Lo !== null ? Lo : (Lp ??= Af()) ? 0 : bp;
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
    const f = o.currentTime - a.currentTime, p = Math.abs(f), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, x = this.lastFix.get(o);
    if (!Pp({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: x === void 0 ? 1 / 0 : d - x
    }, c)) return !1;
    const R = !a.paused;
    !c && R && x !== void 0 && (this.latency = Math.min(Ap, Math.max(0, this.latency - Rp * f)), Lo = this.latency);
    let v = a.currentTime + (R ? this.latency : 0);
    Number.isFinite(o.duration) && (v = Math.min(v, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = v;
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
  const s = L.useRef(null), a = L.useRef(null), [o, c] = L.useState(!1), [d, f] = L.useState(!1), [p, m] = L.useState(!1), [x, R] = L.useState(0), [v, C] = L.useState(0), [M, A] = L.useState(""), D = L.useRef(new bf());
  function w(V = !1) {
    const J = s.current, U = a.current;
    !J || !U || !Number.isFinite(J.currentTime) || D.current.align(J, U, V);
  }
  function N() {
    s.current?.pause(), a.current?.pause(), c(!1);
  }
  async function z() {
    const V = s.current, J = a.current;
    if (!(!V || !J)) {
      if (o) {
        N();
        return;
      }
      A(""), J.muted = !d, J.volume = 0.55, V.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [V.play(), J.play()] : [V.play()]), w(), c(!0);
      } catch {
        N(), A("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function S(V) {
    const J = s.current, U = a.current;
    if (!(!J || !U || !Number.isFinite(V))) {
      J.currentTime = V;
      try {
        U.currentTime = V;
      } catch {
      }
      R(V);
    }
  }
  function $(V) {
    const J = s.current, U = a.current;
    if (f(V), !!U) {
      if (U.muted = !V, !V) {
        U.pause();
        return;
      }
      !J || !o || (w(!0), U.play().catch(() => A("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return L.useEffect(() => {
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
              onChange: (V) => $(V.target.checked)
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
        z();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(x, v > 0 ? v : 1),
          disabled: !v,
          onChange: (V) => S(Number(V.target.value))
        }
      ),
      /* @__PURE__ */ r.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        zd(x),
        " / ",
        zd(v)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Ip,
        loop: p,
        onLoadedMetadata: (V) => C(V.currentTarget.duration),
        onTimeUpdate: (V) => {
          R(V.currentTarget.currentTime), V.currentTarget.paused || w();
        },
        onEnded: () => {
          s.current?.loop || (a.current?.pause(), c(!1), R(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => A("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
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
          const V = s.current, J = a.current;
          V?.duration && J?.duration && Math.abs(V.duration - J.duration) > 0.15 && A("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => A("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    M && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: M }),
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
        new Promise((v, C) => {
          R = setTimeout(() => C(new Vd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), zp);
        })
      ]).finally(() => clearTimeout(R));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], x = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: x.deviceId ?? "",
      channelCount: x.channelCount ?? 1,
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
var go, Bd;
function Kp() {
  if (Bd) return go;
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
        var x = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << x;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return go = s, s.prototype.fromComplexArray = function(o, c) {
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
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, x, R = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const N = R[x];
        this._singleTransform2(m, N, f);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const N = R[x];
        this._singleTransform4(m, N, f);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var M = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var A = m + M, D = m, w = 0; D < A; D += 2, w += f) {
          const N = D, z = N + M, S = z + M, $ = S + M, V = o[N], J = o[N + 1], U = o[z], _ = o[z + 1], I = o[S], ne = o[S + 1], re = o[$], ge = o[$ + 1], Ce = V, B = J, se = C[w], K = v * C[w + 1], ue = U * se - _ * K, ae = U * K + _ * se, W = C[2 * w], ce = v * C[2 * w + 1], ee = I * W - ne * ce, g = I * ce + ne * W, T = C[3 * w], le = v * C[3 * w + 1], xe = re * T - ge * le, Se = re * le + ge * T, G = Ce + ee, H = B + g, q = Ce - ee, E = B - g, X = ue + xe, oe = ae + Se, de = v * (ue - xe), he = v * (ae - Se), ve = G + X, Pe = H + oe, _e = G - X, Ie = H - oe, Qe = q + he, Ye = E - de, Ue = q - he, Xe = E + de;
          o[N] = ve, o[N + 1] = Pe, o[z] = Qe, o[z + 1] = Ye, o[S] = _e, o[S + 1] = Ie, o[$] = Ue, o[$ + 1] = Xe;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], x = p[c + 1], R = p[c + d], v = p[c + d + 1], C = m + R, M = x + v, A = m - R, D = x - v;
    f[o] = C, f[o + 1] = M, f[o + 2] = A, f[o + 3] = D;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, R = d * 3, v = p[c], C = p[c + 1], M = p[c + d], A = p[c + d + 1], D = p[c + x], w = p[c + x + 1], N = p[c + R], z = p[c + R + 1], S = v + D, $ = C + w, V = v - D, J = C - w, U = M + N, _ = A + z, I = m * (M - N), ne = m * (A - z), re = S + U, ge = $ + _, Ce = V + ne, B = J - I, se = S - U, K = $ - _, ue = V - ne, ae = J + I;
    f[o] = re, f[o + 1] = ge, f[o + 2] = Ce, f[o + 3] = B, f[o + 4] = se, f[o + 5] = K, f[o + 6] = ue, f[o + 7] = ae;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, x, R = this._bitrev;
    if (p === 4)
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Te = R[x];
        this._singleRealTransform2(m, Te >>> 1, f >>> 1);
      }
    else
      for (m = 0, x = 0; m < c; m += p, x++) {
        const Te = R[x];
        this._singleRealTransform4(m, Te >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, C = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var M = p >>> 1, A = M >>> 1, D = A >>> 1;
      for (m = 0; m < c; m += p)
        for (var w = 0, N = 0; w <= D; w += 2, N += f) {
          var z = m + w, S = z + A, $ = S + A, V = $ + A, J = o[z], U = o[z + 1], _ = o[S], I = o[S + 1], ne = o[$], re = o[$ + 1], ge = o[V], Ce = o[V + 1], B = J, se = U, K = C[N], ue = v * C[N + 1], ae = _ * K - I * ue, W = _ * ue + I * K, ce = C[2 * N], ee = v * C[2 * N + 1], g = ne * ce - re * ee, T = ne * ee + re * ce, le = C[3 * N], xe = v * C[3 * N + 1], Se = ge * le - Ce * xe, G = ge * xe + Ce * le, H = B + g, q = se + T, E = B - g, X = se - T, oe = ae + Se, de = W + G, he = v * (ae - Se), ve = v * (W - G), Pe = H + oe, _e = q + de, Ie = E + ve, Qe = X - he;
          if (o[z] = Pe, o[z + 1] = _e, o[S] = Ie, o[S + 1] = Qe, w === 0) {
            var Ye = H - oe, Ue = q - de;
            o[$] = Ye, o[$ + 1] = Ue;
            continue;
          }
          if (w !== D) {
            var Xe = E, ut = -X, Je = H, Ve = -q, it = -v * ve, Vt = -v * he, Qt = -v * de, Nt = -v * oe, ln = Xe + it, Yt = ut + Vt, Jt = Je + Nt, Mt = Ve - Qt, we = m + A - w, Bt = m + M - w;
            o[we] = ln, o[we + 1] = Yt, o[Bt] = Jt, o[Bt + 1] = Mt;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], x = p[c + d], R = m + x, v = m - x;
    f[o] = R, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, x = d * 2, R = d * 3, v = p[c], C = p[c + d], M = p[c + x], A = p[c + R], D = v + M, w = v - M, N = C + A, z = m * (C - A), S = D + N, $ = w, V = -z, J = D - N, U = w, _ = z;
    f[o] = S, f[o + 1] = 0, f[o + 2] = $, f[o + 3] = V, f[o + 4] = J, f[o + 5] = 0, f[o + 6] = U, f[o + 7] = _;
  }, go;
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
  const [o, c, d] = [s - 1, s, s + 1], [f, p, m] = [a[o], a[c], a[d]], x = f / 2 - p + m / 2, R = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, C = -R / (2 * x), M = x * C * C + R * C + v;
  return [C, M];
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
    const d = Math.max(...c.map((x) => this._nsdfBuffer[x])), f = c.find(
      (x) => this._nsdfBuffer[x] >= this._clarityThreshold * d
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
      onFrame: x,
      onStableNote: R
    } = this.opts, v = this.analysers.map((_, I) => (_.getFloatTimeDomainData(this.buffers[I]), Kd(this.buffers[I], this.buffers[I].length - this.shortLength))), C = v.indexOf(Math.max(...v));
    C !== this.channel && v[C] > (v[this.channel] ?? 0) * Xp && (this.channel = C);
    const M = this.buffers[this.channel], A = v[this.channel], D = tv(M, M.length - this.shortLength), w = { rms: A, peak: D, channel: this.channel, levels: v }, N = A < c, z = this.onset.feed(A, a, c);
    if (N && Kd(M, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), x?.({ ...w, status: "silent" });
      return;
    }
    const [S, $] = this.detector.findPitch(M, this.mic.context.sampleRate);
    if (!isFinite(S) || $ < o) {
      this.gate.feed(null, a, d, N, z), x?.({ ...w, status: N ? "silent" : "unclear", clarity: isFinite($) ? $ : 0 });
      return;
    }
    if (S < p || S > m) {
      this.gate.feed(null, a, d, N, z), x?.({ ...w, status: "out-of-range", frequency: S, clarity: $ });
      return;
    }
    const { midi: V, cents: J } = Jm(S);
    if (Math.abs(J) > f) {
      this.gate.feed(null, a, d, N, z), x?.({ ...w, status: "off-pitch", frequency: S, clarity: $, midi: V, cents: J });
      return;
    }
    x?.({ ...w, status: "pitch", frequency: S, clarity: $, midi: V, cents: J });
    const U = this.gate.feed(V, a, d, N, z);
    U !== null && R?.({ midi: V, frequency: S, cents: J, clarity: $, timestamp: a, heldMs: U.heldMs });
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
      }, x = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((R) => R.addEventListener("ended", m, { once: !0, signal: x.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: x.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
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
async function jo(s) {
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
    if (await jo(d), c !== this.token) return !1;
    const f = d.createGain();
    f.connect(d.destination), this.master = f;
    const p = Array.from({ length: 12 }, (R, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((R, v) => {
      const C = d.createOscillator(), M = d.createGain(), A = d.currentTime + 0.05 + v * 0.8;
      m ? C.setPeriodicWave(m) : C.type = "triangle", C.frequency.value = yo(R), M.gain.setValueAtTime(0, A), M.gain.linearRampToValueAtTime(0.22, A + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, A + 0.7), C.connect(M), M.connect(f), C.start(A), C.stop(A + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(v);
      }, 50 + v * 800));
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
  async playTimed(a, o, c) {
    if (this.stop(), !a.length) return !1;
    const d = this.token, f = this.provide();
    if (await jo(f), d !== this.token) return !1;
    const p = 60 / Math.max(40, Math.min(140, o)), m = f.createGain();
    m.connect(f.destination), this.master = m;
    const x = Array.from({ length: 12 }, (A, D) => 1 / (D + 1) ** 1.3), R = f.createPeriodicWave?.(
      new Float32Array([0, ...x.map(() => 0)]),
      new Float32Array([0, ...x])
    ), v = f.currentTime + 0.05;
    let C = 0;
    return a.forEach((A, D) => {
      if (!Number.isFinite(A.beat) || A.beat < 0 || !Number.isFinite(A.duration) || A.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const w = v + A.beat * p, N = A.duration * p, z = w + Math.max(0.08, N * 0.94), S = f.createOscillator(), $ = f.createGain();
      R ? S.setPeriodicWave(R) : S.type = "triangle", S.frequency.value = yo(A.midi), $.gain.setValueAtTime(0, w), $.gain.linearRampToValueAtTime(0.22, w + 0.012), $.gain.exponentialRampToValueAtTime(1e-3, z - 0.01), S.connect($), $.connect(m), S.start(w), S.stop(z), c && this.noteTimers.push(setTimeout(() => {
        d === this.token && c(D);
      }, 50 + A.beat * p * 1e3)), C = Math.max(C, A.beat + A.duration);
    }), !await new Promise((A) => {
      this.settle = A, this.timer = setTimeout(() => A(!0), 50 + C * p * 1e3 + 150);
    }) || d !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], m.disconnect(), this.master = void 0, !0);
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
    if (await jo(f), d !== this.token) return !1;
    const p = f.createGain();
    p.connect(f.destination), this.master = p;
    const m = Array.from({ length: 12 }, (w, N) => 1 / (N + 1) ** 1.3), x = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let R = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (R = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let C = f.currentTime + 0.05, M = 0;
    const A = [], D = () => {
      if (d === this.token) {
        if (C < f.currentTime - 0.02) {
          const w = Math.ceil((f.currentTime - C) / R);
          C += w * R, M = (M + w) % a.length, A.length = 0;
        }
        for (; C < f.currentTime + v; ) {
          const w = a[M], N = M, z = C, S = f.createOscillator(), $ = f.createGain();
          x ? S.setPeriodicWave(x) : S.type = "triangle", S.frequency.value = yo(w), $.gain.setValueAtTime(0, z), $.gain.linearRampToValueAtTime(0.22, z + 0.012), $.gain.exponentialRampToValueAtTime(1e-3, z + R * 0.975), S.connect($), $.connect(p), S.start(z), S.stop(z + R * 0.985), A.push({ at: z, index: N }), C += R, M = (M + 1) % a.length;
        }
        for (; A.length && A[0].at <= f.currentTime + 0.01; ) {
          const w = A.shift();
          o?.(w.index);
        }
      }
    };
    return D(), this.loopTick = setInterval(D, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function ui(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const x = { position: d === null || f === null ? null : Oe(d, f), beat: o, duration: p };
    return o += p, x;
  });
  return { label: s, events: c, beats: o };
}
function xo(s, ...a) {
  let o = 0;
  const c = a.flatMap((d) => {
    const f = d.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += d.beats, f;
  });
  return { label: s, events: c, beats: o };
}
const Ud = ui("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), Gd = ui("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), av = ui("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), Wd = ui("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), Qd = ui("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), lv = ui("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), Yd = ui("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), Jd = ui("B · Palaa takaisin", [
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
    whole: xo("Melodia · A + B + C", Ud, Gd, av),
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
    whole: xo("Ukko Nooa · A + B", Wd, Qd),
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
    whole: xo("Siirtymämelodia · A + B", Yd, Jd),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function uv(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const Xd = ["e", "B", "G", "D", "A", "E"];
function Ea({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = ov[s], [f, p] = L.useState(a === "full" ? "whole" : "a"), [m, x] = L.useState(d.tempo), [R, v] = L.useState(a !== "memory"), [C, M] = L.useState(!1), [A, D] = L.useState(null), [w, N] = L.useState(""), z = L.useRef(new rs()), S = L.useRef(0);
  function $() {
    S.current++, z.current.stop(), M(!1), D(null);
  }
  L.useEffect(() => {
    c && (c.current = $);
    const B = () => {
      document.hidden && $();
    };
    return document.addEventListener("visibilitychange", B), () => {
      document.removeEventListener("visibilitychange", B), S.current++, z.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const V = [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    ...a === "listen" ? [] : [{ id: "b", name: "Osa B", clip: d.fragments[1] }],
    ...a === "full" ? [{ id: "whole", name: "Pidempi melodia", clip: d.whole }] : [],
    ...a === "full" && d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], J = V.find((B) => B.id === f) ?? V[0], U = J.clip, _ = uv(U), I = A === null ? null : _[A]?.beat ?? null, ne = I === null ? null : U.events.find((B) => B.beat === I)?.position ?? null, re = U.beats / 4;
  async function ge() {
    if (C) {
      $();
      return;
    }
    o?.();
    const B = ++S.current;
    z.current.stop(), M(!0), D(null), N("");
    try {
      await z.current.playTimed(_, m, (se) => {
        B === S.current && D(se);
      });
    } catch (se) {
      B === S.current && N(Aa(se));
    } finally {
      B === S.current && (M(!1), D(null));
    }
  }
  function Ce(B) {
    $(), N(""), p(B);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: [
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: a === "full" ? "ENNEN IMPROVISOINTIA · PIENI KAPPALE" : a === "memory" ? "MELODIA MUISTISTA" : "TUNNISTETTAVA MELODIAPÄTKÄ" }),
    /* @__PURE__ */ r.jsx("h4", { children: d.title }),
    /* @__PURE__ */ r.jsxs("p", { className: "melody-subtitle", children: [
      d.qualifier,
      " · 4/4 · ",
      re.toString().replace(".", ","),
      " tahtia valitussa osassa"
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "melody-instruction", children: a === "listen" ? "Kuuntele ensin lyhyt katkelma. Samat sävelet löytyvät opeteltavasta asteikosta." : a === "fingering" ? "Kokeile osia A ja B erikseen. Seuraa rytmiä ja löydä oikeat kielet sekä nauhat." : a === "memory" ? "Kuuntele katkelma, piilota tabulatuuri ja yritä soittaa se muistista. Voit pyytää merkinnät takaisin." : "Kuuntele osat erikseen ja yhdistä ne pidemmäksi melodiaksi. Soita se sitten itse. Tämän jälkeen siirryt improvisoimaan ja muuttelemaan tuttuja säveliä." }),
    a === "full" && d.bonus && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
      "Viimeinen valinta on ",
      /* @__PURE__ */ r.jsx("strong", { children: "erillinen oma harjoitus" }),
      ", ei osa ",
      d.title,
      " -sävelmää."
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: V.map((B) => /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        "aria-pressed": J.id === B.id,
        onClick: () => Ce(B.id),
        children: B.name
      },
      B.id
    )) }),
    /* @__PURE__ */ r.jsxs("div", { className: "melody-controls", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": C, onClick: () => {
        ge();
      }, children: C ? "■ Pysäytä melodia" : "▶ Kuuntele valittu melodia kerran" }),
      /* @__PURE__ */ r.jsxs("label", { children: [
        "Tempo",
        /* @__PURE__ */ r.jsx("select", { value: m, onChange: (B) => {
          $(), x(Number(B.target.value));
        }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((B, se) => B - se).filter((B, se, K) => K.indexOf(B) === se).map((B) => /* @__PURE__ */ r.jsxs("option", { value: B, children: [
          B,
          " BPM"
        ] }, B)) })
      ] }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": R, onClick: () => v((B) => !B), children: R ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
    ] }),
    w && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: w }),
    /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: C && A !== null ? `Nyt soi ${be(_[A].midi)} · ${Xd[ne.string]}-kieli, ${ne.fret}. nauha` : C ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
    R && /* @__PURE__ */ r.jsxs("div", { className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
      /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${J.name}, kitaratabulatuuri`, children: [
        /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
          U.events.map((B, se) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: B.beat % 4 === 0 ? "bar-start" : "", children: [
            /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: B.beat % 4 === 0 ? `T${Math.floor(B.beat / 4) + 1}` : "·" }),
            /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: B.duration === 1 ? "♩" : `${B.duration} iskua` })
          ] }, se))
        ] }) }),
        /* @__PURE__ */ r.jsx("tbody", { children: Xd.map((B, se) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: B }),
          U.events.map((K, ue) => {
            const ae = K.position?.string === se, W = ae && I === K.beat;
            return /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `${K.beat % 4 === 0 ? "bar-start " : ""}${W ? "melody-playing " : ""}${ae && Ke(K.position.midi) === d.tonic ? "melody-root" : ""}`,
                "aria-label": ae ? `${B}-kieli, ${K.position.fret}. nauha, ${be(K.position.midi)}` : void 0,
                children: ae ? K.position.fret : "—"
              },
              ue
            );
          })
        ] }, se)) })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: d.note }),
    d.source && /* @__PURE__ */ r.jsx("p", { className: "melody-source", children: /* @__PURE__ */ r.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
  ] });
}
const Oo = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [1, 2]), Ff = [...new Map(Oo.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Oe(o, c);
  return [We(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ca = [5, 4, 3, 2, 1, 0].flatMap((s) => Ff.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), $o = [
  ...Ca,
  ...Ca.slice(1, -1).reverse()
], cv = [...$o, Ca[0]], Zd = new Set(
  Oo[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Oe(a, o);
    return We(c);
  })).filter((s) => Oo[1].positions[0].strings.flatMap((a, o) => a.map((c) => We(Oe(o, c)))).includes(s))
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
], If = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Df = "musiikin-kartta:skaalapolku:bridge-tempo:v1", So = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], qd = (s) => Ke(s) === 9;
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
  const [o, c] = L.useState(ef), [d, f] = L.useState(ef), [p, m] = L.useState(!1), [x, R] = L.useState("roots"), [v, C] = L.useState(fv), [M, A] = L.useState(null), [D, w] = L.useState(null), [N, z] = L.useState(""), S = L.useRef(new rs()), $ = L.useRef(0), V = L.useRef(null), J = D === null ? null : $o[D];
  function U() {
    V.current?.(), $.current++, S.current.stop(), A(null), w(null);
  }
  L.useEffect(() => {
    const B = () => {
      document.hidden && ($.current++, S.current.stop(), A(null), w(null));
    };
    return document.addEventListener("visibilitychange", B), () => {
      document.removeEventListener("visibilitychange", B), $.current++, S.current.stop();
    };
  }, []);
  async function _(B) {
    V.current?.();
    const se = ++$.current;
    S.current.stop(), w(null), z(""), A(B);
    try {
      B === "transition" ? await S.current.play(dv.map((K) => K.midi)) : B === "once" ? await S.current.play(cv.map((K) => K.midi)) : await S.current.loop($o.map((K) => K.midi), (K) => {
        se === $.current && w(K);
      }, v);
    } catch (K) {
      se === $.current && z(Aa(K));
    } finally {
      se === $.current && (A(null), w(null));
    }
  }
  function I(B) {
    const se = Math.max(40, Math.min(140, B));
    C(se), S.current.setLoopTempo(se);
    try {
      localStorage.setItem(Df, String(se));
    } catch {
    }
  }
  function ne(B) {
    B > o || (U(), f(B), m(!1), R("roots"));
  }
  function re() {
    U();
    const B = Math.min(4, d + 1);
    if (f(B), m(!1), R("roots"), B > o) {
      c(B);
      try {
        localStorage.setItem(If, String(B));
      } catch {
      }
    }
  }
  const ge = (B, se) => d < 2 || d === 2 && p && Zd.has(se) || d === 3 && (x === "all" || x === "roots" && qd(B)), Ce = Ff.filter((B) => ge(B.midi, We(B))).map((B) => ({
    ...B,
    label: d < 2 || d === 2 && p || d === 3 && x === "all" ? be(B.midi) : "A",
    kind: d < 2 && J?.string === B.string && J?.fret === B.fret ? "playing" : qd(B.midi) ? "answer" : Zd.has(We(B)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      U(), s();
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
        U(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        U(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => ne(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: So.map((B, se) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: se === d ? "journey-step current" : "journey-step",
        "aria-current": se === d ? "step" : void 0,
        disabled: se > o,
        onClick: () => ne(se),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: se > o ? "🔒" : se < o ? "✓" : se + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: B.title })
        ]
      },
      B.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: So[d].title }),
        /* @__PURE__ */ r.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: So[d].detail }),
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
              Ca.length,
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
              "aria-pressed": M === "whole",
              onClick: () => M === "whole" ? U() : void _("whole"),
              children: M === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "once",
              onClick: () => M === "once" ? U() : void _("once"),
              children: M === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "transition",
              onClick: () => M === "transition" ? U() : void _("transition"),
              children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((B) => !B), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ne(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((B) => /* @__PURE__ */ r.jsxs("label", { children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: B.value,
                  checked: x === B.value,
                  onChange: () => R(B.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: B.name })
            ] }, B.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M === "once" ? U() : void _("once"), children: M === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M === "transition" ? U() : void _("transition"), children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: M === "whole" ? J && d < 2 ? `Nyt soi ${be(J.midi, !1, !0)} · ${an[J.string]}-kieli, nauha ${J.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : M === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : M === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        N && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: N }),
        /* @__PURE__ */ r.jsx(
          _i,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: Ce,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? x === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : x === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        d >= 1 && d <= 3 && /* @__PURE__ */ r.jsx(
          Ea,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : d === 2 ? "memory" : "full",
            onBeforePlay: U,
            stopHandleRef: V
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
const Xr = "musiikin-kartta:skaalapolku:v1", ga = "musiikin-kartta:skaalapolku:position-2:v1", wo = "musiikin-kartta:skaalapolku:position-3:v1", ja = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ta = "musiikin-kartta:skaalapolku:active-position:v1", zf = "musiikin-kartta:skaalapolku:tempo:v1", rr = 75, Fo = 40, Io = 140;
function mv() {
  try {
    const s = localStorage.getItem(zf);
    if (s === null) return rr;
    const a = Number(s);
    return Number.isInteger(a) && a >= Fo && a <= Io && a % 5 === 0 ? a : rr;
  } catch {
    return rr;
  }
}
const No = [
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
function Eo() {
  try {
    const s = localStorage.getItem(Ta);
    return s === "3" && Nn(ja) === 4 ? 3 : Nn(Xr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function pv() {
  try {
    return Nn(ga) === 4 && localStorage.getItem(Ta) === "bridge";
  } catch {
    return !1;
  }
}
function vv({ onBack: s }) {
  const [a, o] = L.useState(Eo), [c, d] = L.useState(pv), [f, p] = L.useState(() => ({
    1: Nn(Xr),
    2: Nn(ga),
    3: Nn(wo)
  })), [m, x] = L.useState(() => Nn(Eo() === 3 ? wo : Eo() === 2 ? ga : Xr)), R = f[a], [v, C] = L.useState(!1), [M, A] = L.useState("roots"), [D, w] = L.useState(mv), [N, z] = L.useState(null), [S, $] = L.useState(null), [V, J] = L.useState(""), U = L.useRef(new rs()), _ = L.useRef(0), I = L.useRef(null);
  function ne(G) {
    const H = Math.max(Fo, Math.min(Io, G));
    w(H), U.current.setLoopTempo(H);
    try {
      localStorage.setItem(zf, String(H));
    } catch {
    }
  }
  function re() {
    I.current?.(), _.current++, U.current.stop(), z(null), $(null);
  }
  L.useEffect(() => {
    const G = () => {
      document.hidden && (_.current++, U.current.stop(), z(null), $(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), _.current++, U.current.stop();
    };
  }, []);
  const ge = Fe.fingeringBoxes(9, Fe.SCALES.mp, "pentatonic", [a])[0].positions[0], Ce = ge.strings.flatMap((G, H) => G.map((q) => Oe(H, q))).sort((G, H) => G.midi - H.midi || H.string - G.string), B = [...Ce, ...Ce.slice(1, -1).reverse()], se = S === null ? null : B[S], K = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], ue = ge.start, ae = ge.end, W = (G) => Ke(G) === 9, ce = (G) => m < 2 ? !0 : m === 2 ? v && W(G) : M === "scale" || M === "roots" && W(G), ee = Ce.filter((G) => ce(G.midi)).map((G) => ({
    ...G,
    label: m < 2 || m === 3 && M === "scale" ? be(G.midi) : "A",
    kind: m < 2 && se?.string === G.string && se.fret === G.fret ? "playing" : W(G.midi) ? "answer" : "shape"
  }));
  async function g(G) {
    I.current?.();
    const H = ++_.current;
    U.current.stop(), $(null), J(""), z(G);
    try {
      G === "phrase" ? await U.current.play(K) : await U.current.loop(B.map((q) => q.midi), (q) => {
        H === _.current && $(q);
      }, m === 2 ? D : rr);
    } catch (q) {
      H === _.current && J(Aa(q));
    } finally {
      H === _.current && (z(null), $(null));
    }
  }
  function T() {
    re();
    const G = Math.min(4, m + 1);
    if (x(G), C(!1), A("roots"), G > R) {
      p((q) => ({ ...q, [a]: G }));
      const H = a === 1 ? Xr : a === 2 ? ga : wo;
      try {
        localStorage.setItem(H, String(G));
      } catch {
      }
    }
  }
  function le(G) {
    G > R || (re(), x(G), C(!1), A("roots"));
  }
  function xe(G) {
    if (!(G === 2 && f[1] < 4) && !(G === 3 && Nn(ja) < 4)) {
      re(), d(!1), o(G), x(f[G]), C(!1), A("roots"), J("");
      try {
        localStorage.setItem(Ta, String(G));
      } catch {
      }
    }
  }
  function Se() {
    if (!(f[2] < 4)) {
      re(), d(!0), C(!1), J("");
      try {
        localStorage.setItem(Ta, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx(hv, { onBack: s, onPosition: xe }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
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
      ue,
      "–",
      ae,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => xe(1), children: "Positio 1" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => xe(2),
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
          onClick: () => xe(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: No.map((G, H) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: H === m ? "journey-step current" : "journey-step",
        "aria-current": H === m ? "step" : void 0,
        disabled: H > R,
        onClick: () => le(H),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: H > R ? "🔒" : H < R ? "✓" : H + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: H === 4 ? `Positio ${a} harjoiteltu` : G.title })
        ]
      },
      G.title
    )) }),
    /* @__PURE__ */ r.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : No[m].title }),
        /* @__PURE__ */ r.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ r.jsx("p", { children: No[m].detail }),
      m < 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        m === 0 && /* @__PURE__ */ r.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          a === 1 ? "Harjoittele myös vanhan perinnemelodian alkua seuraavassa osiossa." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ r.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ r.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ r.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ r.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ r.jsxs("p", { children: [
          a === 1 ? "Harjoittele ensin alla pidempi melodia osista A, B ja C. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ r.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: D <= Fo,
              onClick: () => ne(D - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            D,
            " BPM"
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: D >= Io,
              onClick: () => ne(D + 5),
              children: "+ 5"
            }
          ),
          D !== rr && /* @__PURE__ */ r.jsx(
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
              "aria-pressed": N === "loop",
              onClick: () => N === "loop" ? re() : void g("loop"),
              children: N === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => N === "phrase" ? re() : void g("phrase"), children: N === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: N === "loop" ? se && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${be(se.midi, !1, !0)} · ${an[se.string]}-kieli, nauha ${se.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        V && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: V }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": v, onClick: () => C((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => le(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              tf.map((G) => /* @__PURE__ */ r.jsxs("label", { children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: M === G.value,
                    onChange: () => A(G.value)
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            a !== 1 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
              g("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ r.jsx(_i, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: ae, fixed: "box" }, marks: ee, disabled: !0, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? tf.find((G) => G.value === M).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(_i, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: ae, fixed: "box" }, marks: ee, disabled: !0, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && m >= 0 && m <= 3 && /* @__PURE__ */ r.jsx(
          Ea,
          {
            pieceId: "wayfaring",
            stage: m === 0 ? "listen" : m === 1 ? "fingering" : m === 2 ? "memory" : "full",
            onBeforePlay: re,
            stopHandleRef: I
          },
          `wayfaring:${m}`
        ),
        m === 3 && /* @__PURE__ */ r.jsx(Rf, {}, a),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: T, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ r.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => le(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => xe(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Se, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => xe(2), children: "Kertaa positio 2" })
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
  const [a, o] = L.useState(rf), [c, d] = L.useState(() => ({
    ionian: xa("ionian"),
    aeolian: xa("aeolian")
  })), [f, p] = L.useState(() => xa(rf())), [m, x] = L.useState(null), [R, v] = L.useState(null), [C, M] = L.useState(!1), [A, D] = L.useState("roots"), [w, N] = L.useState(""), [z, S] = L.useState(null), [$, V] = L.useState(null), J = L.useRef(new rs()), U = L.useRef(0), _ = L.useRef(null), I = nr[a], ne = gv(a), re = m === "scale" && R !== null ? ne[R] : null;
  function ge() {
    _.current?.(), U.current++, J.current.stop(), x(null), v(null);
  }
  L.useEffect(() => {
    const T = () => {
      document.hidden && (U.current++, J.current.stop(), x(null), v(null));
    };
    return document.addEventListener("visibilitychange", T), () => {
      document.removeEventListener("visibilitychange", T), U.current++, J.current.stop();
    };
  }, []);
  async function Ce(T, le, xe = !1) {
    _.current?.();
    const Se = ++U.current;
    J.current.stop(), v(null), N(""), x(T);
    try {
      const G = xe ? await J.current.loop(le, void 0, 75) : await J.current.play(le, (H) => {
        Se === U.current && T === "scale" && v(H);
      });
      return Se === U.current && G;
    } catch (G) {
      return Se === U.current && N(Aa(G)), !1;
    } finally {
      Se === U.current && (x(null), v(null));
    }
  }
  function B(T) {
    T > c[a] || (ge(), p(T), S(null), V(null), M(!1), D("roots"), N(""));
  }
  function se() {
    ge();
    const T = Math.min(5, f + 1);
    if (p(T), S(null), V(null), M(!1), D("roots"), T > c[a]) {
      d((le) => ({ ...le, [a]: T }));
      try {
        localStorage.setItem(Vf(a), String(T));
      } catch {
      }
    }
  }
  function K(T) {
    if (!(T === "aeolian" && c.ionian < 5)) {
      ge(), o(T), p(c[T]), S(null), V(null), M(!1), D("roots"), N("");
      try {
        localStorage.setItem(Bf, T);
      } catch {
      }
    }
  }
  async function ue() {
    ge(), V(null), S(null);
    const T = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Ce("comparison", nr[T].phrase) && S(T);
  }
  const ae = (T) => Ke(T) === I.tonic, W = I.positions.filter((T) => f < 2 ? !0 : f === 2 ? C && ae(T.midi) : f === 4 ? A === "all" || A === "roots" && ae(T.midi) : !1).map((T) => ({
    ...T,
    label: f === 2 || f === 4 && A === "roots" ? I.tonicName : be(T.midi),
    kind: re?.string === T.string && re.fret === T.fret ? "playing" : ae(T.midi) ? "answer" : "shape"
  })), ce = [...new Set(I.positions.map((T) => T.string))], ee = Math.min(...I.positions.map((T) => T.fret)), g = Math.max(...I.positions.map((T) => T.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ge(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      kv.indexOf(a) + 1,
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
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => K("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => K("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ r.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      nf.map((T, le) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === le ? "journey-step current" : "journey-step",
          "aria-current": f === le ? "step" : void 0,
          disabled: le > c[a],
          onClick: () => B(le),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: le > c[a] ? "🔒" : le < c[a] ? "✓" : le + 1 }),
            /* @__PURE__ */ r.jsx("span", { children: T })
          ]
        },
        T
      )),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === 5 ? "journey-step current" : "journey-step",
          disabled: c[a] < 5,
          "aria-current": f === 5 ? "step" : void 0,
          onClick: () => B(5),
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
                ue();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          z !== null && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Ce("comparison", nr[z].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        z !== null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: $ !== null || m !== null,
                onClick: () => V("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: $ !== null || m !== null,
                onClick: () => V("aeolian"),
                children: "A"
              }
            )
          ] }),
          $ !== null && /* @__PURE__ */ r.jsxs("p", { role: "status", children: [
            $ === z ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            nr[z].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      f === 4 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        a === "ionian" && /* @__PURE__ */ r.jsx(
          Ea,
          {
            pieceId: "nooa",
            stage: "full",
            onBeforePlay: ge,
            stopHandleRef: _
          },
          "nooa:full"
        ),
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
          ].map(([T, le]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: T,
                checked: A === T,
                onChange: () => D(T)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: le })
          ] }, T))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => M((T) => !T), children: C ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? ge() : void Ce("scale", ne.map((T) => T.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? ge() : void Ce("accompaniment", I.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f !== 3 && f !== 5 && /* @__PURE__ */ r.jsx(
        _i,
        {
          area: { strings: ce, min: ee, max: g, fixed: "box" },
          marks: W,
          disabled: !0,
          caption: I.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && f < 3 && /* @__PURE__ */ r.jsx(
        Ea,
        {
          pieceId: "nooa",
          stage: f === 0 ? "listen" : f === 1 ? "fingering" : "memory",
          onBeforePlay: ge,
          stopHandleRef: _
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
      w && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: w }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: se, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      f === 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          I.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ r.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => B(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => K("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ r.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function xv({ onBack: s }) {
  const [a, o] = L.useState(null);
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
  const [a, o] = L.useState(0), [c, d] = L.useState([]), [f, p] = L.useState(!1), [m, x] = L.useState(""), [R, v] = L.useState(0), [C, M] = L.useState(!1), A = a >= er.length, D = er[Math.min(a, er.length - 1)], w = ur(va.strings, va.min, va.max).filter((_) => Ke(_.midi) === D), N = w.filter((_) => !c.includes(We(_))), z = N.length === 0 && !A, S = !z && f ? N[0] : void 0;
  L.useEffect(() => {
    if (!C || !z) return;
    const _ = window.setTimeout(() => {
      o((I) => I + 1), d([]), p(!1), x("");
    }, Sv);
    return () => window.clearTimeout(_);
  }, [C, z]);
  const $ = [
    ...w.filter((_) => c.includes(We(_))).map((_) => ({ ..._, kind: "answer", label: be(_.midi) })),
    ...S ? [{ ...S, kind: "anchor", label: "?" }] : []
  ];
  function V(_) {
    if (A || z) return;
    const I = We(_);
    if (Ke(_.midi) !== D) {
      v((ge) => ge + 1), x(`Valitsit sävelen ${be(_.midi)}. Etsi ${be(D)}.`);
      return;
    }
    if (c.includes(I)) {
      x("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ne = [...c, I];
    d(ne), p(!1);
    const re = w.length - ne.length;
    x(re ? `Oikein! ${be(D)} löytyi ${an[_.string]}-kieleltä (${Ci(_.fret)}). Vielä ${re}.` : `Löysit kaikki ${w.length} ${be(D)}-säveltä tällä alueella.`);
  }
  function J() {
    z && (o((_) => _ + 1), d([]), p(!1), x(""));
  }
  function U() {
    o(0), d([]), p(!1), x(""), v(0);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Oppimispolut" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !A && /* @__PURE__ */ r.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "checkbox",
          checked: C,
          onChange: (_) => M(_.target.checked)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: A ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        R ? `Vääriä valintoja yhteensä ${R}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: U, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          "Etsi kaikki ",
          be(D),
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
        be(D),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        w.length
      ] }),
      /* @__PURE__ */ r.jsx(
        _i,
        {
          area: va,
          marks: $,
          onAnswer: V,
          disabled: z,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: z ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        !z && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((_) => !_),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        z && (C ? /* @__PURE__ */ r.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === er.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: J, children: a === er.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
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
}, Co = ["C", "G", "D", "Em"], sf = ["C", "G", "D", "Em", "Am", "E", "A"], Ev = { min: 0, max: 3, fixed: "" };
function af(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Cv({ onBack: s }) {
  const [a, o] = L.useState(4), [c, d] = L.useState(() => af(Co)), [f, p] = L.useState(0), [m, x] = L.useState(null), [R, v] = L.useState([]), [C, M] = L.useState(0), A = f >= c.length, D = Nv[c[Math.min(f, c.length - 1)]], w = a === 4 ? Co : sf, N = D.frets.flatMap((_, I) => _ === null ? [] : [I]), z = D.frets.flatMap((_, I) => _ === null ? [I] : []), S = { ...Ev, strings: N }, $ = D.frets.flatMap((_, I) => _ === null ? [] : [{
    ...Oe(I, _),
    kind: _ === 0 ? "anchor" : "shape",
    label: _ === 0 ? "○" : "●"
  }]);
  function V(_ = a) {
    o(_), d(af(_ === 4 ? Co : sf)), p(0), x(null), v([]), M(0);
  }
  function J(_) {
    m || A || R.includes(_) || (_ === D.name ? x(_) : (v((I) => [...I, _]), M((I) => I + 1)));
  }
  function U() {
    m && (p((_) => _ + 1), x(null), v([]));
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
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: A ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        C ? `Vääriä valintoja yhteensä ${C}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
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
        _i,
        {
          area: S,
          marks: $,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((_) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === _ ? "right" : R.includes(_) ? "wrong" : "",
          disabled: !!m || R.includes(_),
          "aria-pressed": m === _,
          onClick: () => J(_),
          children: _
        },
        _
      )) }),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: m ? "feedback good" : R.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${D.name}-sointu.` : R.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: U, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
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
], _v = [
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
  normal: _v
}, Mv = "normal", Do = "yksi-sointu-kaksi-askelta", Qo = {
  acoustic: Do + "-akustinen",
  normal: Do + "-normaali"
}, Hf = (s) => s === Do || Object.values(Qo).includes(s ?? "");
function Pv(s) {
  const a = Object.entries(Qo).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const Av = (s) => Qo[s], lf = (s) => {
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
  for (let C = 1; C < o.length && !(c < o[C].start); C++)
    d = C;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ns(d, p + 1, a); )
    p++;
  const m = ns(d, p, a), x = Yo(d, a) / 4;
  let R = 1;
  for (; R < 4 && c >= m + R * x; ) R++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: R,
    chord: v.second && R >= 3 ? v.second : v.first
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
  const c = cr[a], d = Uf(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = bv(a), x = m.findIndex((A) => A.sectionIndex === d.sectionIndex && A.barIndex === d.barIndex && A.part === p), v = [
    ...m.slice(x + 1).map((A) => ({ ...A, wrapped: !1 })),
    ...o ? m.slice(0, x + 1).map((A) => ({ ...A, wrapped: !0 })) : []
  ].find((A) => A.chord !== d.chord) ?? null;
  let C = null;
  const M = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!M || o)) {
    const A = M ? 0 : d.sectionIndex + 1, D = c[A], w = D.bars[0].first;
    C = {
      section: D,
      sectionIndex: A,
      firstChord: w,
      wrapped: M,
      continues: w === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: C };
}
function Lv(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, x) => m + o(x), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const x = Math.abs(c - 2 * p);
    (x < f || x === f && p >= c - p) && (d = m, f = x), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const zo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Gf = "musiikin-kartta:kappale-sointuvihjeet:v1", Sa = {
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
      for (const m of zo)
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
  const [d, f] = L.useState(Ov), [p, m] = L.useState(null), [x, R] = L.useState(!1), [v, C] = L.useState("full"), M = (K) => Iv(K, v), A = cr[s], D = Uf(a, s), { section: w, sectionIndex: N, barIndex: z, beat: S, chord: $ } = D, V = S >= 3 && w.bars[z].second ? "second" : "first", J = (K, ue, ae) => `${s}:${K}:${ue}:${ae}`, U = (K, ue) => J(w.id, K, ue), _ = U(z, V), I = ka($, d), ne = I && p === _, re = (K, ue, ae) => !ka(K, d) || p === U(ue, ae), ge = d.showChords && d.level === 0, Ce = zo.filter((K) => ka(K, d)).length, { nextSection: B } = Rv(a, s, o), se = !!B && ka(B.firstChord, d);
  return L.useEffect(() => {
    m(null);
  }, [_]), L.useEffect(() => {
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
            onChange: (K) => {
              f((ue) => ({ ...ue, showChords: K.target.checked })), m(null);
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
            checked: x,
            onChange: (K) => R(K.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([K, ue]) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: K,
              checked: v === K,
              onChange: () => C(K)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: ue })
        ] }, K))
      ] }),
      /* @__PURE__ */ r.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (K) => {
              const ue = Number(K.target.value);
              f((ae) => ({ ...ae, level: ue })), m(null);
            },
            children: Dv.map((K) => /* @__PURE__ */ r.jsx("option", { value: K.value, children: K.label }, K.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ce === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ce}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: zo.map((K) => /* @__PURE__ */ r.jsxs("label", { children: [
        K,
        /* @__PURE__ */ r.jsx(
          "select",
          {
            "aria-label": K + ": piilotusvaihe",
            value: d.fadeOrder[K],
            onChange: (ue) => {
              const ae = Number(ue.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [K]: ae } })), m(null);
            },
            children: zv.map((ue) => /* @__PURE__ */ r.jsx("option", { value: ue.value, children: ue.label }, ue.value))
          }
        )
      ] }, K)) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ r.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ r.jsx(
          "select",
          {
            id: "song-section-jump",
            value: w.id,
            onChange: (K) => {
              const ue = A.find((ae) => ae.id === K.target.value);
              ue && c(ue.start);
            },
            children: A.map((K) => /* @__PURE__ */ r.jsxs("option", { value: K.id, children: [
              lf(K.start),
              " · ",
              K.title
            ] }, K.id))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ r.jsxs("p", { className: "song-current-chord", children: [
          I && !ne ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ r.jsx("strong", { children: I && !ne ? "?" : M($) }),
          /* @__PURE__ */ r.jsxs("span", { children: [
            w.title,
            ", tahti ",
            z + 1,
            ", isku ",
            S,
            "/4"
          ] }),
          I && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ne ? null : _),
              children: ne ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        B && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: se ? "?" : M(B.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((K, ue) => {
      const ae = ue === z, W = ae && (S < 3 || !K.second), ce = ae && S >= 3 && !!K.second, ee = re(K.first, ue, "first"), g = K.second ? re(K.second, ue, "second") : !1, T = (ee ? M(K.first) : "sointu piilossa") + (K.second ? " " + (g ? M(K.second) : "sointu piilossa") : "") + (ge && K.passingBass ? " (basson kulku " + K.passingBass + ")" : "") + (ge && K.possibleChord ? " (" + M(K.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ae ? " active" : ""),
          "aria-pressed": ae,
          "aria-label": "Tahti " + (ue + 1) + ": " + T + ". Siirry kohtaan " + lf(ns(N, ue, s)),
          onClick: () => c(ns(N, ue, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ r.jsx("strong", { className: W && ee ? "now" : "", children: ee ? M(K.first) : "?" }),
              K.second && /* @__PURE__ */ r.jsx("strong", { className: ce && g ? "now" : "", children: g ? M(K.second) : "?" })
            ] }),
            ge && K.passingBass && /* @__PURE__ */ r.jsxs("small", { children: [
              "Basso: (",
              K.passingBass,
              "), isku 4"
            ] }),
            ge && K.possibleChord && /* @__PURE__ */ r.jsxs("small", { children: [
              "Mahdollinen (",
              M(K.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    x ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: Lv(A).map((K, ue) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: K.map((ae) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: ae.title }),
        ae.lyrics?.map((W, ce) => /* @__PURE__ */ r.jsx("p", { children: W }, ce))
      ] }, ae.id)) }, ue)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((K, ue) => /* @__PURE__ */ r.jsx("p", { children: K }, ue))
    ] }),
    ge && w.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const _a = 7, Bv = { name: "bluesasteikko", base: Fe.SCALES.mp.base, add: [[6, "♭5"]] }, To = [
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
  return Fe.scaleNotes(s).map(([a, o]) => Fe.noteName(_a, a, o));
}
const Wf = (s) => s === "pentatonic" ? 5 : 7;
function Hv(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= Wf(s.system)), d = Fe.fingeringBoxes(_a, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (_a + m) % 12), p = (m, x) => x >= 0 && x <= o && f.includes((Fe.OPEN_PITCHES[m] + x) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((x) => {
    const R = x.strings.map((C, M) => {
      if (!C.length) return C;
      const A = C[C.length - 1];
      return p(M, A + 1) ? [...C.slice(0, -1), A + 1] : C;
    }), v = R.flat();
    return { ...x, strings: R, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const cf = 17;
function Uv({ open: s }) {
  const [a, o] = L.useState("mp"), [c, d] = L.useState({ pentatonic: [], "3nps": [] }), [f, p] = L.useState(!1), [m, x] = L.useState(!1), R = L.useRef(null), v = To.find((N) => N.id === a) ?? To[0], C = c[v.system], M = Hv(v, C, cf), A = M.some((N) => N.positions.length > 0), D = Fe.renderBoard(_a, v.scale, cf, {
    automatic: !0,
    boxes: M,
    onlyBoxNotes: A && f,
    label: v.title + (C.length ? ", " + C.map((N) => "boksi " + N).join(", ") : "")
  });
  L.useEffect(() => {
    const N = R.current;
    !N || !s || M.length === 1 && Fe.revealPositions(N, ".box-highlight");
  }, [D, s]);
  function w(N, z) {
    d((S) => ({ ...S, [v.system]: z ? [...S[v.system], N].sort(($, V) => $ - V) : S[v.system].filter(($) => $ !== N) }));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ r.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ r.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ r.jsx("select", { value: a, onChange: (N) => o(N.target.value), children: To.map((N) => /* @__PURE__ */ r.jsx("option", { value: N.id, children: N.title }, N.id)) })
    ] }) }),
    /* @__PURE__ */ r.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ r.jsx("strong", { children: v.title }),
      /* @__PURE__ */ r.jsx("span", { children: Kv(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: R,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: D }
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
        N.preventDefault(), x((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ r.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Wf(v.system) }, (N, z) => z + 1).map((N) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": N, children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            value: N,
            checked: C.includes(N),
            onChange: (z) => w(N, z.target.checked)
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
            checked: A && f,
            disabled: !A,
            onChange: (N) => p(N.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: A ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Qf = null;
function Gv() {
  return Pv(new URLSearchParams(location.search).get("kappale")) ?? Qf ?? Mv;
}
function Wv(s) {
  Qf = s;
  const a = new URL(location.href);
  Hf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Av(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
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
  const a = L.useRef(null), o = L.useRef(null), c = L.useRef(null), d = L.useRef(0), f = L.useRef(new bf()), p = L.useRef(null), [m, x] = L.useState(Gv), R = Qv[m], [v, C] = L.useState(!1), [M, A] = L.useState(!0), [D, w] = L.useState(!0), [N, z] = L.useState(!1), [S, $] = L.useState(!1), [V, J] = L.useState(!1), [U, _] = L.useState(Ep), [I] = L.useState(() => Af() ? "element" : "webaudio"), ne = L.useRef(null), [re, ge] = L.useState(0), [Ce, B] = L.useState(0), [se, K] = L.useState("");
  function ue(E = !1, X) {
    const oe = a.current;
    if (oe)
      for (const de of [o.current, c.current])
        de && (!X || de === X) && f.current.align(oe, de, E);
  }
  function ae() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, M],
      ["vocals", c.current, D]
    ];
  }
  function W(E = U, X) {
    for (const [oe, de, he] of ae()) {
      if (!de) continue;
      const ve = Dd(oe, E, X?.[oe] ?? he);
      if (I === "webaudio" && ne.current?.routed(de))
        ne.current.setLevel(de, ve);
      else
        try {
          de.volume = Dd(oe, E);
        } catch {
        }
    }
  }
  function ce(E) {
    _(E), Cp(E), W(E);
  }
  function ee() {
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), C(!1);
  }
  function g(E) {
    if (E !== m) {
      p.current = null, ee();
      for (const X of [a.current, o.current, c.current])
        if (X)
          try {
            X.currentTime = 0;
          } catch {
          }
      ge(0), B(0), K(""), x(E), Wv(E);
    }
  }
  function T(E) {
    const X = a.current;
    if (!X || !Number.isFinite(E)) return;
    const oe = Math.max(0, Math.min(E, Number.isFinite(X.duration) ? X.duration : E));
    p.current = oe, ge(oe), ff(X, oe);
  }
  function le(E) {
    const X = p.current;
    if (X === null || E !== a.current || E.seeking) return;
    const oe = Number.isFinite(E.duration) ? Math.min(X, E.duration) : X;
    if (oe !== X && (p.current = oe, ge(oe)), Math.abs(E.currentTime - oe) < df) return;
    const de = E.seekable;
    for (let he = 0; he < de.length; he++)
      if (de.start(he) <= oe && oe <= de.end(he)) {
        ff(E, oe);
        return;
      }
  }
  function xe(E) {
    if (E !== a.current) return;
    const X = p.current;
    if (X === null)
      ge(E.currentTime);
    else if (E.readyState >= 1 && !E.seeking && Math.abs(E.currentTime - X) < df) {
      p.current = null, ue(!0);
      return;
    }
    E.paused || ue();
  }
  async function Se() {
    const E = a.current, X = o.current, oe = c.current;
    if (!E || !X || !oe) return;
    if (v) {
      ee();
      return;
    }
    K("");
    const de = p.current ?? E.currentTime;
    if (Number.isFinite(E.duration) && de >= E.duration - 0.05 && T(0), le(E), I === "webaudio" && (ne.current ??= new Fp(), ne.current.unlock()))
      for (const ve of [E, X, oe]) ne.current.route(ve);
    W(), X.muted = !M, oe.muted = !D, ue(!0);
    const he = ++d.current;
    try {
      M || X.pause(), D || oe.pause();
      const ve = [E.play(), ...M ? [X.play()] : [], ...D ? [oe.play()] : []];
      if (await Promise.all(ve), he !== d.current) return;
      ue(), C(!0);
    } catch {
      if (he !== d.current) return;
      ee(), K("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function G(E, X, oe) {
    if (!E) return;
    if (E.muted = !X, !X) {
      E.pause();
      return;
    }
    !a.current || !v || (ue(!0, E), E.play().catch(() => K(oe + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function H(E) {
    A(E), W(U, { guitar: E }), G(o.current, E, "Kitararaita");
  }
  function q(E) {
    w(E), W(U, { vocals: E }), G(c.current, E, "Lauluraita");
  }
  return L.useEffect(() => {
    const E = () => {
      document.hidden && ee();
    };
    return document.addEventListener("visibilitychange", E), () => {
      document.removeEventListener("visibilitychange", E), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), ne.current?.close();
    };
  }, []), L.useEffect(() => {
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
          onChange: (E) => g(E.target.value),
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
        }, children: v ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: Ce > 0 ? Ce : 1,
            step: 0.1,
            value: Math.min(re, Ce > 0 ? Ce : 1),
            disabled: Ce <= 0,
            onChange: (E) => T(Number(E.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          hf(re),
          " / ",
          hf(Ce)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: M,
              onChange: (E) => H(E.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: D,
              onChange: (E) => q(E.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: N,
              onChange: (E) => z(E.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": I, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            U > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            U > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: U,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": U + " %",
              onChange: (E) => ce(Number(E.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            U,
            " %"
          ] })
        ] })
      ] }),
      se && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: se }),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: a,
          src: R.backing,
          preload: "metadata",
          loop: N,
          onLoadedMetadata: (E) => {
            E.currentTarget === a.current && (B(E.currentTarget.duration), le(E.currentTarget));
          },
          onProgress: (E) => le(E.currentTarget),
          onCanPlay: (E) => le(E.currentTarget),
          onTimeUpdate: (E) => xe(E.currentTarget),
          onEnded: (E) => {
            E.currentTarget !== a.current || E.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), C(!1), ge(E.currentTarget.duration));
          },
          onPause: (E) => {
            E.currentTarget === a.current && C(!1);
          },
          onError: () => K(R.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: o,
          src: R.guitar,
          preload: "metadata",
          muted: !M,
          loop: N,
          onLoadedMetadata: () => {
            a.current?.paused && ue(!0);
          },
          onError: () => K(R.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: c,
          src: R.vocals,
          preload: "metadata",
          muted: !D,
          loop: N,
          onLoadedMetadata: () => {
            a.current?.paused && ue(!0);
          },
          onError: () => K(R.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-collapse", open: S, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (E) => {
        E.preventDefault(), $((X) => !X);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(Vv, { version: m, position: re, loop: N, onSeek: T })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: V, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (E) => {
        E.preventDefault(), J((X) => !X);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(Uv, { open: V })
    ] })
  ] });
}
const Vo = {
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
}, Bo = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function Jv(s, a, o, c) {
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
  const f = $f(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${be(p.midi, c.flats, !0)} · ${Yf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Vo[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(Jf, { frame: a, threshold: c.minRms })
  ] });
}
function Zv({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: x, calibrating: R, calibration: v, onTest: C, onStop: M, onCalibrate: A }) {
  const D = L.useId(), w = $f(s.phase, a), N = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", z = s.phase === "on", S = o && d - o.at < 1500 ? o : null, $ = S && (w === "pitch" || w === "untuned"), V = z && (a?.peak ?? 0) >= 0.98, J = s.phase === "error" ? [] : Jv(w, f, s.info, V), U = !f.device || m.some((I) => I.deviceId === f.device), _ = (I, ne) => p({ ...f, [I]: ne });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${D}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${D}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : Vo[w],
      w === "pitch" && S ? ` ${be(S.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Bo(s.info)}.` : s.phase === "error" ? s.error : Vo[s.phase] }),
    s.phase === "off" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ r.jsxs("dl", { className: "mic-readout", children: [
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
          /* @__PURE__ */ r.jsx(Jf, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            wa(Math.max(-60, or(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: S ? be(S.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: S ? `${wa(S.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: S ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          Yf(S.cents),
          " senttiä",
          /* @__PURE__ */ r.jsx("span", { className: `cents ${S.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, S.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: $ ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-clarity", children: S ? `${Math.round(S.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && c && d - c.timestamp < 4e3 && /* @__PURE__ */ r.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      be(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    J.length > 0 && z && /* @__PURE__ */ r.jsx("ul", { className: "mic-advice", children: J.map((I) => /* @__PURE__ */ r.jsx("li", { children: I }, I)) }),
    s.phase === "error" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
      N ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: M, children: "Lopeta testi" }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: x, onClick: C, children: "Testaa mikrofoni" }),
      N && z && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: R, onClick: A, children: R ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    x && s.purpose !== "test" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", disabled: x, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${D}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${D}-device`, value: f.device, onChange: (I) => _("device", I.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !U && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((I, ne) => /* @__PURE__ */ r.jsx("option", { value: I.deviceId, children: I.label || `Äänitulo ${ne + 1}` }, I.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${D}-rms`, children: [
              "Äänikynnys · ",
              wa(or(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${D}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (I) => _("minRms", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${D}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${D}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (I) => _("clarity", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${D}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${D}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (I) => _("stability", Number(I.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${D}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${D}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (I) => _("cents", Number(I.target.value)) })
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
const qv = (s) => s.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[s.scale]) : Ei[s.mode === "caged" ? "maj" : s.chord].tones, mf = (s, a) => qv(s).find(([o]) => o === a)?.[1], Xf = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", ek = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function tk(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function nk(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Zr(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : Xf(s) ? `Oikein! ${a.degree}. aste on ${Zr(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${be(a.reference, s.flats, !0)} → ${a.name} on ${qr[a.interval]} ${ek(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${be(d.midi, s.flats)} on ${kf[d.string]}: ${Ci(d.fret)}.` : `Oikein! Soitit sävelen ${be(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function ik(s, a, o, c, d) {
  if (o === "note") return `Ei ${be(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${mf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ke(d.midi) === Ke(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${an[d.string]}-kieli. Etsi sävel ${Uo[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${be(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (Xf(s)) {
    const p = Ke(d.midi - s.root), m = mf(s, p), x = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Zr(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${be(d.midi, s.flats)}, joka ei kuulu ${x}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${be(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function rk(s, a, o) {
  const c = be(o, s.flats, !0);
  return Ke(o) === Ke(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Zf(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => an[p] ? `${an[p]}-kieli, ${Ci(m)}` : null;
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
      if (!d(1, 3) || !Ei[p]) return null;
      const m = Ei[p].tones.find(([x]) => x === c(3))?.[1];
      return m ? `${yf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Fe.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const x = Fe.scaleNotes(p).find(([R]) => R === c(3))?.[1];
        return x ? `${m}: ${x}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ei.maj.tones.find(([x]) => x === c(3))?.[1];
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
const Ko = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", sk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function ak(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${ir(s.mode)}${s.hints ? ` · ${Ma[s.hints].title}` : ""} · ${a} · keskimäärin ${Ko(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function lk({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = L.useState(""), p = L.useRef(null), { recent: m, sessions: x, stats: R } = s.data, v = Ti(a), C = jf(a), M = [...new Set(m.map((S) => S.mode))].map((S) => {
    const $ = m.filter((V) => V.mode === S);
    return { mode: S, ...Ao($), last: Math.max(...$.map((V) => V.at)) };
  }).sort((S, $) => $.last - S.last), A = pf(R).filter((S) => !S.guided && S.mode === a.mode && S.input === v && S.check === C && S.stat.attempts >= 3).map((S) => ({ ...S, score: Go(S.stat), text: Zf(S.item, a.flats) })).filter((S) => S.text && S.score < 0.8).sort((S, $) => S.score - $.score).slice(0, 5), D = pf(R).reduce((S, $) => S + $.stat.attempts, 0);
  function w() {
    const S = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), $ = URL.createObjectURL(S), V = document.createElement("a");
    V.href = $, V.download = "musiikin-kartta-harjoittelu.json", V.click(), setTimeout(() => URL.revokeObjectURL($), 1e3);
  }
  async function N(S) {
    if (S)
      try {
        const $ = await S.text();
        if (D && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        s.restore($), f("Varmuuskopio palautettu."), c();
      } catch {
        f("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (s.clearProgress(), f("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ r.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    D === 0 ? /* @__PURE__ */ r.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        D,
        " vastattua kysymystä · ",
        x.length,
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
        /* @__PURE__ */ r.jsx("tbody", { children: M.map((S) => /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: ir(S.mode) }),
          /* @__PURE__ */ r.jsx("td", { children: S.count }),
          /* @__PURE__ */ r.jsx("td", { children: S.solo ? `${S.soloFirst}/${S.solo} · ${Math.round(S.soloFirst / S.solo * 100)} %` : "–" }),
          /* @__PURE__ */ r.jsx("td", { children: S.guided }),
          /* @__PURE__ */ r.jsx("td", { children: Ko(S.ms / S.count) })
        ] }, S.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi" }),
    A.length ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        ir(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ r.jsx("ul", { children: A.map((S) => /* @__PURE__ */ r.jsxs("li", { children: [
        S.text,
        " · viime aikoina ",
        Math.round(es(S.stat) * 100),
        " % heti oikein · ",
        Ko(ts(S.stat))
      ] }, S.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: D ? `Harjoituksessa ${ir(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
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
      x.length ? /* @__PURE__ */ r.jsx("ul", { children: x.slice(-10).reverse().map((S) => /* @__PURE__ */ r.jsx("li", { children: ak(S) }, S.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ r.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ r.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (S) => {
          N(S.target.files?.[0]);
        } }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !D, onClick: z, children: "Poista harjoitustulokset" })
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
  const [s] = L.useState(ok), [a, o] = L.useState(() => tp(location.search, s.data.settings)), [, c] = L.useReducer((F) => F + 1, 0), d = L.useRef(null), f = L.useRef(new rv()), p = L.useRef(new rs()), m = L.useRef(0), x = L.useRef(), R = L.useRef(), v = L.useRef(null), C = L.useRef(0), M = L.useRef(null), A = L.useRef(a);
  A.current = a;
  const [D, w] = L.useState({ phase: "off", purpose: "none" }), N = L.useRef(D), z = (F) => {
    N.current = F, w(F);
  }, [S, $] = L.useState(null), [V, J] = L.useState(null), [U, _] = L.useState(null), [I, ne] = L.useState(0), [re, ge] = L.useState([]), [Ce, B] = L.useState(!1), [se, K] = L.useState(!1), [ue, ae] = L.useState(""), [W, ce] = L.useState("info"), [ee, g] = L.useState(""), [T, le] = L.useState(0), [xe, Se] = L.useState([]), [G, H] = L.useState([]), [q, E] = L.useState(null), [X, oe] = L.useState(!1), [de, he] = L.useState(""), [ve, Pe] = L.useState(""), [_e, Ie] = L.useState(() => {
    const F = new URLSearchParams(location.search);
    return F.has("tila") || F.has("vanha") ? "legacy" : Hf(F.get("kappale")) ? "songs" : xp(F.get("polku"));
  });
  function Qe() {
    Ie(null);
    const F = new URL(location.href);
    F.searchParams.has("polku") && (F.searchParams.delete("polku"), history.replaceState(history.state, "", F.pathname + F.search + F.hash));
  }
  const Ye = () => {
    Bp().then(ge).catch(() => {
    });
  };
  function Ue() {
    clearTimeout(R.current), v.current = null, oe(!1);
  }
  function Xe() {
    $(null), J(null), _(null);
  }
  function ut() {
    f.current.stop(), Ue(), z({ phase: "off", purpose: "none" }), Xe();
  }
  async function Je(F) {
    if (f.current.active && N.current.phase === "on")
      return Ue(), z({ ...N.current, purpose: F }), f.current.rearm(), !0;
    z({ phase: "requesting", purpose: F }), Xe();
    try {
      const ie = await f.current.start(A.current.device, {
        ...vf(A.current),
        onFrame: (De) => Qt.current.frame(De),
        onStableNote: (De) => Qt.current.stable(De)
      }, () => Qt.current.lost());
      return ie ? (z({ phase: "on", purpose: F, info: ie }), Ye(), !0) : !1;
    } catch (ie) {
      return z({ phase: "error", purpose: "none", error: iv(ie) }), !1;
    }
  }
  function Ve(F) {
    v.current?.push(F.rms);
    const ie = performance.now();
    ie - C.current < 66 || (C.current = ie, $(F), ne(ie), F.midi !== void 0 && F.frequency !== void 0 && J({ midi: F.midi, frequency: F.frequency, cents: F.cents ?? 0, clarity: F.clarity ?? 0, tuned: F.status === "pitch", at: ie }));
  }
  function it(F) {
    N.current.purpose === "test" ? _(F) : N.current.purpose === "round" && He(F.midi, "mic", void 0, F.heldMs);
  }
  function Vt() {
    const F = N.current.purpose === "round";
    Ue(), Xe(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const ie = d.current;
    F && ie && ["active", "feedback", "paused"].includes(ie.phase) && (Mt(), K(!1), ie.pause(), g("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Qt = L.useRef({ frame: Ve, stable: it, lost: Vt });
  Qt.current = { frame: Ve, stable: it, lost: Vt };
  function Nt(F) {
    const ie = Na(F), De = ie.device !== A.current.device;
    A.current = ie, o(ie), s.settings(ie), g(""), f.current.active && (De && N.current.purpose === "test" ? (ut(), Je("test")) : f.current.setOptions(vf(ie)));
  }
  function ln(F) {
    Pe(""), d.current = null, Ie(F);
  }
  function Yt() {
    he(""), Je("test");
  }
  function Jt() {
    N.current.phase !== "on" || N.current.purpose !== "test" || (Ue(), v.current = [], oe(!0), he("Mitataan taustakohinaa kolme sekuntia. Älä soita."), R.current = setTimeout(() => {
      const F = v.current ?? [];
      if (Ue(), F.length < 10) {
        he("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: ie, noise: De, loud: Lt } = sv(F);
      Nt({ ...A.current, minRms: ie }), he(`Taustakohina on ${Math.round(or(De))} dB ja äänikynnys nyt ${Math.round(or(ie))} dB. ${Lt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function Mt() {
    m.current++, clearTimeout(x.current), p.current.stop();
  }
  function we(F, ie) {
    if (!F.results.length) return;
    const De = Ao(F.results);
    s.session({
      id: F.id,
      mode: F.settings.mode,
      count: De.count,
      first: De.first,
      ms: De.ms,
      solo: De.solo,
      soloFirst: De.soloFirst,
      hints: F.settings.hints,
      at: Date.now(),
      complete: ie
    });
  }
  async function Bt(F) {
    if (!F.question?.sound.length || F.phase !== "active") return;
    Mt();
    const ie = m.current;
    F.pause(), f.current.pause(), K(!0), ce("info"), ae("Kuuntele…"), c();
    try {
      await p.current.play(F.question.sound);
    } catch {
      ie === m.current && g("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    ie !== m.current || d.current !== F || (F.resume(), f.current.resume(), K(!1), ae(""), c());
  }
  async function Te(F) {
    Se([]), H([]), E(null), g(""), le(F.hintLevel), f.current.rearm(), ce("info"), ae(""), c(), F.question?.sound.length && await Bt(F);
  }
  async function Ae() {
    const F = A.current, ie = Mo(F);
    if (ie) {
      g(ie);
      return;
    }
    Mt();
    const De = m.current;
    if (g(""), he(""), Pe(""), pa(F)) {
      B(!0);
      const dt = await Je("round");
      if (De !== m.current) return;
      if (B(!1), !dt) {
        g("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else N.current.phase !== "off" && ut();
    const Lt = new jp(F, () => s.data.stats, (dt) => s.record(dt));
    try {
      Lt.start();
    } catch (dt) {
      N.current.purpose === "round" && ut(), g(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Lt, requestAnimationFrame(() => M.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Te(Lt);
  }
  function Re() {
    Mt(), B(!1), ut();
  }
  function He(F, ie, De, Lt = 0) {
    const dt = d.current, Mn = dt?.question;
    if (!dt || !Mn || dt.phase !== "active") return;
    const mr = dt.answer(F, ie, De, Lt);
    if (mr !== "ignored") {
      if (mr === "candidate")
        E(F), ce("bad"), ae(rk(dt.settings, Mn, F));
      else if (mr === "wrong")
        De ? Se((Vn) => [...Vn, De]) : H((Vn) => [...Vn, F]), ce("bad"), ae(ik(dt.settings, Mn, ie, F, De));
      else if (E(null), ce("good"), ae(nk(dt.settings, Mn, ie, F, De)), we(dt, !1), dt.settings.advance) {
        const Vn = m.current;
        x.current = setTimeout(() => {
          Vn === m.current && st();
        }, ie === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function st() {
    const F = d.current;
    if (!(!F || F.phase !== "feedback")) {
      Mt();
      try {
        F.next();
      } catch (ie) {
        Rt(!1), g(ie instanceof Error ? ie.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (F.phase === "done") {
        Rt(!0);
        return;
      }
      await Te(F);
    }
  }
  function Rt(F = !1) {
    Mt(), K(!1), B(!1), (N.current.purpose === "round" || N.current.phase === "requesting") && ut();
    const ie = d.current;
    ie && (ie.stop(), we(ie, F)), E(null), le(0), Se([]), H([]), g(""), Pe(F ? "complete" : "stopped"), ce("info"), ae(""), c();
  }
  function vt() {
    const F = d.current;
    if (!F || !["active", "feedback", "paused"].includes(F.phase)) return;
    Mt(), K(!1), F.pause();
    const ie = N.current.purpose === "round";
    ie && ut(), ce("info"), ae(`Harjoitus on tauolla.${ie ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function Xt() {
    const F = d.current;
    if (!F || F.phase !== "paused" || se) return;
    Mt();
    const ie = m.current;
    if (g(""), pa(F.settings)) {
      B(!0);
      const De = await Je("round");
      if (ie !== m.current) return;
      if (B(!1), !De) {
        g("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    F.resume(), ce("info"), ae(""), c(), F.phase === "active" && (f.current.rearm(), F.question?.sound.length && await Bt(F));
  }
  function En(F) {
    const ie = d.current;
    !ie || ie.phase !== "active" || (ie.useHint(F), le(F), c());
  }
  const vn = L.useRef({ hidden: () => {
  }, restored: () => {
  } });
  vn.current = {
    hidden: () => {
      const F = d.current;
      F && ["active", "feedback"].includes(F.phase) || se ? vt() : N.current.phase !== "off" && N.current.phase !== "error" && (Mt(), B(!1), ut());
    },
    restored: () => {
      B(!1), K(!1), z({ phase: "off", purpose: "none" }), Xe(), c();
    }
  }, L.useEffect(() => {
    Ye();
    const F = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", F);
    const ie = () => {
      m.current++, clearTimeout(x.current), clearTimeout(R.current), f.current.stop(), p.current.stop(), nv(), d.current?.pause();
    }, De = () => {
      document.hidden && vn.current.hidden();
    }, Lt = (dt) => {
      dt.persisted && vn.current.restored();
    };
    return document.addEventListener("visibilitychange", De), window.addEventListener("pagehide", ie), window.addEventListener("pageshow", Lt), () => {
      ie(), navigator.mediaDevices?.removeEventListener?.("devicechange", F), document.removeEventListener("visibilitychange", De), window.removeEventListener("pagehide", ie), window.removeEventListener("pageshow", Lt);
    };
  }, []);
  const kn = L.useRef(null), ss = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${se}`;
  L.useEffect(() => {
    const F = d.current, ie = M.current, De = document.activeElement;
    !F || !ie || !(De === document.body || ie.contains(De)) || (F.phase === "feedback" ? kn.current?.focus({ preventScroll: !0 }) : F.phase === "active" && !se && (De === document.body || De === kn.current) && ie.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [ss]);
  const $e = d.current, et = !!$e && ["active", "paused", "feedback"].includes($e.phase), Ze = et ? $e.settings : a, ct = et ? $e.question : void 0, Kt = !!ct && !!$e?.answered, Zt = et && $e.phase === "paused" && !se && !Kt, Pi = et && $e.phase === "active" && !se, Cn = et ? null : Mo(a), Dn = et || Ce, ci = Mi(Ze), dr = fp(Ze), di = ct && !Kt ? T : 0, fr = ct ? gp(Ze, ct, Kt ? 2 : di) : { marks: [], text: "" }, as = [...new Map([...fr.marks, ...Kt ? [] : xe.map((F) => ({ ...F, label: be(F.midi, Ze.flats), kind: "wrong" }))].map((F) => [We(F), F])).values()], Tn = et && pa(Ze), ls = !!ct && !Zt && (ct.choices === "position" || as.length > 0), jt = $e ? Ao($e.results) : null, ba = !$e || Ze.hints !== "fade" ? "" : $e.index <= 3 ? " · vastaus näkyy" : $e.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", hr = $e && !et ? $e.results.filter((F) => F.errors > 0 || F.hint) : [], [os, us] = dk(Ze), _n = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
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
  return !et && _e === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    zn,
    /* @__PURE__ */ r.jsx(wp, { onSelect: ln })
  ] }) : !et && _e === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    zn,
    /* @__PURE__ */ r.jsx(xv, { onBack: Qe })
  ] }) : !et && _e === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    zn,
    /* @__PURE__ */ r.jsx(wv, { onBack: Qe })
  ] }) : !et && _e === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    zn,
    /* @__PURE__ */ r.jsx(Cv, { onBack: Qe })
  ] }) : !et && _e === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    zn,
    /* @__PURE__ */ r.jsx(Yv, { onBack: Qe })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _n,
    zn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: os, children: [
      "Lue tämän harjoituksen teoria: ",
      us,
      " →"
    ] }) }),
    _e !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && Rt(), Qe();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: _e === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: _e === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: ir(Ze.mode) }),
      " · ",
      $d(Ze)
    ] }) : _e === "legacy" ? /* @__PURE__ */ r.jsx(Fd, { s: a, change: Nt, locked: Dn, problem: Cn }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Fd, { s: a, change: Nt, locked: Dn, problem: Cn })
    ] }),
    !et && (_e === "legacy" || pa(a)) && /* @__PURE__ */ r.jsx(
      Zv,
      {
        mic: D,
        frame: S,
        heard: V,
        accepted: U,
        now: I,
        s: a,
        change: Nt,
        devices: re,
        locked: Ce,
        calibrating: X,
        calibration: de,
        onTest: Yt,
        onStop: ut,
        onCalibrate: Jt
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: M, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: ir(Ze.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${$e.index}${$e.total ? " / " + $e.total : " · vapaa harjoittelu"} · ${Ma[Ze.hints].title}${ba}${$e.phase === "paused" && !se ? " · tauolla" : ""}` : ve === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
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
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(hr.map((F) => Zf(F.item, a.flats)).filter(Boolean))].slice(0, 6).map((F) => /* @__PURE__ */ r.jsx("li", { children: F }, F)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: $d(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: Ce ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!Cn, onClick: () => {
          Ae();
        }, children: $e?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !$e && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ct && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: Zt ? "Harjoitus on tauolla." : ct.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: Zt ? "Kysymys palaa näkyviin, kun jatkat." : se ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : tk(Ze, ct) }),
        $e.hintLevel > 0 && !Kt && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Ze.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Tn && /* @__PURE__ */ r.jsx(Xv, { mic: D, frame: S, heard: V, s: Ze, now: I }),
        ct.choices === "note" && !Zt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Ze.accidentals ? Array.from({ length: 12 }, (F, ie) => ie) : ck).map((F) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(F) ? "wrong" : Kt && F === ct.midi % 12 ? "right" : "", disabled: !Pi || G.includes(F), onClick: () => He(F, "note"), children: be(F, Ze.flats) }, F)) }),
        ct.choices === "degree" && !Zt && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Ze.mode === "scale" ? Fe.scaleNotes(Fe.SCALES[Ze.scale]) : Ei[Ze.chord].tones).map(([F, ie]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(F) ? "wrong" : Kt && F === ct.interval ? "right" : "", disabled: !Pi || G.includes(F), onClick: () => He(F, "degree"), children: ie }, F)) }),
        ls && /* @__PURE__ */ r.jsx(
          _i,
          {
            area: dr,
            marks: as,
            disabled: !Pi || ct.choices !== "position" || Ze.input === "mic",
            onAnswer: (F) => He(F.midi, "board", F),
            caption: ci.fixed === "shape" ? `${Ze.shape}-muodon alue` : ci.fixed === "box" ? `Boksin ${Ze.box} alue` : "Otelauta"
          }
        ),
        !Kt && !Zt && di > 0 && fr.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: fr.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        q !== null && $e.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            $e.confirmWrong(), E(null), ae("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        ee && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: ee }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          $e.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: kn, onClick: () => {
            st();
          }, children: $e.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          $e.phase === "active" && !Kt && !se && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            di === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(Math.max(1, $e.hintLevel)), children: $e.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            di === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => En(2), children: "Näytä vastaus" }),
            di > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => le(0), children: "Piilota vihje" })
          ] }),
          ct.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !Pi, onClick: () => {
            Bt($e);
          }, children: "Kuuntele uudelleen" }),
          $e.phase === "paused" && !se ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: Ce, onClick: () => {
            Xt();
          }, children: Ce ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: vt, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => Rt(), children: "Lopeta harjoitus" })
        ] }),
        $e.phase === "feedback" && Ze.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && ee && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: ee })
    ] }),
    !et && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Fe.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: np(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(lk, { store: s, s: a, locked: Dn, changed: () => {
        const F = Na(s.data.settings);
        A.current = F, o(F), c();
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
