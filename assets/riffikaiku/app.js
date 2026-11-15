function Xd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var pa = { exports: {} }, ai = {}, ma = { exports: {} }, Se = {};
var cc;
function bd() {
  if (cc) return Se;
  cc = 1;
  var o = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), w = Symbol.iterator;
  function M(k) {
    return k === null || typeof k != "object" ? null : (k = w && k[w] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, z = {};
  function L(k, T, ue) {
    this.props = k, this.context = T, this.refs = z, this.updater = ue || I;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(k, T) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, T, "setState");
  }, L.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function b() {
  }
  b.prototype = L.prototype;
  function W(k, T, ue) {
    this.props = k, this.context = T, this.refs = z, this.updater = ue || I;
  }
  var J = W.prototype = new b();
  J.constructor = W, C(J, L.prototype), J.isPureReactComponent = !0;
  var te = Array.isArray, q = Object.prototype.hasOwnProperty, V = { current: null }, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(k, T, ue) {
    var he, me = {}, ve = null, O = null;
    if (T != null) for (he in T.ref !== void 0 && (O = T.ref), T.key !== void 0 && (ve = "" + T.key), T) q.call(T, he) && !re.hasOwnProperty(he) && (me[he] = T[he]);
    var B = arguments.length - 2;
    if (B === 1) me.children = ue;
    else if (1 < B) {
      for (var F = Array(B), Y = 0; Y < B; Y++) F[Y] = arguments[Y + 2];
      me.children = F;
    }
    if (k && k.defaultProps) for (he in B = k.defaultProps, B) me[he] === void 0 && (me[he] = B[he]);
    return { $$typeof: o, type: k, key: ve, ref: O, props: me, _owner: V.current };
  }
  function Pe(k, T) {
    return { $$typeof: o, type: k.type, key: T, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function je(k) {
    return typeof k == "object" && k !== null && k.$$typeof === o;
  }
  function Qe(k) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(ue) {
      return T[ue];
    });
  }
  var Be = /\/+/g;
  function Le(k, T) {
    return typeof k == "object" && k !== null && k.key != null ? Qe("" + k.key) : T.toString(36);
  }
  function Ve(k, T, ue, he, me) {
    var ve = typeof k;
    (ve === "undefined" || ve === "boolean") && (k = null);
    var O = !1;
    if (k === null) O = !0;
    else switch (ve) {
      case "string":
      case "number":
        O = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case o:
          case i:
            O = !0;
        }
    }
    if (O) return O = k, me = me(O), k = he === "" ? "." + Le(O, 0) : he, te(me) ? (ue = "", k != null && (ue = k.replace(Be, "$&/") + "/"), Ve(me, T, ue, "", function(Y) {
      return Y;
    })) : me != null && (je(me) && (me = Pe(me, ue + (!me.key || O && O.key === me.key ? "" : ("" + me.key).replace(Be, "$&/") + "/") + k)), T.push(me)), 1;
    if (O = 0, he = he === "" ? "." : he + ":", te(k)) for (var B = 0; B < k.length; B++) {
      ve = k[B];
      var F = he + Le(ve, B);
      O += Ve(ve, T, ue, F, me);
    }
    else if (F = M(k), typeof F == "function") for (k = F.call(k), B = 0; !(ve = k.next()).done; ) ve = ve.value, F = he + Le(ve, B++), O += Ve(ve, T, ue, F, me);
    else if (ve === "object") throw T = String(k), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    return O;
  }
  function Ge(k, T, ue) {
    if (k == null) return k;
    var he = [], me = 0;
    return Ve(k, he, "", "", function(ve) {
      return T.call(ue, ve, me++);
    }), he;
  }
  function Ae(k) {
    if (k._status === -1) {
      var T = k._result;
      T = T(), T.then(function(ue) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = ue);
      }, function(ue) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = ue);
      }), k._status === -1 && (k._status = 0, k._result = T);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var _e = { current: null }, $ = { transition: null }, Z = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: $, ReactCurrentOwner: V };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Se.Children = { map: Ge, forEach: function(k, T, ue) {
    Ge(k, function() {
      T.apply(this, arguments);
    }, ue);
  }, count: function(k) {
    var T = 0;
    return Ge(k, function() {
      T++;
    }), T;
  }, toArray: function(k) {
    return Ge(k, function(T) {
      return T;
    }) || [];
  }, only: function(k) {
    if (!je(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Se.Component = L, Se.Fragment = l, Se.Profiler = d, Se.PureComponent = W, Se.StrictMode = u, Se.Suspense = j, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, Se.act = U, Se.cloneElement = function(k, T, ue) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var he = C({}, k.props), me = k.key, ve = k.ref, O = k._owner;
    if (T != null) {
      if (T.ref !== void 0 && (ve = T.ref, O = V.current), T.key !== void 0 && (me = "" + T.key), k.type && k.type.defaultProps) var B = k.type.defaultProps;
      for (F in T) q.call(T, F) && !re.hasOwnProperty(F) && (he[F] = T[F] === void 0 && B !== void 0 ? B[F] : T[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) he.children = ue;
    else if (1 < F) {
      B = Array(F);
      for (var Y = 0; Y < F; Y++) B[Y] = arguments[Y + 2];
      he.children = B;
    }
    return { $$typeof: o, type: k.type, key: me, ref: ve, props: he, _owner: O };
  }, Se.createContext = function(k) {
    return k = { $$typeof: v, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: h, _context: k }, k.Consumer = k;
  }, Se.createElement = pe, Se.createFactory = function(k) {
    var T = pe.bind(null, k);
    return T.type = k, T;
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(k) {
    return { $$typeof: y, render: k };
  }, Se.isValidElement = je, Se.lazy = function(k) {
    return { $$typeof: N, _payload: { _status: -1, _result: k }, _init: Ae };
  }, Se.memo = function(k, T) {
    return { $$typeof: _, type: k, compare: T === void 0 ? null : T };
  }, Se.startTransition = function(k) {
    var T = $.transition;
    $.transition = {};
    try {
      k();
    } finally {
      $.transition = T;
    }
  }, Se.unstable_act = U, Se.useCallback = function(k, T) {
    return _e.current.useCallback(k, T);
  }, Se.useContext = function(k) {
    return _e.current.useContext(k);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(k) {
    return _e.current.useDeferredValue(k);
  }, Se.useEffect = function(k, T) {
    return _e.current.useEffect(k, T);
  }, Se.useId = function() {
    return _e.current.useId();
  }, Se.useImperativeHandle = function(k, T, ue) {
    return _e.current.useImperativeHandle(k, T, ue);
  }, Se.useInsertionEffect = function(k, T) {
    return _e.current.useInsertionEffect(k, T);
  }, Se.useLayoutEffect = function(k, T) {
    return _e.current.useLayoutEffect(k, T);
  }, Se.useMemo = function(k, T) {
    return _e.current.useMemo(k, T);
  }, Se.useReducer = function(k, T, ue) {
    return _e.current.useReducer(k, T, ue);
  }, Se.useRef = function(k) {
    return _e.current.useRef(k);
  }, Se.useState = function(k) {
    return _e.current.useState(k);
  }, Se.useSyncExternalStore = function(k, T, ue) {
    return _e.current.useSyncExternalStore(k, T, ue);
  }, Se.useTransition = function() {
    return _e.current.useTransition();
  }, Se.version = "18.3.1", Se;
}
var fc;
function Ta() {
  return fc || (fc = 1, ma.exports = bd()), ma.exports;
}
var dc;
function Jd() {
  if (dc) return ai;
  dc = 1;
  var o = Ta(), i = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(y, j, _) {
    var N, w = {}, M = null, I = null;
    _ !== void 0 && (M = "" + _), j.key !== void 0 && (M = "" + j.key), j.ref !== void 0 && (I = j.ref);
    for (N in j) u.call(j, N) && !h.hasOwnProperty(N) && (w[N] = j[N]);
    if (y && y.defaultProps) for (N in j = y.defaultProps, j) w[N] === void 0 && (w[N] = j[N]);
    return { $$typeof: i, type: y, key: M, ref: I, props: w, _owner: d.current };
  }
  return ai.Fragment = l, ai.jsx = v, ai.jsxs = v, ai;
}
var hc;
function Zd() {
  return hc || (hc = 1, pa.exports = Jd()), pa.exports;
}
var c = Zd(), de = Ta(), Ss = {}, va = { exports: {} }, St = {}, ya = { exports: {} }, ga = {};
var pc;
function eh() {
  return pc || (pc = 1, (function(o) {
    function i($, Z) {
      var U = $.length;
      $.push(Z);
      e: for (; 0 < U; ) {
        var k = U - 1 >>> 1, T = $[k];
        if (0 < d(T, Z)) $[k] = Z, $[U] = T, U = k;
        else break e;
      }
    }
    function l($) {
      return $.length === 0 ? null : $[0];
    }
    function u($) {
      if ($.length === 0) return null;
      var Z = $[0], U = $.pop();
      if (U !== Z) {
        $[0] = U;
        e: for (var k = 0, T = $.length, ue = T >>> 1; k < ue; ) {
          var he = 2 * (k + 1) - 1, me = $[he], ve = he + 1, O = $[ve];
          if (0 > d(me, U)) ve < T && 0 > d(O, me) ? ($[k] = O, $[ve] = U, k = ve) : ($[k] = me, $[he] = U, k = he);
          else if (ve < T && 0 > d(O, U)) $[k] = O, $[ve] = U, k = ve;
          else break e;
        }
      }
      return Z;
    }
    function d($, Z) {
      var U = $.sortIndex - Z.sortIndex;
      return U !== 0 ? U : $.id - Z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      o.unstable_now = function() {
        return h.now();
      };
    } else {
      var v = Date, y = v.now();
      o.unstable_now = function() {
        return v.now() - y;
      };
    }
    var j = [], _ = [], N = 1, w = null, M = 3, I = !1, C = !1, z = !1, L = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function J($) {
      for (var Z = l(_); Z !== null; ) {
        if (Z.callback === null) u(_);
        else if (Z.startTime <= $) u(_), Z.sortIndex = Z.expirationTime, i(j, Z);
        else break;
        Z = l(_);
      }
    }
    function te($) {
      if (z = !1, J($), !C) if (l(j) !== null) C = !0, Ae(q);
      else {
        var Z = l(_);
        Z !== null && _e(te, Z.startTime - $);
      }
    }
    function q($, Z) {
      C = !1, z && (z = !1, b(pe), pe = -1), I = !0;
      var U = M;
      try {
        for (J(Z), w = l(j); w !== null && (!(w.expirationTime > Z) || $ && !Qe()); ) {
          var k = w.callback;
          if (typeof k == "function") {
            w.callback = null, M = w.priorityLevel;
            var T = k(w.expirationTime <= Z);
            Z = o.unstable_now(), typeof T == "function" ? w.callback = T : w === l(j) && u(j), J(Z);
          } else u(j);
          w = l(j);
        }
        if (w !== null) var ue = !0;
        else {
          var he = l(_);
          he !== null && _e(te, he.startTime - Z), ue = !1;
        }
        return ue;
      } finally {
        w = null, M = U, I = !1;
      }
    }
    var V = !1, re = null, pe = -1, Pe = 5, je = -1;
    function Qe() {
      return !(o.unstable_now() - je < Pe);
    }
    function Be() {
      if (re !== null) {
        var $ = o.unstable_now();
        je = $;
        var Z = !0;
        try {
          Z = re(!0, $);
        } finally {
          Z ? Le() : (V = !1, re = null);
        }
      } else V = !1;
    }
    var Le;
    if (typeof W == "function") Le = function() {
      W(Be);
    };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), Ge = Ve.port2;
      Ve.port1.onmessage = Be, Le = function() {
        Ge.postMessage(null);
      };
    } else Le = function() {
      L(Be, 0);
    };
    function Ae($) {
      re = $, V || (V = !0, Le());
    }
    function _e($, Z) {
      pe = L(function() {
        $(o.unstable_now());
      }, Z);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function($) {
      $.callback = null;
    }, o.unstable_continueExecution = function() {
      C || I || (C = !0, Ae(q));
    }, o.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pe = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, o.unstable_getFirstCallbackNode = function() {
      return l(j);
    }, o.unstable_next = function($) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = M;
      }
      var U = M;
      M = Z;
      try {
        return $();
      } finally {
        M = U;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function($, Z) {
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
      var U = M;
      M = $;
      try {
        return Z();
      } finally {
        M = U;
      }
    }, o.unstable_scheduleCallback = function($, Z, U) {
      var k = o.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? k + U : k) : U = k, $) {
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
      return T = U + T, $ = { id: N++, callback: Z, priorityLevel: $, startTime: U, expirationTime: T, sortIndex: -1 }, U > k ? ($.sortIndex = U, i(_, $), l(j) === null && $ === l(_) && (z ? (b(pe), pe = -1) : z = !0, _e(te, U - k))) : ($.sortIndex = T, i(j, $), C || I || (C = !0, Ae(q))), $;
    }, o.unstable_shouldYield = Qe, o.unstable_wrapCallback = function($) {
      var Z = M;
      return function() {
        var U = M;
        M = Z;
        try {
          return $.apply(this, arguments);
        } finally {
          M = U;
        }
      };
    };
  })(ga)), ga;
}
var mc;
function th() {
  return mc || (mc = 1, ya.exports = eh()), ya.exports;
}
var vc;
function nh() {
  if (vc) return St;
  vc = 1;
  var o = Ta(), i = th();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), d = {};
  function h(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, w = {};
  function M(e) {
    return j.call(w, e) ? !0 : j.call(N, e) ? !1 : _.test(e) ? w[e] = !0 : (N[e] = !0, !1);
  }
  function I(e, t, n, r) {
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
  function C(e, t, n, r) {
    if (t === null || typeof t > "u" || I(e, t, n, r)) return !0;
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
  function z(e, t, n, r, s, a, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = f;
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    L[e] = new z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    L[t] = new z(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    L[e] = new z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    L[e] = new z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    L[e] = new z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    L[e] = new z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    L[e] = new z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    L[e] = new z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    L[e] = new z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      b,
      W
    );
    L[t] = new z(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(b, W);
    L[t] = new z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(b, W);
    L[t] = new z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    L[e] = new z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), L.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    L[e] = new z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function J(e, t, n, r) {
    var s = L.hasOwnProperty(t) ? L[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, n, s, r) && (n = null), r || s === null ? M(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var te = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, q = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), re = /* @__PURE__ */ Symbol.for("react.fragment"), pe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Pe = /* @__PURE__ */ Symbol.for("react.profiler"), je = /* @__PURE__ */ Symbol.for("react.provider"), Qe = /* @__PURE__ */ Symbol.for("react.context"), Be = /* @__PURE__ */ Symbol.for("react.forward_ref"), Le = /* @__PURE__ */ Symbol.for("react.suspense"), Ve = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ge = /* @__PURE__ */ Symbol.for("react.memo"), Ae = /* @__PURE__ */ Symbol.for("react.lazy"), _e = /* @__PURE__ */ Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, k;
  function T(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var ue = !1;
  function he(e, t) {
    if (!e || ue) return "";
    ue = !0;
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
        } catch (E) {
          var r = E;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (E) {
          r = E;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (E) {
          r = E;
        }
        e();
      }
    } catch (E) {
      if (E && r && typeof E.stack == "string") {
        for (var s = E.stack.split(`
`), a = r.stack.split(`
`), f = s.length - 1, p = a.length - 1; 1 <= f && 0 <= p && s[f] !== a[p]; ) p--;
        for (; 1 <= f && 0 <= p; f--, p--) if (s[f] !== a[p]) {
          if (f !== 1 || p !== 1)
            do
              if (f--, p--, 0 > p || s[f] !== a[p]) {
                var m = `
` + s[f].replace(" at new ", " at ");
                return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m;
              }
            while (1 <= f && 0 <= p);
          break;
        }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function me(e) {
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
        return e = he(e.type, !1), e;
      case 11:
        return e = he(e.type.render, !1), e;
      case 1:
        return e = he(e.type, !0), e;
      default:
        return "";
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case V:
        return "Portal";
      case Pe:
        return "Profiler";
      case pe:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Ve:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Qe:
        return (e.displayName || "Context") + ".Consumer";
      case je:
        return (e._context.displayName || "Context") + ".Provider";
      case Be:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ge:
        return t = e.displayName || null, t !== null ? t : ve(e.type) || "Memo";
      case Ae:
        t = e._payload, e = e._init;
        try {
          return ve(e(t));
        } catch {
        }
    }
    return null;
  }
  function O(e) {
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
        return ve(t);
      case 8:
        return t === pe ? "StrictMode" : "Mode";
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
  function B(e) {
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
  function F(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Y(e) {
    var t = F(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, a = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(f) {
        r = "" + f, a.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(f) {
        r = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ce(e) {
    e._valueTracker || (e._valueTracker = Y(e));
  }
  function ee(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = F(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ie(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ne(e, t) {
    var n = t.checked;
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ye(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function xe(e, t) {
    t = t.checked, t != null && J(e, "checked", t, !1);
  }
  function Te(e, t) {
    xe(e, t);
    var n = B(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? De(e, t.type, n) : t.hasOwnProperty("defaultValue") && De(e, t.type, B(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function De(e, t, n) {
    (t !== "number" || ie(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ue = Array.isArray;
  function Xe(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + B(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Tt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function He(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (Ue(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: B(n) };
  }
  function Me(e, t) {
    var n = B(t.value), r = B(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function be(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ht(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Cn(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ht(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var It, Jt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (It = It || document.createElement("div"), It.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = It.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  var Kt = {
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
  }, Er = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kt).forEach(function(e) {
    Er.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Kt[t] = Kt[e];
    });
  });
  function ae(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kt.hasOwnProperty(e) && Kt[e] ? ("" + t).trim() : t + "px";
  }
  function Zt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = ae(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var oe = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ge(e, t) {
    if (t) {
      if (oe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function we(e, t) {
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
  var ze = null;
  function et(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var en = null, pt = null, Qt = null;
  function Gn(e) {
    if (e = Qr(e)) {
      if (typeof en != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Oi(t), en(e.stateNode, e.type, t));
    }
  }
  function qn(e) {
    pt ? Qt ? Qt.push(e) : Qt = [e] : pt = e;
  }
  function Yn() {
    if (pt) {
      var e = pt, t = Qt;
      if (Qt = pt = null, Gn(e), t) for (e = 0; e < t.length; e++) Gn(t[e]);
    }
  }
  function Ca(e, t) {
    return e(t);
  }
  function Ra() {
  }
  var Ps = !1;
  function Pa(e, t, n) {
    if (Ps) return e(t, n);
    Ps = !0;
    try {
      return Ca(e, t, n);
    } finally {
      Ps = !1, (pt !== null || Qt !== null) && (Ra(), Yn());
    }
  }
  function _r(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Oi(n);
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
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var Ls = !1;
  if (y) try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", { get: function() {
      Ls = !0;
    } }), window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr);
  } catch {
    Ls = !1;
  }
  function tf(e, t, n, r, s, a, f, p, m) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (P) {
      this.onError(P);
    }
  }
  var Tr = !1, mi = null, vi = !1, As = null, nf = { onError: function(e) {
    Tr = !0, mi = e;
  } };
  function rf(e, t, n, r, s, a, f, p, m) {
    Tr = !1, mi = null, tf.apply(nf, arguments);
  }
  function sf(e, t, n, r, s, a, f, p, m) {
    if (rf.apply(this, arguments), Tr) {
      if (Tr) {
        var E = mi;
        Tr = !1, mi = null;
      } else throw Error(l(198));
      vi || (vi = !0, As = E);
    }
  }
  function Rn(e) {
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
  function La(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Aa(e) {
    if (Rn(e) !== e) throw Error(l(188));
  }
  function lf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Rn(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var a = s.alternate;
      if (a === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === a.child) {
        for (a = s.child; a; ) {
          if (a === n) return Aa(s), e;
          if (a === r) return Aa(s), t;
          a = a.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = s, r = a;
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            f = !0, n = s, r = a;
            break;
          }
          if (p === r) {
            f = !0, r = s, n = a;
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = a.child; p; ) {
            if (p === n) {
              f = !0, n = a, r = s;
              break;
            }
            if (p === r) {
              f = !0, r = a, n = s;
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ia(e) {
    return e = lf(e), e !== null ? za(e) : null;
  }
  function za(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = za(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Fa = i.unstable_scheduleCallback, Oa = i.unstable_cancelCallback, af = i.unstable_shouldYield, of = i.unstable_requestPaint, Je = i.unstable_now, uf = i.unstable_getCurrentPriorityLevel, Is = i.unstable_ImmediatePriority, Da = i.unstable_UserBlockingPriority, yi = i.unstable_NormalPriority, cf = i.unstable_LowPriority, $a = i.unstable_IdlePriority, gi = null, Gt = null;
  function ff(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(gi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var zt = Math.clz32 ? Math.clz32 : pf, df = Math.log, hf = Math.LN2;
  function pf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (df(e) / hf | 0) | 0;
  }
  var ki = 64, xi = 4194304;
  function Mr(e) {
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
  function wi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, a = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var p = f & ~s;
      p !== 0 ? r = Mr(p) : (a &= f, a !== 0 && (r = Mr(a)));
    } else f = n & ~s, f !== 0 ? r = Mr(f) : a !== 0 && (r = Mr(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - zt(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function mf(e, t) {
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
  function vf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var f = 31 - zt(a), p = 1 << f, m = s[f];
      m === -1 ? ((p & n) === 0 || (p & r) !== 0) && (s[f] = mf(p, t)) : m <= t && (e.expiredLanes |= p), a &= ~p;
    }
  }
  function zs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ba() {
    var e = ki;
    return ki <<= 1, (ki & 4194240) === 0 && (ki = 64), e;
  }
  function Fs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Cr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - zt(t), e[t] = n;
  }
  function yf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - zt(n), a = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
    }
  }
  function Os(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - zt(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var Ce = 0;
  function Va(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ua, Ds, Ha, Wa, Ka, $s = !1, Si = [], cn = null, fn = null, dn = null, Rr = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), hn = [], gf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Qa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        cn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pr.delete(t.pointerId);
    }
  }
  function Lr(e, t, n, r, s, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = Qr(t), t !== null && Ds(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function kf(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return cn = Lr(cn, e, t, n, r, s), !0;
      case "dragenter":
        return fn = Lr(fn, e, t, n, r, s), !0;
      case "mouseover":
        return dn = Lr(dn, e, t, n, r, s), !0;
      case "pointerover":
        var a = s.pointerId;
        return Rr.set(a, Lr(Rr.get(a) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return a = s.pointerId, Pr.set(a, Lr(Pr.get(a) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Ga(e) {
    var t = Pn(e.target);
    if (t !== null) {
      var n = Rn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = La(n), t !== null) {
            e.blockedOn = t, Ka(e.priority, function() {
              Ha(n);
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
  function ji(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ze = r, n.target.dispatchEvent(r), ze = null;
      } else return t = Qr(n), t !== null && Ds(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function qa(e, t, n) {
    ji(e) && n.delete(t);
  }
  function xf() {
    $s = !1, cn !== null && ji(cn) && (cn = null), fn !== null && ji(fn) && (fn = null), dn !== null && ji(dn) && (dn = null), Rr.forEach(qa), Pr.forEach(qa);
  }
  function Ar(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $s || ($s = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, xf)));
  }
  function Ir(e) {
    function t(s) {
      return Ar(s, e);
    }
    if (0 < Si.length) {
      Ar(Si[0], e);
      for (var n = 1; n < Si.length; n++) {
        var r = Si[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (cn !== null && Ar(cn, e), fn !== null && Ar(fn, e), dn !== null && Ar(dn, e), Rr.forEach(t), Pr.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Ga(n), n.blockedOn === null && hn.shift();
  }
  var Xn = te.ReactCurrentBatchConfig, Ei = !0;
  function wf(e, t, n, r) {
    var s = Ce, a = Xn.transition;
    Xn.transition = null;
    try {
      Ce = 1, Bs(e, t, n, r);
    } finally {
      Ce = s, Xn.transition = a;
    }
  }
  function Sf(e, t, n, r) {
    var s = Ce, a = Xn.transition;
    Xn.transition = null;
    try {
      Ce = 4, Bs(e, t, n, r);
    } finally {
      Ce = s, Xn.transition = a;
    }
  }
  function Bs(e, t, n, r) {
    if (Ei) {
      var s = Vs(e, t, n, r);
      if (s === null) il(e, t, r, _i, n), Qa(e, r);
      else if (kf(s, e, t, n, r)) r.stopPropagation();
      else if (Qa(e, r), t & 4 && -1 < gf.indexOf(e)) {
        for (; s !== null; ) {
          var a = Qr(s);
          if (a !== null && Ua(a), a = Vs(e, t, n, r), a === null && il(e, t, r, _i, n), a === s) break;
          s = a;
        }
        s !== null && r.stopPropagation();
      } else il(e, t, r, null, n);
    }
  }
  var _i = null;
  function Vs(e, t, n, r) {
    if (_i = null, e = et(r), e = Pn(e), e !== null) if (t = Rn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = La(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return _i = e, null;
  }
  function Ya(e) {
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
        switch (uf()) {
          case Is:
            return 1;
          case Da:
            return 4;
          case yi:
          case cf:
            return 16;
          case $a:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null, Us = null, Ni = null;
  function Xa() {
    if (Ni) return Ni;
    var e, t = Us, n = t.length, r, s = "value" in pn ? pn.value : pn.textContent, a = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === s[a - r]; r++) ;
    return Ni = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ti(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mi() {
    return !0;
  }
  function ba() {
    return !1;
  }
  function jt(e) {
    function t(n, r, s, a, f) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = f, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(a) : a[p]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Mi : ba, this.isPropagationStopped = ba, this;
    }
    return U(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mi);
    }, persist: function() {
    }, isPersistent: Mi }), t;
  }
  var bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Hs = jt(bn), zr = U({}, bn, { view: 0, detail: 0 }), jf = jt(zr), Ws, Ks, Fr, Ci = U({}, zr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Gs, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Fr && (Fr && e.type === "mousemove" ? (Ws = e.screenX - Fr.screenX, Ks = e.screenY - Fr.screenY) : Ks = Ws = 0, Fr = e), Ws);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ks;
  } }), Ja = jt(Ci), Ef = U({}, Ci, { dataTransfer: 0 }), _f = jt(Ef), Nf = U({}, zr, { relatedTarget: 0 }), Qs = jt(Nf), Tf = U({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mf = jt(Tf), Cf = U({}, bn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Rf = jt(Cf), Pf = U({}, bn, { data: 0 }), Za = jt(Pf), Lf = {
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
  }, Af = {
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
  }, If = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = If[e]) ? !!t[e] : !1;
  }
  function Gs() {
    return zf;
  }
  var Ff = U({}, zr, { key: function(e) {
    if (e.key) {
      var t = Lf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ti(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Af[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Gs, charCode: function(e) {
    return e.type === "keypress" ? Ti(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ti(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Of = jt(Ff), Df = U({}, Ci, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), eo = jt(Df), $f = U({}, zr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Gs }), Bf = jt($f), Vf = U({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Uf = jt(Vf), Hf = U({}, Ci, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wf = jt(Hf), Kf = [9, 13, 27, 32], qs = y && "CompositionEvent" in window, Or = null;
  y && "documentMode" in document && (Or = document.documentMode);
  var Qf = y && "TextEvent" in window && !Or, to = y && (!qs || Or && 8 < Or && 11 >= Or), no = " ", ro = !1;
  function io(e, t) {
    switch (e) {
      case "keyup":
        return Kf.indexOf(t.keyCode) !== -1;
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
  function so(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jn = !1;
  function Gf(e, t) {
    switch (e) {
      case "compositionend":
        return so(t);
      case "keypress":
        return t.which !== 32 ? null : (ro = !0, no);
      case "textInput":
        return e = t.data, e === no && ro ? null : e;
      default:
        return null;
    }
  }
  function qf(e, t) {
    if (Jn) return e === "compositionend" || !qs && io(e, t) ? (e = Xa(), Ni = Us = pn = null, Jn = !1, e) : null;
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
        return to && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yf[e.type] : t === "textarea";
  }
  function ao(e, t, n, r) {
    qn(r), t = Ii(t, "onChange"), 0 < t.length && (n = new Hs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Dr = null, $r = null;
  function Xf(e) {
    No(e, 0);
  }
  function Ri(e) {
    var t = rr(e);
    if (ee(t)) return e;
  }
  function bf(e, t) {
    if (e === "change") return t;
  }
  var oo = !1;
  if (y) {
    var Ys;
    if (y) {
      var Xs = "oninput" in document;
      if (!Xs) {
        var uo = document.createElement("div");
        uo.setAttribute("oninput", "return;"), Xs = typeof uo.oninput == "function";
      }
      Ys = Xs;
    } else Ys = !1;
    oo = Ys && (!document.documentMode || 9 < document.documentMode);
  }
  function co() {
    Dr && (Dr.detachEvent("onpropertychange", fo), $r = Dr = null);
  }
  function fo(e) {
    if (e.propertyName === "value" && Ri($r)) {
      var t = [];
      ao(t, $r, e, et(e)), Pa(Xf, t);
    }
  }
  function Jf(e, t, n) {
    e === "focusin" ? (co(), Dr = t, $r = n, Dr.attachEvent("onpropertychange", fo)) : e === "focusout" && co();
  }
  function Zf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ri($r);
  }
  function ed(e, t) {
    if (e === "click") return Ri(t);
  }
  function td(e, t) {
    if (e === "input" || e === "change") return Ri(t);
  }
  function nd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ft = typeof Object.is == "function" ? Object.is : nd;
  function Br(e, t) {
    if (Ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!j.call(t, s) || !Ft(e[s], t[s])) return !1;
    }
    return !0;
  }
  function ho(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function po(e, t) {
    var n = ho(e);
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
      n = ho(n);
    }
  }
  function mo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vo() {
    for (var e = window, t = ie(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ie(e.document);
    }
    return t;
  }
  function bs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function rd(e) {
    var t = vo(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mo(n.ownerDocument.documentElement, n)) {
      if (r !== null && bs(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, a = Math.min(r.start, s);
          r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = po(n, a);
          var f = po(
            n,
            r
          );
          s && f && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var id = y && "documentMode" in document && 11 >= document.documentMode, Zn = null, Js = null, Vr = null, Zs = !1;
  function yo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zs || Zn == null || Zn !== ie(r) || (r = Zn, "selectionStart" in r && bs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Vr && Br(Vr, r) || (Vr = r, r = Ii(Js, "onSelect"), 0 < r.length && (t = new Hs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Pi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var er = { animationend: Pi("Animation", "AnimationEnd"), animationiteration: Pi("Animation", "AnimationIteration"), animationstart: Pi("Animation", "AnimationStart"), transitionend: Pi("Transition", "TransitionEnd") }, el = {}, go = {};
  y && (go = document.createElement("div").style, "AnimationEvent" in window || (delete er.animationend.animation, delete er.animationiteration.animation, delete er.animationstart.animation), "TransitionEvent" in window || delete er.transitionend.transition);
  function Li(e) {
    if (el[e]) return el[e];
    if (!er[e]) return e;
    var t = er[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in go) return el[e] = t[n];
    return e;
  }
  var ko = Li("animationend"), xo = Li("animationiteration"), wo = Li("animationstart"), So = Li("transitionend"), jo = /* @__PURE__ */ new Map(), Eo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mn(e, t) {
    jo.set(e, t), h(t, [e]);
  }
  for (var tl = 0; tl < Eo.length; tl++) {
    var nl = Eo[tl], sd = nl.toLowerCase(), ld = nl[0].toUpperCase() + nl.slice(1);
    mn(sd, "on" + ld);
  }
  mn(ko, "onAnimationEnd"), mn(xo, "onAnimationIteration"), mn(wo, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(So, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ad = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
  function _o(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, sf(r, t, void 0, e), e.currentTarget = null;
  }
  function No(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t) for (var f = r.length - 1; 0 <= f; f--) {
          var p = r[f], m = p.instance, E = p.currentTarget;
          if (p = p.listener, m !== a && s.isPropagationStopped()) break e;
          _o(s, p, E), a = m;
        }
        else for (f = 0; f < r.length; f++) {
          if (p = r[f], m = p.instance, E = p.currentTarget, p = p.listener, m !== a && s.isPropagationStopped()) break e;
          _o(s, p, E), a = m;
        }
      }
    }
    if (vi) throw e = As, vi = !1, As = null, e;
  }
  function Fe(e, t) {
    var n = t[cl];
    n === void 0 && (n = t[cl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (To(t, e, 2, !1), n.add(r));
  }
  function rl(e, t, n) {
    var r = 0;
    t && (r |= 4), To(n, e, r, t);
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Hr(e) {
    if (!e[Ai]) {
      e[Ai] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (ad.has(n) || rl(n, !1, e), rl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ai] || (t[Ai] = !0, rl("selectionchange", !1, t));
    }
  }
  function To(e, t, n, r) {
    switch (Ya(t)) {
      case 1:
        var s = wf;
        break;
      case 4:
        s = Sf;
        break;
      default:
        s = Bs;
    }
    n = s.bind(null, t, n, e), s = void 0, !Ls || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function il(e, t, n, r, s) {
    var a = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var f = r.tag;
      if (f === 3 || f === 4) {
        var p = r.stateNode.containerInfo;
        if (p === s || p.nodeType === 8 && p.parentNode === s) break;
        if (f === 4) for (f = r.return; f !== null; ) {
          var m = f.tag;
          if ((m === 3 || m === 4) && (m = f.stateNode.containerInfo, m === s || m.nodeType === 8 && m.parentNode === s)) return;
          f = f.return;
        }
        for (; p !== null; ) {
          if (f = Pn(p), f === null) return;
          if (m = f.tag, m === 5 || m === 6) {
            r = a = f;
            continue e;
          }
          p = p.parentNode;
        }
      }
      r = r.return;
    }
    Pa(function() {
      var E = a, P = et(n), A = [];
      e: {
        var R = jo.get(e);
        if (R !== void 0) {
          var H = Hs, Q = e;
          switch (e) {
            case "keypress":
              if (Ti(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = Of;
              break;
            case "focusin":
              Q = "focus", H = Qs;
              break;
            case "focusout":
              Q = "blur", H = Qs;
              break;
            case "beforeblur":
            case "afterblur":
              H = Qs;
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
              H = Ja;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = _f;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Bf;
              break;
            case ko:
            case xo:
            case wo:
              H = Mf;
              break;
            case So:
              H = Uf;
              break;
            case "scroll":
              H = jf;
              break;
            case "wheel":
              H = Wf;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = eo;
          }
          var G = (t & 4) !== 0, Ze = !G && e === "scroll", x = G ? R !== null ? R + "Capture" : null : R;
          G = [];
          for (var g = E, S; g !== null; ) {
            S = g;
            var D = S.stateNode;
            if (S.tag === 5 && D !== null && (S = D, x !== null && (D = _r(g, x), D != null && G.push(Wr(g, D, S)))), Ze) break;
            g = g.return;
          }
          0 < G.length && (R = new H(R, Q, null, n, P), A.push({ event: R, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", R && n !== ze && (Q = n.relatedTarget || n.fromElement) && (Pn(Q) || Q[tn])) break e;
          if ((H || R) && (R = P.window === P ? P : (R = P.ownerDocument) ? R.defaultView || R.parentWindow : window, H ? (Q = n.relatedTarget || n.toElement, H = E, Q = Q ? Pn(Q) : null, Q !== null && (Ze = Rn(Q), Q !== Ze || Q.tag !== 5 && Q.tag !== 6) && (Q = null)) : (H = null, Q = E), H !== Q)) {
            if (G = Ja, D = "onMouseLeave", x = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (G = eo, D = "onPointerLeave", x = "onPointerEnter", g = "pointer"), Ze = H == null ? R : rr(H), S = Q == null ? R : rr(Q), R = new G(D, g + "leave", H, n, P), R.target = Ze, R.relatedTarget = S, D = null, Pn(P) === E && (G = new G(x, g + "enter", Q, n, P), G.target = S, G.relatedTarget = Ze, D = G), Ze = D, H && Q) t: {
              for (G = H, x = Q, g = 0, S = G; S; S = tr(S)) g++;
              for (S = 0, D = x; D; D = tr(D)) S++;
              for (; 0 < g - S; ) G = tr(G), g--;
              for (; 0 < S - g; ) x = tr(x), S--;
              for (; g--; ) {
                if (G === x || x !== null && G === x.alternate) break t;
                G = tr(G), x = tr(x);
              }
              G = null;
            }
            else G = null;
            H !== null && Mo(A, R, H, G, !1), Q !== null && Ze !== null && Mo(A, Ze, Q, G, !0);
          }
        }
        e: {
          if (R = E ? rr(E) : window, H = R.nodeName && R.nodeName.toLowerCase(), H === "select" || H === "input" && R.type === "file") var X = bf;
          else if (lo(R)) if (oo) X = td;
          else {
            X = Zf;
            var se = Jf;
          }
          else (H = R.nodeName) && H.toLowerCase() === "input" && (R.type === "checkbox" || R.type === "radio") && (X = ed);
          if (X && (X = X(e, E))) {
            ao(A, X, n, P);
            break e;
          }
          se && se(e, R, E), e === "focusout" && (se = R._wrapperState) && se.controlled && R.type === "number" && De(R, "number", R.value);
        }
        switch (se = E ? rr(E) : window, e) {
          case "focusin":
            (lo(se) || se.contentEditable === "true") && (Zn = se, Js = E, Vr = null);
            break;
          case "focusout":
            Vr = Js = Zn = null;
            break;
          case "mousedown":
            Zs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zs = !1, yo(A, n, P);
            break;
          case "selectionchange":
            if (id) break;
          case "keydown":
          case "keyup":
            yo(A, n, P);
        }
        var le;
        if (qs) e: {
          switch (e) {
            case "compositionstart":
              var fe = "onCompositionStart";
              break e;
            case "compositionend":
              fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              fe = "onCompositionUpdate";
              break e;
          }
          fe = void 0;
        }
        else Jn ? io(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (to && n.locale !== "ko" && (Jn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Jn && (le = Xa()) : (pn = P, Us = "value" in pn ? pn.value : pn.textContent, Jn = !0)), se = Ii(E, fe), 0 < se.length && (fe = new Za(fe, e, null, n, P), A.push({ event: fe, listeners: se }), le ? fe.data = le : (le = so(n), le !== null && (fe.data = le)))), (le = Qf ? Gf(e, n) : qf(e, n)) && (E = Ii(E, "onBeforeInput"), 0 < E.length && (P = new Za("onBeforeInput", "beforeinput", null, n, P), A.push({ event: P, listeners: E }), P.data = le));
      }
      No(A, t);
    });
  }
  function Wr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ii(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, a = s.stateNode;
      s.tag === 5 && a !== null && (s = a, a = _r(e, n), a != null && r.unshift(Wr(e, a, s)), a = _r(e, t), a != null && r.push(Wr(e, a, s))), e = e.return;
    }
    return r;
  }
  function tr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Mo(e, t, n, r, s) {
    for (var a = t._reactName, f = []; n !== null && n !== r; ) {
      var p = n, m = p.alternate, E = p.stateNode;
      if (m !== null && m === r) break;
      p.tag === 5 && E !== null && (p = E, s ? (m = _r(n, a), m != null && f.unshift(Wr(n, m, p))) : s || (m = _r(n, a), m != null && f.push(Wr(n, m, p)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var od = /\r\n?/g, ud = /\u0000|\uFFFD/g;
  function Co(e) {
    return (typeof e == "string" ? e : "" + e).replace(od, `
`).replace(ud, "");
  }
  function zi(e, t, n) {
    if (t = Co(t), Co(e) !== t && n) throw Error(l(425));
  }
  function Fi() {
  }
  var sl = null, ll = null;
  function al(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ol = typeof setTimeout == "function" ? setTimeout : void 0, cd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ro = typeof Promise == "function" ? Promise : void 0, fd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ro < "u" ? function(e) {
    return Ro.resolve(null).then(e).catch(dd);
  } : ol;
  function dd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ul(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), Ir(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    Ir(t);
  }
  function vn(e) {
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
  function Po(e) {
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
  var nr = Math.random().toString(36).slice(2), qt = "__reactFiber$" + nr, Kr = "__reactProps$" + nr, tn = "__reactContainer$" + nr, cl = "__reactEvents$" + nr, hd = "__reactListeners$" + nr, pd = "__reactHandles$" + nr;
  function Pn(e) {
    var t = e[qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tn] || n[qt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Po(e); e !== null; ) {
          if (n = e[qt]) return n;
          e = Po(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Qr(e) {
    return e = e[qt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function rr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Oi(e) {
    return e[Kr] || null;
  }
  var fl = [], ir = -1;
  function yn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > ir || (e.current = fl[ir], fl[ir] = null, ir--);
  }
  function Ie(e, t) {
    ir++, fl[ir] = e.current, e.current = t;
  }
  var gn = {}, ct = yn(gn), yt = yn(!1), Ln = gn;
  function sr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, a;
    for (a in n) s[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function gt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Di() {
    Oe(yt), Oe(ct);
  }
  function Lo(e, t, n) {
    if (ct.current !== gn) throw Error(l(168));
    Ie(ct, t), Ie(yt, n);
  }
  function Ao(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(l(108, O(e) || "Unknown", s));
    return U({}, n, r);
  }
  function $i(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, Ln = ct.current, Ie(ct, e), Ie(yt, yt.current), !0;
  }
  function Io(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Ao(e, t, Ln), r.__reactInternalMemoizedMergedChildContext = e, Oe(yt), Oe(ct), Ie(ct, e)) : Oe(yt), Ie(yt, n);
  }
  var nn = null, Bi = !1, dl = !1;
  function zo(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function md(e) {
    Bi = !0, zo(e);
  }
  function kn() {
    if (!dl && nn !== null) {
      dl = !0;
      var e = 0, t = Ce;
      try {
        var n = nn;
        for (Ce = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        nn = null, Bi = !1;
      } catch (s) {
        throw nn !== null && (nn = nn.slice(e + 1)), Fa(Is, kn), s;
      } finally {
        Ce = t, dl = !1;
      }
    }
    return null;
  }
  var lr = [], ar = 0, Vi = null, Ui = 0, Mt = [], Ct = 0, An = null, rn = 1, sn = "";
  function In(e, t) {
    lr[ar++] = Ui, lr[ar++] = Vi, Vi = e, Ui = t;
  }
  function Fo(e, t, n) {
    Mt[Ct++] = rn, Mt[Ct++] = sn, Mt[Ct++] = An, An = e;
    var r = rn;
    e = sn;
    var s = 32 - zt(r) - 1;
    r &= ~(1 << s), n += 1;
    var a = 32 - zt(t) + s;
    if (30 < a) {
      var f = s - s % 5;
      a = (r & (1 << f) - 1).toString(32), r >>= f, s -= f, rn = 1 << 32 - zt(t) + s | n << s | r, sn = a + e;
    } else rn = 1 << a | n << s | r, sn = e;
  }
  function hl(e) {
    e.return !== null && (In(e, 1), Fo(e, 1, 0));
  }
  function pl(e) {
    for (; e === Vi; ) Vi = lr[--ar], lr[ar] = null, Ui = lr[--ar], lr[ar] = null;
    for (; e === An; ) An = Mt[--Ct], Mt[Ct] = null, sn = Mt[--Ct], Mt[Ct] = null, rn = Mt[--Ct], Mt[Ct] = null;
  }
  var Et = null, _t = null, $e = !1, Ot = null;
  function Oo(e, t) {
    var n = At(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Do(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Et = e, _t = vn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Et = e, _t = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = An !== null ? { id: rn, overflow: sn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = At(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Et = e, _t = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ml(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if ($e) {
      var t = _t;
      if (t) {
        var n = t;
        if (!Do(e, t)) {
          if (ml(e)) throw Error(l(418));
          t = vn(n.nextSibling);
          var r = Et;
          t && Do(e, t) ? Oo(r, n) : (e.flags = e.flags & -4097 | 2, $e = !1, Et = e);
        }
      } else {
        if (ml(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, $e = !1, Et = e;
      }
    }
  }
  function $o(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Et = e;
  }
  function Hi(e) {
    if (e !== Et) return !1;
    if (!$e) return $o(e), $e = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !al(e.type, e.memoizedProps)), t && (t = _t)) {
      if (ml(e)) throw Bo(), Error(l(418));
      for (; t; ) Oo(e, t), t = vn(t.nextSibling);
    }
    if ($o(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                _t = vn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        _t = null;
      }
    } else _t = Et ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bo() {
    for (var e = _t; e; ) e = vn(e.nextSibling);
  }
  function or() {
    _t = Et = null, $e = !1;
  }
  function yl(e) {
    Ot === null ? Ot = [e] : Ot.push(e);
  }
  var vd = te.ReactCurrentBatchConfig;
  function Gr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var s = r, a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(f) {
          var p = s.refs;
          f === null ? delete p[a] : p[a] = f;
        }, t._stringRef = a, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Wi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Vo(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Uo(e) {
    function t(x, g) {
      if (e) {
        var S = x.deletions;
        S === null ? (x.deletions = [g], x.flags |= 16) : S.push(g);
      }
    }
    function n(x, g) {
      if (!e) return null;
      for (; g !== null; ) t(x, g), g = g.sibling;
      return null;
    }
    function r(x, g) {
      for (x = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? x.set(g.key, g) : x.set(g.index, g), g = g.sibling;
      return x;
    }
    function s(x, g) {
      return x = Tn(x, g), x.index = 0, x.sibling = null, x;
    }
    function a(x, g, S) {
      return x.index = S, e ? (S = x.alternate, S !== null ? (S = S.index, S < g ? (x.flags |= 2, g) : S) : (x.flags |= 2, g)) : (x.flags |= 1048576, g);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function p(x, g, S, D) {
      return g === null || g.tag !== 6 ? (g = oa(S, x.mode, D), g.return = x, g) : (g = s(g, S), g.return = x, g);
    }
    function m(x, g, S, D) {
      var X = S.type;
      return X === re ? P(x, g, S.props.children, D, S.key) : g !== null && (g.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Ae && Vo(X) === g.type) ? (D = s(g, S.props), D.ref = Gr(x, g, S), D.return = x, D) : (D = ps(S.type, S.key, S.props, null, x.mode, D), D.ref = Gr(x, g, S), D.return = x, D);
    }
    function E(x, g, S, D) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== S.containerInfo || g.stateNode.implementation !== S.implementation ? (g = ua(S, x.mode, D), g.return = x, g) : (g = s(g, S.children || []), g.return = x, g);
    }
    function P(x, g, S, D, X) {
      return g === null || g.tag !== 7 ? (g = Un(S, x.mode, D, X), g.return = x, g) : (g = s(g, S), g.return = x, g);
    }
    function A(x, g, S) {
      if (typeof g == "string" && g !== "" || typeof g == "number") return g = oa("" + g, x.mode, S), g.return = x, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case q:
            return S = ps(g.type, g.key, g.props, null, x.mode, S), S.ref = Gr(x, null, g), S.return = x, S;
          case V:
            return g = ua(g, x.mode, S), g.return = x, g;
          case Ae:
            var D = g._init;
            return A(x, D(g._payload), S);
        }
        if (Ue(g) || Z(g)) return g = Un(g, x.mode, S, null), g.return = x, g;
        Wi(x, g);
      }
      return null;
    }
    function R(x, g, S, D) {
      var X = g !== null ? g.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number") return X !== null ? null : p(x, g, "" + S, D);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case q:
            return S.key === X ? m(x, g, S, D) : null;
          case V:
            return S.key === X ? E(x, g, S, D) : null;
          case Ae:
            return X = S._init, R(
              x,
              g,
              X(S._payload),
              D
            );
        }
        if (Ue(S) || Z(S)) return X !== null ? null : P(x, g, S, D, null);
        Wi(x, S);
      }
      return null;
    }
    function H(x, g, S, D, X) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return x = x.get(S) || null, p(g, x, "" + D, X);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case q:
            return x = x.get(D.key === null ? S : D.key) || null, m(g, x, D, X);
          case V:
            return x = x.get(D.key === null ? S : D.key) || null, E(g, x, D, X);
          case Ae:
            var se = D._init;
            return H(x, g, S, se(D._payload), X);
        }
        if (Ue(D) || Z(D)) return x = x.get(S) || null, P(g, x, D, X, null);
        Wi(g, D);
      }
      return null;
    }
    function Q(x, g, S, D) {
      for (var X = null, se = null, le = g, fe = g = 0, lt = null; le !== null && fe < S.length; fe++) {
        le.index > fe ? (lt = le, le = null) : lt = le.sibling;
        var Ne = R(x, le, S[fe], D);
        if (Ne === null) {
          le === null && (le = lt);
          break;
        }
        e && le && Ne.alternate === null && t(x, le), g = a(Ne, g, fe), se === null ? X = Ne : se.sibling = Ne, se = Ne, le = lt;
      }
      if (fe === S.length) return n(x, le), $e && In(x, fe), X;
      if (le === null) {
        for (; fe < S.length; fe++) le = A(x, S[fe], D), le !== null && (g = a(le, g, fe), se === null ? X = le : se.sibling = le, se = le);
        return $e && In(x, fe), X;
      }
      for (le = r(x, le); fe < S.length; fe++) lt = H(le, x, fe, S[fe], D), lt !== null && (e && lt.alternate !== null && le.delete(lt.key === null ? fe : lt.key), g = a(lt, g, fe), se === null ? X = lt : se.sibling = lt, se = lt);
      return e && le.forEach(function(Mn) {
        return t(x, Mn);
      }), $e && In(x, fe), X;
    }
    function G(x, g, S, D) {
      var X = Z(S);
      if (typeof X != "function") throw Error(l(150));
      if (S = X.call(S), S == null) throw Error(l(151));
      for (var se = X = null, le = g, fe = g = 0, lt = null, Ne = S.next(); le !== null && !Ne.done; fe++, Ne = S.next()) {
        le.index > fe ? (lt = le, le = null) : lt = le.sibling;
        var Mn = R(x, le, Ne.value, D);
        if (Mn === null) {
          le === null && (le = lt);
          break;
        }
        e && le && Mn.alternate === null && t(x, le), g = a(Mn, g, fe), se === null ? X = Mn : se.sibling = Mn, se = Mn, le = lt;
      }
      if (Ne.done) return n(
        x,
        le
      ), $e && In(x, fe), X;
      if (le === null) {
        for (; !Ne.done; fe++, Ne = S.next()) Ne = A(x, Ne.value, D), Ne !== null && (g = a(Ne, g, fe), se === null ? X = Ne : se.sibling = Ne, se = Ne);
        return $e && In(x, fe), X;
      }
      for (le = r(x, le); !Ne.done; fe++, Ne = S.next()) Ne = H(le, x, fe, Ne.value, D), Ne !== null && (e && Ne.alternate !== null && le.delete(Ne.key === null ? fe : Ne.key), g = a(Ne, g, fe), se === null ? X = Ne : se.sibling = Ne, se = Ne);
      return e && le.forEach(function(Yd) {
        return t(x, Yd);
      }), $e && In(x, fe), X;
    }
    function Ze(x, g, S, D) {
      if (typeof S == "object" && S !== null && S.type === re && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case q:
            e: {
              for (var X = S.key, se = g; se !== null; ) {
                if (se.key === X) {
                  if (X = S.type, X === re) {
                    if (se.tag === 7) {
                      n(x, se.sibling), g = s(se, S.props.children), g.return = x, x = g;
                      break e;
                    }
                  } else if (se.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Ae && Vo(X) === se.type) {
                    n(x, se.sibling), g = s(se, S.props), g.ref = Gr(x, se, S), g.return = x, x = g;
                    break e;
                  }
                  n(x, se);
                  break;
                } else t(x, se);
                se = se.sibling;
              }
              S.type === re ? (g = Un(S.props.children, x.mode, D, S.key), g.return = x, x = g) : (D = ps(S.type, S.key, S.props, null, x.mode, D), D.ref = Gr(x, g, S), D.return = x, x = D);
            }
            return f(x);
          case V:
            e: {
              for (se = S.key; g !== null; ) {
                if (g.key === se) if (g.tag === 4 && g.stateNode.containerInfo === S.containerInfo && g.stateNode.implementation === S.implementation) {
                  n(x, g.sibling), g = s(g, S.children || []), g.return = x, x = g;
                  break e;
                } else {
                  n(x, g);
                  break;
                }
                else t(x, g);
                g = g.sibling;
              }
              g = ua(S, x.mode, D), g.return = x, x = g;
            }
            return f(x);
          case Ae:
            return se = S._init, Ze(x, g, se(S._payload), D);
        }
        if (Ue(S)) return Q(x, g, S, D);
        if (Z(S)) return G(x, g, S, D);
        Wi(x, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, g !== null && g.tag === 6 ? (n(x, g.sibling), g = s(g, S), g.return = x, x = g) : (n(x, g), g = oa(S, x.mode, D), g.return = x, x = g), f(x)) : n(x, g);
    }
    return Ze;
  }
  var ur = Uo(!0), Ho = Uo(!1), Ki = yn(null), Qi = null, cr = null, gl = null;
  function kl() {
    gl = cr = Qi = null;
  }
  function xl(e) {
    var t = Ki.current;
    Oe(Ki), e._currentValue = t;
  }
  function wl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function fr(e, t) {
    Qi = e, gl = cr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (kt = !0), e.firstContext = null);
  }
  function Rt(e) {
    var t = e._currentValue;
    if (gl !== e) if (e = { context: e, memoizedValue: t, next: null }, cr === null) {
      if (Qi === null) throw Error(l(308));
      cr = e, Qi.dependencies = { lanes: 0, firstContext: e };
    } else cr = cr.next = e;
    return t;
  }
  var zn = null;
  function Sl(e) {
    zn === null ? zn = [e] : zn.push(e);
  }
  function Wo(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, Sl(t)) : (n.next = s.next, s.next = n), t.interleaved = n, ln(e, r);
  }
  function ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var xn = !1;
  function jl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ko(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function an(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ee & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, ln(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, Sl(r)) : (t.next = s.next, s.next = t), r.interleaved = t, ln(e, n);
  }
  function Gi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Os(e, n);
    }
  }
  function Qo(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          a === null ? s = a = f : a = a.next = f, n = n.next;
        } while (n !== null);
        a === null ? s = a = t : a = a.next = t;
      } else s = a = t;
      n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function qi(e, t, n, r) {
    var s = e.updateQueue;
    xn = !1;
    var a = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var m = p, E = m.next;
      m.next = null, f === null ? a = E : f.next = E, f = m;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, p = P.lastBaseUpdate, p !== f && (p === null ? P.firstBaseUpdate = E : p.next = E, P.lastBaseUpdate = m));
    }
    if (a !== null) {
      var A = s.baseState;
      f = 0, P = E = m = null, p = a;
      do {
        var R = p.lane, H = p.eventTime;
        if ((r & R) === R) {
          P !== null && (P = P.next = {
            eventTime: H,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var Q = e, G = p;
            switch (R = t, H = n, G.tag) {
              case 1:
                if (Q = G.payload, typeof Q == "function") {
                  A = Q.call(H, A, R);
                  break e;
                }
                A = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = G.payload, R = typeof Q == "function" ? Q.call(H, A, R) : Q, R == null) break e;
                A = U({}, A, R);
                break e;
              case 2:
                xn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, R = s.effects, R === null ? s.effects = [p] : R.push(p));
        } else H = { eventTime: H, lane: R, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, P === null ? (E = P = H, m = A) : P = P.next = H, f |= R;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          R = p, p = R.next, R.next = null, s.lastBaseUpdate = R, s.shared.pending = null;
        }
      } while (!0);
      if (P === null && (m = A), s.baseState = m, s.firstBaseUpdate = E, s.lastBaseUpdate = P, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          f |= s.lane, s = s.next;
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      Dn |= f, e.lanes = f, e.memoizedState = A;
    }
  }
  function Go(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(l(191, s));
        s.call(r);
      }
    }
  }
  var qr = {}, Yt = yn(qr), Yr = yn(qr), Xr = yn(qr);
  function Fn(e) {
    if (e === qr) throw Error(l(174));
    return e;
  }
  function El(e, t) {
    switch (Ie(Xr, t), Ie(Yr, e), Ie(Yt, qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Cn(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Cn(t, e);
    }
    Oe(Yt), Ie(Yt, t);
  }
  function dr() {
    Oe(Yt), Oe(Yr), Oe(Xr);
  }
  function qo(e) {
    Fn(Xr.current);
    var t = Fn(Yt.current), n = Cn(t, e.type);
    t !== n && (Ie(Yr, e), Ie(Yt, n));
  }
  function _l(e) {
    Yr.current === e && (Oe(Yt), Oe(Yr));
  }
  var We = yn(0);
  function Yi(e) {
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
  function Tl() {
    for (var e = 0; e < Nl.length; e++) Nl[e]._workInProgressVersionPrimary = null;
    Nl.length = 0;
  }
  var Xi = te.ReactCurrentDispatcher, Ml = te.ReactCurrentBatchConfig, On = 0, Ke = null, nt = null, it = null, bi = !1, br = !1, Jr = 0, yd = 0;
  function ft() {
    throw Error(l(321));
  }
  function Cl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ft(e[n], t[n])) return !1;
    return !0;
  }
  function Rl(e, t, n, r, s, a) {
    if (On = a, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xi.current = e === null || e.memoizedState === null ? wd : Sd, e = n(r, s), br) {
      a = 0;
      do {
        if (br = !1, Jr = 0, 25 <= a) throw Error(l(301));
        a += 1, it = nt = null, t.updateQueue = null, Xi.current = jd, e = n(r, s);
      } while (br);
    }
    if (Xi.current = es, t = nt !== null && nt.next !== null, On = 0, it = nt = Ke = null, bi = !1, t) throw Error(l(300));
    return e;
  }
  function Pl() {
    var e = Jr !== 0;
    return Jr = 0, e;
  }
  function Xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return it === null ? Ke.memoizedState = it = e : it = it.next = e, it;
  }
  function Pt() {
    if (nt === null) {
      var e = Ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = nt.next;
    var t = it === null ? Ke.memoizedState : it.next;
    if (t !== null) it = t, nt = e;
    else {
      if (e === null) throw Error(l(310));
      nt = e, e = { memoizedState: nt.memoizedState, baseState: nt.baseState, baseQueue: nt.baseQueue, queue: nt.queue, next: null }, it === null ? Ke.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function Zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ll(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = nt, s = r.baseQueue, a = n.pending;
    if (a !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = a.next, a.next = f;
      }
      r.baseQueue = s = a, n.pending = null;
    }
    if (s !== null) {
      a = s.next, r = r.baseState;
      var p = f = null, m = null, E = a;
      do {
        var P = E.lane;
        if ((On & P) === P) m !== null && (m = m.next = { lane: 0, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null }), r = E.hasEagerState ? E.eagerState : e(r, E.action);
        else {
          var A = {
            lane: P,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          };
          m === null ? (p = m = A, f = r) : m = m.next = A, Ke.lanes |= P, Dn |= P;
        }
        E = E.next;
      } while (E !== null && E !== a);
      m === null ? f = r : m.next = p, Ft(r, t.memoizedState) || (kt = !0), t.memoizedState = r, t.baseState = f, t.baseQueue = m, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        a = s.lane, Ke.lanes |= a, Dn |= a, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Al(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, a = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        a = e(a, f.action), f = f.next;
      while (f !== s);
      Ft(a, t.memoizedState) || (kt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
    }
    return [a, r];
  }
  function Yo() {
  }
  function Xo(e, t) {
    var n = Ke, r = Pt(), s = t(), a = !Ft(r.memoizedState, s);
    if (a && (r.memoizedState = s, kt = !0), r = r.queue, Il(Zo.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || it !== null && it.memoizedState.tag & 1) {
      if (n.flags |= 2048, ei(9, Jo.bind(null, n, r, s, t), void 0, null), st === null) throw Error(l(349));
      (On & 30) !== 0 || bo(n, t, s);
    }
    return s;
  }
  function bo(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Jo(e, t, n, r) {
    t.value = n, t.getSnapshot = r, eu(t) && tu(e);
  }
  function Zo(e, t, n) {
    return n(function() {
      eu(t) && tu(e);
    });
  }
  function eu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ft(e, n);
    } catch {
      return !0;
    }
  }
  function tu(e) {
    var t = ln(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function nu(e) {
    var t = Xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = xd.bind(null, Ke, e), [t.memoizedState, e];
  }
  function ei(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ru() {
    return Pt().memoizedState;
  }
  function Ji(e, t, n, r) {
    var s = Xt();
    Ke.flags |= e, s.memoizedState = ei(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Zi(e, t, n, r) {
    var s = Pt();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (nt !== null) {
      var f = nt.memoizedState;
      if (a = f.destroy, r !== null && Cl(r, f.deps)) {
        s.memoizedState = ei(t, n, a, r);
        return;
      }
    }
    Ke.flags |= e, s.memoizedState = ei(1 | t, n, a, r);
  }
  function iu(e, t) {
    return Ji(8390656, 8, e, t);
  }
  function Il(e, t) {
    return Zi(2048, 8, e, t);
  }
  function su(e, t) {
    return Zi(4, 2, e, t);
  }
  function lu(e, t) {
    return Zi(4, 4, e, t);
  }
  function au(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function ou(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zi(4, 4, au.bind(null, t, e), n);
  }
  function zl() {
  }
  function uu(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function cu(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function fu(e, t, n) {
    return (On & 21) === 0 ? (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n) : (Ft(n, t) || (n = Ba(), Ke.lanes |= n, Dn |= n, e.baseState = !0), t);
  }
  function gd(e, t) {
    var n = Ce;
    Ce = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ml.transition;
    Ml.transition = {};
    try {
      e(!1), t();
    } finally {
      Ce = n, Ml.transition = r;
    }
  }
  function du() {
    return Pt().memoizedState;
  }
  function kd(e, t, n) {
    var r = _n(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, hu(e)) pu(t, n);
    else if (n = Wo(e, t, n, r), n !== null) {
      var s = vt();
      Vt(n, e, r, s), mu(n, t, r);
    }
  }
  function xd(e, t, n) {
    var r = _n(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (hu(e)) pu(t, s);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var f = t.lastRenderedState, p = a(f, n);
        if (s.hasEagerState = !0, s.eagerState = p, Ft(p, f)) {
          var m = t.interleaved;
          m === null ? (s.next = s, Sl(t)) : (s.next = m.next, m.next = s), t.interleaved = s;
          return;
        }
      } catch {
      }
      n = Wo(e, t, s, r), n !== null && (s = vt(), Vt(n, e, r, s), mu(n, t, r));
    }
  }
  function hu(e) {
    var t = e.alternate;
    return e === Ke || t !== null && t === Ke;
  }
  function pu(e, t) {
    br = bi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function mu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Os(e, n);
    }
  }
  var es = { readContext: Rt, useCallback: ft, useContext: ft, useEffect: ft, useImperativeHandle: ft, useInsertionEffect: ft, useLayoutEffect: ft, useMemo: ft, useReducer: ft, useRef: ft, useState: ft, useDebugValue: ft, useDeferredValue: ft, useTransition: ft, useMutableSource: ft, useSyncExternalStore: ft, useId: ft, unstable_isNewReconciler: !1 }, wd = { readContext: Rt, useCallback: function(e, t) {
    return Xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Rt, useEffect: iu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ji(
      4194308,
      4,
      au.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ji(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ji(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Xt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = kd.bind(null, Ke, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: nu, useDebugValue: zl, useDeferredValue: function(e) {
    return Xt().memoizedState = e;
  }, useTransition: function() {
    var e = nu(!1), t = e[0];
    return e = gd.bind(null, e[1]), Xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ke, s = Xt();
    if ($e) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), st === null) throw Error(l(349));
      (On & 30) !== 0 || bo(r, t, n);
    }
    s.memoizedState = n;
    var a = { value: n, getSnapshot: t };
    return s.queue = a, iu(Zo.bind(
      null,
      r,
      a,
      e
    ), [e]), r.flags |= 2048, ei(9, Jo.bind(null, r, a, n, t), void 0, null), n;
  }, useId: function() {
    var e = Xt(), t = st.identifierPrefix;
    if ($e) {
      var n = sn, r = rn;
      n = (r & ~(1 << 32 - zt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = yd++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Sd = {
    readContext: Rt,
    useCallback: uu,
    useContext: Rt,
    useEffect: Il,
    useImperativeHandle: ou,
    useInsertionEffect: su,
    useLayoutEffect: lu,
    useMemo: cu,
    useReducer: Ll,
    useRef: ru,
    useState: function() {
      return Ll(Zr);
    },
    useDebugValue: zl,
    useDeferredValue: function(e) {
      var t = Pt();
      return fu(t, nt.memoizedState, e);
    },
    useTransition: function() {
      var e = Ll(Zr)[0], t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yo,
    useSyncExternalStore: Xo,
    useId: du,
    unstable_isNewReconciler: !1
  }, jd = { readContext: Rt, useCallback: uu, useContext: Rt, useEffect: Il, useImperativeHandle: ou, useInsertionEffect: su, useLayoutEffect: lu, useMemo: cu, useReducer: Al, useRef: ru, useState: function() {
    return Al(Zr);
  }, useDebugValue: zl, useDeferredValue: function(e) {
    var t = Pt();
    return nt === null ? t.memoizedState = e : fu(t, nt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(Zr)[0], t = Pt().memoizedState;
    return [e, t];
  }, useMutableSource: Yo, useSyncExternalStore: Xo, useId: du, unstable_isNewReconciler: !1 };
  function Dt(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Fl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ts = { isMounted: function(e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = vt(), s = _n(e), a = an(r, s);
    a.payload = t, n != null && (a.callback = n), t = wn(e, a, s), t !== null && (Vt(t, e, s, r), Gi(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = vt(), s = _n(e), a = an(r, s);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), t = wn(e, a, s), t !== null && (Vt(t, e, s, r), Gi(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = vt(), r = _n(e), s = an(n, r);
    s.tag = 2, t != null && (s.callback = t), t = wn(e, s, r), t !== null && (Vt(t, e, r, n), Gi(t, e, r));
  } };
  function vu(e, t, n, r, s, a, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, f) : t.prototype && t.prototype.isPureReactComponent ? !Br(n, r) || !Br(s, a) : !0;
  }
  function yu(e, t, n) {
    var r = !1, s = gn, a = t.contextType;
    return typeof a == "object" && a !== null ? a = Rt(a) : (s = gt(t) ? Ln : ct.current, r = t.contextTypes, a = (r = r != null) ? sr(e, s) : gn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ts, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function gu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ts.enqueueReplaceState(t, t.state, null);
  }
  function Ol(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, jl(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? s.context = Rt(a) : (a = gt(t) ? Ln : ct.current, s.context = sr(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Fl(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ts.enqueueReplaceState(s, s.state, null), qi(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function hr(e, t) {
    try {
      var n = "", r = t;
      do
        n += me(r), r = r.return;
      while (r);
      var s = n;
    } catch (a) {
      s = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Dl(e, t, n) {
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
  var Ed = typeof WeakMap == "function" ? WeakMap : Map;
  function ku(e, t, n) {
    n = an(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      os || (os = !0, ea = r), $l(e, t);
    }, n;
  }
  function xu(e, t, n) {
    n = an(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        $l(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      $l(e, t), typeof r != "function" && (jn === null ? jn = /* @__PURE__ */ new Set([this]) : jn.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function wu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ed();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Dd.bind(null, e, t, n), t.then(e, e));
  }
  function Su(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ju(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, wn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var _d = te.ReactCurrentOwner, kt = !1;
  function mt(e, t, n, r) {
    t.child = e === null ? Ho(t, null, n, r) : ur(t, e.child, n, r);
  }
  function Eu(e, t, n, r, s) {
    n = n.render;
    var a = t.ref;
    return fr(t, s), r = Rl(e, t, n, r, a, s), n = Pl(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, on(e, t, s)) : ($e && n && hl(t), t.flags |= 1, mt(e, t, r, s), t.child);
  }
  function _u(e, t, n, r, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !aa(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Nu(e, t, a, r, s)) : (e = ps(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, (e.lanes & s) === 0) {
      var f = a.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Br, n(f, r) && e.ref === t.ref) return on(e, t, s);
    }
    return t.flags |= 1, e = Tn(a, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Nu(e, t, n, r, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Br(a, r) && e.ref === t.ref) if (kt = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (kt = !0);
      else return t.lanes = e.lanes, on(e, t, s);
    }
    return Bl(e, t, n, r, s);
  }
  function Tu(e, t, n) {
    var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ie(mr, Nt), Nt |= n;
    else {
      if ((n & 1073741824) === 0) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ie(mr, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Ie(mr, Nt), Nt |= r;
    }
    else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ie(mr, Nt), Nt |= r;
    return mt(e, t, s, n), t.child;
  }
  function Mu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bl(e, t, n, r, s) {
    var a = gt(n) ? Ln : ct.current;
    return a = sr(t, a), fr(t, s), n = Rl(e, t, n, r, a, s), r = Pl(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, on(e, t, s)) : ($e && r && hl(t), t.flags |= 1, mt(e, t, n, s), t.child);
  }
  function Cu(e, t, n, r, s) {
    if (gt(n)) {
      var a = !0;
      $i(t);
    } else a = !1;
    if (fr(t, s), t.stateNode === null) rs(e, t), yu(t, n, r), Ol(t, n, r, s), r = !0;
    else if (e === null) {
      var f = t.stateNode, p = t.memoizedProps;
      f.props = p;
      var m = f.context, E = n.contextType;
      typeof E == "object" && E !== null ? E = Rt(E) : (E = gt(n) ? Ln : ct.current, E = sr(t, E));
      var P = n.getDerivedStateFromProps, A = typeof P == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      A || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== r || m !== E) && gu(t, f, r, E), xn = !1;
      var R = t.memoizedState;
      f.state = R, qi(t, r, f, s), m = t.memoizedState, p !== r || R !== m || yt.current || xn ? (typeof P == "function" && (Fl(t, n, P, r), m = t.memoizedState), (p = xn || vu(t, n, p, r, R, m, E)) ? (A || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), f.props = r, f.state = m, f.context = E, r = p) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Ko(e, t), p = t.memoizedProps, E = t.type === t.elementType ? p : Dt(t.type, p), f.props = E, A = t.pendingProps, R = f.context, m = n.contextType, typeof m == "object" && m !== null ? m = Rt(m) : (m = gt(n) ? Ln : ct.current, m = sr(t, m));
      var H = n.getDerivedStateFromProps;
      (P = typeof H == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== A || R !== m) && gu(t, f, r, m), xn = !1, R = t.memoizedState, f.state = R, qi(t, r, f, s);
      var Q = t.memoizedState;
      p !== A || R !== Q || yt.current || xn ? (typeof H == "function" && (Fl(t, n, H, r), Q = t.memoizedState), (E = xn || vu(t, n, E, r, R, Q, m) || !1) ? (P || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, Q, m), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, Q, m)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Q), f.props = r, f.state = Q, f.context = m, r = E) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vl(e, t, n, r, a, s);
  }
  function Vl(e, t, n, r, s, a) {
    Mu(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return s && Io(t, n, !1), on(e, t, a);
    r = t.stateNode, _d.current = t;
    var p = f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && f ? (t.child = ur(t, e.child, null, a), t.child = ur(t, null, p, a)) : mt(e, t, p, a), t.memoizedState = r.state, s && Io(t, n, !0), t.child;
  }
  function Ru(e) {
    var t = e.stateNode;
    t.pendingContext ? Lo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lo(e, t.context, !1), El(e, t.containerInfo);
  }
  function Pu(e, t, n, r, s) {
    return or(), yl(s), t.flags |= 256, mt(e, t, n, r), t.child;
  }
  var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Lu(e, t, n) {
    var r = t.pendingProps, s = We.current, a = !1, f = (t.flags & 128) !== 0, p;
    if ((p = f) || (p = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), p ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Ie(We, s & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, f = { mode: "hidden", children: f }, (r & 1) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = f) : a = ms(f, r, 0, null), e = Un(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Hl(n), t.memoizedState = Ul, e) : Wl(t, f));
    if (s = e.memoizedState, s !== null && (p = s.dehydrated, p !== null)) return Nd(e, t, f, r, p, s, n);
    if (a) {
      a = r.fallback, f = t.mode, s = e.child, p = s.sibling;
      var m = { mode: "hidden", children: r.children };
      return (f & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = Tn(s, m), r.subtreeFlags = s.subtreeFlags & 14680064), p !== null ? a = Tn(p, a) : (a = Un(a, f, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, f = e.child.memoizedState, f = f === null ? Hl(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, a.memoizedState = f, a.childLanes = e.childLanes & ~n, t.memoizedState = Ul, r;
    }
    return a = e.child, e = a.sibling, r = Tn(a, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Wl(e, t) {
    return t = ms({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ns(e, t, n, r) {
    return r !== null && yl(r), ur(t, e.child, null, n), e = Wl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Nd(e, t, n, r, s, a, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Dl(Error(l(422))), ns(e, t, f, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = ms({ mode: "visible", children: r.children }, s, 0, null), a = Un(a, s, f, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, (t.mode & 1) !== 0 && ur(t, e.child, null, f), t.child.memoizedState = Hl(f), t.memoizedState = Ul, a);
    if ((t.mode & 1) === 0) return ns(e, t, f, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var p = r.dgst;
      return r = p, a = Error(l(419)), r = Dl(a, r, void 0), ns(e, t, f, r);
    }
    if (p = (f & e.childLanes) !== 0, kt || p) {
      if (r = st, r !== null) {
        switch (f & -f) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
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
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        s = (s & (r.suspendedLanes | f)) !== 0 ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, ln(e, s), Vt(r, e, s, -1));
      }
      return la(), r = Dl(Error(l(421))), ns(e, t, f, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $d.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, _t = vn(s.nextSibling), Et = t, $e = !0, Ot = null, e !== null && (Mt[Ct++] = rn, Mt[Ct++] = sn, Mt[Ct++] = An, rn = e.id, sn = e.overflow, An = t), t = Wl(t, r.children), t.flags |= 4096, t);
  }
  function Au(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), wl(e.return, t, n);
  }
  function Kl(e, t, n, r, s) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
  }
  function Iu(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, a = r.tail;
    if (mt(e, t, r.children, n), r = We.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
        else if (e.tag === 19) Au(e, n, t);
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
    if (Ie(We, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Yi(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Kl(t, !1, s, n, a);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Yi(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Kl(t, !0, n, null, a);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function rs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function on(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Dn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Td(e, t, n) {
    switch (t.tag) {
      case 3:
        Ru(t), or();
        break;
      case 5:
        qo(t);
        break;
      case 1:
        gt(t.type) && $i(t);
        break;
      case 4:
        El(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Ie(Ki, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ie(We, We.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Lu(e, t, n) : (Ie(We, We.current & 1), e = on(e, t, n), e !== null ? e.sibling : null);
        Ie(We, We.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Iu(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ie(We, We.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Tu(e, t, n);
    }
    return on(e, t, n);
  }
  var zu, Ql, Fu, Ou;
  zu = function(e, t) {
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
  }, Ql = function() {
  }, Fu = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, Fn(Yt.current);
      var a = null;
      switch (n) {
        case "input":
          s = ne(e, s), r = ne(e, r), a = [];
          break;
        case "select":
          s = U({}, s, { value: void 0 }), r = U({}, r, { value: void 0 }), a = [];
          break;
        case "textarea":
          s = Tt(e, s), r = Tt(e, r), a = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fi);
      }
      ge(n, r);
      var f;
      n = null;
      for (E in s) if (!r.hasOwnProperty(E) && s.hasOwnProperty(E) && s[E] != null) if (E === "style") {
        var p = s[E];
        for (f in p) p.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else E !== "dangerouslySetInnerHTML" && E !== "children" && E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (d.hasOwnProperty(E) ? a || (a = []) : (a = a || []).push(E, null));
      for (E in r) {
        var m = r[E];
        if (p = s?.[E], r.hasOwnProperty(E) && m !== p && (m != null || p != null)) if (E === "style") if (p) {
          for (f in p) !p.hasOwnProperty(f) || m && m.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in m) m.hasOwnProperty(f) && p[f] !== m[f] && (n || (n = {}), n[f] = m[f]);
        } else n || (a || (a = []), a.push(
          E,
          n
        )), n = m;
        else E === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, p = p ? p.__html : void 0, m != null && p !== m && (a = a || []).push(E, m)) : E === "children" ? typeof m != "string" && typeof m != "number" || (a = a || []).push(E, "" + m) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && (d.hasOwnProperty(E) ? (m != null && E === "onScroll" && Fe("scroll", e), a || p === m || (a = [])) : (a = a || []).push(E, m));
      }
      n && (a = a || []).push("style", n);
      var E = a;
      (t.updateQueue = E) && (t.flags |= 4);
    }
  }, Ou = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ti(e, t) {
    if (!$e) switch (e.tailMode) {
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
  function dt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Md(e, t, n) {
    var r = t.pendingProps;
    switch (pl(t), t.tag) {
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
        return dt(t), null;
      case 1:
        return gt(t.type) && Di(), dt(t), null;
      case 3:
        return r = t.stateNode, dr(), Oe(yt), Oe(ct), Tl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ot !== null && (ra(Ot), Ot = null))), Ql(e, t), dt(t), null;
      case 5:
        _l(t);
        var s = Fn(Xr.current);
        if (n = t.type, e !== null && t.stateNode != null) Fu(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return dt(t), null;
          }
          if (e = Fn(Yt.current), Hi(t)) {
            r = t.stateNode, n = t.type;
            var a = t.memoizedProps;
            switch (r[qt] = t, r[Kr] = a, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Fe("cancel", r), Fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Fe("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Ur.length; s++) Fe(Ur[s], r);
                break;
              case "source":
                Fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Fe(
                  "error",
                  r
                ), Fe("load", r);
                break;
              case "details":
                Fe("toggle", r);
                break;
              case "input":
                ye(r, a), Fe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!a.multiple }, Fe("invalid", r);
                break;
              case "textarea":
                He(r, a), Fe("invalid", r);
            }
            ge(n, a), s = null;
            for (var f in a) if (a.hasOwnProperty(f)) {
              var p = a[f];
              f === "children" ? typeof p == "string" ? r.textContent !== p && (a.suppressHydrationWarning !== !0 && zi(r.textContent, p, e), s = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (a.suppressHydrationWarning !== !0 && zi(
                r.textContent,
                p,
                e
              ), s = ["children", "" + p]) : d.hasOwnProperty(f) && p != null && f === "onScroll" && Fe("scroll", r);
            }
            switch (n) {
              case "input":
                ce(r), qe(r, a, !0);
                break;
              case "textarea":
                ce(r), be(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = Fi);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            f = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ht(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = f.createElement(n, { is: r.is }) : (e = f.createElement(n), n === "select" && (f = e, r.multiple ? f.multiple = !0 : r.size && (f.size = r.size))) : e = f.createElementNS(e, n), e[qt] = t, e[Kr] = r, zu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = we(n, r), n) {
                case "dialog":
                  Fe("cancel", e), Fe("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Fe("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Ur.length; s++) Fe(Ur[s], e);
                  s = r;
                  break;
                case "source":
                  Fe("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Fe(
                    "error",
                    e
                  ), Fe("load", e), s = r;
                  break;
                case "details":
                  Fe("toggle", e), s = r;
                  break;
                case "input":
                  ye(e, r), s = ne(e, r), Fe("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = U({}, r, { value: void 0 }), Fe("invalid", e);
                  break;
                case "textarea":
                  He(e, r), s = Tt(e, r), Fe("invalid", e);
                  break;
                default:
                  s = r;
              }
              ge(n, s), p = s;
              for (a in p) if (p.hasOwnProperty(a)) {
                var m = p[a];
                a === "style" ? Zt(e, m) : a === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && Jt(e, m)) : a === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && Wt(e, m) : typeof m == "number" && Wt(e, "" + m) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (d.hasOwnProperty(a) ? m != null && a === "onScroll" && Fe("scroll", e) : m != null && J(e, a, m, f));
              }
              switch (n) {
                case "input":
                  ce(e), qe(e, r, !1);
                  break;
                case "textarea":
                  ce(e), be(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + B(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, a = r.value, a != null ? Xe(e, !!r.multiple, a, !1) : r.defaultValue != null && Xe(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Fi);
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
        return dt(t), null;
      case 6:
        if (e && t.stateNode != null) Ou(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = Fn(Xr.current), Fn(Yt.current), Hi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[qt] = t, (a = r.nodeValue !== n) && (e = Et, e !== null)) switch (e.tag) {
              case 3:
                zi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && zi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            a && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qt] = t, t.stateNode = r;
        }
        return dt(t), null;
      case 13:
        if (Oe(We), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if ($e && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Bo(), or(), t.flags |= 98560, a = !1;
          else if (a = Hi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(l(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(l(317));
              a[qt] = t;
            } else or(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dt(t), a = !1;
          } else Ot !== null && (ra(Ot), Ot = null), a = !0;
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (We.current & 1) !== 0 ? rt === 0 && (rt = 3) : la())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
      case 4:
        return dr(), Ql(e, t), e === null && Hr(t.stateNode.containerInfo), dt(t), null;
      case 10:
        return xl(t.type._context), dt(t), null;
      case 17:
        return gt(t.type) && Di(), dt(t), null;
      case 19:
        if (Oe(We), a = t.memoizedState, a === null) return dt(t), null;
        if (r = (t.flags & 128) !== 0, f = a.rendering, f === null) if (r) ti(a, !1);
        else {
          if (rt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Yi(e), f !== null) {
              for (t.flags |= 128, ti(a, !1), r = f.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, f = a.alternate, f === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = f.childLanes, a.lanes = f.lanes, a.child = f.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = f.memoizedProps, a.memoizedState = f.memoizedState, a.updateQueue = f.updateQueue, a.type = f.type, e = f.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ie(We, We.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && Je() > vr && (t.flags |= 128, r = !0, ti(a, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Yi(f), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ti(a, !0), a.tail === null && a.tailMode === "hidden" && !f.alternate && !$e) return dt(t), null;
          } else 2 * Je() - a.renderingStartTime > vr && n !== 1073741824 && (t.flags |= 128, r = !0, ti(a, !1), t.lanes = 4194304);
          a.isBackwards ? (f.sibling = t.child, t.child = f) : (n = a.last, n !== null ? n.sibling = f : t.child = f, a.last = f);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Je(), t.sibling = null, n = We.current, Ie(We, r ? n & 1 | 2 : n & 1), t) : (dt(t), null);
      case 22:
      case 23:
        return sa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Cd(e, t) {
    switch (pl(t), t.tag) {
      case 1:
        return gt(t.type) && Di(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dr(), Oe(yt), Oe(ct), Tl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return _l(t), null;
      case 13:
        if (Oe(We), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          or();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Oe(We), null;
      case 4:
        return dr(), null;
      case 10:
        return xl(t.type._context), null;
      case 22:
      case 23:
        return sa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var is = !1, ht = !1, Rd = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function pr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ye(e, t, r);
    }
    else n.current = null;
  }
  function Gl(e, t, n) {
    try {
      n();
    } catch (r) {
      Ye(e, t, r);
    }
  }
  var Du = !1;
  function Pd(e, t) {
    if (sl = Ei, e = vo(), bs(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset, a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, p = -1, m = -1, E = 0, P = 0, A = e, R = null;
          t: for (; ; ) {
            for (var H; A !== n || s !== 0 && A.nodeType !== 3 || (p = f + s), A !== a || r !== 0 && A.nodeType !== 3 || (m = f + r), A.nodeType === 3 && (f += A.nodeValue.length), (H = A.firstChild) !== null; )
              R = A, A = H;
            for (; ; ) {
              if (A === e) break t;
              if (R === n && ++E === s && (p = f), R === a && ++P === r && (m = f), (H = A.nextSibling) !== null) break;
              A = R, R = A.parentNode;
            }
            A = H;
          }
          n = p === -1 || m === -1 ? null : { start: p, end: m };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ll = { focusedElem: e, selectionRange: n }, Ei = !1, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
    else for (; K !== null; ) {
      t = K;
      try {
        var Q = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Q !== null) {
              var G = Q.memoizedProps, Ze = Q.memoizedState, x = t.stateNode, g = x.getSnapshotBeforeUpdate(t.elementType === t.type ? G : Dt(t.type, G), Ze);
              x.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          case 3:
            var S = t.stateNode.containerInfo;
            S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (D) {
        Ye(t, t.return, D);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, K = e;
        break;
      }
      K = t.return;
    }
    return Q = Du, Du = !1, Q;
  }
  function ni(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          s.destroy = void 0, a !== void 0 && Gl(t, n, a);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function ss(e, t) {
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
  function ql(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function $u(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $u(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qt], delete t[Kr], delete t[cl], delete t[hd], delete t[pd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Bu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bu(e.return)) return null;
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
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fi));
    else if (r !== 4 && (e = e.child, e !== null)) for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), e = e.sibling;
  }
  function Xl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), e = e.sibling;
  }
  var at = null, $t = !1;
  function Sn(e, t, n) {
    for (n = n.child; n !== null; ) Uu(e, t, n), n = n.sibling;
  }
  function Uu(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(gi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ht || pr(n, t);
      case 6:
        var r = at, s = $t;
        at = null, Sn(e, t, n), at = r, $t = s, at !== null && ($t ? (e = at, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : at.removeChild(n.stateNode));
        break;
      case 18:
        at !== null && ($t ? (e = at, n = n.stateNode, e.nodeType === 8 ? ul(e.parentNode, n) : e.nodeType === 1 && ul(e, n), Ir(e)) : ul(at, n.stateNode));
        break;
      case 4:
        r = at, s = $t, at = n.stateNode.containerInfo, $t = !0, Sn(e, t, n), at = r, $t = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ht && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var a = s, f = a.destroy;
            a = a.tag, f !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Gl(n, t, f), s = s.next;
          } while (s !== r);
        }
        Sn(e, t, n);
        break;
      case 1:
        if (!ht && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (p) {
          Ye(n, t, p);
        }
        Sn(e, t, n);
        break;
      case 21:
        Sn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ht = (r = ht) || n.memoizedState !== null, Sn(e, t, n), ht = r) : Sn(e, t, n);
        break;
      default:
        Sn(e, t, n);
    }
  }
  function Hu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rd()), t.forEach(function(r) {
        var s = Bd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function Bt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var a = e, f = t, p = f;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 5:
              at = p.stateNode, $t = !1;
              break e;
            case 3:
              at = p.stateNode.containerInfo, $t = !0;
              break e;
            case 4:
              at = p.stateNode.containerInfo, $t = !0;
              break e;
          }
          p = p.return;
        }
        if (at === null) throw Error(l(160));
        Uu(a, f, s), at = null, $t = !1;
        var m = s.alternate;
        m !== null && (m.return = null), s.return = null;
      } catch (E) {
        Ye(s, t, E);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wu(t, e), t = t.sibling;
  }
  function Wu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bt(t, e), bt(e), r & 4) {
          try {
            ni(3, e, e.return), ss(3, e);
          } catch (G) {
            Ye(e, e.return, G);
          }
          try {
            ni(5, e, e.return);
          } catch (G) {
            Ye(e, e.return, G);
          }
        }
        break;
      case 1:
        Bt(t, e), bt(e), r & 512 && n !== null && pr(n, n.return);
        break;
      case 5:
        if (Bt(t, e), bt(e), r & 512 && n !== null && pr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Wt(s, "");
          } catch (G) {
            Ye(e, e.return, G);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var a = e.memoizedProps, f = n !== null ? n.memoizedProps : a, p = e.type, m = e.updateQueue;
          if (e.updateQueue = null, m !== null) try {
            p === "input" && a.type === "radio" && a.name != null && xe(s, a), we(p, f);
            var E = we(p, a);
            for (f = 0; f < m.length; f += 2) {
              var P = m[f], A = m[f + 1];
              P === "style" ? Zt(s, A) : P === "dangerouslySetInnerHTML" ? Jt(s, A) : P === "children" ? Wt(s, A) : J(s, P, A, E);
            }
            switch (p) {
              case "input":
                Te(s, a);
                break;
              case "textarea":
                Me(s, a);
                break;
              case "select":
                var R = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!a.multiple;
                var H = a.value;
                H != null ? Xe(s, !!a.multiple, H, !1) : R !== !!a.multiple && (a.defaultValue != null ? Xe(
                  s,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : Xe(s, !!a.multiple, a.multiple ? [] : "", !1));
            }
            s[Kr] = a;
          } catch (G) {
            Ye(e, e.return, G);
          }
        }
        break;
      case 6:
        if (Bt(t, e), bt(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          s = e.stateNode, a = e.memoizedProps;
          try {
            s.nodeValue = a;
          } catch (G) {
            Ye(e, e.return, G);
          }
        }
        break;
      case 3:
        if (Bt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ir(t.containerInfo);
        } catch (G) {
          Ye(e, e.return, G);
        }
        break;
      case 4:
        Bt(t, e), bt(e);
        break;
      case 13:
        Bt(t, e), bt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Zl = Je())), r & 4 && Hu(e);
        break;
      case 22:
        if (P = n !== null && n.memoizedState !== null, e.mode & 1 ? (ht = (E = ht) || P, Bt(t, e), ht = E) : Bt(t, e), bt(e), r & 8192) {
          if (E = e.memoizedState !== null, (e.stateNode.isHidden = E) && !P && (e.mode & 1) !== 0) for (K = e, P = e.child; P !== null; ) {
            for (A = K = P; K !== null; ) {
              switch (R = K, H = R.child, R.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ni(4, R, R.return);
                  break;
                case 1:
                  pr(R, R.return);
                  var Q = R.stateNode;
                  if (typeof Q.componentWillUnmount == "function") {
                    r = R, n = R.return;
                    try {
                      t = r, Q.props = t.memoizedProps, Q.state = t.memoizedState, Q.componentWillUnmount();
                    } catch (G) {
                      Ye(r, n, G);
                    }
                  }
                  break;
                case 5:
                  pr(R, R.return);
                  break;
                case 22:
                  if (R.memoizedState !== null) {
                    Gu(A);
                    continue;
                  }
              }
              H !== null ? (H.return = R, K = H) : Gu(A);
            }
            P = P.sibling;
          }
          e: for (P = null, A = e; ; ) {
            if (A.tag === 5) {
              if (P === null) {
                P = A;
                try {
                  s = A.stateNode, E ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (p = A.stateNode, m = A.memoizedProps.style, f = m != null && m.hasOwnProperty("display") ? m.display : null, p.style.display = ae("display", f));
                } catch (G) {
                  Ye(e, e.return, G);
                }
              }
            } else if (A.tag === 6) {
              if (P === null) try {
                A.stateNode.nodeValue = E ? "" : A.memoizedProps;
              } catch (G) {
                Ye(e, e.return, G);
              }
            } else if ((A.tag !== 22 && A.tag !== 23 || A.memoizedState === null || A === e) && A.child !== null) {
              A.child.return = A, A = A.child;
              continue;
            }
            if (A === e) break e;
            for (; A.sibling === null; ) {
              if (A.return === null || A.return === e) break e;
              P === A && (P = null), A = A.return;
            }
            P === A && (P = null), A.sibling.return = A.return, A = A.sibling;
          }
        }
        break;
      case 19:
        Bt(t, e), bt(e), r & 4 && Hu(e);
        break;
      case 21:
        break;
      default:
        Bt(
          t,
          e
        ), bt(e);
    }
  }
  function bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Bu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (Wt(s, ""), r.flags &= -33);
            var a = Vu(e);
            Xl(e, a, s);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo, p = Vu(e);
            Yl(e, p, f);
            break;
          default:
            throw Error(l(161));
        }
      } catch (m) {
        Ye(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ld(e, t, n) {
    K = e, Ku(e);
  }
  function Ku(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var s = K, a = s.child;
      if (s.tag === 22 && r) {
        var f = s.memoizedState !== null || is;
        if (!f) {
          var p = s.alternate, m = p !== null && p.memoizedState !== null || ht;
          p = is;
          var E = ht;
          if (is = f, (ht = m) && !E) for (K = s; K !== null; ) f = K, m = f.child, f.tag === 22 && f.memoizedState !== null ? qu(s) : m !== null ? (m.return = f, K = m) : qu(s);
          for (; a !== null; ) K = a, Ku(a), a = a.sibling;
          K = s, is = p, ht = E;
        }
        Qu(e);
      } else (s.subtreeFlags & 8772) !== 0 && a !== null ? (a.return = s, K = a) : Qu(e);
    }
  }
  function Qu(e) {
    for (; K !== null; ) {
      var t = K;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || ss(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ht) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : Dt(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var a = t.updateQueue;
              a !== null && Go(t, a, r);
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
                Go(t, f, n);
              }
              break;
            case 5:
              var p = t.stateNode;
              if (n === null && t.flags & 4) {
                n = p;
                var m = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    m.autoFocus && n.focus();
                    break;
                  case "img":
                    m.src && (n.src = m.src);
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
                var E = t.alternate;
                if (E !== null) {
                  var P = E.memoizedState;
                  if (P !== null) {
                    var A = P.dehydrated;
                    A !== null && Ir(A);
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
              throw Error(l(163));
          }
          ht || t.flags & 512 && ql(t);
        } catch (R) {
          Ye(t, t.return, R);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function Gu(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function qu(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ss(4, t);
            } catch (m) {
              Ye(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                Ye(t, s, m);
              }
            }
            var a = t.return;
            try {
              ql(t);
            } catch (m) {
              Ye(t, a, m);
            }
            break;
          case 5:
            var f = t.return;
            try {
              ql(t);
            } catch (m) {
              Ye(t, f, m);
            }
        }
      } catch (m) {
        Ye(t, t.return, m);
      }
      if (t === e) {
        K = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, K = p;
        break;
      }
      K = t.return;
    }
  }
  var Ad = Math.ceil, ls = te.ReactCurrentDispatcher, bl = te.ReactCurrentOwner, Lt = te.ReactCurrentBatchConfig, Ee = 0, st = null, tt = null, ot = 0, Nt = 0, mr = yn(0), rt = 0, ri = null, Dn = 0, as = 0, Jl = 0, ii = null, xt = null, Zl = 0, vr = 1 / 0, un = null, os = !1, ea = null, jn = null, us = !1, En = null, cs = 0, si = 0, ta = null, fs = -1, ds = 0;
  function vt() {
    return (Ee & 6) !== 0 ? Je() : fs !== -1 ? fs : fs = Je();
  }
  function _n(e) {
    return (e.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && ot !== 0 ? ot & -ot : vd.transition !== null ? (ds === 0 && (ds = Ba()), ds) : (e = Ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ya(e.type)), e);
  }
  function Vt(e, t, n, r) {
    if (50 < si) throw si = 0, ta = null, Error(l(185));
    Cr(e, n, r), ((Ee & 2) === 0 || e !== st) && (e === st && ((Ee & 2) === 0 && (as |= n), rt === 4 && Nn(e, ot)), wt(e, r), n === 1 && Ee === 0 && (t.mode & 1) === 0 && (vr = Je() + 500, Bi && kn()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    vf(e, t);
    var r = wi(e, e === st ? ot : 0);
    if (r === 0) n !== null && Oa(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Oa(n), t === 1) e.tag === 0 ? md(Xu.bind(null, e)) : zo(Xu.bind(null, e)), fd(function() {
        (Ee & 6) === 0 && kn();
      }), n = null;
      else {
        switch (Va(r)) {
          case 1:
            n = Is;
            break;
          case 4:
            n = Da;
            break;
          case 16:
            n = yi;
            break;
          case 536870912:
            n = $a;
            break;
          default:
            n = yi;
        }
        n = ic(n, Yu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Yu(e, t) {
    if (fs = -1, ds = 0, (Ee & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (yr() && e.callbackNode !== n) return null;
    var r = wi(e, e === st ? ot : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = hs(e, r);
    else {
      t = r;
      var s = Ee;
      Ee |= 2;
      var a = Ju();
      (st !== e || ot !== t) && (un = null, vr = Je() + 500, Bn(e, t));
      do
        try {
          Fd();
          break;
        } catch (p) {
          bu(e, p);
        }
      while (!0);
      kl(), ls.current = a, Ee = s, tt !== null ? t = 0 : (st = null, ot = 0, t = rt);
    }
    if (t !== 0) {
      if (t === 2 && (s = zs(e), s !== 0 && (r = s, t = na(e, s))), t === 1) throw n = ri, Bn(e, 0), Nn(e, r), wt(e, Je()), n;
      if (t === 6) Nn(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Id(s) && (t = hs(e, r), t === 2 && (a = zs(e), a !== 0 && (r = a, t = na(e, a))), t === 1)) throw n = ri, Bn(e, 0), Nn(e, r), wt(e, Je()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Vn(e, xt, un);
            break;
          case 3:
            if (Nn(e, r), (r & 130023424) === r && (t = Zl + 500 - Je(), 10 < t)) {
              if (wi(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                vt(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = ol(Vn.bind(null, e, xt, un), t);
              break;
            }
            Vn(e, xt, un);
            break;
          case 4:
            if (Nn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var f = 31 - zt(r);
              a = 1 << f, f = t[f], f > s && (s = f), r &= ~a;
            }
            if (r = s, r = Je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ad(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ol(Vn.bind(null, e, xt, un), r);
              break;
            }
            Vn(e, xt, un);
            break;
          case 5:
            Vn(e, xt, un);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return wt(e, Je()), e.callbackNode === n ? Yu.bind(null, e) : null;
  }
  function na(e, t) {
    var n = ii;
    return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), e = hs(e, t), e !== 2 && (t = xt, xt = n, t !== null && ra(t)), e;
  }
  function ra(e) {
    xt === null ? xt = e : xt.push.apply(xt, e);
  }
  function Id(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], a = s.getSnapshot;
          s = s.value;
          try {
            if (!Ft(a(), s)) return !1;
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
  function Nn(e, t) {
    for (t &= ~Jl, t &= ~as, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - zt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Xu(e) {
    if ((Ee & 6) !== 0) throw Error(l(327));
    yr();
    var t = wi(e, 0);
    if ((t & 1) === 0) return wt(e, Je()), null;
    var n = hs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = zs(e);
      r !== 0 && (t = r, n = na(e, r));
    }
    if (n === 1) throw n = ri, Bn(e, 0), Nn(e, t), wt(e, Je()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, xt, un), wt(e, Je()), null;
  }
  function ia(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      Ee = n, Ee === 0 && (vr = Je() + 500, Bi && kn());
    }
  }
  function $n(e) {
    En !== null && En.tag === 0 && (Ee & 6) === 0 && yr();
    var t = Ee;
    Ee |= 1;
    var n = Lt.transition, r = Ce;
    try {
      if (Lt.transition = null, Ce = 1, e) return e();
    } finally {
      Ce = r, Lt.transition = n, Ee = t, (Ee & 6) === 0 && kn();
    }
  }
  function sa() {
    Nt = mr.current, Oe(mr);
  }
  function Bn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, cd(n)), tt !== null) for (n = tt.return; n !== null; ) {
      var r = n;
      switch (pl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Di();
          break;
        case 3:
          dr(), Oe(yt), Oe(ct), Tl();
          break;
        case 5:
          _l(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          Oe(We);
          break;
        case 19:
          Oe(We);
          break;
        case 10:
          xl(r.type._context);
          break;
        case 22:
        case 23:
          sa();
      }
      n = n.return;
    }
    if (st = e, tt = e = Tn(e.current, null), ot = Nt = t, rt = 0, ri = null, Jl = as = Dn = 0, xt = ii = null, zn !== null) {
      for (t = 0; t < zn.length; t++) if (n = zn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, a = n.pending;
        if (a !== null) {
          var f = a.next;
          a.next = s, r.next = f;
        }
        n.pending = r;
      }
      zn = null;
    }
    return e;
  }
  function bu(e, t) {
    do {
      var n = tt;
      try {
        if (kl(), Xi.current = es, bi) {
          for (var r = Ke.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          bi = !1;
        }
        if (On = 0, it = nt = Ke = null, br = !1, Jr = 0, bl.current = null, n === null || n.return === null) {
          rt = 1, ri = t, tt = null;
          break;
        }
        e: {
          var a = e, f = n.return, p = n, m = t;
          if (t = ot, p.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
            var E = m, P = p, A = P.tag;
            if ((P.mode & 1) === 0 && (A === 0 || A === 11 || A === 15)) {
              var R = P.alternate;
              R ? (P.updateQueue = R.updateQueue, P.memoizedState = R.memoizedState, P.lanes = R.lanes) : (P.updateQueue = null, P.memoizedState = null);
            }
            var H = Su(f);
            if (H !== null) {
              H.flags &= -257, ju(H, f, p, a, t), H.mode & 1 && wu(a, E, t), t = H, m = E;
              var Q = t.updateQueue;
              if (Q === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(m), t.updateQueue = G;
              } else Q.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                wu(a, E, t), la();
                break e;
              }
              m = Error(l(426));
            }
          } else if ($e && p.mode & 1) {
            var Ze = Su(f);
            if (Ze !== null) {
              (Ze.flags & 65536) === 0 && (Ze.flags |= 256), ju(Ze, f, p, a, t), yl(hr(m, p));
              break e;
            }
          }
          a = m = hr(m, p), rt !== 4 && (rt = 2), ii === null ? ii = [a] : ii.push(a), a = f;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var x = ku(a, m, t);
                Qo(a, x);
                break e;
              case 1:
                p = m;
                var g = a.type, S = a.stateNode;
                if ((a.flags & 128) === 0 && (typeof g.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (jn === null || !jn.has(S)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var D = xu(a, p, t);
                  Qo(a, D);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        ec(n);
      } catch (X) {
        t = X, tt === n && n !== null && (tt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ju() {
    var e = ls.current;
    return ls.current = es, e === null ? es : e;
  }
  function la() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4), st === null || (Dn & 268435455) === 0 && (as & 268435455) === 0 || Nn(st, ot);
  }
  function hs(e, t) {
    var n = Ee;
    Ee |= 2;
    var r = Ju();
    (st !== e || ot !== t) && (un = null, Bn(e, t));
    do
      try {
        zd();
        break;
      } catch (s) {
        bu(e, s);
      }
    while (!0);
    if (kl(), Ee = n, ls.current = r, tt !== null) throw Error(l(261));
    return st = null, ot = 0, rt;
  }
  function zd() {
    for (; tt !== null; ) Zu(tt);
  }
  function Fd() {
    for (; tt !== null && !af(); ) Zu(tt);
  }
  function Zu(e) {
    var t = rc(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? ec(e) : tt = t, bl.current = null;
  }
  function ec(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Md(n, t, Nt), n !== null) {
          tt = n;
          return;
        }
      } else {
        if (n = Cd(n, t), n !== null) {
          n.flags &= 32767, tt = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          rt = 6, tt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        tt = t;
        return;
      }
      tt = t = e;
    } while (t !== null);
    rt === 0 && (rt = 5);
  }
  function Vn(e, t, n) {
    var r = Ce, s = Lt.transition;
    try {
      Lt.transition = null, Ce = 1, Od(e, t, n, r);
    } finally {
      Lt.transition = s, Ce = r;
    }
    return null;
  }
  function Od(e, t, n, r) {
    do
      yr();
    while (En !== null);
    if ((Ee & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (yf(e, a), e === st && (tt = st = null, ot = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || us || (us = !0, ic(yi, function() {
      return yr(), null;
    })), a = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || a) {
      a = Lt.transition, Lt.transition = null;
      var f = Ce;
      Ce = 1;
      var p = Ee;
      Ee |= 4, bl.current = null, Pd(e, n), Wu(n, e), rd(ll), Ei = !!sl, ll = sl = null, e.current = n, Ld(n), of(), Ee = p, Ce = f, Lt.transition = a;
    } else e.current = n;
    if (us && (us = !1, En = e, cs = s), a = e.pendingLanes, a === 0 && (jn = null), ff(n.stateNode), wt(e, Je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (os) throw os = !1, e = ea, ea = null, e;
    return (cs & 1) !== 0 && e.tag !== 0 && yr(), a = e.pendingLanes, (a & 1) !== 0 ? e === ta ? si++ : (si = 0, ta = e) : si = 0, kn(), null;
  }
  function yr() {
    if (En !== null) {
      var e = Va(cs), t = Lt.transition, n = Ce;
      try {
        if (Lt.transition = null, Ce = 16 > e ? 16 : e, En === null) var r = !1;
        else {
          if (e = En, En = null, cs = 0, (Ee & 6) !== 0) throw Error(l(331));
          var s = Ee;
          for (Ee |= 4, K = e.current; K !== null; ) {
            var a = K, f = a.child;
            if ((K.flags & 16) !== 0) {
              var p = a.deletions;
              if (p !== null) {
                for (var m = 0; m < p.length; m++) {
                  var E = p[m];
                  for (K = E; K !== null; ) {
                    var P = K;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ni(8, P, a);
                    }
                    var A = P.child;
                    if (A !== null) A.return = P, K = A;
                    else for (; K !== null; ) {
                      P = K;
                      var R = P.sibling, H = P.return;
                      if ($u(P), P === E) {
                        K = null;
                        break;
                      }
                      if (R !== null) {
                        R.return = H, K = R;
                        break;
                      }
                      K = H;
                    }
                  }
                }
                var Q = a.alternate;
                if (Q !== null) {
                  var G = Q.child;
                  if (G !== null) {
                    Q.child = null;
                    do {
                      var Ze = G.sibling;
                      G.sibling = null, G = Ze;
                    } while (G !== null);
                  }
                }
                K = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && f !== null) f.return = a, K = f;
            else e: for (; K !== null; ) {
              if (a = K, (a.flags & 2048) !== 0) switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ni(9, a, a.return);
              }
              var x = a.sibling;
              if (x !== null) {
                x.return = a.return, K = x;
                break e;
              }
              K = a.return;
            }
          }
          var g = e.current;
          for (K = g; K !== null; ) {
            f = K;
            var S = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && S !== null) S.return = f, K = S;
            else e: for (f = g; K !== null; ) {
              if (p = K, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ss(9, p);
                }
              } catch (X) {
                Ye(p, p.return, X);
              }
              if (p === f) {
                K = null;
                break e;
              }
              var D = p.sibling;
              if (D !== null) {
                D.return = p.return, K = D;
                break e;
              }
              K = p.return;
            }
          }
          if (Ee = s, kn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(gi, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ce = n, Lt.transition = t;
      }
    }
    return !1;
  }
  function tc(e, t, n) {
    t = hr(n, t), t = ku(e, t, 1), e = wn(e, t, 1), t = vt(), e !== null && (Cr(e, 1, t), wt(e, t));
  }
  function Ye(e, t, n) {
    if (e.tag === 3) tc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        tc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jn === null || !jn.has(r))) {
          e = hr(n, e), e = xu(t, e, 1), t = wn(t, e, 1), e = vt(), t !== null && (Cr(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Dd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (ot & n) === n && (rt === 4 || rt === 3 && (ot & 130023424) === ot && 500 > Je() - Zl ? Bn(e, 0) : Jl |= n), wt(e, t);
  }
  function nc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = xi, xi <<= 1, (xi & 130023424) === 0 && (xi = 4194304)));
    var n = vt();
    e = ln(e, t), e !== null && (Cr(e, t, n), wt(e, n));
  }
  function $d(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), nc(e, n);
  }
  function Bd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(t), nc(e, n);
  }
  var rc;
  rc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || yt.current) kt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return kt = !1, Td(e, t, n);
      kt = (e.flags & 131072) !== 0;
    }
    else kt = !1, $e && (t.flags & 1048576) !== 0 && Fo(t, Ui, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        rs(e, t), e = t.pendingProps;
        var s = sr(t, ct.current);
        fr(t, n), s = Rl(null, t, r, e, s, n);
        var a = Pl();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gt(r) ? (a = !0, $i(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, jl(t), s.updater = ts, t.stateNode = s, s._reactInternals = t, Ol(t, r, e, n), t = Vl(null, t, r, !0, a, n)) : (t.tag = 0, $e && a && hl(t), mt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (rs(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Ud(r), e = Dt(r, e), s) {
            case 0:
              t = Bl(null, t, r, e, n);
              break e;
            case 1:
              t = Cu(null, t, r, e, n);
              break e;
            case 11:
              t = Eu(null, t, r, e, n);
              break e;
            case 14:
              t = _u(null, t, r, Dt(r.type, e), n);
              break e;
          }
          throw Error(l(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), Bl(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), Cu(e, t, r, s, n);
      case 3:
        e: {
          if (Ru(t), e === null) throw Error(l(387));
          r = t.pendingProps, a = t.memoizedState, s = a.element, Ko(e, t), qi(t, r, null, n);
          var f = t.memoizedState;
          if (r = f.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            s = hr(Error(l(423)), t), t = Pu(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = hr(Error(l(424)), t), t = Pu(e, t, r, n, s);
            break e;
          } else for (_t = vn(t.stateNode.containerInfo.firstChild), Et = t, $e = !0, Ot = null, n = Ho(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (or(), r === s) {
              t = on(e, t, n);
              break e;
            }
            mt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return qo(t), e === null && vl(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, f = s.children, al(r, s) ? f = null : a !== null && al(r, a) && (t.flags |= 32), Mu(e, t), mt(e, t, f, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return Lu(e, t, n);
      case 4:
        return El(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : mt(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), Eu(e, t, r, s, n);
      case 7:
        return mt(e, t, t.pendingProps, n), t.child;
      case 8:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return mt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, f = s.value, Ie(Ki, r._currentValue), r._currentValue = f, a !== null) if (Ft(a.value, f)) {
            if (a.children === s.children && !yt.current) {
              t = on(e, t, n);
              break e;
            }
          } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
            var p = a.dependencies;
            if (p !== null) {
              f = a.child;
              for (var m = p.firstContext; m !== null; ) {
                if (m.context === r) {
                  if (a.tag === 1) {
                    m = an(-1, n & -n), m.tag = 2;
                    var E = a.updateQueue;
                    if (E !== null) {
                      E = E.shared;
                      var P = E.pending;
                      P === null ? m.next = m : (m.next = P.next, P.next = m), E.pending = m;
                    }
                  }
                  a.lanes |= n, m = a.alternate, m !== null && (m.lanes |= n), wl(
                    a.return,
                    n,
                    t
                  ), p.lanes |= n;
                  break;
                }
                m = m.next;
              }
            } else if (a.tag === 10) f = a.type === t.type ? null : a.child;
            else if (a.tag === 18) {
              if (f = a.return, f === null) throw Error(l(341));
              f.lanes |= n, p = f.alternate, p !== null && (p.lanes |= n), wl(f, n, t), f = a.sibling;
            } else f = a.child;
            if (f !== null) f.return = a;
            else for (f = a; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (a = f.sibling, a !== null) {
                a.return = f.return, f = a;
                break;
              }
              f = f.return;
            }
            a = f;
          }
          mt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, fr(t, n), s = Rt(s), r = r(s), t.flags |= 1, mt(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = Dt(r, t.pendingProps), s = Dt(r.type, s), _u(e, t, r, s, n);
      case 15:
        return Nu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Dt(r, s), rs(e, t), t.tag = 1, gt(r) ? (e = !0, $i(t)) : e = !1, fr(t, n), yu(t, r, s), Ol(t, r, s, n), Vl(null, t, r, !0, e, n);
      case 19:
        return Iu(e, t, n);
      case 22:
        return Tu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function ic(e, t) {
    return Fa(e, t);
  }
  function Vd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function At(e, t, n, r) {
    return new Vd(e, t, n, r);
  }
  function aa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ud(e) {
    if (typeof e == "function") return aa(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Be) return 11;
      if (e === Ge) return 14;
    }
    return 2;
  }
  function Tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = At(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ps(e, t, n, r, s, a) {
    var f = 2;
    if (r = e, typeof e == "function") aa(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case re:
        return Un(n.children, s, a, t);
      case pe:
        f = 8, s |= 8;
        break;
      case Pe:
        return e = At(12, n, t, s | 2), e.elementType = Pe, e.lanes = a, e;
      case Le:
        return e = At(13, n, t, s), e.elementType = Le, e.lanes = a, e;
      case Ve:
        return e = At(19, n, t, s), e.elementType = Ve, e.lanes = a, e;
      case _e:
        return ms(n, s, a, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case je:
            f = 10;
            break e;
          case Qe:
            f = 9;
            break e;
          case Be:
            f = 11;
            break e;
          case Ge:
            f = 14;
            break e;
          case Ae:
            f = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = At(f, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
  }
  function Un(e, t, n, r) {
    return e = At(7, e, r, t), e.lanes = n, e;
  }
  function ms(e, t, n, r) {
    return e = At(22, e, r, t), e.elementType = _e, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function oa(e, t, n) {
    return e = At(6, e, null, t), e.lanes = n, e;
  }
  function ua(e, t, n) {
    return t = At(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Hd(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fs(0), this.expirationTimes = Fs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fs(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function ca(e, t, n, r, s, a, f, p, m) {
    return e = new Hd(e, t, n, p, m), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = At(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jl(a), e;
  }
  function Wd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: V, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function sc(e) {
    if (!e) return gn;
    e = e._reactInternals;
    e: {
      if (Rn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (gt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (gt(n)) return Ao(e, n, t);
    }
    return t;
  }
  function lc(e, t, n, r, s, a, f, p, m) {
    return e = ca(n, r, !0, e, s, a, f, p, m), e.context = sc(null), n = e.current, r = vt(), s = _n(n), a = an(r, s), a.callback = t ?? null, wn(n, a, s), e.current.lanes = s, Cr(e, s, r), wt(e, r), e;
  }
  function vs(e, t, n, r) {
    var s = t.current, a = vt(), f = _n(s);
    return n = sc(n), t.context === null ? t.context = n : t.pendingContext = n, t = an(a, f), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wn(s, t, f), e !== null && (Vt(e, s, f, a), Gi(e, s, f)), f;
  }
  function ys(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function ac(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fa(e, t) {
    ac(e, t), (e = e.alternate) && ac(e, t);
  }
  function Kd() {
    return null;
  }
  var oc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function da(e) {
    this._internalRoot = e;
  }
  gs.prototype.render = da.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    vs(e, t, null, null);
  }, gs.prototype.unmount = da.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      $n(function() {
        vs(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function gs(e) {
    this._internalRoot = e;
  }
  gs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Wa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Ga(e);
    }
  };
  function ha(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ks(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function uc() {
  }
  function Qd(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var a = r;
        r = function() {
          var E = ys(f);
          a.call(E);
        };
      }
      var f = lc(t, r, e, 0, null, !1, !1, "", uc);
      return e._reactRootContainer = f, e[tn] = f.current, Hr(e.nodeType === 8 ? e.parentNode : e), $n(), f;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var E = ys(m);
        p.call(E);
      };
    }
    var m = ca(e, 0, !1, null, null, !1, !1, "", uc);
    return e._reactRootContainer = m, e[tn] = m.current, Hr(e.nodeType === 8 ? e.parentNode : e), $n(function() {
      vs(t, m, n, r);
    }), m;
  }
  function xs(e, t, n, r, s) {
    var a = n._reactRootContainer;
    if (a) {
      var f = a;
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var m = ys(f);
          p.call(m);
        };
      }
      vs(t, f, e, s);
    } else f = Qd(n, t, e, s, r);
    return ys(f);
  }
  Ua = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Mr(t.pendingLanes);
          n !== 0 && (Os(t, n | 1), wt(t, Je()), (Ee & 6) === 0 && (vr = Je() + 500, kn()));
        }
        break;
      case 13:
        $n(function() {
          var r = ln(e, 1);
          if (r !== null) {
            var s = vt();
            Vt(r, e, 1, s);
          }
        }), fa(e, 1);
    }
  }, Ds = function(e) {
    if (e.tag === 13) {
      var t = ln(e, 134217728);
      if (t !== null) {
        var n = vt();
        Vt(t, e, 134217728, n);
      }
      fa(e, 134217728);
    }
  }, Ha = function(e) {
    if (e.tag === 13) {
      var t = _n(e), n = ln(e, t);
      if (n !== null) {
        var r = vt();
        Vt(n, e, t, r);
      }
      fa(e, t);
    }
  }, Wa = function() {
    return Ce;
  }, Ka = function(e, t) {
    var n = Ce;
    try {
      return Ce = e, t();
    } finally {
      Ce = n;
    }
  }, en = function(e, t, n) {
    switch (t) {
      case "input":
        if (Te(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = Oi(r);
              if (!s) throw Error(l(90));
              ee(r), Te(r, s);
            }
          }
        }
        break;
      case "textarea":
        Me(e, n);
        break;
      case "select":
        t = n.value, t != null && Xe(e, !!n.multiple, t, !1);
    }
  }, Ca = ia, Ra = $n;
  var Gd = { usingClientEntryPoint: !1, Events: [Qr, rr, Oi, qn, Yn, ia] }, li = { findFiberByHostInstance: Pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qd = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: te.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ia(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: li.findFiberByHostInstance || Kd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ws.isDisabled && ws.supportsFiber) try {
      gi = ws.inject(qd), Gt = ws;
    } catch {
    }
  }
  return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gd, St.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ha(t)) throw Error(l(200));
    return Wd(e, t, null, n);
  }, St.createRoot = function(e, t) {
    if (!ha(e)) throw Error(l(299));
    var n = !1, r = "", s = oc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = ca(e, 1, !1, null, null, n, !1, r, s), e[tn] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new da(t);
  }, St.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = Ia(t), e = e === null ? null : e.stateNode, e;
  }, St.flushSync = function(e) {
    return $n(e);
  }, St.hydrate = function(e, t, n) {
    if (!ks(t)) throw Error(l(200));
    return xs(null, e, t, !0, n);
  }, St.hydrateRoot = function(e, t, n) {
    if (!ha(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, s = !1, a = "", f = oc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = lc(t, null, e, 1, n ?? null, s, !1, a, f), e[tn] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new gs(t);
  }, St.render = function(e, t, n) {
    if (!ks(t)) throw Error(l(200));
    return xs(null, e, t, !1, n);
  }, St.unmountComponentAtNode = function(e) {
    if (!ks(e)) throw Error(l(40));
    return e._reactRootContainer ? ($n(function() {
      xs(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, St.unstable_batchedUpdates = ia, St.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ks(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return xs(e, t, n, !1, r);
  }, St.version = "18.3.1-next-f1338f8080-20240426", St;
}
var yc;
function rh() {
  if (yc) return va.exports;
  yc = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), va.exports = nh(), va.exports;
}
var gc;
function ih() {
  if (gc) return Ss;
  gc = 1;
  var o = rh();
  return Ss.createRoot = o.createRoot, Ss.hydrateRoot = o.hydrateRoot, Ss;
}
var sh = ih();
const lh = (() => {
  const o = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", l = [0, 2, 4, 5, 7, 9, 11], u = [64, 59, 55, 50, 45, 40], d = u.at(-1), h = { pentatonic: 15, "3nps": 17 }, v = 7, y = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], _ = ["ohut e", "B", "G", "D", "A", "paksu E"], N = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], w = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], M = {
    mp: {
      name: "mollipentatoninen",
      base: N,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: N,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: N,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: N,
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
      base: w,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: w,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: w,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: w,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, I = 26, C = 72, z = 30, L = 54, b = 34, W = 11, J = (I + C) / 2, te = z + (u.length - 1) * b + 30, q = (O) => C + O * L, V = (O) => O === 0 ? J : q(O) - L / 2, re = (O) => z + O * b;
  function pe(O, B, F) {
    const Y = i.indexOf(o[O][0]) + Number(F.slice(-1)) - 1, ce = Y % i.length, ee = l[ce] + 12 * Math.floor(Y / i.length), ie = O + B - ee;
    return i[ce] + (ie < 0 ? "♭" : "♯").repeat(Math.abs(ie));
  }
  function Pe(O) {
    return [...O.base, ...O.add].sort((B, F) => B[0] - F[0]);
  }
  function je(O, B, F) {
    const Y = B + (F ? 1 : 0), ce = y[Y % y.length], ee = Math.min(...ce.map(([Te]) => Te)), ie = Math.max(...ce.map(([, Te]) => Te));
    let xe = (O - d % 12 + 12) % 12 - (F ? 8 : 5) + 12 * Math.floor(Y / y.length);
    return ee + xe < 0 && (xe += 12), ie + xe > h.pentatonic && (xe -= 12), {
      strings: ce.map((Te) => Te.map((qe) => qe + xe)),
      start: ee + xe,
      end: ie + xe
    };
  }
  function Qe(O, B, F) {
    const Y = F[B], ce = (O + Y - d % 12 + 12) % 12, ee = d + ce - Y, ie = u.map((ne, ye) => {
      const xe = B + (u.length - 1 - ye) * 3;
      return [xe, xe + 1, xe + 2].map((Te) => {
        const qe = Math.floor(Te / F.length), De = F[Te % F.length];
        return ee + De + 12 * qe - ne;
      });
    });
    return {
      strings: ie,
      start: Math.min(...ie.map((ne) => ne[0])),
      end: Math.max(...ie.map((ne) => ne.at(-1)))
    };
  }
  function Be(O, B) {
    const F = [], Y = Math.ceil(-O.end / 12) * 12;
    for (let ee = Y; O.start + ee <= B; ee += 12) {
      const ie = O.strings.map((ye) => ye.map((xe) => xe + ee).filter((xe) => xe >= 0 && xe <= B)), ne = ie.flat();
      F.push({
        strings: ie,
        start: Math.min(...ne),
        end: Math.max(...ne),
        partial: O.start + ee < 0 || O.end + ee > B
      });
    }
    const ce = F.filter((ee) => !ee.partial);
    return ce.length ? ce : F;
  }
  function Le(O) {
    return Pe(O).length === v;
  }
  function Ve(O, B, F) {
    const Y = Le(B);
    O.querySelector('[value="3nps"]').disabled = !Y, O.value = Y ? F ?? "3nps" : "pentatonic";
  }
  function Ge(O, B, F, Y, ce) {
    const ee = Pe(B).map(([ie]) => ie);
    return Y.map((ie) => {
      const ne = ie - 1, ye = F === "3nps" ? Qe(O, ne, ee) : je(O, ne, B.base === w), xe = ce === void 0 ? [ye] : Be(ye, ce);
      return { number: ie, positions: xe };
    });
  }
  function Ae(O, B) {
    const F = O.getBoundingClientRect(), Y = O.querySelectorAll(B);
    let ce = 1 / 0;
    Y.forEach((ee) => {
      const ie = ee.getBoundingClientRect();
      let ne = 0;
      ie.left < F.left ? ne = ie.left - F.left - 8 : ie.right > F.right && (ne = ie.right - F.right + 8), Math.abs(ne) < Math.abs(ce) && (ce = ne);
    }), Number.isFinite(ce) && (O.scrollLeft += ce);
  }
  function _e(O, B = !1) {
    const F = O === "3nps" ? v : y.length;
    return Array.from({ length: F }, (Y, ce) => {
      const ee = ce + 1;
      return '<label class="box-toggle" data-box="' + ee + '"><input type="checkbox" value="' + ee + '"' + (B && ce === 0 ? " checked" : "") + "> Boksi " + ee + "</label>";
    }).join("");
  }
  function $(O, B) {
    const F = Pe(B), Y = new Map(F.map(([ee, ie]) => [ee, pe(O, ee, ie)])), ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return F.flatMap(([ee, ie]) => ce.flatMap(({ suffix: ne, base: ye }) => {
      const xe = ye.map(([Te]) => Y.get((ee + Te) % 12));
      return xe.every(Boolean) ? {
        root: (O + ee) % 12,
        degree: Number(String(ie).replace(/\D/g, "")),
        name: xe[0] + ne,
        notes: xe,
        base: ye,
        add: []
      } : [];
    }));
  }
  function Z(O, B) {
    const F = O.base.map(([ee]) => (O.root + ee) % 12), Y = u.map((ee) => {
      const ie = [];
      for (let ne = 0; ne <= B; ne++) {
        const ye = (ee + ne) % 12;
        F.includes(ye) && ie.push({ fret: ne, pitch: ye });
      }
      return ie;
    }), ce = [];
    for (let ee = 0; ee <= Y.length - 3; ee++)
      for (const ie of Y[ee])
        for (const ne of Y[ee + 1])
          if (ie.pitch !== ne.pitch)
            for (const ye of Y[ee + 2]) {
              if (ye.pitch === ie.pitch || ye.pitch === ne.pitch) continue;
              const xe = [ie.fret, ne.fret, ye.fret], Te = Math.min(...xe), qe = Math.max(...xe);
              if (qe - Te > 3) continue;
              const De = Array(u.length).fill(null);
              De.splice(ee, 3, ...xe), ce.push({ strings: De, low: Te, high: qe });
            }
    return ce.sort((ee, ie) => ee.high - ie.high || ee.low - ie.low);
  }
  const U = {
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
  function T(O, B) {
    const F = U[O + ":" + B];
    if (F) return { frets: F, barre: null };
    let Y = null;
    return k.forEach(({ string: ce, openPC: ee, shapes: ie }) => {
      const ne = ie[B];
      if (!ne) return;
      let ye = (O - ee + 12) % 12;
      if (ye + Math.min(...ne.filter((qe) => qe !== null)) < 0 && (ye += 12), Y && Y.fret <= ye) return;
      const xe = ne.map((qe) => qe === null ? null : ye + qe), Te = ye > 0 && ne.at(-1) === 0 ? { fret: ye, from: ce, to: ne.length - 1 } : null;
      Y = { fret: ye, frets: xe, barre: Te };
    }), Y && { frets: Y.frets, barre: Y.barre };
  }
  function ue(O, { frets: B, barre: F }, Y) {
    const xe = [...u].reverse(), Te = B.filter((Me) => Me > 0), De = !Te.length || Math.max(...Te) <= 4 && (B.includes(0) || Math.min(...Te) === 1) ? 1 : Math.min(...Te), Ue = (Me) => 24 + Me * 14, Xe = (Me) => 30 + (Me - De) * 18 + 18 / 2, Tt = 102;
    let He = '<svg class="chord-svg" viewBox="0 0 108 ' + (Tt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + Y + "-ote paksusta kielestä ohueen: " + B.map((Me) => Me ?? "x").join(" ") + '">';
    for (let Me = 0; Me <= 4; Me++)
      He += '<line class="' + (Me === 0 && De === 1 ? "nut" : "fret") + '" x1="' + Ue(0) + '" y1="' + (30 + Me * 18) + '" x2="' + Ue(5) + '" y2="' + (30 + Me * 18) + '"/>';
    return B.forEach((Me, be) => {
      He += '<line class="string" x1="' + Ue(be) + '" y1="30" x2="' + Ue(be) + '" y2="' + Tt + '"/>';
    }), De > 1 && (He += '<text class="fret-label" x="15" y="' + (Xe(De) + 4) + '">' + De + "</text>"), F && (He += '<rect class="barre" x="' + (Ue(F.from) - 6.5) + '" y="' + (Xe(F.fret) - 6.5) + '" width="' + ((F.to - F.from) * 14 + 13) + '" height="13" rx="6.5"/>'), B.forEach((Me, be) => {
      if (Me === null) {
        He += '<text class="marker" x="' + Ue(be) + '" y="22">×</text>';
        return;
      }
      const Ht = (xe[be] + Me) % 12 === O;
      if (Me === 0) {
        He += '<circle class="open' + (Ht ? " root-open" : "") + '" cx="' + Ue(be) + '" cy="18" r="4.5"/>';
        return;
      }
      F && Me === F.fret && be >= F.from && be <= F.to && !Ht || (He += '<circle class="' + (Ht ? "root" : "tone") + '" cx="' + Ue(be) + '" cy="' + Xe(Me) + '" r="6.5"/>');
    }), He + "</svg>";
  }
  function he(O, B) {
    const F = new URLSearchParams(location.search), Y = o.indexOf(F.get("toonikka")), ce = F.get("asteikko");
    return {
      rootPC: Y === -1 ? O : Y,
      scaleId: Object.hasOwn(M, ce) ? ce : B
    };
  }
  function me(O, B, F) {
    return O + "?" + new URLSearchParams({ toonikka: o[B], asteikko: F });
  }
  function ve(O, B, F, {
    boxes: Y = [],
    onlyBoxNotes: ce = !1,
    automatic: ee = !0,
    focusDegree: ie = "",
    grip: ne = null,
    barre: ye = null,
    label: xe = o[O] + " " + B.name,
    notes: Te = null,
    targets: qe = !1,
    muteFret: De = null
  } = {}) {
    const Ue = q(F), Xe = Ue + 48, Tt = Xe + 28, He = z - 14, Me = re(u.length - 1) + 14, be = Me - He, Ht = ee ? 680 : Math.ceil(Tt * 0.64), Cn = Y.flatMap((oe) => oe.positions), It = {};
    B.base.forEach(([oe, ge]) => It[(O + oe) % 12] = { deg: ge, added: !1 }), B.add.forEach(([oe, ge]) => It[(O + oe) % 12] = { deg: ge, added: !0 });
    const Jt = u.map((oe, ge) => !!ne && ne[ge] === null), Wt = !!ne && De !== null, Kt = _.filter((oe, ge) => Jt[ge]).reverse(), Er = xe + ". " + F + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Kt.length ? " Soittamatta jäävät kielet: " + Kt.join(", ") + "." : "");
    let ae = '<svg viewBox="0 0 ' + Tt + " " + te + '" style="min-width:' + Ht + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (qe ? "group" : "img") + '" aria-label="' + Er + '">';
    ae += '<rect x="' + I + '" y="' + He + '" width="' + (C - I) + '" height="' + be + '" rx="6" fill="#2a2338"/>', ae += '<rect x="' + C + '" y="' + He + '" width="' + (Ue - C) + '" height="' + be + '" fill="#231a12"/>', ae += '<rect x="' + Ue + '" y="' + He + '" width="' + (Tt - Ue - 4) + '" height="' + be + '" rx="8" fill="#32251e"/>';
    for (let oe = 1; oe <= F; oe++)
      ae += '<line x1="' + q(oe) + '" y1="' + He + '" x2="' + q(oe) + '" y2="' + Me + '" stroke="#6f5b47" stroke-width="2"/>';
    ae += '<rect x="' + (C - 3) + '" y="' + He + '" width="6" height="' + be + '" rx="2" fill="#d8cbb6"/>', ae += '<rect x="' + (Xe - 11) + '" y="' + (He + 3) + '" width="22" height="' + (be - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', ae += '<rect x="' + (Xe - 4) + '" y="' + (He + 7) + '" width="3" height="' + (be - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Zt = (He + Me) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((oe) => oe <= F).forEach((oe) => ae += '<circle cx="' + V(oe) + '" cy="' + Zt + '" r="5.5" fill="#7a6550"/>');
    for (let oe = 12; oe <= F; oe += 12)
      ae += '<circle cx="' + V(oe) + '" cy="' + (Zt - b) + '" r="5.5" fill="#7a6550"/>', ae += '<circle cx="' + V(oe) + '" cy="' + (Zt + b) + '" r="5.5" fill="#7a6550"/>';
    ae += '<text x="' + J + '" y="' + (te - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', ae += '<text x="' + C + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', ae += '<text x="' + Xe + '" y="' + (te - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let oe = 1; oe <= F; oe++)
      ae += '<text x="' + V(oe) + '" y="' + (te - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + oe + "</text>";
    if (Y.forEach(({ number: oe, positions: ge }) => {
      ge.forEach((we) => {
        const ze = we.partial ? "box-highlight box-partial" : "box-highlight";
        ae += '<g class="' + ze + '" data-box="' + oe + '" aria-hidden="true">';
        const et = we.strings.find((pt) => pt.length), en = (V(et[0]) + V(et.at(-1))) / 2;
        ae += '<text class="box-number" x="' + en + '" y="12">' + oe + "</text>", we.strings.forEach((pt, Qt) => {
          if (!pt.length) return;
          const Gn = V(pt[0]) - 16, qn = V(pt.at(-1)) - V(pt[0]) + 32;
          ae += '<rect class="box-band" x="' + Gn + '" y="' + (re(Qt) - 14) + '" width="' + qn + '" height="28" rx="14"/>';
        }), ae += "</g>";
      });
    }), u.forEach((oe, ge) => {
      const we = 1 + ge * 0.45, ze = re(ge), et = Jt[ge] && !Wt;
      et ? ae += '<text class="muted-mark" x="' + J + '" y="' + (ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Jt[ge] && De === 0 || (ae += '<line x1="' + (I + 4) + '" y1="' + ze + '" x2="' + (C - 4) + '" y2="' + ze + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), ae += "<g" + (et ? ' opacity=".35"' : "") + ">", ae += '<line x1="' + C + '" y1="' + ze + '" x2="' + (Xe + 5) + '" y2="' + ze + '" stroke="#b9b9c4" stroke-width="' + we.toFixed(2) + '"/>', ae += '<circle cx="' + (Xe + 5) + '" cy="' + ze + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', ae += "</g>", ae += '<text x="13" y="' + (ze + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[ge] + "</text>";
    }), ne && ye && ye.fret >= 1 && ye.fret <= F) {
      const oe = re(ye.from), ge = re(ye.to), we = Math.min(oe, ge) - 6, ze = Math.max(oe, ge) + 6;
      ae += '<rect class="barre-indicator" x="' + (V(ye.fret) - 7) + '" y="' + we + '" width="14" height="' + (ze - we) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return qe && (ae += '<g class="fret-targets">', u.forEach((oe, ge) => {
      for (let we = 0; we <= F; we++) {
        const ze = we ? _[ge] + "-kieli, " + we + ". nauha" : "vapaa " + _[ge] + "-kieli", et = we ? L : C - I - 6;
        ae += '<rect class="fret-target" role="button" tabindex="0" data-string="' + ge + '" data-fret="' + we + '" data-midi="' + (oe + we) + '" aria-label="' + ze + '" x="' + (V(we) - et / 2) + '" y="' + (re(ge) - b / 2) + '" width="' + et + '" height="' + b + '" fill="transparent"/>';
      }
    }), ae += "</g>"), (Te ?? []).forEach(({ string: oe, fret: ge, label: we, kind: ze }) => {
      ae += '<g class="octave-note octave-' + ze + '">', ae += '<circle cx="' + V(ge) + '" cy="' + re(oe) + '" r="' + W + '"/>', ae += '<text x="' + V(ge) + '" y="' + (re(oe) + 3.5) + '" font-size="' + (we.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + we + "</text>", ae += "</g>";
    }), ne && (ae += '<g class="grip-notes">'), (Te ? [] : u).forEach((oe, ge) => {
      for (let we = 0; we <= F; we++) {
        const ze = (oe + we) % 12;
        if (!(ze in It) || ne && ne[ge] !== we || ce && !Cn.some(({ strings: qn }) => {
          const Yn = qn[ge];
          return Yn.length > 0 && we >= Yn[0] && we <= Yn.at(-1);
        })) continue;
        const et = It[ze], en = et.deg === "1", pt = et.added ? "#f0a13c" : en ? "#4b2fd6" : "#6d4aff", Qt = et.added ? "#1a1430" : "#fff";
        et.deg === ie && (ae += '<circle class="focus-note" cx="' + V(we) + '" cy="' + re(ge) + '" r="14.5"/>');
        const Gn = ne ? ' data-string="' + (ge + 1) + '" data-fret="' + we + '" data-degree="' + et.deg + '"' : "";
        ae += "<circle" + Gn + ' cx="' + V(we) + '" cy="' + re(ge) + '" r="' + W + '" fill="' + pt + '" stroke="' + (en ? "#fff" : "#1a1430") + '" stroke-width="' + (en ? 2.5 : 1) + '"/>', ae += '<text x="' + V(we) + '" y="' + (re(ge) + 3.5) + '" font-size="' + (et.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Qt + '" text-anchor="middle">' + et.deg + "</text>";
      }
    }), ne && (ae += "</g>"), Wt && Jt.forEach((oe, ge) => {
      if (!oe) return;
      const we = V(De), ze = re(ge);
      ae += '<g class="muted-mark grip-mute" data-string="' + (ge + 1) + '" data-fret="' + De + '">', ae += '<circle cx="' + we + '" cy="' + ze + '" r="9" fill="' + (De === 0 ? "#2a2338" : "#231a12") + '"/>', ae += '<text x="' + we + '" y="' + (ze + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', ae += "</g>";
    }), ae += "</svg>", ae;
  }
  return {
    CHROM: o,
    OPEN_PITCHES: u,
    PENT_MAJ: w,
    SCALES: M,
    noteName: pe,
    scaleNotes: Pe,
    scaleTriads: $,
    triadGrips: Z,
    chordGrip: T,
    renderChordDiagram: ue,
    selectionFromURL: he,
    selectionHref: me,
    renderBoard: ve,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Le,
    syncBoxSystem: Ve,
    fingeringBoxes: Ge,
    boxOptions: _e,
    revealPositions: Ae
  };
})();
globalThis.MusicMapFretboard = lh;
function ka(o) {
  return 440 * Math.pow(2, (o - 69) / 12);
}
function ah(o) {
  return 69 + 12 * Math.log2(o / 440);
}
function oh(o) {
  const i = ah(o), l = Math.round(i), u = (i - l) * 100;
  return { midi: l, cents: u };
}
const Ac = globalThis.MusicMapFretboard, uh = (o) => (o % 12 + 12) % 12, ch = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], fh = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], dh = (o, i = !1, l = !1) => (i ? fh : ch)[uh(o)] + (l ? Math.floor(o / 12) - 1 : ""), Ts = ["ohut E", "B", "G", "D", "A", "paksu E"], hh = (o) => o === 0 ? "vapaa kieli" : `${o}. nauha`, ph = (o, i) => ({ string: o, fret: i, midi: Ac.OPEN_PITCHES[o] + i });
function mh(o, i, l) {
  return [...o].sort((u, d) => u - d).flatMap((u) => Array.from({ length: Math.max(0, l - i + 1) }, (d, h) => ph(u, i + h)));
}
const oi = (o) => `${o.string}:${o.fret}`, vh = 4e3;
class kc extends Error {
  name = "MicSetupError";
}
async function yh(o, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new kc("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const l = {
    audio: {
      deviceId: o ? { exact: o } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, u = await navigator.mediaDevices.getUserMedia(l);
  let d;
  try {
    if (d = i ? i() : new AudioContext(), d.state !== "running") {
      let _;
      await Promise.race([
        d.resume(),
        new Promise((N, w) => {
          _ = setTimeout(() => w(new kc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), vh);
        })
      ]).finally(() => clearTimeout(_));
    }
    const h = d.createMediaStreamSource(u), v = d, y = u.getAudioTracks?.()[0] ?? u.getTracks()[0], j = y?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: u,
      label: y?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        u.getTracks().forEach((_) => _.stop()), h.disconnect(), i || v.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw u.getTracks().forEach((v) => v.stop()), i || await d?.close().catch(() => {
    }), h;
  }
}
async function gh() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var xa, xc;
function kh() {
  if (xc) return xa;
  xc = 1;
  function o(i) {
    if (this.size = i | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = i << 1;
    for (var l = new Array(this.size * 2), u = 0; u < l.length; u += 2) {
      const _ = Math.PI * u / this.size;
      l[u] = Math.cos(_), l[u + 1] = -Math.sin(_);
    }
    this.table = l;
    for (var d = 0, h = 1; this.size > h; h <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var v = 0; v < this._bitrev.length; v++) {
      this._bitrev[v] = 0;
      for (var y = 0; y < this._width; y += 2) {
        var j = this._width - y - 2;
        this._bitrev[v] |= (v >>> y & 3) << j;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return xa = o, o.prototype.fromComplexArray = function(l, u) {
    for (var d = u || new Array(l.length >>> 1), h = 0; h < l.length; h += 2)
      d[h >>> 1] = l[h];
    return d;
  }, o.prototype.createComplexArray = function() {
    const l = new Array(this._csize);
    for (var u = 0; u < l.length; u++)
      l[u] = 0;
    return l;
  }, o.prototype.toComplexArray = function(l, u) {
    for (var d = u || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = l[h >>> 1], d[h + 1] = 0;
    return d;
  }, o.prototype.completeSpectrum = function(l) {
    for (var u = this._csize, d = u >>> 1, h = 2; h < d; h += 2)
      l[u - h] = l[h], l[u - h + 1] = -l[h + 1];
  }, o.prototype.transform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, o.prototype.realTransform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, o.prototype.inverseTransform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 1, this._transform4();
    for (var d = 0; d < l.length; d++)
      l[d] /= this.size;
    this._out = null, this._data = null;
  }, o.prototype._transform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, v = u / h << 1, y, j, _ = this._bitrev;
    if (v === 4)
      for (y = 0, j = 0; y < u; y += v, j++) {
        const L = _[j];
        this._singleTransform2(y, L, h);
      }
    else
      for (y = 0, j = 0; y < u; y += v, j++) {
        const L = _[j];
        this._singleTransform4(y, L, h);
      }
    var N = this._inv ? -1 : 1, w = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      v = u / h << 1;
      var M = v >>> 2;
      for (y = 0; y < u; y += v)
        for (var I = y + M, C = y, z = 0; C < I; C += 2, z += h) {
          const L = C, b = L + M, W = b + M, J = W + M, te = l[L], q = l[L + 1], V = l[b], re = l[b + 1], pe = l[W], Pe = l[W + 1], je = l[J], Qe = l[J + 1], Be = te, Le = q, Ve = w[z], Ge = N * w[z + 1], Ae = V * Ve - re * Ge, _e = V * Ge + re * Ve, $ = w[2 * z], Z = N * w[2 * z + 1], U = pe * $ - Pe * Z, k = pe * Z + Pe * $, T = w[3 * z], ue = N * w[3 * z + 1], he = je * T - Qe * ue, me = je * ue + Qe * T, ve = Be + U, O = Le + k, B = Be - U, F = Le - k, Y = Ae + he, ce = _e + me, ee = N * (Ae - he), ie = N * (_e - me), ne = ve + Y, ye = O + ce, xe = ve - Y, Te = O - ce, qe = B + ie, De = F - ee, Ue = B - ie, Xe = F + ee;
          l[L] = ne, l[L + 1] = ye, l[b] = qe, l[b + 1] = De, l[W] = xe, l[W + 1] = Te, l[J] = Ue, l[J + 1] = Xe;
        }
    }
  }, o.prototype._singleTransform2 = function(l, u, d) {
    const h = this._out, v = this._data, y = v[u], j = v[u + 1], _ = v[u + d], N = v[u + d + 1], w = y + _, M = j + N, I = y - _, C = j - N;
    h[l] = w, h[l + 1] = M, h[l + 2] = I, h[l + 3] = C;
  }, o.prototype._singleTransform4 = function(l, u, d) {
    const h = this._out, v = this._data, y = this._inv ? -1 : 1, j = d * 2, _ = d * 3, N = v[u], w = v[u + 1], M = v[u + d], I = v[u + d + 1], C = v[u + j], z = v[u + j + 1], L = v[u + _], b = v[u + _ + 1], W = N + C, J = w + z, te = N - C, q = w - z, V = M + L, re = I + b, pe = y * (M - L), Pe = y * (I - b), je = W + V, Qe = J + re, Be = te + Pe, Le = q - pe, Ve = W - V, Ge = J - re, Ae = te - Pe, _e = q + pe;
    h[l] = je, h[l + 1] = Qe, h[l + 2] = Be, h[l + 3] = Le, h[l + 4] = Ve, h[l + 5] = Ge, h[l + 6] = Ae, h[l + 7] = _e;
  }, o.prototype._realTransform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, v = u / h << 1, y, j, _ = this._bitrev;
    if (v === 4)
      for (y = 0, j = 0; y < u; y += v, j++) {
        const oe = _[j];
        this._singleRealTransform2(y, oe >>> 1, h >>> 1);
      }
    else
      for (y = 0, j = 0; y < u; y += v, j++) {
        const oe = _[j];
        this._singleRealTransform4(y, oe >>> 1, h >>> 1);
      }
    var N = this._inv ? -1 : 1, w = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      v = u / h << 1;
      var M = v >>> 1, I = M >>> 1, C = I >>> 1;
      for (y = 0; y < u; y += v)
        for (var z = 0, L = 0; z <= C; z += 2, L += h) {
          var b = y + z, W = b + I, J = W + I, te = J + I, q = l[b], V = l[b + 1], re = l[W], pe = l[W + 1], Pe = l[J], je = l[J + 1], Qe = l[te], Be = l[te + 1], Le = q, Ve = V, Ge = w[L], Ae = N * w[L + 1], _e = re * Ge - pe * Ae, $ = re * Ae + pe * Ge, Z = w[2 * L], U = N * w[2 * L + 1], k = Pe * Z - je * U, T = Pe * U + je * Z, ue = w[3 * L], he = N * w[3 * L + 1], me = Qe * ue - Be * he, ve = Qe * he + Be * ue, O = Le + k, B = Ve + T, F = Le - k, Y = Ve - T, ce = _e + me, ee = $ + ve, ie = N * (_e - me), ne = N * ($ - ve), ye = O + ce, xe = B + ee, Te = F + ne, qe = Y - ie;
          if (l[b] = ye, l[b + 1] = xe, l[W] = Te, l[W + 1] = qe, z === 0) {
            var De = O - ce, Ue = B - ee;
            l[J] = De, l[J + 1] = Ue;
            continue;
          }
          if (z !== C) {
            var Xe = F, Tt = -Y, He = O, Me = -B, be = -N * ne, Ht = -N * ie, Cn = -N * ee, It = -N * ce, Jt = Xe + be, Wt = Tt + Ht, Kt = He + It, Er = Me - Cn, ae = y + I - z, Zt = y + M - z;
            l[ae] = Jt, l[ae + 1] = Wt, l[Zt] = Kt, l[Zt + 1] = Er;
          }
        }
    }
  }, o.prototype._singleRealTransform2 = function(l, u, d) {
    const h = this._out, v = this._data, y = v[u], j = v[u + d], _ = y + j, N = y - j;
    h[l] = _, h[l + 1] = 0, h[l + 2] = N, h[l + 3] = 0;
  }, o.prototype._singleRealTransform4 = function(l, u, d) {
    const h = this._out, v = this._data, y = this._inv ? -1 : 1, j = d * 2, _ = d * 3, N = v[u], w = v[u + d], M = v[u + j], I = v[u + _], C = N + M, z = N - M, L = w + I, b = y * (w - I), W = C + L, J = z, te = -b, q = C - L, V = z, re = b;
    h[l] = W, h[l + 1] = 0, h[l + 2] = J, h[l + 3] = te, h[l + 4] = q, h[l + 5] = 0, h[l + 6] = V, h[l + 7] = re;
  }, xa;
}
var xh = kh();
const wh = /* @__PURE__ */ Xd(xh);
class fi {
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
  static forFloat32Array(i) {
    return new fi(
      i,
      (l) => new Float32Array(l)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using
   * {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<Float64Array>}
   */
  static forFloat64Array(i) {
    return new fi(
      i,
      (l) => new Float64Array(l)
    );
  }
  /**
   * A helper method to create an {@link Autocorrelator} using `number[]`
   * buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {Autocorrelator<number[]>}
   */
  static forNumberArray(i) {
    return new fi(i, (l) => Array(l));
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
  constructor(i, l) {
    if (i < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = i, this._fft = new wh(Eh(2 * i)), this._bufferSupplier = l, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(i, l = this._bufferSupplier(i.length)) {
    if (i.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${i.length}`
      );
    for (let d = 0; d < i.length; d++)
      this._paddedInputBuffer[d] = i[d];
    for (let d = i.length; d < this._paddedInputBuffer.length; d++)
      this._paddedInputBuffer[d] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const u = this._transformBuffer;
    for (let d = 0; d < u.length; d += 2)
      u[d] = u[d] * u[d] + u[d + 1] * u[d + 1], u[d + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let d = 0; d < i.length; d++)
      l[d] = this._inverseBuffer[2 * d];
    return l;
  }
}
function Sh(o) {
  const i = [];
  let l = !1, u = -1 / 0, d = -1;
  for (let h = 1; h < o.length - 1; h++)
    o[h - 1] <= 0 && o[h] > 0 ? (l = !0, d = h, u = o[h]) : o[h - 1] > 0 && o[h] <= 0 ? (l = !1, d !== -1 && i.push(d)) : l && o[h] > u && (u = o[h], d = h);
  return i;
}
function jh(o, i) {
  const [l, u, d] = [o - 1, o, o + 1], [h, v, y] = [i[l], i[u], i[d]], j = h / 2 - v + y / 2, _ = -(h / 2) * (u + d) + v * (l + d) - y / 2 * (l + u), N = h * u * d / 2 - v * l * d + y * l * u / 2, w = -_ / (2 * j), M = j * w * w + _ * w + N;
  return [w, M];
}
class di {
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
  static forFloat32Array(i) {
    return new di(i, (l) => new Float32Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new di(i, (l) => new Float64Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new di(i, (l) => Array(l));
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
  constructor(i, l) {
    this._autocorrelator = new fi(i, l), this._nsdfBuffer = l(i);
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
  set clarityThreshold(i) {
    if (!Number.isFinite(i) || i <= 0 || i > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = i;
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
  set minVolumeAbsolute(i) {
    if (!Number.isFinite(i) || i < 0 || i > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = i;
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
  set minVolumeDecibels(i) {
    if (!Number.isFinite(i) || i > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (i / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(i) {
    if (!Number.isFinite(i) || i <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = i;
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
  findPitch(i, l) {
    if (this._belowMinimumVolume(i)) return [0, 0];
    this._nsdf(i);
    const u = Sh(this._nsdfBuffer);
    if (u.length === 0)
      return [0, 0];
    const d = Math.max(...u.map((j) => this._nsdfBuffer[j])), h = u.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * d
    ), [v, y] = jh(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [l / v, Math.min(y, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(i) {
    if (this._minVolumeAbsolute === 0) return !1;
    let l = 0;
    for (let u = 0; u < i.length; u++)
      l += i[u] ** 2;
    return Math.sqrt(l / i.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(i) {
    this._autocorrelator.autocorrelate(i, this._nsdfBuffer);
    let l = 2 * this._nsdfBuffer[0], u;
    for (u = 0; u < this._nsdfBuffer.length && l > 0; u++)
      this._nsdfBuffer[u] = 2 * this._nsdfBuffer[u] / l, l -= i[u] ** 2 + i[i.length - u - 1] ** 2;
    for (; u < this._nsdfBuffer.length; u++)
      this._nsdfBuffer[u] = 0;
  }
}
function Eh(o) {
  return o--, o |= o >> 1, o |= o >> 2, o |= o >> 4, o |= o >> 8, o |= o >> 16, o++, o;
}
function _h(o) {
  const i = o * 0.17;
  let l = 2048;
  for (; l < i && l < 32768; ) l *= 2;
  return l;
}
const Nh = 0.05, Th = 1.5;
class Mh {
  constructor(i, l = {}) {
    this.mic = i, this.opts = l;
    const u = i.context, d = _h(u.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof u.createChannelSplitter == "function" && (this.splitter = u.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let v = 0; v < (this.splitter ? h : 1); v++) {
      const y = u.createAnalyser();
      y.fftSize = d, y.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(y, v) : i.source.connect(y), this.analysers.push(y), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(u.sampleRate * Nh))), this.detector = di.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Ch();
  onset = new Ic();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(i) {
    Object.assign(this.opts, i);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const i = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(i));
    };
    this.rafId = requestAnimationFrame(i);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const i of this.analysers) i.disconnect();
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
  processFrame(i) {
    const {
      minClarity: l = 0.9,
      minRms: u = 0.01,
      stabilityMs: d = 240,
      centsTolerance: h = 35,
      minFreq: v = 70,
      maxFreq: y = 1450,
      onFrame: j,
      onStableNote: _
    } = this.opts, N = this.analysers.map((re, pe) => (re.getFloatTimeDomainData(this.buffers[pe]), wc(this.buffers[pe], this.buffers[pe].length - this.shortLength))), w = N.indexOf(Math.max(...N));
    w !== this.channel && N[w] > (N[this.channel] ?? 0) * Th && (this.channel = w);
    const M = this.buffers[this.channel], I = N[this.channel], C = Rh(M, M.length - this.shortLength), z = { rms: I, peak: C, channel: this.channel, levels: N }, L = I < u, b = this.onset.feed(I, i, u);
    if (L && wc(M, 0) < u) {
      this.gate.feed(null, i, d, !0, !1), j?.({ ...z, status: "silent" });
      return;
    }
    const [W, J] = this.detector.findPitch(M, this.mic.context.sampleRate);
    if (!isFinite(W) || J < l) {
      this.gate.feed(null, i, d, L, b), j?.({ ...z, status: L ? "silent" : "unclear", clarity: isFinite(J) ? J : 0 });
      return;
    }
    if (W < v || W > y) {
      this.gate.feed(null, i, d, L, b), j?.({ ...z, status: "out-of-range", frequency: W, clarity: J });
      return;
    }
    const { midi: te, cents: q } = oh(W);
    if (Math.abs(q) > h) {
      this.gate.feed(null, i, d, L, b), j?.({ ...z, status: "off-pitch", frequency: W, clarity: J, midi: te, cents: q });
      return;
    }
    j?.({ ...z, status: "pitch", frequency: W, clarity: J, midi: te, cents: q });
    const V = this.gate.feed(te, i, d, L, b);
    V !== null && _?.({ midi: te, frequency: W, cents: q, clarity: J, timestamp: i, heldMs: V.heldMs });
  }
}
class Ch {
  constructor(i = 120, l = 80) {
    this.releaseMs = i, this.gapMs = l;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(i, l, u, d, h) {
    if (d ? (this.quietSince ??= l, l - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), i === null)
      return this.current && l - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== i) && (this.current = { midi: i, since: l, seen: l }), this.current.seen = l;
    const v = l - this.current.since;
    return v < u ? null : (this.armed = !1, this.current = null, { midi: i, heldMs: v });
  }
}
class Ic {
  constructor(i = 2, l = 300, u = 150) {
    this.ratio = i, this.windowMs = l, this.refractoryMs = u;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(i, l, u) {
    if (l - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: l, rms: i }], !1;
    for (; this.history.length && l - this.history[0].time > this.windowMs; ) this.history.shift();
    const d = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : i;
    return this.history.push({ time: l, rms: i }), i < u * 1.5 || i < d * this.ratio ? !1 : (this.lastOnset = l, this.history = [{ time: l, rms: i }], !0);
  }
}
function wc(o, i = 0) {
  const l = Math.max(0, i);
  let u = 0;
  for (let d = l; d < o.length; d++) u += o[d] * o[d];
  return Math.sqrt(u / Math.max(1, o.length - l));
}
function Rh(o, i = 0) {
  let l = 0;
  for (let u = Math.max(0, i); u < o.length; u++) {
    const d = Math.abs(o[u]);
    d > l && (l = d);
  }
  return l;
}
const _s = (o) => o > 0 ? Math.max(-90, 20 * Math.log10(o)) : -90;
let xr;
function zc() {
  return (!xr || xr.state === "closed") && (xr = new AudioContext()), xr;
}
function Ph() {
  const o = xr;
  xr = void 0, o?.close().catch(() => {
  });
}
const Fc = (o) => o instanceof Error ? o.name : "";
function Lh(o) {
  const i = Fc(o);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? o.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Ah {
  constructor(i = (l) => yh(l, zc)) {
    this.opener = i;
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
  async start(i, l, u) {
    this.stop();
    const d = this.generation;
    let h, v = !1;
    try {
      h = await this.opener(i || void 0);
    } catch (y) {
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Fc(y))) throw y;
      h = await this.opener(void 0), v = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Mh(h, { ...l });
      const y = () => {
        this.mic === h && (this.stop(), u());
      }, j = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((_) => _.addEventListener("ended", y, { once: !0, signal: j.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && y();
      }, { signal: j.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: v };
    } catch (y) {
      throw this.stop(), y;
    }
  }
  setOptions(i) {
    this.loop?.setOptions(i);
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
function Ih(o) {
  const i = [...o].sort((u, d) => u - d), l = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, l * 3)), noise: l, loud: l > 0.04 };
}
async function wa(o) {
  const i = () => o.state === "running";
  if (i()) return;
  let l;
  try {
    await Promise.race([
      o.resume(),
      new Promise((u, d) => {
        l = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    l !== void 0 && clearTimeout(l);
  }
  if (!i()) throw new Error("reference-audio-not-running");
}
function Oc(o) {
  const i = o instanceof Error ? o.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : o instanceof Error && o.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class Sc {
  constructor(i = zc) {
    this.provide = i;
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
  async play(i, l) {
    this.stop();
    const u = this.token, d = this.provide();
    if (await wa(d), u !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const v = Array.from({ length: 12 }, (_, N) => 1 / (N + 1) ** 1.3), y = d.createPeriodicWave?.(new Float32Array([0, ...v.map(() => 0)]), new Float32Array([0, ...v]));
    return i.forEach((_, N) => {
      const w = d.createOscillator(), M = d.createGain(), I = d.currentTime + 0.05 + N * 0.8;
      y ? w.setPeriodicWave(y) : w.type = "triangle", w.frequency.value = ka(_), M.gain.setValueAtTime(0, I), M.gain.linearRampToValueAtTime(0.22, I + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, I + 0.7), w.connect(M), M.connect(h), w.start(I), w.stop(I + 0.72), l && this.noteTimers.push(setTimeout(() => {
        u === this.token && l(N);
      }, 50 + N * 800));
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), i.length * 800 + 350);
    }) || u !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], h.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(i, l, u, d) {
    if (this.stop(), !i.length) return !1;
    const h = this.token, v = this.provide();
    if (await wa(v), h !== this.token) return !1;
    const y = 60 / Math.max(40, Math.min(140, l)), j = v.createGain();
    j.connect(v.destination), this.master = j;
    const _ = Array.from({ length: 12 }, (C, z) => 1 / (z + 1) ** 1.3), N = v.createPeriodicWave?.(
      new Float32Array([0, ..._.map(() => 0)]),
      new Float32Array([0, ..._])
    ), w = v.currentTime + 0.05;
    let M = 0;
    return i.forEach((C, z) => {
      if (!Number.isFinite(C.beat) || C.beat < 0 || !Number.isFinite(C.duration) || C.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const L = w + C.beat * y, b = C.duration * y, W = L + Math.max(0.08, b * 0.94), J = v.createOscillator(), te = v.createGain();
      N ? J.setPeriodicWave(N) : J.type = "triangle", J.frequency.value = ka(C.midi), te.gain.setValueAtTime(0, L), te.gain.linearRampToValueAtTime(0.22, L + 0.012), te.gain.exponentialRampToValueAtTime(1e-3, W - 0.01), J.connect(te), te.connect(j), J.start(L), J.stop(W), u && this.noteTimers.push(setTimeout(() => {
        h === this.token && u(z);
      }, 50 + C.beat * y * 1e3));
      const q = i[z + 1]?.beat ?? 1 / 0;
      d && q > C.beat + C.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + C.beat * y * 1e3 + b * 1e3)), M = Math.max(M, C.beat + C.duration);
    }), !await new Promise((C) => {
      this.settle = C, this.timer = setTimeout(() => C(!0), 50 + M * y * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], j.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(i) {
    this.adjustLoopTempo?.(i);
  }
  async loop(i, l, u = 75) {
    if (this.stop(), !i.length) return !1;
    const d = this.token, h = this.provide();
    if (await wa(h), d !== this.token) return !1;
    const v = h.createGain();
    v.connect(h.destination), this.master = v;
    const y = Array.from({ length: 12 }, (z, L) => 1 / (L + 1) ** 1.3), j = h.createPeriodicWave?.(new Float32Array([0, ...y.map(() => 0)]), new Float32Array([0, ...y]));
    let _ = 60 / Math.max(40, Math.min(140, u));
    this.adjustLoopTempo = (z) => {
      d === this.token && Number.isFinite(z) && (_ = 60 / Math.max(40, Math.min(140, z)));
    };
    const N = 1.6;
    let w = h.currentTime + 0.05, M = 0;
    const I = [], C = () => {
      if (d === this.token) {
        if (w < h.currentTime - 0.02) {
          const z = Math.ceil((h.currentTime - w) / _);
          w += z * _, M = (M + z) % i.length, I.length = 0;
        }
        for (; w < h.currentTime + N; ) {
          const z = i[M], L = M, b = w, W = h.createOscillator(), J = h.createGain();
          j ? W.setPeriodicWave(j) : W.type = "triangle", W.frequency.value = ka(z), J.gain.setValueAtTime(0, b), J.gain.linearRampToValueAtTime(0.22, b + 0.012), J.gain.exponentialRampToValueAtTime(1e-3, b + _ * 0.975), W.connect(J), J.connect(v), W.start(b), W.stop(b + _ * 0.985), I.push({ at: b, index: L }), w += _, M = (M + 1) % i.length;
        }
        for (; I.length && I[0].at <= h.currentTime + 0.01; ) {
          const z = I.shift();
          l?.(z.index);
        }
      }
    };
    return C(), this.loopTick = setInterval(C, 25), new Promise((z) => {
      this.settle = z;
    });
  }
}
const zh = /* @__PURE__ */ new Set([12, 19, 24, 28, 31, 36]), Fh = 0.25;
class jc {
  constructor(i) {
    this.opts = i;
  }
  opts;
  onset = new Ic();
  armed = !1;
  armedBy = null;
  quietSince = null;
  current = null;
  /** Edellinen hyväksytty sävel ja sen huipputaso. Nollaus (reset/rearm) poistaa ne. */
  previous = null;
  /** Suurin taso nykyisen sävelen alusta (viritys tai uuden ehdokkaan alku) lähtien: näppäyksen huippu. */
  notePeak = 0;
  last = null;
  count = 0;
  reason = null;
  setMinRms(i) {
    this.opts = { ...this.opts, minRms: i };
  }
  get minRms() {
    return this.opts.minRms;
  }
  /**
   * Uusi kysymys tai jatko tauolta: soimaan jäänyt ääni ei saa vastata. Myös sävelvaihdosta
   * virittyminen estetään, kunnes seuraava näppäily on hyväksytty alukkeen tai hiljaisuuden kautta
   * (esim. mallisoiton kaiutinhäntä on eri sävel kuin pelaajan edellinen).
   */
  rearm() {
    this.armed = !1, this.armedBy = null, this.quietSince = null, this.current = null, this.previous = null;
  }
  reset() {
    this.rearm(), this.onset.reset(), this.reason = null;
  }
  state() {
    return {
      armed: this.armed,
      armedBy: this.armedBy,
      reason: this.reason,
      last: this.last,
      count: this.count,
      candidate: this.current ? { midi: this.current.midi, heldMs: Math.max(0, this.current.seen - this.current.since) } : null
    };
  }
  feed(i, l) {
    const { minRms: u, stabilityMs: d, releaseMs: h = 120, gapMs: v = 80 } = this.opts, y = i.rms < u, j = this.onset.feed(i.rms, l, u);
    if (y ? (this.quietSince ??= l, l - this.quietSince >= h && this.arm("quiet")) : (this.quietSince = null, j && this.arm("onset")), this.notePeak = Math.max(this.notePeak, i.rms), i.status !== "pitch" || i.midi === void 0)
      return this.current && l - this.current.seen > v && (this.current = null), this.reason = i.status === "pitch" ? "unclear" : i.status, null;
    const _ = i.midi;
    let N = this.armedBy;
    if (!this.armed) {
      const I = this.previous;
      if (!I || _ === I.midi)
        return this.current = null, this.reason = "waiting-new-pluck", null;
      if (zh.has(Math.abs(_ - I.midi)))
        return this.current = null, this.reason = "harmonic", null;
      if (i.rms < I.peak * Fh)
        return this.current = null, this.reason = "too-quiet-for-change", null;
      N = "pitch-change";
    }
    (!this.current || this.current.midi !== _) && (this.current = { midi: _, since: l, seen: l, armedBy: N }, N === "pitch-change" && (this.notePeak = i.rms)), this.current.seen = l;
    const w = l - this.current.since;
    if (w < d)
      return this.reason = "stabilizing", null;
    const M = this.current.armedBy;
    return this.armed = !1, this.armedBy = null, this.current = null, this.previous = { midi: _, peak: this.notePeak }, this.last = { midi: _, at: l, armedBy: M }, this.count++, this.reason = null, { midi: _, frequency: i.frequency ?? 0, cents: i.cents ?? 0, clarity: i.clarity ?? 0, timestamp: l, heldMs: w, armedBy: M };
  }
  arm(i) {
    this.armed = !0, this.armedBy = i, this.current = null, this.notePeak = 0;
  }
}
const Kn = { minRms: 0.01, minClarity: 0.94, stabilityMs: 240, centsTolerance: 35 };
function Oh(o, i, l) {
  return (u) => {
    const d = i.feed(u, l());
    o.onFrame(u, i.state()), d && o.onStable(d);
  };
}
class Dc {
  mic = new Ah();
  player = new Sc();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  strings = new Sc();
  minRms = Kn.minRms;
  detector = new jc({ minRms: Kn.minRms, stabilityMs: Kn.stabilityMs });
  async openMic(i, l) {
    this.detector = new jc({ minRms: this.minRms, stabilityMs: Kn.stabilityMs });
    const u = Oh(i, this.detector, () => performance.now());
    return this.mic.start(l, { ...Kn, minRms: this.minRms, onFrame: u }, i.onEnded);
  }
  async listDevices() {
    return (await gh()).filter((l) => l.deviceId !== "default" && l.deviceId !== "communications").map((l, u) => ({ id: l.deviceId, label: l.label || `Äänitulo ${u + 1}` }));
  }
  setMinRms(i) {
    this.minRms = i, this.mic.setOptions({ minRms: i }), this.detector.setMinRms(i);
  }
  pauseAnalysis() {
    this.mic.pause(), this.detector.reset();
  }
  resumeAnalysis() {
    this.mic.resume(), this.detector.reset();
  }
  rearm() {
    this.mic.rearm(), this.detector.rearm();
  }
  closeMic() {
    this.mic.stop(), this.detector.reset();
  }
  playModel(i, l) {
    return this.player.play(i, l);
  }
  stopModel() {
    this.player.stop(), this.strings.stop();
  }
  stopReference() {
    this.player.stop();
  }
  // Uusi painallus katkaisee edellisen sävelen: sama sävel kahdesti kuuluu kahtena näppäyksenä.
  pluck(i) {
    this.strings.play([i]).catch(() => {
    });
  }
}
const ke = (o) => dh(o, !1, !0), Dh = [64, 59, 55, 50, 45, 40], $c = [0, 1, 2, 3, 4, 5], $h = 0, Bh = 5, kr = {
  guided: { autoplay: !0, showNotes: !0, memoryHints: !0, label: "Opastettu" },
  memory: { autoplay: !0, showNotes: !1, memoryHints: !0, label: "Muistista" },
  challenge: { autoplay: !0, showNotes: !1, memoryHints: !1, label: "Haaste" }
}, Hn = (o, i, l, u) => ({
  id: o,
  title: i,
  tip: u,
  spots: l.map(([d, h]) => ({ string: d, fret: h })),
  midi: l.map(([d, h]) => Dh[d] + h)
}), Wn = (o, i) => i.map((l) => [o, l]), ui = 1, js = 2, Ms = 59, ci = Hn("opastus", "Opastus: kaksi säveltä", Wn(ui, [0, 1]), "Vapaa B-kieli ja sitten 1. nauha."), Re = [
  { number: 1, name: "Kotitreeni 1", title: "B-kieli", strings: [ui], instruction: "Soita riffi B-kieleltä.", guidance: "guided", riffs: [
    // Sävelet B3, C4 ja D4: vapaa kieli, 1. ja 3. nauha.
    Hn("b-kaari", "Ensimmäinen kaiku", Wn(ui, [0, 1, 3, 1]), "Vapaa kieli, 1., 3. ja takaisin 1. nauhaan."),
    Hn("b-vaihto", "Edestakaisin", Wn(ui, [1, 0, 1, 3]), "1. nauha, vapaa kieli, 1. ja 3. nauha."),
    Hn("b-takaisin", "Kaari takaisin", Wn(ui, [0, 3, 1, 0]), "Vapaa kieli, 3. ja 1. nauha ja taas vapaa kieli.")
  ] },
  { number: 2, name: "Kotitreeni 2", title: "G-kieli", strings: [js], instruction: "Soita riffi G-kieleltä.", guidance: "guided", riffs: [
    // Sävelet G3, A3 ja B3: vapaa kieli, 2. ja 4. nauha. Vaihtelevampi: toisto ja hyppy.
    Hn("g-nousu", "G-kielen kaari", Wn(js, [0, 2, 4, 2]), "Vapaa kieli, 2., 4. ja takaisin 2. nauhaan."),
    Hn("g-toisto", "Kaksi samaa", Wn(js, [2, 2, 0, 4]), "Kaksi erillistä näppäystä 2. nauhalla, sitten vapaa kieli ja 4. nauha. Vaimenna kieli hetkeksi samojen sävelten välissä."),
    Hn("g-hyppy", "Hyppy alas", Wn(js, [4, 0, 2, 0]), "4. nauha, vapaa kieli, 2. nauha ja taas vapaa kieli.")
  ] }
], Ut = Re.flatMap((o) => o.riffs), Bc = (o) => Re.find((i) => i.riffs.some((l) => l.id === o));
function Vc(o) {
  const i = Bc(o), l = i?.riffs.find((u) => u.id === o);
  return i && l ? { level: i, riff: l, number: i.riffs.indexOf(l) + 1 } : void 0;
}
const Ma = (o) => `${Ts[o.string]}-kieli, ${o.fret === 0 ? "vapaa kieli" : `${o.fret}. nauha`}`;
class ja {
  constructor(i, l, u) {
    if (this.round = l, this.input = u, !i.length || i.some((d) => !Number.isInteger(d))) throw new Error("Säveljonossa pitää olla vähintään yksi kokonaislukuinen MIDI-sävel.");
    this.expected = [...i], this.slots = this.expected.map(() => "pending");
  }
  round;
  input;
  position = 0;
  hint = !1;
  wrongs = 0;
  octaves = 0;
  slots;
  expected;
  get index() {
    return this.position;
  }
  get complete() {
    return this.position >= this.expected.length;
  }
  get hintUsed() {
    return this.hint;
  }
  /** Väärät sävelet tällä yrityksellä (myös väärät oktaavit). */
  get wrongCount() {
    return this.wrongs;
  }
  /** Niistä väärässä oktaavissa soitetut. */
  get octaveCount() {
    return this.octaves;
  }
  /** Seuraavaksi odotettu MIDI-korkeus, tai null kun jono on valmis. */
  get next() {
    return this.complete ? null : this.expected[this.position];
  }
  /** Etenemispallukoiden tilat (kopio). */
  get marks() {
    return [...this.slots];
  }
  /** Valmis ja jokainen kohta vihreä. */
  get flawless() {
    return this.complete && this.slots.every((i) => i === "green");
  }
  useHint() {
    this.hint = !0;
  }
  feed(i) {
    if (i.round !== this.round) return { type: "ignored", reason: "stale-round" };
    if (i.input !== this.input) return { type: "ignored", reason: "wrong-input" };
    if (this.complete) return { type: "ignored", reason: "complete" };
    const l = this.position, u = this.expected[l], d = i.midi;
    if (d === u) {
      const v = this.slots[l] === "red" ? "yellow" : "green";
      return this.slots[l] = v, this.position++, { type: "accepted", index: l, midi: d, complete: this.complete, mark: v };
    }
    const h = ((d - u) % 12 + 12) % 12 === 0;
    return this.wrongs++, h && this.octaves++, this.slots[l] = "red", { type: "wrong", index: l, expected: u, played: d, octave: h };
  }
}
const Vh = 3;
class Uh {
  constructor(i, l) {
    this.input = l, this.expected = [...i], this.known = this.expected.map(() => !1);
  }
  input;
  failed = 0;
  known;
  current = null;
  expected;
  get failedAttempts() {
    return this.failed;
  }
  get memoryActive() {
    return this.failed >= Vh;
  }
  /** Paikkakohtaiset muistivihjeet: MIDI-korkeus näytettäväksi tai null. Tyhjä ennen kolmatta epäonnistumista. */
  get memory() {
    return this.expected.map((i, l) => this.memoryActive && this.known[l] ? i : null);
  }
  get attempt() {
    return this.current;
  }
  /** Uusi yritys: edellisen yrityksen vihreät paikat muistetaan (myös kesken jääneestä). */
  start(i) {
    return this.absorb(), this.current = new ja(this.expected, i, this.input), this.current;
  }
  /** Loppuun soitettu yritys: palauttaa läpäisyn. Epäonnistunut kasvattaa laskuria kerran. */
  finish() {
    const i = this.current;
    return i?.complete ? (this.absorb(), this.current = null, i.flawless || this.failed++, i.flawless) : !1;
  }
  absorb() {
    this.current?.marks.forEach((i, l) => {
      i === "green" && (this.known[l] = !0);
    });
  }
}
class Hh {
  constructor(i = 250, l = 150, u = 1500) {
    this.minMs = i, this.quietMs = l, this.maxMs = u;
  }
  minMs;
  quietMs;
  maxMs;
  startedAt = null;
  quietSince = null;
  start(i) {
    this.startedAt = i, this.quietSince = null;
  }
  get active() {
    return this.startedAt !== null;
  }
  /** Palauttaa 'ready', kun kuuntelun saa aloittaa, ja syyn: hiljaisuus tai aikaraja. */
  feed(i, l) {
    if (this.startedAt === null) return "settling";
    i ? this.quietSince ??= l : this.quietSince = null;
    const u = l - this.startedAt;
    return u >= this.minMs && this.quietSince !== null && l - this.quietSince >= this.quietMs ? (this.startedAt = null, "ready-quiet") : u >= this.maxMs ? (this.startedAt = null, "ready-timeout") : "settling";
  }
  cancel() {
    this.startedAt = null, this.quietSince = null;
  }
}
const Sa = ["practice", "success", "retry"], Es = (o) => o.midi.map(() => "pending"), ut = "board";
class Wh {
  constructor(i, l, u = () => performance.now()) {
    this.audio = i, this.store = l, this.clock = u;
    const d = this.position();
    this.state = {
      phase: "home",
      ...d,
      guidance: d.level.guidance,
      index: 0,
      memory: [],
      failedAttempts: 0,
      playing: null,
      modelPlaying: !1,
      notesShown: !1,
      hint: !1,
      feedback: null,
      audioError: "",
      achievement: null,
      ...this.progressPatch()
    };
  }
  audio;
  store;
  clock;
  state;
  listeners = /* @__PURE__ */ new Set();
  modelOp = 0;
  round = 0;
  series = null;
  seriesRiff = null;
  takeStart = null;
  /** Mallin kuuntelut pelaajan pyynnöstä edellisen oton jälkeen (kirjataan seuraavan oton tulokseen). */
  listens = 0;
  takeListens = 0;
  /** Tallennettu kohta: opastus, kotitreenin seuraava riffi tai läpäisty kotitreeni. */
  position() {
    const i = this.store.level(ut);
    if (!this.store.data.tutorialDone) return { riff: ci, tutorial: !0, level: Re[0], riffNumber: 1, marks: Es(ci) };
    const l = this.store.currentRiff(ut) ?? i.riffs[i.riffs.length - 1];
    return { riff: l, tutorial: !1, level: i, riffNumber: i.riffs.indexOf(l) + 1, marks: Es(l) };
  }
  progressPatch() {
    return { completedLevels: this.store.completedLevels(ut), unlockedLevels: this.store.unlockedLevels(ut), passedInRun: [...this.store.run(ut).passed] };
  }
  // ---- tilaus (React: useSyncExternalStore) ----
  subscribe = (i) => (this.listeners.add(i), () => {
    this.listeners.delete(i);
  });
  getState = () => this.state;
  set(i) {
    this.state = { ...this.state, ...i }, this.listeners.forEach((l) => l());
  }
  /** Yhden riffin saavutukset virtuaalikitaralla. */
  record(i) {
    return Uc(this.store, i);
  }
  // ---- aloitus ja kotitreenit ----
  /** Pelaa: opastus, kesken oleva kotitreeni tai sen onnittelunäkymä. Malli soi heti. */
  play() {
    this.beginRiff();
  }
  /** Pelin aloitusnäkymä: kotitreenit ja eteneminen. Kaikki pysähtyy; edistyminen on jo tallennettu. */
  home() {
    this.silence(), this.series = null;
    const i = this.position();
    this.set({
      phase: "home",
      ...i,
      guidance: i.level.guidance,
      feedback: null,
      audioError: "",
      achievement: null,
      index: 0,
      hint: !1,
      notesShown: !1,
      memory: [],
      failedAttempts: 0,
      ...this.progressPatch()
    });
  }
  /**
   * Valitse kotitreeni: läpäisty, nykyinen tai seuraava avattu. Nykyinen jatkuu siitä, mihin jäätiin;
   * muu kotitreeni (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt kotitreenit säilyvät aina.
   */
  chooseLevel(i, l = !1) {
    !["home", "level-complete"].includes(this.state.phase) || !this.store.unlockedLevels(ut).includes(i) || ((l || i !== this.store.run(ut).level) && this.store.startLevel(ut, i), this.store.finishTutorial(), this.beginRiff());
  }
  // ---- riffi: harjoittelu ----
  /** Kaikki ääni pois (riffin vaihto, valikko, sivulta poistuminen). Myöhässä palaava malli ohitetaan. */
  silence() {
    ++this.modelOp, this.audio.stopModel(), (this.state.modelPlaying || this.state.playing !== null) && this.set({ modelPlaying: !1, playing: null });
  }
  /** Avaa tallennetun kohdan riffin harjoitteluun ja soittaa mallin heti (opastustason mukaan). */
  beginRiff() {
    this.silence();
    const i = this.position();
    if (!i.tutorial && this.store.currentRiff(ut) === null) {
      this.showLevelComplete();
      return;
    }
    const l = i.tutorial ? ci : i.riff;
    (this.seriesRiff !== l.id || !this.series) && this.newSeries(l), this.listens = 0;
    const u = i.level.guidance;
    this.set({
      ...i,
      riff: l,
      guidance: u,
      riffNumber: i.tutorial ? 1 : i.level.riffs.indexOf(l) + 1,
      index: 0,
      marks: Es(l),
      memory: this.memory(u, l),
      failedAttempts: this.series.failedAttempts,
      hint: !1,
      notesShown: kr[u].showNotes,
      feedback: null,
      audioError: "",
      achievement: null,
      ...this.progressPatch()
    }), this.enterPractice(kr[u].autoplay);
  }
  newSeries(i) {
    this.series = new Uh(i.midi, ut), this.seriesRiff = i.id;
  }
  /** Muistivihjeet vain, jos opastustaso sallii automaattiset muistivihjeet. */
  memory(i = this.state.guidance, l = this.state.riff) {
    return kr[i].memoryHints && this.series ? this.series.memory : l.midi.map(() => null);
  }
  enterPractice(i) {
    this.set({ phase: "practice", hint: !1 }), i && this.playModel(!0);
  }
  /**
   * Harjoittele vielä / Harjoittele lisää: takaisin vapaaseen harjoitteluun.
   * Kesken olevaa ottoa ei kirjata (ei tulosta, ei epäonnistunutta yritystä). Tuloksen jälkeen malli
   * soi heti uudelleen; kesken oton palatessa ei, koska pelaaja haluaa yleensä kokeilla säveliä.
   */
  practiceMore() {
    const i = this.state.phase;
    ["take", "success", "retry"].includes(i) && (this.set({ index: 0, marks: Es(this.state.riff), feedback: null, achievement: null, notesShown: kr[this.state.guidance].showNotes }), this.enterPractice(i !== "take"));
  }
  /** Näytä / piilota harjoittelun sävelet ja otelautapaikat. Ei vaikuta tähtiin. */
  toggleNotes() {
    this.state.phase === "practice" && this.set({ notesShown: !this.state.notesShown });
  }
  // ---- mallisoitto ----
  /**
   * Kuuntele riffi / Pysäytä (sama painike) harjoittelussa ja tuloksen jälkeen. Ei koskaan aloita ottoa.
   * Kesken arvioitavan oton mallia ei soiteta: otto soitetaan muistista.
   */
  listen() {
    if (this.state.modelPlaying) {
      this.stopListening();
      return;
    }
    Sa.includes(this.state.phase) && this.playModel(!1);
  }
  stopListening() {
    this.state.modelPlaying && (++this.modelOp, this.audio.stopReference(), this.set({ modelPlaying: !1, playing: null }));
  }
  async playModel(i) {
    const l = ++this.modelOp;
    !i && this.state.phase === "practice" && this.listens++, this.audio.stopReference(), this.set({ modelPlaying: !0, playing: null, audioError: "" });
    let u;
    try {
      u = await this.audio.playModel(this.state.riff.midi, (d) => {
        l === this.modelOp && this.set({ playing: d });
      });
    } catch (d) {
      if (l !== this.modelOp) return;
      this.set({ modelPlaying: !1, playing: null, audioError: Oc(d) + (i ? " Selain ei ehkä salli automaattista toistoa: paina Kuuntele riffi." : "") + " Voit harjoitella myös sävelvihjeiden avulla." });
      return;
    }
    l !== this.modelOp || !u || this.set({ playing: null, modelPlaying: !1 });
  }
  // ---- arvioitava otto ----
  /**
   * Nyt riffataan! Pysäyttää mallin, piilottaa vastaukset, aloittaa uuden arvioitavan oton ensimmäisestä
   * sävelestä. Malli ei soi; pelaaja aloittaa itse. Harjoittelun painallukset eivät koskaan kuulu ottoon.
   */
  startTake() {
    if (!Sa.includes(this.state.phase)) return;
    this.state.modelPlaying && (++this.modelOp, this.audio.stopReference()), this.series || this.newSeries(this.state.riff);
    const i = this.series.start(++this.round);
    this.takeListens = this.listens, this.listens = 0, this.takeStart = this.clock(), this.set({
      phase: "take",
      modelPlaying: !1,
      playing: null,
      notesShown: !1,
      hint: !1,
      feedback: null,
      achievement: null,
      audioError: "",
      index: 0,
      marks: i.marks,
      memory: this.memory(),
      failedAttempts: this.series.failedAttempts
    });
  }
  /** Yritä uudelleen tuloksen jälkeen: uusi otto heti, ilman mallia. */
  retry() {
    (this.state.phase === "retry" || this.state.phase === "success" && !this.state.tutorial) && this.startTake();
  }
  get checker() {
    return this.series?.attempt ?? null;
  }
  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vain arvioitavassa otossa painallus tarkistetaan;
   * harjoittelussa ja tuloksen jälkeen se soi (myös mallin aikana) eikä muuta mitään.
   */
  tap(i) {
    const l = this.state.phase;
    return l !== "take" && !Sa.includes(l) ? null : (this.audio.pluck(i), l === "take" ? this.answer(i) : "free");
  }
  answer(i) {
    const l = this.checker;
    if (!l) return "free";
    const u = l.feed({ midi: i, round: this.round, input: ut }), d = l.expected.length;
    return u.type === "accepted" ? (this.set({ index: u.index + 1, marks: l.marks, feedback: { tone: "good", text: u.mark === "yellow" ? `${ke(i)} löytyi (${u.index + 1}/${d}). Kohta korjattiin, joten pallukka on keltainen.` : `${ke(i)} oikein (${u.index + 1}/${d}).` } }), u.complete && this.finish(l), "right") : u.type === "wrong" ? (this.set({ marks: l.marks, feedback: { tone: "bad", text: "Väärä sävel. Kokeile uudelleen." } }), "wrong") : "free";
  }
  /** Otto soitettu loppuun. Kirjataan kerran. */
  finish(i) {
    const l = this.state.riff, u = this.series.finish(), d = this.series.failedAttempts, h = this.store.record({
      riff: l.id,
      input: ut,
      hint: i.hintUsed,
      passed: u,
      wrong: i.wrongCount,
      octave: i.octaveCount,
      replays: this.takeListens,
      ms: Math.max(0, Math.round(this.clock() - (this.takeStart ?? this.clock()))),
      at: Date.now()
    });
    if (this.set({ ...this.progressPatch(), failedAttempts: d }), l.id === ci.id) {
      u && (this.series = null), this.set({ phase: u ? "success" : "retry", feedback: { tone: u ? "good" : "info", text: u ? `Hienoa! Opastus on tehty. Seuraavaksi ${Re[0].name}: kolme riffiä ${Re[0].title.toLowerCase().replace("kieli", "kielellä")}.` : "Soitit opastuksen loppuun. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä – yritä uudelleen tai harjoittele lisää." } });
      return;
    }
    const v = { flawless: u, wrong: i.wrongCount, firstPass: h.firstPass, firstStar: h.firstStar, newBest: h.newBest };
    if (!u) {
      const j = kr[this.state.guidance].memoryHints && this.series.memoryActive;
      this.set({ phase: "retry", achievement: v, feedback: { tone: "info", text: "Soitit riffin loppuun! Kokeile vielä ilman virheitä – suoraan uudella otolla tai harjoittelemalla ensin lisää." + (h.newBest ? ` Uusi ennätys: ${Qh(i.wrongCount)}.` : "") + (j ? " Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät seuraavassa otossa." : "") } });
      return;
    }
    this.newSeries(l);
    const y = this.record(l.id);
    this.set({ phase: "success", achievement: v, feedback: { tone: "good", text: i.hintUsed ? `Virheetön, vihjeen kanssa! Riffi läpäisty.${y.star ? "" : " Soita uudelleen ilman otossa pyydettyä vihjettä, niin saat tähden."}` : `Virheetön! Kaikki pallukat vihreinä – riffi läpäisty.${h.firstStar ? " Sait tähden." : ""}` } });
  }
  showLevelComplete() {
    const i = this.store.level(ut);
    this.set({ phase: "level-complete", level: i, guidance: i.guidance, ...this.progressPatch(), feedback: null, hint: !1, achievement: null, audioError: "" });
  }
  // ---- sivutoiminnot ----
  /** Arvioitavan oton Vihje: sävelet ja paikat näkyviin. Kirjataan tulokseen (ei tähteä). */
  toggleHint() {
    if (this.state.phase !== "take") return;
    const i = !this.state.hint;
    i && this.checker?.useHint(), this.set({ hint: i });
  }
  /** Välilehti taustalle: malli pysähtyy; harjoittelu tai otto säilyy. */
  hidden() {
    this.stopListening();
  }
  /** Seuraava riffi (läpäisyn jälkeen); kotitreenin kolmannen jälkeen onnittelunäkymä. */
  next() {
    this.state.phase === "success" && this.beginRiff();
  }
  /** Onnittelunäkymästä: seuraava kotitreeni. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== "level-complete") return;
    const i = this.state.level.number + 1;
    Re.some((l) => l.number === i) && (this.store.startLevel(ut, i), this.beginRiff());
  }
  /** Onnittelunäkymästä: sama kotitreeni alusta. */
  repeatLevel(i = this.state.level.number) {
    this.state.phase === "level-complete" && (this.store.startLevel(ut, i), this.beginRiff());
  }
  /** Sivulta poistuttaessa: kaikki ääni pysähtyy, myöhässä palaavat tapahtumat ohitetaan. */
  dispose() {
    this.silence();
  }
}
function Uc(o, i) {
  const l = o.data.stats.board[i];
  return { passed: (l?.passed ?? 0) > 0, star: (l?.solo ?? 0) > 0, best: l?.best ?? null, done: l?.done ?? 0 };
}
function Kh(o) {
  const i = Re.flatMap((l) => l.riffs).map((l) => Uc(o, l.id));
  return {
    level: o.run(ut).level,
    completed: o.completedLevels(ut),
    passed: i.filter((l) => l.passed).length,
    stars: i.filter((l) => l.star).length,
    total: i.length,
    started: o.data.tutorialDone || i.some((l) => l.done > 0)
  };
}
const Qh = (o) => o === 1 ? "vain yksi väärä sävel" : `vain ${o} väärää säveltä`, Gh = 4e3, Ec = 12, qh = 1500;
function Yh(o, i) {
  const l = o.left + o.stickyLeft, u = o.right;
  let d = 0;
  if (i.left < l ? d = i.left - l - Ec : i.right > u && (d = i.right - u + Ec), d === 0) return null;
  const h = Math.max(0, Math.min(o.maxScroll, o.scrollLeft + d));
  return Math.abs(h - o.scrollLeft) < 1 ? null : h;
}
function Xh(o, i) {
  return i.right <= o.left + o.stickyLeft || i.left >= o.right;
}
function bh(o, i, l, { stickySelector: u, enabled: d = !0, playback: h } = {}) {
  const v = de.useRef(0), y = de.useRef(!1), j = de.useRef(""), _ = de.useRef(0), N = de.useRef(h);
  de.useEffect(() => {
    const w = o.current;
    if (!w || !d) return;
    const M = () => {
      v.current = Date.now() + Gh;
    }, I = () => {
      y.current = !0, M();
    }, C = () => {
      y.current && (y.current = !1, M());
    }, z = (L) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(L.key) && M();
    };
    return w.addEventListener("pointerdown", I, { passive: !0 }), w.addEventListener("touchstart", I, { passive: !0 }), w.addEventListener("wheel", M, { passive: !0 }), w.addEventListener("keydown", z), window.addEventListener("pointerup", C, { passive: !0 }), window.addEventListener("pointercancel", C, { passive: !0 }), window.addEventListener("touchend", C, { passive: !0 }), window.addEventListener("touchcancel", C, { passive: !0 }), () => {
      w.removeEventListener("pointerdown", I), w.removeEventListener("touchstart", I), w.removeEventListener("wheel", M), w.removeEventListener("keydown", z), window.removeEventListener("pointerup", C), window.removeEventListener("pointercancel", C), window.removeEventListener("touchend", C), window.removeEventListener("touchcancel", C);
    };
  }, [o, d]), de.useLayoutEffect(() => {
    const w = h !== void 0 && !!h && h !== N.current;
    N.current = h, w && !y.current && (v.current = 0);
  }, [h]), de.useLayoutEffect(() => {
    h === void 0 && j.current === "" && l !== "" && Date.now() - _.current > qh && !y.current && (v.current = 0), j.current !== "" && l === "" && (_.current = Date.now()), j.current = l;
    const w = o.current;
    if (!w || !d || !l || y.current || Date.now() < v.current) return;
    const M = w.querySelector(i);
    if (!M) return;
    const I = w.getBoundingClientRect(), C = M.getBoundingClientRect(), z = u ? w.querySelector(u) : null, L = z && getComputedStyle(z).position === "sticky" ? z.getBoundingClientRect().width : 0, b = {
      left: I.left,
      right: I.left + w.clientWidth,
      scrollLeft: w.scrollLeft,
      maxScroll: w.scrollWidth - w.clientWidth,
      stickyLeft: L
    }, W = Yh(b, C);
    if (W === null) return;
    const te = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Xh(b, C);
    typeof w.scrollTo == "function" ? w.scrollTo({ left: W, behavior: te ? "auto" : "smooth" }) : w.scrollLeft = W;
  }, [o, i, l, u, d, h]);
}
const Jh = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Zh = ["e", "B", "G", "D", "A", "E"];
function ep({ string: o }) {
  return /* @__PURE__ */ c.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ c.jsxs("span", { children: [
      o + 1,
      " · ",
      /* @__PURE__ */ c.jsx("strong", { children: Zh[o] })
    ] }),
    o === 0 ? /* @__PURE__ */ c.jsx("small", { children: "ohuin" }) : o === 5 ? /* @__PURE__ */ c.jsx("small", { children: "paksuin" }) : null
  ] });
}
const tp = (o) => ({ "--string-thickness": 1.25 + o * 0.45 + "px" }), np = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function rp({ min: o, max: i }) {
  return /* @__PURE__ */ c.jsx("thead", { children: /* @__PURE__ */ c.jsxs("tr", { children: [
    /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - o + 1 }, (l, u) => {
      const d = o + u;
      return /* @__PURE__ */ c.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ c.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Jh.has(d) ? /* @__PURE__ */ c.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ip({ area: o, marks: i = [], mutedStrings: l = [], disabled: u = !1, onAnswer: d, caption: h = "Otelauta", follow: v = "hints", playback: y }) {
  const j = { "--cols": o.max - o.min + 1 }, { strings: _, min: N, max: w } = o, [M, I] = de.useState({ string: Math.min(..._), fret: N }), C = de.useRef(null), z = new Map(i.map((q) => [oi(q), q])), L = i.map((q) => `${oi(q)}${q.kind}`).join(",");
  de.useEffect(() => {
    if (v !== "hints") return;
    const q = C.current, V = q?.querySelector(".target, .anchor");
    q && V && (q.scrollLeft += V.getBoundingClientRect().left - q.getBoundingClientRect().left - q.clientWidth / 2 + V.clientWidth / 2);
  }, [L, v]), de.useEffect(() => {
    v === "playing" && C.current && (C.current.scrollLeft = 0);
  }, [v, N, w]);
  const b = i.find((q) => q.kind === "playing");
  bh(C, ".playing", b ? oi(b) : "", { stickySelector: "tbody th", enabled: v === "playing", playback: y });
  const [W, J] = de.useState({ left: !1, right: !1 });
  de.useEffect(() => {
    const q = C.current;
    if (!q) return;
    const V = () => {
      const pe = q.scrollLeft > 2, Pe = q.scrollLeft + q.clientWidth < q.scrollWidth - 2;
      J((je) => je.left === pe && je.right === Pe ? je : { left: pe, right: Pe });
    };
    V(), q.addEventListener("scroll", V, { passive: !0 });
    const re = typeof ResizeObserver > "u" ? null : new ResizeObserver(V);
    return re?.observe(q), () => {
      q.removeEventListener("scroll", V), re?.disconnect();
    };
  }, [L, N, w]);
  const te = _.includes(M.string) && M.fret >= N && M.fret <= w ? M : { string: Math.min(..._), fret: N };
  return /* @__PURE__ */ c.jsxs("div", { className: "fret-wrap" + (W.left ? " more-left" : "") + (W.right ? " more-right" : ""), children: [
    (W.left || W.right) && /* @__PURE__ */ c.jsxs("p", { className: "fret-scroll-hint", children: [
      W.left && /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      W.left && W.right ? "molemmilla puolilla" : W.right ? "oikealla" : "vasemmalla",
      W.right && /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ c.jsx("div", { ref: C, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ c.jsxs("table", { className: "practice-board", style: j, children: [
      /* @__PURE__ */ c.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ c.jsx(rp, { min: N, max: w }),
      /* @__PURE__ */ c.jsx("tbody", { children: Ac.OPEN_PITCHES.map((q, V) => /* @__PURE__ */ c.jsxs("tr", { className: _.includes(V) ? "" : "unused", style: tp(V), children: [
        /* @__PURE__ */ c.jsxs("th", { scope: "row", "aria-label": `${V + 1}. kieli: ${Ts[V]}${l.includes(V) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ c.jsx(ep, { string: V }),
          l.includes(V) && /* @__PURE__ */ c.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        mh([V], N, w).map((re) => {
          const pe = z.get(oi(re)), Pe = `${Ts[V]}-kieli, ${hh(re.fret)}`;
          return /* @__PURE__ */ c.jsx("td", { className: `${re.fret === 0 ? "open-fret " : ""}${pe ? pe.kind === "answer" ? "target" : pe.kind : ""}`, children: /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              "data-string": V,
              "data-fret": re.fret,
              tabIndex: te.string === V && te.fret === re.fret ? 0 : -1,
              onFocus: () => I(re),
              onKeyDown: (je) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(je.key)) return;
                je.preventDefault();
                const Qe = [..._].sort((Ge, Ae) => Ge - Ae), Be = Qe.indexOf(V), Le = je.key === "ArrowUp" ? Qe[Math.max(0, Be - 1)] : je.key === "ArrowDown" ? Qe[Math.min(Qe.length - 1, Be + 1)] : V, Ve = je.key === "Home" ? N : je.key === "End" ? w : Math.max(N, Math.min(w, re.fret + (je.key === "ArrowRight" ? 1 : je.key === "ArrowLeft" ? -1 : 0)));
                je.currentTarget.closest("table")?.querySelector(`button[data-string="${Le}"][data-fret="${Ve}"]`)?.focus();
              },
              disabled: u || !_.includes(V),
              "aria-label": Pe + (pe ? `, ${np[pe.kind]}${pe.label ? " " + pe.label : ""}` : ""),
              onClick: () => d?.(re),
              children: pe ? /* @__PURE__ */ c.jsx("span", { className: "dot", children: pe.label || "●" }) : null
            }
          ) }, re.fret);
        })
      ] }, V)) })
    ] }) })
  ] });
}
const wr = {
  harjoitus: {
    title: "Riffiharjoitus – oikea kitara",
    tag: "Oikea kitara · Harjoittele",
    card: "Oikea kitara · Harjoittele",
    description: "Kuuntele riffejä, opettele sävelet ja harjoittele soittamista omalla kitarallasi.",
    action: "Avaa harjoitus"
  },
  peli: {
    title: "Riffikaiku-peli – virtuaalikitara",
    tag: "Virtuaalikitara · Pelaa",
    card: "Virtuaalikitara · Pelaa",
    description: "Kuuntele riffi ja toista se virtuaalikitaralla. Läpäise haasteita ja etene uusiin riffeihin.",
    action: "Avaa peli"
  }
}, sp = "kitaraharjoittelija.html?polku=otelauta";
function lp(o) {
  const i = new URLSearchParams(o).get("tila");
  return i === "harjoitus" || i === "peli" ? i : null;
}
const Hc = (o) => o ? `?tila=${o}` : "./" + (typeof location > "u" ? "riffikaiku.html" : location.pathname.split("/").pop() || "riffikaiku.html"), ap = (o) => `${o ? wr[o].title + " · " : ""}Riffikaiku (beta) – Musiikin kartta`, op = { strings: $c, min: $h, max: Bh, fixed: "" };
function pi({ mode: o }) {
  return /* @__PURE__ */ c.jsxs("nav", { className: "riff-crumbs", "aria-label": "Sijainti", children: [
    /* @__PURE__ */ c.jsxs("a", { className: "riff-back", href: sp, children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "←" }),
      " Takaisin harjoitusvalikkoon"
    ] }),
    o && /* @__PURE__ */ c.jsxs("ol", { children: [
      /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsx("a", { href: Hc(null), children: "Riffikaiku" }) }),
      /* @__PURE__ */ c.jsx("li", { "aria-current": "page", children: wr[o].tag })
    ] })
  ] });
}
function jr({ mode: o }) {
  return /* @__PURE__ */ c.jsx("p", { className: `riff-mode-tag ${o}`, "data-testid": "mode-tag", children: wr[o].title });
}
function Wc({ slots: o, label: i }) {
  return /* @__PURE__ */ c.jsx("ol", { className: "riff-slots", "aria-label": i, "data-testid": "slots", children: o.map((l, u) => /* @__PURE__ */ c.jsxs("li", { className: l.cls, "data-mark": l.mark, "aria-label": l.label, children: [
    /* @__PURE__ */ c.jsx("span", { className: "slot-note", "aria-hidden": "true", children: l.content }),
    l.symbol && /* @__PURE__ */ c.jsx("span", { className: "slot-symbol", "aria-hidden": "true", children: l.symbol })
  ] }, u)) });
}
function Ea(o, i, l = () => !0, u = (d) => String(d + 1)) {
  const d = /* @__PURE__ */ new Map();
  return o.spots.forEach((h, v) => {
    if (!l(v)) return;
    const y = { ...h, midi: o.midi[v] }, j = oi(y), _ = d.get(j);
    d.set(j, { ...y, kind: i === v ? "playing" : _?.kind ?? "answer", label: _ ? `${_.label}·${u(v)}` : u(v) });
  }), [...d.values()];
}
const up = ["ohuin kieli", "toiseksi ohuin", "kolmanneksi ohuin", "kolmanneksi paksuin", "toiseksi paksuin", "paksuin kieli"];
function Kc({ focus: o, marks: i, disabled: l, onAnswer: u, caption: d }) {
  const h = o.length < $c.length;
  return /* @__PURE__ */ c.jsxs("div", { className: `riff-board ${h ? "has-focus" : ""} ${o.map((v) => `focus-s${v}`).join(" ")}`, "data-testid": "board", children: [
    h && /* @__PURE__ */ c.jsxs("p", { className: "riff-focus-legend", "data-testid": "focus-legend", children: [
      /* @__PURE__ */ c.jsx("span", { className: "swatch", "aria-hidden": "true" }),
      " Harjoituskieli: ",
      o.map((v) => `${Ts[v]}-kieli`).join(" ja "),
      o.length === 1 ? ` (${up[o[0]]})` : ""
    ] }),
    /* @__PURE__ */ c.jsx(ip, { area: op, marks: i, disabled: l, onAnswer: u, caption: d })
  ] });
}
const cp = { pending: "harmaa, ei vielä ratkaistu", red: "punainen, väärä sävel – yritä tätä kohtaa uudelleen", green: "vihreä, oikein heti", yellow: "keltainen, löytyi virheen jälkeen" }, _c = { pending: "", red: "✗", green: "✓", yellow: "↻" }, fp = {
  practice: { title: "Harjoittele", text: "Kuuntele riffi ja etsi sen sävelet otelaudalta omaan tahtiin. Mitään ei vielä arvioida." },
  take: { title: "Sinun vuorosi!", text: "Soita riffi muistista. Painalluksesi tarkistetaan." },
  success: { title: "Riffi läpäisty!", text: "" },
  retry: { title: "Riffi soitettu loppuun", text: "" }
};
function dp(o) {
  return o.riff.midi.map((i, l) => {
    const u = o.modelPlaying && o.playing === l;
    if (o.phase === "practice") {
      const j = o.notesShown;
      return {
        cls: `${j ? "shown" : "pending"}${u ? " model" : ""}`,
        mark: "pending",
        content: u ? "♪" : j ? ke(i) : "",
        label: `${l + 1}. sävel${j ? `: ${ke(i)}` : ""}${u ? ", soi nyt" : ""}`
      };
    }
    const d = o.marks[l] ?? "pending", h = (d === "pending" || d === "red") && l === o.index && o.phase === "take", v = d === "pending" && o.memory[l] != null, y = d === "green" || d === "yellow";
    return {
      cls: `${d}${h ? " current" : ""}${u ? " model" : ""}${v ? " memory" : ""}`,
      mark: d,
      content: y ? ke(i) : u ? "♪" : v ? ke(o.memory[l]) : _c[d] || (h ? "?" : ""),
      symbol: y ? _c[d] : void 0,
      label: `${l + 1}. sävel: ${cp[d]}${v ? `, muistivihje ${ke(o.memory[l])}` : ""}${h ? ", vuorossa" : ""}`
    };
  });
}
function hp({ game: o, s: i }) {
  return i.tutorial ? null : /* @__PURE__ */ c.jsx("ol", { className: "riff-run", "aria-label": `${i.level.name}: läpäisty ${i.passedInRun.length}/${i.level.riffs.length} riffiä`, "data-testid": "run-progress", children: i.level.riffs.map((l, u) => {
    const d = i.passedInRun.includes(l.id), h = o.record(l.id).star, v = l.id === i.riff.id;
    return /* @__PURE__ */ c.jsx(
      "li",
      {
        className: `${d ? "passed" : ""}${v ? " current" : ""}`,
        "aria-label": `Riffi ${u + 1}: ${l.title}${d ? ", läpäisty" : ""}${h ? ", tähti" : ""}${v ? ", nyt" : ""}`,
        children: /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: d ? h ? "★" : "✓" : u + 1 })
      },
      l.id
    );
  }) });
}
function pp({ s: o }) {
  const i = o.achievement;
  return !i || !(i.firstStar || i.newBest || i.flawless && i.firstPass) ? null : /* @__PURE__ */ c.jsxs("p", { className: "riff-achievement", "data-testid": "achievement", children: [
    i.firstStar ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "★ " }),
      "Tähti! Virheetön ilman vihjettä."
    ] }) : i.flawless && i.firstPass ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "✓ " }),
      "Ensimmäinen läpäisy!"
    ] }) : null,
    i.newBest && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      " Uusi ennätys: ",
      i.wrong === 0 ? "ei yhtään väärää säveltä" : i.wrong === 1 ? "vain yksi väärä sävel" : `vain ${i.wrong} väärää säveltä`,
      "."
    ] })
  ] });
}
function mp({ game: o, s: i, titleRef: l, onHome: u }) {
  const [d, h] = de.useState(null), v = de.useRef(), y = de.useRef(null), j = de.useRef(i.phase);
  de.useEffect(() => () => clearTimeout(v.current), []), de.useEffect(() => {
    j.current !== i.phase && y.current?.focus(), j.current = i.phase, h(null);
  }, [i.phase, i.riff.id]);
  function _(te) {
    const q = o.tap(te.midi);
    q && (clearTimeout(v.current), h((V) => ({ p: te, result: q, n: (V?.n ?? 0) + 1 })), v.current = setTimeout(() => h(null), 600));
  }
  const N = i.riff.midi.length, w = fp[i.phase] ?? { title: "", text: "" }, M = i.phase === "practice", I = i.phase === "take", C = i.phase === "success" || i.phase === "retry", z = M && i.notesShown || I && i.hint, L = d ? [{
    ...d.p,
    kind: d.result === "right" ? "answer" : d.result === "wrong" ? "wrong" : "playing",
    label: d.result === "wrong" ? "✗" : ke(d.p.midi)
  }] : [], b = [...z ? Ea(i.riff, i.playing) : [], ...L], W = (te = !1) => /* @__PURE__ */ c.jsx("button", { type: "button", className: te ? "primary" : "", onClick: () => o.listen(), "aria-pressed": i.modelPlaying, "data-testid": "listen", children: i.modelPlaying ? "Pysäytä kuuntelu" : "Kuuntele riffi" }), J = kr[i.guidance];
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": i.phase, "data-mode": "peli", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(pi, { mode: "peli" }),
    /* @__PURE__ */ c.jsxs("div", { className: `riff-panel riff-play stage-${i.phase}`, children: [
      /* @__PURE__ */ c.jsxs("header", { className: "riff-round-heading", children: [
        /* @__PURE__ */ c.jsx(jr, { mode: "peli" }),
        /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: l, tabIndex: -1, "data-testid": "level-heading", children: i.tutorial ? `${Re[0].name} · Opastus` : `${i.level.name} · Riffi ${i.riffNumber}/${i.level.riffs.length}` }),
        /* @__PURE__ */ c.jsx("p", { className: "riff-name", children: i.tutorial ? "Kaksi säveltä" : i.riff.title }),
        /* @__PURE__ */ c.jsx(hp, { game: o, s: i })
      ] }),
      /* @__PURE__ */ c.jsxs("ol", { className: "riff-flow", "aria-label": "Riffin vaiheet", children: [
        /* @__PURE__ */ c.jsx("li", { "aria-current": M ? "step" : void 0, children: "Kuuntele ja harjoittele" }),
        /* @__PURE__ */ c.jsx("li", { "aria-current": I ? "step" : void 0, children: "Soita muistista" }),
        /* @__PURE__ */ c.jsx("li", { "aria-current": C ? "step" : void 0, children: "Tulos" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-turn", children: [
        /* @__PURE__ */ c.jsx("h2", { className: `riff-status ${I ? "turn" : i.phase === "success" ? "good" : ""}`, tabIndex: -1, ref: y, "data-testid": "riff-status", children: w.title }),
        w.text && /* @__PURE__ */ c.jsx("p", { className: "riff-stage-text", "data-testid": "stage-text", children: w.text }),
        !C && /* @__PURE__ */ c.jsx("p", { className: "riff-instruction", "data-testid": "instruction", children: i.level.instruction })
      ] }),
      /* @__PURE__ */ c.jsx(Wc, { slots: dp(i), label: M ? `Riffissä on ${N} säveltä` : `Ratkaistu ${i.index} / ${N} säveltä` }),
      !M && /* @__PURE__ */ c.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
        "Ratkaistu ",
        i.index,
        "/",
        N,
        I && i.memory.some((te) => te !== null) ? " · muistivihjeet käytössä" : ""
      ] }),
      C && /* @__PURE__ */ c.jsx(pp, { s: i }),
      i.feedback && !M && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${i.feedback.tone}`, role: "status", "data-testid": "feedback", children: i.feedback.text }),
      i.audioError && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "alert", "data-testid": "audio-error", children: i.audioError }),
      M && /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-practice-actions", children: [
        W(),
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": i.notesShown, onClick: () => o.toggleNotes(), "data-testid": "toggle-notes", children: i.notesShown ? "Piilota sävelet" : "Näytä sävelet" })
      ] }),
      z && /* @__PURE__ */ c.jsxs("div", { className: "riff-hint", "data-testid": "hint", children: [
        /* @__PURE__ */ c.jsxs("p", { children: [
          /* @__PURE__ */ c.jsx("strong", { children: "Sävelet:" }),
          " ",
          i.riff.midi.map(ke).join(" – ")
        ] }),
        /* @__PURE__ */ c.jsx("p", { children: i.riff.tip }),
        I && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Otossa pyydetty vihje kirjataan: riffi voi silti mennä läpi, mutta tähteä ei tule." })
      ] }),
      /* @__PURE__ */ c.jsx(
        Kc,
        {
          focus: i.level.strings,
          marks: b,
          disabled: !1,
          onAnswer: _,
          caption: I ? "Virtuaalikitara: soita riffi muistista – painallukset tarkistetaan" : "Virtuaalikitara: kokeile säveliä vapaasti (ei arvioida)"
        }
      ),
      M && /* @__PURE__ */ c.jsxs("div", { className: "riff-go", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary riff-go-button", onClick: () => o.startTake(), "aria-describedby": "riff-go-text", children: "Nyt riffataan!" }),
        /* @__PURE__ */ c.jsx("p", { id: "riff-go-text", className: "riff-help", children: "Nyt soitat riffin muistista. Painalluksesi tarkistetaan." }),
        J.showNotes === !1 && !i.notesShown && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Tällä tasolla sävelet ovat piilossa, kunnes avaat ne. Harjoittelun apu ei vaikuta tähtiin." })
      ] }),
      I && /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-main-actions", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": i.hint, onClick: () => o.toggleHint(), children: i.hint ? "Piilota vihje" : "Vihje" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.practiceMore(), children: "Harjoittele vielä" })
      ] }),
      C && /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-main-actions", children: [
        i.phase === "success" && /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => o.next(), children: i.tutorial ? `Aloita ${Re[0].name}` : "Seuraava riffi" }),
        !(i.phase === "success" && i.tutorial) && /* @__PURE__ */ c.jsx("button", { type: "button", className: i.phase === "retry" ? "primary" : "", onClick: () => o.retry(), children: "Yritä uudelleen" }),
        !(i.phase === "success" && i.tutorial) && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.practiceMore(), children: "Harjoittele lisää" }),
        W()
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-end-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: u, children: "Lopeta peli" }) })
    ] })
  ] });
}
const vp = ["practice", "take", "success", "retry"], Nc = (o) => `${Re[o - 1]?.name ?? `Kotitreeni ${o}`} – ${Re[o - 1]?.title ?? ""}`;
function yp({ game: o, s: i, titleRef: l }) {
  const u = Re.flatMap((w) => w.riffs).map((w) => o.record(w.id)), d = u.filter((w) => w.passed).length, h = u.filter((w) => w.star).length, v = Re.find((w) => w.number === i.level.number) ?? Re[0], y = !i.tutorial && i.passedInRun.length >= v.riffs.length, j = y ? Re.find((w) => w.number === v.number + 1 && i.unlockedLevels.includes(w.number)) : void 0, _ = i.tutorial ? "Aloita peli: lyhyt opastus" : j ? `Aloita: ${j.name} – ${j.title}` : y ? "Kaikki kotitreenit suoritettu – valitse uusinta" : `${d > 0 || i.passedInRun.length > 0 ? "Jatka" : "Aloita"}: ${v.name} · Riffi ${i.passedInRun.length + 1}/${v.riffs.length}`, N = () => j ? o.chooseLevel(j.number) : o.play();
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": "home", "data-mode": "peli", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(pi, { mode: "peli" }),
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "peli" }),
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: l, tabIndex: -1, children: "Kuuntele ja toista" }),
      /* @__PURE__ */ c.jsx("p", { children: "Kuuntele riffi, harjoittele sen sävelet otelaudalla ja soita se sitten muistista. Riffi läpäistään, kun kaikki pallukat ovat vihreitä. Ei aikarajaa eikä elämiä – harjoitteluun pääsee aina takaisin." })
    ] }),
    /* @__PURE__ */ c.jsxs("dl", { className: "riff-score", "data-testid": "game-score", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Läpäistyt riffit" }),
        /* @__PURE__ */ c.jsxs("dd", { children: [
          d,
          "/",
          u.length
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsxs("dt", { children: [
          "Tähdet ",
          /* @__PURE__ */ c.jsx("small", { children: "(ilman vihjettä)" })
        ] }),
        /* @__PURE__ */ c.jsxs("dd", { children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "★ " }),
          h,
          "/",
          u.length
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Kotitreenit" }),
        /* @__PURE__ */ c.jsxs("dd", { children: [
          i.completedLevels.length,
          "/",
          Re.length
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary riff-play-button", onClick: N, children: _ }) }),
    /* @__PURE__ */ c.jsx("h2", { children: "Kotitreenit" }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Jokainen kotitreeni harjoittaa yhtä kieltä kolmella riffillä. Seuraava avautuu, kun edellisen kaikki kolme riffiä on läpäisty." }),
    /* @__PURE__ */ c.jsx("ol", { className: "riff-levels", "data-testid": "levels", children: Re.map((w) => {
      const M = i.completedLevels.includes(w.number), I = i.unlockedLevels.includes(w.number), C = i.level.number === w.number && !i.tutorial && !y;
      return /* @__PURE__ */ c.jsxs("li", { className: M ? "done" : I ? "open" : "locked", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsxs("strong", { children: [
            w.name,
            " – ",
            w.title
          ] }),
          /* @__PURE__ */ c.jsx("span", { children: M ? "suoritettu" : C ? "kesken" : I ? "avattu" : "lukittu – läpäise ensin edellinen kotitreeni" }),
          /* @__PURE__ */ c.jsx("span", { className: "riff-level-riffs", children: w.riffs.map((z) => {
            const L = o.record(z.id);
            return /* @__PURE__ */ c.jsxs("span", { className: L.star ? "star" : L.passed ? "passed" : "", children: [
              /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: L.star ? "★" : L.passed ? "✓" : "○" }),
              " ",
              z.title,
              /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: L.star ? ", läpäisty ilman vihjettä" : L.passed ? ", läpäisty" : ", ei vielä läpäisty" })
            ] }, z.id);
          }) })
        ] }),
        I && /* @__PURE__ */ c.jsx("button", { type: "button", className: C ? "primary" : "", onClick: () => o.chooseLevel(w.number, M && !C), children: C ? "Jatka" : M ? "Pelaa uudelleen" : "Aloita" })
      ] }, w.number);
    }) }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "Muiden kielten kotitreenit tulevat myöhemmin. Haluatko soittaa oikealla kitaralla? ",
      /* @__PURE__ */ c.jsx("a", { href: "?tila=harjoitus", children: "Riffiharjoitus – oikea kitara" }),
      "."
    ] })
  ] });
}
function gp({ game: o }) {
  const i = de.useSyncExternalStore(o.subscribe, o.getState), l = vp.includes(i.phase) ? "play" : i.phase, u = de.useRef(null), d = de.useRef(null), h = de.useRef(l);
  de.useEffect(() => {
    h.current !== l && (l === "level-complete" ? d.current?.focus() : u.current?.focus()), h.current = l;
  }, [l]);
  const v = de.useRef(i.riff.id);
  if (de.useEffect(() => {
    v.current !== i.riff.id && l === "play" && u.current?.focus(), v.current = i.riff.id;
  }, [i.riff.id, l]), de.useEffect(() => {
    const j = () => {
      document.visibilityState === "hidden" && o.hidden();
    }, _ = () => o.dispose();
    return document.addEventListener("visibilitychange", j), window.addEventListener("pagehide", _), () => {
      document.removeEventListener("visibilitychange", j), window.removeEventListener("pagehide", _);
    };
  }, [o]), i.phase === "home") return /* @__PURE__ */ c.jsx(yp, { game: o, s: i, titleRef: u });
  const y = () => o.home();
  if (i.phase === "level-complete") {
    const j = i.level.riffs.filter((_) => o.record(_.id).star).length;
    return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": i.phase, "data-mode": "peli", "aria-labelledby": "riff-cleared-title", children: [
      /* @__PURE__ */ c.jsx(pi, { mode: "peli" }),
      /* @__PURE__ */ c.jsx(jr, { mode: "peli" }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-panel riff-cleared", "data-testid": "level-complete", children: [
        /* @__PURE__ */ c.jsx("p", { className: "riff-cleared-badge", "aria-hidden": "true", children: "★".repeat(j) + "☆".repeat(i.level.riffs.length - j) }),
        /* @__PURE__ */ c.jsx("h2", { id: "riff-cleared-title", tabIndex: -1, ref: d, children: "Onneksi olkoon!" }),
        /* @__PURE__ */ c.jsxs("p", { className: "riff-cleared-big", children: [
          Nc(i.level.number),
          " suoritettu!"
        ] }),
        /* @__PURE__ */ c.jsxs("p", { children: [
          "Läpäisit kaikki kolme riffiä virheettömästi. Tähtiä ",
          j,
          "/",
          i.level.riffs.length,
          j < i.level.riffs.length ? " – tähden saa, kun riffi menee virheettä ilman otossa pyydettyä vihjettä." : " – kaikki ilman vihjettä!"
        ] }),
        i.level.number < Re.length ? /* @__PURE__ */ c.jsxs("p", { children: [
          "Seuraava kotitreeni on auki: ",
          Nc(i.level.number + 1),
          "."
        ] }) : /* @__PURE__ */ c.jsx("p", { children: "Olet suorittanut kaikki nykyiset kotitreenit. Muiden kielten kotitreenit ovat tulossa." }),
        /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
          i.level.number < Re.length && /* @__PURE__ */ c.jsxs("button", { type: "button", className: "primary", onClick: () => o.continueLevel(), children: [
            "Jatka: ",
            Re[i.level.number].name
          ] }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.repeatLevel(), children: "Pelaa uudelleen" }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: y, children: "Pelin valikko" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ c.jsx(mp, { game: o, s: i, titleRef: u, onHome: y });
}
const Qc = 440, _a = (o) => Qc * 2 ** ((o - 69) / 12), Cs = (o, i) => 1200 * Math.log2(o / i), Ns = 5, kp = 100, Rs = [
  { name: "E2", midi: 40, number: 6 },
  { name: "A2", midi: 45, number: 5 },
  { name: "D3", midi: 50, number: 4 },
  { name: "G3", midi: 55, number: 3 },
  { name: "B3", midi: 59, number: 2 },
  { name: "E4", midi: 64, number: 1 }
], xp = (o) => {
  const i = [...o].sort((u, d) => u - d), l = i.length >> 1;
  return i.length % 2 ? i[l] : (i[l - 1] + i[l]) / 2;
}, wp = (o) => Rs.reduce((i, l) => Math.abs(Cs(o, _a(l.midi))) < Math.abs(Cs(o, _a(i.midi))) ? l : i);
class Sp {
  constructor(i = 160, l = 5, u = 25, d = 0.35) {
    this.windowMs = i, this.minSamples = l, this.maxSpreadCents = u, this.smoothing = d;
  }
  windowMs;
  minSamples;
  maxSpreadCents;
  smoothing;
  samples = [];
  smoothed = null;
  target = null;
  lastAt = -1 / 0;
  /** null = automaattinen (lähin vapaa kieli). */
  setTarget(i) {
    this.target = i === null ? null : Rs.find((l) => l.midi === i) ?? null, this.smoothed = null;
  }
  get selected() {
    return this.target;
  }
  reset() {
    this.samples = [], this.smoothed = null;
  }
  feed(i, l) {
    const u = (i.status === "pitch" || i.status === "off-pitch") && i.frequency !== void 0 && i.frequency > 0;
    u && (this.samples.push({ at: l, frequency: i.frequency }), this.lastAt = l), this.samples = this.samples.filter((I) => l - I.at <= this.windowMs), !u && l - this.lastAt > this.windowMs && (this.smoothed = null);
    const d = this.target ?? Rs[0];
    if (!this.samples.length)
      return { status: i.status === "silent" ? "no-signal" : "unreliable", target: d, auto: !this.target };
    const h = xp(this.samples.map((I) => I.frequency)), v = Cs(Math.max(...this.samples.map((I) => I.frequency)), Math.min(...this.samples.map((I) => I.frequency))), y = this.samples[this.samples.length - 1].at - this.samples[0].at, j = this.target ?? wp(h), _ = Math.round(69 + 12 * Math.log2(h / Qc));
    if (this.samples.length < this.minSamples || y < 100 || v > this.maxSpreadCents)
      return { status: "unreliable", target: j, auto: !this.target, frequency: h, heardMidi: _ };
    const N = Cs(h, _a(j.midi));
    if (Math.abs(N) > kp)
      return this.smoothed = null, { status: "far", target: j, auto: !this.target, frequency: h, cents: N, heardMidi: _ };
    this.smoothed = this.smoothed === null ? N : this.smoothed + this.smoothing * (N - this.smoothed);
    const w = this.smoothed;
    return { status: Math.abs(w) <= Ns ? "in-tune" : w < 0 ? "flat" : "sharp", target: j, auto: !this.target, frequency: h, cents: w, heardMidi: _ };
  }
}
const jp = 1e3, Ep = 80;
class _p {
  constructor(i, l, u = () => performance.now()) {
    this.audio = i, this.store = l, this.clock = u, this.state = {
      status: "off",
      error: "",
      closed: null,
      device: l.data.device,
      devices: [],
      micInfo: null,
      minRms: Kn.minRms,
      noise: null,
      calibrating: !1,
      muted: null,
      heard: null,
      view: "practice",
      check: "waiting",
      notice: null,
      tuner: null,
      tunerTarget: null,
      diag: null
    };
  }
  audio;
  store;
  clock;
  state;
  listeners = /* @__PURE__ */ new Set();
  session = 0;
  open = !1;
  calibration = null;
  settler = new Hh();
  settleTimer;
  tunerEngine = new Sp();
  lastView = -1 / 0;
  routed = { count: 0, last: null };
  /** Harjoitus asettaa: käyttikö se näppäilyn. */
  onPluck = () => !1;
  /** Harjoitus asettaa: jokainen analyysikehys (epävarman tunnistuksen ja toistuvan sävelen ohjeet). */
  onFrame = () => {
  };
  subscribe = (i) => (this.listeners.add(i), () => {
    this.listeners.delete(i);
  });
  getState = () => this.state;
  get isOn() {
    return this.open && this.state.status === "on";
  }
  /** Voiko harjoitus juuri nyt arvioida näppäilyjä. */
  get listening() {
    return this.isOn && !this.state.calibrating && this.state.muted === null;
  }
  set(i) {
    this.state = { ...this.state, ...i }, this.listeners.forEach((l) => l());
  }
  /**
   * Avaa mikrofonin (lupa pyydetään tästä kutsusta, eli vain käyttäjän valinnasta) ja mittaa taustakohinan.
   * Palauttaa true, kun mikrofoni on auki.
   */
  async start() {
    this.closeStream(), this.cancelSettle();
    const i = ++this.session;
    this.set({ status: "permission", error: "", closed: null, heard: null, muted: null, notice: null });
    const l = {
      onFrame: (u, d) => {
        i === this.session && this.frame(u, d);
      },
      onStable: (u) => {
        i === this.session && this.stable(u);
      },
      onEnded: () => {
        i === this.session && this.stop("mic-lost");
      }
    };
    try {
      const u = await this.audio.openMic(l, this.state.device);
      return i !== this.session || !u ? !1 : (this.open = !0, this.set({ status: "on", micInfo: u, check: "waiting", tuner: null }), this.tunerEngine.reset(), this.startCalibration(), this.refreshDevices(), !0);
    } catch (u) {
      return i !== this.session || (this.open = !1, this.set({ status: "error", error: Lh(u), micInfo: null })), !1;
    }
  }
  /** Sulkee mikrofonin. Syy näytetään käyttäjälle (taustavälilehti, irrotettu laite). */
  stop(i = "user") {
    const l = this.open || this.state.status === "permission";
    this.session++, this.closeStream(), this.cancelSettle(), this.calibration = null, this.set({
      status: "off",
      error: "",
      closed: l ? i : this.state.closed,
      micInfo: null,
      heard: null,
      muted: null,
      calibrating: !1,
      diag: null,
      tuner: null,
      notice: null
    });
  }
  closeStream() {
    this.open && this.audio.closeMic(), this.open = !1;
  }
  /** Päivittää laitelistan (nimet näkyvät vasta luvan jälkeen). Kutsutaan myös devicechange-tapahtumasta. */
  async refreshDevices() {
    try {
      this.set({ devices: await this.audio.listDevices() });
    } catch {
    }
  }
  /** Äänitulon vaihto: vanha virta suljetaan ja uusi avataan; kohina mitataan uudelleen. */
  setDevice(i) {
    this.store.setDevice(i), this.set({ device: i }), (this.open || this.state.status === "permission") && this.start();
  }
  /** Mihin näkymään mikrofoni on kytketty. Viritin ja diagnostiikka eivät koskaan anna vastauksia. */
  setView(i) {
    i !== this.state.view && (i === "tuner" && (this.tunerEngine.reset(), this.tunerEngine.setTarget(this.state.tunerTarget)), this.open && this.audio.rearm(), this.set({ view: i, tuner: null, ...i === "check" && this.state.check === "waiting" && !this.state.calibrating ? { notice: Tc() } : {} }));
  }
  setTunerTarget(i) {
    this.tunerEngine.setTarget(i), this.set({ tunerTarget: i });
  }
  /** Taustakohinan mittaus: äänikynnys mitatun kohinan mukaan (sama menetelmä kuin Kitaraharjoittelijassa). */
  calibrate() {
    this.isOn && this.startCalibration();
  }
  startCalibration() {
    this.calibration = { start: this.clock(), samples: [] }, this.set({ calibrating: !0, notice: { tone: "info", text: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" } });
  }
  finishCalibration(i) {
    this.calibration = null;
    const l = Ih(i), u = l.loud ? Kn.minRms : l.threshold;
    this.audio.setMinRms(u), this.audio.rearm(), this.set({ calibrating: !1, minRms: u, noise: l, notice: l.loud ? { tone: "bad", text: "Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen." } : this.state.view === "check" && this.state.check === "waiting" ? Tc() : null });
  }
  // ---- mallisoiton suojaus ----
  /** Malli alkaa soida: analyysi tauolle, jotta kaiuttimen ääni ei vastaa käyttäjän puolesta. */
  muteForOutput() {
    this.open && (this.cancelSettle(), this.audio.pauseAnalysis(), this.set({ muted: "model" }));
  }
  /**
   * Malli loppui: analyysi jatkuu, mutta näppäilyt välitetään vasta, kun kaiuttimen häntä on vaimentunut
   * (OutputSettler) tai viimeistään aikarajan jälkeen. Näppäilytunnistin nollataan.
   */
  unmuteAfterOutput() {
    if (!this.open || this.state.muted === null) {
      this.state.muted !== null && this.set({ muted: null });
      return;
    }
    this.audio.resumeAnalysis(), this.settler.start(this.clock()), this.set({ muted: "settling" });
    const i = this.session;
    this.settleTimer = setTimeout(() => {
      i === this.session && this.state.muted === "settling" && this.endSettle();
    }, this.settler.maxMs + 200);
  }
  endSettle() {
    this.cancelSettle(), this.open && this.audio.rearm(), this.set({ muted: null });
  }
  cancelSettle() {
    clearTimeout(this.settleTimer), this.settleTimer = void 0, this.settler.cancel();
  }
  /** Soimaan jäänyt ääni ei vastaa: seuraava näppäily vaatii uuden alukkeen tai vaimennuksen. */
  rearm() {
    this.open && this.audio.rearm();
  }
  // ---- mikrofonin tapahtumat ----
  frame(i, l) {
    const u = this.clock(), d = { status: i.status, midi: i.status === "pitch" || i.status === "off-pitch" ? i.midi : void 0 }, h = this.state.heard;
    (!h || h.status !== d.status || h.midi !== d.midi) && this.set({ heard: d }), this.calibration && (this.calibration.samples.push(i.rms), u - this.calibration.start >= jp && this.finishCalibration(this.calibration.samples)), this.state.muted === "settling" && this.settler.feed(i.status === "silent", u) !== "settling" && this.endSettle();
    const v = this.state.view, y = v === "tuner" ? this.tunerEngine.feed(i, u) : null, j = v === "diagnostics" || v === "check";
    (y || j) && u - this.lastView >= Ep && (this.lastView = u, this.set({ ...y ? { tuner: y } : {}, ...j ? { diag: { frame: i, pluck: l, minRms: this.state.minRms, routed: this.routed } } : {} })), v === "practice" && this.listening && this.onFrame(i, l, u);
  }
  route(i, l) {
    this.routed = { count: this.routed.count + 1, last: { midi: i.midi, at: i.timestamp, route: l } }, this.state.diag && this.set({ diag: { ...this.state.diag, routed: this.routed } });
  }
  stable(i) {
    if (this.state.calibrating || this.state.muted !== null) {
      this.route(i, "not-routed");
      return;
    }
    if (this.state.view === "check") {
      this.route(i, "check");
      const l = i.midi === Ms;
      this.set({ check: l ? "ok" : "other", notice: l ? { tone: "good", text: `Kuulin ${ke(i.midi)}. Mikrofoni toimii.` } : { tone: "info", text: `Kuulin ${ke(i.midi)}. Mikrofoni toimii, mutta testisävel on ${ke(Ms)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    if (this.state.view !== "practice") {
      this.route(i, "not-routed");
      return;
    }
    this.route(i, this.onPluck(i) ? "practice" : "not-routed");
  }
}
const Tc = () => ({ tone: "info", text: `Soita vapaa B-kieli (${ke(Ms)}) ja anna sen soida hetki.` }), Np = 450, Tp = 700;
class Mp {
  constructor(i, l, u) {
    this.audio = i, this.mic = l, this.store = u;
    const d = Re[0].riffs[0];
    this.checker = new ja(d.midi, this.round, "mic"), this.state = {
      view: "home",
      level: Re[0],
      riff: d,
      riffNumber: 1,
      step: "listen",
      panel: null,
      modelPlaying: !1,
      playing: null,
      modelError: "",
      ...this.freshAttempt(d),
      progress: this.progressCopy()
    }, l.onPluck = (h) => this.pluck(h), l.onFrame = (h, v, y) => this.frame(h, v, y);
  }
  audio;
  mic;
  store;
  state;
  listeners = /* @__PURE__ */ new Set();
  op = 0;
  round = 0;
  checker;
  unsure = null;
  repeatSince = null;
  repeatShown = -1;
  subscribe = (i) => (this.listeners.add(i), () => {
    this.listeners.delete(i);
  });
  getState = () => this.state;
  set(i) {
    this.state = { ...this.state, ...i }, this.listeners.forEach((l) => l());
  }
  progressCopy() {
    const i = this.store.data.practice;
    return { marked: { ...i.marked }, heard: { ...i.heard }, last: i.last && { ...i.last } };
  }
  /** Vanhan mikrofonipelin läpäistyt riffit: näytetään erikseen, ei harjoituskuittauksina. */
  legacyMicPasses() {
    return Object.values(this.store.data.stats.mic).filter((i) => (i.passed ?? 0) > 0).length;
  }
  // ---- navigointi ----
  /** Harjoitusten valikko. Malli pysähtyy; mikrofoni saa jäädä auki. */
  home() {
    this.stopModel(), this.mic.setView("practice"), this.set({ view: "home", panel: null, progress: this.progressCopy() });
  }
  /** Avaa riffin. Uusi riffi aloittaa uuden muistista-kierroksen; saman riffin avaus säilyttää sen. */
  openRiff(i, l = "listen") {
    const u = Vc(i);
    if (!u) return;
    this.stopModel();
    const d = u.riff.id === this.state.riff.id;
    d || this.newAttempt(u.riff), this.store.setPracticeLast(u.riff.id, l), this.mic.setView("practice"), this.mic.rearm(), this.set({
      view: "riff",
      level: u.level,
      riff: u.riff,
      riffNumber: u.number,
      step: l,
      panel: null,
      modelError: "",
      ...d ? {} : this.freshAttempt(u.riff),
      progress: this.progressCopy()
    });
  }
  /** Jatka viimeksi harjoiteltua, tai aloita ensimmäisestä. */
  continueLast() {
    const i = this.store.data.practice.last;
    this.openRiff(i?.riff ?? Ut[0].id, i?.step ?? "listen");
  }
  /** Siirry riffijärjestyksessä eteen- tai taaksepäin (kotitreenien yli). Ei vaadi läpäisyä. */
  moveRiff(i) {
    const l = Ut.findIndex((u) => u.id === this.state.riff.id) + i;
    l >= 0 && l < Ut.length && this.openRiff(Ut[l].id, "listen");
  }
  /** Vaihe vaihtuu vapaasti. Muistista-kierroksen eteneminen ja kuitattu tila säilyvät. */
  setStep(i) {
    i !== this.state.step && (this.mic.rearm(), this.store.setPracticeLast(this.state.riff.id, i), this.unsure = null, this.set({ step: i, last: null, feedback: i === "recall" ? this.state.feedback : null }));
  }
  // ---- mikrofoni ja työkalut ----
  /** Avaa paneelin. Mikrofonin lupa pyydetään vasta tästä valinnasta. */
  openPanel(i) {
    this.stopModel(), this.set({ panel: i }), this.mic.setView(i === "mic" ? "check" : i), !this.mic.isOn && this.mic.getState().status !== "permission" && this.mic.start();
  }
  closePanel() {
    this.mic.setView("practice"), this.set({ panel: null });
  }
  /** Sulje mikrofoni: harjoittelu jatkuu ilman automaattista arviointia. */
  closeMic() {
    this.mic.stop("user"), this.state.panel && this.closePanel();
  }
  // ---- kuuntelu ----
  /** Kuuntele malli / Pysäytä (sama painike). Ei nollaa mitään. */
  listen() {
    if (this.state.modelPlaying) {
      this.stopModel();
      return;
    }
    this.playModel();
  }
  async playModel() {
    const i = ++this.op;
    this.audio.stopModel(), this.mic.muteForOutput(), this.set({ modelPlaying: !0, playing: null, modelError: "" });
    try {
      const l = await this.audio.playModel(this.state.riff.midi, (u) => {
        i === this.op && this.set({ playing: u });
      });
      if (i !== this.op || !l) return;
    } catch (l) {
      if (i !== this.op) return;
      this.set({ modelError: Oc(l) });
    }
    this.set({ modelPlaying: !1, playing: null }), this.mic.unmuteAfterOutput();
  }
  stopModel() {
    this.state.modelPlaying && (++this.op, this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null }), this.mic.unmuteAfterOutput());
  }
  /** Otelaudan painallus Kuuntele- ja Opettele-vaiheissa: soittaa sävelen. Ei koskaan arvioida. */
  tap(i) {
    return this.state.view !== "riff" || this.state.step === "recall" || this.state.modelPlaying ? !1 : (this.audio.pluck(i), !0);
  }
  // ---- Kokeile muistista ----
  /** Aloita alusta: uusi kierros samalla riffillä. */
  restartRecall() {
    this.newAttempt(this.state.riff), this.mic.rearm(), this.set({ ...this.freshAttempt(this.state.riff), feedback: { tone: "info", text: "Uusi kierros: soita riffi alusta." } });
  }
  /** Vihje pyynnöstä: seuraava odotettu sävel ja sen ehdotettu paikka. Ei rangaistusta. */
  showNextHint() {
    const i = this.state.index;
    if (this.state.step !== "recall" || this.state.complete) return;
    const l = this.state.riff.spots[i];
    this.set({ nextHint: !0, feedback: { tone: "hint", text: `Seuraava sävel (${i + 1}/${this.state.riff.midi.length}): ${ke(this.state.riff.midi[i])} – ${Ma(l)}.` } });
  }
  /** Ilman mikrofonia: näytä tai piilota riffin sävelet oman soiton tarkistamiseksi. */
  toggleReveal() {
    this.state.step === "recall" && this.set({ revealed: !this.state.revealed });
  }
  newAttempt(i) {
    this.checker = new ja(i.midi, ++this.round, "mic"), this.unsure = null, this.repeatSince = null, this.repeatShown = -1;
  }
  freshAttempt(i) {
    return { found: i.midi.map(() => !1), index: 0, complete: !1, nextHint: !1, revealed: !1, last: null, feedback: null };
  }
  /** Itse kuittaus: riffi on harjoiteltu. Ei vaadi mikrofonia eikä virheetöntä soittoa. Voi perua. */
  toggleMarked() {
    const i = this.state.riff.id;
    this.store.setMarked(i, !(i in this.store.data.practice.marked)), this.set({ progress: this.progressCopy() });
  }
  /** Välilehti taustalle: malli pysähtyy ja mikrofoni suljetaan. Harjoituksen tila säilyy. */
  hidden() {
    (this.mic.isOn || this.mic.getState().status === "permission") && this.mic.stop("background"), this.stopModel();
  }
  dispose() {
    ++this.op, this.audio.stopModel(), this.mic.stop("user");
  }
  // ---- mikrofonin tapahtumat ----
  pluck(i) {
    const l = this.state;
    if (l.view !== "riff" || l.panel !== null || l.modelPlaying) return !1;
    if (this.unsure = null, l.step !== "recall" || l.complete)
      return this.set({ last: { midi: i.midi, verdict: "free" } }), !0;
    const u = this.checker.feed({ midi: i.midi, round: this.checker.round, input: "mic" }), d = l.riff.midi.length;
    if (u.type === "accepted") {
      const h = l.found.map((v, y) => v || y === u.index);
      return u.complete ? (this.store.addHeard(l.riff.id), this.set({
        found: h,
        index: u.index + 1,
        complete: !0,
        nextHint: !1,
        last: { midi: i.midi, verdict: "right" },
        progress: this.progressCopy(),
        feedback: { tone: "done", text: `Mikrofoni kuuli koko riffin oikeassa järjestyksessä: ${l.riff.midi.map(ke).join(" – ")}. Voit soittaa uudelleen, kuitata riffin harjoitelluksi tai siirtyä seuraavaan.` }
      })) : this.set({
        found: h,
        index: u.index + 1,
        nextHint: !1,
        last: { midi: i.midi, verdict: "right" },
        feedback: { tone: "good", text: `${ke(i.midi)} – oikea sävel oikeassa kohdassa (${u.index + 1}/${d}).` }
      }), !0;
    }
    return u.type === "wrong" ? (this.set({ last: { midi: i.midi, verdict: u.octave ? "octave" : "wrong" }, feedback: u.octave ? { tone: "near", text: `Kuulin ${ke(i.midi)}: sävelnimi on oikea, mutta korkeus on eri oktaavissa. Kokeile toista nauhaa tai kieltä. Mikrofoni voi myös kuulla ylä-äänen – jos soitit mielestäsi oikein, näppää uudelleen.` } : { tone: "info", text: `Kuulin ${ke(i.midi)}. Tähän kohtaan (${u.index + 1}/${d}) kuuluu toinen sävel. Kokeile uudelleen, kuuntele malli tai pyydä vihje.` } }), !0) : !1;
  }
  /**
   * Analyysikehykset: epävarma tunnistus ja toistuva sama sävel. Kumpikaan ei ole virhe; ne kertovat,
   * miksi soitto ei (vielä) tunnistunut.
   */
  frame(i, l, u) {
    const d = this.state;
    if (d.view !== "riff" || d.panel !== null || d.modelPlaying || d.step === "listen") return;
    const h = i.rms >= this.mic.getState().minRms;
    h && (i.status === "unclear" || i.status === "off-pitch") ? (this.unsure ??= { since: u, shown: !1 }, !this.unsure.shown && u - this.unsure.since >= Np && (this.unsure.shown = !0, this.set({ feedback: { tone: "uncertain", text: i.status === "off-pitch" && i.midi !== void 0 ? `Epävarma tunnistus: lähin sävel on ${ke(i.midi)}, mutta vire on yli 35 senttiä sivussa. Tätä ei arvioida – tarkista viritys virittimellä.` : "Epävarma tunnistus: kuulen ääntä, mutta selvää säveltä ei löydy. Syynä voi olla useampi soiva kieli, taustamelu tai hiljainen soitto. Tätä ei lasketa virheeksi – soita yksi kieli kerrallaan ja anna sen soida hetki." } }))) : (!h || i.status === "pitch") && (this.unsure = null);
    const v = this.checker.next;
    if (!(d.step === "recall" && !d.complete && v !== null && l.reason === "waiting-new-pluck" && l.last?.midi === v && d.index > 0 && d.riff.midi[d.index - 1] === v)) {
      this.repeatSince = null;
      return;
    }
    this.repeatSince ??= u, this.repeatShown !== d.index && u - this.repeatSince >= Tp && (this.repeatShown = d.index, this.set({ feedback: { tone: "hint", text: "Sama sävel soi yhä. Toistuvaa säveltä varten vaimenna kieli hetkeksi kämmenellä tai sormella ja näppää sitten uudelleen." } }));
  }
}
const Sr = (o, i = 1) => o.toFixed(i).replace(".", ","), gr = (o) => {
  const i = Math.round(_s(o));
  return `${i < 0 ? "−" : ""}${Math.abs(i)} dB`;
}, Gc = (o) => (o > 0 ? "+" : o < 0 ? "−" : "±") + Sr(Math.abs(o), 0);
function Cp({ s: o, mic: i }) {
  const l = o.devices.some((u) => u.id === o.device);
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-device", children: [
    /* @__PURE__ */ c.jsx("label", { htmlFor: "riff-device", children: "Äänitulo" }),
    /* @__PURE__ */ c.jsxs("select", { id: "riff-device", value: l || !o.device ? o.device : "", onChange: (u) => i.setDevice(u.target.value), children: [
      /* @__PURE__ */ c.jsx("option", { value: "", children: "Järjestelmän oletus" }),
      o.devices.map((u) => /* @__PURE__ */ c.jsx("option", { value: u.id, children: u.label }, u.id))
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "mic-device", children: [
      o.micInfo ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        "Käytössä: ",
        /* @__PURE__ */ c.jsx("strong", { children: o.micInfo.label || "nimetön äänitulo" }),
        " · ",
        o.micInfo.channels,
        " ",
        o.micInfo.channels === 1 ? "kanava" : "kanavaa",
        " · ",
        Sr(o.micInfo.sampleRate / 1e3, 1),
        " kHz"
      ] }) : "Mikrofoni ei ole auki.",
      o.micInfo?.fallback && /* @__PURE__ */ c.jsx(c.Fragment, { children: " · Valittua laitetta ei löytynyt, joten käytössä on järjestelmän oletus." })
    ] }),
    !o.devices.length && o.micInfo && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Selain ei ilmoittanut laitteita. Valitse laite tarvittaessa järjestelmän ääniasetuksista ja valitse sitten ”Järjestelmän oletus” uudelleen." })
  ] });
}
const Rp = {
  silent: "Taso on äänikynnyksen alapuolella.",
  unclear: "Ääntä tulee, mutta selkeää sävelkorkeutta ei löydy (selkeys alle 94 %).",
  "out-of-range": "Taajuus on kitaran alueen ulkopuolella.",
  "off-pitch": "Sävel tunnistettiin, mutta se on yli ±35 senttiä vireestä.",
  pitch: "Sävelkorkeus tunnistettu."
}, Mc = {
  silent: "Ei ääntä kynnyksen yläpuolella.",
  unclear: "Ei selkeää säveltä.",
  "out-of-range": "Taajuus alueen ulkopuolella.",
  "off-pitch": "Liian epävireinen.",
  "waiting-new-pluck": "Sama sävel soi yhä: odotetaan uutta näppäystä tai lyhyttä vaimennusta.",
  harmonic: "Edellisen sävelen ylä-ääni tai oktaavi: ei uusi näppäily ilman uutta aluketta.",
  "too-quiet-for-change": "Eri sävel, mutta liian hiljainen (myötäresonanssi?): ei uusi näppäily ilman aluketta.",
  stabilizing: "Sävel vakautuu."
}, Cc = { quiet: "hiljaisuuden jälkeen", onset: "uusi aluke", "pitch-change": "sävelen vaihto" }, Pp = { practice: "harjoitukseen", check: "mikrofonitestiin", "not-routed": "ei välitetty (ei kuunteluvuoroa)" };
function Lp({ s: o }) {
  const i = o.diag;
  if (!i) return /* @__PURE__ */ c.jsx("p", { className: "riff-help", "data-testid": "diag", children: "Odotetaan mikrofonin ensimmäisiä analyysitietoja…" });
  const l = i.frame, u = i.pluck, d = l.rms >= i.minRms, h = Math.max(0, Math.min(100, (_s(l.rms) + 60) / 60 * 100)), v = Math.max(0, Math.min(100, (_s(i.minRms) + 60) / 60 * 100)), y = (j, _, N, w) => /* @__PURE__ */ c.jsxs("li", { className: j ? "ok" : "no", "data-testid": `diag-${w}`, children: [
    /* @__PURE__ */ c.jsxs("strong", { children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: j ? "●" : "○" }),
      " ",
      _
    ] }),
    /* @__PURE__ */ c.jsx("span", { children: N })
  ] });
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-diag", "data-testid": "diag", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "riff-meter", role: "meter", "aria-label": "Äänitaso", "aria-valuemin": -60, "aria-valuemax": 0, "aria-valuenow": Math.round(_s(l.rms)), children: [
      /* @__PURE__ */ c.jsx("span", { className: "fill", style: { width: h + "%" } }),
      /* @__PURE__ */ c.jsx("span", { className: "threshold", style: { left: v + "%" }, title: "Äänikynnys" })
    ] }),
    /* @__PURE__ */ c.jsxs("ol", { className: "riff-stages", children: [
      y(d, "1. Ääntä mikrofonista", /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        gr(l.rms),
        " (kynnys ",
        gr(i.minRms),
        ")",
        l.levels.length > 1 ? ` · kanavat ${l.levels.map(gr).join(" / ")}, analysoidaan kanavaa ${l.channel + 1}` : "",
        l.peak > 0.98 ? " · leikkautuu: pienennä gainia" : ""
      ] }), "level"),
      y(l.status === "pitch" || l.status === "off-pitch", "2. Sävelkorkeus", l.frequency ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        Sr(l.frequency),
        " Hz · ",
        l.midi !== void 0 ? `${ke(l.midi)} (MIDI ${l.midi})` : "–",
        " · ",
        l.cents !== void 0 ? `${Gc(l.cents)} snt` : "",
        " · selkeys ",
        Math.round((l.clarity ?? 0) * 100),
        " %"
      ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        Rp[l.status],
        l.clarity ? ` Selkeys ${Math.round(l.clarity * 100)} %.` : ""
      ] }), "pitch"),
      y(
        !!u.candidate && u.reason === "stabilizing" || !!u.last && u.reason === null,
        "3. Vakaa sävel",
        u.candidate ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          ke(u.candidate.midi),
          ": ",
          Math.round(u.candidate.heldMs),
          " / 240 ms"
        ] }) : u.reason ? Mc[u.reason] : "–",
        "stable"
      ),
      y(u.armed, "4. Uusi näppäily", /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        u.armed ? `Valmis hyväksymään (${Cc[u.armedBy]}).` : u.reason ? Mc[u.reason] : "Odotetaan uutta näppäystä.",
        u.last && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          " Viimeisin: ",
          /* @__PURE__ */ c.jsx("strong", { children: ke(u.last.midi) }),
          " (",
          Cc[u.last.armedBy],
          "), näppäilyjä ",
          u.count,
          "."
        ] })
      ] }), "pluck"),
      y(i.routed.last?.route === "practice" || i.routed.last?.route === "check", "5. Välitetty harjoitukselle", i.routed.last ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        ke(i.routed.last.midi),
        " → ",
        Pp[i.routed.last.route],
        " · yhteensä ",
        i.routed.count
      ] }) : "Ei vielä näppäilyjä.", "routed")
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "Taustakohina ",
      o.noise ? `${gr(o.noise.noise)} → äänikynnys ${gr(o.minRms)}` : `ei mitattu, oletuskynnys ${gr(o.minRms)}`,
      ". Diagnostiikka ei lähetä mitään harjoitukseen."
    ] })
  ] });
}
const Ap = {
  "no-signal": "Näppää kieli ja anna sen soida.",
  unreliable: "Epävarma havainto – näppää kieli uudelleen ja anna soida. Viritysohjetta ei anneta.",
  far: "",
  flat: "Liian matala – kiristä kieltä hieman.",
  "in-tune": "Vireessä!",
  sharp: "Liian korkea – löysää kieltä hieman."
};
function Ip({ s: o, mic: i }) {
  const l = o.tuner, u = l?.cents ?? 0, d = l && ["flat", "in-tune", "sharp"].includes(l.status), h = 50 + Math.max(-50, Math.min(50, u));
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-tuner", "data-testid": "tuner", children: [
    /* @__PURE__ */ c.jsxs("fieldset", { className: "riff-strings", children: [
      /* @__PURE__ */ c.jsx("legend", { children: "Kieli" }),
      /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": o.tunerTarget === null, onClick: () => i.setTunerTarget(null), children: "Auto" }),
      Rs.map((v) => /* @__PURE__ */ c.jsxs("button", { type: "button", "aria-pressed": o.tunerTarget === v.midi, onClick: () => i.setTunerTarget(v.midi), children: [
        /* @__PURE__ */ c.jsx("strong", { children: v.name }),
        /* @__PURE__ */ c.jsxs("small", { children: [
          v.number,
          ". kieli"
        ] })
      ] }, v.midi))
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: `riff-tuner-readout ${l?.status ?? "no-signal"}`, role: "status", "data-testid": "tuner-status", "data-status": l?.status ?? "no-signal", children: [
      /* @__PURE__ */ c.jsx("p", { className: "target", children: l ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        "Tavoite ",
        /* @__PURE__ */ c.jsx("strong", { children: l.target.name }),
        " (",
        Sr(440 * 2 ** ((l.target.midi - 69) / 12), 2),
        " Hz)",
        l.auto ? ", valittu automaattisesti" : ""
      ] }) : "Näppää kieli." }),
      /* @__PURE__ */ c.jsx("p", { className: "value", "data-testid": "tuner-cents", children: d ? `${Gc(u)} senttiä` : "–" }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-tuner-scale", "aria-hidden": "true", children: [
        /* @__PURE__ */ c.jsx("span", { className: "zone", style: { left: `${50 - Ns}%`, width: `${Ns * 2}%` } }),
        d && /* @__PURE__ */ c.jsx("span", { className: "needle", style: { left: h + "%" } }),
        /* @__PURE__ */ c.jsx("span", { className: "label left", children: "−50" }),
        /* @__PURE__ */ c.jsx("span", { className: "label mid", children: "0" }),
        /* @__PURE__ */ c.jsx("span", { className: "label right", children: "+50" })
      ] }),
      /* @__PURE__ */ c.jsx("p", { className: "advice", "data-testid": "tuner-advice", children: l?.status === "far" && l.heardMidi !== void 0 ? `Kuulen ${ke(l.heardMidi)} (${Sr(l.frequency)} Hz), mikä on yli puolisävelaskeleen päässä kielestä ${l.target.name}. Tarkista, että soitat oikeaa kieltä.` : Ap[l?.status ?? "no-signal"] }),
      l?.frequency && l.status !== "far" && /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "tuner-frequency", children: [
        "Mitattu ",
        Sr(l.frequency, 2),
        " Hz",
        l.heardMidi !== void 0 ? ` · lähin sävel ${ke(l.heardMidi)}` : ""
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "A4 = 440 Hz. Vihreä alue on ±",
      Ns,
      " senttiä. Viritin käyttää samaa sävelentunnistusta kuin harjoitus, mutta sen lukemat eivät koskaan mene harjoitukseen."
    ] })
  ] });
}
const qc = {
  user: "",
  background: "Mikrofoni suljettiin, koska välilehti siirtyi taustalle.",
  "mic-lost": "Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite."
};
function Yc(o) {
  if (o.calibrating) return "mittaa taustakohinaa";
  if (o.muted === "model") return "tauolla mallin ajan";
  if (o.muted === "settling") return "odottaa, että malli hiljenee";
  const i = o.heard;
  return i ? i.status === "silent" ? "alle äänikynnyksen" : i.status === "pitch" && i.midi !== void 0 ? ke(i.midi) : i.status === "off-pitch" && i.midi !== void 0 ? `${ke(i.midi)}, epävireinen` : "ääntä, ei selvää säveltä" : "ei vielä analyysia";
}
function Xc({ m: o, practice: i }) {
  const l = o.closed ? qc[o.closed] : "";
  return /* @__PURE__ */ c.jsxs("div", { className: `riff-micbar ${o.status}`, "data-testid": "mic-bar", children: [
    o.status === "on" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("p", { className: "riff-mic-line", children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Mikrofoni käytössä" }),
        " · ",
        o.micInfo?.label || "äänitulo"
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ c.jsx("strong", { "data-testid": "heard", children: Yc(o) })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions compact", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("mic"), children: "Mikrofoni ja viritys" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.closeMic(), children: "Sulje mikrofoni" })
      ] })
    ] }),
    o.status === "permission" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", children: "Pyydetään mikrofonilupaa…" }),
      /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Salli mikrofoni selaimen kysymyksestä. Voit myös harjoitella ilman mikrofonia." }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-actions compact", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.closeMic(), children: "Jatka ilman mikrofonia" }) })
    ] }),
    o.status === "error" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: o.error }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions compact", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("mic"), children: "Yritä mikrofonia uudelleen" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.closeMic(), children: "Jatka ilman mikrofonia" })
      ] })
    ] }),
    o.status === "off" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      l && /* @__PURE__ */ c.jsx("p", { className: "riff-status bad", role: "status", "data-testid": "mic-closed", children: l }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-mic-line", children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Mikrofoni ei ole käytössä." }),
        " Voit harjoitella ilman sitä: kuuntele, opettele ja tarkista soittosi korvalla."
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions compact", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("mic"), children: o.closed ? "Ota mikrofoni uudelleen käyttöön" : "Ota mikrofoni käyttöön" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("tuner"), children: "Viritin" })
      ] })
    ] })
  ] });
}
const zp = { mic: "Mikrofonin valmistelu", tuner: "Viritin", diagnostics: "Mikrofonin diagnostiikka" };
function Fp({ m: o, mic: i, practice: l, panel: u, headingRef: d }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-panel", "data-testid": u === "mic" ? "mic-setup" : "tools", children: [
    /* @__PURE__ */ c.jsx("h2", { tabIndex: -1, ref: d, children: zp[u] }),
    /* @__PURE__ */ c.jsx("div", { className: "riff-tools-switch", role: "group", "aria-label": "Mikrofonin työkalut", children: ["mic", "tuner", "diagnostics"].map((h) => /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": u === h, onClick: () => l.openPanel(h), children: h === "mic" ? "Valmistelu" : h === "tuner" ? "Viritin" : "Diagnostiikka" }, h)) }),
    o.status === "permission" && /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", children: "Pyydetään mikrofonilupaa… Salli mikrofoni selaimen kysymyksestä." }),
    o.status === "error" && /* @__PURE__ */ c.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: o.error }),
    o.status === "off" && /* @__PURE__ */ c.jsxs("p", { className: "riff-status", role: "status", children: [
      o.closed && o.closed !== "user" ? qc[o.closed] + " " : "",
      "Mikrofoni ei ole auki."
    ] }),
    (o.status === "error" || o.status === "off") && /* @__PURE__ */ c.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => {
      i.start();
    }, children: "Avaa mikrofoni" }) }),
    /* @__PURE__ */ c.jsx(Cp, { s: o, mic: i }),
    o.calibrating && /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", "data-testid": "calibrating", children: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" }),
    u === "mic" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("h3", { children: "Mikrofonin testi" }),
      !o.calibrating && /* @__PURE__ */ c.jsxs("p", { children: [
        "Soita ",
        /* @__PURE__ */ c.jsxs("strong", { children: [
          "vapaa B-kieli (",
          ke(Ms),
          ")"
        ] }),
        ", toiseksi ohuin kieli, ja anna sen soida hetki. Testi on vapaaehtoinen."
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ c.jsx("strong", { "data-testid": "heard", children: o.status === "on" ? Yc(o) : "mikrofoni ei ole auki" })
      ] }),
      o.notice && !o.calibrating && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${o.notice.tone}`, role: "status", "data-testid": "feedback", children: o.notice.text })
    ] }),
    u !== "mic" && o.notice && !o.calibrating && o.notice.tone === "bad" && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "status", children: o.notice.text }),
    u === "tuner" && /* @__PURE__ */ c.jsx(Ip, { s: o, mic: i }),
    u === "diagnostics" && /* @__PURE__ */ c.jsx(Lp, { s: o }),
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => l.closePanel(), children: o.status === "on" ? "Valmis – takaisin harjoitukseen" : "Takaisin harjoitukseen" }),
      o.status === "on" && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.calibrate(), disabled: o.calibrating, children: "Mittaa taustakohina uudelleen" }),
      o.status === "on" && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.closeMic(), children: "Sulje mikrofoni" })
    ] }),
    /* @__PURE__ */ c.jsxs("details", { className: "riff-limits", children: [
      /* @__PURE__ */ c.jsx("summary", { children: "Mitä mikrofoni tunnistaa – ja mitä ei" }),
      /* @__PURE__ */ c.jsxs("ul", { children: [
        /* @__PURE__ */ c.jsxs("li", { children: [
          "Mikrofoni kuulee vain ",
          /* @__PURE__ */ c.jsx("strong", { children: "sävelkorkeuden" }),
          ". Se ei tunnista, miltä kieleltä tai millä sormella soitat."
        ] }),
        /* @__PURE__ */ c.jsx("li", { children: "Soita yksi kieli kerrallaan. Yhtä aikaa soivat kielet ja pitkään soimaan jäävät kielet sotkevat tunnistusta – vaimenna tarvittaessa." }),
        /* @__PURE__ */ c.jsx("li", { children: "Sama sävel kahdesti: vaimenna kieli hetkeksi välissä, jotta toinen näppäys erottuu." }),
        /* @__PURE__ */ c.jsx("li", { children: "Matalat kielet ja ylä-äänet voivat näkyä oktaavin eri sävelenä. Siitä kerrotaan erikseen, eikä sitä lasketa virheeksi." }),
        /* @__PURE__ */ c.jsx("li", { children: "Hiljainen soitto, taustamelu, kannettavan sisäinen mikrofoni ja vahvistamaton sähkökitara heikentävät tunnistusta. Äänikortin soitintulo tai lähellä oleva mikrofoni toimii parhaiten." }),
        /* @__PURE__ */ c.jsx("li", { children: "Mallin ääni kaiuttimesta ei vastaa puolestasi: kuuntelu on tauolla mallin ajan. Kuulokkeet auttavat silti." }),
        /* @__PURE__ */ c.jsx("li", { children: "Ääntä ei tallenneta eikä lähetetä mihinkään. Analyysi tehdään vain tässä selaimessa." })
      ] })
    ] })
  ] });
}
const bc = { listen: "Kuuntele", learn: "Opettele", recall: "Kokeile muistista" };
function Op({ s: o, practice: i }) {
  return /* @__PURE__ */ c.jsx("nav", { className: "riff-steps", "aria-label": "Harjoittelun vaiheet", children: /* @__PURE__ */ c.jsx("ol", { children: ["listen", "learn", "recall"].map((l, u) => /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsxs("button", { type: "button", "aria-current": o.step === l ? "step" : void 0, onClick: () => i.setStep(l), children: [
    /* @__PURE__ */ c.jsx("span", { className: "riff-step-number", "aria-hidden": "true", children: u + 1 }),
    " ",
    bc[l],
    l === "recall" && o.index > 0 && /* @__PURE__ */ c.jsxs("span", { className: "riff-step-progress", children: [
      " · ",
      o.index,
      "/",
      o.riff.midi.length
    ] })
  ] }) }, l)) }) });
}
function Dp(o, i) {
  return o.riff.midi.map((l, u) => {
    const d = o.modelPlaying && o.playing === u;
    if (o.step === "listen") return { cls: `pending${d ? " model" : ""}`, content: d ? "♪" : "", label: `${u + 1}. sävel${d ? ", soi nyt" : ""}` };
    if (!i && o.step === "recall") return {
      cls: `${o.revealed ? "shown" : "pending"}${d ? " model" : ""}`,
      content: o.revealed ? ke(l) : d ? "♪" : "",
      label: `${u + 1}. sävel${o.revealed ? `: ${ke(l)}` : ""}`
    };
    if (o.step === "learn") return { cls: `shown${d ? " model" : ""}`, content: ke(l), label: `${u + 1}. sävel: ${ke(l)}, ${Ma(o.riff.spots[u])}` };
    const h = o.found[u], v = !o.complete && u === o.index, y = v && o.nextHint;
    return {
      cls: `${h ? "found" : "pending"}${v ? " current" : ""}${d ? " model" : ""}${y ? " memory" : ""}`,
      mark: h ? "found" : "pending",
      content: h ? ke(l) : d ? "♪" : y ? ke(l) : v ? "?" : "",
      symbol: h ? "✓" : void 0,
      label: `${u + 1}. sävel: ${h ? `${ke(l)}, tunnistettu oikeassa kohdassa` : y ? `vihje ${ke(l)}` : "ei vielä soitettu"}${v ? ", vuorossa" : ""}`
    };
  });
}
const $p = (o) => o.modelPlaying ? "Pysäytä malli" : "Kuuntele malli";
function Bp({ s: o, m: i, practice: l, headingRef: u }) {
  const d = o.riff.midi.length, h = i.status === "on", v = /* @__PURE__ */ c.jsx(Wc, { slots: Dp(o, h), label: o.step === "recall" && h ? `Kokeile muistista: tunnistettu ${o.index}/${d} säveltä` : `Riffissä on ${d} säveltä` }), y = (_) => /* @__PURE__ */ c.jsx("button", { type: "button", className: _ ? "primary" : "", onClick: () => l.listen(), "aria-pressed": o.modelPlaying, "data-testid": "listen", children: $p(o) }), j = o.modelError && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "status", children: o.modelError });
  return o.step === "listen" ? /* @__PURE__ */ c.jsxs("section", { className: "riff-step", "data-testid": "step-listen", "aria-labelledby": "riff-step-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "riff-step-title", tabIndex: -1, ref: u, children: "1. Kuuntele" }),
    /* @__PURE__ */ c.jsx("p", { children: "Kuuntele malliriffi rauhassa niin monta kertaa kuin haluat. Montako säveltä siinä on? Nouseeko vai laskeeko melodia? Toistuuko jokin sävel?" }),
    v,
    j,
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!0),
      /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.setStep("learn"), children: [
        "Seuraavaksi: Opettele ",
        /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] }) : o.step === "learn" ? /* @__PURE__ */ c.jsxs("section", { className: "riff-step", "data-testid": "step-learn", "aria-labelledby": "riff-step-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "riff-step-title", tabIndex: -1, ref: u, children: "2. Opettele" }),
    /* @__PURE__ */ c.jsx("p", { children: "Näin riffin voi soittaa. Soita sitä omaan tahtiin – tässä vaiheessa mitään ei arvioida." }),
    v,
    /* @__PURE__ */ c.jsx("ol", { className: "riff-notes", "data-testid": "learn-notes", children: o.riff.midi.map((_, N) => /* @__PURE__ */ c.jsxs("li", { children: [
      /* @__PURE__ */ c.jsx("strong", { children: ke(_) }),
      " – ",
      Ma(o.riff.spots[N])
    ] }, N)) }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-tip", children: o.riff.tip }),
    h && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Mikrofoni näyttää kuulemansa sävelen ja sen paikan otelaudalla, jos sävel kuuluu riffiin. Se ei tunnista kieltä – sama sävel löytyy usein muualtakin." }),
    j,
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!1),
      /* @__PURE__ */ c.jsxs("button", { type: "button", className: "primary", onClick: () => l.setStep("recall"), children: [
        "Seuraavaksi: Kokeile muistista ",
        /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] }) : /* @__PURE__ */ c.jsxs("section", { className: "riff-step", "data-testid": "step-recall", "aria-labelledby": "riff-step-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "riff-step-title", tabIndex: -1, ref: u, children: "3. Kokeile muistista" }),
    /* @__PURE__ */ c.jsx("p", { children: "Sävelet ja otelautapaikat ovat piilossa. Soita riffi kuulemasi perusteella. Ei aikarajaa eikä virhepisteitä." }),
    v,
    h && /* @__PURE__ */ c.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
      "Tunnistettu ",
      o.index,
      "/",
      d
    ] }),
    h ? /* @__PURE__ */ c.jsx("p", { className: "riff-help", "data-testid": "recall-mode", children: "Mikrofoni kertoo, mitkä sävelet se tunnisti oikeassa järjestyksessä. Väärä sävel ei ole virhe: kohta vain odottaa oikeaa säveltä." }) : /* @__PURE__ */ c.jsx("p", { className: "riff-help", "data-testid": "recall-mode", children: "Mikrofoni ei ole käytössä, joten soittoa ei arvioida automaattisesti. Soita riffi ja vertaa sitä malliin kuuntelemalla – tai ota mikrofoni käyttöön yläpuolelta." }),
    o.feedback && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${o.feedback.tone}`, role: "status", "data-testid": "feedback", children: o.feedback.text }),
    j,
    h ? /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!1),
      !o.complete && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.showNextHint(), disabled: o.nextHint, children: "Näytä seuraava sävel" }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.restartRecall(), className: o.complete ? "primary" : "", children: o.complete ? "Soita uudelleen" : "Aloita alusta" })
    ] }) : /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!1),
      /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": o.revealed, onClick: () => l.toggleReveal(), children: o.revealed ? "Piilota sävelet" : "Näytä sävelet tarkistukseen" })
    ] })
  ] });
}
function Rc(o, i) {
  const l = de.useRef(o);
  de.useEffect(() => {
    l.current !== o && i.current?.focus(), l.current = o;
  }, [o, i]);
}
function Jc(o, i) {
  const l = i in o.progress.marked, u = o.progress.heard[i] ?? 0;
  return { marked: l, heard: u, text: [l ? "harjoiteltu (itse kuitattu)" : "", u ? `mikrofoni kuuli kokonaan ${u} ${u === 1 ? "kerran" : "kertaa"}` : ""].filter(Boolean).join(" · ") };
}
function Vp({ s: o, m: i, practice: l, titleRef: u }) {
  const d = o.progress.last && Vc(o.progress.last.riff), h = Ut.filter((y) => y.id in o.progress.marked).length, v = l.legacyMicPasses();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "harjoitus" }),
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: u, tabIndex: -1, children: "Opettele riffit omaan tahtiin" }),
      /* @__PURE__ */ c.jsx("p", { children: "Harjoittele lyhyitä riffejä omalla kitaralla. Mikrofoni voi kertoa, mitkä sävelet se tunnisti, mutta harjoitella voi myös ilman sitä. Ei aikarajoja eikä virhepisteitä – siirry seuraavaan, kun olet valmis." })
    ] }),
    /* @__PURE__ */ c.jsxs("ol", { className: "riff-process", "aria-label": "Näin harjoittelet", children: [
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Valitse riffi" }),
        " alta."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Valmistele mikrofoni" }),
        " ja tarkista viritys, jos haluat palautetta (vapaaehtoinen)."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Kuuntele" }),
        " malli, ",
        /* @__PURE__ */ c.jsx("strong", { children: "opettele" }),
        " sävelet ja otelautapaikat ja ",
        /* @__PURE__ */ c.jsx("strong", { children: "kokeile muistista" }),
        "."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Kuittaa riffi harjoitelluksi" }),
        ", kun se tuntuu sujuvan. Saman riffin voi harjoitella uudelleen milloin vain."
      ] })
    ] }),
    d && /* @__PURE__ */ c.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ c.jsxs("button", { type: "button", className: "primary", onClick: () => l.continueLast(), "data-testid": "continue-practice", children: [
      "Jatka: ",
      d.level.name,
      " · ",
      d.riff.title,
      " (",
      bc[o.progress.last.step],
      ")"
    ] }) }),
    /* @__PURE__ */ c.jsx(Xc, { m: i, practice: l }),
    /* @__PURE__ */ c.jsx("h2", { children: "Harjoitukset" }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "practice-summary", children: [
      "Harjoiteltu ",
      h,
      "/",
      Ut.length,
      " riffiä. Kaikki harjoitukset ovat auki: järjestystä ei tarvitse noudattaa."
    ] }),
    Re.map((y) => {
      const j = y.riffs.filter((_) => _.id in o.progress.marked).length;
      return /* @__PURE__ */ c.jsxs("section", { className: "riff-set", "aria-labelledby": `riff-set-${y.number}`, children: [
        /* @__PURE__ */ c.jsxs("h3", { id: `riff-set-${y.number}`, children: [
          y.name,
          " – ",
          y.title,
          " ",
          /* @__PURE__ */ c.jsxs("span", { className: "riff-set-count", children: [
            "Harjoiteltu ",
            j,
            "/",
            y.riffs.length
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("ol", { className: "riff-set-list", children: y.riffs.map((_, N) => {
          const w = Jc(o, _.id);
          return /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsxs("button", { type: "button", className: `riff-set-item${w.marked ? " marked" : ""}`, onClick: () => l.openRiff(_.id), children: [
            /* @__PURE__ */ c.jsx("span", { className: "riff-set-mark", "aria-hidden": "true", children: w.marked ? "✓" : N + 1 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              /* @__PURE__ */ c.jsx("strong", { children: _.title }),
              w.text && /* @__PURE__ */ c.jsx("small", { children: w.text })
            ] })
          ] }) }, _.id);
        }) })
      ] }, y.number);
    }),
    v > 0 && /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "legacy-mic", children: [
      "Aiemman version mikrofonipelin tulokset ovat tallessa (",
      v,
      " läpäistyä riffiä). Niitä ei lasketa tämän harjoituksen kuittauksiksi."
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "Haluatko pelata ilman kitaraa? ",
      /* @__PURE__ */ c.jsx("a", { href: "?tila=peli", children: "Riffikaiku-peli – virtuaalikitara" }),
      "."
    ] })
  ] });
}
function Up({ s: o, m: i, practice: l, titleRef: u, stepRef: d }) {
  const [h, v] = de.useState(null), y = de.useRef();
  de.useEffect(() => () => clearTimeout(y.current), []), de.useEffect(() => {
    v(null);
  }, [o.step, o.riff.id]);
  const j = Ut.findIndex((L) => L.id === o.riff.id), _ = Jc(o, o.riff.id), N = i.status === "on" && i.muted === null && !i.calibrating && i.heard?.status === "pitch" ? i.heard.midi : void 0, w = o.step !== "recall";
  function M(L) {
    l.tap(L.midi) && (clearTimeout(y.current), v((b) => ({ p: L, n: (b?.n ?? 0) + 1 })), y.current = setTimeout(() => v(null), 600));
  }
  const I = i.status === "on", C = o.step === "learn" || o.step === "recall" && !I && o.revealed ? Ea(o.riff, o.playing) : o.step === "recall" && I ? Ea(o.riff, o.playing, (L) => o.complete || o.found[L] || o.nextHint && L === o.index, (L) => o.found[L] || o.complete ? String(L + 1) : "?") : [], z = N !== void 0 && o.step === "learn" ? o.riff.spots[o.riff.midi.indexOf(N)] : void 0;
  return z && C.push({ ...z, midi: N, kind: "playing", label: ke(N) }), h && w && C.push({ ...h.p, kind: "playing", label: ke(h.p.midi) }), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("header", { className: "riff-round-heading", children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "harjoitus" }),
      /* @__PURE__ */ c.jsxs("h1", { id: "riff-title", ref: u, tabIndex: -1, "data-testid": "level-heading", children: [
        o.level.name,
        " · Riffi ",
        o.riffNumber,
        "/",
        o.level.riffs.length
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-name", children: [
        o.riff.title,
        _.marked && /* @__PURE__ */ c.jsx("span", { className: "riff-marked-badge", children: " · ✓ harjoiteltu" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(Op, { s: o, practice: l }),
    /* @__PURE__ */ c.jsx(Xc, { m: i, practice: l }),
    /* @__PURE__ */ c.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ c.jsx(Bp, { s: o, m: i, practice: l, headingRef: d }),
      o.step === "learn" && i.status === "on" && /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", "data-testid": "learn-heard", children: [
        "Kuulen nyt: ",
        /* @__PURE__ */ c.jsx("strong", { children: N !== void 0 ? ke(N) : "–" }),
        N !== void 0 && !o.riff.midi.includes(N) ? " (ei kuulu tähän riffiin)" : ""
      ] }),
      /* @__PURE__ */ c.jsx(
        Kc,
        {
          focus: o.level.strings,
          marks: C,
          disabled: !w || o.modelPlaying,
          onAnswer: M,
          caption: w ? "Otelauta: painamalla kuulet sävelen (ei arvioida)" : "Otelauta: soita oikealla kitaralla – mikrofoni kuulee vain sävelkorkeuden, ei kieltä"
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-practice-footer", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": _.marked, onClick: () => l.toggleMarked(), "data-testid": "mark-practiced", className: _.marked ? "marked" : "", children: _.marked ? "✓ Harjoiteltu – poista kuittaus" : "Kuittaa harjoitelluksi" }),
        j > 0 && /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.moveRiff(-1), children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "←" }),
          " Edellinen riffi"
        ] }),
        j < Ut.length - 1 && /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.moveRiff(1), children: [
          "Seuraava riffi ",
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-end-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.home(), children: "Kaikki harjoitukset" }) })
    ] })
  ] });
}
function Hp({ practice: o }) {
  const i = de.useSyncExternalStore(o.subscribe, o.getState), l = de.useSyncExternalStore(o.mic.subscribe, o.mic.getState), u = de.useRef(null), d = de.useRef(null), h = de.useRef(null);
  return Rc(i.panel ? "panel" : `${i.view}:${i.riff.id}`, i.panel ? h : u), Rc(i.step, d), de.useEffect(() => {
    const v = () => {
      document.visibilityState === "hidden" && o.hidden();
    }, y = () => o.dispose(), j = () => {
      o.mic.refreshDevices();
    };
    return document.addEventListener("visibilitychange", v), window.addEventListener("pagehide", y), navigator.mediaDevices?.addEventListener?.("devicechange", j), () => {
      document.removeEventListener("visibilitychange", v), window.removeEventListener("pagehide", y), navigator.mediaDevices?.removeEventListener?.("devicechange", j);
    };
  }, [o]), /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-mode": "harjoitus", "data-view": i.panel ? "panel" : i.view, "aria-labelledby": i.panel ? void 0 : "riff-title", "aria-label": i.panel ? "Riffiharjoitus – oikea kitara" : void 0, children: [
    /* @__PURE__ */ c.jsx(pi, { mode: "harjoitus" }),
    i.panel ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "harjoitus" }),
      /* @__PURE__ */ c.jsx(Fp, { m: l, mic: o.mic, practice: o, panel: i.panel, headingRef: h })
    ] }) : i.view === "home" ? /* @__PURE__ */ c.jsx(Vp, { s: i, m: l, practice: o, titleRef: u }) : /* @__PURE__ */ c.jsx(Up, { s: i, m: l, practice: o, titleRef: u, stepRef: d })
  ] });
}
function Wp({ store: o }) {
  const i = Kh(o), l = Ut.filter((d) => d.id in o.data.practice.marked).length, u = {
    harjoitus: l ? `Harjoiteltu ${l}/${Ut.length} riffiä (itse kuitattu)` : "Mikrofoni on vapaaehtoinen: harjoitella voi myös ilman sitä.",
    peli: i.started ? `Läpäisty ${i.passed}/${i.total} riffiä · tähdet ${i.stars}/${i.total}` : "Aloita lyhyellä kahden sävelen opastuksella."
  };
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-view": "start", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(pi, { mode: null }),
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", tabIndex: -1, children: "Riffikaiku (beta)" }),
      /* @__PURE__ */ c.jsx("p", { children: "Lyhyitä, neljän sävelen kitarariffejä kuunneltavaksi ja soitettavaksi. Valitse, harjoitteletko omalla kitaralla vai pelaatko virtuaalikitaralla." })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "learning-grid riff-modes", children: ["harjoitus", "peli"].map((d, h) => /* @__PURE__ */ c.jsxs("a", { className: `learning-card riff-mode-card ${d}`, href: Hc(d), "data-testid": `mode-${d}`, children: [
      /* @__PURE__ */ c.jsx("span", { className: "learning-number", "aria-hidden": "true", children: String(h + 1).padStart(2, "0") }),
      /* @__PURE__ */ c.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ c.jsx("strong", { children: wr[d].card }),
        /* @__PURE__ */ c.jsx("span", { children: wr[d].description }),
        /* @__PURE__ */ c.jsx("span", { className: "riff-card-progress", children: u[d] }),
        /* @__PURE__ */ c.jsx("small", { children: wr[d].action })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, d)) }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Mikrofonin lupaa kysytään vasta, kun otat sen käyttöön harjoituksessa. Ääntä ei tallenneta eikä lähetetä mihinkään. Edistyminen tallentuu vain tähän selaimeen, ja harjoituksen ja pelin tulokset pidetään erillään." })
  ] });
}
const Pc = "musiikin-kartta:riffikaiku:v1", Kp = ["mic", "board"], Qp = ["listen", "learn", "recall"], Zc = "kotitreenit", Gp = () => ({
  version: 1,
  structure: Zc,
  tutorialDone: !1,
  input: "mic",
  fullBoard: !1,
  device: "",
  stats: { mic: {}, board: {} },
  results: [],
  run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } },
  levels: { mic: [], board: [] },
  practice: { marked: {}, heard: {}, last: null }
}), Qn = (o) => typeof o == "number" && Number.isFinite(o) && o >= 0, ef = (o) => o === "mic" || o === "board", Na = (o) => Number.isInteger(o) && Re.some((i) => i.number === o), qp = (o) => {
  const i = o;
  return !!i && typeof i == "object" && Qn(i.done) && Qn(i.solo) && Qn(i.lastAt) && i.solo <= i.done && (i.passed === void 0 || Qn(i.passed) && i.passed <= i.done && i.solo <= i.passed) && (i.best === void 0 || Qn(i.best));
}, hi = (o) => Ut.some((i) => i.id === o);
function Yp(o) {
  const i = { marked: {}, heard: {}, last: null }, l = o;
  if (!l || typeof l != "object") return i;
  for (const d of ["marked", "heard"]) {
    const h = l[d];
    if (h && typeof h == "object")
      for (const [v, y] of Object.entries(h)) hi(v) && Qn(y) && (i[d][v] = y);
  }
  const u = l.last;
  return u && typeof u == "object" && typeof u.riff == "string" && hi(u.riff) && Qp.includes(u.step) && (i.last = { riff: u.riff, step: u.step }), i;
}
const Xp = (o) => {
  const i = o;
  return !!i && typeof i == "object" && typeof i.riff == "string" && ef(i.input) && typeof i.hint == "boolean" && ["wrong", "octave", "replays", "ms", "at"].every((l) => Qn(i[l])) && (i.passed === void 0 || typeof i.passed == "boolean") && (i.level === void 0 || Number.isInteger(i.level) && i.level > 0);
};
function bp(o) {
  const i = Gp();
  if (!o) return i;
  let l;
  try {
    l = JSON.parse(o);
  } catch {
    return i;
  }
  const u = l;
  if (!u || u.version !== 1) return i;
  i.tutorialDone = u.tutorialDone === !0, i.fullBoard = u.fullBoard === !0, typeof u.device == "string" && (i.device = u.device.slice(0, 256)), ef(u.input) && (i.input = u.input);
  const d = u.structure !== Zc;
  for (const h of Kp) {
    const v = u.stats?.[h];
    if (v && typeof v == "object")
      for (const [_, N] of Object.entries(v)) qp(N) && (i.stats[h][_] = { ...N });
    const y = u.run?.[h];
    if (d) {
      y && y.level === 1 && Array.isArray(y.passed) && (i.run[h] = { level: 1, passed: Re[0].riffs.map((_) => _.id).filter((_) => y.passed.includes(_)) });
      continue;
    }
    if (y && Na(y.level) && Array.isArray(y.passed)) {
      const _ = Re.find((N) => N.number === y.level).riffs.map((N) => N.id);
      i.run[h] = { level: y.level, passed: _.filter((N) => y.passed.includes(N)) };
    }
    const j = u.levels?.[h];
    Array.isArray(j) && (i.levels[h] = [...new Set(j.filter(Na))].sort((_, N) => _ - N));
  }
  return i.practice = Yp(u.practice), Array.isArray(u.results) && (i.results = u.results.filter(Xp).slice(-300).map((h) => d && !h.legacy ? { ...h, legacy: !0 } : h)), i;
}
class Jp {
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(i) {
    this.storage = i;
    let l = null;
    try {
      l = i?.getItem(Pc) ?? null;
    } catch {
      l = null;
    }
    this.data = bp(l);
  }
  storage;
  data;
  save() {
    try {
      this.storage?.setItem(Pc, JSON.stringify(this.data));
    } catch {
    }
  }
  setInput(i) {
    this.data.input !== i && (this.data.input = i, this.save());
  }
  setFullBoard(i) {
    this.data.fullBoard !== i && (this.data.fullBoard = i, this.save());
  }
  setDevice(i) {
    this.data.device !== i && (this.data.device = i, this.save());
  }
  /** Tasot, jotka voi valita tasovalikosta: läpäistyt, nykyinen ja seuraava läpäisemätön. */
  unlockedLevels(i) {
    const l = Math.max(this.data.run[i].level, ...this.data.levels[i].map((u) => u + 1));
    return Re.map((u) => u.number).filter((u) => u <= l);
  }
  finishTutorial() {
    this.data.tutorialDone || (this.data.tutorialDone = !0, this.save());
  }
  run(i) {
    return this.data.run[i];
  }
  completedLevels(i) {
    return this.data.levels[i];
  }
  level(i) {
    return Re.find((l) => l.number === this.data.run[i].level);
  }
  /** Tasokierroksen seuraava läpäisemätön riffi, tai null kun kaikki kolme on läpäisty. */
  currentRiff(i) {
    const l = this.data.run[i];
    return this.level(i).riffs.find((u) => !l.passed.includes(u.id)) ?? null;
  }
  /** Aloittaa tason alusta (uusi kierros). Läpäistyt tasot säilyvät. */
  startLevel(i, l) {
    Na(l) && (this.data.run[i] = { level: l, passed: [] }, this.save());
  }
  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin,
   * ja tiedot uusista saavutuksista (ensimmäinen läpäisy, ensimmäinen tähti, uusi ennätys).
   */
  record(i) {
    if (i.riff === ci.id)
      return this.finishTutorial(), { levelComplete: !1, firstPass: !1, firstStar: !1, newBest: !1 };
    const { input: l } = i, u = i.passed === !0, d = this.data.stats[l], h = d[i.riff] ?? { done: 0, solo: 0, passed: 0 }, v = u && !i.hint, y = u && (h.passed ?? 0) === 0, j = v && h.solo === 0, _ = h.best !== void 0 && i.wrong < h.best, N = h.best === void 0 ? i.wrong : Math.min(h.best, i.wrong);
    d[i.riff] = {
      done: h.done + 1,
      passed: (h.passed ?? 0) + (u ? 1 : 0),
      solo: h.solo + (v ? 1 : 0),
      lastAt: i.at,
      best: N
    }, this.data.results = [...this.data.results, { ...i, level: i.level ?? Bc(i.riff)?.number }].slice(-300);
    let w = !1;
    const M = this.data.run[l], I = this.level(l);
    return u && I.riffs.some((C) => C.id === i.riff) && !M.passed.includes(i.riff) && (M.passed = I.riffs.map((C) => C.id).filter((C) => C === i.riff || M.passed.includes(C)), M.passed.length === I.riffs.length && (w = !0, this.data.levels[l].includes(I.number) || (this.data.levels[l] = [...this.data.levels[l], I.number].sort((C, z) => C - z)))), this.save(), { levelComplete: w, firstPass: y, firstStar: j, newBest: _ };
  }
  // ---- oikean kitaran riffiharjoitus ----
  /** Itse kuitattu (true) tai kuittaus poistettu (false). */
  setMarked(i, l, u = Date.now()) {
    !hi(i) || i in this.data.practice.marked === l || (l ? this.data.practice.marked[i] = u : delete this.data.practice.marked[i], this.save());
  }
  /** Mikrofoni kuuli koko riffin oikeassa järjestyksessä. */
  addHeard(i) {
    hi(i) && (this.data.practice.heard[i] = (this.data.practice.heard[i] ?? 0) + 1, this.save());
  }
  setPracticeLast(i, l) {
    const u = this.data.practice.last;
    !hi(i) || u?.riff === i && u.step === l || (this.data.practice.last = { riff: i, step: l }, this.save());
  }
}
function Zp() {
  try {
    return localStorage;
  } catch {
    return;
  }
}
function em({ store: o }) {
  const [i] = de.useState(() => new Wh(new Dc(), o));
  return de.useEffect(() => () => {
    i.dispose();
  }, [i]), /* @__PURE__ */ c.jsx(gp, { game: i });
}
function tm({ store: o }) {
  const [i] = de.useState(() => {
    const l = new Dc();
    return new Mp(l, new _p(l, o), o);
  });
  return de.useEffect(() => () => {
    i.dispose();
  }, [i]), /* @__PURE__ */ c.jsx(Hp, { practice: i });
}
function nm({ mode: o }) {
  const [i] = de.useState(() => new Jp(Zp()));
  return de.useEffect(() => {
    document.title = ap(o);
  }, [o]), o === "harjoitus" ? /* @__PURE__ */ c.jsx(tm, { store: i }) : o === "peli" ? /* @__PURE__ */ c.jsx(em, { store: i }) : /* @__PURE__ */ c.jsx(Wp, { store: i });
}
window.addEventListener("pagehide", () => Ph());
const Lc = document.getElementById("riffikaiku");
Lc && sh.createRoot(Lc).render(/* @__PURE__ */ c.jsx(de.StrictMode, { children: /* @__PURE__ */ c.jsx(nm, { mode: lp(location.search) }) }));
//# sourceMappingURL=app.js.map
