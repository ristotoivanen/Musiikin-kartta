function zm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ho = { exports: {} }, Wr = {}, mo = { exports: {} }, Oe = {};
var jd;
function Bm() {
  if (jd) return Oe;
  jd = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), j = Symbol.iterator;
  function C(x) {
    return x === null || typeof x != "object" ? null : (x = j && x[j] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var R = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, w = {};
  function S(x, y, ie) {
    this.props = x, this.context = y, this.refs = w, this.updater = ie || R;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(x, y) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, y, "setState");
  }, S.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function V() {
  }
  V.prototype = S.prototype;
  function T(x, y, ie) {
    this.props = x, this.context = y, this.refs = w, this.updater = ie || R;
  }
  var U = T.prototype = new V();
  U.constructor = T, P(U, S.prototype), U.isPureReactComponent = !0;
  var B = Array.isArray, z = Object.prototype.hasOwnProperty, I = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(x, y, ie) {
    var fe, Se = {}, G = null, K = null;
    if (y != null) for (fe in y.ref !== void 0 && (K = y.ref), y.key !== void 0 && (G = "" + y.key), y) z.call(y, fe) && !O.hasOwnProperty(fe) && (Se[fe] = y[fe]);
    var te = arguments.length - 2;
    if (te === 1) Se.children = ie;
    else if (1 < te) {
      for (var X = Array(te), ve = 0; ve < te; ve++) X[ve] = arguments[ve + 2];
      Se.children = X;
    }
    if (x && x.defaultProps) for (fe in te = x.defaultProps, te) Se[fe] === void 0 && (Se[fe] = te[fe]);
    return { $$typeof: s, type: x, key: G, ref: K, props: Se, _owner: I.current };
  }
  function re(x, y) {
    return { $$typeof: s, type: x.type, key: y, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function ee(x) {
    return typeof x == "object" && x !== null && x.$$typeof === s;
  }
  function xe(x) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ie) {
      return y[ie];
    });
  }
  var Ee = /\/+/g;
  function J(x, y) {
    return typeof x == "object" && x !== null && x.key != null ? xe("" + x.key) : y.toString(36);
  }
  function ce(x, y, ie, fe, Se) {
    var G = typeof x;
    (G === "undefined" || G === "boolean") && (x = null);
    var K = !1;
    if (x === null) K = !0;
    else switch (G) {
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
    if (K) return K = x, Se = Se(K), x = fe === "" ? "." + J(K, 0) : fe, B(Se) ? (ie = "", x != null && (ie = x.replace(Ee, "$&/") + "/"), ce(Se, y, ie, "", function(ve) {
      return ve;
    })) : Se != null && (ee(Se) && (Se = re(Se, ie + (!Se.key || K && K.key === Se.key ? "" : ("" + Se.key).replace(Ee, "$&/") + "/") + x)), y.push(Se)), 1;
    if (K = 0, fe = fe === "" ? "." : fe + ":", B(x)) for (var te = 0; te < x.length; te++) {
      G = x[te];
      var X = fe + J(G, te);
      K += ce(G, y, ie, X, Se);
    }
    else if (X = C(x), typeof X == "function") for (x = X.call(x), te = 0; !(G = x.next()).done; ) G = G.value, X = fe + J(G, te++), K += ce(G, y, ie, X, Se);
    else if (G === "object") throw y = String(x), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function H(x, y, ie) {
    if (x == null) return x;
    var fe = [], Se = 0;
    return ce(x, fe, "", "", function(G) {
      return y.call(ie, G, Se++);
    }), fe;
  }
  function ue(x) {
    if (x._status === -1) {
      var y = x._result;
      y = y(), y.then(function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ie);
      }, function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ie);
      }), x._status === -1 && (x._status = 0, x._result = y);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var le = { current: null }, W = { transition: null }, oe = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: W, ReactCurrentOwner: I };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Oe.Children = { map: H, forEach: function(x, y, ie) {
    H(x, function() {
      y.apply(this, arguments);
    }, ie);
  }, count: function(x) {
    var y = 0;
    return H(x, function() {
      y++;
    }), y;
  }, toArray: function(x) {
    return H(x, function(y) {
      return y;
    }) || [];
  }, only: function(x) {
    if (!ee(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, Oe.Component = S, Oe.Fragment = o, Oe.Profiler = d, Oe.PureComponent = T, Oe.StrictMode = c, Oe.Suspense = E, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, Oe.act = q, Oe.cloneElement = function(x, y, ie) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var fe = P({}, x.props), Se = x.key, G = x.ref, K = x._owner;
    if (y != null) {
      if (y.ref !== void 0 && (G = y.ref, K = I.current), y.key !== void 0 && (Se = "" + y.key), x.type && x.type.defaultProps) var te = x.type.defaultProps;
      for (X in y) z.call(y, X) && !O.hasOwnProperty(X) && (fe[X] = y[X] === void 0 && te !== void 0 ? te[X] : y[X]);
    }
    var X = arguments.length - 2;
    if (X === 1) fe.children = ie;
    else if (1 < X) {
      te = Array(X);
      for (var ve = 0; ve < X; ve++) te[ve] = arguments[ve + 2];
      fe.children = te;
    }
    return { $$typeof: s, type: x.type, key: Se, ref: G, props: fe, _owner: K };
  }, Oe.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: f, _context: x }, x.Consumer = x;
  }, Oe.createElement = F, Oe.createFactory = function(x) {
    var y = F.bind(null, x);
    return y.type = x, y;
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, Oe.isValidElement = ee, Oe.lazy = function(x) {
    return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: ue };
  }, Oe.memo = function(x, y) {
    return { $$typeof: b, type: x, compare: y === void 0 ? null : y };
  }, Oe.startTransition = function(x) {
    var y = W.transition;
    W.transition = {};
    try {
      x();
    } finally {
      W.transition = y;
    }
  }, Oe.unstable_act = q, Oe.useCallback = function(x, y) {
    return le.current.useCallback(x, y);
  }, Oe.useContext = function(x) {
    return le.current.useContext(x);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(x) {
    return le.current.useDeferredValue(x);
  }, Oe.useEffect = function(x, y) {
    return le.current.useEffect(x, y);
  }, Oe.useId = function() {
    return le.current.useId();
  }, Oe.useImperativeHandle = function(x, y, ie) {
    return le.current.useImperativeHandle(x, y, ie);
  }, Oe.useInsertionEffect = function(x, y) {
    return le.current.useInsertionEffect(x, y);
  }, Oe.useLayoutEffect = function(x, y) {
    return le.current.useLayoutEffect(x, y);
  }, Oe.useMemo = function(x, y) {
    return le.current.useMemo(x, y);
  }, Oe.useReducer = function(x, y, ie) {
    return le.current.useReducer(x, y, ie);
  }, Oe.useRef = function(x) {
    return le.current.useRef(x);
  }, Oe.useState = function(x) {
    return le.current.useState(x);
  }, Oe.useSyncExternalStore = function(x, y, ie) {
    return le.current.useSyncExternalStore(x, y, ie);
  }, Oe.useTransition = function() {
    return le.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var xd;
function Uo() {
  return xd || (xd = 1, mo.exports = Bm()), mo.exports;
}
var Sd;
function Vm() {
  if (Sd) return Wr;
  Sd = 1;
  var s = Uo(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, E, b) {
    var v, j = {}, C = null, R = null;
    b !== void 0 && (C = "" + b), E.key !== void 0 && (C = "" + E.key), E.ref !== void 0 && (R = E.ref);
    for (v in E) c.call(E, v) && !f.hasOwnProperty(v) && (j[v] = E[v]);
    if (m && m.defaultProps) for (v in E = m.defaultProps, E) j[v] === void 0 && (j[v] = E[v]);
    return { $$typeof: a, type: m, key: C, ref: R, props: j, _owner: d.current };
  }
  return Wr.Fragment = o, Wr.jsx = p, Wr.jsxs = p, Wr;
}
var wd;
function Km() {
  return wd || (wd = 1, ho.exports = Vm()), ho.exports;
}
var r = Km(), M = Uo(), pa = {}, po = { exports: {} }, Ut = {}, vo = { exports: {} }, ko = {};
var Nd;
function Um() {
  return Nd || (Nd = 1, (function(s) {
    function a(W, oe) {
      var q = W.length;
      W.push(oe);
      e: for (; 0 < q; ) {
        var x = q - 1 >>> 1, y = W[x];
        if (0 < d(y, oe)) W[x] = oe, W[q] = y, q = x;
        else break e;
      }
    }
    function o(W) {
      return W.length === 0 ? null : W[0];
    }
    function c(W) {
      if (W.length === 0) return null;
      var oe = W[0], q = W.pop();
      if (q !== oe) {
        W[0] = q;
        e: for (var x = 0, y = W.length, ie = y >>> 1; x < ie; ) {
          var fe = 2 * (x + 1) - 1, Se = W[fe], G = fe + 1, K = W[G];
          if (0 > d(Se, q)) G < y && 0 > d(K, Se) ? (W[x] = K, W[G] = q, x = G) : (W[x] = Se, W[fe] = q, x = fe);
          else if (G < y && 0 > d(K, q)) W[x] = K, W[G] = q, x = G;
          else break e;
        }
      }
      return oe;
    }
    function d(W, oe) {
      var q = W.sortIndex - oe.sortIndex;
      return q !== 0 ? q : W.id - oe.id;
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
    var E = [], b = [], v = 1, j = null, C = 3, R = !1, P = !1, w = !1, S = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(W) {
      for (var oe = o(b); oe !== null; ) {
        if (oe.callback === null) c(b);
        else if (oe.startTime <= W) c(b), oe.sortIndex = oe.expirationTime, a(E, oe);
        else break;
        oe = o(b);
      }
    }
    function B(W) {
      if (w = !1, U(W), !P) if (o(E) !== null) P = !0, ue(z);
      else {
        var oe = o(b);
        oe !== null && le(B, oe.startTime - W);
      }
    }
    function z(W, oe) {
      P = !1, w && (w = !1, V(F), F = -1), R = !0;
      var q = C;
      try {
        for (U(oe), j = o(E); j !== null && (!(j.expirationTime > oe) || W && !xe()); ) {
          var x = j.callback;
          if (typeof x == "function") {
            j.callback = null, C = j.priorityLevel;
            var y = x(j.expirationTime <= oe);
            oe = s.unstable_now(), typeof y == "function" ? j.callback = y : j === o(E) && c(E), U(oe);
          } else c(E);
          j = o(E);
        }
        if (j !== null) var ie = !0;
        else {
          var fe = o(b);
          fe !== null && le(B, fe.startTime - oe), ie = !1;
        }
        return ie;
      } finally {
        j = null, C = q, R = !1;
      }
    }
    var I = !1, O = null, F = -1, re = 5, ee = -1;
    function xe() {
      return !(s.unstable_now() - ee < re);
    }
    function Ee() {
      if (O !== null) {
        var W = s.unstable_now();
        ee = W;
        var oe = !0;
        try {
          oe = O(!0, W);
        } finally {
          oe ? J() : (I = !1, O = null);
        }
      } else I = !1;
    }
    var J;
    if (typeof T == "function") J = function() {
      T(Ee);
    };
    else if (typeof MessageChannel < "u") {
      var ce = new MessageChannel(), H = ce.port2;
      ce.port1.onmessage = Ee, J = function() {
        H.postMessage(null);
      };
    } else J = function() {
      S(Ee, 0);
    };
    function ue(W) {
      O = W, I || (I = !0, J());
    }
    function le(W, oe) {
      F = S(function() {
        W(s.unstable_now());
      }, oe);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, s.unstable_continueExecution = function() {
      P || R || (P = !0, ue(z));
    }, s.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < W ? Math.floor(1e3 / W) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(E);
    }, s.unstable_next = function(W) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var oe = 3;
          break;
        default:
          oe = C;
      }
      var q = C;
      C = oe;
      try {
        return W();
      } finally {
        C = q;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(W, oe) {
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
      var q = C;
      C = W;
      try {
        return oe();
      } finally {
        C = q;
      }
    }, s.unstable_scheduleCallback = function(W, oe, q) {
      var x = s.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? x + q : x) : q = x, W) {
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
      return y = q + y, W = { id: v++, callback: oe, priorityLevel: W, startTime: q, expirationTime: y, sortIndex: -1 }, q > x ? (W.sortIndex = q, a(b, W), o(E) === null && W === o(b) && (w ? (V(F), F = -1) : w = !0, le(B, q - x))) : (W.sortIndex = y, a(E, W), P || R || (P = !0, ue(z))), W;
    }, s.unstable_shouldYield = xe, s.unstable_wrapCallback = function(W) {
      var oe = C;
      return function() {
        var q = C;
        C = oe;
        try {
          return W.apply(this, arguments);
        } finally {
          C = q;
        }
      };
    };
  })(ko)), ko;
}
var Ed;
function Hm() {
  return Ed || (Ed = 1, vo.exports = Um()), vo.exports;
}
var Cd;
function Gm() {
  if (Cd) return Ut;
  Cd = 1;
  var s = Uo(), a = Hm();
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
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), E = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, j = {};
  function C(e) {
    return E.call(j, e) ? !0 : E.call(v, e) ? !1 : b.test(e) ? j[e] = !0 : (v[e] = !0, !1);
  }
  function R(e, t, n, i) {
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
    if (t === null || typeof t > "u" || R(e, t, n, i)) return !0;
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
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    S[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    S[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    S[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    S[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    S[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    S[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    S[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    S[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    S[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    S[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(V, T);
    S[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(V, T);
    S[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    S[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), S.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    S[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, n, i) {
    var l = S.hasOwnProperty(t) ? S[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P(t, n, l, i) && (n = null), i || l === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var B = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, z = /* @__PURE__ */ Symbol.for("react.element"), I = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), re = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.provider"), xe = /* @__PURE__ */ Symbol.for("react.context"), Ee = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), ce = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), le = /* @__PURE__ */ Symbol.for("react.offscreen"), W = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, x;
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
  var ie = !1;
  function fe(e, t) {
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
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Se(e) {
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
        return e = fe(e.type, !1), e;
      case 11:
        return e = fe(e.type.render, !1), e;
      case 1:
        return e = fe(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case I:
        return "Portal";
      case re:
        return "Profiler";
      case F:
        return "StrictMode";
      case J:
        return "Suspense";
      case ce:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case xe:
        return (e.displayName || "Context") + ".Consumer";
      case ee:
        return (e._context.displayName || "Context") + ".Provider";
      case Ee:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
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
        return G(t);
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
  function X(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ve(e) {
    var t = X(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
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
  function D(e) {
    e._valueTracker || (e._valueTracker = ve(e));
  }
  function ne(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = X(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
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
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ne(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function we(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function Le(e, t) {
    we(e, t);
    var n = te(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? He(e, t.type, n) : t.hasOwnProperty("defaultValue") && He(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Je(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function He(e, t, n) {
    (t !== "number" || ae(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var qe = Array.isArray;
  function rt(e, t, n, i) {
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
  function kt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Qe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (qe(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Ie(e, t) {
    var n = te(t.value), i = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function Xe(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function mt(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? mt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
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
  var Pt = {
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
  Object.keys(Pt).forEach(function(e) {
    yn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Pt[t] = Pt[e];
    });
  });
  function Ce(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pt.hasOwnProperty(e) && Pt[e] ? ("" + t).trim() : t + "px";
  }
  function ln(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = Ce(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var _e = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function be(e, t) {
    if (t) {
      if (_e[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
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
  var on = null, xt = null, At = null;
  function Cn(e) {
    if (e = Ar(e)) {
      if (typeof on != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = bs(t), on(e.stateNode, e.type, t));
    }
  }
  function un(e) {
    xt ? At ? At.push(e) : At = [e] : xt = e;
  }
  function Tn() {
    if (xt) {
      var e = xt, t = At;
      if (At = xt = null, Cn(e), t) for (e = 0; e < t.length; e++) Cn(t[e]);
    }
  }
  function ss(e, t) {
    return e(t);
  }
  function cr() {
  }
  var ci = !1;
  function _i(e, t, n) {
    if (ci) return e(t, n);
    ci = !0;
    try {
      return ss(e, t, n);
    } finally {
      ci = !1, (xt !== null || At !== null) && (cr(), Tn());
    }
  }
  function di(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = bs(n);
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
  var $e = !1;
  if (m) try {
    var Ye = {};
    Object.defineProperty(Ye, "passive", { get: function() {
      $e = !0;
    } }), window.addEventListener("test", Ye, Ye), window.removeEventListener("test", Ye, Ye);
  } catch {
    $e = !1;
  }
  function et(e, t, n, i, l, u, h, k, g) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, $);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var dt = !1, It = null, cn = !1, In = null, dr = { onError: function(e) {
    dt = !0, It = e;
  } };
  function fr(e, t, n, i, l, u, h, k, g) {
    dt = !1, It = null, et.apply(dr, arguments);
  }
  function as(e, t, n, i, l, u, h, k, g) {
    if (fr.apply(this, arguments), dt) {
      if (dt) {
        var $ = It;
        dt = !1, It = null;
      } else throw Error(o(198));
      cn || (cn = !0, In = $);
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
  function bi(e) {
    if (Mn(e) !== e) throw Error(o(188));
  }
  function ls(e) {
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
          if (u === n) return bi(l), e;
          if (u === i) return bi(l), t;
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
  function os(e) {
    return e = ls(e), e !== null ? us(e) : null;
  }
  function us(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = us(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var St = a.unstable_scheduleCallback, cs = a.unstable_cancelCallback, ds = a.unstable_shouldYield, Aa = a.unstable_requestPaint, at = a.unstable_now, zn = a.unstable_getCurrentPriorityLevel, gn = a.unstable_ImmediatePriority, A = a.unstable_UserBlockingPriority, me = a.unstable_NormalPriority, ze = a.unstable_LowPriority, Gt = a.unstable_IdlePriority, lt = null, Lt = null;
  function hr(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
      Lt.onCommitFiberRoot(lt, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : rh, nh = Math.log, ih = Math.LN2;
  function rh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (nh(e) / ih | 0) | 0;
  }
  var fs = 64, hs = 4194304;
  function mr(e) {
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
  function ms(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, u = e.pingedLanes, h = n & 268435455;
    if (h !== 0) {
      var k = h & ~l;
      k !== 0 ? i = mr(k) : (u &= h, u !== 0 && (i = mr(u)));
    } else h = n & ~l, h !== 0 ? i = mr(h) : u !== 0 && (i = mr(u));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - wt(t), l = 1 << n, i |= e[n], t &= ~l;
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
      var h = 31 - wt(u), k = 1 << h, g = l[h];
      g === -1 ? ((k & n) === 0 || (k & i) !== 0) && (l[h] = sh(k, t)) : g <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function La(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Xo() {
    var e = fs;
    return fs <<= 1, (fs & 4194240) === 0 && (fs = 64), e;
  }
  function Ra(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function lh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - wt(n), u = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Oa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - wt(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var We = 0;
  function Zo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var qo, $a, eu, tu, nu, Fa = !1, ps = [], Bn = null, Vn = null, Kn = null, vr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Un = [], oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function iu(e, t) {
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
        vr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kr.delete(t.pointerId);
    }
  }
  function yr(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Ar(t), t !== null && $a(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function uh(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = yr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Vn = yr(Vn, e, t, n, i, l), !0;
      case "mouseover":
        return Kn = yr(Kn, e, t, n, i, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return vr.set(u, yr(vr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, kr.set(u, yr(kr.get(u) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function ru(e) {
    var t = fi(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Dn(n), t !== null) {
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
  function vs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Ge = i, n.target.dispatchEvent(i), Ge = null;
      } else return t = Ar(n), t !== null && $a(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function su(e, t, n) {
    vs(e) && n.delete(t);
  }
  function ch() {
    Fa = !1, Bn !== null && vs(Bn) && (Bn = null), Vn !== null && vs(Vn) && (Vn = null), Kn !== null && vs(Kn) && (Kn = null), vr.forEach(su), kr.forEach(su);
  }
  function gr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fa || (Fa = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, ch)));
  }
  function jr(e) {
    function t(l) {
      return gr(l, e);
    }
    if (0 < ps.length) {
      gr(ps[0], e);
      for (var n = 1; n < ps.length; n++) {
        var i = ps[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Bn !== null && gr(Bn, e), Vn !== null && gr(Vn, e), Kn !== null && gr(Kn, e), vr.forEach(t), kr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) ru(n), n.blockedOn === null && Un.shift();
  }
  var Pi = B.ReactCurrentBatchConfig, ks = !0;
  function dh(e, t, n, i) {
    var l = We, u = Pi.transition;
    Pi.transition = null;
    try {
      We = 1, Ia(e, t, n, i);
    } finally {
      We = l, Pi.transition = u;
    }
  }
  function fh(e, t, n, i) {
    var l = We, u = Pi.transition;
    Pi.transition = null;
    try {
      We = 4, Ia(e, t, n, i);
    } finally {
      We = l, Pi.transition = u;
    }
  }
  function Ia(e, t, n, i) {
    if (ks) {
      var l = Da(e, t, n, i);
      if (l === null) nl(e, t, i, ys, n), iu(e, i);
      else if (uh(l, e, t, n, i)) i.stopPropagation();
      else if (iu(e, i), t & 4 && -1 < oh.indexOf(e)) {
        for (; l !== null; ) {
          var u = Ar(l);
          if (u !== null && qo(u), u = Da(e, t, n, i), u === null && nl(e, t, i, ys, n), u === l) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else nl(e, t, i, null, n);
    }
  }
  var ys = null;
  function Da(e, t, n, i) {
    if (ys = null, e = st(i), e = fi(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Dn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ys = e, null;
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
        switch (zn()) {
          case gn:
            return 1;
          case A:
            return 4;
          case me:
          case ze:
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
  var Hn = null, za = null, gs = null;
  function lu() {
    if (gs) return gs;
    var e, t = za, n = t.length, i, l = "value" in Hn ? Hn.value : Hn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === l[u - i]; i++) ;
    return gs = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function js(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xs() {
    return !0;
  }
  function ou() {
    return !1;
  }
  function Wt(e) {
    function t(n, i, l, u, h) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? xs : ou, this.isPropagationStopped = ou, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xs);
    }, persist: function() {
    }, isPersistent: xs }), t;
  }
  var Ai = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ba = Wt(Ai), xr = q({}, Ai, { view: 0, detail: 0 }), hh = Wt(xr), Va, Ka, Sr, Ss = q({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Va = e.screenX - Sr.screenX, Ka = e.screenY - Sr.screenY) : Ka = Va = 0, Sr = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ka;
  } }), uu = Wt(Ss), mh = q({}, Ss, { dataTransfer: 0 }), ph = Wt(mh), vh = q({}, xr, { relatedTarget: 0 }), Ua = Wt(vh), kh = q({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yh = Wt(kh), gh = q({}, Ai, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), jh = Wt(gh), xh = q({}, Ai, { data: 0 }), cu = Wt(xh), Sh = {
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
  function Ha() {
    return Eh;
  }
  var Ch = q({}, xr, { key: function(e) {
    if (e.key) {
      var t = Sh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ha, charCode: function(e) {
    return e.type === "keypress" ? js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Th = Wt(Ch), Mh = q({}, Ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), du = Wt(Mh), _h = q({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ha }), bh = Wt(_h), Ph = q({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ah = Wt(Ph), Lh = q({}, Ss, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rh = Wt(Lh), Oh = [9, 13, 27, 32], Ga = m && "CompositionEvent" in window, wr = null;
  m && "documentMode" in document && (wr = document.documentMode);
  var $h = m && "TextEvent" in window && !wr, fu = m && (!Ga || wr && 8 < wr && 11 >= wr), hu = " ", mu = !1;
  function pu(e, t) {
    switch (e) {
      case "keyup":
        return Oh.indexOf(t.keyCode) !== -1;
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
  function Fh(e, t) {
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
  function Ih(e, t) {
    if (Li) return e === "compositionend" || !Ga && pu(e, t) ? (e = lu(), gs = za = Hn = null, Li = !1, e) : null;
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
  var Dh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dh[e.type] : t === "textarea";
  }
  function yu(e, t, n, i) {
    un(i), t = Ts(t, "onChange"), 0 < t.length && (n = new Ba("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Nr = null, Er = null;
  function zh(e) {
    $u(e, 0);
  }
  function ws(e) {
    var t = Ii(e);
    if (ne(t)) return e;
  }
  function Bh(e, t) {
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
    Nr && (Nr.detachEvent("onpropertychange", Su), Er = Nr = null);
  }
  function Su(e) {
    if (e.propertyName === "value" && ws(Er)) {
      var t = [];
      yu(t, Er, e, st(e)), _i(zh, t);
    }
  }
  function Vh(e, t, n) {
    e === "focusin" ? (xu(), Nr = t, Er = n, Nr.attachEvent("onpropertychange", Su)) : e === "focusout" && xu();
  }
  function Kh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ws(Er);
  }
  function Uh(e, t) {
    if (e === "click") return ws(t);
  }
  function Hh(e, t) {
    if (e === "input" || e === "change") return ws(t);
  }
  function Gh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dn = typeof Object.is == "function" ? Object.is : Gh;
  function Cr(e, t) {
    if (dn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!E.call(t, l) || !dn(e[l], t[l])) return !1;
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
  function Wh(e) {
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
  var Qh = m && "documentMode" in document && 11 >= document.documentMode, Ri = null, Ja = null, Tr = null, Xa = !1;
  function Tu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xa || Ri == null || Ri !== ae(i) || (i = Ri, "selectionStart" in i && Ya(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Tr && Cr(Tr, i) || (Tr = i, i = Ts(Ja, "onSelect"), 0 < i.length && (t = new Ba("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Ri)));
  }
  function Ns(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Oi = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, Za = {}, Mu = {};
  m && (Mu = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function Es(e) {
    if (Za[e]) return Za[e];
    if (!Oi[e]) return e;
    var t = Oi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mu) return Za[e] = t[n];
    return e;
  }
  var _u = Es("animationend"), bu = Es("animationiteration"), Pu = Es("animationstart"), Au = Es("transitionend"), Lu = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gn(e, t) {
    Lu.set(e, t), f(t, [e]);
  }
  for (var qa = 0; qa < Ru.length; qa++) {
    var el = Ru[qa], Yh = el.toLowerCase(), Jh = el[0].toUpperCase() + el.slice(1);
    Gn(Yh, "on" + Jh);
  }
  Gn(_u, "onAnimationEnd"), Gn(bu, "onAnimationIteration"), Gn(Pu, "onAnimationStart"), Gn("dblclick", "onDoubleClick"), Gn("focusin", "onFocus"), Gn("focusout", "onBlur"), Gn(Au, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
  function Ou(e, t, n) {
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
          var k = i[h], g = k.instance, $ = k.currentTarget;
          if (k = k.listener, g !== u && l.isPropagationStopped()) break e;
          Ou(l, k, $), u = g;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], g = k.instance, $ = k.currentTarget, k = k.listener, g !== u && l.isPropagationStopped()) break e;
          Ou(l, k, $), u = g;
        }
      }
    }
    if (cn) throw e = In, cn = !1, In = null, e;
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
  var Cs = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[Cs]) {
      e[Cs] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Xh.has(n) || tl(n, !1, e), tl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cs] || (t[Cs] = !0, tl("selectionchange", !1, t));
    }
  }
  function Fu(e, t, n, i) {
    switch (au(t)) {
      case 1:
        var l = dh;
        break;
      case 4:
        l = fh;
        break;
      default:
        l = Ia;
    }
    n = l.bind(null, t, n, e), l = void 0, !$e || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
          var g = h.tag;
          if ((g === 3 || g === 4) && (g = h.stateNode.containerInfo, g === l || g.nodeType === 8 && g.parentNode === l)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = fi(k), h === null) return;
          if (g = h.tag, g === 5 || g === 6) {
            i = u = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    _i(function() {
      var $ = u, Y = st(n), Z = [];
      e: {
        var Q = Lu.get(e);
        if (Q !== void 0) {
          var he = Ba, ke = e;
          switch (e) {
            case "keypress":
              if (js(n) === 0) break e;
            case "keydown":
            case "keyup":
              he = Th;
              break;
            case "focusin":
              ke = "focus", he = Ua;
              break;
            case "focusout":
              ke = "blur", he = Ua;
              break;
            case "beforeblur":
            case "afterblur":
              he = Ua;
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
              he = uu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = ph;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = bh;
              break;
            case _u:
            case bu:
            case Pu:
              he = yh;
              break;
            case Au:
              he = Ah;
              break;
            case "scroll":
              he = hh;
              break;
            case "wheel":
              he = Rh;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = jh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = du;
          }
          var ge = (t & 4) !== 0, ft = !ge && e === "scroll", _ = ge ? Q !== null ? Q + "Capture" : null : Q;
          ge = [];
          for (var N = $, L; N !== null; ) {
            L = N;
            var se = L.stateNode;
            if (L.tag === 5 && se !== null && (L = se, _ !== null && (se = di(N, _), se != null && ge.push(br(N, se, L)))), ft) break;
            N = N.return;
          }
          0 < ge.length && (Q = new he(Q, ke, null, n, Y), Z.push({ event: Q, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", he = e === "mouseout" || e === "pointerout", Q && n !== Ge && (ke = n.relatedTarget || n.fromElement) && (fi(ke) || ke[_n])) break e;
          if ((he || Q) && (Q = Y.window === Y ? Y : (Q = Y.ownerDocument) ? Q.defaultView || Q.parentWindow : window, he ? (ke = n.relatedTarget || n.toElement, he = $, ke = ke ? fi(ke) : null, ke !== null && (ft = Mn(ke), ke !== ft || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (he = null, ke = $), he !== ke)) {
            if (ge = uu, se = "onMouseLeave", _ = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (ge = du, se = "onPointerLeave", _ = "onPointerEnter", N = "pointer"), ft = he == null ? Q : Ii(he), L = ke == null ? Q : Ii(ke), Q = new ge(se, N + "leave", he, n, Y), Q.target = ft, Q.relatedTarget = L, se = null, fi(Y) === $ && (ge = new ge(_, N + "enter", ke, n, Y), ge.target = L, ge.relatedTarget = ft, se = ge), ft = se, he && ke) t: {
              for (ge = he, _ = ke, N = 0, L = ge; L; L = $i(L)) N++;
              for (L = 0, se = _; se; se = $i(se)) L++;
              for (; 0 < N - L; ) ge = $i(ge), N--;
              for (; 0 < L - N; ) _ = $i(_), L--;
              for (; N--; ) {
                if (ge === _ || _ !== null && ge === _.alternate) break t;
                ge = $i(ge), _ = $i(_);
              }
              ge = null;
            }
            else ge = null;
            he !== null && Iu(Z, Q, he, ge, !1), ke !== null && ft !== null && Iu(Z, ft, ke, ge, !0);
          }
        }
        e: {
          if (Q = $ ? Ii($) : window, he = Q.nodeName && Q.nodeName.toLowerCase(), he === "select" || he === "input" && Q.type === "file") var je = Bh;
          else if (ku(Q)) if (gu) je = Hh;
          else {
            je = Kh;
            var Te = Vh;
          }
          else (he = Q.nodeName) && he.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (je = Uh);
          if (je && (je = je(e, $))) {
            yu(Z, je, n, Y);
            break e;
          }
          Te && Te(e, Q, $), e === "focusout" && (Te = Q._wrapperState) && Te.controlled && Q.type === "number" && He(Q, "number", Q.value);
        }
        switch (Te = $ ? Ii($) : window, e) {
          case "focusin":
            (ku(Te) || Te.contentEditable === "true") && (Ri = Te, Ja = $, Tr = null);
            break;
          case "focusout":
            Tr = Ja = Ri = null;
            break;
          case "mousedown":
            Xa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xa = !1, Tu(Z, n, Y);
            break;
          case "selectionchange":
            if (Qh) break;
          case "keydown":
          case "keyup":
            Tu(Z, n, Y);
        }
        var Me;
        if (Ga) e: {
          switch (e) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else Li ? pu(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (fu && n.locale !== "ko" && (Li || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Li && (Me = lu()) : (Hn = Y, za = "value" in Hn ? Hn.value : Hn.textContent, Li = !0)), Te = Ts($, Pe), 0 < Te.length && (Pe = new cu(Pe, e, null, n, Y), Z.push({ event: Pe, listeners: Te }), Me ? Pe.data = Me : (Me = vu(n), Me !== null && (Pe.data = Me)))), (Me = $h ? Fh(e, n) : Ih(e, n)) && ($ = Ts($, "onBeforeInput"), 0 < $.length && (Y = new cu("onBeforeInput", "beforeinput", null, n, Y), Z.push({ event: Y, listeners: $ }), Y.data = Me));
      }
      $u(Z, t);
    });
  }
  function br(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ts(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = di(e, n), u != null && i.unshift(br(e, u, l)), u = di(e, t), u != null && i.push(br(e, u, l))), e = e.return;
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
  function Iu(e, t, n, i, l) {
    for (var u = t._reactName, h = []; n !== null && n !== i; ) {
      var k = n, g = k.alternate, $ = k.stateNode;
      if (g !== null && g === i) break;
      k.tag === 5 && $ !== null && (k = $, l ? (g = di(n, u), g != null && h.unshift(br(n, g, k))) : l || (g = di(n, u), g != null && h.push(br(n, g, k)))), n = n.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Zh = /\r\n?/g, qh = /\u0000|\uFFFD/g;
  function Du(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zh, `
`).replace(qh, "");
  }
  function Ms(e, t, n) {
    if (t = Du(t), Du(e) !== t && n) throw Error(o(425));
  }
  function _s() {
  }
  var il = null, rl = null;
  function sl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var al = typeof setTimeout == "function" ? setTimeout : void 0, em = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
    return zu.resolve(null).then(e).catch(nm);
  } : al;
  function nm(e) {
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
          e.removeChild(l), jr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    jr(t);
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
  var Fi = Math.random().toString(36).slice(2), jn = "__reactFiber$" + Fi, Pr = "__reactProps$" + Fi, _n = "__reactContainer$" + Fi, ol = "__reactEvents$" + Fi, im = "__reactListeners$" + Fi, rm = "__reactHandles$" + Fi;
  function fi(e) {
    var t = e[jn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[jn]) {
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
  function Ar(e) {
    return e = e[jn] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function bs(e) {
    return e[Pr] || null;
  }
  var ul = [], Di = -1;
  function Qn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Di || (e.current = ul[Di], ul[Di] = null, Di--);
  }
  function Ze(e, t) {
    Di++, ul[Di] = e.current, e.current = t;
  }
  var Yn = {}, Tt = Qn(Yn), Dt = Qn(!1), hi = Yn;
  function zi(e, t) {
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
  function Ps() {
    nt(Dt), nt(Tt);
  }
  function Vu(e, t, n) {
    if (Tt.current !== Yn) throw Error(o(168));
    Ze(Tt, t), Ze(Dt, n);
  }
  function Ku(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, K(e) || "Unknown", l));
    return q({}, n, i);
  }
  function As(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yn, hi = Tt.current, Ze(Tt, e), Ze(Dt, Dt.current), !0;
  }
  function Uu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    n ? (e = Ku(e, t, hi), i.__reactInternalMemoizedMergedChildContext = e, nt(Dt), nt(Tt), Ze(Tt, e)) : nt(Dt), Ze(Dt, n);
  }
  var bn = null, Ls = !1, cl = !1;
  function Hu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function sm(e) {
    Ls = !0, Hu(e);
  }
  function Jn() {
    if (!cl && bn !== null) {
      cl = !0;
      var e = 0, t = We;
      try {
        var n = bn;
        for (We = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        bn = null, Ls = !1;
      } catch (l) {
        throw bn !== null && (bn = bn.slice(e + 1)), St(gn, Jn), l;
      } finally {
        We = t, cl = !1;
      }
    }
    return null;
  }
  var Bi = [], Vi = 0, Rs = null, Os = 0, en = [], tn = 0, mi = null, Pn = 1, An = "";
  function pi(e, t) {
    Bi[Vi++] = Os, Bi[Vi++] = Rs, Rs = e, Os = t;
  }
  function Gu(e, t, n) {
    en[tn++] = Pn, en[tn++] = An, en[tn++] = mi, mi = e;
    var i = Pn;
    e = An;
    var l = 32 - wt(i) - 1;
    i &= ~(1 << l), n += 1;
    var u = 32 - wt(t) + l;
    if (30 < u) {
      var h = l - l % 5;
      u = (i & (1 << h) - 1).toString(32), i >>= h, l -= h, Pn = 1 << 32 - wt(t) + l | n << l | i, An = u + e;
    } else Pn = 1 << u | n << l | i, An = e;
  }
  function dl(e) {
    e.return !== null && (pi(e, 1), Gu(e, 1, 0));
  }
  function fl(e) {
    for (; e === Rs; ) Rs = Bi[--Vi], Bi[Vi] = null, Os = Bi[--Vi], Bi[Vi] = null;
    for (; e === mi; ) mi = en[--tn], en[tn] = null, An = en[--tn], en[tn] = null, Pn = en[--tn], en[tn] = null;
  }
  var Qt = null, Yt = null, it = !1, fn = null;
  function Wu(e, t) {
    var n = an(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Qu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qt = e, Yt = Wn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qt = e, Yt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mi !== null ? { id: Pn, overflow: An } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = an(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qt = e, Yt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ml(e) {
    if (it) {
      var t = Yt;
      if (t) {
        var n = t;
        if (!Qu(e, t)) {
          if (hl(e)) throw Error(o(418));
          t = Wn(n.nextSibling);
          var i = Qt;
          t && Qu(e, t) ? Wu(i, n) : (e.flags = e.flags & -4097 | 2, it = !1, Qt = e);
        }
      } else {
        if (hl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, it = !1, Qt = e;
      }
    }
  }
  function Yu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Qt = e;
  }
  function $s(e) {
    if (e !== Qt) return !1;
    if (!it) return Yu(e), it = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps)), t && (t = Yt)) {
      if (hl(e)) throw Ju(), Error(o(418));
      for (; t; ) Wu(e, t), t = Wn(t.nextSibling);
    }
    if (Yu(e), e.tag === 13) {
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
  function Ju() {
    for (var e = Yt; e; ) e = Wn(e.nextSibling);
  }
  function Ki() {
    Yt = Qt = null, it = !1;
  }
  function pl(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  var am = B.ReactCurrentBatchConfig;
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
  function Fs(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Xu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Zu(e) {
    function t(_, N) {
      if (e) {
        var L = _.deletions;
        L === null ? (_.deletions = [N], _.flags |= 16) : L.push(N);
      }
    }
    function n(_, N) {
      if (!e) return null;
      for (; N !== null; ) t(_, N), N = N.sibling;
      return null;
    }
    function i(_, N) {
      for (_ = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? _.set(N.key, N) : _.set(N.index, N), N = N.sibling;
      return _;
    }
    function l(_, N) {
      return _ = ri(_, N), _.index = 0, _.sibling = null, _;
    }
    function u(_, N, L) {
      return _.index = L, e ? (L = _.alternate, L !== null ? (L = L.index, L < N ? (_.flags |= 2, N) : L) : (_.flags |= 2, N)) : (_.flags |= 1048576, N);
    }
    function h(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function k(_, N, L, se) {
      return N === null || N.tag !== 6 ? (N = ao(L, _.mode, se), N.return = _, N) : (N = l(N, L), N.return = _, N);
    }
    function g(_, N, L, se) {
      var je = L.type;
      return je === O ? Y(_, N, L.props.children, se, L.key) : N !== null && (N.elementType === je || typeof je == "object" && je !== null && je.$$typeof === ue && Xu(je) === N.type) ? (se = l(N, L.props), se.ref = Lr(_, N, L), se.return = _, se) : (se = la(L.type, L.key, L.props, null, _.mode, se), se.ref = Lr(_, N, L), se.return = _, se);
    }
    function $(_, N, L, se) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== L.containerInfo || N.stateNode.implementation !== L.implementation ? (N = lo(L, _.mode, se), N.return = _, N) : (N = l(N, L.children || []), N.return = _, N);
    }
    function Y(_, N, L, se, je) {
      return N === null || N.tag !== 7 ? (N = wi(L, _.mode, se, je), N.return = _, N) : (N = l(N, L), N.return = _, N);
    }
    function Z(_, N, L) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return N = ao("" + N, _.mode, L), N.return = _, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case z:
            return L = la(N.type, N.key, N.props, null, _.mode, L), L.ref = Lr(_, null, N), L.return = _, L;
          case I:
            return N = lo(N, _.mode, L), N.return = _, N;
          case ue:
            var se = N._init;
            return Z(_, se(N._payload), L);
        }
        if (qe(N) || oe(N)) return N = wi(N, _.mode, L, null), N.return = _, N;
        Fs(_, N);
      }
      return null;
    }
    function Q(_, N, L, se) {
      var je = N !== null ? N.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return je !== null ? null : k(_, N, "" + L, se);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case z:
            return L.key === je ? g(_, N, L, se) : null;
          case I:
            return L.key === je ? $(_, N, L, se) : null;
          case ue:
            return je = L._init, Q(
              _,
              N,
              je(L._payload),
              se
            );
        }
        if (qe(L) || oe(L)) return je !== null ? null : Y(_, N, L, se, null);
        Fs(_, L);
      }
      return null;
    }
    function he(_, N, L, se, je) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return _ = _.get(L) || null, k(N, _, "" + se, je);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case z:
            return _ = _.get(se.key === null ? L : se.key) || null, g(N, _, se, je);
          case I:
            return _ = _.get(se.key === null ? L : se.key) || null, $(N, _, se, je);
          case ue:
            var Te = se._init;
            return he(_, N, L, Te(se._payload), je);
        }
        if (qe(se) || oe(se)) return _ = _.get(L) || null, Y(N, _, se, je, null);
        Fs(N, se);
      }
      return null;
    }
    function ke(_, N, L, se) {
      for (var je = null, Te = null, Me = N, Pe = N = 0, jt = null; Me !== null && Pe < L.length; Pe++) {
        Me.index > Pe ? (jt = Me, Me = null) : jt = Me.sibling;
        var Ke = Q(_, Me, L[Pe], se);
        if (Ke === null) {
          Me === null && (Me = jt);
          break;
        }
        e && Me && Ke.alternate === null && t(_, Me), N = u(Ke, N, Pe), Te === null ? je = Ke : Te.sibling = Ke, Te = Ke, Me = jt;
      }
      if (Pe === L.length) return n(_, Me), it && pi(_, Pe), je;
      if (Me === null) {
        for (; Pe < L.length; Pe++) Me = Z(_, L[Pe], se), Me !== null && (N = u(Me, N, Pe), Te === null ? je = Me : Te.sibling = Me, Te = Me);
        return it && pi(_, Pe), je;
      }
      for (Me = i(_, Me); Pe < L.length; Pe++) jt = he(Me, _, Pe, L[Pe], se), jt !== null && (e && jt.alternate !== null && Me.delete(jt.key === null ? Pe : jt.key), N = u(jt, N, Pe), Te === null ? je = jt : Te.sibling = jt, Te = jt);
      return e && Me.forEach(function(si) {
        return t(_, si);
      }), it && pi(_, Pe), je;
    }
    function ge(_, N, L, se) {
      var je = oe(L);
      if (typeof je != "function") throw Error(o(150));
      if (L = je.call(L), L == null) throw Error(o(151));
      for (var Te = je = null, Me = N, Pe = N = 0, jt = null, Ke = L.next(); Me !== null && !Ke.done; Pe++, Ke = L.next()) {
        Me.index > Pe ? (jt = Me, Me = null) : jt = Me.sibling;
        var si = Q(_, Me, Ke.value, se);
        if (si === null) {
          Me === null && (Me = jt);
          break;
        }
        e && Me && si.alternate === null && t(_, Me), N = u(si, N, Pe), Te === null ? je = si : Te.sibling = si, Te = si, Me = jt;
      }
      if (Ke.done) return n(
        _,
        Me
      ), it && pi(_, Pe), je;
      if (Me === null) {
        for (; !Ke.done; Pe++, Ke = L.next()) Ke = Z(_, Ke.value, se), Ke !== null && (N = u(Ke, N, Pe), Te === null ? je = Ke : Te.sibling = Ke, Te = Ke);
        return it && pi(_, Pe), je;
      }
      for (Me = i(_, Me); !Ke.done; Pe++, Ke = L.next()) Ke = he(Me, _, Pe, Ke.value, se), Ke !== null && (e && Ke.alternate !== null && Me.delete(Ke.key === null ? Pe : Ke.key), N = u(Ke, N, Pe), Te === null ? je = Ke : Te.sibling = Ke, Te = Ke);
      return e && Me.forEach(function(Dm) {
        return t(_, Dm);
      }), it && pi(_, Pe), je;
    }
    function ft(_, N, L, se) {
      if (typeof L == "object" && L !== null && L.type === O && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case z:
            e: {
              for (var je = L.key, Te = N; Te !== null; ) {
                if (Te.key === je) {
                  if (je = L.type, je === O) {
                    if (Te.tag === 7) {
                      n(_, Te.sibling), N = l(Te, L.props.children), N.return = _, _ = N;
                      break e;
                    }
                  } else if (Te.elementType === je || typeof je == "object" && je !== null && je.$$typeof === ue && Xu(je) === Te.type) {
                    n(_, Te.sibling), N = l(Te, L.props), N.ref = Lr(_, Te, L), N.return = _, _ = N;
                    break e;
                  }
                  n(_, Te);
                  break;
                } else t(_, Te);
                Te = Te.sibling;
              }
              L.type === O ? (N = wi(L.props.children, _.mode, se, L.key), N.return = _, _ = N) : (se = la(L.type, L.key, L.props, null, _.mode, se), se.ref = Lr(_, N, L), se.return = _, _ = se);
            }
            return h(_);
          case I:
            e: {
              for (Te = L.key; N !== null; ) {
                if (N.key === Te) if (N.tag === 4 && N.stateNode.containerInfo === L.containerInfo && N.stateNode.implementation === L.implementation) {
                  n(_, N.sibling), N = l(N, L.children || []), N.return = _, _ = N;
                  break e;
                } else {
                  n(_, N);
                  break;
                }
                else t(_, N);
                N = N.sibling;
              }
              N = lo(L, _.mode, se), N.return = _, _ = N;
            }
            return h(_);
          case ue:
            return Te = L._init, ft(_, N, Te(L._payload), se);
        }
        if (qe(L)) return ke(_, N, L, se);
        if (oe(L)) return ge(_, N, L, se);
        Fs(_, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, N !== null && N.tag === 6 ? (n(_, N.sibling), N = l(N, L), N.return = _, _ = N) : (n(_, N), N = ao(L, _.mode, se), N.return = _, _ = N), h(_)) : n(_, N);
    }
    return ft;
  }
  var Ui = Zu(!0), qu = Zu(!1), Is = Qn(null), Ds = null, Hi = null, vl = null;
  function kl() {
    vl = Hi = Ds = null;
  }
  function yl(e) {
    var t = Is.current;
    nt(Is), e._currentValue = t;
  }
  function gl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gi(e, t) {
    Ds = e, vl = Hi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Bt = !0), e.firstContext = null);
  }
  function nn(e) {
    var t = e._currentValue;
    if (vl !== e) if (e = { context: e, memoizedValue: t, next: null }, Hi === null) {
      if (Ds === null) throw Error(o(308));
      Hi = e, Ds.dependencies = { lanes: 0, firstContext: e };
    } else Hi = Hi.next = e;
    return t;
  }
  var vi = null;
  function jl(e) {
    vi === null ? vi = [e] : vi.push(e);
  }
  function ec(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, jl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Xn = !1;
  function xl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Zn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Be & 2) !== 0) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Ln(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, jl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Ln(e, n);
  }
  function zs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Oa(e, n);
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
  function Bs(e, t, n, i) {
    var l = e.updateQueue;
    Xn = !1;
    var u = l.firstBaseUpdate, h = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var g = k, $ = g.next;
      g.next = null, h === null ? u = $ : h.next = $, h = g;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, k = Y.lastBaseUpdate, k !== h && (k === null ? Y.firstBaseUpdate = $ : k.next = $, Y.lastBaseUpdate = g));
    }
    if (u !== null) {
      var Z = l.baseState;
      h = 0, Y = $ = g = null, k = u;
      do {
        var Q = k.lane, he = k.eventTime;
        if ((i & Q) === Q) {
          Y !== null && (Y = Y.next = {
            eventTime: he,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ke = e, ge = k;
            switch (Q = t, he = n, ge.tag) {
              case 1:
                if (ke = ge.payload, typeof ke == "function") {
                  Z = ke.call(he, Z, Q);
                  break e;
                }
                Z = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = ge.payload, Q = typeof ke == "function" ? ke.call(he, Z, Q) : ke, Q == null) break e;
                Z = q({}, Z, Q);
                break e;
              case 2:
                Xn = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [k] : Q.push(k));
        } else he = { eventTime: he, lane: Q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Y === null ? ($ = Y = he, g = Z) : Y = Y.next = he, h |= Q;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          Q = k, k = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (g = Z), l.baseState = g, l.firstBaseUpdate = $, l.lastBaseUpdate = Y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          h |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      gi |= h, e.lanes = h, e.memoizedState = Z;
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
  var Rr = {}, xn = Qn(Rr), Or = Qn(Rr), $r = Qn(Rr);
  function ki(e) {
    if (e === Rr) throw Error(o(174));
    return e;
  }
  function Sl(e, t) {
    switch (Ze($r, t), Ze(Or, e), Ze(xn, Rr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zt(t, e);
    }
    nt(xn), Ze(xn, t);
  }
  function Wi() {
    nt(xn), nt(Or), nt($r);
  }
  function rc(e) {
    ki($r.current);
    var t = ki(xn.current), n = Zt(t, e.type);
    t !== n && (Ze(Or, e), Ze(xn, n));
  }
  function wl(e) {
    Or.current === e && (nt(xn), nt(Or));
  }
  var ot = Qn(0);
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
  var Ks = B.ReactCurrentDispatcher, Cl = B.ReactCurrentBatchConfig, yi = 0, ut = null, pt = null, yt = null, Us = !1, Fr = !1, Ir = 0, lm = 0;
  function Mt() {
    throw Error(o(321));
  }
  function Tl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dn(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, i, l, u) {
    if (yi = u, ut = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ks.current = e === null || e.memoizedState === null ? dm : fm, e = n(i, l), Fr) {
      u = 0;
      do {
        if (Fr = !1, Ir = 0, 25 <= u) throw Error(o(301));
        u += 1, yt = pt = null, t.updateQueue = null, Ks.current = hm, e = n(i, l);
      } while (Fr);
    }
    if (Ks.current = Ws, t = pt !== null && pt.next !== null, yi = 0, yt = pt = ut = null, Us = !1, t) throw Error(o(300));
    return e;
  }
  function _l() {
    var e = Ir !== 0;
    return Ir = 0, e;
  }
  function Sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? ut.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function rn() {
    if (pt === null) {
      var e = ut.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pt.next;
    var t = yt === null ? ut.memoizedState : yt.next;
    if (t !== null) yt = t, pt = e;
    else {
      if (e === null) throw Error(o(310));
      pt = e, e = { memoizedState: pt.memoizedState, baseState: pt.baseState, baseQueue: pt.baseQueue, queue: pt.queue, next: null }, yt === null ? ut.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bl(e) {
    var t = rn(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = pt, l = i.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        l.next = u.next, u.next = h;
      }
      i.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, i = i.baseState;
      var k = h = null, g = null, $ = u;
      do {
        var Y = $.lane;
        if ((yi & Y) === Y) g !== null && (g = g.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), i = $.hasEagerState ? $.eagerState : e(i, $.action);
        else {
          var Z = {
            lane: Y,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          g === null ? (k = g = Z, h = i) : g = g.next = Z, ut.lanes |= Y, gi |= Y;
        }
        $ = $.next;
      } while ($ !== null && $ !== u);
      g === null ? h = i : g.next = k, dn(i, t.memoizedState) || (Bt = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = g, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ut.lanes |= u, gi |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Pl(e) {
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
  function sc() {
  }
  function ac(e, t) {
    var n = ut, i = rn(), l = t(), u = !dn(i.memoizedState, l);
    if (u && (i.memoizedState = l, Bt = !0), i = i.queue, Al(uc.bind(null, n, i, e), [e]), i.getSnapshot !== t || u || yt !== null && yt.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, oc.bind(null, n, i, l, t), void 0, null), gt === null) throw Error(o(349));
      (yi & 30) !== 0 || lc(n, t, l);
    }
    return l;
  }
  function lc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ut.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ut.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !dn(e, n);
    } catch {
      return !0;
    }
  }
  function dc(e) {
    var t = Ln(e, 1);
    t !== null && vn(t, e, 1, -1);
  }
  function fc(e) {
    var t = Sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cm.bind(null, ut, e), [t.memoizedState, e];
  }
  function zr(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = ut.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ut.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function hc() {
    return rn().memoizedState;
  }
  function Hs(e, t, n, i) {
    var l = Sn();
    ut.flags |= e, l.memoizedState = zr(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Gs(e, t, n, i) {
    var l = rn();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (pt !== null) {
      var h = pt.memoizedState;
      if (u = h.destroy, i !== null && Tl(i, h.deps)) {
        l.memoizedState = zr(t, n, u, i);
        return;
      }
    }
    ut.flags |= e, l.memoizedState = zr(1 | t, n, u, i);
  }
  function mc(e, t) {
    return Hs(8390656, 8, e, t);
  }
  function Al(e, t) {
    return Gs(2048, 8, e, t);
  }
  function pc(e, t) {
    return Gs(4, 2, e, t);
  }
  function vc(e, t) {
    return Gs(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, Gs(4, 4, kc.bind(null, t, e), n);
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
    return (yi & 21) === 0 ? (e.baseState && (e.baseState = !1, Bt = !0), e.memoizedState = n) : (dn(n, t) || (n = Xo(), ut.lanes |= n, gi |= n, e.baseState = !0), t);
  }
  function om(e, t) {
    var n = We;
    We = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = Cl.transition;
    Cl.transition = {};
    try {
      e(!1), t();
    } finally {
      We = n, Cl.transition = i;
    }
  }
  function Sc() {
    return rn().memoizedState;
  }
  function um(e, t, n) {
    var i = ni(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, wc(e)) Nc(t, n);
    else if (n = ec(e, t, n, i), n !== null) {
      var l = Ot();
      vn(n, e, i, l), Ec(n, t, i);
    }
  }
  function cm(e, t, n) {
    var i = ni(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (wc(e)) Nc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, k = u(h, n);
        if (l.hasEagerState = !0, l.eagerState = k, dn(k, h)) {
          var g = t.interleaved;
          g === null ? (l.next = l, jl(t)) : (l.next = g.next, g.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = ec(e, t, l, i), n !== null && (l = Ot(), vn(n, e, i, l), Ec(n, t, i));
    }
  }
  function wc(e) {
    var t = e.alternate;
    return e === ut || t !== null && t === ut;
  }
  function Nc(e, t) {
    Fr = Us = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ec(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Oa(e, n);
    }
  }
  var Ws = { readContext: nn, useCallback: Mt, useContext: Mt, useEffect: Mt, useImperativeHandle: Mt, useInsertionEffect: Mt, useLayoutEffect: Mt, useMemo: Mt, useReducer: Mt, useRef: Mt, useState: Mt, useDebugValue: Mt, useDeferredValue: Mt, useTransition: Mt, useMutableSource: Mt, useSyncExternalStore: Mt, useId: Mt, unstable_isNewReconciler: !1 }, dm = { readContext: nn, useCallback: function(e, t) {
    return Sn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: nn, useEffect: mc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hs(
      4194308,
      4,
      kc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Hs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Hs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Sn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = Sn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = um.bind(null, ut, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Sn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: fc, useDebugValue: Ll, useDeferredValue: function(e) {
    return Sn().memoizedState = e;
  }, useTransition: function() {
    var e = fc(!1), t = e[0];
    return e = om.bind(null, e[1]), Sn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = ut, l = Sn();
    if (it) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), gt === null) throw Error(o(349));
      (yi & 30) !== 0 || lc(i, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, mc(uc.bind(
      null,
      i,
      u,
      e
    ), [e]), i.flags |= 2048, zr(9, oc.bind(null, i, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Sn(), t = gt.identifierPrefix;
    if (it) {
      var n = An, i = Pn;
      n = (i & ~(1 << 32 - wt(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = lm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, fm = {
    readContext: nn,
    useCallback: gc,
    useContext: nn,
    useEffect: Al,
    useImperativeHandle: yc,
    useInsertionEffect: pc,
    useLayoutEffect: vc,
    useMemo: jc,
    useReducer: bl,
    useRef: hc,
    useState: function() {
      return bl(Dr);
    },
    useDebugValue: Ll,
    useDeferredValue: function(e) {
      var t = rn();
      return xc(t, pt.memoizedState, e);
    },
    useTransition: function() {
      var e = bl(Dr)[0], t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: sc,
    useSyncExternalStore: ac,
    useId: Sc,
    unstable_isNewReconciler: !1
  }, hm = { readContext: nn, useCallback: gc, useContext: nn, useEffect: Al, useImperativeHandle: yc, useInsertionEffect: pc, useLayoutEffect: vc, useMemo: jc, useReducer: Pl, useRef: hc, useState: function() {
    return Pl(Dr);
  }, useDebugValue: Ll, useDeferredValue: function(e) {
    var t = rn();
    return pt === null ? t.memoizedState = e : xc(t, pt.memoizedState, e);
  }, useTransition: function() {
    var e = Pl(Dr)[0], t = rn().memoizedState;
    return [e, t];
  }, useMutableSource: sc, useSyncExternalStore: ac, useId: Sc, unstable_isNewReconciler: !1 };
  function hn(e, t) {
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
  var Qs = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = Ot(), l = ni(e), u = Rn(i, l);
    u.payload = t, n != null && (u.callback = n), t = Zn(e, u, l), t !== null && (vn(t, e, l, i), zs(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Ot(), l = ni(e), u = Rn(i, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Zn(e, u, l), t !== null && (vn(t, e, l, i), zs(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ot(), i = ni(e), l = Rn(n, i);
    l.tag = 2, t != null && (l.callback = t), t = Zn(e, l, i), t !== null && (vn(t, e, i, n), zs(t, e, i));
  } };
  function Cc(e, t, n, i, l, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, i) || !Cr(l, u) : !0;
  }
  function Tc(e, t, n) {
    var i = !1, l = Yn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = nn(u) : (l = zt(t) ? hi : Tt.current, i = t.contextTypes, u = (i = i != null) ? zi(e, l) : Yn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qs, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Mc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
  }
  function Ol(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = nn(u) : (u = zt(t) ? hi : Tt.current, l.context = zi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Rl(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Qs.enqueueReplaceState(l, l.state, null), Bs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
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
  var mm = typeof WeakMap == "function" ? WeakMap : Map;
  function _c(e, t, n) {
    n = Rn(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      ta || (ta = !0, Zl = i), Fl(e, t);
    }, n;
  }
  function bc(e, t, n) {
    n = Rn(-1, n), n.tag = 3;
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
      Fl(e, t), typeof i != "function" && (ei === null ? ei = /* @__PURE__ */ new Set([this]) : ei.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), n;
  }
  function Pc(e, t, n) {
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
  function Lc(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rn(-1, 1), t.tag = 2, Zn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var pm = B.ReactCurrentOwner, Bt = !1;
  function Rt(e, t, n, i) {
    t.child = e === null ? qu(t, null, n, i) : Ui(t, e.child, n, i);
  }
  function Rc(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    return Gi(t, l), i = Ml(e, t, n, i, u, l), n = _l(), e !== null && !Bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (it && n && dl(t), t.flags |= 1, Rt(e, t, i, l), t.child);
  }
  function Oc(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !so(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, $c(e, t, u, i, l)) : (e = la(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Cr, n(h, i) && e.ref === t.ref) return On(e, t, l);
    }
    return t.flags |= 1, e = ri(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function $c(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cr(u, i) && e.ref === t.ref) if (Bt = !1, t.pendingProps = i = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Bt = !0);
      else return t.lanes = e.lanes, On(e, t, l);
    }
    return Il(e, t, n, i, l);
  }
  function Fc(e, t, n) {
    var i = t.pendingProps, l = i.children, u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(Ji, Jt), Jt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(Ji, Jt), Jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = u !== null ? u.baseLanes : n, Ze(Ji, Jt), Jt |= i;
    }
    else u !== null ? (i = u.baseLanes | n, t.memoizedState = null) : i = n, Ze(Ji, Jt), Jt |= i;
    return Rt(e, t, l, n), t.child;
  }
  function Ic(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Il(e, t, n, i, l) {
    var u = zt(n) ? hi : Tt.current;
    return u = zi(t, u), Gi(t, l), n = Ml(e, t, n, i, u, l), i = _l(), e !== null && !Bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, On(e, t, l)) : (it && i && dl(t), t.flags |= 1, Rt(e, t, n, l), t.child);
  }
  function Dc(e, t, n, i, l) {
    if (zt(n)) {
      var u = !0;
      As(t);
    } else u = !1;
    if (Gi(t, l), t.stateNode === null) Js(e, t), Tc(t, n, i), Ol(t, n, i, l), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var g = h.context, $ = n.contextType;
      typeof $ == "object" && $ !== null ? $ = nn($) : ($ = zt(n) ? hi : Tt.current, $ = zi(t, $));
      var Y = n.getDerivedStateFromProps, Z = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Z || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || g !== $) && Mc(t, h, i, $), Xn = !1;
      var Q = t.memoizedState;
      h.state = Q, Bs(t, i, h, l), g = t.memoizedState, k !== i || Q !== g || Dt.current || Xn ? (typeof Y == "function" && (Rl(t, n, Y, i), g = t.memoizedState), (k = Xn || Cc(t, n, k, i, Q, g, $)) ? (Z || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = g), h.props = i, h.state = g, h.context = $, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, tc(e, t), k = t.memoizedProps, $ = t.type === t.elementType ? k : hn(t.type, k), h.props = $, Z = t.pendingProps, Q = h.context, g = n.contextType, typeof g == "object" && g !== null ? g = nn(g) : (g = zt(n) ? hi : Tt.current, g = zi(t, g));
      var he = n.getDerivedStateFromProps;
      (Y = typeof he == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== Z || Q !== g) && Mc(t, h, i, g), Xn = !1, Q = t.memoizedState, h.state = Q, Bs(t, i, h, l);
      var ke = t.memoizedState;
      k !== Z || Q !== ke || Dt.current || Xn ? (typeof he == "function" && (Rl(t, n, he, i), ke = t.memoizedState), ($ = Xn || Cc(t, n, $, i, Q, ke, g) || !1) ? (Y || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ke, g), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ke, g)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ke), h.props = i, h.state = ke, h.context = g, i = $) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Dl(e, t, n, i, u, l);
  }
  function Dl(e, t, n, i, l, u) {
    Ic(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return l && Uu(t, n, !1), On(e, t, u);
    i = t.stateNode, pm.current = t;
    var k = h && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Ui(t, e.child, null, u), t.child = Ui(t, null, k, u)) : Rt(e, t, k, u), t.memoizedState = i.state, l && Uu(t, n, !0), t.child;
  }
  function zc(e) {
    var t = e.stateNode;
    t.pendingContext ? Vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vu(e, t.context, !1), Sl(e, t.containerInfo);
  }
  function Bc(e, t, n, i, l) {
    return Ki(), pl(l), t.flags |= 256, Rt(e, t, n, i), t.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vc(e, t, n) {
    var i = t.pendingProps, l = ot.current, u = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ze(ot, l & 1), e === null)
      return ml(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = oa(h, i, 0, null), e = wi(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Bl(n), t.memoizedState = zl, e) : Vl(t, h));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return vm(e, t, h, i, k, l, n);
    if (u) {
      u = i.fallback, h = t.mode, l = e.child, k = l.sibling;
      var g = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = g, t.deletions = null) : (i = ri(l, g), i.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = ri(k, u) : (u = wi(u, h, n, null), u.flags |= 2), u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, h = e.child.memoizedState, h = h === null ? Bl(n) : { baseLanes: h.baseLanes | n, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~n, t.memoizedState = zl, i;
    }
    return u = e.child, e = u.sibling, i = ri(u, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Vl(e, t) {
    return t = oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ys(e, t, n, i) {
    return i !== null && pl(i), Ui(t, e.child, null, n), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function vm(e, t, n, i, l, u, h) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = $l(Error(o(422))), Ys(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = i.fallback, l = t.mode, i = oa({ mode: "visible", children: i.children }, l, 0, null), u = wi(u, l, h, null), u.flags |= 2, i.return = t, u.return = t, i.sibling = u, t.child = i, (t.mode & 1) !== 0 && Ui(t, e.child, null, h), t.child.memoizedState = Bl(h), t.memoizedState = zl, u);
    if ((t.mode & 1) === 0) return Ys(e, t, h, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var k = i.dgst;
      return i = k, u = Error(o(419)), i = $l(u, i, void 0), Ys(e, t, h, i);
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
      return ro(), i = $l(Error(o(421))), Ys(e, t, h, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _m.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Yt = Wn(l.nextSibling), Qt = t, it = !0, fn = null, e !== null && (en[tn++] = Pn, en[tn++] = An, en[tn++] = mi, Pn = e.id, An = e.overflow, mi = t), t = Vl(t, i.children), t.flags |= 4096, t);
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
    if (Rt(e, t, i.children, n), i = ot.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
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
    if (Ze(ot, i), (t.mode & 1) === 0) t.memoizedState = null;
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
  function Js(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function On(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), gi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ri(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function km(e, t, n) {
    switch (t.tag) {
      case 3:
        zc(t), Ki();
        break;
      case 5:
        rc(t);
        break;
      case 1:
        zt(t.type) && As(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        Ze(Is, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (Ze(ot, ot.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Vc(e, t, n) : (Ze(ot, ot.current & 1), e = On(e, t, n), e !== null ? e.sibling : null);
        Ze(ot, ot.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Uc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ze(ot, ot.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Fc(e, t, n);
    }
    return On(e, t, n);
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
      e = t.stateNode, ki(xn.current);
      var u = null;
      switch (n) {
        case "input":
          l = de(e, l), i = de(e, i), u = [];
          break;
        case "select":
          l = q({}, l, { value: void 0 }), i = q({}, i, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = kt(e, l), i = kt(e, i), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = _s);
      }
      be(n, i);
      var h;
      n = null;
      for ($ in l) if (!i.hasOwnProperty($) && l.hasOwnProperty($) && l[$] != null) if ($ === "style") {
        var k = l[$];
        for (h in k) k.hasOwnProperty(h) && (n || (n = {}), n[h] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (d.hasOwnProperty($) ? u || (u = []) : (u = u || []).push($, null));
      for ($ in i) {
        var g = i[$];
        if (k = l?.[$], i.hasOwnProperty($) && g !== k && (g != null || k != null)) if ($ === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || g && g.hasOwnProperty(h) || (n || (n = {}), n[h] = "");
          for (h in g) g.hasOwnProperty(h) && k[h] !== g[h] && (n || (n = {}), n[h] = g[h]);
        } else n || (u || (u = []), u.push(
          $,
          n
        )), n = g;
        else $ === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, k = k ? k.__html : void 0, g != null && k !== g && (u = u || []).push($, g)) : $ === "children" ? typeof g != "string" && typeof g != "number" || (u = u || []).push($, "" + g) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (d.hasOwnProperty($) ? (g != null && $ === "onScroll" && tt("scroll", e), u || k === g || (u = [])) : (u = u || []).push($, g));
      }
      n && (u = u || []).push("style", n);
      var $ = u;
      (t.updateQueue = $) && (t.flags |= 4);
    }
  }, Wc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Br(e, t) {
    if (!it) switch (e.tailMode) {
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
  function ym(e, t, n) {
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
        return _t(t), null;
      case 1:
        return zt(t.type) && Ps(), _t(t), null;
      case 3:
        return i = t.stateNode, Wi(), nt(Dt), nt(Tt), El(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && ($s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fn !== null && (to(fn), fn = null))), Ul(e, t), _t(t), null;
      case 5:
        wl(t);
        var l = ki($r.current);
        if (n = t.type, e !== null && t.stateNode != null) Gc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return _t(t), null;
          }
          if (e = ki(xn.current), $s(t)) {
            i = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (i[jn] = t, i[Pr] = u, e = (t.mode & 1) !== 0, n) {
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
                Ne(i, u), tt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!u.multiple }, tt("invalid", i);
                break;
              case "textarea":
                Qe(i, u), tt("invalid", i);
            }
            be(n, u), l = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var k = u[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (u.suppressHydrationWarning !== !0 && Ms(i.textContent, k, e), l = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Ms(
                i.textContent,
                k,
                e
              ), l = ["children", "" + k]) : d.hasOwnProperty(h) && k != null && h === "onScroll" && tt("scroll", i);
            }
            switch (n) {
              case "input":
                D(i), Je(i, u, !0);
                break;
              case "textarea":
                D(i), Xe(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = _s);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(n, { is: i.is }) : (e = h.createElement(n), n === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, n), e[jn] = t, e[Pr] = i, Hc(e, t, !1, !1), t.stateNode = e;
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
                  Ne(e, i), l = de(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = q({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Qe(e, i), l = kt(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              be(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var g = k[u];
                u === "style" ? ln(e, g) : u === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && qt(e, g)) : u === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && Ht(e, g) : typeof g == "number" && Ht(e, "" + g) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? g != null && u === "onScroll" && tt("scroll", e) : g != null && U(e, u, g, h));
              }
              switch (n) {
                case "input":
                  D(e), Je(e, i, !1);
                  break;
                case "textarea":
                  D(e), Xe(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + te(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, u = i.value, u != null ? rt(e, !!i.multiple, u, !1) : i.defaultValue != null && rt(
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
        return _t(t), null;
      case 6:
        if (e && t.stateNode != null) Wc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (n = ki($r.current), ki(xn.current), $s(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[jn] = t, (u = i.nodeValue !== n) && (e = Qt, e !== null)) switch (e.tag) {
              case 3:
                Ms(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ms(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[jn] = t, t.stateNode = i;
        }
        return _t(t), null;
      case 13:
        if (nt(ot), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (it && Yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ju(), Ki(), t.flags |= 98560, u = !1;
          else if (u = $s(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[jn] = t;
            } else Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _t(t), u = !1;
          } else fn !== null && (to(fn), fn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ot.current & 1) !== 0 ? vt === 0 && (vt = 3) : ro())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return Wi(), Ul(e, t), e === null && _r(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return yl(t.type._context), _t(t), null;
      case 17:
        return zt(t.type) && Ps(), _t(t), null;
      case 19:
        if (nt(ot), u = t.memoizedState, u === null) return _t(t), null;
        if (i = (t.flags & 128) !== 0, h = u.rendering, h === null) if (i) Br(u, !1);
        else {
          if (vt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Vs(e), h !== null) {
              for (t.flags |= 128, Br(u, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) u = n, e = i, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ze(ot, ot.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && at() > Xi && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Vs(h), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Br(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !it) return _t(t), null;
          } else 2 * at() - u.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Br(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (n = u.last, n !== null ? n.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = at(), t.sibling = null, n = ot.current, Ze(ot, i ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return io(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Jt & 1073741824) !== 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function gm(e, t) {
    switch (fl(t), t.tag) {
      case 1:
        return zt(t.type) && Ps(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), nt(Dt), nt(Tt), El(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return wl(t), null;
      case 13:
        if (nt(ot), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return nt(ot), null;
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
  var Xs = !1, bt = !1, jm = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function Yi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ct(e, t, i);
    }
    else n.current = null;
  }
  function Hl(e, t, n) {
    try {
      n();
    } catch (i) {
      ct(e, t, i);
    }
  }
  var Qc = !1;
  function xm(e, t) {
    if (il = ks, e = Cu(), Ya(e)) {
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
          var h = 0, k = -1, g = -1, $ = 0, Y = 0, Z = e, Q = null;
          t: for (; ; ) {
            for (var he; Z !== n || l !== 0 && Z.nodeType !== 3 || (k = h + l), Z !== u || i !== 0 && Z.nodeType !== 3 || (g = h + i), Z.nodeType === 3 && (h += Z.nodeValue.length), (he = Z.firstChild) !== null; )
              Q = Z, Z = he;
            for (; ; ) {
              if (Z === e) break t;
              if (Q === n && ++$ === l && (k = h), Q === u && ++Y === i && (g = h), (he = Z.nextSibling) !== null) break;
              Z = Q, Q = Z.parentNode;
            }
            Z = he;
          }
          n = k === -1 || g === -1 ? null : { start: k, end: g };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (rl = { focusedElem: e, selectionRange: n }, ks = !1, pe = t; pe !== null; ) if (t = pe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, pe = e;
    else for (; pe !== null; ) {
      t = pe;
      try {
        var ke = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ke !== null) {
              var ge = ke.memoizedProps, ft = ke.memoizedState, _ = t.stateNode, N = _.getSnapshotBeforeUpdate(t.elementType === t.type ? ge : hn(t.type, ge), ft);
              _.__reactInternalSnapshotBeforeUpdate = N;
            }
            break;
          case 3:
            var L = t.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
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
        ct(t, t.return, se);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, pe = e;
        break;
      }
      pe = t.return;
    }
    return ke = Qc, Qc = !1, ke;
  }
  function Vr(e, t, n) {
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
  function Zs(e, t) {
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
    t !== null && (e.alternate = null, Yc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jn], delete t[Pr], delete t[ol], delete t[im], delete t[rm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _s));
    else if (i !== 4 && (e = e.child, e !== null)) for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), e = e.sibling;
  }
  function Ql(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), e = e.sibling;
  }
  var Nt = null, mn = !1;
  function qn(e, t, n) {
    for (n = n.child; n !== null; ) Zc(e, t, n), n = n.sibling;
  }
  function Zc(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
      Lt.onCommitFiberUnmount(lt, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        bt || Yi(n, t);
      case 6:
        var i = Nt, l = mn;
        Nt = null, qn(e, t, n), Nt = i, mn = l, Nt !== null && (mn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nt.removeChild(n.stateNode));
        break;
      case 18:
        Nt !== null && (mn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), jr(e)) : ll(Nt, n.stateNode));
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
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Hl(n, t, h), l = l.next;
          } while (l !== i);
        }
        qn(e, t, n);
        break;
      case 1:
        if (!bt && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (k) {
          ct(n, t, k);
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
  function qc(e) {
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
        Zc(u, h, l), Nt = null, mn = !1;
        var g = l.alternate;
        g !== null && (g.return = null), l.return = null;
      } catch ($) {
        ct(l, t, $);
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
        if (pn(t, e), wn(e), i & 4) {
          try {
            Vr(3, e, e.return), Zs(3, e);
          } catch (ge) {
            ct(e, e.return, ge);
          }
          try {
            Vr(5, e, e.return);
          } catch (ge) {
            ct(e, e.return, ge);
          }
        }
        break;
      case 1:
        pn(t, e), wn(e), i & 512 && n !== null && Yi(n, n.return);
        break;
      case 5:
        if (pn(t, e), wn(e), i & 512 && n !== null && Yi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ht(l, "");
          } catch (ge) {
            ct(e, e.return, ge);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, h = n !== null ? n.memoizedProps : u, k = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null) try {
            k === "input" && u.type === "radio" && u.name != null && we(l, u), Re(k, h);
            var $ = Re(k, u);
            for (h = 0; h < g.length; h += 2) {
              var Y = g[h], Z = g[h + 1];
              Y === "style" ? ln(l, Z) : Y === "dangerouslySetInnerHTML" ? qt(l, Z) : Y === "children" ? Ht(l, Z) : U(l, Y, Z, $);
            }
            switch (k) {
              case "input":
                Le(l, u);
                break;
              case "textarea":
                Ie(l, u);
                break;
              case "select":
                var Q = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var he = u.value;
                he != null ? rt(l, !!u.multiple, he, !1) : Q !== !!u.multiple && (u.defaultValue != null ? rt(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : rt(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Pr] = u;
          } catch (ge) {
            ct(e, e.return, ge);
          }
        }
        break;
      case 6:
        if (pn(t, e), wn(e), i & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (ge) {
            ct(e, e.return, ge);
          }
        }
        break;
      case 3:
        if (pn(t, e), wn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (ge) {
          ct(e, e.return, ge);
        }
        break;
      case 4:
        pn(t, e), wn(e);
        break;
      case 13:
        pn(t, e), wn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Xl = at())), i & 4 && qc(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (bt = ($ = bt) || Y, pn(t, e), bt = $) : pn(t, e), wn(e), i & 8192) {
          if ($ = e.memoizedState !== null, (e.stateNode.isHidden = $) && !Y && (e.mode & 1) !== 0) for (pe = e, Y = e.child; Y !== null; ) {
            for (Z = pe = Y; pe !== null; ) {
              switch (Q = pe, he = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, Q, Q.return);
                  break;
                case 1:
                  Yi(Q, Q.return);
                  var ke = Q.stateNode;
                  if (typeof ke.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, ke.props = t.memoizedProps, ke.state = t.memoizedState, ke.componentWillUnmount();
                    } catch (ge) {
                      ct(i, n, ge);
                    }
                  }
                  break;
                case 5:
                  Yi(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    id(Z);
                    continue;
                  }
              }
              he !== null ? (he.return = Q, pe = he) : id(Z);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (Y === null) {
                Y = Z;
                try {
                  l = Z.stateNode, $ ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = Z.stateNode, g = Z.memoizedProps.style, h = g != null && g.hasOwnProperty("display") ? g.display : null, k.style.display = Ce("display", h));
                } catch (ge) {
                  ct(e, e.return, ge);
                }
              }
            } else if (Z.tag === 6) {
              if (Y === null) try {
                Z.stateNode.nodeValue = $ ? "" : Z.memoizedProps;
              } catch (ge) {
                ct(e, e.return, ge);
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
        pn(t, e), wn(e), i & 4 && qc(e);
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
            i.flags & 32 && (Ht(l, ""), i.flags &= -33);
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
      } catch (g) {
        ct(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sm(e, t, n) {
    pe = e, td(e);
  }
  function td(e, t, n) {
    for (var i = (e.mode & 1) !== 0; pe !== null; ) {
      var l = pe, u = l.child;
      if (l.tag === 22 && i) {
        var h = l.memoizedState !== null || Xs;
        if (!h) {
          var k = l.alternate, g = k !== null && k.memoizedState !== null || bt;
          k = Xs;
          var $ = bt;
          if (Xs = h, (bt = g) && !$) for (pe = l; pe !== null; ) h = pe, g = h.child, h.tag === 22 && h.memoizedState !== null ? rd(l) : g !== null ? (g.return = h, pe = g) : rd(l);
          for (; u !== null; ) pe = u, td(u), u = u.sibling;
          pe = l, Xs = k, bt = $;
        }
        nd(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, pe = u) : nd(e);
    }
  }
  function nd(e) {
    for (; pe !== null; ) {
      var t = pe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              bt || Zs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !bt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : hn(t.type, n.memoizedProps);
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
                    Z !== null && jr(Z);
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
          bt || t.flags & 512 && Gl(t);
        } catch (Q) {
          ct(t, t.return, Q);
        }
      }
      if (t === e) {
        pe = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, pe = n;
        break;
      }
      pe = t.return;
    }
  }
  function id(e) {
    for (; pe !== null; ) {
      var t = pe;
      if (t === e) {
        pe = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, pe = n;
        break;
      }
      pe = t.return;
    }
  }
  function rd(e) {
    for (; pe !== null; ) {
      var t = pe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Zs(4, t);
            } catch (g) {
              ct(t, n, g);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (g) {
                ct(t, l, g);
              }
            }
            var u = t.return;
            try {
              Gl(t);
            } catch (g) {
              ct(t, u, g);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Gl(t);
            } catch (g) {
              ct(t, h, g);
            }
        }
      } catch (g) {
        ct(t, t.return, g);
      }
      if (t === e) {
        pe = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, pe = k;
        break;
      }
      pe = t.return;
    }
  }
  var wm = Math.ceil, qs = B.ReactCurrentDispatcher, Yl = B.ReactCurrentOwner, sn = B.ReactCurrentBatchConfig, Be = 0, gt = null, ht = null, Et = 0, Jt = 0, Ji = Qn(0), vt = 0, Kr = null, gi = 0, ea = 0, Jl = 0, Ur = null, Vt = null, Xl = 0, Xi = 1 / 0, $n = null, ta = !1, Zl = null, ei = null, na = !1, ti = null, ia = 0, Hr = 0, ql = null, ra = -1, sa = 0;
  function Ot() {
    return (Be & 6) !== 0 ? at() : ra !== -1 ? ra : ra = at();
  }
  function ni(e) {
    return (e.mode & 1) === 0 ? 1 : (Be & 2) !== 0 && Et !== 0 ? Et & -Et : am.transition !== null ? (sa === 0 && (sa = Xo()), sa) : (e = We, e !== 0 || (e = window.event, e = e === void 0 ? 16 : au(e.type)), e);
  }
  function vn(e, t, n, i) {
    if (50 < Hr) throw Hr = 0, ql = null, Error(o(185));
    pr(e, n, i), ((Be & 2) === 0 || e !== gt) && (e === gt && ((Be & 2) === 0 && (ea |= n), vt === 4 && ii(e, Et)), Kt(e, i), n === 1 && Be === 0 && (t.mode & 1) === 0 && (Xi = at() + 500, Ls && Jn()));
  }
  function Kt(e, t) {
    var n = e.callbackNode;
    ah(e, t);
    var i = ms(e, e === gt ? Et : 0);
    if (i === 0) n !== null && cs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && cs(n), t === 1) e.tag === 0 ? sm(ad.bind(null, e)) : Hu(ad.bind(null, e)), tm(function() {
        (Be & 6) === 0 && Jn();
      }), n = null;
      else {
        switch (Zo(i)) {
          case 1:
            n = gn;
            break;
          case 4:
            n = A;
            break;
          case 16:
            n = me;
            break;
          case 536870912:
            n = Gt;
            break;
          default:
            n = me;
        }
        n = md(n, sd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function sd(e, t) {
    if (ra = -1, sa = 0, (Be & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Zi() && e.callbackNode !== n) return null;
    var i = ms(e, e === gt ? Et : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = aa(e, i);
    else {
      t = i;
      var l = Be;
      Be |= 2;
      var u = od();
      (gt !== e || Et !== t) && ($n = null, Xi = at() + 500, xi(e, t));
      do
        try {
          Cm();
          break;
        } catch (k) {
          ld(e, k);
        }
      while (!0);
      kl(), qs.current = u, Be = l, ht !== null ? t = 0 : (gt = null, Et = 0, t = vt);
    }
    if (t !== 0) {
      if (t === 2 && (l = La(e), l !== 0 && (i = l, t = eo(e, l))), t === 1) throw n = Kr, xi(e, 0), ii(e, i), Kt(e, at()), n;
      if (t === 6) ii(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !Nm(l) && (t = aa(e, i), t === 2 && (u = La(e), u !== 0 && (i = u, t = eo(e, u))), t === 1)) throw n = Kr, xi(e, 0), ii(e, i), Kt(e, at()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Si(e, Vt, $n);
            break;
          case 3:
            if (ii(e, i), (i & 130023424) === i && (t = Xl + 500 - at(), 10 < t)) {
              if (ms(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Ot(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = al(Si.bind(null, e, Vt, $n), t);
              break;
            }
            Si(e, Vt, $n);
            break;
          case 4:
            if (ii(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var h = 31 - wt(i);
              u = 1 << h, h = t[h], h > l && (l = h), i &= ~u;
            }
            if (i = l, i = at() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * wm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = al(Si.bind(null, e, Vt, $n), i);
              break;
            }
            Si(e, Vt, $n);
            break;
          case 5:
            Si(e, Vt, $n);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Kt(e, at()), e.callbackNode === n ? sd.bind(null, e) : null;
  }
  function eo(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (xi(e, t).flags |= 256), e = aa(e, t), e !== 2 && (t = Vt, Vt = n, t !== null && to(t)), e;
  }
  function to(e) {
    Vt === null ? Vt = e : Vt.push.apply(Vt, e);
  }
  function Nm(e) {
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
    for (t &= ~Jl, t &= ~ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function ad(e) {
    if ((Be & 6) !== 0) throw Error(o(327));
    Zi();
    var t = ms(e, 0);
    if ((t & 1) === 0) return Kt(e, at()), null;
    var n = aa(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = La(e);
      i !== 0 && (t = i, n = eo(e, i));
    }
    if (n === 1) throw n = Kr, xi(e, 0), ii(e, t), Kt(e, at()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Si(e, Vt, $n), Kt(e, at()), null;
  }
  function no(e, t) {
    var n = Be;
    Be |= 1;
    try {
      return e(t);
    } finally {
      Be = n, Be === 0 && (Xi = at() + 500, Ls && Jn());
    }
  }
  function ji(e) {
    ti !== null && ti.tag === 0 && (Be & 6) === 0 && Zi();
    var t = Be;
    Be |= 1;
    var n = sn.transition, i = We;
    try {
      if (sn.transition = null, We = 1, e) return e();
    } finally {
      We = i, sn.transition = n, Be = t, (Be & 6) === 0 && Jn();
    }
  }
  function io() {
    Jt = Ji.current, nt(Ji);
  }
  function xi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, em(n)), ht !== null) for (n = ht.return; n !== null; ) {
      var i = n;
      switch (fl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ps();
          break;
        case 3:
          Wi(), nt(Dt), nt(Tt), El();
          break;
        case 5:
          wl(i);
          break;
        case 4:
          Wi();
          break;
        case 13:
          nt(ot);
          break;
        case 19:
          nt(ot);
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
    if (gt = e, ht = e = ri(e.current, null), Et = Jt = t, vt = 0, Kr = null, Jl = ea = gi = 0, Vt = Ur = null, vi !== null) {
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
  function ld(e, t) {
    do {
      var n = ht;
      try {
        if (kl(), Ks.current = Ws, Us) {
          for (var i = ut.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Us = !1;
        }
        if (yi = 0, yt = pt = ut = null, Fr = !1, Ir = 0, Yl.current = null, n === null || n.return === null) {
          vt = 1, Kr = t, ht = null;
          break;
        }
        e: {
          var u = e, h = n.return, k = n, g = t;
          if (t = Et, k.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var $ = g, Y = k, Z = Y.tag;
            if ((Y.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var Q = Y.alternate;
              Q ? (Y.updateQueue = Q.updateQueue, Y.memoizedState = Q.memoizedState, Y.lanes = Q.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var he = Ac(h);
            if (he !== null) {
              he.flags &= -257, Lc(he, h, k, u, t), he.mode & 1 && Pc(u, $, t), t = he, g = $;
              var ke = t.updateQueue;
              if (ke === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(g), t.updateQueue = ge;
              } else ke.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                Pc(u, $, t), ro();
                break e;
              }
              g = Error(o(426));
            }
          } else if (it && k.mode & 1) {
            var ft = Ac(h);
            if (ft !== null) {
              (ft.flags & 65536) === 0 && (ft.flags |= 256), Lc(ft, h, k, u, t), pl(Qi(g, k));
              break e;
            }
          }
          u = g = Qi(g, k), vt !== 4 && (vt = 2), Ur === null ? Ur = [u] : Ur.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var _ = _c(u, g, t);
                nc(u, _);
                break e;
              case 1:
                k = g;
                var N = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (ei === null || !ei.has(L)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var se = bc(u, k, t);
                  nc(u, se);
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
    var e = qs.current;
    return qs.current = Ws, e === null ? Ws : e;
  }
  function ro() {
    (vt === 0 || vt === 3 || vt === 2) && (vt = 4), gt === null || (gi & 268435455) === 0 && (ea & 268435455) === 0 || ii(gt, Et);
  }
  function aa(e, t) {
    var n = Be;
    Be |= 2;
    var i = od();
    (gt !== e || Et !== t) && ($n = null, xi(e, t));
    do
      try {
        Em();
        break;
      } catch (l) {
        ld(e, l);
      }
    while (!0);
    if (kl(), Be = n, qs.current = i, ht !== null) throw Error(o(261));
    return gt = null, Et = 0, vt;
  }
  function Em() {
    for (; ht !== null; ) ud(ht);
  }
  function Cm() {
    for (; ht !== null && !ds(); ) ud(ht);
  }
  function ud(e) {
    var t = hd(e.alternate, e, Jt);
    e.memoizedProps = e.pendingProps, t === null ? cd(e) : ht = t, Yl.current = null;
  }
  function cd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ym(n, t, Jt), n !== null) {
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
          vt = 6, ht = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ht = t;
        return;
      }
      ht = t = e;
    } while (t !== null);
    vt === 0 && (vt = 5);
  }
  function Si(e, t, n) {
    var i = We, l = sn.transition;
    try {
      sn.transition = null, We = 1, Tm(e, t, n, i);
    } finally {
      sn.transition = l, We = i;
    }
    return null;
  }
  function Tm(e, t, n, i) {
    do
      Zi();
    while (ti !== null);
    if ((Be & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (lh(e, u), e === gt && (ht = gt = null, Et = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || na || (na = !0, md(me, function() {
      return Zi(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = sn.transition, sn.transition = null;
      var h = We;
      We = 1;
      var k = Be;
      Be |= 4, Yl.current = null, xm(e, n), ed(n, e), Wh(rl), ks = !!il, rl = il = null, e.current = n, Sm(n), Aa(), Be = k, We = h, sn.transition = u;
    } else e.current = n;
    if (na && (na = !1, ti = e, ia = l), u = e.pendingLanes, u === 0 && (ei = null), hr(n.stateNode), Kt(e, at()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (ta) throw ta = !1, e = Zl, Zl = null, e;
    return (ia & 1) !== 0 && e.tag !== 0 && Zi(), u = e.pendingLanes, (u & 1) !== 0 ? e === ql ? Hr++ : (Hr = 0, ql = e) : Hr = 0, Jn(), null;
  }
  function Zi() {
    if (ti !== null) {
      var e = Zo(ia), t = sn.transition, n = We;
      try {
        if (sn.transition = null, We = 16 > e ? 16 : e, ti === null) var i = !1;
        else {
          if (e = ti, ti = null, ia = 0, (Be & 6) !== 0) throw Error(o(331));
          var l = Be;
          for (Be |= 4, pe = e.current; pe !== null; ) {
            var u = pe, h = u.child;
            if ((pe.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var g = 0; g < k.length; g++) {
                  var $ = k[g];
                  for (pe = $; pe !== null; ) {
                    var Y = pe;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vr(8, Y, u);
                    }
                    var Z = Y.child;
                    if (Z !== null) Z.return = Y, pe = Z;
                    else for (; pe !== null; ) {
                      Y = pe;
                      var Q = Y.sibling, he = Y.return;
                      if (Yc(Y), Y === $) {
                        pe = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = he, pe = Q;
                        break;
                      }
                      pe = he;
                    }
                  }
                }
                var ke = u.alternate;
                if (ke !== null) {
                  var ge = ke.child;
                  if (ge !== null) {
                    ke.child = null;
                    do {
                      var ft = ge.sibling;
                      ge.sibling = null, ge = ft;
                    } while (ge !== null);
                  }
                }
                pe = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, pe = h;
            else e: for (; pe !== null; ) {
              if (u = pe, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Vr(9, u, u.return);
              }
              var _ = u.sibling;
              if (_ !== null) {
                _.return = u.return, pe = _;
                break e;
              }
              pe = u.return;
            }
          }
          var N = e.current;
          for (pe = N; pe !== null; ) {
            h = pe;
            var L = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && L !== null) L.return = h, pe = L;
            else e: for (h = N; pe !== null; ) {
              if (k = pe, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zs(9, k);
                }
              } catch (je) {
                ct(k, k.return, je);
              }
              if (k === h) {
                pe = null;
                break e;
              }
              var se = k.sibling;
              if (se !== null) {
                se.return = k.return, pe = se;
                break e;
              }
              pe = k.return;
            }
          }
          if (Be = l, Jn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
            Lt.onPostCommitFiberRoot(lt, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        We = n, sn.transition = t;
      }
    }
    return !1;
  }
  function dd(e, t, n) {
    t = Qi(n, t), t = _c(e, t, 1), e = Zn(e, t, 1), t = Ot(), e !== null && (pr(e, 1, t), Kt(e, t));
  }
  function ct(e, t, n) {
    if (e.tag === 3) dd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        dd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ei === null || !ei.has(i))) {
          e = Qi(n, e), e = bc(t, e, 1), t = Zn(t, e, 1), e = Ot(), t !== null && (pr(t, 1, e), Kt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Mm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Ot(), e.pingedLanes |= e.suspendedLanes & n, gt === e && (Et & n) === n && (vt === 4 || vt === 3 && (Et & 130023424) === Et && 500 > at() - Xl ? xi(e, 0) : Jl |= n), Kt(e, t);
  }
  function fd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = hs, hs <<= 1, (hs & 130023424) === 0 && (hs = 4194304)));
    var n = Ot();
    e = Ln(e, t), e !== null && (pr(e, t, n), Kt(e, n));
  }
  function _m(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), fd(e, n);
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
    i !== null && i.delete(t), fd(e, n);
  }
  var hd;
  hd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Dt.current) Bt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Bt = !1, km(e, t, n);
      Bt = (e.flags & 131072) !== 0;
    }
    else Bt = !1, it && (t.flags & 1048576) !== 0 && Gu(t, Os, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Js(e, t), e = t.pendingProps;
        var l = zi(t, Tt.current);
        Gi(t, n), l = Ml(null, t, i, e, l, n);
        var u = _l();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, zt(i) ? (u = !0, As(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xl(t), l.updater = Qs, t.stateNode = l, l._reactInternals = t, Ol(t, i, e, n), t = Dl(null, t, i, !0, u, n)) : (t.tag = 0, it && u && dl(t), Rt(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Js(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Am(i), e = hn(i, e), l) {
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
              t = Oc(null, t, i, hn(i.type, e), n);
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
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Il(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Dc(e, t, i, l, n);
      case 3:
        e: {
          if (zc(t), e === null) throw Error(o(387));
          i = t.pendingProps, u = t.memoizedState, l = u.element, tc(e, t), Bs(t, i, null, n);
          var h = t.memoizedState;
          if (i = h.element, u.isDehydrated) if (u = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Qi(Error(o(423)), t), t = Bc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Qi(Error(o(424)), t), t = Bc(e, t, i, n, l);
            break e;
          } else for (Yt = Wn(t.stateNode.containerInfo.firstChild), Qt = t, it = !0, fn = null, n = qu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ki(), i === l) {
              t = On(e, t, n);
              break e;
            }
            Rt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return rc(t), e === null && ml(t), i = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = l.children, sl(i, l) ? h = null : u !== null && sl(i, u) && (t.flags |= 32), Ic(e, t), Rt(e, t, h, n), t.child;
      case 6:
        return e === null && ml(t), null;
      case 13:
        return Vc(e, t, n);
      case 4:
        return Sl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ui(t, null, i, n) : Rt(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Rc(e, t, i, l, n);
      case 7:
        return Rt(e, t, t.pendingProps, n), t.child;
      case 8:
        return Rt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Rt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, u = t.memoizedProps, h = l.value, Ze(Is, i._currentValue), i._currentValue = h, u !== null) if (dn(u.value, h)) {
            if (u.children === l.children && !Dt.current) {
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
                    g = Rn(-1, n & -n), g.tag = 2;
                    var $ = u.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var Y = $.pending;
                      Y === null ? g.next = g : (g.next = Y.next, Y.next = g), $.pending = g;
                    }
                  }
                  u.lanes |= n, g = u.alternate, g !== null && (g.lanes |= n), gl(
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
          Rt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = nn(l), i = i(l), t.flags |= 1, Rt(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = hn(i, t.pendingProps), l = hn(i.type, l), Oc(e, t, i, l, n);
      case 15:
        return $c(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : hn(i, l), Js(e, t), t.tag = 1, zt(i) ? (e = !0, As(t)) : e = !1, Gi(t, n), Tc(t, i, l), Ol(t, i, l, n), Dl(null, t, i, !0, e, n);
      case 19:
        return Uc(e, t, n);
      case 22:
        return Fc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function md(e, t) {
    return St(e, t);
  }
  function Pm(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(e, t, n, i) {
    return new Pm(e, t, n, i);
  }
  function so(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Am(e) {
    if (typeof e == "function") return so(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ee) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function ri(e, t) {
    var n = e.alternate;
    return n === null ? (n = an(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function la(e, t, n, i, l, u) {
    var h = 2;
    if (i = e, typeof e == "function") so(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case O:
        return wi(n.children, l, u, t);
      case F:
        h = 8, l |= 8;
        break;
      case re:
        return e = an(12, n, t, l | 2), e.elementType = re, e.lanes = u, e;
      case J:
        return e = an(13, n, t, l), e.elementType = J, e.lanes = u, e;
      case ce:
        return e = an(19, n, t, l), e.elementType = ce, e.lanes = u, e;
      case le:
        return oa(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ee:
            h = 10;
            break e;
          case xe:
            h = 9;
            break e;
          case Ee:
            h = 11;
            break e;
          case H:
            h = 14;
            break e;
          case ue:
            h = 16, i = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = an(h, n, t, l), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function wi(e, t, n, i) {
    return e = an(7, e, i, t), e.lanes = n, e;
  }
  function oa(e, t, n, i) {
    return e = an(22, e, i, t), e.elementType = le, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ao(e, t, n) {
    return e = an(6, e, null, t), e.lanes = n, e;
  }
  function lo(e, t, n) {
    return t = an(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Lm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ra(0), this.expirationTimes = Ra(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ra(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function oo(e, t, n, i, l, u, h, k, g) {
    return e = new Lm(e, t, n, k, g), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = an(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xl(u), e;
  }
  function Rm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: I, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function pd(e) {
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
      if (zt(n)) return Ku(e, n, t);
    }
    return t;
  }
  function vd(e, t, n, i, l, u, h, k, g) {
    return e = oo(n, i, !0, e, l, u, h, k, g), e.context = pd(null), n = e.current, i = Ot(), l = ni(n), u = Rn(i, l), u.callback = t ?? null, Zn(n, u, l), e.current.lanes = l, pr(e, l, i), Kt(e, i), e;
  }
  function ua(e, t, n, i) {
    var l = t.current, u = Ot(), h = ni(l);
    return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rn(u, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Zn(l, t, h), e !== null && (vn(e, l, h, u), zs(e, l, h)), h;
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
  function Om() {
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
      ji(function() {
        ua(null, e, null, null);
      }), t[_n] = null;
    }
  };
  function da(e) {
    this._internalRoot = e;
  }
  da.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = tu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && ru(e);
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
  function $m(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function() {
          var $ = ca(h);
          u.call($);
        };
      }
      var h = vd(t, i, e, 0, null, !1, !1, "", gd);
      return e._reactRootContainer = h, e[_n] = h.current, _r(e.nodeType === 8 ? e.parentNode : e), ji(), h;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var $ = ca(g);
        k.call($);
      };
    }
    var g = oo(e, 0, !1, null, null, !1, !1, "", gd);
    return e._reactRootContainer = g, e[_n] = g.current, _r(e.nodeType === 8 ? e.parentNode : e), ji(function() {
      ua(t, g, n, i);
    }), g;
  }
  function ha(e, t, n, i, l) {
    var u = n._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var g = ca(h);
          k.call(g);
        };
      }
      ua(t, h, e, l);
    } else h = $m(n, t, e, l, i);
    return ca(h);
  }
  qo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = mr(t.pendingLanes);
          n !== 0 && (Oa(t, n | 1), Kt(t, at()), (Be & 6) === 0 && (Xi = at() + 500, Jn()));
        }
        break;
      case 13:
        ji(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = Ot();
            vn(i, e, 1, l);
          }
        }), uo(e, 1);
    }
  }, $a = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Ot();
        vn(t, e, 134217728, n);
      }
      uo(e, 134217728);
    }
  }, eu = function(e) {
    if (e.tag === 13) {
      var t = ni(e), n = Ln(e, t);
      if (n !== null) {
        var i = Ot();
        vn(n, e, t, i);
      }
      uo(e, t);
    }
  }, tu = function() {
    return We;
  }, nu = function(e, t) {
    var n = We;
    try {
      return We = e, t();
    } finally {
      We = n;
    }
  }, on = function(e, t, n) {
    switch (t) {
      case "input":
        if (Le(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = bs(i);
              if (!l) throw Error(o(90));
              ne(i), Le(i, l);
            }
          }
        }
        break;
      case "textarea":
        Ie(e, n);
        break;
      case "select":
        t = n.value, t != null && rt(e, !!n.multiple, t, !1);
    }
  }, ss = no, cr = ji;
  var Fm = { usingClientEntryPoint: !1, Events: [Ar, Ii, bs, un, Tn, no] }, Gr = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Im = { bundleType: Gr.bundleType, version: Gr.version, rendererPackageName: Gr.rendererPackageName, rendererConfig: Gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: B.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = os(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Gr.findFiberByHostInstance || Om, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ma.isDisabled && ma.supportsFiber) try {
      lt = ma.inject(Im), Lt = ma;
    } catch {
    }
  }
  return Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm, Ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fo(t)) throw Error(o(200));
    return Rm(e, t, null, n);
  }, Ut.createRoot = function(e, t) {
    if (!fo(e)) throw Error(o(299));
    var n = !1, i = "", l = yd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = oo(e, 1, !1, null, null, n, !1, i, l), e[_n] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new co(t);
  }, Ut.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = os(t), e = e === null ? null : e.stateNode, e;
  }, Ut.flushSync = function(e) {
    return ji(e);
  }, Ut.hydrate = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !0, n);
  }, Ut.hydrateRoot = function(e, t, n) {
    if (!fo(e)) throw Error(o(405));
    var i = n != null && n.hydratedSources || null, l = !1, u = "", h = yd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (h = n.onRecoverableError)), t = vd(t, null, e, 1, n ?? null, l, !1, u, h), e[_n] = t.current, _r(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new da(t);
  }, Ut.render = function(e, t, n) {
    if (!fa(t)) throw Error(o(200));
    return ha(null, e, t, !1, n);
  }, Ut.unmountComponentAtNode = function(e) {
    if (!fa(e)) throw Error(o(40));
    return e._reactRootContainer ? (ji(function() {
      ha(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Ut.unstable_batchedUpdates = no, Ut.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!fa(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ha(e, t, n, !1, i);
  }, Ut.version = "18.3.1-next-f1338f8080-20240426", Ut;
}
var Td;
function Wm() {
  if (Td) return po.exports;
  Td = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), po.exports = Gm(), po.exports;
}
var Md;
function Qm() {
  if (Md) return pa;
  Md = 1;
  var s = Wm();
  return pa.createRoot = s.createRoot, pa.hydrateRoot = s.hydrateRoot, pa;
}
var Ym = Qm();
const Jm = (() => {
  const s = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), f = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], E = ["e", "B", "G", "D", "A", "E"], b = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], j = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], C = {
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
  }, R = 26, P = 72, w = 30, S = 54, V = 34, T = 11, U = (R + P) / 2, B = w + (c.length - 1) * V + 30, z = (K) => P + K * S, I = (K) => K === 0 ? U : z(K) - S / 2, O = (K) => w + K * V;
  function F(K, te, X) {
    const ve = a.indexOf(s[K][0]) + Number(X.slice(-1)) - 1, D = ve % a.length, ne = o[D] + 12 * Math.floor(ve / a.length), ae = K + te - ne;
    return a[D] + (ae < 0 ? "♭" : "♯").repeat(Math.abs(ae));
  }
  function re(K) {
    return [...K.base, ...K.add].sort((te, X) => te[0] - X[0]);
  }
  function ee(K, te, X) {
    const ve = te + (X ? 1 : 0), D = m[ve % m.length], ne = Math.min(...D.map(([Le]) => Le)), ae = Math.max(...D.map(([, Le]) => Le));
    let we = (K - d % 12 + 12) % 12 - (X ? 8 : 5) + 12 * Math.floor(ve / m.length);
    return ne + we < 0 && (we += 12), ae + we > f.pentatonic && (we -= 12), {
      strings: D.map((Le) => Le.map((Je) => Je + we)),
      start: ne + we,
      end: ae + we
    };
  }
  function xe(K, te, X) {
    const ve = X[te], D = (K + ve - d % 12 + 12) % 12, ne = d + D - ve, ae = c.map((de, Ne) => {
      const we = te + (c.length - 1 - Ne) * 3;
      return [we, we + 1, we + 2].map((Le) => {
        const Je = Math.floor(Le / X.length), He = X[Le % X.length];
        return ne + He + 12 * Je - de;
      });
    });
    return {
      strings: ae,
      start: Math.min(...ae.map((de) => de[0])),
      end: Math.max(...ae.map((de) => de.at(-1)))
    };
  }
  function Ee(K, te) {
    const X = [], ve = Math.ceil(-K.end / 12) * 12;
    for (let ne = ve; K.start + ne <= te; ne += 12) {
      const ae = K.strings.map((Ne) => Ne.map((we) => we + ne).filter((we) => we >= 0 && we <= te)), de = ae.flat();
      X.push({
        strings: ae,
        start: Math.min(...de),
        end: Math.max(...de),
        partial: K.start + ne < 0 || K.end + ne > te
      });
    }
    const D = X.filter((ne) => !ne.partial);
    return D.length ? D : X;
  }
  function J(K) {
    return re(K).length === p;
  }
  function ce(K, te, X) {
    const ve = J(te);
    K.querySelector('[value="3nps"]').disabled = !ve, K.value = ve ? X ?? "3nps" : "pentatonic";
  }
  function H(K, te, X, ve, D) {
    const ne = re(te).map(([ae]) => ae);
    return ve.map((ae) => {
      const de = ae - 1, Ne = X === "3nps" ? xe(K, de, ne) : ee(K, de, te.base === j), we = D === void 0 ? [Ne] : Ee(Ne, D);
      return { number: ae, positions: we };
    });
  }
  function ue(K, te) {
    const X = K.getBoundingClientRect(), ve = K.querySelectorAll(te);
    let D = 1 / 0;
    ve.forEach((ne) => {
      const ae = ne.getBoundingClientRect();
      let de = 0;
      ae.left < X.left ? de = ae.left - X.left - 8 : ae.right > X.right && (de = ae.right - X.right + 8), Math.abs(de) < Math.abs(D) && (D = de);
    }), Number.isFinite(D) && (K.scrollLeft += D);
  }
  function le(K, te = !1) {
    const X = K === "3nps" ? p : m.length;
    return Array.from({ length: X }, (ve, D) => {
      const ne = D + 1;
      return '<label class="box-toggle" data-box="' + ne + '"><input type="checkbox" value="' + ne + '"' + (te && D === 0 ? " checked" : "") + "> Boksi " + ne + "</label>";
    }).join("");
  }
  function W(K, te) {
    const X = re(te), ve = new Map(X.map(([ne, ae]) => [ne, F(K, ne, ae)])), D = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return X.flatMap(([ne, ae]) => D.flatMap(({ suffix: de, base: Ne }) => {
      const we = Ne.map(([Le]) => ve.get((ne + Le) % 12));
      return we.every(Boolean) ? {
        root: (K + ne) % 12,
        degree: Number(String(ae).replace(/\D/g, "")),
        name: we[0] + de,
        notes: we,
        base: Ne,
        add: []
      } : [];
    }));
  }
  function oe(K, te) {
    const X = K.base.map(([ne]) => (K.root + ne) % 12), ve = c.map((ne) => {
      const ae = [];
      for (let de = 0; de <= te; de++) {
        const Ne = (ne + de) % 12;
        X.includes(Ne) && ae.push({ fret: de, pitch: Ne });
      }
      return ae;
    }), D = [];
    for (let ne = 0; ne <= ve.length - 3; ne++)
      for (const ae of ve[ne])
        for (const de of ve[ne + 1])
          if (ae.pitch !== de.pitch)
            for (const Ne of ve[ne + 2]) {
              if (Ne.pitch === ae.pitch || Ne.pitch === de.pitch) continue;
              const we = [ae.fret, de.fret, Ne.fret], Le = Math.min(...we), Je = Math.max(...we);
              if (Je - Le > 3) continue;
              const He = Array(c.length).fill(null);
              He.splice(ne, 3, ...we), D.push({ strings: He, low: Le, high: Je });
            }
    return D.sort((ne, ae) => ne.high - ae.high || ne.low - ae.low);
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
  function y(K, te) {
    const X = q[K + ":" + te];
    if (X) return { frets: X, barre: null };
    let ve = null;
    return x.forEach(({ string: D, openPC: ne, shapes: ae }) => {
      const de = ae[te];
      if (!de) return;
      let Ne = (K - ne + 12) % 12;
      if (Ne + Math.min(...de.filter((Je) => Je !== null)) < 0 && (Ne += 12), ve && ve.fret <= Ne) return;
      const we = de.map((Je) => Je === null ? null : Ne + Je), Le = Ne > 0 && de.at(-1) === 0 ? { fret: Ne, from: D, to: de.length - 1 } : null;
      ve = { fret: Ne, frets: we, barre: Le };
    }), ve && { frets: ve.frets, barre: ve.barre };
  }
  function ie(K, { frets: te, barre: X }, ve) {
    const we = [...c].reverse(), Le = te.filter((Ie) => Ie > 0), He = !Le.length || Math.max(...Le) <= 4 && (te.includes(0) || Math.min(...Le) === 1) ? 1 : Math.min(...Le), qe = (Ie) => 24 + Ie * 14, rt = (Ie) => 30 + (Ie - He) * 18 + 18 / 2, kt = 102;
    let Qe = '<svg class="chord-svg" viewBox="0 0 108 ' + (kt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ve + "-ote paksusta kielestä ohueen: " + te.map((Ie) => Ie ?? "x").join(" ") + '">';
    for (let Ie = 0; Ie <= 4; Ie++)
      Qe += '<line class="' + (Ie === 0 && He === 1 ? "nut" : "fret") + '" x1="' + qe(0) + '" y1="' + (30 + Ie * 18) + '" x2="' + qe(5) + '" y2="' + (30 + Ie * 18) + '"/>';
    return te.forEach((Ie, Xe) => {
      Qe += '<line class="string" x1="' + qe(Xe) + '" y1="30" x2="' + qe(Xe) + '" y2="' + kt + '"/>';
    }), He > 1 && (Qe += '<text class="fret-label" x="15" y="' + (rt(He) + 4) + '">' + He + "</text>"), X && (Qe += '<rect class="barre" x="' + (qe(X.from) - 6.5) + '" y="' + (rt(X.fret) - 6.5) + '" width="' + ((X.to - X.from) * 14 + 13) + '" height="13" rx="6.5"/>'), te.forEach((Ie, Xe) => {
      if (Ie === null) {
        Qe += '<text class="marker" x="' + qe(Xe) + '" y="22">×</text>';
        return;
      }
      const mt = (we[Xe] + Ie) % 12 === K;
      if (Ie === 0) {
        Qe += '<circle class="open' + (mt ? " root-open" : "") + '" cx="' + qe(Xe) + '" cy="18" r="4.5"/>';
        return;
      }
      X && Ie === X.fret && Xe >= X.from && Xe <= X.to && !mt || (Qe += '<circle class="' + (mt ? "root" : "tone") + '" cx="' + qe(Xe) + '" cy="' + rt(Ie) + '" r="6.5"/>');
    }), Qe + "</svg>";
  }
  function fe(K, te) {
    const X = new URLSearchParams(location.search), ve = s.indexOf(X.get("toonikka")), D = X.get("asteikko");
    return {
      rootPC: ve === -1 ? K : ve,
      scaleId: Object.hasOwn(C, D) ? D : te
    };
  }
  function Se(K, te, X) {
    return K + "?" + new URLSearchParams({ toonikka: s[te], asteikko: X });
  }
  function G(K, te, X, {
    boxes: ve = [],
    onlyBoxNotes: D = !1,
    automatic: ne = !0,
    focusDegree: ae = "",
    grip: de = null,
    barre: Ne = null,
    label: we = s[K] + " " + te.name,
    notes: Le = null,
    targets: Je = !1,
    muteFret: He = null
  } = {}) {
    const qe = z(X), rt = qe + 48, kt = rt + 28, Qe = w - 14, Ie = O(c.length - 1) + 14, Xe = Ie - Qe, mt = ne ? 680 : Math.ceil(kt * 0.64), Zt = ve.flatMap((_e) => _e.positions), Ft = {};
    te.base.forEach(([_e, be]) => Ft[(K + _e) % 12] = { deg: be, added: !1 }), te.add.forEach(([_e, be]) => Ft[(K + _e) % 12] = { deg: be, added: !0 });
    const qt = c.map((_e, be) => !!de && de[be] === null), Ht = !!de && He !== null, Pt = b.filter((_e, be) => qt[be]).reverse(), yn = we + ". " + X + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Pt.length ? " Soittamatta jäävät kielet: " + Pt.join(", ") + "." : "");
    let Ce = '<svg viewBox="0 0 ' + kt + " " + B + '" style="min-width:' + mt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Je ? "group" : "img") + '" aria-label="' + yn + '">';
    Ce += '<rect x="' + R + '" y="' + Qe + '" width="' + (P - R) + '" height="' + Xe + '" rx="6" fill="#2a2338"/>', Ce += '<rect x="' + P + '" y="' + Qe + '" width="' + (qe - P) + '" height="' + Xe + '" fill="#231a12"/>', Ce += '<rect x="' + qe + '" y="' + Qe + '" width="' + (kt - qe - 4) + '" height="' + Xe + '" rx="8" fill="#32251e"/>';
    for (let _e = 1; _e <= X; _e++)
      Ce += '<line x1="' + z(_e) + '" y1="' + Qe + '" x2="' + z(_e) + '" y2="' + Ie + '" stroke="#6f5b47" stroke-width="2"/>';
    Ce += '<rect x="' + (P - 3) + '" y="' + Qe + '" width="6" height="' + Xe + '" rx="2" fill="#d8cbb6"/>', Ce += '<rect x="' + (rt - 11) + '" y="' + (Qe + 3) + '" width="22" height="' + (Xe - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', Ce += '<rect x="' + (rt - 4) + '" y="' + (Qe + 7) + '" width="3" height="' + (Xe - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const ln = (Qe + Ie) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((_e) => _e <= X).forEach((_e) => Ce += '<circle cx="' + I(_e) + '" cy="' + ln + '" r="5.5" fill="#7a6550"/>');
    for (let _e = 12; _e <= X; _e += 12)
      Ce += '<circle cx="' + I(_e) + '" cy="' + (ln - V) + '" r="5.5" fill="#7a6550"/>', Ce += '<circle cx="' + I(_e) + '" cy="' + (ln + V) + '" r="5.5" fill="#7a6550"/>';
    Ce += '<text x="' + U + '" y="' + (B - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', Ce += '<text x="' + P + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', Ce += '<text x="' + rt + '" y="' + (B - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let _e = 1; _e <= X; _e++)
      Ce += '<text x="' + I(_e) + '" y="' + (B - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + _e + "</text>";
    if (ve.forEach(({ number: _e, positions: be }) => {
      be.forEach((Re) => {
        const Ge = Re.partial ? "box-highlight box-partial" : "box-highlight";
        Ce += '<g class="' + Ge + '" data-box="' + _e + '" aria-hidden="true">';
        const st = Re.strings.find((xt) => xt.length), on = (I(st[0]) + I(st.at(-1))) / 2;
        Ce += '<text class="box-number" x="' + on + '" y="12">' + _e + "</text>", Re.strings.forEach((xt, At) => {
          if (!xt.length) return;
          const Cn = I(xt[0]) - 16, un = I(xt.at(-1)) - I(xt[0]) + 32;
          Ce += '<rect class="box-band" x="' + Cn + '" y="' + (O(At) - 14) + '" width="' + un + '" height="28" rx="14"/>';
        }), Ce += "</g>";
      });
    }), c.forEach((_e, be) => {
      const Re = 1 + be * 0.45, Ge = O(be), st = qt[be] && !Ht;
      st ? Ce += '<text class="muted-mark" x="' + U + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : qt[be] && He === 0 || (Ce += '<line x1="' + (R + 4) + '" y1="' + Ge + '" x2="' + (P - 4) + '" y2="' + Ge + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Ce += "<g" + (st ? ' opacity=".35"' : "") + ">", Ce += '<line x1="' + P + '" y1="' + Ge + '" x2="' + (rt + 5) + '" y2="' + Ge + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', Ce += '<circle cx="' + (rt + 5) + '" cy="' + Ge + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', Ce += "</g>", Ce += '<text x="13" y="' + (Ge + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + E[be] + "</text>";
    }), de && Ne && Ne.fret >= 1 && Ne.fret <= X) {
      const _e = O(Ne.from), be = O(Ne.to), Re = Math.min(_e, be) - 6, Ge = Math.max(_e, be) + 6;
      Ce += '<rect class="barre-indicator" x="' + (I(Ne.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Ge - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Je && (Ce += '<g class="fret-targets">', c.forEach((_e, be) => {
      for (let Re = 0; Re <= X; Re++) {
        const Ge = Re ? b[be] + "-kieli, " + Re + ". nauha" : "vapaa " + b[be] + "-kieli", st = Re ? S : P - R - 6;
        Ce += '<rect class="fret-target" role="button" tabindex="0" data-string="' + be + '" data-fret="' + Re + '" data-midi="' + (_e + Re) + '" aria-label="' + Ge + '" x="' + (I(Re) - st / 2) + '" y="' + (O(be) - V / 2) + '" width="' + st + '" height="' + V + '" fill="transparent"/>';
      }
    }), Ce += "</g>"), (Le ?? []).forEach(({ string: _e, fret: be, label: Re, kind: Ge }) => {
      Ce += '<g class="octave-note octave-' + Ge + '">', Ce += '<circle cx="' + I(be) + '" cy="' + O(_e) + '" r="' + T + '"/>', Ce += '<text x="' + I(be) + '" y="' + (O(_e) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", Ce += "</g>";
    }), de && (Ce += '<g class="grip-notes">'), (Le ? [] : c).forEach((_e, be) => {
      for (let Re = 0; Re <= X; Re++) {
        const Ge = (_e + Re) % 12;
        if (!(Ge in Ft) || de && de[be] !== Re || D && !Zt.some(({ strings: un }) => {
          const Tn = un[be];
          return Tn.length > 0 && Re >= Tn[0] && Re <= Tn.at(-1);
        })) continue;
        const st = Ft[Ge], on = st.deg === "1", xt = st.added ? "#f0a13c" : on ? "#4b2fd6" : "#6d4aff", At = st.added ? "#1a1430" : "#fff";
        st.deg === ae && (Ce += '<circle class="focus-note" cx="' + I(Re) + '" cy="' + O(be) + '" r="14.5"/>');
        const Cn = de ? ' data-string="' + (be + 1) + '" data-fret="' + Re + '" data-degree="' + st.deg + '"' : "";
        Ce += "<circle" + Cn + ' cx="' + I(Re) + '" cy="' + O(be) + '" r="' + T + '" fill="' + xt + '" stroke="' + (on ? "#fff" : "#1a1430") + '" stroke-width="' + (on ? 2.5 : 1) + '"/>', Ce += '<text x="' + I(Re) + '" y="' + (O(be) + 3.5) + '" font-size="' + (st.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + At + '" text-anchor="middle">' + st.deg + "</text>";
      }
    }), de && (Ce += "</g>"), Ht && qt.forEach((_e, be) => {
      if (!_e) return;
      const Re = I(He), Ge = O(be);
      Ce += '<g class="muted-mark grip-mute" data-string="' + (be + 1) + '" data-fret="' + He + '">', Ce += '<circle cx="' + Re + '" cy="' + Ge + '" r="9" fill="' + (He === 0 ? "#2a2338" : "#231a12") + '"/>', Ce += '<text x="' + Re + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Ce += "</g>";
    }), Ce += "</svg>", Ce;
  }
  return {
    CHROM: s,
    OPEN_PITCHES: c,
    PENT_MAJ: j,
    SCALES: C,
    noteName: F,
    scaleNotes: re,
    scaleTriads: W,
    triadGrips: oe,
    chordGrip: y,
    renderChordDiagram: ie,
    selectionFromURL: fe,
    selectionHref: Se,
    renderBoard: G,
    BOX_FRETS: f,
    supportsThreeNoteBoxes: J,
    syncBoxSystem: ce,
    fingeringBoxes: H,
    boxOptions: le,
    revealPositions: ue
  };
})();
globalThis.MusicMapFretboard = Jm;
function yo(s) {
  return 440 * Math.pow(2, (s - 69) / 12);
}
function Xm(s) {
  return 69 + 12 * Math.log2(s / 440);
}
function Zm(s) {
  const a = Xm(s), o = Math.round(a), c = (a - o) * 100;
  return { midi: o, cents: c };
}
const De = globalThis.MusicMapFretboard, Ve = (s) => (s % 12 + 12) % 12, qm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], ep = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ae = (s, a = !1, o = !1) => (a ? ep : qm)[Ve(s)] + (o ? Math.floor(s / 12) - 1 : ""), li = (s) => De.CHROM[Ve(s)], Zr = (s, a, o) => De.noteName(Ve(s), a, o);
function tp(s, a) {
  const o = Math.floor(s / 12) - 1;
  return a[0] === "B" && Ve(s) < 2 ? o - 1 : a[0] === "C" && Ve(s) > 9 ? o + 1 : o;
}
const Xt = ["ohut E", "B", "G", "D", "A", "paksu E"], Ho = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], gf = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], np = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ci = (s) => s === 0 ? "vapaa kieli" : `${s}. nauha`, Fe = (s, a) => ({ string: s, fret: a, midi: De.OPEN_PITCHES[s] + a });
function or(s, a, o) {
  return [...s].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, o - a + 1) }, (d, f) => Fe(c, a + f)));
}
const Ue = (s) => `${s.string}:${s.fret}`, Ei = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, jf = (s, a) => a === "maj" ? `${li(s)}-duurisointu` : a === "min" ? `${li(s)}-mollisointu` : `${li(s)}7-sointu`, qr = [
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
function xf(s, a) {
  const o = _d[a] ?? _d.E, c = Ve(s - o.root);
  return o.frets.flatMap((d, f) => d === null ? [] : [Fe(f, d + c)]);
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
}, ai = (s, a, o, c) => typeof s == "number" && Number.isFinite(s) ? Math.max(a, Math.min(o, s)) : c, Nn = (s, a, o) => a.includes(s) ? s : o;
function Ea(s) {
  const a = { ...ga };
  a.mode = Nn(s.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(s.strings) ? [...new Set(s.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, c) => o - c) : a.strings, a.strings.length || (a.strings = [...ga.strings]), a.min = Math.round(ai(s.min, 0, 24, a.min)), a.max = Math.round(ai(s.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof s[o] == "boolean" && (a[o] = s[o]);
  return a.check = Nn(s.check, ["class", "pitch"], a.check), a.input = Nn(s.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(s.rounds) ? s.rounds : a.rounds, a.root = Math.round(ai(s.root, 0, 11, a.root)), a.scale = typeof s.scale == "string" && Object.hasOwn(De.SCALES, s.scale) ? s.scale : a.scale, a.box = Math.round(ai(s.box, 0, 5, a.box)), a.order = Nn(s.order, ["random", "up", "down"], a.order), a.chord = Nn(s.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = Nn(s.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = Nn(s.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(s.intervals) ? [...new Set(s.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, c) => o - c) : a.intervals, a.intervals.length || (a.intervals = [...ga.intervals]), a.direction = Nn(s.direction, ["up", "down", "both"], a.direction), a.hints = Nn(s.hints, ["off", "always", "fade"], a.hints), a.activity = Nn(s.activity, ["play", "degree"], a.activity), a.minRms = ai(s.minRms, 1e-3, 0.15, a.minRms), a.clarity = ai(s.clarity, 0.85, 0.99, a.clarity), a.stability = ai(s.stability, 120, 800, a.stability), a.cents = ai(s.cents, 10, 45, a.cents), a.device = typeof s.device == "string" ? s.device.slice(0, 256) : "", a;
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
    const d = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), f = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(De.CHROM.indexOf(f), p.indexOf(f), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(f));
    m >= 0 && (c.root = m);
  }
  return Ea(c);
}
function rp(s) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: s.mode,
    toonikka: De.CHROM[s.root],
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
const Ti = (s) => s.mode === "ear-note" ? "note" : ["scale", "chord"].includes(s.mode) && s.activity === "degree" ? "degree" : s.input, Fn = (s) => s.mode === "scale" && s.order !== "random", Sf = (s) => ["note", "degree"].includes(Ti(s)) ? "class" : Fn(s) ? "pitch" : s.check, va = (s) => Ti(s) === "mic", bd = "musiikin-kartta:harjoittelu", wf = 3, Mo = () => ({ version: wf, settings: { ...ga }, stats: {}, recent: [], sessions: [] }), Nf = (s) => `${s.input}:${s.check}:${s.hint ? "guided" : "solo"}:${s.item}`, kn = (s) => typeof s == "number" && Number.isFinite(s) && s >= 0;
function sp(s) {
  return !!s && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => kn(s[a])) && s.correct <= s.attempts && (s.errors === void 0 || kn(s.errors)) && (s.ema === void 0 || kn(s.ema) && s.ema <= 1) && (s.emaMs === void 0 || kn(s.emaMs));
}
function ap(s) {
  return !!s && typeof s.id == "string" && kn(s.count) && kn(s.first) && s.first <= s.count && kn(s.ms) && kn(s.at) && (s.solo === void 0 || kn(s.solo) && s.solo <= s.count) && (s.soloFirst === void 0 || kn(s.soloFirst) && s.soloFirst <= (s.solo ?? s.count));
}
function Pd(s) {
  if (!s) return Mo();
  const a = JSON.parse(s);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !sp(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !kn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !ap(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, c = Ea(a.settings ?? {}), d = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const f = {
    version: wf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (f.notice = "hints-default"), f;
}
const Ad = 2500, lp = 8e3, Ld = 0.3, es = (s) => s.ema ?? s.correct / s.attempts, ts = (s) => s.emaMs ?? s.totalMs / s.attempts;
function Go(s) {
  if (!s?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (ts(s) - Ad) / (lp - Ad)));
  return es(s) * 0.65 + a * 0.35;
}
function op(s) {
  return !s || s.attempts < 3 ? 3 : 0.25 + (1 - Go(s)) * 3;
}
class Rd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Pd(a?.getItem(bd) ?? null);
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
    const o = Nf(a), c = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), f = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? es(c) + Ld * (d - es(c)) : d,
      emaMs: c.attempts ? ts(c) + Ld * (a.ms - ts(c)) : a.ms
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
    this.data = { ...Mo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const up = 4e3, Od = 12, cp = 1500;
function dp(s, a) {
  const o = s.left + s.stickyLeft, c = s.right;
  let d = 0;
  if (a.left < o ? d = a.left - o - Od : a.right > c && (d = a.right - c + Od), d === 0) return null;
  const f = Math.max(0, Math.min(s.maxScroll, s.scrollLeft + d));
  return Math.abs(f - s.scrollLeft) < 1 ? null : f;
}
function fp(s, a) {
  return a.right <= s.left + s.stickyLeft || a.left >= s.right;
}
function Ef(s, a, o, { stickySelector: c, enabled: d = !0, playback: f } = {}) {
  const p = M.useRef(0), m = M.useRef(!1), E = M.useRef(""), b = M.useRef(0), v = M.useRef(f);
  M.useEffect(() => {
    const j = s.current;
    if (!j || !d) return;
    const C = () => {
      p.current = Date.now() + up;
    }, R = () => {
      m.current = !0, C();
    }, P = () => {
      m.current && (m.current = !1, C());
    }, w = (S) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(S.key) && C();
    };
    return j.addEventListener("pointerdown", R, { passive: !0 }), j.addEventListener("touchstart", R, { passive: !0 }), j.addEventListener("wheel", C, { passive: !0 }), j.addEventListener("keydown", w), window.addEventListener("pointerup", P, { passive: !0 }), window.addEventListener("pointercancel", P, { passive: !0 }), window.addEventListener("touchend", P, { passive: !0 }), window.addEventListener("touchcancel", P, { passive: !0 }), () => {
      j.removeEventListener("pointerdown", R), j.removeEventListener("touchstart", R), j.removeEventListener("wheel", C), j.removeEventListener("keydown", w), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), window.removeEventListener("touchend", P), window.removeEventListener("touchcancel", P);
    };
  }, [s, d]), M.useLayoutEffect(() => {
    const j = f !== void 0 && !!f && f !== v.current;
    v.current = f, j && !m.current && (p.current = 0);
  }, [f]), M.useLayoutEffect(() => {
    f === void 0 && E.current === "" && o !== "" && Date.now() - b.current > cp && !m.current && (p.current = 0), E.current !== "" && o === "" && (b.current = Date.now()), E.current = o;
    const j = s.current;
    if (!j || !d || !o || m.current || Date.now() < p.current) return;
    const C = j.querySelector(a);
    if (!C) return;
    const R = j.getBoundingClientRect(), P = C.getBoundingClientRect(), w = c ? j.querySelector(c) : null, S = w && getComputedStyle(w).position === "sticky" ? w.getBoundingClientRect().width : 0, V = {
      left: R.left,
      right: R.left + j.clientWidth,
      scrollLeft: j.scrollLeft,
      maxScroll: j.scrollWidth - j.clientWidth,
      stickyLeft: S
    }, T = dp(V, P);
    if (T === null) return;
    const B = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || fp(V, P);
    typeof j.scrollTo == "function" ? j.scrollTo({ left: T, behavior: B ? "auto" : "smooth" }) : j.scrollLeft = T;
  }, [s, a, o, c, d, f]);
}
const hp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), mp = ["e", "B", "G", "D", "A", "E"];
function Cf({ string: s }) {
  return /* @__PURE__ */ r.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ r.jsxs("span", { children: [
      s + 1,
      " · ",
      /* @__PURE__ */ r.jsx("strong", { children: mp[s] })
    ] }),
    s === 0 ? /* @__PURE__ */ r.jsx("small", { children: "ohuin" }) : s === 5 ? /* @__PURE__ */ r.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Tf = (s) => ({ "--string-thickness": 1.25 + s * 0.45 + "px" }), pp = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Mf({ min: s, max: a }) {
  return /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - s + 1 }, (o, c) => {
      const d = s + c;
      return /* @__PURE__ */ r.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : hp.has(d) ? /* @__PURE__ */ r.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function oi({ area: s, marks: a = [], mutedStrings: o = [], disabled: c = !1, onAnswer: d, caption: f = "Otelauta", follow: p = "hints", playback: m }) {
  const E = { "--cols": s.max - s.min + 1 }, { strings: b, min: v, max: j } = s, [C, R] = M.useState({ string: Math.min(...b), fret: v }), P = M.useRef(null), w = new Map(a.map((z) => [Ue(z), z])), S = a.map((z) => `${Ue(z)}${z.kind}`).join(",");
  M.useEffect(() => {
    if (p !== "hints") return;
    const z = P.current, I = z?.querySelector(".target, .anchor");
    z && I && (z.scrollLeft += I.getBoundingClientRect().left - z.getBoundingClientRect().left - z.clientWidth / 2 + I.clientWidth / 2);
  }, [S, p]), M.useEffect(() => {
    p === "playing" && P.current && (P.current.scrollLeft = 0);
  }, [p, v, j]);
  const V = a.find((z) => z.kind === "playing");
  Ef(P, ".playing", V ? Ue(V) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [T, U] = M.useState({ left: !1, right: !1 });
  M.useEffect(() => {
    const z = P.current;
    if (!z) return;
    const I = () => {
      const F = z.scrollLeft > 2, re = z.scrollLeft + z.clientWidth < z.scrollWidth - 2;
      U((ee) => ee.left === F && ee.right === re ? ee : { left: F, right: re });
    };
    I(), z.addEventListener("scroll", I, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(I);
    return O?.observe(z), () => {
      z.removeEventListener("scroll", I), O?.disconnect();
    };
  }, [S, v, j]);
  const B = b.includes(C.string) && C.fret >= v && C.fret <= j ? C : { string: Math.min(...b), fret: v };
  return /* @__PURE__ */ r.jsxs("div", { className: "fret-wrap" + (T.left ? " more-left" : "") + (T.right ? " more-right" : ""), children: [
    (T.left || T.right) && /* @__PURE__ */ r.jsxs("p", { className: "fret-scroll-hint", children: [
      T.left && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      T.left && T.right ? "molemmilla puolilla" : T.right ? "oikealla" : "vasemmalla",
      T.right && /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { ref: P, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board", style: E, children: [
      /* @__PURE__ */ r.jsxs("caption", { children: [
        f,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ r.jsx(Mf, { min: v, max: j }),
      /* @__PURE__ */ r.jsx("tbody", { children: De.OPEN_PITCHES.map((z, I) => /* @__PURE__ */ r.jsxs("tr", { className: b.includes(I) ? "" : "unused", style: Tf(I), children: [
        /* @__PURE__ */ r.jsxs("th", { scope: "row", "aria-label": `${I + 1}. kieli: ${Xt[I]}${o.includes(I) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ r.jsx(Cf, { string: I }),
          o.includes(I) && /* @__PURE__ */ r.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        or([I], v, j).map((O) => {
          const F = w.get(Ue(O)), re = `${Xt[I]}-kieli, ${Ci(O.fret)}`;
          return /* @__PURE__ */ r.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${F ? F.kind === "answer" ? "target" : F.kind : ""}`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "data-string": I,
              "data-fret": O.fret,
              tabIndex: B.string === I && B.fret === O.fret ? 0 : -1,
              onFocus: () => R(O),
              onKeyDown: (ee) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(ee.key)) return;
                ee.preventDefault();
                const xe = [...b].sort((H, ue) => H - ue), Ee = xe.indexOf(I), J = ee.key === "ArrowUp" ? xe[Math.max(0, Ee - 1)] : ee.key === "ArrowDown" ? xe[Math.min(xe.length - 1, Ee + 1)] : I, ce = ee.key === "Home" ? v : ee.key === "End" ? j : Math.max(v, Math.min(j, O.fret + (ee.key === "ArrowRight" ? 1 : ee.key === "ArrowLeft" ? -1 : 0)));
                ee.currentTarget.closest("table")?.querySelector(`button[data-string="${J}"][data-fret="${ce}"]`)?.focus();
              },
              disabled: c || !b.includes(I),
              "aria-label": re + (F ? `, ${pp[F.kind]}${F.label ? " " + F.label : ""}` : ""),
              onClick: () => d?.(O),
              children: F ? /* @__PURE__ */ r.jsx("span", { className: "dot", children: F.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, I)) })
    ] }) })
  ] });
}
function vp({ area: s, stats: a, input: o, check: c, flats: d }) {
  const { strings: f, min: p, max: m } = s, E = `${o}:${c}:solo:notes:`;
  return /* @__PURE__ */ r.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ r.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ r.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ r.jsx(Mf, { min: p, max: m }),
    /* @__PURE__ */ r.jsx("tbody", { children: De.OPEN_PITCHES.map((b, v) => /* @__PURE__ */ r.jsxs("tr", { className: f.includes(v) ? "" : "unused", style: Tf(v), children: [
      /* @__PURE__ */ r.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${Xt[v]}`, children: /* @__PURE__ */ r.jsx(Cf, { string: v }) }),
      or([v], p, m).map((j) => {
        const C = Object.hasOwn(a, E + Ue(j)) ? a[E + Ue(j)] : void 0, R = Go(C), P = R === null ? "unseen" : C.attempts < 3 ? "few" : R >= 0.8 ? "strong" : R >= 0.5 ? "growing" : "weak", w = `${Xt[v]}-kieli, ${Ci(j.fret)}, ${Ae(j.midi, d)}`, S = C ? `${Math.round(R * 100)} %, ${C.correct}/${C.attempts} heti oikein, viime aikoina ${Math.round(es(C) * 100)} % ja ${(ts(C) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ r.jsxs("td", { className: `${j.fret === 0 ? "open-fret " : ""}${P}`, title: `${w}: ${S}`, children: [
          /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: R === null ? "·" : C.attempts < 3 ? "?" : Math.round(R * 100) }),
          /* @__PURE__ */ r.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            S
          ] })
        ] }, j.fret);
      })
    ] }, v)) })
  ] }) });
}
const kp = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", ba = (s) => s.mode === "scale" ? De.scaleNotes(De.SCALES[s.scale]) : Ei[s.mode === "caged" ? "maj" : s.chord].tones, _f = (s) => De.fingeringBoxes(s.root, De.SCALES[s.scale], "pentatonic", [s.box])[0].positions[0];
function Mi(s) {
  if (s.mode === "caged") {
    const a = xf(s.root, s.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (s.mode === "scale" && s.box) {
    const a = _f(s);
    return { strings: s.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: s.strings, min: s.min, max: s.max, fixed: "" };
}
function yp(s) {
  const a = Mi(s);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function is(s) {
  const a = Mi(s), o = or(a.strings, a.min, a.max);
  if (s.mode === "notes" || s.mode === "ear-note" || s.mode === "repeat")
    return o.filter((f) => s.accidentals || ![1, 3, 6, 8, 10].includes(Ve(f.midi)));
  if (s.mode === "caged") {
    const f = new Set(xf(s.root, s.shape).map(Ue));
    return o.filter((p) => f.has(Ue(p)));
  }
  if (s.mode === "interval") return o;
  const c = o.filter((f) => ba(s).some(([p]) => Ve(f.midi - s.root) === p));
  if (s.mode !== "scale" || !s.box) return c;
  const d = _f(s);
  return c.filter((f) => {
    const p = d.strings[f.string];
    return p.length > 0 && f.fret >= p[0] && f.fret <= p.at(-1);
  });
}
function bf(s, a) {
  return (s.direction === "both" ? ["up", "down"] : [s.direction]).flatMap((c) => s.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((f) => a.filter((p) => p.midi === f.midi + (c === "down" ? -d : d)).map((p) => ({ reference: f, target: p })))
  }))).filter((c) => c.pairs.length);
}
function gp(s) {
  const a = ba(s);
  return s.mode !== "chord" || s.chordTone === "random" ? [] : s.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(s.chordTone));
}
function _o(s) {
  const a = is(s), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return s.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${s.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : s.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : s.mode !== "interval" && !s.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const c = gp(s).filter(([d]) => !a.some((f) => Ve(f.midi - s.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${o}` : s.mode === "interval" && !bf(s, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Fn(s) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function jp(s, a) {
  const o = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return s.order === "down" ? o.reverse() : o;
}
function Pf(s) {
  return Fn(s) ? new Set(is(s).map((a) => a.midi)).size : s.rounds;
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
function Ni(s, a) {
  const o = s.filter((c) => !a(c));
  return o.length ? o : s;
}
function Sp(s, a, o = {}, c, d = Math.random) {
  const f = _o(s);
  if (f) throw new Error(f);
  const p = Sf(s), m = Ti(s), E = p === "pitch", b = (O) => s.weak ? op(o[Nf({ input: m, check: p, hint: !1, item: O })]) : 1, v = (O) => qi(O, O.map(() => 1), d), j = is(s), C = { check: p, sound: [], choices: "position" };
  if (s.mode === "notes") {
    const O = Ni(j, (ee) => !!c && Ue(ee) === Ue(c.position)), F = qi(O, O.map((ee) => b(`notes:${Ue(ee)}`)), d), re = Ae(F.midi, s.flats, E);
    return {
      ...C,
      position: F,
      midi: F.midi,
      name: re,
      item: `notes:${Ue(F)}`,
      prompt: `Etsi ${re} ${Ho[F.string]}.`
    };
  }
  if (s.mode === "ear-note") {
    const O = (xe) => `ear-note:${Ve(xe.midi)}${s.reference ? ":ref" : ""}`, F = Ni(j, (xe) => !!c && Ve(xe.midi) === Ve(c.midi)), re = qi(F, F.map((xe) => b(O(xe))), d), ee = s.reference ? 57 + 12 * Math.round((re.midi - 57) / 12) : void 0;
    return {
      ...C,
      position: re,
      midi: re.midi,
      name: Ae(re.midi, s.flats),
      item: O(re),
      choices: "note",
      reference: ee,
      sound: ee === void 0 ? [re.midi] : [ee, re.midi],
      prompt: s.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (s.mode === "repeat") {
    const O = Ni(j, (re) => !!c && re.midi === c.midi), F = qi(O, O.map((re) => b(`repeat:${re.midi}`)), d);
    return {
      ...C,
      position: F,
      midi: F.midi,
      name: Ae(F.midi, s.flats, !0),
      item: `repeat:${F.midi}`,
      sound: [F.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (s.mode === "interval") {
    const O = Ni(bf(s, j), (ee) => c?.interval === ee.iv && c?.direction === ee.direction), F = qi(O, O.map((ee) => b(`interval:${ee.iv}:${ee.direction}`)), d), re = v(Ni(F.pairs, (ee) => c?.reference === ee.reference.midi));
    return {
      ...C,
      position: re.target,
      midi: re.target.midi,
      name: Ae(re.target.midi, s.flats, !0),
      item: `interval:${F.iv}:${F.direction}`,
      interval: F.iv,
      direction: F.direction,
      reference: re.reference.midi,
      sound: [re.reference.midi, re.target.midi],
      prompt: `Kuulet ${F.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ae(re.reference.midi, s.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const R = ba(s);
  let P, w = 0;
  if (Fn(s)) {
    const O = jp(s, j);
    w = O.length, P = O[a % O.length];
  } else {
    const O = R.filter(([ee]) => j.some((xe) => Ve(xe.midi - s.root) === ee)), F = s.mode === "chord" && s.chordTone !== "random" ? s.chordTone === "build" ? [R[a % R.length]] : R.filter(([, ee]) => ee.endsWith(s.chordTone)) : Ni(O, ([ee]) => c?.interval === ee), [re] = qi(F, F.map(([ee]) => b($d(s, ee))), d);
    P = v(Ni(j.filter((ee) => Ve(ee.midi - s.root) === re), (ee) => !!c && Ue(ee) === Ue(c.position)));
  }
  const S = Ve(P.midi - s.root), V = R.find(([O]) => O === S)[1], T = Zr(s.root, S, V), U = E ? T + tp(P.midi, T) : T, B = s.mode === "scale" ? `${li(s.root)}-${De.SCALES[s.scale].name}${s.box ? `, boksi ${s.box}` : ""}` : s.mode === "caged" ? `${li(s.root)}-duurisointu, ${s.shape}-muoto` : jf(s.root, s.chord), z = s.mode !== "caged" && s.activity === "degree", I = z ? `${B}: mikä aste on ${T}?` : w ? `${B} ${s.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${V}. aste (${U}).` : `${B}: etsi ${V}. aste${E ? ` (${U})` : ""}.`;
  return {
    ...C,
    position: P,
    midi: P.midi,
    name: U,
    item: $d(s, S),
    prompt: I,
    degree: V,
    interval: S,
    choices: z ? "degree" : "position"
  };
}
function bo(s, a, o) {
  return Number.isInteger(a) && (o === "class" ? Ve(s) === Ve(a) : s === a);
}
function Af(s, a, o) {
  return bo(a.midi, o.midi, a.check) ? s.mode === "notes" ? o.string === a.position.string : kp(s) ? is(s).some((c) => Ue(c) === Ue(o)) : !0 : !1;
}
function wp(s, a) {
  const o = Mi(s);
  return or(o.strings, o.min, o.max).filter((c) => Af(s, a, c));
}
const Ct = (s, a, o) => ({ ...s, label: a, kind: o }), Np = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function Ep(s, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const c = o >= 2, d = Mi(s), f = or(d.strings, d.min, d.max), p = wp(s, a);
  if (s.mode === "notes") {
    if (c) return { marks: p.map((V) => Ct(V, a.name, "answer")), text: `${a.name} on ${gf[a.position.string]}: ${Ci(a.position.fret)}.` };
    const w = f.find((V) => V.string === a.position.string), S = Ae(w.midi, s.flats);
    return {
      marks: [Ct(w, S, "anchor")],
      text: `Apupiste: ${np[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${S}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (s.mode === "ear-note")
    return c ? { marks: [Ct(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Ct(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${Xt[a.position.string]}-kieli, ${Ci(a.position.fret)}.` };
  if (s.mode === "repeat")
    return c ? { marks: p.map((w) => Ct(w, Ae(w.midi, s.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Ho[a.position.string]}.` };
  if (s.mode === "interval") {
    const w = Ae(a.reference, s.flats, !0), S = f.filter((V) => V.midi === a.reference).map((V) => Ct(V, w, "anchor"));
    return c ? {
      marks: [...S, ...p.map((V) => Ct(V, Ae(V.midi, s.flats, !0), "answer"))],
      text: `${Np(qr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: S, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = is(s), E = ba(s), b = (w) => E.find(([S]) => S === Ve(w.midi - s.root))?.[1] ?? "", v = Zr(s.root, a.interval, a.degree), j = m.filter((w) => Ve(w.midi - s.root) === 0), C = (w) => p.some((S) => Ue(S) === Ue(w)), R = `${a.degree}. aste on ${v}.`;
  if (s.mode === "caged")
    return c ? { marks: m.map((w) => Ct(w, b(w), C(w) ? "answer" : "shape")), text: R } : { marks: m.map((w) => Ct(w, "", "shape")), text: `${s.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const P = s.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = m.filter((S) => Ve(S.midi) === Ve(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : j).map((S) => Ct(S, "1", "anchor")), ...w.map((S) => Ct(S, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((S) => Ct(S, v, "shape")), text: `Katso ${P} nimeä: mikä on sen perussävel?` } : {
      marks: [...j.map((S) => Ct(S, "1", "anchor")), ...w.map((S) => Ct(S, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [...j.filter((w) => !C(w)).map((w) => Ct(w, "1", "anchor")), ...p.map((w) => Ct(w, a.degree, "answer"))], text: R } : a.interval === 0 ? { marks: [], text: `1. aste on ${P} perussävel ${li(s.root)}.` } : { marks: j.map((w) => Ct(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Cp {
  constructor(a, o, c, d = () => performance.now(), f = Math.random) {
    this.settings = a, this.stats = o, this.record = c, this.now = d, this.random = f, this.total = Pf(a);
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
    if (!(o === "degree" ? a === f.interval : o === "note" ? bo(f.midi, a, "class") : o === "board" ? !!c && Af(this.settings, f, c) : bo(f.midi, a, f.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? c : void 0, E = {
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
    return m ? E.position = Ue(m) : this.settings.mode === "notes" && (E.position = Ue(f.position)), this.results.push(E), this.record(E), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Po(s) {
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
], nr = (s) => Ao.find(([a]) => a === s)?.[1] ?? s;
function $t({ label: s, children: a }) {
  const o = M.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ r.jsx("label", { htmlFor: o, children: s }),
    M.cloneElement(a, { id: o })
  ] });
}
function Fd({ legend: s, name: a, value: o, options: c, onChange: d, disabled: f }) {
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
function Id(s) {
  const a = Mi(s), o = Pf(s), c = Ti(s), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", f = a.fixed === "shape" ? `${s.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${s.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${_a[s.hints].title} · ${d} · ${Fn(s) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${f}${p}`;
}
function Dd({ s, change: a, locked: o, problem: c }) {
  const d = M.useId(), f = (v, j) => a({ ...s, [v]: j }), p = Mi(s), m = Ti(s) === "note" || Ti(s) === "degree", E = ["scale", "chord", "caged"].includes(s.mode), b = ["notes", "ear-note", "repeat"].includes(s.mode);
  return /* @__PURE__ */ r.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ r.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx($t, { label: "Harjoitus", children: /* @__PURE__ */ r.jsx("select", { value: s.mode, onChange: (v) => f("mode", v.target.value), children: Ao.map(([v, j]) => /* @__PURE__ */ r.jsx("option", { value: v, children: j }, v)) }) }),
      /* @__PURE__ */ r.jsx("p", { className: "mode-note", children: Ao.find(([v]) => v === s.mode)[2] })
    ] }),
    E && /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ r.jsx($t, { label: s.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ r.jsx("select", { value: s.root, onChange: (v) => f("root", Number(v.target.value)), children: De.CHROM.map((v, j) => /* @__PURE__ */ r.jsx("option", { value: j, children: v }, v)) }) }),
      s.mode === "scale" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx($t, { label: "Asteikko", children: /* @__PURE__ */ r.jsx("select", { value: s.scale, onChange: (v) => f("scale", v.target.value), children: Object.entries(De.SCALES).map(([v, j]) => /* @__PURE__ */ r.jsx("option", { value: v, children: j.name }, v)) }) }),
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
        /* @__PURE__ */ r.jsx($t, { label: "Sointutyyppi", children: /* @__PURE__ */ r.jsx("select", { value: s.chord, onChange: (v) => f("chord", v.target.value), children: Object.entries(Ei).map(([v, j]) => /* @__PURE__ */ r.jsx("option", { value: v, children: j.name }, v)) }) }),
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
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.intervals.includes(v), onChange: (j) => f("intervals", j.target.checked ? [...s.intervals, v] : s.intervals.filter((C) => C !== v)) }),
        qr[v]
      ] }, v)) }),
      /* @__PURE__ */ r.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ r.jsx($t, { label: "Intervallin suunta", children: /* @__PURE__ */ r.jsxs("select", { value: s.direction, onChange: (v) => f("direction", v.target.value), children: [
        /* @__PURE__ */ r.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ r.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ r.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Fd,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: s.hints,
        onChange: (v) => f("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ..._a[v] }))
      }
    ),
    m ? /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ r.jsx(Fd, { legend: "Vastaustapa", name: `${d}-input`, value: s.input, onChange: (v) => f("input", v), options: [
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
        /* @__PURE__ */ r.jsx("div", { className: "check-row", children: Xt.map((v, j) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", checked: s.strings.includes(j), onChange: (C) => f("strings", C.target.checked ? [...s.strings, j] : s.strings.filter((R) => R !== j)) }),
          j + 1,
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
const zd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Tp(s) {
  return s && Object.hasOwn(zd, s) ? zd[s] : null;
}
const Mp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opettele sävelten sijainnit ja harjoittele musiikkikorvaa lyhyillä peleillä.", example: "Sävelten etsintä · Riffikaiku · Ensikeikka" },
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
function bp({ onBack: s, onNotes: a }) {
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
const Pp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Lo = 100, Lf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function Wo(s) {
  if (s === null || s.trim() === "") return Lo;
  const a = Number(s);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Lo;
}
function Ap() {
  try {
    return Wo(localStorage.getItem(Lf));
  } catch {
    return Lo;
  }
}
function Lp(s) {
  try {
    localStorage.setItem(Lf, String(Wo(String(s))));
  } catch {
  }
}
function Bd(s, a, o = !0) {
  return o ? Pp[s] * Wo(String(a)) / 100 : 0;
}
function Rf(s = () => new Audio()) {
  try {
    const a = s();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Rp = 0.12, Op = 2e3, $p = 3;
function Fp(s, a = !1) {
  return a ? !0 : s.atLoopBoundary || s.drift <= Rp || s.seeking || s.readyState < $p ? !1 : s.msSinceLastFix >= Op;
}
const Ip = 1.5, Dp = 0.4, zp = 0.5;
let Ro = null, Bp = null;
function Vp(s) {
  return Ro !== null ? Ro : (Bp ??= Rf()) ? 0 : Dp;
}
class Of {
  constructor(a = Vp()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, c = !1, d = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !c && (o.paused || a.paused)) return !1;
    const f = o.currentTime - a.currentTime, p = Math.abs(f), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, E = this.lastFix.get(o);
    if (!Fp({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: E === void 0 ? 1 / 0 : d - E
    }, c)) return !1;
    const b = !a.paused;
    !c && b && E !== void 0 && (this.latency = Math.min(Ip, Math.max(0, this.latency - zp * f)), Ro = this.latency);
    let v = a.currentTime + (b ? this.latency : 0);
    Number.isFinite(o.duration) && (v = Math.min(v, Math.max(0, o.duration - 0.05)));
    try {
      o.currentTime = v;
    } catch {
      return !1;
    }
    return b ? this.lastFix.set(o, d) : this.lastFix.delete(o), !0;
  }
}
function Kp(s = globalThis.navigator) {
  return s ? /iPhone|iPad|iPod/.test(s.userAgent) || s.platform === "MacIntel" && s.maxTouchPoints > 1 : !1;
}
function Up(s = Kp(), a = () => Rf()) {
  return s ? "webaudio" : a() ? "element" : "webaudio";
}
function Hp(s = globalThis.navigator) {
  const a = s?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const Gp = () => {
  const s = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!s) throw new Error("Web Audio API puuttuu");
  return new s();
};
class Wp {
  constructor(a = Gp, o = globalThis.navigator) {
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
        Hp(this.nav);
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
const Qp = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", Yp = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Vd(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function $f() {
  const s = M.useRef(null), a = M.useRef(null), [o, c] = M.useState(!1), [d, f] = M.useState(!1), [p, m] = M.useState(!1), [E, b] = M.useState(0), [v, j] = M.useState(0), [C, R] = M.useState(""), P = M.useRef(new Of());
  function w(B = !1) {
    const z = s.current, I = a.current;
    !z || !I || !Number.isFinite(z.currentTime) || P.current.align(z, I, B);
  }
  function S() {
    s.current?.pause(), a.current?.pause(), c(!1);
  }
  async function V() {
    const B = s.current, z = a.current;
    if (!(!B || !z)) {
      if (o) {
        S();
        return;
      }
      R(""), z.muted = !d, z.volume = 0.55, B.volume = 0.75, w(!0);
      try {
        await Promise.all(d ? [B.play(), z.play()] : [B.play()]), w(), c(!0);
      } catch {
        S(), R("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function T(B) {
    const z = s.current, I = a.current;
    if (!(!z || !I || !Number.isFinite(B))) {
      z.currentTime = B;
      try {
        I.currentTime = B;
      } catch {
      }
      b(B);
    }
  }
  function U(B) {
    const z = s.current, I = a.current;
    if (f(B), !!I) {
      if (I.muted = !B, !B) {
        I.pause();
        return;
      }
      !z || !o || (w(!0), I.play().catch(() => R("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return M.useEffect(() => {
    const B = () => {
      document.hidden && (s.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", B), () => {
      document.removeEventListener("visibilitychange", B), s.current?.pause(), a.current?.pause();
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
              onChange: (B) => U(B.target.checked)
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
              onChange: (B) => m(B.target.checked)
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
          value: Math.min(E, v > 0 ? v : 1),
          disabled: !v,
          onChange: (B) => T(Number(B.target.value))
        }
      ),
      /* @__PURE__ */ r.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Vd(E),
        " / ",
        Vd(v)
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: s,
        preload: "metadata",
        src: Qp,
        loop: p,
        onLoadedMetadata: (B) => j(B.currentTarget.duration),
        onTimeUpdate: (B) => {
          b(B.currentTarget.currentTime), B.currentTarget.paused || w();
        },
        onEnded: () => {
          s.current?.loop || (a.current?.pause(), c(!1), b(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => R("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ r.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: Yp,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const B = s.current, z = a.current;
          B?.duration && z?.duration && Math.abs(B.duration - z.duration) > 0.15 && R("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => R("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    C && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: C }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Jp = 4e3;
class Kd extends Error {
  name = "MicSetupError";
}
async function Xp(s, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Kd("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
        new Promise((v, j) => {
          b = setTimeout(() => j(new Kd("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Jp);
        })
      ]).finally(() => clearTimeout(b));
    }
    const f = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], E = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: f,
      stream: c,
      label: m?.label ?? "",
      deviceId: E.deviceId ?? "",
      channelCount: E.channelCount ?? 1,
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
async function Zp() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var go, Ud;
function qp() {
  if (Ud) return go;
  Ud = 1;
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
        var E = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << E;
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
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, E, b = this._bitrev;
    if (p === 4)
      for (m = 0, E = 0; m < c; m += p, E++) {
        const S = b[E];
        this._singleTransform2(m, S, f);
      }
    else
      for (m = 0, E = 0; m < c; m += p, E++) {
        const S = b[E];
        this._singleTransform4(m, S, f);
      }
    var v = this._inv ? -1 : 1, j = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var C = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var R = m + C, P = m, w = 0; P < R; P += 2, w += f) {
          const S = P, V = S + C, T = V + C, U = T + C, B = o[S], z = o[S + 1], I = o[V], O = o[V + 1], F = o[T], re = o[T + 1], ee = o[U], xe = o[U + 1], Ee = B, J = z, ce = j[w], H = v * j[w + 1], ue = I * ce - O * H, le = I * H + O * ce, W = j[2 * w], oe = v * j[2 * w + 1], q = F * W - re * oe, x = F * oe + re * W, y = j[3 * w], ie = v * j[3 * w + 1], fe = ee * y - xe * ie, Se = ee * ie + xe * y, G = Ee + q, K = J + x, te = Ee - q, X = J - x, ve = ue + fe, D = le + Se, ne = v * (ue - fe), ae = v * (le - Se), de = G + ve, Ne = K + D, we = G - ve, Le = K - D, Je = te + ae, He = X - ne, qe = te - ae, rt = X + ne;
          o[S] = de, o[S + 1] = Ne, o[V] = Je, o[V + 1] = He, o[T] = we, o[T + 1] = Le, o[U] = qe, o[U + 1] = rt;
        }
    }
  }, s.prototype._singleTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], E = p[c + 1], b = p[c + d], v = p[c + d + 1], j = m + b, C = E + v, R = m - b, P = E - v;
    f[o] = j, f[o + 1] = C, f[o + 2] = R, f[o + 3] = P;
  }, s.prototype._singleTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, E = d * 2, b = d * 3, v = p[c], j = p[c + 1], C = p[c + d], R = p[c + d + 1], P = p[c + E], w = p[c + E + 1], S = p[c + b], V = p[c + b + 1], T = v + P, U = j + w, B = v - P, z = j - w, I = C + S, O = R + V, F = m * (C - S), re = m * (R - V), ee = T + I, xe = U + O, Ee = B + re, J = z - F, ce = T - I, H = U - O, ue = B - re, le = z + F;
    f[o] = ee, f[o + 1] = xe, f[o + 2] = Ee, f[o + 3] = J, f[o + 4] = ce, f[o + 5] = H, f[o + 6] = ue, f[o + 7] = le;
  }, s.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, d = this._width, f = 1 << d, p = c / f << 1, m, E, b = this._bitrev;
    if (p === 4)
      for (m = 0, E = 0; m < c; m += p, E++) {
        const _e = b[E];
        this._singleRealTransform2(m, _e >>> 1, f >>> 1);
      }
    else
      for (m = 0, E = 0; m < c; m += p, E++) {
        const _e = b[E];
        this._singleRealTransform4(m, _e >>> 1, f >>> 1);
      }
    var v = this._inv ? -1 : 1, j = this.table;
    for (f >>= 2; f >= 2; f >>= 2) {
      p = c / f << 1;
      var C = p >>> 1, R = C >>> 1, P = R >>> 1;
      for (m = 0; m < c; m += p)
        for (var w = 0, S = 0; w <= P; w += 2, S += f) {
          var V = m + w, T = V + R, U = T + R, B = U + R, z = o[V], I = o[V + 1], O = o[T], F = o[T + 1], re = o[U], ee = o[U + 1], xe = o[B], Ee = o[B + 1], J = z, ce = I, H = j[S], ue = v * j[S + 1], le = O * H - F * ue, W = O * ue + F * H, oe = j[2 * S], q = v * j[2 * S + 1], x = re * oe - ee * q, y = re * q + ee * oe, ie = j[3 * S], fe = v * j[3 * S + 1], Se = xe * ie - Ee * fe, G = xe * fe + Ee * ie, K = J + x, te = ce + y, X = J - x, ve = ce - y, D = le + Se, ne = W + G, ae = v * (le - Se), de = v * (W - G), Ne = K + D, we = te + ne, Le = X + de, Je = ve - ae;
          if (o[V] = Ne, o[V + 1] = we, o[T] = Le, o[T + 1] = Je, w === 0) {
            var He = K - D, qe = te - ne;
            o[U] = He, o[U + 1] = qe;
            continue;
          }
          if (w !== P) {
            var rt = X, kt = -ve, Qe = K, Ie = -te, Xe = -v * de, mt = -v * ae, Zt = -v * ne, Ft = -v * D, qt = rt + Xe, Ht = kt + mt, Pt = Qe + Ft, yn = Ie - Zt, Ce = m + R - w, ln = m + C - w;
            o[Ce] = qt, o[Ce + 1] = Ht, o[ln] = Pt, o[ln + 1] = yn;
          }
        }
    }
  }, s.prototype._singleRealTransform2 = function(o, c, d) {
    const f = this._out, p = this._data, m = p[c], E = p[c + d], b = m + E, v = m - E;
    f[o] = b, f[o + 1] = 0, f[o + 2] = v, f[o + 3] = 0;
  }, s.prototype._singleRealTransform4 = function(o, c, d) {
    const f = this._out, p = this._data, m = this._inv ? -1 : 1, E = d * 2, b = d * 3, v = p[c], j = p[c + d], C = p[c + E], R = p[c + b], P = v + C, w = v - C, S = j + R, V = m * (j - R), T = P + S, U = w, B = -V, z = P - S, I = w, O = V;
    f[o] = T, f[o + 1] = 0, f[o + 2] = U, f[o + 3] = B, f[o + 4] = z, f[o + 5] = 0, f[o + 6] = I, f[o + 7] = O;
  }, go;
}
var ev = qp();
const tv = /* @__PURE__ */ zm(ev);
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
    this._inputLength = a, this._fft = new tv(rv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function nv(s) {
  const a = [];
  let o = !1, c = -1 / 0, d = -1;
  for (let f = 1; f < s.length - 1; f++)
    s[f - 1] <= 0 && s[f] > 0 ? (o = !0, d = f, c = s[f]) : s[f - 1] > 0 && s[f] <= 0 ? (o = !1, d !== -1 && a.push(d)) : o && s[f] > c && (c = s[f], d = f);
  return a;
}
function iv(s, a) {
  const [o, c, d] = [s - 1, s, s + 1], [f, p, m] = [a[o], a[c], a[d]], E = f / 2 - p + m / 2, b = -(f / 2) * (c + d) + p * (o + d) - m / 2 * (o + c), v = f * c * d / 2 - p * o * d + m * o * c / 2, j = -b / (2 * E), C = E * j * j + b * j + v;
  return [j, C];
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
    const c = nv(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((E) => this._nsdfBuffer[E])), f = c.find(
      (E) => this._nsdfBuffer[E] >= this._clarityThreshold * d
    ), [p, m] = iv(
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
function rv(s) {
  return s--, s |= s >> 1, s |= s >> 2, s |= s >> 4, s |= s >> 8, s |= s >> 16, s++, s;
}
function sv(s) {
  const a = s * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const av = 0.05, lv = 1.5;
class ov {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const c = a.context, d = sv(c.sampleRate), f = Math.max(1, Math.min(2, a.channelCount ?? 1));
    f > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(f), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? f : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * av))), this.detector = Jr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new uv();
  onset = new cv();
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
      onFrame: E,
      onStableNote: b
    } = this.opts, v = this.analysers.map((O, F) => (O.getFloatTimeDomainData(this.buffers[F]), Hd(this.buffers[F], this.buffers[F].length - this.shortLength))), j = v.indexOf(Math.max(...v));
    j !== this.channel && v[j] > (v[this.channel] ?? 0) * lv && (this.channel = j);
    const C = this.buffers[this.channel], R = v[this.channel], P = dv(C, C.length - this.shortLength), w = { rms: R, peak: P, channel: this.channel, levels: v }, S = R < c, V = this.onset.feed(R, a, c);
    if (S && Hd(C, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), E?.({ ...w, status: "silent" });
      return;
    }
    const [T, U] = this.detector.findPitch(C, this.mic.context.sampleRate);
    if (!isFinite(T) || U < o) {
      this.gate.feed(null, a, d, S, V), E?.({ ...w, status: S ? "silent" : "unclear", clarity: isFinite(U) ? U : 0 });
      return;
    }
    if (T < p || T > m) {
      this.gate.feed(null, a, d, S, V), E?.({ ...w, status: "out-of-range", frequency: T, clarity: U });
      return;
    }
    const { midi: B, cents: z } = Zm(T);
    if (Math.abs(z) > f) {
      this.gate.feed(null, a, d, S, V), E?.({ ...w, status: "off-pitch", frequency: T, clarity: U, midi: B, cents: z });
      return;
    }
    E?.({ ...w, status: "pitch", frequency: T, clarity: U, midi: B, cents: z });
    const I = this.gate.feed(B, a, d, S, V);
    I !== null && b?.({ midi: B, frequency: T, cents: z, clarity: U, timestamp: a, heldMs: I.heldMs });
  }
}
class uv {
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
class cv {
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
function Hd(s, a = 0) {
  const o = Math.max(0, a);
  let c = 0;
  for (let d = o; d < s.length; d++) c += s[d] * s[d];
  return Math.sqrt(c / Math.max(1, s.length - o));
}
function dv(s, a = 0) {
  let o = 0;
  for (let c = Math.max(0, a); c < s.length; c++) {
    const d = Math.abs(s[c]);
    d > o && (o = d);
  }
  return o;
}
const lr = (s) => s > 0 ? Math.max(-90, 20 * Math.log10(s)) : -90;
let er;
function Ff() {
  return (!er || er.state === "closed") && (er = new AudioContext()), er;
}
function fv() {
  const s = er;
  er = void 0, s?.close().catch(() => {
  });
}
const If = (s) => s instanceof Error ? s.name : "";
function hv(s) {
  const a = If(s);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? s.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class mv {
  constructor(a = (o) => Xp(o, Ff)) {
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
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(If(m))) throw m;
      f = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return f.stop(), null;
    this.mic = f;
    try {
      this.loop = new ov(f, { ...o });
      const m = () => {
        this.mic === f && (this.stop(), c());
      }, E = this.listeners = new AbortController();
      return f.stream.getTracks().forEach((b) => b.addEventListener("ended", m, { once: !0, signal: E.signal })), f.context.addEventListener?.("statechange", () => {
        f.context.state !== "running" && m();
      }, { signal: E.signal }), this.loop.start(), { label: f.label, deviceId: f.deviceId, channels: f.channelCount, sampleRate: f.context.sampleRate, fallback: p };
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
function Df(s, a) {
  return s !== "on" ? s : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Gd = (s) => Math.max(0, Math.min(1, (lr(s) + 60) / 60));
function pv(s) {
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
function Pa(s) {
  const a = s instanceof Error ? s.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : s instanceof Error && s.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class rs {
  constructor(a = Ff) {
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
    const p = Array.from({ length: 12 }, (b, v) => 1 / (v + 1) ** 1.3), m = d.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((b, v) => {
      const j = d.createOscillator(), C = d.createGain(), R = d.currentTime + 0.05 + v * 0.8;
      m ? j.setPeriodicWave(m) : j.type = "triangle", j.frequency.value = yo(b), C.gain.setValueAtTime(0, R), C.gain.linearRampToValueAtTime(0.22, R + 0.012), C.gain.exponentialRampToValueAtTime(1e-3, R + 0.7), j.connect(C), C.connect(f), j.start(R), j.stop(R + 0.72), o && this.noteTimers.push(setTimeout(() => {
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
    if (await jo(p), f !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), E = p.createGain();
    E.connect(p.destination), this.master = E;
    const b = Array.from({ length: 12 }, (P, w) => 1 / (w + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...b.map(() => 0)]),
      new Float32Array([0, ...b])
    ), j = p.currentTime + 0.05;
    let C = 0;
    return a.forEach((P, w) => {
      if (!Number.isFinite(P.beat) || P.beat < 0 || !Number.isFinite(P.duration) || P.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const S = j + P.beat * m, V = P.duration * m, T = S + Math.max(0.08, V * 0.94), U = p.createOscillator(), B = p.createGain();
      v ? U.setPeriodicWave(v) : U.type = "triangle", U.frequency.value = yo(P.midi), B.gain.setValueAtTime(0, S), B.gain.linearRampToValueAtTime(0.22, S + 0.012), B.gain.exponentialRampToValueAtTime(1e-3, T - 0.01), U.connect(B), B.connect(E), U.start(S), U.stop(T), c && this.noteTimers.push(setTimeout(() => {
        f === this.token && c(w);
      }, 50 + P.beat * m * 1e3));
      const z = a[w + 1]?.beat ?? 1 / 0;
      d && z > P.beat + P.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        f === this.token && d();
      }, 50 + P.beat * m * 1e3 + V * 1e3)), C = Math.max(C, P.beat + P.duration);
    }), !await new Promise((P) => {
      this.settle = P, this.timer = setTimeout(() => P(!0), 50 + C * m * 1e3 + 150);
    }) || f !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], E.disconnect(), this.master = void 0, !0);
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
    const m = Array.from({ length: 12 }, (w, S) => 1 / (S + 1) ** 1.3), E = f.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let b = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (w) => {
      d === this.token && Number.isFinite(w) && (b = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let j = f.currentTime + 0.05, C = 0;
    const R = [], P = () => {
      if (d === this.token) {
        if (j < f.currentTime - 0.02) {
          const w = Math.ceil((f.currentTime - j) / b);
          j += w * b, C = (C + w) % a.length, R.length = 0;
        }
        for (; j < f.currentTime + v; ) {
          const w = a[C], S = C, V = j, T = f.createOscillator(), U = f.createGain();
          E ? T.setPeriodicWave(E) : T.type = "triangle", T.frequency.value = yo(w), U.gain.setValueAtTime(0, V), U.gain.linearRampToValueAtTime(0.22, V + 0.012), U.gain.exponentialRampToValueAtTime(1e-3, V + b * 0.975), T.connect(U), U.connect(p), T.start(V), T.stop(V + b * 0.985), R.push({ at: V, index: S }), j += b, C = (C + 1) % a.length;
        }
        for (; R.length && R[0].at <= f.currentTime + 0.01; ) {
          const w = R.shift();
          o?.(w.index);
        }
      }
    };
    return P(), this.loopTick = setInterval(P, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function ui(s, a) {
  let o = 0;
  const c = a.map(([d, f, p]) => {
    const E = { position: d === null || f === null ? null : Fe(d, f), beat: o, duration: p };
    return o += p, E;
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
const Wd = ui("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), Qd = ui("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), vv = ui("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), Yd = ui("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), Jd = ui("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), kv = ui("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), Xd = ui("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), Zd = ui("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), yv = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [Wd, Qd],
    whole: xo("Melodia · A + B + C", Wd, Qd, vv),
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
    fragments: [Yd, Jd],
    whole: xo("Ukko Nooa · A + B", Yd, Jd),
    bonus: kv,
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
    fragments: [Xd, Zd],
    whole: xo("Siirtymämelodia · A + B", Xd, Zd),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function gv(s) {
  return s.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
const qd = ["e", "B", "G", "D", "A", "E"];
function Qo({ pieceId: s, stage: a, onBeforePlay: o, stopHandleRef: c }) {
  const d = yv[s], [f, p] = M.useState(a === "fingering" ? "a" : "whole"), [m, E] = M.useState(d.tempo), [b, v] = M.useState(!1), [j, C] = M.useState(!1), [R, P] = M.useState(a !== "memory"), [w, S] = M.useState(!1), [V, T] = M.useState(null), [U, B] = M.useState(""), z = M.useRef(new rs()), I = M.useRef(0);
  function O() {
    I.current++, z.current.stop(), S(!1), T(null);
  }
  M.useEffect(() => {
    c && (c.current = O);
    const y = () => {
      document.hidden && O();
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), I.current++, z.current.stop(), c && (c.current = null);
    };
  }, [c]);
  const F = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: d.whole }] : [
    { id: "a", name: "Osa A", clip: d.fragments[0] },
    { id: "b", name: "Osa B", clip: d.fragments[1] },
    ...d.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: d.bonus }] : []
  ], re = F.find((y) => y.id === f) ?? F[0], ee = re.clip, xe = gv(ee), Ee = V === null ? null : xe[V]?.beat ?? null, J = Ee === null ? null : ee.events.find((y) => y.beat === Ee)?.position ?? null, ce = M.useRef(null);
  Ef(ce, ".melody-playing", w && Ee !== null ? String(Ee) : "", { enabled: b && j, playback: w });
  const H = ee.beats / 4, ue = [...new Map(ee.events.filter((y) => y.position).map((y) => [Ue(y.position), y.position])).values()], le = ue.map((y) => y.fret), W = ue.filter((y) => R || J?.string === y.string && J.fret === y.fret).map((y) => ({
    ...y,
    label: Ae(y.midi),
    kind: J?.string === y.string && J.fret === y.fret ? "playing" : Ve(y.midi) === d.tonic ? "answer" : "shape"
  })), oe = {
    strings: [...new Set(ue.map((y) => y.string))],
    min: Math.min(...le),
    max: Math.max(...le),
    fixed: "box"
  };
  async function q() {
    if (w) {
      O();
      return;
    }
    o?.();
    const y = ++I.current;
    z.current.stop(), S(!0), T(null), B("");
    try {
      await z.current.playTimed(xe, m, (ie) => {
        y === I.current && T(ie);
      }, () => {
        y === I.current && T(null);
      });
    } catch (ie) {
      y === I.current && B(Pa(ie));
    } finally {
      y === I.current && (S(!1), T(null));
    }
  }
  function x(y) {
    O(), B(""), p(y);
  }
  return /* @__PURE__ */ r.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${d.title}`, children: /* @__PURE__ */ r.jsxs("details", { onToggle: (y) => {
    const ie = y.currentTarget.open;
    v(ie), ie || O();
  }, children: [
    /* @__PURE__ */ r.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${d.title}` : `Valinnainen melodiaharjoitus · ${d.title}` }),
    b && /* @__PURE__ */ r.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ r.jsx("h4", { children: d.title }),
      /* @__PURE__ */ r.jsxs("p", { className: "melody-subtitle", children: [
        d.qualifier,
        " · 4/4 · ",
        H.toString().replace(".", ","),
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
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": w, onClick: () => {
          q();
        }, children: w ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ r.jsx("select", { value: m, onChange: (y) => {
            O(), E(Number(y.target.value));
          }, children: [60, 75, 84, 96, 108].concat([d.tempo]).sort((y, ie) => y - ie).filter((y, ie, fe) => fe.indexOf(y) === ie).map((y) => /* @__PURE__ */ r.jsxs("option", { value: y, children: [
            y,
            " BPM"
          ] }, y)) })
        ] }),
        /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": j, onClick: () => C((y) => !y), children: j ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      U && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: U }),
      /* @__PURE__ */ r.jsx("p", { className: "melody-now", "aria-live": "polite", children: w && V !== null ? `Nyt soi ${Ae(xe[V].midi)} · ${qd[J.string]}-kieli, ${J.fret}. nauha` : w ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ r.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ r.jsx(oi, { area: oe, marks: W, disabled: !0, follow: "playing", playback: w, caption: `${d.title}, ${re.name}` }),
        /* @__PURE__ */ r.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": R,
              onClick: () => P((y) => !y),
              children: R ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      j && /* @__PURE__ */ r.jsxs("div", { ref: ce, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ r.jsxs("table", { className: "melody-tab", "aria-label": `${d.title}, ${re.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "col", children: "Kieli" }),
            ee.events.map((y, ie) => /* @__PURE__ */ r.jsxs("th", { scope: "col", className: y.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ r.jsx("span", { className: "melody-bar", children: y.beat % 4 === 0 ? `T${Math.floor(y.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ r.jsx("span", { className: "melody-duration", children: y.duration === 1 ? "♩" : `${y.duration} iskua` })
            ] }, ie))
          ] }) }),
          /* @__PURE__ */ r.jsx("tbody", { children: qd.map((y, ie) => /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx("th", { scope: "row", children: y }),
            ee.events.map((fe, Se) => {
              const G = fe.position?.string === ie, K = G && Ee === fe.beat;
              return /* @__PURE__ */ r.jsx(
                "td",
                {
                  className: `${fe.beat % 4 === 0 ? "bar-start " : ""}${K ? "melody-playing " : ""}${G && Ve(fe.position.midi) === d.tonic ? "melody-root" : ""}`,
                  "aria-label": G ? `${y}-kieli, ${fe.position.fret}. nauha, ${Ae(fe.position.midi)}` : void 0,
                  children: G ? fe.position.fret : "—"
                },
                Se
              );
            })
          ] }, ie)) })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: d.note }),
      d.source && /* @__PURE__ */ r.jsx("p", { className: "melody-source", children: /* @__PURE__ */ r.jsx("a", { href: d.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Oo = De.fingeringBoxes(9, De.SCALES.mp, "pentatonic", [1, 2]), zf = [...new Map(Oo.flatMap((s) => s.positions[0].strings.flatMap((a, o) => a.map((c) => {
  const d = Fe(o, c);
  return [Ue(d), d];
})))).values()].sort((s, a) => s.midi - a.midi || a.string - s.string), Ca = [5, 4, 3, 2, 1, 0].flatMap((s) => zf.filter((a) => a.string === s).sort((a, o) => a.fret - o.fret)), $o = [
  ...Ca,
  ...Ca.slice(1, -1).reverse()
], jv = [...$o, Ca[0]], ef = new Set(
  Oo[0].positions[0].strings.flatMap((s, a) => s.map((o) => {
    const c = Fe(a, o);
    return Ue(c);
  })).filter((s) => Oo[1].positions[0].strings.flatMap((a, o) => a.map((c) => Ue(Fe(o, c)))).includes(s))
), xv = [
  Fe(5, 5),
  Fe(5, 8),
  Fe(5, 10),
  Fe(4, 7),
  Fe(4, 10),
  Fe(3, 7),
  Fe(3, 10),
  Fe(3, 7),
  Fe(4, 10),
  Fe(4, 7),
  Fe(5, 10),
  Fe(5, 8),
  Fe(5, 5)
], Bf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Vf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", So = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], tf = (s) => Ve(s) === 9;
function nf() {
  try {
    const s = Number(localStorage.getItem(Bf));
    return Number.isInteger(s) ? Math.max(0, Math.min(4, s)) : 0;
  } catch {
    return 0;
  }
}
function Sv() {
  try {
    const s = Number(localStorage.getItem(Vf));
    return Number.isInteger(s) && s >= 40 && s <= 140 && s % 5 === 0 ? s : 75;
  } catch {
    return 75;
  }
}
function wv({ onBack: s, onPosition: a }) {
  const [o, c] = M.useState(nf), [d, f] = M.useState(nf), [p, m] = M.useState(!1), [E, b] = M.useState("roots"), [v, j] = M.useState(Sv), [C, R] = M.useState(null), [P, w] = M.useState(null), [S, V] = M.useState(""), T = M.useRef(new rs()), U = M.useRef(0), B = M.useRef(null), z = P === null ? null : $o[P];
  function I() {
    B.current?.(), U.current++, T.current.stop(), R(null), w(null);
  }
  M.useEffect(() => {
    const J = () => {
      document.hidden && (U.current++, T.current.stop(), R(null), w(null));
    };
    return document.addEventListener("visibilitychange", J), () => {
      document.removeEventListener("visibilitychange", J), U.current++, T.current.stop();
    };
  }, []);
  async function O(J) {
    B.current?.();
    const ce = ++U.current;
    T.current.stop(), w(null), V(""), R(J);
    try {
      J === "transition" ? await T.current.play(xv.map((H) => H.midi)) : J === "once" ? await T.current.play(jv.map((H) => H.midi)) : await T.current.loop($o.map((H) => H.midi), (H) => {
        ce === U.current && w(H);
      }, v);
    } catch (H) {
      ce === U.current && V(Pa(H));
    } finally {
      ce === U.current && (R(null), w(null));
    }
  }
  function F(J) {
    const ce = Math.max(40, Math.min(140, J));
    j(ce), T.current.setLoopTempo(ce);
    try {
      localStorage.setItem(Vf, String(ce));
    } catch {
    }
  }
  function re(J) {
    J > o || (I(), f(J), m(!1), b("roots"));
  }
  function ee() {
    I();
    const J = Math.min(4, d + 1);
    if (f(J), m(!1), b("roots"), J > o) {
      c(J);
      try {
        localStorage.setItem(Bf, String(J));
      } catch {
      }
    }
  }
  const xe = (J, ce) => d < 2 || d === 2 && p && ef.has(ce) || d === 3 && (E === "all" || E === "roots" && tf(J)), Ee = zf.filter((J) => xe(J.midi, Ue(J))).map((J) => ({
    ...J,
    label: d < 2 || d === 2 && p || d === 3 && E === "all" ? Ae(J.midi) : "A",
    kind: d < 2 && z?.string === J.string && z?.fret === J.fret ? "playing" : tf(J.midi) ? "answer" : ef.has(Ue(J)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      I(), s();
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
        I(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
        I(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => re(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: So.map((J, ce) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: ce === d ? "journey-step current" : "journey-step",
        "aria-current": ce === d ? "step" : void 0,
        disabled: ce > o,
        onClick: () => re(ce),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: ce > o ? "🔒" : ce < o ? "✓" : ce + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: J.title })
        ]
      },
      J.title
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
              "aria-pressed": C === "whole",
              onClick: () => C === "whole" ? I() : void O("whole"),
              children: C === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "once",
              onClick: () => C === "once" ? I() : void O("once"),
              children: C === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "transition",
              onClick: () => C === "transition" ? I() : void O("transition"),
              children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
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
                  checked: E === J.value,
                  onChange: () => b(J.value)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { children: J.name })
            ] }, J.value))
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C === "once" ? I() : void O("once"), children: C === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C === "transition" ? I() : void O("transition"), children: C === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: C === "whole" ? z && d < 2 ? `Nyt soi ${Ae(z.midi, !1, !0)} · ${Xt[z.string]}-kieli, nauha ${z.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : C === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : C === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        S && /* @__PURE__ */ r.jsx("p", { role: "alert", className: "error", children: S }),
        /* @__PURE__ */ r.jsx(
          oi,
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
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? E === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : E === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (d === 1 || d === 2) && /* @__PURE__ */ r.jsx(
          Qo,
          {
            pieceId: "pentatonic-bridge",
            stage: d === 1 ? "fingering" : "memory",
            onBeforePlay: I,
            stopHandleRef: B
          },
          `bridge:${d}`
        ),
        d === 3 && /* @__PURE__ */ r.jsx($f, {}),
        /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ r.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: ee, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
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
const Xr = "musiikin-kartta:skaalapolku:v1", ja = "musiikin-kartta:skaalapolku:position-2:v1", wo = "musiikin-kartta:skaalapolku:position-3:v1", xa = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Ta = "musiikin-kartta:skaalapolku:active-position:v1", Kf = "musiikin-kartta:skaalapolku:tempo:v1", ir = 75, Fo = 40, Io = 140;
function Nv() {
  try {
    const s = localStorage.getItem(Kf);
    if (s === null) return ir;
    const a = Number(s);
    return Number.isInteger(a) && a >= Fo && a <= Io && a % 5 === 0 ? a : ir;
  } catch {
    return ir;
  }
}
const No = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], rf = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function En(s = Xr) {
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
    return s === "3" && En(xa) === 4 ? 3 : En(Xr) === 4 && (s === "2" || s === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Ev() {
  try {
    return En(ja) === 4 && localStorage.getItem(Ta) === "bridge";
  } catch {
    return !1;
  }
}
function Cv({ onBack: s }) {
  const [a, o] = M.useState(Eo), [c, d] = M.useState(Ev), [f, p] = M.useState(() => ({
    1: En(Xr),
    2: En(ja),
    3: En(wo)
  })), [m, E] = M.useState(() => En(Eo() === 3 ? wo : Eo() === 2 ? ja : Xr)), b = f[a], [v, j] = M.useState(!1), [C, R] = M.useState("roots"), [P, w] = M.useState(Nv), [S, V] = M.useState(null), [T, U] = M.useState(null), [B, z] = M.useState(""), I = M.useRef(new rs()), O = M.useRef(0), F = M.useRef(null);
  function re(G) {
    const K = Math.max(Fo, Math.min(Io, G));
    w(K), I.current.setLoopTempo(K);
    try {
      localStorage.setItem(Kf, String(K));
    } catch {
    }
  }
  function ee() {
    F.current?.(), O.current++, I.current.stop(), V(null), U(null);
  }
  M.useEffect(() => {
    const G = () => {
      document.hidden && (O.current++, I.current.stop(), V(null), U(null));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), O.current++, I.current.stop();
    };
  }, []);
  const xe = De.fingeringBoxes(9, De.SCALES.mp, "pentatonic", [a])[0].positions[0], Ee = xe.strings.flatMap((G, K) => G.map((te) => Fe(K, te))).sort((G, K) => G.midi - K.midi || K.string - G.string), J = [...Ee, ...Ee.slice(1, -1).reverse()], ce = T === null ? null : J[T], H = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], ue = xe.start, le = xe.end, W = (G) => Ve(G) === 9, oe = (G) => m < 2 ? !0 : m === 2 ? v && W(G) : C === "scale" || C === "roots" && W(G), q = Ee.filter((G) => oe(G.midi)).map((G) => ({
    ...G,
    label: m < 2 || m === 3 && C === "scale" ? Ae(G.midi) : "A",
    kind: m < 2 && ce?.string === G.string && ce.fret === G.fret ? "playing" : W(G.midi) ? "answer" : "shape"
  }));
  async function x(G) {
    F.current?.();
    const K = ++O.current;
    I.current.stop(), U(null), z(""), V(G);
    try {
      G === "phrase" ? await I.current.play(H) : await I.current.loop(J.map((te) => te.midi), (te) => {
        K === O.current && U(te);
      }, m === 2 ? P : ir);
    } catch (te) {
      K === O.current && z(Pa(te));
    } finally {
      K === O.current && (V(null), U(null));
    }
  }
  function y() {
    ee();
    const G = Math.min(4, m + 1);
    if (E(G), j(!1), R("roots"), G > b) {
      p((te) => ({ ...te, [a]: G }));
      const K = a === 1 ? Xr : a === 2 ? ja : wo;
      try {
        localStorage.setItem(K, String(G));
      } catch {
      }
    }
  }
  function ie(G) {
    G > b || (ee(), E(G), j(!1), R("roots"));
  }
  function fe(G) {
    if (!(G === 2 && f[1] < 4) && !(G === 3 && En(xa) < 4)) {
      ee(), d(!1), o(G), E(f[G]), j(!1), R("roots"), z("");
      try {
        localStorage.setItem(Ta, String(G));
      } catch {
      }
    }
  }
  function Se() {
    if (!(f[2] < 4)) {
      ee(), d(!0), j(!1), z("");
      try {
        localStorage.setItem(Ta, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ r.jsx(wv, { onBack: s, onPosition: fe }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ee(), s();
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
      le,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => fe(1), children: "Positio 1" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: f[1] < 4,
          onClick: () => fe(2),
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
          disabled: En(xa) < 4,
          onClick: () => fe(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: No.map((G, K) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: K === m ? "journey-step current" : "journey-step",
        "aria-current": K === m ? "step" : void 0,
        disabled: K > b,
        onClick: () => ie(K),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: K > b ? "🔒" : K < b ? "✓" : K + 1 }),
          /* @__PURE__ */ r.jsx("span", { children: K === 4 ? `Positio ${a} harjoiteltu` : G.title })
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
              disabled: P <= Fo,
              onClick: () => re(P - 5),
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
              disabled: P >= Io,
              onClick: () => re(P + 5),
              children: "+ 5"
            }
          ),
          P !== ir && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => re(ir),
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
              onClick: () => S === "loop" ? ee() : void x("loop"),
              children: S === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => S === "phrase" ? ee() : void x("phrase"), children: S === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: S === "loop" ? ce && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ae(ce.midi, !1, !0)} · ${Xt[ce.string]}-kieli, nauha ${ce.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        B && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: B }),
        m >= 1 && m <= 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          m === 2 && /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", "aria-pressed": v, onClick: () => j((G) => !G), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ie(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ r.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              rf.map((G) => /* @__PURE__ */ r.jsxs("label", { children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: G.value,
                    checked: C === G.value,
                    onChange: () => R(G.value)
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { children: G.label })
              ] }, G.value))
            ] }),
            a !== 1 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
              x("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ r.jsx(oi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: le, fixed: "box" }, marks: q, disabled: !0, follow: "playing", playback: S, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ r.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? rf.find((G) => G.value === C).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(oi, { area: { strings: [0, 1, 2, 3, 4, 5], min: ue, max: le, fixed: "box" }, marks: q, disabled: !0, follow: "playing", playback: S, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        a === 1 && (m === 1 || m === 2) && /* @__PURE__ */ r.jsx(
          Qo,
          {
            pieceId: "wayfaring",
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: ee,
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
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ie(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => fe(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: Se, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => fe(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        f[1] < 4 ? "🔒 Positio 2" : f[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        f[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        En(xa) < 4 ? "🔒 Positio 3" : f[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Tv = ["ionian", "aeolian"], tr = {
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
      Fe(4, 3),
      Fe(4, 5),
      Fe(3, 2),
      Fe(3, 3),
      Fe(3, 5),
      Fe(2, 2),
      Fe(2, 4),
      Fe(2, 5)
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
      Fe(5, 5),
      Fe(5, 7),
      Fe(5, 8),
      Fe(4, 5),
      Fe(4, 7),
      Fe(4, 8),
      Fe(3, 5),
      Fe(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, Uf = (s) => "musiikin-kartta:moodipolku:" + s + ":v1", Hf = "musiikin-kartta:moodipolku:active:v1", Mv = (s) => {
  const a = tr[s].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, _v = (s) => [...Mv(s), tr[s].positions[0]], sf = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Sa(s) {
  try {
    const a = Number(localStorage.getItem(Uf(s)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function af() {
  try {
    return localStorage.getItem(Hf) === "aeolian" && Sa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function bv({ onBack: s }) {
  const [a, o] = M.useState(af), [c, d] = M.useState(() => ({
    ionian: Sa("ionian"),
    aeolian: Sa("aeolian")
  })), [f, p] = M.useState(() => Sa(af())), [m, E] = M.useState(null), [b, v] = M.useState(null), [j, C] = M.useState(!1), [R, P] = M.useState("roots"), [w, S] = M.useState(""), [V, T] = M.useState(null), [U, B] = M.useState(null), z = M.useRef(new rs()), I = M.useRef(0), O = M.useRef(null), F = tr[a], re = _v(a), ee = m === "scale" && b !== null ? re[b] : null;
  function xe() {
    O.current?.(), I.current++, z.current.stop(), E(null), v(null);
  }
  M.useEffect(() => {
    const y = () => {
      document.hidden && (I.current++, z.current.stop(), E(null), v(null));
    };
    return document.addEventListener("visibilitychange", y), () => {
      document.removeEventListener("visibilitychange", y), I.current++, z.current.stop();
    };
  }, []);
  async function Ee(y, ie, fe = !1) {
    O.current?.();
    const Se = ++I.current;
    z.current.stop(), v(null), S(""), E(y);
    try {
      const G = fe ? await z.current.loop(ie, void 0, 75) : await z.current.play(ie, (K) => {
        Se === I.current && y === "scale" && v(K);
      });
      return Se === I.current && G;
    } catch (G) {
      return Se === I.current && S(Pa(G)), !1;
    } finally {
      Se === I.current && (E(null), v(null));
    }
  }
  function J(y) {
    y > c[a] || (xe(), p(y), T(null), B(null), C(!1), P("roots"), S(""));
  }
  function ce() {
    xe();
    const y = Math.min(5, f + 1);
    if (p(y), T(null), B(null), C(!1), P("roots"), y > c[a]) {
      d((ie) => ({ ...ie, [a]: y }));
      try {
        localStorage.setItem(Uf(a), String(y));
      } catch {
      }
    }
  }
  function H(y) {
    if (!(y === "aeolian" && c.ionian < 5)) {
      xe(), o(y), p(c[y]), T(null), B(null), C(!1), P("roots"), S("");
      try {
        localStorage.setItem(Hf, y);
      } catch {
      }
    }
  }
  async function ue() {
    xe(), B(null), T(null);
    const y = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Ee("comparison", tr[y].phrase) && T(y);
  }
  const le = (y) => Ve(y) === F.tonic, W = F.positions.filter((y) => f < 2 ? !0 : f === 2 ? j && le(y.midi) : f === 4 ? R === "all" || R === "roots" && le(y.midi) : !1).map((y) => ({
    ...y,
    label: f === 2 || f === 4 && R === "roots" ? F.tonicName : Ae(y.midi),
    kind: ee?.string === y.string && ee.fret === y.fret ? "playing" : le(y.midi) ? "answer" : "shape"
  })), oe = [...new Set(F.positions.map((y) => y.string))], q = Math.min(...F.positions.map((y) => y.fret)), x = Math.max(...F.positions.map((y) => y.fret));
  return /* @__PURE__ */ r.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
      xe(), s();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ r.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Tv.indexOf(a) + 1,
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
      sf.map((y, ie) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: f === ie ? "journey-step current" : "journey-step",
          "aria-current": f === ie ? "step" : void 0,
          disabled: ie > c[a],
          onClick: () => J(ie),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "journey-index", children: ie > c[a] ? "🔒" : ie < c[a] ? "✓" : ie + 1 }),
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
        /* @__PURE__ */ r.jsx("h3", { id: "mode-lesson-title", children: f === 5 ? "Moodi harjoiteltu" : sf[f] }),
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
                ue();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          V !== null && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            Ee("comparison", tr[V].phrase);
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
                onClick: () => B("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                disabled: U !== null || m !== null,
                onClick: () => B("aeolian"),
                children: "A"
              }
            )
          ] }),
          U !== null && /* @__PURE__ */ r.jsxs("p", { role: "status", children: [
            U === V ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            tr[V].tonicName,
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
          ].map(([y, ie]) => /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: y,
                checked: R === y,
                onChange: () => P(y)
              }
            ),
            /* @__PURE__ */ r.jsx("span", { children: ie })
          ] }, y))
        ] })
      ] }),
      f === 2 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => C((y) => !y), children: j ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      f < 3 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? xe() : void Ee("scale", re.map((y) => y.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      f === 4 && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? xe() : void Ee("accompaniment", F.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      f < 2 && m === "scale" && ee && /* @__PURE__ */ r.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Ae(ee.midi, !1, !0),
        " · ",
        Xt[ee.string],
        "-kieli, nauha ",
        ee.fret,
        "."
      ] }),
      f !== 3 && f !== 5 && /* @__PURE__ */ r.jsx(
        oi,
        {
          area: { strings: oe, min: q, max: x, fixed: "box" },
          marks: W,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: F.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (f === 1 || f === 2) && /* @__PURE__ */ r.jsx(
        Qo,
        {
          pieceId: "nooa",
          stage: f === 1 ? "fingering" : "memory",
          onBeforePlay: xe,
          stopHandleRef: O
        },
        `nooa:${f}`
      ),
      w && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: w }),
      f < 5 && /* @__PURE__ */ r.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ r.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: ce, children: f === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
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
            onClick: () => H("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ r.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function Pv({ onBack: s }) {
  const [a, o] = M.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ r.jsx(Cv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ r.jsx(bv, { onBack: () => o(null) }) : /* @__PURE__ */ r.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
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
const Qr = [0, 2, 4, 5, 7, 9, 11], ka = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function Av({ onBack: s }) {
  const [a, o] = M.useState(0), [c, d] = M.useState([]), [f, p] = M.useState(!1), [m, E] = M.useState(""), [b, v] = M.useState(0), j = a >= Qr.length, C = Qr[Math.min(a, Qr.length - 1)], R = or(ka.strings, ka.min, ka.max).filter((z) => Ve(z.midi) === C), P = R.filter((z) => !c.includes(Ue(z))), w = P.length === 0 && !j, S = !w && f ? P[0] : void 0, V = [
    ...R.filter((z) => c.includes(Ue(z))).map((z) => ({ ...z, kind: "answer", label: Ae(z.midi) })),
    ...S ? [{ ...S, kind: "anchor", label: "?" }] : []
  ];
  function T(z) {
    if (j || w) return;
    const I = Ue(z);
    if (Ve(z.midi) !== C) {
      v((re) => re + 1), E(`Valitsit sävelen ${Ae(z.midi)}. Etsi ${Ae(C)}.`);
      return;
    }
    if (c.includes(I)) {
      E("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const O = [...c, I];
    d(O), p(!1);
    const F = R.length - O.length;
    E(F ? `Oikein! ${Ae(C)} löytyi ${Xt[z.string]}-kieleltä (${Ci(z.fret)}). Vielä ${F}.` : `Löysit kaikki ${R.length} ${Ae(C)}-säveltä tällä alueella.`);
  }
  function U() {
    w && (o((z) => z + 1), d([]), p(!1), E(""));
  }
  function B() {
    o(0), d([]), p(!1), E(""), v(0);
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: s, children: "← Harjoitusvalikko" }),
    /* @__PURE__ */ r.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ r.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ r.jsx("p", { className: "learning-lead", children: "Etsi kaikkien seitsemän luonnollisen sävelen sijainnit nauhoilta 0–5. Aloita C-sävelestä." }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: j ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        b ? `Vääriä valintoja yhteensä ${b}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: B, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ae(C),
          "-sävelet"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          Qr.length
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ae(C),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ r.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        R.length
      ] }),
      /* @__PURE__ */ r.jsx(
        oi,
        {
          area: ka,
          marks: V,
          onAnswer: T,
          disabled: w,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "p",
        {
          className: w ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        !w && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            onClick: () => p((z) => !z),
            children: f ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        w && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: U, children: a === Qr.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" })
      ] })
    ] }) })
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
}, Co = ["C", "G", "D", "Em"], lf = ["C", "G", "D", "Em", "Am", "E", "A"], Rv = { min: 0, max: 3, fixed: "" };
function of(s) {
  const a = [...s];
  for (let o = a.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [a[o], a[c]] = [a[c], a[o]];
  }
  return a;
}
function Ov({ onBack: s }) {
  const [a, o] = M.useState(4), [c, d] = M.useState(() => of(Co)), [f, p] = M.useState(0), [m, E] = M.useState(null), [b, v] = M.useState([]), [j, C] = M.useState(0), R = f >= c.length, P = Lv[c[Math.min(f, c.length - 1)]], w = a === 4 ? Co : lf, S = P.frets.flatMap((O, F) => O === null ? [] : [F]), V = P.frets.flatMap((O, F) => O === null ? [F] : []), T = { ...Rv, strings: S }, U = P.frets.flatMap((O, F) => O === null ? [] : [{
    ...Fe(F, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function B(O = a) {
    o(O), d(of(O === 4 ? Co : lf)), p(0), E(null), v([]), C(0);
  }
  function z(O) {
    m || R || b.includes(O) || (O === P.name ? E(O) : (v((F) => [...F, O]), C((F) => F + 1)));
  }
  function I() {
    m && (p((O) => O + 1), E(null), v([]));
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
            onChange: () => B(4)
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
            onChange: () => B(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "journey-lesson", children: R ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        j ? `Vääriä valintoja yhteensä ${j}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: () => B(), children: "Harjoittele uudelleen" }) })
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
        oi,
        {
          area: T,
          marks: U,
          mutedStrings: V,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ r.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((O) => /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: m === O ? "right" : b.includes(O) ? "wrong" : "",
          disabled: !!m || b.includes(O),
          "aria-pressed": m === O,
          onClick: () => z(O),
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
      m && /* @__PURE__ */ r.jsx("div", { className: "action-row", children: /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", onClick: I, children: f === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ye = (s, a) => ({ first: s, ...a ? { second: a } : {} }), rr = () => [
  ye("Gm", "F"),
  ye("Gm"),
  ye("B♭", "F"),
  ye("Gm"),
  ye("Gm", "F"),
  ye("Gm"),
  ye("E♭", "F"),
  ye("Gm")
], sr = () => [
  ye("B♭", "F"),
  ye("Gm", "Dm"),
  ye("E♭", "F"),
  ye("Gm", "Dm")
], ar = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], Gf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], $v = [
  { id: "intro", title: "Intro", start: 0, bars: [ye("Gm", "F"), ye("Gm"), ye("B♭", "F"), ye("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: rr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...sr(), ye("E♭"), { ...ye("E♭"), passingBass: "F" }],
    lyrics: ar,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [ye("Gm", "F"), ye("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: rr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...sr(), ye("E♭"), ye("F")],
    lyrics: ar
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [ye("Gm"), ye("Dm"), ye("F"), ye("C"), ye("Gm"), ye("Dm"), ye("E♭"), ye("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: rr(),
    lyrics: Gf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...sr(), ye("E♭", "F"), ye("Gm")],
    lyrics: ar
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      ye("E♭", "F"),
      { ...ye("Gm"), possibleChord: "Dm" },
      ye("E♭", "F"),
      ye("Gm", "F"),
      { ...ye("Gm"), possibleChord: "Dm" },
      ye("Gm", "F"),
      ye("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], Fv = [
  { id: "intro", title: "Intro", start: 0, bars: [ye("Gm", "F"), ye("Gm"), ye("B♭", "F"), ye("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: rr(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...sr(), ye("E♭"), ye("E♭")],
    lyrics: ar
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: rr(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...sr(), ye("E♭"), ye("F")],
    lyrics: ar
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [ye("Gm"), ye("Dm"), ye("F"), ye("C"), ye("Gm"), ye("Dm"), ye("E♭"), ye("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: rr(),
    lyrics: Gf
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...sr(), ye("B♭", "F"), ye("Gm"), ye("E♭", "F"), ye("Gm")],
    lyrics: ar
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [ye("E♭", "F"), ye("Gm", "F"), ye("E♭", "F"), ye("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ur = {
  acoustic: $v,
  normal: Fv
}, Iv = "normal", Do = "yksi-sointu-kaksi-askelta", Yo = {
  acoustic: Do + "-akustinen",
  normal: Do + "-normaali"
}, Wf = (s) => s === Do || Object.values(Yo).includes(s ?? "");
function Dv(s) {
  const a = Object.entries(Yo).find(([, o]) => o === s);
  return a ? a[0] : null;
}
const zv = (s) => Yo[s], uf = (s) => {
  const a = Math.max(0, Math.floor(Number.isFinite(s) ? s : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Jo(s, a = "acoustic") {
  const o = ur[a], c = o[s], d = o[s + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Qf(s, a = "acoustic") {
  const o = ur[a], c = Math.max(0, Number.isFinite(s) ? s : 0);
  let d = 0;
  for (let j = 1; j < o.length && !(c < o[j].start); j++)
    d = j;
  const f = o[d];
  let p = 0;
  for (; p + 1 < f.bars.length && c >= ns(d, p + 1, a); )
    p++;
  const m = ns(d, p, a), E = Jo(d, a) / 4;
  let b = 1;
  for (; b < 4 && c >= m + b * E; ) b++;
  const v = f.bars[p];
  return {
    section: f,
    sectionIndex: d,
    barIndex: p,
    beat: b,
    chord: v.second && b >= 3 ? v.second : v.first
  };
}
function ns(s, a, o = "acoustic") {
  return ur[o][s].start + Jo(s, o) * a;
}
function Bv(s) {
  return ur[s].flatMap((a, o) => a.bars.flatMap((c, d) => {
    const f = ns(o, d, s), p = { section: a, sectionIndex: o, barIndex: d, part: "first", chord: c.first, time: f };
    if (!c.second) return [p];
    const m = Jo(o, s) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: f + m }];
  }));
}
function Vv(s, a = "acoustic", o = !1) {
  const c = ur[a], d = Qf(s, a), f = d.section.bars[d.barIndex], p = d.beat >= 3 && f.second ? "second" : "first", m = Bv(a), E = m.findIndex((R) => R.sectionIndex === d.sectionIndex && R.barIndex === d.barIndex && R.part === p), v = [
    ...m.slice(E + 1).map((R) => ({ ...R, wrapped: !1 })),
    ...o ? m.slice(0, E + 1).map((R) => ({ ...R, wrapped: !0 })) : []
  ].find((R) => R.chord !== d.chord) ?? null;
  let j = null;
  const C = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!C || o)) {
    const R = C ? 0 : d.sectionIndex + 1, P = c[R], w = P.bars[0].first;
    j = {
      section: P,
      sectionIndex: R,
      firstChord: w,
      wrapped: C,
      continues: w === (f.second ?? f.first)
    };
  }
  return { nextChord: v, nextSection: j };
}
function Kv(s) {
  const a = s.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, E) => m + o(E), 0);
  let d = 0, f = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const E = Math.abs(c - 2 * p);
    (E < f || E === f && p >= c - p) && (d = m, f = E), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const zo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Yf = "musiikin-kartta:kappale-sointuvihjeet:v1", wa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, cf = {
  showChords: !0,
  level: 0,
  fadeOrder: wa
};
function ya(s, a) {
  return !a.showChords || a.level >= a.fadeOrder[s];
}
function df(s) {
  if (!s) return { ...cf, fadeOrder: { ...wa } };
  try {
    const a = JSON.parse(s);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, c = o.level, d = { ...wa }, f = o.fadeOrder;
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
    return { ...cf, fadeOrder: { ...wa } };
  }
}
function Uv() {
  try {
    return df(localStorage.getItem(Yf));
  } catch {
    return df(null);
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
  const [d, f] = M.useState(Uv), [p, m] = M.useState(null), [E, b] = M.useState(!1), [v, j] = M.useState("full"), C = (H) => Wv(H, v), R = ur[s], P = Qf(a, s), { section: w, sectionIndex: S, barIndex: V, beat: T, chord: U } = P, B = T >= 3 && w.bars[V].second ? "second" : "first", z = (H, ue, le) => `${s}:${H}:${ue}:${le}`, I = (H, ue) => z(w.id, H, ue), O = I(V, B), F = ya(U, d), re = F && p === O, ee = (H, ue, le) => !ya(H, d) || p === I(ue, le), xe = d.showChords && d.level === 0, Ee = zo.filter((H) => ya(H, d)).length, { nextSection: J } = Vv(a, s, o), ce = !!J && ya(J.firstChord, d);
  return M.useEffect(() => {
    m(null);
  }, [O]), M.useEffect(() => {
    try {
      localStorage.setItem(Yf, JSON.stringify(d));
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
              f((ue) => ({ ...ue, showChords: H.target.checked })), m(null);
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
            checked: E,
            onChange: (H) => b(H.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ r.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, ue]) => /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: H,
              checked: v === H,
              onChange: () => j(H)
            }
          ),
          /* @__PURE__ */ r.jsx("span", { children: ue })
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
              const ue = Number(H.target.value);
              f((le) => ({ ...le, level: ue })), m(null);
            },
            children: Qv.map((H) => /* @__PURE__ */ r.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: Ee === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${Ee}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ r.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ r.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ r.jsx("div", { className: "song-fade-order", children: zo.map((H) => /* @__PURE__ */ r.jsxs("label", { children: [
        H,
        /* @__PURE__ */ r.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: d.fadeOrder[H],
            onChange: (ue) => {
              const le = Number(ue.target.value);
              f((W) => ({ ...W, fadeOrder: { ...W.fadeOrder, [H]: le } })), m(null);
            },
            children: Yv.map((ue) => /* @__PURE__ */ r.jsx("option", { value: ue.value, children: ue.label }, ue.value))
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
            value: w.id,
            onChange: (H) => {
              const ue = R.find((le) => le.id === H.target.value);
              ue && c(ue.start);
            },
            children: R.map((H) => /* @__PURE__ */ r.jsxs("option", { value: H.id, children: [
              uf(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ r.jsxs("p", { className: "song-current-chord", children: [
          F && !re ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ r.jsx("strong", { children: F && !re ? "?" : C(U) }),
          /* @__PURE__ */ r.jsxs("span", { children: [
            w.title,
            ", tahti ",
            V + 1,
            ", isku ",
            T,
            "/4"
          ] }),
          F && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(re ? null : O),
              children: re ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        J && /* @__PURE__ */ r.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ r.jsx("strong", { children: ce ? "?" : C(J.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": w.title + ": tahdit", children: w.bars.map((H, ue) => {
      const le = ue === V, W = le && (T < 3 || !H.second), oe = le && T >= 3 && !!H.second, q = ee(H.first, ue, "first"), x = H.second ? ee(H.second, ue, "second") : !1, y = (q ? C(H.first) : "sointu piilossa") + (H.second ? " " + (x ? C(H.second) : "sointu piilossa") : "") + (xe && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (xe && H.possibleChord ? " (" + C(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (le ? " active" : ""),
          "aria-pressed": le,
          "aria-label": "Tahti " + (ue + 1) + ": " + y + ". Siirry kohtaan " + uf(ns(S, ue, s)),
          onClick: () => c(ns(S, ue, s)),
          children: [
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ue + 1
            ] }),
            /* @__PURE__ */ r.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ r.jsx("strong", { className: W && q ? "now" : "", children: q ? C(H.first) : "?" }),
              H.second && /* @__PURE__ */ r.jsx("strong", { className: oe && x ? "now" : "", children: x ? C(H.second) : "?" })
            ] }),
            xe && H.passingBass && /* @__PURE__ */ r.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            xe && H.possibleChord && /* @__PURE__ */ r.jsxs("small", { children: [
              "Mahdollinen (",
              C(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ue
      );
    }) }),
    E ? /* @__PURE__ */ r.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ r.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ r.jsx("div", { className: "song-all-lyrics-grid", children: Kv(R).map((H, ue) => /* @__PURE__ */ r.jsx("div", { className: "song-lyrics-column", children: H.map((le) => /* @__PURE__ */ r.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ r.jsx("h5", { children: le.title }),
        le.lyrics?.map((W, oe) => /* @__PURE__ */ r.jsx("p", { children: W }, oe))
      ] }, le.id)) }, ue)) }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : w.lyrics && /* @__PURE__ */ r.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ r.jsxs("h4", { children: [
        w.title,
        ": sanat"
      ] }),
      w.lyrics.map((H, ue) => /* @__PURE__ */ r.jsx("p", { children: H }, ue))
    ] }),
    xe && w.note && /* @__PURE__ */ r.jsx("p", { className: "song-chord-note", children: w.note })
  ] });
}
const Ma = 7, Xv = { name: "bluesasteikko", base: De.SCALES.mp.base, add: [[6, "♭5"]] }, To = [
  {
    id: "mp",
    title: "G-mollipentatoninen",
    scale: De.SCALES.mp,
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
    scale: De.SCALES.aeolian,
    system: "3nps",
    note: "Kappaleen mollisävellajin kaikki seitsemän säveltä. Kitarasoolon C-soinnun aikana E♭ hankaa soinnun E-säveltä vastaan."
  }
];
function Zv(s) {
  return De.scaleNotes(s).map(([a, o]) => De.noteName(Ma, a, o));
}
const Jf = (s) => s === "pentatonic" ? 5 : 7;
function qv(s, a, o) {
  const c = a.filter((m) => m >= 1 && m <= Jf(s.system)), d = De.fingeringBoxes(Ma, s.scale, s.system, c, o);
  if (s.id !== "blues") return d;
  const f = s.scale.add.map(([m]) => (Ma + m) % 12), p = (m, E) => E >= 0 && E <= o && f.includes((De.OPEN_PITCHES[m] + E) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((E) => {
    const b = E.strings.map((j, C) => {
      if (!j.length) return j;
      const R = j[j.length - 1];
      return p(C, R + 1) ? [...j.slice(0, -1), R + 1] : j;
    }), v = b.flat();
    return { ...E, strings: b, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const ff = 17;
function ek({ open: s }) {
  const [a, o] = M.useState("mp"), [c, d] = M.useState({ pentatonic: [], "3nps": [] }), [f, p] = M.useState(!1), [m, E] = M.useState(!1), b = M.useRef(null), v = To.find((S) => S.id === a) ?? To[0], j = c[v.system], C = qv(v, j, ff), R = C.some((S) => S.positions.length > 0), P = De.renderBoard(Ma, v.scale, ff, {
    automatic: !0,
    boxes: C,
    onlyBoxNotes: R && f,
    label: v.title + (j.length ? ", " + j.map((S) => "boksi " + S).join(", ") : "")
  });
  M.useEffect(() => {
    const S = b.current;
    !S || !s || C.length === 1 && De.revealPositions(S, ".box-highlight");
  }, [P, s]);
  function w(S, V) {
    d((T) => ({ ...T, [v.system]: V ? [...T[v.system], S].sort((U, B) => U - B) : T[v.system].filter((U) => U !== S) }));
  }
  return /* @__PURE__ */ r.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ r.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ r.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ r.jsx("select", { value: a, onChange: (S) => o(S.target.value), children: To.map((S) => /* @__PURE__ */ r.jsx("option", { value: S.id, children: S.title }, S.id)) })
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
      /* @__PURE__ */ r.jsx("summary", { onClick: (S) => {
        S.preventDefault(), E((V) => !V);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ r.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ r.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: Jf(v.system) }, (S, V) => V + 1).map((S) => /* @__PURE__ */ r.jsxs("label", { className: "box-toggle", "data-box": S, children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "checkbox",
            value: S,
            checked: j.includes(S),
            onChange: (V) => w(S, V.target.checked)
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
            checked: R && f,
            disabled: !R,
            onChange: (S) => p(S.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: R ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Xf = null;
function tk() {
  return Dv(new URLSearchParams(location.search).get("kappale")) ?? Xf ?? Iv;
}
function nk(s) {
  Xf = s;
  const a = new URL(location.href);
  Wf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", zv(s)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
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
}, hf = 1e-3;
function mf(s, a) {
  try {
    s.currentTime = a;
  } catch {
  }
}
function pf(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const a = Math.floor(s);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function rk({ onBack: s }) {
  const a = M.useRef(null), o = M.useRef(null), c = M.useRef(null), d = M.useRef(0), f = M.useRef(new Of()), p = M.useRef(null), [m, E] = M.useState(tk), b = ik[m], [v, j] = M.useState(!1), [C, R] = M.useState(!0), [P, w] = M.useState(!0), [S, V] = M.useState(!1), [T, U] = M.useState(!1), [B, z] = M.useState(!1), [I, O] = M.useState(Ap), [F] = M.useState(() => Up()), re = M.useRef(null), [ee, xe] = M.useState(""), [Ee, J] = M.useState(0), [ce, H] = M.useState(0), [ue, le] = M.useState("");
  function W(D = !1, ne) {
    const ae = a.current;
    if (ae)
      for (const de of [o.current, c.current])
        de && (!ne || de === ne) && f.current.align(ae, de, D);
  }
  function oe() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, C],
      ["vocals", c.current, P]
    ];
  }
  function q(D = I, ne) {
    for (const [ae, de, Ne] of oe()) {
      if (!de) continue;
      const we = Bd(ae, D, ne?.[ae] ?? Ne);
      if (F === "webaudio" && re.current?.routed(de))
        re.current.setLevel(de, we);
      else
        try {
          de.volume = Bd(ae, D);
        } catch {
        }
    }
  }
  function x(D) {
    O(D), Lp(D), q(D);
  }
  function y() {
    d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), j(!1);
  }
  function ie(D) {
    if (D !== m) {
      p.current = null, y();
      for (const ne of [a.current, o.current, c.current])
        if (ne)
          try {
            ne.currentTime = 0;
          } catch {
          }
      J(0), H(0), le(""), E(D), nk(D);
    }
  }
  function fe(D) {
    const ne = a.current;
    if (!ne || !Number.isFinite(D)) return;
    const ae = Math.max(0, Math.min(D, Number.isFinite(ne.duration) ? ne.duration : D));
    p.current = ae, J(ae), mf(ne, ae);
  }
  function Se(D) {
    const ne = p.current;
    if (ne === null || D !== a.current || D.seeking) return;
    const ae = Number.isFinite(D.duration) ? Math.min(ne, D.duration) : ne;
    if (ae !== ne && (p.current = ae, J(ae)), Math.abs(D.currentTime - ae) < hf) return;
    const de = D.seekable;
    for (let Ne = 0; Ne < de.length; Ne++)
      if (de.start(Ne) <= ae && ae <= de.end(Ne)) {
        mf(D, ae);
        return;
      }
  }
  function G(D) {
    if (D !== a.current) return;
    const ne = p.current;
    if (ne === null)
      J(D.currentTime);
    else if (D.readyState >= 1 && !D.seeking && Math.abs(D.currentTime - ne) < hf) {
      p.current = null, W(!0);
      return;
    }
    D.paused || W();
  }
  async function K() {
    const D = a.current, ne = o.current, ae = c.current;
    if (!D || !ne || !ae) return;
    if (v) {
      y();
      return;
    }
    le("");
    const de = p.current ?? D.currentTime;
    if (Number.isFinite(D.duration) && de >= D.duration - 0.05 && fe(0), Se(D), F === "webaudio") {
      const we = re.current ??= new Wp(), Le = we.unlock() && [D, ne, ae].map((Je) => we.route(Je)).every(Boolean);
      xe(Le ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + we.lastError);
    }
    q(), ne.muted = !C, ae.muted = !P, W(!0);
    const Ne = ++d.current;
    try {
      C || ne.pause(), P || ae.pause();
      const we = [D.play(), ...C ? [ne.play()] : [], ...P ? [ae.play()] : []];
      if (await Promise.all(we), Ne !== d.current) return;
      if (W(), j(!0), F === "webaudio" && re.current?.routed(D)) {
        const Le = re.current;
        setTimeout(() => {
          Ne === d.current && Le.state !== "running" && le(`Ääni ei käynnistynyt (Web Audio: ${Le.state}). Pysäytä ja soita uudelleen.${Le.lastError ? " " + Le.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (Ne !== d.current) return;
      y(), le("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function te(D, ne, ae) {
    if (!D) return;
    if (D.muted = !ne, !ne) {
      D.pause();
      return;
    }
    !a.current || !v || (W(!0, D), D.play().catch(() => le(ae + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function X(D) {
    R(D), q(I, { guitar: D }), te(o.current, D, "Kitararaita");
  }
  function ve(D) {
    w(D), q(I, { vocals: D }), te(c.current, D, "Lauluraita");
  }
  return M.useEffect(() => {
    const D = () => {
      document.hidden && y();
    };
    return document.addEventListener("visibilitychange", D), () => {
      document.removeEventListener("visibilitychange", D), d.current++, a.current?.pause(), o.current?.pause(), c.current?.pause(), re.current?.close();
    };
  }, []), M.useEffect(() => {
    q();
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
          onChange: (D) => ie(D.target.value),
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
          b.label,
          " · ",
          b.length,
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
            max: ce > 0 ? ce : 1,
            step: 0.1,
            value: Math.min(Ee, ce > 0 ? ce : 1),
            disabled: ce <= 0,
            onChange: (D) => fe(Number(D.target.value))
          }
        ),
        /* @__PURE__ */ r.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          pf(Ee),
          " / ",
          pf(ce)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: C,
              onChange: (D) => X(D.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              checked: P,
              onChange: (D) => ve(D.target.checked)
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
              onChange: (D) => V(D.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ r.jsxs("label", { className: "song-volume", "data-volume-mode": F, children: [
          /* @__PURE__ */ r.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ r.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            I > 0 && /* @__PURE__ */ r.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            I > 50 && /* @__PURE__ */ r.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: I,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": I + " %",
              onChange: (D) => x(Number(D.target.value))
            }
          ),
          /* @__PURE__ */ r.jsxs("output", { "aria-hidden": "true", children: [
            I,
            " %"
          ] })
        ] })
      ] }),
      ee && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: ee }),
      /* @__PURE__ */ r.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ r.jsxs("a", { href: b.download, download: b.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ r.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ r.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          b.label,
          ", koko kappale · ",
          b.downloadSize
        ] })
      ] }),
      ue && /* @__PURE__ */ r.jsx("p", { className: "backing-error", role: "alert", children: ue }),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: a,
          src: b.backing,
          preload: "metadata",
          loop: S,
          onLoadedMetadata: (D) => {
            D.currentTarget === a.current && (H(D.currentTarget.duration), Se(D.currentTarget));
          },
          onProgress: (D) => Se(D.currentTarget),
          onCanPlay: (D) => Se(D.currentTarget),
          onTimeUpdate: (D) => G(D.currentTarget),
          onEnded: (D) => {
            D.currentTarget !== a.current || D.currentTarget.loop || (p.current = null, o.current?.pause(), c.current?.pause(), j(!1), J(D.currentTarget.duration));
          },
          onPause: (D) => {
            D.currentTarget === a.current && j(!1);
          },
          onError: () => le(b.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: o,
          src: b.guitar,
          preload: "metadata",
          muted: !C,
          loop: S,
          onLoadedMetadata: () => {
            a.current?.paused && W(!0);
          },
          onError: () => le(b.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ r.jsx(
        "audio",
        {
          ref: c,
          src: b.vocals,
          preload: "metadata",
          muted: !P,
          loop: S,
          onLoadedMetadata: () => {
            a.current?.paused && W(!0);
          },
          onError: () => le(b.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-chart-collapse", open: T, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (D) => {
        D.preventDefault(), U((ne) => !ne);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ r.jsx(Jv, { version: m, position: Ee, loop: S, onSeek: fe })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { className: "song-scales-collapse", open: B, children: [
      /* @__PURE__ */ r.jsx("summary", { onClick: (D) => {
        D.preventDefault(), z((ne) => !ne);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ r.jsx(ek, { open: B })
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
}, Na = (s, a = 1) => s.toFixed(a).replace(".", ",").replace("-", "−"), Zf = (s) => {
  const a = Math.round(s);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Vo = (s) => s ? s.label || "Järjestelmän oletustulo" : "";
function sk(s, a, o, c) {
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
function qf({ frame: s, threshold: a }) {
  const o = s?.rms ?? 0, c = lr(o), d = (s?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${Na(Math.max(-60, c), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "meter-fill", style: { width: `${Gd(o) * 100}%` } }),
        /* @__PURE__ */ r.jsx("div", { className: "meter-threshold", style: { left: `${Gd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function ak({ mic: s, frame: a, heard: o, s: c, now: d }) {
  const f = Df(s.phase, a), p = o && d - o.at < 1500 ? o : null, m = f === "pitch" || f === "untuned" || p ? p ? `Kuulen: ${Ae(p.midi, c.flats, !0)} · ${Zf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : f === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : f === "silent" ? "Kuuntelen… soita sävel" : Bo[f];
  return /* @__PURE__ */ r.jsxs("div", { className: `mic-live ${f}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ r.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    s.phase === "on" && /* @__PURE__ */ r.jsx(qf, { frame: a, threshold: c.minRms })
  ] });
}
function lk({ mic: s, frame: a, heard: o, accepted: c, now: d, s: f, change: p, devices: m, locked: E, calibrating: b, calibration: v, onTest: j, onStop: C, onCalibrate: R }) {
  const P = M.useId(), w = Df(s.phase, a), S = s.purpose === "test" && s.phase !== "off" && s.phase !== "error", V = s.phase === "on", T = o && d - o.at < 1500 ? o : null, U = T && (w === "pitch" || w === "untuned"), B = V && (a?.peak ?? 0) >= 0.98, z = s.phase === "error" ? [] : sk(w, f, s.info, B), I = !f.device || m.some((F) => F.deviceId === f.device), O = (F, re) => p({ ...f, [F]: re });
  return /* @__PURE__ */ r.jsxs("section", { className: "mic-panel", "aria-labelledby": `${P}-title`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ r.jsx("h2", { id: `${P}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ r.jsx("span", { children: f.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ r.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      s.phase === "error" ? s.error : Bo[w],
      w === "pitch" && T ? ` ${Ae(T.midi, f.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: s.phase === "on" ? `Mikrofoni kuuntelee: ${Vo(s.info)}.` : s.phase === "error" ? s.error : Bo[s.phase] }),
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
          /* @__PURE__ */ r.jsx(qf, { frame: a, threshold: f.minRms }),
          /* @__PURE__ */ r.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            Na(Math.max(-60, lr(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ r.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: T ? Ae(T.midi, f.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-frequency", children: T ? `${Na(T.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-cents", children: T ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          Zf(T.cents),
          " senttiä",
          /* @__PURE__ */ r.jsx("span", { className: `cents ${T.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, T.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: U ? "" : "stale", children: [
        /* @__PURE__ */ r.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ r.jsx("dd", { "data-testid": "mic-clarity", children: T ? `${Math.round(T.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(f.clarity * 100)} %` : "–" })
      ] })
    ] }),
    V && c && d - c.timestamp < 4e3 && /* @__PURE__ */ r.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ae(c.midi, f.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    z.length > 0 && V && /* @__PURE__ */ r.jsx("ul", { className: "mic-advice", children: z.map((F) => /* @__PURE__ */ r.jsx("li", { children: F }, F)) }),
    s.phase === "error" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ r.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
      S ? /* @__PURE__ */ r.jsx("button", { type: "button", onClick: C, children: "Lopeta testi" }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: f.input === "mic" && s.phase !== "on" ? "primary" : "", disabled: E, onClick: j, children: "Testaa mikrofoni" }),
      S && V && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: b, onClick: R, children: b ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    E && s.purpose !== "test" && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ r.jsxs("fieldset", { className: "plain", disabled: E, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${P}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ r.jsxs("select", { id: `${P}-device`, value: f.device, onChange: (F) => O("device", F.target.value), children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !I && /* @__PURE__ */ r.jsx("option", { value: f.device, children: "Aiemmin valittu laite" }),
              m.map((F, re) => /* @__PURE__ */ r.jsx("option", { value: F.deviceId, children: F.label || `Äänitulo ${re + 1}` }, F.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-rms`, children: [
              "Äänikynnys · ",
              Na(lr(f.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: f.minRms, onChange: (F) => O("minRms", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(f.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: f.clarity, onChange: (F) => O("clarity", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-stability`, children: [
              "Vakaa sävel vähintään · ",
              f.stability,
              " ms"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-stability`, type: "range", min: "120", max: "800", step: "20", value: f.stability, onChange: (F) => O("stability", Number(F.target.value)) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ r.jsxs("label", { htmlFor: `${P}-cents`, children: [
              "Vireen toleranssi · ±",
              f.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ r.jsx("input", { id: `${P}-cents`, type: "range", min: "10", max: "45", step: "1", value: f.cents, onChange: (F) => O("cents", Number(F.target.value)) })
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
const ok = (s) => s.mode === "scale" ? De.scaleNotes(De.SCALES[s.scale]) : Ei[s.mode === "caged" ? "maj" : s.chord].tones, vf = (s, a) => ok(s).find(([o]) => o === a)?.[1], eh = (s) => s.mode === "scale" || s.mode === "chord" || s.mode === "caged", uk = (s) => s.direction === "up" ? "ylöspäin" : "alaspäin";
function ck(s, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : s.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function dk(s, a, o, c, d) {
  return a.choices === "degree" ? `Oikein! ${Zr(s.root, a.interval, a.degree)} on ${a.degree}. aste.` : eh(s) ? `Oikein! ${a.degree}. aste on ${Zr(s.root, a.interval, a.degree)}.` : s.mode === "interval" ? `Oikein! ${Ae(a.reference, s.flats, !0)} → ${a.name} on ${qr[a.interval]} ${uk(a)}.` : s.mode === "notes" ? o === "board" && d ? `Oikein! ${Ae(d.midi, s.flats)} on ${gf[d.string]}: ${Ci(d.fret)}.` : `Oikein! Soitit sävelen ${Ae(c, s.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function fk(s, a, o, c, d) {
  if (o === "note") return `Ei ${Ae(c, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${vf(s, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const f = Ve(d.midi) === Ve(a.midi);
  if (s.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${Xt[d.string]}-kieli. Etsi sävel ${Ho[a.position.string]}.` : f ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Ae(d.midi, s.flats)}. Etsi ${a.name}.`;
  if (eh(s)) {
    const p = Ve(d.midi - s.root), m = vf(s, p), E = s.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? f && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : f ? `Oikea sävel, mutta ${s.mode === "caged" ? "muodon" : s.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Zr(s.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Ae(d.midi, s.flats)}, joka ei kuulu ${E}. Etsi ${a.degree}. aste.`;
  }
  return f ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ae(d.midi, s.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function hk(s, a, o) {
  const c = Ae(o, s.flats, !0);
  return Ve(o) === Ve(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function th(s, a = !1) {
  const o = s.split(":"), c = (p) => Number(o[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), f = (p, m) => Xt[p] ? `${Xt[p]}-kieli, ${Ci(m)}` : null;
  switch (o[0]) {
    case "notes":
      return d(1, 2) ? f(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Ae(c(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && d(1) ? `Kuule ja toista: ${Ae(c(1), a, !0)}` : d(1, 2) && f(c(1), c(2)) ? `Kuule ja toista: ${f(c(1), c(2))}` : null;
    case "interval":
      return d(1) && qr[c(1)] ? `${qr[c(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!d(1, 3) || !Ei[p]) return null;
      const m = Ei[p].tones.find(([E]) => E === c(3))?.[1];
      return m ? `${jf(c(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = De.SCALES[o[2]];
      if (!d(1) || !p) return null;
      const m = `${li(c(1))}-${p.name}`;
      if (o.length === 5 && d(3)) {
        const E = De.scaleNotes(p).find(([b]) => b === c(3))?.[1];
        return E ? `${m}: ${E}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${m}: ${f(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${li(c(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && d(3)) {
        const m = Ei.maj.tones.find(([E]) => E === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && f(c(3), c(4)) ? `${p}: ${f(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function kf(s) {
  return Object.entries(s).flatMap(([a, o]) => {
    const [c, d, f, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(f) ? [] : [{ key: a, input: c, check: d, guided: f === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const Ko = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", mk = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function pk(s) {
  const a = s.solo === void 0 ? `${s.first}/${s.count} heti oikein` : s.solo ? `itsenäisesti ${s.soloFirst ?? 0}/${s.solo} heti oikein${s.count > s.solo ? ` · ${s.count - s.solo} vihjeen kanssa` : ""}` : `${s.count} vastausta vihjeen kanssa`;
  return `${new Date(s.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${nr(s.mode)}${s.hints ? ` · ${_a[s.hints].title}` : ""} · ${a} · keskimäärin ${Ko(s.ms / Math.max(1, s.count))}${s.complete ? "" : " · keskeytetty"}`;
}
function vk({ store: s, s: a, locked: o, changed: c }) {
  const [d, f] = M.useState(""), p = M.useRef(null), { recent: m, sessions: E, stats: b } = s.data, v = Ti(a), j = Sf(a), C = [...new Set(m.map((T) => T.mode))].map((T) => {
    const U = m.filter((B) => B.mode === T);
    return { mode: T, ...Po(U), last: Math.max(...U.map((B) => B.at)) };
  }).sort((T, U) => U.last - T.last), R = kf(b).filter((T) => !T.guided && T.mode === a.mode && T.input === v && T.check === j && T.stat.attempts >= 3).map((T) => ({ ...T, score: Go(T.stat), text: th(T.item, a.flats) })).filter((T) => T.text && T.score < 0.8).sort((T, U) => T.score - U.score).slice(0, 5), P = kf(b).reduce((T, U) => T + U.stat.attempts, 0);
  function w() {
    const T = new Blob([JSON.stringify(s.data, null, 2)], { type: "application/json" }), U = URL.createObjectURL(T), B = document.createElement("a");
    B.href = U, B.download = "musiikin-kartta-harjoittelu.json", B.click(), setTimeout(() => URL.revokeObjectURL(U), 1e3);
  }
  async function S(T) {
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
        E.length,
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
          /* @__PURE__ */ r.jsx("th", { scope: "row", children: nr(T.mode) }),
          /* @__PURE__ */ r.jsx("td", { children: T.count }),
          /* @__PURE__ */ r.jsx("td", { children: T.solo ? `${T.soloFirst}/${T.solo} · ${Math.round(T.soloFirst / T.solo * 100)} %` : "–" }),
          /* @__PURE__ */ r.jsx("td", { children: T.guided }),
          /* @__PURE__ */ r.jsx("td", { children: Ko(T.ms / T.count) })
        ] }, T.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("h3", { children: "Seuraavaksi" }),
    R.length ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        nr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ r.jsx("ul", { children: R.map((T) => /* @__PURE__ */ r.jsxs("li", { children: [
        T.text,
        " · viime aikoina ",
        Math.round(es(T.stat) * 100),
        " % heti oikein · ",
        Ko(ts(T.stat))
      ] }, T.key)) })
    ] }) : /* @__PURE__ */ r.jsx("p", { children: P ? `Harjoituksessa ${nr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
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
      /* @__PURE__ */ r.jsx(vp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: b, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      E.length ? /* @__PURE__ */ r.jsx("ul", { children: E.slice(-10).reverse().map((T) => /* @__PURE__ */ r.jsx("li", { children: pk(T) }, T.id)) }) : /* @__PURE__ */ r.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ r.jsxs("details", { children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ r.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ r.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ r.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (T) => {
          S(T.target.files?.[0]);
        } }),
        /* @__PURE__ */ r.jsx("button", { type: "button", disabled: o || !P, onClick: V, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ r.jsx("p", { role: "status", children: d })
    ] }),
    s.warning && /* @__PURE__ */ r.jsx("p", { role: "status", className: "error", children: s.warning })
  ] });
}
function kk() {
  try {
    return new Rd(localStorage);
  } catch {
    return new Rd();
  }
}
const yf = (s) => ({ minRms: s.minRms, minClarity: s.clarity, stabilityMs: s.stability, centsTolerance: s.cents }), yk = (s) => (s / 1e3).toFixed(1).replace(".", ",") + " s", gk = [0, 2, 4, 5, 7, 9, 11];
function jk(s) {
  return s.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : s.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : s.mode === "chord" ? s.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : s.mode === "scale" ? ["mp", "majp"].includes(s.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function xk() {
  const [s] = M.useState(kk), [a, o] = M.useState(() => ip(location.search, s.data.settings)), [, c] = M.useReducer((A) => A + 1, 0), d = M.useRef(null), f = M.useRef(new mv()), p = M.useRef(new rs()), m = M.useRef(0), E = M.useRef(), b = M.useRef(), v = M.useRef(null), j = M.useRef(0), C = M.useRef(null), R = M.useRef(a);
  R.current = a;
  const [P, w] = M.useState({ phase: "off", purpose: "none" }), S = M.useRef(P), V = (A) => {
    S.current = A, w(A);
  }, [T, U] = M.useState(null), [B, z] = M.useState(null), [I, O] = M.useState(null), [F, re] = M.useState(0), [ee, xe] = M.useState([]), [Ee, J] = M.useState(!1), [ce, H] = M.useState(!1), [ue, le] = M.useState(""), [W, oe] = M.useState("info"), [q, x] = M.useState(""), [y, ie] = M.useState(0), [fe, Se] = M.useState([]), [G, K] = M.useState([]), [te, X] = M.useState(null), [ve, D] = M.useState(!1), [ne, ae] = M.useState(""), [de, Ne] = M.useState(""), [we, Le] = M.useState(() => {
    const A = new URLSearchParams(location.search);
    return A.has("tila") || A.has("vanha") ? "legacy" : Wf(A.get("kappale")) ? "songs" : Tp(A.get("polku"));
  }), [Je, He] = M.useState(() => {
    const A = new URLSearchParams(location.search);
    return A.get("polku") === "otelauta" && A.get("harjoitus") === "savelten-etsinta";
  });
  function qe() {
    const A = new URL(location.href);
    A.searchParams.set("polku", "otelauta"), A.searchParams.set("harjoitus", "savelten-etsinta"), history.replaceState(history.state, "", A.pathname + A.search + A.hash), He(!0);
  }
  function rt() {
    const A = new URL(location.href);
    A.searchParams.set("polku", "otelauta"), A.searchParams.delete("harjoitus"), history.replaceState(history.state, "", A.pathname + A.search + A.hash), He(!1);
  }
  function kt() {
    Le(null), He(!1);
    const A = new URL(location.href);
    A.searchParams.delete("polku"), A.searchParams.delete("harjoitus"), history.replaceState(history.state, "", A.pathname + A.search + A.hash);
  }
  const Qe = () => {
    Zp().then(xe).catch(() => {
    });
  };
  function Ie() {
    clearTimeout(b.current), v.current = null, D(!1);
  }
  function Xe() {
    U(null), z(null), O(null);
  }
  function mt() {
    f.current.stop(), Ie(), V({ phase: "off", purpose: "none" }), Xe();
  }
  async function Zt(A) {
    if (f.current.active && S.current.phase === "on")
      return Ie(), V({ ...S.current, purpose: A }), f.current.rearm(), !0;
    V({ phase: "requesting", purpose: A }), Xe();
    try {
      const me = await f.current.start(R.current.device, {
        ...yf(R.current),
        onFrame: (ze) => Pt.current.frame(ze),
        onStableNote: (ze) => Pt.current.stable(ze)
      }, () => Pt.current.lost());
      return me ? (V({ phase: "on", purpose: A, info: me }), Qe(), !0) : !1;
    } catch (me) {
      return V({ phase: "error", purpose: "none", error: hv(me) }), !1;
    }
  }
  function Ft(A) {
    v.current?.push(A.rms);
    const me = performance.now();
    me - j.current < 66 || (j.current = me, U(A), re(me), A.midi !== void 0 && A.frequency !== void 0 && z({ midi: A.midi, frequency: A.frequency, cents: A.cents ?? 0, clarity: A.clarity ?? 0, tuned: A.status === "pitch", at: me }));
  }
  function qt(A) {
    S.current.purpose === "test" ? O(A) : S.current.purpose === "round" && At(A.midi, "mic", void 0, A.heldMs);
  }
  function Ht() {
    const A = S.current.purpose === "round";
    Ie(), Xe(), V({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const me = d.current;
    A && me && ["active", "feedback", "paused"].includes(me.phase) && (be(), H(!1), me.pause(), x("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Pt = M.useRef({ frame: Ft, stable: qt, lost: Ht });
  Pt.current = { frame: Ft, stable: qt, lost: Ht };
  function yn(A) {
    const me = Ea(A), ze = me.device !== R.current.device;
    R.current = me, o(me), s.settings(me), x(""), f.current.active && (ze && S.current.purpose === "test" ? (mt(), Zt("test")) : f.current.setOptions(yf(me)));
  }
  function Ce(A) {
    Ne(""), d.current = null, He(!1), Le(A);
  }
  function ln() {
    ae(""), Zt("test");
  }
  function _e() {
    S.current.phase !== "on" || S.current.purpose !== "test" || (Ie(), v.current = [], D(!0), ae("Mitataan taustakohinaa kolme sekuntia. Älä soita."), b.current = setTimeout(() => {
      const A = v.current ?? [];
      if (Ie(), A.length < 10) {
        ae("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: me, noise: ze, loud: Gt } = pv(A);
      yn({ ...R.current, minRms: me }), ae(`Taustakohina on ${Math.round(lr(ze))} dB ja äänikynnys nyt ${Math.round(lr(me))} dB. ${Gt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function be() {
    m.current++, clearTimeout(E.current), p.current.stop();
  }
  function Re(A, me) {
    if (!A.results.length) return;
    const ze = Po(A.results);
    s.session({
      id: A.id,
      mode: A.settings.mode,
      count: ze.count,
      first: ze.first,
      ms: ze.ms,
      solo: ze.solo,
      soloFirst: ze.soloFirst,
      hints: A.settings.hints,
      at: Date.now(),
      complete: me
    });
  }
  async function Ge(A) {
    if (!A.question?.sound.length || A.phase !== "active") return;
    be();
    const me = m.current;
    A.pause(), f.current.pause(), H(!0), oe("info"), le("Kuuntele…"), c();
    try {
      await p.current.play(A.question.sound);
    } catch {
      me === m.current && x("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    me !== m.current || d.current !== A || (A.resume(), f.current.resume(), H(!1), le(""), c());
  }
  async function st(A) {
    Se([]), K([]), X(null), x(""), ie(A.hintLevel), f.current.rearm(), oe("info"), le(""), c(), A.question?.sound.length && await Ge(A);
  }
  async function on() {
    const A = R.current, me = _o(A);
    if (me) {
      x(me);
      return;
    }
    be();
    const ze = m.current;
    if (x(""), ae(""), Ne(""), va(A)) {
      J(!0);
      const lt = await Zt("round");
      if (ze !== m.current) return;
      if (J(!1), !lt) {
        x("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else S.current.phase !== "off" && mt();
    const Gt = new Cp(A, () => s.data.stats, (lt) => s.record(lt));
    try {
      Gt.start();
    } catch (lt) {
      S.current.purpose === "round" && mt(), x(lt instanceof Error ? lt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Gt, requestAnimationFrame(() => C.current?.scrollIntoView({ block: "start", behavior: "auto" })), await st(Gt);
  }
  function xt() {
    be(), J(!1), mt();
  }
  function At(A, me, ze, Gt = 0) {
    const lt = d.current, Lt = lt?.question;
    if (!lt || !Lt || lt.phase !== "active") return;
    const hr = lt.answer(A, me, ze, Gt);
    if (hr !== "ignored") {
      if (hr === "candidate")
        X(A), oe("bad"), le(hk(lt.settings, Lt, A));
      else if (hr === "wrong")
        ze ? Se((wt) => [...wt, ze]) : K((wt) => [...wt, A]), oe("bad"), le(fk(lt.settings, Lt, me, A, ze));
      else if (X(null), oe("good"), le(dk(lt.settings, Lt, me, A, ze)), Re(lt, !1), lt.settings.advance) {
        const wt = m.current;
        E.current = setTimeout(() => {
          wt === m.current && Cn();
        }, me === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Cn() {
    const A = d.current;
    if (!(!A || A.phase !== "feedback")) {
      be();
      try {
        A.next();
      } catch (me) {
        un(!1), x(me instanceof Error ? me.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (A.phase === "done") {
        un(!0);
        return;
      }
      await st(A);
    }
  }
  function un(A = !1) {
    be(), H(!1), J(!1), (S.current.purpose === "round" || S.current.phase === "requesting") && mt();
    const me = d.current;
    me && (me.stop(), Re(me, A)), X(null), ie(0), Se([]), K([]), x(""), Ne(A ? "complete" : "stopped"), oe("info"), le(""), c();
  }
  function Tn() {
    const A = d.current;
    if (!A || !["active", "feedback", "paused"].includes(A.phase)) return;
    be(), H(!1), A.pause();
    const me = S.current.purpose === "round";
    me && mt(), oe("info"), le(`Harjoitus on tauolla.${me ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function ss() {
    const A = d.current;
    if (!A || A.phase !== "paused" || ce) return;
    be();
    const me = m.current;
    if (x(""), va(A.settings)) {
      J(!0);
      const ze = await Zt("round");
      if (me !== m.current) return;
      if (J(!1), !ze) {
        x("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    A.resume(), oe("info"), le(""), c(), A.phase === "active" && (f.current.rearm(), A.question?.sound.length && await Ge(A));
  }
  function cr(A) {
    const me = d.current;
    !me || me.phase !== "active" || (me.useHint(A), ie(A), c());
  }
  const ci = M.useRef({ hidden: () => {
  }, restored: () => {
  } });
  ci.current = {
    hidden: () => {
      const A = d.current;
      A && ["active", "feedback"].includes(A.phase) || ce ? Tn() : S.current.phase !== "off" && S.current.phase !== "error" && (be(), J(!1), mt());
    },
    restored: () => {
      J(!1), H(!1), V({ phase: "off", purpose: "none" }), Xe(), c();
    }
  }, M.useEffect(() => {
    Qe();
    const A = () => Qe();
    navigator.mediaDevices?.addEventListener?.("devicechange", A);
    const me = () => {
      m.current++, clearTimeout(E.current), clearTimeout(b.current), f.current.stop(), p.current.stop(), fv(), d.current?.pause();
    }, ze = () => {
      document.hidden && ci.current.hidden();
    }, Gt = (lt) => {
      lt.persisted && ci.current.restored();
    };
    return document.addEventListener("visibilitychange", ze), window.addEventListener("pagehide", me), window.addEventListener("pageshow", Gt), () => {
      me(), navigator.mediaDevices?.removeEventListener?.("devicechange", A), document.removeEventListener("visibilitychange", ze), window.removeEventListener("pagehide", me), window.removeEventListener("pageshow", Gt);
    };
  }, []);
  const _i = M.useRef(null), di = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${ce}`;
  M.useEffect(() => {
    const A = d.current, me = C.current, ze = document.activeElement;
    !A || !me || !(ze === document.body || me.contains(ze)) || (A.phase === "feedback" ? _i.current?.focus({ preventScroll: !0 }) : A.phase === "active" && !ce && (ze === document.body || ze === _i.current) && me.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [di]);
  const $e = d.current, Ye = !!$e && ["active", "paused", "feedback"].includes($e.phase), et = Ye ? $e.settings : a, dt = Ye ? $e.question : void 0, It = !!dt && !!$e?.answered, cn = Ye && $e.phase === "paused" && !ce && !It, In = Ye && $e.phase === "active" && !ce, dr = Ye ? null : _o(a), fr = Ye || Ee, as = Mi(et), Mn = yp(et), Dn = dt && !It ? y : 0, bi = dt ? Ep(et, dt, It ? 2 : Dn) : { marks: [], text: "" }, ls = [...new Map([...bi.marks, ...It ? [] : fe.map((A) => ({ ...A, label: Ae(A.midi, et.flats), kind: "wrong" }))].map((A) => [Ue(A), A])).values()], os = Ye && va(et), us = !!dt && !cn && (dt.choices === "position" || ls.length > 0), St = $e ? Po($e.results) : null, cs = !$e || et.hints !== "fade" ? "" : $e.index <= 3 ? " · vastaus näkyy" : $e.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", ds = $e && !Ye ? $e.results.filter((A) => A.errors > 0 || A.hint) : [], [Aa, at] = jk(et), zn = /* @__PURE__ */ r.jsxs("div", { className: "intro", children: [
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
  return !Ye && we === null ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(_p, { onSelect: Ce })
  ] }) : !Ye && we === "scales" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(Pv, { onBack: kt })
  ] }) : !Ye && we === "ear" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    Je ? /* @__PURE__ */ r.jsx(Av, { onBack: rt }) : /* @__PURE__ */ r.jsx(bp, { onBack: kt, onNotes: qe })
  ] }) : !Ye && we === "chords" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(Ov, { onBack: kt })
  ] }) : !Ye && we === "songs" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx(rk, { onBack: kt })
  ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    zn,
    gn,
    /* @__PURE__ */ r.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ r.jsxs("a", { href: Aa, children: [
      "Lue tämän harjoituksen teoria: ",
      at,
      " →"
    ] }) }),
    we !== "legacy" && /* @__PURE__ */ r.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ r.jsx("button", { type: "button", className: "back-link", onClick: () => {
        Ye && un(), kt();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ r.jsx("h2", { children: we === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ r.jsx("p", { children: we === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    Ye ? /* @__PURE__ */ r.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ r.jsx("strong", { children: nr(et.mode) }),
      " · ",
      Id(et)
    ] }) : we === "legacy" ? /* @__PURE__ */ r.jsx(Dd, { s: a, change: yn, locked: fr, problem: dr }) : /* @__PURE__ */ r.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ r.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ r.jsx(Dd, { s: a, change: yn, locked: fr, problem: dr })
    ] }),
    !Ye && (we === "legacy" || va(a)) && /* @__PURE__ */ r.jsx(
      lk,
      {
        mic: P,
        frame: T,
        heard: B,
        accepted: I,
        now: F,
        s: a,
        change: yn,
        devices: ee,
        locked: Ee,
        calibrating: ve,
        calibration: ne,
        onTest: ln,
        onStop: mt,
        onCalibrate: _e
      }
    ),
    /* @__PURE__ */ r.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: C, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ r.jsx("h2", { id: "session-title", children: nr(et.mode) }),
        /* @__PURE__ */ r.jsx("span", { "data-testid": "round-status", children: Ye ? `Kysymys ${$e.index}${$e.total ? " / " + $e.total : " · vapaa harjoittelu"} · ${_a[et.hints].title}${cs}${$e.phase === "paused" && !ce ? " · tauolla" : ""}` : de === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !Ye && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        $e && $e.results.length > 0 && St ? /* @__PURE__ */ r.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ r.jsx("h3", { children: de === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
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
              /* @__PURE__ */ r.jsx("dd", { children: yk(St.ms / St.count) })
            ] })
          ] }),
          St.solo === 0 && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          ds.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ r.jsx("ul", { children: [...new Set(ds.map((A) => th(A.item, a.flats)).filter(Boolean))].slice(0, 6).map((A) => /* @__PURE__ */ r.jsx("li", { children: A }, A)) })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "question idle", children: Id(a) }),
        /* @__PURE__ */ r.jsx("div", { className: "action-row", children: Ee ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: xt, children: "Peru" })
        ] }) : /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: !!dr, onClick: () => {
          on();
        }, children: $e?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !$e && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      Ye && dt && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: cn ? "Harjoitus on tauolla." : dt.prompt }),
        /* @__PURE__ */ r.jsx("p", { className: "how", "data-testid": "instruction", children: cn ? "Kysymys palaa näkyviin, kun jatkat." : ce ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : ck(et, dt) }),
        $e.hintLevel > 0 && !It && /* @__PURE__ */ r.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: et.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        os && /* @__PURE__ */ r.jsx(ak, { mic: P, frame: T, heard: B, s: et, now: F }),
        dt.choices === "note" && !cn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (et.accidentals ? Array.from({ length: 12 }, (A, me) => me) : gk).map((A) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(A) ? "wrong" : It && A === dt.midi % 12 ? "right" : "", disabled: !In || G.includes(A), onClick: () => At(A, "note"), children: Ae(A, et.flats) }, A)) }),
        dt.choices === "degree" && !cn && /* @__PURE__ */ r.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (et.mode === "scale" ? De.scaleNotes(De.SCALES[et.scale]) : Ei[et.chord].tones).map(([A, me]) => /* @__PURE__ */ r.jsx("button", { type: "button", className: G.includes(A) ? "wrong" : It && A === dt.interval ? "right" : "", disabled: !In || G.includes(A), onClick: () => At(A, "degree"), children: me }, A)) }),
        us && /* @__PURE__ */ r.jsx(
          oi,
          {
            area: Mn,
            marks: ls,
            disabled: !In || dt.choices !== "position" || et.input === "mic",
            onAnswer: (A) => At(A.midi, "board", A),
            caption: as.fixed === "shape" ? `${et.shape}-muodon alue` : as.fixed === "box" ? `Boksin ${et.box} alue` : "Otelauta"
          }
        ),
        !It && !cn && Dn > 0 && bi.text && /* @__PURE__ */ r.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: bi.text }),
        /* @__PURE__ */ r.jsx("p", { className: `feedback ${W}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ue }),
        te !== null && $e.phase === "active" && /* @__PURE__ */ r.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => {
            $e.confirmWrong(), X(null), le("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ r.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        q && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: q }),
        /* @__PURE__ */ r.jsxs("div", { className: "action-row", children: [
          $e.phase === "feedback" && /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", ref: _i, onClick: () => {
            Cn();
          }, children: $e.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          $e.phase === "active" && !It && !ce && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            Dn === 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => cr(Math.max(1, $e.hintLevel)), children: $e.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Dn === 1 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => cr(2), children: "Näytä vastaus" }),
            Dn > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => ie(0), children: "Piilota vihje" })
          ] }),
          dt.sound.length > 0 && /* @__PURE__ */ r.jsx("button", { type: "button", disabled: !In, onClick: () => {
            Ge($e);
          }, children: "Kuuntele uudelleen" }),
          $e.phase === "paused" && !ce ? /* @__PURE__ */ r.jsx("button", { type: "button", className: "primary", disabled: Ee, onClick: () => {
            ss();
          }, children: Ee ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ r.jsx("button", { type: "button", onClick: Tn, children: "Tauko" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", onClick: () => un(), children: "Lopeta harjoitus" })
        ] }),
        $e.phase === "feedback" && et.advance && /* @__PURE__ */ r.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ r.jsx("p", { className: "tools-note", "data-testid": "tally", children: St?.count ? `Vastattu ${St.count} · itsenäisesti heti oikein ${St.soloFirst}/${St.solo}${St.guided ? ` · vihjeen kanssa ${St.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !Ye && q && /* @__PURE__ */ r.jsx("p", { className: "error", role: "alert", children: q })
    ] }),
    !Ye && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ r.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(De.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ r.jsx("a", { href: rp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ r.jsx(vk, { store: s, s: a, locked: fr, changed: () => {
        const A = Ea(s.data.settings);
        R.current = A, o(A), c();
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
