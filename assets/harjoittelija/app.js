function ap(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var So = { exports: {} }, nr = {}, wo = { exports: {} }, Oe = {};
var Pd;
function lp() {
  if (Pd) return Oe;
  Pd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = Symbol.iterator;
  function M(x) {
    return x === null || typeof x != "object" ? null : (x = g && x[g] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, w = {};
  function j(x, A, oe) {
    this.props = x, this.context = A, this.refs = w, this.updater = oe || I;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(x, A) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, A, "setState");
  }, j.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function B() {
  }
  B.prototype = j.prototype;
  function E(x, A, oe) {
    this.props = x, this.context = A, this.refs = w, this.updater = oe || I;
  }
  var W = E.prototype = new B();
  W.constructor = E, C(W, j.prototype), W.isPureReactComponent = !0;
  var G = Array.isArray, Q = Object.prototype.hasOwnProperty, T = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(x, A, oe) {
    var V, ce = {}, _ = null, U = null;
    if (A != null) for (V in A.ref !== void 0 && (U = A.ref), A.key !== void 0 && (_ = "" + A.key), A) Q.call(A, V) && !O.hasOwnProperty(V) && (ce[V] = A[V]);
    var Z = arguments.length - 2;
    if (Z === 1) ce.children = oe;
    else if (1 < Z) {
      for (var D = Array(Z), ae = 0; ae < Z; ae++) D[ae] = arguments[ae + 2];
      ce.children = D;
    }
    if (x && x.defaultProps) for (V in Z = x.defaultProps, Z) ce[V] === void 0 && (ce[V] = Z[V]);
    return { $$typeof: r, type: x, key: _, ref: U, props: ce, _owner: T.current };
  }
  function ee(x, A) {
    return { $$typeof: r, type: x.type, key: A, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Y(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r;
  }
  function ve(x) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(oe) {
      return A[oe];
    });
  }
  var fe = /\/+/g;
  function q(x, A) {
    return typeof x == "object" && x !== null && x.key != null ? ve("" + x.key) : A.toString(36);
  }
  function de(x, A, oe, V, ce) {
    var _ = typeof x;
    (_ === "undefined" || _ === "boolean") && (x = null);
    var U = !1;
    if (x === null) U = !0;
    else switch (_) {
      case "string":
      case "number":
        U = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case r:
          case a:
            U = !0;
        }
    }
    if (U) return U = x, ce = ce(U), x = V === "" ? "." + q(U, 0) : V, G(ce) ? (oe = "", x != null && (oe = x.replace(fe, "$&/") + "/"), de(ce, A, oe, "", function(ae) {
      return ae;
    })) : ce != null && (Y(ce) && (ce = ee(ce, oe + (!ce.key || U && U.key === ce.key ? "" : ("" + ce.key).replace(fe, "$&/") + "/") + x)), A.push(ce)), 1;
    if (U = 0, V = V === "" ? "." : V + ":", G(x)) for (var Z = 0; Z < x.length; Z++) {
      _ = x[Z];
      var D = V + q(_, Z);
      U += de(_, A, oe, D, ce);
    }
    else if (D = M(x), typeof D == "function") for (x = D.call(x), Z = 0; !(_ = x.next()).done; ) _ = _.value, D = V + q(_, Z++), U += de(_, A, oe, D, ce);
    else if (_ === "object") throw A = String(x), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return U;
  }
  function ge(x, A, oe) {
    if (x == null) return x;
    var V = [], ce = 0;
    return de(x, V, "", "", function(_) {
      return A.call(oe, _, ce++);
    }), V;
  }
  function Ee(x) {
    if (x._status === -1) {
      var A = x._result;
      A = A(), A.then(function(oe) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = oe);
      }, function(oe) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = oe);
      }), x._status === -1 && (x._status = 0, x._result = A);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var me = { current: null }, $ = { transition: null }, J = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: $, ReactCurrentOwner: T };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Oe.Children = { map: ge, forEach: function(x, A, oe) {
    ge(x, function() {
      A.apply(this, arguments);
    }, oe);
  }, count: function(x) {
    var A = 0;
    return ge(x, function() {
      A++;
    }), A;
  }, toArray: function(x) {
    return ge(x, function(A) {
      return A;
    }) || [];
  }, only: function(x) {
    if (!Y(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, Oe.Component = j, Oe.Fragment = o, Oe.Profiler = c, Oe.PureComponent = E, Oe.StrictMode = d, Oe.Suspense = y, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, Oe.act = X, Oe.cloneElement = function(x, A, oe) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var V = C({}, x.props), ce = x.key, _ = x.ref, U = x._owner;
    if (A != null) {
      if (A.ref !== void 0 && (_ = A.ref, U = T.current), A.key !== void 0 && (ce = "" + A.key), x.type && x.type.defaultProps) var Z = x.type.defaultProps;
      for (D in A) Q.call(A, D) && !O.hasOwnProperty(D) && (V[D] = A[D] === void 0 && Z !== void 0 ? Z[D] : A[D]);
    }
    var D = arguments.length - 2;
    if (D === 1) V.children = oe;
    else if (1 < D) {
      Z = Array(D);
      for (var ae = 0; ae < D; ae++) Z[ae] = arguments[ae + 2];
      V.children = Z;
    }
    return { $$typeof: r, type: x.type, key: ce, ref: _, props: V, _owner: U };
  }, Oe.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: h, _context: x }, x.Consumer = x;
  }, Oe.createElement = P, Oe.createFactory = function(x) {
    var A = P.bind(null, x);
    return A.type = x, A;
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, Oe.isValidElement = Y, Oe.lazy = function(x) {
    return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: Ee };
  }, Oe.memo = function(x, A) {
    return { $$typeof: L, type: x, compare: A === void 0 ? null : A };
  }, Oe.startTransition = function(x) {
    var A = $.transition;
    $.transition = {};
    try {
      x();
    } finally {
      $.transition = A;
    }
  }, Oe.unstable_act = X, Oe.useCallback = function(x, A) {
    return me.current.useCallback(x, A);
  }, Oe.useContext = function(x) {
    return me.current.useContext(x);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(x) {
    return me.current.useDeferredValue(x);
  }, Oe.useEffect = function(x, A) {
    return me.current.useEffect(x, A);
  }, Oe.useId = function() {
    return me.current.useId();
  }, Oe.useImperativeHandle = function(x, A, oe) {
    return me.current.useImperativeHandle(x, A, oe);
  }, Oe.useInsertionEffect = function(x, A) {
    return me.current.useInsertionEffect(x, A);
  }, Oe.useLayoutEffect = function(x, A) {
    return me.current.useLayoutEffect(x, A);
  }, Oe.useMemo = function(x, A) {
    return me.current.useMemo(x, A);
  }, Oe.useReducer = function(x, A, oe) {
    return me.current.useReducer(x, A, oe);
  }, Oe.useRef = function(x) {
    return me.current.useRef(x);
  }, Oe.useState = function(x) {
    return me.current.useState(x);
  }, Oe.useSyncExternalStore = function(x, A, oe) {
    return me.current.useSyncExternalStore(x, A, oe);
  }, Oe.useTransition = function() {
    return me.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var Ld;
function tu() {
  return Ld || (Ld = 1, wo.exports = lp()), wo.exports;
}
var $d;
function op() {
  if ($d) return nr;
  $d = 1;
  var r = tu(), a = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, y, L) {
    var v, g = {}, M = null, I = null;
    L !== void 0 && (M = "" + L), y.key !== void 0 && (M = "" + y.key), y.ref !== void 0 && (I = y.ref);
    for (v in y) d.call(y, v) && !h.hasOwnProperty(v) && (g[v] = y[v]);
    if (m && m.defaultProps) for (v in y = m.defaultProps, y) g[v] === void 0 && (g[v] = y[v]);
    return { $$typeof: a, type: m, key: M, ref: I, props: g, _owner: c.current };
  }
  return nr.Fragment = o, nr.jsx = p, nr.jsxs = p, nr;
}
var Rd;
function up() {
  return Rd || (Rd = 1, So.exports = op()), So.exports;
}
var i = up(), N = tu(), Na = {}, No = { exports: {} }, Vt = {}, Eo = { exports: {} }, Co = {};
var Od;
function cp() {
  return Od || (Od = 1, (function(r) {
    function a($, J) {
      var X = $.length;
      $.push(J);
      e: for (; 0 < X; ) {
        var x = X - 1 >>> 1, A = $[x];
        if (0 < c(A, J)) $[x] = J, $[X] = A, X = x;
        else break e;
      }
    }
    function o($) {
      return $.length === 0 ? null : $[0];
    }
    function d($) {
      if ($.length === 0) return null;
      var J = $[0], X = $.pop();
      if (X !== J) {
        $[0] = X;
        e: for (var x = 0, A = $.length, oe = A >>> 1; x < oe; ) {
          var V = 2 * (x + 1) - 1, ce = $[V], _ = V + 1, U = $[_];
          if (0 > c(ce, X)) _ < A && 0 > c(U, ce) ? ($[x] = U, $[_] = X, x = _) : ($[x] = ce, $[V] = X, x = V);
          else if (_ < A && 0 > c(U, X)) $[x] = U, $[_] = X, x = _;
          else break e;
        }
      }
      return J;
    }
    function c($, J) {
      var X = $.sortIndex - J.sortIndex;
      return X !== 0 ? X : $.id - J.id;
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
    var y = [], L = [], v = 1, g = null, M = 3, I = !1, C = !1, w = !1, j = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function W($) {
      for (var J = o(L); J !== null; ) {
        if (J.callback === null) d(L);
        else if (J.startTime <= $) d(L), J.sortIndex = J.expirationTime, a(y, J);
        else break;
        J = o(L);
      }
    }
    function G($) {
      if (w = !1, W($), !C) if (o(y) !== null) C = !0, Ee(Q);
      else {
        var J = o(L);
        J !== null && me(G, J.startTime - $);
      }
    }
    function Q($, J) {
      C = !1, w && (w = !1, B(P), P = -1), I = !0;
      var X = M;
      try {
        for (W(J), g = o(y); g !== null && (!(g.expirationTime > J) || $ && !ve()); ) {
          var x = g.callback;
          if (typeof x == "function") {
            g.callback = null, M = g.priorityLevel;
            var A = x(g.expirationTime <= J);
            J = r.unstable_now(), typeof A == "function" ? g.callback = A : g === o(y) && d(y), W(J);
          } else d(y);
          g = o(y);
        }
        if (g !== null) var oe = !0;
        else {
          var V = o(L);
          V !== null && me(G, V.startTime - J), oe = !1;
        }
        return oe;
      } finally {
        g = null, M = X, I = !1;
      }
    }
    var T = !1, O = null, P = -1, ee = 5, Y = -1;
    function ve() {
      return !(r.unstable_now() - Y < ee);
    }
    function fe() {
      if (O !== null) {
        var $ = r.unstable_now();
        Y = $;
        var J = !0;
        try {
          J = O(!0, $);
        } finally {
          J ? q() : (T = !1, O = null);
        }
      } else T = !1;
    }
    var q;
    if (typeof E == "function") q = function() {
      E(fe);
    };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), ge = de.port2;
      de.port1.onmessage = fe, q = function() {
        ge.postMessage(null);
      };
    } else q = function() {
      j(fe, 0);
    };
    function Ee($) {
      O = $, T || (T = !0, q());
    }
    function me($, J) {
      P = j(function() {
        $(r.unstable_now());
      }, J);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function($) {
      $.callback = null;
    }, r.unstable_continueExecution = function() {
      C || I || (C = !0, Ee(Q));
    }, r.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(y);
    }, r.unstable_next = function($) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = M;
      }
      var X = M;
      M = J;
      try {
        return $();
      } finally {
        M = X;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function($, J) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var X = M;
      M = $;
      try {
        return J();
      } finally {
        M = X;
      }
    }, r.unstable_scheduleCallback = function($, J, X) {
      var x = r.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? x + X : x) : X = x, $) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return A = X + A, $ = { id: v++, callback: J, priorityLevel: $, startTime: X, expirationTime: A, sortIndex: -1 }, X > x ? ($.sortIndex = X, a(L, $), o(y) === null && $ === o(L) && (w ? (B(P), P = -1) : w = !0, me(G, X - x))) : ($.sortIndex = A, a(y, $), C || I || (C = !0, Ee(Q))), $;
    }, r.unstable_shouldYield = ve, r.unstable_wrapCallback = function($) {
      var J = M;
      return function() {
        var X = M;
        M = J;
        try {
          return $.apply(this, arguments);
        } finally {
          M = X;
        }
      };
    };
  })(Co)), Co;
}
var Fd;
function dp() {
  return Fd || (Fd = 1, Eo.exports = cp()), Eo.exports;
}
var Id;
function hp() {
  if (Id) return Vt;
  Id = 1;
  var r = tu(), a = dp();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), c = {};
  function h(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, g = {};
  function M(e) {
    return y.call(g, e) ? !0 : y.call(v, e) ? !1 : L.test(e) ? g[e] = !0 : (v[e] = !0, !1);
  }
  function I(e, t, n, s) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function C(e, t, n, s) {
    if (t === null || typeof t > "u" || I(e, t, n, s)) return !0;
    if (s) return !1;
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
  function w(e, t, n, s, l, u, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = f;
  }
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    j[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    j[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    j[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    j[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    j[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    j[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    j[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    j[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    j[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var B = /[\-:]([a-z])/g;
  function E(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      B,
      E
    );
    j[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(B, E);
    j[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(B, E);
    j[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    j[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), j.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    j[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function W(e, t, n, s) {
    var l = j.hasOwnProperty(t) ? j[t] : null;
    (l !== null ? l.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, n, l, s) && (n = null), s || l === null ? M(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, s = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), P = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.provider"), ve = /* @__PURE__ */ Symbol.for("react.context"), fe = /* @__PURE__ */ Symbol.for("react.forward_ref"), q = /* @__PURE__ */ Symbol.for("react.suspense"), de = /* @__PURE__ */ Symbol.for("react.suspense_list"), ge = /* @__PURE__ */ Symbol.for("react.memo"), Ee = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var X = Object.assign, x;
  function A(e) {
    if (x === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
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
        } catch (K) {
          var s = K;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (K) {
          s = K;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (K) {
          s = K;
        }
        e();
      }
    } catch (K) {
      if (K && s && typeof K.stack == "string") {
        for (var l = K.stack.split(`
`), u = s.stack.split(`
`), f = l.length - 1, k = u.length - 1; 1 <= f && 0 <= k && l[f] !== u[k]; ) k--;
        for (; 1 <= f && 0 <= k; f--, k--) if (l[f] !== u[k]) {
          if (f !== 1 || k !== 1)
            do
              if (f--, k--, 0 > k || l[f] !== u[k]) {
                var S = `
` + l[f].replace(" at new ", " at ");
                return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
              }
            while (1 <= f && 0 <= k);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
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
  function _(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case T:
        return "Portal";
      case ee:
        return "Profiler";
      case P:
        return "StrictMode";
      case q:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ve:
        return (e.displayName || "Context") + ".Consumer";
      case Y:
        return (e._context.displayName || "Context") + ".Provider";
      case fe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ge:
        return t = e.displayName || null, t !== null ? t : _(e.type) || "Memo";
      case Ee:
        t = e._payload, e = e._init;
        try {
          return _(e(t));
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
        return _(t);
      case 8:
        return t === P ? "StrictMode" : "Mode";
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
  function Z(e) {
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
  function D(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ae(e) {
    var t = D(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(f) {
        s = "" + f, u.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(f) {
        s = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function z(e) {
    e._valueTracker || (e._valueTracker = ae(e));
  }
  function ie(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = D(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function re(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function he(e, t) {
    var n = t.checked;
    return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ke(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = Z(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function we(e, t) {
    t = t.checked, t != null && W(e, "checked", t, !1);
  }
  function $e(e, t) {
    we(e, t);
    var n = Z(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ye(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ye(e, t.type, Z(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function He(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ye(e, t, n) {
    (t !== "number" || re(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var We = Array.isArray;
  function Xe(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Z(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ut(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
    e._wrapperState = { initialValue: Z(n) };
  }
  function Ve(e, t) {
    var n = Z(t.value), s = Z(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Kt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Xt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Kt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Et, un = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Et = Et || document.createElement("div"), Et.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Et.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function qt(e, t) {
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
  function be(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zt.hasOwnProperty(e) && Zt[e] ? ("" + t).trim() : t + "px";
  }
  function Ut(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, l = be(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var _e = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Le(e, t) {
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
  function rt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rt = null, kt = null, en = null;
  function Tn(e) {
    if (e = Bs(e)) {
      if (typeof Rt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Dr(t), Rt(e.stateNode, e.type, t));
    }
  }
  function yn(e) {
    kt ? en ? en.push(e) : en = [e] : kt = e;
  }
  function gn() {
    if (kt) {
      var e = kt, t = en;
      if (en = kt = null, Tn(e), t) for (e = 0; e < t.length; e++) Tn(t[e]);
    }
  }
  function pr(e, t) {
    return e(t);
  }
  function Fe() {
  }
  var et = !1;
  function qe(e, t, n) {
    if (et) return e(t, n);
    et = !0;
    try {
      return pr(e, t, n);
    } finally {
      et = !1, (kt !== null || en !== null) && (Fe(), gn());
    }
  }
  function ct(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = Dr(n);
    if (s === null) return null;
    n = s[t];
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
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Ht = !1;
  if (m) try {
    var tn = {};
    Object.defineProperty(tn, "passive", { get: function() {
      Ht = !0;
    } }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
  } catch {
    Ht = !1;
  }
  function Oi(e, t, n, s, l, u, f, k, S) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, K);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var Mn = !1, Vn = null, mi = !1, gs = null, pi = { onError: function(e) {
    Mn = !0, Vn = e;
  } };
  function js(e, t, n, s, l, u, f, k, S) {
    Mn = !1, Vn = null, Oi.apply(pi, arguments);
  }
  function vr(e, t, n, s, l, u, f, k, S) {
    if (js.apply(this, arguments), Mn) {
      if (Mn) {
        var K = Vn;
        Mn = !1, Vn = null;
      } else throw Error(o(198));
      mi || (mi = !0, gs = K);
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
  function kr(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function xt(e) {
    if (_n(e) !== e) throw Error(o(188));
  }
  function Ba(e) {
    var t = e.alternate;
    if (!t) {
      if (t = _n(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (s = l.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return xt(l), e;
          if (u === s) return xt(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== s.return) n = l, s = u;
      else {
        for (var f = !1, k = l.child; k; ) {
          if (k === n) {
            f = !0, n = l, s = u;
            break;
          }
          if (k === s) {
            f = !0, s = l, n = u;
            break;
          }
          k = k.sibling;
        }
        if (!f) {
          for (k = u.child; k; ) {
            if (k === n) {
              f = !0, n = u, s = l;
              break;
            }
            if (k === s) {
              f = !0, s = u, n = l;
              break;
            }
            k = k.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== s) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function xs(e) {
    return e = Ba(e), e !== null ? yr(e) : null;
  }
  function yr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = yr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var gr = a.unstable_scheduleCallback, An = a.unstable_cancelCallback, Kn = a.unstable_shouldYield, H = a.unstable_requestPaint, ue = a.unstable_now, ze = a.unstable_getCurrentPriorityLevel, Ot = a.unstable_ImmediatePriority, dt = a.unstable_UserBlockingPriority, Pn = a.unstable_NormalPriority, Ss = a.unstable_LowPriority, Un = a.unstable_IdlePriority, jr = null, jn = null;
  function xf(e) {
    if (jn && typeof jn.onCommitFiberRoot == "function") try {
      jn.onCommitFiberRoot(jr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var cn = Math.clz32 ? Math.clz32 : Nf, Sf = Math.log, wf = Math.LN2;
  function Nf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / wf | 0) | 0;
  }
  var xr = 64, Sr = 4194304;
  function ws(e) {
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
  function wr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, l = e.suspendedLanes, u = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var k = f & ~l;
      k !== 0 ? s = ws(k) : (u &= f, u !== 0 && (s = ws(u)));
    } else f = n & ~l, f !== 0 ? s = ws(f) : u !== 0 && (s = ws(u));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & l) === 0 && (l = s & -s, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - cn(t), l = 1 << n, s |= e[n], t &= ~l;
    return s;
  }
  function Ef(e, t) {
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
  function Cf(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var f = 31 - cn(u), k = 1 << f, S = l[f];
      S === -1 ? ((k & n) === 0 || (k & s) !== 0) && (l[f] = Ef(k, t)) : S <= t && (e.expiredLanes |= k), u &= ~k;
    }
  }
  function Va(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function uu() {
    var e = xr;
    return xr <<= 1, (xr & 4194240) === 0 && (xr = 64), e;
  }
  function Ka(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ns(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - cn(t), e[t] = n;
  }
  function bf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - cn(n), u = 1 << l;
      t[l] = 0, s[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Ua(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - cn(n), l = 1 << s;
      l & t | e[s] & t && (e[s] |= t), n &= ~l;
    }
  }
  var Qe = 0;
  function cu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var du, Ha, hu, fu, mu, Ga = !1, Nr = [], Hn = null, Gn = null, Wn = null, Es = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Qn = [], Tf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function pu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        Es.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cs.delete(t.pointerId);
    }
  }
  function bs(e, t, n, s, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: u, targetContainers: [l] }, t !== null && (t = Bs(t), t !== null && Ha(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Mf(e, t, n, s, l) {
    switch (t) {
      case "focusin":
        return Hn = bs(Hn, e, t, n, s, l), !0;
      case "dragenter":
        return Gn = bs(Gn, e, t, n, s, l), !0;
      case "mouseover":
        return Wn = bs(Wn, e, t, n, s, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Es.set(u, bs(Es.get(u) || null, e, t, n, s, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Cs.set(u, bs(Cs.get(u) || null, e, t, n, s, l)), !0;
    }
    return !1;
  }
  function vu(e) {
    var t = vi(e.target);
    if (t !== null) {
      var n = _n(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = kr(n), t !== null) {
            e.blockedOn = t, mu(e.priority, function() {
              hu(n);
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
  function Er(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Ge = s, n.target.dispatchEvent(s), Ge = null;
      } else return t = Bs(n), t !== null && Ha(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ku(e, t, n) {
    Er(e) && n.delete(t);
  }
  function _f() {
    Ga = !1, Hn !== null && Er(Hn) && (Hn = null), Gn !== null && Er(Gn) && (Gn = null), Wn !== null && Er(Wn) && (Wn = null), Es.forEach(ku), Cs.forEach(ku);
  }
  function Ts(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ga || (Ga = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, _f)));
  }
  function Ms(e) {
    function t(l) {
      return Ts(l, e);
    }
    if (0 < Nr.length) {
      Ts(Nr[0], e);
      for (var n = 1; n < Nr.length; n++) {
        var s = Nr[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (Hn !== null && Ts(Hn, e), Gn !== null && Ts(Gn, e), Wn !== null && Ts(Wn, e), Es.forEach(t), Cs.forEach(t), n = 0; n < Qn.length; n++) s = Qn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Qn.length && (n = Qn[0], n.blockedOn === null); ) vu(n), n.blockedOn === null && Qn.shift();
  }
  var Fi = G.ReactCurrentBatchConfig, Cr = !0;
  function Af(e, t, n, s) {
    var l = Qe, u = Fi.transition;
    Fi.transition = null;
    try {
      Qe = 1, Wa(e, t, n, s);
    } finally {
      Qe = l, Fi.transition = u;
    }
  }
  function Pf(e, t, n, s) {
    var l = Qe, u = Fi.transition;
    Fi.transition = null;
    try {
      Qe = 4, Wa(e, t, n, s);
    } finally {
      Qe = l, Fi.transition = u;
    }
  }
  function Wa(e, t, n, s) {
    if (Cr) {
      var l = Qa(e, t, n, s);
      if (l === null) dl(e, t, s, br, n), pu(e, s);
      else if (Mf(l, e, t, n, s)) s.stopPropagation();
      else if (pu(e, s), t & 4 && -1 < Tf.indexOf(e)) {
        for (; l !== null; ) {
          var u = Bs(l);
          if (u !== null && du(u), u = Qa(e, t, n, s), u === null && dl(e, t, s, br, n), u === l) break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else dl(e, t, s, null, n);
    }
  }
  var br = null;
  function Qa(e, t, n, s) {
    if (br = null, e = rt(s), e = vi(e), e !== null) if (t = _n(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = kr(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return br = e, null;
  }
  function yu(e) {
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
        switch (ze()) {
          case Ot:
            return 1;
          case dt:
            return 4;
          case Pn:
          case Ss:
            return 16;
          case Un:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yn = null, Ya = null, Tr = null;
  function gu() {
    if (Tr) return Tr;
    var e, t = Ya, n = t.length, s, l = "value" in Yn ? Yn.value : Yn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (s = 1; s <= f && t[n - s] === l[u - s]; s++) ;
    return Tr = l.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Mr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _r() {
    return !0;
  }
  function ju() {
    return !1;
  }
  function Gt(e) {
    function t(n, s, l, u, f) {
      this._reactName = n, this._targetInst = l, this.type = s, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(u) : u[k]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? _r : ju, this.isPropagationStopped = ju, this;
    }
    return X(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _r);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _r);
    }, persist: function() {
    }, isPersistent: _r }), t;
  }
  var Ii = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ja = Gt(Ii), _s = X({}, Ii, { view: 0, detail: 0 }), Lf = Gt(_s), Xa, qa, As, Ar = X({}, _s, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: el, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== As && (As && e.type === "mousemove" ? (Xa = e.screenX - As.screenX, qa = e.screenY - As.screenY) : qa = Xa = 0, As = e), Xa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : qa;
  } }), xu = Gt(Ar), $f = X({}, Ar, { dataTransfer: 0 }), Rf = Gt($f), Of = X({}, _s, { relatedTarget: 0 }), Za = Gt(Of), Ff = X({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), If = Gt(Ff), Df = X({}, Ii, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), zf = Gt(Df), Bf = X({}, Ii, { data: 0 }), Su = Gt(Bf), Vf = {
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
  }, Kf = {
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
  }, Uf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Hf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Uf[e]) ? !!t[e] : !1;
  }
  function el() {
    return Hf;
  }
  var Gf = X({}, _s, { key: function(e) {
    if (e.key) {
      var t = Vf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: el, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Wf = Gt(Gf), Qf = X({}, Ar, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wu = Gt(Qf), Yf = X({}, _s, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: el }), Jf = Gt(Yf), Xf = X({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = Gt(Xf), Zf = X({}, Ar, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), em = Gt(Zf), tm = [9, 13, 27, 32], tl = m && "CompositionEvent" in window, Ps = null;
  m && "documentMode" in document && (Ps = document.documentMode);
  var nm = m && "TextEvent" in window && !Ps, Nu = m && (!tl || Ps && 8 < Ps && 11 >= Ps), Eu = " ", Cu = !1;
  function bu(e, t) {
    switch (e) {
      case "keyup":
        return tm.indexOf(t.keyCode) !== -1;
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
  function Tu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Di = !1;
  function im(e, t) {
    switch (e) {
      case "compositionend":
        return Tu(t);
      case "keypress":
        return t.which !== 32 ? null : (Cu = !0, Eu);
      case "textInput":
        return e = t.data, e === Eu && Cu ? null : e;
      default:
        return null;
    }
  }
  function sm(e, t) {
    if (Di) return e === "compositionend" || !tl && bu(e, t) ? (e = gu(), Tr = Ya = Yn = null, Di = !1, e) : null;
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
        return Nu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rm[e.type] : t === "textarea";
  }
  function _u(e, t, n, s) {
    yn(s), t = Or(t, "onChange"), 0 < t.length && (n = new Ja("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var Ls = null, $s = null;
  function am(e) {
    Qu(e, 0);
  }
  function Pr(e) {
    var t = Ui(e);
    if (ie(t)) return e;
  }
  function lm(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (m) {
    var nl;
    if (m) {
      var il = "oninput" in document;
      if (!il) {
        var Pu = document.createElement("div");
        Pu.setAttribute("oninput", "return;"), il = typeof Pu.oninput == "function";
      }
      nl = il;
    } else nl = !1;
    Au = nl && (!document.documentMode || 9 < document.documentMode);
  }
  function Lu() {
    Ls && (Ls.detachEvent("onpropertychange", $u), $s = Ls = null);
  }
  function $u(e) {
    if (e.propertyName === "value" && Pr($s)) {
      var t = [];
      _u(t, $s, e, rt(e)), qe(am, t);
    }
  }
  function om(e, t, n) {
    e === "focusin" ? (Lu(), Ls = t, $s = n, Ls.attachEvent("onpropertychange", $u)) : e === "focusout" && Lu();
  }
  function um(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Pr($s);
  }
  function cm(e, t) {
    if (e === "click") return Pr(t);
  }
  function dm(e, t) {
    if (e === "input" || e === "change") return Pr(t);
  }
  function hm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dn = typeof Object.is == "function" ? Object.is : hm;
  function Rs(e, t) {
    if (dn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!y.call(t, l) || !dn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ou(e, t) {
    var n = Ru(e);
    e = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (s = e + n.textContent.length, e <= t && s >= t) return { node: n, offset: t - e };
        e = s;
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
      n = Ru(n);
    }
  }
  function Fu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Iu() {
    for (var e = window, t = re(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = re(e.document);
    }
    return t;
  }
  function sl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function fm(e) {
    var t = Iu(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fu(n.ownerDocument.documentElement, n)) {
      if (s !== null && sl(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(s.start, l);
          s = s.end === void 0 ? u : Math.min(s.end, l), !e.extend && u > s && (l = s, s = u, u = l), l = Ou(n, u);
          var f = Ou(
            n,
            s
          );
          l && f && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > s ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var mm = m && "documentMode" in document && 11 >= document.documentMode, zi = null, rl = null, Os = null, al = !1;
  function Du(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    al || zi == null || zi !== re(s) || (s = zi, "selectionStart" in s && sl(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Os && Rs(Os, s) || (Os = s, s = Or(rl, "onSelect"), 0 < s.length && (t = new Ja("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = zi)));
  }
  function Lr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Bi = { animationend: Lr("Animation", "AnimationEnd"), animationiteration: Lr("Animation", "AnimationIteration"), animationstart: Lr("Animation", "AnimationStart"), transitionend: Lr("Transition", "TransitionEnd") }, ll = {}, zu = {};
  m && (zu = document.createElement("div").style, "AnimationEvent" in window || (delete Bi.animationend.animation, delete Bi.animationiteration.animation, delete Bi.animationstart.animation), "TransitionEvent" in window || delete Bi.transitionend.transition);
  function $r(e) {
    if (ll[e]) return ll[e];
    if (!Bi[e]) return e;
    var t = Bi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in zu) return ll[e] = t[n];
    return e;
  }
  var Bu = $r("animationend"), Vu = $r("animationiteration"), Ku = $r("animationstart"), Uu = $r("transitionend"), Hu = /* @__PURE__ */ new Map(), Gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Jn(e, t) {
    Hu.set(e, t), h(t, [e]);
  }
  for (var ol = 0; ol < Gu.length; ol++) {
    var ul = Gu[ol], pm = ul.toLowerCase(), vm = ul[0].toUpperCase() + ul.slice(1);
    Jn(pm, "on" + vm);
  }
  Jn(Bu, "onAnimationEnd"), Jn(Vu, "onAnimationIteration"), Jn(Ku, "onAnimationStart"), Jn("dblclick", "onDoubleClick"), Jn("focusin", "onFocus"), Jn("focusout", "onBlur"), Jn(Uu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), km = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));
  function Wu(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, vr(s, t, void 0, e), e.currentTarget = null;
  }
  function Qu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t) for (var f = s.length - 1; 0 <= f; f--) {
          var k = s[f], S = k.instance, K = k.currentTarget;
          if (k = k.listener, S !== u && l.isPropagationStopped()) break e;
          Wu(l, k, K), u = S;
        }
        else for (f = 0; f < s.length; f++) {
          if (k = s[f], S = k.instance, K = k.currentTarget, k = k.listener, S !== u && l.isPropagationStopped()) break e;
          Wu(l, k, K), u = S;
        }
      }
    }
    if (mi) throw e = gs, mi = !1, gs = null, e;
  }
  function tt(e, t) {
    var n = t[kl];
    n === void 0 && (n = t[kl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (Yu(t, e, 2, !1), n.add(s));
  }
  function cl(e, t, n) {
    var s = 0;
    t && (s |= 4), Yu(n, e, s, t);
  }
  var Rr = "_reactListening" + Math.random().toString(36).slice(2);
  function Is(e) {
    if (!e[Rr]) {
      e[Rr] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (km.has(n) || cl(n, !1, e), cl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Rr] || (t[Rr] = !0, cl("selectionchange", !1, t));
    }
  }
  function Yu(e, t, n, s) {
    switch (yu(t)) {
      case 1:
        var l = Af;
        break;
      case 4:
        l = Pf;
        break;
      default:
        l = Wa;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ht || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), s ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function dl(e, t, n, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var f = s.tag;
      if (f === 3 || f === 4) {
        var k = s.stateNode.containerInfo;
        if (k === l || k.nodeType === 8 && k.parentNode === l) break;
        if (f === 4) for (f = s.return; f !== null; ) {
          var S = f.tag;
          if ((S === 3 || S === 4) && (S = f.stateNode.containerInfo, S === l || S.nodeType === 8 && S.parentNode === l)) return;
          f = f.return;
        }
        for (; k !== null; ) {
          if (f = vi(k), f === null) return;
          if (S = f.tag, S === 5 || S === 6) {
            s = u = f;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    qe(function() {
      var K = u, ne = rt(n), se = [];
      e: {
        var te = Hu.get(e);
        if (te !== void 0) {
          var pe = Ja, je = e;
          switch (e) {
            case "keypress":
              if (Mr(n) === 0) break e;
            case "keydown":
            case "keyup":
              pe = Wf;
              break;
            case "focusin":
              je = "focus", pe = Za;
              break;
            case "focusout":
              je = "blur", pe = Za;
              break;
            case "beforeblur":
            case "afterblur":
              pe = Za;
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
              pe = xu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = Jf;
              break;
            case Bu:
            case Vu:
            case Ku:
              pe = If;
              break;
            case Uu:
              pe = qf;
              break;
            case "scroll":
              pe = Lf;
              break;
            case "wheel":
              pe = em;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = zf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = wu;
          }
          var Se = (t & 4) !== 0, ht = !Se && e === "scroll", R = Se ? te !== null ? te + "Capture" : null : te;
          Se = [];
          for (var b = K, F; b !== null; ) {
            F = b;
            var le = F.stateNode;
            if (F.tag === 5 && le !== null && (F = le, R !== null && (le = ct(b, R), le != null && Se.push(Ds(b, le, F)))), ht) break;
            b = b.return;
          }
          0 < Se.length && (te = new pe(te, je, null, n, ne), se.push({ event: te, listeners: Se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (te = e === "mouseover" || e === "pointerover", pe = e === "mouseout" || e === "pointerout", te && n !== Ge && (je = n.relatedTarget || n.fromElement) && (vi(je) || je[Ln])) break e;
          if ((pe || te) && (te = ne.window === ne ? ne : (te = ne.ownerDocument) ? te.defaultView || te.parentWindow : window, pe ? (je = n.relatedTarget || n.toElement, pe = K, je = je ? vi(je) : null, je !== null && (ht = _n(je), je !== ht || je.tag !== 5 && je.tag !== 6) && (je = null)) : (pe = null, je = K), pe !== je)) {
            if (Se = xu, le = "onMouseLeave", R = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (Se = wu, le = "onPointerLeave", R = "onPointerEnter", b = "pointer"), ht = pe == null ? te : Ui(pe), F = je == null ? te : Ui(je), te = new Se(le, b + "leave", pe, n, ne), te.target = ht, te.relatedTarget = F, le = null, vi(ne) === K && (Se = new Se(R, b + "enter", je, n, ne), Se.target = F, Se.relatedTarget = ht, le = Se), ht = le, pe && je) t: {
              for (Se = pe, R = je, b = 0, F = Se; F; F = Vi(F)) b++;
              for (F = 0, le = R; le; le = Vi(le)) F++;
              for (; 0 < b - F; ) Se = Vi(Se), b--;
              for (; 0 < F - b; ) R = Vi(R), F--;
              for (; b--; ) {
                if (Se === R || R !== null && Se === R.alternate) break t;
                Se = Vi(Se), R = Vi(R);
              }
              Se = null;
            }
            else Se = null;
            pe !== null && Ju(se, te, pe, Se, !1), je !== null && ht !== null && Ju(se, ht, je, Se, !0);
          }
        }
        e: {
          if (te = K ? Ui(K) : window, pe = te.nodeName && te.nodeName.toLowerCase(), pe === "select" || pe === "input" && te.type === "file") var Ne = lm;
          else if (Mu(te)) if (Au) Ne = dm;
          else {
            Ne = um;
            var Te = om;
          }
          else (pe = te.nodeName) && pe.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (Ne = cm);
          if (Ne && (Ne = Ne(e, K))) {
            _u(se, Ne, n, ne);
            break e;
          }
          Te && Te(e, te, K), e === "focusout" && (Te = te._wrapperState) && Te.controlled && te.type === "number" && Ye(te, "number", te.value);
        }
        switch (Te = K ? Ui(K) : window, e) {
          case "focusin":
            (Mu(Te) || Te.contentEditable === "true") && (zi = Te, rl = K, Os = null);
            break;
          case "focusout":
            Os = rl = zi = null;
            break;
          case "mousedown":
            al = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            al = !1, Du(se, n, ne);
            break;
          case "selectionchange":
            if (mm) break;
          case "keydown":
          case "keyup":
            Du(se, n, ne);
        }
        var Me;
        if (tl) e: {
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
        else Di ? bu(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (Nu && n.locale !== "ko" && (Di || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Di && (Me = gu()) : (Yn = ne, Ya = "value" in Yn ? Yn.value : Yn.textContent, Di = !0)), Te = Or(K, Pe), 0 < Te.length && (Pe = new Su(Pe, e, null, n, ne), se.push({ event: Pe, listeners: Te }), Me ? Pe.data = Me : (Me = Tu(n), Me !== null && (Pe.data = Me)))), (Me = nm ? im(e, n) : sm(e, n)) && (K = Or(K, "onBeforeInput"), 0 < K.length && (ne = new Su("onBeforeInput", "beforeinput", null, n, ne), se.push({ event: ne, listeners: K }), ne.data = Me));
      }
      Qu(se, t);
    });
  }
  function Ds(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Or(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = ct(e, n), u != null && s.unshift(Ds(e, u, l)), u = ct(e, t), u != null && s.push(Ds(e, u, l))), e = e.return;
    }
    return s;
  }
  function Vi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ju(e, t, n, s, l) {
    for (var u = t._reactName, f = []; n !== null && n !== s; ) {
      var k = n, S = k.alternate, K = k.stateNode;
      if (S !== null && S === s) break;
      k.tag === 5 && K !== null && (k = K, l ? (S = ct(n, u), S != null && f.unshift(Ds(n, S, k))) : l || (S = ct(n, u), S != null && f.push(Ds(n, S, k)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ym = /\r\n?/g, gm = /\u0000|\uFFFD/g;
  function Xu(e) {
    return (typeof e == "string" ? e : "" + e).replace(ym, `
`).replace(gm, "");
  }
  function Fr(e, t, n) {
    if (t = Xu(t), Xu(e) !== t && n) throw Error(o(425));
  }
  function Ir() {
  }
  var hl = null, fl = null;
  function ml(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var pl = typeof setTimeout == "function" ? setTimeout : void 0, jm = typeof clearTimeout == "function" ? clearTimeout : void 0, qu = typeof Promise == "function" ? Promise : void 0, xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof qu < "u" ? function(e) {
    return qu.resolve(null).then(e).catch(Sm);
  } : pl;
  function Sm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function vl(e, t) {
    var n = t, s = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (s === 0) {
          e.removeChild(l), Ms(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = l;
    } while (n);
    Ms(t);
  }
  function Xn(e) {
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
  function Zu(e) {
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
  var Ki = Math.random().toString(36).slice(2), xn = "__reactFiber$" + Ki, zs = "__reactProps$" + Ki, Ln = "__reactContainer$" + Ki, kl = "__reactEvents$" + Ki, wm = "__reactListeners$" + Ki, Nm = "__reactHandles$" + Ki;
  function vi(e) {
    var t = e[xn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ln] || n[xn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Zu(e); e !== null; ) {
          if (n = e[xn]) return n;
          e = Zu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Bs(e) {
    return e = e[xn] || e[Ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ui(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Dr(e) {
    return e[zs] || null;
  }
  var yl = [], Hi = -1;
  function qn(e) {
    return { current: e };
  }
  function nt(e) {
    0 > Hi || (e.current = yl[Hi], yl[Hi] = null, Hi--);
  }
  function Ze(e, t) {
    Hi++, yl[Hi] = e.current, e.current = t;
  }
  var Zn = {}, Ct = qn(Zn), Ft = qn(!1), ki = Zn;
  function Gi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function It(e) {
    return e = e.childContextTypes, e != null;
  }
  function zr() {
    nt(Ft), nt(Ct);
  }
  function ec(e, t, n) {
    if (Ct.current !== Zn) throw Error(o(168));
    Ze(Ct, t), Ze(Ft, n);
  }
  function tc(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(o(108, U(e) || "Unknown", l));
    return X({}, n, s);
  }
  function Br(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn, ki = Ct.current, Ze(Ct, e), Ze(Ft, Ft.current), !0;
  }
  function nc(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    n ? (e = tc(e, t, ki), s.__reactInternalMemoizedMergedChildContext = e, nt(Ft), nt(Ct), Ze(Ct, e)) : nt(Ft), Ze(Ft, n);
  }
  var $n = null, Vr = !1, gl = !1;
  function ic(e) {
    $n === null ? $n = [e] : $n.push(e);
  }
  function Em(e) {
    Vr = !0, ic(e);
  }
  function ei() {
    if (!gl && $n !== null) {
      gl = !0;
      var e = 0, t = Qe;
      try {
        var n = $n;
        for (Qe = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        $n = null, Vr = !1;
      } catch (l) {
        throw $n !== null && ($n = $n.slice(e + 1)), gr(Ot, ei), l;
      } finally {
        Qe = t, gl = !1;
      }
    }
    return null;
  }
  var Wi = [], Qi = 0, Kr = null, Ur = 0, nn = [], sn = 0, yi = null, Rn = 1, On = "";
  function gi(e, t) {
    Wi[Qi++] = Ur, Wi[Qi++] = Kr, Kr = e, Ur = t;
  }
  function sc(e, t, n) {
    nn[sn++] = Rn, nn[sn++] = On, nn[sn++] = yi, yi = e;
    var s = Rn;
    e = On;
    var l = 32 - cn(s) - 1;
    s &= ~(1 << l), n += 1;
    var u = 32 - cn(t) + l;
    if (30 < u) {
      var f = l - l % 5;
      u = (s & (1 << f) - 1).toString(32), s >>= f, l -= f, Rn = 1 << 32 - cn(t) + l | n << l | s, On = u + e;
    } else Rn = 1 << u | n << l | s, On = e;
  }
  function jl(e) {
    e.return !== null && (gi(e, 1), sc(e, 1, 0));
  }
  function xl(e) {
    for (; e === Kr; ) Kr = Wi[--Qi], Wi[Qi] = null, Ur = Wi[--Qi], Wi[Qi] = null;
    for (; e === yi; ) yi = nn[--sn], nn[sn] = null, On = nn[--sn], nn[sn] = null, Rn = nn[--sn], nn[sn] = null;
  }
  var Wt = null, Qt = null, st = !1, hn = null;
  function rc(e, t) {
    var n = on(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ac(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Wt = e, Qt = Xn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Wt = e, Qt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yi !== null ? { id: Rn, overflow: On } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = on(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Wt = e, Qt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Sl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function wl(e) {
    if (st) {
      var t = Qt;
      if (t) {
        var n = t;
        if (!ac(e, t)) {
          if (Sl(e)) throw Error(o(418));
          t = Xn(n.nextSibling);
          var s = Wt;
          t && ac(e, t) ? rc(s, n) : (e.flags = e.flags & -4097 | 2, st = !1, Wt = e);
        }
      } else {
        if (Sl(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, st = !1, Wt = e;
      }
    }
  }
  function lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Wt = e;
  }
  function Hr(e) {
    if (e !== Wt) return !1;
    if (!st) return lc(e), st = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ml(e.type, e.memoizedProps)), t && (t = Qt)) {
      if (Sl(e)) throw oc(), Error(o(418));
      for (; t; ) rc(e, t), t = Xn(t.nextSibling);
    }
    if (lc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Qt = Xn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Qt = null;
      }
    } else Qt = Wt ? Xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function oc() {
    for (var e = Qt; e; ) e = Xn(e.nextSibling);
  }
  function Yi() {
    Qt = Wt = null, st = !1;
  }
  function Nl(e) {
    hn === null ? hn = [e] : hn.push(e);
  }
  var Cm = G.ReactCurrentBatchConfig;
  function Vs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var l = s, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(f) {
          var k = l.refs;
          f === null ? delete k[u] : k[u] = f;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Gr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function uc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function cc(e) {
    function t(R, b) {
      if (e) {
        var F = R.deletions;
        F === null ? (R.deletions = [b], R.flags |= 16) : F.push(b);
      }
    }
    function n(R, b) {
      if (!e) return null;
      for (; b !== null; ) t(R, b), b = b.sibling;
      return null;
    }
    function s(R, b) {
      for (R = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? R.set(b.key, b) : R.set(b.index, b), b = b.sibling;
      return R;
    }
    function l(R, b) {
      return R = oi(R, b), R.index = 0, R.sibling = null, R;
    }
    function u(R, b, F) {
      return R.index = F, e ? (F = R.alternate, F !== null ? (F = F.index, F < b ? (R.flags |= 2, b) : F) : (R.flags |= 2, b)) : (R.flags |= 1048576, b);
    }
    function f(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function k(R, b, F, le) {
      return b === null || b.tag !== 6 ? (b = vo(F, R.mode, le), b.return = R, b) : (b = l(b, F), b.return = R, b);
    }
    function S(R, b, F, le) {
      var Ne = F.type;
      return Ne === O ? ne(R, b, F.props.children, le, F.key) : b !== null && (b.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === Ee && uc(Ne) === b.type) ? (le = l(b, F.props), le.ref = Vs(R, b, F), le.return = R, le) : (le = va(F.type, F.key, F.props, null, R.mode, le), le.ref = Vs(R, b, F), le.return = R, le);
    }
    function K(R, b, F, le) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== F.containerInfo || b.stateNode.implementation !== F.implementation ? (b = ko(F, R.mode, le), b.return = R, b) : (b = l(b, F.children || []), b.return = R, b);
    }
    function ne(R, b, F, le, Ne) {
      return b === null || b.tag !== 7 ? (b = bi(F, R.mode, le, Ne), b.return = R, b) : (b = l(b, F), b.return = R, b);
    }
    function se(R, b, F) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = vo("" + b, R.mode, F), b.return = R, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Q:
            return F = va(b.type, b.key, b.props, null, R.mode, F), F.ref = Vs(R, null, b), F.return = R, F;
          case T:
            return b = ko(b, R.mode, F), b.return = R, b;
          case Ee:
            var le = b._init;
            return se(R, le(b._payload), F);
        }
        if (We(b) || J(b)) return b = bi(b, R.mode, F, null), b.return = R, b;
        Gr(R, b);
      }
      return null;
    }
    function te(R, b, F, le) {
      var Ne = b !== null ? b.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number") return Ne !== null ? null : k(R, b, "" + F, le);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Q:
            return F.key === Ne ? S(R, b, F, le) : null;
          case T:
            return F.key === Ne ? K(R, b, F, le) : null;
          case Ee:
            return Ne = F._init, te(
              R,
              b,
              Ne(F._payload),
              le
            );
        }
        if (We(F) || J(F)) return Ne !== null ? null : ne(R, b, F, le, null);
        Gr(R, F);
      }
      return null;
    }
    function pe(R, b, F, le, Ne) {
      if (typeof le == "string" && le !== "" || typeof le == "number") return R = R.get(F) || null, k(b, R, "" + le, Ne);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case Q:
            return R = R.get(le.key === null ? F : le.key) || null, S(b, R, le, Ne);
          case T:
            return R = R.get(le.key === null ? F : le.key) || null, K(b, R, le, Ne);
          case Ee:
            var Te = le._init;
            return pe(R, b, F, Te(le._payload), Ne);
        }
        if (We(le) || J(le)) return R = R.get(F) || null, ne(b, R, le, Ne, null);
        Gr(b, le);
      }
      return null;
    }
    function je(R, b, F, le) {
      for (var Ne = null, Te = null, Me = b, Pe = b = 0, jt = null; Me !== null && Pe < F.length; Pe++) {
        Me.index > Pe ? (jt = Me, Me = null) : jt = Me.sibling;
        var Ke = te(R, Me, F[Pe], le);
        if (Ke === null) {
          Me === null && (Me = jt);
          break;
        }
        e && Me && Ke.alternate === null && t(R, Me), b = u(Ke, b, Pe), Te === null ? Ne = Ke : Te.sibling = Ke, Te = Ke, Me = jt;
      }
      if (Pe === F.length) return n(R, Me), st && gi(R, Pe), Ne;
      if (Me === null) {
        for (; Pe < F.length; Pe++) Me = se(R, F[Pe], le), Me !== null && (b = u(Me, b, Pe), Te === null ? Ne = Me : Te.sibling = Me, Te = Me);
        return st && gi(R, Pe), Ne;
      }
      for (Me = s(R, Me); Pe < F.length; Pe++) jt = pe(Me, R, Pe, F[Pe], le), jt !== null && (e && jt.alternate !== null && Me.delete(jt.key === null ? Pe : jt.key), b = u(jt, b, Pe), Te === null ? Ne = jt : Te.sibling = jt, Te = jt);
      return e && Me.forEach(function(ui) {
        return t(R, ui);
      }), st && gi(R, Pe), Ne;
    }
    function Se(R, b, F, le) {
      var Ne = J(F);
      if (typeof Ne != "function") throw Error(o(150));
      if (F = Ne.call(F), F == null) throw Error(o(151));
      for (var Te = Ne = null, Me = b, Pe = b = 0, jt = null, Ke = F.next(); Me !== null && !Ke.done; Pe++, Ke = F.next()) {
        Me.index > Pe ? (jt = Me, Me = null) : jt = Me.sibling;
        var ui = te(R, Me, Ke.value, le);
        if (ui === null) {
          Me === null && (Me = jt);
          break;
        }
        e && Me && ui.alternate === null && t(R, Me), b = u(ui, b, Pe), Te === null ? Ne = ui : Te.sibling = ui, Te = ui, Me = jt;
      }
      if (Ke.done) return n(
        R,
        Me
      ), st && gi(R, Pe), Ne;
      if (Me === null) {
        for (; !Ke.done; Pe++, Ke = F.next()) Ke = se(R, Ke.value, le), Ke !== null && (b = u(Ke, b, Pe), Te === null ? Ne = Ke : Te.sibling = Ke, Te = Ke);
        return st && gi(R, Pe), Ne;
      }
      for (Me = s(R, Me); !Ke.done; Pe++, Ke = F.next()) Ke = pe(Me, R, Pe, Ke.value, le), Ke !== null && (e && Ke.alternate !== null && Me.delete(Ke.key === null ? Pe : Ke.key), b = u(Ke, b, Pe), Te === null ? Ne = Ke : Te.sibling = Ke, Te = Ke);
      return e && Me.forEach(function(rp) {
        return t(R, rp);
      }), st && gi(R, Pe), Ne;
    }
    function ht(R, b, F, le) {
      if (typeof F == "object" && F !== null && F.type === O && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Q:
            e: {
              for (var Ne = F.key, Te = b; Te !== null; ) {
                if (Te.key === Ne) {
                  if (Ne = F.type, Ne === O) {
                    if (Te.tag === 7) {
                      n(R, Te.sibling), b = l(Te, F.props.children), b.return = R, R = b;
                      break e;
                    }
                  } else if (Te.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === Ee && uc(Ne) === Te.type) {
                    n(R, Te.sibling), b = l(Te, F.props), b.ref = Vs(R, Te, F), b.return = R, R = b;
                    break e;
                  }
                  n(R, Te);
                  break;
                } else t(R, Te);
                Te = Te.sibling;
              }
              F.type === O ? (b = bi(F.props.children, R.mode, le, F.key), b.return = R, R = b) : (le = va(F.type, F.key, F.props, null, R.mode, le), le.ref = Vs(R, b, F), le.return = R, R = le);
            }
            return f(R);
          case T:
            e: {
              for (Te = F.key; b !== null; ) {
                if (b.key === Te) if (b.tag === 4 && b.stateNode.containerInfo === F.containerInfo && b.stateNode.implementation === F.implementation) {
                  n(R, b.sibling), b = l(b, F.children || []), b.return = R, R = b;
                  break e;
                } else {
                  n(R, b);
                  break;
                }
                else t(R, b);
                b = b.sibling;
              }
              b = ko(F, R.mode, le), b.return = R, R = b;
            }
            return f(R);
          case Ee:
            return Te = F._init, ht(R, b, Te(F._payload), le);
        }
        if (We(F)) return je(R, b, F, le);
        if (J(F)) return Se(R, b, F, le);
        Gr(R, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, b !== null && b.tag === 6 ? (n(R, b.sibling), b = l(b, F), b.return = R, R = b) : (n(R, b), b = vo(F, R.mode, le), b.return = R, R = b), f(R)) : n(R, b);
    }
    return ht;
  }
  var Ji = cc(!0), dc = cc(!1), Wr = qn(null), Qr = null, Xi = null, El = null;
  function Cl() {
    El = Xi = Qr = null;
  }
  function bl(e) {
    var t = Wr.current;
    nt(Wr), e._currentValue = t;
  }
  function Tl(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function qi(e, t) {
    Qr = e, El = Xi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Dt = !0), e.firstContext = null);
  }
  function rn(e) {
    var t = e._currentValue;
    if (El !== e) if (e = { context: e, memoizedValue: t, next: null }, Xi === null) {
      if (Qr === null) throw Error(o(308));
      Xi = e, Qr.dependencies = { lanes: 0, firstContext: e };
    } else Xi = Xi.next = e;
    return t;
  }
  var ji = null;
  function Ml(e) {
    ji === null ? ji = [e] : ji.push(e);
  }
  function hc(e, t, n, s) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Ml(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Fn(e, s);
  }
  function Fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ti = !1;
  function _l(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function fc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function In(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ni(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Be & 2) !== 0) {
      var l = s.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), s.pending = t, Fn(e, n);
    }
    return l = s.interleaved, l === null ? (t.next = t, Ml(s)) : (t.next = l.next, l.next = t), s.interleaved = t, Fn(e, n);
  }
  function Yr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ua(e, n);
    }
  }
  function mc(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: s.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Jr(e, t, n, s) {
    var l = e.updateQueue;
    ti = !1;
    var u = l.firstBaseUpdate, f = l.lastBaseUpdate, k = l.shared.pending;
    if (k !== null) {
      l.shared.pending = null;
      var S = k, K = S.next;
      S.next = null, f === null ? u = K : f.next = K, f = S;
      var ne = e.alternate;
      ne !== null && (ne = ne.updateQueue, k = ne.lastBaseUpdate, k !== f && (k === null ? ne.firstBaseUpdate = K : k.next = K, ne.lastBaseUpdate = S));
    }
    if (u !== null) {
      var se = l.baseState;
      f = 0, ne = K = S = null, k = u;
      do {
        var te = k.lane, pe = k.eventTime;
        if ((s & te) === te) {
          ne !== null && (ne = ne.next = {
            eventTime: pe,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var je = e, Se = k;
            switch (te = t, pe = n, Se.tag) {
              case 1:
                if (je = Se.payload, typeof je == "function") {
                  se = je.call(pe, se, te);
                  break e;
                }
                se = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = Se.payload, te = typeof je == "function" ? je.call(pe, se, te) : je, te == null) break e;
                se = X({}, se, te);
                break e;
              case 2:
                ti = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, te = l.effects, te === null ? l.effects = [k] : te.push(k));
        } else pe = { eventTime: pe, lane: te, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, ne === null ? (K = ne = pe, S = se) : ne = ne.next = pe, f |= te;
        if (k = k.next, k === null) {
          if (k = l.shared.pending, k === null) break;
          te = k, k = te.next, te.next = null, l.lastBaseUpdate = te, l.shared.pending = null;
        }
      } while (!0);
      if (ne === null && (S = se), l.baseState = S, l.firstBaseUpdate = K, l.lastBaseUpdate = ne, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      wi |= f, e.lanes = f, e.memoizedState = se;
    }
  }
  function pc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], l = s.callback;
      if (l !== null) {
        if (s.callback = null, s = n, typeof l != "function") throw Error(o(191, l));
        l.call(s);
      }
    }
  }
  var Ks = {}, Sn = qn(Ks), Us = qn(Ks), Hs = qn(Ks);
  function xi(e) {
    if (e === Ks) throw Error(o(174));
    return e;
  }
  function Al(e, t) {
    switch (Ze(Hs, t), Ze(Us, e), Ze(Sn, Ks), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Xt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xt(t, e);
    }
    nt(Sn), Ze(Sn, t);
  }
  function Zi() {
    nt(Sn), nt(Us), nt(Hs);
  }
  function vc(e) {
    xi(Hs.current);
    var t = xi(Sn.current), n = Xt(t, e.type);
    t !== n && (Ze(Us, e), Ze(Sn, n));
  }
  function Pl(e) {
    Us.current === e && (nt(Sn), nt(Us));
  }
  var at = qn(0);
  function Xr(e) {
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
  var Ll = [];
  function $l() {
    for (var e = 0; e < Ll.length; e++) Ll[e]._workInProgressVersionPrimary = null;
    Ll.length = 0;
  }
  var qr = G.ReactCurrentDispatcher, Rl = G.ReactCurrentBatchConfig, Si = 0, lt = null, pt = null, yt = null, Zr = !1, Gs = !1, Ws = 0, bm = 0;
  function bt() {
    throw Error(o(321));
  }
  function Ol(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dn(e[n], t[n])) return !1;
    return !0;
  }
  function Fl(e, t, n, s, l, u) {
    if (Si = u, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qr.current = e === null || e.memoizedState === null ? Am : Pm, e = n(s, l), Gs) {
      u = 0;
      do {
        if (Gs = !1, Ws = 0, 25 <= u) throw Error(o(301));
        u += 1, yt = pt = null, t.updateQueue = null, qr.current = Lm, e = n(s, l);
      } while (Gs);
    }
    if (qr.current = na, t = pt !== null && pt.next !== null, Si = 0, yt = pt = lt = null, Zr = !1, t) throw Error(o(300));
    return e;
  }
  function Il() {
    var e = Ws !== 0;
    return Ws = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? lt.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function an() {
    if (pt === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pt.next;
    var t = yt === null ? lt.memoizedState : yt.next;
    if (t !== null) yt = t, pt = e;
    else {
      if (e === null) throw Error(o(310));
      pt = e, e = { memoizedState: pt.memoizedState, baseState: pt.baseState, baseQueue: pt.baseQueue, queue: pt.queue, next: null }, yt === null ? lt.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Qs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Dl(e) {
    var t = an(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var s = pt, l = s.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = u.next, u.next = f;
      }
      s.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, s = s.baseState;
      var k = f = null, S = null, K = u;
      do {
        var ne = K.lane;
        if ((Si & ne) === ne) S !== null && (S = S.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), s = K.hasEagerState ? K.eagerState : e(s, K.action);
        else {
          var se = {
            lane: ne,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          S === null ? (k = S = se, f = s) : S = S.next = se, lt.lanes |= ne, wi |= ne;
        }
        K = K.next;
      } while (K !== null && K !== u);
      S === null ? f = s : S.next = k, dn(s, t.memoizedState) || (Dt = !0), t.memoizedState = s, t.baseState = f, t.baseQueue = S, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, lt.lanes |= u, wi |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function zl(e) {
    var t = an(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== l);
      dn(u, t.memoizedState) || (Dt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, s];
  }
  function kc() {
  }
  function yc(e, t) {
    var n = lt, s = an(), l = t(), u = !dn(s.memoizedState, l);
    if (u && (s.memoizedState = l, Dt = !0), s = s.queue, Bl(xc.bind(null, n, s, e), [e]), s.getSnapshot !== t || u || yt !== null && yt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ys(9, jc.bind(null, n, s, l, t), void 0, null), gt === null) throw Error(o(349));
      (Si & 30) !== 0 || gc(n, t, l);
    }
    return l;
  }
  function gc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function jc(e, t, n, s) {
    t.value = n, t.getSnapshot = s, Sc(t) && wc(e);
  }
  function xc(e, t, n) {
    return n(function() {
      Sc(t) && wc(e);
    });
  }
  function Sc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dn(e, n);
    } catch {
      return !0;
    }
  }
  function wc(e) {
    var t = Fn(e, 1);
    t !== null && vn(t, e, 1, -1);
  }
  function Nc(e) {
    var t = wn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qs, lastRenderedState: e }, t.queue = e, e = e.dispatch = _m.bind(null, lt, e), [t.memoizedState, e];
  }
  function Ys(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = lt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, lt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Ec() {
    return an().memoizedState;
  }
  function ea(e, t, n, s) {
    var l = wn();
    lt.flags |= e, l.memoizedState = Ys(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function ta(e, t, n, s) {
    var l = an();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (pt !== null) {
      var f = pt.memoizedState;
      if (u = f.destroy, s !== null && Ol(s, f.deps)) {
        l.memoizedState = Ys(t, n, u, s);
        return;
      }
    }
    lt.flags |= e, l.memoizedState = Ys(1 | t, n, u, s);
  }
  function Cc(e, t) {
    return ea(8390656, 8, e, t);
  }
  function Bl(e, t) {
    return ta(2048, 8, e, t);
  }
  function bc(e, t) {
    return ta(4, 2, e, t);
  }
  function Tc(e, t) {
    return ta(4, 4, e, t);
  }
  function Mc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function _c(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ta(4, 4, Mc.bind(null, t, e), n);
  }
  function Vl() {
  }
  function Ac(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ol(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function Pc(e, t) {
    var n = an();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Ol(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Lc(e, t, n) {
    return (Si & 21) === 0 ? (e.baseState && (e.baseState = !1, Dt = !0), e.memoizedState = n) : (dn(n, t) || (n = uu(), lt.lanes |= n, wi |= n, e.baseState = !0), t);
  }
  function Tm(e, t) {
    var n = Qe;
    Qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Rl.transition;
    Rl.transition = {};
    try {
      e(!1), t();
    } finally {
      Qe = n, Rl.transition = s;
    }
  }
  function $c() {
    return an().memoizedState;
  }
  function Mm(e, t, n) {
    var s = ai(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, Rc(e)) Oc(t, n);
    else if (n = hc(e, t, n, s), n !== null) {
      var l = Pt();
      vn(n, e, s, l), Fc(n, t, s);
    }
  }
  function _m(e, t, n) {
    var s = ai(e), l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rc(e)) Oc(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var f = t.lastRenderedState, k = u(f, n);
        if (l.hasEagerState = !0, l.eagerState = k, dn(k, f)) {
          var S = t.interleaved;
          S === null ? (l.next = l, Ml(t)) : (l.next = S.next, S.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = hc(e, t, l, s), n !== null && (l = Pt(), vn(n, e, s, l), Fc(n, t, s));
    }
  }
  function Rc(e) {
    var t = e.alternate;
    return e === lt || t !== null && t === lt;
  }
  function Oc(e, t) {
    Gs = Zr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Fc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, Ua(e, n);
    }
  }
  var na = { readContext: rn, useCallback: bt, useContext: bt, useEffect: bt, useImperativeHandle: bt, useInsertionEffect: bt, useLayoutEffect: bt, useMemo: bt, useReducer: bt, useRef: bt, useState: bt, useDebugValue: bt, useDeferredValue: bt, useTransition: bt, useMutableSource: bt, useSyncExternalStore: bt, useId: bt, unstable_isNewReconciler: !1 }, Am = { readContext: rn, useCallback: function(e, t) {
    return wn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: rn, useEffect: Cc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ea(
      4194308,
      4,
      Mc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ea(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ea(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = wn();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Mm.bind(null, lt, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = wn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Nc, useDebugValue: Vl, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = Nc(!1), t = e[0];
    return e = Tm.bind(null, e[1]), wn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = lt, l = wn();
    if (st) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), gt === null) throw Error(o(349));
      (Si & 30) !== 0 || gc(s, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Cc(xc.bind(
      null,
      s,
      u,
      e
    ), [e]), s.flags |= 2048, Ys(9, jc.bind(null, s, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = wn(), t = gt.identifierPrefix;
    if (st) {
      var n = On, s = Rn;
      n = (s & ~(1 << 32 - cn(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = bm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Pm = {
    readContext: rn,
    useCallback: Ac,
    useContext: rn,
    useEffect: Bl,
    useImperativeHandle: _c,
    useInsertionEffect: bc,
    useLayoutEffect: Tc,
    useMemo: Pc,
    useReducer: Dl,
    useRef: Ec,
    useState: function() {
      return Dl(Qs);
    },
    useDebugValue: Vl,
    useDeferredValue: function(e) {
      var t = an();
      return Lc(t, pt.memoizedState, e);
    },
    useTransition: function() {
      var e = Dl(Qs)[0], t = an().memoizedState;
      return [e, t];
    },
    useMutableSource: kc,
    useSyncExternalStore: yc,
    useId: $c,
    unstable_isNewReconciler: !1
  }, Lm = { readContext: rn, useCallback: Ac, useContext: rn, useEffect: Bl, useImperativeHandle: _c, useInsertionEffect: bc, useLayoutEffect: Tc, useMemo: Pc, useReducer: zl, useRef: Ec, useState: function() {
    return zl(Qs);
  }, useDebugValue: Vl, useDeferredValue: function(e) {
    var t = an();
    return pt === null ? t.memoizedState = e : Lc(t, pt.memoizedState, e);
  }, useTransition: function() {
    var e = zl(Qs)[0], t = an().memoizedState;
    return [e, t];
  }, useMutableSource: kc, useSyncExternalStore: yc, useId: $c, unstable_isNewReconciler: !1 };
  function fn(e, t) {
    if (e && e.defaultProps) {
      t = X({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Kl(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ia = { isMounted: function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = Pt(), l = ai(e), u = In(s, l);
    u.payload = t, n != null && (u.callback = n), t = ni(e, u, l), t !== null && (vn(t, e, l, s), Yr(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = Pt(), l = ai(e), u = In(s, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = ni(e, u, l), t !== null && (vn(t, e, l, s), Yr(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Pt(), s = ai(e), l = In(n, s);
    l.tag = 2, t != null && (l.callback = t), t = ni(e, l, s), t !== null && (vn(t, e, s, n), Yr(t, e, s));
  } };
  function Ic(e, t, n, s, l, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Rs(n, s) || !Rs(l, u) : !0;
  }
  function Dc(e, t, n) {
    var s = !1, l = Zn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = rn(u) : (l = It(t) ? ki : Ct.current, s = t.contextTypes, u = (s = s != null) ? Gi(e, l) : Zn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ia, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function zc(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && ia.enqueueReplaceState(t, t.state, null);
  }
  function Ul(e, t, n, s) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _l(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = rn(u) : (u = It(t) ? ki : Ct.current, l.context = Gi(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Kl(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ia.enqueueReplaceState(l, l.state, null), Jr(e, n, l, s), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function es(e, t) {
    try {
      var n = "", s = t;
      do
        n += ce(s), s = s.return;
      while (s);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Hl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var $m = typeof WeakMap == "function" ? WeakMap : Map;
  function Bc(e, t, n) {
    n = In(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      ca || (ca = !0, lo = s), Gl(e, t);
    }, n;
  }
  function Vc(e, t, n) {
    n = In(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      n.payload = function() {
        return s(l);
      }, n.callback = function() {
        Gl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Gl(e, t), typeof s != "function" && (si === null ? si = /* @__PURE__ */ new Set([this]) : si.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Kc(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new $m();
      var l = /* @__PURE__ */ new Set();
      s.set(t, l);
    } else l = s.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(t, l));
    l.has(n) || (l.add(n), e = Qm.bind(null, e, t, n), t.then(e, e));
  }
  function Uc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Hc(e, t, n, s, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = In(-1, 1), t.tag = 2, ni(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Rm = G.ReactCurrentOwner, Dt = !1;
  function At(e, t, n, s) {
    t.child = e === null ? dc(t, null, n, s) : Ji(t, e.child, n, s);
  }
  function Gc(e, t, n, s, l) {
    n = n.render;
    var u = t.ref;
    return qi(t, l), s = Fl(e, t, n, s, u, l), n = Il(), e !== null && !Dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dn(e, t, l)) : (st && n && jl(t), t.flags |= 1, At(e, t, s, l), t.child);
  }
  function Wc(e, t, n, s, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !po(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Qc(e, t, u, s, l)) : (e = va(n.type, null, s, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Rs, n(f, s) && e.ref === t.ref) return Dn(e, t, l);
    }
    return t.flags |= 1, e = oi(u, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Qc(e, t, n, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Rs(u, s) && e.ref === t.ref) if (Dt = !1, t.pendingProps = s = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Dt = !0);
      else return t.lanes = e.lanes, Dn(e, t, l);
    }
    return Wl(e, t, n, s, l);
  }
  function Yc(e, t, n) {
    var s = t.pendingProps, l = s.children, u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(ns, Yt), Yt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(ns, Yt), Yt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = u !== null ? u.baseLanes : n, Ze(ns, Yt), Yt |= s;
    }
    else u !== null ? (s = u.baseLanes | n, t.memoizedState = null) : s = n, Ze(ns, Yt), Yt |= s;
    return At(e, t, l, n), t.child;
  }
  function Jc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Wl(e, t, n, s, l) {
    var u = It(n) ? ki : Ct.current;
    return u = Gi(t, u), qi(t, l), n = Fl(e, t, n, s, u, l), s = Il(), e !== null && !Dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dn(e, t, l)) : (st && s && jl(t), t.flags |= 1, At(e, t, n, l), t.child);
  }
  function Xc(e, t, n, s, l) {
    if (It(n)) {
      var u = !0;
      Br(t);
    } else u = !1;
    if (qi(t, l), t.stateNode === null) ra(e, t), Dc(t, n, s), Ul(t, n, s, l), s = !0;
    else if (e === null) {
      var f = t.stateNode, k = t.memoizedProps;
      f.props = k;
      var S = f.context, K = n.contextType;
      typeof K == "object" && K !== null ? K = rn(K) : (K = It(n) ? ki : Ct.current, K = Gi(t, K));
      var ne = n.getDerivedStateFromProps, se = typeof ne == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      se || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (k !== s || S !== K) && zc(t, f, s, K), ti = !1;
      var te = t.memoizedState;
      f.state = te, Jr(t, s, f, l), S = t.memoizedState, k !== s || te !== S || Ft.current || ti ? (typeof ne == "function" && (Kl(t, n, ne, s), S = t.memoizedState), (k = ti || Ic(t, n, k, s, te, S, K)) ? (se || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = S), f.props = s, f.state = S, f.context = K, s = k) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      f = t.stateNode, fc(e, t), k = t.memoizedProps, K = t.type === t.elementType ? k : fn(t.type, k), f.props = K, se = t.pendingProps, te = f.context, S = n.contextType, typeof S == "object" && S !== null ? S = rn(S) : (S = It(n) ? ki : Ct.current, S = Gi(t, S));
      var pe = n.getDerivedStateFromProps;
      (ne = typeof pe == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (k !== se || te !== S) && zc(t, f, s, S), ti = !1, te = t.memoizedState, f.state = te, Jr(t, s, f, l);
      var je = t.memoizedState;
      k !== se || te !== je || Ft.current || ti ? (typeof pe == "function" && (Kl(t, n, pe, s), je = t.memoizedState), (K = ti || Ic(t, n, K, s, te, je, S) || !1) ? (ne || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(s, je, S), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(s, je, S)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || k === e.memoizedProps && te === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && te === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = je), f.props = s, f.state = je, f.context = S, s = K) : (typeof f.componentDidUpdate != "function" || k === e.memoizedProps && te === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && te === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return Ql(e, t, n, s, u, l);
  }
  function Ql(e, t, n, s, l, u) {
    Jc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!s && !f) return l && nc(t, n, !1), Dn(e, t, u);
    s = t.stateNode, Rm.current = t;
    var k = f && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && f ? (t.child = Ji(t, e.child, null, u), t.child = Ji(t, null, k, u)) : At(e, t, k, u), t.memoizedState = s.state, l && nc(t, n, !0), t.child;
  }
  function qc(e) {
    var t = e.stateNode;
    t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1), Al(e, t.containerInfo);
  }
  function Zc(e, t, n, s, l) {
    return Yi(), Nl(l), t.flags |= 256, At(e, t, n, s), t.child;
  }
  var Yl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ed(e, t, n) {
    var s = t.pendingProps, l = at.current, u = !1, f = (t.flags & 128) !== 0, k;
    if ((k = f) || (k = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), k ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ze(at, l & 1), e === null)
      return wl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = s.children, e = s.fallback, u ? (s = t.mode, u = t.child, f = { mode: "hidden", children: f }, (s & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = f) : u = ka(f, s, 0, null), e = bi(e, s, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Jl(n), t.memoizedState = Yl, e) : Xl(t, f));
    if (l = e.memoizedState, l !== null && (k = l.dehydrated, k !== null)) return Om(e, t, f, s, k, l, n);
    if (u) {
      u = s.fallback, f = t.mode, l = e.child, k = l.sibling;
      var S = { mode: "hidden", children: s.children };
      return (f & 1) === 0 && t.child !== l ? (s = t.child, s.childLanes = 0, s.pendingProps = S, t.deletions = null) : (s = oi(l, S), s.subtreeFlags = l.subtreeFlags & 14680064), k !== null ? u = oi(k, u) : (u = bi(u, f, n, null), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, f = e.child.memoizedState, f = f === null ? Jl(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, u.memoizedState = f, u.childLanes = e.childLanes & ~n, t.memoizedState = Yl, s;
    }
    return u = e.child, e = u.sibling, s = oi(u, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Xl(e, t) {
    return t = ka({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function sa(e, t, n, s) {
    return s !== null && Nl(s), Ji(t, e.child, null, n), e = Xl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Om(e, t, n, s, l, u, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = Hl(Error(o(422))), sa(e, t, f, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = s.fallback, l = t.mode, s = ka({ mode: "visible", children: s.children }, l, 0, null), u = bi(u, l, f, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, (t.mode & 1) !== 0 && Ji(t, e.child, null, f), t.child.memoizedState = Jl(f), t.memoizedState = Yl, u);
    if ((t.mode & 1) === 0) return sa(e, t, f, null);
    if (l.data === "$!") {
      if (s = l.nextSibling && l.nextSibling.dataset, s) var k = s.dgst;
      return s = k, u = Error(o(419)), s = Hl(u, s, void 0), sa(e, t, f, s);
    }
    if (k = (f & e.childLanes) !== 0, Dt || k) {
      if (s = gt, s !== null) {
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
        l = (l & (s.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Fn(e, l), vn(s, e, l, -1));
      }
      return mo(), s = Hl(Error(o(421))), sa(e, t, f, s);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ym.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Qt = Xn(l.nextSibling), Wt = t, st = !0, hn = null, e !== null && (nn[sn++] = Rn, nn[sn++] = On, nn[sn++] = yi, Rn = e.id, On = e.overflow, yi = t), t = Xl(t, s.children), t.flags |= 4096, t);
  }
  function td(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Tl(e.return, t, n);
  }
  function ql(e, t, n, s, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = s, u.tail = n, u.tailMode = l);
  }
  function nd(e, t, n) {
    var s = t.pendingProps, l = s.revealOrder, u = s.tail;
    if (At(e, t, s.children, n), s = at.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && td(e, n, t);
        else if (e.tag === 19) td(e, n, t);
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
      s &= 1;
    }
    if (Ze(at, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Xr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ql(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Xr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ql(t, !0, n, null, u);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ra(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Dn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = oi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = oi(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Fm(e, t, n) {
    switch (t.tag) {
      case 3:
        qc(t), Yi();
        break;
      case 5:
        vc(t);
        break;
      case 1:
        It(t.type) && Br(t);
        break;
      case 4:
        Al(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, l = t.memoizedProps.value;
        Ze(Wr, s._currentValue), s._currentValue = l;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ze(at, at.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ed(e, t, n) : (Ze(at, at.current & 1), e = Dn(e, t, n), e !== null ? e.sibling : null);
        Ze(at, at.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return nd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ze(at, at.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Yc(e, t, n);
    }
    return Dn(e, t, n);
  }
  var id, Zl, sd, rd;
  id = function(e, t) {
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
  }, Zl = function() {
  }, sd = function(e, t, n, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = t.stateNode, xi(Sn.current);
      var u = null;
      switch (n) {
        case "input":
          l = he(e, l), s = he(e, s), u = [];
          break;
        case "select":
          l = X({}, l, { value: void 0 }), s = X({}, s, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = ut(e, l), s = ut(e, s), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Ir);
      }
      Le(n, s);
      var f;
      n = null;
      for (K in l) if (!s.hasOwnProperty(K) && l.hasOwnProperty(K) && l[K] != null) if (K === "style") {
        var k = l[K];
        for (f in k) k.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (c.hasOwnProperty(K) ? u || (u = []) : (u = u || []).push(K, null));
      for (K in s) {
        var S = s[K];
        if (k = l?.[K], s.hasOwnProperty(K) && S !== k && (S != null || k != null)) if (K === "style") if (k) {
          for (f in k) !k.hasOwnProperty(f) || S && S.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in S) S.hasOwnProperty(f) && k[f] !== S[f] && (n || (n = {}), n[f] = S[f]);
        } else n || (u || (u = []), u.push(
          K,
          n
        )), n = S;
        else K === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, k = k ? k.__html : void 0, S != null && k !== S && (u = u || []).push(K, S)) : K === "children" ? typeof S != "string" && typeof S != "number" || (u = u || []).push(K, "" + S) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (c.hasOwnProperty(K) ? (S != null && K === "onScroll" && tt("scroll", e), u || k === S || (u = [])) : (u = u || []).push(K, S));
      }
      n && (u = u || []).push("style", n);
      var K = u;
      (t.updateQueue = K) && (t.flags |= 4);
    }
  }, rd = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function Js(e, t) {
    if (!st) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; ) n.alternate !== null && (s = n), n = n.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function Tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags & 14680064, s |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function Im(e, t, n) {
    var s = t.pendingProps;
    switch (xl(t), t.tag) {
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
        return It(t.type) && zr(), Tt(t), null;
      case 3:
        return s = t.stateNode, Zi(), nt(Ft), nt(Ct), $l(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hn !== null && (co(hn), hn = null))), Zl(e, t), Tt(t), null;
      case 5:
        Pl(t);
        var l = xi(Hs.current);
        if (n = t.type, e !== null && t.stateNode != null) sd(e, t, n, s, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return Tt(t), null;
          }
          if (e = xi(Sn.current), Hr(t)) {
            s = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (s[xn] = t, s[zs] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                tt("cancel", s), tt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                tt("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fs.length; l++) tt(Fs[l], s);
                break;
              case "source":
                tt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                tt(
                  "error",
                  s
                ), tt("load", s);
                break;
              case "details":
                tt("toggle", s);
                break;
              case "input":
                ke(s, u), tt("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!u.multiple }, tt("invalid", s);
                break;
              case "textarea":
                Je(s, u), tt("invalid", s);
            }
            Le(n, u), l = null;
            for (var f in u) if (u.hasOwnProperty(f)) {
              var k = u[f];
              f === "children" ? typeof k == "string" ? s.textContent !== k && (u.suppressHydrationWarning !== !0 && Fr(s.textContent, k, e), l = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (u.suppressHydrationWarning !== !0 && Fr(
                s.textContent,
                k,
                e
              ), l = ["children", "" + k]) : c.hasOwnProperty(f) && k != null && f === "onScroll" && tt("scroll", s);
            }
            switch (n) {
              case "input":
                z(s), He(s, u, !0);
                break;
              case "textarea":
                z(s), it(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = Ir);
            }
            s = l, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = f.createElement(n, { is: s.is }) : (e = f.createElement(n), n === "select" && (f = e, s.multiple ? f.multiple = !0 : s.size && (f.size = s.size))) : e = f.createElementNS(e, n), e[xn] = t, e[zs] = s, id(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Re(n, s), n) {
                case "dialog":
                  tt("cancel", e), tt("close", e), l = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tt("load", e), l = s;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Fs.length; l++) tt(Fs[l], e);
                  l = s;
                  break;
                case "source":
                  tt("error", e), l = s;
                  break;
                case "img":
                case "image":
                case "link":
                  tt(
                    "error",
                    e
                  ), tt("load", e), l = s;
                  break;
                case "details":
                  tt("toggle", e), l = s;
                  break;
                case "input":
                  ke(e, s), l = he(e, s), tt("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, l = X({}, s, { value: void 0 }), tt("invalid", e);
                  break;
                case "textarea":
                  Je(e, s), l = ut(e, s), tt("invalid", e);
                  break;
                default:
                  l = s;
              }
              Le(n, l), k = l;
              for (u in k) if (k.hasOwnProperty(u)) {
                var S = k[u];
                u === "style" ? Ut(e, S) : u === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && un(e, S)) : u === "children" ? typeof S == "string" ? (n !== "textarea" || S !== "") && qt(e, S) : typeof S == "number" && qt(e, "" + S) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? S != null && u === "onScroll" && tt("scroll", e) : S != null && W(e, u, S, f));
              }
              switch (n) {
                case "input":
                  z(e), He(e, s, !1);
                  break;
                case "textarea":
                  z(e), it(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Z(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, u = s.value, u != null ? Xe(e, !!s.multiple, u, !1) : s.defaultValue != null && Xe(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ir);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Tt(t), null;
      case 6:
        if (e && t.stateNode != null) rd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (n = xi(Hs.current), xi(Sn.current), Hr(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[xn] = t, (u = s.nodeValue !== n) && (e = Wt, e !== null)) switch (e.tag) {
              case 3:
                Fr(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fr(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[xn] = t, t.stateNode = s;
        }
        return Tt(t), null;
      case 13:
        if (nt(at), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (st && Qt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) oc(), Yi(), t.flags |= 98560, u = !1;
          else if (u = Hr(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[xn] = t;
            } else Yi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tt(t), u = !1;
          } else hn !== null && (co(hn), hn = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (at.current & 1) !== 0 ? vt === 0 && (vt = 3) : mo())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
      case 4:
        return Zi(), Zl(e, t), e === null && Is(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return bl(t.type._context), Tt(t), null;
      case 17:
        return It(t.type) && zr(), Tt(t), null;
      case 19:
        if (nt(at), u = t.memoizedState, u === null) return Tt(t), null;
        if (s = (t.flags & 128) !== 0, f = u.rendering, f === null) if (s) Js(u, !1);
        else {
          if (vt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Xr(e), f !== null) {
              for (t.flags |= 128, Js(u, !1), s = f.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) u = n, e = s, u.flags &= 14680066, f = u.alternate, f === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = f.childLanes, u.lanes = f.lanes, u.child = f.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = f.memoizedProps, u.memoizedState = f.memoizedState, u.updateQueue = f.updateQueue, u.type = f.type, e = f.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ze(at, at.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ue() > is && (t.flags |= 128, s = !0, Js(u, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Xr(f), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Js(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !st) return Tt(t), null;
          } else 2 * ue() - u.renderingStartTime > is && n !== 1073741824 && (t.flags |= 128, s = !0, Js(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (n = u.last, n !== null ? n.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ue(), t.sibling = null, n = at.current, Ze(at, s ? n & 1 | 2 : n & 1), t) : (Tt(t), null);
      case 22:
      case 23:
        return fo(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Yt & 1073741824) !== 0 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Dm(e, t) {
    switch (xl(t), t.tag) {
      case 1:
        return It(t.type) && zr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Zi(), nt(Ft), nt(Ct), $l(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Pl(t), null;
      case 13:
        if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Yi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return nt(at), null;
      case 4:
        return Zi(), null;
      case 10:
        return bl(t.type._context), null;
      case 22:
      case 23:
        return fo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var aa = !1, Mt = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function ts(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      ot(e, t, s);
    }
    else n.current = null;
  }
  function eo(e, t, n) {
    try {
      n();
    } catch (s) {
      ot(e, t, s);
    }
  }
  var ad = !1;
  function Bm(e, t) {
    if (hl = Cr, e = Iu(), sl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var l = s.anchorOffset, u = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, k = -1, S = -1, K = 0, ne = 0, se = e, te = null;
          t: for (; ; ) {
            for (var pe; se !== n || l !== 0 && se.nodeType !== 3 || (k = f + l), se !== u || s !== 0 && se.nodeType !== 3 || (S = f + s), se.nodeType === 3 && (f += se.nodeValue.length), (pe = se.firstChild) !== null; )
              te = se, se = pe;
            for (; ; ) {
              if (se === e) break t;
              if (te === n && ++K === l && (k = f), te === u && ++ne === s && (S = f), (pe = se.nextSibling) !== null) break;
              se = te, te = se.parentNode;
            }
            se = pe;
          }
          n = k === -1 || S === -1 ? null : { start: k, end: S };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (fl = { focusedElem: e, selectionRange: n }, Cr = !1, ye = t; ye !== null; ) if (t = ye, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ye = e;
    else for (; ye !== null; ) {
      t = ye;
      try {
        var je = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (je !== null) {
              var Se = je.memoizedProps, ht = je.memoizedState, R = t.stateNode, b = R.getSnapshotBeforeUpdate(t.elementType === t.type ? Se : fn(t.type, Se), ht);
              R.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var F = t.stateNode.containerInfo;
            F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (le) {
        ot(t, t.return, le);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ye = e;
        break;
      }
      ye = t.return;
    }
    return je = ad, ad = !1, je;
  }
  function Xs(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && eo(t, n, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function la(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var s = n.create;
          n.destroy = s();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function to(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ld(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ld(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xn], delete t[zs], delete t[kl], delete t[wm], delete t[Nm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function od(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ud(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || od(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function no(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ir));
    else if (s !== 4 && (e = e.child, e !== null)) for (no(e, t, n), e = e.sibling; e !== null; ) no(e, t, n), e = e.sibling;
  }
  function io(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
  }
  var St = null, mn = !1;
  function ii(e, t, n) {
    for (n = n.child; n !== null; ) cd(e, t, n), n = n.sibling;
  }
  function cd(e, t, n) {
    if (jn && typeof jn.onCommitFiberUnmount == "function") try {
      jn.onCommitFiberUnmount(jr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Mt || ts(n, t);
      case 6:
        var s = St, l = mn;
        St = null, ii(e, t, n), St = s, mn = l, St !== null && (mn ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
        break;
      case 18:
        St !== null && (mn ? (e = St, n = n.stateNode, e.nodeType === 8 ? vl(e.parentNode, n) : e.nodeType === 1 && vl(e, n), Ms(e)) : vl(St, n.stateNode));
        break;
      case 4:
        s = St, l = mn, St = n.stateNode.containerInfo, mn = !0, ii(e, t, n), St = s, mn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var u = l, f = u.destroy;
            u = u.tag, f !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && eo(n, t, f), l = l.next;
          } while (l !== s);
        }
        ii(e, t, n);
        break;
      case 1:
        if (!Mt && (ts(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          ot(n, t, k);
        }
        ii(e, t, n);
        break;
      case 21:
        ii(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Mt = (s = Mt) || n.memoizedState !== null, ii(e, t, n), Mt = s) : ii(e, t, n);
        break;
      default:
        ii(e, t, n);
    }
  }
  function dd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new zm()), t.forEach(function(s) {
        var l = Jm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
    }
  }
  function pn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var u = e, f = t, k = f;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              St = k.stateNode, mn = !1;
              break e;
            case 3:
              St = k.stateNode.containerInfo, mn = !0;
              break e;
            case 4:
              St = k.stateNode.containerInfo, mn = !0;
              break e;
          }
          k = k.return;
        }
        if (St === null) throw Error(o(160));
        cd(u, f, l), St = null, mn = !1;
        var S = l.alternate;
        S !== null && (S.return = null), l.return = null;
      } catch (K) {
        ot(l, t, K);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) hd(t, e), t = t.sibling;
  }
  function hd(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(t, e), Nn(e), s & 4) {
          try {
            Xs(3, e, e.return), la(3, e);
          } catch (Se) {
            ot(e, e.return, Se);
          }
          try {
            Xs(5, e, e.return);
          } catch (Se) {
            ot(e, e.return, Se);
          }
        }
        break;
      case 1:
        pn(t, e), Nn(e), s & 512 && n !== null && ts(n, n.return);
        break;
      case 5:
        if (pn(t, e), Nn(e), s & 512 && n !== null && ts(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            qt(l, "");
          } catch (Se) {
            ot(e, e.return, Se);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, f = n !== null ? n.memoizedProps : u, k = e.type, S = e.updateQueue;
          if (e.updateQueue = null, S !== null) try {
            k === "input" && u.type === "radio" && u.name != null && we(l, u), Re(k, f);
            var K = Re(k, u);
            for (f = 0; f < S.length; f += 2) {
              var ne = S[f], se = S[f + 1];
              ne === "style" ? Ut(l, se) : ne === "dangerouslySetInnerHTML" ? un(l, se) : ne === "children" ? qt(l, se) : W(l, ne, se, K);
            }
            switch (k) {
              case "input":
                $e(l, u);
                break;
              case "textarea":
                Ve(l, u);
                break;
              case "select":
                var te = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var pe = u.value;
                pe != null ? Xe(l, !!u.multiple, pe, !1) : te !== !!u.multiple && (u.defaultValue != null ? Xe(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Xe(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[zs] = u;
          } catch (Se) {
            ot(e, e.return, Se);
          }
        }
        break;
      case 6:
        if (pn(t, e), Nn(e), s & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (Se) {
            ot(e, e.return, Se);
          }
        }
        break;
      case 3:
        if (pn(t, e), Nn(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ms(t.containerInfo);
        } catch (Se) {
          ot(e, e.return, Se);
        }
        break;
      case 4:
        pn(t, e), Nn(e);
        break;
      case 13:
        pn(t, e), Nn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (ao = ue())), s & 4 && dd(e);
        break;
      case 22:
        if (ne = n !== null && n.memoizedState !== null, e.mode & 1 ? (Mt = (K = Mt) || ne, pn(t, e), Mt = K) : pn(t, e), Nn(e), s & 8192) {
          if (K = e.memoizedState !== null, (e.stateNode.isHidden = K) && !ne && (e.mode & 1) !== 0) for (ye = e, ne = e.child; ne !== null; ) {
            for (se = ye = ne; ye !== null; ) {
              switch (te = ye, pe = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xs(4, te, te.return);
                  break;
                case 1:
                  ts(te, te.return);
                  var je = te.stateNode;
                  if (typeof je.componentWillUnmount == "function") {
                    s = te, n = te.return;
                    try {
                      t = s, je.props = t.memoizedProps, je.state = t.memoizedState, je.componentWillUnmount();
                    } catch (Se) {
                      ot(s, n, Se);
                    }
                  }
                  break;
                case 5:
                  ts(te, te.return);
                  break;
                case 22:
                  if (te.memoizedState !== null) {
                    pd(se);
                    continue;
                  }
              }
              pe !== null ? (pe.return = te, ye = pe) : pd(se);
            }
            ne = ne.sibling;
          }
          e: for (ne = null, se = e; ; ) {
            if (se.tag === 5) {
              if (ne === null) {
                ne = se;
                try {
                  l = se.stateNode, K ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (k = se.stateNode, S = se.memoizedProps.style, f = S != null && S.hasOwnProperty("display") ? S.display : null, k.style.display = be("display", f));
                } catch (Se) {
                  ot(e, e.return, Se);
                }
              }
            } else if (se.tag === 6) {
              if (ne === null) try {
                se.stateNode.nodeValue = K ? "" : se.memoizedProps;
              } catch (Se) {
                ot(e, e.return, Se);
              }
            } else if ((se.tag !== 22 && se.tag !== 23 || se.memoizedState === null || se === e) && se.child !== null) {
              se.child.return = se, se = se.child;
              continue;
            }
            if (se === e) break e;
            for (; se.sibling === null; ) {
              if (se.return === null || se.return === e) break e;
              ne === se && (ne = null), se = se.return;
            }
            ne === se && (ne = null), se.sibling.return = se.return, se = se.sibling;
          }
        }
        break;
      case 19:
        pn(t, e), Nn(e), s & 4 && dd(e);
        break;
      case 21:
        break;
      default:
        pn(
          t,
          e
        ), Nn(e);
    }
  }
  function Nn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (od(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (qt(l, ""), s.flags &= -33);
            var u = ud(e);
            io(e, u, l);
            break;
          case 3:
          case 4:
            var f = s.stateNode.containerInfo, k = ud(e);
            no(e, k, f);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        ot(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vm(e, t, n) {
    ye = e, fd(e);
  }
  function fd(e, t, n) {
    for (var s = (e.mode & 1) !== 0; ye !== null; ) {
      var l = ye, u = l.child;
      if (l.tag === 22 && s) {
        var f = l.memoizedState !== null || aa;
        if (!f) {
          var k = l.alternate, S = k !== null && k.memoizedState !== null || Mt;
          k = aa;
          var K = Mt;
          if (aa = f, (Mt = S) && !K) for (ye = l; ye !== null; ) f = ye, S = f.child, f.tag === 22 && f.memoizedState !== null ? vd(l) : S !== null ? (S.return = f, ye = S) : vd(l);
          for (; u !== null; ) ye = u, fd(u), u = u.sibling;
          ye = l, aa = k, Mt = K;
        }
        md(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, ye = u) : md(e);
    }
  }
  function md(e) {
    for (; ye !== null; ) {
      var t = ye;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Mt || la(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Mt) if (n === null) s.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : fn(t.type, n.memoizedProps);
                s.componentDidUpdate(l, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && pc(t, u, s);
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
                pc(t, f, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var S = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    S.autoFocus && n.focus();
                    break;
                  case "img":
                    S.src && (n.src = S.src);
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
                var K = t.alternate;
                if (K !== null) {
                  var ne = K.memoizedState;
                  if (ne !== null) {
                    var se = ne.dehydrated;
                    se !== null && Ms(se);
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
          Mt || t.flags & 512 && to(t);
        } catch (te) {
          ot(t, t.return, te);
        }
      }
      if (t === e) {
        ye = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ye = n;
        break;
      }
      ye = t.return;
    }
  }
  function pd(e) {
    for (; ye !== null; ) {
      var t = ye;
      if (t === e) {
        ye = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ye = n;
        break;
      }
      ye = t.return;
    }
  }
  function vd(e) {
    for (; ye !== null; ) {
      var t = ye;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              la(4, t);
            } catch (S) {
              ot(t, n, S);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (S) {
                ot(t, l, S);
              }
            }
            var u = t.return;
            try {
              to(t);
            } catch (S) {
              ot(t, u, S);
            }
            break;
          case 5:
            var f = t.return;
            try {
              to(t);
            } catch (S) {
              ot(t, f, S);
            }
        }
      } catch (S) {
        ot(t, t.return, S);
      }
      if (t === e) {
        ye = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, ye = k;
        break;
      }
      ye = t.return;
    }
  }
  var Km = Math.ceil, oa = G.ReactCurrentDispatcher, so = G.ReactCurrentOwner, ln = G.ReactCurrentBatchConfig, Be = 0, gt = null, mt = null, wt = 0, Yt = 0, ns = qn(0), vt = 0, qs = null, wi = 0, ua = 0, ro = 0, Zs = null, zt = null, ao = 0, is = 1 / 0, zn = null, ca = !1, lo = null, si = null, da = !1, ri = null, ha = 0, er = 0, oo = null, fa = -1, ma = 0;
  function Pt() {
    return (Be & 6) !== 0 ? ue() : fa !== -1 ? fa : fa = ue();
  }
  function ai(e) {
    return (e.mode & 1) === 0 ? 1 : (Be & 2) !== 0 && wt !== 0 ? wt & -wt : Cm.transition !== null ? (ma === 0 && (ma = uu()), ma) : (e = Qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yu(e.type)), e);
  }
  function vn(e, t, n, s) {
    if (50 < er) throw er = 0, oo = null, Error(o(185));
    Ns(e, n, s), ((Be & 2) === 0 || e !== gt) && (e === gt && ((Be & 2) === 0 && (ua |= n), vt === 4 && li(e, wt)), Bt(e, s), n === 1 && Be === 0 && (t.mode & 1) === 0 && (is = ue() + 500, Vr && ei()));
  }
  function Bt(e, t) {
    var n = e.callbackNode;
    Cf(e, t);
    var s = wr(e, e === gt ? wt : 0);
    if (s === 0) n !== null && An(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && An(n), t === 1) e.tag === 0 ? Em(yd.bind(null, e)) : ic(yd.bind(null, e)), xm(function() {
        (Be & 6) === 0 && ei();
      }), n = null;
      else {
        switch (cu(s)) {
          case 1:
            n = Ot;
            break;
          case 4:
            n = dt;
            break;
          case 16:
            n = Pn;
            break;
          case 536870912:
            n = Un;
            break;
          default:
            n = Pn;
        }
        n = Cd(n, kd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function kd(e, t) {
    if (fa = -1, ma = 0, (Be & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (ss() && e.callbackNode !== n) return null;
    var s = wr(e, e === gt ? wt : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = pa(e, s);
    else {
      t = s;
      var l = Be;
      Be |= 2;
      var u = jd();
      (gt !== e || wt !== t) && (zn = null, is = ue() + 500, Ei(e, t));
      do
        try {
          Gm();
          break;
        } catch (k) {
          gd(e, k);
        }
      while (!0);
      Cl(), oa.current = u, Be = l, mt !== null ? t = 0 : (gt = null, wt = 0, t = vt);
    }
    if (t !== 0) {
      if (t === 2 && (l = Va(e), l !== 0 && (s = l, t = uo(e, l))), t === 1) throw n = qs, Ei(e, 0), li(e, s), Bt(e, ue()), n;
      if (t === 6) li(e, s);
      else {
        if (l = e.current.alternate, (s & 30) === 0 && !Um(l) && (t = pa(e, s), t === 2 && (u = Va(e), u !== 0 && (s = u, t = uo(e, u))), t === 1)) throw n = qs, Ei(e, 0), li(e, s), Bt(e, ue()), n;
        switch (e.finishedWork = l, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Ci(e, zt, zn);
            break;
          case 3:
            if (li(e, s), (s & 130023424) === s && (t = ao + 500 - ue(), 10 < t)) {
              if (wr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & s) !== s) {
                Pt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = pl(Ci.bind(null, e, zt, zn), t);
              break;
            }
            Ci(e, zt, zn);
            break;
          case 4:
            if (li(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var f = 31 - cn(s);
              u = 1 << f, f = t[f], f > l && (l = f), s &= ~u;
            }
            if (s = l, s = ue() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Km(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = pl(Ci.bind(null, e, zt, zn), s);
              break;
            }
            Ci(e, zt, zn);
            break;
          case 5:
            Ci(e, zt, zn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Bt(e, ue()), e.callbackNode === n ? kd.bind(null, e) : null;
  }
  function uo(e, t) {
    var n = Zs;
    return e.current.memoizedState.isDehydrated && (Ei(e, t).flags |= 256), e = pa(e, t), e !== 2 && (t = zt, zt = n, t !== null && co(t)), e;
  }
  function co(e) {
    zt === null ? zt = e : zt.push.apply(zt, e);
  }
  function Um(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var l = n[s], u = l.getSnapshot;
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
  function li(e, t) {
    for (t &= ~ro, t &= ~ua, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - cn(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function yd(e) {
    if ((Be & 6) !== 0) throw Error(o(327));
    ss();
    var t = wr(e, 0);
    if ((t & 1) === 0) return Bt(e, ue()), null;
    var n = pa(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = Va(e);
      s !== 0 && (t = s, n = uo(e, s));
    }
    if (n === 1) throw n = qs, Ei(e, 0), li(e, t), Bt(e, ue()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ci(e, zt, zn), Bt(e, ue()), null;
  }
  function ho(e, t) {
    var n = Be;
    Be |= 1;
    try {
      return e(t);
    } finally {
      Be = n, Be === 0 && (is = ue() + 500, Vr && ei());
    }
  }
  function Ni(e) {
    ri !== null && ri.tag === 0 && (Be & 6) === 0 && ss();
    var t = Be;
    Be |= 1;
    var n = ln.transition, s = Qe;
    try {
      if (ln.transition = null, Qe = 1, e) return e();
    } finally {
      Qe = s, ln.transition = n, Be = t, (Be & 6) === 0 && ei();
    }
  }
  function fo() {
    Yt = ns.current, nt(ns);
  }
  function Ei(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jm(n)), mt !== null) for (n = mt.return; n !== null; ) {
      var s = n;
      switch (xl(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && zr();
          break;
        case 3:
          Zi(), nt(Ft), nt(Ct), $l();
          break;
        case 5:
          Pl(s);
          break;
        case 4:
          Zi();
          break;
        case 13:
          nt(at);
          break;
        case 19:
          nt(at);
          break;
        case 10:
          bl(s.type._context);
          break;
        case 22:
        case 23:
          fo();
      }
      n = n.return;
    }
    if (gt = e, mt = e = oi(e.current, null), wt = Yt = t, vt = 0, qs = null, ro = ua = wi = 0, zt = Zs = null, ji !== null) {
      for (t = 0; t < ji.length; t++) if (n = ji[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var l = s.next, u = n.pending;
        if (u !== null) {
          var f = u.next;
          u.next = l, s.next = f;
        }
        n.pending = s;
      }
      ji = null;
    }
    return e;
  }
  function gd(e, t) {
    do {
      var n = mt;
      try {
        if (Cl(), qr.current = na, Zr) {
          for (var s = lt.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), s = s.next;
          }
          Zr = !1;
        }
        if (Si = 0, yt = pt = lt = null, Gs = !1, Ws = 0, so.current = null, n === null || n.return === null) {
          vt = 1, qs = t, mt = null;
          break;
        }
        e: {
          var u = e, f = n.return, k = n, S = t;
          if (t = wt, k.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var K = S, ne = k, se = ne.tag;
            if ((ne.mode & 1) === 0 && (se === 0 || se === 11 || se === 15)) {
              var te = ne.alternate;
              te ? (ne.updateQueue = te.updateQueue, ne.memoizedState = te.memoizedState, ne.lanes = te.lanes) : (ne.updateQueue = null, ne.memoizedState = null);
            }
            var pe = Uc(f);
            if (pe !== null) {
              pe.flags &= -257, Hc(pe, f, k, u, t), pe.mode & 1 && Kc(u, K, t), t = pe, S = K;
              var je = t.updateQueue;
              if (je === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(S), t.updateQueue = Se;
              } else je.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Kc(u, K, t), mo();
                break e;
              }
              S = Error(o(426));
            }
          } else if (st && k.mode & 1) {
            var ht = Uc(f);
            if (ht !== null) {
              (ht.flags & 65536) === 0 && (ht.flags |= 256), Hc(ht, f, k, u, t), Nl(es(S, k));
              break e;
            }
          }
          u = S = es(S, k), vt !== 4 && (vt = 2), Zs === null ? Zs = [u] : Zs.push(u), u = f;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var R = Bc(u, S, t);
                mc(u, R);
                break e;
              case 1:
                k = S;
                var b = u.type, F = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof b.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (si === null || !si.has(F)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var le = Vc(u, k, t);
                  mc(u, le);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Sd(n);
      } catch (Ne) {
        t = Ne, mt === n && n !== null && (mt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jd() {
    var e = oa.current;
    return oa.current = na, e === null ? na : e;
  }
  function mo() {
    (vt === 0 || vt === 3 || vt === 2) && (vt = 4), gt === null || (wi & 268435455) === 0 && (ua & 268435455) === 0 || li(gt, wt);
  }
  function pa(e, t) {
    var n = Be;
    Be |= 2;
    var s = jd();
    (gt !== e || wt !== t) && (zn = null, Ei(e, t));
    do
      try {
        Hm();
        break;
      } catch (l) {
        gd(e, l);
      }
    while (!0);
    if (Cl(), Be = n, oa.current = s, mt !== null) throw Error(o(261));
    return gt = null, wt = 0, vt;
  }
  function Hm() {
    for (; mt !== null; ) xd(mt);
  }
  function Gm() {
    for (; mt !== null && !Kn(); ) xd(mt);
  }
  function xd(e) {
    var t = Ed(e.alternate, e, Yt);
    e.memoizedProps = e.pendingProps, t === null ? Sd(e) : mt = t, so.current = null;
  }
  function Sd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Im(n, t, Yt), n !== null) {
          mt = n;
          return;
        }
      } else {
        if (n = Dm(n, t), n !== null) {
          n.flags &= 32767, mt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          vt = 6, mt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        mt = t;
        return;
      }
      mt = t = e;
    } while (t !== null);
    vt === 0 && (vt = 5);
  }
  function Ci(e, t, n) {
    var s = Qe, l = ln.transition;
    try {
      ln.transition = null, Qe = 1, Wm(e, t, n, s);
    } finally {
      ln.transition = l, Qe = s;
    }
    return null;
  }
  function Wm(e, t, n, s) {
    do
      ss();
    while (ri !== null);
    if ((Be & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (bf(e, u), e === gt && (mt = gt = null, wt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || da || (da = !0, Cd(Pn, function() {
      return ss(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = ln.transition, ln.transition = null;
      var f = Qe;
      Qe = 1;
      var k = Be;
      Be |= 4, so.current = null, Bm(e, n), hd(n, e), fm(fl), Cr = !!hl, fl = hl = null, e.current = n, Vm(n), H(), Be = k, Qe = f, ln.transition = u;
    } else e.current = n;
    if (da && (da = !1, ri = e, ha = l), u = e.pendingLanes, u === 0 && (si = null), xf(n.stateNode), Bt(e, ue()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], s(l.value, { componentStack: l.stack, digest: l.digest });
    if (ca) throw ca = !1, e = lo, lo = null, e;
    return (ha & 1) !== 0 && e.tag !== 0 && ss(), u = e.pendingLanes, (u & 1) !== 0 ? e === oo ? er++ : (er = 0, oo = e) : er = 0, ei(), null;
  }
  function ss() {
    if (ri !== null) {
      var e = cu(ha), t = ln.transition, n = Qe;
      try {
        if (ln.transition = null, Qe = 16 > e ? 16 : e, ri === null) var s = !1;
        else {
          if (e = ri, ri = null, ha = 0, (Be & 6) !== 0) throw Error(o(331));
          var l = Be;
          for (Be |= 4, ye = e.current; ye !== null; ) {
            var u = ye, f = u.child;
            if ((ye.flags & 16) !== 0) {
              var k = u.deletions;
              if (k !== null) {
                for (var S = 0; S < k.length; S++) {
                  var K = k[S];
                  for (ye = K; ye !== null; ) {
                    var ne = ye;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xs(8, ne, u);
                    }
                    var se = ne.child;
                    if (se !== null) se.return = ne, ye = se;
                    else for (; ye !== null; ) {
                      ne = ye;
                      var te = ne.sibling, pe = ne.return;
                      if (ld(ne), ne === K) {
                        ye = null;
                        break;
                      }
                      if (te !== null) {
                        te.return = pe, ye = te;
                        break;
                      }
                      ye = pe;
                    }
                  }
                }
                var je = u.alternate;
                if (je !== null) {
                  var Se = je.child;
                  if (Se !== null) {
                    je.child = null;
                    do {
                      var ht = Se.sibling;
                      Se.sibling = null, Se = ht;
                    } while (Se !== null);
                  }
                }
                ye = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && f !== null) f.return = u, ye = f;
            else e: for (; ye !== null; ) {
              if (u = ye, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Xs(9, u, u.return);
              }
              var R = u.sibling;
              if (R !== null) {
                R.return = u.return, ye = R;
                break e;
              }
              ye = u.return;
            }
          }
          var b = e.current;
          for (ye = b; ye !== null; ) {
            f = ye;
            var F = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && F !== null) F.return = f, ye = F;
            else e: for (f = b; ye !== null; ) {
              if (k = ye, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    la(9, k);
                }
              } catch (Ne) {
                ot(k, k.return, Ne);
              }
              if (k === f) {
                ye = null;
                break e;
              }
              var le = k.sibling;
              if (le !== null) {
                le.return = k.return, ye = le;
                break e;
              }
              ye = k.return;
            }
          }
          if (Be = l, ei(), jn && typeof jn.onPostCommitFiberRoot == "function") try {
            jn.onPostCommitFiberRoot(jr, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Qe = n, ln.transition = t;
      }
    }
    return !1;
  }
  function wd(e, t, n) {
    t = es(n, t), t = Bc(e, t, 1), e = ni(e, t, 1), t = Pt(), e !== null && (Ns(e, 1, t), Bt(e, t));
  }
  function ot(e, t, n) {
    if (e.tag === 3) wd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        wd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (si === null || !si.has(s))) {
          e = es(n, e), e = Vc(t, e, 1), t = ni(t, e, 1), e = Pt(), t !== null && (Ns(t, 1, e), Bt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Qm(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & n, gt === e && (wt & n) === n && (vt === 4 || vt === 3 && (wt & 130023424) === wt && 500 > ue() - ao ? Ei(e, 0) : ro |= n), Bt(e, t);
  }
  function Nd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Sr, Sr <<= 1, (Sr & 130023424) === 0 && (Sr = 4194304)));
    var n = Pt();
    e = Fn(e, t), e !== null && (Ns(e, t, n), Bt(e, n));
  }
  function Ym(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Nd(e, n);
  }
  function Jm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(t), Nd(e, n);
  }
  var Ed;
  Ed = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ft.current) Dt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Dt = !1, Fm(e, t, n);
      Dt = (e.flags & 131072) !== 0;
    }
    else Dt = !1, st && (t.flags & 1048576) !== 0 && sc(t, Ur, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        ra(e, t), e = t.pendingProps;
        var l = Gi(t, Ct.current);
        qi(t, n), l = Fl(null, t, s, e, l, n);
        var u = Il();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, It(s) ? (u = !0, Br(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _l(t), l.updater = ia, t.stateNode = l, l._reactInternals = t, Ul(t, s, e, n), t = Ql(null, t, s, !0, u, n)) : (t.tag = 0, st && u && jl(t), At(null, t, l, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (ra(e, t), e = t.pendingProps, l = s._init, s = l(s._payload), t.type = s, l = t.tag = qm(s), e = fn(s, e), l) {
            case 0:
              t = Wl(null, t, s, e, n);
              break e;
            case 1:
              t = Xc(null, t, s, e, n);
              break e;
            case 11:
              t = Gc(null, t, s, e, n);
              break e;
            case 14:
              t = Wc(null, t, s, fn(s.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), Wl(e, t, s, l, n);
      case 1:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), Xc(e, t, s, l, n);
      case 3:
        e: {
          if (qc(t), e === null) throw Error(o(387));
          s = t.pendingProps, u = t.memoizedState, l = u.element, fc(e, t), Jr(t, s, null, n);
          var f = t.memoizedState;
          if (s = f.element, u.isDehydrated) if (u = { element: s, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = es(Error(o(423)), t), t = Zc(e, t, s, n, l);
            break e;
          } else if (s !== l) {
            l = es(Error(o(424)), t), t = Zc(e, t, s, n, l);
            break e;
          } else for (Qt = Xn(t.stateNode.containerInfo.firstChild), Wt = t, st = !0, hn = null, n = dc(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Yi(), s === l) {
              t = Dn(e, t, n);
              break e;
            }
            At(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return vc(t), e === null && wl(t), s = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, f = l.children, ml(s, l) ? f = null : u !== null && ml(s, u) && (t.flags |= 32), Jc(e, t), At(e, t, f, n), t.child;
      case 6:
        return e === null && wl(t), null;
      case 13:
        return ed(e, t, n);
      case 4:
        return Al(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = Ji(t, null, s, n) : At(e, t, s, n), t.child;
      case 11:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), Gc(e, t, s, l, n);
      case 7:
        return At(e, t, t.pendingProps, n), t.child;
      case 8:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return At(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, l = t.pendingProps, u = t.memoizedProps, f = l.value, Ze(Wr, s._currentValue), s._currentValue = f, u !== null) if (dn(u.value, f)) {
            if (u.children === l.children && !Ft.current) {
              t = Dn(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var k = u.dependencies;
            if (k !== null) {
              f = u.child;
              for (var S = k.firstContext; S !== null; ) {
                if (S.context === s) {
                  if (u.tag === 1) {
                    S = In(-1, n & -n), S.tag = 2;
                    var K = u.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var ne = K.pending;
                      ne === null ? S.next = S : (S.next = ne.next, ne.next = S), K.pending = S;
                    }
                  }
                  u.lanes |= n, S = u.alternate, S !== null && (S.lanes |= n), Tl(
                    u.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                S = S.next;
              }
            } else if (u.tag === 10) f = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (f = u.return, f === null) throw Error(o(341));
              f.lanes |= n, k = f.alternate, k !== null && (k.lanes |= n), Tl(f, n, t), f = u.sibling;
            } else f = u.child;
            if (f !== null) f.return = u;
            else for (f = u; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (u = f.sibling, u !== null) {
                u.return = f.return, f = u;
                break;
              }
              f = f.return;
            }
            u = f;
          }
          At(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, s = t.pendingProps.children, qi(t, n), l = rn(l), s = s(l), t.flags |= 1, At(e, t, s, n), t.child;
      case 14:
        return s = t.type, l = fn(s, t.pendingProps), l = fn(s.type, l), Wc(e, t, s, l, n);
      case 15:
        return Qc(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, l = t.pendingProps, l = t.elementType === s ? l : fn(s, l), ra(e, t), t.tag = 1, It(s) ? (e = !0, Br(t)) : e = !1, qi(t, n), Dc(t, s, l), Ul(t, s, l, n), Ql(null, t, s, !0, e, n);
      case 19:
        return nd(e, t, n);
      case 22:
        return Yc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Cd(e, t) {
    return gr(e, t);
  }
  function Xm(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, t, n, s) {
    return new Xm(e, t, n, s);
  }
  function po(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function qm(e) {
    if (typeof e == "function") return po(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === fe) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function oi(e, t) {
    var n = e.alternate;
    return n === null ? (n = on(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function va(e, t, n, s, l, u) {
    var f = 2;
    if (s = e, typeof e == "function") po(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case O:
        return bi(n.children, l, u, t);
      case P:
        f = 8, l |= 8;
        break;
      case ee:
        return e = on(12, n, t, l | 2), e.elementType = ee, e.lanes = u, e;
      case q:
        return e = on(13, n, t, l), e.elementType = q, e.lanes = u, e;
      case de:
        return e = on(19, n, t, l), e.elementType = de, e.lanes = u, e;
      case me:
        return ka(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Y:
            f = 10;
            break e;
          case ve:
            f = 9;
            break e;
          case fe:
            f = 11;
            break e;
          case ge:
            f = 14;
            break e;
          case Ee:
            f = 16, s = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = on(f, n, t, l), t.elementType = e, t.type = s, t.lanes = u, t;
  }
  function bi(e, t, n, s) {
    return e = on(7, e, s, t), e.lanes = n, e;
  }
  function ka(e, t, n, s) {
    return e = on(22, e, s, t), e.elementType = me, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function vo(e, t, n) {
    return e = on(6, e, null, t), e.lanes = n, e;
  }
  function ko(e, t, n) {
    return t = on(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Zm(e, t, n, s, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ka(0), this.expirationTimes = Ka(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ka(0), this.identifierPrefix = s, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function yo(e, t, n, s, l, u, f, k, S) {
    return e = new Zm(e, t, n, k, S), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = on(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _l(u), e;
  }
  function ep(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function bd(e) {
    if (!e) return Zn;
    e = e._reactInternals;
    e: {
      if (_n(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (It(t.type)) {
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
      if (It(n)) return tc(e, n, t);
    }
    return t;
  }
  function Td(e, t, n, s, l, u, f, k, S) {
    return e = yo(n, s, !0, e, l, u, f, k, S), e.context = bd(null), n = e.current, s = Pt(), l = ai(n), u = In(s, l), u.callback = t ?? null, ni(n, u, l), e.current.lanes = l, Ns(e, l, s), Bt(e, s), e;
  }
  function ya(e, t, n, s) {
    var l = t.current, u = Pt(), f = ai(l);
    return n = bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = In(u, f), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = ni(l, t, f), e !== null && (vn(e, l, f, u), Yr(e, l, f)), f;
  }
  function ga(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Md(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function go(e, t) {
    Md(e, t), (e = e.alternate) && Md(e, t);
  }
  function tp() {
    return null;
  }
  var _d = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function jo(e) {
    this._internalRoot = e;
  }
  ja.prototype.render = jo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    ya(e, t, null, null);
  }, ja.prototype.unmount = jo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ni(function() {
        ya(null, e, null, null);
      }), t[Ln] = null;
    }
  };
  function ja(e) {
    this._internalRoot = e;
  }
  ja.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++) ;
      Qn.splice(n, 0, e), n === 0 && vu(e);
    }
  };
  function xo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function xa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ad() {
  }
  function np(e, t, n, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function() {
          var K = ga(f);
          u.call(K);
        };
      }
      var f = Td(t, s, e, 0, null, !1, !1, "", Ad);
      return e._reactRootContainer = f, e[Ln] = f.current, Is(e.nodeType === 8 ? e.parentNode : e), Ni(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var K = ga(S);
        k.call(K);
      };
    }
    var S = yo(e, 0, !1, null, null, !1, !1, "", Ad);
    return e._reactRootContainer = S, e[Ln] = S.current, Is(e.nodeType === 8 ? e.parentNode : e), Ni(function() {
      ya(t, S, n, s);
    }), S;
  }
  function Sa(e, t, n, s, l) {
    var u = n._reactRootContainer;
    if (u) {
      var f = u;
      if (typeof l == "function") {
        var k = l;
        l = function() {
          var S = ga(f);
          k.call(S);
        };
      }
      ya(t, f, e, l);
    } else f = np(n, t, e, l, s);
    return ga(f);
  }
  du = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ws(t.pendingLanes);
          n !== 0 && (Ua(t, n | 1), Bt(t, ue()), (Be & 6) === 0 && (is = ue() + 500, ei()));
        }
        break;
      case 13:
        Ni(function() {
          var s = Fn(e, 1);
          if (s !== null) {
            var l = Pt();
            vn(s, e, 1, l);
          }
        }), go(e, 1);
    }
  }, Ha = function(e) {
    if (e.tag === 13) {
      var t = Fn(e, 134217728);
      if (t !== null) {
        var n = Pt();
        vn(t, e, 134217728, n);
      }
      go(e, 134217728);
    }
  }, hu = function(e) {
    if (e.tag === 13) {
      var t = ai(e), n = Fn(e, t);
      if (n !== null) {
        var s = Pt();
        vn(n, e, t, s);
      }
      go(e, t);
    }
  }, fu = function() {
    return Qe;
  }, mu = function(e, t) {
    var n = Qe;
    try {
      return Qe = e, t();
    } finally {
      Qe = n;
    }
  }, Rt = function(e, t, n) {
    switch (t) {
      case "input":
        if ($e(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var l = Dr(s);
              if (!l) throw Error(o(90));
              ie(s), $e(s, l);
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
  }, pr = ho, Fe = Ni;
  var ip = { usingClientEntryPoint: !1, Events: [Bs, Ui, Dr, yn, gn, ho] }, tr = { findFiberByHostInstance: vi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, sp = { bundleType: tr.bundleType, version: tr.version, rendererPackageName: tr.rendererPackageName, rendererConfig: tr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: G.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = xs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: tr.findFiberByHostInstance || tp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wa.isDisabled && wa.supportsFiber) try {
      jr = wa.inject(sp), jn = wa;
    } catch {
    }
  }
  return Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip, Vt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xo(t)) throw Error(o(200));
    return ep(e, t, null, n);
  }, Vt.createRoot = function(e, t) {
    if (!xo(e)) throw Error(o(299));
    var n = !1, s = "", l = _d;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = yo(e, 1, !1, null, null, n, !1, s, l), e[Ln] = t.current, Is(e.nodeType === 8 ? e.parentNode : e), new jo(t);
  }, Vt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = xs(t), e = e === null ? null : e.stateNode, e;
  }, Vt.flushSync = function(e) {
    return Ni(e);
  }, Vt.hydrate = function(e, t, n) {
    if (!xa(t)) throw Error(o(200));
    return Sa(null, e, t, !0, n);
  }, Vt.hydrateRoot = function(e, t, n) {
    if (!xo(e)) throw Error(o(405));
    var s = n != null && n.hydratedSources || null, l = !1, u = "", f = _d;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = Td(t, null, e, 1, n ?? null, l, !1, u, f), e[Ln] = t.current, Is(e), s) for (e = 0; e < s.length; e++) n = s[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ja(t);
  }, Vt.render = function(e, t, n) {
    if (!xa(t)) throw Error(o(200));
    return Sa(null, e, t, !1, n);
  }, Vt.unmountComponentAtNode = function(e) {
    if (!xa(e)) throw Error(o(40));
    return e._reactRootContainer ? (Ni(function() {
      Sa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ln] = null;
      });
    }), !0) : !1;
  }, Vt.unstable_batchedUpdates = ho, Vt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!xa(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Sa(e, t, n, !1, s);
  }, Vt.version = "18.3.1-next-f1338f8080-20240426", Vt;
}
var Dd;
function fp() {
  if (Dd) return No.exports;
  Dd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), No.exports = hp(), No.exports;
}
var zd;
function mp() {
  if (zd) return Na;
  zd = 1;
  var r = fp();
  return Na.createRoot = r.createRoot, Na.hydrateRoot = r.hydrateRoot, Na;
}
var pp = mp();
const vp = (() => {
  const r = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], a = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], d = [64, 59, 55, 50, 45, 40], c = d.at(-1), h = { pentatonic: 15, "3nps": 17 }, p = 7, m = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], y = ["e", "B", "G", "D", "A", "E"], L = ["ohut e", "B", "G", "D", "A", "paksu E"], v = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], g = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], M = {
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
  }, I = 26, C = 72, w = 30, j = 54, B = 34, E = 11, W = (I + C) / 2, G = w + (d.length - 1) * B + 30, Q = (U) => C + U * j, T = (U) => U === 0 ? W : Q(U) - j / 2, O = (U) => w + U * B;
  function P(U, Z, D) {
    const ae = a.indexOf(r[U][0]) + Number(D.slice(-1)) - 1, z = ae % a.length, ie = o[z] + 12 * Math.floor(ae / a.length), re = U + Z - ie;
    return a[z] + (re < 0 ? "♭" : "♯").repeat(Math.abs(re));
  }
  function ee(U) {
    return [...U.base, ...U.add].sort((Z, D) => Z[0] - D[0]);
  }
  function Y(U, Z, D) {
    const ae = Z + (D ? 1 : 0), z = m[ae % m.length], ie = Math.min(...z.map(([$e]) => $e)), re = Math.max(...z.map(([, $e]) => $e));
    let we = (U - c % 12 + 12) % 12 - (D ? 8 : 5) + 12 * Math.floor(ae / m.length);
    return ie + we < 0 && (we += 12), re + we > h.pentatonic && (we -= 12), {
      strings: z.map(($e) => $e.map((He) => He + we)),
      start: ie + we,
      end: re + we
    };
  }
  function ve(U, Z, D) {
    const ae = D[Z], z = (U + ae - c % 12 + 12) % 12, ie = c + z - ae, re = d.map((he, ke) => {
      const we = Z + (d.length - 1 - ke) * 3;
      return [we, we + 1, we + 2].map(($e) => {
        const He = Math.floor($e / D.length), Ye = D[$e % D.length];
        return ie + Ye + 12 * He - he;
      });
    });
    return {
      strings: re,
      start: Math.min(...re.map((he) => he[0])),
      end: Math.max(...re.map((he) => he.at(-1)))
    };
  }
  function fe(U, Z) {
    const D = [], ae = Math.ceil(-U.end / 12) * 12;
    for (let ie = ae; U.start + ie <= Z; ie += 12) {
      const re = U.strings.map((ke) => ke.map((we) => we + ie).filter((we) => we >= 0 && we <= Z)), he = re.flat();
      D.push({
        strings: re,
        start: Math.min(...he),
        end: Math.max(...he),
        partial: U.start + ie < 0 || U.end + ie > Z
      });
    }
    const z = D.filter((ie) => !ie.partial);
    return z.length ? z : D;
  }
  function q(U) {
    return ee(U).length === p;
  }
  function de(U, Z, D) {
    const ae = q(Z);
    U.querySelector('[value="3nps"]').disabled = !ae, U.value = ae ? D ?? "3nps" : "pentatonic";
  }
  function ge(U, Z, D, ae, z) {
    const ie = ee(Z).map(([re]) => re);
    return ae.map((re) => {
      const he = re - 1, ke = D === "3nps" ? ve(U, he, ie) : Y(U, he, Z.base === g), we = z === void 0 ? [ke] : fe(ke, z);
      return { number: re, positions: we };
    });
  }
  function Ee(U, Z) {
    const D = U.getBoundingClientRect(), ae = U.querySelectorAll(Z);
    let z = 1 / 0;
    ae.forEach((ie) => {
      const re = ie.getBoundingClientRect();
      let he = 0;
      re.left < D.left ? he = re.left - D.left - 8 : re.right > D.right && (he = re.right - D.right + 8), Math.abs(he) < Math.abs(z) && (z = he);
    }), Number.isFinite(z) && (U.scrollLeft += z);
  }
  function me(U, Z = !1) {
    const D = U === "3nps" ? p : m.length;
    return Array.from({ length: D }, (ae, z) => {
      const ie = z + 1;
      return '<label class="box-toggle" data-box="' + ie + '"><input type="checkbox" value="' + ie + '"' + (Z && z === 0 ? " checked" : "") + "> Boksi " + ie + "</label>";
    }).join("");
  }
  function $(U, Z) {
    const D = ee(Z), ae = new Map(D.map(([ie, re]) => [ie, P(U, ie, re)])), z = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return D.flatMap(([ie, re]) => z.flatMap(({ suffix: he, base: ke }) => {
      const we = ke.map(([$e]) => ae.get((ie + $e) % 12));
      return we.every(Boolean) ? {
        root: (U + ie) % 12,
        degree: Number(String(re).replace(/\D/g, "")),
        name: we[0] + he,
        notes: we,
        base: ke,
        add: []
      } : [];
    }));
  }
  function J(U, Z) {
    const D = U.base.map(([ie]) => (U.root + ie) % 12), ae = d.map((ie) => {
      const re = [];
      for (let he = 0; he <= Z; he++) {
        const ke = (ie + he) % 12;
        D.includes(ke) && re.push({ fret: he, pitch: ke });
      }
      return re;
    }), z = [];
    for (let ie = 0; ie <= ae.length - 3; ie++)
      for (const re of ae[ie])
        for (const he of ae[ie + 1])
          if (re.pitch !== he.pitch)
            for (const ke of ae[ie + 2]) {
              if (ke.pitch === re.pitch || ke.pitch === he.pitch) continue;
              const we = [re.fret, he.fret, ke.fret], $e = Math.min(...we), He = Math.max(...we);
              if (He - $e > 3) continue;
              const Ye = Array(d.length).fill(null);
              Ye.splice(ie, 3, ...we), z.push({ strings: Ye, low: $e, high: He });
            }
    return z.sort((ie, re) => ie.high - re.high || ie.low - re.low);
  }
  const X = {
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
  function A(U, Z) {
    const D = X[U + ":" + Z];
    if (D) return { frets: D, barre: null };
    let ae = null;
    return x.forEach(({ string: z, openPC: ie, shapes: re }) => {
      const he = re[Z];
      if (!he) return;
      let ke = (U - ie + 12) % 12;
      if (ke + Math.min(...he.filter((He) => He !== null)) < 0 && (ke += 12), ae && ae.fret <= ke) return;
      const we = he.map((He) => He === null ? null : ke + He), $e = ke > 0 && he.at(-1) === 0 ? { fret: ke, from: z, to: he.length - 1 } : null;
      ae = { fret: ke, frets: we, barre: $e };
    }), ae && { frets: ae.frets, barre: ae.barre };
  }
  function oe(U, { frets: Z, barre: D }, ae) {
    const we = [...d].reverse(), $e = Z.filter((Ve) => Ve > 0), Ye = !$e.length || Math.max(...$e) <= 4 && (Z.includes(0) || Math.min(...$e) === 1) ? 1 : Math.min(...$e), We = (Ve) => 24 + Ve * 14, Xe = (Ve) => 30 + (Ve - Ye) * 18 + 18 / 2, ut = 102;
    let Je = '<svg class="chord-svg" viewBox="0 0 108 ' + (ut + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ae + "-ote paksusta kielestä ohueen: " + Z.map((Ve) => Ve ?? "x").join(" ") + '">';
    for (let Ve = 0; Ve <= 4; Ve++)
      Je += '<line class="' + (Ve === 0 && Ye === 1 ? "nut" : "fret") + '" x1="' + We(0) + '" y1="' + (30 + Ve * 18) + '" x2="' + We(5) + '" y2="' + (30 + Ve * 18) + '"/>';
    return Z.forEach((Ve, it) => {
      Je += '<line class="string" x1="' + We(it) + '" y1="30" x2="' + We(it) + '" y2="' + ut + '"/>';
    }), Ye > 1 && (Je += '<text class="fret-label" x="15" y="' + (Xe(Ye) + 4) + '">' + Ye + "</text>"), D && (Je += '<rect class="barre" x="' + (We(D.from) - 6.5) + '" y="' + (Xe(D.fret) - 6.5) + '" width="' + ((D.to - D.from) * 14 + 13) + '" height="13" rx="6.5"/>'), Z.forEach((Ve, it) => {
      if (Ve === null) {
        Je += '<text class="marker" x="' + We(it) + '" y="22">×</text>';
        return;
      }
      const Kt = (we[it] + Ve) % 12 === U;
      if (Ve === 0) {
        Je += '<circle class="open' + (Kt ? " root-open" : "") + '" cx="' + We(it) + '" cy="18" r="4.5"/>';
        return;
      }
      D && Ve === D.fret && it >= D.from && it <= D.to && !Kt || (Je += '<circle class="' + (Kt ? "root" : "tone") + '" cx="' + We(it) + '" cy="' + Xe(Ve) + '" r="6.5"/>');
    }), Je + "</svg>";
  }
  function V(U, Z) {
    const D = new URLSearchParams(location.search), ae = r.indexOf(D.get("toonikka")), z = D.get("asteikko");
    return {
      rootPC: ae === -1 ? U : ae,
      scaleId: Object.hasOwn(M, z) ? z : Z
    };
  }
  function ce(U, Z, D) {
    return U + "?" + new URLSearchParams({ toonikka: r[Z], asteikko: D });
  }
  function _(U, Z, D, {
    boxes: ae = [],
    onlyBoxNotes: z = !1,
    automatic: ie = !0,
    focusDegree: re = "",
    grip: he = null,
    barre: ke = null,
    label: we = r[U] + " " + Z.name,
    notes: $e = null,
    targets: He = !1,
    muteFret: Ye = null
  } = {}) {
    const We = Q(D), Xe = We + 48, ut = Xe + 28, Je = w - 14, Ve = O(d.length - 1) + 14, it = Ve - Je, Kt = ie ? 680 : Math.ceil(ut * 0.64), Xt = ae.flatMap((_e) => _e.positions), Et = {};
    Z.base.forEach(([_e, Le]) => Et[(U + _e) % 12] = { deg: Le, added: !1 }), Z.add.forEach(([_e, Le]) => Et[(U + _e) % 12] = { deg: Le, added: !0 });
    const un = d.map((_e, Le) => !!he && he[Le] === null), qt = !!he && Ye !== null, Zt = L.filter((_e, Le) => un[Le]).reverse(), _t = we + ". " + D + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Zt.length ? " Soittamatta jäävät kielet: " + Zt.join(", ") + "." : "");
    let be = '<svg viewBox="0 0 ' + ut + " " + G + '" style="min-width:' + Kt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (He ? "group" : "img") + '" aria-label="' + _t + '">';
    be += '<rect x="' + I + '" y="' + Je + '" width="' + (C - I) + '" height="' + it + '" rx="6" fill="#2a2338"/>', be += '<rect x="' + C + '" y="' + Je + '" width="' + (We - C) + '" height="' + it + '" fill="#231a12"/>', be += '<rect x="' + We + '" y="' + Je + '" width="' + (ut - We - 4) + '" height="' + it + '" rx="8" fill="#32251e"/>';
    for (let _e = 1; _e <= D; _e++)
      be += '<line x1="' + Q(_e) + '" y1="' + Je + '" x2="' + Q(_e) + '" y2="' + Ve + '" stroke="#6f5b47" stroke-width="2"/>';
    be += '<rect x="' + (C - 3) + '" y="' + Je + '" width="6" height="' + it + '" rx="2" fill="#d8cbb6"/>', be += '<rect x="' + (Xe - 11) + '" y="' + (Je + 3) + '" width="22" height="' + (it - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', be += '<rect x="' + (Xe - 4) + '" y="' + (Je + 7) + '" width="3" height="' + (it - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Ut = (Je + Ve) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((_e) => _e <= D).forEach((_e) => be += '<circle cx="' + T(_e) + '" cy="' + Ut + '" r="5.5" fill="#7a6550"/>');
    for (let _e = 12; _e <= D; _e += 12)
      be += '<circle cx="' + T(_e) + '" cy="' + (Ut - B) + '" r="5.5" fill="#7a6550"/>', be += '<circle cx="' + T(_e) + '" cy="' + (Ut + B) + '" r="5.5" fill="#7a6550"/>';
    be += '<text x="' + W + '" y="' + (G - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', be += '<text x="' + C + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', be += '<text x="' + Xe + '" y="' + (G - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let _e = 1; _e <= D; _e++)
      be += '<text x="' + T(_e) + '" y="' + (G - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + _e + "</text>";
    if (ae.forEach(({ number: _e, positions: Le }) => {
      Le.forEach((Re) => {
        const Ge = Re.partial ? "box-highlight box-partial" : "box-highlight";
        be += '<g class="' + Ge + '" data-box="' + _e + '" aria-hidden="true">';
        const rt = Re.strings.find((kt) => kt.length), Rt = (T(rt[0]) + T(rt.at(-1))) / 2;
        be += '<text class="box-number" x="' + Rt + '" y="12">' + _e + "</text>", Re.strings.forEach((kt, en) => {
          if (!kt.length) return;
          const Tn = T(kt[0]) - 16, yn = T(kt.at(-1)) - T(kt[0]) + 32;
          be += '<rect class="box-band" x="' + Tn + '" y="' + (O(en) - 14) + '" width="' + yn + '" height="28" rx="14"/>';
        }), be += "</g>";
      });
    }), d.forEach((_e, Le) => {
      const Re = 1 + Le * 0.45, Ge = O(Le), rt = un[Le] && !qt;
      rt ? be += '<text class="muted-mark" x="' + W + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : un[Le] && Ye === 0 || (be += '<line x1="' + (I + 4) + '" y1="' + Ge + '" x2="' + (C - 4) + '" y2="' + Ge + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), be += "<g" + (rt ? ' opacity=".35"' : "") + ">", be += '<line x1="' + C + '" y1="' + Ge + '" x2="' + (Xe + 5) + '" y2="' + Ge + '" stroke="#b9b9c4" stroke-width="' + Re.toFixed(2) + '"/>', be += '<circle cx="' + (Xe + 5) + '" cy="' + Ge + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', be += "</g>", be += '<text x="13" y="' + (Ge + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + y[Le] + "</text>";
    }), he && ke && ke.fret >= 1 && ke.fret <= D) {
      const _e = O(ke.from), Le = O(ke.to), Re = Math.min(_e, Le) - 6, Ge = Math.max(_e, Le) + 6;
      be += '<rect class="barre-indicator" x="' + (T(ke.fret) - 7) + '" y="' + Re + '" width="14" height="' + (Ge - Re) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return He && (be += '<g class="fret-targets">', d.forEach((_e, Le) => {
      for (let Re = 0; Re <= D; Re++) {
        const Ge = Re ? L[Le] + "-kieli, " + Re + ". nauha" : "vapaa " + L[Le] + "-kieli", rt = Re ? j : C - I - 6;
        be += '<rect class="fret-target" role="button" tabindex="0" data-string="' + Le + '" data-fret="' + Re + '" data-midi="' + (_e + Re) + '" aria-label="' + Ge + '" x="' + (T(Re) - rt / 2) + '" y="' + (O(Le) - B / 2) + '" width="' + rt + '" height="' + B + '" fill="transparent"/>';
      }
    }), be += "</g>"), ($e ?? []).forEach(({ string: _e, fret: Le, label: Re, kind: Ge }) => {
      be += '<g class="octave-note octave-' + Ge + '">', be += '<circle cx="' + T(Le) + '" cy="' + O(_e) + '" r="' + E + '"/>', be += '<text x="' + T(Le) + '" y="' + (O(_e) + 3.5) + '" font-size="' + (Re.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + Re + "</text>", be += "</g>";
    }), he && (be += '<g class="grip-notes">'), ($e ? [] : d).forEach((_e, Le) => {
      for (let Re = 0; Re <= D; Re++) {
        const Ge = (_e + Re) % 12;
        if (!(Ge in Et) || he && he[Le] !== Re || z && !Xt.some(({ strings: yn }) => {
          const gn = yn[Le];
          return gn.length > 0 && Re >= gn[0] && Re <= gn.at(-1);
        })) continue;
        const rt = Et[Ge], Rt = rt.deg === "1", kt = rt.added ? "#f0a13c" : Rt ? "#4b2fd6" : "#6d4aff", en = rt.added ? "#1a1430" : "#fff";
        rt.deg === re && (be += '<circle class="focus-note" cx="' + T(Re) + '" cy="' + O(Le) + '" r="14.5"/>');
        const Tn = he ? ' data-string="' + (Le + 1) + '" data-fret="' + Re + '" data-degree="' + rt.deg + '"' : "";
        be += "<circle" + Tn + ' cx="' + T(Re) + '" cy="' + O(Le) + '" r="' + E + '" fill="' + kt + '" stroke="' + (Rt ? "#fff" : "#1a1430") + '" stroke-width="' + (Rt ? 2.5 : 1) + '"/>', be += '<text x="' + T(Re) + '" y="' + (O(Le) + 3.5) + '" font-size="' + (rt.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + en + '" text-anchor="middle">' + rt.deg + "</text>";
      }
    }), he && (be += "</g>"), qt && un.forEach((_e, Le) => {
      if (!_e) return;
      const Re = T(Ye), Ge = O(Le);
      be += '<g class="muted-mark grip-mute" data-string="' + (Le + 1) + '" data-fret="' + Ye + '">', be += '<circle cx="' + Re + '" cy="' + Ge + '" r="9" fill="' + (Ye === 0 ? "#2a2338" : "#231a12") + '"/>', be += '<text x="' + Re + '" y="' + (Ge + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', be += "</g>";
    }), be += "</svg>", be;
  }
  return {
    CHROM: r,
    OPEN_PITCHES: d,
    PENT_MAJ: g,
    SCALES: M,
    noteName: P,
    scaleNotes: ee,
    scaleTriads: $,
    triadGrips: J,
    chordGrip: A,
    renderChordDiagram: oe,
    selectionFromURL: V,
    selectionHref: ce,
    renderBoard: _,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: q,
    syncBoxSystem: de,
    fingeringBoxes: ge,
    boxOptions: me,
    revealPositions: Ee
  };
})();
globalThis.MusicMapFretboard = vp;
function bo(r) {
  return 440 * Math.pow(2, (r - 69) / 12);
}
function kp(r) {
  return 69 + 12 * Math.log2(r / 440);
}
function yp(r) {
  const a = kp(r), o = Math.round(a), d = (a - o) * 100;
  return { midi: o, cents: d };
}
const Ie = globalThis.MusicMapFretboard, De = (r) => (r % 12 + 12) % 12, gp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], jp = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Ae = (r, a = !1, o = !1) => (a ? jp : gp)[De(r)] + (o ? Math.floor(r / 12) - 1 : ""), fi = (r) => Ie.CHROM[De(r)], ur = (r, a, o) => Ie.noteName(De(r), a, o);
function xp(r, a) {
  const o = Math.floor(r / 12) - 1;
  return a[0] === "B" && De(r) < 2 ? o - 1 : a[0] === "C" && De(r) > 9 ? o + 1 : o;
}
const ft = ["ohut E", "B", "G", "D", "A", "paksu E"], nu = ["ohuelta E-kieleltä", "B-kieleltä", "G-kieleltä", "D-kieleltä", "A-kieleltä", "paksulta E-kieleltä"], $a = ["ohuella E-kielellä", "B-kielellä", "G-kielellä", "D-kielellä", "A-kielellä", "paksulla E-kielellä"], Io = ["ohuen E-kielen", "B-kielen", "G-kielen", "D-kielen", "A-kielen", "paksun E-kielen"], $t = (r) => r === 0 ? "vapaa kieli" : `${r}. nauha`, Ce = (r, a) => ({ string: r, fret: a, midi: Ie.OPEN_PITCHES[r] + a });
function ks(r, a, o) {
  return [...r].sort((d, c) => d - c).flatMap((d) => Array.from({ length: Math.max(0, o - a + 1) }, (c, h) => Ce(d, a + h)));
}
const Ue = (r) => `${r.string}:${r.fret}`, Ai = {
  maj: { name: "Duuri", suffix: "", tones: [[0, "1"], [4, "3"], [7, "5"]] },
  min: { name: "Molli", suffix: "m", tones: [[0, "1"], [3, "♭3"], [7, "5"]] },
  dom7: { name: "Dominanttiseptimi", suffix: "7", tones: [[0, "1"], [4, "3"], [7, "5"], [10, "♭7"]] }
}, Fh = (r, a) => a === "maj" ? `${fi(r)}-duurisointu` : a === "min" ? `${fi(r)}-mollisointu` : `${fi(r)}7-sointu`, cr = [
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
], Bd = {
  C: { root: 0, frets: [0, 1, 0, 2, 3, null] },
  A: { root: 9, frets: [0, 2, 2, 2, 0, null] },
  G: { root: 7, frets: [3, 0, 0, 0, 2, 3] },
  E: { root: 4, frets: [0, 0, 1, 2, 2, 0] },
  D: { root: 2, frets: [2, 3, 2, 0, null, null] }
};
function Ih(r, a) {
  const o = Bd[a] ?? Bd.E, d = De(r - o.root);
  return o.frets.flatMap((c, h) => c === null ? [] : [Ce(h, c + d)]);
}
const Ta = {
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
}, Da = {
  off: { title: "Testaa osaamistasi", summary: "Vastaus ei näy. Vihjeen saa pyytämällä, ja itse ratkaistut tehtävät tilastoidaan erikseen." },
  always: { title: "Opettele", summary: "Oikea kohta näkyy heti. Tutki otelautaa rauhassa: vastauksia ei lasketa itsenäiseksi osaamiseksi." },
  fade: { title: "Vähennä vihjeitä", summary: "Kolme kysymystä vastaus näkyvissä, kolme apupisteen kanssa ja loput ilman vihjettä." }
}, ci = (r, a, o, d) => typeof r == "number" && Number.isFinite(r) ? Math.max(a, Math.min(o, r)) : d, En = (r, a, o) => a.includes(r) ? r : o;
function Ra(r) {
  const a = { ...Ta };
  a.mode = En(r.mode, ["notes", "ear-note", "repeat", "scale", "chord", "caged", "interval"], a.mode), a.strings = Array.isArray(r.strings) ? [...new Set(r.strings.filter((o) => Number.isInteger(o) && o >= 0 && o <= 5))].sort((o, d) => o - d) : a.strings, a.strings.length || (a.strings = [...Ta.strings]), a.min = Math.round(ci(r.min, 0, 24, a.min)), a.max = Math.round(ci(r.max, a.min, 24, Math.max(a.min, a.max)));
  for (const o of ["accidentals", "flats", "weak", "advance", "reference"]) typeof r[o] == "boolean" && (a[o] = r[o]);
  return a.check = En(r.check, ["class", "pitch"], a.check), a.input = En(r.input, ["mic", "board"], a.input), a.rounds = [0, 10, 20].includes(r.rounds) ? r.rounds : a.rounds, a.root = Math.round(ci(r.root, 0, 11, a.root)), a.scale = typeof r.scale == "string" && Object.hasOwn(Ie.SCALES, r.scale) ? r.scale : a.scale, a.box = Math.round(ci(r.box, 0, 5, a.box)), a.order = En(r.order, ["random", "up", "down"], a.order), a.chord = En(r.chord, ["maj", "min", "dom7"], a.chord), a.chordTone = En(r.chordTone, ["build", "random", "1", "3", "5", "7"], a.chordTone), a.chord !== "dom7" && a.chordTone === "7" && (a.chordTone = "build"), a.shape = En(r.shape, ["C", "A", "G", "E", "D"], a.shape), a.intervals = Array.isArray(r.intervals) ? [...new Set(r.intervals.filter((o) => Number.isInteger(o) && o >= 1 && o <= 12))].sort((o, d) => o - d) : a.intervals, a.intervals.length || (a.intervals = [...Ta.intervals]), a.direction = En(r.direction, ["up", "down", "both"], a.direction), a.hints = En(r.hints, ["off", "always", "fade"], a.hints), a.activity = En(r.activity, ["play", "degree"], a.activity), a.minRms = ci(r.minRms, 1e-3, 0.15, a.minRms), a.clarity = ci(r.clarity, 0.85, 0.99, a.clarity), a.stability = ci(r.stability, 120, 800, a.stability), a.cents = ci(r.cents, 10, 45, a.cents), a.device = typeof r.device == "string" ? r.device.slice(0, 256) : "", a;
}
function Sp(r, a) {
  const o = new URLSearchParams(r), d = { ...a };
  for (const [c, h] of [["tila", "mode"], ["asteikko", "scale"], ["tarkistus", "check"], ["muoto", "shape"], ["sointu", "chord"], ["jarjestys", "order"], ["vastaus", "input"], ["vihjeet", "hints"], ["tehtava", "activity"], ["sointuaste", "chordTone"], ["suunta", "direction"]])
    o.has(c) && Object.assign(d, { [h]: o.get(c) });
  for (const [c, h] of [["alku", "min"], ["loppu", "max"], ["boksi", "box"], ["kierros", "rounds"]])
    o.has(c) && (d[h] = Number(o.get(c)));
  o.has("kielet") && (d.strings = o.get("kielet").split(",").map((c) => Number(c) - 1)), o.has("intervallit") && (d.intervals = o.get("intervallit").split(",").map(Number));
  for (const [c, h] of [["kromaattinen", "accidentals"], ["alennukset", "flats"], ["kertaus", "weak"], ["vertailu", "reference"]])
    o.has(c) && (d[h] = o.get(c) === "1");
  if (o.has("toonikka")) {
    const c = o.get("toonikka").trim().replace("#", "♯").replace(/^([A-Ga-g])b$/, "$1♭"), h = c.charAt(0).toUpperCase() + c.slice(1), p = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], m = Math.max(Ie.CHROM.indexOf(h), p.indexOf(h), ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"].indexOf(h));
    m >= 0 && (d.root = m);
  }
  return Ra(d);
}
function wp(r) {
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
const Pi = (r) => r.mode === "ear-note" ? "note" : ["scale", "chord"].includes(r.mode) && r.activity === "degree" ? "degree" : r.input, Bn = (r) => r.mode === "scale" && r.order !== "random", Dh = (r) => ["note", "degree"].includes(Pi(r)) ? "class" : Bn(r) ? "pitch" : r.check, Ea = (r) => Pi(r) === "mic", Vd = "musiikin-kartta:harjoittelu", zh = 3, Do = () => ({ version: zh, settings: { ...Ta }, stats: {}, recent: [], sessions: [] }), Bh = (r) => `${r.input}:${r.check}:${r.hint ? "guided" : "solo"}:${r.item}`, kn = (r) => typeof r == "number" && Number.isFinite(r) && r >= 0;
function Np(r) {
  return !!r && ["attempts", "correct", "totalMs", "lastSeen"].every((a) => kn(r[a])) && r.correct <= r.attempts && (r.errors === void 0 || kn(r.errors)) && (r.ema === void 0 || kn(r.ema) && r.ema <= 1) && (r.emaMs === void 0 || kn(r.emaMs));
}
function Ep(r) {
  return !!r && typeof r.id == "string" && kn(r.count) && kn(r.first) && r.first <= r.count && kn(r.ms) && kn(r.at) && (r.solo === void 0 || kn(r.solo) && r.solo <= r.count) && (r.soloFirst === void 0 || kn(r.soloFirst) && r.soloFirst <= (r.solo ?? r.count));
}
function Kd(r) {
  if (!r) return Do();
  const a = JSON.parse(r);
  if (!a || ![1, 2, 3].includes(a.version) || !a.stats || typeof a.stats != "object" || Array.isArray(a.stats)) throw new Error("Tuntematon tallennusmuoto");
  if (Object.values(a.stats).some((p) => !Np(p))) throw new Error("Virheellisiä tilastoja");
  if (a.recent !== void 0 && (!Array.isArray(a.recent) || a.recent.some((p) => !p || typeof p.id != "string" || !kn(p.ms)))) throw new Error("Virheellisiä tuloksia");
  if (a.sessions !== void 0 && (!Array.isArray(a.sessions) || a.sessions.some((p) => !Ep(p)))) throw new Error("Virheellisiä kierroksia");
  const o = a.version < 3, d = Ra(a.settings ?? {}), c = o && a.settings?.hints !== "always" && a.settings?.hints !== "off";
  c && (d.hints = "off");
  const h = {
    version: zh,
    settings: d,
    stats: Object.fromEntries(Object.entries(a.stats).map(([p, m]) => [p, { ...m, errors: m.errors ?? 0 }])),
    recent: (a.recent ?? []).slice(-500),
    sessions: (a.sessions ?? []).slice(-200)
  };
  return (c || a.notice === "hints-default") && (h.notice = "hints-default"), h;
}
const Ud = 2500, Cp = 8e3, Hd = 0.3, dr = (r) => r.ema ?? r.correct / r.attempts, hr = (r) => r.emaMs ?? r.totalMs / r.attempts;
function iu(r) {
  if (!r?.attempts) return null;
  const a = Math.max(0, Math.min(1, 1 - (hr(r) - Ud) / (Cp - Ud)));
  return dr(r) * 0.65 + a * 0.35;
}
function bp(r) {
  return !r || r.attempts < 3 ? 3 : 0.25 + (1 - iu(r)) * 3;
}
class Gd {
  constructor(a) {
    this.storage = a;
    try {
      this.data = Kd(a?.getItem(Vd) ?? null);
    } catch {
      this.writable = !1, this.warning = "Vanhaa harjoitustallennusta ei voitu lukea. Se säilytetään koskemattomana; tämän käynnin tulokset ovat vain muistissa.";
    }
  }
  storage;
  data = Do();
  warning = "";
  writable = !0;
  save() {
    if (this.writable)
      try {
        if (!this.storage) throw new Error("Ei tallennusta");
        this.storage.setItem(Vd, JSON.stringify(this.data)), this.warning = "";
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
    const o = Bh(a), d = this.data.stats[o] ?? { attempts: 0, correct: 0, errors: 0, totalMs: 0 }, c = Number(a.first), h = {
      attempts: d.attempts + 1,
      correct: d.correct + c,
      errors: d.errors + a.errors,
      totalMs: d.totalMs + a.ms,
      lastSeen: a.at,
      ema: d.attempts ? dr(d) + Hd * (c - dr(d)) : c,
      emaMs: d.attempts ? hr(d) + Hd * (a.ms - hr(d)) : a.ms
    };
    Object.defineProperty(this.data.stats, o, { value: h, writable: !0, configurable: !0, enumerable: !0 }), this.data.recent = [...this.data.recent, a].slice(-500), this.save();
  }
  session(a) {
    this.data.sessions = [...this.data.sessions.filter((o) => o.id !== a.id), a].slice(-200), this.save();
  }
  /** Korvaa tiedot varmuuskopiolla. Heittää virheen, jos tiedosto ei ole kelvollinen. */
  restore(a) {
    if (!a.trim()) throw new Error("Tyhjä tiedosto");
    const o = Kd(a);
    this.data = o, this.writable = !0, this.warning = "", this.save();
  }
  /** Poistaa tulokset ja tilastot. Asetukset säilyvät. */
  clearProgress() {
    this.data = { ...Do(), settings: this.data.settings }, this.writable = !0, this.save();
  }
}
const Tp = 4e3, Wd = 12, Mp = 1500;
function _p(r, a) {
  const o = r.left + r.stickyLeft, d = r.right;
  let c = 0;
  if (a.left < o ? c = a.left - o - Wd : a.right > d && (c = a.right - d + Wd), c === 0) return null;
  const h = Math.max(0, Math.min(r.maxScroll, r.scrollLeft + c));
  return Math.abs(h - r.scrollLeft) < 1 ? null : h;
}
function Ap(r, a) {
  return a.right <= r.left + r.stickyLeft || a.left >= r.right;
}
function Vh(r, a, o, { stickySelector: d, enabled: c = !0, playback: h } = {}) {
  const p = N.useRef(0), m = N.useRef(!1), y = N.useRef(""), L = N.useRef(0), v = N.useRef(h);
  N.useEffect(() => {
    const g = r.current;
    if (!g || !c) return;
    const M = () => {
      p.current = Date.now() + Tp;
    }, I = () => {
      m.current = !0, M();
    }, C = () => {
      m.current && (m.current = !1, M());
    }, w = (j) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(j.key) && M();
    };
    return g.addEventListener("pointerdown", I, { passive: !0 }), g.addEventListener("touchstart", I, { passive: !0 }), g.addEventListener("wheel", M, { passive: !0 }), g.addEventListener("keydown", w), window.addEventListener("pointerup", C, { passive: !0 }), window.addEventListener("pointercancel", C, { passive: !0 }), window.addEventListener("touchend", C, { passive: !0 }), window.addEventListener("touchcancel", C, { passive: !0 }), () => {
      g.removeEventListener("pointerdown", I), g.removeEventListener("touchstart", I), g.removeEventListener("wheel", M), g.removeEventListener("keydown", w), window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", C), window.removeEventListener("touchend", C), window.removeEventListener("touchcancel", C);
    };
  }, [r, c]), N.useLayoutEffect(() => {
    const g = h !== void 0 && !!h && h !== v.current;
    v.current = h, g && !m.current && (p.current = 0);
  }, [h]), N.useLayoutEffect(() => {
    h === void 0 && y.current === "" && o !== "" && Date.now() - L.current > Mp && !m.current && (p.current = 0), y.current !== "" && o === "" && (L.current = Date.now()), y.current = o;
    const g = r.current;
    if (!g || !c || !o || m.current || Date.now() < p.current) return;
    const M = g.querySelector(a);
    if (!M) return;
    const I = g.getBoundingClientRect(), C = M.getBoundingClientRect(), w = d ? g.querySelector(d) : null, j = w && getComputedStyle(w).position === "sticky" ? w.getBoundingClientRect().width : 0, B = {
      left: I.left,
      right: I.left + g.clientWidth,
      scrollLeft: g.scrollLeft,
      maxScroll: g.scrollWidth - g.clientWidth,
      stickyLeft: j
    }, E = _p(B, C);
    if (E === null) return;
    const G = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Ap(B, C);
    typeof g.scrollTo == "function" ? g.scrollTo({ left: E, behavior: G ? "auto" : "smooth" }) : g.scrollLeft = E;
  }, [r, a, o, d, c, h]);
}
const Pp = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Lp = ["e", "B", "G", "D", "A", "E"];
function Kh({ string: r }) {
  return /* @__PURE__ */ i.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ i.jsxs("span", { children: [
      /* @__PURE__ */ i.jsxs("span", { className: "string-number", children: [
        r + 1,
        " · "
      ] }),
      /* @__PURE__ */ i.jsx("strong", { children: Lp[r] })
    ] }),
    r === 0 ? /* @__PURE__ */ i.jsx("small", { children: "ohuin" }) : r === 5 ? /* @__PURE__ */ i.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Uh = (r) => ({ "--string-thickness": 1.25 + r * 0.45 + "px" }), $p = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Hh({ min: r, max: a }) {
  return /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
    /* @__PURE__ */ i.jsx("th", { scope: "col", children: /* @__PURE__ */ i.jsx("span", { className: "board-head-label", children: "Kielet" }) }),
    Array.from({ length: a - r + 1 }, (o, d) => {
      const c = r + d;
      return /* @__PURE__ */ i.jsxs("th", { scope: "col", className: c === 0 ? "open-fret" : "", children: [
        c,
        c > 0 && c % 12 === 0 ? /* @__PURE__ */ i.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Pp.has(c) ? /* @__PURE__ */ i.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, c);
    })
  ] }) });
}
function bn({ area: r, marks: a = [], mutedStrings: o = [], disabled: d = !1, onAnswer: c, caption: h = "Otelauta", follow: p = "hints", playback: m }) {
  const y = { "--cols": r.max - r.min + 1 }, { strings: L, min: v, max: g } = r, [M, I] = N.useState({ string: Math.min(...L), fret: v }), C = N.useRef(null), w = new Map(a.map((Q) => [Ue(Q), Q])), j = a.map((Q) => `${Ue(Q)}${Q.kind}`).join(",");
  N.useEffect(() => {
    if (p !== "hints") return;
    const Q = C.current, T = Q?.querySelector(".target, .anchor");
    Q && T && (Q.scrollLeft += T.getBoundingClientRect().left - Q.getBoundingClientRect().left - Q.clientWidth / 2 + T.clientWidth / 2);
  }, [j, p]), N.useEffect(() => {
    p === "playing" && C.current && (C.current.scrollLeft = 0);
  }, [p, v, g]);
  const B = a.find((Q) => Q.kind === "playing");
  Vh(C, ".playing", B ? Ue(B) : "", { stickySelector: "tbody th", enabled: p === "playing", playback: m });
  const [E, W] = N.useState({ left: !1, right: !1 });
  N.useEffect(() => {
    const Q = C.current;
    if (!Q) return;
    const T = () => {
      const P = Q.scrollLeft > 2, ee = Q.scrollLeft + Q.clientWidth < Q.scrollWidth - 2;
      W((Y) => Y.left === P && Y.right === ee ? Y : { left: P, right: ee });
    };
    T(), Q.addEventListener("scroll", T, { passive: !0 });
    const O = typeof ResizeObserver > "u" ? null : new ResizeObserver(T);
    return O?.observe(Q), () => {
      Q.removeEventListener("scroll", T), O?.disconnect();
    };
  }, [j, v, g]);
  const G = L.includes(M.string) && M.fret >= v && M.fret <= g ? M : { string: Math.min(...L), fret: v };
  return /* @__PURE__ */ i.jsxs("div", { className: "fret-wrap" + (E.left ? " more-left" : "") + (E.right ? " more-right" : ""), children: [
    (E.left || E.right) && /* @__PURE__ */ i.jsxs("p", { className: "fret-scroll-hint", children: [
      E.left && /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      E.left && E.right ? "molemmilla puolilla" : E.right ? "oikealla" : "vasemmalla",
      E.right && /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { ref: C, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ i.jsxs("table", { className: "practice-board" + (d && !c ? " display-only" : ""), style: y, children: [
      /* @__PURE__ */ i.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ i.jsx(Hh, { min: v, max: g }),
      /* @__PURE__ */ i.jsx("tbody", { children: Ie.OPEN_PITCHES.map((Q, T) => /* @__PURE__ */ i.jsxs("tr", { className: L.includes(T) ? "" : "unused", style: Uh(T), children: [
        /* @__PURE__ */ i.jsxs("th", { scope: "row", "aria-label": `${T + 1}. kieli: ${ft[T]}${o.includes(T) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ i.jsx(Kh, { string: T }),
          o.includes(T) && /* @__PURE__ */ i.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        ks([T], v, g).map((O) => {
          const P = w.get(Ue(O)), ee = `${ft[T]}-kieli, ${$t(O.fret)}`;
          return /* @__PURE__ */ i.jsx("td", { className: `${O.fret === 0 ? "open-fret " : ""}${P ? P.kind === "answer" ? "target" : P.kind : ""}`, children: /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "data-string": T,
              "data-fret": O.fret,
              tabIndex: G.string === T && G.fret === O.fret ? 0 : -1,
              onFocus: () => I(O),
              onKeyDown: (Y) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Y.key)) return;
                Y.preventDefault();
                const ve = [...L].sort((ge, Ee) => ge - Ee), fe = ve.indexOf(T), q = Y.key === "ArrowUp" ? ve[Math.max(0, fe - 1)] : Y.key === "ArrowDown" ? ve[Math.min(ve.length - 1, fe + 1)] : T, de = Y.key === "Home" ? v : Y.key === "End" ? g : Math.max(v, Math.min(g, O.fret + (Y.key === "ArrowRight" ? 1 : Y.key === "ArrowLeft" ? -1 : 0)));
                Y.currentTarget.closest("table")?.querySelector(`button[data-string="${q}"][data-fret="${de}"]`)?.focus();
              },
              disabled: d || !L.includes(T),
              "aria-label": ee + (P ? `, ${$p[P.kind]}${P.label ? " " + P.label : ""}` : ""),
              onClick: () => c?.(O),
              children: P ? /* @__PURE__ */ i.jsx("span", { className: "dot", children: P.label || "●" }) : null
            }
          ) }, O.fret);
        })
      ] }, T)) })
    ] }) })
  ] });
}
function Rp({ area: r, stats: a, input: o, check: d, flats: c }) {
  const { strings: h, min: p, max: m } = r, y = `${o}:${d}:solo:notes:`;
  return /* @__PURE__ */ i.jsx("div", { className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Harjoiteltujen kohteiden osaamiskartta", children: /* @__PURE__ */ i.jsxs("table", { className: "practice-board mastery", style: { "--cols": m - p + 1 }, children: [
    /* @__PURE__ */ i.jsx("caption", { children: "Osaamiskartta · ohut e ylhäällä, paksu E alhaalla" }),
    /* @__PURE__ */ i.jsx(Hh, { min: p, max: m }),
    /* @__PURE__ */ i.jsx("tbody", { children: Ie.OPEN_PITCHES.map((L, v) => /* @__PURE__ */ i.jsxs("tr", { className: h.includes(v) ? "" : "unused", style: Uh(v), children: [
      /* @__PURE__ */ i.jsx("th", { scope: "row", "aria-label": `${v + 1}. kieli: ${ft[v]}`, children: /* @__PURE__ */ i.jsx(Kh, { string: v }) }),
      ks([v], p, m).map((g) => {
        const M = Object.hasOwn(a, y + Ue(g)) ? a[y + Ue(g)] : void 0, I = iu(M), C = I === null ? "unseen" : M.attempts < 3 ? "few" : I >= 0.8 ? "strong" : I >= 0.5 ? "growing" : "weak", w = `${ft[v]}-kieli, ${$t(g.fret)}, ${Ae(g.midi, c)}`, j = M ? `${Math.round(I * 100)} %, ${M.correct}/${M.attempts} heti oikein, viime aikoina ${Math.round(dr(M) * 100)} % ja ${(hr(M) / 1e3).toFixed(1)} s` : "ei vastauksia";
        return /* @__PURE__ */ i.jsxs("td", { className: `${g.fret === 0 ? "open-fret " : ""}${C}`, title: `${w}: ${j}`, children: [
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: I === null ? "·" : M.attempts < 3 ? "?" : Math.round(I * 100) }),
          /* @__PURE__ */ i.jsxs("span", { className: "sr-only", children: [
            w,
            ": ",
            j
          ] })
        ] }, g.fret);
      })
    ] }, v)) })
  ] }) });
}
const Op = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", za = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ai[r.mode === "caged" ? "maj" : r.chord].tones, Gh = (r) => Ie.fingeringBoxes(r.root, Ie.SCALES[r.scale], "pentatonic", [r.box])[0].positions[0];
function $i(r) {
  if (r.mode === "caged") {
    const a = Ih(r.root, r.shape).map((o) => o.fret);
    return { strings: [0, 1, 2, 3, 4, 5], min: Math.min(...a), max: Math.max(...a), fixed: "shape" };
  }
  if (r.mode === "scale" && r.box) {
    const a = Gh(r);
    return { strings: r.strings, min: a.start, max: a.end, fixed: "box" };
  }
  return { strings: r.strings, min: r.min, max: r.max, fixed: "" };
}
function Fp(r) {
  const a = $i(r);
  return a.fixed ? { ...a, strings: [0, 1, 2, 3, 4, 5], min: Math.max(0, a.min - 1), max: Math.min(24, a.max + 1) } : a;
}
function mr(r) {
  const a = $i(r), o = ks(a.strings, a.min, a.max);
  if (r.mode === "notes" || r.mode === "ear-note" || r.mode === "repeat")
    return o.filter((h) => r.accidentals || ![1, 3, 6, 8, 10].includes(De(h.midi)));
  if (r.mode === "caged") {
    const h = new Set(Ih(r.root, r.shape).map(Ue));
    return o.filter((p) => h.has(Ue(p)));
  }
  if (r.mode === "interval") return o;
  const d = o.filter((h) => za(r).some(([p]) => De(h.midi - r.root) === p));
  if (r.mode !== "scale" || !r.box) return d;
  const c = Gh(r);
  return d.filter((h) => {
    const p = c.strings[h.string];
    return p.length > 0 && h.fret >= p[0] && h.fret <= p.at(-1);
  });
}
function Wh(r, a) {
  return (r.direction === "both" ? ["up", "down"] : [r.direction]).flatMap((d) => r.intervals.map((c) => ({
    iv: c,
    direction: d,
    pairs: a.flatMap((h) => a.filter((p) => p.midi === h.midi + (d === "down" ? -c : c)).map((p) => ({ reference: h, target: p })))
  }))).filter((d) => d.pairs.length);
}
function Ip(r) {
  const a = za(r);
  return r.mode !== "chord" || r.chordTone === "random" ? [] : r.chordTone === "build" ? a : a.filter(([, o]) => o.endsWith(r.chordTone));
}
function zo(r) {
  const a = mr(r), o = "Laajenna nauha-aluetta tai valitse lisää kieliä.";
  if (!a.length)
    return r.mode === "scale" ? `Asteikon säveliä ei ole valitulla alueella. ${r.box ? "Valitse lisää kieliä tai toinen boksi." : o}` : r.mode === "chord" ? `Soinnun säveliä ei ole valitulla alueella. ${o}` : r.mode !== "interval" && !r.accidentals ? "Valitulla alueella ei ole luonnollisia säveliä. Laajenna nauha-aluetta, valitse lisää kieliä tai ota mukaan ylennetyt ja alennetut sävelet." : `Valitulla alueella ei ole harjoiteltavia säveliä. ${o}`;
  const d = Ip(r).filter(([c]) => !a.some((h) => De(h.midi - r.root) === c));
  return d.length ? `Valitulta alueelta puuttuu soinnun ${d.map(([, c]) => c + ". aste").join(" ja ")}. ${o}` : r.mode === "interval" && !Wh(r, a).length ? "Valitulla alueella ei voi soittaa yhtään valituista intervalleista. Laajenna nauha-aluetta tai valitse pienempiä intervalleja." : Bn(r) && new Set(a.map((c) => c.midi)).size < 2 ? `Järjestyksessä soittamiseen tarvitaan vähintään kaksi asteikon säveltä. ${o}` : null;
}
function Dp(r, a) {
  const o = [...new Map([...a].sort((d, c) => d.midi - c.midi || d.string - c.string).map((d) => [d.midi, d])).values()];
  return r.order === "down" ? o.reverse() : o;
}
function Qh(r) {
  return Bn(r) ? new Set(mr(r).map((a) => a.midi)).size : r.rounds;
}
function zp(r, a) {
  return r.hints === "always" ? 2 : r.hints === "fade" ? a <= 3 ? 2 : a <= 6 ? 1 : 0 : 0;
}
function rs(r, a, o = Math.random) {
  if (!r.length) throw new Error("Valitulla alueella ei ole harjoiteltavia säveliä. Laajenna aluetta tai vaihda boksia.");
  const d = a.reduce((p, m) => p + m, 0), c = Math.min(0.999999999, Math.max(0, o()));
  if (!(d > 0)) return r[Math.floor(c * r.length)];
  let h = c * d;
  for (let p = 0; p < r.length; p++)
    if (h -= a[p], h < 0) return r[p];
  return r.at(-1);
}
const Qd = (r, a) => r.mode === "caged" ? `caged:${r.root}:${r.shape}:${a}` : r.mode === "chord" ? `chord:${r.root}:${r.chord}:${a}:${r.activity}` : `scale:${r.root}:${r.scale}:${a}:${r.activity}`;
function Ti(r, a) {
  const o = r.filter((d) => !a(d));
  return o.length ? o : r;
}
function Bp(r, a, o = {}, d, c = Math.random) {
  const h = zo(r);
  if (h) throw new Error(h);
  const p = Dh(r), m = Pi(r), y = p === "pitch", L = (O) => r.weak ? bp(o[Bh({ input: m, check: p, hint: !1, item: O })]) : 1, v = (O) => rs(O, O.map(() => 1), c), g = mr(r), M = { check: p, sound: [], choices: "position" };
  if (r.mode === "notes") {
    const O = Ti(g, (Y) => !!d && Ue(Y) === Ue(d.position)), P = rs(O, O.map((Y) => L(`notes:${Ue(Y)}`)), c), ee = Ae(P.midi, r.flats, y);
    return {
      ...M,
      position: P,
      midi: P.midi,
      name: ee,
      item: `notes:${Ue(P)}`,
      prompt: `Etsi ${ee} ${nu[P.string]}.`
    };
  }
  if (r.mode === "ear-note") {
    const O = (ve) => `ear-note:${De(ve.midi)}${r.reference ? ":ref" : ""}`, P = Ti(g, (ve) => !!d && De(ve.midi) === De(d.midi)), ee = rs(P, P.map((ve) => L(O(ve))), c), Y = r.reference ? 57 + 12 * Math.round((ee.midi - 57) / 12) : void 0;
    return {
      ...M,
      position: ee,
      midi: ee.midi,
      name: Ae(ee.midi, r.flats),
      item: O(ee),
      choices: "note",
      reference: Y,
      sound: Y === void 0 ? [ee.midi] : [Y, ee.midi],
      prompt: r.reference ? "Kuulet ensin vertailusävelen A ja sitten kysytyn sävelen. Mikä jälkimmäinen sävel on?" : "Mikä sävel soi?"
    };
  }
  if (r.mode === "repeat") {
    const O = Ti(g, (ee) => !!d && ee.midi === d.midi), P = rs(O, O.map((ee) => L(`repeat:${ee.midi}`)), c);
    return {
      ...M,
      position: P,
      midi: P.midi,
      name: Ae(P.midi, r.flats, !0),
      item: `repeat:${P.midi}`,
      sound: [P.midi],
      prompt: "Kuuntele sävel ja etsi se kitarasta."
    };
  }
  if (r.mode === "interval") {
    const O = Ti(Wh(r, g), (Y) => d?.interval === Y.iv && d?.direction === Y.direction), P = rs(O, O.map((Y) => L(`interval:${Y.iv}:${Y.direction}`)), c), ee = v(Ti(P.pairs, (Y) => d?.reference === Y.reference.midi));
    return {
      ...M,
      position: ee.target,
      midi: ee.target.midi,
      name: Ae(ee.target.midi, r.flats, !0),
      item: `interval:${P.iv}:${P.direction}`,
      interval: P.iv,
      direction: P.direction,
      reference: ee.reference.midi,
      sound: [ee.reference.midi, ee.target.midi],
      prompt: `Kuulet ${P.direction === "up" ? "nousevan" : "laskevan"} intervallin. Alkusävel on ${Ae(ee.reference.midi, r.flats, !0)}. Etsi jälkimmäinen sävel.`
    };
  }
  const I = za(r);
  let C, w = 0;
  if (Bn(r)) {
    const O = Dp(r, g);
    w = O.length, C = O[a % O.length];
  } else {
    const O = I.filter(([Y]) => g.some((ve) => De(ve.midi - r.root) === Y)), P = r.mode === "chord" && r.chordTone !== "random" ? r.chordTone === "build" ? [I[a % I.length]] : I.filter(([, Y]) => Y.endsWith(r.chordTone)) : Ti(O, ([Y]) => d?.interval === Y), [ee] = rs(P, P.map(([Y]) => L(Qd(r, Y))), c);
    C = v(Ti(g.filter((Y) => De(Y.midi - r.root) === ee), (Y) => !!d && Ue(Y) === Ue(d.position)));
  }
  const j = De(C.midi - r.root), B = I.find(([O]) => O === j)[1], E = ur(r.root, j, B), W = y ? E + xp(C.midi, E) : E, G = r.mode === "scale" ? `${fi(r.root)}-${Ie.SCALES[r.scale].name}${r.box ? `, boksi ${r.box}` : ""}` : r.mode === "caged" ? `${fi(r.root)}-duurisointu, ${r.shape}-muoto` : Fh(r.root, r.chord), Q = r.mode !== "caged" && r.activity === "degree", T = Q ? `${G}: mikä aste on ${E}?` : w ? `${G} ${r.order === "up" ? "ylöspäin" : "alaspäin"}, sävel ${a % w + 1}/${w}: ${B}. aste (${W}).` : `${G}: etsi ${B}. aste${y ? ` (${W})` : ""}.`;
  return {
    ...M,
    position: C,
    midi: C.midi,
    name: W,
    item: Qd(r, j),
    prompt: T,
    degree: B,
    interval: j,
    choices: Q ? "degree" : "position"
  };
}
function Bo(r, a, o) {
  return Number.isInteger(a) && (o === "class" ? De(r) === De(a) : r === a);
}
function Yh(r, a, o) {
  return Bo(a.midi, o.midi, a.check) ? r.mode === "notes" ? o.string === a.position.string : Op(r) ? mr(r).some((d) => Ue(d) === Ue(o)) : !0 : !1;
}
function Vp(r, a) {
  const o = $i(r);
  return ks(o.strings, o.min, o.max).filter((d) => Yh(r, a, d));
}
const Nt = (r, a, o) => ({ ...r, label: a, kind: o }), Kp = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function Up(r, a, o) {
  if (o <= 0) return { marks: [], text: "" };
  const d = o >= 2, c = $i(r), h = ks(c.strings, c.min, c.max), p = Vp(r, a);
  if (r.mode === "notes") {
    if (d) return { marks: p.map((B) => Nt(B, a.name, "answer")), text: `${a.name} on ${$a[a.position.string]}: ${$t(a.position.fret)}.` };
    const w = h.find((B) => B.string === a.position.string), j = Ae(w.midi, r.flats);
    return {
      marks: [Nt(w, j, "anchor")],
      text: `Apupiste: ${Io[w.string]} ${w.fret === 0 ? "vapaa sävel" : w.fret + ". nauhan sävel"} on ${j}. Jokainen nauha nostaa säveltä puoliaskeleen. Vain E–F ja B–C ovat vierekkäisillä nauhoilla.`
    };
  }
  if (r.mode === "ear-note")
    return d ? { marks: [Nt(a.position, a.name, "answer")], text: `Sävel on ${a.name}.` } : { marks: [Nt(a.position, "?", "anchor")], text: `Sävel soi tässä kohdassa: ${ft[a.position.string]}-kieli, ${$t(a.position.fret)}.` };
  if (r.mode === "repeat")
    return d ? { marks: p.map((w) => Nt(w, Ae(w.midi, r.flats, a.check === "pitch"), "answer")), text: `Sävel on ${a.name}.` } : { marks: [], text: `Sävel löytyy ${nu[a.position.string]}.` };
  if (r.mode === "interval") {
    const w = Ae(a.reference, r.flats, !0), j = h.filter((B) => B.midi === a.reference).map((B) => Nt(B, w, "anchor"));
    return d ? {
      marks: [...j, ...p.map((B) => Nt(B, Ae(B.midi, r.flats, !0), "answer"))],
      text: `${Kp(cr[a.interval])} ${a.direction === "up" ? "ylöspäin" : "alaspäin"}: ${w} → ${a.name}.`
    } : { marks: j, text: `Alkusävel ${w} näkyy otelaudalla. Jälkimmäinen sävel on sitä ${a.direction === "up" ? "korkeampi" : "matalampi"}.` };
  }
  const m = mr(r), y = za(r), L = (w) => y.find(([j]) => j === De(w.midi - r.root))?.[1] ?? "", v = ur(r.root, a.interval, a.degree), g = m.filter((w) => De(w.midi - r.root) === 0), M = (w) => p.some((j) => Ue(j) === Ue(w)), I = `${a.degree}. aste on ${v}.`;
  if (r.mode === "caged")
    return d ? { marks: m.map((w) => Nt(w, L(w), M(w) ? "answer" : "shape")), text: I } : { marks: m.map((w) => Nt(w, "", "shape")), text: `${r.shape}-muodon sävelet näkyvät pisteinä. Mikä niistä on ${a.degree}. aste?` };
  const C = r.mode === "scale" ? "asteikon" : "soinnun";
  if (a.choices === "degree") {
    const w = m.filter((j) => De(j.midi) === De(a.midi));
    return d ? { marks: [...(a.interval === 0 ? [] : g).map((j) => Nt(j, "1", "anchor")), ...w.map((j) => Nt(j, a.degree, "answer"))], text: `${v} on ${a.degree}. aste.` } : a.interval === 0 ? { marks: w.map((j) => Nt(j, v, "shape")), text: `Katso ${C} nimeä: mikä on sen perussävel?` } : {
      marks: [...g.map((j) => Nt(j, "1", "anchor")), ...w.map((j) => Nt(j, v, "shape"))],
      text: `Laske puoliaskeleet lähimmästä perussävelestä (1) sävelen ${v} kohdalle.`
    };
  }
  return d ? { marks: [...g.filter((w) => !M(w)).map((w) => Nt(w, "1", "anchor")), ...p.map((w) => Nt(w, a.degree, "answer"))], text: I } : a.interval === 0 ? { marks: [], text: `1. aste on ${C} perussävel ${fi(r.root)}.` } : { marks: g.map((w) => Nt(w, "1", "anchor")), text: `Apupiste: perussävelet (1). ${a.degree}. aste on ${a.interval} puoliaskelta perussävelen yläpuolella.` };
}
class Hp {
  constructor(a, o, d, c = () => performance.now(), h = Math.random) {
    this.settings = a, this.stats = o, this.record = d, this.now = c, this.random = h, this.total = Qh(a);
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
      this.question = Bp(this.settings, this.index, this.stats(), this.question, this.random), this.index++, this.errors = 0, this.mismatches = 0, this.pendingMismatch = !1, this.hintLevel = zp(this.settings, this.index), this.started = this.now(), this.phase = "active";
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
    const h = this.question;
    if (!(o === "degree" ? a === h.interval : o === "note" ? Bo(h.midi, a, "class") : o === "board" ? !!d && Yh(this.settings, h, d) : Bo(h.midi, a, h.check)))
      return o === "mic" ? (this.mismatches++, this.pendingMismatch = !0, "candidate") : (this.errors++, "wrong");
    const m = o === "board" ? d : void 0, y = {
      id: `${this.id}:${this.index}`,
      item: m && this.settings.mode === "notes" ? `notes:${Ue(m)}` : h.item,
      mode: this.settings.mode,
      input: o,
      check: h.check,
      expected: h.midi,
      played: a,
      first: this.errors === 0,
      errors: this.errors,
      ms: Math.max(0, this.now() - this.started - Math.max(0, c)),
      hint: this.hintLevel > 0,
      hintLevel: this.hintLevel,
      mismatches: this.mismatches,
      at: Date.now()
    };
    return m ? y.position = Ue(m) : this.settings.mode === "notes" && (y.position = Ue(h.position)), this.results.push(y), this.record(y), this.phase = "feedback", "correct";
  }
  /** Käyttäjä vahvistaa, että viimeisin eriävä mikrofonihavainto oli oma soittovirhe. */
  confirmWrong() {
    this.phase === "active" && this.pendingMismatch && (this.errors++, this.pendingMismatch = !1);
  }
  stop() {
    this.phase = "done";
  }
}
function Vo(r) {
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
const Ko = [
  ["notes", "Otelaudan sävelet", "Etsi sävel annetulta kieleltä ja opi kaulan rakenne."],
  ["ear-note", "Tunnista kuultu sävel", "Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin."],
  ["repeat", "Kuule ja toista", "Kuuntele sävel ja etsi se kitarasta."],
  ["scale", "Pentatoniikka ja asteikot", "Yhdistä asteet, sävelnimet ja sormitusboksit."],
  ["chord", "Sointusävelet", "Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita."],
  ["caged", "CAGED", "Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta."],
  ["interval", "Kuule ja toista intervalli", "Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen."]
], ds = (r) => Ko.find(([a]) => a === r)?.[1] ?? r;
function Lt({ label: r, children: a }) {
  const o = N.useId();
  return /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ i.jsx("label", { htmlFor: o, children: r }),
    N.cloneElement(a, { id: o })
  ] });
}
function Yd({ legend: r, name: a, value: o, options: d, onChange: c, disabled: h }) {
  return /* @__PURE__ */ i.jsxs("fieldset", { className: "choice", disabled: h, children: [
    /* @__PURE__ */ i.jsx("legend", { children: r }),
    /* @__PURE__ */ i.jsx("div", { className: "choice-row", children: d.map((p) => /* @__PURE__ */ i.jsxs("label", { className: p.value === o ? "selected" : "", children: [
      /* @__PURE__ */ i.jsx("input", { type: "radio", name: a, value: p.value, checked: p.value === o, onChange: () => c(p.value) }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: p.title }),
        /* @__PURE__ */ i.jsx("small", { children: p.summary })
      ] })
    ] }, p.value)) })
  ] });
}
function Jd(r) {
  const a = $i(r), o = Qh(r), d = Pi(r), c = d === "mic" ? "soita kitaralla" : d === "board" ? "vastaa otelaudalta" : d === "note" ? "vastaa sävelnimellä" : "vastaa asteella", h = a.fixed === "shape" ? `${r.shape}-muoto, nauhat ${a.min}–${a.max}` : a.fixed === "box" ? `boksi ${r.box}, nauhat ${a.min}–${a.max}` : `nauhat ${a.min}–${a.max}`, p = a.strings.length === 6 ? "" : ` · kielet ${a.strings.map((m) => m + 1).join(", ")}`;
  return `${Da[r.hints].title} · ${c} · ${Bn(r) ? `yksi läpisoitto, ${o} säveltä` : o ? `${o} kysymystä` : "vapaa harjoittelu"} · ${h}${p}`;
}
function Xd({ s: r, change: a, locked: o, problem: d }) {
  const c = N.useId(), h = (v, g) => a({ ...r, [v]: g }), p = $i(r), m = Pi(r) === "note" || Pi(r) === "degree", y = ["scale", "chord", "caged"].includes(r.mode), L = ["notes", "ear-note", "repeat"].includes(r.mode);
  return /* @__PURE__ */ i.jsxs("fieldset", { className: "settings", disabled: o, children: [
    /* @__PURE__ */ i.jsx("legend", { children: "Valitse harjoitus" }),
    /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ i.jsx(Lt, { label: "Harjoitus", children: /* @__PURE__ */ i.jsx("select", { value: r.mode, onChange: (v) => h("mode", v.target.value), children: Ko.map(([v, g]) => /* @__PURE__ */ i.jsx("option", { value: v, children: g }, v)) }) }),
      /* @__PURE__ */ i.jsx("p", { className: "mode-note", children: Ko.find(([v]) => v === r.mode)[2] })
    ] }),
    y && /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ i.jsx(Lt, { label: r.mode === "scale" ? "Toonika" : "Soinnun perussävel", children: /* @__PURE__ */ i.jsx("select", { value: r.root, onChange: (v) => h("root", Number(v.target.value)), children: Ie.CHROM.map((v, g) => /* @__PURE__ */ i.jsx("option", { value: g, children: v }, v)) }) }),
      r.mode === "scale" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(Lt, { label: "Asteikko", children: /* @__PURE__ */ i.jsx("select", { value: r.scale, onChange: (v) => h("scale", v.target.value), children: Object.entries(Ie.SCALES).map(([v, g]) => /* @__PURE__ */ i.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Pentatoninen sormitusboksi", children: /* @__PURE__ */ i.jsxs("select", { value: r.box, onChange: (v) => h("box", Number(v.target.value)), children: [
          /* @__PURE__ */ i.jsx("option", { value: "0", children: "Ei boksia · koko valittu alue" }),
          [1, 2, 3, 4, 5].map((v) => /* @__PURE__ */ i.jsxs("option", { value: v, children: [
            "Boksi ",
            v
          ] }, v))
        ] }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Sävelten järjestys", children: /* @__PURE__ */ i.jsxs("select", { value: r.order, onChange: (v) => h("order", v.target.value), children: [
          /* @__PURE__ */ i.jsx("option", { value: "random", children: "Satunnainen" }),
          /* @__PURE__ */ i.jsx("option", { value: "up", children: "Matalasta korkeaan" }),
          /* @__PURE__ */ i.jsx("option", { value: "down", children: "Korkeasta matalaan" })
        ] }) })
      ] }),
      r.mode === "chord" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(Lt, { label: "Sointutyyppi", children: /* @__PURE__ */ i.jsx("select", { value: r.chord, onChange: (v) => h("chord", v.target.value), children: Object.entries(Ai).map(([v, g]) => /* @__PURE__ */ i.jsx("option", { value: v, children: g.name }, v)) }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Harjoiteltava sointusävel", children: /* @__PURE__ */ i.jsxs("select", { value: r.chordTone, onChange: (v) => h("chordTone", v.target.value), children: [
          /* @__PURE__ */ i.jsxs("option", { value: "build", children: [
            "Rakenna: 1 → 3 → 5",
            r.chord === "dom7" ? " → ♭7" : ""
          ] }),
          /* @__PURE__ */ i.jsx("option", { value: "random", children: "Satunnainen sointusävel" }),
          /* @__PURE__ */ i.jsx("option", { value: "1", children: "Perussävel · 1" }),
          /* @__PURE__ */ i.jsxs("option", { value: "3", children: [
            "Terssi · ",
            r.chord === "min" ? "♭3" : "3"
          ] }),
          /* @__PURE__ */ i.jsx("option", { value: "5", children: "Kvintti · 5" }),
          r.chord === "dom7" && /* @__PURE__ */ i.jsx("option", { value: "7", children: "Septimi · ♭7" })
        ] }) })
      ] }),
      r.mode === "caged" ? /* @__PURE__ */ i.jsx(Lt, { label: "CAGED-duurimuoto", children: /* @__PURE__ */ i.jsx("select", { value: r.shape, onChange: (v) => h("shape", v.target.value), children: ["C", "A", "G", "E", "D"].map((v) => /* @__PURE__ */ i.jsxs("option", { value: v, children: [
        v,
        "-muoto"
      ] }, v)) }) }) : /* @__PURE__ */ i.jsx(Lt, { label: "Tehtävä", children: /* @__PURE__ */ i.jsxs("select", { value: r.activity, onChange: (v) => h("activity", v.target.value), children: [
        /* @__PURE__ */ i.jsx("option", { value: "play", children: "Etsi aste otelaudalta" }),
        /* @__PURE__ */ i.jsx("option", { value: "degree", children: "Tunnista sävelen aste" })
      ] }) })
    ] }),
    r.mode === "interval" && /* @__PURE__ */ i.jsxs("fieldset", { className: "plain", children: [
      /* @__PURE__ */ i.jsx("legend", { children: "Harjoiteltavat intervallit" }),
      /* @__PURE__ */ i.jsx("div", { className: "check-row", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.intervals.includes(v), onChange: (g) => h("intervals", g.target.checked ? [...r.intervals, v] : r.intervals.filter((M) => M !== v)) }),
        cr[v]
      ] }, v)) }),
      /* @__PURE__ */ i.jsx("div", { className: "settings-grid", children: /* @__PURE__ */ i.jsx(Lt, { label: "Intervallin suunta", children: /* @__PURE__ */ i.jsxs("select", { value: r.direction, onChange: (v) => h("direction", v.target.value), children: [
        /* @__PURE__ */ i.jsx("option", { value: "both", children: "Nouseva ja laskeva" }),
        /* @__PURE__ */ i.jsx("option", { value: "up", children: "Nouseva" }),
        /* @__PURE__ */ i.jsx("option", { value: "down", children: "Laskeva" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ i.jsx(
      Yd,
      {
        legend: "Harjoittelutapa",
        name: `${c}-way`,
        value: r.hints,
        onChange: (v) => h("hints", v),
        options: ["off", "always", "fade"].map((v) => ({ value: v, ...Da[v] }))
      }
    ),
    m ? /* @__PURE__ */ i.jsx("p", { className: "tools-note", "data-testid": "input-note", children: "Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita." }) : /* @__PURE__ */ i.jsx(Yd, { legend: "Vastaustapa", name: `${c}-input`, value: r.input, onChange: (v) => h("input", v), options: [
      { value: "board", title: "Napauta otelaudalta", summary: "Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia." },
      { value: "mic", title: "Soita kitaralla", summary: "Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin." }
    ] }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Lisäasetukset: alue, kierroksen pituus ja tarkistus" }),
      /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ i.jsx(Lt, { label: "Kierroksen pituus", children: /* @__PURE__ */ i.jsxs("select", { value: r.rounds, disabled: Bn(r), onChange: (v) => h("rounds", Number(v.target.value)), children: [
          /* @__PURE__ */ i.jsx("option", { value: "10", children: "10 kysymystä" }),
          /* @__PURE__ */ i.jsx("option", { value: "20", children: "20 kysymystä" }),
          /* @__PURE__ */ i.jsx("option", { value: "0", children: "Vapaa harjoittelu" })
        ] }) }),
        !m && /* @__PURE__ */ i.jsx(Lt, { label: "Vastausten tarkistus", children: /* @__PURE__ */ i.jsxs("select", { value: Bn(r) ? "pitch" : r.check, disabled: Bn(r), onChange: (v) => h("check", v.target.value), children: [
          /* @__PURE__ */ i.jsx("option", { value: "class", children: "Sävelnimi · mikä tahansa oktaavi kelpaa" }),
          /* @__PURE__ */ i.jsx("option", { value: "pitch", children: "Tarkka sävelkorkeus · myös oktaavin on täsmättävä" })
        ] }) }),
        /* @__PURE__ */ i.jsx(Lt, { label: "Sävelnimien kirjoitusasu", children: /* @__PURE__ */ i.jsxs("select", { value: String(r.flats), onChange: (v) => h("flats", v.target.value === "true"), children: [
          /* @__PURE__ */ i.jsx("option", { value: "false", children: "Ylennykset · C♯, D♯…" }),
          /* @__PURE__ */ i.jsx("option", { value: "true", children: "Alennukset · D♭, E♭…" })
        ] }) })
      ] }),
      Bn(r) && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan." }),
      p.fixed ? /* @__PURE__ */ i.jsxs("p", { className: "tools-note", "data-testid": "area-note", children: [
        p.fixed === "shape" ? `${r.shape}-muoto` : `Boksi ${r.box}`,
        " määrää harjoitusalueen: nauhat ",
        p.min,
        "–",
        p.max,
        "."
      ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("div", { className: "check-row", role: "group", "aria-label": "Nauha-alueen pikavalinnat", children: [5, 12, 24].map((v) => /* @__PURE__ */ i.jsxs("button", { type: "button", "aria-pressed": r.min === 0 && r.max === v, onClick: () => a({ ...r, min: 0, max: v }), children: [
          "Nauhat 0–",
          v,
          v === 24 ? " · koko otelauta" : ""
        ] }, v)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ i.jsx(Lt, { label: "Ensimmäinen nauha", children: /* @__PURE__ */ i.jsx("input", { type: "number", min: "0", max: "24", value: r.min, onChange: (v) => h("min", Number(v.target.value)) }) }),
          /* @__PURE__ */ i.jsx(Lt, { label: "Viimeinen nauha", children: /* @__PURE__ */ i.jsx("input", { type: "number", min: r.min, max: "24", value: r.max, onChange: (v) => h("max", Number(v.target.value)) }) })
        ] })
      ] }),
      p.fixed !== "shape" && /* @__PURE__ */ i.jsxs("fieldset", { className: "plain", children: [
        /* @__PURE__ */ i.jsx("legend", { children: "Harjoiteltavat kielet · 1 = ohut E" }),
        /* @__PURE__ */ i.jsx("div", { className: "check-row", children: ft.map((v, g) => /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.strings.includes(g), onChange: (M) => h("strings", M.target.checked ? [...r.strings, g] : r.strings.filter((I) => I !== g)) }),
          g + 1,
          " · ",
          v
        ] }, v)) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "check-row", children: [
        L && /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.accidentals, onChange: (v) => h("accidentals", v.target.checked) }),
          " Myös ylennetyt ja alennetut sävelet"
        ] }),
        r.mode === "ear-note" && /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.reference, onChange: (v) => h("reference", v.target.checked) }),
          " Soita ensin vertailusävel A"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.weak, onChange: (v) => h("weak", v.target.checked) }),
          " Kysy useammin heikkoja ja vähän harjoiteltuja kohteita"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.advance, onChange: (v) => h("advance", v.target.checked) }),
          " Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen"
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", "data-testid": "setup-problem", children: d })
  ] });
}
const qd = { otelauta: "ear", asteikot: "scales", soinnut: "chords", kappaleet: "songs" };
function Gp(r) {
  return r && Object.hasOwn(qd, r) ? qd[r] : null;
}
const Wp = [
  { id: "ear", number: "01", title: "Sävelkorva ja otelauta", description: "Opi ensin sävelten paikat ja tunnista sitten korvalla, missä sävel soi.", example: "Etsi sävelet otelaudalta · Kuuntele ja paikanna sävel" },
  { id: "scales", number: "02", title: "Skaalat ja moodit", description: "Valitse pentatoniset tai moodit ja etene kuuntelemisesta improvisointiin.", example: "A-mollipentatoninen tai C-jooninen" },
  { id: "chords", number: "03", title: "Soinnut ja musiikin rakenne", description: "Tunnista ensin tavalliset avoimet sointuotteet. Opettele rakenne niiden jälkeen.", example: "Ensimmäinen harjoitus: Tunnista avoin sointu" },
  { id: "songs", number: "04", title: "Kappaleharjoittelu", description: "Soita oikean kappaleen mukana ja säädä mallikitaran sekä laulun kuuluvuutta.", example: "Yksi sointu, kaksi askelta (normaali / akustinen)" }
];
function Qp({ onSelect: r }) {
  return /* @__PURE__ */ i.jsxs("section", { className: "learning-home", "aria-labelledby": "learning-title", children: [
    /* @__PURE__ */ i.jsx("h2", { id: "learning-title", children: "Mitä haluat harjoitella?" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Valitse yksi polku. Näet vain olennaiset työkalut harjoittelun aloittamiseen." }),
    /* @__PURE__ */ i.jsx("div", { className: "learning-grid", children: Wp.map((a) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => r(a.id), children: [
      /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: a.number }),
      /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ i.jsx("strong", { children: a.title }),
        /* @__PURE__ */ i.jsx("span", { children: a.description }),
        /* @__PURE__ */ i.jsx("small", { children: a.example })
      ] }),
      /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, a.id)) })
  ] });
}
const Yp = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Uo = 100, Jh = "musiikin-kartta:kappale-aanenvoimakkuus:v1";
function su(r) {
  if (r === null || r.trim() === "") return Uo;
  const a = Number(r);
  return Number.isFinite(a) ? Math.round(Math.min(100, Math.max(0, a))) : Uo;
}
function Jp() {
  try {
    return su(localStorage.getItem(Jh));
  } catch {
    return Uo;
  }
}
function Xp(r) {
  try {
    localStorage.setItem(Jh, String(su(String(r))));
  } catch {
  }
}
function Zd(r, a, o = !0) {
  return o ? Yp[r] * su(String(a)) / 100 : 0;
}
function Xh(r = () => new Audio()) {
  try {
    const a = r();
    return a.volume = 0.5, Math.abs(a.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const qp = 0.12, Zp = 2e3, ev = 3;
function tv(r, a = !1) {
  return a ? !0 : r.atLoopBoundary || r.drift <= qp || r.seeking || r.readyState < ev ? !1 : r.msSinceLastFix >= Zp;
}
const nv = 1.5, iv = 0.4, sv = 0.5;
let Ho = null, rv = null;
function av(r) {
  return Ho !== null ? Ho : (rv ??= Xh()) ? 0 : iv;
}
class qh {
  constructor(a = av()) {
    this.latency = a;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(a, o, d = !1, c = performance.now()) {
    if (o.readyState < 1 || a.readyState < 1 || !d && (o.paused || a.paused)) return !1;
    const h = o.currentTime - a.currentTime, p = Math.abs(h), m = a.loop && Number.isFinite(a.duration) && Math.abs(p - a.duration) < 0.35, y = this.lastFix.get(o);
    if (!tv({
      drift: p,
      atLoopBoundary: m,
      seeking: o.seeking,
      readyState: o.readyState,
      msSinceLastFix: y === void 0 ? 1 / 0 : c - y
    }, d)) return !1;
    const L = !a.paused;
    !d && L && y !== void 0 && (this.latency = Math.min(nv, Math.max(0, this.latency - sv * h)), Ho = this.latency);
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
function lv(r = globalThis.navigator) {
  return r ? /iPhone|iPad|iPod/.test(r.userAgent) || r.platform === "MacIntel" && r.maxTouchPoints > 1 : !1;
}
function ov(r = lv(), a = () => Xh()) {
  return r ? "webaudio" : a() ? "element" : "webaudio";
}
function uv(r = globalThis.navigator) {
  const a = r?.audioSession;
  a && a.type !== "playback" && (a.type = "playback");
}
const cv = () => {
  const r = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!r) throw new Error("Web Audio API puuttuu");
  return new r();
};
class dv {
  constructor(a = cv, o = globalThis.navigator) {
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
        uv(this.nav);
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
const hv = "assets/audio/harjoittelija/am-vamp-without-guitar.mp3", fv = "assets/audio/harjoittelija/am-vamp-electric-guitar.mp3";
function eh(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Zh() {
  const r = N.useRef(null), a = N.useRef(null), [o, d] = N.useState(!1), [c, h] = N.useState(!1), [p, m] = N.useState(!1), [y, L] = N.useState(0), [v, g] = N.useState(0), [M, I] = N.useState(""), C = N.useRef(new qh());
  function w(G = !1) {
    const Q = r.current, T = a.current;
    !Q || !T || !Number.isFinite(Q.currentTime) || C.current.align(Q, T, G);
  }
  function j() {
    r.current?.pause(), a.current?.pause(), d(!1);
  }
  async function B() {
    const G = r.current, Q = a.current;
    if (!(!G || !Q)) {
      if (o) {
        j();
        return;
      }
      I(""), Q.muted = !c, Q.volume = 0.55, G.volume = 0.75, w(!0);
      try {
        await Promise.all(c ? [G.play(), Q.play()] : [G.play()]), w(), d(!0);
      } catch {
        j(), I("Ääniraitoja ei voitu käynnistää. Varmista, että molemmat MP3-tiedostot ovat paikallaan.");
      }
    }
  }
  function E(G) {
    const Q = r.current, T = a.current;
    if (!(!Q || !T || !Number.isFinite(G))) {
      Q.currentTime = G;
      try {
        T.currentTime = G;
      } catch {
      }
      L(G);
    }
  }
  function W(G) {
    const Q = r.current, T = a.current;
    if (h(G), !!T) {
      if (T.muted = !G, !G) {
        T.pause();
        return;
      }
      !Q || !o || (w(!0), T.play().catch(() => I("Mallikitaraa ei voitu käynnistää. Kokeile pysäyttää ja soittaa uudelleen.")));
    }
  }
  return N.useEffect(() => {
    const G = () => {
      document.hidden && (r.current?.pause(), a.current?.pause(), d(!1));
    };
    return document.addEventListener("visibilitychange", G), () => {
      document.removeEventListener("visibilitychange", G), r.current?.pause(), a.current?.pause();
    };
  }, []), /* @__PURE__ */ i.jsxs("div", { className: "backing-track-mixer", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "backing-track-heading", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "Am-harjoitustausta" }),
      /* @__PURE__ */ i.jsxs("div", { className: "backing-track-toggles", children: [
        /* @__PURE__ */ i.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: c,
              onChange: (G) => W(G.target.checked)
            }
          ),
          /* @__PURE__ */ i.jsx("span", { children: "Kitara kuuluu" })
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "guitar-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: p,
              onChange: (G) => m(G.target.checked)
            }
          ),
          /* @__PURE__ */ i.jsx("span", { children: "Soita looppina" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Soita itse taustan päälle. Voit ottaa mallikitaran mukaan ja pois kesken kappaleen." }),
    /* @__PURE__ */ i.jsxs("div", { className: "backing-controls", role: "group", "aria-label": "Am-harjoitustaustan soitin", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "backing-play", onClick: () => {
        B();
      }, children: o ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          "aria-label": "Siirry kappaleessa",
          type: "range",
          min: 0,
          max: v > 0 ? v : 1,
          step: 0.1,
          value: Math.min(y, v > 0 ? v : 1),
          disabled: !v,
          onChange: (G) => E(Number(G.target.value))
        }
      ),
      /* @__PURE__ */ i.jsxs("output", { className: "backing-time", "aria-live": "off", children: [
        eh(y),
        " / ",
        eh(v)
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      "audio",
      {
        ref: r,
        preload: "metadata",
        src: hv,
        loop: p,
        onLoadedMetadata: (G) => g(G.currentTarget.duration),
        onTimeUpdate: (G) => {
          L(G.currentTarget.currentTime), G.currentTarget.paused || w();
        },
        onEnded: () => {
          r.current?.loop || (a.current?.pause(), d(!1), L(v));
        },
        onPause: () => {
          a.current?.pause(), d(!1);
        },
        onError: () => I("Taustaraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-without-guitar.mp3.")
      }
    ),
    /* @__PURE__ */ i.jsx(
      "audio",
      {
        ref: a,
        preload: "metadata",
        src: fv,
        muted: !0,
        loop: p,
        onLoadedMetadata: () => {
          const G = r.current, Q = a.current;
          G?.duration && Q?.duration && Math.abs(G.duration - Q.duration) > 0.15 && I("Ääniraitojen kestot poikkeavat toisistaan. Käytä samaan aikaan vietyjä raitoja.");
        },
        onError: () => I("Mallikitaran ääniraita puuttuu tai sitä ei voida toistaa. Tarkista am-vamp-electric-guitar.mp3.")
      }
    ),
    M && /* @__PURE__ */ i.jsx("p", { className: "backing-error", role: "alert", children: M }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Molemmat raidat etenevät samaan aikaan. Mallikitaran tai loopin voi kytkeä päälle ja pois myös toiston aikana." })
  ] });
}
const mv = 4e3;
class th extends Error {
  name = "MicSetupError";
}
async function pv(r, a) {
  if (!navigator.mediaDevices?.getUserMedia) throw new th("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
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
          L = setTimeout(() => g(new th("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), mv);
        })
      ]).finally(() => clearTimeout(L));
    }
    const h = c.createMediaStreamSource(d), p = c, m = d.getAudioTracks?.()[0] ?? d.getTracks()[0], y = m?.getSettings?.() ?? {};
    return {
      context: c,
      source: h,
      stream: d,
      label: m?.label ?? "",
      deviceId: y.deviceId ?? "",
      channelCount: y.channelCount ?? 1,
      stop: () => {
        d.getTracks().forEach((L) => L.stop()), h.disconnect(), a || p.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw d.getTracks().forEach((p) => p.stop()), a || await c?.close().catch(() => {
    }), h;
  }
}
async function vv() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((a) => a.kind === "audioinput" && a.deviceId) : [];
}
var To, nh;
function kv() {
  if (nh) return To;
  nh = 1;
  function r(a) {
    if (this.size = a | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = a << 1;
    for (var o = new Array(this.size * 2), d = 0; d < o.length; d += 2) {
      const L = Math.PI * d / this.size;
      o[d] = Math.cos(L), o[d + 1] = -Math.sin(L);
    }
    this.table = o;
    for (var c = 0, h = 1; this.size > h; h <<= 1)
      c++;
    this._width = c % 2 === 0 ? c - 1 : c, this._bitrev = new Array(1 << this._width);
    for (var p = 0; p < this._bitrev.length; p++) {
      this._bitrev[p] = 0;
      for (var m = 0; m < this._width; m += 2) {
        var y = this._width - m - 2;
        this._bitrev[p] |= (p >>> m & 3) << y;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return To = r, r.prototype.fromComplexArray = function(o, d) {
    for (var c = d || new Array(o.length >>> 1), h = 0; h < o.length; h += 2)
      c[h >>> 1] = o[h];
    return c;
  }, r.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var d = 0; d < o.length; d++)
      o[d] = 0;
    return o;
  }, r.prototype.toComplexArray = function(o, d) {
    for (var c = d || this.createComplexArray(), h = 0; h < c.length; h += 2)
      c[h] = o[h >>> 1], c[h + 1] = 0;
    return c;
  }, r.prototype.completeSpectrum = function(o) {
    for (var d = this._csize, c = d >>> 1, h = 2; h < c; h += 2)
      o[d - h] = o[h], o[d - h + 1] = -o[h + 1];
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
    var o = this._out, d = this._csize, c = this._width, h = 1 << c, p = d / h << 1, m, y, L = this._bitrev;
    if (p === 4)
      for (m = 0, y = 0; m < d; m += p, y++) {
        const j = L[y];
        this._singleTransform2(m, j, h);
      }
    else
      for (m = 0, y = 0; m < d; m += p, y++) {
        const j = L[y];
        this._singleTransform4(m, j, h);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = d / h << 1;
      var M = p >>> 2;
      for (m = 0; m < d; m += p)
        for (var I = m + M, C = m, w = 0; C < I; C += 2, w += h) {
          const j = C, B = j + M, E = B + M, W = E + M, G = o[j], Q = o[j + 1], T = o[B], O = o[B + 1], P = o[E], ee = o[E + 1], Y = o[W], ve = o[W + 1], fe = G, q = Q, de = g[w], ge = v * g[w + 1], Ee = T * de - O * ge, me = T * ge + O * de, $ = g[2 * w], J = v * g[2 * w + 1], X = P * $ - ee * J, x = P * J + ee * $, A = g[3 * w], oe = v * g[3 * w + 1], V = Y * A - ve * oe, ce = Y * oe + ve * A, _ = fe + X, U = q + x, Z = fe - X, D = q - x, ae = Ee + V, z = me + ce, ie = v * (Ee - V), re = v * (me - ce), he = _ + ae, ke = U + z, we = _ - ae, $e = U - z, He = Z + re, Ye = D - ie, We = Z - re, Xe = D + ie;
          o[j] = he, o[j + 1] = ke, o[B] = He, o[B + 1] = Ye, o[E] = we, o[E + 1] = $e, o[W] = We, o[W + 1] = Xe;
        }
    }
  }, r.prototype._singleTransform2 = function(o, d, c) {
    const h = this._out, p = this._data, m = p[d], y = p[d + 1], L = p[d + c], v = p[d + c + 1], g = m + L, M = y + v, I = m - L, C = y - v;
    h[o] = g, h[o + 1] = M, h[o + 2] = I, h[o + 3] = C;
  }, r.prototype._singleTransform4 = function(o, d, c) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, y = c * 2, L = c * 3, v = p[d], g = p[d + 1], M = p[d + c], I = p[d + c + 1], C = p[d + y], w = p[d + y + 1], j = p[d + L], B = p[d + L + 1], E = v + C, W = g + w, G = v - C, Q = g - w, T = M + j, O = I + B, P = m * (M - j), ee = m * (I - B), Y = E + T, ve = W + O, fe = G + ee, q = Q - P, de = E - T, ge = W - O, Ee = G - ee, me = Q + P;
    h[o] = Y, h[o + 1] = ve, h[o + 2] = fe, h[o + 3] = q, h[o + 4] = de, h[o + 5] = ge, h[o + 6] = Ee, h[o + 7] = me;
  }, r.prototype._realTransform4 = function() {
    var o = this._out, d = this._csize, c = this._width, h = 1 << c, p = d / h << 1, m, y, L = this._bitrev;
    if (p === 4)
      for (m = 0, y = 0; m < d; m += p, y++) {
        const _e = L[y];
        this._singleRealTransform2(m, _e >>> 1, h >>> 1);
      }
    else
      for (m = 0, y = 0; m < d; m += p, y++) {
        const _e = L[y];
        this._singleRealTransform4(m, _e >>> 1, h >>> 1);
      }
    var v = this._inv ? -1 : 1, g = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      p = d / h << 1;
      var M = p >>> 1, I = M >>> 1, C = I >>> 1;
      for (m = 0; m < d; m += p)
        for (var w = 0, j = 0; w <= C; w += 2, j += h) {
          var B = m + w, E = B + I, W = E + I, G = W + I, Q = o[B], T = o[B + 1], O = o[E], P = o[E + 1], ee = o[W], Y = o[W + 1], ve = o[G], fe = o[G + 1], q = Q, de = T, ge = g[j], Ee = v * g[j + 1], me = O * ge - P * Ee, $ = O * Ee + P * ge, J = g[2 * j], X = v * g[2 * j + 1], x = ee * J - Y * X, A = ee * X + Y * J, oe = g[3 * j], V = v * g[3 * j + 1], ce = ve * oe - fe * V, _ = ve * V + fe * oe, U = q + x, Z = de + A, D = q - x, ae = de - A, z = me + ce, ie = $ + _, re = v * (me - ce), he = v * ($ - _), ke = U + z, we = Z + ie, $e = D + he, He = ae - re;
          if (o[B] = ke, o[B + 1] = we, o[E] = $e, o[E + 1] = He, w === 0) {
            var Ye = U - z, We = Z - ie;
            o[W] = Ye, o[W + 1] = We;
            continue;
          }
          if (w !== C) {
            var Xe = D, ut = -ae, Je = U, Ve = -Z, it = -v * he, Kt = -v * re, Xt = -v * ie, Et = -v * z, un = Xe + it, qt = ut + Kt, Zt = Je + Et, _t = Ve - Xt, be = m + I - w, Ut = m + M - w;
            o[be] = un, o[be + 1] = qt, o[Ut] = Zt, o[Ut + 1] = _t;
          }
        }
    }
  }, r.prototype._singleRealTransform2 = function(o, d, c) {
    const h = this._out, p = this._data, m = p[d], y = p[d + c], L = m + y, v = m - y;
    h[o] = L, h[o + 1] = 0, h[o + 2] = v, h[o + 3] = 0;
  }, r.prototype._singleRealTransform4 = function(o, d, c) {
    const h = this._out, p = this._data, m = this._inv ? -1 : 1, y = c * 2, L = c * 3, v = p[d], g = p[d + c], M = p[d + y], I = p[d + L], C = v + M, w = v - M, j = g + I, B = m * (g - I), E = C + j, W = w, G = -B, Q = C - j, T = w, O = B;
    h[o] = E, h[o + 1] = 0, h[o + 2] = W, h[o + 3] = G, h[o + 4] = Q, h[o + 5] = 0, h[o + 6] = T, h[o + 7] = O;
  }, To;
}
var yv = kv();
const gv = /* @__PURE__ */ ap(yv);
class ar {
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
    return new ar(
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
    return new ar(
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
    return new ar(a, (o) => Array(o));
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
    this._inputLength = a, this._fft = new gv(Sv(2 * a)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function jv(r) {
  const a = [];
  let o = !1, d = -1 / 0, c = -1;
  for (let h = 1; h < r.length - 1; h++)
    r[h - 1] <= 0 && r[h] > 0 ? (o = !0, c = h, d = r[h]) : r[h - 1] > 0 && r[h] <= 0 ? (o = !1, c !== -1 && a.push(c)) : o && r[h] > d && (d = r[h], c = h);
  return a;
}
function xv(r, a) {
  const [o, d, c] = [r - 1, r, r + 1], [h, p, m] = [a[o], a[d], a[c]], y = h / 2 - p + m / 2, L = -(h / 2) * (d + c) + p * (o + c) - m / 2 * (o + d), v = h * d * c / 2 - p * o * c + m * o * d / 2, g = -L / (2 * y), M = y * g * g + L * g + v;
  return [g, M];
}
class lr {
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
    return new lr(a, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(a) {
    return new lr(a, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(a) {
    return new lr(a, (o) => Array(o));
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
    this._autocorrelator = new ar(a, o), this._nsdfBuffer = o(a);
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
    const d = jv(this._nsdfBuffer);
    if (d.length === 0)
      return [0, 0];
    const c = Math.max(...d.map((y) => this._nsdfBuffer[y])), h = d.find(
      (y) => this._nsdfBuffer[y] >= this._clarityThreshold * c
    ), [p, m] = xv(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
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
function Sv(r) {
  return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
}
function wv(r) {
  const a = r * 0.17;
  let o = 2048;
  for (; o < a && o < 32768; ) o *= 2;
  return o;
}
const Nv = 0.05, Ev = 1.5;
class Cv {
  constructor(a, o = {}) {
    this.mic = a, this.opts = o;
    const d = a.context, c = wv(d.sampleRate), h = Math.max(1, Math.min(2, a.channelCount ?? 1));
    h > 1 && typeof d.createChannelSplitter == "function" && (this.splitter = d.createChannelSplitter(h), a.source.connect(this.splitter));
    for (let p = 0; p < (this.splitter ? h : 1); p++) {
      const m = d.createAnalyser();
      m.fftSize = c, m.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(m, p) : a.source.connect(m), this.analysers.push(m), this.buffers.push(new Float32Array(new ArrayBuffer(c * 4)));
    }
    this.shortLength = Math.min(c, Math.max(256, Math.round(d.sampleRate * Nv))), this.detector = lr.forFloat32Array(c), this.detector.minVolumeDecibels = -60;
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
  gate = new bv();
  onset = new Tv();
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
      centsTolerance: h = 35,
      minFreq: p = 70,
      maxFreq: m = 1450,
      onFrame: y,
      onStableNote: L
    } = this.opts, v = this.analysers.map((O, P) => (O.getFloatTimeDomainData(this.buffers[P]), ih(this.buffers[P], this.buffers[P].length - this.shortLength))), g = v.indexOf(Math.max(...v));
    g !== this.channel && v[g] > (v[this.channel] ?? 0) * Ev && (this.channel = g);
    const M = this.buffers[this.channel], I = v[this.channel], C = Mv(M, M.length - this.shortLength), w = { rms: I, peak: C, channel: this.channel, levels: v }, j = I < d, B = this.onset.feed(I, a, d);
    if (j && ih(M, 0) < d) {
      this.gate.feed(null, a, c, !0, !1), y?.({ ...w, status: "silent" });
      return;
    }
    const [E, W] = this.detector.findPitch(M, this.mic.context.sampleRate);
    if (!isFinite(E) || W < o) {
      this.gate.feed(null, a, c, j, B), y?.({ ...w, status: j ? "silent" : "unclear", clarity: isFinite(W) ? W : 0 });
      return;
    }
    if (E < p || E > m) {
      this.gate.feed(null, a, c, j, B), y?.({ ...w, status: "out-of-range", frequency: E, clarity: W });
      return;
    }
    const { midi: G, cents: Q } = yp(E);
    if (Math.abs(Q) > h) {
      this.gate.feed(null, a, c, j, B), y?.({ ...w, status: "off-pitch", frequency: E, clarity: W, midi: G, cents: Q });
      return;
    }
    y?.({ ...w, status: "pitch", frequency: E, clarity: W, midi: G, cents: Q });
    const T = this.gate.feed(G, a, c, j, B);
    T !== null && L?.({ midi: G, frequency: E, cents: Q, clarity: W, timestamp: a, heldMs: T.heldMs });
  }
}
class bv {
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
  feed(a, o, d, c, h) {
    if (c ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), a === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== a) && (this.current = { midi: a, since: o, seen: o }), this.current.seen = o;
    const p = o - this.current.since;
    return p < d ? null : (this.armed = !1, this.current = null, { midi: a, heldMs: p });
  }
}
class Tv {
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
    const c = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : a;
    return this.history.push({ time: o, rms: a }), a < d * 1.5 || a < c * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: a }], !0);
  }
}
function ih(r, a = 0) {
  const o = Math.max(0, a);
  let d = 0;
  for (let c = o; c < r.length; c++) d += r[c] * r[c];
  return Math.sqrt(d / Math.max(1, r.length - o));
}
function Mv(r, a = 0) {
  let o = 0;
  for (let d = Math.max(0, a); d < r.length; d++) {
    const c = Math.abs(r[d]);
    c > o && (o = c);
  }
  return o;
}
const vs = (r) => r > 0 ? Math.max(-90, 20 * Math.log10(r)) : -90;
let os;
function ef() {
  return (!os || os.state === "closed") && (os = new AudioContext()), os;
}
function _v() {
  const r = os;
  os = void 0, r?.close().catch(() => {
  });
}
const tf = (r) => r instanceof Error ? r.name : "";
function Av(r) {
  const a = tf(r);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(a) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : a === "NotFoundError" || a === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : a === "NotReadableError" || a === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : a === "MicSetupError" ? r.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Pv {
  constructor(a = (o) => pv(o, ef)) {
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
    let h, p = !1;
    try {
      h = await this.opener(a || void 0);
    } catch (m) {
      if (!a || c !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(tf(m))) throw m;
      h = await this.opener(void 0), p = !0;
    }
    if (c !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Cv(h, { ...o });
      const m = () => {
        this.mic === h && (this.stop(), d());
      }, y = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((L) => L.addEventListener("ended", m, { once: !0, signal: y.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && m();
      }, { signal: y.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: p };
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
function nf(r, a) {
  return r !== "on" ? r : !a || a.status === "silent" ? "silent" : a.status === "pitch" ? "pitch" : a.status === "off-pitch" ? "untuned" : "noise";
}
const sh = (r) => Math.max(0, Math.min(1, (vs(r) + 60) / 60));
function Lv(r) {
  const a = [...r].sort((d, c) => d - c), o = a[Math.min(a.length - 1, Math.floor(a.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function Mo(r) {
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
function Li(r) {
  const a = r instanceof Error ? r.message : "";
  return a === "reference-audio-resume-timeout" || a === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : r instanceof Error && r.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class Ri {
  constructor(a = ef) {
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
    if (await Mo(c), d !== this.token) return !1;
    const h = c.createGain();
    h.connect(c.destination), this.master = h;
    const p = Array.from({ length: 12 }, (L, v) => 1 / (v + 1) ** 1.3), m = c.createPeriodicWave?.(new Float32Array([0, ...p.map(() => 0)]), new Float32Array([0, ...p]));
    return a.forEach((L, v) => {
      const g = c.createOscillator(), M = c.createGain(), I = c.currentTime + 0.05 + v * 0.8;
      m ? g.setPeriodicWave(m) : g.type = "triangle", g.frequency.value = bo(L), M.gain.setValueAtTime(0, I), M.gain.linearRampToValueAtTime(0.22, I + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, I + 0.7), g.connect(M), M.connect(h), g.start(I), g.stop(I + 0.72), o && this.noteTimers.push(setTimeout(() => {
        d === this.token && o(v);
      }, 50 + v * 800));
    }), !await new Promise((L) => {
      this.settle = L, this.timer = setTimeout(() => L(!0), a.length * 800 + 350);
    }) || d !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], h.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(a, o, d, c) {
    if (this.stop(), !a.length) return !1;
    const h = this.token, p = this.provide();
    if (await Mo(p), h !== this.token) return !1;
    const m = 60 / Math.max(40, Math.min(140, o)), y = p.createGain();
    y.connect(p.destination), this.master = y;
    const L = Array.from({ length: 12 }, (C, w) => 1 / (w + 1) ** 1.3), v = p.createPeriodicWave?.(
      new Float32Array([0, ...L.map(() => 0)]),
      new Float32Array([0, ...L])
    ), g = p.currentTime + 0.05;
    let M = 0;
    return a.forEach((C, w) => {
      if (!Number.isFinite(C.beat) || C.beat < 0 || !Number.isFinite(C.duration) || C.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const j = g + C.beat * m, B = C.duration * m, E = j + Math.max(0.08, B * 0.94), W = p.createOscillator(), G = p.createGain();
      v ? W.setPeriodicWave(v) : W.type = "triangle", W.frequency.value = bo(C.midi), G.gain.setValueAtTime(0, j), G.gain.linearRampToValueAtTime(C.level ?? 0.22, j + 0.012), G.gain.exponentialRampToValueAtTime(1e-3, E - 0.01), W.connect(G), G.connect(y), W.start(j), W.stop(E), d && this.noteTimers.push(setTimeout(() => {
        h === this.token && d(w);
      }, 50 + C.beat * m * 1e3));
      const Q = a[w + 1]?.beat ?? 1 / 0;
      c && Q > C.beat + C.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && c();
      }, 50 + C.beat * m * 1e3 + B * 1e3)), M = Math.max(M, C.beat + C.duration);
    }), !await new Promise((C) => {
      this.settle = C, this.timer = setTimeout(() => C(!0), 50 + M * m * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], y.disconnect(), this.master = void 0, !0);
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
    const c = this.token, h = this.provide();
    if (await Mo(h), c !== this.token) return !1;
    const p = h.createGain();
    p.connect(h.destination), this.master = p;
    const m = Array.from({ length: 12 }, (w, j) => 1 / (j + 1) ** 1.3), y = h.createPeriodicWave?.(new Float32Array([0, ...m.map(() => 0)]), new Float32Array([0, ...m]));
    let L = 60 / Math.max(40, Math.min(140, d));
    this.adjustLoopTempo = (w) => {
      c === this.token && Number.isFinite(w) && (L = 60 / Math.max(40, Math.min(140, w)));
    };
    const v = 1.6;
    let g = h.currentTime + 0.05, M = 0;
    const I = [], C = () => {
      if (c === this.token) {
        if (g < h.currentTime - 0.02) {
          const w = Math.ceil((h.currentTime - g) / L);
          g += w * L, M = (M + w) % a.length, I.length = 0;
        }
        for (; g < h.currentTime + v; ) {
          const w = a[M], j = M, B = g, E = h.createOscillator(), W = h.createGain();
          y ? E.setPeriodicWave(y) : E.type = "triangle", E.frequency.value = bo(w), W.gain.setValueAtTime(0, B), W.gain.linearRampToValueAtTime(0.22, B + 0.012), W.gain.exponentialRampToValueAtTime(1e-3, B + L * 0.975), E.connect(W), W.connect(p), E.start(B), E.stop(B + L * 0.985), I.push({ at: B, index: j }), g += L, M = (M + 1) % a.length;
        }
        for (; I.length && I[0].at <= h.currentTime + 0.01; ) {
          const w = I.shift();
          o?.(w.index);
        }
      }
    };
    return C(), this.loopTick = setInterval(C, 25), new Promise((w) => {
      this.settle = w;
    });
  }
}
function Jt(r, a) {
  let o = 0;
  const d = a.map(([c, h, p]) => {
    const y = { position: c === null || h === null ? null : Ce(c, h), beat: o, duration: p };
    return o += p, y;
  });
  return { label: r, events: d, beats: o };
}
function ir(r, ...a) {
  let o = 0;
  const d = a.flatMap((c) => {
    const h = c.events.map((p) => ({ ...p, beat: p.beat + o }));
    return o += c.beats, h;
  });
  return { label: r, events: d, beats: o };
}
const rh = Jt("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [1, 5, 1],
  [1, 5, 1],
  [2, 7, 2],
  [null, null, 2]
]), ah = Jt("B · Vastaus", [
  [1, 5, 1],
  [2, 7, 1],
  [2, 5, 1],
  [3, 7, 1],
  [3, 7, 4]
]), $v = Jt("C · Jatko", [
  [2, 5, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [2, 5, 4]
]), lh = Jt("A · Melodian alku", [
  [3, 7, 1],
  [3, 7, 1],
  [2, 9, 1],
  [2, 9, 1],
  [2, 7, 2],
  [null, null, 2]
]), oh = Jt("B · Vastaus", [
  [2, 9, 1],
  [2, 7, 1],
  [3, 10, 1],
  [3, 7, 1],
  [3, 7, 4]
]), Rv = Jt("C · Jatko", [
  [3, 10, 1],
  [2, 7, 1],
  [2, 7, 1],
  [3, 7, 1],
  [3, 10, 4]
]), uh = Jt("A · Kysymys", [
  [1, 10, 1],
  [1, 13, 1],
  [0, 10, 2],
  [1, 13, 1],
  [1, 10, 1],
  [2, 12, 2]
]), ch = Jt("B · Vastaus", [
  [0, 12, 1],
  [0, 10, 1],
  [1, 13, 1],
  [1, 10, 1],
  [2, 12, 1],
  [2, 9, 1],
  [1, 10, 2]
]), dh = Jt("A · Ukko Nooan alku", [
  [4, 3, 1],
  [4, 3, 1],
  [4, 3, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [3, 3, 1]
]), hh = Jt("B · Ukko Nooan päätös", [
  [3, 2, 1],
  [3, 2, 1],
  [4, 5, 1],
  [4, 5, 1],
  [4, 3, 4]
]), Ov = Jt("Oma lisä: B ratkeaa C:hen", [
  [3, 5, 1],
  [2, 2, 1],
  [2, 4, 1],
  [2, 5, 1],
  [3, 5, 1],
  [2, 4, 1],
  [2, 5, 2]
]), fh = Jt("A · Siirry ylöspäin", [
  [5, 5, 1],
  [5, 8, 1],
  [5, 10, 1],
  [4, 7, 1],
  [4, 10, 1],
  [3, 7, 1],
  [3, 10, 1],
  [3, 7, 1]
]), mh = Jt("B · Palaa takaisin", [
  [4, 10, 1],
  [4, 7, 1],
  [5, 10, 1],
  [5, 8, 1],
  [5, 5, 4]
]), ph = {
  wayfaring: {
    id: "wayfaring",
    title: "Wayfaring Stranger",
    qualifier: "Perinnesävelmän alku · oma harjoitusrytmi",
    tempo: 78,
    tonic: 9,
    permitted: [9, 0, 2, 4, 7],
    fragments: [rh, ah],
    whole: ir("Melodia · A + B + C", rh, ah, $v),
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
    fragments: [lh, oh],
    whole: ir("Melodia · A + B + C", lh, oh, Rv),
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
    fragments: [uh, ch],
    whole: ir("Korkea vastaus · A + B", uh, ch),
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
    fragments: [dh, hh],
    whole: ir("Ukko Nooa · A + B", dh, hh),
    bonus: Ov,
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
    fragments: [fh, mh],
    whole: ir("Siirtymämelodia · A + B", fh, mh),
    source: "",
    note: "Alkuperäinen harjoitusmelodia opettaa liikkumaan A-mollipentatonisen position 1 ja position 2 välillä. Ei ole osa Wayfaring Stranger -sävelmää."
  }
};
function Fv(r) {
  return r.events.filter((a) => a.position !== null).map((a) => ({ midi: a.position.midi, beat: a.beat, duration: a.duration }));
}
function Iv(r, a) {
  const o = (h) => new Map(h.events.filter((p) => p.position).map((p) => [p.position.midi, p.position]).reverse()), d = o(r);
  return [...o(a).entries()].sort((h, p) => p[0] - h[0]).map(([h, p]) => {
    const m = d.get(h) ?? null;
    return { midi: h, from: m, to: p, moved: !m || m.string !== p.string || m.fret !== p.fret };
  });
}
const _o = ["e", "B", "G", "D", "A", "E"];
function ru({ pieceId: r, stage: a, onBeforePlay: o, stopHandleRef: d }) {
  const c = ph[r], [h, p] = N.useState(a === "fingering" ? "a" : "whole"), [m, y] = N.useState(c.tempo), [L, v] = N.useState(!1), [g, M] = N.useState(!1), [I, C] = N.useState(a !== "memory"), [w, j] = N.useState(!1), [B, E] = N.useState(null), [W, G] = N.useState(""), Q = N.useRef(new Ri()), T = N.useRef(0);
  function O() {
    T.current++, Q.current.stop(), j(!1), E(null);
  }
  N.useEffect(() => {
    d && (d.current = O);
    const V = () => {
      document.hidden && O();
    };
    return document.addEventListener("visibilitychange", V), () => {
      document.removeEventListener("visibilitychange", V), T.current++, Q.current.stop(), d && (d.current = null);
    };
  }, [d]);
  const P = a === "memory" ? [{ id: "whole", name: "Koko melodia", clip: c.whole }] : [
    { id: "a", name: "Osa A", clip: c.fragments[0] },
    { id: "b", name: "Osa B", clip: c.fragments[1] },
    ...c.bonus ? [{ id: "bonus", name: "Oma B → C -lisä", clip: c.bonus }] : []
  ], ee = P.find((V) => V.id === h) ?? P[0], Y = ee.clip, ve = Fv(Y), fe = B === null ? null : ve[B]?.beat ?? null, q = fe === null ? null : Y.events.find((V) => V.beat === fe)?.position ?? null, de = N.useRef(null);
  Vh(de, ".melody-playing", w && fe !== null ? String(fe) : "", { enabled: L && g, playback: w });
  const ge = Y.beats / 4, Ee = a === "fingering" && c.compareWith ? Iv(ph[c.compareWith.id].whole, c.whole) : null, me = (V) => V ? `${_o[V.string]}-kieli, ${V.fret}. nauha` : "–", $ = [...new Map(Y.events.filter((V) => V.position).map((V) => [Ue(V.position), V.position])).values()], J = $.map((V) => V.fret), X = $.filter((V) => I || q?.string === V.string && q.fret === V.fret).map((V) => ({
    ...V,
    label: Ae(V.midi),
    kind: q?.string === V.string && q.fret === V.fret ? "playing" : De(V.midi) === c.tonic ? "answer" : "shape"
  })), x = {
    strings: [...new Set($.map((V) => V.string))],
    min: Math.min(...J),
    max: Math.max(...J),
    fixed: "box"
  };
  async function A() {
    if (w) {
      O();
      return;
    }
    o?.();
    const V = ++T.current;
    Q.current.stop(), j(!0), E(null), G("");
    try {
      await Q.current.playTimed(ve, m, (ce) => {
        V === T.current && E(ce);
      }, () => {
        V === T.current && E(null);
      });
    } catch (ce) {
      V === T.current && G(Li(ce));
    } finally {
      V === T.current && (j(!1), E(null));
    }
  }
  function oe(V) {
    O(), G(""), p(V);
  }
  return /* @__PURE__ */ i.jsx("section", { className: "melody-practice", "aria-label": `Melodiaharjoitus: ${c.title}`, children: /* @__PURE__ */ i.jsxs("details", { onToggle: (V) => {
    const ce = V.currentTarget.open;
    v(ce), ce || O();
  }, children: [
    /* @__PURE__ */ i.jsx("summary", { children: a === "memory" ? `Valinnainen: pidempi melodia muistista · ${c.title}` : `Valinnainen melodiaharjoitus · ${c.title}` }),
    L && /* @__PURE__ */ i.jsxs("div", { className: "melody-practice-content", children: [
      /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: a === "memory" ? "PIDEMPI MELODIA · MUISTISTA" : "HARJOITTELE MELODIAA OTELAUDALLA" }),
      /* @__PURE__ */ i.jsx("h4", { children: c.title }),
      /* @__PURE__ */ i.jsxs("p", { className: "melody-subtitle", children: [
        c.qualifier,
        " · 4/4 · ",
        ge.toString().replace(".", ","),
        " tahtia ",
        a === "memory" ? "yhdistetyssä melodiassa" : "valitussa osassa"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "melody-instruction", children: a === "fingering" && c.compareWith ? `Sama melodia kuin ${c.compareWith.label.toLowerCase().replace("positio", "positiossa")}, samoilla sävelkorkeuksilla ja samalla rytmillä. Vain sormitus vaihtuu. Kokeile osia A ja B erikseen ja seuraa keltaista korostusta otelaudalla.` : a === "fingering" ? "Kokeile osia A ja B erikseen. Kuuntele ja seuraa keltaisella korostettua säveltä otelaudalla." : "Yhdistä aiemmin harjoitellut osat ja soita koko melodia alusta loppuun muistista. Sävelvihjeet ja tabulatuuri ovat aluksi piilossa. Kuunnellessa soiva sävel korostuu otelaudalla. Siirry tämän jälkeen improvisoimaan." }),
      Ee && c.compareWith && /* @__PURE__ */ i.jsxs("details", { className: "melody-compare", children: [
        /* @__PURE__ */ i.jsxs("summary", { children: [
          "Vertaa sormitusta: ",
          c.compareWith.label.toLowerCase(),
          " ja ",
          c.compareWith.ownLabel.toLowerCase()
        ] }),
        /* @__PURE__ */ i.jsxs("table", { className: "melody-compare-table", children: [
          /* @__PURE__ */ i.jsxs("caption", { className: "sr-only", children: [
            "Melodian sävelet: paikka ",
            c.compareWith.label.toLowerCase().replace("positio", "positiossa"),
            " ja ",
            c.compareWith.ownLabel.toLowerCase().replace("positio", "positiossa")
          ] }),
          /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Sävel" }),
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: c.compareWith.label }),
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: c.compareWith.ownLabel })
          ] }) }),
          /* @__PURE__ */ i.jsx("tbody", { children: Ee.map((V) => /* @__PURE__ */ i.jsxs("tr", { className: V.moved ? "moved" : "", children: [
            /* @__PURE__ */ i.jsx("th", { scope: "row", children: Ae(V.midi, !1, !0) }),
            /* @__PURE__ */ i.jsx("td", { children: me(V.from) }),
            /* @__PURE__ */ i.jsx("td", { children: V.moved ? /* @__PURE__ */ i.jsx("strong", { children: me(V.to) }) : me(V.to) })
          ] }, V.midi)) })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Lihavoidut sävelet soitetaan uudessa käsiasemassa eri kieleltä. Muut pysyvät samassa paikassa." })
      ] }),
      a === "fingering" && c.bonus && /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
        "Oma B → C -lisä on ",
        /* @__PURE__ */ i.jsx("strong", { children: "erillinen harjoitus" }),
        ", ei osa ",
        c.title,
        " -sävelmää."
      ] }),
      a !== "memory" && /* @__PURE__ */ i.jsx("div", { className: "melody-choices", role: "group", "aria-label": "Valitse melodiaharjoituksen osa", children: P.map((V) => /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": ee.id === V.id,
          onClick: () => oe(V.id),
          children: V.name
        },
        V.id
      )) }),
      /* @__PURE__ */ i.jsxs("div", { className: "melody-controls", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": w, onClick: () => {
          A();
        }, children: w ? "■ Pysäytä melodia" : a === "memory" ? "▶ Kuuntele koko melodia kerran" : "▶ Kuuntele valittu melodia kerran" }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          "Tempo",
          /* @__PURE__ */ i.jsx("select", { value: m, onChange: (V) => {
            O(), y(Number(V.target.value));
          }, children: [60, 75, 84, 96, 108].concat([c.tempo]).sort((V, ce) => V - ce).filter((V, ce, _) => _.indexOf(V) === ce).map((V) => /* @__PURE__ */ i.jsxs("option", { value: V, children: [
            V,
            " BPM"
          ] }, V)) })
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": g, onClick: () => M((V) => !V), children: g ? "Piilota tabulatuuri" : "Näytä tabulatuuri" })
      ] }),
      W && /* @__PURE__ */ i.jsx("p", { role: "alert", className: "error", children: W }),
      /* @__PURE__ */ i.jsx("p", { className: "melody-now", "aria-live": "polite", children: w && B !== null ? `Nyt soi ${Ae(ve[B].midi)} · ${_o[q.string]}-kieli, ${q.fret}. nauha` : w ? "Melodia soi kerran ja pysähtyy itsestään." : "Kuuntele malli tai soita katkelma itse." }),
      /* @__PURE__ */ i.jsxs("div", { className: "melody-board", "aria-label": "Melodian sävelet otelaudalla", children: [
        /* @__PURE__ */ i.jsx(bn, { area: x, marks: X, disabled: !0, follow: "playing", playback: w, caption: `${c.title}, ${ee.name}` }),
        /* @__PURE__ */ i.jsxs("div", { className: "melody-board-actions", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": I,
              onClick: () => C((V) => !V),
              children: I ? "Piilota otelaudan sävelvihjeet" : "Näytä otelaudan sävelvihjeet"
            }
          ),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Keltainen korostus kertoo soivan sävelen sekä oikean kielen ja nauhan. Muistiharjoituksessa muut sävelet voi pitää piilossa." })
        ] })
      ] }),
      g && /* @__PURE__ */ i.jsxs("div", { ref: de, className: "melody-tab-scroll", tabIndex: 0, role: "region", "aria-label": "Melodian tabulatuuri", children: [
        /* @__PURE__ */ i.jsxs("table", { className: "melody-tab", "aria-label": `${c.title}, ${ee.name}, kitaratabulatuuri`, children: [
          /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
            /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Kieli" }),
            Y.events.map((V, ce) => /* @__PURE__ */ i.jsxs("th", { scope: "col", className: V.beat % 4 === 0 ? "bar-start" : "", children: [
              /* @__PURE__ */ i.jsx("span", { className: "melody-bar", children: V.beat % 4 === 0 ? `T${Math.floor(V.beat / 4) + 1}` : "·" }),
              /* @__PURE__ */ i.jsx("span", { className: "melody-duration", children: V.duration === 1 ? "♩" : `${V.duration} iskua` })
            ] }, ce))
          ] }) }),
          /* @__PURE__ */ i.jsx("tbody", { children: _o.map((V, ce) => /* @__PURE__ */ i.jsxs("tr", { children: [
            /* @__PURE__ */ i.jsx("th", { scope: "row", children: V }),
            Y.events.map((_, U) => {
              const Z = _.position?.string === ce, D = Z && fe === _.beat;
              return /* @__PURE__ */ i.jsx(
                "td",
                {
                  className: `${_.beat % 4 === 0 ? "bar-start " : ""}${D ? "melody-playing " : ""}${Z && De(_.position.midi) === c.tonic ? "melody-root" : ""}`,
                  "aria-label": Z ? `${V}-kieli, ${_.position.fret}. nauha, ${Ae(_.position.midi)}` : void 0,
                  children: Z ? _.position.fret : "—"
                },
                U
              );
            })
          ] }, ce)) })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "e = ohut kieli, E = paksu kieli. ♩ = yksi isku. Muut arvot ilmoittavat keston iskuina; tyhjät kentät tarkoittavat ettei kyseistä kieltä soiteta. Sävelen soidessa sen nauha korostuu." })
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: c.note }),
      c.source && /* @__PURE__ */ i.jsx("p", { className: "melody-source", children: /* @__PURE__ */ i.jsx("a", { href: c.source, target: "_blank", rel: "noreferrer", children: "Melodian lähde" }) })
    ] })
  ] }) });
}
const Go = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [1, 2]), sf = [...new Map(Go.flatMap((r) => r.positions[0].strings.flatMap((a, o) => a.map((d) => {
  const c = Ce(o, d);
  return [Ue(c), c];
})))).values()].sort((r, a) => r.midi - a.midi || a.string - r.string), Oa = [5, 4, 3, 2, 1, 0].flatMap((r) => sf.filter((a) => a.string === r).sort((a, o) => a.fret - o.fret)), Wo = [
  ...Oa,
  ...Oa.slice(1, -1).reverse()
], Dv = [...Wo, Oa[0]], vh = new Set(
  Go[0].positions[0].strings.flatMap((r, a) => r.map((o) => {
    const d = Ce(a, o);
    return Ue(d);
  })).filter((r) => Go[1].positions[0].strings.flatMap((a, o) => a.map((d) => Ue(Ce(o, d)))).includes(r))
), zv = [
  Ce(5, 5),
  Ce(5, 8),
  Ce(5, 10),
  Ce(4, 7),
  Ce(4, 10),
  Ce(3, 7),
  Ce(3, 10),
  Ce(3, 7),
  Ce(4, 10),
  Ce(4, 7),
  Ce(5, 10),
  Ce(5, 8),
  Ce(5, 5)
], rf = "musiikin-kartta:skaalapolku:bridge-1-2:v1", af = "musiikin-kartta:skaalapolku:bridge-tempo:v1", Ao = [
  { title: "Löydä yhteiset sävelet", detail: "Tunnista, missä kaksi boksia liittyvät toisiinsa." },
  { title: "Soita koko asteikko", detail: "Soita kaikkien kuuden kielen sävelpaikat ja harjoittele käsiaseman vaihto." },
  { title: "Yhdistä muistista", detail: "Soita koko 18 sävelpaikan sormitus ilman otelautavihjeitä." },
  { title: "Improvisoi kahdella positiolla", detail: "Rakenna fraaseja molempien boksien sävelistä." },
  { title: "Yhdistäminen harjoiteltu", detail: "Palaa kertaamaan kummankin position yhteistä otelauta-aluetta." }
], kh = (r) => De(r) === 9;
function yh() {
  try {
    const r = Number(localStorage.getItem(rf));
    return Number.isInteger(r) ? Math.max(0, Math.min(4, r)) : 0;
  } catch {
    return 0;
  }
}
function Bv() {
  try {
    const r = Number(localStorage.getItem(af));
    return Number.isInteger(r) && r >= 40 && r <= 140 && r % 5 === 0 ? r : 75;
  } catch {
    return 75;
  }
}
function Vv({ onBack: r, onPosition: a }) {
  const [o, d] = N.useState(yh), [c, h] = N.useState(yh), [p, m] = N.useState(!1), [y, L] = N.useState("roots"), [v, g] = N.useState(Bv), [M, I] = N.useState(null), [C, w] = N.useState(null), [j, B] = N.useState(""), E = N.useRef(new Ri()), W = N.useRef(0), G = N.useRef(null), Q = C === null ? null : Wo[C];
  function T() {
    G.current?.(), W.current++, E.current.stop(), I(null), w(null);
  }
  N.useEffect(() => {
    const q = () => {
      document.hidden && (W.current++, E.current.stop(), I(null), w(null));
    };
    return document.addEventListener("visibilitychange", q), () => {
      document.removeEventListener("visibilitychange", q), W.current++, E.current.stop();
    };
  }, []);
  async function O(q) {
    G.current?.();
    const de = ++W.current;
    E.current.stop(), w(null), B(""), I(q);
    try {
      q === "transition" ? await E.current.play(zv.map((ge) => ge.midi)) : q === "once" ? await E.current.play(Dv.map((ge) => ge.midi)) : await E.current.loop(Wo.map((ge) => ge.midi), (ge) => {
        de === W.current && w(ge);
      }, v);
    } catch (ge) {
      de === W.current && B(Li(ge));
    } finally {
      de === W.current && (I(null), w(null));
    }
  }
  function P(q) {
    const de = Math.max(40, Math.min(140, q));
    g(de), E.current.setLoopTempo(de);
    try {
      localStorage.setItem(af, String(de));
    } catch {
    }
  }
  function ee(q) {
    q > o || (T(), h(q), m(!1), L("roots"));
  }
  function Y() {
    T();
    const q = Math.min(4, c + 1);
    if (h(q), m(!1), L("roots"), q > o) {
      d(q);
      try {
        localStorage.setItem(rf, String(q));
      } catch {
      }
    }
  }
  const ve = (q, de) => c < 2 || c === 2 && p && vh.has(de) || c === 3 && (y === "all" || y === "roots" && kh(q)), fe = sf.filter((q) => ve(q.midi, Ue(q))).map((q) => ({
    ...q,
    label: c < 2 || c === 2 && p || c === 3 && y === "all" ? Ae(q.midi) : "A",
    kind: c < 2 && Q?.string === q.string && Q?.fret === q.fret ? "playing" : kh(q.midi) ? "answer" : vh.has(Ue(q)) ? "anchor" : "shape"
  }));
  return /* @__PURE__ */ i.jsxs("section", { className: "scale-journey scale-bridge", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      T(), r();
    }, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · VAIHE 3" }),
    /* @__PURE__ */ i.jsx("h2", { id: "scale-path-title", children: "A-mollipentatoninen · positioiden 1 ja 2 yhdistäminen" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Opettele liikkumaan kahden tutun boksin välillä, älä vain muistamaan kahta erillistä kuviota." }),
    /* @__PURE__ */ i.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ i.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat 5–10 · 6 kieltä"
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
        T(), a(1);
      }, children: "Positio 1" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
        T(), a(2);
      }, children: "Positio 2" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": "true", onClick: () => ee(0), children: "Yhdistä 1 + 2" })
    ] }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps", "aria-label": "Positioiden 1 ja 2 yhdistämisen harjoitukset", children: Ao.map((q, de) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: de === c ? "journey-step current" : "journey-step",
        "aria-current": de === c ? "step" : void 0,
        disabled: de > o,
        onClick: () => ee(de),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: de > o ? "🔒" : de < o ? "✓" : de + 1 }),
          /* @__PURE__ */ i.jsx("span", { children: q.title })
        ]
      },
      q.title
    )) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "lesson-title", children: Ao[c].title }),
        /* @__PURE__ */ i.jsx("span", { children: c === 4 ? "Valmis" : `Harjoitus ${c + 1} / 4` })
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: Ao[c].detail }),
      c < 4 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        c === 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("p", { children: "Kummassakin positiossa on 12 sävelpaikkaa, mutta yhteisiä paikkoja on kuusi. Niinpä näet yhteensä 18 erillistä paikkaa, et 24:ää. Koko asteikon mallisoitto käy nämä kaikki läpi kuudella kielellä ylös ja alas." }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "Violetit reunustetut sävelet" }),
            " kuuluvat molempiin bokseihin. Vihreät A:t ovat pohjasäveliä. D-kielen 7. nauha on sekä yhteinen sävel että A-pohjasävel. Koko yhdistetyllä otelaudalla on neljä A-pohjasävelpaikkaa."
          ] })
        ] }),
        c === 1 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs("p", { children: [
            "Soita ensin koko yhdistetty asteikko paksulta E-kieleltä ohuelle e-kielelle. Jokaisella kielellä on kolme eri nauhapaikkaa, yhteensä ",
            /* @__PURE__ */ i.jsxs("strong", { children: [
              Oa.length,
              " paikkaa"
            ] }),
            ". Palaa samaa reittiä alas. Yhteiset sävelet muodostavat kohdat, joista pääset positiosta toiseen."
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            "Erillisessä lyhyessä siirtymäfraasissa harjoittelet paksulla E-kielellä ",
            /* @__PURE__ */ i.jsx("strong", { children: "5 (A) → 8 (C) → 10 (D)" }),
            " sekä sen jälkeen A- ja D-kieliä. Se on vain käsiaseman vaihdon harjoitus, ei koko asteikko. Vaihda käsiasemaa rauhallisesti, älä venytä sormia väkisin."
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "Osa sävelkorkeuksista toistuu eri kielillä. Se on tarkoituksellista: harjoittelet myös niiden paikkojen löytämistä otelaudalta." })
        ] }),
        c === 2 && /* @__PURE__ */ i.jsx("p", { children: "Soita koko yhdistetty 18 paikan asteikko kuudella kielellä ylös ja alas muistista. Sävelet eivät näy oletuksena. Voit pyytää näkyviin vain molempien boksien kuusi yhteistä sävelpaikkaa. Palaa edelliseen vaiheeseen, jos tarvitset koko kuvion." }),
        c === 3 && /* @__PURE__ */ i.jsx("p", { children: "Kuuntele ensin koko yhdistetty asteikko tai lyhyt siirtymäfraasi. Soita Am-taustan päälle sitten kahden tahdin fraasi 1. positiosta ja vastaa siihen 2. positiosta. Käytä samoja yhteisiä säveliä siirtymäkohtina. Kokeile lopettaa A-säveleen ja pidä fraasien välissä taukoja." }),
        c === 2 && /* @__PURE__ */ i.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Siirtymäharjoituksen tempo", children: [
          /* @__PURE__ */ i.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: v <= 40, "aria-label": "Hidasta tempoa 5 BPM", onClick: () => P(v - 5), children: "− 5" }),
          /* @__PURE__ */ i.jsxs("output", { "aria-label": "Nykyinen tempo", children: [
            v,
            " BPM"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: v >= 140, "aria-label": "Nopeuta tempoa 5 BPM", onClick: () => P(v + 5), children: "+ 5" }),
          /* @__PURE__ */ i.jsx("small", { children: "Yksi sävel / isku. Voit muuttaa tempoa myös toiston aikana." })
        ] }),
        c < 3 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "whole",
              onClick: () => M === "whole" ? T() : void O("whole"),
              children: M === "whole" ? "■ Pysäytä koko asteikko" : "▶ Toista koko asteikko jatkuvasti"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "once",
              onClick: () => M === "once" ? T() : void O("once"),
              children: M === "once" ? "■ Pysäytä mallisoitto" : "▶ Kuuntele koko asteikko kerran"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": M === "transition",
              onClick: () => M === "transition" ? T() : void O("transition"),
              children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele lyhyt siirtymäfraasi"
            }
          )
        ] }),
        c === 2 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": p, onClick: () => m((q) => !q), children: p ? "Piilota yhteiset sävelet" : "Näytä yhteiset sävelet" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => ee(1), children: "← Palaa sormitukseen" })
        ] }),
        c === 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs("fieldset", { className: "hint-segments", children: [
            /* @__PURE__ */ i.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
            [
              { value: "roots", name: "Vain A-pohjasävelet" },
              { value: "all", name: "Molemmat positiot" },
              { value: "none", name: "Ei vihjeitä" }
            ].map((q) => /* @__PURE__ */ i.jsxs("label", { children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "radio",
                  name: "bridge-hints",
                  value: q.value,
                  checked: y === q.value,
                  onChange: () => L(q.value)
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: q.name })
            ] }, q.value))
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => M === "once" ? T() : void O("once"), children: M === "once" ? "■ Pysäytä koko asteikko" : "▶ Kuuntele koko asteikko kerran" }),
            /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => M === "transition" ? T() : void O("transition"), children: M === "transition" ? "■ Pysäytä siirtymäfraasi" : "▶ Kuuntele siirtymäfraasi" })
          ] })
        ] }),
        c !== 3 && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: M === "whole" ? Q && c < 2 ? `Nyt soi ${Ae(Q.midi, !1, !0)} · ${ft[Q.string]}-kieli, nauha ${Q.fret}.` : "Koko yhdistetyn asteikon toisto käynnissä. Pysäytä painikkeesta." : M === "once" ? "Koko asteikko soi kerran kuudella kielellä ylös ja alas." : M === "transition" ? "Lyhyt siirtymäfraasi soi kolmella paksuimmalla kielellä." : "Koko mallisoitto kattaa kaikki kuusi kieltä. Lyhyt siirtymäfraasi harjoittaa vain käsiaseman vaihtoa." }),
        j && /* @__PURE__ */ i.jsx("p", { role: "alert", className: "error", children: j }),
        /* @__PURE__ */ i.jsx(
          bn,
          {
            area: { strings: [0, 1, 2, 3, 4, 5], min: 5, max: 10, fixed: "box" },
            disabled: !0,
            follow: "playing",
            playback: M,
            marks: fe,
            caption: "A-mollipentatoninen, positiot 1 ja 2"
          }
        ),
        /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
          c === 2 ? p ? "Näkyvissä ovat vain kuusi yhteistä sävelpaikkaa." : "Otelauta on ilman sävelvihjeitä." : c === 3 ? y === "roots" ? "Näkyvissä ovat vain A-pohjasävelet." : y === "all" ? "Kaikki 18 paikkaa näkyvät, yhteiset sävelet on merkitty." : "Otelauta ilman vihjeitä." : "Yhteiset sävelet on reunustettu, A-pohjasävelet ovat vihreitä.",
          " Arvioit itse, miten soittaminen sujui."
        ] }),
        (c === 1 || c === 2) && /* @__PURE__ */ i.jsx(
          ru,
          {
            pieceId: "pentatonic-bridge",
            stage: c === 1 ? "fingering" : "memory",
            onBeforePlay: T,
            stopHandleRef: G
          },
          `bridge:${c}`
        ),
        c === 3 && /* @__PURE__ */ i.jsx(Zh, {}),
        /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ i.jsx("p", { children: c === 0 ? "Etsi yhteiset sävelet jokaiselta kieleltä ennen siirtymistä varsinaiseen soittoon." : c === 1 ? "Jatka, kun pääset kolmella kielellä kumpaankin suuntaan ilman pysähdyksiä." : c === 2 ? "Jatka, kun löydät siirtymäkohdat ilman koko asteikon kuvaa." : "Jatka, kun olet soittanut kahden position välisiä fraaseja taustan päälle." }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: Y, children: c === 3 ? "Kirjaa yhdistäminen harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Eteneminen perustuu omaan arvioosi, ei mikrofonilla mitattuun soittotulokseen." })
        ] })
      ] }),
      c === 4 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Hallussa: kaksi positiota" }),
        /* @__PURE__ */ i.jsx("p", { children: "Olet harjoitellut kahden boksin yhdistämistä. Kolmas positio on nyt käytettävissä. Voit myös palata muistiharjoitukseen ja kerrata kumpaa tahansa aikaisempaa positiota." }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => ee(2), children: "Kertaa muistiharjoitus" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => a(1), children: "Kertaa positio 1" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => a(2), children: "Kertaa positio 2" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => a(3), children: "Siirry positioon 3 →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ i.jsx("p", { children: o === 4 ? "Positio 3 käytettävissä" : "🔒 Positio 3" }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Positio 3 avautuu, kun kirjaat yhdistämisharjoituksen suoritetuksi. Kahden position kertaus säilyy käytettävissä." })
    ] })
  ] });
}
const or = "musiikin-kartta:skaalapolku:v1", Ma = "musiikin-kartta:skaalapolku:position-2:v1", Po = "musiikin-kartta:skaalapolku:position-3:v1", _a = "musiikin-kartta:skaalapolku:bridge-1-2:v1", Fa = "musiikin-kartta:skaalapolku:active-position:v1", lf = "musiikin-kartta:skaalapolku:tempo:v1", hs = 75, Qo = 40, Yo = 140;
function Kv() {
  try {
    const r = localStorage.getItem(lf);
    if (r === null) return hs;
    const a = Number(r);
    return Number.isInteger(a) && a >= Qo && a <= Yo && a % 5 === 0 ? a : hs;
  } catch {
    return hs;
  }
}
const Lo = [
  { title: "Kuuntele ja tutustu", detail: "Kuule ensin asteikko ja pieni melodinen esimerkki." },
  { title: "Soita ylös ja alas", detail: "Opettele valitun position sormitus rauhallisesti." },
  { title: "Soita muistista", detail: "Soita ilman otelautavihjeitä. Pyydä tarvittaessa vain pohjasävelet näkyviin." },
  { title: "Improvisoi taustan päälle", detail: "Muodosta omia fraaseja samoista sävelistä." },
  { title: "Positio harjoiteltu", detail: "Palaa harjoitukseen ja kertaa myöhemmin." }
], gh = [
  { value: "roots", label: "Vain pohjasävelet", note: "Näkyvissä ovat vain A-pohjasävelet." },
  { value: "scale", label: "Koko pentatoninen", note: "Näkyvissä on valitun position koko A-mollipentatoninen. A-pohjasävelet on korostettu." },
  { value: "none", label: "Ei sävelvihjeitä", note: "Otelauta on ilman sävelmerkintöjä: improvisoi muistista." }
], jh = { 1: "wayfaring", 2: "wayfaring-p2", 3: "high-answer" };
function Cn(r = or) {
  try {
    const a = Number(localStorage.getItem(r));
    return Number.isInteger(a) ? Math.max(0, Math.min(4, a)) : 0;
  } catch {
    return 0;
  }
}
function $o() {
  try {
    const r = localStorage.getItem(Fa);
    return r === "3" && Cn(_a) === 4 ? 3 : Cn(or) === 4 && (r === "2" || r === "bridge") ? 2 : 1;
  } catch {
    return 1;
  }
}
function Uv() {
  try {
    return Cn(Ma) === 4 && localStorage.getItem(Fa) === "bridge";
  } catch {
    return !1;
  }
}
function Hv({ onBack: r }) {
  const [a, o] = N.useState($o), [d, c] = N.useState(Uv), [h, p] = N.useState(() => ({
    1: Cn(or),
    2: Cn(Ma),
    3: Cn(Po)
  })), [m, y] = N.useState(() => Cn($o() === 3 ? Po : $o() === 2 ? Ma : or)), L = h[a], [v, g] = N.useState(!1), [M, I] = N.useState("roots"), [C, w] = N.useState(Kv), [j, B] = N.useState(null), [E, W] = N.useState(null), [G, Q] = N.useState(""), T = N.useRef(new Ri()), O = N.useRef(0), P = N.useRef(null);
  function ee(_) {
    const U = Math.max(Qo, Math.min(Yo, _));
    w(U), T.current.setLoopTempo(U);
    try {
      localStorage.setItem(lf, String(U));
    } catch {
    }
  }
  function Y() {
    P.current?.(), O.current++, T.current.stop(), B(null), W(null);
  }
  N.useEffect(() => {
    const _ = () => {
      document.hidden && (O.current++, T.current.stop(), B(null), W(null));
    };
    return document.addEventListener("visibilitychange", _), () => {
      document.removeEventListener("visibilitychange", _), O.current++, T.current.stop();
    };
  }, []);
  const ve = Ie.fingeringBoxes(9, Ie.SCALES.mp, "pentatonic", [a])[0].positions[0], fe = ve.strings.flatMap((_, U) => _.map((Z) => Ce(U, Z))).sort((_, U) => _.midi - U.midi || U.string - _.string), q = [...fe, ...fe.slice(1, -1).reverse()], de = E === null ? null : q[E], ge = a === 1 ? [69, 72, 69, 67, 64, 67, 69] : a === 2 ? [69, 72, 74, 72, 69, 67, 69] : [69, 72, 74, 76, 74, 72, 69], Ee = ve.start, me = ve.end, $ = (_) => De(_) === 9, J = (_) => m < 2 ? !0 : m === 2 ? v && $(_) : M === "scale" || M === "roots" && $(_), X = fe.filter((_) => J(_.midi)).map((_) => ({
    ..._,
    label: m < 2 || m === 3 && M === "scale" ? Ae(_.midi) : "A",
    kind: m < 2 && de?.string === _.string && de.fret === _.fret ? "playing" : $(_.midi) ? "answer" : "shape"
  }));
  async function x(_) {
    P.current?.();
    const U = ++O.current;
    T.current.stop(), W(null), Q(""), B(_);
    try {
      _ === "phrase" ? await T.current.play(ge) : await T.current.loop(q.map((Z) => Z.midi), (Z) => {
        U === O.current && W(Z);
      }, m === 2 ? C : hs);
    } catch (Z) {
      U === O.current && Q(Li(Z));
    } finally {
      U === O.current && (B(null), W(null));
    }
  }
  function A() {
    Y();
    const _ = Math.min(4, m + 1);
    if (y(_), g(!1), I("roots"), _ > L) {
      p((Z) => ({ ...Z, [a]: _ }));
      const U = a === 1 ? or : a === 2 ? Ma : Po;
      try {
        localStorage.setItem(U, String(_));
      } catch {
      }
    }
  }
  function oe(_) {
    _ > L || (Y(), y(_), g(!1), I("roots"));
  }
  function V(_) {
    if (!(_ === 2 && h[1] < 4) && !(_ === 3 && Cn(_a) < 4)) {
      Y(), c(!1), o(_), y(h[_]), g(!1), I("roots"), Q("");
      try {
        localStorage.setItem(Fa, String(_));
      } catch {
      }
    }
  }
  function ce() {
    if (!(h[2] < 4)) {
      Y(), c(!0), g(!1), Q("");
      try {
        localStorage.setItem(Fa, "bridge");
      } catch {
      }
    }
  }
  return d ? /* @__PURE__ */ i.jsx(Vv, { onBack: r, onPosition: V }) : /* @__PURE__ */ i.jsxs("section", { className: "scale-journey", "aria-labelledby": "scale-path-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      Y(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ i.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · VAIHE ",
      a
    ] }),
    /* @__PURE__ */ i.jsxs("h2", { id: "scale-path-title", children: [
      "A-mollipentatoninen · positio ",
      a
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-8.html#pentatoniikka", children: "Lue tämän harjoituksen teoria: Pentatoniikka →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Yksi asteikko, yksi positio. Kuuntele, opettele, soita muistista ja kokeile sitten omia melodioita." }),
    /* @__PURE__ */ i.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ i.jsx("strong", { children: "A · C · D · E · G" }),
      " · Nauhat ",
      Ee,
      "–",
      me,
      " · 6 kieltä"
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava positio", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": a === 1, onClick: () => V(1), children: "Positio 1" }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 2,
          disabled: h[1] < 4,
          onClick: () => V(2),
          children: "Positio 2"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          disabled: h[2] < 4,
          onClick: ce,
          children: "Yhdistä 1 + 2"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": a === 3,
          disabled: Cn(_a) < 4,
          onClick: () => V(3),
          children: "Positio 3"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps", "aria-label": `Position ${a} harjoitukset`, children: Lo.map((_, U) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: U === m ? "journey-step current" : "journey-step",
        "aria-current": U === m ? "step" : void 0,
        disabled: U > L,
        onClick: () => oe(U),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: U > L ? "🔒" : U < L ? "✓" : U + 1 }),
          /* @__PURE__ */ i.jsx("span", { children: U === 4 ? `Positio ${a} harjoiteltu` : _.title })
        ]
      },
      _.title
    )) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "lesson-title", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "lesson-title", children: m === 4 ? `Positio ${a} harjoiteltu` : Lo[m].title }),
        /* @__PURE__ */ i.jsx("span", { children: m === 4 ? "Valmis" : `Harjoitus ${m + 1} / 4` })
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: Lo[m].detail }),
      m < 4 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        m === 0 && /* @__PURE__ */ i.jsxs("p", { children: [
          "Toista asteikkoa jatkuvasti ja seuraa, miten juuri soiva sävel korostuu otelaudalla. Asteikko jatkuu tauotta ylös ja alas, kunnes pysäytät sen. ",
          a === 1 ? "Tässä vaiheessa keskitytään vain asteikon säveliin." : "Kuuntele myös lyhyt mallifraasi.",
          " Ääni on syntetisoitu."
        ] }),
        m === 0 && a === 2 && /* @__PURE__ */ i.jsx("p", { children: "Positio 2 alkaa paksun E-kielen C-sävelestä (8. nauha), ei A:sta. A-pohjasävelet löytyvät D-kielen 7. ja B-kielen 10. nauhalta. Huomaa, miten kuvio jatkuu position 1 yläreunasta." }),
        m === 0 && a === 3 && /* @__PURE__ */ i.jsx("p", { children: "Positio 3 alkaa paksun E-kielen D-sävelestä 10. nauhalta ja jatkuu nauhoille 9–13. B-kielen 10. ja A-kielen 12. nauha ovat A-pohjasäveliä. Position 2 ylimmät sävelet ovat tämän position alempia säveliä, joten voit liikkua tutun yhteisen sävelen kautta ilman sävellajin vaihtumista." }),
        m === 1 && /* @__PURE__ */ i.jsx("p", { children: "Soita paksulta E-kieleltä alkaen jokaisen kielen alempi ja ylempi sävel, kunnes saavut ohuelle E-kielelle. Palaa samaa reittiä alas. Jatkuva mallisoitto etenee tasaisessa sykkeessä, ja otelauta näyttää juuri soivan sävelen. Soita mukana ja pysäytä toisto tarvittaessa." }),
        m === 2 && /* @__PURE__ */ i.jsx("p", { children: "Soita positio ylös ja alas ulkomuistista. Otelauta on aluksi ilman merkintöjä. Säädä mallisoiton tempo itsellesi sopivaksi. Jos tarvitset apua, näytä vain A-pohjasävelet. Jos koko kuvio unohtui, palaa edelliseen opetukseen." }),
        m === 3 && /* @__PURE__ */ i.jsxs("p", { children: [
          a === 1 ? "Käytä aiemmin muistista soitettua melodiaa omien fraasien lähtökohtana. " : "Kuuntele mallifraasi. ",
          "Käynnistä sitten Am-tausta ilman sähkökitaraa ja soita aluksi vain 2–3 eri säveltä. Halutessasi voit kytkeä mallikitaran mukaan kesken toiston. Kokeile taukoja, toistoa ja pitkää lopetussäveltä A."
        ] }),
        m === 2 && /* @__PURE__ */ i.jsxs("div", { className: "scale-tempo", role: "group", "aria-label": "Asteikon toiston tempo", children: [
          /* @__PURE__ */ i.jsx("span", { children: "Tempo" }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Hidasta tempoa 5 BPM",
              disabled: C <= Qo,
              onClick: () => ee(C - 5),
              children: "− 5"
            }
          ),
          /* @__PURE__ */ i.jsxs("output", { "aria-live": "polite", "aria-label": "Nykyinen tempo", children: [
            C,
            " BPM"
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Nopeuta tempoa 5 BPM",
              disabled: C >= Yo,
              onClick: () => ee(C + 5),
              children: "+ 5"
            }
          ),
          C !== hs && /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "tempo-reset",
              onClick: () => ee(hs),
              children: "Palauta 75 BPM"
            }
          ),
          /* @__PURE__ */ i.jsx("small", { children: "Yksi sävel / isku. Voit säätää myös toiston aikana." })
        ] }),
        m !== 3 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": j === "loop",
              onClick: () => j === "loop" ? Y() : void x("loop"),
              children: j === "loop" ? "■ Pysäytä asteikon toisto" : "▶ Toista asteikkoa jatkuvasti"
            }
          ),
          a !== 1 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => j === "phrase" ? Y() : void x("phrase"), children: j === "phrase" ? "■ Pysäytä fraasi" : "▶ Kuuntele mallifraasi" })
        ] }),
        m !== 3 && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: j === "loop" ? de && m < 2 ? `Jatkuva toisto käynnissä · Nyt soi: ${Ae(de.midi, !1, !0)} · ${ft[de.string]}-kieli, nauha ${de.fret}.` : "Jatkuva toisto käynnissä. Pysäytä se painikkeesta." : "Toista asteikkoa ilman taukoa kierrosten välillä. Pysäytä painikkeesta tai vaihda vaihetta." }),
        G && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: G }),
        m >= 1 && m <= 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          m === 2 && /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
            /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": v, onClick: () => g((_) => !_), children: v ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
            /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => oe(1), children: "← Palaa edelliseen opetukseen" })
          ] }),
          m === 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("fieldset", { className: "hint-segments", children: [
              /* @__PURE__ */ i.jsx("legend", { children: "Sävelvihjeet otelaudalla" }),
              gh.map((_) => /* @__PURE__ */ i.jsxs("label", { children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "impro-hints",
                    value: _.value,
                    checked: M === _.value,
                    onChange: () => I(_.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: _.label })
              ] }, _.value))
            ] }),
            a !== 1 && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
              x("phrase");
            }, children: "▶ Mallifraasi" }) })
          ] }),
          /* @__PURE__ */ i.jsx(bn, { area: { strings: [0, 1, 2, 3, 4, 5], min: Ee, max: me, fixed: "box" }, marks: X, disabled: !0, follow: "playing", playback: j, caption: `A-mollipentatoninen, positio ${a}` }),
          /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
            m < 2 ? "Vihreällä merkitty A on pohjasävel." : m === 3 ? gh.find((_) => _.value === M).note : v ? "Näkyvissä ovat vain A-pohjasävelet." : "Otelauta on ilman vihjemerkintöjä.",
            " Sovellus ei mittaa soittoasi: arvioit itse, miten harjoitus sujui."
          ] })
        ] }),
        m === 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(bn, { area: { strings: [0, 1, 2, 3, 4, 5], min: Ee, max: me, fixed: "box" }, marks: X, disabled: !0, follow: "playing", playback: j, caption: `Position ${a} sävelet` }),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Sama sormitus ja samat viisi säveltä palaavat seuraavissa tehtävissä." })
        ] }),
        (m === 1 || m === 2) && /* @__PURE__ */ i.jsx(
          ru,
          {
            pieceId: jh[a],
            stage: m === 1 ? "fingering" : "memory",
            onBeforePlay: Y,
            stopHandleRef: P
          },
          `${jh[a]}:${m}`
        ),
        m === 3 && /* @__PURE__ */ i.jsx(Zh, {}, a),
        /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
          /* @__PURE__ */ i.jsx("p", { children: m === 0 ? "Kun tunnistat äänen ja löydät sävelet kuvasta, jatka sormitukseen." : m === 1 ? "Jatka, kun saat kuljettua position molempiin suuntiin rauhallisesti." : m === 2 ? "Jatka, kun pystyt soittamaan ilman kaikkia vihjeitä." : "Jatka, kun olet kokeillut lyhyitä omia fraaseja taustan päälle." }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: A, children: m === 3 ? "Kirjaa harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" }),
          /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Painike perustuu omaan arvioosi. Voit palata aikaisempaan vaiheeseen koska tahansa." })
        ] })
      ] }),
      m === 4 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ i.jsx("h3", { children: a === 1 ? "Valmis seuraavaan positioon" : a === 2 ? "Kaksi positiota harjoiteltu" : "Kolmas positio harjoiteltu" }),
        /* @__PURE__ */ i.jsx("p", { children: a === 1 ? "Kertaa asteikko muistista myös myöhemmin. Voit nyt jatkaa positioon 2." : a === 2 ? "Kertaa molempia positioita erikseen tai harjoittele nyt siirtymään niiden välillä." : "Kertaa kolmannen position kuvio muistista. Positiot 2 ja 3 liittyvät toisiinsa 10. nauhan ympärillä." }),
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => oe(2), children: "Kertaa muistiharjoitus" }),
        a === 1 ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => V(2), children: "Siirry positioon 2 →" }) : a === 2 ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: ce, children: "Yhdistä positiot 1 ja 2 →" }) : /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => V(2), children: "Kertaa positio 2" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "journey-below", children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Seuraavaksi tällä polulla" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        h[1] < 4 ? "🔒 Positio 2" : h[2] === 4 ? "✓ Positio 2 harjoiteltu" : "Positio 2 käytettävissä",
        " · ",
        h[2] === 4 ? "Positioiden 1 ja 2 yhdistäminen käytettävissä" : "🔒 Positioiden 1 ja 2 yhdistäminen",
        " · ",
        Cn(_a) < 4 ? "🔒 Positio 3" : h[3] === 4 ? "✓ Positio 3 harjoiteltu" : "Positio 3 käytettävissä"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Positio 2 avautuu position 1 jälkeen, yhdistämisharjoitus position 2 jälkeen ja positio 3 yhdistämisharjoituksen valmistuttua. Harjoitukset perustuvat omaan arvioosi." })
    ] })
  ] });
}
const Gv = ["ionian", "aeolian"], us = {
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
      Ce(4, 3),
      Ce(4, 5),
      Ce(3, 2),
      Ce(3, 3),
      Ce(3, 5),
      Ce(2, 2),
      Ce(2, 4),
      Ce(2, 5)
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
      Ce(5, 5),
      Ce(5, 7),
      Ce(5, 8),
      Ce(4, 5),
      Ce(4, 7),
      Ce(4, 8),
      Ce(3, 5),
      Ce(3, 7)
    ],
    phrase: [45, 48, 52, 55, 57, 55, 52, 48, 45],
    accompaniment: [45, 48, 52, 48]
  }
}, of = (r) => "musiikin-kartta:moodipolku:" + r + ":v1", uf = "musiikin-kartta:moodipolku:active:v1", Wv = (r) => {
  const a = us[r].positions;
  return [...a, ...a.slice(1, -1).reverse()];
}, Qv = (r) => [...Wv(r), us[r].positions[0]], xh = [
  "Kuuntele ja tunnista",
  "Soita yksi oktaavi",
  "Soita muistista",
  "Vertaile sävelkeskuksia",
  "Improvisoi sointupulssin päälle"
];
function Aa(r) {
  try {
    const a = Number(localStorage.getItem(of(r)));
    return Number.isInteger(a) ? Math.max(0, Math.min(5, a)) : 0;
  } catch {
    return 0;
  }
}
function Sh() {
  try {
    return localStorage.getItem(uf) === "aeolian" && Aa("ionian") === 5 ? "aeolian" : "ionian";
  } catch {
    return "ionian";
  }
}
function Yv({ onBack: r }) {
  const [a, o] = N.useState(Sh), [d, c] = N.useState(() => ({
    ionian: Aa("ionian"),
    aeolian: Aa("aeolian")
  })), [h, p] = N.useState(() => Aa(Sh())), [m, y] = N.useState(null), [L, v] = N.useState(null), [g, M] = N.useState(!1), [I, C] = N.useState("roots"), [w, j] = N.useState(""), [B, E] = N.useState(null), [W, G] = N.useState(null), Q = N.useRef(new Ri()), T = N.useRef(0), O = N.useRef(null), P = us[a], ee = Qv(a), Y = m === "scale" && L !== null ? ee[L] : null;
  function ve() {
    O.current?.(), T.current++, Q.current.stop(), y(null), v(null);
  }
  N.useEffect(() => {
    const A = () => {
      document.hidden && (T.current++, Q.current.stop(), y(null), v(null));
    };
    return document.addEventListener("visibilitychange", A), () => {
      document.removeEventListener("visibilitychange", A), T.current++, Q.current.stop();
    };
  }, []);
  async function fe(A, oe, V = !1) {
    O.current?.();
    const ce = ++T.current;
    Q.current.stop(), v(null), j(""), y(A);
    try {
      const _ = V ? await Q.current.loop(oe, void 0, 75) : await Q.current.play(oe, (U) => {
        ce === T.current && A === "scale" && v(U);
      });
      return ce === T.current && _;
    } catch (_) {
      return ce === T.current && j(Li(_)), !1;
    } finally {
      ce === T.current && (y(null), v(null));
    }
  }
  function q(A) {
    A > d[a] || (ve(), p(A), E(null), G(null), M(!1), C("roots"), j(""));
  }
  function de() {
    ve();
    const A = Math.min(5, h + 1);
    if (p(A), E(null), G(null), M(!1), C("roots"), A > d[a]) {
      c((oe) => ({ ...oe, [a]: A }));
      try {
        localStorage.setItem(of(a), String(A));
      } catch {
      }
    }
  }
  function ge(A) {
    if (!(A === "aeolian" && d.ionian < 5)) {
      ve(), o(A), p(d[A]), E(null), G(null), M(!1), C("roots"), j("");
      try {
        localStorage.setItem(uf, A);
      } catch {
      }
    }
  }
  async function Ee() {
    ve(), G(null), E(null);
    const A = Math.random() < 0.5 ? "ionian" : "aeolian";
    await fe("comparison", us[A].phrase) && E(A);
  }
  const me = (A) => De(A) === P.tonic, $ = P.positions.filter((A) => h < 2 ? !0 : h === 2 ? g && me(A.midi) : h === 4 ? I === "all" || I === "roots" && me(A.midi) : !1).map((A) => ({
    ...A,
    label: h === 2 || h === 4 && I === "roots" ? P.tonicName : Ae(A.midi),
    kind: Y?.string === A.string && Y.fret === A.fret ? "playing" : me(A.midi) ? "answer" : "shape"
  })), J = [...new Set(P.positions.map((A) => A.string))], X = Math.min(...P.positions.map((A) => A.fret)), x = Math.max(...P.positions.map((A) => A.fret));
  return /* @__PURE__ */ i.jsxs("section", { className: "scale-journey mode-journey", "aria-labelledby": "mode-path-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      ve(), r();
    }, children: "← Valitse harjoittelupolku" }),
    /* @__PURE__ */ i.jsxs("p", { className: "eyebrow", children: [
      "SKAALAT JA MOODIT · MOODIT ",
      Gv.indexOf(a) + 1,
      " / 7"
    ] }),
    /* @__PURE__ */ i.jsxs("h2", { id: "mode-path-title", children: [
      P.title,
      " · ",
      P.alias
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-11.html#moodit", children: "Lue moodien teoria →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: P.explanation }),
    /* @__PURE__ */ i.jsxs("p", { className: "scale-fact", children: [
      "Sävelet: ",
      /* @__PURE__ */ i.jsx("strong", { children: P.noteNames }),
      " · Pohjasävel ",
      P.tonicName,
      " · Yksi oktaavi"
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse opeteltava moodi", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": a === "ionian", onClick: () => ge("ionian"), children: "1. C-jooninen" }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          "aria-pressed": a === "aeolian",
          disabled: d.ionian < 5,
          onClick: () => ge("aeolian"),
          children: [
            "2. A-aiolinen ",
            d.ionian < 5 ? "🔒" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Etenemisjärjestys: C-jooninen → A-aiolinen → myöhemmin A-doorinen ja muut moodit. Nykyinen pentatonisten eteneminen ei muutu." }),
    /* @__PURE__ */ i.jsxs("nav", { className: "journey-steps", "aria-label": "Moodin oppimisvaiheet", children: [
      xh.map((A, oe) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: h === oe ? "journey-step current" : "journey-step",
          "aria-current": h === oe ? "step" : void 0,
          disabled: oe > d[a],
          onClick: () => q(oe),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: oe > d[a] ? "🔒" : oe < d[a] ? "✓" : oe + 1 }),
            /* @__PURE__ */ i.jsx("span", { children: A })
          ]
        },
        A
      )),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: h === 5 ? "journey-step current" : "journey-step",
          disabled: d[a] < 5,
          "aria-current": h === 5 ? "step" : void 0,
          onClick: () => q(5),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: d[a] === 5 ? "✓" : "🔒" }),
            /* @__PURE__ */ i.jsx("span", { children: "Moodi harjoiteltu" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-lesson-title", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "mode-lesson-title", children: h === 5 ? "Moodi harjoiteltu" : xh[h] }),
        /* @__PURE__ */ i.jsx("span", { children: h === 5 ? "Valmis" : "Harjoitus " + (h + 1) + " / 5" })
      ] }),
      h === 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele asteikko ensin ylös ja sitten alas. Toisto päättyy ",
          P.tonicName,
          "-pohjasäveleen eikä ala automaattisesti uudelleen. Uuden kierroksen saat painamalla soittopainiketta uudestaan. Malliääni on syntetisoitu."
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Vertailun idea:" }),
          " ",
          P.contrast
        ] })
      ] }),
      h === 1 && /* @__PURE__ */ i.jsx("p", { children: "Soita kolme kieltä pitkin yksi oktaavi alhaalta ylös ja takaisin. Käynnistä mallisoitto uudelleen painikkeesta ja seuraa korostettua säveltä. Älä vielä yritä opetella koko otelautaa." }),
      h === 2 && /* @__PURE__ */ i.jsxs("p", { children: [
        "Piilota otelaudan sävelet ja soita yksi oktaavi molempiin suuntiin. Voit näyttää vain ",
        P.tonicName,
        "-pohjasävelen, jos tarvitset vihjettä."
      ] }),
      h === 3 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele satunnainen fraasi. Sen sävelet kuuluvat samaan C-duurin ja A-mollin säveljoukkoon. Päättele, ",
          /* @__PURE__ */ i.jsx("strong", { children: "päättyykö fraasi C:hen vai A:han" }),
          ". Tämä harjoittaa sävelkeskuksen kuulemista, ei vielä koko moodin automaattista tunnistusta."
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              disabled: m !== null,
              onClick: () => {
                Ee();
              },
              children: "▶ Kuuntele satunnainen fraasi"
            }
          ),
          B !== null && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
            fe("comparison", us[B].phrase);
          }, children: "▶ Kuuntele uudelleen" })
        ] }),
        B !== null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("p", { children: "Fraasi on kuunneltu. Kumpi sävel tuntui kotisäveleltä?" }),
          /* @__PURE__ */ i.jsxs("div", { className: "action-row", role: "group", "aria-label": "Valitse kuulemasi kotisävel", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                disabled: W !== null || m !== null,
                onClick: () => G("ionian"),
                children: "C"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                disabled: W !== null || m !== null,
                onClick: () => G("aeolian"),
                children: "A"
              }
            )
          ] }),
          W !== null && /* @__PURE__ */ i.jsxs("p", { role: "status", children: [
            W === B ? "Oikein!" : "Ei aivan.",
            " Fraasi päättyi ",
            us[B].tonicName,
            "-säveleen. Kuuntele uudelleen ja huomaa, miten melodia hakeutuu tähän säveleen."
          ] })
        ] })
      ] }),
      h === 4 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Soita ",
          P.chord,
          "-sointupulssin päälle 2–3 sävelen fraaseja. Lopeta välillä ",
          P.tonicName,
          "-säveleen. Tausta on yksinkertainen syntetisoitu sointuarpeggio, ei valmis kitarabacking track."
        ] }),
        /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
          "Tämä säilyttää kuultavan ",
          P.tonicName,
          "-sävelkeskuksen. Vertaa myöhemmin, miten samat sävelet kuulostavat toisen moodin sointupulssin päällä."
        ] }),
        /* @__PURE__ */ i.jsxs("fieldset", { className: "hint-segments", children: [
          /* @__PURE__ */ i.jsx("legend", { children: "Sävelvihjeet" }),
          [
            ["roots", "Vain pohjasävelet"],
            ["all", "Kaikki sävelet"],
            ["none", "Ei vihjeitä"]
          ].map(([A, oe]) => /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "radio",
                name: "mode-hints",
                value: A,
                checked: I === A,
                onChange: () => C(A)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: oe })
          ] }, A))
        ] })
      ] }),
      h === 2 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => M((A) => !A), children: g ? "Piilota pohjasävelet" : "Näytä pohjasävelet" }),
      h < 3 && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "scale",
          onClick: () => m === "scale" ? ve() : void fe("scale", ee.map((A) => A.midi)),
          children: m === "scale" ? "■ Pysäytä asteikon toisto" : "▶ Soita asteikko kerran"
        }
      ) }),
      h === 4 && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          "aria-pressed": m === "accompaniment",
          onClick: () => m === "accompaniment" ? ve() : void fe("accompaniment", P.accompaniment, !0),
          children: m === "accompaniment" ? "■ Pysäytä sointupulssi" : "▶ Käynnistä sointupulssi"
        }
      ) }),
      h < 2 && m === "scale" && Y && /* @__PURE__ */ i.jsxs("p", { className: "tools-note", role: "status", children: [
        "Nyt soi: ",
        Ae(Y.midi, !1, !0),
        " · ",
        ft[Y.string],
        "-kieli, nauha ",
        Y.fret,
        "."
      ] }),
      h !== 3 && h !== 5 && /* @__PURE__ */ i.jsx(
        bn,
        {
          area: { strings: J, min: X, max: x, fixed: "box" },
          marks: $,
          follow: "playing",
          playback: m,
          disabled: !0,
          caption: P.title + " – yhden oktaavin sormitus"
        }
      ),
      a === "ionian" && (h === 1 || h === 2) && /* @__PURE__ */ i.jsx(
        ru,
        {
          pieceId: "nooa",
          stage: h === 1 ? "fingering" : "memory",
          onBeforePlay: ve,
          stopHandleRef: O
        },
        `nooa:${h}`
      ),
      w && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: w }),
      h < 5 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ i.jsx("p", { children: "Kun harjoitus sujuu omasta mielestäsi, kirjaa se suoritetuksi. Sovellus ei arvioi kitaransoittoa automaattisesti." }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: de, children: h === 4 ? "Kirjaa moodi harjoitelluksi" : "Harjoiteltu, seuraava vaihe →" })
      ] }),
      h === 5 && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", role: "status", children: [
        /* @__PURE__ */ i.jsxs("h3", { children: [
          P.title,
          " harjoiteltu"
        ] }),
        /* @__PURE__ */ i.jsx("p", { children: "Kertaa melodian sävelkeskus ja sormitus myös myöhemmin." }),
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => q(2), children: "Kertaa muistiharjoitus" }),
        a === "ionian" && /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            onClick: () => ge("aeolian"),
            children: "Jatka A-aioliseen →"
          }
        ),
        a === "aeolian" && /* @__PURE__ */ i.jsx("p", { children: "Seuraavaksi voidaan lisätä A-doorinen: luonnollinen kuudes F♯ erottaa sen A-aiolisesta." })
      ] })
    ] })
  ] });
}
const di = [0, 1, 2], cs = 0, sr = 5, rr = 5, Jv = /* @__PURE__ */ new Set([0, 2, 4, 5, 7, 9, 11]);
function au(r) {
  return Array.from({ length: sr - cs + 1 }, (a, o) => Ce(r, cs + o)).filter((a) => Jv.has(De(a.midi)));
}
function Xv(r, a = rr, o = Math.random) {
  const d = au(r), c = (m) => m[Math.min(m.length - 1, Math.floor(o() * m.length))], h = [...d];
  for (let m = h.length - 1; m > 0; m--) {
    const y = Math.min(m, Math.floor(o() * (m + 1)));
    [h[m], h[y]] = [h[y], h[m]];
  }
  const p = h.slice(0, Math.min(a, h.length));
  for (; p.length < a; ) p.push(c(d.filter((m) => m.fret !== p[p.length - 1].fret)));
  return p;
}
const qv = 80, Zv = 2, ek = 2;
function tk(r, a) {
  const o = au(r);
  if (a.string !== r || !o.some((c) => c.fret === a.fret))
    throw new Error("Kysytyn sävelen pitää kuulua valitun kielen mallisarjaan.");
  const d = o.map((c, h) => ({ midi: c.midi, beat: h, duration: 1, role: "model", position: c }));
  return d.push({ midi: a.midi, beat: o.length + Zv, duration: ek, role: "target", position: a }), d;
}
const nk = { id: "aeolian", name: "A-aiolinen", steps: [0, 2, 3, 5, 7, 8, 10, 12], spelled: ["A", "B", "C", "D", "E", "F", "G", "A"] }, ik = { id: "dorian", name: "A-doorinen", steps: [0, 2, 3, 5, 7, 9, 10, 12], spelled: ["A", "B", "C", "D", "E", "F♯", "G", "A"] }, sk = { id: "ionian", name: "C-jooninen", steps: [0, 2, 4, 5, 7, 9, 11, 12], spelled: ["C", "D", "E", "F", "G", "A", "B", "C"] }, rk = { id: "mixolydian", name: "C-miksolyydinen", steps: [0, 2, 4, 5, 7, 9, 10, 12], spelled: ["C", "D", "E", "F", "G", "A", "B♭", "C"] }, _i = {
  "a-aeolian-dorian": {
    id: "a-aeolian-dorian",
    title: "A-aiolinen ja A-doorinen",
    tonic: 57,
    tonicName: "A",
    drone: 45,
    modes: [nk, ik],
    degree: 6,
    degreeNames: ["F", "F♯"],
    intervalNames: ["♭6, pieni seksti", "6, suuri seksti"],
    // Nauhat 7–11, kielet D, G ja B: A3 D7, B3 D9, C4 D10, D4 G7, E4 G9, F4 G10 / F♯4 G11, G4 B8, A4 B10.
    fingering: { 57: Ce(3, 7), 59: Ce(3, 9), 60: Ce(3, 10), 62: Ce(2, 7), 64: Ce(2, 9), 65: Ce(2, 10), 66: Ce(2, 11), 67: Ce(1, 8), 69: Ce(1, 10) },
    phrase: [
      { degree: 1, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 6, duration: 1 },
      { degree: 6, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 4, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 2, duration: 1 },
      { degree: 1, duration: 3 }
    ],
    explanation: "Molemmissa on molliterssi C. Aiolisessa kuudes aste on F, puoli sävelaskelta kvintin E yläpuolella: kuulostaa tummalta ja haluaa laskeutua E:hen. Doorisessa kuudes aste on F♯, kokonainen sävelaskel E:n yläpuolella: mollisointi kirkastuu."
  },
  "c-ionian-mixolydian": {
    id: "c-ionian-mixolydian",
    title: "C-jooninen ja C-miksolyydinen",
    tonic: 60,
    tonicName: "C",
    drone: 48,
    modes: [sk, rk],
    degree: 7,
    degreeNames: ["B", "B♭"],
    intervalNames: ["7, suuri septimi", "♭7, pieni septimi"],
    // Nauhat 5–8, kielet G, B ja e: C4 G5, D4 G7, E4 B5, F4 B6, G4 B8, A4 e5, B♭4 e6 / B4 e7, C5 e8.
    fingering: { 60: Ce(2, 5), 62: Ce(2, 7), 64: Ce(1, 5), 65: Ce(1, 6), 67: Ce(1, 8), 69: Ce(0, 5), 70: Ce(0, 6), 71: Ce(0, 7), 72: Ce(0, 8) },
    phrase: [
      { degree: 1, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 7, duration: 1 },
      { degree: 8, duration: 1 },
      { degree: 7, duration: 1 },
      { degree: 6, duration: 1 },
      { degree: 5, duration: 1 },
      { degree: 3, duration: 1 },
      { degree: 1, duration: 3 }
    ],
    explanation: "Molemmissa on duuriterssi E. Joonisessa seitsemäs aste on B, puoli sävelaskelta toonikan alapuolella: johtosävel vetää C:hen. Miksolyydisessä seitsemäs aste on B♭, kokonainen sävelaskel alempana: veto heikkenee ja sointi on rennompi, bluesahtavampi."
  }
}, hi = (r, a, o) => r.tonic + a.steps[o - 1];
function ak(r, a, o = 0) {
  return a.steps.map((d, c) => ({ midi: r.tonic + d, beat: o + c, duration: c === 7 ? 2 : 1 }));
}
function lk(r, a, o = 0) {
  let d = o;
  return r.phrase.map((c) => {
    const h = { midi: hi(r, a, c.degree), beat: d, duration: c.duration };
    return d += c.duration, h;
  });
}
function ok(r, a) {
  const o = Math.min(...a.map((c) => c.beat)), d = Math.max(...a.map((c) => c.beat + c.duration));
  return [{ midi: r.drone, beat: o, duration: d - o, level: 0.1 }, ...a];
}
function Ro(r, a = Math.random) {
  const o = a() < 0.5 ? [r.modes[0], r.modes[1]] : [r.modes[1], r.modes[0]], d = a() < 0.5 ? r.modes[0] : r.modes[1];
  return { order: o, asked: d, answer: o[0].id === d.id ? 0 : 1 };
}
const uk = [
  { degree: 6, direction: "up" },
  { degree: 6, direction: "down" },
  { degree: 7, direction: "up" },
  { degree: 7, direction: "down" }
];
function wh(r = Math.random) {
  const a = r() < 0.5 ? _i["a-aeolian-dorian"] : _i["c-ionian-mixolydian"], [o, d] = r() < 0.5 ? [a.modes[0], a.modes[1]] : [a.modes[1], a.modes[0]], c = a.degree, h = o.steps[c - 1] < d.steps[c - 1] ? "up" : "down";
  return { pair: a, first: o, second: d, answer: { degree: c, direction: h } };
}
const ck = [
  { id: "listen", title: "Kuuntele ero" },
  { id: "which", title: "Kumpi oli kumpi?" },
  { id: "change", title: "Mikä sävelaste muuttui?" }
], dk = 84, hk = 2, Nh = (r) => `${r.degree}. aste ${r.direction === "up" ? "nousi" : "laski"}`, as = (r, a, o) => {
  const d = a.steps.findIndex((c) => o.tonic + c === r);
  return d >= 0 ? a.spelled[d] : Ae(r);
};
function fk(r, a) {
  let o = 0;
  const d = [], c = [], h = [];
  return a.forEach((p, m) => {
    const y = p.kind === "scale" ? ak(r, p.mode, o) : lk(r, p.mode, o);
    d.push(...y), c.push(...y.map(() => p.mode)), h.push(...y.map(() => m)), o = Math.max(...y.map((L) => L.beat + L.duration)) + hk;
  }), { notes: ok(r, d), owners: c, sample: h };
}
function cf({ onBack: r, backLabel: a }) {
  const [o, d] = N.useState("a-aeolian-dorian"), [c, h] = N.useState("listen"), [p, m] = N.useState(() => Ro(_i["a-aeolian-dorian"])), [y, L] = N.useState(() => wh()), [v, g] = N.useState(null), [M, I] = N.useState({ right: 0, total: 0 }), [C, w] = N.useState(null), [j, B] = N.useState(null), [E, W] = N.useState(""), G = N.useRef(new Ri()), Q = N.useRef(0), T = c === "change" ? y.pair : _i[o];
  function O() {
    Q.current++, G.current.stop(), w(null), B(null);
  }
  N.useEffect(() => {
    const _ = () => {
      document.hidden && O();
    };
    return document.addEventListener("visibilitychange", _), () => {
      document.removeEventListener("visibilitychange", _), Q.current++, G.current.stop();
    };
  }, []);
  async function P(_, U, Z = T) {
    if (C === _) {
      O();
      return;
    }
    const D = ++Q.current, { notes: ae, owners: z, sample: ie } = fk(Z, U);
    W(""), B(null), w(_);
    try {
      await G.current.playTimed(ae, dk, (re) => {
        D !== Q.current || re === 0 || B({ midi: ae[re].midi, mode: z[re - 1], sample: ie[re - 1] });
      }, () => {
        D === Q.current && B(null);
      });
    } catch (re) {
      D === Q.current && W(Li(re));
    } finally {
      D === Q.current && (w(null), B(null));
    }
  }
  function ee(_) {
    O(), d(_), g(null), m(Ro(_i[_]));
  }
  function Y(_) {
    O(), h(_), g(null);
  }
  function ve() {
    O(), g(null), c === "which" ? m(Ro(_i[o])) : L(wh());
  }
  function fe(_) {
    v === null && (O(), g(_), I((U) => ({ right: U.right + (_ === p.answer ? 1 : 0), total: U.total + 1 })));
  }
  function q(_) {
    if (v !== null) return;
    O(), g(_);
    const U = _.degree === y.answer.degree && _.direction === y.answer.direction;
    I((Z) => ({ right: Z.right + (U ? 1 : 0), total: Z.total + 1 }));
  }
  const de = c === "listen" || v !== null, [ge, Ee] = T.modes, me = (_) => _ === hi(T, ge, T.degree) || _ === hi(T, Ee, T.degree), $ = Object.entries(T.fingering).map(([_, U]) => ({ midi: Number(_), position: U })), J = $.filter(() => de).map(({ midi: _, position: U }) => {
    const Z = _ === hi(T, Ee, T.degree) ? Ee : ge;
    return {
      ...U,
      label: as(_, Z, T),
      kind: j?.midi === _ ? "playing" : me(_) ? "anchor" : _ % 12 === T.tonic % 12 ? "answer" : "shape"
    };
  }), X = $.map((_) => _.position.fret), x = { strings: [...new Set($.map((_) => _.position.string))], min: Math.min(...X), max: Math.max(...X), fixed: "box" }, A = j ? de ? `Nyt soi: ${c === "listen" ? j.mode.name : `${c === "which" ? "näyte" : "versio"} ${j.sample + 1} (${j.mode.name})`} · ${as(j.midi, j.mode, T)}` : `Nyt soi: ${c === "which" ? "näyte" : "versio"} ${j.sample + 1}` : "Toonika soi hiljaisena urkupisteenä oktaavia alempana koko näytteen ajan.", oe = `${ge.name}: ${T.degree}. aste ${T.degreeNames[0]} (${T.intervalNames[0]}) · ${Ee.name}: ${T.degree}. aste ${T.degreeNames[1]} (${T.intervalNames[1]}).`, V = v !== null && typeof v == "number" ? v === p.answer : null, ce = v !== null && typeof v == "object" ? v.degree === y.answer.degree && v.direction === y.answer.direction : null;
  return /* @__PURE__ */ i.jsxs("section", { className: "scale-journey mode-compare", "aria-labelledby": "mode-compare-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      O(), r();
    }, children: a }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT · KUUNTELE" }),
    /* @__PURE__ */ i.jsx("h2", { id: "mode-compare-title", children: "Kuuntele moodien ero" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Kaksi moodia samasta toonikasta, ero vain yhdessä sävelasteessa. Kuuntele, miltä ero kuulostaa, ja tunnista se sitten ilman nimiä." }),
    c !== "change" && /* @__PURE__ */ i.jsx("div", { className: "action-row", role: "group", "aria-label": "Vertailupari", children: Object.values(_i).map((_) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        "aria-pressed": o === _.id,
        onClick: () => ee(_.id),
        children: _.title
      },
      _.id
    )) }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps mode-compare-steps", "aria-label": "Moodivertailun harjoitukset", children: ck.map((_, U) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: c === _.id ? "journey-step current" : "journey-step",
        "aria-current": c === _.id ? "step" : void 0,
        onClick: () => Y(_.id),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: U + 1 }),
          /* @__PURE__ */ i.jsx("span", { children: _.title })
        ]
      },
      _.id
    )) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "mode-compare-lesson", children: [
      c === "listen" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsx("h3", { id: "mode-compare-lesson", children: T.title }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Toonika ",
            T.tonicName
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "scale-fact", children: oe }),
        /* @__PURE__ */ i.jsx("p", { children: T.explanation }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "primary",
              "aria-pressed": C === "both",
              onClick: () => {
                P("both", [{ mode: ge, kind: "scale" }, { mode: Ee, kind: "scale" }]);
              },
              children: C === "both" ? "■ Pysäytä" : `▶ Asteikot peräkkäin: ${ge.name}, sitten ${Ee.name}`
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === "phrase",
              onClick: () => {
                P("phrase", [{ mode: ge, kind: "phrase" }, { mode: Ee, kind: "phrase" }]);
              },
              children: C === "phrase" ? "■ Pysäytä" : "▶ Sama fraasi molempina"
            }
          )
        ] })
      ] }),
      c === "which" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsxs("h3", { id: "mode-compare-lesson", children: [
            "Kumpi näyte oli ",
            p.asked.name,
            "?"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            T.title,
            M.total ? ` · ${M.right}/${M.total} oikein` : ""
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele kaksi nimeämätöntä asteikkoa samasta toonikasta ",
          T.tonicName,
          ". Kuuntele erityisesti ",
          T.degree,
          ". astetta."
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "primary",
              "aria-pressed": C === "samples",
              onClick: () => {
                P("samples", [{ mode: p.order[0], kind: "scale" }, { mode: p.order[1], kind: "scale" }]);
              },
              children: C === "samples" ? "■ Pysäytä" : "▶ Kuuntele näytteet 1 ja 2"
            }
          ),
          [0, 1].map((_) => /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              "aria-pressed": C === `sample-${_}`,
              onClick: () => {
                P(`sample-${_}`, [{ mode: p.order[_], kind: "scale" }]);
              },
              children: C === `sample-${_}` ? "■ Pysäytä" : `▶ Näyte ${_ + 1}`
            },
            _
          ))
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "answer-choices", role: "group", "aria-label": `Kumpi näyte oli ${p.asked.name}?`, children: [0, 1].map((_) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            disabled: v !== null,
            className: v === null ? "" : _ === p.answer ? "right" : _ === v ? "wrong" : "",
            onClick: () => fe(_),
            children: [
              "Näyte ",
              _ + 1
            ]
          },
          _
        )) }),
        v !== null && /* @__PURE__ */ i.jsxs("p", { className: `feedback ${V ? "good" : "bad"}`, role: "status", "data-testid": "mode-feedback", children: [
          V ? "Oikein! " : "Ei aivan. ",
          "Näyte ",
          p.answer + 1,
          " oli ",
          p.asked.name,
          ". Näyte 1: ",
          p.order[0].name,
          " (",
          T.degree,
          ". aste ",
          as(hi(T, p.order[0], T.degree), p.order[0], T),
          "), näyte 2: ",
          p.order[1].name,
          " (",
          T.degree,
          ". aste ",
          as(hi(T, p.order[1], T.degree), p.order[1], T),
          "). ",
          T.explanation
        ] })
      ] }),
      c === "change" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsx("h3", { id: "mode-compare-lesson", children: "Mikä sävelaste muuttui?" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Toonika ",
            T.tonicName,
            M.total ? ` · ${M.right}/${M.total} oikein` : ""
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("p", { children: "Sama lyhyt fraasi soi kahdesti. Toisessa versiossa yksi sävelaste on eri. Mikä aste muuttui, ja nousiko vai laskiko se?" }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            "aria-pressed": C === "versions",
            onClick: () => {
              P("versions", [{ mode: y.first, kind: "phrase" }, { mode: y.second, kind: "phrase" }], y.pair);
            },
            children: C === "versions" ? "■ Pysäytä" : "▶ Kuuntele versiot 1 ja 2"
          }
        ) }),
        /* @__PURE__ */ i.jsx("div", { className: "answer-choices degree-choices", role: "group", "aria-label": "Mikä sävelaste muuttui?", children: uk.map((_) => {
          const U = _.degree === y.answer.degree && _.direction === y.answer.direction, Z = typeof v == "object" && v !== null && v.degree === _.degree && v.direction === _.direction;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              disabled: v !== null,
              className: v === null ? "" : U ? "right" : Z ? "wrong" : "",
              onClick: () => q(_),
              children: Nh(_)
            },
            Nh(_)
          );
        }) }),
        v !== null && /* @__PURE__ */ i.jsxs("p", { className: `feedback ${ce ? "good" : "bad"}`, role: "status", "data-testid": "mode-feedback", children: [
          ce ? "Oikein! " : "Ei aivan. ",
          y.pair.title,
          ": versio 1 oli ",
          y.first.name,
          ", versio 2 ",
          y.second.name,
          ".",
          " ",
          y.answer.degree,
          ". aste ",
          y.answer.direction === "up" ? "nousi" : "laski",
          " puoli sävelaskelta:",
          " ",
          as(hi(T, y.first, T.degree), y.first, T),
          " → ",
          as(hi(T, y.second, T.degree), y.second, T),
          "."
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: A }),
      de && c !== "listen" && /* @__PURE__ */ i.jsx("p", { className: "scale-fact", children: oe }),
      /* @__PURE__ */ i.jsx(
        bn,
        {
          area: x,
          marks: J,
          disabled: !0,
          follow: "playing",
          playback: C,
          caption: `${T.title}: sävelet otelaudalla`
        }
      ),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: de ? `Valkoreunaiset pisteet ovat eroavan ${T.degree}. asteen vaihtoehdot, vihreä on toonika ${T.tonicName}.` : "Eroava sävelaste näytetään otelaudalla vastauksen jälkeen." }),
      c !== "listen" && v !== null && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: ve, children: "Uusi kysymys →" }) }),
      E && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: E })
    ] })
  ] });
}
function mk({ onBack: r }) {
  const [a, o] = N.useState(null);
  return a === "pentatonic" ? /* @__PURE__ */ i.jsx(Hv, { onBack: () => o(null) }) : a === "modes" ? /* @__PURE__ */ i.jsx(Yv, { onBack: () => o(null) }) : a === "compare" ? /* @__PURE__ */ i.jsx(cf, { onBack: () => o(null), backLabel: "← Skaalat ja moodit" }) : /* @__PURE__ */ i.jsxs("section", { className: "scale-tracks", "aria-labelledby": "scale-tracks-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SKAALAT JA MOODIT" }),
    /* @__PURE__ */ i.jsx("h2", { id: "scale-tracks-title", children: "Mitä haluat opetella?" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Valitse pentatoniset tai moodit. Voit palata valintaan milloin tahansa. Kummankin polun eteneminen tallentuu erikseen." }),
    /* @__PURE__ */ i.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("pentatonic"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "01" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Pentatoniset" }),
          /* @__PURE__ */ i.jsx("span", { children: "A-mollipentatoninen: positiot 1–3, niiden yhdistäminen, kuuntelu ja improvisointi." }),
          /* @__PURE__ */ i.jsx("small", { children: "Jatka nykyistä harjoittelua" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Moodit" }),
          /* @__PURE__ */ i.jsx("span", { children: "Opettele tunnistamaan sävelkeskus, soittamaan yksi oktaavi ja improvisoimaan." }),
          /* @__PURE__ */ i.jsx("small", { children: "Aloita C-joonisesta; seuraavaksi A-aiolinen" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("compare"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Kuuntele moodien ero" }),
          /* @__PURE__ */ i.jsx("span", { children: "Sama toonika, yksi eri sävelaste: A-aiolinen ja A-doorinen, C-jooninen ja C-miksolyydinen." }),
          /* @__PURE__ */ i.jsx("small", { children: "Kuunteluharjoitus, ei tallennettua etenemistä" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] });
}
const ls = [0, 2, 4, 5, 7, 9, 11], pk = 1200, Ca = { strings: [0, 1, 2, 3, 4, 5], min: 0, max: 5, fixed: "" };
function vk({ onBack: r, children: a }) {
  const [o, d] = N.useState(0), [c, h] = N.useState([]), [p, m] = N.useState(!1), [y, L] = N.useState(""), [v, g] = N.useState(0), [M, I] = N.useState(!1), C = o >= ls.length, w = ls[Math.min(o, ls.length - 1)], j = ks(Ca.strings, Ca.min, Ca.max).filter((P) => De(P.midi) === w), B = j.filter((P) => !c.includes(Ue(P))), E = B.length === 0 && !C, W = !E && p ? B[0] : void 0;
  N.useEffect(() => {
    if (!M || !E) return;
    const P = window.setTimeout(() => {
      d((ee) => ee + 1), h([]), m(!1), L("");
    }, pk);
    return () => window.clearTimeout(P);
  }, [M, E]);
  const G = [
    ...j.filter((P) => c.includes(Ue(P))).map((P) => ({ ...P, kind: "answer", label: Ae(P.midi) })),
    ...W ? [{ ...W, kind: "anchor", label: "?" }] : []
  ];
  function Q(P) {
    if (C || E) return;
    const ee = Ue(P);
    if (De(P.midi) !== w) {
      g((fe) => fe + 1), L(`Valitsit sävelen ${Ae(P.midi)}. Etsi ${Ae(w)}.`);
      return;
    }
    if (c.includes(ee)) {
      L("Tämä kohta on jo löydetty. Etsi seuraava sijainti.");
      return;
    }
    const Y = [...c, ee];
    h(Y), m(!1);
    const ve = j.length - Y.length;
    L(ve ? `Oikein! ${Ae(w)} löytyi ${ft[P.string]}-kieleltä (${$t(P.fret)}). Vielä ${ve}.` : `Löysit kaikki ${j.length} ${Ae(w)}-säveltä tällä alueella.`);
  }
  function T() {
    E && (d((P) => P + 1), h([]), m(!1), L(""));
  }
  function O() {
    d(0), h([]), m(!1), L(""), g(0);
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "note-journey", "aria-labelledby": "note-journey-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · VAIHE 1" }),
    /* @__PURE__ */ i.jsx("h2", { id: "note-journey-title", children: "Etsi sävelet otelaudalta" }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-5.html#otelauta", children: "Lue tämän harjoituksen teoria: Otelauta ja sävelet →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Aloita sävelnimistä. Etsi kaikki saman sävelen sijainnit nauhoilta 0–5. Kuuntelemalla tunnistaminen on tämän harjoituksen alla." }),
    !C && /* @__PURE__ */ i.jsxs("label", { className: "note-autoadvance", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          checked: M,
          onChange: (P) => I(P.target.checked)
        }
      ),
      /* @__PURE__ */ i.jsx("span", { children: "Jatka automaattisesti" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "journey-lesson", children: C ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Otelautakierros valmis" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Löysit kaikkien seitsemän luonnollisen sävelen sijainnit. ",
        v ? `Vääriä valintoja yhteensä ${v}.` : "Kaikki valinnat osuivat oikeaan."
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: O, children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsxs("h3", { children: [
          "Etsi kaikki ",
          Ae(w),
          "-sävelet"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "Sävel ",
          o + 1,
          " / ",
          ls.length
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Napauta otelaudalta kaikki ",
        Ae(w),
        "-sävelet. Löydetyt kohdat jäävät näkyviin. Voit käyttää vihjettä tarvittaessa."
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "note-progress", role: "status", "aria-live": "polite", children: [
        "Löydetty ",
        c.length,
        " / ",
        j.length
      ] }),
      /* @__PURE__ */ i.jsx(
        bn,
        {
          area: Ca,
          marks: G,
          onAnswer: Q,
          disabled: E,
          caption: "Otelauta"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "p",
        {
          className: E ? "feedback good" : "feedback info",
          "data-testid": "note-feedback",
          role: "status",
          "aria-live": "polite",
          children: y
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
        !E && /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            onClick: () => m((P) => !P),
            children: p ? "Piilota vihje" : "Näytä vihje"
          }
        ),
        E && (M ? /* @__PURE__ */ i.jsxs("span", { className: "tools-note", role: "status", children: [
          "Siirrytään automaattisesti ",
          o === ls.length - 1 ? "yhteenvetoon" : "seuraavaan säveleen",
          "…"
        ] }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: T, children: o === ls.length - 1 ? "Näytä yhteenveto" : "Seuraava sävel →" }))
      ] })
    ] }) }),
    a
  ] });
}
const Mi = (r) => Ae(r, !1, !0);
function kk({ onBack: r, backLabel: a }) {
  const [o, d] = N.useState(0), [c, h] = N.useState("learn"), [p, m] = N.useState([]), [y, L] = N.useState(0), [v, g] = N.useState(null), [M, I] = N.useState([]), [C, w] = N.useState(null), [j, B] = N.useState(null), [E, W] = N.useState(null), [G, Q] = N.useState(!1), [T, O] = N.useState(""), P = N.useRef(new Ri()), ee = N.useRef(0), Y = di[Math.min(o, di.length - 1)], ve = au(Y), fe = p[y];
  function q() {
    ee.current++, P.current.stop(), w(null), B(null), W(null);
  }
  N.useEffect(() => {
    const D = () => {
      document.hidden && q();
    };
    return document.addEventListener("visibilitychange", D), () => {
      document.removeEventListener("visibilitychange", D), ee.current++, P.current.stop();
    };
  }, []);
  async function de() {
    if (C === "scale") {
      q();
      return;
    }
    const D = ++ee.current;
    O(""), B(null), W(null), w("scale");
    try {
      await P.current.play(ve.map((ae) => ae.midi), (ae) => {
        D === ee.current && B(ae);
      });
    } catch (ae) {
      D === ee.current && O(Li(ae));
    } finally {
      D === ee.current && (w(null), B(null));
    }
  }
  async function ge(D, ae, z = !0) {
    if (z && C === D) {
      q();
      return;
    }
    const ie = tk(Y, ae), re = D === "question" ? ie : ie.filter((ke) => ke.role === "target").map((ke) => ({ ...ke, beat: 0 })), he = ++ee.current;
    O(""), B(null), W(null), w(D);
    try {
      await P.current.playTimed(re, qv, (ke) => {
        if (he !== ee.current) return;
        const we = re[ke];
        we.role === "target" ? (W({ kind: "target" }), Q(!0)) : W({ kind: "model", position: we.position });
      }, () => {
        he === ee.current && W((ke) => ke?.kind === "model" ? { kind: "pause" } : ke);
      });
    } catch (ke) {
      he === ee.current && O(Li(ke));
    } finally {
      he === ee.current && (w(null), W(null));
    }
  }
  function Ee() {
    q();
    const D = Xv(Y);
    m(D), L(0), g(null), Q(!1), h("quiz"), ge("question", D[0], !1);
  }
  function me(D) {
    c !== "quiz" || v || !fe || !G || (q(), g(D), I((ae) => [...ae, { string: Y, asked: fe, chosen: D, correct: D.fret === fe.fret }]));
  }
  function $() {
    if (y + 1 >= p.length) {
      q(), h("string-done");
      return;
    }
    L(y + 1), g(null), Q(!1), ge("question", p[y + 1], !1);
  }
  function J(D) {
    q(), d(D), h("learn"), m([]), g(null), Q(!1);
  }
  function X() {
    if (o + 1 >= di.length) {
      q(), h("finished");
      return;
    }
    J(o + 1);
  }
  function x() {
    I([]), J(0);
  }
  const oe = M.filter((D) => D.string === Y).slice(-rr), V = v && fe ? v.fret === fe.fret : null, ce = C === "scale" && j !== null ? ve[j] : null, _ = c === "learn" ? ve.map((D) => ({
    ...D,
    label: Ae(D.midi),
    kind: ce?.fret === D.fret ? "playing" : "shape"
  })) : c === "quiz" && v && fe ? [
    { ...fe, kind: "answer", label: Ae(fe.midi) },
    ...V ? [] : [{ ...v, kind: "wrong", label: Ae(v.midi) }]
  ] : c === "quiz" && E?.kind === "model" ? [{ ...E.position, kind: "playing", label: Ae(E.position.midi) }] : [], U = E?.kind === "model" ? `Mallisarja: ${Mi(E.position.midi)} · ${$t(E.position.fret)}.` : E?.kind === "pause" ? "Tauko. Seuraavaksi kysytty sävel." : E?.kind === "target" ? "Kysytty sävel soi. Millä nauhalla se soi?" : G ? "Valitse nauha. Voit kuunnella kysymyksen uudelleen." : "Kuuntele ensin mallisarja ja kysytty sävel. Vastaaminen avautuu, kun kysytty sävel on soinut.", Z = di.map((D) => {
    const ae = M.filter((z) => z.string === D).slice(-rr);
    return { string: D, right: ae.filter((z) => z.correct).length, total: ae.length };
  });
  return /* @__PURE__ */ i.jsxs("section", { className: "note-journey ear-locate", "aria-labelledby": "ear-locate-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
      q(), r();
    }, children: a }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SÄVELKORVA JA OTELAUTA · KUUNTELE" }),
    /* @__PURE__ */ i.jsx("h2", { id: "ear-locate-title", children: "Kuuntele ja paikanna sävel" }),
    /* @__PURE__ */ i.jsxs("p", { className: "learning-lead", children: [
      "Kuuntele ensin kielen tutut sävelet ja vastaa sitten korvakuulolta, millä nauhalla kuulemasi sävel soi. Kolme ohuinta kieltä, nauhat ",
      cs,
      "–",
      sr,
      ", aluksi vain luonnolliset sävelet."
    ] }),
    /* @__PURE__ */ i.jsx("nav", { className: "journey-steps ear-strings", "aria-label": "Kielet", children: di.map((D, ae) => {
      const z = Z[ae].total >= rr;
      return /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: ae === o && c !== "finished" ? "journey-step current" : "journey-step",
          "aria-current": ae === o && c !== "finished" ? "step" : void 0,
          onClick: () => J(ae),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "journey-index", children: z ? "✓" : ae + 1 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              ft[D],
              "-kieli",
              z ? ` · ${Z[ae].right}/${Z[ae].total}` : ""
            ] })
          ]
        },
        D
      );
    }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "journey-lesson", "aria-labelledby": "ear-lesson-title", children: [
      c === "learn" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsxs("h3", { id: "ear-lesson-title", children: [
            ft[Y],
            "-kieli: tutustu säveliin"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            "Kieli ",
            o + 1,
            " / ",
            di.length
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kuuntele ",
          Io[Y],
          " luonnolliset sävelet alhaalta ylös: ",
          ve.map((D) => `${Mi(D.midi)} (${$t(D.fret)})`).join(", "),
          ". Juuri soiva paikka korostuu otelaudalla. Toista niin monta kertaa kuin haluat."
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": C === "scale", onClick: () => {
          de();
        }, children: C === "scale" ? "■ Pysäytä" : "▶ Kuuntele kielen sävelet" }) }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", "aria-live": "polite", children: ce ? `Nyt soi: ${Mi(ce.midi)} · ${ft[Y]}-kieli, ${$t(ce.fret)}.` : "Sävelet soivat kerran nousevassa järjestyksessä." })
      ] }),
      c === "quiz" && fe && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
          /* @__PURE__ */ i.jsxs("h3", { id: "ear-lesson-title", children: [
            "Kysymys ",
            y + 1,
            " / ",
            p.length
          ] }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            ft[Y],
            "-kieli"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Ensin soi ",
          Io[Y],
          " mallisarja alhaalta ylös, sitten lyhyen tauon jälkeen yksi kysytty sävel samasta sarjasta. Napauta, millä ",
          $a[Y],
          " nauhalla ",
          cs,
          "–",
          sr,
          " kysytty sävel soi."
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", "aria-pressed": C === "question", onClick: () => {
            ge("question", fe);
          }, children: C === "question" ? "■ Pysäytä" : "▶ Kuuntele uudelleen" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-pressed": C === "target", onClick: () => {
            ge("target", fe);
          }, children: C === "target" ? "■ Pysäytä" : "▶ Vain kysytty sävel" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note ear-cue", role: "status", "aria-live": "polite", "data-testid": "ear-cue", children: v ? "" : U })
      ] }),
      (c === "learn" || c === "quiz") && /* @__PURE__ */ i.jsx(
        bn,
        {
          area: { strings: [Y], min: cs, max: sr, fixed: "" },
          marks: _,
          disabled: c !== "quiz" || !!v || !G,
          onAnswer: c === "quiz" ? me : void 0,
          follow: c === "learn" ? "playing" : "hints",
          playback: C,
          caption: `${ft[Y]}-kieli, nauhat ${cs}–${sr}`
        }
      ),
      c === "quiz" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("p", { className: `feedback ${V === null ? "" : V ? "good" : "bad"}`, role: "status", "aria-live": "polite", "data-testid": "ear-feedback", children: v && fe ? V ? `Oikein! ${Mi(fe.midi)} soi ${$a[Y]}, ${$t(fe.fret)}.` : `Ei aivan. Valitsit ${$t(v.fret)} (${Mi(v.midi)}). Kuulemasi sävel oli ${Mi(fe.midi)}: ${$t(fe.fret)}.` : "Oikea sävel ja paikka näytetään vasta vastauksen jälkeen." }),
        v && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: $, children: y + 1 >= p.length ? "Näytä kielen tulos →" : "Seuraava kysymys →" }) })
      ] }),
      c === "learn" && /* @__PURE__ */ i.jsxs("div", { className: "journey-next", children: [
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Kun sävelet ovat tuttuja, kokeile tunnistaa ne korvakuulolta. Testissä on ",
          rr,
          " kysymystä."
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: Ee, children: "Aloita kuuntelutesti →" })
      ] }),
      c === "string-done" && /* @__PURE__ */ i.jsxs("div", { className: "round-summary", role: "status", children: [
        /* @__PURE__ */ i.jsxs("h3", { id: "ear-lesson-title", children: [
          ft[Y],
          "-kieli: ",
          oe.filter((D) => D.correct).length,
          " / ",
          oe.length,
          " oikein"
        ] }),
        /* @__PURE__ */ i.jsx("ul", { className: "ear-results", children: oe.map((D, ae) => /* @__PURE__ */ i.jsxs("li", { className: D.correct ? "good" : "bad", children: [
          Mi(D.asked.midi),
          " · ",
          $t(D.asked.fret),
          " — ",
          D.correct ? "oikein" : `vastasit ${$t(D.chosen.fret)}`
        ] }, ae)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: Ee, children: "Uusi testi tällä kielellä" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: X, children: o + 1 >= di.length ? "Yhteenveto →" : `Seuraava kieli: ${ft[di[o + 1]]} →` })
        ] })
      ] }),
      c === "finished" && /* @__PURE__ */ i.jsxs("div", { className: "round-summary", role: "status", children: [
        /* @__PURE__ */ i.jsx("h3", { id: "ear-lesson-title", children: "Yhteenveto" }),
        /* @__PURE__ */ i.jsx("dl", { children: Z.map((D) => /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsxs("dt", { children: [
            ft[D.string],
            "-kieli"
          ] }),
          /* @__PURE__ */ i.jsx("dd", { children: D.total ? `${D.right} / ${D.total}` : "–" })
        ] }, D.string)) }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Sama sävelkorkeus voi soida myös toisella kielellä (esimerkiksi C4 on G-kielen 5. ja B-kielen 1. nauha), joten kysymys koskee aina valittua kieltä." }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: x, children: "Harjoittele uudelleen" }) })
      ] }),
      T && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: T })
    ] })
  ] });
}
function yk({ onBack: r }) {
  const [a, o] = N.useState("notes"), d = () => o("notes");
  return a === "locate" ? /* @__PURE__ */ i.jsx(kk, { onBack: d, backLabel: "← Sävelkorva ja otelauta" }) : a === "modes" ? /* @__PURE__ */ i.jsx(cf, { onBack: d, backLabel: "← Sävelkorva ja otelauta" }) : /* @__PURE__ */ i.jsx(vk, { onBack: r, children: /* @__PURE__ */ i.jsxs("div", { className: "journey-below ear-more", children: [
    /* @__PURE__ */ i.jsx("h3", { children: "Kuuntele korvalla" }),
    /* @__PURE__ */ i.jsxs("div", { className: "learning-grid", children: [
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("locate"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "02" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Kuuntele ja paikanna sävel" }),
          /* @__PURE__ */ i.jsx("span", { children: "Kuule sävel ja napauta, millä nauhalla se soi. Ohut e-, B- ja G-kieli, nauhat 0–5." })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] }),
      /* @__PURE__ */ i.jsxs("button", { type: "button", className: "learning-card", onClick: () => o("modes"), children: [
        /* @__PURE__ */ i.jsx("span", { className: "learning-number", "aria-hidden": "true", children: "03" }),
        /* @__PURE__ */ i.jsxs("span", { className: "learning-card-body", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Kuuntele moodien ero" }),
          /* @__PURE__ */ i.jsx("span", { children: "A-aiolinen ja A-doorinen, C-jooninen ja C-miksolyydinen: sama toonika, yksi eri sävelaste." }),
          /* @__PURE__ */ i.jsx("small", { children: "Sama harjoitus löytyy myös Skaalat ja moodit -polulta" })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] }) });
}
const gk = {
  C: { name: "C", frets: [0, 1, 0, 2, 3, null] },
  G: { name: "G", frets: [3, 0, 0, 0, 2, 3] },
  D: { name: "D", frets: [2, 3, 2, 0, null, null] },
  Em: { name: "Em", frets: [0, 0, 0, 2, 2, 0] },
  Am: { name: "Am", frets: [0, 1, 2, 2, 0, null] },
  E: { name: "E", frets: [0, 0, 1, 2, 2, 0] },
  A: { name: "A", frets: [0, 2, 2, 2, 0, null] }
}, Oo = ["C", "G", "D", "Em"], Eh = ["C", "G", "D", "Em", "Am", "E", "A"], jk = { min: 0, max: 3, fixed: "" };
function Ch(r) {
  const a = [...r];
  for (let o = a.length - 1; o > 0; o--) {
    const d = Math.floor(Math.random() * (o + 1));
    [a[o], a[d]] = [a[d], a[o]];
  }
  return a;
}
function xk({ onBack: r }) {
  const [a, o] = N.useState(4), [d, c] = N.useState(() => Ch(Oo)), [h, p] = N.useState(0), [m, y] = N.useState(null), [L, v] = N.useState([]), [g, M] = N.useState(0), I = h >= d.length, C = gk[d[Math.min(h, d.length - 1)]], w = a === 4 ? Oo : Eh, j = C.frets.flatMap((O, P) => O === null ? [] : [P]), B = C.frets.flatMap((O, P) => O === null ? [P] : []), E = { ...jk, strings: j }, W = C.frets.flatMap((O, P) => O === null ? [] : [{
    ...Ce(P, O),
    kind: O === 0 ? "anchor" : "shape",
    label: O === 0 ? "○" : "●"
  }]);
  function G(O = a) {
    o(O), c(Ch(O === 4 ? Oo : Eh)), p(0), y(null), v([]), M(0);
  }
  function Q(O) {
    m || I || L.includes(O) || (O === C.name ? y(O) : (v((P) => [...P, O]), M((P) => P + 1)));
  }
  function T() {
    m && (p((O) => O + 1), y(null), v([]));
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "chord-journey", "aria-labelledby": "chord-journey-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "SOINNUT JA MUSIIKIN RAKENNE · VAIHE 1" }),
    /* @__PURE__ */ i.jsx("h2", { id: "chord-journey-title", children: "Tunnista avoin sointu" }),
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsx("a", { href: "book/osa-6.html#caged", children: "Lue tämän harjoituksen teoria: Avoimet sointumuodot →" }) }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead", children: "Katso otelaudalla näkyvää avointa sointuotetta ja valitse oikea soinnun nimi. Tässä harjoituksessa ei tarvitse kuunnella tai soittaa." }),
    /* @__PURE__ */ i.jsxs("fieldset", { className: "chord-difficulty", children: [
      /* @__PURE__ */ i.jsx("legend", { children: "Tunnistettavat soinnut" }),
      /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 4,
            onChange: () => G(4)
          }
        ),
        " 4 sointua (C, G, D, Em)"
      ] }),
      /* @__PURE__ */ i.jsxs("label", { children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "radio",
            name: "chord-count",
            checked: a === 7,
            onChange: () => G(7)
          }
        ),
        " 7 sointua (lisäksi Am, E, A)"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Valinnan vaihtaminen aloittaa harjoituksen alusta." })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "journey-lesson", children: I ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("h3", { children: "Avosointukierros valmis" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Tunnistit kaikki ",
        a,
        " sointua. ",
        g ? `Vääriä valintoja yhteensä ${g}.` : "Kaikki soinnut tunnistettiin ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => G(), children: "Harjoittele uudelleen" }) })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Mikä avoin sointu?" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "Sointu ",
          h + 1,
          " / ",
          d.length
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: "Katso merkityt kielet ja nauhat. Mikä sointu tässä otteessa on?" }),
      /* @__PURE__ */ i.jsx(
        bn,
        {
          area: E,
          marks: W,
          mutedStrings: B,
          disabled: !0,
          caption: "Avoin sointu · nauhat 0–3"
        }
      ),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "○ = vapaa kieli · ● = painettu nauha · × = älä soita tätä kieltä." }),
      /* @__PURE__ */ i.jsx("div", { className: "chord-answers", role: "group", "aria-label": "Valitse soinnun nimi", children: w.map((O) => /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: m === O ? "right" : L.includes(O) ? "wrong" : "",
          disabled: !!m || L.includes(O),
          "aria-pressed": m === O,
          onClick: () => Q(O),
          children: O
        },
        O
      )) }),
      /* @__PURE__ */ i.jsx(
        "p",
        {
          className: m ? "feedback good" : L.length ? "feedback bad" : "feedback",
          role: "status",
          "aria-live": "polite",
          "data-testid": "chord-feedback",
          children: m ? `Oikein! Tämä on ${C.name}-sointu.` : L.length ? "Ei aivan. Katso, mitkä kielet soivat vapaina ja missä nauhoissa sormet ovat." : ""
        }
      ),
      m && /* @__PURE__ */ i.jsx("div", { className: "action-row", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: T, children: h === d.length - 1 ? "Näytä yhteenveto" : "Seuraava sointu →" }) })
    ] }) }),
    /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Sointujen sävelten rakentamista ja vaikeampia sointumuotoja harjoitellaan myöhemmissä vaiheissa." })
  ] });
}
const xe = (r, a) => ({ first: r, ...a ? { second: a } : {} }), fs = () => [
  xe("Gm", "F"),
  xe("Gm"),
  xe("B♭", "F"),
  xe("Gm"),
  xe("Gm", "F"),
  xe("Gm"),
  xe("E♭", "F"),
  xe("Gm")
], ms = () => [
  xe("B♭", "F"),
  xe("Gm", "Dm"),
  xe("E♭", "F"),
  xe("Gm", "Dm")
], ps = [
  "Yksi sointu, kaksi askelta",
  "sama riffi palaa taas",
  "kun sen soitan vielä kerran",
  "se jo jää mun sormiin, jää"
], df = [
  "Pidän tauon, annan soida",
  "kuuntelen ja hengitän",
  "pienestäkin sävelestä",
  "löytyy tie eteenpäin"
], Sk = [
  { id: "intro", title: "Intro", start: 0, bars: [xe("Gm", "F"), xe("Gm"), xe("B♭", "F"), xe("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: fs(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 43,
    bars: [...ms(), xe("E♭"), { ...xe("E♭"), passingBass: "F" }],
    lyrics: ps,
    note: "Lopun F kuullaan basson viimeisellä iskulla. Sitä ei ole vahvistettu erilliseksi F-soinnuksi."
  },
  { id: "interlude", title: "Välisoitto", start: 65, bars: [xe("Gm", "F"), xe("Gm")] },
  { id: "verse2", title: "Säkeistö 2", start: 72, bars: fs(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 101,
    bars: [...ms(), xe("E♭"), xe("F")],
    lyrics: ps
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 122,
    bars: [xe("Gm"), xe("Dm"), xe("F"), xe("C"), xe("Gm"), xe("Dm"), xe("E♭"), xe("F")]
  },
  {
    id: "verse3",
    title: "Väliosa (laulu)",
    start: 151,
    bars: fs(),
    lyrics: df
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 179,
    bars: [...ms(), xe("E♭", "F"), xe("Gm")],
    lyrics: ps
  },
  {
    id: "outro",
    title: "Outro",
    start: 201,
    bars: [
      xe("E♭", "F"),
      { ...xe("Gm"), possibleChord: "Dm" },
      xe("E♭", "F"),
      xe("Gm", "F"),
      { ...xe("Gm"), possibleChord: "Dm" },
      xe("Gm", "F"),
      xe("Gm")
    ],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Merkintä Dm? on epävarma kitaran sävelistä tehty tulkinta, ei vahvistettu sointu."
  }
], wk = [
  { id: "intro", title: "Intro", start: 0, bars: [xe("Gm", "F"), xe("Gm"), xe("B♭", "F"), xe("Gm")] },
  { id: "verse1", title: "Säkeistö 1", start: 14, bars: fs(), lyrics: [
    "Aamu piirtää viivan seinään",
    "kahvi jäähtyy pöydälle",
    "mä otan kitaran syliin",
    "ja aloitan uudelleen"
  ] },
  {
    id: "chorus1",
    title: "Kertosäe 1",
    start: 42,
    bars: [...ms(), xe("E♭"), xe("E♭")],
    lyrics: ps
  },
  // Kertosäkeen jälkeen ei ole akustisen version kahden tahdin välisoittoa.
  { id: "verse2", title: "Säkeistö 2", start: 63, bars: fs(), lyrics: [
    "Ei tarvitse kiirehtiä",
    "ei tarvitse osata kaikkea",
    "jokainen puhdas sävel",
    "vie lähemmäs omaa ääntä"
  ] },
  {
    id: "chorus2",
    title: "Kertosäe 2",
    start: 91,
    bars: [...ms(), xe("E♭"), xe("F")],
    lyrics: ps
  },
  {
    id: "bridge",
    title: "Kitarasoolo",
    start: 111,
    bars: [xe("Gm"), xe("Dm"), xe("F"), xe("C"), xe("Gm"), xe("Dm"), xe("E♭"), xe("F")]
  },
  // Tekninen huomio (ei näytetä käyttäjälle): basso on tauolla noin 2:23–2:44,
  // ja laulu sijoittuu tämän kitaravetoisen jakson päälle.
  {
    id: "verse3",
    title: "Väliosa (laulu, kitara)",
    start: 139,
    bars: fs(),
    lyrics: df
  },
  {
    id: "chorus3",
    title: "Kertosäe 3",
    start: 167,
    bars: [...ms(), xe("B♭", "F"), xe("Gm"), xe("E♭", "F"), xe("Gm")],
    lyrics: ps
  },
  {
    id: "outro",
    title: "Outro",
    start: 195,
    bars: [xe("E♭", "F"), xe("Gm", "F"), xe("E♭", "F"), xe("Gm")],
    lyrics: ["Yksi sointu, kaksi askelta", "sama riffi palaa taas"],
    note: "Viimeinen Gm jää soimaan kappaleen loppuun."
  }
], ys = {
  acoustic: Sk,
  normal: wk
}, Nk = "normal", Jo = "yksi-sointu-kaksi-askelta", lu = {
  acoustic: Jo + "-akustinen",
  normal: Jo + "-normaali"
}, hf = (r) => r === Jo || Object.values(lu).includes(r ?? "");
function Ek(r) {
  const a = Object.entries(lu).find(([, o]) => o === r);
  return a ? a[0] : null;
}
const Ck = (r) => lu[r], bh = (r) => {
  const a = Math.max(0, Math.floor(Number.isFinite(r) ? r : 0));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
};
function ou(r, a = "acoustic") {
  const o = ys[a], d = o[r], c = o[r + 1];
  return c ? (c.start - d.start) / d.bars.length : 240 / 69;
}
function ff(r, a = "acoustic") {
  const o = ys[a], d = Math.max(0, Number.isFinite(r) ? r : 0);
  let c = 0;
  for (let g = 1; g < o.length && !(d < o[g].start); g++)
    c = g;
  const h = o[c];
  let p = 0;
  for (; p + 1 < h.bars.length && d >= fr(c, p + 1, a); )
    p++;
  const m = fr(c, p, a), y = ou(c, a) / 4;
  let L = 1;
  for (; L < 4 && d >= m + L * y; ) L++;
  const v = h.bars[p];
  return {
    section: h,
    sectionIndex: c,
    barIndex: p,
    beat: L,
    chord: v.second && L >= 3 ? v.second : v.first
  };
}
function fr(r, a, o = "acoustic") {
  return ys[o][r].start + ou(r, o) * a;
}
function bk(r) {
  return ys[r].flatMap((a, o) => a.bars.flatMap((d, c) => {
    const h = fr(o, c, r), p = { section: a, sectionIndex: o, barIndex: c, part: "first", chord: d.first, time: h };
    if (!d.second) return [p];
    const m = ou(o, r) / 2;
    return [p, { ...p, part: "second", chord: d.second, time: h + m }];
  }));
}
function Tk(r, a = "acoustic", o = !1) {
  const d = ys[a], c = ff(r, a), h = c.section.bars[c.barIndex], p = c.beat >= 3 && h.second ? "second" : "first", m = bk(a), y = m.findIndex((I) => I.sectionIndex === c.sectionIndex && I.barIndex === c.barIndex && I.part === p), v = [
    ...m.slice(y + 1).map((I) => ({ ...I, wrapped: !1 })),
    ...o ? m.slice(0, y + 1).map((I) => ({ ...I, wrapped: !0 })) : []
  ].find((I) => I.chord !== c.chord) ?? null;
  let g = null;
  const M = c.sectionIndex === d.length - 1;
  if (c.barIndex === c.section.bars.length - 1 && (!M || o)) {
    const I = M ? 0 : c.sectionIndex + 1, C = d[I], w = C.bars[0].first;
    g = {
      section: C,
      sectionIndex: I,
      firstChord: w,
      wrapped: M,
      continues: w === (h.second ?? h.first)
    };
  }
  return { nextChord: v, nextSection: g };
}
function Mk(r) {
  const a = r.filter((m) => m.lyrics?.length), o = (m) => 1 + (m.lyrics?.length ?? 0), d = a.reduce((m, y) => m + o(y), 0);
  let c = 0, h = 1 / 0, p = 0;
  for (let m = 0; m <= a.length; m++) {
    const y = Math.abs(d - 2 * p);
    (y < h || y === h && p >= d - p) && (c = m, h = y), m < a.length && (p += o(a[m]));
  }
  return [a.slice(0, c), a.slice(c)];
}
const Xo = ["Gm", "F", "B♭", "E♭", "Dm", "C"], mf = "musiikin-kartta:kappale-sointuvihjeet:v1", Pa = {
  Gm: 1,
  F: 1,
  "B♭": 2,
  "E♭": 2,
  Dm: 3,
  C: 4
}, Th = {
  showChords: !0,
  level: 0,
  fadeOrder: Pa
};
function ba(r, a) {
  return !a.showChords || a.level >= a.fadeOrder[r];
}
function Mh(r) {
  if (!r) return { ...Th, fadeOrder: { ...Pa } };
  try {
    const a = JSON.parse(r);
    if (!a || typeof a != "object") throw new Error("Invalid settings");
    const o = a, d = o.level, c = { ...Pa }, h = o.fadeOrder;
    if (h && typeof h == "object") {
      const p = h;
      for (const m of Xo)
        [1, 2, 3, 4].includes(p[m]) && (c[m] = p[m]);
    }
    return {
      showChords: typeof o.showChords == "boolean" ? o.showChords : !0,
      level: typeof d == "number" && [0, 1, 2, 3, 4].includes(d) ? d : 0,
      fadeOrder: c
    };
  } catch {
    return { ...Th, fadeOrder: { ...Pa } };
  }
}
function _k() {
  try {
    return Mh(localStorage.getItem(mf));
  } catch {
    return Mh(null);
  }
}
const Ak = /^([A-H](?:[♭♯b#]*))([^/?]*)(\/[A-H][♭♯b#]*)?(\?)?$/;
function Pk(r) {
  const a = Ak.exec(r.trim());
  if (!a) return r;
  const [, o, , d = "", c = ""] = a;
  return o + "5" + d + c;
}
const Lk = (r, a) => a === "power" ? Pk(r) : r, $k = [
  { value: 0, label: "0 · Kaikki näkyvät" },
  { value: 1, label: "1 · Helppo: tutut pois" },
  { value: 2, label: "2 · Keskitaso: lisää pois" },
  { value: 3, label: "3 · Vaikea: viimeiset vihjeet" },
  { value: 4, label: "4 · Muistista: kaikki piilossa" }
], Rk = [
  { value: 1, label: "1 · Piilota ensimmäisenä" },
  { value: 2, label: "2 · Piilota toisena" },
  { value: 3, label: "3 · Piilota kolmantena" },
  { value: 4, label: "4 · Piilota viimeisenä" }
];
function Ok({ version: r, position: a, loop: o = !1, onSeek: d }) {
  const [c, h] = N.useState(_k), [p, m] = N.useState(null), [y, L] = N.useState(!1), [v, g] = N.useState(() => typeof matchMedia != "function" || matchMedia("(min-width: 701px)").matches), [M, I] = N.useState("full"), C = ($) => Lk($, M), w = ys[r], j = ff(a, r), { section: B, sectionIndex: E, barIndex: W, beat: G, chord: Q } = j, T = G >= 3 && B.bars[W].second ? "second" : "first", O = ($, J, X) => `${r}:${$}:${J}:${X}`, P = ($, J) => O(B.id, $, J), ee = P(W, T), Y = ba(Q, c), ve = Y && p === ee, fe = ($, J, X) => !ba($, c) || p === P(J, X), q = c.showChords && c.level === 0, de = Xo.filter(($) => ba($, c)).length, ge = c.showChords ? c.level === 0 ? "Kaikki soinnut näkyvät" : `Taso ${c.level} · piilossa ${de}/6` : "Soinnut piilossa", { nextSection: Ee } = Tk(a, r, o), me = !!Ee && ba(Ee.firstChord, c);
  return N.useEffect(() => {
    m(null);
  }, [ee]), N.useEffect(() => {
    try {
      localStorage.setItem(mf, JSON.stringify(c));
    } catch {
    }
  }, [c]), /* @__PURE__ */ i.jsxs("section", { className: "song-chord-panel", "aria-labelledby": "song-chord-heading", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ i.jsx("h3", { id: "song-chord-heading", children: "Harjoituskartta" }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        c.showChords && c.level === 0 ? "G-molli · " : "",
        "4/4 · noin 69 BPM"
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "song-chord-toolbar", children: [
      /* @__PURE__ */ i.jsxs("label", { htmlFor: "song-section-jump", children: [
        "Harjoiteltava osa",
        /* @__PURE__ */ i.jsx(
          "select",
          {
            id: "song-section-jump",
            value: B.id,
            onChange: ($) => {
              const J = w.find((X) => X.id === $.target.value);
              J && d(J.start);
            },
            children: w.map(($) => /* @__PURE__ */ i.jsxs("option", { value: $.id, children: [
              bh($.start),
              " · ",
              $.title
            ] }, $.id))
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-now-next", children: [
        /* @__PURE__ */ i.jsxs("p", { className: "song-current-chord", children: [
          Y && !ve ? "Piilotettu sointu" : "Soiva sointu",
          /* @__PURE__ */ i.jsx("strong", { children: Y && !ve ? "?" : C(Q) }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            B.title,
            ", tahti ",
            W + 1,
            ", isku ",
            G,
            "/4"
          ] }),
          Y && /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "song-reveal-chord",
              onClick: () => m(ve ? null : ee),
              children: ve ? "Piilota vihje" : "Paljasta sointu"
            }
          )
        ] }),
        Ee && /* @__PURE__ */ i.jsxs("p", { className: "song-ahead song-next-chord", children: [
          "Seuraava sointu ",
          /* @__PURE__ */ i.jsx("strong", { children: me ? "?" : C(Ee.firstChord) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "song-bar-grid", role: "group", "aria-label": B.title + ": tahdit", children: B.bars.map(($, J) => {
      const X = J === W, x = X && (G < 3 || !$.second), A = X && G >= 3 && !!$.second, oe = fe($.first, J, "first"), V = $.second ? fe($.second, J, "second") : !1, ce = (oe ? C($.first) : "sointu piilossa") + ($.second ? " " + (V ? C($.second) : "sointu piilossa") : "") + (q && $.passingBass ? " (basson kulku " + $.passingBass + ")" : "") + (q && $.possibleChord ? " (" + C($.possibleChord + "?") + ")" : "");
      return /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: "song-measure" + (X ? " active" : ""),
          "aria-pressed": X,
          "aria-label": "Tahti " + (J + 1) + ": " + ce + ". Siirry kohtaan " + bh(fr(E, J, r)),
          onClick: () => d(fr(E, J, r)),
          children: [
            /* @__PURE__ */ i.jsxs("span", { className: "song-measure-number", children: [
              "Tahti ",
              J + 1
            ] }),
            /* @__PURE__ */ i.jsxs("span", { className: "song-measure-chords", children: [
              /* @__PURE__ */ i.jsx("strong", { className: x && oe ? "now" : "", children: oe ? C($.first) : "?" }),
              $.second && /* @__PURE__ */ i.jsx("strong", { className: A && V ? "now" : "", children: V ? C($.second) : "?" })
            ] }),
            q && $.passingBass && /* @__PURE__ */ i.jsxs("small", { children: [
              "Basso: (",
              $.passingBass,
              "), isku 4"
            ] }),
            q && $.possibleChord && /* @__PURE__ */ i.jsxs("small", { children: [
              "Mahdollinen (",
              C($.possibleChord + "?"),
              ")"
            ] })
          ]
        },
        J
      );
    }) }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-chart-settings", open: v, children: [
      /* @__PURE__ */ i.jsxs("summary", { onClick: ($) => {
        $.preventDefault(), g((J) => !J);
      }, children: [
        "Harjoituskartan asetukset",
        /* @__PURE__ */ i.jsx("span", { className: "song-chart-settings-state", children: ge })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-hint-controls", role: "group", "aria-label": "Sointujen ja sanojen asetukset", children: [
        /* @__PURE__ */ i.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: c.showChords,
              onChange: ($) => {
                h((J) => ({ ...J, showChords: $.target.checked })), m(null);
              }
            }
          ),
          "Näytä soinnut"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "song-hints-toggle", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: y,
              onChange: ($) => L($.target.checked)
            }
          ),
          "Näytä koko sanoitus"
        ] }),
        /* @__PURE__ */ i.jsxs("fieldset", { className: "song-chord-display", children: [
          /* @__PURE__ */ i.jsx("legend", { children: "Sointumerkinnät" }),
          [["full", "Täydet soinnut"], ["power", "Power-soinnut"]].map(([$, J]) => /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "radio",
                name: "song-chord-display",
                value: $,
                checked: M === $,
                onChange: () => I($)
              }
            ),
            /* @__PURE__ */ i.jsx("span", { children: J })
          ] }, $))
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "song-hint-level", htmlFor: "song-hint-level", children: [
          "Harjoitustaso",
          /* @__PURE__ */ i.jsx(
            "select",
            {
              id: "song-hint-level",
              value: c.level,
              disabled: !c.showChords,
              onChange: ($) => {
                const J = Number($.target.value);
                h((X) => ({ ...X, level: J })), m(null);
              },
              children: $k.map(($) => /* @__PURE__ */ i.jsx("option", { value: $.value, children: $.label }, $.value))
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "song-hint-progress", "aria-live": "polite", children: de === 0 ? "Kaikki kuusi sointua näkyvät" : `Piilossa ${de}/6 sointua` })
      ] }),
      c.showChords && c.level < 4 && /* @__PURE__ */ i.jsxs("details", { className: "song-fade-customize", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "Muokkaa sointujen piilotusjärjestystä" }),
        /* @__PURE__ */ i.jsx("p", { children: "Järjestys perustuu aluksi siihen, kuinka usein sointu toistuu kappaleessa, ei otteen tekniseen vaikeuteen. Muuta järjestys oman osaamisesi mukaan. Valinta säilyy molemmissa versioissa." }),
        /* @__PURE__ */ i.jsx("div", { className: "song-fade-order", children: Xo.map(($) => /* @__PURE__ */ i.jsxs("label", { children: [
          $,
          /* @__PURE__ */ i.jsx(
            "select",
            {
              "aria-label": $ + ": piilotusvaihe",
              value: c.fadeOrder[$],
              onChange: (J) => {
                const X = Number(J.target.value);
                h((x) => ({ ...x, fadeOrder: { ...x.fadeOrder, [$]: X } })), m(null);
              },
              children: Rk.map((J) => /* @__PURE__ */ i.jsx("option", { value: J.value, children: J.label }, J.value))
            }
          )
        ] }, $)) })
      ] })
    ] }),
    y ? /* @__PURE__ */ i.jsxs("div", { className: "song-all-lyrics", "aria-label": "Koko kappaleen sanat", children: [
      /* @__PURE__ */ i.jsx("h4", { children: "Koko kappaleen sanat" }),
      /* @__PURE__ */ i.jsx("div", { className: "song-all-lyrics-grid", children: Mk(w).map(($, J) => /* @__PURE__ */ i.jsx("div", { className: "song-lyrics-column", children: $.map((X) => /* @__PURE__ */ i.jsxs("section", { className: "song-lyrics-stanza", children: [
        /* @__PURE__ */ i.jsx("h5", { children: X.title }),
        X.lyrics?.map((x, A) => /* @__PURE__ */ i.jsx("p", { children: x }, A))
      ] }, X.id)) }, J)) }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Instrumentaaliosissa ei ole laulunsanoja. Kolmannen säkeistökierron sanat ovat vahvistamatta." })
    ] }) : B.lyrics && /* @__PURE__ */ i.jsxs("div", { className: "song-section-lyrics", children: [
      /* @__PURE__ */ i.jsxs("h4", { children: [
        B.title,
        ": sanat"
      ] }),
      B.lyrics.map(($, J) => /* @__PURE__ */ i.jsx("p", { children: $ }, J))
    ] }),
    q && B.note && /* @__PURE__ */ i.jsx("p", { className: "song-chord-note", children: B.note })
  ] });
}
const Ia = 7, Fk = { name: "bluesasteikko", base: Ie.SCALES.mp.base, add: [[6, "♭5"]] }, Fo = [
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
    scale: Fk,
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
function Ik(r) {
  return Ie.scaleNotes(r).map(([a, o]) => Ie.noteName(Ia, a, o));
}
const pf = (r) => r === "pentatonic" ? 5 : 7;
function Dk(r, a, o) {
  const d = a.filter((m) => m >= 1 && m <= pf(r.system)), c = Ie.fingeringBoxes(Ia, r.scale, r.system, d, o);
  if (r.id !== "blues") return c;
  const h = r.scale.add.map(([m]) => (Ia + m) % 12), p = (m, y) => y >= 0 && y <= o && h.includes((Ie.OPEN_PITCHES[m] + y) % 12);
  return c.map((m) => ({ ...m, positions: m.positions.map((y) => {
    const L = y.strings.map((g, M) => {
      if (!g.length) return g;
      const I = g[g.length - 1];
      return p(M, I + 1) ? [...g.slice(0, -1), I + 1] : g;
    }), v = L.flat();
    return { ...y, strings: L, start: Math.min(...v), end: Math.max(...v) };
  }) }));
}
const _h = 17;
function zk({ open: r }) {
  const [a, o] = N.useState("mp"), [d, c] = N.useState({ pentatonic: [], "3nps": [] }), [h, p] = N.useState(!1), [m, y] = N.useState(!1), L = N.useRef(null), v = Fo.find((j) => j.id === a) ?? Fo[0], g = d[v.system], M = Dk(v, g, _h), I = M.some((j) => j.positions.length > 0), C = Ie.renderBoard(Ia, v.scale, _h, {
    automatic: !0,
    boxes: M,
    onlyBoxNotes: I && h,
    label: v.title + (g.length ? ", " + g.map((j) => "boksi " + j).join(", ") : "")
  });
  N.useEffect(() => {
    const j = L.current;
    !j || !r || M.length === 1 && Ie.revealPositions(j, ".box-highlight");
  }, [C, r]);
  function w(j, B) {
    c((E) => ({ ...E, [v.system]: B ? [...E[v.system], j].sort((W, G) => W - G) : E[v.system].filter((W) => W !== j) }));
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "song-scales-panel", "aria-label": "Kappaleeseen sopivat asteikot", children: [
    /* @__PURE__ */ i.jsx("div", { className: "song-scale-controls", children: /* @__PURE__ */ i.jsxs("label", { children: [
      "Asteikko",
      /* @__PURE__ */ i.jsx("select", { value: a, onChange: (j) => o(j.target.value), children: Fo.map((j) => /* @__PURE__ */ i.jsx("option", { value: j.id, children: j.title }, j.id)) })
    ] }) }),
    /* @__PURE__ */ i.jsxs("p", { className: "song-scale-notes", children: [
      /* @__PURE__ */ i.jsx("strong", { children: v.title }),
      /* @__PURE__ */ i.jsx("span", { children: Ik(v.scale).join(" · ") })
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "song-scale-note", children: v.note }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "song-scale-board",
        ref: L,
        role: "region",
        tabIndex: 0,
        "aria-label": "Asteikko otelaudalla",
        dangerouslySetInnerHTML: { __html: C }
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "legend", children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "swatch", style: { background: "#4b2fd6", border: "2px solid #fff" } }),
        "Juurisävel G (1)"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "swatch", style: { background: "#6d4aff" } }),
        "Asteikon sävel"
      ] }),
      v.scale.add.length > 0 && /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("span", { className: "swatch", style: { background: "#f0a13c" } }),
        v.id === "blues" ? "Bluessävel D♭ (♭5)" : "Mollin lisäsävel"
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-box-settings", open: m, children: [
      /* @__PURE__ */ i.jsx("summary", { onClick: (j) => {
        j.preventDefault(), y((B) => !B);
      }, children: "Sormitusboksit ja näyttöasetukset" }),
      /* @__PURE__ */ i.jsx("p", { className: "song-box-system", children: v.system === "pentatonic" ? "Pentatoniset boksit (5)" : "3NPS: kolme säveltä per kieli (7)" }),
      /* @__PURE__ */ i.jsx("div", { className: "box-options", role: "group", "aria-label": "Näytettävät sormitusboksit", children: Array.from({ length: pf(v.system) }, (j, B) => B + 1).map((j) => /* @__PURE__ */ i.jsxs("label", { className: "box-toggle", "data-box": j, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            value: j,
            checked: g.includes(j),
            onChange: (B) => w(j, B.target.checked)
          }
        ),
        " Boksi ",
        j
      ] }, v.system + j)) }),
      /* @__PURE__ */ i.jsxs("label", { className: "box-toggle box-filter", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: I && h,
            disabled: !I,
            onChange: (j) => p(j.target.checked)
          }
        ),
        "Näytä vain valittujen boksien sävelet"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: I ? "Voit valita useita bokseja ja halutessasi piilottaa niiden ulkopuoliset sävelet." : "Valitse boksi, jos haluat korostaa sen sormituksen. Voit valita myös useita." })
    ] })
  ] });
}
let vf = null;
function Bk() {
  return Ek(new URLSearchParams(location.search).get("kappale")) ?? vf ?? Nk;
}
function Vk(r) {
  vf = r;
  const a = new URL(location.href);
  hf(a.searchParams.get("kappale")) && (a.searchParams.set("kappale", Ck(r)), history.replaceState(history.state, "", a.pathname + a.search + a.hash));
}
const Kk = {
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
}, Ah = 1e-3;
function Ph(r, a) {
  try {
    r.currentTime = a;
  } catch {
  }
}
function Lh(r) {
  if (!Number.isFinite(r) || r < 0) return "0:00";
  const a = Math.floor(r);
  return String(Math.floor(a / 60)) + ":" + String(a % 60).padStart(2, "0");
}
function Uk({ onBack: r }) {
  const a = N.useRef(null), o = N.useRef(null), d = N.useRef(null), c = N.useRef(0), h = N.useRef(new qh()), p = N.useRef(null), [m, y] = N.useState(Bk), L = Kk[m], [v, g] = N.useState(!1), [M, I] = N.useState(!0), [C, w] = N.useState(!0), [j, B] = N.useState(!1), [E, W] = N.useState(!1), [G, Q] = N.useState(!1), [T, O] = N.useState(Jp), [P] = N.useState(() => ov()), ee = N.useRef(null), [Y, ve] = N.useState(""), [fe, q] = N.useState(0), [de, ge] = N.useState(0), [Ee, me] = N.useState("");
  function $(z = !1, ie) {
    const re = a.current;
    if (re)
      for (const he of [o.current, d.current])
        he && (!ie || he === ie) && h.current.align(re, he, z);
  }
  function J() {
    return [
      ["backing", a.current, !0],
      ["guitar", o.current, M],
      ["vocals", d.current, C]
    ];
  }
  function X(z = T, ie) {
    for (const [re, he, ke] of J()) {
      if (!he) continue;
      const we = Zd(re, z, ie?.[re] ?? ke);
      if (P === "webaudio" && ee.current?.routed(he))
        ee.current.setLevel(he, we);
      else
        try {
          he.volume = Zd(re, z);
        } catch {
        }
    }
  }
  function x(z) {
    O(z), Xp(z), X(z);
  }
  function A() {
    c.current++, a.current?.pause(), o.current?.pause(), d.current?.pause(), g(!1);
  }
  function oe(z) {
    if (z !== m) {
      p.current = null, A();
      for (const ie of [a.current, o.current, d.current])
        if (ie)
          try {
            ie.currentTime = 0;
          } catch {
          }
      q(0), ge(0), me(""), y(z), Vk(z);
    }
  }
  function V(z) {
    const ie = a.current;
    if (!ie || !Number.isFinite(z)) return;
    const re = Math.max(0, Math.min(z, Number.isFinite(ie.duration) ? ie.duration : z));
    p.current = re, q(re), Ph(ie, re);
  }
  function ce(z) {
    const ie = p.current;
    if (ie === null || z !== a.current || z.seeking) return;
    const re = Number.isFinite(z.duration) ? Math.min(ie, z.duration) : ie;
    if (re !== ie && (p.current = re, q(re)), Math.abs(z.currentTime - re) < Ah) return;
    const he = z.seekable;
    for (let ke = 0; ke < he.length; ke++)
      if (he.start(ke) <= re && re <= he.end(ke)) {
        Ph(z, re);
        return;
      }
  }
  function _(z) {
    if (z !== a.current) return;
    const ie = p.current;
    if (ie === null)
      q(z.currentTime);
    else if (z.readyState >= 1 && !z.seeking && Math.abs(z.currentTime - ie) < Ah) {
      p.current = null, $(!0);
      return;
    }
    z.paused || $();
  }
  async function U() {
    const z = a.current, ie = o.current, re = d.current;
    if (!z || !ie || !re) return;
    if (v) {
      A();
      return;
    }
    me("");
    const he = p.current ?? z.currentTime;
    if (Number.isFinite(z.duration) && he >= z.duration - 0.05 && V(0), ce(z), P === "webaudio") {
      const we = ee.current ??= new dv(), $e = we.unlock() && [z, ie, re].map((He) => we.route(He)).every(Boolean);
      ve($e ? "" : "Äänenvoimakkuutta ei voi säätää tässä selaimessa. Käytä laitteen äänenvoimakkuuspainikkeita. " + we.lastError);
    }
    X(), ie.muted = !M, re.muted = !C, $(!0);
    const ke = ++c.current;
    try {
      M || ie.pause(), C || re.pause();
      const we = [z.play(), ...M ? [ie.play()] : [], ...C ? [re.play()] : []];
      if (await Promise.all(we), ke !== c.current) return;
      if ($(), g(!0), P === "webaudio" && ee.current?.routed(z)) {
        const $e = ee.current;
        setTimeout(() => {
          ke === c.current && $e.state !== "running" && me(`Ääni ei käynnistynyt (Web Audio: ${$e.state}). Pysäytä ja soita uudelleen.${$e.lastError ? " " + $e.lastError : ""}`);
        }, 800);
      }
    } catch {
      if (ke !== c.current) return;
      A(), me("Toisto epäonnistui. Tarkista, että valitun version kaikki kolme MP3-raitaa ovat paikallaan.");
    }
  }
  function Z(z, ie, re) {
    if (!z) return;
    if (z.muted = !ie, !ie) {
      z.pause();
      return;
    }
    !a.current || !v || ($(!0, z), z.play().catch(() => me(re + " ei käynnistynyt. Pysäytä ja soita uudelleen.")));
  }
  function D(z) {
    I(z), X(T, { guitar: z }), Z(o.current, z, "Kitararaita");
  }
  function ae(z) {
    w(z), X(T, { vocals: z }), Z(d.current, z, "Lauluraita");
  }
  return N.useEffect(() => {
    const z = () => {
      document.hidden && A();
    };
    return document.addEventListener("visibilitychange", z), () => {
      document.removeEventListener("visibilitychange", z), c.current++, a.current?.pause(), o.current?.pause(), d.current?.pause(), ee.current?.close();
    };
  }, []), N.useEffect(() => {
    X();
  }, [m]), /* @__PURE__ */ i.jsxs("section", { className: "song-journey", "aria-labelledby": "song-journey-title", children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: r, children: "← Oppimispolut" }),
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "KAPPALEHARJOITTELU · MALLIKAPPALE 01" }),
    /* @__PURE__ */ i.jsx("h2", { id: "song-journey-title", children: "Yksi sointu, kaksi askelta" }),
    /* @__PURE__ */ i.jsx("p", { className: "learning-lead song-lead", children: "Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina." }),
    /* @__PURE__ */ i.jsxs("label", { className: "song-version", htmlFor: "song-version-select", children: [
      /* @__PURE__ */ i.jsx("span", { children: "Versio" }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          id: "song-version-select",
          value: m,
          onChange: (z) => oe(z.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "normal", children: "Normaali versio" }),
            /* @__PURE__ */ i.jsx("option", { value: "acoustic", children: "Akustinen versio" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "journey-lesson song-player", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Kappaleen soitin" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          L.label,
          " · ",
          L.length,
          " · kolme ääniraitaa"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-player-controls", role: "group", "aria-label": "Kappaleen soitin", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary song-play", onClick: () => {
          U();
        }, children: v ? "■ Tauko" : "▶ Soita kappale" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            "aria-label": "Siirry kappaleessa",
            min: 0,
            max: de > 0 ? de : 1,
            step: 0.1,
            value: Math.min(fe, de > 0 ? de : 1),
            disabled: de <= 0,
            onChange: (z) => V(Number(z.target.value))
          }
        ),
        /* @__PURE__ */ i.jsxs("output", { "aria-live": "off", className: "song-time", children: [
          Lh(fe),
          " / ",
          Lh(de)
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "song-toggles", children: [
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: M,
              onChange: (z) => D(z.target.checked)
            }
          ),
          " Kitara kuuluu"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: C,
              onChange: (z) => ae(z.target.checked)
            }
          ),
          " Laulu kuuluu"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: j,
              onChange: (z) => B(z.target.checked)
            }
          ),
          " Soita looppina"
        ] }),
        /* @__PURE__ */ i.jsxs("label", { className: "song-volume", "data-volume-mode": P, children: [
          /* @__PURE__ */ i.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "20", height: "20", children: [
            /* @__PURE__ */ i.jsx("path", { d: "M4 9h4l5-4v14l-5-4H4z", fill: "currentColor" }),
            T > 0 && /* @__PURE__ */ i.jsx("path", { d: "M16 9.5a3.5 3.5 0 0 1 0 5", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
            T > 50 && /* @__PURE__ */ i.jsx("path", { d: "M18.5 7a7 7 0 0 1 0 10", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: T,
              "aria-label": "Äänenvoimakkuus",
              "aria-valuetext": T + " %",
              onChange: (z) => x(Number(z.target.value))
            }
          ),
          /* @__PURE__ */ i.jsxs("output", { "aria-hidden": "true", children: [
            T,
            " %"
          ] })
        ] })
      ] }),
      Y && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", children: Y }),
      /* @__PURE__ */ i.jsxs("p", { className: "song-download", children: [
        /* @__PURE__ */ i.jsxs("a", { href: L.download, download: L.download.split("/").pop(), type: "audio/mpeg", children: [
          /* @__PURE__ */ i.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", width: "18", height: "18", children: /* @__PURE__ */ i.jsx("path", { d: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Lataa MP3"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          L.label,
          ", koko kappale · ",
          L.downloadSize
        ] })
      ] }),
      Ee && /* @__PURE__ */ i.jsx("p", { className: "backing-error", role: "alert", children: Ee }),
      /* @__PURE__ */ i.jsx(
        "audio",
        {
          ref: a,
          src: L.backing,
          preload: "metadata",
          loop: j,
          onLoadedMetadata: (z) => {
            z.currentTarget === a.current && (ge(z.currentTarget.duration), ce(z.currentTarget));
          },
          onProgress: (z) => ce(z.currentTarget),
          onCanPlay: (z) => ce(z.currentTarget),
          onTimeUpdate: (z) => _(z.currentTarget),
          onEnded: (z) => {
            z.currentTarget !== a.current || z.currentTarget.loop || (p.current = null, o.current?.pause(), d.current?.pause(), g(!1), q(z.currentTarget.duration));
          },
          onPause: (z) => {
            z.currentTarget === a.current && g(!1);
          },
          onError: () => me(L.label + ": säestysraita puuttuu. Pura kyseisen version ZIP-paketti projektin juureen.")
        },
        m + "-backing"
      ),
      /* @__PURE__ */ i.jsx(
        "audio",
        {
          ref: o,
          src: L.guitar,
          preload: "metadata",
          muted: !M,
          loop: j,
          onLoadedMetadata: () => {
            a.current?.paused && $(!0);
          },
          onError: () => me(L.label + ": kitararaita puuttuu tai ei lataudu.")
        },
        m + "-guitar"
      ),
      /* @__PURE__ */ i.jsx(
        "audio",
        {
          ref: d,
          src: L.vocals,
          preload: "metadata",
          muted: !C,
          loop: j,
          onLoadedMetadata: () => {
            a.current?.paused && $(!0);
          },
          onError: () => me(L.label + ": lauluraita puuttuu tai ei lataudu.")
        },
        m + "-vocals"
      )
    ] }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-chart-collapse", open: E, children: [
      /* @__PURE__ */ i.jsx("summary", { onClick: (z) => {
        z.preventDefault(), W((ie) => !ie);
      }, children: "Soinnut ja sanat" }),
      /* @__PURE__ */ i.jsx(Ok, { version: m, position: fe, loop: j, onSeek: V })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { className: "song-scales-collapse", open: G, children: [
      /* @__PURE__ */ i.jsx("summary", { onClick: (z) => {
        z.preventDefault(), Q((ie) => !ie);
      }, children: "Skaalat ja moodit" }),
      /* @__PURE__ */ i.jsx(zk, { open: G })
    ] })
  ] });
}
const qo = {
  off: "Mikrofoni ei ole käytössä.",
  requesting: "Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.",
  silent: "Mikrofoni kuuntelee, mutta ääntä ei kuulu.",
  noise: "Ääntä kuuluu, mutta säveltä ei tunnisteta.",
  untuned: "Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.",
  pitch: "Sävel tunnistettu.",
  error: "Mikrofoni ei toimi."
}, La = (r, a = 1) => r.toFixed(a).replace(".", ",").replace("-", "−"), kf = (r) => {
  const a = Math.round(r);
  return (a > 0 ? "+" : a < 0 ? "−" : "±") + Math.abs(a);
}, Zo = (r) => r ? r.label || "Järjestelmän oletustulo" : "";
function Hk(r, a, o, d) {
  if (d) return ["Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä."];
  switch (r) {
    case "silent":
      return [
        "Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.",
        `Tarkista äänitulo: nyt käytössä ${Zo(o)}. Vaihda laite Mikrofonin asetuksista.`,
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
function yf({ frame: r, threshold: a }) {
  const o = r?.rms ?? 0, d = vs(o), c = (r?.peak ?? 0) >= 0.98 ? "clip" : o >= a ? "over" : "under";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meter ${c}`,
      role: "meter",
      "aria-label": "Äänitaso",
      "aria-valuemin": -60,
      "aria-valuemax": 0,
      "aria-valuenow": Math.round(Math.max(-60, d)),
      "aria-valuetext": `${La(Math.max(-60, d), 0)} desibeliä${o >= a ? ", yli äänikynnyksen" : ", alle äänikynnyksen"}`,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "meter-fill", style: { width: `${sh(o) * 100}%` } }),
        /* @__PURE__ */ i.jsx("div", { className: "meter-threshold", style: { left: `${sh(a) * 100}%` }, title: "Äänikynnys" })
      ]
    }
  );
}
function Gk({ mic: r, frame: a, heard: o, s: d, now: c }) {
  const h = nf(r.phase, a), p = o && c - o.at < 1500 ? o : null, m = h === "pitch" || h === "untuned" || p ? p ? `Kuulen: ${Ae(p.midi, d.flats, !0)} · ${kf(p.cents)} senttiä${p.tuned ? "" : " · viritä"}` : "Kuulen sävelen" : h === "noise" ? "Ääntä kuuluu, sävel ei vielä selvä" : h === "silent" ? "Kuuntelen… soita sävel" : qo[h];
  return /* @__PURE__ */ i.jsxs("div", { className: `mic-live ${h}`, children: [
    /* @__PURE__ */ i.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
    /* @__PURE__ */ i.jsx("span", { className: "mic-live-text", "data-testid": "mic-live", children: m }),
    r.phase === "on" && /* @__PURE__ */ i.jsx(yf, { frame: a, threshold: d.minRms })
  ] });
}
function Wk({ mic: r, frame: a, heard: o, accepted: d, now: c, s: h, change: p, devices: m, locked: y, calibrating: L, calibration: v, onTest: g, onStop: M, onCalibrate: I }) {
  const C = N.useId(), w = nf(r.phase, a), j = r.purpose === "test" && r.phase !== "off" && r.phase !== "error", B = r.phase === "on", E = o && c - o.at < 1500 ? o : null, W = E && (w === "pitch" || w === "untuned"), G = B && (a?.peak ?? 0) >= 0.98, Q = r.phase === "error" ? [] : Hk(w, h, r.info, G), T = !h.device || m.some((P) => P.deviceId === h.device), O = (P, ee) => p({ ...h, [P]: ee });
  return /* @__PURE__ */ i.jsxs("section", { className: "mic-panel", "aria-labelledby": `${C}-title`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
      /* @__PURE__ */ i.jsx("h2", { id: `${C}-title`, children: "Mikrofoni" }),
      /* @__PURE__ */ i.jsx("span", { children: h.input === "mic" ? "Valittu vastaustavaksi" : "Ei tarvita otelautavastauksissa" })
    ] }),
    /* @__PURE__ */ i.jsxs("p", { className: `mic-state ${w}`, "data-testid": "mic-state", "data-reading": w, children: [
      /* @__PURE__ */ i.jsx("span", { className: "mic-dot", "aria-hidden": "true" }),
      r.phase === "error" ? r.error : qo[w],
      w === "pitch" && E ? ` ${Ae(E.midi, h.flats, !0)}.` : ""
    ] }),
    /* @__PURE__ */ i.jsx("p", { className: "sr-only", role: "status", "aria-live": "polite", children: r.phase === "on" ? `Mikrofoni kuuntelee: ${Zo(r.info)}.` : r.phase === "error" ? r.error : qo[r.phase] }),
    r.phase === "off" && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin." }),
    B && /* @__PURE__ */ i.jsxs("dl", { className: "mic-readout", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Äänitulo" }),
        /* @__PURE__ */ i.jsxs("dd", { "data-testid": "mic-device", children: [
          Zo(r.info),
          r.info && r.info.channels > 1 ? ` · kanava ${(a?.channel ?? 0) + 1}/${r.info.channels}` : "",
          r.info?.fallback ? " · valittua laitetta ei löytynyt, käytössä oletustulo" : ""
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Äänitaso" }),
        /* @__PURE__ */ i.jsxs("dd", { children: [
          /* @__PURE__ */ i.jsx(yf, { frame: a, threshold: h.minRms }),
          /* @__PURE__ */ i.jsxs("span", { className: "meter-value", "data-testid": "mic-level", children: [
            La(Math.max(-60, vs(a?.rms ?? 0)), 0),
            " dB"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Sävel" }),
        /* @__PURE__ */ i.jsx("dd", { className: "mic-note", "data-testid": "mic-note", children: E ? Ae(E.midi, h.flats, !0) : "–" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Taajuus" }),
        /* @__PURE__ */ i.jsx("dd", { "data-testid": "mic-frequency", children: E ? `${La(E.frequency)} Hz` : "–" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Vire" }),
        /* @__PURE__ */ i.jsx("dd", { "data-testid": "mic-cents", children: E ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          kf(E.cents),
          " senttiä",
          /* @__PURE__ */ i.jsx("span", { className: `cents ${E.tuned ? "in" : "out"}`, "aria-hidden": "true", children: /* @__PURE__ */ i.jsx("span", { style: { left: `${50 + Math.max(-50, Math.min(50, E.cents))}%` } }) })
        ] }) : "–" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: W ? "" : "stale", children: [
        /* @__PURE__ */ i.jsx("dt", { children: "Tunnistuksen varmuus" }),
        /* @__PURE__ */ i.jsx("dd", { "data-testid": "mic-clarity", children: E ? `${Math.round(E.clarity * 100)} %` : a?.clarity !== void 0 && w === "noise" ? `${Math.round(a.clarity * 100)} % · alle rajan ${Math.round(h.clarity * 100)} %` : "–" })
      ] })
    ] }),
    B && d && c - d.timestamp < 4e3 && /* @__PURE__ */ i.jsxs("p", { className: "mic-accepted", "data-testid": "mic-accepted", children: [
      "Vakaa sävel ",
      Ae(d.midi, h.flats, !0),
      " kelpaisi vastaukseksi."
    ] }),
    Q.length > 0 && B && /* @__PURE__ */ i.jsx("ul", { className: "mic-advice", children: Q.map((P) => /* @__PURE__ */ i.jsx("li", { children: P }, P)) }),
    r.phase === "error" && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan." }),
    v && /* @__PURE__ */ i.jsx("p", { className: "tools-note", role: "status", children: v }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
      j ? /* @__PURE__ */ i.jsx("button", { type: "button", onClick: M, children: "Lopeta testi" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: h.input === "mic" && r.phase !== "on" ? "primary" : "", disabled: y, onClick: g, children: "Testaa mikrofoni" }),
      j && B && /* @__PURE__ */ i.jsx("button", { type: "button", disabled: L, onClick: I, children: L ? "Mitataan… ole hiljaa" : "Mittaa taustakohina" })
    ] }),
    y && r.purpose !== "test" && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä." }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Mikrofonin asetukset" }),
      /* @__PURE__ */ i.jsxs("fieldset", { className: "plain", disabled: y, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "settings-grid", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsx("label", { htmlFor: `${C}-device`, children: "Äänitulo" }),
            /* @__PURE__ */ i.jsxs("select", { id: `${C}-device`, value: h.device, onChange: (P) => O("device", P.target.value), children: [
              /* @__PURE__ */ i.jsx("option", { value: "", children: "Järjestelmän oletustulo" }),
              !T && /* @__PURE__ */ i.jsx("option", { value: h.device, children: "Aiemmin valittu laite" }),
              m.map((P, ee) => /* @__PURE__ */ i.jsx("option", { value: P.deviceId, children: P.label || `Äänitulo ${ee + 1}` }, P.deviceId))
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${C}-rms`, children: [
              "Äänikynnys · ",
              La(vs(h.minRms), 0),
              " dB"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${C}-rms`, type: "range", min: "0.001", max: "0.15", step: "0.001", value: h.minRms, onChange: (P) => O("minRms", Number(P.target.value)) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${C}-clarity`, children: [
              "Varmuuskynnys · ",
              Math.round(h.clarity * 100),
              " %"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${C}-clarity`, type: "range", min: "0.85", max: "0.99", step: "0.01", value: h.clarity, onChange: (P) => O("clarity", Number(P.target.value)) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${C}-stability`, children: [
              "Vakaa sävel vähintään · ",
              h.stability,
              " ms"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${C}-stability`, type: "range", min: "120", max: "800", step: "20", value: h.stability, onChange: (P) => O("stability", Number(P.target.value)) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ i.jsxs("label", { htmlFor: `${C}-cents`, children: [
              "Vireen toleranssi · ±",
              h.cents,
              " senttiä"
            ] }),
            /* @__PURE__ */ i.jsx("input", { id: `${C}-cents`, type: "range", min: "10", max: "45", step: "1", value: h.cents, onChange: (P) => O("cents", Number(P.target.value)) })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("p", { className: "tools-note", children: [
          m.length ? "Valitse äänikortin soitintulo, jos kitara on kytketty siihen." : "Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.",
          " Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana."
        ] })
      ] })
    ] })
  ] });
}
const Qk = (r) => r.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[r.scale]) : Ai[r.mode === "caged" ? "maj" : r.chord].tones, $h = (r, a) => Qk(r).find(([o]) => o === a)?.[1], gf = (r) => r.mode === "scale" || r.mode === "chord" || r.mode === "caged", Yk = (r) => r.direction === "up" ? "ylöspäin" : "alaspäin";
function Jk(r, a) {
  return a.choices === "note" ? "Valitse sävelnimi." : a.choices === "degree" ? "Valitse aste." : r.input === "mic" ? "Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa." : "Napauta oikeaa kohtaa otelaudalla.";
}
function Xk(r, a, o, d, c) {
  return a.choices === "degree" ? `Oikein! ${ur(r.root, a.interval, a.degree)} on ${a.degree}. aste.` : gf(r) ? `Oikein! ${a.degree}. aste on ${ur(r.root, a.interval, a.degree)}.` : r.mode === "interval" ? `Oikein! ${Ae(a.reference, r.flats, !0)} → ${a.name} on ${cr[a.interval]} ${Yk(a)}.` : r.mode === "notes" ? o === "board" && c ? `Oikein! ${Ae(c.midi, r.flats)} on ${$a[c.string]}: ${$t(c.fret)}.` : `Oikein! Soitit sävelen ${Ae(d, r.flats, !0)}.` : `Oikein! Sävel oli ${a.name}.`;
}
function qk(r, a, o, d, c) {
  if (o === "note") return `Ei ${Ae(d, r.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (o === "degree") return `Ei ${$h(r, d) ?? "?"}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!c) return "Vastaus ei osunut. Yritä uudelleen.";
  const h = De(c.midi) === De(a.midi);
  if (r.mode === "notes")
    return c.string !== a.position.string ? `Tuo on ${ft[c.string]}-kieli. Etsi sävel ${nu[a.position.string]}.` : h ? `Oikea sävelnimi, mutta eri oktaavi. Etsi ${a.name}.` : `Tuo on ${Ae(c.midi, r.flats)}. Etsi ${a.name}.`;
  if (gf(r)) {
    const p = De(c.midi - r.root), m = $h(r, p), y = r.mode === "scale" ? "asteikkoon" : "sointuun";
    return m ? h && a.check === "pitch" && c.midi !== a.midi ? `Oikea aste, mutta eri oktaavi. Etsi ${a.name}.` : h ? `Oikea sävel, mutta ${r.mode === "caged" ? "muodon" : r.box ? "boksin" : "harjoitusalueen"} ulkopuolelta. Etsi ${a.degree}. aste sen sisältä.` : `Tuo on ${ur(r.root, p, m)} eli ${m}. aste. Etsi ${a.degree}. aste.` : `Tuo on ${Ae(c.midi, r.flats)}, joka ei kuulu ${y}. Etsi ${a.degree}. aste.`;
  }
  return h ? "Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen." : `Tuo on ${Ae(c.midi, r.flats, !0)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
function Zk(r, a, o) {
  const d = Ae(o, r.flats, !0);
  return De(o) === De(a.midi) ? `Kuulin sävelen ${d}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.` : `Kuulin sävelen ${d}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
function jf(r, a = !1) {
  const o = r.split(":"), d = (p) => Number(o[p]), c = (...p) => p.every((m) => Number.isInteger(d(m))), h = (p, m) => ft[p] ? `${ft[p]}-kieli, ${$t(m)}` : null;
  switch (o[0]) {
    case "notes":
      return c(1, 2) ? h(d(1), d(2)) : null;
    case "ear-note":
      return c(1) ? `Kuultu sävel ${Ae(d(1), a)}${o[2] === "ref" ? " (vertailusävelen kanssa)" : ""}` : null;
    case "repeat":
      return o.length === 2 && c(1) ? `Kuule ja toista: ${Ae(d(1), a, !0)}` : c(1, 2) && h(d(1), d(2)) ? `Kuule ja toista: ${h(d(1), d(2))}` : null;
    case "interval":
      return c(1) && cr[d(1)] ? `${cr[d(1)]} ${o[2] === "up" ? "ylöspäin" : "alaspäin"}` : null;
    case "chord": {
      const p = o[2];
      if (!c(1, 3) || !Ai[p]) return null;
      const m = Ai[p].tones.find(([y]) => y === d(3))?.[1];
      return m ? `${Fh(d(1), p)}: ${m}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
    }
    case "scale": {
      const p = Ie.SCALES[o[2]];
      if (!c(1) || !p) return null;
      const m = `${fi(d(1))}-${p.name}`;
      if (o.length === 5 && c(3)) {
        const y = Ie.scaleNotes(p).find(([L]) => L === d(3))?.[1];
        return y ? `${m}: ${y}. aste${o[4] === "degree" ? " (asteen tunnistus)" : ""}` : null;
      }
      return c(3, 4) && h(d(3), d(4)) ? `${m}: ${h(d(3), d(4))}` : null;
    }
    case "caged": {
      if (!c(1) || !"CAGED".includes(o[2] ?? "?")) return null;
      const p = `${fi(d(1))}-duuri, ${o[2]}-muoto`;
      if (o.length === 4 && c(3)) {
        const m = Ai.maj.tones.find(([y]) => y === d(3))?.[1];
        return m ? `${p}: ${m}. aste` : null;
      }
      return c(3, 4) && h(d(3), d(4)) ? `${p}: ${h(d(3), d(4))}` : null;
    }
    default:
      return null;
  }
}
function Rh(r) {
  return Object.entries(r).flatMap(([a, o]) => {
    const [d, c, h, ...p] = a.split(":");
    return !p.length || !["solo", "guided"].includes(h) ? [] : [{ key: a, input: d, check: c, guided: h === "guided", item: p.join(":"), mode: p[0], stat: o }];
  });
}
const eu = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", ey = { mic: "mikrofoni", board: "otelauta", note: "sävelnimet", degree: "asteet" };
function ty(r) {
  const a = r.solo === void 0 ? `${r.first}/${r.count} heti oikein` : r.solo ? `itsenäisesti ${r.soloFirst ?? 0}/${r.solo} heti oikein${r.count > r.solo ? ` · ${r.count - r.solo} vihjeen kanssa` : ""}` : `${r.count} vastausta vihjeen kanssa`;
  return `${new Date(r.at).toLocaleString("fi-FI", { dateStyle: "short", timeStyle: "short" })} · ${ds(r.mode)}${r.hints ? ` · ${Da[r.hints].title}` : ""} · ${a} · keskimäärin ${eu(r.ms / Math.max(1, r.count))}${r.complete ? "" : " · keskeytetty"}`;
}
function ny({ store: r, s: a, locked: o, changed: d }) {
  const [c, h] = N.useState(""), p = N.useRef(null), { recent: m, sessions: y, stats: L } = r.data, v = Pi(a), g = Dh(a), M = [...new Set(m.map((E) => E.mode))].map((E) => {
    const W = m.filter((G) => G.mode === E);
    return { mode: E, ...Vo(W), last: Math.max(...W.map((G) => G.at)) };
  }).sort((E, W) => W.last - E.last), I = Rh(L).filter((E) => !E.guided && E.mode === a.mode && E.input === v && E.check === g && E.stat.attempts >= 3).map((E) => ({ ...E, score: iu(E.stat), text: jf(E.item, a.flats) })).filter((E) => E.text && E.score < 0.8).sort((E, W) => E.score - W.score).slice(0, 5), C = Rh(L).reduce((E, W) => E + W.stat.attempts, 0);
  function w() {
    const E = new Blob([JSON.stringify(r.data, null, 2)], { type: "application/json" }), W = URL.createObjectURL(E), G = document.createElement("a");
    G.href = W, G.download = "musiikin-kartta-harjoittelu.json", G.click(), setTimeout(() => URL.revokeObjectURL(W), 1e3);
  }
  async function j(E) {
    if (E)
      try {
        const W = await E.text();
        if (C && !window.confirm("Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?")) return;
        r.restore(W), h("Varmuuskopio palautettu."), d();
      } catch {
        h("Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.");
      } finally {
        p.current && (p.current.value = "");
      }
  }
  function B() {
    window.confirm("Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.") && (r.clearProgress(), h("Harjoitustulokset poistettu."), d());
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "progress-panel", "aria-labelledby": "progress-title", children: [
    /* @__PURE__ */ i.jsx("h2", { id: "progress-title", children: "Edistymisesi" }),
    C === 0 ? /* @__PURE__ */ i.jsx("p", { children: "Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { children: [
        C,
        " vastattua kysymystä · ",
        y.length,
        " harjoituskertaa. ",
        /* @__PURE__ */ i.jsx("strong", { children: "Itsenäisesti" }),
        " tarkoittaa vastausta ilman vihjettä, ",
        /* @__PURE__ */ i.jsx("strong", { children: "heti oikein" }),
        " oikeaa vastausta ensimmäisellä yrityksellä."
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "fret-scroll", children: /* @__PURE__ */ i.jsxs("table", { className: "summary-table", children: [
        /* @__PURE__ */ i.jsx("caption", { children: "Viimeisimmät vastaukset harjoituksittain" }),
        /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Harjoitus" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Vastauksia" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Itsenäisesti heti oikein" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Vihjeen kanssa" }),
          /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Keskiaika" })
        ] }) }),
        /* @__PURE__ */ i.jsx("tbody", { children: M.map((E) => /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("th", { scope: "row", children: ds(E.mode) }),
          /* @__PURE__ */ i.jsx("td", { children: E.count }),
          /* @__PURE__ */ i.jsx("td", { children: E.solo ? `${E.soloFirst}/${E.solo} · ${Math.round(E.soloFirst / E.solo * 100)} %` : "–" }),
          /* @__PURE__ */ i.jsx("td", { children: E.guided }),
          /* @__PURE__ */ i.jsx("td", { children: eu(E.ms / E.count) })
        ] }, E.mode)) })
      ] }) })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: "Seuraavaksi" }),
    I.length ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Nämä kohteet ovat harjoituksessa ",
        ds(a.mode),
        " vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin."
      ] }),
      /* @__PURE__ */ i.jsx("ul", { children: I.map((E) => /* @__PURE__ */ i.jsxs("li", { children: [
        E.text,
        " · viime aikoina ",
        Math.round(dr(E.stat) * 100),
        " % heti oikein · ",
        eu(hr(E.stat))
      ] }, E.key)) })
    ] }) : /* @__PURE__ */ i.jsx("p", { children: C ? `Harjoituksessa ${ds(a.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : "Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti." }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Otelaudan sävelten osaamiskartta" }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla (",
        ey[a.input],
        ") ja tarkistuksella (",
        a.check === "class" ? "sävelnimi" : "tarkka sävelkorkeus",
        "). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä."
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: "Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50." }),
      /* @__PURE__ */ i.jsx(Rp, { area: { strings: a.strings, min: a.min, max: a.max, fixed: "" }, stats: L, input: a.input, check: a.check, flats: a.flats })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Viimeisimmät harjoituskerrat" }),
      y.length ? /* @__PURE__ */ i.jsx("ul", { children: y.slice(-10).reverse().map((E) => /* @__PURE__ */ i.jsx("li", { children: ty(E) }, E.id)) }) : /* @__PURE__ */ i.jsx("p", { children: "Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä." })
    ] }),
    /* @__PURE__ */ i.jsxs("details", { children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Varmuuskopio ja tietojen poisto" }),
      /* @__PURE__ */ i.jsx("p", { children: "Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli." }),
      /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", onClick: w, children: "Lataa varmuuskopio" }),
        /* @__PURE__ */ i.jsx("button", { type: "button", disabled: o, onClick: () => p.current?.click(), children: "Palauta varmuuskopio" }),
        /* @__PURE__ */ i.jsx("input", { ref: p, type: "file", accept: "application/json,.json", hidden: !0, "aria-label": "Varmuuskopiotiedosto", onChange: (E) => {
          j(E.target.files?.[0]);
        } }),
        /* @__PURE__ */ i.jsx("button", { type: "button", disabled: o || !C, onClick: B, children: "Poista harjoitustulokset" })
      ] }),
      c && /* @__PURE__ */ i.jsx("p", { role: "status", children: c })
    ] }),
    r.warning && /* @__PURE__ */ i.jsx("p", { role: "status", className: "error", children: r.warning })
  ] });
}
function iy() {
  try {
    return new Gd(localStorage);
  } catch {
    return new Gd();
  }
}
const Oh = (r) => ({ minRms: r.minRms, minClarity: r.clarity, stabilityMs: r.stability, centsTolerance: r.cents }), sy = (r) => (r / 1e3).toFixed(1).replace(".", ",") + " s", ry = [0, 2, 4, 5, 7, 9, 11];
function ay(r) {
  return r.mode === "notes" ? ["book/osa-5.html#otelauta", "Otelauta ja oktaavimuodot"] : r.mode === "caged" ? ["book/osa-6.html#caged", "CAGED"] : r.mode === "chord" ? r.chord === "dom7" ? ["book/osa-10.html#septimisoinnut", "Septimisoinnut"] : ["book/osa-3.html#harmoninen-kentta", "Harmoninen kenttä"] : r.mode === "scale" ? ["mp", "majp"].includes(r.scale) ? ["book/osa-8.html#pentatoniikka", "Pentatoniikka"] : ["book/osa-11.html#moodit", "Moodit käytännössä"] : ["book/osa-7.html#intervallit", "Asteet ja intervallit korvalla"];
}
function ly() {
  const [r] = N.useState(iy), [a, o] = N.useState(() => Sp(location.search, r.data.settings)), [, d] = N.useReducer((H) => H + 1, 0), c = N.useRef(null), h = N.useRef(new Pv()), p = N.useRef(new Ri()), m = N.useRef(0), y = N.useRef(), L = N.useRef(), v = N.useRef(null), g = N.useRef(0), M = N.useRef(null), I = N.useRef(a);
  I.current = a;
  const [C, w] = N.useState({ phase: "off", purpose: "none" }), j = N.useRef(C), B = (H) => {
    j.current = H, w(H);
  }, [E, W] = N.useState(null), [G, Q] = N.useState(null), [T, O] = N.useState(null), [P, ee] = N.useState(0), [Y, ve] = N.useState([]), [fe, q] = N.useState(!1), [de, ge] = N.useState(!1), [Ee, me] = N.useState(""), [$, J] = N.useState("info"), [X, x] = N.useState(""), [A, oe] = N.useState(0), [V, ce] = N.useState([]), [_, U] = N.useState([]), [Z, D] = N.useState(null), [ae, z] = N.useState(!1), [ie, re] = N.useState(""), [he, ke] = N.useState(""), [we, $e] = N.useState(() => {
    const H = new URLSearchParams(location.search);
    return H.has("tila") || H.has("vanha") ? "legacy" : hf(H.get("kappale")) ? "songs" : Gp(H.get("polku"));
  });
  function He() {
    $e(null);
    const H = new URL(location.href);
    H.searchParams.has("polku") && (H.searchParams.delete("polku"), history.replaceState(history.state, "", H.pathname + H.search + H.hash));
  }
  const Ye = () => {
    vv().then(ve).catch(() => {
    });
  };
  function We() {
    clearTimeout(L.current), v.current = null, z(!1);
  }
  function Xe() {
    W(null), Q(null), O(null);
  }
  function ut() {
    h.current.stop(), We(), B({ phase: "off", purpose: "none" }), Xe();
  }
  async function Je(H) {
    if (h.current.active && j.current.phase === "on")
      return We(), B({ ...j.current, purpose: H }), h.current.rearm(), !0;
    B({ phase: "requesting", purpose: H }), Xe();
    try {
      const ue = await h.current.start(I.current.device, {
        ...Oh(I.current),
        onFrame: (ze) => Xt.current.frame(ze),
        onStableNote: (ze) => Xt.current.stable(ze)
      }, () => Xt.current.lost());
      return ue ? (B({ phase: "on", purpose: H, info: ue }), Ye(), !0) : !1;
    } catch (ue) {
      return B({ phase: "error", purpose: "none", error: Av(ue) }), !1;
    }
  }
  function Ve(H) {
    v.current?.push(H.rms);
    const ue = performance.now();
    ue - g.current < 66 || (g.current = ue, W(H), ee(ue), H.midi !== void 0 && H.frequency !== void 0 && Q({ midi: H.midi, frequency: H.frequency, cents: H.cents ?? 0, clarity: H.clarity ?? 0, tuned: H.status === "pitch", at: ue }));
  }
  function it(H) {
    j.current.purpose === "test" ? O(H) : j.current.purpose === "round" && Ge(H.midi, "mic", void 0, H.heldMs);
  }
  function Kt() {
    const H = j.current.purpose === "round";
    We(), Xe(), B({ phase: "error", purpose: "none", error: "Äänitulo katkesi. Kytke mikrofoni tai äänikortti takaisin ja yritä uudelleen." });
    const ue = c.current;
    H && ue && ["active", "feedback", "paused"].includes(ue.phase) && (_t(), ge(!1), ue.pause(), x("Äänitulo katkesi, joten harjoitus on tauolla. Kytke laite takaisin ja jatka, tai lopeta harjoitus."), d());
  }
  const Xt = N.useRef({ frame: Ve, stable: it, lost: Kt });
  Xt.current = { frame: Ve, stable: it, lost: Kt };
  function Et(H) {
    const ue = Ra(H), ze = ue.device !== I.current.device;
    I.current = ue, o(ue), r.settings(ue), x(""), h.current.active && (ze && j.current.purpose === "test" ? (ut(), Je("test")) : h.current.setOptions(Oh(ue)));
  }
  function un(H) {
    ke(""), c.current = null, $e(H);
  }
  function qt() {
    re(""), Je("test");
  }
  function Zt() {
    j.current.phase !== "on" || j.current.purpose !== "test" || (We(), v.current = [], z(!0), re("Mitataan taustakohinaa kolme sekuntia. Älä soita."), L.current = setTimeout(() => {
      const H = v.current ?? [];
      if (We(), H.length < 10) {
        re("Mittaus ei onnistunut. Yritä uudelleen.");
        return;
      }
      const { threshold: ue, noise: ze, loud: Ot } = Lv(H);
      Et({ ...I.current, minRms: ue }), re(`Taustakohina on ${Math.round(vs(ze))} dB ja äänikynnys nyt ${Math.round(vs(ue))} dB. ${Ot ? "Ympäristö on äänekäs: vähennä taustamelua ja mittaa uudelleen." : "Soita yksi sävel ja tarkista, että mittari nousee kynnysviivan yli."}`);
    }, 3e3));
  }
  function _t() {
    m.current++, clearTimeout(y.current), p.current.stop();
  }
  function be(H, ue) {
    if (!H.results.length) return;
    const ze = Vo(H.results);
    r.session({
      id: H.id,
      mode: H.settings.mode,
      count: ze.count,
      first: ze.first,
      ms: ze.ms,
      solo: ze.solo,
      soloFirst: ze.soloFirst,
      hints: H.settings.hints,
      at: Date.now(),
      complete: ue
    });
  }
  async function Ut(H) {
    if (!H.question?.sound.length || H.phase !== "active") return;
    _t();
    const ue = m.current;
    H.pause(), h.current.pause(), ge(!0), J("info"), me("Kuuntele…"), d();
    try {
      await p.current.play(H.question.sound);
    } catch {
      ue === m.current && x("Esimerkkiääntä ei voitu soittaa. Tarkista laitteen äänenvoimakkuus ja paina Kuuntele uudelleen.");
    }
    ue !== m.current || c.current !== H || (H.resume(), h.current.resume(), ge(!1), me(""), d());
  }
  async function _e(H) {
    ce([]), U([]), D(null), x(""), oe(H.hintLevel), h.current.rearm(), J("info"), me(""), d(), H.question?.sound.length && await Ut(H);
  }
  async function Le() {
    const H = I.current, ue = zo(H);
    if (ue) {
      x(ue);
      return;
    }
    _t();
    const ze = m.current;
    if (x(""), re(""), ke(""), Ea(H)) {
      q(!0);
      const dt = await Je("round");
      if (ze !== m.current) return;
      if (q(!1), !dt) {
        x("Mikrofoni ei käynnistynyt, joten harjoitus ei alkanut. Katso ohje kohdasta Mikrofoni tai vaihda vastaustavaksi otelauta.");
        return;
      }
    } else j.current.phase !== "off" && ut();
    const Ot = new Hp(H, () => r.data.stats, (dt) => r.record(dt));
    try {
      Ot.start();
    } catch (dt) {
      j.current.purpose === "round" && ut(), x(dt instanceof Error ? dt.message : "Harjoitusta ei voitu aloittaa.");
      return;
    }
    c.current = Ot, requestAnimationFrame(() => M.current?.scrollIntoView({ block: "start", behavior: "auto" })), await _e(Ot);
  }
  function Re() {
    _t(), q(!1), ut();
  }
  function Ge(H, ue, ze, Ot = 0) {
    const dt = c.current, Pn = dt?.question;
    if (!dt || !Pn || dt.phase !== "active") return;
    const Ss = dt.answer(H, ue, ze, Ot);
    if (Ss !== "ignored") {
      if (Ss === "candidate")
        D(H), J("bad"), me(Zk(dt.settings, Pn, H));
      else if (Ss === "wrong")
        ze ? ce((Un) => [...Un, ze]) : U((Un) => [...Un, H]), J("bad"), me(qk(dt.settings, Pn, ue, H, ze));
      else if (D(null), J("good"), me(Xk(dt.settings, Pn, ue, H, ze)), be(dt, !1), dt.settings.advance) {
        const Un = m.current;
        y.current = setTimeout(() => {
          Un === m.current && rt();
        }, ue === "mic" ? 1800 : 1400);
      }
      d();
    }
  }
  async function rt() {
    const H = c.current;
    if (!(!H || H.phase !== "feedback")) {
      _t();
      try {
        H.next();
      } catch (ue) {
        Rt(!1), x(ue instanceof Error ? ue.message : "Seuraavaa kysymystä ei voitu muodostaa.");
        return;
      }
      if (H.phase === "done") {
        Rt(!0);
        return;
      }
      await _e(H);
    }
  }
  function Rt(H = !1) {
    _t(), ge(!1), q(!1), (j.current.purpose === "round" || j.current.phase === "requesting") && ut();
    const ue = c.current;
    ue && (ue.stop(), be(ue, H)), D(null), oe(0), ce([]), U([]), x(""), ke(H ? "complete" : "stopped"), J("info"), me(""), d();
  }
  function kt() {
    const H = c.current;
    if (!H || !["active", "feedback", "paused"].includes(H.phase)) return;
    _t(), ge(!1), H.pause();
    const ue = j.current.purpose === "round";
    ue && ut(), J("info"), me(`Harjoitus on tauolla.${ue ? " Mikrofoni on suljettu." : ""}`), d();
  }
  async function en() {
    const H = c.current;
    if (!H || H.phase !== "paused" || de) return;
    _t();
    const ue = m.current;
    if (x(""), Ea(H.settings)) {
      q(!0);
      const ze = await Je("round");
      if (ue !== m.current) return;
      if (q(!1), !ze) {
        x("Mikrofoni ei käynnistynyt. Harjoitus on yhä tauolla.");
        return;
      }
    }
    H.resume(), J("info"), me(""), d(), H.phase === "active" && (h.current.rearm(), H.question?.sound.length && await Ut(H));
  }
  function Tn(H) {
    const ue = c.current;
    !ue || ue.phase !== "active" || (ue.useHint(H), oe(H), d());
  }
  const yn = N.useRef({ hidden: () => {
  }, restored: () => {
  } });
  yn.current = {
    hidden: () => {
      const H = c.current;
      H && ["active", "feedback"].includes(H.phase) || de ? kt() : j.current.phase !== "off" && j.current.phase !== "error" && (_t(), q(!1), ut());
    },
    restored: () => {
      q(!1), ge(!1), B({ phase: "off", purpose: "none" }), Xe(), d();
    }
  }, N.useEffect(() => {
    Ye();
    const H = () => Ye();
    navigator.mediaDevices?.addEventListener?.("devicechange", H);
    const ue = () => {
      m.current++, clearTimeout(y.current), clearTimeout(L.current), h.current.stop(), p.current.stop(), _v(), c.current?.pause();
    }, ze = () => {
      document.hidden && yn.current.hidden();
    }, Ot = (dt) => {
      dt.persisted && yn.current.restored();
    };
    return document.addEventListener("visibilitychange", ze), window.addEventListener("pagehide", ue), window.addEventListener("pageshow", Ot), () => {
      ue(), navigator.mediaDevices?.removeEventListener?.("devicechange", H), document.removeEventListener("visibilitychange", ze), window.removeEventListener("pagehide", ue), window.removeEventListener("pageshow", Ot);
    };
  }, []);
  const gn = N.useRef(null), pr = `${c.current?.id}:${c.current?.index}:${c.current?.phase}:${de}`;
  N.useEffect(() => {
    const H = c.current, ue = M.current, ze = document.activeElement;
    !H || !ue || !(ze === document.body || ue.contains(ze)) || (H.phase === "feedback" ? gn.current?.focus({ preventScroll: !0 }) : H.phase === "active" && !de && (ze === document.body || ze === gn.current) && ue.querySelector('.practice-board button[tabindex="0"]:not(:disabled), .answer-choices button:not(:disabled)')?.focus({ preventScroll: !0 }));
  }, [pr]);
  const Fe = c.current, et = !!Fe && ["active", "paused", "feedback"].includes(Fe.phase), qe = et ? Fe.settings : a, ct = et ? Fe.question : void 0, Ht = !!ct && !!Fe?.answered, tn = et && Fe.phase === "paused" && !de && !Ht, Oi = et && Fe.phase === "active" && !de, Mn = et ? null : zo(a), Vn = et || fe, mi = $i(qe), gs = Fp(qe), pi = ct && !Ht ? A : 0, js = ct ? Up(qe, ct, Ht ? 2 : pi) : { marks: [], text: "" }, vr = [...new Map([...js.marks, ...Ht ? [] : V.map((H) => ({ ...H, label: Ae(H.midi, qe.flats), kind: "wrong" }))].map((H) => [Ue(H), H])).values()], _n = et && Ea(qe), kr = !!ct && !tn && (ct.choices === "position" || vr.length > 0), xt = Fe ? Vo(Fe.results) : null, Ba = !Fe || qe.hints !== "fade" ? "" : Fe.index <= 3 ? " · vastaus näkyy" : Fe.index <= 6 ? " · apupiste näkyy" : " · ilman vihjettä", xs = Fe && !et ? Fe.results.filter((H) => H.errors > 0 || H.hint) : [], [yr, gr] = ay(qe), An = /* @__PURE__ */ i.jsxs("div", { className: "intro", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "LÖYDÄ · KUUNTELE · SOITA" }),
    /* @__PURE__ */ i.jsx("h1", { children: "Kitaraharjoittelija" }),
    /* @__PURE__ */ i.jsx("p", { children: "Harjoittele yksi taito kerrallaan: opi otelauta, kuuntele ja soita." })
  ] }), Kn = r.data.notice === "hints-default" && /* @__PURE__ */ i.jsxs("div", { className: "notice", role: "status", "data-testid": "hints-notice", children: [
    /* @__PURE__ */ i.jsxs("p", { children: [
      /* @__PURE__ */ i.jsx("strong", { children: "Harjoittelutapa on muuttunut." }),
      " Oikea kohta ei enää näy heti kysymyksen alussa: tapa on nyt ",
      /* @__PURE__ */ i.jsx("em", { children: "Testaa osaamistasi" }),
      ", ja vihjeen saa pyytämällä. Aiemmat tuloksesi ja muut asetuksesi ovat tallessa. Jos haluat vihjeet takaisin, valitse ",
      /* @__PURE__ */ i.jsx("em", { children: "Opettele" }),
      " tai ",
      /* @__PURE__ */ i.jsx("em", { children: "Vähennä vihjeitä" }),
      "."
    ] }),
    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
      r.dismissNotice(), d();
    }, children: "Selvä" })
  ] });
  return !et && we === null ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(Qp, { onSelect: un })
  ] }) : !et && we === "scales" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(mk, { onBack: He })
  ] }) : !et && we === "ear" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(yk, { onBack: He })
  ] }) : !et && we === "chords" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(xk, { onBack: He })
  ] }) : !et && we === "songs" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx(Uk, { onBack: He })
  ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    An,
    Kn,
    /* @__PURE__ */ i.jsx("p", { className: "exercise-theory", children: /* @__PURE__ */ i.jsxs("a", { href: yr, children: [
      "Lue tämän harjoituksen teoria: ",
      gr,
      " →"
    ] }) }),
    we !== "legacy" && /* @__PURE__ */ i.jsxs("section", { className: "selected-track", "aria-label": "Valittu oppimispolku", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "back-link", onClick: () => {
        et && Rt(), He();
      }, children: "← Oppimispolut" }),
      /* @__PURE__ */ i.jsx("h2", { children: we === "ear" ? "Sävelkorva ja otelauta" : "Soinnut ja musiikin rakenne" }),
      /* @__PURE__ */ i.jsx("p", { children: we === "ear" ? "Ensimmäinen harjoitus: Kuule sävel ja etsi se kitarasta. Sama vanha kuunteluharjoitus selkeässä aloitusnäkymässä." : "Ensimmäinen harjoitus: Rakenna C-duurisointua sen sävelistä C, E ja G. Tämä käyttää nykyistä Sointusävelet-harjoitusta." }),
      /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Muut tämän polun harjoitukset lisätään myöhemmin. Alla on yksi oikeasti toimiva vanha harjoitus." })
    ] }),
    et ? /* @__PURE__ */ i.jsxs("p", { className: "round-setup", "data-testid": "round-setup", children: [
      /* @__PURE__ */ i.jsx("strong", { children: ds(qe.mode) }),
      " · ",
      Jd(qe)
    ] }) : we === "legacy" ? /* @__PURE__ */ i.jsx(Xd, { s: a, change: Et, locked: Vn, problem: Mn }) : /* @__PURE__ */ i.jsxs("details", { className: "track-settings", children: [
      /* @__PURE__ */ i.jsx("summary", { children: "Muuta harjoituksen asetuksia" }),
      /* @__PURE__ */ i.jsx(Xd, { s: a, change: Et, locked: Vn, problem: Mn })
    ] }),
    !et && (we === "legacy" || Ea(a)) && /* @__PURE__ */ i.jsx(
      Wk,
      {
        mic: C,
        frame: E,
        heard: G,
        accepted: T,
        now: P,
        s: a,
        change: Et,
        devices: Y,
        locked: fe,
        calibrating: ae,
        calibration: ie,
        onTest: qt,
        onStop: ut,
        onCalibrate: Zt
      }
    ),
    /* @__PURE__ */ i.jsxs("section", { className: "session-panel", "aria-labelledby": "session-title", ref: M, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "session-top", children: [
        /* @__PURE__ */ i.jsx("h2", { id: "session-title", children: ds(qe.mode) }),
        /* @__PURE__ */ i.jsx("span", { "data-testid": "round-status", children: et ? `Kysymys ${Fe.index}${Fe.total ? " / " + Fe.total : " · vapaa harjoittelu"} · ${Da[qe.hints].title}${Ba}${Fe.phase === "paused" && !de ? " · tauolla" : ""}` : he === "complete" ? "Kierros valmis" : "Valmis aloittamaan" })
      ] }),
      !et && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        Fe && Fe.results.length > 0 && xt ? /* @__PURE__ */ i.jsxs("div", { className: "round-summary", "data-testid": "round-summary", children: [
          /* @__PURE__ */ i.jsx("h3", { children: he === "complete" ? "Kierros valmis" : "Harjoitus lopetettu" }),
          /* @__PURE__ */ i.jsxs("dl", { children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Itsenäisesti heti oikein" }),
              /* @__PURE__ */ i.jsx("dd", { "data-testid": "summary-solo", children: xt.solo ? `${xt.soloFirst} / ${xt.solo}` : "–" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Vihjeen kanssa" }),
              /* @__PURE__ */ i.jsx("dd", { "data-testid": "summary-guided", children: xt.guided })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("dt", { children: "Keskimääräinen aika" }),
              /* @__PURE__ */ i.jsx("dd", { children: sy(xt.ms / xt.count) })
            ] })
          ] }),
          xt.solo === 0 && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Kaikissa vastauksissa oli vihje näkyvissä. Kokeile seuraavaksi tapaa Testaa osaamistasi tai Vähennä vihjeitä." }),
          xs.length > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("p", { children: "Näitä kannattaa kerrata:" }),
            /* @__PURE__ */ i.jsx("ul", { children: [...new Set(xs.map((H) => jf(H.item, a.flats)).filter(Boolean))].slice(0, 6).map((H) => /* @__PURE__ */ i.jsx("li", { children: H }, H)) })
          ] })
        ] }) : /* @__PURE__ */ i.jsx("p", { className: "question idle", children: Jd(a) }),
        /* @__PURE__ */ i.jsx("div", { className: "action-row", children: fe ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: !0, children: "Avataan mikrofonia…" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: Re, children: "Peru" })
        ] }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: !!Mn, onClick: () => {
          Le();
        }, children: Fe?.results.length ? "Aloita uusi kierros" : "Aloita harjoitus" }) }),
        !Fe && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Harjoitus ei näytä oikeaa vastausta, ellet valitse tapaa Opettele tai pyydä vihjettä." })
      ] }),
      et && ct && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("p", { className: "question", id: "question", "aria-live": "polite", children: tn ? "Harjoitus on tauolla." : ct.prompt }),
        /* @__PURE__ */ i.jsx("p", { className: "how", "data-testid": "instruction", children: tn ? "Kysymys palaa näkyviin, kun jatkat." : de ? "Kuuntele esimerkki. Vastaa, kun ääni on päättynyt." : Jk(qe, ct) }),
        Fe.hintLevel > 0 && !Ht && /* @__PURE__ */ i.jsx("p", { className: "hint-note", "data-testid": "hint-note", children: qe.hints === "always" ? "Opettelutila: vastaus näkyy, eikä tätä lasketa itsenäiseksi osaamiseksi." : "Vihje käytetty: tämä vastaus tilastoidaan vihjeen kanssa annetuksi." }),
        _n && /* @__PURE__ */ i.jsx(Gk, { mic: C, frame: E, heard: G, s: qe, now: P }),
        ct.choices === "note" && !tn && /* @__PURE__ */ i.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Sävelnimet", children: (qe.accidentals ? Array.from({ length: 12 }, (H, ue) => ue) : ry).map((H) => /* @__PURE__ */ i.jsx("button", { type: "button", className: _.includes(H) ? "wrong" : Ht && H === ct.midi % 12 ? "right" : "", disabled: !Oi || _.includes(H), onClick: () => Ge(H, "note"), children: Ae(H, qe.flats) }, H)) }),
        ct.choices === "degree" && !tn && /* @__PURE__ */ i.jsx("div", { className: "answer-choices", role: "group", "aria-label": "Asteet", children: (qe.mode === "scale" ? Ie.scaleNotes(Ie.SCALES[qe.scale]) : Ai[qe.chord].tones).map(([H, ue]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: _.includes(H) ? "wrong" : Ht && H === ct.interval ? "right" : "", disabled: !Oi || _.includes(H), onClick: () => Ge(H, "degree"), children: ue }, H)) }),
        kr && /* @__PURE__ */ i.jsx(
          bn,
          {
            area: gs,
            marks: vr,
            disabled: !Oi || ct.choices !== "position" || qe.input === "mic",
            onAnswer: (H) => Ge(H.midi, "board", H),
            caption: mi.fixed === "shape" ? `${qe.shape}-muodon alue` : mi.fixed === "box" ? `Boksin ${qe.box} alue` : "Otelauta"
          }
        ),
        !Ht && !tn && pi > 0 && js.text && /* @__PURE__ */ i.jsx("p", { className: "hint-text", "data-testid": "hint-text", children: js.text }),
        /* @__PURE__ */ i.jsx("p", { className: `feedback ${$}`, role: "status", "aria-live": "polite", "data-testid": "feedback", children: Ee }),
        Z !== null && Fe.phase === "active" && /* @__PURE__ */ i.jsxs("div", { className: "candidate", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
            Fe.confirmWrong(), D(null), me("Kirjattu virheeksi. Etsi sävel uudelleen."), d();
          }, children: "Soitin väärän sävelen · kirjaa virhe" }),
          /* @__PURE__ */ i.jsx("span", { className: "tools-note", children: "Jos havainto oli ylä-ääni tai toisen kielen resonanssi, soita vain uudelleen." })
        ] }),
        X && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: X }),
        /* @__PURE__ */ i.jsxs("div", { className: "action-row", children: [
          Fe.phase === "feedback" && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", ref: gn, onClick: () => {
            rt();
          }, children: Fe.isLast ? "Näytä kierroksen tulokset" : "Seuraava kysymys" }),
          Fe.phase === "active" && !Ht && !de && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            pi === 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Tn(Math.max(1, Fe.hintLevel)), children: Fe.hintLevel ? "Näytä vihje uudelleen" : "Näytä vihje" }),
            pi === 1 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Tn(2), children: "Näytä vastaus" }),
            pi > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => oe(0), children: "Piilota vihje" })
          ] }),
          ct.sound.length > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", disabled: !Oi, onClick: () => {
            Ut(Fe);
          }, children: "Kuuntele uudelleen" }),
          Fe.phase === "paused" && !de ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: fe, onClick: () => {
            en();
          }, children: fe ? "Avataan mikrofonia…" : "Jatka harjoitusta" }) : /* @__PURE__ */ i.jsx("button", { type: "button", onClick: kt, children: "Tauko" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Rt(), children: "Lopeta harjoitus" })
        ] }),
        Fe.phase === "feedback" && qe.advance && /* @__PURE__ */ i.jsx("p", { className: "tools-note", children: "Seuraava kysymys tulee hetken kuluttua itsestään." }),
        /* @__PURE__ */ i.jsx("p", { className: "tools-note", "data-testid": "tally", children: xt?.count ? `Vastattu ${xt.count} · itsenäisesti heti oikein ${xt.soloFirst}/${xt.solo}${xt.guided ? ` · vihjeen kanssa ${xt.guided}` : ""}` : "Ei vielä vastattuja kysymyksiä." })
      ] }),
      !et && X && /* @__PURE__ */ i.jsx("p", { className: "error", role: "alert", children: X })
    ] }),
    !et && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { className: "link-row", children: [
        a.mode === "scale" && /* @__PURE__ */ i.jsx("a", { href: `otelautaharjoittelija.html?toonikka=${encodeURIComponent(Ie.CHROM[a.root])}&asteikko=${a.scale}`, children: "Katso asteikko otelautakartassa" }),
        /* @__PURE__ */ i.jsx("a", { href: wp(a), children: "Linkki tähän harjoitukseen" })
      ] }),
      /* @__PURE__ */ i.jsx(ny, { store: r, s: a, locked: Vn, changed: () => {
        const H = Ra(r.data.settings);
        I.current = H, o(H), d();
      } }),
      /* @__PURE__ */ i.jsxs("details", { className: "privacy", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "Miten tunnistus ja tallennus toimivat?" }),
        /* @__PURE__ */ i.jsx("p", { children: "Mikrofoni käynnistyy vain, kun painat Testaa mikrofoni tai aloitat harjoituksen, jossa vastaat soittamalla. Ääntä ei tallenneta eikä lähetetä palvelimelle. Mikrofoni on auki kierroksen ajan ja sulkeutuu tauolla, kierroksen lopussa, testin lopettamisessa, välilehden piilottamisessa ja sivulta poistuttaessa." }),
        /* @__PURE__ */ i.jsx("p", { children: "Mikrofoni tunnistaa sävelkorkeuden, ei kieltä, nauhaa tai kokonaista sointuotetta. Sävel hyväksytään vastaukseksi, kun sen voimakkuus, selkeys, vire ja vakaus ylittävät asetetut rajat. Uusi vastaus vaatii uuden näppäyksen tai kielten vaimentamisen. Tehtävästä eriävää havaintoa ei kirjata virheeksi ilman omaa vahvistustasi, koska se voi olla ylä-ääni tai toisen kielen resonanssi." }),
        /* @__PURE__ */ i.jsx("p", { children: "Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Mikrofoni tarvitsee HTTPS-yhteyden tai paikallisen localhost-osoitteen." }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "Tunnistus on sovitettu ",
          /* @__PURE__ */ i.jsx("a", { href: "https://github.com/dmb1107/fretecho", children: "FretEchosta" }),
          " (MIT) ja käyttää Pitchyä. ",
          /* @__PURE__ */ i.jsx("a", { href: "harjoittelija/vendor/FretEcho-LICENSE.txt", children: "FretEchon lisenssi" }),
          " · ",
          /* @__PURE__ */ i.jsx("a", { href: "assets/harjoittelija/THIRD-PARTY-NOTICES.txt", children: "Riippuvuuksien lisenssit" }),
          "."
        ] })
      ] })
    ] })
  ] });
}
pp.createRoot(document.getElementById("guitar-practice")).render(/* @__PURE__ */ i.jsx(ly, {}));
//# sourceMappingURL=app.js.map
