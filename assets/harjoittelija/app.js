function _m(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var oo = { exports: {} }, Ur = {}, uo = { exports: {} }, $e = {};
var md;
function Mm() {
  if (md) return $e;
  md = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), _ = Symbol.iterator;
  function T(k) {
    return k === null || typeof k != "object" ? null : (k = _ && k[_] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, N = {};
  function w(k, L, he) {
    this.props = k, this.context = L, this.refs = N, this.updater = he || O;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(k, L) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, L, "setState");
  }, w.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function z() {
  }
  z.prototype = w.prototype;
  function E(k, L, he) {
    this.props = k, this.context = L, this.refs = N, this.updater = he || O;
  }
  var F = E.prototype = new z();
  F.constructor = E, D(F, w.prototype), F.isPureReactComponent = !0;
  var I = Array.isArray, Q = Object.prototype.hasOwnProperty, B = { current: null }, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(k, L, he) {
    var je, U = {}, oe = null, K = null;
    if (L != null) for (je in L.ref !== void 0 && (K = L.ref), L.key !== void 0 && (oe = "" + L.key), L) Q.call(L, je) && !C.hasOwnProperty(je) && (U[je] = L[je]);
    var ne = arguments.length - 2;
    if (ne === 1) U.children = he;
    else if (1 < ne) {
      for (var S = Array(ne), J = 0; J < ne; J++) S[J] = arguments[J + 2];
      U.children = S;
    }
    if (k && k.defaultProps) for (je in ne = k.defaultProps, ne) U[je] === void 0 && (U[je] = ne[je]);
    return { $$typeof: r, type: k, key: oe, ref: K, props: U, _owner: B.current };
  }
  function ee(k, L) {
    return { $$typeof: r, type: k.type, key: L, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function se(k) {
    return typeof k == "object" && k !== null && k.$$typeof === r;
  }
  function Se(k) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(he) {
      return L[he];
    });
  }
  var te = /\/+/g;
  function ue(k, L) {
    return typeof k == "object" && k !== null && k.key != null ? Se("" + k.key) : L.toString(36);
  }
  function Ne(k, L, he, je, U) {
    var oe = typeof k;
    (oe === "undefined" || oe === "boolean") && (k = null);
    var K = !1;
    if (k === null) K = !0;
    else switch (oe) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case r:
          case a:
            K = !0;
        }
    }
    if (K) return K = k, U = U(K), k = je === "" ? "." + ue(K, 0) : je, I(U) ? (he = "", k != null && (he = k.replace(te, "$&/") + "/"), Ne(U, L, he, "", function(J) {
      return J;
    })) : U != null && (se(U) && (U = ee(U, he + (!U.key || K && K.key === U.key ? "" : ("" + U.key).replace(te, "$&/") + "/") + k)), L.push(U)), 1;
    if (K = 0, je = je === "" ? "." : je + ":", I(k)) for (var ne = 0; ne < k.length; ne++) {
      oe = k[ne];
      var S = je + ue(oe, ne);
      K += Ne(oe, L, he, S, U);
    }
    else if (S = T(k), typeof S == "function") for (k = S.call(k), ne = 0; !(oe = k.next()).done; ) oe = oe.value, S = je + ue(oe, ne++), K += Ne(oe, L, he, S, U);
    else if (oe === "object") throw L = String(k), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function H(k, L, he) {
    if (k == null) return k;
    var je = [], U = 0;
    return Ne(k, je, "", "", function(oe) {
      return L.call(he, oe, U++);
    }), je;
  }
  function ae(k) {
    if (k._status === -1) {
      var L = k._result;
      L = L(), L.then(function(he) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = he);
      }, function(he) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = he);
      }), k._status === -1 && (k._status = 0, k._result = L);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ce = { current: null }, Y = { transition: null }, ie = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Y, ReactCurrentOwner: B };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $e.Children = { map: H, forEach: function(k, L, he) {
    H(k, function() {
      L.apply(this, arguments);
    }, he);
  }, count: function(k) {
    var L = 0;
    return H(k, function() {
      L++;
    }), L;
  }, toArray: function(k) {
    return H(k, function(L) {
      return L;
    }) || [];
  }, only: function(k) {
    if (!se(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, $e.Component = w, $e.Fragment = u, $e.Profiler = d, $e.PureComponent = E, $e.StrictMode = c, $e.Suspense = j, $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, $e.act = Z, $e.cloneElement = function(k, L, he) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var je = D({}, k.props), U = k.key, oe = k.ref, K = k._owner;
    if (L != null) {
      if (L.ref !== void 0 && (oe = L.ref, K = B.current), L.key !== void 0 && (U = "" + L.key), k.type && k.type.defaultProps) var ne = k.type.defaultProps;
      for (S in L) Q.call(L, S) && !C.hasOwnProperty(S) && (je[S] = L[S] === void 0 && ne !== void 0 ? ne[S] : L[S]);
    }
    var S = arguments.length - 2;
    if (S === 1) je.children = he;
    else if (1 < S) {
      ne = Array(S);
      for (var J = 0; J < S; J++) ne[J] = arguments[J + 2];
      je.children = ne;
    }
    return { $$typeof: r, type: k.type, key: U, ref: oe, props: je, _owner: K };
  }, $e.createContext = function(k) {
    return k = { $$typeof: p, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: h, _context: k }, k.Consumer = k;
  }, $e.createElement = V, $e.createFactory = function(k) {
    var L = V.bind(null, k);
    return L.type = k, L;
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(k) {
    return { $$typeof: m, render: k };
  }, $e.isValidElement = se, $e.lazy = function(k) {
    return { $$typeof: v, _payload: { _status: -1, _result: k }, _init: ae };
  }, $e.memo = function(k, L) {
    return { $$typeof: A, type: k, compare: L === void 0 ? null : L };
  }, $e.startTransition = function(k) {
    var L = Y.transition;
    Y.transition = {};
    try {
      k();
    } finally {
      Y.transition = L;
    }
  }, $e.unstable_act = Z, $e.useCallback = function(k, L) {
    return ce.current.useCallback(k, L);
  }, $e.useContext = function(k) {
    return ce.current.useContext(k);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(k) {
    return ce.current.useDeferredValue(k);
  }, $e.useEffect = function(k, L) {
    return ce.current.useEffect(k, L);
  }, $e.useId = function() {
    return ce.current.useId();
  }, $e.useImperativeHandle = function(k, L, he) {
    return ce.current.useImperativeHandle(k, L, he);
  }, $e.useInsertionEffect = function(k, L) {
    return ce.current.useInsertionEffect(k, L);
  }, $e.useLayoutEffect = function(k, L) {
    return ce.current.useLayoutEffect(k, L);
  }, $e.useMemo = function(k, L) {
    return ce.current.useMemo(k, L);
  }, $e.useReducer = function(k, L, he) {
    return ce.current.useReducer(k, L, he);
  }, $e.useRef = function(k) {
    return ce.current.useRef(k);
  }, $e.useState = function(k) {
    return ce.current.useState(k);
  }, $e.useSyncExternalStore = function(k, L, he) {
    return ce.current.useSyncExternalStore(k, L, he);
  }, $e.useTransition = function() {
    return ce.current.useTransition();
  }, $e.version = "18.3.1", $e;
}
var pd;
function Fo() {
  return pd || (pd = 1, uo.exports = Mm()), uo.exports;
}
var vd;
function Tm() {
  if (vd) return Ur;
  vd = 1;
  var r = Fo(), a = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, j, A) {
    var v, _ = {}, T = null, O = null;
    A !== void 0 && (T = "" + A), j.key !== void 0 && (T = "" + j.key), j.ref !== void 0 && (O = j.ref);
    for (v in j) c.call(j, v) && !h.hasOwnProperty(v) && (_[v] = j[v]);
    if (m && m.defaultProps) for (v in j = m.defaultProps, j) _[v] === void 0 && (_[v] = j[v]);
    return { $$typeof: a, type: m, key: T, ref: O, props: _, _owner: d.current };
  }
  return Ur.Fragment = u, Ur.jsx = p, Ur.jsxs = p, Ur;
}
var kd;
function Pm() {
  return kd || (kd = 1, oo.exports = Tm()), oo.exports;
}
var s = Pm(), b = Fo(), da = {}, co = { exports: {} }, Dt = {}, fo = { exports: {} }, ho = {};
var yd;
function Am() {
  return yd || (yd = 1, (function(r) {
    function a(Y, ie) {
      var Z = Y.length;
      Y.push(ie);
      e: for (; 0 < Z; ) {
        var k = Z - 1 >>> 1, L = Y[k];
        if (0 < d(L, ie)) Y[k] = ie, Y[Z] = L, Z = k;
        else break e;
      }
    }
    function u(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function c(Y) {
      if (Y.length === 0) return null;
      var ie = Y[0], Z = Y.pop();
      if (Z !== ie) {
        Y[0] = Z;
        e: for (var k = 0, L = Y.length, he = L >>> 1; k < he; ) {
          var je = 2 * (k + 1) - 1, U = Y[je], oe = je + 1, K = Y[oe];
          if (0 > d(U, Z)) oe < L && 0 > d(K, U) ? (Y[k] = K, Y[oe] = Z, k = oe) : (Y[k] = U, Y[je] = Z, k = je);
          else if (oe < L && 0 > d(K, Z)) Y[k] = K, Y[oe] = Z, k = oe;
          else break e;
        }
      }
      return ie;
    }
    function d(Y, ie) {
      var Z = Y.sortIndex - ie.sortIndex;
      return Z !== 0 ? Z : Y.id - ie.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      r.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, m = p.now();
      r.unstable_now = function() {
        return p.now() - m;
      };
    }
    var j = [], A = [], v = 1, _ = null, T = 3, O = !1, D = !1, N = !1, w = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function F(Y) {
      for (var ie = u(A); ie !== null; ) {
        if (ie.callback === null) c(A);
        else if (ie.startTime <= Y) c(A), ie.sortIndex = ie.expirationTime, a(j, ie);
        else break;
        ie = u(A);
      }
    }
    function I(Y) {
      if (N = !1, F(Y), !D) if (u(j) !== null) D = !0, ae(Q);
      else {
        var ie = u(A);
        ie !== null && ce(I, ie.startTime - Y);
      }
    }
    function Q(Y, ie) {
      D = !1, N && (N = !1, z(V), V = -1), O = !0;
      var Z = T;
      try {
        for (F(ie), _ = u(j); _ !== null && (!(_.expirationTime > ie) || Y && !Se()); ) {
          var k = _.callback;
          if (typeof k == "function") {
            _.callback = null, T = _.priorityLevel;
            var L = k(_.expirationTime <= ie);
            ie = r.unstable_now(), typeof L == "function" ? _.callback = L : _ === u(j) && c(j), F(ie);
          } else c(j);
          _ = u(j);
        }
        if (_ !== null) var he = !0;
        else {
          var je = u(A);
          je !== null && ce(I, je.startTime - ie), he = !1;
        }
        return he;
      } finally {
        _ = null, T = Z, O = !1;
      }
    }
    var B = !1, C = null, V = -1, ee = 5, se = -1;
    function Se() {
      return !(r.unstable_now() - se < ee);
    }
    function te() {
      if (C !== null) {
        var Y = r.unstable_now();
        se = Y;
        var ie = !0;
        try {
          ie = C(!0, Y);
        } finally {
          ie ? ue() : (B = !1, C = null);
        }
      } else B = !1;
    }
    var ue;
    if (typeof E == "function") ue = function() {
      E(te);
    };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), H = Ne.port2;
      Ne.port1.onmessage = te, ue = function() {
        H.postMessage(null);
      };
    } else ue = function() {
      w(te, 0);
    };
    function ae(Y) {
      C = Y, B || (B = !0, ue());
    }
    function ce(Y, ie) {
      V = w(function() {
        Y(r.unstable_now());
      }, ie);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, r.unstable_continueExecution = function() {
      D || O || (D = !0, ae(Q));
    }, r.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, r.unstable_getFirstCallbackNode = function() {
      return u(j);
    }, r.unstable_next = function(Y) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var ie = 3;
          break;
        default:
          ie = T;
      }
      var Z = T;
      T = ie;
      try {
        return Y();
      } finally {
        T = Z;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(Y, ie) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var Z = T;
      T = Y;
      try {
        return ie();
      } finally {
        T = Z;
      }
    }, r.unstable_scheduleCallback = function(Y, ie, Z) {
      var k = r.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? k + Z : k) : Z = k, Y) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = Z + L, Y = { id: v++, callback: ie, priorityLevel: Y, startTime: Z, expirationTime: L, sortIndex: -1 }, Z > k ? (Y.sortIndex = Z, a(A, Y), u(j) === null && Y === u(A) && (N ? (z(V), V = -1) : N = !0, ce(I, Z - k))) : (Y.sortIndex = L, a(j, Y), D || O || (D = !0, ae(Q))), Y;
    }, r.unstable_shouldYield = Se, r.unstable_wrapCallback = function(Y) {
      var ie = T;
      return function() {
        var Z = T;
        T = ie;
        try {
          return Y.apply(this, arguments);
        } finally {
          T = Z;
        }
      };
    };
  })(ho)), ho;
}
var gd;
function Rm() {
  return gd || (gd = 1, fo.exports = Am()), fo.exports;
}
var xd;
function bm() {
  if (xd) return Dt;
  xd = 1;
  var r = Fo(), a = Rm();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function h(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, _ = {};
  function T(e) {
    return j.call(_, e) ? !0 : j.call(v, e) ? !1 : A.test(e) ? _[e] = !0 : (v[e] = !0, !1);
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
  function D(e, t, n, i) {
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
  function N(e, t, n, i, l, o, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = f;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new N(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    w[t] = new N(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new N(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new N(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new N(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new N(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function E(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      E
    );
    w[t] = new N(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, E);
    w[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, E);
    w[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function F(e, t, n, i) {
    var l = w.hasOwnProperty(t) ? w[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, l, i) && (n = null), i || l === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = /* @__PURE__ */ Symbol.for("react.element"), B = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), se = /* @__PURE__ */ Symbol.for("react.provider"), Se = /* @__PURE__ */ Symbol.for("react.context"), te = /* @__PURE__ */ Symbol.for("react.forward_ref"), ue = /* @__PURE__ */ Symbol.for("react.suspense"), Ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), ce = /* @__PURE__ */ Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Z = Object.assign, k;
  function L(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var he = !1;
  function je(e, t) {
    if (!e || he) return "";
    he = !0;
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
        } catch (R) {
          var i = R;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (R) {
          i = R;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (R) {
          i = R;
        }
        e();
      }
    } catch (R) {
      if (R && i && typeof R.stack == "string") {
        for (var l = R.stack.split(`
`), o = i.stack.split(`
`), f = l.length - 1, y = o.length - 1; 1 <= f && 0 <= y && l[f] !== o[y]; ) y--;
        for (; 1 <= f && 0 <= y; f--, y--) if (l[f] !== o[y]) {
          if (f !== 1 || y !== 1)
            do
              if (f--, y--, 0 > y || l[f] !== o[y]) {
                var g = `
` + l[f].replace(" at new ", " at ");
                return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
              }
            while (1 <= f && 0 <= y);
          break;
        }
      }
    } finally {
      he = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function U(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
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
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case B:
        return "Portal";
      case ee:
        return "Profiler";
      case V:
        return "StrictMode";
      case ue:
        return "Suspense";
      case Ne:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Se:
        return (e.displayName || "Context") + ".Consumer";
      case se:
        return (e._context.displayName || "Context") + ".Provider";
      case te:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
      case ae:
        t = e._payload, e = e._init;
        try {
          return oe(e(t));
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
        return oe(t);
      case 8:
        return t === V ? "StrictMode" : "Mode";
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
  function S(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function J(e) {
    var t = S(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(f) {
        i = "" + f, o.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(f) {
        i = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function re(e) {
    e._valueTracker || (e._valueTracker = J(e));
  }
  function le(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = S(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function fe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ke(e, t) {
    var n = t.checked;
    return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ae(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ne(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Me(e, t) {
    t = t.checked, t != null && F(e, "checked", t, !1);
  }
  function Oe(e, t) {
    Me(e, t);
    var n = ne(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? He(e, t.type, n) : t.hasOwnProperty("defaultValue") && He(e, t.type, ne(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function He(e, t, n) {
    (t !== "number" || fe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Qe = Array.isArray;
  function Ue(e, t, n, i) {
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
  function gt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ze(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Qe(n)) {
          if (1 < n.length) throw Error(u(93));
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
  function Tt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var zt, sn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (zt = zt || document.createElement("div"), zt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Wt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var dt = {
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
  }, Dn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(dt).forEach(function(e) {
    Dn.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), dt[t] = dt[e];
    });
  });
  function we(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dt.hasOwnProperty(e) && dt[e] ? ("" + t).trim() : t + "px";
  }
  function Qt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = we(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Te = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function be(e, t) {
    if (t) {
      if (Te[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
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
  var Ye = null;
  function et(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Yt = null, xt = null, Vt = null;
  function mn(e) {
    if (e = Pr(e)) {
      if (typeof Yt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Cs(t), Yt(e.stateNode, e.type, t));
    }
  }
  function pn(e) {
    xt ? Vt ? Vt.push(e) : Vt = [e] : xt = e;
  }
  function zn() {
    if (xt) {
      var e = xt, t = Vt;
      if (Vt = xt = null, mn(e), t) for (e = 0; e < t.length; e++) mn(t[e]);
    }
  }
  function Fe(e, t) {
    return e(t);
  }
  function rt() {
  }
  var Je = !1;
  function pt(e, t, n) {
    if (Je) return e(t, n);
    Je = !0;
    try {
      return Fe(e, t, n);
    } finally {
      Je = !1, (xt !== null || Vt !== null) && (rt(), zn());
    }
  }
  function Pt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Cs(n);
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
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var vn = !1;
  if (m) try {
    var kn = {};
    Object.defineProperty(kn, "passive", { get: function() {
      vn = !0;
    } }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
  } catch {
    vn = !1;
  }
  function cr(e, t, n, i, l, o, f, y, g) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (W) {
      this.onError(W);
    }
  }
  var En = !1, ui = null, Pi = !1, Cn = null, dr = { onError: function(e) {
    En = !0, ui = e;
  } };
  function ns(e, t, n, i, l, o, f, y, g) {
    En = !1, ui = null, cr.apply(dr, arguments);
  }
  function Ma(e, t, n, i, l, o, f, y, g) {
    if (ns.apply(this, arguments), En) {
      if (En) {
        var R = ui;
        En = !1, ui = null;
      } else throw Error(u(198));
      Pi || (Pi = !0, Cn = R);
    }
  }
  function _n(e) {
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
  function jt(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function is(e) {
    if (_n(e) !== e) throw Error(u(188));
  }
  function rs(e) {
    var t = e.alternate;
    if (!t) {
      if (t = _n(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (i = l.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return is(l), e;
          if (o === i) return is(l), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== i.return) n = l, i = o;
      else {
        for (var f = !1, y = l.child; y; ) {
          if (y === n) {
            f = !0, n = l, i = o;
            break;
          }
          if (y === i) {
            f = !0, i = l, n = o;
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = o.child; y; ) {
            if (y === n) {
              f = !0, n = o, i = l;
              break;
            }
            if (y === i) {
              f = !0, i = o, n = l;
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== i) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ss(e) {
    return e = rs(e), e !== null ? as(e) : null;
  }
  function as(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = as(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Mn = a.unstable_scheduleCallback, Tn = a.unstable_cancelCallback, $ = a.unstable_shouldYield, pe = a.unstable_requestPaint, Ee = a.unstable_now, Jt = a.unstable_getCurrentPriorityLevel, ot = a.unstable_ImmediatePriority, ci = a.unstable_UserBlockingPriority, Vn = a.unstable_NormalPriority, di = a.unstable_LowPriority, Ho = a.unstable_IdlePriority, ls = null, yn = null;
  function Bf(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(ls, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : Uf, Kf = Math.log, Hf = Math.LN2;
  function Uf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Kf(e) / Hf | 0) | 0;
  }
  var os = 64, us = 4194304;
  function fr(e) {
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
  function cs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, o = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var y = f & ~l;
      y !== 0 ? i = fr(y) : (o &= f, o !== 0 && (i = fr(o)));
    } else f = n & ~l, f !== 0 ? i = fr(f) : o !== 0 && (i = fr(o));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - an(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function Gf(e, t) {
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
  function Wf(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var f = 31 - an(o), y = 1 << f, g = l[f];
      g === -1 ? ((y & n) === 0 || (y & i) !== 0) && (l[f] = Gf(y, t)) : g <= t && (e.expiredLanes |= y), o &= ~y;
    }
  }
  function Ta(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Uo() {
    var e = os;
    return os <<= 1, (os & 4194240) === 0 && (os = 64), e;
  }
  function Pa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function hr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n;
  }
  function Qf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - an(n), o = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Aa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - an(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Ge = 0;
  function Go(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Wo, Ra, Qo, Yo, Jo, ba = !1, ds = [], Bn = null, Kn = null, Hn = null, mr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Un = [], Yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Xo(e, t) {
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
        mr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pr.delete(t.pointerId);
    }
  }
  function vr(e, t, n, i, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Pr(t), t !== null && Ra(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Jf(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Bn = vr(Bn, e, t, n, i, l), !0;
      case "dragenter":
        return Kn = vr(Kn, e, t, n, i, l), !0;
      case "mouseover":
        return Hn = vr(Hn, e, t, n, i, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return mr.set(o, vr(mr.get(o) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, pr.set(o, vr(pr.get(o) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function Zo(e) {
    var t = fi(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = jt(n), t !== null) {
            e.blockedOn = t, Jo(e.priority, function() {
              Qo(n);
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
  function fs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Ye = i, n.target.dispatchEvent(i), Ye = null;
      } else return t = Pr(n), t !== null && Ra(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function qo(e, t, n) {
    fs(e) && n.delete(t);
  }
  function Xf() {
    ba = !1, Bn !== null && fs(Bn) && (Bn = null), Kn !== null && fs(Kn) && (Kn = null), Hn !== null && fs(Hn) && (Hn = null), mr.forEach(qo), pr.forEach(qo);
  }
  function kr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ba || (ba = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Xf)));
  }
  function yr(e) {
    function t(l) {
      return kr(l, e);
    }
    if (0 < ds.length) {
      kr(ds[0], e);
      for (var n = 1; n < ds.length; n++) {
        var i = ds[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Bn !== null && kr(Bn, e), Kn !== null && kr(Kn, e), Hn !== null && kr(Hn, e), mr.forEach(t), pr.forEach(t), n = 0; n < Un.length; n++) i = Un[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Un.length && (n = Un[0], n.blockedOn === null); ) Zo(n), n.blockedOn === null && Un.shift();
  }
  var Ai = I.ReactCurrentBatchConfig, hs = !0;
  function Zf(e, t, n, i) {
    var l = Ge, o = Ai.transition;
    Ai.transition = null;
    try {
      Ge = 1, La(e, t, n, i);
    } finally {
      Ge = l, Ai.transition = o;
    }
  }
  function qf(e, t, n, i) {
    var l = Ge, o = Ai.transition;
    Ai.transition = null;
    try {
      Ge = 4, La(e, t, n, i);
    } finally {
      Ge = l, Ai.transition = o;
    }
  }
  function La(e, t, n, i) {
    if (hs) {
      var l = Oa(e, t, n, i);
      if (l === null) Za(e, t, i, ms, n), Xo(e, i);
      else if (Jf(l, e, t, n, i)) i.stopPropagation();
      else if (Xo(e, i), t & 4 && -1 < Yf.indexOf(e)) {
        for (; l !== null; ) {
          var o = Pr(l);
          if (o !== null && Wo(o), o = Oa(e, t, n, i), o === null && Za(e, t, i, ms, n), o === l) break;
          l = o;
        }
        l !== null && i.stopPropagation();
      } else Za(e, t, i, null, n);
    }
  }
  var ms = null;
  function Oa(e, t, n, i) {
    if (ms = null, e = et(i), e = fi(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = jt(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ms = e, null;
  }
  function eu(e) {
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
        switch (Jt()) {
          case ot:
            return 1;
          case ci:
            return 4;
          case Vn:
          case di:
            return 16;
          case Ho:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gn = null, $a = null, ps = null;
  function tu() {
    if (ps) return ps;
    var e, t = $a, n = t.length, i, l = "value" in Gn ? Gn.value : Gn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (i = 1; i <= f && t[n - i] === l[o - i]; i++) ;
    return ps = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function vs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ks() {
    return !0;
  }
  function nu() {
    return !1;
  }
  function Bt(e) {
    function t(n, i, l, o, f) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = o, this.target = f, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(o) : o[y]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ks : nu, this.isPropagationStopped = nu, this;
    }
    return Z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ks);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ks);
    }, persist: function() {
    }, isPersistent: ks }), t;
  }
  var Ri = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fa = Bt(Ri), gr = Z({}, Ri, { view: 0, detail: 0 }), eh = Bt(gr), Ia, Da, xr, ys = Z({}, gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Va, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (Ia = e.screenX - xr.screenX, Da = e.screenY - xr.screenY) : Da = Ia = 0, xr = e), Ia);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Da;
  } }), iu = Bt(ys), th = Z({}, ys, { dataTransfer: 0 }), nh = Bt(th), ih = Z({}, gr, { relatedTarget: 0 }), za = Bt(ih), rh = Z({}, Ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sh = Bt(rh), ah = Z({}, Ri, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), lh = Bt(ah), oh = Z({}, Ri, { data: 0 }), ru = Bt(oh), uh = {
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
  }, ch = {
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
  }, dh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function fh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dh[e]) ? !!t[e] : !1;
  }
  function Va() {
    return fh;
  }
  var hh = Z({}, gr, { key: function(e) {
    if (e.key) {
      var t = uh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ch[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Va, charCode: function(e) {
    return e.type === "keypress" ? vs(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), mh = Bt(hh), ph = Z({}, ys, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), su = Bt(ph), vh = Z({}, gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Va }), kh = Bt(vh), yh = Z({}, Ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gh = Bt(yh), xh = Z({}, ys, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jh = Bt(xh), Sh = [9, 13, 27, 32], Ba = m && "CompositionEvent" in window, jr = null;
  m && "documentMode" in document && (jr = document.documentMode);
  var wh = m && "TextEvent" in window && !jr, au = m && (!Ba || jr && 8 < jr && 11 >= jr), lu = " ", ou = !1;
  function uu(e, t) {
    switch (e) {
      case "keyup":
        return Sh.indexOf(t.keyCode) !== -1;
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
  function cu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bi = !1;
  function Nh(e, t) {
    switch (e) {
      case "compositionend":
        return cu(t);
      case "keypress":
        return t.which !== 32 ? null : (ou = !0, lu);
      case "textInput":
        return e = t.data, e === lu && ou ? null : e;
      default:
        return null;
    }
  }
  function Eh(e, t) {
    if (bi) return e === "compositionend" || !Ba && uu(e, t) ? (e = tu(), ps = $a = Gn = null, bi = !1, e) : null;
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
        return au && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ch = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function du(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ch[e.type] : t === "textarea";
  }
  function fu(e, t, n, i) {
    pn(i), t = ws(t, "onChange"), 0 < t.length && (n = new Fa("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Sr = null, wr = null;
  function _h(e) {
    Pu(e, 0);
  }
  function gs(e) {
    var t = Ii(e);
    if (le(t)) return e;
  }
  function Mh(e, t) {
    if (e === "change") return t;
  }
  var hu = !1;
  if (m) {
    var Ka;
    if (m) {
      var Ha = "oninput" in document;
      if (!Ha) {
        var mu = document.createElement("div");
        mu.setAttribute("oninput", "return;"), Ha = typeof mu.oninput == "function";
      }
      Ka = Ha;
    } else Ka = !1;
    hu = Ka && (!document.documentMode || 9 < document.documentMode);
  }
  function pu() {
    Sr && (Sr.detachEvent("onpropertychange", vu), wr = Sr = null);
  }
  function vu(e) {
    if (e.propertyName === "value" && gs(wr)) {
      var t = [];
      fu(t, wr, e, et(e)), pt(_h, t);
    }
  }
  function Th(e, t, n) {
    e === "focusin" ? (pu(), Sr = t, wr = n, Sr.attachEvent("onpropertychange", vu)) : e === "focusout" && pu();
  }
  function Ph(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return gs(wr);
  }
  function Ah(e, t) {
    if (e === "click") return gs(t);
  }
  function Rh(e, t) {
    if (e === "input" || e === "change") return gs(t);
  }
  function bh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ln = typeof Object.is == "function" ? Object.is : bh;
  function Nr(e, t) {
    if (ln(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!j.call(t, l) || !ln(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ku(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yu(e, t) {
    var n = ku(e);
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
      n = ku(n);
    }
  }
  function gu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function xu() {
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
  function Ua(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Lh(e) {
    var t = xu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && gu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ua(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(i.start, l);
          i = i.end === void 0 ? o : Math.min(i.end, l), !e.extend && o > i && (l = i, i = o, o = l), l = yu(n, o);
          var f = yu(
            n,
            i
          );
          l && f && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > i ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Oh = m && "documentMode" in document && 11 >= document.documentMode, Li = null, Ga = null, Er = null, Wa = !1;
  function ju(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wa || Li == null || Li !== fe(i) || (i = Li, "selectionStart" in i && Ua(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Er && Nr(Er, i) || (Er = i, i = ws(Ga, "onSelect"), 0 < i.length && (t = new Fa("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Li)));
  }
  function xs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Oi = { animationend: xs("Animation", "AnimationEnd"), animationiteration: xs("Animation", "AnimationIteration"), animationstart: xs("Animation", "AnimationStart"), transitionend: xs("Transition", "TransitionEnd") }, Qa = {}, Su = {};
  m && (Su = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function js(e) {
    if (Qa[e]) return Qa[e];
    if (!Oi[e]) return e;
    var t = Oi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Su) return Qa[e] = t[n];
    return e;
  }
  var wu = js("animationend"), Nu = js("animationiteration"), Eu = js("animationstart"), Cu = js("transitionend"), _u = /* @__PURE__ */ new Map(), Mu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wn(e, t) {
    _u.set(e, t), h(t, [e]);
  }
  for (var Ya = 0; Ya < Mu.length; Ya++) {
    var Ja = Mu[Ya], $h = Ja.toLowerCase(), Fh = Ja[0].toUpperCase() + Ja.slice(1);
    Wn($h, "on" + Fh);
  }
  Wn(wu, "onAnimationEnd"), Wn(Nu, "onAnimationIteration"), Wn(Eu, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(Cu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ih = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
  function Tu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, Ma(i, t, void 0, e), e.currentTarget = null;
  }
  function Pu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var o = void 0;
        if (t) for (var f = i.length - 1; 0 <= f; f--) {
          var y = i[f], g = y.instance, R = y.currentTarget;
          if (y = y.listener, g !== o && l.isPropagationStopped()) break e;
          Tu(l, y, R), o = g;
        }
        else for (f = 0; f < i.length; f++) {
          if (y = i[f], g = y.instance, R = y.currentTarget, y = y.listener, g !== o && l.isPropagationStopped()) break e;
          Tu(l, y, R), o = g;
        }
      }
    }
    if (Pi) throw e = Cn, Pi = !1, Cn = null, e;
  }
  function tt(e, t) {
    var n = t[rl];
    n === void 0 && (n = t[rl] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Au(t, e, 2, !1), n.add(i));
  }
  function Xa(e, t, n) {
    var i = 0;
    t && (i |= 4), Au(n, e, i, t);
  }
  var Ss = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[Ss]) {
      e[Ss] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Ih.has(n) || Xa(n, !1, e), Xa(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ss] || (t[Ss] = !0, Xa("selectionchange", !1, t));
    }
  }
  function Au(e, t, n, i) {
    switch (eu(t)) {
      case 1:
        var l = Zf;
        break;
      case 4:
        l = qf;
        break;
      default:
        l = La;
    }
    n = l.bind(null, t, n, e), l = void 0, !vn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Za(e, t, n, i, l) {
    var o = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var f = i.tag;
      if (f === 3 || f === 4) {
        var y = i.stateNode.containerInfo;
        if (y === l || y.nodeType === 8 && y.parentNode === l) break;
        if (f === 4) for (f = i.return; f !== null; ) {
          var g = f.tag;
          if ((g === 3 || g === 4) && (g = f.stateNode.containerInfo, g === l || g.nodeType === 8 && g.parentNode === l)) return;
          f = f.return;
        }
        for (; y !== null; ) {
          if (f = fi(y), f === null) return;
          if (g = f.tag, g === 5 || g === 6) {
            i = o = f;
            continue e;
          }
          y = y.parentNode;
        }
      }
      i = i.return;
    }
    pt(function() {
      var R = o, W = et(n), X = [];
      e: {
        var G = _u.get(e);
        if (G !== void 0) {
          var de = Fa, ve = e;
          switch (e) {
            case "keypress":
              if (vs(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = mh;
              break;
            case "focusin":
              ve = "focus", de = za;
              break;
            case "focusout":
              ve = "blur", de = za;
              break;
            case "beforeblur":
            case "afterblur":
              de = za;
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
              de = iu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = nh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = kh;
              break;
            case wu:
            case Nu:
            case Eu:
              de = sh;
              break;
            case Cu:
              de = gh;
              break;
            case "scroll":
              de = eh;
              break;
            case "wheel":
              de = jh;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = lh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = su;
          }
          var ge = (t & 4) !== 0, ct = !ge && e === "scroll", M = ge ? G !== null ? G + "Capture" : null : G;
          ge = [];
          for (var x = R, P; x !== null; ) {
            P = x;
            var q = P.stateNode;
            if (P.tag === 5 && q !== null && (P = q, M !== null && (q = Pt(x, M), q != null && ge.push(Mr(x, q, P)))), ct) break;
            x = x.return;
          }
          0 < ge.length && (G = new de(G, ve, null, n, W), X.push({ event: G, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", G && n !== Ye && (ve = n.relatedTarget || n.fromElement) && (fi(ve) || ve[Pn])) break e;
          if ((de || G) && (G = W.window === W ? W : (G = W.ownerDocument) ? G.defaultView || G.parentWindow : window, de ? (ve = n.relatedTarget || n.toElement, de = R, ve = ve ? fi(ve) : null, ve !== null && (ct = _n(ve), ve !== ct || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (de = null, ve = R), de !== ve)) {
            if (ge = iu, q = "onMouseLeave", M = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ge = su, q = "onPointerLeave", M = "onPointerEnter", x = "pointer"), ct = de == null ? G : Ii(de), P = ve == null ? G : Ii(ve), G = new ge(q, x + "leave", de, n, W), G.target = ct, G.relatedTarget = P, q = null, fi(W) === R && (ge = new ge(M, x + "enter", ve, n, W), ge.target = P, ge.relatedTarget = ct, q = ge), ct = q, de && ve) t: {
              for (ge = de, M = ve, x = 0, P = ge; P; P = $i(P)) x++;
              for (P = 0, q = M; q; q = $i(q)) P++;
              for (; 0 < x - P; ) ge = $i(ge), x--;
              for (; 0 < P - x; ) M = $i(M), P--;
              for (; x--; ) {
                if (ge === M || M !== null && ge === M.alternate) break t;
                ge = $i(ge), M = $i(M);
              }
              ge = null;
            }
            else ge = null;
            de !== null && Ru(X, G, de, ge, !1), ve !== null && ct !== null && Ru(X, ct, ve, ge, !0);
          }
        }
        e: {
          if (G = R ? Ii(R) : window, de = G.nodeName && G.nodeName.toLowerCase(), de === "select" || de === "input" && G.type === "file") var xe = Mh;
          else if (du(G)) if (hu) xe = Rh;
          else {
            xe = Ph;
            var Ce = Th;
          }
          else (de = G.nodeName) && de.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (xe = Ah);
          if (xe && (xe = xe(e, R))) {
            fu(X, xe, n, W);
            break e;
          }
          Ce && Ce(e, G, R), e === "focusout" && (Ce = G._wrapperState) && Ce.controlled && G.type === "number" && He(G, "number", G.value);
        }
        switch (Ce = R ? Ii(R) : window, e) {
          case "focusin":
            (du(Ce) || Ce.contentEditable === "true") && (Li = Ce, Ga = R, Er = null);
            break;
          case "focusout":
            Er = Ga = Li = null;
            break;
          case "mousedown":
            Wa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wa = !1, ju(X, n, W);
            break;
          case "selectionchange":
            if (Oh) break;
          case "keydown":
          case "keyup":
            ju(X, n, W);
        }
        var _e;
        if (Ba) e: {
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
        else bi ? uu(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (au && n.locale !== "ko" && (bi || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && bi && (_e = tu()) : (Gn = W, $a = "value" in Gn ? Gn.value : Gn.textContent, bi = !0)), Ce = ws(R, Pe), 0 < Ce.length && (Pe = new ru(Pe, e, null, n, W), X.push({ event: Pe, listeners: Ce }), _e ? Pe.data = _e : (_e = cu(n), _e !== null && (Pe.data = _e)))), (_e = wh ? Nh(e, n) : Eh(e, n)) && (R = ws(R, "onBeforeInput"), 0 < R.length && (W = new ru("onBeforeInput", "beforeinput", null, n, W), X.push({ event: W, listeners: R }), W.data = _e));
      }
      Pu(X, t);
    });
  }
  function Mr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ws(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Pt(e, n), o != null && i.unshift(Mr(e, o, l)), o = Pt(e, t), o != null && i.push(Mr(e, o, l))), e = e.return;
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
  function Ru(e, t, n, i, l) {
    for (var o = t._reactName, f = []; n !== null && n !== i; ) {
      var y = n, g = y.alternate, R = y.stateNode;
      if (g !== null && g === i) break;
      y.tag === 5 && R !== null && (y = R, l ? (g = Pt(n, o), g != null && f.unshift(Mr(n, g, y))) : l || (g = Pt(n, o), g != null && f.push(Mr(n, g, y)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Dh = /\r\n?/g, zh = /\u0000|\uFFFD/g;
  function bu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dh, `
`).replace(zh, "");
  }
  function Ns(e, t, n) {
    if (t = bu(t), bu(e) !== t && n) throw Error(u(425));
  }
  function Es() {
  }
  var qa = null, el = null;
  function tl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var nl = typeof setTimeout == "function" ? setTimeout : void 0, Vh = typeof clearTimeout == "function" ? clearTimeout : void 0, Lu = typeof Promise == "function" ? Promise : void 0, Bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lu < "u" ? function(e) {
    return Lu.resolve(null).then(e).catch(Kh);
  } : nl;
  function Kh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function il(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), yr(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    yr(t);
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
  function Ou(e) {
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
  var Fi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Fi, Tr = "__reactProps$" + Fi, Pn = "__reactContainer$" + Fi, rl = "__reactEvents$" + Fi, Hh = "__reactListeners$" + Fi, Uh = "__reactHandles$" + Fi;
  function fi(e) {
    var t = e[gn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pn] || n[gn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ou(e); e !== null; ) {
          if (n = e[gn]) return n;
          e = Ou(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Pr(e) {
    return e = e[gn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ii(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Cs(e) {
    return e[Tr] || null;
  }
  var sl = [], Di = -1;
  function Yn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Di || (e.current = sl[Di], sl[Di] = null, Di--);
  }
  function qe(e, t) {
    Di++, sl[Di] = e.current, e.current = t;
  }
  var Jn = {}, Et = Yn(Jn), Lt = Yn(!1), hi = Jn;
  function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function _s() {
    nt(Lt), nt(Et);
  }
  function $u(e, t, n) {
    if (Et.current !== Jn) throw Error(u(168));
    qe(Et, t), qe(Lt, n);
  }
  function Fu(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(u(108, K(e) || "Unknown", l));
    return Z({}, n, i);
  }
  function Ms(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, hi = Et.current, qe(Et, e), qe(Lt, Lt.current), !0;
  }
  function Iu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(u(169));
    n ? (e = Fu(e, t, hi), i.__reactInternalMemoizedMergedChildContext = e, nt(Lt), nt(Et), qe(Et, e)) : nt(Lt), qe(Lt, n);
  }
  var An = null, Ts = !1, al = !1;
  function Du(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Gh(e) {
    Ts = !0, Du(e);
  }
  function Xn() {
    if (!al && An !== null) {
      al = !0;
      var e = 0, t = Ge;
      try {
        var n = An;
        for (Ge = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        An = null, Ts = !1;
      } catch (l) {
        throw An !== null && (An = An.slice(e + 1)), Mn(ot, Xn), l;
      } finally {
        Ge = t, al = !1;
      }
    }
    return null;
  }
  var Vi = [], Bi = 0, Ps = null, As = 0, Xt = [], Zt = 0, mi = null, Rn = 1, bn = "";
  function pi(e, t) {
    Vi[Bi++] = As, Vi[Bi++] = Ps, Ps = e, As = t;
  }
  function zu(e, t, n) {
    Xt[Zt++] = Rn, Xt[Zt++] = bn, Xt[Zt++] = mi, mi = e;
    var i = Rn;
    e = bn;
    var l = 32 - an(i) - 1;
    i &= ~(1 << l), n += 1;
    var o = 32 - an(t) + l;
    if (30 < o) {
      var f = l - l % 5;
      o = (i & (1 << f) - 1).toString(32), i >>= f, l -= f, Rn = 1 << 32 - an(t) + l | n << l | i, bn = o + e;
    } else Rn = 1 << o | n << l | i, bn = e;
  }
  function ll(e) {
    e.return !== null && (pi(e, 1), zu(e, 1, 0));
  }
  function ol(e) {
    for (; e === Ps; ) Ps = Vi[--Bi], Vi[Bi] = null, As = Vi[--Bi], Vi[Bi] = null;
    for (; e === mi; ) mi = Xt[--Zt], Xt[Zt] = null, bn = Xt[--Zt], Xt[Zt] = null, Rn = Xt[--Zt], Xt[Zt] = null;
  }
  var Kt = null, Ht = null, st = !1, on = null;
  function Vu(e, t) {
    var n = nn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Bu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = Qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Kt = e, Ht = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mi !== null ? { id: Rn, overflow: bn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Kt = e, Ht = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ul(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function cl(e) {
    if (st) {
      var t = Ht;
      if (t) {
        var n = t;
        if (!Bu(e, t)) {
          if (ul(e)) throw Error(u(418));
          t = Qn(n.nextSibling);
          var i = Kt;
          t && Bu(e, t) ? Vu(i, n) : (e.flags = e.flags & -4097 | 2, st = !1, Kt = e);
        }
      } else {
        if (ul(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, st = !1, Kt = e;
      }
    }
  }
  function Ku(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Kt = e;
  }
  function Rs(e) {
    if (e !== Kt) return !1;
    if (!st) return Ku(e), st = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !tl(e.type, e.memoizedProps)), t && (t = Ht)) {
      if (ul(e)) throw Hu(), Error(u(418));
      for (; t; ) Vu(e, t), t = Qn(t.nextSibling);
    }
    if (Ku(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ht = Qn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ht = null;
      }
    } else Ht = Kt ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Hu() {
    for (var e = Ht; e; ) e = Qn(e.nextSibling);
  }
  function Ki() {
    Ht = Kt = null, st = !1;
  }
  function dl(e) {
    on === null ? on = [e] : on.push(e);
  }
  var Wh = I.ReactCurrentBatchConfig;
  function Ar(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(u(147, e));
        var l = i, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(f) {
          var y = l.refs;
          f === null ? delete y[o] : y[o] = f;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function bs(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Uu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Gu(e) {
    function t(M, x) {
      if (e) {
        var P = M.deletions;
        P === null ? (M.deletions = [x], M.flags |= 16) : P.push(x);
      }
    }
    function n(M, x) {
      if (!e) return null;
      for (; x !== null; ) t(M, x), x = x.sibling;
      return null;
    }
    function i(M, x) {
      for (M = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? M.set(x.key, x) : M.set(x.index, x), x = x.sibling;
      return M;
    }
    function l(M, x) {
      return M = si(M, x), M.index = 0, M.sibling = null, M;
    }
    function o(M, x, P) {
      return M.index = P, e ? (P = M.alternate, P !== null ? (P = P.index, P < x ? (M.flags |= 2, x) : P) : (M.flags |= 2, x)) : (M.flags |= 1048576, x);
    }
    function f(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function y(M, x, P, q) {
      return x === null || x.tag !== 6 ? (x = no(P, M.mode, q), x.return = M, x) : (x = l(x, P), x.return = M, x);
    }
    function g(M, x, P, q) {
      var xe = P.type;
      return xe === C ? W(M, x, P.props.children, q, P.key) : x !== null && (x.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ae && Uu(xe) === x.type) ? (q = l(x, P.props), q.ref = Ar(M, x, P), q.return = M, q) : (q = ia(P.type, P.key, P.props, null, M.mode, q), q.ref = Ar(M, x, P), q.return = M, q);
    }
    function R(M, x, P, q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== P.containerInfo || x.stateNode.implementation !== P.implementation ? (x = io(P, M.mode, q), x.return = M, x) : (x = l(x, P.children || []), x.return = M, x);
    }
    function W(M, x, P, q, xe) {
      return x === null || x.tag !== 7 ? (x = wi(P, M.mode, q, xe), x.return = M, x) : (x = l(x, P), x.return = M, x);
    }
    function X(M, x, P) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = no("" + x, M.mode, P), x.return = M, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Q:
            return P = ia(x.type, x.key, x.props, null, M.mode, P), P.ref = Ar(M, null, x), P.return = M, P;
          case B:
            return x = io(x, M.mode, P), x.return = M, x;
          case ae:
            var q = x._init;
            return X(M, q(x._payload), P);
        }
        if (Qe(x) || ie(x)) return x = wi(x, M.mode, P, null), x.return = M, x;
        bs(M, x);
      }
      return null;
    }
    function G(M, x, P, q) {
      var xe = x !== null ? x.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return xe !== null ? null : y(M, x, "" + P, q);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Q:
            return P.key === xe ? g(M, x, P, q) : null;
          case B:
            return P.key === xe ? R(M, x, P, q) : null;
          case ae:
            return xe = P._init, G(
              M,
              x,
              xe(P._payload),
              q
            );
        }
        if (Qe(P) || ie(P)) return xe !== null ? null : W(M, x, P, q, null);
        bs(M, P);
      }
      return null;
    }
    function de(M, x, P, q, xe) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return M = M.get(P) || null, y(x, M, "" + q, xe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case Q:
            return M = M.get(q.key === null ? P : q.key) || null, g(x, M, q, xe);
          case B:
            return M = M.get(q.key === null ? P : q.key) || null, R(x, M, q, xe);
          case ae:
            var Ce = q._init;
            return de(M, x, P, Ce(q._payload), xe);
        }
        if (Qe(q) || ie(q)) return M = M.get(P) || null, W(x, M, q, xe, null);
        bs(x, q);
      }
      return null;
    }
    function ve(M, x, P, q) {
      for (var xe = null, Ce = null, _e = x, Pe = x = 0, yt = null; _e !== null && Pe < P.length; Pe++) {
        _e.index > Pe ? (yt = _e, _e = null) : yt = _e.sibling;
        var Be = G(M, _e, P[Pe], q);
        if (Be === null) {
          _e === null && (_e = yt);
          break;
        }
        e && _e && Be.alternate === null && t(M, _e), x = o(Be, x, Pe), Ce === null ? xe = Be : Ce.sibling = Be, Ce = Be, _e = yt;
      }
      if (Pe === P.length) return n(M, _e), st && pi(M, Pe), xe;
      if (_e === null) {
        for (; Pe < P.length; Pe++) _e = X(M, P[Pe], q), _e !== null && (x = o(_e, x, Pe), Ce === null ? xe = _e : Ce.sibling = _e, Ce = _e);
        return st && pi(M, Pe), xe;
      }
      for (_e = i(M, _e); Pe < P.length; Pe++) yt = de(_e, M, Pe, P[Pe], q), yt !== null && (e && yt.alternate !== null && _e.delete(yt.key === null ? Pe : yt.key), x = o(yt, x, Pe), Ce === null ? xe = yt : Ce.sibling = yt, Ce = yt);
      return e && _e.forEach(function(ai) {
        return t(M, ai);
      }), st && pi(M, Pe), xe;
    }
    function ge(M, x, P, q) {
      var xe = ie(P);
      if (typeof xe != "function") throw Error(u(150));
      if (P = xe.call(P), P == null) throw Error(u(151));
      for (var Ce = xe = null, _e = x, Pe = x = 0, yt = null, Be = P.next(); _e !== null && !Be.done; Pe++, Be = P.next()) {
        _e.index > Pe ? (yt = _e, _e = null) : yt = _e.sibling;
        var ai = G(M, _e, Be.value, q);
        if (ai === null) {
          _e === null && (_e = yt);
          break;
        }
        e && _e && ai.alternate === null && t(M, _e), x = o(ai, x, Pe), Ce === null ? xe = ai : Ce.sibling = ai, Ce = ai, _e = yt;
      }
      if (Be.done) return n(
        M,
        _e
      ), st && pi(M, Pe), xe;
      if (_e === null) {
        for (; !Be.done; Pe++, Be = P.next()) Be = X(M, Be.value, q), Be !== null && (x = o(Be, x, Pe), Ce === null ? xe = Be : Ce.sibling = Be, Ce = Be);
        return st && pi(M, Pe), xe;
      }
      for (_e = i(M, _e); !Be.done; Pe++, Be = P.next()) Be = de(_e, M, Pe, Be.value, q), Be !== null && (e && Be.alternate !== null && _e.delete(Be.key === null ? Pe : Be.key), x = o(Be, x, Pe), Ce === null ? xe = Be : Ce.sibling = Be, Ce = Be);
      return e && _e.forEach(function(Cm) {
        return t(M, Cm);
      }), st && pi(M, Pe), xe;
    }
    function ct(M, x, P, q) {
      if (typeof P == "object" && P !== null && P.type === C && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Q:
            e: {
              for (var xe = P.key, Ce = x; Ce !== null; ) {
                if (Ce.key === xe) {
                  if (xe = P.type, xe === C) {
                    if (Ce.tag === 7) {
                      n(M, Ce.sibling), x = l(Ce, P.props.children), x.return = M, M = x;
                      break e;
                    }
                  } else if (Ce.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ae && Uu(xe) === Ce.type) {
                    n(M, Ce.sibling), x = l(Ce, P.props), x.ref = Ar(M, Ce, P), x.return = M, M = x;
                    break e;
                  }
                  n(M, Ce);
                  break;
                } else t(M, Ce);
                Ce = Ce.sibling;
              }
              P.type === C ? (x = wi(P.props.children, M.mode, q, P.key), x.return = M, M = x) : (q = ia(P.type, P.key, P.props, null, M.mode, q), q.ref = Ar(M, x, P), q.return = M, M = q);
            }
            return f(M);
          case B:
            e: {
              for (Ce = P.key; x !== null; ) {
                if (x.key === Ce) if (x.tag === 4 && x.stateNode.containerInfo === P.containerInfo && x.stateNode.implementation === P.implementation) {
                  n(M, x.sibling), x = l(x, P.children || []), x.return = M, M = x;
                  break e;
                } else {
                  n(M, x);
                  break;
                }
                else t(M, x);
                x = x.sibling;
              }
              x = io(P, M.mode, q), x.return = M, M = x;
            }
            return f(M);
          case ae:
            return Ce = P._init, ct(M, x, Ce(P._payload), q);
        }
        if (Qe(P)) return ve(M, x, P, q);
        if (ie(P)) return ge(M, x, P, q);
        bs(M, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, x !== null && x.tag === 6 ? (n(M, x.sibling), x = l(x, P), x.return = M, M = x) : (n(M, x), x = no(P, M.mode, q), x.return = M, M = x), f(M)) : n(M, x);
    }
    return ct;
  }
  var Hi = Gu(!0), Wu = Gu(!1), Ls = Yn(null), Os = null, Ui = null, fl = null;
  function hl() {
    fl = Ui = Os = null;
  }
  function ml(e) {
    var t = Ls.current;
    nt(Ls), e._currentValue = t;
  }
  function pl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gi(e, t) {
    Os = e, fl = Ui = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && ($t = !0), e.firstContext = null);
  }
  function qt(e) {
    var t = e._currentValue;
    if (fl !== e) if (e = { context: e, memoizedValue: t, next: null }, Ui === null) {
      if (Os === null) throw Error(u(308));
      Ui = e, Os.dependencies = { lanes: 0, firstContext: e };
    } else Ui = Ui.next = e;
    return t;
  }
  var vi = null;
  function vl(e) {
    vi === null ? vi = [e] : vi.push(e);
  }
  function Qu(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, vl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ln(e, i);
  }
  function Ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zn = !1;
  function kl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Yu(e, t) {
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
    return l = i.interleaved, l === null ? (t.next = t, vl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Ln(e, n);
  }
  function $s(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Aa(e, n);
    }
  }
  function Ju(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = f : o = o.next = f, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: i.shared, effects: i.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Fs(e, t, n, i) {
    var l = e.updateQueue;
    Zn = !1;
    var o = l.firstBaseUpdate, f = l.lastBaseUpdate, y = l.shared.pending;
    if (y !== null) {
      l.shared.pending = null;
      var g = y, R = g.next;
      g.next = null, f === null ? o = R : f.next = R, f = g;
      var W = e.alternate;
      W !== null && (W = W.updateQueue, y = W.lastBaseUpdate, y !== f && (y === null ? W.firstBaseUpdate = R : y.next = R, W.lastBaseUpdate = g));
    }
    if (o !== null) {
      var X = l.baseState;
      f = 0, W = R = g = null, y = o;
      do {
        var G = y.lane, de = y.eventTime;
        if ((i & G) === G) {
          W !== null && (W = W.next = {
            eventTime: de,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var ve = e, ge = y;
            switch (G = t, de = n, ge.tag) {
              case 1:
                if (ve = ge.payload, typeof ve == "function") {
                  X = ve.call(de, X, G);
                  break e;
                }
                X = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ge.payload, G = typeof ve == "function" ? ve.call(de, X, G) : ve, G == null) break e;
                X = Z({}, X, G);
                break e;
              case 2:
                Zn = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, G = l.effects, G === null ? l.effects = [y] : G.push(y));
        } else de = { eventTime: de, lane: G, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, W === null ? (R = W = de, g = X) : W = W.next = de, f |= G;
        if (y = y.next, y === null) {
          if (y = l.shared.pending, y === null) break;
          G = y, y = G.next, G.next = null, l.lastBaseUpdate = G, l.shared.pending = null;
        }
      } while (!0);
      if (W === null && (g = X), l.baseState = g, l.firstBaseUpdate = R, l.lastBaseUpdate = W, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      gi |= f, e.lanes = f, e.memoizedState = X;
    }
  }
  function Xu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(u(191, l));
        l.call(i);
      }
    }
  }
  var Rr = {}, xn = Yn(Rr), br = Yn(Rr), Lr = Yn(Rr);
  function ki(e) {
    if (e === Rr) throw Error(u(174));
    return e;
  }
  function yl(e, t) {
    switch (qe(Lr, t), qe(br, e), qe(xn, Rr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gt(t, e);
    }
    nt(xn), qe(xn, t);
  }
  function Wi() {
    nt(xn), nt(br), nt(Lr);
  }
  function Zu(e) {
    ki(Lr.current);
    var t = ki(xn.current), n = Gt(t, e.type);
    t !== n && (qe(br, e), qe(xn, n));
  }
  function gl(e) {
    br.current === e && (nt(xn), nt(br));
  }
  var at = Yn(0);
  function Is(e) {
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
  var xl = [];
  function jl() {
    for (var e = 0; e < xl.length; e++) xl[e]._workInProgressVersionPrimary = null;
    xl.length = 0;
  }
  var Ds = I.ReactCurrentDispatcher, Sl = I.ReactCurrentBatchConfig, yi = 0, lt = null, ht = null, vt = null, zs = !1, Or = !1, $r = 0, Qh = 0;
  function Ct() {
    throw Error(u(321));
  }
  function wl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ln(e[n], t[n])) return !1;
    return !0;
  }
  function Nl(e, t, n, i, l, o) {
    if (yi = o, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ds.current = e === null || e.memoizedState === null ? Zh : qh, e = n(i, l), Or) {
      o = 0;
      do {
        if (Or = !1, $r = 0, 25 <= o) throw Error(u(301));
        o += 1, vt = ht = null, t.updateQueue = null, Ds.current = em, e = n(i, l);
      } while (Or);
    }
    if (Ds.current = Ks, t = ht !== null && ht.next !== null, yi = 0, vt = ht = lt = null, zs = !1, t) throw Error(u(300));
    return e;
  }
  function El() {
    var e = $r !== 0;
    return $r = 0, e;
  }
  function jn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return vt === null ? lt.memoizedState = vt = e : vt = vt.next = e, vt;
  }
  function en() {
    if (ht === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ht.next;
    var t = vt === null ? lt.memoizedState : vt.next;
    if (t !== null) vt = t, ht = e;
    else {
      if (e === null) throw Error(u(310));
      ht = e, e = { memoizedState: ht.memoizedState, baseState: ht.baseState, baseQueue: ht.baseQueue, queue: ht.queue, next: null }, vt === null ? lt.memoizedState = vt = e : vt = vt.next = e;
    }
    return vt;
  }
  function Fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Cl(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var i = ht, l = i.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = o.next, o.next = f;
      }
      i.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, i = i.baseState;
      var y = f = null, g = null, R = o;
      do {
        var W = R.lane;
        if ((yi & W) === W) g !== null && (g = g.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), i = R.hasEagerState ? R.eagerState : e(i, R.action);
        else {
          var X = {
            lane: W,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          g === null ? (y = g = X, f = i) : g = g.next = X, lt.lanes |= W, gi |= W;
        }
        R = R.next;
      } while (R !== null && R !== o);
      g === null ? f = i : g.next = y, ln(i, t.memoizedState) || ($t = !0), t.memoizedState = i, t.baseState = f, t.baseQueue = g, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, lt.lanes |= o, gi |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function _l(e) {
    var t = en(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        o = e(o, f.action), f = f.next;
      while (f !== l);
      ln(o, t.memoizedState) || ($t = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, i];
  }
  function qu() {
  }
  function ec(e, t) {
    var n = lt, i = en(), l = t(), o = !ln(i.memoizedState, l);
    if (o && (i.memoizedState = l, $t = !0), i = i.queue, Ml(ic.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || vt !== null && vt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ir(9, nc.bind(null, n, i, l, t), void 0, null), kt === null) throw Error(u(349));
      (yi & 30) !== 0 || tc(n, t, l);
    }
    return l;
  }
  function tc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function nc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, rc(t) && sc(e);
  }
  function ic(e, t, n) {
    return n(function() {
      rc(t) && sc(e);
    });
  }
  function rc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ln(e, n);
    } catch {
      return !0;
    }
  }
  function sc(e) {
    var t = Ln(e, 1);
    t !== null && fn(t, e, 1, -1);
  }
  function ac(e) {
    var t = jn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xh.bind(null, lt, e), [t.memoizedState, e];
  }
  function Ir(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function lc() {
    return en().memoizedState;
  }
  function Vs(e, t, n, i) {
    var l = jn();
    lt.flags |= e, l.memoizedState = Ir(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Bs(e, t, n, i) {
    var l = en();
    i = i === void 0 ? null : i;
    var o = void 0;
    if (ht !== null) {
      var f = ht.memoizedState;
      if (o = f.destroy, i !== null && wl(i, f.deps)) {
        l.memoizedState = Ir(t, n, o, i);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Ir(1 | t, n, o, i);
  }
  function oc(e, t) {
    return Vs(8390656, 8, e, t);
  }
  function Ml(e, t) {
    return Bs(2048, 8, e, t);
  }
  function uc(e, t) {
    return Bs(4, 2, e, t);
  }
  function cc(e, t) {
    return Bs(4, 4, e, t);
  }
  function dc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function fc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Bs(4, 4, dc.bind(null, t, e), n);
  }
  function Tl() {
  }
  function hc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && wl(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function mc(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && wl(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function pc(e, t, n) {
    return (yi & 21) === 0 ? (e.baseState && (e.baseState = !1, $t = !0), e.memoizedState = n) : (ln(n, t) || (n = Uo(), lt.lanes |= n, gi |= n, e.baseState = !0), t);
  }
  function Yh(e, t) {
    var n = Ge;
    Ge = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = Sl.transition;
    Sl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ge = n, Sl.transition = i;
    }
  }
  function vc() {
    return en().memoizedState;
  }
  function Jh(e, t, n) {
    var i = ii(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, kc(e)) yc(t, n);
    else if (n = Qu(e, t, n, i), n !== null) {
      var l = Rt();
      fn(n, e, i, l), gc(n, t, i);
    }
  }
  function Xh(e, t, n) {
    var i = ii(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (kc(e)) yc(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var f = t.lastRenderedState, y = o(f, n);
        if (l.hasEagerState = !0, l.eagerState = y, ln(y, f)) {
          var g = t.interleaved;
          g === null ? (l.next = l, vl(t)) : (l.next = g.next, g.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = Qu(e, t, l, i), n !== null && (l = Rt(), fn(n, e, i, l), gc(n, t, i));
    }
  }
  function kc(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function yc(e, t) {
    Or = zs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function gc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Aa(e, n);
    }
  }
  var Ks = { readContext: qt, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, Zh = { readContext: qt, useCallback: function(e, t) {
    return jn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: qt, useEffect: oc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vs(
      4194308,
      4,
      dc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Vs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Vs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = jn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = jn();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = Jh.bind(null, lt, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = jn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ac, useDebugValue: Tl, useDeferredValue: function(e) {
    return jn().memoizedState = e;
  }, useTransition: function() {
    var e = ac(!1), t = e[0];
    return e = Yh.bind(null, e[1]), jn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = lt, l = jn();
    if (st) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), kt === null) throw Error(u(349));
      (yi & 30) !== 0 || tc(i, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, oc(ic.bind(
      null,
      i,
      o,
      e
    ), [e]), i.flags |= 2048, Ir(9, nc.bind(null, i, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = jn(), t = kt.identifierPrefix;
    if (st) {
      var n = bn, i = Rn;
      n = (i & ~(1 << 32 - an(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Qh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, qh = {
    readContext: qt,
    useCallback: hc,
    useContext: qt,
    useEffect: Ml,
    useImperativeHandle: fc,
    useInsertionEffect: uc,
    useLayoutEffect: cc,
    useMemo: mc,
    useReducer: Cl,
    useRef: lc,
    useState: function() {
      return Cl(Fr);
    },
    useDebugValue: Tl,
    useDeferredValue: function(e) {
      var t = en();
      return pc(t, ht.memoizedState, e);
    },
    useTransition: function() {
      var e = Cl(Fr)[0], t = en().memoizedState;
      return [e, t];
    },
    useMutableSource: qu,
    useSyncExternalStore: ec,
    useId: vc,
    unstable_isNewReconciler: !1
  }, em = { readContext: qt, useCallback: hc, useContext: qt, useEffect: Ml, useImperativeHandle: fc, useInsertionEffect: uc, useLayoutEffect: cc, useMemo: mc, useReducer: _l, useRef: lc, useState: function() {
    return _l(Fr);
  }, useDebugValue: Tl, useDeferredValue: function(e) {
    var t = en();
    return ht === null ? t.memoizedState = e : pc(t, ht.memoizedState, e);
  }, useTransition: function() {
    var e = _l(Fr)[0], t = en().memoizedState;
    return [e, t];
  }, useMutableSource: qu, useSyncExternalStore: ec, useId: vc, unstable_isNewReconciler: !1 };
  function un(e, t) {
    if (e && e.defaultProps) {
      t = Z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Pl(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Hs = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = Rt(), l = ii(e), o = On(i, l);
    o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (fn(t, e, l, i), $s(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = Rt(), l = ii(e), o = On(i, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = qn(e, o, l), t !== null && (fn(t, e, l, i), $s(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Rt(), i = ii(e), l = On(n, i);
    l.tag = 2, t != null && (l.callback = t), t = qn(e, l, i), t !== null && (fn(t, e, i, n), $s(t, e, i));
  } };
  function xc(e, t, n, i, l, o, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, o, f) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, i) || !Nr(l, o) : !0;
  }
  function jc(e, t, n) {
    var i = !1, l = Jn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = qt(o) : (l = Ot(t) ? hi : Et.current, i = t.contextTypes, o = (i = i != null) ? zi(e, l) : Jn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hs, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Sc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
  }
  function Al(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, kl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = qt(o) : (o = Ot(t) ? hi : Et.current, l.context = zi(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Pl(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Hs.enqueueReplaceState(l, l.state, null), Fs(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qi(e, t) {
    try {
      var n = "", i = t;
      do
        n += U(i), i = i.return;
      while (i);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Rl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var tm = typeof WeakMap == "function" ? WeakMap : Map;
  function wc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      Xs || (Xs = !0, Ql = i), bl(e, t);
    }, n;
  }
  function Nc(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        bl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      bl(e, t), typeof i != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Ec(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new tm();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = pm.bind(null, e, t, n), t.then(e, e));
  }
  function Cc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function _c(e, t, n, i, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var nm = I.ReactCurrentOwner, $t = !1;
  function At(e, t, n, i) {
    t.child = e === null ? Wu(t, null, n, i) : Hi(t, e.child, n, i);
  }
  function Mc(e, t, n, i, l) {
    n = n.render;
    var o = t.ref;
    return Gi(t, l), i = Nl(e, t, n, i, o, l), n = El(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (st && n && ll(t), t.flags |= 1, At(e, t, i, l), t.child);
  }
  function Tc(e, t, n, i, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !to(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Pc(e, t, o, i, l)) : (e = ia(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var f = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Nr, n(f, i) && e.ref === t.ref) return $n(e, t, l);
    }
    return t.flags |= 1, e = si(o, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pc(e, t, n, i, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Nr(o, i) && e.ref === t.ref) if ($t = !1, t.pendingProps = i = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && ($t = !0);
      else return t.lanes = e.lanes, $n(e, t, l);
    }
    return Ll(e, t, n, i, l);
  }
  function Ac(e, t, n) {
    var i = t.pendingProps, l = i.children, o = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Ji, Ut), Ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(Ji, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = o !== null ? o.baseLanes : n, qe(Ji, Ut), Ut |= i;
    }
    else o !== null ? (i = o.baseLanes | n, t.memoizedState = null) : i = n, qe(Ji, Ut), Ut |= i;
    return At(e, t, l, n), t.child;
  }
  function Rc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ll(e, t, n, i, l) {
    var o = Ot(n) ? hi : Et.current;
    return o = zi(t, o), Gi(t, l), n = Nl(e, t, n, i, o, l), i = El(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $n(e, t, l)) : (st && i && ll(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function bc(e, t, n, i, l) {
    if (Ot(n)) {
      var o = !0;
      Ms(t);
    } else o = !1;
    if (Gi(t, l), t.stateNode === null) Gs(e, t), jc(t, n, i), Al(t, n, i, l), i = !0;
    else if (e === null) {
      var f = t.stateNode, y = t.memoizedProps;
      f.props = y;
      var g = f.context, R = n.contextType;
      typeof R == "object" && R !== null ? R = qt(R) : (R = Ot(n) ? hi : Et.current, R = zi(t, R));
      var W = n.getDerivedStateFromProps, X = typeof W == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      X || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== i || g !== R) && Sc(t, f, i, R), Zn = !1;
      var G = t.memoizedState;
      f.state = G, Fs(t, i, f, l), g = t.memoizedState, y !== i || G !== g || Lt.current || Zn ? (typeof W == "function" && (Pl(t, n, W, i), g = t.memoizedState), (y = Zn || xc(t, n, y, i, G, g, R)) ? (X || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = g), f.props = i, f.state = g, f.context = R, i = y) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Yu(e, t), y = t.memoizedProps, R = t.type === t.elementType ? y : un(t.type, y), f.props = R, X = t.pendingProps, G = f.context, g = n.contextType, typeof g == "object" && g !== null ? g = qt(g) : (g = Ot(n) ? hi : Et.current, g = zi(t, g));
      var de = n.getDerivedStateFromProps;
      (W = typeof de == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== X || G !== g) && Sc(t, f, i, g), Zn = !1, G = t.memoizedState, f.state = G, Fs(t, i, f, l);
      var ve = t.memoizedState;
      y !== X || G !== ve || Lt.current || Zn ? (typeof de == "function" && (Pl(t, n, de, i), ve = t.memoizedState), (R = Zn || xc(t, n, R, i, G, ve, g) || !1) ? (W || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, ve, g), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, ve, g)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), f.props = i, f.state = ve, f.context = g, i = R) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Ol(e, t, n, i, o, l);
  }
  function Ol(e, t, n, i, l, o) {
    Rc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!i && !f) return l && Iu(t, n, !1), $n(e, t, o);
    i = t.stateNode, nm.current = t;
    var y = f && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && f ? (t.child = Hi(t, e.child, null, o), t.child = Hi(t, null, y, o)) : At(e, t, y, o), t.memoizedState = i.state, l && Iu(t, n, !0), t.child;
  }
  function Lc(e) {
    var t = e.stateNode;
    t.pendingContext ? $u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $u(e, t.context, !1), yl(e, t.containerInfo);
  }
  function Oc(e, t, n, i, l) {
    return Ki(), dl(l), t.flags |= 256, At(e, t, n, i), t.child;
  }
  var $l = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function $c(e, t, n) {
    var i = t.pendingProps, l = at.current, o = !1, f = (t.flags & 128) !== 0, y;
    if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), y ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), qe(at, l & 1), e === null)
      return cl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, f = { mode: "hidden", children: f }, (i & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = f) : o = ra(f, i, 0, null), e = wi(e, i, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Fl(n), t.memoizedState = $l, e) : Il(t, f));
    if (l = e.memoizedState, l !== null && (y = l.dehydrated, y !== null)) return im(e, t, f, i, y, l, n);
    if (o) {
      o = i.fallback, f = t.mode, l = e.child, y = l.sibling;
      var g = { mode: "hidden", children: i.children };
      return (f & 1) === 0 && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = g, t.deletions = null) : (i = si(l, g), i.subtreeFlags = l.subtreeFlags & 14680064), y !== null ? o = si(y, o) : (o = wi(o, f, n, null), o.flags |= 2), o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, f = e.child.memoizedState, f = f === null ? Fl(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, o.memoizedState = f, o.childLanes = e.childLanes & ~n, t.memoizedState = $l, i;
    }
    return o = e.child, e = o.sibling, i = si(o, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Il(e, t) {
    return t = ra({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Us(e, t, n, i) {
    return i !== null && dl(i), Hi(t, e.child, null, n), e = Il(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function im(e, t, n, i, l, o, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = Rl(Error(u(422))), Us(e, t, f, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = i.fallback, l = t.mode, i = ra({ mode: "visible", children: i.children }, l, 0, null), o = wi(o, l, f, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, (t.mode & 1) !== 0 && Hi(t, e.child, null, f), t.child.memoizedState = Fl(f), t.memoizedState = $l, o);
    if ((t.mode & 1) === 0) return Us(e, t, f, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var y = i.dgst;
      return i = y, o = Error(u(419)), i = Rl(o, i, void 0), Us(e, t, f, i);
    }
    if (y = (f & e.childLanes) !== 0, $t || y) {
      if (i = kt, i !== null) {
        switch (f & -f) {
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
        l = (l & (i.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ln(e, l), fn(i, e, l, -1));
      }
      return eo(), i = Rl(Error(u(421))), Us(e, t, f, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ht = Qn(l.nextSibling), Kt = t, st = !0, on = null, e !== null && (Xt[Zt++] = Rn, Xt[Zt++] = bn, Xt[Zt++] = mi, Rn = e.id, bn = e.overflow, mi = t), t = Il(t, i.children), t.flags |= 4096, t);
  }
  function Fc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), pl(e.return, t, n);
  }
  function Dl(e, t, n, i, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = n, o.tailMode = l);
  }
  function Ic(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, o = i.tail;
    if (At(e, t, i.children, n), i = at.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fc(e, n, t);
        else if (e.tag === 19) Fc(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Is(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Dl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Is(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Dl(t, !0, n, null, o);
        break;
      case "together":
        Dl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function $n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), gi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rm(e, t, n) {
    switch (t.tag) {
      case 3:
        Lc(t), Ki();
        break;
      case 5:
        Zu(t);
        break;
      case 1:
        Ot(t.type) && Ms(t);
        break;
      case 4:
        yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        qe(Ls, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? $c(e, t, n) : (qe(at, at.current & 1), e = $n(e, t, n), e !== null ? e.sibling : null);
        qe(at, at.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Ic(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), qe(at, at.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ac(e, t, n);
    }
    return $n(e, t, n);
  }
  var Dc, zl, zc, Vc;
  Dc = function(e, t) {
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
  }, zl = function() {
  }, zc = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, ki(xn.current);
      var o = null;
      switch (n) {
        case "input":
          l = ke(e, l), i = ke(e, i), o = [];
          break;
        case "select":
          l = Z({}, l, { value: void 0 }), i = Z({}, i, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = gt(e, l), i = gt(e, i), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Es);
      }
      be(n, i);
      var f;
      n = null;
      for (R in l) if (!i.hasOwnProperty(R) && l.hasOwnProperty(R) && l[R] != null) if (R === "style") {
        var y = l[R];
        for (f in y) y.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (d.hasOwnProperty(R) ? o || (o = []) : (o = o || []).push(R, null));
      for (R in i) {
        var g = i[R];
        if (y = l?.[R], i.hasOwnProperty(R) && g !== y && (g != null || y != null)) if (R === "style") if (y) {
          for (f in y) !y.hasOwnProperty(f) || g && g.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in g) g.hasOwnProperty(f) && y[f] !== g[f] && (n || (n = {}), n[f] = g[f]);
        } else n || (o || (o = []), o.push(
          R,
          n
        )), n = g;
        else R === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, y = y ? y.__html : void 0, g != null && y !== g && (o = o || []).push(R, g)) : R === "children" ? typeof g != "string" && typeof g != "number" || (o = o || []).push(R, "" + g) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (d.hasOwnProperty(R) ? (g != null && R === "onScroll" && tt("scroll", e), o || y === g || (o = [])) : (o = o || []).push(R, g));
      }
      n && (o = o || []).push("style", n);
      var R = o;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, Vc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function Dr(e, t) {
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
  function sm(e, t, n) {
    var i = t.pendingProps;
    switch (ol(t), t.tag) {
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
        return Ot(t.type) && _s(), _t(t), null;
      case 3:
        return i = t.stateNode, Wi(), nt(Lt), nt(Et), jl(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Rs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, on !== null && (Xl(on), on = null))), zl(e, t), _t(t), null;
      case 5:
        gl(t);
        var l = ki(Lr.current);
        if (n = t.type, e !== null && t.stateNode != null) zc(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(u(166));
            return _t(t), null;
          }
          if (e = ki(xn.current), Rs(t)) {
            i = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (i[gn] = t, i[Tr] = o, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < Cr.length; l++) tt(Cr[l], i);
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
                Ae(i, o), tt("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!o.multiple }, tt("invalid", i);
                break;
              case "textarea":
                Ze(i, o), tt("invalid", i);
            }
            be(n, o), l = null;
            for (var f in o) if (o.hasOwnProperty(f)) {
              var y = o[f];
              f === "children" ? typeof y == "string" ? i.textContent !== y && (o.suppressHydrationWarning !== !0 && Ns(i.textContent, y, e), l = ["children", y]) : typeof y == "number" && i.textContent !== "" + y && (o.suppressHydrationWarning !== !0 && Ns(
                i.textContent,
                y,
                e
              ), l = ["children", "" + y]) : d.hasOwnProperty(f) && y != null && f === "onScroll" && tt("scroll", i);
            }
            switch (n) {
              case "input":
                re(i), Xe(i, o, !0);
                break;
              case "textarea":
                re(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (i.onclick = Es);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = f.createElement(n, { is: i.is }) : (e = f.createElement(n), n === "select" && (f = e, i.multiple ? f.multiple = !0 : i.size && (f.size = i.size))) : e = f.createElementNS(e, n), e[gn] = t, e[Tr] = i, Dc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Re(n, i), n) {
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
                  for (l = 0; l < Cr.length; l++) tt(Cr[l], e);
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
                  Ae(e, i), l = ke(e, i), tt("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = Z({}, i, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Ze(e, i), l = gt(e, i), tt("invalid", e);
                  break;
                default:
                  l = i;
              }
              be(n, l), y = l;
              for (o in y) if (y.hasOwnProperty(o)) {
                var g = y[o];
                o === "style" ? Qt(e, g) : o === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && sn(e, g)) : o === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && Wt(e, g) : typeof g == "number" && Wt(e, "" + g) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (d.hasOwnProperty(o) ? g != null && o === "onScroll" && tt("scroll", e) : g != null && F(e, o, g, f));
              }
              switch (n) {
                case "input":
                  re(e), Xe(e, i, !1);
                  break;
                case "textarea":
                  re(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ne(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, o = i.value, o != null ? Ue(e, !!i.multiple, o, !1) : i.defaultValue != null && Ue(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Es);
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
        if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(u(166));
          if (n = ki(Lr.current), ki(xn.current), Rs(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[gn] = t, (o = i.nodeValue !== n) && (e = Kt, e !== null)) switch (e.tag) {
              case 3:
                Ns(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ns(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[gn] = t, t.stateNode = i;
        }
        return _t(t), null;
      case 13:
        if (nt(at), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (st && Ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Hu(), Ki(), t.flags |= 98560, o = !1;
          else if (o = Rs(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[gn] = t;
            } else Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _t(t), o = !1;
          } else on !== null && (Xl(on), on = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? mt === 0 && (mt = 3) : eo())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return Wi(), zl(e, t), e === null && _r(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return ml(t.type._context), _t(t), null;
      case 17:
        return Ot(t.type) && _s(), _t(t), null;
      case 19:
        if (nt(at), o = t.memoizedState, o === null) return _t(t), null;
        if (i = (t.flags & 128) !== 0, f = o.rendering, f === null) if (i) Dr(o, !1);
        else {
          if (mt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Is(e), f !== null) {
              for (t.flags |= 128, Dr(o, !1), i = f.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) o = n, e = i, o.flags &= 14680066, f = o.alternate, f === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = f.childLanes, o.lanes = f.lanes, o.child = f.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = f.memoizedProps, o.memoizedState = f.memoizedState, o.updateQueue = f.updateQueue, o.type = f.type, e = f.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return qe(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Ee() > Xi && (t.flags |= 128, i = !0, Dr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Is(f), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !st) return _t(t), null;
          } else 2 * Ee() - o.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, i = !0, Dr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (n = o.last, n !== null ? n.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ee(), t.sibling = null, n = at.current, qe(at, i ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return ql(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function am(e, t) {
    switch (ol(t), t.tag) {
      case 1:
        return Ot(t.type) && _s(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wi(), nt(Lt), nt(Et), jl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return gl(t), null;
      case 13:
        if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return nt(at), null;
      case 4:
        return Wi(), null;
      case 10:
        return ml(t.type._context), null;
      case 22:
      case 23:
        return ql(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ws = !1, Mt = !1, lm = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Yi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      ut(e, t, i);
    }
    else n.current = null;
  }
  function Vl(e, t, n) {
    try {
      n();
    } catch (i) {
      ut(e, t, i);
    }
  }
  var Bc = !1;
  function om(e, t) {
    if (qa = hs, e = xu(), Ua(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var l = i.anchorOffset, o = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, y = -1, g = -1, R = 0, W = 0, X = e, G = null;
          t: for (; ; ) {
            for (var de; X !== n || l !== 0 && X.nodeType !== 3 || (y = f + l), X !== o || i !== 0 && X.nodeType !== 3 || (g = f + i), X.nodeType === 3 && (f += X.nodeValue.length), (de = X.firstChild) !== null; )
              G = X, X = de;
            for (; ; ) {
              if (X === e) break t;
              if (G === n && ++R === l && (y = f), G === o && ++W === i && (g = f), (de = X.nextSibling) !== null) break;
              X = G, G = X.parentNode;
            }
            X = de;
          }
          n = y === -1 || g === -1 ? null : { start: y, end: g };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (el = { focusedElem: e, selectionRange: n }, hs = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
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
              var ge = ve.memoizedProps, ct = ve.memoizedState, M = t.stateNode, x = M.getSnapshotBeforeUpdate(t.elementType === t.type ? ge : un(t.type, ge), ct);
              M.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var P = t.stateNode.containerInfo;
            P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (q) {
        ut(t, t.return, q);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, me = e;
        break;
      }
      me = t.return;
    }
    return ve = Bc, Bc = !1, ve;
  }
  function zr(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && Vl(t, n, o);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Qs(e, t) {
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
  function Bl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Kc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Kc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gn], delete t[Tr], delete t[rl], delete t[Hh], delete t[Uh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Hc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Kl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Es));
    else if (i !== 4 && (e = e.child, e !== null)) for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), e = e.sibling;
  }
  function Hl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), e = e.sibling;
  }
  var St = null, cn = !1;
  function ei(e, t, n) {
    for (n = n.child; n !== null; ) Gc(e, t, n), n = n.sibling;
  }
  function Gc(e, t, n) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(ls, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Mt || Yi(n, t);
      case 6:
        var i = St, l = cn;
        St = null, ei(e, t, n), St = i, cn = l, St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
        break;
      case 18:
        St !== null && (cn ? (e = St, n = n.stateNode, e.nodeType === 8 ? il(e.parentNode, n) : e.nodeType === 1 && il(e, n), yr(e)) : il(St, n.stateNode));
        break;
      case 4:
        i = St, l = cn, St = n.stateNode.containerInfo, cn = !0, ei(e, t, n), St = i, cn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var o = l, f = o.destroy;
            o = o.tag, f !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Vl(n, t, f), l = l.next;
          } while (l !== i);
        }
        ei(e, t, n);
        break;
      case 1:
        if (!Mt && (Yi(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (y) {
          ut(n, t, y);
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
  function Wc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new lm()), t.forEach(function(i) {
        var l = km.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function dn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var o = e, f = t, y = f;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              St = y.stateNode, cn = !1;
              break e;
            case 3:
              St = y.stateNode.containerInfo, cn = !0;
              break e;
            case 4:
              St = y.stateNode.containerInfo, cn = !0;
              break e;
          }
          y = y.return;
        }
        if (St === null) throw Error(u(160));
        Gc(o, f, l), St = null, cn = !1;
        var g = l.alternate;
        g !== null && (g.return = null), l.return = null;
      } catch (R) {
        ut(l, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qc(t, e), t = t.sibling;
  }
  function Qc(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dn(t, e), Sn(e), i & 4) {
          try {
            zr(3, e, e.return), Qs(3, e);
          } catch (ge) {
            ut(e, e.return, ge);
          }
          try {
            zr(5, e, e.return);
          } catch (ge) {
            ut(e, e.return, ge);
          }
        }
        break;
      case 1:
        dn(t, e), Sn(e), i & 512 && n !== null && Yi(n, n.return);
        break;
      case 5:
        if (dn(t, e), Sn(e), i & 512 && n !== null && Yi(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Wt(l, "");
          } catch (ge) {
            ut(e, e.return, ge);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, f = n !== null ? n.memoizedProps : o, y = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null) try {
            y === "input" && o.type === "radio" && o.name != null && Me(l, o), Re(y, f);
            var R = Re(y, o);
            for (f = 0; f < g.length; f += 2) {
              var W = g[f], X = g[f + 1];
              W === "style" ? Qt(l, X) : W === "dangerouslySetInnerHTML" ? sn(l, X) : W === "children" ? Wt(l, X) : F(l, W, X, R);
            }
            switch (y) {
              case "input":
                Oe(l, o);
                break;
              case "textarea":
                Ve(l, o);
                break;
              case "select":
                var G = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var de = o.value;
                de != null ? Ue(l, !!o.multiple, de, !1) : G !== !!o.multiple && (o.defaultValue != null ? Ue(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Ue(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Tr] = o;
          } catch (ge) {
            ut(e, e.return, ge);
          }
        }
        break;
      case 6:
        if (dn(t, e), Sn(e), i & 4) {
          if (e.stateNode === null) throw Error(u(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (ge) {
            ut(e, e.return, ge);
          }
        }
        break;
      case 3:
        if (dn(t, e), Sn(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          yr(t.containerInfo);
        } catch (ge) {
          ut(e, e.return, ge);
        }
        break;
      case 4:
        dn(t, e), Sn(e);
        break;
      case 13:
        dn(t, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Wl = Ee())), i & 4 && Wc(e);
        break;
      case 22:
        if (W = n !== null && n.memoizedState !== null, e.mode & 1 ? (Mt = (R = Mt) || W, dn(t, e), Mt = R) : dn(t, e), Sn(e), i & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !W && (e.mode & 1) !== 0) for (me = e, W = e.child; W !== null; ) {
            for (X = me = W; me !== null; ) {
              switch (G = me, de = G.child, G.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, G, G.return);
                  break;
                case 1:
                  Yi(G, G.return);
                  var ve = G.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = G, n = G.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ge) {
                      ut(i, n, ge);
                    }
                  }
                  break;
                case 5:
                  Yi(G, G.return);
                  break;
                case 22:
                  if (G.memoizedState !== null) {
                    Xc(X);
                    continue;
                  }
              }
              de !== null ? (de.return = G, me = de) : Xc(X);
            }
            W = W.sibling;
          }
          e: for (W = null, X = e; ; ) {
            if (X.tag === 5) {
              if (W === null) {
                W = X;
                try {
                  l = X.stateNode, R ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (y = X.stateNode, g = X.memoizedProps.style, f = g != null && g.hasOwnProperty("display") ? g.display : null, y.style.display = we("display", f));
                } catch (ge) {
                  ut(e, e.return, ge);
                }
              }
            } else if (X.tag === 6) {
              if (W === null) try {
                X.stateNode.nodeValue = R ? "" : X.memoizedProps;
              } catch (ge) {
                ut(e, e.return, ge);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === e) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === e) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === e) break e;
              W === X && (W = null), X = X.return;
            }
            W === X && (W = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        dn(t, e), Sn(e), i & 4 && Wc(e);
        break;
      case 21:
        break;
      default:
        dn(
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
            if (Hc(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (Wt(l, ""), i.flags &= -33);
            var o = Uc(e);
            Hl(e, o, l);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo, y = Uc(e);
            Kl(e, y, f);
            break;
          default:
            throw Error(u(161));
        }
      } catch (g) {
        ut(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function um(e, t, n) {
    me = e, Yc(e);
  }
  function Yc(e, t, n) {
    for (var i = (e.mode & 1) !== 0; me !== null; ) {
      var l = me, o = l.child;
      if (l.tag === 22 && i) {
        var f = l.memoizedState !== null || Ws;
        if (!f) {
          var y = l.alternate, g = y !== null && y.memoizedState !== null || Mt;
          y = Ws;
          var R = Mt;
          if (Ws = f, (Mt = g) && !R) for (me = l; me !== null; ) f = me, g = f.child, f.tag === 22 && f.memoizedState !== null ? Zc(l) : g !== null ? (g.return = f, me = g) : Zc(l);
          for (; o !== null; ) me = o, Yc(o), o = o.sibling;
          me = l, Ws = y, Mt = R;
        }
        Jc(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, me = o) : Jc(e);
    }
  }
  function Jc(e) {
    for (; me !== null; ) {
      var t = me;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Mt || Qs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Mt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Xu(t, o, i);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Xu(t, f, n);
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
                var R = t.alternate;
                if (R !== null) {
                  var W = R.memoizedState;
                  if (W !== null) {
                    var X = W.dehydrated;
                    X !== null && yr(X);
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
              throw Error(u(163));
          }
          Mt || t.flags & 512 && Bl(t);
        } catch (G) {
          ut(t, t.return, G);
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
  function Xc(e) {
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
  function Zc(e) {
    for (; me !== null; ) {
      var t = me;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Qs(4, t);
            } catch (g) {
              ut(t, n, g);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (g) {
                ut(t, l, g);
              }
            }
            var o = t.return;
            try {
              Bl(t);
            } catch (g) {
              ut(t, o, g);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Bl(t);
            } catch (g) {
              ut(t, f, g);
            }
        }
      } catch (g) {
        ut(t, t.return, g);
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
  var cm = Math.ceil, Ys = I.ReactCurrentDispatcher, Ul = I.ReactCurrentOwner, tn = I.ReactCurrentBatchConfig, ze = 0, kt = null, ft = null, wt = 0, Ut = 0, Ji = Yn(0), mt = 0, Vr = null, gi = 0, Js = 0, Gl = 0, Br = null, Ft = null, Wl = 0, Xi = 1 / 0, Fn = null, Xs = !1, Ql = null, ti = null, Zs = !1, ni = null, qs = 0, Kr = 0, Yl = null, ea = -1, ta = 0;
  function Rt() {
    return (ze & 6) !== 0 ? Ee() : ea !== -1 ? ea : ea = Ee();
  }
  function ii(e) {
    return (e.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && wt !== 0 ? wt & -wt : Wh.transition !== null ? (ta === 0 && (ta = Uo()), ta) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : eu(e.type)), e);
  }
  function fn(e, t, n, i) {
    if (50 < Kr) throw Kr = 0, Yl = null, Error(u(185));
    hr(e, n, i), ((ze & 2) === 0 || e !== kt) && (e === kt && ((ze & 2) === 0 && (Js |= n), mt === 4 && ri(e, wt)), It(e, i), n === 1 && ze === 0 && (t.mode & 1) === 0 && (Xi = Ee() + 500, Ts && Xn()));
  }
  function It(e, t) {
    var n = e.callbackNode;
    Wf(e, t);
    var i = cs(e, e === kt ? wt : 0);
    if (i === 0) n !== null && Tn(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Tn(n), t === 1) e.tag === 0 ? Gh(ed.bind(null, e)) : Du(ed.bind(null, e)), Bh(function() {
        (ze & 6) === 0 && Xn();
      }), n = null;
      else {
        switch (Go(i)) {
          case 1:
            n = ot;
            break;
          case 4:
            n = ci;
            break;
          case 16:
            n = Vn;
            break;
          case 536870912:
            n = Ho;
            break;
          default:
            n = Vn;
        }
        n = od(n, qc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function qc(e, t) {
    if (ea = -1, ta = 0, (ze & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Zi() && e.callbackNode !== n) return null;
    var i = cs(e, e === kt ? wt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = na(e, i);
    else {
      t = i;
      var l = ze;
      ze |= 2;
      var o = nd();
      (kt !== e || wt !== t) && (Fn = null, Xi = Ee() + 500, ji(e, t));
      do
        try {
          hm();
          break;
        } catch (y) {
          td(e, y);
        }
      while (!0);
      hl(), Ys.current = o, ze = l, ft !== null ? t = 0 : (kt = null, wt = 0, t = mt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ta(e), l !== 0 && (i = l, t = Jl(e, l))), t === 1) throw n = Vr, ji(e, 0), ri(e, i), It(e, Ee()), n;
      if (t === 6) ri(e, i);
      else {
        if (l = e.current.alternate, (i & 30) === 0 && !dm(l) && (t = na(e, i), t === 2 && (o = Ta(e), o !== 0 && (i = o, t = Jl(e, o))), t === 1)) throw n = Vr, ji(e, 0), ri(e, i), It(e, Ee()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Si(e, Ft, Fn);
            break;
          case 3:
            if (ri(e, i), (i & 130023424) === i && (t = Wl + 500 - Ee(), 10 < t)) {
              if (cs(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                Rt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = nl(Si.bind(null, e, Ft, Fn), t);
              break;
            }
            Si(e, Ft, Fn);
            break;
          case 4:
            if (ri(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var f = 31 - an(i);
              o = 1 << f, f = t[f], f > l && (l = f), i &= ~o;
            }
            if (i = l, i = Ee() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * cm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = nl(Si.bind(null, e, Ft, Fn), i);
              break;
            }
            Si(e, Ft, Fn);
            break;
          case 5:
            Si(e, Ft, Fn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return It(e, Ee()), e.callbackNode === n ? qc.bind(null, e) : null;
  }
  function Jl(e, t) {
    var n = Br;
    return e.current.memoizedState.isDehydrated && (ji(e, t).flags |= 256), e = na(e, t), e !== 2 && (t = Ft, Ft = n, t !== null && Xl(t)), e;
  }
  function Xl(e) {
    Ft === null ? Ft = e : Ft.push.apply(Ft, e);
  }
  function dm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], o = l.getSnapshot;
          l = l.value;
          try {
            if (!ln(o(), l)) return !1;
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
    for (t &= ~Gl, t &= ~Js, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - an(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function ed(e) {
    if ((ze & 6) !== 0) throw Error(u(327));
    Zi();
    var t = cs(e, 0);
    if ((t & 1) === 0) return It(e, Ee()), null;
    var n = na(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Ta(e);
      i !== 0 && (t = i, n = Jl(e, i));
    }
    if (n === 1) throw n = Vr, ji(e, 0), ri(e, t), It(e, Ee()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Si(e, Ft, Fn), It(e, Ee()), null;
  }
  function Zl(e, t) {
    var n = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      ze = n, ze === 0 && (Xi = Ee() + 500, Ts && Xn());
    }
  }
  function xi(e) {
    ni !== null && ni.tag === 0 && (ze & 6) === 0 && Zi();
    var t = ze;
    ze |= 1;
    var n = tn.transition, i = Ge;
    try {
      if (tn.transition = null, Ge = 1, e) return e();
    } finally {
      Ge = i, tn.transition = n, ze = t, (ze & 6) === 0 && Xn();
    }
  }
  function ql() {
    Ut = Ji.current, nt(Ji);
  }
  function ji(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Vh(n)), ft !== null) for (n = ft.return; n !== null; ) {
      var i = n;
      switch (ol(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && _s();
          break;
        case 3:
          Wi(), nt(Lt), nt(Et), jl();
          break;
        case 5:
          gl(i);
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
          ml(i.type._context);
          break;
        case 22:
        case 23:
          ql();
      }
      n = n.return;
    }
    if (kt = e, ft = e = si(e.current, null), wt = Ut = t, mt = 0, Vr = null, Gl = Js = gi = 0, Ft = Br = null, vi !== null) {
      for (t = 0; t < vi.length; t++) if (n = vi[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, o = n.pending;
        if (o !== null) {
          var f = o.next;
          o.next = l, i.next = f;
        }
        n.pending = i;
      }
      vi = null;
    }
    return e;
  }
  function td(e, t) {
    do {
      var n = ft;
      try {
        if (hl(), Ds.current = Ks, zs) {
          for (var i = lt.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          zs = !1;
        }
        if (yi = 0, vt = ht = lt = null, Or = !1, $r = 0, Ul.current = null, n === null || n.return === null) {
          mt = 1, Vr = t, ft = null;
          break;
        }
        e: {
          var o = e, f = n.return, y = n, g = t;
          if (t = wt, y.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var R = g, W = y, X = W.tag;
            if ((W.mode & 1) === 0 && (X === 0 || X === 11 || X === 15)) {
              var G = W.alternate;
              G ? (W.updateQueue = G.updateQueue, W.memoizedState = G.memoizedState, W.lanes = G.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var de = Cc(f);
            if (de !== null) {
              de.flags &= -257, _c(de, f, y, o, t), de.mode & 1 && Ec(o, R, t), t = de, g = R;
              var ve = t.updateQueue;
              if (ve === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(g), t.updateQueue = ge;
              } else ve.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ec(o, R, t), eo();
                break e;
              }
              g = Error(u(426));
            }
          } else if (st && y.mode & 1) {
            var ct = Cc(f);
            if (ct !== null) {
              (ct.flags & 65536) === 0 && (ct.flags |= 256), _c(ct, f, y, o, t), dl(Qi(g, y));
              break e;
            }
          }
          o = g = Qi(g, y), mt !== 4 && (mt = 2), Br === null ? Br = [o] : Br.push(o), o = f;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var M = wc(o, g, t);
                Ju(o, M);
                break e;
              case 1:
                y = g;
                var x = o.type, P = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (ti === null || !ti.has(P)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var q = Nc(o, y, t);
                  Ju(o, q);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        rd(n);
      } catch (xe) {
        t = xe, ft === n && n !== null && (ft = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nd() {
    var e = Ys.current;
    return Ys.current = Ks, e === null ? Ks : e;
  }
  function eo() {
    (mt === 0 || mt === 3 || mt === 2) && (mt = 4), kt === null || (gi & 268435455) === 0 && (Js & 268435455) === 0 || ri(kt, wt);
  }
  function na(e, t) {
    var n = ze;
    ze |= 2;
    var i = nd();
    (kt !== e || wt !== t) && (Fn = null, ji(e, t));
    do
      try {
        fm();
        break;
      } catch (l) {
        td(e, l);
      }
    while (!0);
    if (hl(), ze = n, Ys.current = i, ft !== null) throw Error(u(261));
    return kt = null, wt = 0, mt;
  }
  function fm() {
    for (; ft !== null; ) id(ft);
  }
  function hm() {
    for (; ft !== null && !$(); ) id(ft);
  }
  function id(e) {
    var t = ld(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? rd(e) : ft = t, Ul.current = null;
  }
  function rd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = sm(n, t, Ut), n !== null) {
          ft = n;
          return;
        }
      } else {
        if (n = am(n, t), n !== null) {
          n.flags &= 32767, ft = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          mt = 6, ft = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ft = t;
        return;
      }
      ft = t = e;
    } while (t !== null);
    mt === 0 && (mt = 5);
  }
  function Si(e, t, n) {
    var i = Ge, l = tn.transition;
    try {
      tn.transition = null, Ge = 1, mm(e, t, n, i);
    } finally {
      tn.transition = l, Ge = i;
    }
    return null;
  }
  function mm(e, t, n, i) {
    do
      Zi();
    while (ni !== null);
    if ((ze & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Qf(e, o), e === kt && (ft = kt = null, wt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Zs || (Zs = !0, od(Vn, function() {
      return Zi(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = tn.transition, tn.transition = null;
      var f = Ge;
      Ge = 1;
      var y = ze;
      ze |= 4, Ul.current = null, om(e, n), Qc(n, e), Lh(el), hs = !!qa, el = qa = null, e.current = n, um(n), pe(), ze = y, Ge = f, tn.transition = o;
    } else e.current = n;
    if (Zs && (Zs = !1, ni = e, qs = l), o = e.pendingLanes, o === 0 && (ti = null), Bf(n.stateNode), It(e, Ee()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Xs) throw Xs = !1, e = Ql, Ql = null, e;
    return (qs & 1) !== 0 && e.tag !== 0 && Zi(), o = e.pendingLanes, (o & 1) !== 0 ? e === Yl ? Kr++ : (Kr = 0, Yl = e) : Kr = 0, Xn(), null;
  }
  function Zi() {
    if (ni !== null) {
      var e = Go(qs), t = tn.transition, n = Ge;
      try {
        if (tn.transition = null, Ge = 16 > e ? 16 : e, ni === null) var i = !1;
        else {
          if (e = ni, ni = null, qs = 0, (ze & 6) !== 0) throw Error(u(331));
          var l = ze;
          for (ze |= 4, me = e.current; me !== null; ) {
            var o = me, f = o.child;
            if ((me.flags & 16) !== 0) {
              var y = o.deletions;
              if (y !== null) {
                for (var g = 0; g < y.length; g++) {
                  var R = y[g];
                  for (me = R; me !== null; ) {
                    var W = me;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zr(8, W, o);
                    }
                    var X = W.child;
                    if (X !== null) X.return = W, me = X;
                    else for (; me !== null; ) {
                      W = me;
                      var G = W.sibling, de = W.return;
                      if (Kc(W), W === R) {
                        me = null;
                        break;
                      }
                      if (G !== null) {
                        G.return = de, me = G;
                        break;
                      }
                      me = de;
                    }
                  }
                }
                var ve = o.alternate;
                if (ve !== null) {
                  var ge = ve.child;
                  if (ge !== null) {
                    ve.child = null;
                    do {
                      var ct = ge.sibling;
                      ge.sibling = null, ge = ct;
                    } while (ge !== null);
                  }
                }
                me = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && f !== null) f.return = o, me = f;
            else e: for (; me !== null; ) {
              if (o = me, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  zr(9, o, o.return);
              }
              var M = o.sibling;
              if (M !== null) {
                M.return = o.return, me = M;
                break e;
              }
              me = o.return;
            }
          }
          var x = e.current;
          for (me = x; me !== null; ) {
            f = me;
            var P = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && P !== null) P.return = f, me = P;
            else e: for (f = x; me !== null; ) {
              if (y = me, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qs(9, y);
                }
              } catch (xe) {
                ut(y, y.return, xe);
              }
              if (y === f) {
                me = null;
                break e;
              }
              var q = y.sibling;
              if (q !== null) {
                q.return = y.return, me = q;
                break e;
              }
              me = y.return;
            }
          }
          if (ze = l, Xn(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(ls, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Ge = n, tn.transition = t;
      }
    }
    return !1;
  }
  function sd(e, t, n) {
    t = Qi(n, t), t = wc(e, t, 1), e = qn(e, t, 1), t = Rt(), e !== null && (hr(e, 1, t), It(e, t));
  }
  function ut(e, t, n) {
    if (e.tag === 3) sd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        sd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ti === null || !ti.has(i))) {
          e = Qi(n, e), e = Nc(t, e, 1), t = qn(t, e, 1), e = Rt(), t !== null && (hr(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function pm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = Rt(), e.pingedLanes |= e.suspendedLanes & n, kt === e && (wt & n) === n && (mt === 4 || mt === 3 && (wt & 130023424) === wt && 500 > Ee() - Wl ? ji(e, 0) : Gl |= n), It(e, t);
  }
  function ad(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = us, us <<= 1, (us & 130023424) === 0 && (us = 4194304)));
    var n = Rt();
    e = Ln(e, t), e !== null && (hr(e, t, n), It(e, n));
  }
  function vm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ad(e, n);
  }
  function km(e, t) {
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
        throw Error(u(314));
    }
    i !== null && i.delete(t), ad(e, n);
  }
  var ld;
  ld = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Lt.current) $t = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return $t = !1, rm(e, t, n);
      $t = (e.flags & 131072) !== 0;
    }
    else $t = !1, st && (t.flags & 1048576) !== 0 && zu(t, As, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        Gs(e, t), e = t.pendingProps;
        var l = zi(t, Et.current);
        Gi(t, n), l = Nl(null, t, i, e, l, n);
        var o = El();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ot(i) ? (o = !0, Ms(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, kl(t), l.updater = Hs, t.stateNode = l, l._reactInternals = t, Al(t, i, e, n), t = Ol(null, t, i, !0, o, n)) : (t.tag = 0, st && o && ll(t), At(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (Gs(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = gm(i), e = un(i, e), l) {
            case 0:
              t = Ll(null, t, i, e, n);
              break e;
            case 1:
              t = bc(null, t, i, e, n);
              break e;
            case 11:
              t = Mc(null, t, i, e, n);
              break e;
            case 14:
              t = Tc(null, t, i, un(i.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Ll(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), bc(e, t, i, l, n);
      case 3:
        e: {
          if (Lc(t), e === null) throw Error(u(387));
          i = t.pendingProps, o = t.memoizedState, l = o.element, Yu(e, t), Fs(t, i, null, n);
          var f = t.memoizedState;
          if (i = f.element, o.isDehydrated) if (o = { element: i, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Qi(Error(u(423)), t), t = Oc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = Qi(Error(u(424)), t), t = Oc(e, t, i, n, l);
            break e;
          } else for (Ht = Qn(t.stateNode.containerInfo.firstChild), Kt = t, st = !0, on = null, n = Wu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return Zu(t), e === null && cl(t), i = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, f = l.children, tl(i, l) ? f = null : o !== null && tl(i, o) && (t.flags |= 32), Rc(e, t), At(e, t, f, n), t.child;
      case 6:
        return e === null && cl(t), null;
      case 13:
        return $c(e, t, n);
      case 4:
        return yl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Hi(t, null, i, n) : At(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Mc(e, t, i, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, o = t.memoizedProps, f = l.value, qe(Ls, i._currentValue), i._currentValue = f, o !== null) if (ln(o.value, f)) {
            if (o.children === l.children && !Lt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var y = o.dependencies;
            if (y !== null) {
              f = o.child;
              for (var g = y.firstContext; g !== null; ) {
                if (g.context === i) {
                  if (o.tag === 1) {
                    g = On(-1, n & -n), g.tag = 2;
                    var R = o.updateQueue;
                    if (R !== null) {
                      R = R.shared;
                      var W = R.pending;
                      W === null ? g.next = g : (g.next = W.next, W.next = g), R.pending = g;
                    }
                  }
                  o.lanes |= n, g = o.alternate, g !== null && (g.lanes |= n), pl(
                    o.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                g = g.next;
              }
            } else if (o.tag === 10) f = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (f = o.return, f === null) throw Error(u(341));
              f.lanes |= n, y = f.alternate, y !== null && (y.lanes |= n), pl(f, n, t), f = o.sibling;
            } else f = o.child;
            if (f !== null) f.return = o;
            else for (f = o; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (o = f.sibling, o !== null) {
                o.return = f.return, f = o;
                break;
              }
              f = f.return;
            }
            o = f;
          }
          At(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, Gi(t, n), l = qt(l), i = i(l), t.flags |= 1, At(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = un(i, t.pendingProps), l = un(i.type, l), Tc(e, t, i, l, n);
      case 15:
        return Pc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : un(i, l), Gs(e, t), t.tag = 1, Ot(i) ? (e = !0, Ms(t)) : e = !1, Gi(t, n), jc(t, i, l), Al(t, i, l, n), Ol(null, t, i, !0, e, n);
      case 19:
        return Ic(e, t, n);
      case 22:
        return Ac(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function od(e, t) {
    return Mn(e, t);
  }
  function ym(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(e, t, n, i) {
    return new ym(e, t, n, i);
  }
  function to(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gm(e) {
    if (typeof e == "function") return to(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === te) return 11;
      if (e === H) return 14;
    }
    return 2;
  }
  function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = nn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ia(e, t, n, i, l, o) {
    var f = 2;
    if (i = e, typeof e == "function") to(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case C:
        return wi(n.children, l, o, t);
      case V:
        f = 8, l |= 8;
        break;
      case ee:
        return e = nn(12, n, t, l | 2), e.elementType = ee, e.lanes = o, e;
      case ue:
        return e = nn(13, n, t, l), e.elementType = ue, e.lanes = o, e;
      case Ne:
        return e = nn(19, n, t, l), e.elementType = Ne, e.lanes = o, e;
      case ce:
        return ra(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case se:
            f = 10;
            break e;
          case Se:
            f = 9;
            break e;
          case te:
            f = 11;
            break e;
          case H:
            f = 14;
            break e;
          case ae:
            f = 16, i = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = nn(f, n, t, l), t.elementType = e, t.type = i, t.lanes = o, t;
  }
  function wi(e, t, n, i) {
    return e = nn(7, e, i, t), e.lanes = n, e;
  }
  function ra(e, t, n, i) {
    return e = nn(22, e, i, t), e.elementType = ce, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function no(e, t, n) {
    return e = nn(6, e, null, t), e.lanes = n, e;
  }
  function io(e, t, n) {
    return t = nn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function xm(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pa(0), this.expirationTimes = Pa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pa(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ro(e, t, n, i, l, o, f, y, g) {
    return e = new xm(e, t, n, y, g), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = nn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kl(o), e;
  }
  function jm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: B, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function ud(e) {
    if (!e) return Jn;
    e = e._reactInternals;
    e: {
      if (_n(e) !== e || e.tag !== 1) throw Error(u(170));
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
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ot(n)) return Fu(e, n, t);
    }
    return t;
  }
  function cd(e, t, n, i, l, o, f, y, g) {
    return e = ro(n, i, !0, e, l, o, f, y, g), e.context = ud(null), n = e.current, i = Rt(), l = ii(n), o = On(i, l), o.callback = t ?? null, qn(n, o, l), e.current.lanes = l, hr(e, l, i), It(e, i), e;
  }
  function sa(e, t, n, i) {
    var l = t.current, o = Rt(), f = ii(l);
    return n = ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(o, f), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = qn(l, t, f), e !== null && (fn(e, l, f, o), $s(e, l, f)), f;
  }
  function aa(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function dd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function so(e, t) {
    dd(e, t), (e = e.alternate) && dd(e, t);
  }
  function Sm() {
    return null;
  }
  var fd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ao(e) {
    this._internalRoot = e;
  }
  la.prototype.render = ao.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    sa(e, t, null, null);
  }, la.prototype.unmount = ao.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xi(function() {
        sa(null, e, null, null);
      }), t[Pn] = null;
    }
  };
  function la(e) {
    this._internalRoot = e;
  }
  la.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Yo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++) ;
      Un.splice(n, 0, e), n === 0 && Zo(e);
    }
  };
  function lo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function oa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function hd() {
  }
  function wm(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var o = i;
        i = function() {
          var R = aa(f);
          o.call(R);
        };
      }
      var f = cd(t, i, e, 0, null, !1, !1, "", hd);
      return e._reactRootContainer = f, e[Pn] = f.current, _r(e.nodeType === 8 ? e.parentNode : e), xi(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var y = i;
      i = function() {
        var R = aa(g);
        y.call(R);
      };
    }
    var g = ro(e, 0, !1, null, null, !1, !1, "", hd);
    return e._reactRootContainer = g, e[Pn] = g.current, _r(e.nodeType === 8 ? e.parentNode : e), xi(function() {
      sa(t, g, n, i);
    }), g;
  }
  function ua(e, t, n, i, l) {
    var o = n._reactRootContainer;
    if (o) {
      var f = o;
      if (typeof l == "function") {
        var y = l;
        l = function() {
          var g = aa(f);
          y.call(g);
        };
      }
      sa(t, f, e, l);
    } else f = wm(n, t, e, l, i);
    return aa(f);
  }
  Wo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fr(t.pendingLanes);
          n !== 0 && (Aa(t, n | 1), It(t, Ee()), (ze & 6) === 0 && (Xi = Ee() + 500, Xn()));
        }
        break;
      case 13:
        xi(function() {
          var i = Ln(e, 1);
          if (i !== null) {
            var l = Rt();
            fn(i, e, 1, l);
          }
        }), so(e, 1);
    }
  }, Ra = function(e) {
    if (e.tag === 13) {
      var t = Ln(e, 134217728);
      if (t !== null) {
        var n = Rt();
        fn(t, e, 134217728, n);
      }
      so(e, 134217728);
    }
  }, Qo = function(e) {
    if (e.tag === 13) {
      var t = ii(e), n = Ln(e, t);
      if (n !== null) {
        var i = Rt();
        fn(n, e, t, i);
      }
      so(e, t);
    }
  }, Yo = function() {
    return Ge;
  }, Jo = function(e, t) {
    var n = Ge;
    try {
      return Ge = e, t();
    } finally {
      Ge = n;
    }
  }, Yt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Oe(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = Cs(i);
              if (!l) throw Error(u(90));
              le(i), Oe(i, l);
            }
          }
        }
        break;
      case "textarea":
        Ve(e, n);
        break;
      case "select":
        t = n.value, t != null && Ue(e, !!n.multiple, t, !1);
    }
  }, Fe = Zl, rt = xi;
  var Nm = { usingClientEntryPoint: !1, Events: [Pr, Ii, Cs, pn, zn, Zl] }, Hr = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Em = { bundleType: Hr.bundleType, version: Hr.version, rendererPackageName: Hr.rendererPackageName, rendererConfig: Hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: I.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ss(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Hr.findFiberByHostInstance || Sm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ca.isDisabled && ca.supportsFiber) try {
      ls = ca.inject(Em), yn = ca;
    } catch {
    }
  }
  return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nm, Dt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lo(t)) throw Error(u(200));
    return jm(e, t, null, n);
  }, Dt.createRoot = function(e, t) {
    if (!lo(e)) throw Error(u(299));
    var n = !1, i = "", l = fd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ro(e, 1, !1, null, null, n, !1, i, l), e[Pn] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new ao(t);
  }, Dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = ss(t), e = e === null ? null : e.stateNode, e;
  }, Dt.flushSync = function(e) {
    return xi(e);
  }, Dt.hydrate = function(e, t, n) {
    if (!oa(t)) throw Error(u(200));
    return ua(null, e, t, !0, n);
  }, Dt.hydrateRoot = function(e, t, n) {
    if (!lo(e)) throw Error(u(405));
    var i = n != null && n.hydratedSources || null, l = !1, o = "", f = fd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = cd(t, null, e, 1, n ?? null, l, !1, o, f), e[Pn] = t.current, _r(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new la(t);
  }, Dt.render = function(e, t, n) {
    if (!oa(t)) throw Error(u(200));
    return ua(null, e, t, !1, n);
  }, Dt.unmountComponentAtNode = function(e) {
    if (!oa(e)) throw Error(u(40));
    return e._reactRootContainer ? (xi(function() {
      ua(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, Dt.unstable_batchedUpdates = Zl, Dt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!oa(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return ua(e, t, n, !1, i);
  }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt;
}
var jd;
function Lm() {
  if (jd) return co.exports;
  jd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), co.exports = bm(), co.exports;
}
var Sd;
function Om() {
  if (Sd) return da;
  Sd = 1;
  var r = Lm();
  return da.createRoot = r.createRoot, da.hydrateRoot = r.hydrateRoot, da;
}
var $m = Om();
const Fm = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", u = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], d = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], A = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], _ = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], T = {
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
      base: _,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: _,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: _,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: _,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, O = 26, D = 72, N = 30, w = 54, z = 34, E = 11, F = (O + D) / 2, I = N + (c.length - 1) * z + 30, Q = (K) => D + K * w, B = (K) => K === 0 ? F : Q(K) - w / 2, C = (K) => N + K * z;
  function V(K, ne, S) {
    const J = a.indexOf(r[K][0]) + Number(S.slice(-1)) - 1, re = J % a.length, le = u[re] + 12 * Math.floor(J / a.length), fe = K + ne - le;
    return a[re] + (fe < 0 ? "♭" : "♯").repeat(Math.abs(fe));
  }
  function ee(K) {
    return [...K.base, ...K.add].sort((ne, S) => ne[0] - S[0]);
  }
  function se(K, ne, S) {
    const J = ne + (S ? 1 : 0), re = m[J % m.length], le = Math.min(...re.map(([Oe]) => Oe)), fe = Math.max(...re.map(([, Oe]) => Oe));
    let Me = (K - d % 12 + 12) % 12 - (S ? 8 : 5) + 12 * Math.floor(J / m.length);
    return le + Me < 0 && (Me += 12), fe + Me > h.pentatonic && (Me -= 12), {
      strings: re.map((Oe) => Oe.map((Xe) => Xe + Me)),
      start: le + Me,
      end: fe + Me
    };
  }
  function Se(K, ne, S) {
    const J = S[ne], re = (K + J - d % 12 + 12) % 12, le = d + re - J, fe = c.map((ke, Ae) => {
      const Me = ne + (c.length - 1 - Ae) * 3;
      return [Me, Me + 1, Me + 2].map((Oe) => {
        const Xe = Math.floor(Oe / S.length), He = S[Oe % S.length];
        return le + He + 12 * Xe - ke;
      });
    });
    return {
      strings: fe,
      start: Math.min(...fe.map((ke) => ke[0])),
      end: Math.max(...fe.map((ke) => ke.at(-1)))
    };
  }
  function te(K, ne) {
    const S = [], J = Math.ceil(-K.end / 12) * 12;
    for (let le = J; K.start + le <= ne; le += 12) {
      const fe = K.strings.map((Ae) => Ae.map((Me) => Me + le).filter((Me) => Me >= 0 && Me <= ne)), ke = fe.flat();
      S.push({
        strings: fe,
        start: Math.min(...ke),
        end: Math.max(...ke),
        partial: K.start + le < 0 || K.end + le > ne
      });
    }
    const re = S.filter((le) => !le.partial);
    return re.length ? re : S;
  }
  function ue(K) {
    return ee(K).length === p;
  }
  function Ne(K, ne, S) {
    const J = ue(ne);
    K.querySelector('[value="3nps"]').disabled = !J, K.value = J ? S ?? "3nps" : "pentatonic";
  }
  function H(K, ne, S, J, re) {
    const le = ee(ne).map(([fe]) => fe);
    return J.map((fe) => {
      const ke = fe - 1, Ae = S === "3nps" ? Se(K, ke, le) : se(K, ke, ne.base === _), Me = re === void 0 ? [Ae] : te(Ae, re);
      return { number: fe, positions: Me };
    });
  }
  function ae(K, ne) {
    const S = K.getBoundingClientRect(), J = K.querySelectorAll(ne);
    let re = 1 / 0;
    J.forEach((le) => {
      const fe = le.getBoundingClientRect();
      let ke = 0;
      fe.left < S.left ? ke = fe.left - S.left - 8 : fe.right > S.right && (ke = fe.right - S.right + 8), Math.abs(ke) < Math.abs(re) && (re = ke);
    }), Number.isFinite(re) && (K.scrollLeft += re);
  }
  function ce(K, ne = !1) {
    const S = K === "3nps" ? p : m.length;
    return Array.from({ length: S }, (J, re) => {
      const le = re + 1;
      return '<label class="box-toggle" data-box="' + le + '"><input type="checkbox" value="' + le + '"' + (ne && re === 0 ? " checked" : "") + "> Boksi " + le + "</label>";
    }).join("");
  }
  function Y(K, ne) {
    const S = ee(ne), J = new Map(S.map(([le, fe]) => [le, V(K, le, fe)])), re = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return S.flatMap(([le, fe]) => re.flatMap(({ suffix: ke, base: Ae }) => {
      const Me = Ae.map(([Oe]) => J.get((le + Oe) % 12));
      return Me.every(Boolean) ? {
        root: (K + le) % 12,
        degree: Number(String(fe).replace(/\D/g, "")),
        name: Me[0] + ke,
        notes: Me,
        base: Ae,
        add: []
      } : [];
    }));
  }
  function ie(K, ne) {
    const S = K.base.map(([le]) => (K.root + le) % 12), J = c.map((le) => {
      const fe = [];
      for (let ke = 0; ke <= ne; ke++) {
        const Ae = (le + ke) % 12;
        S.includes(Ae) && fe.push({ fret: ke, pitch: Ae });
      }
      return fe;
    }), re = [];
    for (let le = 0; le <= J.length - 3; le++)
      for (const fe of J[le])
        for (const ke of J[le + 1])
          if (fe.pitch !== ke.pitch)
            for (const Ae of J[le + 2]) {
              if (Ae.pitch === fe.pitch || Ae.pitch === ke.pitch) continue;
              const Me = [fe.fret, ke.fret, Ae.fret], Oe = Math.min(...Me), Xe = Math.max(...Me);
              if (Xe - Oe > 3) continue;
              const He = Array(c.length).fill(null);
              He.splice(le, 3, ...Me), re.push({ strings: He, low: Oe, high: Xe });
            }
    return re.sort((le, fe) => le.high - fe.high || le.low - fe.low);
  }
  const Z = {
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
  }, k = [
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
  function L(K, ne) {
    const S = Z[K + ":" + ne];
    if (S) return { frets: S, barre: null };
    let J = null;
    return k.forEach(({ string: re, openPC: le, shapes: fe }) => {
      const ke = fe[ne];
      if (!ke) return;
      let Ae = (K - le + 12) % 12;
      if (Ae + Math.min(...ke.filter((Xe) => Xe !== null)) < 0 && (Ae += 12), J && J.fret <= Ae) return;
      const Me = ke.map((Xe) => Xe === null ? null : Ae + Xe), Oe = Ae > 0 && ke.at(-1) === 0 ? { fret: Ae, from: re, to: ke.length - 1 } : null;
      J = { fret: Ae, frets: Me, barre: Oe };
    }), J && { frets: J.frets, barre: J.barre };
  }
  function he(K, { frets: ne, barre: S }, J) {
    const Me = [...c].reverse(), Oe = ne.filter((Ve) => Ve > 0), He = !Oe.length || Math.max(...Oe) <= 4 && (ne.includes(0) || Math.min(...Oe) === 1) ? 1 : Math.min(...Oe), Qe = (Ve) => 24 + Ve * 14, Ue = (Ve) => 30 + (Ve - He) * 18 + 18 / 2, gt = 102;
    let Ze = '<svg class="chord-svg" viewBox="0 0 108 ' + (gt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + J + "-ote paksusta kielestä ohueen: " + ne.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Ze += '<line class="' + (Ve === 0 && He === 1 ? "nut" : "fret") + '" x1="' + Qe(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + Qe(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return ne.forEach((Ve, it) => {
      Ze += '<line class="string" x1="' + Qe(it) + '" y1="30" x2="' + Qe(it) + '" y2="' + gt + '"/>';
    }), He > 1 && (Ze += '<text class="fret-label" x="15" y="' + (Ue(He) + 4) + '">' + He + "</text>"), S && (Ze += '<rect class="barre" x="' + (Qe(S.from) - 6.5) + '" y="' + (Ue(S.fret) - 6.5) + '" width="' + ((S.to - S.from) * 14 + 13) + '" height="13" rx="6.5"/>'), ne.forEach((Ve, it) => {
      if (Ve === null) {
        Ze += '<text class="marker" x="' + Qe(it) + '" y="22">×</text>';
        return;
      }
      const Tt = (Me[it] + Ve) % 12 === K;
      if (Ve === 0) {
        Ze += '<circle class="open' + (Tt ? " root-open" : "") + '" cx="' + Qe(it) + '" cy="18" r="4.5"/>';
        return;
      }
      S && Ve === S.fret && it >= S.from && it <= S.to && !Tt || (Ze += '<circle class="' + (Tt ? "root" : "tone") + '" cx="' + Qe(it) + '" cy="' + Ue(Ve) + '" r="6.5"/>');
    }), Ze + "</svg>";
  }
  function je(K, ne) {
    const S = new URLSearchParams(location.search), J = r.indexOf(S.get("toonikka")), re = S.get("asteikko");
    return {
      rootPC: J === -1 ? K : J,
      scaleId: Object.hasOwn(T, re) ? re : ne
    };
  }
  function U(K, ne, S) {
    return K + "?" + new URLSearchParams({ toonikka: r[ne], asteikko: S });
  }
  function oe(K, ne, S, {
    boxes: J = [],
    onlyBoxNotes: re = !1,
    automatic: le = !0,
    focusDegree: fe = "",
    grip: ke = null,
    barre: Ae = null,
    label: Me = r[K] + " " + ne.name,
    notes: Oe = null,
    targets: Xe = !1,
    muteFret: He = null
  } = {}) {
    const Qe = Q(S), Ue = Qe + 48, gt = Ue + 28, Ze = N - 14, Ve = C(c.length - 1) + 14, it = Ve - Ze, Tt = le ? 680 : Math.ceil(gt * 0.64), Gt = J.flatMap((Te) => Te.positions), zt = {};
    ne.base.forEach(([Te, be]) => zt[(K + Te) % 12] = { deg: be, added: !1 }), ne.add.forEach(([Te, be]) => zt[(K + Te) % 12] = { deg: be, added: !0 });
    const sn = c.map((Te, be) => !!ke && ke[be] === null), Wt = !!ke && He !== null, dt = A.filter((Te, be) => sn[be]).reverse(), Dn = Me + ". " + S + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (dt.length ? " Soittamatta jäävät kielet: " + dt.join(", ") + "." : "");
    let we = '<svg viewBox="0 0 ' + gt + " " + I + '" style="min-width:' + Tt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Xe ? "group" : "img") + '" aria-label="' + Dn + '">';
    we += '<rect x="' + O + '" y="' + Ze + '" width="' + (D - O) + '" height="' + it + '" rx="6" fill="#2a2338"/>', we += '<rect x="' + D + '" y="' + Ze + '" width="' + (Qe - D) + '" height="' + it + '" fill="#231a12"/>', we += '<rect x="' + Qe + '" y="' + Ze + '" width="' + (gt - Qe - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let Te = 1; Te <= S; Te++)
      we += '<line x1="' + Q(Te) + '" y1="' + Ze + '" x2="' + Q(Te) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    we += '<rect x="' + (D - 3) + '" y="' + Ze + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', we += '<rect x="' + (Ue - 11) + '" y="' + (Ze + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', we += '<rect x="' + (Ue - 4) + '" y="' + (Ze + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Qt = (Ze + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((Te) => Te <= S).forEach((Te) => we += '<circle cx="' + B(Te) + '" cy="' + Qt + '" r="5.5" fill="#7a6550"/>');
    for (let Te = 12; Te <= S; Te += 12)
      we += '<circle cx="' + B(Te) + '" cy="' + (Qt - z) + '" r="5.5" fill="#7a6550"/>', we += '<circle cx="' + B(Te) + '" cy="' + (Qt + z) + '" r="5.5" fill="#7a6550"/>';
    we += '<text x="' + F + '" y="' + (I - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', we += '<text x="' + D + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', we += '<text x="' + Ue + '" y="' + (I - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let Te = 1; Te <= S; Te++)
      we += '<text x="' + B(Te) + '" y="' + (I - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + Te + "</text>";
    if (J.forEach(({ number: Te, positions: be }) => {
      be.forEach((Re) => {
        const Ye = Re.partial ? "box-highlight box-partial" : "box-highlight";
        we += '<g class="' + Ye + '" data-box="' + Te + '" aria-hidden="true">';
        const et = Re.strings.find((xt) => xt.length), Yt = (B(et[0]) + B(et.at(-1))) / 2;
        we += '<text class="box-number" x="' + Yt + '" y="12">' + Te + "</text>", Re.strings.forEach((xt, Vt) => {
          if (!xt.length) return;
          const mn = B(xt[0]) - 16, pn = B(xt.at(-1)) - B(xt[0]) + 32;
          we += '<rect class="box-band" x="' + mn + '" y="' + (C(Vt) - 14) + '" width="' + pn + '" height="28" rx="14"/>';
        }), we += "</g>";
      });
    }), c.forEach((Te, be) => {
      const Re = 1 + be * 0.45, Ye = C(be), et = sn[be] && !Wt;
      et ? we += '<text class="muted-mark" x="' + F + '" y="' + (Ye + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : sn[be] && He === 0 || (we += '<line x1="' + (O + 4) + '" y1="' + Ye + '" x2="' + (D - 4) + '" y2="' + Ye + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), we += "<g" + (et ? ' opacity=".35"' : "") + ">", we += '<line x1="' + D + '" y1="' + Ye + '" x2="' + (Ue + 5) + '" y2="' + Ye + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', we += '<circle cx="' + (Ue + 5) + '" cy="' + Ye + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', we += "</g>", we += '<text x="13" y="' + (Ye + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[be] + "</text>";
    }), ke && Ae && Ae.fret >= 1 && Ae.fret <= S) {
      const Te = C(Ae.from), be = C(Ae.to), Re = Math.min(Te, be) - 6, Ye = Math.max(Te, be) + 6;
      we += '<rect class="barre-indicator" x="' + (B(Ae.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Ye - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Xe && (we += '<g class="fret-targets">', c.forEach((Te, be) => {
      for (let Re = 0; Re <= S; Re++) {
        const Ye = Re ? A[be] + "-kieli, " + Re + ". nauha" : "vapaa " + A[be] + "-kieli", et = Re ? w : D - O - 6;
        we += '<rect class="fret-target" role="button" tabindex="0" data-string="' + be + '" data-fret="' + Re + '" data-midi="' + (Te + Re) + '" aria-label="' + Ye + '" x="' + (B(Re) - et / 2) + '" y="' + (C(be) - z / 2) + '" width="' + et + '" height="' + z + '" fill="transparent"/>';
      }
    }), we += "</g>"), (Oe ?? []).forEach(({ string: Te, fret: be, label: Re, kind: Ye }) => {
      we += '<g class="octave-note octave-' + Ye + '">', we += '<circle cx="' + B(be) + '" cy="' + C(Te) + '" r="' + E + '"/>', we += '<text x="' + B(be) + '" y="' + (C(Te) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", we += "</g>";
    }), ke && (we += '<g class="grip-notes">'), (Oe ? [] : c).forEach((Te, be) => {
      for (let Re = 0; Re <= S; Re++) {
        const Ye = (Te + Re) % 12;
        if (!(Ye in zt) || ke && ke[be] !== Re || re && !Gt.some(({ strings: pn }) => {
          const zn = pn[be];
          return zn.length > 0 && Re >= zn[0] && Re <= zn.at(-1);
        })) continue;
        const et = zt[Ye], Yt = et.deg === "1", xt = et.added ? "#f0a13c" : Yt ? "#4b2fd6" : "#6d4aff", Vt = et.added ? "#1a1430" : "#fff";
        et.deg === fe && (we += '<circle class="focus-note" cx="' + B(Re) + '" cy="' + C(be) + '" r="14.5"/>');
        const mn = ke ? ' data-string="' + (be + 1) + '" data-fret="' + Re + '" data-degree="' + et.deg + '"' : "";
        we += "<circle" + mn + ' cx="' + B(Re) + '" cy="' + C(be) + '" r="' + E + '" fill="' + xt + '" stroke="' + (Yt ? "#fff" : "#1a1430") + '" stroke-width="' + (Yt ? 2.5 : 1) + '"/>', we += '<text x="' + B(Re) + '" y="' + (C(be) + 3.5) + '" font-size="' + (et.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Vt + '" text-anchor="middle">' + et.deg + "</text>";
      }
    }), ke && (we += "</g>"), Wt && sn.forEach((Te, be) => {
      if (!Te) return;
      const Re = B(He), Ye = C(be);
      we += '<g class="muted-mark grip-mute" data-string="' + (be + 1) + '" data-fret="' + He + '">', we += '<circle cx="' + Re + '" cy="' + Ye + '" r="9" fill="' + (He === 0 ? "#2a2338" : "#231a12") + '"/>', we += '<text x="' + Re + '" y="' + (Ye + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', we += "</g>";
    }), we += "</svg>", we;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: c,
    PENT_MAJ: _,
    SCALES: T,
    noteName: V,
    scaleNotes: ee,
    scaleTriads: Y,
    triadGrips: ie,
    chordGrip: L,
    renderChordDiagram: he,
    selectionFromURL: je,
    selectionHref: U,
    renderBoard: oe,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: ue,
    syncBoxSystem: Ne,
    fingeringBoxes: H,
    boxOptions: ce,
    revealPositions: ae
  };
})();
globalThis.MusicMapFretboard = Fm;
function wd(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function Im(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function Dm(r) {
  const a = Im(r), u = Math.round(a), c = (a - u) * 100;
  return { midi: u, cents: c };
}
const De = globalThis.MusicMapFretboard, Ke = (r) => (r % 12 + 12) % 12, zm = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Vm = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Le = (r, a = !1, u = !1) => (a ? Vm : zm)[Ke(r)] + (u ? Math.floor(r / 12) - 1 : ""), oi = (r) => De.CHROM[Ke(r)], Jr = (r, a, u) => De.noteName(Ke(r), a, u);
function Bm(r, a) {
  const u = Math.floor(r / 12) - 1;
  return a[0] === "B" && Ke(r) < 2 ? u - 1 : a[0] === "C" && Ke(r) > 9 ? u + 1 : u;
}
const rn = ["ohut E", "B", "G", "D", "A", "paksu E"], Io = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], af = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Km = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], Ci = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, Ie = (r, a) => ({ string: r, fret: a, midi: De.OPEN_PITCHES[r] + a });
function or(r, a, u) {
  return [...r].sort((c, d) => c - d).flatMap((c) => Array.from({ length: Math.max(0, u - a + 1) }, (d, h) => Ie(c, a + h)));
}
const We = (r) => `${r.string}:${r.fret}`, Ei = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, lf = (r, a) => a === "maj" ? `${oi(r)}-duurisointu` : a === "min" ? `${oi(r)}-mollisointu` : `${oi(r)}7-sointu`, Xr = [
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
], Nd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function of(r, a) {
  const u = Nd[a] ?? Nd.E, c = Ke(r - u.root);
  return u.frets.flatMap((d, h) => d === null ? [] : [Ie(h, d + c)]);
}
const pa = {
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
}, Ea = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, li = (r, a, u, c) => typeof r == "number" && Number.isFinite(r) ? Math.max(a, Math.min(u, r)) : c, wn = (r, a, u) => a.includes(r) ? r : u;
function ja(r) {
  const a = { ...pa };
  a.mode = wn(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((u) => Number.isInteger(u) && u >= 0 && u <= 5))].sort((u, c) => u - c) : a.strings, a.strings.length || (a.strings = [...pa.strings]), a.min = Math.round(li(r.min, 0, 24, a.min)), a.max = Math.round(li(r.max, a.min, 24, Math.max(a.min, a.max)));
  for (const u of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[u] == "boolean" && (a[u] = r[u]);
  return a.check = wn(r.check, ["class", "pitch"], a.check), a.input = wn(r.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : a.rounds, a.root = Math.round(li(r.root, 0, 11, a.root)), a.scale = typeof r.scale == "string" && Object.hasOwn(De.SCALES, r.scale) ? r.scale : a.scale, a.box = Math.round(li(r.box, 0, 5, a.box)), a.order = wn(r.order, ["random", "up", "down"], a.order), a.chord = wn(r.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = wn(r.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = wn(r.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((u) => Number.isInteger(u) && u >= 1 && u <= 12))].sort((u, c) => u - c) : a.intervals, a.intervals.length || (a.intervals = [...pa.intervals]), a.direction = wn(r.direction, ["up", "down", "both"], a.direction), a.hints = wn(r.hints, ["off", "always", "fade"], a.hints), a.activity = wn(r.activity, ["play", "degree"], a.activity), a.minRms = li(r.minRms, 1e-3, 0.15, a.minRms), a.clarity = li(r.clarity, 0.85, 0.99, a.clarity), a.stability = li(r.stability, 120, 800, a.stability), a.cents = li(r.cents, 10, 45, a.cents), a.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", a;
}
function Hm(r, a) {
  const u = new URLSearchParams(r), c = { ...a };
  for (const [d, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    u.has(d) && Object.assign(c, { [h]: u.get(d) });
  for (const [d, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    u.has(d) && (c[h] = Number(u.get(d)));
  u.has("kielet") && (c.strings = u.get("kielet").split(",").map((d) => Number(d) - 1)), u.has("intervallit") && (c.intervals = u.get("intervallit").split(",").map(Number));
  for (const [d, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    u.has(d) && (c[h] = u.get(d) === "1");
  if (u.has("toonikka")) {
    const d = u.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = d.charAt(0).toUpperCase() + d.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(De.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    m >= 0 && (c.root = m);
  }
  return ja(c);
}
function Um(r) {
  return "kitaraharjoittelija.html?" + new URLSearchParams({
    tila: r.mode,
    toonikka: De.CHROM[r.root],
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
const _i = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, In = (r) => r.mode === "scale" && r.order !== "random", uf = (r) => ["note", "degree"].includes(_i(r)) ? "class" : In(r) ? "pitch" : r.check, fa = (r) => _i(r) === "mic", Ed = "musiikin-kartta:harjoittelu", cf = 3, jo = () => ({ version: cf, settings: { ...pa }, stats: {}, recent: [], sessions: [] }), df = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, hn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function Gm(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => hn(r[a])) && r.correct <= r.attempts && (r.errors === void 0 || hn(r.errors)) && (r.ema === void 0 || hn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || hn(r.emaMs));
}
function Wm(r) {
  return !!r && typeof r.id == "string" && hn(r.count) && hn(r.first) && r.first <= r.count && hn(r.ms) && hn(r.at) && (r.solo === void 0 || hn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || hn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Cd(r) {
  if (!r) return jo();
  const a = JSON.parse(r);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !Gm(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !hn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !Wm(p)))) throw new Error("Virheellisiä kierroksia");
  const u = a.version < 3, c = ja(a.settings ?? {}), d = u && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  d && (c.hints = "off");
  const h = {
    version: cf,
    settings: c,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (d || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const _d = 2500, Qm = 8e3, Md = 0.3, Zr = (r) => r.ema ?? r.correct / r.attempts, qr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function Do(r) {
  if (!r?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (qr(r) - _d) / (Qm - _d)));
  return Zr(r) * 0.65 + a * 0.35;
}
function Ym(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - Do(r)) * 3;
}
class Td {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Cd(a?.getItem(Ed) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = jo();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Ed, JSON.stringify(this.data)), this.warning = "";
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
    const u = df(a), c = this.data.stats[u] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, d = Number(a.first), h = {
      attempts: c.attempts + 1,
      correct: c.correct + d,
      errors: c.errors + a.errors,
      totalMs: c.totalMs + a.ms,
      lastSeen: a.at,
      ema: c.attempts ? Zr(c) + Md * (d - Zr(c)) : d,
      emaMs: c.attempts ? qr(c) + Md * (a.ms - qr(c)) : a.ms
    };
    Object.defineProperty(this.data.stats, u, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((u) => u.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const u = Cd(a);
    this.data = u, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...jo(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Jm = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Xm = ["e", "B", "G", "D", "A", "E"];
function ff({ string: r }) {
  return /* @__PURE__ */ s.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ s.jsxs("span", { children: [
      r + 1,
      " · ",
      /* @__PURE__ */ s.jsx("strong", { children: Xm[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ s.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ s.jsx("small", { children: "paksuin" }) : null
  ] });
}
const hf = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), Zm = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function mf({ min: r, max: a }) {
  return /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsxs("tr", { children: [
    /* @__PURE__ */ s.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: a - r + 1 }, (u, c) => {
      const d = r + c;
      return /* @__PURE__ */ s.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Jm.has(d) ? /* @__PURE__ */ s.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function Mi({ area: r, marks: a = [], mutedStrings: u = [], disabled: c = !1, onAnswer: d, caption: h = "Otelauta" }) {
  const p = { "--cols": r.max - r.min + 1 }, { strings: m, min: j, max: A } = r, [v, _] = b.useState({ string: Math.min(...m), fret: j }), T = b.useRef(null), O = new Map(a.map((E) => [We(E), E])), D = a.map((E) => `${We(E)}${E.kind}`).join(",");
  b.useEffect(() => {
    const E = T.current, F = E?.querySelector(".target, .anchor");
    E && F && (E.scrollLeft += F.getBoundingClientRect().left - E.getBoundingClientRect().left - E.clientWidth / 2 + F.clientWidth / 2);
  }, [D]);
  const [N, w] = b.useState({ left: !1, right: !1 });
  b.useEffect(() => {
    const E = T.current;
    if (!E) return;
    const F = () => {
      const Q = E.scrollLeft > 2, B = E.scrollLeft + E.clientWidth < E.scrollWidth - 2;
      w((C) => C.left === Q && C.right === B ? C : { left: Q, right: B });
    };
    F(), E.addEventListener("scroll", F, { passive: !0 });
    const I = typeof ResizeObserver > "u" ? null : new ResizeObserver(F);
    return I?.observe(E), () => {
      E.removeEventListener("scroll", F), I?.disconnect();
    };
  }, [D, j, A]);
  const z = m.includes(v.string) && v.fret >= j && v.fret <= A ? v : { string: Math.min(...m), fret: j };
  return /* @__PURE__ */ s.jsxs("div", { className: "fret-wrap" + (N.left ? " more-left" : "") + (N.right ? " more-right" : ""), children: [
    (N.left || N.right) && /* @__PURE__ */ s.jsxs("p", { className: "fret-scroll-hint", children: [
      N.left && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      N.left && N.right ? "molemmilla puolilla" : N.right ? "oikealla" : "vasemmalla",
      N.right && /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { ref: T, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board", style: p, children: [
      /* @__PURE__ */ s.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ s.jsx(mf, { min: j, max: A }),
      /* @__PURE__ */ s.jsx("tbody", { children: De.OPEN_PITCHES.map((E, F) => /* @__PURE__ */ s.jsxs("tr", { className: m.includes(F) ? "" : "unused", style: hf(F), children: [
        /* @__PURE__ */ s.jsxs("th", { scope: "row", "aria-label": `${F + 1}. kieli: ${rn[F]}${u.includes(F) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ s.jsx(ff, { string: F }),
          u.includes(F) && /* @__PURE__ */ s.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        or([F], j, A).map((I) => {
          const Q = O.get(We(I)), B = `${rn[F]}-kieli, ${Ci(I.fret)}`;
          return /* @__PURE__ */ s.jsx("td", { className: `${I.fret === 0 ? "open-fret " : ""}${Q ? Q.kind === "answer" ? "target" : Q.kind : ""}`, children: /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "data-string": F,
              "data-fret": I.fret,
              tabIndex: z.string === F && z.fret === I.fret ? 0 : -1,
              onFocus: () => _(I),
              onKeyDown: (C) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(C.key)) return;
                C.preventDefault();
                const V = [...m].sort((te, ue) => te - ue), ee = V.indexOf(F), se = C.key === "ArrowUp" ? V[Math.max(0, ee - 1)] : C.key === "ArrowDown" ? V[Math.min(V.length - 1, ee + 1)] : F, Se = C.key === "Home" ? j : C.key === "End" ? A : Math.max(j, Math.min(A, I.fret + (C.key === "ArrowRight" ? 1 : C.key === "ArrowLeft" ? -1 : 0)));
                C.currentTarget.closest("table")?.querySelector(`button[data-string="${se}"][data-fret="${Se}"]`)?.focus();
              },
              disabled: c || !m.includes(F),
              "aria-label": B + (Q ? `, ${Zm[Q.kind]}${Q.label ? " " + Q.label : ""}` : ""),
              onClick: () => d?.(I),
              children: Q ? /* @__PURE__ */ s.jsx("span", { className: "dot", children: Q.label || "●" }) : null
            }
          ) }, I.fret);
        })
      ] }, F)) })
    ] }) })
  ] });
}
function qm({ area: r, stats: a, input: u, check: c, flats: d }) {
  const { strings: h, min: p, max: m } = r, j = `${u}:${c}:solo:notes:`;
  return /* @__PURE__ */ s.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ s.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ s.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ s.jsx(mf, { min: p, max: m }),
    /* @__PURE__ */ s.jsx("tbody", { children: De.OPEN_PITCHES.map((A, v) => /* @__PURE__ */ s.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: hf(v), children: [
      /* @__PURE__ */ s.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${rn[v]}`, children: /* @__PURE__ */ s.jsx(ff, { string: v }) }),
      or([v], p, m).map((_) => {
        const T = Object.hasOwn(a, j + We(_)) ? a[j + We(_)] : void 0, O = Do(T), D = O === null ? "unseen" : T.attempts < 3 ? "few" : O >= 0.8 ? "strong" : O >= 0.5 ? "growing" : "weak", N = `${rn[v]}-kieli, ${Ci(_.fret)}, ${Le(_.midi, d)}`, w = T ? `${Math.round(O * 100)} %, ${T.correct}/${T.attempts} heti oikein, viime aikoina ${Math.round(Zr(T) * 100)} % ja ${(qr(T) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ s.jsxs("td", { className: `${_.fret === 0 ? "open-fret " : ""}${D}`, title: `${N}: ${w}`, children: [
          /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: O === null ? "·" : T.attempts < 3 ? "?" : Math.round(O * 100) }),
          /* @__PURE__ */ s.jsxs("span", { className: "sr-only", children: [
            N,
            ": ",
            w
          ] })
        ] }, _.fret);
      })
    ] }, v)) })
  ] }) });
}
const ep = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Ca = (r) => r.mode === "scale" ? De.scaleNotes(De.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, pf = (r) => De.fingeringBoxes(r.root, De.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function Ti(r) {
  if (r.mode === "caged") {
    const a = of(r.root, r.shape).map((u) => u.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const a = pf(r);
    return { strings: r.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function tp(r) {
  const a = Ti(r);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function ts(r) {
  const a = Ti(r), u = or(a.strings, a.min, a.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return u.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(Ke(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(of(r.root, r.shape).map(We));
    return u.filter((p) => h.has(We(p)));
  }
  if (r.mode === "interval") return u;
  const c = u.filter((h) => Ca(r).some(([p]) => Ke(h.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return c;
  const d = pf(r);
  return c.filter((h) => {
    const p = d.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function vf(r, a) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((c) => r.intervals.map((d) => ({
    iv: d,
    direction: c,
    pairs: a.flatMap((h) => a.filter((p) => p.midi === h.midi + (c === "down" ? -d : d)).map((p) => ({ reference: h, target: p })))
  }))).filter((c) => c.pairs.length);
}
function np(r) {
  const a = Ca(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? a : a.filter(([, u]) => u.endsWith(r.chordTone));
}
function So(r) {
  const a = ts(r), u = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : u}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${u}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${u}`;
  const c = np(r).filter(([d]) => !a.some((h) => Ke(h.midi - r.root) === d));
  return c.length ? `Valitulta alueelta puuttuu soinnun ${c.map(([, d]) => d + ". aste").join(" ja ")}. ${u}` : r.mode === "interval" && !vf(r, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : In(r) && new Set(a.map((d) => d.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${u}` : null;
}
function ip(r, a) {
  const u = [...new Map([...a].sort((c, d) => c.midi - d.midi || c.string - d.string).map((c) => [c.midi, c])).values()];
  return r.order === "down" ? u.reverse() : u;
}
function kf(r) {
  return In(r) ? new Set(ts(r).map((a) => a.midi)).size : r.rounds;
}
function rp(r, a) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function qi(r, a, u = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const c = a.reduce((p, m) => p + m, 0), d = Math.min(0.999999999, Math.max(0, u()));
  if (!(c > 0)) return r[Math.floor(d * r.length)];
  let h = d * c;
  for (let p = 0; p < r.length; p++)
    if (h -= a[p], h < 0) return r[p];
  return r.at(-1);
}
const Pd = (r, a) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${a}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${a}:${r.activity}` : `scale:${r.root}:${r.scale}:${a}:${r.activity}`;
function Ni(r, a) {
  const u = r.filter((c) => !a(c));
  return u.length ? u : r;
}
function sp(r, a, u = {}, c, d = Math.random) {
  const h = So(r);
  if (h) throw new Error(h);
  const p = uf(r), m = _i(r), j = p === "pitch", A = (C) => r.weak ? Ym(u[df({ input: m, check: p, hint: !1, item: C })]) : 1, v = (C) => qi(C, C.map(() => 1), d), _ = ts(r), T = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const C = Ni(_, (se) => !!c && We(se) === We(c.position)), V = qi(C, C.map((se) => A(`notes:${We(se)}`)), d), ee = Le(V.midi, r.flats, j);
    return {
      ...T,
      position: V,
      midi: V.midi,
      name: ee,
      item: `notes:${We(V)}`,
      prompt: `Etsi ${ee} ${Io[V.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const C = (Se) => `ear-note:${Ke(Se.midi)}${r.reference ? ":ref" : ""}`, V = Ni(_, (Se) => !!c && Ke(Se.midi) === Ke(c.midi)), ee = qi(V, V.map((Se) => A(C(Se))), d), se = r.reference ? 57 + 12 * Math.round((ee.midi - 57) / 12) : void 0;
    return {
      ...T,
      position: ee,
      midi: ee.midi,
      name: Le(ee.midi, r.flats),
      item: C(ee),
      choices: "note",
      reference: se,
      sound: se === void 0 ? [ee.midi] : [se, ee.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const C = Ni(_, (ee) => !!c && ee.midi === c.midi), V = qi(C, C.map((ee) => A(`repeat:${ee.midi}`)), d);
    return {
      ...T,
      position: V,
      midi: V.midi,
      name: Le(V.midi, r.flats, !0),
      item: `repeat:${V.midi}`,
      sound: [V.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const C = Ni(vf(r, _), (se) => c?.interval === se.iv && c?.direction === se.direction), V = qi(C, C.map((se) => A(`interval:${se.iv}:${se.direction}`)), d), ee = v(Ni(V.pairs, (se) => c?.reference === se.reference.midi));
    return {
      ...T,
      position: ee.target,
      midi: ee.target.midi,
      name: Le(ee.target.midi, r.flats, !0),
      item: `interval:${V.iv}:${V.direction}`,
      interval: V.iv,
      direction: V.direction,
      reference: ee.reference.midi,
      sound: [ee.reference.midi, ee.target.midi],
      prompt: `Kuulet ${V.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Le(ee.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const O = Ca(r);
  let D, N = 0;
  if (In(r)) {
    const C = ip(r, _);
    N = C.length, D = C[a % C.length];
  } else {
    const C = O.filter(([se]) => _.some((Se) => Ke(Se.midi - r.root) === se)), V = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [O[a % O.length]] : O.filter(([, se]) => se.endsWith(r.chordTone)) : Ni(C, ([se]) => c?.interval === se), [ee] = qi(V, V.map(([se]) => A(Pd(r, se))), d);
    D = v(Ni(_.filter((se) => Ke(se.midi - r.root) === ee), (se) => !!c && We(se) === We(c.position)));
  }
  const w = Ke(D.midi - r.root), z = O.find(([C]) => C === w)[1], E = Jr(r.root, w, z), F = j ? E + Bm(D.midi, E) : E, I = r.mode === "scale" ? `${oi(r.root)}-${De.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${oi(r.root)}-duurisointu, ${r.shape}-muoto` : lf(r.root, r.chord), Q = r.mode !== "caged" && r.activity === "degree", B = Q ? `${I}: mikä aste on ${E}?` : N ? `${I} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % N + 1}/${N}: ${z}. aste (${F}).` : `${I}: etsi ${z}. aste${j ? ` (${F})` : ""}.`;
  return {
    ...T,
    position: D,
    midi: D.midi,
    name: F,
    item: Pd(r, w),
    prompt: B,
    degree: z,
    interval: w,
    choices: Q ? "degree" : "position"
  };
}
function wo(r, a, u) {
  return Number.isInteger(a) && (u === "class" ? Ke(r) === Ke(a) : r === a);
}
function yf(r, a, u) {
  return wo(a.midi, u.midi, a.check) ? r.mode === "notes" ? u.string === a.position.string : ep(r) ? ts(r).some((c) => We(c) === We(u)) : !0 : !1;
}
function ap(r, a) {
  const u = Ti(r);
  return or(u.strings, u.min, u.max).filter((c) => yf(r, a, c));
}
const Nt = (r, a, u) => ({ ...r, label: a, kind: u }), lp = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function op(r, a, u) {
  if (u <= 0) return { marks: [], text: "" };
  const c = u >= 2, d = Ti(r), h = or(d.strings, d.min, d.max), p = ap(r, a);
  if (r.mode === "notes") {
    if (c) return { marks: p.map((z) => Nt(z, a.name, "answer")), text: `${a.name} on ${af[a.position.string]}: ${Ci(a.position.fret)}.` };
    const N = h.find((z) => z.string === a.position.string), w = Le(N.midi, r.flats);
    return {
      marks: [Nt(N, w, "anchor")],
      text: `Apupiste: ${Km[N.string]} ${N.fret === 0 ? "vapaa sävel" : N.fret + ". nauhan sävel"} on ${w}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return c ? { marks: [Nt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Nt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${rn[a.position.string]}-kieli, ${Ci(a.position.fret)}.` };
  if (r.mode === "repeat")
    return c ? { marks: p.map((N) => Nt(N, Le(N.midi, r.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${Io[a.position.string]}.` };
  if (r.mode === "interval") {
    const N = Le(a.reference, r.flats, !0), w = h.filter((z) => z.midi === a.reference).map((z) => Nt(z, N, "anchor"));
    return c ? {
      marks: [...w, ...p.map((z) => Nt(z, Le(z.midi, r.flats, !0), "answer"))],
      text: `${lp(Xr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${N} → ${a.name}.`
    } : { marks: w, text: `Alkusävel ${N} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = ts(r), j = Ca(r), A = (N) => j.find(([w]) => w === Ke(N.midi - r.root))?.[1] ?? "", v = Jr(r.root, a.interval, a.degree), _ = m.filter((N) => Ke(N.midi - r.root) === 0), T = (N) => p.some((w) => We(w) === We(N)), O = `${a.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return c ? { marks: m.map((N) => Nt(N, A(N), T(N) ? "answer" : "shape")), text: O } : { marks: m.map((N) => Nt(N, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const D = r.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const N = m.filter((w) => Ke(w.midi) === Ke(a.midi));
    return c ? { marks: [...(a.interval === 0 ? [] : _).map((w) => Nt(w, "1", "anchor")), ...N.map((w) => Nt(w, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: N.map((w) => Nt(w, v, "shape")), text: `Katso ${D} nimeä: mikä on sen perussävel?` } : {
      marks: [..._.map((w) => Nt(w, "1", "anchor")), ...N.map((w) => Nt(w, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return c ? { marks: [..._.filter((N) => !T(N)).map((N) => Nt(N, "1", "anchor")), ...p.map((N) => Nt(N, a.degree, "answer"))], text: O } : a.interval === 0 ? { marks: [], text: `1. aste on ${D} perussävel ${oi(r.root)}.` } : { marks: _.map((N) => Nt(N, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class up {
  constructor(a, u, c, d = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = u, this.record = c, this.now = d, this.random = h, this.total = kf(a);
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
      this.question = sp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = rp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
  answer(a, u, c, d = 0) {
    if (this.phase !== "active" || !this.question) return "ignored";
    const h = this.question;
    if (!(u === "degree" ? a === h.interval : u === "note" ? wo(h.midi, a, "class") : u === "board" ? !!c && yf(this.settings, h, c) : wo(h.midi, a, h.check)))
      return u === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = u === "board" ? c : void 0, j = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${We(m)}` : h.item,
      mode: this.settings.mode,
      input: u,
      check: h.check,
      expected: h.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, d)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? j.position = We(m) : this.settings.mode === "notes" && (j.position = We(h.position)), this.results.push(j), this.record(j), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function No(r) {
  const a = r.filter((u) => !u.hint);
  return {
    count: r.length,
    first: r.filter((u) => u.first).length,
    solo: a.length,
    soloFirst: a.filter((u) => u.first).length,
    guided: r.length - a.length,
    ms: r.reduce((u, c) => u + c.ms, 0)
  };
}
const Eo = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], nr = (r) => Eo.find(([a]) => a === r)?.[1] ?? r;
function bt({ label: r, children: a }) {
  const u = b.useId();
  return /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ s.jsx("label", { htmlFor: u, children: r }),
    b.cloneElement(a, { id: u })
  ] });
}
function Ad({ legend: r, name: a, value: u, options: c, onChange: d, disabled: h }) {
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ s.jsx("legend", { children: r }),
    /* @__PURE__ */ s.jsx("div", { className: "choice-row", children: c.map((p) => /* @__PURE__ */ s.jsxs("label", { className: p.value === u ? "selected" : "", children: [
      /* @__PURE__ */ s.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === u, onChange: () => d(p.value) }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        /* @__PURE__ */ s.jsx("strong", { children: p.title }),
        /* @__PURE__ */ s.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Rd(r) {
  const a = Ti(r), u = kf(r), c = _i(r), d = c === "mic" ? "soita kitaralla" : c === "board" ? "vastaa otelaudalta" : c === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${r.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${r.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Ea[r.hints].title} · ${d} · ${In(r) ? `yksi läpisoitto, ${u} säveltä` : u ? `${u} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function bd({ s: r, change: a, locked: u, problem: c }) {
  const d = b.useId(), h = (v, _) => a({ ...r, [v]: _ }), p = Ti(r), m = _i(r) === "note" || _i(r) === "degree", j = ["scale", "chord", "caged"].includes(r.mode), A = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ s.jsxs("fieldset", { className: "settings", disabled: u, children: [
    /* @__PURE__ */ s.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(bt, { label: "Harjoitus", children: /* @__PURE__ */ s.jsx("select", { value: r.mode, onChange: (v) => h("mode", v.target.value), children: Eo.map(([v, _]) => /* @__PURE__ */ s.jsx("option", { value: v, children: _ }, v)) }) }),
      /* @__PURE__ */ s.jsx("p", { className: "mode-note", children: Eo.find(([v]) => v === r.mode)[2] })
    ] }),
    j && /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ s.jsx(bt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ s.jsx("select", { value: r.root, onChange: (v) => h("root", Number(v.target.value)), children: De.CHROM.map((v, _) => /* @__PURE__ */ s.jsx("option", { value: _, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(bt, { label: "Asteikko", children: /* @__PURE__ */ s.jsx("select", { value: r.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(De.SCALES).map(([v, _]) => /* @__PURE__ */ s.jsx("option", { value: v, children: _.name }, v)) }) }),
        /* @__PURE__ */ s.jsx(bt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ s.jsxs("select", { value: r.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ s.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ s.jsx(bt, { label: "Sävelten järjestys", children: /* @__PURE__ */ s.jsxs("select", { value: r.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ s.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ s.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(bt, { label: "Sointutyyppi", children: /* @__PURE__ */ s.jsx("select", { value: r.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(Ei).map(([v, _]) => /* @__PURE__ */ s.jsx("option", { value: v, children: _.name }, v)) }) }),
        /* @__PURE__ */ s.jsx(bt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ s.jsxs("select", { value: r.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
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
      r.mode === "caged" ? /* @__PURE__ */ s.jsx(bt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ s.jsx("select", { value: r.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ s.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ s.jsx(bt, { label: "Tehtävä", children: /* @__PURE__ */ s.jsxs("select", { value: r.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ s.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ s.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ s.jsxs("label", { children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (_) => h("intervals", _.target.checked ? [...r.intervals, v] : r.intervals.filter((T) => T !== v)) }),
        Xr[v]
      ] }, v)) }),
      /* @__PURE__ */ s.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ s.jsx(bt, { label: "Intervallin suunta", children: /* @__PURE__ */ s.jsxs("select", { value: r.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ s.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ s.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ s.jsx(
      Ad,
      {
        legend: "Harjoittelutapa",
        name: `${d}-way`,
        value: r.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Ea[v] }))
      }
    ),
    m ? /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ s.jsx(Ad, { legend: "Vastaustapa", name: `${d}-input`, value: r.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ s.jsx(bt, { label: "Kierroksen pituus", children: /* @__PURE__ */ s.jsxs("select", { value: r.rounds, disabled: In(r), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ s.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ s.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ s.jsx(bt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ s.jsxs("select", { value: In(r) ? "pitch" : r.check, disabled: In(r), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ s.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ s.jsx(bt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ s.jsxs("select", { value: String(r.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ s.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ s.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      In(r) && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
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
          /* @__PURE__ */ s.jsx(bt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ s.jsx(bt, { label: "Viimeinen nauha", children: /* @__PURE__ */ s.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ s.jsx("div", { className: "check-row", children: rn.map((v, _) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.strings.includes(_), onChange: (T) => h("strings", T.target.checked ? [...r.strings, _] : r.strings.filter((O) => O !== _)) }),
          _ + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "check-row", children: [
        A && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (v) => h("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.reference, onChange: (v) => h("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.weak, onChange: (v) => h("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: r.advance, onChange: (v) => h("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: c })
  ] });
}
const cp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat. Korvakuulotehtävät tulevat myöhemmin.", example: "Ensimmäinen harjoitus: Etsi sävelet otelaudalta" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function dp({ onSelect: r }) {
  return /* @__PURE__ */ s.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ s.jsx("div", { className: "learning-grid", children: cp.map((a) => /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(a.id), children: [
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
const fp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Co = 100, gf = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function zo(r) {
  if (r === null || r.trim() === "") return Co;
  const a = Number(r);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Co;
}
function hp() {
  try {
    return zo(localStorage.getItem(gf));
  } catch {
    return Co;
  }
}
function mp(r) {
  try {
    localStorage.setItem(gf, String(zo(String(r))));
  } catch {
  }
}
function Ld(r, a, u = !0) {
  return u ? fp[r] * zo(String(a)) / 100 : 0;
}
function xf(r = () => new Audio()) {
  try {
    const a = r();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const pp = 0.12, vp = 2e3, kp = 3;
function yp(r, a = !1) {
  return a ? !0 : r.atLoopBoundary || r.drift <= pp || r.seeking || r.readyState < kp ? !1 : r.msSinceLastFix >= vp;
}
const gp = 1.5, xp = 0.4, jp = 0.5;
let _o = null, Sp = null;
function wp(r) {
  return _o !== null ? _o : (Sp ??= xf()) ? 0 : xp;
}
class jf {
  constructor(a = wp()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, u, c = !1, d = performance.now()) {
    if (u.readyState < 1 || a.readyState < 1 || !c && (u.paused || a.paused)) return !1;
    const h = u.currentTime - a.currentTime, p = Math.abs(h), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, j = this.lastFix.get(u);
    if (!yp({
      drift: p,
      atLoopBoundary: m,
      seeking: u.seeking,
      readyState: u.readyState,
      msSinceLastFix: j === void 0 ? 1 / 0 : d - j
    }, c)) return !1;
    const A = !a.paused;
    !c && A && j !== void 0 && (this.latency = Math.min(gp, Math.max(0, this.latency - jp * h)), _o = this.latency);
    let v = a.currentTime + (A ? this.latency : 0);
    Number.isFinite(u.duration) && (v = Math.min(v, Math.max(0, u.duration - 0.05)));
    try {
      u.currentTime = v;
    } catch {
      return !1;
    }
    return A ? this.lastFix.set(u, d) : this.lastFix.delete(u), !0;
  }
}
const Np = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class Ep {
  constructor(a = Np) {
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
      const u = this.context.createMediaElementSource(a), c = this.context.createGain();
      return u.connect(c), c.connect(this.context.destination), this.gains.set(a, c), !0;
    } catch {
      return !1;
    }
  }
  routed(a) {
    return !!a && this.gains.has(a);
  }
  setLevel(a, u) {
    const c = this.gains.get(a);
    c && (c.gain.value = u);
  }
  close() {
    const a = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), a?.close().catch(() => {
    });
  }
}
const Cp = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", _p = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function Od(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Sf() {
  const r = b.useRef(null), a = b.useRef(null), [u, c] = b.useState(!1), [d, h] = b.useState(!1), [p, m] = b.useState(!1), [j, A] = b.useState(0), [v, _] = b.useState(0), [T, O] = b.useState(""), D = b.useRef(new jf());
  function N(I = !1) {
    const Q = r.current, B = a.current;
    !Q || !B || !Number.isFinite(Q.currentTime) || D.current.align(Q, B, I);
  }
  function w() {
    r.current?.pause(), a.current?.pause(), c(!1);
  }
  async function z() {
    const I = r.current, Q = a.current;
    if (!(!I || !Q)) {
      if (u) {
        w();
        return;
      }
      O(""), Q.muted = !d, Q.volume = 0.55, I.volume = 0.75, N(!0);
      try {
        await Promise.all(d ? [I.play(), Q.play()] : [I.play()]), N(), c(!0);
      } catch {
        w(), O("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function E(I) {
    const Q = r.current, B = a.current;
    if (!(!Q || !B || !Number.isFinite(I))) {
      Q.currentTime = I;
      try {
        B.currentTime = I;
      } catch {
      }
      A(I);
    }
  }
  function F(I) {
    const Q = r.current, B = a.current;
    if (h(I), !!B) {
      if (B.muted = !I, !I) {
        B.pause();
        return;
      }
      !Q || !u || (N(!0), B.play().catch(() => O("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return b.useEffect(() => {
    const I = () => {
      document.hidden && (r.current?.pause(), a.current?.pause(), c(!1));
    };
    return document.addEventListener("visibilitychange", I), () => {
      document.removeEventListener("visibilitychange", I), r.current?.pause(), a.current?.pause();
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
              checked: d,
              onChange: (I) => F(I.target.checked)
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
              onChange: (I) => m(I.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ s.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        z();
      }, children: u ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(j, v > 0 ? v : 1),
          disabled: !v,
          onChange: (I) => E(Number(I.target.value))
        }
      ),
      /* @__PURE__ */ s.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        Od(j),
        " / ",
        Od(v)
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: Cp,
        loop: p,
        onLoadedMetadata: (I) => _(I.currentTarget.duration),
        onTimeUpdate: (I) => {
          A(I.currentTarget.currentTime), I.currentTarget.paused || N();
        },
        onEnded: () => {
          r.current?.loop || (a.current?.pause(), c(!1), A(v));
        },
        onPause: () => {
          a.current?.pause(), c(!1);
        },
        onError: () => O("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ s.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: _p,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const I = r.current, Q = a.current;
          I?.duration && Q?.duration && Math.abs(I.duration - Q.duration) > 0.15 && O("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => O("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    T && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: T }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const Mp = 4e3;
class $d extends Error {
  name = "MicSetupError";
}
async function Tp(r, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new $d("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const u = {
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
  }, c = await navigator.mediaDevices.getUserMedia(u);
  let d;
  try {
    if (d = a ? a() : new AudioContext(), d.state !== "running") {
      let A;
      await Promise.race([
        d.resume(),
        new Promise((v, _) => {
          A = setTimeout(() => _(new $d("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), Mp);
        })
      ]).finally(() => clearTimeout(A));
    }
    const h = d.createMediaStreamSource(c), p = d, m = c.getAudioTracks?.()[0] ?? c.getTracks()[0], j = m?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: c,
      label: m?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((A) => A.stop()), h.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((p) => p.stop()), a || await d?.close().catch(() => {
    }), h;
  }
}
async function Pp() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var mo, Fd;
function Ap() {
  if (Fd) return mo;
  Fd = 1;
  function r(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var u = new Array(this.size * 2), c = 0; c < u.length; c += 2) {
      const A = Math.PI * c / this.size;
      u[c] = Math.cos(A), u[c + 1] = -Math.sin(A);
    }
    this.table = u;
    for (var d = 0, h = 1; this.size > h; h <<= 1)
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
  return mo = r, r.prototype.fromComplexArray = function(u, c) {
    for (var d = c || new Array(u.length >>> 1), h = 0; h < u.length; h += 2)
      d[h >>> 1] = u[h];
    return d;
  }, r.prototype.createComplexArray = function() {
    const u = new Array(this._csize);
    for (var c = 0; c < u.length; c++)
      u[c] = 0;
    return u;
  }, r.prototype.toComplexArray = function(u, c) {
    for (var d = c || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = u[h >>> 1], d[h + 1] = 0;
    return d;
  }, r.prototype.completeSpectrum = function(u) {
    for (var c = this._csize, d = c >>> 1, h = 2; h < d; h += 2)
      u[c - h] = u[h], u[c - h + 1] = -u[h + 1];
  }, r.prototype.transform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, r.prototype.realTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, r.prototype.inverseTransform = function(u, c) {
    if (u === c)
      throw new Error("Input and output buffers must be different");
    this._out = u, this._data = c, this._inv = 1, this._transform4();
    for (var d = 0; d < u.length; d++)
      u[d] /= this.size;
    this._out = null, this._data = null;
  }, r.prototype._transform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, j, A = this._bitrev;
    if (p === 4)
      for (m = 0, j = 0; m < c; m += p, j++) {
        const w = A[j];
        this._singleTransform2(m, w, h);
      }
    else
      for (m = 0, j = 0; m < c; m += p, j++) {
        const w = A[j];
        this._singleTransform4(m, w, h);
      }
    var v = this._inv ? -1 : 1, _ = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var T = p >>> 2;
      for (m = 0; m < c; m += p)
        for (var O = m + T, D = m, N = 0; D < O; D += 2, N += h) {
          const w = D, z = w + T, E = z + T, F = E + T, I = u[w], Q = u[w + 1], B = u[z], C = u[z + 1], V = u[E], ee = u[E + 1], se = u[F], Se = u[F + 1], te = I, ue = Q, Ne = _[N], H = v * _[N + 1], ae = B * Ne - C * H, ce = B * H + C * Ne, Y = _[2 * N], ie = v * _[2 * N + 1], Z = V * Y - ee * ie, k = V * ie + ee * Y, L = _[3 * N], he = v * _[3 * N + 1], je = se * L - Se * he, U = se * he + Se * L, oe = te + Z, K = ue + k, ne = te - Z, S = ue - k, J = ae + je, re = ce + U, le = v * (ae - je), fe = v * (ce - U), ke = oe + J, Ae = K + re, Me = oe - J, Oe = K - re, Xe = ne + fe, He = S - le, Qe = ne - fe, Ue = S + le;
          u[w] = ke, u[w + 1] = Ae, u[z] = Xe, u[z + 1] = He, u[E] = Me, u[E + 1] = Oe, u[F] = Qe, u[F + 1] = Ue;
        }
    }
  }, r.prototype._singleTransform2 = function(u, c, d) {
    const h = this._out, p = this._data, m = p[c], j = p[c + 1], A = p[c + d], v = p[c + d + 1], _ = m + A, T = j + v, O = m - A, D = j - v;
    h[u] = _, h[u + 1] = T, h[u + 2] = O, h[u + 3] = D;
  }, r.prototype._singleTransform4 = function(u, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, j = d * 2, A = d * 3, v = p[c], _ = p[c + 1], T = p[c + d], O = p[c + d + 1], D = p[c + j], N = p[c + j + 1], w = p[c + A], z = p[c + A + 1], E = v + D, F = _ + N, I = v - D, Q = _ - N, B = T + w, C = O + z, V = m * (T - w), ee = m * (O - z), se = E + B, Se = F + C, te = I + ee, ue = Q - V, Ne = E - B, H = F - C, ae = I - ee, ce = Q + V;
    h[u] = se, h[u + 1] = Se, h[u + 2] = te, h[u + 3] = ue, h[u + 4] = Ne, h[u + 5] = H, h[u + 6] = ae, h[u + 7] = ce;
  }, r.prototype._realTransform4 = function() {
    var u = this._out, c = this._csize, d = this._width, h = 1 << d, p = c / h << 1, m, j, A = this._bitrev;
    if (p === 4)
      for (m = 0, j = 0; m < c; m += p, j++) {
        const Te = A[j];
        this._singleRealTransform2(m, Te >>> 1, h >>> 1);
      }
    else
      for (m = 0, j = 0; m < c; m += p, j++) {
        const Te = A[j];
        this._singleRealTransform4(m, Te >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, _ = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = c / h << 1;
      var T = p >>> 1, O = T >>> 1, D = O >>> 1;
      for (m = 0; m < c; m += p)
        for (var N = 0, w = 0; N <= D; N += 2, w += h) {
          var z = m + N, E = z + O, F = E + O, I = F + O, Q = u[z], B = u[z + 1], C = u[E], V = u[E + 1], ee = u[F], se = u[F + 1], Se = u[I], te = u[I + 1], ue = Q, Ne = B, H = _[w], ae = v * _[w + 1], ce = C * H - V * ae, Y = C * ae + V * H, ie = _[2 * w], Z = v * _[2 * w + 1], k = ee * ie - se * Z, L = ee * Z + se * ie, he = _[3 * w], je = v * _[3 * w + 1], U = Se * he - te * je, oe = Se * je + te * he, K = ue + k, ne = Ne + L, S = ue - k, J = Ne - L, re = ce + U, le = Y + oe, fe = v * (ce - U), ke = v * (Y - oe), Ae = K + re, Me = ne + le, Oe = S + ke, Xe = J - fe;
          if (u[z] = Ae, u[z + 1] = Me, u[E] = Oe, u[E + 1] = Xe, N === 0) {
            var He = K - re, Qe = ne - le;
            u[F] = He, u[F + 1] = Qe;
            continue;
          }
          if (N !== D) {
            var Ue = S, gt = -J, Ze = K, Ve = -ne, it = -v * ke, Tt = -v * fe, Gt = -v * le, zt = -v * re, sn = Ue + it, Wt = gt + Tt, dt = Ze + zt, Dn = Ve - Gt, we = m + O - N, Qt = m + T - N;
            u[we] = sn, u[we + 1] = Wt, u[Qt] = dt, u[Qt + 1] = Dn;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(u, c, d) {
    const h = this._out, p = this._data, m = p[c], j = p[c + d], A = m + j, v = m - j;
    h[u] = A, h[u + 1] = 0, h[u + 2] = v, h[u + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(u, c, d) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, j = d * 2, A = d * 3, v = p[c], _ = p[c + d], T = p[c + j], O = p[c + A], D = v + T, N = v - T, w = _ + O, z = m * (_ - O), E = D + w, F = N, I = -z, Q = D - w, B = N, C = z;
    h[u] = E, h[u + 1] = 0, h[u + 2] = F, h[u + 3] = I, h[u + 4] = Q, h[u + 5] = 0, h[u + 6] = B, h[u + 7] = C;
  }, mo;
}
var Rp = Ap();
const bp = /* @__PURE__ */ _m(Rp);
class Wr {
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
    return new Wr(
      a,
      (u) => new Float32Array(u)
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
    return new Wr(
      a,
      (u) => new Float64Array(u)
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
    return new Wr(a, (u) => Array(u));
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
  constructor(a, u) {
    if (a < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = a, this._fft = new bp($p(2 * a)), this._bufferSupplier = u, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(a, u = this._bufferSupplier(a.length)) {
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
      u[d] = this._inverseBuffer[2 * d];
    return u;
  }
}
function Lp(r) {
  const a = [];
  let u = !1, c = -1 / 0, d = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (u = !0, d = h, c = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (u = !1, d !== -1 && a.push(d)) : u && r[h] > c && (c = r[h], d = h);
  return a;
}
function Op(r, a) {
  const [u, c, d] = [r - 1, r, r + 1], [h, p, m] = [a[u], a[c], a[d]], j = h / 2 - p + m / 2, A = -(h / 2) * (c + d) + p * (u + d) - m / 2 * (u + c), v = h * c * d / 2 - p * u * d + m * u * c / 2, _ = -A / (2 * j), T = j * _ * _ + A * _ + v;
  return [_, T];
}
class Qr {
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
    return new Qr(a, (u) => new Float32Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new Qr(a, (u) => new Float64Array(u));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new Qr(a, (u) => Array(u));
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
  constructor(a, u) {
    this._autocorrelator = new Wr(a, u), this._nsdfBuffer = u(a);
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
  findPitch(a, u) {
    if (this._belowMinimumVolume(a)) return [0, 0];
    this._nsdf(a);
    const c = Lp(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const d = Math.max(...c.map((j) => this._nsdfBuffer[j])), h = c.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * d
    ), [p, m] = Op(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [u / p, Math.min(m, 1)];
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
    let u = 0;
    for (let c = 0; c < a.length; c++)
      u += a[c] ** 2;
    return Math.sqrt(u / a.length) < this._minVolumeAbsolute;
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
    let u = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && u > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / u, u -= a[c] ** 2 + a[a.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function $p(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function Fp(r) {
  const a = r * 0.17;
  let u = 2048;
  for (; u < a && u < 32768; ) u *= 2;
  return u;
}
const Ip = 0.05, Dp = 1.5;
class zp {
  constructor(a, u = {}) {
    this.mic = a, this.opts = u;
    const c = a.context, d = Fp(c.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const m = c.createAnalyser();
      m.fftSize = d, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(c.sampleRate * Ip))), this.detector = Qr.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Vp();
  onset = new Bp();
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
      minClarity: u = 0.9,
      minRms: c = 0.01,
      stabilityMs: d = 240,
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: j,
      onStableNote: A
    } = this.opts, v = this.analysers.map((C, V) => (C.getFloatTimeDomainData(this.buffers[V]), Id(this.buffers[V], this.buffers[V].length - this.shortLength))), _ = v.indexOf(Math.max(...v));
    _ !== this.channel && v[_] > (v[this.channel] ?? 0) * Dp && (this.channel = _);
    const T = this.buffers[this.channel], O = v[this.channel], D = Kp(T, T.length - this.shortLength), N = { rms: O, peak: D, channel: this.channel, levels: v }, w = O < c, z = this.onset.feed(O, a, c);
    if (w && Id(T, 0) < c) {
      this.gate.feed(null, a, d, !0, !1), j?.({ ...N, status: "silent" });
      return;
    }
    const [E, F] = this.detector.findPitch(T, this.mic.context.sampleRate);
    if (!isFinite(E) || F < u) {
      this.gate.feed(null, a, d, w, z), j?.({ ...N, status: w ? "silent" : "unclear", clarity: isFinite(F) ? F : 0 });
      return;
    }
    if (E < p || E > m) {
      this.gate.feed(null, a, d, w, z), j?.({ ...N, status: "out-of-range", frequency: E, clarity: F });
      return;
    }
    const { midi: I, cents: Q } = Dm(E);
    if (Math.abs(Q) > h) {
      this.gate.feed(null, a, d, w, z), j?.({ ...N, status: "off-pitch", frequency: E, clarity: F, midi: I, cents: Q });
      return;
    }
    j?.({ ...N, status: "pitch", frequency: E, clarity: F, midi: I, cents: Q });
    const B = this.gate.feed(I, a, d, w, z);
    B !== null && A?.({ midi: I, frequency: E, cents: Q, clarity: F, timestamp: a, heldMs: B.heldMs });
  }
}
class Vp {
  constructor(a = 120, u = 80) {
    this.releaseMs = a, this.gapMs = u;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(a, u, c, d, h) {
    if (d ? (this.quietSince ??= u, u - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), a === null)
      return this.current && u - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: u, seen: u }), this.current.seen = u;
    const p = u - this.current.since;
    return p < c ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class Bp {
  constructor(a = 2, u = 300, c = 150) {
    this.ratio = a, this.windowMs = u, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(a, u, c) {
    if (u - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: u, rms: a }], !1;
    for (; this.history.length && u - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : a;
    return this.history.push({ time: u, rms: a }), a < c * 1.5 || a < d * this.ratio ? !1 : (this.lastOnset = u, this.history = [{ time: u, rms: a }], !0);
  }
}
function Id(r, a = 0) {
  const u = Math.max(0, a);
  let c = 0;
  for (let d = u; d < r.length; d++) c += r[d] * r[d];
  return Math.sqrt(c / Math.max(1, r.length - u));
}
function Kp(r, a = 0) {
  let u = 0;
  for (let c = Math.max(0, a); c < r.length; c++) {
    const d = Math.abs(r[c]);
    d > u && (u = d);
  }
  return u;
}
const lr = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let tr;
function wf() {
  return (!tr || tr.state === "closed") && (tr = new AudioContext()), tr;
}
function Hp() {
  const r = tr;
  tr = void 0, r?.close().catch(() => {
  });
}
const Nf = (r) => r instanceof Error ? r.name : "";
function Up(r) {
  const a = Nf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Gp {
  constructor(a = (u) => Tp(u, wf)) {
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
  async start(a, u, c) {
    this.stop();
    const d = this.generation;
    let h, p = !1;
    try {
      h = await this.opener(a || void 0);
    } catch (m) {
      if (!a || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Nf(m))) throw m;
      h = await this.opener(void 0), p = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new zp(h, { ...u });
      const m = () => {
        this.mic === h && (this.stop(), c());
      }, j = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((A) => A.addEventListener("ended", m, { once: !0, signal: j.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && m();
      }, { signal: j.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
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
function Ef(r, a) {
  return r !== "on" ? r : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const Dd = (r) => Math.max(0, Math.min(1, (lr(r) + 60) / 60));
function Wp(r) {
  const a = [...r].sort((c, d) => c - d), u = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, u * 3)), noise: u, loud: u > 0.04 };
}
async function zd(r) {
  const a = () => r.state === "running";
  if (a()) return;
  let u;
  try {
    await Promise.race([
      r.resume(),
      new Promise((c, d) => {
        u = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    u !== void 0 && clearTimeout(u);
  }
  if (!a()) throw new Error("reference-audio-not-running");
}
function Vo(r) {
  const a = r instanceof Error ? r.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class _a {
  constructor(a = wf) {
    this.provide = a;
  }
  provide;
  master;
  token = 0;
  timer;
  loopTick;
  adjustLoopTempo;
  settle;
  /** Keskeyttää soivan esimerkin heti. Kesken jäänyt play palauttaa false. */
  stop() {
    this.token++, clearTimeout(this.timer), clearInterval(this.loopTick), this.loopTick = void 0, this.adjustLoopTempo = void 0, this.settle?.(!1), this.settle = void 0, this.master?.disconnect(), this.master = void 0;
  }
  async play(a) {
    this.stop();
    const u = this.token, c = this.provide();
    if (await zd(c), u !== this.token) return !1;
    const d = c.createGain();
    d.connect(c.destination), this.master = d;
    const h = Array.from({ length: 12 }, (j, A) => 1 / (A + 1) ** 1.3), p = c.createPeriodicWave?.(new Float32Array([0, ...h.map(() => 0)]), new Float32Array([0, ...h]));
    return a.forEach((j, A) => {
      const v = c.createOscillator(), _ = c.createGain(), T = c.currentTime + 0.05 + A * 0.8;
      p ? v.setPeriodicWave(p) : v.type = "triangle", v.frequency.value = wd(j), _.gain.setValueAtTime(0, T), _.gain.linearRampToValueAtTime(0.22, T + 0.012), _.gain.exponentialRampToValueAtTime(1e-3, T + 0.7), v.connect(_), _.connect(d), v.start(T), v.stop(T + 0.72);
    }), !await new Promise((j) => {
      this.settle = j, this.timer = setTimeout(() => j(!0), a.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, d.disconnect(), this.master = void 0, !0);
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
  async loop(a, u, c = 75) {
    if (this.stop(), !a.length) return !1;
    const d = this.token, h = this.provide();
    if (await zd(h), d !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const m = Array.from({ length: 12 }, (N, w) => 1 / (w + 1) ** 1.3), j = h.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let A = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (N) => {
      d === this.token && Number.isFinite(N) && (A = 60 / Math.max(40, Math.min(140, N)));
    };
    const v = 1.6;
    let _ = h.currentTime + 0.05, T = 0;
    const O = [], D = () => {
      if (d === this.token) {
        if (_ < h.currentTime - 0.02) {
          const N = Math.ceil((h.currentTime - _) / A);
          _ += N * A, T = (T + N) % a.length, O.length = 0;
        }
        for (; _ < h.currentTime + v; ) {
          const N = a[T], w = T, z = _, E = h.createOscillator(), F = h.createGain();
          j ? E.setPeriodicWave(j) : E.type = "triangle", E.frequency.value = wd(N), F.gain.setValueAtTime(0, z), F.gain.linearRampToValueAtTime(0.22, z + 0.012), F.gain.exponentialRampToValueAtTime(1e-3, z + A * 0.975), E.connect(F), F.connect(p), E.start(z), E.stop(z + A * 0.985), O.push({ at: z, index: w }), _ += A, T = (T + 1) % a.length;
        }
        for (; O.length && O[0].at <= h.currentTime + 0.01; ) {
          const N = O.shift();
          u?.(N.index);
        }
      }
    };
    return D(), this.loopTick = setInterval(D, 25), new Promise((N) => {
      this.settle = N;
    });
  }
}
const Mo = De.fingeringBoxes(9, De.SCALES.mp, "pentatonic", [1, 2]), Cf = [...new Map(Mo.flatMap((r) => r.positions[0].strings.flatMap((a, u) => a.map((c) => {
  const d = Ie(u, c);
  return [We(d), d];
})))).values()].sort((r, a) => r.midi - a.midi || a.string - r.string), Sa = [5, 4, 3, 2, 1, 0].flatMap((r) => Cf.filter((a) => a.string === r).sort((a, u) => a.fret - u.fret)), To = [
  ...Sa,
  ...Sa.slice(1, -1).reverse()
], Qp = [...To, Sa[0]], Vd = new Set(
  Mo[0].positions[0].strings.flatMap((r, a) => r.map((u) => {
    const c = Ie(a, u);
    return We(c);
  })).filter((r) => Mo[1].positions[0].strings.flatMap((a, u) => a.map((c) => We(Ie(u, c)))).includes(r))
), Yp = [
  Ie(5, 5),
  Ie(5, 8),
  Ie(5, 10),
  Ie(4, 7),
  Ie(4, 10),
  Ie(3, 7),
  Ie(3, 10),
  Ie(3, 7),
  Ie(4, 10),
  Ie(4, 7),
  Ie(5, 10),
  Ie(5, 8),
  Ie(5, 5)
], _f = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Mf = "musiikin-kartta:skaalapolku:bridge-tempo:v1", po = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], Bd = (r) => Ke(r) === 9;
function Kd() {
  try {
    const r = Number(localStorage.getItem(_f));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Jp() {
  try {
    const r = Number(localStorage.getItem(Mf));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Xp({ onBack: r, onPosition: a }) {
  const [u, c] = b.useState(Kd), [d, h] = b.useState(Kd), [p, m] = b.useState(!1), [j, A] = b.useState("roots"), [v, _] = b.useState(Jp), [T, O] = b.useState(null), [D, N] = b.useState(null), [w, z] = b.useState(""), E = b.useRef(new _a()), F = b.useRef(0), I = D === null ? null : To[D];
  function Q() {
    F.current++, E.current.stop(), O(null), N(null);
  }
  b.useEffect(() => {
    const te = () => {
      document.hidden && (F.current++, E.current.stop(), O(null), N(null));
    };
    return document.addEventListener("visibilitychange", te), () => {
      document.removeEventListener("visibilitychange", te), F.current++, E.current.stop();
    };
  }, []);
  async function B(te) {
    const ue = ++F.current;
    E.current.stop(), N(null), z(""), O(te);
    try {
      te === "transition" ? await E.current.play(Yp.map((Ne) => Ne.midi)) : te === "once" ? await E.current.play(Qp.map((Ne) => Ne.midi)) : await E.current.loop(To.map((Ne) => Ne.midi), (Ne) => {
        ue === F.current && N(Ne);
      }, v);
    } catch (Ne) {
      ue === F.current && z(Vo(Ne));
    } finally {
      ue === F.current && (O(null), N(null));
    }
  }
  function C(te) {
    const ue = Math.max(40, Math.min(140, te));
    _(ue), E.current.setLoopTempo(ue);
    try {
      localStorage.setItem(Mf, String(ue));
    } catch {
    }
  }
  function V(te) {
    te > u || (Q(), h(te), m(!1), A("roots"));
  }
  function ee() {
    Q();
    const te = Math.min(4, d + 1);
    if (h(te), m(!1), A("roots"), te > u) {
      c(te);
      try {
        localStorage.setItem(_f, String(te));
      } catch {
      }
    }
  }
  const se = (te, ue) => d < 2 || d === 2 && p && Vd.has(ue) || d === 3 && (j === "all" || j === "roots" && Bd(te)), Se = Cf.filter((te) => se(te.midi, We(te))).map((te) => ({
    ...te,
    label: d < 2 || d === 2 && p || d === 3 && j === "all" ? Le(te.midi) : "A",
    kind: d < 2 && I?.string === te.string && I?.fret === te.fret ? "playing" : Bd(te.midi) ? "answer" : Vd.has(We(te)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Q(), r();
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
        Q(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
        Q(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => V(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: po.map((te, ue) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: ue === d ? "journey-step current" : "journey-step",
        "aria-current": ue === d ? "step" : void 0,
        disabled: ue > u,
        onClick: () => V(ue),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: ue > u ? "🔒" : ue < u ? "✓" : ue + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: te.title })
        ]
      },
      te.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: po[d].title }),
        /* @__PURE__ */ s.jsx("span", { children: d === 4 ? "Valmis" : `Harjoitus ${d + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: po[d].detail }),
      d < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        d === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ s.jsxs("p", { children: [
            /* @__PURE__ */ s.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        d === 1 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ s.jsxs("strong", { children: [
              Sa.length,
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
        d === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        d === 3 && /* @__PURE__ */ s.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        d === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => C(v - 5), children: "− 5" }),
          /* @__PURE__ */ s.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => C(v + 5), children: "+ 5" }),
          /* @__PURE__ */ s.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        d < 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "whole",
              onClick: () => T === "whole" ? Q() : void B("whole"),
              children: T === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "once",
              onClick: () => T === "once" ? Q() : void B("once"),
              children: T === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": T === "transition",
              onClick: () => T === "transition" ? Q() : void B("transition"),
              children: T === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        d === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((te) => !te), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => V(1), children: "← Palaa sormitukseen" })
        ] }),
        d === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((te) => /* @__PURE__ */ s.jsxs("label", { children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: te.value,
                  checked: j === te.value,
                  onChange: () => A(te.value)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: te.name })
            ] }, te.value))
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => T === "once" ? Q() : void B("once"), children: T === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => T === "transition" ? Q() : void B("transition"), children: T === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        d !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: T === "whole" ? I && d < 2 ? `Nyt soi ${Le(I.midi, !1, !0)} · ${rn[I.string]}-kieli, nauha ${I.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : T === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : T === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        w && /* @__PURE__ */ s.jsx("p", { role: "alert", className: "error", children: w }),
        /* @__PURE__ */ s.jsx(
          Mi,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            marks: Se,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          d === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : d === 3 ? j === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : j === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        d === 3 && /* @__PURE__ */ s.jsx(Sf, {}),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: d === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : d === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : d === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: ee, children: d === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      d === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ s.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => V(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsx("p", { children: u === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const Yr = "musiikin-kartta:skaalapolku:v1", va = "musiikin-kartta:skaalapolku:position-2:v1", vo = "musiikin-kartta:skaalapolku:position-3:v1", ka = "musiikin-kartta:skaalapolku:bridge-1-2:v1", wa = "musiikin-kartta:skaalapolku:active-position:v1", Tf = "musiikin-kartta:skaalapolku:tempo:v1", ir = 75, Po = 40, Ao = 140;
function Zp() {
  try {
    const r = localStorage.getItem(Tf);
    if (r === null) return ir;
    const a = Number(r);
    return Number.isInteger(a) && a >= Po && a <= Ao && a % 5 === 0 ? a : ir;
  } catch {
    return ir;
  }
}
const ko = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], Hd = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
];
function Nn(r = Yr) {
  try {
    const a = Number(localStorage.getItem(r));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function yo() {
  try {
    const r = localStorage.getItem(wa);
    return r === "3" && Nn(ka) === 4 ? 3 : Nn(Yr) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function qp() {
  try {
    return Nn(va) === 4 && localStorage.getItem(wa) === "bridge";
  } catch {
    return !1;
  }
}
function ev({ onBack: r }) {
  const [a, u] = b.useState(yo), [c, d] = b.useState(qp), [h, p] = b.useState(() => ({
    1: Nn(Yr),
    2: Nn(va),
    3: Nn(vo)
  })), [m, j] = b.useState(() => Nn(yo() === 3 ? vo : yo() === 2 ? va : Yr)), A = h[a], [v, _] = b.useState(!1), [T, O] = b.useState("roots"), [D, N] = b.useState(Zp), [w, z] = b.useState(null), [E, F] = b.useState(null), [I, Q] = b.useState(""), B = b.useRef(new _a()), C = b.useRef(0);
  function V(U) {
    const oe = Math.max(Po, Math.min(Ao, U));
    N(oe), B.current.setLoopTempo(oe);
    try {
      localStorage.setItem(Tf, String(oe));
    } catch {
    }
  }
  function ee() {
    C.current++, B.current.stop(), z(null), F(null);
  }
  b.useEffect(() => {
    const U = () => {
      document.hidden && (C.current++, B.current.stop(), z(null), F(null));
    };
    return document.addEventListener("visibilitychange", U), () => {
      document.removeEventListener("visibilitychange", U), C.current++, B.current.stop();
    };
  }, []);
  const se = De.fingeringBoxes(9, De.SCALES.mp, "pentatonic", [a])[0].positions[0], Se = se.strings.flatMap((U, oe) => U.map((K) => Ie(oe, K))).sort((U, oe) => U.midi - oe.midi || oe.string - U.string), te = [...Se, ...Se.slice(1, -1).reverse()], ue = E === null ? null : te[E], Ne = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], H = se.start, ae = se.end, ce = (U) => Ke(U) === 9, Y = (U) => m < 2 ? !0 : m === 2 ? v && ce(U) : T === "scale" || T === "roots" && ce(U), ie = Se.filter((U) => Y(U.midi)).map((U) => ({
    ...U,
    label: m < 2 || m === 3 && T === "scale" ? Le(U.midi) : "A",
    kind: m < 2 && ue?.string === U.string && ue.fret === U.fret ? "playing" : ce(U.midi) ? "answer" : "shape"
  }));
  async function Z(U) {
    const oe = ++C.current;
    B.current.stop(), F(null), Q(""), z(U);
    try {
      U === "phrase" ? await B.current.play(Ne) : await B.current.loop(te.map((K) => K.midi), (K) => {
        oe === C.current && F(K);
      }, m === 2 ? D : ir);
    } catch (K) {
      oe === C.current && Q(Vo(K));
    } finally {
      oe === C.current && (z(null), F(null));
    }
  }
  function k() {
    ee();
    const U = Math.min(4, m + 1);
    if (j(U), _(!1), O("roots"), U > A) {
      p((K) => ({ ...K, [a]: U }));
      const oe = a === 1 ? Yr : a === 2 ? va : vo;
      try {
        localStorage.setItem(oe, String(U));
      } catch {
      }
    }
  }
  function L(U) {
    U > A || (ee(), j(U), _(!1), O("roots"));
  }
  function he(U) {
    if (!(U === 2 && h[1] < 4) && !(U === 3 && Nn(ka) < 4)) {
      ee(), d(!1), u(U), j(h[U]), _(!1), O("roots"), Q("");
      try {
        localStorage.setItem(wa, String(U));
      } catch {
      }
    }
  }
  function je() {
    if (!(h[2] < 4)) {
      ee(), d(!0), _(!1), Q("");
      try {
        localStorage.setItem(wa, "bridge");
      } catch {
      }
    }
  }
  return c ? /* @__PURE__ */ s.jsx(Xp, { onBack: r, onPosition: he }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
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
      H,
      "–",
      ae,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => he(1), children: "Positio 1" }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: h[1] < 4,
          onClick: () => he(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: je,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: Nn(ka) < 4,
          onClick: () => he(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: ko.map((U, oe) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: oe === m ? "journey-step current" : "journey-step",
        "aria-current": oe === m ? "step" : void 0,
        disabled: oe > A,
        onClick: () => L(oe),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: oe > A ? "🔒" : oe < A ? "✓" : oe + 1 }),
          /* @__PURE__ */ s.jsx("span", { children: oe === 4 ? `Positio ${a} harjoiteltu` : U.title })
        ]
      },
      U.title
    )) }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : ko[m].title }),
        /* @__PURE__ */ s.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: ko[m].detail }),
      m < 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        m === 0 && /* @__PURE__ */ s.jsx("p", { children: "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. Kuuntele myös lyhyt mallifraasi. Ääni on syntetisoitu." }),
        m === 0 && a === 2 && /* @__PURE__ */ s.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ s.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ s.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ s.jsx("p", { children: "Kuuntele mallifraasi. Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A." }),
        m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ s.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: D <= Po,
              onClick: () => V(D - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            D,
            " BPM"
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: D >= Ao,
              onClick: () => V(D + 5),
              children: "+ 5"
            }
          ),
          D !== ir && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => V(ir),
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
              "aria-pressed": w === "loop",
              onClick: () => w === "loop" ? ee() : void Z("loop"),
              children: w === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => w === "phrase" ? ee() : void Z("phrase"), children: w === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: w === "loop" ? ue && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Le(ue.midi, !1, !0)} · ${rn[ue.string]}-kieli, nauha ${ue.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        I && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: I }),
        m >= 1 && m <= 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          m === 2 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": v, onClick: () => _((U) => !U), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => L(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              Hd.map((U) => /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: U.value,
                    checked: T === U.value,
                    onChange: () => O(U.value)
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { children: U.label })
              ] }, U.value))
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
              Z("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ s.jsx(Mi, { area: { strings: [0, 1, 2, 3, 4, 5], min: H, max: ae, fixed: "box" }, marks: ie, disabled: !0, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? Hd.find((U) => U.value === T).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(Mi, { area: { strings: [0, 1, 2, 3, 4, 5], min: H, max: ae, fixed: "box" }, marks: ie, disabled: !0, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        m === 3 && /* @__PURE__ */ s.jsx(Sf, {}, a),
        /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ s.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: k, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ s.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => L(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => he(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: je, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => he(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Nn(ka) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const tv = ["ionian", "aeolian"], Gr = {
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
      Ie(4, 3),
      Ie(4, 5),
      Ie(3, 2),
      Ie(3, 3),
      Ie(3, 5),
      Ie(2, 2),
      Ie(2, 4),
      Ie(2, 5)
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
      Ie(5, 5),
      Ie(5, 7),
      Ie(5, 8),
      Ie(4, 5),
      Ie(4, 7),
      Ie(4, 8),
      Ie(3, 5),
      Ie(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, Pf = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", Af = "musiikin-kartta:moodipolku:active:v1", nv = (r) => {
  const a = Gr[r].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Ud = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function ya(r) {
  try {
    const a = Number(localStorage.getItem(Pf(r)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function Gd() {
  try {
    return localStorage.getItem(Af) === "aeolian" && ya("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function iv({ onBack: r }) {
  const [a, u] = b.useState(Gd), [c, d] = b.useState(() => ({
    ionian: ya("ionian"),
    aeolian: ya("aeolian")
  })), [h, p] = b.useState(() => ya(Gd())), [m, j] = b.useState(null), [A, v] = b.useState(null), [_, T] = b.useState(!1), [O, D] = b.useState("roots"), [N, w] = b.useState(""), [z, E] = b.useState(null), [F, I] = b.useState(null), Q = b.useRef(new _a()), B = b.useRef(0), C = Gr[a], V = nv(a), ee = m === "scale" && A !== null ? V[A] : null;
  function se() {
    B.current++, Q.current.stop(), j(null), v(null);
  }
  b.useEffect(() => {
    const k = () => {
      document.hidden && (B.current++, Q.current.stop(), j(null), v(null));
    };
    return document.addEventListener("visibilitychange", k), () => {
      document.removeEventListener("visibilitychange", k), B.current++, Q.current.stop();
    };
  }, []);
  async function Se(k, L, he = !1) {
    const je = ++B.current;
    Q.current.stop(), v(null), w(""), j(k);
    try {
      const U = he ? await Q.current.loop(L, (oe) => {
        je === B.current && k === "scale" && v(oe);
      }, 75) : await Q.current.play(L);
      return je === B.current && U;
    } catch (U) {
      return je === B.current && w(Vo(U)), !1;
    } finally {
      je === B.current && (j(null), v(null));
    }
  }
  function te(k) {
    k > c[a] || (se(), p(k), E(null), I(null), T(!1), D("roots"), w(""));
  }
  function ue() {
    se();
    const k = Math.min(5, h + 1);
    if (p(k), E(null), I(null), T(!1), D("roots"), k > c[a]) {
      d((L) => ({ ...L, [a]: k }));
      try {
        localStorage.setItem(Pf(a), String(k));
      } catch {
      }
    }
  }
  function Ne(k) {
    if (!(k === "aeolian" && c.ionian < 5)) {
      se(), u(k), p(c[k]), E(null), I(null), T(!1), D("roots"), w("");
      try {
        localStorage.setItem(Af, k);
      } catch {
      }
    }
  }
  async function H() {
    se(), I(null), E(null);
    const k = Math.random() < 0.5 ? "ionian" : "aeolian";
    await Se("comparison", Gr[k].phrase) && E(k);
  }
  const ae = (k) => Ke(k) === C.tonic, ce = C.positions.filter((k) => h < 2 ? !0 : h === 2 ? _ && ae(k.midi) : h === 4 ? O === "all" || O === "roots" && ae(k.midi) : !1).map((k) => ({
    ...k,
    label: h === 2 || h === 4 && O === "roots" ? C.tonicName : Le(k.midi),
    kind: ee?.string === k.string && ee.fret === k.fret ? "playing" : ae(k.midi) ? "answer" : "shape"
  })), Y = [...new Set(C.positions.map((k) => k.string))], ie = Math.min(...C.positions.map((k) => k.fret)), Z = Math.max(...C.positions.map((k) => k.fret));
  return /* @__PURE__ */ s.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
      se(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ s.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      tv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ s.jsxs("h2", { id: "mode-path-title", children: [
      C.title,
      " · ",
      C.alias
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: C.explanation }),
    /* @__PURE__ */ s.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ s.jsx("strong", { children: C.noteNames }),
      " · Pohjasävel ",
      C.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => Ne("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: c.ionian < 5,
          onClick: () => Ne("aeolian"),
          children: [
            "2. A-aiolinen ",
            c.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ s.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      Ud.map((k, L) => /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: h === L ? "journey-step current" : "journey-step",
          "aria-current": h === L ? "step" : void 0,
          disabled: L > c[a],
          onClick: () => te(L),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: L > c[a] ? "🔒" : L < c[a] ? "✓" : L + 1 }),
            /* @__PURE__ */ s.jsx("span", { children: k })
          ]
        },
        k
      )),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: h === 5 ? "journey-step current" : "journey-step",
          disabled: c[a] < 5,
          "aria-current": h === 5 ? "step" : void 0,
          onClick: () => te(5),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "journey-index", children: c[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ s.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { id: "mode-lesson-title", children: h === 5 ? "Moodi harjoiteltu" : Ud[h] }),
        /* @__PURE__ */ s.jsx("span", { children: h === 5 ? "Valmis" : "Harjoitus " + (h + 1) + " / 5" })
      ] }),
      h === 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Kuuntele ensin asteikko ja sitten fraasi, joka päättyy ",
          C.tonicName,
          "-säveleen. Kuule, miten pohjasävel tuntuu melodian päätepisteeltä. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          C.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ s.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Kuuntele jatkuvaa mallia ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ s.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        C.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      h === 3 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
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
                H();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          z !== null && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            Se("comparison", Gr[z].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        z !== null && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ s.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: F !== null || m !== null,
                onClick: () => I("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                disabled: F !== null || m !== null,
                onClick: () => I("aeolian"),
                children: "A"
              }
            )
          ] }),
          F !== null && /* @__PURE__ */ s.jsxs("p", { role: "status", children: [
            F === z ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            Gr[z].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          "Soita ",
          C.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          C.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ s.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          C.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ s.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ s.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([k, L]) => /* @__PURE__ */ s.jsxs("label", { children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: k,
                checked: O === k,
                onChange: () => D(k)
              }
            ),
            /* @__PURE__ */ s.jsx("span", { children: L })
          ] }, k))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => T((k) => !k), children: _ ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      h < 3 && /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": m === "scale",
            onClick: () => m === "scale" ? se() : void Se("scale", V.map((k) => k.midi), !0),
            children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
          }
        ),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => m === "phrase" ? se() : void Se("phrase", C.phrase), children: m === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
      ] }),
      h === 4 && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? se() : void Se("accompaniment", C.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h !== 3 && h !== 5 && /* @__PURE__ */ s.jsx(
        Mi,
        {
          area: { strings: Y, min: ie, max: Z, fixed: "box" },
          marks: ce,
          disabled: !0,
          caption: C.title + " – yhden oktaavin sormitus"
        }
      ),
      h < 2 && m === "scale" && ee && /* @__PURE__ */ s.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Le(ee.midi),
        " · nauha ",
        ee.fret,
        "."
      ] }),
      N && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: N }),
      h < 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ s.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: ue, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ s.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          C.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ s.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => te(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => Ne("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ s.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
function rv({ onBack: r }) {
  const [a, u] = b.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ s.jsx(ev, { onBack: () => u(null) }) : a === "modes" ? /* @__PURE__ */ s.jsx(iv, { onBack: () => u(null) }) : /* @__PURE__ */ s.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ s.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ s.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => u("pentatonic"), children: [
        /* @__PURE__ */ s.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ s.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ s.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ s.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ s.jsxs("button", { type: "button", className: "learning-card", onClick: () => u("modes"), children: [
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
const er = [0, 2, 4, 5, 7, 9, 11], sv = 1200, ha = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function av({ onBack: r }) {
  const [a, u] = b.useState(0), [c, d] = b.useState([]), [h, p] = b.useState(!1), [m, j] = b.useState(""), [A, v] = b.useState(0), [_, T] = b.useState(!1), O = a >= er.length, D = er[Math.min(a, er.length - 1)], N = or(ha.strings, ha.min, ha.max).filter((C) => Ke(C.midi) === D), w = N.filter((C) => !c.includes(We(C))), z = w.length === 0 && !O, E = !z && h ? w[0] : void 0;
  b.useEffect(() => {
    if (!_ || !z) return;
    const C = window.setTimeout(() => {
      u((V) => V + 1), d([]), p(!1), j("");
    }, sv);
    return () => window.clearTimeout(C);
  }, [_, z]);
  const F = [
    ...N.filter((C) => c.includes(We(C))).map((C) => ({ ...C, kind: "answer", label: Le(C.midi) })),
    ...E ? [{ ...E, kind: "anchor", label: "?" }] : []
  ];
  function I(C) {
    if (O || z) return;
    const V = We(C);
    if (Ke(C.midi) !== D) {
      v((Se) => Se + 1), j(`Valitsit sävelen ${Le(C.midi)}. Etsi ${Le(D)}.`);
      return;
    }
    if (c.includes(V)) {
      j("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const ee = [...c, V];
    d(ee), p(!1);
    const se = N.length - ee.length;
    j(se ? `Oikein! ${Le(D)} löytyi ${rn[C.string]}-kieleltä (${Ci(C.fret)}). Vielä ${se}.` : `Löysit kaikki ${N.length} ${Le(D)}-säveltä tällä alueella.`);
  }
  function Q() {
    z && (u((C) => C + 1), d([]), p(!1), j(""));
  }
  function B() {
    u(0), d([]), p(!1), j(""), v(0);
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ s.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ s.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen tulee myöhemmissä vaiheissa." }),
    !O && /* @__PURE__ */ s.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: _,
          onChange: (C) => T(C.target.checked)
        }
      ),
      /* @__PURE__ */ s.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: O ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        A ? `Vääriä valintoja yhteensä ${A}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: B, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsxs("h3", { children: [
          "Etsi kaikki ",
          Le(D),
          "-sävelet"
        ] }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sävel ",
          a + 1,
          " / ",
          er.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Le(D),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ s.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        N.length
      ] }),
      /* @__PURE__ */ s.jsx(
        Mi,
        {
          area: ha,
          marks: F,
          onAnswer: I,
          disabled: z,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: z ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: m
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        !z && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            onClick: () => p((C) => !C),
            children: h ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        z && (_ ? /* @__PURE__ */ s.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          a === er.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: Q, children: a === er.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraavissa oppimispolun vaiheissa voidaan harjoitella sävelten tunnistamista kuuntelemalla. Ne eivät vielä ole käytössä." })
  ] });
}
const lv = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, go = ["C", "G", "D", "Em"], Wd = ["C", "G", "D", "Em", "Am", "E", "A"], ov = { min: 0, max: 3, fixed: "" };
function Qd(r) {
  const a = [...r];
  for (let u = a.length - 1; u > 0; u--) {
    const c = Math.floor(Math.random() * (u + 1));
    [a[u], a[c]] = [a[c], a[u]];
  }
  return a;
}
function uv({ onBack: r }) {
  const [a, u] = b.useState(4), [c, d] = b.useState(() => Qd(go)), [h, p] = b.useState(0), [m, j] = b.useState(null), [A, v] = b.useState([]), [_, T] = b.useState(0), O = h >= c.length, D = lv[c[Math.min(h, c.length - 1)]], N = a === 4 ? go : Wd, w = D.frets.flatMap((C, V) => C === null ? [] : [V]), z = D.frets.flatMap((C, V) => C === null ? [V] : []), E = { ...ov, strings: w }, F = D.frets.flatMap((C, V) => C === null ? [] : [{
    ...Ie(V, C),
    kind: C === 0 ? "anchor" : "shape",
    label: C === 0 ? "○" : "●"
  }]);
  function I(C = a) {
    u(C), d(Qd(C === 4 ? go : Wd)), p(0), j(null), v([]), T(0);
  }
  function Q(C) {
    m || O || A.includes(C) || (C === D.name ? j(C) : (v((V) => [...V, C]), T((V) => V + 1)));
  }
  function B() {
    m && (p((C) => C + 1), j(null), v([]));
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
            onChange: () => I(4)
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
            onChange: () => I(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "journey-lesson", children: O ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        _ ? `Vääriä valintoja yhteensä ${_}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: () => I(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ s.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          c.length
        ] })
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ s.jsx(
        Mi,
        {
          area: E,
          marks: F,
          mutedStrings: z,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ s.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: N.map((C) => /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: m === C ? "right" : A.includes(C) ? "wrong" : "",
          disabled: !!m || A.includes(C),
          "aria-pressed": m === C,
          onClick: () => Q(C),
          children: C
        },
        C
      )) }),
      /* @__PURE__ */ s.jsx(
        "p",
        {
          className: m ? "feedback good" : A.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${D.name}-sointu.` : A.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ s.jsx("div", { className: "action-row", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", onClick: B, children: h === c.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const ye = (r, a) => ({ first: r, ...a ? { second: a } : {} }), rr = () => [
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
], Rf = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], cv = [
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
    lyrics: Rf
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
], dv = [
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
    lyrics: Rf
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
  acoustic: cv,
  normal: dv
}, fv = "normal", Ro = "yksi-sointu-kaksi-askelta", Bo = {
  acoustic: Ro + "-akustinen",
  normal: Ro + "-normaali"
}, bf = (r) => r === Ro || Object.values(Bo).includes(r ?? "");
function hv(r) {
  const a = Object.entries(Bo).find(([, u]) => u === r);
  return a ? a[0] : null;
}
const mv = (r) => Bo[r], Yd = (r) => {
  const a = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function Ko(r, a = "acoustic") {
  const u = ur[a], c = u[r], d = u[r + 1];
  return d ? (d.start - c.start) / c.bars.length : 240 / 69;
}
function Lf(r, a = "acoustic") {
  const u = ur[a], c = Math.max(0, Number.isFinite(r) ? r : 0);
  let d = 0;
  for (let _ = 1; _ < u.length && !(c < u[_].start); _++)
    d = _;
  const h = u[d];
  let p = 0;
  for (; p + 1 < h.bars.length && c >= es(d, p + 1, a); )
    p++;
  const m = es(d, p, a), j = Ko(d, a) / 4;
  let A = 1;
  for (; A < 4 && c >= m + A * j; ) A++;
  const v = h.bars[p];
  return {
    section: h,
    sectionIndex: d,
    barIndex: p,
    beat: A,
    chord: v.second && A >= 3 ? v.second : v.first
  };
}
function es(r, a, u = "acoustic") {
  return ur[u][r].start + Ko(r, u) * a;
}
function pv(r) {
  return ur[r].flatMap((a, u) => a.bars.flatMap((c, d) => {
    const h = es(u, d, r), p = { section: a, sectionIndex: u, barIndex: d, part: "first", chord: c.first, time: h };
    if (!c.second) return [p];
    const m = Ko(u, r) / 2;
    return [p, { ...p, part: "second", chord: c.second, time: h + m }];
  }));
}
function vv(r, a = "acoustic", u = !1) {
  const c = ur[a], d = Lf(r, a), h = d.section.bars[d.barIndex], p = d.beat >= 3 && h.second ? "second" : "first", m = pv(a), j = m.findIndex((O) => O.sectionIndex === d.sectionIndex && O.barIndex === d.barIndex && O.part === p), v = [
    ...m.slice(j + 1).map((O) => ({ ...O, wrapped: !1 })),
    ...u ? m.slice(0, j + 1).map((O) => ({ ...O, wrapped: !0 })) : []
  ].find((O) => O.chord !== d.chord) ?? null;
  let _ = null;
  const T = d.sectionIndex === c.length - 1;
  if (d.barIndex === d.section.bars.length - 1 && (!T || u)) {
    const O = T ? 0 : d.sectionIndex + 1, D = c[O], N = D.bars[0].first;
    _ = {
      section: D,
      sectionIndex: O,
      firstChord: N,
      wrapped: T,
      continues: N === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: _ };
}
function kv(r) {
  const a = r.filter((m) => m.lyrics?.length), u = (m) => 1 + (m.lyrics?.length ?? 0), c = a.reduce((m, j) => m + u(j), 0);
  let d = 0, h = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const j = Math.abs(c - 2 * p);
    (j < h || j === h && p >= c - p) && (d = m, h = j), m < a.length && (p += u(a[m]));
  }
  return [a.slice(0, d), a.slice(d)];
}
const bo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], Of = "musiikin-kartta:kappale-sointuvihjeet:v1", ga = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Jd = {
  showChords: !0,
  level: 0,
  fadeOrder: ga
};
function ma(r, a) {
  return !a.showChords || a.level >= a.fadeOrder[r];
}
function Xd(r) {
  if (!r) return { ...Jd, fadeOrder: { ...ga } };
  try {
    const a = JSON.parse(r);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const u = a, c = u.level, d = { ...ga }, h = u.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const m of bo)
        [1, 2, 3, 4].includes(p[m]) && (d[m] = p[m]);
    }
    return {
      showChords: typeof u.showChords == "boolean" ? u.showChords : !0,
      level: typeof c == "number" && [0, 1, 2, 3, 4].includes(c) ? c : 0,
      fadeOrder: d
    };
  } catch {
    return { ...Jd, fadeOrder: { ...ga } };
  }
}
function yv() {
  try {
    return Xd(localStorage.getItem(Of));
  } catch {
    return Xd(null);
  }
}
const gv = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function xv(r) {
  const a = gv.exec(r.trim());
  if (!a) return r;
  const [, u, , c = "", d = ""] = a;
  return u + "5" + c + d;
}
const jv = (r, a) => a === "power" ? xv(r) : r, Sv = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], wv = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Nv({ version: r, position: a, loop: u = !1, onSeek: c }) {
  const [d, h] = b.useState(yv), [p, m] = b.useState(null), [j, A] = b.useState(!1), [v, _] = b.useState("full"), T = (H) => jv(H, v), O = ur[r], D = Lf(a, r), { section: N, sectionIndex: w, barIndex: z, beat: E, chord: F } = D, I = E >= 3 && N.bars[z].second ? "second" : "first", Q = (H, ae, ce) => `${r}:${H}:${ae}:${ce}`, B = (H, ae) => Q(N.id, H, ae), C = B(z, I), V = ma(F, d), ee = V && p === C, se = (H, ae, ce) => !ma(H, d) || p === B(ae, ce), Se = d.showChords && d.level === 0, te = bo.filter((H) => ma(H, d)).length, { nextSection: ue } = vv(a, r, u), Ne = !!ue && ma(ue.firstChord, d);
  return b.useEffect(() => {
    m(null);
  }, [C]), b.useEffect(() => {
    try {
      localStorage.setItem(Of, JSON.stringify(d));
    } catch {
    }
  }, [d]), /* @__PURE__ */ s.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        d.showChords && d.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
      /* @__PURE__ */ s.jsxs("label", { className: "song-hints-toggle", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: d.showChords,
            onChange: (H) => {
              h((ae) => ({ ...ae, showChords: H.target.checked })), m(null);
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
            checked: j,
            onChange: (H) => A(H.target.checked)
          }
        ),
        "Näytä koko sanoitus"
      ] }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "song-chord-display", children: [
        /* @__PURE__ */ s.jsx("legend", { children: "Sointumerkinnät" }),
        [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([H, ae]) => /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "song-chord-display",
              value: H,
              checked: v === H,
              onChange: () => _(H)
            }
          ),
          /* @__PURE__ */ s.jsx("span", { children: ae })
        ] }, H))
      ] }),
      /* @__PURE__ */ s.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
        "Harjoitustaso",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-hint-level",
            value: d.level,
            disabled: !d.showChords,
            onChange: (H) => {
              const ae = Number(H.target.value);
              h((ce) => ({ ...ce, level: ae })), m(null);
            },
            children: Sv.map((H) => /* @__PURE__ */ s.jsx("option", { value: H.value, children: H.label }, H.value))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: te === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${te}/6 sointua` })
    ] }),
    d.showChords && d.level < 4 && /* @__PURE__ */ s.jsxs("details", { className: "song-fade-customize", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
      /* @__PURE__ */ s.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
      /* @__PURE__ */ s.jsx("div", { className: "song-fade-order", children: bo.map((H) => /* @__PURE__ */ s.jsxs("label", { children: [
        H,
        /* @__PURE__ */ s.jsx(
          "select",
          {
            "aria-label": H + ": piilotusvaihe",
            value: d.fadeOrder[H],
            onChange: (ae) => {
              const ce = Number(ae.target.value);
              h((Y) => ({ ...Y, fadeOrder: { ...Y.fadeOrder, [H]: ce } })), m(null);
            },
            children: wv.map((ae) => /* @__PURE__ */ s.jsx("option", { value: ae.value, children: ae.label }, ae.value))
          }
        )
      ] }, H)) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ s.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ s.jsx(
          "select",
          {
            id: "song-section-jump",
            value: N.id,
            onChange: (H) => {
              const ae = O.find((ce) => ce.id === H.target.value);
              ae && c(ae.start);
            },
            children: O.map((H) => /* @__PURE__ */ s.jsxs("option", { value: H.id, children: [
              Yd(H.start),
              " · ",
              H.title
            ] }, H.id))
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ s.jsxs("p", { className: "song-current-chord", children: [
          V && !ee ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ s.jsx("strong", { children: V && !ee ? "?" : T(F) }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            N.title,
            ", tahti ",
            z + 1,
            ", isku ",
            E,
            "/4"
          ] }),
          V && /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ee ? null : C),
              children: ee ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        ue && /* @__PURE__ */ s.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ s.jsx("strong", { children: Ne ? "?" : T(ue.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": N.title + ": tahdit", children: N.bars.map((H, ae) => {
      const ce = ae === z, Y = ce && (E < 3 || !H.second), ie = ce && E >= 3 && !!H.second, Z = se(H.first, ae, "first"), k = H.second ? se(H.second, ae, "second") : !1, L = (Z ? T(H.first) : "sointu piilossa") + (H.second ? " " + (k ? T(H.second) : "sointu piilossa") : "") + (Se && H.passingBass ? " (basson kulku " + H.passingBass + ")" : "") + (Se && H.possibleChord ? " (" + T(H.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (ce ? " active" : ""),
          "aria-pressed": ce,
          "aria-label": "Tahti " + (ae + 1) + ": " + L + ". Siirry kohtaan " + Yd(es(w, ae, r)),
          onClick: () => c(es(w, ae, r)),
          children: [
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              ae + 1
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ s.jsx("strong", { className: Y && Z ? "now" : "", children: Z ? T(H.first) : "?" }),
              H.second && /* @__PURE__ */ s.jsx("strong", { className: ie && k ? "now" : "", children: k ? T(H.second) : "?" })
            ] }),
            Se && H.passingBass && /* @__PURE__ */ s.jsxs("small", { children: [
              "Basso: (",
              H.passingBass,
              "), isku 4"
            ] }),
            Se && H.possibleChord && /* @__PURE__ */ s.jsxs("small", { children: [
              "Mahdollinen (",
              T(H.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        ae
      );
    }) }),
    j ? /* @__PURE__ */ s.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ s.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ s.jsx("div", { className: "song-all-lyrics-grid", children: kv(O).map((H, ae) => /* @__PURE__ */ s.jsx("div", { className: "song-lyrics-column", children: H.map((ce) => /* @__PURE__ */ s.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ s.jsx("h5", { children: ce.title }),
        ce.lyrics?.map((Y, ie) => /* @__PURE__ */ s.jsx("p", { children: Y }, ie))
      ] }, ce.id)) }, ae)) }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : N.lyrics && /* @__PURE__ */ s.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ s.jsxs("h4", { children: [
        N.title,
        ": sanat"
      ] }),
      N.lyrics.map((H, ae) => /* @__PURE__ */ s.jsx("p", { children: H }, ae))
    ] }),
    Se && N.note && /* @__PURE__ */ s.jsx("p", { className: "song-chord-note", children: N.note })
  ] });
}
const Na = 7, Ev = { name: "bluesasteikko", base: De.SCALES.mp.base, add: [[6, "♭5"]] }, xo = [
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
    scale: Ev,
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
function Cv(r) {
  return De.scaleNotes(r).map(([a, u]) => De.noteName(Na, a, u));
}
const $f = (r) => r === "pentatonic" ? 5 : 7;
function _v(r, a, u) {
  const c = a.filter((m) => m >= 1 && m <= $f(r.system)), d = De.fingeringBoxes(Na, r.scale, r.system, c, u);
  if (r.id !== "blues") return d;
  const h = r.scale.add.map(([m]) => (Na + m) % 12), p = (m, j) => j >= 0 && j <= u && h.includes((De.OPEN_PITCHES[m] + j) % 12);
  return d.map((m) => ({ ...m, positions: m.positions.map((j) => {
    const A = j.strings.map((_, T) => {
      if (!_.length) return _;
      const O = _[_.length - 1];
      return p(T, O + 1) ? [..._.slice(0, -1), O + 1] : _;
    }), v = A.flat();
    return { ...j, strings: A, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const Zd = 17;
function Mv({ open: r }) {
  const [a, u] = b.useState("mp"), [c, d] = b.useState({ pentatonic: [], "3nps": [] }), [h, p] = b.useState(!1), [m, j] = b.useState(!1), A = b.useRef(null), v = xo.find((w) => w.id === a) ?? xo[0], _ = c[v.system], T = _v(v, _, Zd), O = T.some((w) => w.positions.length > 0), D = De.renderBoard(Na, v.scale, Zd, {
    automatic: !0,
    boxes: T,
    onlyBoxNotes: O && h,
    label: v.title + (_.length ? ", " + _.map((w) => "boksi " + w).join(", ") : "")
  });
  b.useEffect(() => {
    const w = A.current;
    !w || !r || T.length === 1 && De.revealPositions(w, ".box-highlight");
  }, [D, r]);
  function N(w, z) {
    d((E) => ({ ...E, [v.system]: z ? [...E[v.system], w].sort((F, I) => F - I) : E[v.system].filter((F) => F !== w) }));
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ s.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ s.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ s.jsx("select", { value: a, onChange: (w) => u(w.target.value), children: xo.map((w) => /* @__PURE__ */ s.jsx("option", { value: w.id, children: w.title }, w.id)) })
    ] }) }),
    /* @__PURE__ */ s.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ s.jsx("strong", { children: v.title }),
      /* @__PURE__ */ s.jsx("span", { children: Cv(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: A,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: D }
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
      /* @__PURE__ */ s.jsx("summary", { onClick: (w) => {
        w.preventDefault(), j((z) => !z);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ s.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ s.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: $f(v.system) }, (w, z) => z + 1).map((w) => /* @__PURE__ */ s.jsxs("label", { className: "box-toggle", "data-box": w, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            value: w,
            checked: _.includes(w),
            onChange: (z) => N(w, z.target.checked)
          }
        ),
        " Boksi ",
        w
      ] }, v.system + w)) }),
      /* @__PURE__ */ s.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "checkbox",
            checked: O && h,
            disabled: !O,
            onChange: (w) => p(w.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: O ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let Ff = null;
function Tv() {
  return hv(new URLSearchParams(location.search).get("kappale")) ?? Ff ?? fv;
}
function Pv(r) {
  Ff = r;
  const a = new URL(location.href);
  bf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", mv(r)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Av = {
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
}, qd = 1e-3;
function ef(r, a) {
  try {
    r.currentTime = a;
  } catch {
  }
}
function tf(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Rv({ onBack: r }) {
  const a = b.useRef(null), u = b.useRef(null), c = b.useRef(null), d = b.useRef(0), h = b.useRef(new jf()), p = b.useRef(null), [m, j] = b.useState(Tv), A = Av[m], [v, _] = b.useState(!1), [T, O] = b.useState(!0), [D, N] = b.useState(!0), [w, z] = b.useState(!1), [E, F] = b.useState(!1), [I, Q] = b.useState(!1), [B, C] = b.useState(hp), [V] = b.useState(() => xf() ? "element" : "webaudio"), ee = b.useRef(null), [se, Se] = b.useState(0), [te, ue] = b.useState(0), [Ne, H] = b.useState("");
  function ae(S = !1, J) {
    const re = a.current;
    if (re)
      for (const le of [u.current, c.current])
        le && (!J || le === J) && h.current.align(re, le, S);
  }
  function ce() {
    return [
      ["backing", a.current, !0],
      ["guitar", u.current, T],
      ["vocals", c.current, D]
    ];
  }
  function Y(S = B, J) {
    for (const [re, le, fe] of ce()) {
      if (!le) continue;
      const ke = Ld(re, S, J?.[re] ?? fe);
      if (V === "webaudio" && ee.current?.routed(le))
        ee.current.setLevel(le, ke);
      else
        try {
          le.volume = Ld(re, S);
        } catch {
        }
    }
  }
  function ie(S) {
    C(S), mp(S), Y(S);
  }
  function Z() {
    d.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), _(!1);
  }
  function k(S) {
    if (S !== m) {
      p.current = null, Z();
      for (const J of [a.current, u.current, c.current])
        if (J)
          try {
            J.currentTime = 0;
          } catch {
          }
      Se(0), ue(0), H(""), j(S), Pv(S);
    }
  }
  function L(S) {
    const J = a.current;
    if (!J || !Number.isFinite(S)) return;
    const re = Math.max(0, Math.min(S, Number.isFinite(J.duration) ? J.duration : S));
    p.current = re, Se(re), ef(J, re);
  }
  function he(S) {
    const J = p.current;
    if (J === null || S !== a.current || S.seeking) return;
    const re = Number.isFinite(S.duration) ? Math.min(J, S.duration) : J;
    if (re !== J && (p.current = re, Se(re)), Math.abs(S.currentTime - re) < qd) return;
    const le = S.seekable;
    for (let fe = 0; fe < le.length; fe++)
      if (le.start(fe) <= re && re <= le.end(fe)) {
        ef(S, re);
        return;
      }
  }
  function je(S) {
    if (S !== a.current) return;
    const J = p.current;
    if (J === null)
      Se(S.currentTime);
    else if (S.readyState >= 1 && !S.seeking && Math.abs(S.currentTime - J) < qd) {
      p.current = null, ae(!0);
      return;
    }
    S.paused || ae();
  }
  async function U() {
    const S = a.current, J = u.current, re = c.current;
    if (!S || !J || !re) return;
    if (v) {
      Z();
      return;
    }
    H("");
    const le = p.current ?? S.currentTime;
    if (Number.isFinite(S.duration) && le >= S.duration - 0.05 && L(0), he(S), V === "webaudio" && (ee.current ??= new Ep(), ee.current.unlock()))
      for (const ke of [S, J, re]) ee.current.route(ke);
    Y(), J.muted = !T, re.muted = !D, ae(!0);
    const fe = ++d.current;
    try {
      T || J.pause(), D || re.pause();
      const ke = [S.play(), ...T ? [J.play()] : [], ...D ? [re.play()] : []];
      if (await Promise.all(ke), fe !== d.current) return;
      ae(), _(!0);
    } catch {
      if (fe !== d.current) return;
      Z(), H("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function oe(S, J, re) {
    if (!S) return;
    if (S.muted = !J, !J) {
      S.pause();
      return;
    }
    !a.current || !v || (ae(!0, S), S.play().catch(() => H(re + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function K(S) {
    O(S), Y(B, { guitar: S }), oe(u.current, S, "Kitararaita");
  }
  function ne(S) {
    N(S), Y(B, { vocals: S }), oe(c.current, S, "Lauluraita");
  }
  return b.useEffect(() => {
    const S = () => {
      document.hidden && Z();
    };
    return document.addEventListener("visibilitychange", S), () => {
      document.removeEventListener("visibilitychange", S), d.current++, a.current?.pause(), u.current?.pause(), c.current?.pause(), ee.current?.close();
    };
  }, []), b.useEffect(() => {
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
          onChange: (S) => k(S.target.value),
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
          A.label,
          " · ",
          A.length,
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
            max: te > 0 ? te : 1,
            step: 0.1,
            value: Math.min(se, te > 0 ? te : 1),
            disabled: te <= 0,
            onChange: (S) => L(Number(S.target.value))
          }
        ),
        /* @__PURE__ */ s.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          tf(se),
          " / ",
          tf(te)
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: T,
              onChange: (S) => K(S.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: D,
              onChange: (S) => ne(S.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: w,
              onChange: (S) => z(S.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "song-volume", "data-volume-mode": V, children: [
          /* @__PURE__ */ s.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ s.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            B > 0 && /* @__PURE__ */ s.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            B > 50 && /* @__PURE__ */ s.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: B,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": B + " %",
              onChange: (S) => ie(Number(S.target.value))
            }
          ),
          /* @__PURE__ */ s.jsxs("output", { "aria-hidden": "true", children: [
            B,
            " %"
          ] })
        ] })
      ] }),
      Ne && /* @__PURE__ */ s.jsx("p", { className: "backing-error", role: "alert", children: Ne }),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: a,
          src: A.backing,
          preload: "metadata",
          loop: w,
          onLoadedMetadata: (S) => {
            S.currentTarget === a.current && (ue(S.currentTarget.duration), he(S.currentTarget));
          },
          onProgress: (S) => he(S.currentTarget),
          onCanPlay: (S) => he(S.currentTarget),
          onTimeUpdate: (S) => je(S.currentTarget),
          onEnded: (S) => {
            S.currentTarget !== a.current || S.currentTarget.loop || (p.current = null, u.current?.pause(), c.current?.pause(), _(!1), Se(S.currentTarget.duration));
          },
          onPause: (S) => {
            S.currentTarget === a.current && _(!1);
          },
          onError: () => H(A.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: u,
          src: A.guitar,
          preload: "metadata",
          muted: !T,
          loop: w,
          onLoadedMetadata: () => {
            a.current?.paused && ae(!0);
          },
          onError: () => H(A.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ s.jsx(
        "audio",
        {
          ref: c,
          src: A.vocals,
          preload: "metadata",
          muted: !D,
          loop: w,
          onLoadedMetadata: () => {
            a.current?.paused && ae(!0);
          },
          onError: () => H(A.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-chart-collapse", open: E, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (S) => {
        S.preventDefault(), F((J) => !J);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ s.jsx(Nv, { version: m, position: se, loop: w, onSeek: L })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { className: "song-scales-collapse", open: I, children: [
      /* @__PURE__ */ s.jsx("summary", { onClick: (S) => {
        S.preventDefault(), Q((J) => !J);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ s.jsx(Mv, { open: I })
    ] })
  ] });
}
const Lo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, xa = (r, a = 1) => r.toFixed(a).replace(".", ",").replace("-", "−"), If = (r) => {
  const a = Math.round(r);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Oo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function bv(r, a, u, c) {
  if (c) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Oo(u)}. Vaihda laite Mikrofonin asetuksista.`,
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
function Df({ frame: r, threshold: a }) {
  const u = r?.rms ?? 0, c = lr(u), d = (r?.peak ?? 0) >= 0.98 ? "clip" : u >= a ? "over" : "under";
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meter ${d}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, c)),
      "aria-valuetext": `${xa(Math.max(-60, c), 0)} desibeliä${u >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meter-fill", style: { width: `${Dd(u) * 100}%` } }),
        /* @__PURE__ */ s.jsx("div", { className: "meter-threshold", style: { left: `${Dd(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Lv({ mic: r, frame: a, heard: u, s: c, now: d }) {
  const h = Ef(r.phase, a), p = u && d - u.at < 1500 ? u : null, m = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Le(p.midi, c.flats, !0)} · ${If(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : Lo[h];
  return /* @__PURE__ */ s.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ s.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ s.jsx(Df, { frame: a, threshold: c.minRms })
  ] });
}
function Ov({ mic: r, frame: a, heard: u, accepted: c, now: d, s: h, change: p, devices: m, locked: j, calibrating: A, calibration: v, onTest: _, onStop: T, onCalibrate: O }) {
  const D = b.useId(), N = Ef(r.phase, a), w = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", z = r.phase === "on", E = u && d - u.at < 1500 ? u : null, F = E && (N === "pitch" || N === "untuned"), I = z && (a?.peak ?? 0) >= 0.98, Q = r.phase === "error" ? [] : bv(N, h, r.info, I), B = !h.device || m.some((V) => V.deviceId === h.device), C = (V, ee) => p({ ...h, [V]: ee });
  return /* @__PURE__ */ s.jsxs("section", { className: "mic-panel", "aria-labelledby": `${D}-title`, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ s.jsx("h2", { id: `${D}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ s.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ s.jsxs("p", { className: `mic-state ${N}`, "data-testid": "mic-state", "data-reading": N, children: [
      /* @__PURE__ */ s.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : Lo[N],
      N === "pitch" && E ? ` ${Le(E.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Oo(r.info)}.` : r.phase === "error" ? r.error : Lo[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    z && /* @__PURE__ */ s.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ s.jsxs("dd", { "data-testid": "mic-device", children: [
          Oo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ s.jsxs("dd", { children: [
          /* @__PURE__ */ s.jsx(Df, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ s.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            xa(Math.max(-60, lr(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ s.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: E ? Le(E.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-frequency", children: E ? `${xa(E.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-cents", children: E ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          If(E.cents),
          " senttiä",
          /* @__PURE__ */ s.jsx("span", { className: `cents ${E.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, E.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: F ? "" : "stale", children: [
        /* @__PURE__ */ s.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ s.jsx("dd", { "data-testid": "mic-clarity", children: E ? `${Math.round(E.clarity * 100)} %` : a?.clarity !== void 0 && N === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    z && c && d - c.timestamp < 4e3 && /* @__PURE__ */ s.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Le(c.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    Q.length > 0 && z && /* @__PURE__ */ s.jsx("ul", { className: "mic-advice", children: Q.map((V) => /* @__PURE__ */ s.jsx("li", { children: V }, V)) }),
    r.phase === "error" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ s.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
      w ? /* @__PURE__ */ s.jsx("button", { type: "button", onClick: T, children: "Lopeta testi" }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: h.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: j, onClick: _, children: "Testaa mikrofoni" }),
      w && z && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: A, onClick: O, children: A ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    j && r.purpose !== "test" && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ s.jsxs("fieldset", { className: "plain", disabled: j, children: [
        /* @__PURE__ */ s.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: `${D}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ s.jsxs("select", { id: `${D}-device`, value: h.device, onChange: (V) => C("device", V.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !B && /* @__PURE__ */ s.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              m.map((V, ee) => /* @__PURE__ */ s.jsx("option", { value: V.deviceId, children: V.label || `Äänitulo ${ee + 1}` }, V.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-rms`, children: [
              "Äänikynnys · ",
              xa(lr(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (V) => C("minRms", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (V) => C("clarity", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (V) => C("stability", Number(V.target.value)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ s.jsxs("label", { htmlFor: `${D}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ s.jsx("input", { id: `${D}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (V) => C("cents", Number(V.target.value)) })
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
const $v = (r) => r.mode === "scale" ? De.scaleNotes(De.SCALES[r.scale]) : Ei[r.mode === "caged" ? "maj" : r.chord].tones, nf = (r, a) => $v(r).find(([u]) => u === a)?.[1], zf = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Fv = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Iv(r, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Dv(r, a, u, c, d) {
  return a.choices === "degree" ? `Oikein! ${Jr(r.root, a.interval, a.degree)} on ${a.degree}. aste.` : zf(r) ? `Oikein! ${a.degree}. aste on ${Jr(r.root, a.interval, a.degree)}.` : r.mode === "interval" ? `Oikein! ${Le(a.reference, r.flats, !0)} → ${a.name} on ${Xr[a.interval]} ${Fv(a)}.` : r.mode === "notes" ? u === "board" && d ? `Oikein! ${Le(d.midi, r.flats)} on ${af[d.string]}: ${Ci(d.fret)}.` : `Oikein! Soitit sävelen ${Le(c, r.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function zv(r, a, u, c, d) {
  if (u === "note") return `Ei ${Le(c, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (u === "degree") return `Ei ${nf(r, c) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!d) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = Ke(d.midi) === Ke(a.midi);
  if (r.mode === "notes")
    return d.string !== a.position.string ? `Tuo on ${rn[d.string]}-kieli. Etsi sävel ${Io[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Le(d.midi, r.flats)}. Etsi ${a.name}.`;
  if (zf(r)) {
    const p = Ke(d.midi - r.root), m = nf(r, p), j = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? h && a.check === "pitch" && d.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${Jr(r.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Le(d.midi, r.flats)}, joka ei kuulu ${j}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Le(d.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Vv(r, a, u) {
  const c = Le(u, r.flats, !0);
  return Ke(u) === Ke(a.midi) ? `Kuulin sävelen ${c}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${c}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function Vf(r, a = !1) {
  const u = r.split(":"), c = (p) => Number(u[p]), d = (...p) => p.every((m) => Number.isInteger(c(m))), h = (p, m) => rn[p] ? `${rn[p]}-kieli, ${Ci(m)}` : null;
  switch (u[0]) {
    case "notes":
      return d(1, 2) ? h(c(1), c(2)) : null;
    case "ear-note":
      return d(1) ? `Kuultu sävel ${Le(c(1), a)}${u[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return u.length === 2 && d(1) ? `Kuule ja toista: ${Le(c(1), a, !0)}` : d(1, 2) && h(c(1), c(2)) ? `Kuule ja toista: ${h(c(1), c(2))}` : null;
    case "interval":
      return d(1) && Xr[c(1)] ? `${Xr[c(1)]} ${u[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = u[2];
      if (!d(1, 3) || !Ei[p]) return null;
      const m = Ei[p].tones.find(([j]) => j === c(3))?.[1];
      return m ? `${lf(c(1), p)}: ${m}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = De.SCALES[u[2]];
      if (!d(1) || !p) return null;
      const m = `${oi(c(1))}-${p.name}`;
      if (u.length === 5 && d(3)) {
        const j = De.scaleNotes(p).find(([A]) => A === c(3))?.[1];
        return j ? `${m}: ${j}. aste${u[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${m}: ${h(c(3), c(4))}` : null;
    }
    case "caged": {
      if (!d(1) || !"CAGED".includes(u[2] ?? "?")) return null;
      const p = `${oi(c(1))}-duuri, ${u[2]}-muoto`;
      if (u.length === 4 && d(3)) {
        const m = Ei.maj.tones.find(([j]) => j === c(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return d(3, 4) && h(c(3), c(4)) ? `${p}: ${h(c(3), c(4))}` : null;
    }
    default:
      return null;
  }
}
function rf(r) {
  return Object.entries(r).flatMap(([a, u]) => {
    const [c, d, h, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: c, check: d, guided: h === "guided", item: p.join(":"), mode: p[0], stat: u }];
  });
}
const $o = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Bv = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function Kv(r) {
  const a = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${nr(r.mode)}${r.hints ? ` · ${Ea[r.hints].title}` : ""} · ${a} · keskimäärin ${$o(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function Hv({ store: r, s: a, locked: u, changed: c }) {
  const [d, h] = b.useState(""), p = b.useRef(null), { recent: m, sessions: j, stats: A } = r.data, v = _i(a), _ = uf(a), T = [...new Set(m.map((E) => E.mode))].map((E) => {
    const F = m.filter((I) => I.mode === E);
    return { mode: E, ...No(F), last: Math.max(...F.map((I) => I.at)) };
  }).sort((E, F) => F.last - E.last), O = rf(A).filter((E) => !E.guided && E.mode === a.mode && E.input === v && E.check === _ && E.stat.attempts >= 3).map((E) => ({ ...E, score: Do(E.stat), text: Vf(E.item, a.flats) })).filter((E) => E.text && E.score < 0.8).sort((E, F) => E.score - F.score).slice(0, 5), D = rf(A).reduce((E, F) => E + F.stat.attempts, 0);
  function N() {
    const E = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), F = URL.createObjectURL(E), I = document.createElement("a");
    I.href = F, I.download = "musiikin-kartta-harjoittelu.json", I.click(), setTimeout(() => URL.revokeObjectURL(F), 1e3);
  }
  async function w(E) {
    if (E)
      try {
        const F = await E.text();
        if (D && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(F), h("Varmuuskopio palautettu."), c();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function z() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), h("Harjoitustulokset poistettu."), c());
  }
  return /* @__PURE__ */ s.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ s.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    D === 0 ? /* @__PURE__ */ s.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        D,
        " vastattua kysymystä · ",
        j.length,
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
        /* @__PURE__ */ s.jsx("tbody", { children: T.map((E) => /* @__PURE__ */ s.jsxs("tr", { children: [
          /* @__PURE__ */ s.jsx("th", { scope: "row", children: nr(E.mode) }),
          /* @__PURE__ */ s.jsx("td", { children: E.count }),
          /* @__PURE__ */ s.jsx("td", { children: E.solo ? `${E.soloFirst}/${E.solo} · ${Math.round(E.soloFirst / E.solo * 100)} %` : "–" }),
          /* @__PURE__ */ s.jsx("td", { children: E.guided }),
          /* @__PURE__ */ s.jsx("td", { children: $o(E.ms / E.count) })
        ] }, E.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsx("h3", { children: "Seuraavaksi" }),
    O.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        nr(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ s.jsx("ul", { children: O.map((E) => /* @__PURE__ */ s.jsxs("li", { children: [
        E.text,
        " · viime aikoina ",
        Math.round(Zr(E.stat) * 100),
        " % heti oikein · ",
        $o(qr(E.stat))
      ] }, E.key)) })
    ] }) : /* @__PURE__ */ s.jsx("p", { children: D ? `Harjoituksessa ${nr(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        Bv[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ s.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ s.jsx(qm, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: A, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      j.length ? /* @__PURE__ */ s.jsx("ul", { children: j.slice(-10).reverse().map((E) => /* @__PURE__ */ s.jsx("li", { children: Kv(E) }, E.id)) }) : /* @__PURE__ */ s.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ s.jsxs("details", { children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ s.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", onClick: N, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: u, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ s.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (E) => {
          w(E.target.files?.[0]);
        } }),
        /* @__PURE__ */ s.jsx("button", { type: "button", disabled: u || !D, onClick: z, children: "Poista harjoitustulokset" })
      ] }),
      d && /* @__PURE__ */ s.jsx("p", { role: "status", children: d })
    ] }),
    r.warning && /* @__PURE__ */ s.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function Uv() {
  try {
    return new Td(localStorage);
  } catch {
    return new Td();
  }
}
const sf = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), Gv = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", Wv = [0, 2, 4, 5, 7, 9, 11];
function Qv(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function Yv() {
  const [r] = b.useState(Uv), [a, u] = b.useState(() => Hm(location.search, r.data.settings)), [, c] = b.useReducer(($) => $ + 1, 0), d = b.useRef(null), h = b.useRef(new Gp()), p = b.useRef(new _a()), m = b.useRef(0), j = b.useRef(), A = b.useRef(), v = b.useRef(null), _ = b.useRef(0), T = b.useRef(null), O = b.useRef(a);
  O.current = a;
  const [D, N] = b.useState({ phase: "off", purpose: "none" }), w = b.useRef(D), z = ($) => {
    w.current = $, N($);
  }, [E, F] = b.useState(null), [I, Q] = b.useState(null), [B, C] = b.useState(null), [V, ee] = b.useState(0), [se, Se] = b.useState([]), [te, ue] = b.useState(!1), [Ne, H] = b.useState(!1), [ae, ce] = b.useState(""), [Y, ie] = b.useState("info"), [Z, k] = b.useState(""), [L, he] = b.useState(0), [je, U] = b.useState([]), [oe, K] = b.useState([]), [ne, S] = b.useState(null), [J, re] = b.useState(!1), [le, fe] = b.useState(""), [ke, Ae] = b.useState(""), [Me, Oe] = b.useState(() => {
    const $ = new URLSearchParams(location.search);
    return $.has("tila") || $.has("vanha") ? "legacy" : bf($.get("kappale")) ? "songs" : null;
  }), Xe = () => {
    Pp().then(Se).catch(() => {
    });
  };
  function He() {
    clearTimeout(A.current), v.current = null, re(!1);
  }
  function Qe() {
    F(null), Q(null), C(null);
  }
  function Ue() {
    h.current.stop(), He(), z({ phase: "off", purpose: "none" }), Qe();
  }
  async function gt($) {
    if (h.current.active && w.current.phase === "on")
      return He(), z({ ...w.current, purpose: $ }), h.current.rearm(), !0;
    z({ phase: "requesting", purpose: $ }), Qe();
    try {
      const pe = await h.current.start(O.current.device, {
        ...sf(O.current),
        onFrame: (Ee) => Tt.current.frame(Ee),
        onStableNote: (Ee) => Tt.current.stable(Ee)
      }, () => Tt.current.lost());
      return pe ? (z({ phase: "on", purpose: $, info: pe }), Xe(), !0) : !1;
    } catch (pe) {
      return z({ phase: "error", purpose: "none", error: Up(pe) }), !1;
    }
  }
  function Ze($) {
    v.current?.push($.rms);
    const pe = performance.now();
    pe - _.current < 66 || (_.current = pe, F($), ee(pe), $.midi !== void 0 && $.frequency !== void 0 && Q({ midi: $.midi, frequency: $.frequency, cents: $.cents ?? 0, clarity: $.clarity ?? 0, tuned: $.status === "pitch", at: pe }));
  }
  function Ve($) {
    w.current.purpose === "test" ? C($) : w.current.purpose === "round" && Re($.midi, "mic", void 0, $.heldMs);
  }
  function it() {
    const $ = w.current.purpose === "round";
    He(), Qe(), z({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const pe = d.current;
    $ && pe && ["active", "feedback", "paused"].includes(pe.phase) && (dt(), H(!1), pe.pause(), k("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), c());
  }
  const Tt = b.useRef({ frame: Ze, stable: Ve, lost: it });
  Tt.current = { frame: Ze, stable: Ve, lost: it };
  function Gt($) {
    const pe = ja($), Ee = pe.device !== O.current.device;
    O.current = pe, u(pe), r.settings(pe), k(""), h.current.active && (Ee && w.current.purpose === "test" ? (Ue(), gt("test")) : h.current.setOptions(sf(pe)));
  }
  function zt($) {
    Ae(""), d.current = null, Oe($);
  }
  function sn() {
    fe(""), gt("test");
  }
  function Wt() {
    w.current.phase !== "on" || w.current.purpose !== "test" || (He(), v.current = [], re(!0), fe("Mitataan taustakohinaa kolme sekuntia. Älä soita."), A.current = setTimeout(() => {
      const $ = v.current ?? [];
      if (He(), $.length < 10) {
        fe("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: pe, noise: Ee, loud: Jt } = Wp($);
      Gt({ ...O.current, minRms: pe }), fe(`Taustakohina on ${Math.round(lr(Ee))} dB ja äänikynnys nyt ${Math.round(lr(pe))} dB. ${Jt ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function dt() {
    m.current++, clearTimeout(j.current), p.current.stop();
  }
  function Dn($, pe) {
    if (!$.results.length) return;
    const Ee = No($.results);
    r.session({
      id: $.id,
      mode: $.settings.mode,
      count: Ee.count,
      first: Ee.first,
      ms: Ee.ms,
      solo: Ee.solo,
      soloFirst: Ee.soloFirst,
      hints: $.settings.hints,
      at: Date.now(),
      complete: pe
    });
  }
  async function we($) {
    if (!$.question?.sound.length || $.phase !== "active") return;
    dt();
    const pe = m.current;
    $.pause(), h.current.pause(), H(!0), ie("info"), ce("Kuuntele…"), c();
    try {
      await p.current.play($.question.sound);
    } catch {
      pe === m.current && k("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    pe !== m.current || d.current !== $ || ($.resume(), h.current.resume(), H(!1), ce(""), c());
  }
  async function Qt($) {
    U([]), K([]), S(null), k(""), he($.hintLevel), h.current.rearm(), ie("info"), ce(""), c(), $.question?.sound.length && await we($);
  }
  async function Te() {
    const $ = O.current, pe = So($);
    if (pe) {
      k(pe);
      return;
    }
    dt();
    const Ee = m.current;
    if (k(""), fe(""), Ae(""), fa($)) {
      ue(!0);
      const ot = await gt("round");
      if (Ee !== m.current) return;
      if (ue(!1), !ot) {
        k("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else w.current.phase !== "off" && Ue();
    const Jt = new up($, () => r.data.stats, (ot) => r.record(ot));
    try {
      Jt.start();
    } catch (ot) {
      w.current.purpose === "round" && Ue(), k(ot instanceof Error ? ot.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    d.current = Jt, requestAnimationFrame(() => T.current?.scrollIntoView({ block: "start", behavior: "auto" })), await Qt(Jt);
  }
  function be() {
    dt(), ue(!1), Ue();
  }
  function Re($, pe, Ee, Jt = 0) {
    const ot = d.current, ci = ot?.question;
    if (!ot || !ci || ot.phase !== "active") return;
    const Vn = ot.answer($, pe, Ee, Jt);
    if (Vn !== "ignored") {
      if (Vn === "candidate")
        S($), ie("bad"), ce(Vv(ot.settings, ci, $));
      else if (Vn === "wrong")
        Ee ? U((di) => [...di, Ee]) : K((di) => [...di, $]), ie("bad"), ce(zv(ot.settings, ci, pe, $, Ee));
      else if (S(null), ie("good"), ce(Dv(ot.settings, ci, pe, $, Ee)), Dn(ot, !1), ot.settings.advance) {
        const di = m.current;
        j.current = setTimeout(() => {
          di === m.current && Ye();
        }, pe === "mic" ? 1800 : 1400);
      }
      c();
    }
  }
  async function Ye() {
    const $ = d.current;
    if (!(!$ || $.phase !== "feedback")) {
      dt();
      try {
        $.next();
      } catch (pe) {
        et(!1), k(pe instanceof Error ? pe.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if ($.phase === "done") {
        et(!0);
        return;
      }
      await Qt($);
    }
  }
  function et($ = !1) {
    dt(), H(!1), ue(!1), (w.current.purpose === "round" || w.current.phase === "requesting") && Ue();
    const pe = d.current;
    pe && (pe.stop(), Dn(pe, $)), S(null), he(0), U([]), K([]), k(""), Ae($ ? "complete" : "stopped"), ie("info"), ce(""), c();
  }
  function Yt() {
    const $ = d.current;
    if (!$ || !["active", "feedback", "paused"].includes($.phase)) return;
    dt(), H(!1), $.pause();
    const pe = w.current.purpose === "round";
    pe && Ue(), ie("info"), ce(`Harjoitus on tauolla.${pe ? " Mikrofoni on suljettu." : ""}`), c();
  }
  async function xt() {
    const $ = d.current;
    if (!$ || $.phase !== "paused" || Ne) return;
    dt();
    const pe = m.current;
    if (k(""), fa($.settings)) {
      ue(!0);
      const Ee = await gt("round");
      if (pe !== m.current) return;
      if (ue(!1), !Ee) {
        k("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    $.resume(), ie("info"), ce(""), c(), $.phase === "active" && (h.current.rearm(), $.question?.sound.length && await we($));
  }
  function Vt($) {
    const pe = d.current;
    !pe || pe.phase !== "active" || (pe.useHint($), he($), c());
  }
  const mn = b.useRef({ hidden: () => {
  }, restored: () => {
  } });
  mn.current = {
    hidden: () => {
      const $ = d.current;
      $ && ["active", "feedback"].includes($.phase) || Ne ? Yt() : w.current.phase !== "off" && w.current.phase !== "error" && (dt(), ue(!1), Ue());
    },
    restored: () => {
      ue(!1), H(!1), z({ phase: "off", purpose: "none" }), Qe(), c();
    }
  }, b.useEffect(() => {
    Xe();
    const $ = () => Xe();
    navigator.mediaDevices?.addEventListener?.("devicechange", $);
    const pe = () => {
      m.current++, clearTimeout(j.current), clearTimeout(A.current), h.current.stop(), p.current.stop(), Hp(), d.current?.pause();
    }, Ee = () => {
      document.hidden && mn.current.hidden();
    }, Jt = (ot) => {
      ot.persisted && mn.current.restored();
    };
    return document.addEventListener("visibilitychange", Ee), window.addEventListener("pagehide", pe), window.addEventListener("pageshow", Jt), () => {
      pe(), navigator.mediaDevices?.removeEventListener?.("devicechange", $), document.removeEventListener("visibilitychange", Ee), window.removeEventListener("pagehide", pe), window.removeEventListener("pageshow", Jt);
    };
  }, []);
  const pn = b.useRef(null), zn = `${d.current?.id}:${d.current?.index}:${d.current?.phase}:${Ne}`;
  b.useEffect(() => {
    const $ = d.current, pe = T.current, Ee = document.activeElement;
    !$ || !pe || !(Ee === document.body || pe.contains(Ee)) || ($.phase === "feedback" ? pn.current?.focus({ preventScroll: !0 }) : $.phase === "active" && !Ne && (Ee === document.body || Ee === pn.current) && pe.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [zn]);
  const Fe = d.current, rt = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), Je = rt ? Fe.settings : a, pt = rt ? Fe.question : void 0, Pt = !!pt && !!Fe?.answered, vn = rt && Fe.phase === "paused" && !Ne && !Pt, kn = rt && Fe.phase === "active" && !Ne, cr = rt ? null : So(a), En = rt || te, ui = Ti(Je), Pi = tp(Je), Cn = pt && !Pt ? L : 0, dr = pt ? op(Je, pt, Pt ? 2 : Cn) : { marks: [], text: "" }, ns = [...new Map([...dr.marks, ...Pt ? [] : je.map(($) => ({ ...$, label: Le($.midi, Je.flats), kind: "wrong" }))].map(($) => [We($), $])).values()], Ma = rt && fa(Je), _n = !!pt && !vn && (pt.choices === "position" || ns.length > 0), jt = Fe ? No(Fe.results) : null, is = !Fe || Je.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", rs = Fe && !rt ? Fe.results.filter(($) => $.errors > 0 || $.hint) : [], [ss, as] = Qv(Je), Mn = /* @__PURE__ */ s.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ s.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ s.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ s.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Tn = r.data.notice === "hints-default" && /* @__PURE__ */ s.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
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
      r.dismissNotice(), c();
    }, children: "Selvä" })
  ] });
  return !rt && Me === null ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Mn,
    Tn,
    /* @__PURE__ */ s.jsx(dp, { onSelect: zt })
  ] }) : !rt && Me === "scales" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Mn,
    Tn,
    /* @__PURE__ */ s.jsx(rv, { onBack: () => Oe(null) })
  ] }) : !rt && Me === "ear" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Mn,
    Tn,
    /* @__PURE__ */ s.jsx(av, { onBack: () => Oe(null) })
  ] }) : !rt && Me === "chords" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Mn,
    Tn,
    /* @__PURE__ */ s.jsx(uv, { onBack: () => Oe(null) })
  ] }) : !rt && Me === "songs" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Mn,
    Tn,
    /* @__PURE__ */ s.jsx(Rv, { onBack: () => Oe(null) })
  ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    Mn,
    Tn,
    /* @__PURE__ */ s.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ s.jsxs("a", { href: ss, children: [
      "Lue tämän harjoituksen teoria: ",
      as,
      " →"
    ] }) }),
    Me !== "legacy" && /* @__PURE__ */ s.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "back-link", onClick: () => {
        rt && et(), Oe(null);
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ s.jsx("h2", { children: Me === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ s.jsx("p", { children: Me === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    rt ? /* @__PURE__ */ s.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ s.jsx("strong", { children: nr(Je.mode) }),
      " · ",
      Rd(Je)
    ] }) : Me === "legacy" ? /* @__PURE__ */ s.jsx(bd, { s: a, change: Gt, locked: En, problem: cr }) : /* @__PURE__ */ s.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ s.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ s.jsx(bd, { s: a, change: Gt, locked: En, problem: cr })
    ] }),
    !rt && (Me === "legacy" || fa(a)) && /* @__PURE__ */ s.jsx(
      Ov,
      {
        mic: D,
        frame: E,
        heard: I,
        accepted: B,
        now: V,
        s: a,
        change: Gt,
        devices: se,
        locked: te,
        calibrating: J,
        calibration: le,
        onTest: sn,
        onStop: Ue,
        onCalibrate: Wt
      }
    ),
    /* @__PURE__ */ s.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: T, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ s.jsx("h2", { id: "session-title", children: nr(Je.mode) }),
        /* @__PURE__ */ s.jsx("span", { "data-testid": "round-status", children: rt ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${Ea[Je.hints].title}${is}${Fe.phase === "paused" && !Ne ? " · tauolla" : ""}` : ke === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !rt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        Fe && Fe.results.length > 0 && jt ? /* @__PURE__ */ s.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ s.jsx("h3", { children: ke === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
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
              /* @__PURE__ */ s.jsx("dd", { children: Gv(jt.ms / jt.count) })
            ] })
          ] }),
          jt.solo === 0 && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          rs.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ s.jsx("ul", { children: [...new Set(rs.map(($) => Vf($.item, a.flats)).filter(Boolean))].slice(0, 6).map(($) => /* @__PURE__ */ s.jsx("li", { children: $ }, $)) })
          ] })
        ] }) : /* @__PURE__ */ s.jsx("p", { className: "question idle", children: Rd(a) }),
        /* @__PURE__ */ s.jsx("div", { className: "action-row", children: te ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: be, children: "Peru" })
        ] }) : /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: !!cr, onClick: () => {
          Te();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      rt && pt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: vn ? "Harjoitus on tauolla." : pt.prompt }),
        /* @__PURE__ */ s.jsx("p", { className: "how", "data-testid": "instruction", children: vn ? "Kysymys palaa näkyviin, kun jatkat." : Ne ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Iv(Je, pt) }),
        Fe.hintLevel > 0 && !Pt && /* @__PURE__ */ s.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: Je.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        Ma && /* @__PURE__ */ s.jsx(Lv, { mic: D, frame: E, heard: I, s: Je, now: V }),
        pt.choices === "note" && !vn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (Je.accidentals ? Array.from({ length: 12 }, ($, pe) => pe) : Wv).map(($) => /* @__PURE__ */ s.jsx("button", { type: "button", className: oe.includes($) ? "wrong" : Pt && $ === pt.midi % 12 ? "right" : "", disabled: !kn || oe.includes($), onClick: () => Re($, "note"), children: Le($, Je.flats) }, $)) }),
        pt.choices === "degree" && !vn && /* @__PURE__ */ s.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (Je.mode === "scale" ? De.scaleNotes(De.SCALES[Je.scale]) : Ei[Je.chord].tones).map(([$, pe]) => /* @__PURE__ */ s.jsx("button", { type: "button", className: oe.includes($) ? "wrong" : Pt && $ === pt.interval ? "right" : "", disabled: !kn || oe.includes($), onClick: () => Re($, "degree"), children: pe }, $)) }),
        _n && /* @__PURE__ */ s.jsx(
          Mi,
          {
            area: Pi,
            marks: ns,
            disabled: !kn || pt.choices !== "position" || Je.input === "mic",
            onAnswer: ($) => Re($.midi, "board", $),
            caption: ui.fixed === "shape" ? `${Je.shape}-muodon alue` : ui.fixed === "box" ? `Boksin ${Je.box} alue` : "Otelauta"
          }
        ),
        !Pt && !vn && Cn > 0 && dr.text && /* @__PURE__ */ s.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: dr.text }),
        /* @__PURE__ */ s.jsx("p", { className: `feedback ${Y}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: ae }),
        ne !== null && Fe.phase === "active" && /* @__PURE__ */ s.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), S(null), ce("Kirjattu virheeksi. Etsi sävel uudelleen."), c();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ s.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        Z && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Z }),
        /* @__PURE__ */ s.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", ref: pn, onClick: () => {
            Ye();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Pt && !Ne && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            Cn === 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Vt(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            Cn === 1 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => Vt(2), children: "Näytä vastaus" }),
            Cn > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => he(0), children: "Piilota vihje" })
          ] }),
          pt.sound.length > 0 && /* @__PURE__ */ s.jsx("button", { type: "button", disabled: !kn, onClick: () => {
            we(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !Ne ? /* @__PURE__ */ s.jsx("button", { type: "button", className: "primary", disabled: te, onClick: () => {
            xt();
          }, children: te ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ s.jsx("button", { type: "button", onClick: Yt, children: "Tauko" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => et(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && Je.advance && /* @__PURE__ */ s.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ s.jsx("p", { className: "tools-note", "data-testid": "tally", children: jt?.count ? `Vastattu ${jt.count} · itsenäisesti heti oikein ${jt.soloFirst}/${jt.solo}${jt.guided ? ` · vihjeen kanssa ${jt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !rt && Z && /* @__PURE__ */ s.jsx("p", { className: "error", role: "alert", children: Z })
    ] }),
    !rt && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ s.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(De.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ s.jsx("a", { href: Um(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ s.jsx(Hv, { store: r, s: a, locked: En, changed: () => {
        const $ = ja(r.data.settings);
        O.current = $, u($), c();
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
$m.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ s.jsx(Yv, {}));
//# sourceMappingURL=app.js.map
