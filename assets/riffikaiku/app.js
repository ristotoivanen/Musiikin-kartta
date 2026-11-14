function Nd(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var lo = { exports: {} }, ti = {}, oo = { exports: {} }, we = {};
var nc;
function Md() {
  if (nc) return we;
  nc = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), T = Symbol.iterator;
  function L(y) {
    return y === null || typeof y != "object" ? null : (y = T && y[T] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var V = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, P = {};
  function D(y, C, ue) {
    this.props = y, this.context = C, this.refs = P, this.updater = ue || V;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(y, C) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, C, "setState");
  }, D.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = D.prototype;
  function A(y, C, ue) {
    this.props = y, this.context = C, this.refs = P, this.updater = ue || V;
  }
  var K = A.prototype = new Z();
  K.constructor = A, O(K, D.prototype), K.isPureReactComponent = !0;
  var b = Array.isArray, Q = Object.prototype.hasOwnProperty, H = { current: null }, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(y, C, ue) {
    var de, pe = {}, me = null, I = null;
    if (C != null) for (de in C.ref !== void 0 && (I = C.ref), C.key !== void 0 && (me = "" + C.key), C) Q.call(C, de) && !re.hasOwnProperty(de) && (pe[de] = C[de]);
    var $ = arguments.length - 2;
    if ($ === 1) pe.children = ue;
    else if (1 < $) {
      for (var z = Array($), X = 0; X < $; X++) z[X] = arguments[X + 2];
      pe.children = z;
    }
    if (y && y.defaultProps) for (de in $ = y.defaultProps, $) pe[de] === void 0 && (pe[de] = $[de]);
    return { $$typeof: u, type: y, key: me, ref: I, props: pe, _owner: H.current };
  }
  function Me(y, C) {
    return { $$typeof: u, type: y.type, key: C, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function xe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function We(y) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(ue) {
      return C[ue];
    });
  }
  var De = /\/+/g;
  function Re(y, C) {
    return typeof y == "object" && y !== null && y.key != null ? We("" + y.key) : C.toString(36);
  }
  function Be(y, C, ue, de, pe) {
    var me = typeof y;
    (me === "undefined" || me === "boolean") && (y = null);
    var I = !1;
    if (y === null) I = !0;
    else switch (me) {
      case "string":
      case "number":
        I = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case u:
          case s:
            I = !0;
        }
    }
    if (I) return I = y, pe = pe(I), y = de === "" ? "." + Re(I, 0) : de, b(pe) ? (ue = "", y != null && (ue = y.replace(De, "$&/") + "/"), Be(pe, C, ue, "", function(X) {
      return X;
    })) : pe != null && (xe(pe) && (pe = Me(pe, ue + (!pe.key || I && I.key === pe.key ? "" : ("" + pe.key).replace(De, "$&/") + "/") + y)), C.push(pe)), 1;
    if (I = 0, de = de === "" ? "." : de + ":", b(y)) for (var $ = 0; $ < y.length; $++) {
      me = y[$];
      var z = de + Re(me, $);
      I += Be(me, C, ue, z, pe);
    }
    else if (z = L(y), typeof z == "function") for (y = z.call(y), $ = 0; !(me = y.next()).done; ) me = me.value, z = de + Re(me, $++), I += Be(me, C, ue, z, pe);
    else if (me === "object") throw C = String(y), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    return I;
  }
  function Ke(y, C, ue) {
    if (y == null) return y;
    var de = [], pe = 0;
    return Be(y, de, "", "", function(me) {
      return C.call(ue, me, pe++);
    }), de;
  }
  function Le(y) {
    if (y._status === -1) {
      var C = y._result;
      C = C(), C.then(function(ue) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = ue);
      }, function(ue) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = ue);
      }), y._status === -1 && (y._status = 0, y._result = C);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Ee = { current: null }, B = { transition: null }, ee = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: B, ReactCurrentOwner: H };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return we.Children = { map: Ke, forEach: function(y, C, ue) {
    Ke(y, function() {
      C.apply(this, arguments);
    }, ue);
  }, count: function(y) {
    var C = 0;
    return Ke(y, function() {
      C++;
    }), C;
  }, toArray: function(y) {
    return Ke(y, function(C) {
      return C;
    }) || [];
  }, only: function(y) {
    if (!xe(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, we.Component = D, we.Fragment = o, we.Profiler = f, we.PureComponent = A, we.StrictMode = c, we.Suspense = E, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee, we.act = U, we.cloneElement = function(y, C, ue) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var de = O({}, y.props), pe = y.key, me = y.ref, I = y._owner;
    if (C != null) {
      if (C.ref !== void 0 && (me = C.ref, I = H.current), C.key !== void 0 && (pe = "" + C.key), y.type && y.type.defaultProps) var $ = y.type.defaultProps;
      for (z in C) Q.call(C, z) && !re.hasOwnProperty(z) && (de[z] = C[z] === void 0 && $ !== void 0 ? $[z] : C[z]);
    }
    var z = arguments.length - 2;
    if (z === 1) de.children = ue;
    else if (1 < z) {
      $ = Array(z);
      for (var X = 0; X < z; X++) $[X] = arguments[X + 2];
      de.children = $;
    }
    return { $$typeof: u, type: y.type, key: pe, ref: me, props: de, _owner: I };
  }, we.createContext = function(y) {
    return y = { $$typeof: w, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: h, _context: y }, y.Consumer = y;
  }, we.createElement = he, we.createFactory = function(y) {
    var C = he.bind(null, y);
    return C.type = y, C;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(y) {
    return { $$typeof: x, render: y };
  }, we.isValidElement = xe, we.lazy = function(y) {
    return { $$typeof: j, _payload: { _status: -1, _result: y }, _init: Le };
  }, we.memo = function(y, C) {
    return { $$typeof: _, type: y, compare: C === void 0 ? null : C };
  }, we.startTransition = function(y) {
    var C = B.transition;
    B.transition = {};
    try {
      y();
    } finally {
      B.transition = C;
    }
  }, we.unstable_act = U, we.useCallback = function(y, C) {
    return Ee.current.useCallback(y, C);
  }, we.useContext = function(y) {
    return Ee.current.useContext(y);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(y) {
    return Ee.current.useDeferredValue(y);
  }, we.useEffect = function(y, C) {
    return Ee.current.useEffect(y, C);
  }, we.useId = function() {
    return Ee.current.useId();
  }, we.useImperativeHandle = function(y, C, ue) {
    return Ee.current.useImperativeHandle(y, C, ue);
  }, we.useInsertionEffect = function(y, C) {
    return Ee.current.useInsertionEffect(y, C);
  }, we.useLayoutEffect = function(y, C) {
    return Ee.current.useLayoutEffect(y, C);
  }, we.useMemo = function(y, C) {
    return Ee.current.useMemo(y, C);
  }, we.useReducer = function(y, C, ue) {
    return Ee.current.useReducer(y, C, ue);
  }, we.useRef = function(y) {
    return Ee.current.useRef(y);
  }, we.useState = function(y) {
    return Ee.current.useState(y);
  }, we.useSyncExternalStore = function(y, C, ue) {
    return Ee.current.useSyncExternalStore(y, C, ue);
  }, we.useTransition = function() {
    return Ee.current.useTransition();
  }, we.version = "18.3.1", we;
}
var rc;
function xo() {
  return rc || (rc = 1, oo.exports = Md()), oo.exports;
}
var ic;
function Rd() {
  if (ic) return ti;
  ic = 1;
  var u = xo(), s = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(x, E, _) {
    var j, T = {}, L = null, V = null;
    _ !== void 0 && (L = "" + _), E.key !== void 0 && (L = "" + E.key), E.ref !== void 0 && (V = E.ref);
    for (j in E) c.call(E, j) && !h.hasOwnProperty(j) && (T[j] = E[j]);
    if (x && x.defaultProps) for (j in E = x.defaultProps, E) T[j] === void 0 && (T[j] = E[j]);
    return { $$typeof: s, type: x, key: L, ref: V, props: T, _owner: f.current };
  }
  return ti.Fragment = o, ti.jsx = w, ti.jsxs = w, ti;
}
var sc;
function Ld() {
  return sc || (sc = 1, lo.exports = Rd()), lo.exports;
}
var p = Ld(), je = xo(), vs = {}, ao = { exports: {} }, xt = {}, uo = { exports: {} }, co = {};
var lc;
function Pd() {
  return lc || (lc = 1, (function(u) {
    function s(B, ee) {
      var U = B.length;
      B.push(ee);
      e: for (; 0 < U; ) {
        var y = U - 1 >>> 1, C = B[y];
        if (0 < f(C, ee)) B[y] = ee, B[U] = C, U = y;
        else break e;
      }
    }
    function o(B) {
      return B.length === 0 ? null : B[0];
    }
    function c(B) {
      if (B.length === 0) return null;
      var ee = B[0], U = B.pop();
      if (U !== ee) {
        B[0] = U;
        e: for (var y = 0, C = B.length, ue = C >>> 1; y < ue; ) {
          var de = 2 * (y + 1) - 1, pe = B[de], me = de + 1, I = B[me];
          if (0 > f(pe, U)) me < C && 0 > f(I, pe) ? (B[y] = I, B[me] = U, y = me) : (B[y] = pe, B[de] = U, y = de);
          else if (me < C && 0 > f(I, U)) B[y] = I, B[me] = U, y = me;
          else break e;
        }
      }
      return ee;
    }
    function f(B, ee) {
      var U = B.sortIndex - ee.sortIndex;
      return U !== 0 ? U : B.id - ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var w = Date, x = w.now();
      u.unstable_now = function() {
        return w.now() - x;
      };
    }
    var E = [], _ = [], j = 1, T = null, L = 3, V = !1, O = !1, P = !1, D = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function K(B) {
      for (var ee = o(_); ee !== null; ) {
        if (ee.callback === null) c(_);
        else if (ee.startTime <= B) c(_), ee.sortIndex = ee.expirationTime, s(E, ee);
        else break;
        ee = o(_);
      }
    }
    function b(B) {
      if (P = !1, K(B), !O) if (o(E) !== null) O = !0, Le(Q);
      else {
        var ee = o(_);
        ee !== null && Ee(b, ee.startTime - B);
      }
    }
    function Q(B, ee) {
      O = !1, P && (P = !1, Z(he), he = -1), V = !0;
      var U = L;
      try {
        for (K(ee), T = o(E); T !== null && (!(T.expirationTime > ee) || B && !We()); ) {
          var y = T.callback;
          if (typeof y == "function") {
            T.callback = null, L = T.priorityLevel;
            var C = y(T.expirationTime <= ee);
            ee = u.unstable_now(), typeof C == "function" ? T.callback = C : T === o(E) && c(E), K(ee);
          } else c(E);
          T = o(E);
        }
        if (T !== null) var ue = !0;
        else {
          var de = o(_);
          de !== null && Ee(b, de.startTime - ee), ue = !1;
        }
        return ue;
      } finally {
        T = null, L = U, V = !1;
      }
    }
    var H = !1, re = null, he = -1, Me = 5, xe = -1;
    function We() {
      return !(u.unstable_now() - xe < Me);
    }
    function De() {
      if (re !== null) {
        var B = u.unstable_now();
        xe = B;
        var ee = !0;
        try {
          ee = re(!0, B);
        } finally {
          ee ? Re() : (H = !1, re = null);
        }
      } else H = !1;
    }
    var Re;
    if (typeof A == "function") Re = function() {
      A(De);
    };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), Ke = Be.port2;
      Be.port1.onmessage = De, Re = function() {
        Ke.postMessage(null);
      };
    } else Re = function() {
      D(De, 0);
    };
    function Le(B) {
      re = B, H || (H = !0, Re());
    }
    function Ee(B, ee) {
      he = D(function() {
        B(u.unstable_now());
      }, ee);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, u.unstable_continueExecution = function() {
      O || V || (O = !0, Le(Q));
    }, u.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Me = 0 < B ? Math.floor(1e3 / B) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, u.unstable_getFirstCallbackNode = function() {
      return o(E);
    }, u.unstable_next = function(B) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = L;
      }
      var U = L;
      L = ee;
      try {
        return B();
      } finally {
        L = U;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(B, ee) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var U = L;
      L = B;
      try {
        return ee();
      } finally {
        L = U;
      }
    }, u.unstable_scheduleCallback = function(B, ee, U) {
      var y = u.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? y + U : y) : U = y, B) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = U + C, B = { id: j++, callback: ee, priorityLevel: B, startTime: U, expirationTime: C, sortIndex: -1 }, U > y ? (B.sortIndex = U, s(_, B), o(E) === null && B === o(_) && (P ? (Z(he), he = -1) : P = !0, Ee(b, U - y))) : (B.sortIndex = C, s(E, B), O || V || (O = !0, Le(Q))), B;
    }, u.unstable_shouldYield = We, u.unstable_wrapCallback = function(B) {
      var ee = L;
      return function() {
        var U = L;
        L = ee;
        try {
          return B.apply(this, arguments);
        } finally {
          L = U;
        }
      };
    };
  })(co)), co;
}
var oc;
function Ad() {
  return oc || (oc = 1, uo.exports = Pd()), uo.exports;
}
var ac;
function zd() {
  if (ac) return xt;
  ac = 1;
  var u = xo(), s = Ad();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), f = {};
  function h(e, t) {
    w(e, t), w(e + "Capture", t);
  }
  function w(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var x = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), E = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, j = {}, T = {};
  function L(e) {
    return E.call(T, e) ? !0 : E.call(j, e) ? !1 : _.test(e) ? T[e] = !0 : (j[e] = !0, !1);
  }
  function V(e, t, n, r) {
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
  function O(e, t, n, r) {
    if (t === null || typeof t > "u" || V(e, t, n, r)) return !0;
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
  function P(e, t, n, r, i, l, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = a;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    D[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    D[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    D[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    D[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    D[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    D[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    D[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    D[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    D[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Z = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Z,
      A
    );
    D[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Z, A);
    D[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Z, A);
    D[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    D[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    D[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function K(e, t, n, r) {
    var i = D.hasOwnProperty(t) ? D[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, i, r) && (n = null), r || i === null ? L(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var b = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = /* @__PURE__ */ Symbol.for("react.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), re = /* @__PURE__ */ Symbol.for("react.fragment"), he = /* @__PURE__ */ Symbol.for("react.strict_mode"), Me = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.provider"), We = /* @__PURE__ */ Symbol.for("react.context"), De = /* @__PURE__ */ Symbol.for("react.forward_ref"), Re = /* @__PURE__ */ Symbol.for("react.suspense"), Be = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ke = /* @__PURE__ */ Symbol.for("react.memo"), Le = /* @__PURE__ */ Symbol.for("react.lazy"), Ee = /* @__PURE__ */ Symbol.for("react.offscreen"), B = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, y;
  function C(e) {
    if (y === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      y = t && t[1] || "";
    }
    return `
` + y + e;
  }
  var ue = !1;
  function de(e, t) {
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
        } catch (S) {
          var r = S;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (S) {
          r = S;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (var i = S.stack.split(`
`), l = r.stack.split(`
`), a = i.length - 1, d = l.length - 1; 1 <= a && 0 <= d && i[a] !== l[d]; ) d--;
        for (; 1 <= a && 0 <= d; a--, d--) if (i[a] !== l[d]) {
          if (a !== 1 || d !== 1)
            do
              if (a--, d--, 0 > d || i[a] !== l[d]) {
                var m = `
` + i[a].replace(" at new ", " at ");
                return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m;
              }
            while (1 <= a && 0 <= d);
          break;
        }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case H:
        return "Portal";
      case Me:
        return "Profiler";
      case he:
        return "StrictMode";
      case Re:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case We:
        return (e.displayName || "Context") + ".Consumer";
      case xe:
        return (e._context.displayName || "Context") + ".Provider";
      case De:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ke:
        return t = e.displayName || null, t !== null ? t : me(e.type) || "Memo";
      case Le:
        t = e._payload, e = e._init;
        try {
          return me(e(t));
        } catch {
        }
    }
    return null;
  }
  function I(e) {
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
        return me(t);
      case 8:
        return t === he ? "StrictMode" : "Mode";
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
  function $(e) {
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
  function z(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function X(e) {
    var t = z(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(a) {
        r = "" + a, l.call(this, a);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(a) {
        r = "" + a;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ce(e) {
    e._valueTracker || (e._valueTracker = X(e));
  }
  function te(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = z(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  function ve(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = $(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ge(e, t) {
    t = t.checked, t != null && K(e, "checked", t, !1);
  }
  function Te(e, t) {
    ge(e, t);
    var n = $(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Fe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fe(e, t.type, $(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Fe(e, t, n) {
    (t !== "number" || ie(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var $e = Array.isArray;
  function Xe(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + $(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ve(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if ($e(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: $(n) };
  }
  function Ce(e, t) {
    var n = $(t.value), r = $(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Je(e) {
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
  function Cn(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var At, Xt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (At = At || document.createElement("div"), At.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = At.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Ut(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ht = {
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
  }, gr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ht).forEach(function(e) {
    gr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Ht[t] = Ht[e];
    });
  });
  function oe(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ht.hasOwnProperty(e) && Ht[e] ? ("" + t).trim() : t + "px";
  }
  function Jt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = oe(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var ae = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ye(e, t) {
    if (t) {
      if (ae[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function ke(e, t) {
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
  var Ae = null;
  function et(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Zt = null, ht = null, Wt = null;
  function Wn(e) {
    if (e = $r(e)) {
      if (typeof Zt != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Li(t), Zt(e.stateNode, e.type, t));
    }
  }
  function Kn(e) {
    ht ? Wt ? Wt.push(e) : Wt = [e] : ht = e;
  }
  function Qn() {
    if (ht) {
      var e = ht, t = Wt;
      if (Wt = ht = null, Wn(e), t) for (e = 0; e < t.length; e++) Wn(t[e]);
    }
  }
  function So(e, t) {
    return e(t);
  }
  function Eo() {
  }
  var Es = !1;
  function _o(e, t, n) {
    if (Es) return e(t, n);
    Es = !0;
    try {
      return So(e, t, n);
    } finally {
      Es = !1, (ht !== null || Wt !== null) && (Eo(), Qn());
    }
  }
  function kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Li(n);
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
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var _s = !1;
  if (x) try {
    var wr = {};
    Object.defineProperty(wr, "passive", { get: function() {
      _s = !0;
    } }), window.addEventListener("test", wr, wr), window.removeEventListener("test", wr, wr);
  } catch {
    _s = !1;
  }
  function Ac(e, t, n, r, i, l, a, d, m) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (M) {
      this.onError(M);
    }
  }
  var xr = !1, ui = null, ci = !1, Ts = null, zc = { onError: function(e) {
    xr = !0, ui = e;
  } };
  function Ic(e, t, n, r, i, l, a, d, m) {
    xr = !1, ui = null, Ac.apply(zc, arguments);
  }
  function Fc(e, t, n, r, i, l, a, d, m) {
    if (Ic.apply(this, arguments), xr) {
      if (xr) {
        var S = ui;
        xr = !1, ui = null;
      } else throw Error(o(198));
      ci || (ci = !0, Ts = S);
    }
  }
  function Nn(e) {
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
  function To(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function jo(e) {
    if (Nn(e) !== e) throw Error(o(188));
  }
  function Oc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var l = i.alternate;
      if (l === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === l.child) {
        for (l = i.child; l; ) {
          if (l === n) return jo(i), e;
          if (l === r) return jo(i), t;
          l = l.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = i, r = l;
      else {
        for (var a = !1, d = i.child; d; ) {
          if (d === n) {
            a = !0, n = i, r = l;
            break;
          }
          if (d === r) {
            a = !0, r = i, n = l;
            break;
          }
          d = d.sibling;
        }
        if (!a) {
          for (d = l.child; d; ) {
            if (d === n) {
              a = !0, n = l, r = i;
              break;
            }
            if (d === r) {
              a = !0, r = l, n = i;
              break;
            }
            d = d.sibling;
          }
          if (!a) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function Co(e) {
    return e = Oc(e), e !== null ? No(e) : null;
  }
  function No(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = No(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Mo = s.unstable_scheduleCallback, Ro = s.unstable_cancelCallback, Dc = s.unstable_shouldYield, Bc = s.unstable_requestPaint, Ze = s.unstable_now, $c = s.unstable_getCurrentPriorityLevel, js = s.unstable_ImmediatePriority, Lo = s.unstable_UserBlockingPriority, fi = s.unstable_NormalPriority, Vc = s.unstable_LowPriority, Po = s.unstable_IdlePriority, di = null, Kt = null;
  function Uc(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(di, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var zt = Math.clz32 ? Math.clz32 : Kc, Hc = Math.log, Wc = Math.LN2;
  function Kc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hc(e) / Wc | 0) | 0;
  }
  var hi = 64, pi = 4194304;
  function Sr(e) {
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
  function mi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, l = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var d = a & ~i;
      d !== 0 ? r = Sr(d) : (l &= a, l !== 0 && (r = Sr(l)));
    } else a = n & ~i, a !== 0 ? r = Sr(a) : l !== 0 && (r = Sr(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - zt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function Qc(e, t) {
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
  function Gc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var a = 31 - zt(l), d = 1 << a, m = i[a];
      m === -1 ? ((d & n) === 0 || (d & r) !== 0) && (i[a] = Qc(d, t)) : m <= t && (e.expiredLanes |= d), l &= ~d;
    }
  }
  function Cs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ao() {
    var e = hi;
    return hi <<= 1, (hi & 4194240) === 0 && (hi = 64), e;
  }
  function Ns(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Er(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - zt(t), e[t] = n;
  }
  function qc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - zt(n), l = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l;
    }
  }
  function Ms(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - zt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Ne = 0;
  function zo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Io, Rs, Fo, Oo, Do, Ls = !1, vi = [], an = null, un = null, cn = null, _r = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), fn = [], Yc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Bo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        an = null;
        break;
      case "dragenter":
      case "dragleave":
        un = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        _r.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tr.delete(t.pointerId);
    }
  }
  function jr(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }, t !== null && (t = $r(t), t !== null && Rs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Xc(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return an = jr(an, e, t, n, r, i), !0;
      case "dragenter":
        return un = jr(un, e, t, n, r, i), !0;
      case "mouseover":
        return cn = jr(cn, e, t, n, r, i), !0;
      case "pointerover":
        var l = i.pointerId;
        return _r.set(l, jr(_r.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return l = i.pointerId, Tr.set(l, jr(Tr.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function $o(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = To(n), t !== null) {
            e.blockedOn = t, Do(e.priority, function() {
              Fo(n);
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
  function yi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = As(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ae = r, n.target.dispatchEvent(r), Ae = null;
      } else return t = $r(n), t !== null && Rs(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Vo(e, t, n) {
    yi(e) && n.delete(t);
  }
  function Jc() {
    Ls = !1, an !== null && yi(an) && (an = null), un !== null && yi(un) && (un = null), cn !== null && yi(cn) && (cn = null), _r.forEach(Vo), Tr.forEach(Vo);
  }
  function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ls || (Ls = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Jc)));
  }
  function Nr(e) {
    function t(i) {
      return Cr(i, e);
    }
    if (0 < vi.length) {
      Cr(vi[0], e);
      for (var n = 1; n < vi.length; n++) {
        var r = vi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (an !== null && Cr(an, e), un !== null && Cr(un, e), cn !== null && Cr(cn, e), _r.forEach(t), Tr.forEach(t), n = 0; n < fn.length; n++) r = fn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < fn.length && (n = fn[0], n.blockedOn === null); ) $o(n), n.blockedOn === null && fn.shift();
  }
  var Gn = b.ReactCurrentBatchConfig, gi = !0;
  function Zc(e, t, n, r) {
    var i = Ne, l = Gn.transition;
    Gn.transition = null;
    try {
      Ne = 1, Ps(e, t, n, r);
    } finally {
      Ne = i, Gn.transition = l;
    }
  }
  function bc(e, t, n, r) {
    var i = Ne, l = Gn.transition;
    Gn.transition = null;
    try {
      Ne = 4, Ps(e, t, n, r);
    } finally {
      Ne = i, Gn.transition = l;
    }
  }
  function Ps(e, t, n, r) {
    if (gi) {
      var i = As(e, t, n, r);
      if (i === null) Xs(e, t, r, ki, n), Bo(e, r);
      else if (Xc(i, e, t, n, r)) r.stopPropagation();
      else if (Bo(e, r), t & 4 && -1 < Yc.indexOf(e)) {
        for (; i !== null; ) {
          var l = $r(i);
          if (l !== null && Io(l), l = As(e, t, n, r), l === null && Xs(e, t, r, ki, n), l === i) break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else Xs(e, t, r, null, n);
    }
  }
  var ki = null;
  function As(e, t, n, r) {
    if (ki = null, e = et(r), e = Mn(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = To(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ki = e, null;
  }
  function Uo(e) {
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
        switch ($c()) {
          case js:
            return 1;
          case Lo:
            return 4;
          case fi:
          case Vc:
            return 16;
          case Po:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var dn = null, zs = null, wi = null;
  function Ho() {
    if (wi) return wi;
    var e, t = zs, n = t.length, r, i = "value" in dn ? dn.value : dn.textContent, l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[l - r]; r++) ;
    return wi = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function xi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Si() {
    return !0;
  }
  function Wo() {
    return !1;
  }
  function St(e) {
    function t(n, r, i, l, a) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null;
      for (var d in e) e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(l) : l[d]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Si : Wo, this.isPropagationStopped = Wo, this;
    }
    return U(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Si);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Si);
    }, persist: function() {
    }, isPersistent: Si }), t;
  }
  var qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Is = St(qn), Mr = U({}, qn, { view: 0, detail: 0 }), ef = St(Mr), Fs, Os, Rr, Ei = U({}, Mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bs, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Rr && (Rr && e.type === "mousemove" ? (Fs = e.screenX - Rr.screenX, Os = e.screenY - Rr.screenY) : Os = Fs = 0, Rr = e), Fs);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Os;
  } }), Ko = St(Ei), tf = U({}, Ei, { dataTransfer: 0 }), nf = St(tf), rf = U({}, Mr, { relatedTarget: 0 }), Ds = St(rf), sf = U({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lf = St(sf), of = U({}, qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), af = St(of), uf = U({}, qn, { data: 0 }), Qo = St(uf), cf = {
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
  }, ff = {
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
  }, df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = df[e]) ? !!t[e] : !1;
  }
  function Bs() {
    return hf;
  }
  var pf = U({}, Mr, { key: function(e) {
    if (e.key) {
      var t = cf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ff[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bs, charCode: function(e) {
    return e.type === "keypress" ? xi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), mf = St(pf), vf = U({}, Ei, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Go = St(vf), yf = U({}, Mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bs }), gf = St(yf), kf = U({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wf = St(kf), xf = U({}, Ei, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sf = St(xf), Ef = [9, 13, 27, 32], $s = x && "CompositionEvent" in window, Lr = null;
  x && "documentMode" in document && (Lr = document.documentMode);
  var _f = x && "TextEvent" in window && !Lr, qo = x && (!$s || Lr && 8 < Lr && 11 >= Lr), Yo = " ", Xo = !1;
  function Jo(e, t) {
    switch (e) {
      case "keyup":
        return Ef.indexOf(t.keyCode) !== -1;
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
  function Zo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Yn = !1;
  function Tf(e, t) {
    switch (e) {
      case "compositionend":
        return Zo(t);
      case "keypress":
        return t.which !== 32 ? null : (Xo = !0, Yo);
      case "textInput":
        return e = t.data, e === Yo && Xo ? null : e;
      default:
        return null;
    }
  }
  function jf(e, t) {
    if (Yn) return e === "compositionend" || !$s && Jo(e, t) ? (e = Ho(), wi = zs = dn = null, Yn = !1, e) : null;
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
        return qo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Cf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cf[e.type] : t === "textarea";
  }
  function ea(e, t, n, r) {
    Kn(r), t = Ni(t, "onChange"), 0 < t.length && (n = new Is("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Pr = null, Ar = null;
  function Nf(e) {
    ga(e, 0);
  }
  function _i(e) {
    var t = er(e);
    if (te(t)) return e;
  }
  function Mf(e, t) {
    if (e === "change") return t;
  }
  var ta = !1;
  if (x) {
    var Vs;
    if (x) {
      var Us = "oninput" in document;
      if (!Us) {
        var na = document.createElement("div");
        na.setAttribute("oninput", "return;"), Us = typeof na.oninput == "function";
      }
      Vs = Us;
    } else Vs = !1;
    ta = Vs && (!document.documentMode || 9 < document.documentMode);
  }
  function ra() {
    Pr && (Pr.detachEvent("onpropertychange", ia), Ar = Pr = null);
  }
  function ia(e) {
    if (e.propertyName === "value" && _i(Ar)) {
      var t = [];
      ea(t, Ar, e, et(e)), _o(Nf, t);
    }
  }
  function Rf(e, t, n) {
    e === "focusin" ? (ra(), Pr = t, Ar = n, Pr.attachEvent("onpropertychange", ia)) : e === "focusout" && ra();
  }
  function Lf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return _i(Ar);
  }
  function Pf(e, t) {
    if (e === "click") return _i(t);
  }
  function Af(e, t) {
    if (e === "input" || e === "change") return _i(t);
  }
  function zf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var It = typeof Object.is == "function" ? Object.is : zf;
  function zr(e, t) {
    if (It(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!E.call(t, i) || !It(e[i], t[i])) return !1;
    }
    return !0;
  }
  function sa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function la(e, t) {
    var n = sa(e);
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
      n = sa(n);
    }
  }
  function oa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function aa() {
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
  function Hs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function If(e) {
    var t = aa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && oa(n.ownerDocument.documentElement, n)) {
      if (r !== null && Hs(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, l = Math.min(r.start, i);
          r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = la(n, l);
          var a = la(
            n,
            r
          );
          i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ff = x && "documentMode" in document && 11 >= document.documentMode, Xn = null, Ws = null, Ir = null, Ks = !1;
  function ua(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ks || Xn == null || Xn !== ie(r) || (r = Xn, "selectionStart" in r && Hs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && zr(Ir, r) || (Ir = r, r = Ni(Ws, "onSelect"), 0 < r.length && (t = new Is("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xn)));
  }
  function Ti(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Ti("Animation", "AnimationEnd"), animationiteration: Ti("Animation", "AnimationIteration"), animationstart: Ti("Animation", "AnimationStart"), transitionend: Ti("Transition", "TransitionEnd") }, Qs = {}, ca = {};
  x && (ca = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function ji(e) {
    if (Qs[e]) return Qs[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ca) return Qs[e] = t[n];
    return e;
  }
  var fa = ji("animationend"), da = ji("animationiteration"), ha = ji("animationstart"), pa = ji("transitionend"), ma = /* @__PURE__ */ new Map(), va = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hn(e, t) {
    ma.set(e, t), h(t, [e]);
  }
  for (var Gs = 0; Gs < va.length; Gs++) {
    var qs = va[Gs], Of = qs.toLowerCase(), Df = qs[0].toUpperCase() + qs.slice(1);
    hn(Of, "on" + Df);
  }
  hn(fa, "onAnimationEnd"), hn(da, "onAnimationIteration"), hn(ha, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(pa, "onTransitionEnd"), w("onMouseEnter", ["mouseout", "mouseover"]), w("onMouseLeave", ["mouseout", "mouseover"]), w("onPointerEnter", ["pointerout", "pointerover"]), w("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
  function ya(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Fc(r, t, void 0, e), e.currentTarget = null;
  }
  function ga(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t) for (var a = r.length - 1; 0 <= a; a--) {
          var d = r[a], m = d.instance, S = d.currentTarget;
          if (d = d.listener, m !== l && i.isPropagationStopped()) break e;
          ya(i, d, S), l = m;
        }
        else for (a = 0; a < r.length; a++) {
          if (d = r[a], m = d.instance, S = d.currentTarget, d = d.listener, m !== l && i.isPropagationStopped()) break e;
          ya(i, d, S), l = m;
        }
      }
    }
    if (ci) throw e = Ts, ci = !1, Ts = null, e;
  }
  function ze(e, t) {
    var n = t[nl];
    n === void 0 && (n = t[nl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ka(t, e, 2, !1), n.add(r));
  }
  function Ys(e, t, n) {
    var r = 0;
    t && (r |= 4), ka(n, e, r, t);
  }
  var Ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Or(e) {
    if (!e[Ci]) {
      e[Ci] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Bf.has(n) || Ys(n, !1, e), Ys(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ci] || (t[Ci] = !0, Ys("selectionchange", !1, t));
    }
  }
  function ka(e, t, n, r) {
    switch (Uo(t)) {
      case 1:
        var i = Zc;
        break;
      case 4:
        i = bc;
        break;
      default:
        i = Ps;
    }
    n = i.bind(null, t, n, e), i = void 0, !_s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Xs(e, t, n, r, i) {
    var l = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var d = r.stateNode.containerInfo;
        if (d === i || d.nodeType === 8 && d.parentNode === i) break;
        if (a === 4) for (a = r.return; a !== null; ) {
          var m = a.tag;
          if ((m === 3 || m === 4) && (m = a.stateNode.containerInfo, m === i || m.nodeType === 8 && m.parentNode === i)) return;
          a = a.return;
        }
        for (; d !== null; ) {
          if (a = Mn(d), a === null) return;
          if (m = a.tag, m === 5 || m === 6) {
            r = l = a;
            continue e;
          }
          d = d.parentNode;
        }
      }
      r = r.return;
    }
    _o(function() {
      var S = l, M = et(n), R = [];
      e: {
        var N = ma.get(e);
        if (N !== void 0) {
          var W = Is, q = e;
          switch (e) {
            case "keypress":
              if (xi(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = mf;
              break;
            case "focusin":
              q = "focus", W = Ds;
              break;
            case "focusout":
              q = "blur", W = Ds;
              break;
            case "beforeblur":
            case "afterblur":
              W = Ds;
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
              W = Ko;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = nf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = gf;
              break;
            case fa:
            case da:
            case ha:
              W = lf;
              break;
            case pa:
              W = wf;
              break;
            case "scroll":
              W = ef;
              break;
            case "wheel":
              W = Sf;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = af;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Go;
          }
          var Y = (t & 4) !== 0, be = !Y && e === "scroll", g = Y ? N !== null ? N + "Capture" : null : N;
          Y = [];
          for (var v = S, k; v !== null; ) {
            k = v;
            var F = k.stateNode;
            if (k.tag === 5 && F !== null && (k = F, g !== null && (F = kr(v, g), F != null && Y.push(Dr(v, F, k)))), be) break;
            v = v.return;
          }
          0 < Y.length && (N = new W(N, q, null, n, M), R.push({ event: N, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", N && n !== Ae && (q = n.relatedTarget || n.fromElement) && (Mn(q) || q[bt])) break e;
          if ((W || N) && (N = M.window === M ? M : (N = M.ownerDocument) ? N.defaultView || N.parentWindow : window, W ? (q = n.relatedTarget || n.toElement, W = S, q = q ? Mn(q) : null, q !== null && (be = Nn(q), q !== be || q.tag !== 5 && q.tag !== 6) && (q = null)) : (W = null, q = S), W !== q)) {
            if (Y = Ko, F = "onMouseLeave", g = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (Y = Go, F = "onPointerLeave", g = "onPointerEnter", v = "pointer"), be = W == null ? N : er(W), k = q == null ? N : er(q), N = new Y(F, v + "leave", W, n, M), N.target = be, N.relatedTarget = k, F = null, Mn(M) === S && (Y = new Y(g, v + "enter", q, n, M), Y.target = k, Y.relatedTarget = be, F = Y), be = F, W && q) t: {
              for (Y = W, g = q, v = 0, k = Y; k; k = Zn(k)) v++;
              for (k = 0, F = g; F; F = Zn(F)) k++;
              for (; 0 < v - k; ) Y = Zn(Y), v--;
              for (; 0 < k - v; ) g = Zn(g), k--;
              for (; v--; ) {
                if (Y === g || g !== null && Y === g.alternate) break t;
                Y = Zn(Y), g = Zn(g);
              }
              Y = null;
            }
            else Y = null;
            W !== null && wa(R, N, W, Y, !1), q !== null && be !== null && wa(R, be, q, Y, !0);
          }
        }
        e: {
          if (N = S ? er(S) : window, W = N.nodeName && N.nodeName.toLowerCase(), W === "select" || W === "input" && N.type === "file") var J = Mf;
          else if (bo(N)) if (ta) J = Af;
          else {
            J = Lf;
            var se = Rf;
          }
          else (W = N.nodeName) && W.toLowerCase() === "input" && (N.type === "checkbox" || N.type === "radio") && (J = Pf);
          if (J && (J = J(e, S))) {
            ea(R, J, n, M);
            break e;
          }
          se && se(e, N, S), e === "focusout" && (se = N._wrapperState) && se.controlled && N.type === "number" && Fe(N, "number", N.value);
        }
        switch (se = S ? er(S) : window, e) {
          case "focusin":
            (bo(se) || se.contentEditable === "true") && (Xn = se, Ws = S, Ir = null);
            break;
          case "focusout":
            Ir = Ws = Xn = null;
            break;
          case "mousedown":
            Ks = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ks = !1, ua(R, n, M);
            break;
          case "selectionchange":
            if (Ff) break;
          case "keydown":
          case "keyup":
            ua(R, n, M);
        }
        var le;
        if ($s) e: {
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
        else Yn ? Jo(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (qo && n.locale !== "ko" && (Yn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Yn && (le = Ho()) : (dn = M, zs = "value" in dn ? dn.value : dn.textContent, Yn = !0)), se = Ni(S, fe), 0 < se.length && (fe = new Qo(fe, e, null, n, M), R.push({ event: fe, listeners: se }), le ? fe.data = le : (le = Zo(n), le !== null && (fe.data = le)))), (le = _f ? Tf(e, n) : jf(e, n)) && (S = Ni(S, "onBeforeInput"), 0 < S.length && (M = new Qo("onBeforeInput", "beforeinput", null, n, M), R.push({ event: M, listeners: S }), M.data = le));
      }
      ga(R, t);
    });
  }
  function Dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ni(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, l = i.stateNode;
      i.tag === 5 && l !== null && (i = l, l = kr(e, n), l != null && r.unshift(Dr(e, l, i)), l = kr(e, t), l != null && r.push(Dr(e, l, i))), e = e.return;
    }
    return r;
  }
  function Zn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function wa(e, t, n, r, i) {
    for (var l = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n, m = d.alternate, S = d.stateNode;
      if (m !== null && m === r) break;
      d.tag === 5 && S !== null && (d = S, i ? (m = kr(n, l), m != null && a.unshift(Dr(n, m, d))) : i || (m = kr(n, l), m != null && a.push(Dr(n, m, d)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var $f = /\r\n?/g, Vf = /\u0000|\uFFFD/g;
  function xa(e) {
    return (typeof e == "string" ? e : "" + e).replace($f, `
`).replace(Vf, "");
  }
  function Mi(e, t, n) {
    if (t = xa(t), xa(e) !== t && n) throw Error(o(425));
  }
  function Ri() {
  }
  var Js = null, Zs = null;
  function bs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var el = typeof setTimeout == "function" ? setTimeout : void 0, Uf = typeof clearTimeout == "function" ? clearTimeout : void 0, Sa = typeof Promise == "function" ? Promise : void 0, Hf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sa < "u" ? function(e) {
    return Sa.resolve(null).then(e).catch(Wf);
  } : el;
  function Wf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function tl(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Nr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Nr(t);
  }
  function pn(e) {
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
  function Ea(e) {
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
  var bn = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + bn, Br = "__reactProps$" + bn, bt = "__reactContainer$" + bn, nl = "__reactEvents$" + bn, Kf = "__reactListeners$" + bn, Qf = "__reactHandles$" + bn;
  function Mn(e) {
    var t = e[Qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bt] || n[Qt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ea(e); e !== null; ) {
          if (n = e[Qt]) return n;
          e = Ea(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function $r(e) {
    return e = e[Qt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function er(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Li(e) {
    return e[Br] || null;
  }
  var rl = [], tr = -1;
  function mn(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > tr || (e.current = rl[tr], rl[tr] = null, tr--);
  }
  function Pe(e, t) {
    tr++, rl[tr] = e.current, e.current = t;
  }
  var vn = {}, ut = mn(vn), vt = mn(!1), Rn = vn;
  function nr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function yt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Pi() {
    Ie(vt), Ie(ut);
  }
  function _a(e, t, n) {
    if (ut.current !== vn) throw Error(o(168));
    Pe(ut, t), Pe(vt, n);
  }
  function Ta(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(o(108, I(e) || "Unknown", i));
    return U({}, n, r);
  }
  function Ai(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, Rn = ut.current, Pe(ut, e), Pe(vt, vt.current), !0;
  }
  function ja(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = Ta(e, t, Rn), r.__reactInternalMemoizedMergedChildContext = e, Ie(vt), Ie(ut), Pe(ut, e)) : Ie(vt), Pe(vt, n);
  }
  var en = null, zi = !1, il = !1;
  function Ca(e) {
    en === null ? en = [e] : en.push(e);
  }
  function Gf(e) {
    zi = !0, Ca(e);
  }
  function yn() {
    if (!il && en !== null) {
      il = !0;
      var e = 0, t = Ne;
      try {
        var n = en;
        for (Ne = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        en = null, zi = !1;
      } catch (i) {
        throw en !== null && (en = en.slice(e + 1)), Mo(js, yn), i;
      } finally {
        Ne = t, il = !1;
      }
    }
    return null;
  }
  var rr = [], ir = 0, Ii = null, Fi = 0, Ct = [], Nt = 0, Ln = null, tn = 1, nn = "";
  function Pn(e, t) {
    rr[ir++] = Fi, rr[ir++] = Ii, Ii = e, Fi = t;
  }
  function Na(e, t, n) {
    Ct[Nt++] = tn, Ct[Nt++] = nn, Ct[Nt++] = Ln, Ln = e;
    var r = tn;
    e = nn;
    var i = 32 - zt(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - zt(t) + i;
    if (30 < l) {
      var a = i - i % 5;
      l = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, tn = 1 << 32 - zt(t) + i | n << i | r, nn = l + e;
    } else tn = 1 << l | n << i | r, nn = e;
  }
  function sl(e) {
    e.return !== null && (Pn(e, 1), Na(e, 1, 0));
  }
  function ll(e) {
    for (; e === Ii; ) Ii = rr[--ir], rr[ir] = null, Fi = rr[--ir], rr[ir] = null;
    for (; e === Ln; ) Ln = Ct[--Nt], Ct[Nt] = null, nn = Ct[--Nt], Ct[Nt] = null, tn = Ct[--Nt], Ct[Nt] = null;
  }
  var Et = null, _t = null, Oe = !1, Ft = null;
  function Ma(e, t) {
    var n = Pt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ra(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Et = e, _t = pn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Et = e, _t = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Et = e, _t = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ol(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function al(e) {
    if (Oe) {
      var t = _t;
      if (t) {
        var n = t;
        if (!Ra(e, t)) {
          if (ol(e)) throw Error(o(418));
          t = pn(n.nextSibling);
          var r = Et;
          t && Ra(e, t) ? Ma(r, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Et = e);
        }
      } else {
        if (ol(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, Et = e;
      }
    }
  }
  function La(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Et = e;
  }
  function Oi(e) {
    if (e !== Et) return !1;
    if (!Oe) return La(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bs(e.type, e.memoizedProps)), t && (t = _t)) {
      if (ol(e)) throw Pa(), Error(o(418));
      for (; t; ) Ma(e, t), t = pn(t.nextSibling);
    }
    if (La(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                _t = pn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        _t = null;
      }
    } else _t = Et ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pa() {
    for (var e = _t; e; ) e = pn(e.nextSibling);
  }
  function sr() {
    _t = Et = null, Oe = !1;
  }
  function ul(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var qf = b.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var i = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(a) {
          var d = i.refs;
          a === null ? delete d[l] : d[l] = a;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Di(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Aa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function za(e) {
    function t(g, v) {
      if (e) {
        var k = g.deletions;
        k === null ? (g.deletions = [v], g.flags |= 16) : k.push(v);
      }
    }
    function n(g, v) {
      if (!e) return null;
      for (; v !== null; ) t(g, v), v = v.sibling;
      return null;
    }
    function r(g, v) {
      for (g = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? g.set(v.key, v) : g.set(v.index, v), v = v.sibling;
      return g;
    }
    function i(g, v) {
      return g = Tn(g, v), g.index = 0, g.sibling = null, g;
    }
    function l(g, v, k) {
      return g.index = k, e ? (k = g.alternate, k !== null ? (k = k.index, k < v ? (g.flags |= 2, v) : k) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function d(g, v, k, F) {
      return v === null || v.tag !== 6 ? (v = eo(k, g.mode, F), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function m(g, v, k, F) {
      var J = k.type;
      return J === re ? M(g, v, k.props.children, F, k.key) : v !== null && (v.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Le && Aa(J) === v.type) ? (F = i(v, k.props), F.ref = Vr(g, v, k), F.return = g, F) : (F = as(k.type, k.key, k.props, null, g.mode, F), F.ref = Vr(g, v, k), F.return = g, F);
    }
    function S(g, v, k, F) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== k.containerInfo || v.stateNode.implementation !== k.implementation ? (v = to(k, g.mode, F), v.return = g, v) : (v = i(v, k.children || []), v.return = g, v);
    }
    function M(g, v, k, F, J) {
      return v === null || v.tag !== 7 ? (v = $n(k, g.mode, F, J), v.return = g, v) : (v = i(v, k), v.return = g, v);
    }
    function R(g, v, k) {
      if (typeof v == "string" && v !== "" || typeof v == "number") return v = eo("" + v, g.mode, k), v.return = g, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Q:
            return k = as(v.type, v.key, v.props, null, g.mode, k), k.ref = Vr(g, null, v), k.return = g, k;
          case H:
            return v = to(v, g.mode, k), v.return = g, v;
          case Le:
            var F = v._init;
            return R(g, F(v._payload), k);
        }
        if ($e(v) || ee(v)) return v = $n(v, g.mode, k, null), v.return = g, v;
        Di(g, v);
      }
      return null;
    }
    function N(g, v, k, F) {
      var J = v !== null ? v.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return J !== null ? null : d(g, v, "" + k, F);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Q:
            return k.key === J ? m(g, v, k, F) : null;
          case H:
            return k.key === J ? S(g, v, k, F) : null;
          case Le:
            return J = k._init, N(
              g,
              v,
              J(k._payload),
              F
            );
        }
        if ($e(k) || ee(k)) return J !== null ? null : M(g, v, k, F, null);
        Di(g, k);
      }
      return null;
    }
    function W(g, v, k, F, J) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return g = g.get(k) || null, d(v, g, "" + F, J);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Q:
            return g = g.get(F.key === null ? k : F.key) || null, m(v, g, F, J);
          case H:
            return g = g.get(F.key === null ? k : F.key) || null, S(v, g, F, J);
          case Le:
            var se = F._init;
            return W(g, v, k, se(F._payload), J);
        }
        if ($e(F) || ee(F)) return g = g.get(k) || null, M(v, g, F, J, null);
        Di(v, F);
      }
      return null;
    }
    function q(g, v, k, F) {
      for (var J = null, se = null, le = v, fe = v = 0, lt = null; le !== null && fe < k.length; fe++) {
        le.index > fe ? (lt = le, le = null) : lt = le.sibling;
        var _e = N(g, le, k[fe], F);
        if (_e === null) {
          le === null && (le = lt);
          break;
        }
        e && le && _e.alternate === null && t(g, le), v = l(_e, v, fe), se === null ? J = _e : se.sibling = _e, se = _e, le = lt;
      }
      if (fe === k.length) return n(g, le), Oe && Pn(g, fe), J;
      if (le === null) {
        for (; fe < k.length; fe++) le = R(g, k[fe], F), le !== null && (v = l(le, v, fe), se === null ? J = le : se.sibling = le, se = le);
        return Oe && Pn(g, fe), J;
      }
      for (le = r(g, le); fe < k.length; fe++) lt = W(le, g, fe, k[fe], F), lt !== null && (e && lt.alternate !== null && le.delete(lt.key === null ? fe : lt.key), v = l(lt, v, fe), se === null ? J = lt : se.sibling = lt, se = lt);
      return e && le.forEach(function(jn) {
        return t(g, jn);
      }), Oe && Pn(g, fe), J;
    }
    function Y(g, v, k, F) {
      var J = ee(k);
      if (typeof J != "function") throw Error(o(150));
      if (k = J.call(k), k == null) throw Error(o(151));
      for (var se = J = null, le = v, fe = v = 0, lt = null, _e = k.next(); le !== null && !_e.done; fe++, _e = k.next()) {
        le.index > fe ? (lt = le, le = null) : lt = le.sibling;
        var jn = N(g, le, _e.value, F);
        if (jn === null) {
          le === null && (le = lt);
          break;
        }
        e && le && jn.alternate === null && t(g, le), v = l(jn, v, fe), se === null ? J = jn : se.sibling = jn, se = jn, le = lt;
      }
      if (_e.done) return n(
        g,
        le
      ), Oe && Pn(g, fe), J;
      if (le === null) {
        for (; !_e.done; fe++, _e = k.next()) _e = R(g, _e.value, F), _e !== null && (v = l(_e, v, fe), se === null ? J = _e : se.sibling = _e, se = _e);
        return Oe && Pn(g, fe), J;
      }
      for (le = r(g, le); !_e.done; fe++, _e = k.next()) _e = W(le, g, fe, _e.value, F), _e !== null && (e && _e.alternate !== null && le.delete(_e.key === null ? fe : _e.key), v = l(_e, v, fe), se === null ? J = _e : se.sibling = _e, se = _e);
      return e && le.forEach(function(Cd) {
        return t(g, Cd);
      }), Oe && Pn(g, fe), J;
    }
    function be(g, v, k, F) {
      if (typeof k == "object" && k !== null && k.type === re && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Q:
            e: {
              for (var J = k.key, se = v; se !== null; ) {
                if (se.key === J) {
                  if (J = k.type, J === re) {
                    if (se.tag === 7) {
                      n(g, se.sibling), v = i(se, k.props.children), v.return = g, g = v;
                      break e;
                    }
                  } else if (se.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Le && Aa(J) === se.type) {
                    n(g, se.sibling), v = i(se, k.props), v.ref = Vr(g, se, k), v.return = g, g = v;
                    break e;
                  }
                  n(g, se);
                  break;
                } else t(g, se);
                se = se.sibling;
              }
              k.type === re ? (v = $n(k.props.children, g.mode, F, k.key), v.return = g, g = v) : (F = as(k.type, k.key, k.props, null, g.mode, F), F.ref = Vr(g, v, k), F.return = g, g = F);
            }
            return a(g);
          case H:
            e: {
              for (se = k.key; v !== null; ) {
                if (v.key === se) if (v.tag === 4 && v.stateNode.containerInfo === k.containerInfo && v.stateNode.implementation === k.implementation) {
                  n(g, v.sibling), v = i(v, k.children || []), v.return = g, g = v;
                  break e;
                } else {
                  n(g, v);
                  break;
                }
                else t(g, v);
                v = v.sibling;
              }
              v = to(k, g.mode, F), v.return = g, g = v;
            }
            return a(g);
          case Le:
            return se = k._init, be(g, v, se(k._payload), F);
        }
        if ($e(k)) return q(g, v, k, F);
        if (ee(k)) return Y(g, v, k, F);
        Di(g, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, v !== null && v.tag === 6 ? (n(g, v.sibling), v = i(v, k), v.return = g, g = v) : (n(g, v), v = eo(k, g.mode, F), v.return = g, g = v), a(g)) : n(g, v);
    }
    return be;
  }
  var lr = za(!0), Ia = za(!1), Bi = mn(null), $i = null, or = null, cl = null;
  function fl() {
    cl = or = $i = null;
  }
  function dl(e) {
    var t = Bi.current;
    Ie(Bi), e._currentValue = t;
  }
  function hl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ar(e, t) {
    $i = e, cl = or = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (gt = !0), e.firstContext = null);
  }
  function Mt(e) {
    var t = e._currentValue;
    if (cl !== e) if (e = { context: e, memoizedValue: t, next: null }, or === null) {
      if ($i === null) throw Error(o(308));
      or = e, $i.dependencies = { lanes: 0, firstContext: e };
    } else or = or.next = e;
    return t;
  }
  var An = null;
  function pl(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Fa(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, pl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, rn(e, r);
  }
  function rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var gn = !1;
  function ml(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Oa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function kn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Se & 2) !== 0) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rn(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, pl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
  }
  function Vi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ms(e, n);
    }
  }
  function Da(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? i = l = a : l = l.next = a, n = n.next;
        } while (n !== null);
        l === null ? i = l = t : l = l.next = t;
      } else i = l = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ui(e, t, n, r) {
    var i = e.updateQueue;
    gn = !1;
    var l = i.firstBaseUpdate, a = i.lastBaseUpdate, d = i.shared.pending;
    if (d !== null) {
      i.shared.pending = null;
      var m = d, S = m.next;
      m.next = null, a === null ? l = S : a.next = S, a = m;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, d = M.lastBaseUpdate, d !== a && (d === null ? M.firstBaseUpdate = S : d.next = S, M.lastBaseUpdate = m));
    }
    if (l !== null) {
      var R = i.baseState;
      a = 0, M = S = m = null, d = l;
      do {
        var N = d.lane, W = d.eventTime;
        if ((r & N) === N) {
          M !== null && (M = M.next = {
            eventTime: W,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          e: {
            var q = e, Y = d;
            switch (N = t, W = n, Y.tag) {
              case 1:
                if (q = Y.payload, typeof q == "function") {
                  R = q.call(W, R, N);
                  break e;
                }
                R = q;
                break e;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = Y.payload, N = typeof q == "function" ? q.call(W, R, N) : q, N == null) break e;
                R = U({}, R, N);
                break e;
              case 2:
                gn = !0;
            }
          }
          d.callback !== null && d.lane !== 0 && (e.flags |= 64, N = i.effects, N === null ? i.effects = [d] : N.push(d));
        } else W = { eventTime: W, lane: N, tag: d.tag, payload: d.payload, callback: d.callback, next: null }, M === null ? (S = M = W, m = R) : M = M.next = W, a |= N;
        if (d = d.next, d === null) {
          if (d = i.shared.pending, d === null) break;
          N = d, d = N.next, N.next = null, i.lastBaseUpdate = N, i.shared.pending = null;
        }
      } while (!0);
      if (M === null && (m = R), i.baseState = m, i.firstBaseUpdate = S, i.lastBaseUpdate = M, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          a |= i.lane, i = i.next;
        while (i !== t);
      } else l === null && (i.shared.lanes = 0);
      Fn |= a, e.lanes = a, e.memoizedState = R;
    }
  }
  function Ba(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(o(191, i));
        i.call(r);
      }
    }
  }
  var Ur = {}, Gt = mn(Ur), Hr = mn(Ur), Wr = mn(Ur);
  function zn(e) {
    if (e === Ur) throw Error(o(174));
    return e;
  }
  function vl(e, t) {
    switch (Pe(Wr, t), Pe(Hr, e), Pe(Gt, Ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Cn(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Cn(t, e);
    }
    Ie(Gt), Pe(Gt, t);
  }
  function ur() {
    Ie(Gt), Ie(Hr), Ie(Wr);
  }
  function $a(e) {
    zn(Wr.current);
    var t = zn(Gt.current), n = Cn(t, e.type);
    t !== n && (Pe(Hr, e), Pe(Gt, n));
  }
  function yl(e) {
    Hr.current === e && (Ie(Gt), Ie(Hr));
  }
  var Ue = mn(0);
  function Hi(e) {
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
  var gl = [];
  function kl() {
    for (var e = 0; e < gl.length; e++) gl[e]._workInProgressVersionPrimary = null;
    gl.length = 0;
  }
  var Wi = b.ReactCurrentDispatcher, wl = b.ReactCurrentBatchConfig, In = 0, He = null, nt = null, it = null, Ki = !1, Kr = !1, Qr = 0, Yf = 0;
  function ct() {
    throw Error(o(321));
  }
  function xl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!It(e[n], t[n])) return !1;
    return !0;
  }
  function Sl(e, t, n, r, i, l) {
    if (In = l, He = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wi.current = e === null || e.memoizedState === null ? bf : ed, e = n(r, i), Kr) {
      l = 0;
      do {
        if (Kr = !1, Qr = 0, 25 <= l) throw Error(o(301));
        l += 1, it = nt = null, t.updateQueue = null, Wi.current = td, e = n(r, i);
      } while (Kr);
    }
    if (Wi.current = qi, t = nt !== null && nt.next !== null, In = 0, it = nt = He = null, Ki = !1, t) throw Error(o(300));
    return e;
  }
  function El() {
    var e = Qr !== 0;
    return Qr = 0, e;
  }
  function qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return it === null ? He.memoizedState = it = e : it = it.next = e, it;
  }
  function Rt() {
    if (nt === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = nt.next;
    var t = it === null ? He.memoizedState : it.next;
    if (t !== null) it = t, nt = e;
    else {
      if (e === null) throw Error(o(310));
      nt = e, e = { memoizedState: nt.memoizedState, baseState: nt.baseState, baseQueue: nt.baseQueue, queue: nt.queue, next: null }, it === null ? He.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function Gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _l(e) {
    var t = Rt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = nt, i = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var a = i.next;
        i.next = l.next, l.next = a;
      }
      r.baseQueue = i = l, n.pending = null;
    }
    if (i !== null) {
      l = i.next, r = r.baseState;
      var d = a = null, m = null, S = l;
      do {
        var M = S.lane;
        if ((In & M) === M) m !== null && (m = m.next = { lane: 0, action: S.action, hasEagerState: S.hasEagerState, eagerState: S.eagerState, next: null }), r = S.hasEagerState ? S.eagerState : e(r, S.action);
        else {
          var R = {
            lane: M,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          };
          m === null ? (d = m = R, a = r) : m = m.next = R, He.lanes |= M, Fn |= M;
        }
        S = S.next;
      } while (S !== null && S !== l);
      m === null ? a = r : m.next = d, It(r, t.memoizedState) || (gt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = m, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        l = i.lane, He.lanes |= l, Fn |= l, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Tl(e) {
    var t = Rt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var a = i = i.next;
      do
        l = e(l, a.action), a = a.next;
      while (a !== i);
      It(l, t.memoizedState) || (gt = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Va() {
  }
  function Ua(e, t) {
    var n = He, r = Rt(), i = t(), l = !It(r.memoizedState, i);
    if (l && (r.memoizedState = i, gt = !0), r = r.queue, jl(Ka.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || it !== null && it.memoizedState.tag & 1) {
      if (n.flags |= 2048, qr(9, Wa.bind(null, n, r, i, t), void 0, null), st === null) throw Error(o(349));
      (In & 30) !== 0 || Ha(n, t, i);
    }
    return i;
  }
  function Ha(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = He.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, He.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Wa(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Qa(t) && Ga(e);
  }
  function Ka(e, t, n) {
    return n(function() {
      Qa(t) && Ga(e);
    });
  }
  function Qa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !It(e, n);
    } catch {
      return !0;
    }
  }
  function Ga(e) {
    var t = rn(e, 1);
    t !== null && $t(t, e, 1, -1);
  }
  function qa(e) {
    var t = qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Zf.bind(null, He, e), [t.memoizedState, e];
  }
  function qr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = He.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, He.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ya() {
    return Rt().memoizedState;
  }
  function Qi(e, t, n, r) {
    var i = qt();
    He.flags |= e, i.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Gi(e, t, n, r) {
    var i = Rt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (nt !== null) {
      var a = nt.memoizedState;
      if (l = a.destroy, r !== null && xl(r, a.deps)) {
        i.memoizedState = qr(t, n, l, r);
        return;
      }
    }
    He.flags |= e, i.memoizedState = qr(1 | t, n, l, r);
  }
  function Xa(e, t) {
    return Qi(8390656, 8, e, t);
  }
  function jl(e, t) {
    return Gi(2048, 8, e, t);
  }
  function Ja(e, t) {
    return Gi(4, 2, e, t);
  }
  function Za(e, t) {
    return Gi(4, 4, e, t);
  }
  function ba(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function eu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gi(4, 4, ba.bind(null, t, e), n);
  }
  function Cl() {
  }
  function tu(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function nu(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ru(e, t, n) {
    return (In & 21) === 0 ? (e.baseState && (e.baseState = !1, gt = !0), e.memoizedState = n) : (It(n, t) || (n = Ao(), He.lanes |= n, Fn |= n, e.baseState = !0), t);
  }
  function Xf(e, t) {
    var n = Ne;
    Ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = wl.transition;
    wl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ne = n, wl.transition = r;
    }
  }
  function iu() {
    return Rt().memoizedState;
  }
  function Jf(e, t, n) {
    var r = En(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, su(e)) lu(t, n);
    else if (n = Fa(e, t, n, r), n !== null) {
      var i = mt();
      $t(n, e, r, i), ou(n, t, r);
    }
  }
  function Zf(e, t, n) {
    var r = En(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (su(e)) lu(t, i);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var a = t.lastRenderedState, d = l(a, n);
        if (i.hasEagerState = !0, i.eagerState = d, It(d, a)) {
          var m = t.interleaved;
          m === null ? (i.next = i, pl(t)) : (i.next = m.next, m.next = i), t.interleaved = i;
          return;
        }
      } catch {
      }
      n = Fa(e, t, i, r), n !== null && (i = mt(), $t(n, e, r, i), ou(n, t, r));
    }
  }
  function su(e) {
    var t = e.alternate;
    return e === He || t !== null && t === He;
  }
  function lu(e, t) {
    Kr = Ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ou(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ms(e, n);
    }
  }
  var qi = { readContext: Mt, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useInsertionEffect: ct, useLayoutEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useMutableSource: ct, useSyncExternalStore: ct, useId: ct, unstable_isNewReconciler: !1 }, bf = { readContext: Mt, useCallback: function(e, t) {
    return qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Mt, useEffect: Xa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Qi(
      4194308,
      4,
      ba.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Qi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Qi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = qt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Jf.bind(null, He, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: qa, useDebugValue: Cl, useDeferredValue: function(e) {
    return qt().memoizedState = e;
  }, useTransition: function() {
    var e = qa(!1), t = e[0];
    return e = Xf.bind(null, e[1]), qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = He, i = qt();
    if (Oe) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), st === null) throw Error(o(349));
      (In & 30) !== 0 || Ha(r, t, n);
    }
    i.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return i.queue = l, Xa(Ka.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, qr(9, Wa.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = qt(), t = st.identifierPrefix;
    if (Oe) {
      var n = nn, r = tn;
      n = (r & ~(1 << 32 - zt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Yf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, ed = {
    readContext: Mt,
    useCallback: tu,
    useContext: Mt,
    useEffect: jl,
    useImperativeHandle: eu,
    useInsertionEffect: Ja,
    useLayoutEffect: Za,
    useMemo: nu,
    useReducer: _l,
    useRef: Ya,
    useState: function() {
      return _l(Gr);
    },
    useDebugValue: Cl,
    useDeferredValue: function(e) {
      var t = Rt();
      return ru(t, nt.memoizedState, e);
    },
    useTransition: function() {
      var e = _l(Gr)[0], t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Va,
    useSyncExternalStore: Ua,
    useId: iu,
    unstable_isNewReconciler: !1
  }, td = { readContext: Mt, useCallback: tu, useContext: Mt, useEffect: jl, useImperativeHandle: eu, useInsertionEffect: Ja, useLayoutEffect: Za, useMemo: nu, useReducer: Tl, useRef: Ya, useState: function() {
    return Tl(Gr);
  }, useDebugValue: Cl, useDeferredValue: function(e) {
    var t = Rt();
    return nt === null ? t.memoizedState = e : ru(t, nt.memoizedState, e);
  }, useTransition: function() {
    var e = Tl(Gr)[0], t = Rt().memoizedState;
    return [e, t];
  }, useMutableSource: Va, useSyncExternalStore: Ua, useId: iu, unstable_isNewReconciler: !1 };
  function Ot(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Nl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Yi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = mt(), i = En(e), l = sn(r, i);
    l.payload = t, n != null && (l.callback = n), t = kn(e, l, i), t !== null && ($t(t, e, i, r), Vi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = mt(), i = En(e), l = sn(r, i);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = kn(e, l, i), t !== null && ($t(t, e, i, r), Vi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = mt(), r = En(e), i = sn(n, r);
    i.tag = 2, t != null && (i.callback = t), t = kn(e, i, r), t !== null && ($t(t, e, r, n), Vi(t, e, r));
  } };
  function au(e, t, n, r, i, l, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, a) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, l) : !0;
  }
  function uu(e, t, n) {
    var r = !1, i = vn, l = t.contextType;
    return typeof l == "object" && l !== null ? l = Mt(l) : (i = yt(t) ? Rn : ut.current, r = t.contextTypes, l = (r = r != null) ? nr(e, i) : vn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Yi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function cu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Yi.enqueueReplaceState(t, t.state, null);
  }
  function Ml(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, ml(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = Mt(l) : (l = yt(t) ? Rn : ut.current, i.context = nr(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Nl(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Yi.enqueueReplaceState(i, i.state, null), Ui(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function cr(e, t) {
    try {
      var n = "", r = t;
      do
        n += pe(r), r = r.return;
      while (r);
      var i = n;
    } catch (l) {
      i = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Rl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ll(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var nd = typeof WeakMap == "function" ? WeakMap : Map;
  function fu(e, t, n) {
    n = sn(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ns || (ns = !0, Ql = r), Ll(e, t);
    }, n;
  }
  function du(e, t, n) {
    n = sn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Ll(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      Ll(e, t), typeof r != "function" && (xn === null ? xn = /* @__PURE__ */ new Set([this]) : xn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function hu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nd();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = vd.bind(null, e, t, n), t.then(e, e));
  }
  function pu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function mu(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = sn(-1, 1), t.tag = 2, kn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
  }
  var rd = b.ReactCurrentOwner, gt = !1;
  function pt(e, t, n, r) {
    t.child = e === null ? Ia(t, null, n, r) : lr(t, e.child, n, r);
  }
  function vu(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return ar(t, i), r = Sl(e, t, n, r, l, i), n = El(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Oe && n && sl(t), t.flags |= 1, pt(e, t, r, i), t.child);
  }
  function yu(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !bl(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, gu(e, t, l, r, i)) : (e = as(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, (e.lanes & i) === 0) {
      var a = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : zr, n(a, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Tn(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function gu(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (zr(l, r) && e.ref === t.ref) if (gt = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (gt = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return Pl(e, t, n, r, i);
  }
  function ku(e, t, n) {
    var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pe(dr, Tt), Tt |= n;
    else {
      if ((n & 1073741824) === 0) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Pe(dr, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, Pe(dr, Tt), Tt |= r;
    }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Pe(dr, Tt), Tt |= r;
    return pt(e, t, i, n), t.child;
  }
  function wu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Pl(e, t, n, r, i) {
    var l = yt(n) ? Rn : ut.current;
    return l = nr(t, l), ar(t, i), n = Sl(e, t, n, r, l, i), r = El(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Oe && r && sl(t), t.flags |= 1, pt(e, t, n, i), t.child);
  }
  function xu(e, t, n, r, i) {
    if (yt(n)) {
      var l = !0;
      Ai(t);
    } else l = !1;
    if (ar(t, i), t.stateNode === null) Ji(e, t), uu(t, n, r), Ml(t, n, r, i), r = !0;
    else if (e === null) {
      var a = t.stateNode, d = t.memoizedProps;
      a.props = d;
      var m = a.context, S = n.contextType;
      typeof S == "object" && S !== null ? S = Mt(S) : (S = yt(n) ? Rn : ut.current, S = nr(t, S));
      var M = n.getDerivedStateFromProps, R = typeof M == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      R || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== r || m !== S) && cu(t, a, r, S), gn = !1;
      var N = t.memoizedState;
      a.state = N, Ui(t, r, a, i), m = t.memoizedState, d !== r || N !== m || vt.current || gn ? (typeof M == "function" && (Nl(t, n, M, r), m = t.memoizedState), (d = gn || au(t, n, d, r, N, m, S)) ? (R || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), a.props = r, a.state = m, a.context = S, r = d) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, Oa(e, t), d = t.memoizedProps, S = t.type === t.elementType ? d : Ot(t.type, d), a.props = S, R = t.pendingProps, N = a.context, m = n.contextType, typeof m == "object" && m !== null ? m = Mt(m) : (m = yt(n) ? Rn : ut.current, m = nr(t, m));
      var W = n.getDerivedStateFromProps;
      (M = typeof W == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== R || N !== m) && cu(t, a, r, m), gn = !1, N = t.memoizedState, a.state = N, Ui(t, r, a, i);
      var q = t.memoizedState;
      d !== R || N !== q || vt.current || gn ? (typeof W == "function" && (Nl(t, n, W, r), q = t.memoizedState), (S = gn || au(t, n, S, r, N, q, m) || !1) ? (M || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, q, m), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, q, m)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = q), a.props = r, a.state = q, a.context = m, r = S) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Al(e, t, n, r, l, i);
  }
  function Al(e, t, n, r, i, l) {
    wu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return i && ja(t, n, !1), ln(e, t, l);
    r = t.stateNode, rd.current = t;
    var d = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = lr(t, e.child, null, l), t.child = lr(t, null, d, l)) : pt(e, t, d, l), t.memoizedState = r.state, i && ja(t, n, !0), t.child;
  }
  function Su(e) {
    var t = e.stateNode;
    t.pendingContext ? _a(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _a(e, t.context, !1), vl(e, t.containerInfo);
  }
  function Eu(e, t, n, r, i) {
    return sr(), ul(i), t.flags |= 256, pt(e, t, n, r), t.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Il(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _u(e, t, n) {
    var r = t.pendingProps, i = Ue.current, l = !1, a = (t.flags & 128) !== 0, d;
    if ((d = a) || (d = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), d ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Pe(Ue, i & 1), e === null)
      return al(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, a = { mode: "hidden", children: a }, (r & 1) === 0 && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = us(a, r, 0, null), e = $n(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Il(n), t.memoizedState = zl, e) : Fl(t, a));
    if (i = e.memoizedState, i !== null && (d = i.dehydrated, d !== null)) return id(e, t, a, r, d, i, n);
    if (l) {
      l = r.fallback, a = t.mode, i = e.child, d = i.sibling;
      var m = { mode: "hidden", children: r.children };
      return (a & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = Tn(i, m), r.subtreeFlags = i.subtreeFlags & 14680064), d !== null ? l = Tn(d, l) : (l = $n(l, a, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, a = e.child.memoizedState, a = a === null ? Il(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = e.childLanes & ~n, t.memoizedState = zl, r;
    }
    return l = e.child, e = l.sibling, r = Tn(l, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Fl(e, t) {
    return t = us({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Xi(e, t, n, r) {
    return r !== null && ul(r), lr(t, e.child, null, n), e = Fl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function id(e, t, n, r, i, l, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Rl(Error(o(422))), Xi(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = us({ mode: "visible", children: r.children }, i, 0, null), l = $n(l, i, a, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, (t.mode & 1) !== 0 && lr(t, e.child, null, a), t.child.memoizedState = Il(a), t.memoizedState = zl, l);
    if ((t.mode & 1) === 0) return Xi(e, t, a, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var d = r.dgst;
      return r = d, l = Error(o(419)), r = Rl(l, r, void 0), Xi(e, t, a, r);
    }
    if (d = (a & e.childLanes) !== 0, gt || d) {
      if (r = st, r !== null) {
        switch (a & -a) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
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
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = (i & (r.suspendedLanes | a)) !== 0 ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, rn(e, i), $t(r, e, i, -1));
      }
      return Zl(), r = Rl(Error(o(421))), Xi(e, t, a, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = yd.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, _t = pn(i.nextSibling), Et = t, Oe = !0, Ft = null, e !== null && (Ct[Nt++] = tn, Ct[Nt++] = nn, Ct[Nt++] = Ln, tn = e.id, nn = e.overflow, Ln = t), t = Fl(t, r.children), t.flags |= 4096, t);
  }
  function Tu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), hl(e.return, t, n);
  }
  function Ol(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i);
  }
  function ju(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, l = r.tail;
    if (pt(e, t, r.children, n), r = Ue.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
        else if (e.tag === 19) Tu(e, n, t);
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
    if (Pe(Ue, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Hi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ol(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Hi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ol(t, !0, n, null, l);
        break;
      case "together":
        Ol(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ji(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function sd(e, t, n) {
    switch (t.tag) {
      case 3:
        Su(t), sr();
        break;
      case 5:
        $a(t);
        break;
      case 1:
        yt(t.type) && Ai(t);
        break;
      case 4:
        vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Pe(Bi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Pe(Ue, Ue.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? _u(e, t, n) : (Pe(Ue, Ue.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
        Pe(Ue, Ue.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ju(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Pe(Ue, Ue.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ku(e, t, n);
    }
    return ln(e, t, n);
  }
  var Cu, Dl, Nu, Mu;
  Cu = function(e, t) {
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
  }, Dl = function() {
  }, Nu = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, zn(Gt.current);
      var l = null;
      switch (n) {
        case "input":
          i = ne(e, i), r = ne(e, r), l = [];
          break;
        case "select":
          i = U({}, i, { value: void 0 }), r = U({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          i = jt(e, i), r = jt(e, r), l = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ri);
      }
      ye(n, r);
      var a;
      n = null;
      for (S in i) if (!r.hasOwnProperty(S) && i.hasOwnProperty(S) && i[S] != null) if (S === "style") {
        var d = i[S];
        for (a in d) d.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
      } else S !== "dangerouslySetInnerHTML" && S !== "children" && S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (f.hasOwnProperty(S) ? l || (l = []) : (l = l || []).push(S, null));
      for (S in r) {
        var m = r[S];
        if (d = i?.[S], r.hasOwnProperty(S) && m !== d && (m != null || d != null)) if (S === "style") if (d) {
          for (a in d) !d.hasOwnProperty(a) || m && m.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
          for (a in m) m.hasOwnProperty(a) && d[a] !== m[a] && (n || (n = {}), n[a] = m[a]);
        } else n || (l || (l = []), l.push(
          S,
          n
        )), n = m;
        else S === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, d = d ? d.__html : void 0, m != null && d !== m && (l = l || []).push(S, m)) : S === "children" ? typeof m != "string" && typeof m != "number" || (l = l || []).push(S, "" + m) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && (f.hasOwnProperty(S) ? (m != null && S === "onScroll" && ze("scroll", e), l || d === m || (l = [])) : (l = l || []).push(S, m));
      }
      n && (l = l || []).push("style", n);
      var S = l;
      (t.updateQueue = S) && (t.flags |= 4);
    }
  }, Mu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Yr(e, t) {
    if (!Oe) switch (e.tailMode) {
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
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function ld(e, t, n) {
    var r = t.pendingProps;
    switch (ll(t), t.tag) {
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
        return ft(t), null;
      case 1:
        return yt(t.type) && Pi(), ft(t), null;
      case 3:
        return r = t.stateNode, ur(), Ie(vt), Ie(ut), kl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Oi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ft !== null && (Yl(Ft), Ft = null))), Dl(e, t), ft(t), null;
      case 5:
        yl(t);
        var i = zn(Wr.current);
        if (n = t.type, e !== null && t.stateNode != null) Nu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return ft(t), null;
          }
          if (e = zn(Gt.current), Oi(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[Qt] = t, r[Br] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ze("cancel", r), ze("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ze("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fr.length; i++) ze(Fr[i], r);
                break;
              case "source":
                ze("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ze(
                  "error",
                  r
                ), ze("load", r);
                break;
              case "details":
                ze("toggle", r);
                break;
              case "input":
                ve(r, l), ze("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, ze("invalid", r);
                break;
              case "textarea":
                Ve(r, l), ze("invalid", r);
            }
            ye(n, l), i = null;
            for (var a in l) if (l.hasOwnProperty(a)) {
              var d = l[a];
              a === "children" ? typeof d == "string" ? r.textContent !== d && (l.suppressHydrationWarning !== !0 && Mi(r.textContent, d, e), i = ["children", d]) : typeof d == "number" && r.textContent !== "" + d && (l.suppressHydrationWarning !== !0 && Mi(
                r.textContent,
                d,
                e
              ), i = ["children", "" + d]) : f.hasOwnProperty(a) && d != null && a === "onScroll" && ze("scroll", r);
            }
            switch (n) {
              case "input":
                ce(r), Qe(r, l, !0);
                break;
              case "textarea":
                ce(r), Je(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = Ri);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Qt] = t, e[Br] = r, Cu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (a = ke(n, r), n) {
                case "dialog":
                  ze("cancel", e), ze("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ze("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Fr.length; i++) ze(Fr[i], e);
                  i = r;
                  break;
                case "source":
                  ze("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ze(
                    "error",
                    e
                  ), ze("load", e), i = r;
                  break;
                case "details":
                  ze("toggle", e), i = r;
                  break;
                case "input":
                  ve(e, r), i = ne(e, r), ze("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = U({}, r, { value: void 0 }), ze("invalid", e);
                  break;
                case "textarea":
                  Ve(e, r), i = jt(e, r), ze("invalid", e);
                  break;
                default:
                  i = r;
              }
              ye(n, i), d = i;
              for (l in d) if (d.hasOwnProperty(l)) {
                var m = d[l];
                l === "style" ? Jt(e, m) : l === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && Xt(e, m)) : l === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && Ut(e, m) : typeof m == "number" && Ut(e, "" + m) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (f.hasOwnProperty(l) ? m != null && l === "onScroll" && ze("scroll", e) : m != null && K(e, l, m, a));
              }
              switch (n) {
                case "input":
                  ce(e), Qe(e, r, !1);
                  break;
                case "textarea":
                  ce(e), Je(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? Xe(e, !!r.multiple, l, !1) : r.defaultValue != null && Xe(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Ri);
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
        return ft(t), null;
      case 6:
        if (e && t.stateNode != null) Mu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = zn(Wr.current), zn(Gt.current), Oi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Qt] = t, (l = r.nodeValue !== n) && (e = Et, e !== null)) switch (e.tag) {
              case 3:
                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Qt] = t, t.stateNode = r;
        }
        return ft(t), null;
      case 13:
        if (Ie(Ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Pa(), sr(), t.flags |= 98560, l = !1;
          else if (l = Oi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
              l[Qt] = t;
            } else sr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ft(t), l = !1;
          } else Ft !== null && (Yl(Ft), Ft = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ue.current & 1) !== 0 ? rt === 0 && (rt = 3) : Zl())), t.updateQueue !== null && (t.flags |= 4), ft(t), null);
      case 4:
        return ur(), Dl(e, t), e === null && Or(t.stateNode.containerInfo), ft(t), null;
      case 10:
        return dl(t.type._context), ft(t), null;
      case 17:
        return yt(t.type) && Pi(), ft(t), null;
      case 19:
        if (Ie(Ue), l = t.memoizedState, l === null) return ft(t), null;
        if (r = (t.flags & 128) !== 0, a = l.rendering, a === null) if (r) Yr(l, !1);
        else {
          if (rt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (a = Hi(e), a !== null) {
              for (t.flags |= 128, Yr(l, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, e = a.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Pe(Ue, Ue.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && Ze() > hr && (t.flags |= 128, r = !0, Yr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Hi(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yr(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !Oe) return ft(t), null;
          } else 2 * Ze() - l.renderingStartTime > hr && n !== 1073741824 && (t.flags |= 128, r = !0, Yr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (a.sibling = t.child, t.child = a) : (n = l.last, n !== null ? n.sibling = a : t.child = a, l.last = a);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ze(), t.sibling = null, n = Ue.current, Pe(Ue, r ? n & 1 | 2 : n & 1), t) : (ft(t), null);
      case 22:
      case 23:
        return Jl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Tt & 1073741824) !== 0 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ft(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function od(e, t) {
    switch (ll(t), t.tag) {
      case 1:
        return yt(t.type) && Pi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(), Ie(vt), Ie(ut), kl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return yl(t), null;
      case 13:
        if (Ie(Ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          sr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ie(Ue), null;
      case 4:
        return ur(), null;
      case 10:
        return dl(t.type._context), null;
      case 22:
      case 23:
        return Jl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zi = !1, dt = !1, ad = typeof WeakSet == "function" ? WeakSet : Set, G = null;
  function fr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ge(e, t, r);
    }
    else n.current = null;
  }
  function Bl(e, t, n) {
    try {
      n();
    } catch (r) {
      Ge(e, t, r);
    }
  }
  var Ru = !1;
  function ud(e, t) {
    if (Js = gi, e = aa(), Hs(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, d = -1, m = -1, S = 0, M = 0, R = e, N = null;
          t: for (; ; ) {
            for (var W; R !== n || i !== 0 && R.nodeType !== 3 || (d = a + i), R !== l || r !== 0 && R.nodeType !== 3 || (m = a + r), R.nodeType === 3 && (a += R.nodeValue.length), (W = R.firstChild) !== null; )
              N = R, R = W;
            for (; ; ) {
              if (R === e) break t;
              if (N === n && ++S === i && (d = a), N === l && ++M === r && (m = a), (W = R.nextSibling) !== null) break;
              R = N, N = R.parentNode;
            }
            R = W;
          }
          n = d === -1 || m === -1 ? null : { start: d, end: m };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Zs = { focusedElem: e, selectionRange: n }, gi = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
    else for (; G !== null; ) {
      t = G;
      try {
        var q = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (q !== null) {
              var Y = q.memoizedProps, be = q.memoizedState, g = t.stateNode, v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? Y : Ot(t.type, Y), be);
              g.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          case 3:
            var k = t.stateNode.containerInfo;
            k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (F) {
        Ge(t, t.return, F);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, G = e;
        break;
      }
      G = t.return;
    }
    return q = Ru, Ru = !1, q;
  }
  function Xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var l = i.destroy;
          i.destroy = void 0, l !== void 0 && Bl(t, n, l);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function bi(e, t) {
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
  function $l(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Lu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Lu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qt], delete t[Br], delete t[nl], delete t[Kf], delete t[Qf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Pu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Au(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Pu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ri));
    else if (r !== 4 && (e = e.child, e !== null)) for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), e = e.sibling;
  }
  function Ul(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ul(e, t, n), e = e.sibling; e !== null; ) Ul(e, t, n), e = e.sibling;
  }
  var ot = null, Dt = !1;
  function wn(e, t, n) {
    for (n = n.child; n !== null; ) zu(e, t, n), n = n.sibling;
  }
  function zu(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
      Kt.onCommitFiberUnmount(di, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        dt || fr(n, t);
      case 6:
        var r = ot, i = Dt;
        ot = null, wn(e, t, n), ot = r, Dt = i, ot !== null && (Dt ? (e = ot, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ot.removeChild(n.stateNode));
        break;
      case 18:
        ot !== null && (Dt ? (e = ot, n = n.stateNode, e.nodeType === 8 ? tl(e.parentNode, n) : e.nodeType === 1 && tl(e, n), Nr(e)) : tl(ot, n.stateNode));
        break;
      case 4:
        r = ot, i = Dt, ot = n.stateNode.containerInfo, Dt = !0, wn(e, t, n), ot = r, Dt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var l = i, a = l.destroy;
            l = l.tag, a !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Bl(n, t, a), i = i.next;
          } while (i !== r);
        }
        wn(e, t, n);
        break;
      case 1:
        if (!dt && (fr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (d) {
          Ge(n, t, d);
        }
        wn(e, t, n);
        break;
      case 21:
        wn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (dt = (r = dt) || n.memoizedState !== null, wn(e, t, n), dt = r) : wn(e, t, n);
        break;
      default:
        wn(e, t, n);
    }
  }
  function Iu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ad()), t.forEach(function(r) {
        var i = gd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function Bt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e, a = t, d = a;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              ot = d.stateNode, Dt = !1;
              break e;
            case 3:
              ot = d.stateNode.containerInfo, Dt = !0;
              break e;
            case 4:
              ot = d.stateNode.containerInfo, Dt = !0;
              break e;
          }
          d = d.return;
        }
        if (ot === null) throw Error(o(160));
        zu(l, a, i), ot = null, Dt = !1;
        var m = i.alternate;
        m !== null && (m.return = null), i.return = null;
      } catch (S) {
        Ge(i, t, S);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Fu(t, e), t = t.sibling;
  }
  function Fu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bt(t, e), Yt(e), r & 4) {
          try {
            Xr(3, e, e.return), bi(3, e);
          } catch (Y) {
            Ge(e, e.return, Y);
          }
          try {
            Xr(5, e, e.return);
          } catch (Y) {
            Ge(e, e.return, Y);
          }
        }
        break;
      case 1:
        Bt(t, e), Yt(e), r & 512 && n !== null && fr(n, n.return);
        break;
      case 5:
        if (Bt(t, e), Yt(e), r & 512 && n !== null && fr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Ut(i, "");
          } catch (Y) {
            Ge(e, e.return, Y);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var l = e.memoizedProps, a = n !== null ? n.memoizedProps : l, d = e.type, m = e.updateQueue;
          if (e.updateQueue = null, m !== null) try {
            d === "input" && l.type === "radio" && l.name != null && ge(i, l), ke(d, a);
            var S = ke(d, l);
            for (a = 0; a < m.length; a += 2) {
              var M = m[a], R = m[a + 1];
              M === "style" ? Jt(i, R) : M === "dangerouslySetInnerHTML" ? Xt(i, R) : M === "children" ? Ut(i, R) : K(i, M, R, S);
            }
            switch (d) {
              case "input":
                Te(i, l);
                break;
              case "textarea":
                Ce(i, l);
                break;
              case "select":
                var N = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var W = l.value;
                W != null ? Xe(i, !!l.multiple, W, !1) : N !== !!l.multiple && (l.defaultValue != null ? Xe(
                  i,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : Xe(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Br] = l;
          } catch (Y) {
            Ge(e, e.return, Y);
          }
        }
        break;
      case 6:
        if (Bt(t, e), Yt(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          i = e.stateNode, l = e.memoizedProps;
          try {
            i.nodeValue = l;
          } catch (Y) {
            Ge(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (Bt(t, e), Yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Nr(t.containerInfo);
        } catch (Y) {
          Ge(e, e.return, Y);
        }
        break;
      case 4:
        Bt(t, e), Yt(e);
        break;
      case 13:
        Bt(t, e), Yt(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Kl = Ze())), r & 4 && Iu(e);
        break;
      case 22:
        if (M = n !== null && n.memoizedState !== null, e.mode & 1 ? (dt = (S = dt) || M, Bt(t, e), dt = S) : Bt(t, e), Yt(e), r & 8192) {
          if (S = e.memoizedState !== null, (e.stateNode.isHidden = S) && !M && (e.mode & 1) !== 0) for (G = e, M = e.child; M !== null; ) {
            for (R = G = M; G !== null; ) {
              switch (N = G, W = N.child, N.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xr(4, N, N.return);
                  break;
                case 1:
                  fr(N, N.return);
                  var q = N.stateNode;
                  if (typeof q.componentWillUnmount == "function") {
                    r = N, n = N.return;
                    try {
                      t = r, q.props = t.memoizedProps, q.state = t.memoizedState, q.componentWillUnmount();
                    } catch (Y) {
                      Ge(r, n, Y);
                    }
                  }
                  break;
                case 5:
                  fr(N, N.return);
                  break;
                case 22:
                  if (N.memoizedState !== null) {
                    Bu(R);
                    continue;
                  }
              }
              W !== null ? (W.return = N, G = W) : Bu(R);
            }
            M = M.sibling;
          }
          e: for (M = null, R = e; ; ) {
            if (R.tag === 5) {
              if (M === null) {
                M = R;
                try {
                  i = R.stateNode, S ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (d = R.stateNode, m = R.memoizedProps.style, a = m != null && m.hasOwnProperty("display") ? m.display : null, d.style.display = oe("display", a));
                } catch (Y) {
                  Ge(e, e.return, Y);
                }
              }
            } else if (R.tag === 6) {
              if (M === null) try {
                R.stateNode.nodeValue = S ? "" : R.memoizedProps;
              } catch (Y) {
                Ge(e, e.return, Y);
              }
            } else if ((R.tag !== 22 && R.tag !== 23 || R.memoizedState === null || R === e) && R.child !== null) {
              R.child.return = R, R = R.child;
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              M === R && (M = null), R = R.return;
            }
            M === R && (M = null), R.sibling.return = R.return, R = R.sibling;
          }
        }
        break;
      case 19:
        Bt(t, e), Yt(e), r & 4 && Iu(e);
        break;
      case 21:
        break;
      default:
        Bt(
          t,
          e
        ), Yt(e);
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Pu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Ut(i, ""), r.flags &= -33);
            var l = Au(e);
            Ul(e, l, i);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, d = Au(e);
            Vl(e, d, a);
            break;
          default:
            throw Error(o(161));
        }
      } catch (m) {
        Ge(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function cd(e, t, n) {
    G = e, Ou(e);
  }
  function Ou(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
      var i = G, l = i.child;
      if (i.tag === 22 && r) {
        var a = i.memoizedState !== null || Zi;
        if (!a) {
          var d = i.alternate, m = d !== null && d.memoizedState !== null || dt;
          d = Zi;
          var S = dt;
          if (Zi = a, (dt = m) && !S) for (G = i; G !== null; ) a = G, m = a.child, a.tag === 22 && a.memoizedState !== null ? $u(i) : m !== null ? (m.return = a, G = m) : $u(i);
          for (; l !== null; ) G = l, Ou(l), l = l.sibling;
          G = i, Zi = d, dt = S;
        }
        Du(e);
      } else (i.subtreeFlags & 8772) !== 0 && l !== null ? (l.return = i, G = l) : Du(e);
    }
  }
  function Du(e) {
    for (; G !== null; ) {
      var t = G;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              dt || bi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !dt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Ot(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var l = t.updateQueue;
              l !== null && Ba(t, l, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Ba(t, a, n);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (n === null && t.flags & 4) {
                n = d;
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
                var S = t.alternate;
                if (S !== null) {
                  var M = S.memoizedState;
                  if (M !== null) {
                    var R = M.dehydrated;
                    R !== null && Nr(R);
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
          dt || t.flags & 512 && $l(t);
        } catch (N) {
          Ge(t, t.return, N);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, G = n;
        break;
      }
      G = t.return;
    }
  }
  function Bu(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, G = n;
        break;
      }
      G = t.return;
    }
  }
  function $u(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              bi(4, t);
            } catch (m) {
              Ge(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                Ge(t, i, m);
              }
            }
            var l = t.return;
            try {
              $l(t);
            } catch (m) {
              Ge(t, l, m);
            }
            break;
          case 5:
            var a = t.return;
            try {
              $l(t);
            } catch (m) {
              Ge(t, a, m);
            }
        }
      } catch (m) {
        Ge(t, t.return, m);
      }
      if (t === e) {
        G = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, G = d;
        break;
      }
      G = t.return;
    }
  }
  var fd = Math.ceil, es = b.ReactCurrentDispatcher, Hl = b.ReactCurrentOwner, Lt = b.ReactCurrentBatchConfig, Se = 0, st = null, tt = null, at = 0, Tt = 0, dr = mn(0), rt = 0, Jr = null, Fn = 0, ts = 0, Wl = 0, Zr = null, kt = null, Kl = 0, hr = 1 / 0, on = null, ns = !1, Ql = null, xn = null, rs = !1, Sn = null, is = 0, br = 0, Gl = null, ss = -1, ls = 0;
  function mt() {
    return (Se & 6) !== 0 ? Ze() : ss !== -1 ? ss : ss = Ze();
  }
  function En(e) {
    return (e.mode & 1) === 0 ? 1 : (Se & 2) !== 0 && at !== 0 ? at & -at : qf.transition !== null ? (ls === 0 && (ls = Ao()), ls) : (e = Ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uo(e.type)), e);
  }
  function $t(e, t, n, r) {
    if (50 < br) throw br = 0, Gl = null, Error(o(185));
    Er(e, n, r), ((Se & 2) === 0 || e !== st) && (e === st && ((Se & 2) === 0 && (ts |= n), rt === 4 && _n(e, at)), wt(e, r), n === 1 && Se === 0 && (t.mode & 1) === 0 && (hr = Ze() + 500, zi && yn()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    Gc(e, t);
    var r = mi(e, e === st ? at : 0);
    if (r === 0) n !== null && Ro(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ro(n), t === 1) e.tag === 0 ? Gf(Uu.bind(null, e)) : Ca(Uu.bind(null, e)), Hf(function() {
        (Se & 6) === 0 && yn();
      }), n = null;
      else {
        switch (zo(r)) {
          case 1:
            n = js;
            break;
          case 4:
            n = Lo;
            break;
          case 16:
            n = fi;
            break;
          case 536870912:
            n = Po;
            break;
          default:
            n = fi;
        }
        n = Xu(n, Vu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Vu(e, t) {
    if (ss = -1, ls = 0, (Se & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (pr() && e.callbackNode !== n) return null;
    var r = mi(e, e === st ? at : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = os(e, r);
    else {
      t = r;
      var i = Se;
      Se |= 2;
      var l = Wu();
      (st !== e || at !== t) && (on = null, hr = Ze() + 500, Dn(e, t));
      do
        try {
          pd();
          break;
        } catch (d) {
          Hu(e, d);
        }
      while (!0);
      fl(), es.current = l, Se = i, tt !== null ? t = 0 : (st = null, at = 0, t = rt);
    }
    if (t !== 0) {
      if (t === 2 && (i = Cs(e), i !== 0 && (r = i, t = ql(e, i))), t === 1) throw n = Jr, Dn(e, 0), _n(e, r), wt(e, Ze()), n;
      if (t === 6) _n(e, r);
      else {
        if (i = e.current.alternate, (r & 30) === 0 && !dd(i) && (t = os(e, r), t === 2 && (l = Cs(e), l !== 0 && (r = l, t = ql(e, l))), t === 1)) throw n = Jr, Dn(e, 0), _n(e, r), wt(e, Ze()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Bn(e, kt, on);
            break;
          case 3:
            if (_n(e, r), (r & 130023424) === r && (t = Kl + 500 - Ze(), 10 < t)) {
              if (mi(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                mt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = el(Bn.bind(null, e, kt, on), t);
              break;
            }
            Bn(e, kt, on);
            break;
          case 4:
            if (_n(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - zt(r);
              l = 1 << a, a = t[a], a > i && (i = a), r &= ~l;
            }
            if (r = i, r = Ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = el(Bn.bind(null, e, kt, on), r);
              break;
            }
            Bn(e, kt, on);
            break;
          case 5:
            Bn(e, kt, on);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return wt(e, Ze()), e.callbackNode === n ? Vu.bind(null, e) : null;
  }
  function ql(e, t) {
    var n = Zr;
    return e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256), e = os(e, t), e !== 2 && (t = kt, kt = n, t !== null && Yl(t)), e;
  }
  function Yl(e) {
    kt === null ? kt = e : kt.push.apply(kt, e);
  }
  function dd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], l = i.getSnapshot;
          i = i.value;
          try {
            if (!It(l(), i)) return !1;
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
  function _n(e, t) {
    for (t &= ~Wl, t &= ~ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - zt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Uu(e) {
    if ((Se & 6) !== 0) throw Error(o(327));
    pr();
    var t = mi(e, 0);
    if ((t & 1) === 0) return wt(e, Ze()), null;
    var n = os(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Cs(e);
      r !== 0 && (t = r, n = ql(e, r));
    }
    if (n === 1) throw n = Jr, Dn(e, 0), _n(e, t), wt(e, Ze()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, kt, on), wt(e, Ze()), null;
  }
  function Xl(e, t) {
    var n = Se;
    Se |= 1;
    try {
      return e(t);
    } finally {
      Se = n, Se === 0 && (hr = Ze() + 500, zi && yn());
    }
  }
  function On(e) {
    Sn !== null && Sn.tag === 0 && (Se & 6) === 0 && pr();
    var t = Se;
    Se |= 1;
    var n = Lt.transition, r = Ne;
    try {
      if (Lt.transition = null, Ne = 1, e) return e();
    } finally {
      Ne = r, Lt.transition = n, Se = t, (Se & 6) === 0 && yn();
    }
  }
  function Jl() {
    Tt = dr.current, Ie(dr);
  }
  function Dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Uf(n)), tt !== null) for (n = tt.return; n !== null; ) {
      var r = n;
      switch (ll(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Pi();
          break;
        case 3:
          ur(), Ie(vt), Ie(ut), kl();
          break;
        case 5:
          yl(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          Ie(Ue);
          break;
        case 19:
          Ie(Ue);
          break;
        case 10:
          dl(r.type._context);
          break;
        case 22:
        case 23:
          Jl();
      }
      n = n.return;
    }
    if (st = e, tt = e = Tn(e.current, null), at = Tt = t, rt = 0, Jr = null, Wl = ts = Fn = 0, kt = Zr = null, An !== null) {
      for (t = 0; t < An.length; t++) if (n = An[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, l = n.pending;
        if (l !== null) {
          var a = l.next;
          l.next = i, r.next = a;
        }
        n.pending = r;
      }
      An = null;
    }
    return e;
  }
  function Hu(e, t) {
    do {
      var n = tt;
      try {
        if (fl(), Wi.current = qi, Ki) {
          for (var r = He.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ki = !1;
        }
        if (In = 0, it = nt = He = null, Kr = !1, Qr = 0, Hl.current = null, n === null || n.return === null) {
          rt = 1, Jr = t, tt = null;
          break;
        }
        e: {
          var l = e, a = n.return, d = n, m = t;
          if (t = at, d.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
            var S = m, M = d, R = M.tag;
            if ((M.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var N = M.alternate;
              N ? (M.updateQueue = N.updateQueue, M.memoizedState = N.memoizedState, M.lanes = N.lanes) : (M.updateQueue = null, M.memoizedState = null);
            }
            var W = pu(a);
            if (W !== null) {
              W.flags &= -257, mu(W, a, d, l, t), W.mode & 1 && hu(l, S, t), t = W, m = S;
              var q = t.updateQueue;
              if (q === null) {
                var Y = /* @__PURE__ */ new Set();
                Y.add(m), t.updateQueue = Y;
              } else q.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                hu(l, S, t), Zl();
                break e;
              }
              m = Error(o(426));
            }
          } else if (Oe && d.mode & 1) {
            var be = pu(a);
            if (be !== null) {
              (be.flags & 65536) === 0 && (be.flags |= 256), mu(be, a, d, l, t), ul(cr(m, d));
              break e;
            }
          }
          l = m = cr(m, d), rt !== 4 && (rt = 2), Zr === null ? Zr = [l] : Zr.push(l), l = a;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var g = fu(l, m, t);
                Da(l, g);
                break e;
              case 1:
                d = m;
                var v = l.type, k = l.stateNode;
                if ((l.flags & 128) === 0 && (typeof v.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (xn === null || !xn.has(k)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var F = du(l, d, t);
                  Da(l, F);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Qu(n);
      } catch (J) {
        t = J, tt === n && n !== null && (tt = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Wu() {
    var e = es.current;
    return es.current = qi, e === null ? qi : e;
  }
  function Zl() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4), st === null || (Fn & 268435455) === 0 && (ts & 268435455) === 0 || _n(st, at);
  }
  function os(e, t) {
    var n = Se;
    Se |= 2;
    var r = Wu();
    (st !== e || at !== t) && (on = null, Dn(e, t));
    do
      try {
        hd();
        break;
      } catch (i) {
        Hu(e, i);
      }
    while (!0);
    if (fl(), Se = n, es.current = r, tt !== null) throw Error(o(261));
    return st = null, at = 0, rt;
  }
  function hd() {
    for (; tt !== null; ) Ku(tt);
  }
  function pd() {
    for (; tt !== null && !Dc(); ) Ku(tt);
  }
  function Ku(e) {
    var t = Yu(e.alternate, e, Tt);
    e.memoizedProps = e.pendingProps, t === null ? Qu(e) : tt = t, Hl.current = null;
  }
  function Qu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ld(n, t, Tt), n !== null) {
          tt = n;
          return;
        }
      } else {
        if (n = od(n, t), n !== null) {
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
  function Bn(e, t, n) {
    var r = Ne, i = Lt.transition;
    try {
      Lt.transition = null, Ne = 1, md(e, t, n, r);
    } finally {
      Lt.transition = i, Ne = r;
    }
    return null;
  }
  function md(e, t, n, r) {
    do
      pr();
    while (Sn !== null);
    if ((Se & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (qc(e, l), e === st && (tt = st = null, at = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || rs || (rs = !0, Xu(fi, function() {
      return pr(), null;
    })), l = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || l) {
      l = Lt.transition, Lt.transition = null;
      var a = Ne;
      Ne = 1;
      var d = Se;
      Se |= 4, Hl.current = null, ud(e, n), Fu(n, e), If(Zs), gi = !!Js, Zs = Js = null, e.current = n, cd(n), Bc(), Se = d, Ne = a, Lt.transition = l;
    } else e.current = n;
    if (rs && (rs = !1, Sn = e, is = i), l = e.pendingLanes, l === 0 && (xn = null), Uc(n.stateNode), wt(e, Ze()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ns) throw ns = !1, e = Ql, Ql = null, e;
    return (is & 1) !== 0 && e.tag !== 0 && pr(), l = e.pendingLanes, (l & 1) !== 0 ? e === Gl ? br++ : (br = 0, Gl = e) : br = 0, yn(), null;
  }
  function pr() {
    if (Sn !== null) {
      var e = zo(is), t = Lt.transition, n = Ne;
      try {
        if (Lt.transition = null, Ne = 16 > e ? 16 : e, Sn === null) var r = !1;
        else {
          if (e = Sn, Sn = null, is = 0, (Se & 6) !== 0) throw Error(o(331));
          var i = Se;
          for (Se |= 4, G = e.current; G !== null; ) {
            var l = G, a = l.child;
            if ((G.flags & 16) !== 0) {
              var d = l.deletions;
              if (d !== null) {
                for (var m = 0; m < d.length; m++) {
                  var S = d[m];
                  for (G = S; G !== null; ) {
                    var M = G;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xr(8, M, l);
                    }
                    var R = M.child;
                    if (R !== null) R.return = M, G = R;
                    else for (; G !== null; ) {
                      M = G;
                      var N = M.sibling, W = M.return;
                      if (Lu(M), M === S) {
                        G = null;
                        break;
                      }
                      if (N !== null) {
                        N.return = W, G = N;
                        break;
                      }
                      G = W;
                    }
                  }
                }
                var q = l.alternate;
                if (q !== null) {
                  var Y = q.child;
                  if (Y !== null) {
                    q.child = null;
                    do {
                      var be = Y.sibling;
                      Y.sibling = null, Y = be;
                    } while (Y !== null);
                  }
                }
                G = l;
              }
            }
            if ((l.subtreeFlags & 2064) !== 0 && a !== null) a.return = l, G = a;
            else e: for (; G !== null; ) {
              if (l = G, (l.flags & 2048) !== 0) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Xr(9, l, l.return);
              }
              var g = l.sibling;
              if (g !== null) {
                g.return = l.return, G = g;
                break e;
              }
              G = l.return;
            }
          }
          var v = e.current;
          for (G = v; G !== null; ) {
            a = G;
            var k = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && k !== null) k.return = a, G = k;
            else e: for (a = v; G !== null; ) {
              if (d = G, (d.flags & 2048) !== 0) try {
                switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bi(9, d);
                }
              } catch (J) {
                Ge(d, d.return, J);
              }
              if (d === a) {
                G = null;
                break e;
              }
              var F = d.sibling;
              if (F !== null) {
                F.return = d.return, G = F;
                break e;
              }
              G = d.return;
            }
          }
          if (Se = i, yn(), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
            Kt.onPostCommitFiberRoot(di, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ne = n, Lt.transition = t;
      }
    }
    return !1;
  }
  function Gu(e, t, n) {
    t = cr(n, t), t = fu(e, t, 1), e = kn(e, t, 1), t = mt(), e !== null && (Er(e, 1, t), wt(e, t));
  }
  function Ge(e, t, n) {
    if (e.tag === 3) Gu(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Gu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xn === null || !xn.has(r))) {
          e = cr(n, e), e = du(t, e, 1), t = kn(t, e, 1), e = mt(), t !== null && (Er(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function vd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = mt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (at & n) === n && (rt === 4 || rt === 3 && (at & 130023424) === at && 500 > Ze() - Kl ? Dn(e, 0) : Wl |= n), wt(e, t);
  }
  function qu(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = pi, pi <<= 1, (pi & 130023424) === 0 && (pi = 4194304)));
    var n = mt();
    e = rn(e, t), e !== null && (Er(e, t, n), wt(e, n));
  }
  function yd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qu(e, n);
  }
  function gd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), qu(e, n);
  }
  var Yu;
  Yu = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || vt.current) gt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return gt = !1, sd(e, t, n);
      gt = (e.flags & 131072) !== 0;
    }
    else gt = !1, Oe && (t.flags & 1048576) !== 0 && Na(t, Fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Ji(e, t), e = t.pendingProps;
        var i = nr(t, ut.current);
        ar(t, n), i = Sl(null, t, r, e, i, n);
        var l = El();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(r) ? (l = !0, Ai(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ml(t), i.updater = Yi, t.stateNode = i, i._reactInternals = t, Ml(t, r, e, n), t = Al(null, t, r, !0, l, n)) : (t.tag = 0, Oe && l && sl(t), pt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Ji(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = wd(r), e = Ot(r, e), i) {
            case 0:
              t = Pl(null, t, r, e, n);
              break e;
            case 1:
              t = xu(null, t, r, e, n);
              break e;
            case 11:
              t = vu(null, t, r, e, n);
              break e;
            case 14:
              t = yu(null, t, r, Ot(r.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ot(r, i), Pl(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ot(r, i), xu(e, t, r, i, n);
      case 3:
        e: {
          if (Su(t), e === null) throw Error(o(387));
          r = t.pendingProps, l = t.memoizedState, i = l.element, Oa(e, t), Ui(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            i = cr(Error(o(423)), t), t = Eu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = cr(Error(o(424)), t), t = Eu(e, t, r, n, i);
            break e;
          } else for (_t = pn(t.stateNode.containerInfo.firstChild), Et = t, Oe = !0, Ft = null, n = Ia(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (sr(), r === i) {
              t = ln(e, t, n);
              break e;
            }
            pt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return $a(t), e === null && al(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, a = i.children, bs(r, i) ? a = null : l !== null && bs(r, l) && (t.flags |= 32), wu(e, t), pt(e, t, a, n), t.child;
      case 6:
        return e === null && al(t), null;
      case 13:
        return _u(e, t, n);
      case 4:
        return vl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = lr(t, null, r, n) : pt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ot(r, i), vu(e, t, r, i, n);
      case 7:
        return pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, a = i.value, Pe(Bi, r._currentValue), r._currentValue = a, l !== null) if (It(l.value, a)) {
            if (l.children === i.children && !vt.current) {
              t = ln(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var d = l.dependencies;
            if (d !== null) {
              a = l.child;
              for (var m = d.firstContext; m !== null; ) {
                if (m.context === r) {
                  if (l.tag === 1) {
                    m = sn(-1, n & -n), m.tag = 2;
                    var S = l.updateQueue;
                    if (S !== null) {
                      S = S.shared;
                      var M = S.pending;
                      M === null ? m.next = m : (m.next = M.next, M.next = m), S.pending = m;
                    }
                  }
                  l.lanes |= n, m = l.alternate, m !== null && (m.lanes |= n), hl(
                    l.return,
                    n,
                    t
                  ), d.lanes |= n;
                  break;
                }
                m = m.next;
              }
            } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
            else if (l.tag === 18) {
              if (a = l.return, a === null) throw Error(o(341));
              a.lanes |= n, d = a.alternate, d !== null && (d.lanes |= n), hl(a, n, t), a = l.sibling;
            } else a = l.child;
            if (a !== null) a.return = l;
            else for (a = l; a !== null; ) {
              if (a === t) {
                a = null;
                break;
              }
              if (l = a.sibling, l !== null) {
                l.return = a.return, a = l;
                break;
              }
              a = a.return;
            }
            l = a;
          }
          pt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, ar(t, n), i = Mt(i), r = r(i), t.flags |= 1, pt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Ot(r, t.pendingProps), i = Ot(r.type, i), yu(e, t, r, i, n);
      case 15:
        return gu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ot(r, i), Ji(e, t), t.tag = 1, yt(r) ? (e = !0, Ai(t)) : e = !1, ar(t, n), uu(t, r, i), Ml(t, r, i, n), Al(null, t, r, !0, e, n);
      case 19:
        return ju(e, t, n);
      case 22:
        return ku(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Xu(e, t) {
    return Mo(e, t);
  }
  function kd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, n, r) {
    return new kd(e, t, n, r);
  }
  function bl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function wd(e) {
    if (typeof e == "function") return bl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === De) return 11;
      if (e === Ke) return 14;
    }
    return 2;
  }
  function Tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function as(e, t, n, r, i, l) {
    var a = 2;
    if (r = e, typeof e == "function") bl(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
      case re:
        return $n(n.children, i, l, t);
      case he:
        a = 8, i |= 8;
        break;
      case Me:
        return e = Pt(12, n, t, i | 2), e.elementType = Me, e.lanes = l, e;
      case Re:
        return e = Pt(13, n, t, i), e.elementType = Re, e.lanes = l, e;
      case Be:
        return e = Pt(19, n, t, i), e.elementType = Be, e.lanes = l, e;
      case Ee:
        return us(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            a = 10;
            break e;
          case We:
            a = 9;
            break e;
          case De:
            a = 11;
            break e;
          case Ke:
            a = 14;
            break e;
          case Le:
            a = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = Pt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function $n(e, t, n, r) {
    return e = Pt(7, e, r, t), e.lanes = n, e;
  }
  function us(e, t, n, r) {
    return e = Pt(22, e, r, t), e.elementType = Ee, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function eo(e, t, n) {
    return e = Pt(6, e, null, t), e.lanes = n, e;
  }
  function to(e, t, n) {
    return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function xd(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ns(0), this.expirationTimes = Ns(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ns(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function no(e, t, n, r, i, l, a, d, m) {
    return e = new xd(e, t, n, d, m), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Pt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ml(l), e;
  }
  function Sd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ju(e) {
    if (!e) return vn;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (yt(t.type)) {
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
      if (yt(n)) return Ta(e, n, t);
    }
    return t;
  }
  function Zu(e, t, n, r, i, l, a, d, m) {
    return e = no(n, r, !0, e, i, l, a, d, m), e.context = Ju(null), n = e.current, r = mt(), i = En(n), l = sn(r, i), l.callback = t ?? null, kn(n, l, i), e.current.lanes = i, Er(e, i, r), wt(e, r), e;
  }
  function cs(e, t, n, r) {
    var i = t.current, l = mt(), a = En(i);
    return n = Ju(n), t.context === null ? t.context = n : t.pendingContext = n, t = sn(l, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kn(i, t, a), e !== null && ($t(e, i, a, l), Vi(e, i, a)), a;
  }
  function fs(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function bu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ro(e, t) {
    bu(e, t), (e = e.alternate) && bu(e, t);
  }
  function Ed() {
    return null;
  }
  var ec = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function io(e) {
    this._internalRoot = e;
  }
  ds.prototype.render = io.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    cs(e, t, null, null);
  }, ds.prototype.unmount = io.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      On(function() {
        cs(null, e, null, null);
      }), t[bt] = null;
    }
  };
  function ds(e) {
    this._internalRoot = e;
  }
  ds.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++) ;
      fn.splice(n, 0, e), n === 0 && $o(e);
    }
  };
  function so(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function hs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function tc() {
  }
  function _d(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var S = fs(a);
          l.call(S);
        };
      }
      var a = Zu(t, r, e, 0, null, !1, !1, "", tc);
      return e._reactRootContainer = a, e[bt] = a.current, Or(e.nodeType === 8 ? e.parentNode : e), On(), a;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var d = r;
      r = function() {
        var S = fs(m);
        d.call(S);
      };
    }
    var m = no(e, 0, !1, null, null, !1, !1, "", tc);
    return e._reactRootContainer = m, e[bt] = m.current, Or(e.nodeType === 8 ? e.parentNode : e), On(function() {
      cs(t, m, n, r);
    }), m;
  }
  function ps(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var a = l;
      if (typeof i == "function") {
        var d = i;
        i = function() {
          var m = fs(a);
          d.call(m);
        };
      }
      cs(t, a, e, i);
    } else a = _d(n, t, e, i, r);
    return fs(a);
  }
  Io = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Sr(t.pendingLanes);
          n !== 0 && (Ms(t, n | 1), wt(t, Ze()), (Se & 6) === 0 && (hr = Ze() + 500, yn()));
        }
        break;
      case 13:
        On(function() {
          var r = rn(e, 1);
          if (r !== null) {
            var i = mt();
            $t(r, e, 1, i);
          }
        }), ro(e, 1);
    }
  }, Rs = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = mt();
        $t(t, e, 134217728, n);
      }
      ro(e, 134217728);
    }
  }, Fo = function(e) {
    if (e.tag === 13) {
      var t = En(e), n = rn(e, t);
      if (n !== null) {
        var r = mt();
        $t(n, e, t, r);
      }
      ro(e, t);
    }
  }, Oo = function() {
    return Ne;
  }, Do = function(e, t) {
    var n = Ne;
    try {
      return Ne = e, t();
    } finally {
      Ne = n;
    }
  }, Zt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Te(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Li(r);
              if (!i) throw Error(o(90));
              te(r), Te(r, i);
            }
          }
        }
        break;
      case "textarea":
        Ce(e, n);
        break;
      case "select":
        t = n.value, t != null && Xe(e, !!n.multiple, t, !1);
    }
  }, So = Xl, Eo = On;
  var Td = { usingClientEntryPoint: !1, Events: [$r, er, Li, Kn, Qn, Xl] }, ei = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jd = { bundleType: ei.bundleType, version: ei.version, rendererPackageName: ei.rendererPackageName, rendererConfig: ei.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Co(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ei.findFiberByHostInstance || Ed, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ms.isDisabled && ms.supportsFiber) try {
      di = ms.inject(jd), Kt = ms;
    } catch {
    }
  }
  return xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Td, xt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!so(t)) throw Error(o(200));
    return Sd(e, t, null, n);
  }, xt.createRoot = function(e, t) {
    if (!so(e)) throw Error(o(299));
    var n = !1, r = "", i = ec;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = no(e, 1, !1, null, null, n, !1, r, i), e[bt] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new io(t);
  }, xt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = Co(t), e = e === null ? null : e.stateNode, e;
  }, xt.flushSync = function(e) {
    return On(e);
  }, xt.hydrate = function(e, t, n) {
    if (!hs(t)) throw Error(o(200));
    return ps(null, e, t, !0, n);
  }, xt.hydrateRoot = function(e, t, n) {
    if (!so(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, i = !1, l = "", a = ec;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Zu(t, null, e, 1, n ?? null, i, !1, l, a), e[bt] = t.current, Or(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new ds(t);
  }, xt.render = function(e, t, n) {
    if (!hs(t)) throw Error(o(200));
    return ps(null, e, t, !1, n);
  }, xt.unmountComponentAtNode = function(e) {
    if (!hs(e)) throw Error(o(40));
    return e._reactRootContainer ? (On(function() {
      ps(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bt] = null;
      });
    }), !0) : !1;
  }, xt.unstable_batchedUpdates = Xl, xt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hs(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ps(e, t, n, !1, r);
  }, xt.version = "18.3.1-next-f1338f8080-20240426", xt;
}
var uc;
function Id() {
  if (uc) return ao.exports;
  uc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
  }
  return u(), ao.exports = zd(), ao.exports;
}
var cc;
function Fd() {
  if (cc) return vs;
  cc = 1;
  var u = Id();
  return vs.createRoot = u.createRoot, vs.hydrateRoot = u.hydrateRoot, vs;
}
var Od = Fd();
const Dd = (() => {
  const u = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], s = "CDEFGAB", o = [0, 2, 4, 5, 7, 9, 11], c = [64, 59, 55, 50, 45, 40], f = c.at(-1), h = { pentatonic: 15, "3nps": 17 }, w = 7, x = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], E = ["e", "B", "G", "D", "A", "E"], _ = ["ohut e", "B", "G", "D", "A", "paksu E"], j = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], T = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], L = {
    mp: {
      name: "mollipentatoninen",
      base: j,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: j,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: j,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: j,
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
  }, V = 26, O = 72, P = 30, D = 54, Z = 34, A = 11, K = (V + O) / 2, b = P + (c.length - 1) * Z + 30, Q = (I) => O + I * D, H = (I) => I === 0 ? K : Q(I) - D / 2, re = (I) => P + I * Z;
  function he(I, $, z) {
    const X = s.indexOf(u[I][0]) + Number(z.slice(-1)) - 1, ce = X % s.length, te = o[ce] + 12 * Math.floor(X / s.length), ie = I + $ - te;
    return s[ce] + (ie < 0 ? "♭" : "♯").repeat(Math.abs(ie));
  }
  function Me(I) {
    return [...I.base, ...I.add].sort(($, z) => $[0] - z[0]);
  }
  function xe(I, $, z) {
    const X = $ + (z ? 1 : 0), ce = x[X % x.length], te = Math.min(...ce.map(([Te]) => Te)), ie = Math.max(...ce.map(([, Te]) => Te));
    let ge = (I - f % 12 + 12) % 12 - (z ? 8 : 5) + 12 * Math.floor(X / x.length);
    return te + ge < 0 && (ge += 12), ie + ge > h.pentatonic && (ge -= 12), {
      strings: ce.map((Te) => Te.map((Qe) => Qe + ge)),
      start: te + ge,
      end: ie + ge
    };
  }
  function We(I, $, z) {
    const X = z[$], ce = (I + X - f % 12 + 12) % 12, te = f + ce - X, ie = c.map((ne, ve) => {
      const ge = $ + (c.length - 1 - ve) * 3;
      return [ge, ge + 1, ge + 2].map((Te) => {
        const Qe = Math.floor(Te / z.length), Fe = z[Te % z.length];
        return te + Fe + 12 * Qe - ne;
      });
    });
    return {
      strings: ie,
      start: Math.min(...ie.map((ne) => ne[0])),
      end: Math.max(...ie.map((ne) => ne.at(-1)))
    };
  }
  function De(I, $) {
    const z = [], X = Math.ceil(-I.end / 12) * 12;
    for (let te = X; I.start + te <= $; te += 12) {
      const ie = I.strings.map((ve) => ve.map((ge) => ge + te).filter((ge) => ge >= 0 && ge <= $)), ne = ie.flat();
      z.push({
        strings: ie,
        start: Math.min(...ne),
        end: Math.max(...ne),
        partial: I.start + te < 0 || I.end + te > $
      });
    }
    const ce = z.filter((te) => !te.partial);
    return ce.length ? ce : z;
  }
  function Re(I) {
    return Me(I).length === w;
  }
  function Be(I, $, z) {
    const X = Re($);
    I.querySelector('[value="3nps"]').disabled = !X, I.value = X ? z ?? "3nps" : "pentatonic";
  }
  function Ke(I, $, z, X, ce) {
    const te = Me($).map(([ie]) => ie);
    return X.map((ie) => {
      const ne = ie - 1, ve = z === "3nps" ? We(I, ne, te) : xe(I, ne, $.base === T), ge = ce === void 0 ? [ve] : De(ve, ce);
      return { number: ie, positions: ge };
    });
  }
  function Le(I, $) {
    const z = I.getBoundingClientRect(), X = I.querySelectorAll($);
    let ce = 1 / 0;
    X.forEach((te) => {
      const ie = te.getBoundingClientRect();
      let ne = 0;
      ie.left < z.left ? ne = ie.left - z.left - 8 : ie.right > z.right && (ne = ie.right - z.right + 8), Math.abs(ne) < Math.abs(ce) && (ce = ne);
    }), Number.isFinite(ce) && (I.scrollLeft += ce);
  }
  function Ee(I, $ = !1) {
    const z = I === "3nps" ? w : x.length;
    return Array.from({ length: z }, (X, ce) => {
      const te = ce + 1;
      return '<label class="box-toggle" data-box="' + te + '"><input type="checkbox" value="' + te + '"' + ($ && ce === 0 ? " checked" : "") + "> Boksi " + te + "</label>";
    }).join("");
  }
  function B(I, $) {
    const z = Me($), X = new Map(z.map(([te, ie]) => [te, he(I, te, ie)])), ce = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return z.flatMap(([te, ie]) => ce.flatMap(({ suffix: ne, base: ve }) => {
      const ge = ve.map(([Te]) => X.get((te + Te) % 12));
      return ge.every(Boolean) ? {
        root: (I + te) % 12,
        degree: Number(String(ie).replace(/\D/g, "")),
        name: ge[0] + ne,
        notes: ge,
        base: ve,
        add: []
      } : [];
    }));
  }
  function ee(I, $) {
    const z = I.base.map(([te]) => (I.root + te) % 12), X = c.map((te) => {
      const ie = [];
      for (let ne = 0; ne <= $; ne++) {
        const ve = (te + ne) % 12;
        z.includes(ve) && ie.push({ fret: ne, pitch: ve });
      }
      return ie;
    }), ce = [];
    for (let te = 0; te <= X.length - 3; te++)
      for (const ie of X[te])
        for (const ne of X[te + 1])
          if (ie.pitch !== ne.pitch)
            for (const ve of X[te + 2]) {
              if (ve.pitch === ie.pitch || ve.pitch === ne.pitch) continue;
              const ge = [ie.fret, ne.fret, ve.fret], Te = Math.min(...ge), Qe = Math.max(...ge);
              if (Qe - Te > 3) continue;
              const Fe = Array(c.length).fill(null);
              Fe.splice(te, 3, ...ge), ce.push({ strings: Fe, low: Te, high: Qe });
            }
    return ce.sort((te, ie) => te.high - ie.high || te.low - ie.low);
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
  }, y = [
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
  function C(I, $) {
    const z = U[I + ":" + $];
    if (z) return { frets: z, barre: null };
    let X = null;
    return y.forEach(({ string: ce, openPC: te, shapes: ie }) => {
      const ne = ie[$];
      if (!ne) return;
      let ve = (I - te + 12) % 12;
      if (ve + Math.min(...ne.filter((Qe) => Qe !== null)) < 0 && (ve += 12), X && X.fret <= ve) return;
      const ge = ne.map((Qe) => Qe === null ? null : ve + Qe), Te = ve > 0 && ne.at(-1) === 0 ? { fret: ve, from: ce, to: ne.length - 1 } : null;
      X = { fret: ve, frets: ge, barre: Te };
    }), X && { frets: X.frets, barre: X.barre };
  }
  function ue(I, { frets: $, barre: z }, X) {
    const ge = [...c].reverse(), Te = $.filter((Ce) => Ce > 0), Fe = !Te.length || Math.max(...Te) <= 4 && ($.includes(0) || Math.min(...Te) === 1) ? 1 : Math.min(...Te), $e = (Ce) => 24 + Ce * 14, Xe = (Ce) => 30 + (Ce - Fe) * 18 + 18 / 2, jt = 102;
    let Ve = '<svg class="chord-svg" viewBox="0 0 108 ' + (jt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + X + "-ote paksusta kielestä ohueen: " + $.map((Ce) => Ce ?? "x").join(" ") + '">';
    for (let Ce = 0; Ce <= 4; Ce++)
      Ve += '<line class="' + (Ce === 0 && Fe === 1 ? "nut" : "fret") + '" x1="' + $e(0) + '" y1="' + (30 + Ce * 18) + '" x2="' + $e(5) + '" y2="' + (30 + Ce * 18) + '"/>';
    return $.forEach((Ce, Je) => {
      Ve += '<line class="string" x1="' + $e(Je) + '" y1="30" x2="' + $e(Je) + '" y2="' + jt + '"/>';
    }), Fe > 1 && (Ve += '<text class="fret-label" x="15" y="' + (Xe(Fe) + 4) + '">' + Fe + "</text>"), z && (Ve += '<rect class="barre" x="' + ($e(z.from) - 6.5) + '" y="' + (Xe(z.fret) - 6.5) + '" width="' + ((z.to - z.from) * 14 + 13) + '" height="13" rx="6.5"/>'), $.forEach((Ce, Je) => {
      if (Ce === null) {
        Ve += '<text class="marker" x="' + $e(Je) + '" y="22">×</text>';
        return;
      }
      const Vt = (ge[Je] + Ce) % 12 === I;
      if (Ce === 0) {
        Ve += '<circle class="open' + (Vt ? " root-open" : "") + '" cx="' + $e(Je) + '" cy="18" r="4.5"/>';
        return;
      }
      z && Ce === z.fret && Je >= z.from && Je <= z.to && !Vt || (Ve += '<circle class="' + (Vt ? "root" : "tone") + '" cx="' + $e(Je) + '" cy="' + Xe(Ce) + '" r="6.5"/>');
    }), Ve + "</svg>";
  }
  function de(I, $) {
    const z = new URLSearchParams(location.search), X = u.indexOf(z.get("toonikka")), ce = z.get("asteikko");
    return {
      rootPC: X === -1 ? I : X,
      scaleId: Object.hasOwn(L, ce) ? ce : $
    };
  }
  function pe(I, $, z) {
    return I + "?" + new URLSearchParams({ toonikka: u[$], asteikko: z });
  }
  function me(I, $, z, {
    boxes: X = [],
    onlyBoxNotes: ce = !1,
    automatic: te = !0,
    focusDegree: ie = "",
    grip: ne = null,
    barre: ve = null,
    label: ge = u[I] + " " + $.name,
    notes: Te = null,
    targets: Qe = !1,
    muteFret: Fe = null
  } = {}) {
    const $e = Q(z), Xe = $e + 48, jt = Xe + 28, Ve = P - 14, Ce = re(c.length - 1) + 14, Je = Ce - Ve, Vt = te ? 680 : Math.ceil(jt * 0.64), Cn = X.flatMap((ae) => ae.positions), At = {};
    $.base.forEach(([ae, ye]) => At[(I + ae) % 12] = { deg: ye, added: !1 }), $.add.forEach(([ae, ye]) => At[(I + ae) % 12] = { deg: ye, added: !0 });
    const Xt = c.map((ae, ye) => !!ne && ne[ye] === null), Ut = !!ne && Fe !== null, Ht = _.filter((ae, ye) => Xt[ye]).reverse(), gr = ge + ". " + z + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Ht.length ? " Soittamatta jäävät kielet: " + Ht.join(", ") + "." : "");
    let oe = '<svg viewBox="0 0 ' + jt + " " + b + '" style="min-width:' + Vt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Qe ? "group" : "img") + '" aria-label="' + gr + '">';
    oe += '<rect x="' + V + '" y="' + Ve + '" width="' + (O - V) + '" height="' + Je + '" rx="6" fill="#2a2338"/>', oe += '<rect x="' + O + '" y="' + Ve + '" width="' + ($e - O) + '" height="' + Je + '" fill="#231a12"/>', oe += '<rect x="' + $e + '" y="' + Ve + '" width="' + (jt - $e - 4) + '" height="' + Je + '" rx="8" fill="#32251e"/>';
    for (let ae = 1; ae <= z; ae++)
      oe += '<line x1="' + Q(ae) + '" y1="' + Ve + '" x2="' + Q(ae) + '" y2="' + Ce + '" stroke="#6f5b47" stroke-width="2"/>';
    oe += '<rect x="' + (O - 3) + '" y="' + Ve + '" width="6" height="' + Je + '" rx="2" fill="#d8cbb6"/>', oe += '<rect x="' + (Xe - 11) + '" y="' + (Ve + 3) + '" width="22" height="' + (Je - 6) + '" rx="7" fill="#49434f" stroke="#a49b9d"/>', oe += '<rect x="' + (Xe - 4) + '" y="' + (Ve + 7) + '" width="3" height="' + (Je - 14) + '" rx="1.5" fill="#d8cbb6"/>';
    const Jt = (Ve + Ce) / 2;
    [3, 5, 7, 9, 15, 17, 19, 21].filter((ae) => ae <= z).forEach((ae) => oe += '<circle cx="' + H(ae) + '" cy="' + Jt + '" r="5.5" fill="#7a6550"/>');
    for (let ae = 12; ae <= z; ae += 12)
      oe += '<circle cx="' + H(ae) + '" cy="' + (Jt - Z) + '" r="5.5" fill="#7a6550"/>', oe += '<circle cx="' + H(ae) + '" cy="' + (Jt + Z) + '" r="5.5" fill="#7a6550"/>';
    oe += '<text x="' + K + '" y="' + (b - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Vapaa</text>', oe += '<text x="' + O + '" y="12" font-size="12" fill="#a89fc4" text-anchor="middle">Satula</text>', oe += '<text x="' + Xe + '" y="' + (b - 6) + '" font-size="12" fill="#a89fc4" text-anchor="middle">Talla</text>';
    for (let ae = 1; ae <= z; ae++)
      oe += '<text x="' + H(ae) + '" y="' + (b - 6) + '" font-size="11" fill="#a89fc4" text-anchor="middle">' + ae + "</text>";
    if (X.forEach(({ number: ae, positions: ye }) => {
      ye.forEach((ke) => {
        const Ae = ke.partial ? "box-highlight box-partial" : "box-highlight";
        oe += '<g class="' + Ae + '" data-box="' + ae + '" aria-hidden="true">';
        const et = ke.strings.find((ht) => ht.length), Zt = (H(et[0]) + H(et.at(-1))) / 2;
        oe += '<text class="box-number" x="' + Zt + '" y="12">' + ae + "</text>", ke.strings.forEach((ht, Wt) => {
          if (!ht.length) return;
          const Wn = H(ht[0]) - 16, Kn = H(ht.at(-1)) - H(ht[0]) + 32;
          oe += '<rect class="box-band" x="' + Wn + '" y="' + (re(Wt) - 14) + '" width="' + Kn + '" height="28" rx="14"/>';
        }), oe += "</g>";
      });
    }), c.forEach((ae, ye) => {
      const ke = 1 + ye * 0.45, Ae = re(ye), et = Xt[ye] && !Ut;
      et ? oe += '<text class="muted-mark" x="' + K + '" y="' + (Ae + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Xt[ye] && Fe === 0 || (oe += '<line x1="' + (V + 4) + '" y1="' + Ae + '" x2="' + (O - 4) + '" y2="' + Ae + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), oe += "<g" + (et ? ' opacity=".35"' : "") + ">", oe += '<line x1="' + O + '" y1="' + Ae + '" x2="' + (Xe + 5) + '" y2="' + Ae + '" stroke="#b9b9c4" stroke-width="' + ke.toFixed(2) + '"/>', oe += '<circle cx="' + (Xe + 5) + '" cy="' + Ae + '" r="3" fill="#211c26" stroke="#b9b9c4"/>', oe += "</g>", oe += '<text x="13" y="' + (Ae + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + E[ye] + "</text>";
    }), ne && ve && ve.fret >= 1 && ve.fret <= z) {
      const ae = re(ve.from), ye = re(ve.to), ke = Math.min(ae, ye) - 6, Ae = Math.max(ae, ye) + 6;
      oe += '<rect class="barre-indicator" x="' + (H(ve.fret) - 7) + '" y="' + ke + '" width="14" height="' + (Ae - ke) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Qe && (oe += '<g class="fret-targets">', c.forEach((ae, ye) => {
      for (let ke = 0; ke <= z; ke++) {
        const Ae = ke ? _[ye] + "-kieli, " + ke + ". nauha" : "vapaa " + _[ye] + "-kieli", et = ke ? D : O - V - 6;
        oe += '<rect class="fret-target" role="button" tabindex="0" data-string="' + ye + '" data-fret="' + ke + '" data-midi="' + (ae + ke) + '" aria-label="' + Ae + '" x="' + (H(ke) - et / 2) + '" y="' + (re(ye) - Z / 2) + '" width="' + et + '" height="' + Z + '" fill="transparent"/>';
      }
    }), oe += "</g>"), (Te ?? []).forEach(({ string: ae, fret: ye, label: ke, kind: Ae }) => {
      oe += '<g class="octave-note octave-' + Ae + '">', oe += '<circle cx="' + H(ye) + '" cy="' + re(ae) + '" r="' + A + '"/>', oe += '<text x="' + H(ye) + '" y="' + (re(ae) + 3.5) + '" font-size="' + (ke.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + ke + "</text>", oe += "</g>";
    }), ne && (oe += '<g class="grip-notes">'), (Te ? [] : c).forEach((ae, ye) => {
      for (let ke = 0; ke <= z; ke++) {
        const Ae = (ae + ke) % 12;
        if (!(Ae in At) || ne && ne[ye] !== ke || ce && !Cn.some(({ strings: Kn }) => {
          const Qn = Kn[ye];
          return Qn.length > 0 && ke >= Qn[0] && ke <= Qn.at(-1);
        })) continue;
        const et = At[Ae], Zt = et.deg === "1", ht = et.added ? "#f0a13c" : Zt ? "#4b2fd6" : "#6d4aff", Wt = et.added ? "#1a1430" : "#fff";
        et.deg === ie && (oe += '<circle class="focus-note" cx="' + H(ke) + '" cy="' + re(ye) + '" r="14.5"/>');
        const Wn = ne ? ' data-string="' + (ye + 1) + '" data-fret="' + ke + '" data-degree="' + et.deg + '"' : "";
        oe += "<circle" + Wn + ' cx="' + H(ke) + '" cy="' + re(ye) + '" r="' + A + '" fill="' + ht + '" stroke="' + (Zt ? "#fff" : "#1a1430") + '" stroke-width="' + (Zt ? 2.5 : 1) + '"/>', oe += '<text x="' + H(ke) + '" y="' + (re(ye) + 3.5) + '" font-size="' + (et.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Wt + '" text-anchor="middle">' + et.deg + "</text>";
      }
    }), ne && (oe += "</g>"), Ut && Xt.forEach((ae, ye) => {
      if (!ae) return;
      const ke = H(Fe), Ae = re(ye);
      oe += '<g class="muted-mark grip-mute" data-string="' + (ye + 1) + '" data-fret="' + Fe + '">', oe += '<circle cx="' + ke + '" cy="' + Ae + '" r="9" fill="' + (Fe === 0 ? "#2a2338" : "#231a12") + '"/>', oe += '<text x="' + ke + '" y="' + (Ae + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', oe += "</g>";
    }), oe += "</svg>", oe;
  }
  return {
    CHROM: u,
    OPEN_PITCHES: c,
    PENT_MAJ: T,
    SCALES: L,
    noteName: he,
    scaleNotes: Me,
    scaleTriads: B,
    triadGrips: ee,
    chordGrip: C,
    renderChordDiagram: ue,
    selectionFromURL: de,
    selectionHref: pe,
    renderBoard: me,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Re,
    syncBoxSystem: Be,
    fingeringBoxes: Ke,
    boxOptions: Ee,
    revealPositions: Le
  };
})();
globalThis.MusicMapFretboard = Dd;
function fo(u) {
  return 440 * Math.pow(2, (u - 69) / 12);
}
function Bd(u) {
  return 69 + 12 * Math.log2(u / 440);
}
function $d(u) {
  const s = Bd(u), o = Math.round(s), c = (s - o) * 100;
  return { midi: o, cents: c };
}
const Tc = globalThis.MusicMapFretboard, Vd = (u) => (u % 12 + 12) % 12, Ud = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], Hd = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], Wd = (u, s = !1, o = !1) => (s ? Hd : Ud)[Vd(u)] + (o ? Math.floor(u / 12) - 1 : ""), yo = ["ohut E", "B", "G", "D", "A", "paksu E"], Kd = (u) => u === 0 ? "vapaa kieli" : `${u}. nauha`, Qd = (u, s) => ({ string: u, fret: s, midi: Tc.OPEN_PITCHES[u] + s });
function Gd(u, s, o) {
  return [...u].sort((c, f) => c - f).flatMap((c) => Array.from({ length: Math.max(0, o - s + 1) }, (f, h) => Qd(c, s + h)));
}
const ni = (u) => `${u.string}:${u.fret}`, qd = 4e3;
class fc extends Error {
  name = "MicSetupError";
}
async function Yd(u, s) {
  if (!navigator.mediaDevices?.getUserMedia) throw new fc("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const o = {
    audio: {
      deviceId: u ? { exact: u } : void 0,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: !1,
      noiseSuppression: !1,
      autoGainControl: !1,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 }
    },
    video: !1
  }, c = await navigator.mediaDevices.getUserMedia(o);
  let f;
  try {
    if (f = s ? s() : new AudioContext(), f.state !== "running") {
      let _;
      await Promise.race([
        f.resume(),
        new Promise((j, T) => {
          _ = setTimeout(() => T(new fc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), qd);
        })
      ]).finally(() => clearTimeout(_));
    }
    const h = f.createMediaStreamSource(c), w = f, x = c.getAudioTracks?.()[0] ?? c.getTracks()[0], E = x?.getSettings?.() ?? {};
    return {
      context: f,
      source: h,
      stream: c,
      label: x?.label ?? "",
      deviceId: E.deviceId ?? "",
      channelCount: E.channelCount ?? 1,
      stop: () => {
        c.getTracks().forEach((_) => _.stop()), h.disconnect(), s || w.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw c.getTracks().forEach((w) => w.stop()), s || await f?.close().catch(() => {
    }), h;
  }
}
async function Xd() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((s) => s.kind === "audioinput" && s.deviceId) : [];
}
var ho, dc;
function Jd() {
  if (dc) return ho;
  dc = 1;
  function u(s) {
    if (this.size = s | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = s << 1;
    for (var o = new Array(this.size * 2), c = 0; c < o.length; c += 2) {
      const _ = Math.PI * c / this.size;
      o[c] = Math.cos(_), o[c + 1] = -Math.sin(_);
    }
    this.table = o;
    for (var f = 0, h = 1; this.size > h; h <<= 1)
      f++;
    this._width = f % 2 === 0 ? f - 1 : f, this._bitrev = new Array(1 << this._width);
    for (var w = 0; w < this._bitrev.length; w++) {
      this._bitrev[w] = 0;
      for (var x = 0; x < this._width; x += 2) {
        var E = this._width - x - 2;
        this._bitrev[w] |= (w >>> x & 3) << E;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return ho = u, u.prototype.fromComplexArray = function(o, c) {
    for (var f = c || new Array(o.length >>> 1), h = 0; h < o.length; h += 2)
      f[h >>> 1] = o[h];
    return f;
  }, u.prototype.createComplexArray = function() {
    const o = new Array(this._csize);
    for (var c = 0; c < o.length; c++)
      o[c] = 0;
    return o;
  }, u.prototype.toComplexArray = function(o, c) {
    for (var f = c || this.createComplexArray(), h = 0; h < f.length; h += 2)
      f[h] = o[h >>> 1], f[h + 1] = 0;
    return f;
  }, u.prototype.completeSpectrum = function(o) {
    for (var c = this._csize, f = c >>> 1, h = 2; h < f; h += 2)
      o[c - h] = o[h], o[c - h + 1] = -o[h + 1];
  }, u.prototype.transform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, u.prototype.realTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, u.prototype.inverseTransform = function(o, c) {
    if (o === c)
      throw new Error("Input and output buffers must be different");
    this._out = o, this._data = c, this._inv = 1, this._transform4();
    for (var f = 0; f < o.length; f++)
      o[f] /= this.size;
    this._out = null, this._data = null;
  }, u.prototype._transform4 = function() {
    var o = this._out, c = this._csize, f = this._width, h = 1 << f, w = c / h << 1, x, E, _ = this._bitrev;
    if (w === 4)
      for (x = 0, E = 0; x < c; x += w, E++) {
        const D = _[E];
        this._singleTransform2(x, D, h);
      }
    else
      for (x = 0, E = 0; x < c; x += w, E++) {
        const D = _[E];
        this._singleTransform4(x, D, h);
      }
    var j = this._inv ? -1 : 1, T = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      w = c / h << 1;
      var L = w >>> 2;
      for (x = 0; x < c; x += w)
        for (var V = x + L, O = x, P = 0; O < V; O += 2, P += h) {
          const D = O, Z = D + L, A = Z + L, K = A + L, b = o[D], Q = o[D + 1], H = o[Z], re = o[Z + 1], he = o[A], Me = o[A + 1], xe = o[K], We = o[K + 1], De = b, Re = Q, Be = T[P], Ke = j * T[P + 1], Le = H * Be - re * Ke, Ee = H * Ke + re * Be, B = T[2 * P], ee = j * T[2 * P + 1], U = he * B - Me * ee, y = he * ee + Me * B, C = T[3 * P], ue = j * T[3 * P + 1], de = xe * C - We * ue, pe = xe * ue + We * C, me = De + U, I = Re + y, $ = De - U, z = Re - y, X = Le + de, ce = Ee + pe, te = j * (Le - de), ie = j * (Ee - pe), ne = me + X, ve = I + ce, ge = me - X, Te = I - ce, Qe = $ + ie, Fe = z - te, $e = $ - ie, Xe = z + te;
          o[D] = ne, o[D + 1] = ve, o[Z] = Qe, o[Z + 1] = Fe, o[A] = ge, o[A + 1] = Te, o[K] = $e, o[K + 1] = Xe;
        }
    }
  }, u.prototype._singleTransform2 = function(o, c, f) {
    const h = this._out, w = this._data, x = w[c], E = w[c + 1], _ = w[c + f], j = w[c + f + 1], T = x + _, L = E + j, V = x - _, O = E - j;
    h[o] = T, h[o + 1] = L, h[o + 2] = V, h[o + 3] = O;
  }, u.prototype._singleTransform4 = function(o, c, f) {
    const h = this._out, w = this._data, x = this._inv ? -1 : 1, E = f * 2, _ = f * 3, j = w[c], T = w[c + 1], L = w[c + f], V = w[c + f + 1], O = w[c + E], P = w[c + E + 1], D = w[c + _], Z = w[c + _ + 1], A = j + O, K = T + P, b = j - O, Q = T - P, H = L + D, re = V + Z, he = x * (L - D), Me = x * (V - Z), xe = A + H, We = K + re, De = b + Me, Re = Q - he, Be = A - H, Ke = K - re, Le = b - Me, Ee = Q + he;
    h[o] = xe, h[o + 1] = We, h[o + 2] = De, h[o + 3] = Re, h[o + 4] = Be, h[o + 5] = Ke, h[o + 6] = Le, h[o + 7] = Ee;
  }, u.prototype._realTransform4 = function() {
    var o = this._out, c = this._csize, f = this._width, h = 1 << f, w = c / h << 1, x, E, _ = this._bitrev;
    if (w === 4)
      for (x = 0, E = 0; x < c; x += w, E++) {
        const ae = _[E];
        this._singleRealTransform2(x, ae >>> 1, h >>> 1);
      }
    else
      for (x = 0, E = 0; x < c; x += w, E++) {
        const ae = _[E];
        this._singleRealTransform4(x, ae >>> 1, h >>> 1);
      }
    var j = this._inv ? -1 : 1, T = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      w = c / h << 1;
      var L = w >>> 1, V = L >>> 1, O = V >>> 1;
      for (x = 0; x < c; x += w)
        for (var P = 0, D = 0; P <= O; P += 2, D += h) {
          var Z = x + P, A = Z + V, K = A + V, b = K + V, Q = o[Z], H = o[Z + 1], re = o[A], he = o[A + 1], Me = o[K], xe = o[K + 1], We = o[b], De = o[b + 1], Re = Q, Be = H, Ke = T[D], Le = j * T[D + 1], Ee = re * Ke - he * Le, B = re * Le + he * Ke, ee = T[2 * D], U = j * T[2 * D + 1], y = Me * ee - xe * U, C = Me * U + xe * ee, ue = T[3 * D], de = j * T[3 * D + 1], pe = We * ue - De * de, me = We * de + De * ue, I = Re + y, $ = Be + C, z = Re - y, X = Be - C, ce = Ee + pe, te = B + me, ie = j * (Ee - pe), ne = j * (B - me), ve = I + ce, ge = $ + te, Te = z + ne, Qe = X - ie;
          if (o[Z] = ve, o[Z + 1] = ge, o[A] = Te, o[A + 1] = Qe, P === 0) {
            var Fe = I - ce, $e = $ - te;
            o[K] = Fe, o[K + 1] = $e;
            continue;
          }
          if (P !== O) {
            var Xe = z, jt = -X, Ve = I, Ce = -$, Je = -j * ne, Vt = -j * ie, Cn = -j * te, At = -j * ce, Xt = Xe + Je, Ut = jt + Vt, Ht = Ve + At, gr = Ce - Cn, oe = x + V - P, Jt = x + L - P;
            o[oe] = Xt, o[oe + 1] = Ut, o[Jt] = Ht, o[Jt + 1] = gr;
          }
        }
    }
  }, u.prototype._singleRealTransform2 = function(o, c, f) {
    const h = this._out, w = this._data, x = w[c], E = w[c + f], _ = x + E, j = x - E;
    h[o] = _, h[o + 1] = 0, h[o + 2] = j, h[o + 3] = 0;
  }, u.prototype._singleRealTransform4 = function(o, c, f) {
    const h = this._out, w = this._data, x = this._inv ? -1 : 1, E = f * 2, _ = f * 3, j = w[c], T = w[c + f], L = w[c + E], V = w[c + _], O = j + L, P = j - L, D = T + V, Z = x * (T - V), A = O + D, K = P, b = -Z, Q = O - D, H = P, re = Z;
    h[o] = A, h[o + 1] = 0, h[o + 2] = K, h[o + 3] = b, h[o + 4] = Q, h[o + 5] = 0, h[o + 6] = H, h[o + 7] = re;
  }, ho;
}
var Zd = Jd();
const bd = /* @__PURE__ */ Nd(Zd);
class oi {
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
  static forFloat32Array(s) {
    return new oi(
      s,
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
  static forFloat64Array(s) {
    return new oi(
      s,
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
  static forNumberArray(s) {
    return new oi(s, (o) => Array(o));
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
  constructor(s, o) {
    if (s < 1)
      throw new Error("Input length must be at least one");
    this._inputLength = s, this._fft = new bd(nh(2 * s)), this._bufferSupplier = o, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
  autocorrelate(s, o = this._bufferSupplier(s.length)) {
    if (s.length !== this._inputLength)
      throw new Error(
        `Input must have length ${this._inputLength} but had length ${s.length}`
      );
    for (let f = 0; f < s.length; f++)
      this._paddedInputBuffer[f] = s[f];
    for (let f = s.length; f < this._paddedInputBuffer.length; f++)
      this._paddedInputBuffer[f] = 0;
    this._fft.realTransform(this._transformBuffer, this._paddedInputBuffer), this._fft.completeSpectrum(this._transformBuffer);
    const c = this._transformBuffer;
    for (let f = 0; f < c.length; f += 2)
      c[f] = c[f] * c[f] + c[f + 1] * c[f + 1], c[f + 1] = 0;
    this._fft.inverseTransform(this._inverseBuffer, this._transformBuffer);
    for (let f = 0; f < s.length; f++)
      o[f] = this._inverseBuffer[2 * f];
    return o;
  }
}
function eh(u) {
  const s = [];
  let o = !1, c = -1 / 0, f = -1;
  for (let h = 1; h < u.length - 1; h++)
    u[h - 1] <= 0 && u[h] > 0 ? (o = !0, f = h, c = u[h]) : u[h - 1] > 0 && u[h] <= 0 ? (o = !1, f !== -1 && s.push(f)) : o && u[h] > c && (c = u[h], f = h);
  return s;
}
function th(u, s) {
  const [o, c, f] = [u - 1, u, u + 1], [h, w, x] = [s[o], s[c], s[f]], E = h / 2 - w + x / 2, _ = -(h / 2) * (c + f) + w * (o + f) - x / 2 * (o + c), j = h * c * f / 2 - w * o * f + x * o * c / 2, T = -_ / (2 * E), L = E * T * T + _ * T + j;
  return [T, L];
}
class ai {
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
  static forFloat32Array(s) {
    return new ai(s, (o) => new Float32Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(s) {
    return new ai(s, (o) => new Float64Array(o));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(s) {
    return new ai(s, (o) => Array(o));
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
  constructor(s, o) {
    this._autocorrelator = new oi(s, o), this._nsdfBuffer = o(s);
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
  set clarityThreshold(s) {
    if (!Number.isFinite(s) || s <= 0 || s > 1)
      throw new Error("clarityThreshold must be a number in the range (0, 1]");
    this._clarityThreshold = s;
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
  set minVolumeAbsolute(s) {
    if (!Number.isFinite(s) || s < 0 || s > this._maxInputAmplitude)
      throw new Error(
        `minVolumeAbsolute must be a number in the range [0, ${this._maxInputAmplitude}]`
      );
    this._minVolumeAbsolute = s;
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
  set minVolumeDecibels(s) {
    if (!Number.isFinite(s) || s > 0)
      throw new Error("minVolumeDecibels must be a number <= 0");
    this._minVolumeAbsolute = this._maxInputAmplitude * 10 ** (s / 10);
  }
  /**
   * Sets the maximum amplitude of an input reading. Must be greater than 0.
   *
   * @param amplitude {number} the maximum amplitude (absolute value) of an input reading
   */
  set maxInputAmplitude(s) {
    if (!Number.isFinite(s) || s <= 0)
      throw new Error("maxInputAmplitude must be a number > 0");
    this._maxInputAmplitude = s;
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
  findPitch(s, o) {
    if (this._belowMinimumVolume(s)) return [0, 0];
    this._nsdf(s);
    const c = eh(this._nsdfBuffer);
    if (c.length === 0)
      return [0, 0];
    const f = Math.max(...c.map((E) => this._nsdfBuffer[E])), h = c.find(
      (E) => this._nsdfBuffer[E] >= this._clarityThreshold * f
    ), [w, x] = th(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [o / w, Math.min(x, 1)];
  }
  /**
   * Returns whether the input audio data is below the minimum volume allowed by
   * the pitch detector.
   *
   * @private
   * @param input {ArrayLike<number>}
   * @returns {boolean}
   */
  _belowMinimumVolume(s) {
    if (this._minVolumeAbsolute === 0) return !1;
    let o = 0;
    for (let c = 0; c < s.length; c++)
      o += s[c] ** 2;
    return Math.sqrt(o / s.length) < this._minVolumeAbsolute;
  }
  /**
   * Computes the NSDF of the input and stores it in the internal buffer. This
   * is equation (9) in the McLeod pitch method paper.
   *
   * @private
   * @param input {ArrayLike<number>}
   */
  _nsdf(s) {
    this._autocorrelator.autocorrelate(s, this._nsdfBuffer);
    let o = 2 * this._nsdfBuffer[0], c;
    for (c = 0; c < this._nsdfBuffer.length && o > 0; c++)
      this._nsdfBuffer[c] = 2 * this._nsdfBuffer[c] / o, o -= s[c] ** 2 + s[s.length - c - 1] ** 2;
    for (; c < this._nsdfBuffer.length; c++)
      this._nsdfBuffer[c] = 0;
  }
}
function nh(u) {
  return u--, u |= u >> 1, u |= u >> 2, u |= u >> 4, u |= u >> 8, u |= u >> 16, u++, u;
}
function rh(u) {
  const s = u * 0.17;
  let o = 2048;
  for (; o < s && o < 32768; ) o *= 2;
  return o;
}
const ih = 0.05, sh = 1.5;
class lh {
  constructor(s, o = {}) {
    this.mic = s, this.opts = o;
    const c = s.context, f = rh(c.sampleRate), h = Math.max(1, Math.min(2, s.channelCount ?? 1));
    h > 1 && typeof c.createChannelSplitter == "function" && (this.splitter = c.createChannelSplitter(h), s.source.connect(this.splitter));
    for (let w = 0; w < (this.splitter ? h : 1); w++) {
      const x = c.createAnalyser();
      x.fftSize = f, x.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(x, w) : s.source.connect(x), this.analysers.push(x), this.buffers.push(new Float32Array(new ArrayBuffer(f * 4)));
    }
    this.shortLength = Math.min(f, Math.max(256, Math.round(c.sampleRate * ih))), this.detector = ai.forFloat32Array(f), this.detector.minVolumeDecibels = -60;
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
  gate = new oh();
  onset = new jc();
  /** Kynnysten muuttaminen kesken kuuntelun, esimerkiksi mikrofonitestin liukusäätimistä. */
  setOptions(s) {
    Object.assign(this.opts, s);
  }
  start() {
    if (this.running) return;
    this.running = !0, this.gate.reset(), this.onset.reset();
    const s = () => {
      this.running && (this.paused || this.processFrame(performance.now()), this.rafId = requestAnimationFrame(s));
    };
    this.rafId = requestAnimationFrame(s);
  }
  stop() {
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = null, this.gate.reset(), this.onset.reset();
    for (const s of this.analysers) s.disconnect();
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
  processFrame(s) {
    const {
      minClarity: o = 0.9,
      minRms: c = 0.01,
      stabilityMs: f = 240,
      centsTolerance: h = 35,
      minFreq: w = 70,
      maxFreq: x = 1450,
      onFrame: E,
      onStableNote: _
    } = this.opts, j = this.analysers.map((re, he) => (re.getFloatTimeDomainData(this.buffers[he]), hc(this.buffers[he], this.buffers[he].length - this.shortLength))), T = j.indexOf(Math.max(...j));
    T !== this.channel && j[T] > (j[this.channel] ?? 0) * sh && (this.channel = T);
    const L = this.buffers[this.channel], V = j[this.channel], O = ah(L, L.length - this.shortLength), P = { rms: V, peak: O, channel: this.channel, levels: j }, D = V < c, Z = this.onset.feed(V, s, c);
    if (D && hc(L, 0) < c) {
      this.gate.feed(null, s, f, !0, !1), E?.({ ...P, status: "silent" });
      return;
    }
    const [A, K] = this.detector.findPitch(L, this.mic.context.sampleRate);
    if (!isFinite(A) || K < o) {
      this.gate.feed(null, s, f, D, Z), E?.({ ...P, status: D ? "silent" : "unclear", clarity: isFinite(K) ? K : 0 });
      return;
    }
    if (A < w || A > x) {
      this.gate.feed(null, s, f, D, Z), E?.({ ...P, status: "out-of-range", frequency: A, clarity: K });
      return;
    }
    const { midi: b, cents: Q } = $d(A);
    if (Math.abs(Q) > h) {
      this.gate.feed(null, s, f, D, Z), E?.({ ...P, status: "off-pitch", frequency: A, clarity: K, midi: b, cents: Q });
      return;
    }
    E?.({ ...P, status: "pitch", frequency: A, clarity: K, midi: b, cents: Q });
    const H = this.gate.feed(b, s, f, D, Z);
    H !== null && _?.({ midi: b, frequency: A, cents: Q, clarity: K, timestamp: s, heldMs: H.heldMs });
  }
}
class oh {
  constructor(s = 120, o = 80) {
    this.releaseMs = s, this.gapMs = o;
  }
  releaseMs;
  gapMs;
  armed = !1;
  quietSince = null;
  current = null;
  reset() {
    this.armed = !1, this.quietSince = null, this.current = null;
  }
  feed(s, o, c, f, h) {
    if (f ? (this.quietSince ??= o, o - this.quietSince >= this.releaseMs && (this.armed = !0, this.current = null)) : (this.quietSince = null, h && (this.armed = !0, this.current = null)), s === null)
      return this.current && o - this.current.seen > this.gapMs && (this.current = null), null;
    if (!this.armed) return null;
    (!this.current || this.current.midi !== s) && (this.current = { midi: s, since: o, seen: o }), this.current.seen = o;
    const w = o - this.current.since;
    return w < c ? null : (this.armed = !1, this.current = null, { midi: s, heldMs: w });
  }
}
class jc {
  constructor(s = 2, o = 300, c = 150) {
    this.ratio = s, this.windowMs = o, this.refractoryMs = c;
  }
  ratio;
  windowMs;
  refractoryMs;
  history = [];
  lastOnset = -1 / 0;
  reset() {
    this.history = [], this.lastOnset = -1 / 0;
  }
  feed(s, o, c) {
    if (o - this.lastOnset < this.refractoryMs)
      return this.history = [{ time: o, rms: s }], !1;
    for (; this.history.length && o - this.history[0].time > this.windowMs; ) this.history.shift();
    const f = this.history.length ? Math.min(...this.history.map((h) => h.rms)) : s;
    return this.history.push({ time: o, rms: s }), s < c * 1.5 || s < f * this.ratio ? !1 : (this.lastOnset = o, this.history = [{ time: o, rms: s }], !0);
  }
}
function hc(u, s = 0) {
  const o = Math.max(0, s);
  let c = 0;
  for (let f = o; f < u.length; f++) c += u[f] * u[f];
  return Math.sqrt(c / Math.max(1, u.length - o));
}
function ah(u, s = 0) {
  let o = 0;
  for (let c = Math.max(0, s); c < u.length; c++) {
    const f = Math.abs(u[c]);
    f > o && (o = f);
  }
  return o;
}
const ks = (u) => u > 0 ? Math.max(-90, 20 * Math.log10(u)) : -90;
let vr;
function Cc() {
  return (!vr || vr.state === "closed") && (vr = new AudioContext()), vr;
}
function uh() {
  const u = vr;
  vr = void 0, u?.close().catch(() => {
  });
}
const Nc = (u) => u instanceof Error ? u.name : "";
function ch(u) {
  const s = Nc(u);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(s) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : s === "NotFoundError" || s === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : s === "NotReadableError" || s === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : s === "MicSetupError" ? u.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class fh {
  constructor(s = (o) => Yd(o, Cc)) {
    this.opener = s;
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
  async start(s, o, c) {
    this.stop();
    const f = this.generation;
    let h, w = !1;
    try {
      h = await this.opener(s || void 0);
    } catch (x) {
      if (!s || f !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Nc(x))) throw x;
      h = await this.opener(void 0), w = !0;
    }
    if (f !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new lh(h, { ...o });
      const x = () => {
        this.mic === h && (this.stop(), c());
      }, E = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((_) => _.addEventListener("ended", x, { once: !0, signal: E.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && x();
      }, { signal: E.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: w };
    } catch (x) {
      throw this.stop(), x;
    }
  }
  setOptions(s) {
    this.loop?.setOptions(s);
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
function dh(u) {
  const s = [...u].sort((c, f) => c - f), o = s[Math.min(s.length - 1, Math.floor(s.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, o * 3)), noise: o, loud: o > 0.04 };
}
async function po(u) {
  const s = () => u.state === "running";
  if (s()) return;
  let o;
  try {
    await Promise.race([
      u.resume(),
      new Promise((c, f) => {
        o = setTimeout(() => f(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    o !== void 0 && clearTimeout(o);
  }
  if (!s()) throw new Error("reference-audio-not-running");
}
function hh(u) {
  const s = u instanceof Error ? u.message : "";
  return s === "reference-audio-resume-timeout" || s === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : u instanceof Error && u.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class pc {
  constructor(s = Cc) {
    this.provide = s;
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
  async play(s, o) {
    this.stop();
    const c = this.token, f = this.provide();
    if (await po(f), c !== this.token) return !1;
    const h = f.createGain();
    h.connect(f.destination), this.master = h;
    const w = Array.from({ length: 12 }, (_, j) => 1 / (j + 1) ** 1.3), x = f.createPeriodicWave?.(new Float32Array([0, ...w.map(() => 0)]), new Float32Array([0, ...w]));
    return s.forEach((_, j) => {
      const T = f.createOscillator(), L = f.createGain(), V = f.currentTime + 0.05 + j * 0.8;
      x ? T.setPeriodicWave(x) : T.type = "triangle", T.frequency.value = fo(_), L.gain.setValueAtTime(0, V), L.gain.linearRampToValueAtTime(0.22, V + 0.012), L.gain.exponentialRampToValueAtTime(1e-3, V + 0.7), T.connect(L), L.connect(h), T.start(V), T.stop(V + 0.72), o && this.noteTimers.push(setTimeout(() => {
        c === this.token && o(j);
      }, 50 + j * 800));
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), s.length * 800 + 350);
    }) || c !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], h.disconnect(), this.master = void 0, !0);
  }
  /**
   * Nuotinnettujen melodioiden kertatoisto.
   * beat ja duration ovat neljäsosaiskuja, eivät yhtä pitkiä asteikkonuotteja.
   * Tauot sisältyvät tapahtumien aloituskohtiin; audio ajoitetaan AudioContextin
   * kellolla ja kuvakorostuksen ajastimet siivotaan myös keskeytyksessä.
   */
  async playTimed(s, o, c, f) {
    if (this.stop(), !s.length) return !1;
    const h = this.token, w = this.provide();
    if (await po(w), h !== this.token) return !1;
    const x = 60 / Math.max(40, Math.min(140, o)), E = w.createGain();
    E.connect(w.destination), this.master = E;
    const _ = Array.from({ length: 12 }, (O, P) => 1 / (P + 1) ** 1.3), j = w.createPeriodicWave?.(
      new Float32Array([0, ..._.map(() => 0)]),
      new Float32Array([0, ..._])
    ), T = w.currentTime + 0.05;
    let L = 0;
    return s.forEach((O, P) => {
      if (!Number.isFinite(O.beat) || O.beat < 0 || !Number.isFinite(O.duration) || O.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const D = T + O.beat * x, Z = O.duration * x, A = D + Math.max(0.08, Z * 0.94), K = w.createOscillator(), b = w.createGain();
      j ? K.setPeriodicWave(j) : K.type = "triangle", K.frequency.value = fo(O.midi), b.gain.setValueAtTime(0, D), b.gain.linearRampToValueAtTime(0.22, D + 0.012), b.gain.exponentialRampToValueAtTime(1e-3, A - 0.01), K.connect(b), b.connect(E), K.start(D), K.stop(A), c && this.noteTimers.push(setTimeout(() => {
        h === this.token && c(P);
      }, 50 + O.beat * x * 1e3));
      const Q = s[P + 1]?.beat ?? 1 / 0;
      f && Q > O.beat + O.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && f();
      }, 50 + O.beat * x * 1e3 + Z * 1e3)), L = Math.max(L, O.beat + O.duration);
    }), !await new Promise((O) => {
      this.settle = O, this.timer = setTimeout(() => O(!0), 50 + L * x * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], E.disconnect(), this.master = void 0, !0);
  }
  /**
   * Yhtenäinen asteikkolooppi. Sävelet ajastetaan AudioContextin kellolla etukäteen,
   * ei toistokierroksen päättymistä odottavalla JavaScript-silmukalla.
   * onNote kertoo saman audiokellon mukaisen sävelindeksin otelautaa varten.
   * Toisto päättyy vain stop()-kutsuun (tai audioalustan virheeseen).
   */
  /** Muuta käynnissä olevan asteikkoloopin tempoa ilman äänivirran katkaisua. */
  setLoopTempo(s) {
    this.adjustLoopTempo?.(s);
  }
  async loop(s, o, c = 75) {
    if (this.stop(), !s.length) return !1;
    const f = this.token, h = this.provide();
    if (await po(h), f !== this.token) return !1;
    const w = h.createGain();
    w.connect(h.destination), this.master = w;
    const x = Array.from({ length: 12 }, (P, D) => 1 / (D + 1) ** 1.3), E = h.createPeriodicWave?.(new Float32Array([0, ...x.map(() => 0)]), new Float32Array([0, ...x]));
    let _ = 60 / Math.max(40, Math.min(140, c));
    this.adjustLoopTempo = (P) => {
      f === this.token && Number.isFinite(P) && (_ = 60 / Math.max(40, Math.min(140, P)));
    };
    const j = 1.6;
    let T = h.currentTime + 0.05, L = 0;
    const V = [], O = () => {
      if (f === this.token) {
        if (T < h.currentTime - 0.02) {
          const P = Math.ceil((h.currentTime - T) / _);
          T += P * _, L = (L + P) % s.length, V.length = 0;
        }
        for (; T < h.currentTime + j; ) {
          const P = s[L], D = L, Z = T, A = h.createOscillator(), K = h.createGain();
          E ? A.setPeriodicWave(E) : A.type = "triangle", A.frequency.value = fo(P), K.gain.setValueAtTime(0, Z), K.gain.linearRampToValueAtTime(0.22, Z + 0.012), K.gain.exponentialRampToValueAtTime(1e-3, Z + _ * 0.975), A.connect(K), K.connect(w), A.start(Z), A.stop(Z + _ * 0.985), V.push({ at: Z, index: D }), T += _, L = (L + 1) % s.length;
        }
        for (; V.length && V[0].at <= h.currentTime + 0.01; ) {
          const P = V.shift();
          o?.(P.index);
        }
      }
    };
    return O(), this.loopTick = setInterval(O, 25), new Promise((P) => {
      this.settle = P;
    });
  }
}
const ph = /* @__PURE__ */ new Set([12, 19, 24, 28, 31, 36]), mh = 0.25;
class mc {
  constructor(s) {
    this.opts = s;
  }
  opts;
  onset = new jc();
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
  setMinRms(s) {
    this.opts = { ...this.opts, minRms: s };
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
  feed(s, o) {
    const { minRms: c, stabilityMs: f, releaseMs: h = 120, gapMs: w = 80 } = this.opts, x = s.rms < c, E = this.onset.feed(s.rms, o, c);
    if (x ? (this.quietSince ??= o, o - this.quietSince >= h && this.arm("quiet")) : (this.quietSince = null, E && this.arm("onset")), this.notePeak = Math.max(this.notePeak, s.rms), s.status !== "pitch" || s.midi === void 0)
      return this.current && o - this.current.seen > w && (this.current = null), this.reason = s.status === "pitch" ? "unclear" : s.status, null;
    const _ = s.midi;
    let j = this.armedBy;
    if (!this.armed) {
      const V = this.previous;
      if (!V || _ === V.midi)
        return this.current = null, this.reason = "waiting-new-pluck", null;
      if (ph.has(Math.abs(_ - V.midi)))
        return this.current = null, this.reason = "harmonic", null;
      if (s.rms < V.peak * mh)
        return this.current = null, this.reason = "too-quiet-for-change", null;
      j = "pitch-change";
    }
    (!this.current || this.current.midi !== _) && (this.current = { midi: _, since: o, seen: o, armedBy: j }, j === "pitch-change" && (this.notePeak = s.rms)), this.current.seen = o;
    const T = o - this.current.since;
    if (T < f)
      return this.reason = "stabilizing", null;
    const L = this.current.armedBy;
    return this.armed = !1, this.armedBy = null, this.current = null, this.previous = { midi: _, peak: this.notePeak }, this.last = { midi: _, at: o, armedBy: L }, this.count++, this.reason = null, { midi: _, frequency: s.frequency ?? 0, cents: s.cents ?? 0, clarity: s.clarity ?? 0, timestamp: o, heldMs: T, armedBy: L };
  }
  arm(s) {
    this.armed = !0, this.armedBy = s, this.current = null, this.notePeak = 0;
  }
}
const Hn = { minRms: 0.01, minClarity: 0.94, stabilityMs: 240, centsTolerance: 35 };
function vh(u, s, o) {
  return (c) => {
    const f = s.feed(c, o());
    u.onFrame(c, s.state()), f && u.onStable(f);
  };
}
class yh {
  mic = new fh();
  player = new pc();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  strings = new pc();
  minRms = Hn.minRms;
  detector = new mc({ minRms: Hn.minRms, stabilityMs: Hn.stabilityMs });
  async openMic(s, o) {
    this.detector = new mc({ minRms: this.minRms, stabilityMs: Hn.stabilityMs });
    const c = vh(s, this.detector, () => performance.now());
    return this.mic.start(o, { ...Hn, minRms: this.minRms, onFrame: c }, s.onEnded);
  }
  async listDevices() {
    return (await Xd()).filter((o) => o.deviceId !== "default" && o.deviceId !== "communications").map((o, c) => ({ id: o.deviceId, label: o.label || `Äänitulo ${c + 1}` }));
  }
  setMinRms(s) {
    this.minRms = s, this.mic.setOptions({ minRms: s }), this.detector.setMinRms(s);
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
  playModel(s, o) {
    return this.player.play(s, o);
  }
  stopModel() {
    this.player.stop(), this.strings.stop();
  }
  // Uusi painallus katkaisee edellisen sävelen: sama sävel kahdesti kuuluu kahtena näppäyksenä.
  pluck(s) {
    this.strings.play([s]).catch(() => {
    });
  }
}
const gh = [64, 59, 55, 50, 45, 40], go = [0, 1, 2, 3, 4, 5], kh = 0, wh = 5, Vn = (u, s, o, c) => ({
  id: u,
  title: s,
  tip: c,
  spots: o.map(([f, h]) => ({ string: f, fret: h })),
  midi: o.map(([f, h]) => gh[f] + h)
}), Un = (u, s) => s.map((o) => [u, o]), ri = 1, ys = 2, ii = 59, si = Vn("opastus", "Opastus: kaksi säveltä", Un(ri, [0, 1]), "Vapaa B-kieli ja sitten 1. nauha."), qe = [
  { number: 1, name: "Kotitreeni 1", title: "B-kieli", strings: [ri], instruction: "Soita riffi B-kieleltä.", riffs: [
    // Sävelet B3, C4 ja D4: vapaa kieli, 1. ja 3. nauha.
    Vn("b-kaari", "Ensimmäinen kaiku", Un(ri, [0, 1, 3, 1]), "Vapaa kieli, 1., 3. ja takaisin 1. nauhaan."),
    Vn("b-vaihto", "Edestakaisin", Un(ri, [1, 0, 1, 3]), "1. nauha, vapaa kieli, 1. ja 3. nauha."),
    Vn("b-takaisin", "Kaari takaisin", Un(ri, [0, 3, 1, 0]), "Vapaa kieli, 3. ja 1. nauha ja taas vapaa kieli.")
  ] },
  { number: 2, name: "Kotitreeni 2", title: "G-kieli", strings: [ys], instruction: "Soita riffi G-kieleltä.", riffs: [
    // Sävelet G3, A3 ja B3: vapaa kieli, 2. ja 4. nauha. Vaihtelevampi: toisto ja hyppy.
    Vn("g-nousu", "G-kielen kaari", Un(ys, [0, 2, 4, 2]), "Vapaa kieli, 2., 4. ja takaisin 2. nauhaan."),
    Vn("g-toisto", "Kaksi samaa", Un(ys, [2, 2, 0, 4]), "Kaksi erillistä näppäystä 2. nauhalla, sitten vapaa kieli ja 4. nauha. Vaimenna kieli hetkeksi samojen sävelten välissä."),
    Vn("g-hyppy", "Hyppy alas", Un(ys, [4, 0, 2, 0]), "4. nauha, vapaa kieli, 2. nauha ja taas vapaa kieli.")
  ] }
];
qe.flatMap((u) => u.riffs);
const xh = (u) => qe.find((s) => s.riffs.some((o) => o.id === u));
class Sh {
  constructor(s, o, c) {
    if (this.round = o, this.input = c, !s.length || s.some((f) => !Number.isInteger(f))) throw new Error("Säveljonossa pitää olla vähintään yksi kokonaislukuinen MIDI-sävel.");
    this.expected = [...s], this.slots = this.expected.map(() => "pending");
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
    return this.complete && this.slots.every((s) => s === "green");
  }
  useHint() {
    this.hint = !0;
  }
  feed(s) {
    if (s.round !== this.round) return { type: "ignored", reason: "stale-round" };
    if (s.input !== this.input) return { type: "ignored", reason: "wrong-input" };
    if (this.complete) return { type: "ignored", reason: "complete" };
    const o = this.position, c = this.expected[o], f = s.midi;
    if (f === c) {
      const w = this.slots[o] === "red" ? "yellow" : "green";
      return this.slots[o] = w, this.position++, { type: "accepted", index: o, midi: f, complete: this.complete, mark: w };
    }
    const h = ((f - c) % 12 + 12) % 12 === 0;
    return this.wrongs++, h && this.octaves++, this.slots[o] = "red", { type: "wrong", index: o, expected: c, played: f, octave: h };
  }
}
const Eh = 3;
class _h {
  constructor(s, o) {
    this.input = o, this.expected = [...s], this.known = this.expected.map(() => !1);
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
    return this.failed >= Eh;
  }
  /** Paikkakohtaiset muistivihjeet: MIDI-korkeus näytettäväksi tai null. Tyhjä ennen kolmatta epäonnistumista. */
  get memory() {
    return this.expected.map((s, o) => this.memoryActive && this.known[o] ? s : null);
  }
  get attempt() {
    return this.current;
  }
  /** Uusi yritys: edellisen yrityksen vihreät paikat muistetaan (myös kesken jääneestä). */
  start(s) {
    return this.absorb(), this.current = new Sh(this.expected, s, this.input), this.current;
  }
  /** Loppuun soitettu yritys: palauttaa läpäisyn. Epäonnistunut kasvattaa laskuria kerran. */
  finish() {
    const s = this.current;
    return s?.complete ? (this.absorb(), this.current = null, s.flawless || this.failed++, s.flawless) : !1;
  }
  absorb() {
    this.current?.marks.forEach((s, o) => {
      s === "green" && (this.known[o] = !0);
    });
  }
}
class Th {
  constructor(s = 250, o = 150, c = 1500) {
    this.minMs = s, this.quietMs = o, this.maxMs = c;
  }
  minMs;
  quietMs;
  maxMs;
  startedAt = null;
  quietSince = null;
  start(s) {
    this.startedAt = s, this.quietSince = null;
  }
  get active() {
    return this.startedAt !== null;
  }
  /** Palauttaa 'ready', kun kuuntelun saa aloittaa, ja syyn: hiljaisuus tai aikaraja. */
  feed(s, o) {
    if (this.startedAt === null) return "settling";
    s ? this.quietSince ??= o : this.quietSince = null;
    const c = o - this.startedAt;
    return c >= this.minMs && this.quietSince !== null && o - this.quietSince >= this.quietMs ? (this.startedAt = null, "ready-quiet") : c >= this.maxMs ? (this.startedAt = null, "ready-timeout") : "settling";
  }
  cancel() {
    this.startedAt = null, this.quietSince = null;
  }
}
const Mc = 440, ko = (u) => Mc * 2 ** ((u - 69) / 12), xs = (u, s) => 1200 * Math.log2(u / s), ws = 5, jh = 100, Ss = [
  { name: "E2", midi: 40, number: 6 },
  { name: "A2", midi: 45, number: 5 },
  { name: "D3", midi: 50, number: 4 },
  { name: "G3", midi: 55, number: 3 },
  { name: "B3", midi: 59, number: 2 },
  { name: "E4", midi: 64, number: 1 }
], Ch = (u) => {
  const s = [...u].sort((c, f) => c - f), o = s.length >> 1;
  return s.length % 2 ? s[o] : (s[o - 1] + s[o]) / 2;
}, Nh = (u) => Ss.reduce((s, o) => Math.abs(xs(u, ko(o.midi))) < Math.abs(xs(u, ko(s.midi))) ? o : s);
class Mh {
  constructor(s = 160, o = 5, c = 25, f = 0.35) {
    this.windowMs = s, this.minSamples = o, this.maxSpreadCents = c, this.smoothing = f;
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
  setTarget(s) {
    this.target = s === null ? null : Ss.find((o) => o.midi === s) ?? null, this.smoothed = null;
  }
  get selected() {
    return this.target;
  }
  reset() {
    this.samples = [], this.smoothed = null;
  }
  feed(s, o) {
    const c = (s.status === "pitch" || s.status === "off-pitch") && s.frequency !== void 0 && s.frequency > 0;
    c && (this.samples.push({ at: o, frequency: s.frequency }), this.lastAt = o), this.samples = this.samples.filter((V) => o - V.at <= this.windowMs), !c && o - this.lastAt > this.windowMs && (this.smoothed = null);
    const f = this.target ?? Ss[0];
    if (!this.samples.length)
      return { status: s.status === "silent" ? "no-signal" : "unreliable", target: f, auto: !this.target };
    const h = Ch(this.samples.map((V) => V.frequency)), w = xs(Math.max(...this.samples.map((V) => V.frequency)), Math.min(...this.samples.map((V) => V.frequency))), x = this.samples[this.samples.length - 1].at - this.samples[0].at, E = this.target ?? Nh(h), _ = Math.round(69 + 12 * Math.log2(h / Mc));
    if (this.samples.length < this.minSamples || x < 100 || w > this.maxSpreadCents)
      return { status: "unreliable", target: E, auto: !this.target, frequency: h, heardMidi: _ };
    const j = xs(h, ko(E.midi));
    if (Math.abs(j) > jh)
      return this.smoothed = null, { status: "far", target: E, auto: !this.target, frequency: h, cents: j, heardMidi: _ };
    this.smoothed = this.smoothed === null ? j : this.smoothed + this.smoothing * (j - this.smoothed);
    const T = this.smoothed;
    return { status: Math.abs(T) <= ws ? "in-tune" : T < 0 ? "flat" : "sharp", target: E, auto: !this.target, frequency: h, cents: T, heardMidi: _ };
  }
}
const mo = ["mic-check", "tools", "ready", "model-playing", "output-settling", "listening", "success", "retry", "level-complete"], Rh = ["ready", "listening", "success", "retry", "level-complete"], Lh = 2500, Ph = 1e3, Ah = 80, Ye = (u) => Wd(u, !1, !0), vc = (u) => u.midi.map(() => "pending");
class zh {
  constructor(s, o, c = () => performance.now()) {
    this.audio = s, this.store = o, this.clock = c;
    const f = o.data.input;
    this.state = {
      phase: "idle",
      input: f,
      ...this.position(f),
      index: 0,
      memory: [],
      failedAttempts: 0,
      playing: null,
      modelPlaying: !1,
      autoRetry: !1,
      hint: !1,
      heard: null,
      lastStable: null,
      check: "waiting",
      feedback: null,
      error: "",
      pausedReason: null,
      completedLevels: o.completedLevels(f),
      unlockedLevels: o.unlockedLevels(f),
      device: o.data.device,
      devices: [],
      micInfo: null,
      minRms: Hn.minRms,
      noise: null,
      calibrating: !1,
      tool: "tuner",
      tuner: null,
      tunerTarget: null,
      diag: null,
      diagOpen: !1
    };
  }
  audio;
  store;
  clock;
  state;
  listeners = /* @__PURE__ */ new Set();
  op = 0;
  micSession = 0;
  micOpen = !1;
  micChecked = !1;
  round = 0;
  practice = null;
  practiceRiff = null;
  settler = new Th();
  settleTimer;
  roundStart = null;
  replays = 0;
  pausedFrom = null;
  /** Mikrofonitestin tai työkalujen jälkeen jatkettava riffi (laitteen vaihto kesken riffin). */
  afterCheck = null;
  toolsReturn = "idle";
  calibration = null;
  retryTimer;
  tunerEngine = new Mh();
  lastView = -1 / 0;
  routed = { count: 0, last: null };
  /** Vastaustavan tallennettu kohta: opastus, tason seuraava riffi tai läpäisty taso. */
  position(s) {
    const o = this.store.level(s);
    if (!this.store.data.tutorialDone) return { riff: si, tutorial: !0, level: qe[0], riffNumber: 1, marks: vc(si) };
    const c = this.store.currentRiff(s) ?? o.riffs[o.riffs.length - 1];
    return { riff: c, tutorial: !1, level: o, riffNumber: o.riffs.indexOf(c) + 1, marks: vc(c) };
  }
  // ---- tilaus (React: useSyncExternalStore) ----
  subscribe = (s) => (this.listeners.add(s), () => {
    this.listeners.delete(s);
  });
  getState = () => this.state;
  /** Aloitusnäkymän yhteenveto vastaustavoittain. */
  progress = (s) => ({ level: this.store.run(s).level, completed: this.store.completedLevels(s) });
  set(s) {
    this.state = { ...this.state, ...s }, this.listeners.forEach((o) => o());
  }
  selectInput(s) {
    this.store.setInput(s), this.set({
      input: s,
      error: "",
      completedLevels: this.store.completedLevels(s),
      unlockedLevels: this.store.unlockedLevels(s),
      ...s === "board" ? { heard: null, lastStable: null } : {}
    });
  }
  // ---- aloitus ----
  /** ”Oikea kitara”: lupa pyydetään vasta tästä painalluksesta. */
  startMic() {
    this.selectInput("mic"), this.openMicThen(() => this.micChecked ? this.beginRound() : this.enterMicCheck());
  }
  /** Virtuaalikitara: oma pelitapa, ei tarvitse mikrofonilupaa eikä oikeaa soitinta. */
  startBoard() {
    this.closeMic(), this.selectInput("board"), this.beginRound();
  }
  /** Vastaustavan vaihto: kummallakin tavalla on oma tasoeteneminen, joten jatketaan sen kohdasta. */
  switchInput(s) {
    s === this.state.input && this.state.phase !== "error" || (s === "board" ? this.startBoard() : this.startMic());
  }
  async openMicThen(s) {
    const o = ++this.op;
    this.cancelTimers(), this.audio.stopModel(), this.closeMic(), this.set({ phase: "permission", feedback: null, error: "", playing: null, heard: null });
    const c = ++this.micSession, f = {
      onFrame: (h, w) => {
        c === this.micSession && this.onFrame(h, w);
      },
      onStable: (h) => {
        c === this.micSession && this.onStable(h);
      },
      onEnded: () => {
        c === this.micSession && this.micLost();
      }
    };
    try {
      const h = await this.audio.openMic(f, this.state.device);
      if (o !== this.op || c !== this.micSession || !h) return;
      this.micOpen = !0, this.set({ micInfo: h }), this.refreshDevices(), s();
    } catch (h) {
      if (o !== this.op) return;
      this.micOpen = !1, this.set({ phase: "error", error: ch(h), micInfo: null });
    }
  }
  /** Päivittää laitelistan (nimet näkyvät vasta luvan jälkeen). Kutsutaan myös devicechange-tapahtumasta. */
  async refreshDevices() {
    try {
      this.set({ devices: await this.audio.listDevices() });
    } catch {
    }
  }
  /**
   * Äänitulon vaihto sovelluksesta. Vanha virta suljetaan ja uusi avataan valitulla laitteella;
   * rinnakkaisia virtoja ei jää. Kesken riffin palataan mikrofonitestiin (uusi laite mitataan),
   * ja sama riffi jatkuu testin jälkeen alusta.
   */
  setDevice(s) {
    if (this.store.setDevice(s), this.set({ device: s }), this.state.input !== "mic" || !["permission", "error", ...mo, "paused"].includes(this.state.phase)) return;
    const o = this.state.phase;
    if (o === "tools") {
      this.openMicThen(() => this.enterTools(this.state.tool, !0));
      return;
    }
    !["mic-check", "permission", "error"].includes(o) && !this.state.tutorial && (this.afterCheck = this.state.riff), this.micChecked = !1, this.openMicThen(() => this.enterMicCheck());
  }
  enterMicCheck() {
    this.audio.resumeAnalysis(), this.startCalibration(), this.set({ phase: "mic-check", check: "waiting", lastStable: null });
  }
  /** Taustakohinan mittaus: äänikynnys mitatun kohinan mukaan (sama menetelmä kuin Kitaraharjoittelijassa). */
  calibrate() {
    this.micOpen && ["mic-check", "tools"].includes(this.state.phase) && this.startCalibration();
  }
  startCalibration() {
    this.calibration = { start: this.clock(), samples: [] }, this.set({ calibrating: !0, feedback: { tone: "info", text: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" } });
  }
  finishCalibration(s) {
    this.calibration = null;
    const o = dh(s), c = o.loud ? Hn.minRms : o.threshold;
    this.audio.setMinRms(c), this.audio.rearm();
    const f = this.state.phase === "mic-check";
    this.set({ calibrating: !1, minRms: c, noise: o, feedback: o.loud ? { tone: "bad", text: "Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen." } : f ? { tone: "info", text: `Soita vapaa B-kieli (${Ye(ii)}) ja anna sen soida hetki.` } : null });
  }
  /** Mikrofonitestin jälkeen: opastus tai tason seuraava riffi (tai laitteen vaihdossa kesken jäänyt riffi). */
  continueAfterCheck() {
    if (this.state.phase !== "mic-check" || this.state.check === "waiting") return;
    this.micChecked = !0;
    const s = this.afterCheck ?? void 0;
    this.afterCheck = null, this.beginRound(s);
  }
  // ---- työkalut: viritin ja diagnostiikka ----
  /** Avaa työkalun. Aloitusnäkymästä mikrofoni avataan ensin. Työkalut eivät koskaan anna pelivastauksia. */
  openTools(s) {
    const o = this.state.phase;
    if (o === "tools") {
      this.set({ tool: s });
      return;
    }
    if (o === "mic-check" && this.micOpen) {
      this.toolsReturn = "mic-check", this.enterTools(s);
      return;
    }
    o === "idle" && (this.toolsReturn = "idle", this.selectInput("mic"), this.openMicThen(() => this.enterTools(s, !0)));
  }
  enterTools(s, o = !1) {
    this.audio.resumeAnalysis(), this.tunerEngine.reset(), this.tunerEngine.setTarget(this.state.tunerTarget), o && this.startCalibration(), this.set({ phase: "tools", tool: s, tuner: null });
  }
  setTool(s) {
    this.state.phase === "tools" && this.set({ tool: s });
  }
  setTunerTarget(s) {
    this.tunerEngine.setTarget(s), this.set({ tunerTarget: s });
  }
  /** Takaisin: mikrofonitestiin tai aloitusnäkymään (mikrofoni suljetaan). */
  closeTools() {
    this.state.phase === "tools" && (this.toolsReturn === "mic-check" ? (this.audio.rearm(), this.set({ phase: "mic-check", feedback: this.state.check === "waiting" ? { tone: "info", text: `Soita vapaa B-kieli (${Ye(ii)}) ja anna sen soida hetki.` } : this.state.feedback })) : this.stop());
  }
  /** Virittimestä suoraan harjoitukseen: virittimen lukema osoittaa mikrofonin toimivan. */
  startFromTools() {
    if (this.state.phase !== "tools") return;
    this.micChecked = !0, this.calibration = null, this.set({ calibrating: !1 });
    const s = this.afterCheck ?? void 0;
    this.afterCheck = null, this.beginRound(s);
  }
  /** Diagnostiikkapaneeli pelin aikana (vain luku, ei vaikuta peliin). */
  setDiagnosticsOpen(s) {
    this.set({ diagOpen: s, ...s ? {} : { diag: null } });
  }
  // ---- tasovalikko ----
  openLevels() {
    ["idle", "level-complete", "success", "retry", "ready", "listening", "output-settling", "model-playing", "paused"].includes(this.state.phase) && (++this.op, this.cancelTimers(), this.audio.stopModel(), this.micOpen && this.audio.pauseAnalysis(), this.set({ modelPlaying: !1, playing: null, phase: "levels", unlockedLevels: this.store.unlockedLevels(this.state.input), completedLevels: this.store.completedLevels(this.state.input), feedback: null, hint: !1 }));
  }
  /**
   * Valitse taso: läpäisty, nykyinen tai seuraava avattu. Nykyinen taso jatkuu siitä, mihin jäätiin;
   * muu taso (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt tasot säilyvät aina.
   */
  chooseLevel(s, o = !1) {
    this.state.phase !== "levels" || !this.store.unlockedLevels(this.state.input).includes(s) || ((o || s !== this.store.run(this.state.input).level) && this.store.startLevel(this.state.input, s), this.store.finishTutorial(), this.beginRound());
  }
  // ---- kierros ----
  /**
   * Uusi riffi (tai uusi yritys samalla riffillä: riff annettu).
   * start: 'ready' = pelaaja aloittaa kuuntelun itse (uusi riffi), 'model' = malli soi heti
   * (Soita uudelleen, automaattinen uusinta), 'listen' = suoraan vuoroon ilman mallia.
   */
  beginRound(s, o = "ready") {
    if (this.state.input === "mic" && !this.micOpen) {
      this.openMicThen(() => this.beginRound(s, o));
      return;
    }
    ++this.op, this.cancelTimers(), this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null, autoRetry: !1 });
    const c = this.position(this.state.input);
    if (!c.tutorial && !s && this.store.currentRiff(this.state.input) === null) {
      this.showLevelComplete();
      return;
    }
    const f = c.tutorial ? si : s ?? c.riff, h = !!this.practice && this.practiceRiff === f.id && this.practice.input === this.state.input;
    h || (this.practice = new _h(f.midi, this.state.input), this.practiceRiff = f.id), this.replays = 0, this.roundStart = null, this.set({
      ...c,
      riff: f,
      riffNumber: c.tutorial ? 1 : c.level.riffs.indexOf(f) + 1,
      hint: h ? this.state.hint : !1,
      feedback: null,
      lastStable: null,
      unlockedLevels: this.store.unlockedLevels(this.state.input),
      tuner: null,
      diag: this.state.diagOpen ? this.state.diag : null
    }), this.startAttempt(), o === "model" ? this.playModel(!0) : o === "listen" ? (this.micOpen && this.audio.resumeAnalysis(), this.startListening()) : (this.micOpen && this.audio.pauseAnalysis(), this.set({ phase: "ready" }));
  }
  /** Uusi yritys samassa sarjassa: kierrostunniste vaihtuu, pallukat harmaiksi, muistivihjeet näkyviin. */
  startAttempt() {
    const s = this.practice.start(++this.round);
    return this.state.hint && s.useHint(), this.set({ index: 0, marks: s.marks, memory: this.practice.memory, failedAttempts: this.practice.failedAttempts, lastStable: null }), s;
  }
  get checker() {
    return this.practice?.attempt ?? null;
  }
  async playModel(s) {
    const o = ++this.op;
    this.cancelTimers(), this.micOpen && this.audio.pauseAnalysis();
    const c = s ? "model-playing" : this.state.phase;
    this.set({ phase: c, playing: null, modelPlaying: !0 });
    let f;
    try {
      f = await this.audio.playModel(this.state.riff.midi, (h) => {
        o === this.op && this.set({ playing: h });
      });
    } catch (h) {
      if (o !== this.op) return;
      this.set({ feedback: { tone: "bad", text: hh(h) + " Voit silti soittaa riffin sävelvihjeen avulla." } }), f = !0;
    }
    o !== this.op || !f || (this.set({ playing: null, modelPlaying: !1 }), s ? this.afterModel(o) : this.micOpen && this.audio.pauseAnalysis());
  }
  afterModel(s) {
    this.state.input === "mic" && this.micOpen ? (this.audio.resumeAnalysis(), this.settler.start(this.clock()), this.set({ phase: "output-settling" }), this.settleTimer = setTimeout(() => {
      s === this.op && this.state.phase === "output-settling" && this.startListening();
    }, this.settler.maxMs + 200)) : this.startListening();
  }
  startListening() {
    this.cancelTimers(), this.micOpen && this.audio.rearm(), this.roundStart ??= this.clock(), this.set({ phase: "listening" });
  }
  cancelTimers() {
    clearTimeout(this.settleTimer), this.settleTimer = void 0, this.settler.cancel(), this.retryTimer !== void 0 && (clearTimeout(this.retryTimer), this.retryTimer = void 0, this.state.autoRetry && this.set({ autoRetry: !1 }));
  }
  // ---- mikrofonin tapahtumat ----
  onFrame(s, o) {
    const c = this.clock(), f = { status: s.status, midi: s.status === "pitch" || s.status === "off-pitch" ? s.midi : void 0 }, h = this.state.heard;
    (!h || h.status !== f.status || h.midi !== f.midi) && this.set({ heard: f });
    const w = this.state.phase;
    this.calibration && (w === "mic-check" || w === "tools") && (this.calibration.samples.push(s.rms), c - this.calibration.start >= Ph && this.finishCalibration(this.calibration.samples)), w === "output-settling" && this.settler.feed(s.status === "silent", c) !== "settling" && this.startListening();
    const x = w === "tools" ? this.tunerEngine.feed(s, c) : null, E = this.state.diagOpen || w === "tools" || w === "mic-check";
    (x || E) && c - this.lastView >= Ah && (this.lastView = c, this.set({ ...x ? { tuner: x } : {}, ...E ? { diag: { frame: s, pluck: o, minRms: this.state.minRms, routed: this.routed } } : {} }));
  }
  route(s, o) {
    this.routed = { count: this.routed.count + 1, last: { midi: s.midi, at: s.timestamp, route: o, phase: this.state.phase } }, this.state.diag && this.set({ diag: { ...this.state.diag, routed: this.routed } });
  }
  onStable(s) {
    const o = this.state.phase;
    if (o === "mic-check" && !this.state.calibrating) {
      this.route(s, "mic-check");
      const c = s.midi === ii;
      this.set({ lastStable: s.midi, check: c ? "ok" : "other", feedback: c ? { tone: "good", text: `Kuulin ${Ye(s.midi)}. Mikrofoni toimii.` } : { tone: "info", text: `Kuulin ${Ye(s.midi)}. Mikrofoni toimii, mutta testisävel on ${Ye(ii)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    if (o !== "listening" || this.state.input !== "mic") {
      this.route(s, "not-routed");
      return;
    }
    this.route(s, "game"), this.set({ lastStable: s.midi }), this.answer(s.midi, "mic");
  }
  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vastaukseksi lasketaan vain vastausvuorossa;
   * riffin jälkeen otelaudalla voi soitella vapaasti. Mallisoiton aikana otelauta on lukittu.
   */
  tap(s) {
    const o = this.state.phase;
    return this.state.input !== "board" || !Rh.includes(o) ? !1 : (this.audio.pluck(s), o === "listening" && this.answer(s, "board"), !0);
  }
  answer(s, o) {
    const c = this.checker;
    if (!c) return;
    const f = c.feed({ midi: s, round: this.round, input: o }), h = c.expected.length;
    f.type === "accepted" ? (this.set({ index: f.index + 1, marks: c.marks, feedback: { tone: "good", text: f.mark === "yellow" ? `${Ye(s)} löytyi (${f.index + 1}/${h}). Kohta korjattiin, joten pallukka on keltainen.` : `${Ye(s)} oikein (${f.index + 1}/${h}).` } }), f.complete && this.finish(c)) : f.type === "wrong" && this.set({ marks: c.marks, feedback: { tone: "bad", text: o === "mic" ? `Väärä sävel (kuulin ${Ye(f.played)}). Kokeile uudelleen.` : "Väärä sävel. Kokeile uudelleen." } });
  }
  /**
   * Riffi soitettu loppuun. Kirjataan kerran.
   * - Virheetön → success: pelaaja valitsee itse Soita uudelleen tai Seuraava riffi.
   * - Keltaisia → retry: tulos näkyy RETRY_RESULT_MS, sitten sama malli soi ja uusi yritys alkaa
   *   automaattisesti. Pelaaja voi perua; tauko, lopetus ja navigointi perivät sen (cancelTimers).
   */
  finish(s) {
    this.micOpen && this.audio.pauseAnalysis();
    const o = this.state.riff, c = this.practice.finish(), f = this.practice.failedAttempts;
    if (this.store.record({
      riff: o.id,
      input: s.input,
      hint: s.hintUsed,
      passed: c,
      wrong: s.wrongCount,
      octave: s.octaveCount,
      replays: this.replays,
      ms: Math.max(0, Math.round(this.clock() - (this.roundStart ?? this.clock()))),
      at: Date.now()
    }), this.set({ completedLevels: this.store.completedLevels(s.input), unlockedLevels: this.store.unlockedLevels(s.input), failedAttempts: f }), o.id === si.id)
      this.practice = null, this.set({ phase: "success", feedback: { tone: "good", text: c ? `Hienoa! Opastus on tehty. Seuraavaksi ${qe[0].name}: kolme riffiä ${qe[0].title.toLowerCase().replace("kieli", "kielellä")}.` : "Opastus on tehty. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä." } });
    else if (c)
      this.practice = null, this.set({ phase: "success", feedback: { tone: "good", text: s.hintUsed ? "Virheetön, vihjeen kanssa! Riffi läpäisty." : "Virheetön! Kaikki pallukat vihreinä – riffi läpäisty." } });
    else {
      this.set({ phase: "retry", autoRetry: !0, feedback: { tone: "info", text: "Riffi soitettu loppuun. Kuunnellaan uudelleen!" + (this.practice.memoryActive ? " Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät pallukoissa." : "") } });
      const h = this.op;
      this.retryTimer = setTimeout(() => {
        this.retryTimer = void 0, h === this.op && this.state.phase === "retry" && this.state.autoRetry && this.beginRound(o, "model");
      }, Lh);
    }
  }
  showLevelComplete() {
    this.micOpen && this.audio.pauseAnalysis();
    const s = this.store.level(this.state.input);
    this.set({
      phase: "level-complete",
      level: s,
      completedLevels: this.store.completedLevels(this.state.input),
      unlockedLevels: this.store.unlockedLevels(this.state.input),
      feedback: null,
      hint: !1
    });
  }
  // ---- sivutoiminnot ----
  /**
   * Kuuntele riffi / Pysäytä kuuntelu (sama painike).
   * - Kesken yrityksen malli soi, eikä mitään nollata: sama paikka, samat pallukat, muistivihjeet ja laskurit.
   *   Mikrofonin analyysi on tauolla mallin ajan, ja vuoro jatkuu suojavaiheen kautta.
   * - ready: ensimmäinen kuuntelu, sitten vuoro.
   * - success / peruttu retry: pelkkä kuuntelu, vaihe ei muutu.
   * - odottava automaattinen uusinta: uusinta alkaa heti (yksi malli, ei päällekkäisiä).
   */
  listen() {
    if (this.state.modelPlaying) {
      this.stopListening();
      return;
    }
    const s = this.state.phase;
    if (s === "retry" && this.state.autoRetry) {
      this.beginRound(this.state.riff, "model");
      return;
    }
    if (s === "success" || s === "retry") {
      this.playModel(!1);
      return;
    }
    ["ready", "listening", "output-settling"].includes(s) && (s !== "ready" && this.replays++, this.playModel(!0));
  }
  /** Pysäytä kuuntelu: malli katkeaa, eteneminen säilyy; vuoro jatkuu suojavaiheen kautta. */
  stopListening() {
    if (!this.state.modelPlaying) return;
    const s = ++this.op;
    this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null }), this.state.phase === "model-playing" && this.afterModel(s);
  }
  /** Peru odottava automaattinen uusinta. Tulos jää näkyviin, ja uusi yritys alkaa painikkeesta. */
  cancelAutoRetry() {
    this.state.phase !== "retry" || !this.state.autoRetry || (this.cancelTimers(), this.set({ autoRetry: !1, feedback: { tone: "info", text: "Automaattinen uusinta peruttu. Aloita uusi yritys, kun olet valmis." } }));
  }
  /** Aloita uusi yritys samalla riffillä ilman mallia. Kesken jäänyt yritys ei ole epäonnistunut kokonaisyritys. */
  restart() {
    const s = this.state.phase;
    if (s === "retry") {
      this.beginRound(this.state.riff, "listen");
      return;
    }
    ["ready", "listening", "output-settling", "model-playing"].includes(s) && (this.state.modelPlaying && this.stopListening(), this.startAttempt(), this.set({ feedback: { tone: "info", text: "Uusi yritys: aloita riffi alusta." } }), this.micOpen && this.audio.resumeAnalysis(), this.startListening());
  }
  /** Keltaisten jälkeen (uusinta peruttu): sama riffi uutena yrityksenä mallin kanssa. */
  retry() {
    this.state.phase === "retry" && this.beginRound(this.state.riff, "model");
  }
  /** Virheettömän riffin jälkeen: sama riffi uutena yrityksenä, malli soi alkuun. Läpäisy säilyy. */
  playAgain() {
    this.state.phase === "success" && !this.state.tutorial && this.beginRound(this.state.riff, "model");
  }
  toggleHint() {
    const s = !this.state.hint;
    s && this.checker?.useHint(), this.set({ hint: s });
  }
  /** Seuraava riffi; kotitreenin kolmannen jälkeen onnittelunäkymä. */
  next() {
    this.state.phase === "success" && this.beginRound();
  }
  /** Onnittelunäkymästä: seuraava taso. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== "level-complete") return;
    const s = this.state.level.number + 1;
    qe.some((o) => o.number === s) && (this.store.startLevel(this.state.input, s), this.beginRound());
  }
  /** Onnittelunäkymästä: sama taso alusta (tai annettu taso, esim. viimeisen jälkeen taso 1). */
  repeatLevel(s = this.state.level.number) {
    this.state.phase === "level-complete" && (this.store.startLevel(this.state.input, s), this.beginRound());
  }
  /** Tauko: soitto pysähtyy ja mikrofoni vapautetaan. Jatko vaatii painalluksen. */
  pause(s) {
    mo.includes(this.state.phase) && (this.pausedFrom = this.state.phase, ++this.op, this.cancelTimers(), this.calibration = null, this.audio.stopModel(), this.closeMic(), this.set({ phase: "paused", pausedReason: s, playing: null, modelPlaying: !1, autoRetry: !1, heard: null, calibrating: !1 }));
  }
  resume() {
    if (this.state.phase !== "paused") return;
    const s = this.pausedFrom ?? "listening";
    if (this.pausedFrom = null, this.set({ pausedReason: null }), ["success", "retry", "level-complete"].includes(s)) {
      this.set({ phase: s, autoRetry: !1 });
      return;
    }
    const o = () => {
      s === "mic-check" ? this.enterMicCheck() : s === "tools" ? this.enterTools(this.state.tool) : s === "ready" ? (this.micOpen && this.audio.pauseAnalysis(), this.set({ phase: "ready" })) : this.startListening();
    };
    this.state.input === "mic" ? this.openMicThen(o) : o();
  }
  micLost() {
    const s = this.state.phase;
    this.closeMic(), this.calibration = null, mo.includes(s) && (this.pausedFrom = s, ++this.op, this.cancelTimers(), this.audio.stopModel(), this.set({ phase: "paused", pausedReason: "mic-lost", playing: null, modelPlaying: !1, autoRetry: !1, heard: null, micInfo: null, calibrating: !1 }));
  }
  /** Lopeta: kaikki pysähtyy, aloitusnäkymä. Edistyminen on jo tallennettu. */
  stop() {
    ++this.op, this.cancelTimers(), this.calibration = null, this.audio.stopModel(), this.closeMic(), this.practice = null, this.pausedFrom = null, this.afterCheck = null, this.set({
      phase: "idle",
      playing: null,
      modelPlaying: !1,
      autoRetry: !1,
      heard: null,
      feedback: null,
      error: "",
      pausedReason: null,
      index: 0,
      hint: !1,
      memory: [],
      failedAttempts: 0,
      calibrating: !1,
      micInfo: null,
      diag: null,
      tuner: null,
      ...this.position(this.state.input)
    });
  }
  closeMic() {
    this.micSession++, this.micOpen && this.audio.closeMic(), this.micOpen = !1;
  }
}
const Ih = 4e3, yc = 12, Fh = 1500;
function Oh(u, s) {
  const o = u.left + u.stickyLeft, c = u.right;
  let f = 0;
  if (s.left < o ? f = s.left - o - yc : s.right > c && (f = s.right - c + yc), f === 0) return null;
  const h = Math.max(0, Math.min(u.maxScroll, u.scrollLeft + f));
  return Math.abs(h - u.scrollLeft) < 1 ? null : h;
}
function Dh(u, s) {
  return s.right <= u.left + u.stickyLeft || s.left >= u.right;
}
function Bh(u, s, o, { stickySelector: c, enabled: f = !0, playback: h } = {}) {
  const w = je.useRef(0), x = je.useRef(!1), E = je.useRef(""), _ = je.useRef(0), j = je.useRef(h);
  je.useEffect(() => {
    const T = u.current;
    if (!T || !f) return;
    const L = () => {
      w.current = Date.now() + Ih;
    }, V = () => {
      x.current = !0, L();
    }, O = () => {
      x.current && (x.current = !1, L());
    }, P = (D) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(D.key) && L();
    };
    return T.addEventListener("pointerdown", V, { passive: !0 }), T.addEventListener("touchstart", V, { passive: !0 }), T.addEventListener("wheel", L, { passive: !0 }), T.addEventListener("keydown", P), window.addEventListener("pointerup", O, { passive: !0 }), window.addEventListener("pointercancel", O, { passive: !0 }), window.addEventListener("touchend", O, { passive: !0 }), window.addEventListener("touchcancel", O, { passive: !0 }), () => {
      T.removeEventListener("pointerdown", V), T.removeEventListener("touchstart", V), T.removeEventListener("wheel", L), T.removeEventListener("keydown", P), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", O), window.removeEventListener("touchend", O), window.removeEventListener("touchcancel", O);
    };
  }, [u, f]), je.useLayoutEffect(() => {
    const T = h !== void 0 && !!h && h !== j.current;
    j.current = h, T && !x.current && (w.current = 0);
  }, [h]), je.useLayoutEffect(() => {
    h === void 0 && E.current === "" && o !== "" && Date.now() - _.current > Fh && !x.current && (w.current = 0), E.current !== "" && o === "" && (_.current = Date.now()), E.current = o;
    const T = u.current;
    if (!T || !f || !o || x.current || Date.now() < w.current) return;
    const L = T.querySelector(s);
    if (!L) return;
    const V = T.getBoundingClientRect(), O = L.getBoundingClientRect(), P = c ? T.querySelector(c) : null, D = P && getComputedStyle(P).position === "sticky" ? P.getBoundingClientRect().width : 0, Z = {
      left: V.left,
      right: V.left + T.clientWidth,
      scrollLeft: T.scrollLeft,
      maxScroll: T.scrollWidth - T.clientWidth,
      stickyLeft: D
    }, A = Oh(Z, O);
    if (A === null) return;
    const b = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || Dh(Z, O);
    typeof T.scrollTo == "function" ? T.scrollTo({ left: A, behavior: b ? "auto" : "smooth" }) : T.scrollLeft = A;
  }, [u, s, o, c, f, h]);
}
const $h = /* @__PURE__ */ new Set([3, 5, 7, 9, 15, 17, 19, 21]), Vh = ["e", "B", "G", "D", "A", "E"];
function Uh({ string: u }) {
  return /* @__PURE__ */ p.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ p.jsxs("span", { children: [
      u + 1,
      " · ",
      /* @__PURE__ */ p.jsx("strong", { children: Vh[u] })
    ] }),
    u === 0 ? /* @__PURE__ */ p.jsx("small", { children: "ohuin" }) : u === 5 ? /* @__PURE__ */ p.jsx("small", { children: "paksuin" }) : null
  ] });
}
const Hh = (u) => ({ "--string-thickness": 1.25 + u * 0.45 + "px" }), Wh = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function Kh({ min: u, max: s }) {
  return /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
    /* @__PURE__ */ p.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: s - u + 1 }, (o, c) => {
      const f = u + c;
      return /* @__PURE__ */ p.jsxs("th", { scope: "col", className: f === 0 ? "open-fret" : "", children: [
        f,
        f > 0 && f % 12 === 0 ? /* @__PURE__ */ p.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : $h.has(f) ? /* @__PURE__ */ p.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, f);
    })
  ] }) });
}
function Qh({ area: u, marks: s = [], mutedStrings: o = [], disabled: c = !1, onAnswer: f, caption: h = "Otelauta", follow: w = "hints", playback: x }) {
  const E = { "--cols": u.max - u.min + 1 }, { strings: _, min: j, max: T } = u, [L, V] = je.useState({ string: Math.min(..._), fret: j }), O = je.useRef(null), P = new Map(s.map((Q) => [ni(Q), Q])), D = s.map((Q) => `${ni(Q)}${Q.kind}`).join(",");
  je.useEffect(() => {
    if (w !== "hints") return;
    const Q = O.current, H = Q?.querySelector(".target, .anchor");
    Q && H && (Q.scrollLeft += H.getBoundingClientRect().left - Q.getBoundingClientRect().left - Q.clientWidth / 2 + H.clientWidth / 2);
  }, [D, w]), je.useEffect(() => {
    w === "playing" && O.current && (O.current.scrollLeft = 0);
  }, [w, j, T]);
  const Z = s.find((Q) => Q.kind === "playing");
  Bh(O, ".playing", Z ? ni(Z) : "", { stickySelector: "tbody th", enabled: w === "playing", playback: x });
  const [A, K] = je.useState({ left: !1, right: !1 });
  je.useEffect(() => {
    const Q = O.current;
    if (!Q) return;
    const H = () => {
      const he = Q.scrollLeft > 2, Me = Q.scrollLeft + Q.clientWidth < Q.scrollWidth - 2;
      K((xe) => xe.left === he && xe.right === Me ? xe : { left: he, right: Me });
    };
    H(), Q.addEventListener("scroll", H, { passive: !0 });
    const re = typeof ResizeObserver > "u" ? null : new ResizeObserver(H);
    return re?.observe(Q), () => {
      Q.removeEventListener("scroll", H), re?.disconnect();
    };
  }, [D, j, T]);
  const b = _.includes(L.string) && L.fret >= j && L.fret <= T ? L : { string: Math.min(..._), fret: j };
  return /* @__PURE__ */ p.jsxs("div", { className: "fret-wrap" + (A.left ? " more-left" : "") + (A.right ? " more-right" : ""), children: [
    (A.left || A.right) && /* @__PURE__ */ p.jsxs("p", { className: "fret-scroll-hint", children: [
      A.left && /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      A.left && A.right ? "molemmilla puolilla" : A.right ? "oikealla" : "vasemmalla",
      A.right && /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ p.jsx("div", { ref: O, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ p.jsxs("table", { className: "practice-board", style: E, children: [
      /* @__PURE__ */ p.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ p.jsx(Kh, { min: j, max: T }),
      /* @__PURE__ */ p.jsx("tbody", { children: Tc.OPEN_PITCHES.map((Q, H) => /* @__PURE__ */ p.jsxs("tr", { className: _.includes(H) ? "" : "unused", style: Hh(H), children: [
        /* @__PURE__ */ p.jsxs("th", { scope: "row", "aria-label": `${H + 1}. kieli: ${yo[H]}${o.includes(H) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ p.jsx(Uh, { string: H }),
          o.includes(H) && /* @__PURE__ */ p.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        Gd([H], j, T).map((re) => {
          const he = P.get(ni(re)), Me = `${yo[H]}-kieli, ${Kd(re.fret)}`;
          return /* @__PURE__ */ p.jsx("td", { className: `${re.fret === 0 ? "open-fret " : ""}${he ? he.kind === "answer" ? "target" : he.kind : ""}`, children: /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              "data-string": H,
              "data-fret": re.fret,
              tabIndex: b.string === H && b.fret === re.fret ? 0 : -1,
              onFocus: () => V(re),
              onKeyDown: (xe) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(xe.key)) return;
                xe.preventDefault();
                const We = [..._].sort((Ke, Le) => Ke - Le), De = We.indexOf(H), Re = xe.key === "ArrowUp" ? We[Math.max(0, De - 1)] : xe.key === "ArrowDown" ? We[Math.min(We.length - 1, De + 1)] : H, Be = xe.key === "Home" ? j : xe.key === "End" ? T : Math.max(j, Math.min(T, re.fret + (xe.key === "ArrowRight" ? 1 : xe.key === "ArrowLeft" ? -1 : 0)));
                xe.currentTarget.closest("table")?.querySelector(`button[data-string="${Re}"][data-fret="${Be}"]`)?.focus();
              },
              disabled: c || !_.includes(H),
              "aria-label": Me + (he ? `, ${Wh[he.kind]}${he.label ? " " + he.label : ""}` : ""),
              onClick: () => f?.(re),
              children: he ? /* @__PURE__ */ p.jsx("span", { className: "dot", children: he.label || "●" }) : null
            }
          ) }, re.fret);
        })
      ] }, H)) })
    ] }) })
  ] });
}
const yr = (u, s = 1) => u.toFixed(s).replace(".", ","), mr = (u) => {
  const s = Math.round(ks(u));
  return `${s < 0 ? "−" : ""}${Math.abs(s)} dB`;
}, Rc = (u) => (u > 0 ? "+" : u < 0 ? "−" : "±") + yr(Math.abs(u), 0);
function gs({ s: u, game: s }) {
  const o = u.devices.some((c) => c.id === u.device);
  return /* @__PURE__ */ p.jsxs("div", { className: "riff-device", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: "riff-device", children: "Äänitulo" }),
    /* @__PURE__ */ p.jsxs("select", { id: "riff-device", value: o || !u.device ? u.device : "", onChange: (c) => s.setDevice(c.target.value), children: [
      /* @__PURE__ */ p.jsx("option", { value: "", children: "Järjestelmän oletus" }),
      u.devices.map((c) => /* @__PURE__ */ p.jsx("option", { value: c.id, children: c.label }, c.id))
    ] }),
    /* @__PURE__ */ p.jsxs("p", { className: "riff-help", "data-testid": "mic-device", children: [
      u.micInfo ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        "Käytössä: ",
        /* @__PURE__ */ p.jsx("strong", { children: u.micInfo.label || "nimetön äänitulo" }),
        " · ",
        u.micInfo.channels,
        " ",
        u.micInfo.channels === 1 ? "kanava" : "kanavaa",
        " · ",
        yr(u.micInfo.sampleRate / 1e3, 1),
        " kHz"
      ] }) : "Mikrofoni ei ole auki.",
      u.micInfo?.fallback && /* @__PURE__ */ p.jsx(p.Fragment, { children: " · Valittua laitetta ei löytynyt, joten käytössä on järjestelmän oletus." })
    ] }),
    !u.devices.length && u.micInfo && /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Selain ei ilmoittanut laitteita. Valitse laite tarvittaessa järjestelmän ääniasetuksista ja valitse sitten ”Järjestelmän oletus” uudelleen." })
  ] });
}
const Gh = {
  silent: "Taso on äänikynnyksen alapuolella.",
  unclear: "Ääntä tulee, mutta selkeää sävelkorkeutta ei löydy (selkeys alle 94 %).",
  "out-of-range": "Taajuus on kitaran alueen ulkopuolella.",
  "off-pitch": "Sävel tunnistettiin, mutta se on yli ±35 senttiä vireestä.",
  pitch: "Sävelkorkeus tunnistettu."
}, gc = {
  silent: "Ei ääntä kynnyksen yläpuolella.",
  unclear: "Ei selkeää säveltä.",
  "out-of-range": "Taajuus alueen ulkopuolella.",
  "off-pitch": "Liian epävireinen.",
  "waiting-new-pluck": "Sama sävel soi yhä: odotetaan uutta näppäystä tai lyhyttä vaimennusta.",
  harmonic: "Edellisen sävelen ylä-ääni tai oktaavi: ei uusi näppäily ilman uutta aluketta.",
  "too-quiet-for-change": "Eri sävel, mutta liian hiljainen (myötäresonanssi?): ei uusi näppäily ilman aluketta.",
  stabilizing: "Sävel vakautuu."
}, kc = { quiet: "hiljaisuuden jälkeen", onset: "uusi aluke", "pitch-change": "sävelen vaihto" }, qh = { game: "riffiyritykseen", "mic-check": "mikrofonitestiin", "not-routed": "ei välitetty (ei vastausvuoroa)" };
function wc({ s: u, compact: s = !1 }) {
  const o = u.diag;
  if (!o) return /* @__PURE__ */ p.jsx("p", { className: "riff-help", "data-testid": "diag", children: "Odotetaan mikrofonin ensimmäisiä analyysitietoja…" });
  const c = o.frame, f = o.pluck, h = c.rms >= o.minRms, w = Math.max(0, Math.min(100, (ks(c.rms) + 60) / 60 * 100)), x = Math.max(0, Math.min(100, (ks(o.minRms) + 60) / 60 * 100)), E = (_, j, T, L) => /* @__PURE__ */ p.jsxs("li", { className: _ ? "ok" : "no", "data-testid": `diag-${L}`, children: [
    /* @__PURE__ */ p.jsxs("strong", { children: [
      /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: _ ? "●" : "○" }),
      " ",
      j
    ] }),
    /* @__PURE__ */ p.jsx("span", { children: T })
  ] });
  return /* @__PURE__ */ p.jsxs("div", { className: `riff-diag${s ? " compact" : ""}`, "data-testid": "diag", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "riff-meter", role: "meter", "aria-label": "Äänitaso", "aria-valuemin": -60, "aria-valuemax": 0, "aria-valuenow": Math.round(ks(c.rms)), children: [
      /* @__PURE__ */ p.jsx("span", { className: "fill", style: { width: w + "%" } }),
      /* @__PURE__ */ p.jsx("span", { className: "threshold", style: { left: x + "%" }, title: "Äänikynnys" })
    ] }),
    /* @__PURE__ */ p.jsxs("ol", { className: "riff-stages", children: [
      E(h, "1. Ääntä mikrofonista", /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        mr(c.rms),
        " (kynnys ",
        mr(o.minRms),
        ")",
        c.levels.length > 1 ? ` · kanavat ${c.levels.map(mr).join(" / ")}, analysoidaan kanavaa ${c.channel + 1}` : "",
        c.peak > 0.98 ? " · leikkautuu: pienennä gainia" : ""
      ] }), "level"),
      E(c.status === "pitch" || c.status === "off-pitch", "2. Sävelkorkeus", c.frequency ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        yr(c.frequency),
        " Hz · ",
        c.midi !== void 0 ? `${Ye(c.midi)} (MIDI ${c.midi})` : "–",
        " · ",
        c.cents !== void 0 ? `${Rc(c.cents)} snt` : "",
        " · selkeys ",
        Math.round((c.clarity ?? 0) * 100),
        " %"
      ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        Gh[c.status],
        c.clarity ? ` Selkeys ${Math.round(c.clarity * 100)} %.` : ""
      ] }), "pitch"),
      E(
        !!f.candidate && f.reason === "stabilizing" || !!f.last && f.reason === null,
        "3. Vakaa sävel",
        f.candidate ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          Ye(f.candidate.midi),
          ": ",
          Math.round(f.candidate.heldMs),
          " / 240 ms"
        ] }) : f.reason ? gc[f.reason] : "–",
        "stable"
      ),
      E(f.armed, "4. Uusi näppäily", /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        f.armed ? `Valmis hyväksymään (${kc[f.armedBy]}).` : f.reason ? gc[f.reason] : "Odotetaan uutta näppäystä.",
        f.last && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          " Viimeisin: ",
          /* @__PURE__ */ p.jsx("strong", { children: Ye(f.last.midi) }),
          " (",
          kc[f.last.armedBy],
          "), näppäilyjä ",
          f.count,
          "."
        ] })
      ] }), "pluck"),
      E(o.routed.last?.route === "game", "5. Välitetty pelille", o.routed.last ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        Ye(o.routed.last.midi),
        " → ",
        qh[o.routed.last.route],
        " · yhteensä ",
        o.routed.count
      ] }) : "Ei vielä näppäilyjä.", "routed")
    ] }),
    !s && /* @__PURE__ */ p.jsxs("p", { className: "riff-help", children: [
      "Taustakohina ",
      u.noise ? `${mr(u.noise.noise)} → äänikynnys ${mr(u.minRms)}` : `ei mitattu, oletuskynnys ${mr(u.minRms)}`,
      ". Diagnostiikka ei lähetä mitään peliin."
    ] })
  ] });
}
const Yh = {
  "no-signal": "Näppää kieli ja anna sen soida.",
  unreliable: "Epävarma havainto – näppää kieli uudelleen ja anna soida. Viritysohjetta ei anneta.",
  far: "",
  flat: "Liian matala – kiristä kieltä hieman.",
  "in-tune": "Vireessä!",
  sharp: "Liian korkea – löysää kieltä hieman."
};
function Xh({ s: u, game: s }) {
  const o = u.tuner, c = o?.cents ?? 0, f = o && ["flat", "in-tune", "sharp"].includes(o.status), h = 50 + Math.max(-50, Math.min(50, c));
  return /* @__PURE__ */ p.jsxs("div", { className: "riff-tuner", "data-testid": "tuner", children: [
    /* @__PURE__ */ p.jsxs("fieldset", { className: "riff-strings", children: [
      /* @__PURE__ */ p.jsx("legend", { children: "Kieli" }),
      /* @__PURE__ */ p.jsx("button", { type: "button", "aria-pressed": u.tunerTarget === null, onClick: () => s.setTunerTarget(null), children: "Auto" }),
      Ss.map((w) => /* @__PURE__ */ p.jsxs("button", { type: "button", "aria-pressed": u.tunerTarget === w.midi, onClick: () => s.setTunerTarget(w.midi), children: [
        /* @__PURE__ */ p.jsx("strong", { children: w.name }),
        /* @__PURE__ */ p.jsxs("small", { children: [
          w.number,
          ". kieli"
        ] })
      ] }, w.midi))
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: `riff-tuner-readout ${o?.status ?? "no-signal"}`, role: "status", "data-testid": "tuner-status", "data-status": o?.status ?? "no-signal", children: [
      /* @__PURE__ */ p.jsx("p", { className: "target", children: o ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        "Tavoite ",
        /* @__PURE__ */ p.jsx("strong", { children: o.target.name }),
        " (",
        yr(440 * 2 ** ((o.target.midi - 69) / 12), 2),
        " Hz)",
        o.auto ? ", valittu automaattisesti" : ""
      ] }) : "Näppää kieli." }),
      /* @__PURE__ */ p.jsx("p", { className: "value", "data-testid": "tuner-cents", children: f ? `${Rc(c)} senttiä` : "–" }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-tuner-scale", "aria-hidden": "true", children: [
        /* @__PURE__ */ p.jsx("span", { className: "zone", style: { left: `${50 - ws}%`, width: `${ws * 2}%` } }),
        f && /* @__PURE__ */ p.jsx("span", { className: "needle", style: { left: h + "%" } }),
        /* @__PURE__ */ p.jsx("span", { className: "label left", children: "−50" }),
        /* @__PURE__ */ p.jsx("span", { className: "label mid", children: "0" }),
        /* @__PURE__ */ p.jsx("span", { className: "label right", children: "+50" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "advice", "data-testid": "tuner-advice", children: o?.status === "far" && o.heardMidi !== void 0 ? `Kuulen ${Ye(o.heardMidi)} (${yr(o.frequency)} Hz), mikä on yli puolisävelaskeleen päässä kielestä ${o.target.name}. Tarkista, että soitat oikeaa kieltä.` : Yh[o?.status ?? "no-signal"] }),
      o?.frequency && o.status !== "far" && /* @__PURE__ */ p.jsxs("p", { className: "riff-help", "data-testid": "tuner-frequency", children: [
        "Mitattu ",
        yr(o.frequency, 2),
        " Hz",
        o.heardMidi !== void 0 ? ` · lähin sävel ${Ye(o.heardMidi)}` : ""
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("p", { className: "riff-help", children: [
      "A4 = 440 Hz. Vihreä alue on ±",
      ws,
      " senttiä. Viritin käyttää samaa sävelentunnistusta kuin peli, mutta sen lukemat eivät koskaan mene peliin."
    ] })
  ] });
}
const Jh = { strings: go, min: kh, max: wh, fixed: "" }, Zh = (u) => u.level.strings, bh = {
  manual: "Peli on tauolla.",
  background: "Peli pysähtyi, koska välilehti siirtyi taustalle. Mikrofoni ja äänet on suljettu.",
  "mic-lost": "Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite ja jatka."
}, ep = { pending: "harmaa, ei vielä ratkaistu", red: "punainen, väärä sävel – yritä tätä kohtaa uudelleen", green: "vihreä, oikein heti", yellow: "keltainen, löytyi virheen jälkeen" }, xc = { pending: "", red: "✗", green: "✓", yellow: "↻" };
function Sc(u) {
  const s = u.heard;
  return s ? s.status === "silent" ? "alle äänikynnyksen" : s.status === "pitch" && s.midi !== void 0 ? Ye(s.midi) : s.status === "off-pitch" && s.midi !== void 0 ? `${Ye(s.midi)}, epävireinen` : "ääntä, ei selvää säveltä" : "ei vielä analyysia";
}
function tp(u) {
  const s = /* @__PURE__ */ new Map();
  return u.riff.spots.forEach((o, c) => {
    const f = { ...o, midi: u.riff.midi[c] }, h = ni(f), w = s.get(h);
    s.set(h, { ...f, kind: u.playing === c ? "playing" : w?.kind ?? "answer", label: w ? `${w.label}·${c + 1}` : String(c + 1) });
  }), [...s.values()];
}
const vo = (u) => `${qe[u - 1]?.name ?? `Kotitreeni ${u}`} – ${qe[u - 1]?.title ?? ""}`;
function np({ s: u }) {
  const s = u.riff.midi.length;
  return /* @__PURE__ */ p.jsx("ol", { className: "riff-slots", "aria-label": `Ratkaistu ${u.index} / ${s} säveltä`, "data-testid": "slots", children: u.riff.midi.map((o, c) => {
    const f = u.marks[c] ?? "pending", h = u.modelPlaying && u.playing === c, w = (f === "pending" || f === "red") && c === u.index && u.phase === "listening", x = f === "pending" && u.memory[c] != null, E = f === "green" || f === "yellow" ? Ye(o) : h ? "♪" : x ? Ye(u.memory[c]) : xc[f] || (w ? "?" : "");
    return /* @__PURE__ */ p.jsxs(
      "li",
      {
        className: `${f}${w ? " current" : ""}${h ? " model" : ""}${x ? " memory" : ""}`,
        "data-mark": f,
        "aria-label": `${c + 1}. sävel: ${ep[f]}${x ? `, muistivihje ${Ye(u.memory[c])}` : ""}${w ? ", vuorossa" : ""}`,
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "slot-note", "aria-hidden": "true", children: E }),
          (f === "green" || f === "yellow") && /* @__PURE__ */ p.jsx("span", { className: "slot-symbol", "aria-hidden": "true", children: xc[f] })
        ]
      },
      c
    );
  }) });
}
function rp({ items: u }) {
  const [s, o] = je.useState(!1), c = je.useRef(null), f = je.useRef(null), h = je.useRef(null);
  je.useEffect(() => {
    if (!s) return;
    f.current?.querySelector("button")?.focus();
    const E = (_) => {
      h.current?.contains(_.target) || o(!1);
    };
    return document.addEventListener("pointerdown", E), () => document.removeEventListener("pointerdown", E);
  }, [s]);
  const w = () => {
    o(!1), c.current?.focus();
  }, x = (E) => {
    const _ = [...f.current?.querySelectorAll("button") ?? []], j = _.indexOf(document.activeElement);
    E.key === "Escape" ? (E.preventDefault(), w()) : E.key === "ArrowDown" ? (E.preventDefault(), _[(j + 1) % _.length]?.focus()) : E.key === "ArrowUp" ? (E.preventDefault(), _[(j - 1 + _.length) % _.length]?.focus()) : E.key === "Home" ? (E.preventDefault(), _[0]?.focus()) : E.key === "End" ? (E.preventDefault(), _.at(-1)?.focus()) : E.key === "Tab" && o(!1);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "riff-menu", ref: h, children: [
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        type: "button",
        ref: c,
        className: "riff-menu-button",
        "aria-haspopup": "true",
        "aria-expanded": s,
        "aria-controls": "riff-menu-list",
        onClick: () => o((E) => !E),
        children: [
          /* @__PURE__ */ p.jsx("span", { "aria-hidden": "true", children: "⋯" }),
          " Lisää"
        ]
      }
    ),
    s && /* @__PURE__ */ p.jsx("ul", { id: "riff-menu-list", ref: f, className: "riff-menu-list", "aria-label": "Lisää toimintoja", onKeyDown: x, children: u.map((E) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => {
      o(!1), E.run();
    }, children: E.label }) }, E.label)) })
  ] });
}
function ip({ game: u }) {
  const s = je.useSyncExternalStore(u.subscribe, u.getState), [o, c] = je.useState(null), [f, h] = je.useState(!1), w = je.useRef(), x = je.useRef(null);
  je.useEffect(() => {
    s.phase === "level-complete" && x.current?.focus();
  }, [s.phase]), je.useEffect(() => {
    const A = () => {
      document.visibilityState === "hidden" && u.pause("background");
    }, K = () => u.stop(), b = () => {
      u.refreshDevices();
    };
    return document.addEventListener("visibilitychange", A), window.addEventListener("pagehide", K), navigator.mediaDevices?.addEventListener?.("devicechange", b), () => {
      document.removeEventListener("visibilitychange", A), window.removeEventListener("pagehide", K), navigator.mediaDevices?.removeEventListener?.("devicechange", b), clearTimeout(w.current);
    };
  }, [u]), je.useEffect(() => {
    u.setDiagnosticsOpen(f && s.input === "mic");
  }, [u, f, s.input]);
  const E = s.riff.midi.length, _ = ["ready", "model-playing", "output-settling", "listening", "success", "retry", "paused"].includes(s.phase), j = s.input === "board", T = j && ["ready", "listening", "success", "retry"].includes(s.phase), L = Zh(s);
  function V(A) {
    u.tap(A.midi) && (clearTimeout(w.current), c((K) => ({ p: A, n: (K?.n ?? 0) + 1 })), w.current = setTimeout(() => c(null), 450));
  }
  const O = [
    ...s.hint ? tp(s) : [],
    ...o && j ? [{ ...o.p, kind: "playing", label: Ye(o.p.midi) }] : []
  ];
  if (s.phase === "idle") {
    const A = (Q) => u.progress(Q), K = A(s.input).level, b = (Q) => `${qe[A(Q).level - 1].name}, suoritettu ${A(Q).completed.length}/${qe.length}`;
    return /* @__PURE__ */ p.jsxs("section", { className: "riff-game", "data-phase": "idle", "aria-labelledby": "riff-title", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "riff-intro", children: [
        /* @__PURE__ */ p.jsx("p", { className: "eyebrow", children: "KAIKUPELI · PROTOTYYPPI 0.3" }),
        /* @__PURE__ */ p.jsx("h1", { id: "riff-title", children: "Riffikaiku" }),
        /* @__PURE__ */ p.jsx("p", { children: "Kuuntele lyhyt riffi ja soita se takaisin samassa järjestyksessä. Ei aikarajaa, ei elämiä." })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-next", "data-testid": "next-training", children: [
        /* @__PURE__ */ p.jsx("p", { className: "eyebrow", children: A("mic").completed.length || A("board").completed.length ? "JATKA" : "ALOITA TÄSTÄ" }),
        /* @__PURE__ */ p.jsx("h2", { children: vo(K) }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          "Kolme lyhyttä riffiä ",
          qe[K - 1].title.toLowerCase().replace("kieli", "kieleltä"),
          ". Koko otelauta näkyy, harjoituskieli on korostettu."
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("h2", { children: "Millä soitat?" }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-choices", children: [
        /* @__PURE__ */ p.jsxs("button", { type: "button", className: "riff-choice primary", onClick: () => u.startMic(), children: [
          /* @__PURE__ */ p.jsx("strong", { children: "Oikea kitara" }),
          /* @__PURE__ */ p.jsx("span", { children: "Soita omalla kitaralla. Valitse äänitulo, testaa mikrofoni ja viritä halutessasi. Ääni käsitellään vain tässä selaimessa eikä sitä tallenneta." })
        ] }),
        /* @__PURE__ */ p.jsxs("button", { type: "button", className: "riff-choice", onClick: () => u.startBoard(), children: [
          /* @__PURE__ */ p.jsx("strong", { children: "Virtuaalikitara" }),
          /* @__PURE__ */ p.jsx("span", { children: "Soita otelaudalla hiirellä tai kosketuksella. Ei mikrofonia." })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-tally", "data-testid": "tally", children: [
        "Oikea kitara: ",
        b("mic"),
        " · Virtuaalikitara: ",
        b("board")
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-tools-links", children: [
        "Oikean kitaran työkalut:",
        " ",
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "link", onClick: () => u.openTools("tuner"), children: "Viritin" }),
        " · ",
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "link", onClick: () => u.openTools("diagnostics"), children: "Mikrofonin diagnostiikka" })
      ] })
    ] });
  }
  const P = [];
  _ && (["ready", "listening", "output-settling", "model-playing", "retry"].includes(s.phase) && (s.index > 0 || s.marks.includes("red") || s.phase === "retry") && P.push({ label: "Aloita uusi yritys", run: () => u.restart() }), s.phase === "paused" ? P.push({ label: "Jatka", run: () => u.resume() }) : ["success", "retry"].includes(s.phase) || P.push({ label: "Tauko", run: () => u.pause("manual") }), s.tutorial || P.push({ label: "Kotitreenit", run: () => u.openLevels() }), s.input === "mic" && P.push({ label: f ? "Piilota mikrofonin tiedot" : "Mikrofonin tiedot", run: () => h((A) => !A) }), P.push({ label: j ? "Vaihda oikeaan kitaraan" : "Vaihda virtuaalikitaraan", run: () => u.switchInput(j ? "mic" : "board") }), P.push({ label: "Lopeta harjoitus", run: () => u.stop() }));
  const D = s.phase === "ready" ? "Kuuntele riffi aloittaaksesi." : s.phase === "model-playing" ? "Kuuntele riffi…" : s.phase === "output-settling" ? "Valmistaudu…" : s.phase === "listening" ? s.modelPlaying ? "Kuuntele riffi…" : "Sinun vuorosi!" : s.phase === "success" ? "Riffi läpäisty!" : s.phase === "retry" ? "Riffi soitettu loppuun" : s.phase === "paused" ? bh[s.pausedReason ?? "manual"] : "", Z = { "--focus-rows": L.length };
  return /* @__PURE__ */ p.jsxs("section", { className: "riff-game", "data-phase": s.phase, "data-input": s.input, "aria-labelledby": "riff-title", children: [
    !_ && /* @__PURE__ */ p.jsxs("div", { className: "riff-top", children: [
      /* @__PURE__ */ p.jsx("h1", { id: "riff-title", children: "Riffikaiku" }),
      /* @__PURE__ */ p.jsxs("span", { children: [
        s.input === "mic" ? "Oikea kitara" : "Virtuaalikitara",
        s.micInfo && s.input === "mic" ? ` · ${s.micInfo.label}` : ""
      ] })
    ] }),
    s.phase === "permission" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ p.jsx("p", { className: "riff-status", role: "status", children: "Pyydetään mikrofonilupaa…" }),
      /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Salli mikrofoni selaimen kysymyksestä. Voit myös pelata virtuaalikitaralla." }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.startBoard(), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Takaisin" })
      ] })
    ] }),
    s.phase === "error" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", children: [
      /* @__PURE__ */ p.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: s.error }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.startBoard(), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.startMic(), children: "Yritä mikrofonia uudelleen" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Takaisin" })
      ] }),
      s.devices.length > 0 && /* @__PURE__ */ p.jsx(gs, { s, game: u })
    ] }),
    s.phase === "mic-check" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", "data-testid": "mic-setup", children: [
      /* @__PURE__ */ p.jsx("h2", { children: "Oikea kitara: valmistelu" }),
      /* @__PURE__ */ p.jsx(gs, { s, game: u }),
      /* @__PURE__ */ p.jsx("h3", { children: "Mikrofonin testi" }),
      s.calibrating ? /* @__PURE__ */ p.jsx("p", { className: "riff-status", role: "status", "data-testid": "calibrating", children: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" }) : /* @__PURE__ */ p.jsxs("p", { children: [
        "Soita ",
        /* @__PURE__ */ p.jsxs("strong", { children: [
          "vapaa B-kieli (",
          Ye(ii),
          ")"
        ] }),
        ", toiseksi ohuin kieli, ja anna sen soida hetki."
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ p.jsx("strong", { "data-testid": "heard", children: Sc(s) })
      ] }),
      s.feedback && /* @__PURE__ */ p.jsx("p", { className: `riff-feedback ${s.feedback.tone}`, role: "status", "data-testid": "feedback", children: s.feedback.text }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", disabled: s.check === "waiting", onClick: () => u.continueAfterCheck(), children: s.check === "other" ? "Aloita silti harjoitus" : "Aloita harjoitus" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openTools("tuner"), children: "Viritä kitara (valinnainen)" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openTools("diagnostics"), children: "Mikrofonin diagnostiikka" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.switchInput("board"), children: "Pelaa virtuaalikitaralla" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Lopeta" })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Jos sävel ei tunnistu, avaa diagnostiikka: se näyttää, tuleeko ääntä, tunnistuuko sävelkorkeus ja hyväksytäänkö näppäily." })
    ] }),
    s.phase === "tools" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", "data-testid": "tools", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "riff-tabs", role: "tablist", "aria-label": "Mikrofonin työkalut", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", role: "tab", "aria-selected": s.tool === "tuner", onClick: () => u.setTool("tuner"), children: "Viritin" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", role: "tab", "aria-selected": s.tool === "diagnostics", onClick: () => u.setTool("diagnostics"), children: "Diagnostiikka" })
      ] }),
      /* @__PURE__ */ p.jsx(gs, { s, game: u }),
      s.calibrating && /* @__PURE__ */ p.jsx("p", { className: "riff-status", role: "status", "data-testid": "calibrating", children: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" }),
      s.feedback && !s.calibrating && /* @__PURE__ */ p.jsx("p", { className: `riff-feedback ${s.feedback.tone}`, role: "status", children: s.feedback.text }),
      s.tool === "tuner" ? /* @__PURE__ */ p.jsx(Xh, { s, game: u }) : /* @__PURE__ */ p.jsx(wc, { s }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.startFromTools(), children: "Aloita harjoitus" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.closeTools(), children: "Takaisin" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.calibrate(), disabled: s.calibrating, children: "Mittaa taustakohina uudelleen" })
      ] })
    ] }),
    s.phase === "levels" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel", "data-testid": "levels", children: [
      /* @__PURE__ */ p.jsx("h2", { children: "Kotitreenit" }),
      /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Jokainen kotitreeni harjoittaa yhtä kieltä kolmella riffillä. Seuraava avautuu edellisen suorittamisesta." }),
      /* @__PURE__ */ p.jsx("ol", { className: "riff-levels", children: qe.map((A) => {
        const K = s.completedLevels.includes(A.number), b = s.unlockedLevels.includes(A.number), Q = u.progress(s.input).level === A.number;
        return /* @__PURE__ */ p.jsxs("li", { className: K ? "done" : b ? "open" : "locked", children: [
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsxs("strong", { children: [
              A.name,
              " – ",
              A.title
            ] }),
            /* @__PURE__ */ p.jsx("span", { children: K ? "suoritettu" : Q ? "kesken" : b ? "avattu" : "lukittu" })
          ] }),
          b && /* @__PURE__ */ p.jsx("button", { type: "button", className: Q ? "primary" : "", onClick: () => u.chooseLevel(A.number, K && !Q), children: Q ? "Jatka" : K ? "Harjoittele uudelleen" : "Aloita" })
        ] }, A.number);
      }) }),
      /* @__PURE__ */ p.jsx("p", { className: "riff-help", children: "Muiden kielten kotitreenit tulevat myöhemmin." }),
      /* @__PURE__ */ p.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.stop(), children: "Lopeta" }) })
    ] }),
    s.phase === "level-complete" && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel riff-cleared", "data-testid": "level-complete", children: [
      /* @__PURE__ */ p.jsx("h2", { tabIndex: -1, ref: x, children: "Onneksi olkoon!" }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-cleared-big", children: [
        vo(s.level.number),
        " suoritettu!"
      ] }),
      s.level.number < qe.length ? /* @__PURE__ */ p.jsxs("p", { children: [
        "Soitit kaikki kolme riffiä oikein. Olet valmis seuraavaan kotitreeniin: ",
        vo(s.level.number + 1),
        "."
      ] }) : /* @__PURE__ */ p.jsx("p", { children: "Olet suorittanut kaikki nykyiset kotitreenit. Muiden kielten kotitreenit ovat tulossa." }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions", children: [
        s.level.number < qe.length && /* @__PURE__ */ p.jsxs("button", { type: "button", className: "primary", onClick: () => u.continueLevel(), children: [
          "Jatka: ",
          qe[s.level.number].name
        ] }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.repeatLevel(), children: "Harjoittele uudelleen" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.openLevels(), children: "Kotitreenit" })
      ] })
    ] }),
    _ && /* @__PURE__ */ p.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ p.jsxs("header", { className: "riff-play-head", children: [
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "riff-brand", id: "riff-title", children: "Riffikaiku" }),
          /* @__PURE__ */ p.jsx("h1", { "data-testid": "level-heading", children: s.tutorial ? `${qe[0].name} · Opastus` : `${s.level.name} · Riffi ${s.riffNumber}/${s.level.riffs.length}` }),
          /* @__PURE__ */ p.jsx("p", { className: "riff-name", children: s.tutorial ? "Kaksi säveltä" : s.riff.title })
        ] }),
        /* @__PURE__ */ p.jsx(rp, { items: P })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-turn", children: [
        /* @__PURE__ */ p.jsx("p", { className: `riff-status ${s.phase === "listening" && !s.modelPlaying ? "turn" : s.phase === "success" ? "good" : ""}`, role: "status", "data-testid": "riff-status", children: D }),
        /* @__PURE__ */ p.jsx("p", { className: "riff-instruction", "data-testid": "instruction", children: s.level.instruction })
      ] }),
      /* @__PURE__ */ p.jsx(np, { s }),
      /* @__PURE__ */ p.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
        "Ratkaistu ",
        s.index,
        "/",
        E,
        s.memory.some((A) => A !== null) ? " · muistivihjeet käytössä" : ""
      ] }),
      s.feedback && /* @__PURE__ */ p.jsx("p", { className: `riff-feedback ${s.feedback.tone}`, role: "status", "data-testid": "feedback", children: s.feedback.text }),
      s.input === "mic" && !["paused", "ready"].includes(s.phase) && /* @__PURE__ */ p.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ p.jsx("strong", { "data-testid": "heard", children: s.modelPlaying ? "tauolla mallin ajan" : Sc(s) })
      ] }),
      s.hint && /* @__PURE__ */ p.jsxs("div", { className: "riff-hint", "data-testid": "hint", children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("strong", { children: "Sävelet:" }),
          " ",
          s.riff.midi.map(Ye).join(" – ")
        ] }),
        /* @__PURE__ */ p.jsx("p", { children: s.riff.tip })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: `riff-board ${L.length < go.length ? "has-focus" : ""} ${L.map((A) => `focus-s${A}`).join(" ")}`, style: Z, "data-testid": "board", children: [
        L.length < go.length && /* @__PURE__ */ p.jsxs("p", { className: "riff-focus-legend", "data-testid": "focus-legend", children: [
          /* @__PURE__ */ p.jsx("span", { className: "swatch", "aria-hidden": "true" }),
          " Harjoituskieli: ",
          L.map((A) => `${yo[A]}-kieli`).join(" ja "),
          L.length === 1 ? ` (${sp(L[0])})` : ""
        ] }),
        /* @__PURE__ */ p.jsx(
          Qh,
          {
            area: Jh,
            marks: O,
            disabled: !T,
            onAnswer: V,
            caption: j ? T ? "Virtuaalikitara: kaikki kuusi kieltä, nauhat 0–5" : "Virtuaalikitara: odota mallin loppuun" : "Otelauta: soita oikealla kitaralla (mikrofoni kuulee vain sävelkorkeuden)"
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "riff-actions riff-main-actions", children: [
        s.phase === "paused" && /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.resume(), children: "Jatka" }),
        s.phase === "success" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.next(), children: s.tutorial ? `Aloita ${qe[0].name}` : "Seuraava riffi" }),
          !s.tutorial && /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.playAgain(), children: "Soita uudelleen" })
        ] }),
        s.phase === "retry" && (s.autoRetry ? /* @__PURE__ */ p.jsx("button", { type: "button", onClick: () => u.cancelAutoRetry(), children: "Peru automaattinen uusinta" }) : /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", onClick: () => u.retry(), children: "Yritä uudelleen" })),
        s.phase !== "paused" && /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            className: ["ready", "listening", "output-settling", "model-playing"].includes(s.phase) ? "primary" : "",
            onClick: () => u.listen(),
            "aria-pressed": s.modelPlaying,
            "data-testid": "listen",
            children: s.modelPlaying ? "Pysäytä kuuntelu" : "Kuuntele riffi"
          }
        ),
        s.phase !== "paused" && /* @__PURE__ */ p.jsx("button", { type: "button", "aria-pressed": s.hint, onClick: () => u.toggleHint(), children: s.hint ? "Piilota vihje" : "Vihje" })
      ] }),
      s.input === "mic" && f && /* @__PURE__ */ p.jsxs("div", { className: "riff-details", "data-testid": "mic-details", children: [
        /* @__PURE__ */ p.jsx(gs, { s, game: u }),
        /* @__PURE__ */ p.jsx(wc, { s, compact: !0 })
      ] })
    ] })
  ] });
}
function sp(u) {
  return ["ohuin kieli", "toiseksi ohuin", "kolmanneksi ohuin", "kolmanneksi paksuin", "toiseksi paksuin", "paksuin kieli"][u];
}
const Ec = "musiikin-kartta:riffikaiku:v1", lp = ["mic", "board"], Lc = "kotitreenit", op = () => ({
  version: 1,
  structure: Lc,
  tutorialDone: !1,
  input: "mic",
  fullBoard: !1,
  device: "",
  stats: { mic: {}, board: {} },
  results: [],
  run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } },
  levels: { mic: [], board: [] }
}), li = (u) => typeof u == "number" && Number.isFinite(u) && u >= 0, Pc = (u) => u === "mic" || u === "board", wo = (u) => Number.isInteger(u) && qe.some((s) => s.number === u), ap = (u) => {
  const s = u;
  return !!s && typeof s == "object" && li(s.done) && li(s.solo) && li(s.lastAt) && s.solo <= s.done && (s.passed === void 0 || li(s.passed) && s.passed <= s.done && s.solo <= s.passed);
}, up = (u) => {
  const s = u;
  return !!s && typeof s == "object" && typeof s.riff == "string" && Pc(s.input) && typeof s.hint == "boolean" && ["wrong", "octave", "replays", "ms", "at"].every((o) => li(s[o])) && (s.passed === void 0 || typeof s.passed == "boolean") && (s.level === void 0 || Number.isInteger(s.level) && s.level > 0);
};
function cp(u) {
  const s = op();
  if (!u) return s;
  let o;
  try {
    o = JSON.parse(u);
  } catch {
    return s;
  }
  const c = o;
  if (!c || c.version !== 1) return s;
  s.tutorialDone = c.tutorialDone === !0, s.fullBoard = c.fullBoard === !0, typeof c.device == "string" && (s.device = c.device.slice(0, 256)), Pc(c.input) && (s.input = c.input);
  const f = c.structure !== Lc;
  for (const h of lp) {
    const w = c.stats?.[h];
    if (w && typeof w == "object")
      for (const [_, j] of Object.entries(w)) ap(j) && (s.stats[h][_] = { ...j });
    const x = c.run?.[h];
    if (f) {
      x && x.level === 1 && Array.isArray(x.passed) && (s.run[h] = { level: 1, passed: qe[0].riffs.map((_) => _.id).filter((_) => x.passed.includes(_)) });
      continue;
    }
    if (x && wo(x.level) && Array.isArray(x.passed)) {
      const _ = qe.find((j) => j.number === x.level).riffs.map((j) => j.id);
      s.run[h] = { level: x.level, passed: _.filter((j) => x.passed.includes(j)) };
    }
    const E = c.levels?.[h];
    Array.isArray(E) && (s.levels[h] = [...new Set(E.filter(wo))].sort((_, j) => _ - j));
  }
  return Array.isArray(c.results) && (s.results = c.results.filter(up).slice(-300).map((h) => f && !h.legacy ? { ...h, legacy: !0 } : h)), s;
}
class fp {
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(s) {
    this.storage = s;
    let o = null;
    try {
      o = s?.getItem(Ec) ?? null;
    } catch {
      o = null;
    }
    this.data = cp(o);
  }
  storage;
  data;
  save() {
    try {
      this.storage?.setItem(Ec, JSON.stringify(this.data));
    } catch {
    }
  }
  setInput(s) {
    this.data.input !== s && (this.data.input = s, this.save());
  }
  setFullBoard(s) {
    this.data.fullBoard !== s && (this.data.fullBoard = s, this.save());
  }
  setDevice(s) {
    this.data.device !== s && (this.data.device = s, this.save());
  }
  /** Tasot, jotka voi valita tasovalikosta: läpäistyt, nykyinen ja seuraava läpäisemätön. */
  unlockedLevels(s) {
    const o = Math.max(this.data.run[s].level, ...this.data.levels[s].map((c) => c + 1));
    return qe.map((c) => c.number).filter((c) => c <= o);
  }
  finishTutorial() {
    this.data.tutorialDone || (this.data.tutorialDone = !0, this.save());
  }
  run(s) {
    return this.data.run[s];
  }
  completedLevels(s) {
    return this.data.levels[s];
  }
  level(s) {
    return qe.find((o) => o.number === this.data.run[s].level);
  }
  /** Tasokierroksen seuraava läpäisemätön riffi, tai null kun kaikki kolme on läpäisty. */
  currentRiff(s) {
    const o = this.data.run[s];
    return this.level(s).riffs.find((c) => !o.passed.includes(c.id)) ?? null;
  }
  /** Aloittaa tason alusta (uusi kierros). Läpäistyt tasot säilyvät. */
  startLevel(s, o) {
    wo(o) && (this.data.run[s] = { level: o, passed: [] }, this.save());
  }
  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin.
   */
  record(s) {
    if (s.riff === si.id)
      return this.finishTutorial(), { levelComplete: !1 };
    const { input: o } = s, c = s.passed === !0, f = this.data.stats[o], h = f[s.riff] ?? { done: 0, solo: 0, passed: 0 };
    f[s.riff] = {
      done: h.done + 1,
      passed: (h.passed ?? 0) + (c ? 1 : 0),
      solo: h.solo + (c && !s.hint ? 1 : 0),
      lastAt: s.at
    }, this.data.results = [...this.data.results, { ...s, level: s.level ?? xh(s.riff)?.number }].slice(-300);
    let w = !1;
    const x = this.data.run[o], E = this.level(o);
    return c && E.riffs.some((_) => _.id === s.riff) && !x.passed.includes(s.riff) && (x.passed = E.riffs.map((_) => _.id).filter((_) => _ === s.riff || x.passed.includes(_)), x.passed.length === E.riffs.length && (w = !0, this.data.levels[o].includes(E.number) || (this.data.levels[o] = [...this.data.levels[o], E.number].sort((_, j) => _ - j)))), this.save(), { levelComplete: w };
  }
}
function dp() {
  try {
    return localStorage;
  } catch {
    return;
  }
}
function hp() {
  const [u] = je.useState(() => new zh(new yh(), new fp(dp())));
  return je.useEffect(() => () => {
    u.stop();
  }, [u]), /* @__PURE__ */ p.jsx(ip, { game: u });
}
window.addEventListener("pagehide", () => uh());
const _c = document.getElementById("riffikaiku");
_c && Od.createRoot(_c).render(/* @__PURE__ */ p.jsx(je.StrictMode, { children: /* @__PURE__ */ p.jsx(hp, {}) }));
//# sourceMappingURL=app.js.map
