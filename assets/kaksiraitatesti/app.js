var Iu = { exports: {} }, Or = {}, Au = { exports: {} }, q = {};
var ja;
function nd() {
  if (ja) return q;
  ja = 1;
  var f = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), g = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.provider"), N = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), D = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), H = Symbol.iterator;
  function Y(p) {
    return p === null || typeof p != "object" ? null : (p = H && p[H] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var ne = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, Q = {};
  function U(p, w, X) {
    this.props = p, this.context = w, this.refs = Q, this.updater = X || ne;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(p, w) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, w, "setState");
  }, U.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function Se() {
  }
  Se.prototype = U.prototype;
  function Pe(p, w, X) {
    this.props = p, this.context = w, this.refs = Q, this.updater = X || ne;
  }
  var ce = Pe.prototype = new Se();
  ce.constructor = Pe, Z(ce, U.prototype), ce.isPureReactComponent = !0;
  var _e = Array.isArray, Oe = Object.prototype.hasOwnProperty, Ce = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Re(p, w, X) {
    var J, te = {}, b = null, ue = null;
    if (w != null) for (J in w.ref !== void 0 && (ue = w.ref), w.key !== void 0 && (b = "" + w.key), w) Oe.call(w, J) && !pe.hasOwnProperty(J) && (te[J] = w[J]);
    var le = arguments.length - 2;
    if (le === 1) te.children = X;
    else if (1 < le) {
      for (var fe = Array(le), Ve = 0; Ve < le; Ve++) fe[Ve] = arguments[Ve + 2];
      te.children = fe;
    }
    if (p && p.defaultProps) for (J in le = p.defaultProps, le) te[J] === void 0 && (te[J] = le[J]);
    return { $$typeof: f, type: p, key: b, ref: ue, props: te, _owner: Ce.current };
  }
  function at(p, w) {
    return { $$typeof: f, type: p.type, key: w, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function rt(p) {
    return typeof p == "object" && p !== null && p.$$typeof === f;
  }
  function Rt(p) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(X) {
      return w[X];
    });
  }
  var Ge = /\/+/g;
  function Ke(p, w) {
    return typeof p == "object" && p !== null && p.key != null ? Rt("" + p.key) : w.toString(36);
  }
  function lt(p, w, X, J, te) {
    var b = typeof p;
    (b === "undefined" || b === "boolean") && (p = null);
    var ue = !1;
    if (p === null) ue = !0;
    else switch (b) {
      case "string":
      case "number":
        ue = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case f:
          case a:
            ue = !0;
        }
    }
    if (ue) return ue = p, te = te(ue), p = J === "" ? "." + Ke(ue, 0) : J, _e(te) ? (X = "", p != null && (X = p.replace(Ge, "$&/") + "/"), lt(te, w, X, "", function(Ve) {
      return Ve;
    })) : te != null && (rt(te) && (te = at(te, X + (!te.key || ue && ue.key === te.key ? "" : ("" + te.key).replace(Ge, "$&/") + "/") + p)), w.push(te)), 1;
    if (ue = 0, J = J === "" ? "." : J + ":", _e(p)) for (var le = 0; le < p.length; le++) {
      b = p[le];
      var fe = J + Ke(b, le);
      ue += lt(b, w, X, fe, te);
    }
    else if (fe = Y(p), typeof fe == "function") for (p = fe.call(p), le = 0; !(b = p.next()).done; ) b = b.value, fe = J + Ke(b, le++), ue += lt(b, w, X, fe, te);
    else if (b === "object") throw w = String(p), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
    return ue;
  }
  function ct(p, w, X) {
    if (p == null) return p;
    var J = [], te = 0;
    return lt(p, J, "", "", function(b) {
      return w.call(X, b, te++);
    }), J;
  }
  function Fe(p) {
    if (p._status === -1) {
      var w = p._result;
      w = w(), w.then(function(X) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = X);
      }, function(X) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = X);
      }), p._status === -1 && (p._status = 0, p._result = w);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ve = { current: null }, T = { transition: null }, $ = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: T, ReactCurrentOwner: Ce };
  function P() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return q.Children = { map: ct, forEach: function(p, w, X) {
    ct(p, function() {
      w.apply(this, arguments);
    }, X);
  }, count: function(p) {
    var w = 0;
    return ct(p, function() {
      w++;
    }), w;
  }, toArray: function(p) {
    return ct(p, function(w) {
      return w;
    }) || [];
  }, only: function(p) {
    if (!rt(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, q.Component = U, q.Fragment = s, q.Profiler = k, q.PureComponent = Pe, q.StrictMode = g, q.Suspense = z, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, q.act = P, q.cloneElement = function(p, w, X) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var J = Z({}, p.props), te = p.key, b = p.ref, ue = p._owner;
    if (w != null) {
      if (w.ref !== void 0 && (b = w.ref, ue = Ce.current), w.key !== void 0 && (te = "" + w.key), p.type && p.type.defaultProps) var le = p.type.defaultProps;
      for (fe in w) Oe.call(w, fe) && !pe.hasOwnProperty(fe) && (J[fe] = w[fe] === void 0 && le !== void 0 ? le[fe] : w[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1) J.children = X;
    else if (1 < fe) {
      le = Array(fe);
      for (var Ve = 0; Ve < fe; Ve++) le[Ve] = arguments[Ve + 2];
      J.children = le;
    }
    return { $$typeof: f, type: p.type, key: te, ref: b, props: J, _owner: ue };
  }, q.createContext = function(p) {
    return p = { $$typeof: N, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: C, _context: p }, p.Consumer = p;
  }, q.createElement = Re, q.createFactory = function(p) {
    var w = Re.bind(null, p);
    return w.type = p, w;
  }, q.createRef = function() {
    return { current: null };
  }, q.forwardRef = function(p) {
    return { $$typeof: x, render: p };
  }, q.isValidElement = rt, q.lazy = function(p) {
    return { $$typeof: V, _payload: { _status: -1, _result: p }, _init: Fe };
  }, q.memo = function(p, w) {
    return { $$typeof: D, type: p, compare: w === void 0 ? null : w };
  }, q.startTransition = function(p) {
    var w = T.transition;
    T.transition = {};
    try {
      p();
    } finally {
      T.transition = w;
    }
  }, q.unstable_act = P, q.useCallback = function(p, w) {
    return ve.current.useCallback(p, w);
  }, q.useContext = function(p) {
    return ve.current.useContext(p);
  }, q.useDebugValue = function() {
  }, q.useDeferredValue = function(p) {
    return ve.current.useDeferredValue(p);
  }, q.useEffect = function(p, w) {
    return ve.current.useEffect(p, w);
  }, q.useId = function() {
    return ve.current.useId();
  }, q.useImperativeHandle = function(p, w, X) {
    return ve.current.useImperativeHandle(p, w, X);
  }, q.useInsertionEffect = function(p, w) {
    return ve.current.useInsertionEffect(p, w);
  }, q.useLayoutEffect = function(p, w) {
    return ve.current.useLayoutEffect(p, w);
  }, q.useMemo = function(p, w) {
    return ve.current.useMemo(p, w);
  }, q.useReducer = function(p, w, X) {
    return ve.current.useReducer(p, w, X);
  }, q.useRef = function(p) {
    return ve.current.useRef(p);
  }, q.useState = function(p) {
    return ve.current.useState(p);
  }, q.useSyncExternalStore = function(p, w, X) {
    return ve.current.useSyncExternalStore(p, w, X);
  }, q.useTransition = function() {
    return ve.current.useTransition();
  }, q.version = "18.3.1", q;
}
var Da;
function Ku() {
  return Da || (Da = 1, Au.exports = nd()), Au.exports;
}
var Oa;
function rd() {
  if (Oa) return Or;
  Oa = 1;
  var f = Ku(), a = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, k = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(x, z, D) {
    var V, H = {}, Y = null, ne = null;
    D !== void 0 && (Y = "" + D), z.key !== void 0 && (Y = "" + z.key), z.ref !== void 0 && (ne = z.ref);
    for (V in z) g.call(z, V) && !C.hasOwnProperty(V) && (H[V] = z[V]);
    if (x && x.defaultProps) for (V in z = x.defaultProps, z) H[V] === void 0 && (H[V] = z[V]);
    return { $$typeof: a, type: x, key: Y, ref: ne, props: H, _owner: k.current };
  }
  return Or.Fragment = s, Or.jsx = N, Or.jsxs = N, Or;
}
var Fa;
function ld() {
  return Fa || (Fa = 1, Iu.exports = rd()), Iu.exports;
}
var A = ld(), Ql = {}, Uu = { exports: {} }, nt = {}, Vu = { exports: {} }, Wu = {};
var Ia;
function id() {
  return Ia || (Ia = 1, (function(f) {
    function a(T, $) {
      var P = T.length;
      T.push($);
      e: for (; 0 < P; ) {
        var p = P - 1 >>> 1, w = T[p];
        if (0 < k(w, $)) T[p] = $, T[P] = w, P = p;
        else break e;
      }
    }
    function s(T) {
      return T.length === 0 ? null : T[0];
    }
    function g(T) {
      if (T.length === 0) return null;
      var $ = T[0], P = T.pop();
      if (P !== $) {
        T[0] = P;
        e: for (var p = 0, w = T.length, X = w >>> 1; p < X; ) {
          var J = 2 * (p + 1) - 1, te = T[J], b = J + 1, ue = T[b];
          if (0 > k(te, P)) b < w && 0 > k(ue, te) ? (T[p] = ue, T[b] = P, p = b) : (T[p] = te, T[J] = P, p = J);
          else if (b < w && 0 > k(ue, P)) T[p] = ue, T[b] = P, p = b;
          else break e;
        }
      }
      return $;
    }
    function k(T, $) {
      var P = T.sortIndex - $.sortIndex;
      return P !== 0 ? P : T.id - $.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      f.unstable_now = function() {
        return C.now();
      };
    } else {
      var N = Date, x = N.now();
      f.unstable_now = function() {
        return N.now() - x;
      };
    }
    var z = [], D = [], V = 1, H = null, Y = 3, ne = !1, Z = !1, Q = !1, U = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, Pe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ce(T) {
      for (var $ = s(D); $ !== null; ) {
        if ($.callback === null) g(D);
        else if ($.startTime <= T) g(D), $.sortIndex = $.expirationTime, a(z, $);
        else break;
        $ = s(D);
      }
    }
    function _e(T) {
      if (Q = !1, ce(T), !Z) if (s(z) !== null) Z = !0, Fe(Oe);
      else {
        var $ = s(D);
        $ !== null && ve(_e, $.startTime - T);
      }
    }
    function Oe(T, $) {
      Z = !1, Q && (Q = !1, Se(Re), Re = -1), ne = !0;
      var P = Y;
      try {
        for (ce($), H = s(z); H !== null && (!(H.expirationTime > $) || T && !Rt()); ) {
          var p = H.callback;
          if (typeof p == "function") {
            H.callback = null, Y = H.priorityLevel;
            var w = p(H.expirationTime <= $);
            $ = f.unstable_now(), typeof w == "function" ? H.callback = w : H === s(z) && g(z), ce($);
          } else g(z);
          H = s(z);
        }
        if (H !== null) var X = !0;
        else {
          var J = s(D);
          J !== null && ve(_e, J.startTime - $), X = !1;
        }
        return X;
      } finally {
        H = null, Y = P, ne = !1;
      }
    }
    var Ce = !1, pe = null, Re = -1, at = 5, rt = -1;
    function Rt() {
      return !(f.unstable_now() - rt < at);
    }
    function Ge() {
      if (pe !== null) {
        var T = f.unstable_now();
        rt = T;
        var $ = !0;
        try {
          $ = pe(!0, T);
        } finally {
          $ ? Ke() : (Ce = !1, pe = null);
        }
      } else Ce = !1;
    }
    var Ke;
    if (typeof Pe == "function") Ke = function() {
      Pe(Ge);
    };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), ct = lt.port2;
      lt.port1.onmessage = Ge, Ke = function() {
        ct.postMessage(null);
      };
    } else Ke = function() {
      U(Ge, 0);
    };
    function Fe(T) {
      pe = T, Ce || (Ce = !0, Ke());
    }
    function ve(T, $) {
      Re = U(function() {
        T(f.unstable_now());
      }, $);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, f.unstable_continueExecution = function() {
      Z || ne || (Z = !0, Fe(Oe));
    }, f.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : at = 0 < T ? Math.floor(1e3 / T) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, f.unstable_getFirstCallbackNode = function() {
      return s(z);
    }, f.unstable_next = function(T) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = Y;
      }
      var P = Y;
      Y = $;
      try {
        return T();
      } finally {
        Y = P;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(T, $) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var P = Y;
      Y = T;
      try {
        return $();
      } finally {
        Y = P;
      }
    }, f.unstable_scheduleCallback = function(T, $, P) {
      var p = f.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? p + P : p) : P = p, T) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = P + w, T = { id: V++, callback: $, priorityLevel: T, startTime: P, expirationTime: w, sortIndex: -1 }, P > p ? (T.sortIndex = P, a(D, T), s(z) === null && T === s(D) && (Q ? (Se(Re), Re = -1) : Q = !0, ve(_e, P - p))) : (T.sortIndex = w, a(z, T), Z || ne || (Z = !0, Fe(Oe))), T;
    }, f.unstable_shouldYield = Rt, f.unstable_wrapCallback = function(T) {
      var $ = Y;
      return function() {
        var P = Y;
        Y = $;
        try {
          return T.apply(this, arguments);
        } finally {
          Y = P;
        }
      };
    };
  })(Wu)), Wu;
}
var Aa;
function ud() {
  return Aa || (Aa = 1, Vu.exports = id()), Vu.exports;
}
var Ua;
function od() {
  if (Ua) return nt;
  Ua = 1;
  var f = Ku(), a = ud();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = /* @__PURE__ */ new Set(), k = {};
  function C(e, t) {
    N(e, t), N(e + "Capture", t);
  }
  function N(e, t) {
    for (k[e] = t, e = 0; e < t.length; e++) g.add(t[e]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), z = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, V = {}, H = {};
  function Y(e) {
    return z.call(H, e) ? !0 : z.call(V, e) ? !1 : D.test(e) ? H[e] = !0 : (V[e] = !0, !1);
  }
  function ne(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Z(e, t, n, r) {
    if (t === null || typeof t > "u" || ne(e, t, n, r)) return !0;
    if (r) return !1;
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
  function Q(e, t, n, r, l, i, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    U[e] = new Q(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    U[t] = new Q(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    U[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    U[e] = new Q(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    U[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    U[e] = new Q(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    U[e] = new Q(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    U[e] = new Q(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    U[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Se = /[\-:]([a-z])/g;
  function Pe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Se,
      Pe
    );
    U[t] = new Q(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Se, Pe);
    U[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Se, Pe);
    U[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    U[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    U[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ce(e, t, n, r) {
    var l = U.hasOwnProperty(t) ? U[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Z(t, n, l, r) && (n = null), r || l === null ? Y(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var _e = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = /* @__PURE__ */ Symbol.for("react.element"), Ce = /* @__PURE__ */ Symbol.for("react.portal"), pe = /* @__PURE__ */ Symbol.for("react.fragment"), Re = /* @__PURE__ */ Symbol.for("react.strict_mode"), at = /* @__PURE__ */ Symbol.for("react.profiler"), rt = /* @__PURE__ */ Symbol.for("react.provider"), Rt = /* @__PURE__ */ Symbol.for("react.context"), Ge = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ke = /* @__PURE__ */ Symbol.for("react.suspense"), lt = /* @__PURE__ */ Symbol.for("react.suspense_list"), ct = /* @__PURE__ */ Symbol.for("react.memo"), Fe = /* @__PURE__ */ Symbol.for("react.lazy"), ve = /* @__PURE__ */ Symbol.for("react.offscreen"), T = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = T && e[T] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var P = Object.assign, p;
  function w(e) {
    if (p === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      p = t && t[1] || "";
    }
    return `
` + p + e;
  }
  var X = !1;
  function J(e, t) {
    if (!e || X) return "";
    X = !0;
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
        } catch (v) {
          var r = v;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (v) {
          r = v;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (v) {
          r = v;
        }
        e();
      }
    } catch (v) {
      if (v && r && typeof v.stack == "string") {
        for (var l = v.stack.split(`
`), i = r.stack.split(`
`), u = l.length - 1, o = i.length - 1; 1 <= u && 0 <= o && l[u] !== i[o]; ) o--;
        for (; 1 <= u && 0 <= o; u--, o--) if (l[u] !== i[o]) {
          if (u !== 1 || o !== 1)
            do
              if (u--, o--, 0 > o || l[u] !== i[o]) {
                var c = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
              }
            while (1 <= u && 0 <= o);
          break;
        }
      }
    } finally {
      X = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? w(e) : "";
  }
  function te(e) {
    switch (e.tag) {
      case 5:
        return w(e.type);
      case 16:
        return w("Lazy");
      case 13:
        return w("Suspense");
      case 19:
        return w("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = J(e.type, !1), e;
      case 11:
        return e = J(e.type.render, !1), e;
      case 1:
        return e = J(e.type, !0), e;
      default:
        return "";
    }
  }
  function b(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case pe:
        return "Fragment";
      case Ce:
        return "Portal";
      case at:
        return "Profiler";
      case Re:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case lt:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Rt:
        return (e.displayName || "Context") + ".Consumer";
      case rt:
        return (e._context.displayName || "Context") + ".Provider";
      case Ge:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ct:
        return t = e.displayName || null, t !== null ? t : b(e.type) || "Memo";
      case Fe:
        t = e._payload, e = e._init;
        try {
          return b(e(t));
        } catch {
        }
    }
    return null;
  }
  function ue(e) {
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
        return b(t);
      case 8:
        return t === Re ? "StrictMode" : "Mode";
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
  function le(e) {
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
  function fe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ve(e) {
    var t = fe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, i.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Sn(e) {
    e._valueTracker || (e._valueTracker = Ve(e));
  }
  function En(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = fe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ut(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yn(e, t) {
    var n = t.checked;
    return P({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Xn(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = le(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ir(e, t) {
    t = t.checked, t != null && ce(e, "checked", t, !1);
  }
  function Gn(e, t) {
    Ir(e, t);
    var n = le(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Vt(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vt(e, t.type, le(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Zn(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Vt(e, t, n) {
    (t !== "number" || Ut(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var on = Array.isArray;
  function y(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + le(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function O(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return P({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function G(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (on(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: le(n) };
  }
  function We(e, t) {
    var n = le(t.value), r = le(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ee(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function oe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Le(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? oe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ie, Ze = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ie = Ie || document.createElement("div"), Ie.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ie.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Jn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qn = {
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
  }, ic = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qn).forEach(function(e) {
    ic.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
    });
  });
  function Yu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
  }
  function Xu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Yu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var uc = P({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Gl(e, t) {
    if (t) {
      if (uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Zl(e, t) {
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
  var Jl = null;
  function ql(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var bl = null, xn = null, _n = null;
  function Gu(e) {
    if (e = wr(e)) {
      if (typeof bl != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = ul(t), bl(e.stateNode, e.type, t));
    }
  }
  function Zu(e) {
    xn ? _n ? _n.push(e) : _n = [e] : xn = e;
  }
  function Ju() {
    if (xn) {
      var e = xn, t = _n;
      if (_n = xn = null, Gu(e), t) for (e = 0; e < t.length; e++) Gu(t[e]);
    }
  }
  function qu(e, t) {
    return e(t);
  }
  function bu() {
  }
  var ei = !1;
  function eo(e, t, n) {
    if (ei) return e(t, n);
    ei = !0;
    try {
      return qu(e, t, n);
    } finally {
      ei = !1, (xn !== null || _n !== null) && (bu(), Ju());
    }
  }
  function bn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ul(n);
    if (r === null) return null;
    n = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var ti = !1;
  if (x) try {
    var er = {};
    Object.defineProperty(er, "passive", { get: function() {
      ti = !0;
    } }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
  } catch {
    ti = !1;
  }
  function oc(e, t, n, r, l, i, u, o, c) {
    var v = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, v);
    } catch (E) {
      this.onError(E);
    }
  }
  var tr = !1, Ar = null, Ur = !1, ni = null, sc = { onError: function(e) {
    tr = !0, Ar = e;
  } };
  function ac(e, t, n, r, l, i, u, o, c) {
    tr = !1, Ar = null, oc.apply(sc, arguments);
  }
  function cc(e, t, n, r, l, i, u, o, c) {
    if (ac.apply(this, arguments), tr) {
      if (tr) {
        var v = Ar;
        tr = !1, Ar = null;
      } else throw Error(s(198));
      Ur || (Ur = !0, ni = v);
    }
  }
  function sn(e) {
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
  function to(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function no(e) {
    if (sn(e) !== e) throw Error(s(188));
  }
  function fc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = sn(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return no(l), e;
          if (i === r) return no(l), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var u = !1, o = l.child; o; ) {
          if (o === n) {
            u = !0, n = l, r = i;
            break;
          }
          if (o === r) {
            u = !0, r = l, n = i;
            break;
          }
          o = o.sibling;
        }
        if (!u) {
          for (o = i.child; o; ) {
            if (o === n) {
              u = !0, n = i, r = l;
              break;
            }
            if (o === r) {
              u = !0, r = i, n = l;
              break;
            }
            o = o.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function ro(e) {
    return e = fc(e), e !== null ? lo(e) : null;
  }
  function lo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = lo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var io = a.unstable_scheduleCallback, uo = a.unstable_cancelCallback, dc = a.unstable_shouldYield, pc = a.unstable_requestPaint, Ee = a.unstable_now, hc = a.unstable_getCurrentPriorityLevel, ri = a.unstable_ImmediatePriority, oo = a.unstable_UserBlockingPriority, Vr = a.unstable_NormalPriority, mc = a.unstable_LowPriority, so = a.unstable_IdlePriority, Wr = null, _t = null;
  function vc(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function") try {
      _t.onCommitFiberRoot(Wr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var yt = Math.clz32 ? Math.clz32 : kc, yc = Math.log, gc = Math.LN2;
  function kc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yc(e) / gc | 0) | 0;
  }
  var Br = 64, $r = 4194304;
  function nr(e) {
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
  function Hr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var o = u & ~l;
      o !== 0 ? r = nr(o) : (i &= u, i !== 0 && (r = nr(i)));
    } else u = n & ~l, u !== 0 ? r = nr(u) : i !== 0 && (r = nr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - yt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function wc(e, t) {
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
  function Sc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var u = 31 - yt(i), o = 1 << u, c = l[u];
      c === -1 ? ((o & n) === 0 || (o & r) !== 0) && (l[u] = wc(o, t)) : c <= t && (e.expiredLanes |= o), i &= ~o;
    }
  }
  function li(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ao() {
    var e = Br;
    return Br <<= 1, (Br & 4194240) === 0 && (Br = 64), e;
  }
  function ii(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function rr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n;
  }
  function Ec(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - yt(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function ui(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var se = 0;
  function co(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var fo, oi, po, ho, mo, si = !1, Qr = [], Wt = null, Bt = null, $t = null, lr = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), Ht = [], xc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function vo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wt = null;
        break;
      case "dragenter":
      case "dragleave":
        Bt = null;
        break;
      case "mouseover":
      case "mouseout":
        $t = null;
        break;
      case "pointerover":
      case "pointerout":
        lr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ir.delete(t.pointerId);
    }
  }
  function ur(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = wr(t), t !== null && oi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function _c(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Wt = ur(Wt, e, t, n, r, l), !0;
      case "dragenter":
        return Bt = ur(Bt, e, t, n, r, l), !0;
      case "mouseover":
        return $t = ur($t, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return lr.set(i, ur(lr.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, ir.set(i, ur(ir.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function yo(e) {
    var t = an(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = to(n), t !== null) {
            e.blockedOn = t, mo(e.priority, function() {
              po(n);
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
  function Kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Jl = r, n.target.dispatchEvent(r), Jl = null;
      } else return t = wr(n), t !== null && oi(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function go(e, t, n) {
    Kr(e) && n.delete(t);
  }
  function Cc() {
    si = !1, Wt !== null && Kr(Wt) && (Wt = null), Bt !== null && Kr(Bt) && (Bt = null), $t !== null && Kr($t) && ($t = null), lr.forEach(go), ir.forEach(go);
  }
  function or(e, t) {
    e.blockedOn === t && (e.blockedOn = null, si || (si = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Cc)));
  }
  function sr(e) {
    function t(l) {
      return or(l, e);
    }
    if (0 < Qr.length) {
      or(Qr[0], e);
      for (var n = 1; n < Qr.length; n++) {
        var r = Qr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Wt !== null && or(Wt, e), Bt !== null && or(Bt, e), $t !== null && or($t, e), lr.forEach(t), ir.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); ) yo(n), n.blockedOn === null && Ht.shift();
  }
  var Cn = _e.ReactCurrentBatchConfig, Yr = !0;
  function Tc(e, t, n, r) {
    var l = se, i = Cn.transition;
    Cn.transition = null;
    try {
      se = 1, ai(e, t, n, r);
    } finally {
      se = l, Cn.transition = i;
    }
  }
  function Nc(e, t, n, r) {
    var l = se, i = Cn.transition;
    Cn.transition = null;
    try {
      se = 4, ai(e, t, n, r);
    } finally {
      se = l, Cn.transition = i;
    }
  }
  function ai(e, t, n, r) {
    if (Yr) {
      var l = ci(e, t, n, r);
      if (l === null) Ni(e, t, r, Xr, n), vo(e, r);
      else if (_c(l, e, t, n, r)) r.stopPropagation();
      else if (vo(e, r), t & 4 && -1 < xc.indexOf(e)) {
        for (; l !== null; ) {
          var i = wr(l);
          if (i !== null && fo(i), i = ci(e, t, n, r), i === null && Ni(e, t, r, Xr, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Ni(e, t, r, null, n);
    }
  }
  var Xr = null;
  function ci(e, t, n, r) {
    if (Xr = null, e = ql(r), e = an(e), e !== null) if (t = sn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = to(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Xr = e, null;
  }
  function ko(e) {
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
        switch (hc()) {
          case ri:
            return 1;
          case oo:
            return 4;
          case Vr:
          case mc:
            return 16;
          case so:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qt = null, fi = null, Gr = null;
  function wo() {
    if (Gr) return Gr;
    var e, t = fi, n = t.length, r, l = "value" in Qt ? Qt.value : Qt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++) ;
    return Gr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Zr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Jr() {
    return !0;
  }
  function So() {
    return !1;
  }
  function it(e) {
    function t(n, r, l, i, u) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Jr : So, this.isPropagationStopped = So, this;
    }
    return P(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jr);
    }, persist: function() {
    }, isPersistent: Jr }), t;
  }
  var Tn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, di = it(Tn), ar = P({}, Tn, { view: 0, detail: 0 }), Mc = it(ar), pi, hi, cr, qr = P({}, ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== cr && (cr && e.type === "mousemove" ? (pi = e.screenX - cr.screenX, hi = e.screenY - cr.screenY) : hi = pi = 0, cr = e), pi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : hi;
  } }), Eo = it(qr), Pc = P({}, qr, { dataTransfer: 0 }), Rc = it(Pc), Lc = P({}, ar, { relatedTarget: 0 }), mi = it(Lc), zc = P({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jc = it(zc), Dc = P({}, Tn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Oc = it(Dc), Fc = P({}, Tn, { data: 0 }), xo = it(Fc), Ic = {
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
  }, Ac = {
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
  }, Uc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Uc[e]) ? !!t[e] : !1;
  }
  function vi() {
    return Vc;
  }
  var Wc = P({}, ar, { key: function(e) {
    if (e.key) {
      var t = Ic[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ac[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vi, charCode: function(e) {
    return e.type === "keypress" ? Zr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Bc = it(Wc), $c = P({}, qr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _o = it($c), Hc = P({}, ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vi }), Qc = it(Hc), Kc = P({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yc = it(Kc), Xc = P({}, qr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gc = it(Xc), Zc = [9, 13, 27, 32], yi = x && "CompositionEvent" in window, fr = null;
  x && "documentMode" in document && (fr = document.documentMode);
  var Jc = x && "TextEvent" in window && !fr, Co = x && (!yi || fr && 8 < fr && 11 >= fr), To = " ", No = !1;
  function Mo(e, t) {
    switch (e) {
      case "keyup":
        return Zc.indexOf(t.keyCode) !== -1;
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
  function Po(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nn = !1;
  function qc(e, t) {
    switch (e) {
      case "compositionend":
        return Po(t);
      case "keypress":
        return t.which !== 32 ? null : (No = !0, To);
      case "textInput":
        return e = t.data, e === To && No ? null : e;
      default:
        return null;
    }
  }
  function bc(e, t) {
    if (Nn) return e === "compositionend" || !yi && Mo(e, t) ? (e = wo(), Gr = fi = Qt = null, Nn = !1, e) : null;
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
        return Co && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ef = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ef[e.type] : t === "textarea";
  }
  function Lo(e, t, n, r) {
    Zu(r), t = rl(t, "onChange"), 0 < t.length && (n = new di("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var dr = null, pr = null;
  function tf(e) {
    Go(e, 0);
  }
  function br(e) {
    var t = zn(e);
    if (En(t)) return e;
  }
  function nf(e, t) {
    if (e === "change") return t;
  }
  var zo = !1;
  if (x) {
    var gi;
    if (x) {
      var ki = "oninput" in document;
      if (!ki) {
        var jo = document.createElement("div");
        jo.setAttribute("oninput", "return;"), ki = typeof jo.oninput == "function";
      }
      gi = ki;
    } else gi = !1;
    zo = gi && (!document.documentMode || 9 < document.documentMode);
  }
  function Do() {
    dr && (dr.detachEvent("onpropertychange", Oo), pr = dr = null);
  }
  function Oo(e) {
    if (e.propertyName === "value" && br(pr)) {
      var t = [];
      Lo(t, pr, e, ql(e)), eo(tf, t);
    }
  }
  function rf(e, t, n) {
    e === "focusin" ? (Do(), dr = t, pr = n, dr.attachEvent("onpropertychange", Oo)) : e === "focusout" && Do();
  }
  function lf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return br(pr);
  }
  function uf(e, t) {
    if (e === "click") return br(t);
  }
  function of(e, t) {
    if (e === "input" || e === "change") return br(t);
  }
  function sf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var gt = typeof Object.is == "function" ? Object.is : sf;
  function hr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!z.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Fo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Io(e, t) {
    var n = Fo(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
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
      n = Fo(n);
    }
  }
  function Ao(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ao(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Uo() {
    for (var e = window, t = Ut(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ut(e.document);
    }
    return t;
  }
  function wi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function af(e) {
    var t = Uo(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ao(n.ownerDocument.documentElement, n)) {
      if (r !== null && wi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Io(n, i);
          var u = Io(
            n,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var cf = x && "documentMode" in document && 11 >= document.documentMode, Mn = null, Si = null, mr = null, Ei = !1;
  function Vo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ei || Mn == null || Mn !== Ut(r) || (r = Mn, "selectionStart" in r && wi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && hr(mr, r) || (mr = r, r = rl(Si, "onSelect"), 0 < r.length && (t = new di("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Mn)));
  }
  function el(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Pn = { animationend: el("Animation", "AnimationEnd"), animationiteration: el("Animation", "AnimationIteration"), animationstart: el("Animation", "AnimationStart"), transitionend: el("Transition", "TransitionEnd") }, xi = {}, Wo = {};
  x && (Wo = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
  function tl(e) {
    if (xi[e]) return xi[e];
    if (!Pn[e]) return e;
    var t = Pn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Wo) return xi[e] = t[n];
    return e;
  }
  var Bo = tl("animationend"), $o = tl("animationiteration"), Ho = tl("animationstart"), Qo = tl("transitionend"), Ko = /* @__PURE__ */ new Map(), Yo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Kt(e, t) {
    Ko.set(e, t), C(t, [e]);
  }
  for (var _i = 0; _i < Yo.length; _i++) {
    var Ci = Yo[_i], ff = Ci.toLowerCase(), df = Ci[0].toUpperCase() + Ci.slice(1);
    Kt(ff, "on" + df);
  }
  Kt(Bo, "onAnimationEnd"), Kt($o, "onAnimationIteration"), Kt(Ho, "onAnimationStart"), Kt("dblclick", "onDoubleClick"), Kt("focusin", "onFocus"), Kt("focusout", "onBlur"), Kt(Qo, "onTransitionEnd"), N("onMouseEnter", ["mouseout", "mouseover"]), N("onMouseLeave", ["mouseout", "mouseover"]), N("onPointerEnter", ["pointerout", "pointerover"]), N("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pf = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
  function Xo(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, cc(r, t, void 0, e), e.currentTarget = null;
  }
  function Go(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var o = r[u], c = o.instance, v = o.currentTarget;
          if (o = o.listener, c !== i && l.isPropagationStopped()) break e;
          Xo(l, o, v), i = c;
        }
        else for (u = 0; u < r.length; u++) {
          if (o = r[u], c = o.instance, v = o.currentTarget, o = o.listener, c !== i && l.isPropagationStopped()) break e;
          Xo(l, o, v), i = c;
        }
      }
    }
    if (Ur) throw e = ni, Ur = !1, ni = null, e;
  }
  function he(e, t) {
    var n = t[ji];
    n === void 0 && (n = t[ji] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Zo(t, e, 2, !1), n.add(r));
  }
  function Ti(e, t, n) {
    var r = 0;
    t && (r |= 4), Zo(n, e, r, t);
  }
  var nl = "_reactListening" + Math.random().toString(36).slice(2);
  function yr(e) {
    if (!e[nl]) {
      e[nl] = !0, g.forEach(function(n) {
        n !== "selectionchange" && (pf.has(n) || Ti(n, !1, e), Ti(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || (t[nl] = !0, Ti("selectionchange", !1, t));
    }
  }
  function Zo(e, t, n, r) {
    switch (ko(t)) {
      case 1:
        var l = Tc;
        break;
      case 4:
        l = Nc;
        break;
      default:
        l = ai;
    }
    n = l.bind(null, t, n, e), l = void 0, !ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Ni(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || o.nodeType === 8 && o.parentNode === l) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var c = u.tag;
          if ((c === 3 || c === 4) && (c = u.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
          u = u.return;
        }
        for (; o !== null; ) {
          if (u = an(o), u === null) return;
          if (c = u.tag, c === 5 || c === 6) {
            r = i = u;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
    eo(function() {
      var v = i, E = ql(n), _ = [];
      e: {
        var S = Ko.get(e);
        if (S !== void 0) {
          var R = di, j = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              R = Bc;
              break;
            case "focusin":
              j = "focus", R = mi;
              break;
            case "focusout":
              j = "blur", R = mi;
              break;
            case "beforeblur":
            case "afterblur":
              R = mi;
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
              R = Eo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = Rc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Qc;
              break;
            case Bo:
            case $o:
            case Ho:
              R = jc;
              break;
            case Qo:
              R = Yc;
              break;
            case "scroll":
              R = Mc;
              break;
            case "wheel":
              R = Gc;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Oc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = _o;
          }
          var F = (t & 4) !== 0, xe = !F && e === "scroll", h = F ? S !== null ? S + "Capture" : null : S;
          F = [];
          for (var d = v, m; d !== null; ) {
            m = d;
            var M = m.stateNode;
            if (m.tag === 5 && M !== null && (m = M, h !== null && (M = bn(d, h), M != null && F.push(gr(d, M, m)))), xe) break;
            d = d.return;
          }
          0 < F.length && (S = new R(S, j, null, n, E), _.push({ event: S, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (S = e === "mouseover" || e === "pointerover", R = e === "mouseout" || e === "pointerout", S && n !== Jl && (j = n.relatedTarget || n.fromElement) && (an(j) || j[Lt])) break e;
          if ((R || S) && (S = E.window === E ? E : (S = E.ownerDocument) ? S.defaultView || S.parentWindow : window, R ? (j = n.relatedTarget || n.toElement, R = v, j = j ? an(j) : null, j !== null && (xe = sn(j), j !== xe || j.tag !== 5 && j.tag !== 6) && (j = null)) : (R = null, j = v), R !== j)) {
            if (F = Eo, M = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (F = _o, M = "onPointerLeave", h = "onPointerEnter", d = "pointer"), xe = R == null ? S : zn(R), m = j == null ? S : zn(j), S = new F(M, d + "leave", R, n, E), S.target = xe, S.relatedTarget = m, M = null, an(E) === v && (F = new F(h, d + "enter", j, n, E), F.target = m, F.relatedTarget = xe, M = F), xe = M, R && j) t: {
              for (F = R, h = j, d = 0, m = F; m; m = Rn(m)) d++;
              for (m = 0, M = h; M; M = Rn(M)) m++;
              for (; 0 < d - m; ) F = Rn(F), d--;
              for (; 0 < m - d; ) h = Rn(h), m--;
              for (; d--; ) {
                if (F === h || h !== null && F === h.alternate) break t;
                F = Rn(F), h = Rn(h);
              }
              F = null;
            }
            else F = null;
            R !== null && Jo(_, S, R, F, !1), j !== null && xe !== null && Jo(_, xe, j, F, !0);
          }
        }
        e: {
          if (S = v ? zn(v) : window, R = S.nodeName && S.nodeName.toLowerCase(), R === "select" || R === "input" && S.type === "file") var I = nf;
          else if (Ro(S)) if (zo) I = of;
          else {
            I = lf;
            var W = rf;
          }
          else (R = S.nodeName) && R.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (I = uf);
          if (I && (I = I(e, v))) {
            Lo(_, I, n, E);
            break e;
          }
          W && W(e, S, v), e === "focusout" && (W = S._wrapperState) && W.controlled && S.type === "number" && Vt(S, "number", S.value);
        }
        switch (W = v ? zn(v) : window, e) {
          case "focusin":
            (Ro(W) || W.contentEditable === "true") && (Mn = W, Si = v, mr = null);
            break;
          case "focusout":
            mr = Si = Mn = null;
            break;
          case "mousedown":
            Ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ei = !1, Vo(_, n, E);
            break;
          case "selectionchange":
            if (cf) break;
          case "keydown":
          case "keyup":
            Vo(_, n, E);
        }
        var B;
        if (yi) e: {
          switch (e) {
            case "compositionstart":
              var K = "onCompositionStart";
              break e;
            case "compositionend":
              K = "onCompositionEnd";
              break e;
            case "compositionupdate":
              K = "onCompositionUpdate";
              break e;
          }
          K = void 0;
        }
        else Nn ? Mo(e, n) && (K = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (K = "onCompositionStart");
        K && (Co && n.locale !== "ko" && (Nn || K !== "onCompositionStart" ? K === "onCompositionEnd" && Nn && (B = wo()) : (Qt = E, fi = "value" in Qt ? Qt.value : Qt.textContent, Nn = !0)), W = rl(v, K), 0 < W.length && (K = new xo(K, e, null, n, E), _.push({ event: K, listeners: W }), B ? K.data = B : (B = Po(n), B !== null && (K.data = B)))), (B = Jc ? qc(e, n) : bc(e, n)) && (v = rl(v, "onBeforeInput"), 0 < v.length && (E = new xo("onBeforeInput", "beforeinput", null, n, E), _.push({ event: E, listeners: v }), E.data = B));
      }
      Go(_, t);
    });
  }
  function gr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = bn(e, n), i != null && r.unshift(gr(e, i, l)), i = bn(e, t), i != null && r.push(gr(e, i, l))), e = e.return;
    }
    return r;
  }
  function Rn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Jo(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var o = n, c = o.alternate, v = o.stateNode;
      if (c !== null && c === r) break;
      o.tag === 5 && v !== null && (o = v, l ? (c = bn(n, i), c != null && u.unshift(gr(n, c, o))) : l || (c = bn(n, i), c != null && u.push(gr(n, c, o)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var hf = /\r\n?/g, mf = /\u0000|\uFFFD/g;
  function qo(e) {
    return (typeof e == "string" ? e : "" + e).replace(hf, `
`).replace(mf, "");
  }
  function ll(e, t, n) {
    if (t = qo(t), qo(e) !== t && n) throw Error(s(425));
  }
  function il() {
  }
  var Mi = null, Pi = null;
  function Ri(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Li = typeof setTimeout == "function" ? setTimeout : void 0, vf = typeof clearTimeout == "function" ? clearTimeout : void 0, bo = typeof Promise == "function" ? Promise : void 0, yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof bo < "u" ? function(e) {
    return bo.resolve(null).then(e).catch(gf);
  } : Li;
  function gf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function zi(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), sr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    sr(t);
  }
  function Yt(e) {
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
  function es(e) {
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
  var Ln = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Ln, kr = "__reactProps$" + Ln, Lt = "__reactContainer$" + Ln, ji = "__reactEvents$" + Ln, kf = "__reactListeners$" + Ln, wf = "__reactHandles$" + Ln;
  function an(e) {
    var t = e[Ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Lt] || n[Ct]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = es(e); e !== null; ) {
          if (n = e[Ct]) return n;
          e = es(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function wr(e) {
    return e = e[Ct] || e[Lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function zn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ul(e) {
    return e[kr] || null;
  }
  var Di = [], jn = -1;
  function Xt(e) {
    return { current: e };
  }
  function me(e) {
    0 > jn || (e.current = Di[jn], Di[jn] = null, jn--);
  }
  function de(e, t) {
    jn++, Di[jn] = e.current, e.current = t;
  }
  var Gt = {}, Be = Xt(Gt), Je = Xt(!1), cn = Gt;
  function Dn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function qe(e) {
    return e = e.childContextTypes, e != null;
  }
  function ol() {
    me(Je), me(Be);
  }
  function ts(e, t, n) {
    if (Be.current !== Gt) throw Error(s(168));
    de(Be, t), de(Je, n);
  }
  function ns(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ue(e) || "Unknown", l));
    return P({}, n, r);
  }
  function sl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, cn = Be.current, de(Be, e), de(Je, Je.current), !0;
  }
  function rs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = ns(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, me(Je), me(Be), de(Be, e)) : me(Je), de(Je, n);
  }
  var zt = null, al = !1, Oi = !1;
  function ls(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  function Sf(e) {
    al = !0, ls(e);
  }
  function Zt() {
    if (!Oi && zt !== null) {
      Oi = !0;
      var e = 0, t = se;
      try {
        var n = zt;
        for (se = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        zt = null, al = !1;
      } catch (l) {
        throw zt !== null && (zt = zt.slice(e + 1)), io(ri, Zt), l;
      } finally {
        se = t, Oi = !1;
      }
    }
    return null;
  }
  var On = [], Fn = 0, cl = null, fl = 0, ft = [], dt = 0, fn = null, jt = 1, Dt = "";
  function dn(e, t) {
    On[Fn++] = fl, On[Fn++] = cl, cl = e, fl = t;
  }
  function is(e, t, n) {
    ft[dt++] = jt, ft[dt++] = Dt, ft[dt++] = fn, fn = e;
    var r = jt;
    e = Dt;
    var l = 32 - yt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - yt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, jt = 1 << 32 - yt(t) + l | n << l | r, Dt = i + e;
    } else jt = 1 << i | n << l | r, Dt = e;
  }
  function Fi(e) {
    e.return !== null && (dn(e, 1), is(e, 1, 0));
  }
  function Ii(e) {
    for (; e === cl; ) cl = On[--Fn], On[Fn] = null, fl = On[--Fn], On[Fn] = null;
    for (; e === fn; ) fn = ft[--dt], ft[dt] = null, Dt = ft[--dt], ft[dt] = null, jt = ft[--dt], ft[dt] = null;
  }
  var ut = null, ot = null, ye = !1, kt = null;
  function us(e, t) {
    var n = vt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function os(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, ot = Yt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, ot = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: jt, overflow: Dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = vt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ut = e, ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ai(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ui(e) {
    if (ye) {
      var t = ot;
      if (t) {
        var n = t;
        if (!os(e, t)) {
          if (Ai(e)) throw Error(s(418));
          t = Yt(n.nextSibling);
          var r = ut;
          t && os(e, t) ? us(r, n) : (e.flags = e.flags & -4097 | 2, ye = !1, ut = e);
        }
      } else {
        if (Ai(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, ye = !1, ut = e;
      }
    }
  }
  function ss(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function dl(e) {
    if (e !== ut) return !1;
    if (!ye) return ss(e), ye = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ri(e.type, e.memoizedProps)), t && (t = ot)) {
      if (Ai(e)) throw as(), Error(s(418));
      for (; t; ) us(e, t), t = Yt(t.nextSibling);
    }
    if (ss(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ot = Yt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ot = null;
      }
    } else ot = ut ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function as() {
    for (var e = ot; e; ) e = Yt(e.nextSibling);
  }
  function In() {
    ot = ut = null, ye = !1;
  }
  function Vi(e) {
    kt === null ? kt = [e] : kt.push(e);
  }
  var Ef = _e.ReactCurrentBatchConfig;
  function Sr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(u) {
          var o = l.refs;
          u === null ? delete o[i] : o[i] = u;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function pl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function cs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fs(e) {
    function t(h, d) {
      if (e) {
        var m = h.deletions;
        m === null ? (h.deletions = [d], h.flags |= 16) : m.push(d);
      }
    }
    function n(h, d) {
      if (!e) return null;
      for (; d !== null; ) t(h, d), d = d.sibling;
      return null;
    }
    function r(h, d) {
      for (h = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
      return h;
    }
    function l(h, d) {
      return h = ln(h, d), h.index = 0, h.sibling = null, h;
    }
    function i(h, d, m) {
      return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < d ? (h.flags |= 2, d) : m) : (h.flags |= 2, d)) : (h.flags |= 1048576, d);
    }
    function u(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
    }
    function o(h, d, m, M) {
      return d === null || d.tag !== 6 ? (d = Lu(m, h.mode, M), d.return = h, d) : (d = l(d, m), d.return = h, d);
    }
    function c(h, d, m, M) {
      var I = m.type;
      return I === pe ? E(h, d, m.props.children, M, m.key) : d !== null && (d.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Fe && cs(I) === d.type) ? (M = l(d, m.props), M.ref = Sr(h, d, m), M.return = h, M) : (M = Il(m.type, m.key, m.props, null, h.mode, M), M.ref = Sr(h, d, m), M.return = h, M);
    }
    function v(h, d, m, M) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = zu(m, h.mode, M), d.return = h, d) : (d = l(d, m.children || []), d.return = h, d);
    }
    function E(h, d, m, M, I) {
      return d === null || d.tag !== 7 ? (d = wn(m, h.mode, M, I), d.return = h, d) : (d = l(d, m), d.return = h, d);
    }
    function _(h, d, m) {
      if (typeof d == "string" && d !== "" || typeof d == "number") return d = Lu("" + d, h.mode, m), d.return = h, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Oe:
            return m = Il(d.type, d.key, d.props, null, h.mode, m), m.ref = Sr(h, null, d), m.return = h, m;
          case Ce:
            return d = zu(d, h.mode, m), d.return = h, d;
          case Fe:
            var M = d._init;
            return _(h, M(d._payload), m);
        }
        if (on(d) || $(d)) return d = wn(d, h.mode, m, null), d.return = h, d;
        pl(h, d);
      }
      return null;
    }
    function S(h, d, m, M) {
      var I = d !== null ? d.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return I !== null ? null : o(h, d, "" + m, M);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Oe:
            return m.key === I ? c(h, d, m, M) : null;
          case Ce:
            return m.key === I ? v(h, d, m, M) : null;
          case Fe:
            return I = m._init, S(
              h,
              d,
              I(m._payload),
              M
            );
        }
        if (on(m) || $(m)) return I !== null ? null : E(h, d, m, M, null);
        pl(h, m);
      }
      return null;
    }
    function R(h, d, m, M, I) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return h = h.get(m) || null, o(d, h, "" + M, I);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Oe:
            return h = h.get(M.key === null ? m : M.key) || null, c(d, h, M, I);
          case Ce:
            return h = h.get(M.key === null ? m : M.key) || null, v(d, h, M, I);
          case Fe:
            var W = M._init;
            return R(h, d, m, W(M._payload), I);
        }
        if (on(M) || $(M)) return h = h.get(m) || null, E(d, h, M, I, null);
        pl(d, M);
      }
      return null;
    }
    function j(h, d, m, M) {
      for (var I = null, W = null, B = d, K = d = 0, De = null; B !== null && K < m.length; K++) {
        B.index > K ? (De = B, B = null) : De = B.sibling;
        var ie = S(h, B, m[K], M);
        if (ie === null) {
          B === null && (B = De);
          break;
        }
        e && B && ie.alternate === null && t(h, B), d = i(ie, d, K), W === null ? I = ie : W.sibling = ie, W = ie, B = De;
      }
      if (K === m.length) return n(h, B), ye && dn(h, K), I;
      if (B === null) {
        for (; K < m.length; K++) B = _(h, m[K], M), B !== null && (d = i(B, d, K), W === null ? I = B : W.sibling = B, W = B);
        return ye && dn(h, K), I;
      }
      for (B = r(h, B); K < m.length; K++) De = R(B, h, K, m[K], M), De !== null && (e && De.alternate !== null && B.delete(De.key === null ? K : De.key), d = i(De, d, K), W === null ? I = De : W.sibling = De, W = De);
      return e && B.forEach(function(un) {
        return t(h, un);
      }), ye && dn(h, K), I;
    }
    function F(h, d, m, M) {
      var I = $(m);
      if (typeof I != "function") throw Error(s(150));
      if (m = I.call(m), m == null) throw Error(s(151));
      for (var W = I = null, B = d, K = d = 0, De = null, ie = m.next(); B !== null && !ie.done; K++, ie = m.next()) {
        B.index > K ? (De = B, B = null) : De = B.sibling;
        var un = S(h, B, ie.value, M);
        if (un === null) {
          B === null && (B = De);
          break;
        }
        e && B && un.alternate === null && t(h, B), d = i(un, d, K), W === null ? I = un : W.sibling = un, W = un, B = De;
      }
      if (ie.done) return n(
        h,
        B
      ), ye && dn(h, K), I;
      if (B === null) {
        for (; !ie.done; K++, ie = m.next()) ie = _(h, ie.value, M), ie !== null && (d = i(ie, d, K), W === null ? I = ie : W.sibling = ie, W = ie);
        return ye && dn(h, K), I;
      }
      for (B = r(h, B); !ie.done; K++, ie = m.next()) ie = R(B, h, K, ie.value, M), ie !== null && (e && ie.alternate !== null && B.delete(ie.key === null ? K : ie.key), d = i(ie, d, K), W === null ? I = ie : W.sibling = ie, W = ie);
      return e && B.forEach(function(td) {
        return t(h, td);
      }), ye && dn(h, K), I;
    }
    function xe(h, d, m, M) {
      if (typeof m == "object" && m !== null && m.type === pe && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Oe:
            e: {
              for (var I = m.key, W = d; W !== null; ) {
                if (W.key === I) {
                  if (I = m.type, I === pe) {
                    if (W.tag === 7) {
                      n(h, W.sibling), d = l(W, m.props.children), d.return = h, h = d;
                      break e;
                    }
                  } else if (W.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Fe && cs(I) === W.type) {
                    n(h, W.sibling), d = l(W, m.props), d.ref = Sr(h, W, m), d.return = h, h = d;
                    break e;
                  }
                  n(h, W);
                  break;
                } else t(h, W);
                W = W.sibling;
              }
              m.type === pe ? (d = wn(m.props.children, h.mode, M, m.key), d.return = h, h = d) : (M = Il(m.type, m.key, m.props, null, h.mode, M), M.ref = Sr(h, d, m), M.return = h, h = M);
            }
            return u(h);
          case Ce:
            e: {
              for (W = m.key; d !== null; ) {
                if (d.key === W) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                  n(h, d.sibling), d = l(d, m.children || []), d.return = h, h = d;
                  break e;
                } else {
                  n(h, d);
                  break;
                }
                else t(h, d);
                d = d.sibling;
              }
              d = zu(m, h.mode, M), d.return = h, h = d;
            }
            return u(h);
          case Fe:
            return W = m._init, xe(h, d, W(m._payload), M);
        }
        if (on(m)) return j(h, d, m, M);
        if ($(m)) return F(h, d, m, M);
        pl(h, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(h, d.sibling), d = l(d, m), d.return = h, h = d) : (n(h, d), d = Lu(m, h.mode, M), d.return = h, h = d), u(h)) : n(h, d);
    }
    return xe;
  }
  var An = fs(!0), ds = fs(!1), hl = Xt(null), ml = null, Un = null, Wi = null;
  function Bi() {
    Wi = Un = ml = null;
  }
  function $i(e) {
    var t = hl.current;
    me(hl), e._currentValue = t;
  }
  function Hi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Vn(e, t) {
    ml = e, Wi = Un = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (be = !0), e.firstContext = null);
  }
  function pt(e) {
    var t = e._currentValue;
    if (Wi !== e) if (e = { context: e, memoizedValue: t, next: null }, Un === null) {
      if (ml === null) throw Error(s(308));
      Un = e, ml.dependencies = { lanes: 0, firstContext: e };
    } else Un = Un.next = e;
    return t;
  }
  var pn = null;
  function Qi(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  function ps(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Qi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ot(e, r);
  }
  function Ot(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Jt = !1;
  function Ki(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ft(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (re & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ot(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Qi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ot(e, n);
  }
  function vl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ui(e, n);
    }
  }
  function ms(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = u : i = i.next = u, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function yl(e, t, n, r) {
    var l = e.updateQueue;
    Jt = !1;
    var i = l.firstBaseUpdate, u = l.lastBaseUpdate, o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var c = o, v = c.next;
      c.next = null, u === null ? i = v : u.next = v, u = c;
      var E = e.alternate;
      E !== null && (E = E.updateQueue, o = E.lastBaseUpdate, o !== u && (o === null ? E.firstBaseUpdate = v : o.next = v, E.lastBaseUpdate = c));
    }
    if (i !== null) {
      var _ = l.baseState;
      u = 0, E = v = c = null, o = i;
      do {
        var S = o.lane, R = o.eventTime;
        if ((r & S) === S) {
          E !== null && (E = E.next = {
            eventTime: R,
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          });
          e: {
            var j = e, F = o;
            switch (S = t, R = n, F.tag) {
              case 1:
                if (j = F.payload, typeof j == "function") {
                  _ = j.call(R, _, S);
                  break e;
                }
                _ = j;
                break e;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = F.payload, S = typeof j == "function" ? j.call(R, _, S) : j, S == null) break e;
                _ = P({}, _, S);
                break e;
              case 2:
                Jt = !0;
            }
          }
          o.callback !== null && o.lane !== 0 && (e.flags |= 64, S = l.effects, S === null ? l.effects = [o] : S.push(o));
        } else R = { eventTime: R, lane: S, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, E === null ? (v = E = R, c = _) : E = E.next = R, u |= S;
        if (o = o.next, o === null) {
          if (o = l.shared.pending, o === null) break;
          S = o, o = S.next, S.next = null, l.lastBaseUpdate = S, l.shared.pending = null;
        }
      } while (!0);
      if (E === null && (c = _), l.baseState = c, l.firstBaseUpdate = v, l.lastBaseUpdate = E, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          u |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      vn |= u, e.lanes = u, e.memoizedState = _;
    }
  }
  function vs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(s(191, l));
        l.call(r);
      }
    }
  }
  var Er = {}, Tt = Xt(Er), xr = Xt(Er), _r = Xt(Er);
  function hn(e) {
    if (e === Er) throw Error(s(174));
    return e;
  }
  function Yi(e, t) {
    switch (de(_r, t), de(xr, e), de(Tt, Er), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Le(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Le(t, e);
    }
    me(Tt), de(Tt, t);
  }
  function Wn() {
    me(Tt), me(xr), me(_r);
  }
  function ys(e) {
    hn(_r.current);
    var t = hn(Tt.current), n = Le(t, e.type);
    t !== n && (de(xr, e), de(Tt, n));
  }
  function Xi(e) {
    xr.current === e && (me(Tt), me(xr));
  }
  var ge = Xt(0);
  function gl(e) {
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
  var Gi = [];
  function Zi() {
    for (var e = 0; e < Gi.length; e++) Gi[e]._workInProgressVersionPrimary = null;
    Gi.length = 0;
  }
  var kl = _e.ReactCurrentDispatcher, Ji = _e.ReactCurrentBatchConfig, mn = 0, ke = null, Ne = null, ze = null, wl = !1, Cr = !1, Tr = 0, xf = 0;
  function $e() {
    throw Error(s(321));
  }
  function qi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function bi(e, t, n, r, l, i) {
    if (mn = i, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, kl.current = e === null || e.memoizedState === null ? Nf : Mf, e = n(r, l), Cr) {
      i = 0;
      do {
        if (Cr = !1, Tr = 0, 25 <= i) throw Error(s(301));
        i += 1, ze = Ne = null, t.updateQueue = null, kl.current = Pf, e = n(r, l);
      } while (Cr);
    }
    if (kl.current = xl, t = Ne !== null && Ne.next !== null, mn = 0, ze = Ne = ke = null, wl = !1, t) throw Error(s(300));
    return e;
  }
  function eu() {
    var e = Tr !== 0;
    return Tr = 0, e;
  }
  function Nt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ze === null ? ke.memoizedState = ze = e : ze = ze.next = e, ze;
  }
  function ht() {
    if (Ne === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = ze === null ? ke.memoizedState : ze.next;
    if (t !== null) ze = t, Ne = e;
    else {
      if (e === null) throw Error(s(310));
      Ne = e, e = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, ze === null ? ke.memoizedState = ze = e : ze = ze.next = e;
    }
    return ze;
  }
  function Nr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function tu(e) {
    var t = ht(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Ne, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = i.next, i.next = u;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var o = u = null, c = null, v = i;
      do {
        var E = v.lane;
        if ((mn & E) === E) c !== null && (c = c.next = { lane: 0, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }), r = v.hasEagerState ? v.eagerState : e(r, v.action);
        else {
          var _ = {
            lane: E,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          };
          c === null ? (o = c = _, u = r) : c = c.next = _, ke.lanes |= E, vn |= E;
        }
        v = v.next;
      } while (v !== null && v !== i);
      c === null ? u = r : c.next = o, gt(r, t.memoizedState) || (be = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = c, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, ke.lanes |= i, vn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function nu(e) {
    var t = ht(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== l);
      gt(i, t.memoizedState) || (be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function gs() {
  }
  function ks(e, t) {
    var n = ke, r = ht(), l = t(), i = !gt(r.memoizedState, l);
    if (i && (r.memoizedState = l, be = !0), r = r.queue, ru(Es.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ze !== null && ze.memoizedState.tag & 1) {
      if (n.flags |= 2048, Mr(9, Ss.bind(null, n, r, l, t), void 0, null), je === null) throw Error(s(349));
      (mn & 30) !== 0 || ws(n, t, l);
    }
    return l;
  }
  function ws(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ss(e, t, n, r) {
    t.value = n, t.getSnapshot = r, xs(t) && _s(e);
  }
  function Es(e, t, n) {
    return n(function() {
      xs(t) && _s(e);
    });
  }
  function xs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function _s(e) {
    var t = Ot(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Cs(e) {
    var t = Nt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tf.bind(null, ke, e), [t.memoizedState, e];
  }
  function Mr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ts() {
    return ht().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = Nt();
    ke.flags |= e, l.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function El(e, t, n, r) {
    var l = ht();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ne !== null) {
      var u = Ne.memoizedState;
      if (i = u.destroy, r !== null && qi(r, u.deps)) {
        l.memoizedState = Mr(t, n, i, r);
        return;
      }
    }
    ke.flags |= e, l.memoizedState = Mr(1 | t, n, i, r);
  }
  function Ns(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function ru(e, t) {
    return El(2048, 8, e, t);
  }
  function Ms(e, t) {
    return El(4, 2, e, t);
  }
  function Ps(e, t) {
    return El(4, 4, e, t);
  }
  function Rs(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ls(e, t, n) {
    return n = n != null ? n.concat([e]) : null, El(4, 4, Rs.bind(null, t, e), n);
  }
  function lu() {
  }
  function zs(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function js(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ds(e, t, n) {
    return (mn & 21) === 0 ? (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n) : (gt(n, t) || (n = ao(), ke.lanes |= n, vn |= n, e.baseState = !0), t);
  }
  function _f(e, t) {
    var n = se;
    se = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ji.transition;
    Ji.transition = {};
    try {
      e(!1), t();
    } finally {
      se = n, Ji.transition = r;
    }
  }
  function Os() {
    return ht().memoizedState;
  }
  function Cf(e, t, n) {
    var r = nn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Fs(e)) Is(t, n);
    else if (n = ps(e, t, n, r), n !== null) {
      var l = Xe();
      xt(n, e, r, l), As(n, t, r);
    }
  }
  function Tf(e, t, n) {
    var r = nn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Fs(e)) Is(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var u = t.lastRenderedState, o = i(u, n);
        if (l.hasEagerState = !0, l.eagerState = o, gt(o, u)) {
          var c = t.interleaved;
          c === null ? (l.next = l, Qi(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = ps(e, t, l, r), n !== null && (l = Xe(), xt(n, e, r, l), As(n, t, r));
    }
  }
  function Fs(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke;
  }
  function Is(e, t) {
    Cr = wl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function As(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ui(e, n);
    }
  }
  var xl = { readContext: pt, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, Nf = { readContext: pt, useCallback: function(e, t) {
    return Nt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: pt, useEffect: Ns, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Sl(
      4194308,
      4,
      Rs.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Sl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Sl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Nt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Nt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cf.bind(null, ke, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Nt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Cs, useDebugValue: lu, useDeferredValue: function(e) {
    return Nt().memoizedState = e;
  }, useTransition: function() {
    var e = Cs(!1), t = e[0];
    return e = _f.bind(null, e[1]), Nt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ke, l = Nt();
    if (ye) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), je === null) throw Error(s(349));
      (mn & 30) !== 0 || ws(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Ns(Es.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Mr(9, Ss.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Nt(), t = je.identifierPrefix;
    if (ye) {
      var n = Dt, r = jt;
      n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = xf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Mf = {
    readContext: pt,
    useCallback: zs,
    useContext: pt,
    useEffect: ru,
    useImperativeHandle: Ls,
    useInsertionEffect: Ms,
    useLayoutEffect: Ps,
    useMemo: js,
    useReducer: tu,
    useRef: Ts,
    useState: function() {
      return tu(Nr);
    },
    useDebugValue: lu,
    useDeferredValue: function(e) {
      var t = ht();
      return Ds(t, Ne.memoizedState, e);
    },
    useTransition: function() {
      var e = tu(Nr)[0], t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: gs,
    useSyncExternalStore: ks,
    useId: Os,
    unstable_isNewReconciler: !1
  }, Pf = { readContext: pt, useCallback: zs, useContext: pt, useEffect: ru, useImperativeHandle: Ls, useInsertionEffect: Ms, useLayoutEffect: Ps, useMemo: js, useReducer: nu, useRef: Ts, useState: function() {
    return nu(Nr);
  }, useDebugValue: lu, useDeferredValue: function(e) {
    var t = ht();
    return Ne === null ? t.memoizedState = e : Ds(t, Ne.memoizedState, e);
  }, useTransition: function() {
    var e = nu(Nr)[0], t = ht().memoizedState;
    return [e, t];
  }, useMutableSource: gs, useSyncExternalStore: ks, useId: Os, unstable_isNewReconciler: !1 };
  function wt(e, t) {
    if (e && e.defaultProps) {
      t = P({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function iu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : P({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var _l = { isMounted: function(e) {
    return (e = e._reactInternals) ? sn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), l = nn(e), i = Ft(r, l);
    i.payload = t, n != null && (i.callback = n), t = qt(e, i, l), t !== null && (xt(t, e, l, r), vl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), l = nn(e), i = Ft(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = qt(e, i, l), t !== null && (xt(t, e, l, r), vl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Xe(), r = nn(e), l = Ft(n, r);
    l.tag = 2, t != null && (l.callback = t), t = qt(e, l, r), t !== null && (xt(t, e, r, n), vl(t, e, r));
  } };
  function Us(e, t, n, r, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, u) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, i) : !0;
  }
  function Vs(e, t, n) {
    var r = !1, l = Gt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = pt(i) : (l = qe(t) ? cn : Be.current, r = t.contextTypes, i = (r = r != null) ? Dn(e, l) : Gt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _l, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Ws(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _l.enqueueReplaceState(t, t.state, null);
  }
  function uu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ki(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = pt(i) : (i = qe(t) ? cn : Be.current, l.context = Dn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (iu(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _l.enqueueReplaceState(l, l.state, null), yl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Bn(e, t) {
    try {
      var n = "", r = t;
      do
        n += te(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ou(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function su(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Bs(e, t, n) {
    n = Ft(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Ll || (Ll = !0, xu = r), su(e, t);
    }, n;
  }
  function $s(e, t, n) {
    n = Ft(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        su(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      su(e, t), typeof r != "function" && (en === null ? en = /* @__PURE__ */ new Set([this]) : en.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function Hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Rf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Hf.bind(null, e, t, n), t.then(e, e));
  }
  function Qs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ks(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Lf = _e.ReactCurrentOwner, be = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? ds(t, null, n, r) : An(t, e.child, n, r);
  }
  function Ys(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Vn(t, l), r = bi(e, t, n, r, i, l), n = eu(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, It(e, t, l)) : (ye && n && Fi(t), t.flags |= 1, Ye(e, t, r, l), t.child);
  }
  function Xs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Ru(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Gs(e, t, i, r, l)) : (e = Il(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : hr, n(u, r) && e.ref === t.ref) return It(e, t, l);
    }
    return t.flags |= 1, e = ln(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Gs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (hr(i, r) && e.ref === t.ref) if (be = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (be = !0);
      else return t.lanes = e.lanes, It(e, t, l);
    }
    return au(e, t, n, r, l);
  }
  function Zs(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, de(Hn, st), st |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, de(Hn, st), st |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, de(Hn, st), st |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, de(Hn, st), st |= r;
    return Ye(e, t, l, n), t.child;
  }
  function Js(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function au(e, t, n, r, l) {
    var i = qe(n) ? cn : Be.current;
    return i = Dn(t, i), Vn(t, l), n = bi(e, t, n, r, i, l), r = eu(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, It(e, t, l)) : (ye && r && Fi(t), t.flags |= 1, Ye(e, t, n, l), t.child);
  }
  function qs(e, t, n, r, l) {
    if (qe(n)) {
      var i = !0;
      sl(t);
    } else i = !1;
    if (Vn(t, l), t.stateNode === null) Tl(e, t), Vs(t, n, r), uu(t, n, r, l), r = !0;
    else if (e === null) {
      var u = t.stateNode, o = t.memoizedProps;
      u.props = o;
      var c = u.context, v = n.contextType;
      typeof v == "object" && v !== null ? v = pt(v) : (v = qe(n) ? cn : Be.current, v = Dn(t, v));
      var E = n.getDerivedStateFromProps, _ = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      _ || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o !== r || c !== v) && Ws(t, u, r, v), Jt = !1;
      var S = t.memoizedState;
      u.state = S, yl(t, r, u, l), c = t.memoizedState, o !== r || S !== c || Je.current || Jt ? (typeof E == "function" && (iu(t, n, E, r), c = t.memoizedState), (o = Jt || Us(t, n, o, r, S, c, v)) ? (_ || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), u.props = r, u.state = c, u.context = v, r = o) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, hs(e, t), o = t.memoizedProps, v = t.type === t.elementType ? o : wt(t.type, o), u.props = v, _ = t.pendingProps, S = u.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = qe(n) ? cn : Be.current, c = Dn(t, c));
      var R = n.getDerivedStateFromProps;
      (E = typeof R == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o !== _ || S !== c) && Ws(t, u, r, c), Jt = !1, S = t.memoizedState, u.state = S, yl(t, r, u, l);
      var j = t.memoizedState;
      o !== _ || S !== j || Je.current || Jt ? (typeof R == "function" && (iu(t, n, R, r), j = t.memoizedState), (v = Jt || Us(t, n, v, r, S, j, c) || !1) ? (E || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, j, c), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, j, c)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || o === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = j), u.props = r, u.state = j, u.context = c, r = v) : (typeof u.componentDidUpdate != "function" || o === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return cu(e, t, n, r, i, l);
  }
  function cu(e, t, n, r, l, i) {
    Js(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && rs(t, n, !1), It(e, t, i);
    r = t.stateNode, Lf.current = t;
    var o = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = An(t, e.child, null, i), t.child = An(t, null, o, i)) : Ye(e, t, o, i), t.memoizedState = r.state, l && rs(t, n, !0), t.child;
  }
  function bs(e) {
    var t = e.stateNode;
    t.pendingContext ? ts(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ts(e, t.context, !1), Yi(e, t.containerInfo);
  }
  function ea(e, t, n, r, l) {
    return In(), Vi(l), t.flags |= 256, Ye(e, t, n, r), t.child;
  }
  var fu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function du(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ta(e, t, n) {
    var r = t.pendingProps, l = ge.current, i = !1, u = (t.flags & 128) !== 0, o;
    if ((o = u) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), de(ge, l & 1), e === null)
      return Ui(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, u = { mode: "hidden", children: u }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = Al(u, r, 0, null), e = wn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = du(n), t.memoizedState = fu, e) : pu(t, u));
    if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return zf(e, t, u, r, o, l, n);
    if (i) {
      i = r.fallback, u = t.mode, l = e.child, o = l.sibling;
      var c = { mode: "hidden", children: r.children };
      return (u & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = ln(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = ln(o, i) : (i = wn(i, u, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, u = e.child.memoizedState, u = u === null ? du(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = fu, r;
    }
    return i = e.child, e = i.sibling, r = ln(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function pu(e, t) {
    return t = Al({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Cl(e, t, n, r) {
    return r !== null && Vi(r), An(t, e.child, null, n), e = pu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function zf(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ou(Error(s(422))), Cl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Al({ mode: "visible", children: r.children }, l, 0, null), i = wn(i, l, u, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && An(t, e.child, null, u), t.child.memoizedState = du(u), t.memoizedState = fu, i);
    if ((t.mode & 1) === 0) return Cl(e, t, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
      return r = o, i = Error(s(419)), r = ou(i, r, void 0), Cl(e, t, u, r);
    }
    if (o = (u & e.childLanes) !== 0, be || o) {
      if (r = je, r !== null) {
        switch (u & -u) {
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
        l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ot(e, l), xt(r, e, l, -1));
      }
      return Pu(), r = ou(Error(s(421))), Cl(e, t, u, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ot = Yt(l.nextSibling), ut = t, ye = !0, kt = null, e !== null && (ft[dt++] = jt, ft[dt++] = Dt, ft[dt++] = fn, jt = e.id, Dt = e.overflow, fn = t), t = pu(t, r.children), t.flags |= 4096, t);
  }
  function na(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Hi(e.return, t, n);
  }
  function hu(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function ra(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (Ye(e, t, r.children, n), r = ge.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && na(e, n, t);
        else if (e.tag === 19) na(e, n, t);
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
      r &= 1;
    }
    if (de(ge, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && gl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), hu(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && gl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        hu(t, !0, n, null, i);
        break;
      case "together":
        hu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Tl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function It(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), vn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function jf(e, t, n) {
    switch (t.tag) {
      case 3:
        bs(t), In();
        break;
      case 5:
        ys(t);
        break;
      case 1:
        qe(t.type) && sl(t);
        break;
      case 4:
        Yi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        de(hl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (de(ge, ge.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ta(e, t, n) : (de(ge, ge.current & 1), e = It(e, t, n), e !== null ? e.sibling : null);
        de(ge, ge.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ra(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), de(ge, ge.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Zs(e, t, n);
    }
    return It(e, t, n);
  }
  var la, mu, ia, ua;
  la = function(e, t) {
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
  }, mu = function() {
  }, ia = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, hn(Tt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Yn(e, l), r = Yn(e, r), i = [];
          break;
        case "select":
          l = P({}, l, { value: void 0 }), r = P({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = O(e, l), r = O(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = il);
      }
      Gl(n, r);
      var u;
      n = null;
      for (v in l) if (!r.hasOwnProperty(v) && l.hasOwnProperty(v) && l[v] != null) if (v === "style") {
        var o = l[v];
        for (u in o) o.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else v !== "dangerouslySetInnerHTML" && v !== "children" && v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (k.hasOwnProperty(v) ? i || (i = []) : (i = i || []).push(v, null));
      for (v in r) {
        var c = r[v];
        if (o = l?.[v], r.hasOwnProperty(v) && c !== o && (c != null || o != null)) if (v === "style") if (o) {
          for (u in o) !o.hasOwnProperty(u) || c && c.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in c) c.hasOwnProperty(u) && o[u] !== c[u] && (n || (n = {}), n[u] = c[u]);
        } else n || (i || (i = []), i.push(
          v,
          n
        )), n = c;
        else v === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, o = o ? o.__html : void 0, c != null && o !== c && (i = i || []).push(v, c)) : v === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(v, "" + c) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && (k.hasOwnProperty(v) ? (c != null && v === "onScroll" && he("scroll", e), i || o === c || (i = [])) : (i = i || []).push(v, c));
      }
      n && (i = i || []).push("style", n);
      var v = i;
      (t.updateQueue = v) && (t.flags |= 4);
    }
  }, ua = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Pr(e, t) {
    if (!ye) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Df(e, t, n) {
    var r = t.pendingProps;
    switch (Ii(t), t.tag) {
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
        return He(t), null;
      case 1:
        return qe(t.type) && ol(), He(t), null;
      case 3:
        return r = t.stateNode, Wn(), me(Je), me(Be), Zi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (dl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kt !== null && (Tu(kt), kt = null))), mu(e, t), He(t), null;
      case 5:
        Xi(t);
        var l = hn(_r.current);
        if (n = t.type, e !== null && t.stateNode != null) ia(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return He(t), null;
          }
          if (e = hn(Tt.current), dl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Ct] = t, r[kr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                he("cancel", r), he("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < vr.length; l++) he(vr[l], r);
                break;
              case "source":
                he("error", r);
                break;
              case "img":
              case "image":
              case "link":
                he(
                  "error",
                  r
                ), he("load", r);
                break;
              case "details":
                he("toggle", r);
                break;
              case "input":
                Xn(r, i), he("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, he("invalid", r);
                break;
              case "textarea":
                G(r, i), he("invalid", r);
            }
            Gl(n, i), l = null;
            for (var u in i) if (i.hasOwnProperty(u)) {
              var o = i[u];
              u === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && ll(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && ll(
                r.textContent,
                o,
                e
              ), l = ["children", "" + o]) : k.hasOwnProperty(u) && o != null && u === "onScroll" && he("scroll", r);
            }
            switch (n) {
              case "input":
                Sn(r), Zn(r, i, !0);
                break;
              case "textarea":
                Sn(r), ee(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = il);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = oe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Ct] = t, e[kr] = r, la(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = Zl(n, r), n) {
                case "dialog":
                  he("cancel", e), he("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  he("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < vr.length; l++) he(vr[l], e);
                  l = r;
                  break;
                case "source":
                  he("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  he(
                    "error",
                    e
                  ), he("load", e), l = r;
                  break;
                case "details":
                  he("toggle", e), l = r;
                  break;
                case "input":
                  Xn(e, r), l = Yn(e, r), he("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = P({}, r, { value: void 0 }), he("invalid", e);
                  break;
                case "textarea":
                  G(e, r), l = O(e, r), he("invalid", e);
                  break;
                default:
                  l = r;
              }
              Gl(n, l), o = l;
              for (i in o) if (o.hasOwnProperty(i)) {
                var c = o[i];
                i === "style" ? Xu(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Ze(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Jn(e, c) : typeof c == "number" && Jn(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (k.hasOwnProperty(i) ? c != null && i === "onScroll" && he("scroll", e) : c != null && ce(e, i, c, u));
              }
              switch (n) {
                case "input":
                  Sn(e), Zn(e, r, !1);
                  break;
                case "textarea":
                  Sn(e), ee(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + le(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? y(e, !!r.multiple, i, !1) : r.defaultValue != null && y(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = il);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return He(t), null;
      case 6:
        if (e && t.stateNode != null) ua(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = hn(_r.current), hn(Tt.current), dl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (i = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                ll(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ll(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
        }
        return He(t), null;
      case 13:
        if (me(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ye && ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) as(), In(), t.flags |= 98560, i = !1;
          else if (i = dl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Ct] = t;
            } else In(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            He(t), i = !1;
          } else kt !== null && (Tu(kt), kt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ge.current & 1) !== 0 ? Me === 0 && (Me = 3) : Pu())), t.updateQueue !== null && (t.flags |= 4), He(t), null);
      case 4:
        return Wn(), mu(e, t), e === null && yr(t.stateNode.containerInfo), He(t), null;
      case 10:
        return $i(t.type._context), He(t), null;
      case 17:
        return qe(t.type) && ol(), He(t), null;
      case 19:
        if (me(ge), i = t.memoizedState, i === null) return He(t), null;
        if (r = (t.flags & 128) !== 0, u = i.rendering, u === null) if (r) Pr(i, !1);
        else {
          if (Me !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = gl(e), u !== null) {
              for (t.flags |= 128, Pr(i, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return de(ge, ge.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Ee() > Qn && (t.flags |= 128, r = !0, Pr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = gl(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Pr(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !ye) return He(t), null;
          } else 2 * Ee() - i.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128, r = !0, Pr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (n = i.last, n !== null ? n.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ee(), t.sibling = null, n = ge.current, de(ge, r ? n & 1 | 2 : n & 1), t) : (He(t), null);
      case 22:
      case 23:
        return Mu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (st & 1073741824) !== 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Of(e, t) {
    switch (Ii(t), t.tag) {
      case 1:
        return qe(t.type) && ol(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wn(), me(Je), me(Be), Zi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Xi(t), null;
      case 13:
        if (me(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          In();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return me(ge), null;
      case 4:
        return Wn(), null;
      case 10:
        return $i(t.type._context), null;
      case 22:
      case 23:
        return Mu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Nl = !1, Qe = !1, Ff = typeof WeakSet == "function" ? WeakSet : Set, L = null;
  function $n(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      we(e, t, r);
    }
    else n.current = null;
  }
  function vu(e, t, n) {
    try {
      n();
    } catch (r) {
      we(e, t, r);
    }
  }
  var oa = !1;
  function If(e, t) {
    if (Mi = Yr, e = Uo(), wi(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, o = -1, c = -1, v = 0, E = 0, _ = e, S = null;
          t: for (; ; ) {
            for (var R; _ !== n || l !== 0 && _.nodeType !== 3 || (o = u + l), _ !== i || r !== 0 && _.nodeType !== 3 || (c = u + r), _.nodeType === 3 && (u += _.nodeValue.length), (R = _.firstChild) !== null; )
              S = _, _ = R;
            for (; ; ) {
              if (_ === e) break t;
              if (S === n && ++v === l && (o = u), S === i && ++E === r && (c = u), (R = _.nextSibling) !== null) break;
              _ = S, S = _.parentNode;
            }
            _ = R;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Pi = { focusedElem: e, selectionRange: n }, Yr = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
    else for (; L !== null; ) {
      t = L;
      try {
        var j = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (j !== null) {
              var F = j.memoizedProps, xe = j.memoizedState, h = t.stateNode, d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? F : wt(t.type, F), xe);
              h.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (M) {
        we(t, t.return, M);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, L = e;
        break;
      }
      L = t.return;
    }
    return j = oa, oa = !1, j;
  }
  function Rr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && vu(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ml(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function yu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function sa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, sa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[kr], delete t[ji], delete t[kf], delete t[wf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function aa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ca(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || aa(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = il));
    else if (r !== 4 && (e = e.child, e !== null)) for (gu(e, t, n), e = e.sibling; e !== null; ) gu(e, t, n), e = e.sibling;
  }
  function ku(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ku(e, t, n), e = e.sibling; e !== null; ) ku(e, t, n), e = e.sibling;
  }
  var Ae = null, St = !1;
  function bt(e, t, n) {
    for (n = n.child; n !== null; ) fa(e, t, n), n = n.sibling;
  }
  function fa(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function") try {
      _t.onCommitFiberUnmount(Wr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Qe || $n(n, t);
      case 6:
        var r = Ae, l = St;
        Ae = null, bt(e, t, n), Ae = r, St = l, Ae !== null && (St ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
        break;
      case 18:
        Ae !== null && (St ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? zi(e.parentNode, n) : e.nodeType === 1 && zi(e, n), sr(e)) : zi(Ae, n.stateNode));
        break;
      case 4:
        r = Ae, l = St, Ae = n.stateNode.containerInfo, St = !0, bt(e, t, n), Ae = r, St = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, u = i.destroy;
            i = i.tag, u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && vu(n, t, u), l = l.next;
          } while (l !== r);
        }
        bt(e, t, n);
        break;
      case 1:
        if (!Qe && ($n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (o) {
          we(n, t, o);
        }
        bt(e, t, n);
        break;
      case 21:
        bt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Qe = (r = Qe) || n.memoizedState !== null, bt(e, t, n), Qe = r) : bt(e, t, n);
        break;
      default:
        bt(e, t, n);
    }
  }
  function da(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ff()), t.forEach(function(r) {
        var l = Kf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Et(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, u = t, o = u;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              Ae = o.stateNode, St = !1;
              break e;
            case 3:
              Ae = o.stateNode.containerInfo, St = !0;
              break e;
            case 4:
              Ae = o.stateNode.containerInfo, St = !0;
              break e;
          }
          o = o.return;
        }
        if (Ae === null) throw Error(s(160));
        fa(i, u, l), Ae = null, St = !1;
        var c = l.alternate;
        c !== null && (c.return = null), l.return = null;
      } catch (v) {
        we(l, t, v);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pa(t, e), t = t.sibling;
  }
  function pa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Et(t, e), Mt(e), r & 4) {
          try {
            Rr(3, e, e.return), Ml(3, e);
          } catch (F) {
            we(e, e.return, F);
          }
          try {
            Rr(5, e, e.return);
          } catch (F) {
            we(e, e.return, F);
          }
        }
        break;
      case 1:
        Et(t, e), Mt(e), r & 512 && n !== null && $n(n, n.return);
        break;
      case 5:
        if (Et(t, e), Mt(e), r & 512 && n !== null && $n(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Jn(l, "");
          } catch (F) {
            we(e, e.return, F);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, u = n !== null ? n.memoizedProps : i, o = e.type, c = e.updateQueue;
          if (e.updateQueue = null, c !== null) try {
            o === "input" && i.type === "radio" && i.name != null && Ir(l, i), Zl(o, u);
            var v = Zl(o, i);
            for (u = 0; u < c.length; u += 2) {
              var E = c[u], _ = c[u + 1];
              E === "style" ? Xu(l, _) : E === "dangerouslySetInnerHTML" ? Ze(l, _) : E === "children" ? Jn(l, _) : ce(l, E, _, v);
            }
            switch (o) {
              case "input":
                Gn(l, i);
                break;
              case "textarea":
                We(l, i);
                break;
              case "select":
                var S = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var R = i.value;
                R != null ? y(l, !!i.multiple, R, !1) : S !== !!i.multiple && (i.defaultValue != null ? y(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : y(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[kr] = i;
          } catch (F) {
            we(e, e.return, F);
          }
        }
        break;
      case 6:
        if (Et(t, e), Mt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (F) {
            we(e, e.return, F);
          }
        }
        break;
      case 3:
        if (Et(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          sr(t.containerInfo);
        } catch (F) {
          we(e, e.return, F);
        }
        break;
      case 4:
        Et(t, e), Mt(e);
        break;
      case 13:
        Et(t, e), Mt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Eu = Ee())), r & 4 && da(e);
        break;
      case 22:
        if (E = n !== null && n.memoizedState !== null, e.mode & 1 ? (Qe = (v = Qe) || E, Et(t, e), Qe = v) : Et(t, e), Mt(e), r & 8192) {
          if (v = e.memoizedState !== null, (e.stateNode.isHidden = v) && !E && (e.mode & 1) !== 0) for (L = e, E = e.child; E !== null; ) {
            for (_ = L = E; L !== null; ) {
              switch (S = L, R = S.child, S.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, S, S.return);
                  break;
                case 1:
                  $n(S, S.return);
                  var j = S.stateNode;
                  if (typeof j.componentWillUnmount == "function") {
                    r = S, n = S.return;
                    try {
                      t = r, j.props = t.memoizedProps, j.state = t.memoizedState, j.componentWillUnmount();
                    } catch (F) {
                      we(r, n, F);
                    }
                  }
                  break;
                case 5:
                  $n(S, S.return);
                  break;
                case 22:
                  if (S.memoizedState !== null) {
                    va(_);
                    continue;
                  }
              }
              R !== null ? (R.return = S, L = R) : va(_);
            }
            E = E.sibling;
          }
          e: for (E = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (E === null) {
                E = _;
                try {
                  l = _.stateNode, v ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = _.stateNode, c = _.memoizedProps.style, u = c != null && c.hasOwnProperty("display") ? c.display : null, o.style.display = Yu("display", u));
                } catch (F) {
                  we(e, e.return, F);
                }
              }
            } else if (_.tag === 6) {
              if (E === null) try {
                _.stateNode.nodeValue = v ? "" : _.memoizedProps;
              } catch (F) {
                we(e, e.return, F);
              }
            } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
              _.child.return = _, _ = _.child;
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              E === _ && (E = null), _ = _.return;
            }
            E === _ && (E = null), _.sibling.return = _.return, _ = _.sibling;
          }
        }
        break;
      case 19:
        Et(t, e), Mt(e), r & 4 && da(e);
        break;
      case 21:
        break;
      default:
        Et(
          t,
          e
        ), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (aa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Jn(l, ""), r.flags &= -33);
            var i = ca(e);
            ku(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, o = ca(e);
            gu(e, o, u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (c) {
        we(e, e.return, c);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Af(e, t, n) {
    L = e, ha(e);
  }
  function ha(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
      var l = L, i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Nl;
        if (!u) {
          var o = l.alternate, c = o !== null && o.memoizedState !== null || Qe;
          o = Nl;
          var v = Qe;
          if (Nl = u, (Qe = c) && !v) for (L = l; L !== null; ) u = L, c = u.child, u.tag === 22 && u.memoizedState !== null ? ya(l) : c !== null ? (c.return = u, L = c) : ya(l);
          for (; i !== null; ) L = i, ha(i), i = i.sibling;
          L = l, Nl = o, Qe = v;
        }
        ma(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, L = i) : ma(e);
    }
  }
  function ma(e) {
    for (; L !== null; ) {
      var t = L;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Qe) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && vs(t, i, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                vs(t, u, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var v = t.alternate;
                if (v !== null) {
                  var E = v.memoizedState;
                  if (E !== null) {
                    var _ = E.dehydrated;
                    _ !== null && sr(_);
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
              throw Error(s(163));
          }
          Qe || t.flags & 512 && yu(t);
        } catch (S) {
          we(t, t.return, S);
        }
      }
      if (t === e) {
        L = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, L = n;
        break;
      }
      L = t.return;
    }
  }
  function va(e) {
    for (; L !== null; ) {
      var t = L;
      if (t === e) {
        L = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, L = n;
        break;
      }
      L = t.return;
    }
  }
  function ya(e) {
    for (; L !== null; ) {
      var t = L;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ml(4, t);
            } catch (c) {
              we(t, n, c);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (c) {
                we(t, l, c);
              }
            }
            var i = t.return;
            try {
              yu(t);
            } catch (c) {
              we(t, i, c);
            }
            break;
          case 5:
            var u = t.return;
            try {
              yu(t);
            } catch (c) {
              we(t, u, c);
            }
        }
      } catch (c) {
        we(t, t.return, c);
      }
      if (t === e) {
        L = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        o.return = t.return, L = o;
        break;
      }
      L = t.return;
    }
  }
  var Uf = Math.ceil, Pl = _e.ReactCurrentDispatcher, wu = _e.ReactCurrentOwner, mt = _e.ReactCurrentBatchConfig, re = 0, je = null, Te = null, Ue = 0, st = 0, Hn = Xt(0), Me = 0, Lr = null, vn = 0, Rl = 0, Su = 0, zr = null, et = null, Eu = 0, Qn = 1 / 0, At = null, Ll = !1, xu = null, en = null, zl = !1, tn = null, jl = 0, jr = 0, _u = null, Dl = -1, Ol = 0;
  function Xe() {
    return (re & 6) !== 0 ? Ee() : Dl !== -1 ? Dl : Dl = Ee();
  }
  function nn(e) {
    return (e.mode & 1) === 0 ? 1 : (re & 2) !== 0 && Ue !== 0 ? Ue & -Ue : Ef.transition !== null ? (Ol === 0 && (Ol = ao()), Ol) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ko(e.type)), e);
  }
  function xt(e, t, n, r) {
    if (50 < jr) throw jr = 0, _u = null, Error(s(185));
    rr(e, n, r), ((re & 2) === 0 || e !== je) && (e === je && ((re & 2) === 0 && (Rl |= n), Me === 4 && rn(e, Ue)), tt(e, r), n === 1 && re === 0 && (t.mode & 1) === 0 && (Qn = Ee() + 500, al && Zt()));
  }
  function tt(e, t) {
    var n = e.callbackNode;
    Sc(e, t);
    var r = Hr(e, e === je ? Ue : 0);
    if (r === 0) n !== null && uo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && uo(n), t === 1) e.tag === 0 ? Sf(ka.bind(null, e)) : ls(ka.bind(null, e)), yf(function() {
        (re & 6) === 0 && Zt();
      }), n = null;
      else {
        switch (co(r)) {
          case 1:
            n = ri;
            break;
          case 4:
            n = oo;
            break;
          case 16:
            n = Vr;
            break;
          case 536870912:
            n = so;
            break;
          default:
            n = Vr;
        }
        n = Na(n, ga.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ga(e, t) {
    if (Dl = -1, Ol = 0, (re & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (Kn() && e.callbackNode !== n) return null;
    var r = Hr(e, e === je ? Ue : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Fl(e, r);
    else {
      t = r;
      var l = re;
      re |= 2;
      var i = Sa();
      (je !== e || Ue !== t) && (At = null, Qn = Ee() + 500, gn(e, t));
      do
        try {
          Bf();
          break;
        } catch (o) {
          wa(e, o);
        }
      while (!0);
      Bi(), Pl.current = i, re = l, Te !== null ? t = 0 : (je = null, Ue = 0, t = Me);
    }
    if (t !== 0) {
      if (t === 2 && (l = li(e), l !== 0 && (r = l, t = Cu(e, l))), t === 1) throw n = Lr, gn(e, 0), rn(e, r), tt(e, Ee()), n;
      if (t === 6) rn(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Vf(l) && (t = Fl(e, r), t === 2 && (i = li(e), i !== 0 && (r = i, t = Cu(e, i))), t === 1)) throw n = Lr, gn(e, 0), rn(e, r), tt(e, Ee()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            kn(e, et, At);
            break;
          case 3:
            if (rn(e, r), (r & 130023424) === r && (t = Eu + 500 - Ee(), 10 < t)) {
              if (Hr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Xe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Li(kn.bind(null, e, et, At), t);
              break;
            }
            kn(e, et, At);
            break;
          case 4:
            if (rn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - yt(r);
              i = 1 << u, u = t[u], u > l && (l = u), r &= ~i;
            }
            if (r = l, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Uf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Li(kn.bind(null, e, et, At), r);
              break;
            }
            kn(e, et, At);
            break;
          case 5:
            kn(e, et, At);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return tt(e, Ee()), e.callbackNode === n ? ga.bind(null, e) : null;
  }
  function Cu(e, t) {
    var n = zr;
    return e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256), e = Fl(e, t), e !== 2 && (t = et, et = n, t !== null && Tu(t)), e;
  }
  function Tu(e) {
    et === null ? et = e : et.push.apply(et, e);
  }
  function Vf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!gt(i(), l)) return !1;
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
  function rn(e, t) {
    for (t &= ~Su, t &= ~Rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - yt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ka(e) {
    if ((re & 6) !== 0) throw Error(s(327));
    Kn();
    var t = Hr(e, 0);
    if ((t & 1) === 0) return tt(e, Ee()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = li(e);
      r !== 0 && (t = r, n = Cu(e, r));
    }
    if (n === 1) throw n = Lr, gn(e, 0), rn(e, t), tt(e, Ee()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, et, At), tt(e, Ee()), null;
  }
  function Nu(e, t) {
    var n = re;
    re |= 1;
    try {
      return e(t);
    } finally {
      re = n, re === 0 && (Qn = Ee() + 500, al && Zt());
    }
  }
  function yn(e) {
    tn !== null && tn.tag === 0 && (re & 6) === 0 && Kn();
    var t = re;
    re |= 1;
    var n = mt.transition, r = se;
    try {
      if (mt.transition = null, se = 1, e) return e();
    } finally {
      se = r, mt.transition = n, re = t, (re & 6) === 0 && Zt();
    }
  }
  function Mu() {
    st = Hn.current, me(Hn);
  }
  function gn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, vf(n)), Te !== null) for (n = Te.return; n !== null; ) {
      var r = n;
      switch (Ii(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ol();
          break;
        case 3:
          Wn(), me(Je), me(Be), Zi();
          break;
        case 5:
          Xi(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          me(ge);
          break;
        case 19:
          me(ge);
          break;
        case 10:
          $i(r.type._context);
          break;
        case 22:
        case 23:
          Mu();
      }
      n = n.return;
    }
    if (je = e, Te = e = ln(e.current, null), Ue = st = t, Me = 0, Lr = null, Su = Rl = vn = 0, et = zr = null, pn !== null) {
      for (t = 0; t < pn.length; t++) if (n = pn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var u = i.next;
          i.next = l, r.next = u;
        }
        n.pending = r;
      }
      pn = null;
    }
    return e;
  }
  function wa(e, t) {
    do {
      var n = Te;
      try {
        if (Bi(), kl.current = xl, wl) {
          for (var r = ke.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          wl = !1;
        }
        if (mn = 0, ze = Ne = ke = null, Cr = !1, Tr = 0, wu.current = null, n === null || n.return === null) {
          Me = 1, Lr = t, Te = null;
          break;
        }
        e: {
          var i = e, u = n.return, o = n, c = t;
          if (t = Ue, o.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
            var v = c, E = o, _ = E.tag;
            if ((E.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var S = E.alternate;
              S ? (E.updateQueue = S.updateQueue, E.memoizedState = S.memoizedState, E.lanes = S.lanes) : (E.updateQueue = null, E.memoizedState = null);
            }
            var R = Qs(u);
            if (R !== null) {
              R.flags &= -257, Ks(R, u, o, i, t), R.mode & 1 && Hs(i, v, t), t = R, c = v;
              var j = t.updateQueue;
              if (j === null) {
                var F = /* @__PURE__ */ new Set();
                F.add(c), t.updateQueue = F;
              } else j.add(c);
              break e;
            } else {
              if ((t & 1) === 0) {
                Hs(i, v, t), Pu();
                break e;
              }
              c = Error(s(426));
            }
          } else if (ye && o.mode & 1) {
            var xe = Qs(u);
            if (xe !== null) {
              (xe.flags & 65536) === 0 && (xe.flags |= 256), Ks(xe, u, o, i, t), Vi(Bn(c, o));
              break e;
            }
          }
          i = c = Bn(c, o), Me !== 4 && (Me = 2), zr === null ? zr = [i] : zr.push(i), i = u;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var h = Bs(i, c, t);
                ms(i, h);
                break e;
              case 1:
                o = c;
                var d = i.type, m = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (en === null || !en.has(m)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var M = $s(i, o, t);
                  ms(i, M);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        xa(n);
      } catch (I) {
        t = I, Te === n && n !== null && (Te = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Sa() {
    var e = Pl.current;
    return Pl.current = xl, e === null ? xl : e;
  }
  function Pu() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4), je === null || (vn & 268435455) === 0 && (Rl & 268435455) === 0 || rn(je, Ue);
  }
  function Fl(e, t) {
    var n = re;
    re |= 2;
    var r = Sa();
    (je !== e || Ue !== t) && (At = null, gn(e, t));
    do
      try {
        Wf();
        break;
      } catch (l) {
        wa(e, l);
      }
    while (!0);
    if (Bi(), re = n, Pl.current = r, Te !== null) throw Error(s(261));
    return je = null, Ue = 0, Me;
  }
  function Wf() {
    for (; Te !== null; ) Ea(Te);
  }
  function Bf() {
    for (; Te !== null && !dc(); ) Ea(Te);
  }
  function Ea(e) {
    var t = Ta(e.alternate, e, st);
    e.memoizedProps = e.pendingProps, t === null ? xa(e) : Te = t, wu.current = null;
  }
  function xa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Df(n, t, st), n !== null) {
          Te = n;
          return;
        }
      } else {
        if (n = Of(n, t), n !== null) {
          n.flags &= 32767, Te = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Me = 6, Te = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function kn(e, t, n) {
    var r = se, l = mt.transition;
    try {
      mt.transition = null, se = 1, $f(e, t, n, r);
    } finally {
      mt.transition = l, se = r;
    }
    return null;
  }
  function $f(e, t, n, r) {
    do
      Kn();
    while (tn !== null);
    if ((re & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Ec(e, i), e === je && (Te = je = null, Ue = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || zl || (zl = !0, Na(Vr, function() {
      return Kn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = mt.transition, mt.transition = null;
      var u = se;
      se = 1;
      var o = re;
      re |= 4, wu.current = null, If(e, n), pa(n, e), af(Pi), Yr = !!Mi, Pi = Mi = null, e.current = n, Af(n), pc(), re = o, se = u, mt.transition = i;
    } else e.current = n;
    if (zl && (zl = !1, tn = e, jl = l), i = e.pendingLanes, i === 0 && (en = null), vc(n.stateNode), tt(e, Ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ll) throw Ll = !1, e = xu, xu = null, e;
    return (jl & 1) !== 0 && e.tag !== 0 && Kn(), i = e.pendingLanes, (i & 1) !== 0 ? e === _u ? jr++ : (jr = 0, _u = e) : jr = 0, Zt(), null;
  }
  function Kn() {
    if (tn !== null) {
      var e = co(jl), t = mt.transition, n = se;
      try {
        if (mt.transition = null, se = 16 > e ? 16 : e, tn === null) var r = !1;
        else {
          if (e = tn, tn = null, jl = 0, (re & 6) !== 0) throw Error(s(331));
          var l = re;
          for (re |= 4, L = e.current; L !== null; ) {
            var i = L, u = i.child;
            if ((L.flags & 16) !== 0) {
              var o = i.deletions;
              if (o !== null) {
                for (var c = 0; c < o.length; c++) {
                  var v = o[c];
                  for (L = v; L !== null; ) {
                    var E = L;
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rr(8, E, i);
                    }
                    var _ = E.child;
                    if (_ !== null) _.return = E, L = _;
                    else for (; L !== null; ) {
                      E = L;
                      var S = E.sibling, R = E.return;
                      if (sa(E), E === v) {
                        L = null;
                        break;
                      }
                      if (S !== null) {
                        S.return = R, L = S;
                        break;
                      }
                      L = R;
                    }
                  }
                }
                var j = i.alternate;
                if (j !== null) {
                  var F = j.child;
                  if (F !== null) {
                    j.child = null;
                    do {
                      var xe = F.sibling;
                      F.sibling = null, F = xe;
                    } while (F !== null);
                  }
                }
                L = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null) u.return = i, L = u;
            else e: for (; L !== null; ) {
              if (i = L, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Rr(9, i, i.return);
              }
              var h = i.sibling;
              if (h !== null) {
                h.return = i.return, L = h;
                break e;
              }
              L = i.return;
            }
          }
          var d = e.current;
          for (L = d; L !== null; ) {
            u = L;
            var m = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && m !== null) m.return = u, L = m;
            else e: for (u = d; L !== null; ) {
              if (o = L, (o.flags & 2048) !== 0) try {
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ml(9, o);
                }
              } catch (I) {
                we(o, o.return, I);
              }
              if (o === u) {
                L = null;
                break e;
              }
              var M = o.sibling;
              if (M !== null) {
                M.return = o.return, L = M;
                break e;
              }
              L = o.return;
            }
          }
          if (re = l, Zt(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
            _t.onPostCommitFiberRoot(Wr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        se = n, mt.transition = t;
      }
    }
    return !1;
  }
  function _a(e, t, n) {
    t = Bn(n, t), t = Bs(e, t, 1), e = qt(e, t, 1), t = Xe(), e !== null && (rr(e, 1, t), tt(e, t));
  }
  function we(e, t, n) {
    if (e.tag === 3) _a(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        _a(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
          e = Bn(n, e), e = $s(t, e, 1), t = qt(t, e, 1), e = Xe(), t !== null && (rr(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Hf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, je === e && (Ue & n) === n && (Me === 4 || Me === 3 && (Ue & 130023424) === Ue && 500 > Ee() - Eu ? gn(e, 0) : Su |= n), tt(e, t);
  }
  function Ca(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = $r, $r <<= 1, ($r & 130023424) === 0 && ($r = 4194304)));
    var n = Xe();
    e = Ot(e, t), e !== null && (rr(e, t, n), tt(e, n));
  }
  function Qf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ca(e, n);
  }
  function Kf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Ca(e, n);
  }
  var Ta;
  Ta = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) be = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return be = !1, jf(e, t, n);
      be = (e.flags & 131072) !== 0;
    }
    else be = !1, ye && (t.flags & 1048576) !== 0 && is(t, fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Tl(e, t), e = t.pendingProps;
        var l = Dn(t, Be.current);
        Vn(t, n), l = bi(null, t, r, e, l, n);
        var i = eu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qe(r) ? (i = !0, sl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ki(t), l.updater = _l, t.stateNode = l, l._reactInternals = t, uu(t, r, e, n), t = cu(null, t, r, !0, i, n)) : (t.tag = 0, ye && i && Fi(t), Ye(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Tl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Xf(r), e = wt(r, e), l) {
            case 0:
              t = au(null, t, r, e, n);
              break e;
            case 1:
              t = qs(null, t, r, e, n);
              break e;
            case 11:
              t = Ys(null, t, r, e, n);
              break e;
            case 14:
              t = Xs(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), au(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), qs(e, t, r, l, n);
      case 3:
        e: {
          if (bs(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, hs(e, t), yl(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Bn(Error(s(423)), t), t = ea(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Bn(Error(s(424)), t), t = ea(e, t, r, n, l);
            break e;
          } else for (ot = Yt(t.stateNode.containerInfo.firstChild), ut = t, ye = !0, kt = null, n = ds(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (In(), r === l) {
              t = It(e, t, n);
              break e;
            }
            Ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ys(t), e === null && Ui(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = l.children, Ri(r, l) ? u = null : i !== null && Ri(r, i) && (t.flags |= 32), Js(e, t), Ye(e, t, u, n), t.child;
      case 6:
        return e === null && Ui(t), null;
      case 13:
        return ta(e, t, n);
      case 4:
        return Yi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : Ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), Ys(e, t, r, l, n);
      case 7:
        return Ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, u = l.value, de(hl, r._currentValue), r._currentValue = u, i !== null) if (gt(i.value, u)) {
            if (i.children === l.children && !Je.current) {
              t = It(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var o = i.dependencies;
            if (o !== null) {
              u = i.child;
              for (var c = o.firstContext; c !== null; ) {
                if (c.context === r) {
                  if (i.tag === 1) {
                    c = Ft(-1, n & -n), c.tag = 2;
                    var v = i.updateQueue;
                    if (v !== null) {
                      v = v.shared;
                      var E = v.pending;
                      E === null ? c.next = c : (c.next = E.next, E.next = c), v.pending = c;
                    }
                  }
                  i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), Hi(
                    i.return,
                    n,
                    t
                  ), o.lanes |= n;
                  break;
                }
                c = c.next;
              }
            } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (u = i.return, u === null) throw Error(s(341));
              u.lanes |= n, o = u.alternate, o !== null && (o.lanes |= n), Hi(u, n, t), u = i.sibling;
            } else u = i.child;
            if (u !== null) u.return = i;
            else for (u = i; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (i = u.sibling, i !== null) {
                i.return = u.return, u = i;
                break;
              }
              u = u.return;
            }
            i = u;
          }
          Ye(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Vn(t, n), l = pt(l), r = r(l), t.flags |= 1, Ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = wt(r, t.pendingProps), l = wt(r.type, l), Xs(e, t, r, l, n);
      case 15:
        return Gs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), Tl(e, t), t.tag = 1, qe(r) ? (e = !0, sl(t)) : e = !1, Vn(t, n), Vs(t, r, l), uu(t, r, l, n), cu(null, t, r, !0, e, n);
      case 19:
        return ra(e, t, n);
      case 22:
        return Zs(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Na(e, t) {
    return io(e, t);
  }
  function Yf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function vt(e, t, n, r) {
    return new Yf(e, t, n, r);
  }
  function Ru(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Xf(e) {
    if (typeof e == "function") return Ru(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ge) return 11;
      if (e === ct) return 14;
    }
    return 2;
  }
  function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Il(e, t, n, r, l, i) {
    var u = 2;
    if (r = e, typeof e == "function") Ru(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case pe:
        return wn(n.children, l, i, t);
      case Re:
        u = 8, l |= 8;
        break;
      case at:
        return e = vt(12, n, t, l | 2), e.elementType = at, e.lanes = i, e;
      case Ke:
        return e = vt(13, n, t, l), e.elementType = Ke, e.lanes = i, e;
      case lt:
        return e = vt(19, n, t, l), e.elementType = lt, e.lanes = i, e;
      case ve:
        return Al(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case rt:
            u = 10;
            break e;
          case Rt:
            u = 9;
            break e;
          case Ge:
            u = 11;
            break e;
          case ct:
            u = 14;
            break e;
          case Fe:
            u = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = vt(u, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function wn(e, t, n, r) {
    return e = vt(7, e, r, t), e.lanes = n, e;
  }
  function Al(e, t, n, r) {
    return e = vt(22, e, r, t), e.elementType = ve, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Lu(e, t, n) {
    return e = vt(6, e, null, t), e.lanes = n, e;
  }
  function zu(e, t, n) {
    return t = vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Gf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ii(0), this.expirationTimes = ii(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ii(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ju(e, t, n, r, l, i, u, o, c) {
    return e = new Gf(e, t, n, o, c), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = vt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ki(i), e;
  }
  function Zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ma(e) {
    if (!e) return Gt;
    e = e._reactInternals;
    e: {
      if (sn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (qe(n)) return ns(e, n, t);
    }
    return t;
  }
  function Pa(e, t, n, r, l, i, u, o, c) {
    return e = ju(n, r, !0, e, l, i, u, o, c), e.context = Ma(null), n = e.current, r = Xe(), l = nn(n), i = Ft(r, l), i.callback = t ?? null, qt(n, i, l), e.current.lanes = l, rr(e, l, r), tt(e, r), e;
  }
  function Ul(e, t, n, r) {
    var l = t.current, i = Xe(), u = nn(l);
    return n = Ma(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ft(i, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(l, t, u), e !== null && (xt(e, l, u, i), vl(e, l, u)), u;
  }
  function Vl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ra(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Du(e, t) {
    Ra(e, t), (e = e.alternate) && Ra(e, t);
  }
  function Jf() {
    return null;
  }
  var La = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ou(e) {
    this._internalRoot = e;
  }
  Wl.prototype.render = Ou.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ul(e, t, null, null);
  }, Wl.prototype.unmount = Ou.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      yn(function() {
        Ul(null, e, null, null);
      }), t[Lt] = null;
    }
  };
  function Wl(e) {
    this._internalRoot = e;
  }
  Wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ho();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++) ;
      Ht.splice(n, 0, e), n === 0 && yo(e);
    }
  };
  function Fu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Bl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function za() {
  }
  function qf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var v = Vl(u);
          i.call(v);
        };
      }
      var u = Pa(t, r, e, 0, null, !1, !1, "", za);
      return e._reactRootContainer = u, e[Lt] = u.current, yr(e.nodeType === 8 ? e.parentNode : e), yn(), u;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var v = Vl(c);
        o.call(v);
      };
    }
    var c = ju(e, 0, !1, null, null, !1, !1, "", za);
    return e._reactRootContainer = c, e[Lt] = c.current, yr(e.nodeType === 8 ? e.parentNode : e), yn(function() {
      Ul(t, c, n, r);
    }), c;
  }
  function $l(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var o = l;
        l = function() {
          var c = Vl(u);
          o.call(c);
        };
      }
      Ul(t, u, e, l);
    } else u = qf(n, t, e, l, r);
    return Vl(u);
  }
  fo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = nr(t.pendingLanes);
          n !== 0 && (ui(t, n | 1), tt(t, Ee()), (re & 6) === 0 && (Qn = Ee() + 500, Zt()));
        }
        break;
      case 13:
        yn(function() {
          var r = Ot(e, 1);
          if (r !== null) {
            var l = Xe();
            xt(r, e, 1, l);
          }
        }), Du(e, 1);
    }
  }, oi = function(e) {
    if (e.tag === 13) {
      var t = Ot(e, 134217728);
      if (t !== null) {
        var n = Xe();
        xt(t, e, 134217728, n);
      }
      Du(e, 134217728);
    }
  }, po = function(e) {
    if (e.tag === 13) {
      var t = nn(e), n = Ot(e, t);
      if (n !== null) {
        var r = Xe();
        xt(n, e, t, r);
      }
      Du(e, t);
    }
  }, ho = function() {
    return se;
  }, mo = function(e, t) {
    var n = se;
    try {
      return se = e, t();
    } finally {
      se = n;
    }
  }, bl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Gn(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = ul(r);
              if (!l) throw Error(s(90));
              En(r), Gn(r, l);
            }
          }
        }
        break;
      case "textarea":
        We(e, n);
        break;
      case "select":
        t = n.value, t != null && y(e, !!n.multiple, t, !1);
    }
  }, qu = Nu, bu = yn;
  var bf = { usingClientEntryPoint: !1, Events: [wr, zn, ul, Zu, Ju, Nu] }, Dr = { findFiberByHostInstance: an, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ed = { bundleType: Dr.bundleType, version: Dr.version, rendererPackageName: Dr.rendererPackageName, rendererConfig: Dr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _e.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ro(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Dr.findFiberByHostInstance || Jf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hl.isDisabled && Hl.supportsFiber) try {
      Wr = Hl.inject(ed), _t = Hl;
    } catch {
    }
  }
  return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bf, nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fu(t)) throw Error(s(200));
    return Zf(e, t, null, n);
  }, nt.createRoot = function(e, t) {
    if (!Fu(e)) throw Error(s(299));
    var n = !1, r = "", l = La;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ju(e, 1, !1, null, null, n, !1, r, l), e[Lt] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new Ou(t);
  }, nt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = ro(t), e = e === null ? null : e.stateNode, e;
  }, nt.flushSync = function(e) {
    return yn(e);
  }, nt.hydrate = function(e, t, n) {
    if (!Bl(t)) throw Error(s(200));
    return $l(null, e, t, !0, n);
  }, nt.hydrateRoot = function(e, t, n) {
    if (!Fu(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", u = La;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = Pa(t, null, e, 1, n ?? null, l, !1, i, u), e[Lt] = t.current, yr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Wl(t);
  }, nt.render = function(e, t, n) {
    if (!Bl(t)) throw Error(s(200));
    return $l(null, e, t, !1, n);
  }, nt.unmountComponentAtNode = function(e) {
    if (!Bl(e)) throw Error(s(40));
    return e._reactRootContainer ? (yn(function() {
      $l(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Lt] = null;
      });
    }), !0) : !1;
  }, nt.unstable_batchedUpdates = Nu, nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Bl(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return $l(e, t, n, !1, r);
  }, nt.version = "18.3.1-next-f1338f8080-20240426", nt;
}
var Va;
function sd() {
  if (Va) return Uu.exports;
  Va = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (a) {
        console.error(a);
      }
  }
  return f(), Uu.exports = od(), Uu.exports;
}
var Wa;
function ad() {
  if (Wa) return Ql;
  Wa = 1;
  var f = sd();
  return Ql.createRoot = f.createRoot, Ql.hydrateRoot = f.hydrateRoot, Ql;
}
var cd = ad(), ae = Ku();
const fd = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ba = 100;
function dd(f) {
  if (f === null || f.trim() === "") return Ba;
  const a = Number(f);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Ba;
}
function $a(f, a, s = !0) {
  return s ? fd[f] * dd(String(a)) / 100 : 0;
}
function pd(f = () => new Audio()) {
  try {
    const a = f();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const hd = 0.12, md = 2e3, vd = 3;
function yd(f, a = !1) {
  return a ? !0 : f.atLoopBoundary || f.drift <= hd || f.seeking || f.readyState < vd ? !1 : f.msSinceLastFix >= md;
}
const gd = 1.5, kd = 0.4, wd = 0.5;
let $u = null, Sd = null;
function Ed(f) {
  return $u !== null ? $u : (Sd ??= pd()) ? 0 : kd;
}
class xd {
  constructor(a = Ed()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, s, g = !1, k = performance.now()) {
    if (s.readyState < 1 || a.readyState < 1 || !g && (s.paused || a.paused)) return !1;
    const C = s.currentTime - a.currentTime, N = Math.abs(C), x = a.loop && Number.isFinite(a.duration) && Math.abs(N - a.duration) < 0.35, z = this.lastFix.get(s);
    if (!yd({
      drift: N,
      atLoopBoundary: x,
      seeking: s.seeking,
      readyState: s.readyState,
      msSinceLastFix: z === void 0 ? 1 / 0 : k - z
    }, g)) return !1;
    const D = !a.paused;
    !g && D && z !== void 0 && (this.latency = Math.min(gd, Math.max(0, this.latency - wd * C)), $u = this.latency);
    let V = a.currentTime + (D ? this.latency : 0);
    Number.isFinite(s.duration) && (V = Math.min(V, Math.max(0, s.duration - 0.05)));
    try {
      s.currentTime = V;
    } catch {
      return !1;
    }
    return D ? this.lastFix.set(s, k) : this.lastFix.delete(s), !0;
  }
}
function _d(f = globalThis.navigator) {
  const a = f?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const Cd = () => {
  const f = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!f) throw new Error("Web Audio API puuttuu");
  return new f();
}, Td = 250, Nd = 0.5, Ha = 2e3, Md = 50, Pd = 8;
class Rd {
  samples = [];
  sample(a, s) {
    if (!Number.isFinite(a) || !Number.isFinite(s)) return;
    const g = this.samples.at(-1);
    g && s - g.wallMs < Md && this.samples.pop(), this.samples.push({ contextTime: a, wallMs: s }), this.samples.length > Pd && this.samples.shift();
  }
  reset() {
    this.samples = [];
  }
  check(a, s) {
    if (!Number.isFinite(a) || !Number.isFinite(s)) return "unknown";
    for (let g = this.samples.length - 1; g >= 0; g--) {
      const k = this.samples[g], C = s - k.wallMs;
      if (C < Td) continue;
      return (a - k.contextTime) * 1e3 < C * Nd ? "stalled" : "advancing";
    }
    return "unknown";
  }
}
function Qa(f, a, s) {
  let g;
  const k = new Promise((C, N) => {
    g = setTimeout(() => N(new Error(`${s}: aikakatkaisu ${a} ms`)), a);
  });
  return Promise.race([f, k]).finally(() => clearTimeout(g));
}
function Ld(f) {
  const a = f?.name, s = f?.message;
  return typeof a == "string" && a !== "Error" ? typeof s == "string" && s ? `${a}: ${s}` : a : typeof s == "string" ? s : String(f);
}
class zd {
  constructor(a = Cd, s = globalThis.navigator, g = () => performance.now()) {
    this.create = a, this.nav = s, this.now = g;
  }
  create;
  nav;
  now;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  clock = new Rd();
  recovery = null;
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
        _d(this.nav);
      } catch (a) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(a);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap(), this.clock.reset()), this.context.state !== "running" && !this.recovery && this.context.resume().catch((a) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(a);
      }), !0;
    } catch (a) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(a), !1;
    }
  }
  /** Kontekstin kello, kun konteksti on 'running'. Muissa tiloissa kellon pysähtyminen on odotettua. */
  runningTime() {
    const a = this.context;
    return !a || a.state !== "running" ? null : typeof a.currentTime == "number" ? a.currentTime : null;
  }
  /** Tallentaa kellonäytteen (tauko, näkyvyyden muutos, toiston alku). Muu kuin 'running' nollaa näytteet. */
  observe() {
    const a = this.runningTime();
    a === null ? this.clock.reset() : this.clock.sample(a, this.now());
  }
  /**
   * 'stalled', kun tila on 'running', mutta kello on edennyt alle MIN_CLOCK_RATE seinäkellosta
   * vähintään CLOCK_WINDOW_MS pituisella välillä. 'unknown', jos vertailukohtaa ei vielä ole.
   */
  clockState() {
    const a = this.runningTime();
    return a === null ? "unknown" : this.clock.check(a, this.now());
  }
  get recovering() {
    return this.recovery !== null;
  }
  /**
   * Käynnistää pysähtyneen kontekstin uudelleen: suspend() ja sen jälkeen resume(). Kutsutaan vain
   * käyttäjän Soita-painalluksesta. Samanaikaiset kutsut saavat saman lupauksen, joten palautuksia on
   * kerrallaan yksi. Palauttaa true, kun konteksti on taas 'running'. Virhe ei heitä vaan palauttaa false.
   */
  recover() {
    if (this.recovery) return this.recovery;
    const a = this.context;
    if (!a) return Promise.resolve(!1);
    const g = (async () => {
      try {
        if (typeof a.suspend != "function" || typeof a.resume != "function")
          throw new Error("suspend() tai resume() puuttuu");
        if (await Qa(a.suspend(), Ha, "suspend()"), await Qa(a.resume(), Ha, "resume()"), a.state !== "running") throw new Error(`tila ${a.state} palautuksen jälkeen`);
        if (a !== this.context) throw new Error("konteksti suljettiin palautuksen aikana");
        return this.clock.reset(), this.observe(), !0;
      } catch (k) {
        return this.lastError = "Web Audion palautus epäonnistui: " + Ld(k), !1;
      }
    })().finally(() => {
      this.recovery === g && (this.recovery = null);
    });
    return this.recovery = g, g;
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(a) {
    if (this.gains.has(a)) return !0;
    if (!this.context) return !1;
    try {
      const s = this.context.createMediaElementSource(a), g = this.context.createGain();
      return s.connect(g), g.connect(this.context.destination), this.gains.set(a, g), !0;
    } catch (s) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(s), !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, s) {
    const g = this.gains.get(a);
    g && (g.gain.value = s);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(a) {
    const s = a ? this.gains.get(a) : void 0;
    return s ? s.gain.value : null;
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), this.clock.reset(), a?.close().catch(() => {
    });
  }
}
function jd(f) {
  const a = new DataView(f), s = (C) => String.fromCharCode(
    a.getUint8(C),
    a.getUint8(C + 1),
    a.getUint8(C + 2),
    a.getUint8(C + 3)
  );
  if (a.byteLength < 12 || s(0) !== "RIFF" || s(8) !== "WAVE") throw new Error("Tiedosto ei ole WAV");
  let g = 12, k = null;
  for (; g + 8 <= a.byteLength; ) {
    const C = s(g), N = a.getUint32(g + 4, !0), x = g + 8;
    if (C === "fmt ") {
      let z = a.getUint16(x, !0);
      z === 65534 && N >= 26 && (z = a.getUint16(x + 24, !0)), k = {
        format: z,
        channels: a.getUint16(x + 2, !0),
        sampleRate: a.getUint32(x + 4, !0),
        blockAlign: a.getUint16(x + 12, !0),
        bitsPerSample: a.getUint16(x + 14, !0)
      };
    } else if (C === "data") {
      if (!k) throw new Error("WAV: data-lohko ennen fmt-lohkoa");
      if (!(k.format === 1 && [16, 24, 32].includes(k.bitsPerSample) || k.format === 3 && k.bitsPerSample === 32))
        throw new Error(`WAV: muotoa ${k.format}/${k.bitsPerSample} bittiä ei tueta`);
      return { ...k, dataOffset: x, dataBytes: N, frames: Math.floor(N / k.blockAlign) };
    }
    g = x + N + N % 2;
  }
  throw new Error("WAV: data-lohkoa ei löytynyt otsakkeesta");
}
function Dd(f, a) {
  const s = Math.floor(f.byteLength / a.blockAlign), g = new DataView(f.buffer, f.byteOffset, f.byteLength), k = a.bitsPerSample / 8, C = a.format === 3 ? (x) => g.getFloat32(x, !0) : k === 2 ? (x) => g.getInt16(x, !0) / 32768 : k === 3 ? (x) => (g.getUint8(x) | g.getUint8(x + 1) << 8 | g.getInt8(x + 2) << 16) / 8388608 : (x) => g.getInt32(x, !0) / 2147483648, N = new Float32Array(s);
  for (let x = 0; x < s; x++) {
    let z = 0;
    const D = x * a.blockAlign;
    for (let V = 0; V < a.channels; V++) z += C(D + V * k);
    N[x] = z / a.channels;
  }
  return N;
}
function Od(f, a, s) {
  if (a === s) return f;
  const g = Math.floor(f.length * s / a), k = new Float32Array(g), C = a / s;
  for (let N = 0; N < g; N++) {
    const x = N * C, z = Math.floor(x), D = x - z, V = f[z] ?? 0, H = f[z + 1] ?? V;
    k[N] = V + (H - V) * D;
  }
  return k;
}
function Ka(f, a) {
  if (a <= 1) return f;
  const s = Math.floor(f.length / a), g = new Float32Array(s);
  for (let k = 0; k < s; k++) {
    let C = 0;
    const N = k * a;
    for (let x = 0; x < a; x++) C += f[N + x];
    g[k] = C / a;
  }
  return g;
}
function Fd(f) {
  let a = 0;
  for (const s of f) a += s * s;
  return f.length ? Math.sqrt(a / f.length) : 0;
}
function Ya(f, a, s, g) {
  const k = Math.max(0, s), C = Math.min(g, f.length - a.length);
  if (C < k) return new Float32Array(0);
  const N = new Float64Array(f.length + 1);
  for (let D = 0; D < f.length; D++) N[D + 1] = N[D] + f[D] * f[D];
  let x = 0;
  for (const D of a) x += D * D;
  const z = new Float32Array(C - k + 1);
  for (let D = k; D <= C; D++) {
    let V = 0;
    for (let Y = 0; Y < a.length; Y++) V += a[Y] * f[Y + D];
    const H = Math.sqrt(x * (N[D + a.length] - N[D]));
    z[D - k] = H > 0 ? V / H : 0;
  }
  return z;
}
function Xa(f, a) {
  if (a <= 1) return f;
  const s = new Float32Array(f.length);
  let g = 0;
  for (let k = 0; k < f.length; k++)
    g += f[k], k >= a && (g -= f[k - a]), s[k] = g / Math.min(a, k + 1);
  return s;
}
function Id(f, a, s) {
  let g = a;
  for (; g > 0 && f[g - 1] <= f[g]; ) g--;
  let k = a;
  for (; k < f.length - 1 && f[k + 1] <= f[k]; ) k++;
  let C = 0;
  for (let N = 0; N < f.length; N++) {
    if (N >= g && N <= k || Math.abs(N - a) <= s) continue;
    (N === 0 || f[N] >= f[N - 1]) && (N === f.length - 1 || f[N] >= f[N + 1]) && f[N] > C && (C = f[N]);
  }
  return C;
}
function Ad(f, a, s, g = 16) {
  if (a.length === 0 || f.length < a.length) throw new Error("Referenssi on lyhyempi kuin näyte");
  const k = Ka(f, g), C = Ka(a, g), N = Ya(k, C, 0, k.length - C.length);
  let x = 0;
  for (let U = 1; U < N.length; U++) N[U] > N[x] && (x = U);
  const z = Id(N, x, Math.max(1, Math.round(0.02 * s / g))), D = x * g, V = Math.max(0, D - 2 * g), H = Math.min(f.length - a.length, D + 2 * g), Y = Math.max(1, Math.round(s / 12e3)), ne = Ya(Xa(f, Y), Xa(a, Y), V, H);
  let Z = 0;
  for (let U = 1; U < ne.length; U++) ne[U] > ne[Z] && (Z = U);
  let Q = 0;
  if (Z > 0 && Z < ne.length - 1) {
    const [U, Se, Pe] = [ne[Z - 1], ne[Z], ne[Z + 1]], ce = U - 2 * Se + Pe;
    ce < 0 && (Q = Math.max(-0.5, Math.min(0.5, 0.5 * (U - Pe) / ce)));
  }
  return { lag: V + Z + Q, score: ne[Z], runnerUp: z };
}
function Ud(f, a = 0.6, s = 0.1) {
  return f.score >= a && f.score - f.runnerUp >= s;
}
const Hu = 32768, Kl = 1.5, lc = /* @__PURE__ */ new WeakMap();
function Vd() {
  const f = globalThis.AudioContext?.prototype;
  if (!f || f.__kaksiraita) return;
  const a = f.createMediaElementSource;
  f.createMediaElementSource = function(s) {
    const g = a.call(this, s), k = this.createAnalyser();
    return k.fftSize = Hu, g.connect(k), lc.set(s, { analyser: k, context: this }), g;
  }, f.__kaksiraita = !0;
}
function Fr(f) {
  return f ? lc.get(f) ?? null : null;
}
function Ga(f) {
  let a = null, s = null;
  async function g(C, N) {
    if (s) return new Uint8Array(await s, C, N - C + 1);
    const x = await fetch(f, { headers: { Range: `bytes=${C}-${N}` } });
    if (x.status === 206) return new Uint8Array(await x.arrayBuffer());
    if (!x.ok) throw new Error(`Referenssi ${f}: HTTP ${x.status}`);
    return s = x.arrayBuffer(), new Uint8Array(await s, C, N - C + 1);
  }
  const k = () => a ??= g(0, 4095).then((C) => jd(C.slice().buffer));
  return {
    async durationSeconds() {
      const C = await k();
      return C.frames / C.sampleRate;
    },
    async window(C, N) {
      const x = await k(), z = Math.max(0, Math.floor(C * x.sampleRate)), D = Math.min(x.frames, Math.ceil(N * x.sampleRate));
      if (D <= z) throw new Error("Referenssi-ikkuna on tiedoston ulkopuolella");
      const V = await g(x.dataOffset + z * x.blockAlign, x.dataOffset + D * x.blockAlign - 1);
      return { samples: Dd(V, x), sampleRate: x.sampleRate, startSeconds: z / x.sampleRate };
    }
  };
}
function Za(f, a) {
  return {
    async durationSeconds() {
      return f.length / a;
    },
    async window(s, g) {
      const k = Math.max(0, Math.floor(s * a)), C = Math.min(f.length, Math.ceil(g * a));
      return { samples: f.slice(k, C), sampleRate: a, startSeconds: k / a };
    }
  };
}
async function Wd(f, a) {
  const s = a.map((Z) => ({ input: Z, tap: Fr(Z.element) }));
  if (s.some((Z) => !Z.tap)) throw new Error("Raitaa ei ole vielä kytketty Web Audioon");
  const g = s[0].tap.context;
  let k = 0, C = [], N = [], x = 0;
  for (; ; ) {
    k++;
    const Z = g.currentTime;
    if (C = s.map(({ tap: Q }) => {
      const U = new Float32Array(Hu);
      return Q.analyser.getFloatTimeDomainData(U), U;
    }), N = s.map(({ input: Q }) => Q.element.currentTime), x = g.currentTime, x === Z || k >= 8) break;
    await new Promise((Q) => setTimeout(Q, 0));
  }
  const z = g.sampleRate, D = Hu / z, V = [];
  for (let Z = 0; Z < s.length; Z++) {
    const { input: Q } = s[Z], U = C[Z], Se = Fd(U), Pe = { name: Q.name, mediaTime: N[Z], probeRms: Se };
    try {
      const ce = N[Z] + Q.referenceOffsetSeconds, _e = await Q.reference.durationSeconds();
      if (ce - D - Kl < 0 || ce + Kl > _e)
        throw new Error("Kohta on referenssin ulkopuolella");
      const Oe = await Q.reference.window(ce - D - Kl, ce + Kl), Ce = Od(Oe.samples, Oe.sampleRate, z), pe = Ad(Ce, U, z), Re = Oe.startSeconds + (pe.lag + U.length) / z, at = Ud(pe) && Se > 1e-4;
      V.push({
        ...Pe,
        renderedTime: Re,
        score: pe.score,
        runnerUp: pe.runnerUp,
        reliable: at,
        mediaMinusRenderedMs: (ce - Re) * 1e3
      });
    } catch (ce) {
      V.push({ ...Pe, renderedTime: null, score: null, runnerUp: null, reliable: !1, mediaMinusRenderedMs: null, error: String(ce) });
    }
  }
  const [H, Y] = V, ne = H.reliable && Y.reliable && H.renderedTime !== null && Y.renderedTime !== null;
  return {
    phase: f,
    ms: Math.round(performance.now()),
    contextTime: x,
    sampleRate: z,
    attempts: k,
    tracks: V,
    mediaDiffMs: (Y.mediaTime - H.mediaTime) * 1e3,
    renderedDiffMs: ne ? (Y.renderedTime - H.renderedTime) * 1e3 : null,
    reliable: ne
  };
}
class Bd {
  events = [];
  samples = [];
  measurements = [];
  limit = 4e3;
  record(a, s = {}) {
    this.events.push({ ms: Math.round(performance.now()), event: a, ...s }), this.events.length > this.limit && this.events.shift();
  }
  sample(a) {
    this.samples.push({ ms: Math.round(performance.now()), event: "sample", ...a }), this.samples.length > this.limit && this.samples.shift();
  }
}
function $d(f) {
  const a = /* @__PURE__ */ new Map(), s = [];
  for (const g of f) {
    const k = String(g.track ?? "");
    if (g.event === "seek-write" && a.set(k, g), g.event === "seeked" && a.has(k)) {
      const C = a.get(k);
      s.push({ track: k, forced: !!C.forced, ms: g.ms - C.ms, from: Number(C.from), to: Number(C.to) }), a.delete(k);
    }
  }
  return s;
}
function Qu(f, a) {
  let s = f * 2654435761 + a * 2246822507 | 0;
  return s = Math.imul(s ^ s >>> 16, 2146121005), s = Math.imul(s ^ s >>> 15, 2221713035), s ^= s >>> 16, (s >>> 0) / 4294967296 * 2 - 1;
}
function Hd(f, a) {
  const s = [];
  let g = Math.round(0.25 * a);
  for (let k = 0; g < f; k++)
    s.push(g), g += Math.round((0.35 + 0.4 * (Qu(k, 101) * 0.5 + 0.5)) * a);
  return s;
}
function Ja(f, a, s, g, k, C) {
  const N = new Float32Array(f), x = Math.round(0.1 * a), z = Math.round(0.03 * a), D = Hd(f, a);
  let V = 0, H = 0;
  for (let Y = 0; Y < f; Y++) {
    const ne = Y - s;
    if (ne < 0) {
      N[Y] = 0;
      continue;
    }
    const Z = 0.03 + 0.12 * (Qu(Math.floor(ne / x), g + 7) * 0.5 + 0.5);
    H += 0.5 * (Qu(ne, g) - H);
    let Q = Z * H;
    for (; V < D.length && D[V] + z <= ne; ) V++;
    const U = V < D.length ? ne - D[V] : -1;
    if (U >= 0 && U < z) {
      const Se = 0.5 - 0.5 * Math.cos(2 * Math.PI * U / z);
      Q += C * Se * Math.sin(2 * Math.PI * k * U / a);
    }
    N[Y] = Q;
  }
  return N;
}
function qa(f = 60, a = 48e3, s = 0) {
  const g = Math.round(f * a), k = Math.round(s * a / 1e3);
  return {
    sampleRate: a,
    shiftSamples: k,
    tausta: Ja(g, a, 0, 11, 300, 0.22),
    kitara: Ja(g, a, k, 23, 1500, 0.16)
  };
}
function Qd(f, a) {
  const s = new ArrayBuffer(44 + f.length * 2), g = new DataView(s), k = (C, N) => {
    for (let x = 0; x < N.length; x++) g.setUint8(C + x, N.charCodeAt(x));
  };
  k(0, "RIFF"), g.setUint32(4, 36 + f.length * 2, !0), k(8, "WAVE"), k(12, "fmt "), g.setUint32(16, 16, !0), g.setUint16(20, 1, !0), g.setUint16(22, 1, !0), g.setUint32(24, a, !0), g.setUint32(28, a * 2, !0), g.setUint16(32, 2, !0), g.setUint16(34, 16, !0), k(36, "data"), g.setUint32(40, f.length * 2, !0);
  for (let C = 0; C < f.length; C++) {
    const N = Math.max(-1, Math.min(1, f[C]));
    g.setInt16(44 + C * 2, Math.round(N * 32767), !0);
  }
  return s;
}
const Yl = "assets/audio/kaksiraitatesti/", Bu = {
  mp3: { tausta: Yl + "yksi-sointu-akustinen-tausta.mp3", kitara: Yl + "yksi-sointu-akustinen-kitara.mp3" },
  wav: { tausta: Yl + "yksi-sointu-akustinen-tausta-0-120s.wav", kitara: Yl + "yksi-sointu-akustinen-kitara-0-120s.wav" }
}, ba = 1e-3, ec = 3e3, tc = 5e3;
function Kd() {
  const f = new URLSearchParams(location.search), a = f.get("lahde"), s = a === "wav" || a === "synteettinen" ? a : "mp3", g = Number(f.get("siirto") ?? "0");
  return { source: s, sync: f.get("tahdistin") !== "pois", offsetMs: s === "synteettinen" && Number.isFinite(g) ? g : 0 };
}
function Xl(f) {
  if (!Number.isFinite(f) || f < 0) return "0:00";
  const a = Math.floor(f);
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
}
const Pt = (f, a = 1) => f == null || !Number.isFinite(f) ? "–" : f.toFixed(a);
function nc(f) {
  if (!f.length) return null;
  const a = [...f].sort((g, k) => g - k), s = Math.floor(a.length / 2);
  return a.length % 2 ? a[s] : (a[s - 1] + a[s]) / 2;
}
function Yd() {
  const f = ae.useMemo(Kd, []), a = ae.useMemo(() => f.source === "synteettinen" ? qa(60, 48e3, f.offsetMs) : null, [f]), s = ae.useMemo(() => {
    if (!a) return Bu[f.source];
    const y = (O) => URL.createObjectURL(new Blob([Qd(O, a.sampleRate)], { type: "audio/wav" }));
    return { tausta: y(a.tausta), kitara: y(a.kitara) };
  }, [f, a]), g = ae.useMemo(() => a && f.offsetMs !== 0 ? qa(60, a.sampleRate, 0) : a, [f, a]), k = ae.useMemo(() => g ? { tausta: Za(g.tausta, g.sampleRate), kitara: Za(g.kitara, g.sampleRate) } : { tausta: Ga(Bu.wav.tausta), kitara: Ga(Bu.wav.kitara) }, [g]), C = ae.useRef(null), N = ae.useRef(null), x = ae.useRef(0), z = ae.useRef(new xd()), D = ae.useRef(null), V = ae.useRef(null), H = ae.useRef(new Bd()), Y = ae.useRef(!1), ne = ae.useRef(/* @__PURE__ */ new WeakMap()), Z = ae.useRef(!1), Q = ae.useRef([]), [U, Se] = ae.useState(!1), [Pe, ce] = ae.useState(0), [_e, Oe] = ae.useState(0), [Ce, pe] = ae.useState(""), [Re, at] = ae.useState(""), [rt, Rt] = ae.useState([]), [Ge, Ke] = ae.useState(null), [lt, ct] = ae.useState([]), [Fe, ve] = ae.useState(""), T = (y, O = {}) => H.current.record(y, O);
  function $(y) {
    let O = ne.current.get(y);
    return O || (O = {
      get currentTime() {
        return y.currentTime;
      },
      set currentTime(G) {
        T("seek-write", { track: "kitara", from: y.currentTime, to: G, forced: Y.current, readyState: y.readyState, paused: y.paused }), y.currentTime = G;
      },
      get paused() {
        return y.paused;
      },
      get seeking() {
        return y.seeking;
      },
      get readyState() {
        return y.readyState;
      },
      get loop() {
        return y.loop;
      },
      get duration() {
        return y.duration;
      }
    }, ne.current.set(y, O)), O;
  }
  function P(y = !1) {
    const O = C.current, G = N.current;
    !O || !G || !f.sync || (Y.current = y, z.current.align(O, $(G), y));
  }
  function p(y, O) {
    T("seek-write", { track: "tausta", from: y.currentTime, to: O, forced: "käyttäjä", readyState: y.readyState, paused: y.paused });
    try {
      y.currentTime = O;
    } catch {
    }
  }
  function w() {
    const y = V.current;
    y && (C.current && y.setLevel(C.current, $a("backing", 100)), N.current && y.setLevel(N.current, $a("guitar", 100)));
  }
  function X() {
    for (const y of Q.current) clearTimeout(y);
    Q.current = [];
  }
  function J(y) {
    x.current++, X(), T("pause-call", { cause: y }), V.current?.observe(), C.current?.pause(), N.current?.pause(), Se(!1);
  }
  function te(y) {
    const O = C.current;
    if (!O || !Number.isFinite(y)) return;
    const G = Math.max(0, Math.min(y, Number.isFinite(O.duration) ? O.duration : y));
    T("control", { control: "kelaus", to: G }), D.current = G, ce(G), p(O, G), O.paused || le("kelaus", x.current);
  }
  function b(y) {
    const O = D.current;
    if (O === null || y !== C.current || y.seeking) return;
    const G = Number.isFinite(y.duration) ? Math.min(O, y.duration) : O;
    if (G !== O && (D.current = G, ce(G)), Math.abs(y.currentTime - G) < ba) return;
    const We = y.seekable;
    for (let ee = 0; ee < We.length; ee++)
      if (We.start(ee) <= G && G <= We.end(ee)) {
        p(y, G);
        return;
      }
  }
  async function ue(y, O) {
    if (Z.current || O !== x.current) return;
    const G = C.current, We = N.current;
    if (!(!G || !We || !Fr(G) || !Fr(We))) {
      Z.current = !0;
      try {
        const ee = [
          { name: "tausta", element: G, reference: k.tausta, referenceOffsetSeconds: 0 },
          { name: "kitara", element: We, reference: k.kitara, referenceOffsetSeconds: 0 }
        ], oe = await Wd(y, ee);
        H.current.measurements.push(oe), T("mittaus", { phase: y, mediaDiffMs: oe.mediaDiffMs, renderedDiffMs: oe.renderedDiffMs, reliable: oe.reliable }), Rt((Le) => [...Le, oe]);
      } catch (ee) {
        T("mittausvirhe", { phase: y, reason: String(ee) });
      } finally {
        Z.current = !1;
      }
    }
  }
  function le(y, O) {
    X(), Q.current.push(window.setTimeout(() => {
      ue(y, O);
    }, ec));
    const G = () => {
      O === x.current && (ue("jatkuva", O), Q.current.push(window.setTimeout(G, tc)));
    };
    Q.current.push(window.setTimeout(G, ec + tc));
  }
  function fe(y) {
    if (y !== C.current) return;
    const O = D.current;
    if (O === null)
      ce(y.currentTime);
    else if (y.readyState >= 1 && !y.seeking && Math.abs(y.currentTime - O) < ba) {
      D.current = null, T("kelaus-valmis", { time: y.currentTime }), P(!0);
      return;
    }
    y.paused || P();
  }
  function Ve(y, O) {
    return T("play-call", { track: O, time: y.currentTime, readyState: y.readyState }), y.play().then(
      () => {
        T("play-result", { track: O, result: "fulfilled", time: y.currentTime });
      },
      (G) => {
        throw T("play-result", { track: O, result: "rejected", reason: G?.name ?? String(G) }), G;
      }
    );
  }
  async function Sn() {
    const y = C.current, O = N.current;
    if (!y || !O) return;
    if (T("control", { control: U ? "tauko" : "soita" }), U) {
      J("painallus");
      return;
    }
    pe("");
    const G = y.currentTime > 0.05, We = D.current ?? y.currentTime;
    Number.isFinite(y.duration) && We >= y.duration - 0.05 && te(0), b(y);
    const ee = V.current ??= new zd(), oe = ee.unlock() && [y, O].map((Ze) => ee.route(Ze)).every(Boolean);
    at(oe ? "" : "Web Audio -kytkentä epäonnistui: " + ee.lastError);
    let Le = null;
    oe && (ee.recovering || ee.clockState() === "stalled") && (T("palautus", { reason: ee.recovering ? "kesken" : "kello pysähtynyt" }), Le = ee.recover()), w(), P(!0);
    const Ie = ++x.current;
    if (Le) {
      const Ze = await Le;
      if (T("palautus-tulos", { restored: Ze, error: Ze ? "" : ee.lastError }), Ie !== x.current) return;
      if (!Ze) {
        pe("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + ee.lastError);
        return;
      }
    }
    try {
      if (await Promise.all([Ve(y, "tausta"), Ve(O, "kitara")]), Ie !== x.current) return;
      P(), Se(!0), T("toisto-alkoi", { tausta: y.currentTime, kitara: O.currentTime }), le(G ? "jatko" : "käynnistys", Ie), oe && (ee.observe(), window.setTimeout(() => {
        Ie === x.current && (ee.state !== "running" ? pe(`Ääni ei käynnistynyt (Web Audio: ${ee.state}).`) : ee.clockState() === "stalled" && (J("vahti"), pe("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
      }, 800));
    } catch {
      if (Ie !== x.current) return;
      J("virhe"), pe("Toisto epäonnistui.");
    }
  }
  function En(y) {
    const O = C.current?.currentTime ?? 0;
    T("kuulokuva", { value: y, time: O }), ct((G) => [...G, { value: y, time: O }]);
  }
  function Ut() {
    const y = C.current;
    return {
      meta: {
        test: "kaksiraitatesti",
        source: f.source,
        sync: f.sync,
        offsetMs: f.offsetMs,
        bundle: new URL(import.meta.url).searchParams.get("v"),
        files: s,
        userAgent: navigator.userAgent,
        audioSession: navigator.audioSession?.type ?? null,
        contextSampleRate: Fr(y)?.context.sampleRate ?? null
      },
      seekLatencies: $d(H.current.events),
      measurements: H.current.measurements,
      events: H.current.events,
      samples: H.current.samples
    };
  }
  function Yn() {
    ve(JSON.stringify(Ut()));
  }
  const Xn = ae.useRef(Ut);
  Xn.current = Ut, ae.useEffect(() => {
    window.kaksiraitatesti = { report: () => Xn.current() };
  }, []), ae.useEffect(() => {
    const y = [[C.current, "tausta"], [N.current, "kitara"]], O = ["loadedmetadata", "canplay", "canplaythrough", "play", "playing", "waiting", "stalled", "seeking", "seeked", "pause", "ended", "error"], G = [];
    for (const [oe, Le] of y)
      if (oe)
        for (const Ie of O) {
          const Ze = () => T(Ie, { track: Le, time: oe.currentTime, readyState: oe.readyState, paused: oe.paused });
          oe.addEventListener(Ie, Ze), G.push(() => oe.removeEventListener(Ie, Ze));
        }
    const We = window.setInterval(() => {
      const oe = C.current, Le = N.current;
      if (!oe || !Le) return;
      const Ie = Fr(oe)?.context, Ze = (Le.currentTime - oe.currentTime) * 1e3;
      H.current.sample({
        tausta: oe.currentTime,
        kitara: Le.currentTime,
        mediaDiffMs: Ze,
        pausedT: oe.paused,
        pausedK: Le.paused,
        readyT: oe.readyState,
        readyK: Le.readyState,
        contextState: Ie?.state ?? null,
        contextTime: Ie?.currentTime ?? null,
        hidden: document.hidden
      }), Ke({ diff: Ze, tausta: oe.currentTime, kitara: Le.currentTime });
    }, 500), ee = () => {
      T("visibilitychange", { hidden: document.hidden }), V.current?.observe(), document.hidden && J("sivu-piiloon");
    };
    return document.addEventListener("visibilitychange", ee), () => {
      G.forEach((oe) => oe()), clearInterval(We), document.removeEventListener("visibilitychange", ee), x.current++, X(), V.current?.close();
    };
  }, []);
  const Ir = rt.filter((y) => y.reliable && y.renderedDiffMs !== null), Gn = ["käynnistys", "jatko", "kelaus", "jatkuva"].map((y) => {
    const O = Ir.filter((ee) => ee.phase === y), G = O.map((ee) => ee.renderedDiffMs), We = O.map((ee) => ee.mediaDiffMs);
    return {
      phase: y,
      count: O.length,
      renderedMedian: nc(G),
      renderedMaxAbs: G.length ? Math.max(...G.map(Math.abs)) : null,
      mediaMedian: nc(We),
      unreliable: rt.filter((ee) => ee.phase === y && !ee.reliable).length
    };
  }), Zn = f.source === "synteettinen" ? 30 : 60, Vt = (y, O = !0) => `?lahde=${y}${O ? "" : "&tahdistin=pois"}`, on = f.source === "mp3" ? "MP3" : f.source === "wav" ? "WAV (0–120 s)" : `Synteettinen (kitara siirretty ${f.offsetMs} ms myöhemmäksi)`;
  return /* @__PURE__ */ A.jsxs("main", { className: "kaksiraita", children: [
    /* @__PURE__ */ A.jsx("h1", { children: "Kahden raidan synkronointitesti" }),
    /* @__PURE__ */ A.jsxs("p", { className: "mode", "data-source": f.source, "data-sync": f.sync ? "on" : "off", children: [
      "Tila: ",
      /* @__PURE__ */ A.jsx("strong", { children: on }),
      " · tahdistin ",
      /* @__PURE__ */ A.jsx("strong", { children: f.sync ? "käytössä" : "pois" })
    ] }),
    /* @__PURE__ */ A.jsxs("p", { className: "links", children: [
      /* @__PURE__ */ A.jsx("a", { href: Vt("mp3"), children: "MP3" }),
      " · ",
      /* @__PURE__ */ A.jsx("a", { href: Vt("wav"), children: "WAV" }),
      " · ",
      /* @__PURE__ */ A.jsx("a", { href: Vt("synteettinen"), children: "Synteettinen" }),
      " · ",
      /* @__PURE__ */ A.jsxs("a", { href: Vt(f.source, !f.sync), children: [
        "tahdistin ",
        f.sync ? "pois" : "käyttöön"
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("section", { className: "player", "aria-label": "Testisoitin", children: [
      /* @__PURE__ */ A.jsx("button", { type: "button", className: "play", onClick: () => {
        Sn();
      }, children: U ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ A.jsxs("button", { type: "button", onClick: () => te(Zn), children: [
        "Siirry kohtaan ",
        Xl(Zn)
      ] }),
      /* @__PURE__ */ A.jsxs("output", { className: "time", children: [
        Xl(Pe),
        " / ",
        Xl(_e)
      ] }),
      Re && /* @__PURE__ */ A.jsx("p", { role: "status", children: Re }),
      Ce && /* @__PURE__ */ A.jsx("p", { role: "alert", className: "error", children: Ce }),
      /* @__PURE__ */ A.jsx(
        "audio",
        {
          ref: C,
          src: s.tausta,
          preload: "metadata",
          onLoadedMetadata: (y) => {
            Oe(y.currentTarget.duration), b(y.currentTarget);
          },
          onProgress: (y) => b(y.currentTarget),
          onCanPlay: (y) => b(y.currentTarget),
          onTimeUpdate: (y) => fe(y.currentTarget),
          onEnded: () => {
            D.current = null, X(), T("ended", {}), N.current?.pause(), Se(!1);
          },
          onPause: (y) => {
            y.currentTarget === C.current && Se(!1);
          }
        }
      ),
      /* @__PURE__ */ A.jsx(
        "audio",
        {
          ref: N,
          src: s.kitara,
          preload: "metadata",
          onLoadedMetadata: () => {
            C.current?.paused && P(!0);
          }
        }
      )
    ] }),
    /* @__PURE__ */ A.jsxs("section", { "aria-label": "Mediakellot", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "Mediaelementtien kellot" }),
      /* @__PURE__ */ A.jsxs("p", { className: "live", children: [
        "Tausta ",
        Pt(Ge?.tausta, 3),
        " s · Kitara ",
        Pt(Ge?.kitara, 3),
        " s · ",
        /* @__PURE__ */ A.jsxs("strong", { children: [
          "ero ",
          Pt(Ge?.diff),
          " ms"
        ] })
      ] }),
      /* @__PURE__ */ A.jsx("p", { className: "hint", children: "Ero on elementtien kellojen ero (kitara − tausta). Se ei ole kuultava kohdistus." })
    ] }),
    /* @__PURE__ */ A.jsxs("section", { "aria-label": "Renderöity kohdistus", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "Renderöity kohdistus (Web Audio -graafi)" }),
      /* @__PURE__ */ A.jsx("p", { className: "hint", children: "Mitataan automaattisesti 3 s Soita-painalluksen ja kelauksen jälkeen ja sen jälkeen 5 s välein. Positiivinen = kitara edellä." }),
      /* @__PURE__ */ A.jsxs("table", { className: "summary", children: [
        /* @__PURE__ */ A.jsx("thead", { children: /* @__PURE__ */ A.jsxs("tr", { children: [
          /* @__PURE__ */ A.jsx("th", { children: "Vaihe" }),
          /* @__PURE__ */ A.jsx("th", { children: "Mittauksia" }),
          /* @__PURE__ */ A.jsx("th", { children: "Renderöity mediaani (ms)" }),
          /* @__PURE__ */ A.jsx("th", { children: "Suurin |ero| (ms)" }),
          /* @__PURE__ */ A.jsx("th", { children: "Mediakellojen mediaani (ms)" }),
          /* @__PURE__ */ A.jsx("th", { children: "Epävarmoja" })
        ] }) }),
        /* @__PURE__ */ A.jsx("tbody", { children: Gn.map((y) => /* @__PURE__ */ A.jsxs("tr", { "data-phase": y.phase, children: [
          /* @__PURE__ */ A.jsx("td", { children: y.phase }),
          /* @__PURE__ */ A.jsx("td", { children: y.count }),
          /* @__PURE__ */ A.jsx("td", { children: Pt(y.renderedMedian) }),
          /* @__PURE__ */ A.jsx("td", { children: Pt(y.renderedMaxAbs) }),
          /* @__PURE__ */ A.jsx("td", { children: Pt(y.mediaMedian) }),
          /* @__PURE__ */ A.jsx("td", { children: y.unreliable })
        ] }, y.phase)) })
      ] }),
      /* @__PURE__ */ A.jsx("ol", { className: "measurements", "aria-label": "Mittaukset", children: rt.slice(-12).map((y) => /* @__PURE__ */ A.jsxs("li", { "data-reliable": y.reliable ? "kyllä" : "ei", children: [
        y.phase,
        ": renderöity ",
        Pt(y.renderedDiffMs),
        " ms, mediakellot ",
        Pt(y.mediaDiffMs),
        " ms",
        " ",
        "(korrelaatio T ",
        Pt(y.tracks[0].score, 3),
        " / K ",
        Pt(y.tracks[1].score, 3),
        y.reliable ? "" : ", epävarma" + (y.tracks.some((O) => O.probeRms <= 1e-4) ? ": raita hiljaa" : ""),
        ")"
      ] }, y.ms)) })
    ] }),
    /* @__PURE__ */ A.jsxs("section", { "aria-label": "Kuulokuva", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "Kuulokuva" }),
      /* @__PURE__ */ A.jsx("p", { className: "hint", children: "Kirjaa, miltä kuulostaa juuri nyt. Kirjaus tallentuu raporttiin soittimen kohdan kanssa." }),
      /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => En("tahdissa"), children: "Kuulostaa tahdissa" }),
      " ",
      /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => En("epätahdissa"), children: "Kuulostaa epätahdissa" }),
      " ",
      /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => En("epävarma"), children: "En osaa sanoa" }),
      /* @__PURE__ */ A.jsx("ul", { children: lt.map((y, O) => /* @__PURE__ */ A.jsxs("li", { children: [
        Xl(y.time),
        ": ",
        y.value
      ] }, O)) })
    ] }),
    /* @__PURE__ */ A.jsxs("section", { "aria-label": "Raportti", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "Raportti" }),
      /* @__PURE__ */ A.jsx("button", { type: "button", onClick: Yn, children: "Valitse raportti" }),
      Fe && /* @__PURE__ */ A.jsx(
        "textarea",
        {
          readOnly: !0,
          rows: 8,
          "aria-label": "Testiraportti",
          value: Fe,
          ref: (y) => {
            y?.focus(), y?.select();
          }
        }
      )
    ] })
  ] });
}
Vd();
const rc = document.getElementById("kaksiraitatesti");
rc && cd.createRoot(rc).render(/* @__PURE__ */ A.jsx(Yd, {}));
//# sourceMappingURL=app.js.map
